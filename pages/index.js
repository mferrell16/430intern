import Layout from '../components/MyLayout';
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



export default function Index() {
  return (
    <Layout>
    <p> </p>
	<h1>Welcome to the UMW Internship Page. Please log in to view postings</h1>
	<a href="/subreview" style={button}>Login </a>
 	</Layout>
  );
}

