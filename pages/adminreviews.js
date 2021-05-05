import jsCookie from "js-cookie"
import Layout from "../components/MyLayout.js";
import axios from 'axios';
import Router from "next/router";
import { loc, postitle, comp, welcome, active, logo, sublogo, adbutt, postwrapper, body, topnav } from '../styles.module.css';
import Link from 'next/link';

const indexLink = {
  display: "inline",
  textAlign: "center",
  fontSize: "1em",
  textColor: "#000000"

}
const hstyle = {
  textColor: "#FFFFFF"

}


class pending extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
    
      reviews: []
    
    };

  }

  componentDidMount() {
	axios.get(`http://localhost:8080/pendrev`)
	  .then(res => {
		const reviews = res.data;
		this.setState({ reviews: reviews});

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
	    
		       
      <body className={body}> 
      <div className={logo}>UMW</div>
      <div className={sublogo}>CPSC Major Opportunities</div>
      <hr /> 
       <br />
    <div className={topnav}>
        <a href="/">Home</a>
        <a  href="adminposts">Pending Posts</a>
        <a  className={active} href="adminreviews">Flagged Reviews</a>
        <br />
    </div>
    <br /> 



					<h1 style={hstyle}> Flagged Reviews </h1>
	
				<br></br>
				<section>
					{this.state.reviews.length > 0 ? (
				<table id="entries">
					<tr>
						<th>Reviewer</th>
						<th>Company </th>
						<th>Position</th>
						<th>Position Date</th>
						<th>Stars</th>
						<th>Review</th>
					</tr>
				<tbody>{this.state.reviews.map(function(item, key) {
						
						return (<tr key = {key}>
                              <td>{item.name}</td>
                              <td>{item.company}</td>
                              <td>{item.position}</td>
                              <td>{item.positiondate}</td>
                              <td>{item.stars}</td>     
    						  <td>{item.review}</td>
    						  <div className="button-style">Remove</div>
    						  <br></br><div className="button-style">Ignore</div>

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
              h2,
              h3,
              h4,
              a,
              td,
              p {
                color: #1f618d;          
                font-family: "Arial";
              }
              h1{
                color: #ffffff; 
                text-align: center;
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
        </body>
      </div>
    </>
    );
  }
}

export default pending;
