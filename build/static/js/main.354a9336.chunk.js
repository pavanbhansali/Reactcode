(this.webpackJsonpmyverzeoapp=this.webpackJsonpmyverzeoapp||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(21),s=n.n(a),i=(n(49),n(10)),o=(n.p,n(50),n(3)),u=n(4),d=(Object(u.d)((function(e){return console.log("cockpit props--",e),Object(o.jsxs)("div",{children:["Cockpit",Object(o.jsx)("button",{children:"Go Back"})]})})),n(90),n(89),n(19),n(41)),j=n.n(d),l=n(15),b=n(24),h=function(e){return{type:"SET_AUTH",payload:e}},p=Object(b.b)((function(e){return Object(i.a)({},e)}),(function(e){return{sendAuthDataToStore:function(t){return e(h(t))}}}))((function(e){var t=c.a.createRef(),n=c.a.createRef();console.log("props-- App.js",e);var r=l.c.group({username:"",passwd:"",isChecked:[""],vaccineName:[""]}),a=function(e){e.preventDefault(),console.log("usertypedinput--",t.current.value),console.log("usertypedtextarea--",n.current.value)};return Object(o.jsxs)("div",{children:[Object(o.jsx)(l.b,{control:r,render:function(e){e.get,e.invalid,e.reset,e.value;return Object(o.jsxs)("form",{onSubmit:a,children:[Object(o.jsx)(l.a,{name:"username",options:{validators:l.d.required},render:function(e){var t=e.handler,n=e.touched,r=e.hasError;return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Enter Username"}),Object(o.jsx)("input",Object(i.a)({},t())),Object(o.jsx)("span",{children:n&&r("required")&&"Password is required"})]})}}),Object(o.jsx)(l.a,{name:"passwd",render:function(e){var t=e.handler;return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Enter Pasword"}),Object(o.jsx)("input",Object(i.a)({},t()))]})}}),Object(o.jsx)(l.a,{name:"isChecked",render:function(e){var t=e.handler;return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Are you Vaccinated"}),Object(o.jsx)("input",Object(i.a)({},t("checkbox")))]})}}),!0===r.get("isChecked").value?Object(o.jsx)("div",{children:Object(o.jsx)(l.a,{name:"vaccine",render:function(e){var t=e.handler;return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Enter the vaccine name"}),Object(o.jsx)("input",Object(i.a)({},t()))]})}})}):""]})}}),Object(o.jsx)("button",{onClick:function(){var e={username:r.get("username").value,password:r.get("passwd").value};j.a.post("http://localhost:9000/todo/authenticateuser",e).then((function(e){return console.log(e)}))},children:"Submit"})]})})),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},v=n(42),x={authData:{}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH":return Object(i.a)(Object(i.a)({},e),{},{authData:t.payload});default:return e}},g=Object(v.a)(f);s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(b.a,{store:g,children:Object(o.jsx)(p,{name:"alex",age:"23"})})}),document.getElementById("root")),O()}},[[75,1,2]]]);
//# sourceMappingURL=main.354a9336.chunk.js.map