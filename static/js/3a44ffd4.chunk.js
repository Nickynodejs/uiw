(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{108:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var a=n(10),r=n(9),l=n(16),c=n(22),o=n(17),i=n(18),s=n(5),u=n(19),p=n(4),f=n(3),d=n.n(f),b=n(2),g=n.n(b),v=n(8),h=n.n(v),m=n(112),y=(n(109),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r))),Object(p.a)(Object(s.a)(n),"renderSvgPaths",function(e){var t=m[e];return null==t?null:t.map(function(e,t){return d.a.createElement("path",{key:t,d:e,fillRule:"evenodd"})})}),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,l=e.color,c=e.type,o=e.spin,i=e.verticalAlign,s=e.tagName,u=void 0===s?"span":s,f=Object(r.a)(e,["prefixCls","className","color","type","spin","verticalAlign","tagName"]),b=null;if(null==c||"boolean"==typeof c)return null;b="string"!=typeof c?d.a.cloneElement(c,{fill:l}):d.a.createElement("svg",{fill:l,viewBox:"0 0 20 20"},this.renderSvgPaths(c)),f.style=Object(a.a)({fill:"currentColor"},f.style);var g=Object(a.a)({},f,{className:h()(t,n,"".concat(t,"-").concat(i),Object(p.a)({},"".concat(t,"-spin"),o))});return d.a.createElement(u,g,b)}}]),t}(d.a.PureComponent));y.propTypes={prefixCls:g.a.string,type:g.a.oneOfType([g.a.element,g.a.string]),style:g.a.object,verticalAlign:g.a.oneOf(["middle","baseline"]),spin:g.a.bool},y.defaultProps={prefixCls:"w-icon",style:{},verticalAlign:"middle",spin:!1}},109:function(e,t,n){},135:function(e,t,n){"use strict";
/*!
 * @uiw/formatter v1.2.0
 * Get a formatted date.
 * 
 * Copyright (c) 2019 Kenny Wang <wowohoo@qq.com>
 * https://github.com/uiwjs/date-formatter.git
 * 
 * Licensed under the MIT license.
 */var a=/(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:\/]*)/g,r={YYYY:["getFullYear",4],YY:["getFullYear",2],MM:["getMonth",2,1],DD:["getDate",2],HH:["getHours",2],mm:["getMinutes",2],ss:["getSeconds",2],ms:["getMilliseconds",3]};function l(e,t,n){return"string"!=typeof e&&(t=e,e="YYYY-MM-DD"),t||(t=new Date),e.replace(a,function(e,a,l){var c=r[a],o=c[1],i=c[0];return!0===n&&(i="getUTC"+i.slice(3)),("00"+String(t[i]()+(c[2]||0))).slice(-o)+(l||"")})}l.utc=function(e,t){return l(e,t,!0)};var c=l;t.a=c},158:function(e,t,n){},205:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(25),r=n(10),l=n(4),c=n(9),o=n(16),i=n(22),s=n(17),u=n(18),p=n(19),f=n(3),d=n.n(f),b=n(2),g=n.n(b),v=n(8),h=n.n(v),m=(n(158),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,i=t.style,s=t.title,u=t.children,p=t.visible,f=t.color,b=t.disabled,g=t.bordered,v=t.closable,m=t.light,y=t.onClose,O=Object(c.a)(t,["prefixCls","className","style","title","children","visible","color","disabled","bordered","closable","light","onClose"]),j=h()("".concat(n),o,(e={},Object(l.a)(e,"".concat(n,"-light"),m),Object(l.a)(e,"disabled",b),e)),C=Object(r.a)({},i);return m?(C.color=f,C.borderColor=f,g&&m&&(C.boxShadow="inset 0 0 0 1px ".concat(f))):(C.color="#fff",C.backgroundColor=f),p?d.a.createElement("span",Object(a.a)({className:j,style:C},O),s||u,v&&d.a.createElement("svg",{onClick:y,className:"".concat(n,"-close"),width:"16",height:"16",viewBox:"0 0 16 16"},d.a.createElement("path",{d:"M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z"}))):null}}]),t}(d.a.Component));m.propTypes={prefixCls:g.a.string,color:g.a.string,disabled:g.a.bool,visible:g.a.bool,bordered:g.a.bool,light:g.a.bool,closable:g.a.bool,onClose:g.a.func,title:g.a.oneOfType([g.a.node,g.a.string])},m.defaultProps={prefixCls:"w-tag",disabled:!1,visible:!0,bordered:!0,color:"#6E6E6E",light:!1,title:""}},683:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return x});var a=n(62),r=n.n(a),l=n(63),c=n.n(l),o=n(11),i=n.n(o),s=n(14),u=n.n(s),p=n(12),f=n.n(p),d=n(13),b=n.n(d),g=n(34),v=n.n(g),h=n(15),m=n.n(h),y=n(27),O=n.n(y),j=n(135),C=n(647),Y=n(205),w=n(108),x=function(e){function t(){var e,n;i()(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return n=f()(this,(e=b()(t)).call.apply(e,[this].concat(r))),O()(v()(n),"path","packages/core/src/formatter/README.md"),O()(v()(n),"dependencies",{formatter:j.a,Divider:C.a,Tag:Y.a,Icon:w.a}),n}return m()(t,e),u()(t,[{key:"renderPage",value:function(){var e=c()(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(358).then(n.t.bind(null,641,7));case 2:return t=e.sent,e.abrupt("return",t.default||t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}]),t}(n(110).a)}}]);