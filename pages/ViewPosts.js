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
  axios.get(`http://localhost:8080/posts`)
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
        <title> Job Posts </title>
      </head>
      <div>
      
        <Layout>
        <section>
          <h1>View All Postings  </h1>
        </section>
        <br></br>
        <br></br>
        <section>
          {this.state.postings.length == 0 ? null : 
        
         
        this.state.postings.map(function(item, key) {
            
            return (<div key = {key}>
                              <p>{item.company}</p>
                              <p>{item.postitle}</p>
                              <p>{item.description}</p>
                              <p>{item.location}</p>
                              <p>{item.cname}</p>
                              <p>{item.cemail}</p>
                  <p>{item.ptype}</p>

                </div>
              
              
              )}
          
          )}
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

