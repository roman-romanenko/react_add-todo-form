(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),s=a(2),r=a(6),c=a(7),l=(a(14),a(1)),o=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],u=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],d=a(9),m=a.n(d),j=a(0),b=function(e){var t=e.user;return Object(j.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},h=function(e){var t=e.todo,a=t.title,n=t.user,i=t.id,s=t.completed;return Object(j.jsxs)("article",{"data-id":i,className:m()("TodoInfo",{"TodoInfo--completed":s}),children:[Object(j.jsx)("h2",{className:"TodoInfo__title",children:a}),n&&Object(j.jsx)(b,{user:n})]})},f=function(e){var t=e.todos;return Object(j.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(j.jsx)(h,{todo:e},e.id)}))})};function O(e){return o.find((function(t){return t.id===e}))||null}var p=u.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:O(e.userId)})})),x=Object(r.a)(u).sort((function(e,t){return t.id-e.id}))[0].id,N=function(){var e=Object(l.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(""),c=Object(s.a)(i,2),u=c[0],d=c[1],m=Object(l.useState)(!1),b=Object(s.a)(m,2),h=b[0],N=b[1],_=Object(l.useState)(!1),v=Object(s.a)(_,2),y=v[0],S=v[1],g=Object(l.useState)(p),I=Object(s.a)(g,2),C=I[0],k=I[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"App__title",children:"Add todo for users"}),Object(j.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),0===a.trim().length&&N(!0),0!==Number(u)?a.trim().length>0&&0!==Number(u)&&(k((function(e){return[].concat(Object(r.a)(e),[(t=a,n=Number(u),{id:x+=1,completed:!1,title:t,userId:n,user:O(n)})]);var t,n})),n(""),d(""),N(!1),S(!1)):S(!0)},children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("label",{className:"field__label",children:[Object(j.jsx)("p",{className:"form__title",children:" Title: "}),Object(j.jsx)("input",{className:"field__form",type:"text","data-cy":"titleInput",value:a,onChange:function(e){n(e.target.value),h&&N(!1)}})]}),h&&Object(j.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("p",{className:"form__title",children:" Users: "}),Object(j.jsxs)("select",{className:"field__form","data-cy":"userSelect",name:"user",value:u,onChange:function(e){d(e.target.value),y&&S(!1)},children:[Object(j.jsx)("option",{value:"0",children:"Choose a user"}),o.map((function(e){var t=e.id,a=e.name;return Object(j.jsx)("option",{value:t,children:a},t)}))]}),y&&Object(j.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",className:"button",children:"Add"})]}),Object(j.jsx)(f,{todos:C})]})};i.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ecf02537.chunk.js.map