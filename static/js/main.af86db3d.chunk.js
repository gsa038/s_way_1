(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{126:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var a=n(42),r=n(9),i="s_way_1/dialogs/SEND-MESSAGE",o={dialogs:[{id:1,name:"Helen"},{id:2,name:"Alex"},{id:3,name:"Andrey"},{id:4,name:"Ivan"}],messages:[{id:1,message:"Hi",dialogId:2,isMyMessage:!0},{id:2,message:"How is your name?",dialogId:2,isMyMessage:!0},{id:3,message:"My name is ...",dialogId:2,isMyMessage:!1},{id:4,message:"Yet another message",dialogId:2,isMyMessage:!0},{id:5,message:"Yet another message",dialogId:2,isMyMessage:!1}]},u=function(e){return{type:i,newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:t.newMessageText,dialogId:2,isMyMessage:!0}])});default:return e}}},127:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return h}));var a=n(8),r=n.n(a),i=n(16),o=n(42),u=n(9),s=n(17),c="s_way_1/users/TOGGLE_FOLLOW",l="s_way_1/users/SET_USERS",m={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},d=function(e){return{type:c,userId:e}},f=function(e){return{type:"s_way_1/users/TOGGLE_IS_FETCHING",isFetching:e}},p=function(e,t){return{type:"s_way_1/users/TOGGLE_IS_FOLLOWING_PROGRESS",followingInProgress:e,userId:t}},g=function(e,t){return function(){var n=Object(i.a)(r.a.mark((function n(a){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(f(!0)),a({type:"s_way_1/users/SET_CURRENT_PAGE",currentPage:e}),n.next=4,s.c.getUsers(e,t);case 4:i=n.sent,a(f(!1)),a((r=i.items,{type:l,users:r})),a({type:"s_way_1/users/SET_TOTAL_COUNT",totalUsersCount:i.totalCount});case 8:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(e,t){return function(){var n=Object(i.a)(r.a.mark((function n(a){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(p(!0,t)),n.next=3,s.c.follow(e,t);case 3:n.sent.resultCode,a(d(t)),a(p(!1,t));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(u.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(u.a)({},e,{followed:!e.followed}):e}))});case l:return Object(u.a)({},e,{users:t.users});case"s_way_1/users/SET_CURRENT_PAGE":return Object(u.a)({},e,{currentPage:t.currentPage});case"s_way_1/users/SET_TOTAL_COUNT":return Object(u.a)({},e,{totalUsersCount:t.totalUsersCount});case"s_way_1/users/TOGGLE_IS_FETCHING":return Object(u.a)({},e,{isFetching:t.isFetching});case"s_way_1/users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(u.a)({},e,{followingInProgress:t.followingInProgress?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!==t.userId}))]});default:return e}}},13:function(e,t,n){e.exports={nav:"NavMenu_nav__3p8TW",item:"NavMenu_item__3hfDF",active:"NavMenu_active__1OZW2"}},132:function(e,t,n){e.exports={friendsElements:"NavFriends_friendsElements__1xggS"}},136:function(e,t,n){e.exports={preloader:"Preloader_preloader__3axXf"}},164:function(e,t,n){e.exports=n(293)},169:function(e,t,n){},17:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n(134),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"40a499b6-4421-4c8e-b336-09492ab319c5"}}),i={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e,t){return(e?r.post("follow/".concat(t)):r.delete("follow/".concat(t))).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please use ProfileAPI object for getProfile"),u.getProfile(e)}},o={authMe:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3?arguments[3]:void 0;return r.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("/auth/login")},getCaptcha:function(){return r.get("/security/get-captcha-url")}},u={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status/",{status:e})},uploadPhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo/",t,{"Content-Type":"multipath/form-data"})},saveProfile:function(e){return r.put("profile",e)}}},170:function(e,t,n){},171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),i=n(64),o=n.n(i),u=(n(169),n(33)),s=n(34),c=n(36),l=n(37),m=(n(170),n(171),function(e){return r.a.createElement("div",null)}),d=(n(172),function(e){return r.a.createElement("div",null)}),f=(n(173),function(e){return r.a.createElement("div",null)}),p=n(10),g=n(13),h=n.n(g),v=n(21),_=function(e){return r.a.createElement("nav",{className:h.a.nav},r.a.createElement("div",{className:"".concat(h.a.item," ").concat(h.a.active)},r.a.createElement(v.b,{to:"/profile",activeClassName:h.a.active},"Profile")),r.a.createElement("div",{className:h.a.item},r.a.createElement(v.b,{to:"/dialogs",activeClassName:h.a.active},"Messages")),r.a.createElement("div",{className:h.a.item},r.a.createElement(v.b,{to:"/users",activeClassName:h.a.active},"Users")),r.a.createElement("div",{className:h.a.item},r.a.createElement(v.b,{to:"/news",activeClassName:h.a.active},"News")),r.a.createElement("div",{className:h.a.item},r.a.createElement(v.b,{to:"/music",activeClassName:h.a.active},"Music")),r.a.createElement("div",{className:h.a.item},r.a.createElement(v.b,{to:"/settings",activeClassName:h.a.active},"Settings")))},E=n(132),b=n.n(E),w=n(67),y=n.n(w),O=function(e){return r.a.createElement("div",{className:y.a.NavFriendsItem},r.a.createElement("img",{className:y.a.ava_img,src:e.ava,alt:""}),r.a.createElement("span",{className:y.a.nickname},e.nickname))},j=function(e){var t=e.friends.map((function(e){return r.a.createElement(O,{nickname:e.nickname,key:e.id,ava:e.ava})}));return r.a.createElement("div",null,r.a.createElement("h3",null,"Friends"),r.a.createElement("div",{className:b.a.friendsElements},t))},S=function(e){return e.isAuth&&r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(j,{friends:e.friends}))},I=n(12),P=Object(I.b)((function(e){return{friends:e.navigationData.friends,isAuth:e.auth.isAuth}}),(function(e){return{}}))(S),C=n(89),N=n.n(C),x=function(e){return r.a.createElement("header",{className:N.a.header},r.a.createElement("img",{src:"https://www.quizony.com/company-name-generator/imageForSharing.jpg",alt:"Company name"}),r.a.createElement("div",{className:N.a.loginBlock},e.isAuth?r.a.createElement("div",null,r.a.createElement("div",null,e.login," : ",e.userId),r.a.createElement("button",{onClick:e.doLogout},"Log out")):r.a.createElement(v.b,{to:"/login"},"Login")))},T=n(8),k=n.n(T),A=n(16),M=n(9),L=n(17),U=n(43),F="s_way_1/auth/SET_USER_DATA",G="s_way_1/auth/SET_CAPTCHA_IRL",R={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},D=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:F,payload:{userId:e,email:t,login:n,isAuth:a,captchaUrl:r}}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{type:G,captchaUrl:e}},B=function(){return function(){var e=Object(A.a)(k.a.mark((function e(t){var n,a,r,i,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.authMe();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,i=a.login,o=a.email,t(D(r,o,i,!0)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=function(){return function(){var e=Object(A.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.logout();case 2:0===e.sent.data.resultCode&&t(D(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(M.a)({},e,{},t.payload);case G:return Object(M.a)({},e,{captchaUrl:t.captchaUrl});default:return e}},J=n(7),X=n(92),Z=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return this.props.isAuth&&r.a.createElement(x,this.props)}}]),n}(r.a.Component),Y=Object(J.d)(Object(I.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userId:e.auth.userId}}),{doLogout:H}),X.a)(Z),q=n(32),K=n.n(q),Q=n(51),V=n.n(Q),$=n(86),ee=n(128),te=n(71),ne=n(46),ae=Object(ne.a)("input"),re=Object(ee.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{className:K.a.login,onSubmit:t},r.a.createElement("div",{className:K.a.loginPage},r.a.createElement("div",{className:K.a.loginForm},Object(ne.b)("Email...","email",[te.b],ae),Object(ne.b)("Password...","password",[te.b],ae,{type:"password"}),r.a.createElement("div",{className:K.a.rememberMeArea},r.a.createElement($.a,{type:"checkbox",name:"rememberMe",component:ae,className:K.a.rememberMeBox}),r.a.createElement("span",{className:K.a.rememberMeText},"remember me")),n&&r.a.createElement("div",{className:V.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Sign in")),a&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:a,alt:"CaptchaImg"})),Object(ne.b)("Input captcha data","captchaString",[],ae)))))})),ie=function(e){return e.isAuth?r.a.createElement(p.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement(re,{onSubmit:function(t){e.doLogin(t.email,t.password,t.rememberMe,t.captchaString)},captchaUrl:e.captchaUrl}))},oe=Object(I.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{doLogin:function(e,t,n,a){return function(){var r=Object(A.a)(k.a.mark((function r(i){var o,u;return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,L.a.login(e,t,n,a);case 2:0===(o=r.sent).data.resultCode?i(B()):(10===o.data.resultCode&&i(function(){var e=Object(A.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.getCaptcha();case 2:(n=e.sent).data.url&&t(z(n.data.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),u=o.data.messages.length>0?o.data.messages[0]:"Some error",i(Object(U.a)("login",{_error:u})));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},doLogout:H})(ie),ue={initialized:!1},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"s_way_1/app/SET_INITIALIZED":return Object(M.a)({},e,{initialized:!0});default:return e}},ce=n(63),le=n(93),me=n(126),de={friends:[{id:1,nickname:"Dimon",ava:"https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg"},{id:2,nickname:"Vasiliy",ava:"https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg"},{id:3,nickname:"tilipon85",ava:"https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg"},{id:4,nickname:"tilipon85",ava:"https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg"},{id:5,nickname:"tilipon85",ava:"https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg"},{id:6,nickname:"tilipon85",ava:"https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg"},{id:7,nickname:"tilipon85",ava:"https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg"},{id:8,nickname:"tilipon85",ava:"https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg"}]},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de;arguments.length>1&&arguments[1];return e},pe=n(127),ge=n(138),he=n(129),ve=Object(J.c)({profilePage:le.b,dialogsPage:me.a,navigationData:fe,usersPage:pe.a,auth:W,app:se,form:he.a}),_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,Ee=Object(J.e)(ve,_e(Object(J.a)(ge.a)));window.__store__=Ee;var be=Ee,we=function(e){return function(t){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(ce.a,null)},r.a.createElement(e,null))}},ye=r.a.lazy((function(){return n.e(5).then(n.bind(null,307))})),Oe=r.a.lazy((function(){return n.e(3).then(n.bind(null,305))})),je=r.a.lazy((function(){return n.e(4).then(n.bind(null,306))})),Se=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",null,r.a.createElement(p.b,{path:"/login",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Y,null),r.a.createElement(P,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(p.b,{path:"/profile/:userId?",render:we(Oe)}),r.a.createElement(p.b,{path:"/dialogs",render:we(ye)}),r.a.createElement(p.b,{path:"/news  ",render:function(){return r.a.createElement(m,null)}}),r.a.createElement(p.b,{path:"/music",render:function(){return r.a.createElement(d,null)}}),r.a.createElement(p.b,{path:"/users",render:we(je)}),r.a.createElement(p.b,{path:"/settings",render:function(){return r.a.createElement(f,null)}})))):r.a.createElement(ce.a,null)}}]),n}(r.a.Component),Ie=Object(J.d)(p.f,Object(I.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(B());Promise.all([t]).then((function(){e({type:"s_way_1/app/SET_INITIALIZED"})}))}}}))(Se),Pe=function(e){return r.a.createElement(v.a,null,r.a.createElement(I.a,{store:be},r.a.createElement(Ie,null)))};o.a.render(r.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){e.exports={loginPage:"Login_loginPage__3j0Ii",loginForm:"Login_loginForm__287nU",rememberMeArea:"Login_rememberMeArea__RlESh",rememberMeBox:"Login_rememberMeBox__2XIkg",rememberMeText:"Login_rememberMeText__11tjl",form:"Login_form__HzneB"}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var a=n(130),r=n(0),i=n.n(r),o=n(51),u=n.n(o),s=n(86),c=function(e){return function(t){var n=t.input,r=t.meta,o=r.touched,s=r.error,c=Object(a.a)(t,["input","meta"]),l=o&&s;return i.a.createElement("div",{className:u.a.formControl+" "+(l?u.a.error:"")},i.a.createElement("div",null,i.a.createElement(e,Object.assign({},n,c))),l&&i.a.createElement("span",null,s))}},l=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return i.a.createElement("div",null,i.a.createElement(s.a,Object.assign({placeholder:e,name:t,component:a,validate:n},r))," ",o)}},51:function(e,t,n){e.exports={formControl:"FormsControl_formControl__1PMmA",error:"FormsControl_error__3Zj-b",formSummaryError:"FormsControl_formSummaryError__2JJXT"}},63:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(136),o=n.n(i),u=n(137);t.a=function(e){return r.a.createElement("div",{className:o.a.preloader},r.a.createElement(u.TailSpin,{width:"72",height:"72",stroke:"black"}))}},67:function(e,t,n){e.exports={NavFriendsItem:"NavFriendsItem_NavFriendsItem__1Pv9j",ava_img:"NavFriendsItem_ava_img__QU4EC",nickname:"NavFriendsItem_nickname__1QeKw"}},71:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){return e?void 0:"Field is required"},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"item";return function(n){return n.length&&n.length>e?"Max length of ".concat(t," is ").concat(e," symbols"):void 0}}},89:function(e,t,n){e.exports={header:"Header_header__wL-eF",loginBlock:"Header_loginBlock__19BMJ"}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(33),r=n(34),i=n(36),o=n(37),u=n(0),s=n.n(u),c=n(10),l=n(12),m=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var t=function(t){Object(o.a)(u,t);var n=Object(i.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(r.a)(u,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(c.a,{to:"/login"})}}]),u}(s.a.Component);return Object(l.b)(m)(t)}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"f",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"g",(function(){return v})),n.d(t,"d",(function(){return _})),n.d(t,"h",(function(){return E})),n.d(t,"e",(function(){return b}));var a=n(8),r=n.n(a),i=n(16),o=n(42),u=n(9),s=n(17),c="s_way_1/pofile/ADD_POST",l="s_way_1/pofile/DELETE_POST",m="s_way_1/pofile/SET_STATUS",d={posts:[{id:1,message:"Hi, how are you?",likesCounts:15},{id:2,message:"It's my first post",likesCounts:20},{id:3,message:"BlaBla",likesCounts:30},{id:4,message:"Lala",likesCounts:40}],status:null,userProfile:null},f=function(e){return{type:c,newPostText:e}},p=function(e){return{type:"s_way_1/pofile/SET_USER_PROFILE",userProfile:e}},g=function(e){return{type:m,status:e}},h=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:a=t.sent,n(g(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode?n(g(e)):n(g("Can't load status message from server"));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getProfile(e);case 2:a=t.sent,n(p(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.uploadPhoto(e);case 2:200===(a=t.sent).status&&n({type:"s_way_1/pofile/UPLOAD_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.saveProfile(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(u.a)({},e,{posts:[].concat(Object(o.a)(e.posts),[{id:5,message:t.newPostText,likesCounts:0}])});case l:return Object(u.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"s_way_1/pofile/SET_USER_PROFILE":return Object(u.a)({},e,{userProfile:t.userProfile});case m:return Object(u.a)({},e,{status:t.status});case"s_way_1/pofile/UPLOAD_PHOTO_SUCCESS":return Object(u.a)({},e,{userProfile:Object(u.a)({},e.userProfile,{photos:t.photos})});default:return e}}}},[[164,1,2]]]);
//# sourceMappingURL=main.af86db3d.chunk.js.map