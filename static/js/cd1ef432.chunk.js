(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{332:function(e,t,n){},714:function(e,t,n){"use strict";n.r(t);var a=n(62),r=n.n(a),i=n(63),c=n.n(i),u=n(11),s=n.n(u),l=n(14),o=n.n(l),p=n(12),f=n.n(p),h=n(13),v=n.n(h),d=n(34),b=n.n(d),g=n(15),m=n.n(g),y=n(27),j=n.n(y),k=n(25),O=n(4),w=n(9),x=n(10),C=n(16),z=n(22),S=n(17),P=n(18),N=n(19),E=n(3),M=n.n(E),A=n(2),D=n.n(A),J=n(8),R=n.n(J),T=(n(332),function(e){function t(e){var n;return Object(C.a)(this,t),(n=Object(S.a)(this,Object(P.a)(t).call(this,e))).state={current:e.current},n}return Object(N.a)(t,e),Object(z.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.current!==this.props.current&&this.setState({current:e.current})}},{key:"onClick",value:function(e){var t=this;if(!e.active&&!e.disabled){var n=this.props,a=n.total,r=n.pageSize,i=n.onChange,c=this.state.current,u=Math.ceil(a/r),s={};e.label&&(s.current=e.label),"prev"===e.type&&(s.current=c-1>0?c-1:1),"next"===e.type&&(s.current=c+1<=u?c+1:u),/^(jumpPrev|jumpNext)/.test(e.type)&&e.goto&&(s.current="jumpPrev"===e.type?c-e.goto:c+e.goto,s.current>u&&(s.current=u),s.current<1&&(s.current=1)),this.setState(Object(x.a)({},s),function(){i(t.state.current,a,r)})}}},{key:"initPageSoure",value:function(){var e=this.props,t=e.total,n=e.pageSize,a=this.state.current,r=[{type:"prev",disabled:1===a}],i=Math.ceil(t/n),c=i<=5?i:5,u=0,s=0;for(a>3&&i>5&&r.push({label:1}),a>4&&i>6&&r.push({type:"jumpPrev",label:"•••",goto:5});u<c;){a>3&&i>5&&(s=a-3);var l=(u+=1)+s;i-a==0&&i>5&&(l-=2),i-a==1&&i>5&&(l-=1),l<=i&&r.push({label:l,active:a===l})}return a+3<i&&i>6&&r.push({type:"jumpNext",label:"•••",goto:5}),a+2<i&&i>5&&r.push({label:i}),r.push({type:"next",disabled:a===i}),r}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.prefixCls,r=n.className,i=(n.total,n.current,n.pageSize,n.size),c=n.alignment,u=n.divider,s=Object(w.a)(n,["prefixCls","className","total","current","pageSize","size","alignment","divider"]),l=R()(a,r,(e={},Object(O.a)(e,"".concat(a,"-").concat(c),c),Object(O.a)(e,i,i),Object(O.a)(e,"divider",u),e));return M.a.createElement("ul",Object(k.a)({className:l},s),this.initPageSoure().map(function(e,n){var a=M.a.createElement("a",null,e.label);return/^(prev|next)$/.test(e.type)&&(a=M.a.createElement("a",{className:"arrow ".concat(e.type)})),M.a.createElement("li",{className:R()({active:e.active,disabled:e.disabled}),onClick:t.onClick.bind(t,e),key:n},a)}))}}]),t}(M.a.Component));T.propTypes={prefixCls:D.a.string,alignment:D.a.oneOf(["left","center","right"]),size:D.a.oneOf(["default","small"]),total:D.a.number,pageSize:D.a.number,current:D.a.number,onChange:D.a.func},T.defaultProps={prefixCls:"w-pagination",alignment:"left",size:"default",total:0,pageSize:10,current:1,onChange:function(){}};var W=n(647),$=n(110);n.d(t,"default",function(){return q});var q=function(e){function t(){var e,n;s()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=f()(this,(e=v()(t)).call.apply(e,[this].concat(r))),j()(b()(n),"path","packages/core/src/pagination/README.md"),j()(b()(n),"dependencies",{Pagination:T,Divider:W.a}),n}return m()(t,e),o()(t,[{key:"renderPage",value:function(){var e=c()(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(370).then(n.t.bind(null,691,7));case 2:return t=e.sent,e.abrupt("return",t.default||t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}]),t}($.a)}}]);