(this.webpackJsonpcms=this.webpackJsonpcms||[]).push([[0],{29:function(e,a,t){e.exports=t(60)},52:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(26),s=t.n(c),r=t(28),i=t(9),o=t(11),m=t(2),d=t(1),u=t.n(d),E=t(10),p=t.n(E),v=function(){return p.a.get("/api/user/getUser")},g=function(e){return p.a.post("/api/user/signup",e)},h=function(e){return p.a.post("/api/user/login",e)},N=function(){return p.a.get("/api/user/logout")},b=function(e,a){return p.a.put("/api/user/"+e,a)},f=function(e){return p.a.post("/api/task/create",e)},w=function(){return p.a.get("/api/task")},y=function(e){return p.a.put("/api/task/"+e)};var x=class{static authenticateUser(e){localStorage.setItem("token",e)}static isUserAuthenticated(){return null!==localStorage.getItem("token")}static deauthenticateUser(){localStorage.removeItem("token")}static getToken(){return localStorage.getItem("token")}},k=n.a.createContext({}),S=n.a.createContext({updateContextTask:()=>{}});t(52);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".sidenav");u.a.Sidenav.init(e)}));var C=function(){var e=Object(l.useContext)(S),a=Object(l.useContext)(k),t=Object(m.g)();console.log(a);var c=a=>{a.preventDefault(),console.log("logout"),N().then(a=>{200===a.status?(console.log("React Logout"),x.deauthenticateUser(),e(),t.push("/")):console.log("Some error ocurred")}).catch(e=>{console.log(e)})},s=()=>a?n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null,n.a.createElement("a",{href:"/account"},"Account: ",a.email)),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/logout",onClick:c},"LogOut"))):n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null,n.a.createElement(o.b,{to:"/signup"},"Signup")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/login"},"Login")));return n.a.createElement("header",null,n.a.createElement("nav",{className:"blue",role:"navigation"},n.a.createElement("div",{className:"nav-wrapper"},n.a.createElement("a",{href:"/",className:"brand-logo"},"Communify"),n.a.createElement("a",{href:"/","data-target":"mobile-demo",className:"sidenav-trigger"},n.a.createElement("i",{className:"material-icons"},"menu")),n.a.createElement("ul",{className:"right hide-on-med-and-down"},s()))),n.a.createElement("ul",{className:"sidenav",id:"mobile-demo"},s()))},O=n.a.createContext(),j=t(4);var T=function(){var e=Object(l.useContext)(S),a=Object(l.useState)({title:"",description:"",category:"",location:""}),t=Object(i.a)(a,2),c=t[0],s=t[1],r=e=>{var a=e.target,t=a.id,l=a.value;s(e=>Object(j.a)(Object(j.a)({},e),{},{[t]:l}))},o=e=>{console.log(e),s(a=>Object(j.a)(Object(j.a)({},a),{},{taskExpires:e}))};return document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".datepicker"),a=document.querySelectorAll("select");u.a.FormSelect.init(a),u.a.Datepicker.init(e,{container:"body",format:"dd-mm-yyyy",onSelect:o})})),n.a.createElement("div",{className:"row"},n.a.createElement("form",{className:"col s12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s6"},n.a.createElement("input",{placeholder:"Task Title",id:"title",type:"text",className:"validate",value:c.title,onChange:r}),n.a.createElement("label",{htmlFor:"title"},"Title")),n.a.createElement("div",{className:"input-field col s6"},n.a.createElement("input",{placeholder:"This task is about...",id:"description",type:"text",className:"validate",value:c.description,onChange:r}),n.a.createElement("label",{htmlFor:"description"},"Description"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{placeholder:"Location task to be completed",id:"location",type:"text",className:"validate",value:c.location,onChange:r}),n.a.createElement("label",{htmlFor:"location"},"Location"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s6"},n.a.createElement("input",{placeholder:"Expiry Date",id:"taskExpires",type:"text",className:"datepicker"}),n.a.createElement("label",{htmlFor:"taskExpires"},"Task Expires")),n.a.createElement("div",{className:"input-field col s6"},n.a.createElement("select",{placeholder:"This task category is",id:"category",type:"select",value:c.category,onChange:r},n.a.createElement("option",{value:"",disabled:!0},"Choose your option"),n.a.createElement("option",{value:"Physical"},"Physical"),n.a.createElement("option",{value:"Education"},"Education"),n.a.createElement("option",{value:"IT"},"IT")),n.a.createElement("label",null,"Category"))),n.a.createElement("div",{className:"row"},n.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",onClick:a=>{if(console.log(x.getToken()),a.preventDefault(),c.title){var t={title:c.title,description:c.description,category:c.category,location:c.location,taskExpires:c.taskExpires,createdBy:x.getToken()};f(t).then(a=>{console.log(a.data),200===a.status?(e(),s({title:"",description:"",category:"",location:"",taskExpires:""}),console.log("Successful Save of task"),u.a.toast({html:"Successful Save of task"})):console.log("Some error ocurred")}).catch(e=>{console.log(e),console.log("Some error ocurred"),u.a.toast({html:"Invalid inputs: Ensure all data is entered correctly"})})}else console.log("Please enter valid username and password"),u.a.toast({html:"Invalid inputs: Ensure all data is entered correctly"})}},"Submit",n.a.createElement("i",{className:"material-icons right"},"send")))))};t(57);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".collapsible");u.a.Collapsible.init(e)}));var L=()=>{var e=Object(l.useContext)(O),a=Object(l.useContext)(S);return n.a.createElement("ul",{className:"collapsible"},e.map(t=>n.a.createElement("li",{key:t._id},n.a.createElement("div",{className:"collapsible-header"},n.a.createElement("p",{className:"listPad"},"TITLE: ",t.title),n.a.createElement("p",{className:"listPad center-align"},"DESCRIPTION: ",t.description),n.a.createElement("p",{className:"listPad right-align"}," CREATOR: ",t.createdBy)),n.a.createElement("div",{className:"collapsible-body"},n.a.createElement("h6",null,"Location: ",t.location),n.a.createElement("h6",null,"Task Status: ",t.taskStatus),n.a.createElement("h6",null,"Task Expires: ",t.taskExpires),n.a.createElement("h6",null,"Status Value: ",t.statusValue),n.a.createElement("h6",null,"Accepted By: ",t.completedBy),n.a.createElement("a",{className:"btn-floating btn-small waves-effect waves-light blue",href:"#",onClick:l=>{l.preventDefault(),(t=>{var l=e.filter(e=>"tm@gg.com"===e.completedBy);y(t).then(e=>{200===e.status?(console.log("Successful update of task"),u.a.toast({html:"You Accepted the Task"}),a(),console.log(l)):console.log("Some error ocurred")}).catch(e=>{console.log(e)})})(t._id)}},n.a.createElement("i",{className:"material-icons"},"add"))))))};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".slider");u.a.Slider.init(e);var a=document.querySelectorAll(".modal");u.a.Modal.init(a);var t=document.querySelectorAll(".parallax");u.a.Parallax.init(t)}));var A=()=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"parallax-container valign-wrapper"},n.a.createElement("div",{className:"section no-pad-bot"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row center"}))),n.a.createElement("div",{className:"parallax"},n.a.createElement("img",{src:"./img/handbg.jpg",alt:"Unsplashed background img 2"}))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section"},n.a.createElement("div",{className:"slider"},n.a.createElement("ul",{className:"slides"},n.a.createElement("li",null,n.a.createElement("img",{src:"./img/volunt1.png",alt:"Volunteer"}),n.a.createElement("div",{className:"caption center-align"},n.a.createElement("h3",null,"This is our big Tagline!"),n.a.createElement("h5",{className:"light grey-text text-lighten-3"},"Here's our small slogan."))),n.a.createElement("li",null,n.a.createElement("img",{src:"./img/volunt2.jpg",alt:"Volunteers"}),n.a.createElement("div",{className:"caption left-align"},n.a.createElement("h3",null,"Left Aligned Caption"),n.a.createElement("h5",{className:"light grey-text text-lighten-3"},"Here's our small slogan."))),n.a.createElement("li",null,n.a.createElement("img",{src:"./img/volunt3.jpg",alt:"Volunteer"}),n.a.createElement("div",{className:"caption right-align"},n.a.createElement("h3",null,"Right Aligned Caption"),n.a.createElement("h5",{className:"light grey-text text-lighten-3"},"Here's our small slogan."))),n.a.createElement("li",null,n.a.createElement("img",{src:"./img/volunt4.jpg",alt:"Volunteer"}),n.a.createElement("div",{className:"caption center-align"},n.a.createElement("h3",null,"This is our big Tagline!"),n.a.createElement("h5",{className:"light grey-text text-lighten-3"},"Here's our small slogan."))))))),n.a.createElement("div",{className:"parallax-container valign-wrapper"},n.a.createElement("div",{className:"section no-pad-bot"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row center"}))),n.a.createElement("div",{className:"parallax"},n.a.createElement("img",{src:"./img/handbg.jpg",alt:"Unsplashed background img 2"}))),n.a.createElement("div",{className:"card-panel"},n.a.createElement("h3",{className:"center-align blue text-white"},"TASKBOARD"),n.a.createElement(L,null)),n.a.createElement("div",{id:"modal1",className:"modal"},n.a.createElement("div",{className:"modal-content"},n.a.createElement(T,null))));t(58);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".collapsible");u.a.Collapsible.init(e)}));var P=e=>n.a.createElement("ul",{className:"collapsible"},e.data.map(e=>n.a.createElement("li",{key:e._id},n.a.createElement("div",{className:"collapsible-header"},n.a.createElement("p",{className:"listPad"},"TITLE: ",e.title),n.a.createElement("p",{className:"listPad center-align"},"DESCRIPTION: ",e.description),n.a.createElement("p",{className:"listPad right-align"}," CREATOR: ",e.createdBy)),n.a.createElement("div",{className:"collapsible-body"},n.a.createElement("h6",null,"Location: ",e.location),n.a.createElement("h6",null,"Task Status: ",e.taskStatus),n.a.createElement("h6",null,"Task Expires: ",e.taskExpires),n.a.createElement("h6",null,"Status Value: ",e.statusValue),n.a.createElement("h6",null,"Accepted By: ",e.completedBy)))));var F=function(){var e=Object(l.useContext)(S),a=Object(l.useContext)(k),t=Object(l.useState)({}),c=Object(i.a)(t,2),s=c[0],r=c[1],o=e=>{var a=e.target,t=a.id,l=a.value;r(e=>Object(j.a)(Object(j.a)({},e),{},{[t]:l}))};return n.a.createElement("div",{className:"row"},n.a.createElement("form",{className:"col s12"},n.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",onClick:e=>{e.preventDefault();var t=a;console.log(t),r(t)}},"Populate User Info",n.a.createElement("i",{className:"material-icons right"},"get_app")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s6"},n.a.createElement("input",{placeholder:"i.e. John",id:"firstName",type:"text",className:"validate",value:s.firstName,onChange:o}),n.a.createElement("label",{htmlFor:"firstName"},"First Name")),n.a.createElement("div",{className:"input-field col s6"},n.a.createElement("input",{placeholder:"i.e. Smith",id:"lastName",type:"text",className:"validate",value:s.lastName,onChange:o}),n.a.createElement("label",{htmlFor:"lastName"},"Last Name"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{placeholder:"57, Example drive, Sometown, Some State",id:"address",type:"text",className:"validate",value:s.address,onChange:o}),n.a.createElement("label",{htmlFor:"address"},"Address"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{placeholder:"Wood work, carpentary",id:"skills",type:"text",className:"validate",value:s.skills,onChange:o}),n.a.createElement("label",{htmlFor:"skills"},"Skills"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{placeholder:"Worked at Joe's builders",id:"experience",type:"text",className:"validate",value:s.experience,onChange:o}),n.a.createElement("label",{htmlFor:"experience"},"Experience"))),n.a.createElement("div",{className:"row"},n.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",onClick:t=>{if(t.preventDefault(),s.firstName&&s.lastName&&s.address){var l=a._id,n={firstName:s.firstName,lastName:s.lastName,address:s.address,skills:s.skills.split(","),experience:s.experience.split(",")};console.log(l),b(l,n).then(a=>{200===a.status?(console.log("Successful update of User"),u.a.toast({html:"Successful update of task"}),e()):console.log("Some error ocurred")}).catch(e=>{console.log(e)})}else console.log("Please enter valid username and password")}},"Submit",n.a.createElement("i",{className:"material-icons right"},"send")))))};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".collapsible");u.a.Collapsible.init(e);var a=document.querySelectorAll(".modal");u.a.Modal.init(a);var t=document.querySelectorAll(".tabs");u.a.Tabs.init(t)}));var D=()=>{var e,a,t,c,s=Object(l.useContext)(k),r=Object(l.useContext)(O);if(r){if(console.log(r),e=r.filter(e=>e.completedBy===s.email),a=r.filter(e=>e.createdBy===s.email),s.skills){var i=0;t=s.skills.map(e=>(console.log(e),i++,n.a.createElement("div",{className:"chip",key:i},e," ")))}else t="Loading...";if(s.experience){c=s.experience.map(e=>(console.log(e),n.a.createElement("div",{className:"chip",key:1},e," ")))}else c="Loading..."}return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12"},n.a.createElement("div",{className:"card sticky-action hoverable"},n.a.createElement("div",{className:"card-content center waves-effect waves-block waves-light"},n.a.createElement("img",{src:"https://avatars.dicebear.com/api/initials/".concat(s.firstName," ").concat(s.lastName,".svg?options[top][]=longHair"),alt:"",className:"circle center responsive-img z-depth-5",height:"30%",width:"30%"})),n.a.createElement("div",{className:"card-content blue-grey darken-1"},n.a.createElement("span",{className:"card-title activator white-text text-darken-4"},s.firstName," ",s.lastName,n.a.createElement("i",{className:"material-icons right"},"more_vert")),n.a.createElement("p",null,n.a.createElement("a",{href:"#",className:"yellow-text"},"Status Level: ",s.statusLevel)),n.a.createElement("p",null,n.a.createElement("a",{href:"#",className:"yellow-text"},"Status Points: ",s.statusPoints))),n.a.createElement("div",{className:"card-tabs"},n.a.createElement("ul",{className:"tabs tabs-fixed-width"},n.a.createElement("li",{className:"tab"},n.a.createElement("a",{className:"active",href:"#test4"},"Profile")),n.a.createElement("li",{className:"tab"},n.a.createElement("a",{href:"#test5"},"Accepted Tasks")),n.a.createElement("li",{className:"tab"},n.a.createElement("a",{href:"#test6"},"Created Tasks")))),n.a.createElement("div",{className:"card-content grey lighten-4"},n.a.createElement("div",{id:"test4"},n.a.createElement("div",{className:"right"},n.a.createElement("a",{className:"waves-effect waves-light btn modal-trigger",href:"#modal2"},n.a.createElement("i",{className:"material-icons"},"create")),n.a.createElement("div",{id:"modal2",className:"modal"},n.a.createElement("div",{className:"modal-content"},n.a.createElement(F,null)))),n.a.createElement("h6",null,"Full Name "),n.a.createElement("p",null,s.firstName," ",s.lastName),n.a.createElement("h6",null,"e-Mail: "),n.a.createElement("p",null,s.email),n.a.createElement("h6",null,"Address: "),n.a.createElement("p",null,s.address),n.a.createElement("h6",null,"Skills:"),t,n.a.createElement("h6",null,"Experience: "),c),n.a.createElement("div",{id:"test5"},n.a.createElement(P,{data:e})),n.a.createElement("div",{id:"test6"},n.a.createElement(P,{data:a}))),n.a.createElement("div",{className:"card-action blue-grey lighten-2"},n.a.createElement("a",{className:"waves-effect waves-light btn modal-trigger",href:"#modal1"},"Create New Task"),n.a.createElement("div",{id:"modal1",className:"modal"},n.a.createElement("div",{className:"modal-content"},n.a.createElement(T,null)))),n.a.createElement("div",{className:"card-reveal"},n.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Communify Status",n.a.createElement("i",{className:"material-icons right"},"close")),n.a.createElement("h5",null,"Scout = 0 - 200 points"),n.a.createElement("h5",null,"Good Samaritan = 200 - 500 points"),n.a.createElement("h5",null,"Champion = 500 - 1000 points"),n.a.createElement("h5",null,"Local Legend = 1000+ points")))))))},I=()=>n.a.createElement("div",null,n.a.createElement("h1",null,"404 Page Not Found"),n.a.createElement("h1",null,n.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")));var U=function(e){var a=Object(l.useContext)(S),t=(Object(m.g)(),Object(l.useState)({firstName:"",lastName:"",email:"",password:""})),c=Object(i.a)(t,2),s=c[0],r=c[1],o=e=>{var a=e.target,t=a.id,l=a.value;r(e=>Object(j.a)(Object(j.a)({},e),{},{[t]:l}))};return n.a.createElement("div",{className:"row"},n.a.createElement("form",{className:"col s12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s6"},n.a.createElement("input",{placeholder:"i.e. John",id:"firstName",type:"text",className:"validate",value:s.firstName,onChange:o}),n.a.createElement("label",{htmlFor:"firstName"},"First Name")),n.a.createElement("div",{className:"input-field col s6"},n.a.createElement("input",{placeholder:"i.e. Smith",id:"lastName",type:"text",className:"validate",value:s.lastName,onChange:o}),n.a.createElement("label",{htmlFor:"lastName"},"Last Name"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{placeholder:"jsmith@email.com",id:"email",type:"email",className:"validate",value:s.email,onChange:o}),n.a.createElement("label",{htmlFor:"email"},"Email"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{placeholder:"P@sSw0rd",id:"password",type:"password",className:"validate",value:s.password,onChange:o}),n.a.createElement("label",{htmlFor:"password"},"Password"))),n.a.createElement("div",{className:"row"},n.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",onClick:e=>{if(e.preventDefault(),s.email&&s.password&&s.firstName&&s.lastName){var t={email:s.email,password:s.password,firstName:s.firstName,lastName:s.lastName};g(t).then(e=>{console.log(e.data),200===e.status?(r({firstName:"",lastName:"",email:"",password:""}),console.log("Successful Save of User"),x.authenticateUser(e.data.email),a(),window.location.href="/account"):console.log("Some error ocurred")}).catch(e=>{console.log(e)})}else console.log("Please enter valid username and password")}},"Submit",n.a.createElement("i",{className:"material-icons right"},"send")))))};var B=function(e){var a=Object(l.useContext)(S),t=Object(m.g)(),c=Object(l.useState)({email:"",password:""}),s=Object(i.a)(c,2),r=s[0],o=s[1],d=e=>{var a=e.target,t=a.id,l=a.value;o(e=>Object(j.a)(Object(j.a)({},e),{},{[t]:l}))};return n.a.createElement("div",{className:"row"},n.a.createElement("form",{className:"col s12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{placeholder:"jsmith@email.com",id:"email",type:"email",className:"validate",value:r.email,onChange:d}),n.a.createElement("label",{htmlFor:"email"},"Email"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{placeholder:"P@sSw0rd",id:"password",type:"password",className:"validate",value:r.password,onChange:d}),n.a.createElement("label",{htmlFor:"password"},"Password"))),n.a.createElement("div",{className:"row"},n.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",onClick:e=>{if(e.preventDefault(),r.email&&r.password){var l={email:r.email,password:r.password};h(l).then(e=>{console.log(e.data),200===e.status?(o({email:"",password:""}),console.log("Login of User"),x.authenticateUser(e.data.email),a(),t.push("/account")):console.log("Some error ocurred")}).catch(e=>{console.log(e)})}else console.log("Please enter valid username and password")}},"Submit",n.a.createElement("i",{className:"material-icons right"},"send")))))};function q(e){var a=e.component,t=Object(r.a)(e,["component"]);return n.a.createElement(m.b,Object.assign({},t,{render:e=>x.isUserAuthenticated()?n.a.createElement(a,e):n.a.createElement(m.a,{to:{pathname:"/login"}})}))}var R=function(){var e=Object(l.useState)({}),a=Object(i.a)(e,2),t=a[0],c=a[1],s=Object(l.useState)([]),r=Object(i.a)(s,2),d=r[0],u=r[1],E=()=>{var e=t._id;console.log(e),w().then(e=>{console.log("Get All Updated Context Tasks"),console.log(e.data),u(e.data)}),p()},p=()=>{v().then(e=>{console.log(e.data),c(e.data)})};return Object(l.useEffect)(()=>{p(),E()},[]),n.a.createElement(k.Provider,{value:t},n.a.createElement(O.Provider,{value:d},n.a.createElement(S.Provider,{value:E},n.a.createElement("div",null,n.a.createElement(o.a,null,n.a.createElement(C,null),n.a.createElement(m.d,null,n.a.createElement(m.b,{exact:!0,path:"/",component:A}),n.a.createElement(m.b,{exact:!0,path:"/home",component:A}),n.a.createElement(m.b,{exact:!0,path:"/signup",component:U}),n.a.createElement(q,{exact:!0,path:"/account",component:D}),n.a.createElement(m.b,{exact:!0,path:"/login",component:B}),n.a.createElement(m.b,{path:"*",component:I})))))))};t(59);s.a.render(n.a.createElement(R,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.5a1184f7.chunk.js.map