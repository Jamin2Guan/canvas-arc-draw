var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=function(t){return t&&t.Math==Math&&t},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")(),i=function(t){try{return!!t()}catch(t){return!0}},o=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),s={}.propertyIsEnumerable,c=Object.getOwnPropertyDescriptor,a={f:c&&!s.call({1:2},1)?function(t){var e=c(this,t);return!!e&&e.enumerable}:s},u=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},h={}.toString,l=function(t){return h.call(t).slice(8,-1)},f="".split,d=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==l(t)?f.call(t,""):Object(t)}:Object,p=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},v=function(t){return d(p(t))},y=function(t){return"object"==typeof t?null!==t:"function"==typeof t},g=function(t,e){if(!y(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!y(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,w=function(t,e){return b.call(t,e)},m=r.document,x=y(m)&&y(m.createElement),S=function(t){return x?m.createElement(t):{}},O=!o&&!i((function(){return 7!=Object.defineProperty(S("div"),"a",{get:function(){return 7}}).a})),P=Object.getOwnPropertyDescriptor,L={f:o?P:function(t,e){if(t=v(t),e=g(e,!0),O)try{return P(t,e)}catch(t){}if(w(t,e))return u(!a.f.call(t,e),t[e])}},M=/#|\.prototype\./,k=function(t,e){var n=T[D(t)];return n==j||n!=A&&("function"==typeof e?i(e):!!e)},D=k.normalize=function(t){return String(t).replace(M,".").toLowerCase()},T=k.data={},A=k.NATIVE="N",j=k.POLYFILL="P",C=k,E={},I=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},_=function(t,e,n){if(I(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}},F=function(t){if(!y(t))throw TypeError(String(t)+" is not an object");return t},R=Object.defineProperty,G={f:o?R:function(t,e,n){if(F(t),e=g(e,!0),F(n),O)try{return R(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},W=o?function(t,e,n){return G.f(t,e,u(1,n))}:function(t,e,n){return t[e]=n,t},B=L.f,Y=function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e},X=function(t,e){var n,i,o,s,c,a,u,h,l=t.target,f=t.global,d=t.stat,p=t.proto,v=f?r:d?r[l]:(r[l]||{}).prototype,y=f?E:E[l]||(E[l]={}),g=y.prototype;for(o in e)n=!C(f?o:l+(d?".":"#")+o,t.forced)&&v&&w(v,o),c=y[o],n&&(a=t.noTargetGet?(h=B(v,o))&&h.value:v[o]),s=n&&a?a:e[o],n&&typeof c==typeof s||(u=t.bind&&n?_(s,r):t.wrap&&n?Y(s):p&&"function"==typeof s?_(Function.call,s):s,(t.sham||s&&s.sham||c&&c.sham)&&W(u,"sham",!0),y[o]=u,p&&(w(E,i=l+"Prototype")||W(E,i,{}),E[i][o]=s,t.real&&g&&!g[o]&&W(g,o,s)))};X({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}});var N=E.Date.now,U=[].slice,V={},z=function(t,e,n){if(!(e in V)){for(var r=[],i=0;i<e;i++)r[i]="a["+i+"]";V[e]=Function("C,a","return new C("+r.join(",")+")")}return V[e](t,n)},H=Function.bind||function(t){var e=I(this),n=U.call(arguments,1),r=function(){var i=n.concat(U.call(arguments));return this instanceof r?z(e,i.length,i):e.apply(t,i)};return y(e.prototype)&&(r.prototype=e.prototype),r};X({target:"Function",proto:!0},{bind:H});var q=function(t){return E[t+"Prototype"]},J=q("Function").bind,K=Function.prototype,Q=function(t){var e=t.bind;return t===K||t instanceof Function&&e===K.bind?J:e},Z=r["__core-js_shared__"]||function(t,e){try{W(r,t,e)}catch(n){r[t]=e}return e}("__core-js_shared__",{}),$=Function.toString;"function"!=typeof Z.inspectSource&&(Z.inspectSource=function(t){return $.call(t)});var tt,et,nt,rt=Z.inspectSource,it=r.WeakMap,ot="function"==typeof it&&/native code/.test(rt(it)),st=e((function(t){(t.exports=function(t,e){return Z[t]||(Z[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:"pure",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),ct=0,at=Math.random(),ut=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++ct+at).toString(36)},ht=st("keys"),lt=function(t){return ht[t]||(ht[t]=ut(t))},ft={},dt=r.WeakMap;if(ot){var pt=new dt,vt=pt.get,yt=pt.has,gt=pt.set;tt=function(t,e){return gt.call(pt,t,e),e},et=function(t){return vt.call(pt,t)||{}},nt=function(t){return yt.call(pt,t)}}else{var bt=lt("state");ft[bt]=!0,tt=function(t,e){return W(t,bt,e),e},et=function(t){return w(t,bt)?t[bt]:{}},nt=function(t){return w(t,bt)}}var wt,mt,xt,St={set:tt,get:et,has:nt,enforce:function(t){return nt(t)?et(t):tt(t,{})},getterFor:function(t){return function(e){var n;if(!y(e)||(n=et(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},Ot=function(t){return Object(p(t))},Pt=!i((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),Lt=lt("IE_PROTO"),Mt=Object.prototype,kt=Pt?Object.getPrototypeOf:function(t){return t=Ot(t),w(t,Lt)?t[Lt]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Mt:null},Dt=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),Tt=Dt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,At=st("wks"),jt=r.Symbol,Ct=Tt?jt:jt&&jt.withoutSetter||ut,Et=function(t){return w(At,t)||(Dt&&w(jt,t)?At[t]=jt[t]:At[t]=Ct("Symbol."+t)),At[t]},It=(Et("iterator"),!1);[].keys&&("next"in(xt=[].keys())?(mt=kt(kt(xt)))!==Object.prototype&&(wt=mt):It=!0),null==wt&&(wt={});var _t,Ft={IteratorPrototype:wt,BUGGY_SAFARI_ITERATORS:It},Rt=Math.ceil,Gt=Math.floor,Wt=function(t){return isNaN(t=+t)?0:(t>0?Gt:Rt)(t)},Bt=Math.min,Yt=function(t){return t>0?Bt(Wt(t),9007199254740991):0},Xt=Math.max,Nt=Math.min,Ut=function(t,e){var n=Wt(t);return n<0?Xt(n+e,0):Nt(n,e)},Vt=function(t){return function(e,n,r){var i,o=v(e),s=Yt(o.length),c=Ut(r,s);if(t&&n!=n){for(;s>c;)if((i=o[c++])!=i)return!0}else for(;s>c;c++)if((t||c in o)&&o[c]===n)return t||c||0;return!t&&-1}},zt={includes:Vt(!0),indexOf:Vt(!1)}.indexOf,Ht=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],qt=Object.keys||function(t){return function(t,e){var n,r=v(t),i=0,o=[];for(n in r)!w(ft,n)&&w(r,n)&&o.push(n);for(;e.length>i;)w(r,n=e[i++])&&(~zt(o,n)||o.push(n));return o}(t,Ht)},Jt=o?Object.defineProperties:function(t,e){F(t);for(var n,r=qt(e),i=r.length,o=0;i>o;)G.f(t,n=r[o++],e[n]);return t},Kt=function(t){return"function"==typeof t?t:void 0},Qt=function(t,e){return arguments.length<2?Kt(E[t])||Kt(r[t]):E[t]&&E[t][e]||r[t]&&r[t][e]}("document","documentElement"),Zt=lt("IE_PROTO"),$t=function(){},te=function(t){return"<script>"+t+"<\/script>"},ee=function(){try{_t=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;ee=_t?function(t){t.write(te("")),t.close();var e=t.parentWindow.Object;return t=null,e}(_t):((e=S("iframe")).style.display="none",Qt.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(te("document.F=Object")),t.close(),t.F);for(var n=Ht.length;n--;)delete ee.prototype[Ht[n]];return ee()};ft[Zt]=!0;var ne=Object.create||function(t,e){var n;return null!==t?($t.prototype=F(t),n=new $t,$t.prototype=null,n[Zt]=t):n=ee(),void 0===e?n:Jt(n,e)},re={};re[Et("toStringTag")]="z";var ie="[object z]"===String(re),oe=Et("toStringTag"),se="Arguments"==l(function(){return arguments}()),ce=ie?l:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),oe))?n:se?l(e):"Object"==(r=l(e))&&"function"==typeof e.callee?"Arguments":r},ae=ie?{}.toString:function(){return"[object "+ce(this)+"]"},ue=G.f,he=Et("toStringTag"),le=function(t,e,n,r){if(t){var i=n?t:t.prototype;w(i,he)||ue(i,he,{configurable:!0,value:e}),r&&!ie&&W(i,"toString",ae)}},fe=Ft.IteratorPrototype,de=(Object.setPrototypeOf||"__proto__"in{}&&function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}}(),Ft.IteratorPrototype),pe=Ft.BUGGY_SAFARI_ITERATORS,ve=Et("iterator"),ye=St.set,ge=St.getterFor("Array Iterator"),be=(function(t,e,n,r,i,o,s){!function(t,e,n){var r=e+" Iterator";t.prototype=ne(fe,{next:u(1,n)}),le(t,r,!1,!0)}(n,e,r);var c,a,h,l,f,d,p,v=function(t){if(t===i&&m)return m;if(!pe&&t in b)return b[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},y=e+" Iterator",g=!1,b=t.prototype,w=b[ve]||b["@@iterator"]||i&&b[i],m=!pe&&w||v(i),x="Array"==e&&b.entries||w;if(x&&(c=kt(x.call(new t)),de!==Object.prototype&&c.next&&le(c,y,!0,!0)),"values"==i&&w&&"values"!==w.name&&(g=!0,m=function(){return w.call(this)}),s&&b[ve]!==m&&W(b,ve,m),i)if(a={values:v("values"),keys:o?m:v("keys"),entries:v("entries")},s)for(h in a)(pe||g||!(h in b))&&(l=b,f=h,d=a[h],(p=void 0)&&p.enumerable?l[f]=d:W(l,f,d));else X({target:e,proto:!0,forced:pe||g},a)}(Array,"Array",(function(t,e){ye(this,{type:"Array Iterator",target:v(t),index:0,kind:e})}),(function(){var t=ge(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),Et("toStringTag"));for(var we in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var me=r[we],xe=me&&me.prototype;xe&&ce(xe)!==be&&W(xe,be,we)}var Se,Oe,Pe=Array.isArray||function(t){return"Array"==l(t)},Le=Et("species"),Me=function(t,e){var n;return Pe(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Pe(n.prototype)?y(n)&&null===(n=n[Le])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},ke=[].push,De=function(t){var e=1==t,n=2==t,r=3==t,i=4==t,o=6==t,s=5==t||o;return function(c,a,u,h){for(var l,f,p=Ot(c),v=d(p),y=_(a,u,3),g=Yt(v.length),b=0,w=h||Me,m=e?w(c,g):n?w(c,0):void 0;g>b;b++)if((s||b in v)&&(f=y(l=v[b],b,p),t))if(e)m[b]=f;else if(f)switch(t){case 3:return!0;case 5:return l;case 6:return b;case 2:ke.call(m,l)}else if(i)return!1;return o?-1:r||i?i:m}},Te={forEach:De(0),map:De(1),filter:De(2),some:De(3),every:De(4),find:De(5),findIndex:De(6)},Ae=Object.defineProperty,je={},Ce=function(t){throw t},Ee=Te.forEach,Ie=!!(Oe=[]["forEach"])&&i((function(){Oe.call(null,Se||function(){throw 1},1)})),_e=function(t,e){if(w(je,t))return je[t];e||(e={});var n=[][t],r=!!w(e,"ACCESSORS")&&e.ACCESSORS,s=w(e,0)?e[0]:Ce,c=w(e,1)?e[1]:void 0;return je[t]=!!n&&!i((function(){if(r&&!o)return!0;var t={length:-1};r?Ae(t,1,{enumerable:!0,get:Ce}):t[1]=1,n.call(t,s,c)}))}("forEach"),Fe=Ie&&_e?[].forEach:function(t){return Ee(this,t,arguments.length>1?arguments[1]:void 0)};X({target:"Array",proto:!0,forced:[].forEach!=Fe},{forEach:Fe});var Re=q("Array").forEach,Ge=Array.prototype,We={DOMTokenList:!0,NodeList:!0},Be=function(t){var e=t.forEach;return t===Ge||t instanceof Array&&e===Ge.forEach||We.hasOwnProperty(ce(t))?Re:e};X({target:"Array",proto:!0},{fill:function(t){for(var e=Ot(this),n=Yt(e.length),r=arguments.length,i=Ut(r>1?arguments[1]:void 0,n),o=r>2?arguments[2]:void 0,s=void 0===o?n:Ut(o,n);s>i;)e[i++]=t;return e}});var Ye=q("Array").fill,Xe=Array.prototype,Ne=function(t){var e=t.fill;return t===Xe||t instanceof Array&&e===Xe.fill?Ye:e};X({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:G.f});var Ue=e((function(t){var e=E.Object,n=t.exports=function(t,n,r){return e.defineProperty(t,n,r)};e.defineProperty.sham&&(n.sham=!0)}));function Ve(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Ue(t,r.key,r)}}var ze=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.initParam(e),this.draw(this.value)}var e,n,r;return e=t,(n=[{key:"initParam",value:function(t){var e=t.el,n=t.startDeg,r=void 0===n?0:n,i=t.endDeg,o=void 0===i?1:i,s=t.innerColor,c=void 0===s?"#51e6b6":s,a=t.outColor,u=void 0===a?"#c0c0c0":a,h=t.innerLineWidth,l=void 0===h?1:h,f=t.innerLineDash,d=void 0!==f&&f,p=t.outLineWidth,v=void 0===p?20:p,y=t.counterclockwise,g=void 0===y||y,b=t.slider,w=void 0===b?10:b,m=t.color,x=void 0===m?["#06dabc","#33aaff"]:m,S=t.sliderColor,O=void 0===S?"#fff":S,P=t.sliderBorderColor,L=void 0===P?"#33aaff":P,M=t.value,k=void 0===M?0:M,D=t.change,T=void 0===D?function(t){console.log(t)}:D,A=t.mouseUp,j=void 0===A?function(t){}:A,C=t.textShow,E=void 0===C||C,I=t.showDrag,_=void 0===I||I;this.el=e,this.width=e.offsetWidth,this.height=e.offsetHeight,this.center=this.width/2,this.radius=this.width/2-30,this.initCanvas(e),this.startDeg=r,this.endDeg=o,this.innerColor=c,this.outColor=u,this.innerLineWidth=l,this.innerLineDash=d,this.outLineWidth=v,this.counterclockwise=g,this.slider=w,this.color=x,this.sliderColor=O,this.sliderBorderColor=L,this.value=k,this.textShow=E,this.showDrag=_,this.change=T,this.mouseUp=j,this.isDown=!1,this.event(e)}},{key:"initCanvas",value:function(t){this.canvas=document.createElement("canvas"),this.canvas.setAttribute("id","dragArc"),this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.width),t.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.isMobile=/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)}},{key:"draw",value:function(t){var e,n;this.ctx.clearRect(0,0,this.width,this.width),this.ctx.save();var r=this.counterclockwise?Math.PI*(2-this.startDeg):Math.PI*this.startDeg,i=this.counterclockwise?Math.PI*(2-this.endDeg):Math.PI*this.endDeg;this.ctx.beginPath(),this.innerLineDash&&this.ctx.setLineDash([this.innerLineDash,this.innerLineDash]),this.ctx.lineWidth=1,this.ctx.arc(this.center,this.center,this.radius-20,r,i,this.counterclockwise),this.ctx.strokeStyle=this.innerColor,this.ctx.stroke(),this.ctx.beginPath(),this.innerLineDash&&this.ctx.setLineDash([1,0]),this.ctx.arc(this.center,this.center,this.radius,r,i,this.counterclockwise),this.ctx.strokeStyle=this.outColor,this.ctx.lineCap="round",this.ctx.lineWidth=this.outLineWidth,this.ctx.stroke();var o=this.valToDeg(t);if(this.showDrag){var s="String"==typeof this.color?this.color:this.setLinearGradient();this.ctx.beginPath(),this.ctx.arc(this.center,this.center,this.radius,r,o,this.counterclockwise),this.ctx.strokeStyle=s,this.ctx.lineCap="round",this.ctx.lineWidth=this.outLineWidth,this.ctx.stroke(),this.P=this.DegToXY(o),this.ctx.beginPath(),this.ctx.moveTo(this.center,this.center),this.ctx.arc(this.P.x,this.P.y,this.slider+5,0,2*Math.PI,!1),this.ctx.fillStyle=this.sliderBorderColor,Ne(e=this.ctx).call(e),this.ctx.beginPath(),this.ctx.moveTo(this.center,this.center),this.ctx.arc(this.P.x,this.P.y,this.slider,0,2*Math.PI,!1),this.ctx.fillStyle=this.sliderColor,Ne(n=this.ctx).call(n),this.textShow&&(this.ctx.font="".concat(this.center/4,"px serif"),this.ctx.fillStyle=s,this.ctx.textAlign="center",this.ctx.textBaseline="bottom",this.ctx.fillText(this.value,this.center,this.center))}}},{key:"valToDeg",value:function(t){var e=(this.endDeg-this.startDeg)/100*t;return this.counterclockwise&&0!=e&&(e=2-e),((this.counterclockwise?2-this.startDeg:this.startDeg)+e)*Math.PI}},{key:"DegToXY",value:function(t){var e=2*Math.PI-t;return this.respotchangeXY({x:this.radius*Math.cos(e),y:this.radius*Math.sin(e)})}},{key:"spotchangeXY",value:function(t){var e,n=this;return{x:(e=t.x,e-n.center),y:function(t){return n.center-t}(t.y)}}},{key:"respotchangeXY",value:function(t){var e,n=this;return{x:(e=t.x,e+n.center),y:function(t){return n.center-t}(t.y)}}},{key:"setLinearGradient",value:function(){var t,e=this,n=this.ctx.createLinearGradient(0,0,0,this.width);return Be(t=this.color).call(t,(function(t,r){0==r?n.addColorStop(0,t):r==e.color.length-1?n.addColorStop(1,t):n.addColorStop(1/e.color.length*(r+1),t)})),n}},{key:"event",value:function(t){var e,n,r,i,o,s;if(this.isMobile)return t.addEventListener("touchstart",Q(i=this.OnMouseDown).call(i,this),!1),t.addEventListener("touchmove",this.throttle(Q(o=this.OnMouseMove).call(o,this)),!1),void t.addEventListener("touchend",Q(s=this.OnMouseUp).call(s,this),!1);t.addEventListener("mousedown",Q(e=this.OnMouseDown).call(e,this),!1),t.addEventListener("mousemove",this.throttle(Q(n=this.OnMouseMove).call(n,this)),!1),t.addEventListener("mouseup",Q(r=this.OnMouseUp).call(r,this),!1)}},{key:"OnMouseMove",value:function(t){var e;if(this.isDown){var n={};n.x=this.getx(t),n.y=this.gety(t);var r=this.spotchangeXY(n),i=this.XYToDeg(r.x,r.y),o=((i=this.counterclockwise?i:2*Math.PI-i)/Math.PI-this.startDeg)/(this.endDeg-this.startDeg)*100;o<0&&(o=100+o),o>=100&&(o=100),o<=0&&(o=0),Math.abs(o-this.value)>10||(this.animate=requestAnimationFrame(Q(e=this.draw).call(e,this,o)),this.value!=Math.round(o)&&(this.value=Math.round(o),this.change(this.value)))}}},{key:"OnMouseDown",value:function(t){var e=this.getx(t),n=this.gety(t),r=this.P,i=r.x-this.slider-10,o=r.x+this.slider+10,s=r.y-this.slider-10,c=r.y+this.slider+10;this.isDown=i<e&&e<o&&s<n&&n<c}},{key:"OnMouseUp",value:function(){this.mouseUp(),cancelAnimationFrame(this.animate),this.isDown=!1}},{key:"XYToDeg",value:function(t,e){var n,r=Math.atan(e/t);return t>=0&&e>=0&&(n=r),t<=0&&e>=0&&(n=r+Math.PI),t<=0&&e<=0&&(n=r+Math.PI),t>0&&e<0&&(n=r+2*Math.PI),n}},{key:"getx",value:function(t){return this.isMobile?t.touches[0].pageX-this.el.getBoundingClientRect().left:t.clientX-this.el.getBoundingClientRect().left}},{key:"gety",value:function(t){return this.isMobile?t.touches[0].pageY-this.el.getBoundingClientRect().top:t.clientY-this.el.getBoundingClientRect().top}},{key:"throttle",value:function(t){var e=0;return function(){var n=N(),r=this,i=arguments;n-e>10&&(t.apply(r,i),e=n)}}}])&&Ve(e.prototype,n),r&&Ve(e,r),t}();export default ze;
