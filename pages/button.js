import jsCookie from "js-cookie"
import Layout from "../components/MyLayout.js";
import axios from 'axios';
import Router from "next/router";
import { loc, postitle, comp, welcome, active, logo, sublogo, adbutt, postwrapper, body, topnav } from '../styles.module.css';
import Link from 'next/link';
import {getInfo} from '../lib/utils'


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
  axios.get(`http://localhost:8080/reviews`)
    .then(res => {
    const postings = res.data;
    this.setState({ postings: postings });

    })

  }
async handleSearch(evt) {
  
  
  let user = await getInfo(evt.target.value); 
   this.setState({user});
 }
  

 

  render() {
    //if(jsCookie.get("username") == null){ return Index();}
    
    return (
    <>
      <head>
        <title> Reviews </title>
      </head>
      <div>
       <body className={body}> 
      <div className={logo}>UMW</div>
      <div className={sublogo}>CPSC Major Opportunities</div>
      <hr /> 
       <br />
    <div className={topnav}>
        <a href="/">Home</a>
        <a  href="ViewPosts">View Listings</a>
        <a href="subpost">Submit a Posting</a>
        <a className={active} href="ViewReviews">View Reviews</a>
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
                              <p className={postitle}> Review of: {item.position} at {item.company} ({item.positiondate}) </p>
                              <p className={comp}> Rating: {item.rating}/5  </p> 
                              <p >{item.review}</p>
                             <br></br><button > Flag </button>
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

