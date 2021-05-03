import jsCookie from "js-cookie"
import Layout from "../components/MyLayout.js";
import axios from 'axios';
import Router from "next/router";

const indexLink = {
  display: "inline",
  textAlign: "center",
  fontSize: "1em",
  textColor: "#000000"

}


class pending extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
    
      postings: []
    
    };

  }

  componentDidMount() {
	axios.get(`http://localhost:8080/pendpost`)
	  .then(res => {
		const postings = res.data;
		this.setState({ postings: postings });

	  })

  }

  

 

  render() {
    //if(jsCookie.get("username") == null){ return Index();}
    
		return (
	  <>
	    <head>
	      <title> Pending Listings </title>
	    </head>
	    <div>
	    
		    <Layout>
				<section>
					<h1>Postings Awaiting Approval  </h1>
				</section>
				<br></br>
				<br></br>
				<section>
					{this.state.postings.length > 0 ? (
				<table id="entries">
					<tr>
						<th>Company</th>
						<th>Position Title </th>
						<th>Description</th>
						<th>Location Year</th>
						<th>Company Contact</th>
						<th>Email</th>
						<th>Position Type </th>
					</tr>
				<tbody>{this.state.postings.map(function(item, key) {
						
						return (<tr key = {key}>
                              <td>{item.company}</td>
                              <td>{item.postitle}</td>
                              <td>{item.description}</td>
                              <td>{item.location}</td>
                              <td>{item.cname}</td>
                              <td>{item.cemail}</td>
    						  <td>{item.ptype}</td>
    						  <br></br><div className="button-style">Approve</div>
    						  <br></br><div className="button-style">Reject</div>


​    						  




    						</tr>
    					)
    					
    					})}</tbody>
    			</table>
    			) : null}
    			</section>
    			<br /> <br />   
    			<br />
    			<br />
    			<br />
    			<br /> <br />
            <style jsx>{`
              h1,
              h2,
              h3,
              h4,
              a,
              td,
              p {
                color: #1f618d;          
                font-family: "Arial";
              }
    
              .button-style {
                margin: auto auto;
                cursor: pointer;
                background-color: #228b22;
                color: #ffffff;
                width: 100px;
                font-family: "Arial";
    			padding-top: -2;
              }
    
              .text-style {
                margin: auto auto;
                width: 200px;
              }
    
              input {
                margin: auto auto;
                width: 200px;
              }
    
              .description {
                font-family: "Arial";
                font-size: "10px";
              }
    
              ul {
                padding: 0;
              }
    
              li {
                list-style: none;
                margin: 5px 0;
              }
    
              a {
                text-decoration: none;
                color: blue;
              }
    
              a:hover {
                opacity: 0.6;
              }
    
              table {  
                color: #333; /* Lighten up font color */
                font-family: Helvetica, Arial, sans-serif; /* Nicer font */
                width: 100%; 
                border-collapse: 
                collapse; 
                border-spacing: 0;
              }
            
              td, th { border: 1px solid #CCC; height: 30px; } /* Make cells a bit taller */
            
              th {  
                background: #F3F3F3; /* Light grey background */
                font-weight: bold; /* Make sure they're bold */
              }
            
              td {  
                background: #FAFAFA; /* Lighter grey background */
                text-align: center; /* Center our text */
              }
            `}</style>
        </Layout>
      </div>
    </>
    );
  }
}

export default pending;
