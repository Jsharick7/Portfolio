import React from "react";


function Project(props){
  return(

    <div class="col-xs-12 col-sm-6 col-lg-4">

              <div class="card mb-5 ml-2 mr-2 project-tile">
              <a target="_blank" href={props.link}>
                <img src={props.imgStr} alt={props.alt} width="100%" height="170px"/>

                <div class="card-body">
                <p class="card-text text-wrap">{props.text}</p>
                    <p class="title-text"><span class="code">&lt; </span>{props.title}<span class="code"> /&gt;</span></p>


                </div>

                </a>
              </div>

            </div>
  )
}
export default Project;
