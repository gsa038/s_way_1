/*! For license information please see 4.c5d0dba3.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{292:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(51),a=n(52),o=n(53),u=n(54),l=n(0),i=n.n(l),s=n(10),c=n(16),p=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(u.a)(l,t);var n=Object(o.a)(l);function l(){return Object(r.a)(this,l),n.apply(this,arguments)}return Object(a.a)(l,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(s.a,{to:"/login"})}}]),l}(i.a.Component);return Object(c.b)(p)(t)}},293:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(92);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},294:function(e,t,n){e.exports=n.p+"static/media/236832.f07d66e0.png"},295:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1Mfzm",usersContainer:"Users_usersContainer__3ol2w",userItem:"Users_userItem__Aqw2w"}},302:function(e,t,n){e.exports={paginator:"Paginator_paginator__PT16I",pageNumber:"Paginator_pageNumber__1YEJU",selectedPage:"Paginator_selectedPage__3piDR",portionPrevButton:"Paginator_portionPrevButton__aItY3",portionNextButton:"Paginator_portionNextButton__2IX3m"}},303:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var u=a.apply(null,r);u&&e.push(u)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},305:function(e,t,n){"use strict";n.r(t);var r=n(51),a=n(52),o=n(53),u=n(54),l=n(0),i=n.n(l),s=n(125),c=n(16),p=n(128),f=n(295),g=n.n(f),m=n(95),h=n(293),v=n(302),d=n.n(v),P=n(303),y=n.n(P),b=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,o=e.portionSize,u=Math.ceil(t/n),s=[],c=1;c<=u;c++)s.push(c);var p=Math.ceil(u/o),f=Object(l.useState)(1),g=Object(h.a)(f,2),v=g[0],P=g[1],b=(v-1)*o+1,w=v*o;return i.a.createElement("div",{className:d.a.paginator},v>1&&i.a.createElement("button",{className:d.a.portionPrevButton,onClick:function(){P(v-1)}},"Prev"),s.filter((function(e){return e>=b&&e<=w})).map((function(e){return i.a.createElement("span",{className:y()(Object(m.a)({},d.a.selectedPage,r===e),d.a.pageNumber),key:e,onClick:function(t){a(e)}},e)})),p>v&&i.a.createElement("button",{className:d.a.portionNextButton,onClick:function(){P(v+1)}},"Next"))},w=n(294),E=n.n(w),C=n(21),_=function(e){var t=e.user,n=e.followingInProgress,r=e.follow;return i.a.createElement("div",{className:g.a.userItem},i.a.createElement("span",null,i.a.createElement(C.b,{to:"/profile/"+t.id},i.a.createElement("div",null,i.a.createElement("img",{src:null!=t.photos.small?t.photos.small:E.a,alt:"ava",className:g.a.userPhoto}))),i.a.createElement("div",null,i.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){t.followed?r(!1,t.id):r(!0,t.id)}},t.followed?"Unfollow":"Follow"))),i.a.createElement("span",null,i.a.createElement("span",null,i.a.createElement("span",null,i.a.createElement("div",null,t.name),i.a.createElement("div",null,t.status))),i.a.createElement("span",null,i.a.createElement("div",null,"u.location.country"),i.a.createElement("div",null,"u.location.city"))))},j=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,a=e.pageSize,o=e.users,u=Object(p.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return i.a.createElement("div",null,i.a.createElement(b,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:a,portionSize:5}),i.a.createElement("div",{className:g.a.usersContainer},o.map((function(e){return i.a.createElement(_,{key:e.id,user:e,followingInProgress:u.followingInProgress,follow:u.follow})}))))},I=n(63),O=n(292),S=n(7);function N(e,t){return e===t}function U(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}function z(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var A=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=0,u=r.pop(),l=z(r),i=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(n)),s=e((function(){for(var e=[],t=l.length,n=0;n<t;n++)e.push(l[n].apply(null,arguments));return i.apply(null,e)}));return s.resultFunc=u,s.dependencies=l,s.recomputations=function(){return o},s.resetRecomputations=function(){return o=0},s}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N,n=null,r=null;return function(){return U(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var x=A((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),k=function(e){return e.usersPage.pageSize},F=function(e){return e.usersPage.totalUsersCount},B=function(e){return e.usersPage.currentPage},M=function(e){return e.usersPage.isFetching},J=function(e){return e.usersPage.followingInProgress},D=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return(e=t.call.apply(t,[this].concat(o))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){if(0===this.props.users.length){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.isFetching?i.a.createElement(I.a,null):null,i.a.createElement(j,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,followingInProgress:this.props.followingInProgress,follow:this.props.follow}))}}]),n}(i.a.Component);t.default=Object(S.d)(Object(c.b)((function(e){return{users:x(e),pageSize:k(e),totalUsersCount:F(e),currentPage:B(e),isFetching:M(e),followingInProgress:J(e)}}),{toggleFollow:s.d,toggleIsFetching:s.f,toggleFollowingProgress:s.e,getUsers:s.c,follow:s.b}),O.a)(D)}}]);
//# sourceMappingURL=4.c5d0dba3.chunk.js.map