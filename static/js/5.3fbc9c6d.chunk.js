(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{299:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__xbVNp",dialogsItems:"Dialogs_dialogsItems__3ESiR",verticalSeparator:"Dialogs_verticalSeparator__QOGh1",messages:"Dialogs_messages__2Y5aj",sendBlock:"Dialogs_sendBlock__3DyBb",sendTextArea:"Dialogs_sendTextArea__2AFUk",sendButtonBlock:"Dialogs_sendButtonBlock__j25PA",sendButton:"Dialogs_sendButton__1d-Ey"}},300:function(e,a,s){e.exports={active:"DialogItem_active__1iHEV",dialog:"DialogItem_dialog__28A9x"}},301:function(e,a,s){e.exports={messageItem:"Message_messageItem__25r_9",myMessage:"Message_myMessage__3uX6v"}},307:function(e,a,s){"use strict";s.r(a);var t=s(0),n=s.n(t),o=s(299),i=s.n(o),l=s(300),m=s.n(l),c=s(21),r=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:m.a.dialog+" "+m.a.active},n.a.createElement(c.b,{to:a},e.name))},d=s(301),g=s.n(d),u=function(e){var a=e.message.isMyMessage?g.a.messageItem+" "+g.a.myMessage:g.a.messageItem;return n.a.createElement("div",{className:a},e.message.message)},_=s(86),v=s(128),p=s(71),E=s(46),b=Object(E.a)("textarea"),f=Object(p.a)(20,"post"),B=Object(v.a)({form:"dialogAddMessageForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",{className:i.a.sendBlock},n.a.createElement("div",{className:i.a.sendTextAreaBlock},n.a.createElement(_.a,{component:b,name:"newMessageText",validate:[p.b,f],placeholder:"Enter your message here",className:i.a.sendTextArea})),n.a.createElement("div",{className:i.a.sendButtonBlock},n.a.createElement("button",{className:i.a.sendButton},"Send message"))))})),k=function(e){var a=e.dialogsPage.dialogs.map((function(e){return n.a.createElement(r,{name:e.name,key:e.id,id:e.id})})),s=e.dialogsPage.messages.map((function(e){return n.a.createElement(u,{message:e,key:e.id})}));return n.a.createElement("div",{className:i.a.dialogs},n.a.createElement("div",{className:i.a.dialogsItems},a),n.a.createElement("div",{className:i.a.verticalSeparator}),n.a.createElement("div",null,n.a.createElement("div",{className:i.a.messages},s),n.a.createElement(B,{onSubmit:function(a){e.sendMessage(a.newMessageText)}})))},x=s(126),M=s(12),N=s(92),y=s(7),D=Object(y.d)(Object(M.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(x.b)(a))}}})),N.a)(k);a.default=D}}]);
//# sourceMappingURL=5.3fbc9c6d.chunk.js.map