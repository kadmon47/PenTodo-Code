(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{68:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(0),a=n.n(c),s=n(17),i=n.n(s),o=n(15),l=n.n(o),d=n(27),j=n(33),u=n(75),h=n(85),p=n(76),b=n(83),x=n(87),m=n(77),O=n(78),f=n(86),g=n(79),v=n(80),y=n(81),k=n(88),w=n(84),T=n(89),C=n(82),A=n(54);n(61);function N(e){var t=e.date,n=2592e6,c=6048e5,a=864e5,s=36e5,i=6e4;return Object(r.jsx)(r.Fragment,{children:function(e){var t=Date.now()-e;return t>n?Math.floor(t/n)+"m ago":t>c?Math.floor(t/c)+"w ago":t>a?Math.floor(t/a)+"d ago":t>s?Math.floor(t/s)+"h ago":t>i?Math.floor(t/i)+"m ago":"Just now"}(t)})}var D=n(28),B=n.n(D),I=n.p+"static/media/icon.0a5d1bf0.png",F=n.p+"static/media/kadum.93071e01.jpg",L=n(32),U=(n(69),n(63),n(52)),M=n(50);L.a.initializeApp({apiKey:"AIzaSyAezJq2YJAeBdjviTyucAg-WIjrH5k4Rms",authDomain:"todolist-883c4.firebaseapp.com",projectId:"todolist-883c4",storageBucket:"todolist-883c4.appspot.com",messagingSenderId:"426999076247",appId:"1:426999076247:web:15741f959fbe503db360d2"});var S=L.a.auth(),P=L.a.firestore(),G=function(){return Object(r.jsx)("div",{style:{marginTop:"10px",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(r.jsxs)(k.a,{style:{maxWidth:"400px"},children:[Object(r.jsx)(k.a.Img,{variant:"top",src:F}),Object(r.jsxs)(k.a.Body,{children:[Object(r.jsx)(k.a.Title,{children:"Kadum Komut"}),Object(r.jsxs)(k.a.Text,{children:["github - ",Object(r.jsx)("a",{href:"https://github.com/kadmon47",children:"https://github.com/kadmon47"})]}),Object(r.jsx)(O.a,{variant:"primary",href:"https://github.com/kadmon47/PenTodo",children:"Go to code"})]})]})})},H=function(){var e=Object(M.a)(P.collection("home"),{idField:"id"}),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(r.jsx)(r.Fragment,{children:c?Object(r.jsxs)(p.a,{variant:"primary",animation:"border",role:"status",children:[Object(r.jsx)("span",{className:"sr-only",children:"Loading..."})," "]}):n&&n.map((function(e){return Object(r.jsx)(K,{createdAt:e.createdAt,text:e.text,complete:e.completed,uid:e.uid,photo:e.photo,name:e.name},e.id)}))})},K=function(e){var t=e.createdAt,n=e.text,c=e.complete,a=(e.uid,e.photo),s=e.name;return Object(r.jsxs)(k.a,{bg:"light ",text:"black",style:{marginTop:"10px"},children:[Object(r.jsxs)(k.a.Header,{as:"h5",style:{color:"grey"},children:[Object(r.jsx)("img",{src:a,alt:s,style:{width:"30px",height:"30px",borderRadius:"50%"}})," ",s]}),Object(r.jsxs)(k.a.Body,{children:[Object(r.jsx)(k.a.Text,{children:n}),Object(r.jsx)(O.a,{variant:c?"success":"danger",size:"sm",children:c?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{children:"completed"})," ",Object(r.jsx)("i",{className:"far fa-check-circle"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{children:"Not completed"})," ",Object(r.jsx)("i",{className:"fas fa-clock"})]})})]}),Object(r.jsx)(k.a.Footer,{children:Object(r.jsx)("small",{children:new Date(t).toString().slice(4,24)})})]})},R=function(e){var t=e.user,n=Object(c.useState)(""),a=Object(j.a)(n,2),s=a[0],i=a[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(w.a,{onSubmit:function(e){e.preventDefault(),""!==s&&B.a.fire({title:"Add Todo",text:s,icon:"question",confirmButtonText:"Add",showCancelButton:!0,preConfirm:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.collection("todoList").doc(S.currentUser.uid).collection("list").add({text:s,createdAt:Date.now(),completed:!1}).then(function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.collection("home").doc(t.id).set({text:s,createdAt:Date.now(),completed:!1,uid:S.currentUser.uid,photo:S.currentUser.photoURL,name:S.currentUser.displayName});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),showLoaderOnConfirm:!0}).then((function(e){e.value&&(B.a.fire("Task Added","","success"),i(""))}))},style:{marginTop:"5px"},children:Object(r.jsxs)(w.a.Group,{children:[Object(r.jsx)(w.a.Control,{type:"text",value:s,onChange:function(e){return i(e.target.value)},placeholder:"type your task . . ."}),Object(r.jsx)(w.a.Text,{className:"text-muted",children:t?Object(r.jsx)(r.Fragment,{children:"Your todo list will be secure with us!"}):Object(r.jsx)(r.Fragment,{children:"Please signed in to add task."})})]})})})},z=function(){var e=P.collection("todoList").doc(S.currentUser.uid).collection("list"),t=Object(M.a)(e.orderBy("createdAt","desc"),{idField:"id"}),n=Object(j.a)(t,2),c=n[0],a=n[1],s=function(t){B.a.fire({title:"Do you want to set this task to completed?",icon:"question",confirmButtonText:"Complete",cancelButtonText:"Not yet!",showCancelButton:!0,showLoaderOnConfirm:!0,preConfirm:function(){var n=Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.doc(t).update({completed:!0}).then(Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.collection("home").doc(t).update({completed:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}).then((function(e){e.value&&B.a.fire("Task Completed","","success")}))},i=function(t){B.a.fire({title:"Do you want to remove this task?",icon:"question",confirmButtonText:"Remove",showCancelButton:!0,showLoaderOnConfirm:!0,preConfirm:function(){var n=Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.doc(t).delete().then(Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.collection("home").doc(t).delete();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}).then((function(e){e.value&&B.a.fire("Task Deleted","","success")}))};return Object(r.jsx)(r.Fragment,{children:a?Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(r.jsxs)(p.a,{variant:"primary",animation:"border",role:"status",children:[Object(r.jsx)("span",{className:"sr-only",children:"Loading..."})," "]})}):Object(r.jsx)(T.a,{as:"ul",children:c&&c.map((function(e){return Object(r.jsx)(J,{completeTask:s,createdAt:e.createdAt,id:e.id,removeTask:i,text:e.text,complete:e.completed},e.id)}))})})},J=function(e){var t=e.text,n=e.complete,c=e.completeTask,a=e.removeTask,s=e.createdAt,i=e.id;return Object(r.jsx)(T.a.Item,{className:"animate__animated animate__bounceInDown",variant:n?"success":"danger",children:Object(r.jsxs)(C.a,{children:[Object(r.jsxs)(A.a,{xs:12,sm:6,md:7,lg:8,children:[Object(r.jsx)("span",{style:{textDecoration:n?"line-through":null},children:t}),"\xa0",n?Object(r.jsxs)(m.a,{variant:"success",children:[new Date(s).toString().slice(4,15)," ",function(e){var t=e.getHours(),n=e.getMinutes(),r=t>=12?"pm":"am";return(t=(t%=12)||12)+":"+(n=n<10?"0"+n:n)+" "+r}(new Date(s))]}):Object(r.jsx)(m.a,{variant:"danger",children:Object(r.jsx)(N,{date:s})})]}),Object(r.jsxs)(A.a,{sm:6,md:5,lg:4,style:{textAlign:"right"},children:[n&&Object(r.jsxs)(m.a,{children:["completed ",Object(r.jsx)("i",{className:"far fa-check-circle"})]}),!n&&Object(r.jsxs)(m.a,{variant:"danger",onClick:function(){return c(i)},style:{cursor:"pointer"},children:["Mark complete ",Object(r.jsx)("i",{className:"fas fa-plus-circle"})]}),"\xa0\xa0\xa0\xa0",Object(r.jsxs)(m.a,{onClick:function(){return a(i)},style:{cursor:"pointer"},variant:"danger",children:["Remove ",Object(r.jsx)("i",{className:"fas fa-backspace"})]})]})]})})},q=function(){var e=Object(U.a)(S),t=Object(j.a)(e,2),n=t[0],c=t[1],a=function(){var e=new L.a.auth.GoogleAuthProvider;S.signInWithPopup(e)};return Object(r.jsx)(u.a,{children:Object(r.jsxs)(u.a,{children:[Object(r.jsxs)(h.a,{children:[Object(r.jsx)(h.a.Brand,{children:Object(r.jsxs)("strong",{children:[Object(r.jsx)("img",{src:I,style:{with:"50px",height:"50px"},alt:"todo list icon"})," PENTODO"]})}),Object(r.jsx)(h.a.Collapse,{className:"justify-content-end",children:Object(r.jsx)(h.a.Text,{children:c?Object(r.jsx)(p.a,{variant:"primary",animation:"border",role:"status",children:Object(r.jsx)("span",{className:"sr-only",children:"Loading..."})}):n?Object(r.jsxs)(r.Fragment,{children:["\xa0",Object(r.jsx)(b.a,{trigger:"hover",placement:"bottom",overlay:Object(r.jsxs)(x.a,{id:"popover-positioned-bottom",children:[Object(r.jsxs)(x.a.Title,{as:"h3",children:["Hi iam ",S.currentUser.displayName]}),Object(r.jsxs)(x.a.Content,{children:[Object(r.jsx)("strong",{children:"Holy Moly!"})," Iam cool."]})]}),children:Object(r.jsx)("img",{style:{width:"40px",height:"40px",borderRadius:"50%"},src:S.currentUser.photoURL,alt:S.currentUser.displayName})},"bottom")," \xa0\xa0\xa0",Object(r.jsx)(m.a,{variant:"danger",style:{cursor:"pointer"},onClick:function(){return S.signOut()},children:"SignOut"})]}):Object(r.jsx)(O.a,{onClick:a,variant:"dark",size:"sm",children:"Sign in with Google"})})})]}),n&&Object(r.jsxs)(f.a,{defaultActiveKey:"home",id:"uncontrolled-tab-example",children:[Object(r.jsx)(g.a,{eventKey:"home",title:"Home",children:Object(r.jsx)(v.a,{children:Object(r.jsx)(H,{})})}),Object(r.jsxs)(g.a,{eventKey:"profile",title:"Your Task",children:[Object(r.jsx)(R,{user:n}),n&&Object(r.jsx)(z,{})]}),Object(r.jsx)(g.a,{eventKey:"developer",title:"Developer",children:Object(r.jsx)(G,{})})]}),!n&&!c&&Object(r.jsxs)(y.a,{children:[Object(r.jsx)("h1",{children:"Welcome to PenTodo!"}),Object(r.jsx)("p",{children:"This is a todo task list where you will be able to view other user's task list and you can still have your task by yourself."}),Object(r.jsxs)("p",{children:[Object(r.jsx)(O.a,{variant:"danger",onClick:a,children:"Get stated by signing in with google"}),Object(r.jsx)(O.a,{href:"https://github.com/kadmon47/PenTodo",style:{marginLeft:"12px"},title:"github code",children:"Go to code"}),Object(r.jsx)(O.a,{href:"https://github.com/kadmon47",style:{marginLeft:"12px"},title:"github code",children:"Developer Page - GitHub"})]})]})]})})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(q,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.43383bd7.chunk.js.map