import React from "react";
import Bio from "./bio";

function Welcome(){
  return(
    <div id="welcome-section">
      <div class="blur"></div>

      <h1>I'm Joe</h1>
      <h2>A Web Developer</h2>
      
      <Bio />

    </div>
  )
}
export default Welcome;
