(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e,n,t){e.exports=t(14)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(4),r=t.n(o),l=(t(11),t(1)),i=t(5),A=t(2),u=(t(12),function(){var e=[{id:"1",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"},{id:"2",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"},{id:"3",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"}],n=function(e,n){var t=Object(a.useReducer)((function(n,t){switch(t.type){case"CHECKED_CHANGE":var a=t.payload,c=a.dataItem,o=a.checked,r=c.id;return console.log(r),Object(i.a)({},n,Object(l.a)({},r,o));case"CHECKED_ALL_CHANGE":var A=t.payload,u={};return A&&e.forEach((function(e){u[e.id]=!0})),u;default:return n}}),{}),c=Object(A.a)(t,2),o=c[0],r=c[1],u=0!==e.length&&Object.entries(o).filter((function(e){return Boolean(e[1])})).map((function(n){var t=Object(A.a)(n,1)[0];return e.find((function(e){return e.id===Number(t)}))})).length===e.length;return{checkedMap:o,dispatch:r,onCheckChange:function(e,n){r({type:"CHECKED_CHANGE",payload:{dataItem:e,checked:n}})},checkedAll:u,onCheckedAllChange:function(e){r({type:"CHECKED_ALL_CHANGE",payload:e})}}}(e),t=n.checkedMap,o=n.onCheckChange,r=n.checkedAll,u=n.onCheckedAllChange,d=function(e,n){var t=e.target.checked;u(t)};return console.log(t),c.a.createElement("div",null,c.a.createElement("div",{className:"check-all"},c.a.createElement("input",{checked:r,onChange:d,type:"checkbox"}),"\u5168\u9009",c.a.createElement("span",{className:"span"},"\u5df2\u9009\u4e2d".concat(Object.keys(t).length,"\u4e2a\u5546\u54c1"))),c.a.createElement("div",{className:"img-list"},e.map((function(e){var n=e.id,a=e.name,r=e.url,l=t[e.id]||!1;return c.a.createElement("div",{key:n},c.a.createElement("input",{checked:l,type:"checkbox",onChange:function(n){!function(e,n){var t=e.target.checked;o(n,t)}(n,e)}}),c.a.createElement("img",{src:r,alt:"\u56fe\u7247"}),c.a.createElement("div",null,a))}))))});t(13);var d=function(){return c.a.createElement("div",null,c.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.b30157b4.chunk.js.map