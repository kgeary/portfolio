(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{101:function(e,t,a){e.exports=a(121)},106:function(e,t,a){},107:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),i=a.n(l),o=(a(106),a(17)),c=a(28),s=a(35),m=a(157),u=a(160),p=a(161),d=a(162),g=a(170),E=a(171),h=a(68),f=a.n(h),b=a(163),v=(a(107),a(53)),y=a.n(v),w=(a(108),Object(n.createContext)({width:window.innerWidth,isLarge:window.innerWidth>700})),k=function(e){var t=e.children,a=Object(n.useState)(window.innerWidth),l=Object(s.a)(a,2),i=l[0],o=l[1],c=function(){y.a.refresh(),o(window.innerWidth)};return Object(n.useEffect)((function(){return y.a.init(),window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}}),[]),r.a.createElement(w.Provider,{value:{width:i,isLarge:i>700}},t)};var N=function(e){var t=Object(n.useContext)(w).isLarge,a=Object(n.useState)(!1),l=Object(s.a)(a,2),i=l[0],c=l[1],h=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&c(e)}};return r.a.createElement(m.a,{position:"static",color:"default",className:"appBar"},r.a.createElement(u.a,{className:"toolbar"},r.a.createElement(p.a,null,r.a.createElement("div",{className:"navContainer"},r.a.createElement(d.a,{variant:"h4",noWrap:!0,className:"navBrand"},"Kevin Geary"),t?r.a.createElement("nav",{className:"large-screen"},r.a.createElement(o.b,{exact:!0,to:"/",className:"navLink",activeClassName:"active"},"About"),r.a.createElement(o.b,{to:"/contact",className:"navLink",activeClassName:"active"},"Contact"),r.a.createElement(o.b,{to:"/portfolio",className:"navLink",activeClassName:"active"},"Portfolio")):r.a.createElement("nav",{className:"small-screen"},r.a.createElement(b.a,{edge:"start",onClick:h(!0),style:{color:"#99BBEE",borderColor:"#99BBEE"},"aria-label":"menu"},r.a.createElement(f.a,null)),r.a.createElement(g.a,{open:i,onClose:h(!1)},r.a.createElement(E.a,{onClick:h(!1),className:"mobileList"},r.a.createElement("span",{className:"mobileTitle"},"Navigation"),r.a.createElement(o.b,{exact:!0,to:"/",className:"mobileLink",activeClassName:"active"},"About"),r.a.createElement(o.b,{to:"/contact",className:"mobileLink",activeClassName:"active"},"Contact"),r.a.createElement(o.b,{to:"/portfolio",className:"mobileLink",activeClassName:"active"},"Portfolio"))))))))};a(114);var x=function(e){return r.a.createElement("footer",{className:"Footer"},r.a.createElement(o.b,{exact:!0,to:"/",className:"navLink",activeClassName:"active"},"About"),r.a.createElement(o.b,{to:"/contact",className:"navLink",activeClassName:"active"},"Contact"),r.a.createElement(o.b,{to:"/portfolio",className:"navLink",activeClassName:"active"},"Portfolio"),r.a.createElement("span",{className:"navLink",onClick:function(){return window.scrollTo(0,0)}},"Top of Page"))},j=a(122);a(115);var C=function(e){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),r.a.createElement(j.a,{className:"Main"},r.a.createElement("h1",{className:"Title"},e.title),r.a.createElement("h3",{className:"Subtitle"},e.subtitle),e.children)},S=(a(116),a(69)),L=a.n(S);var A=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{alt:"Kevin at Machu Picchu",className:"profileImage",src:L.a}),r.a.createElement("section",{className:"clearFix"},r.a.createElement("p",null,"I am a full-stack web developer located in Austin, Texas. I graduated from the University of Texas Full Stack Bootcamp and am looking for new career opportunities at this time."),r.a.createElement("p",null,"I recently relocated from Detroit, Michigan where I worked in the automotive sector programming embedded systems and desktop applications at a Tier-1 supplier. My past experience in the design, development, and testing of software has helped in my transition to web development, but I have much to learn."),r.a.createElement("p",null,"I'm passionate about technology, coding, and being part of a team that builds great things. Please follow my projects on Github and contact me if you would like to know more.")),r.a.createElement("section",null,r.a.createElement("h3",null,"Hobbies"),r.a.createElement("p",null,"When I'm not working I enjoy spending time outdoors with my wife and our dog. I also like hiking, mountain biking, and following the NBA and NFL.")),r.a.createElement("section",null,r.a.createElement("h3",null,"Education"),r.a.createElement("ul",null,r.a.createElement("li",null,"BSE, Computer Engineering",r.a.createElement("br",null),"University of Michigan, Ann Arbor"),r.a.createElement("li",null,"Graduate, University of Texas Full-Stack Bootcamp"))),r.a.createElement("section",null,r.a.createElement("h3",null,"Technology"),r.a.createElement("div",{className:"techList"},r.a.createElement("div",{style:{marginRight:"3rem"}},r.a.createElement("ul",null,r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"javascript"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Node"))),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,"Express"),r.a.createElement("li",null,"jQuery"),r.a.createElement("li",null,"MySQL"),r.a.createElement("li",null,"MongoDB"),r.a.createElement("li",null,"C#"))))))};var I=function(e){return r.a.createElement(p.a,{maxWidth:"md"},r.a.createElement(C,{title:"About Me"},r.a.createElement(A,null)))},M=a(165),P=a(49),R=a.n(P),T=a(72),B=a.n(T),D=a(73),F=a.n(D),O=a(164),G=Object(O.a)({root:{"& a":{display:"flex",flexDirection:"row",alignItems:"center",color:"hsl(240, 76%, 13%)"},"& h4":{display:"inline-block",marginLeft:"1rem"}}});var W=function(e){var t=G();return r.a.createElement(u.a,{className:t.root,disableGutters:!0},r.a.createElement(E.a,null,r.a.createElement("a",{href:"mailto:kgeary@gmail.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(M.a,{title:"Email","aria-label":"Send An Email"},r.a.createElement(B.a,null)),r.a.createElement("h4",null,"Email")),r.a.createElement("a",{href:"https://github.com/kgeary",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(M.a,{title:"Github Profile","aria-label":"Goto Github Profile"},r.a.createElement(R.a,null)),r.a.createElement("h4",null,"Github")),r.a.createElement("a",{href:"KevinGeary.pdf",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(M.a,{title:"Download My Resume","aria-label":"Download Resume"},r.a.createElement(F.a,null)),r.a.createElement("h4",null,"Resume"))))};var J=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null))};var Q=function(e){return r.a.createElement(p.a,{maxWidth:"md"},r.a.createElement(C,{title:"Contact Info"},r.a.createElement(J,null)))},U=a(88),z=a(167),_=a(166),H=a(168),X=a(86),q=a.n(X),K=a(74),V=a.n(K),$=(a(117),"https://www.github.com/kgeary/");var Y=function(e){return r.a.createElement("div",{"data-aos":"fade-up","data-aos-offset":"400","data-aos-easing":"ease-in-sine","data-aos-duration":"600",className:"Project"},r.a.createElement("a",{href:$+e.github,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h1",null,e.title),r.a.createElement("img",{src:e.img,alt:e.title,className:"projectImage"})),r.a.createElement("p",{className:"description"},r.a.createElement("span",{style:{fontWeight:"bold",display:"block"}},"Description"),r.a.createElement("span",null,e.description)),r.a.createElement("p",{className:"tags"},e.tags?e.tags.split(",").map((function(e){return e.trim()})).map((function(t){return r.a.createElement("span",{key:t,className:"tag",onClick:function(){return function(t){e.setSearch(t),window.scrollTo(0,0)}(t)}},t)})):r.a.createElement("span",null,"No Tags")),r.a.createElement("div",{className:"links"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"linkGroup"},r.a.createElement("a",{href:$+e.github,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(M.a,{title:"Github Repository","aria-label":"Goto Github Repository"},r.a.createElement(R.a,{className:"linkIcon"})),r.a.createElement("span",null,"Github")),e.deploy?r.a.createElement("a",{href:e.deploy,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(M.a,{title:"Deployed Site","aria-label":"Goto Deployed Site"},r.a.createElement(V.a,{className:"linkIcon"})),r.a.createElement("span",null,"Deployed")):null))))},Z=a(75),ee=a.n(Z),te=a(76),ae=a.n(te),ne=a(77),re=a.n(ne),le=a(78),ie=a.n(le),oe=a(79),ce=a.n(oe),se=a(80),me=a.n(se),ue=a(81),pe=a.n(ue),de=a(82),ge=a.n(de),Ee=a(83),he=a.n(Ee),fe=a(84),be=a.n(fe),ve=a(85),ye=a.n(ve),we=[{github:"workday-planner",deploy:"https://kgeary.github.io/workday-planner/",title:"Work Day Scheduler",tags:"jQuery, MomentJs",img:ee.a,description:"A day planner writte in Javascript/jQuery"},{github:"weather-dashboard",deploy:"https://kgeary.github.io/weather-dashboard/",title:"Weather Dashboard",tags:"AJAX, API, Javascript",img:ae.a,description:"A weather dashboard using Javascript and AJAX"},{github:"template-engine",title:"Template Engine",tags:"Node",img:ie.a,description:"A homebrewed server side template engine"},{github:"employee-tracker",title:"MySQL Employee Tracker",tags:"MySQL, Node",img:ce.a,description:"Node based employee tracking application. Support CRUD operations and using MySQL backed data."},{github:"express-handlebars",deploy:"https://kgeary.github.io/express-handlebars/",title:"Burger Tracker",tags:"Express, Handlebars, MySQL, Node, ORM, Sequelize",img:me.a,description:"An application to supoprt CRUD of burger orders. Uses Handlebars for templating and Sequelize ORM."},{github:"fitness-tracker",deploy:"https://kgeary.github.io/fitness-tracker/",title:"A MongoDB backed fitness tracker",tags:"API, Express, MongoDB, Mongoose, Node",img:ge.a,description:"A NoSql based fitness tracking application using Mongoose/MongoDB."},{github:"react-directory",title:"Employee Directory using React",deploy:"https://kgeary.github.io/react-directory/",tags:"React",img:he.a,description:"Interactive employee directory application built using React. Filter and sort employee tables."},{github:"atxnow",deploy:"https://kgeary.github.io/atxnow/",title:"ATX Now",tags:"AJAX, API, Javascript, jQuery, Leaflet, Pagination",img:re.a,description:"An Event Aggregator to find local events and tour dates."},{github:"movie-review-db",deploy:"https://lit-inlet-19657.herokuapp.com/",title:"Movie Reviews DB",tags:"EJS, Express, MySQL, Node",img:pe.a,description:"A Full-Stack movie review database.  Users can create, read, and delelete their reviews and view reviews from others."},{github:"roster-rocket",title:"Roster Rocket",deploy:"https://roster-rocket.herokuapp.com/",tags:"Express, MySQL, Node, React",img:be.a,description:"Full-stack school registration application. Provides different views and options based on user type (Admin/Parent). Try out the administrator account -- username: blah1@blah.com, password: abcabc"},{github:"show-ratings",deploy:"https://showratings.herokuapp.com/",title:"Interactive TV Show Ratings",tags:"Express, Node, React, Chart",img:ye.a,description:"See how each episode of a TV Series stacked up. An interactive chart with the rating of each episode across the seasons. Built using React, recharts, Express. Epsiode Ratings provided by the IMDB."}].reverse(),ke=(a(118),we.reduce((function(e,t){return e.concat(t.tags.split(",").map((function(e){return e.trim().toLowerCase()})))}),[]).sort()),Ne=Object(U.a)(new Set(ke));var xe=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],i=a[1],o=function(e){i(e.target.value)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"filterBox"},r.a.createElement(H.a,{id:"search",freeSolo:!0,options:Ne,style:{width:"300px"},onInputChange:function(e,t){i(t)},renderInput:function(e){return r.a.createElement(z.a,Object.assign({},e,{margin:"normal",size:"medium",variant:"outlined",label:"Filter Projects by Tag",value:l,onChange:o}))}}),r.a.createElement(d.a,{variant:"p",className:"numProjects"},function(){var e=we.filter((function(e){return e.tags.toLowerCase().includes(l.toLowerCase())})).length;return e?1!==e?"".concat(e," Projects Found"):"1 Project Found":"No Projects Found"}())),we.filter((function(e){return e.tags.toLowerCase().includes(l.toLowerCase())})).map((function(e){return r.a.createElement(Y,Object.assign({},e,{key:e.title,setSearch:i}))})),r.a.createElement(_.a,{color:"primary",size:"small","aria-label":"scroll back to top",onClick:function(){return window.scrollTo(0,0)}},r.a.createElement(q.a,null)))};var je=function(e){return r.a.createElement(p.a,{maxWidth:"md"},r.a.createElement(C,{title:"Portfolio"},r.a.createElement(xe,null)))};var Ce=function(e){var t=Object(c.f)();return console.log(t),r.a.createElement(p.a,{maxWidth:"md"},r.a.createElement(C,{title:"Not Found"},r.a.createElement("h3",null,"Path: ",t.pathname),r.a.createElement("h5",null,"I'm Sorry Dave. I'm afraid I can't do that.")))},Se=a(87);a.n(Se).a.config();var Le=function(){return r.a.createElement(k,null,r.a.createElement("div",{className:"App"},r.a.createElement(o.a,{basename:"/"},r.a.createElement(N,null),r.a.createElement("div",{className:"Content"},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/"},r.a.createElement(I,null)),r.a.createElement(c.a,{exact:!0,path:"/contact"},r.a.createElement(Q,null)),r.a.createElement(c.a,{exact:!0,path:"/portfolio"},r.a.createElement(je,null)),r.a.createElement(c.a,{path:"*"},r.a.createElement(Ce,null)))),r.a.createElement(x,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,a){e.exports=a.p+"static/media/kg-wide.0a38c39a.jpg"},75:function(e,t,a){e.exports=a.p+"static/media/scheduler.1d954e17.jpg"},76:function(e,t,a){e.exports=a.p+"static/media/weather.79e84eba.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/atxnow.3572fe32.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/template.fa5e7c51.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/employee-tracker.f4e18e8e.jpg"},80:function(e,t,a){e.exports=a.p+"static/media/handlebars.df7591cf.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/movie-review.37fe6d9d.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/fitness-tracker.eac979e3.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/employee-directory.7e73439f.jpg"},84:function(e,t,a){e.exports=a.p+"static/media/roster-rocket.0a4294dc.jpg"},85:function(e,t,a){e.exports=a.p+"static/media/showRatings.6e776d67.jpg"}},[[101,1,2]]]);
//# sourceMappingURL=main.40ddaa39.chunk.js.map