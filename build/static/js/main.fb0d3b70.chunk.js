(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(8),c=a.n(n),l=(a(14),a(5)),s=a(2),i=a(1),r=(a(15),a(16),a(17),a(0));var j=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),a=e.date.toLocaleString("en-US",{day:"2-digit"}),n=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__day",children:a}),Object(r.jsx)("div",{className:"expense-date__year",children:n})]})};var u=function(e){var t=Object(i.useState)(e.title),a=Object(s.a)(t,2);return a[0],a[1],Object(r.jsxs)("div",{className:"expense-item",children:[Object(r.jsx)(j,{date:e.date}),Object(r.jsx)("div",{className:"expense-item__description",children:Object(r.jsx)("h1",{children:e.title})}),Object(r.jsxs)("div",{className:"expense-item__price",children:["Rs",e.amount]})]})},o=(a(19),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:Object(r.jsx)("span",{id:"filterbyYear",children:"Filter by year"})}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(r.jsx)("option",{value:"2024",children:"2024"}),Object(r.jsx)("option",{value:"2023",children:"2023"}),Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"})]})]})})}),d=a(9),b=(a(20),function(e){var t="0%";return e.maxValue>0&&(t=Math.floor(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),x=(a(21),function(e){var t=e.dataPoints.map((function(e){return e.value})),a=Math.max.apply(Math,Object(l.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(b,{value:e.value,maxValue:a,label:e.label},e.label)}))})}),v=function(e){var t,a=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],n=Object(d.a)(e.expenses);try{for(n.s();!(t=n.n()).done;){var c=t.value;a[c.date.getMonth()].value+=c.amount}}catch(l){n.e(l)}finally{n.f()}return Object(r.jsx)(x,{dataPoints:a})};var O=function(e){var t=Object(i.useState)("2021"),a=Object(s.a)(t,2),n=a[0],c=a[1],l=e.items.filter((function(e){return e.date.getFullYear().toString()===n}));return Object(r.jsxs)("div",{className:"expenses",children:[Object(r.jsx)(o,{selected:n,onChangeFilter:function(e){c(e)}}),Object(r.jsx)(v,{expenses:l}),0===l.length?Object(r.jsx)("p",{children:"No expenses Found"}):l.map((function(e){return Object(r.jsx)(u,{title:e.title,amount:e.amount,date:e.date},e.id)}))]})},h=a(7),p=(a(22),a(23),function(e){var t=Object(i.useState)(""),a=Object(s.a)(t,2),n=a[0],c=a[1],l=Object(i.useState)(""),j=Object(s.a)(l,2),u=j[0],o=j[1],d=Object(i.useState)(""),b=Object(s.a)(d,2),x=b[0],v=b[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={title:n,amount:+u,date:new Date(x)};console.log(a),e.onSaveExpenseData(a),c(""),o(""),v("")},children:[Object(r.jsx)("div",{className:"heading",children:"Expense Tracking Application"}),Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:n,onChange:function(e){c(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:u,onChange:function(e){o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",min:"2019-01-01",max:"2023-12-31",value:x,onChange:function(e){v(e.target.value)}})]})]}),Object(r.jsx)("div",{className:"new-expense__actions",children:Object(r.jsx)("button",{type:"submit",children:"Add Expense"})})]})}),m=function(e){return Object(r.jsx)("div",{className:"new-expense",children:Object(r.jsx)(p,{onSaveExpenseData:function(t){var a=Object(h.a)(Object(h.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(a)}})})},f=[{id:"e1",title:"Paper",amount:5.12,date:new Date(2021,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2022,5,12)}],g=function(){var e=Object(i.useState)(f),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{onAddExpense:function(e){n((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(r.jsx)(O,{items:a})]})};c.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.fb0d3b70.chunk.js.map