(this["webpackJsonpentando-mf-template"]=this["webpackJsonpentando-mf-template"]||[]).push([[0],{76:function(t,e){},77:function(t,e){},78:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var a=n(26),c=n(27),r=n(28),o=n(30),i=n(31),u=n(29),s=n.n(u),d=n(4),l=n(0),p=n.n(l),m=n(3),f=n(13),h=n(14),b=n(5),I=n.n(b),g="".concat("http://172.40.0.142:1337"),j=("".concat("http://172.40.0.142:8081/api","/template/searchby/"),"EntKcToken"),O=function(){var t=Object(m.a)(p.a.mark((function t(e){var n,a,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("".concat("http://172.40.0.142:8081/api","/template/"));case 2:return n=t.sent,a=n.data,c=a.filter((function(t){return e.indexOf(t.id+"")>-1})),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(m.a)(p.a.mark((function t(e,n){var a,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e||n.length||console.error(e),a=n.map((function(t){return"".concat(g,"/content-manager/collection-types/api::").concat(e,".").concat(e,"/").concat(t)})),t.next=4,I.a.all(a.map((function(t){return I.a.get(t,k({},j))})));case 4:return c=t.sent,t.abrupt("return",c.map((function(t){return t.data})));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),w=function(t){var e=window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:localStorage.getItem("token");return console.log("ET-Widget",e),e?{headers:{Authorization:"".concat(t," ").concat(e)}}:t===j?{headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUyMzY5ODE4LCJleHAiOjE2NTQ5NjE4MTh9.Qwx9gGH33AzgIzSw12xGFy7pyWeHliGAl7-Bgt23Vg0")}}:{}},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Bearer",n=w(e);return Object(h.a)(Object(h.a)({},t),n)},y=(n(78),n(2)),x=n(55);var A=function(t){var e=t.contentName,n=t.contentIdsAndTemplateIds;e=e||"banner",n=n||"%5B%7B%22templateId%22:%2250%22,%22contentId%22:5%7D,%7B%22templateId%22:%2248%22,%22contentId%22:3%7D,%7B%22templateId%22:%2248%22,%22contentId%22:2%7D%5D";var a=Object(d.useState)(null),c=Object(f.a)(a,2),r=c[0],o=c[1],i=Object(d.useState)(decodeURI(n)),u=Object(f.a)(i,2),s=u[0];return u[1],Object(d.useEffect)(Object(m.a)(p.a.mark((function t(){var n,a,c,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.length&&JSON.parse(s),console.log("cid_tid_obj",n),t.next=4,O(n.map((function(t){return t.templateId})));case 4:return a=t.sent,t.next=7,v(e,n.map((function(t){return t.contentId})));case 7:c=t.sent,console.log("getContentsData",c),a&&c&&Object.keys(n).length&&(r=n.map((function(t){var e=c.filter((function(e){return e.id===t.contentId})),n=a.filter((function(e){return+e.id===+t.templateId}));return n.length?x.render(n[0].contentShape,{content:e[0]}):""})),o(r));case 10:case"end":return t.stop()}}),t)}))),[]),console.log("LOGGES contentIdsAndTemplateIds",n),Object(y.jsx)(y.Fragment,{children:r?Object(y.jsx)("div",{dangerouslySetInnerHTML:{__html:r}}):Object(y.jsx)("h1",{children:"Loading..."})})},T={contentName:"contentName",contentIdsAndTemplateIds:"contentIdsAndTemplateIds"},E=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"attributeChangedCallback",value:function(t,e,n){if(!Object.values(T).includes(t))throw new Error("Untracked changed attribute: ".concat(t));this.mountPoint&&n!==e&&this.render()}},{key:"connectedCallback",value:function(){this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),this.render()}},{key:"render",value:function(){var t=this.getAttribute(T.contentName),e=this.getAttribute(T.contentIdsAndTemplateIds);console.log("contentName ==>",t,"contentIdsAndTemplateIds ==>",e),s.a.render(Object(y.jsx)(A,{contentName:t,contentIdsAndTemplateIds:e}),this.mountPoint)}}],[{key:"observedAttributes",get:function(){return Object.values(T)}}]),n}(Object(i.a)(HTMLElement));customElements.define("my-list-widget",E)}},[[80,1,2]]]);
//# sourceMappingURL=main.2b5c8c16.chunk.js.map