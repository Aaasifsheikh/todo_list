(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{17:function(t,e,c){},22:function(t,e,c){},23:function(t,e,c){},25:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c.n(n),a=c(5),s=c.n(a),r=(c(17),c(3)),d=(c(22),c(11)),o=(c(23),c(1)),l=function(){var t=Object(n.useState)(""),e=Object(d.a)(t,2),c=e[0],a=e[1],s=Object(r.c)((function(t){return t.todoreducer.list})),l=Object(r.b)();return Object(o.jsx)(i.a.Fragment,{children:Object(o.jsx)("div",{className:"main-div",children:Object(o.jsxs)("div",{className:"child-div",children:[Object(o.jsx)("h2",{children:"Add Your TODO List"}),Object(o.jsxs)("div",{className:"add-item",children:[Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"add item here",value:c,onChange:function(t){a(t.target.value)}}),Object(o.jsx)("button",{className:"btn btn-sm bg-success text-white",onClick:function(){return l((t=c,{type:"ADD_TODO",payload:{id:(new Date).getTime().toString(),data:t}}),a(""));var t},children:"Add"})]}),Object(o.jsx)("div",{className:"showItems",children:s.map((function(t){return Object(o.jsxs)("div",{className:"eachItem",children:[Object(o.jsx)("h3",{children:t.data}),Object(o.jsx)("button",{className:"btn btn-sm ",onClick:function(){return l({type:"DELETE_TODO",id:t.id})},children:"Delete"})]},t.id)}))})]})})})},j=function(){return Object(o.jsx)(i.a.Fragment,{children:Object(o.jsx)(l,{})})},O=c(7),b=c(12),u=c(4),h={list:[]},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":var c=e.payload,n=c.id,i=c.data;return Object(u.a)(Object(u.a)({},t),{},{list:[].concat(Object(b.a)(t.list),[{id:n,data:i}])});case"DELETE_TODO":var a=t.list.filter((function(t){return t.id!==e.id}));return Object(u.a)(Object(u.a)({},t),{},{list:a});default:return t}},x=Object(O.a)({todoreducer:m}),_=Object(O.b)(x,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(r.a,{store:_,children:Object(o.jsx)(j,{})})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.84ab30b9.chunk.js.map