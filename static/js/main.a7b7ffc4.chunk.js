(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{38:function(e,t,r){},52:function(e,t,r){},53:function(e,t,r){},55:function(e,t,r){},67:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(11),c=r.n(s),i=(r(38),r(15)),u=r(18),o=r(7),l=(r(52),r(53),r(54),r(17)),d=r(8),j=r(80),b=(r(55),r(79)),m=r(1);Array(),Array();var h=function(e){var t=Object(n.useState)([]),r=Object(o.a)(t,2),a=r[0],s=r[1],c=function(e){return localStorage.setItem("Plans Array",JSON.stringify(a)),Object(m.jsx)(j.a,{style:{width:"18rem"},className:"grid",children:Object(m.jsxs)(j.a.Body,{children:[Object(m.jsxs)(j.a.Title,{children:["Plan #",e.id," "]}),Object(m.jsx)(l.b,{to:"Plans/".concat(e.uuid),children:Object(m.jsx)("button",{children:"Edit Plan"})}),Object(m.jsx)(j.a.Text,{children:e.date}),Object(m.jsx)("button",{onClick:function(){console.log("button pressed"),function(e,t){if(window.confirm("Are you sure you want to delete this plan?")){var r=Object(u.a)(a);console.log("plans array",a),console.log(t.id);var n=r.indexOf(t);console.log("index is",n),-1!==n&&(r.splice(n,1),console.log("plan deleted"),console.log("new array is",r),s(r))}}(0,e)},children:"-"}),Object(m.jsx)("button",{onClick:function(){!function(e){s([].concat(Object(u.a)(a),[{id:e.id,uuid:Object(b.a)(),name:e.name,date:e.date,years:e.years}]));var t=a.length;console.log("index: ",t)}(e)},children:"Duplicate Plan"})]})})};return Object(m.jsxs)("div",{className:"grid",children:[Object(m.jsx)("button",{onClick:function(){s([].concat(Object(u.a)(a),[{id:a.length,uuid:Object(b.a)(),name:"",date:(new Date).toLocaleDateString(),years:Array()}]));var e=a.length;console.log("index: ",e);var t=[];e<=0&&t.push(a[0]),1===e&&t.push(a[0]),e>1&&t.push(a[e-1])},children:"Add a plan +"}),a.map((function(e){return Object(m.jsx)("li",{children:c(e)},e.uuid)}))]})},O=r(81),f=r(16);function p(e,t){for(var r=0;r<e.length;r++)if(e[r].uuid===t)return r;return-1}function x(e,t){var r=e.map((function(e){return e}));switch(t.type){case"ADD SEMESTER":var n=t,a=p(r,n.uuid),s=r[a],c=(new Array).concat(s.semesters);return c.push({name:n.name,start:n.start,end:n.end,uuid:n.semesterUuid}),r[a]={index:r[a].index,uuid:r[a].uuid,semesters:c},r;case"ADD YEAR":var i=t,u={index:i.index,uuid:i.uuid,semesters:new Array};return r.push(u),r;case"DELETE SEMESTER":var o=t,l=p(r,o.uuid),d=r[l].semesters.filter((function(e){return e.uuid!==o.semesterUuid}));return r[l]={index:r[l].index,uuid:r[l].uuid,semesters:d},r;case"DELETE YEAR":var j=t;return r.filter((function(e){return e.uuid!==j.uuid}));default:throw Error("".concat(t.type," not implemented!"))}}var v=function(e){var t=Object(n.useReducer)(x,void 0,void 0===e?function(){return new Array}:e),r=Object(o.a)(t,2),a=r[0],s=r[1],c=function(e,t){s({type:"ADD YEAR",uuid:e,index:t})},i=function(e,t){s({type:"DELETE SEMESTER",uuid:e,semesterUuid:t})},u=function(e){s({type:"DELETE YEAR",uuid:e})};return{value:a,push:c,putSemester:function(e,t,r,n,a){s({type:"ADD SEMESTER",uuid:e,name:a,start:r,end:n,semesterUuid:t})},removeSemester:i,removeYear:u,clear:function(e){!function(e,t,r,n,a){if(void 0!==a&&-1!==p(e,a)){var s,c=Object(f.a)(e[p(e,a)].semesters);try{for(c.s();!(s=c.n()).done;)r(a,s.value.uuid)}catch(m){c.e(m)}finally{c.f()}}else if(void 0===a){var i,u=new Array,o=Object(f.a)(e);try{for(o.s();!(i=o.n()).done;){var l=i.value;u.push({semesters:[],index:l.index,uuid:l.uuid}),n(l.uuid)}}catch(m){o.e(m)}finally{o.f()}for(var d=0,j=u;d<j.length;d++){var b=j[d];t(b.uuid,b.index)}}}(a,c,i,u,e)}}},g=r(41),y=r.n(g),C=r(73),S=r(72),E=r(43),D=r(76),w=r(82),k=r(37),R=r(46),A=r(78),N=r(77),T=function(e){return e.isOpen?c.a.createPortal(Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"modal-add-course",children:[Object(m.jsx)("button",{onClick:e.onClickClose,"data-testid":"close-course-form",children:"Close Button"}),Object(m.jsxs)(N.a,{onSubmit:e.onClickSubmit,"data-testid":"course-form",children:[Object(m.jsxs)(S.a,{className:"mb-3",children:[Object(m.jsxs)(N.a.Group,{className:"mb-3",as:E.a,controlId:"courseName",children:[Object(m.jsx)(N.a.Label,{children:"Course Name"}),Object(m.jsx)(N.a.Control,{type:"text",placeholder:"Enter Course Name","data-testid":"courseNameField",name:"courseName",defaultValue:e.defaultValues.name,onChange:e.onChange}),Object(m.jsxs)(N.a.Text,{className:"text-muted",children:["You can find this from"," ",Object(m.jsx)("a",{href:"https://my.udel.edu/task/all/courses",children:"this"})," ","course search."]})]}),Object(m.jsxs)(N.a.Group,{className:"mb-3",as:E.a,controlId:"courseID",children:[Object(m.jsx)(N.a.Label,{children:"Course ID"}),Object(m.jsx)(N.a.Control,{type:"text",name:"courseID",placeholder:"eg. CISC220",onChange:e.onChange,defaultValue:e.defaultValues.id})]})]}),Object(m.jsxs)(S.a,{children:[Object(m.jsxs)(N.a.Group,{className:"mb-3",as:E.a,controlId:"courseCredits",children:[Object(m.jsx)(N.a.Label,{children:"Number of credits"}),Object(m.jsx)(N.a.Control,{type:"number",name:"courseCredits",placeholder:"eg. 3",defaultValue:e.defaultValues.credits,onChange:e.onChange})]}),Object(m.jsxs)(N.a.Group,{className:"mb-3",as:E.a,children:[Object(m.jsx)(N.a.Label,{children:"Select Corequisites"}),e.courses.filter((function(t){return t.id!=e.defaultValues.id})).map((function(t){return Object(m.jsx)(N.a.Check,{type:"checkbox",label:t.name,name:"courseCorequisites",value:t.id,defaultChecked:e.defaultValues.coreqs.includes(t.id),onChange:e.onChange},t.id)}))]}),Object(m.jsxs)(N.a.Group,{className:"mb-3",as:E.a,children:[Object(m.jsx)(N.a.Label,{children:"Select Prerequisites"}),e.courses.filter((function(t){return t.id!=e.defaultValues.id})).map((function(t){return Object(m.jsx)(N.a.Check,{type:"checkbox",label:t.name,name:"coursePrerequisites",value:t.id,defaultChecked:e.defaultValues.prereqs.includes(t.id),onChange:e.onChange},t.id)}))]})]}),Object(m.jsxs)(N.a.Group,{className:"mb-3",controlId:"courseDescription",children:[Object(m.jsx)(N.a.Label,{children:"Course Description (Optional) "}),Object(m.jsx)(N.a.Control,{name:"courseDescription",as:"textarea",placeholder:"enter the course description here",defaultValue:e.defaultValues.description,onChange:e.onChange,style:{height:"100px"}})]}),Object(m.jsx)(O.a,{variant:"primary",type:"submit",children:e.isEditing?"Edit Course":"Add Course"})]})]})}),document.getElementById("modal-view")||document.body):null},q=function(e){return Object(m.jsxs)("div",{draggable:!0,children:[Object(m.jsx)("div",{style:{display:"inline-block"},onClick:function(){e.onRemoveCourse(e)},children:"".concat(e.credits," ").concat(e.name)}),Object(m.jsx)("button",{style:{display:"inline-block"},className:"trigger","data-testid":"edit-course-button",onClick:function(){e.onClickEdit(e)},children:"Edit"})]})},I=function(e){var t=Object(n.useState)({id:"",name:"",description:"",credits:0,semester:e.uuid,coreqs:[],prereqs:[]}),r=Object(o.a)(t,2),a=r[0],s=r[1],c=Object(n.useState)(!1),l=Object(o.a)(c,2),d=l[0],j=l[1],b=Object(n.useState)(!1),h=Object(o.a)(b,2),O=h[0],f=h[1],p=function(t){var r={type:"REMOVE COURSE",payload:t};e.updateCourses(r),console.log("Remove Course",t.id)},x=function(e){s(e),j(!0),f(!0)},v=Array.from(e.courses.values()).filter((function(t){return t.semester===e.uuid})).map((function(e){return Object(m.jsx)(R.a,{children:Object(m.jsx)(q,Object(i.a)(Object(i.a)({},e),{},{onClickEdit:x,onRemoveCourse:p}))},e.id)}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(T,{courses:Array.from(e.courses.values()),defaultValues:a,isEditing:O,isOpen:d,onClickClose:function(){j(!1),f(!1)},onClickSubmit:function(t){!function(t){t.preventDefault();var r={type:"ADD COURSE",payload:a};e.updateCourses(r),s({id:"",name:"",description:"",credits:0,semester:e.uuid,coreqs:[],prereqs:[]}),O&&f(!1)}(t)},onChange:function(e){e.preventDefault();var t=Object(i.a)({},a);switch(console.log(e.target.name),e.target.name){case"courseName":t.name=e.target.value;break;case"courseID":t.id=e.target.value;break;case"courseDescription":t.description=e.target.value;break;case"courseCredits":t.credits=parseInt(e.target.value);break;case"courseCorequisites":t.coreqs=e.target.checked?[].concat(Object(u.a)(t.coreqs),[e.target.value]):t.coreqs.filter((function(t){return t!==e.target.value}));break;case"coursePrerequisites":t.prereqs=e.target.checked?[].concat(Object(u.a)(t.prereqs),[e.target.value]):t.prereqs.filter((function(t){return t!==e.target.value}))}s(t)}}),Object(m.jsx)("span",{"data-testid":"Semester ".concat(e.name," ").concat(e.start.getUTCFullYear()),children:e.name}),Object(m.jsx)("button",{"data-testid":"Remove Semester ".concat(e.name," ").concat(e.start.getUTCFullYear()),className:"trigger",onClick:e.removeSemester,children:"-"}),Object(m.jsx)(A.a,{className:"courses",children:v}),Object(m.jsx)("button",{className:"trigger",onClick:function(){j(!0)},"data-testid":"add-course-button",children:"+"}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:e.clearCourses,"data-testid":"clear-courses-button",children:"clear"})]})};function L(e){return Object(m.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(m.jsx)("label",{children:"season:"}),Object(m.jsx)("input",{"data-testid":"season-input",type:"text",name:"season",onChange:e.handleInput}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{children:"starts:"}),Object(m.jsx)("input",{"data-testid":"starts-input",type:"date",name:"starts",onChange:e.handleInput}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{children:"ends:"}),Object(m.jsx)("input",{"data-testid":"ends-input",type:"date",name:"ends",onChange:e.handleInput}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{disabled:!e.canSubmit,"data-testid":"submit-button",type:"submit",value:"submit"})]})}var U=function(e){var t=Object(n.useRef)(null),r=Object(n.useMemo)((function(){return e.semesters.sort((function(e,t){return e.start.getTime()-t.start.getTime()})).map((function(e,t,r){for(var n=0,a=0;a<t;a++)e.name===r[a].name&&n++;for(var s={name:n>0?"".concat(e.name," ").concat(n+1):e.name,end:e.end,uuid:e.uuid,start:e.start},c=t+1;c<r.length&&e.name===s.name;c++)r[c].name===e.name&&(s.name="".concat(e.name," 1"));return s}))}),[e.semesters]);return Object(m.jsx)(C.a,{fluid:!0,children:Object(m.jsxs)(S.a,{className:"mb-3",children:[Object(m.jsx)(E.a,{md:11,children:Object(m.jsx)(j.a,{className:" p-2",children:Object(m.jsx)(y.a,{trigger:Object(m.jsx)("button",{"data-testid":"Year ".concat(e.index," label"),className:"trigger",children:"Year ".concat(e.index," >")}),transitionTime:200,children:Object(m.jsxs)(S.a,{"data-testid":"collapsible-content",children:[r.map((function(t,r){return Object(m.jsx)(E.a,{"data-testid":"Year ".concat(e.index," semester ").concat(r+1),children:Object(m.jsx)(I,Object(i.a)(Object(i.a)({courses:e.courses.courseList},t),{},{removeSemester:function(){e.removeSemester(t.uuid)},updateCourses:e.courses.updateCourses,clearCourses:function(){e.clearCourses(t.uuid)}}))},t.uuid)})),Object(m.jsxs)(E.a,{children:[Object(m.jsx)("button",{"data-testid":"trigger ".concat(e.index),className:"trigger",ref:t,onClick:function(){e.formInit(e.formUuid===e.uuid?null:e.uuid)},children:"+"}),Object(m.jsx)(D.a,{target:t,placement:"right-end",show:e.formUuid===e.uuid,onHide:function(){e.setFormUuid(null)},rootClose:!0,transition:!1,children:Object(m.jsx)(w.a,{id:"popover-basic",children:Object(m.jsx)(k.a,{children:Object(m.jsx)("div",{"data-testid":"semester-form ".concat(e.index),children:Object(m.jsx)(L,{canSubmit:e.canSubmit,handleInput:e.handleInput,handleSubmit:e.handleSubmit})})})})})]})]})})})}),Object(m.jsx)(E.a,{children:Object(m.jsx)("button",{onClick:e.clear,"data-testid":"clear-year ".concat(e.index),children:"Clear"})})]})})};function V(e,t){var r=e.map((function(e){return{error:e.error,message:e.message,source:e.source,problemType:e.problemType}}));switch(t.type){case"RESOLVE-TYPE":for(var n=t,a=0;a<r.length;a++)r[a].problemType===n.target&&r.splice(a,1);return r;case"ADD":var s=t;return r.push(s.problem),r;case"CLEAR":for(var c=t,i=new Array,u=0;u<r.length;u++)r[u].source!==c.source&&i.push(r[u]);return i;default:throw Error("".concat(t.type," not implemented!"))}}function P(){return new Array}function F(e){if(null!==e.problems){var t=[Object(m.jsxs)("div",{className:"error-counter",children:[e.problems.length," ",1===e.problems.length?"error":"errors"]},0)];return c.a.createPortal(Object(m.jsx)("div",{className:"error-stack-container",children:Object(m.jsx)("div",{className:"error-stack",children:t.concat(e.problems.map((function(e,t){return Object(m.jsx)("span",{className:e.error?"error":"warning","data-testid":e.error?"error":"warning",children:e.message},t+1)})))})}),document.body)}return Object(m.jsx)("span",{"data-testid":"no-errors"})}function M(e,t,r,n){return null!==e&&null!==t?function(e,t,r){var n=new Array;e.getTime()>=t.getTime()?n.push({error:!0,source:"semester-form",message:"Semesters cannot start after they end!",problemType:"semester-starts-after-ends"}):t.getTime()-e.getTime()<=18144e5&&n.push({error:!1,source:"semester-form",message:"Semester is less than three weeks long; is this a mistake?",problemType:"short-semester"});var a,s=Object(f.a)(r);try{for(s.s();!(a=s.n()).done;){var c=a.value;t.getTime()>=c.start.getTime()&&c.end.getTime()>=e.getTime()&&n.push({error:!0,source:"semester-form",message:"Semester overlaps ".concat(c.name),problemType:"semester-overlap"})}}catch(i){s.e(i)}finally{s.f()}return n}(e,t,r):null!==e?Y(e,r,n):null!==t?Y(t,r,n):[]}function Y(e,t,r){var n,a=new Array,s=Object(f.a)(t);try{for(s.s();!(n=s.n()).done;){var c=n.value;e.getTime()>c.start.getTime()&&e.getTime()<c.end.getTime()&&a.push({error:!0,source:"semester-form",message:"".concat(r," overlaps with ").concat(c.name),problemType:"semester-".concat(r,"-overlap")})}}catch(i){s.e(i)}finally{s.f()}return a}var B=function(e,t){switch(t.type){case"ADD COURSE":var r=new Map(e);return r.set(t.payload.id,t.payload),r;case"REMOVE COURSE":var n=new Map(e);return n.delete(t.payload.id),n}},G=function(e){return e||new Map};var J=function(e){var t=Object(n.useReducer)(B,e,G),r=Object(o.a)(t,2),a=r[0],s=r[1];return{courseList:a,removeCourse:function(e){var t=a.get(e);if(!t)throw new Error("Course not found");s({type:"REMOVE COURSE",payload:t}),console.log("Removed course ID: ",e)},updateCourses:s}},H=r(74);function W(){var e=(new Date).getFullYear(),t=new Array,r={index:1,uuid:Object(b.a)(),semesters:[]};r.semesters.push({uuid:Object(b.a)(),name:"fall",start:new Date("".concat(e,"-08-31")),end:new Date("".concat(e,"-12-15"))}),r.semesters.push({uuid:Object(b.a)(),name:"spring",start:new Date("".concat(e+1,"-02-07")),end:new Date("".concat(e+1,"-05-26"))});var n={index:2,uuid:Object(b.a)(),semesters:[]};return n.semesters.push({uuid:Object(b.a)(),name:"fall",start:new Date("".concat(e+1,"-08-31")),end:new Date("".concat(e+1,"-12-15"))}),t.push(r),t.push(n),t}function z(e){var t,r=Object(f.a)(e);try{for(r.s();!(t=r.n()).done;){if(t.value.error)return!0}}catch(n){r.e(n)}finally{r.f()}return!1}function K(e){if(void 0===e.csv&&void 0===e.json){var t=v(W),r=J(void 0),a=Object(n.useState)([]),s=Object(o.a)(a,2),c=s[0],i=s[1],u=Object(n.useState)(null),l=Object(o.a)(u,2),d=l[0],j=l[1],h=Object(n.useState)(null),O=Object(o.a)(h,2),x=O[0],g=O[1],y=Object(n.useState)(null),C=Object(o.a)(y,2),S=C[0],E=C[1],D=Object(n.useState)(null),w=Object(o.a)(D,2),k=w[0],R=w[1],A=Object(n.useState)(!1),N=Object(o.a)(A,2),T=N[0],q=N[1],I=function(){var e=Object(n.useReducer)(V,void 0,P),t=Object(o.a)(e,2),r=t[0],a=t[1];return{add:function(e){a({type:"ADD",problem:e})},resolve:function(e){a({type:"RESOLVE-TYPE",target:e})},clear:function(e){a({type:"CLEAR",source:e})},value:r}}(),L=function(e){R(e),q(!1),j(null),g(null),E(null),I.clear("semester-form")},Y=function(e){switch(e.target.name){case"season":j(e.target.value);break;case"starts":var r=t.value[p(t.value,k)].semesters,n=M(new Date(e.target.value),null!==S?new Date(S):null,r,"starts");if(null===S)I.clear("semester-form"),1===n.length&&I.add(n[0]);else{I.clear("semester-form");var a,s=Object(f.a)(n);try{for(s.s();!(a=s.n()).done;){var c=a.value;I.add(c)}}catch(m){s.e(m)}finally{s.f()}}g(e.target.value);break;case"ends":var i=t.value[p(t.value,k)].semesters,u=new Date(e.target.value),o=M(null!==x?new Date(x):null,u,i,"ends");if(null===S)I.clear("semester-form"),1===o.length&&I.add(o[0]);else{I.clear("semester-form");var l,d=Object(f.a)(o);try{for(d.s();!(l=d.n()).done;){var b=l.value;I.add(b)}}catch(m){d.e(m)}finally{d.f()}}E(e.target.value)}};Object(n.useEffect)((function(){var t,n=e.requirements,a=Array(),s=Object(f.a)(n);try{for(s.s();!(t=s.n()).done;){var c=t.value;r.courseList.has(c)||a.push(c)}}catch(u){s.e(u)}finally{s.f()}i(a)}),[e.requirements,r.courseList]);return d&&S&&x&&!T&&!z(I.value)?q(!0):d&&S&&x&&!z(I.value)||!T||q(!1),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:function(){t.clear()},"data-testid":"clear-button",children:"Clear"}),Object(m.jsxs)("div",{children:[t.value.map((function(e,n){return Object(m.jsx)("div",{"data-testid":"Year",children:Object(m.jsx)(U,{courses:r,canSubmit:T,handleInput:Y,handleSubmit:function(r){!function(e,r){e.preventDefault(),null!==d&&null!==S&&null!==x&&(t.putSemester(r,Object(b.a)(),new Date(x),new Date(S),d),j(null),g(null),E(null),R(null),I.clear("semester-form"))}(r,e.uuid)},semesters:e.semesters,uuid:e.uuid,index:n+1,formUuid:k,setFormUuid:R,removeSemester:function(r){t.removeSemester(e.uuid,r)},clear:function(){t.clear(e.uuid)},clearCourses:function(e){!function(e){for(var t=r.courseList.entries(),n=t.next();!n.done;n=t.next())n.value[1].semester===e&&r.removeCourse(n.value[0])}(e)},formInit:L})},e.uuid)})),Object(m.jsx)("button",{"data-testid":"add-year-button",onClick:function(){t.push(Object(b.a)(),t.value.length)},children:"+"})]}),Object(m.jsxs)(H.a,{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Degree Requirements"}),Object(m.jsx)("th",{children:"Unmet Requirements"})]})}),Object(m.jsx)("tbody",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"School of Engineering"}),Object(m.jsx)("td",{children:c.join(", ")})]})})]}),Object(m.jsx)(F,{problems:I.value})]})}return Object(m.jsx)(m.Fragment,{})}var Q=r(75),X=r(42),Z=function(e){var t=e.requirements,r=e.onRemoveRequirement,a=e.onAddRequirement,s=Object(n.useState)(""),c=Object(o.a)(s,2),i=c[0],u=c[1];return Object(m.jsxs)(C.a,{className:"flex-column-reverse",children:[Object(m.jsx)("h3",{children:"School of Engineering Requirements"}),t.map((function(e){return Object(m.jsxs)(S.a,{className:"justify-content-md-center my-3",children:[Object(m.jsxs)(E.a,{xs:!0,lg:"2",children:[" ",e," "]}),Object(m.jsx)(E.a,{xs:!0,lg:"2",children:Object(m.jsx)(O.a,{onClick:function(){return r(e)},children:"Remove"})})]},e)})),Object(m.jsx)(S.a,{className:"justify-content-md-center my-3",children:Object(m.jsxs)(Q.a,{className:"mb-3",style:{width:"50%"},children:[Object(m.jsx)(X.a,{placeholder:"Requirement eg. CISC220",value:i,onChange:function(e){u(e.target.value)},"aria-label":"Text input with button"}),Object(m.jsx)(O.a,{variant:"outline-secondary",title:"Action",id:"segmented-button-dropdown-2",onClick:function(){a(i)},children:"Add Course"})]})}),Object(m.jsx)(l.b,{to:"/",children:Object(m.jsx)(O.a,{className:"my-3",children:"Back"})})]})},$=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"center",children:"UD CIS Scheduler"}),Object(m.jsx)("h3",{className:"center",children:"Designed By: Lucas, Max, and Amani"}),Object(m.jsxs)("div",{role:"alert",className:"welcome",children:[Object(m.jsx)("p",{children:"Welcome to the UD Degree Planner!"}),Object(m.jsx)("b",{children:"Click Add/Edit Plan below to Get Started"})]}),Object(m.jsx)(h,{uuid:"",id:0})]}),Object(m.jsx)(l.b,{to:"/Requirements",children:Object(m.jsx)(O.a,{className:"my-2",children:"Modify Requirements"})})]})},_=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(K,{requirements:e.requirements}),Object(m.jsx)(l.b,{to:"/",children:Object(m.jsx)(O.a,{children:"Back"})}),console.log("the uuid is : ",localStorage.getItem("plan: 0"))]})};var ee=function(){var e=Object(n.useState)(Array("CISC220","CISC275","MATH243")),t=Object(o.a)(e,2),r=t[0],a=t[1],s=function(e){a([].concat(Object(u.a)(r),[e]))},c=function(e){a(r.filter((function(t){return t!==e})))};return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(l.a,{children:Object(m.jsx)(d.c,{children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(d.a,{path:"/Plans/:uuid",render:function(e){return Object(m.jsx)(_,Object(i.a)(Object(i.a)({},e),{},{requirements:r}))}}),Object(m.jsx)(d.a,{path:"/Requirements",render:function(e){return Object(m.jsx)(Z,Object(i.a)(Object(i.a)({},e),{},{requirements:r,onAddRequirement:s,onRemoveRequirement:c}))}}),Object(m.jsx)(d.a,{exact:!0,path:"/",component:$})]})})})})},te=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,83)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),s(e),c(e)}))};c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(ee,{})}),document.getElementById("root")),te()}},[[67,1,2]]]);
//# sourceMappingURL=main.a7b7ffc4.chunk.js.map