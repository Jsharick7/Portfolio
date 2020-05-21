(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('{"projectArray":[{"title":"Weather API App","imgStr":"https://i.ibb.co/Ct4fTz5/weather-Thumb.png","link":"https://stormy-hamlet-34986.herokuapp.com/","alt":"Weather API","text":"A simple API call to retrieve weather information based on ZIP code."},{"title":"My Blog","imgStr":"https://iili.io/J1Ankl.png","link":"https://pacific-ocean-63591.herokuapp.com/","alt":"My Blog","text":"A multi-page site using EJS to create section templates and cross reference elements."},{"title":"Random Quote Machine","imgStr":"https://i.ibb.co/938vphF/quotegenthumb.png","link":"https://csb-uoskc.netlify.app/","alt":"Random Quote Machine","text":"A simple React project that calls an API to fetch and display some motivation."},{"title":"To-Do List App","imgStr":"https://iili.io/J0tjte.png","link":"https://frozen-anchorage-59073.herokuapp.com/","alt":"To-Do List","text":"Synced with the MongoDB Atlas cloud to store and keep track of multiple to-do lists."},{"title":"Tribute Page","imgStr":"https://iili.io/J0VlEl.png","link":"https://codepen.io/jsharick7/full/NWGjPxJ","alt":"Tribute Page","text":"An early project, a simple tribute page to an esteemed composer."},{"title":"Newsletter API","imgStr":"https://iili.io/J0tXA7.png","link":"https://calm-cliffs-76131.herokuapp.com/","alt":"Newsletter API","text":"Uses express routing calls to communicate with my Mail Chimp account."},{"title":"Sample Documentation Page","imgStr":"https://iili.io/J0WrSS.png","link":"https://codepen.io/jsharick7/full/QWjqLrw","alt":"Sample Documentation Page","text":"Reorganized a functional documentation page of a topic I find most useful."},{"title":"Sample Survey Form","imgStr":"https://iili.io/J0WsDu.png","link":"https://codepen.io/jsharick7/full/gOaWpGp","alt":"Survey Form","text":"Stylized form using plain HTML and CSS."}]}')},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(2),i=a.n(r);a(9);var c=function(){return n.a.createElement("div",{id:"welcome-section"},n.a.createElement("div",{class:"blur"}),n.a.createElement("h1",null,"I'm Joe"),n.a.createElement("p",null,"A Web Developer"))},o=function(){return n.a.createElement("nav",{class:"navbar navbar-expand navbar-dark bg-dark",id:"navbar"},n.a.createElement("a",{class:"navbar-brand",href:"#"},"Joe Sharick"),n.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{class:"navbar-toggler-icon"})),n.a.createElement("div",{class:"collapse navbar-collapse"},n.a.createElement("ul",{class:"navbar-nav ml-auto"},n.a.createElement("li",{class:"nav-item"},n.a.createElement("a",{class:"nav-link",href:"#welcome-section"},"Top")),n.a.createElement("li",{class:"nav-item"},n.a.createElement("a",{class:"nav-link",href:"#jtron"},"Projects")),n.a.createElement("li",{class:"nav-item"},n.a.createElement("a",{class:"nav-link",href:"#contact"},"Contact")))))};var s=function(e){return n.a.createElement("div",{class:"col-xs-12 col-sm-6 col-lg-4"},n.a.createElement("div",{class:"card mb-5 ml-2 mr-2 project-tile"},n.a.createElement("a",{target:"_blank",href:e.link},n.a.createElement("img",{src:e.imgStr,alt:e.alt,width:"100%",height:"170px"}),n.a.createElement("div",{class:"card-body"},n.a.createElement("p",{class:"card-text text-wrap"},e.text),n.a.createElement("p",{class:"title-text"},n.a.createElement("span",{class:"code"},"< "),e.title,n.a.createElement("span",{class:"code"}," />"))))))};var m=function(){return n.a.createElement("div",{id:"contact"},n.a.createElement("h1",null,"Contact Me"),n.a.createElement("p",{style:{fontSize:20}},"Let's work together"),n.a.createElement("div",{class:"links"},n.a.createElement("a",{id:"profile-link",target:"_blank",href:"https://github.com/Jsharick7"},n.a.createElement("i",{class:"fa fa-github-square"}),"GitHub"),n.a.createElement("a",{id:"",target:"_blank",href:"https://www.facebook.com/jsharick7/"},n.a.createElement("i",{class:"fa fa-facebook-square"}),"Facebook"),n.a.createElement("a",{id:"",target:"_blank",href:"https://www.linkedin.com/in/joseph-sharick-51085674/"},n.a.createElement("i",{class:"fa fa-linkedin-square"}),"LinkedIn"),n.a.createElement("a",{href:"mailto:jsharick7@gmail.com"},n.a.createElement("i",{class:"fa fa-envelope-square"})," JSharick7@gmail.com")),n.a.createElement("div",{id:"footer"},n.a.createElement("h4",null,"\xa9Joe Sharick")))},p=(a(10),a(11),a(3).projectArray);var u=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o,null),n.a.createElement(c,null),n.a.createElement("section",{class:"jumbotron text-center",id:"jtron"},n.a.createElement("div",{class:"container"},n.a.createElement("h1",null,"Project Portfolio"),n.a.createElement("p",{class:"lead text-muted"},"Here are some examples of my work. Some are simple API calls, and some were created to demonstrate simple responsive web design concepts for a curriculum. They employ a variety of tools including Bootstrap libraries, EJS templating, React Component architecture, and core HTML principles."))),n.a.createElement("div",{class:"album py-5 bg-light",id:"projects"},n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"row"},p.map((function(e,t){return n.a.createElement(s,{id:t,key:t,title:e.title,imgStr:e.imgStr,link:e.link,alt:e.alt,text:e.text})}))))),n.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.72f106f1.chunk.js.map