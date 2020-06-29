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
      <div class="accordion" id="bio">

        <div class="card-header" id="aboutHeading">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#about" aria-expanded="true" aria-controls="about">
              About
            </button>
          </h2>
        </div>

        <div id="about" class="collapse show" aria-labelledby="aboutHeading" data-parent="#bio">
          <div class="card-body">
            Based in central Pennsylvania, I'm a developer with a drive to create modern, high-quality applications and websites. As a passionate gamer myself, I use my spare time to work on fun and original mobile game projects. Software development is the perfect outlet for me to express creativity, continue learning, and dissect the fascinating and ever-changing complexity of modern programming systems.
          </div>
        </div>


    <div class="card-header" id="skillsHeading">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#skills" aria-expanded="false" aria-controls="skills">
          Skills
        </button>
      </h2>
    </div>
    <div id="skills" class="collapse" aria-labelledby="skillsHeading" data-parent="#bio">
      <div class="card-body">
         <ul>
          <li>HTML/CSS/JavaScript: This group of core technologies is essential for creating responsive websites and applications, leading to a positive user experience.</li>
          <li>JQuery: Adds a layer of dynamic responsiveness to different elements of your applications.</li>
          <li>SQL/MongoDB: Different projects call for different database management schemas, whether more structured and relational, or more dynamic and variable.</li>
          <li>APIs: Retrieving and using information from remote servers to be used in applications.</li>
          <li>React: A powerful framework with the ability to manage state and efficiently render changes dynamically.</li>
          <li>Node.js/PHP: Both are viable back-end environments. I am partial to Node and its vast library of add-ons available through NPM.</li>
          <li>Git: A version control environment which allows branched collaboration and ensures a working deployment state.</li>
         </ul>
      </div>
    </div>


    <div class="card-header" id="contactHeading">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#contactTop" aria-expanded="false" aria-controls="contactTop">
          Contact
        </button>
      </h2>
    </div>
    <div id="contactTop" class="collapse" aria-labelledby="contactHeading" data-parent="#bio">
      <div class="card-body">
         I would love to hear from you. <br></br>
        Send me a message: <a href="mailto:jsharick7@gmail.com">JSharick7@gmail.com</a>
      </div>
    </div>

</div>
    )
  }
}
