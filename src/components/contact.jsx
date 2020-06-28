import React from "react";

function Contact(){
  let date = new Date().getFullYear();
  return(
    <div id="contact">
      <h1>Contact Me</h1>
      <p style={{fontSize:20}}>Let's work together</p>
      <div class="contact-container">
      <img className="profile" src="headshot.jpg" alt="Joe Sharick" />
      <div class="links">
      <a id="profile-link" target="_blank" href="https://github.com/Jsharick7"><i class="fa fa-github-square"></i>GitHub</a>

         <a id="" target="_blank" href="https://www.linkedin.com/in/joseph-sharick-51085674/"><i class="fa fa-linkedin-square"></i>LinkedIn</a>
         <a href="mailto:jsharick7@gmail.com"><i class="fa fa-envelope-square"></i>JSharick7@gmail.com</a>
      </div>
      </div>
      <div id="footer"><h4>©{date} Joe Sharick</h4>
      <h6>Images from Unsplash.com and Pexels.com</h6></div>
    </div>

  );
}

export default Contact;
// <a id="" target="_blank" href=""><i class="fa fa-music"></i>Musician Site</a>
