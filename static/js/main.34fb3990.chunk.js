(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(54)},42:function(e,t,a){},43:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(21),r=a.n(c),s=(a(42),a(35)),i=a(4),o=a(5),u=a(7),m=a(6),h=a(8),E=a(13),f=a(19),b=(a(43),a(44),a(20)),p=a(34),d=a(14),v=a(31),O=Object(d.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":case"REMOVE_USER":return t.payload;default:return e}},auth:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOG_IN":return!0;case"LOG_OUT":return!1;case"SET_AUTH":return e.payload||!1;default:return!1}}}),j=(a(49),a(50),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={status:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"clickHandle",value:function(){this.setState({status:!this.state.status})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"helper-wrapper"},l.a.createElement("div",{className:"helper-container"},l.a.createElement("div",{className:"helper",onClick:function(){return e.clickHandle()}},this.state.status?l.a.createElement("i",{className:"fas fa-arrow-right"}):l.a.createElement("i",{className:"fas fa-arrow-left"})),l.a.createElement("div",{className:this.state.status?"helper-button is-open":"helper-button"},l.a.createElement("i",{className:"fas fa-sign-in-alt"}),l.a.createElement("i",{className:"fas fa-palette"}),l.a.createElement("i",{className:"fas fa-ruble-sign"}),l.a.createElement("i",{className:"fas fa-balance-scale"}))))}}]),t}(n.Component)),w=(a(51),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:this.props.show?"mobile-menu-container show":"mobile-menu-container"},l.a.createElement("div",{className:"mobile-menu"},l.a.createElement("div",{className:"mobile-menu-brand"},"Hyppnotic"),l.a.createElement("div",{className:"mobile-menu-button",onClick:function(){return e.props.setShow()}},l.a.createElement("i",{className:"fas fa-times"})),l.a.createElement("div",{className:"mobile-menu-links"},"Links")))}}]),t}(n.Component)),y=a(29),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={show:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){!0===this.state.show&&(Object(y.a)().reveal(".show",{opacity:.8}),Object(y.a)().sync())}},{key:"show",value:function(){this.setState({show:!this.state.show})}},{key:"setShow",value:function(){this.setState({show:!1})}},{key:"render",value:function(){var e=this;return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"brand"},l.a.createElement("p",null,"Hyppnotic",l.a.createElement("span",null,"store."))),l.a.createElement("div",{className:"menu"},l.a.createElement("ul",null,l.a.createElement("li",null,"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"),l.a.createElement("li",null,"\u041e \u043d\u0430\u0441"),l.a.createElement("li",null,"\u041f\u043e\u043c\u043e\u0449\u044c"),l.a.createElement("li",null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"))),l.a.createElement(j,null),l.a.createElement(w,{show:this.state.show,setShow:this.setShow.bind(this)}),l.a.createElement("div",{className:"button-xs",onClick:function(){return e.show()}},l.a.createElement("i",{className:"fas fa-bars"})))}}]),t}(n.Component),k=Object(b.a)(N),g=(a(52),a(55)),S=a(56),C=a(57),x=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement(g.a,null,l.a.createElement(S.a,null,l.a.createElement(C.a,{md:12,xs:12},l.a.createElement("div",{className:"footer-brand"},"Hyppnotic.store")),l.a.createElement(C.a,{xs:12,md:6,lg:6},l.a.createElement("div",{className:"footer-links"},l.a.createElement("ul",null,l.a.createElement("li",null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),l.a.createElement("li",null,"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),l.a.createElement("li",null,"\u041e \u043d\u0430\u0441"),l.a.createElement("li",null,"\u041f\u043e\u043c\u043e\u0449\u044c"),l.a.createElement("li",null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430")))),l.a.createElement(C.a,{xs:12,md:6,lg:6},l.a.createElement("div",{className:"footer-links"},l.a.createElement("ul",null,l.a.createElement("li",null,"\u0413\u0440\u0443\u043f\u043f\u0430 VK"),l.a.createElement("li",null,"Instagram"),l.a.createElement("li",null,"Twitter"),l.a.createElement("li",null,"Github"),l.a.createElement("li",null,"Facebook")))))),l.a.createElement(g.a,{fluid:!0,className:"footer-rights"},l.a.createElement(S.a,null,l.a.createElement(C.a,{xs:12},l.a.createElement("p",null,"All rights are reserved by Hyppnotic company @2018-2019")))))}}]),t}(n.Component),H=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"root"},l.a.createElement(k,null),l.a.createElement("div",{className:"container-height"},this.props.children),l.a.createElement(x,null))}}]),t}(n.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"Main")}}]),t}(n.Component),_=Object(d.a)(v.a)(d.d)(O),U=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,{store:_},l.a.createElement(f.a,null,l.a.createElement(f.a,null,l.a.createElement(function(e){var t=e.component,a=e.layout,n=Object(s.a)(e,["component","layout"]);return l.a.createElement(E.a,Object.assign({},n,{render:function(e){return l.a.createElement(a,null,l.a.createElement(t,e))}}))},{exact:!0,path:"/",layout:H,component:function(){return l.a.createElement(T,null)}}))))}}]),t}(l.a.Component),G=Object(b.a)(U);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.34fb3990.chunk.js.map