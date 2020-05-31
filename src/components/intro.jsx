import React from "react";
import Bio from "./bio";

function Welcome(){
  return(
    <div id="welcome-section">
      <div class="blur"></div>
      
      <h1>I'm Joe</h1>
      <p>A Web Developer</p>
      <Bio />

    </div>
  )
}
export default Welcome;
