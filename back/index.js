const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const argon2 = require("argon2");

app.set("port", 8080);
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 

const Pool = require("pg").Pool;
const config = {
	host: "localhost",
	user: "intern430",
	password: "4al6z3n79k3",
	database: "internship"
};

const pool = new Pool(config);

app.get("/hello", (req, res) => {
	res.json("hello");
});

app.listen(app.get("port"), () => {
	console.log(`Find the server at: http://localhost:${app.get("port")}/`);
	 // eslint-disable-line no-console
});

app.get("/reviews", async (req, res) => {
	const template = "SELECT  * FROM REVIEWS WHERE FLAG=0"
	const response = await pool.query(template);
	console.log(response.rows); 
		res.json(response.rows); 

	
})
app.get("/posts", async (req, res) => {
	const template = "SELECT  * FROM POSTINGS WHERE FLAG=0"
	const response = await pool.query(template);
	console.log(response.rows); 
		res.json(response.rows); 

	
})
app.get("/pendpost", async (req, res) => {
	const template = "SELECT  * FROM POSTINGS WHERE FLAG=1"
	const response = await pool.query(template);
	console.log(response.rows); 
		res.json(response.rows); 

	
})

app.get("/pendrev", async (req, res) => {
	const template = "SELECT  * FROM REVIEWS WHERE FLAG=1"
	const response = await pool.query(template);
	console.log(response.rows); 
		res.json(response.rows); 

	
})

app.get("/flagrev", async (req, res) => {
	const idnum = req.query.idnum; 
	const template = "UPDATE REVIEWS SET Flag=1 WHERE id=$1"
	const response = await pool.query(template, [idnum]);
	console.log(response.rows); 
		res.json("Review has been flagged."); 

	
})

app.get("/unflagrev", async (req, res) => {
	const idnum = req.query.idnum; 
	const template = "UPDATE REVIEWS SET Flag=0 WHERE id=$1"
	const response = await pool.query(template, [idnum]);
	console.log(response.rows); 
		res.json("Review has been flagged."); 

	
})

app.get("/flagpost", async (req, res) => {
	const idnum = req.query.idnum; 
	const template = "UPDATE POSTINGS SET Flag=0 WHERE id=$1"
	const response = await pool.query(template, [idnum]);
	console.log(response.rows); 
		res.json("Review has been flagged."); 

	
})

app.get("/addreview", async (req, res) => {
	console.log("made it here");
	const pos = req.query.position; 
	const company = req.query.company; 
	const rating = req.query.rating; 
	const review = req.query.review; 
	const name = req.query.name; 
	const email = req.query.email; 
	const pdate = req.query.pdate; 

	var today = new Date(); 
	var dd = today.getDate(); 
	var mm = today.getMonth(); 
	var yyyy = today.getFullYear(); 

	if(dd<10) 
		{
    dd='0'+dd;
	} 

	if(mm<10) 
	{
    mm='0'+mm;
	} 
	today = yyyy + '-' + mm+'-'+dd;
 
	console.log(pos, rating, review, name, email ); 
	const template = "Insert into reviews(Name, Company, Position, PositionDate, Stars, Review, Rdate) Values ($1, $2, $3, $4, $5, $6, $7 )"
	const response = await pool.query(template, [ name, company, pos, pdate, rating, review, today]);
		res.json("Review Submitted");

	});


app.get("/addpost", async (req, res) => {
	console.log("made it here");
	const company = req.query.company; 
	const title = req.query.title; 
	const description = req.query.description; 
	const location = req.query.location; 
	const email = req.query.email; 
	const ptype = req.query.ptype; 
	const name = req.query.name; 

	var today = new Date(); 
	var dd = today.getDate(); 
	var mm = today.getMonth(); 
	var yyyy = today.getFullYear(); 

	if(dd<10) 
		{
    dd='0'+dd;
	} 

	if(mm<10) 
	{
    mm='0'+mm;
	} 
	today = yyyy + '-' + mm+'-'+dd;
 

	const template = "Insert into postings(Company, PosTitle, Description, Location, Cemail, Cname, PType) Values ($1, $2, $3, $4, $5, $6, $7)"
	const response = await pool.query(template, [company, title, description, location, email, name, ptype]);
		res.json("Posting Submitted");

	});



app.get("/create", async (req, res) => {
  let hash;
  const username = req.query.username;
  const password = req.query.password;
   
  try {
    hash = await argon2.hash(password, "abcdefghijklmnop");
    console.log("HASH " + hash);
    const query = "INSERT INTO login (email, password) VALUES ($1, $2)";
    const result = await pool.query(query, [username, hash]);
    //console.log(result);
    if (result.rowCount == 1) {
      res.json("User created");
    } else {
      res.json("User not created");
    }
  } catch (err) {
    console.log("ERROR " + err);
    if (err.message.search("duplicate") != -1) {
      res.json("Username taken");
    }
  }
});


app.get("/api/login", async (req, res) => {
  console.log(req.query);
  const username = req.query.username;
  const password = req.query.password;
  let status = "no"; 
  try {
    const query = "SELECT password from login where email = $1";
    const result = await pool.query(query, [username]);
    if (result.rowCount == 1) {
      console.log(result.rows[0].password);
      if (await argon2.verify(result.rows[0].password, password)) {
        status = "Log In successful";
      } else {
        status ="Password incorrect";
      }
    } else {
      status = "username not found";
    }

    const temp = "Select * from login where email = $1";
    const resp = await pool.query(temp, [username]); 
    if(resp.rowCount ==0 ){
    	const names = [{status: status}];
    	console.log(names);
    	res.json(names);
    }
    else{

    	const names = resp.rows.map(function(item) {
					//let x =  item.lipid_total_g / item.kcal; 
 				return ({status: status, username: item.email});
 			});
    	console.log(names);
    	res.json(names);
    }
    

  } catch (err) {
    console.log("ERROR " + err);
  }
});








app.get("/api", async (req, res) => {
	const csearch = req.query.q; 
	let i =0; 
	console.log(csearch);

try {

			const template = "SELECT DISTINCT * from reviews where company ILIKE $1 or position ILIKE $1 or review ILIKE $1 " 
			const response = await pool.query(template, ["%" + csearch + "%"]);
			console.log(response.rows);
			const name = response.rows.map(function(item) {
 				return ({name: item.name, company: item.company, position: item.position, pdate: item.positiondate, rating: item.stars, review: item.review,today: item.rdate});
 			});
			//console.log(name);
			res.json(name); 


		


	} catch (err) {
		console.error("Error running query " + err);
		
	}
	});

