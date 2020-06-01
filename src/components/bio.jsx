import React from "react";
import $ from "jquery";

export default class Bio extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      collapsed : false,
      text: ">>"
    }
}
  componentDidMount = () => {


    }



  render(){
    return(
      <div id="bio">
      <img className="profile" src="headshot.jpg" alt="Joe Sharick" />
      <span><h2>Skills</h2>
          <ul id="skills">

            <li>HTML/XML</li>
            <li>CSS/SASS</li>
            <li>React</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Express/AJAX</li>
            <li>MongoDB/Mongoose</li>
            <li>SQL</li>
          </ul>
          </span>


      </div>
    )
  }
}
