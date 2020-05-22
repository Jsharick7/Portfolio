import React from "react";

function Resume(){
  return(

    <div>
        <p>
        <button class="btn btn-primary" data-toggle="collapse"
        href="#multiCollapseExample1" aria-expanded="false"
        aria-controls="multiCollapseExample1">Click To Toggle Resume</button>
        </p>
        <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card card-body">
            <iframe src="Resume_JS.pdf" width="100%" height="500px"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
