import React from "react";

export default Navbar;

function Navbar(){
  return(

    <nav class="navbar navbar-expand navbar-dark bg-dark" id="navbar">
    <a class="navbar-brand" href="#">Joe Sharick</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" >
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#welcome-section">Top</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#jtron">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

  )
}