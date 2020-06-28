import React from "react";


function Project(props){
  return(

    <div class="project-tile">

        <a target="_blank" href={props.link}>

            <img src={props.imgStr} alt={props.alt} width="100%" height="170px"/>
            <p id="ptext" class="text-wrap">{props.text}</p>
            <p class="title-text"><span class="code">&lt; </span>{props.title}<span class="code"> /&gt;</span></p>
        </a>

    </div>
  )
}
export default Project;
