(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{40:function(e,t,r){},54:function(e,t,r){},55:function(e,t,r){},57:function(e,t,r){},69:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),a=r(11),c=r.n(a),i=(r(40),r(16)),u=r(18),o=r(7),l=(r(54),r(55),r(56),r(17)),d=r(8),j=r(81),m=(r(57),r(80)),b=r(1);Array(),Array();var h=function(e){var t=Object(n.useState)([]),r=Object(o.a)(t,2),s=r[0],a=r[1],c=function(e){return localStorage.setItem("Plans Array",JSON.stringify(s)),Object(b.jsx)(j.a,{style:{width:"18rem"},className:"grid",children:Object(b.jsxs)(j.a.Body,{children:[Object(b.jsxs)(j.a.Title,{children:["Plan #",e.id," "]}),Object(b.jsx)(l.b,{to:"Plans/".concat(e.uuid),children:Object(b.jsx)("button",{children:"Edit Plan"})}),Object(b.jsx)(j.a.Text,{children:e.date}),Object(b.jsx)("button",{onClick:function(){console.log("button pressed"),function(e,t){if(window.confirm("Are you sure you want to delete this plan?")){var r=Object(u.a)(s);console.log("plans array",s),console.log(t.id);var n=r.indexOf(t);console.log("index is",n),-1!==n&&(r.splice(n,1),console.log("plan deleted"),console.log("new array is",r),a(r))}}(0,e)},children:"-"}),Object(b.jsx)("button",{onClick:function(){!function(e){a([].concat(Object(u.a)(s),[{id:e.id,uuid:Object(m.a)(),name:e.name,date:e.date,years:e.years}]));var t=s.length;console.log("index: ",t)}(e)},children:"Duplicate Plan"})]})})};return Object(b.jsxs)("div",{className:"grid",children:[Object(b.jsx)("button",{onClick:function(){a([].concat(Object(u.a)(s),[{id:s.length,uuid:Object(m.a)(),name:"",date:(new Date).toLocaleDateString(),years:Array()}]));var e=s.length;console.log("index: ",e);var t=[];e<=0&&t.push(s[0]),1===e&&t.push(s[0]),e>1&&t.push(s[e-1])},children:"Add a plan +"}),s.map((function(e){return Object(b.jsx)("li",{children:c(e)},e.uuid)}))]})},f=r(82),O=r(12);function x(e,t){for(var r=0;r<e.length;r++)if(e[r].uuid===t)return r;return-1}function p(e,t){var r=e.map((function(e){return e}));switch(t.type){case"ADD SEMESTER":var n=t,s=x(r,n.uuid),a=r[s],c=(new Array).concat(a.semesters);return c.push({name:n.name,start:n.start,end:n.end,uuid:n.semesterUuid}),r[s]={index:r[s].index,uuid:r[s].uuid,semesters:c},r;case"ADD YEAR":var i=t,u={index:i.index,uuid:i.uuid,semesters:new Array};return r.push(u),r;case"DELETE SEMESTER":var o=t,l=x(r,o.uuid),d=r[l].semesters.filter((function(e){return e.uuid!==o.semesterUuid}));return r[l]={index:r[l].index,uuid:r[l].uuid,semesters:d},r;case"DELETE YEAR":var j=t;return r.filter((function(e){return e.uuid!==j.uuid}));default:throw Error("".concat(t.type," not implemented!"))}}var v=function(e){var t=Object(n.useReducer)(p,void 0,void 0===e?function(){return new Array}:e),r=Object(o.a)(t,2),s=r[0],a=r[1],c=function(e,t){a({type:"ADD YEAR",uuid:e,index:t})},i=function(e,t){a({type:"DELETE SEMESTER",uuid:e,semesterUuid:t})},u=function(e){a({type:"DELETE YEAR",uuid:e})};return{value:s,push:c,putSemester:function(e,t,r,n,s){a({type:"ADD SEMESTER",uuid:e,name:s,start:r,end:n,semesterUuid:t})},removeSemester:i,removeYear:u,clear:function(e){!function(e,t,r,n,s){if(void 0!==s&&-1!==x(e,s)){var a,c=Object(O.a)(e[x(e,s)].semesters);try{for(c.s();!(a=c.n()).done;)r(s,a.value.uuid)}catch(b){c.e(b)}finally{c.f()}}else if(void 0===s){var i,u=new Array,o=Object(O.a)(e);try{for(o.s();!(i=o.n()).done;){var l=i.value;u.push({semesters:[],index:l.index,uuid:l.uuid}),n(l.uuid)}}catch(b){o.e(b)}finally{o.f()}for(var d=0,j=u;d<j.length;d++){var m=j[d];t(m.uuid,m.index)}}}(s,c,i,u,e)}}};function g(e,t){var r=e.map((function(e){return{error:e.error,message:e.message,source:e.source,problemType:e.problemType}}));switch(t.type){case"RESOLVE-TYPE":for(var n=t,s=0;s<r.length;s++)r[s].problemType===n.target&&r.splice(s,1);return r;case"ADD":var a=t;return r.push(a.problem),r;case"CLEAR":for(var c=t,i=new Array,u=0;u<r.length;u++)r[u].source!==c.source&&i.push(r[u]);return i;default:throw Error("".concat(t.type," not implemented!"))}}function y(){return new Array}function C(e){if(null!==e.problems){var t=[Object(b.jsxs)("div",{className:"error-counter",children:[e.problems.length," ",1===e.problems.length?"error":"errors"]},0)];return c.a.createPortal(Object(b.jsx)("div",{className:"error-stack-container",children:Object(b.jsx)("div",{className:"error-stack",children:t.concat(e.problems.map((function(e,t){return Object(b.jsx)("span",{className:e.error?"error":"warning","data-testid":e.error?"error":"warning",children:e.message},t+1)})))})}),document.body)}return Object(b.jsx)("span",{"data-testid":"no-errors"})}var S=function(e,t){var r=e.map((function(e){return e}));switch(t.type){case"ADD COURSE":var n=t;return r.push(n.newCourse),r;case"REMOVE COURSE":var s=x(r,t.uuid);return-1!==s&&r.splice(s,1),r}},E=function(e){return void 0===e?[]:e};var D=function(e){var t=Object(n.useReducer)(S,e,E),r=Object(o.a)(t,2),s=r[0],a=r[1];return{courseList:s,removeCourse:function(e){a({type:"REMOVE COURSE",uuid:e})},push:function(e){a({type:"ADD COURSE",newCourse:e})}}},w=r(76);function k(e,t,r,n){return null!==e&&null!==t?function(e,t,r){var n=new Array;e.getTime()>=t.getTime()?n.push({error:!0,source:"semester-form",message:"Semesters cannot start after they end!",problemType:"semester-starts-after-ends"}):t.getTime()-e.getTime()<=18144e5&&n.push({error:!1,source:"semester-form",message:"Semester is less than three weeks long; is this a mistake?",problemType:"short-semester"});var s,a=Object(O.a)(r);try{for(a.s();!(s=a.n()).done;){var c=s.value;t.getTime()>=c.start.getTime()&&c.end.getTime()>=e.getTime()&&n.push({error:!0,source:"semester-form",message:"Semester overlaps ".concat(c.name),problemType:"semester-overlap"})}}catch(i){a.e(i)}finally{a.f()}return n}(e,t,r):null!==e?A(e,r,n):null!==t?A(t,r,n):[]}function A(e,t,r){var n,s=new Array,a=Object(O.a)(t);try{for(a.s();!(n=a.n()).done;){var c=n.value;e.getTime()>c.start.getTime()&&e.getTime()<c.end.getTime()&&s.push({error:!0,source:"semester-form",message:"".concat(r," overlaps with ").concat(c.name),problemType:"semester-".concat(r,"-overlap")})}}catch(i){a.e(i)}finally{a.f()}return s}var N=r(74),T=r(75),q=r(24),R=r(43),I=r.n(R);function L(e){return Object(b.jsx)(N.a,{fluid:!0,children:Object(b.jsxs)(T.a,{className:"mb-3",children:[Object(b.jsx)(q.a,{md:11,children:Object(b.jsx)(j.a,{className:" p-2",children:Object(b.jsx)(I.a,{trigger:Object(b.jsx)("button",{"data-testid":"Year ".concat(e.index," label"),className:"trigger",children:"Year ".concat(e.index," >")}),transitionTime:200,children:Object(b.jsx)(T.a,{"data-testid":"collapsible-content",children:e.children})})})}),Object(b.jsx)(q.a,{children:Object(b.jsx)("button",{onClick:e.clearSemesters,"data-testid":"clear-year ".concat(e.index),children:"Clear"})})]})})}var F=r(79),Y=r(48),P=r(78),V=function(e){return e.isOpen?c.a.createPortal(Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"modal-add-course","data-testid":"modal-add-course",children:[Object(b.jsx)("button",{onClick:e.onClickClose,"data-testid":"close-course-form",children:"Close Button"}),Object(b.jsxs)(P.a,{onSubmit:e.onClickSubmit,"data-testid":"course-form",children:[Object(b.jsxs)(T.a,{className:"mb-3",children:[Object(b.jsxs)(P.a.Group,{className:"mb-3",as:q.a,controlId:"courseName",children:[Object(b.jsx)(P.a.Label,{children:"Course Name"}),Object(b.jsx)(P.a.Control,{type:"text",placeholder:"Enter Course Name","data-testid":"courseNameField",name:"courseName",defaultValue:e.defaultValues.name,onChange:e.onChange}),Object(b.jsxs)(P.a.Text,{className:"text-muted",children:["You can find this from"," ",Object(b.jsx)("a",{href:"https://my.udel.edu/task/all/courses",children:"this"})," ","course search."]})]}),Object(b.jsxs)(P.a.Group,{className:"mb-3",as:q.a,controlId:"courseID",children:[Object(b.jsx)(P.a.Label,{children:"Course ID"}),Object(b.jsx)(P.a.Control,{type:"text",name:"courseID",placeholder:"eg. CISC220",onChange:e.onChange,defaultValue:e.defaultValues.id})]})]}),Object(b.jsxs)(T.a,{children:[Object(b.jsxs)(P.a.Group,{className:"mb-3",as:q.a,controlId:"courseCredits",children:[Object(b.jsx)(P.a.Label,{children:"Number of credits"}),Object(b.jsx)(P.a.Control,{type:"number",name:"courseCredits",placeholder:"eg. 3",defaultValue:e.defaultValues.credits,onChange:e.onChange})]}),Object(b.jsxs)(P.a.Group,{className:"mb-3",as:q.a,children:[Object(b.jsx)(P.a.Label,{children:"Select Corequisites"}),e.courses.filter((function(t){return t.id!=e.defaultValues.id})).map((function(t){return Object(b.jsx)(P.a.Check,{type:"checkbox",label:t.name,name:"courseCorequisites",value:t.id,defaultChecked:e.defaultValues.coreqs.includes(t.id),onChange:e.onChange},t.id)}))]}),Object(b.jsxs)(P.a.Group,{className:"mb-3",as:q.a,children:[Object(b.jsx)(P.a.Label,{children:"Select Prerequisites"}),e.courses.filter((function(t){return t.id!=e.defaultValues.id})).map((function(t){return Object(b.jsx)(P.a.Check,{type:"checkbox",label:t.name,name:"coursePrerequisites",value:t.id,defaultChecked:e.defaultValues.prereqs.includes(t.id),onChange:e.onChange},t.id)}))]})]}),Object(b.jsxs)(P.a.Group,{className:"mb-3",controlId:"courseDescription",children:[Object(b.jsx)(P.a.Label,{children:"Course Description (Optional) "}),Object(b.jsx)(P.a.Control,{name:"courseDescription",as:"textarea",placeholder:"enter the course description here",defaultValue:e.defaultValues.description,onChange:e.onChange,style:{height:"100px"}})]}),Object(b.jsx)(f.a,{variant:"primary",type:"submit","data-testid":"submit-course-button",children:e.isEditing?"Edit Course":"Add Course"})]})]})}),document.getElementById("modal-view")||document.body):null},U=function(e){return Object(b.jsxs)("div",{draggable:!0,children:[Object(b.jsx)("div",{style:{display:"inline-block"},onClick:function(){e.removeCourse(e.uuid)},children:"".concat(e.credits," ").concat(e.name)}),Object(b.jsx)("button",{style:{display:"inline-block"},className:"trigger","data-testid":"edit-course-button",onClick:function(){e.onClickEdit(e.uuid)},children:"Edit"})]})};function M(e){return{id:"",name:"",description:"",credits:0,semester:e,coreqs:[],prereqs:[],uuid:Object(m.a)()}}var B=function(e){var t=Object(n.useState)((function(){return M(e.uuid)})),r=Object(o.a)(t,2),s=r[0],a=r[1],c=Object(n.useState)(!1),l=Object(o.a)(c,2),d=l[0],j=l[1],m=Object(n.useState)(!1),h=Object(o.a)(m,2),f=h[0],O=h[1],p=function(t){a(e.courses[x(e.courses,t)]),j(!0),O(!0)},v=Object(n.useMemo)((function(){return e.courses.filter((function(t){return t.semester===e.uuid}))}),[e.courses]),g=Object(n.useMemo)((function(){return v.reduce((function(e,t){return{id:"",description:"",name:"",credits:e.credits+t.credits,semester:"",coreqs:[],prereqs:[],uuid:""}}),{id:"",description:"",name:"",credits:0,coreqs:[],prereqs:[],semester:"",uuid:""}).credits}),[v]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(V,{courses:Array.from(e.courses.values()),defaultValues:s,isEditing:f,isOpen:d,onClickClose:function(){j(!1),O(!1)},onClickSubmit:function(t){!function(t){t.preventDefault(),e.push(s),a(M(e.uuid)),f&&O(!1)}(t)},onChange:function(e){e.preventDefault();var t=Object(i.a)({},s);switch(e.target.name){case"courseName":t.name=e.target.value;break;case"courseID":t.id=e.target.value;break;case"courseDescription":t.description=e.target.value;break;case"courseCredits":t.credits=parseInt(e.target.value);break;case"courseCorequisites":t.coreqs=e.target.checked?[].concat(Object(u.a)(t.coreqs),[e.target.value]):t.coreqs.filter((function(t){return t!==e.target.value}));break;case"coursePrerequisites":t.prereqs=e.target.checked?[].concat(Object(u.a)(t.prereqs),[e.target.value]):t.prereqs.filter((function(t){return t!==e.target.value}))}a(t)}}),Object(b.jsx)("span",{"data-testid":"semester-name",children:"".concat(e.name," ")}),Object(b.jsx)("span",{"data-testid":"credits-count",children:g}),Object(b.jsx)("button",{"data-testid":"remove-semester",className:"trigger",onClick:e.removeSemester,children:"-"}),Object(b.jsx)(F.a,{className:"courses",children:v.map((function(t){return Object(b.jsx)(Y.a,{children:Object(b.jsx)(U,Object(i.a)(Object(i.a)({},t),{},{onClickEdit:p,removeCourse:e.removeCourse}))},t.id)}))}),Object(b.jsx)("button",{className:"trigger",onClick:function(){j(!0)},"data-testid":"add-course-button",children:"+"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:e.clearCourses,"data-testid":"clear-courses-button",children:"clear"})]})};function G(e){var t=Object(n.useMemo)((function(){return e.semesters.sort((function(e,t){return e.start.getTime()-t.start.getTime()})).map((function(e,t,r){for(var n=0,s=0;s<t;s++)e.name===r[s].name&&n++;for(var a={name:n>0?"".concat(e.name," ").concat(n+1):e.name,end:e.end,uuid:e.uuid,start:e.start},c=t+1;c<r.length&&e.name===a.name;c++)r[c].name===e.name&&(a.name="".concat(e.name," 1"));return a}))}),[e.semesters]);return Object(b.jsx)(b.Fragment,{children:t.map((function(t,r){return Object(b.jsx)(q.a,{"data-testid":"semester ".concat(r+1),children:Object(b.jsx)(B,Object(i.a)(Object(i.a)({courses:e.courses.courseList},t),{},{removeSemester:function(){e.removeSemester(t.uuid)},push:e.courses.push,removeCourse:e.courses.removeCourse,clearCourses:function(){e.clearCourses(t.uuid)}}))},t.uuid)}))})}var J=r(49),H=r(29),W=r(47);function z(e){var t=Object(n.useRef)(null);return Object(b.jsxs)(q.a,{"data-testid":"form-trigger",children:[Object(b.jsx)("button",{"data-testid":"open-semester-form",className:"trigger",ref:t,onClick:function(){e.setForm(e.currentForm===e.YearUuid?null:e.YearUuid)},children:"+"}),Object(b.jsx)(W.a,{target:t,placement:"right-end",show:e.currentForm===e.YearUuid,onHide:function(){e.setForm(null)},rootClose:!0,transition:!1,children:Object(b.jsx)(J.a,{id:"popover-basic","data-testid":"popover",children:Object(b.jsx)(H.a,{children:Object(b.jsx)("div",{"data-testid":"semester-form",children:e.children})})})})]})}function K(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("label",{children:"season:"}),Object(b.jsx)("input",{"data-testid":"season-input",type:"text",name:"season",onChange:e.handleInput}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"starts:"}),Object(b.jsx)("input",{"data-testid":"starts-input",type:"date",name:"starts",onChange:e.handleInput}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"ends:"}),Object(b.jsx)("input",{"data-testid":"ends-input",type:"date",name:"ends",onChange:e.handleInput}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{disabled:!e.canSubmit,"data-testid":"submit-button",type:"submit",value:"submit"})]})}function Q(e){return Object(b.jsx)("div",{"data-testid":"Year ".concat(e.index),children:Object(b.jsxs)(L,{index:e.index,clearSemesters:function(){e.clearYears(e.uuid)},children:[Object(b.jsx)(G,{semesters:e.semesters,courses:e.courses,removeSemester:function(t){e.removeSemester(t)},clearCourses:function(t){var r,n=Object(O.a)(e.courses.courseList.filter((function(e){return e.semester===t})));try{for(n.s();!(r=n.n()).done;){var s=r.value;e.courses.removeCourse(s.uuid)}}catch(a){n.e(a)}finally{n.f()}}}),Object(b.jsx)(z,{currentForm:e.currentForm,setForm:e.setForm,YearUuid:e.uuid,children:Object(b.jsx)(K,{canSubmit:e.submissionAllowed,handleInput:e.handleSemesterInput,handleSubmit:function(t){e.handleSemesterSubmit(t,e.uuid)}})})]})},e.uuid)}function X(){var e=(new Date).getFullYear(),t=new Array,r={index:1,uuid:Object(m.a)(),semesters:[]};r.semesters.push({uuid:Object(m.a)(),name:"fall",start:new Date("".concat(e,"-08-31")),end:new Date("".concat(e,"-12-15"))}),r.semesters.push({uuid:Object(m.a)(),name:"spring",start:new Date("".concat(e+1,"-02-07")),end:new Date("".concat(e+1,"-05-26"))});var n={index:2,uuid:Object(m.a)(),semesters:[]};return n.semesters.push({uuid:Object(m.a)(),name:"fall",start:new Date("".concat(e+1,"-08-31")),end:new Date("".concat(e+1,"-12-15"))}),t.push(r),t.push(n),t}function Z(e){var t,r=Object(O.a)(e);try{for(r.s();!(t=r.n()).done;){if(t.value.error)return!0}}catch(n){r.e(n)}finally{r.f()}return!1}function $(e){if(void 0===e.csv&&void 0===e.json){var t=v(X),r=D(),s=Object(n.useState)([]),a=Object(o.a)(s,2),c=a[0],i=a[1],u=Object(n.useState)(null),l=Object(o.a)(u,2),d=l[0],j=l[1],h=Object(n.useState)(null),f=Object(o.a)(h,2),p=f[0],S=f[1],E=Object(n.useState)(null),A=Object(o.a)(E,2),N=A[0],T=A[1],q=Object(n.useState)(null),R=Object(o.a)(q,2),I=R[0],L=R[1],F=Object(n.useState)(!1),Y=Object(o.a)(F,2),P=Y[0],V=Y[1],U=function(){var e=Object(n.useReducer)(g,void 0,y),t=Object(o.a)(e,2),r=t[0],s=t[1];return{add:function(e){s({type:"ADD",problem:e})},resolve:function(e){s({type:"RESOLVE-TYPE",target:e})},clear:function(e){s({type:"CLEAR",source:e})},value:r}}(),M=function(e){L(e),V(!1),j(null),S(null),T(null),U.clear("semester-form")},B=function(e){!function(e,t,r,n,s,a,c,i,u){switch(e.target.name){case"season":n(e.target.value);break;case"starts":var o=c.value[x(c.value,i)].semesters,l=k(new Date(e.target.value),null!==r?new Date(r):null,o,"starts");if(null===r)u.clear("semester-form"),1===l.length&&u.add(l[0]);else{u.clear("semester-form");var d,j=Object(O.a)(l);try{for(j.s();!(d=j.n()).done;){var m=d.value;u.add(m)}}catch(y){j.e(y)}finally{j.f()}}s(e.target.value);break;case"ends":var b=c.value[x(c.value,i)].semesters,h=new Date(e.target.value),f=k(null!==t?new Date(t):null,h,b,"ends");if(null===r)u.clear("semester-form"),1===f.length&&u.add(f[0]);else{u.clear("semester-form");var p,v=Object(O.a)(f);try{for(v.s();!(p=v.n()).done;){var g=p.value;u.add(g)}}catch(y){v.e(y)}finally{v.f()}}a(e.target.value)}}(e,p,N,j,S,T,t,I,U)},G=function(e,r){!function(e,t,r,n,s,a,c){e.preventDefault(),null!==r&&null!==s&&null!==n&&(c(t,Object(m.a)(),new Date(n),new Date(s),r),a())}(e,r,d,p,N,(function(){M(null)}),t.putSemester)};return Object(n.useEffect)((function(){var t,n=e.requirements,s=Array(),a=Object(O.a)(n);try{for(a.s();!(t=a.n()).done;){var c=t.value;-1===x(r.courseList,c)&&s.push(c)}}catch(u){a.e(u)}finally{a.f()}i(s)}),[e.requirements,r.courseList]),d&&N&&p&&!P&&!Z(U.value)?V(!0):d&&N&&p&&!Z(U.value)||!P||V(!1),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{onClick:function(){t.clear()},"data-testid":"clear-button",children:"Clear"}),Object(b.jsxs)("div",{children:[t.value.map((function(e){return Object(b.jsx)(Q,{clearYears:t.clear,removeSemester:function(r){t.removeSemester(e.uuid,r)},courses:r,index:e.index,uuid:e.uuid,handleSemesterSubmit:G,handleSemesterInput:B,semesters:e.semesters,currentForm:I,setForm:M,submissionAllowed:P},e.uuid)})),Object(b.jsx)("button",{"data-testid":"add-year-button",onClick:function(){t.push(Object(m.a)(),t.value.length+1)},children:"+"})]}),Object(b.jsxs)(w.a,{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Degree Requirements"}),Object(b.jsx)("th",{children:"Unmet Requirements"})]})}),Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"School of Engineering"}),Object(b.jsx)("td",{children:c.join(", ")})]})})]}),Object(b.jsx)(C,{problems:U.value})]})}return Object(b.jsx)(b.Fragment,{})}var _=r(77),ee=r(44),te=function(e){var t=e.requirements,r=e.onRemoveRequirement,s=e.onAddRequirement,a=Object(n.useState)(""),c=Object(o.a)(a,2),i=c[0],u=c[1];return Object(b.jsxs)(N.a,{className:"flex-column-reverse",children:[Object(b.jsx)("h3",{children:"School of Engineering Requirements"}),t.map((function(e){return Object(b.jsxs)(T.a,{className:"justify-content-md-center my-3",children:[Object(b.jsxs)(q.a,{xs:!0,lg:"2",children:[" ",e," "]}),Object(b.jsx)(q.a,{xs:!0,lg:"2",children:Object(b.jsx)(f.a,{onClick:function(){return r(e)},children:"Remove"})})]},e)})),Object(b.jsx)(T.a,{className:"justify-content-md-center my-3",children:Object(b.jsxs)(_.a,{className:"mb-3",style:{width:"50%"},children:[Object(b.jsx)(ee.a,{placeholder:"Requirement eg. CISC220",value:i,onChange:function(e){u(e.target.value)},"aria-label":"Text input with button"}),Object(b.jsx)(f.a,{variant:"outline-secondary",title:"Action",id:"segmented-button-dropdown-2",onClick:function(){s(i)},children:"Add Course"})]})}),Object(b.jsx)(l.b,{to:"/",children:Object(b.jsx)(f.a,{className:"my-3",children:"Back"})})]})},re=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"center",children:"UD CIS Scheduler"}),Object(b.jsx)("h3",{className:"center",children:"Designed By: Lucas, Max, and Amani"}),Object(b.jsxs)("div",{role:"alert",className:"welcome",children:[Object(b.jsx)("p",{children:"Welcome to the UD Degree Planner!"}),Object(b.jsx)("b",{children:"Click Add/Edit Plan below to Get Started"})]}),Object(b.jsx)(h,{uuid:"",id:0})]}),Object(b.jsx)(l.b,{to:"/Requirements",children:Object(b.jsx)(f.a,{className:"my-2",children:"Modify Requirements"})})]})},ne=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)($,{requirements:e.requirements}),Object(b.jsx)(l.b,{to:"/",children:Object(b.jsx)(f.a,{children:"Back"})}),console.log("the uuid is : ",localStorage.getItem("plan: 0"))]})};var se=function(){var e=Object(n.useState)(Array("CISC220","CISC275","MATH243")),t=Object(o.a)(e,2),r=t[0],s=t[1],a=function(e){s([].concat(Object(u.a)(r),[e]))},c=function(e){s(r.filter((function(t){return t!==e})))};return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(l.a,{children:Object(b.jsx)(d.c,{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(d.a,{path:"/Plans/:uuid",render:function(e){return Object(b.jsx)(ne,Object(i.a)(Object(i.a)({},e),{},{requirements:r}))}}),Object(b.jsx)(d.a,{path:"/Requirements",render:function(e){return Object(b.jsx)(te,Object(i.a)(Object(i.a)({},e),{},{requirements:r,onAddRequirement:a,onRemoveRequirement:c}))}}),Object(b.jsx)(d.a,{exact:!0,path:"/",component:re})]})})})})},ae=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,83)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),n(e),s(e),a(e),c(e)}))};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(se,{})}),document.getElementById("root")),ae()}},[[69,1,2]]]);
//# sourceMappingURL=main.16f6ff19.chunk.js.map