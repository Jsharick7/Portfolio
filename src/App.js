import React from 'react';
import Welcome from "./components/intro";
import Navbar from "./components/navbar";
import Project from "./components/project";
import Contact from "./components/contact";
import Resume from "./components/resume";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import data from "./components/data.json"

const projectArray = data.projectArray;


function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />

      <section class="jumbotron text-center" id="jtron">
    <div class="jumbo-container">
      <h1>Project Portfolio</h1>
      <p class="lead text-muted">Below are some examples of my recent work. Some are
       simple API calls, and some were created to demonstrate responsive
        web design concepts. They employ various tools including the React.js framework,
        EJS view templates on the Node.js runtime environment. I have also included my resume below.
        </p>
        <Resume />
    </div>
  </section>
  <div class="album" id="projects">

  <div class="row">
    {projectArray.map((project, idx) => {
              return (
              <Project
                id={idx}
                key={idx}
                title={project.title}
                imgStr={project.imgStr}
                link={project.link}
                alt={project.alt}
                text={project.text}
              />)})}
    </div>

    </div>
      <Contact />
    </div>
  );
}

export default App;
