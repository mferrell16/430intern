import Layout from "../components/MyLayout";
import jsCookie from "js-cookie";
import {subPost} from '../lib/upost'
import React from "react";
import { loc, postitle, comp, formwrapper, welcome, active, logo, sublogo, adbutt, postwrapper, body, topnav } from '../styles.module.css';
import Link from 'next/link';

class Home extends React.Component {
  constructor(props) {
    super(props);
      
    this.rounded = {
    	border: "1px solid #ccc", 
	"-moz-border-radius" : "10px", 
	"-webkit-border-radius": "10px",
	"border-radius": "10px", 
	"-moz-box-shadow": "2px 2px 3px #666",
	"-webkit-box-shadow": "2px 2px 3px #666",
	"box-shadow": "2px 2px 3px #666",
	"font-size": "20px",
	padding: "4px 7px",
	outline: 0, 
	"-webkit-appearance": "none"

    }; 
    this.newsquare = {
 width: "100%",
  padding: "12px", 
  border: "1px solid #ccc",
  "border-radius": "4px",
  "box-sizing": "border-box",
  "margin-top": "6px",
  "margin-bottom": "16px",
  resize: "vertical"



    }

       this.newsquare2 = {
 width: "100%",
  padding: "12px", 
  border: "1px solid #ccc",
  "border-radius": "4px",
  "box-sizing": "border-box",
  "margin-top": "6px",
  "margin-bottom": "16px",
  resize: "vertical",
  height: "250px"



    }


    this.h1 = {

      "text-align": "center"
    }

    this.button =  {
	color: "#e6e6e6",
	background: "#0a0a0a",
	border: "none",
	"font-size": "16px",
	"border-radius": "9px", 
	width: "200px",
	"text-align": "center",
	display: "block", 
	padding: "7px 0",
	margin: "10px auto"
  }; 

    this.state={searchterm: ''}; 
    this.response = "no"; 
    let oput = "";
    
    this.handleChange = this.handleChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.handleptypeChange = this.handleptypeChange.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleDescChange = this.handleDescChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    
  }

handleChange(event){
      var value = event.target.value;
      this.setState(function(){
        return {
          Company: value
        }
      })
    }
handleTitleChange(event){
      var value = event.target.value;
      this.setState(function(){
        return {
          title: value
        }
      })
    }
    handleDescChange(event){
      var value = event.target.value;
      this.setState(function(){
        return {
          desc: value
        }
      })
    }
    handleEmailChange(event){
      var value = event.target.value;
      this.setState(function(){
        return {
          email: value
        }
      })
    }
    handleNameChange(event){
      var value = event.target.value;
      this.setState(function(){
        return {
          name: value
        }
      })
    }
handleptypeChange(event){
      var value = event.target.value;
      this.setState(function(){
        return {
          ptype: value
        }
      })
    }

    handleLocationChange(event){
      var value = event.target.value;
      this.setState(function(){
        return {
          location: value
        }
      })
    }
    async handleSubmit(event){
      event.preventDefault();
      console.log("made it to the submit"); 
      const user = await subPost(this.state.Company, this.state.title, this.state.ptype, this.state.location, this.state.desc, this.state.email, this.state.name ); 
      this.setState({user: user});
      
      
    }

  render() {
    return (
      <div >
     <body className={body}> 
      <div className={logo}>UMW</div>
      <div className={sublogo}>CPSC Major Opportunities</div>
      <hr /> 
       <br />
    <div className={topnav}>
        <a href="/">Home</a>
        <a  href="ViewPosts">View Listings</a>
        <a className={active} href="subpost">Submit a Posting</a>
        <a href="ViewReviews">View Reviews</a>
        <a  href="subreview">Submit a Review</a>
        <br />
    </div>
    <br /> 


      
        <form className={formwrapper}  onSubmit={this.handleSubmit}>
        <h2 style= {this.h1}>Submit a Job Post </h2>
        <p> Company Name 
        
        <input
          id='Company'
          style = {this.newsquare}
          placeholder='Company Name'
          type='text'
          
          autoComplete='off'
          value = {this.state.Company}
          onChange={this.handleChange}
        /></p>

        <p> Position Title 
        <input
          id='title'
          style = {this.newsquare}
          type='postitle'
          placeholder='Position Title'
          autoComplete='off'
          value = {this.state.title}
          onChange={this.handleTitleChange}
        /></p>

 		<p> Position Type 
        <input
          id='ptype'
          style = {this.newsquare}
          type='ptype'
          placeholder='Full-time/Part-time/Internship'
          autoComplete='off'
          value = {this.state.ptype}
          onChange={this.handleptypeChange}
        /></p>


        <p> Description
        <input
          id='desc'
          style = {this.newsquare2}
          type='desc'
          placeholder='Information about the job'
          autoComplete='off'
          value = {this.state.desc}
          onChange={this.handleDescChange}
        /></p>

        <p> Location
        <input
          id='location'
          style = {this.newsquare}
          type='location'
          placeholder='Alexandria, VA'
          autoComplete='off'
          value = {this.state.location}
          onChange={this.handleLocationChange}
        /></p>

        <p> Point of Contact Name
        <input
          id='Name'
          style = {this.newsquare} 
          type='Name'
          placeholder='Name '
          autoComplete='off'
          value = {this.state.name}
          onChange={this.handleNameChange}
        /></p>

 			<p> Point of Contact Email 
        <input
          id='Email'
          style = {this.newsquare}
          type='Email'
          placeholder='sample@email.com'
          autoComplete='off'
          value = {this.state.email}
          onChange={this.handleEmailChange}
        /></p>

        <button
          style ={this.button} 
          type='submit'
          disabled={!this.state.Company}
           >
            Submit
        </button>
        {this.state.user ? <h3> {this.state.user} </h3> : null}
      </form>
        
        </body>
        </div>

);
  }
}
export default Home; 
