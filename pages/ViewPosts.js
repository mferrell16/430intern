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
      
      <body className={body}> 
      <div className={logo}>UMW</div>
      <div className={sublogo}>CPSC Major Opportunities</div>
      <hr /> 
       <br />
    <div className={topnav}>
        <a href="/">Home</a>
        <a className={active} href="ViewPosts">View Listings</a>
        <a href="subpost">Submit a Posting</a>
        <a href="ViewReviews">View Reviews</a>
        <a href="subreview">Submit a Review</a>
        <br />
    </div>
    <br /> 
       
        <br></br>
        <br></br>
        <section>
          {this.state.postings.length == 0 ? null : 
        
         
        this.state.postings.map(function(item, key) {
            
            return (<div key = {key}>
              <div className = {postwrapper}> 
                              <p className = {loc}>{item.location}</p>
                              <p className= {postitle}>{item.postitle}</p>
                              <p className = {comp}>{item.company}</p>
                              <p >{item.description}</p>
                              <p> <b> {item.cname} ({item.cemail})</b></p>
                             
                         </div> 
                             <br /> 

                </div>
              
              
              )}
          
          )}
          </section>
          <br /> <br />   
          <br />
          <br />
          <br />
          <br /> <br />
            
        </body> 
      </div>
    </>
    );
  }
}

export default pending;

