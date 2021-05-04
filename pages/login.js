import Layout from "../components/MyLayout";
import jsCookie from "js-cookie";
import {getLogin} from '../lib/util'
import React from "react";

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

    async handleSubmit(event){
      event.preventDefault();
      console.log("made it to the submit"); 
      const user = await getLogin(this.state.username, this.state.password); 
      
      this.setState({user: user});
      console.log(this.state.user[0].status);
      if(this.state.user[0].username != undefined ){
          console.log("inside the if statement"); 
            jsCookie.set("name", this.state.user[0].username); 
            
            console.log("made a cookie");
          }
      
    }

  render() {
    
    return (
      

      <div style={{ margin: 20, padding: 20, border: '1px solid #DDD', textAlign: "center" }}>
        <Layout />



      <h2>login</h2>
        <form  onSubmit={this.handleSubmit}>
        <p>
        
        <input
          id='username'
          style = {this.rounded} 
          placeholder='email'
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
          placeholder='password'
          autoComplete='off'
          value = {this.state.password}
          onChange={this.handlePasswordChange}
        /></p>


        <button
          style ={this.button} 
          type='submit'
          disabled={!this.state.username}
           >
            Submit
        </button>
       <a href="/create">Create Account</a>
       <p> </p> 
      <a href="/create">Forgot Password </a>

      </form> 
     

        {this.state.user ? <h2> {this.state.user[0].status}</h2> : null}
        </div>

);






  }
}
export default Home; 