(this["webpackJsonpcursor-react"]=this["webpackJsonpcursor-react"]||[]).push([[0],{24:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(17),i=c.n(s),r=(c(24),c(18)),l=c(11),o=c.p+"static/media/verified.23524915.svg",j=c(1),d="Anakin Skywalker",m="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",h="@dart_vader",b="WTF? Who is Ray? Why she is Skywalker? Luke...?",u="https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",f="26 Feb";function x(){return Math.floor(1e3*Math.random())}var O=function(){return Object(j.jsxs)("div",{className:"post",children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("div",{className:"header_icon",children:Object(j.jsx)("img",{src:m,alt:"authorIcon"})}),Object(j.jsxs)("div",{className:"header_content",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"name",children:d}),Object(j.jsx)("span",{className:"verified",children:Object(j.jsx)("img",{src:o,alt:"verified"})}),Object(j.jsxs)("span",{className:"header_additional",children:[h," - ",f]}),Object(j.jsx)("span",{className:"reveal_sign",children:" \u036e "})]}),Object(j.jsx)("div",{className:"content",children:b})]})]}),Object(j.jsx)("main",{className:"body",children:Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:u,alt:"post_image"})})}),Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)("div",{className:"footer_icon",children:Object(j.jsxs)("span",{className:"footer_value",children:[" ",Object(j.jsx)(l.a,{})," ",x()]})}),Object(j.jsx)("div",{className:"ooter_icon",children:Object(j.jsxs)("span",{className:"footer_value",children:[" ",Object(j.jsx)(l.c,{})," ",x()]})}),Object(j.jsx)("div",{className:"footer_icon",children:Object(j.jsxs)("span",{className:"footer_value",children:[" ",Object(j.jsx)(l.b,{})," ",x()]})}),Object(j.jsx)("div",{className:"footer_icon",children:Object(j.jsx)(r.a,{})})]})})]})},p=c(16),N=(c(26),c.p+"static/media/contact-book.38d43d01.png"),g=[{id:1,firstName:"Barney",lastName:"Stinson",phone:"+380956319521",gender:"male"},{id:2,firstName:"Robin",lastName:"Scherbatsky",phone:"+380931460123",gender:"female"},{id:3,firstName:"Unknown",lastName:"number",phone:"+380666666666"},{id:4,firstName:"Lily",lastName:"Aldrin",phone:"+380504691254",gender:"female"},{id:5,firstName:"Marshall",lastName:"Eriksen",phone:"+380739432123",gender:"male"},{id:6,firstName:"Ted",lastName:"Mosby",phone:"+380956319521",gender:"male"},{id:7,firstName:"Tracy (The Mother)",lastName:"McConnell",phone:"+380688953248",gender:"female"},{id:8,firstName:"Victoria",lastName:"the baker girl",phone:"+380932574895",gender:"female"},{id:9,firstName:"The Captain",lastName:"",phone:"+380976589521",gender:"female"}];function v(e){return Object(j.jsxs)("div",{className:"filter_box",children:[Object(j.jsxs)("label",{htmlFor:"male",children:[Object(j.jsx)("input",{onChange:e.onChange,type:"checkbox",id:"male",name:"male",value:"male"}),"Male"]}),Object(j.jsxs)("label",{htmlFor:"female",children:[Object(j.jsx)("input",{onChange:e.onChange,type:"checkbox",id:"female",name:"female",value:"female"}),"Female"]}),Object(j.jsxs)("label",{htmlFor:"not_specified",children:[Object(j.jsx)("input",{onChange:e.onChange,type:"checkbox",id:"not_specified",name:"not_specified",value:"undefined"}),"Not specified"]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})}function k(e){return Object(j.jsxs)("div",{className:"contact_box",children:[Object(j.jsxs)("div",{className:"content_box_user",children:[Object(j.jsx)("img",{src:N,className:"user",alt:"user"}),Object(j.jsx)("span",{children:"".concat(e.contact.firstName," ").concat(e.contact.lastName)}),Object(j.jsxs)("span",{className:"gender",children:["male"===e.contact.gender?"&#9794;":"female"===e.contact.gender?"&#9792;":"&#x2047;",' alt="gender"']})]}),Object(j.jsx)("p",{children:e.contact.phone}),Object(j.jsx)("hr",{})]})}var _=function(){var e=Object(n.useState)(g),t=Object(p.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(p.a)(s,2),r=i[0],l=i[1];return Object(n.useEffect)((function(){document.querySelectorAll('input[type="checkbox"]').forEach((function(e){e.checked=!0}))}),[]),Object(n.useEffect)((function(){var e=new RegExp(r,"gi"),t=g.filter((function(t){return Object.values(t).some((function(t){return t.toString().search(e)>=0}))}));a(t)}),[r]),Object(j.jsx)("div",{className:"inner",children:Object(j.jsxs)("div",{className:"container_hw18",children:[Object(j.jsx)("h2",{className:"title",children:"Contacts"}),Object(j.jsx)("input",{className:"search_input",placeholder:"SEARCH",type:"search",name:"search",onChange:function(e){l(e.target.value)},value:r}),Object(j.jsx)(v,{onChange:function(){var e=document.querySelectorAll('input[type="checkbox"]:checked'),t=[];e.forEach((function(e){t.push(e.value)}));var c=g.filter((function(e){return!(e.gender||!t.includes("undefined"))||t.includes(e.gender)}));a(c)}}),c.map((function(e){return Object(j.jsx)(k,{contact:e},e.id)}))]})})},y=c(10),C=c(3);c(27);function w(){var e=function(e){document.querySelectorAll(".main_link").forEach((function(e){e.style.color="rgb(209, 209, 209)"})),e.target.style.color="rgb(33, 219, 243)"};return Object(j.jsxs)("div",{className:"nav_links",children:[Object(j.jsx)(y.b,{className:"main_link",to:"/home",onClick:e,children:"Home"}),Object(j.jsx)(y.b,{className:"main_link",to:"/twitter_post",onClick:e,children:"Homework 17"}),Object(j.jsx)(y.b,{className:"main_link",to:"/contact_list",onClick:e,children:"Homework 18"})]})}var S=function(){return Object(j.jsx)(y.a,{children:Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(w,{}),Object(j.jsxs)("div",{id:"content",children:[Object(j.jsx)(C.a,{path:"/twitter_post",component:O}),Object(j.jsx)(C.a,{path:"/contact_list",component:_})]})]})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),F()}},[[36,1,2]]]);
//# sourceMappingURL=main.f691da0e.chunk.js.map