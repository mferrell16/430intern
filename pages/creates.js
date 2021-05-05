import Layout from "../components/MyLayout";
import jsCookie from "js-cookie";
import {getAccount} from '../lib/ut'
import React from "react";
import { formwrapper, welcome, logo, sublogo, adbutt, centext, centextw1, body } from '../styles.module.css';

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
    width: "400px",
	outline: 0, 
	"-webkit-appearance": "none"

    }; 
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
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleLnameChange = this.handleLnameChange.bind(this);
      this.handleFnameChange = this.handleFnameChange.bind(this);
      this.handleGTermChange = this.handleGTermChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    
  }

handleChange(event){
      var value = event.target.value;
      this.setState(function(){
        return {
          username: value
        }
      })
    }

    handlePasswordChange(event){
      var value = event.target.value;
      this.setState(function(){
        return {
          password: value
        }
      })
    }
handleFnameChange(event){
      var value = event.target.value;
      this.setState(function(){
        return {
          fname: value
        }
      })
    }
    handleLnameChange(event){
      var value = event.target.value;
      this.setState(function(){
        return {
          lname: value
        }
      })
    }

    handleGTermChange(event){
      var value = event.target.value;
      this.setState(function(){
        return {
          GradTerm: value
        }
      })
    }
    async handleSubmit(event){
      event.preventDefault();
      console.log("made it to the submit"); 
      const user = await getAccount(this.state.username, this.state.password); 
      this.setState({user: user});
      
      
    }

  render() {
    return (

      <div style={{ textAlign: "center" }}>
      <body className={body}> 
    <div className={logo}>UMW</div>
    <div className={sublogo}>CPSC Major Opportunities</div>
    <hr /> 
      
        <form  className={formwrapper} onSubmit={this.handleSubmit}>
        <h2>Create Student Account </h2>
        <p>
        
        <input
          id='email'
          style = {this.rounded} 
          placeholder='email@student.umw.edu'
          type='text'
          autoComplete='off'
          value = {this.state.username}
          onChange={this.handleChange}
        /></p>

        <p>
        <input
          id='paswsword'
          style = {this.rounded} 
          type='password'
          placeholder='Password'
          autoComplete='off'
          value = {this.state.password}
          onChange={this.handlePasswordChange}
        /></p>

        <p>
        <input
          id='FirstName'
          style = {this.rounded} 
          type='FirstName'
          placeholder='First Name'
          autoComplete='off'
          value = {this.state.fname}
          onChange={this.handleFnameChange}
        /></p>

         <p>
        <input
          id='LastName'
          style = {this.rounded} 
          type='LastName'
          placeholder='Last Name'
          autoComplete='off'
          value = {this.state.Lname}
          onChange={this.handleLnameChange}
        /></p>

         <p>
        <input
          id='GradTerm'
          style = {this.rounded} 
          type='GradTerm'
          placeholder='Graduation Term (Spring 2020)'
          autoComplete='off'
          value = {this.state.GradTerm}
          onChange={this.handleGTermChange}
        /></p>



        <button
          style ={this.button} 
          type='submit'
          disabled={!this.state.username}
           >
            Submit
        </button>
      </form>
        {this.state.user ? <h3> {this.state.user} </h3> : null}
        
</body>
        </div>

);
  }
}
export default Home; 