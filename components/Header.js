import Link from 'next/link';
import jsCookie from "js-cookie";

const linkStyle = {
  "text-align" : "right", 
  "margin-right" : "25px",
  "margin-bottom": "5px",
  "display": "flex",
  "display": "inline",
  "float": "left",
  "color": "white"
 
  
};

const imgg = {
  width : 50
};
const head = {
  border: '1px solid #DDD',
  background: "#00305e",
  height: 75, 

};

const Header = () => (
  <div style = {head} >
    
    <h2> </h2> 
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>

    <Link href="/postings">
      <a style={linkStyle}>Postings</a>
    </Link>

    <Link href="/Reviews">
      <a style={linkStyle}>Reviews</a>
    </Link>

 { jsCookie.get("name") ? 
<Link href="/logout">
        <a style={linkStyle} >Logout</a>
      </Link> :

    <Link href="/login">
      <a style={linkStyle}>post</a>
    </Link>}

 { jsCookie.get("name") ? null: 
    <Link href="/create">
      <a style={linkStyle}>Create Account</a>
    </Link>}

  

      <Link > 
     <a style={linkStyle}> {jsCookie.get("name")} </a> 
      </Link>
  </div>

);

export default Header;
