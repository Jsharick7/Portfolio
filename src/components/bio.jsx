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
        <div class="row align-items-center">
          <div class="col-md-1">
            <div class="nav flex-row flex-md-column nav-pills" id="v-pills-tab" role="tablist">
              <a class="nav-link active" id="v-pills-about-tab" data-toggle="pill" href="#v-pills-about" role="tab" aria-controls="v-pills-about" aria-selected="false">About</a>
              <a class="nav-link" id="v-pills-skills-tab" data-toggle="pill" href="#v-pills-skills" role="tab" aria-controls="v-pills-skills" aria-selected="false">Skills</a>
            </div>
          </div>

          <div id="tab-content" class="col-md-9">
          
            <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-about" role="tabpanel" aria-labelledby="v-pills-about-tab">Based in central Pennsylvania, I'm a developer with a drive to create modern, high-quality applications and websites. As a passionate gamer myself, I use my spare time to work on fun and original mobile game projects. Software development is the perfect outlet for me to express creativity, continue learning, and dissect the fascinating and ever-changing complexity of modern programming systems.
            </div>

          <div class="tab-pane fade" id="v-pills-skills" role="tabpanel" aria-labelledby="v-pills-skills-tab"><span><h2>What I do</h2>
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
            </div>
          </div>
          </div>
          </div>
    )
  }
}
