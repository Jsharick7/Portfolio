import React from 'react';
import Welcome from "./components/intro";
import Navbar from "./components/navbar";
import Project from "./components/project";
import Contact from "./components/contact";

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
    <div class="container">
      <h1>Project Portfolio</h1>
      <p class="lead text-muted">Here are some examples of my work. Some are
       simple API calls, and some were created to demonstrate simple responsive
        web design concepts for a curriculum. They employ a variety of tools
        including Bootstrap libraries, EJS templating, React Component architecture, and
        core HTML principles.</p>
    </div>
  </section>
  <div class="album py-5 bg-light" id="projects">
  <div class="container">
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
    </div>
      <Contact />
    </div>
  );
}

export default App;
