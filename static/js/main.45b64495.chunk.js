(this["webpackJsonpcursor-react"]=this["webpackJsonpcursor-react"]||[]).push([[0],{24:function(e,c,t){},26:function(e,c,t){},27:function(e,c,t){},36:function(e,c,t){"use strict";t.r(c);var n=t(2),a=t.n(n),s=t(17),i=t.n(s),r=(t(24),t(18)),l=t(11),o=t.p+"static/media/verified.23524915.svg",j=t(1),d="Anakin Skywalker",m="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",h="@dart_vader",b="WTF? Who is Ray? Why she is Skywalker? Luke...?",u="https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",f="26 Feb";function x(){return Math.floor(1e3*Math.random())}var p=function(){return Object(j.jsxs)("div",{className:"post",children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("div",{className:"header_icon",children:Object(j.jsx)("img",{src:m,alt:"authorIcon"})}),Object(j.jsxs)("div",{className:"header_content",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"name",children:d}),Object(j.jsx)("span",{className:"verified",children:Object(j.jsx)("img",{src:o,alt:"verified"})}),Object(j.jsxs)("span",{className:"header_additional",children:[h," - ",f]}),Object(j.jsx)("span",{className:"reveal_sign",children:" \u036e "})]}),Object(j.jsx)("div",{className:"content",children:b})]})]}),Object(j.jsx)("main",{className:"body",children:Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:u,alt:"post_image"})})}),Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)("div",{className:"footer_icon",children:Object(j.jsxs)("span",{className:"footer_value",children:[" ",Object(j.jsx)(l.a,{})," ",x()]})}),Object(j.jsx)("div",{className:"ooter_icon",children:Object(j.jsxs)("span",{className:"footer_value",children:[" ",Object(j.jsx)(l.c,{})," ",x()]})}),Object(j.jsx)("div",{className:"footer_icon",children:Object(j.jsxs)("span",{className:"footer_value",children:[" ",Object(j.jsx)(l.b,{})," ",x()]})}),Object(j.jsx)("div",{className:"footer_icon",children:Object(j.jsx)(r.a,{})})]})})]})},O=t(16),g=(t(26),[{id:1,firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{id:2,firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{id:3,firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666"},{id:4,firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{id:5,firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{id:6,firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319521",gender:"male"}]);function N(e){return Object(j.jsxs)("div",{className:"filter_box",children:[Object(j.jsxs)("label",{htmlFor:"male",children:[Object(j.jsx)("input",{onChange:e.onChange,type:"checkbox",id:"male",name:"male",value:"male"}),"Male"]}),Object(j.jsxs)("label",{htmlFor:"female",children:[Object(j.jsx)("input",{onChange:e.onChange,type:"checkbox",id:"female",name:"female",value:"female"}),"Female"]}),Object(j.jsxs)("label",{htmlFor:"not_specified",children:[Object(j.jsx)("input",{onChange:e.onChange,type:"checkbox",id:"not_specified",name:"not_specified",value:"undefined"}),"Not specified"]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})}function v(e){return Object(j.jsxs)("div",{className:"contact_box",children:[Object(j.jsxs)("div",{className:"content_box_user",children:[Object(j.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/456/456212.png",className:"user",alt:"user"}),Object(j.jsx)("span",{children:"".concat(e.contact.firstName," ").concat(e.contact.lastName)}),Object(j.jsx)("img",{className:"gender",src:"male"===e.contact.gender?"https://image.flaticon.com/icons/png/512/1340/1340619.png":"female"===e.contact.gender?"https://image.flaticon.com/icons/png/512/766/766514.png":"https://image.flaticon.com/icons/png/512/57/57108.png",alt:"gender"})]}),Object(j.jsx)("p",{children:e.contact.phone}),Object(j.jsx)("hr",{})]})}var k=function(){var e=Object(n.useState)(g),c=Object(O.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)(""),i=Object(O.a)(s,2),r=i[0],l=i[1];return Object(n.useEffect)((function(){document.querySelectorAll('input[type="checkbox"]').forEach((function(e){e.checked=!0}))}),[]),Object(n.useEffect)((function(){var e=new RegExp(r,"gi"),c=g.filter((function(c){return Object.values(c).some((function(c){return c.toString().search(e)>=0}))}));a(c)}),[r]),Object(j.jsx)("div",{className:"inner",children:Object(j.jsxs)("div",{className:"container_hw18",children:[Object(j.jsx)("h2",{className:"title",children:"Contacts"}),Object(j.jsx)("input",{className:"search_input",placeholder:"SEARCH",type:"search",name:"search",onChange:function(e){l(e.target.value)},value:r}),Object(j.jsx)(N,{onChange:function(){var e=document.querySelectorAll('input[type="checkbox"]:checked'),c=[];e.forEach((function(e){c.push(e.value)}));var t=g.filter((function(e){return!(e.gender||!c.includes("undefined"))||c.includes(e.gender)}));a(t)}}),t.map((function(e){return Object(j.jsx)(v,{contact:e},e.id)}))]})})},_=t(10),y=t(3);t(27);function C(){var e=function(e){document.querySelectorAll(".main_link").forEach((function(e){e.style.color="rgb(209, 209, 209)"})),e.target.style.color="rgb(33, 219, 243)"};return Object(j.jsxs)("div",{className:"nav_links",children:[Object(j.jsx)(_.b,{className:"main_link",to:"/home",onClick:e,children:"Home"}),Object(j.jsx)(_.b,{className:"main_link",to:"/load",onClick:e,children:"Homework 17"}),Object(j.jsx)(_.b,{className:"main_link",to:"/contracts",onClick:e,children:"Homework 18"})]})}var F=function(){return Object(j.jsx)(_.a,{children:Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(C,{}),Object(j.jsxs)("div",{id:"content",children:[Object(j.jsx)(y.a,{path:"/load",component:p}),Object(j.jsx)(y.a,{path:"/contracts",component:k})]})]})})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,s=c.getLCP,i=c.getTTFB;t(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),S()}},[[36,1,2]]]);
//# sourceMappingURL=main.45b64495.chunk.js.map