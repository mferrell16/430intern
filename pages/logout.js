import Layout from "../components/MyLayout";
import jsCookie from "js-cookie";
import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    jsCookie.remove('name');
    jsCookie.remove('zip');
  }


  render() {
    return (
      <div style={{ margin: 20, padding: 20, border: '1px solid #DDD', textAlign: "center" }}>
        <Layout />
        <p>
            You have been logged out 
          </p>
      </div>
);
  }
}
export default Home; 