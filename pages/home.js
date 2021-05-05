import Layout from '../components/MyLayout';
import Image from 'next/image'; 

const button =  {
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

const body = 
{
    "background-color": "#00305e"
};

const welcome = {
	"background-image": "../static/back.jpg", 
    "background-repeat" : "no-repeat", 
    "background-size": "cover"

}; 
const logo = {
	"color": "white",
    "font-family": "Georgia",
    "font-size": "96px",
    "position": "relative",
    "margin": "0"
}; 
const sublogo = 
{
    "color": "white",
    "font-family": "Georgia, Arial",
    "font-size": "21px",
    "position": "relative",
    "margin": "0"
}; 


export default function Index() {
  return (
    <body style={body}> 
     <Image
        src="../static/back.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    <div style={logo}>UMW </div>
    <div style={sublogo}>CPSC Major Opportunities</div>
   <h1> hello mom </h1> 
    </body> 
  );
}

