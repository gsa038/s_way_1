(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{293:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(50),r=a(51),s=a(52),o=a(53),u=a(0),i=a.n(u),l=a(10),c=a(16),p=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){Object(o.a)(u,t);var a=Object(s.a)(u);function u(){return Object(n.a)(this,u),a.apply(this,arguments)}return Object(r.a)(u,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(l.a,{to:"/login"})}}]),u}(i.a.Component);return Object(c.b)(p)(t)}},294:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(92);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,s=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(i){r=!0,s=i}finally{try{n||null==u.return||u.return()}finally{if(r)throw s}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},295:function(e,t,a){e.exports=a.p+"static/media/236832.f07d66e0.png"},300:function(e,t,a){e.exports={posts_block:"MyPosts_posts_block__3l3wg",posts:"MyPosts_posts__386k2"}},301:function(e,t,a){e.exports={item:"Post_item__16f_Q"}},302:function(e,t,a){e.exports={profile_img:"ProfileInfo_profile_img__xHbbB",description_block:"ProfileInfo_description_block__796GO",ava_img:"ProfileInfo_ava_img__2C-vk"}},305:function(e,t,a){"use strict";a.r(t);var n=a(50),r=a(51),s=a(52),o=a(53),u=a(0),i=a.n(u),l=a(300),c=a.n(l),p=a(301),m=a.n(p),f=function(e){return i.a.createElement("div",{className:m.a.item},i.a.createElement("img",{src:"https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg",alt:"Avatar"}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"likes "),e.likesCounts))},d=a(85),h=a(126),b=a(70),v=a(34),E=Object(b.a)(10,"post"),O=Object(v.a)("textarea"),g=Object(h.a)({form:"addPost"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(d.a,{component:O,name:"newPostText",placeholder:"Enter your post here",validate:[b.b,E]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))})),j=function(e){console.log("render MyPosts");var t=e.posts.map((function(e){return i.a.createElement(f,{message:e.message,key:e.id,likesCounts:e.likesCounts})}));return e.isOwner&&i.a.createElement("div",{className:c.a.posts_block},i.a.createElement("h3",null,"My posts"),i.a.createElement(g,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:c.a.posts},t))},P=a(91),y=a(16),_=a(7),k=a(10),S=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(j,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,posts:this.props.posts})))}}]),a}(i.a.Component),w=Object(_.d)(Object(y.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(P.a)(t))}}})),k.f)(S),I=a(294),C=a(302),x=a.n(C),A=a(62),M=a(295),N=a.n(M),D=function(e){var t=Object(u.useState)(!1),a=Object(I.a)(t,2),n=a[0],r=a[1],s=Object(u.useState)(e.status),o=Object(I.a)(s,2),l=o[0],c=o[1];Object(u.useEffect)((function(){c(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(l)},value:l})))},T=function(e){var t=e.isOwner,a=e.userProfile,n=e.status,r=e.updateStatus,s=e.uploadPhoto;if(!a)return i.a.createElement(A.a,null);return i.a.createElement("div",null,i.a.createElement("div",{className:x.a.description_block},i.a.createElement("div",{className:x.a.ava_img},i.a.createElement("img",{src:a.photos.large||N.a,alt:"Avatar"}),t&&i.a.createElement("div",null,i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&s(e.target.files[0])}})),i.a.createElement(D,{status:n,updateStatus:r}),i.a.createElement("div",null,"ID: "+a.userId)),i.a.createElement("div",null,i.a.createElement("div",null,"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f: ",a.fullName),i.a.createElement("div",null,"\u041e\u0431\u043e \u043c\u043d\u0435:"),i.a.createElement("div",null,a.aboutMe),i.a.createElement("div",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"),Object.entries(a.contacts).map((function(e){var t=Object(I.a)(e,2),a=t[0],n=t[1];return n?i.a.createElement("div",null,a,": ",n):null})))))},U=function(e){var t=e.isOwner,a=e.userProfile,n=e.status,r=e.updateStatus,s=e.uploadPhoto;return i.a.createElement("div",null,i.a.createElement(T,{isOwner:t,userProfile:a,status:n,updateStatus:r,uploadPhoto:s}),i.a.createElement(w,null))},B=a(293),G=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId||this.props.auth.userId;this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(U,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,userProfile:this.props.userProfile,status:this.props.status,updateStatus:this.props.updateStatus,uploadPhoto:this.props.uploadPhoto})))}}]),a}(i.a.Component);t.default=Object(_.d)(Object(y.b)((function(e){return{userProfile:e.profilePage.userProfile,status:e.profilePage.status,auth:e.auth}}),{setUserProfile:P.e,getUserProfile:P.d,getStatus:P.c,updateStatus:P.f,uploadPhoto:P.g}),k.f,B.a)(G)}}]);
//# sourceMappingURL=3.b1ce33ad.chunk.js.map