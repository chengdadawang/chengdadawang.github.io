(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function l(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(c){if(c.ep)return;c.ep=!0;const d=l(c);fetch(c.href,d)}})();function p4(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Jr={exports:{}},Os={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function m4(){if(_d)return Os;_d=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function l(r,c,d){var f=null;if(d!==void 0&&(f=""+d),c.key!==void 0&&(f=""+c.key),"key"in c){d={};for(var m in c)m!=="key"&&(d[m]=c[m])}else d=c;return c=d.ref,{$$typeof:a,type:r,key:f,ref:c!==void 0?c:null,props:d}}return Os.Fragment=t,Os.jsx=l,Os.jsxs=l,Os}var kd;function g4(){return kd||(kd=1,Jr.exports=m4()),Jr.exports}var S=g4(),Xr={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd;function y4(){if(Sd)return re;Sd=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),T=Symbol.iterator;function A(_){return _===null||typeof _!="object"?null:(_=T&&_[T]||_["@@iterator"],typeof _=="function"?_:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,L={};function G(_,D,$){this.props=_,this.context=D,this.refs=L,this.updater=$||R}G.prototype.isReactComponent={},G.prototype.setState=function(_,D){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,D,"setState")},G.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function H(){}H.prototype=G.prototype;function z(_,D,$){this.props=_,this.context=D,this.refs=L,this.updater=$||R}var se=z.prototype=new H;se.constructor=z,j(se,G.prototype),se.isPureReactComponent=!0;var de=Array.isArray;function ne(){}var W={H:null,A:null,T:null,S:null},Je=Object.prototype.hasOwnProperty;function Me(_,D,$){var Y=$.ref;return{$$typeof:a,type:_,key:D,ref:Y!==void 0?Y:null,props:$}}function ct(_,D){return Me(_.type,D,_.props)}function bn(_){return typeof _=="object"&&_!==null&&_.$$typeof===a}function Xe(_){var D={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function($){return D[$]})}var Cn=/\/+/g;function $n(_,D){return typeof _=="object"&&_!==null&&_.key!=null?Xe(""+_.key):D.toString(36)}function Q(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(ne,ne):(_.status="pending",_.then(function(D){_.status==="pending"&&(_.status="fulfilled",_.value=D)},function(D){_.status==="pending"&&(_.status="rejected",_.reason=D)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function C(_,D,$,Y,le){var ce=typeof _;(ce==="undefined"||ce==="boolean")&&(_=null);var Ke=!1;if(_===null)Ke=!0;else switch(ce){case"bigint":case"string":case"number":Ke=!0;break;case"object":switch(_.$$typeof){case a:case t:Ke=!0;break;case K:return Ke=_._init,C(Ke(_._payload),D,$,Y,le)}}if(Ke)return le=le(_),Ke=Y===""?"."+$n(_,0):Y,de(le)?($="",Ke!=null&&($=Ke.replace(Cn,"$&/")+"/"),C(le,D,$,"",function(di){return di})):le!=null&&(bn(le)&&(le=ct(le,$+(le.key==null||_&&_.key===le.key?"":(""+le.key).replace(Cn,"$&/")+"/")+Ke)),D.push(le)),1;Ke=0;var nn=Y===""?".":Y+":";if(de(_))for(var Pe=0;Pe<_.length;Pe++)Y=_[Pe],ce=nn+$n(Y,Pe),Ke+=C(Y,D,$,ce,le);else if(Pe=A(_),typeof Pe=="function")for(_=Pe.call(_),Pe=0;!(Y=_.next()).done;)Y=Y.value,ce=nn+$n(Y,Pe++),Ke+=C(Y,D,$,ce,le);else if(ce==="object"){if(typeof _.then=="function")return C(Q(_),D,$,Y,le);throw D=String(_),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return Ke}function B(_,D,$){if(_==null)return _;var Y=[],le=0;return C(_,Y,"","",function(ce){return D.call($,ce,le++)}),Y}function te(_){if(_._status===-1){var D=_._result;D=D(),D.then(function($){(_._status===0||_._status===-1)&&(_._status=1,_._result=$)},function($){(_._status===0||_._status===-1)&&(_._status=2,_._result=$)}),_._status===-1&&(_._status=0,_._result=D)}if(_._status===1)return _._result.default;throw _._result}var ke=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)},ye={map:B,forEach:function(_,D,$){B(_,function(){D.apply(this,arguments)},$)},count:function(_){var D=0;return B(_,function(){D++}),D},toArray:function(_){return B(_,function(D){return D})||[]},only:function(_){if(!bn(_))throw Error("React.Children.only expected to receive a single React element child.");return _}};return re.Activity=w,re.Children=ye,re.Component=G,re.Fragment=l,re.Profiler=c,re.PureComponent=z,re.StrictMode=r,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,re.__COMPILER_RUNTIME={__proto__:null,c:function(_){return W.H.useMemoCache(_)}},re.cache=function(_){return function(){return _.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(_,D,$){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var Y=j({},_.props),le=_.key;if(D!=null)for(ce in D.key!==void 0&&(le=""+D.key),D)!Je.call(D,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&D.ref===void 0||(Y[ce]=D[ce]);var ce=arguments.length-2;if(ce===1)Y.children=$;else if(1<ce){for(var Ke=Array(ce),nn=0;nn<ce;nn++)Ke[nn]=arguments[nn+2];Y.children=Ke}return Me(_.type,le,Y)},re.createContext=function(_){return _={$$typeof:f,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:d,_context:_},_},re.createElement=function(_,D,$){var Y,le={},ce=null;if(D!=null)for(Y in D.key!==void 0&&(ce=""+D.key),D)Je.call(D,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(le[Y]=D[Y]);var Ke=arguments.length-2;if(Ke===1)le.children=$;else if(1<Ke){for(var nn=Array(Ke),Pe=0;Pe<Ke;Pe++)nn[Pe]=arguments[Pe+2];le.children=nn}if(_&&_.defaultProps)for(Y in Ke=_.defaultProps,Ke)le[Y]===void 0&&(le[Y]=Ke[Y]);return Me(_,ce,le)},re.createRef=function(){return{current:null}},re.forwardRef=function(_){return{$$typeof:m,render:_}},re.isValidElement=bn,re.lazy=function(_){return{$$typeof:K,_payload:{_status:-1,_result:_},_init:te}},re.memo=function(_,D){return{$$typeof:g,type:_,compare:D===void 0?null:D}},re.startTransition=function(_){var D=W.T,$={};W.T=$;try{var Y=_(),le=W.S;le!==null&&le($,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(ne,ke)}catch(ce){ke(ce)}finally{D!==null&&$.types!==null&&(D.types=$.types),W.T=D}},re.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},re.use=function(_){return W.H.use(_)},re.useActionState=function(_,D,$){return W.H.useActionState(_,D,$)},re.useCallback=function(_,D){return W.H.useCallback(_,D)},re.useContext=function(_){return W.H.useContext(_)},re.useDebugValue=function(){},re.useDeferredValue=function(_,D){return W.H.useDeferredValue(_,D)},re.useEffect=function(_,D){return W.H.useEffect(_,D)},re.useEffectEvent=function(_){return W.H.useEffectEvent(_)},re.useId=function(){return W.H.useId()},re.useImperativeHandle=function(_,D,$){return W.H.useImperativeHandle(_,D,$)},re.useInsertionEffect=function(_,D){return W.H.useInsertionEffect(_,D)},re.useLayoutEffect=function(_,D){return W.H.useLayoutEffect(_,D)},re.useMemo=function(_,D){return W.H.useMemo(_,D)},re.useOptimistic=function(_,D){return W.H.useOptimistic(_,D)},re.useReducer=function(_,D,$){return W.H.useReducer(_,D,$)},re.useRef=function(_){return W.H.useRef(_)},re.useState=function(_){return W.H.useState(_)},re.useSyncExternalStore=function(_,D,$){return W.H.useSyncExternalStore(_,D,$)},re.useTransition=function(){return W.H.useTransition()},re.version="19.2.0",re}var Td;function ko(){return Td||(Td=1,Xr.exports=y4()),Xr.exports}var v=ko();const w4=p4(v);var Qr={exports:{}},Rs={},Fr={exports:{}},Wr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function K4(){return Ed||(Ed=1,(function(a){function t(C,B){var te=C.length;C.push(B);e:for(;0<te;){var ke=te-1>>>1,ye=C[ke];if(0<c(ye,B))C[ke]=B,C[te]=ye,te=ke;else break e}}function l(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var B=C[0],te=C.pop();if(te!==B){C[0]=te;e:for(var ke=0,ye=C.length,_=ye>>>1;ke<_;){var D=2*(ke+1)-1,$=C[D],Y=D+1,le=C[Y];if(0>c($,te))Y<ye&&0>c(le,$)?(C[ke]=le,C[Y]=te,ke=Y):(C[ke]=$,C[D]=te,ke=D);else if(Y<ye&&0>c(le,te))C[ke]=le,C[Y]=te,ke=Y;else break e}}return B}function c(C,B){var te=C.sortIndex-B.sortIndex;return te!==0?te:C.id-B.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var f=Date,m=f.now();a.unstable_now=function(){return f.now()-m}}var p=[],g=[],K=1,w=null,T=3,A=!1,R=!1,j=!1,L=!1,G=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function se(C){for(var B=l(g);B!==null;){if(B.callback===null)r(g);else if(B.startTime<=C)r(g),B.sortIndex=B.expirationTime,t(p,B);else break;B=l(g)}}function de(C){if(j=!1,se(C),!R)if(l(p)!==null)R=!0,ne||(ne=!0,Xe());else{var B=l(g);B!==null&&Q(de,B.startTime-C)}}var ne=!1,W=-1,Je=5,Me=-1;function ct(){return L?!0:!(a.unstable_now()-Me<Je)}function bn(){if(L=!1,ne){var C=a.unstable_now();Me=C;var B=!0;try{e:{R=!1,j&&(j=!1,H(W),W=-1),A=!0;var te=T;try{n:{for(se(C),w=l(p);w!==null&&!(w.expirationTime>C&&ct());){var ke=w.callback;if(typeof ke=="function"){w.callback=null,T=w.priorityLevel;var ye=ke(w.expirationTime<=C);if(C=a.unstable_now(),typeof ye=="function"){w.callback=ye,se(C),B=!0;break n}w===l(p)&&r(p),se(C)}else r(p);w=l(p)}if(w!==null)B=!0;else{var _=l(g);_!==null&&Q(de,_.startTime-C),B=!1}}break e}finally{w=null,T=te,A=!1}B=void 0}}finally{B?Xe():ne=!1}}}var Xe;if(typeof z=="function")Xe=function(){z(bn)};else if(typeof MessageChannel<"u"){var Cn=new MessageChannel,$n=Cn.port2;Cn.port1.onmessage=bn,Xe=function(){$n.postMessage(null)}}else Xe=function(){G(bn,0)};function Q(C,B){W=G(function(){C(a.unstable_now())},B)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(C){C.callback=null},a.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Je=0<C?Math.floor(1e3/C):5},a.unstable_getCurrentPriorityLevel=function(){return T},a.unstable_next=function(C){switch(T){case 1:case 2:case 3:var B=3;break;default:B=T}var te=T;T=B;try{return C()}finally{T=te}},a.unstable_requestPaint=function(){L=!0},a.unstable_runWithPriority=function(C,B){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var te=T;T=C;try{return B()}finally{T=te}},a.unstable_scheduleCallback=function(C,B,te){var ke=a.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ke+te:ke):te=ke,C){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=te+ye,C={id:K++,callback:B,priorityLevel:C,startTime:te,expirationTime:ye,sortIndex:-1},te>ke?(C.sortIndex=te,t(g,C),l(p)===null&&C===l(g)&&(j?(H(W),W=-1):j=!0,Q(de,te-ke))):(C.sortIndex=ye,t(p,C),R||A||(R=!0,ne||(ne=!0,Xe()))),C},a.unstable_shouldYield=ct,a.unstable_wrapCallback=function(C){var B=T;return function(){var te=T;T=B;try{return C.apply(this,arguments)}finally{T=te}}}})(Wr)),Wr}var Ad;function v4(){return Ad||(Ad=1,Fr.exports=K4()),Fr.exports}var eo={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function b4(){if(qd)return on;qd=1;var a=ko();function t(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var K=2;K<arguments.length;K++)g+="&args[]="+encodeURIComponent(arguments[K])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var r={d:{f:l,r:function(){throw Error(t(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(p,g,K){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:w==null?null:""+w,children:p,containerInfo:g,implementation:K}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,on.createPortal=function(p,g){var K=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return d(p,g,null,K)},on.flushSync=function(p){var g=f.T,K=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=g,r.p=K,r.d.f()}},on.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(p,g))},on.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},on.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var K=g.as,w=m(K,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,A=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;K==="style"?r.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:T,fetchPriority:A}):K==="script"&&r.d.X(p,{crossOrigin:w,integrity:T,fetchPriority:A,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},on.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var K=m(g.as,g.crossOrigin);r.d.M(p,{crossOrigin:K,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(p)},on.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var K=g.as,w=m(K,g.crossOrigin);r.d.L(p,K,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},on.preloadModule=function(p,g){if(typeof p=="string")if(g){var K=m(g.as,g.crossOrigin);r.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:K,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(p)},on.requestFormReset=function(p){r.d.r(p)},on.unstable_batchedUpdates=function(p,g){return p(g)},on.useFormState=function(p,g,K){return f.H.useFormState(p,g,K)},on.useFormStatus=function(){return f.H.useHostTransitionStatus()},on.version="19.2.0",on}var xd;function _4(){if(xd)return eo.exports;xd=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),eo.exports=b4(),eo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function k4(){if(Od)return Rs;Od=1;var a=v4(),t=ko(),l=_4();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(d(e)!==e)throw Error(r(188))}function g(e){var n=e.alternate;if(!n){if(n=d(e),n===null)throw Error(r(188));return n!==e?null:e}for(var i=e,s=n;;){var o=i.return;if(o===null)break;var u=o.alternate;if(u===null){if(s=o.return,s!==null){i=s;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===i)return p(o),e;if(u===s)return p(o),n;u=u.sibling}throw Error(r(188))}if(i.return!==s.return)i=o,s=u;else{for(var h=!1,y=o.child;y;){if(y===i){h=!0,i=o,s=u;break}if(y===s){h=!0,s=o,i=u;break}y=y.sibling}if(!h){for(y=u.child;y;){if(y===i){h=!0,i=u,s=o;break}if(y===s){h=!0,s=u,i=o;break}y=y.sibling}if(!h)throw Error(r(189))}}if(i.alternate!==s)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:n}function K(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=K(e),n!==null)return n;e=e.sibling}return null}var w=Object.assign,T=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),z=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),Me=Symbol.for("react.activity"),ct=Symbol.for("react.memo_cache_sentinel"),bn=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=bn&&e[bn]||e["@@iterator"],typeof e=="function"?e:null)}var Cn=Symbol.for("react.client.reference");function $n(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Cn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case G:return"Profiler";case L:return"StrictMode";case de:return"Suspense";case ne:return"SuspenseList";case Me:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case z:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case se:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return n=e.displayName||null,n!==null?n:$n(e.type)||"Memo";case Je:n=e._payload,e=e._init;try{return $n(e(n))}catch{}}return null}var Q=Array.isArray,C=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ke=[],ye=-1;function _(e){return{current:e}}function D(e){0>ye||(e.current=ke[ye],ke[ye]=null,ye--)}function $(e,n){ye++,ke[ye]=e.current,e.current=n}var Y=_(null),le=_(null),ce=_(null),Ke=_(null);function nn(e,n){switch($(ce,n),$(le,e),$(Y,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?$c(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=$c(n),e=Gc(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(Y),$(Y,e)}function Pe(){D(Y),D(le),D(ce)}function di(e){e.memoizedState!==null&&$(Ke,e);var n=Y.current,i=Gc(n,e.type);n!==i&&($(le,e),$(Y,i))}function Pi(e){le.current===e&&(D(Y),D(le)),Ke.current===e&&(D(Ke),Es._currentValue=te)}var ji,ja;function Gn(e){if(ji===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);ji=n&&n[1]||"",ja=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ji+e+ja}var Mn=!1;function Di(e,n){if(!e||Mn)return"";Mn=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(M){var O=M}Reflect.construct(e,[],N)}else{try{N.call()}catch(M){O=M}e.call(N.prototype)}}else{try{throw Error()}catch(M){O=M}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(M){if(M&&O&&typeof M.stack=="string")return[M.stack,O.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),h=u[0],y=u[1];if(h&&y){var b=h.split(`
`),x=y.split(`
`);for(o=s=0;s<b.length&&!b[s].includes("DetermineComponentFrameRoot");)s++;for(;o<x.length&&!x[o].includes("DetermineComponentFrameRoot");)o++;if(s===b.length||o===x.length)for(s=b.length-1,o=x.length-1;1<=s&&0<=o&&b[s]!==x[o];)o--;for(;1<=s&&0<=o;s--,o--)if(b[s]!==x[o]){if(s!==1||o!==1)do if(s--,o--,0>o||b[s]!==x[o]){var I=`
`+b[s].replace(" at new "," at ");return e.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",e.displayName)),I}while(1<=s&&0<=o);break}}}finally{Mn=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?Gn(i):""}function Da(e,n){switch(e.tag){case 26:case 27:case 5:return Gn(e.type);case 16:return Gn("Lazy");case 13:return e.child!==n&&n!==null?Gn("Suspense Fallback"):Gn("Suspense");case 19:return Gn("SuspenseList");case 0:case 15:return Di(e.type,!1);case 11:return Di(e.type.render,!1);case 1:return Di(e.type,!0);case 31:return Gn("Activity");default:return""}}function Ni(e){try{var n="",i=null;do n+=Da(e,i),i=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Bi=Object.prototype.hasOwnProperty,Ui=a.unstable_scheduleCallback,zi=a.unstable_cancelCallback,U=a.unstable_shouldYield,V=a.unstable_requestPaint,fe=a.unstable_now,He=a.unstable_getCurrentPriorityLevel,cn=a.unstable_ImmediatePriority,fn=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,It=a.unstable_LowPriority,To=a.unstable_IdlePriority,J3=a.log,X3=a.unstable_setDisableYieldValue,Na=null,_n=null;function Pt(e){if(typeof J3=="function"&&X3(e),_n&&typeof _n.setStrictMode=="function")try{_n.setStrictMode(Na,e)}catch{}}var kn=Math.clz32?Math.clz32:W3,Q3=Math.log,F3=Math.LN2;function W3(e){return e>>>=0,e===0?32:31-(Q3(e)/F3|0)|0}var Xs=256,Qs=262144,Fs=4194304;function fi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ws(e,n,i){var s=e.pendingLanes;if(s===0)return 0;var o=0,u=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var y=s&134217727;return y!==0?(s=y&~u,s!==0?o=fi(s):(h&=y,h!==0?o=fi(h):i||(i=y&~e,i!==0&&(o=fi(i))))):(y=s&~u,y!==0?o=fi(y):h!==0?o=fi(h):i||(i=s&~e,i!==0&&(o=fi(i)))),o===0?0:n!==0&&n!==o&&(n&u)===0&&(u=o&-o,i=n&-n,u>=i||u===32&&(i&4194048)!==0)?n:o}function Ba(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ef(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eo(){var e=Fs;return Fs<<=1,(Fs&62914560)===0&&(Fs=4194304),e}function D0(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function Ua(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nf(e,n,i,s,o,u){var h=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var y=e.entanglements,b=e.expirationTimes,x=e.hiddenUpdates;for(i=h&~i;0<i;){var I=31-kn(i),N=1<<I;y[I]=0,b[I]=-1;var O=x[I];if(O!==null)for(x[I]=null,I=0;I<O.length;I++){var M=O[I];M!==null&&(M.lane&=-536870913)}i&=~N}s!==0&&Ao(e,s,0),u!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=u&~(h&~n))}function Ao(e,n,i){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-kn(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|i&261930}function qo(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var s=31-kn(i),o=1<<s;o&n|e[s]&n&&(e[s]|=n),i&=~o}}function xo(e,n){var i=n&-n;return i=(i&42)!==0?1:N0(i),(i&(e.suspendedLanes|n))!==0?0:i}function N0(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function B0(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Oo(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:md(e.type))}function Ro(e,n){var i=B.p;try{return B.p=e,n()}finally{B.p=i}}var jt=Math.random().toString(36).slice(2),tn="__reactFiber$"+jt,hn="__reactProps$"+jt,Hi="__reactContainer$"+jt,U0="__reactEvents$"+jt,tf="__reactListeners$"+jt,af="__reactHandles$"+jt,Co="__reactResources$"+jt,za="__reactMarker$"+jt;function z0(e){delete e[tn],delete e[hn],delete e[U0],delete e[tf],delete e[af]}function Li(e){var n=e[tn];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Hi]||i[tn]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Wc(e);e!==null;){if(i=e[tn])return i;e=Wc(e)}return n}e=i,i=e.parentNode}return null}function Vi(e){if(e=e[tn]||e[Hi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ha(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function $i(e){var n=e[Co];return n||(n=e[Co]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Qe(e){e[za]=!0}var Mo=new Set,Io={};function hi(e,n){Gi(e,n),Gi(e+"Capture",n)}function Gi(e,n){for(Io[e]=n,e=0;e<n.length;e++)Mo.add(n[e])}var sf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Po={},jo={};function lf(e){return Bi.call(jo,e)?!0:Bi.call(Po,e)?!1:sf.test(e)?jo[e]=!0:(Po[e]=!0,!1)}function e1(e,n,i){if(lf(n))if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+i)}}function n1(e,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+i)}}function dt(e,n,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(n,i,""+s)}}function In(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Do(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rf(e,n,i){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var o=s.get,u=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(h){i=""+h,u.call(this,h)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(h){i=""+h},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function H0(e){if(!e._valueTracker){var n=Do(e)?"checked":"value";e._valueTracker=rf(e,n,""+e[n])}}function No(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),s="";return e&&(s=Do(e)?e.checked?"true":"false":e.value),e=s,e!==i?(n.setValue(e),!0):!1}function t1(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var of=/[\n"\\]/g;function Pn(e){return e.replace(of,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function L0(e,n,i,s,o,u,h,y){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),n!=null?h==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+In(n)):e.value!==""+In(n)&&(e.value=""+In(n)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),n!=null?V0(e,h,In(n)):i!=null?V0(e,h,In(i)):s!=null&&e.removeAttribute("value"),o==null&&u!=null&&(e.defaultChecked=!!u),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+In(y):e.removeAttribute("name")}function Bo(e,n,i,s,o,u,h,y){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),n!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){H0(e);return}i=i!=null?""+In(i):"",n=n!=null?""+In(n):i,y||n===e.value||(e.value=n),e.defaultValue=n}s=s??o,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=y?e.checked:!!s,e.defaultChecked=!!s,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),H0(e)}function V0(e,n,i){n==="number"&&t1(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function Zi(e,n,i,s){if(e=e.options,n){n={};for(var o=0;o<i.length;o++)n["$"+i[o]]=!0;for(i=0;i<e.length;i++)o=n.hasOwnProperty("$"+e[i].value),e[i].selected!==o&&(e[i].selected=o),o&&s&&(e[i].defaultSelected=!0)}else{for(i=""+In(i),n=null,o=0;o<e.length;o++){if(e[o].value===i){e[o].selected=!0,s&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Uo(e,n,i){if(n!=null&&(n=""+In(n),n!==e.value&&(e.value=n),i==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=i!=null?""+In(i):""}function zo(e,n,i,s){if(n==null){if(s!=null){if(i!=null)throw Error(r(92));if(Q(s)){if(1<s.length)throw Error(r(93));s=s[0]}i=s}i==null&&(i=""),n=i}i=In(n),e.defaultValue=i,s=e.textContent,s===i&&s!==""&&s!==null&&(e.value=s),H0(e)}function Yi(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var uf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ho(e,n,i){var s=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,i):typeof i!="number"||i===0||uf.has(n)?n==="float"?e.cssFloat=i:e[n]=(""+i).trim():e[n]=i+"px"}function Lo(e,n,i){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,i!=null){for(var s in i)!i.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var o in n)s=n[o],n.hasOwnProperty(o)&&i[o]!==s&&Ho(e,o,s)}else for(var u in n)n.hasOwnProperty(u)&&Ho(e,u,n[u])}function $0(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),df=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function i1(e){return df.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ft(){}var G0=null;function Z0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ji=null,Xi=null;function Vo(e){var n=Vi(e);if(n&&(e=n.stateNode)){var i=e[hn]||null;e:switch(e=n.stateNode,n.type){case"input":if(L0(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Pn(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var s=i[n];if(s!==e&&s.form===e.form){var o=s[hn]||null;if(!o)throw Error(r(90));L0(s,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(n=0;n<i.length;n++)s=i[n],s.form===e.form&&No(s)}break e;case"textarea":Uo(e,i.value,i.defaultValue);break e;case"select":n=i.value,n!=null&&Zi(e,!!i.multiple,n,!1)}}}var Y0=!1;function $o(e,n,i){if(Y0)return e(n,i);Y0=!0;try{var s=e(n);return s}finally{if(Y0=!1,(Ji!==null||Xi!==null)&&(V1(),Ji&&(n=Ji,e=Xi,Xi=Ji=null,Vo(n),e)))for(n=0;n<e.length;n++)Vo(e[n])}}function La(e,n){var i=e.stateNode;if(i===null)return null;var s=i[hn]||null;if(s===null)return null;i=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,n,typeof i));return i}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),J0=!1;if(ht)try{var Va={};Object.defineProperty(Va,"passive",{get:function(){J0=!0}}),window.addEventListener("test",Va,Va),window.removeEventListener("test",Va,Va)}catch{J0=!1}var Dt=null,X0=null,a1=null;function Go(){if(a1)return a1;var e,n=X0,i=n.length,s,o="value"in Dt?Dt.value:Dt.textContent,u=o.length;for(e=0;e<i&&n[e]===o[e];e++);var h=i-e;for(s=1;s<=h&&n[i-s]===o[u-s];s++);return a1=o.slice(e,1<s?1-s:void 0)}function s1(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function l1(){return!0}function Zo(){return!1}function pn(e){function n(i,s,o,u,h){this._reactName=i,this._targetInst=o,this.type=s,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(i=e[y],this[y]=i?i(u):u[y]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?l1:Zo,this.isPropagationStopped=Zo,this}return w(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=l1)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=l1)},persist:function(){},isPersistent:l1}),n}var pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},r1=pn(pi),$a=w({},pi,{view:0,detail:0}),ff=pn($a),Q0,F0,Ga,o1=w({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:el,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ga&&(Ga&&e.type==="mousemove"?(Q0=e.screenX-Ga.screenX,F0=e.screenY-Ga.screenY):F0=Q0=0,Ga=e),Q0)},movementY:function(e){return"movementY"in e?e.movementY:F0}}),Yo=pn(o1),hf=w({},o1,{dataTransfer:0}),pf=pn(hf),mf=w({},$a,{relatedTarget:0}),W0=pn(mf),gf=w({},pi,{animationName:0,elapsedTime:0,pseudoElement:0}),yf=pn(gf),wf=w({},pi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kf=pn(wf),vf=w({},pi,{data:0}),Jo=pn(vf),bf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_f={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=kf[e])?!!n[e]:!1}function el(){return Sf}var Tf=w({},$a,{key:function(e){if(e.key){var n=bf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=s1(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_f[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:el,charCode:function(e){return e.type==="keypress"?s1(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?s1(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ef=pn(Tf),Af=w({},o1,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xo=pn(Af),qf=w({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:el}),xf=pn(qf),Of=w({},pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rf=pn(Of),Cf=w({},o1,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mf=pn(Cf),If=w({},pi,{newState:0,oldState:0}),Pf=pn(If),jf=[9,13,27,32],nl=ht&&"CompositionEvent"in window,Za=null;ht&&"documentMode"in document&&(Za=document.documentMode);var Df=ht&&"TextEvent"in window&&!Za,Qo=ht&&(!nl||Za&&8<Za&&11>=Za),Fo=" ",Wo=!1;function eu(e,n){switch(e){case"keyup":return jf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qi=!1;function Nf(e,n){switch(e){case"compositionend":return nu(n);case"keypress":return n.which!==32?null:(Wo=!0,Fo);case"textInput":return e=n.data,e===Fo&&Wo?null:e;default:return null}}function Bf(e,n){if(Qi)return e==="compositionend"||!nl&&eu(e,n)?(e=Go(),a1=X0=Dt=null,Qi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qo&&n.locale!=="ko"?null:n.data;default:return null}}var Uf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Uf[e.type]:n==="textarea"}function iu(e,n,i,s){Ji?Xi?Xi.push(s):Xi=[s]:Ji=s,n=Q1(n,"onChange"),0<n.length&&(i=new r1("onChange","change",null,i,s),e.push({event:i,listeners:n}))}var Ya=null,Ja=null;function zf(e){Bc(e,0)}function u1(e){var n=Ha(e);if(No(n))return e}function au(e,n){if(e==="change")return n}var su=!1;if(ht){var tl;if(ht){var il="oninput"in document;if(!il){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),il=typeof lu.oninput=="function"}tl=il}else tl=!1;su=tl&&(!document.documentMode||9<document.documentMode)}function ru(){Ya&&(Ya.detachEvent("onpropertychange",ou),Ja=Ya=null)}function ou(e){if(e.propertyName==="value"&&u1(Ja)){var n=[];iu(n,Ja,e,Z0(e)),$o(zf,n)}}function Hf(e,n,i){e==="focusin"?(ru(),Ya=n,Ja=i,Ya.attachEvent("onpropertychange",ou)):e==="focusout"&&ru()}function Lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return u1(Ja)}function Vf(e,n){if(e==="click")return u1(n)}function $f(e,n){if(e==="input"||e==="change")return u1(n)}function Gf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Sn=typeof Object.is=="function"?Object.is:Gf;function Xa(e,n){if(Sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),s=Object.keys(n);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var o=i[s];if(!Bi.call(n,o)||!Sn(e[o],n[o]))return!1}return!0}function uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cu(e,n){var i=uu(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=n&&s>=n)return{node:i,offset:n-e};e=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=uu(i)}}function du(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?du(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function fu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=t1(e.document);n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=t1(e.document)}return n}function al(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Zf=ht&&"documentMode"in document&&11>=document.documentMode,Fi=null,sl=null,Qa=null,ll=!1;function hu(e,n,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ll||Fi==null||Fi!==t1(s)||(s=Fi,"selectionStart"in s&&al(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Qa&&Xa(Qa,s)||(Qa=s,s=Q1(sl,"onSelect"),0<s.length&&(n=new r1("onSelect","select",null,n,i),e.push({event:n,listeners:s}),n.target=Fi)))}function mi(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var Wi={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionrun:mi("Transition","TransitionRun"),transitionstart:mi("Transition","TransitionStart"),transitioncancel:mi("Transition","TransitionCancel"),transitionend:mi("Transition","TransitionEnd")},rl={},pu={};ht&&(pu=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function gi(e){if(rl[e])return rl[e];if(!Wi[e])return e;var n=Wi[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in pu)return rl[e]=n[i];return e}var mu=gi("animationend"),gu=gi("animationiteration"),yu=gi("animationstart"),Yf=gi("transitionrun"),Jf=gi("transitionstart"),Xf=gi("transitioncancel"),wu=gi("transitionend"),Ku=new Map,ol="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ol.push("scrollEnd");function Zn(e,n){Ku.set(e,n),hi(n,[e])}var c1=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},jn=[],ea=0,ul=0;function d1(){for(var e=ea,n=ul=ea=0;n<e;){var i=jn[n];jn[n++]=null;var s=jn[n];jn[n++]=null;var o=jn[n];jn[n++]=null;var u=jn[n];if(jn[n++]=null,s!==null&&o!==null){var h=s.pending;h===null?o.next=o:(o.next=h.next,h.next=o),s.pending=o}u!==0&&vu(i,o,u)}}function f1(e,n,i,s){jn[ea++]=e,jn[ea++]=n,jn[ea++]=i,jn[ea++]=s,ul|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function cl(e,n,i,s){return f1(e,n,i,s),h1(e)}function yi(e,n){return f1(e,null,null,n),h1(e)}function vu(e,n,i){e.lanes|=i;var s=e.alternate;s!==null&&(s.lanes|=i);for(var o=!1,u=e.return;u!==null;)u.childLanes|=i,s=u.alternate,s!==null&&(s.childLanes|=i),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(o=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,o&&n!==null&&(o=31-kn(i),e=u.hiddenUpdates,s=e[o],s===null?e[o]=[n]:s.push(n),n.lane=i|536870912),u):null}function h1(e){if(50<Ks)throw Ks=0,Kr=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var na={};function Qf(e,n,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(e,n,i,s){return new Qf(e,n,i,s)}function dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pt(e,n){var i=e.alternate;return i===null?(i=Tn(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function bu(e,n){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,n=i.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function p1(e,n,i,s,o,u){var h=0;if(s=e,typeof e=="function")dl(e)&&(h=1);else if(typeof e=="string")h=t4(e,i,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Me:return e=Tn(31,i,n,o),e.elementType=Me,e.lanes=u,e;case j:return wi(i.children,o,u,n);case L:h=8,o|=24;break;case G:return e=Tn(12,i,n,o|2),e.elementType=G,e.lanes=u,e;case de:return e=Tn(13,i,n,o),e.elementType=de,e.lanes=u,e;case ne:return e=Tn(19,i,n,o),e.elementType=ne,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:h=10;break e;case H:h=9;break e;case se:h=11;break e;case W:h=14;break e;case Je:h=16,s=null;break e}h=29,i=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Tn(h,i,n,o),n.elementType=e,n.type=s,n.lanes=u,n}function wi(e,n,i,s){return e=Tn(7,e,s,n),e.lanes=i,e}function fl(e,n,i){return e=Tn(6,e,null,n),e.lanes=i,e}function _u(e){var n=Tn(18,null,null,0);return n.stateNode=e,n}function hl(e,n,i){return n=Tn(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ku=new WeakMap;function Dn(e,n){if(typeof e=="object"&&e!==null){var i=ku.get(e);return i!==void 0?i:(n={value:e,source:n,stack:Ni(n)},ku.set(e,n),n)}return{value:e,source:n,stack:Ni(n)}}var ta=[],ia=0,m1=null,Fa=0,Nn=[],Bn=0,Nt=null,it=1,at="";function mt(e,n){ta[ia++]=Fa,ta[ia++]=m1,m1=e,Fa=n}function Su(e,n,i){Nn[Bn++]=it,Nn[Bn++]=at,Nn[Bn++]=Nt,Nt=e;var s=it;e=at;var o=32-kn(s)-1;s&=~(1<<o),i+=1;var u=32-kn(n)+o;if(30<u){var h=o-o%5;u=(s&(1<<h)-1).toString(32),s>>=h,o-=h,it=1<<32-kn(n)+o|i<<o|s,at=u+e}else it=1<<u|i<<o|s,at=e}function pl(e){e.return!==null&&(mt(e,1),Su(e,1,0))}function ml(e){for(;e===m1;)m1=ta[--ia],ta[ia]=null,Fa=ta[--ia],ta[ia]=null;for(;e===Nt;)Nt=Nn[--Bn],Nn[Bn]=null,at=Nn[--Bn],Nn[Bn]=null,it=Nn[--Bn],Nn[Bn]=null}function Tu(e,n){Nn[Bn++]=it,Nn[Bn++]=at,Nn[Bn++]=Nt,it=n.id,at=n.overflow,Nt=e}var an=null,Re=null,we=!1,Bt=null,Un=!1,gl=Error(r(519));function Ut(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wa(Dn(n,e)),gl}function Eu(e){var n=e.stateNode,i=e.type,s=e.memoizedProps;switch(n[tn]=e,n[hn]=s,i){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(i=0;i<bs.length;i++)pe(bs[i],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Bo(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),zo(n,s.value,s.defaultValue,s.children)}i=s.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||s.suppressHydrationWarning===!0||Lc(n.textContent,i)?(s.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),s.onScroll!=null&&pe("scroll",n),s.onScrollEnd!=null&&pe("scrollend",n),s.onClick!=null&&(n.onclick=ft),n=!0):n=!1,n||Ut(e,!0)}function Au(e){for(an=e.return;an;)switch(an.tag){case 5:case 31:case 13:Un=!1;return;case 27:case 3:Un=!0;return;default:an=an.return}}function aa(e){if(e!==an)return!1;if(!we)return Au(e),we=!0,!1;var n=e.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Ir(e.type,e.memoizedProps)),i=!i),i&&Re&&Ut(e),Au(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Re=Fc(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Re=Fc(e)}else n===27?(n=Re,ei(e.type)?(e=Br,Br=null,Re=e):Re=n):Re=an?Hn(e.stateNode.nextSibling):null;return!0}function Ki(){Re=an=null,we=!1}function yl(){var e=Bt;return e!==null&&(wn===null?wn=e:wn.push.apply(wn,e),Bt=null),e}function Wa(e){Bt===null?Bt=[e]:Bt.push(e)}var wl=_(null),vi=null,gt=null;function zt(e,n,i){$(wl,n._currentValue),n._currentValue=i}function yt(e){e._currentValue=wl.current,D(wl)}function Kl(e,n,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===i)break;e=e.return}}function vl(e,n,i,s){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){var h=o.child;u=u.firstContext;e:for(;u!==null;){var y=u;u=o;for(var b=0;b<n.length;b++)if(y.context===n[b]){u.lanes|=i,y=u.alternate,y!==null&&(y.lanes|=i),Kl(u.return,i,e),s||(h=null);break e}u=y.next}}else if(o.tag===18){if(h=o.return,h===null)throw Error(r(341));h.lanes|=i,u=h.alternate,u!==null&&(u.lanes|=i),Kl(h,i,e),h=null}else h=o.child;if(h!==null)h.return=o;else for(h=o;h!==null;){if(h===e){h=null;break}if(o=h.sibling,o!==null){o.return=h.return,h=o;break}h=h.return}o=h}}function sa(e,n,i,s){e=null;for(var o=n,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var h=o.alternate;if(h===null)throw Error(r(387));if(h=h.memoizedProps,h!==null){var y=o.type;Sn(o.pendingProps.value,h.value)||(e!==null?e.push(y):e=[y])}}else if(o===Ke.current){if(h=o.alternate,h===null)throw Error(r(387));h.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Es):e=[Es])}o=o.return}e!==null&&vl(n,e,i,s),n.flags|=262144}function g1(e){for(e=e.firstContext;e!==null;){if(!Sn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function bi(e){vi=e,gt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sn(e){return qu(vi,e)}function y1(e,n){return vi===null&&bi(e),qu(e,n)}function qu(e,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},gt===null){if(e===null)throw Error(r(308));gt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else gt=gt.next=n;return i}var Ff=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(i,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(i){return i()})}},Wf=a.unstable_scheduleCallback,eh=a.unstable_NormalPriority,Le={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bl(){return{controller:new Ff,data:new Map,refCount:0}}function es(e){e.refCount--,e.refCount===0&&Wf(eh,function(){e.controller.abort()})}var ns=null,_l=0,la=0,ra=null;function nh(e,n){if(ns===null){var i=ns=[];_l=0,la=Tr(),ra={status:"pending",value:void 0,then:function(s){i.push(s)}}}return _l++,n.then(xu,xu),n}function xu(){if(--_l===0&&ns!==null){ra!==null&&(ra.status="fulfilled");var e=ns;ns=null,la=0,ra=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function th(e,n){var i=[],s={status:"pending",value:null,reason:null,then:function(o){i.push(o)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var o=0;o<i.length;o++)(0,i[o])(n)},function(o){for(s.status="rejected",s.reason=o,o=0;o<i.length;o++)(0,i[o])(void 0)}),s}var Ou=C.S;C.S=function(e,n){hc=fe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&nh(e,n),Ou!==null&&Ou(e,n)};var _i=_(null);function kl(){var e=_i.current;return e!==null?e:xe.pooledCache}function w1(e,n){n===null?$(_i,_i.current):$(_i,n.pool)}function Ru(){var e=kl();return e===null?null:{parent:Le._currentValue,pool:e}}var oa=Error(r(460)),Sl=Error(r(474)),K1=Error(r(542)),v1={then:function(){}};function Cu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mu(e,n,i){switch(i=e[i],i===void 0?e.push(n):i!==n&&(n.then(ft,ft),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pu(e),e;default:if(typeof n.status=="string")n.then(ft,ft);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var o=n;o.status="fulfilled",o.value=s}},function(s){if(n.status==="pending"){var o=n;o.status="rejected",o.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pu(e),e}throw Si=n,oa}}function ki(e){try{var n=e._init;return n(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Si=i,oa):i}}var Si=null;function Iu(){if(Si===null)throw Error(r(459));var e=Si;return Si=null,e}function Pu(e){if(e===oa||e===K1)throw Error(r(483))}var ua=null,ts=0;function b1(e){var n=ts;return ts+=1,ua===null&&(ua=[]),Mu(ua,e,n)}function is(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _1(e,n){throw n.$$typeof===T?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ju(e){function n(E,k){if(e){var q=E.deletions;q===null?(E.deletions=[k],E.flags|=16):q.push(k)}}function i(E,k){if(!e)return null;for(;k!==null;)n(E,k),k=k.sibling;return null}function s(E){for(var k=new Map;E!==null;)E.key!==null?k.set(E.key,E):k.set(E.index,E),E=E.sibling;return k}function o(E,k){return E=pt(E,k),E.index=0,E.sibling=null,E}function u(E,k,q){return E.index=q,e?(q=E.alternate,q!==null?(q=q.index,q<k?(E.flags|=67108866,k):q):(E.flags|=67108866,k)):(E.flags|=1048576,k)}function h(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function y(E,k,q,P){return k===null||k.tag!==6?(k=fl(q,E.mode,P),k.return=E,k):(k=o(k,q),k.return=E,k)}function b(E,k,q,P){var ee=q.type;return ee===j?I(E,k,q.props.children,P,q.key):k!==null&&(k.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Je&&ki(ee)===k.type)?(k=o(k,q.props),is(k,q),k.return=E,k):(k=p1(q.type,q.key,q.props,null,E.mode,P),is(k,q),k.return=E,k)}function x(E,k,q,P){return k===null||k.tag!==4||k.stateNode.containerInfo!==q.containerInfo||k.stateNode.implementation!==q.implementation?(k=hl(q,E.mode,P),k.return=E,k):(k=o(k,q.children||[]),k.return=E,k)}function I(E,k,q,P,ee){return k===null||k.tag!==7?(k=wi(q,E.mode,P,ee),k.return=E,k):(k=o(k,q),k.return=E,k)}function N(E,k,q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=fl(""+k,E.mode,q),k.return=E,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case A:return q=p1(k.type,k.key,k.props,null,E.mode,q),is(q,k),q.return=E,q;case R:return k=hl(k,E.mode,q),k.return=E,k;case Je:return k=ki(k),N(E,k,q)}if(Q(k)||Xe(k))return k=wi(k,E.mode,q,null),k.return=E,k;if(typeof k.then=="function")return N(E,b1(k),q);if(k.$$typeof===z)return N(E,y1(E,k),q);_1(E,k)}return null}function O(E,k,q,P){var ee=k!==null?k.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return ee!==null?null:y(E,k,""+q,P);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case A:return q.key===ee?b(E,k,q,P):null;case R:return q.key===ee?x(E,k,q,P):null;case Je:return q=ki(q),O(E,k,q,P)}if(Q(q)||Xe(q))return ee!==null?null:I(E,k,q,P,null);if(typeof q.then=="function")return O(E,k,b1(q),P);if(q.$$typeof===z)return O(E,k,y1(E,q),P);_1(E,q)}return null}function M(E,k,q,P,ee){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return E=E.get(q)||null,y(k,E,""+P,ee);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case A:return E=E.get(P.key===null?q:P.key)||null,b(k,E,P,ee);case R:return E=E.get(P.key===null?q:P.key)||null,x(k,E,P,ee);case Je:return P=ki(P),M(E,k,q,P,ee)}if(Q(P)||Xe(P))return E=E.get(q)||null,I(k,E,P,ee,null);if(typeof P.then=="function")return M(E,k,q,b1(P),ee);if(P.$$typeof===z)return M(E,k,q,y1(k,P),ee);_1(k,P)}return null}function J(E,k,q,P){for(var ee=null,ve=null,F=k,ue=k=0,ge=null;F!==null&&ue<q.length;ue++){F.index>ue?(ge=F,F=null):ge=F.sibling;var be=O(E,F,q[ue],P);if(be===null){F===null&&(F=ge);break}e&&F&&be.alternate===null&&n(E,F),k=u(be,k,ue),ve===null?ee=be:ve.sibling=be,ve=be,F=ge}if(ue===q.length)return i(E,F),we&&mt(E,ue),ee;if(F===null){for(;ue<q.length;ue++)F=N(E,q[ue],P),F!==null&&(k=u(F,k,ue),ve===null?ee=F:ve.sibling=F,ve=F);return we&&mt(E,ue),ee}for(F=s(F);ue<q.length;ue++)ge=M(F,E,ue,q[ue],P),ge!==null&&(e&&ge.alternate!==null&&F.delete(ge.key===null?ue:ge.key),k=u(ge,k,ue),ve===null?ee=ge:ve.sibling=ge,ve=ge);return e&&F.forEach(function(si){return n(E,si)}),we&&mt(E,ue),ee}function ae(E,k,q,P){if(q==null)throw Error(r(151));for(var ee=null,ve=null,F=k,ue=k=0,ge=null,be=q.next();F!==null&&!be.done;ue++,be=q.next()){F.index>ue?(ge=F,F=null):ge=F.sibling;var si=O(E,F,be.value,P);if(si===null){F===null&&(F=ge);break}e&&F&&si.alternate===null&&n(E,F),k=u(si,k,ue),ve===null?ee=si:ve.sibling=si,ve=si,F=ge}if(be.done)return i(E,F),we&&mt(E,ue),ee;if(F===null){for(;!be.done;ue++,be=q.next())be=N(E,be.value,P),be!==null&&(k=u(be,k,ue),ve===null?ee=be:ve.sibling=be,ve=be);return we&&mt(E,ue),ee}for(F=s(F);!be.done;ue++,be=q.next())be=M(F,E,ue,be.value,P),be!==null&&(e&&be.alternate!==null&&F.delete(be.key===null?ue:be.key),k=u(be,k,ue),ve===null?ee=be:ve.sibling=be,ve=be);return e&&F.forEach(function(h4){return n(E,h4)}),we&&mt(E,ue),ee}function qe(E,k,q,P){if(typeof q=="object"&&q!==null&&q.type===j&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case A:e:{for(var ee=q.key;k!==null;){if(k.key===ee){if(ee=q.type,ee===j){if(k.tag===7){i(E,k.sibling),P=o(k,q.props.children),P.return=E,E=P;break e}}else if(k.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Je&&ki(ee)===k.type){i(E,k.sibling),P=o(k,q.props),is(P,q),P.return=E,E=P;break e}i(E,k);break}else n(E,k);k=k.sibling}q.type===j?(P=wi(q.props.children,E.mode,P,q.key),P.return=E,E=P):(P=p1(q.type,q.key,q.props,null,E.mode,P),is(P,q),P.return=E,E=P)}return h(E);case R:e:{for(ee=q.key;k!==null;){if(k.key===ee)if(k.tag===4&&k.stateNode.containerInfo===q.containerInfo&&k.stateNode.implementation===q.implementation){i(E,k.sibling),P=o(k,q.children||[]),P.return=E,E=P;break e}else{i(E,k);break}else n(E,k);k=k.sibling}P=hl(q,E.mode,P),P.return=E,E=P}return h(E);case Je:return q=ki(q),qe(E,k,q,P)}if(Q(q))return J(E,k,q,P);if(Xe(q)){if(ee=Xe(q),typeof ee!="function")throw Error(r(150));return q=ee.call(q),ae(E,k,q,P)}if(typeof q.then=="function")return qe(E,k,b1(q),P);if(q.$$typeof===z)return qe(E,k,y1(E,q),P);_1(E,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,k!==null&&k.tag===6?(i(E,k.sibling),P=o(k,q),P.return=E,E=P):(i(E,k),P=fl(q,E.mode,P),P.return=E,E=P),h(E)):i(E,k)}return function(E,k,q,P){try{ts=0;var ee=qe(E,k,q,P);return ua=null,ee}catch(F){if(F===oa||F===K1)throw F;var ve=Tn(29,F,null,E.mode);return ve.lanes=P,ve.return=E,ve}finally{}}}var Ti=ju(!0),Du=ju(!1),Ht=!1;function Tl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function El(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Lt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vt(e,n,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(_e&2)!==0){var o=s.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),s.pending=n,n=h1(e),vu(e,null,i),n}return f1(e,s,n,i),h1(e)}function as(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,i|=s,n.lanes=i,qo(e,i)}}function Al(e,n){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var o=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var h={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?o=u=h:u=u.next=h,i=i.next}while(i!==null);u===null?o=u=n:u=u.next=n}else o=u=n;i={baseState:s.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}var ql=!1;function ss(){if(ql){var e=ra;if(e!==null)throw e}}function ls(e,n,i,s){ql=!1;var o=e.updateQueue;Ht=!1;var u=o.firstBaseUpdate,h=o.lastBaseUpdate,y=o.shared.pending;if(y!==null){o.shared.pending=null;var b=y,x=b.next;b.next=null,h===null?u=x:h.next=x,h=b;var I=e.alternate;I!==null&&(I=I.updateQueue,y=I.lastBaseUpdate,y!==h&&(y===null?I.firstBaseUpdate=x:y.next=x,I.lastBaseUpdate=b))}if(u!==null){var N=o.baseState;h=0,I=x=b=null,y=u;do{var O=y.lane&-536870913,M=O!==y.lane;if(M?(me&O)===O:(s&O)===O){O!==0&&O===la&&(ql=!0),I!==null&&(I=I.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var J=e,ae=y;O=n;var qe=i;switch(ae.tag){case 1:if(J=ae.payload,typeof J=="function"){N=J.call(qe,N,O);break e}N=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=ae.payload,O=typeof J=="function"?J.call(qe,N,O):J,O==null)break e;N=w({},N,O);break e;case 2:Ht=!0}}O=y.callback,O!==null&&(e.flags|=64,M&&(e.flags|=8192),M=o.callbacks,M===null?o.callbacks=[O]:M.push(O))}else M={lane:O,tag:y.tag,payload:y.payload,callback:y.callback,next:null},I===null?(x=I=M,b=N):I=I.next=M,h|=O;if(y=y.next,y===null){if(y=o.shared.pending,y===null)break;M=y,y=M.next,M.next=null,o.lastBaseUpdate=M,o.shared.pending=null}}while(!0);I===null&&(b=N),o.baseState=b,o.firstBaseUpdate=x,o.lastBaseUpdate=I,u===null&&(o.shared.lanes=0),Jt|=h,e.lanes=h,e.memoizedState=N}}function Nu(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Bu(e,n){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)Nu(i[e],n)}var ca=_(null),k1=_(0);function Uu(e,n){e=Et,$(k1,e),$(ca,n),Et=e|n.baseLanes}function xl(){$(k1,Et),$(ca,ca.current)}function Ol(){Et=k1.current,D(ca),D(k1)}var En=_(null),zn=null;function $t(e){var n=e.alternate;$(Be,Be.current&1),$(En,e),zn===null&&(n===null||ca.current!==null||n.memoizedState!==null)&&(zn=e)}function Rl(e){$(Be,Be.current),$(En,e),zn===null&&(zn=e)}function zu(e){e.tag===22?($(Be,Be.current),$(En,e),zn===null&&(zn=e)):Gt()}function Gt(){$(Be,Be.current),$(En,En.current)}function An(e){D(En),zn===e&&(zn=null),D(Be)}var Be=_(0);function S1(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Dr(i)||Nr(i)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var wt=0,oe=null,Ee=null,Ve=null,T1=!1,da=!1,Ei=!1,E1=0,rs=0,fa=null,ih=0;function je(){throw Error(r(321))}function Cl(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!Sn(e[i],n[i]))return!1;return!0}function Ml(e,n,i,s,o,u){return wt=u,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=e===null||e.memoizedState===null?S2:Yl,Ei=!1,u=i(s,o),Ei=!1,da&&(u=Lu(n,i,s,o)),Hu(e),u}function Hu(e){C.H=cs;var n=Ee!==null&&Ee.next!==null;if(wt=0,Ve=Ee=oe=null,T1=!1,rs=0,fa=null,n)throw Error(r(300));e===null||$e||(e=e.dependencies,e!==null&&g1(e)&&($e=!0))}function Lu(e,n,i,s){oe=e;var o=0;do{if(da&&(fa=null),rs=0,da=!1,25<=o)throw Error(r(301));if(o+=1,Ve=Ee=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}C.H=T2,u=n(i,s)}while(da);return u}function ah(){var e=C.H,n=e.useState()[0];return n=typeof n.then=="function"?os(n):n,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(oe.flags|=1024),n}function Il(){var e=E1!==0;return E1=0,e}function Pl(e,n,i){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i}function jl(e){if(T1){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}T1=!1}wt=0,Ve=Ee=oe=null,da=!1,rs=E1=0,fa=null}function dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?oe.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Ue(){if(Ee===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var n=Ve===null?oe.memoizedState:Ve.next;if(n!==null)Ve=n,Ee=e;else{if(e===null)throw oe.alternate===null?Error(r(467)):Error(r(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ve===null?oe.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function A1(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function os(e){var n=rs;return rs+=1,fa===null&&(fa=[]),e=Mu(fa,e,n),n=oe,(Ve===null?n.memoizedState:Ve.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?S2:Yl),e}function q1(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return os(e);if(e.$$typeof===z)return sn(e)}throw Error(r(438,String(e)))}function Dl(e){var n=null,i=oe.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var s=oe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(o){return o.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=A1(),oe.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(e),s=0;s<e;s++)i[s]=ct;return n.index++,i}function Kt(e,n){return typeof n=="function"?n(e):n}function x1(e){var n=Ue();return Nl(n,Ee,e)}function Nl(e,n,i){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=i;var o=e.baseQueue,u=s.pending;if(u!==null){if(o!==null){var h=o.next;o.next=u.next,u.next=h}n.baseQueue=o=u,s.pending=null}if(u=e.baseState,o===null)e.memoizedState=u;else{n=o.next;var y=h=null,b=null,x=n,I=!1;do{var N=x.lane&-536870913;if(N!==x.lane?(me&N)===N:(wt&N)===N){var O=x.revertLane;if(O===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),N===la&&(I=!0);else if((wt&O)===O){x=x.next,O===la&&(I=!0);continue}else N={lane:0,revertLane:x.revertLane,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},b===null?(y=b=N,h=u):b=b.next=N,oe.lanes|=O,Jt|=O;N=x.action,Ei&&i(u,N),u=x.hasEagerState?x.eagerState:i(u,N)}else O={lane:N,revertLane:x.revertLane,gesture:x.gesture,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},b===null?(y=b=O,h=u):b=b.next=O,oe.lanes|=N,Jt|=N;x=x.next}while(x!==null&&x!==n);if(b===null?h=u:b.next=y,!Sn(u,e.memoizedState)&&($e=!0,I&&(i=ra,i!==null)))throw i;e.memoizedState=u,e.baseState=h,e.baseQueue=b,s.lastRenderedState=u}return o===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Bl(e){var n=Ue(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var s=i.dispatch,o=i.pending,u=n.memoizedState;if(o!==null){i.pending=null;var h=o=o.next;do u=e(u,h.action),h=h.next;while(h!==o);Sn(u,n.memoizedState)||($e=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),i.lastRenderedState=u}return[u,s]}function Vu(e,n,i){var s=oe,o=Ue(),u=we;if(u){if(i===void 0)throw Error(r(407));i=i()}else i=n();var h=!Sn((Ee||o).memoizedState,i);if(h&&(o.memoizedState=i,$e=!0),o=o.queue,Hl(Zu.bind(null,s,o,e),[e]),o.getSnapshot!==n||h||Ve!==null&&Ve.memoizedState.tag&1){if(s.flags|=2048,ha(9,{destroy:void 0},Gu.bind(null,s,o,i,n),null),xe===null)throw Error(r(349));u||(wt&127)!==0||$u(s,n,i)}return i}function $u(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=oe.updateQueue,n===null?(n=A1(),oe.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function Gu(e,n,i,s){n.value=i,n.getSnapshot=s,Yu(n)&&Ju(e)}function Zu(e,n,i){return i(function(){Yu(n)&&Ju(e)})}function Yu(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!Sn(e,i)}catch{return!0}}function Ju(e){var n=yi(e,2);n!==null&&Kn(n,e,2)}function Ul(e){var n=dn();if(typeof e=="function"){var i=e;if(e=i(),Ei){Pt(!0);try{i()}finally{Pt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},n}function Xu(e,n,i,s){return e.baseState=i,Nl(e,Ee,typeof s=="function"?s:Kt)}function sh(e,n,i,s,o){if(C1(e))throw Error(r(485));if(e=n.action,e!==null){var u={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){u.listeners.push(h)}};C.T!==null?i(!0):u.isTransition=!1,s(u),i=n.pending,i===null?(u.next=n.pending=u,Qu(n,u)):(u.next=i.next,n.pending=i.next=u)}}function Qu(e,n){var i=n.action,s=n.payload,o=e.state;if(n.isTransition){var u=C.T,h={};C.T=h;try{var y=i(o,s),b=C.S;b!==null&&b(h,y),Fu(e,n,y)}catch(x){zl(e,n,x)}finally{u!==null&&h.types!==null&&(u.types=h.types),C.T=u}}else try{u=i(o,s),Fu(e,n,u)}catch(x){zl(e,n,x)}}function Fu(e,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(s){Wu(e,n,s)},function(s){return zl(e,n,s)}):Wu(e,n,i)}function Wu(e,n,i){n.status="fulfilled",n.value=i,e2(n),e.state=i,n=e.pending,n!==null&&(i=n.next,i===n?e.pending=null:(i=i.next,n.next=i,Qu(e,i)))}function zl(e,n,i){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=i,e2(n),n=n.next;while(n!==s)}e.action=null}function e2(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function n2(e,n){return n}function t2(e,n){if(we){var i=xe.formState;if(i!==null){e:{var s=oe;if(we){if(Re){n:{for(var o=Re,u=Un;o.nodeType!==8;){if(!u){o=null;break n}if(o=Hn(o.nextSibling),o===null){o=null;break n}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){Re=Hn(o.nextSibling),s=o.data==="F!";break e}}Ut(s)}s=!1}s&&(n=i[0])}}return i=dn(),i.memoizedState=i.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n2,lastRenderedState:n},i.queue=s,i=b2.bind(null,oe,s),s.dispatch=i,s=Ul(!1),u=Zl.bind(null,oe,!1,s.queue),s=dn(),o={state:n,dispatch:null,action:e,pending:null},s.queue=o,i=sh.bind(null,oe,o,u,i),o.dispatch=i,s.memoizedState=e,[n,i,!1]}function i2(e){var n=Ue();return a2(n,Ee,e)}function a2(e,n,i){if(n=Nl(e,n,n2)[0],e=x1(Kt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=os(n)}catch(h){throw h===oa?K1:h}else s=n;n=Ue();var o=n.queue,u=o.dispatch;return i!==n.memoizedState&&(oe.flags|=2048,ha(9,{destroy:void 0},lh.bind(null,o,i),null)),[s,u,e]}function lh(e,n){e.action=n}function s2(e){var n=Ue(),i=Ee;if(i!==null)return a2(n,i,e);Ue(),n=n.memoizedState,i=Ue();var s=i.queue.dispatch;return i.memoizedState=e,[n,s,!1]}function ha(e,n,i,s){return e={tag:e,create:i,deps:s,inst:n,next:null},n=oe.updateQueue,n===null&&(n=A1(),oe.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,n.lastEffect=e),e}function l2(){return Ue().memoizedState}function O1(e,n,i,s){var o=dn();oe.flags|=e,o.memoizedState=ha(1|n,{destroy:void 0},i,s===void 0?null:s)}function R1(e,n,i,s){var o=Ue();s=s===void 0?null:s;var u=o.memoizedState.inst;Ee!==null&&s!==null&&Cl(s,Ee.memoizedState.deps)?o.memoizedState=ha(n,u,i,s):(oe.flags|=e,o.memoizedState=ha(1|n,u,i,s))}function r2(e,n){O1(8390656,8,e,n)}function Hl(e,n){R1(2048,8,e,n)}function rh(e){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=A1(),oe.updateQueue=n,n.events=[e];else{var i=n.events;i===null?n.events=[e]:i.push(e)}}function o2(e){var n=Ue().memoizedState;return rh({ref:n,nextImpl:e}),function(){if((_e&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function u2(e,n){return R1(4,2,e,n)}function c2(e,n){return R1(4,4,e,n)}function d2(e,n){if(typeof n=="function"){e=e();var i=n(e);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function f2(e,n,i){i=i!=null?i.concat([e]):null,R1(4,4,d2.bind(null,n,e),i)}function Ll(){}function h2(e,n){var i=Ue();n=n===void 0?null:n;var s=i.memoizedState;return n!==null&&Cl(n,s[1])?s[0]:(i.memoizedState=[e,n],e)}function p2(e,n){var i=Ue();n=n===void 0?null:n;var s=i.memoizedState;if(n!==null&&Cl(n,s[1]))return s[0];if(s=e(),Ei){Pt(!0);try{e()}finally{Pt(!1)}}return i.memoizedState=[s,n],s}function Vl(e,n,i){return i===void 0||(wt&1073741824)!==0&&(me&261930)===0?e.memoizedState=n:(e.memoizedState=i,e=mc(),oe.lanes|=e,Jt|=e,i)}function m2(e,n,i,s){return Sn(i,n)?i:ca.current!==null?(e=Vl(e,i,s),Sn(e,n)||($e=!0),e):(wt&42)===0||(wt&1073741824)!==0&&(me&261930)===0?($e=!0,e.memoizedState=i):(e=mc(),oe.lanes|=e,Jt|=e,n)}function g2(e,n,i,s,o){var u=B.p;B.p=u!==0&&8>u?u:8;var h=C.T,y={};C.T=y,Zl(e,!1,n,i);try{var b=o(),x=C.S;if(x!==null&&x(y,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var I=th(b,s);us(e,n,I,On(e))}else us(e,n,s,On(e))}catch(N){us(e,n,{then:function(){},status:"rejected",reason:N},On())}finally{B.p=u,h!==null&&y.types!==null&&(h.types=y.types),C.T=h}}function oh(){}function $l(e,n,i,s){if(e.tag!==5)throw Error(r(476));var o=y2(e).queue;g2(e,o,n,te,i===null?oh:function(){return w2(e),i(s)})}function y2(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:te},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:i},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function w2(e){var n=y2(e);n.next===null&&(n=e.alternate.memoizedState),us(e,n.next.queue,{},On())}function Gl(){return sn(Es)}function K2(){return Ue().memoizedState}function v2(){return Ue().memoizedState}function uh(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var i=On();e=Lt(i);var s=Vt(n,e,i);s!==null&&(Kn(s,n,i),as(s,n,i)),n={cache:bl()},e.payload=n;return}n=n.return}}function ch(e,n,i){var s=On();i={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},C1(e)?_2(n,i):(i=cl(e,n,i,s),i!==null&&(Kn(i,e,s),k2(i,n,s)))}function b2(e,n,i){var s=On();us(e,n,i,s)}function us(e,n,i,s){var o={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(C1(e))_2(n,o);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var h=n.lastRenderedState,y=u(h,i);if(o.hasEagerState=!0,o.eagerState=y,Sn(y,h))return f1(e,n,o,0),xe===null&&d1(),!1}catch{}finally{}if(i=cl(e,n,o,s),i!==null)return Kn(i,e,s),k2(i,n,s),!0}return!1}function Zl(e,n,i,s){if(s={lane:2,revertLane:Tr(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},C1(e)){if(n)throw Error(r(479))}else n=cl(e,i,s,2),n!==null&&Kn(n,e,2)}function C1(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function _2(e,n){da=T1=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function k2(e,n,i){if((i&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,i|=s,n.lanes=i,qo(e,i)}}var cs={readContext:sn,use:q1,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je};cs.useEffectEvent=je;var S2={readContext:sn,use:q1,useCallback:function(e,n){return dn().memoizedState=[e,n===void 0?null:n],e},useContext:sn,useEffect:r2,useImperativeHandle:function(e,n,i){i=i!=null?i.concat([e]):null,O1(4194308,4,d2.bind(null,n,e),i)},useLayoutEffect:function(e,n){return O1(4194308,4,e,n)},useInsertionEffect:function(e,n){O1(4,2,e,n)},useMemo:function(e,n){var i=dn();n=n===void 0?null:n;var s=e();if(Ei){Pt(!0);try{e()}finally{Pt(!1)}}return i.memoizedState=[s,n],s},useReducer:function(e,n,i){var s=dn();if(i!==void 0){var o=i(n);if(Ei){Pt(!0);try{i(n)}finally{Pt(!1)}}}else o=n;return s.memoizedState=s.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},s.queue=e,e=e.dispatch=ch.bind(null,oe,e),[s.memoizedState,e]},useRef:function(e){var n=dn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ul(e);var n=e.queue,i=b2.bind(null,oe,n);return n.dispatch=i,[e.memoizedState,i]},useDebugValue:Ll,useDeferredValue:function(e,n){var i=dn();return Vl(i,e,n)},useTransition:function(){var e=Ul(!1);return e=g2.bind(null,oe,e.queue,!0,!1),dn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,i){var s=oe,o=dn();if(we){if(i===void 0)throw Error(r(407));i=i()}else{if(i=n(),xe===null)throw Error(r(349));(me&127)!==0||$u(s,n,i)}o.memoizedState=i;var u={value:i,getSnapshot:n};return o.queue=u,r2(Zu.bind(null,s,u,e),[e]),s.flags|=2048,ha(9,{destroy:void 0},Gu.bind(null,s,u,i,n),null),i},useId:function(){var e=dn(),n=xe.identifierPrefix;if(we){var i=at,s=it;i=(s&~(1<<32-kn(s)-1)).toString(32)+i,n="_"+n+"R_"+i,i=E1++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=ih++,n="_"+n+"r_"+i.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Gl,useFormState:t2,useActionState:t2,useOptimistic:function(e){var n=dn();n.memoizedState=n.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Zl.bind(null,oe,!0,i),i.dispatch=n,[e,n]},useMemoCache:Dl,useCacheRefresh:function(){return dn().memoizedState=uh.bind(null,oe)},useEffectEvent:function(e){var n=dn(),i={impl:e};return n.memoizedState=i,function(){if((_e&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}},Yl={readContext:sn,use:q1,useCallback:h2,useContext:sn,useEffect:Hl,useImperativeHandle:f2,useInsertionEffect:u2,useLayoutEffect:c2,useMemo:p2,useReducer:x1,useRef:l2,useState:function(){return x1(Kt)},useDebugValue:Ll,useDeferredValue:function(e,n){var i=Ue();return m2(i,Ee.memoizedState,e,n)},useTransition:function(){var e=x1(Kt)[0],n=Ue().memoizedState;return[typeof e=="boolean"?e:os(e),n]},useSyncExternalStore:Vu,useId:K2,useHostTransitionStatus:Gl,useFormState:i2,useActionState:i2,useOptimistic:function(e,n){var i=Ue();return Xu(i,Ee,e,n)},useMemoCache:Dl,useCacheRefresh:v2};Yl.useEffectEvent=o2;var T2={readContext:sn,use:q1,useCallback:h2,useContext:sn,useEffect:Hl,useImperativeHandle:f2,useInsertionEffect:u2,useLayoutEffect:c2,useMemo:p2,useReducer:Bl,useRef:l2,useState:function(){return Bl(Kt)},useDebugValue:Ll,useDeferredValue:function(e,n){var i=Ue();return Ee===null?Vl(i,e,n):m2(i,Ee.memoizedState,e,n)},useTransition:function(){var e=Bl(Kt)[0],n=Ue().memoizedState;return[typeof e=="boolean"?e:os(e),n]},useSyncExternalStore:Vu,useId:K2,useHostTransitionStatus:Gl,useFormState:s2,useActionState:s2,useOptimistic:function(e,n){var i=Ue();return Ee!==null?Xu(i,Ee,e,n):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Dl,useCacheRefresh:v2};T2.useEffectEvent=o2;function Jl(e,n,i,s){n=e.memoizedState,i=i(s,n),i=i==null?n:w({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Xl={enqueueSetState:function(e,n,i){e=e._reactInternals;var s=On(),o=Lt(s);o.payload=n,i!=null&&(o.callback=i),n=Vt(e,o,s),n!==null&&(Kn(n,e,s),as(n,e,s))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var s=On(),o=Lt(s);o.tag=1,o.payload=n,i!=null&&(o.callback=i),n=Vt(e,o,s),n!==null&&(Kn(n,e,s),as(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=On(),s=Lt(i);s.tag=2,n!=null&&(s.callback=n),n=Vt(e,s,i),n!==null&&(Kn(n,e,i),as(n,e,i))}};function E2(e,n,i,s,o,u,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,u,h):n.prototype&&n.prototype.isPureReactComponent?!Xa(i,s)||!Xa(o,u):!0}function A2(e,n,i,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,s),n.state!==e&&Xl.enqueueReplaceState(n,n.state,null)}function Ai(e,n){var i=n;if("ref"in n){i={};for(var s in n)s!=="ref"&&(i[s]=n[s])}if(e=e.defaultProps){i===n&&(i=w({},i));for(var o in e)i[o]===void 0&&(i[o]=e[o])}return i}function q2(e){c1(e)}function x2(e){console.error(e)}function O2(e){c1(e)}function M1(e,n){try{var i=e.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function R2(e,n,i){try{var s=e.onCaughtError;s(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Ql(e,n,i){return i=Lt(i),i.tag=3,i.payload={element:null},i.callback=function(){M1(e,n)},i}function C2(e){return e=Lt(e),e.tag=3,e}function M2(e,n,i,s){var o=i.type.getDerivedStateFromError;if(typeof o=="function"){var u=s.value;e.payload=function(){return o(u)},e.callback=function(){R2(n,i,s)}}var h=i.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){R2(n,i,s),typeof o!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var y=s.stack;this.componentDidCatch(s.value,{componentStack:y!==null?y:""})})}function dh(e,n,i,s,o){if(i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=i.alternate,n!==null&&sa(n,i,o,!0),i=En.current,i!==null){switch(i.tag){case 31:case 13:return zn===null?$1():i.alternate===null&&De===0&&(De=3),i.flags&=-257,i.flags|=65536,i.lanes=o,s===v1?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([s]):n.add(s),_r(e,s,o)),!1;case 22:return i.flags|=65536,s===v1?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([s]):i.add(s)),_r(e,s,o)),!1}throw Error(r(435,i.tag))}return _r(e,s,o),$1(),!1}if(we)return n=En.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=o,s!==gl&&(e=Error(r(422),{cause:s}),Wa(Dn(e,i)))):(s!==gl&&(n=Error(r(423),{cause:s}),Wa(Dn(n,i))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,s=Dn(s,i),o=Ql(e.stateNode,s,o),Al(e,o),De!==4&&(De=2)),!1;var u=Error(r(520),{cause:s});if(u=Dn(u,i),ws===null?ws=[u]:ws.push(u),De!==4&&(De=2),n===null)return!0;s=Dn(s,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,e=o&-o,i.lanes|=e,e=Ql(i.stateNode,s,e),Al(i,e),!1;case 1:if(n=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Xt===null||!Xt.has(u))))return i.flags|=65536,o&=-o,i.lanes|=o,o=C2(o),M2(o,e,i,s),Al(i,o),!1}i=i.return}while(i!==null);return!1}var Fl=Error(r(461)),$e=!1;function ln(e,n,i,s){n.child=e===null?Du(n,null,i,s):Ti(n,e.child,i,s)}function I2(e,n,i,s,o){i=i.render;var u=n.ref;if("ref"in s){var h={};for(var y in s)y!=="ref"&&(h[y]=s[y])}else h=s;return bi(n),s=Ml(e,n,i,h,u,o),y=Il(),e!==null&&!$e?(Pl(e,n,o),vt(e,n,o)):(we&&y&&pl(n),n.flags|=1,ln(e,n,s,o),n.child)}function P2(e,n,i,s,o){if(e===null){var u=i.type;return typeof u=="function"&&!dl(u)&&u.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=u,j2(e,n,u,s,o)):(e=p1(i.type,null,s,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!lr(e,o)){var h=u.memoizedProps;if(i=i.compare,i=i!==null?i:Xa,i(h,s)&&e.ref===n.ref)return vt(e,n,o)}return n.flags|=1,e=pt(u,s),e.ref=n.ref,e.return=n,n.child=e}function j2(e,n,i,s,o){if(e!==null){var u=e.memoizedProps;if(Xa(u,s)&&e.ref===n.ref)if($e=!1,n.pendingProps=s=u,lr(e,o))(e.flags&131072)!==0&&($e=!0);else return n.lanes=e.lanes,vt(e,n,o)}return Wl(e,n,i,s,o)}function D2(e,n,i,s){var o=s.children,u=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|i:i,e!==null){for(s=n.child=e.child,o=0;s!==null;)o=o|s.lanes|s.childLanes,s=s.sibling;s=o&~u}else s=0,n.child=null;return N2(e,n,u,i,s)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&w1(n,u!==null?u.cachePool:null),u!==null?Uu(n,u):xl(),zu(n);else return s=n.lanes=536870912,N2(e,n,u!==null?u.baseLanes|i:i,i,s)}else u!==null?(w1(n,u.cachePool),Uu(n,u),Gt(),n.memoizedState=null):(e!==null&&w1(n,null),xl(),Gt());return ln(e,n,o,i),n.child}function ds(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function N2(e,n,i,s,o){var u=kl();return u=u===null?null:{parent:Le._currentValue,pool:u},n.memoizedState={baseLanes:i,cachePool:u},e!==null&&w1(n,null),xl(),zu(n),e!==null&&sa(e,n,s,!0),n.childLanes=o,null}function I1(e,n){return n=j1({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function B2(e,n,i){return Ti(n,e.child,null,i),e=I1(n,n.pendingProps),e.flags|=2,An(n),n.memoizedState=null,e}function fh(e,n,i){var s=n.pendingProps,o=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(s.mode==="hidden")return e=I1(n,s),n.lanes=536870912,ds(null,e);if(Rl(n),(e=Re)?(e=Qc(e,Un),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Nt!==null?{id:it,overflow:at}:null,retryLane:536870912,hydrationErrors:null},i=_u(e),i.return=n,n.child=i,an=n,Re=null)):e=null,e===null)throw Ut(n);return n.lanes=536870912,null}return I1(n,s)}var u=e.memoizedState;if(u!==null){var h=u.dehydrated;if(Rl(n),o)if(n.flags&256)n.flags&=-257,n=B2(e,n,i);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if($e||sa(e,n,i,!1),o=(i&e.childLanes)!==0,$e||o){if(s=xe,s!==null&&(h=xo(s,i),h!==0&&h!==u.retryLane))throw u.retryLane=h,yi(e,h),Kn(s,e,h),Fl;$1(),n=B2(e,n,i)}else e=u.treeContext,Re=Hn(h.nextSibling),an=n,we=!0,Bt=null,Un=!1,e!==null&&Tu(n,e),n=I1(n,s),n.flags|=4096;return n}return e=pt(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function P1(e,n){var i=n.ref;if(i===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(r(284));(e===null||e.ref!==i)&&(n.flags|=4194816)}}function Wl(e,n,i,s,o){return bi(n),i=Ml(e,n,i,s,void 0,o),s=Il(),e!==null&&!$e?(Pl(e,n,o),vt(e,n,o)):(we&&s&&pl(n),n.flags|=1,ln(e,n,i,o),n.child)}function U2(e,n,i,s,o,u){return bi(n),n.updateQueue=null,i=Lu(n,s,i,o),Hu(e),s=Il(),e!==null&&!$e?(Pl(e,n,u),vt(e,n,u)):(we&&s&&pl(n),n.flags|=1,ln(e,n,i,u),n.child)}function z2(e,n,i,s,o){if(bi(n),n.stateNode===null){var u=na,h=i.contextType;typeof h=="object"&&h!==null&&(u=sn(h)),u=new i(s,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Xl,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=s,u.state=n.memoizedState,u.refs={},Tl(n),h=i.contextType,u.context=typeof h=="object"&&h!==null?sn(h):na,u.state=n.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Jl(n,i,h,s),u.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(h=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),h!==u.state&&Xl.enqueueReplaceState(u,u.state,null),ls(n,s,u,o),ss(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){u=n.stateNode;var y=n.memoizedProps,b=Ai(i,y);u.props=b;var x=u.context,I=i.contextType;h=na,typeof I=="object"&&I!==null&&(h=sn(I));var N=i.getDerivedStateFromProps;I=typeof N=="function"||typeof u.getSnapshotBeforeUpdate=="function",y=n.pendingProps!==y,I||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(y||x!==h)&&A2(n,u,s,h),Ht=!1;var O=n.memoizedState;u.state=O,ls(n,s,u,o),ss(),x=n.memoizedState,y||O!==x||Ht?(typeof N=="function"&&(Jl(n,i,N,s),x=n.memoizedState),(b=Ht||E2(n,i,b,s,O,x,h))?(I||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=x),u.props=s,u.state=x,u.context=h,s=b):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{u=n.stateNode,El(e,n),h=n.memoizedProps,I=Ai(i,h),u.props=I,N=n.pendingProps,O=u.context,x=i.contextType,b=na,typeof x=="object"&&x!==null&&(b=sn(x)),y=i.getDerivedStateFromProps,(x=typeof y=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==N||O!==b)&&A2(n,u,s,b),Ht=!1,O=n.memoizedState,u.state=O,ls(n,s,u,o),ss();var M=n.memoizedState;h!==N||O!==M||Ht||e!==null&&e.dependencies!==null&&g1(e.dependencies)?(typeof y=="function"&&(Jl(n,i,y,s),M=n.memoizedState),(I=Ht||E2(n,i,I,s,O,M,b)||e!==null&&e.dependencies!==null&&g1(e.dependencies))?(x||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,M,b),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,M,b)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=M),u.props=s,u.state=M,u.context=b,s=I):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(n.flags|=1024),s=!1)}return u=s,P1(e,n),s=(n.flags&128)!==0,u||s?(u=n.stateNode,i=s&&typeof i.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,e!==null&&s?(n.child=Ti(n,e.child,null,o),n.child=Ti(n,null,i,o)):ln(e,n,i,o),n.memoizedState=u.state,e=n.child):e=vt(e,n,o),e}function H2(e,n,i,s){return Ki(),n.flags|=256,ln(e,n,i,s),n.child}var er={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nr(e){return{baseLanes:e,cachePool:Ru()}}function tr(e,n,i){return e=e!==null?e.childLanes&~i:0,n&&(e|=xn),e}function L2(e,n,i){var s=n.pendingProps,o=!1,u=(n.flags&128)!==0,h;if((h=u)||(h=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),h&&(o=!0,n.flags&=-129),h=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(o?$t(n):Gt(),(e=Re)?(e=Qc(e,Un),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Nt!==null?{id:it,overflow:at}:null,retryLane:536870912,hydrationErrors:null},i=_u(e),i.return=n,n.child=i,an=n,Re=null)):e=null,e===null)throw Ut(n);return Nr(e)?n.lanes=32:n.lanes=536870912,null}var y=s.children;return s=s.fallback,o?(Gt(),o=n.mode,y=j1({mode:"hidden",children:y},o),s=wi(s,o,i,null),y.return=n,s.return=n,y.sibling=s,n.child=y,s=n.child,s.memoizedState=nr(i),s.childLanes=tr(e,h,i),n.memoizedState=er,ds(null,s)):($t(n),ir(n,y))}var b=e.memoizedState;if(b!==null&&(y=b.dehydrated,y!==null)){if(u)n.flags&256?($t(n),n.flags&=-257,n=ar(e,n,i)):n.memoizedState!==null?(Gt(),n.child=e.child,n.flags|=128,n=null):(Gt(),y=s.fallback,o=n.mode,s=j1({mode:"visible",children:s.children},o),y=wi(y,o,i,null),y.flags|=2,s.return=n,y.return=n,s.sibling=y,n.child=s,Ti(n,e.child,null,i),s=n.child,s.memoizedState=nr(i),s.childLanes=tr(e,h,i),n.memoizedState=er,n=ds(null,s));else if($t(n),Nr(y)){if(h=y.nextSibling&&y.nextSibling.dataset,h)var x=h.dgst;h=x,s=Error(r(419)),s.stack="",s.digest=h,Wa({value:s,source:null,stack:null}),n=ar(e,n,i)}else if($e||sa(e,n,i,!1),h=(i&e.childLanes)!==0,$e||h){if(h=xe,h!==null&&(s=xo(h,i),s!==0&&s!==b.retryLane))throw b.retryLane=s,yi(e,s),Kn(h,e,s),Fl;Dr(y)||$1(),n=ar(e,n,i)}else Dr(y)?(n.flags|=192,n.child=e.child,n=null):(e=b.treeContext,Re=Hn(y.nextSibling),an=n,we=!0,Bt=null,Un=!1,e!==null&&Tu(n,e),n=ir(n,s.children),n.flags|=4096);return n}return o?(Gt(),y=s.fallback,o=n.mode,b=e.child,x=b.sibling,s=pt(b,{mode:"hidden",children:s.children}),s.subtreeFlags=b.subtreeFlags&65011712,x!==null?y=pt(x,y):(y=wi(y,o,i,null),y.flags|=2),y.return=n,s.return=n,s.sibling=y,n.child=s,ds(null,s),s=n.child,y=e.child.memoizedState,y===null?y=nr(i):(o=y.cachePool,o!==null?(b=Le._currentValue,o=o.parent!==b?{parent:b,pool:b}:o):o=Ru(),y={baseLanes:y.baseLanes|i,cachePool:o}),s.memoizedState=y,s.childLanes=tr(e,h,i),n.memoizedState=er,ds(e.child,s)):($t(n),i=e.child,e=i.sibling,i=pt(i,{mode:"visible",children:s.children}),i.return=n,i.sibling=null,e!==null&&(h=n.deletions,h===null?(n.deletions=[e],n.flags|=16):h.push(e)),n.child=i,n.memoizedState=null,i)}function ir(e,n){return n=j1({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function j1(e,n){return e=Tn(22,e,null,n),e.lanes=0,e}function ar(e,n,i){return Ti(n,e.child,null,i),e=ir(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function V2(e,n,i){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Kl(e.return,n,i)}function sr(e,n,i,s,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:o,treeForkCount:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=i,h.tailMode=o,h.treeForkCount=u)}function $2(e,n,i){var s=n.pendingProps,o=s.revealOrder,u=s.tail;s=s.children;var h=Be.current,y=(h&2)!==0;if(y?(h=h&1|2,n.flags|=128):h&=1,$(Be,h),ln(e,n,s,i),s=we?Fa:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&V2(e,i,n);else if(e.tag===19)V2(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(i=n.child,o=null;i!==null;)e=i.alternate,e!==null&&S1(e)===null&&(o=i),i=i.sibling;i=o,i===null?(o=n.child,n.child=null):(o=i.sibling,i.sibling=null),sr(n,!1,o,i,u,s);break;case"backwards":case"unstable_legacy-backwards":for(i=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&S1(e)===null){n.child=o;break}e=o.sibling,o.sibling=i,i=o,o=e}sr(n,!0,i,null,u,s);break;case"together":sr(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function vt(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Jt|=n.lanes,(i&n.childLanes)===0)if(e!==null){if(sa(e,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,i=pt(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=pt(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function lr(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&g1(e)))}function hh(e,n,i){switch(n.tag){case 3:nn(n,n.stateNode.containerInfo),zt(n,Le,e.memoizedState.cache),Ki();break;case 27:case 5:di(n);break;case 4:nn(n,n.stateNode.containerInfo);break;case 10:zt(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Rl(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?($t(n),n.flags|=128,null):(i&n.child.childLanes)!==0?L2(e,n,i):($t(n),e=vt(e,n,i),e!==null?e.sibling:null);$t(n);break;case 19:var o=(e.flags&128)!==0;if(s=(i&n.childLanes)!==0,s||(sa(e,n,i,!1),s=(i&n.childLanes)!==0),o){if(s)return $2(e,n,i);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),$(Be,Be.current),s)break;return null;case 22:return n.lanes=0,D2(e,n,i,n.pendingProps);case 24:zt(n,Le,e.memoizedState.cache)}return vt(e,n,i)}function G2(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps)$e=!0;else{if(!lr(e,i)&&(n.flags&128)===0)return $e=!1,hh(e,n,i);$e=(e.flags&131072)!==0}else $e=!1,we&&(n.flags&1048576)!==0&&Su(n,Fa,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=ki(n.elementType),n.type=e,typeof e=="function")dl(e)?(s=Ai(e,s),n.tag=1,n=z2(null,n,e,s,i)):(n.tag=0,n=Wl(null,n,e,s,i));else{if(e!=null){var o=e.$$typeof;if(o===se){n.tag=11,n=I2(null,n,e,s,i);break e}else if(o===W){n.tag=14,n=P2(null,n,e,s,i);break e}}throw n=$n(e)||e,Error(r(306,n,""))}}return n;case 0:return Wl(e,n,n.type,n.pendingProps,i);case 1:return s=n.type,o=Ai(s,n.pendingProps),z2(e,n,s,o,i);case 3:e:{if(nn(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var u=n.memoizedState;o=u.element,El(e,n),ls(n,s,null,i);var h=n.memoizedState;if(s=h.cache,zt(n,Le,s),s!==u.cache&&vl(n,[Le],i,!0),ss(),s=h.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:h.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=H2(e,n,s,i);break e}else if(s!==o){o=Dn(Error(r(424)),n),Wa(o),n=H2(e,n,s,i);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=Hn(e.firstChild),an=n,we=!0,Bt=null,Un=!0,i=Du(n,null,s,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Ki(),s===o){n=vt(e,n,i);break e}ln(e,n,s,i)}n=n.child}return n;case 26:return P1(e,n),e===null?(i=id(n.type,null,n.pendingProps,null))?n.memoizedState=i:we||(i=n.type,e=n.pendingProps,s=F1(ce.current).createElement(i),s[tn]=n,s[hn]=e,rn(s,i,e),Qe(s),n.stateNode=s):n.memoizedState=id(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return di(n),e===null&&we&&(s=n.stateNode=ed(n.type,n.pendingProps,ce.current),an=n,Un=!0,o=Re,ei(n.type)?(Br=o,Re=Hn(s.firstChild)):Re=o),ln(e,n,n.pendingProps.children,i),P1(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((o=s=Re)&&(s=Lh(s,n.type,n.pendingProps,Un),s!==null?(n.stateNode=s,an=n,Re=Hn(s.firstChild),Un=!1,o=!0):o=!1),o||Ut(n)),di(n),o=n.type,u=n.pendingProps,h=e!==null?e.memoizedProps:null,s=u.children,Ir(o,u)?s=null:h!==null&&Ir(o,h)&&(n.flags|=32),n.memoizedState!==null&&(o=Ml(e,n,ah,null,null,i),Es._currentValue=o),P1(e,n),ln(e,n,s,i),n.child;case 6:return e===null&&we&&((e=i=Re)&&(i=Vh(i,n.pendingProps,Un),i!==null?(n.stateNode=i,an=n,Re=null,e=!0):e=!1),e||Ut(n)),null;case 13:return L2(e,n,i);case 4:return nn(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Ti(n,null,s,i):ln(e,n,s,i),n.child;case 11:return I2(e,n,n.type,n.pendingProps,i);case 7:return ln(e,n,n.pendingProps,i),n.child;case 8:return ln(e,n,n.pendingProps.children,i),n.child;case 12:return ln(e,n,n.pendingProps.children,i),n.child;case 10:return s=n.pendingProps,zt(n,n.type,s.value),ln(e,n,s.children,i),n.child;case 9:return o=n.type._context,s=n.pendingProps.children,bi(n),o=sn(o),s=s(o),n.flags|=1,ln(e,n,s,i),n.child;case 14:return P2(e,n,n.type,n.pendingProps,i);case 15:return j2(e,n,n.type,n.pendingProps,i);case 19:return $2(e,n,i);case 31:return fh(e,n,i);case 22:return D2(e,n,i,n.pendingProps);case 24:return bi(n),s=sn(Le),e===null?(o=kl(),o===null&&(o=xe,u=bl(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=i),o=u),n.memoizedState={parent:s,cache:o},Tl(n),zt(n,Le,o)):((e.lanes&i)!==0&&(El(e,n),ls(n,null,null,i),ss()),o=e.memoizedState,u=n.memoizedState,o.parent!==s?(o={parent:s,cache:s},n.memoizedState=o,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=o),zt(n,Le,s)):(s=u.cache,zt(n,Le,s),s!==o.cache&&vl(n,[Le],i,!0))),ln(e,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function bt(e){e.flags|=4}function rr(e,n,i,s,o){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Kc())e.flags|=8192;else throw Si=v1,Sl}else e.flags&=-16777217}function Z2(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!od(n))if(Kc())e.flags|=8192;else throw Si=v1,Sl}function D1(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Eo():536870912,e.lanes|=n,ya|=n)}function fs(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ce(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(n)for(var o=e.child;o!==null;)i|=o.lanes|o.childLanes,s|=o.subtreeFlags&65011712,s|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)i|=o.lanes|o.childLanes,s|=o.subtreeFlags,s|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=s,e.childLanes=i,n}function ph(e,n,i){var s=n.pendingProps;switch(ml(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(n),null;case 1:return Ce(n),null;case 3:return i=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),yt(Le),Pe(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(aa(n)?bt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yl())),Ce(n),null;case 26:var o=n.type,u=n.memoizedState;return e===null?(bt(n),u!==null?(Ce(n),Z2(n,u)):(Ce(n),rr(n,o,null,s,i))):u?u!==e.memoizedState?(bt(n),Ce(n),Z2(n,u)):(Ce(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&bt(n),Ce(n),rr(n,o,e,s,i)),null;case 27:if(Pi(n),i=ce.current,o=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&bt(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ce(n),null}e=Y.current,aa(n)?Eu(n):(e=ed(o,s,i),n.stateNode=e,bt(n))}return Ce(n),null;case 5:if(Pi(n),o=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&bt(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ce(n),null}if(u=Y.current,aa(n))Eu(n);else{var h=F1(ce.current);switch(u){case 1:u=h.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:u=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":u=h.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":u=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":u=h.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?h.createElement("select",{is:s.is}):h.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?h.createElement(o,{is:s.is}):h.createElement(o)}}u[tn]=n,u[hn]=s;e:for(h=n.child;h!==null;){if(h.tag===5||h.tag===6)u.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}n.stateNode=u;e:switch(rn(u,o,s),o){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&bt(n)}}return Ce(n),rr(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,i),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&bt(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ce.current,aa(n)){if(e=n.stateNode,i=n.memoizedProps,s=null,o=an,o!==null)switch(o.tag){case 27:case 5:s=o.memoizedProps}e[tn]=n,e=!!(e.nodeValue===i||s!==null&&s.suppressHydrationWarning===!0||Lc(e.nodeValue,i)),e||Ut(n,!0)}else e=F1(e).createTextNode(s),e[tn]=n,n.stateNode=e}return Ce(n),null;case 31:if(i=n.memoizedState,e===null||e.memoizedState!==null){if(s=aa(n),i!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[tn]=n}else Ki(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ce(n),e=!1}else i=yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return n.flags&256?(An(n),n):(An(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ce(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=aa(n),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(r(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(r(317));o[tn]=n}else Ki(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ce(n),o=!1}else o=yl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return n.flags&256?(An(n),n):(An(n),null)}return An(n),(n.flags&128)!==0?(n.lanes=i,n):(i=s!==null,e=e!==null&&e.memoizedState!==null,i&&(s=n.child,o=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(o=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048)),i!==e&&i&&(n.child.flags|=8192),D1(n,n.updateQueue),Ce(n),null);case 4:return Pe(),e===null&&xr(n.stateNode.containerInfo),Ce(n),null;case 10:return yt(n.type),Ce(n),null;case 19:if(D(Be),s=n.memoizedState,s===null)return Ce(n),null;if(o=(n.flags&128)!==0,u=s.rendering,u===null)if(o)fs(s,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=S1(e),u!==null){for(n.flags|=128,fs(s,!1),e=u.updateQueue,n.updateQueue=e,D1(n,e),n.subtreeFlags=0,e=i,i=n.child;i!==null;)bu(i,e),i=i.sibling;return $(Be,Be.current&1|2),we&&mt(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&fe()>H1&&(n.flags|=128,o=!0,fs(s,!1),n.lanes=4194304)}else{if(!o)if(e=S1(u),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,D1(n,e),fs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!we)return Ce(n),null}else 2*fe()-s.renderingStartTime>H1&&i!==536870912&&(n.flags|=128,o=!0,fs(s,!1),n.lanes=4194304);s.isBackwards?(u.sibling=n.child,n.child=u):(e=s.last,e!==null?e.sibling=u:n.child=u,s.last=u)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,i=Be.current,$(Be,o?i&1|2:i&1),we&&mt(n,s.treeForkCount),e):(Ce(n),null);case 22:case 23:return An(n),Ol(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(i&536870912)!==0&&(n.flags&128)===0&&(Ce(n),n.subtreeFlags&6&&(n.flags|=8192)):Ce(n),i=n.updateQueue,i!==null&&D1(n,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048),e!==null&&D(_i),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),yt(Le),Ce(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function mh(e,n){switch(ml(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return yt(Le),Pe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Pi(n),null;case 31:if(n.memoizedState!==null){if(An(n),n.alternate===null)throw Error(r(340));Ki()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(An(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ki()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return D(Be),null;case 4:return Pe(),null;case 10:return yt(n.type),null;case 22:case 23:return An(n),Ol(),e!==null&&D(_i),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return yt(Le),null;case 25:return null;default:return null}}function Y2(e,n){switch(ml(n),n.tag){case 3:yt(Le),Pe();break;case 26:case 27:case 5:Pi(n);break;case 4:Pe();break;case 31:n.memoizedState!==null&&An(n);break;case 13:An(n);break;case 19:D(Be);break;case 10:yt(n.type);break;case 22:case 23:An(n),Ol(),e!==null&&D(_i);break;case 24:yt(Le)}}function hs(e,n){try{var i=n.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var o=s.next;i=o;do{if((i.tag&e)===e){s=void 0;var u=i.create,h=i.inst;s=u(),h.destroy=s}i=i.next}while(i!==o)}}catch(y){Te(n,n.return,y)}}function Zt(e,n,i){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&e)===e){var h=s.inst,y=h.destroy;if(y!==void 0){h.destroy=void 0,o=n;var b=i,x=y;try{x()}catch(I){Te(o,b,I)}}}s=s.next}while(s!==u)}}catch(I){Te(n,n.return,I)}}function J2(e){var n=e.updateQueue;if(n!==null){var i=e.stateNode;try{Bu(n,i)}catch(s){Te(e,e.return,s)}}}function X2(e,n,i){i.props=Ai(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(s){Te(e,n,s)}}function ps(e,n){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof i=="function"?e.refCleanup=i(s):i.current=s}}catch(o){Te(e,n,o)}}function st(e,n){var i=e.ref,s=e.refCleanup;if(i!==null)if(typeof s=="function")try{s()}catch(o){Te(e,n,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(o){Te(e,n,o)}else i.current=null}function Q2(e){var n=e.type,i=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break e;case"img":i.src?s.src=i.src:i.srcSet&&(s.srcset=i.srcSet)}}catch(o){Te(e,e.return,o)}}function or(e,n,i){try{var s=e.stateNode;Dh(s,e.type,i,n),s[hn]=n}catch(o){Te(e,e.return,o)}}function F2(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ei(e.type)||e.tag===4}function ur(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||F2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ei(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cr(e,n,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(e),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=ft));else if(s!==4&&(s===27&&ei(e.type)&&(i=e.stateNode,n=null),e=e.child,e!==null))for(cr(e,n,i),e=e.sibling;e!==null;)cr(e,n,i),e=e.sibling}function N1(e,n,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(s!==4&&(s===27&&ei(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(N1(e,n,i),e=e.sibling;e!==null;)N1(e,n,i),e=e.sibling}function W2(e){var n=e.stateNode,i=e.memoizedProps;try{for(var s=e.type,o=n.attributes;o.length;)n.removeAttributeNode(o[0]);rn(n,s,i),n[tn]=e,n[hn]=i}catch(u){Te(e,e.return,u)}}var _t=!1,Ge=!1,dr=!1,ec=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function gh(e,n){if(e=e.containerInfo,Cr=s0,e=fu(e),al(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var o=s.anchorOffset,u=s.focusNode;s=s.focusOffset;try{i.nodeType,u.nodeType}catch{i=null;break e}var h=0,y=-1,b=-1,x=0,I=0,N=e,O=null;n:for(;;){for(var M;N!==i||o!==0&&N.nodeType!==3||(y=h+o),N!==u||s!==0&&N.nodeType!==3||(b=h+s),N.nodeType===3&&(h+=N.nodeValue.length),(M=N.firstChild)!==null;)O=N,N=M;for(;;){if(N===e)break n;if(O===i&&++x===o&&(y=h),O===u&&++I===s&&(b=h),(M=N.nextSibling)!==null)break;N=O,O=N.parentNode}N=M}i=y===-1||b===-1?null:{start:y,end:b}}else i=null}i=i||{start:0,end:0}}else i=null;for(Mr={focusedElem:e,selectionRange:i},s0=!1,Fe=n;Fe!==null;)if(n=Fe,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Fe=e;else for(;Fe!==null;){switch(n=Fe,u=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)o=e[i],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,i=n,o=u.memoizedProps,u=u.memoizedState,s=i.stateNode;try{var J=Ai(i.type,o);e=s.getSnapshotBeforeUpdate(J,u),s.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Te(i,i.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,i=e.nodeType,i===9)jr(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Fe=e;break}Fe=n.return}}function nc(e,n,i){var s=i.flags;switch(i.tag){case 0:case 11:case 15:St(e,i),s&4&&hs(5,i);break;case 1:if(St(e,i),s&4)if(e=i.stateNode,n===null)try{e.componentDidMount()}catch(h){Te(i,i.return,h)}else{var o=Ai(i.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(o,n,e.__reactInternalSnapshotBeforeUpdate)}catch(h){Te(i,i.return,h)}}s&64&&J2(i),s&512&&ps(i,i.return);break;case 3:if(St(e,i),s&64&&(e=i.updateQueue,e!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{Bu(e,n)}catch(h){Te(i,i.return,h)}}break;case 27:n===null&&s&4&&W2(i);case 26:case 5:St(e,i),n===null&&s&4&&Q2(i),s&512&&ps(i,i.return);break;case 12:St(e,i);break;case 31:St(e,i),s&4&&ac(e,i);break;case 13:St(e,i),s&4&&sc(e,i),s&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=Th.bind(null,i),$h(e,i))));break;case 22:if(s=i.memoizedState!==null||_t,!s){n=n!==null&&n.memoizedState!==null||Ge,o=_t;var u=Ge;_t=s,(Ge=n)&&!u?Tt(e,i,(i.subtreeFlags&8772)!==0):St(e,i),_t=o,Ge=u}break;case 30:break;default:St(e,i)}}function tc(e){var n=e.alternate;n!==null&&(e.alternate=null,tc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&z0(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ie=null,mn=!1;function kt(e,n,i){for(i=i.child;i!==null;)ic(e,n,i),i=i.sibling}function ic(e,n,i){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(Na,i)}catch{}switch(i.tag){case 26:Ge||st(i,n),kt(e,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ge||st(i,n);var s=Ie,o=mn;ei(i.type)&&(Ie=i.stateNode,mn=!1),kt(e,n,i),ks(i.stateNode),Ie=s,mn=o;break;case 5:Ge||st(i,n);case 6:if(s=Ie,o=mn,Ie=null,kt(e,n,i),Ie=s,mn=o,Ie!==null)if(mn)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(i.stateNode)}catch(u){Te(i,n,u)}else try{Ie.removeChild(i.stateNode)}catch(u){Te(i,n,u)}break;case 18:Ie!==null&&(mn?(e=Ie,Jc(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Ta(e)):Jc(Ie,i.stateNode));break;case 4:s=Ie,o=mn,Ie=i.stateNode.containerInfo,mn=!0,kt(e,n,i),Ie=s,mn=o;break;case 0:case 11:case 14:case 15:Zt(2,i,n),Ge||Zt(4,i,n),kt(e,n,i);break;case 1:Ge||(st(i,n),s=i.stateNode,typeof s.componentWillUnmount=="function"&&X2(i,n,s)),kt(e,n,i);break;case 21:kt(e,n,i);break;case 22:Ge=(s=Ge)||i.memoizedState!==null,kt(e,n,i),Ge=s;break;default:kt(e,n,i)}}function ac(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ta(e)}catch(i){Te(n,n.return,i)}}}function sc(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ta(e)}catch(i){Te(n,n.return,i)}}function yh(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ec),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ec),n;default:throw Error(r(435,e.tag))}}function B1(e,n){var i=yh(e);n.forEach(function(s){if(!i.has(s)){i.add(s);var o=Eh.bind(null,e,s);s.then(o,o)}})}function gn(e,n){var i=n.deletions;if(i!==null)for(var s=0;s<i.length;s++){var o=i[s],u=e,h=n,y=h;e:for(;y!==null;){switch(y.tag){case 27:if(ei(y.type)){Ie=y.stateNode,mn=!1;break e}break;case 5:Ie=y.stateNode,mn=!1;break e;case 3:case 4:Ie=y.stateNode.containerInfo,mn=!0;break e}y=y.return}if(Ie===null)throw Error(r(160));ic(u,h,o),Ie=null,mn=!1,u=o.alternate,u!==null&&(u.return=null),o.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)lc(n,e),n=n.sibling}var Yn=null;function lc(e,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gn(n,e),yn(e),s&4&&(Zt(3,e,e.return),hs(3,e),Zt(5,e,e.return));break;case 1:gn(n,e),yn(e),s&512&&(Ge||i===null||st(i,i.return)),s&64&&_t&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?s:i.concat(s))));break;case 26:var o=Yn;if(gn(n,e),yn(e),s&512&&(Ge||i===null||st(i,i.return)),s&4){var u=i!==null?i.memoizedState:null;if(s=e.memoizedState,i===null)if(s===null)if(e.stateNode===null){e:{s=e.type,i=e.memoizedProps,o=o.ownerDocument||o;n:switch(s){case"title":u=o.getElementsByTagName("title")[0],(!u||u[za]||u[tn]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=o.createElement(s),o.head.insertBefore(u,o.querySelector("head > title"))),rn(u,s,i),u[tn]=e,Qe(u),s=u;break e;case"link":var h=ld("link","href",o).get(s+(i.href||""));if(h){for(var y=0;y<h.length;y++)if(u=h[y],u.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&u.getAttribute("rel")===(i.rel==null?null:i.rel)&&u.getAttribute("title")===(i.title==null?null:i.title)&&u.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){h.splice(y,1);break n}}u=o.createElement(s),rn(u,s,i),o.head.appendChild(u);break;case"meta":if(h=ld("meta","content",o).get(s+(i.content||""))){for(y=0;y<h.length;y++)if(u=h[y],u.getAttribute("content")===(i.content==null?null:""+i.content)&&u.getAttribute("name")===(i.name==null?null:i.name)&&u.getAttribute("property")===(i.property==null?null:i.property)&&u.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&u.getAttribute("charset")===(i.charSet==null?null:i.charSet)){h.splice(y,1);break n}}u=o.createElement(s),rn(u,s,i),o.head.appendChild(u);break;default:throw Error(r(468,s))}u[tn]=e,Qe(u),s=u}e.stateNode=s}else rd(o,e.type,e.stateNode);else e.stateNode=sd(o,s,e.memoizedProps);else u!==s?(u===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):u.count--,s===null?rd(o,e.type,e.stateNode):sd(o,s,e.memoizedProps)):s===null&&e.stateNode!==null&&or(e,e.memoizedProps,i.memoizedProps)}break;case 27:gn(n,e),yn(e),s&512&&(Ge||i===null||st(i,i.return)),i!==null&&s&4&&or(e,e.memoizedProps,i.memoizedProps);break;case 5:if(gn(n,e),yn(e),s&512&&(Ge||i===null||st(i,i.return)),e.flags&32){o=e.stateNode;try{Yi(o,"")}catch(J){Te(e,e.return,J)}}s&4&&e.stateNode!=null&&(o=e.memoizedProps,or(e,o,i!==null?i.memoizedProps:o)),s&1024&&(dr=!0);break;case 6:if(gn(n,e),yn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,i=e.stateNode;try{i.nodeValue=s}catch(J){Te(e,e.return,J)}}break;case 3:if(n0=null,o=Yn,Yn=W1(n.containerInfo),gn(n,e),Yn=o,yn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Ta(n.containerInfo)}catch(J){Te(e,e.return,J)}dr&&(dr=!1,rc(e));break;case 4:s=Yn,Yn=W1(e.stateNode.containerInfo),gn(n,e),yn(e),Yn=s;break;case 12:gn(n,e),yn(e);break;case 31:gn(n,e),yn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,B1(e,s)));break;case 13:gn(n,e),yn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(z1=fe()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,B1(e,s)));break;case 22:o=e.memoizedState!==null;var b=i!==null&&i.memoizedState!==null,x=_t,I=Ge;if(_t=x||o,Ge=I||b,gn(n,e),Ge=I,_t=x,yn(e),s&8192)e:for(n=e.stateNode,n._visibility=o?n._visibility&-2:n._visibility|1,o&&(i===null||b||_t||Ge||qi(e)),i=null,n=e;;){if(n.tag===5||n.tag===26){if(i===null){b=i=n;try{if(u=b.stateNode,o)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{y=b.stateNode;var N=b.memoizedProps.style,O=N!=null&&N.hasOwnProperty("display")?N.display:null;y.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(J){Te(b,b.return,J)}}}else if(n.tag===6){if(i===null){b=n;try{b.stateNode.nodeValue=o?"":b.memoizedProps}catch(J){Te(b,b.return,J)}}}else if(n.tag===18){if(i===null){b=n;try{var M=b.stateNode;o?Xc(M,!0):Xc(b.stateNode,!1)}catch(J){Te(b,b.return,J)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(i=s.retryQueue,i!==null&&(s.retryQueue=null,B1(e,i))));break;case 19:gn(n,e),yn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,B1(e,s)));break;case 30:break;case 21:break;default:gn(n,e),yn(e)}}function yn(e){var n=e.flags;if(n&2){try{for(var i,s=e.return;s!==null;){if(F2(s)){i=s;break}s=s.return}if(i==null)throw Error(r(160));switch(i.tag){case 27:var o=i.stateNode,u=ur(e);N1(e,u,o);break;case 5:var h=i.stateNode;i.flags&32&&(Yi(h,""),i.flags&=-33);var y=ur(e);N1(e,y,h);break;case 3:case 4:var b=i.stateNode.containerInfo,x=ur(e);cr(e,x,b);break;default:throw Error(r(161))}}catch(I){Te(e,e.return,I)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function rc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;rc(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function St(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)nc(e,n.alternate,n),n=n.sibling}function qi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Zt(4,n,n.return),qi(n);break;case 1:st(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&X2(n,n.return,i),qi(n);break;case 27:ks(n.stateNode);case 26:case 5:st(n,n.return),qi(n);break;case 22:n.memoizedState===null&&qi(n);break;case 30:qi(n);break;default:qi(n)}e=e.sibling}}function Tt(e,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,o=e,u=n,h=u.flags;switch(u.tag){case 0:case 11:case 15:Tt(o,u,i),hs(4,u);break;case 1:if(Tt(o,u,i),s=u,o=s.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(x){Te(s,s.return,x)}if(s=u,o=s.updateQueue,o!==null){var y=s.stateNode;try{var b=o.shared.hiddenCallbacks;if(b!==null)for(o.shared.hiddenCallbacks=null,o=0;o<b.length;o++)Nu(b[o],y)}catch(x){Te(s,s.return,x)}}i&&h&64&&J2(u),ps(u,u.return);break;case 27:W2(u);case 26:case 5:Tt(o,u,i),i&&s===null&&h&4&&Q2(u),ps(u,u.return);break;case 12:Tt(o,u,i);break;case 31:Tt(o,u,i),i&&h&4&&ac(o,u);break;case 13:Tt(o,u,i),i&&h&4&&sc(o,u);break;case 22:u.memoizedState===null&&Tt(o,u,i),ps(u,u.return);break;case 30:break;default:Tt(o,u,i)}n=n.sibling}}function fr(e,n){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&es(i))}function hr(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&es(e))}function Jn(e,n,i,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)oc(e,n,i,s),n=n.sibling}function oc(e,n,i,s){var o=n.flags;switch(n.tag){case 0:case 11:case 15:Jn(e,n,i,s),o&2048&&hs(9,n);break;case 1:Jn(e,n,i,s);break;case 3:Jn(e,n,i,s),o&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&es(e)));break;case 12:if(o&2048){Jn(e,n,i,s),e=n.stateNode;try{var u=n.memoizedProps,h=u.id,y=u.onPostCommit;typeof y=="function"&&y(h,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Te(n,n.return,b)}}else Jn(e,n,i,s);break;case 31:Jn(e,n,i,s);break;case 13:Jn(e,n,i,s);break;case 23:break;case 22:u=n.stateNode,h=n.alternate,n.memoizedState!==null?u._visibility&2?Jn(e,n,i,s):ms(e,n):u._visibility&2?Jn(e,n,i,s):(u._visibility|=2,pa(e,n,i,s,(n.subtreeFlags&10256)!==0||!1)),o&2048&&fr(h,n);break;case 24:Jn(e,n,i,s),o&2048&&hr(n.alternate,n);break;default:Jn(e,n,i,s)}}function pa(e,n,i,s,o){for(o=o&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=e,h=n,y=i,b=s,x=h.flags;switch(h.tag){case 0:case 11:case 15:pa(u,h,y,b,o),hs(8,h);break;case 23:break;case 22:var I=h.stateNode;h.memoizedState!==null?I._visibility&2?pa(u,h,y,b,o):ms(u,h):(I._visibility|=2,pa(u,h,y,b,o)),o&&x&2048&&fr(h.alternate,h);break;case 24:pa(u,h,y,b,o),o&&x&2048&&hr(h.alternate,h);break;default:pa(u,h,y,b,o)}n=n.sibling}}function ms(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=e,s=n,o=s.flags;switch(s.tag){case 22:ms(i,s),o&2048&&fr(s.alternate,s);break;case 24:ms(i,s),o&2048&&hr(s.alternate,s);break;default:ms(i,s)}n=n.sibling}}var gs=8192;function ma(e,n,i){if(e.subtreeFlags&gs)for(e=e.child;e!==null;)uc(e,n,i),e=e.sibling}function uc(e,n,i){switch(e.tag){case 26:ma(e,n,i),e.flags&gs&&e.memoizedState!==null&&i4(i,Yn,e.memoizedState,e.memoizedProps);break;case 5:ma(e,n,i);break;case 3:case 4:var s=Yn;Yn=W1(e.stateNode.containerInfo),ma(e,n,i),Yn=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=gs,gs=16777216,ma(e,n,i),gs=s):ma(e,n,i));break;default:ma(e,n,i)}}function cc(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ys(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];Fe=s,fc(s,e)}cc(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dc(e),e=e.sibling}function dc(e){switch(e.tag){case 0:case 11:case 15:ys(e),e.flags&2048&&Zt(9,e,e.return);break;case 3:ys(e);break;case 12:ys(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,U1(e)):ys(e);break;default:ys(e)}}function U1(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];Fe=s,fc(s,e)}cc(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Zt(8,n,n.return),U1(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,U1(n));break;default:U1(n)}e=e.sibling}}function fc(e,n){for(;Fe!==null;){var i=Fe;switch(i.tag){case 0:case 11:case 15:Zt(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var s=i.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:es(i.memoizedState.cache)}if(s=i.child,s!==null)s.return=i,Fe=s;else e:for(i=e;Fe!==null;){s=Fe;var o=s.sibling,u=s.return;if(tc(s),s===i){Fe=null;break e}if(o!==null){o.return=u,Fe=o;break e}Fe=u}}}var wh={getCacheForType:function(e){var n=sn(Le),i=n.data.get(e);return i===void 0&&(i=e(),n.data.set(e,i)),i},cacheSignal:function(){return sn(Le).controller.signal}},Kh=typeof WeakMap=="function"?WeakMap:Map,_e=0,xe=null,he=null,me=0,Se=0,qn=null,Yt=!1,ga=!1,pr=!1,Et=0,De=0,Jt=0,xi=0,mr=0,xn=0,ya=0,ws=null,wn=null,gr=!1,z1=0,hc=0,H1=1/0,L1=null,Xt=null,Ye=0,Qt=null,wa=null,At=0,yr=0,wr=null,pc=null,Ks=0,Kr=null;function On(){return(_e&2)!==0&&me!==0?me&-me:C.T!==null?Tr():Oo()}function mc(){if(xn===0)if((me&536870912)===0||we){var e=Qs;Qs<<=1,(Qs&3932160)===0&&(Qs=262144),xn=e}else xn=536870912;return e=En.current,e!==null&&(e.flags|=32),xn}function Kn(e,n,i){(e===xe&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(Ka(e,0),Ft(e,me,xn,!1)),Ua(e,i),((_e&2)===0||e!==xe)&&(e===xe&&((_e&2)===0&&(xi|=i),De===4&&Ft(e,me,xn,!1)),lt(e))}function gc(e,n,i){if((_e&6)!==0)throw Error(r(327));var s=!i&&(n&127)===0&&(n&e.expiredLanes)===0||Ba(e,n),o=s?_h(e,n):br(e,n,!0),u=s;do{if(o===0){ga&&!s&&Ft(e,n,0,!1);break}else{if(i=e.current.alternate,u&&!vh(i)){o=br(e,n,!1),u=!1;continue}if(o===2){if(u=n,e.errorRecoveryDisabledLanes&u)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){n=h;e:{var y=e;o=ws;var b=y.current.memoizedState.isDehydrated;if(b&&(Ka(y,h).flags|=256),h=br(y,h,!1),h!==2){if(pr&&!b){y.errorRecoveryDisabledLanes|=u,xi|=u,o=4;break e}u=wn,wn=o,u!==null&&(wn===null?wn=u:wn.push.apply(wn,u))}o=h}if(u=!1,o!==2)continue}}if(o===1){Ka(e,0),Ft(e,n,0,!0);break}e:{switch(s=e,u=o,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ft(s,n,xn,!Yt);break e;case 2:wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(o=z1+300-fe(),10<o)){if(Ft(s,n,xn,!Yt),Ws(s,0,!0)!==0)break e;At=n,s.timeoutHandle=Zc(yc.bind(null,s,i,wn,L1,gr,n,xn,xi,ya,Yt,u,"Throttled",-0,0),o);break e}yc(s,i,wn,L1,gr,n,xn,xi,ya,Yt,u,null,-0,0)}}break}while(!0);lt(e)}function yc(e,n,i,s,o,u,h,y,b,x,I,N,O,M){if(e.timeoutHandle=-1,N=n.subtreeFlags,N&8192||(N&16785408)===16785408){N={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ft},uc(n,u,N);var J=(u&62914560)===u?z1-fe():(u&4194048)===u?hc-fe():0;if(J=a4(N,J),J!==null){At=u,e.cancelPendingCommit=J(Tc.bind(null,e,n,u,i,s,o,h,y,b,I,N,null,O,M)),Ft(e,u,h,!x);return}}Tc(e,n,u,i,s,o,h,y,b)}function vh(e){for(var n=e;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var s=0;s<i.length;s++){var o=i[s],u=o.getSnapshot;o=o.value;try{if(!Sn(u(),o))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ft(e,n,i,s){n&=~mr,n&=~xi,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var o=n;0<o;){var u=31-kn(o),h=1<<u;s[u]=-1,o&=~h}i!==0&&Ao(e,i,n)}function V1(){return(_e&6)===0?(vs(0),!1):!0}function vr(){if(he!==null){if(Se===0)var e=he.return;else e=he,gt=vi=null,jl(e),ua=null,ts=0,e=he;for(;e!==null;)Y2(e.alternate,e),e=e.return;he=null}}function Ka(e,n){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,Uh(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),At=0,vr(),xe=e,he=i=pt(e.current,null),me=n,Se=0,qn=null,Yt=!1,ga=Ba(e,n),pr=!1,ya=xn=mr=xi=Jt=De=0,wn=ws=null,gr=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var o=31-kn(s),u=1<<o;n|=e[o],s&=~u}return Et=n,d1(),i}function wc(e,n){oe=null,C.H=cs,n===oa||n===K1?(n=Iu(),Se=3):n===Sl?(n=Iu(),Se=4):Se=n===Fl?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,he===null&&(De=1,M1(e,Dn(n,e.current)))}function Kc(){var e=En.current;return e===null?!0:(me&4194048)===me?zn===null:(me&62914560)===me||(me&536870912)!==0?e===zn:!1}function vc(){var e=C.H;return C.H=cs,e===null?cs:e}function bc(){var e=C.A;return C.A=wh,e}function $1(){De=4,Yt||(me&4194048)!==me&&En.current!==null||(ga=!0),(Jt&134217727)===0&&(xi&134217727)===0||xe===null||Ft(xe,me,xn,!1)}function br(e,n,i){var s=_e;_e|=2;var o=vc(),u=bc();(xe!==e||me!==n)&&(L1=null,Ka(e,n)),n=!1;var h=De;e:do try{if(Se!==0&&he!==null){var y=he,b=qn;switch(Se){case 8:vr(),h=6;break e;case 3:case 2:case 9:case 6:En.current===null&&(n=!0);var x=Se;if(Se=0,qn=null,va(e,y,b,x),i&&ga){h=0;break e}break;default:x=Se,Se=0,qn=null,va(e,y,b,x)}}bh(),h=De;break}catch(I){wc(e,I)}while(!0);return n&&e.shellSuspendCounter++,gt=vi=null,_e=s,C.H=o,C.A=u,he===null&&(xe=null,me=0,d1()),h}function bh(){for(;he!==null;)_c(he)}function _h(e,n){var i=_e;_e|=2;var s=vc(),o=bc();xe!==e||me!==n?(L1=null,H1=fe()+500,Ka(e,n)):ga=Ba(e,n);e:do try{if(Se!==0&&he!==null){n=he;var u=qn;n:switch(Se){case 1:Se=0,qn=null,va(e,n,u,1);break;case 2:case 9:if(Cu(u)){Se=0,qn=null,kc(n);break}n=function(){Se!==2&&Se!==9||xe!==e||(Se=7),lt(e)},u.then(n,n);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:Cu(u)?(Se=0,qn=null,kc(n)):(Se=0,qn=null,va(e,n,u,7));break;case 5:var h=null;switch(he.tag){case 26:h=he.memoizedState;case 5:case 27:var y=he;if(h?od(h):y.stateNode.complete){Se=0,qn=null;var b=y.sibling;if(b!==null)he=b;else{var x=y.return;x!==null?(he=x,G1(x)):he=null}break n}}Se=0,qn=null,va(e,n,u,5);break;case 6:Se=0,qn=null,va(e,n,u,6);break;case 8:vr(),De=6;break e;default:throw Error(r(462))}}kh();break}catch(I){wc(e,I)}while(!0);return gt=vi=null,C.H=s,C.A=o,_e=i,he!==null?0:(xe=null,me=0,d1(),De)}function kh(){for(;he!==null&&!U();)_c(he)}function _c(e){var n=G2(e.alternate,e,Et);e.memoizedProps=e.pendingProps,n===null?G1(e):he=n}function kc(e){var n=e,i=n.alternate;switch(n.tag){case 15:case 0:n=U2(i,n,n.pendingProps,n.type,void 0,me);break;case 11:n=U2(i,n,n.pendingProps,n.type.render,n.ref,me);break;case 5:jl(n);default:Y2(i,n),n=he=bu(n,Et),n=G2(i,n,Et)}e.memoizedProps=e.pendingProps,n===null?G1(e):he=n}function va(e,n,i,s){gt=vi=null,jl(n),ua=null,ts=0;var o=n.return;try{if(dh(e,o,n,i,me)){De=1,M1(e,Dn(i,e.current)),he=null;return}}catch(u){if(o!==null)throw he=o,u;De=1,M1(e,Dn(i,e.current)),he=null;return}n.flags&32768?(we||s===1?e=!0:ga||(me&536870912)!==0?e=!1:(Yt=e=!0,(s===2||s===9||s===3||s===6)&&(s=En.current,s!==null&&s.tag===13&&(s.flags|=16384))),Sc(n,e)):G1(n)}function G1(e){var n=e;do{if((n.flags&32768)!==0){Sc(n,Yt);return}e=n.return;var i=ph(n.alternate,n,Et);if(i!==null){he=i;return}if(n=n.sibling,n!==null){he=n;return}he=n=e}while(n!==null);De===0&&(De=5)}function Sc(e,n){do{var i=mh(e.alternate,e);if(i!==null){i.flags&=32767,he=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(e=e.sibling,e!==null)){he=e;return}he=e=i}while(e!==null);De=6,he=null}function Tc(e,n,i,s,o,u,h,y,b){e.cancelPendingCommit=null;do Z1();while(Ye!==0);if((_e&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(u=n.lanes|n.childLanes,u|=ul,nf(e,i,u,h,y,b),e===xe&&(he=xe=null,me=0),wa=n,Qt=e,At=i,yr=u,wr=o,pc=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ah(tt,function(){return Oc(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=C.T,C.T=null,o=B.p,B.p=2,h=_e,_e|=4;try{gh(e,n,i)}finally{_e=h,B.p=o,C.T=s}}Ye=1,Ec(),Ac(),qc()}}function Ec(){if(Ye===1){Ye=0;var e=Qt,n=wa,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=C.T,C.T=null;var s=B.p;B.p=2;var o=_e;_e|=4;try{lc(n,e);var u=Mr,h=fu(e.containerInfo),y=u.focusedElem,b=u.selectionRange;if(h!==y&&y&&y.ownerDocument&&du(y.ownerDocument.documentElement,y)){if(b!==null&&al(y)){var x=b.start,I=b.end;if(I===void 0&&(I=x),"selectionStart"in y)y.selectionStart=x,y.selectionEnd=Math.min(I,y.value.length);else{var N=y.ownerDocument||document,O=N&&N.defaultView||window;if(O.getSelection){var M=O.getSelection(),J=y.textContent.length,ae=Math.min(b.start,J),qe=b.end===void 0?ae:Math.min(b.end,J);!M.extend&&ae>qe&&(h=qe,qe=ae,ae=h);var E=cu(y,ae),k=cu(y,qe);if(E&&k&&(M.rangeCount!==1||M.anchorNode!==E.node||M.anchorOffset!==E.offset||M.focusNode!==k.node||M.focusOffset!==k.offset)){var q=N.createRange();q.setStart(E.node,E.offset),M.removeAllRanges(),ae>qe?(M.addRange(q),M.extend(k.node,k.offset)):(q.setEnd(k.node,k.offset),M.addRange(q))}}}}for(N=[],M=y;M=M.parentNode;)M.nodeType===1&&N.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<N.length;y++){var P=N[y];P.element.scrollLeft=P.left,P.element.scrollTop=P.top}}s0=!!Cr,Mr=Cr=null}finally{_e=o,B.p=s,C.T=i}}e.current=n,Ye=2}}function Ac(){if(Ye===2){Ye=0;var e=Qt,n=wa,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=C.T,C.T=null;var s=B.p;B.p=2;var o=_e;_e|=4;try{nc(e,n.alternate,n)}finally{_e=o,B.p=s,C.T=i}}Ye=3}}function qc(){if(Ye===4||Ye===3){Ye=0,V();var e=Qt,n=wa,i=At,s=pc;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ye=5:(Ye=0,wa=Qt=null,xc(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Xt=null),B0(i),n=n.stateNode,_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(Na,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=C.T,o=B.p,B.p=2,C.T=null;try{for(var u=e.onRecoverableError,h=0;h<s.length;h++){var y=s[h];u(y.value,{componentStack:y.stack})}}finally{C.T=n,B.p=o}}(At&3)!==0&&Z1(),lt(e),o=e.pendingLanes,(i&261930)!==0&&(o&42)!==0?e===Kr?Ks++:(Ks=0,Kr=e):Ks=0,vs(0)}}function xc(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,es(n)))}function Z1(){return Ec(),Ac(),qc(),Oc()}function Oc(){if(Ye!==5)return!1;var e=Qt,n=yr;yr=0;var i=B0(At),s=C.T,o=B.p;try{B.p=32>i?32:i,C.T=null,i=wr,wr=null;var u=Qt,h=At;if(Ye=0,wa=Qt=null,At=0,(_e&6)!==0)throw Error(r(331));var y=_e;if(_e|=4,dc(u.current),oc(u,u.current,h,i),_e=y,vs(0,!1),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(Na,u)}catch{}return!0}finally{B.p=o,C.T=s,xc(e,n)}}function Rc(e,n,i){n=Dn(i,n),n=Ql(e.stateNode,n,2),e=Vt(e,n,2),e!==null&&(Ua(e,2),lt(e))}function Te(e,n,i){if(e.tag===3)Rc(e,e,i);else for(;n!==null;){if(n.tag===3){Rc(n,e,i);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Xt===null||!Xt.has(s))){e=Dn(i,e),i=C2(2),s=Vt(n,i,2),s!==null&&(M2(i,s,n,e),Ua(s,2),lt(s));break}}n=n.return}}function _r(e,n,i){var s=e.pingCache;if(s===null){s=e.pingCache=new Kh;var o=new Set;s.set(n,o)}else o=s.get(n),o===void 0&&(o=new Set,s.set(n,o));o.has(i)||(pr=!0,o.add(i),e=Sh.bind(null,e,n,i),n.then(e,e))}function Sh(e,n,i){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,xe===e&&(me&i)===i&&(De===4||De===3&&(me&62914560)===me&&300>fe()-z1?(_e&2)===0&&Ka(e,0):mr|=i,ya===me&&(ya=0)),lt(e)}function Cc(e,n){n===0&&(n=Eo()),e=yi(e,n),e!==null&&(Ua(e,n),lt(e))}function Th(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Cc(e,i)}function Eh(e,n){var i=0;switch(e.tag){case 31:case 13:var s=e.stateNode,o=e.memoizedState;o!==null&&(i=o.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Cc(e,i)}function Ah(e,n){return Ui(e,n)}var Y1=null,ba=null,kr=!1,J1=!1,Sr=!1,Wt=0;function lt(e){e!==ba&&e.next===null&&(ba===null?Y1=ba=e:ba=ba.next=e),J1=!0,kr||(kr=!0,xh())}function vs(e,n){if(!Sr&&J1){Sr=!0;do for(var i=!1,s=Y1;s!==null;){if(e!==0){var o=s.pendingLanes;if(o===0)var u=0;else{var h=s.suspendedLanes,y=s.pingedLanes;u=(1<<31-kn(42|e)+1)-1,u&=o&~(h&~y),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,jc(s,u))}else u=me,u=Ws(s,s===xe?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||Ba(s,u)||(i=!0,jc(s,u));s=s.next}while(i);Sr=!1}}function qh(){Mc()}function Mc(){J1=kr=!1;var e=0;Wt!==0&&Bh()&&(e=Wt);for(var n=fe(),i=null,s=Y1;s!==null;){var o=s.next,u=Ic(s,n);u===0?(s.next=null,i===null?Y1=o:i.next=o,o===null&&(ba=i)):(i=s,(e!==0||(u&3)!==0)&&(J1=!0)),s=o}Ye!==0&&Ye!==5||vs(e),Wt!==0&&(Wt=0)}function Ic(e,n){for(var i=e.suspendedLanes,s=e.pingedLanes,o=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var h=31-kn(u),y=1<<h,b=o[h];b===-1?((y&i)===0||(y&s)!==0)&&(o[h]=ef(y,n)):b<=n&&(e.expiredLanes|=y),u&=~y}if(n=xe,i=me,i=Ws(e,e===n?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,i===0||e===n&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&zi(s),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Ba(e,i)){if(n=i&-i,n===e.callbackPriority)return n;switch(s!==null&&zi(s),B0(i)){case 2:case 8:i=fn;break;case 32:i=tt;break;case 268435456:i=To;break;default:i=tt}return s=Pc.bind(null,e),i=Ui(i,s),e.callbackPriority=n,e.callbackNode=i,n}return s!==null&&s!==null&&zi(s),e.callbackPriority=2,e.callbackNode=null,2}function Pc(e,n){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Z1()&&e.callbackNode!==i)return null;var s=me;return s=Ws(e,e===xe?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(gc(e,s,n),Ic(e,fe()),e.callbackNode!=null&&e.callbackNode===i?Pc.bind(null,e):null)}function jc(e,n){if(Z1())return null;gc(e,n,!0)}function xh(){zh(function(){(_e&6)!==0?Ui(cn,qh):Mc()})}function Tr(){if(Wt===0){var e=la;e===0&&(e=Xs,Xs<<=1,(Xs&261888)===0&&(Xs=256)),Wt=e}return Wt}function Dc(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:i1(""+e)}function Nc(e,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,e.id&&i.setAttribute("form",e.id),n.parentNode.insertBefore(i,n),e=new FormData(e),i.parentNode.removeChild(i),e}function Oh(e,n,i,s,o){if(n==="submit"&&i&&i.stateNode===o){var u=Dc((o[hn]||null).action),h=s.submitter;h&&(n=(n=h[hn]||null)?Dc(n.formAction):h.getAttribute("formAction"),n!==null&&(u=n,h=null));var y=new r1("action","action",null,s,o);e.push({event:y,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Wt!==0){var b=h?Nc(o,h):new FormData(o);$l(i,{pending:!0,data:b,method:o.method,action:u},null,b)}}else typeof u=="function"&&(y.preventDefault(),b=h?Nc(o,h):new FormData(o),$l(i,{pending:!0,data:b,method:o.method,action:u},u,b))},currentTarget:o}]})}}for(var Er=0;Er<ol.length;Er++){var Ar=ol[Er],Rh=Ar.toLowerCase(),Ch=Ar[0].toUpperCase()+Ar.slice(1);Zn(Rh,"on"+Ch)}Zn(mu,"onAnimationEnd"),Zn(gu,"onAnimationIteration"),Zn(yu,"onAnimationStart"),Zn("dblclick","onDoubleClick"),Zn("focusin","onFocus"),Zn("focusout","onBlur"),Zn(Yf,"onTransitionRun"),Zn(Jf,"onTransitionStart"),Zn(Xf,"onTransitionCancel"),Zn(wu,"onTransitionEnd"),Gi("onMouseEnter",["mouseout","mouseover"]),Gi("onMouseLeave",["mouseout","mouseover"]),Gi("onPointerEnter",["pointerout","pointerover"]),Gi("onPointerLeave",["pointerout","pointerover"]),hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hi("onBeforeInput",["compositionend","keypress","textInput","paste"]),hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bs));function Bc(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],o=s.event;s=s.listeners;e:{var u=void 0;if(n)for(var h=s.length-1;0<=h;h--){var y=s[h],b=y.instance,x=y.currentTarget;if(y=y.listener,b!==u&&o.isPropagationStopped())break e;u=y,o.currentTarget=x;try{u(o)}catch(I){c1(I)}o.currentTarget=null,u=b}else for(h=0;h<s.length;h++){if(y=s[h],b=y.instance,x=y.currentTarget,y=y.listener,b!==u&&o.isPropagationStopped())break e;u=y,o.currentTarget=x;try{u(o)}catch(I){c1(I)}o.currentTarget=null,u=b}}}}function pe(e,n){var i=n[U0];i===void 0&&(i=n[U0]=new Set);var s=e+"__bubble";i.has(s)||(Uc(n,e,2,!1),i.add(s))}function qr(e,n,i){var s=0;n&&(s|=4),Uc(i,e,s,n)}var X1="_reactListening"+Math.random().toString(36).slice(2);function xr(e){if(!e[X1]){e[X1]=!0,Mo.forEach(function(i){i!=="selectionchange"&&(Mh.has(i)||qr(i,!1,e),qr(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[X1]||(n[X1]=!0,qr("selectionchange",!1,n))}}function Uc(e,n,i,s){switch(md(n)){case 2:var o=r4;break;case 8:o=o4;break;default:o=Vr}i=o.bind(null,n,i,e),o=void 0,!J0||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),s?o!==void 0?e.addEventListener(n,i,{capture:!0,passive:o}):e.addEventListener(n,i,!0):o!==void 0?e.addEventListener(n,i,{passive:o}):e.addEventListener(n,i,!1)}function Or(e,n,i,s,o){var u=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var h=s.tag;if(h===3||h===4){var y=s.stateNode.containerInfo;if(y===o)break;if(h===4)for(h=s.return;h!==null;){var b=h.tag;if((b===3||b===4)&&h.stateNode.containerInfo===o)return;h=h.return}for(;y!==null;){if(h=Li(y),h===null)return;if(b=h.tag,b===5||b===6||b===26||b===27){s=u=h;continue e}y=y.parentNode}}s=s.return}$o(function(){var x=u,I=Z0(i),N=[];e:{var O=Ku.get(e);if(O!==void 0){var M=r1,J=e;switch(e){case"keypress":if(s1(i)===0)break e;case"keydown":case"keyup":M=Ef;break;case"focusin":J="focus",M=W0;break;case"focusout":J="blur",M=W0;break;case"beforeblur":case"afterblur":M=W0;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=pf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=xf;break;case mu:case gu:case yu:M=yf;break;case wu:M=Rf;break;case"scroll":case"scrollend":M=ff;break;case"wheel":M=Mf;break;case"copy":case"cut":case"paste":M=Kf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Xo;break;case"toggle":case"beforetoggle":M=Pf}var ae=(n&4)!==0,qe=!ae&&(e==="scroll"||e==="scrollend"),E=ae?O!==null?O+"Capture":null:O;ae=[];for(var k=x,q;k!==null;){var P=k;if(q=P.stateNode,P=P.tag,P!==5&&P!==26&&P!==27||q===null||E===null||(P=La(k,E),P!=null&&ae.push(_s(k,P,q))),qe)break;k=k.return}0<ae.length&&(O=new M(O,J,null,i,I),N.push({event:O,listeners:ae}))}}if((n&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",O&&i!==G0&&(J=i.relatedTarget||i.fromElement)&&(Li(J)||J[Hi]))break e;if((M||O)&&(O=I.window===I?I:(O=I.ownerDocument)?O.defaultView||O.parentWindow:window,M?(J=i.relatedTarget||i.toElement,M=x,J=J?Li(J):null,J!==null&&(qe=d(J),ae=J.tag,J!==qe||ae!==5&&ae!==27&&ae!==6)&&(J=null)):(M=null,J=x),M!==J)){if(ae=Yo,P="onMouseLeave",E="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Xo,P="onPointerLeave",E="onPointerEnter",k="pointer"),qe=M==null?O:Ha(M),q=J==null?O:Ha(J),O=new ae(P,k+"leave",M,i,I),O.target=qe,O.relatedTarget=q,P=null,Li(I)===x&&(ae=new ae(E,k+"enter",J,i,I),ae.target=q,ae.relatedTarget=qe,P=ae),qe=P,M&&J)n:{for(ae=Ih,E=M,k=J,q=0,P=E;P;P=ae(P))q++;P=0;for(var ee=k;ee;ee=ae(ee))P++;for(;0<q-P;)E=ae(E),q--;for(;0<P-q;)k=ae(k),P--;for(;q--;){if(E===k||k!==null&&E===k.alternate){ae=E;break n}E=ae(E),k=ae(k)}ae=null}else ae=null;M!==null&&zc(N,O,M,ae,!1),J!==null&&qe!==null&&zc(N,qe,J,ae,!0)}}e:{if(O=x?Ha(x):window,M=O.nodeName&&O.nodeName.toLowerCase(),M==="select"||M==="input"&&O.type==="file")var ve=au;else if(tu(O))if(su)ve=$f;else{ve=Lf;var F=Hf}else M=O.nodeName,!M||M.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?x&&$0(x.elementType)&&(ve=au):ve=Vf;if(ve&&(ve=ve(e,x))){iu(N,ve,i,I);break e}F&&F(e,O,x),e==="focusout"&&x&&O.type==="number"&&x.memoizedProps.value!=null&&V0(O,"number",O.value)}switch(F=x?Ha(x):window,e){case"focusin":(tu(F)||F.contentEditable==="true")&&(Fi=F,sl=x,Qa=null);break;case"focusout":Qa=sl=Fi=null;break;case"mousedown":ll=!0;break;case"contextmenu":case"mouseup":case"dragend":ll=!1,hu(N,i,I);break;case"selectionchange":if(Zf)break;case"keydown":case"keyup":hu(N,i,I)}var ue;if(nl)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Qi?eu(e,i)&&(ge="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ge="onCompositionStart");ge&&(Qo&&i.locale!=="ko"&&(Qi||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Qi&&(ue=Go()):(Dt=I,X0="value"in Dt?Dt.value:Dt.textContent,Qi=!0)),F=Q1(x,ge),0<F.length&&(ge=new Jo(ge,e,null,i,I),N.push({event:ge,listeners:F}),ue?ge.data=ue:(ue=nu(i),ue!==null&&(ge.data=ue)))),(ue=Df?Nf(e,i):Bf(e,i))&&(ge=Q1(x,"onBeforeInput"),0<ge.length&&(F=new Jo("onBeforeInput","beforeinput",null,i,I),N.push({event:F,listeners:ge}),F.data=ue)),Oh(N,e,x,i,I)}Bc(N,n)})}function _s(e,n,i){return{instance:e,listener:n,currentTarget:i}}function Q1(e,n){for(var i=n+"Capture",s=[];e!==null;){var o=e,u=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=La(e,i),o!=null&&s.unshift(_s(e,o,u)),o=La(e,n),o!=null&&s.push(_s(e,o,u))),e.tag===3)return s;e=e.return}return[]}function Ih(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zc(e,n,i,s,o){for(var u=n._reactName,h=[];i!==null&&i!==s;){var y=i,b=y.alternate,x=y.stateNode;if(y=y.tag,b!==null&&b===s)break;y!==5&&y!==26&&y!==27||x===null||(b=x,o?(x=La(i,u),x!=null&&h.unshift(_s(i,x,b))):o||(x=La(i,u),x!=null&&h.push(_s(i,x,b)))),i=i.return}h.length!==0&&e.push({event:n,listeners:h})}var Ph=/\r\n?/g,jh=/\u0000|\uFFFD/g;function Hc(e){return(typeof e=="string"?e:""+e).replace(Ph,`
`).replace(jh,"")}function Lc(e,n){return n=Hc(n),Hc(e)===n}function Ae(e,n,i,s,o,u){switch(i){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Yi(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Yi(e,""+s);break;case"className":n1(e,"class",s);break;case"tabIndex":n1(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":n1(e,i,s);break;case"style":Lo(e,s,u);break;case"data":if(n!=="object"){n1(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||i!=="href")){e.removeAttribute(i);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(i);break}s=i1(""+s),e.setAttribute(i,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(n!=="input"&&Ae(e,n,"name",o.name,o,null),Ae(e,n,"formEncType",o.formEncType,o,null),Ae(e,n,"formMethod",o.formMethod,o,null),Ae(e,n,"formTarget",o.formTarget,o,null)):(Ae(e,n,"encType",o.encType,o,null),Ae(e,n,"method",o.method,o,null),Ae(e,n,"target",o.target,o,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(i);break}s=i1(""+s),e.setAttribute(i,s);break;case"onClick":s!=null&&(e.onclick=ft);break;case"onScroll":s!=null&&pe("scroll",e);break;case"onScrollEnd":s!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(i=s.__html,i!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=i}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}i=i1(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,""+s):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":s===!0?e.setAttribute(i,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,s):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(i,s):e.removeAttribute(i);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(i):e.setAttribute(i,s);break;case"popover":pe("beforetoggle",e),pe("toggle",e),e1(e,"popover",s);break;case"xlinkActuate":dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":dt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":dt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":dt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":dt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":e1(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=cf.get(i)||i,e1(e,i,s))}}function Rr(e,n,i,s,o,u){switch(i){case"style":Lo(e,s,u);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(i=s.__html,i!=null){if(o.children!=null)throw Error(r(60));e.innerHTML=i}}break;case"children":typeof s=="string"?Yi(e,s):(typeof s=="number"||typeof s=="bigint")&&Yi(e,""+s);break;case"onScroll":s!=null&&pe("scroll",e);break;case"onScrollEnd":s!=null&&pe("scrollend",e);break;case"onClick":s!=null&&(e.onclick=ft);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Io.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(o=i.endsWith("Capture"),n=i.slice(2,o?i.length-7:void 0),u=e[hn]||null,u=u!=null?u[i]:null,typeof u=="function"&&e.removeEventListener(n,u,o),typeof s=="function")){typeof u!="function"&&u!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(n,s,o);break e}i in e?e[i]=s:s===!0?e.setAttribute(i,""):e1(e,i,s)}}}function rn(e,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var s=!1,o=!1,u;for(u in i)if(i.hasOwnProperty(u)){var h=i[u];if(h!=null)switch(u){case"src":s=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ae(e,n,u,h,i,null)}}o&&Ae(e,n,"srcSet",i.srcSet,i,null),s&&Ae(e,n,"src",i.src,i,null);return;case"input":pe("invalid",e);var y=u=h=o=null,b=null,x=null;for(s in i)if(i.hasOwnProperty(s)){var I=i[s];if(I!=null)switch(s){case"name":o=I;break;case"type":h=I;break;case"checked":b=I;break;case"defaultChecked":x=I;break;case"value":u=I;break;case"defaultValue":y=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(r(137,n));break;default:Ae(e,n,s,I,i,null)}}Bo(e,u,y,b,x,h,o,!1);return;case"select":pe("invalid",e),s=h=u=null;for(o in i)if(i.hasOwnProperty(o)&&(y=i[o],y!=null))switch(o){case"value":u=y;break;case"defaultValue":h=y;break;case"multiple":s=y;default:Ae(e,n,o,y,i,null)}n=u,i=h,e.multiple=!!s,n!=null?Zi(e,!!s,n,!1):i!=null&&Zi(e,!!s,i,!0);return;case"textarea":pe("invalid",e),u=o=s=null;for(h in i)if(i.hasOwnProperty(h)&&(y=i[h],y!=null))switch(h){case"value":s=y;break;case"defaultValue":o=y;break;case"children":u=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(r(91));break;default:Ae(e,n,h,y,i,null)}zo(e,s,o,u);return;case"option":for(b in i)if(i.hasOwnProperty(b)&&(s=i[b],s!=null))switch(b){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ae(e,n,b,s,i,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(s=0;s<bs.length;s++)pe(bs[s],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in i)if(i.hasOwnProperty(x)&&(s=i[x],s!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ae(e,n,x,s,i,null)}return;default:if($0(n)){for(I in i)i.hasOwnProperty(I)&&(s=i[I],s!==void 0&&Rr(e,n,I,s,i,void 0));return}}for(y in i)i.hasOwnProperty(y)&&(s=i[y],s!=null&&Ae(e,n,y,s,i,null))}function Dh(e,n,i,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,h=null,y=null,b=null,x=null,I=null;for(M in i){var N=i[M];if(i.hasOwnProperty(M)&&N!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":b=N;default:s.hasOwnProperty(M)||Ae(e,n,M,null,s,N)}}for(var O in s){var M=s[O];if(N=i[O],s.hasOwnProperty(O)&&(M!=null||N!=null))switch(O){case"type":u=M;break;case"name":o=M;break;case"checked":x=M;break;case"defaultChecked":I=M;break;case"value":h=M;break;case"defaultValue":y=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,n));break;default:M!==N&&Ae(e,n,O,M,s,N)}}L0(e,h,y,b,x,I,u,o);return;case"select":M=h=y=O=null;for(u in i)if(b=i[u],i.hasOwnProperty(u)&&b!=null)switch(u){case"value":break;case"multiple":M=b;default:s.hasOwnProperty(u)||Ae(e,n,u,null,s,b)}for(o in s)if(u=s[o],b=i[o],s.hasOwnProperty(o)&&(u!=null||b!=null))switch(o){case"value":O=u;break;case"defaultValue":y=u;break;case"multiple":h=u;default:u!==b&&Ae(e,n,o,u,s,b)}n=y,i=h,s=M,O!=null?Zi(e,!!i,O,!1):!!s!=!!i&&(n!=null?Zi(e,!!i,n,!0):Zi(e,!!i,i?[]:"",!1));return;case"textarea":M=O=null;for(y in i)if(o=i[y],i.hasOwnProperty(y)&&o!=null&&!s.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Ae(e,n,y,null,s,o)}for(h in s)if(o=s[h],u=i[h],s.hasOwnProperty(h)&&(o!=null||u!=null))switch(h){case"value":O=o;break;case"defaultValue":M=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:o!==u&&Ae(e,n,h,o,s,u)}Uo(e,O,M);return;case"option":for(var J in i)if(O=i[J],i.hasOwnProperty(J)&&O!=null&&!s.hasOwnProperty(J))switch(J){case"selected":e.selected=!1;break;default:Ae(e,n,J,null,s,O)}for(b in s)if(O=s[b],M=i[b],s.hasOwnProperty(b)&&O!==M&&(O!=null||M!=null))switch(b){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:Ae(e,n,b,O,s,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in i)O=i[ae],i.hasOwnProperty(ae)&&O!=null&&!s.hasOwnProperty(ae)&&Ae(e,n,ae,null,s,O);for(x in s)if(O=s[x],M=i[x],s.hasOwnProperty(x)&&O!==M&&(O!=null||M!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,n));break;default:Ae(e,n,x,O,s,M)}return;default:if($0(n)){for(var qe in i)O=i[qe],i.hasOwnProperty(qe)&&O!==void 0&&!s.hasOwnProperty(qe)&&Rr(e,n,qe,void 0,s,O);for(I in s)O=s[I],M=i[I],!s.hasOwnProperty(I)||O===M||O===void 0&&M===void 0||Rr(e,n,I,O,s,M);return}}for(var E in i)O=i[E],i.hasOwnProperty(E)&&O!=null&&!s.hasOwnProperty(E)&&Ae(e,n,E,null,s,O);for(N in s)O=s[N],M=i[N],!s.hasOwnProperty(N)||O===M||O==null&&M==null||Ae(e,n,N,O,s,M)}function Vc(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,i=performance.getEntriesByType("resource"),s=0;s<i.length;s++){var o=i[s],u=o.transferSize,h=o.initiatorType,y=o.duration;if(u&&y&&Vc(h)){for(h=0,y=o.responseEnd,s+=1;s<i.length;s++){var b=i[s],x=b.startTime;if(x>y)break;var I=b.transferSize,N=b.initiatorType;I&&Vc(N)&&(b=b.responseEnd,h+=I*(b<y?1:(y-x)/(b-x)))}if(--s,n+=8*(u+h)/(o.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Cr=null,Mr=null;function F1(e){return e.nodeType===9?e:e.ownerDocument}function $c(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gc(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ir(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pr=null;function Bh(){var e=window.event;return e&&e.type==="popstate"?e===Pr?!1:(Pr=e,!0):(Pr=null,!1)}var Zc=typeof setTimeout=="function"?setTimeout:void 0,Uh=typeof clearTimeout=="function"?clearTimeout:void 0,Yc=typeof Promise=="function"?Promise:void 0,zh=typeof queueMicrotask=="function"?queueMicrotask:typeof Yc<"u"?function(e){return Yc.resolve(null).then(e).catch(Hh)}:Zc;function Hh(e){setTimeout(function(){throw e})}function ei(e){return e==="head"}function Jc(e,n){var i=n,s=0;do{var o=i.nextSibling;if(e.removeChild(i),o&&o.nodeType===8)if(i=o.data,i==="/$"||i==="/&"){if(s===0){e.removeChild(o),Ta(n);return}s--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")s++;else if(i==="html")ks(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,ks(i);for(var u=i.firstChild;u;){var h=u.nextSibling,y=u.nodeName;u[za]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=h}}else i==="body"&&ks(e.ownerDocument.body);i=o}while(i);Ta(n)}function Xc(e,n){var i=e;e=0;do{var s=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=s}while(i)}function jr(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":jr(i),z0(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function Lh(e,n,i,s){for(;e.nodeType===1;){var o=i;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[za])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Hn(e.nextSibling),e===null)break}return null}function Vh(e,n,i){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Hn(e.nextSibling),e===null))return null;return e}function Qc(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Hn(e.nextSibling),e===null))return null;return e}function Dr(e){return e.data==="$?"||e.data==="$~"}function Nr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $h(e,n){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||i.readyState!=="loading")n();else{var s=function(){n(),i.removeEventListener("DOMContentLoaded",s)};i.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Hn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Br=null;function Fc(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(n===0)return Hn(e.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}e=e.nextSibling}return null}function Wc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return e;n--}else i!=="/$"&&i!=="/&"||n++}e=e.previousSibling}return null}function ed(e,n,i){switch(n=F1(i),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function ks(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);z0(e)}var Ln=new Map,nd=new Set;function W1(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qt=B.d;B.d={f:Gh,r:Zh,D:Yh,C:Jh,L:Xh,m:Qh,X:Wh,S:Fh,M:e4};function Gh(){var e=qt.f(),n=V1();return e||n}function Zh(e){var n=Vi(e);n!==null&&n.tag===5&&n.type==="form"?w2(n):qt.r(e)}var _a=typeof document>"u"?null:document;function td(e,n,i){var s=_a;if(s&&typeof n=="string"&&n){var o=Pn(n);o='link[rel="'+e+'"][href="'+o+'"]',typeof i=="string"&&(o+='[crossorigin="'+i+'"]'),nd.has(o)||(nd.add(o),e={rel:e,crossOrigin:i,href:n},s.querySelector(o)===null&&(n=s.createElement("link"),rn(n,"link",e),Qe(n),s.head.appendChild(n)))}}function Yh(e){qt.D(e),td("dns-prefetch",e,null)}function Jh(e,n){qt.C(e,n),td("preconnect",e,n)}function Xh(e,n,i){qt.L(e,n,i);var s=_a;if(s&&e&&n){var o='link[rel="preload"][as="'+Pn(n)+'"]';n==="image"&&i&&i.imageSrcSet?(o+='[imagesrcset="'+Pn(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(o+='[imagesizes="'+Pn(i.imageSizes)+'"]')):o+='[href="'+Pn(e)+'"]';var u=o;switch(n){case"style":u=ka(e);break;case"script":u=Sa(e)}Ln.has(u)||(e=w({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:e,as:n},i),Ln.set(u,e),s.querySelector(o)!==null||n==="style"&&s.querySelector(Ss(u))||n==="script"&&s.querySelector(Ts(u))||(n=s.createElement("link"),rn(n,"link",e),Qe(n),s.head.appendChild(n)))}}function Qh(e,n){qt.m(e,n);var i=_a;if(i&&e){var s=n&&typeof n.as=="string"?n.as:"script",o='link[rel="modulepreload"][as="'+Pn(s)+'"][href="'+Pn(e)+'"]',u=o;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Sa(e)}if(!Ln.has(u)&&(e=w({rel:"modulepreload",href:e},n),Ln.set(u,e),i.querySelector(o)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ts(u)))return}s=i.createElement("link"),rn(s,"link",e),Qe(s),i.head.appendChild(s)}}}function Fh(e,n,i){qt.S(e,n,i);var s=_a;if(s&&e){var o=$i(s).hoistableStyles,u=ka(e);n=n||"default";var h=o.get(u);if(!h){var y={loading:0,preload:null};if(h=s.querySelector(Ss(u)))y.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":n},i),(i=Ln.get(u))&&Ur(e,i);var b=h=s.createElement("link");Qe(b),rn(b,"link",e),b._p=new Promise(function(x,I){b.onload=x,b.onerror=I}),b.addEventListener("load",function(){y.loading|=1}),b.addEventListener("error",function(){y.loading|=2}),y.loading|=4,e0(h,n,s)}h={type:"stylesheet",instance:h,count:1,state:y},o.set(u,h)}}}function Wh(e,n){qt.X(e,n);var i=_a;if(i&&e){var s=$i(i).hoistableScripts,o=Sa(e),u=s.get(o);u||(u=i.querySelector(Ts(o)),u||(e=w({src:e,async:!0},n),(n=Ln.get(o))&&zr(e,n),u=i.createElement("script"),Qe(u),rn(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(o,u))}}function e4(e,n){qt.M(e,n);var i=_a;if(i&&e){var s=$i(i).hoistableScripts,o=Sa(e),u=s.get(o);u||(u=i.querySelector(Ts(o)),u||(e=w({src:e,async:!0,type:"module"},n),(n=Ln.get(o))&&zr(e,n),u=i.createElement("script"),Qe(u),rn(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(o,u))}}function id(e,n,i,s){var o=(o=ce.current)?W1(o):null;if(!o)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=ka(i.href),i=$i(o).hoistableStyles,s=i.get(n),s||(s={type:"style",instance:null,count:0,state:null},i.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=ka(i.href);var u=$i(o).hoistableStyles,h=u.get(e);if(h||(o=o.ownerDocument||o,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,h),(u=o.querySelector(Ss(e)))&&!u._p&&(h.instance=u,h.state.loading=5),Ln.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Ln.set(e,i),u||n4(o,e,i,h.state))),n&&s===null)throw Error(r(528,""));return h}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Sa(i),i=$i(o).hoistableScripts,s=i.get(n),s||(s={type:"script",instance:null,count:0,state:null},i.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ka(e){return'href="'+Pn(e)+'"'}function Ss(e){return'link[rel="stylesheet"]['+e+"]"}function ad(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function n4(e,n,i,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),rn(n,"link",i),Qe(n),e.head.appendChild(n))}function Sa(e){return'[src="'+Pn(e)+'"]'}function Ts(e){return"script[async]"+e}function sd(e,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Pn(i.href)+'"]');if(s)return n.instance=s,Qe(s),s;var o=w({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Qe(s),rn(s,"style",o),e0(s,i.precedence,e),n.instance=s;case"stylesheet":o=ka(i.href);var u=e.querySelector(Ss(o));if(u)return n.state.loading|=4,n.instance=u,Qe(u),u;s=ad(i),(o=Ln.get(o))&&Ur(s,o),u=(e.ownerDocument||e).createElement("link"),Qe(u);var h=u;return h._p=new Promise(function(y,b){h.onload=y,h.onerror=b}),rn(u,"link",s),n.state.loading|=4,e0(u,i.precedence,e),n.instance=u;case"script":return u=Sa(i.src),(o=e.querySelector(Ts(u)))?(n.instance=o,Qe(o),o):(s=i,(o=Ln.get(u))&&(s=w({},i),zr(s,o)),e=e.ownerDocument||e,o=e.createElement("script"),Qe(o),rn(o,"link",s),e.head.appendChild(o),n.instance=o);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,e0(s,i.precedence,e));return n.instance}function e0(e,n,i){for(var s=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=s.length?s[s.length-1]:null,u=o,h=0;h<s.length;h++){var y=s[h];if(y.dataset.precedence===n)u=y;else if(u!==o)break}u?u.parentNode.insertBefore(e,u.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(e,n.firstChild))}function Ur(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function zr(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var n0=null;function ld(e,n,i){if(n0===null){var s=new Map,o=n0=new Map;o.set(i,s)}else o=n0,s=o.get(i),s||(s=new Map,o.set(i,s));if(s.has(e))return s;for(s.set(e,null),i=i.getElementsByTagName(e),o=0;o<i.length;o++){var u=i[o];if(!(u[za]||u[tn]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var h=u.getAttribute(n)||"";h=e+h;var y=s.get(h);y?y.push(u):s.set(h,[u])}}return s}function rd(e,n,i){e=e.ownerDocument||e,e.head.insertBefore(i,n==="title"?e.querySelector("head > title"):null)}function t4(e,n,i){if(i===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function od(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function i4(e,n,i,s){if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var o=ka(s.href),u=n.querySelector(Ss(o));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=t0.bind(e),n.then(e,e)),i.state.loading|=4,i.instance=u,Qe(u);return}u=n.ownerDocument||n,s=ad(s),(o=Ln.get(o))&&Ur(s,o),u=u.createElement("link"),Qe(u);var h=u;h._p=new Promise(function(y,b){h.onload=y,h.onerror=b}),rn(u,"link",s),i.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=t0.bind(e),n.addEventListener("load",i),n.addEventListener("error",i))}}var Hr=0;function a4(e,n){return e.stylesheets&&e.count===0&&a0(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var s=setTimeout(function(){if(e.stylesheets&&a0(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+n);0<e.imgBytes&&Hr===0&&(Hr=62500*Nh());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&a0(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Hr?50:800)+n);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(o)}}:null}function t0(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)a0(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var i0=null;function a0(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,i0=new Map,n.forEach(s4,e),i0=null,t0.call(e))}function s4(e,n){if(!(n.state.loading&4)){var i=i0.get(e);if(i)var s=i.get(null);else{i=new Map,i0.set(e,i);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var h=o[u];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(i.set(h.dataset.precedence,h),s=h)}s&&i.set(null,s)}o=n.instance,h=o.getAttribute("data-precedence"),u=i.get(h)||s,u===s&&i.set(null,o),i.set(h,o),this.count++,s=t0.bind(this),o.addEventListener("load",s),o.addEventListener("error",s),u?u.parentNode.insertBefore(o,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),n.state.loading|=4}}var Es={$$typeof:z,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function l4(e,n,i,s,o,u,h,y,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=D0(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=D0(0),this.hiddenUpdates=D0(null),this.identifierPrefix=s,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function ud(e,n,i,s,o,u,h,y,b,x,I,N){return e=new l4(e,n,i,h,b,x,I,N,y),n=1,u===!0&&(n|=24),u=Tn(3,null,null,n),e.current=u,u.stateNode=e,n=bl(),n.refCount++,e.pooledCache=n,n.refCount++,u.memoizedState={element:s,isDehydrated:i,cache:n},Tl(u),e}function cd(e){return e?(e=na,e):na}function dd(e,n,i,s,o,u){o=cd(o),s.context===null?s.context=o:s.pendingContext=o,s=Lt(n),s.payload={element:i},u=u===void 0?null:u,u!==null&&(s.callback=u),i=Vt(e,s,n),i!==null&&(Kn(i,e,n),as(i,e,n))}function fd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function Lr(e,n){fd(e,n),(e=e.alternate)&&fd(e,n)}function hd(e){if(e.tag===13||e.tag===31){var n=yi(e,67108864);n!==null&&Kn(n,e,67108864),Lr(e,67108864)}}function pd(e){if(e.tag===13||e.tag===31){var n=On();n=N0(n);var i=yi(e,n);i!==null&&Kn(i,e,n),Lr(e,n)}}var s0=!0;function r4(e,n,i,s){var o=C.T;C.T=null;var u=B.p;try{B.p=2,Vr(e,n,i,s)}finally{B.p=u,C.T=o}}function o4(e,n,i,s){var o=C.T;C.T=null;var u=B.p;try{B.p=8,Vr(e,n,i,s)}finally{B.p=u,C.T=o}}function Vr(e,n,i,s){if(s0){var o=$r(s);if(o===null)Or(e,n,s,l0,i),gd(e,s);else if(c4(o,e,n,i,s))s.stopPropagation();else if(gd(e,s),n&4&&-1<u4.indexOf(e)){for(;o!==null;){var u=Vi(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var h=fi(u.pendingLanes);if(h!==0){var y=u;for(y.pendingLanes|=2,y.entangledLanes|=2;h;){var b=1<<31-kn(h);y.entanglements[1]|=b,h&=~b}lt(u),(_e&6)===0&&(H1=fe()+500,vs(0))}}break;case 31:case 13:y=yi(u,2),y!==null&&Kn(y,u,2),V1(),Lr(u,2)}if(u=$r(s),u===null&&Or(e,n,s,l0,i),u===o)break;o=u}o!==null&&s.stopPropagation()}else Or(e,n,s,null,i)}}function $r(e){return e=Z0(e),Gr(e)}var l0=null;function Gr(e){if(l0=null,e=Li(e),e!==null){var n=d(e);if(n===null)e=null;else{var i=n.tag;if(i===13){if(e=f(n),e!==null)return e;e=null}else if(i===31){if(e=m(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return l0=e,null}function md(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(He()){case cn:return 2;case fn:return 8;case tt:case It:return 32;case To:return 268435456;default:return 32}default:return 32}}var Zr=!1,ni=null,ti=null,ii=null,As=new Map,qs=new Map,ai=[],u4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gd(e,n){switch(e){case"focusin":case"focusout":ni=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ii=null;break;case"pointerover":case"pointerout":As.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(n.pointerId)}}function xs(e,n,i,s,o,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:i,eventSystemFlags:s,nativeEvent:u,targetContainers:[o]},n!==null&&(n=Vi(n),n!==null&&hd(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function c4(e,n,i,s,o){switch(n){case"focusin":return ni=xs(ni,e,n,i,s,o),!0;case"dragenter":return ti=xs(ti,e,n,i,s,o),!0;case"mouseover":return ii=xs(ii,e,n,i,s,o),!0;case"pointerover":var u=o.pointerId;return As.set(u,xs(As.get(u)||null,e,n,i,s,o)),!0;case"gotpointercapture":return u=o.pointerId,qs.set(u,xs(qs.get(u)||null,e,n,i,s,o)),!0}return!1}function yd(e){var n=Li(e.target);if(n!==null){var i=d(n);if(i!==null){if(n=i.tag,n===13){if(n=f(i),n!==null){e.blockedOn=n,Ro(e.priority,function(){pd(i)});return}}else if(n===31){if(n=m(i),n!==null){e.blockedOn=n,Ro(e.priority,function(){pd(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function r0(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=$r(e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);G0=s,i.target.dispatchEvent(s),G0=null}else return n=Vi(i),n!==null&&hd(n),e.blockedOn=i,!1;n.shift()}return!0}function wd(e,n,i){r0(e)&&i.delete(n)}function d4(){Zr=!1,ni!==null&&r0(ni)&&(ni=null),ti!==null&&r0(ti)&&(ti=null),ii!==null&&r0(ii)&&(ii=null),As.forEach(wd),qs.forEach(wd)}function o0(e,n){e.blockedOn===n&&(e.blockedOn=null,Zr||(Zr=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,d4)))}var u0=null;function Kd(e){u0!==e&&(u0=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){u0===e&&(u0=null);for(var n=0;n<e.length;n+=3){var i=e[n],s=e[n+1],o=e[n+2];if(typeof s!="function"){if(Gr(s||i)===null)continue;break}var u=Vi(i);u!==null&&(e.splice(n,3),n-=3,$l(u,{pending:!0,data:o,method:i.method,action:s},s,o))}}))}function Ta(e){function n(b){return o0(b,e)}ni!==null&&o0(ni,e),ti!==null&&o0(ti,e),ii!==null&&o0(ii,e),As.forEach(n),qs.forEach(n);for(var i=0;i<ai.length;i++){var s=ai[i];s.blockedOn===e&&(s.blockedOn=null)}for(;0<ai.length&&(i=ai[0],i.blockedOn===null);)yd(i),i.blockedOn===null&&ai.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(s=0;s<i.length;s+=3){var o=i[s],u=i[s+1],h=o[hn]||null;if(typeof u=="function")h||Kd(i);else if(h){var y=null;if(u&&u.hasAttribute("formAction")){if(o=u,h=u[hn]||null)y=h.formAction;else if(Gr(o)!==null)continue}else y=h.action;typeof y=="function"?i[s+1]=y:(i.splice(s,3),s-=3),Kd(i)}}}function vd(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(h){return o=h})},focusReset:"manual",scroll:"manual"})}function n(){o!==null&&(o(),o=null),s||setTimeout(i,20)}function i(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),o!==null&&(o(),o=null)}}}function Yr(e){this._internalRoot=e}c0.prototype.render=Yr.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var i=n.current,s=On();dd(i,s,e,n,null,null)},c0.prototype.unmount=Yr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;dd(e.current,2,null,e,null,null),V1(),n[Hi]=null}};function c0(e){this._internalRoot=e}c0.prototype.unstable_scheduleHydration=function(e){if(e){var n=Oo();e={blockedOn:null,target:e,priority:n};for(var i=0;i<ai.length&&n!==0&&n<ai[i].priority;i++);ai.splice(i,0,e),i===0&&yd(e)}};var bd=t.version;if(bd!=="19.2.0")throw Error(r(527,bd,"19.2.0"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=g(n),e=e!==null?K(e):null,e=e===null?null:e.stateNode,e};var f4={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var d0=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!d0.isDisabled&&d0.supportsFiber)try{Na=d0.inject(f4),_n=d0}catch{}}return Rs.createRoot=function(e,n){if(!c(e))throw Error(r(299));var i=!1,s="",o=q2,u=x2,h=O2;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError)),n=ud(e,1,!1,null,null,i,s,null,o,u,h,vd),e[Hi]=n.current,xr(e),new Yr(n)},Rs.hydrateRoot=function(e,n,i){if(!c(e))throw Error(r(299));var s=!1,o="",u=q2,h=x2,y=O2,b=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError),i.formState!==void 0&&(b=i.formState)),n=ud(e,1,!0,n,i??null,s,o,b,u,h,y,vd),n.context=cd(null),i=n.current,s=On(),s=N0(s),o=Lt(s),o.callback=null,Vt(i,o,s),i=s,n.current.lanes=i,Ua(n,i),lt(n),e[Hi]=n.current,xr(e),new c0(n)},Rs.version="19.2.0",Rs}var Rd;function S4(){if(Rd)return Qr.exports;Rd=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Qr.exports=k4(),Qr.exports}var T4=S4();const E4=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M112,56V200L40,128Z",opacity:"0.2"}),v.createElement("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"}))]]),A4=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),v.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),q4=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M232,44H160a43.86,43.86,0,0,0-32,13.85A43.86,43.86,0,0,0,96,44H24A12,12,0,0,0,12,56V200a12,12,0,0,0,12,12H96a20,20,0,0,1,20,20,12,12,0,0,0,24,0,20,20,0,0,1,20-20h72a12,12,0,0,0,12-12V56A12,12,0,0,0,232,44ZM96,188H36V68H96a20,20,0,0,1,20,20V192.81A43.79,43.79,0,0,0,96,188Zm124,0H160a43.71,43.71,0,0,0-20,4.83V88a20,20,0,0,1,20-20h60Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M232,56V200H160a32,32,0,0,0-32,32,32,32,0,0,0-32-32H24V56H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32Z",opacity:"0.2"}),v.createElement("path",{d:"M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M240,56V200a8,8,0,0,1-8,8H160a24,24,0,0,0-24,23.94,7.9,7.9,0,0,1-5.12,7.55A8,8,0,0,1,120,232a24,24,0,0,0-24-24H24a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H88a32,32,0,0,1,32,32v87.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V80a32,32,0,0,1,32-32h64A8,8,0,0,1,240,56Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M232,50H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,50H24a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h72a6,6,0,0,0,6-6V56A6,6,0,0,0,232,50ZM96,194H30V62H96a26,26,0,0,1,26,26V204.31A37.86,37.86,0,0,0,96,194Zm130,0H160a37.87,37.87,0,0,0-26,10.32V88a26,26,0,0,1,26-26h66Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M232,52H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,52H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V56A4,4,0,0,0,232,52ZM96,196H28V60H96a28,28,0,0,1,28,28V209.4A35.93,35.93,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V88a28,28,0,0,1,28-28h68Z"}))]]),x4=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",opacity:"0.2"}),v.createElement("path",{d:"M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"}))]]),O4=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M196.49,151.51a12,12,0,0,1-17,17L168,157v51a12,12,0,0,1-24,0V157l-11.51,11.52a12,12,0,1,1-17-17l32-32a12,12,0,0,1,17,0ZM160,36A92.08,92.08,0,0,0,79,84.37,68,68,0,1,0,72,220h28a12,12,0,0,0,0-24H72a44,44,0,0,1-1.81-87.95A91.7,91.7,0,0,0,68,128a12,12,0,0,0,24,0,68,68,0,1,1,132.6,21.29,12,12,0,1,0,22.8,7.51A92.06,92.06,0,0,0,160,36Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M240,128a80,80,0,0,1-80,80H72A56,56,0,1,1,85.92,97.74l0,.1A80,80,0,0,1,240,128Z",opacity:"0.2"}),v.createElement("path",{d:"M178.34,165.66,160,147.31V208a8,8,0,0,1-16,0V147.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32ZM160,40A88.08,88.08,0,0,0,81.29,88.68,64,64,0,1,0,72,216h40a8,8,0,0,0,0-16H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.12A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,100.8,66,8,8,0,0,0,3.2,15.34,7.9,7.9,0,0,0,3.2-.68A88,88,0,0,0,160,40Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M247.93,124.52C246.11,77.54,207.07,40,160.06,40A88.1,88.1,0,0,0,81.29,88.67h0A87.48,87.48,0,0,0,72,127.73,8.18,8.18,0,0,1,64.57,136,8,8,0,0,1,56,128a103.66,103.66,0,0,1,5.34-32.92,4,4,0,0,0-4.75-5.18A64.09,64.09,0,0,0,8,152c0,35.19,29.75,64,65,64H160A88.09,88.09,0,0,0,247.93,124.52Zm-50.27,9.14a8,8,0,0,1-11.32,0L168,115.31V176a8,8,0,0,1-16,0V115.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,197.66,133.66Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M188.24,164.24a6,6,0,0,1-8.48,0L158,142.49V208a6,6,0,0,1-12,0V142.49l-21.76,21.75a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,0l32,32A6,6,0,0,1,188.24,164.24ZM160,42A86.1,86.1,0,0,0,82.43,90.88,62,62,0,1,0,72,214h40a6,6,0,0,0,0-12H72a50,50,0,0,1,0-100,50.68,50.68,0,0,1,5.91.36A85.54,85.54,0,0,0,74,128a6,6,0,0,0,12,0,74,74,0,1,1,103.6,67.85,6,6,0,0,0,4.8,11A86,86,0,0,0,160,42Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M178.34,165.66,160,147.31V208a8,8,0,0,1-16,0V147.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32ZM160,40A88.08,88.08,0,0,0,81.29,88.68,64,64,0,1,0,72,216h40a8,8,0,0,0,0-16H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.12A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,100.8,66,8,8,0,0,0,3.2,15.34,7.9,7.9,0,0,0,3.2-.68A88,88,0,0,0,160,40Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M186.83,162.83a4,4,0,0,1-5.66,0L156,137.66V208a4,4,0,0,1-8,0V137.66l-25.17,25.17a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0l32,32A4,4,0,0,1,186.83,162.83ZM160,44A84.09,84.09,0,0,0,83.61,93.13,60,60,0,1,0,72,212h40a4,4,0,0,0,0-8H72a52,52,0,1,1,8.57-103.27A83.45,83.45,0,0,0,76,128a4,4,0,0,0,8,0,76,76,0,1,1,106.4,69.68,4,4,0,0,0,1.6,7.66,3.92,3.92,0,0,0,1.6-.33A84,84,0,0,0,160,44Z"}))]]),R4=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0Zm-108.49,8.49a12,12,0,0,0,17,0l40-40a12,12,0,0,0-17-17L140,115V32a12,12,0,0,0-24,0v83L96.49,95.51a12,12,0,0,0-17,17Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,48V208H40V48A16,16,0,0,1,56,32H200A16,16,0,0,1,216,48Z",opacity:"0.2"}),v.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,168,96H136V32a8,8,0,0,0-16,0V96H88a8,8,0,0,0-5.66,13.66Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M222,144v64a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V144a6,6,0,0,1,12,0v58H210V144a6,6,0,0,1,12,0Zm-98.24,4.24a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0-8.48-8.48L134,129.51V32a6,6,0,0,0-12,0v97.51L92.24,99.76a6,6,0,0,0-8.48,8.48Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M220,144v64a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V144a4,4,0,0,1,8,0v60H212V144a4,4,0,0,1,8,0Zm-94.83,2.83a4,4,0,0,0,5.66,0l40-40a4,4,0,1,0-5.66-5.66L132,134.34V32a4,4,0,0,0-8,0V134.34L90.83,101.17a4,4,0,0,0-5.66,5.66Z"}))]]),C4=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",opacity:"0.2"}),v.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z"}))]]),M4=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M156,112a12,12,0,0,1-12,12H124v20a12,12,0,0,1-24,0V124H80a12,12,0,0,1,0-24h20V80a12,12,0,0,1,24,0v20h20A12,12,0,0,1,156,112Zm76.49,120.49a12,12,0,0,1-17,0L168,185a92.12,92.12,0,1,1,17-17l47.54,47.53A12,12,0,0,1,232.49,232.49ZM112,180a68,68,0,1,0-68-68A68.08,68.08,0,0,0,112,180Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),v.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Zm112,0a8,8,0,0,1-8,8H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24A8,8,0,0,1,152,112Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM144,120H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M150,112a6,6,0,0,1-6,6H118v26a6,6,0,0,1-12,0V118H80a6,6,0,0,1,0-12h26V80a6,6,0,0,1,12,0v26h26A6,6,0,0,1,150,112Zm78.24,116.24a6,6,0,0,1-8.48,0l-51.38-51.38a86.15,86.15,0,1,1,8.48-8.48l51.38,51.38A6,6,0,0,1,228.24,228.24ZM112,186a74,74,0,1,0-74-74A74.09,74.09,0,0,0,112,186Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M152,112a8,8,0,0,1-8,8H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24A8,8,0,0,1,152,112Zm77.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88.11,88.11,0,1,1,11.31-11.31l50.07,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M148,112a4,4,0,0,1-4,4H116v28a4,4,0,0,1-8,0V116H80a4,4,0,0,1,0-8h28V80a4,4,0,0,1,8,0v28h28A4,4,0,0,1,148,112Zm78.83,114.83a4,4,0,0,1-5.66,0l-52.7-52.7a84.1,84.1,0,1,1,5.66-5.66l52.7,52.7A4,4,0,0,1,226.83,226.83ZM112,188a76,76,0,1,0-76-76A76.08,76.08,0,0,0,112,188Z"}))]]),I4=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0ZM96.49,80.49,116,61v83a12,12,0,0,0,24,0V61l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,48V208H40V48A16,16,0,0,1,56,32H200A16,16,0,0,1,216,48Z",opacity:"0.2"}),v.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM93.66,77.66,120,51.31V144a8,8,0,0,0,16,0V51.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,77.66Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM88,80h32v64a8,8,0,0,0,16,0V80h32a8,8,0,0,0,5.66-13.66l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,88,80Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M222,144v64a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V144a6,6,0,0,1,12,0v58H210V144a6,6,0,0,1,12,0ZM92.24,76.24,122,46.49V144a6,6,0,0,0,12,0V46.49l29.76,29.75a6,6,0,0,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,0,0,8.48,8.48Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM93.66,77.66,120,51.31V144a8,8,0,0,0,16,0V51.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,77.66Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M220,144v64a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V144a4,4,0,0,1,8,0v60H212V144a4,4,0,0,1,8,0ZM90.83,74.83,124,41.66V144a4,4,0,0,0,8,0V41.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z"}))]]),P4=new Map([["bold",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",v.createElement(v.Fragment,null,v.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),v.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",v.createElement(v.Fragment,null,v.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",v.createElement(v.Fragment,null,v.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",v.createElement(v.Fragment,null,v.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",v.createElement(v.Fragment,null,v.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),j4=v.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),nt=v.forwardRef((a,t)=>{const{alt:l,color:r,size:c,weight:d,mirrored:f,children:m,weights:p,...g}=a,{color:K="currentColor",size:w,weight:T="regular",mirrored:A=!1,...R}=v.useContext(j4);return v.createElement("svg",{ref:t,xmlns:"http://www.w3.org/2000/svg",width:c??w,height:c??w,fill:r??K,viewBox:"0 0 256 256",transform:f||A?"scale(-1, 1)":void 0,...R,...g},!!l&&v.createElement("title",null,l),m,p.get(d??T))});nt.displayName="IconBase";const m3=v.forwardRef((a,t)=>v.createElement(nt,{ref:t,...a,weights:E4}));m3.displayName="ArrowLeftIcon";const D4=m3,g3=v.forwardRef((a,t)=>v.createElement(nt,{ref:t,...a,weights:A4}));g3.displayName="ArrowRightIcon";const li=g3,y3=v.forwardRef((a,t)=>v.createElement(nt,{ref:t,...a,weights:q4}));y3.displayName="BookOpenIcon";const Cd=y3,w3=v.forwardRef((a,t)=>v.createElement(nt,{ref:t,...a,weights:x4}));w3.displayName="CheckIcon";const no=w3,K3=v.forwardRef((a,t)=>v.createElement(nt,{ref:t,...a,weights:O4}));K3.displayName="CloudArrowUpIcon";const Md=K3,v3=v.forwardRef((a,t)=>v.createElement(nt,{ref:t,...a,weights:R4}));v3.displayName="DownloadSimpleIcon";const N4=v3,b3=v.forwardRef((a,t)=>v.createElement(nt,{ref:t,...a,weights:C4}));b3.displayName="LockSimpleIcon";const B4=b3,_3=v.forwardRef((a,t)=>v.createElement(nt,{ref:t,...a,weights:M4}));_3.displayName="MagnifyingGlassPlusIcon";const U4=_3,k3=v.forwardRef((a,t)=>v.createElement(nt,{ref:t,...a,weights:I4}));k3.displayName="UploadSimpleIcon";const z4=k3,S3=v.forwardRef((a,t)=>v.createElement(nt,{ref:t,...a,weights:P4}));S3.displayName="XIcon";const H4=S3,en=[{id:"14A",group:"趋势",title:"趋势的基本特征",range:"00:18–03:08",notes:["上涨趋势的重要特征是低点不断抬高；下降趋势的重要特征是高点不断降低。","趋势主要朝一个方向移动，中间可以有横盘和回调。","所有趋势都在某种通道内运行，通道不一定明显。"],questions:[{prompt:"上涨趋势最重要的特征是什么？",options:["不断抬高的低点","每根K线都是阳线","价格从不回调"],answer:0,explanation:"本课先强调上涨趋势中低点不断抬高，而不是要求每根K线都上涨。",time:"00:18–00:25",id:"14A-1",quote:`00:15 这个词时到底是什么意思
00:18 然后我会讲解上涨趋势最重要的特征
00:22 那就是不断抬高的低点`},{prompt:"下降趋势对应的重要特征是什么？",options:["成交量始终下降","不断降低的高点","没有任何反弹"],answer:1,explanation:"下降趋势的结构特征是高点不断降低。",time:"00:26–00:32",id:"14A-2",quote:`00:26 最后我们来讲下降趋势的特征
00:29 不断降低的高点`},{prompt:"一段上涨途中出现几次横盘，是否就不能称为趋势？",options:["是，只要横盘就没有趋势","是，趋势不能包含暂停","不是，仍需看主要移动方向"],answer:2,explanation:"原文用含横盘的上涨说明：趋势中价格主要向一个方向移动，允许横盘整理。",time:"00:34–00:45",id:"14A-3",quote:`00:34 在趋势中 价格主要向一个方向移动
00:38 比如这里从左下角涨到右上角
00:41 尽管中间有过几次横盘整理
00:45 而且趋势在通道内运行`},{prompt:"通道线不明显，是否意味着趋势不在通道内？",options:["不意味着，通道可能不明显","意味着没有趋势","只有水平线才是通道"],answer:0,explanation:"本课明确指出所有趋势都在某种通道内运行，有时不那么明显。",time:"00:45–01:16",id:"14A-4",quote:`00:45 而且趋势在通道内运行
00:48 所有的趋势都在某种通道内运行
00:52 有些通道非常陡峭 但通道确实存在
00:55 下面有一条趋势线
00:57 上面也有一条趋势通道线
01:00 趋势通道线可以是这条线的平行线
01:03 或者你可以把这些高点连接起来
01:08 刚才讲到所有趋势都在某种通道内运行
01:12 有的通道可能不那么明显 但它确实存在
01:16 学会识别它是很重要的这是一根阳线`},{prompt:"本课通常如何称呼相对于主要趋势较小、较弱的次要方向移动？",options:["每一段都是主要趋势","波段","只能叫突破"],answer:1,explanation:"本课用“波段”描述相对主要趋势较小、较弱的移动。",time:"01:40–02:29",id:"14A-5",quote:`01:40 当我使用趋势这个词时 我指的是主要趋势
01:44 但我通常会省略主要这两个字
01:47 在任何一个时间点上
01:49 图表上最多只有一个或两个主要趋势
01:53 如果你在图表上看到三四个趋势震荡区间
01:57 那么这些趋势就是次要
01:59 我通常不会用趋势这个词来描述它们
02:03 我通常称它们为波段
02:07 这里是一个上涨趋势 这是一个下降趋势吗？
02:10 我更愿意称它为一个下跌的波段
02:13 大约是左边上涨趋势50%回调
02:17 而且它比上涨趋势要弱得多
02:19 这是一个上涨趋势吗？
02:21 一样 我还是只称它为上涨的波段
02:24 它占图表上的K线不到一半
02:27 而且并不是特别强
02:29 所以在我看来这是上涨趋势`},{prompt:"上涨通道中，上面的线通常叫什么？",options:["止损线","开盘线","趋势通道线"],answer:2,explanation:"本课把下面的线称为上涨趋势线，上面的线称为趋势通道线。",time:"02:38–03:08",id:"14A-6",quote:`02:38 我说过上涨趋势中高点和低点都在不断抬高
02:43 并且它在一个上涨通道中运行
02:47 下面的线是趋势线 上涨趋势线
02:51 上面的线是趋势通道线
03:00 趋势线、通道线有些人将两者都称为趋势线
03:03 有些人会说这是底部趋势线
03:06 而那是通道的顶部趋势线
03:08 通常称上面的线为趋势通道线`}],sourceFile:"BTC PAF 14A Trends_中文 (源语言).srt"},{id:"14B",group:"趋势",title:"背景、阶段与市场惯性",range:"00:09–03:59",notes:["看不出明确方向、多空都有合理理由时，按交易区间理解背景。","趋势有突破阶段和通道阶段，突破是最强的部分。","短回调与持续很久的区间，对趋势恢复的含义不同。"],questions:[{prompt:"多空双方都有合理理由，方向不明确时，应先按哪种背景理解？",options:["强上涨趋势","交易区间","强下跌趋势"],answer:1,explanation:"本课要求在没有明确趋势时，先假设市场处于交易区间。",time:"00:53–01:26",id:"14B-1",quote:`00:53 看这个案例急剧下跌
00:56 一次又一次的急剧下跌
00:59 同时也有很多次急剧的上涨
01:02 那么市场处于趋势中吗？
01:04 如果没有明确的趋势
01:06 你必须假设它处于震荡区间
01:09 多头试图强势突破
01:11 空头也试图强势突破 多空
01:14 双方都有很合理的理由
01:16 这是震荡区间的标志之一
01:19 每当市场不明确
01:21 多头和空头都有合理的理由时
01:24 市场处于震荡区间
01:26 你必须按照震荡区间去交易`},{prompt:"趋势中最强的部分是哪个阶段？",options:["突破阶段","通道阶段","横盘阶段"],answer:0,explanation:"原文明确将突破阶段称为趋势中最强的部分。",time:"00:19–00:25",id:"14B-2",quote:`00:19 接下来我会讲趋势的突破阶段以及通道阶段
00:25 突破阶段是趋势中最强的部分`},{prompt:"本课“80%法则”对趋势中反转尝试的描述是什么？",options:["每次都会成功","一半成功","多数尝试会失败"],answer:2,explanation:"课程用约80%的反转尝试失败来说明趋势的惯性；这是课程观点，不是每次必然发生。",time:"00:30–00:47",id:"14B-3",quote:`00:30 最后我会谈到我的80%法则
00:34 市场具有惯性
00:35 正如震荡区间往往会抗拒突破
00:39 震荡区间中80%突破的尝试会失败
00:43 当市场处于趋势中时 他不断的尝试反转
00:47 但80%反转的尝试会失败`},{prompt:"趋势中的回调或暂停，也可以看成什么？",options:["小的交易区间","必然的大反转","全新趋势已经确认"],answer:0,explanation:"在更小时间级别中，趋势内的回调与暂停可以看成小的交易区间。",time:"02:23–02:59",id:"14B-4",quote:`02:20 也有抬高的低点上涨的特征
02:23 正如每个震荡区间中都有小的趋势
02:27 趋势中也包含小的震荡区间
02:31 每次回调和暂停都是一个小的震荡区间
02:35 在更小时间级别的图上可以更清楚的看到
02:39 这里没有实际的回调
02:41 但它仍然是趋势中的暂停
02:44 这里有实际的回调
02:46 而回调是一个小的震荡区间
02:49 所以这是一个小震荡区间
02:51 这个回调也是一个小震荡区间
02:54 它发展成了一个10 15根K线的震荡区间
02:59 但市场仍然处于上涨趋势中`},{prompt:"区间持续到20、30或40根K线后，本课怎样描述恢复与反转的概率变化？",options:["趋势恢复必然发生","两者逐渐接近","反转必然发生"],answer:1,explanation:"随着区间持续，先前趋势的优势减弱，课程描述两者逐渐接近各半。",time:"03:04–03:59",id:"14B-5",quote:`03:04 一旦震荡区间持续超过20根K线
03:09 反转的概率变得几乎和趋势
03:12 继续的概率一样高
03:16 我总是看左边的背景 不管左边是什么
03:20 他告诉我市场更有可能会做什么
03:23 哪怕只是略微更高的概率
03:26 当我在这里交易并观察市场时 它很混乱
03:31 多头和空头谁在掌控市场？
03:33 最近一个清晰的单边趋势在这里
03:37 市场处于单边上涨之中
03:39 所以在这里趋势延续向上
03:41 的概率比向下反转的概率略高一些
03:46 但是震荡区间每多持续一根K线
03:49 都会减少多头的概率
03:52 在20 30或40根K线后
03:55 趋势继续上涨的概率降低到50%
03:59 而趋势反转向下的概率上升到50%`},{prompt:"当前行情混乱时，本课强调往哪个方向找判断背景？",options:["只看最新一根K线","只看下一条新闻","看左边最近的清晰趋势"],answer:2,explanation:"本课强调看左边的背景，最近清晰趋势仍可提供略高的方向概率。",time:"03:16–03:41",id:"14B-6",quote:`03:16 我总是看左边的背景 不管左边是什么
03:20 他告诉我市场更有可能会做什么
03:23 哪怕只是略微更高的概率
03:26 当我在这里交易并观察市场时 它很混乱
03:31 多头和空头谁在掌控市场？
03:33 最近一个清晰的单边趋势在这里
03:37 市场处于单边上涨之中
03:39 所以在这里趋势延续向上
03:41 的概率比向下反转的概率略高一些`}],sourceFile:"BTC PAF 14B Trends_中文 (源语言).srt"},{id:"14C",group:"趋势",title:"突破、通道与高潮",range:"00:20–02:17",notes:["失败的突破会变成陷阱。","趋势要么处在突破阶段，要么处在通道阶段。","高潮不自动意味着趋势马上反转，也可能接着出现更大的高潮。"],questions:[{prompt:"本课如何描述陷阱与突破的关系？",options:["所有突破都是陷阱","通道不会产生陷阱","失败的突破变成陷阱"],answer:2,explanation:"课程开头直接说明“失败的突破就变成了陷阱”。",time:"00:20–00:24",id:"14C-1",quote:`00:20 最后我们来讲陷阱
00:23 和突破
00:24 失败的突破就变成了陷阱`},{prompt:"一次突破能由多少根K线构成？",options:["只能一根","一根或一系列K线","必须二十根以上"],answer:1,explanation:"突破可以是一根K线，也可以是一系列K线。",time:"01:17–01:22",id:"14C-2",quote:`01:17 突破它可以是一根K线
01:19 也可以是一系列K线
01:22 趋势要么处于突破阶段 要么处于通道阶段`},{prompt:"本课把趋势分成哪两个阶段？",options:["突破与通道","新闻与成交量","开盘与收盘"],answer:0,explanation:"课程反复说明趋势要么处于突破阶段，要么处于通道阶段。",time:"01:22–01:29",id:"14C-3",quote:`01:19 也可以是一系列K线
01:22 趋势要么处于突破阶段 要么处于通道阶段
01:27 而突破是最强的趋势类型
01:29 我有时称之为极速运动`},{prompt:"看到高潮后，是否可以直接认定趋势即将反转？",options:["可以，高潮必然反转","可以，高潮后必然暂停","不可以，也可能继续出现更大高潮"],answer:2,explanation:"高潮不意味着一定反转或暂停，市场有时继续沿原方向运动。",time:"01:37–01:48",id:"14C-4",quote:`01:32 比如这个我会称它为急速变通道的上涨趋势
01:37 每根趋势K线也是一次高潮
01:40 高潮并不意味着趋势会反转或趋势暂停
01:44 有时候高潮之后还会有更大的高潮
01:48 市场继续上涨`},{prompt:"相较突破阶段，通道有什么特征？",options:["完全没有双向交易","较弱，存在双向交易","一定已经反转"],answer:1,explanation:"通道是较弱的趋势类型，某些部分由多头控制，另一些部分由空头控制。",time:"01:49–02:06",id:"14C-5",quote:`01:48 市场继续上涨
01:49 趋势要么处于
01:51 突破阶段 要么处于通道阶段
01:55 通道是一种较弱的趋势类型 存在双向交易
02:00 在某些部分多头控制市场
02:03 在另一部分空头掌控市场
02:06 而且画出来的通道线很少是完美通道线`},{prompt:"一个趋势从哪里开始？",options:["某次突破，至少是小突破","必须从新闻开始","只有完美通道出现后才开始"],answer:0,explanation:"本课明确说每个趋势都从突破开始，至少是一个小突破。",time:"02:17–02:22",id:"14C-6",quote:`02:17 每个趋势都从突破开始 至少是一个小突破
02:22 这里价格向下跳空低开`}],sourceFile:"BTC PAF 14C Trends_中文 (源语言).srt"},{id:"14D",group:"趋势",title:"从开盘开始的趋势",range:"00:10–03:56",notes:["从开盘开始的趋势，不一定从当天第一根K线开始。","连续收在高位、低点抬高且难以回调，体现买方紧迫感。","“从开盘开始”这个说法主要用于有明确开盘时间的市场。"],questions:[{prompt:"“从开盘开始的趋势”是否一定从当天第一根K线开始？",options:["不一定","一定","只从收盘开始"],answer:0,explanation:"课程明确说明不一定从第一根K线开始，虽然很多情况确实如此。",time:"00:31–00:38",id:"14D-1",quote:`00:31 当我说到从开盘开始的趋势
00:34 它并不一定是从当天的第一根K线就开始
00:38 尽管很多确实是从第一根K线开始`},{prompt:"本课开头列出的三类趋势是什么？",options:["反转、头肩、双底","从开盘开始、震荡趋势、宽通道趋势","突破、新闻、缺口"],answer:1,explanation:"开头依次列出从开盘开始的趋势、震荡上涨或下跌、宽通道中的趋势。",time:"00:10–00:23",id:"14D-2",quote:`00:10 这节课我们来讲三种
00:13 趋势类型
00:14 第一种是从开盘开始的趋势
00:18 然后是震荡的趋势
00:20 是震荡上涨或震荡下跌
00:23 最后是宽通道中的趋势`},{prompt:"连续阳线收在高位、回调难以出现，反映什么？",options:["多空完全平衡","已经确认顶部","买方的紧迫感"],answer:2,explanation:"原文把连续上涨、收在高位和不等回调的买入行为解释为紧迫感。",time:"01:30–02:38",id:"14D-3",quote:`01:28 而且它的体积很大
01:30 趋势继续
01:31 交易者一路买入11根K线的上涨小通道
01:35 前11根K线中没有阴线 没有回调
01:39 多头还连续制造了收在高位的阳线
01:43 当你在开盘看到这种情况时
01:46 有60%甚至更高的概率价格
01:49 会向上达到某种MMA目标位
01:51 比如说这两根K线的突破
01:53 从第一根K线的开盘价到第二根K线的收盘价
01:57 把这段距离往上翻一倍 大约到
02:00 那个位置
02:02 当你看到跳
02:03 空高开 然后一根K线、两根
02:07 K线、三根K线全都是阳线
02:10 然后你开始看到突破K线 大阳线收在最高
02:14 这体现了一种紧迫感
02:16 这通常是一个信号
02:18 表明市场正处于强上涨趋势的早期
02:21 前11根K线交易者都在前
02:24 一根K线的低点上方买入
02:26 每根K线的低点都在抬高 跌不下去
02:30 他们甚至没有等待回调
02:32 每个人都急于买入
02:33 他们在K线收盘时买入
02:36 市价买入 买K线的收盘
02:38 他们当然希望在前一根K`},{prompt:"连续11根K线都未跌破前一根低点，说明案例中买家如何行动？",options:["在前一根低点上方就买入","必须等深回调才买","完全停止买入"],answer:0,explanation:"案例说明买家不等待回调，在前一根K线低点上方甚至收盘时就买入。",time:"02:21–02:43",id:"14D-4",quote:`02:18 表明市场正处于强上涨趋势的早期
02:21 前11根K线交易者都在前
02:24 一根K线的低点上方买入
02:26 每根K线的低点都在抬高 跌不下去
02:30 他们甚至没有等待回调
02:32 每个人都急于买入
02:33 他们在K线收盘时买入
02:36 市价买入 买K线的收盘
02:38 他们当然希望在前一根K
02:40 线的低点下方逢低买入
02:42 但连续11根K线
02:43 没有任何一根K线跌破了前一根K线的低点`},{prompt:"本课案例中，开盘强势突破约一小时后可能发生什么？",options:["保证全天直线上涨","先横盘，再决定恢复还是反转","必然马上暴跌"],answer:1,explanation:"本课描述强突破后通常先横盘数小时，再在恢复与反转间做决定。",time:"02:49–03:11",id:"14D-5",quote:`02:49 当你在开盘感觉到这样的紧迫感时
02:52 一个持续了大约1个小时的非常强的突破
02:56 市场通常会横盘几个小时
02:59 然后在趋势反转向下和趋势恢复向上之间做出决定
03:07 这里市场在一个震荡区间内运行了3个小时
03:11 在收盘前趋势略微恢复了上涨`},{prompt:"哪类市场更适合用“从开盘开始的趋势”描述？",options:["所有24小时市场都完全一样","完全没有交易时段的市场","有明确开盘时间和单一交易时段的市场"],answer:2,explanation:"原文主要指股票、股指期货常规时段等有确切开盘时间的市场。",time:"03:17–03:56",id:"14D-6",quote:`03:17 如果你做外汇交易
03:19 实际上不存在确切的开盘时间
03:22 有些日子 比如在美盘交易时段
03:25 可能从5 三十开始
03:27 住加州时间5 30 即美东时间8390
03:31 可能从63 零开始 或者从5 或4
03:34 45开始
03:35 分别是美东时间93087 45
03:39 所以当我讲到从开盘开始的趋势时
03:42 我通常是指有单一交易时段和确切开盘时间的市场
03:47 比如股票市场或股指期货的常规交易时段
03:51 如果是外汇市场或其他任何24小时市场
03:56 我通常不会说从开盘开始的趋势`}],sourceFile:"BTC PAF 14D Trends v2_中文 (源语言).srt"},{id:"14E",group:"趋势",title:"窄通道与顺势判断",range:"00:09–04:14",notes:["窄通道仍是强趋势，在更高时间级别上可能表现为突破。","分不清突破与窄通道时，本课按突破的方式理解。","强趋势中出现一两根反向K线，不自动意味着大反转。"],questions:[{prompt:"本课将窄通道归为哪种趋势？",options:["没有趋势","强趋势","已确认的大反转"],answer:1,explanation:"课程开头直接把窄通道称为强趋势。",time:"00:09–00:17",id:"14E-1",quote:`00:09 这节课我们来讲窄通道 它是强趋势
00:13 我也会讲到几乎没有回调反弹的趋势
00:17 它们是最强的趋势类型`},{prompt:"分不清是突破还是窄通道时，本课如何处理？",options:["假设是突破，按突破理解","立即认定进入宽区间","停止考虑背景"],answer:0,explanation:"原文说在更高时间级别上它仍可能是突破，因此难分时先按突破理解。",time:"00:25–00:50",id:"14E-2",quote:`00:25 有时你会看到这样的趋势
00:27 价格急速上涨 然后变成通道
00:30 很难判断这是否仍然是突破的一部分
00:33 还是已经进入了通道的阶段
00:36 在更高时间级别的图上
00:38 这依旧是突破的一部分
00:40 如果难以分辨这是突破还是窄通道
00:44 就假设这是突破
00:46 并且按照突破的方式去交易 只考虑买入
00:50 因为在更高时间级别的图上 这是一次突破`},{prompt:"五分钟图上的窄上涨通道，在更高时间级别上可能是什么？",options:["必然是下跌趋势","完全无关的行情","多头突破"],answer:2,explanation:"本课用五分钟图与十五分钟图对应，解释窄通道在更高级别上可能是突破。",time:"01:47–02:11",id:"14E-3",quote:`01:47 所以窄通道是强趋势
01:49 我像交易突破一样 交易它正如之前所说
01:53 在更高时间级别的图上 它是一个突破
01:57 例如五分钟图 左边这个绿色的框框
02:01 右边绿色的框框是相同的K线
02:04 但这是15分钟图
02:06 这显然是一个强劲的突破口 你不能做空
02:11 你只能顺着突破的方向交易窄`},{prompt:"窄上涨通道中的一次下跌，本课首先预期什么？",options:["大概率只是小反转","必然是大反转","上涨趋势一定结束"],answer:0,explanation:"本课说即使下跌，大概率也只是小反转，至少还可能继续向上一点。",time:"01:19–01:42",id:"14E-4",quote:`01:19 假设这是五分钟图 它是一个相当窄的上涨通道
01:24 窄通道没有突破那么强
01:29 但它仍然是一个相当强劲的上涨趋势
01:32 回调只持续了一根K线
01:35 回调只持续了一根K线
01:37 这里没有任何回调
01:39 即使下跌大概率也只是小反转
01:42 至少还会向上涨一点`},{prompt:"在反弹很小的窄下降通道中，本课的方向取向是什么？",options:["逆势买入","只考虑做空","只考虑做多"],answer:1,explanation:"这是课程中针对窄下降通道背景的取向，不可脱离背景泛化到所有行情。",time:"02:17–02:36",id:"14E-5",quote:`02:11 你只能顺着突破的方向交易窄
02:17 下降通道反弹很小
02:20 他们涨不了太高 而且向下的通道非常窄
02:25 在某个更高时间级别的图上 这是一次突破
02:29 总是有不同的方法来画通道 这是一种方法
02:33 你也可以那样画 这并不是关键
02:36 当反弹幅度很小时 你只考虑做空`},{prompt:"上涨通道里出现一两根阴线但回调浅而短，能否单凭阴线确认趋势反转？",options:["可以，阴线总是反转","可以，通道已经失效","不能，要结合通道与更高级别背景"],answer:2,explanation:"原文仍把这种浅而短的回调置于强上涨背景中理解。",time:"03:38–04:14",id:"14E-6",quote:`03:34 表明这是一个非常强劲的下降趋势
03:38 你不应该买入多头突破通道有一点点回调
03:44 有一两根阴线 但回调只持续一两根K线
03:49 并且跌幅不大
03:50 在更高时间级别的图上 这是一次突破
03:53 有很多种画通道的方法
03:56 你可以这样画 也可以那样画
04:00 通道从来都不是完美 很少有完美的通道
04:04 不过没关系 当上涨通道这么窄的时候
04:08 你只能做多
04:09 每次看到反转尝试都要
04:11 预计它会失败并成为牛骑
04:14 然后在前一根K线的高点上方挂`}],sourceFile:"BTC PAF 14E Trends v2_中文 (源语言).srt"},{id:"18A",group:"交易区间",title:"区间定义、背景与判断",range:"00:00–38:09",revision:"range-knowledge-v2",notes:["回调是趋势中的小区间；原趋势能否恢复变得不清楚时，开始按交易区间理解。","困惑、失望、缺口迅速闭合和深度回撤，是需要结合起来看的区间迹象。","区间判断还要考虑时间级别、重要高低点，以及结构发展了多久。"],knowledgePoints:[{id:"K01",title:"公平价格与双向成交",summary:"市场持续寻找买卖双方愿意交易的价格区域；价格太低时，卖方也可能不再愿意卖出。",time:"00:52–04:34",pdfPages:[1470,1471],questionIds:["18A-K01-1","18A-K01-2"]},{id:"K02",title:"止盈怎样造成回调",summary:"强趋势中止损距离扩大，部分持仓者会止盈、减仓；这可以造成暂停和双向交易。",time:"04:39–05:47",pdfPages:[1472],questionIds:["18A-K02-1"]},{id:"K03",title:"广义区间与回调",summary:"广义上任何双向交易区域都可称为区间，甚至只有一根K线；趋势仍更可能恢复时，称为回调。",time:"05:51–08:36",pdfPages:[1473,1474],questionIds:["18A-K03-1"]},{id:"K04",title:"短回调仍有趋势背景",summary:"强突破后的短暂停顿，如果反向力量不足，原方向仍更有可能延续。",time:"08:42–10:14",pdfPages:[1474,1475],questionIds:["18A-K04-1"]},{id:"K05",title:"时间削弱原趋势影响",summary:"区间持续越久，左边趋势离当前越远，恢复与反转的概率越接近；原趋势有时仍略占优势。",time:"10:21–14:02",pdfPages:[1476,1477],questionIds:["18A-K05-1"]},{id:"K06",title:"困惑、弱信号与中部停留",summary:"区间中信号和跟随常不理想，反复反转，价格在中间部分停留较久。",time:"14:08–16:34",pdfPages:[1479],questionIds:["18A-K06-1"]},{id:"K07",title:"外观与实际概率",summary:"区间中看似很好的信号未必有明显优势，看似糟的反转也不一定像外观那样低概率。",time:"16:44–17:56",pdfPages:[1480],questionIds:["18A-K07-1"]},{id:"K08",title:"第二段陷阱的早期识别",summary:"第二段看似更强，但没有继续发展而突然反转，不能把末端强势自动当作新趋势。",time:"18:03–18:56",pdfPages:[1481],questionIds:["18A-K08-1"]},{id:"K09",title:"缺口闭合与突破点回穿",summary:"区间中缺口容易很快闭合，回调常穿过突破点，反映延续不足。",time:"19:00–19:43",pdfPages:[1481],questionIds:["18A-K09-1"]},{id:"K10",title:"区间与趋势的惯性不同",summary:"课程用趋势中多数反转失败、区间中多数突破失败，对比两种背景的惯性。",time:"19:47–21:25",pdfPages:[1482],questionIds:["18A-K10-1"]},{id:"K11",title:"不佳跟随与变弱通道",summary:"上涨中每次创新高都缺乏强跟随，说明上涨通道可能正过渡为区间。",time:"21:33–23:23",pdfPages:[1483],questionIds:["18A-K11-1"]},{id:"K12",title:"深回撤与区间内波段",summary:"一段大涨后的深回调、一段大跌后的强反弹，可能都是同一个区间中的波段。",time:"23:52–26:53",pdfPages:[1484,1485],questionIds:["18A-K12-1"]},{id:"K13",title:"不同周期的区间与回调",summary:"五分钟图上的均衡区间，可能只是60分钟强趋势中的回调；交易判断要与所用周期相配。",time:"27:01–29:50",pdfPages:[1486,1487],questionIds:["18A-K13-1"]},{id:"K14",title:"回调称谓对应方向预期",summary:"只要仍相信趋势较快恢复，就沿用回调；恢复还是反转不明确且多空理由都合理时，用区间。",time:"30:01–31:33",pdfPages:[1488],questionIds:["18A-K14-1"]},{id:"K15",title:"重要低点与次要低点",summary:"重要低点后应有强突破创新高；跌破它可能结束上涨，跌破次要低点则未必。",time:"31:41–33:58",pdfPages:[1489],questionIds:["18A-K15-1","18A-K15-2","18A-K15-3"]},{id:"K16",title:"区间的最低结构与持续怀疑",summary:"本课通常结合约20根K线、至少三个波段，以及重要低点遭测试或跌破判断区间成形。",time:"34:04–37:18",pdfPages:[1490,1491,1492,1493,1494,1495,1496],questionIds:["18A-K16-1"]}],questions:[{prompt:"本课用下跌时成交量缩小的案例说明什么？",options:["只要价格便宜，成交量就必然持续放大","成交量缩小足以单独确认新的上涨趋势","价格降低不代表卖方无限增加，市场也可能需要上涨才能找到卖家"],answer:2,explanation:"成交需要买卖双方。在案例中，低价下愿意卖出的人减少；不能把“便宜”直接等同于成交增加，也不能据此单独确认反转。",imageKey:null,id:"18A-K01-1",knowledgeId:"K01",knowledgeTitle:"公平价格与双向成交",time:"00:52–04:34",pdfPages:[1470,1471],type:"理解判断",quote:`00:52 机构为什么要创造市场？
00:54 市场的目标是让交易最大化
00:57 他们希望在合理的价格下方便地进行交易
01:02 我用这张一分钟图来作为
01:05 说明市场在不断的下跌
01:08 观察在下跌过程中成交量的变化
01:11 当市场在寻找一个公平的价格时
01:15 交易量越来越小
01:16 这意味着越来越少的交易者愿意在低价卖出
01:24 所有市场都在不断寻找最佳价格
01:27 一个公平的价格
01:29 这通常意味着成交量最大的价格
01:33 交易次数最多的价格
01:35 所以不仅仅是成交量很大
01:38 还有很多大单交易市场
01:41 通常需要走过头才能发现到底哪里算足够远
01:45 然后他开始在公平的价格附近波动
01:49 随着新的信息不断进入市场
01:51 最终市场决定现在的价格是错误的
01:55 要么太高 要么太低
01:57 然后他必须寻找一个新的公平价格
02:05 我再来讲一下
02:07 成交量
02:08 市场在下跌 价格越来越便宜
02:12 但成交量却减少了
02:14 如果价格下跌 多头肯定想要买入更多
02:17 多头总是想要找机会买入
02:20 尤其是价格下跌的时候
02:22 如果有越来越多的多头想买入
02:24 成交量怎么会下降呢？
02:27 成交量下降是因为必须有空头愿意卖出
02:31 交易才能发生
02:33 如果随着价格下降 交易却越来越少
02:36 这意味着空头不再愿意在低位卖出
02:39 现在的价格太低了
02:41 市场必须上涨才能找到更多的卖家
02:45 我的观点很明确 我不建议你看成交量
02:48 我为了讲解说明才在这张图中使用了成交量
02:53 事实上我认为大多数交易者不应该看成交量
02:57 他会让你分心
02:58 然而他确实左保证了一个观点 交易在枯竭
03:06 这里的成交量很大 又有大阴线跌破
03:09 但成交量却减少了
03:10 市场不得不上涨
03:12 才能找到更多愿意卖出的交易者
03:18 记住 任何市场的目标是找到一个
03:21 买卖双方多空双方愿意达成一致的区域
03:27 这就是为什么大多数K线图上的K
03:31 线都在震荡区间中或者在通道中
03:34 通道最终也会变成震荡区间
03:36 任何K线图上只有大约
03:38 500分之10的K线是强势突破
03:41 其余90%的K线要么在通道中
03:45 而通道会变成震荡区间
03:47 所以通道是震荡区间的开始
03:50 要么在震荡区间中
03:52 那是因为市场认为震荡区间是价格最公平的范围
04:00 由于市场的目的是找到一个
04:02 买卖双方多空双方达成一致的区域
04:05 所以市场往往在公平价格的附近波动
04:10 在这个案例中你可以看到
04:13 大多数K线都在震荡区间内
04:18 如刚才所说
04:19 任何K线图上只有大约500分之10
04:22 的K线是处于明显的突破
04:24 只有500分之10的时间
04:26 市场明确认为价格是错误的
04:30 市场迅速找到一个更公平的价格
04:34 即震荡区间`},{prompt:"课中展示成交量，是否意味着后续判断都必须加入成交量指标？",options:["是，成交量可以代替价格背景","是，后续每个区间信号都必须有成交量确认","不是，成交量用于解释案例，课程还提醒多数交易者可能因此分心"],answer:2,explanation:"原文在解释成交枯竭后明确说明，展示成交量是为了讲解，不要求把它加入每次判断。",imageKey:null,time:"02:27–02:58",id:"18A-K01-2",knowledgeId:"K01",knowledgeTitle:"公平价格与双向成交",pdfPages:[1470,1471],type:"变式辨析",quote:`02:27 成交量下降是因为必须有空头愿意卖出
02:31 交易才能发生
02:33 如果随着价格下降 交易却越来越少
02:36 这意味着空头不再愿意在低位卖出
02:39 现在的价格太低了
02:41 市场必须上涨才能找到更多的卖家
02:45 我的观点很明确 我不建议你看成交量
02:48 我为了讲解说明才在这张图中使用了成交量
02:53 事实上我认为大多数交易者不应该看成交量
02:57 他会让你分心
02:58 然而他确实左保证了一个观点 交易在枯竭`},{prompt:"强上涨过程中开始回调，本课给出的一个原因是什么？",options:["多头止损距离变远，通过部分止盈减小风险","只要出现回调，就证明空头已建立强下降趋势","止损越远，所有多头都越愿意在更高价格加仓"],answer:0,explanation:"强上涨也可以因多头止盈出现暂停；回调并不自动证明趋势已经被反转。",imageKey:null,id:"18A-K02-1",knowledgeId:"K02",knowledgeTitle:"止盈怎样造成回调",time:"04:39–05:47",pdfPages:[1472],type:"理解判断",quote:`04:39 这是一个强上涨趋势
04:42 但是即使市场处于强势的上涨趋势中
04:46 也有双向交易的时期
04:50 当多头看到价格越来越高时
04:53 他们的止损仍然在这里或这里变得越来越远
04:58 这意味着他们的风险变得更大
05:01 并且在某个时刻他们必须减少这种风险
05:05 最简单的方法是止盈
05:07 也就是这里发生的情况
05:09 出现回调的原因是多头
05:12 担心他们的风险变得太大
05:14 而继续上涨的空间可能已经很小了
05:17 于是他们减少仓位
05:21 止损位很远
05:22 在多头突破的起涨点或者
05:25 是整个上涨趋势的起涨点
05:29 多头止盈造成了趋势中的暂停
05:32 最终回调的幅度越来越深
05:35 因为多头不愿意在高位买入
05:38 他们只会在深度回调时买入
05:42 他们认为市场正在演变成震荡区间
05:45 市场越是震荡
05:47 多头就越只在低位买入`},{prompt:"“只有一根K线的暂停也可能是小区间”，与“常用约20根K线识别成熟区间”矛盾吗？",options:["不矛盾：一根K线就代表成熟区间，20根只用于绘制区间边界","矛盾：没有达到20根K线的暂停不应包含任何区间含义","不矛盾，前者是广义定义，后者还涉及趋势恢复优势是否减弱"],answer:2,explanation:"不要把广义定义与实际判断背景的常用尺度混在一起。一根K线也能在更小周期呈现双向交易。",imageKey:null,id:"18A-K03-1",knowledgeId:"K03",knowledgeTitle:"广义区间与回调",time:"05:51–08:36",pdfPages:[1473,1474],type:"理解判断",quote:`05:51 每次回调都是一个震荡区间
05:54 但只是一个小的震荡区间
05:56 只要交易者相信趋势会恢复 我就用回调
06:00 这个词
06:01 如果回调
06:02 发展到12、13 10根K线
06:05 那么左边的趋势就离得越来越远
06:09 它对现在市场的影响也越来越小
06:15 最终突破的方向变得不明确
06:18 向上突破和向下突破的可能性变得相等
06:23 这个时候我就会用震荡区间这个词
06:28 当你认为趋势会恢复时用
06:31 回调将不再明确时用震荡区间
06:37 任何双向交易的区域都是一个震荡区间
06:41 即使它只有单独一根K线
06:48 在趋势中看到一根K线的暂停是很常见的
06:53 比如这里就是市场强势上涨 然后犹豫了
06:56 在一个较小的时间周期上
06:59 它是一个震荡区间
07:01 如果你去看一个足够小的时间周期
07:04 比如说这个是日K线
07:06 你去看它的五分钟图 这一天是震荡区间日
07:10 在这个K线图上它是一次回调
07:13 但在较小的时间周期上 它是一个震荡区间
07:17 我认为每次回调都是一个小的震荡区间
07:21 它是一种特殊类型的震荡区间
07:24 趋势大概率会继续
07:30 只有当我相信多头和空头已经达到平衡时
07:34 才会使用震荡区间这个词
07:37 例如三根阳线之后
07:39 小回调大概率会继续上涨
07:41 三根阴线大约是这次反弹的50%
07:45 回调趋势仍然更有可能会继续
07:48 这里回调持续了更多的K线
07:51 趋势是否会继续变得不那么确定
07:57 强上涨趋势回调仍然更有可能上涨
08:02 但这根大阴线跌破了牛 其多头在这里放弃
08:08 而下降趋势通常从空头突破开始
08:12 急速下跌反弹双顶雄起 然后进入下降通道
08:17 这里的上涨趋势 多头突破暂停趋势恢复
08:22 这几根十字星的强度足够让
08:25 交易者相信多头突破会被反转吗？
08:28 显然不是
08:29 我会说它是这个突破中的一次回调
08:33 因为我相信市场继续上涨的概率更高
08:36 这里也是一样 至少会再上涨一些`},{prompt:"绿色区域约10根K线，前面是强上涨，反向力量没有明显增强。本课更倾向怎样理解？",options:["上涨中的回调，不能单凭横盘几根K线就判定中性","已经完成中性化，先前上涨不再提供方向参考","上涨在回调开始时就已结束，目前主要等待下降确认"],answer:0,explanation:"判断不只是数K线，还要看原趋势和反向力量。课件中短区间后仍预期上涨恢复，因此称回调。",id:"18A-K04-1",knowledgeId:"K04",knowledgeTitle:"短回调仍有趋势背景",time:"08:42–10:14",pdfPages:[1474,1475],type:"图表应用",quote:`08:42 下降趋势中也是一样
08:44 它有可能是下降趋势的开始
08:47 也有可能是震荡区间中的一段下跌
08:50 这几根十字星不足以反转前面的两根大阴线
08:54 所以空投希望这是一个雄奇事实确实也是如此
08:58 强势的空头突破
09:00 良好的跟随尝试反转向上
09:03 对多头来说看起来不妙
09:05 这个小反弹发展成了更多K线
09:08 它已经变成震荡区间了吗？
09:11 我还不会这样说
09:13 空头仍然更有可能制造向下的突破
09:16 所以我会说目前只是
09:19 反弹双鼎雄奇第一个高点
09:21 第二个高点这里也是一样
09:24 大概率还要继续跌
09:26 到了这里更可能会下跌 更可能会下跌
09:29 继续下跌的概率越来越小了
09:32 也许可以开始说它是一个小的震荡区间
09:40 非常强势的多头突破有好的跟随
09:43 这里有几根小阴线
09:45 这是一个十根K线的震荡区间
09:48 你认为上涨趋势恢复的可能性更大
09:52 还是反转呈下降趋势的可能性更大？
09:55 大多数交易者会认为市场更有可能继续上涨
10:00 因此我会用回调一词 而不是震荡区间
10:04 你可以说它是震荡区间 它确实是震荡区间
10:08 每次回调都是一个震荡区间
10:11 但只要我相信趋势会恢复
10:14 我就会说回调这个词`,image:{src:"/charts/18a-pullback.webp",solutionSrc:"/charts/18a-pullback-solution.webp",page:1475,alt:"绿色标记的短暂停顿及其前后K线"}},{prompt:"下降趋势后的反弹持续20～30根K线，能否机械认定向上、向下精确各50%？",options:["仍沿用最初强下跌的优势，直到出现完整上涨趋势才更新","不能，课程说逐渐接近，具体背景下原趋势仍可能略有优势","根数达到约20根后按精确各半处理，不再区分此前趋势强弱"],answer:1,explanation:"时间使原趋势影响减弱，不是精确到某根K线的开关。原文既讲趋近各半，也讲原趋势可能仍有小幅优势。",imageKey:null,id:"18A-K05-1",knowledgeId:"K05",knowledgeTitle:"时间削弱原趋势影响",time:"10:21–14:02",pdfPages:[1476,1477],type:"理解判断",quote:`10:21 强下降趋势反弹大概率会继续下跌
10:24 尽管这个反弹持续了大约15或20根K线
10:29 多头还没有展现出足够的力量来制造大反转
10:34 因此概率仍然有利于空头继续向下突破
10:37 你可以说震荡区间一直持续到这里
10:41 超过了20根K线
10:42 多头制造反转的概率越来越接近50%
10:46 然而价格继续下跌的概率仍然更大一些
10:52 即使回调或反弹达到20 30根K线
10:56 概率仍然略微偏向之前的趋势
11:00 这里的反弹发展成了
11:01 20 30根K线的震荡区间
11:04 双方突破的概率来到了50对50
11:07 也许空头的概率稍微高一点
11:10 也许51%或52%的概率趋势会恢复下跌
11:14 48 49%的概率会反转上涨
11:22 又有一些反弹 仍然是下降趋势
11:25 但是反弹发展了超过20根K线
11:28 这个时候我会开始使用震荡区间这个词
11:32 这是一个潜在的末端雄起
11:35 向上突破非常不错的上涨
11:37 连续很多阳线 此时市场是中性的
11:41 继续下跌的概率是50%
11:44 反转上涨的概率是50%
11:47 这是低点抬高的大反转下降趋势
11:51 多头突破两段下跌回撤前期的第一点
11:55 非常不错的做多信号K
11:57 低点抬高的大反转模式
12:02 记住 震荡区间持续的越久
12:05 左边的下降趋势距离越远
12:09 他对突破方向的影响就越小
12:15 在某个时刻 经过23
12:17 14 10根K线多头反转的概率上升
12:22 下降趋势恢复的概率减小
12:25 两者变得几乎相等
12:32 空头突破连续四根阴线 但是看它们的体积
12:36 12三四K线的体积越来越小
12:40 然后变成了十字星大阴线 但是立刻被反转
12:45 空头正在
12:47 失去对市场的掌控 市场明显转向中性
12:51 在这两三根阳线出现之前
12:54 还不能确定市场是看涨的
13:01 大涨大跌给交易者制造了很大的困惑
13:04 通常会导致市场进入震荡区间
13:07 一旦回调发展到20 30 40 50 60根K线
13:12 市场就变得越来越平衡
13:15 在这个案例中 之前的上涨趋势和下降趋势
13:22 已经距离很远了 已经失去了影响力
13:26 现在的市场是50对50
13:29 50%的概率多头突破
13:32 50%的概率空头突破
13:37 如果一方的概率明显有优势
13:40 市场就不会这样
13:42 例如 如果每个交易者都认为概率偏向多头
13:46 市场就会上涨
13:49 如果每个交易者都认为概率偏向空头
13:53 市场就会下跌
13:54 持续震荡的唯一可能就是因为
14:00 交易者无法确定市场更有
14:02 可能向上突破还是向下突破`},{prompt:"弱信号、反复反转、突破后跟随不佳，而且价格长期在中部徘徊，组合起来更提示什么？",options:["需要按交易区间背景判断，而不是只看某一根漂亮信号","按最近最强单根信号定方向，之前的失败只用于调整止损","把每个上下段分别当独立趋势管理，不采用整体区间解释"],answer:0,explanation:"课程把困惑与失望作为重要线索；这些价格行为组合起来比孤立的一根K线更有解释力。",imageKey:null,id:"18A-K06-1",knowledgeId:"K06",knowledgeTitle:"困惑、弱信号与中部停留",time:"14:08–16:34",pdfPages:[1479],type:"理解判断",quote:`14:08 震荡区间的两个重要特征是困惑和失望
14:12 如果你感觉到了其中的一个
14:15 说明市场很可能处于震荡区间
14:18 即使目前还不明显
14:24 震荡区间是非常难交易的行情在
14:28 每个波段开始的时候总是充满困惑
14:32 很少能确定反转已经开始
14:35 比如这里的反转
14:37 反弹会有足够我盈利的涨幅吗？
14:40 这里呢这里呢？
14:45 信号K线和机会通常看上去不是那么的好
14:50 趋势也比较弱 容易被反转
14:53 趋势中的回调通常很深 上涨趋势
14:57 但大幅回调形成更高的低点
15:00 仍然只是回调 但幅度非常大
15:03 通常当你看到趋势有非常深的回调时
15:06 比如这里上涨
15:08 然后回调
15:09 大涨大跌很大的困惑通常会导致震荡区间
15:13 这里有大跌和大涨 通常会导致震荡区间
15:18 信号 K线通常较弱
15:20 你想在连续五根阴线后买入吗？
15:23 这根阴线收在比较高的位置
15:25 但不算好的做多信号
15:27 而这个是十字星
15:29 看起来不像是一个强势的做多信号
15:32 这里有一根阳线
15:34 但是它的左边是非常大的大阴线
15:37 并且大阴线还有跟随K线
15:39 不是一个非常好的做多信号
15:42 你想在连续三根强势大阳线后面做空吗？
15:46 这是高二高一高二 但是信号K是阴线
15:50 你想在这里做多吗？
15:52 这个它跌破了那个低点
15:55 此外震荡区间往往在中间部分花费大量
16:00 这里很多K线都在区间的中间部分跌破创新低之后
16:05 但是很快反弹回来
16:07 变成了一个更大的区间
16:09 很多K线都在中间3分之1
16:14 在强势的趋势 K线突破之后没有好的跟随
16:18 阳线突破创新高
16:20 跟随不好 不错的阳线跟随不好
16:23 大阴线尝试突破跟随不好
16:26 大阳线尝试创新高 突破之后的跟随不好
16:29 这是非常常见的
16:31 你会不断的感到失望和困惑
16:34 每次当市场看起来要突破时 它就反转了`},{prompt:"区间中出现一根看似高胜率的突破K线，为什么不能照搬强趋势中的判断？",options:["先用实体大小确定高概率，等这次失败后才考虑背景","区间背景可能削弱表面优势，仍要检查跟随与位置","仍按强趋势标准估算信号概率，区间背景只改变利润目标"],answer:1,explanation:"课程用“看似60%也可能接近50%”说明外形并不等于实际优势。这是课程的近似描述，不是每个信号的精确测算。",imageKey:null,id:"18A-K07-1",knowledgeId:"K07",knowledgeTitle:"外观与实际概率",time:"16:44–17:56",pdfPages:[1480],type:"理解判断",quote:`16:44 这种反转的交易机会看似胜率很低
16:47 实际上他们的概率更接近50%
16:50 看起来糟糕的事情并没有那么糟
16:53 这个看起来像一个低胜率的做多机会
16:57 但他成功了
16:58 这不是一个特别高胜率的做多机会
17:01 这个也不是
17:02 但多头在那些信号K线的高点上方买入
17:06 仍然能够进行剥头皮交易
17:10 另一方面
17:11 看起来应该胜率很高的机会应该有60%甚至更高的概率
17:17 在震荡区间中也会降低到50%
17:20 不像是一般的突破或者
17:23 通道中有低概率或高概率
17:26 40%或60%
17:30 在震荡区间中双方概率往往是50对50
17:35 没有什么像看起来那么糟糕
17:38 也没有什么像看起来那么完美
17:42 看上去不是一个好的做多机会
17:45 但是却上涨了
17:47 看上去不是一个好的做空机会
17:50 但是却下跌了
17:51 看起来像一个强势的多头突破
17:54 但看看接下来发生了什么
17:56 所以市场继续上涨的概率并没有那么高`},{prompt:"第一段上涨、回调、很强的第二段后立刻反转。最需要防止哪种误读？",options:["把区间里的第二段误当作新趋势起点，继续追第三段","强第二段说明旧区间大概已经失效，先期待第三段再检查","只检查两段之间回撤比例，不检查它们在大区间的位置"],answer:0,explanation:"第二段陷阱是强势外观与实际背景不一致；需要看它是否仍在大区间内，不能反过来断言每个第二段都失败。",imageKey:null,id:"18A-K08-1",knowledgeId:"K08",knowledgeTitle:"第二段陷阱的早期识别",time:"18:03–18:56",pdfPages:[1481],type:"理解判断",quote:`18:03 失望 当市场看起来像是要突破时会被反转
18:10 强势的空头突破很快反转上涨
18:13 更加强势的多头突破
18:15 刚刚创新高立刻反转下跌
18:18 糟糕的跟随交易者一直感到失望
18:22 如果看到这种情况
18:23 你就知道市场处于震荡区间
18:27 第二段陷阱第一段上涨
18:31 回调第二段后面不是突破
18:35 而是反转市场
18:37 通常在
18:38 反转之前看起来最强势
18:42 这里是一个小的第二段
18:44 陷阱一回调二没有继续上涨
18:48 而是反转下跌 这里小的第二段陷阱第一段反弹
18:52 第二段没有继续下跌
18:55 而是反转上涨
18:56 这是一个大的第二段陷阱`},{prompt:"多个方向的突破都留不住缺口，很快被回撤填补，应如何解读？",options:["把每次缺口填补都当作新的反向强趋势已经确认","这是区间中的失望特征之一，不能反复把缺口都当测量型缺口","最初突破足够大，因此仍把各次缺口都作为测量缺口使用"],answer:1,explanation:"课中强调缺口和实体缺口不断闭合，说明突破延续不足；要观察背景与后续，而非只看到缺口就推算目标。",imageKey:null,id:"18A-K09-1",knowledgeId:"K09",knowledgeTitle:"缺口闭合与突破点回穿",time:"19:00–19:43",pdfPages:[1481],type:"理解判断",quote:`18:56 这是一个大的第二段陷阱
19:00 一回调二震荡区间中的缺口
19:04 和实体缺口通常会被填补
19:07 多头在这里制造了一个小的实体缺口
19:11 应该会继续上涨 但是很快就被填补了
19:14 多头尝试在这里制造一个缺口 但被填补了
19:18 多头尝试在这里制造一个缺口
19:21 突破回撤 强势突破回撤
19:24 突破点缺口被填补了
19:26 空投在这里突破之后缺口立刻被填补
19:30 这里多头突破这个高点和
19:33 所有这些低点之间有缺口
19:36 但是最终被填补了
19:38 所以交易者感到失望 所有缺口不断被填补
19:43 强势的突破之后没有好的跟随`},{prompt:"“趋势里多数反转失败”与“区间里多数突破失败”，共同强调的是什么？",options:["不论什么背景，应该一律逆着最新K线交易","背景具有惯性，同一个强信号在不同背景下含义不同","区间永远不会结束，趋势永远不会反转"],answer:1,explanation:"80%是本课用来说明惯性的近似经验表述，不是不会改变的保证，也不能把趋势规则直接套到区间。",imageKey:null,id:"18A-K10-1",knowledgeId:"K10",knowledgeTitle:"区间与趋势的惯性不同",time:"19:47–21:25",pdfPages:[1482],type:"理解判断",quote:`19:47 震荡区间中我的80%法则
19:50 无论看起来多么强势
19:52 80%突破的尝试会失败
19:57 非常强势的大阳线反转上涨
20:00 并且有好的跟随
20:01 大概率下面有更多人愿意买入
20:05 但在某个时刻你必须承认
20:08 没有足够的买盘来制造第二段上涨
20:12 强势的空头突破之后发生了什么？
20:16 市场反转上涨
20:18 多头在这里和这里再次尝试向上突破反转下跌
20:23 空头在这里和这里再次尝试突破反转上涨
20:27 连续四根阴线反转上涨
20:30 像所有的市场
20:32 周期一样 震荡区间抗拒变化趋势
20:36 抗拒被反转趋势中的80%
20:39 反转的尝试会失败 这些反转的尝试变成骑行
20:44 然后趋势继续
20:45 而在震荡区间中 80%突破的尝试
20:49 尝试形成趋势
20:51 这些突破的尝试会失败 震荡区间会继续
21:00 交易者一直对跟随感到失望
21:02 非常强势的两根阳线
21:04 但是如果你是一个多头
21:07 你在这根阳线的收盘买入
21:09 这时你会怎么想你会感到失望
21:12 如果你是空头
21:14 认为这可能是一个测量性缺口
21:16 然后看到跟随K线很差你会感到失望
21:20 当你看到这个当你看到强势的趋势K线之后
21:24 跟随糟糕你会感到失望
21:25 这就是震荡区间的第二个特征`},{prompt:"橙色大阳线后没有连续向上推进，反而很快回落。结合本课，应优先检查什么？",options:["只要出现过大阳线，就认定后续是强上涨趋势","只检查这根大阳线的实体，不看后面价格","是不是区间里的上涨波段，以及后续是否持续令人失望"],answer:2,explanation:"本图来自课程“不佳跟随”的案例。大K线不等于持续控制市场，后续的回撤与反复反转同样需要纳入判断。",time:"19:47–21:25",id:"18A-K11-1",knowledgeId:"K11",knowledgeTitle:"不佳跟随与变弱通道",pdfPages:[1482,1483],type:"图表应用",quote:`19:47 震荡区间中我的80%法则
19:50 无论看起来多么强势
19:52 80%突破的尝试会失败
19:57 非常强势的大阳线反转上涨
20:00 并且有好的跟随
20:01 大概率下面有更多人愿意买入
20:05 但在某个时刻你必须承认
20:08 没有足够的买盘来制造第二段上涨
20:12 强势的空头突破之后发生了什么？
20:16 市场反转上涨
20:18 多头在这里和这里再次尝试向上突破反转下跌
20:23 空头在这里和这里再次尝试突破反转上涨
20:27 连续四根阴线反转上涨
20:30 像所有的市场
20:32 周期一样 震荡区间抗拒变化趋势
20:36 抗拒被反转趋势中的80%
20:39 反转的尝试会失败 这些反转的尝试变成骑行
20:44 然后趋势继续
20:45 而在震荡区间中 80%突破的尝试
20:49 尝试形成趋势
20:51 这些突破的尝试会失败 震荡区间会继续
21:00 交易者一直对跟随感到失望
21:02 非常强势的两根阳线
21:04 但是如果你是一个多头
21:07 你在这根阳线的收盘买入
21:09 这时你会怎么想你会感到失望
21:12 如果你是空头
21:14 认为这可能是一个测量性缺口
21:16 然后看到跟随K线很差你会感到失望
21:20 当你看到这个当你看到强势的趋势K线之后
21:24 跟随糟糕你会感到失望
21:25 这就是震荡区间的第二个特征`,image:{src:"/charts/18a-follow-through.webp",solutionSrc:"/charts/18a-follow-through-solution.webp",page:1482,alt:"橙色阳线与紧邻的后续K线"}},{prompt:"价格大涨后又回撤大部分涨幅，随后大跌又几乎反弹回来，怎样判断更贴合本课？",options:["只要有更高低点，就排除所有区间可能","考虑它们是区间中的上下波段，结合整体背景","每一段都当作独立强趋势，忽略前面的反向移动"],answer:1,explanation:"大涨大跌和很深的回撤制造困惑；通道还可以同时是趋势的一部分和正在形成的区间的一部分。",imageKey:null,id:"18A-K12-1",knowledgeId:"K12",knowledgeTitle:"深回撤与区间内波段",time:"23:52–26:53",pdfPages:[1484,1485],type:"理解判断",quote:`23:52 上涨波段空头尝试用大阴线反转
23:56 但结果只是上涨中的深度回调
24:01 回调很深 所以市场是大幅上涨 大幅下跌
24:06 大幅下跌 然后又剧烈的反弹
24:13 空头再次尝试让市场反转下跌
24:16 但看看这个反弹的幅度
24:19 把绝大部分的跌幅都反弹了
24:25 这里出现的每个趋势
24:27 实际上只是震荡区间内的波段
24:30 而不是一个大的趋势
24:32 确实是上涨趋势
24:33 但实际上只是震荡区间中的一段上涨
24:36 确实是下降趋势
24:38 但实际上只是震荡区间中的一段下跌
24:45 如果你在趋势中看到暂停的行为
24:48 你认为趋势会继续
24:50 那么它就是一次回调
24:52 它是一个小的震荡区间
24:54 如果回调发展到很多K线
24:57 我就用震荡区间这个词
24:59 因为趋势到底会继续还是反转变得不再清晰
25:05 这里有一次暂停连续的运线
25:08 它是II的机构
25:12 这根K线在那根K线内部
25:14 它的高点等于或低于那个高点
25:17 它的低点等于或高于
25:20 那个低点
25:21 上涨趋势中的回调
25:24 这是一些多头止盈所引起的这
25:27 也是空头想要反转趋势的一次尝试
25:30 当你看到这个回调时你会怎么想？
25:34 空投太强壮了 反转会成功
25:36 还是你会觉得空投的力量好像一般般
25:40 大概率上涨趋势还是会继续
25:44 显然趋势会继续
25:46 因此这个小的震荡区间
25:49 只是一次回调 它是牛
25:51 其你确信趋势会继续
25:54 非常高的概率至少还会上涨一些
25:59 然而如果你看到一个回调
26:02 但是无法确定趋势会继续还是反转
26:06 这是我会用震荡区间这个词
26:09 而不是反转这个词
26:11 比如在这个地方
26:12 你是觉得上涨趋势会继续呢？
26:15 还是说它有可能是高点抬高的大反转
26:19 然后开始进入下降趋势？
26:21 很难判断 基本上是五十对五十
26:24 所以这个时候我会开始使用震荡区间这个词
26:28 然后我会看左边的K线来确定区间是从哪里开始
26:32 也许是从这里开始的
26:34 也许是从这里开始
26:36 要记住 通道一般是震荡区间的开始
26:39 即使它仍然是趋势的一部分
26:42 趋势会过度强势的 多头突破之后进入通道
26:47 这个通道就是在向震荡区间过杜
26:51 所以它是上涨趋势的一部分
26:53 同时也是震荡区间的一部分`},{prompt:"五分钟图多空均衡，60分钟图却是强下跌中的反弹，哪种理解正确？",options:["两种描述可以同时成立，不能混用时间级别","把五分钟的均衡状态等同于两个周期的趋势都已经结束","采用60分钟方向覆盖五分钟图的判断，不考虑当前区间"],answer:0,explanation:"同一段价格在不同周期可能有不同含义。本课还提醒日内交易者，较高级别的回调也可能容纳当前周期的反向交易。",imageKey:null,id:"18A-K13-1",knowledgeId:"K13",knowledgeTitle:"不同周期的区间与回调",time:"27:01–29:50",pdfPages:[1486,1487],type:"理解判断",quote:`27:01 这是五分钟图上的震荡区间
27:04 多空双方的力量是平衡的
27:06 多头尝试形成一个头肩底
27:09 左肩头右肩突破 但没有走很远
27:12 而空头看到一个双鼎雄奇 最终空投胜利
27:17 如果你去看60分钟的K线图
27:20 所有的这些东西只是强
27:22 下降趋势中的一次反弹而已
27:26 所以在60分钟图上
27:29 多头的反转尝试很可能会失败
27:32 趋势会继续下跌
27:34 而在五分钟图上 情况并非如此
27:37 多空双方看起来非常平衡
27:45 如果只看五分钟图
27:47 上涨波段和下跌波段的可能性都差不多
27:55 然而 这个五分钟级别的上涨波段
27:58 即使市场一度处于单边上涨
28:00 但它在60分钟图上只是一次反弹
28:06 因此 60分钟级别的
28:08 下降趋势很可能会继续
28:13 这里是欧元兑美元的五分钟图上涨趋势
28:17 然后是一个持续了
28:19 30 40根K线的震荡区间
28:22 最初的概率是有利于多头的
28:25 但区间里面每多一根K线
28:28 概率就越来越接近50
28:31 对50
28:32 空头看到一个头肩顶 左肩头右肩
28:36 多头看到一个嵌套的楔形牛旗
28:40 123以及123
28:45 如果你去看它的60分钟图
28:48 横盘震荡下跌的2个小时
28:51 只是60分钟图上的一次回调
28:54 在60分钟图上它看上去没有
28:57 强势到可以反转这四根大阳线
29:01 在60分钟图上
29:03 这2个小时的横盘是一个牛旗
29:06 而在五分钟图上 概率并不是那么明确
29:10 感觉空头反转成功的概率几乎
29:13 和多头继续趋势的概率相同
29:22 通常情况下就看一个时间
29:25 周期的K线图交易会更好
29:27 如果你是一个日内交易者
29:29 你就用五分钟图交易
29:30 不用担心60分钟图上发生了什么
29:33 你就按照眼前的价格行为进行交易
29:36 60分钟图显然市场大概率将恢复上涨
29:41 但如果你在五分钟图上做日内交易
29:45 60分钟级别的回调和牛其下跌的幅度往往足够大
29:50 足够空头在五分钟的周期做空赚钱`},{prompt:"从“回调”改称“交易区间”，核心变化是什么？",options:["行情只要出现第一根反向K线就必须改称区间","原趋势恢复不再清晰，多空都有合理理由","只要区间内部某段很强，就必须取消区间判断"],answer:1,explanation:"名称反映的是背景判断，不只是形状名称；短区间仍可能是回调，持续很久又双向均衡时含义改变。",imageKey:null,id:"18A-K14-1",knowledgeId:"K14",knowledgeTitle:"回调称谓对应方向预期",time:"30:01–31:33",pdfPages:[1488],type:"理解判断",quote:`30:01 小震荡区间市场更有可能恢复上涨
30:04 所以我会说它是一次回调
30:07 即使是这个仍然更有可能恢复上涨
30:10 所以我会说这个小震荡区间也是一次回调
30:16 在这种情况下 当你相信市场会继续上涨时
30:20 通常最好只做顺序式的交易 也就是买入
30:26 然而 这里的回调发展
30:28 到了30 40根K线
30:30 不清楚趋势到底会继续还是反转
30:34 这个区间非常窄 交易者最好不要交易
30:38 这里大阴线回调是要反转了吗？
30:41 不知道市场刚刚才创了新高
30:44 又立刻大跌回来 这让人感到非常困惑
30:48 大涨大跌很可能是震荡区间
30:51 大跌大涨很可能是震荡区间
30:54 你可以说这个整体是一个大的震荡区间
31:02 一旦不清楚趋势到底会继续还是反转
31:06 交易者就会停止使用回调这个词
31:10 而是把它看作震荡区间
31:16 在震荡区间里面总是同时
31:18 存在合理的做多和做空机会
31:21 空头看到一个高点降低的大反转机会
31:24 多头看到一个双顶牛
31:26 其空头可能看到一个楔形
31:28 顶123或者一个双底
31:31 多头看到这里有一个双底
31:33 这里也有一个双底`},{prompt:"怎样判断一个低点是否足够重要，能影响本课的上涨趋势判断？",options:["只要低点后创新高就同样重要，不要求突破足够强","使用最近一个摆动低点，不检查之后的上涨强度","看它之后是否有强势多头突破并创新高"],answer:2,explanation:"课程用“强突破＋创新高”区分重要与次要低点；不是跌破任何一个小低点都意味着上涨结束。",imageKey:null,id:"18A-K15-1",knowledgeId:"K15",knowledgeTitle:"重要低点与次要低点",time:"31:41–33:58",pdfPages:[1489],type:"理解判断",quote:`31:41 上涨趋势需要低点和更高都不断抬高
31:46 多头会把他们的止损放在重要的低点下方
31:52 这是一个重要的低点吗？
31:54 要通过两个点来判断 一个是强势的突破
31:58 一个是价格创新高
32:00 所以它不是一个明确的重要低点
32:03 就算价格跌破它也不足以
32:05 说明上涨趋势已经结束
32:07 然而这里是强势的多头突破 价格创新高
32:11 如果价格跌破了这个低点
32:14 市场可能不再处于上涨趋势
32:17 价格没有跌破它
32:18 所以你可以说这仍然是宽上涨通道的一部分
32:23 市场不断的形成更高的高点以及更高的低点
32:27 这里有另一个非常强势的多头突破创新高
32:32 所以它就成为了重要的低点
32:34 如果市场跌破了它
32:36 那么交易者就会认为上涨趋势很可能已经结束
32:41 市场要么变成下降趋势 要么变成震荡区间
32:46 在这个时候价格确实跌破了它
32:56 重要的低点 另一个重要的低点
32:59 最终空头跌破了这些重要的低点
33:03 代表上涨趋势结束
33:07 此时市场不再处于上涨趋势
33:10 要么是一个震荡区间 要么是一个下降趋势
33:17 价格跌破了这个低点
33:20 但它只是一个次要的低点
33:22 因此跌破它不会改变多头的看法
33:27 他们仍然相信上涨趋势会继续
33:30 这只是一个更深的回调而已
33:32 这个时候多头的重要低点在哪里？
33:36 在这里或这里？
33:38 只要价格保持在这个低点或那个低点的上方
33:42 这些多头就仍然看涨
33:44 如果空头强势的向下突破
33:47 即使没有跌破这两个低点
33:49 多头也会认为上涨趋势已经结束
33:52 但如果只是向下轻微的试探一下
33:55 价格保持在重要的低点上方
33:58 那么上涨趋势就仍然成立`},{prompt:"跌破重要的更高低点后，是否已经确认进入下降趋势？",options:["先按下降趋势确认处理，等出现区间后再重新归类","没有，也可能进入交易区间，需要继续判断","仍认定上涨结构完整，直到空头形成一个完整下降通道"],answer:1,explanation:"上涨结束与下降已确认是不同结论。课件明确保留“区间或空头趋势”两种可能。",imageKey:null,id:"18A-K15-2",knowledgeId:"K15",knowledgeTitle:"重要低点与次要低点",time:"31:41–33:58",pdfPages:[1489],type:"变式辨析",quote:`31:41 上涨趋势需要低点和更高都不断抬高
31:46 多头会把他们的止损放在重要的低点下方
31:52 这是一个重要的低点吗？
31:54 要通过两个点来判断 一个是强势的突破
31:58 一个是价格创新高
32:00 所以它不是一个明确的重要低点
32:03 就算价格跌破它也不足以
32:05 说明上涨趋势已经结束
32:07 然而这里是强势的多头突破 价格创新高
32:11 如果价格跌破了这个低点
32:14 市场可能不再处于上涨趋势
32:17 价格没有跌破它
32:18 所以你可以说这仍然是宽上涨通道的一部分
32:23 市场不断的形成更高的高点以及更高的低点
32:27 这里有另一个非常强势的多头突破创新高
32:32 所以它就成为了重要的低点
32:34 如果市场跌破了它
32:36 那么交易者就会认为上涨趋势很可能已经结束
32:41 市场要么变成下降趋势 要么变成震荡区间
32:46 在这个时候价格确实跌破了它
32:56 重要的低点 另一个重要的低点
32:59 最终空头跌破了这些重要的低点
33:03 代表上涨趋势结束
33:07 此时市场不再处于上涨趋势
33:10 要么是一个震荡区间 要么是一个下降趋势
33:17 价格跌破了这个低点
33:20 但它只是一个次要的低点
33:22 因此跌破它不会改变多头的看法
33:27 他们仍然相信上涨趋势会继续
33:30 这只是一个更深的回调而已
33:32 这个时候多头的重要低点在哪里？
33:36 在这里或这里？
33:38 只要价格保持在这个低点或那个低点的上方
33:42 这些多头就仍然看涨
33:44 如果空头强势的向下突破
33:47 即使没有跌破这两个低点
33:49 多头也会认为上涨趋势已经结束
33:52 但如果只是向下轻微的试探一下
33:55 价格保持在重要的低点上方
33:58 那么上涨趋势就仍然成立`},{prompt:"尚未跌破先前重要低点，但出现很强的空头突破，是否仍必须坚持上涨有效？",options:["不必，强反向突破也能改变多头看法，要与轻微向下试探区别","必须，只有触及一个精确低点的价格才能改变趋势判断","不必，因此任何小阴线都足以确认强下降趋势"],answer:0,explanation:"原文在33分钟处保留这个条件：强势反向突破即使未跌破重要低点，也可让多头认为上涨结束；轻微试探则不同。",imageKey:null,time:"33:32–33:58",id:"18A-K15-3",knowledgeId:"K15",knowledgeTitle:"重要低点与次要低点",pdfPages:[1489],type:"变式辨析",quote:`33:30 这只是一个更深的回调而已
33:32 这个时候多头的重要低点在哪里？
33:36 在这里或这里？
33:38 只要价格保持在这个低点或那个低点的上方
33:42 这些多头就仍然看涨
33:44 如果空头强势的向下突破
33:47 即使没有跌破这两个低点
33:49 多头也会认为上涨趋势已经结束
33:52 但如果只是向下轻微的试探一下
33:55 价格保持在重要的低点上方
33:58 那么上涨趋势就仍然成立`},{prompt:"课末讨论区间最低结构时，为什么同时看波段、时间和重要低点？",options:["只要出现第三根K线，就已经满足三个波段","三段上下移动及足够时间，结合重要结构被挑战，更能说明原趋势优势减弱","只要出现三段移动，完全不必再看时间与背景"],answer:1,explanation:"原文示例讨论约20根K线与三个波段，第三段下跌挑战重要低点；这是结构判断，不能把波段数误当K线数。",imageKey:null,id:"18A-K16-1",knowledgeId:"K16",knowledgeTitle:"区间的最低结构与持续怀疑",time:"34:04–37:18",pdfPages:[1490,1491,1492,1493,1494,1495,1496],type:"理解判断",quote:`34:04 上涨趋势第二、第三段上涨
34:07 然后开始出现小K线
34:10 很多小K线回调似乎是
34:13 无止境的当这种情况发生时
34:17 左边的上涨趋势就失去了影响力
34:20 左边的上涨趋势离得越远
34:23 它对市场的影响就越小
34:30 向上突破和向下突破的可能性变得相等
34:35 多头看到的是双底牛皮
34:37 空头看到的是头肩顶或者楔形顶
34:41 然后是高点降低的大反转
34:44 每当你发现做多做空都很合理的时候
34:48 你就知道现在市场处于震荡区间
34:53 所以我不再使用回调这个词
34:56 而是开始说震荡区间向上突破
35:00 和向下突破的可能性变得相等
35:11 震荡区间的最小要求是什么？
35:14 通常是20根K线加三个波段
35:18 有一段下跌
35:19 它仍然是上涨趋势中的一次回调
35:23 价格仍然高于这个重要的低点
35:26 然后有一段上涨恢复上涨趋势
35:29 市场处于上涨通道
35:31 更高的低点 更高的高点
35:34 一旦你看到第三段下跌
35:36 并且如果它跌破了重要的低点
35:38 这里刚刚达到
35:39 那么你就必须考虑震荡区间的最低要求
35:43 已经满足了三个波段
35:46 123跌破了一个重要的低点
35:50 当然这个低点更加重要一些
35:53 但这一段下跌已经增加了市场处于震荡
35:58 区间的可能性
36:00 我得到
36:00 的结论是市场此时已经处于震荡区间
36:08 空投需要很多K线才能让多头心中产生怀疑
36:12 一旦他们制造出了足够多的阴线
36:15 三根阴线这里四根阴线
36:17 这里三根阴线
36:19 然后这里有80根连续的阴线
36:22 一旦空头让多头心中产生了足够的怀疑
36:26 让多头不再确定上涨趋势能否延续下去
36:31 那么市场就处于震荡区间
36:33 并且上涨趋势恢复的概率与
36:36 反转下跌的概率变得相同
36:42 做多和做空都有非常充分的理由
36:46 记住震荡区间总是同时
36:48 存在做多和做空的机会
36:51 他们看上去同样的好
36:53 以至于你不确定到底哪一方会获胜
36:57 换句话说 这让人感到困惑
37:00 而困惑恰恰就是震荡区间的一个重要特征
37:04 每一个波段之后的跟随都不好
37:07 强势的上涨波段糟糕的跟随
37:10 强势的下跌波段糟糕的跟随
37:14 随着区间的发展 会出现新的做多做空机会
37:18 旧的机会没有成功 他们演变成新的机会`,referenceImage:{src:"/charts/18a-three-legs-solution.webp",page:1495,alt:"第1495页课件整页讲解",kind:"课件整页"}}],sourceFile:"BTC PAF 18A Trading Ranges v2_中文 (源语言).srt"},{id:"18B",group:"交易区间",title:"双向机会、突破模式与陷阱",range:"00:00–28:10",revision:"range-knowledge-v2",notes:["区间能同时存在合理的恢复结构和反转结构，位置通常比孤立信号更重要。","普通区间中的多数突破失败，与突破模式中第一次突破约一半会失败，是不同条件下的说法。","第二段越强也越需要看大背景：突破小高点，不等于突破整个区间。"],knowledgePoints:[{id:"K01",title:"同一结构的多空两面",summary:"上涨后的区间可同时包含双底牛旗和主要趋势反转；下跌后的区间也有双方的解释。",time:"00:58–03:42",pdfPages:[1501,1502],questionIds:["18B-K01-1"]},{id:"K02",title:"边缘不精确与最终突破",summary:"区间上下沿常是区域而非精确价位；区间有惯性，但最终也会形成成功突破。",time:"03:51–04:25",pdfPages:[1503],questionIds:["18B-K02-1"]},{id:"K03",title:"低买高卖与及时止盈",summary:"普通区间中，新手常被强K线吸引而在高位追多、低位追空；课程倾向高抛低吸、赚快钱。",time:"04:40–06:02",pdfPages:[1504],questionIds:["18B-K03-1"]},{id:"K04",title:"区间位置与第二入场",summary:"下半部找买入理由、上半部找卖出理由；连续强势K线后，有交易者等待第二次反转入场。",time:"06:15–09:08",pdfPages:[1505,1506,1507],questionIds:["18B-K04-1"]},{id:"K05",title:"加仓距离与退出逻辑",summary:"课程案例的第二入场通常与首次入场至少相隔一笔最小剥头皮目标；回到首次价格时可分别退出。",time:"07:42–11:34",pdfPages:[1506,1507,1508],questionIds:["18B-K05-1"]},{id:"K06",title:"加仓总风险与仓位",summary:"宽止损、加仓是课程描述的经验交易者做法，必须用小仓位控制合计止损金额，不是新手默认动作。",time:"11:14–12:05",pdfPages:[1508],questionIds:["18B-K06-1"]},{id:"K07",title:"突破模式的条件",summary:"区间收敛、接近三角形顶点等背景让交易者预期突破临近；不能把所有突破尝试都套同一个失败率。",time:"12:06–13:19",pdfPages:[1510],questionIds:["18B-K07-1"]},{id:"K08",title:"三个50%的对象不同",summary:"向上最终突破、向下最终突破约各半；第一次突破是否在到目标前反转，也是另一项判断。",time:"13:25–14:17",pdfPages:[1510,1511],questionIds:["18B-K08-1","18B-K08-2"]},{id:"K09",title:"第二段陷阱的结构",summary:"第二段可非常强，甚至由多根大K线构成，但若仍在大区间或宽通道内，可能只是末端测试。",time:"14:44–15:36",pdfPages:[1513],questionIds:["18B-K09-1","18B-K09-2"]},{id:"K10",title:"突破通道不等于突破区间",summary:"顺势加速突破上涨通道，与强势脱离交易区间是不同背景；课程对两者的延续预期不同。",time:"15:43–17:00",pdfPages:[1513,1514],questionIds:["18B-K10-1"]},{id:"K11",title:"糟糕跟随、微双顶与放弃",summary:"强第二段后跟随不佳，两次突破失败、形成微双顶，可能让多头退出并吸引空头。",time:"17:20–19:41",pdfPages:[1515],questionIds:["18B-K11-1"]},{id:"K12",title:"向下的第二段陷阱",summary:"长下影、有限突破、立即反向跟随，加上仍在较大区间下沿附近，可能套住追空者。",time:"20:01–22:58",pdfPages:[1516,1517],questionIds:["18B-K12-1"]},{id:"K13",title:"局部新高与整个区间",summary:"突破最近20根K线的高点，可能仍低于更大区间高点；不能把局部突破误作整体突破。",time:"23:05–25:10",pdfPages:[1518],questionIds:["18B-K13-1"]},{id:"K14",title:"失败后的退出与重新评估",summary:"强第二段反向出现有力信号时，课程案例强调被套者退出；不要反复期待下一次突破来解套。",time:"24:28–26:44",pdfPages:[1518,1519,1520],questionIds:["18B-K14-1"]},{id:"K15",title:"陷阱后的宽通道可能",summary:"在更高低点结束的下跌陷阱可能发展为宽上涨通道，反向情况可发展为宽下降通道；仍需证据。",time:"25:20–27:59",pdfPages:[1519,1520],questionIds:["18B-K15-1"]}],questions:[{prompt:"上涨趋势后的区间中，多头看到双底牛旗、空头看到头肩顶，如何处理？",options:["只要找到头肩顶，就不用再看多头的恢复结构","只要找到牛旗，头肩顶就必然是错误画法","承认双方解释可能同时合理，观察背景与实际突破跟随"],answer:2,explanation:"区间本来就可以同时容纳趋势恢复和反转结构，不能只因能给某一方命名就认定它有决定性优势。",imageKey:null,id:"18B-K01-1",knowledgeId:"K01",knowledgeTitle:"同一结构的多空两面",time:"00:58–03:42",pdfPages:[1501,1502],type:"理解判断",quote:`00:58 来看这张K线图 市场显然处于震荡区间
01:03 你可以说震荡区间从这里就开始了
01:07 我们就用蓝色区域来说明一个问题
01:11 任何一个震荡区间都同时存在
01:15 合理的做多机会和做空机会
01:19 当你感觉有合理的买入理由
01:22 也有合理的卖出理由时
01:25 你就知道市场处于震荡区间
01:30 我的80%法则
01:33 80%的时间震荡区间的突破尝试会失败
01:37 震荡区间会继续尝试向下反转
01:41 尝试向上突破
01:43 尝试从双顶或更高的高点向下反转
01:47 尝试向上突破
01:49 尝试向下突破 再次尝试向上突破
01:52 最后看起来市场可能正在向下突破80%
01:57 突破的尝试不论看起来多么强
02:00 当市场处于震荡区间时
02:02 这些尝试都会失败上涨趋势然后是震荡区间
02:08 每个上涨趋势中的震荡
02:10 区间都有某种双底的结构
02:14 多头希望双底牛齐之后继续向上突破
02:19 趋势延续
02:23 同时每个震荡区间都存在大反转的结构
02:27 这里是潜在的高点降低的大反转
02:31 它也是一个头肩顶
02:33 左肩头右肩
02:34 这是一个下降趋势中的震荡区间
02:41 每个震荡区间无论是在上涨
02:44 趋势还是下降趋势中都同时有合理
02:48 的做空机会和做多机会
02:54 高点抬高的双鼎雄奇
02:58 然后有一个更小的小双顶
03:02 但基本上可以看作是双鼎雄奇
03:06 多头看到的是低点抬高的大反转机会
03:10 下降趋势多头突破低点抬高
03:13 这里没有足够多的K线形成重要反转
03:17 所以暂时是小反转
03:19 现在有一个双底和足够的K线来制造大反转
03:23 所以是一个低点抬高的双底大反转机会
03:27 多头有50%的概率突破成功反转下降趋势
03:32 空头有50%的概率突破成功
03:35 让下降趋势延续
03:37 但是除非是特别好的机会
03:39 否则左边的趋势仍然有
03:42 略微更高的概率会恢复`},{prompt:"反复小幅越过区间上沿后回来，为什么不能只凭越线认定突破成功？",options:["上沿必须精确到一个价格，越过一下就足够","上下沿并不总是精确，仍要观察是否真正脱离区间并持续","只要之前失败过，之后永远不会突破成功"],answer:1,explanation:"把边缘当区域理解，既避免把每次试探当成功，也避免把“多数失败”误解为永远不会成功。",imageKey:null,id:"18B-K02-1",knowledgeId:"K02",knowledgeTitle:"边缘不精确与最终突破",time:"03:51–04:25",pdfPages:[1503],type:"理解判断",quote:`03:51 震荡区间的另一个特点是上沿和下
03:54 沿的具体位置从来都不是很明确
03:58 每个震荡区间最终都会突破进入趋势
04:02 50%的概率是多头突破
04:06 50%的概率是空头突破
04:09 此外还有50%的概率第一次
04:12 突破尝试会失败被反转
04:18 再次强调我的80%法则
04:21 80%突破的尝试会失败
04:24 市场具有惯性
04:25 他会继续他长时间以来一直在做的事情`},{prompt:"上沿出现五六根连续阳线，为什么仍不能只凭强度追多？",options:["若大背景仍是区间，可能已经接近卖出和止盈区域","连续阳线越多，区间边缘就越不重要","连续阳线出现后，任何回落都只能叫小回调"],answer:0,explanation:"原文把这种追高与下沿追空作为新手常见错误；关键是强势是否真正改变了整个区间背景。",imageKey:null,id:"18B-K03-1",knowledgeId:"K03",knowledgeTitle:"低买高卖与及时止盈",time:"04:40–06:02",pdfPages:[1504],type:"理解判断",quote:`04:40 因为80%的向上或向下的突破尝试会失败
04:45 所以交易者会高抛低吸做剥头皮交易
04:49 做剥头皮交易是因为你
04:51 认为市场不会突破80%
04:53 突破的尝试会失败
04:55 所以赚快钱是更好的做法
05:07 新手天然地会希望下沿附近
05:10 的强势下跌会导致下降趋势
05:13 上沿附近的强势上涨会导致上涨趋势
05:16 于是他们最终在上沿追涨
05:19 他们看到上沿附近的强势K线
05:21 这里连续5根K线没有阴线
05:24 他们认为因为超过了左边所有的高点
05:27 这就是一个上涨趋势的开始
05:30 在这里他们看到连续七根阳线
05:33 他们认为 哇 多头太强壮了
05:35 这是上涨趋势的开始
05:37 于是他们最终买在区间的上沿
05:40 在下沿他们看到五六根连续的阴线
05:44 然后是另一个带有跟随K线的突破
05:47 于是他们认为下降趋势将会成功
05:50 但是左边所有的这些震荡
05:53 区间的价格行为告诉我
05:55 这些突破的尝试很大的概率会失败
05:58 新手最终买在上沿脉在下沿
06:02 这与高手所做的正好相反`},{prompt:"区间上部刚出现连续五根阳线，部分交易者为什么等待第二做空入场？",options:["因为连续阳线足以证明空头已经掌控市场","希望看到上涨再次失败和更清楚的反转依据，而非只因到上沿就立刻逆势","因为第二入场可以取消所有风险"],answer:1,explanation:"课程案例把位置与反转尝试结合起来；等待第二入场是观察证据，不是保证一定反转。",imageKey:null,id:"18B-K04-1",knowledgeId:"K04",knowledgeTitle:"区间位置与第二入场",time:"06:15–09:08",pdfPages:[1505,1506,1507],type:"理解判断",quote:`06:15 专业的交易员对上沿和下沿
06:18 大概的位置有良好的感觉
06:21 他们对于突破会失败有足够的信心
06:26 所以他们在区间的下沿买入做多
06:30 在区间的上沿卖出做空
06:33 他们使用较宽的初始止损
06:36 并且做好加仓的准备
06:38 相信突破的尝试会失败
06:40 市场会反转 他们可以赚到钱
06:44 经验丰富的交易者相信
06:47 无论突破的尝试看起来多么强势
06:51 它大概率会失败 市场会反转
06:54 又一次强势的突破 强势反转
06:57 强势上涨 强势突破上沿
07:00 然而反转下跌
07:02 因为交易者知道突破不太可能成功
07:06 所以他们快速止盈
07:09 当市场处于震荡区间时
07:11 他们倾向于做剥头皮交易
07:16 例如这里有很多震荡区间的价格行为
07:19 这里多头尝试反转
07:21 左边的下跌足够强势
07:23 也许会有小的第二段下跌
07:25 也许这是第二段下跌的结束双底
07:28 一些多头会在这里买入
07:31 使用宽止损 并在更低的位置加仓
07:34 尝试跌破这个双底 多头确信他不会走得太远
07:38 一些多头会在这个好看的反转阳线上方加仓
07:42 买入更多 其他多头会坚持他们的初始仓位
07:46 如果第二入场点的价格到第一次入场
07:49 的价格不满足一笔剥头皮交易的距离
07:52 很多交易者就不会加仓
07:54 然而如果第二入场点的价格到第一次
07:57 买入的价格大于一笔剥头皮交易的距离
08:01 他们就会加仓
08:02 然后当价格回到第一次入场的位置
08:05 他们平仓一部分或者全部
08:07 一些交易者在买入之后会继续持有
08:12 等到价格来到区间的上半部分就止盈离场
08:19 当价格来到震荡区间的
08:21 上半部分上面3分之1时
08:24 交易者就会开始寻找做空的理由
08:27 突破这个高点可能会失败
08:29 可能不会走得太远 一些空头会在这里卖出
08:33 其他人会等待一个强势的阴线
08:36 然后在它的低点下方卖出 这里是第二做空入场点
08:41 这根K线跌破了那根K线的低点
08:44 触发了第一做空入场点
08:47 你可以说这是一个楔形顶123或者123
08:52 这里有连续五根阳线
08:54 所以很多交易者更喜欢等看到第二做空入场点再进场
08:59 也就是在这里开仓卖出
09:02 一些人会把止损放在这
09:04 一些人会使用更宽的初始止损
09:08 以防市场先创一个新高 然后再反转下跌`},{prompt:"案例中，第二次买入比第一次低一笔剥头皮目标，回到首次入场价时怎样区分两笔仓位？",options:["首次仓位可能打平，加仓部分才有这段利润","两笔仓位都只能打平","首次仓位必然盈利，加仓部分必然亏损"],answer:0,explanation:"利润要按各自入场价计算。原文用这个例子解释为什么加仓不宜过早、两笔价格不能挤在一起。",imageKey:null,id:"18B-K05-1",knowledgeId:"K05",knowledgeTitle:"加仓距离与退出逻辑",time:"07:42–11:34",pdfPages:[1506,1507,1508],type:"理解判断",quote:`07:38 一些多头会在这个好看的反转阳线上方加仓
07:42 买入更多 其他多头会坚持他们的初始仓位
07:46 如果第二入场点的价格到第一次入场
07:49 的价格不满足一笔剥头皮交易的距离
07:52 很多交易者就不会加仓
07:54 然而如果第二入场点的价格到第一次
07:57 买入的价格大于一笔剥头皮交易的距离
08:01 他们就会加仓
08:02 然后当价格回到第一次入场的位置
08:05 他们平仓一部分或者全部
08:07 一些交易者在买入之后会继续持有
08:12 等到价格来到区间的上半部分就止盈离场
08:19 当价格来到震荡区间的
08:21 上半部分上面3分之1时
08:24 交易者就会开始寻找做空的理由
08:27 突破这个高点可能会失败
08:29 可能不会走得太远 一些空头会在这里卖出
08:33 其他人会等待一个强势的阴线
08:36 然后在它的低点下方卖出 这里是第二做空入场点
08:41 这根K线跌破了那根K线的低点
08:44 触发了第一做空入场点
08:47 你可以说这是一个楔形顶123或者123
08:52 这里有连续五根阳线
08:54 所以很多交易者更喜欢等看到第二做空入场点再进场
08:59 也就是在这里开仓卖出
09:02 一些人会把止损放在这
09:04 一些人会使用更宽的初始止损
09:08 以防市场先创一个新高 然后再反转下跌
09:17 当市场处于震荡区间时
09:19 交易者预期每次突破之后
09:22 价格都会回到突破点上方
09:24 他们会在这个低点挂限价买单
09:27 订单会在这里成交
09:29 然后他们会逢低买入更多
09:32 通常如果两笔入场之间的距离
09:35 超过一笔剥头皮交易的大小
09:38 最好在第二入场点加仓
09:40 然后如果市场回到第一笔入场的价格
09:43 加仓的部分就赚到了剥头皮的利润
09:46 第一笔仓位可以打平离场
09:48 如果背景足够好
09:50 你的第一笔仓位可以先不离场
09:52 争取也赚一笔剥头皮的利润
09:55 再次创新低
09:56 多头会在最近的这个低点挂限价买单
10:00 订单会在这里成交买入
10:02 如果价格下跌了一倍或者两倍剥头皮交易的距离
10:07 他们会逢低买入更多
10:09 另一些人会等待反转的信号
10:12 在这个反转阳线的高点上方买入
10:15 这几个绿色框框都是在前期
10:18 低点挂限价买单买入的例子
10:21 他们会在这里加仓
10:23 多头会使用较宽的初始止损
10:25 相信空头突破的尝试很快会被反转
10:29 市场不会进入下降趋势
10:31 下沿的具体位置总是不那么明确
10:34 然而交易者对会发生反转的大致区域拥有良好的盘感
10:40 他们知道这是一个合理的买入区域
10:43 屏幕底部的3分之1
10:45 他们知道这是一个合理的卖出区
10:48 所以交易者会开始在这里或这里的K线下方卖出
10:53 这是第二做空入场点
10:55 或者空头会在这个高点挂限价卖单
10:58 然后准备逢高卖出更多
11:00 正如之前所说
11:02 如果第二入场点距离初始入场点至少有剥头皮交易的大小
11:08 很多交易者会加仓比在
11:11 区间上沿做空也是一样的
11:14 他们会在前期的高点挂单卖出
11:17 挂单卖出 然后逢高加仓
11:19 很多交易者会加仓
11:21 一些交易者会用宽止损加仓2到3次
11:24 注 不适合新手 相信多头突破会失败
11:27 并且市场会回到第一笔入场的价格
11:31 让他们的第一笔仓位打平
11:34 离场加仓的部分赚钱`},{prompt:"课程描述宽止损并准备加仓时，最不能漏掉的条件是什么？",options:["只看第一笔的止损金额，不计算后续加仓风险","初始及后续仓位足够小，使全部止损时的总亏损仍在平常风险范围内","每次加仓都使用与平常单笔交易相同的大仓位"],answer:1,explanation:"原文明确强调合计风险。不能把加仓只理解为改善均价，而忽略仓位和总损失。",imageKey:null,id:"18B-K06-1",knowledgeId:"K06",knowledgeTitle:"加仓总风险与仓位",time:"11:14–12:05",pdfPages:[1508],type:"理解判断",quote:`11:11 区间上沿做空也是一样的
11:14 他们会在前期的高点挂单卖出
11:17 挂单卖出 然后逢高加仓
11:19 很多交易者会加仓
11:21 一些交易者会用宽止损加仓2到3次
11:24 注 不适合新手 相信多头突破会失败
11:27 并且市场会回到第一笔入场的价格
11:31 让他们的第一笔仓位打平
11:34 离场加仓的部分赚钱
11:39 强调一下 加仓本身是合理的交易方法
11:42 但如果你想要加仓
11:44 你必须用足够小的仓位
11:47 确保就算你的止损被打到
11:50 你的总亏损也不会超过平时其他的止损
11:54 正如之前所说 每当你想要加仓
11:57 加仓的价格距离初始入场的价格
12:01 至少要距离一笔剥头皮交易的大小
12:05 不要太急太早`},{prompt:"三角形的高点降低、低点抬高并接近顶点时，应如何区别于普通区间的突破尝试？",options:["这是需要准备突破的模式，首次尝试的失败可能性与普通区间惯性不同","三角形预示原趋势恢复，无须再准备反向突破","仍照用普通区间相同的失败率，收敛只影响止损距离"],answer:0,explanation:"本课把突破模式单列为条件变化；不能把普通区间的经验数字不加条件套过来。",id:"18B-K07-1",knowledgeId:"K07",knowledgeTitle:"突破模式的条件",time:"12:06–13:19",pdfPages:[1510,1511],type:"图表应用",quote:`12:05 不要太急太早
12:06 接下来我们来讲突破模式
12:09 换句话说
12:10 市场在一个震荡区间内横盘了一段时间
12:14 交易者预计会有突破
12:20 记住我的80%法则
12:22 80%的震荡区间突破会失败
12:26 除非市场处于突破模式
12:28 如果有理由预期突破即将发生
12:32 那么成功突破的概率就更高
12:36 三角形一系列的更低的高点
12:39 和更高的低点有下降趋势
12:42 也有上涨趋势 并且接近三角形的顶点
12:46 即两条线的交点
12:48 我之前说过 当处于突破模式时
12:50 50%突破的尝试会失败
12:53 空头尝试向下突破三角形 但是被向上反转
12:58 之前还说过当市场处于突破模式时
13:02 50%的概率最终是空头突破会成功
13:06 50%的概率最终是多头突破会成功
13:12 市场先是向下突破失败
13:14 50%的概率第一个突破的尝试会失败
13:19 最终多头突破成功了`,image:{src:"/charts/18b-triangle.webp",solutionSrc:"/charts/18b-triangle-solution.webp",page:1511,alt:"高点降低、低点抬高的三角形和末端突破尝试"}},{prompt:"“上下方向约各半”和“首次突破约一半会失败”，分别回答什么？",options:["上下各半指首次尝试成败，首次失败率指最终突破方向","前者问最终方向，后者问这次尝试能否在反转前实现目标","两者都在判断本次突破能否先到利润目标"],answer:1,explanation:"方向概率与某一次尝试的成败不是同一个事件，不能把这几个50%直接相加或互相替代。",imageKey:null,id:"18B-K08-1",knowledgeId:"K08",knowledgeTitle:"三个50%的对象不同",time:"13:25–14:17",pdfPages:[1510,1511],type:"理解判断",quote:`13:25 更低的高点下降趋势 更高的低点上涨趋势
13:30 它就是一个三角形
13:33 突破失败并且被反转的概率是50%
13:40 成功突破的概率是50%
13:50 三角形有50%的概率最终会向上突破
13:54 50%的概率会向下突破
13:57 50%的概率第一次突破会失败
14:00 这里空头尝试反转多头的第一次突破
14:04 但他们没有做到多头的第一次突破
14:07 直接成功了
14:10 又有一个震荡区间突破
14:13 在达到利润目标之前有50%的概率会反转
14:17 失败的空头突破 然后失败的多头突破`},{prompt:"突破模式先向下尝试，随后反转向上，这是否超出本课的预期？",options:["没有，因此任何第二次尝试都必定成功","超出，第一次方向必须就是最终趋势方向","没有，首次尝试可能失败，最终成功方向可以相反"],answer:2,explanation:"课程明确准备两种方向。第一次失败并不能自动保证下一次成功，仍要看新的价格行为。",imageKey:null,id:"18B-K08-2",knowledgeId:"K08",knowledgeTitle:"三个50%的对象不同",time:"13:25–14:17",pdfPages:[1510,1511],type:"变式辨析",quote:`13:25 更低的高点下降趋势 更高的低点上涨趋势
13:30 它就是一个三角形
13:33 突破失败并且被反转的概率是50%
13:40 成功突破的概率是50%
13:50 三角形有50%的概率最终会向上突破
13:54 50%的概率会向下突破
13:57 50%的概率第一次突破会失败
14:00 这里空头尝试反转多头的第一次突破
14:04 但他们没有做到多头的第一次突破
14:07 直接成功了
14:10 又有一个震荡区间突破
14:13 在达到利润目标之前有50%的概率会反转
14:17 失败的空头突破 然后失败的多头突破`},{prompt:"四根强阳线构成第二段上涨时，判断是不是陷阱最需要补看什么？",options:["只数连续阳线，不再检查它们处于哪里","只把四根阳线截出来比较实体大小","左边更大的区间或通道，以及突破之后能否持续"],answer:2,explanation:"强第二段不能离开左边背景单独判断。课中专门提醒大区间、宽下降通道都会降低新趋势解释的可信度。",imageKey:null,id:"18B-K09-1",knowledgeId:"K09",knowledgeTitle:"第二段陷阱的结构",time:"14:44–15:36",pdfPages:[1513],type:"理解判断",quote:`14:44 接下来我想讲一下第二段陷阱
14:47 我认为他们非常重要
14:49 他们给新手制造了很大的麻烦
14:55 这里有一个上涨通道
14:57 可能是一个三推楔形一二三复合型的
15:01 第一段上涨 空头尝试向下反转
15:04 但看看发生了什么 连续四根阳线全都收在高位
15:09 其中二根是收在最高的超大阳线
15:12 看起来它会有第二段上涨
15:15 在第一次向下反转时
15:18 多头会逢低买入 然后恢复上涨
15:22 然而我们看不到更左边的K线
15:25 如果这仍然是一个大震荡区间的一部分
15:29 或者是一个大的宽下降通道的一部分
15:32 那么突破成功的概率就要小得多
15:36 交易者想要观察是否有好的跟随`},{prompt:"强突破后预期还有第二段，是否就意味着一定有足够大的获利距离？",options:["是，有第二段就一定有与第一段同样长的利润空间","不是，所以强突破后绝不会出现第二段","不一定，课中说明第二段有时很短，甚至只持续一根K线"],answer:2,explanation:"“至少还有一小段”与“足够做波段或达到目标”是不同结论。课程用一根K线的第二段提醒不要把延续预期放大。",imageKey:null,time:"20:01–20:22",id:"18B-K09-2",knowledgeId:"K09",knowledgeTitle:"第二段陷阱的结构",pdfPages:[1513],type:"变式辨析",quote:`20:01 相当强势的空头突破上方很
20:04 可能有卖盘第一次尝试向上反转
20:09 空头会逢高卖出 制造第二段下跌
20:13 有时第二段下跌很短 可能只有一根K线
20:17 例如在这个大的多头突破之后
20:19 这是第二段上只有一根K线
20:22 在这个地方`},{prompt:"为什么课中对“向上加速突破上涨通道”特别警惕？",options:["把顺势越过通道线与强势脱离横盘区间视作相同背景","先当新一轮趋势的强突破，通道只用于计算测量目标","它可能是衰竭高潮，课程描述多数会在约5根K线内回落，不能当成区间成功突破"],answer:2,explanation:"本课在此背景使用约75%失败的经验说法，并与区间外强突破的测量目标预期对比；背景不同，不能混用。",imageKey:null,id:"18B-K10-1",knowledgeId:"K10",knowledgeTitle:"突破通道不等于突破区间",time:"15:43–17:00",pdfPages:[1513,1514],type:"理解判断",quote:`15:43 向上加速突破上涨通道
15:45 你知道75%的时间里
15:48 如果上涨通道被向上加速突破
15:51 在大约5根K线之内价格会反转下跌
15:55 事实上不管是向上还是向下突破
15:58 它会在大约5根K线之内反转
16:01 例如我可以在下沿画一条趋势线
16:05 一度跌破了这条线 但是很快就向上反转了
16:14 如果这个突破发生在震荡区间的外面
16:19 那么有60%的概率会去到MM目标位
16:23 但是因为这是加速突破上涨通道
16:26 所以有75%的概率会失败
16:29 总是要考虑市场周期一个趋势
16:32 从突破开始 然后进入通道
16:35 再进入震荡区间 75%的时间里会这样
16:39 只有25%的概率多头突破上涨通道
16:44 再次多头突破重新开始市场
16:48 周期多头突破回调进入通道
16:52 最后变成震荡区间
16:54 因为它突破的是上涨通道 而不是震荡区间
16:57 所以有75%的概率会
17:00 在大约5根K线内失败`},{prompt:"图中的强上涨后，连续两次向上尝试失败。相较只看大阳线，应关注什么变化？",options:["第二段超过第一段高点后，即使跟随弱仍维持强趋势解释","只有价格跌回第一段起点，微双顶才有重新判断的意义","失望的多头退出与空头第二次入场的证据"],answer:2,explanation:"原文讲微双顶、两次突破失败以及放弃卖出。题目用完整案例验证背景变化，不把任何单根K线当作唯一依据。",id:"18B-K11-1",knowledgeId:"K11",knowledgeTitle:"糟糕跟随、微双顶与放弃",time:"17:20–19:41",pdfPages:[1515],type:"图表应用",quote:`17:20 看看后面的跟随强势的多头突破
17:23 但是跟随非常糟糕
17:25 大概率在下方有买盘
17:27 多头会在第一次反转的时候逢低买入
17:31 他们确实买入了 但并不是做波段交易
17:35 他们剥头皮赚快钱离场
17:37 在这根K线收盘买入的多头对跟随感到失望
17:41 他们在下方至少剥头皮大小的距离买入更多
17:45 尝试在初始仓位的价格打平离场
17:48 现在形成了一个小双 顶多投两次
17:51 突破通道上沿失败这里是第一次
17:55 突破通道上沿失败这是第二次
17:58 大多数多头会在这根K线下方离场
18:01 就造成了这里或这里出现了放弃K线
18:04 空头会在这根K线下方卖出做空
18:08 这么多强势大阳线的情况下
18:10 没有多少空投愿意在这里做空
18:13 一旦突破第二次失败
18:15 更多空头就会开始入场
18:17 这就是一个第二段陷阱的例子
18:20 强势的第二段上涨 新手看到4根大阳线
18:25 认为市场周期会重新开始
18:28 然后开始上涨 波段向上去到mm标位
18:32 但他们忽略了现实
18:34 市场在加速突破上涨通道
18:36 在75%的时间里会反转下跌到通道的下沿
18:45 复合型的两段式上涨 第一段是楔形上涨
18:50 然后空头尝试反转 多头再次突破
18:54 然后是第二次反转的尝试
18:56 你也可以说它是复合型的顶部
18:59 在这里尝试是注定没有成功
19:01 尝试恢复上涨 但是失败了
19:04 这是第二个顶部
19:06 楔形顶是第一个顶部
19:09 这个小双顶是第二个顶部
19:13 多头对这个阴线感到失望
19:16 他们在这里或这里打平离场
19:19 没有离场的多头最终在这里放弃
19:25 第二次突破失败之后入场
19:27 做反转是高胜率的交易
19:29 这里就是突破上涨通道
19:31 失败后的第二做空入场点
19:34 它有一个好的做空信号K线
19:37 前面第一次反转的信号K也是不错的
19:41 所以这是一个高胜率的做空机会`,image:{src:"/charts/18b-micro-top.webp",solutionSrc:"/charts/18b-micro-top-solution.webp",page:1515,alt:"上涨通道末端、橙色区域及后续局部K线"}},{prompt:"大区间下沿附近第二段下跌很强，但跌破后下影长、随后反转阳线。最合理的警惕是什么？",options:["仅凭长下影就确认反转，无须观察接下来的反向跟随","以小双底被跌破为大区间下沿已经失守的主要证据","它可能只是下沿的真空测试与第二段陷阱"],answer:2,explanation:"本课同时检查大区间、较早低点、影线和跟随。局部小双底跌破，不代表整个大区间下沿已成功失守。",id:"18B-K12-1",knowledgeId:"K12",knowledgeTitle:"向下的第二段陷阱",time:"20:01–22:58",pdfPages:[1516,1517],type:"图表应用",quote:`20:01 相当强势的空头突破上方很
20:04 可能有卖盘第一次尝试向上反转
20:09 空头会逢高卖出 制造第二段下跌
20:13 有时第二段下跌很短 可能只有一根K线
20:17 例如在这个大的多头突破之后
20:19 这是第二段上只有一根K线
20:22 在这个地方
20:23 交易者希望市场加速跌破下降通道
20:27 制造测量型缺口
20:29 也许他们会把它看作一个双底
20:33 这个低点那个低点 空头加速跌破这个双底
20:37 双底是一个震荡区间
20:39 很多交易者希望跌破区间的底部 但真的是这样吗？
20:45 目前价格仍然高于这个低点
20:47 这很可能是这个大的
20:49 震荡区间底部的真空测试
20:52 注 真空测试会在三节课之后讲到
20:55 是的 跌破了双底 看上去对空投有利
20:58 然而下引线很长 K线的体积并没有那么大
21:02 价格仍然在上涨趋势的起涨点上方
21:05 这很可能是一个第二段陷阱
21:08 这也是一个复合型的两段式下跌
21:10 第一段下跌反弹 然后是强势的
21:13 第二段下跌必须要小心
21:16 因为它很可能会失败
21:18 空头希望这是一个双顶雄起下降趋势
21:22 双顶雄起
21:23 空头希望成功的跌破这个双底
21:27 但是看左边的背景
21:30 市场很可能仍然处于震荡区间之中
21:37 看看突破后的跟随 连续两根阳线反转上涨
21:43 此时很多空头会意识到这是一个第二段陷阱
21:48 震荡区间的价格行为会继续
21:52 事实也确实如此
21:56 这是第一段下跌
21:58 你也可以说这是第一段下跌
22:00 这里整个部分都是第一段下跌后的回调
22:04 你可以说它是扩张三角形或震荡区间
22:07 总之第一段下跌 然后反弹
22:10 复合型的反弹 然后是第二段下跌
22:14 第二段下跌突破失败
22:16 他诱骗交易者在震荡区间的低位卖出做空
22:22 再讲一遍 跌破了上涨通道
22:25 但是长下影线大阴线之后的跟随不好
22:32 阴线阳线看起来空头掌控了市场
22:36 然而向下跌破的这根阴线下影线很长
22:41 空头尝试让价格继续下跌
22:43 它的收盘和前一根K线的低点之间有缺口
22:48 但是立刻被补掉向上反转
22:50 所以这些空头此时有点慌了
22:55 他们看着左边的背景说道 坏了
22:58 也许这不是一个成功的突破`,image:{src:"/charts/18b-lower-test.webp",solutionSrc:"/charts/18b-lower-test-solution.webp",page:1517,alt:"下跌末端的橙色阴线及紧邻的后续反应"}},{prompt:"第二段突破最近20根K线高点，但仍在更左边的大区间顶部附近，应如何判断？",options:["只以最近20根的高点确定上沿，不纳入更左边的高点","第二段更强就先期待第三段，区间位置只影响止损距离","先检查是否只是测试大区间上沿，局部新高不是充分的脱离证据"],answer:2,explanation:"课程点名新手只看到局部高点、忽略更大高点的错误；需要把突破放回完整背景。",imageKey:null,id:"18B-K13-1",knowledgeId:"K13",knowledgeTitle:"局部新高与整个区间",time:"23:05–25:10",pdfPages:[1518],type:"理解判断",quote:`23:00 也许这只是一个大震荡区间中的第二段下跌
23:05 震荡区间中有很多两段式的移动
23:08 第一段上涨回调
23:09 第二段上涨 第一段下跌反弹 第二段下跌
23:18 第二段陷阱他们总是看起来非常的强势
23:23 以至于交易者相信大概率还会有一段上涨
23:28 然而市场往往反转了
23:30 在上涨通道上方追涨必须要非常的小心
23:34 在下沿做空也要非常小心
23:36 因为你很可能迈在震荡区间的底部
23:39 第二段通常比第一段更强
23:42 他显然比他更强势 他没有比他更强势
23:46 但他仍然是一个相当强的第二段
23:49 又比如这里的两段上涨
23:51 第二段比第一段更强
23:54 他总是骗新手去相信这是一个成功的突破
23:58 他确实突破了过去二十多根K线
24:01 但没有成功的突破整个区间的顶部
24:04 新手会在这里买入或在这里买入
24:07 他们在这里卖出做空
24:09 期待空投突破 但是忽略了现实震荡区间中
24:13 无论看上去有多强
24:15 80%突破的尝试会失败
24:18 而且第二段往往看上去特别强势
24:22 看起来会突破 但事实并非如此
24:28 在低位追空的空头被套住了
24:31 就像追涨的多头被套住一样
24:33 如果你在这里买入 你必须尽快止损离场
24:37 尤其是看到空头的第二做空
24:39 入场点信号K是阴线的时候
24:42 如果你在这里卖出做空
24:44 这不是一个很强的突破
24:46 我认为你必须在这根K线的上方离场
24:49 跌破双底失败
24:51 总的来说低点仍然抬高
24:53 市场还是在震荡区间里面
24:59 这里又是一个第二段陷阱 两段式上涨
25:02 第二段比第一段更强 新手会买入追涨
25:06 他们只看到这个高点 但是忽略了这个高点
25:10 他们没想到市场仍然在震荡区间内`},{prompt:"区间上部追多后，第二段出现强反转阴线，为什么不能继续只看原来的突破理由？",options:["因为做多失败后，下一次做空必定成功","因为只要曾经是突破，回调无论多深都不会改变判断","新的反转证据已经挑战原判断，应重新评估并处理被套仓位"],answer:2,explanation:"原文案例强调离场和重新按区间判断，不是反复追涨杀跌等待某一次自动成功。",imageKey:null,id:"18B-K14-1",knowledgeId:"K14",knowledgeTitle:"失败后的退出与重新评估",time:"24:28–26:44",pdfPages:[1518,1519,1520],type:"理解判断",quote:`24:28 在低位追空的空头被套住了
24:31 就像追涨的多头被套住一样
24:33 如果你在这里买入 你必须尽快止损离场
24:37 尤其是看到空头的第二做空
24:39 入场点信号K是阴线的时候
24:42 如果你在这里卖出做空
24:44 这不是一个很强的突破
24:46 我认为你必须在这根K线的上方离场
24:49 跌破双底失败
24:51 总的来说低点仍然抬高
24:53 市场还是在震荡区间里面
24:59 这里又是一个第二段陷阱 两段式上涨
25:02 第二段比第一段更强 新手会买入追涨
25:06 他们只看到这个高点 但是忽略了这个高点
25:10 他们没想到市场仍然在震荡区间内
25:20 你可以说这里的低点抬高了
25:23 也是这是一个很宽的上涨宽通道
25:27 更高的低点
25:28 强势的第二段上涨 也许价格会创新高
25:32 确实不是没可能
25:33 然而更有可能是震荡区间内的第二段陷阱
25:37 每当市场在处于震荡区间的顶部3分之1
25:41 或者看上去很有可能是震荡区间
25:45 交易者最好考虑止盈
25:48 并且开始考虑卖出做空
25:52 多头希望低点抬高 然后高点也抬高
25:56 市场处于宽上涨通道
25:59 然后他们可以在那个高点的上方止盈
26:02 然而一旦你看到这个阴线 你就必须离场
26:06 你必须假设这可能是一个震荡区间
26:09 尤其是当它是第二段的时候
26:12 一回调2 尤其是当它是一个强势的第二段
26:17 然后出现强势的反转阴线时
26:23 剧烈的抛售 连续五根阴线
26:28 空头希望高点降低
26:30 这可能是下降趋势的开始
26:33 也许会跌到前期的低点下方
26:37 他们想要制造一个宽下降通道
26:40 但我总是会先假设这是一个震荡区间
26:44 除非有强有力的证据告诉我不是震荡区间`},{prompt:"下沿第二段下跌失败并留下更高低点后，多头希望形成什么？",options:["只要反转一次，就已经没有区间背景","更高低点只能形成新的下降趋势","宽上涨通道，但仍需后续证据，不能只凭一次反转确认"],answer:2,explanation:"这是课程描述的双方目标，不是确定结果。课末强调除非有有力证据，否则仍先保留区间解释。",imageKey:null,id:"18B-K15-1",knowledgeId:"K15",knowledgeTitle:"陷阱后的宽通道可能",time:"25:20–27:59",pdfPages:[1519,1520],type:"理解判断",quote:`25:20 你可以说这里的低点抬高了
25:23 也是这是一个很宽的上涨宽通道
25:27 更高的低点
25:28 强势的第二段上涨 也许价格会创新高
25:32 确实不是没可能
25:33 然而更有可能是震荡区间内的第二段陷阱
25:37 每当市场在处于震荡区间的顶部3分之1
25:41 或者看上去很有可能是震荡区间
25:45 交易者最好考虑止盈
25:48 并且开始考虑卖出做空
25:52 多头希望低点抬高 然后高点也抬高
25:56 市场处于宽上涨通道
25:59 然后他们可以在那个高点的上方止盈
26:02 然而一旦你看到这个阴线 你就必须离场
26:06 你必须假设这可能是一个震荡区间
26:09 尤其是当它是第二段的时候
26:12 一回调2 尤其是当它是一个强势的第二段
26:17 然后出现强势的反转阴线时
26:23 剧烈的抛售 连续五根阴线
26:28 空头希望高点降低
26:30 这可能是下降趋势的开始
26:33 也许会跌到前期的低点下方
26:37 他们想要制造一个宽下降通道
26:40 但我总是会先假设这是一个震荡区间
26:44 除非有强有力的证据告诉我不是震荡区间
26:51 这节课我讲了
26:53 震荡区间中总是同时存在合理的做多和做空机会
27:00 然后我讲了突破模式
27:03 当一个震荡区间持续足够长的时间
27:06 并且价格行为表明突破可能即将发生时
27:10 你必须为突破做好准备
27:12 第一次向上或向下的突破
27:15 尝试有50%的概率会失败
27:17 50%的概率最终会向上突破
27:21 50%的概率最终会向下突破
27:25 第二段陷阱他们出现
27:27 在宽的上涨和下降通道中
27:30 尤其是在震荡区间里面特别多
27:33 每当你看到特别强势的第二段上涨或下跌时
27:37 记得看一看左边的被突破
27:40 是否远远高于左边的所有K线
27:43 还是说它可能只是震荡
27:45 区间上沿或下沿的测试
27:47 在这种情况下 你必须假设这是一个第二段陷阱
27:51 并且市场会反转
27:53 不要在震荡区间中追涨杀跌
27:56 除非你确定区间已经结束
27:59 并且一个成功的突破正在进行中`}],sourceFile:"BTC PAF 18B Trading Ranges_中文 (源语言).srt"},{id:"18C",group:"交易区间",title:"恢复、反转与区间内波段",range:"00:00–47:04",revision:"range-knowledge-v2",notes:["区间可以同时包含趋势恢复与主要反转结构，形态名称不能替代背景判断。","通道可能成为新区间的第一段；窄通道、宽通道与衰竭后的反转，预期不同。","判断波段能否持续，要看连续趋势K线、缺口、跟随、回撤，以及是否在前高附近停滞。"],knowledgePoints:[{id:"K01",title:"短回调与成熟区间",summary:"5～10根K线的短回调往往仍偏向趋势恢复；持续到20、30或40根后，双方概率趋近。",time:"00:29–00:57",pdfPages:[1525],questionIds:["18C-K01-1"]},{id:"K02",title:"恢复与反转模式共存",summary:"同一段价格可被多头看作宽上涨通道，也可被空头看作头肩顶、楔形或大反转。",time:"01:07–01:45",pdfPages:[1525],questionIds:["18C-K02-1"]},{id:"K03",title:"区间突破怎样影响日形态",summary:"原趋势恢复可能形成趋势日；反向突破又回到开盘价，日线可能呈十字星、区间日。",time:"01:51–03:28",pdfPages:[1526,1527],questionIds:["18C-K03-1"]},{id:"K04",title:"突破模式与模式名称",summary:"反转常表现为主要趋势反转，恢复可来自双顶双底、三角形、楔形；名称不如背景和概率重要。",time:"03:37–08:54",pdfPages:[1528,1529,1530,1531,1532],questionIds:["18C-K04-1"]},{id:"K05",title:"宽通道的双向交易",summary:"宽上涨通道仍可抬高高低点，却容纳深回调和暂时单边下跌；之后可能成为区间的一部分。",time:"09:24–11:04",pdfPages:[1533,1534,1535],questionIds:["18C-K05-1"]},{id:"K06",title:"通道突破与测试目标",summary:"上涨通道常向下突破并测试前期重要低点，下降通道反向突破时通常测试通道起点。",time:"11:10–13:04",pdfPages:[1535,1536],questionIds:["18C-K06-1"]},{id:"K07",title:"窄通道首次反转往往较小",summary:"窄下降通道在较高级别像突破，第一次反向突破常只是小反转，之后可能区间或原趋势恢复。",time:"13:12–13:50",pdfPages:[1537],questionIds:["18C-K07-1"]},{id:"K08",title:"测量型缺口的背景",summary:"窄通道、较强突破、良好卖出跟随且缺口保持，支持测量目标预期。",time:"13:57–14:41",pdfPages:[1537],questionIds:["18C-K08-1"]},{id:"K09",title:"弱跟随与衰竭型缺口",summary:"弱下降中连续抛售高潮，较晚才出现最大阴线且跟随一般，更需警惕衰竭与区间。",time:"14:47–17:21",pdfPages:[1539,1540],questionIds:["18C-K09-1"]},{id:"K10",title:"区间预期怎样改变交易行为",summary:"下跌空间被认为有限时，空头倾向新低止盈，多头在下部买入；上下边缘不精确，案例使用宽止损。",time:"17:26–22:16",pdfPages:[1541,1542,1543],questionIds:["18C-K10-1"]},{id:"K11",title:"强突破和微通道",summary:"连续强阳线收高、数根K线没有回调和开放缺口，支持至少再涨一些；不能过早机械逆势。",time:"22:19–23:21",pdfPages:[1544],questionIds:["18C-K11-1"]},{id:"K12",title:"上涨通道变弱的组合信号",summary:"连续大阳线减少，出现十字星、上影线、频繁回调和大量重叠，提示上涨可能只是区间一段。",time:"23:45–24:44",pdfPages:[1545],questionIds:["18C-K12-1"]},{id:"K13",title:"测量目标与浅回调限制",summary:"课中按突破高度、第一段等长第二段和缺口测量目标；到目标有止盈可能，但窄通道不等于适合逆势。",time:"24:53–27:49",pdfPages:[1546],questionIds:["18C-K13-1","18C-K13-2"]},{id:"K14",title:"反向交易力量的升级",summary:"空头起初只在前高限价做短线；出现更连续阴线、弱反弹和更强抛售后，可能转为市价或突破单。",time:"27:55–30:39",pdfPages:[1547,1548],questionIds:["18C-K14-1"]},{id:"K15",title:"当前周期和较高周期",summary:"当前周期可以已经单边下跌，而较高周期仍只是上涨中的回调；结论须标明所用周期。",time:"30:42–31:49",pdfPages:[1548,1549],questionIds:["18C-K15-1"]},{id:"K16",title:"前高附近停滞的背景",summary:"背景包括左边所有K线、已有大区间、支撑阻力和当前跟随；前高停滞会强化区间解释。",time:"31:59–35:59",pdfPages:[1549,1550,1551],questionIds:["18C-K16-1"]},{id:"K17",title:"宽下降与双向控制",summary:"宽下降通道可暂时单边上涨；阴阳交错、长下影与坏跟随提示下跌动能不足。",time:"36:04–40:51",pdfPages:[1552,1553,1554,1555],questionIds:["18C-K17-1"]},{id:"K18",title:"持续很久的窄通道也可能衰竭",summary:"窄下降持续20根以上且小十字星增多、后续反弹变长时，需要留意高潮后的横盘或向上小反转。",time:"40:54–42:37",pdfPages:[1556],questionIds:["18C-K18-1"]},{id:"K19",title:"反向强波段也要检查跟随",summary:"下降通道向上突破后，若前高停滞、又放任大量阴线，可能仍是区间的上涨波段。",time:"42:43–44:14",pdfPages:[1557,1558],questionIds:["18C-K19-1"]},{id:"K20",title:"双方止盈与新开仓共同维持区间",summary:"上部多头止盈与空头新开仓共同卖出，下部空头止盈与多头新开仓共同买入。",time:"44:22–46:24",pdfPages:[1559,1560],questionIds:["18C-K20-1"]}],questions:[{prompt:"为什么本课要比较5～10根的回调与20～40根的横盘？",options:["因为任何回调只要达到第20根，就保证马上反转","因为小于20根K线的行情绝不可能存在双向交易","较长时间的双向交易会削弱原趋势影响，不能沿用短回调的方向优势"],answer:2,explanation:"这是判断背景的通常尺度，并非机械阈值；它不能否定前课对广义小区间的定义。",imageKey:null,id:"18C-K01-1",knowledgeId:"K01",knowledgeTitle:"短回调与成熟区间",time:"00:29–00:57",pdfPages:[1525],type:"理解判断",quote:`00:29 每个震荡区间内总是包含至少
00:32 一个做多机会和一个做空机会
00:35 通常我不会使用震荡区间这个词
00:39 除非回调持续了20根或更多的K线
00:43 如果趋势中的回调只持续5到10根K线
00:47 趋势更有可能会恢复
00:49 一旦回调增加到20 30或40根K线
00:53 趋势恢复的概率下降到大约50%
00:57 趋势反转的概率增加到大约50%`},{prompt:"同一区间里既能画出更高低点又能画出更低高点，最合理的认识是什么？",options:["只要形态名字更多，概率就会更高","只要更高低点存在，所有更低高点都无效","双方模式可能共存，图形命名本身不能决定哪方将获胜"],answer:2,explanation:"区间容纳方向相反的恢复与反转解释，课程要求接受这种不确定性。",imageKey:null,id:"18C-K02-1",knowledgeId:"K02",knowledgeTitle:"恢复与反转模式共存",time:"01:07–01:45",pdfPages:[1525],type:"理解判断",quote:`01:07 每个震荡区间
01:08 比如这个都有一个趋势反转的
01:12 模式和一个趋势恢复的模式
01:18 例如 多头可以认为
01:20 市场正在形成更高的低点
01:23 因此它是一个宽上涨通道
01:28 但同时空头可以认为
01:30 市场正在形成更低的高点
01:32 所以这是一个下降通道的早期阶段
01:36 或者是头肩顶左肩头右肩
01:39 你可以说它是高点抬高的大反转
01:42 或者三推楔形顶123
01:45 你可以说它是高点降低的大反转`},{prompt:"盘中先强跌、随后涨回开盘附近，为什么日线可能是十字星？",options:["只要盘中出现过强下跌，收盘位置就不再重要","十字星意味着盘中从未出现过大波动","日K线反映整天开收关系，盘中有方向波段不等于全天趋势延续"],answer:2,explanation:"课程把趋势恢复与反向回到开盘相对照；日线十字星不代表盘中没有可观的上下波段。",imageKey:null,id:"18C-K03-1",knowledgeId:"K03",knowledgeTitle:"区间突破怎样影响日形态",time:"01:51–03:28",pdfPages:[1526,1527],type:"理解判断",quote:`01:51 这是一个下降趋势 然后进入震荡区间
01:55 如果下降趋势恢复
01:56 那么这一天将成为一个下降趋势
02:00 开盘价在高位 收盘价在低位
02:04 然而如果它向上突破
02:06 并且回到当天的开盘价
02:09 这一天就是一个震荡区间日
02:15 大阴线跌破三角形跟随不好
02:18 但仍然有第二段下跌
02:21 下降趋势恢复 下降趋势变成震荡区间
02:26 现在下降趋势恢复 继续下跌
02:31 上涨趋势通道演变成震荡区间
02:35 你可以说这是一个三推楔形牛旗
02:39 三次向下推动一二三多头尝试继续向上突破
02:44 但目前为止不够好 如果市场恢复向上
02:49 这一天就会变成趋势日
02:51 一个上涨趋势日 开盘价在低位
02:55 收盘价在高位
02:56 然而如果空头制造了高点抬高的大反转
03:00 价格向下跌破
03:02 这一天就会变成震荡区间
03:05 收盘价接近开盘价
03:09 在这个案例中 空头最终突破成功了
03:13 连续的突破下跌
03:14 收盘价接近开盘价
03:16 这一天就变成了一个趋势反转日
03:20 或者说是一个震荡区间日
03:22 如果这是五分钟图的话
03:24 这一天的日K线图就是一个十字星
03:28 收盘接近开盘价是一个震荡区间日`},{prompt:"同一底部可以称三角形、圆弧底或低点抬高的大反转，学习重点应是什么？",options:["把名称最多的方向视为必胜方向","找到唯一正确名称后即可忽略多空双方理由","理解区间的双向机会、突破模式及实际跟随，而非争论唯一名称"],answer:2,explanation:"课程明确表示叫什么并不重要；达到成熟区间背景时，两种方向和首次突破失败都要准备。",imageKey:null,id:"18C-K04-1",knowledgeId:"K04",knowledgeTitle:"突破模式与模式名称",time:"03:37–08:54",pdfPages:[1528,1529,1530,1531,1532],type:"理解判断",quote:`03:37 一旦回调增加到20根或更多的K线
03:41 趋势恢复的概率等于趋势反转的概率
03:45 所以我称之为突破模式
03:48 如果趋势反转 通常是一个大反转
03:52 比如低点抬高的大反转
03:55 如果是趋势恢复 比如双鼎雄奇
03:58 在这个案例中可能是三推楔形雄起
04:02 三次向上推动一二三楔形的第一次上涨
04:07 在下降趋势结束之前就开始了
04:12 这很常见
04:17 多头把它看作低点抬高的双底大反转
04:21 或简单的称之为低点抬高的大反转
04:26 而空头把它看作楔形雄起
04:29 下降趋势反弹到大约50%
04:32 三次向上推动123
04:34 一些计算机会把它看作一个大的第二雄起
04:39 第一段回调第二段
04:45 上涨趋势
04:46 然后震荡区间震荡可能从这里就开始了
04:50 你也可以认为它在这里开始
04:52 无论如何它已经超过20根K线
04:55 因此市场处于突破模式
04:57 你必须假设同时存在合理的做空机会
05:01 这里有一个高点降低的双顶
05:04 大反转也存在合理的做多机会
05:08 你可以说它是双底牛皮或三角形
05:12 三角形被向上突破
05:14 现在是突破之后的回调趋势
05:17 恢复向上的概率与向下反转的概率大致相同
05:22 震荡区间中总是这样
05:25 总是有一个好的做多
05:27 机会和一个好的做空机会
05:32 在这个案例中
05:33 这个小的多头突破有一些回调
05:37 然后趋势恢复向上
05:42 上涨趋势回调从哪里开始 它是从这里开始
05:47 还是这里还是这里无所谓 无论如何
05:51 它已经超过20根K线
05:53 当回调发展到20根或更多K线时
05:56 我开始说它是震荡区间
05:58 在这种情况下
06:00 上涨趋势恢复的概率和趋势被反转下跌的概率大致相同
06:07 上涨趋势空头突破可能是高点降低的双顶
06:12 所以空头把它看作高点降低的双顶
06:15 大反转多头把它看作三角形牛旗或双顶牛旗
06:21 两者都是合理的
06:26 最终趋势反转下跌
06:32 下降趋势反弹主要是横向的反弹
06:36 一旦它发展到20根或更多K线
06:40 趋势反转上涨的概率几乎变得
06:43 趋势恢复下跌的概率一样高
06:45 我说几乎基本上是五十对五十
06:48 也许下跌的概率是51%
06:51 上涨的概率是49%
06:55 无论如何
06:56 当回调发展到20根或更多K线时
06:59 总是有一个好的合理的做多机会
07:02 也有一个好的合理的做空机会
07:05 对多头来说 这是低点抬高的大反转
07:08 也是三角形的下沿
07:10 对空头来说 这是双鼎雄奇或三角形雄奇
07:14 最终多头突破了
07:17 到这里仍然存在做空的理由
07:21 两段上涨 一回调2
07:23 它可能是一个大的第二雄起
07:28 结果他真的是第二雄起
07:31 空投让趋势继续下跌
07:34 不是一个大的下降趋势
07:36 但他们仍然让趋势继续下跌
07:39 继续下跌了30 40根K线
07:43 下降趋势反弹从这里开始 然后不断发展
07:48 空投在第二做空 第一段上涨回调
07:52 第二段不错的做空信号K线
07:54 但没有怎么下跌反弹继续发展更多的K线
07:58 大约20根K线后
08:00 趋势反转上涨的概率变得
08:03 几乎和恢复下跌的概率一样高
08:08 这是什么类型的底部 你怎么叫它并不重要
08:12 你可以说这里是低点抬高的双底大反转
08:15 你也可以说那里才是低点抬高的双底大反转
08:19 你可以说它是第二熊旗 第一段上涨回调
08:23 第二段 你可以说它是三角形
08:26 你可以说它是圆弧底 你可以说这里筹码正在累积
08:30 你叫它什么并不重要
08:32 一旦回调反弹发展到20根或更多K线
08:36 它就是一个震荡区间
08:38 市场处于突破模式
08:40 市场上涨或下跌的概率变成了50对50
08:45 每当他处于突破模式时
08:47 第一次向上或向下的突破只有50%的成功率
08:51 最终向上突破的概率和向下
08:54 突破的概率几乎是相等的`},{prompt:"图中是上涨通道的局部，可见较深回撤。能否仅凭整体高低点仍抬高，就排除空头交易和区间过渡？",options:["空头只要能从中获利，就说明整体已经转成下降趋势","不能，宽通道允许较强反向波段，并可能演变为区间","仍有上涨结构，因此把深回撤只当小修正，忽略当前卖压"],answer:1,explanation:"宽通道与窄通道含义不同。原文甚至允许宽上涨通道中暂时单边下跌，不能只看抬高高低点。",id:"18C-K05-1",knowledgeId:"K05",knowledgeTitle:"宽通道的双向交易",time:"09:24–11:04",pdfPages:[1533,1534,1535],type:"图表应用",quote:`09:24 上涨趋势深度回调
09:26 这些是否都是震荡区间的一部分
09:29 还是说回调在这里就结束了？
09:32 根据一些计算机的算法
09:35 趋势已经恢复上涨 上涨趋势回调
09:40 三推行牛旗 1232比一更高 这不重要
09:45 它的本质是双底被跌破 它是三推楔形的一种变体
09:50 现在趋势恢复上涨
09:55 多头突破
09:57 随后是深度回调进入上涨通道
10:02 它是楔形的通道 你可以说它是宽上涨通道
10:07 你可以说它是宽的楔形上涨通道
10:11 不管怎么说 它是一个上涨通道
10:14 是上涨趋势有很多双向的交易
10:18 在宽上涨通道里面总是会有深度的下跌
10:22 有时在宽上涨通道中
10:24 市场甚至可以暂时处于单边下跌
10:29 由于这里这里和这里的强势卖盘
10:32 空头不仅能够通过限价卖单赚钱
10:35 还能通过突破单在K线下方卖出赚钱
10:39 所以这个通道可能很快就会变成震荡区间
10:43 记住市场周期非常强势的
10:46 突破上涨趋势 然后回调进入通道
10:49 通道往往会演变成震荡区间
10:52 而这个通道往往就是震荡区间中的第一个波段
10:57 即使它仍然是上涨趋势的一部分
11:00 它最终会变成震荡区间的一部分
11:04 就像这里一样`,image:{src:"/charts/18c-broad-channel.webp",solutionSrc:"/charts/18c-broad-channel-solution.webp",page:1535,alt:"上涨通道中较深回撤与随后上涨的局部"}},{prompt:"下降通道被向上突破时，本课通常先观察哪个目标区域？",options:["必须只看最新一根阴线的中点","不看任何前高，直接假设整个下降趋势必然变为强上涨","通道起点的高点附近，并考虑其后可能成为区间"],answer:2,explanation:"课件把测试通道起点与形成上下波段联系起来；通道突破不是大级别趋势反转的自动确认。",imageKey:null,id:"18C-K06-1",knowledgeId:"K06",knowledgeTitle:"通道突破与测试目标",time:"11:10–13:04",pdfPages:[1535,1536],type:"理解判断",quote:`11:10 上涨趋势多头突破深度回调
11:13 现在是一个通道 75%的概率上涨
11:18 宽通道的下沿会被跌破
11:20 然后演变成震荡区间
11:28 上涨通道雄奇
11:29 75%的概率会出现空头突破
11:34 突破可以是横盘或下跌
11:40 通常它会测试一个重要的前期低点
11:43 例如这是一个重要的低点
11:46 因为在它后面价格强势上涨创新高
11:49 这是另一个重要的低点
11:51 价格通常会下跌 测试前期某个重要的低点
11:55 这个低点并不那么重要
11:57 因为它后面的突破并不强势
12:00 但这里或这里是潜在的震荡区间下沿的位置
12:04 这个低点可能成为震荡区间的下沿
12:07 市场可能会继续下跌到这里
12:09 然后反弹 所以震荡区间中有上涨波段
12:13 下跌波段之后可能还有一个上涨波段
12:16 下降通道75%的概率会被向上突破
12:20 每当你看到一个下降通道
12:23 你应该把它看作一个牛骑
12:31 目标通常是通道的起点
12:33 这并不是特别强势的空头突破
12:37 但是出现了深度的反弹
12:39 可能是通道阶段的起点
12:42 通常当下降通道被反转时
12:45 多头的第一个目标是下降通道的起点
12:49 也就是这个高点 然后演变成震荡区间
12:53 第一次反弹很可能就是震荡区间的起点
12:58 尽管在当时你并不一定不知道
13:01 而这个下降通道是震荡区间的一部分
13:04 即使当时它仍然是下降趋势的一部分`},{prompt:"窄下降通道第一次向上突破，为什么不应直接认定大上涨趋势已确认？",options:["把通道线被越过当作主要反转已确认，再等待回踩加仓","更高周期上它像强空头突破，第一次反向动作可能只形成小反转","只沿用原先强下跌的结论，第一次反向突破没有短线意义"],answer:1,explanation:"原文把小反转后形成区间或继续下跌都保留下来；要等待足够反向力量。",imageKey:null,id:"18C-K07-1",knowledgeId:"K07",knowledgeTitle:"窄通道首次反转往往较小",time:"13:12–13:50",pdfPages:[1537],type:"理解判断",quote:`13:12 下降趋势多头突破相当窄的下降通道
13:20 每当你看到一个相当窄的下降通道
13:24 然后你看到多头突破大概率只是小反转
13:28 小反转的后面通常是震荡
13:31 区间或者是下降趋势的恢复
13:37 在一个更高时间周期的K线图上
13:40 这样的窄通道是一次突破
13:42 所以如果你看到价格反弹
13:44 其实就是向上突破了一个下降的微通道
13:48 在更高的时间周期上
13:50 第一次向上突破时会有更多人卖出 而不是买入`},{prompt:"某段下降通道很窄，空头突破后有跟随，反弹未能补掉缺口，应优先考虑什么？",options:["它可能是测量型缺口，仍有原方向延续预期","先当衰竭缺口，因为空头已经连续推进了一段距离","先等缺口全部回补，再认定它支持原方向的测量目标"],answer:0,explanation:"缺口类型必须结合趋势强弱与跟随。这里与后面弱趋势中最大阴线、糟糕跟随的案例相反。",imageKey:null,id:"18C-K08-1",knowledgeId:"K08",knowledgeTitle:"测量型缺口的背景",time:"13:57–14:41",pdfPages:[1537],type:"理解判断",quote:`13:57 这个低点和那个高点之间有一个缺口
14:01 在这里还有一个惊人的大缺口
14:04 大阴线收盘在这个低点的下方
14:07 这里的反弹也低于那个低点
14:09 你必须考虑这可能是一个测量型缺口
14:12 直到它下跌到MM标位之前
14:15 多头不会买入 直到它下跌到MM标位之前
14:20 空头不会止盈
14:21 现在有一个双顶雄旗也在测试那个低点
14:25 可以看到一旦市场跌到
14:28 MM标尉买盘就出现了
14:30 空头买入止盈 多头买入开仓
14:34 空头突破良好的跟随又一根阴线
14:38 更有可能是测量型缺口
14:41 而不是捷径型缺口`,referenceImage:{src:"/charts/18c-measuring-gap-solution.webp",page:1537,alt:"第1537页课件整页讲解",kind:"课件整页"}},{prompt:"弱下跌已经持续约20根，才出现最大阴线，后面又跟随不佳。与前题相比，应警惕什么？",options:["先当新测量型缺口，只有涨过整个起跌点才改变判断","这可能是衰竭而非新一轮强跌起点，缺口也可能较快被回补","以最新最大阴线为主，暂时不考虑此前跟随和出现位置"],answer:1,explanation:"本课要求比较出现位置、此前动能和跟随；“大阴线＋缺口”不能不加背景地解释为测量型。",imageKey:null,id:"18C-K09-1",knowledgeId:"K09",knowledgeTitle:"弱跟随与衰竭型缺口",time:"14:47–17:21",pdfPages:[1539,1540],type:"理解判断",quote:`14:47 接下来我要讲的是一个波段到底是
14:50 趋势的开始还是震荡区间中的一段
14:56 这显然是下降趋势 然而跟随不是太好
15:00 它不是一个阳线 所以跟随不算太糟
15:04 但也不是阴线
15:06 在下降趋势持续了十五二十根K线后
15:09 出现了最大的阴线 然后跟随一般般
15:13 所以你不得不怀疑这是
15:15 震荡区间中的一段下跌吗？
15:18 阴线十字星阴线阳线阴线体积并不大
15:22 然后十字星、阴线、阳线两根阴线
15:25 然后十字星阴线后面的跟随不好
15:29 所以你必须怀疑这段下跌
15:32 更有可能变成震荡区间
15:35 而不是持续很长时间的下降趋势
15:44 多头一直在阴线的收盘买入压铸
15:47 不会有强下降趋势
15:52 而空头在赚快钱离场 他们在K线上方卖出
15:55 在那个高点卖出
15:57 一旦他们赚到足够的剥头皮利润
16:00 他们就买入回空头再买入止盈
16:03 所以出现了这样的K线
16:05 空头队继续下跌并没有信心
16:08 一旦他们得到一个强势的阴线
16:11 他们赶紧止盈
16:12 而不是说好耶这是一个卖收盘的下降趋势
16:15 我要继续加仓做空 因为还会继续下跌
16:19 空头没有这样的信心
16:21 糟糕的跟随连续的抛售高潮 大阴线
16:25 抛售高潮抛售高潮抛售高潮抛售高潮
16:30 抛售高潮
16:31 你必须考虑趋势可能即将衰竭变成震荡区间
16:36 而不是新一段下跌的开始
16:41 这个高点和那个低点之间有缺口
16:44 它是不是一个测量型缺口
16:47 会继续下跌到mm目标位
16:50 还是说这里的抛售更有可能只是震荡区间中的下跌波段
16:55 如果这是一个震荡区间
16:57 你就必须假设反弹会超过阻低位
17:00 而明显的阻力是这个低点
17:02 更有可能是一个捷径型缺口
17:05 下降趋势中最大的阴线
17:07 出现在20根K线之后
17:10 而且之前的下降趋势并不那么强势
17:13 这段下跌更有可能会变成震荡区间
17:18 交易员预期会有多头突破
17:21 然后变成震荡区间`,referenceImage:{src:"/charts/18c-exhaustion-solution.webp",page:1539,alt:"第1539页课件整页讲解",kind:"课件整页"}},{prompt:"为什么有时强阴线收盘后立刻出现买盘，而不是继续追空？",options:["阴线收盘后买入的只能是多头，不可能有空头","只要有买盘，之前的下跌就不曾发生","空头可能在止盈、多头可能在下部开仓，双方买入都能造成反弹"],answer:2,explanation:"课程用双方仓位行为解释区间里的反转，不把每笔买入都等同于看多建立新仓。",imageKey:null,id:"18C-K10-1",knowledgeId:"K10",knowledgeTitle:"区间预期怎样改变交易行为",time:"17:26–22:16",pdfPages:[1541,1542,1543],type:"理解判断",quote:`17:26 空头在剥头皮赚快钱离场
17:29 而多头在寻找反转的机会
17:34 可以看到多头制造了反转
17:36 一旦出现这么大的反弹
17:39 就变成了大涨大跌大的困惑
17:41 所以你必须假设市场会横盘移动
17:45 一旦开始横盘
17:46 空头就会在上沿寻找第二做空
17:49 入场点、第一入场点、第二入场点
17:52 而多头将在下沿寻找第二做多
17:55 入场点、第一入场点、第二入场点
17:59 他们剥头皮赚快钱 他们赚了就跑
18:02 因为他们不认为趋势可以走很远
18:12 一旦交易员认为下跌的幅度有限
18:15 他们就开始按照震荡区间的方法来交易
18:19 尽管目前市场仍然在一个宽的下降通道中
18:23 高点和低点仍然在不断的降低
18:25 这个低点比那个低点更低
18:27 所以它仍然是一个下降通道
18:30 但反弹的幅度足够 大多头可以赚到一些钱
18:33 每当市场在一个宽的下降通道中
18:36 交易员就会按照震荡区间一样交易他
18:40 他们高抛低吸 剥头皮赚快钱
18:42 因为这么的宽下降通道
18:45 大部分时间里面也是在震荡的
18:50 交易员通常使用较宽的止损
18:53 因为他们不确定第一次
18:55 向上反转会不会直接成功
18:58 交易员使用较宽的止损的
19:01 另一个原因是他们愿意加仓
19:03 例如如果一个交易员在这里买入
19:06 他不会把止损放在这里
19:08 他可能会说 尽管是震荡区间
19:10 但大阴线足够强势 可能还会有一段下跌
19:14 所以我把我的初始止损放在MM的下面
19:17 在这个位置附近如果有D次反转上涨的信号
19:21 我再加仓
19:22 所以他在这里买入 然后在这里或这里加仓
19:25 买入更多交易员无法真正确定
19:28 上沿和下沿的精确点位在哪里
19:30 但他们知道这个位置不会太远
19:34 所以他们愿意使用宽止损并且加仓
19:38 而且因为他们不认为涨跌的幅度会很大
19:42 所以他们赚了就跑 剥头皮赚快钱
19:53 很强的大阴线
19:55 多头会在它的收盘买入压住 这是捷径
20:00 缺口跌回来又是大阴线收盘
20:02 这是潜在震荡区间的下3分之1
20:05 多头会买入压住空头
20:07 突破失败
20:08 多头会在这个大阴线的收盘市价买入
20:11 也会在这个低点挂限价买单压住空头
20:15 突破会失败 他们会在更低的位置加仓
20:24 而空头会在反弹时卖出做空当
20:26 看到一个强势的大阳线 他们会压住
20:29 这不是一个测量性缺口
20:31 他们会压住价格跌回去 也许测试前期低点
20:35 这可能是一个双鼎雄奇
20:37 他们预期这个缺口会被填补
20:40 可以看到这个低点跌破了那个高点
20:43 他们会在反转下跌时卖出更多
20:45 这个牛祺比较弱 只有一个十字星
20:49 这个阳线跟随不好
20:51 有一些上影线 高点降低了
20:53 不是一个好的牛企
20:55 空头会在那个高点挂限价卖单
20:58 即使在这里 强势的大阳线收在最高
21:01 但是已经接近了震荡区间的上沿
21:04 一些空头会在它的最高点挂限价卖单
21:07 在这里成交 一些恐怖光头会在这个小双顶开仓做空
21:12 第一次尝试下跌
21:13 第二次尝试下跌
21:15 尤其他和他也组成了一个双顶
21:17 这又是一个较弱的牛祺在窄震荡区间的上沿
21:21 也接近整个大震荡区间的上沿
21:23 交易者会在那个阳线的上方限价卖出
21:26 也会在这个阴线的下方用突破丹麦
21:29 或者在那个阴线的下方卖出
21:32 压住多头 突破的尝试会失败
21:36 当市场跌到新低时
21:38 空投没有继续抛售更多 反而在止盈
21:44 他们在大阴线的收盘 在新堤买入止盈
21:49 新低空头止盈 大阴线收在最低 空头止盈
21:54 不认为会有持续的下跌趋势
21:57 而多头会做相反的事情
22:00 他们知道空头在止盈
22:02 他们知道这是强下降趋势的概率很低
22:05 记住我的80%法则
22:08 如果你看到一个震荡区间
22:11 并且你看到大阳线尝试突破
22:14 或者大阴线尝试突破
22:16 80%的概率它会失败`},{prompt:"一段强突破后，低点连续抬高、回调很浅。面对“最终可能转为区间”的预期，应怎么做判断？",options:["先承认当前强势延续证据，不能因为未来可能成区间就立刻按上沿反做","只要知道趋势最终会结束，就应无视当前强势","只要有一根阴线，所有强势证据立刻失效"],answer:0,explanation:"课程把当前窄通道与未来区间过渡分开。强突破有延续预期，不代表它永不改变。",imageKey:null,id:"18C-K11-1",knowledgeId:"K11",knowledgeTitle:"强突破和微通道",time:"22:19–23:21",pdfPages:[1544],type:"理解判断",quote:`22:16 80%的概率它会失败
22:19 并反转强势的多头突破
22:23 然后是高二牛气
22:26 高一高二连续的阳线体积越来越大
22:32 全都收在高位连续上涨五根K线没有回调
22:37 这里一根
22:38 然后三根 然后这里再一根 总共5根K线
22:41 5根K线的上涨微通道 即使有这根阴线
22:45 下方仍然会有更多买盘压住
22:48 至少还会再上涨一点
22:51 也许在这里大概率会继续上涨
22:57 所以最好只考虑做多 这么强的多头突破
23:02 大概率会上涨到某个mm目标位
23:05 也许基于突破的高度
23:07 从第一根K线的开盘价到最后
23:10 一根K线的收盘价往上翻一倍
23:12 到这里强势的多头突破回调可能会进入通道
23:18 最后再变成震荡区间
23:21 急速变通道的上涨趋势`},{prompt:"图中绿色通道之后，连续大阳线减少、反向K线增多。哪种观察最有用？",options:["只要出现过绿色上升通道，就永久只看涨","比较前后跟随和双向交易是否增加，判断是否正在失去趋势优势","只要还未跌破最低点，就完全不考虑变弱"],answer:1,explanation:"这里的问题是趋势强弱在变化，不是等完全反转才承认区间早期信号。",id:"18C-K12-1",knowledgeId:"K12",knowledgeTitle:"上涨通道变弱的组合信号",time:"23:45–24:44",pdfPages:[1545],type:"图表应用",quote:`23:45 除了刚开始的突破之外
23:48 没有很多连续的大阳线
23:50 这里有两根
23:51 但之后的阳线后面都是阴线阳线小的跟随
23:56 然后几根阴线阳线、十字星阳线
24:00 但顶部有明显的上影线
24:02 这看起来像是一个最终会
24:05 变成震荡区间的上涨波段
24:08 很多回调小反转K线上方有引线大量的重叠
24:12 小的窄的震荡区间
24:14 看起来不像是一个大上涨趋势的开始
24:18 看起来像是一个会很快
24:21 变成震荡区间的上涨波段
24:24 事实也是如此 上涨通道雄起
24:27 75%的概率会被向下跌破
24:31 急速回调通道很可能会演变成一个震荡区间
24:36 市场周期强势的多头突破上涨通道
24:40 然后是震荡区间
24:41 然后市场再决定到底是
24:44 恢复上涨还是反转下跌？`,image:{src:"/charts/18c-weakening-bull.webp",solutionSrc:"/charts/18c-weakening-bull-solution.webp",page:1545,alt:"绿色通道及其后续K线的变化"}},{prompt:"本课列举的多头测量目标依据有哪些？",options:["突破段高度、第一段与第二段等长，以及相关缺口结构","只要碰到任意画出的线，就能保证反转","只根据最新阴线长度，忽略之前突破段"],answer:0,explanation:"课程给出数种测量方法，并强调通道很窄、回调短浅时仍主要顺势；目标是观察区域，不是必反点。",imageKey:null,id:"18C-K13-1",knowledgeId:"K13",knowledgeTitle:"测量目标与浅回调限制",time:"24:53–27:49",pdfPages:[1546],type:"理解判断",quote:`24:53 我说过 当你看到一个这样的多头突破时
24:57 我寻找的第一件事就是基于K
24:59 线实体部分大小的mm标位
25:02 从第一根K线的开盘价或者第一根K线的
25:06 最低点到最后一根K线的收盘价往上翻一倍
25:10 你也可以看第一段第二段的MM第一段回调
25:14 第二段每当你看到多头突破
25:18 然后回调 然后进入通道
25:20 你必须考虑可能会有三次向上的推动
25:23 123然后进入震荡区间
25:26 然而这里大阳线突破之后有跟随
25:29 然后仔细看这根K线
25:32 这根K线的低点大约在那根K线的高点附近
25:36 这里看不清到底有没有重叠
25:38 但无论如何这是一个缺口 至少是实体缺口
25:42 因此大概率会有向上的MM这根
25:45 K线可能成为一个测量型缺口
25:47 也许会得到一个更大的三推上涨
25:51 123也许是一个嵌套式的三推楔形
25:56 123 然后1234目标位是
25:59 基于第一根K线的开盘价到突破的最后
26:03 一根K线的收盘价
26:05 可以看到在那个位置有一些多头止盈
26:10 第一段第二段第一段多头突破
26:13 然后从回调的最低点往上
26:16 第二段那个位置有一些多头在止盈
26:19 激进的空头也可能在那里开仓做空
26:23 但是当回调幅度这么小 而且只持续一两根K线的时候
26:28 最好只做多不做空
26:30 尝试形成三推楔形顶 123注定失败
26:37 楔形顶被向上突破
26:39 然后回调完美回测了这个突破点
26:42 然后达到了MM目标位
26:44 注 失败的楔形反转会去到反向的MM目标
26:48 当价格达到MM目标位的时候
26:50 看看发生了什么 多头在止盈
26:53 也许也会有空头开仓做剥头皮交易
27:01 在上涨通道中 特别是窄上涨通道中
27:04 当回调非常小的时候 最好只考虑买入做多
27:08 而多头可以做波段交易
27:11 也可以做剥头皮交易
27:13 在那个阴线的下方是一个好的买点
27:16 压住空头的反转尝试会失败
27:18 又上涨了两根K线 尽管是一根不错的阴线
27:22 但仍然更有可能只是突破之后的回调
27:26 连续的阳线收在最高下方 大概率买盘更多
27:30 楔形顶被向上突破
27:32 至少会有小的第二段上涨
27:34 多头会在它的收盘或它的收盘买入高一买入
27:39 突破后的回调
27:41 完美的突破回撤这个低点回调并测试了那个突破点
27:46 多头会在重新上涨时买入
27:49 正如之前所说`},{prompt:"楔形顶的反转尝试失败，反被多头强势突破，回调又很短浅，本课案例怎样处理？",options:["反转失败后，价格就只能停在原地，不可能继续趋势","留意向上的测量目标和突破回测，不能只因曾有三推就坚持逆势","只要能数出三推，后面的强突破和缺口都不再重要"],answer:1,explanation:"课中说明失败的楔形反转可去到反方向的测量目标，同时强调浅短回调的窄上涨通道仍以做多为主。",imageKey:null,time:"25:20–27:08",id:"18C-K13-2",knowledgeId:"K13",knowledgeTitle:"测量目标与浅回调限制",pdfPages:[1546],type:"变式辨析",quote:`25:18 然后回调 然后进入通道
25:20 你必须考虑可能会有三次向上的推动
25:23 123然后进入震荡区间
25:26 然而这里大阳线突破之后有跟随
25:29 然后仔细看这根K线
25:32 这根K线的低点大约在那根K线的高点附近
25:36 这里看不清到底有没有重叠
25:38 但无论如何这是一个缺口 至少是实体缺口
25:42 因此大概率会有向上的MM这根
25:45 K线可能成为一个测量型缺口
25:47 也许会得到一个更大的三推上涨
25:51 123也许是一个嵌套式的三推楔形
25:56 123 然后1234目标位是
25:59 基于第一根K线的开盘价到突破的最后
26:03 一根K线的收盘价
26:05 可以看到在那个位置有一些多头止盈
26:10 第一段第二段第一段多头突破
26:13 然后从回调的最低点往上
26:16 第二段那个位置有一些多头在止盈
26:19 激进的空头也可能在那里开仓做空
26:23 但是当回调幅度这么小 而且只持续一两根K线的时候
26:28 最好只做多不做空
26:30 尝试形成三推楔形顶 123注定失败
26:37 楔形顶被向上突破
26:39 然后回调完美回测了这个突破点
26:42 然后达到了MM目标位
26:44 注 失败的楔形反转会去到反向的MM目标
26:48 当价格达到MM目标位的时候
26:50 看看发生了什么 多头在止盈
26:53 也许也会有空头开仓做剥头皮交易
27:01 在上涨通道中 特别是窄上涨通道中
27:04 当回调非常小的时候 最好只考虑买入做多
27:08 而多头可以做波段交易`},{prompt:"上涨通道里出现越来越连续的阴线，反弹也变弱，空头的行为如何升级？",options:["只要还有一个更高低点，空头不可能用突破单获利","订单类型变化与价格强弱完全无关","从前高附近限价短线，逐步转向更主动的市价或突破卖出"],answer:2,explanation:"课程用卖压逐步增强解释行为转变，而不是把整个通道里的反向交易都看成同一种强度。",imageKey:null,id:"18C-K14-1",knowledgeId:"K14",knowledgeTitle:"反向交易力量的升级",time:"27:55–30:39",pdfPages:[1547,1548],type:"理解判断",quote:`27:55 空头也看到了这个急速变通道的上涨趋势
28:00 是他们知道最终大概率会有一个下跌波段
28:03 然后市场进入震荡区间
28:05 所以在某个时刻空投会开始寻找做空的机会
28:09 最初他们不会用突破卖单做空
28:12 因为通道太窄
28:13 回调太小 筑跌幅太小 不足以用突破单引
28:17 然而他们会开始在前期
28:19 的高点挂限价卖单做空
28:22 例如在这里第一个红色框框
28:24 然后他们会在这个高点
28:26 挂限价卖单在这里成交
28:28 他们会使用较宽的止损
28:30 并且在更高的价格加仓卖出
28:33 他们也会在大阳线的收盘卖出做空
28:36 这里和这里虽然我没有在课件上标记出来
28:39 压铸大阳线后面会回调
28:42 最初空头只是在寻找剥头皮交易的机会
28:45 市场仍然是单边上涨
28:47 并且处于一个相当窄的通道之中
28:50 但一些空头会做空 使用较宽的止损
28:53 并且逢高加仓
28:54 压住上涨通道 很快会演变成一个震荡区间
29:03 连续三根阴线回看左边的K线
29:06 上次看到连续三根阴线是什么时候？
29:10 没有看到过三次向上推动
29:13 123打到MM标位附近
29:16 许多空头开始压住这些牛骑会失败
29:19 押注市场可能已经来到了震荡区间的上沿
29:24 所以当他们看到三根阴线时
29:26 他们会在前一根K线的高点挂限价卖单
29:30 他们的订单会在这里成交
29:33 同样他们需要使用较宽的初始止损
29:36 开始他们在前期高点挂单卖出做空
29:39 直到某个时候一旦他们开始看到连续的阴线
29:43 这里有三根阴线
29:45 他们会开始在阴线的高点上方卖出
29:48 压住价格无法达到新的高点
29:50 至少会有一个小的第二段下跌
29:55 随着抛售变得更强 空投变得更激进
30:00 线后面有跟随的K线
30:01 空头会直接在它的收盘市价卖出
30:04 他们会在这根运线的低点下方卖出
30:08 多头尝试反转上涨 但只是小反弹变成更低的高点
30:12 空头会在那根K线的下方卖出
30:15 压住下跌波段 会继续两段小的上涨 一回调2
30:20 空头会在那根K线的低点下方卖出
30:23 市场正在变成一个下降趋势
30:26 还是单边上涨吗？
30:28 你甚至可以说现在是单边下跌
30:31 因为很可能会再跌一些
30:33 然而一旦你开始看到四五根连续的阴线
30:36 市场可能已经进入单边下跌了
30:39 而且至少还会再跌一些`},{prompt:"价格仍在更大上涨的重要低点上方，但当前图已连续四五根阴线。能否只用“上面仍是回调”否认当前卖压？",options:["不能，当前周期的方向与较高周期的背景可以不同","不能，因此任何周期都必须立即确认下降趋势","能，只要不破大低点，所有周期都只能单边上涨"],answer:0,explanation:"本课在这个位置明确区别两个时间级别。承认当前卖压，不等于确认更大级别已反转。",imageKey:null,id:"18C-K15-1",knowledgeId:"K15",knowledgeTitle:"当前周期和较高周期",time:"30:42–31:49",pdfPages:[1548,1549],type:"理解判断",quote:`30:42 目前价格还在这个重要的低点上方
30:45 如果你想做反转
30:47 你可以说这只是这个上涨趋势的回调
30:51 是50%回调
30:53 因此市场仍然是上涨趋势
30:56 在较高时间周期的K线图上确实是这样
31:00 然而在这个时间周期 目前已经变成了单边下跌
31:04 所以如果你在交易这张K线图
31:06 我认为做空是可以压住 至少会再跌一些
31:10 三个做多信号K123
31:12 其中两个被触发 对于空头来说
31:15 这是一个离场的好地方
31:17 多头会在这里开始寻找买入的机会
31:21 压住这是50%回调压铸
31:24 接下来会有震荡区间中的
31:27 上涨波段强势的空头突破
31:30 然而后续对空头来说非常糟糕
31:35 9根K线的上涨
31:36 微通道连续上涨
31:38 9根K线没有回调这个低点 没有跌破那个低点
31:42 每根K线的低点都在抬高
31:45 直到这根K线它跌破了前一根K线的低点
31:49 9根K线的上涨微通道空头突破被反转`},{prompt:"一次强反转后，反弹在前高附近停滞，随后频繁回调、有上影且没有连续大阳线。应怎样更新判断？",options:["起初强反转一旦出现，之后的弱跟随不影响判断","只要仍有阳线，所有前高阻力都不再相关","开始怀疑它只是大区间中的上涨波段，而不是只保留起初的强反转印象"],answer:2,explanation:"课程反复检查“现在”的跟随，背景也包括左边大区间及前高，不是只记起点那一段很强。",imageKey:null,id:"18C-K16-1",knowledgeId:"K16",knowledgeTitle:"前高附近停滞的背景",time:"31:59–35:59",pdfPages:[1549,1550,1551],type:"理解判断",quote:`31:59 在较高时间周期的K线图上
32:02 这是突破急速上涨这根大阳线也是一次急速上涨
32:07 然后回调进入通道
32:09 这个急速变通道是一个强上涨趋势的开始
32:14 还是说只是震荡区间中的一大段上涨？
32:21 大阳线突破市场尝试在这里
32:25 注定尝试形成高点降低的双底
32:29 然而大阳线向上突破缺口保持开放
32:32 这里的回调维持在那个低点的上方
32:36 可能会想上去到某个M目标位
32:39 无论如何 这个突破和背景足够好
32:43 让交易者相信至少还会再涨一些
32:53 我总是在看背景
32:54 我所说的背景是指左边的K线市场
32:58 是否已经处于一个大的震荡区间
33:02 趋势是否正在接近支撑或阻力
33:05 这看起来像一个强上涨趋势吗？
33:08 是否有连续的大阳线收在最高
33:10 还是说阳线的顶部有没有上影线？
33:14 阳线后面的跟随是阴线吗？
33:16 是否有很多小十字星？
33:18 如果是这样 即使它仍然处于上涨趋势中
33:22 它可能很快就会演变成一个震荡区间
33:28 它是否在前期高点附近停滞这里
33:32 然后是这里
33:34 如果是这样
33:35 这增加了趋势变成震荡区间的概率
33:46 令人失望的上涨
33:47 已经上涨了20或30根K线
33:51 却没有上涨多少距离现在
33:53 出现了一个相当深的回调
33:56 没有连续的大阳线
33:58 每一两根K线就有14回调
34:00 在上涨过程中有很多阴线
34:03 这里的回调在这个通道中相当深
34:06 这都是震荡区间的价格行为
34:09 使得这个上涨通道最终会成为震荡区间的一部分
34:13 在接下来的大约30根K线中
34:16 它是震荡区间的一部分
34:18 如果这是五分钟K线图
34:21 这是一个大约4小时的震荡区间
34:26 这个反弹有三根连续的阳线
34:30 但他们是收在最高的大阳线吗？
34:33 不是 它们是相对较小的阳线
34:36 这一根收在最高
34:38 但这两根有上影线 让我看到他们
34:41 然后又看到又一次多头突破
34:44 阳线的体积也不是很大 没有强势的跟随
34:47 尝试向上突破 但是有上影线
34:50 然后是一根阴线 尽管明显在上涨
34:53 但趋势很弱
34:55 因此它很可能会是震荡区间中的一个上涨波段
35:00 而不是一个大上涨趋势的开始
35:05 正在突破左边最高的高点
35:08 但是看看突破之后发生了什么？
35:11 大阴线收在最低点 低于前一根K线
35:15 这不是强趋势的表现
35:18 所以当我看到这样的上涨趋势时
35:21 它很快会成为震荡区间的一部分
35:25 没有连续的大阳线 阳线的体积很小
35:29 每隔几根K线就有回调很多
35:32 小反转一些 反转相当大 持续很多K线
35:36 这看起来不像一个上涨趋势
35:40 更有可能是即将成为震荡区间的一部分的上涨波段
35:45 确实在上涨 但是之后当你回看这里
35:49 你会说这只是震荡区间中的一个上涨波段
35:53 这是震荡区间中的一个下跌波段
35:56 震荡区间中的一个上涨波段
35:59 事实也确实如此`},{prompt:"高低点仍降低，但通道中有大反弹、很多阳线和长下影，如何区分于强下降？",options:["只要反弹出现四根阳线，就确认所有周期已转多","只看降低的低点，就认定任何反弹都无法交易","保留下降结构，同时承认双向交易强，可能按区间内下跌波段理解"],answer:2,explanation:"结构方向与趋势强度是两件事。课程专门把这类宽通道与更干净的连续大阴线作比较。",imageKey:null,id:"18C-K17-1",knowledgeId:"K17",knowledgeTitle:"宽下降与双向控制",time:"36:04–40:51",pdfPages:[1552,1553,1554,1555],type:"理解判断",quote:`36:04 相当宽的下降通道
36:09 这个反弹大约有15根K线
36:12 这个反弹有四根连续的阳线
36:14 但市场仍在制造更低的高点和低点
36:18 记住宽下降通道经常会暂时处于单边上涨
36:22 在这里也许市场是单边上涨
36:25 也许这里低点抬高之后会有第二段上涨
36:30 大多数时候 当市场处于宽通道时
36:34 它也处于震荡区间
36:36 正因为如此 交易者会高抛低吸
36:39 剥头皮赚快钱
36:40 就像在震荡区间里面一样下跌
36:46 但没有连续的大阴线
36:48 也许你想说 老师这里明明有一堆阴线
36:51 那么连续的大阴线在哪里？
36:54 阴线、阳线、小阴线、阳线、阴线、十字星阳线
36:58 市场正在昨天的区间内横盘整理
37:02 这更有可能是一个最终会
37:05 变成震荡区间的下跌波段
37:11 非常好的反转 K线有跟随
37:14 但仍然低于这个小双顶
37:18 这增加了市场只是在测试这个高点的可能性
37:22 可能只是下降宽通道或者
37:25 震荡区间中的一段上涨
37:36 对于空头来说
37:37 这是大双顶里面的一个小双顶
37:41 高点降低观察向下的反转
37:43 大阴线糟糕的跟随两根阴线
37:46 然后是阳线 阳线然后是十字星
37:50 这些K线的底部有长下影线
37:53 看起来像是要强势跌破双顶的颈线
37:57 然后大幅下跌吗？
37:59 还是说说这看起来像一个最终
38:02 会变成震荡区间的下跌波段
38:04 跟随很糟糕的下降趋势
38:07 价格目前仍然在起涨点的上方
38:10 这大概率是一个即将变成震荡区间的下跌波段
38:14 也可能是一个牛皮
38:16 所以这可能是多头反转
38:18 然后深度回调 然后趋势恢复向上
38:22 无论如何
38:23 这看起来不像是一个强势的下降趋势
38:28 可以看到接下来的情况 大跌大涨大困惑
38:33 这通常意味着震荡区间大幅上涨和非常深的回调
38:38 很可能是震荡区间
38:43 这是欧元对美元的五分钟K线图
38:49 你可以在上沿和下沿划线
38:52 价格跌破了第一条线
38:54 所以你在反转上涨时再画一条线
38:57 这里有两根不错的阳线 但接着是大阴线
39:01 然后又是两根阳线 但上影线很长
39:04 正好在那个高点收盘
39:06 为什么不能突破它？
39:08 然后又是大阴线 这里有一根强势的大阳线
39:12 结果后面又是阴线
39:14 然后几根阳线 几个十字星阳线
39:17 上影线很长的阳线 看起来一个强势的上涨趋势
39:21 正在演变成弱上涨趋势 一个相当宽的上涨通道
39:27 这可能很快会变成震荡区间
39:30 这个上涨波段大概率即将会变成震荡区间
39:40 可以看到接下来的行情强
39:44 下降趋势有一些反弹仍然
39:48 是不错的下降趋势
39:50 但看看现在发生了什么阴线
39:53 然后是两根阳线 阴线阳线
39:56 三根阴线刚刚突破创新低就反转
40:00 来回的反转 之前是强下降趋势
40:03 现在变成了较弱的下降趋势
40:06 看起来正在演变成一个震荡区间
40:09 大概率不会再下跌太多了 会先横盘整理
40:14 测试这些前期的高点下降通道
40:18 但通道内有很多双向交易 很多反转
40:23 缺乏连续的强势大阴线
40:27 下降通道牛企有75%的概率
40:30 在某个时候你会看到多头突破
40:33 事实上趋势最终被反转了 突破了下降趋势线
40:38 然后是低点抬高的大反转
40:41 整个反弹虽然很强势
40:43 但仍然低于那个最高点
40:46 大概率最终它还是只是整个
40:48 大震荡区间中的上涨波段
40:51 现在下结论还为时过早`},{prompt:"窄下降已持续很久，末端十字星增多并开始较长反弹，是否仍可只用“窄通道很强”解释？",options:["可以，只要通道窄，持续时间和十字星都无关","不应，因此只要持续20根就保证立刻大涨","不应，时间和动能变化也可能提示衰竭，先关注横盘或反向小波段"],answer:2,explanation:"本课把长时间窄通道的高潮嫌疑与双向交易增加结合起来；不能仅靠根数预测必然反转。",imageKey:null,id:"18C-K18-1",knowledgeId:"K18",knowledgeTitle:"持续很久的窄通道也可能衰竭",time:"40:54–42:37",pdfPages:[1556],type:"理解判断",quote:`40:51 现在下结论还为时过早
40:54 强势的空头突破连续四根线收在最低
40:59 但是看看这里发生了什么 开始看到十字星
41:03 并且开始在阴线后看到阳线
41:06 空头尝试再次变强 但反弹了6根K线
41:10 然后是进入窄震荡区间
41:13 空头不再愿意追空
41:19 相当窄的通道
41:20 但有很多小十字星持续20根或
41:24 更多K线的窄通道有抛售高潮的嫌疑
41:28 尤其是当这么多K线都是十字星时
41:32 可能不会再下跌太多
41:34 而且可能很快会出现多头突破
41:36 然后变成震荡区间
41:38 这看起来像是震荡区间的价格行为
41:42 尽管这是下降趋势的延续
41:44 但空头正在失去动力 他们正在失去动能
41:48 开始看到很多小的横盘K线
41:51 这是下降通道正在减弱的迹象
41:54 市场传递了什么信息？
41:56 当你看到一个正在减弱的通道时
41:59 这很可能是震荡区间的早期阶段
42:07 70%到75%的概率你会看到多头突破
42:12 然后可能会有几段的横盘或上涨
42:15 确实出现了第一段上涨突破下降通道
42:21 然后低点略微抬高
42:23 可能没有足够的K线来制造大反转
42:27 但是最后确实变成了一个相当大的反转
42:31 两段上涨 一回调2
42:33 在一个正在形成的震荡区间内 注
42:37 小心震荡区间内的第二段陷阱`},{prompt:"空头通道被强阳线向上突破后，为什么还要继续看阳线后面的K线？",options:["强反转也可能很快失去跟随，变成区间中的另一方向波段","跟随只对空头突破重要，对多头突破不重要","强反转已经排除了任何区间可能"],answer:0,explanation:"本课对多空对称检查：最初强不代表一直强，前高停滞与反向K线增加都需要更新判断。",imageKey:null,id:"18C-K19-1",knowledgeId:"K19",knowledgeTitle:"反向强波段也要检查跟随",time:"42:43–44:14",pdfPages:[1557,1558],type:"理解判断",quote:`42:40 回调并不是什么值得意外的事情
42:43 欧元对美元的五分钟图
42:45 强势的空头突破 然后进入通道
42:48 每隔几根K线就有反弹
42:52 很多反转很多阳线连续收
42:55 在最低的大阴线在哪里呢？
42:58 连续的大阴线是你在强势的
43:01 持久的下降趋势中希望看到的
43:04 但这里没有
43:05 这可能是一个即将变成震荡区间的下跌波段
43:12 强势的多头突破大概率至少会有第二段上涨
43:16 第一段在这里结束回调
43:19 第二段可能会上涨更多
43:21 但至少会有第二段上涨下降通道
43:25 有时它会变成震荡区间
43:27 有时它会被反转成上涨趋势
43:29 但是趋势在左边的高点附近停滞了
43:34 所以这大概率也只是一个
43:37 即将变成震荡区间的上涨波段
43:43 为什么多头允许空头制造出这么多阴线
43:47 这是强上涨趋势的特征吗？
43:50 还有为什么在前期的高点犹豫形成双顶阳线
43:56 后面的跟随很糟糕？
43:58 就像它是一个弱下降趋势
44:00 只是震荡区间中的一段下跌
44:03 它在开始的时候很强势 但现在变弱了
44:07 大概率也只是震荡区间中的上涨波段
44:11 可以看到空头突破了上涨通道
44:14 然后很多K线横盘整理`},{prompt:"下沿出现买盘、上沿出现卖盘，怎样区分可能的仓位来源？",options:["买入一定代表看涨，卖出一定代表看跌，无法是止盈","下沿只有多头开仓，上沿只有空头开仓","下沿可有多头开仓与空头止盈，上沿可有空头开仓与多头止盈"],answer:2,explanation:"课程用双方高抛低吸解释区间形成；动作方向与仓位目的不能混为一谈。",imageKey:null,id:"18C-K20-1",knowledgeId:"K20",knowledgeTitle:"双方止盈与新开仓共同维持区间",time:"44:22–46:24",pdfPages:[1559,1560],type:"理解判断",quote:`44:22 当交易者认为这只是
44:24 震荡区间中的一段移动时
44:26 他们确信反弹不会上涨太多
44:29 震荡区间中很快就会出现下跌的波段
44:33 他们也确信下跌波段不会走太远
44:36 很快就会出现上涨波段
44:39 他们高抛低吸 剥头皮赚快钱
44:45 多头在新高止盈 而空头在新高做空
44:50 他们卖出并且逢高加仓卖出更多
44:54 多头在新堤买入做多
44:57 而空头在新低止盈买入的多头
45:00 使用宽止损逢低加仓买入更多
45:04 做剥头皮交易
45:05 在上涨过程中卖出做空的空头使用宽
45:09 止损逢高加仓卖出更多做剥头皮交易
45:13 双方都确信 无论上涨或下跌
45:16 看上去有多强
45:18 走不了多远就会再次被反转
45:26 当空头看到有大阳线收盘在上沿附近时
45:30 他们卖出做空压住多头
45:33 无法制造连续的大阳线
45:35 让多头看到有大阴线收盘在下沿附近时
45:39 他们买入做多
45:41 压住空头的突破无法成功
45:44 不会去到下方的MM标 他们会压住这个缺口
45:48 会变成一个捷径型缺口
45:50 并且在上涨过程中会有一笔有利可图的剥头皮交易
45:56 多头和空头都在高抛低吸
46:01 所以很有可能会形成一个震荡区间
46:04 多头在低位买入建立多头仓位
46:08 空头在低位买入止盈离场
46:10 多头在高位卖出止盈离场
46:13 而空头在高位卖出建立空头仓位
46:17 这就是震荡区间内的交易方式
46:20 高抛低吸 剥头皮赚快钱
46:24 这就造成了震荡区间`}],sourceFile:"BTC PAF 18C Trading Ranges_中文 (源语言).srt"},{id:"18D",group:"交易区间",title:"窄区间、平台与限价单市场",range:"00:00–31:49",revision:"range-knowledge-v2",notes:["先判断区间是否有足够空间；过窄时，好看的信号也可能没有可用利润。","平台是多根K线具有完全相同高点或低点的窄区间，突破后还可能回穿。","限价单市场、仓位风险，以及等待确认后的胜率与盈亏比，需要连在一起理解。"],knowledgePoints:[{id:"K01",title:"窄是相对于利润空间",summary:"窄区间常有大量重叠、小实体与影线；是否窄，要比较入场后空间和所需最小目标。",time:"01:02–04:27",pdfPages:[1565,1566,1567],questionIds:["18D-K01-1"]},{id:"K02",title:"等待突破而非反复试单",summary:"窄区间中反复试反转难获利；等待明确突破与跟随后，可再观察突破或回测入场。",time:"04:31–06:12",pdfPages:[1568],questionIds:["18D-K02-1"]},{id:"K03",title:"宽窄区间中的突破单",summary:"宽区间在边缘反转后仍可能有空间；窄区间突破单往往把交易者带到不理想的中部。",time:"06:21–07:16",pdfPages:[1569,1570],questionIds:["18D-K03-1"]},{id:"K04",title:"限价单与市价单的背景",summary:"宽区间也可在边缘用限价单押注失败，强反转时也可市价入场；订单方式须结合空间和信号。",time:"07:29–09:50",pdfPages:[1571,1572],questionIds:["18D-K04-1"]},{id:"K05",title:"平台的识别",summary:"通常至少3根K线具有完全相同高点或低点；4～5根或更多相同价位的平台更重要。",time:"10:10–11:04",pdfPages:[],questionIds:["18D-K05-1"]},{id:"K06",title:"平台突破与回穿",summary:"平台像磁铁：价格可能越过平台，也可能在越过后再次回到另一边，方向和时间都不能绝对化。",time:"11:04–11:59",pdfPages:[],questionIds:["18D-K06-1","18D-K06-2"]},{id:"K07",title:"平台的时间与市场差异",summary:"平台回测并不保证当天；外汇分数点与报价源差异使完全相同价位的平台不如部分期货股票常见。",time:"12:07–16:12",pdfPages:[],questionIds:["18D-K07-1"]},{id:"K08",title:"限价单市场的含义",summary:"区间太窄，突破单卖得太低、买得太高；经验交易者可能用相反方向限价单在边缘成交。",time:"16:20–18:10",pdfPages:[1575,1576],questionIds:["18D-K08-1"]},{id:"K09",title:"不是每个窄区间都能做",summary:"即使用限价单，也要有最小空间；课程以当时ES的最小目标、平均K线和区间高度比较。",time:"18:42–20:26",pdfPages:[1577],questionIds:["18D-K09-1","18D-K09-2"]},{id:"K10",title:"限价单短线的操作与风险",summary:"窄区间利润空间小、操作多；欧元美元案例用较宽止损和准备加仓，不能被小止盈目标掩盖风险。",time:"20:35–25:02",pdfPages:[1578,1579,1580],questionIds:["18D-K10-1"]},{id:"K11",title:"均线位置只是略微优势",summary:"成熟窄区间双方接近均衡，多数K线在均线上方或下方可能略偏向一边，但不等于大优势。",time:"25:12–26:29",pdfPages:[1581],questionIds:["18D-K11-1"]},{id:"K12",title:"窄区间仍可能形成主要反转",summary:"强趋势后窄横盘中出现双顶或双底，仍需考虑主要反转；小区间不代表之后行情一定小。",time:"26:37–28:03",pdfPages:[1582,1583],questionIds:["18D-K12-1"]},{id:"K13",title:"等确认的胜率与盈亏比代价",summary:"等强突破与跟随再进场，胜率可能提高，但止损更远、剩余利润空间更少。",time:"28:09–30:40",pdfPages:[1582,1583],questionIds:["18D-K13-1"]}],questions:[{prompt:"同样几根横盘K线，为什么不能只凭屏幕上看起来扁不扁判断可交易性？",options:["还要比较区间高度、订单入场位置和最小获利目标","只要把纵轴放大，实际利润空间就增加","只要信号K线漂亮，区间再窄也有足够利润"],answer:0,explanation:"“窄”与实际可用空间有关。放大图表不会改变价格距离，漂亮信号也不会凭空创造空间。",id:"18D-K01-1",knowledgeId:"K01",knowledgeTitle:"窄是相对于利润空间",time:"01:02–04:27",pdfPages:[1565,1566,1567],type:"图表应用",quote:`01:02 有时在电视上你会听到交易者讲到死前
01:05 他们通常是在谈论日线图
01:08 一般是在这样的一个大幅下跌之后
01:11 非常大的下降趋势
01:13 然后你开始看到很多小的横盘K线
01:16 意思是如果这是一个日线图
01:19 这就代表了几个月的交易
01:21 在这里进行交易 无论是买还是卖
01:24 你都赚不到钱
01:25 最好去别的地方寻找交易机会
01:30 每当市场横盘 即使只有2或3根K线
01:35 通常是十、20或30根K线
01:38 在一个非常狭窄的区间内
01:40 我就称之为窄震荡区间
01:42 在任何时间周期上遇到这种行情
01:45 大多数交易者都不应该进行交易
01:51 假设这是一个股票的
01:53 日线图、周线图或月线图
01:56 大的下降趋势之后
01:57 开始出现大量重叠的非常明显的引线
02:01 体积小很多十字星
02:03 这是一种死前类型的K线图
02:07 我用窄震荡区间这个词
02:10 如果市场横盘超过20根K线
02:13 你应该去别的地方寻找交易机会
02:16 因为在这种行情下很难赚钱
02:22 窄震荡区间很常见
02:23 并且它们可以出现在任何品种、任何时间周期
02:27 遇到他们的时候
02:29 大多数交易者应该去别的地方寻找交易机会
02:37 股票中死前的
02:39 概念是
02:40 例如大跌后横盘
02:44 市场需要很长时间才能让
02:46 多头相信下降趋势已经停止
02:50 大约20到30根K线后
02:53 趋势反转上涨的概率变得和
02:57 趋势反转下跌的概率一样高
03:00 在这个过程中
03:01 20 30 40 50根K线
03:04 100根K线利润空间很小
03:10 没有投资回报
03:12 所以这是死前你应该去别的地方交易
03:21 一般来说 无论何时你看到一个震荡区间
03:25 你应该高抛低吸剥头皮赚快钱
03:31 如果剥头皮交易者不能
03:33 通过突破单来高抛低吸赚钱
03:36 那么就是窄震荡区间
03:38 在这里做空赚不到钱
03:41 在这里做多也没有足够的空间赚钱
03:44 这是判断窄震荡区间的一种方法
03:47 如果你看K线图发现突破单交易者赚不到钱
03:52 那么就是窄区间最好不要交易
03:57 在这里做空在这里做空在这里做空你都赚不到钱
04:02 在这里做空赚不到钱
04:04 在这里做多在这里做多在这里
04:07 做多在这里做多都赚不到钱
04:10 在这里做多
04:11 当用突破单高抛低吸赚不到钱的时候
04:18 那么就是窄区间 你不应该在这里交易
04:23 这里还有一些例子 很多看似合理的入场机会
04:27 但很少能真正盈利`,image:{src:"/charts/18d-tight-range.webp",solutionSrc:"/charts/18d-tight-range-solution.webp",page:1567,alt:"蓝色窄区间中反复重叠的K线"}},{prompt:"窄区间里多次看似合理的反转都难获利，本课倾向怎样处理？",options:["把每次小幅越线都当作已确认趋势","等待明确向上或向下突破及跟随，重新判断空间","继续增加区间内部的突破单次数，总会靠次数获利"],answer:1,explanation:"课程区别小试探与明确突破。突破初期买入较早但证据少，跟随增加后再重新评估。",imageKey:null,id:"18D-K02-1",knowledgeId:"K02",knowledgeTitle:"等待突破而非反复试单",time:"04:31–06:12",pdfPages:[1568],type:"理解判断",quote:`04:31 这是限价单市场不适合用突破单交易
04:35 因此这是一个窄震荡区间
04:38 这里也是一样
04:40 在这里不管
04:41 你做多少次交易 尝试多少次反转
04:46 都赚不到钱
04:47 不如等待明确的向上或向下的突破
04:51 然后再交易
04:52 这里有一个小突破和一些跟随
04:55 看起来像是趋势的开始
04:57 交易者会在这里开始买阳线的收盘价
05:00 或者他们会在高二买点入场
05:03 做多两段下跌 一阳线
05:05 然后二阳线之后有一些回调
05:13 一些交易者在突破时买入连续的阳线
05:16 收盘价高于过去60 70 80根K线的高点
05:21 它还不是一根收在最高的大K线
05:24 但这是突破的初期
05:26 如果你确实买入了
05:27 并且你认为这是上涨趋势的开始
05:31 那么价格就不应该回到这个突破点以下
05:38 这里有一个小三角形 三次向下推动阴线
05:43 然后有一根收在最高的小阳线
05:49 交易者可以在回调时买入
05:52 这是一个牛气向上突破回调又一根阳线
05:56 在它的高点上方一个tick买入
06:00 这就是最终发生的情况
06:02 显然你可以一路买阳线的收盘价
06:09 强势的突破 良好的跟随
06:12 很大的概率会涨到某个mm目标位`},{prompt:"图中两种区间，为什么宽区间更可能容纳边缘信号后的突破单入场？",options:["即使等到信号触发，距另一边仍可能留下足够空间","只比较反转信号形状，在宽窄区间里使用相同位置逻辑","宽区间的信号触发较晚，所以距另一边的空间反而较小"],answer:0,explanation:"区别在订单触发后的实际位置与剩余空间，而不是统一禁止所有区间里的突破单。",id:"18D-K03-1",knowledgeId:"K03",knowledgeTitle:"宽窄区间中的突破单",time:"06:21–07:16",pdfPages:[1569,1570],type:"图表应用",quote:`06:21 震荡区间这个词中包含区间这两个字
06:25 这意味着有一个上沿和一个下沿
06:28 因此有一个通道 只不过他是水平的
06:34 像所有的通道一样 他们可以非常宽
06:38 也可以非常窄
06:39 宽的意思是上沿和下沿之间有很大的空间
06:44 突破单交易者通常可以在下沿买入赚钱
06:48 然后在上沿的K线下方卖出
06:50 当区间很窄时 在阳线上方买入很难赚到钱
06:55 即使是这么的好看的阳线 最好不要交易
07:06 非常宽的区间
07:07 交易者可以在下沿的阳线上方买入
07:10 在上沿的阴线下方卖出
07:12 有足够的空间进行剥头皮交易 甚至是
07:16 波段交易`,image:{src:"/charts/18d-wide-tight.webp",solutionSrc:"/charts/18d-wide-tight-solution.webp",page:1569,alt:"蓝色较宽区间与橙色较窄区间的对照"}},{prompt:"本课是否认为所有交易区间都只能使用限价单？",options:["是，任何区间中的市价单都是定义上错误","不是，因此窄区间也应无条件追每个突破","不是，宽区间中还讨论了边缘突破单和强反转市价单"],answer:2,explanation:"课程明确分开宽窄背景，不能把对窄区间的限制扩展为所有区间的统一规则。",imageKey:null,id:"18D-K04-1",knowledgeId:"K04",knowledgeTitle:"限价单与市价单的背景",time:"07:29–09:50",pdfPages:[1571,1572],type:"理解判断",quote:`07:29 当然宽通道中交易者也可以用
07:33 限价单交易押注突破会失败
07:38 在区间下沿 当看到糟糕的做空信号
07:41 他们就买入
07:42 他们会在前期低点的下方买入
07:44 所以他们会在那个低点挂单买入
07:47 不是一个好看的雄奇实体部分是阳线
07:50 他们会在那个阳线的低点挂限价买单做多买单在这里成交
07:56 他们也会在这个低点挂单买入
07:58 压铸突破会使上沿的情况正好相反
08:03 他们预期这是区间的上沿
08:05 然后开始在K线的上方逢高卖出
08:08 他们会在这根K线的高点挂限价卖单做空
08:12 麦丹会在这里成交
08:14 他们认为这是一个很糟糕的牛骑
08:17 反转大阴线之后的一个十字星
08:20 他们会在这根K线的高点挂限价卖单做空
08:23 麦丹会在这里
08:26 成交
08:30 如果是一个宽通道
08:32 你也可以在强势反转时用试驾单入场
08:36 例如这里有一根不错的阳线
08:39 三推楔形底123
08:41 或者这个三推楔形底123
08:44 并且有一个好的信号K线
08:46 所以交易者会在他的收盘
08:49 或者他的收盘市价买入
08:51 这里也是一样急速下跌反弹通道
08:55 123不是一个特别好的做多信号K线
09:00 但反转上涨的力度很不错
09:02 大概率至少会有两段上涨 一回调2
09:06 所以交易者会在他的收盘市价买入
09:10 做空的情况正好相反
09:16 当看到一个相当强的反转下跌 而反弹很弱
09:20 很多交易者会在这根K线开始下跌的时候
09:24 市价卖出做空
09:26 他们的市价卖单可能在这里成交
09:29 可能在这里成交
09:31 这里也是一样 两段上涨之后
09:34 若做多信号K一回调当
09:37 它开始向下反转时 交易者会市价卖出
09:40 如果是一个强势的下跌波段
09:43 这里有连续三根阴线收在一半以下
09:47 他们会在阴线的收盘市价卖出
09:50 压注会下跌到区间的下沿`},{prompt:"哪些情况最符合本课“平台顶”的具体说法？",options:["至少3根、通常4～5根或更多K线高点完全相同的窄区间","两根相近高点即可，不必把平台与一般双顶区别","多次接近同一价格即可，不要求高点完全相同"],answer:0,explanation:"课程特别强调完全相同价格和多次测试；一般双顶与这种平台不能只凭相似就当作同一条件。",imageKey:null,id:"18D-K05-1",knowledgeId:"K05",knowledgeTitle:"平台的识别",time:"10:10–11:04",pdfPages:[],type:"理解判断",quote:`10:10 平台是一个窄震荡区间
10:12 其中所有的高点都在同一个价格
10:16 或者所有的低点都在同一个价格
10:22 这里有三根K线的高点完全相同
10:25 这是一个小的平台顶
10:27 这里也是一样 小的平台顶这二根K线在同一个价格
10:32 这里也是一样
10:33 我通常不会说它是平台
10:35 这里有四根K线 这是一个平台
10:38 你可以看到市场最终突破了它
10:41 这里也是一个平台
10:51 对于平台我指的是三根或
10:54 更多K线有相同的高点
10:57 如果四五根或更多K线有完全相同的高点
11:01 它就是一个更重要的平台
11:04 一个更重要的磁铁`},{prompt:"平台顶被向上突破后，能否把它当作不会再回穿的支撑？",options:["磁铁表示只会接近平台，不应出现穿越价位的测试","不能，课中同时描述突破后再跌回平台下方的倾向","上破后回踩只能停在平台上方，回穿就否定原先的平台识别"],answer:1,explanation:"课程讨论的是“突破”和“再回穿”两件事，约80%的说法也不能理解为必然或保证。",imageKey:null,id:"18D-K06-1",knowledgeId:"K06",knowledgeTitle:"平台突破与回穿",time:"11:04–11:59",pdfPages:[],type:"理解判断",quote:`11:01 它就是一个更重要的平台
11:04 一个更重要的磁铁
11:05 住磁铁及目标位会把价格吸过
11:08 群台是一个磁铁
11:10 如果市场突破了它
11:11 通常至少会回调到它的下方一点点
11:15 如果市场尝试向下跌破
11:17 通常最终会超过它的高点
11:20 当你看到一个平台3四五根K线这里
11:24 这看起来像是八根K线
11:26 有完全相同的价格 市场尝试向下反转
11:30 有80%的概率会突破那个平台的上沿
11:34 有时需要几天 有时甚至需要一周
11:38 但这么小的平台通常在当天就会突破它
11:42 如果今天没有 最晚明天就会突破
11:46 这里也有一个平台底有四根K线的低点
11:50 完全相同 因此它是一个磁铁
11:53 如果市场上涨
11:55 有80%的概率会在某个时候跌破这个平台`},{prompt:"平台底先出现反弹，随后跌破平台，再反弹回平台上方，是否与本课的磁铁逻辑矛盾？",options:["矛盾，磁铁只会让价格停在原价位不动","矛盾，平台底只允许出现向上突破","不矛盾，先越过平台和越过后回穿都属于本课描述"],answer:2,explanation:"原文用平台底和平台顶对称说明，价格会测试并穿过这个重要价位。",imageKey:null,time:"13:07–14:57",id:"18D-K06-2",knowledgeId:"K06",knowledgeTitle:"平台突破与回穿",pdfPages:[],type:"变式辨析",quote:`13:07 市场八次尝试突破这个价格
13:10 有8根K线的高点完全相同
13:14 每次涨到这里它都会下跌
13:17 下跌有80%的概率这个平台会被突破
13:22 通常不是今天就是明天
13:24 一旦突破平台的上沿
13:26 有80%的概率会回调到平台的下方
13:31 这里出现了反转
13:36 有一个四根K线的平台底
13:39 有80%的概率会跌破平台
13:42 并且有80%的概率在跌破平台
13:46 后会再次反弹到平台底的上方
13:49 可能会在今天 也可能会在明天
13:52 有时甚至会在一周后
14:07 你能在这里发现一个平台吗？
14:10 有四根K线的低点完全相同
14:14 因此有80%的概率会跌破这个低点
14:17 通常在1到2天之内 并且在跌破它之后
14:21 有80%的概率会至少回到平台底的上方一点点
14:27 这是一个窄震荡区间
14:29 因此是一个磁铁 也就是说价格会被它吸过去
14:33 通常价格必须戳破它
14:35 而跌破之后它仍然是一个磁铁
14:38 所以价格又必须向上戳破它
14:41 回到平台底的上方
14:47 即使有这么强的上涨
14:49 仍然有80%的概率价格会跌破这个平台
14:54 一旦跌破了 80%的概率
14:57 价格会再次回到平台的上方`},{prompt:"为什么不能把课程中的ES平台经验原样套到所有外汇报价图？",options:["外汇可能价位更多且不同经纪商报价不同，完全同价平台较少","因为外汇不存在任何支撑和阻力","因为平台只要被识别，就必须在当日完成回测"],answer:0,explanation:"课程同时说明市场报价差异与回测时间的不确定性；甚至有九天后才返回的平台案例。",imageKey:null,id:"18D-K07-1",knowledgeId:"K07",knowledgeTitle:"平台的时间与市场差异",time:"12:07–16:12",pdfPages:[],type:"理解判断",quote:`12:07 在外汇市场中 你很少见到完美的平台
12:11 因为分数点创造了太多不同的价格
12:15 而且价格也不完美
12:17 你这样想
12:18 如果一个普通的外汇K线图有大约50个点的振幅
12:22 单交易者现在使用的是分数点
12:27 也就是说当天从高到低
12:29 可能有500个不同的价格
12:32 如果ES的振幅是十个点的范围
12:36 那么一天只有40个价格
12:38 如果只有40个可能的价格
12:41 就更容易出现完全相同的价格
12:44 但外汇的K线图上有500个可能的价格
12:48 而且每个券商都有自己的
12:52 K线图
12:53 因此在外汇市场中出现平台的概率要小得多
12:58 所以这些平台的交易机会
13:01 在ES和股票中更重要
13:07 市场八次尝试突破这个价格
13:10 有8根K线的高点完全相同
13:14 每次涨到这里它都会下跌
13:17 下跌有80%的概率这个平台会被突破
13:22 通常不是今天就是明天
13:24 一旦突破平台的上沿
13:26 有80%的概率会回调到平台的下方
13:31 这里出现了反转
13:36 有一个四根K线的平台底
13:39 有80%的概率会跌破平台
13:42 并且有80%的概率在跌破平台
13:46 后会再次反弹到平台底的上方
13:49 可能会在今天 也可能会在明天
13:52 有时甚至会在一周后
14:07 你能在这里发现一个平台吗？
14:10 有四根K线的低点完全相同
14:14 因此有80%的概率会跌破这个低点
14:17 通常在1到2天之内 并且在跌破它之后
14:21 有80%的概率会至少回到平台底的上方一点点
14:27 这是一个窄震荡区间
14:29 因此是一个磁铁 也就是说价格会被它吸过去
14:33 通常价格必须戳破它
14:35 而跌破之后它仍然是一个磁铁
14:38 所以价格又必须向上戳破它
14:41 回到平台底的上方
14:47 即使有这么强的上涨
14:49 仍然有80%的概率价格会跌破这个平台
14:54 一旦跌破了 80%的概率
14:57 价格会再次回到平台的上方
15:03 这非常重要
15:04 因为当你看到平台 然后价格上涨
15:08 交易者会考虑逢高做空
15:11 一旦价格开始下跌
15:12 交易者也会继续卖出做空
15:15 因为他们知道跌破那个低点的概率很大
15:21 我把这个部分放大 你发现了什么？
15:25 很多K线在同一个价格
15:30 9根K线都在同一个价格
15:33 市场无法突破它 然后开始下跌
15:37 这是一个非常重要的价格
15:40 市场准确的连续测试了他九次
15:43 很大的概率市场会涨回到这个平台的上方
15:47 通常不是今天就是明天
15:49 在这个案例中
15:51 剧烈的抛售在宽通道中运行了九天
15:56 终于回到了这个平台顶 并且强势向上突破
16:00 然而有80%的概率 如果平台被突破
16:04 市场会再次回到平台以下 就像这一天一样
16:12 突破到上方 又回调到下方`},{prompt:"区间下沿，一方用突破卖单追跌，另一方在同价用限价买单成交，双方主要押注有何不同？",options:["双方都在押注强空头突破继续成功","前者押注继续跌，后者押注突破失败并反弹","订单名字不同，但方向、位置和预期完全相同"],answer:1,explanation:"限价买方可成为突破卖方的对手盘。课程不是只按订单名称分类，而是在解释反向的交易逻辑。",imageKey:null,id:"18D-K08-1",knowledgeId:"K08",knowledgeTitle:"限价单市场的含义",time:"16:20–18:10",pdfPages:[1575,1576],type:"理解判断",quote:`16:20 有时你会看到窄震荡区间
16:23 但宽度足够让限价单交易者可以赚得到钱
16:27 我所说的限价单市场就是这个意思
16:32 在窄震荡区间中不要用突破单交易
16:36 只有有经验的交易者才应该进行交易
16:40 这张图没有价格的坐标
16:43 但市场每2到3根K线就反转一次
16:46 用突破单入场很难赚到钱
16:49 在上沿的K线下方卖出
16:51 在下沿的K线上方买入
16:53 你的入场发生在区间当中3分之1的部分
16:57 这不是一个好的突破单市场
16:59 因此如果你一定要交易的话
17:02 你唯一能赚钱的方法是用限价单入场
17:05 限价单基本上就是突破单的对手盘
17:09 例如你打算在下沿的K
17:11 线下方用限价买单买入
17:14 你在空头突破的时候买入做多压铸
17:17 压铸突破会失败
17:19 而突破单交易者会在这根K线下方卖出
17:22 他们的突破卖单会在这里成交
17:25 限价单交易者正好相反
17:27 他会在那个低点挂限价买单
17:29 这里突破单交易者会在那个高点上方用突破买单买入
17:33 最终他会亏钱
17:35 而限价单交易者会在那个高点挂限价卖单做空
17:39 但市场突破那个高点
17:41 他的空单就成交了
17:43 然后他通过做空赚钱区间的下半
17:47 部分或者下面3分之1是买入区域
17:50 上半部分或者上面3分之1是卖出区域
17:54 多空双方都在做剥头皮交易
17:58 他们期待区间继续震荡而不是成为趋势
18:02 他们知道最终它会突破变成趋势
18:05 但只要市场目前还在横盘
18:08 他们就认为他会继续横盘
18:10 交易者往往会使用较宽的初始止损`},{prompt:"按本课给出的当时ES示例，最小目标4 ticks、平均K线8 ticks、区间28 ticks，这个比较说明什么？",options:["28既大于最小目标的3倍，也大于平均K线的3倍，具备讨论限价单短线的空间条件","空间比较已足以确认可获利，订单方式和入场位置不再重要","只要比4 ticks的目标大3倍，就不再需要比较平均K线"],answer:0,explanation:"这里只检验课中示例的空间，不是给今天所有品种设固定参数。即便满足空间条件，也仍需背景与执行。",imageKey:null,id:"18D-K09-1",knowledgeId:"K09",knowledgeTitle:"不是每个窄区间都能做",time:"18:42–20:26",pdfPages:[1577],type:"理解判断",quote:`18:42 所有的窄震荡区间都能用限价单交易吗？
18:46 答案否定的 需要满足一些最低要求
18:50 有时震荡区间太窄
18:52 即使用限价单也无法赚钱
18:55 大多数时候交易者在大多数K线
18:58 至少有剥头皮交易的大小时才会交易
19:02 这是ES的五分钟K线图
19:05 一般来说很多交易者不会进行交易
19:09 除非大多数K线至少有四个text的高度
19:13 这是剥头皮交易的最小目标
19:15 他们还希望整个区间的高度从上沿到下沿
19:20 至少比剥头皮的最小目标大三倍
19:23 剥头皮的最小目标是一个点
19:26 所以他们希望区间的高度至少有三个点柱
19:30 这是2018年
19:32 当时ES只有2000点不到
19:34 他们还希望区间的高度
19:36 大约是K线平均大小的三倍
19:39 这里K线的平均大小有
19:41 四五个tips的高度
19:43 他们希望区间的高度是它的三倍
19:50 这里区间的高度是27个
19:53 Tips这是一个窄的区间
19:55 可以看到有6根横盘K线
19:58 这里三根 这里三或4根 这里三根
20:01 市场每2到3根K线就反转一次
20:04 然而区间的高度有七个点 28个
20:09 所以这比剥头皮的最小目标
20:11 四个tips大三倍不止
20:13 这里的K线的平均大小是八个
20:16 tix 28个tips也是它的
20:19 三倍以上
20:20 因此 尽管这
20:21 是一个窄震荡区间
20:24 许多有经验的交易者愿意
20:26 用限价单做剥头皮交易`},{prompt:"本课谈到区间高度约为最小目标或平均K线的3倍时，应该怎样使用？",options:["所有市场一律用一个点止盈、三个点区间","作为课程特定案例中的相对空间比较，不能把当时点数当作永久标准","只要能找到限价单，就不需要任何最低空间"],answer:1,explanation:"课件提供相对比较，并说明“最小目标”及“平均K线”两个参照；价格、品种和背景需要对应。",imageKey:null,id:"18D-K09-2",knowledgeId:"K09",knowledgeTitle:"不是每个窄区间都能做",time:"18:42–20:26",pdfPages:[1577],type:"变式辨析",quote:`18:42 所有的窄震荡区间都能用限价单交易吗？
18:46 答案否定的 需要满足一些最低要求
18:50 有时震荡区间太窄
18:52 即使用限价单也无法赚钱
18:55 大多数时候交易者在大多数K线
18:58 至少有剥头皮交易的大小时才会交易
19:02 这是ES的五分钟K线图
19:05 一般来说很多交易者不会进行交易
19:09 除非大多数K线至少有四个text的高度
19:13 这是剥头皮交易的最小目标
19:15 他们还希望整个区间的高度从上沿到下沿
19:20 至少比剥头皮的最小目标大三倍
19:23 剥头皮的最小目标是一个点
19:26 所以他们希望区间的高度至少有三个点柱
19:30 这是2018年
19:32 当时ES只有2000点不到
19:34 他们还希望区间的高度
19:36 大约是K线平均大小的三倍
19:39 这里K线的平均大小有
19:41 四五个tips的高度
19:43 他们希望区间的高度是它的三倍
19:50 这里区间的高度是27个
19:53 Tips这是一个窄的区间
19:55 可以看到有6根横盘K线
19:58 这里三根 这里三或4根 这里三根
20:01 市场每2到3根K线就反转一次
20:04 然而区间的高度有七个点 28个
20:09 所以这比剥头皮的最小目标
20:11 四个tips大三倍不止
20:13 这里的K线的平均大小是八个
20:16 tix 28个tips也是它的
20:19 三倍以上
20:20 因此 尽管这
20:21 是一个窄震荡区间
20:24 许多有经验的交易者愿意
20:26 用限价单做剥头皮交易`},{prompt:"课程外汇案例目标只有约10点，为什么不能因此认为它是低风险、容易的新手交易？",options:["因为限价单只会改善价格，不会出现亏损","因为止盈10点就能把最大亏损也限制在10点","案例可能承担30～50点止损并准备加仓，利润小不等于风险小"],answer:2,explanation:"这些数字是原课案例，不是当前推荐参数；课程借此解释大多数交易者不适合这种操作。",imageKey:null,id:"18D-K10-1",knowledgeId:"K10",knowledgeTitle:"限价单短线的操作与风险",time:"20:35–25:02",pdfPages:[1578,1579,1580],type:"理解判断",quote:`20:35 大多数交易者不应该在窄区间里面交易
20:39 利润空间很小 需要很多操作
20:42 而且一旦失误就会亏钱
20:48 如果区间很窄 但至少足以进行剥头皮交易
20:52 一些交易者会用限价单高抛低吸
20:59 再次强调窄区间里面不应该用突破单入场
21:03 因为市场不会走很远
21:05 无法让你做波段交易
21:08 甚至不足以做剥头皮交易
21:11 所以你不想在窄区间里面追涨杀跌
21:14 因为你必须假设每一段上涨或
21:17 下跌都会在几根K线之内被反转
21:24 又一个窄震荡区间 很多反转上涨或下跌
21:28 没几根K线很快就被反转了
21:31 阴线后面的跟随都是阳线
21:33 两根阴线后面跟随是阳线
21:38 多头和空头都认为不会有大幅的上涨或下跌
21:43 市场在横盘
21:44 很多重叠的K线 明显的引线
21:48 阳线后面跟着阴线 阴线后面跟着阳线
21:52 这里这里这里和这里不会
21:55 出现大幅的上涨或下跌
21:58 多头会在下半部分的K线下方逢低买入
22:02 压住空头突破会失败
22:04 然而因为他们知道市场不会涨得太高
22:08 所以他们赚了就跑
22:10 剥头皮赚快钱 他们在前期的低点买入
22:14 当市场下跌的时候
22:16 他们在那个低点挂限价买单
22:20 买单在这里成交 市场在下跌
22:23 他们在那个低点挂单买入 订单在这里成交
22:27 而空头做的正好相反 当市场开始上涨
22:31 空头会考虑在前期的高点
22:33 上方卖出他们的限价卖单
22:35 在这里成交 他们也会在这个前期的高点挂限价卖单
22:40 订单会在这里成交
22:41 他们也会在这里挂限价卖单
22:44 价格没有涨到那里
22:47 多空双方都在做剥头皮交易
22:50 因为他们不相信市场会走得足够远
22:53 所以他们用较宽的初始止损
22:56 并且做好加仓的准备
22:58 当他们入场的时候
23:00 他们并不知道市场会不会立刻反转
23:03 但他们确定至少不会跌的太多
23:06 例如一个在这里买入的多头
23:09 如果他没有在这里止盈
23:11 他会在下方买入更多压铸市场跌不了多少了
23:15 并且很快就会反转让
23:17 他可以赚钱离场
23:24 这是欧元兑美元的五分钟K线图
23:30 如果你打算赚剥头皮的最小目标
23:33 你的止损应该放多大？
23:35 在交易外汇的时候
23:37 一般来说最少要赚十个点
23:41 如果你在这样的限价单市场中用限价单交易
23:46 在震荡区间通常你必须冒30个点的风险
23:50 有时甚至多达50个点
23:52 并且你必须愿意加仓
23:54 大多数交易者做不到这一点
23:56 所以他们最好不要在这种行情中
24:03 例如一个空头可能会在这个高点挂卖单
24:07 在这里成交
24:08 然后在上面十个点的地方继续挂卖单
24:11 准备加仓卖出更多止损放在第一
24:14 入场点的上方30个点的位置
24:17 当价格跌回它的第一个入场点时
24:20 初始仓位打平 离场加仓的部分赚钱止盈
24:33 他可能会在这里买入
24:35 并且他愿意在下方十个点买入更多
24:38 市场没有继续下跌十个点
24:41 所以他没有加到仓
24:47 他们赚的是剥头皮交易的最小目标
24:50 区间很窄 高度只有40个点
24:53 大多数剥头皮交易者的目标就是赚十个点
24:57 看起来有很多机会 好像很容易
25:00 但实际上很难做到
25:02 大多数交易者不应该这样做`},{prompt:"窄区间多数K线在20周期均线上方，本课如何描述多头优势？",options:["只看之前原趋势，不把均线位置作为细微优势的线索","可能略高，但若优势很大，市场就不应继续窄幅横盘","多数K线在均线上方就按强上涨处理，不再适用接近均衡的判断"],answer:1,explanation:"均线位置提供细微背景，而不是把均衡区间瞬间改判成强趋势。",imageKey:null,id:"18D-K11-1",knowledgeId:"K11",knowledgeTitle:"均线位置只是略微优势",time:"25:12–26:29",pdfPages:[1581],type:"理解判断",quote:`25:12 每当你看到一个窄震荡区间
25:14 你应该告诉自己
25:16 多头和空头都没有很大的优势
25:19 如果某一方有优势
25:20 市场就不会处于一个窄震荡区间
25:24 而是会有上涨或下跌的趋势
25:26 当市场处于窄震荡区间时
25:29 多头突破的概率是50%
25:32 空头突破的概率也是50%
25:36 在震荡区间
25:37 多头看到某种底部一个低点降低的双顶
25:42 而空头看到的是双鼎雄奇
25:44 还不到20根K线
25:46 所以多头和空头的概率不完全相等
25:50 空头仍然有一些概率上的优势
25:53 但不多 如果他们有很大的优势
25:56 市场就不会窄幅的横盘十根K线
25:59 而是会立刻像这样下跌
26:02 这里情况正好相反
26:04 反转上涨大多数K线在EMA20的上方
26:09 这是一个窄震荡区间
26:12 所以空头突破的概率几乎
26:14 与多头突破的概率一样高
26:17 但因为大多数K线在ema上方
26:20 并且行情已经反转
26:22 概率稍微偏向多头 但不是很大的优势
26:26 如果他们有很大的优势 市场就不会横盘
26:29 它会很强势的上涨`},{prompt:"强上涨后窄横盘出现双顶，为什么不能因区间小就忽略它？",options:["只要出现双顶，就确认后面不会再创新高","窄区间里的双顶必然比大区间里的双顶胜率高","小区间也可能出现大反转结构，之后波段不一定小"],answer:2,explanation:"本课区分结构潜力与成功概率：可能走大波段，但早期风险小往往伴随较低概率。",imageKey:null,id:"18D-K12-1",knowledgeId:"K12",knowledgeTitle:"窄区间仍可能形成主要反转",time:"26:37–28:03",pdfPages:[1582,1583],type:"理解判断",quote:`26:37 这是值得注意的事情
26:39 非常强的上涨趋势回调 然后上涨趋势恢复
26:45 这里有8或9根连续的阳线
26:48 然后进入了一个窄震荡区间
26:51 然而在窄震荡区间中出现了一个小双顶
26:55 高点略微降低
26:56 这实际上是一个高点
26:58 降低的双顶大反转的模式
27:01 就像所有的大反转一样
27:03 有40%的概率市场会走出一个下跌波段
27:08 一些空头会抓住这个机会
27:10 他们会在双底的低点下方做空
27:13 也就是在这个K线下方一个tick挂突破卖单
27:17 订单会在这里被触发成交
27:20 一些空头更喜欢在阴线下方卖出
27:23 所以他们会在这根阴线下方一个tick挂突破卖单
27:28 订单会在这里被触发成交
27:30 这看上去不像是一个特别好的机会
27:34 然而每当你看到强趋势之后
27:37 是一个窄震荡区间
27:38 你就必须考虑双顶大反转的可能性
27:42 如果是一个下降趋势
27:44 你就必须考虑低点抬高的双底大反转的可能性
27:50 即使是窄震荡区间
27:52 你也可以得到一个巨大的波段
27:54 如果反转下跌的话 通常会是两段下跌
27:58 而且第二段通常比
28:00 第一段大
28:01 第一段下跌
28:03 回调 第二段下跌`},{prompt:"双顶刚形成时入场与等强下跌确认后入场，哪种比较符合本课？",options:["等待确认可以同时提高胜率和盈亏比，止损仍只放最近一根K线","早期止损较小，因此它的获利概率也会高于等待确认","后者证据更多，但往往止损更远、剩余回报更少"],answer:2,explanation:"课程强调概率、风险和回报必须一起看，不能把其中一项好处当作所有指标同时更优。",imageKey:null,id:"18D-K13-1",knowledgeId:"K13",knowledgeTitle:"等确认的胜率与盈亏比代价",time:"28:09–30:40",pdfPages:[1582,1583],type:"理解判断",quote:`28:09 如果想要更高的胜率 与其在上面卖出
28:12 不如等待一个强势的突破和良好的跟随
28:16 然后在那根阴线的收盘市价卖出
28:22 更高的胜率往往也伴随着更高的风险
28:26 如果你在这里卖出 你的止损要么在这里
28:30 要么在这个抛售高潮的起跌点上方
28:33 而这里你的风险很小
28:34 如果你在这里卖出
28:36 你的风险至少在这里 甚至在那里
28:39 每当你在做一笔高胜率的交易时
28:41 你必须假设盈亏比会差一些
28:45 也就是说止损会更远 风险更大
28:51 双顶第二个高点略微更高一些
28:54 上涨趋势窄震荡区间
28:57 每当你在窄震荡区间中看到双顶
29:00 你就必须考虑双顶大反转的可能性
29:06 风险很小 这意味着胜率不会高
29:10 也许你会想好 我要在那个阴线下方卖出
29:15 我的突破卖单会在这里成交
29:18 我的风险只有这一点点距离止损很小
29:21 但是潜在的利润空间巨大 确实是这样
29:24 然而每当你的盈亏比非常好的时候
29:28 你赚钱的概率就会下降 你更有可能会亏钱
29:32 但从数学上来看 这是合理的交易员方程
29:36 即数学期望为证
29:38 一般情况下 如果反转确实成功了
29:41 你会得到两段下跌
29:44 一回调2 而且第二段通常比第一段更大
29:51 如果想要更高的胜率
29:53 你就等明确的空头突破之后再卖出
29:56 要么在它的收盘卖出
29:58 要么在这根K线高点上好卖出
30:00 压住向上的反转会失败
30:03 这里有一个第二做空入场 第一第二
30:06 所以你可以在那根K线的低点下方挂突破卖单
30:11 订单会在这里成交
30:13 或者你可以在这个收在最低的阴线下方卖出
30:17 订单会在这里成交
30:18 这些是更高胜率的做空入场点
30:21 但是你的止损仍然在这里
30:24 止损距离更远了当这笔交易的胜率更高
30:28 你必须假设风险也更大
30:31 因为你的止损距离更远
30:33 通常你的回报也更少
30:35 因为你是在趋势出现之后才入场
30:39 剩余的利润
30:40 空间就小了`}],sourceFile:"BTC PAF 18D Trading Ranges v2_中文 (源语言).srt"},{id:"18E",group:"交易区间",title:"真空效应与反向交易逻辑",range:"00:00–35:33",revision:"range-knowledge-v2",notes:["越接近支撑或阻力，价格可能越快；这不自动说明将成功穿越目标。","到达下沿时，多头开仓与空头止盈可共同买入；上沿则可共同卖出。","理解被套者退出怎样推动反转，同时保留课程对机构行为解释的证据限制。"],knowledgePoints:[{id:"K01",title:"强势也可能在阻力突然反转",summary:"课程案例用支撑阻力、目标和订单行为解释突然反转，不只把同时出现的新闻当作充分原因。",time:"00:38–03:24",pdfPages:[1588],questionIds:["18E-K01-1"]},{id:"K02",title:"公平价格不断变化",summary:"公平价格是双方愿意成交的区域，会随变量变化；附近振幅、K线可缩小，失去共识时又会寻找新区。",time:"03:34–06:24",pdfPages:[1589,1590],questionIds:["18E-K02-1"]},{id:"K03",title:"打平离场与双顶双底",summary:"原先被套的多头回到旧高可卖出离场，空头回到旧低可买入离场，这能加强双顶双底附近反向力量。",time:"05:22–06:07",pdfPages:[1590],questionIds:["18E-K03-1"]},{id:"K04",title:"不同周期的关键支撑阻力",summary:"月线趋势线、前期低点、楔形通道等也可能成为当前重要区域；并非只因看短图就可忽略它们。",time:"06:29–08:49",pdfPages:[1590,1591],questionIds:["18E-K04-1"]},{id:"K05",title:"第二段强度与位置冲突",summary:"强第二段可能只是测试区间边缘，越过近几十根K线仍不等于脱离更大的区间。",time:"08:56–11:38",pdfPages:[1592],questionIds:["18E-K05-1"]},{id:"K06",title:"磁铁具体指什么",summary:"趋势线、前期高低点及各种测量目标，都是本课讨论的支撑阻力磁铁。",time:"11:45–13:10",pdfPages:[1593,1594],questionIds:["18E-K06-1"]},{id:"K07",title:"接近目标的加速",summary:"区间边缘附近，价格可能受目标吸引而加速，不能用加速外观区分测试与成功突破。",time:"13:18–14:33",pdfPages:[1595],questionIds:["18E-K07-1"]},{id:"K08",title:"抵达目标与多重因素",summary:"达到或稍越过目标后，原吸引作用可能消退并反向探索；反转区域常叠加不止一种支撑阻力。",time:"14:10–14:58",pdfPages:[1596],questionIds:["18E-K08-1"]},{id:"K09",title:"下跌真空的买盘暂缓",summary:"支撑尚未到达时，多头等更低买入，空头也等到目标再止盈，双方暂缓买入造成失衡。",time:"15:05–16:46",pdfPages:[1597,1598],questionIds:["18E-K09-1"]},{id:"K10",title:"到下沿后的双方买入",summary:"一旦进入买入区域，多头开仓与空头目标止盈可能同时买入，造成快速反转。",time:"16:54–17:36",pdfPages:[1599],questionIds:["18E-K10-1"]},{id:"K11",title:"上涨真空与阻力卖出",summary:"阻力前空头等更高卖、多头等目标止盈；抵达后两者共同卖出，可造成突然反转。",time:"17:39–19:17",pdfPages:[1600],questionIds:["18E-K11-1"]},{id:"K12",title:"怕错过与小止损的误区",summary:"为尽早参与突破而忽略跟随，可能换来较小止损却较低概率；追高追低会让止损落在对方入场区。",time:"19:22–23:35",pdfPages:[1601,1602],questionIds:["18E-K12-1","18E-K12-2"]},{id:"K13",title:"反向逻辑的适用背景",summary:"区间里预期突破失败、反向观察；不能把这种方式不加背景推广到强趋势突破。",time:"23:41–24:16",pdfPages:[1603],questionIds:["18E-K13-1"]},{id:"K14",title:"机构行为解释的证据边界",summary:"课程提出部分机构可能先顺动能、再反向建立仓位，同时承认无法直接提供相关证据，且不确定当前影响。",time:"24:23–27:10",pdfPages:[1604,1605],questionIds:["18E-K14-1","18E-K14-2"]},{id:"K15",title:"被套者退出推动反转",summary:"追空者止损需要买入，追多者止损需要卖出；剧烈失败后，他们短期内可能不愿再按原方向入场。",time:"27:22–29:56",pdfPages:[1606,1607,1608],questionIds:["18E-K15-1"]},{id:"K16",title:"阻止回调与第二段延续",summary:"反转后主动一方持续施压、被套者被迫较差价格退出、迟到者追入，可能促进第二段。",time:"30:09–34:35",pdfPages:[1609,1610,1611,1612],questionIds:["18E-K16-1"]}],questions:[{prompt:"强上涨刚到测量目标和前期起跌区域就反转，本课要求优先补看什么？",options:["只找同一时刻的新闻标题，找到就不再检查价格位置","左侧支撑阻力、持仓者止盈和新的反向卖出","只把反转前最后一根阳线放大观察"],answer:1,explanation:"这是课程的价格行为解释，不能把同时发生的新闻直接当充分因果，也不能因此断言任何新闻都无影响。",imageKey:null,id:"18E-K01-1",knowledgeId:"K01",knowledgeTitle:"强势也可能在阻力突然反转",time:"00:38–03:24",pdfPages:[1588],type:"理解判断",quote:`00:38 市场强势上涨 但是看这里突然就被反转了
00:43 即使是非常强势的上涨趋势
00:46 也可以突然被反转
00:52 如果这是日内的五分钟K线图
00:55 尾盘发生这样的跳水
00:58 然后你打开新闻新闻会告诉你
01:01 市场突然下跌是因为某个新闻事件发生了
01:05 他们尝试让你相信是新闻导致的一切
01:10 他们尝试让你相信一切都是新闻引起的
01:14 他们没有支撑和阻力的概念
01:17 他们不知道市场在不断的寻找公平的价格
01:21 新闻是他们赚钱的手段
01:23 他们知道有好几百万人在看新闻
01:26 所以他们要让你们相信新闻主导了一切涨跌
01:31 事实上这很愚蠢 这是完全错误的
01:34 市场做出任何行为都是因为
01:37 交易者在寻找公平的价格
01:39 有时价格不得不走过头才知道合适的区域在哪里
01:43 即我们所说的矫枉过正
01:46 然后价格会突然反转
01:48 一天24小时时刻都有新闻发生
01:53 如果反转期间正好有某个新闻
01:56 电视会告诉你是新闻导致了反转
01:59 但事实上他们毫无关联
02:01 反转发生的原因是市场上涨去测试阻力
02:05 然后知道在那个价格
02:07 没有足够的买家愿意追高
02:09 所以市场不得不快速下跌
02:12 来找到更多愿意买入的人
02:16 新闻记者不理解支撑和阻力
02:20 他们不理解市场如何运作
02:22 即使金融相关媒体的记者也不懂住董的话
02:25 TA干嘛还做记者呢？
02:29 这个向下反转是因为新闻引起的吗？
02:33 如果你打开电视 他们会说 是的
02:37 如果你问我 我会告诉你
02:39 这是因为支撑和阻力第一段上涨之后继续突破
02:43 有一点点回调
02:44 然后很快到达了上方的MM标位
02:47 当市场开始接近目标时
02:49 每个人都知道它会达到目标 所以空头不会做空
02:54 多头积极的买入 然后一旦到达了目标
02:57 多头就卖出止盈
02:59 空头我也知道这一点
03:01 他们心想这是一个不错的做空价格
03:04 多头和空头都在卖出 所以市场反转下跌
03:12 看左边这个强势的上涨
03:15 测试了抛售高潮的起跌点
03:19 同时这很可能是一个即将
03:22 形成的震荡区间的上沿
03:24 这是市场反转下跌的另一个原因`},{prompt:"为什么当前公平价格区域不能被当作永久不变的区间？",options:["变量不断变化，市场可能重新认为价格过高或过低，去寻找新区域","只要区间曾经成交量大，之后就不可能突破","一旦形成区间，买卖双方就不再改变预期"],answer:0,explanation:"课程同时讲价格附近的共识和共识变化，不能只保留前者。",imageKey:null,id:"18E-K02-1",knowledgeId:"K02",knowledgeTitle:"公平价格不断变化",time:"03:34–06:24",pdfPages:[1589,1590],type:"理解判断",quote:`03:34 市场不断在尝试找到最佳价格
03:37 也就是让交易最大化的价格
03:40 如果市场上涨太高
03:42 就没有足够多愿意追涨的买家
03:45 成交量会消失 如果跌的太低
03:48 愿意卖出的交易者也不够多
03:51 所以市场不断的上探和下探
03:53 尝试找到让交易最大化的价格
04:02 一旦市场接近一个公平价格
04:05 或市场认为这是公平的价格
04:08 振幅和K线往往就会变小
04:11 买卖双方达成共识
04:13 认为这个通道区域是一个合理的买卖价格
04:19 定价的过程涉及无数的变量
04:24 他们都在不断变化
04:26 在某个时刻价格不再那么公平
04:31 要么太高要么太低
04:33 所以市场必须迅速移动到新的公平价
04:37 所以你会看到突破
04:42 市场不断上下测试 想要找到区间的边缘
04:47 这里区间收敛
04:48 价格达到三角形的顶点 然后市场向下突破
04:53 在某些时候市场决定现在的价格太高了
04:57 必须下跌才能找到足够多
05:00 的买家来维持交易的活跃
05:07 我大部分时间在讲解日内的K线图
05:11 但市场在所有的时间周期都在寻找最佳的价格
05:15 这是标普500指数的月K线图
05:22 它从这个高点下跌
05:23 然后从这个低点附近开始反弹
05:26 这也是50%回调 然后强势上涨
05:30 当市场到达这个高点时
05:32 发生了什么反转下跌了
05:34 市场再次认为这个价格太高了
05:38 在这里买入的多头对下跌的幅度非常失望
05:42 他们很高兴市场能回到他们的初始价格
05:46 给了他们打平离场的机会
05:48 这就是形成双顶的常见原因
05:51 这里的情况正好相反 空头看到了这个崩盘
05:55 一些空头在这里卖出
05:57 他们对大幅的反弹感到非常失望
06:00 市场好不容易跌回到他们的初始价格
06:03 给了那些空头打平离场的机会
06:07 所以空头和多头都在这里买入
06:10 于是市场再次上涨
06:14 基本面不断变化 有无数的变量
06:18 没有人知道所有的变量
06:21 结果就是区间不断的变化
06:24 公平价格的区间不断的变化`},{prompt:"价格重回先前高位买入者的成本附近，为何可能出现卖压？",options:["因为所有多头一回到成本就必然加仓","因为买入者的退出只能发生在明显亏损时","失望的多头可能打平离场，卖出不一定只是空头新开仓"],answer:2,explanation:"课程用这个机制解释双顶；低位空头回到成本时买入离场，是对称情形。",imageKey:null,id:"18E-K03-1",knowledgeId:"K03",knowledgeTitle:"打平离场与双顶双底",time:"05:22–06:07",pdfPages:[1590],type:"理解判断",quote:`05:22 它从这个高点下跌
05:23 然后从这个低点附近开始反弹
05:26 这也是50%回调 然后强势上涨
05:30 当市场到达这个高点时
05:32 发生了什么反转下跌了
05:34 市场再次认为这个价格太高了
05:38 在这里买入的多头对下跌的幅度非常失望
05:42 他们很高兴市场能回到他们的初始价格
05:46 给了他们打平离场的机会
05:48 这就是形成双顶的常见原因
05:51 这里的情况正好相反 空头看到了这个崩盘
05:55 一些空头在这里卖出
05:57 他们对大幅的反弹感到非常失望
06:00 市场好不容易跌回到他们的初始价格
06:03 给了那些空头打平离场的机会
06:07 所以空头和多头都在这里买入`},{prompt:"即使在看五分钟图，为什么课程仍举月线支撑的例子？",options:["某个时刻更高周期的关键价位也可能重要，时间级别需对应","月线有支撑就能保证五分钟每次反转都成功","日内图一律不受更大结构的任何影响"],answer:0,explanation:"本课强调不同周期都在寻找合理价格，不是要求频繁切图或把某个价位当必反点。",imageKey:null,id:"18E-K04-1",knowledgeId:"K04",knowledgeTitle:"不同周期的关键支撑阻力",time:"06:29–08:49",pdfPages:[1590,1591],type:"理解判断",quote:`06:29 然而价格总是会在某个支撑或阻力位反转
06:35 2009年有这个大崩盘
06:37 看看价格在哪里反转上涨
06:40 如果你把这些低点连成一条趋势线
06:43 他刚好突破这条趋势线 然后反转上涨
06:46 我在这里没有展示出来
06:48 但这是1987年的崩盘
06:50 它也从那些低点的趋势线开始反转上涨
06:54 市场测试到支撑位 也是前期低点的支撑
06:59 在稍低的价格找到了很多买家
07:03 于是反转上涨
07:05 这是欧元对日元的月K线图
07:10 市场在所有时间周期上都在不断的测试
07:14 想要找到最公平的价格
07:16 在任何一个给定的时刻
07:18 任何时间周期都可能成为最重要的那个时间周期
07:23 即使你在看五分钟或一分钟的K线图
07:26 有时月K线上的支撑和阻力也很重要
07:31 基本面不断变化 有无数的变量
07:35 不可能知道所有的变量结果是公平的
07:40 价格也在不断变化
07:45 月K线上有一个非常强的空头突破
07:49 但市场在这里反转上涨 为什么？
07:51 因为价格来到了通道的下沿
07:54 这是一个楔形的下降通道
07:56 我可以在上沿画一条趋势线
07:59 这是一个三推楔形底
08:00 有一个看起来很不错的做多信号K线
08:04 同时价格在2000年的
08:06 低点附近开始反转上涨
08:08 这是对2000年第一点的测试 这是支撑
08:18 强势上涨 非常强势 但迅速的反转下跌
08:24 这是因为某些新闻报道吗？
08:27 当然不是 这与时间周期也无关
08:30 可能是一分钟图
08:32 可能是周K线或月K线市场强势上涨
08:36 然后反转下跌是因为价格行为
08:39 而不是因为新闻 总是有新闻在发生
08:42 新闻只是众多的变量之一
08:45 但更重要的变量是支撑和阻力
08:49 但你必须能够找到支撑和阻力`},{prompt:"区间内很强的第二段突破了局部新高，后面出现反转大阴线，为什么不继续期待必有第三段？",options:["任何大阳线后都必然还有同样长度的一段","更大区间位置和糟糕跟随，已经挑战了“新趋势开始”的解释","只有跌回第一段起点，才允许重新考虑区间背景"],answer:1,explanation:"原文反复用第二段陷阱说明，局部新高和强动能不足以单独确认新趋势。",imageKey:null,id:"18E-K05-1",knowledgeId:"K05",knowledgeTitle:"第二段强度与位置冲突",time:"08:56–11:38",pdfPages:[1592],type:"理解判断",quote:`08:56 多头在这里的反弹比较弱
08:59 看起来像一个熊旗
09:01 第一段上涨
09:02 然后出现了这个非常强的第二段上涨
09:05 于是很多多头认为太好了
09:08 这是上涨趋势的开始
09:10 我们制造了多头突破回调
09:13 然后进入通道 肯定会继续大涨
09:16 然而每当市场有很多震荡区间的价格行为时
09:21 它经常有一个非常强的第二段
09:25 诱导交易者相信震荡区间即将结束
09:29 市场正在突破进入趋势
09:33 这是震荡区间或宽通道中的第二段陷阱
09:38 他们会被反转
09:40 而不是继续上涨
09:42 很多交易者看到这个会说 哇 太厉害了
09:45 很可能第一次向下反转的尝试会失败
09:49 还会有更多的上涨波段
09:52 不对 这是第二段陷阱
09:54 不管突破看上去多么强势
09:57 都很可能被突然反转
10:01 两段下跌 一反弹2
10:04 第二段比第一段更强 交易者被套牢了
10:11 两段上涨一回调二反转下跌
10:16 强势的第二段上涨测试震荡区间的上沿
10:20 强势的第二段上涨看上去好像要突破了一样
10:25 然而它却反转下跌
10:27 这根K线收盘价高于这根K线的最高点
10:30 好像也超过了过去20根K线的最高点
10:34 一些交易者会想
10:36 要突破了就要进入上涨趋势了
10:39 不对 这是震荡区间中的第二段陷阱
10:44 两段下跌一反弹2 第二段下跌非常强势
10:49 收盘价低于过去30或40根K线的最低点
10:55 看起来这应该是一个下降趋势的开始
10:58 交易者预期突破后会有第二段下跌
11:01 然而价格反转上涨了 为什么会这样？
11:05 因为它仍然可能是震荡区间的一部分
11:08 两段下跌 第二段看起来足够强势
11:11 好像要形成趋势 但是反转了
11:14 记住我的80%法则
11:16 80%的震荡区间突破尝试会失败
11:20 他们会被反转
11:23 第一段上涨 极其强势的
11:26 第二段上涨收盘价高于过去40或50根K线的最高点
11:32 但是看后面的跟随反转大阴线
11:35 多头预期这是上涨趋势的开始
11:37 于是追涨
11:38 结果全部被套牢了80%突破的尝试会失败`},{prompt:"本课“磁铁”不是一个新指标，它指哪些东西？",options:["只指一个永远固定不变的区间中线","只指成交量最大的单根K线","支撑阻力，包括趋势线、前期高低点和测量目标"],answer:2,explanation:"磁铁是解释价格测试倾向的比喻；具体位置仍来自实际结构和目标。",imageKey:null,id:"18E-K06-1",knowledgeId:"K06",knowledgeTitle:"磁铁具体指什么",time:"11:45–13:10",pdfPages:[1593,1594],type:"理解判断",quote:`11:45 市场总是不断被磁铁支撑和阻力吸引
11:50 就像其他任何磁铁一样
11:53 价格离它越近 移动的就越快
11:57 磁铁就是指支撑和阻力
12:00 我使用磁铁一词来指代支撑和阻力
12:04 支撑阻力有很多类型
12:06 趋势线MM目标位前期的高点低点
12:11 这里有一条趋势线反转
12:14 下跌这里有一条趋势线反转
12:18 下跌通道下沿的通道线跌破失败
12:22 然后反转上这里也是把
12:26 这些高点连成趋势线反转下跌
12:30 前期的高点和低点
12:32 市场测试了这个高点
12:35 反转下跌 测试了这个高点
12:37 反转下跌测试了这个低点
12:40 空头买入止盈 多头买入开仓
12:43 测试了这个低点 空头买入止盈
12:46 多头买入开仓
12:47 所以市场反转上涨
12:51 mm目标在这里
12:53 反转上涨到达了mm
12:57 标位震荡区间被向下突破
13:01 跌到mm附近开始反转上涨
13:05 这个高点到这个低点之间
13:08 的缺口可能是测量型缺口
13:10 结果它确实是一个测量型缺口`},{prompt:"价格越靠近区间上沿，阳线反而越大，最需要避免什么误判？",options:["接近上沿实体变大，说明越过目标后延续的概率也同步增加","加速先当作趋势重启，目标位置只用于调整止盈","把目标前的加速测试直接当作目标后的持续突破"],answer:2,explanation:"本课把快速上冲和下探放在边缘真空效应中解释；抵达前的动能不等于抵达后的订单平衡。",id:"18E-K07-1",knowledgeId:"K07",knowledgeTitle:"接近目标的加速",time:"13:18–14:33",pdfPages:[1595],type:"图表应用",quote:`13:18 一旦市场接近震荡区间的上沿或下沿
13:22 价格就处于区间边缘
13:24 的引力场内 他通常无法摆脱这种引力
13:29 直到他达到目标 然后磁力突然消失
13:35 就像任何磁铁一样 越接近磁力越强
13:39 价格移动得越快
13:43 急速下跌到区间下沿 然后反转上涨
13:47 急速跌破支撑 然后反转上涨
13:52 急速上涨到阻力 然后反转下跌
13:56 超级强势的暴涨
13:58 但只被磁铁吸到前期高点的阻力
14:01 然后反转下跌
14:10 一旦市场达到磁铁及支撑或阻力 磁力消失
14:15 然后市场就会反转去测试相反的支撑或阻力
14:20 市场决定价格跌过头了
14:22 需要向上探索寻找卖家
14:25 市场决定价格涨过头了
14:27 需要向下探索寻找买家
14:30 市场在不断的寻找最佳价格
14:33 通常需要走过头才知道哪里是最合适的`,image:{src:"/charts/18e-vacuum.webp",solutionSrc:"/charts/18e-vacuum-solution.webp",page:1595,alt:"区间上沿附近的绿色大阳线与后续K线"}},{prompt:"同一区域叠加区间边缘、前高和测量目标时，应如何理解？",options:["条件越多，就越能保证该价位精确反转","只允许有一个正确原因，其余结构都必须删去","多种支撑阻力可能共同起作用，但仍要观察实际反应"],answer:2,explanation:"本课强调常有多种技术因素。叠加是观察背景，不是把概率变成必然。",imageKey:null,id:"18E-K08-1",knowledgeId:"K08",knowledgeTitle:"抵达目标与多重因素",time:"14:10–14:58",pdfPages:[1596],type:"理解判断",quote:`14:10 一旦市场达到磁铁及支撑或阻力 磁力消失
14:15 然后市场就会反转去测试相反的支撑或阻力
14:20 市场决定价格跌过头了
14:22 需要向上探索寻找卖家
14:25 市场决定价格涨过头了
14:27 需要向下探索寻找买家
14:30 市场在不断的寻找最佳价格
14:33 通常需要走过头才知道哪里是最合适的
14:42 反转发生地方通常不止一种
14:45 类型的支撑或阻力在起作用
14:48 这里有一个扩张三角形
14:51 也是区间的下沿和上沿
14:53 价格尝试突破前期的最高点和最低点
14:58 通常也会有mm目标位`},{prompt:"区间支撑尚未到达时，为什么下跌可能突然加速？",options:["空头提前止盈增加卖压，多头暂缓买入，两者造成下跌","多头等待更低买入，空头也暂不买入止盈，卖压暂时占优","只需要看新增空头的卖出，不用考虑双方延后买入"],answer:1,explanation:"关键是“暂缓”：它解释目标前买盘不足，不代表价格到达支撑后买盘仍不会改变。",imageKey:null,id:"18E-K09-1",knowledgeId:"K09",knowledgeTitle:"下跌真空的买盘暂缓",time:"15:05–16:46",pdfPages:[1597,1598],type:"理解判断",quote:`15:05 看这里 这个蓝色框框就在支撑上方
15:09 多头和空头都看到下沿
15:12 知道这是支撑 所以会发生什么呢？
15:16 当市场下跌时
15:17 每个人都知道市场可能会跌到支撑位甚至更低一点
15:23 那么机构会怎么做？
15:27 如果你是一个看涨的机构
15:29 你知道价格会跌到下面
15:31 你会在这里就买入吗？
15:32 不会 多头不会在这里买入
15:35 一个看跌的计算机算法
15:37 比如是做高频交易的程序
15:39 看到市场在快速下跌
15:41 下面有一个磁铁 它会卖出做空
15:44 所以空头在不断卖出 而多头不买入
15:47 结果就是市场必须继续下跌来找到买家
15:55 空头预期市场会跌到支撑位甚至更低
15:59 所以他们为什么要在这里买入回？
16:02 他们知道会继续下跌
16:04 所以他们目前还不会买入止盈
16:07 空头不买入 多头不买入 而空头在卖出
16:11 就导致了买卖力量的失衡
16:14 市场迅速跌到支撑位
16:21 因为多头和空头都认为市场会继续下跌一些
16:25 所以在这里买入对多头
16:27 和空头来说都没有意义
16:30 没有人愿意买入 于是市场迅速跌到支撑位
16:39 结果通常是一两个非常大的大阴线跌破支撑
16:45 价格被吸到支撑位的下方`,referenceImage:{src:"/charts/18e-support-approach-solution.webp",page:1597,alt:"第1597页课件整页讲解",kind:"课件整页"}},{prompt:"价格刚刺穿支撑后又快速上升，课程如何解释原先看不到的买盘？",options:["多头要等回到中部才可能买入，所以此处只能是空头回补","多头到了买入区域，空头也买入止盈，双方需求同时出现","空头止盈需要卖出，反转只能靠多头独自建立买盘"],answer:1,explanation:"空头止盈是买回仓位。原文用这个变化说明目标前和到目标后的订单方向可以不同。",imageKey:null,id:"18E-K10-1",knowledgeId:"K10",knowledgeTitle:"到下沿后的双方买入",time:"16:54–17:36",pdfPages:[1599],type:"理解判断",quote:`16:54 但接下来会发生什么？
16:56 看这里
16:57 市场突然反转 为什么会这样呢？
17:02 到了支撑位
17:03 多头决定这是一个好的买入价格
17:07 市场在前面这里和这里都被埋起来
17:11 而现在又到达了这个区域
17:13 所以多头突然出现 再次开始买入
17:16 空头也知道市场会在这里反转上涨
17:19 在这里和这里反转上涨
17:22 所以他们也买入止盈空头仓位
17:24 空头买入止盈 多头买入做多
17:27 建立多头仓位 压住支撑位会继续有效
17:30 当市场处于震荡区间时
17:32 市场通常会穿过支撑位的一点点
17:36 然后反转`},{prompt:"接近上沿时几乎没有卖盘，为什么抵达阻力后又会突然出现大量卖出？",options:["多头止盈与空头开仓方向相反，在阻力处会相互抵消","上沿前买盘占优，所以抵达阻力后也应先沿用同样失衡","空头等更高价开空，多头等目标止盈，两类卖出可以同时到来"],answer:2,explanation:"不能把目标前的订单状态线性外推到目标后。多头卖出止盈与空头卖出开仓方向一致。",imageKey:null,id:"18E-K11-1",knowledgeId:"K11",knowledgeTitle:"上涨真空与阻力卖出",time:"17:39–19:17",pdfPages:[1600],type:"理解判断",quote:`17:39 相反的情况发生在震荡区间的上沿
17:43 在前期的高点下方
17:45 市场快速上涨
17:47 你认为空头会在这里开始卖出做空吗？
17:50 不会 他们知道价格会到达那个高点
17:54 所以空头现在不会卖出
17:56 现在市场上是没有空头的
17:58 而多头现在看到很多上涨的动能
18:01 他们知道市场有很高的可能性会继续上涨
18:05 于是他们更加积极的买入
18:07 所以多头在激进的买入 而没有空头在卖出
18:11 结果就是价格快速上涨到阻力位
18:18 在阻力位的下方没有人卖出
18:20 因为多头和空头都知道市场会继续上涨
18:24 至少涨到阻力位甚至更高一点
18:30 空投不会在这里卖出
18:32 因为他们知道可以在更高的价格卖出
18:36 知道价格达到穿过阻力位
18:38 空头才会开始卖出
18:40 他们大量卖出
18:42 尤其是当他们看到市场开始反转下跌时
18:46 他们相信这会是一个短期的高点
18:50 多头的预期也是一样 他们看到同样的事情
18:54 他们看到价格达到了震荡区间的上沿
18:58 大阳线突然暴涨对于多头而言是一个礼物
19:01 K线对于他们而言是一个非常好的止盈的机会
19:06 所以多头也在卖出
19:08 所以当市场上涨到卖出区域前期
19:11 的高点附近或者是任何阻力位置
19:17 你会看到突然的反转`},{prompt:"新手为了减少止损距离，在边缘突破第一刻立即进场，漏掉了哪项权衡？",options:["只要害怕错过，就应该比其他人更早入场","概率：入场早、止损小，并不代表突破成功机会高","止损小会自动提高成功率，所以不用看跟随"],answer:1,explanation:"课程把小账户、怕错过和急于减小风险连在一起，指出不能只看止损距离而忽略区间内突破失败的可能。",imageKey:null,id:"18E-K12-1",knowledgeId:"K12",knowledgeTitle:"怕错过与小止损的误区",time:"19:22–23:35",pdfPages:[1601,1602],type:"理解判断",quote:`19:22 一个新手不明白发生了什么
19:25 他只能看到这根K线
19:28 好大的大阳线 这将是上涨趋势的开始
19:32 他忽略了左边的所有这些阻力
19:36 他只能看到那个大阳线
19:38 他想在这里买入 压住多头的突破会成功
19:42 几分钟后 他看到这个 委屈的想到
19:45 我靠 太不公平了 怎么会这样？
19:48 但这种事一直在发生
19:50 新手总是低位卖出 压住空头突破会成功
19:54 新手也总是在高位买入
19:57 压住多头的突破会成功
20:00 他们总是期待这些强势
20:02 的K线之后会有第二段
20:04 但在震荡区间中 这就是第二段
20:07 他们被套牢了
20:08 第一段回调 第二段不会有第三段了
20:12 市场直接反转下跌
20:14 价格被吸到阻力位 被吸到支撑位
20:17 然后多空双方同时都在买入
20:20 多空双方同时都在卖出
20:22 制造了突然的反转 而不是成功的突破
20:30 新手在这里买入的另一个原因是
20:33 他们害怕错过这个巨大的上涨趋势
20:37 尽管他们看到了左边的这些反转
20:40 他们当然也害怕再次反转
20:42 他们希望尽可能地减少风险
20:45 所以他们在突破的过程中立即买入
20:50 而不是耐心等待突破后的跟随
20:53 他们想提前入场
20:55 在夏言也是一样 他们看到突破
20:58 他们想减少风险 他们害怕账户发生亏损
21:02 新手的账户通常比较小 所以他们卖出做空
21:05 希望这是一个巨大下降趋势的开始
21:08 但他们完全忽略了概率
21:10 看看左边多头突破的成功率有多大
21:15 空头突破的成功率有多大
21:19 这是新手的常见的错误之一
21:21 他们太在乎风险了 他们想减少风险
21:24 所以他们想尽早入场
21:26 这就导致赚钱的概率非常小
21:32 新手在这个反弹的时候做空
21:35 认为这是一个雄奇 期待第二段下跌
21:38 然而这个小阴线就是第二段的全部了
21:41 只是略微下跌 甚至没有跌破之前的低点
21:47 新手在这个强势大阳线的收盘买入
21:50 或者会在这里买入 希望第二段上涨
21:54 因为他觉得这非常强势
21:56 市场肯定会涨到更高的价格
22:05 新手无法相信回调不断的发展
22:09 他在这里反弹的时候卖出
22:12 压住会再次下跌 这里是第二做空入场点住
22:16 但做空信号并不好
22:18 第一第二 然而市场不断的上涨 他在这里买入
22:22 期待这个强势突破后的第二段上涨
22:25 然后眼睁睁的看着价格永无止境的回调不断下跌
22:30 最终他在震荡区间的下沿卖出止损
22:34 在下沿卖出做空的新手会在上沿买入止损
22:40 最后的结果是新手在低位做空
22:43 在高位追涨 在低位止损
22:45 多头仓位 然后开仓做空
22:48 在高位止损空头仓位 然后开仓做多
22:52 期待这次突破也许会成功
22:58 正好和专业交易员所做的事情完全相反
23:08 新手在低位卖出做空
23:10 然后在高位买入回拍在高位买入做多
23:14 然后在低位卖出止损
23:16 它止损空头仓位的地方正好是
23:19 专业交易员开仓做空的地方
23:21 他止损多头仓位的地方正好是
23:23 专业交易员开仓做多的地方
23:26 完全和震荡区间中应该做的事情反过来了
23:30 在震荡区间里你应该在低位买入而不是卖出
23:35 你应该在高位卖出而不是买入`},{prompt:"上沿追多被套、下沿止损再反手追空，为什么常反复受挫？",options:["进出都追在区间边缘，恰好可能成为经验交易者反向成交的一侧","因为止损本身必然错误，应该永远不退出","因为只要反手次数足够多，下一次突破必定成功"],answer:0,explanation:"问题在反复忽略背景和位置，不是说不要止损。课程用两边来回被套说明这种循环。",imageKey:null,id:"18E-K12-2",knowledgeId:"K12",knowledgeTitle:"怕错过与小止损的误区",time:"19:22–23:35",pdfPages:[1601,1602],type:"变式辨析",quote:`19:22 一个新手不明白发生了什么
19:25 他只能看到这根K线
19:28 好大的大阳线 这将是上涨趋势的开始
19:32 他忽略了左边的所有这些阻力
19:36 他只能看到那个大阳线
19:38 他想在这里买入 压住多头的突破会成功
19:42 几分钟后 他看到这个 委屈的想到
19:45 我靠 太不公平了 怎么会这样？
19:48 但这种事一直在发生
19:50 新手总是低位卖出 压住空头突破会成功
19:54 新手也总是在高位买入
19:57 压住多头的突破会成功
20:00 他们总是期待这些强势
20:02 的K线之后会有第二段
20:04 但在震荡区间中 这就是第二段
20:07 他们被套牢了
20:08 第一段回调 第二段不会有第三段了
20:12 市场直接反转下跌
20:14 价格被吸到阻力位 被吸到支撑位
20:17 然后多空双方同时都在买入
20:20 多空双方同时都在卖出
20:22 制造了突然的反转 而不是成功的突破
20:30 新手在这里买入的另一个原因是
20:33 他们害怕错过这个巨大的上涨趋势
20:37 尽管他们看到了左边的这些反转
20:40 他们当然也害怕再次反转
20:42 他们希望尽可能地减少风险
20:45 所以他们在突破的过程中立即买入
20:50 而不是耐心等待突破后的跟随
20:53 他们想提前入场
20:55 在夏言也是一样 他们看到突破
20:58 他们想减少风险 他们害怕账户发生亏损
21:02 新手的账户通常比较小 所以他们卖出做空
21:05 希望这是一个巨大下降趋势的开始
21:08 但他们完全忽略了概率
21:10 看看左边多头突破的成功率有多大
21:15 空头突破的成功率有多大
21:19 这是新手的常见的错误之一
21:21 他们太在乎风险了 他们想减少风险
21:24 所以他们想尽早入场
21:26 这就导致赚钱的概率非常小
21:32 新手在这个反弹的时候做空
21:35 认为这是一个雄奇 期待第二段下跌
21:38 然而这个小阴线就是第二段的全部了
21:41 只是略微下跌 甚至没有跌破之前的低点
21:47 新手在这个强势大阳线的收盘买入
21:50 或者会在这里买入 希望第二段上涨
21:54 因为他觉得这非常强势
21:56 市场肯定会涨到更高的价格
22:05 新手无法相信回调不断的发展
22:09 他在这里反弹的时候卖出
22:12 压住会再次下跌 这里是第二做空入场点住
22:16 但做空信号并不好
22:18 第一第二 然而市场不断的上涨 他在这里买入
22:22 期待这个强势突破后的第二段上涨
22:25 然后眼睁睁的看着价格永无止境的回调不断下跌
22:30 最终他在震荡区间的下沿卖出止损
22:34 在下沿卖出做空的新手会在上沿买入止损
22:40 最后的结果是新手在低位做空
22:43 在高位追涨 在低位止损
22:45 多头仓位 然后开仓做空
22:48 在高位止损空头仓位 然后开仓做多
22:52 期待这次突破也许会成功
22:58 正好和专业交易员所做的事情完全相反
23:08 新手在低位卖出做空
23:10 然后在高位买入回拍在高位买入做多
23:14 然后在低位卖出止损
23:16 它止损空头仓位的地方正好是
23:19 专业交易员开仓做空的地方
23:21 他止损多头仓位的地方正好是
23:23 专业交易员开仓做多的地方
23:26 完全和震荡区间中应该做的事情反过来了
23:30 在震荡区间里你应该在低位买入而不是卖出
23:35 你应该在高位卖出而不是买入`},{prompt:"“看见强突破反而考虑反向”可否成为所有行情中的统一规则？",options:["不可以，因此区间里的反向逻辑也完全没有意义","可以，凡是大阳线都应卖、凡是大阴线都应买","不可以，课程把区间背景与趋势背景明确区分"],answer:2,explanation:"同一个动作在不同背景可能完全不同。反向逻辑需要区间、边缘和失败证据等条件。",imageKey:null,id:"18E-K13-1",knowledgeId:"K13",knowledgeTitle:"反向逻辑的适用背景",time:"23:41–24:16",pdfPages:[1603],type:"理解判断",quote:`23:41 价格不断被吸到下沿 又被吸到上沿
23:46 然后一直重复这个过程
23:55 有经验的交易者明白
23:57 当市场处于震荡区间时
23:59 你必须反其道而行之 用反常的逻辑去交易
24:04 你必须压住突破会失败
24:06 这个趋势不一样
24:08 在趋势中你压住突破会成功
24:13 这是趋势还是震荡区间？
24:16 显然是震荡区间`},{prompt:"课中“空头先买入制造超买、多头先卖出制造超卖”的说法，应以何种证据等级记住？",options:["已经通过这张图证明每一家机构都这样做","只要出现大K线，就能识别具体是哪家机构下单","课程提出的行为解释，讲者承认缺乏直接证据且不确定如今影响，不能据图断言某机构在操纵"],answer:2,explanation:"要保留原文的限定：理解假设如何解释高潮，并不等于图表证明了机构身份或动机。",imageKey:null,id:"18E-K14-1",knowledgeId:"K14",knowledgeTitle:"机构行为解释的证据边界",time:"24:23–27:10",pdfPages:[1604,1605],type:"理解判断",quote:`24:23 接下来我要说的是真的
24:25 尽管我无法直接提供行业内这些秘密的证据
24:29 如果我在运行计算机算法 这是我会做的事
24:33 如果我是一家做空的机构 我想在高位卖出
24:37 但我想说服其他机构和交易者
24:40 让他们相信市场还会继续涨
24:42 让他们在上沿买入做多
24:45 很多做空的机构在这里会先买入做多
24:49 做剥头皮交易
24:50 让上涨动能继续保持
24:52 然后在其他机构追涨被套牢之后
24:56 就迅速大量的卖出做空
24:58 这就是抢购高潮形成的部分原因
25:01 他们在上涨时买入 尽可能的制造强势的超买现象
25:06 然后预期剧烈的反转下跌
25:09 相反的情况发生在低位做
25:12 多的机构会在先这里卖出
25:15 尽可能的制造强势的超卖现象
25:18 然后迅速大量的买入
25:20 把在低位追空的机构套牢
25:23 他们做多的仓位就可以赚钱了
25:30 空头在区间顶部的下方先买入
25:34 让多头相信突破会成功
25:36 他们想要骗多头在高位接盘
25:40 多头会在反转下跌时止损卖出
25:43 在20或30年前
25:46 很多机构会这么做 这很重要
25:49 这是造成反转发生的一个重要因素
25:58 多头下沿先假装要卖出
26:00 空头在上沿先假装要买入
26:03 主要是计算机在执行这些
26:05 订单手动交易的速度太慢了
26:08 无法执行这些交易 然后瞬间反向操作
26:12 我不确定现在这种做法
26:14 对市场还有多大的影响
26:16 但这确实是造成这些高潮反转的因素之一
26:27 当市场下跌到支撑位时
26:30 机构会反其道而行之
26:32 做多的机构希望市场尽可能的超卖
26:37 然后剧烈的反转上涨 所以他们先做空
26:43 然后快速止盈
26:46 然后迅速大量的买入
26:48 制造一个大的反转上涨
26:50 抛售高潮越剧烈 这些做多的公司就越受益
26:55 因为反转的概率提高了
26:58 而且反转的剧烈程度也会提高
27:02 他们用尽所有的手段让
27:05 市场尽可能极端的超卖
27:08 然后期待强势的反转
27:10 并且在反转上涨时大量买入`},{prompt:"在这个机构行为解释中，部分空头为何可能在上沿前先买入？",options:["先保持上涨动能、制造更高卖出机会，再反向卖出；这是课程解释而非可逐笔证实的事实","因为买过一次就不能再卖出，原空头必须永久转为多头","因为任何买入都能证明接下来必有强趋势"],answer:0,explanation:"订单方向不等于最终持仓意图；同时必须保留讲者给出的证据限制，不能把它当作已查明的事实。",imageKey:null,id:"18E-K14-2",knowledgeId:"K14",knowledgeTitle:"机构行为解释的证据边界",time:"24:23–27:10",pdfPages:[1604,1605],type:"变式辨析",quote:`24:23 接下来我要说的是真的
24:25 尽管我无法直接提供行业内这些秘密的证据
24:29 如果我在运行计算机算法 这是我会做的事
24:33 如果我是一家做空的机构 我想在高位卖出
24:37 但我想说服其他机构和交易者
24:40 让他们相信市场还会继续涨
24:42 让他们在上沿买入做多
24:45 很多做空的机构在这里会先买入做多
24:49 做剥头皮交易
24:50 让上涨动能继续保持
24:52 然后在其他机构追涨被套牢之后
24:56 就迅速大量的卖出做空
24:58 这就是抢购高潮形成的部分原因
25:01 他们在上涨时买入 尽可能的制造强势的超买现象
25:06 然后预期剧烈的反转下跌
25:09 相反的情况发生在低位做
25:12 多的机构会在先这里卖出
25:15 尽可能的制造强势的超卖现象
25:18 然后迅速大量的买入
25:20 把在低位追空的机构套牢
25:23 他们做多的仓位就可以赚钱了
25:30 空头在区间顶部的下方先买入
25:34 让多头相信突破会成功
25:36 他们想要骗多头在高位接盘
25:40 多头会在反转下跌时止损卖出
25:43 在20或30年前
25:46 很多机构会这么做 这很重要
25:49 这是造成反转发生的一个重要因素
25:58 多头下沿先假装要卖出
26:00 空头在上沿先假装要买入
26:03 主要是计算机在执行这些
26:05 订单手动交易的速度太慢了
26:08 无法执行这些交易 然后瞬间反向操作
26:12 我不确定现在这种做法
26:14 对市场还有多大的影响
26:16 但这确实是造成这些高潮反转的因素之一
26:27 当市场下跌到支撑位时
26:30 机构会反其道而行之
26:32 做多的机构希望市场尽可能的超卖
26:37 然后剧烈的反转上涨 所以他们先做空
26:43 然后快速止盈
26:46 然后迅速大量的买入
26:48 制造一个大的反转上涨
26:50 抛售高潮越剧烈 这些做多的公司就越受益
26:55 因为反转的概率提高了
26:58 而且反转的剧烈程度也会提高
27:02 他们用尽所有的手段让
27:05 市场尽可能极端的超卖
27:08 然后期待强势的反转
27:10 并且在反转上涨时大量买入`},{prompt:"下沿追空者被快速反转套住，其退出怎样影响反弹？",options:["买入止损可能助推反弹，退出后还可能暂时不再追空","退出与反向波段没有任何关系","卖出止损会继续增加空头仓位"],answer:0,explanation:"课程强调止损订单也会成为反转的动力；这解释为何反向运动可能比表面想象更急。",imageKey:null,id:"18E-K15-1",knowledgeId:"K15",knowledgeTitle:"被套者退出推动反转",time:"27:22–29:56",pdfPages:[1606,1607,1608],type:"理解判断",quote:`27:22 这些多头会先卖出做空
27:24 尝试让市场加速下跌
27:26 尝试吸引尽可能多的空头卖出做空
27:30 他们希望空头押注突破成功
27:33 这些做多的机构之所以这样做
27:36 是因为他们确信会有足够多的买盘
27:39 无论是来自他们本身还是其他机构
27:42 能制造反转让空头突破失败
27:46 他们想让空投掉入陷阱
27:48 而那些套牢的空头不得不在反转上涨开始时
27:52 在这里和这里买入止损离场
28:02 尝试突破 看起来很强势 但失败了
28:05 后续没有好的跟随 被反转了
28:09 多头尝试突破 看起来很强势
28:12 但是看后面的跟随反转大阴线
28:18 被套牢的空头止损离场
28:20 直到上涨到区间上沿之前
28:23 他们可能都不会再次做空了
28:26 而在这里被套牢的多头止损离场
28:29 直到下跌到区间下沿之前
28:31 他们可能都不会再次买入了
28:37 在下沿强多头止盈空头仓位并且
28:41 买入做多一些空头希望突破成功
28:45 会下跌到MM标尉强多头从
28:48 这些空头的手中大量买入
28:51 这些空头卖出做空 期望这是测量型缺口
28:54 期待价格会跌到MM目标位
28:57 他们在卖出 而多头从他们手中买入
29:01 最终那些空头放弃
29:03 如果多头能制造出一个强势的反转上涨
29:08 很多时候就会一直涨到区间的上沿
29:12 这里多头成功了
29:16 记住多头希望市场尽可能超卖抛售高潮
29:21 他们希望制造尽可能大的
29:25 阴线来套牢尽可能多的空头
29:29 这样抛售高潮后的反转上涨就会更加剧烈
29:40 他们尝试鼓励空头在低位卖出做空
29:44 他们让空投相信突破会成功
29:47 会跌到MMM标位
29:49 然后他们把空头套牢 空投不得不放弃离场
29:53 空头止损离场 在涨到上沿之前
29:56 他们都不会再次卖出了`},{prompt:"上沿剧烈反转下跌，反弹迟迟不出现，为什么课中仍预期可能有第二段？",options:["因为任何反转都保证有无限长的第三段","因为被套多头止损只能带来买盘","多头被迫较低价卖出，迟到空头继续追入，卖出力量可能延续"],answer:2,explanation:"课末把主动卖出、被套者止损和未入场者追空联系起来；这是可能的动力解释，不是每次反转的保证。",imageKey:null,id:"18E-K16-1",knowledgeId:"K16",knowledgeTitle:"阻止回调与第二段延续",time:"30:09–34:35",pdfPages:[1609,1610,1611,1612],type:"理解判断",quote:`30:09 在上涨过程中 多头会尝试阻止回调
30:13 他们希望逼迫空头在更高的价格买入回补
30:19 当价格在这里开始上涨时
30:22 有一些空头仍然在卖出多头
30:25 激进的买入试图阻止回调的发生
30:28 逼迫空头不得不在非常高的价格买入回补
30:32 而那个高价就是多头会卖出止盈的地方
30:46 在区间的上沿 空头会先买入做多
30:50 尝试制造尽可能极端的抢购高潮
30:54 这样反转下跌就会更剧烈 会跌得更多
30:59 一旦到达他们的卖出区域
31:01 他们就会止盈多头仓位
31:03 然后转为大量的卖出做空
31:06 他们卖给多头
31:07 有些多头看到强势的突破希望
31:10 这是一个强上涨趋势的开始
31:12 他们期待市场会上涨到MM目标位
31:16 也许是基于震荡区间的高度往上翻一倍
31:20 然而市场迅速反转下跌
31:22 那些多头被套牢了 他们不得不止损离场
31:30 那些买入制造抢购高潮的空头
31:34 在市场反转下跌时会疯狂地卖出
31:38 单独一家机构并不一定能做到
31:41 但如果有足够多的公司在这样做
31:44 确信市场会保持在震荡区间内
31:47 反转下跌就会发生
31:49 正如之前所说 当你看到一个震荡区间
31:53 好像正在尝试突破80%的时间里
31:56 突破会失败 市场会反转
31:59 就算突破看上去非常强势
32:01 像这样或这样 他仍然大概率会失败
32:05 大部分机构是这样预期的
32:08 一旦价格涨得足够高
32:10 很多机构会开始卖出
32:12 压倒那些期待突破成功的多头
32:23 在区间上沿 空头想尽可能地以高价卖出
32:28 他们希望市场尽可能超买
32:31 因为那样有更大的概率
32:34 可以制造一个大的反转下跌
32:36 空头希望阳线越大越好
32:39 他们预期市场突破的尝试会失败
32:42 但他们希望它尽可能是一个强势的大阳线
32:46 来让尽可能多的多头被套牢
32:48 这样那些多头就不得不卖出止损
32:51 这会助推价格加速下跌
33:01 那些在这里买入并在这里止损卖出的多头
33:05 你认为他们会在这里再次买入吗？
33:08 不会这么剧烈的反转
33:10 至少会有第二段下跌 到了下沿附近
33:14 多头才会再次买入
33:15 这让反弹出现的概率降低并增加了
33:20 空头会赚到更多钱的可能性
33:27 那些在这里或这里卖出的空头
33:31 他们会继续疯狂的卖出
33:33 他们想在短时间内把价格压得很低
33:36 这就不会有反弹 直到价格跌得足够远
33:41 他们希望逼迫多头以很低的价格卖出止损
33:45 这样多头在短期很多K线内就不会再次买入
33:50 这增加了继续下跌的概率
33:53 所以如果空头能让价格跌了很远之后才反弹
33:58 那么止损的多头短期内就不会再次买入
34:04 那些最初没有卖出的
34:06 空头急切的想要卖出做空
34:09 即使在这么低的价格 他们也会卖出
34:12 多头和空头都在卖出 造成了第二段下跌
34:16 对在这里卖出的机构来说
34:19 快速把价格尽可能的压低是有利的
34:22 因为这样的话套牢的多头就不得不止损
34:29 而还没入场的空头也会迫切的追空
34:33 第一次反转上涨的尝试会失败
34:35 会有第二段下跌`}],sourceFile:"BTC PAF 18E Trading Ranges_中文 (源语言).srt"},{id:"18F",group:"交易区间",title:"成功突破与区间早期信号",range:"00:00–22:08",revision:"range-knowledge-v2",notes:["多数突破尝试失败不代表区间永不结束；真实脱离需要结合强度、跟随和背景。","区间也可能逐步弯成趋势；连续K线、结构和力量变化比等待一根惊人的大K线更重要。","早盘重叠、影线、频繁反转及中部往返，提示区间日，但尾盘仍可能出现趋势。"],knowledgePoints:[{id:"K01",title:"惯性和最终突破不矛盾",summary:"区间中多数尝试失败，但最终会成功突破；不能把惯性当作永久不变。",time:"00:14–00:36",pdfPages:[1616,1620],questionIds:["18F-K01-1"]},{id:"K02",title:"边缘与中间的不同位置",summary:"区间很少长时间停在边缘，价格经常返回中间；中部通常不是理想开仓点。",time:"00:44–01:26",pdfPages:[1617],questionIds:["18F-K02-1"]},{id:"K03",title:"中部规则的特殊案例",summary:"课程也讨论极端反转后被套多头急于卖出时，可能在中部做短线空头；不是普遍例外豁免。",time:"01:30–01:51",pdfPages:[1618],questionIds:["18F-K03-1"]},{id:"K04",title:"短线止盈与持有代价",summary:"边缘反转后可在中部等位置止盈，持有太久可能让价格回到入场价、利润消失。",time:"01:59–02:44",pdfPages:[1618,1619],questionIds:["18F-K04-1"]},{id:"K05",title:"反向突破与不追边缘",summary:"区间里在上沿追多、下沿追空要谨慎；弱跟随、长影线或不佳信号会进一步削弱追入理由。",time:"02:49–06:08",pdfPages:[1620,1621,1622,1623],questionIds:["18F-K05-1"]},{id:"K06",title:"成功突破需要的证据",summary:"大突破K线、随后数根的跟随、连续趋势K线、收盘靠近极值及远离旧区间，都能增强成功预期。",time:"06:15–07:20",pdfPages:[1625],questionIds:["18F-K06-1"]},{id:"K07",title:"没有巨幅突破也能形成趋势",summary:"区间可以逐渐弯曲成通道，靠连续小趋势K线、浅回调和抬高的结构发展为趋势。",time:"07:24–08:20",pdfPages:[1626],questionIds:["18F-K07-1"]},{id:"K08",title:"突破前的力量失衡",summary:"比较连续趋势K线、实体与收盘、略低高低点或略高高低点，可发现力量倾斜，但不是方向保证。",time:"08:26–11:09",pdfPages:[1627,1628,1629],questionIds:["18F-K08-1"]},{id:"K09",title:"首次错误方向与反向准备",summary:"突破模式中的第一次突破可能失败并导向反方向趋势，不能对最初方向保持僵化判断。",time:"11:25–12:47",pdfPages:[1630],questionIds:["18F-K09-1"]},{id:"K10",title:"失败后转强与突破回测",summary:"空头失败后多头占据多数K线，强阳线远收于上沿之上、回测守住突破区，支持新的向上判断。",time:"12:56–14:14",pdfPages:[1631],questionIds:["18F-K10-1"]},{id:"K11",title:"早盘与上一时段背景",summary:"课中关注时段开始的5～10根K线，结合上一时段的区间行为，而非只看最新一个信号。",time:"14:25–16:41",pdfPages:[1633],questionIds:["18F-K11-1"]},{id:"K12",title:"影线、重叠与频繁反转",summary:"十字星、明显影线、重叠、坏跟随和前一两小时多次反转，都是早期区间信号。",time:"16:50–17:43",pdfPages:[1634],questionIds:["18F-K12-1"]},{id:"K13",title:"均线、缺口与限价单市场",summary:"走平均线、开盘没有缺口、前时段区间以及限价单比突破单更易获利，都可提供补充背景。",time:"17:49–19:11",pdfPages:[1635],questionIds:["18F-K13-1"]},{id:"K14",title:"困惑作为复查背景的提醒",summary:"反复失败引起困惑焦虑时，课程把它当作提醒检查是否区间，而不是继续按趋势追入。",time:"19:18–19:41",pdfPages:[1635],questionIds:["18F-K14-1"]},{id:"K15",title:"尾盘回开盘与例外",summary:"开盘在区间中三分之一且全天来回反转时，收盘常回到开盘附近呈十字星；尾盘偶尔仍会转为趋势。",time:"19:47–20:58",pdfPages:[1636],questionIds:["18F-K15-1","18F-K15-2"]}],questions:[{prompt:"“多数突破会失败”与“区间最终会突破”应该怎样同时理解？",options:["既然多数失败，就不必再检查后面成功突破的证据","既然最终会突破，任何一次追突破都有高胜率","失败说的是许多次尝试，最终突破说的是区间的演变结果"],answer:2,explanation:"一次尝试和长期演变不是同一个问题，二者可以同时成立。",imageKey:null,id:"18F-K01-1",knowledgeId:"K01",knowledgeTitle:"惯性和最终突破不矛盾",time:"00:14–00:36",pdfPages:[1616,1620],type:"理解判断",quote:`00:14 当市场处于震荡区间时
00:16 请记住我的80%法则
00:19 不要压住突破
00:21 因为80%的突破尝试会失败
00:25 然而所有震荡区间最终会成功的突破
00:28 然后进入趋势
00:30 我会在接下来讲到这一点
00:32 每个趋势最终都会演变成震荡区间
00:36 所以我会谈到震荡区间的早期信号`},{prompt:"观察蓝色区间中反复往返的价格，本课通常怎样看中部？",options:["既然价格经常经过，就一定是最好的开仓位置","经常被回测，但通常不是理想新开仓位置","只要在中部成交，就不再需要看另一侧距离"],answer:1,explanation:"经常到达不等于进场优势大。课程区分目标区域与新开仓位置。",id:"18F-K02-1",knowledgeId:"K02",knowledgeTitle:"边缘与中间的不同位置",time:"00:44–01:26",pdfPages:[1617],type:"图表应用",quote:`00:44 当市场处于震荡区间时
00:46 它不会花很多时间在上沿或下沿
00:49 它通常会反转回到区间的当中
00:52 3分之1大部分交易发生在区间的当中
01:00 价格不断被拉回到中间
01:02 通常那是一个不好的开仓点位
01:08 更好的做法是在下沿压住空头的突破会失败
01:13 也就是在下沿买入做多
01:16 空头尝试突破小双底
01:18 在下沿买入做反转
01:21 期待市场至少有足够的涨幅可以做剥头皮交易
01:26 交易者应该在上沿寻找卖出做反转的机会`,image:{src:"/charts/18f-range.webp",solutionSrc:"/charts/18f-range-solution.webp",page:1617,alt:"蓝色区间中上下往返的K线"}},{prompt:"本课通常不在中部开仓，却举过中部卖出的情况，关键额外条件是什么？",options:["极端反转与被套多头急于退出，仍预期有足够的短线下跌空间","只要当前K线是阴线，就自动取消位置要求","只要不想等待边缘，就能在中部任意开仓"],answer:0,explanation:"保留例外的背景，不能只记“中部永不交易”，也不能把特殊案例变成普遍许可。",imageKey:null,id:"18F-K03-1",knowledgeId:"K03",knowledgeTitle:"中部规则的特殊案例",time:"01:30–01:51",pdfPages:[1618],type:"理解判断",quote:`01:26 交易者应该在上沿寻找卖出做反转的机会
01:30 两段上涨
01:31 两段上涨一回调二柱前两节课讲的第二段陷阱
01:37 这里有点难办
01:38 反转上涨如此的高潮和极端
01:41 被套牢的多头急于止损离场
01:44 在这种情况下 你可以在区间的中间卖出
01:49 期待市场还会再跌一点
01:51 至少有剥头皮的利润`},{prompt:"从下沿买入后已经有一段利润，为什么不能只因期待突破就忽略回落？",options:["区间中只允许在另一边精确最高价止盈","区间中价格可能回到原入场价，原有短线利润不等于趋势仓位已经成立","只要曾经盈利，最终结果就不会亏损"],answer:1,explanation:"本课强调及时兑现与区间回归特征，目标与管理应随背景匹配。",imageKey:null,id:"18F-K04-1",knowledgeId:"K04",knowledgeTitle:"短线止盈与持有代价",time:"01:59–02:44",pdfPages:[1618,1619],type:"理解判断",quote:`01:59 在震荡区间中要意识到的一件重要事情是
02:03 剥头皮交易可以赚到更多钱
02:05 因为如果你不止赢
02:07 是市场往往会回到你的入场价格
02:10 如果你在这里买入 不在这里止盈离场
02:13 结果市场会一直回到你的入场价
02:16 这里也是一样 如果你在这里卖出做空没有及时止盈
02:21 市场会回到你的入场价
02:23 然后你就必须决定该怎么做主
02:26 打平离场还是继续持有
02:29 艰难
02:30 一些交易者喜欢用限价单卖出
02:34 比如在上沿的大阳线收盘卖出
02:37 或者在下沿的大阴线收盘买入
02:40 同样当市场跌回到区间的
02:44 中部时止盈`},{prompt:"下沿附近阴线看似突破，但下影很长、随后跟随差，又出现不佳熊旗，最需要防止什么？",options:["认为有下影就已经保证反向大涨","认为任何熊旗一出现都比支撑背景更重要","忽略下沿与失败迹象，继续仅凭熊旗名称追空"],answer:2,explanation:"课程要求位置、影线、跟随一起看，既不追弱突破，也不把反向结果说成必然。",imageKey:null,id:"18F-K05-1",knowledgeId:"K05",knowledgeTitle:"反向突破与不追边缘",time:"02:49–06:08",pdfPages:[1620,1621,1622,1623],type:"理解判断",quote:`02:49 交易者期望突破尝试失败
02:52 并且价格会回到区间中部
02:55 多头突破空头突破多头
02:58 突破空头突破空头突破
03:00 空头突破 因此交易者会反向操作
03:04 反向操作的意思是压铸突破会失败
03:07 所以如果你遇到多头突破
03:10 反向操作就是卖出做空
03:12 如果你遇到空头突破
03:14 反向操作就是买入做多
03:16 震荡区间不断尝试突破 每一个阳线
03:20 每一个带上影线的K线
03:22 都是一次向上突破的尝试
03:25 每一个阴线带下影线的K线
03:28 都是一次向下跌破的尝试
03:33 我的80%法则
03:35 震荡区间中80%突破的尝试会失败
03:40 因此押注突破失败可以赚更多钱
03:43 而不是押注突破会成功
03:50 在上沿附近买入是不好的
03:52 看起来不错的阳线小双底
03:55 也许这算是一个合理的做多机会
03:58 如果你买入了
03:59 市场两次尝试上涨失败后反转下跌
04:02 你在这里止损离场还好
04:04 然而在这里买入做多就很糟糕了
04:08 不是说他不可能成功 但最好还是等一下
04:11 看看后面的跟随怎么样
04:13 如果你直接买入 然后看到这种跟随
04:17 你就知道肯定会亏钱
04:21 在下沿附近卖出做空也是一样
04:24 空头突破 但是下影线很长
04:27 糟糕的跟随K线
04:28 一些空头会把它看作是突破后的反弹
04:32 然后在这根K线的下方卖出 我不会这么做
04:37 在震荡区间下沿的雄奇做空
04:39 而且做空信号K又不好
04:42 因此在它的收盘价或在这个
04:44 阳线下方卖出是一个亏损的策略
04:54 你应该做相反的事情
04:56 你应该高抛低吸 剥头皮赚快
05:00 钱英文的缩写就是b laus
05:02 压铸突破会失败当你看到空头尝试突破
05:07 有经验的交易员会在阴线买入做多
05:10 压铸突破会失败
05:12 两段式的反转 上涨一回调2
05:15 这是高二做多入场点
05:18 在下沿附近买入 这是合理的做多机会
05:23 反转下跌发生在两段上涨之后 一回调2
05:27 两段上涨一回调2 在阳线的收盘卖出做空
05:31 如果你不想等K线收盘后
05:34 在它的低点下方卖出
05:36 或者在它的低点下方卖出
05:38 因为它有可能体积很大 入场晚盈亏比就差了
05:42 所以很多交易者会直接在阳线的收盘卖出
05:46 他们认为多头需要再制造一根阳线
05:50 大概率他们无法做到
05:52 所以我直接在大阳线的收盘做
05:54 空压住下一根K线会是阴线
05:56 这里也是一样
05:58 你可以在他的收盘价做空压住
06:00 多头至少需要再制造一根K线
06:03 而他们大概率无法做到
06:05 所以直接在他的收盘卖出
06:08 或者你可以在那根阴线下方卖出`},{prompt:"与只刺出区间上沿相比，图中哪类证据更支持成功脱离？",options:["以第一根大阳线是否创局部新高为主，后续跟随只用于缩小止损","只看连续阳线数量，不区分价格是否仍处在大区间内部","大阳线明显收在旧区间上方，随后仍有同方向推进"],answer:2,explanation:"课程明确同时看突破幅度、收盘位置、连续性和跟随。大K线只是证据之一。",id:"18F-K06-1",knowledgeId:"K06",knowledgeTitle:"成功突破需要的证据",time:"06:15–07:20",pdfPages:[1625],type:"图表应用",quote:`06:15 所有震荡区间最终都会突破 变成趋势
06:22 市场处于震荡区间
06:24 然后有几根非常大的阳线收盘
06:28 远高于过去40 50 60根K线的高点
06:34 任何震荡区间最终会成功的突破
06:37 如果你等到强势的突破再入场
06:40 会有更高的概率可以赚到钱
06:43 我所说的强势突破是什么意思？
06:46 有一个非常大的突破K线是好的
06:49 在下一根K线或接下来的
06:52 23或4根K线有跟随是好的
06:55 连续的大阳线增加成功突破的概率
07:00 K线顶部没有上影线或上影线非常短
07:03 这根K线的收盘价高于前期很多K线的高点
07:07 这里这根K线的收盘价高于
07:10 过去50或60根K线的高点
07:14 这里有一个震荡区间突破模式
07:17 50%概率会向上突破
07:20 50%概率会向下突破`,image:{src:"/charts/18f-successful-breakout.webp",solutionSrc:"/charts/18f-successful-breakout-solution.webp",page:1625,alt:"标记的向上突破K线及紧邻的同方向跟随"}},{prompt:"图中从蓝色区间逐渐弯成绿色通道，却没有突然的巨大阳线，应如何理解？",options:["趋势可以逐步形成，观察浅回调和持续抬高结构，不必等一根惊人的突破线","没有大突破K线就维持水平区间结论，直到出现明显跳空","绿色通道的倾斜标记足够确认，不再需要看浅回调与结构"],answer:0,explanation:"这里考查渐变过程，绿色只是原课件辅助标记，依据仍是价格结构和推进。",id:"18F-K07-1",knowledgeId:"K07",knowledgeTitle:"没有巨幅突破也能形成趋势",time:"07:24–08:20",pdfPages:[1626],type:"图表应用",quote:`07:24 有时震荡区间只是慢慢变弯变成趋势
07:28 而没有任何强势的突破
07:31 公投希望能够向下跌破高点降低
07:34 然后向下反转突破
07:36 制造一系列更低的高点和低点
07:39 而多头则希望能制造更高的高点
07:43 更高的高点相比他而言 低点也抬高了
07:46 多头希望可以继续这样上涨
07:49 变成一个宽上涨通道 最终多头获胜了
07:53 这里有连续小阳线的突破 但仍然在区间内
07:57 而这里的突破后面还有跟随概率
08:00 会再涨一些 但这个突破并不怎么惊人
08:04 每当价格回调
08:05 多头都继续买入 所以回调很小
08:09 上涨通道很窄 结果就变成了上涨趋势
08:12 但其中没有出现过非常强势的大阳线
08:16 突破这里有一点点
08:18 突破这里更多一点
08:20 但最终仍然形成了上涨趋势`,image:{src:"/charts/18f-gradual-trend.webp",solutionSrc:"/charts/18f-gradual-trend-solution.webp",page:1626,alt:"从蓝色横盘区域过渡到绿色倾斜通道的局部"}},{prompt:"区间里出现五六根连续阴线，阳线段多只有一两根，并伴随略低高低点，提示什么？",options:["左边仍是上涨趋势，因此这些阴线只需按顺势回调理解","卖压可能在增强，应更新方向预期，但保留失败可能","连续阴线数量已足够决定方向，实体与结构只影响入场价"],answer:1,explanation:"本课用双方连续性比较解释早期失衡。它提供线索，不是只凭根数就知道未来。",id:"18F-K08-1",knowledgeId:"K08",knowledgeTitle:"突破前的力量失衡",time:"08:26–11:09",pdfPages:[1627,1628,1629],type:"图表应用",quote:`08:26 震荡区间高点在降低
08:28 低点在抬高 这是突破模式
08:37 交易者总是在突破之前尝试
08:40 发现多空双方力量的不平衡
08:43 想要提前判断突破的方向
08:46 这样他们可以在突破发生之前就入场做波段交易了
08:55 这里有没有任何的迹象表明更有可能
09:00 朝哪个方向突破？
09:02 这里有连续
09:04 五根阴线 这里连续六根阴线
09:11 有降低的低点和高点
09:14 再看一看
09:15 连续的阳线 这里有连续二根阳线
09:19 这里有两根
09:20 这里有二根空投拥有更多的连续K线
09:25 那就是脉压
09:26 尽管左边是上涨趋势
09:28 然后回调发展成一个震荡区间
09:32 空头开始拥有更多的K线 更多的连续K线
09:37 这里还有三根阴线
09:38 这是空头比多头更强的早期迹象
09:42 然后这里这里这里这里这里更低的低点
09:46 尽管这个低点仍然更高
09:49 左边仍然是上涨趋势 但有早期迹象表明
09:53 空头更可能会胜利
09:57 最终空投确实获胜 从来没有强势的大阴线
10:02 但空投确实突破了 并且价格不断的下跌
10:11 反转上涨 但多头的力量并不强
10:14 这个阳线之后的跟随不好
10:16 这个阳线之后的跟随不好
10:19 抛物线楔形顶一二三大概率会开始横盘
10:25 最初这是一个回调
10:27 但一旦达到12 13 10根K线
10:31 我说它是震荡区间回调的
10:33 意思是我假设市场会恢复上涨
10:36 但过了10、20或30根K线还没有恢复上涨的时候
10:41 我说它是震荡区间
10:42 震荡区间意味着多头突破的概率
10:45 趋势恢复上涨已经变得和空头
10:48 突破趋势反转下跌的概率相同
10:53 再来观察这些下跌的波段
10:56 连续的阴线大部分收在最低
11:00 再来和上涨波段进行对比
11:03 连续的大阳线在哪里呢？
11:06 空头开始占据更多的K线
11:09 这是空头更强势的迹象`,image:{src:"/charts/18f-pressure.webp",solutionSrc:"/charts/18f-pressure-solution.webp",page:1628,alt:"区间内两个红色下跌段与相邻反弹的比较"}},{prompt:"首次向下收破区间后却反转向上，下一步最该保留哪种准备？",options:["评估向上成功突破的可能，不把首次方向当最终答案","首次向下已经收破，所以反向上涨仍应按空头的小回调理解","首次向下失败后，把向上视为确定方向，省略新的突破确认"],answer:0,explanation:"本课要求看到突破时同时准备可能的反向趋势；重新评估仍需证据，而非把保证从一边换到另一边。",imageKey:null,id:"18F-K09-1",knowledgeId:"K09",knowledgeTitle:"首次错误方向与反向准备",time:"11:25–12:47",pdfPages:[1630],type:"理解判断",quote:`11:25 下降趋势反弹 反弹发展到20根或更多K线
11:29 所以变成了震荡区间
11:32 50%的概率多头突破会成功
11:35 即趋势会反转
11:37 50%的概率空头突破会成功
11:41 即恢复下降趋势
11:43 此外每当市场处于窄震荡区间时
11:46 它就处于突破模式
11:48 50%的概率第一次突破会失败
11:52 这里尝试向下突破 但反转上涨
12:00 交易者直到每次突破都有可能被反转
12:05 他们预期会朝反方向突破
12:08 空投有三根连续的阴线
12:11 收盘略低于这个低点
12:14 低于前期所有的低点
12:16 所以这是一次空头突破 但反转上涨
12:21 所以每当你看到突破时要准备好应对
12:25 反向的突破和反方向的趋势相同的情况
12:28 在这里也有可能会发生多头突破
12:32 但它有失败的可能性
12:34 可能会反转下跌进入下降趋势
12:36 然后空头在这里有一个相当好的突破机会
12:40 这里有一个相当好的突破机会
12:42 但是价格却反转上涨
12:44 多头制造了这根相当好的阳线
12:47 然后市场进入上涨趋势`},{prompt:"空头失败后9根里只有1根阴线，再出现远高于旧高的大阳线，随后回测突破区，判断依据是什么？",options:["多头连续性、实际脱离幅度与回测后的反应共同增强向上解释","只要回测出现一根阴线，就说明多头证据全部无效","只因第一次向下失败，就已保证这次上涨必达目标"],answer:0,explanation:"原文从失败、力量占比到强突破再到回测，逐步建立判断。不能只凭其中一个标签。",imageKey:null,id:"18F-K10-1",knowledgeId:"K10",knowledgeTitle:"失败后转强与突破回测",time:"12:56–14:14",pdfPages:[1631],type:"理解判断",quote:`12:56 看看这里发生了什么
12:58 在那次空头的突破尝试之后
13:00 这里的9根K线里面只有一根是阴线
13:04 空头失去了对市场的掌控
13:07 虽然也没有很多强势的阳线
13:09 但在九根K线中只有一根是阴线
13:13 多头占据了很多K线
13:18 大阳线收在最高
13:20 事实上过去40或50根K线中
13:23 无论是阴线还是阳线 体积都没有它大
13:27 它不仅收盘在震荡区间的上方
13:30 而且远高于区间的上沿
13:33 这增加了多头突破成功的概率
13:36 空头尝试反转
13:37 他尝试让它成为一次失败的突破
13:41 但这只是突破后的回测回测了这个突破点
13:45 事实上在这个高点和那个
13:47 低点之间可能有一个小缺口
13:50 而且做多信号K线很不错
13:53 价格突破了牛骑回调之后再次突破
14:02 牛骑在阳线的高点上方一个take买入
14:06 你可以说它是一个更大的牛骑
14:10 或者说它是突破牛其之后的回调
14:14 所以它是这个上涨趋势中的一个小牛其`},{prompt:"前一时段本来就有很多区间行为，早盘又出现混杂、缺乏跟随的K线，怎样理解？",options:["只要前一时段是区间，今天所有时段都不可能出现趋势","开盘后的第一根K线足以完全替代左边背景","增加接下来数小时继续区间行为的可能，但仍需随新证据更新"],answer:2,explanation:"原文把上一时段和早盘结合起来，不是只依据单根K线，也不保证整天不变。",imageKey:null,id:"18F-K11-1",knowledgeId:"K11",knowledgeTitle:"早盘与上一时段背景",time:"14:25–16:41",pdfPages:[1633],type:"理解判断",quote:`14:25 所有的趋势
14:26 所有的通道最终都会变成震荡区间
14:30 接下来我想讲一讲向
14:32 震荡区间转变的早期信号
14:41 这是欧元对美元的五分钟K线图
14:46 是美盘时段的开始
14:48 外汇不存在精确的开盘时间
14:50 但大约是在太平洋时间的早上午三时左右
14:55 我总是关注前5到10根K线
15:00 它们看起来怎么样 有几根阳线
15:03 但随后是一根阴线
15:05 一根阳线 然后是十字星
15:08 然后是阴线 然后再上涨
15:10 再看看左边
15:11 很多震荡区间的价格行为缺乏连续的大阳线、大阴线
15:17 这里有两根大阳线 但很快向下反转了
15:21 这里有一根大阴线
15:23 但随后是十字星 阴线、十字星
15:26 这看起来像一个即将变成震荡区间的下跌波段
15:30 这看起来像一个即将
15:32 变成震荡区间的上涨波段
15:36 早盘有很多震荡区间
15:39 的价格行为
15:41 夜盘的下跌之中也有
15:43 很多震荡区间的价格行为
15:46 这意味着这个下降通道
15:48 可能很快就会变成震荡区间
15:54 至少在今天开盘后的13小时内
15:57 市场很可能会出现震荡区间的价格行为
16:01 事实也确实如此
16:03 强势的大阳线突破但没有跟随
16:07 再次尝试突破但没有跟随早盘的前几根K线
16:11 就预示了今天会有很多震荡区间的价格行为
16:16 特别是在下降趋势很弱的情况下
16:20 这看起来像震荡区间中的一个下跌波段
16:24 下降通道弱
16:25 下降趋势很可能会演变为震荡区间
16:28 事实也确实如此 当你在这里往回看的时候
16:32 你会说这是震荡区间的一部分
16:35 尽管此时市场仍然处于下降趋势之中
16:39 这确实是下降趋势
16:41 但是很可能是即将变成震荡区间的下跌波段`},{prompt:"图中早盘反复重叠、上下影明显、阳阴交替，较合理的早期预期是什么？",options:["影线多只影响图形美观，与双向交易无关","只要有一次反转后上涨，就确认全天强多头","提高区间日的可能性，避免把每次短线推进都当全天趋势"],answer:2,explanation:"这些线索需要组合观察，说明双方推进不顺、反转频繁；不是从一个十字星推出整天确定结果。",id:"18F-K12-1",knowledgeId:"K12",knowledgeTitle:"影线、重叠与频繁反转",time:"16:50–17:43",pdfPages:[1634],type:"图表应用",quote:`16:50 如果把它看作早盘的第一根K线
16:54 它是一个十字星
16:55 这里所有的K线都有非常明显的引线
17:00 K线都重叠在一起
17:02 这些K线几乎完全重叠很多反转
17:06 上下这些都是震荡区间的价格行为
17:10 这增加了市场在前几个
17:13 小时会很多震荡的概率
17:17 而且增加了一整天都会有很多震荡的概率
17:25 阴线阳线阳线 然后是阴线
17:29 没有好的跟随 很多反转
17:35 在前一两个小时内有至少五次反转
17:39 很多阳线很多阴线来回的反转
17:43 这是震荡区间的价格行为`,image:{src:"/charts/18f-early-range.webp",solutionSrc:"/charts/18f-early-range-solution.webp",page:1634,alt:"早盘K线的影线、重叠和反转局部"}},{prompt:"哪种补充现象与本课区间日判断更一致？",options:["均线上方就必定强趋势，其他背景无须检查","所有外汇开盘都必须像股票那样有跳空缺口","均线走平、限价单反向交易比追突破更容易获利"],answer:2,explanation:"课程同时提醒外汇一般没有同样明确的跳空开盘，不能把股票期货缺口逻辑不加区别套过去。",imageKey:null,id:"18F-K13-1",knowledgeId:"K13",knowledgeTitle:"均线、缺口与限价单市场",time:"17:49–19:11",pdfPages:[1635],type:"理解判断",quote:`17:49 这里我没有显示均线ema 20
17:52 因为均线肯定是平的这是
17:55 市场没有趋势的另一个信号
18:00 开盘没有跳空缺口
18:02 外汇市场通常没有跳空缺口
18:05 但期货和股票经常有跳空缺口
18:08 没有跳空缺口和这种震荡区间的价格行为
18:13 都增加了今天会震荡的概率
18:23 这么多的反转 每次突破都没有跟随
18:27 用限价卖单在K线上方卖出做空压住多头突破会失败
18:32 更容易赚钱
18:33 在K线下方买入压住空头突破会失败
18:37 比通过突破单入场更容易赚钱
18:39 突破单笔限价单成功率低
18:42 这是震荡区间日的另一个信号
18:46 我称之为限价单
18:48 市场将限价单你通过突破单更容易赚钱时
18:52 市场大概率就处于震荡区间之中
18:56 前一个交易时段是震荡区间
18:59 或者说它有很多震荡区间的价格行为
19:03 这一部分是下降趋势 但主要是震荡的
19:07 它更像一个宽的下降通道
19:10 有很多大反弹
19:11 几乎就是一个略微向下倾斜的震荡区间`},{prompt:"连续追突破受挫，开始对反转感到困惑，课程建议把这种感受用来做什么？",options:["提醒自己复查是否处于区间，并回到实际价格行为","把焦虑当作市场将突破的确定信号，加快追单","既然感到困惑，就认定任何图表证据都无效"],answer:0,explanation:"感受是复查背景的线索，不是独立的预测指标，也不是证明下一次一定如何。",imageKey:null,id:"18F-K14-1",knowledgeId:"K14",knowledgeTitle:"困惑作为复查背景的提醒",time:"19:18–19:41",pdfPages:[1635],type:"理解判断",quote:`19:18 如果你看着K线图并感到困惑
19:20 不明白为什么会有这么多反转
19:23 或者你感到焦虑
19:25 这就是你的内置雷达在提醒你
19:28 市场很可能处于一个震荡区间
19:30 所以保持冷静
19:32 把它当做一个震荡区间来交易就好
19:35 不要像在趋势里那样追涨杀跌
19:37 这不是一个趋势 而且不会成为
19:41 一个趋势`},{prompt:"若全天主要围绕中部往返，尾盘重新测试开盘区域，本课通常观察什么？",options:["只要接近开盘价，就必须精确同价收盘","早盘区间已保证尾盘永远不会出现趋势","收盘可能回到开盘附近，形成区间日或日线十字星"],answer:2,explanation:"这是带条件的常见倾向，原文和课件都保留尾盘转为趋势日的可能。",imageKey:null,id:"18F-K15-1",knowledgeId:"K15",knowledgeTitle:"尾盘回开盘与例外",time:"19:47–20:58",pdfPages:[1636],type:"理解判断",quote:`19:47 震荡区间日通常会不断反转
19:49 反复测试区间当中的3分之1
19:53 下午的时候如果价格尝试突破开盘价
19:56 他通常会回测开盘价
19:59 收盘价往往在开盘价的
20:01 附近筑集日K线是十字星
20:04 如果开盘价在当天区间当中的3分之1
20:08 收盘价往往会回到开盘价的附近
20:11 偶尔市场会在尾盘突然
20:13 变成上涨趋势或下降趋势
20:15 但大多数时候
20:17 当价格在开盘价上下来回反转
20:20 而开盘价又在区间当中的3分之1时
20:23 最后也会在当中的3分之1区域收盘
20:27 而在日线图上 K线最终会成为一根十字星
20:37 尝试在尾盘突破形成趋势
20:41 但突破并不怎么强势
20:43 大概率会跌回来回撤开盘价
20:50 这个时段从窄震荡区间开始
20:53 一整天的振幅很窄 最后在开盘价
20:58 附近收盘`,referenceImage:{src:"/charts/18f-close-solution.webp",page:1636,alt:"第1636页课件整页讲解",kind:"课件整页"}},{prompt:"“开盘在中三分之一、通常回到开盘附近收盘”可否当作尾盘必然结果？",options:["不能，因此开盘位置和全天背景完全没有参考价值","可以，开盘位置可以消除当天所有后续信息","不能，要继续观察新突破和跟随，尾盘也可能转为趋势"],answer:2,explanation:"不要把通常倾向说成保证，也不要因存在例外就完全放弃背景判断。",imageKey:null,id:"18F-K15-2",knowledgeId:"K15",knowledgeTitle:"尾盘回开盘与例外",time:"19:47–20:58",pdfPages:[1636],type:"变式辨析",quote:`19:47 震荡区间日通常会不断反转
19:49 反复测试区间当中的3分之1
19:53 下午的时候如果价格尝试突破开盘价
19:56 他通常会回测开盘价
19:59 收盘价往往在开盘价的
20:01 附近筑集日K线是十字星
20:04 如果开盘价在当天区间当中的3分之1
20:08 收盘价往往会回到开盘价的附近
20:11 偶尔市场会在尾盘突然
20:13 变成上涨趋势或下降趋势
20:15 但大多数时候
20:17 当价格在开盘价上下来回反转
20:20 而开盘价又在区间当中的3分之1时
20:23 最后也会在当中的3分之1区域收盘
20:27 而在日线图上 K线最终会成为一根十字星
20:37 尝试在尾盘突破形成趋势
20:41 但突破并不怎么强势
20:43 大概率会跌回来回撤开盘价
20:50 这个时段从窄震荡区间开始
20:53 一整天的振幅很窄 最后在开盘价
20:58 附近收盘`}],sourceFile:"BTC PAF 18F Trading Ranges_中文 (源语言).srt"},{id:"19A",group:"支撑与阻力",title:"支撑阻力、市场背景与目标",range:"00:00–32:16",revision:"support-19a-v1",notes:["支撑与阻力是可能反转、也可能突破的区域；先判断强趋势还是交易区间，再理解价格到达这些位置后的反应。","结合前高前低、趋势线与通道、测量目标、突破跟随和反转结构判断；目标汇合值得关注，但止盈位置不等于强反转已确认。","按所交易的时间周期判断信号、止损与目标；先看价格结构，不用新闻叙事替代图表，也不把课程概率或精确案例当成每次必然。"],knowledgePoints:[{id:"K01",title:"支撑的含义",summary:"支撑是当前价格下方、买盘可能强于卖盘的价格区域；过去的买入和反弹可帮助识别，但不保证下一次仍有效。",time:"00:46–01:18",pdfPages:[1641],questionIds:["19A-K01-1"]},{id:"K02",title:"阻力的含义",summary:"阻力区域附近反复出现卖盘，使价格难以继续上涨；识别这种价格行为，不要求先知道卖出的新闻理由。",time:"01:23–01:53",pdfPages:[1642],questionIds:["19A-K02-1"]},{id:"K03",title:"转折点不是必然反转点",summary:"支撑与阻力也称转折点，是市场选择突破或反转的区域，接近时要为两种结果作准备。",time:"01:57–03:33",pdfPages:[1643],questionIds:["19A-K03-1"]},{id:"K04",title:"强趋势中的惯性",summary:"在强下降趋势中，潜在支撑常无法阻止下跌；强上涨趋势也常突破阻力。课程用约80%的描述强调趋势惯性。",time:"03:37–04:20",pdfPages:[1644],questionIds:["19A-K04-1","19A-K04-2"]},{id:"K05",title:"反转尝试变成熊旗",summary:"强下降趋势中的反弹可在下降趋势线、通道上沿等阻力处失败，随后成为熊旗，下降趋势恢复。",time:"04:21–05:10",pdfPages:[1644],questionIds:["19A-K05-1"]},{id:"K06",title:"跌破前低与跟随",summary:"大阴线收在前低下方，后续仍出现阴线，是课程用来判断支撑失败和下跌延续的组合；不能只看触及前低。",time:"05:15–06:05",pdfPages:[1644],questionIds:["19A-K06-1"]},{id:"K07",title:"测量型缺口与下方目标",summary:"强向下突破后，反弹未回到原低点上方，缺口可作为测量型缺口的候选，用相应高度向下投射潜在支撑。",time:"06:07–07:18",pdfPages:[1645],questionIds:["19A-K07-1"]},{id:"K08",title:"支撑汇合、止盈与反转级别",summary:"下降后期，三推抛物线楔形、测量目标和通道下沿汇合可构成支撑；空头可考虑止盈，但窄下降通道后的反弹仍可能只是小反转和区间。",time:"07:21–08:08",pdfPages:[1645],questionIds:["19A-K08-1","19A-K08-2"]},{id:"K09",title:"区间中的惯性与剥头皮",summary:"区间背景下，课程预期多数突破尝试失败；因为上下空间受到边界限制，交易者倾向低买高卖、及时止盈。",time:"08:12–09:11",pdfPages:[1646],questionIds:["19A-K09-1"]},{id:"K10",title:"边界上的开仓与止盈",summary:"区间上沿，空头可能卖出、多头可能止盈；下沿，多头可能买入、空头可能止盈。课程还强调反转和第二次入场信号。",time:"09:17–10:03",pdfPages:[1647],questionIds:["19A-K10-1","19A-K10-2"]},{id:"K11",title:"市场寻找能促进成交的价格",summary:"市场使买卖双方更容易找到对手方，持续寻找能够促成更多交易的价格区域，而不是从一开始就知道固定的公平价格。",time:"10:06–10:38",pdfPages:[1648],questionIds:["19A-K11-1"]},{id:"K12",title:"公平价格变化与走过头",summary:"新的变量持续进入，公平价格不断变化。市场往往要走得过高或过低，才发现某一方不愿继续成交，然后向另一方向寻找对手方。",time:"10:41–11:52",pdfPages:[1648,1651],questionIds:["19A-K12-1"]},{id:"K13",title:"磁吸与重复测试",summary:"支撑阻力吸引价格前去测试：在那里是否出现更多买卖方、一方是否放弃。反复在同一区域转向，会增强交易者对该区域的关注。",time:"11:53–12:38",pdfPages:[1649],questionIds:["19A-K13-1"]},{id:"K14",title:"趋势线失效与放弃K线",summary:"大幅跌破上涨趋势线时，原位置的买盘可能已不足；多头卖出离场与空头卖出共同促成突破。需结合末端高潮和反转信号，而非只看一根大阳线。",time:"12:41–13:42",pdfPages:[1650],questionIds:["19A-K14-1"]},{id:"K15",title:"从跟随和反转识别公平区间两端",summary:"上方反复冲高回落、出现上影线，提示买家不愿继续追价；下方大阴线缺乏跟随并在原买入区反弹，提示卖家减少。",time:"13:49–14:45",pdfPages:[1651],questionIds:["19A-K15-1"]},{id:"K16",title:"新闻解释与图表依据",summary:"课程主张先从支撑阻力测试解释图中波动；新闻有时可能是催化剂，不能用事后的新闻叙事替代对价格结构的观察。",time:"14:50–17:03",pdfPages:[1653,1654],questionIds:["19A-K16-1"]},{id:"K17",title:"月线案例与长期基本面",summary:"美元兑日元月线案例先看楔形下降通道、抛售高潮及向上突破，再看低点抬高与强势跟随；课程同时承认基本面可决定持续多年的方向。",time:"17:05–19:47",pdfPages:[1655],questionIds:["19A-K17-1","19A-K17-2"]},{id:"K18",title:"支撑变阻力与下方投射",summary:"月线案例中，旧支撑被跌破后在反弹中变成阻力；这个重要价位还能参与向下测量，在目标附近结合楔形底观察反弹。",time:"19:48–20:19",pdfPages:[1655],questionIds:["19A-K18-1"]},{id:"K19",title:"止损匹配所交易的周期",summary:"按月线信号交易，要用月线背景设置止损与目标；不同周期可能同时呈现相反方向，不能随意把五分钟波动当成月线失效。",time:"20:23–21:14",pdfPages:[1657],questionIds:["19A-K19-1"]},{id:"K20",title:"日内信号频率与月线信号",summary:"同一价格可以对应月线双内包K线高一牛旗突破和五分钟入场位置；但日内交易不能等三个月才依赖一个月线信号。",time:"21:17–22:14",pdfPages:[1658],questionIds:["19A-K20-1"]},{id:"K21",title:"其他周期的影响与眼前图表",summary:"五分钟大波动可能对应其他周期的支撑阻力；课程并未因此要求不停切图，而是强调通常可从眼前图表找到足够的价格行为线索。",time:"22:19–23:25",pdfPages:[1659],questionIds:["19A-K21-1"]},{id:"K22",title:"强多头突破与次要阻力",summary:"大阳线强势收过前高并有跟随时，课程倾向价格继续向上测试更高阻力；不能把每个次要阻力都按区间边界看待。",time:"23:28–24:04",pdfPages:[1660],questionIds:["19A-K22-1"]},{id:"K23",title:"大阳线实体与多重测量目标",summary:"案例用大阳线开盘到收盘的高度向上投射目标，并结合另一段上涨与缺口的测量；多个目标接近时形成可能的止盈与阻力区域。",time:"24:05–25:10",pdfPages:[1660],questionIds:["19A-K23-1","19A-K23-2"]},{id:"K24",title:"加速突破通道上沿",summary:"案例在上涨通道上沿附近尝试加速，课程提醒这种突破可能很快失败并回到通道内；不能把末端加速直接当作新突破阶段。",time:"25:12–25:30",pdfPages:[1660],questionIds:["19A-K24-1"]},{id:"K25",title:"惊喜阴线与第二段预期",summary:"看似不错的高二、多头反转架构后突然出现大阴线，要重新评估背景；课程预期至少一小段第二段下跌，并查看后续卖盘是否跟随。",time:"25:31–26:04",pdfPages:[1661],questionIds:["19A-K25-1"]},{id:"K26",title:"向下缺口与失败的多头入场",summary:"强阴线后的缺口可能用于向下测量；表面上的高一、高二做多尝试，在更大背景下也可能是高点降低的双顶熊旗。",time:"26:04–26:35",pdfPages:[1661],questionIds:["19A-K26-1"]},{id:"K27",title:"测量目标、通道下沿与楔形底汇合",summary:"下跌到测量目标附近，又在三推下降通道下沿略微跌破后出现阳线，课程把这些信息结合为潜在支撑。",time:"26:36–27:14",pdfPages:[1661],questionIds:["19A-K27-1"]},{id:"K28",title:"区间区域与强突破外观",summary:"明显区间中，课程把上半部或上三分之一作为卖出关注区域，下半部或下三分之一作为买入关注区域，并提醒强烈的突破外观也可能失败。",time:"27:19–28:07",pdfPages:[1662],questionIds:["19A-K28-1"]},{id:"K29",title:"Emini的数据与目标精度",summary:"课程用Emini数据较统一、算法按同样价格计算解释目标常很精确，并对比不同外汇平台报价略有差异；这不是每个目标都必然精确命中的保证。",time:"28:10–28:44",pdfPages:[1664],questionIds:["19A-K29-1"]},{id:"K30",title:"通道上沿与目标汇合",summary:"强多头突破后预期第二段上涨；当第二段达到通道上沿与测量目标汇合区，课程观察多头止盈和回落。",time:"28:46–29:46",pdfPages:[1664],questionIds:["19A-K30-1"]},{id:"K31",title:"共同目标与不同交易行为",summary:"交易者可根据同样的趋势线、测量目标作出不同操作：有人挂限价单，有人等反转后进入，已有多头也可能在上沿止盈。",time:"29:50–30:37",pdfPages:[1665,1666],questionIds:["19A-K31-1"]},{id:"K32",title:"失败双顶的反向测量",summary:"跳空下跌后的双顶做空尝试失败，市场继续上涨；课程用那次下跌的高度向上投射潜在测量目标，作为另一种阻力来源。",time:"30:40–31:34",pdfPages:[1665,1666],questionIds:["19A-K32-1"]}],questions:[{prompt:"本课怎样定义支撑？",options:["现价下方可能买盘增强、卖压减少的区域","当前下跌预计结束、可直接确认趋势反转的区域","过去反弹次数最多、应优先认定本轮底部的价位"],answer:0,explanation:"支撑是潜在买卖力量变化的区域。过去反弹次数不单独决定本轮底部，存在支撑也不等于趋势反转已经确认。",id:"19A-K01-1",knowledgeId:"K01",knowledgeTitle:"支撑的含义",time:"00:46–01:18",pdfPages:[1641],type:"理解判断",quote:`00:46 支撑是低于目前价格的一个价位
00:49 在支撑的价位买盘很可能强于卖盘
00:53 换句话说 在支撑的价位抛售开始减少停止
00:57 而买盘开始占据主导
01:00 所以你常常可以
01:01 看到反弹
01:02 市场在这个价位上涨 在这个价位反弹
01:06 当价格跌到那个区域时
01:09 你必须假设多头会再次买入
01:12 就像他们之前在这里和这里买入一样
01:15 因此交易者用支撑来描述这个区域`},{prompt:"图中红色区域附近，价格多次尝试上涨后又回落。按本课定义，应怎样理解这个区域？",options:["买方已吸收卖压、即将恢复上涨的支撑区域","反复上冲后卖盘占优的潜在阻力区域","前高反复被测后，应优先认定向上突破的区域"],answer:1,explanation:"题干给的是反复上涨失败和回落。错项分别提前确认吸收卖压、只凭测试次数预测突破，忽略了已观察到的卖出反应。",id:"19A-K02-1",knowledgeId:"K02",knowledgeTitle:"阻力的含义",time:"01:23–01:53",pdfPages:[1642],type:"图表应用",quote:`01:23 空头不断的在这个价位附近卖出
01:26 他们在这里卖出
01:31 当市场再次接近这个区域时
01:33 他们很可能会继续卖出
01:36 价格是多少并不重要
01:37 你甚至不需要知道他们为什么在那个价位卖出
01:41 你只需要知道每次当价格到达这个区域
01:45 市场都无法突破它这个
01:48 区域阻止了价格的上涨
01:51 因此这就是阻力`,image:{src:"/charts/19a-resistance.webp",solutionSrc:"/charts/19a-resistance-solution.webp",page:1642,alt:"红色水平区域与多次接近该区域的K线"}},{prompt:"支撑阻力被称为“转折点”，这个名称要求保留哪种判断？",options:["到区域后先按突破处理，再用回测确认新趋势","到区域后先按反转处理，再用跟随决定反转幅度","到区域后仍需判断突破或反转两种结果"],answer:2,explanation:"转折点是市场作选择的区域，名称本身未决定方向。两种误判各把其中一种结果提前当作既定前提。",id:"19A-K03-1",knowledgeId:"K03",knowledgeTitle:"转折点不是必然反转点",time:"01:57–03:33",pdfPages:[1643],type:"理解判断",quote:`01:57 交易者称支撑和阻力为转折点
02:00 因为当市场到达支撑或阻力位位时
02:04 它可能会突破
02:06 也可能会反转
02:08 市场正在做出决定
02:10 转折点这个词代指市场
02:12 决定是否反转的那些区域
02:24 有可能会发生大幅的波动
02:27 多头在这里买入这里
02:29 他们在更高一些的地方买入
02:32 但是看这里再次下跌测试支撑时发生了什么
02:36 价格强势的跌破了支撑
02:39 每当市场接近一些之前的价位支撑位
02:43 你必须做好准备 市场可能会向上反转
02:47 也可能会强势的跌破这里
02:50 市场在震荡区间下沿强势跌破了支撑
02:57 下跌反弹了一点
02:59 当价格接近这个高点时再次下跌
03:02 当价格接近这个高点时再次下跌
03:06 这些前期的高点就是阻力
03:12 看看这里的价格行为 向上反转
03:15 再次向上反转可以画一条线
03:18 我想看看市场再次接近那条线时会怎么样
03:22 会强势跌破 还是会向上反转
03:25 价格开始反转上涨
03:27 所以交易者会在反转时
03:30 买入那条线支撑着价格`,referenceImage:{src:"/charts/19a-inflection-solution.webp",page:1643,alt:"第1643页课件整页讲解",kind:"课件整页"}},{prompt:"强下降趋势正在测试前低，本课为什么不主张仅因为“这里是支撑”就挂买单？",options:["前低有过买盘，优先按区间下沿寻找直接反弹","前低接近新低，优先按下跌衰竭寻找反转买盘","强下降惯性仍在，前低不足以单独确认双底"],answer:2,explanation:"已给强下降背景，不能仅凭过去反弹或价格处于低位确认区间、衰竭。课程先保留趋势延续预期。",id:"19A-K04-1",knowledgeId:"K04",knowledgeTitle:"强趋势中的惯性",time:"03:37–04:20",pdfPages:[1644],type:"理解判断",quote:`03:37 为什么在趋势中要花时间寻找支撑和阻力呢？
03:42 因为我的80%法则 80%的时间里
03:47 一个强下降趋势不会在支撑位停止
03:51 同样一个强上涨趋势不会在阻力位停止
03:55 市场具有惯性
03:57 它倾向于继续他之前所做的事情
04:01 这意味着如果市场处于强势的下降趋势中
04:04 每当你看到一个潜在的支撑位
04:07 你必须假设支撑会被跌破 市场会继续下跌
04:11 必须假设前期的低点不会有大量的买盘
04:14 所以不要在前期的低点挂单买入
04:17 因为价格会继续下跌`},{prompt:"“强趋势中约80%的反转尝试失败”，和“区间中约80%的突破尝试失败”，最需要区分什么？",options:["前者强调强趋势惯性，后者强调区间惯性","前者强调突破易失败，后者强调反转易失败","前者适用于首次触价，后者适用于第二次触价"],answer:0,explanation:"相同约80%的课堂描述对应不同事件：趋势中的逆转、区间中的突破。一种误判将事件互换，另一种误判把背景差异换成次数差异。",id:"19A-K04-2",knowledgeId:"K04",knowledgeTitle:"强趋势中的惯性",time:"03:37–04:20",pdfPages:[1644],type:"变式辨析",quote:`03:37 为什么在趋势中要花时间寻找支撑和阻力呢？
03:42 因为我的80%法则 80%的时间里
03:47 一个强下降趋势不会在支撑位停止
03:51 同样一个强上涨趋势不会在阻力位停止
03:55 市场具有惯性
03:57 它倾向于继续他之前所做的事情
04:01 这意味着如果市场处于强势的下降趋势中
04:04 每当你看到一个潜在的支撑位
04:07 你必须假设支撑会被跌破 市场会继续下跌
04:11 必须假设前期的低点不会有大量的买盘
04:14 所以不要在前期的低点挂单买入
04:17 因为价格会继续下跌`},{prompt:"强下降趋势里，几次看似不错的向上反转都在通道上部失败。本课倾向怎样解释？",options:["新形成区间的底部，原下降背景可先放下","新上涨的牛旗，回调后再测原下降起点","原下降中的熊旗，反弹后趋势可能恢复"],answer:2,explanation:"反弹多次在通道上部失败支持熊旗解释。错项将尚未成功的反转当成新上涨或已完成的底部。",id:"19A-K05-1",knowledgeId:"K05",knowledgeTitle:"反转尝试变成熊旗",time:"04:21–05:10",pdfPages:[1644],type:"理解判断",quote:`04:21 市场尝试用一个不错的阳线来反转
04:25 第二次尝试反转 这里是一个小双底
04:28 再次尝试反转 又一次尝试
04:31 在强下降趋势中 80%的反转尝试会失败
04:35 他们会在某种阻力位失败 比如下降趋势线
04:39 然后它们会变成熊旗
04:42 这次反弹变成了熊旗 而不是反转
04:46 市场向下突破 下降趋势恢复
04:53 当价格在趋势线反转下跌时
04:56 交易者卖出做空压住多头的反转尝试会失败
05:02 并且每次多头的反转尝试都会变成雄起
05:07 下降趋势会恢复`},{prompt:"大阴线收在前低下方，下一根仍是阴线。与单纯“价格碰到前低”相比，增加了什么信息？",options:["前低下方出现成交，增强区间下沿诱空依据","突破收盘加卖盘跟随，增强支撑失败依据","跌破后仍有阴线，增强后期抛售衰竭依据"],answer:1,explanation:"题干同时给大阴收破与下一根阴线跟随，先支持下跌延续。诱空和衰竭需要其他背景或失败反应，不能只由跌破本身推得。",id:"19A-K06-1",knowledgeId:"K06",knowledgeTitle:"跌破前低与跟随",time:"05:15–06:05",pdfPages:[1644],type:"理解判断",quote:`05:15 当有大阴线收盘在前期低点下方时
05:19 交易者卖出做空
05:21 押注后续会有更多跟随的卖盘
05:24 大阴线收在前期低点下方
05:27 下一根K线也是阴线
05:29 所以他们会卖出做空压住趋势会继续下跌
05:33 他们压住前期低点的支撑会失败
05:42 通道上沿是这条通道线的平行线
05:45 我也可以直接把这个高点和那个高点连接起来
05:49 不管怎么画线
05:51 当价格碰到通道上沿时出现了阴线
05:54 交易者会在阴线下方卖出做
05:57 空压住这次反转的尝试会失败
06:00 下降趋势会恢复 下降趋势线是阻力`},{prompt:"下跌后的反弹没有回到前低上方，左边又有大阴线突破和跟随。课程接下来会关注什么？",options:["检查缺口回补，优先以回到原高点作为目标","检查双底回测，观察能否在原低点直接买回","检查测量型缺口，观察下方投射目标反应"],answer:2,explanation:"原低点未被重新站回，左侧还有强突破和跟随，课程因此考虑向下测量。两种误判提前按双底成功或必先回补缺口处理。",id:"19A-K07-1",knowledgeId:"K07",knowledgeTitle:"测量型缺口与下方目标",time:"06:07–07:18",pdfPages:[1645],type:"理解判断",quote:`06:07 每次趋势的反转都发生在支撑和阻力位
06:11 无论你是否知道那里有支撑或阻力
06:15 如果有反转发生
06:16 那里一定存在某种支撑或阻力
06:19 如果市场反转上涨
06:21 那一定发生在某个支撑位
06:23 比如M目标位或者趋势线
06:25 如果市场反转上涨 那一定发生在某个阻力位
06:30 比如下降通道的上沿
06:34 市场在这里反转上涨有支撑吗？
06:37 看这里 这次反弹没有回到那个低点的上方
06:42 大阴线向下突破而且有跟随
06:45 很可能是一个测量型缺*
06:47 *易者会关注这一点
06:49 他们会根据缺口的终点
06:51 这个高点和那个低点之间的缺口
06:54 或者根据这个低点把这段高度
06:57 向下翻一倍作为MM目标位
06:59 然后看市场在接近那里
07:01 时会有什么样的价格行为
07:04 M目标位是支撑在这样的下降趋势后期
07:08 交易者预期市场会转变成震荡区间
07:12 他们会寻找支撑位
07:14 其中一种支撑位是基于测量型缺口`,referenceImage:{src:"/charts/19a-bear-channel-solution.webp",page:1645,alt:"第1645页课件整页讲解",kind:"课件整页"}},{prompt:"测量目标、第三次下推和通道下沿汇合，本课为何把这里视为空头可关注的止盈位置？",options:["第三推已完成下降结构，可直接按新上涨持仓","测量目标已触及，原空头趋势可按结束处理","支撑汇合可带来反弹，但窄通道限制反转级别"],answer:2,explanation:"课程结合楔形、测量和通道止盈，仍明确窄通道后通常是小反转及区间。到目标和数满三推都不足以确认强上涨。",id:"19A-K08-1",knowledgeId:"K08",knowledgeTitle:"支撑汇合、止盈与反转级别",time:"07:21–08:08",pdfPages:[1645],type:"理解判断",quote:`07:21 三次向下推动
07:24 一二然后3或者一二然后三
07:29 在mm目标位
07:31 附近的抛物线楔形是抛售高潮
07:35 很大的概率至少会有一些反弹进入震荡区间
07:40 对于空头来说是一个很好的止盈位置
07:44 激进的多头会在那里买入
07:46 如果我把这个通道进一步向下延伸
07:49 这也是通道下沿的位置
07:55 支撑总是一个止盈部分或全部仓位的好位置
07:59 激进的交易者会买入
08:02 但这么窄的下降通道大概率只是一个小反转
08:06 然后进入震荡区间`},{prompt:"同一支撑处，平掉原有空仓与新建多头大波段仓位，应如何区分？",options:["平空与逆向开多所需依据、反转级别不同","双方在同一位置成交，因此反转级别判断相同","空头止盈提供买盘，因此后续更宜按大波段多头"],answer:0,explanation:"买回原空仓不等于建立新多仓的理由充分；同区成交也不表示持仓目标相同。窄下降通道仍限制首次反弹的级别。",id:"19A-K08-2",knowledgeId:"K08",knowledgeTitle:"支撑汇合、止盈与反转级别",time:"07:21–08:08",pdfPages:[1645],type:"变式辨析",quote:`07:21 三次向下推动
07:24 一二然后3或者一二然后三
07:29 在mm目标位
07:31 附近的抛物线楔形是抛售高潮
07:35 很大的概率至少会有一些反弹进入震荡区间
07:40 对于空头来说是一个很好的止盈位置
07:44 激进的多头会在那里买入
07:46 如果我把这个通道进一步向下延伸
07:49 这也是通道下沿的位置
07:55 支撑总是一个止盈部分或全部仓位的好位置
07:59 激进的交易者会买入
08:02 但这么窄的下降通道大概率只是一个小反转
08:06 然后进入震荡区间`},{prompt:"本课为什么把区间中的低买高卖与剥头皮联系起来？",options:["区间反转信号较多，适合主要在中间追随最新方向","区间每一段都足够强，适合等待等长延伸后退出","区间突破常失败，上下空间限制持仓目标"],answer:2,explanation:"课程由区间惯性推导边缘低买高卖及及时止盈。把每段都按趋势等长持有、在中间追最新方向，均忽略边界和有限空间。",id:"19A-K09-1",knowledgeId:"K09",knowledgeTitle:"区间中的惯性与剥头皮",time:"08:12–09:11",pdfPages:[1646],type:"理解判断",quote:`08:12 这是一个震荡区间
08:14 为什么要关注震荡区间中的支撑和阻力？
08:18 仍然是因为我的80%法则
08:21 当市场处于强势趋势时
08:23 80%反转的尝试会失败
08:26 当市场处于震荡区间时
08:28 80%突破的尝试会失败
08:34 突破尝试会在支撑和阻力位失败
08:38 震荡区间上沿有明显的阻力
08:41 震荡区间下沿有明显的支撑
08:44 你必须假设空头突破会失败
08:50 正因为交易者预期突破会失败
08:54 所以他们高抛低吸
08:57 他们预期突破会失败
08:59 所以他们预期下跌的幅度有限
09:02 上涨的幅度也有限
09:04 因此他们赚快钱离场 他们做剥头皮交易
09:07 高抛低吸 剥头皮赚快钱`},{prompt:"区间上沿出现卖盘，本课怎样解释卖出者的持仓目的？",options:["既有空头开仓，也可有原多头止盈退出","主要是新开空仓，多头止盈应集中在区间中部","主要是新开空仓，多头会等上破确认后才止盈"],answer:0,explanation:"原课同时列空头卖出做空、多头卖出止盈，并允许多头在中间或上半部退出。不能把上沿卖盘统一归为开空。",id:"19A-K10-1",knowledgeId:"K10",knowledgeTitle:"边界上的开仓与止盈",time:"09:17–10:03",pdfPages:[1647],type:"理解判断",quote:`09:17 震荡区间上沿是阻力 所以交易者卖出
09:22 空头卖出做空 多头卖出止盈
09:25 如果一个多头在这里买入
09:28 它会在震荡区间的中间或上半部分止盈
09:31 尤其是当价格开始反转下跌时
09:34 如果一个空头在这里卖出
09:37 它会在震荡区间中间或下沿止盈
09:40 尤其是当价格开始反转上涨时
09:43 多头在下沿做多
09:44 价格反转上涨 空头在上沿做空
09:48 价格反转下跌
09:49 尤其是第二做空入场点第一
09:53 入场点第二入场点第一做多入场
09:56 点第二做多入场点
09:59 如果有第二入场的机会
10:01 胜率就更高`},{prompt:"在区间边缘寻找反转机会时，本课额外强调了什么？",options:["边缘的首次触价，尤其最靠近水平线的成交价","边缘的反转价格行为，尤其第二次入场信号","边缘的大突破K线，尤其不等后续反应立即追入"],answer:1,explanation:"本段额外强调第二次反转信号；仅精确触价或突出突破K大小，都不能替代反转触发与区间背景。",id:"19A-K10-2",knowledgeId:"K10",knowledgeTitle:"边界上的开仓与止盈",time:"09:17–10:03",pdfPages:[1647],type:"变式辨析",quote:`09:17 震荡区间上沿是阻力 所以交易者卖出
09:22 空头卖出做空 多头卖出止盈
09:25 如果一个多头在这里买入
09:28 它会在震荡区间的中间或上半部分止盈
09:31 尤其是当价格开始反转下跌时
09:34 如果一个空头在这里卖出
09:37 它会在震荡区间中间或下沿止盈
09:40 尤其是当价格开始反转上涨时
09:43 多头在下沿做多
09:44 价格反转上涨 空头在上沿做空
09:48 价格反转下跌
09:49 尤其是第二做空入场点第一
09:53 入场点第二入场点第一做多入场
09:56 点第二做多入场点
09:59 如果有第二入场的机会
10:01 胜率就更高`},{prompt:"本课怎样解释市场持续上下探索价格的目的？",options:["回到此前确定的公平价格，尽量减少来回探索","沿最近一次突破方向寻找成交，以此固定公平区间","寻找让买卖双方更容易成交的价格区域"],answer:2,explanation:"本课从交易双方需要对手方解释价格探索。公平价在变化，不是已经固定的旧价，也不由最近突破方向一次决定。",id:"19A-K11-1",knowledgeId:"K11",knowledgeTitle:"市场寻找能促进成交的价格",time:"10:06–10:38",pdfPages:[1648],type:"理解判断",quote:`10:06 市场存在是为了让交易变得容易
10:10 机构创建了市场
10:12 因为他们希望交易变得容易
10:14 如果你是买家 你需要一个卖家
10:17 如果你是卖家 你需要一个买家
10:19 如果每个人都同意参与市场
10:22 找到交易的对手方就要容易得多
10:25 如果没有市场
10:26 你就只能挨家挨户的寻找愿意和你交易的人
10:32 造成的必然结果就是市场总是
10:35 尝试最大化交易的次数和数量`},{prompt:"价格上涨后，多头觉得太贵而等待回调。本课对随后回落的解释是什么？",options:["通过较低价格吸引更多愿意买入的参与者","证明上涨已结束，接着主要寻找愿意追空的参与者","回到上次公平价，因为这一阶段公平价可视为固定"],answer:0,explanation:"买家觉得太贵并等待回调，市场就降低价格寻找买家。它不表示公平价固定，也未单独证明上涨已经结束。",id:"19A-K12-1",knowledgeId:"K12",knowledgeTitle:"公平价格变化与走过头",time:"10:41–11:52",pdfPages:[1648,1651],type:"理解判断",quote:`10:41 市场在不断地寻找能够让交易最大化的价格
10:47 他从来不知道确切的价格到底是多少
10:51 因为公平价格在不断的变化
10:53 总是有无数新的变量进入市场
10:56 这意味着确切的公平价格可能只能维持一秒钟
11:01 它在不断的变化
11:03 市场通常需要跌过头才知道那个价格太低了
11:09 需要转过头才知道那个价格太高了
11:12 然后他们在一个公平价格区间内震荡
11:16 大多数时候市场都处于某种区间内
11:20 买卖双方都认为价格公平的一个区域
11:24 多头觉得这是一个足够好的买入价
11:27 空头觉得这是一个足够好的卖出价
11:30 你可以这样想 如果价格一直下跌
11:33 到了某个时刻
11:34 空头会想 价格太低了 我不想在这里卖出
11:38 如果市场一直上涨
11:39 到了某个时刻 多头会说
11:41 这太贵了 我不想在这里买
11:44 我要等回调再买
11:46 于是成交量减少
11:48 市场不得不回调来找到更多愿意买入的人`},{prompt:"把支撑和阻力称为“磁吸点”，最准确的理解是哪一个？",options:["吸引价格回到区域中点，再沿来时方向离开","吸引价格完成精确触线，再开始相反方向波段","吸引价格测试买卖力量，再决定突破或反转"],answer:2,explanation:"磁吸描述到达测试，不预设精确中点、精确碰线或反转方向。两种错误说法把位置吸引误当结果已确定。",id:"19A-K13-1",knowledgeId:"K13",knowledgeTitle:"磁吸与重复测试",time:"11:53–12:38",pdfPages:[1649],type:"理解判断",quote:`11:53 支撑和阻力不断地将价格来回拉扯
11:57 市场想要知道在支撑和
12:00 阻力位是否会有更多人
12:02 买家和卖家一方会放弃吗？
12:05 会有突破或反转吗？
12:10 看这里红色区域空头卖
12:13 出卖出卖出卖出卖出卖出
12:17 这是阻力 你知道这是阻力
12:20 因为根据定义 如果市场达到某个价位
12:23 然后就下跌 这就是阻力的意思
12:26 交易者说它是阻力 当市场反复这样做时
12:30 阻力变得更加可靠
12:32 当市场再次到达那里
12:34 交易者更有信心卖盘会再次出现`},{prompt:"图中上升段之后，红色标记K线明显跌过蓝色斜线。按课程案例，哪种解释较合理？",options:["沿线买盘不足，多头退出与空头开仓共同卖出","沿线买盘仍强，此次跌破主要是通道下沿的买点","末端大阳仍占优，此次跌线优先按牛旗回调处理"],answer:0,explanation:"图中明显跌线要结合末端高潮和反转信号重新评估。错项固守此前买盘或大阳线信息，没有处理新出现的放弃卖盘。",id:"19A-K14-1",knowledgeId:"K14",knowledgeTitle:"趋势线失效与放弃K线",time:"12:41–13:42",pdfPages:[1650],type:"图表应用",quote:`12:41 多头在窄通道中不断买入
12:44 但价格大幅跌破了上涨趋势线
12:48 趋势线之前提供了支撑
12:50 我也可以把这些低点连起来
12:53 但这里我选择这条趋势线
12:56 这明显意味着买盘不再多到能在趋势线的地方支撑市场
13:01 所以价格必须下跌
13:03 跌到多头会再次买入的价格
13:06 多头在放弃 放弃K线
13:08 跌破了上涨通道的下沿
13:11 多头在卖出他们的多头仓位 空头也在卖出
13:16 他们看到了市场上正在发生的事
13:18 他们看到了趋势线被跌破 他们看到了抢购高潮
13:22 第二次抢购高潮可能是第二段陷阱
13:26 上涨了15根K线之后
13:28 出现了最大的大阳线 趋势可能即将衰竭
13:32 第二 做空入场点12有更高
13:35 的概率会反转下跌
13:37 多头卖出离场 空头卖出
13:41 做空`,image:{src:"/charts/19a-give-up.webp",solutionSrc:"/charts/19a-give-up-solution.webp",page:1650,alt:"上升段、蓝色斜线与红色标记K线的局部"}},{prompt:"上方多次冲高回落；下方虽有大阴线，却没有好的跟随，并在原买入区域反弹。本课怎样比较这两处？",options:["上方已吸收阻力，下方大阴确认强下降启动","上方只是普通回调，下方一次反弹确认强上涨","上方追价意愿弱，下方卖压缺乏跟随并获支撑"],answer:2,explanation:"价格上冲失败与下破缺乏跟随共同勾勒公平区间。错项分别把上方未成功说成突破确认、把下方小反弹升级为强上涨。",id:"19A-K15-1",knowledgeId:"K15",knowledgeTitle:"从跟随和反转识别公平区间两端",time:"13:49–14:45",pdfPages:[1651],type:"理解判断",quote:`13:49 所有的市场都在不断寻找公平价格
13:52 他们往往需要走过头才知道
13:55 公平的价格区间在哪里
14:00 然后他再往相反的方向探测
14:04 多头尝试继续上涨
14:06 但每次上涨后都下跌上涨下跌 上涨下跌
14:12 K线顶部有上影线 市场需要下跌才能找到
14:16 买家看起来在这个价格没什么人愿意买入
14:20 而卖家看起来非常急切的想要卖出
14:23 这可能是公平价格区间的上沿
14:29 大阴线尝试向下突破 但没有好的跟随
14:32 并且在多头之前买入的
14:34 这个区域开始反转上涨
14:36 没有足够的交易者愿意在这个价格卖出
14:40 市场需要上涨才能找到更多的卖家
14:43 因此这是一个支撑区域`},{prompt:"图中下跌测试了左侧低点附近，随后回升。媒体将下跌归因于一条利空新闻。按本课应优先观察什么？",options:["前低测试后的买盘与反弹，结合整个价格结构","利空报道是否足够强，再据此排除支撑的作用","新闻发布时间与跌幅是否吻合，再据此判断低点"],answer:0,explanation:"本课优先依据前低测试与实际买盘。新闻可能是催化剂，但时间吻合或措辞强度不能取代价格结构证据。",id:"19A-K16-1",knowledgeId:"K16",knowledgeTitle:"新闻解释与图表依据",time:"14:50–17:03",pdfPages:[1653,1654],type:"图表应用",quote:`14:50 如果你看电视 听新闻记者的报道
14:53 他们告诉你股市的涨跌都是因为新闻发生的
14:58 但大多数他们声称新闻有关的
15:01 涨跌实际上和新闻没有任何关系
15:04 只是一个巧合
15:10 支撑和阻力才是导致价格变化最重要的力量
15:15 市场不断的测试支撑和阻力
15:18 尝试找到一个公平的价格区间
15:22 这是交易者必须学习的最重要的事情
15:26 新闻不重要 支撑和阻力才重要
15:29 市场在寻找一个公平的价格区间
15:36 当你看到这个可能是日K线 可能是五分钟图
15:40 是什么时间周期不重要
15:42 当股市下跌的时候 媒体会找
15:45 一些新闻 然后告诉你
15:47 这个新闻导致股市下跌 他们在胡说八道
15:51 股市下跌是因为价格一直在向上测试
15:55 但无法继续上涨
15:57 因此价格需要朝相反的方向移动
16:00 市场决定这是公平价格区间的上沿
16:04 接下来要寻找公平价格区间的下沿
16:09 它下跌到前期的低点附近
16:12 他们在这里买入 在这里买入
16:14 当价格再次回到这个价格
16:17 他们在这里买入 再次在这里买入
16:20 市场在在区间的下沿找到了买家
16:24 是因为新闻才反转的吗？
16:26 如果之前是因为某个新闻下跌
16:29 那么这里又发生了什么？
16:30 新闻和新闻一点关系也没有
16:32 而是市场在寻找一个公平的价格区间
16:43 电视喜欢说是新闻导致了市场波动
16:46 事实并非如此
16:48 它有时可能是价格移动的催化剂
16:51 就换句话说 没有新闻迟早也会这样
16:55 在你看到的任何市场的波动
16:58 只是市场在寻找公平
17:00 价格在测试支撑和阻力`,image:{src:"/charts/19a-support-test.webp",solutionSrc:"/charts/19a-support-test-solution.webp",page:1653,alt:"下跌K线接近左侧低点的水平延伸线后回升的局部"}},{prompt:"课程强调图表支撑阻力，同时怎样描述长期基本面的作用？",options:["基本面主要解释日内拐点，技术结构主要解释多年方向","基本面需等新闻确认后，月线支撑才有交易意义","基本面可影响多年方向，图中波动仍分析支撑测试"],answer:2,explanation:"课程承认基本面可形成持续多年的趋势，同时重视眼前价格行为。一种误判交换了侧重点，另一种误判增设新闻确认作为必要条件。",id:"19A-K17-1",knowledgeId:"K17",knowledgeTitle:"月线案例与长期基本面",time:"17:05–19:47",pdfPages:[1655],type:"理解判断",quote:`17:05 这是美元对日元的月K线图
17:08 不用看任何新闻
17:10 我也知道很快价格就要上涨
17:13 这是月K线级别的下降通道变得越来越窄
17:18 就抛售高潮不可持续
17:20 这是下降趋势线和通道线楔形
17:23 底75%的概率会向上突破
17:26 这意味着有75%的概率
17:29 新闻很快就会报道一些事件
17:31 并声称这是价格向上突破的原因 满嘴胡言
17:36 市场告诉我们价格下跌的太多了
17:40 卖家越来越少了
17:41 所以价格不得不反转上涨来找到更多卖家
17:46 我们知道当市场处于
17:47 急速变通道的下降趋势时
17:50 75%的概率会向上突破通道
17:53 然后变成震荡区间 甚至是上涨趋势
17:56 在这个突破和这个突破期间
17:58 肯定会有一些新闻注
18:00 因为每天都有很多新闻可以解读
18:03 但无论新闻是什么 市场都会这样做
18:10 基本面因素导致的趋势可能持续多年
18:14 这是一个持续了五六年的下降趋势
18:17 这是一个持续了三四年的上涨趋势
18:21 最终市场由基本面控制 但在特定时间内
18:25 K线图上的任何波动都
18:28 只是对公平价格区间的测试
18:31 尤其是几周到几个月的短期波动
18:34 和新闻没有任何关系
18:36 是基本面 是市场在寻找公平的价格区间
18:40 是市场在测试支撑和阻力
18:46 支撑和阻力永远都是最重要
18:49 他们制造了很多交易机会
18:51 但你必须知道他们在哪里
18:54 你必须去寻找支撑和阻力 寻找交易机会
18:58 有一个楔形下降通道
19:00 75%的概率会被向上突破
19:03 然后转变成震荡区间 甚至是上涨趋势
19:07 我对技术面的交易机会更感兴趣
19:10 这告诉我们市场在这个区域找到了支撑
19:14 现在的价格过低了 所以需要上涨一些
19:18 发生了什么新闻并不重要
19:20 价格行为告诉我们会上涨
19:22 价格行为是否在告诉我们会有新闻
19:26 谁在乎呢？
19:27 我只知道 当我看到这个时
19:29 我预期市场会上涨
19:32 楔形下降通道向上突破
19:35 这是低点抬高的大反转模式
19:37 然后价格强势的向上突破
19:40 很多阳线收在高位
19:42 体积也越来越大 价格还会继续上涨`,referenceImage:{src:"/charts/19a-monthly-case-solution.webp",page:1655,alt:"第1655页课件整页讲解",kind:"课件整页"}},{prompt:"课程在月线楔形下降通道案例中提到约75%的向上突破预期，哪种理解保留了它的条件？",options:["所讲下降通道的上破预期，后续可区间或上涨","所讲通道上破后建立强上涨趋势的预期","所讲第三次下推后精确触及测量目标的预期"],answer:0,explanation:"约75%对应向上突破下降通道，不是保证进入强上涨，也不是精确到MM的概率。必须保留原背景与后续区间可能。",id:"19A-K17-2",knowledgeId:"K17",knowledgeTitle:"月线案例与长期基本面",time:"17:05–19:47",pdfPages:[1655],type:"变式辨析",quote:`17:05 这是美元对日元的月K线图
17:08 不用看任何新闻
17:10 我也知道很快价格就要上涨
17:13 这是月K线级别的下降通道变得越来越窄
17:18 就抛售高潮不可持续
17:20 这是下降趋势线和通道线楔形
17:23 底75%的概率会向上突破
17:26 这意味着有75%的概率
17:29 新闻很快就会报道一些事件
17:31 并声称这是价格向上突破的原因 满嘴胡言
17:36 市场告诉我们价格下跌的太多了
17:40 卖家越来越少了
17:41 所以价格不得不反转上涨来找到更多卖家
17:46 我们知道当市场处于
17:47 急速变通道的下降趋势时
17:50 75%的概率会向上突破通道
17:53 然后变成震荡区间 甚至是上涨趋势
17:56 在这个突破和这个突破期间
17:58 肯定会有一些新闻注
18:00 因为每天都有很多新闻可以解读
18:03 但无论新闻是什么 市场都会这样做
18:10 基本面因素导致的趋势可能持续多年
18:14 这是一个持续了五六年的下降趋势
18:17 这是一个持续了三四年的上涨趋势
18:21 最终市场由基本面控制 但在特定时间内
18:25 K线图上的任何波动都
18:28 只是对公平价格区间的测试
18:31 尤其是几周到几个月的短期波动
18:34 和新闻没有任何关系
18:36 是基本面 是市场在寻找公平的价格区间
18:40 是市场在测试支撑和阻力
18:46 支撑和阻力永远都是最重要
18:49 他们制造了很多交易机会
18:51 但你必须知道他们在哪里
18:54 你必须去寻找支撑和阻力 寻找交易机会
18:58 有一个楔形下降通道
19:00 75%的概率会被向上突破
19:03 然后转变成震荡区间 甚至是上涨趋势
19:07 我对技术面的交易机会更感兴趣
19:10 这告诉我们市场在这个区域找到了支撑
19:14 现在的价格过低了 所以需要上涨一些
19:18 发生了什么新闻并不重要
19:20 价格行为告诉我们会上涨
19:22 价格行为是否在告诉我们会有新闻
19:26 谁在乎呢？
19:27 我只知道 当我看到这个时
19:29 我预期市场会上涨
19:32 楔形下降通道向上突破
19:35 这是低点抬高的大反转模式
19:37 然后价格强势的向上突破
19:40 很多阳线收在高位
19:42 体积也越来越大 价格还会继续上涨`},{prompt:"月线案例先从旧价位上涨，跌破后又反弹测试该价位并受阻，说明什么？",options:["旧支撑可转阻力，并参与下方测量目标判断","旧价位虽已跌破，回测仍主要确认原支撑买盘","旧支撑已失效，后续测量应排除该价位"],answer:0,explanation:"课程明确展示支撑变阻力及测量作用。被跌破不取消全部参考价值，也不能忽略回测时已经受阻的新角色。",id:"19A-K18-1",knowledgeId:"K18",knowledgeTitle:"支撑变阻力与下方投射",time:"19:48–20:19",pdfPages:[1655],type:"理解判断",quote:`19:48 这之前是一个支撑位
19:50 因为市场从那里开始上涨 价格跌破了它
19:55 然后反弹回撤了这个价格柱 支撑变阻力
19:59 所以这是一个重要的价格
20:01 重要的价格通常会导致MM目标
20:05 位从这个高点到那个重要的价格
20:08 这是mm目标位 它很可能是一个支撑位
20:12 现在在MM目标位附近形成了楔形顶
20:15 很高的概率至少会有一些反弹`},{prompt:"依据月线信号建立的交易，临时看到五分钟图大幅回落。本课对止损依据的要求是什么？",options:["按五分钟新低收紧止损，保持原月线目标不变","按两个周期止损距离平均，兼顾月线与日内波动","按月线交易前提设置止损，评估月线是否失效"],answer:2,explanation:"月线信号配月线风险逻辑。低周期新低和两周期距离取平均都改变了原来的交易前提，不是课程给出的匹配方式。",id:"19A-K19-1",knowledgeId:"K19",knowledgeTitle:"止损匹配所交易的周期",time:"20:23–21:14",pdfPages:[1657],type:"理解判断",quote:`20:23 如果你看月K线交易
20:25 你就需要根据月K线设置止损
20:33 这是美元对日元的月K线图
20:36 如果你看月K线交易
20:38 你就需要根据月K线设置止损
20:41 不要看日K线或五分钟图来设置止损
20:46 这是五分钟图
20:48 如果你在交易月K线
20:51 但是碰巧看了一下五分钟图
20:55 你需要忽略五分钟图的波动 只关注月K线
21:00 市场在一个更低或更高的时间周期
21:04 和你在看的图相比
21:06 经常正在做完全相反的事情
21:09 如果你在这个K线图上交易
21:12 就只需要关注这个K线图`,referenceImage:{src:"/charts/19a-timeframes-solution.webp",page:1657,alt:"第1657页课件整页讲解",kind:"课件整页"}},{prompt:"同一入场价在月线和五分钟图上对应，应怎样选择日内触发依据？",options:["日内先等月线信号，再用五分钟选择每次执行点","日内按月线定触发，按五分钟定止损可直接混用","日内按所交易周期找信号，位置相同不等于频率相同"],answer:2,explanation:"同价可以跨周期对应，但月线信号可能数月才出现。题目区分位置对应与入场周期，不能把月线触发强加到每笔日内交易。",id:"19A-K20-1",knowledgeId:"K20",knowledgeTitle:"日内信号频率与月线信号",time:"21:17–22:14",pdfPages:[1658],type:"理解判断",quote:`21:17 这里有一个非常强势的上涨趋势
21:20 然后有一些回调
21:21 这里有一个II的结构 它变成了高一牛起
21:25 这是三个月以来第一个被触发的做多信号
21:35 右边是五分钟图
21:36 这个价格与那个价格两个绿色框框完全对应
21:41 它就是月K线图上ii结构突破的入场点
21:49 如果你做日内交易
21:51 你就在五分钟图上寻找交易机会
21:53 你不可能等待三个月
21:55 然后根据月K线图上的做多信号去做日内交易
21:59 所以如果你在五分钟图上交易
22:02 那就忽略月K线是交易五分钟图
22:05 另一方面如果你在交易月K线
22:07 那就忽略五分钟图
22:09 只根据月K线图上的价格行为进行交易`,referenceImage:{src:"/charts/19a-day-trading-solution.webp",page:1658,alt:"第1658页课件整页讲解",kind:"课件整页"}},{prompt:"跨周期支撑会影响五分钟波动，课程又主张日内主要看眼前图，怎样联系这两点？",options:["跨周期会影响价格，所以当前图信号只用于优化成交","跨周期会影响价格，所以每笔日内都先等高周期触发","跨周期会影响价格，但日内常可从当前图找到依据"],answer:2,explanation:"课程承认跨周期影响，却未把高周期触发设成每笔日内交易的必要条件，也没有取消当前图寻找交易架构的作用。",id:"19A-K21-1",knowledgeId:"K21",knowledgeTitle:"其他周期的影响与眼前图表",time:"22:19–23:25",pdfPages:[1659],type:"理解判断",quote:`22:19 你在五分钟图上看到的大波动或者大反转
22:23 往往是由其他时间周期
22:26 上的支撑和阻力造成的
22:30 由于更高时间周期上反转的频率要低得多
22:35 所以如果你在交易五分钟图
22:38 一般来说没必要关注更高的时间周期
22:41 更高时间周期上信号出现的频率太低了
22:45 以至于你会浪费时间去等待五分钟
22:49 图上信号出现的频率要高得多
22:56 再次强调
22:57 你在任何K线图上看到的大多数
23:00 波动都是由于支撑和阻力造成的
23:03 它可能与更高或更低时间
23:06 周期上的支撑阻力相对应
23:08 但通常你可以在K线图上发现一些东西
23:12 告诉你那里有支撑或阻力
23:17 他会告诉你如何交易
23:19 不用看其他K线图
23:21 所以不用担心其他的时间周期`},{prompt:"课程所述的大阳线强势突破前高后，又出现多头跟随。与区间边界测试相比，判断应怎样调整？",options:["前高首次被越过，应先按区间上沿的反转机会处理","后续阳线已出现，应以最近一次小回调高点作为终点","强突破有跟随，次要阻力可能被穿越以测试更高目标"],answer:2,explanation:"突破和跟随是相较单纯区间触边增加的信息。继续机械逆向或把一个次要高点固定成终点，都忽略此时的强度。",id:"19A-K22-1",knowledgeId:"K22",knowledgeTitle:"强多头突破与次要阻力",time:"23:28–24:04",pdfPages:[1660],type:"理解判断",quote:`23:28 非常强势的大阳线 收在最高收盘
23:32 远高于前期K线的高点
23:34 然后下一根K线也是阳线
23:38 很大的概率至少60%价格
23:41 会去到上方某个mm目标
23:43 把这次突破的高度往上翻一倍
23:46 任何小的阻力都会失败
23:49 所以你必须以任何理由入场做多突破
23:54 迅速上涨去测试上方的阻力
23:58 市场决定现在的价格太低了
24:01 所以他要寻找更高的价格`},{prompt:"在本课这个大阳线案例中，计算第一个向上测量目标时，讲解明确选了哪个高度？",options:["大阳线开盘至收盘的实体高度","大阳线起点至后一根收盘的高度","大阳线最低至最高的完整高度"],answer:0,explanation:"24:14明确使用开盘到收盘。全长和包含后续K线的高度都是可能的其他测量想法，却非本例指定基准。",id:"19A-K23-1",knowledgeId:"K23",knowledgeTitle:"大阳线实体与多重测量目标",time:"24:05–25:10",pdfPages:[1660],type:"理解判断",quote:`24:05 并预期在阻力位至少会有一些多头止盈
24:09 每当我看到这样的大阳线
24:11 我知道它很可能是一个趋势的开始
24:14 我会根据K线的开盘价和收盘价往上翻一倍
24:19 作为MM标尉 很多交易者会在那里止盈
24:23 在这个时刻至少有60%的概率会涨得更高
24:27 止损位在下面这里
24:29 也就是说至少有60%的概率
24:32 如果你承担这么多风险 会换来这么多回报
24:36 所以交易者会在MM标位附近止盈
24:43 尝试在这里注定 然而价格再次向上突破
24:47 这次回调测试了这个高点潜在的测量型缺口
24:51 这是牛市的最低点
24:53 然后向上突破了最高点
24:57 这也是一个向上的M目标位
25:00 所以在这个价格有2个MM目标位
25:03 你可以看到发生了什么
25:05 有多头在卖出止盈
25:07 这两个mm目标位制造了阻力`},{prompt:"两个向上测量目标落在相近价格，课程为什么关注这里的多头止盈？",options:["接近目标说明第一段尚未结束，应重新计算整段高度","不同投射汇合，可能集中多头止盈卖盘","接近目标说明卖压已被吸收，优先预期加速上破"],answer:1,explanation:"课程从不同目标汇合解释止盈阻力。接近目标本身不证明卖压已吸收，也不迫使把已经发展的两段重新并成一段。",id:"19A-K23-2",knowledgeId:"K23",knowledgeTitle:"大阳线实体与多重测量目标",time:"24:05–25:10",pdfPages:[1660],type:"变式辨析",quote:`24:05 并预期在阻力位至少会有一些多头止盈
24:09 每当我看到这样的大阳线
24:11 我知道它很可能是一个趋势的开始
24:14 我会根据K线的开盘价和收盘价往上翻一倍
24:19 作为MM标尉 很多交易者会在那里止盈
24:23 在这个时刻至少有60%的概率会涨得更高
24:27 止损位在下面这里
24:29 也就是说至少有60%的概率
24:32 如果你承担这么多风险 会换来这么多回报
24:36 所以交易者会在MM标位附近止盈
24:43 尝试在这里注定 然而价格再次向上突破
24:47 这次回调测试了这个高点潜在的测量型缺口
24:51 这是牛市的最低点
24:53 然后向上突破了最高点
24:57 这也是一个向上的M目标位
25:00 所以在这个价格有2个MM目标位
25:03 你可以看到发生了什么
25:05 有多头在卖出止盈
25:07 这两个mm目标位制造了阻力`},{prompt:"图中K线一度冲到绿色通道上沿外。为什么本课不把这次加速直接视为必然延续？",options:["外观加速近似初始突破，优先按新急速阶段追随","通道后期上沿可能是阻力，加速存在失败风险","已经越过平行线，应先上移整条通道再观察"],answer:1,explanation:"此处是通道后期上沿而非最初突破阶段。课堂约75%、五根K线内描述依赖该背景；不能只看加速外观或立即重画通道来删除阻力。",id:"19A-K24-1",knowledgeId:"K24",knowledgeTitle:"加速突破通道上沿",time:"25:12–25:30",pdfPages:[1660],type:"图表应用",quote:`25:12 你可以画一条上涨趋势线
25:14 然后在上沿画一条平行线
25:17 你可以看到价格尝试加速突破通道上沿
25:20 75%的概率它会在5根K线内失败
25:25 然后回到通道下沿
25:27 所以在这个区域也存在其他的阻力`,image:{src:"/charts/19a-channel-overshoot.webp",solutionSrc:"/charts/19a-channel-overshoot-solution.webp",page:1660,alt:"绿色上涨通道上部、末端K线及两条水平投射线"}},{prompt:"原本看似不错的高二买点后出现大阴线，下一根也没有迅速转成强多头反击。本课怎样应对这种新信息？",options:["只要阴线后没有阳线，就先确认新的强下降趋势","保留高二为主判断，把惊喜阴线视为末次洗盘","用惊喜阴线及跟随更新判断，考虑第二段下跌"],answer:2,explanation:"一种误判无视新卖压，另一种误判把第二段预期升级成强下降确认。课程检查实际跟随，先考虑至少一小段第二段。",id:"19A-K25-1",knowledgeId:"K25",knowledgeTitle:"惊喜阴线与第二段预期",time:"25:31–26:04",pdfPages:[1661],type:"理解判断",quote:`25:31 市场在这里横盘尝试形成一个高二买点
25:36 高一高二看起来不错的阳线
25:39 双底价格暂停了一下
25:41 但随后出现了这个大阴线
25:44 你看着这张图想到这是小概率事件
25:47 这是空投的惊喜K线
25:49 每当你看到惊喜K线
25:51 你就必须假设至少会有一个小的第二段下跌
25:54 当我看到这样的一个大阴线时
25:57 我会看下一根K线 它是阳线吗？
26:00 不是 合格的跟随增加了继续下跌的概率
26:04 价格尝试在这里反转上涨`},{prompt:"看到多头的高一、高二尝试时，为什么本课仍会考虑下跌延续？",options:["高一高二已经形成，先按多头恢复再解释左侧缺口","空头突破和缺口背景，使反弹也可构成双顶熊旗","两次上试足以抵消卖压，先按突破向上投射目标"],answer:1,explanation:"数出多头尝试不等于它们成功。课程结合左侧强突破、跟随与缺口，说明相同反弹也可从空头方向解释。",id:"19A-K26-1",knowledgeId:"K26",knowledgeTitle:"向下缺口与失败的多头入场",time:"26:04–26:35",pdfPages:[1661],type:"理解判断",quote:`26:00 不是 合格的跟随增加了继续下跌的概率
26:04 价格尝试在这里反转上涨
26:06 我会看左边有缺口吗？
26:08 这个低点 这个高点中间有缺口
26:11 这根K线可能是一个测量型缺口
26:14 导致价格去到向下的MM目标位
26:17 在这里开仓做空我就更有信心了
26:20 多头尝试在这里反转高一高2
26:23 然而可能是高点降低的双鼎雄奇
26:26 然后是阴线
26:28 这告诉我在这根阴线下方做空是一个好的机会
26:32 价格至少还会再下跌一些`},{prompt:"图中下跌到橙色目标线附近，并在红色通道下沿稍微跌破后出现反弹K线，课程关注什么？",options:["目标、三推通道位置与反弹反应形成潜在支撑","通道被稍微跌破已确认延续，阳线主要是空头再卖点","出现一根阳线已确认大反转，通道和目标只是辅助"],answer:0,explanation:"本课把多个位置与反应组合，仍不保证强上涨。单根阳线确认大反转、或一破通道就确认延续，都省略了汇合背景。",id:"19A-K27-1",knowledgeId:"K27",knowledgeTitle:"测量目标、通道下沿与楔形底汇合",time:"26:36–27:14",pdfPages:[1661],type:"图表应用",quote:`26:36 市场迅速下跌到支撑位
26:38 什么支撑 支撑在哪里？
26:41 我们目标位总是一个不错的潜在支撑
26:45 从这个高点到这个低点和
26:47 这个缺口的终点往下翻一倍
26:50 你可以看到那里发生了什么
26:53 价格在这个低点反转上涨
26:56 然后在这个低点反转
26:58 上涨可能是一个下降通道
27:00 你可以在上沿画一条趋势线
27:03 现在有一个三推楔形底
27:05 并且在下沿开始反转上涨
27:08 稍微跌破了通道一点点
27:10 在MM目标位的地方出现了一个阳线
27:13 那是支撑`,image:{src:"/charts/19a-bottom-confluence.webp",solutionSrc:"/charts/19a-bottom-confluence-solution.webp",page:1661,alt:"红色下降通道下部、橙色水平线与末端K线"}},{prompt:"图中价格反复在相近上下边界之间转向。按本课的区间背景，哪种理解更合适？",options:["以最新大K线的方向为主，原区间只用于计算波段目标","以上沿每次被测都变弱为主，优先预期下一次突破","以区间边缘反转与退出为主，强突破外观还需辨别"],answer:2,explanation:"反复震荡形成区间惯性。单根外观和测试次数不足以推翻它，本课并未把旧边界只保留为测量工具。",id:"19A-K28-1",knowledgeId:"K28",knowledgeTitle:"区间区域与强突破外观",time:"27:19–28:07",pdfPages:[1648,1662],type:"图表应用",quote:`27:19 这显然是一个震荡区间
27:22 很多来回的反转震荡区间
27:26 所以你应该高抛低吸做剥头皮交易
27:31 通常情况下你应该考虑在上3分之1上半部分卖出
27:36 预期阻力会持续有效
27:38 预期每次价格测试这个
27:40 阻力区域都会反转下跌
27:43 那就是卖出区域
27:45 在下3分之1下半部分
27:47 你可以看到每次它下跌
27:50 到这个地方就反转上涨
27:53 这就是买入区域是支撑80%法则
27:59 你必须预期80%的突破尝试会失败
28:03 震荡区间中即使突破的尝试看上去非常强势`,image:{src:"/charts/19a-range.webp",solutionSrc:"/charts/19a-range-solution.webp",page:1648,alt:"同一课件中价格在相近上下区域间多次来回的局部"}},{prompt:"本课为什么认为Emini的支撑阻力计算常比不同外汇平台之间更精确？",options:["共同数据更一致，算法可根据相同价格计算","Emini的MM主要采用精确价，外汇只参考区间中点","Emini图表主要用时间K线，外汇图表主要用tickK线"],answer:0,explanation:"课程强调可靠且一致的数据。并未把两市场测量方法、图表类型固定成不同组合；外汇也可用时间图和多种测量。",id:"19A-K29-1",knowledgeId:"K29",knowledgeTitle:"Emini的数据与目标精度",time:"28:10–28:44",pdfPages:[1664],type:"理解判断",quote:`28:10 支撑和阻力可以非常精确
28:14 它们是由电脑程序计算得到的
28:20 尤其是对于es而言
28:22 它是由电脑程序主导的巨大的市场
28:27 数据非常可靠 每个人都看到相同的价格
28:30 不像外汇市场
28:32 每个平台的价格都略有不同
28:36 所以在es中数学非常精确
28:39 目标经常在实际价格的一个take之内`},{prompt:"图中上涨后，蓝色通道上沿与上方橙色水平目标在相近区域相遇。为什么不能只说“上涨很强，所有阻力都无关紧要”？",options:["第二段已到通道与MM汇合区，留意多头止盈","第二段预期仍有效，应等价格离开全部目标再退出","第二段仍在加速，通道上沿此时优先改作支撑"],answer:0,explanation:"第二段预期得到满足，与到目标后观察阻力是先后阶段。不能用原延续预期无限推迟退出，也不能仅由强度把尚未确认突破的上沿改为支撑。",id:"19A-K30-1",knowledgeId:"K30",knowledgeTitle:"通道上沿与目标汇合",time:"28:46–29:46",pdfPages:[1664],type:"图表应用",quote:`28:46 弱上涨趋势尝试在上沿形成双顶反转下跌
28:52 然而价格向上突破
28:54 收盘价高于过去20根K线的高点
28:57 然后一个更大的大阳线
29:00 对于电脑而言这再清晰不过了
29:03 这个低点和这些高点之间存在缺口
29:06 计算机程序可以非常精确的计算支撑和阻力
29:11 目标反转上涨 反转上涨可以画趋势线
29:14 于是我们可以画一个通道
29:17 我把平行线移动到左边
29:19 把所有K线包含进去
29:21 看价格再次碰到它的时候发生了什么
29:25 反转下跌了
29:27 价格在通道上沿和MM目标位反转下跌
29:30 注多个支撑阻力在一起会更加有效
29:33 强势的突破预期至少会有第二段上涨
29:37 得到了第二段上涨 这是多头的最低目标
29:41 现在到了阻力位
29:43 所以多头开始止盈 非常的精确`,image:{src:"/charts/19a-upper-confluence.webp",solutionSrc:"/charts/19a-upper-confluence-solution.webp",page:1664,alt:"蓝色上涨通道上沿与橙色水平线附近的K线"}},{prompt:"图中的紫色斜线连接先前高点，后续价格又接近它。本课怎样解释该处可能集中的卖出行为？",options:["主要是旧多头止损卖出，斜线不供空头作为新入场参考","主要是新空头建立波段，原多头应等越线后才考虑止盈","新空头可沿线限价或等转跌卖，已有多头也可止盈"],answer:2,explanation:"本课同时说空头可限价或反转后卖出、多头可在上沿止盈。不能把原多头的利润退出改成只能止损，也不能排除空头或要求多头先等越线。",id:"19A-K31-1",knowledgeId:"K31",knowledgeTitle:"共同目标与不同交易行为",time:"29:50–30:37",pdfPages:[1665,1666],type:"图表应用",quote:`29:50 高手都可以看到支撑和阻力的目标
29:53 每个人都同意这些目标
29:55 并且每个人根据相同的信息做出决定
30:00 你必须学会发现这些目标
30:05 反转下跌可能是趋势线的开始
30:08 再次反转下跌可以连成一条线 看这里
30:12 当价格碰到那条线时再次反转下跌
30:16 一些交易者会尝试在那条线或稍低
30:19 一个tick的位置挂限价卖单做空
30:22 其他人会在反转下跌时卖出
30:24 而做多的多头会在那里止盈
30:27 急速变通道的上涨趋势 三次上涨
30:30 123通道中往往会有三次推动
30:33 多头会在通道的上沿附近止盈`,image:{src:"/charts/19a-shared-line.webp",solutionSrc:"/charts/19a-shared-line-solution.webp",page:1665,alt:"紫色斜线、水平投射线与沿途高点的局部"}},{prompt:"案例里潜在双顶未能让价格继续下跌，反而持续上涨。本课还会怎样利用原先那段下跌？",options:["按失败双顶两高点的差值投射，缩小上方目标","按失败下跌的高度继续向下投射，保留原双顶方向","按失败下跌的高度向上投射，观察潜在阻力"],answer:2,explanation:"本课用的是失败做空结构的反向测量。继续向下未处理实际失败；两顶价差也不是所讲的整段下跌高度。",id:"19A-K32-1",knowledgeId:"K32",knowledgeTitle:"失败双顶的反向测量",time:"30:40–31:34",pdfPages:[1665,1666],type:"理解判断",quote:`30:40 跳空下跌尝试继续抛售
30:43 理论上空头想在这里形成一个双顶
30:46 但没有成功 市场只是继续上涨
30:50 然而由于这是潜在的双顶
30:53 你必须考虑上方也许有潜在的mm标尉
30:57 基于这次下跌的高度往上翻一倍
31:01 看这里一个tick都不差
31:04 在es中就是这么的精确
31:11 Emini和股票都由计算机程序控制
31:16 交易者的入场和离场都是基于数学的
31:21 Mm目标位在哪里？
31:23 支撑和阻力在哪里？
31:27 如果一个交易者擅长发现支撑和阻力
31:30 他就知道在哪里止盈 也知道在哪里入场`,referenceImage:{src:"/charts/19a-shared-line-solution.webp",page:1665,alt:"第1665页课件整页讲解",kind:"课件整页"}}],sourceFile:"BTC PAF 19A Support and Resistance_中文 (源语言).srt"},{id:"19B",group:"支撑与阻力",title:"支撑阻力的选择、画线与突破回测",range:"00:00–33:39",revision:"support-19b-v1",notes:["哪种支撑阻力最重要取决于背景和强度；均线、趋势线、通道线、前高前低、测量目标与整数价位都可能发挥作用。","外汇平台数据与绘图口径不同，套利使报价接近但不完全相同；图表类型不同仍可呈现相近价格行为，不必强求精确触线。","宽通道可随发展重绘，寻找多次得到价格反应的线，也可由通道上沿画平行下沿；在反转处结合信号和跟随。","宽窄止损须有合理结构依据，分别权衡触发频率和单次损失；过窄过远不适用这段比较。","楔形不必完美，但嵌套楔形与窄下降通道的反转预期不同；双顶双底不要求两点完全同价。","突破后向左找前高前低及起点，观察回测后的实际反转；加仓案例保留风险加倍的限制，回测失败及顶部第二次反转也需要识别。"],knowledgePoints:[{id:"K01",title:"最有效的类型取决于背景",summary:"任何类型的支撑阻力都可能最重要，要结合市场背景和该处支撑阻力的强度，没有固定优先级。",time:"00:12–00:55",pdfPages:[1671],questionIds:["19B-K01-1"]},{id:"K02",title:"均线附近的支撑",summary:"案例在上涨趋势中回调接近或略低于移动平均线时找到支撑；课程通常使用二十周期指数移动平均线。",time:"01:00–01:19",pdfPages:[1671],questionIds:["19B-K02-1"]},{id:"K03",title:"趋势线和通道线",summary:"趋势线与通道上沿可提供支撑阻力，画出潜在线后观察测试和反转；不能只因画线就假定有效。",time:"01:19–01:41",pdfPages:[1671],questionIds:["19B-K03-1"]},{id:"K04",title:"前高前低与角色互换",summary:"前高附近可回落，前低附近或略低可反弹；突破前高后，原阻力可在回测时成为支撑。",time:"01:43–02:06",pdfPages:[1671],questionIds:["19B-K04-1"]},{id:"K05",title:"区间上涨突破后的测量",summary:"区间中的上涨原本可能反转，但实际向上突破后，应考虑按该段上涨高度向上投射的测量目标。",time:"02:06–02:21",pdfPages:[1671],questionIds:["19B-K05-1"]},{id:"K06",title:"大整数与较小整数",summary:"2100等大整数以及2090、2080、2070等较小整数都可能有作用；案例在大整数附近尝试突破并回调。",time:"02:23–02:57",pdfPages:[1671],questionIds:["19B-K06-1"]},{id:"K07",title:"外汇报价没有统一中心",summary:"本课外汇案例的银行、平台各自形成数据，没有一个集中交易所汇总所有交易，所以图表和目标不完全相同。",time:"03:00–03:36",pdfPages:[1673],questionIds:["19B-K07-1"]},{id:"K08",title:"套利拉近价格但不抹平差异",summary:"机构在较贵的平台卖、较便宜的平台买，使价格接近但不完全一致；这是课程对报价相似性的解释。",time:"03:39–04:04",pdfPages:[1673],questionIds:["19B-K08-1"]},{id:"K09",title:"意外突破、跟随与向下缺口",summary:"高二买点后突然向下突破，要重新评估下跌；反弹未回到突破点而留缺口时，可从高点到缺口或对应低点向下投射目标。",time:"04:05–04:37",pdfPages:[1673],questionIds:["19B-K09-1"]},{id:"K10",title:"失败熊旗与向上测量",summary:"双顶熊旗向下尝试失败后转涨，回测突破区域可找到支撑；低点与高点之间的空间可成测量型缺口，目标附近多次失败形成阻力。",time:"04:37–05:10",pdfPages:[1673],questionIds:["19B-K10-1"]},{id:"K11",title:"相近报价不要求相同低点",summary:"课程说平台常相差一两个pip，仍少有完全一致；低点1.1419在其他平台可为1.1422或1.1418，不能把常见差异当硬上限。",time:"05:11–05:42",pdfPages:[1674],questionIds:["19B-K11-1"]},{id:"K12",title:"最后一笔与收盘价差异",summary:"没有统一中心统计全球所有外汇成交，因此不存在可统一确认的全球最后一笔；同一根K线各平台收盘可能不同，报价一秒可变多次。",time:"05:42–06:39",pdfPages:[1675],questionIds:["19B-K12-1"]},{id:"K13",title:"数据来源和绘图口径",summary:"历史案例中IB默认用买卖价中点，TradeStation用买价；高点1.11282与1.11272差1 pip。数据和绘图口径共同造成差异，不作为当前平台设置说明。",time:"06:41–08:07",pdfPages:[1676],questionIds:["19B-K13-1"]},{id:"K14",title:"不同图表体现相同价格行为",summary:"200 tick图是每根包含200个tick记录，不能误读成200点涨跌；时间图及其他图表也体现相近结构，不要求人人只用五分钟图。",time:"08:11–09:37",pdfPages:[1678],questionIds:["19B-K14-1","19B-K14-2"]},{id:"K15",title:"计算机参与是课堂预测",summary:"课程当时预期计算机、基金与数学计算参与增加会使外汇支撑阻力更精确；这是当时的预测，不是本练习核实后的现状。",time:"09:43–10:08",pdfPages:[1679],questionIds:["19B-K15-1"]},{id:"K16",title:"宽通道中随发展重绘",summary:"宽通道的趋势线常不完美，价格越线又反转后可重选高低点，让线反映整体趋势；外汇越线较频繁不等于所有线都无效。",time:"10:09–11:23",pdfPages:[1680],questionIds:["19B-K16-1"]},{id:"K17",title:"有效拟合优于机械连接最高点",summary:"连接最高两点的线如果价格从不到达，而另一近似线被反复测试并反转，课程倾向后者，重在多次触及及整体趋势。",time:"11:30–12:02",pdfPages:[1680],questionIds:["19B-K17-1"]},{id:"K18",title:"不明显线的重要性",summary:"课程认为越不明显的线，采用的计算机越少，支撑阻力意义越低；不要为了找理由强画难以识别的线。",time:"12:09–12:14",pdfPages:[1680],questionIds:["19B-K18-1"]},{id:"K19",title:"区间下沿与强突破跟随",summary:"窄区间下沿的向下转折可能空间有限；大阴线收最低并有强空头跟随时，进一步下跌的依据增强。",time:"12:20–12:46",pdfPages:[1680],questionIds:["19B-K19-1"]},{id:"K20",title:"趋势线反转的做空信号",summary:"有效趋势线附近出现收低的好阴线时，案例在该阴线低点下方挂突破卖单；13:04字幕买单与做空背景相反，按原页校正。",time:"12:54–13:08",pdfPages:[1681],questionIds:["19B-K20-1"]},{id:"K21",title:"合理宽窄止损的权衡",summary:"做空案例可考虑信号阴线高点上方或最近重要高点上方。课程比较：窄止损较常触发、单次损失小；宽止损较少触发、单次损失大，前提均合理。",time:"13:13–13:53",pdfPages:[1681],questionIds:["19B-K21-1","19B-K21-2"]},{id:"K22",title:"反转可以未碰原趋势线",summary:"上涨案例反复下探未碰原线，却有下影线并向上反转；可以考虑前一根K线上方入场，尤其第二做多信号，不必坚持必定碰线。",time:"14:01–14:40",pdfPages:[1682],questionIds:["19B-K22-1"]},{id:"K23",title:"由通道上沿构造平行下沿",summary:"可连接两个上方转折，再向下平移，包住两高点间所有K线；之后看市场是否反应，删除无效线而保留有用线。",time:"14:47–16:07",pdfPages:[1682,1683],questionIds:["19B-K23-1"]},{id:"K24",title:"多头止损与重要抬高低点",summary:"小双底做多可用局部低点，也可用随后强上涨创新高之前的重要低点作为止损依据；区别仍是频率与单次损失，不是越宽越好。",time:"16:14–16:44",pdfPages:[1683],questionIds:["19B-K24-1"]},{id:"K25",title:"过窄或过远的止损限制",summary:"宽窄选择不等于任意设置；课程指出太远或太窄会有问题，并用入场下方仅两pip的止损说明不合理缩窄。",time:"16:48–17:01",pdfPages:[1683],questionIds:["19B-K25-1"]},{id:"K26",title:"不完美楔形仍需背景",summary:"多数机会不像教科书图形，楔形也少完美；背景合适时可在相关线附近寻找反转，不能因为数出三推就忽略信号和背景。",time:"17:07–17:59",pdfPages:[1684],questionIds:["19B-K26-1"]},{id:"K27",title:"趋势过渡中的第一高点",summary:"上涨通道的第一高点有时出现在之前下降趋势结束之前，之后还可创新低；这是趋势过渡，不能据此机械否定整段通道。",time:"18:02–18:32",pdfPages:[1684],questionIds:["19B-K27-1"]},{id:"K28",title:"楔形牛旗与回调背景",summary:"不完美楔形可在趋势线反转后再测试通道上沿形成牛旗；强多头突破后约50%回调、三推下跌再转涨也是所举牛旗案例。",time:"18:39–19:01",pdfPages:[1684],questionIds:["19B-K28-1"]},{id:"K29",title:"嵌套楔形与两段预期",summary:"较大楔形第三段内还有小楔形，结合小双底和收高阳线，课程提高对反转上涨的期待，预期至少两段上涨，中间可有回调。",time:"19:05–19:28",pdfPages:[1684],questionIds:["19B-K29-1","19B-K29-2"]},{id:"K30",title:"窄下降通道限制楔形反转",summary:"三推楔形若下降通道很窄、反弹很小，通常先预期小反弹，再可能成为区间或熊旗；案例反弹后继续创新低。",time:"19:34–19:59",pdfPages:[1684],questionIds:["19B-K30-1"]},{id:"K31",title:"双顶双底不必等高等低",summary:"价格测试前高后下转或前低后上转可形成双顶双底；第二点可稍高稍低，甚至差距较大，不要求完全相同价格。",time:"20:02–20:30",pdfPages:[1685],questionIds:["19B-K31-1"]},{id:"K32",title:"前高卖出信号和多头陷阱",summary:"前高附近下转的阴线低点下方可触发卖单，也可等第二做空入场；看似强突破后出现收低阴线和糟糕跟随，可是多头陷阱。",time:"20:32–21:39",pdfPages:[1685],questionIds:["19B-K32-1","19B-K32-2"]},{id:"K33",title:"名称和高点选取不是核心",summary:"熊旗可有多种双顶选点，也可被称失败头肩底；窄通道反弹有限、区间上沿测试、跟随差及收低阴线比争论名字更关键。",time:"21:41–23:56",pdfPages:[1685],questionIds:["19B-K33-1"]},{id:"K34",title:"前低反转与双底牛旗",summary:"上涨趋势的更低低点仍可构成双底牛旗；下降到关键前低后连续向下突破失败，也可出现大、小双底，案例在反转阳线上方挂买单。",time:"24:00–24:50",pdfPages:[1685],questionIds:["19B-K34-1"]},{id:"K35",title:"深回调与大级别突破起点",summary:"强多头突破后的大段下跌，仍可能回测突破起涨点、通道起点或第一次回调低点；可与大双底或低点抬高反转结合，末端再看小双底及阳线买点。",time:"24:52–26:18",pdfPages:[1685],questionIds:["19B-K35-1"]},{id:"K36",title:"向下突破回测再转跌",summary:"下降趋势或区间空头强突破后，反弹回测突破点却无力继续上行，转跌时可形成新的卖出机会；案例在前一K线低点下方触发。",time:"26:23–27:09",pdfPages:[1686],questionIds:["19B-K36-1"]},{id:"K37",title:"反弹中的双方买盘与加仓代价",summary:"空头买入止盈、被套多头较低处加仓都可促成反弹。多头可借均价改善在初始价或稍低退出，但案例明确加仓同时使风险加倍，不是保证解套。",time:"27:10–28:27",pdfPages:[1686],questionIds:["19B-K37-1","19B-K37-2"]},{id:"K38",title:"第二段下跌的卖盘来源",summary:"强空头突破后，被套多头卖出放弃仓位、未入场空头寻找卖出机会，两类卖盘可共同形成第二段下跌。",time:"28:28–28:42",pdfPages:[1686],questionIds:["19B-K38-1"]},{id:"K39",title:"重要低点失守与趋势重估",summary:"低点后强上涨创新高使其重要；跌破后不再直接按原上涨趋势判断，可能是区间也可能下降。反弹重返失败或第二次测试后下转可提供卖出信号。",time:"28:44–29:34",pdfPages:[1686],questionIds:["19B-K39-1","19B-K39-2"]},{id:"K40",title:"向上突破回测与信号选择",summary:"强上涨可突破多个前高；回测未精确触及仍可延续。回落测试左侧区间上沿后转涨，通常更偏好阳线上方买，特定高二背景也可在阴线上方；小双底需看触发。",time:"29:34–31:27",pdfPages:[1686],questionIds:["19B-K40-1","19B-K40-2"]},{id:"K41",title:"回测买入也会失败",summary:"又一次回调测试前高后，多头买入预期未兑现，市场向下跌破，多头放弃止损；回测不是自动有效。",time:"31:31–31:50",pdfPages:[1686],questionIds:["19B-K41-1"]},{id:"K42",title:"楔形顶第二次反转与离场",summary:"楔形顶尝试加速失败、第二次筑顶及小三角三推，提示可能重要顶部；课程考虑至少第二段下跌与测试抢购高潮起点，因此多头迅速退出。",time:"31:54–32:38",pdfPages:[1686],questionIds:["19B-K42-1"]}],questions:[{prompt:"本课对“哪种支撑阻力最有效”的回答是什么？",options:["看时间周期大小，高周期均线优先于同周期前高低","看具体背景与强度，类型本身没有固定优先级","看触及次数多少，最多次被测的水平优先于其他类型"],answer:1,explanation:"本课用背景和实际强度决定重要性，没有给周期或次数一个可脱离背景的固定排名。",id:"19B-K01-1",knowledgeId:"K01",knowledgeTitle:"最有效的类型取决于背景",time:"00:12–00:55",pdfPages:[1671],type:"理解判断",quote:`00:12 首先我会讲哪一种支撑和阻力最有效
00:16 答案是取决于具体的背景
00:19 在特定的背景下
00:21 任何支撑和阻力都可能是最有效的
00:24 外汇市场的支撑和阻力没有
00:27 股指期货和很多股票那么精确
00:30 因为没有一个中心的交易所来
00:33 统计所有的交易
00:37 全世界的每个银行、每个
00:39 换汇平台都有自己的价格
00:42 因此不同平台的交易者
00:44 看到的价格也略微有所不同
00:47 所以支撑和阻力就不那么精确了
00:51 接下来我会举一些支撑和阻力的例子`},{prompt:"上涨案例中，价格回调到均线附近或略低于均线后回升，说明什么？",options:["均线下方买盘不足，反弹应先等突破原高点再算支撑","均线应精确守住，稍低后的反弹先按下跌回测","均线附近可成支撑，允许接近或稍低后转涨"],answer:2,explanation:"案例已把附近及略低包括在有效反应中。错项分别要求精确碰线或额外新高，改变了本课识别区域的方法。",id:"19B-K02-1",knowledgeId:"K02",knowledgeTitle:"均线附近的支撑",time:"01:00–01:19",pdfPages:[1671],type:"理解判断",quote:`01:00 移动平均线柱通常指1MA20均线
01:04 反映了平均价格 它通常是支撑或阻力
01:09 这里市场处于上涨趋势
01:11 每当价格接近或低于移动平均线时
01:15 都会找到支撑趋势线
01:19 这里有一个非常窄的上涨通道`},{prompt:"课程在几个向下转折之间画出潜在通道上沿后，接下来关注什么？",options:["两点连线已经成立，先按线上反转再估计空间","看下一次到线或越线时是否反转、是否跟随","先按最高两点重画，已有反转不必再作拟合比较"],answer:1,explanation:"连线只是候选，实际测试检验它；既不能画好就确认反转，也不能机械用最高两点取代反复有效的拟合。",id:"19B-K03-1",knowledgeId:"K03",knowledgeTitle:"趋势线和通道线",time:"01:19–01:41",pdfPages:[1671],type:"理解判断",quote:`01:15 都会找到支撑趋势线
01:19 这里有一个非常窄的上涨通道
01:23 当价格跌破它时
01:25 多头又买入了通道的上沿 向下反转
01:30 向下反转画一条潜在的通道线
01:33 观察价格的反应
01:36 尝试突破 然后反转
01:38 所以通道上也有阻力`},{prompt:"价格突破左侧高点后，又回落测试该水平并回升。课程如何解释？",options:["旧前高突破后，可在回测中成为支撑","旧前高回测后，先按回到区间并等待向下测量","旧前高被突破后，应主要作为下次上涨的止盈阻力"],answer:0,explanation:"题干已给突破、回测、回升。继续只保留旧阻力或直接判回区间，都遗漏成功回测后角色改变的信息。",id:"19B-K04-1",knowledgeId:"K04",knowledgeTitle:"前高前低与角色互换",time:"01:43–02:06",pdfPages:[1671],type:"理解判断",quote:`01:43 前期的高点和低点
01:45 价格达到这个高点下跌
01:47 价格达到这个高点下跌
01:50 跌到这个低点附近 然后反弹
01:53 略低于这个低点 然后反弹
01:56 这里突破了之前的高点
01:59 然后回测之前的阻力变成了支撑M目标位
02:06 这是震荡区间中的一段上涨`,referenceImage:{src:"/charts/19b-prior-flip-solution.webp",page:1671,alt:"第1671页课件整页讲解",kind:"课件整页"}},{prompt:"原本认为区间内上涨可能反转，结果价格向上突破，本课要求如何调整？",options:["按突破K实体更新，只用最后一根阳线高度替代整段","按实际向上突破更新，考虑该段高度的上方目标","按原区间反转更新，优先等待价格回区间中部"],answer:1,explanation:"原课明确基于这段上涨高度。一种误判固守旧预期，另一种误判擅自改用单根实体测量。",id:"19B-K05-1",knowledgeId:"K05",knowledgeTitle:"区间上涨突破后的测量",time:"02:06–02:21",pdfPages:[1671],type:"理解判断",quote:`01:59 然后回测之前的阻力变成了支撑M目标位
02:06 这是震荡区间中的一段上涨
02:09 通常更大的概率会反转下跌
02:12 然而价格向上突破
02:14 所以你必须考虑上方有潜在的mm标尉
02:17 基于这段上涨的高度往上翻一倍`},{prompt:"案例多次在2100附近尝试突破、回调。本课怎样看待整数价位？",options:["更近的整数固定优先于更远整数，不必再比较市场背景","大整数优先判断反转，小整数优先判断突破后延续","大、小整数都可参与判断，作用仍联系背景与实际反应"],answer:2,explanation:"课程同时举大、小整数，没有给固定分工或以距离取代背景的优先级。两种错项将参考位置变成可机械排序的规则。",id:"19B-K06-1",knowledgeId:"K06",knowledgeTitle:"大整数与较小整数",time:"02:23–02:57",pdfPages:[1671],type:"理解判断",quote:`02:23 大的整数关口2100
02:25 然后是较小的整数关口
02:28 2090、208、02070
02:31 可以看到市场快速上涨到大的整数关
02:35 尝试突破它 然后回调
02:37 第二次尝试突破它 回撤后获得支撑
02:44 哪个是最重要的？
02:45 任何类型的支撑和阻力都
02:48 可能是K线图上最重要的一个
02:51 这取决于具体的背景
02:53 并且取决于支撑和阻力的强度`},{prompt:"为什么两个平台的同一外汇品种五分钟图可能有细微差别？",options:["各平台应共享最后成交，细微价差主要是绘图算法误差","平台数据分别形成，没有统一中心汇总全部成交","较大银行报价应作为中心价，其他平台差异属于偏离"],answer:1,explanation:"本课说各平台形成各自数据，而非共享全球最后成交；规模较大也不把某家银行变成统一中心。",id:"19B-K07-1",knowledgeId:"K07",knowledgeTitle:"外汇报价没有统一中心",time:"03:00–03:36",pdfPages:[1673],type:"理解判断",quote:`03:00 由于多种原因
03:01 外汇市场的支撑和阻力不那么精确
03:04 我现在来讲一讲其中的一些原因
03:09 这是欧元对美元的五分钟
03:13 K线图
03:14 每个平台都有自己的数据
03:18 世界各地都在同时交易外汇
03:21 不存在一个中心交易所来统计和报告数据
03:26 所以价格不是每个地方都一样
03:31 你看到的K线图和另一家
03:33 平台的K线图不完全一样`},{prompt:"按课程解释，机构怎样通过套利使不同平台的外汇价格接近？",options:["卖较贵平台、买较便宜平台，价格趋近","两个平台同步同向买入，以增加成交量拉近价差","买较贵平台、卖较便宜平台，价格趋近"],answer:0,explanation:"套利的方向是高卖低买。反做会扩大偏离，同向买入也不能直接解释相对价差被拉近；原课仍保留价格不完全相同。",id:"19B-K08-1",knowledgeId:"K08",knowledgeTitle:"套利拉近价格但不抹平差异",time:"03:39–04:04",pdfPages:[1673],type:"理解判断",quote:`03:39 因为大机构可以捕捉到不同
03:42 平台和银行之间的价格差异
03:45 他们会用高频交易进行套利
03:47 使得价格会接近一致
03:50 如果某个
03:51 平台或银行的价格更高一些
03:55 他们就在这个平台做空
03:57 然后在价格更低的平台或银行做多
04:00 这使得它们的价格会接近
04:03 但不会完全相同`},{prompt:"看似不错的高二做多信号后突然向下突破，反弹还留下缺口。本课如何处理？",options:["按反弹未到原价判断诱空，先等回测原高点","按意外空头突破重估，关注缺口及下方测量","按高二信号保留多头预期，把缺口看作回调尾声"],answer:1,explanation:"高二之后实际出现强空头突破，且回测留缺口。需要随新信息改变，不能只凭高二名称或未回原价就确认诱空。",id:"19B-K09-1",knowledgeId:"K09",knowledgeTitle:"意外突破、跟随与向下缺口",time:"04:05–04:37",pdfPages:[1673],type:"理解判断",quote:`04:05 三次向上推动1233推
04:09 楔形顶MM目标位高二
04:12 买点有一个不错的做多信号K线
04:17 然而突然向下突破了
04:19 你必须假设市场至少会再下跌一些
04:22 这里它继续下跌了很多反弹尝试回撤突破点
04:26 但是留下了缺口
04:28 可能从高点到这个缺口的
04:31 终点或者这个低点向下翻
04:35 一倍作为mm.
04:37 目标位双顶雄奇尝试再次向下突破`,referenceImage:{src:"/charts/19b-forex-measure-solution.webp",page:1673,alt:"第1673页课件整页讲解",kind:"课件整页"}},{prompt:"双顶熊旗向下突破失败，之后上涨并在突破区域回测获支撑，接近上方目标又多次突破失败，应怎样理解？",options:["上方目标稍被越过，后续两次失败不再影响判断","空头失败后跟踪回测支撑，再观察上方目标阻力","原熊旗仍占优，后续上涨主要看作下跌前的回补"],answer:1,explanation:"题干给出失败熊旗、上涨回测成功、目标处再失败等连续变化。两种误判各固定在某一时刻，没有随实际行为更新。",id:"19B-K10-1",knowledgeId:"K10",knowledgeTitle:"失败熊旗与向上测量",time:"04:37–05:10",pdfPages:[1673],type:"理解判断",quote:`04:35 一倍作为mm.
04:37 目标位双顶雄奇尝试再次向下突破
04:41 但随后反转上涨
04:43 回调到突破点以下 然后继续上涨
04:47 再次回调到突破点
04:49 然后上涨 所以在这里有支撑
04:52 也许它会导致一个向上的MM标位
04:55 确实如此
04:56 这个低点和高点之间的空间成为了测量型缺口
05:01 价格略微超过了MM目标位
05:04 然后又尝试突破了两次都失败了
05:07 于是转过头下跌阻力`},{prompt:"平台A低点是1.1419，平台B是1.1422。按本课应怎样看？",options:["允许平台形成不同低点，常见价差不是硬性上限","超过常见两pip就应先归为数据错误再使用图表","应先把两个低点取均值，再作为各平台统一低点"],answer:0,explanation:"课中本身给1.1419、1.1422、1.1418。常见一两pip不是最大值，也没有要求跨平台取平均替代各自数据。",id:"19B-K11-1",knowledgeId:"K11",knowledgeTitle:"相近报价不要求相同低点",time:"05:11–05:42",pdfPages:[1674],type:"理解判断",quote:`05:11 由于高频机构的套利行为
05:14 各个平台之间的价格通常相差不大
05:19 通常它们相差一二个pips
05:22 但很少完全相同
05:28 看这个低点 它是11419
05:32 但在另一个平台可能是11422
05:37 或者在某些平台是11418
05:42 不存在一个中心的交易所`},{prompt:"“外汇没有统一可知的最后一笔”，在本课语境中是什么意思？",options:["最大平台的最后成交可代替其他银行的统一收盘","某平台收盘不等于全球统一可知的最后成交","各平台收盘相同，只有最高最低价存在差别"],answer:1,explanation:"没有全球中心汇总，并不否认各平台自身收盘；也不能因规模较大就把某平台数据当成统一的全球最后一笔。",id:"19B-K12-1",knowledgeId:"K12",knowledgeTitle:"最后一笔与收盘价差异",time:"05:42–06:39",pdfPages:[1675],type:"理解判断",quote:`05:37 或者在某些平台是11418
05:42 不存在一个中心的交易所
05:45 没有人告诉其他平台这根K线
05:47 收盘前最后一笔交易是什么价格
05:50 因此最后一笔交易的价格不重要
05:53 而且永远没人知道
05:55 因为没有一个中心交易所
05:57 让每个人都去报告交易
06:00 每家银行都进行自己的交易
06:02 并且不向任何人报告
06:04 可能有数百家银行同时在交易外汇
06:07 所有这些交易的价格都略有不同
06:10 所以不存在最后一笔交易
06:17 所以这根K线的收盘价
06:19 在每个平台都略有不同
06:22 例如看它的收盘价
06:24 在这个平台可能是11384
06:27 但在另一个平台可能是
06:30 11383或者是11387
06:33 此外在所有平台价格可以发生瞬间变化`},{prompt:"本课历史示例中，除了客户数据不同，什么也会造成IB和TradeStation图表价格有差异？",options:["一个用买卖价中点，另一个只用买价","一个只用卖价，另一个用买卖价中点","一个用最后成交价，另一个用买卖价中点"],answer:0,explanation:"PDF1676写IB midpoint、TradeStation bid only，并给高点差1 pip。题目是历史绘图口径，不是当前平台设置说明。",id:"19B-K13-1",knowledgeId:"K13",knowledgeTitle:"数据来源和绘图口径",time:"06:41–08:07",pdfPages:[1676],type:"理解判断",quote:`06:41 这个例子中我比较了IB interactive
06:44 brokers和trade
06:45 station的外汇K线图
06:47 Trading station
06:49 不再提供外汇交易的服务
06:50 ib的外汇交易业务也被
06:53 大大的限制了
06:57 Ib根据其客户进行的
06:59 交易创建了这个K线图
07:03 Trade station根据其
07:05 客户进行的交易创建了这个K线图
07:08 任何人都可以查看这两张
07:10 K线图并寻找细微的差异
07:13 正因为如此 机构能套利
07:15 于是价格保持接近
07:17 如果机构看到一个平台的价格太低
07:20 他们就会买入
07:22 使其涨到与其他平台相同的水平
07:26 数据保持相近但不完全相同
07:29 此外APK线图的默认设置
07:33 是出价和要价的终点
07:38 而trade station
07:40 的K线图是完全基于出价
07:42 他们的K线图忽略了卖价
07:44 这也是K线图价格之间有差异的一个原因
07:51 在ib的图上
07:53 你看那个高点的价格11282
07:57 然后这是trade station
08:00 在同一时间的高点111272
08:03 这个价格比IB的价格低了一个take`,referenceImage:{src:"/charts/19b-brokers-solution.webp",page:1676,alt:"第1676页课件整页讲解",kind:"课件整页"}},{prompt:"课程展示EURUSD 200 tick图，是为了说明什么？",options:["200 tick是每根累计成交金额，和时间图比较的是金额","不同组织方式都可呈现结构，200 tick指每根的记录数","200 tick是每根固定价格幅度，和时间图比较的是波幅"],answer:1,explanation:"PDF写200 ticks per bar。tick记录数量不是200点价格幅度，也不是固定成交金额；本页说明不同图表均可观察价格行为。",id:"19B-K14-1",knowledgeId:"K14",knowledgeTitle:"不同图表体现相同价格行为",time:"08:11–09:37",pdfPages:[1678],type:"理解判断",quote:`08:11 接下来我想举一些支撑和阻力的例子
08:18 这是欧元兑美元的成交量图
08:21 每根K线代表交易了200个tips
08:27 因为外汇市场的支撑和
08:30 阻力不如ES那么精确
08:32 所以交易者不太关心确切的价格
08:36 而且他们不太关心K线图的类型
08:39 例如有人使用这样的成交量图
08:42 有人用基于时间的K线图
08:44 比如五分钟K线图
08:48 不是每个人都使用五分钟K线图
08:51 这张图上的每根K线是200个tips
08:55 价格行为也
08:56 非常的清晰
08:58 使用哪种类型K线图并不重要
09:01 你可以使用时间K线图任何的时间周期
09:05 一分钟、15分钟、60分钟
09:07 你可以使用成交量图
09:09 每根K线有任意数量的tix 50个tix
09:12 219个tix 1000个tips
09:15 你也可以使用其他类型的K线图 这不是关键
09:19 他们都体现了市场的价格行为
09:22 所有K线图上的结构都很接近
09:26 欧元兑美元的五分钟K线图
09:32 你可以看到一些mm目标不是最精确
09:36 但足够接近
09:37 足够让交易者去注意这些支撑和阻力`,referenceImage:{src:"/charts/19b-chart-types-solution.webp",page:1678,alt:"第1678页课件整页讲解",kind:"课件整页"}},{prompt:"外汇测量目标没有被精确触及，本课应怎样处理该位置？",options:["未精确到价就应等下一次补到目标后再认可作用","未精确到价就应改用另一个测量基点重新计算","足够接近仍值得观察该区域的支撑阻力"],answer:2,explanation:"本课明确说不精确但足够接近。错项要求重算或未来补到精确价，都是额外条件，容易把区域判断改成事后贴线。",id:"19B-K14-2",knowledgeId:"K14",knowledgeTitle:"不同图表体现相同价格行为",time:"08:11–09:37",pdfPages:[1678],type:"变式辨析",quote:`08:11 接下来我想举一些支撑和阻力的例子
08:18 这是欧元兑美元的成交量图
08:21 每根K线代表交易了200个tips
08:27 因为外汇市场的支撑和
08:30 阻力不如ES那么精确
08:32 所以交易者不太关心确切的价格
08:36 而且他们不太关心K线图的类型
08:39 例如有人使用这样的成交量图
08:42 有人用基于时间的K线图
08:44 比如五分钟K线图
08:48 不是每个人都使用五分钟K线图
08:51 这张图上的每根K线是200个tips
08:55 价格行为也
08:56 非常的清晰
08:58 使用哪种类型K线图并不重要
09:01 你可以使用时间K线图任何的时间周期
09:05 一分钟、15分钟、60分钟
09:07 你可以使用成交量图
09:09 每根K线有任意数量的tix 50个tix
09:12 219个tix 1000个tips
09:15 你也可以使用其他类型的K线图 这不是关键
09:19 他们都体现了市场的价格行为
09:22 所有K线图上的结构都很接近
09:26 欧元兑美元的五分钟K线图
09:32 你可以看到一些mm目标不是最精确
09:36 但足够接近
09:37 足够让交易者去注意这些支撑和阻力`},{prompt:"本课关于“未来外汇支撑阻力会更精确”的表述，应怎样记忆？",options:["记录为当时对计算机和基金参与增加的预期","记录为此刻所有平台报价已高度一致的验证结果","记录为只有统一交易所成立后精度才会提高的条件"],answer:0,explanation:"原文使用未来预期，未核实今天的状态，也未把建立统一交易所设为必要条件。保留历史语境即可。",id:"19B-K15-1",knowledgeId:"K15",knowledgeTitle:"计算机参与是课堂预测",time:"09:43–10:08",pdfPages:[1679],type:"理解判断",quote:`09:43 在未来的某个时候
09:45 电脑程序将完全主导外汇交易
09:48 就像他们已经主导了股指期货和大多数重要的股票
09:52 此外 对冲基金的参与度越来越高
09:55 随着时间的推移 数学将变得更加重要
09:59 因此支撑和阻力将变得更加精确
10:02 现在已经非常精确了
10:05 但我相信随着时间的推移 它会变得
10:08 极度精确`},{prompt:"宽通道里价格超出原线，又在新位置反转。本课允许怎样处理？",options:["原线越过即按突破成立，后续转折只作突破后的回测","保留最初两点作为唯一画线依据，后续只量越线幅度","结合后续转折重新拟合，让线反映正在发展的宽通道"],answer:2,explanation:"宽通道的线可随发展调整。一次越线不必已确认成功突破，最初两点也不是永久唯一依据；仍需比较后续价格反应。",id:"19B-K16-1",knowledgeId:"K16",knowledgeTitle:"宽通道中随发展重绘",time:"10:09–11:23",pdfPages:[1680],type:"理解判断",quote:`10:08 极度精确
10:09 反转一旦
10:10 交易者看到价格向下反转
10:13 他们就开始寻找另一次向下反转来划线
10:18 他们可以在这里画一条线
10:20 但一旦价格超过这条线
10:22 然后在这里再次反转
10:24 他们就这样划线 这里向下反转
10:27 这里向下反转
10:28 看市场在到达这条线时会怎么做
10:32 突破了它 然后交易者重新选择高点
10:35 在画线筑宽通道中 很少有完美的趋势线
10:40 刚开始通道的高度很窄
10:44 一旦有了这个突破 通道就变得很宽
10:47 你可以用那个低点和这个低点画另一个通道
10:50 外汇交易中的通道价格会不断超出趋势线
10:55 比其他市场更频繁
10:57 因为外汇的定价不够精确
11:03 随着趋势的发展 交易者喜欢重新划线
11:07 他们想要寻找最有效的那条线
11:10 比如在这个时候
11:11 交易者回过头去看哪一条趋势线最有效
11:16 用那个高点这个高点这个高点
11:21 然后观察当市场接近这条
11:23 线的时候会有什么反应`},{prompt:"图中粉色斜线附近多次出现转折。若另连最高两点的线一直碰不到，本课倾向哪种线？",options:["选反复得到价格反应、较好贴合整体趋势的线","选严格经过最高两点、即使后续触及较少的线","选与最近突破K实体平行、斜率最接近当前腿的线"],answer:0,explanation:"本课重点是市场反复尊重的线。最高两点或最近单根斜率都不能替代后续实际反应。",id:"19B-K17-1",knowledgeId:"K17",knowledgeTitle:"有效拟合优于机械连接最高点",time:"11:30–12:02",pdfPages:[1680],type:"图表应用",quote:`11:30 你想要找到一些市场尊重的线
11:35 这里向下反转这里向下反转 这里向下反转
11:40 你发现如果连接这两个最高点划线
11:44 价格永远不会到达那里
11:46 而他似乎总是在这条粉色线附近向下反转
11:52 因此交易者会使用这条近似的线
11:55 观察市场在接近它时会怎么做
11:59 你应该捕捉总体的大趋势
12:02 不用担心外汇中的趋势线不够精确`,image:{src:"/charts/19b-best-fit.webp",solutionSrc:"/charts/19b-best-fit-solution.webp",page:1680,alt:"19B原课件第1680页图表局部"}},{prompt:"一条线很牵强、很不明显，本课为什么降低对它的重视？",options:["能连上两点便符合趋势线条件，权重无需再分","不明显意味着共同采用可能更少，参考权重较低","不明显意味着别人尚未发现，应给予更高权重"],answer:1,explanation:"原课把明显程度与采用的计算机数量相联系。难发现不自动等于更有效，两点成线也不自动等于各条线同样重要。",id:"19B-K18-1",knowledgeId:"K18",knowledgeTitle:"不明显线的重要性",time:"12:09–12:14",pdfPages:[1680],type:"理解判断",quote:`12:09 如果一条线不明显 那么它就不重要
12:12 计算机不会使用它它也
12:14 不会提供什么支撑或阻力`},{prompt:"同在区间下沿，为什么连续大阴线收低后的判断不同于单纯向下转折？",options:["阴线实体较大，位置背景可先忽略再计算目标","处于区间下沿，连续阴线主要增加反转买盘依据","连续收低突破及跟随，增加向下延续依据"],answer:2,explanation:"题目比较普通下转和强突破跟随。既不能因下沿位置忽略新卖压，也不能只看实体而删除背景。",id:"19B-K19-1",knowledgeId:"K19",knowledgeTitle:"区间下沿与强突破跟随",time:"12:20–12:46",pdfPages:[1680],type:"理解判断",quote:`12:20 可以在这里向下反转的时候做空吗？
12:24 也许处于窄震荡区间的下沿
12:27 价格不会走太远
12:28 然而突破的阴线收在最低 大阴线收在最低
12:33 此时很高的概率至少还会再下跌一些
12:38 如果突破后有强势的跟随
12:41 做空的胜率就更高了
12:43 可以在它的收盘开仓做空
12:46 预期至少还会再下跌一些`},{prompt:"案例从有效趋势线向下反转，出现收在低位的阴线。课程所述突破入场位置在哪里？",options:["在信号阴线低点下方挂突破卖单","在信号阴线高点上方挂突破卖单","在信号阴线高点附近挂限价卖单"],answer:0,explanation:"一种错误说法是另一种订单时机，非本题指定突破入场；另一种错误说法把做空突破触发放到信号高点上方。字幕13:04买单按原页做空背景校正为卖单。",id:"19B-K20-1",knowledgeId:"K20",knowledgeTitle:"趋势线反转的做空信号",time:"12:54–13:08",pdfPages:[1681],type:"图表应用",quote:`12:54 空头也会在价格从趋势线反转下跌
12:57 时卖出做空不错的阴线收在最低
13:01 从最有效的这条趋势线反转下跌
13:04 他们会在那根K线的低点下方挂突破买单
13:08 订单会在这里成交`,image:{src:"/charts/19b-bear-signal.webp",solutionSrc:"/charts/19b-bear-signal-solution.webp",page:1681,alt:"19B原课件第1681页图表局部"}},{prompt:"按课程比较两个合理的做空止损，较窄与较宽通常有什么权衡？",options:["合理窄止损较少触发且单次较小，宽止损反之","合理窄止损较常触发但单次较小，宽止损反之","合理窄止损较常触发且单次较大，宽止损反之"],answer:1,explanation:"本段保持可比条件，权衡触发频率与单次金额，不把较窄说成同时减少两种代价，也不把更近止损说成更大单次损失。",id:"19B-K21-1",knowledgeId:"K21",knowledgeTitle:"合理宽窄止损的权衡",time:"13:13–13:53",pdfPages:[1681],type:"理解判断",quote:`13:13 如果他们在这里开仓做空
13:15 他们的止损在哪里？
13:16 可能在这个阴线的高点上方
13:19 或者他们可以把止损放在最近的重要高点它的上方
13:23 这两种都是合理的
13:25 如果有两个合理的止损选择
13:28 你可以用任何一个
13:29 如果你使用较窄的止损 亏损会更加频繁
13:33 但每次亏损的金额更小
13:35 如果你把止损放在这里或者里
13:37 使用较宽的止损
13:38 亏损的次数会更少一些
13:40 但每次止损被打到的时候 亏损的金额更大
13:44 不管你使用宽止损还是窄止损 只要是合理
13:48 的一百笔交易做下来
13:50 最后总的利润是差不多的
13:53 只要使用一个合理的止损就可以了`,referenceImage:{src:"/charts/19b-bear-stops-solution.webp",page:1681,alt:"第1681页课件整页讲解",kind:"课件整页"}},{prompt:"课程说合理宽窄止损做很多笔后总利润相近，最不能省略哪个前提？",options:["比较的两种止损都要有合理结构依据","比较的两种止损都要避开任何正常回调","比较的两种止损只需有同样的点数距离"],answer:0,explanation:"课程“很多笔后利润相近”限定为两种都合理。点数相同不是宽窄比较，要求避开所有正常回调则忽略了合理止损仍可能触发。",id:"19B-K21-2",knowledgeId:"K21",knowledgeTitle:"合理宽窄止损的权衡",time:"13:13–13:53",pdfPages:[1681],type:"变式辨析",quote:`13:13 如果他们在这里开仓做空
13:15 他们的止损在哪里？
13:16 可能在这个阴线的高点上方
13:19 或者他们可以把止损放在最近的重要高点它的上方
13:23 这两种都是合理的
13:25 如果有两个合理的止损选择
13:28 你可以用任何一个
13:29 如果你使用较窄的止损 亏损会更加频繁
13:33 但每次亏损的金额更小
13:35 如果你把止损放在这里或者里
13:37 使用较宽的止损
13:38 亏损的次数会更少一些
13:40 但每次止损被打到的时候 亏损的金额更大
13:44 不管你使用宽止损还是窄止损 只要是合理
13:48 的一百笔交易做下来
13:50 最后总的利润是差不多的
13:53 只要使用一个合理的止损就可以了`},{prompt:"图中回调多次接近下方斜线却未精确碰到，出现长下影和回升。课程提醒什么？",options:["价格可能不碰原线，继续观察反转和第二买点","价格未碰原线，先把线移到当前最低影线","价格未碰原线，先等精确测试再识别买点"],answer:0,explanation:"本例直接讨论没精确碰线时的入场信号。等精确价或每次移线贴住低点都把“位置参考”误当成必须命中的价。",id:"19B-K22-1",knowledgeId:"K22",knowledgeTitle:"反转可以未碰原趋势线",time:"14:01–14:40",pdfPages:[1682],type:"图表应用",quote:`14:01 在上涨趋势中
14:03 交易者寻找向上反转的买入机会
14:06 市场在这里反转 在这里反转
14:09 你可以画一条线
14:14 然后观察市场在接近这条线时会怎么做
14:17 可以看到价格差一点点碰到趋势线
14:21 再次尝试下探 再次尝试下探
14:24 但是一直在向上反转
14:25 你必须假设价格可能不会碰到趋势线了
14:29 可以在前一根K线的高点上方买入
14:32 尤其是第二做多入场点
14:34 第一入场是这根K线的上方
14:37 第二入场是这根K线的上方
14:40 三次尝试跌到趋势线都没有成功`,image:{src:"/charts/19b-missed-line.webp",solutionSrc:"/charts/19b-missed-line-solution.webp",page:1682,alt:"19B原课件第1682页图表局部"}},{prompt:"原支撑线不贴合时，课程怎样寻找另一条下沿？",options:["连下方最近两低点后平移上沿，只观察两端点","连上下两个转折后取中线，让所有影线尽量穿过","连上方转折后平移下沿，包住中间K线并观察"],answer:2,explanation:"原课在原下沿不贴合时，从有效上沿寻找平行下沿，并考虑中间K线。仅看两端或改画穿过K线的中线都改变了方法。",id:"19B-K23-1",knowledgeId:"K23",knowledgeTitle:"由通道上沿构造平行下沿",time:"14:47–16:07",pdfPages:[1682,1683],type:"图表应用",quote:`14:47 你需要不断的寻找其他的线
14:50 价格在这里反转下跌
14:52 在这里有一个更大的反转
14:55 它有可能是一条重要的线
15:00 假如它确实重要 那么值得画一条平行线
15:04 把它移动到下方 把所有的K线包含进去
15:09 所以你选择这根K线这样画平行通道的话
15:14 两个高点之间的所有K线都在这条线的上方
15:19 在第二个高点之后观察
15:22 计算机是否在关注这条线
15:24 显然他们是关注的这里和这里
15:28 所以有很多计算机在使用平行线
15:35 如果一条线不起作用 而另一条线起作用
15:40 你就删掉没用的线
15:45 并且你应该在向上反转的时候买入做多
15:49 向上反转这里有第二做多入场点
15:52 你可以在这个小十字星的上方
15:54 或者在这个阳线的上方买入
15:57 你可以在这根K线上方买入
16:00 或者在这个第二做多入场点开仓
16:03 这是一个双底 这两个下影线是一个小双底
16:07 市场在上涨通道的下沿附近反弹`,image:{src:"/charts/19b-parallel.webp",solutionSrc:"/charts/19b-parallel-solution.webp",page:1682,alt:"19B原课件第1682页图表局部"}},{prompt:"课程案例中，一个较早的低点之后出现强上涨并创出新高。为什么它也可作为合理止损依据？",options:["它离当前入场更远，因此天然比近低点更有效","它比当前小双底更早形成，因此具有时间优先级","其后强上涨并创新高，是较重要的抬高低点"],answer:2,explanation:"重要性来自其后的强突破创新高，不单由更早、更远决定。小双底与重要低点可各提供合理但宽窄不同的依据。",id:"19B-K24-1",knowledgeId:"K24",knowledgeTitle:"多头止损与重要抬高低点",time:"16:14–16:44",pdfPages:[1683],type:"理解判断",quote:`16:14 如果你在这个小双底买入
16:17 把止损放在这里是合理的
16:19 然而把止损放在这里下方也是
16:22 合理的这是一个重要的低点
16:26 因为这个低点后面价格强势的上涨创新高
16:31 一样的道理
16:32 如果你使用较窄的止损
16:34 你每次的亏损更小 但亏损的频率更高
16:38 如果你使用较宽的止损
16:40 你每次亏损的金额更大
16:42 但止损被打掉的频率更低
16:44 两种都合理 因此使用任何一种都是可以的`,referenceImage:{src:"/charts/19b-bull-stops-solution.webp",page:1683,alt:"第1683页课件整页讲解",kind:"课件整页"}},{prompt:"课程比较两种合理止损，又举入场下方两pip的反例，两者区别在哪里？",options:["只要方向判断正确，两pip与结构止损可直接互换","结构合理才可比较，过近两pip可能被正常波动触发","只要两pip能缩小单次损失，就属于合理窄止损"],answer:1,explanation:"课中两pip是过窄反例。单次小不等于总体合理，方向判断也不取消正常回调及结构需要。",id:"19B-K25-1",knowledgeId:"K25",knowledgeTitle:"过窄或过远的止损限制",time:"16:48–17:01",pdfPages:[1683],type:"理解判断",quote:`16:44 两种都合理 因此使用任何一种都是可以的
16:48 如果你把止损放得太远或太窄 你会亏钱
16:54 比如说你在这里买入
16:56 然后把止损放在下方二个pips你会亏钱
16:59 如果在这里买入
17:01 然后把止损放在下方二个pips你会亏钱`},{prompt:"实际楔形不够标准时，本课要求优先检查什么？",options:["检查背景和在线附近的反转，形状允许不完美","检查每一推是否精确碰线，优先排除略微越线","检查三段高度是否相等，优先排除非标准比例"],answer:0,explanation:"原文强调现实形态常不完美，背景好且反转值得观察。等高、精确碰线都不是此处必要条件。",id:"19B-K26-1",knowledgeId:"K26",knowledgeTitle:"不完美楔形仍需背景",time:"17:07–17:59",pdfPages:[1684],type:"理解判断",quote:`17:07 大多数机会看起来并不完美
17:10 他们看起来不像教科书上的那些完美的形态
17:14 但如果他们看起来还不错 那就足够好了
17:17 并且这些线会产生支撑和阻力
17:21 比如三推楔形
17:22 很少有完美的些形
17:27 但如果背景足够好
17:29 交易者会在这些线寻找反转的机会
17:34 向下反转可以画一条线
17:36 再次向下反转 交易者会卖出做空
17:40 向下反转画一条线
17:42 观察市场在接近那条线时会发生什么
17:45 这里也是一样 向下反转 向下反转
17:48 观察市场接近那条线时会发生什么
17:52 当你看到价格在反转时 就考虑卖出做空
17:57 这里也是一样 反转
17:59 然后看看这里发生了什么`},{prompt:"后来上涨通道的第一个高点出现后，市场还创了新低。课程怎样解释？",options:["后面出现新低，应把原高点定为下降末段而非上涨起点","可能是旧下降转入新上涨的过渡，两个结构在时间上重叠","新上涨的第一高点应在旧下降结束后选，原点只属旧结构"],answer:1,explanation:"本段特意说明过渡可重叠。后来上涨通道的第一高点先出现、旧下降随后创新低，并不必然排除原点在新通道中的作用。",id:"19B-K27-1",knowledgeId:"K27",knowledgeTitle:"趋势过渡中的第一高点",time:"18:02–18:32",pdfPages:[1684],type:"理解判断",quote:`17:59 然后看看这里发生了什么
18:02 现在这是一个三推楔形123 你可能会想
18:07 老师等一下
18:09 这个高点是这个上涨通道的一部分
18:12 但当时下降趋势还没有结束
18:14 在这之后又创新低了 这很常见
18:17 因为趋势通常从一个过渡到另一个下降趋势
18:22 然后变成上涨趋势 这是过渡阶段
18:25 通常情况下
18:26 上涨趋势中的第一个高点往往在下降趋势结束之前就出现
18:32 它是下跌到上涨过渡阶段的一部分`},{prompt:"强多头突破后约50%回调，三次向下推动后转涨，课程把它放在哪种背景中观察？",options:["三次下推已完成，先按独立大反转而非牛旗观察","回调已达半幅，先按新下降通道寻找反弹卖点","强上涨后的三推回调，可按楔形牛旗观察"],answer:2,explanation:"强多头突破是关键背景，三推是在上涨后的回调中。半幅不自动结束上涨，数三推也不自动等于反向大趋势。",id:"19B-K28-1",knowledgeId:"K28",knowledgeTitle:"楔形牛旗与回调背景",time:"18:39–19:01",pdfPages:[1684],type:"理解判断",quote:`18:39 楔形牛骑看起来并不完美
18:42 但交易者在趋势线反转上涨时买入了市场回调
18:46 并测试了通道的上沿 然后再次反转上涨
18:51 所以交易者把它看作一个楔形牛起
18:55 多头突破大约50%的回调
18:59 三次向下推动123
19:01 然后转上涨`},{prompt:"图中蓝色较大下行结构的第三段内部又有较小三推，末端反弹。课程所说“嵌套”指什么？",options:["三个相邻楔形共用相同的最高点和最低点","大楔形第三段内部还有较小三推结构","一个楔形在三个周期上有相同的精确触线"],answer:1,explanation:"嵌套指内部层级，本例为大第三段里的小楔形，不是并列三形态，也不要求跨周期精确重合。",id:"19B-K29-1",knowledgeId:"K29",knowledgeTitle:"嵌套楔形与两段预期",time:"19:05–19:28",pdfPages:[1684],type:"图表应用",quote:`19:05 嵌套式楔形底12
19:07 然后看市场再次接近这条线时发生了什么
19:13 小双底阳线收在最高 不错的三推楔形
19:18 预期至少有两段上涨一回调
19:21 然后第二段刚才说这是嵌套式楔形
19:25 因为在第三段中有一个更小的楔形
19:28 123反转上涨的概率就更高了`,image:{src:"/charts/19b-nested.webp",solutionSrc:"/charts/19b-nested-solution.webp",page:1684,alt:"19B原课件第1684页图表局部"}},{prompt:"预期至少两段上涨，第一次上涨后出现回调，应怎样计数和检验预期？",options:["两段之间允许回调，应继续检验第二段预期","第一次回调已经算第二段，因此原预期已满足","第一次回调抵消第一段，因此需要从零重新计数"],answer:0,explanation:"两段上涨之间的回调不是第二段上涨，也不会把第一段抹掉。案例预期是上涨、回调、再上涨。",id:"19B-K29-2",knowledgeId:"K29",knowledgeTitle:"嵌套楔形与两段预期",time:"19:05–19:28",pdfPages:[1684],type:"变式辨析",quote:`19:05 嵌套式楔形底12
19:07 然后看市场再次接近这条线时发生了什么
19:13 小双底阳线收在最高 不错的三推楔形
19:18 预期至少有两段上涨一回调
19:21 然后第二段刚才说这是嵌套式楔形
19:25 因为在第三段中有一个更小的楔形
19:28 123反转上涨的概率就更高了`},{prompt:"图左下方紫色窄下降段虽有三推，课程为什么不把它当强买入背景？",options:["紫色下沿被略微跌破，优先确认已完成空头陷阱","窄下降且前次反弹小，首次反转级别仍受限制","三推已结束，窄通道使止损更近所以优先大波段买入"],answer:1,explanation:"本课用窄通道作为反例，通常先小反弹、区间或熊旗。不能用三推、止损近或稍破下沿跳过反转级别判断。",id:"19B-K30-1",knowledgeId:"K30",knowledgeTitle:"窄下降通道限制楔形反转",time:"19:34–19:59",pdfPages:[1684],type:"图表应用",quote:`19:34 三次向下推动123
19:37 但这个楔形有一个问题
19:39 那就是通道太窄了 反弹幅度太小了
19:44 这么的窄通道通常是一个小反弹
19:47 然后反弹会成为震荡区间或雄起的一部分
19:52 看起来不错的反弹 但没有走太远
19:55 它成为一个雄奇 随后继续下跌创新低`,image:{src:"/charts/19b-tight-wedge.webp",solutionSrc:"/charts/19b-tight-wedge-solution.webp",page:1684,alt:"19B原课件第1684页图表局部"}},{prompt:"第二高点略高或略低于第一高点，本课怎样识别双顶？",options:["允许高低不完全相同，重点看测试前高后转跌","高于前高应先归上涨突破，低于前高才可归双顶","两点间距较大时看反转，间距较小时要求精确同价"],answer:0,explanation:"课程允许高或低很多的第二点，未按间距另设精确同价条件。重要的是测试及实际向下反应。",id:"19B-K31-1",knowledgeId:"K31",knowledgeTitle:"双顶双底不必等高等低",time:"20:02–20:30",pdfPages:[1685],type:"理解判断",quote:`20:02 市场总是关注前期的高点和低点
20:06 所以你会看到很多双顶和双底
20:13 如果市场接近前期的高点并反转下跌
20:17 它就形成了一个双顶
20:19 大多数的双顶和双底都不精确
20:23 第二个高点通常稍微高于或低于第一个高点
20:27 有时甚至会高很多和低很多`},{prompt:"图中高位一度向上突破，但很快出现明显向下的阴线。为什么还要检查跟随？",options:["高点已超过旧顶，后续只需计算上方等长目标","突破后跟随差且收低反转，可能形成多头陷阱","突破K已足够强，后续阴线可先当回测买点"],answer:1,explanation:"后续跟随会改变突破判断。不能停留在突破K外观，也不能只因创新高就取消失败突破的可能。",id:"19B-K32-1",knowledgeId:"K32",knowledgeTitle:"前高卖出信号和多头陷阱",time:"20:32–21:39",pdfPages:[1685],type:"图表应用",quote:`20:32 双顶市场接近那个高点并再次反转下跌
20:36 这个阴线是做空信号K所以
20:39 你可以在它的低点下方卖出
20:42 阴线反转下跌在它的低点下方卖出
20:47 这里有一个高点 市场接近它并反转下跌
20:52 这是一个双顶
20:54 尽管这个高点低于那个高点
20:57 这是做空信号K线
20:58 你可以在这根K线下方挂突破卖单
21:02 然后在这里成交
21:03 你可以在这根K线下方挂突破卖单
21:06 这是第二做空入场点 订单会在这里成交
21:10 这是一个双顶 这个高点高于那个高点
21:13 你可以说它是高点抬高的大反转
21:16 或者你可以简单的说
21:18 它是双顶强势的多头突破
21:20 但看看这个向下的反转
21:22 非常不错的阴线收在最低
21:24 这可能是一个多头陷阱
21:26 诱使交易者相信会成功的向上突破
21:30 但对多头来说 突破后的跟随非常糟糕
21:33 空投会在那根K线的低点下方挂突破卖单
21:37 他们的订单会在这里成交`,image:{src:"/charts/19b-top-trap.webp",solutionSrc:"/charts/19b-top-trap-solution.webp",page:1685,alt:"19B原课件第1685页图表局部"}},{prompt:"第一次做空信号之外，课程还讨论第二做空入场，这提醒什么？",options:["可观察后续再次反转触发，仍需新信号支持","第二次应改用第一次阴线的收盘作精确触发","第二次只需到前次卖价，无需再检查反转触发"],answer:0,explanation:"本段示范新的阴线下方突破。入场次数不代替新信号，也没有把第二次触发固定在第一次收盘。",id:"19B-K32-2",knowledgeId:"K32",knowledgeTitle:"前高卖出信号和多头陷阱",time:"20:32–21:39",pdfPages:[1685],type:"变式辨析",quote:`20:32 双顶市场接近那个高点并再次反转下跌
20:36 这个阴线是做空信号K所以
20:39 你可以在它的低点下方卖出
20:42 阴线反转下跌在它的低点下方卖出
20:47 这里有一个高点 市场接近它并反转下跌
20:52 这是一个双顶
20:54 尽管这个高点低于那个高点
20:57 这是做空信号K线
20:58 你可以在这根K线下方挂突破卖单
21:02 然后在这里成交
21:03 你可以在这根K线下方挂突破卖单
21:06 这是第二做空入场点 订单会在这里成交
21:10 这是一个双顶 这个高点高于那个高点
21:13 你可以说它是高点抬高的大反转
21:16 或者你可以简单的说
21:18 它是双顶强势的多头突破
21:20 但看看这个向下的反转
21:22 非常不错的阴线收在最低
21:24 这可能是一个多头陷阱
21:26 诱使交易者相信会成功的向上突破
21:30 但对多头来说 突破后的跟随非常糟糕
21:33 空投会在那根K线的低点下方挂突破卖单
21:37 他们的订单会在这里成交`},{prompt:"对同一段反弹，有人连这两个高点，有人连另两个，还可说失败头肩底。课程更重视什么？",options:["所在位置、跟随与反转，比统一命名更关键","先按两个最高点配对，再忽略其他局部信号","先确定唯一形态名称，再由名称选定方向"],answer:0,explanation:"多个结构解释可并存，课程回到区间上沿、弱跟随和阴线。强求唯一命名或唯一两点会漏掉共同的价格行为。",id:"19B-K33-1",knowledgeId:"K33",knowledgeTitle:"名称和高点选取不是核心",time:"21:41–23:56",pdfPages:[1685],type:"理解判断",quote:`21:41 小双顶雄奇尝试在这里上涨
21:45 尝试在这里上涨
21:46 你可以说这是一个双鼎雄奇
21:50 你也可以说它是双鼎雄奇
21:52 你可以说这里的任何两个高点是双顶雄旗
21:57 在我看来反弹横盘调整这里开始到这里结束
22:01 所以我认为这两个高点中的
22:04 一个和那个高点组成了双底
22:07 不管怎么看当市场反转下跌时
22:09 你要在阴线下方开仓做空
22:12 有一个小阴线在它的低点
22:14 下方挂突破卖单是合理的
22:20 窄下降通道尝试反转上涨
22:23 窄通道的反转通常不会走太远
22:27 可以看到价格再次下跌
22:29 价格测试了这个高点或这些高点
22:33 所以对我来说这是一个双顶雄
22:36 旗可能是那个高点和那个高点
22:39 我在寻找反转下跌的做空机会
22:41 这是一根从上往下的吞噬线
22:44 前一根K线收在最低的阴线
22:46 在它的下方开仓做空是合理的
22:49 或者在这根K线下方
22:51 或者在反弹K线的下方挂突破卖单
22:55 在这里成交市场尝试反弹
22:58 失败了 再次尝试强势反弹
23:01 略微超过了这个高点
23:03 但基本上是对这个高点的测试
23:06 也许尝试测试这个高点
23:08 在我看来这两个高点是一个双顶
23:11 一些计算机会说这两个高点是双顶
23:16 不管哪个是双顶 总之多头后续的跟随不好
23:20 阴线收在低位
23:21 交易者会在他的低点下方挂突破卖单
23:25 订单会在这里成交
23:27 又是一个双顶
23:29 几次小的推动到第一个高点
23:33 然后几次小的推动到第二个高点
23:37 这是一个失败的头肩底
23:39 左肩头右肩具体是什么不重要
23:43 现在处于窄震荡区间的上沿
23:45 第一次尝试向上突破是这里
23:48 然后在这里这里再次尝试
23:50 这是一个双顶
23:52 空头会在这根K线的低点下方卖出做空`},{prompt:"上涨背景中，第二次下跌低点略低，但随后转涨。本课怎样看待？",options:["第二低点更低说明原支撑无关，应只看均线","上涨背景仍可形成双底牛旗，需看转涨触发","第二低点更低说明下降建立，转涨仅为熊旗"],answer:1,explanation:"课程明确给更低低点双底牛旗。局部新低不自动建立下降，原低点的测试作用也没有消失。",id:"19B-K34-1",knowledgeId:"K34",knowledgeTitle:"前低反转与双底牛旗",time:"24:00–24:50",pdfPages:[1685],type:"图表应用",quote:`24:00 头会做相反的事
24:01 当价格测试前期低点 然后反转上涨时
24:05 多头寻找做多的机会
24:07 市场下跌强势反弹
24:10 更加剧烈的下跌到达了略微更低的低点
24:14 但这是一个双底牛旗
24:16 目前市场仍处于上涨趋势
24:19 几次下跌的尝试 现在市场正在反转上涨
24:23 交易者会在这根K线的高点上方挂突破
24:26 买单订单会在这里成交
24:29 下降趋势到了前期的关键低点
24:33 尝试继续下跌
24:35 多头买入 再次买入
24:36 空头尝试继续向下突破 但失败了
24:40 这个低点和那个低点形成了双底
24:43 这个低点和那个低点又形成了小双底
24:46 交易者会在这根阳线的上方挂突破买单`,image:{src:"/charts/19b-double-bottom.webp",solutionSrc:"/charts/19b-double-bottom-solution.webp",page:1685,alt:"19B原课件第1685页图表局部"}},{prompt:"看到强上涨后很深的下跌，为什么课程还要求向左看？",options:["深跌已形成双底，左侧突破起点可不再核对","深跌幅度超过最近回调，先按新的强下降解释","深跌仍可能回测左侧突破起点，再结合末端反转"],answer:2,explanation:"深回调要放到更大左侧结构中。只按眼前跌幅判下降、或只数末端双底就删去背景，都会遗漏课程比较的多种位置。",id:"19B-K35-1",knowledgeId:"K35",knowledgeTitle:"深回调与大级别突破起点",time:"24:52–26:18",pdfPages:[1685],type:"理解判断",quote:`24:52 强势的多头突破深度回调
24:55 看这里发生了什么？
24:58 这一大段下跌仍然有可能只是一次
25:01 回调来测试第一次突破的起涨点
25:05 这可能是一个大的双底
25:07 这个低点最初和这个低点
25:09 然后是这个低点 然后是这个低点
25:12 当我看到现在这张图时
25:14 我认为这里和这里是一个双底
25:18 这个低点价格最低时间
25:21 最近多头会在反转上涨时买入做多压住
25:25 这可能是一个低点抬高的大反转
25:28 前面这里是下降趋势非常强势的多头突破
25:32 也许这只是一个深度的回调测试
25:36 通道起点的牛骑多头突破是急速上涨
25:40 然后回调进入楔形通道尝试
25:43 加速向上突破楔形通道失败了
25:46 强势上涨回调
25:48 所有的这些可能是一个大的回调测试
25:54 第一次回调的低点
25:58 然后多头有一定的概率让趋势恢复上涨
26:04 市场在这里反转上涨
26:07 现在有一个小双底 两根漂亮的阳线
26:10 交易者会在这根K线或这根K线的
26:14 高点上方挂突破买单订单会在这里成交`,referenceImage:{src:"/charts/19b-double-overview-solution.webp",page:1685,alt:"第1685页课件整页讲解",kind:"课件整页"}},{prompt:"窄区间被强势跌破，反弹没能走远又转跌。课程观察的是什么？",options:["反弹已回到突破点，先按空头失败和上涨处理","回测突破点后转跌，观察新的向下触发","强下破已发生，反弹尚未结束也可忽略信号直接卖"],answer:1,explanation:"回到区域不代表空头突破失败；反过来有过强下破也不意味能省掉题中所观察的回测下转触发。",id:"19B-K36-1",knowledgeId:"K36",knowledgeTitle:"向下突破回测再转跌",time:"26:23–27:09",pdfPages:[1686],type:"图表应用",quote:`26:23 交易者一直在寻找突破回撤的机会
26:32 例如在下降趋势中 如果有突破
26:35 交易者会观察反弹回到
26:37 突破点的时候会发生什么
26:41 如果趋势恢复下跌 交易者就卖出做空
26:45 这里有一个突破测试
26:49 相当窄震荡区间强势的空头突破多头
26:53 尝试让空头的突破失败并反转上涨
26:58 然而反弹没能走多 市场再次下跌
27:01 交易者会在前
27:03 一根K线的低点下方挂突破卖单
27:07 订单会在这里成交`,image:{src:"/charts/19b-bear-retest.webp",solutionSrc:"/charts/19b-bear-retest-solution.webp",page:1686,alt:"19B原课件第1686页图表局部"}},{prompt:"空头强突破后为什么仍可能反弹回突破点附近？",options:["空头回补止盈与被套多头低位加仓，共同提供反弹买盘","主要是空头止盈，被套多头应等回原价后才考虑再买","主要是新多头入场，盈利空头在强突破后通常不参与反弹"],answer:0,explanation:"本课同时解释空头回补和被套多头的低位买入。两个错项用另一种真实行为排除了课中已经明确保留的买盘来源；加仓案例另须保留风险增加的限制。",id:"19B-K37-1",knowledgeId:"K37",knowledgeTitle:"反弹中的双方买盘与加仓代价",time:"27:10–28:27",pdfPages:[1686],type:"理解判断",quote:`27:10 出现反弹的原因是有一些空头止盈
27:15 前期做空的空头 或者在突破时做空的空头
27:19 一旦市场下跌了足够的幅度
27:21 他们会只赢一部分做剥头皮交易
27:24 所以有一些空头在买入止盈
27:27 其次有多头在逢低加仓 压住震荡区间会继续
27:31 他们在区间的下沿挂了限价买单
27:34 然后看到突破 他们知道坏了
27:37 有麻烦了
27:38 然而他们期待突破后会反弹回撤突破点
27:41 他们期待有一些空头会买入止盈
27:44 所以一些多头会在更低的价格加仓
27:48 买入更多在初始仓位下方
27:50 13个剥头皮交易距离的地方加仓
27:53 然后他们会考虑在初始入场的
27:55 价格或稍低一些的价格离场
27:57 确保订单成交
27:59 他们一开始在这里挂单买入
28:01 如果他们在这里买入更多
28:04 反弹超过了他们两次入场的平均价格
28:08 他们通过加仓避免了亏损
28:10 他们在这里买入 在这里买入更多
28:13 他们的平均入场价格在这里
28:15 这是他们最终能够不亏离场注
28:18 这样的做法在提高胜率的同时也让风险加倍
28:22 他们逢低加仓买入的行为也是
28:25 价格反弹回撤突破点的原因之一`,referenceImage:{src:"/charts/19b-retest-overview-solution.webp",page:1686,alt:"第1686页课件整页讲解",kind:"课件整页"}},{prompt:"案例说低位再买可降低平均入场价，必须一同保留哪项限制？",options:["均价改善会缩短回本距离，因此总风险相应减半","均价改善同时承担更大仓位，原课提醒风险加倍","均价改善使初始止损更近，因此风险由原仓决定"],answer:1,explanation:"课中明确说提高不亏退出机会同时风险加倍。回本距离缩短不等于持仓风险减小，也没说新增仓位无需计入风险。",id:"19B-K37-2",knowledgeId:"K37",knowledgeTitle:"反弹中的双方买盘与加仓代价",time:"27:10–28:27",pdfPages:[1686],type:"变式辨析",quote:`27:10 出现反弹的原因是有一些空头止盈
27:15 前期做空的空头 或者在突破时做空的空头
27:19 一旦市场下跌了足够的幅度
27:21 他们会只赢一部分做剥头皮交易
27:24 所以有一些空头在买入止盈
27:27 其次有多头在逢低加仓 压住震荡区间会继续
27:31 他们在区间的下沿挂了限价买单
27:34 然后看到突破 他们知道坏了
27:37 有麻烦了
27:38 然而他们期待突破后会反弹回撤突破点
27:41 他们期待有一些空头会买入止盈
27:44 所以一些多头会在更低的价格加仓
27:48 买入更多在初始仓位下方
27:50 13个剥头皮交易距离的地方加仓
27:53 然后他们会考虑在初始入场的
27:55 价格或稍低一些的价格离场
27:57 确保订单成交
27:59 他们一开始在这里挂单买入
28:01 如果他们在这里买入更多
28:04 反弹超过了他们两次入场的平均价格
28:08 他们通过加仓避免了亏损
28:10 他们在这里买入 在这里买入更多
28:13 他们的平均入场价格在这里
28:15 这是他们最终能够不亏离场注
28:18 这样的做法在提高胜率的同时也让风险加倍
28:22 他们逢低加仓买入的行为也是
28:25 价格反弹回撤突破点的原因之一`},{prompt:"课程为什么说空头强突破后，多头和空头都可能卖出？",options:["第二段主要是原空头加仓，多头退出已全部在突破前完成","第二段主要是多头止盈，新空头需等下方目标完成才进入","多头卖出退出被套多仓，空头卖出寻找新的做空机会"],answer:2,explanation:"原文在强空头突破之后讨论失望多头退出与未入场空头寻找卖点。没有把多头退出提前到突破前，也没有要求空头等目标已完成才开仓。",id:"19B-K38-1",knowledgeId:"K38",knowledgeTitle:"第二段下跌的卖盘来源",time:"28:28–28:42",pdfPages:[1686],type:"理解判断",quote:`28:28 在强势的空头突破后 多头和空头都会卖出
28:32 多头卖出 放弃他们的多头仓位
28:35 而之前没有入场的空头也在寻找卖出的机会
28:39 这就造成了在强势突破后的第二段下跌`},{prompt:"原先重要低点被跌破，本课的结论是哪一种？",options:["原上涨前提改变，仍需区分区间与下降","原上涨直接转为强下降，反弹都按熊旗处理","只要还有阳线反弹，原强上涨前提仍然完整"],answer:0,explanation:"重要低点失守足以撤销原上涨前提，但不足以确认只有强下降；出现阳线也不自动恢复已经失守的条件。",id:"19B-K39-1",knowledgeId:"K39",knowledgeTitle:"重要低点失守与趋势重估",time:"28:44–29:34",pdfPages:[1686],type:"理解判断",quote:`28:44 市场在这里处于上涨趋势
28:47 然后跌破了一个重要的低点
28:50 重要是因为之后多头强势突破创新高了
28:54 所以这是一个非常重要的价格
28:57 只要市场能维持在它的上方
28:59 交易者就会假设上涨趋势仍然有效
29:02 一旦它被跌破 交易者会得出结论
29:05 市场不再处于上涨趋势
29:08 它要么处于震荡区间 要么处于下降趋势
29:12 市场跌破了 它尝试回到上方
29:15 失败了 交易者会在反转下跌时卖出做空
29:19 再次尝试回到突破点上方 再次失败
29:22 第二次突破测试阴线
29:25 空头会在它的低点下方挂突破卖单
29:30 订单会在后一根K线跌破低点时
29:34 成交量多头也在找突破回撤的机会`},{prompt:"跌破重要低点后两次反弹都未能重新站回，本课关注第二次测试后的什么？",options:["第二次刚触及旧低点时直接限价卖出，不等下转","第二次回测失败后的阴线低点下方卖出","第二次站回旧低点后再卖出，把成功重返当作触发"],answer:1,explanation:"本段在第二次测试站回失败后，等待阴线下方触发。到价限价是另一时机，成功站回则与题中失败重返条件相反。",id:"19B-K39-2",knowledgeId:"K39",knowledgeTitle:"重要低点失守与趋势重估",time:"28:44–29:34",pdfPages:[1686],type:"变式辨析",quote:`28:44 市场在这里处于上涨趋势
28:47 然后跌破了一个重要的低点
28:50 重要是因为之后多头强势突破创新高了
28:54 所以这是一个非常重要的价格
28:57 只要市场能维持在它的上方
28:59 交易者就会假设上涨趋势仍然有效
29:02 一旦它被跌破 交易者会得出结论
29:05 市场不再处于上涨趋势
29:08 它要么处于震荡区间 要么处于下降趋势
29:12 市场跌破了 它尝试回到上方
29:15 失败了 交易者会在反转下跌时卖出做空
29:19 再次尝试回到突破点上方 再次失败
29:22 第二次突破测试阴线
29:25 空头会在它的低点下方挂突破卖单
29:30 订单会在后一根K线跌破低点时
29:34 成交量多头也在找突破回撤的机会`},{prompt:"图中绿色标记附近的回调，为什么要向左查看旧高点和区间上沿？",options:["只查当前均线价格，突破点未精确触及便不计","只查最近一次突破高点，更早旧高点可先排除","查是否回测旧高点或旧区间上沿，再看转涨"],answer:2,explanation:"本页明确向左检查多个旧高点及区间上沿，也允许没精确碰到的回测。不能只保留最近高点或均线。",id:"19B-K40-1",knowledgeId:"K40",knowledgeTitle:"向上突破回测与信号选择",time:"29:34–31:27",pdfPages:[1686],type:"图表应用",quote:`29:30 订单会在后一根K线跌破低点时
29:34 成交量多头也在找突破回撤的机会
29:38 当价格回调到突破点的时候
29:41 多头会在价格反转上涨时买入
29:44 你可以看到一个非常强势的多头突破
29:47 突破了什么东西 突破了这个高点
29:50 那个高点
29:51 这些高点都是突破这里市场尝试回撤这个最低的突破点
29:57 但是没有碰到然后上涨趋势继续回撤突破点
30:02 然后反转上涨
30:04 多头会在那个阳线上方挂
30:07 突破买单订单会在这里成交
30:10 突破更强势的突破 然后回调看左边
30:14 看看市场是否在测试什么东西
30:17 市场在测试这个区间的上沿
30:20 多头会在反转上涨时买入
30:22 要么在那个阴线的上方
30:24 通常最好在阳线上方买入
30:26 所以可以在这根K线的高点上方挂突破买单
30:30 订单会在这里成交
30:32 或者你可以说这是一个高二牛期
30:35 尝试在这里上涨
30:36 尝试在这里上涨 在这个特定的背景下
30:40 在这个阴线的上方买入也是合理的
30:43 小双底下跌上涨 然后这根K线下跌上涨
30:47 上涨趋势中两次下跌的尝试都失败
30:50 多头会在前一根K线的高点上方
30:54 挂突破买单订单会在这里成交
30:58 同样长是反转下跌
31:01 看左边市场在测试什么东西吗？
31:04 是他在测试这个高点 再次尝试反转下跌
31:08 看看左边他在测试前期的高点吗？
31:11 是的 他在测试这个前期高点
31:14 所以这只是一个突破测试
31:16 他也是对这个突破点的回测
31:20 多头会在反转上涨时买入
31:22 尤其是在阳线的上方突破
31:25 买单会在这里和这里成交`,image:{src:"/charts/19b-bull-retest.webp",solutionSrc:"/charts/19b-bull-retest-solution.webp",page:1686,alt:"19B原课件第1686页图表局部"}},{prompt:"课程通常偏好在阳线上方买，却也说某个阴线上方买合理。如何理解？",options:["既偏好阳线就需等阳线，原文阴线只是尚未完成信号","一般偏好阳线，特定高二背景允许不同信号形态","既有高二名称即可忽略形态，所有阴线上方都等价"],answer:1,explanation:"本课同时给一般偏好与特定背景例外。不能把例外推广，也不能用一般偏好删去原课明确允许的阴线信号。",id:"19B-K40-2",knowledgeId:"K40",knowledgeTitle:"向上突破回测与信号选择",time:"29:34–31:27",pdfPages:[1686],type:"变式辨析",quote:`29:30 订单会在后一根K线跌破低点时
29:34 成交量多头也在找突破回撤的机会
29:38 当价格回调到突破点的时候
29:41 多头会在价格反转上涨时买入
29:44 你可以看到一个非常强势的多头突破
29:47 突破了什么东西 突破了这个高点
29:50 那个高点
29:51 这些高点都是突破这里市场尝试回撤这个最低的突破点
29:57 但是没有碰到然后上涨趋势继续回撤突破点
30:02 然后反转上涨
30:04 多头会在那个阳线上方挂
30:07 突破买单订单会在这里成交
30:10 突破更强势的突破 然后回调看左边
30:14 看看市场是否在测试什么东西
30:17 市场在测试这个区间的上沿
30:20 多头会在反转上涨时买入
30:22 要么在那个阴线的上方
30:24 通常最好在阳线上方买入
30:26 所以可以在这根K线的高点上方挂突破买单
30:30 订单会在这里成交
30:32 或者你可以说这是一个高二牛期
30:35 尝试在这里上涨
30:36 尝试在这里上涨 在这个特定的背景下
30:40 在这个阴线的上方买入也是合理的
30:43 小双底下跌上涨 然后这根K线下跌上涨
30:47 上涨趋势中两次下跌的尝试都失败
30:50 多头会在前一根K线的高点上方
30:54 挂突破买单订单会在这里成交
30:58 同样长是反转下跌
31:01 看左边市场在测试什么东西吗？
31:04 是他在测试这个高点 再次尝试反转下跌
31:08 看看左边他在测试前期的高点吗？
31:11 是的 他在测试这个前期高点
31:14 所以这只是一个突破测试
31:16 他也是对这个突破点的回测
31:20 多头会在反转上涨时买入
31:22 尤其是在阳线的上方突破
31:25 买单会在这里和这里成交`},{prompt:"回测前高后本应反转上涨，却进一步向下跌破，本课描述多头怎样处理？",options:["原本属于突破回测，先等待回原买价再退出","回测失败说明目标应缩短，原止损无需执行","实际继续下破，承认买入失败并止损退出"],answer:2,explanation:"本段正是回测也会失败的反例。入场名称和缩短目标都不能替代失败后的止损处理，原文没有要求继续等回本。",id:"19B-K41-1",knowledgeId:"K41",knowledgeTitle:"回测买入也会失败",time:"31:31–31:50",pdfPages:[1686],type:"理解判断",quote:`31:31 再次突破
31:32 然后回调看左边市场在测试什么吗？
31:36 看起来它在测试这个高点
31:39 多头会在反转上涨时买入
31:42 这里多头失败了 价格向下
31:46 跌破 多头
31:47 放弃止损离场`},{prompt:"末端楔形顶加速失败后又第二次筑顶，课程为什么让已有多头迅速考虑退出？",options:["第二次筑顶等信息改变背景，关注第二段下跌","只有加速失败尚不足，需等跌破全部上涨起点再退出","原强突破仍主导，等上方目标实现后再评估顶部"],answer:0,explanation:"课程组合楔形顶、第二次反转及小三角，提前考虑重要顶部和至少第二段下跌。错项分别忽略新信息、过度推迟退出确认。",id:"19B-K42-1",knowledgeId:"K42",knowledgeTitle:"楔形顶第二次反转与离场",time:"31:54–32:38",pdfPages:[1686],type:"理解判断",quote:`31:54 有一个楔形顶 尝试加速突破楔形顶
31:58 然后第二次反转市场之前
32:01 尝试在这里筑顶注鼎失败
32:04 现在第二次尝试注顶
32:07 所以你必须考虑这可能是一个重要的顶部
32:11 也许会测试抢购高潮的起涨点
32:14 在这里买入的多头很快会止损离场
32:17 比如在这里的小双顶下方或这个双顶的下方
32:21 因为他们知道至少会有第二段下跌
32:25 所以多头会迅速离场
32:27 你可以说它是三角形三次向上推动第一次
32:31 然后阴线阳线这是第二次向上推动
32:35 阴线阳线这是第三次向上推动`,referenceImage:{src:"/charts/19b-retest-overview-solution.webp",page:1686,alt:"第1686页课件整页讲解",kind:"课件整页"}}],sourceFile:"BTC PAF 19B Support and Resistance_中文 (源语言).srt"},{id:"19C",title:"月末价位、整数关口与均线",range:"00:00–25:07",revision:"support-19c-v1",notes:["周末、月末尾盘关注临近的高周期开高低收，在当前五分钟图观察反应；位置参考不等于换成月线信号或月线止损。","区间边界、均线和整数的作用随突破与市场背景改变；多次守住仍可能失败，首次越均线也不等于强趋势已反转。","整数磁吸包含订单集中与课中期权到期解释；苹果100、原油40/50、外汇整数都是历史案例，不能当成未来必达保证。","日线SMA50/100/150/200与盘中EMA20都属候选，先看实际转向；区分信号K端点、入场K端点、原入场价和收盘极值。","候选列表较广，讲师尤其重视50%回调与100%MM；列在清单中不等于个人同等使用或赋予相同权重。"],group:"支撑与阻力",knowledgePoints:[{id:"K01",title:"尾盘与高周期价位",summary:"周五、月末尤其最后一小时，周/月K线即将定形，附近的高低点及开收盘可能影响五分钟图；这是位置参考，不是改用月线入场信号。",time:"00:37–01:33",pdfPages:[1691],questionIds:["19C-K01-1"]},{id:"K02",title:"优先识别临近月线价位",summary:"案例临近本月开盘、上月收盘及上月高点；观察五分钟价格到达后的实际反应，不按价位名称固定排序。",time:"01:33–02:35",pdfPages:[1691],questionIds:["19C-K02-1"]},{id:"K03",title:"上月高点的角色改变",summary:"上月高点被跌破，反弹测试后转跌时可成为阻力；不能继续仅凭它原来是支撑解释回测。",time:"02:38–03:02",pdfPages:[1691],questionIds:["19C-K03-1"]},{id:"K04",title:"本月开盘与实体方向",summary:"月末本月开盘附近，多头买入希望收阳、空头卖出希望收阴；案例收盘略高于开盘，外观看似十字星但为小阳线。",time:"03:05–03:36",pdfPages:[1691],questionIds:["19C-K04-1"]},{id:"K05",title:"月线支撑不改变窄通道限制",summary:"五分钟窄下降通道测试上月收盘后尝试双底，仍通常先是小反转，可能变成熊旗或区间；临近月线价位并不直接提高反转级别。",time:"03:39–04:17",pdfPages:[1691],questionIds:["19C-K05-1"]},{id:"K06",title:"多次守住的月线支撑也会失败",summary:"EURUSD上月低点在月末支撑数小时，多次尝试转涨后仍被连续收低阴线跌破，需更新判断。",time:"04:22–05:28",pdfPages:[1692],questionIds:["19C-K06-1"]},{id:"K07",title:"局部低点与多种触发",summary:"月线支撑附近头肩底/双底失败后，多个局部低点依次失守，不同程序可能据不同低点平多或开空；多个触发可共同推动抛售。",time:"05:37–06:25",pdfPages:[1692],questionIds:["19C-K07-1"]},{id:"K08",title:"区间边界突破后的角色互换",summary:"NZDUSD周线案例，跌破区间下沿后的反弹遇阻；强突破区间上沿后的回调获支撑。方向和回测行为共同决定角色。",time:"06:33–07:24",pdfPages:[1693],questionIds:["19C-K08-1","19C-K08-2"]},{id:"K09",title:"下降趋势的均价阻力",summary:"下降趋势中，EMA20代表平均价格；反弹接近均线后出现收低阴线，可在阴线低点下方观察突破卖出触发。",time:"07:34–08:16",pdfPages:[1694],questionIds:["19C-K09-1"]},{id:"K10",title:"均线附近的多种熊旗解释",summary:"同一EMA20反弹可有两段、双顶或楔形解释；双顶向上突破失败增加第三次向上推动，可作为楔形熊旗变体，仍需观察反转下跌。",time:"08:18–09:31",pdfPages:[1694],questionIds:["19C-K10-1"]},{id:"K11",title:"首次均线缺口K线的限制",summary:"强下降趋势里，首次出现整根K线在均线上方是向上反转尝试，但不能仅凭这一点认定强下降已结束。",time:"09:34–09:50",pdfPages:[1694],questionIds:["19C-K11-1"]},{id:"K12",title:"久未触均线后的首次测试",summary:"约二十根K线未触EMA20后首次回到均线，课程仍从下降趋势中寻找卖盘；不能仅由久未触线推断已完成趋势反转。",time:"09:53–09:59",pdfPages:[1694],questionIds:["19C-K12-1"]},{id:"K13",title:"整数与订单集中",summary:"Emini下降案例的十点整数是小支撑阻力；交易者在整数附近设置止损、止盈，集中订单使这些区域值得观察。",time:"10:02–10:36",pdfPages:[1696],questionIds:["19C-K13-1"]},{id:"K14",title:"ES与SPY的课堂对应",summary:"历史案例用Emini约为SPY十倍，说明ES2110与SPY211附近行权价的联系；这不是对所有时刻和品种的精确换算公式。",time:"10:43–11:02",pdfPages:[1696],questionIds:["19C-K14-1"]},{id:"K15",title:"期权到期与行权价磁吸",summary:"课程用期权卖方希望期权到期失去价值，解释相关品种在行权价附近的交易与磁吸；保留到期情境，不当作每次收盘保证。",time:"11:08–11:46",pdfPages:[1696],questionIds:["19C-K15-1"]},{id:"K16",title:"大整数和小整数",summary:"2100是百点量级的大整数，2090是十点量级的较小整数；大小有别，不代表较小整数不提供支撑阻力。",time:"11:53–12:07",pdfPages:[1696],questionIds:["19C-K16-1"]},{id:"K17",title:"相关品种与快速定价",summary:"到期时相关期货、股票、ETF的交易可围绕行权价；交易者快速选择整数作订单参考，本课未要求整数取代背景判断。",time:"12:16–13:18",pdfPages:[1696],questionIds:["19C-K17-1"]},{id:"K18",title:"股票接近100的磁吸",summary:"苹果历史案例中，接近90后多头预期100、空头推迟到100附近卖出，双方行为可使价格较快向目标移动；是案例倾向。",time:"13:25–14:06",pdfPages:[1697],questionIds:["19C-K18-1"]},{id:"K19",title:"达到100后的卖盘来源",summary:"略超100后回调，既有押注到100的多头止盈，也有把100当阻力的空头新卖出；磁吸到达和到达后反应分开判断。",time:"14:06–14:24",pdfPages:[1697],questionIds:["19C-K19-1"]},{id:"K20",title:"整数强突破后的角色与再测试",summary:"100被强势突破后可转为支撑，旧92高点也可能参与；回落稍低于100时，空头止盈和多头买入都能推动反弹。",time:"14:27–15:16",pdfPages:[1697],questionIds:["19C-K20-1"]},{id:"K21",title:"原油30 handle与真空测试",summary:"30 handle指30.00～39.99；原油接近40后的急跌可测试“三字头”是否吸引买盘，不等于目标必须到30。",time:"15:20–16:06",pdfPages:[1698],questionIds:["19C-K21-1"]},{id:"K22",title:"原油40下方买盘与50处卖盘",summary:"跌到三字头后有买盘；上涨略过50又回调，40附近多头止盈和50附近空头卖出共同形成阻力，重复测试可成双顶熊旗。",time:"16:12–16:53",pdfPages:[1698],questionIds:["19C-K22-1","19C-K22-2"]},{id:"K23",title:"四小时均线回调与入场",summary:"USDCHF四小时上涨中，接近均线后可在前根K高点上方买，偏好阳线；EMA20是课程使用的例子，不是所有图表唯一选择。",time:"16:58–17:43",pdfPages:[1699],questionIds:["19C-K23-1","19C-K23-2"]},{id:"K24",title:"四小时整数与角色互换",summary:"USDCHF案例的0.9000、0.9100等100 pip整数吸引价格；到达可出现多头止盈与空头剥头皮，突破回测可使旧阻力转支撑。",time:"17:43–18:16",pdfPages:[1699],questionIds:["19C-K24-1"]},{id:"K25",title:"日线简单均线与未知底部",summary:"上涨日线常看SMA50/100/150/200；不能提前确定在哪条均线见底，需看接近后是否反转上涨。",time:"18:24–19:30",pdfPages:[1700],questionIds:["19C-K25-1"]},{id:"K26",title:"下跌日线简单均线",summary:"EURGBP日线下降中，反弹靠近简单均线后转跌可提供卖出判断；均线角色取决于下降背景和反应。",time:"19:33–19:55",pdfPages:[1701],questionIds:["19C-K26-1"]},{id:"K27",title:"外汇整数的量级与反弹",summary:"EURGBP在0.8000横盘后跌破，随后到0.7000反弹；课程把100或1000 pip整数都列为潜在支撑阻力，反弹可来自空头止盈与多头买入。",time:"20:00–20:42",pdfPages:[1702],questionIds:["19C-K27-1"]},{id:"K28",title:"外汇整数与期权解释的范围",summary:"外汇整数附近亦有止损止盈；课程提及货币期货期权及交易不广泛的外汇期权，不能把全部整数作用都缩成期权到期。",time:"20:48–21:40",pdfPages:[1702],questionIds:["19C-K28-1"]},{id:"K29",title:"支撑阻力候选的基础列表",summary:"趋势线、前高前低、测量目标、各种周期均线都在候选列表；应依当前背景与强度判断，不靠某一类名称垄断。",time:"21:52–22:15",pdfPages:[1704],questionIds:["19C-K29-1"]},{id:"K30",title:"入场K线端点",summary:"上涨中多头入场K线低点可成支撑；下降中空头入场K线高点可成阻力。它们与信号触发端点不同。",time:"22:25–22:29",pdfPages:[1704],questionIds:["19C-K30-1"]},{id:"K31",title:"信号端点与原入场价",summary:"多头信号K高点、空头信号K低点和实际入场价均可重要；加仓交易者可能在原入场价退出，形成相应买卖力量。",time:"22:34–22:43",pdfPages:[1704],questionIds:["19C-K31-1"]},{id:"K32",title:"波段收盘极值",summary:"波段最高、最低收盘也是支撑阻力候选，不只是影线极值；后续课程将解释持仓退出机制。",time:"22:45–22:49",pdfPages:[1704],questionIds:["19C-K32-1"]},{id:"K33",title:"剥头皮目标形成反向订单",summary:"上涨中剥头皮多头在目标卖出止盈，若足够集中可造成回调和阻力；目标不仅是观察入场的位置。",time:"22:49–23:08",pdfPages:[1704],questionIds:["19C-K33-1"]},{id:"K34",title:"今昨及高周期的开高低收",summary:"今天、昨天及日周月的开高低收可参与判断；周/月最后交易日尤其尾盘，高周期水平可影响五分钟图。",time:"23:11–23:34",pdfPages:[1704],questionIds:["19C-K34-1"]},{id:"K35",title:"完整列表与个人偏好",summary:"列表包含日内枢轴、其他回调和带状指标；讲师本人不用日枢轴，认为多数斐波那契比例帮助不大，但特别重视50%回调与100%MM。",time:"23:40–24:07",pdfPages:[1704],questionIds:["19C-K35-1","19C-K35-2"]}],questions:[{prompt:"月末最后一小时仍在交易五分钟图，课程为何此时额外查看月线？",options:["月线临近收盘，附近开高低收可能影响日内反应","月线临近收盘，应把五分钟入场改为按月线止损","月线临近收盘，应先等月线触发才使用五分钟信号"],answer:0,explanation:"这里增加的是临近月线价位的位置参考。等待月线信号混淆入场频率，改用月线止损则改变了原本的五分钟交易。",id:"19C-K01-1",knowledgeId:"K01",knowledgeTitle:"尾盘与高周期价位",time:"00:37–01:33",pdfPages:[1691],type:"理解判断",quote:`00:37 左边是两根月K线
00:40 右边是这个月最后一天的五分钟图
00:45 碰巧也是今年的最后一个交易日
00:49 在月末市场通常会关注月K线的支撑和阻力
00:55 在周五周K线即将收盘
00:58 所以市场会关注周K线的支撑和阻力
01:03 尤其是最后1个小时
01:09 月K线上个月的收盘价最高点都很重要
01:13 这是这个月交易者会关注
01:16 月初的开盘价就在这里
01:19 他们会关注上个月的收盘价、上个月的
01:22 高点、这个月的高点、这个月的低点
01:25 上个月的低点、上个月的开盘价
01:27 在月末的最后几分钟
01:29 交易者会关注月K线上的所有支撑和阻力
01:33 在这个月底离得最近的一个`,referenceImage:{src:"/charts/19c-monthly-solution.webp",page:1691,alt:"第1691页课件整页讲解",kind:"课件整页"}},{prompt:"案例中上月高点、上月收盘和本月开盘都接近尾盘价格。下一步应如何判断？",options:["先以本月开盘为唯一月末依据，另两条留到下月再判断","在五分钟图观察各水平被测试后的守住、突破与角色变化","先把上月高点列为最强水平，另两条主要用于确认它"],answer:1,explanation:"本页实际使用多个临近月线价位，没有由名称固定排第一，也没有把其他价位的作用推迟到下月。",id:"19C-K02-1",knowledgeId:"K02",knowledgeTitle:"优先识别临近月线价位",time:"01:33–02:35",pdfPages:[1691],type:"理解判断",quote:`01:29 交易者会关注月K线上的所有支撑和阻力
01:33 在这个月底离得最近的一个
01:37 支撑或阻力就是这个月的开盘价、
01:43 上个月的收盘价、上个月的高点
01:49 粉色线这是上个月的高点 价格突破了它
01:53 然后回调从上方跌回到粉色线的下方
01:56 所以这一天的五分钟图收盘时
02:00 交易者会查看月K线来
02:02 寻找潜在的支撑和阻力
02:06 他们会观察当市场接近月
02:08 K线上的支撑和阻力时
02:10 五分钟图会有什么样的价格行为
02:13 蓝色线是上个月的收盘价
02:19 橙色线是这个月的开盘价
02:22 这一天的行情对应月K线的这一小段
02:26 在月末我往往会查看月K线
02:31 看看在月K线上是否有任何支撑或阻力
02:35 可能影响今天五分钟图的交易`},{prompt:"尾盘跌破上月高点，反弹回该处后出现阴线。在这个下降背景中，本课如何解释？",options:["旧高点已在当天被穿越，反弹应主要按上月收盘评估","旧高点回测后恢复支撑，反弹可按新上涨起点评估","旧支撑回测后转成阻力，反弹可按熊旗方向评估"],answer:2,explanation:"错误在于忽略跌破后向下反转的新证据，或因价位被穿越便取消其作用。本课在下降背景中把旧高点当作回测阻力。",id:"19C-K03-1",knowledgeId:"K03",knowledgeTitle:"上月高点的角色改变",time:"02:38–03:02",pdfPages:[1691],type:"理解判断",quote:`02:35 可能影响今天五分钟图的交易
02:38 我知道上个月的高点可以
02:41 看到市场尝试保持在其上方
02:44 但是最终跌破
02:45 跌破后测试上个月收盘价并反弹
02:49 然后这是上个月高点被突破后的回测
02:52 我会在这里寻找反转做多的机会
02:56 没有走得太远 因为处于下降趋势中阴线
02:59 所以我会在这里卖出做空压住
03:02 上个月的高点现在变成了阻力`},{prompt:"月末收盘只比本月开盘高一点，月线看起来像十字星。哪项解释符合本课？",options:["尾盘五分钟下跌，应把该月记录为小阴线","月线近似十字星，应把最后收盘视为与开盘相同","该月收盘略高于开盘，留下很小的阳线实体"],answer:2,explanation:"月线实体由开收关系决定。日内下跌不决定整月阴阳，近似十字星也不能把实际价差抹为零。",id:"19C-K04-1",knowledgeId:"K04",knowledgeTitle:"本月开盘与实体方向",time:"03:05–03:36",pdfPages:[1691],type:"理解判断",quote:`03:02 上个月的高点现在变成了阻力
03:05 可以看到当价格跌到这个月开盘价时
03:09 有买盘出现
03:10 多头希望这个月最后能收阳线
03:12 就算是一个很小的阳线也好 所以他们买入
03:16 空头希望这个月最后收阴线
03:19 所以他们在卖出 看起来最终多头险胜
03:23 这是当天的收盘价
03:26 同时也是这个月的收盘价
03:29 它比这个月的开盘价高一点点
03:32 因此尽管在月K线上看起来像一个完美的十字星
03:36 实际上它是一个很小的阳线`},{prompt:"窄下降通道在上月收盘附近反弹，并尝试双底。什么限制仍需保留？",options:["首次反弹仍偏小反转，可先演变为熊旗或区间","当日接近收盘时，应主要按月线实体方向判断反转级别","月线支撑参与后，应优先把双底当作日内大反转"],answer:0,explanation:"高周期位置不能取消眼前窄下降通道的限制；月线实体方向也不替代五分钟结构。题目区分支撑位置与反转级别。",id:"19C-K05-1",knowledgeId:"K05",knowledgeTitle:"月线支撑不改变窄通道限制",time:"03:39–04:17",pdfPages:[1691],type:"理解判断",quote:`03:36 实际上它是一个很小的阳线
03:39 在月末交易者在做五分钟图的时候
03:43 也会关注月K线上的支撑和阻力
03:46 上个月的高点可能是支撑
03:48 但是又跌破了以你必须假设它现在变成了阻力
03:53 如果反弹到它的附近 然后开始反转下跌
03:56 交易者会卖出做空
03:58 测试了上个月的收盘价 尝试形成双底
04:02 很窄的下降通道大概率只是小反转
04:06 这意味着反转会变成熊旗或一个震荡区间
04:10 交易者会在市场反转下跌时卖出做空
04:13 在即将收盘的时候可以看到在这个
04:17 月的开盘价附近有空头在买入止盈`},{prompt:"上月低点已支撑数小时，尾盘却连续出现收在低位的阴线。本课怎样更新判断？",options:["支撑时间较长，当前阴线应先视为区间下沿的买入机会","重复反弹未能延续，当前卖压提示月线支撑正在失败","该处属于月线支撑，应等下一月收盘再判断本次跌破"],answer:1,explanation:"历史守住不能盖过新的连续卖压；课程在当日尾盘就判断支撑失败，并未要求等到下月。",id:"19C-K06-1",knowledgeId:"K06",knowledgeTitle:"多次守住的月线支撑也会失败",time:"04:22–05:28",pdfPages:[1692],type:"理解判断",quote:`04:22 这是欧元兑美元
04:24 左边是月K线 右边是五分钟K线
04:29 这是月末的最后一天
04:33 当我交易月末的最后一天时
04:36 我通常会查看月K线
04:38 观察附近是否有任何月K线上的支撑或阻力
04:42 因为它会影响五分钟图的交易者
04:46 这是这个月的月K线
04:48 这是这个月的最后一天
04:51 看起来市场一直在某个价格附近徘徊
04:57 如果看左边的月K线
04:59 你会发现价格在上个月的低点附近徘徊
05:02 市场尝试在上个月的低点获得支撑
05:06 当你看到这个 你就必须得出结论
05:09 上个月的低点支撑不住了 要被跌破了
05:15 空头在尾盘不断的抛售住
05:18 尝试让这一天和这一个月的K线都收在最低
05:22 在月末的最后一天中
05:23 上个月的低点支撑了很多个小时
05:28 市场不断尝试反转上涨 但最终失败了`,referenceImage:{src:"/charts/19c-month-low-solution.webp",page:1692,alt:"第1692页课件整页讲解",kind:"课件整页"}},{prompt:"月线支撑附近，头肩底结构的几个低点依次被跌破。课程为何同时提到这些低点？",options:["不同程序可能用不同低点作平多或开空触发","局部低点主要供空头止盈，月线低点才用于新开空仓","只有头肩底最低点是有效触发，前面低点用于画形态"],answer:0,explanation:"本课明确允许不同低点触发退出多头或建立空头。只保留最低点，或把局部低点统一当止盈点，都会漏掉卖盘来源。",id:"19C-K07-1",knowledgeId:"K07",knowledgeTitle:"局部低点与多种触发",time:"05:37–06:25",pdfPages:[1692],type:"理解判断",quote:`05:37 一系列阴线 尤其是这两个阴线收在最低
05:42 多头最终放弃头肩底左肩头右肩或者左肩
05:48 然后头双底
05:50 然后右肩价格跌破了这个低点
05:54 它是一个重要的低点
05:56 跌破了这个重要的低点继续下跌
05:59 又跌破了头肩底的最低点
06:02 继续下跌
06:03 不同的计算机程序会使用不同的低点
06:07 作为卖出多头仓位或开仓做空的信号
06:10 这三个低点都很重要 可以看到市场崩盘了
06:14 放弃了保持在上个月最低点上方的尝试
06:22 这个月收盘在上个月的低点下方
06:25 这是这个月的收盘价 低于上个月的最低点`},{prompt:"原区间下沿已被跌破，反弹几次仍未能站回；本课把这里视为什么？",options:["反弹回测中的支撑，因其仍是原区间最低买入区域","反弹回测中的阻力，原区间内的买盘逻辑需更新","区间的中部参考，因跌破后上下边界应重新平均"],answer:1,explanation:"跌破并反复站回失败使旧支撑转为阻力。不能只保留原区间低买的判断，也没有把原边界重算为中点。",id:"19C-K08-1",knowledgeId:"K08",knowledgeTitle:"区间边界突破后的角色互换",time:"06:33–07:24",pdfPages:[1693],type:"理解判断",quote:`06:33 这是新西兰元对美元的周线图
06:38 震荡区间是支撑和阻力
06:41 市场跌破了一个震荡区间
06:45 尝试回到上方 尝试回到上方
06:48 尝试回到上方
06:49 它曾经是支撑多头在这个价位买入
06:53 跌破之后现在变成了阻力
06:58 这里本来是支撑
07:02 但是被跌破之后它变成了阻力
07:08 交易者会在反弹到震荡区间下沿时卖出
07:13 压住它 现在是阻力
07:17 相当强势的突破了这个震荡区间的上沿
07:21 你必须假设震荡区间的上沿现在是支撑
07:24 交易者会在支撑 也就是回调到上沿时买入`,referenceImage:{src:"/charts/19c-range-flip-solution.webp",page:1693,alt:"第1693页课件整页讲解",kind:"课件整页"}},{prompt:"同页另一处强势突破区间上沿，随后回调到上沿，课程关注哪种角色变化？",options:["旧阻力转为支撑，关注回调后的再次买盘","旧阻力保持卖出作用，关注回调后的新一轮抛售","旧上沿成为止盈目标，关注价格从下方重新接近"],answer:0,explanation:"这里已在强突破之后，回调从上方测试旧上沿。两种错误说法分别沿用突破前角色、误认价格接近方向。",id:"19C-K08-2",knowledgeId:"K08",knowledgeTitle:"区间边界突破后的角色互换",time:"06:33–07:24",pdfPages:[1693],type:"变式辨析",quote:`06:33 这是新西兰元对美元的周线图
06:38 震荡区间是支撑和阻力
06:41 市场跌破了一个震荡区间
06:45 尝试回到上方 尝试回到上方
06:48 尝试回到上方
06:49 它曾经是支撑多头在这个价位买入
06:53 跌破之后现在变成了阻力
06:58 这里本来是支撑
07:02 但是被跌破之后它变成了阻力
07:08 交易者会在反弹到震荡区间下沿时卖出
07:13 压住它 现在是阻力
07:17 相当强势的突破了这个震荡区间的上沿
07:21 你必须假设震荡区间的上沿现在是支撑
07:24 交易者会在支撑 也就是回调到上沿时买入`},{prompt:"下降趋势反弹到EMA20后出现收低阴线。若按本课的突破入场方式，关注哪个触发？",options:["阴线低点下方，结合均价附近反转下跌","均线价位上方，结合重新站上均价后的反弹","阴线高点附近，结合反弹仍在发展时限价卖出"],answer:0,explanation:"一种错误说法换成了向上突破；另一种错误说法是不同的限价做法，不是本题所限定的反转后突破卖出触发。",id:"19C-K09-1",knowledgeId:"K09",knowledgeTitle:"下降趋势的均价阻力",time:"07:34–08:16",pdfPages:[1694],type:"理解判断",quote:`07:34 这是一个下降趋势
07:36 交易者正在寻找在阻力位的做空机会
07:40 这里有很多寻找阻力的方法
07:43 一个明显的方式是移动平均线
07:46 它代表平均价格
07:48 这是周期为20的指数移动平均线
07:52 即ema 20
07:53 一旦你开始看到下降趋势
07:56 交易者会在市场回到平均价格时卖出
08:00 押注平均价格太贵了 价格将会创新低
08:08 尝试突破平均价格两根阴线
08:12 在那个阴线或这个阴线下方挂突破卖单
08:16 订单会在这里成交`},{prompt:"看图中约11:00～11:30，蓝线是EMA20。 下降趋势中，均线附近双顶一度向上突破，随后失败并下转。课程怎样联系双顶与楔形？",options:["突破失败只改变最高点位置，不能再按三推结构解释","双顶已向上突破，应先视为上涨趋势中的首次回调","突破尝试增加第三次上推，可视为楔形熊旗变体"],answer:2,explanation:"这里考的是“失败”后的更新：两次高点加上突破尝试构成三推变体。不能停留在向上突破瞬间，也不要求三推来自三个完全分离的新结构。",id:"19C-K10-1",knowledgeId:"K10",knowledgeTitle:"均线附近的多种熊旗解释",time:"08:18–09:31",pdfPages:[1694],type:"图表应用",quote:`08:16 订单会在这里成交
08:18 三推上涨123 反弹到ema 20
08:22 交易者会在这个或这个阴线的下方卖出做空
08:26 在EMA20有一个双顶
08:29 这个高点那个高点反转下跌
08:33 两段式上涨一回调二也有程序会
08:37 把它看作是一个楔形
08:39 1233推楔形雄起 收在最低的阴线
08:44 在它下方挂突破卖单 订单会在这里成交
08:48 双顶阴线在阴线下方卖出
08:51 突破反弹 在阴线下方卖出
08:55 双顶向下突破尝试反弹 在阴线下方做空
09:00 再次测试EMA20D2D1D2
09:04 你可以说它是一个双顶
09:06 向上突破双顶失败
09:09 这是三推楔形顶的一种变体
09:12 三次向上推动123
09:15 任何时候当双顶被向上突破
09:19 就是三次向上推动123
09:22 这是三推楔形顶的一种辨听词
09:25 向上突破双顶失败是一个楔形雄起
09:28 同时价格来到了在EMA20附近
09:31 所以在反转下跌的时候卖出做空`,image:{src:"/charts/19c-ema-context.webp",solutionSrc:"/charts/19c-ema-context-solution.webp",page:1694,alt:"课程PDF第1694页行情图"}},{prompt:"看图中约12:30的反弹，蓝线是EMA20。 强下降趋势后第一次有整根K线完全在均线上方。本课对这次反转的初始预期是什么？",options:["先按无方向区间评估，因为整根越线已消除趋势惯性","仍先按可能失败的首次反转尝试评估","先按空头结束评估，再等回测均线确认上涨"],answer:1,explanation:"均线缺口K线是新的信息，仍受强下降趋势首次反转常失败的背景限制；它本身不足以确认趋势结束或惯性消失。",id:"19C-K11-1",knowledgeId:"K11",knowledgeTitle:"首次均线缺口K线的限制",time:"09:34–09:50",pdfPages:[1694],type:"图表应用",quote:`09:31 所以在反转下跌的时候卖出做空
09:34 这也是一个均线缺口
09:36 K线第一次有K线完全在均线的上方
09:39 当市场处于强下降趋势中时
09:41 第一次任何形式的反转尝试
09:44 你必须假设它会失败
09:46 多头最终制造了一个完全在均线上方的K线
09:50 那你必须假设反转会失败 市场会下跌`,image:{src:"/charts/19c-ema-context.webp",solutionSrc:"/charts/19c-ema-context-solution.webp",page:1694,alt:"课程PDF第1694页行情图"}},{prompt:"蓝线是EMA20；结合此前价格长时间处于均线下方的下降背景。 下降趋势约二十根K线后首次回到EMA20。课程此处关注什么？",options:["第一次触线后的支撑及均线上方新通道的建立","久未触均线后的补涨及向上回归均价的完成","首次回到均价的卖盘及原下跌方向的延续"],answer:2,explanation:"本段在仍有效的下降背景中观察空头卖出。两种错误说法把“回到均线”提前升级为多头恢复或新上涨通道，缺少反转成功依据。",id:"19C-K12-1",knowledgeId:"K12",knowledgeTitle:"久未触均线后的首次测试",time:"09:53–09:59",pdfPages:[1694],type:"图表应用",quote:`09:50 那你必须假设反转会失败 市场会下跌
09:53 这里大约20根K线以来
09:56 第一次碰到EMA20 空头会卖出做空`,image:{src:"/charts/19c-ema-context.webp",solutionSrc:"/charts/19c-ema-context-solution.webp",page:1694,alt:"课程PDF第1694页行情图"}},{prompt:"课程解释Emini的十点整数为何会形成小支撑阻力，主要强调哪项行为？",options:["整数在下降中只用于新开空仓，不包含原仓退出","止损、止盈等订单在整数附近集中","每次跌破整数就先按等长目标投射到下一个整数"],answer:1,explanation:"本课从订单集中解释小支撑阻力。相邻整数距离相等不代表每次都等长必达，整数附近也不只存在新开空单。",id:"19C-K13-1",knowledgeId:"K13",knowledgeTitle:"整数与订单集中",time:"10:02–10:36",pdfPages:[1696],type:"理解判断",quote:`10:02 整数也很重要 他们可以是支撑和阻力
10:10 Es下降趋势 我圈出了一些整数
10:14 都是十的倍数
10:19 交易者会把它看作下降
10:21 趋势中小的支撑或阻力
10:24 这里曾是支撑 现在变成了阻力
10:30 交易者通常会把止损或
10:33 止盈放在重要的整数外面
10:36 因此产生的这些交易制造了支撑和阻力`,referenceImage:{src:"/charts/19c-round-es-solution.webp",page:1696,alt:"第1696页课件整页讲解",kind:"课件整页"}},{prompt:"本课把ES2110与SPY211并列，是为了说明什么？",options:["ES整数与相关SPY行权价，可成为相近的关注区域","ES2110与SPY211应在所有时刻保持精确十倍关系","ES整数只对期货有用，SPY行权价不影响相关观察"],answer:0,explanation:"这是课程历史价格尺度的近似联系，不是实时精确换算保证。也不能把相关品种的行权价关注完全割开。",id:"19C-K14-1",knowledgeId:"K14",knowledgeTitle:"ES与SPY的课堂对应",time:"10:43–11:02",pdfPages:[1696],type:"理解判断",quote:`10:43 另外这与期权的行权价也有关注
10:47 确切的说是期权伽马的堆积
10:49 ES的价格大约是五的十倍
10:52 注斯曼是标普500指数
10:54 的ETFES的2110
10:56 接近spdr的211
10:58 而211是一个期权的行权价
11:02 212、213、210都是期权的行权价`},{prompt:"课中举例：机构卖出行权价为211的看涨和看跌期权，收取权利金（卖出期权收到的费用）；标的是这些期权对应的交易品种。临近到期时，课中认为机构希望标的价格靠近211，主要是为什么？",options:["主要压低看跌期权的到期价值，以此判断卖方整体收益","让这两类期权的到期价值尽可能低，以便保留更多已收取的权利金","主要压低看涨期权的到期价值，以此判断卖方整体收益"],answer:1,explanation:"课程中的例子是同时卖出相同行权价的看涨和看跌期权：标的接近211时，两类期权的合计到期价值可以较低，卖方希望少付出、保留更多权利金。只关注看涨或只关注看跌的一边，会漏掉另一边到期价值可能上升的影响。这是课程对磁吸现象的解释，不保证到期价格一定在211，也不代表所有期权卖方都持有相同仓位。",id:"19C-K15-1",knowledgeId:"K15",knowledgeTitle:"期权到期与行权价磁吸",time:"11:08–11:46",pdfPages:[1696],type:"理解判断",quote:`11:02 212、213、210都是期权的行权价
11:08 机构喜欢做期权的卖方著卖出期权赚权利金
11:13 他们希望期权到期时价格归零柱
11:16 这样他们就可以赚到所有的权利金
11:20 所以他们非常关注期权行权价
11:23 比如卖出211看跌和看涨期权的机构
11:29 他们希望它到期时一文不值
11:32 所以如果在到期前buy接近211
11:36 机构会让收盘价尽可能地接近211
11:42 以便尽可能多的期权到期作废
11:46 而211大约等于1S2110`},{prompt:"按照本课对整数关口的划分，2100与2090有什么区别？",options:["2100是百点量级的大整数，2090是十点量级的小整数，只有2100可能重要","2100和2090都是百点量级的大整数，两者都可能重要","2100是百点量级的大整数，2090是十点量级的小整数，两者都可能重要"],answer:2,explanation:"2100是100的倍数，2090是10的倍数但不是100的倍数。课程说2090虽是较小整数，仍然重要；不能因量级较小就排除它。",id:"19C-K16-1",knowledgeId:"K16",knowledgeTitle:"大整数和小整数",time:"11:53–12:07",pdfPages:[1696],type:"理解判断",quote:`11:53 因此2110是一个重要的价格
11:56 这是一个大的整数2100
12:00 而2090是一个小整数
12:03 它是100的倍数 而它只是十的倍数
12:07 这是一个较小的整数 但仍然重要`},{prompt:"本课说不确定止损止盈位置时，整数是快速参考。哪种解释保留了这句话的范围？",options:["整数能快速定价，因此可优先替代图中最近重要高低点","共同使用的整数便于快速定价，仍需结合所处背景","整数与行权价相关，因此订单应主要等期权到期才设置"],answer:1,explanation:"方便参考不等于替代结构，也不把所有订单限制在期权到期日。课程同时举均线和2090附近的选择。",id:"19C-K17-1",knowledgeId:"K17",knowledgeTitle:"相关品种与快速定价",time:"12:16–13:18",pdfPages:[1696],type:"理解判断",quote:`12:16 期权的行权价是磁铁
12:18 如果机构能在到期时让SPA精确地收盘在某些行权价上
12:24 他们就能够让那些看跌期权
12:27 和看涨期权到期时变成废纸
12:29 所以机构会交易所有相关的品种
12:33 期货、股票、etf任何
12:36 相关的品种来让期权到期作废
12:43 市场在上涨
12:44 多头在想我应该把初始止损放在哪里？
12:48 也许就放在2090下方一点点
12:51 市场在这里反弹 空头应该在哪里卖出？
12:55 也许在ema 20
12:56 也许在2090挂一个限价卖单
13:00 当你在交易时
13:02 很多时候你必须快速的做出决定
13:05 当你不确定在哪里放止损止盈的时候
13:10 一个快速简单的方法就是选择一个整数
13:14 因为很多交易者这么做 整数很重要
13:18 因此它们是磁铁 也就是支撑和阻力`},{prompt:"苹果历史案例接近90后，课程用什么双方行为解释向100移动？",options:["多头在90止盈，空头回补后等待价格回到90","多头等100突破后再买，空头先在90增加卖盘","多头买入押注100，空头倾向等100附近再卖出"],answer:2,explanation:"两种错误说法都用常见交易行为拼成答案，但不符合本例“多头提前买、空头推迟卖”形成向上磁吸的叙述。",id:"19C-K18-1",knowledgeId:"K18",knowledgeTitle:"股票接近100的磁吸",time:"13:25–14:06",pdfPages:[1697],type:"理解判断",quote:`13:25 苹果的月K线在股市中
13:29 如果一只股票接近100
13:32 它就变成一个非常重要的整数
13:39 一旦一只股票上涨到90左右
13:42 它通常会涨到100
13:44 交易者知道这一点 所以多头买入
13:47 而空头不想在90做空
13:49 因为他们知道会涨到100
13:52 所以他们会等到100再卖空
13:54 通常价格会很快涨到100
13:58 这里是92回调
14:01 多头买入 相信它会涨到100
14:06 价格略微超过了100`},{prompt:"图中第一次略超100后回落，课程怎样解释卖盘？",options:["主要是空头确认下降后卖出，多头需等强势跌破才退出","押注涨到100的多头止盈，与把100当阻力的空头开仓相遇","主要是此前多头获利退出，空头仍因向100磁吸而等待"],answer:1,explanation:"本课在略超100时就同时讨论多头止盈、空头在整数阻力卖出。磁吸到目标和到目标后的操作是不同阶段，也未要求先确认下降或强下破。",id:"19C-K19-1",knowledgeId:"K19",knowledgeTitle:"达到100后的卖盘来源",time:"14:06–14:24",pdfPages:[1697],type:"图表应用",quote:`14:01 多头买入 相信它会涨到100
14:06 价格略微超过了100
14:09 然后就回调 为什么会回调
14:12 因为前期买入押注会涨到100的
14:15 多头在这里开始卖出止盈
14:18 空头认为100是阻力
14:20 他们会在100及上方卖出做空
14:24 就造成了这样的反转或深度回调`,image:{src:"/charts/19c-stock-100.webp",solutionSrc:"/charts/19c-stock-100-solution.webp",page:1697,alt:"原课件第1697页图表局部"}},{prompt:"看图中蓝色100线：价格突破后，右侧长下影线回测该区域。 100被强势突破后回调，价格一度略低于100又转涨。本课怎样区别于第一次到100？",options:["100稍被跌破，支撑作用应先转到92，反弹只看较低旧高点","突破后100转为回测支撑，空头止盈与多头再买可促反弹","100曾使价格回落，本次略破再涨仍应优先按阻力做空"],answer:1,explanation:"本课结合强突破后角色互换及买盘反应，同时保留100与92。略破不等于100作用消失，过去曾是阻力也不锁定本次仍为阻力。",id:"19C-K20-1",knowledgeId:"K20",knowledgeTitle:"整数强突破后的角色与再测试",time:"14:27–15:16",pdfPages:[1697],type:"图表应用",quote:`14:24 就造成了这样的反转或深度回调
14:27 这里价格暴力的突破了100
14:30 当回调到100的时候
14:32 交易者再次买入一百曾经是阻力
14:35 现在变成了支撑
14:37 交易者会在100和更低的位置挂限价买单
14:41 事实上你可以看到这个
14:43 高点92也成为了支撑
14:47 一些空头认为当市场上涨时
14:50 它会回调 并且测试支撑
14:52 比如100这个关键的整数位
14:55 所以有一些空头会在高位做空
14:59 预期价格回撤100
15:01 有一些多头在这里止盈
15:04 他们在回调到100的时候再次买入
15:08 可以看到市场迅速跌到100的下方
15:12 空头买入止盈 多头买入开仓做多
15:16 然后价格再次强势的反转上涨`,image:{src:"/charts/19c-stock-context.webp",solutionSrc:"/charts/19c-stock-context-solution.webp",page:1697,alt:"课程PDF第1697页行情图"}},{prompt:"看图左侧38.60和红色40线。 原油从40上方跌到38.60，课程称它测试了“30 handle”。该说法对应什么？",options:["进入30.00～39.99区域，观察四十下方买盘","接近30.00整数价位，观察三十附近买盘","进入30.00～30.99区域，观察三十附近买盘"],answer:0,explanation:"“30 handle”指报价以三开头的整个范围，38.60已经进入。它不只指30.00～30.99，也不要求价格接近30。",id:"19C-K21-1",knowledgeId:"K21",knowledgeTitle:"原油30 handle与真空测试",time:"15:20–16:06",pdfPages:[1698],type:"图表应用",quote:`15:20 这是原油的日K线图
15:26 强下降趋势 价格在40上方一点点
15:31 你会听到一些交易者谈论30 handle
15:35 住handle一种英文报价的方式
15:37 30 handle意味着以三十开头的价格注
15:41 也就是中文里面的30度
15:43 可以指30到39.99之间的任何价格
15:47 当市场开始接近40时 通常会跌破40
15:51 因为交易者想看看如果跌到30 handle会发生什么
15:55 它会跌到30吗？
15:57 它会跌到30以下吗？
15:59 或者在40下方会有买盘进来吗？
16:02 这次剧烈抛售的一部分原因就是这个
16:06 这是对30 handle的一次真空测试`,image:{src:"/charts/19c-oil-50.webp",solutionSrc:"/charts/19c-oil-50-solution.webp",page:1698,alt:"原课件第1698页图表局部"}},{prompt:"本课原油图先跌破40后反弹，再在50附近两次受阻。哪种解释与图中顺序相符？",options:["40下方与50上方都先按原下降惯性，忽略局部反转","40下方吸引买盘，50附近双方卖出使反弹遇阻","跌破40先确认下跌延续，到50再优先等上破追涨"],answer:1,explanation:"本例分开观察进入三字头后的实际买盘和到50后的实际卖盘。不能把整数跌破、到达当作不需反应验证的固定方向信号。",id:"19C-K22-1",knowledgeId:"K22",knowledgeTitle:"原油40下方买盘与50处卖盘",time:"16:12–16:53",pdfPages:[1698],type:"图表应用",quote:`16:12 交易者一看到价格跌到三开头
16:16 就买入B跌破40他们就买入
16:19 大量的买入
16:20 然后观察当原油上涨到一个大
16:23 的整数50的时候发生了什么？
16:25 刚刚超过50就下跌回调了
16:28 很多在40买入的交易者会在50止盈
16:31 空头认为50这么大的整数会有阻力
16:35 空头知道会有多头止盈 于是他们卖出做空
16:39 得到了一个剥头皮的机会
16:42 价格再次测试50 发生了同样的事情
16:45 在牛企买入做多的多头再次止盈
16:48 而看到之前在50有阻力
16:51 的空头再次卖出做空
16:53 所以形成了这个双鼎雄奇`,image:{src:"/charts/19c-oil-50.webp",solutionSrc:"/charts/19c-oil-50-solution.webp",page:1698,alt:"原课件第1698页图表局部"}},{prompt:"看图中绿色50线附近的两次高点。 第二次上涨到50后又回落，课程为何把它与双顶熊旗联系？",options:["同一区域再次出现止盈和做空，向上延续未成功","第二次反弹更接近均线，说明整数作用已经被替代","第二次价格接近整数，代表前一次阻力已被消耗"],answer:0,explanation:"重复测试后仍下转是此处形成双顶熊旗的依据。不能只凭测试次数说阻力消耗，也没有均线取代整数的证据。",id:"19C-K22-2",knowledgeId:"K22",knowledgeTitle:"原油40下方买盘与50处卖盘",time:"16:12–16:53",pdfPages:[1698],type:"图表应用",quote:`16:12 交易者一看到价格跌到三开头
16:16 就买入B跌破40他们就买入
16:19 大量的买入
16:20 然后观察当原油上涨到一个大
16:23 的整数50的时候发生了什么？
16:25 刚刚超过50就下跌回调了
16:28 很多在40买入的交易者会在50止盈
16:31 空头认为50这么大的整数会有阻力
16:35 空头知道会有多头止盈 于是他们卖出做空
16:39 得到了一个剥头皮的机会
16:42 价格再次测试50 发生了同样的事情
16:45 在牛企买入做多的多头再次止盈
16:48 而看到之前在50有阻力
16:51 的空头再次卖出做空
16:53 所以形成了这个双鼎雄奇`,image:{src:"/charts/19c-oil-50.webp",solutionSrc:"/charts/19c-oil-50-solution.webp",page:1698,alt:"原课件第1698页图表局部"}},{prompt:"蓝线是EMA20，图中绿色区域标出了均线附近的K线。 USDCHF四小时上涨回调到均线附近，按本课的反转突破买入方式更关注什么？",options:["转涨阳线高点上方的触发，结合上涨背景","转跌阴线低点下方的触发，结合反弹失败","跌到均线价格时的成交，结合整数附近挂单"],answer:0,explanation:"限价接回是另一种做法，题干限定反转后的突破买入；阴线低点下方则把方向换成卖出。EMA20作为位置，信号高点作为触发。",id:"19C-K23-1",knowledgeId:"K23",knowledgeTitle:"四小时均线回调与入场",time:"16:58–17:43",pdfPages:[1699],type:"图表应用",quote:`16:58 这是美元对瑞郎的4小时图
17:06 这是一个上涨趋势
17:08 多头会在价格回调到ema 20的时候买入
17:12 这是平均价格
17:14 我在这里用的是ema 20
17:16 但任何有用的均线都可以
17:19 他们都衡量了这某种平均价格
17:24 当价格接近均线
17:26 交易者开始在前一根K线的高点上方挂
17:29 突破买单买入接近均线他们会在前一根
17:33 K线的上方买入
17:35 接近均线他们会在前一根K线的上方买入
17:38 接近均线阳线在它的高点上方买入会更好
17:43 再次回撤均线多头在阳线的`,image:{src:"/charts/19c-fourhour-context.webp",solutionSrc:"/charts/19c-fourhour-context-solution.webp",page:1699,alt:"课程PDF第1699页行情图"}},{prompt:"讲师在这张四小时图用EMA20，关于均线种类还保留了什么说明？",options:["换其他均线后，应把所有信号高点统一改成精确均线价","EMA20是示例，其他有用均线也可衡量平均价格","只有EMA20可作回调支撑，其他均线主要看长期方向"],answer:1,explanation:"课程说任何有用均线都可以，并未把支撑作用限定在EMA20。换位置参考也不等于取消原来反转信号的触发端点。",id:"19C-K23-2",knowledgeId:"K23",knowledgeTitle:"四小时均线回调与入场",time:"16:58–17:43",pdfPages:[1699],type:"变式辨析",quote:`16:58 这是美元对瑞郎的4小时图
17:06 这是一个上涨趋势
17:08 多头会在价格回调到ema 20的时候买入
17:12 这是平均价格
17:14 我在这里用的是ema 20
17:16 但任何有用的均线都可以
17:19 他们都衡量了这某种平均价格
17:24 当价格接近均线
17:26 交易者开始在前一根K线的高点上方挂
17:29 突破买单买入接近均线他们会在前一根
17:33 K线的上方买入
17:35 接近均线他们会在前一根K线的上方买入
17:38 接近均线阳线在它的高点上方买入会更好
17:43 再次回撤均线多头在阳线的`},{prompt:"看下方橙色0.9000线附近先突破、再回测的走势。 四小时上涨先在整数附近回落，后来突破并在回测时再涨，哪项符合本课？",options:["先前已在整数回落，后来的突破应优先当作双顶失败前的诱多","同一整数可先为止盈阻力，突破后再成为支撑","整数在四小时图只供止盈，回测支撑应改由均线提供"],answer:1,explanation:"两种错误说法分别割裂整数与支撑、固守原先阻力结论。课程用实际突破及回测说明角色变化，而非由第一次回落锁定后续走势。",id:"19C-K24-1",knowledgeId:"K24",knowledgeTitle:"四小时整数与角色互换",time:"17:43–18:16",pdfPages:[1699],type:"图表应用",quote:`17:43 再次回撤均线多头在阳线的
17:47 高点上方买入大整数09000
17:53 大整数09100 价格被吸引到大整数
18:00 多头止盈 空头做空 剥头皮向上突破
18:04 然后回撤再次上涨
18:06 之前的阻力位现在变成了支撑
18:10 下一个大整数在这里 09100多头止盈
18:16 空头做空 他们再次卖出几段下跌`,image:{src:"/charts/19c-fourhour-context.webp",solutionSrc:"/charts/19c-fourhour-context-solution.webp",page:1699,alt:"课程PDF第1699页行情图"}},{prompt:"图中不同颜色的曲线代表不同周期的简单均线。 日线依次接近SMA50、100、150、200。本课如何看待这些候选支撑？",options:["先观察价格在哪条附近转涨，不预先指定本轮底部","先取四条均线平均价，避免单条均线的反转信号相冲突","先按周期长短排序，越长期的均线越适合认定本轮底部"],answer:0,explanation:"课程列多条候选均线，并强调无法提前知道底在哪里。固定按周期排名或重算一条平均线，都替换了原课根据价格反应判断的方法。",id:"19C-K25-1",knowledgeId:"K25",knowledgeTitle:"日线简单均线与未知底部",time:"18:24–19:30",pdfPages:[1700],type:"图表应用",quote:`18:24 这是es的日K线
18:26 长线交易者关注日K线上的简单移动平均线
18:31 常见的周期是50天、
18:34 100天、150天、200天
18:37 我在这里对他们进行了颜色编码
18:40 上涨趋势
18:41 当价格回调到这些均线中的任何一个时
18:45 多头会在反转上涨时买入
18:47 可以看到它回调到粉红线MA150
18:51 然后反转上涨跌到黄线MA200
18:55 反转上涨可以看到很多反转都
18:58 发生在这些均线附近
19:01 每当回调到ma 5时就反转上涨
19:06 多头在回调时买入 压住空头会失败
19:11 在上涨趋势中
19:12 80%反转的尝试会失败
19:16 均线是一种支撑
19:18 交易者会在价格碰到均线反转上涨时买入
19:22 他们无法提前知道哪里是底部
19:26 但如果他们看到市场从某条均线开始反转上涨
19:30 他们就考虑开始买入做多`,image:{src:"/charts/19c-sma-up-context.webp",solutionSrc:"/charts/19c-sma-up-context-solution.webp",page:1700,alt:"课程PDF第1700页行情图"}},{prompt:"图中彩色曲线是不同周期的简单均线，观察价格反弹后的走势。 EURGBP日线下降，反弹靠近SMA后开始下转。与前页上涨例子的差别是什么？",options:["均线周期由短变长，因此需要反向看待价格反应","均线在下降背景中作为反弹阻力，关注转跌","均线由简单平均改为指数平均，因此转为阻力"],answer:1,explanation:"两页均列SMA50/100/150/200。角色变化来自市场方向与价格反应，不能归因于换算法或变周期。",id:"19C-K26-1",knowledgeId:"K26",knowledgeTitle:"下跌日线简单均线",time:"19:33–19:55",pdfPages:[1701],type:"图表应用",quote:`19:33 欧元对英镑的日K线下降趋势
19:37 这里是一系列简单移动平均线
19:43 50天、100天、150天和200天
19:48 每当市场接近一条线
19:50 如果它开始反转下跌 交易者就会卖出做空
19:55 简单移动平均线提供支撑和阻力`,image:{src:"/charts/19c-sma-down-context.webp",solutionSrc:"/charts/19c-sma-down-context-solution.webp",page:1701,alt:"课程PDF第1701页行情图"}},{prompt:"观察图中0.8000和0.7000两条整数水平线。 EURGBP跌破0.8000后到0.7000反弹，本课关注的逻辑是什么？",options:["下一个较大整数吸引测试，空头止盈与多头买入形成反弹","两个整数相隔较远，反弹应先归因于价格精确完成等长测量","前一个整数失守后，下一个整数主要成为反弹的上方阻力"],answer:0,explanation:"本课明确把0.7000处看作新的下方支撑候选。一种错误说法错认上下方向，另一种错误说法把整数机制换成未给出的等长测量。",id:"19C-K27-1",knowledgeId:"K27",knowledgeTitle:"外汇整数的量级与反弹",time:"20:00–20:42",pdfPages:[1702],type:"图表应用",quote:`20:00 这是欧元对英镑的日K线图
20:04 大整数也很重要 比如100点的倍数
20:13 这里是1000点的倍数
20:16 可以看到市场下跌
20:18 然后横盘在08000获得支撑
20:24 最终被跌破
20:25 迅速下跌到下一个大整数07000
20:30 然后反弹
20:31 空头在这里止盈 多头会在大整数买入
20:35 压住空头会止盈
20:37 至少会有一个小反弹 100点的倍数
20:42 1000点的倍数支撑和阻力`,image:{src:"/charts/19c-forex-context.webp",solutionSrc:"/charts/19c-forex-context-solution.webp",page:1702,alt:"课程PDF第1702页行情图"}},{prompt:"课程提到外汇整数与期权行权价，同时保留了哪项限定？",options:["外汇整数主要在到期日有效，平时靠均线形成支撑阻力","外汇期权参与比期货更集中，因此整数通常比ES更精确","还存在止损止盈作用，外汇期权交易并不广泛"],answer:2,explanation:"两种错误说法都加上了原课没有的强弱或时间结论。本课同时讲订单集中和期权机制，并明确外汇期权不广泛交易。",id:"19C-K28-1",knowledgeId:"K28",knowledgeTitle:"外汇整数与期权解释的范围",time:"20:48–21:40",pdfPages:[1702],type:"理解判断",quote:`20:48 交易者经常会把止损挂在大的整数外面
20:52 他们也会在大的整数止盈
20:57 整数有期权、行权价、货币
20:59 期货的期权和外汇的期权
21:02 我不认识任何交易外汇期权的人
21:05 所以这个品种并没有被广泛的交易
21:08 但一些交易者确实交易外汇期权机构
21:12 喜欢做期权的卖方
21:14 他们希望期权到期时一文不值
21:17 价外的期权到期时价值归零
21:20 卖方可以赚到全部的权利金
21:22 机构总是会尝试操纵标的本身的价格
21:25 注 假如交易欧元的期权
21:27 欧元就是标的 如操纵外汇的价格
21:31 使得当期权到期时
21:33 外汇的价格会在一个大整数附近
21:40 因为期权行权价很重要 所以它们是磁铁`},{prompt:"某位置既是前高，又接近测量目标，但离EMA20较远。按本课列表应如何保留它？",options:["先按测量目标处理，前高要等精确同价才纳入","先降低为次要位置，等均线接近后才视为阻力","仍保留为候选阻力，再看该背景中的价格反应"],answer:2,explanation:"候选包括前高和MM，不要求EMA20到场，也不要求前高精确同价才能参考。两个错项把某一条件错误地变成必要条件。",id:"19C-K29-1",knowledgeId:"K29",knowledgeTitle:"支撑阻力候选的基础列表",time:"21:52–22:15",pdfPages:[1704],type:"理解判断",quote:`21:52 这里是一个支撑和阻力的列表
21:57 趋势线 前期的高点
21:59 前期的DDM5目标位
22:02 任何时间周期 任何类型的移动平均线
22:07 例如在五分钟图上我使用EMA20
22:11 在日K线图上我使用简单移动平均线
22:15 MAAMA50、100 150和200`,referenceImage:{src:"/charts/19c-list-solution.webp",page:1704,alt:"第1704页课件整页讲解",kind:"课件整页"}},{prompt:"只问“入场K线”的端点，本课列表中的配对是哪一个？",options:["多头入场K低点作支撑，空头入场K高点作阻力","多头入场K高点作支撑，空头入场K低点作阻力","多头信号K高点作支撑，空头信号K低点作阻力"],answer:0,explanation:"一种误判把入场K线的端点倒过来；另一种误判换成信号K线，虽同属列表，却不是题干指定的入场K线。",id:"19C-K30-1",knowledgeId:"K30",knowledgeTitle:"入场K线端点",time:"22:25–22:29",pdfPages:[1704],type:"理解判断",quote:`22:25 在上涨趋势中做多入场 K线的低点是支撑
22:29 在下降趋势中做空入场 K线的高点是阻力`},{prompt:"已有入场记录后，原入场价为什么还可能成为新的支撑阻力？",options:["仓位已经加过一次，原价作用应由两次入场中点统一替代","加仓者可能在原价退出，原成本位置因此吸引新的买卖盘","合理的原入场价会继续吸引同方向加仓，退出主要看新均价"],answer:1,explanation:"原课特意把原入场价列为候选，因为有人在那里退出。不能把合理入场固定成再次加仓，也不能由加仓就断定所有人只在组合中点退出。",id:"19C-K31-1",knowledgeId:"K31",knowledgeTitle:"信号端点与原入场价",time:"22:34–22:43",pdfPages:[1704],type:"理解判断",quote:`22:29 在下降趋势中做空入场 K线的高点是阻力
22:34 做多信号K线的高点做
22:36 空信号K线的低点入场
22:39 价格加仓的交易者会在初始的入场价格离场
22:43 所以那里有支撑或阻力`},{prompt:"同一波段的最高价来自影线，最高收盘低于它。本课列表允许怎样处理？",options:["分别保留，影线高点和最高收盘都可参考","先只留影线高点，收盘差异并入同一个精确价","先只留最高收盘，线形图以外的影线高点可删"],answer:0,explanation:"列表单独列出收盘极值，没有要求与影线合并或取中点。相近价位可能各有交易行为，不能仅为简化画线而改变出处。",id:"19C-K32-1",knowledgeId:"K32",knowledgeTitle:"波段收盘极值",time:"22:45–22:49",pdfPages:[1704],type:"理解判断",quote:`22:43 所以那里有支撑或阻力
22:45 任何波段最高和最低的那个收盘价剥
22:49 头皮交易者的止盈目标会形成支撑和阻力`},{prompt:"很多剥头皮多头在相近的上方目标退出，本课认为该目标怎样影响价格？",options:["集中止盈表明新空头入场，可据此确认下降趋势","集中卖出可造成回调，使目标区域成为阻力","集中买入可强化上涨，使目标区域成为回调支撑"],answer:1,explanation:"多头止盈是卖出，不是买入；卖出退出也不等于全部变成新空头，更不足以单独确认下降趋势。",id:"19C-K33-1",knowledgeId:"K33",knowledgeTitle:"剥头皮目标形成反向订单",time:"22:49–23:08",pdfPages:[1704],type:"理解判断",quote:`22:45 任何波段最高和最低的那个收盘价剥
22:49 头皮交易者的止盈目标会形成支撑和阻力
22:54 例如如果你在上涨趋势中
22:56 买入并进行剥头皮交易
22:58 你会在上方剥头皮的距离卖出
23:01 这意味着市场可能在那里出现回调
23:04 如果有足够多的剥头皮交易者在那里卖出止盈
23:08 因此它是阻力`},{prompt:"月末五分钟图遇到昨日高点与本月开盘附近，按本课列表应如何理解？",options:["不同周期的开高低收都可参与，观察当前测试","昨日价位属于日内参考，本月开盘应留到月线交易再用","本月开盘属于最新信息，昨日高点应让位于本月开盘"],answer:0,explanation:"题目所列两项都在候选清单。不同周期不构成互斥，也没有“越新价位固定优先”的规则。",id:"19C-K34-1",knowledgeId:"K34",knowledgeTitle:"今昨及高周期的开高低收",time:"23:11–23:34",pdfPages:[1704],type:"理解判断",quote:`23:11 今天或昨天的高点、低点、开盘价和收盘价
23:15 每周或每个月的最后一个交易日
23:18 日K线、周K线或月K线上的支撑
23:22 与阻力会在五分钟图上变得重要
23:26 例如 在月末的最后1个小时
23:29 如果你在交易五分钟图
23:31 你有时可以找到一些基于月
23:34 K线支撑或阻力的交易机会`},{prompt:"列表列了日枢轴、斐波那契和带状指标，讲师却表达使用偏好。哪项读法准确？",options:["完整清单的工具应有近似权重，个人偏好不影响使用优先级","后面完整清单应高于前面案例，先等所列指标共同确认","清单列广泛候选，个人使用则尤其重视50%回调和100%MM"],answer:2,explanation:"候选清单不等于等权或全部必用。讲师明确有使用取舍，也没要求在前面整数、均线等案例上另加全清单的共同确认。",id:"19C-K35-1",knowledgeId:"K35",knowledgeTitle:"完整列表与个人偏好",time:"23:40–24:07",pdfPages:[1704],type:"理解判断",quote:`23:40 日内枢轴点Kevin
23:41 我从来不用那些点位大的整数
23:45 比如道琼斯20点斐波那契回调
23:49 大多数交易员不会关注菲波纳契
23:53 我个人认为他们没什么帮助
23:55 然而50%回调和100%
23:59 MA目标位非常重要
24:02 你每天都会看到他们
24:04 然后是任何类型的逮住 比如布林带
24:07 Billinger vance`},{prompt:"有人把“本课重视50%回调与100%MM”记成“主要背所有斐波那契比例”。漏掉了什么？",options:["重点是所有比例叠加，单独半幅与等长目标权重较低","重点是61.8%回调，50%主要是为近似计算方便","重点是半幅回调与等长投射，没有同等认可所有比例"],answer:2,explanation:"原文单独强调50%回调及100%MM。不能把重点换成61.8%，也没有要求所有比例叠加才有效。",id:"19C-K35-2",knowledgeId:"K35",knowledgeTitle:"完整列表与个人偏好",time:"23:40–24:07",pdfPages:[1704],type:"变式辨析",quote:`23:40 日内枢轴点Kevin
23:41 我从来不用那些点位大的整数
23:45 比如道琼斯20点斐波那契回调
23:49 大多数交易员不会关注菲波纳契
23:53 我个人认为他们没什么帮助
23:55 然而50%回调和100%
23:59 MA目标位非常重要
24:02 你每天都会看到他们
24:04 然后是任何类型的逮住 比如布林带
24:07 Billinger vance`}],sourceFile:"BTC PAF 19C Support and Resistance_中文 (源语言).srt"},{id:"19D",title:"最高最低收盘与突破回测",range:"00:00–27:59",revision:"support-19d-v1",notes:["强趋势的买收盘、卖收盘依赖趋势惯性；超预期反向压力出现后，原有持仓者可能改按区间退出。","最高收盘附近，多头退出与空头开仓可形成阻力；最低收盘附近，空头回补与多头开仓可形成支撑，仍不保证守住或精确触价。","区分“回原价退出”与“回原价再次入场”：前者可能使多头买价变阻力、空头卖价变支撑，后者可有相反角色。","限价单看价格到区域，突破单看反转后触发；做多信号高点、做空信号低点与实际入场价相差一个tick的案例要分清。","多头信号/入场K低点及空头信号/入场K高点是参考；略微越过后仍要看反应，不能直接判定整个趋势反转。加仓案例须保留背景、空间、小仓位与总风险限制。"],group:"支撑与阻力",knowledgePoints:[{id:"K01",title:"强微通道中的买收盘",summary:"连续强阳和微通道使多头预期更高价格，即使先回调；课程在这个强趋势背景中也讨论买首根阴线收盘，与限价、突破买入并存。",time:"00:42–01:33",pdfPages:[1709],questionIds:["19D-K01-1"]},{id:"K02",title:"第一次下跌与反转级别",summary:"强上涨趋势首次跌破趋势线后的下跌，通常先按小反转、牛旗或区间评估；买在高位者据此预期再测试前高。",time:"01:38–02:12",pdfPages:[1709,1710],questionIds:["19D-K02-1"]},{id:"K03",title:"失望卖压改变强趋势前提",summary:"下跌卖压过强使多头失望，原强趋势转成区间的判断增强；他们改按低买高卖处理，而非要求立刻恢复原有上涨速度。",time:"02:17–03:06",pdfPages:[1710,1711],questionIds:["19D-K03-1"]},{id:"K04",title:"原价退出与分笔盈亏",summary:"失望多头低位加仓，回初始高位入场价全部退出时，第一笔打平、低位部分盈利，属于区间剥头皮逻辑而非大波段目标。",time:"03:12–03:37",pdfPages:[1711],questionIds:["19D-K04-1"]},{id:"K05",title:"最高收盘附近的多方卖盘",summary:"最高收盘成为阻力，可来自加仓多头退出获利、未加仓多头打平离场和空头新开仓；阻力不只意味着新空头增加。",time:"03:46–05:23",pdfPages:[1712],questionIds:["19D-K05-1","19D-K05-2"]},{id:"K06",title:"限价离场与反转离场",summary:"多头可在最高收盘挂限价卖出，也可等反转后阴线下方退出；后者可能略亏，退出目的不保证成交价相同。",time:"05:27–05:56",pdfPages:[1712],questionIds:["19D-K06-1"]},{id:"K07",title:"卖收盘与下一笔低价",summary:"强下降中空头急于在阴线收盘卖出，下根开盘或下一tick更低可体现卖压；课程称为卖收盘背景，仍预期先反弹也能再下跌。",time:"06:00–06:49",pdfPages:[1713],questionIds:["19D-K07-1"]},{id:"K08",title:"止盈减仓引发反弹",summary:"空头已有利润但止损较远，减仓止盈可降低利润回撤风险；足够多的回补可推动一串阳线，未必已建立强上涨趋势。",time:"06:53–07:26",pdfPages:[1714],questionIds:["19D-K08-1"]},{id:"K09",title:"强反弹后的背景重估",summary:"三根收高阳线等买压让卖收盘空头失望，后续可能熊旗或区间，不能继续按马上大跌的原节奏预期。",time:"07:38–08:14",pdfPages:[1715],questionIds:["19D-K09-1"]},{id:"K10",title:"最低收盘附近的三类买盘",summary:"原低位空头求打平、高位加仓空头求获利，以及预期回补反弹的多头，都可能在最低收盘附近买入，使其成为支撑。",time:"08:14–08:44",pdfPages:[1715,1717],questionIds:["19D-K10-1"]},{id:"K11",title:"加仓空间须联系退出目标",summary:"课程的加仓案例要求较后入场离回补目标有足够剥头皮空间；字幕倍数与课件不一致，不出固定数值题，也不把加仓解释成保证回本。",time:"08:50–09:04",pdfPages:[1714,1715],questionIds:["19D-K11-1"]},{id:"K12",title:"尚可回测与空头放弃的区别",summary:"接近最低收盘但提前反弹时，空头会担心目标不到；突然强大阳线可促放弃，但案例中的较小阳线暂未使其放弃原回测预期。",time:"09:10–10:24",pdfPages:[1716],questionIds:["19D-K12-1"]},{id:"K13",title:"两段约半幅反弹中的做空触发",summary:"约50%两段上涨后出现收低阴线，仍有空头在其下方卖出，借离目标足够距离寻求剥头皮；一段强反弹不自动排除后续卖出。",time:"10:38–11:47",pdfPages:[1716],questionIds:["19D-K13-1"]},{id:"K14",title:"急于回补而未到目标",summary:"过多空头想买回、同时有多头买入，可使价格未触最低收盘就反弹；空头为提高成交机会抬高限价买单。",time:"11:52–12:16",pdfPages:[1716],questionIds:["19D-K14-1"]},{id:"K15",title:"多次加仓前的风险规划",summary:"第三次入场等安排须在交易前规划，使用很小仓位，确保总风险不大于其他交易；案例初始止损在最近重要高点上方。",time:"12:23–12:57",pdfPages:[1716],questionIds:["19D-K15-1"]},{id:"K16",title:"最低收盘支撑与最终突破",summary:"最低收盘的回补支撑可以多次生效，区间形成后仍可能最终跌破；课程在已成区间背景中给约50/50的后续方向描述。",time:"13:03–14:28",pdfPages:[1717],questionIds:["19D-K16-1","19D-K16-2"]},{id:"K17",title:"持有等跌破与反转退出",summary:"部分空头持有押注跌破支撑，但若没有快速下破而反转上涨，课程讨论其退出；持有波段目标不等于忽略失败信息。",time:"14:32–15:05",pdfPages:[1717],questionIds:["19D-K17-1"]},{id:"K18",title:"区间合理买价也可成为阻力",summary:"区间或弱下降背景的合理做多后，低位加仓者可能在原买价退出，原买价便因卖出成为阻力；合理入场不意味着该价永远为支撑。",time:"15:10–16:18",pdfPages:[1718],questionIds:["19D-K18-1"]},{id:"K19",title:"多头突破回测的再买支撑",summary:"良好背景下强反转向上后，初始入场价附近可吸引多头再买；回测既可能略破，也可能未精确碰到就转涨。",time:"16:26–17:47",pdfPages:[1720],questionIds:["19D-K19-1","19D-K19-2"]},{id:"K20",title:"信号高点与实际入场价",summary:"此处做多突破入场价指信号K高点上方1 tick；再买限价单可挂在信号高点或原入场价，二者相邻但不相同。",time:"17:52–18:17",pdfPages:[1720],questionIds:["19D-K20-1"]},{id:"K21",title:"抬高买价表示急切",summary:"多头担心回调到不了信号K高点而抬高限价买单，未精确测试也有买入；急切买盘不保证后面一定涨很远。",time:"18:19–18:50",pdfPages:[1720],questionIds:["19D-K21-1"]},{id:"K22",title:"回测中的限价与突破单",summary:"其他多头会等待回测后的反转阳线，在其上方以突破单买入；这与下跌到价时限价买入在触发时机上不同。",time:"18:58–19:08",pdfPages:[1720],questionIds:["19D-K22-1"]},{id:"K23",title:"区间做空加仓的前提",summary:"区间或弱上涨背景有合理做空信号，空头可能逢高加仓；课程限定原区间前提仍有效，并以突破跟随不佳等信息支持，而非上涨越强越加。",time:"19:19–20:21",pdfPages:[1721],questionIds:["19D-K23-1"]},{id:"K24",title:"空头原卖价变为回补支撑",summary:"区间空头在更高处卖出后，回原入场价买回，原仓打平、加仓获利；其他空头止盈和多头买入也可能使原卖价成为支撑磁铁。",time:"20:26–21:07",pdfPages:[1721],questionIds:["19D-K24-1"]},{id:"K25",title:"空头突破后的回测",summary:"区间/弱上涨的低二做空后，价格下跌再反弹至原卖价；失望多头想退出、曾获利的空头想再次做空，双方卖出形成阻力。",time:"21:15–22:31",pdfPages:[1722],questionIds:["19D-K25-1"]},{id:"K26",title:"未限价退出后的触发",summary:"部分多头仍期待上涨而未在回测水平退出；看到反转下跌后，课程讨论在阴线低点下方退出，成交可能低于理想原价。",time:"23:12–23:24",pdfPages:[1722],questionIds:["19D-K26-1"]},{id:"K27",title:"趋势线跌破后的合理卖价",summary:"上涨趋势线跌破、小反弹后卖出的价位可成为后续回测阻力；先前做空者重入与被套多头退出都卖出，未及时限价退出者转跌后退出。",time:"23:29–25:02",pdfPages:[1723],questionIds:["19D-K27-1","19D-K27-2"]},{id:"K28",title:"多头入场与信号K低点支撑",summary:"价格可测试多头入场K低点或信号K低点后再涨；大阳入场K还可能是抢购高潮K，稍破其底部不自动等于整个上涨趋势反转。",time:"25:12–26:07",pdfPages:[1724],questionIds:["19D-K28-1","19D-K28-2"]},{id:"K29",title:"空头入场与信号K高点阻力",summary:"大阴入场K可能是抛售高潮，其高点吸引测试；弱空头可能在其上方止损，强空头可能在同区新卖，稍超后仍可反转下跌。",time:"26:16–27:16",pdfPages:[1725],questionIds:["19D-K29-1","19D-K29-2"]}],questions:[{prompt:"强上涨微通道中第一次出现阴线，为什么本课仍讨论有多头买它的收盘？",options:["他们预期首根阴线之后会有更深回调，再在低位买入","他们预期首根阴线会发展为反转，等待反弹后卖出","他们押注强趋势延续，允许先有回调再上涨"],answer:2,explanation:"本例买收盘者预期即使先回调，强上涨之后仍能再涨；等待更深回调买入或准备反弹卖出，是不同的预期，不能解释为何此时买收盘。",id:"19D-K01-1",knowledgeId:"K01",knowledgeTitle:"强微通道中的买收盘",time:"00:42–01:33",pdfPages:[1709],type:"理解判断",quote:`00:42 强上涨趋势微通道从这里开始
00:47 阳线在某个时候你必须做出决定
00:50 市场会继续上涨
00:52 然后你开始在K线的收盘买入
00:55 例如你在它的收盘或者任何这些K线的收盘买入没有阴线
01:01 即使第一次出现了阴线
01:03 你也会买它的收盘价
01:06 强上涨趋势我称之为买收盘的上涨趋势
01:10 因为强多头会在K线收盘的瞬间买入
01:14 他们压住
01:15 就算先出现了回调之后市场还会上涨
01:19 连续三根阳线 交易者会开始买收盘买收盘
01:24 他们也会买第一根阴线的收盘
01:27 他们也会在K线下方挂限价买单
01:30 他们也会在K线上方挂突破买单
01:33 今天我主要来讲买收盘的这种做法`},{prompt:"强上涨首次跌破趋势线，买在最高收盘的多头仍预期回测原价。他们依赖什么背景？",options:["首次反转通常较小，后续可能是牛旗或区间","最高收盘本身会吸引买盘，因此不必考虑下跌力度","趋势线失守已建立下降，反弹只能先按熊旗看"],answer:0,explanation:"依据是原趋势强、首次反转通常小。单独跌线不确认新下降；本课是结合强趋势首次下跌的背景预期回测，而非最高收盘本身保证买盘。",id:"19D-K02-1",knowledgeId:"K02",knowledgeTitle:"第一次下跌与反转级别",time:"01:38–02:12",pdfPages:[1709,1710],type:"理解判断",quote:`01:38 在某个时候当价格跌破上涨趋势线
01:42 有些交易者买了这个收盘或那个收盘价
01:46 所以他们买在上涨趋势中的最高的收盘价
01:50 这个价格就变得很重要
01:52 强上涨趋势中第一次下跌
01:55 反转大概率只是小反转
01:57 之后市场要么处于震荡区间
02:00 要么是牛骑 而不是下降趋势
02:02 因此 买这个收盘价的交易者
02:04 相信市场之后会回到这里
02:07 所以许多人会在更低的位置加仓买入
02:10 比如在阳线上方压铸
02:12 市场会回到那个收盘价`},{prompt:"最高收盘买入后遭遇明显超预期下跌，多头改按区间交易，改变了哪项判断？",options:["从预期回测原高点改为持有等待等长上涨目标","从追随强上涨改为在较低处买、较高处退出","从等待阳线触发改为优先在新高收盘继续买入"],answer:1,explanation:"卖压使他们不再按原强上涨节奏持仓；区间处理强调低买高卖。等长上涨及追新高都没有体现这次背景更新。",id:"19D-K03-1",knowledgeId:"K03",knowledgeTitle:"失望卖压改变强趋势前提",time:"02:17–03:06",pdfPages:[1710,1711],type:"理解判断",quote:`02:17 如果多头对抛售的幅度感到失望
02:20 他们会得出结论
02:22 这不再是一个强上涨趋势
02:25 他们逢低加仓买入更多
02:28 他们认为这大概率是震荡区间或牛企
02:32 在震荡区间中应该逢低买入
02:35 比如在这根反转阳线的上方买入
02:43 之前在这里买入的多头
02:45 相信这是一个强上涨趋势
02:48 他们相信第一次下跌只是小反转
02:51 市场会回测前期的高点
02:56 但是看到这个之后 他们得出结论
02:59 上涨趋势结束了
03:00 现在处于震荡区间
03:02 所以他们就会按照震荡区间那样进行交易
03:06 他们想逢低买入 逢高卖出`,referenceImage:{src:"/charts/19d-bull-transition-solution.webp",page:1710,alt:"第1710页课件整页讲解",kind:"课件整页"}},{prompt:"一笔多头先买在较高收盘，后在低位加仓；两笔在初始买价退出。忽略费用，分笔结果是什么？",options:["初始仓位打平，低位加仓盈利","初始仓位盈利，低位加仓只打平","初始仓位亏损，低位加仓弥补亏损"],answer:0,explanation:"退出价等于第一笔买价，所以第一笔打平；第二笔买得更低，所以盈利。另一种误判更接近在两笔均价附近退出的组合逻辑，本题并非该退出价。",id:"19D-K04-1",knowledgeId:"K04",knowledgeTitle:"原价退出与分笔盈亏",time:"03:12–03:37",pdfPages:[1711],type:"理解判断",quote:`03:12 买了这个收盘并在下方买入更多的多头
03:16 希望市场能回到他们最初的入场价格
03:20 然后他们会卖出止盈 第一笔仓位打平离场
03:25 加仓的部分赚钱离场
03:28 他们逢低买入之后在高位卖出止盈
03:32 他们赚了很小的利润
03:34 因此他们在做剥头皮交易
03:37 他们相信市场很可能已经处于震荡区间`},{prompt:"价格终于回到原上涨的最高收盘附近，课程为什么预期卖盘增加？",options:["卖盘主要来自新空头，原多头仍等原上涨目标","卖盘主要来自多头退出，空头应等跌破区间下沿才卖","失望多头退出，空头预期退出卖盘而开仓"],answer:2,explanation:"本课同时解释失望多头的平仓和空头在阻力卖出。两个错项各取消了一类本页明确讨论的卖盘。",id:"19D-K05-1",knowledgeId:"K05",knowledgeTitle:"最高收盘附近的多方卖盘",time:"03:46–05:23",pdfPages:[1712],type:"理解判断",quote:`03:46 因为前期在这里买入并逢
03:48 低加仓的多会在这里卖出
03:51 所以这里有卖盘
03:54 这就增加了市场下跌反转的可能性
03:58 也明显增加了市场不会继续上涨的可能性
04:03 因此上涨趋势中最高的收盘价是阻力
04:10 大量的抛售不再是强上涨趋势
04:14 一旦回到这里 这些多头就回本了
04:18 而逢低加仓的交易者会止盈
04:21 那些没有加仓的多头会得出结论
04:25 市场不再是强上涨趋势
04:27 他们不再按照强上涨趋势去交易
04:30 他们在初始入场的价格打平离场
04:38 多头在卖出 而空头总是在以各种理由卖出的
04:43 所以市场很可能在那里下跌
04:46 至少是停止上涨
04:49 因此它是阻力过了很久才重新回到那里
04:52 然而一旦价格回到前期最高的收盘价时
04:56 发生了什么？
04:57 多头卖出在这里买入的多头卖出 打平离场
05:01 在这里买入的多头卖出 剥头皮赚快钱
05:05 因为他们压住这是一个震荡区间
05:08 他们想在逢低买入
05:10 逢高卖出 做剥头皮交易
05:13 空头也会在这里卖出
05:15 因为他们知道多头对发生的情况感到失望
05:19 因此多头会在那里卖出止盈
05:23 所以空头也会在那里卖出`,referenceImage:{src:"/charts/19d-high-close-solution.webp",page:1712,alt:"第1712页课件整页讲解",kind:"课件整页"}},{prompt:"同样在最高收盘附近卖出，未加仓多头与低位加仓多头的目的有何不同？",options:["未加仓者求原仓打平，加仓者还可获低位部分利润","未加仓者求原仓盈利，加仓者主要在原价减小亏损","两者都需等低于原价退出，原价只用于判断趋势"],answer:0,explanation:"回到原买价退出，未加仓仓位是打平；低位加仓部分可以盈利。并非两者都必须低于原价卖，或都必须盈利。",id:"19D-K05-2",knowledgeId:"K05",knowledgeTitle:"最高收盘附近的多方卖盘",time:"03:46–05:23",pdfPages:[1712],type:"变式辨析",quote:`03:46 因为前期在这里买入并逢
03:48 低加仓的多会在这里卖出
03:51 所以这里有卖盘
03:54 这就增加了市场下跌反转的可能性
03:58 也明显增加了市场不会继续上涨的可能性
04:03 因此上涨趋势中最高的收盘价是阻力
04:10 大量的抛售不再是强上涨趋势
04:14 一旦回到这里 这些多头就回本了
04:18 而逢低加仓的交易者会止盈
04:21 那些没有加仓的多头会得出结论
04:25 市场不再是强上涨趋势
04:27 他们不再按照强上涨趋势去交易
04:30 他们在初始入场的价格打平离场
04:38 多头在卖出 而空头总是在以各种理由卖出的
04:43 所以市场很可能在那里下跌
04:46 至少是停止上涨
04:49 因此它是阻力过了很久才重新回到那里
04:52 然而一旦价格回到前期最高的收盘价时
04:56 发生了什么？
04:57 多头卖出在这里买入的多头卖出 打平离场
05:01 在这里买入的多头卖出 剥头皮赚快钱
05:05 因为他们压住这是一个震荡区间
05:08 他们想在逢低买入
05:10 逢高卖出 做剥头皮交易
05:13 空头也会在这里卖出
05:15 因为他们知道多头对发生的情况感到失望
05:19 因此多头会在那里卖出止盈
05:23 所以空头也会在那里卖出`},{prompt:"多头未在最高收盘限价退出，随后等阴线下方退出。哪项区别要保留？",options:["目的同为离场，后者成交位置可能略低于原价","前者属于止盈，后者触发后应按新开空仓记录","目的同为打平，后者仍以最高收盘作为实际成交价"],answer:0,explanation:"等待下转可能付出更低成交价，不能仍把它记为精确打平；卖出已有多仓也不会因采用突破单就自动变成新开空。",id:"19D-K06-1",knowledgeId:"K06",knowledgeTitle:"限价离场与反转离场",time:"05:27–05:56",pdfPages:[1712],type:"理解判断",quote:`05:27 多头在前期最高的收盘价挂限价卖单
05:31 他们要么用限价卖单离场
05:33 要么在反转下跌的时候离场
05:36 尤其是在阴线的下方
05:39 所以他们会在这里平仓 小亏离场
05:44 每当多头卖出时就会形成阻力
05:47 空头想在阻力位卖出
05:49 所以空头也在那里卖出
05:52 他们会在前期最高的收盘价挂单卖出
05:56 也会在反转下跌时卖出`},{prompt:"阴线收盘后下一根开盘略低，本课在连续强下降背景中用它说明什么？",options:["相邻低开表示抛售已衰竭，优先等待反向MM","连续强下降中，收盘卖压使下一笔继续压低","相邻低开表示卖盘在回补，优先按区间买点"],answer:1,explanation:"本段结合连续强下降说明主动卖压。单个相邻低开不证明衰竭；空头回补本身是买入，不能据此解释本例主动压低。",id:"19D-K07-1",knowledgeId:"K07",knowledgeTitle:"卖收盘与下一笔低价",time:"06:00–06:49",pdfPages:[1713],type:"理解判断",quote:`06:00 强下降趋势很多
06:01 空头一看到阴线收盘就会卖出
06:04 看这根K线的收盘价
06:06 再看这根K线的开盘价
06:08 开盘价低于前一根K线的收盘价
06:11 说明这根K线收盘的瞬间
06:13 很多空头就点击市价卖出
06:16 导致下一根K线跳空低开
06:18 这里也是一样
06:20 这告诉你空头非常急切的卖出K线收盘的瞬间
06:25 他们就点击市价卖出
06:27 所以下一个take
06:29 低于前一根K线的收盘价
06:32 这是一个卖收盘的下降趋势
06:36 空头在卖每根K线的收盘
06:38 他们会继续这样做
06:40 直到他们认为这不再是卖收盘的下降趋势
06:45 市场继续下跌的概率很高
06:49 至少足够做一笔剥头皮交易`},{prompt:"下降后出现连续阳线，课程为何先解释为空头减仓止盈？",options:["回补产生买盘，但连续阳线足以确认新的上涨趋势","回补能让空头锁定部分利润，但本身不会形成买盘","回补可降低持仓回撤风险，并带来推动反弹的买盘"],answer:2,explanation:"空头回补是买入，集中回补可推动反弹；连续阳线可能改变原有卖收盘节奏，但本身不足以确认强上涨趋势。",id:"19D-K08-1",knowledgeId:"K08",knowledgeTitle:"止盈减仓引发反弹",time:"06:53–07:26",pdfPages:[1714],type:"理解判断",quote:`06:49 至少足够做一笔剥头皮交易
06:53 在某个时刻价格会开始反弹
06:55 在某个时刻会有足够多的空头止盈
06:59 导致价格开始上涨
07:01 要知道这些空头的止损现在在这里很高的位置
07:06 那些空头在这里卖出
07:08 现在价格在这里 他们的止损在这里很高的位置
07:12 他们的风险很大
07:13 助利润回撤的风险也是冯降低
07:16 风险的最好方法是减仓止盈
07:19 如果有足够多的空头止盈
07:21 就会出现一系列的阳线
07:23 足以让卖收盘的空头相信这
07:26 不再是卖收盘的下降趋势`},{prompt:"连续收高阳线使卖收盘的空头失望。哪种更新符合本课？",options:["暂把阳线当小反弹，保持原卖收盘节奏无需调整","暂不再预期短期迅速大跌，考虑熊旗或区间","暂不再预期回测低点，改按已确认强上涨持仓"],answer:1,explanation:"一种错误说法更新过头，另一种错误说法没有更新。课程区分原卖收盘趋势已经变弱，与新强上涨趋势已被确认。",id:"19D-K09-1",knowledgeId:"K09",knowledgeTitle:"强反弹后的背景重估",time:"07:38–08:14",pdfPages:[1715],type:"理解判断",quote:`07:38 很不错的买家 三根阳线收在高位
07:41 还有一根K线收在一半以上
07:44 空头知道他们的卖收盘的下降趋势已经结束
07:48 市场要么转变为震荡区间 要么是雄奇
07:52 无论哪种情况
07:53 他们都不期望价格会在短期内大幅下跌
08:00 许多空头会在下降趋势恢复时加仓
08:04 因为他们中的很多人认为反弹幅度太大了
08:08 令人感到失望
08:09 所以市场很可能会进入震荡区间
08:12 大涨大跌造成困惑
08:14 横盘横盘意味着如果价格回到这个低点`},{prompt:"重返最低收盘附近时，哪组买盘来源符合课程？",options:["主要是新多头买入，原空头通常等跌破后才退出","原空头打平、加仓空头获利、多头开仓都可买入","主要是空头止盈，新的多头需等原高点突破才可买入"],answer:1,explanation:"本页同时解释空头回补与多头开仓。两个错项各排除课程明确保留的一类买盘，并增加原文没有的等待条件。",id:"19D-K10-1",knowledgeId:"K10",knowledgeTitle:"最低收盘附近的三类买盘",time:"08:14–08:44",pdfPages:[1715,1717],type:"理解判断",quote:`08:12 大涨大跌造成困惑
08:14 横盘横盘意味着如果价格回到这个低点
08:20 会有买盘出现
08:21 确实会有其中一些买盘来自于在这里卖出的空头
08:25 他们很高兴能有打平离场的机会
08:28 一些买盘来自于在这里卖出的空头
08:31 他们在上方加仓卖出更多
08:34 期待第一笔仓位可以打平离场
08:36 加仓的部分可以赚钱
08:38 一些买盘来自于多头
08:40 他们知道空头会在前期最低的收盘价买入
08:44 期待空头的买入会造成价格反弹`},{prompt:"空头计划反弹后加仓，再回最低收盘退出。为什么后一次卖价与退出目标的距离重要？",options:["后一次入场需有足够获利空间，才能支持组合退出的设想","后一次入场越接近目标，越能靠较小波动提高组合利润","后一次入场只需靠近初始卖价，目标距离主要影响原仓"],answer:0,explanation:"加仓部分的获利空间来自其卖价到回补价的距离，过近会削弱组合退出设想。它不只影响原仓，也不是把两次入场挤近就能增加利润。",id:"19D-K11-1",knowledgeId:"K11",knowledgeTitle:"加仓空间须联系退出目标",time:"08:50–09:04",pdfPages:[1714,1715],type:"理解判断",quote:`08:50 空头想要加仓有不同的做法
08:53 加仓的空头是为了做剥头皮交易
08:57 所以他第二次入场的价格要距离足够远
09:01 至少是剥头皮交易的最小目标
09:04 最好是二三倍最小目标`},{prompt:"价格未到最低收盘先反弹，为什么本课不把案例中那根阳线直接视为空头放弃？",options:["只要最低收盘尚未被触及，空头就仍处于盈利状态","只有价格突破整个日高，才能构成空头放弃信号","反弹强度尚不足，仍有空头保留回测原价的预期"],answer:2,explanation:"本课比较的是当前反弹与可能触发放弃的大阳线强度。最低收盘没碰并不证明空头盈利，也没有要求先破整个日高才可放弃。",id:"19D-K12-1",knowledgeId:"K12",knowledgeTitle:"尚可回测与空头放弃的区别",time:"09:10–10:24",pdfPages:[1716],type:"理解判断",quote:`09:10 价格正在接近最低的收盘价开始反弹
09:17 所以在这里和这里卖出的空头有点担心
09:21 市场可能不会跌到最低收盘价了
09:27 如果突然出现一个非常大的大阳线
09:30 这就是空头放弃的信号
09:33 做空的空头会买回他们的空头仓位
09:36 通常这会导致一个上涨的波段
09:39 然而这个阳线还不足以让空头放弃
09:42 他们仍然希望市场能跌到前期最低的收盘价
09:46 不管他有没有逢高加仓
09:48 都希望能在这里离场
09:50 一些空头没有在这里追空 因为盈亏比已经不好
09:55 现在他们明白市场在做什么卖
09:58 收盘下降趋势结束 空头感到失望
10:01 大概率是小反转 会变成震荡区间
10:04 这意味着市场可能会回撤这个价格
10:08 所以他们会逢高卖出做空
10:10 同样他们的入场价格距离目标位
10:14 至少要有剥头皮最小规模的二三倍
10:17 他们预计在前期最低
10:19 收盘价附近会有买盘出现
10:22 他们希望做一笔剥头皮交易
10:24 所以他们想确保他们的卖出价格距离目标`},{prompt:"约50%的两段反弹后出现收低阴线，本课为什么仍讨论在其下方卖出？",options:["区间或熊旗预期仍在，反转触发且离回补目标有空间","50%反弹已确认强下降恢复，阴线大小和目标距离次要","两段上涨已结束，后续可仅按次数预期等长下跌目标"],answer:0,explanation:"课程保留背景、反转信号和退出空间。50%或两段次数都不是单独确认强下降、指定等长目标的充分条件。",id:"19D-K13-1",knowledgeId:"K13",knowledgeTitle:"两段约半幅反弹中的做空触发",time:"10:38–11:47",pdfPages:[1716],type:"理解判断",quote:`10:38 这样的反弹是否足以让空头放弃？
10:42 尽管这确实是很不错的反弹
10:45 但这仍然是大约50%反弹
10:49 并且是两段式上涨
10:51 一回调二出现了一个收在最低的阴线
10:55 一些空头会在这根K线下方卖出
10:58 对于那些卖在这个最低收盘价的空头而言
11:01 他们会卖所有K线的收盘
11:03 他们在这里卖出之后
11:05 在目标价上方一三倍的最小
11:08 波头皮距离的地方卖出更多
11:10 其他在这里做空的空头
11:12 只会在阴线下方加仓做空
11:15 比如在这根阴线的下方
11:17 他们在这里加仓做空的前提是
11:21 这里距离他们初始的入场价格至少
11:25 有最小剥头皮规模的二三倍
11:28 他们希望做剥头皮交易
11:30 他们在这根K线下方挂突破卖单
11:33 订单在这里成交
11:35 然后希望能在这里止盈离场
11:38 由于他们在目标价上方二三倍
11:40 最小剥头皮规模的距离卖出
11:45 当市场回到这里时
11:47 他们可以赚到二三倍最小剥头皮的利润`},{prompt:"图中部小蓝框所标的回撤未碰到最低收盘红线就回升，课程用什么机制解释？",options:["原最低收盘已精确守住，原价买单成交后才出现这次反弹","空头急于回补并抬高买价，多头也买，反弹可提前发生","主要是新多头提前入场，空头仍只在目标下方等待回补"],answer:1,explanation:"图中小蓝框的价格尚未到原线，本课解释为双方提前买入，空头还会提高回补价。不能把未触线说成精确到价，也不能排除空头的提前回补。",id:"19D-K14-1",knowledgeId:"K14",knowledgeTitle:"急于回补而未到目标",time:"11:52–12:16",pdfPages:[1716],type:"图表应用",quote:`11:52 有太多空头想在这里买入
11:55 导致市场无法到达那里
11:57 所以空头开始抬高抬他们的限价卖单
12:01 以防价格无法达到目标位
12:03 提高自己订单成交的概率
12:05 这些空头急切的想要买入 多头也是一样
12:08 多头也在做同样的事情
12:10 因为他们知道这里会有买盘反弹
12:13 足够强势 所以下方很可能会有买盘
12:16 最终没有碰到目标价 价格没有碰到那条线`,image:{src:"/charts/19d-front-run.webp",solutionSrc:"/charts/19d-front-run-solution.webp",page:1716,alt:"原课件第1716页图表局部"}},{prompt:"课程允许讨论第二、第三次做空入场时，要求一起考虑哪项约束？",options:["预先规划小仓位与总风险，止损仍有结构依据","先按正常仓位入场，再随反弹强弱增加相同仓位","把止损固定放在最新阴线高点，抵消每次新增仓位"],answer:0,explanation:"原文强调很小仓位、事前考虑加仓和总风险，并指向最近重要高点。正常仓位机械增加或随意收紧止损，不能替代这套约束。",id:"19D-K15-1",knowledgeId:"K15",knowledgeTitle:"多次加仓前的风险规划",time:"12:23–12:57",pdfPages:[1716],type:"理解判断",quote:`12:23 一些空头卖在前期最低的收盘价
12:26 然后他们在上方二三倍剥头皮规模的地方加仓做空
12:31 然后他们会在阴线下方再次加仓做空
12:35 如果这个入场价格距离目标
12:38 位有二三倍剥头皮的规模
12:40 如果你在这里卖出做空
12:43 然后在这里和这里加仓
12:45 你就必须用很小很小的仓位住
12:48 开仓前想清楚是否之后打算加仓
12:51 确保这笔交易的风险不会大于其他交易
12:55 这些空头的初始止损在哪里？
12:57 在这里最近一个重要高点的上方`},{prompt:"最低收盘多次引发反弹，后来仍被跌破。应怎样理解此前支撑？",options:["它只是假支撑，因为最后跌破说明之前买盘并不存在","它曾吸引回补买盘，但不保证区间最终向哪边突破","它仍属强卖收盘趋势，反弹次数不影响原先下跌节奏"],answer:1,explanation:"两种错误说法分别用最终结果否定已发生的买盘、忽略强反弹后的区间变化。课程把支撑反应和最终突破方向分开。",id:"19D-K16-1",knowledgeId:"K16",knowledgeTitle:"最低收盘支撑与最终突破",time:"13:03–14:28",pdfPages:[1717],type:"理解判断",quote:`13:03 市场跌回到这里时发生了什么？
13:07 获得了支撑
13:08 前期最低的收盘价是支撑之前卖出的空头买入
13:13 回补他们的空头仓位
13:15 如果他们加仓了 他们加仓的部分可以赚钱
13:18 如果他们没有在这里卖出
13:21 而是直接在这里或这里开仓做空
13:24 他们会买入止盈
13:26 多头知道空头会在这里买入
13:28 所以多头也会买入 造成了价格的反弹
13:36 空头止盈
13:41 空投在前期最低的收盘价挂限价买单
13:50 当市场跌到前期最低的收盘价时
13:53 订单成交买入 这意味着空头在买入
13:57 而多头本来就一直在买入
13:59 所以前期最低的收盘价变成了支撑
14:10 足够强势的反弹很可能处于震荡区间
14:14 交易者在前期最低的收盘价买入
14:17 制造了又一次反弹
14:19 一旦形成了震荡区间
14:21 最终有50%的概率下降趋势会恢复
14:24 50%的概率趋势会反转上涨
14:28 这里空头成功的让趋势恢复下跌`,referenceImage:{src:"/charts/19d-low-close-solution.webp",page:1717,alt:"第1717页课件整页讲解",kind:"课件整页"}},{prompt:"本段提到向下恢复与向上反转约各50%，这个描述处于哪种背景？",options:["足够强反弹后已经形成的震荡区间","任何一次触到最低收盘但尚无后续反应的瞬间","原先连续大阴线、空头仍急于卖收盘的阶段"],answer:0,explanation:"原文先说已经形成区间，再描述双方可能方向。不能把这个课堂近似数字移到强趋势阶段或孤立触线瞬间。",id:"19D-K16-2",knowledgeId:"K16",knowledgeTitle:"最低收盘支撑与最终突破",time:"13:03–14:28",pdfPages:[1717],type:"变式辨析",quote:`13:03 市场跌回到这里时发生了什么？
13:07 获得了支撑
13:08 前期最低的收盘价是支撑之前卖出的空头买入
13:13 回补他们的空头仓位
13:15 如果他们加仓了 他们加仓的部分可以赚钱
13:18 如果他们没有在这里卖出
13:21 而是直接在这里或这里开仓做空
13:24 他们会买入止盈
13:26 多头知道空头会在这里买入
13:28 所以多头也会买入 造成了价格的反弹
13:36 空头止盈
13:41 空投在前期最低的收盘价挂限价买单
13:50 当市场跌到前期最低的收盘价时
13:53 订单成交买入 这意味着空头在买入
13:57 而多头本来就一直在买入
13:59 所以前期最低的收盘价变成了支撑
14:10 足够强势的反弹很可能处于震荡区间
14:14 交易者在前期最低的收盘价买入
14:17 制造了又一次反弹
14:19 一旦形成了震荡区间
14:21 最终有50%的概率下降趋势会恢复
14:24 50%的概率趋势会反转上涨
14:28 这里空头成功的让趋势恢复下跌`},{prompt:"有空头未在最低收盘回补，预期迅速跌破；实际却反转上涨。课程接着讨论什么？",options:["预期未兑现，持有空头可能在反转时退出","支撑已多次测试，持有空头仍按迅速下破等待","既有波段目标，持有空头把反弹都看作新增卖点"],answer:0,explanation:"课程说若未迅速跌破、反转上涨，那些没在最低收盘退出的空头会离场。测试次数和波段目标都不能替代失败后的更新。",id:"19D-K17-1",knowledgeId:"K17",knowledgeTitle:"持有等跌破与反转退出",time:"14:32–15:05",pdfPages:[1717],type:"理解判断",quote:`14:28 这里空头成功的让趋势恢复下跌
14:32 要知道无论空头在哪里买入
14:35 多头总是在买入的
14:37 多头也会在那个最低的收盘价买入
14:44 一些多头会在反转上涨时买入
14:47 另外一些空头会坚定持有
14:50 波段交易者押注最终还会向下强势的跌破
14:54 就像这里所发生
14:56 他们希望价格快速下跌
14:58 如果价格没有跌破 而是像这样反转上涨
15:01 那些没有在最低收盘价离场的空头
15:05 会在价格反转上涨时离场`},{prompt:"区间里多头合理买入后下跌、低位加仓，回到原买价时退出。原买价此时为什么成阻力？",options:["最初买入合理，因此回原价应主要是再次买入","低位加仓使均价下降，因此原价失去任何参考作用","多头回原价卖出退出，使该区域吸引卖盘"],answer:2,explanation:"当前角色由这次回测时的退出卖盘决定。合理买入不固定以后仍买，均价下降也不取消原价的退出作用。",id:"19D-K18-1",knowledgeId:"K18",knowledgeTitle:"区间合理买价也可成为阻力",time:"15:10–16:18",pdfPages:[1718],type:"理解判断",quote:`15:10 在震荡区间或弱下降趋势中
15:13 每当出现合理的做多信号
15:16 多头就会买入 并且会在更低的位置加仓
15:21 上涨趋势可能正在变成震荡
15:24 区间低点抬高的双底牛旗
15:26 多头会在这里买入押注
15:29 这不足以把上涨趋势转变为下降趋势
15:34 然而这可能足以将其转变为震荡区间
15:39 多头会在这里买入压住双底反转
15:42 他们知道就算再下跌一些
15:45 也不会变成下降趋势
15:47 所以一些多头会使用较宽的初始止损
15:51 然后在阳线上方加仓买入更多
15:54 当价格回到他们初始的入场价时会发生什么？
15:59 他们加仓的部分可以止盈离场
16:02 初始的仓位可以打平离场
16:05 这意味着初始入场价是阻力
16:08 因为有多头在那个价格卖出
16:18 多头在某个价格卖出 使其成为阻力`,referenceImage:{src:"/charts/19d-buy-exit-solution.webp",page:1718,alt:"第1718页课件整页讲解",kind:"课件整页"}},{prompt:"两个案例都涉及多头原入场价：一次回测时多头计划再买，另一次多头计划退出。为何前者可成支撑、后者可成阻力？",options:["这里回测有再买意愿，前页回原价主要是退出","这里未精确碰价，前页精确碰价，所以角色相反","这里是突破价，前页是收盘价，所以买卖角色已固定"],answer:0,explanation:"关键是持仓者当前打算再买还是退出；不是单靠价格名称或是否精确碰价。相同入场价在不同背景中可以吸引不同方向订单。",id:"19D-K19-1",knowledgeId:"K19",knowledgeTitle:"多头突破回测的再买支撑",time:"16:26–17:47",pdfPages:[1720],type:"理解判断",quote:`16:26 现在我们来讲突破回撤
16:29 突破之后价格回撤突破点
16:38 市场反转上涨不错的做多信号K线反转
16:43 上涨不错的做多信号K线入场K线也很漂亮
16:48 这个入场K线也是
16:53 买入后市场经常回撤初始的
16:57 入场价来测试多头是否会再次
17:01 在那个价格买入
17:03 这里跌破了初始的入场价
17:05 这里再次跌破多头也再次买入
17:09 多头在初始入场价买入
17:12 低点降低的大反转很强势
17:15 三推楔形底 123小双底
17:19 不错的做多信号
17:21 OK线价格回撤了多头的入场点
17:25 多头再次买入
17:27 回调再次测试那个价格 多头再次买入
17:31 这两次回撤市场没有完全跌到入场价
17:37 然而这个入场价是支撑
17:42 这里略微跌破了入场价
17:47 这里没有完全碰到做多信号K的高点`,referenceImage:{src:"/charts/19d-bull-test-solution.webp",page:1720,alt:"第1720页课件整页讲解",kind:"课件整页"}},{prompt:"强反转后的两次回调没有完全跌到多头原入场价就转涨，本课如何处理？",options:["等再次精确到价后，才追认前两次为有效支撑测试","仍可识别为该区域的测试，观察提前出现的买盘","先排除突破回测，改按与旧入场无关的新买点解释"],answer:1,explanation:"本课直接保留未碰线的测试意义；它不要求日后精确到价才能解释当下买盘，也没有因差一点而删除旧入场价。",id:"19D-K19-2",knowledgeId:"K19",knowledgeTitle:"多头突破回测的再买支撑",time:"16:26–17:47",pdfPages:[1720],type:"变式辨析",quote:`16:26 现在我们来讲突破回撤
16:29 突破之后价格回撤突破点
16:38 市场反转上涨不错的做多信号K线反转
16:43 上涨不错的做多信号K线入场K线也很漂亮
16:48 这个入场K线也是
16:53 买入后市场经常回撤初始的
16:57 入场价来测试多头是否会再次
17:01 在那个价格买入
17:03 这里跌破了初始的入场价
17:05 这里再次跌破多头也再次买入
17:09 多头在初始入场价买入
17:12 低点降低的大反转很强势
17:15 三推楔形底 123小双底
17:19 不错的做多信号
17:21 OK线价格回撤了多头的入场点
17:25 多头再次买入
17:27 回调再次测试那个价格 多头再次买入
17:31 这两次回撤市场没有完全跌到入场价
17:37 然而这个入场价是支撑
17:42 这里略微跌破了入场价
17:47 这里没有完全碰到做多信号K的高点`},{prompt:"课中有一个做多突破单：价格涨过做多信号K的最高价后入场。假设价格最小变动单位叫一个 tick，初始入场价相对信号K最高价在哪里？",options:["做多入场K的收盘价这一位置","做多信号K的最高价这一位置","做多信号K高点上方一个tick"],answer:2,explanation:"本例在做多信号K最高价上方一个 tick 入场。例如最高价100，一个 tick 是0.25，入场价就是100.25。信号K最高价是100，不等于入场价；入场K收盘价也是另一个位置。",id:"19D-K20-1",knowledgeId:"K20",knowledgeTitle:"信号高点与实际入场价",time:"17:52–18:17",pdfPages:[1720],type:"理解判断",quote:`17:47 这里没有完全碰到做多信号K的高点
17:52 当我说入场价
17:53 我指的是做多信号K线最高点上方一个take
18:01 在强势的反转之后
18:05 很多多头会剥头皮止盈至少一部分仓位
18:09 然后挂限价买单
18:11 想要再次买入限价单
18:13 要么挂在信号K线的最高点
18:15 要么挂在他们的初始入场价
18:17 就在最高点上方一个take`},{prompt:"价格上涨后开始回落。有人原本想等价格跌到信号K的高点100再买，但后来把买单价格提高到102。课中怎样解释他提高买入价的原因？",options:["认为价格会跌到更低处，提高买价是为了等更低价成交","担心价格跌不到100就重新上涨，提高买价争取买到","认为100附近的支撑已失效，把102当作保护止损"],answer:1,explanation:"提高限价买价表示急于买入，担心等不到原水平。它不是保护止损，也不是因为确定将回得更深才提高买价。",id:"19D-K21-1",knowledgeId:"K21",knowledgeTitle:"抬高买价表示急切",time:"18:19–18:50",pdfPages:[1720],type:"理解判断",quote:`18:17 就在最高点上方一个take
18:19 如果有足够多的多头在这里挂买单
18:22 市场就会再次上涨
18:25 这里也是一样
18:29 多头在入场价上方买入
18:31 他们非常急切的买入
18:33 很多多头抬高了他们的限价买单
18:36 以防价格不会跌到初始信号K线的高点
18:40 这说明多头在急切的买入 这里也是一样
18:45 低点抬高的双底 尽管后面没有涨太多
18:50 但多头确实在初始信号K`},{prompt:"价格上涨后回落到原来买入的区域。一人提前设置买价，等价格跌到该价买入；另一人先等价格转涨、出现阳线，再等价格涨过阳线高点买入。两人的主要区别是什么？",options:["限价者必须买在原价，突破者必须买在原高点以上","限价者等先出现阳线，突破者在下跌到原价时成交","限价者等到区域成交，突破者等转涨后的触发"],answer:2,explanation:"两种入场的差别是到价与反转后的触发。不能颠倒时机，也未限定一个必须精确原价、另一个必须突破整段高点。",id:"19D-K22-1",knowledgeId:"K22",knowledgeTitle:"回测中的限价与突破单",time:"18:58–19:08",pdfPages:[1720],type:"理解判断",quote:`18:58 其他多头会等反转信号再买入
19:02 突破之后回测突破点
19:05 他们会在反转上涨时买入
19:08 在这根K线或这根阳线的上方买入`},{prompt:"价格原本在区间内上下波动。有人做空后价格上涨，他考虑在更高价再次做空。按本课，这样理解该例时必须保留什么前提？",options:["只要卖价高于初始卖价，组合均价便足以支持加仓","区间判断仍有效，例如向上突破的跟随不佳","只要出现了第三推，原先区间判断便无需再检查"],answer:1,explanation:"均价改善不是背景仍有效的证明，三推次数也不能免除复查。原课明确说“如果震荡区间的前提仍然有效”。",id:"19D-K23-1",knowledgeId:"K23",knowledgeTitle:"区间做空加仓的前提",time:"19:19–20:21",pdfPages:[1721],type:"理解判断",quote:`19:19 在弱上涨趋势或震荡区间中
19:22 每当出现做空信号的时候 空头会卖出做空
19:27 例如这个上涨趋势可能是楔形
19:31 顶一二三第一段下跌小反转
19:35 空头把它看作高点降低的双底
19:38 期待价格会跌到这个甚至这个重要的低点
19:41 不错的阴线 一些空头会在这里开仓做空压住
19:45 就算再次向上突破
19:47 最多也就是震荡区间 在震荡区间中
19:50 他们可以逢高加仓卖出更多
19:53 期望市场回到他们的初始入场价
20:00 如果震荡区间的前提仍然有效
20:03 确实大概率是震荡区间
20:05 多头突破跟随不好 阳线跟随不好
20:08 这个整体可能是一个大的震荡区间
20:12 所以一些空头会加仓
20:13 比如在这个反转阴线的最低点下方小
20:17 双顶一二高点抬高的大反转上涨趋势
20:21 空头突破更高的高点`},{prompt:"区间中空头先做空、在更高处加仓，价格回到原卖价时两笔都买回。为什么原卖价可能成为支撑？",options:["原卖价低于后来加仓价，因此只能作下方止盈终点","原做空位置合理，空头回原价仍应主要重新卖出","空头在原卖价回补退出，买盘使其成支撑"],answer:2,explanation:"本页明确解释回补形成买盘，所以原卖价可成支撑。不能从最初做空方向固定当前方向，也不能将它只视为个人目标而排除价格作用。",id:"19D-K24-1",knowledgeId:"K24",knowledgeTitle:"空头原卖价变为回补支撑",time:"20:26–21:07",pdfPages:[1721],type:"理解判断",quote:`20:26 之前在这里做空的空头会
20:28 在初始入场价挂限价买单
20:31 这样他们的初始仓位就可以打平离场
20:37 在这里卖出的空头也会在那里离场
20:40 因为他们知道失望的空头会在这个价格买入
20:45 如果空头在这里买入就可能会导致反弹
20:49 在这里卖出的空头也会在这里买入
20:52 因此做空信号K线的低点下方
20:55 一个take就变成了支撑
21:03 支撑是磁铁 市场往往会被吸到支撑位
21:07 就像这里一样`},{prompt:"低二做空后价格下跌再反弹至原卖价，获利空头想再次做空、失望多头想退出。为什么此处可能成为阻力？",options:["空头在原卖价回补，使买盘集中并形成阻力","多头在原卖价再次买入，使买盘集中并形成阻力","本次是反弹回测，旧空头再卖与失望多头退出都提供卖盘"],answer:2,explanation:"空头再次开空和多头平多都是卖出，可能形成阻力；空头回补和多头开仓都是买入，不能解释本次卖盘。",id:"19D-K25-1",knowledgeId:"K25",knowledgeTitle:"空头突破后的回测",time:"21:15–22:31",pdfPages:[1722],type:"理解判断",quote:`21:15 有很多震荡区间的价格行为 第一段回调
21:19 第二段注可能是震荡区间
21:22 中的第二段陷阱失败的突破
21:25 第二背景是震荡区间或弱上涨趋势
21:28 所以一些空头会在这根K
21:31 线的低点下方挂突破卖单
21:34 订单会在这里成交
21:37 市场经常会反弹回测那个入场价
21:40 有一些多头会在这个低点挂限价买单
21:44 他们认为这有可能是一个上涨趋势的开始
21:48 他们使用了非常宽的初始止损
21:51 一旦他们开始看到这个
21:53 他们希望市场会回到这里
21:55 给他们打平离场的机会
21:58 随着市场下跌 多头越来越失望
22:01 他们非常希望能回到这里
22:04 这样他们就可以打平离场
22:07 所以当市场下跌时
22:09 有多头希望能够卖出他们的多头仓位
22:12 有多头希望在那里卖出
22:14 多头卖出的行为制造了阻力
22:17 还有之前在这里做空获利的空头
22:20 当市场再次回到那里时
22:22 他们会想 上次我在这里做空赚到钱了
22:26 价格又回来了 我要再次做空
22:28 所以多头和空头都在这里卖出
22:31 就在做空信号K线的低点下方一个take`,referenceImage:{src:"/charts/19d-bear-test-solution.webp",page:1722,alt:"第1722页课件整页讲解",kind:"课件整页"}},{prompt:"多头买入后价格下跌，反弹回原买价附近时他没有卖出，后来出现向下反转的阴线。课程说他可以在哪里触发卖出，退出已有多仓？",options:["阴线低点下方卖出，退出已有多仓","把卖单移到阴线高点，等待更好退出价","仍在原入场价挂卖单，等下一次反弹回本"],answer:0,explanation:"本课处理的是已经错过水平线退出、又看到转跌的情形。继续抬高等待没有回应新的失败信息，低点下方卖出在这里是平多。",id:"19D-K26-1",knowledgeId:"K26",knowledgeTitle:"未限价退出后的触发",time:"23:12–23:24",pdfPages:[1722],type:"理解判断",quote:`23:12 一些多头没有在蓝线离场
23:14 因为他们期待上涨趋势恢复
23:16 然而一旦他们看到市场开始反转下跌
23:20 他们就会在阴线下方一个take挂突破卖单离场
23:24 订单会在这里触发成交棕色框框`},{prompt:"价格跌破上涨趋势线后小幅反弹，接着跌破反弹低点，有人在该处做空并获利。后来价格又涨回这个做空价附近，为什么课程仍关注这个位置？",options:["前次获利空头需要回补，被套多头需要重新追涨","前次获利空头可能重入，被套多头可能退出","该价与趋势线交叉后，后续回测应以两者中点为准"],answer:1,explanation:"这里重复的卖出意愿来自不同身份。空头回补和新多头买入都是买盘，不能解释本页的回测阻力；取中点也非本课方法。",id:"19D-K27-1",knowledgeId:"K27",knowledgeTitle:"趋势线跌破后的合理卖价",time:"23:29–25:02",pdfPages:[1723],type:"理解判断",quote:`23:29 上涨趋势线背景是震荡
23:33 区间高点降低的大反转
23:36 价格跌破了趋势线
23:38 空头会在反弹K线的下方卖出做空
23:41 跌破上涨趋势线后有一个小反弹
23:44 空头会在那根反弹小阳线的低点下方卖出
23:48 他们的突破卖单会在那根K线
23:51 的低点下方一个take成交
23:56 同时有一些多头会在那根K线下方买入
23:59 压住空头的反转会失败
24:02 压铸趋势还会继续上涨
24:04 在这里买入的多头会在更低的位置买入更多
24:08 希望最终能够回到这里打平离场
24:11 在这里做空的空头赚到钱了
24:13 如果市场回到那个价格
24:15 他们会想 嘿嘿 上次我在那个价格卖出
24:19 做空赚了不少钱
24:20 如果市场再次回到那个价格
24:23 我就再做空一次
24:25 多头和空头都在这里卖出
24:28 所以它变成了阻力
24:31 空投合理的做空入场价格成为阻力
24:40 多头在这里买入 在更低的位置买入更多
24:43 比如在这根K线上方加仓
24:46 这些多头会在那里离场
24:48 所以有多头在卖出
24:51 没有及时用限价卖单离场的
24:54 多头必须在反转下跌时离场
24:58 以防这是一个下降趋势的开始
25:01 当市场回到目标价后
25:02 他们会在前一根K线的低点下方离场`,referenceImage:{src:"/charts/19d-line-test-solution.webp",page:1723,alt:"第1723页课件整页讲解",kind:"课件整页"}},{prompt:"本例低位加仓多头等回原价退出，却未用限价单及时卖出；看到下转后，为什么讨论前根K低点下方离场？",options:["防止继续等待时行情发展成下降趋势","因为原价已永久失去阻力作用，需要重新建立空仓","因为低点下方卖出可保证仍按两次买入均价成交"],answer:0,explanation:"原课的理由是防范进一步转跌。价格触发并不保证按均价成交，平多也不自动等于新开空。",id:"19D-K27-2",knowledgeId:"K27",knowledgeTitle:"趋势线跌破后的合理卖价",time:"23:29–25:02",pdfPages:[1723],type:"变式辨析",quote:`23:29 上涨趋势线背景是震荡
23:33 区间高点降低的大反转
23:36 价格跌破了趋势线
23:38 空头会在反弹K线的下方卖出做空
23:41 跌破上涨趋势线后有一个小反弹
23:44 空头会在那根反弹小阳线的低点下方卖出
23:48 他们的突破卖单会在那根K线
23:51 的低点下方一个take成交
23:56 同时有一些多头会在那根K线下方买入
23:59 压住空头的反转会失败
24:02 压铸趋势还会继续上涨
24:04 在这里买入的多头会在更低的位置买入更多
24:08 希望最终能够回到这里打平离场
24:11 在这里做空的空头赚到钱了
24:13 如果市场回到那个价格
24:15 他们会想 嘿嘿 上次我在那个价格卖出
24:19 做空赚了不少钱
24:20 如果市场再次回到那个价格
24:23 我就再做空一次
24:25 多头和空头都在这里卖出
24:28 所以它变成了阻力
24:31 空投合理的做空入场价格成为阻力
24:40 多头在这里买入 在更低的位置买入更多
24:43 比如在这根K线上方加仓
24:46 这些多头会在那里离场
24:48 所以有多头在卖出
24:51 没有及时用限价卖单离场的
24:54 多头必须在反转下跌时离场
24:58 以防这是一个下降趋势的开始
25:01 当市场回到目标价后
25:02 他们会在前一根K线的低点下方离场`},{prompt:"大阳入场K之后，回调稍跌破该K低点便转涨。按本课，这次低点测试怎样理解？",options:["入场K底部仍可提供支撑，需看稍破后的反应","入场K底部已失效，应把整根K高度向下投射为目标","入场K低点失守已确认大反转，随后转涨只是回补"],answer:0,explanation:"本页直接展示稍破入场K低点后反弹，不能把单根K低点当成所有级别的趋势失效点，也未要求一破就向下测量。",id:"19D-K28-1",knowledgeId:"K28",knowledgeTitle:"多头入场与信号K低点支撑",time:"25:12–26:07",pdfPages:[1724],type:"理解判断",quote:`25:12 反转上涨 多头买入非常漂亮的入场K线
25:17 市场跌破了入场K线的低点
25:20 然后再次反转上涨
25:22 市场经常会稍微跌破入场K线的低点
25:25 然后反转上涨
25:26 一些多头会在那根K线的低点挂限价买单
25:30 这是一根很大的阳线
25:32 因此是一个抢购高潮K线
25:35 市场经常会稍微跌破抢购高潮K线的底部
25:39 然后再次上涨
25:40 就像这里一样
25:42 一些多头会在这里挂限价单买入
25:46 一些多头会在反转上涨时买入
25:49 尤其是在一个漂亮的阳线上方
25:53 这里有一个做多信号K线
25:55 一些多头会在那个低点挂限价单买入
25:59 市场测试前期的低点
26:01 一些多头会在反转上涨时用突破买单买入入场K线的底部信号
26:07 K线的底部都是支撑`,referenceImage:{src:"/charts/19d-entry-low-solution.webp",page:1724,alt:"第1724页课件整页讲解",kind:"课件整页"}},{prompt:"价格回调测试做多信号K低点，本课允许哪种观察方式？",options:["只要入场K低点未守住，信号K低点不再参考","参考信号K低点买盘，或等转涨后阳线上方触发","先等信号K高点重回，再把其低点作为离场目标"],answer:1,explanation:"本页分别展示入场K低点与信号K低点的支撑。一个位置被测试不删除另一位置，也没有要求先站回信号高点才允许观察其低点。",id:"19D-K28-2",knowledgeId:"K28",knowledgeTitle:"多头入场与信号K低点支撑",time:"25:12–26:07",pdfPages:[1724],type:"变式辨析",quote:`25:12 反转上涨 多头买入非常漂亮的入场K线
25:17 市场跌破了入场K线的低点
25:20 然后再次反转上涨
25:22 市场经常会稍微跌破入场K线的低点
25:25 然后反转上涨
25:26 一些多头会在那根K线的低点挂限价买单
25:30 这是一根很大的阳线
25:32 因此是一个抢购高潮K线
25:35 市场经常会稍微跌破抢购高潮K线的底部
25:39 然后再次上涨
25:40 就像这里一样
25:42 一些多头会在这里挂限价单买入
25:46 一些多头会在反转上涨时买入
25:49 尤其是在一个漂亮的阳线上方
25:53 这里有一个做多信号K线
25:55 一些多头会在那个低点挂限价单买入
25:59 市场测试前期的低点
26:01 一些多头会在反转上涨时用突破买单买入入场K线的底部信号
26:07 K线的底部都是支撑`},{prompt:"反弹略超大阴入场K高点，有空头止损，也有空头新做空。这两种行为怎样区分？",options:["有空头回补说明此处应主要作支撑，不再作阻力","有空头新卖说明近止损回补不应计入该处订单","近止损空头买回，另一些空头在区域新卖出"],answer:2,explanation:"同一区域可能同时有空头止损买回与新做空卖出。保留一类订单不排除另一类，不能用单一身份统一该处方向。",id:"19D-K29-1",knowledgeId:"K29",knowledgeTitle:"空头入场与信号K高点阻力",time:"26:16–27:16",pdfPages:[1725],type:"图表应用",quote:`26:16 两段上涨一而不错的阴线
26:19 入场K线是非常强的大阴线
26:22 这是做空信号K线这是做空
26:25 入场K线这是一个很大的阴线
26:28 因此是抛售高潮K线
26:30 抛售高潮K线的高点总是一个磁铁
26:34 理论上一些空投在那根K线上方有保护性止损
26:39 若空头会在那里离场
26:41 助弱空头在震荡区间的下沿不止盈
26:44 涨回来时心态崩溃离场
26:46 在最高强 空头会在那里卖出
26:49 注强空头知道这是震荡区间
26:52 所以逢高卖出赚快钱
26:54 而强空头卖出意味着那个
26:57 入场K线的高点是阻力
27:00 空头会在那里挂限价卖单做空
27:03 或者在反转下跌时卖出
27:05 尤其是在阴线下方挂突破卖单
27:10 略微突破了空头入场K线的最高点
27:13 空头会在那个价格挂限价卖单或
27:16 在反转下跌时挂突破卖单做空`,image:{src:"/charts/19d-entry-high.webp",solutionSrc:"/charts/19d-entry-high-solution.webp",page:1725,alt:"原课件第1725页图表局部"}},{prompt:"本课在空头入场K与信号K高点附近讨论哪些卖出方式？",options:["只在原信号K低点卖出，高点区域只供空头止损","先等精确超过入场K高点，才允许把区域当阻力","区域附近限价卖，或转跌后在阴线下方突破卖"],answer:2,explanation:"本页同时给限价和反转下方突破卖。并未要求精确越过高点才算阻力，高点也不只是保护止损位置。",id:"19D-K29-2",knowledgeId:"K29",knowledgeTitle:"空头入场与信号K高点阻力",time:"26:16–27:16",pdfPages:[1725],type:"变式辨析",quote:`26:16 两段上涨一而不错的阴线
26:19 入场K线是非常强的大阴线
26:22 这是做空信号K线这是做空
26:25 入场K线这是一个很大的阴线
26:28 因此是抛售高潮K线
26:30 抛售高潮K线的高点总是一个磁铁
26:34 理论上一些空投在那根K线上方有保护性止损
26:39 若空头会在那里离场
26:41 助弱空头在震荡区间的下沿不止盈
26:44 涨回来时心态崩溃离场
26:46 在最高强 空头会在那里卖出
26:49 注强空头知道这是震荡区间
26:52 所以逢高卖出赚快钱
26:54 而强空头卖出意味着那个
26:57 入场K线的高点是阻力
27:00 空头会在那里挂限价卖单做空
27:03 或者在反转下跌时卖出
27:05 尤其是在阴线下方挂突破卖单
27:10 略微突破了空头入场K线的最高点
27:13 空头会在那个价格挂限价卖单或
27:16 在反转下跌时挂突破卖单做空`}],sourceFile:"BTC PAF 19D Support and Resistance_中文 (源语言).srt"},{id:"19E",title:"重要高低点、半幅回调与高潮",range:"00:00–25:15",revision:"support-19e-v1",notes:["最高/最低收盘与影线极值分开识别；失望持仓者提前退出，可使价格未精确回到原入场价就反转。","组合退出不等于每笔都打平；强反向波动后，课中加仓者可能只求组合尽量无损。中点简化计算要有等量、忽略费用等明确条件。","重要高低点须看之后是否强突破创新高/新低；越过次要点、略破半幅和跌破重要趋势起点，含义不同。","50%回调是区域参考，限价到价与反转突破触发分开；精确碰价不确保订单成交，两根强反向K也可使交易者多等一次信号。","长时间趋势后最大的K线可能是高潮衰竭，区分局部高潮起点与最后重要高低点。撤销原趋势前提后仍要在区间和反向趋势之间继续判断。","失败双顶/双底可引出反向测量，目标附近的止盈与剥头皮买卖不等于新的强趋势已经确认；看不到左侧时保留案例假设。"],group:"支撑与阻力",knowledgePoints:[{id:"K01",title:"收盘极值与影线极值",summary:"机构使用线形图只看到收盘；当天/波段最高最低收盘也可形成支撑阻力，须与影线的最高最低价区别。",time:"00:10–00:26",pdfPages:[1729,1730,1731],questionIds:["19E-K01-1"]},{id:"K02",title:"失望多头提前降低退出价",summary:"强卖压后多头可能把限价卖单放在最高收盘略下方，接受少亏退出；过多提前卖出可使反弹到不了原价。",time:"00:56–01:46",pdfPages:[1730],questionIds:["19E-K02-1"]},{id:"K03",title:"空头提前卖出与多头被套",summary:"空头知道失望多头想退出，会在最高收盘附近或略低处卖出；未到原价就下转，可促被套多头放弃，卖出与开空共同推动下降。",time:"01:51–02:34",pdfPages:[1730],questionIds:["19E-K03-1"]},{id:"K04",title:"最低收盘附近的回补与开多",summary:"反弹使卖在最低收盘的空头失望，可能回原价或稍高处买回；多头也可在那里等回调买入，使低收盘成支撑。",time:"02:41–03:52",pdfPages:[1731],questionIds:["19E-K04-1"]},{id:"K05",title:"未回原卖价与放弃上涨",summary:"某些空头能回原价打平，另一些等不到回测，被套后随价格越涨越高放弃；强制回补可以推动一段上涨。",time:"03:57–04:17",pdfPages:[1731],questionIds:["19E-K05-1"]},{id:"K06",title:"组合退出目标改变",summary:"空头在很强反弹后加仓，可能从原仓打平且加仓盈利，改为尽量让整个组合不亏；课中用两次入场中点说明回补支撑。",time:"04:24–05:37",pdfPages:[1732,1733],questionIds:["19E-K06-1","19E-K06-2"]},{id:"K07",title:"区间低位追空例图的用途",summary:"本页可能区间中，最大阴线也可能是第二段陷阱；课程明确多数交易者不会在此低位追空，例图是解释持仓与支撑机制。",time:"05:48–06:20",pdfPages:[1732,1733],questionIds:["19E-K07-1"]},{id:"K08",title:"多头组合中点退出成阻力",summary:"强下跌后多头在较低处买入，可能改求组合少亏/打平；两笔等量时中点附近卖出可形成阻力，并可能接近整段下跌的50%反弹。",time:"06:25–07:34",pdfPages:[1734,1735],questionIds:["19E-K08-1","19E-K08-2"]},{id:"K09",title:"高位追涨案例的限制",summary:"潜在区间和双顶背景里，追最高收盘并非多数交易者的选择；课中讨论该持仓只为解释后续退出，不是忽略背景的入场建议。",time:"07:39–08:12",pdfPages:[1734,1735],questionIds:["19E-K09-1"]},{id:"K10",title:"更高低点是趋势条件",summary:"上涨趋势依赖重要低点抬高，前一重要低点既是支撑也是磁铁；市场可能向下测试它，不能以“应守住”推导“不会接近”。",time:"08:18–08:40",pdfPages:[1737],questionIds:["19E-K10-1"]},{id:"K11",title:"高潮起点的双方买盘",summary:"强多头突破/抢购高潮的起点可吸引回测；卖在高位的空头在其下方止盈、看见曾强涨的多头再买，都可提供支撑。",time:"08:45–09:11",pdfPages:[1737,1738],questionIds:["19E-K11-1"]},{id:"K12",title:"相近支撑不必同时失守",summary:"抢购高潮K起点与整段上涨起点可能相近但不同；区间中可略破其中一处而未破另一处，不能把两条线合并后作绝对判断。",time:"09:20–09:46",pdfPages:[1737,1738],questionIds:["19E-K12-1"]},{id:"K13",title:"强上涨前提失效的范围",summary:"重要低点失守使强上涨假设不再成立，仍可能宽上涨通道或区间；不是自动确认强下降趋势。",time:"09:53–10:15",pdfPages:[1737,1738],questionIds:["19E-K13-1"]},{id:"K14",title:"相近阻力与测试深度",summary:"整段下降起点与大阴突破K起点可不同；区间上沿附近两道阻力接近时，反弹可能超一处而不到另一处后转跌。",time:"10:24–11:04",pdfPages:[1739],questionIds:["19E-K14-1"]},{id:"K15",title:"重要高点被突破后的重估",summary:"重要高点被反弹突破，使强下降前提不再合理；可以是宽空通道、区间甚至上涨，而不是必然只剩上涨。",time:"11:04–11:39",pdfPages:[1739,1746],questionIds:["19E-K15-1"]},{id:"K16",title:"50%回调与名称",summary:"讲师特别重视50%回调，不以它是否被斐波那契交易者采用来解释其重要性；记住名称不能替代背景。",time:"11:44–12:16",pdfPages:[1741],questionIds:["19E-K16-1"]},{id:"K17",title:"上涨半幅的限价与反转买入",summary:"强上涨后的50%回调可有多头限价买，押注反转失败、上涨恢复；也可等转涨后突破买，两种方法共享背景但触发不同。",time:"12:22–12:50",pdfPages:[1741,1742],questionIds:["19E-K17-1"]},{id:"K18",title:"重要低点须推动强创新高",summary:"某低点之后有强势突破创新高，才成为课程所说的重要低点；只有一根阳线且未创新高的低点可能次要，被破不必结束上涨趋势。",time:"12:57–13:26",pdfPages:[1741,1742],questionIds:["19E-K18-1","19E-K18-2"]},{id:"K19",title:"略破半幅与守住重要低点",summary:"上涨例子略跌破50%再涨是常见测试，半幅不是必须精确守住的趋势失效线；还要区别重要波段起点。",time:"13:33–13:50",pdfPages:[1741,1742],questionIds:["19E-K19-1"]},{id:"K20",title:"碰限价不确保成交",summary:"原课区分刚好碰50%与稍微穿过；仅触及限价不确保成交，未成交者也可等反转阳线上方突破买入。",time:"13:56–14:18",pdfPages:[1742],questionIds:["19E-K20-1"]},{id:"K21",title:"下降半幅、强阳与第二入场",summary:"下降50%反弹可限价卖或等反转阴线下方卖；两根强阳使部分空头等第二次做空，止损参考最近重要高点，非半幅本身。",time:"14:25–15:21",pdfPages:[1743],questionIds:["19E-K21-1","19E-K21-2"]},{id:"K22",title:"次要高点不等于趋势条件",summary:"高点之后没有强势下跌创新低，可能只是次要高点；其被突破仍可属于熊旗或区间上涨，不直接证明下降趋势结束。",time:"15:28–15:57",pdfPages:[1743],questionIds:["19E-K22-1"]},{id:"K23",title:"空头信号与入场K高点",summary:"做空信号K与入场K高点可成阻力；弱空头用较窄止损，强空头可能用更宽结构止损，避免把尚未到区间上沿的位置当最终上沿。",time:"16:10–16:29",pdfPages:[1744],questionIds:["19E-K23-1"]},{id:"K24",title:"窄上涨首次转跌与后续新证据",summary:"窄上涨首次转跌通常小反转，案例最终却发展无尽回调并下跌；反弹高点降低、阳线上方买单反复未触发，是后续空头增强的信息。",time:"16:34–17:10",pdfPages:[1744],questionIds:["19E-K24-1"]},{id:"K25",title:"空头入场K高点的两次失败测试",summary:"多头尝试涨过大阴入场K高点两次失败，形成高点降低双顶熊旗，被套多头放弃可增强卖压；不使用指代有歧义的1 tick数值。",time:"17:21–18:21",pdfPages:[1744],questionIds:["19E-K25-1"]},{id:"K26",title:"后期最大阴线与衰竭缺口",summary:"下跌二十根以上后才出现最大的阴线，课程更偏向后期抛售高潮、衰竭缺口及回补预期，区别于新下跌中段测量型缺口。",time:"18:32–19:23",pdfPages:[1745],questionIds:["19E-K26-1","19E-K26-2"]},{id:"K27",title:"高潮高点与重要高点的层级",summary:"抛售高潮K高点为反弹磁铁；最后重要更低高点来自后续强下跌创新低。超过局部高潮K高点，不一概等于所有级别的下降失效。",time:"19:23–19:52",pdfPages:[1745,1746],questionIds:["19E-K27-1"]},{id:"K28",title:"近止损与预先止盈",summary:"后期最大阴线使部分弱空头怕风险而把止损放其高点上方；强空头预期回测，可能先止盈，而非等近止损被动触发。",time:"19:59–20:12",pdfPages:[1745],questionIds:["19E-K28-1"]},{id:"K29",title:"高潮高点的阶段性交易",summary:"多头可押注衰竭后反弹、在高潮高点附近止盈；强空头预期这些卖盘，可在反弹到该处后做剥头皮。买入与再卖处于不同阶段。",time:"20:12–20:44",pdfPages:[1745],questionIds:["19E-K29-1"]},{id:"K30",title:"失败双顶后的反向目标",summary:"反弹尝试双顶后被多头突破，需考虑双顶反向MM及整个下跌波段高度向上投射；案例更多程序使用整段下跌高度，目标附近出现止盈卖盘。",time:"20:51–21:35",pdfPages:[1745],questionIds:["19E-K30-1"]},{id:"K31",title:"重要更低高点被突破",summary:"最后重要高点之所以重要，是它之后有强下跌创新低；反弹突破后原下降前提不成立，可能区间或上涨。",time:"21:46–21:56",pdfPages:[1746],questionIds:["19E-K31-1"]},{id:"K32",title:"高潮位置判断的可见范围",summary:"左侧资料不足时，不能断言两根强阳一定是后期抢购高潮；课程先假设它在上涨后期，再讨论高潮起点被测试或略破。",time:"22:04–22:46",pdfPages:[1747],questionIds:["19E-K32-1"]},{id:"K33",title:"高潮起点失守后的范围",summary:"若后期抢购高潮起点被跌破，大涨大跌带来区间特征，原上涨至少暂时结束；后续可能区间或下降，支撑处仍可有剥头皮买盘。",time:"23:28–23:38",pdfPages:[1747],questionIds:["19E-K33-1"]},{id:"K34",title:"失败双底与反向下测量",summary:"高潮后反弹可尝试双底；双底既可向上突破到目标，也可失败向下达到反向MM。失败例子到目标后，空头止盈和多头剥头皮买入带来反弹。",time:"23:43–24:03",pdfPages:[1747],questionIds:["19E-K34-1"]}],questions:[{prompt:"这张图是K线图。红色横线标出这段上涨中最高的收盘价，红线上方的影线尖端标出价格实际到过的最高处。如果把同一段行情改画成只连接每根K线收盘价的线形图，图上的前高会对应哪个价位？",options:["红色横线的价位，因为它是这段走势中最高的收盘价","这段上涨最后一根K线的收盘价，因为它是波段结束时的收盘价","红线上方的影线尖端，因为它是这段走势中实际到过的最高价"],answer:0,explanation:"题图展示的是原课件K线图。假如只取每根K线的收盘价来连线，最高的一次收盘就是线形图的前高，对应原图的红线。上影线尖端是盘中触及价，不参与这条连线。课上提到，有些机构看收盘价线形图，因此红线也可能成为阻力参考。",id:"19E-K01-1",knowledgeId:"K01",knowledgeTitle:"收盘极值与影线极值",time:"00:10–00:26",pdfPages:[1729,1730,1731],type:"图表应用",quote:`00:11 日内交易中
00:12 当天最高的收盘价通常是阻力位
00:15 当天最低的收盘价通常是支撑位
00:18 部分原因是很多机构使用的是线性图
00:22 而线形图不显示K线的最高点或最低点
00:26 所以他们只看到当天最高和最低的收盘价`,image:{src:"/charts/19e-high-close.webp",solutionSrc:"/charts/19e-high-close-solution.webp",page:1730,alt:"原课件第1730页，左侧上涨波段顶部的红线及其上方的影线"}},{prompt:"看图中红线及其后连续下跌的K线。假设有多头在红线价位买入，跌下来后，他把退出卖单挂在红线略下方。这说明他的退出目标发生了什么变化？",options:["提高对上涨的预期，以较高卖价争取更多利润","把原价阻力改为支撑，以较低买价增加多仓","减少等待回本的要求，以较低卖价争取成交"],answer:2,explanation:"降低退出卖价是接受少亏，并不是提高盈利目标；退出卖单也不是低位新增买单。它可能造成尚未回原价就遇阻。",id:"19E-K02-1",knowledgeId:"K02",knowledgeTitle:"失望多头提前降低退出价",time:"00:56–01:46",pdfPages:[1730],type:"图表应用",quote:`00:56 上涨趋势 这是目前最高的收盘价
01:00 然后市场下跌有买收盘的多头在这里买入
01:04 然后在下方的阳线上方买入
01:07 更多期待价格回到前期最高的收盘价
01:11 让他们第一笔仓位打平加仓的部分赚钱
01:17 空头尝试把多头套牢
01:19 空头知道有多头在这些K线的收盘买入
01:24 现在多头感到失望
01:26 希望能有打平离场的机会
01:28 一些多头会在他们的初始入场点挂限价卖单
01:32 一些多头会对这四根阴线感到非常失望
01:35 他们会把限价卖单挂在稍微低一些的地方住失望
01:39 不追求打平离场
01:40 少亏一些就满足了
01:42 如果有足够多的多头都把
01:44 限价单挂在更低的地方
01:46 价格可能不会完全回撤`,image:{src:"/charts/19e-high-close.webp",solutionSrc:"/charts/19e-high-close-solution.webp",page:1730,alt:"原课件第1730页，左侧上涨波段顶部的红线及其上方的影线"}},{prompt:"反弹没涨回最高收盘就再次下跌，为什么本课仍认为该区域有阻力意义？",options:["空头提前卖、失望多头降低退出价，可在原价下方形成卖压","没碰原价说明此处阻力尚未发挥，应继续等精确回测","回调前还在上涨，原最高收盘应优先当作支撑"],answer:0,explanation:"阻力区域可以通过提前卖单起作用；未精确触价不等于机制未发生。也不能只因前面曾上涨便固定为支撑。",id:"19E-K03-1",knowledgeId:"K03",knowledgeTitle:"空头提前卖出与多头被套",time:"01:51–02:34",pdfPages:[1730],type:"理解判断",quote:`01:48 那个收盘价就反转下跌了
01:51 空头也知道多头在这样做
01:54 他们想让这些多头套牢
01:56 他们想迫使多头放弃 多头在这里放弃
02:00 多头在这里放弃
02:01 所以空头也在卖出
02:03 在这个收盘价及以下卖出
02:07 他们知道如果市场没有涨到那个收盘价
02:10 那些还在持有的多头将不得不放弃
02:17 尝试涨回去但没有成功
02:20 空投也会在反转下跌时卖出
02:22 多头也会在这里卖出止损离场
02:25 市场尝试回到前期最高的收盘价
02:29 但没有成功 很可能会继续下跌
02:32 所以多头最终会放弃
02:34 因此前期最高的收盘价是阻力位`},{prompt:"空头曾在最低收盘价附近卖出。价格反弹后，他们把买回平仓的挂单放在原卖价略上方，新多头也在那里挂买单。两类买盘会怎样影响原卖价附近的走势？",options:["回补价抬高说明原支撑失效，此后只看原高点","空头接受少亏回补说明已转强上涨，可以不再看反应","回补与新多买盘提前集中，原价附近可成支撑"],answer:2,explanation:"抬高回补价是提前争取买回，可能形成支撑；既不证明原支撑失效，也不单独确认强上涨。",id:"19E-K04-1",knowledgeId:"K04",knowledgeTitle:"最低收盘附近的回补与开多",time:"02:41–03:52",pdfPages:[1731],type:"理解判断",quote:`02:41 而前期最低的收盘价使支撑位在
02:44 这个收盘价卖出做空的空头感到失望
02:48 想要打平离场
02:49 让他们看到这里的两根
02:51 阳线突破前期这个低点失败
02:54 而且有楔形底123
02:56 然后他们看到这根阳线在这里卖出的空投
02:59 知道坏了 我有麻烦了
03:01 很可能要反转上涨了当他们看到这
03:04 他们会挂限价买单 希望可以打平离场
03:07 多头看到同样的情况
03:09 他们说哈哈要反转上涨了
03:11 如果价格回撤那个最低的收盘价我就买入
03:15 多头看到反转上涨
03:17 他们在那个最低的收盘价挂现价单买入
03:20 这里也是一样不错的抛售
03:23 这是最低的收盘价 恰好在他的收盘卖出
03:27 做空的空头看到这个会说
03:30 我靠 这下糟糕了
03:31 于是他们挂限价买单 希望可以打拼离场
03:35 一些人会把限价单挂的稍微高一些
03:39 以防价格没有完全跌回去
03:41 于是这个最低的收盘价变成了支撑位
03:48 空头和多头都想要在最低的收盘价买入
03:52 预期市场会上涨`},{prompt:"两位空头分别在较低的收盘价卖出，之后价格上涨。第一个案例里价格跌回原卖价，第二个案例里价格没有跌回原卖价就继续上涨。第二种情况对想打平退出的空头意味着什么？",options:["后者空头可能等不到打平，放弃等回本、在更高价买回，买盘可能推动上涨","后者未测试原价，说明最低收盘参考只适用于前一案例","后者空头已更低卖出，所以上涨时获得更多浮盈"],answer:0,explanation:"未能回原价的空头面临被套而非浮盈；价格未精确测试并不能取消支撑作用，提前回补本身就是解释的一部分。",id:"19E-K05-1",knowledgeId:"K05",knowledgeTitle:"未回原卖价与放弃上涨",time:"03:57–04:17",pdfPages:[1731],type:"理解判断",quote:`03:57 预期空投会放弃 空投确实在这里放弃了
04:06 这里在这个最低收盘价卖出的空头
04:09 最终成功的打平离场
04:11 然而在这里市场没有下跌到他们的入场价
04:15 这些空头被套牢了
04:17 随着市场越涨越高 他们放弃了`,referenceImage:{src:"/charts/19e-low-close-solution.webp",page:1731,alt:"第1731页课件整页讲解",kind:"课件整页"}},{prompt:"空头先卖出，价格上涨后又在更高价卖出第二笔。价格涨得比预期多，他不再坚持等价格跌回第一笔卖价，而考虑在两笔卖价之间买回。课程解释了什么变化？",options:["改求每笔都盈利，需要等初始卖价下方更远处回补","改求扩大波段利润，需要等新的最低收盘再回补","改求组合尽量无损，可在两次入场的中点附近回补"],answer:2,explanation:"本例特意从利润最大化转为避免组合损失。中点退出可能使第一笔亏、第二笔赚，与原价退出时的分笔结果不同。",id:"19E-K06-1",knowledgeId:"K06",knowledgeTitle:"组合退出目标改变",time:"04:24–05:37",pdfPages:[1732,1733],type:"理解判断",quote:`04:24 空头不断卖阴线的收盘压铸价格会更低
04:31 他们看到反弹希望第一次
04:33 反转上涨只是小反弹
04:36 因此一些空头会在阴线下方卖出
04:39 希望价格能回到这里
04:41 这样他们的初始仓位可以打平
04:44 离场加仓的部分可以赚钱
04:51 我认为这里的上涨非常强势
04:54 让很多空头已经放弃了盈利的希望
05:00 他们不确定价格是否会
05:02 完全跌回到最低的收盘价
05:04 然而一些空头会逢高加仓 为什么要加仓？
05:08 不是为了盈利
05:11 他们加仓是为了避免亏损
05:14 他们一开始在他的收盘卖出
05:16 然后在他的下方加仓卖出
05:18 然后在两个入场价的终点挂限价买单
05:22 这样就可以打平离场
05:24 因此这是支撑位 两个合理入场价的终点
05:29 这是50%回调
05:31 我没有画出来
05:32 但从这个低点到那个高点也大约是50%回调
05:37 在强势上涨后`,referenceImage:{src:"/charts/19e-short-mid-solution.webp",page:1732,alt:"第1732页课件整页讲解",kind:"课件整页"}},{prompt:"为比较本课两种退出思路，设等量空仓分别卖在100与110，忽略费用，在105全回补。分笔结果如何？",options:["先卖100的亏5，后卖110的也亏5，组合亏损","先卖100的打平，后卖110的赚5，组合获利","先卖100的亏5，后卖110的赚5，组合打平"],answer:2,explanation:"空头利润是卖价减买回价；105是两笔等量入场中点，不是初始卖价100。题设等量、忽略费用才可直接按中点算，不能移用于任意仓位组合。",id:"19E-K06-2",knowledgeId:"K06",knowledgeTitle:"组合退出目标改变",time:"04:24–05:37",pdfPages:[1732,1733],type:"变式辨析",quote:`04:24 空头不断卖阴线的收盘压铸价格会更低
04:31 他们看到反弹希望第一次
04:33 反转上涨只是小反弹
04:36 因此一些空头会在阴线下方卖出
04:39 希望价格能回到这里
04:41 这样他们的初始仓位可以打平
04:44 离场加仓的部分可以赚钱
04:51 我认为这里的上涨非常强势
04:54 让很多空头已经放弃了盈利的希望
05:00 他们不确定价格是否会
05:02 完全跌回到最低的收盘价
05:04 然而一些空头会逢高加仓 为什么要加仓？
05:08 不是为了盈利
05:11 他们加仓是为了避免亏损
05:14 他们一开始在他的收盘卖出
05:16 然后在他的下方加仓卖出
05:18 然后在两个入场价的终点挂限价买单
05:22 这样就可以打平离场
05:24 因此这是支撑位 两个合理入场价的终点
05:29 这是50%回调
05:31 我没有画出来
05:32 但从这个低点到那个高点也大约是50%回调
05:37 在强势上涨后`},{prompt:"本课展示“最低收盘卖出后设法退出”，是否是在推荐潜在区间下沿追空？",options:["图示用于解释退出形成的支撑，课程另提醒此处追空胜算低","图示用于推荐首次追空，课程只要求先确认阴线足够大","图示用于推荐分次追空，课程主要靠加仓改善低位卖价"],answer:0,explanation:"原文明说大多数交易者不会在可能区间的最低收盘卖出。说明某些持仓者如何处理，不等于将他们的初始交易当作推荐。",id:"19E-K07-1",knowledgeId:"K07",knowledgeTitle:"区间低位追空例图的用途",time:"05:48–06:20",pdfPages:[1732,1733],type:"理解判断",quote:`05:48 大多数交易者不会在这里卖出做空
05:52 因为很有可能是震荡区间
05:54 而不是强下降趋势
05:56 阴线阳线阴线阳线 然后是最大的阴线
06:00 可能是第二段陷阱
06:02 第一段反弹
06:03 第二段有经验的交易者不会在这里卖出做空
06:07 那些卖了的交易者会在这
06:09 四根阳线后意识到他们的错误
06:12 然后他们希望能打平离场 而不再追求盈利
06:16 我用这张
06:17 课件的目的是为了说明
06:20 前期最低的收盘价是支撑位`},{prompt:"强抛售使多头不再等最初高买价，而在两次买入中点附近退出。本课解释的阻力来自哪里？",options:["多头主要只平低位盈利仓，最初高位仓仍按强上涨持有","卖盘主要来自新空头，多头需回最初买价才可能组合打平","多头卖出组合退出，空头也可在整段约半幅反弹处卖出"],answer:2,explanation:"本页讲的是下跌太强后改变退出目标，可能在组合中点附近全部退出。组合打平不要求回最初买价，也不只是把盈利那一笔单独平掉。",id:"19E-K08-1",knowledgeId:"K08",knowledgeTitle:"多头组合中点退出成阻力",time:"06:25–07:34",pdfPages:[1734,1735],type:"理解判断",quote:`06:25 多头买K线的收盘压铸上涨继续
06:32 一些买在最高收盘价的多头对
06:34 这四根大阴线感到非常失望
06:37 他们会在这里或这里的阳线上方加仓
06:40 希望能避免亏损
06:44 然而在这么强的抛售之后
06:46 多头会看向左边说
06:48 这是一个震荡区间
06:50 我买在了震荡区间的上沿 我犯错了
06:53 我在这里加仓不是为了回到
06:56 初始入场价的时候可以盈利离场
06:59 而是为了避免亏损或让亏损最小化
07:07 他们在他的收盘买入
07:09 然后在下方的阳线上方加仓
07:12 希望有打平离场的机会
07:14 想要正好打平价格
07:16 需要略微超过两个入场价的终点
07:19 这里他们成功了
07:21 多头在中间迈出打平离场制造了阻力
07:26 这也是整个下跌波段50%反弹
07:30 所以会有空头在这里卖出50%反弹
07:34 是很合理的入场理由`,referenceImage:{src:"/charts/19e-long-mid-solution.webp",page:1734,alt:"第1734页课件整页讲解",kind:"课件整页"}},{prompt:"等量多仓分别买在120与112，忽略费用，在116全部卖出。哪项正确区分组合与第一笔？",options:["组合打平，但120买入的那笔仍亏4","组合盈利，因112买入的那笔获利4","每笔打平，因116是两次入场的中点"],answer:0,explanation:"120那笔亏4、112那笔赚4，合计为零。组合打平不表示每笔打平，也不能只算盈利那一笔。该简化运算不含费用。",id:"19E-K08-2",knowledgeId:"K08",knowledgeTitle:"多头组合中点退出成阻力",time:"06:25–07:34",pdfPages:[1734,1735],type:"变式辨析",quote:`06:25 多头买K线的收盘压铸上涨继续
06:32 一些买在最高收盘价的多头对
06:34 这四根大阴线感到非常失望
06:37 他们会在这里或这里的阳线上方加仓
06:40 希望能避免亏损
06:44 然而在这么强的抛售之后
06:46 多头会看向左边说
06:48 这是一个震荡区间
06:50 我买在了震荡区间的上沿 我犯错了
06:53 我在这里加仓不是为了回到
06:56 初始入场价的时候可以盈利离场
06:59 而是为了避免亏损或让亏损最小化
07:07 他们在他的收盘买入
07:09 然后在下方的阳线上方加仓
07:12 希望有打平离场的机会
07:14 想要正好打平价格
07:16 需要略微超过两个入场价的终点
07:19 这里他们成功了
07:21 多头在中间迈出打平离场制造了阻力
07:26 这也是整个下跌波段50%反弹
07:30 所以会有空头在这里卖出50%反弹
07:34 是很合理的入场理由`},{prompt:"案例中多头在最高收盘追涨，并用较宽止损等待；此前市场表现出区间和潜在双顶。课程对此保留什么提醒？",options:["左侧像区间且可能双顶，这笔追涨并非多数人的优选","较宽止损容许下跌，因此本例可以省去检查左侧结构","最高收盘有多头买入，说明区间背景已被有效突破"],answer:0,explanation:"宽止损不会证明区间已突破，也不能取代结构判断。本课明确说明例图主要用来解释最高收盘的机制。",id:"19E-K09-1",knowledgeId:"K09",knowledgeTitle:"高位追涨案例的限制",time:"07:39–08:12",pdfPages:[1734,1735],type:"理解判断",quote:`07:39 大多数交易者不会在这里追涨
07:42 我用这个课件只是为了讲解说明一些多头会在它的收盘追涨
07:47 压住上涨趋势继续
07:49 大多数交易者会担心这里可能
07:53 是一个双顶或者更大的双顶
07:56 而且前面都是震荡区间的价格行为
07:59 然而一些人会在这里追涨
08:02 并使用很宽的初始止损
08:04 希望趋势会继续上涨压住
08:06 就算市场反转下跌
08:08 也只不过震荡区间中的一个下跌波段
08:12 很可能以后会再次上涨到那里`},{prompt:"上涨过程中，价格不断形成比前一个更高的回调低点。课程说这些低点附近可视为支撑，价格也可能回跌到那里测试。测试支撑与上涨仍然存在之间是什么关系？",options:["支撑是趋势需维护的区域，价格仍可能被吸去测试","既然是趋势条件，价格接近它就表明上涨已经结束","既然会被测试，说明更高低点只适用于反弹后的确认"],answer:0,explanation:"“应维护”是趋势前提，不是价格不能接近。测试可以发生在上涨仍有效时，接近本身也不等于跌破重要低点。",id:"19E-K10-1",knowledgeId:"K10",knowledgeTitle:"更高低点是趋势条件",time:"08:18–08:40",pdfPages:[1737],type:"理解判断",quote:`08:18 上涨趋势需要更高的低点
08:21 下降趋势需要更低的高点
08:24 因此它们是支撑和阻力
08:32 在上涨趋势中 市场不应该跌破支撑
08:36 而那个支撑就变成了一个磁铁
08:40 市场经常会下跌来测试它`},{prompt:"回调接近先前强上涨起点，为什么买盘不必全来自看涨的新仓？",options:["买盘只能算新多头，空头要等向下测量目标（MM）才可退出","做空回调的空头也可能在这里买回止盈","买盘主要算原多头加仓，不必考虑空头是否止盈"],answer:1,explanation:"本课在强上涨起点同时解释空头回补和多头买入。不能把此处买盘只归为某一身份，或为所有空头另设必须达到的目标。",id:"19E-K11-1",knowledgeId:"K11",knowledgeTitle:"高潮起点的双方买盘",time:"08:45–09:11",pdfPages:[1737,1738],type:"理解判断",quote:`08:45 强势的多头突破抢购高潮
08:47 市场经常会回撤到抢购高潮的起点下方
08:51 然后多头开始买入 有空头在这里卖出
08:55 在抢购高潮的下方快速止盈
08:58 多头看到这个
09:00 回想上次市场在这里强势上涨了
09:03 再次回到这个价格 也许会再次强势上涨
09:08 所以强势上涨的起点变成了支撑
09:11 也就是磁铁市场被吸引到他那里测试它的最低点`},{prompt:"看图右端的下影线。较高的橙线标出上涨入场K线的最低价，较低的粉线标出整段上涨的起点。价格跌过橙线但没碰到粉线，这对两处支撑分别意味着什么？",options:["以较低起点作为唯一有效支撑，较高入场K低点不参与判断","把两线合为一整个支撑区，较高位置失守就算全区已被突破","分别识别两处支撑，较高位置失守不等于较低位置也已跌破"],answer:2,explanation:"原课分别保留入场K底部及整段起点。两条线接近仍是不同位置，越过一处不等于两处都破；只留较低点又遗漏另一实际参考。",id:"19E-K12-1",knowledgeId:"K12",knowledgeTitle:"相近支撑不必同时失守",time:"09:20–09:46",pdfPages:[1737,1738],type:"图表应用",quote:`09:20 上涨趋势的起涨点也是支撑
09:23 如果市场跌到这里
09:25 这个区域也会有很多买盘抢购高潮的起点
09:31 强势的上涨 整个上涨趋势的起点
09:34 很多时候在这样的震荡区间里
09:37 抢购高潮和趋势起涨点的
09:40 价格很接近
09:42 价格跌破了其中一个 但没有跌破另一个
09:46 然后市场进入震荡区间`,image:{src:"/charts/19e-two-supports.webp",solutionSrc:"/charts/19e-two-supports-solution.webp",page:1738,alt:"原课件第1738页图表局部"}},{prompt:"强上涨的重要低点被跌破，本段最恰当的更新是什么？",options:["维持原强上涨前提，因为后续仍可能出现新高","重估为宽上涨通道或区间等可能，强上涨前提已变","确认下降趋势开始，反弹应统一按熊旗处理"],answer:1,explanation:"前提改变不等于新强下降已确认；未来可能新高也不能抹去现在已发生的结构失守。课程保留宽通道与区间。",id:"19E-K13-1",knowledgeId:"K13",knowledgeTitle:"强上涨前提失效的范围",time:"09:53–10:15",pdfPages:[1737,1738],type:"理解判断",quote:`09:53 如果这是一个强上涨趋势
09:55 重要的低点就不应该被跌破
09:58 比如这里或者这里如果被跌破
10:01 就说明强上涨趋势的前提就不再成立
10:04 如果它不是一个强上涨趋势
10:07 那么它就是宽上涨通道或震荡区间
10:13 不管是哪个交易者
10:15 都会在支撑位寻找反转上涨的做多机会`},{prompt:"较低的橙线标出大阴线起跌的位置，较高的粉线标出整段下跌的起点。图右侧反弹的上影线略过橙线，但没到粉线。该怎样判断这两处阻力？",options:["测试了两道相近阻力区域的一部分，再看转跌反应","橙线被超过已说明全部空头阻力失效，粉线不再适用","两线都属同一下跌，应先以较近橙线替代整段起点"],answer:0,explanation:"相近不等于同一价位，一条被穿越不消除另一条。课程在区间背景中明确提到“超过其中一个但不到另一个”。",id:"19E-K14-1",knowledgeId:"K14",knowledgeTitle:"相近阻力与测试深度",time:"10:24–11:04",pdfPages:[1739],type:"图表应用",quote:`10:24 强势的反转下跌 所以可能是下降趋势
10:28 下降趋势中的重要高点不应该被超过
10:36 这是下降趋势
10:38 也可能是震荡区间中的下跌波段的起跌点
10:42 粉色线是下降趋势的起跌点
10:45 橙色线是大阴线的起跌点 两者都是磁铁
10:49 在震荡区间中
10:50 如果在上沿有两个距离很近的阻力位
10:55 市场往往会上涨超过其中一个
10:58 但达不到另一个 然后开始反转下跌
11:04 如果有一个潜在的下降趋势`,image:{src:"/charts/19e-two-resistances.webp",solutionSrc:"/charts/19e-two-resistances-solution.webp",page:1739,alt:"原课件第1739页图表局部"}},{prompt:"图右侧的阳线突破较高的粉线。假设这条线标的是原下降中一个重要的反弹高点，仅凭这次突破，可以怎样更新原先的判断？",options:["原下降已直接变强上涨，下一次回调应统一看多","原强下降假设需撤销，后续结构仍有多种可能","原下降只发生普通反弹，继续保留同样强度预期"],answer:1,explanation:"一种错误说法推断过强，另一种错误说法没有处理重要高点被破。课程列出宽下降通道、区间和上涨，先撤销原强下降判断。",id:"19E-K15-1",knowledgeId:"K15",knowledgeTitle:"重要高点被突破后的重估",time:"11:04–11:39",pdfPages:[1739,1746],type:"图表应用",quote:`11:04 如果有一个潜在的下降趋势
11:08 然而一些重要的高点在反弹时被突破
11:12 比如这里或这里
11:14 那么强下降趋势的前提不再成立
11:17 它可能仍然是一个宽下降通道
11:20 这里更有可能是一个震荡区间
11:23 甚至有可能会被反转成上涨趋势
11:26 但至少强势下降趋势的想法已经不再合理了
11:31 这是阻力位
11:32 交易者会在这里挂限价卖单
11:36 或者在反转下跌时卖出
11:39 尤其是在漂亮的阴线下方`,image:{src:"/charts/19e-major-break.webp",solutionSrc:"/charts/19e-major-break-solution.webp",page:1746,alt:"原课件第1746页图表局部"}},{prompt:"有人因为50%常在斐波那契工具里，就把课程重点记成“它的作用来自斐波那契数列”。问题在哪里？",options:["讲师单独重视半幅回调，其解释不依赖这个名称","讲师只在区间使用半幅回调，趋势里使用其他比例","讲师重视的是100%投射，半幅只用于估算投射高度"],answer:0,explanation:"课程直接把50%作为重要回调位置，未把它限于区间，也未仅将其作为100%投射的计算步骤。",id:"19E-K16-1",knowledgeId:"K16",knowledgeTitle:"50%回调与名称",time:"11:44–12:16",pdfPages:[1741],type:"理解判断",quote:`11:44 50%回调可能是最可靠的支撑和阻力之一
11:54 顺便说一下
11:55 很多斐波纳契交易者都会谈论50%回调
12:00 50%的回调不是一个斐波那契数
12:04 但斐波那契交易者把它当做一个斐波那契数
12:08 50%回调的本质与斐波那契没有任何关系
12:12 它是最最最最最最重要的回调位置
12:16 比任何斐波那契数都重要无数倍`},{prompt:"看图右侧。中间的蓝线是50%回调位，右侧在橙色区域下探后出现转涨阳线。甲提前在50%附近挂限价买单，乙等价格涨过转涨阳线的最高价才买。两人的触发条件有什么不同？",options:["限价者先等阳线上方触发，突破者在半幅价直接成交","限价者在回落到区域时买，突破者等转涨后触发","限价者先确认强上涨已恢复，突破者才开始观察反弹"],answer:1,explanation:"两者都可押注原上涨恢复，分别选择到价与转涨后的触发。不能将时机互换，也不是一方已确认恢复而另一方才观察。",id:"19E-K17-1",knowledgeId:"K17",knowledgeTitle:"上涨半幅的限价与反转买入",time:"12:22–12:50",pdfPages:[1741,1742],type:"图表应用",quote:`12:22 强势上涨50%回调
12:29 在这么的强势上涨中 如果开始反转下跌
12:33 多头会在50%回调的地方挂单买入
12:37 压住空头反转的尝试会失败
12:40 压住上涨趋势会恢复
12:45 他们可以在50%回调的地方挂限价单买
12:50 也可以在反转上涨时用突破单买入`,image:{src:"/charts/19e-fifty-bull.webp",solutionSrc:"/charts/19e-fifty-bull-solution.webp",page:1741,alt:"原课件第1741页图表局部"}},{prompt:"在一段上涨中，价格从回调低点甲强势突破前高。从后来出现的低点乙只反弹了一根阳线，没能创新高。如果随后跌破乙，该怎样判断原上涨趋势？",options:["甲对趋势前提更重要，乙失守未必结束上涨","甲乙都已出现反弹，应赋予相同趋势失效意义","乙时间更近，应优先把乙失守作为上涨结束"],answer:0,explanation:"关键是后续是否产生强突破新高，不是仅看时间近或出现过阳线。次要点可被破而不改变主趋势前提。",id:"19E-K18-1",knowledgeId:"K18",knowledgeTitle:"重要低点须推动强创新高",time:"12:57–13:26",pdfPages:[1741,1742],type:"理解判断",quote:`12:57 只有重要的低点不断抬高
13:00 上涨趋势才保持有效
13:04 强势上涨到新高
13:06 它现在变成了一个重要的低点
13:09 只要价格保持在这个低点上方
13:12 上涨趋势就没问题
13:14 强势突破创新高 它现在是重要的低点
13:18 而它是一个次要的低点
13:21 一根阳线没有强势突破创新高
13:24 所以这个低点不重要
13:26 就算市场跌破它 上涨趋势也仍然成立`,referenceImage:{src:"/charts/19e-important-low-solution.webp",page:1742,alt:"第1742页课件整页讲解",kind:"课件整页"}},{prompt:"一个低点后只反弹一根阳线，没有强势创新高；后来价格跌破它。为什么不能直接套“上涨结束”？",options:["只有回调超过半幅，所有较近低点才变重要","该点后没有强突破创新高，可能只是次要低点","只有图中绝对最低点被破，才允许重估上涨前提"],answer:1,explanation:"本题依据是重要性条件未满足，而不是半幅决定所有近低点的重要性；重要抬高低点也不必是整图绝对最低价。",id:"19E-K18-2",knowledgeId:"K18",knowledgeTitle:"重要低点须推动强创新高",time:"12:57–13:26",pdfPages:[1741,1742],type:"变式辨析",quote:`12:57 只有重要的低点不断抬高
13:00 上涨趋势才保持有效
13:04 强势上涨到新高
13:06 它现在变成了一个重要的低点
13:09 只要价格保持在这个低点上方
13:12 上涨趋势就没问题
13:14 强势突破创新高 它现在是重要的低点
13:18 而它是一个次要的低点
13:21 一根阳线没有强势突破创新高
13:24 所以这个低点不重要
13:26 就算市场跌破它 上涨趋势也仍然成立`},{prompt:"上、下两条蓝线标出前一段上涨的高点和低点，中间蓝线是50%回调位。看图右侧，价格的下影线稍微跌过中线，随后转涨。该怎样理解这次短暂跌破？",options:["半幅被略破说明测量基点选错，应移动到本次低点","半幅附近仍可提供支撑，重要低点与转涨反应另看","半幅被跌破后应优先按下降趋势，转涨先作熊旗"],answer:1,explanation:"略破50%是原课允许的现象，不要求事后移动测量基点，也不能把半幅线一破就等同重要低点失守。",id:"19E-K19-1",knowledgeId:"K19",knowledgeTitle:"略破半幅与守住重要低点",time:"13:33–13:50",pdfPages:[1741,1742],type:"图表应用",quote:`13:33 这是一次强势的上涨
13:35 多头会在50%回调的地方挂单买入
13:38 或在反转K线的高点上方买入
13:41 或者在这根阳线的高点上方买入
13:44 压住上涨趋势会恢复
13:46 市场略微跌破50%回调一点点
13:50 这是很常见的`,image:{src:"/charts/19e-fifty-bull.webp",solutionSrc:"/charts/19e-fifty-bull-solution.webp",page:1741,alt:"原课件第1741页图表局部"}},{prompt:"挂在50%处的限价买单，行情最低刚好碰该价就转涨。按本课应保留哪项判断？",options:["刚好碰价而未穿过，说明半幅支撑尚未被测试","仅碰价不确保成交，可再考虑反转后的触发","最低已到挂价就表示该限价单必已成交"],answer:1,explanation:"价格到过不等于自己的订单必成交，但仍可构成位置测试。两个错项分别混淆订单成交与价格到达、价格到达与支撑测试。",id:"19E-K20-1",knowledgeId:"K20",knowledgeTitle:"碰限价不确保成交",time:"13:56–14:18",pdfPages:[1742],type:"理解判断",quote:`13:56 正因为它跌破了50% 回调一点点
14:00 多头挂在50%回调的限价买单才能够成交
14:05 如果他没有跌破50%
14:08 就算正好碰到50%
14:10 那么挂在50%的限价买单就无法确保成交
14:14 这种时候多头就会在反转上涨的时候买入
14:18 尤其是在阳线的上方挂突破买单`},{prompt:"下降反弹超过50%，前面两根阳线较强，课程为何允许部分空头等第二次做空？",options:["半幅是区域参考，强买压下可多等一次反转触发","超过半幅就成为三推顶，第一做空的胜算固定更低","超过半幅说明下降结束，只能等新上涨的第二买点"],answer:0,explanation:"本课兼顾半幅位置和当前强买压，没有用越线直接确认反转，也没有把超过50%本身定义为三推顶。",id:"19E-K21-1",knowledgeId:"K21",knowledgeTitle:"下降半幅、强阳与第二入场",time:"14:25–15:21",pdfPages:[1743],type:"理解判断",quote:`14:25 下降趋势中 50%反弹是阻力下降趋势
14:31 这是50%空投会在50%反弹的地方卖出
14:37 他们会挂限价卖单开仓做空
14:40 把初始止损放在下降趋势的最高点上方
14:43 如果限价卖单没有成交
14:45 他们就会在反转下跌时卖出
14:49 反弹超过了50%
14:52 一些空头会在反转下跌时卖出
14:55 一些空头会说等一下 这两根阳线有点厉害
15:00 我还是等第二做空入场点
15:02 然后他们会在这里开仓做空
15:05 这也是一个三推楔形顶123
15:11 一些空头在反转下跌时用突破卖单做空
15:15 一些空头喜欢挂限价卖单
15:18 他们的止损在最近一个重要高点的上方
15:21 这里就是在整个下降趋势的起跌点上方`,referenceImage:{src:"/charts/19e-fifty-bear-solution.webp",page:1743,alt:"第1743页课件整页讲解",kind:"课件整页"}},{prompt:"课程的下降趋势50%反弹做空案例中，保护性止损参考哪一处结构？",options:["紧贴50%线稍上，半幅越过即可替代重要高点失效","最近重要高点上方，本例可为整段下跌起点","最新阴线高点上方，本例无需再辨别它是否重要"],answer:1,explanation:"本页指定最近重要高点，示例可为整段起跌处。半幅不是趋势失效线，最新阴线高点也不自动具有同样的重要性。",id:"19E-K21-2",knowledgeId:"K21",knowledgeTitle:"下降半幅、强阳与第二入场",time:"14:25–15:21",pdfPages:[1743],type:"变式辨析",quote:`14:25 下降趋势中 50%反弹是阻力下降趋势
14:31 这是50%空投会在50%反弹的地方卖出
14:37 他们会挂限价卖单开仓做空
14:40 把初始止损放在下降趋势的最高点上方
14:43 如果限价卖单没有成交
14:45 他们就会在反转下跌时卖出
14:49 反弹超过了50%
14:52 一些空头会在反转下跌时卖出
14:55 一些空头会说等一下 这两根阳线有点厉害
15:00 我还是等第二做空入场点
15:02 然后他们会在这里开仓做空
15:05 这也是一个三推楔形顶123
15:11 一些空头在反转下跌时用突破卖单做空
15:15 一些空头喜欢挂限价卖单
15:18 他们的止损在最近一个重要高点的上方
15:21 这里就是在整个下降趋势的起跌点上方`},{prompt:"反弹突破了较近的一个高点，但该高点后没有强下跌创新低。本课怎样限制判断？",options:["所有更低高点都同样重要，被超过先确认趋势失效","先识别它可能次要，被超过未必结束下降趋势","较近高点决定最新结构，被超过优先确认上涨趋势"],answer:1,explanation:"课程把“重要更低高点”与普通摆动区分。时间近或形式上较低，都不能替代强下破创新低这一重要性依据。",id:"19E-K22-1",knowledgeId:"K22",knowledgeTitle:"次要高点不等于趋势条件",time:"15:28–15:57",pdfPages:[1743],type:"理解判断",quote:`15:28 只有高点不断的降低
15:31 下降趋势的前提才成立
15:35 空头在反弹时卖出 阻止多头上涨
15:39 超过前期重要的高点
15:41 这是一个重要的高点吗？
15:44 不是
15:45 它的后面没有强势的下跌创新低
15:50 因此就算它被超过
15:52 也只是雄奇或者震荡区间中的一段上涨
15:57 上涨超过这个高点不代表下降趋势结束了`},{prompt:"一名空头做空后，价格可能反弹；他需要选择保护性止损的位置。课程为什么提醒：最新做空K线的高点上方，不一定是唯一需要考虑的位置？",options:["市场可能演变为区间，该高点未必就是区间上沿","宽止损能让所有回调失去作用，所以不需选结构依据","最新K线还没创下最低收盘，所以该K线不具有价格信息"],answer:0,explanation:"本课给的是区间结构的容错考虑。不是最新K线无信息，也不是宽止损就免于结构判断。",id:"19E-K23-1",knowledgeId:"K23",knowledgeTitle:"空头信号与入场K高点",time:"16:10–16:29",pdfPages:[1744],type:"理解判断",quote:`16:10 做空信号K线做空入场K
16:13 线信号K线的高点是阻力
16:16 入场K线的高点是阻力
16:20 弱空头会把止损放在他们的上方
16:24 强空头会使用更宽的止损
16:27 以防它演变成震荡区间
16:29 而这里不一定是震荡区间的上沿`},{prompt:"价格原先在窄通道内上涨，第一次转跌时，课程先按小反转看待。后来反弹高点一再降低，挂在阳线高点上方的买单也屡次没有触发。该怎样根据这些新变化更新判断？",options:["既然首次通常小反转，后续降低高点仍按原上涨看待","只要曾有大阴线，最初就应认定下降趋势已建立","原先小反转预期可被新卖压修正，关注窄下降的发展"],answer:2,explanation:"不能用后来结果倒推最初就应确认下降，也不能用最初预期屏蔽后续证据。课程正是在发展过程中观察空头力量。",id:"19E-K24-1",knowledgeId:"K24",knowledgeTitle:"窄上涨首次转跌与后续新证据",time:"16:34–17:10",pdfPages:[1744],type:"理解判断",quote:`16:34 这里不是一个很好的做空机会
16:37 更有可能只是小反转 非常窄的上涨通道
16:41 通常第一次反转下跌只是小回调
16:44 最多变成一个震荡区间
16:46 这里最终发展成了无尽的回调
16:50 变呈下降趋势
16:54 有迹象表明空头很强势
16:57 因为每次反弹的高点都越来越低
17:00 再次反弹高点降低 强势反转
17:03 但无法触发突破买单柱
17:05 多头在阳线上方挂单
17:07 而它的高点没有被突破
17:10 这是窄下降通道的早期信号 最终确实如此`},{prompt:"一根大阴线是空头实际入场的K线。之后两次反弹都没能涨过这根K线的最高价，第二次反弹的高点更低，随后被套多头卖出退出。这些信息合起来支持什么判断？",options:["阻力应取最初的信号K线高点，入场K线高点只用于止损","较低的第二个高点只表明波动收窄，仍应沿用原上涨判断","两次受阻支持双顶熊旗的判断，多头退出会增加卖压"],answer:2,explanation:"两次未能涨过入场K线高点，且第二次反弹更低，构成高点降低的双顶熊旗。多头卖出平仓会增加卖压。信号K线和实际入场K线的高点都可能形成阻力。",id:"19E-K25-1",knowledgeId:"K25",knowledgeTitle:"空头入场K高点的两次失败测试",time:"17:21–18:21",pdfPages:[1744],type:"理解判断",quote:`17:21 一些多头把它看作牛骑在这里追涨
17:24 但是对大阴线感到失望
17:27 希望价格能涨回到信号K线上方一个
17:31 这样他们就可以打平离场
17:34 交易者知道
17:35 做空信号K线和入场K线的高点有阻力
17:42 如果价格回到那里 空头就会再次卖出
17:46 市场在这里尝试上涨超过他们 但没有成功
17:51 再次尝试上涨超过他们仍然没有成功
17:54 所以现在变成了高点降低的双顶
17:57 可以看到多头在这里放弃了
18:00 这是空头
18:01 变得强势的迹象
18:03 一些多头出于某种原因买入
18:06 期待市场会涨到大阴线的高点上方
18:09 但失败了
18:10 所以多头在这里被套牢 在这里再次被套牢
18:15 最终他们在这里或这里放弃离场
18:21 这两个高点组成了双鼎雄奇`,referenceImage:{src:"/charts/19e-entry-high-solution.webp",page:1744,alt:"第1744页课件整页讲解",kind:"课件整页"}},{prompt:"下跌已持续二十多根K线，末端出现最大的阴线及缺口。课程为何偏向衰竭解释？",options:["它留下向下缺口，所以应优先按初期强突破评估跟随","它出现在趋势后期，可能接近卖压耗尽并回测高潮起点","它的实体最大，所以应优先作为新一段下跌的测量中心"],answer:1,explanation:"“最大”和“缺口”都可能出现在不同阶段。原课决定性限定是长时间下跌后的末端，不能只按外观归为测量型。",id:"19E-K26-1",knowledgeId:"K26",knowledgeTitle:"后期最大阴线与衰竭缺口",time:"18:32–19:23",pdfPages:[1745],type:"理解判断",quote:`18:32 下降趋势持续20根或更多K线之后
18:36 再出现最大的阴线
18:37 更有可能是一个捷径型缺口
18:40 这个低点和这些低点之间的缺口
18:44 这个低点和抛售高潮K线前
18:46 一根K线低点之间的缺口
18:49 大概率缺口会被填补 涨到这个低点上方
18:53 大概率至少会略微超过抛售高潮的起跌点
18:58 下降趋势后期抛售高潮的起跌点是一个磁铁
19:03 也是阻力
19:04 每个人都知道价格会涨到那里
19:07 下降趋势更有可能即将衰竭
19:10 而不是变成测量型缺口
19:13 然后开始新一轮的下跌
19:15 下降趋势中20根或更多K线之后
19:19 再出现最大的阴线趋势
19:21 大概率即将衰竭
19:23 因此大阴线的最高点是一个磁铁`},{prompt:"本课把后期缺口偏向衰竭解释时，还提到怎样的回补预期？",options:["反弹只有超过全部重要高点后，才可称缺口回补","反弹应被缺口下沿挡住，再按同高距离延续下跌","反弹可回到旧低点上方，并测试或略超高潮起点"],answer:2,explanation:"原文区分回补旧低点之间的缺口、测试高潮起点与突破更大重要高点三个层级。不能把衰竭缺口直接沿用测量型的延续预期，也不要求整个趋势反转才算局部缺口回补。",id:"19E-K26-2",knowledgeId:"K26",knowledgeTitle:"后期最大阴线与衰竭缺口",time:"18:32–19:23",pdfPages:[1745],type:"变式辨析",quote:`18:32 下降趋势持续20根或更多K线之后
18:36 再出现最大的阴线
18:37 更有可能是一个捷径型缺口
18:40 这个低点和这些低点之间的缺口
18:44 这个低点和抛售高潮K线前
18:46 一根K线低点之间的缺口
18:49 大概率缺口会被填补 涨到这个低点上方
18:53 大概率至少会略微超过抛售高潮的起跌点
18:58 下降趋势后期抛售高潮的起跌点是一个磁铁
19:03 也是阻力
19:04 每个人都知道价格会涨到那里
19:07 下降趋势更有可能即将衰竭
19:10 而不是变成测量型缺口
19:13 然后开始新一轮的下跌
19:15 下降趋势中20根或更多K线之后
19:19 再出现最大的阴线趋势
19:21 大概率即将衰竭
19:23 因此大阴线的最高点是一个磁铁`},{prompt:"橙线从左侧红色大阴线的顶部画出，标出抛售高潮K线的高点。图最上方的粉线标出此前最后一个重要高点。右侧反弹先到橙线附近，这两条线各有什么用途？",options:["橙线可吸引初步回测，粉线关系更大的下降前提","橙线一旦被超过，粉线便失去对下降前提的意义","两线都叫阻力，只需保留离现价最近的一条"],answer:0,explanation:"课程同时保留局部高潮起点和重要高点。删去一条会混淆反弹目标与更大趋势条件；不能把越过任一阴线高点都解释为全部下降结束。",id:"19E-K27-1",knowledgeId:"K27",knowledgeTitle:"高潮高点与重要高点的层级",time:"19:23–19:52",pdfPages:[1745,1746],type:"图表应用",quote:`19:21 大概率即将衰竭
19:23 因此大阴线的最高点是一个磁铁
19:29 整个强势下跌的起跌点也是一个磁铁
19:34 这是最近一个重要的高点
19:37 强势突破创新低
19:38 所以它是一个重要的高点
19:41 只要重要的高点继续降低
19:44 下降趋势就没有问题
19:46 然而 如果重要的高点被突破
19:49 强下降趋势的前提就不再成立
19:52 市场要么处于震荡区间 要么处于上涨趋势`,image:{src:"/charts/19e-sell-climax.webp",solutionSrc:"/charts/19e-sell-climax-solution.webp",page:1745,alt:"原课件第1745页图表局部"}},{prompt:"看图左侧红色大阴线，橙线标出它的最高价。假设它出现在较长下跌的末段，可能是抛售高潮。课上怎样比较空头把止损放在橙线上方，和预期反弹而提前买回平仓这两种做法？",options:["较弱者先止盈全部，较强者认为高潮更强所以加仓","较弱者把止损放在高潮阴线高点上方，较强者预期价格会反弹到那里，因此先买回止盈","两者都等高潮高点再卖，区别只在目标计算长度"],answer:1,explanation:"本段比较近止损的被动安排与预期回测后提前止盈。后续在高点再卖是另一阶段，不能代替这里的比较。",id:"19E-K28-1",knowledgeId:"K28",knowledgeTitle:"近止损与预先止盈",time:"19:59–20:12",pdfPages:[1745],type:"图表应用",quote:`19:59 弱空头看到体积这么大的阴线
20:01 他们不想冒太大的风险
20:03 于是他们会把止损放在大阴线的高点上
20:07 方柱其实也和而不是最近一个重要高点的上方
20:12 而强空头知道抛售高潮的起跌点会被测试`,image:{src:"/charts/19e-sell-climax.webp",solutionSrc:"/charts/19e-sell-climax-solution.webp",page:1745,alt:"原课件第1745页图表局部"}},{prompt:"图左侧红色大阴线是抛售高潮，右侧价格反弹回到它顶部画出的橙线附近。课上说，有的空头在高潮后先买回止盈，等价格反弹到橙线附近又卖出做空。这两次操作分别想达到什么目的？",options:["先买回锁定下跌利润，再在反弹目标附近做空，尝试赚一段短暂下跌","先止盈说明下降已结束，后来再卖是在确认强上涨","先止盈说明原目标错误，后来再卖只是修正测量点"],answer:0,explanation:"位置和目标阶段不同：先回补退出、后在反弹阻力新做空可以并存。它不证明已确认强上涨，也不表示原测量必错。",id:"19E-K29-1",knowledgeId:"K29",knowledgeTitle:"高潮高点的阶段性交易",time:"20:12–20:44",pdfPages:[1745],type:"图表应用",quote:`20:12 而强空头知道抛售高潮的起跌点会被测试
20:17 所以他们会提前止盈离场住交易者
20:20 的强与弱体现在认知和心态上
20:23 多头知道下降趋势很可能即将衰竭
20:26 他们要么在大阴线的收盘买入
20:29 要么在反转上涨时买入 或者在双底买入
20:32 预期价格至少会超过这根大阴线一点点
20:36 强空头知道 弱空头会放弃
20:39 但他们也知道多头会在大阴线的最高点止盈
20:44 所以强空头会在这里卖出做剥头皮交易`,image:{src:"/charts/19e-sell-climax.webp",solutionSrc:"/charts/19e-sell-climax-solution.webp",page:1745,alt:"原课件第1745页图表局部"}},{prompt:"长跌后的反弹一度形成潜在双顶，价格随后涨过双顶高点。要估计突破后还可能涨多远，本课比较了哪两种测量依据？",options:["比较失败双顶的反向高度，与整个下跌波段向上投射的高度","只用最后抛售高潮阴线全长，其他波段高度不参与本次测量","比较两个顶部的价差，与双顶颈线至最高收盘之间的距离"],answer:0,explanation:"本段比较失败双顶反向测量目标（MM）和整个下跌波段的向上投射。两顶价差并非该结构高度；单根高潮K也不是本页唯一采用的依据。",id:"19E-K30-1",knowledgeId:"K30",knowledgeTitle:"失败双顶后的反向目标",time:"20:51–21:35",pdfPages:[1745],type:"理解判断",quote:`20:51 每当下降趋势后期出现抛售高潮
20:55 通常市场至少会略微超过那根抛售高潮
21:00 的大阴线
21:03 另外抛售高潮的起跌点和
21:06 这里尝试形成一个双顶多头
21:09 突破了这个双顶
21:11 此时你必须考虑到价格
21:14 会上涨到某个MM标位
21:16 比如双顶的反向mm
21:20 甚至是基于整个下跌波段的高度
21:23 把这一段下跌反向翻一倍
21:26 显然更多的计算机程序使用
21:29 这个作为他们的MM标位
21:32 可以看到很多止盈的卖盘在目标位附近
21:35 基于整个下跌波段的高度`,referenceImage:{src:"/charts/19e-sell-climax-solution.webp",page:1745,alt:"第1745页课件整页讲解",kind:"课件整页"}},{prompt:"较高的粉线标出此前一个反弹高点。这个高点之后曾出现强下跌并创出新低。现在图右侧的阳线涨过粉线，应怎样更新对原下降趋势的判断？",options:["原下降中局部回调变深，原有强下降前提照旧","原下降趋势前提失效，重估区间或上涨","新上涨趋势已经确认，区间可能性可先排除"],answer:1,explanation:"它是重要而非次要高点。突破足以撤销原下降前提，却不足以只留下上涨一种结果。",id:"19E-K31-1",knowledgeId:"K31",knowledgeTitle:"重要更低高点被突破",time:"21:46–21:56",pdfPages:[1746],type:"图表应用",quote:`21:46 重要的高点强势突破创新低
21:49 一旦多头突破了它下降
21:51 趋势的前提就不再成立
21:54 市场现在要么处于震荡区间
21:56 要么处于上涨趋势`,image:{src:"/charts/19e-major-break.webp",solutionSrc:"/charts/19e-major-break-solution.webp",page:1746,alt:"原课件第1746页图表局部"}},{prompt:"案例缺少更早走势，只看到两根强阳线。讲师讨论“上涨后期的抢购高潮起点”时，应怎样保留原文条件？",options:["只要后来下跌，便可反推最左两根必属抢购高潮","两根强阳本身已足够确认处于上涨最后阶段","这是以处于上涨后期为假设的案例解释"],answer:2,explanation:"原文22:30以后明确承认看不到左侧，不知道是否后期，再作假设。不能用两根K或后续下跌抹掉证据范围。",id:"19E-K32-1",knowledgeId:"K32",knowledgeTitle:"高潮位置判断的可见范围",time:"22:04–22:46",pdfPages:[1747],type:"理解判断",quote:`22:04 最左边两根漂亮的阳线
22:07 但它可能是上涨趋势衰竭前
22:10 最后的上涨抢购高潮的起点
22:14 是支撑
22:15 若多头会把止损放在这里
22:18 他们被止损出局了
22:20 想多头会在这里买入
22:21 至少做一笔剥头皮交易
22:23 在这里卖出的空头会在下面止盈
22:26 所以空头也会在这里买入
22:30 由于看不到左边的K线
22:33 不知道这是否在上涨趋势的后期
22:37 但假设是的话 在上涨趋势的后期
22:40 抢购高潮的起点是支撑
22:42 是磁铁
22:43 价格往往会被吸引到那里
22:46 而且往往会至少略微跌破它`},{prompt:"假设已在上涨后期，抢购高潮起点被跌破，课程最低限度怎样更新？",options:["跌破高潮起点后，先确认强下降并忽略区间可能","原上涨至少暂时结束，再评估区间或下降","高潮起点属局部价位，即便后期失守也不改变原强上涨"],answer:1,explanation:"题目限定上涨后期，高潮起点失守与大涨大跌提示原上涨暂时结束；仍不能直接只留强下降，也不能坚持原强上涨不变。",id:"19E-K33-1",knowledgeId:"K33",knowledgeTitle:"高潮起点失守后的范围",time:"23:28–23:38",pdfPages:[1747],type:"理解判断",quote:`23:28 一旦市场跌破抢购高潮的起点
23:30 那就变成了大涨大跌大的困惑
23:33 这是震荡区间的特征
23:35 无论如何 上涨趋势已经结束
23:38 至少暂时是这样`},{prompt:"下跌途中，价格两次在相近低位反弹，形成潜在双底。随后价格没有向上突破，反而跌破两个底部，达到向下测量的目标后才反弹。怎样解释目标附近的买盘？",options:["原双底失败须更新，到下方目标仍可有回补与剥头皮买盘","下方目标出现买盘，说明强上涨已恢复并可忽略跌破","下方反弹证明双底仍在完成，原先失败判断可以撤销"],answer:0,explanation:"失败双底与下方目标的买盘并不冲突；后者可能只产生剥头皮反弹，不能据此恢复原来的双底成功或强上涨结论。",id:"19E-K34-1",knowledgeId:"K34",knowledgeTitle:"失败双底与反向下测量",time:"23:43–24:03",pdfPages:[1747],type:"理解判断",quote:`23:43 再讲一遍 多头尝试形成双底
23:46 然而双底失败被跌破了
23:49 跌到了反向的mm目标位
23:51 出现了一些买盘 空头止盈
23:54 多头入场剥头皮
23:55 之前做空的空头在这里止盈
23:58 至少一部分多头知道空头会在这里买入
24:03 所以他们也会买入剥头皮赚快钱`,referenceImage:{src:"/charts/19e-buy-climax-solution.webp",page:1747,alt:"第1747页课件整页讲解",kind:"课件整页"}}],sourceFile:"BTC PAF 19E Support and Resistance_中文 (源语言).srt"},{id:"20A",group:"测量目标",title:"两段等长、嵌套与测量起点",range:"00:00–28:38",revision:"measured-20a-v1",notes:["第一段提供价格高度，从第二段起点投射；区间高度、突破高度也可形成目标。各层级可嵌套，价格等长不等于K线根数相同。","强第一段常有第二段，但两段上涨也可能只是区间内的反弹。深回调后目标前出现新卖压，可以改变退出判断。","强突破可穿过第一个MM；继续找更远合理候选，同时留意后期通道、糟糕跟随、十字星及楔形与多目标汇合。","测量起点并非总是绝对高低点；早期反转、真正突破、局部低点和加速起点可能对应不同算法。先看较近目标，再看市场反应。","明显区间中，第一段通常到区间开始处结束，第二段从区间结束后的突破起算；内部波动不自动完成大第二段。接近目标后的强反转可比精确碰线更有判断意义。"],knowledgePoints:[{id:"K01",title:"测量目标的三类依据",summary:"测量移动可基于先前走势段、区间或突破的高度；第一段回调第二段是本节重点，测的是价格距离，不要求K线数量相等。",time:"00:10–00:45",pdfPages:[1752],questionIds:["20A-K01-1"]},{id:"K02",title:"强第一段后的第二段",summary:"第一段足够强，回调后可预期第二段，并以第一段高度从第二段起点投射初始目标；不是直接从第一段高点忽略回调投射。",time:"00:52–02:07",pdfPages:[1753],questionIds:["20A-K02-1","20A-K02-2"]},{id:"K03",title:"两段结构的嵌套",summary:"较大第二段可再细分为较小第一段、回调、第二段，内部还可嵌套；不同层级的目标可以同时存在。",time:"02:10–02:42",pdfPages:[1753],questionIds:["20A-K03-1"]},{id:"K04",title:"两段上涨不等于大趋势已成",summary:"强反转可以有第二段，上方仍低于重要高点、且很多区间行为时，两段上涨可能只是区间内一腿；不能从目标存在直接确认大上涨。",time:"02:48–03:33",pdfPages:[1754],questionIds:["20A-K04-1"]},{id:"K05",title:"深回调后的初始目标不保证兑现",summary:"深约50%回调后，第一段=第二段是初始/最低观察目标；但目标前出现大阴线仍可促多头提前退出，目标不是必达承诺。",time:"03:44–04:15",pdfPages:[1754,1755],questionIds:["20A-K05-1","20A-K05-2"]},{id:"K06",title:"急速变通道与较弱第二段",summary:"第二段常以较弱通道运行，差跟随、三/四推说明可能区间化；不能把初始急速阶段的强度直接沿用到通道末端。",time:"04:20–05:19",pdfPages:[1755],questionIds:["20A-K06-1"]},{id:"K07",title:"多根突破实体跨度",summary:"趋势早期强突破可由一根或数根组成；本例按首根开盘至最后强突破K收盘的跨度向上再投射，不机械相加每根全长。",time:"05:40–06:10",pdfPages:[1755],questionIds:["20A-K07-1"]},{id:"K08",title:"双顶的方向与颈线",summary:"双顶向下跌破颈线可测下方目标；若双顶做空失败反被向上突破，则考虑反向向上目标，不能只按形态名称锁死方向。",time:"06:18–06:37",pdfPages:[1755],questionIds:["20A-K08-1"]},{id:"K09",title:"外汇嵌套目标与反向剥头皮",summary:"外汇日线案例多层两段目标很少完全精确；到目标有顺势仓止盈及反向剥头皮，反向单不等于已确认大反转。",time:"06:43–07:43",pdfPages:[1756],questionIds:["20A-K09-1"]},{id:"K10",title:"持续区间的突破高度",summary:"上涨后持续二十至四十根等较明显区间，突破时可按区间高度投射第一目标；这是区间高度法，与先前两腿等长可并存。",time:"07:50–08:35",pdfPages:[1757],questionIds:["20A-K10-1"]},{id:"K11",title:"微通道穿越第一目标",summary:"八根左右强上涨微通道直接穿过区间MM，说明该阻力暂未阻止突破，可预期再一腿并寻找更高阻力；不因到目标而机械逆向。",time:"08:41–09:04",pdfPages:[1757],questionIds:["20A-K11-1"]},{id:"K12",title:"买收盘与首次反转",summary:"强突破买收盘中，多头可用多种方式入场，预期首次回调会被买起；本课的广泛入场叙述以强趋势为条件。",time:"09:14–09:34",pdfPages:[1757,1758],questionIds:["20A-K12-1"]},{id:"K13",title:"忽略目标后的候选区域",summary:"毫不犹豫穿越一个MM，课程寻找其他算法可能采用的更远目标；第二段起点不同可形成接近的止盈区域，不强求唯一精确线。",time:"09:43–10:18",pdfPages:[1758],questionIds:["20A-K13-1"]},{id:"K14",title:"强趋势反转失败与高二牛旗",summary:"强突破后即使局部三推或双顶，首次反转也常失败并变牛旗；小双底高二可成为继续上涨触发，不能只数三推判断大反转。",time:"10:23–11:42",pdfPages:[1759],questionIds:["20A-K14-1"]},{id:"K15",title:"不同MM与缺口目标汇合",summary:"两段等长目标、初始突破高度及潜在测量型缺口投射可接近，汇合有助观察止盈与反向卖盘；要分别保留测量依据。",time:"11:45–12:33",pdfPages:[1760],questionIds:["20A-K15-1"]},{id:"K16",title:"趋势惯性与终点观察",summary:"大部分次要阻力可能被强趋势穿过，但趋势最终仍会在某阻力结束；继续找候选并看实际反应，不意味着每个目标都立刻卖出。",time:"12:36–13:02",pdfPages:[1760],questionIds:["20A-K16-1"]},{id:"K17",title:"目标附近的末端弱化",summary:"临近收盘、突破变小、十字星和三推楔形叠加目标汇合时，课程考虑横盘至下跌的波段及区间，不再沿用早期强突破预期。",time:"13:09–14:02",pdfPages:[1760],questionIds:["20A-K17-1"]},{id:"K18",title:"测量起点的多种算法",summary:"绝对最低点、第一次强反转起点、区间后真正突破起点可能不同；算法不同，事前未必知道哪一套获广泛采用。",time:"14:11–15:13",pdfPages:[1761],questionIds:["20A-K18-1"]},{id:"K19",title:"更低回调不必取消早期起点",summary:"1之后有连续强阳，后面3略低于1可被一些程序视为深回调或异常值；从1到2的高度仍可能影响后续目标。",time:"15:22–16:08",pdfPages:[1762],questionIds:["20A-K19-1"]},{id:"K20",title:"先看较近目标",summary:"讲师通常先选最近合理低点看较近目标，被强势穿过后再看更远候选；这是候选顺序，不是目标必然逐个反转。",time:"16:20–16:32",pdfPages:[1763],questionIds:["20A-K20-1"]},{id:"K21",title:"第二段起点与突破强度",summary:"第二段可从局部低点、连续阳线突破起点或加速通道起点解释；本例连续三阳让讲师偏好突破起点，仍观察其他候选。",time:"16:36–17:17",pdfPages:[1763,1764],questionIds:["20A-K21-1"]},{id:"K22",title:"相近目标按区域观察",summary:"不同第二段起点推得两个接近目标，一个略过、一个附近回调；课程可两条都标，以区域反应判断而非争最精确线。",time:"17:27–18:06",pdfPages:[1763,1764],questionIds:["20A-K22-1"]},{id:"K23",title:"穿过目标后看更大腿",summary:"如果继续越过当前目标/高点，课程再参考更大的第一、第二段及更高阻力；只看到一点回调不能确认整个上涨已结束。",time:"18:15–19:07",pdfPages:[1765],questionIds:["20A-K23-1"]},{id:"K24",title:"下降从突破而非绝对顶起量",summary:"下降目标也有多种起点；单根下跌后横盘的绝对高点，与真正空头突破起点不同，课程通常先考虑后者生成的较近目标。",time:"19:15–20:23",pdfPages:[1766],questionIds:["20A-K24-1"]},{id:"K25",title:"第二段终点可能暂不清楚",summary:"下跌可为小第二段结束或大第一段的一部分，未强反转前不易确认；层级不确定性应保留，不能只数两段便断定趋势已结束。",time:"20:32–21:16",pdfPages:[1767],questionIds:["20A-K25-1"]},{id:"K26",title:"大跌大涨后原目标要重估",summary:"未达下方潜在目标便大幅上涨，至少提示进入区间；原下降等长预期可能搁置，新的上涨目标也可能失败。",time:"21:31–22:23",pdfPages:[1767],questionIds:["20A-K26-1"]},{id:"K27",title:"头肩底失败与区间限制",summary:"课程把大反转/头肩结构约40%成功波段、约60%横盘或原趋势继续置于该背景；头肩底失败可演变三角形熊旗，不能只看名称预期等长必达。",time:"22:29–23:30",pdfPages:[1768],questionIds:["20A-K27-1"]},{id:"K28",title:"明显区间划分第一第二段",summary:"强下跌后若形成明显区间，课程通常把第一段终点放在区间开始，第二段起点放在区间结束后的强突破，区别内部摆动。",time:"23:33–24:27",pdfPages:[1768],questionIds:["20A-K28-1"]},{id:"K29",title:"区间内部下跌不自动算第二段完成",summary:"三角内部一段未接近目标且重新横盘，事后更可能只是区间腿；需真正强破和目标反应，不能为了标签把内部波动当趋势完成。",time:"24:33–25:10",pdfPages:[1768],questionIds:["20A-K29-1"]},{id:"K30",title:"目标稍上强反转与完成判断",summary:"下方等长目标略上方出现强反转，可支持第二段结束；若继续向下穿过，则考虑更大腿、更低目标，依据是实际反应。",time:"25:14–26:09",pdfPages:[1769],questionIds:["20A-K30-1"]},{id:"K31",title:"大区间内创新高仍可能是内部腿",summary:"第一段后大区间中，一段上涨即使超过原突破高点，仍可能属于区间内部；不能只用局部新高确认第二段已经开始或结束。",time:"26:14–27:07",pdfPages:[1770],questionIds:["20A-K31-1"]},{id:"K32",title:"区间后强上涨与新第二段",summary:"后来八根连续上涨，可能标志区间结束、趋势恢复及第二段开始；目标附近回调反映多头止盈与空头卖出，结束点可有不同算法。",time:"27:16–28:00",pdfPages:[1770],questionIds:["20A-K32-1"]}],questions:[{prompt:"价格先上涨一段，回落后又上涨一段。讲师说“第二段和第一段大致等长”。这里的“等长”是在比较什么？",options:["各段起点至终点的价格高度","第一段终点至第二段终点的高点差价","各段起点至终点的K线根数"],answer:0,explanation:"第一段第二段比较各自的价格距离，不是持续根数，也不是只比较两个终点之间的价差。",id:"20A-K01-1",knowledgeId:"K01",knowledgeTitle:"测量目标的三类依据",time:"00:10–00:45",pdfPages:[1752],type:"理解判断",quote:`00:09 简称MM
00:10 首先我会讲第一段
00:12 第二段的MM标位市场移动了一段距离
00:18 暂停或回调之后
00:20 第二段移动的距离和第一段大致相同
00:29 基于前面一段走势的mm标
00:34 也就是第一段 第二段
00:41 之后我也会讲到基于震荡区间高度的MM
00:45 目标位和基于前一次突破高度的mm标位`},{prompt:"价格先上涨，回落后从较低的位置再次上涨。如果用第一段的涨幅来估算第二段的目标价，应该把第一段涨幅加在哪个价位上？",options:["第一段上涨的终点，再加第一段的高度","第二段上涨的起点，再加第一段的高度","回调后的第一根收盘，再加回调的高度"],answer:1,explanation:"第一段提供高度，第二段提供新的投射锚点；一种误判忽略回调深度，另一种误判把第一段高度换成回调高度。",id:"20A-K02-1",knowledgeId:"K02",knowledgeTitle:"强第一段后的第二段",time:"00:52–02:07",pdfPages:[1753],type:"理解判断",quote:`00:52 这里有一个上涨趋势 这是第一段上涨
00:56 一些计算机程序认为上涨在这里结束
01:00 另一些认为上涨在这里结束 回调123
01:04 然后第二段上涨很明显
01:07 可以看到第二段上涨从这里开始
01:11 到那里结束 这是一个完美的第一段
01:15 第二段mm标位第一段回调第二段
01:22 每当看到一个强势的突破
01:27 交易者会寻找第二段上涨
01:29 他们的第一个想法是第二段
01:32 的高度会和第一段差不多
01:37 这里有一个上涨趋势
01:40 上涨趋势回调 然后再次突破
01:43 突破了楔形牛
01:45 其123显然也突破了下降趋势线
01:48 有很多阳线没有阴线 所以就算有回调
01:52 仍然会有第二段上涨
01:56 因此在反转上涨时买入的交易者
02:00 希望根据第一段的高度止盈
02:07 也就是第一段第二段的mm目标位`},{prompt:"按已给端点，第一段从100涨到108，回调到104后开始第二段。等长目标是哪一个？",options:["112：从104再加第一段的8","116：从108再加第一段的8","108：从104再加回调的4"],answer:0,explanation:"题目已明确两个起点，计算为104+(108−100)=112。116忽略回调，108把回调深度当成应复制的高度。",id:"20A-K02-2",knowledgeId:"K02",knowledgeTitle:"强第一段后的第二段",time:"00:52–02:07",pdfPages:[1753],type:"变式辨析",quote:`00:52 这里有一个上涨趋势 这是第一段上涨
00:56 一些计算机程序认为上涨在这里结束
01:00 另一些认为上涨在这里结束 回调123
01:04 然后第二段上涨很明显
01:07 可以看到第二段上涨从这里开始
01:11 到那里结束 这是一个完美的第一段
01:15 第二段mm标位第一段回调第二段
01:22 每当看到一个强势的突破
01:27 交易者会寻找第二段上涨
01:29 他们的第一个想法是第二段
01:32 的高度会和第一段差不多
01:37 这里有一个上涨趋势
01:40 上涨趋势回调 然后再次突破
01:43 突破了楔形牛
01:45 其123显然也突破了下降趋势线
01:48 有很多阳线没有阴线 所以就算有回调
01:52 仍然会有第二段上涨
01:56 因此在反转上涨时买入的交易者
02:00 希望根据第一段的高度止盈
02:07 也就是第一段第二段的mm目标位`},{prompt:"一次较长的上涨本身是大走势的第二段。把这段上涨放大看，里面又有一次上涨、一次回落、再一次上涨。这里的两套分段该怎样理解？",options:["大级别已经进入第二段，内部不再计算两段目标","小级别已完成两段，说明大级别第二段也已结束","结构可以嵌套，各层级的计数和目标分别保留"],answer:2,explanation:"内部完成不必等于外部完成，大级别计数也不取消内部结构。原课明确逐层示范嵌套。",id:"20A-K03-1",knowledgeId:"K03",knowledgeTitle:"两段结构的嵌套",time:"02:10–02:42",pdfPages:[1753],type:"理解判断",quote:`02:07 也就是第一段第二段的mm目标位
02:10 这里有一个强势的反转上涨
02:14 因此交易者认为很可能会有第二段上涨
02:18 第二段从这里开始吗？
02:20 好像不是重新回测 这里他们的价格差不多
02:25 但第二段是从这里开始的
02:28 所以这里有一个嵌套式的第一段
02:31 第二段第一段回调第二段
02:34 其中第二段细分为更小的第一段回调第二段
02:39 实际上这个小的第二段也细分
02:42 为更小的第一段回调第二段`},{prompt:"价格强势上破下降通道，但仍低于左侧高点且有很多区间行为。本课怎样看第二段预期？",options:["可有第二段上涨，因此原区间背景已转为强上涨","仍低于左侧高点，所以第二段测量暂时不适用","可有第二段上涨，但整体仍可能只是区间中的反弹"],answer:2,explanation:"强段后有第二段的预期，与是否形成新大趋势是两件事；区间中同样可出现两段上涨。",id:"20A-K04-1",knowledgeId:"K04",knowledgeTitle:"两段上涨不等于大趋势已成",time:"02:48–03:33",pdfPages:[1754],type:"理解判断",quote:`02:48 通常当遇到强趋势 比如在强势的突破期间
02:53 交易者期望在回调后趋势会尝试恢复
02:58 他们的第一个目标就是希望
03:01 第二段和第一段的高度大致相等
03:06 这里多头强势突破了下降通道 然后回调
03:13 交易者会在回调时买入 期待第二段上涨
03:18 此外 第一段上涨可以是上涨趋势的开始
03:23 但它也可能只是震荡区间中的一段上涨
03:27 此时价格仍然低于这个高点
03:30 而且有很多震荡区间的价格行为
03:33 所以这可能是震荡区间中两段式上涨的第一段`},{prompt:"价格先上涨一段，回跌约一半后再次上涨。多头原本把第二段涨幅等于第一段作为目标，但还没到目标就出现大阴线，部分多头提前退出。目标与提前退出如何同时理解？",options:["深回调使等长目标失效，后面的目标不应再标注","最低目标必须先到，提前退出只因测量起点选错","目标是预期参考，新的反向卖压可改变持有判断"],answer:2,explanation:"“minimum goal”不等于价格保证到达；案例明确在大阴出现后改变主意。未到不证明起点必错，也不说明深回调不能使用等长。",id:"20A-K05-1",knowledgeId:"K05",knowledgeTitle:"深回调后的初始目标不保证兑现",time:"03:44–04:15",pdfPages:[1754,1755],type:"理解判断",quote:`03:44 通常遇到像这样的深度回调
03:48 第一段、第二段的mm是最低的目标市场
03:53 有可能会继续大幅上涨
03:58 这是第一段的高度回调
04:01 第二段的高度没有完全达到第一段、第二段的目标
04:07 多头希望可以在这里止盈
04:09 但是当看到这根大阴线时
04:12 他们改变了主意 在这里或这里离场
04:15 没有离场的多头最终在这里放弃了第一段`,referenceImage:{src:"/charts/20a-deep-pullback-solution.webp",page:1755,alt:"第1755页课件整页讲解",kind:"课件整页"}},{prompt:"第二段接近预设目标前出现明显大阴线，课程描述多头怎样处理？",options:["维持目标订单，等精确到价后再判断卖压","把第二段起点下移，使原目标靠近当前价格","可提前退出，未退出者后来可能被迫放弃"],answer:2,explanation:"原课展示多头因新卖压提前离场。固等到价和为了贴当前价而改基点，都忽略了目标只是判断参考。",id:"20A-K05-2",knowledgeId:"K05",knowledgeTitle:"深回调后的初始目标不保证兑现",time:"03:44–04:15",pdfPages:[1754,1755],type:"变式辨析",quote:`03:44 通常遇到像这样的深度回调
03:48 第一段、第二段的mm是最低的目标市场
03:53 有可能会继续大幅上涨
03:58 这是第一段的高度回调
04:01 第二段的高度没有完全达到第一段、第二段的目标
04:07 多头希望可以在这里止盈
04:09 但是当看到这根大阴线时
04:12 他们改变了主意 在这里或这里离场
04:15 没有离场的多头最终在这里放弃了第一段`},{prompt:"第一次上涨突破很强。回调后的第二次上涨虽然也出现阳线，但这些阳线之后价格多次没能继续明显上涨。课程怎样比较第二段与第一段的强弱？",options:["原强突破仍主导，第二段后优先期待同强度第三段","第二段可能接近区间腿终点，留意横盘转变","只要通道仍向上，差跟随主要影响精确目标而非背景"],answer:1,explanation:"第二段质量较弱是背景变化，不只是目标精度问题。课程把通道区间化与继续再出大第三段的预期区分。",id:"20A-K06-1",knowledgeId:"K06",knowledgeTitle:"急速变通道与较弱第二段",time:"04:20–05:19",pdfPages:[1755],type:"理解判断",quote:`04:15 没有离场的多头最终在这里放弃了第一段
04:20 第二段的mm目标位往往会
04:23 以极速变通道的形式出现
04:26 非常强势的多头突破急速上涨回调
04:30 通道楔形通道123或者1234
04:39 急速变通道的上涨趋势
04:42 通道没有突破那么强势
04:46 所以交易者期待它演变成震荡区间
04:50 这个上涨波段很可能即将转变为震荡区间
04:55 阳线糟糕的跟随 阳线糟糕的跟随
04:59 糟糕的跟随
05:00 通常当你看到通道中的跟随很糟糕
05:07 那么这段上涨大概率就
05:09 只是震荡区间中的一段
05:11 而不是一个大趋势的开始
05:14 上涨通道雄奇75%的概率会向下跌破
05:19 并且演变成一个震荡区间`},{prompt:"两根连续的强阳线组成一次向上突破。用这次突破的涨幅估算上方目标时，讲师从哪个价位量到哪个价位？",options:["两根各自最高到最低的长度相加","首根最低到最后一根最高的全长","首根开盘到最后一根收盘的跨度"],answer:2,explanation:"本段明确用开盘至末根收盘。影线全长与逐根叠加都可能得到不同高度，不能在本例擅自替换。",id:"20A-K07-1",knowledgeId:"K07",knowledgeTitle:"多根突破实体跨度",time:"05:40–06:10",pdfPages:[1755],type:"理解判断",quote:`05:40 第一段回调 第二段很明显
05:43 此外 每当我看到趋势早期出现这么
05:47 强势的突破下降趋势、上涨趋势的早期
05:51 两根非常大的大阳线
05:53 从第一根突破K线的开盘价到最后
05:56 一根突破K线的收盘价往上翻一
06:00 有时突破只有一根K线
06:02 有时是3或4根K线
06:03 从第一根K线的开盘价
06:05 到第二根K线的收盘价
06:08 把这段高度往上翻一倍
06:10 这也是多头止盈的目标位`},{prompt:"看图中橙色区域。第二段上涨到了原先测量的上方目标附近，持多单的人可以在这里止盈，尝试做空的人则在押注价格会向下反转。假设冲高回落后，价格又涨到相近高度，形成潜在双顶。两顶之间的回落低点是颈线。若接下来价格涨过两个高点，做空者押注的反转怎样了？接下来该看哪个方向的测量目标？",options:["做空设想仍有效，继续观察颈线下方的测量目标","做空设想失败，继续把已到过的原上涨目标当作新目标","向下反转的设想失败，观察新的上方测量目标"],answer:2,explanation:"原上涨目标是已有多单的止盈参考。尝试做空是押注价格在这里向下反转。若价格突破两顶，做空者押注的反转失败，课程转而观察新的上方测量目标。若价格向下跌破两顶之间的颈线，才有本例的下方测量目标。图显示上涨到目标后的回落，题干给出的双顶及向上突破是后续假设。",id:"20A-K08-1",knowledgeId:"K08",knowledgeTitle:"双顶的方向与颈线",time:"06:18–06:37",pdfPages:[1755],type:"图表应用",quote:`06:18 到了之后下跌空头尝试形成双顶
06:23 所以这里是双顶的颈线
06:27 双顶颈线如果双顶反转失败被向上突破
06:31 市场通常会上涨达到反向的MA目标位
06:35 如果向下跌破颈线
06:37 交易者会期待向下的mm目标位`,image:{src:"/charts/20a-1755-k08.webp",solutionSrc:"/charts/20a-1755-k08-solution.webp",page:1755,alt:"第1755页右侧原图，橙色区内第二段上涨及冲高后的回落"}},{prompt:"上涨走势中，较大和较小两套两段等长目标都接近同一区域。有多头在这里止盈，也有人反向做空，想赚取短暂回调。对此应保留什么判断？",options:["外汇目标不精确，应等所有层级精确重合才解释回调","目标既然引出反向单，就应优先按新大趋势解释","目标区域可引出回调，反向交易仍可能只是短波动"],answer:2,explanation:"课中明确有止盈与反向剥头皮，但不由此确认大反转；外汇很少精确，也不要求所有层级精确重合。",id:"20A-K09-1",knowledgeId:"K09",knowledgeTitle:"外汇嵌套目标与反向剥头皮",time:"06:43–07:43",pdfPages:[1756],type:"理解判断",quote:`06:43 我提到过小结构可以嵌套在更大的结构中
06:50 当市场达到目标时
06:52 这是阻力区域 多头会止盈
06:55 而激进的空头会开始做空剥头皮
06:59 他们会卖出做空
07:00 然后在更高的位置卖出更多
07:03 寻找剥头皮交易的机会
07:08 当市场接近mm目标位目标时 多头止盈
07:13 空头开始剥头皮交易第一段反弹
07:18 第二段空头止盈 多头开始做多剥头皮
07:24 第一段回调
07:26 第二段多头止盈或者至少止盈一部分
07:30 空头开始做空剥头皮小的第一段反弹
07:35 第二段 第一段
07:38 反弹第二段接着一路上涨
07:43 第一段回调 第二段`,referenceImage:{src:"/charts/20a-forex-nested-solution.webp",page:1756,alt:"第1756页课件整页讲解",kind:"课件整页"}},{prompt:"上涨后横盘约三十根，随后强势上破。按本课区间高度法，第一个目标高度来自哪里？",options:["该区间上沿与下沿的价差","横盘前上涨起点到区间中点的价差","横盘三十根K线的实体长度总和"],answer:0,explanation:"本页明确按交易区间（TR）高度。一种错误说法属于另一种中点测量想法，另一种错误说法将横盘中重叠运动累加，都不是区间上下沿价差。",id:"20A-K10-1",knowledgeId:"K10",knowledgeTitle:"持续区间的突破高度",time:"07:50–08:35",pdfPages:[1757],type:"理解判断",quote:`07:50 之前提到过嵌套式结构
07:53 极小结构嵌套在更大的结构中
07:57 第一段回调
07:58 第二段当市场处于强上涨趋势时
08:04 第一个阻力位通常无法阻止趋势强势上涨
08:08 震荡区间多头开始恢复上涨趋势
08:12 大概率会去到上方的MM目标
08:15 位至少基于震荡区间的高度
08:18 区间持续了大约30或40根K线
08:22 在震荡区间突破模式
08:25 趋势恢复向上或反转下跌
08:28 如果区间像这样持续了
08:30 20 30 40根K线
08:32 突破后的第一个目标
08:35 就是基于这个区间的高度`},{prompt:"看图右侧浅橙色区域内连续上涨的K线。价格直接越过最上方的蓝线（第一个测量目标），没有明显停顿。按本课，此时应怎样看待这个目标？",options:["区间等高幅度已经走完，优先按进入整理来处理当前突破","八根微通道持续较久，优先按末端抢购高潮处理此次越线","突破穿过目标且没有停顿，继续检查更高阻力与后续一腿"],answer:2,explanation:"原课用当前强度和不暂停的实际反应继续看更高目标。等高已到不保证立刻整理，八根本身也不足以确认处于末端高潮。",id:"20A-K11-1",knowledgeId:"K11",knowledgeTitle:"微通道穿越第一目标",time:"08:41–09:04",pdfPages:[1757],type:"图表应用",quote:`08:41 这里突破非常强势
08:44 8根K线的上涨微通道似乎没有阴线
08:50 最多可能有一个小阴线
08:52 大概率还会继续上涨
08:54 换句话说至少还有一段上涨
08:57 此外价格直接超过了mm目标位
09:01 说明市场忽略了那个阻力位
09:04 这意味着它可能会尝试达到下一个阻力位`,image:{src:"/charts/20a-first-target.webp",solutionSrc:"/charts/20a-first-target-solution.webp",page:1757,alt:"原课件第1757页图表局部"}},{prompt:"课程说多头可买阳线、十字星收盘，也可在K线上下买，必须带着什么背景读？",options:["强买收盘趋势，首次回调通常仍有买盘","明确震荡区间，主要在中部跟随最新方向","目标附近横盘趋势，任何信号都适合追入"],answer:0,explanation:"这是对强突破参与者行为的解释。不能把“多种理由买入”搬到目标附近横盘或区间中部，忽略其成立条件。",id:"20A-K12-1",knowledgeId:"K12",knowledgeTitle:"买收盘与首次反转",time:"09:14–09:34",pdfPages:[1757,1758],type:"理解判断",quote:`09:14 强势的多头突破从这里开始
09:16 进入了买收盘的上涨趋势
09:18 所以交易者根据任何理由买入做多
09:21 他们会买阳线的收盘价十字星的收盘在K线下方逢低买
09:26 在K线上方用突破单买多头
09:29 期待第一次回调
09:31 第一次反转的尝试会被埋起来
09:34 然后继续上涨创新高`},{prompt:"价格上涨时轻易穿过第一个测量目标，且没有明显停顿。用两种不同的第二段起点计算，又得到更高且相近的两个目标。课程会怎样处理？",options:["优先把首目标上方的超出看成衰竭，等待回测原目标退出","统一从绝对最低点重算，最近突破起点主要只用于放止损","保留更远的合理测量候选，以相近目标区域观察下一次反应"],answer:2,explanation:"本课在目标被毫不犹豫穿过后寻找其他算法可能使用的目标。超出不单独证明衰竭，绝对最低点也不是所有测量唯一允许的起点。",id:"20A-K13-1",knowledgeId:"K13",knowledgeTitle:"忽略目标后的候选区域",time:"09:43–10:18",pdfPages:[1758],type:"理解判断",quote:`09:39 所以你可以出于任何理由买入
09:43 如果上方有一个mm目标位
09:45 但是市场毫不犹豫地大幅穿过它
09:51 这表明计算机程序并不重视那个mm目标
09:56 因此交易者会寻找更远的目标
10:01 也许是第一段第二段第一段回调
10:04 也许第二段从这里开始
10:07 一些程序会认为第二段从这里就开始了
10:11 在我看来 第二段从这里或这里开始
10:14 所以这是
10:16 下一个多头止盈的区域
10:18 空头也会开始做剥头皮交易`},{prompt:"价格强势上涨，期间连续三次向上推进。随后价格尝试下跌却没有跌下去，两次回落在相近的低位止住，并再次出现向上入场信号。课程优先把这段回落看成什么？",options:["失败反转可成为牛旗，继续评估上涨触发","三推数满已完成顶部，高二只看作空头回补","两次下跌已抵消上涨，先按无方向区间评估"],answer:0,explanation:"本页仍在强趋势，约80%是此背景的课堂近似。三推数量和两次下跌都不足以脱离强度直接确认顶部或区间。",id:"20A-K14-1",knowledgeId:"K14",knowledgeTitle:"强趋势反转失败与高二牛旗",time:"10:23–11:42",pdfPages:[1759],type:"理解判断",quote:`10:23 强势突破
10:24 第一次反转下跌的尝试大概率会失败
10:28 期待至少还有一段上涨
10:32 多头在回调K线的上方买入
10:36 压铸趋势恢复上涨
10:41 又一次相当强势的突破
10:44 所以第一次反转下跌的尝试大概率会失败
10:48 尽管是三推些行了 123或者1123
10:53 至少还会再上涨一些 即使只上涨一根K线
10:59 我的80%法则是当市场处于强上涨趋势时
11:04 80%反转的尝试会失败
11:08 所有这些反转尝试
11:10 双顶或高点抬高的大反转全都失败了
11:13 更有可能会成功的向上突破这个窄震荡区间
11:18 反转强势变成牛蹄 上涨趋势恢复
11:25 小双底所以是一个小的高二多头
11:28 会在那根K线的高点上方买入
11:31 或者在阳线的高点上方买入高二牛
11:35 其潜在的第一段回调
11:38 第二段对于剥头皮交易而言
11:42 那里是一个不错的止盈区域`},{prompt:"同一区域同时接近两段等长与初始突破高度目标，课程为何更留意这里？",options:["相近目标属于同一算法重复，保留一条后其他因素可忽略","多个目标集中说明已有卖压被消化，应优先预期加速","不同测量依据汇合，可能增加止盈与反向卖盘"],answer:2,explanation:"不同依据对同一区域的共同关注可促止盈。接近不代表同一算法重复，也不单独证明卖压已被吸收。",id:"20A-K15-1",knowledgeId:"K15",knowledgeTitle:"不同MM与缺口目标汇合",time:"11:45–12:33",pdfPages:[1760],type:"理解判断",quote:`11:42 那里是一个不错的止盈区域
11:45 这个第一段第二段的mm标位
11:50 也大约是第一段突破高度的
11:54 mm多头突破已经超过了这个
11:57 窄震荡区间的mm强势
12:00 突破很可能是测量型缺口
12:04 所以我向下寻找支撑位 在这里上涨的起点
12:08 从起涨点到这段上涨的最高点往上翻一倍
12:17 可以看到这里有多个阻力汇聚在一起
12:22 第一段回调
12:23 第二段把第一段突破的高度翻一倍
12:28 所以市场开始横盘
12:30 因为多头开始止盈 空头开始做空
12:33 市场进入震荡区间`},{prompt:"“强趋势常穿阻力”与“上涨最终会在阻力结束”怎样同时应用？",options:["继续找候选并观察反应，汇合时更留意退出","既然最终会结束，第一处测量目标（MM）就先按顶部处理","既然常穿阻力，趋势结束前无需再标测量目标（MM）"],answer:0,explanation:"一种误判把趋势惯性变成不看目标，另一种误判把终会结束变成首次到达即结束。原课强调观察过程与汇合背景。",id:"20A-K16-1",knowledgeId:"K16",knowledgeTitle:"趋势惯性与终点观察",time:"12:36–13:02",pdfPages:[1760],type:"理解判断",quote:`12:36 尽管我说过80%的阻力无法阻止上涨趋势
12:41 然而最终所有的上涨趋势都会在阻力位结束
12:47 所以继续寻找阻力位
12:49 然后观察价格到达阻力时的行为很重要
12:54 如果一个价格区域有多个阻力汇聚在一起
12:58 多头会更加愿意止盈
13:00 空头会更愿意做空
13:02 并且逢高加仓做剥头皮交易`},{prompt:"看图上方橙色横线附近。价格接近几个测量目标汇合的区域后，上冲幅度变小，出现小实体和十字星，并形成三次向上推进。与前面强势上涨时相比，本课怎样调整对后续走势的预期？",options:["继续按最初强突破，优先预期同规模第三大段","因仍在高位，先把全部十字星都当高二牛旗","更留意横盘至下跌及区间，观察多头止盈"],answer:2,explanation:"这里是多项末端信息的组合，不能只沿用最初强度或给所有停顿套牛旗名称。课程预期至少几个横盘至下跌波段。",id:"20A-K17-1",knowledgeId:"K17",knowledgeTitle:"目标附近的末端弱化",time:"13:09–14:02",pdfPages:[1760],type:"图表应用",quote:`13:09 多头突破没有人会卖出
13:13 突破突破没有人会卖出
13:16 但现在开始出现一些横盘的价格行为
13:21 所以空头会开始卖出
13:24 临近收盘止盈突破变得越来越小
13:29 开始出现横盘的十字星
13:32 K线三次向上推动一二三
13:35 两个阻力汇聚第一段
13:37 回调第二段 同时也是第一段突破的MM
13:46 之前也提到过三推楔形 这是另一个理由
13:50 预期价格至少不会在接下来
13:53 的几根K线内上涨太多
14:00 楔形顶两个阻力
14:02 大概率至少有几个横盘到下跌的波段`,image:{src:"/charts/20a-confluence.webp",solutionSrc:"/charts/20a-confluence-solution.webp",page:1760,alt:"原课件第1760页图表局部"}},{prompt:"看图左半部编号 1、3、4 下方的低点。价格从 1 开始第一次强反弹，随后回落到更低的 3，再从 4 附近发动强势突破。用第一段涨幅估算后续目标时，为什么课程会考虑这几个不同的起点？",options:["最低价、早期反转与真正突破可对应不同算法","只有首次反转具有意义，后续新低与突破应忽略","只有最低价具有客观性，1与4主要供画图美观"],answer:0,explanation:"起点是结构解释，不只绝对极值。原课允许多个算法候选，且不在走势完成前声称已知道共同选择。",id:"20A-K18-1",knowledgeId:"K18",knowledgeTitle:"测量起点的多种算法",time:"14:11–15:13",pdfPages:[1761],type:"图表应用",quote:`14:11 有时当你在寻找mm标位
14:14 起涨点的位置不太好确定
14:19 会有很多种选择
14:24 上涨趋势是从这里三开始的吗？
14:27 它是最低价格还是在震荡之后？
14:30 从这里四开始 还是从这里一开始？
14:34 3、这个新低可以忽略 突破回调
14:37 然后第一段上涨开始
14:39 一些程序会说一是上涨趋势的起点
14:43 三只是一次深度回调
14:45 略微创新低而已
14:47 一些程序会认为K线图上的
14:50 最低价是上涨趋势的起点
14:52 一些程序会说这是一个震荡区间
14:56 真正的突破从四开始 所以他才是上涨趋势
15:01 的起涨点
15:02 大多数程序会认为四是起涨点
15:09 一些会认为 一是起涨点
15:13 交易者在寻找mm标尉时会同时参考这两个`,image:{src:"/charts/20a-start-choices.webp",solutionSrc:"/charts/20a-start-choices-solution.webp",page:1761,alt:"原课件第1761页图表局部"}},{prompt:"价格从一个低点强势反弹到前高，随后回调，低点比第一次反弹的起点略低。后来上涨在按第一次反弹高度算出的目标附近暂停。这个反应如何帮助判断最初选用的测量起点？",options:["3未被采用说明图中报价错误，应从数据中删去","目标附近暂停说明所有算法事前都确定1是唯一底部","部分算法可能仍把1当反转起点，3视为深回调"],answer:2,explanation:"原课从反应推断部分计算机采用1，但不否认真实更低价3，也不把事后反应变成所有算法的事前共识。",id:"20A-K19-1",knowledgeId:"K19",knowledgeTitle:"更低回调不必取消早期起点",time:"15:22–16:08",pdfPages:[1762],type:"理解判断",quote:`15:22 这里多头强势反转
15:25 然后回调到了更低的低点
15:29 但是因为趋势已经开始向上柱
15:32 至少改变了市场周期
15:34 很多程序会认为上涨趋势确实是从这里开始
15:39 尽管三跌破了一
15:40 但它只是一次深度回调而已
15:46 连续的阳线 第二根很大 收在高位
15:55 交易者会寻找向上的mm目标位
15:59 可以看到价格在这里横盘 上涨趋势暂停了
16:05 事实上很多计算机确实使用了这
16:08 段上涨作为止盈的MM目标位`},{prompt:"同一段走势可以从几个合理的起点计算，得到远近不同的目标。本课一般先怎样排序观察这些目标？",options:["先看最高可能目标，较近目标只用于事后解释","先取全部目标平均值，用一条线替代其他候选","先看较近合理目标，被忽略后看更远候选"],answer:2,explanation:"原文先最近、再后续候选。最远优先或平均成唯一线都没有保留不同测量依据及逐处反应。",id:"20A-K20-1",knowledgeId:"K20",knowledgeTitle:"先看较近目标",time:"16:20–16:32",pdfPages:[1763],type:"理解判断",quote:`16:20 用哪一个其实并不重要
16:23 有些计算机用于作为起涨点或者三四百
16:27 我通常从最近的一个低点开始
16:30 如果MM目标位超出它
16:32 那么我再看更远的目标`},{prompt:"图左下方编号 7 和 8 附近都可作为测量起点的候选。讲师偏好从一连串强阳线开始的位置测量第二段，理由是什么？",options:["该处离目标更近，因此仅靠距离即可证明它是起点","该处不是最低点，因此本例仍应统一改用最低点","连续强阳支持上涨开始，而非只选绝对低点"],answer:2,explanation:"原课偏好来自连续强阳突破的结构证据。最低价不是唯一算法，距离较近也不是事前证明某起点正确的充分依据。",id:"20A-K21-1",knowledgeId:"K21",knowledgeTitle:"第二段起点与突破强度",time:"16:36–17:17",pdfPages:[1763,1764],type:"图表应用",quote:`16:36 假设计算机程序说这里是真正的起涨点
16:40 前面都只是震荡区间
16:42 所以目标是第一段第二段
16:45 第二段是从这里开始
16:47 从这里开始还是从这里开始的？
16:50 和刚才一样 不同的程序会有不同的选择
16:54 这里有连续的阳线突破
16:56 所以我个人会倾向于把
16:59 七看作第二算的起涨点
17:03 可以看到有很多人在MM标位止盈
17:07 第一段回调第二段说明更多电脑
17:10 程序认为上涨趋势从这里开始
17:13 而不是这里
17:14 第二段上涨从这个多头突破开始
17:17 而不是那个低点或那个低点`,image:{src:"/charts/20a-second-start.webp",solutionSrc:"/charts/20a-second-start-solution.webp",page:1763,alt:"原课件第1763页走势图局部"}},{prompt:"不同第二段起点推得的两个目标很接近，价格稍过其中一条便回调。课程怎样处理？",options:["优先只标较近线，稍超它就按强突破继续而不再看远线","优先只标较远线，近线出现的止盈反应只作为普通噪声","相近两线都可保留为止盈区域，重点看价格在共同附近的反应"],answer:2,explanation:"本课说两者很接近，可以都标。不能只凭稍过近线便删去区域作用，也不能因远线未到而忽略近线已经出现的卖盘。",id:"20A-K22-1",knowledgeId:"K22",knowledgeTitle:"相近目标按区域观察",time:"17:27–18:06",pdfPages:[1763,1764],type:"理解判断",quote:`17:27 多头突破跟随
17:28 也许这是第二段上涨趋势的开始
17:35 一些程序认为是这里 我会考虑各种可能性
17:39 并且观察市场的反应
17:41 这里棕色线非常接近MM标位出现了回调
17:45 这告诉我很多电脑程序认为第二段上涨从这里开始
17:50 这个mm目标位紫色线被略微超过
17:53 这两个第二段的mm目标很接近
17:57 几乎在同一个价格
18:02 选择哪个都差不多 我会把两个都标注出来
18:06 观察市场的行为 在那个区域附近止盈`},{prompt:"价格在一个测量目标附近短暂停顿后又继续上涨。按课程，接下来应怎样用其他合理的测量结果观察上方价位？",options:["检查更大合理走势段生成的下一阻力","把略微停顿当成大第二段完成，后续上涨只按第三段","继续等价格回到原目标，因为第一次投射应有优先权"],answer:0,explanation:"上涨继续越过目标时，课程寻找更大结构的下一候选。不能靠首次计算优先权固等，也不能一次小停顿就锁定大层级计数。",id:"20A-K23-1",knowledgeId:"K23",knowledgeTitle:"穿过目标后看更大腿",time:"18:15–19:07",pdfPages:[1765],type:"理解判断",quote:`18:15 如果继续上涨超过了9的高点
18:18 多头就会寻找新的阻力位目标位
18:24 比如说不选择7或8作为起涨点
18:29 而是把六作为第二段的起点
18:32 对于第一段不用4 而是把一作为起点
18:41 当市场忽略了一个目标
18:44 交易者就会寻找其他潜在的目标
18:47 这里有一些回调 也许这是上涨的结束
18:51 说明我们选择的目标是正确的
18:53 但如果市场继续上涨
18:55 交易者就会寻找下一个阻力位
18:58 他们会给第二段第一段选择更
19:01 低的起涨点 创建一个
19:03 更高的目标 然后多头会在那里止盈
19:07 空头会在那里开始做空`},{prompt:"看图左侧高点之后的K线。价格起初只是短暂下跌和横盘，后来浅红色高亮的连续阴线才明显向下突破。讲师会优先从哪个位置量第一段下跌？",options:["绝对最高价处，因为最低目标必须从最高价量起","明确空头突破处，同时保留更大结构候选","第一次小阴线处，因为出现转跌即等于强突破"],answer:1,explanation:"本课区别单根转跌后横盘与真正空头突破，通常先按突破处看较近目标；不强制用绝对高点，也不把一根小阴等同突破。",id:"20A-K24-1",knowledgeId:"K24",knowledgeTitle:"下降从突破而非绝对顶起量",time:"19:15–20:23",pdfPages:[1766],type:"图表应用",quote:`19:15 下降趋势也是一样的
19:19 第一段下跌的起点是这里
19:22 还是从这里的突破开始 我两个都会考虑
19:25 然后观察市场的行为波段通常是由突破开始的
19:30 这里是突破
19:31 前面是反转 这可能是下跌的起点
19:34 在行情走出来之前
19:36 没人知道到底是哪一个
19:38 以它作为参考目标比较近
19:40 达到的概率更高
19:42 所以我会先把它作为第一段来看目标位
19:45 如果价格跌破了那个目标
19:47 那么我再把它作为第一段的起跌
19:51 点看那里略微超出mm目标位
19:55 然后反转上涨
19:58 看起来大部分计算机把
20:00 突破作为第一段下跌的起点
20:03 而这里只是一个震荡区间
20:06 不是第一段下跌的起点
20:13 如果价格跌破这个点
20:15 空头就会寻找新的mm目标位
20:19 不再把它作为第一段的起跌点 而是看这里
20:23 这样会得到一个更低的目标`,image:{src:"/charts/20a-bear-start.webp",solutionSrc:"/charts/20a-bear-start-solution.webp",page:1766,alt:"原课件第1766页走势图局部"}},{prompt:"眼前下跌可数成两段，也可能只是更大第一段，课程如何处理？",options:["只要存在大第一段，就可排除眼前反转的意义","只要小两段齐全，就可直接认定整段下降结束","先保留层级可能，借后续强反转等反应再确认"],answer:2,explanation:"本段明确有时直到强反转才知道答案。两种错项各把一个层级的可能性升级为排除其他解释的结论。",id:"20A-K25-1",knowledgeId:"K25",knowledgeTitle:"第二段终点可能暂不清楚",time:"20:32–21:16",pdfPages:[1767],type:"理解判断",quote:`20:32 很多时候直到价格强势反转之前
20:36 交易者无法确定mm是否已经结束第一段回调
20:44 第二段结束了吗？
20:46 大的第一段回调第二段
20:50 或者它只是大的第一段 小的第一段的结束
21:00 是不是第一段回调
21:02 第二段所以还会继续下跌
21:05 这个反弹会变成熊旗 然后继续下跌
21:09 这是不是一个巨大的嵌套式的第一段
21:13 然后还会有第二段下跌
21:16 有时候直到出现这样的大反转才知道答案`},{prompt:"潜在下方目标尚未到就出现大幅反弹，课中如何重估？",options:["原目标尚未到仍先按熊旗处理，强反弹主要用来寻找再卖点","大反弹至少提示区间，原下方目标需与新的结构可能一起重估","大反弹已经确立新强上涨，向上等长可替代所有下方目标"],answer:1,explanation:"课程至少重估为区间，并非仍按原强下降单向等待；但也没从大反弹直接确认强上涨。关键在市场周期已经发生变化。",id:"20A-K26-1",knowledgeId:"K26",knowledgeTitle:"大跌大涨后原目标要重估",time:"21:31–22:23",pdfPages:[1767],type:"理解判断",quote:`21:31 可以看到
21:32 下降趋势没有达到那些潜在的目标
21:39 因此市场没有把它看作第一段回调第二段
21:44 或者第一段回调第二段大幅反弹
21:49 现在市场处于震荡区间
21:52 你可以说这仍然处于下降趋势
21:56 这是一个双顶
21:57 这是颈线价格会跌破去到下方的MM目标位
22:02 所以你可以认为市场仍然处在宽下降通道中
22:06 但至少现在是震荡区间
22:09 多头的反转反弹足够强势
22:11 所以空头不再期待第一段、第二段的MM目标位
22:15 反而会有交易者寻找向上的目标位
22:19 第一段回调第二段
22:21 第一段回调
22:23 第二段失败了 很多时候他会失败住`},{prompt:"潜在头肩底上破失败，随后仍大涨大跌，课程为何不坚持向上波段目标？",options:["形态可能失败并转三角形区间，名称不保证成功波段","约40%成功意味着每五次出现都固定有两次达到目标","头肩底颈线只供画图，测量目标（MM）应只由最后一根K线生成"],answer:0,explanation:"原课给的是背景性近似，不是固定次数配额。失败形态可以区间化，不代表颈线失去所有意义或只准用单根K测量。",id:"20A-K27-1",knowledgeId:"K27",knowledgeTitle:"头肩底失败与区间限制",time:"22:29–23:30",pdfPages:[1768],type:"理解判断",quote:`22:23 第二段失败了 很多时候他会失败住
22:29 因为是震荡区间突破经常失败
22:32 多空双方都感到失望 头肩底左肩头部右肩
22:36 然而多头突破失败
22:39 市场开始震荡下跌 大多数大反转
22:43 大多数头肩顶和头肩底
22:46 只有40%的概率会有成功的波段交易
22:50 60%的概率要么原来的趋势继续
22:54 要么市场一直横盘震荡
22:57 看这里抛售下跌
23:00 也许这是第一段也许这是第一段
23:03 然后横盘第一段下跌到底在哪里结束
23:07 这里还是这里
23:08 一些程序会认为这是第一段
23:11 下跌之后反弹的一部分
23:13 所以第一段在这里结束
23:15 第二段在这里或这里开始
23:21 三角形很多头肩底都会形成三角形的结构
23:26 一二尝试突破颈线失败
23:30 变成了三角形和雄奇`},{prompt:"价格先明显下跌，随后在高点逐步降低、低点逐步抬高的三角形区间里来回波动。用“两段下跌”来估算目标时，第一段在哪里结束，第二段又从哪里开始？",options:["第一段到三角最低点，第二段从区间中任一下跌起算","第一段包含整个区间，第二段等到反弹回最高点起算","第一段到区间开始，第二段从区间结束后突破起算"],answer:2,explanation:"本页规则以明显区间的开始/结束划段。内部摆动不自动是大趋势第二段，整个区间也不应机械塞进第一段高度。",id:"20A-K28-1",knowledgeId:"K28",knowledgeTitle:"明显区间划分第一第二段",time:"23:33–24:27",pdfPages:[1768],type:"理解判断",quote:`23:30 变成了三角形和雄奇
23:33 而不是成功的头肩底反转还是那个问题
23:40 第一段在这里结束还是在这里结束
23:44 这是第二段的起跌点吗？
23:46 头肩底反转失败 强势的空头突破
23:50 第二段从这里开始还是这里 甚至是这里
23:54 我不认为他从这里开始抛售
23:58 然后恢复上涨 所以这里应该重新开始算
24:05 我会先把这个作为第一段 而不是这个
24:09 因为这样得到的目标会更近
24:12 然后我必须决定第二段从哪里开始
24:16 这里的跌幅不够大
24:19 也许这整个部分都只是第一段的反弹
24:23 然后我在寻找下降趋势恢复的第二段下跌
24:27 也许从这里开始 也许从这里开始`,referenceImage:{src:"/charts/20a-triangle-solution.webp",page:1768,alt:"第1768页课件整页讲解",kind:"课件整页"}},{prompt:"三角内部一次下跌离预估等长目标还远便横盘，为什么本课不直接算第二段已结束？",options:["它可能只是区间内一腿，尚无相应目标与突破反应","只要未精确到目标，就不允许任何层级的第二段存在","只要曾跌过前一根K线，后续横盘不影响第二段完成"],answer:0,explanation:"原课具体判断依赖区间背景、距离及后续横盘。不是要求所有第二段精确到价，也不是用单根破低替代整段分析。",id:"20A-K29-1",knowledgeId:"K29",knowledgeTitle:"区间内部下跌不自动算第二段完成",time:"24:33–25:10",pdfPages:[1768],type:"理解判断",quote:`24:33 这本来有可能是第一段回调第二段
24:37 但事后看来并不是
24:40 它只是三角形中的一个下跌波段
24:43 而不是第二段的结束
24:45 然而如果它确实跌到了离MM非常近的地方
24:49 然后再反转
24:50 那么交易者事后会说它就是第二段
24:53 但根据在这里看到的情况
24:55 他不是第二段 没有接近第一段
24:58 第二段的mm标位继续横盘
25:02 大涨大跌 大涨大跌
25:05 如果有第一段 第二段的mm目标肯定不是他
25:10 所以它是第一段`},{prompt:"图下方红线的水平部分是下跌第二段的等长目标。看绿色区域左边的大阴线，它的下影线还没碰到红线，随后价格已连续反弹。按本课，第二段有可能已经结束吗？",options:["可认为第二段在目标区域结束，精确触线非必要","未到线只能算第一段暂停，下一次必须补齐目标","强反转说明原测量无效，应把目标移到实际最低点"],answer:0,explanation:"本例用强反转及接近目标共同支持完成，不要求精确到价，也不需要移动原线让它事后命中。",id:"20A-K30-1",knowledgeId:"K30",knowledgeTitle:"目标稍上强反转与完成判断",time:"25:14–26:09",pdfPages:[1769],type:"图表应用",quote:`25:12 或者也许这是第一段
25:14 然后寻找第二段的起跌点
25:17 红色线是目标位 如果我们把它看作第一段的话
25:21 如果跌破这个目标
25:23 那么交易者会认为也许这才是第一段的结束
25:27 然后他们会看下一个支撑位
25:30 目标价格在这里强势反转上涨
25:34 电脑程序大概率会这样判断
25:37 第一段震荡区间三角形
25:40 然后第二段从这里或这里开始
25:54 不同的程序会选择不同的点位
25:56 每个机构都有不同的算法
25:59 除非是诸葛亮 不然没有什么是特别清晰
26:03 但我总是优先看最近的支撑和阻力位
26:06 如果市场忽略他们并突破他们
26:09 然后我会看下一个可能性`,image:{src:"/charts/20a-near-target.webp",solutionSrc:"/charts/20a-near-target-solution.webp",page:1769,alt:"原课件第1769页图表局部"}},{prompt:"大区间内部一段上涨超过第一段高点，本课为什么仍保留“只是区间一部分”？",options:["只要涨过前高就说明第一段测量需要改为反向","只要出现大区间，之后的第一段第二段测量都失效","整个区间尚未结束，局部新高不足以确认大第二段"],answer:2,explanation:"判断层级需看区间是否真正突破，而非只看某个高点。局部新高不强制反向测量，大区间也不取消之后两段目标。",id:"20A-K31-1",knowledgeId:"K31",knowledgeTitle:"大区间内创新高仍可能是内部腿",time:"26:14–27:07",pdfPages:[1770],type:"理解判断",quote:`26:14 第一段回调第二段没有完全达到
26:17 但它仍然是第一段回调
26:20 第二段也有可能是大的
26:23 第一段回调第二段
26:30 由于市场进入了一个很大的震荡区间
26:33 所以我不认为这是第二段上涨
26:36 所以这是第一段震荡区间
26:39 然后第二段从这个突破开始
26:43 在这里的某个时刻我
26:46 开始思考 这有可能
26:48 是第二段上涨的起点
26:51 之前有一段上涨
26:52 这整个部分是上涨后的震荡区间
26:55 而这一段只是回调大震荡
26:58 区间中的一段强势上涨而已
27:00 尽管它远远超过了第一段突破的最高点
27:04 它可能仍然只是强势
27:07 突破后的回调中的一部分`},{prompt:"前面的上涨仍属大区间，后来出现连续八根强上涨。本课为何更认真考虑新第二段？",options:["连续八根已经满足固定门槛，不必再看区间边界","前面内部腿曾创新高，因此八根上涨仍须算同一内部腿","强度支持区间后恢复，再观察第二段目标反应"],answer:2,explanation:"本例连续上涨增强区间后恢复的判断，但不是固定根数门槛。此前内部腿创新高也不妨碍区间结束后出现新的大第二段。",id:"20A-K32-1",knowledgeId:"K32",knowledgeTitle:"区间后强上涨与新第二段",time:"27:16–28:00",pdfPages:[1770],type:"理解判断",quote:`27:16 连续8根K线上涨
27:18 大概率上涨趋势会恢复大概率
27:21 这是第二段上涨的开始
27:26 所以第一段然后震荡区间
27:29 然后第二段可以看到很多程序
27:32 确实认为第一段在这里结束
27:35 因为你可以看到在第一段
27:38 第二段的目标位有很多卖盘
27:40 因为价格下跌了 这是多头在止盈
27:44 空头在做空
27:47 至于第二段上涨
27:49 它在这里结束了吗这里结束了吗这里结束了吗？
27:53 不同的电脑程序有不同的算法
27:55 到底在哪里不重要
27:57 我只是在寻找一个止盈的
28:00 理由以及反向剥头皮的理由`,referenceImage:{src:"/charts/20a-new-leg-solution.webp",page:1770,alt:"第1770页课件整页讲解",kind:"课件整页"}}],sourceFile:"BTC PAF 20A Measured Moves_中文 (源语言).srt"},{id:"20B",group:"测量目标",title:"区间与突破高度、反向测量",range:"00:00–17:50",revision:"measured-20b-v1",notes:["区间高度从被突破边界向外投射；区间中点对称法是另一种较次要方法，不能混用全高、半高和起点到中点的距离。","影线重叠而实体不重叠仍可保留实体缺口信息，强度不等于完全无重叠；看后续恢复、跟随和实际方向。","单根或多根强突破可按首根开盘到末根收盘跨度测量；失败后同样高度也可反向投射。强突破初始预期与起点已失守后的条件不同。","先观察原突破起点，再看较近目标；强势穿过且有跟随时查更远候选，包括整个波段、失败双底及小熊旗测量缺口。","目标附近的新买卖不直接确认大反转。窄通道首次反弹仍受限制，目标、高潮、楔形和减弱动能汇合时再提高对反转的关注，仍保留区间结果。"],knowledgePoints:[{id:"K01",title:"区间高度的方向投射",summary:"明确向下突破区间后，可用上沿至下沿高度从下沿向下投射；须区分区间全高、区间中点与突破K本身高度。",time:"00:26–00:47",pdfPages:[1775],questionIds:["20B-K01-1"]},{id:"K02",title:"影线重叠但实体不重叠",summary:"回测高点超过旧低点，影线虽重叠，但两处K线实体不重叠仍可称实体缺口/负缺口；不能与完全没有价格缺口作用混同。",time:"00:50–01:27",pdfPages:[1775],questionIds:["20B-K02-1"]},{id:"K03",title:"实体缺口的延续预期有限定",summary:"影线重叠而实体不重叠，市场再转跌仍可有下方MM预期；课中约60%低于完全不重叠时，不套给任意实体缺口。",time:"01:34–01:42",pdfPages:[1775],questionIds:["20B-K03-1"]},{id:"K04",title:"区间到突破的市场周期",summary:"市场在趋势与区间间转换；根据区间高度的MM通常描述突破后的趋势目标，不是区间内部每次往返都要外推。",time:"01:49–02:02",pdfPages:[1776],questionIds:["20B-K04-1"]},{id:"K05",title:"强突破跟随与上方目标卖盘",summary:"强阳突破并有跟随，区间高可向上投射；目标处既有多头限价止盈，也有空头反向剥头皮，两类卖盘会造成停顿。",time:"02:08–02:35",pdfPages:[1776],questionIds:["20B-K05-1"]},{id:"K06",title:"中点测量的含义",summary:"区间作为双方共识区域，其中点可能接近整个波段中点，可把起点到中点的距离向另一侧映射；区别于仅复制区间全高。",time:"02:39–03:36",pdfPages:[1777],questionIds:["20B-K06-1","20B-K06-2"]},{id:"K07",title:"中点测量也可向下",summary:"本课展示上涨后共识区间与下跌后共识区间，两边都可按中点理解波段延伸；不是只适合上涨。",time:"03:43–04:23",pdfPages:[1778],questionIds:["20B-K07-1"]},{id:"K08",title:"中点法的次要地位",summary:"讲师认为中点法相对次要：区间边界有时不清，且它是两段等长的变体；不因多一种目标而自动赋予更高可信度。",time:"04:26–04:41",pdfPages:[1779,1780,1781],questionIds:["20B-K08-1"]},{id:"K09",title:"强腿后区间的两段划分",summary:"先有强走势段后出现明显区间，第一段在区间开始时结束，第二段从区间结束后开始；不把内部更高高点自动续到第一段里。",time:"04:49–05:31",pdfPages:[1782],questionIds:["20B-K09-1"]},{id:"K10",title:"区间高度目标与两段目标并存",summary:"同一图还可按各区间高度投射上/下目标；实际有下方目标未到，说明候选可用于观察但不是必然兑现。",time:"05:39–06:01",pdfPages:[1783],questionIds:["20B-K10-1"]},{id:"K11",title:"单根突破实体的测量",summary:"单根强阳突破可从开盘至收盘量实体，向上再投射同高；区间高度、整段走势与单根实体是不同尺度。",time:"06:06–06:51",pdfPages:[1785],questionIds:["20B-K11-1"]},{id:"K12",title:"强突破后的顺向与反向",summary:"强多头突破后可有顺向MM，也可能失败跌破起点达到反向MM；课程约60/40针对该初始强突破背景，不能移给任意形态。",time:"07:00–07:49",pdfPages:[1786],questionIds:["20B-K12-1"]},{id:"K13",title:"反向目标前先观察突破起点",summary:"连续两至四根阴线强反转时，空头先看多头突破起点；到起点后是反弹还是连续下破跟随，会影响反向MM预期。",time:"07:52–08:29",pdfPages:[1787],questionIds:["20B-K13-1"]},{id:"K14",title:"下方目标与双方买盘",summary:"失败多头后的下跌到反向目标，尤其空头动能减弱时，可有空头买回止盈与多头剥头皮买入；目标后的反弹不一定是大上涨。",time:"08:36–08:44",pdfPages:[1787],questionIds:["20B-K14-1"]},{id:"K15",title:"多根强突破与60至70预期",summary:"特别强的多头突破并有跟随，课中约60～70%预期按首根开盘到末根强突破收盘投射；趋势减弱到明显目标可部分/全部止盈。",time:"08:50–09:49",pdfPages:[1788],questionIds:["20B-K15-1","20B-K15-2"]},{id:"K16",title:"强阴但跟随差可失败",summary:"强空头突破阴线本身有延续信息，但跟随不好就要保留失败、反向突破抛售高潮起点并向上MM的可能。",time:"10:00–10:22",pdfPages:[1789],questionIds:["20B-K16-1"]},{id:"K17",title:"三角突破模式与双方触发",summary:"反复尝试突破抛售高潮起点可形成头肩底、双顶或三角形解释；多头看上方突破买，空头看右肩/局部低点下方卖，等实际突破。",time:"10:32–11:03",pdfPages:[1789],questionIds:["20B-K17-1"]},{id:"K18",title:"阴线实体的反向上测量",summary:"空头突破失败后，强阴实体也可用于反向向上投射；达到上方目标后多头止盈、空头卖出，可能只是回调或区间。",time:"11:20–12:12",pdfPages:[1790],questionIds:["20B-K18-1"]},{id:"K19",title:"起点跌破后的条件概率",summary:"强多头突破底部被跌破之后，课程再给约50%反向下方MM、约50%横盘或上涨，这是新条件，与初始强突破的60/40不同。",time:"12:15–12:50",pdfPages:[1791],questionIds:["20B-K19-1"]},{id:"K20",title:"优先最近的反向实体目标",summary:"下破强多头底部后，较近反向目标先用首根开盘到末根收盘的实体跨度；可再比较整段高度产生的更远目标，不一开始只盯最远处。",time:"12:54–13:10",pdfPages:[1791],questionIds:["20B-K20-1"]},{id:"K21",title:"强破第一目标后继续找下一处",summary:"第一下方MM无明显买盘，价格强势跌破且有跟随，课程找下一个目标；目标是观察点，不是跌到就自动抄底。",time:"13:13–13:36",pdfPages:[1792],questionIds:["20B-K21-1"]},{id:"K22",title:"失败双底与更大高度",summary:"原多头试图双底向上突破颈线，但实际跌破，可按整个多头突破/双底尝试高度反向向下测量，而不只限于几根实体。",time:"13:50–14:06",pdfPages:[1793],questionIds:["20B-K22-1"]},{id:"K23",title:"强窄下降首次反弹的限制",summary:"强下跌且窄通道，首次反弹通常小，课中讨论5～10根后可能再跌，之后才考虑更大反转；数字是此背景描述，不是倒计时。",time:"14:06–14:28",pdfPages:[1793],questionIds:["20B-K23-1"]},{id:"K24",title:"较大波段目标与未到先续跌",summary:"不只用几根突破K，也可用整个上涨波段；未到较大目标时新空头突破及筑底失败，仍支持继续观察下跌。",time:"14:36–15:21",pdfPages:[1794],questionIds:["20B-K24-1"]},{id:"K25",title:"小熊旗突破与测量缺口",summary:"小熊旗向下突破也可提供测量依据，结合高点至低点或缺口端点，目标处空头回补和多头买入；不能只看最大级别突破。",time:"15:29–15:59",pdfPages:[1794],questionIds:["20B-K25-1"]},{id:"K26",title:"目标与反转背景汇合",summary:"目标附近又有更低低点大反转、三推楔形、高潮和弱化卖压，支撑理由增加；空头止盈、多头买入可带至少两段上涨，仍可先区间。",time:"16:06–17:11",pdfPages:[1795],questionIds:["20B-K26-1","20B-K26-2"]}],questions:[{prompt:"按本课区间高度法，区间100～106，明确跌破100后，等高下方目标是多少？",options:["97：从100减去半个区间3","94：从100减去区间高度6","100：从106减去区间高度6"],answer:1,explanation:"全区间高度是6，应从被跌破的下沿100再减6。97改用了半高，100只算回原下沿，没有完成区间外投射。",id:"20B-K01-1",knowledgeId:"K01",knowledgeTitle:"区间高度的方向投射",time:"00:26–00:47",pdfPages:[1775],type:"理解判断",quote:`00:26 每当市场突破时
00:28 通常会尝试移动和之前相同的距离
00:32 例如这里有一个震荡区间
00:35 然后被明确的突破
00:37 因此交易者会寻找向下的MM目标位
00:43 就像这样价格跌到了下方的mm标尉
00:47 基于这个震荡区间的高度`},{prompt:"价格跌破旧低点后反弹。反弹K线的上影线伸过旧低点，但它的实体（开盘价与收盘价之间的部分）和旧低点处K线的实体没有重叠。课上把这种缺口叫什么？",options:["属于已经完全回补，实体差异不再参考","属于完整无重叠缺口，影线可不计","仍有实体缺口，也称负缺口"],answer:2,explanation:"本课特别区分影线与实体。它不是完整无重叠，也不等于所有缺口信息都已被回补掉；图中细节由本段字幕说明。",id:"20B-K02-1",knowledgeId:"K02",knowledgeTitle:"影线重叠但实体不重叠",time:"00:50–01:27",pdfPages:[1775],type:"理解判断",quote:`00:47 基于这个震荡区间的高度
00:50 看一看跌破之后的反弹
00:53 跌破了区间然后反弹
00:55 反弹的高点超过了突破点的低点
01:01 这是一个实体缺口
01:03 尽管它们的引线之间有重叠
01:06 值得注意的是
01:08 仔细看反弹K线和突破点K线的实体部分
01:12 无论是在这里还是这里 实体部分没有重叠
01:17 只是引线重叠 我称之为实体缺口
01:20 也叫负缺口
01:21 尽管回调的最高点超过了突破前的最低点
01:25 即引线之间碰到
01:27 但K线的实体部分并没有重叠`},{prompt:"跌破后反弹的影线与旧低点重叠，但K线实体仍不重叠；随后价格转跌。本课对这个实体缺口怎样判断？",options:["只要影线重叠，就改以向上反向测量目标（MM）为主要目标","仍可看下方测量目标（MM），但预期强度低于完全不重叠缺口","只要实体未重叠，就与完全无重叠有相同延续强度"],answer:1,explanation:"原文保留继续下跌约60%的课堂描述，同时明确低于完全不重叠时。两个错项分别反向化、抹掉两种缺口的强弱区别。",id:"20B-K03-1",knowledgeId:"K03",knowledgeTitle:"实体缺口的延续预期有限定",time:"01:34–01:42",pdfPages:[1775],type:"理解判断",quote:`01:34 这种情况下 当市场再次下跌
01:37 仍有60%的概率会去到下方的某个mm标尉
01:42 只不过概率没有完全不重叠时那么高`},{prompt:"价格还在区间里来回时，可以先用区间高度算出一个假设目标。什么时候才有依据把它当成某个方向的突破目标来观察？",options:["等价格明确突破区间，再按实际突破的方向观察目标","区间内与突破后都用同一方向，最近一次上涨决定全部投射","区间内靠近上沿就先按向上等高必达，突破后只检查误差"],answer:0,explanation:"区间高度外推联系实际突破。尚在内部就认定向上必达，或由最近一小腿固定未来方向，都省去了突破条件。",id:"20B-K04-1",knowledgeId:"K04",knowledgeTitle:"区间到突破的市场周期",time:"01:49–02:02",pdfPages:[1776],type:"理解判断",quote:`01:49 市场周期很重要
01:52 它在趋势和震荡区间之间交替
01:57 当市场在震荡时
01:59 我会根据震荡区间的高度
02:02 去测量mm目标位和趋势`},{prompt:"看图左侧蓝色区域和三条粉色横线。下方两条线标出原区间的底和顶，最上方粉线是从区间顶部向上投射一个区间高度得到的目标。价格到达上方目标附近后回落。本课提到哪些交易者可能在这里卖出？",options:["主要是多头止盈，空头需等完整下降趋势才可卖","多头止盈与空头剥头皮都可形成卖盘","主要是新空头卖出，多头会等更高目标才退出"],answer:1,explanation:"本段同时解释多头限价退出和空头反向剥头皮。不能在目标区域排除任一类卖盘，也不要求空头等大下降趋势确立才做剥头皮。",id:"20B-K05-1",knowledgeId:"K05",knowledgeTitle:"强突破跟随与上方目标卖盘",time:"02:08–02:35",pdfPages:[1776],type:"图表应用",quote:`02:08 突破K线强势的跟随很可能是测量型缺口
02:13 大概率会基于之前震荡区间
02:15 的高度向上达到mm目标位
02:21 区间下沿到上沿翻一倍
02:25 可以看到很多电脑计算了这个目标
02:29 并且挂了限价卖单等待止盈
02:31 做空的电脑程序也在
02:35 卖出做剥头皮交易震荡区间`,image:{src:"/charts/20b-range-target.webp",solutionSrc:"/charts/20b-range-target-solution.webp",page:1776,alt:"原课件第1776页图表局部"}},{prompt:"若把上涨后的区间中点视为整个上涨波段可能的中点，这种测量与“区间高度法”有何不同？",options:["从区间开始到结束的根数，复制为突破后的持续时间","从区间下沿到上沿的距离，从上沿再复制一遍","从波段起点到区间中点的距离，围绕中点对称投射"],answer:2,explanation:"正确项是此页middle of range方法。一种错误说法是不同的区间高度法，另一种错误说法把价格测量换成时间；字幕“终点”按英文和图示校正为中点。",id:"20B-K06-1",knowledgeId:"K06",knowledgeTitle:"中点测量的含义",time:"02:39–03:36",pdfPages:[1777],type:"理解判断",quote:`02:35 卖出做剥头皮交易震荡区间
02:39 这里是一个共识区域
02:43 而人们往往在中间达成共识
02:50 所以每当市场上涨 然后横盘
02:53 也许这是整个趋势的中间部分
02:58 因此区间的终点也通常是整个趋势的终点
03:03 市场上涨横盘
03:04 而这个震荡区间的中间部分通常也是最终整个趋势的中间部分
03:13 多头突破 然后是一个达成共识的区域
03:17 这里是共识区域的终点
03:19 价格会等距离上涨 直到再次开始震荡
03:23 所以很多时候如果你在上涨
03:26 趋势之后看到一个震荡区间
03:29 你可以根据这个区间的
03:31 终点向上测量MM标位
03:33 因为会有多头在那里止盈
03:36 也会有空头在那里做空`,referenceImage:{src:"/charts/20b-middle-solution.webp",page:1777,alt:"第1777页课件整页讲解",kind:"课件整页"}},{prompt:"只按区间中点法，波段起点90，共识区间中点100；对称上方参考目标是多少？",options:["100：把共识区间中点直接当作波段终点","120：先把起点至中点的10翻倍，再从中点向上加","110：从中点向上再映射起点至中点的10"],answer:2,explanation:"起点90到中点100为10，另一侧再10得110。中点不是终点，也不应将半段翻倍后再加到中点造成重复投射。",id:"20B-K06-2",knowledgeId:"K06",knowledgeTitle:"中点测量的含义",time:"02:39–03:36",pdfPages:[1777],type:"变式辨析",quote:`02:35 卖出做剥头皮交易震荡区间
02:39 这里是一个共识区域
02:43 而人们往往在中间达成共识
02:50 所以每当市场上涨 然后横盘
02:53 也许这是整个趋势的中间部分
02:58 因此区间的终点也通常是整个趋势的终点
03:03 市场上涨横盘
03:04 而这个震荡区间的中间部分通常也是最终整个趋势的中间部分
03:13 多头突破 然后是一个达成共识的区域
03:17 这里是共识区域的终点
03:19 价格会等距离上涨 直到再次开始震荡
03:23 所以很多时候如果你在上涨
03:26 趋势之后看到一个震荡区间
03:29 你可以根据这个区间的
03:31 终点向上测量MM标位
03:33 因为会有多头在那里止盈
03:36 也会有空头在那里做空`},{prompt:"价格从高处下跌后，进入一段上下震荡的区间。若假设这个区间的中点也是整个下跌波段的中点，应怎样计算下方参考目标？",options:["从原下跌起点到区间上沿的距离，再向上对称投射","从原下跌起点到区间中点的距离，再向下对称投射","从区间中点到最近均线的距离，再向下对称投射"],answer:1,explanation:"方向与原下跌一致，中点另一侧再映射相同距离。换成上沿向上或均线距离，都不是本页方法。",id:"20B-K07-1",knowledgeId:"K07",knowledgeTitle:"中点测量也可向下",time:"03:43–04:23",pdfPages:[1778],type:"理解判断",quote:`03:43 上涨趋势震荡区间是共识区域
03:46 人们在中间达成共识
03:48 所以也许这也是整个上涨趋势的中间部分
03:53 从区间的终点可以看到
03:56 价格被快速吸到上方
03:59 在到达目标位的一瞬间
04:02 交易者就卖出 多头卖出止盈
04:05 空头卖出做空抛售 然后震荡共识区域
04:12 所以可能也是趋势的中间部分
04:16 第一段下跌到区间中部
04:19 然后第二段多头开始买入做多剥头皮
04:23 空头开始止盈`},{prompt:"区间中点法假设震荡区间的中点也是整个波段的中点，再据此估算目标。为什么讲师没有把这种方法放在最重要的位置？",options:["区间边界常不清，且它是两段等长的变体","它可由末根突破实体直接替代，无需确定区间中点","它只适用于区间内部往返，不适合估计突破后的波段"],answer:0,explanation:"本课给出的次要原因是区间上下沿可能不清，以及方法与两段等长重合。它仍可估计趋势恢复后的目标，也不等同突破K实体法。",id:"20B-K08-1",knowledgeId:"K08",knowledgeTitle:"中点法的次要地位",time:"04:26–04:41",pdfPages:[1779,1780,1781],type:"理解判断",quote:`04:26 总体而言这种mm标位没有那么重要
04:30 大多数电脑程序也不太关注他们交易者
04:34 对我提到的其他类型的MM标位更感兴趣
04:38 例如基于震荡区间高度的MM
04:41 标位或第一段第二段的MA目标位`},{prompt:"价格强势上涨后进入一段横盘，横盘期间有个高点比刚开始横盘时还高。按本课常用的两段划分，应该把第一段的终点放在哪里？",options:["第二次上涨突破处，整个区间都属于第一段","明显区间开始处，内部新高未必延长第一段","区间内部最高价，所有上涨都要并入第一段"],answer:1,explanation:"本段明确以区间开始/结束分隔大两段。按绝对最高点或把整个区间并入，会改变此处测量基准。",id:"20B-K09-1",knowledgeId:"K09",knowledgeTitle:"强腿后区间的两段划分",time:"04:49–05:31",pdfPages:[1782],type:"理解判断",quote:`04:49 第一段回调第二段
04:53 第一段反弹第二段
04:57 第一段震荡区间第二段
05:05 如果你还记得我之前说的内容
05:08 当你在上涨趋势之后看到震荡区间
05:11 电脑会假设第一段上涨
05:14 在震荡区间开始时结束
05:16 所以第一段上涨这里是第一段的结束
05:20 第一段震荡区间尽管后面价格涨得更高
05:23 但震荡区间是从这里开始的
05:27 所以第一段然后开始震荡
05:31 再是第二段 再次向下突破`},{prompt:"课程展示了不同的区间测量候选：两个向上目标达到，一个向下目标没有达到。根据这个例子，应怎样看待这些候选目标？",options:["上方已达到说明下方也会在以后补足相同距离","不同候选可并存，能否达到仍看后续价格反应","下方没到证明区间高度法只适合向上突破"],answer:1,explanation:"原图直接保留没到的例子。不能由一次结果推出方向限定，也没有要求所有未达目标以后补齐。",id:"20B-K10-1",knowledgeId:"K10",knowledgeTitle:"区间高度目标与两段目标并存",time:"05:39–06:01",pdfPages:[1783],type:"理解判断",quote:`05:39 我还说过电脑会使用震荡
05:43 区间的高度来测量mm标位震荡
05:47 区间向上的mm震荡区间向上的
05:51 mm震荡区间也许有向下的mm
05:57 可以看到这里和这里
05:59 确实有向上的mm目标位
06:01 这里没有达到下方的mm目标位`,referenceImage:{src:"/charts/20b-range-choices-solution.webp",page:1783,alt:"第1783页课件整页讲解",kind:"课件整页"}},{prompt:"明确只采用一根阳线实体：开100、收106、最低99、最高108。上方再投射一倍实体的目标是多少？",options:["112：从收盘106再加实体6","117：从最高108再加全长9","115：从收盘106再加全长9"],answer:0,explanation:"本题限定实体，(106−100)=6，再从106加6。两种错误说法分别混入全长以及最高价锚点，不能替代已给算法。",id:"20B-K11-1",knowledgeId:"K11",knowledgeTitle:"单根突破实体的测量",time:"06:06–06:51",pdfPages:[1785],type:"理解判断",quote:`06:06 当价格突破时
06:07 突破的高度本身可以导致mm标位
06:17 当市场突破时
06:18 交易者假设会有基于第一段突破高度的第二段上涨
06:27 我们已经讲过第一段第二段的mm目标位
06:31 第二段上涨的高度大约与第一段相同
06:34 我们也将了基于震荡区间高度的MM目标位
06:38 有时市场也会根据突破的
06:41 高度进行MM移动多头突破
06:44 从阳线的开盘价到收盘价
06:48 把这个高度往上翻一倍
06:51 作为mm标位多头止盈 激进的空头做空`},{prompt:"刚出现强势向上突破时，讲师用大约 60% 和 40% 描述接下来两种可能。这里比较的是哪两种走势结果？",options:["强上涨继续一天，与横盘后在第二天恢复上涨","顺向上方测量目标（MM），与失败跌破起点后的反向测量目标（MM）","上方测量目标（MM）精确到价，与上方测量目标（MM）略微超出目标"],answer:1,explanation:"这里比较方向结果，不是目标精度或持续天数。两个数字是课程此强突破背景的近似描述，不是所有突破的固定统计。",id:"20B-K12-1",knowledgeId:"K12",knowledgeTitle:"强突破后的顺向与反向",time:"07:00–07:49",pdfPages:[1786],type:"理解判断",quote:`07:00 强势的多头突破大概率
07:02 会有向上的mm目标位
07:04 在强势突破之后
07:06 40%的概率会有反向的mm移动
07:22 强势突破的起涨点到突破的最高点
07:25 或者最高的收盘价都有可能
07:28 不同的程序有不同的算法
07:31 也许他们会选择从这里到那里去测量
07:34 无论如何 每当我看到一个强势的突破
07:37 我就会寻找MM目标位
07:40 60%的概率会是向上的
07:42 顺势40%的概率它会跌破
07:45 上涨波段的起涨点这里或这里
07:49 然后跌到反向的MM目标位`},{prompt:"看图左侧绿色区域。蓝色横线从这轮强上涨第一根阳线的底部画出。随后价格连续下跌，回到蓝线附近。课程为什么先观察价格在这个起涨位置的反应？",options:["它是第一下方支撑，守住或下破跟随会改变后续目标","它是多头旧成本，因此到达便确认所有多头已离场","它是反向测量目标（MM）终点，因此不应再观察更低目标"],answer:0,explanation:"原起点是反向延伸前要检验的支撑，不是反向测量目标（MM）本身终点。到价也不能证明全部多头离场。",id:"20B-K13-1",knowledgeId:"K13",knowledgeTitle:"反向目标前先观察突破起点",time:"07:52–08:29",pdfPages:[1787],type:"图表应用",quote:`07:49 然后跌到反向的MM目标位
07:52 一旦你开始看到相当强势的
07:54 空头反转以及连续2三四根阴线
07:58 你必须考虑空投的第一个
08:01 目标位是多头突破的起涨点
08:04 然后可能是反向的mm目标位
08:08 我会观察起涨点被跌破的时候发生了什么
08:13 市场反弹还是继续下跌
08:18 可以看到空投制造了连续的阴线
08:22 而不是在支撑处发生反弹
08:26 似乎还会继续下跌
08:29 所以我开始测量下方的MMM标位`,image:{src:"/charts/20b-failed-bull.webp",solutionSrc:"/charts/20b-failed-bull-solution.webp",page:1787,alt:"原课件第1787页图表局部"}},{prompt:"一次向上突破失败后，价格转跌，接近按原上涨高度向下估算的目标，同时下跌力度减弱。课程为什么认为目标附近可能出现买盘？",options:["主要是空头回补，新多头需等原上涨高点重回才可买","空头可能买回平仓以锁定利润，多头也可能买入博短暂反弹","主要是新多头买入，原空头需等大反转确认才退出"],answer:1,explanation:"原课在目标与动能减弱处保留双方买盘。两个错项各取消一种已讨论目的，并加上原文没有的高低点确认条件。",id:"20B-K14-1",knowledgeId:"K14",knowledgeTitle:"下方目标与双方买盘",time:"08:36–08:44",pdfPages:[1787],type:"理解判断",quote:`08:36 当市场到达那里时
08:38 尤其是如果下降趋势在减弱
08:41 多头会买入做多剥头皮
08:44 而空头也会买入止盈`},{prompt:"看图左下方绿色高亮的两根大阳线，之后价格继续上涨。按课程，应该量哪两个价位之间的距离来估算上方目标，到目标附近又怎样考虑止盈？",options:["首根开盘到末根收盘投射，目标处可部分或全部退出","首根最低到末根最高投射，目标处才开始计算回调","逐根全长相加投射，目标越过后原止盈意愿可忽略"],answer:0,explanation:"本页算法指定开盘到末根收盘，尤其趋势减弱时关注目标退出。不是叠加影线全长，也不是到价后才考虑回调。",id:"20B-K15-1",knowledgeId:"K15",knowledgeTitle:"多根强突破与60至70预期",time:"08:50–09:49",pdfPages:[1788],type:"图表应用",quote:`08:50 相反的情况 强势的多头突破
08:53 也许从第一根K线的开盘到第二根K线的收盘价
08:58 会有一个向上的MM目标位
09:00 每当我看到这个有60%的
09:03 概率会去到上方的MM目标位
09:05 40%的概率会向下反转
09:08 并去到反向的N的目标
09:10 但数学期望对于买入做多更有利
09:15 交易者会在那个阳线的收盘买入
09:18 当突破如此强势时
09:20 有60%甚至70%的概率会
09:23 达到上方的某个MM目标位
09:28 K线的开盘到突破最后一根K线的收盘
09:32 这是一个两根K线组成的突破
09:36 那里是mm标位
09:37 你可以看到多头止盈 空头做空
09:40 一般来说 尤其是当上涨趋势像这样减弱时
09:45 交易者应该在明显的阻力位
09:49 比如MM标位止盈部分或者全部仓位`,image:{src:"/charts/20b-strong-bull.webp",solutionSrc:"/charts/20b-strong-bull-solution.webp",page:1788,alt:"原课件第1788页走势图局部"}},{prompt:"课程先对强上涨突破给出约60/40的描述；另一个案例里，突破特别强，而且后续K线继续上涨，课程提到约60～70%。比较这两处时应注意什么条件？",options:["前者适用于所有两根阳线，后者仅适用于单根阳线","前者特别强调强度及跟随，均不直接套给所有突破","前者代表精确成交概率，后者代表图表观察概率"],answer:1,explanation:"本课以异常强突破及跟随提高顺向预期，不是按根数机械分配概率，也不是在比较成交与观察两种事件。",id:"20B-K15-2",knowledgeId:"K15",knowledgeTitle:"多根强突破与60至70预期",time:"08:50–09:49",pdfPages:[1788],type:"变式辨析",quote:`08:50 相反的情况 强势的多头突破
08:53 也许从第一根K线的开盘到第二根K线的收盘价
08:58 会有一个向上的MM目标位
09:00 每当我看到这个有60%的
09:03 概率会去到上方的MM目标位
09:05 40%的概率会向下反转
09:08 并去到反向的N的目标
09:10 但数学期望对于买入做多更有利
09:15 交易者会在那个阳线的收盘买入
09:18 当突破如此强势时
09:20 有60%甚至70%的概率会
09:23 达到上方的某个MM目标位
09:28 K线的开盘到突破最后一根K线的收盘
09:32 这是一个两根K线组成的突破
09:36 那里是mm标位
09:37 你可以看到多头止盈 空头做空
09:40 一般来说 尤其是当上涨趋势像这样减弱时
09:45 交易者应该在明显的阻力位
09:49 比如MM标位止盈部分或者全部仓位`},{prompt:"一根强阴后跟随很差，后来价格又涨破该阴线起点。课程怎样更新？",options:["原阴线实体够大，仍以原下方测量目标（MM）为主，反弹主要是回补缺口","原阴线起点虽被越过，先按宽下降的熊旗预期继续下跌","跟随失败且越过原起点，转看可能按原阴线反向形成上方测量目标（MM）"],answer:2,explanation:"本页正是强阴突破失败、后来反向测量的案例。不能只凭原阴线大保留旧方向，也不能忽略实际越过起点和糟糕跟随。",id:"20B-K16-1",knowledgeId:"K16",knowledgeTitle:"强阴但跟随差可失败",time:"10:00–10:22",pdfPages:[1789],type:"理解判断",quote:`10:00 空头突破时也是一样 非常强势的空头突破跟随不好
10:04 但这根大阴线很强势
10:07 所以很可能会有基于突破
10:09 K线的高度的MM目标位
10:11 60%的概率MM目标位在下方
10:15 但是跟随很糟糕
10:16 你必须考虑它也可能是反向的
10:19 价格突破了抛售高潮的起跌点
10:22 并继续上涨达到MM标位`},{prompt:"看图中两条逐渐靠拢的蓝色斜线，价格在里面反复上涨和下跌。多头把它看成潜在头肩底，空头把右侧反弹看成可能受阻。双方分别等什么样的价格突破才入场？",options:["多头等结构上方突破买，空头等右肩低点下方突破卖","先按头肩底成立，多头在上方追入而不等突破","先按双顶成立，空头在右肩形成前便确认向下目标"],answer:0,explanation:"这是双方解释并存的突破模式，方向尚需实际触发。看到头肩底或双顶名称都不足以先判其中一方已经成功。",id:"20B-K17-1",knowledgeId:"K17",knowledgeTitle:"三角突破模式与双方触发",time:"10:32–11:03",pdfPages:[1789],type:"图表应用",quote:`10:32 尝试在这里突破抛售高潮的起点
10:37 这里再次尝试就失败了
10:40 多头看到一个头肩底
10:42 而空头看到一个双顶或三角形
10:46 三次向上的推动123突破模式
10:55 多头会在双顶上方或三角形
10:58 上方挂突破买单做多
11:00 而空头会在头肩底的右肩下方
11:03 就在这个低点下方挂突破卖单进行做空`,image:{src:"/charts/20b-triangle.webp",solutionSrc:"/charts/20b-triangle-solution.webp",page:1789,alt:"原课件第1789页图表局部"}},{prompt:"一根强阴线向下突破后，价格没有继续下跌，反而向上突破。讲师用这根阴线开盘价到收盘价的距离估算上方目标。后来价格到达目标并转跌，这个例子说明什么？",options:["一到上方目标转跌，说明新的强下降趋势已确认","阴线实体的高度也能用来算上方目标，目标附近可能有多头止盈和新空头卖出","原实体只适用向下目标，上方转跌应与该测量无关"],answer:1,explanation:"本页直接用阴线实体反向测上方。到目标后的卖出不等于强下降，仍可能回调、区间或空头剥头皮。",id:"20B-K18-1",knowledgeId:"K18",knowledgeTitle:"阴线实体的反向上测量",time:"11:20–12:12",pdfPages:[1790],type:"理解判断",quote:`11:20 这里大阴线跌破 但是看后面发生了什么
11:24 价格上涨达到了反向的mm标位
11:30 多头在这根K线
11:32 那根K线或这里用突破单买入
11:35 希望去到向上的MM标位 他们成功了
11:42 大阴线实体部分的高度往上翻一倍
11:45 作为MM目标位
11:47 看看价格在那个M目标位
11:49 发生了什么强势的反转下跌
11:52 这告诉你多头在卖出止盈
12:04 空头也在卖出做空
12:05 期待至少有一个足够大的回调
12:08 可以让他们做一笔剥头皮交有一个
12:12 下跌波段或者至少是震荡区间`,referenceImage:{src:"/charts/20b-reverse-body-solution.webp",page:1790,alt:"第1790页课件整页讲解",kind:"课件整页"}},{prompt:"课程在刚出现强上涨突破时，给出继续上涨与失败的约60/40描述。后来价格跌破了这次上涨的起点，课程讨论反向下方目标时又提到约50%。为什么这两处数字不能直接视为矛盾？",options:["这里改用五分钟图，前面只用日线图统计","这里只计算实体目标，前面只计算影线目标","这里已额外发生突破起点失守，所谈条件事件改变"],answer:2,explanation:"关键新增条件是起点被跌破。原课不是在用实体/影线或日线/五分钟来解释这次数字变化；仍只保留课堂近似。",id:"20B-K19-1",knowledgeId:"K19",knowledgeTitle:"起点跌破后的条件概率",time:"12:15–12:50",pdfPages:[1791],type:"理解判断",quote:`12:12 下跌波段或者至少是震荡区间
12:15 再次强调MM目标位有多种选择
12:20 强势的多头突破
12:21 然后完全反转下跌
12:23 跌到突破或者说抢购高潮的起涨点会形成双底
12:28 然后恢复上涨 还是会跌破双底
12:32 然后跌到反向的MM目标位
12:37 一旦这么强势的多头突破的起点被跌破
12:41 有50%的概率会跌到反向的mm目标位
12:46 也有50%的概率不会下跌
12:50 会保持横盘或者上涨`},{prompt:"两根强阳形成多头突破，随后价格跌破突破起点。反向下跌有多个测量候选，本课首先用了哪一个？",options:["两根强阳实体跨度得到的较近下方目标","双底两低点价差得到的最窄下方目标","整段上涨全部高度得到的最远下方目标"],answer:0,explanation:"原课先看最近，并明确先复制两根大阳的开盘到末根收盘跨度；整段高度会在后面另行比较，两低点差也非结构高度。",id:"20B-K20-1",knowledgeId:"K20",knowledgeTitle:"优先最近的反向实体目标",time:"12:54–13:10",pdfPages:[1791],type:"理解判断",quote:`12:54 作为空投
12:56 我考虑的第一个mm标位就是把
13:00 这两根大阳线的高度往下翻一倍
13:05 从第一根K线的开盘到第二根K线的收盘
13:10 这是向下的mm目标位`},{prompt:"看图左侧的橙色横线，它是第一个下方测量目标。价格跌穿橙线后，紧接着还有阴线跟随。根据课程，当时应怎样调整对下一处目标的判断？",options:["测量目标（MM）已达到，先按双底成功和新上涨处理","该处支撑未挡住，继续检查下一下方目标","目标没能止跌，先把原目标上移到最近反弹高点"],answer:1,explanation:"原课用强下破和跟随说明继续看更低候选。到过目标不等于双底成功，也不应移动原目标来改变既有反应。",id:"20B-K21-1",knowledgeId:"K21",knowledgeTitle:"强破第一目标后继续找下一处",time:"13:13–13:36",pdfPages:[1792],type:"图表应用",quote:`13:10 这是向下的mm目标位
13:13 而空头忽略了他 所以还会至少再下跌一些
13:25 可以看到在这个mm标位没有找到买家
13:29 价格跌破了它 并且有跟随
13:34 当这种情况发生时
13:36 交易者会寻找下一个目标`,image:{src:"/charts/20b-through-target.webp",solutionSrc:"/charts/20b-through-target-solution.webp",page:1792,alt:"原课件第1792页图表局部"}},{prompt:"价格两次在相近低位反弹，形成潜在双底，但后来没有涨过两次低点之间的反弹高点，反而跌破双底。除了用突破K线的实体算较近的下方目标，课程还考虑用什么来估算更远的目标？",options:["按整个双底尝试或多头波段高度向下投射","按双底颈线到上方旧目标的距离继续向上投射","按两个底部的价差向下投射，缩短目标"],answer:0,explanation:"本例失败结构使测量反向，使用的是整体高度。两底价差不是双底结构高度；继续向上则没有处理向下失败。",id:"20B-K22-1",knowledgeId:"K22",knowledgeTitle:"失败双底与更大高度",time:"13:50–14:06",pdfPages:[1793],type:"理解判断",quote:`13:50 多头尝试形成一个双底 这里是颈线
13:54 他们想要突破颈线到达上方的
13:57 mm目标为相反双底被跌破
14:00 在这种情况下我反向测量下方的mm标位
14:06 这是一个相当强势的下跌波段`},{prompt:"价格在窄通道里持续下跌，到达测量目标后出现第一次反弹。为什么课程仍考虑反弹过后可能继续下跌？",options:["目标只适用于止损，任何止盈买盘都不能改变下降","反弹达到第五根时必须立刻转跌，否则测量作废","窄通道使首次反弹偏小，可能先有第二段再谈大反转"],answer:2,explanation:"窄通道和强下跌限制反转级别；课堂5～10根不是固定时钟。目标也可供止盈观察，不只是止损位置。",id:"20B-K23-1",knowledgeId:"K23",knowledgeTitle:"强窄下降首次反弹的限制",time:"14:06–14:28",pdfPages:[1793],type:"理解判断",quote:`14:00 在这种情况下我反向测量下方的mm标位
14:06 这是一个相当强势的下跌波段
14:09 趋势大概率不会在这里结束
14:12 这也是一个非常窄的下降通道
14:15 任何反弹都是小反转
14:17 这意味着在5到10根K线之后可能会再次下跌
14:22 然后才有可能大反转
14:24 比如低点降低的大反转
14:28 三推楔形底123`},{prompt:"按整个上涨波段测出的反向目标尚未到，眼前筑底又被强阴跌破，本课如何处理？",options:["改用更小一段重算，直到已有最低点变成精确目标","目标没有到说明本次筑底不该被突破，应优先买入","新失败和卖压仍重要，继续观察向下候选目标"],answer:2,explanation:"未达目标不阻止进一步下跌；也不能为了命中已有低点不断缩小测量。课程跟随实际空头突破及失败筑底更新。",id:"20B-K24-1",knowledgeId:"K24",knowledgeTitle:"较大波段目标与未到先续跌",time:"14:36–15:21",pdfPages:[1794],type:"理解判断",quote:`14:36 所以不一定只看多头突破的高度
14:40 也许是基于整个上涨趋势的高度
14:46 多头想要形成双底反转 但没有成功
14:50 当一个强势的上涨波段的起涨点被测试
14:55 如果价格继续下跌
14:57 我把它看作一个失败的双底尝试
15:01 然后我会向下寻找反向的mm标位
15:09 测量得到的目标位在这里
15:12 没有完全达到大阴线
15:16 空头突破多头尝试在这里筑底
15:19 但是被跌破了
15:21 所以很可能还会再下跌一些`},{prompt:"价格先上涨，随后转跌，课程用整个上涨波段计算下方反向目标。下跌途中出现小幅反弹和横盘（熊旗），之后价格继续向下突破。除了大目标，还值得检查什么？",options:["小结构下破后优先视为衰竭，后面的缺口主要预期回补","检查熊旗下破是否构成测量型缺口，提供另一组向下目标","小熊旗只是大波段一部分，继续只用最初几根实体高度"],answer:1,explanation:"原课在这个小熊旗突破处继续检查测量型缺口。大级别目标不排除小结构提供依据，也不能脱离此处突破背景一概改成衰竭。",id:"20B-K25-1",knowledgeId:"K25",knowledgeTitle:"小熊旗突破与测量缺口",time:"15:29–15:59",pdfPages:[1794],type:"理解判断",quote:`15:29 这里达到了向下的MM标尉
15:31 从这个高点到那个低点或者到缺口的终点
15:35 这个低点和这个高点之间的缺空头买入止盈
15:39 多头买入做多
15:41 同时这可能是低点降低的大反转 下降趋势
15:46 楔形雄起 然后是较弱的抛售
15:49 形成三推楔形底
15:51 一二三多头会寻找反转做多的机会
15:55 一些人会在那个阴线收盘时开始买入
15:59 押注下一次空头突破会失败`},{prompt:"看图右下角，最低处的粉色横线是一个下方测量目标，红色斜线延伸到最后一次下探附近。整页课件把这次下探放在三次下推、卖压减弱的背景里。为什么讲师在这里比前面更关注反弹？",options:["目标与三推、高潮、弱化卖压同时出现，使反转依据较前更集中","此前跌幅已足够大，目标位置与弱化卖压主要只影响成交点","第三推已经完成，主要凭推动次数即可按大反转预期上涨"],answer:0,explanation:"本课增加关注来自多个因素的汇合，而非单靠三推或跌幅。位置、高潮和实际卖压变化共同影响判断，不只是优化成交。",id:"20B-K26-1",knowledgeId:"K26",knowledgeTitle:"目标与反转背景汇合",time:"16:06–17:11",pdfPages:[1795],type:"图表应用",quote:`16:06 每个上涨趋势都在阻力位结束
16:09 每个下降趋势都在支撑位结束
16:13 通常有许多潜在的支撑或阻力位
16:20 我要寻找多个阻力或支撑的汇聚
16:25 这里在一个下降趋势中
16:27 我在寻找支撑的汇聚
16:29 在这里制造支撑的因素越多
16:33 下降趋势在这里结束的可能性就越
16:36 大更有可能会反转形成上涨趋势
16:40 可能会变成震荡区间 可能会变成上涨趋势
16:45 正如之前所说的低点降低的大反转
16:50 三推楔形底一二三多头会在阴线的收盘买入
16:55 在那根K线上方买入 在阳线的收盘买入
16:59 在这根K线的下方买入
17:01 期待至少有两段上涨
17:04 涨到哪里？
17:06 涨到mm目标位
17:11 低点降低的大反转三推楔形底`,image:{src:"/charts/20b-confluence.webp",solutionSrc:"/charts/20b-confluence-solution.webp",page:1795,alt:"原课件第1795页图表局部"}},{prompt:"课程在目标、三推和卖压减弱汇合后预期“至少两段上涨”，是否已等于“强上涨趋势确认”？",options:["已经等于，两段预期与趋势确认只是两种叫法","尚不等于，也可能先成为区间或多头波段","尚不等于，只有每段精确到测量目标（MM）才允许称上涨"],answer:1,explanation:"两段反弹与强趋势确认是不同层级，本课明确保留交易区间（TR）或bull swing。是否精确到测量目标（MM）也不是命名上涨的必要条件。",id:"20B-K26-2",knowledgeId:"K26",knowledgeTitle:"目标与反转背景汇合",time:"16:06–17:11",pdfPages:[1795],type:"变式辨析",quote:`16:06 每个上涨趋势都在阻力位结束
16:09 每个下降趋势都在支撑位结束
16:13 通常有许多潜在的支撑或阻力位
16:20 我要寻找多个阻力或支撑的汇聚
16:25 这里在一个下降趋势中
16:27 我在寻找支撑的汇聚
16:29 在这里制造支撑的因素越多
16:33 下降趋势在这里结束的可能性就越
16:36 大更有可能会反转形成上涨趋势
16:40 可能会变成震荡区间 可能会变成上涨趋势
16:45 正如之前所说的低点降低的大反转
16:50 三推楔形底一二三多头会在阴线的收盘买入
16:55 在那根K线上方买入 在阳线的收盘买入
16:59 在这根K线的下方买入
17:01 期待至少有两段上涨
17:04 涨到哪里？
17:06 涨到mm目标位
17:11 低点降低的大反转三推楔形底`}],sourceFile:"BTC PAF 20B Measured Moves v5_中文 (源语言).srt"},{id:"21A",group:"反转",title:"什么是反转、小反转与大反转",range:"00:00–33:45",revision:"reversal-21a-v1",notes:["走势可以从趋势转入区间，也可以从区间突破进入趋势。先判断发生了哪一种变化。","同一段价格变化会随观察周期不同呈现为不同的K线形态。","窄通道的第一次反向尝试通常先按小反转观察，后续突破和延续再提供新证据。"],knowledgePoints:[{id:"K01",title:"反转可以改变方向或走势类型",summary:"上涨、下跌和区间之间的转换都可以称为广义反转；是否进入反向趋势，需要单独判断。",time:"00:10–03:16",pdfPages:[1800,1801,1802],questionIds:["21A-K01-1"]},{id:"K02",title:"周期改变时反转的外观也会改变",summary:"相同的一段价格变化，在较短周期可以表现为两根K线反转，在较长周期可能只形成一根有影线的K线。",time:"03:22–07:18",pdfPages:[1803,1804,1805],questionIds:["21A-K02-1"]},{id:"K03",title:"窄下降通道中的第一次反弹",summary:"窄通道首次反转尝试通常较小，可能成为回调或区间；大反转需要观察更有力的突破及后续表现。",time:"07:25–11:18",pdfPages:[1807,1808],questionIds:["21A-K03-1"]},{id:"K04",title:"小反转与交易尺度",summary:"讲师用“小反转”描述相对于交易尺度很小的变化，并讨论为何不喜欢用“噪音”称呼这类行情。",time:"11:26–14:00",pdfPages:[1808,1809],questionIds:["21A-K04-1"]},{id:"K05",title:"大反转候选怎样形成",summary:"明显突破原通道并持续一段时间，原趋势恢复后又失败，才增加随后反转的可能性。课堂40%对应这一背景。",time:"14:03–19:33",pdfPages:[1810,1811,1812],questionIds:["21A-K05-1"]},{id:"K06",title:"区间向上突破后看跟随",summary:"有力上破区间并出现跟随，可以期待更大波段，仍须观察能否持续。",time:"19:42–20:49",pdfPages:[1813],questionIds:["21A-K06-1"]},{id:"K07",title:"反转从突破原结构开始",summary:"反向突破可以是越过通道边界，也可以同时越过此前较低的反弹高点。",time:"20:57–23:18",pdfPages:[1815,1816],questionIds:["21A-K07-1"]},{id:"K08",title:"反转的买盘从哪里来",summary:"空头买回平仓与多头买入开仓都能推动向上反转。",time:"23:18–27:39",pdfPages:[1817,1818,1819],questionIds:["21A-K08-1"]},{id:"K09",title:"反转何时看得清楚",summary:"强K线和背景有时足以很早辨认反转；走势缓慢时须等更明确的突破和跟随。",time:"27:39–31:37",pdfPages:[1820,1821],questionIds:["21A-K09-1"]},{id:"K10",title:"熊旗预期可以失败",summary:"下跌后缓慢上涨可先视为熊旗候选。若买压增加并强势上破，应重估原先的下破预期。",time:"31:38–33:30",pdfPages:[1822],questionIds:["21A-K10-1"]}],questions:[{prompt:"价格原来一路上涨，后来在相近的上下边界之间来回波动，还没有形成持续下跌。按本课对“反转”的广义定义，这属于什么变化？",options:["从上涨趋势转为下降趋势，因为价格已不再持续创新高","仍是原来的上涨趋势，因为还没有出现明确的向下突破","从上涨趋势转为交易区间，属于走势类型的反转"],answer:2,explanation:"本课的广义反转包含市场状态变化。进入区间可以算反转，但仅凭横盘还不能判断已经进入下降趋势。",id:"21A-K01-1",knowledgeId:"K01",knowledgeTitle:"反转可以改变方向或走势类型",time:"00:10–03:16",pdfPages:[1800,1801,1802],type:"理解判断",quote:`00:10 首先我会定义什么是反转
00:13 接下来我会做区分
00:15 小反转导致震荡区间
00:18 大反转导致反向的趋势
00:23 反转是从突破开始的 即使突破很弱
00:28 但是在反转的初期几乎总是有一个突破
00:40 这里有一个上涨趋势 然后是一个下降趋势
00:44 上涨趋势反转为下降趋势
00:49 下降趋势反转为上涨趋势
00:52 一个顶部的反转 一个底部的反转
01:00 上涨趋势和下降趋势是相反的当趋势反转时
01:06 趋势从上涨反转为下降
01:09 然后从下降反转为上涨
01:13 所有市场要么在趋势中 要么在震荡区间中
01:19 这种市场周期的变化就是反转
01:23 例如市场从上涨趋势变为震荡区间
01:27 也属于反转
01:28 尽管大多数人通常不用反转这个词去描述
01:37 震荡区间 然后多头突破 这是一个突破
01:40 突破这个词是我通常使用的术语
01:44 你也可以说这是一个反转
01:46 因为它从一个市场周期变化到了另一个
01:51 市场周期
01:54 上涨趋势变成了震荡区间
01:57 交易者通常说它是调整或回调
02:00 他一开始确实是回调
02:02 但一旦持续20根或更多的K线 多头突破的概率下降
02:08 变得与空头突破的概率相同
02:10 与其说是回调
02:12 我更喜欢使用震荡区间这个词
02:15 震荡区间意味着多头突破的
02:18 概率与空头突破的概率相同
02:21 在回调的初期 概率有利于趋势延续
02:26 但随着K线越来越多
02:28 多头和空头的概率变得越来越接近
02:36 市场每1次方向的改变
02:39 市场行为的每一次改变 都是一种反转
02:45 在这里有一个小的震荡区间
02:48 大部分反转都存在一定程度的震荡区间
02:53 通常上涨趋势不会直接反转为下降趋势
02:57 反转之前会先进入一个短暂的震荡区间
03:00 下降趋势通常不会直接变为上涨趋势
03:04 反转之前会先有一个小的震荡区间
03:08 这里有一个小双顶和一个
03:10 更大的双顶以及一根反转阴线
03:14 然后出现了趋势反转
03:16 这里有一个小双底和不错的阳线`},{prompt:"同一段行情先下跌再涨回去。用较短周期看，是一根阴线接一根阳线；换成较长周期后，这段行情被合在一根K线里。较长周期图上可能怎样显示这次下探？",options:["显示为一根K线的下影线","仍显示为两根相邻K线的反转","显示为相邻两根K线之间的向下跳空"],answer:0,explanation:"较长周期把先跌后涨合在一根K线里，下探可能留成下影线。图上的K线数量会随周期变，原来发生过的价格变化仍然存在。",id:"21A-K02-1",knowledgeId:"K02",knowledgeTitle:"周期改变时反转的外观也会改变",time:"03:22–07:18",pdfPages:[1803,1804,1805],type:"理解判断",quote:`03:22 这是欧元对美元的五分钟K线图
03:26 市场不断尝试反转
03:28 没几根K线就有一次反转 尝试空头突破
03:33 但跟随不好 多头尝试反转在这里没有成功
03:41 但空头突破后的第19根K线发生了大反转
03:46 这是一个双K反转
03:48 这根K线下跌 那K线上涨
03:51 尽管相隔19根K线 但这是双K反转
04:00 你可以叫它多头反转 你可以叫它反转
04:03 怎么叫它无所谓
04:05 市场尝试向下突破 但现在显然在上涨
04:08 这就是一次反转
04:14 市场在这里强势上涨 然后再上涨一段
04:17 但是看这根K线完全反转了
04:21 那根K线这是一个小反转
04:24 在更高时间周期K线图上 比如十分钟图
04:28 这两根K线组成了一个十字星
04:31 看起来类似这样
04:32 这是一个反转 然而它没有导致相反的趋势
04:36 它只是导致了一个震荡区间
04:39 这根K线是一个小阳线
04:41 接下来是一个同样大小的阴线
04:44 这是窄震荡区间内的小反转
04:48 毫无意义 大概率只是继续横盘
04:52 而不是向上或向下突破每根
04:56 K线上的引线都是一次反转
05:01 市场尝试上涨然后下跌
05:04 市场下跌然后上涨
05:07 所有这些引线都是反转
05:09 上涨然后下跌 上涨然后下跌
05:12 上涨然后下跌
05:14 这个双K反转在更高时间周期上
05:18 他们就是一个十字星或长上影线
05:23 上涨然后下跌 这是一个反转
05:26 在更高时间周期K线图上 比如60分钟图
05:31 他们一个十字星或者反转阴线
05:34 先上涨后下跌
05:35 这根K线的开盘在这里
05:38 收盘在这里 有很长的上影线
05:46 这是只有一个take的成交量图
05:49 下跌了一个tick
05:51 然后横盘了一个take
05:53 然后上涨了一个take
05:55 横盘了一个take 下跌了一个take
05:58 这里发生了一笔交易 下一笔交易发生在这
06:02 然后下一笔交易发生在这 这是一个反转
06:06 尽管是在e take的图上发生了反转
06:09 它在更高的时间周期图上是看不见的
06:14 这笔交易下跌 下一笔交易上涨了
06:18 后一笔的交易又下跌了
06:21 上涨下跌 这是一个反转
06:23 尽管只是两笔交易上涨
06:26 然后下跌 只用了不到1秒钟的时间
06:30 它仍然是一个反转
06:32 任何方向的变化都是一个反转
06:36 这是欧元兑美元e tick的成交图
06:39 市场上涨了一个take
06:41 又上涨了一个天 下跌
06:44 上涨又下跌 这是一个反转
06:47 上涨 然后下跌
06:50 上一笔在这个价格交易
06:52 下一笔交易发生在这
06:54 然后接下来的交易发生在这里
06:57 在这里反转上涨 在这里反转下跌
07:00 尽管只是0.1个PIP的变化
07:03 如果你看价格只有0.1个配
07:09 市场上涨了0.1 pap然后下跌了0.1 pipe
07:13 它从上涨反转为下跌
07:15 然后在这里来回反转
07:18 每次方向的变化都是个反转`},{prompt:"价格在窄通道里连续下跌，第一次向上反弹，但尚未走出持续上涨。按本课，哪种判断更符合眼前的证据？",options:["先按新上涨趋势观察，因为反弹已与原来的下跌方向相反","先按交易区间已经形成观察，因为窄通道出现了第一次向上反弹","先按原下降中的小反弹观察，留意后续能否向上突破并持续"],answer:2,explanation:"反弹说明方向短暂改变。讲师在这种背景下先按小反转观察，后续的突破和持续性才帮助判断是否可能发展为大反转。",id:"21A-K03-1",knowledgeId:"K03",knowledgeTitle:"窄下降通道中的第一次反弹",time:"07:25–11:18",pdfPages:[1807,1808],type:"理解判断",quote:`07:25 接下来我要讲如何区分小反转和大反转
07:30 我认为这非常重要
07:33 一个小反转 比如下降趋势中的多头反转
07:38 通常会变成雄奇下降趋势
07:41 多头强势反转 这是上涨趋势的开始吗？
07:44 不太可能
07:45 当下降通道这么窄的时候
07:48 通常第一次向上反转会变成熊旗
07:51 就像这里或者成为震荡
07:54 区间的一部分
07:55 大反转需要更多的K线
07:58 大反转意味着市场从
08:00 下降趋势转变为上涨趋势
08:03 是一个大的改变
08:05 它通常需要更多的K线 十根或更多
08:08 在一个非常窄的下降通道中
08:12 反转很大概率会失败
08:14 所以交易者准备在反转失败时卖出做空
08:18 他们会在某根K线最好是
08:21 阴线的低点下方挂突破卖单
08:24 压住下降趋势
08:25 将继续小双顶雄旗阴线尝试向上反转不是很强大
08:31 概率是雄奇
08:35 低点抬高的大反转看起来不错
08:39 下降趋势突破趋势线
08:42 低点抬高的双底大阳线是好的做多信号
08:46 K收盘高于过去十五二十根K线的高点
08:50 而且还有跟随K线多头获胜
08:53 空头尝试再次下跌 但可能只是一个小反转
08:58 也就是说这要么是震荡区间
09:01 要么是牛企 大概率还会再涨
09:04 一些交易者在向上反转时买入做多
09:09 尤其是在阳线的上方
09:11 要么在这里买入
09:13 要么在这个阳线的上方买入
09:20 这是一个大反转下降趋势
09:23 向上突破了趋势线
09:25 整个结构有大约15根K线
09:29 上涨6或7根K线 下跌6或7根K线
09:33 结构足够大 可以期待一个大反转
09:37 上涨6或7或10根K线
09:39 这是一个低点抬高的大反转
09:43 这个低点在下降趋势最低点的上方
09:46 因此这是一个低点抬高的反转
09:49 它有足够多的K线来形成大反转
09:52 因此交易者可以预期上涨50 20根K线
09:56 这也是一个双底
09:58 因此它是一个低点抬高的双底大反转
10:05 再次强调小反转通常会导致震荡区间或骑行
10:10 而不是相反的趋势
10:13 但有时震荡区间可以包含一个大反转
10:19 这里非常窄的通道只是小反转
10:22 多头能得到的最好结果要么是雄奇
10:25 要么是震荡区间 在这个案例中
10:28 后续变成了震荡区间
10:31 一些多头会持有部分仓位
10:34 因为大概率是雄起或震荡区间
10:37 所以多头会在反弹之后快速
10:40 止盈全部至少大部分仓位
10:43 一些多头可能会继续持有部分仓位
10:46 已被震荡区间变成大反转
10:49 变成上涨趋势
10:54 这个上涨趋势持续了大约30根K线
10:58 高点略微降低
11:00 但这里的整个结构只有5根K线左右
11:04 这大概率只是一次小反转
11:06 要么是牛旗 要么是震荡区间
11:09 空头当然会
11:11 快速止盈做剥头皮交易
11:14 一些也可能会继续持有做波段交易
11:18 期待可以反转到这里或这里`},{prompt:"一段反弹在当前时间周期上很短，讲师把它称为“小反转”，并说有些交易者会把它当成“噪音”。这对理解这次反弹有什么帮助？",options:["它确实改变过方向，但幅度可能太小，不适合当前交易尺度","它必须在较大周期也形成相同反转，才算当前周期的方向变化","它若没有改变原趋势，就不应该在当前周期上看出方向变化"],answer:0,explanation:"此处“小”描述的是变化相对于当前交易尺度的大小。是否值得交易和价格是否短暂改变方向，是两个判断。",id:"21A-K04-1",knowledgeId:"K04",knowledgeTitle:"小反转与交易尺度",time:"11:26–14:00",pdfPages:[1808,1809],type:"理解判断",quote:`11:26 我想讲一讲所谓的噪音
11:29 人们谈论交易的时候经常会说到这个词
11:33 噪音的意思其实就是小反转
11:37 例如有一个下降趋势 尝试反转
11:41 尝试反转做波段交易的交易者会忽略小反转
11:45 他们会说哦
11:47 那只是噪音而已
11:48 此外在一个窄震荡区间内当市场多次反转时
11:53 一些交易者会忽略它们 并称之为噪音
12:02 我对噪音的定义是一些小到你会忽略的东西
12:08 我从不使用噪音这个词
12:11 我使用小反转这个词
12:13 因为噪音暗示着某些东西是纯粹随机发生的
12:17 但是事实上没有什么是随机的
12:26 发生的每一件事背后都和电脑程序有关
12:31 市场上发生的一切事情都和逻辑相关
12:35 仅仅因为某些事情很小
12:38 你选择忽略它并不意味着它是随机的
12:42 它是真实的
12:44 并且有足够的理由存在电脑程序下单交易
12:49 因为他们看到了背后的逻辑
12:52 尽管这些交易很小 你永远不会考虑这样做
12:56 一些小反转对于剥头皮交易者来说足够大
13:00 不只是程序做的一两个tips
13:03 一两个pips的交易
13:05 然而这仍然是小反转
13:07 因为剥头皮交易者在进行这些交易并从中赚钱
13:11 所以他们不是随机的
13:13 你不可能从随机的波动中赚钱
13:16 你只能根据逻辑来赚钱
13:18 因此 市场上不存在噪音
13:20 每当我听到有人谈论噪音时
13:24 我认为他们是无知的
13:27 他们要么不理解市场在做什么
13:30 为什么这么做 要么他们只是选择忽略
13:35 市场的行为
13:36 忽略是可以接受的
13:38 如果时间周期过小
13:40 你选择不交易它 这非常正常
13:44 但是说它是噪音并认为它是随机的那就是愚蠢的
13:49 是无知的
13:50 因为所有发生的事情都有原因
13:54 我对噪音的定义小反转
13:57 我更喜欢使用小反转
14:00 这个词`},{prompt:"价格原先在下降通道里运行，后来涨破通道并维持了一段时间。接着空头试图恢复下跌，但价格从一个更高的低点再次转涨。为什么讲师会更认真地看待第二次向上尝试？",options:["第二次转涨的高点要先低于前高，才支持下降趋势已经结束","已经出现通道突破和恢复下跌失败，两项证据支持观察较大的反转","第一次突破时已足以确认上涨趋势，后面的回落只影响入场价"],answer:1,explanation:"这个顺序比只看到一根阳线多了两层证据：原通道已被突破，恢复下跌也遇到失败。课程约40%的说法针对这样的候选情境。",id:"21A-K05-1",knowledgeId:"K05",knowledgeTitle:"大反转候选怎样形成",time:"14:03–19:33",pdfPages:[1810,1811,1812],type:"理解判断",quote:`14:03 接下来我想讲一下从下降
14:06 趋势到上涨趋势的波段交易
14:14 当市场处于下降趋势时
14:16 交易者假设每次反转尝试都是小反转
14:20 也就是说它将成为雄奇或震荡区间
14:23 他们会继续这样做
14:25 直到看到一个特别强的小反转
14:30 例如如果它突破了下降趋势线
14:33 并上涨或横盘十根K线左右
14:37 这就是多头在变强 空头在变弱的信号
14:44 这仍然是一个小反转 但他警告交易者
14:48 下降趋势很可能已经接近尾声
14:52 并即将转变为震荡区间
14:55 或上涨趋势
15:01 如果小反转后下降趋势恢复
15:04 交易者会怀疑下一次反转的尝试
15:07 可能就不只是小反转那么简单
15:11 可能会是一个大反转
15:13 通常来说 当你看到一个大反转的机会
15:16 大约有40%的概率能够形成相反的趋势
15:23 60%的概率市场保持横盘或下降趋势恢复
15:32 这里有一个低点抬高的大反转
15:35 一个较强的小反转
15:38 它突破了下降通道 现在下降趋势正在恢复
15:43 交易者会准备好下一次反转的尝试
15:46 而下一次反转是大反转的概率增加了
15:51 有几段下跌低点略微抬高的双底
15:56 还有一个不错的做多信号
15:59 K线波段交易者会在这根
16:01 K线的高点上方挂单买单
16:03 会在这里成交押注有40%的概率会有大反转
16:08 至少有几段上涨可以做波段交易
16:19 来看相反的情况
16:21 上涨趋势可能会反转为下降趋势
16:33 当市场处于上涨趋势时
16:36 交易者假设每次反转尝试都是小反转
16:39 会变成震荡区间或牛其 然后上涨趋势继续
16:44 然而如果出现了一个足够强的小反转
16:48 跌破上涨通道
16:50 跌破趋势线
16:51 尤其是如果它持续了十根或更多K线
16:55 交易者就会开始思考上涨趋势是否即将结束
16:59 并转变为震荡区间或下降趋势
17:02 因此交易者会考虑在下一个反转时做
17:06 空压住它可能是大反转变成相反的趋势
17:10 从上涨趋势反转为下降趋势
17:13 一般情况下概率是40%
17:19 这里空头尝试制造一个
17:21 高点降低的大反转第二
17:24 做空入场点第一
17:26 在这里大多数交易者不会在这里做空
17:30 现在是第二次尝试 并且高点降低
17:33 交易者要么在那里卖出 要么在这个阴线下方卖出
17:37 我对这个大反转的担忧是
17:40 前面的抛售只持续了五根K线
17:42 通常这不足以制造一个大反转
17:45 有可能 但概率不高 反弹很弱
17:49 从高点的回调持续了10 15根K线
17:53 也许有40%的概率这会形成大反转
17:57 然而它只是导致了第二段下跌
18:00 是一个更大的小反转而已
18:03 有两段下跌的小反转
18:06 一反弹二变成一个大的牛旗
18:09 然后上涨趋势恢复
18:11 然而在这一时刻
18:13 从高点的回调持续了大约30根K线
18:17 很多K线很长一段时间内
18:19 多头失去了对市场的掌控
18:22 市场处于平衡的状态 交易者意识到这一点
18:26 这是一个非常大的小反转
18:28 注 持续时间久 但跌幅并不大
18:30 因此 如果上涨趋势恢复并尝试再次反转
18:34 那反转成功的概率就更大了
18:42 他们会考虑卖出做空 这个突破足够强
18:45 所以大概率至少会有小的第二段上涨
18:49 在第二段上涨之后
18:51 交易者会考虑做空高点略微抬高的大反转机会
18:55 这是一个合理的波段做空机会
18:58 你也可以在这根K线下方做空
19:01 第二一在这里 第二在这里
19:04 然后是空头突破之后的反弹
19:06 连续的阴线大概率价格还会至少再跌一些
19:10 40%的概率会有一个下跌的波段
19:14 这意味着至少几段下跌
19:16 通常当一个波段交易者寻找做空机会时
19:20 在大反转之后他期望至少有几段下跌
19:24 他还期望下跌的反转持续20根或更多K线
19:28 并且利润超过两倍的实际风险
19:33 在这个案例中 利润是实际风险的很多倍`},{prompt:"看图左侧蓝色区域，价格横盘后从右端强势上破，绿色高亮附近的K线继续收高。这个走势和只用一根上影线刺过区间顶部有什么区别？",options:["强收盘和持续上涨支持观察后续上涨波段","只要第一次越过区间顶部，影线和连续收高提供的证据相同","持续上涨代表测量目标已完成，应立即把走势归回区间"],answer:0,explanation:"本例有突破后的跟随，不能把它与盘中一度越界、后来又收回区间等同。两段或测量目标仍是预期。",id:"21A-K06-1",knowledgeId:"K06",knowledgeTitle:"区间向上突破后看跟随",time:"19:42–20:49",pdfPages:[1813],type:"图表应用",quote:`19:42 波段交易可以是下降趋势到上涨趋势
19:46 可以是上涨到下跌 可以是震荡区间的突破
19:50 这里有一个震荡区间和多头突破
19:55 这是一个潜在的波段交易机会
19:57 至少有几段上涨作为最低目标
20:02 突破大阳线的收盘高于过去
20:05 20或30根K线的高点
20:08 继续上涨的概率非常大
20:10 然后是跟随K线 突破K线的后一根K线
20:14 也是一根收在高位的阳线
20:17 而且收盘价高于突破K线的最高点
20:20 另外跟随K线的开盘价高于突破K线的收盘价
20:25 筑级跳空高开
20:26 这说明这根K线收盘的一瞬间
20:29 很多交易者点击市价买入
20:32 所以有很多交易者尝试在
20:34 这根K线收盘时市价买入
20:36 因此这根K线的开盘价高于这根K线的收盘价
20:41 这是买盘非常急切的信号
20:43 这增加了向上达到某个MM
20:46 目标位和至少两段上涨的概率
20:49 第一段回调 第二段 后面还有第三段上涨`,image:{src:"/charts/21a-range-break.webp",solutionSrc:"/charts/21a-range-break-solution.webp",page:1813,alt:"原课件第1813页走势局部"}},{prompt:"看图中两条向右下方倾斜的红线，它们框住此前的下降通道。右侧绿色高亮的阳线向上穿过了上边那条红线。这根阳线提供了什么新证据？",options:["价格已确认形成新的上涨趋势，后面的走势无需再验证","价格开始向上突破原下降通道，可以观察反转能否延续","价格只测试了下降通道下边界，仍未尝试向上突破"],answer:1,explanation:"绿色高亮的阳线突破下降通道上边界，给出了反转开始的证据。反转能否走得更远，还要看后续走势。",id:"21A-K07-1",knowledgeId:"K07",knowledgeTitle:"反转从突破原结构开始",time:"20:57–23:18",pdfPages:[1815,1816],type:"图表应用",quote:`20:57 几乎所有的反转都是从突破开始的
21:01 尽管突破并不总是非常明显 有时它们很小
21:10 反转本身就是一种突破 尝试恢复下降趋势
21:15 下降趋势和极端上涨一回调
21:19 2、现在空头尝试再次向下突破
21:23 然而市场反转上涨
21:25 尤其是这根大阳线 它完全反转了
21:29 空头突破每次反转都是一种突破
21:32 每根大阴线都是一次突破
21:35 也是抛售高潮 这大多是次要的高潮
21:38 每根大阳线也是一次突破 也是抢购高潮
21:42 大阳线这是一次突破 它可能是上涨趋势
21:47 或者至少是上涨波段的开始
21:50 所有的反转都至少从一个
21:53 小的突破开始
21:57 这是一个多头突破
21:59 你可以说它突破了下降趋势线
22:02 它突破了一个震荡区间
22:05 它突破了这根大阴线
22:07 空头放弃了希望趋势恢复向下的空投
22:10 之前在这里卖出做空 现在他们
22:14 买入回补
22:15 多头更加有信心 这是一个低点抬高的大反转
22:20 至少会有第二段上涨
22:22 一旦他们看到突破K线和跟随K线
22:25 他们假设这是第一段上涨
22:28 并且交易者会在第一次回调下跌时买入
22:31 并期望还有一段上涨
22:33 这是一个放弃K线 空头正在放弃做空的
22:37 空头对这个阳线感到失望
22:39 他们希望继续下跌 但当市场开始上涨时
22:43 他们买入回补止损
22:45 他们在这根K线上放弃了
22:52 每个趋势都在一个通道内
22:54 所以每个反转都会突破一个通道
23:00 大阳线向上反转
23:01 某个地方一定有一个下降通道
23:04 有很多画通道的方法 一种是使用这个高点和这个高点
23:09 然后做他的平行线
23:10 然后把尽可能多的K线包含进去
23:13 那么这个就变成了一个突刺
23:16 这是下降通道 这是多头突破大阳线反转`,image:{src:"/charts/21a-channel-break.webp",solutionSrc:"/charts/21a-channel-break-solution.webp",page:1816,alt:"第1816页下降通道的两条红线及右侧向上突破"}},{prompt:"下跌后出现强劲的向上突破。原来做空的人开始买回平仓，也有人买入开多仓。这两类交易怎样影响眼前的上涨？",options:["空头平仓会产生卖单，可能抵消新多头的买单","只有新多头的交易会产生买单，空头平仓只是撤销挂单","两类交易都产生买单，可以共同推动价格向上"],answer:2,explanation:"空头买回和多头买入在持仓目的上不同，但都需要买入，因此都能增加眼前的买压。",id:"21A-K08-1",knowledgeId:"K08",knowledgeTitle:"反转的买盘从哪里来",time:"23:18–27:39",pdfPages:[1817,1818,1819],type:"理解判断",quote:`23:16 这是下降通道 这是多头突破大阳线反转
23:20 你知道它肯定突破了某个下降通道
23:31 每当有突破 每当有大的趋势K线
23:34 尤其是后续有跟随的时候
23:36 说明交易者同意目前的价格是错误
23:40 他必须快速移动 找到一个新的公平价格
23:43 无论是突破还是反转都一样
23:46 你以同样的方式交易他们
23:48 这是一个震荡区间上方的多头突破吗？
23:52 这是一个下降通道上方的多头突破
23:55 这是向上反转这个下降趋势吗？
23:58 你怎么看待它都无所谓 市场正在上涨
24:01 所有这些的本质都一样 它是突破也是反转
24:06 大阴线收在最低 多头尝试在这里筑底
24:11 但是被跌破了
24:13 这意味着价格太高了
24:15 市场必须下跌才能找到更多买家
24:21 突破价格在下跌 这是一次反转
24:24 它也是一次突破 价格在上涨
24:28 价格太高
24:35 下降趋势
24:37 下降通道高点和低点都在不断降低
24:44 如果下降趋势要变成上涨趋势
24:47 它必须突破下降通道
24:49 然后他必须开始制造一系列更高的低点
24:53 低点下一个低点略微抬高
24:56 再次略微抬高 然后大阳线突破
24:59 这看起来像是上涨趋势的开始
25:03 实际上它确实是
25:07 一旦下降通道被向上突破
25:10 交易者就会观察市场是否尝试恢复下跌
25:14 但是恢复失败 然后反转上涨
25:17 如果确实是这样
25:19 那就会变成低点抬高的大反转
25:23 在恢复下降趋势失败之后
25:26 多头会寻找反转上涨的买入机会
25:29 空头尝试恢复向下趋势
25:32 然而出现了一根大阳线
25:34 空头被套牢在一笔亏损的交易中 而多头很高兴
25:38 他们抓住了上涨的开始 至少会有两段上涨
25:44 一回调2
25:48 空头突破但跟随不好
25:50 多头会在这根K线的高点上方买入压住
25:54 这是一个低点抬高的大反转
25:57 他们希望这是上涨趋势的开始
26:01 低点会越来越高
26:08 在两张图中市场都在下跌
26:10 显然市场认为目前的价格太高了
26:14 必须快速下跌来找到一个新的公平价格
26:18 它是反转还是跌破震荡区间重要吗？
26:22 不重要
26:22 你以同样的方式交易 他们注
26:25 因为本质是一样的定价错
26:28 市场告诉你价格太高了
26:30 震荡区间空头突破 你应该卖出做空
26:34 因为市场快速下跌 价格大概率还会更低
26:41 这个案例上涨趋势被反转
26:44 你以完全相同的方式去
26:46 交易它价格显然是错误的
26:49 空头突破这里也是一次空头突破
26:53 右边是反转 先上涨再下跌 这并不重要
26:56 你以同样的方式去交易 你在阴线的收盘卖出做空
27:01 你以任何理由卖出
27:03 市场告诉你价格太高了 它会下跌
27:06 它正在下跌 想要找到新的
27:10 公平价格
27:12 到底是跌破震荡区间还是空头反转
27:15 无所谓 都一样
27:17 你以同样的方式交易 他们
27:27 这里的下降趋势看起来
27:29 和这里的下降趋势一样
27:31 前期发生了什么并不重要
27:34 你以同样的方式交易他们
27:36 市场在寻找一个新的更低的价格
27:39 有时反转只需要一根K线就会变得很明显`},{prompt:"案例甲下跌后出现一根很强的阳线，所处位置也支持反弹。案例乙缓慢向下走了许多根K线，随后才出现明显的向下突破和跟随。为什么两个案例确认方向变化的时机不同？",options:["较慢的变化更容易立即确认，因为持续根数比突破强度更重要","K线力度和背景不同，有时很早就有线索，有时要等后续突破","案例甲和乙都要等固定数量的K线，之前的突破力度差别不影响判断"],answer:1,explanation:"本课并列展示快速明确与逐步明确的两种情况。判断时看背景、突破力度和延续，不能只数K线。",id:"21A-K09-1",knowledgeId:"K09",knowledgeTitle:"反转何时看得清楚",time:"27:39–31:37",pdfPages:[1820,1821],type:"理解判断",quote:`27:36 市场在寻找一个新的更低的价格
27:39 有时反转只需要一根K线就会变得很明显
27:46 下降趋势三次向下
27:49 推动一二三连续的抛售高潮
27:52 这里有一点 这里更多
27:55 很可能跌的太快太猛 会有一定程度的反转
28:00 这里有一根非常大的大阳线收在最高
28:04 完全反转了
28:05 最后一根大阴线 大概率会有几段上涨
28:10 这样的单一K线足以让
28:12 交易者相信反转正在发生
28:19 强势的多头反转三推楔形底
28:22 交易者期望目前市场处于单边上涨
28:25 只能做多
28:26 随着新的阳线不断出现
28:29 交易者变得更加有信心
28:31 会涨到某个mm目标位
28:37 有时候一根K线就反转了
28:39 有时候需要很多根K线才能清楚地看到市场已经反转
28:44 这是这个下降趋势的起跌点
28:48 然而 最初这只是上涨趋势中的回调
28:52 回调不断发展
28:53 持续了20根K线或更多
28:55 在某个时刻变成了无尽的回调
28:58 回调不断发展 变成了反转
29:01 回调持续的K线越多 市场就越接近50
29:05 对50市场恢复上涨的概率
29:08 下降变得和反转下跌的概率相同
29:13 通常在大约20根K线之后 概率变得相同
29:17 这是一个从上涨趋势到下降趋势的过杜
29:22 这是下降趋势的早期阶段
29:24 它仍然是一个牛气 也是一个震荡区间
29:28 然而最终发现它是下降趋势的开始
29:31 直到看到这几个大阴线
29:33 下降趋势才变得明显
29:36 在这里 然后这里也许这里连续两三根阴线
29:41 此时市场已经明显反转了
29:44 还会继续有至少几段下跌
29:47 一反弹2或者二抛物线楔形顶123
29:55 然后回调50根K线
29:57 回调发展到了20根K线线无尽的回调
30:01 你必须考虑这不再是回调那么简单
30:04 这是一个震荡区间向下突破的概率
30:07 变得和恢复上涨趋势的概率相同
30:12 完全反转了左边的上涨
30:19 下降通道牛其 但是随着K线越来越多
30:23 它就变成了一个无尽的回调
30:25 一旦发展到大约20根K线
30:28 你必须考虑空头突破的概率
30:31 和上涨趋势恢复的概率相同
30:40 空投需要两样东西
30:41 突破的阴线以及跟随K线
30:44 最好是一个大阴线收在一半以下
30:47 最好是收在最低点
30:49 并且后一根K线也是阴线
30:52 如果空投成功的制造出大阴线跟随
30:55 那么至少会跌到某个MM目标位
30:58 它变成了测量型大阴线 收在一半
31:03 以下跟随阴线
31:05 也收在一半左右是合格的
31:08 跟随多头放弃了 空头看到多头放弃
31:12 于是继续大量卖出
31:14 希望至少会有两段下跌下降趋势反弹
31:20 这看上去像是一个雄奇
31:24 然而多头向上突破了雄起
31:27 这又是无尽的回调
31:29 反弹大阳线后续有跟随K线上涨通道
31:34 这是一个雄奇 空头尝试向下跌破`},{prompt:"价格大跌后沿着一条缓慢上升的通道反弹，原先可以把这段反弹当成可能继续下跌的熊旗。后来连续阳线向上突破反弹通道，应怎样更新判断？",options:["原先跌幅较大，仍应把向上突破当作熊旗内部波动","下跌延续的预期受到了挑战，观察向上突破能否持续","先前的下跌已被完全收复，因此可以确认新的上涨趋势"],answer:1,explanation:"图例里熊旗候选没有向下延续，反而向上突破。这个变化值得更新判断；单靠突破也不能断言已经收复整段下跌。",id:"21A-K10-1",knowledgeId:"K10",knowledgeTitle:"熊旗预期可以失败",time:"31:38–33:30",pdfPages:[1822],type:"理解判断",quote:`31:34 这是一个雄奇 空头尝试向下跌破
31:38 再次尝试向下跌破
31:40 但是失败了 多头反过来突破了雄奇的高点
31:44 熊琦被向上突破
31:46 这会导致价格
31:48 涨到上方的mm标这个低点
31:51 测试了这个高点很可能是测量型缺口
31:56 然后上涨到了mm目标位 突破在这里和
32:00 这里非常明显
32:04 雄奇中出现了较大的阳线
32:08 来越多的交易者开始相信空头即将失败
32:13 价格会突破雄奇去到MM标位
32:16 现在有连续三根阳线收在高位
32:20 空头尝试反转下跌
32:21 但回调的低点保持在突破点的上方
32:25 所以这很可能是测量性缺口
32:28 有向上的mm标位非常
32:31 大的阳线还会继续上涨
32:34 跟随K线还会继续上涨
32:37 雄奇被向上突破 在这里突破
32:40 在这里突破 在这里突破
32:43 这里是突破最明显的时候
32:48 这意味着空头正在放弃 他们终于放弃了
32:52 我称之为放弃K线
32:54 两根放弃K线 空头正在放弃
33:01 这节课的开始我讲了反转的定义
33:05 广义的反转指市场周期的变化
33:08 从震荡区间到趋势 或者从趋势到震荡区间
33:13 我通常用反转一词来形容
33:16 一个趋势变成相反的趋势
33:20 如何区分小反转和大反转非常重要
33:24 小反转只是几根K线 三根最多50根K线
33:29 并不会导致相反的趋势`}],sourceFile:"BTC PAF 21A Reversals v5_中文 (源语言).srt"},{id:"21B",group:"反转",title:"反转入场、趋势惯性与杯柄",range:"00:00–31:46",revision:"reversal-21b-v1",notes:["首次反转给较早的入场机会，等待突破则增加方向证据。用案例里的同一止损位置比较两种做法。","强趋势可以不断越过候选支撑阻力。通道突破以及随后高点、低点的变化有助于更新判断。","强趋势中的反转尝试与区间中的突破尝试是两类不同事件。","杯是较大的反转结构，柄是其后的较小回调；顶部和底部的突破方向相反。"],knowledgePoints:[{id:"K01",title:"反转提供最早入场，之后仍有机会",summary:"初次反转可能提供较近的止损与较远的潜在目标，但在趋势未明朗时成功概率往往较低。趋势发展后还会出现其他入场机会。",time:"00:11–05:07",pdfPages:[1827],questionIds:["21B-K01-1"]},{id:"K02",title:"上涨通道和趋势的结构",summary:"上涨趋势通常有抬高的高点和低点，可用上升通道观察；趋势线可根据新的结构重新绘制。",time:"05:17–06:08",pdfPages:[1828],questionIds:["21B-K02-1"]},{id:"K03",title:"突破通道与后续结构",summary:"跌破上涨通道后，观察反弹是否止于较低高点、之后能否形成更低高低点。下降趋势线也可随新信息重新绘制。",time:"06:09–07:26",pdfPages:[1829,1830],questionIds:["21B-K03-1"]},{id:"K04",title:"强趋势容易穿过候选阻力",summary:"上涨惯性可以使许多候选阻力被穿越。到阻力后要比较市场究竟延续、停顿还是反转。",time:"07:35–11:24",pdfPages:[1831,1832],questionIds:["21B-K04-1"]},{id:"K05",title:"下降惯性与下方支撑",summary:"下降趋势常穿过支撑，最终仍会在某处结束。前低、测量目标和楔形可能共同提示观察反应。",time:"11:25–14:02",pdfPages:[1833,1834],questionIds:["21B-K05-1"]},{id:"K06",title:"上涨中的下跌何时仍是回调",summary:"上涨结构内守住重要更高低点的下跌可仍属回调；跌破通道和重要低点后要重估区间或下降。",time:"14:03–15:31",pdfPages:[1835],questionIds:["21B-K06-1"]},{id:"K07",title:"80%法则适用于不同背景",summary:"课堂法则在强趋势里针对反转尝试，在区间里针对突破尝试；两者的分母不同。",time:"15:39–20:00",pdfPages:[1837],questionIds:["21B-K07-1"]},{id:"K08",title:"等待突破改变入场取舍",summary:"课中比较早期反转和等待明确突破后的风险、潜在回报与概率。",time:"20:02–24:03",pdfPages:[1838,1839],questionIds:["21B-K08-1"]},{id:"K09",title:"底部杯柄的两部分",summary:"下跌转为上涨的较大结构可构成杯，右侧反转后的短回调是柄。",time:"24:08–27:12",pdfPages:[1841,1842,1843],questionIds:["21B-K09-1"]},{id:"K10",title:"顶部杯柄与不同观察尺度",summary:"顶部的倒杯柄在反转后出现向上的回调，关注柄下方突破。较小反转可位于较大趋势中。",time:"27:13–31:46",pdfPages:[1843,1844],questionIds:["21B-K10-1"]}],questions:[{prompt:"下跌后刚出现向上的反转信号。甲在首次反转时考虑买入，乙等走势已经明显向上再找机会。课程怎样比较两人的选择？",options:["甲可能用较近止损争取较大上涨空间，乙等待更多证据后仍可能找到入场机会","甲错过首次反转后便只能等下一次大反转，乙等到趋势明确时通常已无机会","甲可以从较近止损推断上涨更可能成功，乙主要靠更远的止损提高回报"],answer:0,explanation:"首次反转给了较早的入场位置，但仍有失败可能。课程图例在上涨形成以后也标出了多次潜在买入机会。",id:"21B-K01-1",knowledgeId:"K01",knowledgeTitle:"反转提供最早入场，之后仍有机会",time:"00:11–05:07",pdfPages:[1827],type:"理解判断",quote:`00:11 反转是进入趋势的最早机会 风险较小
00:15 因为你是在上涨趋势的底部买入
00:20 或者在下降趋势的顶部做空
00:22 缺点是胜率较低 至少刚开始的时候是这样
00:26 我的80%法则
00:28 震荡区间中80%的突破尝试会失败
00:34 我也会讲到一个你经常会听到的结构
00:39 茶杯带柄杯柄形态它的
00:42 意思是市场发生了大反转
00:45 然后有一些回调
00:47 大反转像茶杯 回调像杯丙
01:00 在第一次反转时就入场的优势是风险较小
01:06 是整个趋势中风险最小的时候
01:09 例如在这里开仓做空风险小
01:13 回报大 然而概率通常也较低
01:17 在趋势
01:18 形成之后入场胜率更高
01:22 但在这个时候止损更远
01:27 当你看到趋势正在发展 当你看到市场在单边上涨
01:32 入场永远不会太晚
01:35 比如这里在反转时买入 或者在这里买入
01:40 只是其中一种入场的方式
01:43 还有很多其他进入趋势的方法
01:48 三四次下跌1或者123
01:51 所以这是一个楔形底
01:54 你也可以说它是低点降低的大反转下降趋势
01:59 多头突破更低的低点反转是最早的入场点
02:04 要么在这个小双底的上方
02:07 要么在这个阳线上方买单会在那里成交
02:12 然而还有很多其他入场的方法
02:15 反转入场是最早的一个
02:18 但总有很多进入趋势的方法
02:21 这里有一个高二牛旗和双底抢购高潮测试
02:25 抢购高潮的底部漂亮的阳线反转上涨
02:28 你可以在那根K线的高点上方买入买单
02:32 在这里成交非常强的突破惊喜黑线
02:35 惊喜K线之后通常会有跟随
02:38 你可以在它的收盘买入
02:40 强势的跟随K线大概率还会上涨反转的尝试
02:45 在如此强势的突破之后 反转很可能会失败
02:50 所以交易者会在低位买入
02:52 压住空头突破会失败
02:54 高二买入点 这里是高一
02:56 这个阳线上方买入是高2
03:00 初始止损放这里或这里或这里止损较远
03:05 然而胜率非常高
03:08 高一在这根K线上方 高二在这根K线上方
03:13 现在有一个高三的买入点
03:16 三推楔型牛旗一二三在那个
03:19 做多信号K的高点上方买入
03:22 订单会在这里成交 多头突破之后有小的暂停
03:27 这是高一牛旗在那根K线的高点上方买入
03:32 明显的三次向上推动一二三
03:35 空投最早的入场点是在反转K线的
03:39 下方挂突破卖单吞噬大阴线收在最低
03:43 此时反转的概率还不高
03:46 市场更有可能会横盘而不是下跌
03:50 然而 数学期望是好的
03:52 因为潜在汇报远远大于风险
03:55 弥补了概率方面的劣势
04:00 如果你没有在这里入场
04:02 不用担心还有很多其他入场点
04:05 连续4根K线下跌 其中三根阴线收在最低
04:09 你可以在那个运线第四根阴线的低点下方卖出
04:13 尝试反转上涨
04:14 但左边是六根K线下跌
04:16 其中五根是好的阴线反转大概率会失败
04:20 在那个阴线的最高点挂限价卖单
04:23 订单会在这里成交非常窄的下降通道
04:26 有一个阳线反弹
04:28 可以在那根K线的低点下方卖出反弹
04:32 第二做空点 这里和这里组成了双顶
04:36 或者这个和这个也是双顶
04:38 在那根K线的低点下方迈出
04:41 这里和这里也是一个双顶
04:44 在这根K线的低点下方卖出又一个双顶
04:48 或者说是三推楔形雄起
04:51 强势上涨
04:52 第二推 第三推
04:54 在那根K线的低点下方卖出意外的强势空头
04:58 突破连续四根阴线可以开始卖
05:02 K线的收盘在这里或这里
05:04 或这里反转是最早的入场
05:07 因为你买在底部卖在顶部 但胜率并不高`,referenceImage:{src:"/charts/21b-entries-solution.webp",page:1827,alt:"第1827页课件整页讲解",kind:"课件整页"}},{prompt:"看图中央两条向右上倾斜的绿线。在线间上涨的过程中，每次回落的低点比前一次高，随后上涨也多次超过前高。哪种描述最符合这段走势？",options:["高点抬高、低点降低，形成向外扩大的区间","高点和低点整体降低，形成下降通道","高点和低点整体抬高，形成上涨通道"],answer:2,explanation:"两条绿线框出上涨的一段。判断依据是回落低点抬高与上涨高点抬高，不能只看某一根阴线或阳线。",id:"21B-K02-1",knowledgeId:"K02",knowledgeTitle:"上涨通道和趋势的结构",time:"05:17–06:08",pdfPages:[1828],type:"图表应用",quote:`05:17 高点更高的高点
05:22 更高的低点 这就是上涨趋势
05:26 每当有趋势有回调的时候
05:28 你总是可以构建一个通道
05:36 上涨趋势不断上涨 高点和低点都在抬高
05:41 你总是可以画出一个通道
05:44 想要反转呈下降趋势
05:46 价格必须跌破上涨通道
05:49 然后形成一系列更低的高点、更低的低点
05:54 更低的低点
05:56 更低的高点
06:00 一旦通道上涨趋势线
06:02 被跌破
06:03 空头就会在更低的高点做空
06:07 例如这里高点降低的大反转`,image:{src:"/charts/21b-bull-channel.webp",solutionSrc:"/charts/21b-bull-channel-solution.webp",page:1828,alt:"第1828页两条绿色边线框住的上涨通道"}},{prompt:"价格跌破上涨通道下边界，随后反弹，但没有涨回原来的最高点就再次下跌。比起只看到跌破通道，这次反弹又提供了什么信息？",options:["反弹没有回到前高，因此无需再观察低点是否降低就能确认新下降通道","反弹已经恢复原上涨趋势，因为跌破后价格曾经上涨","出现了低于前高的反弹高点，可以继续观察是否形成下降结构"],answer:2,explanation:"较低高点为下跌延续提供额外线索；要判断新下降趋势，还要看随后是否继续出现更低的高点和低点。",id:"21B-K03-1",knowledgeId:"K03",knowledgeTitle:"突破通道与后续结构",time:"06:09–07:26",pdfPages:[1829,1830],type:"理解判断",quote:`06:07 例如这里高点降低的大反转
06:11 头肩顶左肩头右肩
06:18 在如此强势的抛售之后
06:21 第一次反转上涨失败的概率很高
06:26 一些追涨多头没有及时离场 浮亏很大
06:29 他们希望有一些反弹可以让他们少亏一些离场
06:34 一些空投还没来得及入场 他们迫切的想要做空
06:38 他们会在第一次反弹时卖出
06:41 预期至少会有第二段下跌 所以空头突破后高点降低
06:46 通常至少会有小的第二段下跌
06:49 在这里入场胜率更高
06:58 下降趋势 低点和高点都在降低
07:02 并且处在一个通道中
07:07 随着时间的推移
07:08 通道往往变得更宽、更平坦
07:11 每次旧的趋势线被突破
07:13 你就可以画一条新的线
07:15 从新的高点向下反转画一条新的趋势线
07:19 突破了那条线 突破了这条线
07:21 然后从新的高点向下反转 画一条新的趋势线
07:26 每次获得额外的信息就可以划线`},{prompt:"看图上方橙色横线与红、蓝斜线接近的区域。价格此前多次涨过前高，这里又出现测量目标与楔形顶部接近的情况。应怎样同时理解上涨惯性和这处潜在阻力？",options:["前几个前高未能阻止上涨，可以判断任何后续目标附近的回落都是普通回调","强上涨可能继续穿过阻力，同时可以在目标附近留意是否出现转弱","出现目标与楔形汇合后，应直接按新下降趋势看待，等出现突破再调整止损"],answer:1,explanation:"前几处阻力被穿过说明上涨有惯性，目标与楔形汇合提供新的观察位置。趋势有没有转弱，还要看价格反应。",id:"21B-K04-1",knowledgeId:"K04",knowledgeTitle:"强趋势容易穿过候选阻力",time:"07:35–11:24",pdfPages:[1831,1832],type:"图表应用",quote:`07:35 上涨趋势具有惯性
07:37 也就是说市场倾向于继续做他正在做的事情
07:43 换句话说 趋势倾向于继续
07:46 大多数的阻力会失败
07:48 市场正在无视这些阻力 它突破一个阻力位
07:52 然后看下一个阻力位 它通常
07:56 也会失败
07:58 开始反转上涨
07:59 非常强势的突破 超过了前期高点的阻力
08:02 只要它在制造更低的高点和更低的低点
08:06 下降趋势就依然成立
08:08 如果市场突破了一个重要的高点
08:11 那就不再是下降趋势 要么是震荡区间
08:15 要么是上涨趋势 这是一个潜在的双顶
08:20 可能有阻力
08:21 强势的上涨 市场完全无视了那个阻力
08:25 强势突破了双顶
08:30 强势突破了震荡区间
08:32 在震荡区间的上沿有一个双顶
08:37 可能正在尝试形成楔形点 一次向下反转
08:42 第二次向下反转 可以这样画一条线
08:46 它会在那条线反转下跌吗？
08:48 不会 潜在通道的上沿阻力失败了
08:52 价格强势突破上方有mm目标位
08:58 双底仅限mm目标位
09:00 市场无视了MM标位
09:03 并强势突破了它潜在的双顶 市场无视了它
09:11 正如之前所说
09:12 一个强上涨趋势往往会无视阻力
09:16 一个强下降趋势往往会无视支撑
09:19 然而所有上涨趋势最终会在阻力位结束
09:23 所以重要的是继续寻找阻力
09:29 楔形顶123 另一种画法123
09:36 所以这里有一个潜在的楔形顶
09:40 这里有一些回调
09:42 这个低点保持在这个高点
09:45 的上方缺口测量型缺口
09:47 所以上方有潜在的mm标位
09:50 这是起涨点 这是突破点
09:53 M目标位就在这里震荡区间
09:57 当市场突破震荡区间时
10:00 通常会去到MM目标位区间的下沿
10:04 区间的上沿MM标位 所以这里有楔形顶
10:08 还有2个MM目标位
10:10 注多个阻力汇聚在一起
10:12 有一个不错的做空信号
10:14 K线下降趋势也具有惯性
10:19 市场倾向于继续做它一直在做的事情
10:23 如果它在下跌 它会继续下跌 支撑会失败
10:28 多头希望有一个潜在的双底尝试获得支撑
10:34 但反转下跌 只要低点还在抬高
10:37 就仍然是上涨趋势
10:39 这里有一个重要的低点强势突破创新高
10:43 然而这个重要的低点被跌破了
10:46 因此上涨趋势很可能已经结束
10:49 现在市场要么处于震荡区间
10:52 要么处于下降趋势
10:55 刚开始你并不知道到底是震荡还是下跌
11:00 最终下降趋势占了上风
11:05 这里有支撑 也许是突破后回撤突破点
11:10 可能和前期的低点组成双底
11:13 然而市场跌破了它
11:18 另一个前期的低点 多头之前在这个价格买入
11:22 再次跌下来的时候跌破了这个低点`,image:{src:"/charts/21b-resistance.webp",solutionSrc:"/charts/21b-resistance-solution.webp",page:1832,alt:"原课件第1832页走势局部"}},{prompt:"看图右下角的绿色区域。价格一路下跌，来到橙色横线（下方测量目标）与蓝色横线（前低）附近，随后反弹。为什么课上会特别关注这一区域？",options:["几个支撑依据集中，可以观察买盘是否足以打断下跌","几个支撑依据集中，应当先把接下来任何反弹视为新上涨趋势","早先支撑已经失效，应等价格先涨回整段下跌起点才观察"],answer:0,explanation:"下降惯性使前面的支撑可能失效。这里有多个参考重合，能提高关注程度，但仍要观察反应强弱。",id:"21B-K05-1",knowledgeId:"K05",knowledgeTitle:"下降惯性与下方支撑",time:"11:25–14:02",pdfPages:[1833,1834],type:"图表应用",quote:`11:22 再次跌下来的时候跌破了这个低点
11:26 在下方有人买入 但上涨的幅度不够大
11:30 无法突破前期重要的高点
11:33 所以市场仍然处于下降趋势
11:37 在支撑位的楔形底略低于突破点
11:42 理论上会有支撑
11:44 三推楔形牛企上涨趋势
11:47 回调三次推动一二三测试前期
11:51 高点也大约是50%回调
11:55 所以这里有支撑 多头尝试反转上涨
12:00 然而市场不断的跌破
12:03 每个支撑位
12:04 楔形底123也是双底 是潜在的支撑
12:10 尝试反转上涨 市场继续跌破支撑下降
12:17 趋势
12:19 这个低点是潜在的支撑
12:22 急速上涨回调第二推
12:25 第三推 这是一个急速变通道的上涨趋势
12:29 急速回调通道
12:31 通常通道的起点会有支撑
12:34 然而它也被跌破了
12:36 下降趋势中大多数支撑
12:40 会失败
12:41 然而所有下降趋势最终在支撑位结束
12:46 所以继续寻找支撑很重要
12:50 然后观察市场在支撑位的表现
12:56 又一个楔形 第一二三这个楔形底失败了
13:02 123这个楔形底也失败了
13:05 现在空头尝试突破这个宽下降通道
13:09 你可以说它是三推 四推
13:12 五推都无所谓 三推或更多推
13:15 这是一个潜在的楔形底 尝试突破楔形底
13:20 另外看一下这个突破的规模
13:22 这是下降趋势后期最大的大阴线
13:26 下降趋势已经持续了大约50根K线
13:29 当你看到下降趋势持续二十多根K线后
13:32 再出现最大的大阴线
13:34 它更有可能是捷径型缺口
13:37 而不是一个测量型缺口
13:40 趋势更有可能即将衰竭
13:42 而不是一个新的更强势的下跌的开始
13:45 尝试加速跌破下降宽通道
13:48 有75%的概率会在五根K线之内反转上涨？
13:52 下降趋势后期最大的空头突破
13:56 大概率市场会反转
14:00 这里有一个潜在的双底`,image:{src:"/charts/21b-support.webp",solutionSrc:"/charts/21b-support-solution.webp",page:1834,alt:"原课件第1834页走势局部"}},{prompt:"上涨中的一次回落还在通道里，并且在前一个重要回调低点上方止跌。若之后另一次下跌既跌破通道，又跌破这个重要低点，两次下跌的含义有何不同？",options:["两次都应按上涨回调，因为下跌前已经形成了上涨通道","前一次仍符合上涨回调，后一次需要重估原上涨是否转为区间或下跌","两次都应按下降趋势开始，因为价格都曾连续向下走"],answer:1,explanation:"第一次守住趋势结构。第二次出现两个结构失守的证据，需要重新评估。",id:"21B-K06-1",knowledgeId:"K06",knowledgeTitle:"上涨中的下跌何时仍是回调",time:"14:03–15:31",pdfPages:[1835],type:"理解判断",quote:`14:00 这里有一个潜在的双底
14:03 市场跌破了那个双底潜在的mm标位
14:08 同时也正好在前期重要的低点上方
14:12 那是整个上涨趋势的起点
14:15 多头会尝试在那个低点附近制造双底
14:19 如果多头有足够的力量
14:21 他们就能够让双底保持在前期的低点上方
14:24 制造出一个低点抬高的双底
14:26 他们做到了
14:35 上涨趋势强势反转但趋势继续
14:39 上涨趋势尝试反转但趋势继续
14:43 当上涨趋势中有反转的尝试 然后趋势恢复
14:47 那次反转尝试就是一个牛骑
14:50 反转强势但趋势
14:53 继续牛气
15:00 上涨趋势结束需要几个条件
15:02 首先需要跌破通道的下沿
15:05 即跌破上涨趋势线
15:10 然后需要跌破前期的某个重要的低点
15:14 比如这个低点之后强势上涨创新高
15:18 所以它是一个重要的低点 然而它被跌破了
15:26 一旦重要的低点被跌破
15:28 上涨趋势就不再有效
15:31 市场要么处于震荡区间 要么处于下降趋势`},{prompt:"甲在强上涨趋势里看到价格第一次试图向下反转，乙在交易区间里看到价格尝试向上突破。按讲师的“80%法则”，两人分别要留意什么？",options:["甲留意反转可能失败，乙留意区间突破可能失败","甲和乙都应留意向上突破失败，因为两种情境都属于上涨趋势","甲和乙都应留意向下反转失败，因为区间向上突破也算向下反转"],answer:0,explanation:"这里比较原背景是否延续：强趋势里关注逆势反转失败，区间里关注脱离区间的突破失败。课程用它作背景判断。",id:"21B-K07-1",knowledgeId:"K07",knowledgeTitle:"80%法则适用于不同背景",time:"15:39–20:00",pdfPages:[1837],type:"理解判断",quote:`15:39 我刚才讲到在强上涨趋势中大多数阻力失败
15:44 80%的阻力会失败
15:47 市场继续上涨
15:48 在下降趋势中大多数支撑失败
15:51 这就是我的80%法则
15:56 在强趋势中80%的反转尝试会失败
16:03 有些交易者他们对反转交易欲罢不能
16:07 他们总是在寻找反转的机会
16:10 反转下跌他们做空 反转下跌他们做空
16:13 如果你在强上涨趋势中做空
16:16 如果你非常谨慎
16:18 有时候你可以赚一些剥头皮的小钱
16:23 空头突破跌破了重要的低点
16:26 一些多头会在反转上涨时买入
16:30 在反转上涨时买入
16:32 跌破前期低点 跌破前期低点
16:35 他们在反转上涨时买入
16:38 如果你在下降趋势中做多
16:40 你只能做剥头皮交易
16:43 因为强趋势中的大多数反转都会失败
16:52 例如在这里做空的空头
16:55 如果他赚钱之后没有离场
16:57 这里就涨回来了 稍微又跌了一些
17:01 再次涨回来变成高二牛旗
17:05 当市场处于上涨趋势
17:07 尤其是一个相当强势的上涨趋势出现
17:11 高二买点还有非常好的做多信号
17:14 K空投会在他的上方离场
17:16 多头入场预期趋势会恢复
17:21 这是高三买点
17:23 在这里做空的空头
17:25 如果他们没有及时剥头皮离场
17:28 他们会在这个高2或这个高三的上方离场
17:32 这是一个惊喜
17:33 大阴线至少会有小的第二段下跌
17:36 空头得到了第二段下跌
17:38 即使这里的高二买点被触发了一些
17:40 空头仍然会继续持有
17:42 因为这个阴线很大
17:44 大概率还会至少再下跌一些
17:47 然而现在有一个楔形牛
17:49 其三次向下推动123
17:52 空头会在这个高点上方离场
17:59 下降趋势第一 做空入场点
18:02 一些多头在这里买入想做剥头皮交易
18:06 因为左边的这个低点可能有支撑
18:11 他们想要在50%反弹的地方止盈
18:15 赚快钱离场
18:16 然而如果他们没有及时止盈
18:19 现在出现了第二做空点
18:22 第一在这根K线下方 第二在这根K线下方
18:26 并且信号K线是阴线
18:28 多头会离场 因为继续下跌的概率很高
18:35 两次向上推动阳线
18:37 阴线阳线 现在出现了空头的ii结构
18:40 连续两根阴线的运线
18:42 相当不错的阴线
18:44 交易者会在那根K线的低点下方嚯这根阴线的低点下方卖出
18:50 多头会离场
18:51 因为他们知道下跌的概率很高空
18:54 头会出于同样的原因卖出下降趋势中的
18:58 高点降低了第二
19:00 做空信号K线很好
19:02 非常好的做空机会楔形底强势
19:06 反转上涨三次向上推动一二三第二
19:10 做空也许会有第三次向上推动
19:13 反转上涨很强势第二段上涨也很强
19:17 一些多头愿意继续持有以备这个
19:20 楔形底反转会一直上涨测试前期
19:24 的高点然而高点还没有抬高就出现了
19:28 楔形顶三次向上推动123所以
19:31 这是三推楔形雄起而且有相当
19:35 不错的阴线在这里买入的多头如果
19:38 他们还持有多头仓位的话他们会
19:42 在楔形雄奇的下方离场没有入场
19:46 的空头也会在这里开仓做空压住
19:49 这是下降趋势中降低的高点压住
19:53 多头反转的尝试会失败三推
19:56 楔形雄起有漂亮的做空信号K线？`},{prompt:"有人想做一次向下反转，可以在顶部刚出现卖出信号时做空，也可以等价格已经明显向下突破再做空。按课程案例，等待突破主要换来了什么，又可能付出什么代价？",options:["增加了对下跌方向的证据，同时因为入场更低，到原顶部的止损距离必然缩短","增加了对下跌方向的证据，但入场更低，若仍用原顶部作止损，距离可能更远","等到向下突破后获得更大的下跌空间，主要代价是方向证据比早期信号更少"],answer:1,explanation:"若保护性止损仍放在原顶部，较低的做空入场价离它更远。课程把这种风险变化与增加的方向证据放在一起比较。",id:"21B-K08-1",knowledgeId:"K08",knowledgeTitle:"等待突破改变入场取舍",time:"20:02–24:03",pdfPages:[1838,1839],type:"理解判断",quote:`20:02 很多交易者喜欢回报远大于风险的交易
20:06 至少是风险的两倍大
20:12 每当一笔交易的盈亏
20:15 比非常好
20:16 比如两倍的盈亏比 那么胜率就会相对较低
20:22 因为必须要给做对收盘的机构
20:26 一个理由
20:27 如果你的盈亏比很好 胜率就会较低
20:32 不然就没有机构愿意做对手盘
20:35 既然对手的
20:36 盈亏比不好 那么他们的胜率就会相对高
20:41 反转通常是低胜率的交易
20:44 但止损比较小 所以风险小
20:47 你可能入场在趋势的起点 因此回报很大
20:52 当你看到
20:53 一个很好的反转机会时 有非常好的盈亏比
20:58 回报远大于风险 但是胜率只有大约40%
21:04 然而回报远大于风险弥补了概率方面的劣势
21:09 所以仍然是不错的交易机会
21:14 例如在这里做空的空头 风险小 回报大
21:19 但胜率并没有那么高更有可能会横盘
21:23 然而大幅下跌了 发展成了一笔非常好的交易
21:33 一些空头会在这里止盈楔形底
21:36 并且低点在起涨点上方
21:39 其他人会在这里止盈 因为这是一个巨大的抛售高潮
21:44 无论在哪里离场
21:46 空头在这里或这里的利润
21:48 远超他们初始风险的很多倍
21:58 一些交易者也想做反转
22:00 但他们想要更高的概率
22:03 所以他们等到强势突破出现后
22:06 再进入新的趋势
22:08 此时赚钱的概率来到了60%
22:11 一般情况下的概率有时甚至更高
22:14 如果突破足够强且背景良好
22:17 例如这是一笔低风险低概率的交易
22:22 止损放在做空信号K线的高点上方
22:26 然而如果你在看到两根
22:28 大阴线之后再入场做空
22:31 或者在六根K线的下降微通道
22:34 或者在这里开仓 你赚钱的胜率就更高
22:38 但你的止损仍然在这里 风险更大
22:42 而且剩余的利润空间变得更小
22:46 所以回报更小
22:48 风险更大
22:49 优点是胜率更高 不管你在什么时候入场
22:54 如果胜率更高了
22:56 那么代价就是盈亏比会变差
23:00 因为你占了概率的优势
23:03 做对收盘的机构就占了盈亏比的优势
23:07 换句话说你的止损会更远
23:10 如果你想拥有高胜率的入场
23:13 通常情况下你的止损也会更远
23:16 论你是选择低胜率早入场
23:20 还是高胜率晚入场都可以
23:23 两种做法的数学期望都是正的
23:27 所以都是好的交易
23:34 要记住 没有完美的交易
23:36 即使是最好的交易
23:38 也至少有一个不好的变量 风险回报概率
23:43 你不可能同时占到所有的便宜
23:46 不存在低风险、高回报、高胜率的完美交易
23:52 它不存在的原因是一旦出现完美的交易机会
23:57 那么每个人都会去做这笔交易
24:00 没有人愿意站在对面
24:02 那么交易就无法成交住`,referenceImage:{src:"/charts/21b-risk-solution.webp",page:1839,alt:"第1839页课件整页讲解",kind:"课件整页"}},{prompt:"看图下方的两段绿色弧线。左侧大弧线框住先跌后涨的走势，右侧小弧线框住上涨后短暂回落再转涨的走势。按本课，哪一段是底部杯柄形态的“柄”？",options:["右侧较小的弧线所示回调","两段弧线之间第一次上涨的整段走势","左侧较大的弧线所示整体反转"],answer:0,explanation:"较大的先跌后涨结构构成杯；反转形成后右侧较小的回调构成柄。",id:"21B-K09-1",knowledgeId:"K09",knowledgeTitle:"底部杯柄的两部分",time:"24:08–27:12",pdfPages:[1841,1842,1843],type:"图表应用",quote:`24:08 接下来我想稍微讲一下茶杯带柄反转
24:12 有时会被称为茶杯反转后的
24:16 回调有时会被称为baby
24:26 不管反转如何强势 最终都会回调
24:30 这就制造了一个茶杯带柄的结构
24:38 市场大幅抛售 然后强势反转上涨
24:42 然后回调 回撤了震荡区间的上沿
24:48 这就是交易者有时会提到的茶杯
24:51 带柄大的是茶杯
24:53 回调是杯柄反转是杯 反转后的
24:58 回调是饼
25:00 它看起来像一个茶杯 大的茶杯和小的饼
25:10 交易者要么寻找最初反转上涨的机会
25:14 或者在突破后的回调杯柄买入
25:17 他们会在阳线上方买入
25:19 期待着是上涨的趋势的开始
25:22 它通常也是低点抬高的大反转下降趋势
25:26 多头突破更高的低点
25:41 从高点反转下跌时
25:43 也有反过来的做空版本的茶杯带饼
25:48 上涨 然后强势的反转下跌
25:51 然后有一些反弹
25:53 因此这是一个茶杯带柄的结构
25:56 你可以直接说它是反转
25:59 或者高点降低的大反转
26:01 尖顶左肩头右肩怎么叫都没关系
26:05 市场正在强势反转下跌 然后有一些反弹
26:13 交易者会在反弹的下方用
26:16 突破卖单开仓做空空投
26:18 把这看作是下降趋势 而这个反弹是雄奇
26:27 所有结构都是分型的柱分型数学概念
26:31 也就是说这些结构存在于更
26:34 大和更小的时间周期之中
26:37 虽然我通常不会用茶杯带饼这个词
26:40 但这里有一个我要讲的点
26:43 我在左边放了一个上涨趋势
26:45 右边放了一个下降趋势 左边是上涨趋势
26:49 这里有一些回调 这是一个小的下降趋势
26:53 回调意味着市场更有可能恢复上涨
26:57 而不是反转下跌 在这一时刻
27:00 下降趋势开始反转
27:02 上涨实际上发生的是大上涨趋势正在恢复
27:07 牛骑就是指小的下降趋势
27:10 而这里的牛骑正在向上突破`,image:{src:"/charts/21b-cup.webp",solutionSrc:"/charts/21b-cup-solution.webp",page:1841,alt:"第1841页底部杯柄的两段绿色弧线"}},{prompt:"价格先上涨再掉头下跌，随后出现一次较小的向上反弹，形成倒杯右侧的“柄”。按本课，看空这个顶部形态的人会关注哪一种触发？",options:["价格从右侧反弹转跌，并向下突破柄的低点","价格再次上涨到原顶部，单凭触及原高点就确认向下突破","价格从右侧反弹继续上涨，并向上突破柄的高点"],answer:0,explanation:"顶部的柄是下跌反转后较小的向上回调。向下跌破该回调结构才符合案例中的触发方向。",id:"21B-K10-1",knowledgeId:"K10",knowledgeTitle:"顶部杯柄与不同观察尺度",time:"27:13–31:46",pdfPages:[1843,1844],type:"理解判断",quote:`27:10 而这里的牛骑正在向上突破
27:13 空头希望牛骑被跌破
27:16 他们希望这个回调会发展成下降趋势
27:20 但更有可能的是这只是一次回调
27:23 也就是说上涨趋势会恢复下降通道
27:27 牛其多头突破 这是多头突破之后的回调
27:31 它更有可能是一个回调
27:34 而不是反转 呈下降趋势
27:36 这意味着回调之后大概率会继续向上突破
27:43 尤其小下降趋势多头突破牛祺
27:50 也就是说小下降趋势被反转
27:54 下降趋势现在反转上涨
28:00 这是多头突破后的回调 是一个更小的牛旗
28:06 把它看作一个小的上涨趋势
28:09 它就是小的回调
28:10 一个小牛市大概率会继续上涨
28:13 外面是一个大的上涨趋势
28:16 一个大的牛企大概率会上涨
28:21 每当你看到反转和回调
28:23 那其实就是一个小的茶杯代表
28:26 如果我去更小时间周期看
28:29 这将是一个完美的茶杯
28:31 带柄结构会有一个下降趋势
28:34 然后强势反转上涨
28:36 然后回调 最后上涨趋势恢复
28:41 相反的情况在这里也是如此
28:45 下降趋势现在有一些反弹
28:47 然而它大概率不足以导致反转呈上涨趋势
28:54 因此更有可能的是会出现空头突破
28:59 然后下降趋势恢复
29:01 下降趋势雄奇大概率空头突破
29:05 然后下降趋势恢复
29:09 大阴线是强势的
29:11 空头突破强势恢复下降趋势
29:19 这是空头突破之后的小反弹
29:22 此时更有可能发生什么事？
29:25 会反转成为上涨趋势吗？
29:28 还是说它只是空头突破之后的小反弹
29:33 更有可能只是突破之后的反弹
29:36 这是一个小下降趋势
29:39 反弹下降趋势很可能会恢复
29:42 外面是更大的下降趋势
29:45 更大的反弹雄起下降趋势很可能会恢复
29:51 上涨趋势空头反转
29:54 空头反转之后有一些反弹
29:58 每当你看到反转
30:00 那就是一个茶杯 如果有回调反弹 那就是杯柄
30:04 因此这是一个小的茶杯带柄结构
30:07 在下降趋势中 这样的结构随处可见
30:12 同样 这个上涨趋势中的茶杯带饼也
30:16 到处都是你也许没有意识到它是茶杯带丙
30:20 但它确实是反转上涨然后回调
30:24 反转下跌然后反弹
30:26 一个小的茶杯带丙
30:32 在一个较小时间周期的K线图上
30:35 这个茶杯带柄的结构会更加清晰
30:38 例如如果这是1个小时图
30:41 即60分钟图 你去看它的五分钟图
30:44 这个上涨会持续2小时 然后下跌1小时
30:48 所以会有很多K线上涨
30:51 很多K线下跌
30:52 就可以看到一个典型的茶杯带柄的结构
30:56 如果这是日K线
30:57 那么如果你去看它的60分钟图
31:01 就可以看到一个典型的茶杯带柄结构
31:07 反转是进入一个趋势的最早时机
31:11 如果你在反转时入场
31:14 你的胜率较低 但好处是风险也比较小
31:18 因此好的盈亏比弥补了概率方面的劣势
31:25 我的80%法则
31:27 趋势中80%反转的尝试都会失败
31:31 同样震荡区间中80%突破的尝试都会失败
31:37 这节课的最后我讲到了茶杯带饼
31:40 你有时候会听到别人说这个词
31:44 它指的就是有一个反转
31:46 茶杯反转之后 有一些回调 卑鄙`}],sourceFile:"BTC PAF 21B Reversals v4_中文 (源语言).srt"},{id:"21C",group:"反转",title:"反转交易的误区、买卖压力与嵌套",range:"00:00–29:54",revision:"reversal-21c-v1",notes:["把单次止损距离与背景、概率和实际盈亏分别看。","买卖压力可由少数强K线迅速形成，也可逐步累积。","小形态可出现在大形态末段，区间内的波段也可很强。"],knowledgePoints:[{id:"K01",title:"止损近与反转证据",summary:"新手容易因止损近而在强突破后逆势入场，忽略当前背景和成功概率。",time:"00:11–14:05",pdfPages:[1849,1850,1851,1852,1853,1854,1855],questionIds:["21C-K01-1","21C-K01-2","21C-K01-3"]},{id:"K02",title:"底部买压的两种表现",summary:"少数大阳线收在高位，或许多较小阳线累积，都可能形成显著买压；弱反弹更可能先横盘。",time:"14:10–21:23",pdfPages:[1857,1858,1859],questionIds:["21C-K02-1","21C-K02-2"]},{id:"K03",title:"顶部卖压与区间过渡",summary:"上升中的少数普通阴线不必构成大反转，明显卖压也可在市场转入区间后逐步出现。",time:"14:10–21:23",pdfPages:[1860,1861],questionIds:["21C-K03-1"]},{id:"K04",title:"嵌套形态与共同价位",summary:"较小形态可出现在较大同类形态的末段，不同画法集中在同一价位时可共同支持观察。",time:"21:30–25:00",pdfPages:[1863,1864],questionIds:["21C-K04-1"]},{id:"K05",title:"区间波段与反向趋势",summary:"许多反转只产生波段或区间内部走势，达到波段目标和发展为大趋势是不同结果。",time:"25:03–29:54",pdfPages:[1865,1866,1867],questionIds:["21C-K05-1"]}],questions:[{prompt:"刚出现强势向上突破，交易者看到一根小阴线就想做空，因为止损可以放得很近。课程认为他漏看了什么？",options:["应先等阴线实体再缩小，让止损更近后才判断反转","需要先判断原上涨是否真正转弱，以及这次下跌能否延续","应先把目标放到整段上涨的起点，因为止损很近就有足够空间"],answer:1,explanation:"止损近只影响单次可能损失。眼前背景仍是强势上涨，要另看卖压和突破证据。",id:"21C-K01-1",knowledgeId:"K01",knowledgeTitle:"止损近与反转证据",time:"00:11–14:05",pdfPages:[1849,1850,1851,1852,1853,1854,1855],type:"理解判断",quote:`00:11 要知道 新手往往特别喜欢反转
00:15 因为新手只考虑到了风险
00:19 他们的账户很小 而且他们极度害怕亏钱
00:24 因为失去这个账户就意味着他们
00:27 成为职业交易员的梦想破灭了
00:30 正因如此 他们总是寻找那些风险最小的交易
00:34 这往往意味着他们在寻找反转
00:37 然而他们却完全忽视了另外两个变量
00:41 胜率和回报
00:42 低风险的交易通常
00:45 胜率也低 换句话说
00:47 大多数时候都会亏损
00:50 我还会讲到买家和卖家
00:52 他们是某一方可能获胜的早期迹象
00:56 最后我会讲到嵌套式结构
00:59 即小结构嵌套在更大的同类型结构中
01:04 比如你可能会看到一个小的楔形
01:07 它正好是一个更大的楔形中的第三段
01:16 新手的账户很小
01:18 他非常努力的存钱才得到这个账户
01:23 所以非常害怕失去那笔钱
01:26 因此交易时他非常关注风险
01:30 后果就是他往往只看到反转而忽略了强趋势
01:35 这是一个非常强的多头突破
01:38 新手会想好的 这是第二
01:41 做空信号这是第一 做空信号这是第二
01:45 也许这只是震荡区间中的一部分
01:48 如果我在这根K线下方卖出
01:50 我的止损就在这里 我冒的风险不大
01:53 但如果一路下跌到这里
01:55 可以赚很多钱 回报远超风险
01:58 但他忽视了胜率 在强势的多头反转之后
02:02 再来一个这么强势的突破做空
02:06 赚钱的成功率很低
02:08 更有可能的是反转会失败
02:11 变成牛蹄 然后继续上涨
02:17 做空信号K线不是很大
02:19 如果交易员在它的低点下方卖出订单会在这里成交
02:24 他的止损在这里 所以风险很小
02:30 然而每当你冒的风险很小时
02:33 赚钱的概率通常也很小
02:36 也就意味着亏钱的概率很高新
02:39 手觉得到处都是反转的可能
02:42 他们总能在强势的上涨趋势中发现楔形点
02:46 却忽视了趋势的强度
02:48 以及发生反转的概率很低
02:50 新手特别急于做空
02:52 甚至都不等到趋势线被跌破
02:56 比方说这是一个上涨趋势
02:58 趋势线被跌破 新手总是想要做反转
03:02 他不断的在强上涨趋势中做空
03:05 然后不断的在强下降趋势中做多
03:08 他在看到明显的脉压之前
03:11 就做空三根阴线 但很小
03:14 而且下影线很明显
03:16 并且阴线的体积比阳线小像这里还有这里脉压非常小
03:22 所以空头获胜的概率很低
03:25 尽管你可以说这是三推些行欹23
03:29 但这低胜率的交易 这也是低风险的代价
03:39 当突破如此强势时 三根连续的阳线收在最高
03:44 会有第二段上涨的概率非常大
03:47 可能这就是第二段上涨
03:50 但大概率还会涨更多
03:52 如果这些阴线收在最低
03:54 那么有可能上涨趋势即将结束
03:57 但是由于下影线很长 而且阴线体积很小
04:01 大概率任何反转尝试都会变成牛骑
04:05 然后至少再有一段上涨 现在做空还太早
04:14 新手总是在想 我怎么可能会亏钱
04:18 我都这么努力地降低风险了
04:22 亏钱
04:23 因为它在与趋势作对
04:26 而且交易的数学期望并不好
04:30 新手容易忽视概率的存在
04:33 他做这笔交易只是因为风险小
04:37 回报大 盈亏比非常好
04:39 如果他去看电视上的财经节目
04:43 他听到的全都是盈亏比
04:47 我的风险很小 但是回报很大
04:50 这么好的盈亏比一定是一笔非常好的交易
04:55 新手没有意识到的是
04:57 电视上总是谈论盈亏比 但很少讲过胜率
05:02 然而对于交易者方程记数学期望而言
05:06 胜率与风险和回报一样重要
05:17 新手还认为如果做一笔交易可以赚钱
05:21 那么做十笔交易就会更好
05:23 所以新手总是想做很多交易 导致过度交易
05:27 在上涨趋势中稍微有一点回调
05:29 新手就去做空
05:31 下降趋势中稍微有一点反弹 新手就去做多
05:37 失败的突破更低的高点
05:40 新手认为这是一个做空的机会
05:43 他开仓做空了 然后被止损了
05:47 反转的第二入场点 楔形顶123
05:52 期待突破震荡区间失败
05:55 这是一个做空的机会
05:58 然后又被止损了
06:01 这里有一个低点稍微降低的双底突破回撤
06:06 突破震荡区间上沿后的回撤
06:09 这是做多的机会
06:10 但是他忽略了这个通道有多么窄
06:14 然后被止损新手再次买入
06:19 因为好像是楔形牛骑123再次止损
06:24 他忽略了这个反转发生在
06:27 一个相当窄的下降通道中
06:29 还有一个更大的下降通道 同样也很窄
06:33 这是低胜率的做多机会
06:36 小反转多头能获得的最好
06:39 结果可能也就是震荡区间而已
06:43 再次尝试反转 又有一个楔形123
06:47 上一个楔形是123
06:50 现在新手看到一个新的些形123
06:54 但是他没考虑到这个做多信号K
06:58 线并武汉也忽略了这两个大阴线
07:02 和这里的大阴线
07:04 新手只能看到一个楔形和一个更高的低点
07:08 这肯定是一个楔形牛其于是他再次被止损
07:12 所有的这些亏损都不大
07:14 然而如果你累积了很多次小止损
07:17 他们加起来就是一个很大的亏损并
07:23 积少成多 水滴石穿
07:29 新手尝试避免风险 他尝试进行低风险交易
07:33 然而胜率也很低
07:35 如果你频繁的在低风险交易中亏损
07:39 这些低风险会在收盘时累积成很大的风险
07:43 最终新手在低风险交易里面亏了很多钱
07:52 新手知道这是一个糟糕的做空机会
07:55 他知道这是一个糟糕的做多机会
07:59 他管不了那么多 他知道整体背景不好
08:02 但他只关注一件事 风险
08:04 他不想在每笔交易上冒太大的风险
08:08 甚至在某个时候
08:09 由于亏损过于频繁
08:11 以至于他感觉每笔交易都会亏
08:14 但他觉得自己必须继续交易
08:16 因为交易员的工作就是交易
08:19 于是他们不断交易
08:21 然而 如果职业交易员
08:23 发现某个策略连续亏损
08:25 他们就会停手 但新手
08:27 不会停手 新手认为他们只需要稍微再进步一点
08:32 他们就能扭亏为盈
08:34 可惜这并非现实
08:36 在强上涨趋势中做空
08:38 或者在强下降趋势中做多 你会亏钱
08:42 即使每次亏损很少 但你会经常亏损
08:45 最终会亏掉账户里的所有钱
08:51 每当你进行一笔交易并感到充满希望时
08:56 老天保佑 真希望这次能成功
08:59 就让我赚一次
09:01 我亏了一整天了 就让我成功一次
09:04 这已经表明了一件事 胜率很低
09:06 每当你需要用到希望甚至祈祷的时候
09:10 你这笔交易基本都会亏钱
09:19 新手亏损过于频繁
09:21 因为他们在做低胜率的交易
09:24 也就是说他们大概率会亏损
09:28 而且不断的亏损
09:29 当他们终于有盈利的交易时
09:31 他们会立即平仓止盈 变成了剥头皮交易
09:35 但忘记了他们需要一个很大
09:37 的利润来弥补所有小的亏损
09:39 所以他们不仅在做低胜率交易经常亏损
09:43 而且当他们最终盈利时 他们却只赚一点点
09:47 当你进行低胜率交易时
09:49 你需要一个非常大的回报来弥补概率的劣势
09:53 这意味着你需要做波段交易
09:56 然而新手如此渴望胜利 害怕再次亏损
09:59 以至于他赚了一点点就离场了
10:02 变成了做剥头皮交易 这是一个失败的策略
10:06 注 不但胜率低
10:07 而且盈亏比差 不可能赚钱
10:10 对于低胜率低风险的交易而言
10:14 你需要偶尔大赚才能抵消所有的这些小亏损
10:18 新手就是做不到这一点
10:20 这次总算不亏钱了 他们感到高兴
10:23 祝同时害怕盈利变成亏损
10:26 所以他们迅速止盈 而这是一个失败的策略
10:30 如果你做低胜率的交易 你不能只赚小钱
10:37 在这里做空的新手亏损了
10:40 他在这里再次做空并获得盈利
10:44 他非常兴奋 楔形顶做空终于盈利了
10:48 但他看到前两笔交易都是有一些小盈利
10:52 然后很快变成亏损
10:54 他之前在这里做空盈利很快变成了亏损
10:58 他害怕同样的事情再次发生
11:00 于是在这里就止盈离场 剥头皮赚快钱
11:04 因为他太害怕亏损了
11:08 低胜率加低回报显然是一种失败的策略
11:13 数学期望是负的
11:15 如果你要做那种低胜率的交易
11:18 你就必须坚定持有
11:20 做波段交易你需要偶尔
11:23 大赚来弥补平凡的小亏
11:27 所以当你做低胜率交易时要想数学期望为证
11:32 你需要一个非常大的回报 你必须做波段
11:38 交易
11:42 这里是另一个例子 上涨趋势很多
11:46 三推楔形顶123
11:48 你可以画出很多很多楔形顶123
11:55 一二三突破前期高点失败
11:59 第二做空信号可能是楔形顶123
12:03 这是第二做空信号
12:06 但这些交易最终都是亏钱的
12:09 然而新手却想 风险不大
12:12 如果我在这里做空
12:13 我的止损在这里不会亏很多钱
12:16 如果我在这里做空
12:18 我的止损在这里不会亏很多钱
12:20 在这里做空不会亏很多
12:22 但如果你一整天都在亏损
12:25 这些小亏损就会积少成多
12:28 低胜率意味着大多数时间会亏损
12:31 即使每次亏损很少 他们也会累积成大亏损
12:39 一整天都在小止损
12:41 导致收盘时变成很大的亏损
12:49 正如刚才所说
12:50 当你最终好不容易有一笔盈利时
12:53 你赚的钱不足以抵消所有的亏损
12:56 因为你赚了一点点就跑
12:58 如果你做低胜率交易 你就需要大的回报
13:02 低胜率交易与波段交易密切相关
13:06 如果你想要做剥头皮交易
13:08 你就必须做高胜率的交易
13:10 在窄上涨通道中做空
13:12 显然不是高胜率的做法
13:17 有经验的交易员也看到了这些反转
13:20 但他们没有做空
13:22 他们在等待这些反转失败变成牛骑
13:26 然后他们买入做多
13:28 他们看到了向下的反转
13:31 他们知道大概率不会反转
13:34 下跌更可能会变成牛
13:37 其反转他们会买入做多
13:39 反转他们会买入并且把止损放在这里
13:43 反转下跌他们会在重新上涨时买入
13:46 反转下跌他们会在重新上涨时买入
13:50 并且把止损放在这里
13:52 高胜率风险更大
13:53 如果他们在这里买入 他们的止损在这里
13:58 但胜率非常高风险更高的交易赚钱也更容易
14:05 因为概率的优势非常大`,referenceImage:{src:"/charts/21c-risk-solution.webp",page:1849,alt:"第1849页课件整页讲解",kind:"课件整页"}},{prompt:"一个人多次逆势入场，每次失败只亏一点。少数做对的交易一有小利润就离场。为什么“每次亏得少”仍不足以解释这套做法的整体结果？",options:["多次小亏会累积，少数小盈利可能补不回来","盈利很快落袋，因此只要单笔盈利就能弥补之前的多次亏损","每笔止损都近，所以亏损次数对整体结果影响很小"],answer:0,explanation:"整体结果同时受交易次数、赢亏频率和每次实际盈亏影响。课中例子的问题正是小亏太多，获利又太早退出。",id:"21C-K01-2",knowledgeId:"K01",knowledgeTitle:"止损近与反转证据",time:"00:11–14:05",pdfPages:[1849,1850,1851,1852,1853,1854,1855],type:"变式辨析",quote:`00:11 要知道 新手往往特别喜欢反转
00:15 因为新手只考虑到了风险
00:19 他们的账户很小 而且他们极度害怕亏钱
00:24 因为失去这个账户就意味着他们
00:27 成为职业交易员的梦想破灭了
00:30 正因如此 他们总是寻找那些风险最小的交易
00:34 这往往意味着他们在寻找反转
00:37 然而他们却完全忽视了另外两个变量
00:41 胜率和回报
00:42 低风险的交易通常
00:45 胜率也低 换句话说
00:47 大多数时候都会亏损
00:50 我还会讲到买家和卖家
00:52 他们是某一方可能获胜的早期迹象
00:56 最后我会讲到嵌套式结构
00:59 即小结构嵌套在更大的同类型结构中
01:04 比如你可能会看到一个小的楔形
01:07 它正好是一个更大的楔形中的第三段
01:16 新手的账户很小
01:18 他非常努力的存钱才得到这个账户
01:23 所以非常害怕失去那笔钱
01:26 因此交易时他非常关注风险
01:30 后果就是他往往只看到反转而忽略了强趋势
01:35 这是一个非常强的多头突破
01:38 新手会想好的 这是第二
01:41 做空信号这是第一 做空信号这是第二
01:45 也许这只是震荡区间中的一部分
01:48 如果我在这根K线下方卖出
01:50 我的止损就在这里 我冒的风险不大
01:53 但如果一路下跌到这里
01:55 可以赚很多钱 回报远超风险
01:58 但他忽视了胜率 在强势的多头反转之后
02:02 再来一个这么强势的突破做空
02:06 赚钱的成功率很低
02:08 更有可能的是反转会失败
02:11 变成牛蹄 然后继续上涨
02:17 做空信号K线不是很大
02:19 如果交易员在它的低点下方卖出订单会在这里成交
02:24 他的止损在这里 所以风险很小
02:30 然而每当你冒的风险很小时
02:33 赚钱的概率通常也很小
02:36 也就意味着亏钱的概率很高新
02:39 手觉得到处都是反转的可能
02:42 他们总能在强势的上涨趋势中发现楔形点
02:46 却忽视了趋势的强度
02:48 以及发生反转的概率很低
02:50 新手特别急于做空
02:52 甚至都不等到趋势线被跌破
02:56 比方说这是一个上涨趋势
02:58 趋势线被跌破 新手总是想要做反转
03:02 他不断的在强上涨趋势中做空
03:05 然后不断的在强下降趋势中做多
03:08 他在看到明显的脉压之前
03:11 就做空三根阴线 但很小
03:14 而且下影线很明显
03:16 并且阴线的体积比阳线小像这里还有这里脉压非常小
03:22 所以空头获胜的概率很低
03:25 尽管你可以说这是三推些行欹23
03:29 但这低胜率的交易 这也是低风险的代价
03:39 当突破如此强势时 三根连续的阳线收在最高
03:44 会有第二段上涨的概率非常大
03:47 可能这就是第二段上涨
03:50 但大概率还会涨更多
03:52 如果这些阴线收在最低
03:54 那么有可能上涨趋势即将结束
03:57 但是由于下影线很长 而且阴线体积很小
04:01 大概率任何反转尝试都会变成牛骑
04:05 然后至少再有一段上涨 现在做空还太早
04:14 新手总是在想 我怎么可能会亏钱
04:18 我都这么努力地降低风险了
04:22 亏钱
04:23 因为它在与趋势作对
04:26 而且交易的数学期望并不好
04:30 新手容易忽视概率的存在
04:33 他做这笔交易只是因为风险小
04:37 回报大 盈亏比非常好
04:39 如果他去看电视上的财经节目
04:43 他听到的全都是盈亏比
04:47 我的风险很小 但是回报很大
04:50 这么好的盈亏比一定是一笔非常好的交易
04:55 新手没有意识到的是
04:57 电视上总是谈论盈亏比 但很少讲过胜率
05:02 然而对于交易者方程记数学期望而言
05:06 胜率与风险和回报一样重要
05:17 新手还认为如果做一笔交易可以赚钱
05:21 那么做十笔交易就会更好
05:23 所以新手总是想做很多交易 导致过度交易
05:27 在上涨趋势中稍微有一点回调
05:29 新手就去做空
05:31 下降趋势中稍微有一点反弹 新手就去做多
05:37 失败的突破更低的高点
05:40 新手认为这是一个做空的机会
05:43 他开仓做空了 然后被止损了
05:47 反转的第二入场点 楔形顶123
05:52 期待突破震荡区间失败
05:55 这是一个做空的机会
05:58 然后又被止损了
06:01 这里有一个低点稍微降低的双底突破回撤
06:06 突破震荡区间上沿后的回撤
06:09 这是做多的机会
06:10 但是他忽略了这个通道有多么窄
06:14 然后被止损新手再次买入
06:19 因为好像是楔形牛骑123再次止损
06:24 他忽略了这个反转发生在
06:27 一个相当窄的下降通道中
06:29 还有一个更大的下降通道 同样也很窄
06:33 这是低胜率的做多机会
06:36 小反转多头能获得的最好
06:39 结果可能也就是震荡区间而已
06:43 再次尝试反转 又有一个楔形123
06:47 上一个楔形是123
06:50 现在新手看到一个新的些形123
06:54 但是他没考虑到这个做多信号K
06:58 线并武汉也忽略了这两个大阴线
07:02 和这里的大阴线
07:04 新手只能看到一个楔形和一个更高的低点
07:08 这肯定是一个楔形牛其于是他再次被止损
07:12 所有的这些亏损都不大
07:14 然而如果你累积了很多次小止损
07:17 他们加起来就是一个很大的亏损并
07:23 积少成多 水滴石穿
07:29 新手尝试避免风险 他尝试进行低风险交易
07:33 然而胜率也很低
07:35 如果你频繁的在低风险交易中亏损
07:39 这些低风险会在收盘时累积成很大的风险
07:43 最终新手在低风险交易里面亏了很多钱
07:52 新手知道这是一个糟糕的做空机会
07:55 他知道这是一个糟糕的做多机会
07:59 他管不了那么多 他知道整体背景不好
08:02 但他只关注一件事 风险
08:04 他不想在每笔交易上冒太大的风险
08:08 甚至在某个时候
08:09 由于亏损过于频繁
08:11 以至于他感觉每笔交易都会亏
08:14 但他觉得自己必须继续交易
08:16 因为交易员的工作就是交易
08:19 于是他们不断交易
08:21 然而 如果职业交易员
08:23 发现某个策略连续亏损
08:25 他们就会停手 但新手
08:27 不会停手 新手认为他们只需要稍微再进步一点
08:32 他们就能扭亏为盈
08:34 可惜这并非现实
08:36 在强上涨趋势中做空
08:38 或者在强下降趋势中做多 你会亏钱
08:42 即使每次亏损很少 但你会经常亏损
08:45 最终会亏掉账户里的所有钱
08:51 每当你进行一笔交易并感到充满希望时
08:56 老天保佑 真希望这次能成功
08:59 就让我赚一次
09:01 我亏了一整天了 就让我成功一次
09:04 这已经表明了一件事 胜率很低
09:06 每当你需要用到希望甚至祈祷的时候
09:10 你这笔交易基本都会亏钱
09:19 新手亏损过于频繁
09:21 因为他们在做低胜率的交易
09:24 也就是说他们大概率会亏损
09:28 而且不断的亏损
09:29 当他们终于有盈利的交易时
09:31 他们会立即平仓止盈 变成了剥头皮交易
09:35 但忘记了他们需要一个很大
09:37 的利润来弥补所有小的亏损
09:39 所以他们不仅在做低胜率交易经常亏损
09:43 而且当他们最终盈利时 他们却只赚一点点
09:47 当你进行低胜率交易时
09:49 你需要一个非常大的回报来弥补概率的劣势
09:53 这意味着你需要做波段交易
09:56 然而新手如此渴望胜利 害怕再次亏损
09:59 以至于他赚了一点点就离场了
10:02 变成了做剥头皮交易 这是一个失败的策略
10:06 注 不但胜率低
10:07 而且盈亏比差 不可能赚钱
10:10 对于低胜率低风险的交易而言
10:14 你需要偶尔大赚才能抵消所有的这些小亏损
10:18 新手就是做不到这一点
10:20 这次总算不亏钱了 他们感到高兴
10:23 祝同时害怕盈利变成亏损
10:26 所以他们迅速止盈 而这是一个失败的策略
10:30 如果你做低胜率的交易 你不能只赚小钱
10:37 在这里做空的新手亏损了
10:40 他在这里再次做空并获得盈利
10:44 他非常兴奋 楔形顶做空终于盈利了
10:48 但他看到前两笔交易都是有一些小盈利
10:52 然后很快变成亏损
10:54 他之前在这里做空盈利很快变成了亏损
10:58 他害怕同样的事情再次发生
11:00 于是在这里就止盈离场 剥头皮赚快钱
11:04 因为他太害怕亏损了
11:08 低胜率加低回报显然是一种失败的策略
11:13 数学期望是负的
11:15 如果你要做那种低胜率的交易
11:18 你就必须坚定持有
11:20 做波段交易你需要偶尔
11:23 大赚来弥补平凡的小亏
11:27 所以当你做低胜率交易时要想数学期望为证
11:32 你需要一个非常大的回报 你必须做波段
11:38 交易
11:42 这里是另一个例子 上涨趋势很多
11:46 三推楔形顶123
11:48 你可以画出很多很多楔形顶123
11:55 一二三突破前期高点失败
11:59 第二做空信号可能是楔形顶123
12:03 这是第二做空信号
12:06 但这些交易最终都是亏钱的
12:09 然而新手却想 风险不大
12:12 如果我在这里做空
12:13 我的止损在这里不会亏很多钱
12:16 如果我在这里做空
12:18 我的止损在这里不会亏很多钱
12:20 在这里做空不会亏很多
12:22 但如果你一整天都在亏损
12:25 这些小亏损就会积少成多
12:28 低胜率意味着大多数时间会亏损
12:31 即使每次亏损很少 他们也会累积成大亏损
12:39 一整天都在小止损
12:41 导致收盘时变成很大的亏损
12:49 正如刚才所说
12:50 当你最终好不容易有一笔盈利时
12:53 你赚的钱不足以抵消所有的亏损
12:56 因为你赚了一点点就跑
12:58 如果你做低胜率交易 你就需要大的回报
13:02 低胜率交易与波段交易密切相关
13:06 如果你想要做剥头皮交易
13:08 你就必须做高胜率的交易
13:10 在窄上涨通道中做空
13:12 显然不是高胜率的做法
13:17 有经验的交易员也看到了这些反转
13:20 但他们没有做空
13:22 他们在等待这些反转失败变成牛骑
13:26 然后他们买入做多
13:28 他们看到了向下的反转
13:31 他们知道大概率不会反转
13:34 下跌更可能会变成牛
13:37 其反转他们会买入做多
13:39 反转他们会买入并且把止损放在这里
13:43 反转下跌他们会在重新上涨时买入
13:46 反转下跌他们会在重新上涨时买入
13:50 并且把止损放在这里
13:52 高胜率风险更大
13:53 如果他们在这里买入 他们的止损在这里
13:58 但胜率非常高风险更高的交易赚钱也更容易
14:05 因为概率的优势非常大`},{prompt:"看图中阶梯式上涨。红色高亮附近出现短暂下跌，价格随后在绿色高亮附近重新上推。遇到类似的短暂下跌，为什么课程里的交易者仍会观察后续向上突破？",options:["只要原上涨够强，每一次下跌都能立即确认原趋势恢复","这次下跌可能只是原上涨的回调，之后仍可能延续","短暂下跌已表明新下降趋势，向上突破只是给空头更好的入场价"],answer:1,explanation:"先观察回调能否向上结束。课程对比的是期待趋势恢复与一看到反向K线就猜大反转。",id:"21C-K01-3",knowledgeId:"K01",knowledgeTitle:"止损近与反转证据",time:"00:11–14:05",pdfPages:[1849,1850,1851,1852,1853,1854,1855],type:"图表应用",quote:`00:11 要知道 新手往往特别喜欢反转
00:15 因为新手只考虑到了风险
00:19 他们的账户很小 而且他们极度害怕亏钱
00:24 因为失去这个账户就意味着他们
00:27 成为职业交易员的梦想破灭了
00:30 正因如此 他们总是寻找那些风险最小的交易
00:34 这往往意味着他们在寻找反转
00:37 然而他们却完全忽视了另外两个变量
00:41 胜率和回报
00:42 低风险的交易通常
00:45 胜率也低 换句话说
00:47 大多数时候都会亏损
00:50 我还会讲到买家和卖家
00:52 他们是某一方可能获胜的早期迹象
00:56 最后我会讲到嵌套式结构
00:59 即小结构嵌套在更大的同类型结构中
01:04 比如你可能会看到一个小的楔形
01:07 它正好是一个更大的楔形中的第三段
01:16 新手的账户很小
01:18 他非常努力的存钱才得到这个账户
01:23 所以非常害怕失去那笔钱
01:26 因此交易时他非常关注风险
01:30 后果就是他往往只看到反转而忽略了强趋势
01:35 这是一个非常强的多头突破
01:38 新手会想好的 这是第二
01:41 做空信号这是第一 做空信号这是第二
01:45 也许这只是震荡区间中的一部分
01:48 如果我在这根K线下方卖出
01:50 我的止损就在这里 我冒的风险不大
01:53 但如果一路下跌到这里
01:55 可以赚很多钱 回报远超风险
01:58 但他忽视了胜率 在强势的多头反转之后
02:02 再来一个这么强势的突破做空
02:06 赚钱的成功率很低
02:08 更有可能的是反转会失败
02:11 变成牛蹄 然后继续上涨
02:17 做空信号K线不是很大
02:19 如果交易员在它的低点下方卖出订单会在这里成交
02:24 他的止损在这里 所以风险很小
02:30 然而每当你冒的风险很小时
02:33 赚钱的概率通常也很小
02:36 也就意味着亏钱的概率很高新
02:39 手觉得到处都是反转的可能
02:42 他们总能在强势的上涨趋势中发现楔形点
02:46 却忽视了趋势的强度
02:48 以及发生反转的概率很低
02:50 新手特别急于做空
02:52 甚至都不等到趋势线被跌破
02:56 比方说这是一个上涨趋势
02:58 趋势线被跌破 新手总是想要做反转
03:02 他不断的在强上涨趋势中做空
03:05 然后不断的在强下降趋势中做多
03:08 他在看到明显的脉压之前
03:11 就做空三根阴线 但很小
03:14 而且下影线很明显
03:16 并且阴线的体积比阳线小像这里还有这里脉压非常小
03:22 所以空头获胜的概率很低
03:25 尽管你可以说这是三推些行欹23
03:29 但这低胜率的交易 这也是低风险的代价
03:39 当突破如此强势时 三根连续的阳线收在最高
03:44 会有第二段上涨的概率非常大
03:47 可能这就是第二段上涨
03:50 但大概率还会涨更多
03:52 如果这些阴线收在最低
03:54 那么有可能上涨趋势即将结束
03:57 但是由于下影线很长 而且阴线体积很小
04:01 大概率任何反转尝试都会变成牛骑
04:05 然后至少再有一段上涨 现在做空还太早
04:14 新手总是在想 我怎么可能会亏钱
04:18 我都这么努力地降低风险了
04:22 亏钱
04:23 因为它在与趋势作对
04:26 而且交易的数学期望并不好
04:30 新手容易忽视概率的存在
04:33 他做这笔交易只是因为风险小
04:37 回报大 盈亏比非常好
04:39 如果他去看电视上的财经节目
04:43 他听到的全都是盈亏比
04:47 我的风险很小 但是回报很大
04:50 这么好的盈亏比一定是一笔非常好的交易
04:55 新手没有意识到的是
04:57 电视上总是谈论盈亏比 但很少讲过胜率
05:02 然而对于交易者方程记数学期望而言
05:06 胜率与风险和回报一样重要
05:17 新手还认为如果做一笔交易可以赚钱
05:21 那么做十笔交易就会更好
05:23 所以新手总是想做很多交易 导致过度交易
05:27 在上涨趋势中稍微有一点回调
05:29 新手就去做空
05:31 下降趋势中稍微有一点反弹 新手就去做多
05:37 失败的突破更低的高点
05:40 新手认为这是一个做空的机会
05:43 他开仓做空了 然后被止损了
05:47 反转的第二入场点 楔形顶123
05:52 期待突破震荡区间失败
05:55 这是一个做空的机会
05:58 然后又被止损了
06:01 这里有一个低点稍微降低的双底突破回撤
06:06 突破震荡区间上沿后的回撤
06:09 这是做多的机会
06:10 但是他忽略了这个通道有多么窄
06:14 然后被止损新手再次买入
06:19 因为好像是楔形牛骑123再次止损
06:24 他忽略了这个反转发生在
06:27 一个相当窄的下降通道中
06:29 还有一个更大的下降通道 同样也很窄
06:33 这是低胜率的做多机会
06:36 小反转多头能获得的最好
06:39 结果可能也就是震荡区间而已
06:43 再次尝试反转 又有一个楔形123
06:47 上一个楔形是123
06:50 现在新手看到一个新的些形123
06:54 但是他没考虑到这个做多信号K
06:58 线并武汉也忽略了这两个大阴线
07:02 和这里的大阴线
07:04 新手只能看到一个楔形和一个更高的低点
07:08 这肯定是一个楔形牛其于是他再次被止损
07:12 所有的这些亏损都不大
07:14 然而如果你累积了很多次小止损
07:17 他们加起来就是一个很大的亏损并
07:23 积少成多 水滴石穿
07:29 新手尝试避免风险 他尝试进行低风险交易
07:33 然而胜率也很低
07:35 如果你频繁的在低风险交易中亏损
07:39 这些低风险会在收盘时累积成很大的风险
07:43 最终新手在低风险交易里面亏了很多钱
07:52 新手知道这是一个糟糕的做空机会
07:55 他知道这是一个糟糕的做多机会
07:59 他管不了那么多 他知道整体背景不好
08:02 但他只关注一件事 风险
08:04 他不想在每笔交易上冒太大的风险
08:08 甚至在某个时候
08:09 由于亏损过于频繁
08:11 以至于他感觉每笔交易都会亏
08:14 但他觉得自己必须继续交易
08:16 因为交易员的工作就是交易
08:19 于是他们不断交易
08:21 然而 如果职业交易员
08:23 发现某个策略连续亏损
08:25 他们就会停手 但新手
08:27 不会停手 新手认为他们只需要稍微再进步一点
08:32 他们就能扭亏为盈
08:34 可惜这并非现实
08:36 在强上涨趋势中做空
08:38 或者在强下降趋势中做多 你会亏钱
08:42 即使每次亏损很少 但你会经常亏损
08:45 最终会亏掉账户里的所有钱
08:51 每当你进行一笔交易并感到充满希望时
08:56 老天保佑 真希望这次能成功
08:59 就让我赚一次
09:01 我亏了一整天了 就让我成功一次
09:04 这已经表明了一件事 胜率很低
09:06 每当你需要用到希望甚至祈祷的时候
09:10 你这笔交易基本都会亏钱
09:19 新手亏损过于频繁
09:21 因为他们在做低胜率的交易
09:24 也就是说他们大概率会亏损
09:28 而且不断的亏损
09:29 当他们终于有盈利的交易时
09:31 他们会立即平仓止盈 变成了剥头皮交易
09:35 但忘记了他们需要一个很大
09:37 的利润来弥补所有小的亏损
09:39 所以他们不仅在做低胜率交易经常亏损
09:43 而且当他们最终盈利时 他们却只赚一点点
09:47 当你进行低胜率交易时
09:49 你需要一个非常大的回报来弥补概率的劣势
09:53 这意味着你需要做波段交易
09:56 然而新手如此渴望胜利 害怕再次亏损
09:59 以至于他赚了一点点就离场了
10:02 变成了做剥头皮交易 这是一个失败的策略
10:06 注 不但胜率低
10:07 而且盈亏比差 不可能赚钱
10:10 对于低胜率低风险的交易而言
10:14 你需要偶尔大赚才能抵消所有的这些小亏损
10:18 新手就是做不到这一点
10:20 这次总算不亏钱了 他们感到高兴
10:23 祝同时害怕盈利变成亏损
10:26 所以他们迅速止盈 而这是一个失败的策略
10:30 如果你做低胜率的交易 你不能只赚小钱
10:37 在这里做空的新手亏损了
10:40 他在这里再次做空并获得盈利
10:44 他非常兴奋 楔形顶做空终于盈利了
10:48 但他看到前两笔交易都是有一些小盈利
10:52 然后很快变成亏损
10:54 他之前在这里做空盈利很快变成了亏损
10:58 他害怕同样的事情再次发生
11:00 于是在这里就止盈离场 剥头皮赚快钱
11:04 因为他太害怕亏损了
11:08 低胜率加低回报显然是一种失败的策略
11:13 数学期望是负的
11:15 如果你要做那种低胜率的交易
11:18 你就必须坚定持有
11:20 做波段交易你需要偶尔
11:23 大赚来弥补平凡的小亏
11:27 所以当你做低胜率交易时要想数学期望为证
11:32 你需要一个非常大的回报 你必须做波段
11:38 交易
11:42 这里是另一个例子 上涨趋势很多
11:46 三推楔形顶123
11:48 你可以画出很多很多楔形顶123
11:55 一二三突破前期高点失败
11:59 第二做空信号可能是楔形顶123
12:03 这是第二做空信号
12:06 但这些交易最终都是亏钱的
12:09 然而新手却想 风险不大
12:12 如果我在这里做空
12:13 我的止损在这里不会亏很多钱
12:16 如果我在这里做空
12:18 我的止损在这里不会亏很多钱
12:20 在这里做空不会亏很多
12:22 但如果你一整天都在亏损
12:25 这些小亏损就会积少成多
12:28 低胜率意味着大多数时间会亏损
12:31 即使每次亏损很少 他们也会累积成大亏损
12:39 一整天都在小止损
12:41 导致收盘时变成很大的亏损
12:49 正如刚才所说
12:50 当你最终好不容易有一笔盈利时
12:53 你赚的钱不足以抵消所有的亏损
12:56 因为你赚了一点点就跑
12:58 如果你做低胜率交易 你就需要大的回报
13:02 低胜率交易与波段交易密切相关
13:06 如果你想要做剥头皮交易
13:08 你就必须做高胜率的交易
13:10 在窄上涨通道中做空
13:12 显然不是高胜率的做法
13:17 有经验的交易员也看到了这些反转
13:20 但他们没有做空
13:22 他们在等待这些反转失败变成牛骑
13:26 然后他们买入做多
13:28 他们看到了向下的反转
13:31 他们知道大概率不会反转
13:34 下跌更可能会变成牛
13:37 其反转他们会买入做多
13:39 反转他们会买入并且把止损放在这里
13:43 反转下跌他们会在重新上涨时买入
13:46 反转下跌他们会在重新上涨时买入
13:50 并且把止损放在这里
13:52 高胜率风险更大
13:53 如果他们在这里买入 他们的止损在这里
13:58 但胜率非常高风险更高的交易赚钱也更容易
14:05 因为概率的优势非常大`,image:{src:"/charts/21c-trend-resume.webp",solutionSrc:"/charts/21c-trend-resume-solution.webp",page:1855,alt:"原课件第1855页走势局部"}},{prompt:"看图：价格沿红色斜线下方下跌。三处绿色高亮中的前两次反弹只持续几根K线，很快又回落。只看到这些反弹时，哪项判断更符合课程？",options:["买盘已有尝试，但还不足以凭这些短反弹确认新上涨趋势","两次反弹幅度小，已经足以确认随后会重新加速下跌","两处都出现了阳线，可以把下降趋势结束视为已经确认"],answer:0,explanation:"两次短反弹只是局部买压。课程保留原下降或转入区间的可能，等待更明显的累积买压和突破。",id:"21C-K02-1",knowledgeId:"K02",knowledgeTitle:"底部买压的两种表现",time:"14:10–21:23",pdfPages:[1857,1858,1859],type:"图表应用",quote:`14:10 接下来我想讲一讲买鸭和卖家
14:14 他们是暗示某一方将
14:16 获胜并突破的最早的信号
14:21 如果你在寻找大反转
14:24 意味着你在寻找一个大幅的移动
14:28 至少两段20根K线
14:30 这通常不是由一个小的结构所能制造的
14:39 如果是下降趋势
14:41 想要反转需要足够大的买压
14:44 你可以从两个非常大的收在
14:47 最高的阳线中获得这种买压
14:49 你也可以从十个较小的阳线中获得这种买压
14:54 这里的买压是足够大的阳线
14:56 大阳线收在最高点
14:58 然后有更大的阳线收在高位
15:02 这样的买家是足够大的
15:04 交易者会在下一次下跌之后买入做反转
15:09 有可能是低点抬高的大反转
15:15 最初这可能只是小反转意义
15:18 这里的K线数量不够多
15:22 然而如果在这个小反转中获得足够的买家
15:26 这里这可能也是一个小反转
15:28 它可以导致在下一次下跌之后形成大反转
15:36 小反转后面大概率是震荡区间
15:39 然而他制造了足够大的买压
15:42 强势突破下降通道以及一次更强的突破
15:46 下一次向下的突破可能会失败
15:49 然后会有大的反转上涨
15:54 低点抬高的双底大反转
15:57 并带来了上涨的波段
16:05 这里有两根阳线 一根阳线 24根小阳线
16:10 这里有三根上涨的小阳线
16:13 这些买家都不足以反转下降趋势
16:17 任何上涨的尝试更有可能都只是小反转
16:21 多头需要更多的大阳线才能制造大反转
16:27 反转成为上涨趋势
16:29 而不是变成雄奇或震荡区间
16:41 回忆一下市场周期的内容
16:44 下降趋势通常要先过渡到震荡区间
16:48 然后才变成上涨趋势
16:51 然而在震荡区间内
16:53 多头可以制造足够大的买压
16:56 最终制造出成功的大反转和上涨趋势
17:01 最终会有足够大的买压
17:04 制造出成功的大反转和上涨趋势
17:11 下降趋势演变为震荡区间
17:15 也许是低点稍微抬高的双底大反转
17:21 多头开始制造出收在高位的大阳线
17:24 这是就买压增加了多头
17:27 最终制造出上涨趋势的概率
17:33 低点抬高的大反转
17:35 多头可以在阳线的高点上方用突破单买入
17:40 然后把保护性止损放在下面
17:45 再次强调 如果缺乏买鸭或卖鸭
17:49 反转可能只是小反转
17:53 三根阴线 四根阴线
17:55 这足以制造出大反转吗？
17:57 大概率不行
17:58 空头能得到到的最好
18:00 结果也就是一个震荡区间
18:03 更有可能的是回调变成牛蹄
18:06 然后上涨趋势恢复
18:07 这是一个高点抬高的大反转吗？
18:10 这里并没有足够的脉压
18:13 大概率会进入震荡区间
18:17 而在震荡区间内 空头可以积累大量的阴线
18:21 在那之后他们有机会制造大反转
18:29 卖压不足 更有可能横盘而不是下跌
18:34 小反转更可能变成牛蹄或震荡区间
18:46 上涨趋势这里有一个小反转
18:48 这里还有一个这个可能也是小反转
18:52 我不会把它看作一个重要的楔形顶
18:55 因为每段下跌都很小
18:57 卖压不足 更有可能会导致两段横盘
19:01 而不是一个大的下降趋势
19:10 脉压的一个标志是明显向下跌破上涨趋势线
19:15 就像这里它是由一系列小的K线构成的
19:20 K线虽然小但数量很多
19:22 并且它通过横盘远远跌破了上涨趋势线
19:27 对交易者而言这就足够了
19:29 在这个时候你回过头看
19:33 卖压不多 但他们在逐渐累积
19:36 现在上涨趋势线被远远的跌破了
19:39 再次上涨之后
19:41 交易者会在前期高点附近寻找多头失败的反转信号
19:46 然后做大反转
19:53 从上涨到下跌的反转 首先需要一些脉压
19:58 它通常出现在震荡区间里面
20:01 就像这里先是上涨趋势
20:04 然后震荡区间
20:06 在震荡区间里面空投可以积累足够的卖家
20:13 逐渐控制市场并形成下降趋势
20:20 上涨趋势在减弱
20:24 仍然是上涨趋势
20:25 从这次回调开始进入了震荡区间
20:29 市场从上涨趋势过渡到震荡区间
20:32 然后进入下降趋势
20:34 同时震荡区间通常在上涨趋势
20:37 形成最终的高点之前就开始上涨的
20:40 最后这部分也属于之后震荡区间中的一段
20:45 空头开始积累卖压
20:47 并且在某个时刻 他们变得足够强大
20:51 可以掌控市场
20:54 例如这里有一个高点降低的大反转
20:58 高点略低
21:00 三次向上推动一阴线 二阴线
21:03 然后三高点降低的楔形顶大反转
21:07 40%的概率会有下跌的波段合理的做空机会
21:12 回报远大于风险
21:14 胜率为40%
21:16 通常情况下 这就是大反转的概率
21:19 但回报至少是风险的两倍
21:23 因此数学期望是正的`,image:{src:"/charts/21c-weak-buy.webp",solutionSrc:"/charts/21c-weak-buy-solution.webp",page:1858,alt:"下降斜线与两次绿色高亮的短反弹"}},{prompt:"甲的反弹由几根很大的阳线组成，多次收在当根K线高位附近。乙没有同样大的单根阳线，但较多根较小阳线持续把价格推高。哪种反弹可能形成足以关注的买压？",options:["只有甲可能，因为没有大阳线就不能形成足够买压","两种都可能，需要看价格推进的强度和持续性","只有乙可能，因为买压必须等固定根数才能形成"],answer:1,explanation:"课程用少数大阳线和更多小阳线对比，说明买压可以迅速出现，也可以逐步积累。",id:"21C-K02-2",knowledgeId:"K02",knowledgeTitle:"底部买压的两种表现",time:"14:10–21:23",pdfPages:[1857,1858,1859],type:"变式辨析",quote:`14:10 接下来我想讲一讲买鸭和卖家
14:14 他们是暗示某一方将
14:16 获胜并突破的最早的信号
14:21 如果你在寻找大反转
14:24 意味着你在寻找一个大幅的移动
14:28 至少两段20根K线
14:30 这通常不是由一个小的结构所能制造的
14:39 如果是下降趋势
14:41 想要反转需要足够大的买压
14:44 你可以从两个非常大的收在
14:47 最高的阳线中获得这种买压
14:49 你也可以从十个较小的阳线中获得这种买压
14:54 这里的买压是足够大的阳线
14:56 大阳线收在最高点
14:58 然后有更大的阳线收在高位
15:02 这样的买家是足够大的
15:04 交易者会在下一次下跌之后买入做反转
15:09 有可能是低点抬高的大反转
15:15 最初这可能只是小反转意义
15:18 这里的K线数量不够多
15:22 然而如果在这个小反转中获得足够的买家
15:26 这里这可能也是一个小反转
15:28 它可以导致在下一次下跌之后形成大反转
15:36 小反转后面大概率是震荡区间
15:39 然而他制造了足够大的买压
15:42 强势突破下降通道以及一次更强的突破
15:46 下一次向下的突破可能会失败
15:49 然后会有大的反转上涨
15:54 低点抬高的双底大反转
15:57 并带来了上涨的波段
16:05 这里有两根阳线 一根阳线 24根小阳线
16:10 这里有三根上涨的小阳线
16:13 这些买家都不足以反转下降趋势
16:17 任何上涨的尝试更有可能都只是小反转
16:21 多头需要更多的大阳线才能制造大反转
16:27 反转成为上涨趋势
16:29 而不是变成雄奇或震荡区间
16:41 回忆一下市场周期的内容
16:44 下降趋势通常要先过渡到震荡区间
16:48 然后才变成上涨趋势
16:51 然而在震荡区间内
16:53 多头可以制造足够大的买压
16:56 最终制造出成功的大反转和上涨趋势
17:01 最终会有足够大的买压
17:04 制造出成功的大反转和上涨趋势
17:11 下降趋势演变为震荡区间
17:15 也许是低点稍微抬高的双底大反转
17:21 多头开始制造出收在高位的大阳线
17:24 这是就买压增加了多头
17:27 最终制造出上涨趋势的概率
17:33 低点抬高的大反转
17:35 多头可以在阳线的高点上方用突破单买入
17:40 然后把保护性止损放在下面
17:45 再次强调 如果缺乏买鸭或卖鸭
17:49 反转可能只是小反转
17:53 三根阴线 四根阴线
17:55 这足以制造出大反转吗？
17:57 大概率不行
17:58 空头能得到到的最好
18:00 结果也就是一个震荡区间
18:03 更有可能的是回调变成牛蹄
18:06 然后上涨趋势恢复
18:07 这是一个高点抬高的大反转吗？
18:10 这里并没有足够的脉压
18:13 大概率会进入震荡区间
18:17 而在震荡区间内 空头可以积累大量的阴线
18:21 在那之后他们有机会制造大反转
18:29 卖压不足 更有可能横盘而不是下跌
18:34 小反转更可能变成牛蹄或震荡区间
18:46 上涨趋势这里有一个小反转
18:48 这里还有一个这个可能也是小反转
18:52 我不会把它看作一个重要的楔形顶
18:55 因为每段下跌都很小
18:57 卖压不足 更有可能会导致两段横盘
19:01 而不是一个大的下降趋势
19:10 脉压的一个标志是明显向下跌破上涨趋势线
19:15 就像这里它是由一系列小的K线构成的
19:20 K线虽然小但数量很多
19:22 并且它通过横盘远远跌破了上涨趋势线
19:27 对交易者而言这就足够了
19:29 在这个时候你回过头看
19:33 卖压不多 但他们在逐渐累积
19:36 现在上涨趋势线被远远的跌破了
19:39 再次上涨之后
19:41 交易者会在前期高点附近寻找多头失败的反转信号
19:46 然后做大反转
19:53 从上涨到下跌的反转 首先需要一些脉压
19:58 它通常出现在震荡区间里面
20:01 就像这里先是上涨趋势
20:04 然后震荡区间
20:06 在震荡区间里面空投可以积累足够的卖家
20:13 逐渐控制市场并形成下降趋势
20:20 上涨趋势在减弱
20:24 仍然是上涨趋势
20:25 从这次回调开始进入了震荡区间
20:29 市场从上涨趋势过渡到震荡区间
20:32 然后进入下降趋势
20:34 同时震荡区间通常在上涨趋势
20:37 形成最终的高点之前就开始上涨的
20:40 最后这部分也属于之后震荡区间中的一段
20:45 空头开始积累卖压
20:47 并且在某个时刻 他们变得足够强大
20:51 可以掌控市场
20:54 例如这里有一个高点降低的大反转
20:58 高点略低
21:00 三次向上推动一阴线 二阴线
21:03 然后三高点降低的楔形顶大反转
21:07 40%的概率会有下跌的波段合理的做空机会
21:12 回报远大于风险
21:14 胜率为40%
21:16 通常情况下 这就是大反转的概率
21:19 但回报至少是风险的两倍
21:23 因此数学期望是正的`},{prompt:"强上涨后先出现几根普通阴线，价格随后仍能反弹。之后上涨不再顺畅，市场开始横盘，区间内出现多段明显下跌。哪个阶段对可能反转提供了更多证据？",options:["两阶段证据相同，只要有阴线便可用同样方式判断","后一个阶段，上涨减弱且已有多段下跌可以观察","前一个阶段，首次阴线本身已足以确认新下降趋势"],answer:1,explanation:"区间里多次下跌让卖压有时间累积。几根普通阴线也可能只是原上涨中的回调。",id:"21C-K03-1",knowledgeId:"K03",knowledgeTitle:"顶部卖压与区间过渡",time:"14:10–21:23",pdfPages:[1860,1861],type:"理解判断",quote:`14:10 接下来我想讲一讲买鸭和卖家
14:14 他们是暗示某一方将
14:16 获胜并突破的最早的信号
14:21 如果你在寻找大反转
14:24 意味着你在寻找一个大幅的移动
14:28 至少两段20根K线
14:30 这通常不是由一个小的结构所能制造的
14:39 如果是下降趋势
14:41 想要反转需要足够大的买压
14:44 你可以从两个非常大的收在
14:47 最高的阳线中获得这种买压
14:49 你也可以从十个较小的阳线中获得这种买压
14:54 这里的买压是足够大的阳线
14:56 大阳线收在最高点
14:58 然后有更大的阳线收在高位
15:02 这样的买家是足够大的
15:04 交易者会在下一次下跌之后买入做反转
15:09 有可能是低点抬高的大反转
15:15 最初这可能只是小反转意义
15:18 这里的K线数量不够多
15:22 然而如果在这个小反转中获得足够的买家
15:26 这里这可能也是一个小反转
15:28 它可以导致在下一次下跌之后形成大反转
15:36 小反转后面大概率是震荡区间
15:39 然而他制造了足够大的买压
15:42 强势突破下降通道以及一次更强的突破
15:46 下一次向下的突破可能会失败
15:49 然后会有大的反转上涨
15:54 低点抬高的双底大反转
15:57 并带来了上涨的波段
16:05 这里有两根阳线 一根阳线 24根小阳线
16:10 这里有三根上涨的小阳线
16:13 这些买家都不足以反转下降趋势
16:17 任何上涨的尝试更有可能都只是小反转
16:21 多头需要更多的大阳线才能制造大反转
16:27 反转成为上涨趋势
16:29 而不是变成雄奇或震荡区间
16:41 回忆一下市场周期的内容
16:44 下降趋势通常要先过渡到震荡区间
16:48 然后才变成上涨趋势
16:51 然而在震荡区间内
16:53 多头可以制造足够大的买压
16:56 最终制造出成功的大反转和上涨趋势
17:01 最终会有足够大的买压
17:04 制造出成功的大反转和上涨趋势
17:11 下降趋势演变为震荡区间
17:15 也许是低点稍微抬高的双底大反转
17:21 多头开始制造出收在高位的大阳线
17:24 这是就买压增加了多头
17:27 最终制造出上涨趋势的概率
17:33 低点抬高的大反转
17:35 多头可以在阳线的高点上方用突破单买入
17:40 然后把保护性止损放在下面
17:45 再次强调 如果缺乏买鸭或卖鸭
17:49 反转可能只是小反转
17:53 三根阴线 四根阴线
17:55 这足以制造出大反转吗？
17:57 大概率不行
17:58 空头能得到到的最好
18:00 结果也就是一个震荡区间
18:03 更有可能的是回调变成牛蹄
18:06 然后上涨趋势恢复
18:07 这是一个高点抬高的大反转吗？
18:10 这里并没有足够的脉压
18:13 大概率会进入震荡区间
18:17 而在震荡区间内 空头可以积累大量的阴线
18:21 在那之后他们有机会制造大反转
18:29 卖压不足 更有可能横盘而不是下跌
18:34 小反转更可能变成牛蹄或震荡区间
18:46 上涨趋势这里有一个小反转
18:48 这里还有一个这个可能也是小反转
18:52 我不会把它看作一个重要的楔形顶
18:55 因为每段下跌都很小
18:57 卖压不足 更有可能会导致两段横盘
19:01 而不是一个大的下降趋势
19:10 脉压的一个标志是明显向下跌破上涨趋势线
19:15 就像这里它是由一系列小的K线构成的
19:20 K线虽然小但数量很多
19:22 并且它通过横盘远远跌破了上涨趋势线
19:27 对交易者而言这就足够了
19:29 在这个时候你回过头看
19:33 卖压不多 但他们在逐渐累积
19:36 现在上涨趋势线被远远的跌破了
19:39 再次上涨之后
19:41 交易者会在前期高点附近寻找多头失败的反转信号
19:46 然后做大反转
19:53 从上涨到下跌的反转 首先需要一些脉压
19:58 它通常出现在震荡区间里面
20:01 就像这里先是上涨趋势
20:04 然后震荡区间
20:06 在震荡区间里面空投可以积累足够的卖家
20:13 逐渐控制市场并形成下降趋势
20:20 上涨趋势在减弱
20:24 仍然是上涨趋势
20:25 从这次回调开始进入了震荡区间
20:29 市场从上涨趋势过渡到震荡区间
20:32 然后进入下降趋势
20:34 同时震荡区间通常在上涨趋势
20:37 形成最终的高点之前就开始上涨的
20:40 最后这部分也属于之后震荡区间中的一段
20:45 空头开始积累卖压
20:47 并且在某个时刻 他们变得足够强大
20:51 可以掌控市场
20:54 例如这里有一个高点降低的大反转
20:58 高点略低
21:00 三次向上推动一阴线 二阴线
21:03 然后三高点降低的楔形顶大反转
21:07 40%的概率会有下跌的波段合理的做空机会
21:12 回报远大于风险
21:14 胜率为40%
21:16 通常情况下 这就是大反转的概率
21:19 但回报至少是风险的两倍
21:23 因此数学期望是正的`,referenceImage:{src:"/charts/21c-selling-solution.webp",page:1861,alt:"第1861页课件整页讲解",kind:"课件整页"}},{prompt:"看图上方较长的橙色斜线和右侧较短的粉色斜线。两条线分别连着较大和较小的三次向上推进，最后一次都在右侧接近同一区域。这怎样体现“嵌套形态”？",options:["较小的三推位于较大三推的末段，两套结构可能指向同一反转区域","较小结构出现后，较大结构的前两次推进就应改算为单独趋势","两条斜线长短不同，因此只能选较长的线，较小结构应忽略"],answer:0,explanation:"同一段价格可以按不同尺度分段。小结构出现在大结构末段，多个观察尺度可能把注意力集中到相近价位。",id:"21C-K04-1",knowledgeId:"K04",knowledgeTitle:"嵌套形态与共同价位",time:"21:30–25:00",pdfPages:[1863,1864],type:"图表应用",quote:`21:30 这节课的最后我想讲一下嵌套式结构
21:34 小结构嵌套在同类型的大结构中
21:44 被嵌套的小结构通常位于大结构的最后一段
21:49 有时可能更大
21:50 也许可以占据大结构的3分之2
21:56 三次向上推动123 所以这是楔形上涨
22:01 它在一个更大的楔形内
22:05 三次更大的推动一回调二
22:09 回调三第三推可以再细分为
22:13 一个小楔形123
22:15 所以有一个小楔形嵌套在更大的楔形中
22:19 因此这是一个嵌套式楔形的结构
22:22 它有更高的概率发生反转
22:30 如果你查看一个较小时间周期的K线图
22:34 这一段实际上是一个大的结构图
22:38 比如说如果这是60分钟K线图
22:41 你切换到5分钟图
22:43 这会是一个相当大的结构
22:46 4小时下跌 34小时的下跌
22:49 如果从更小的时间周期上去看一个小结构
22:53 它就会变成一个大的结构
23:00 在两个或更多的时间周期上
23:02 市场尝试做同样的事情
23:05 赚钱的概率就更加大了
23:11 看这里三次向下推动阴线阳线
23:15 阴线这个下影线就是第二推
23:19 然后这里是第三推
23:21 这是一个楔形底 非常小
23:23 在这个时间周期上很小
23:25 如果这是日K线图 那么在五分钟图上
23:29 这就是一个持续了六天的很大的楔形底
23:33 这个三推结构略微大一些
23:36 这个小楔形123在1个更大的楔形内
23:41 123这里.
23:43 是一个更大
23:45 的楔形一 反弹2 反弹3
23:49 在更大的楔形内
23:51 123外面还有更大的楔形123
23:57 所以在大楔形底的内部
23:59 层层嵌套了好多个小楔形
24:02 然后在这里有一个好的做多信号K线
24:05 所以至少有两段上涨
24:07 至少横盘的概率就更高了
24:12 当你可以用很多方法画出相同的结构时
24:16 说明市场正在尝试从许多不同的时间周期
24:20 但是在同一个价格进行反转
24:23 电脑程序会至少发现其中一个楔形底
24:27 这意味着大多数程序将
24:29 会寻找楔形反转的机会
24:31 如果所有这些计算机都在计划买入
24:34 那么反转发生的概率就会更高
24:45 如果在这么多楔形底的第三推汇聚的地方
24:49 出现了一个好的做多信号
24:51 K线做多的胜率就会非常高`,image:{src:"/charts/21c-nested.webp",solutionSrc:"/charts/21c-nested-solution.webp",page:1863,alt:"两条连接推进高点的斜线"}},{prompt:"价格从大区间下部反转，连续上涨到接近区间上部。这个上涨波段已经足够明显，为什么课程仍保留原大区间的判断？",options:["只要区间内形成连续上涨，就可以同时确认大区间已经向上突破","上涨可能只是区间内从下部到上部的一段，需要更多证据确认脱离区间","只要没有脱离区间，就不能说这次反转形成了可辨认的上涨波段"],answer:1,explanation:"区间可以包含有力度的上涨或下跌波段。波段交易获得预期幅度和大结构进入反向趋势是两个不同判断。",id:"21C-K05-1",knowledgeId:"K05",knowledgeTitle:"区间波段与反向趋势",time:"25:03–29:54",pdfPages:[1865,1866,1867],type:"理解判断",quote:`25:03 当市场处于震荡区间时
25:05 大多数反转会变成震荡区间内的一个波段
25:10 所以最终结果是一个大的震荡区间
25:13 而不是相反的趋势低点抬高的大反转
25:19 但这里有很多震荡区间的价格行为
25:23 一直到这里几根大阴线跟随不好
25:26 下影线很长 跟随不好反弹 上影线很长阴线
25:31 这看起来像是震荡区间的价格行为
25:34 就算是大反转
25:36 它更可能会变成一个大的震荡区间
25:44 低点抬高的大反转上涨趋势
25:47 但跟随不好跟随不好
25:49 跟随不好 跟随不好
25:52 这更有可能是震荡区间的一段上涨
25:56 因此交易者会在高点
25:58 附近寻找卖出做空的结构
26:02 这里有一个楔形顶 有两种方式来画楔形顶
26:07 123以及123
26:10 所以这是一个嵌套式鞋型 第一推、第二推
26:14 然后第三推 可以细分为更小的结构
26:20 这里也是一个MM目标
26:22 位震荡区间被向上突破
26:24 交易者在测量向上的MM目标位
26:27 他们预计在那里会有止盈和阻力
26:30 此外市场也在测试前期的高点
26:33 所以这里也会有一些止盈
26:35 空头会寻找做空的机会 阴线收在最低
26:40 多头会止盈 激进的空头会做空
26:50 每当出现大反转下降趋势
26:53 多头突破低点抬高的大反转
26:56 40%的概率会有一个像这样的波段交易
27:01 大多数时间这个波段交易会
27:03 变成一个大的震荡区间
27:06 它演变成了一个震荡区间
27:08 只有20%的时间里
27:10 大反转会发展成一个很大的趋势
27:14 你可以在下降趋势的末尾做多
27:17 40%的时间里可以赚到一个上涨的波段
27:22 有20%的时间波段会
27:24 变成一个很大的上涨趋势
27:26 40%概率可以赚到一个上涨的波段
27:29 然后演变成一个大的震荡区间
27:39 一个趋势 这里是一个下降趋势
27:42 通常之后会变成一个震荡区间
27:45 这里就是一个震荡区间
27:48 但最终变成了一个非常大的震荡区间
27:52 通常上涨趋势不会直接变成下降趋势
27:56 下降趋势也不会直接变成上涨趋势
27:59 通常你最多得到一个
28:01 20 40根K线的反转波段
28:06 这个下降趋势波段跟随并不好
28:10 看起来像是震荡区间中的一段下跌
28:13 同样这个下降趋势波段高于前期的这个低点
28:17 低于前期的这个高点
28:19 说明这段下跌也只是大震荡区间中的一段
28:27 上涨趋势没有连续的大阳线收在最高
28:31 这里有几个 但跟随不好
28:33 然后这里的跟随也不好
28:36 只是震荡区间中的一段上涨 而不是一个
28:40 上涨趋势
28:45 这节课我讲到了为什么新手喜欢反转
28:49 因为他们只看到了风险
28:51 他们忽略了一个事实
28:53 每当你进行一笔风险很小的交易
28:57 它的胜率通常也很小
28:59 这意味着你大多数时间会亏损
29:02 而且这通常是一种糟糕的策略
29:05 因为新手往往无法坚定持有 做到偶尔大赚
29:08 然后我讲了买家和卖家如果趋势要反转
29:12 假设当前市场是上涨趋势
29:15 而你想做空市场 通常不会直接变成下降趋势
29:19 直到有一些卖压的累积才行
29:22 同样
29:23 当你看见一个下降趋势
29:26 你想尝试做多做反转
29:28 在反转前需要看到买家的累积
29:31 这些买压和卖压通常出现
29:34 在过度的震荡区间里面
29:37 通常趋势必须过渡到一个震荡区间
29:41 然后才能成为相反的趋势
29:43 最后我谈到了嵌套式结构 小结构嵌套
29:47 在一个相似的更大的结构中
29:50 当你发现一个嵌套式的反转结构
29:54 胜率就会更高`,referenceImage:{src:"/charts/21c-swings-solution.webp",page:1867,alt:"第1867页课件整页讲解",kind:"课件整页"}}],sourceFile:"BTC PAF 21C Reversals_中文 (源语言).srt"},{id:"21D",group:"反转",title:"反转的波段目标、通道和双顶底变体",range:"00:00–33:30",revision:"reversal-21d-v1",notes:["算术例子要按明示条件计算；未达波段目标的交易可以有不同退出结果。","十根K线、两段走势是观察目标，结合仍可辨认该形态的较高周期。","突破原通道后继续看反向结构，测试前高前低时两处极值可以不完全相等。"],knowledgePoints:[{id:"K01",title:"未走成预期波段的结果",summary:"课程的40%示例区分达到波段目标和其他结果。后者可能小亏、小赚或近乎打平。",time:"00:13–08:46",pdfPages:[1872,1873,1874,1875,1876],questionIds:["21D-K01-1","21D-K01-2"]},{id:"K02",title:"十根K线、两段走势的目标",summary:"课程用十根K线和两段走势作为反转波段的最低观察目标，允许横盘夹在两段之间。",time:"08:55–14:13",pdfPages:[1878,1879,1880,1881],questionIds:["21D-K02-1","21D-K02-2"]},{id:"K03",title:"突破原通道后寻找反向结构",summary:"先突破原趋势通道，再观察高低点是否开始朝反方向排列。",time:"14:29–17:46",pdfPages:[1882,1883],questionIds:["21D-K03-1"]},{id:"K04",title:"前高前低的测试不要求精确相等",summary:"趋势反转往往伴随对旧高低点的测试。双顶底可高低不齐，也可能更适合用其他形态描述。",time:"17:47–21:55",pdfPages:[1885,1886],questionIds:["21D-K04-1"]},{id:"K05",title:"较高低点入场时怎样数后续段落",summary:"从第一次转涨开始看整体两段；若在第一段后的较高低点入场，则观察随后一段。",time:"22:05–25:59",pdfPages:[1887,1888],questionIds:["21D-K05-1"]},{id:"K06",title:"初始风险与实际风险",summary:"初始风险看入场到原止损；课程例中实际风险较小，因为入场后的不利波动未触到原止损。",time:"26:16–31:39",pdfPages:[1889,1890,1891],questionIds:["21D-K06-1","21D-K06-2"]},{id:"K07",title:"反转形态常经过区间",summary:"末端旗形、楔形、双顶底、三角等都可涉及区间阶段。形态名称不能代替突破方向与跟随。",time:"31:49–33:30",pdfPages:[1892,1893],questionIds:["21D-K07-1"]}],questions:[{prompt:"讲师用大约四成交易走出预期波段作演示。剩下的交易没有走出这类波段，可以怎样理解其盈亏？",options:["应按全部打平计算，因为讲师提到盈亏可能互相抵消","应按每笔触发初始止损计算，因为都没达到波段目标","可能出现小亏、小赚或接近打平，取决于实际退出"],answer:2,explanation:"未达到预期波段是对走势结果的归类。每笔最终盈亏仍由实际退出决定。",id:"21D-K01-1",knowledgeId:"K01",knowledgeTitle:"未走成预期波段的结果",time:"00:13–08:46",pdfPages:[1872,1873,1874,1875,1876],type:"理解判断",quote:`00:13 我认为能明白这一点很重要
00:16 一般情况下大反转只有40%的胜率
00:20 40%的时间里你会得到
00:22 一个波段交易或一个趋势
00:25 60%的时间里你要么得到一个震荡区间
00:30 要么之前趋势会延续
00:33 当我寻找反转机会的时候
00:35 我的最低目标是两段10KTPTL
00:40 大多数大反转甚至是楔形反转
00:44 其中都包含双顶或双底的结构
00:50 之前说过
00:51 40%的大反转会导致反方向的波段
00:58 60%的时候是小赚小亏 基本上互相抵消
01:12 上涨趋势市场通过横盘的方式跌破趋势线
01:16 现在有一个更高的高点
01:18 这也是一个扩张三角形 上涨下跌
01:22 更大的上涨 更大的下降再上
01:24 并且有一个不错的做空信号K线
01:28 所以把它看作高点抬高的大反转
01:31 并且做空是合理的
01:33 所有的扩张三角形顶都是高点抬高的大反转
01:39 某个做空了的交易员 如果他持有到这里
01:44 他会在这里小亏止损
01:50 现在有一个楔形点 三次上涨123
01:54 我没有画出上涨趋势线
01:57 但是它很明显有些形的结构
02:00 这里有一个小双顶
02:02 在这个阳线或这个阴线的
02:05 下方卖出做空是合理的
02:10 市场没有迅速下跌
02:12 交易者在收盘结束时可以小赚离场
02:17 前面的小亏和后面的小赚相互抵消
02:26 在标普期货中 如果你想做波段交易
02:29 大反转就是波段交易
02:31 你的回报至少要是风险的两倍
02:34 因为你的胜率只有40%
02:38 盈亏比至少要达到2.
02:40 才会有一个
02:42 好的数学期望
02:43 如果你冒的风险是两个点
02:46 你就必须尝试赚四个点
02:54 这里在顶部有两次反转
02:57 尝试这里高点抬高的大反转 这里三推楔形顶
03:01 在十次类似的交易后
03:03 你可能有4笔交易成功止盈
03:06 每次赚四个点 共16个点
03:09 可能有六次亏损 每次亏二个点
03:12 共亏损12个点 通常更少
03:15 这样算下来你的净利润就是四个点
03:18 所以如果你进行十次这样的交易
03:21 最终可以盈利 实际上的数学期望会更好
03:24 这里只是按照最差的情况来计算
03:30 如果你做十次合理的
03:32 像这么好的交易 机会的大反转
03:36 大概率最后可以赚到很多钱
03:39 住前提是耐心等待好的机会 并且坚定持有
03:45 让我举一个外汇中大反转
03:49 的例子
03:50 你想做波段交易
03:52 在外汇市场中波段交易的最小目标是
03:56 40个pips假设你必须冒二是pips
04:00 的风险来进行交易
04:02 假设你进行了
04:03 十次类似这样的交易
04:06 这里有一个高点抬高的大反转
04:09 现在有一个楔形顶你做了
04:12 十次都是有不错的机会
04:15 而且有好的信号K线
04:18 十次交易后
04:20 你可能有四次成功止盈40 pi
04:23 ps 4十你在四次盈利上总共
04:27 赚了160 pips
04:29 而你的六次亏损 就算每次亏满20 pips
04:33 总共会亏损120 pips
04:36 所以最后还净赚40 pips
04:39 实际情况会更好
04:41 因为不会每次都亏满20 pips
04:43 注 即使失败 很多时候也是小赚小亏大平
04:50 可能是三次小亏和三次小赚
04:53 无论如何 如果你进行了十次交易
04:56 并且都是合理的交易机会
04:58 你最终大概率是可以赚钱的
05:06 而且盈利会比我刚才计算的更多
05:10 这是es标普股指期货
05:14 当我说六次反转失败时
05:16 我并不是指这六次一定会亏钱
05:19 我指的是六次未能成功拿到波段的交易
05:22 那六次反转失败实际上是小亏和小赚的组合
05:26 最终会互相抵消
05:28 如果机会选的好 胜率通常不止40%
05:32 而且有些交易的收益远远不止四个点
05:36 因为有时候会反转
05:39 成为很大的趋势
05:41 上涨趋势趋势线被跌破
05:44 你可以说它是三推楔形顶
05:48 123高点略微降低的大反转
05:52 或者你可以把它看作窄震荡区间中的小双点
05:57 你也可以说这个是窄震荡当区间中的小双顶
06:01 当你看到一个这么的窄的震荡区间
06:04 而且有一个好的做空信号
06:06 K线实际上有40%的
06:08 概率会出现下跌的波段
06:10 两段下跌一回调2或者一回调2
06:14 所以这是一个合理的做空机会
06:17 止损并不远
06:19 如果你能一直持有
06:21 到这里
06:22 你的收益远远不止风险的2倍
06:29 在这种情况下 如果你一直持有到这里
06:34 最终可以赚18个点
06:36 远远超过两倍初始风险
06:38 所以你偶尔会有一些大赚
06:41 一笔大赚就可以弥补很多小的亏损
06:46 这是欧元对美元的五分钟图上涨趋势
06:50 空头突破 然后进入了一个窄震荡区间
06:54 在窄震荡区间里面有一个双顶
06:57 它是很好的做空信号
06:59 K线它也是 这是一笔合理的交易
07:02 在震荡区间里面
07:03 高点降低的大反转40%的概率会有两段下跌
07:09 一反弹2或者一反弹2
07:12 在你的十次交易中
07:14 你至少会遇到一笔这样的交易
07:21 当我说你做十笔交易会有6笔失败
07:25 并不是指完全达到止损
07:28 我的意思是有6笔交易无法
07:31 达到40个pips的目标
07:34 其中大部分都是小赚小亏
07:36 最终差不多互相抵消
07:39 而40%的交易将带来
07:41 至少40个pips的利润
07:47 假设你抓住了这个大反转的机会
07:51 做空了高点降低的双顶
07:53 大反转在震荡区间里面有高点降低的双顶
07:58 40%的概率会有至少两段的下跌
08:02 不错的做空信号K不错的做空
08:06 信号K这是一笔合理的交易
08:09 你开仓做空之后 这里没有达到你的止损
08:13 所以你可以一直持有这个空单
08:18 如果你在收盘时离场
08:20 你可以赚到90个pips的利润
08:24 这远远超过了风险
08:27 好几倍
08:28 如果你做十次类似的合理的大反转
08:32 其中一二笔交易会有特别大的利润
08:36 这就是为什么大反转是一个不错的策略
08:42 40%的时间里
08:44 当你成功赚到波段的利润时
08:46 这些利润远远超过60%中的小赚小亏`,referenceImage:{src:"/charts/21d-risk-solution.webp",page:1872,alt:"第1872页课件整页讲解",kind:"课件整页"}},{prompt:"按课上算术示例，假设十笔中四笔各赚4点、六笔各亏2点，并忽略费用。合计盈亏是多少？",options:["亏4点，盈利共12点，亏损共16点","赚4点，盈利共16点，亏损共12点","赚16点，盈利共16点，未达目标的交易不计入"],answer:1,explanation:"四笔乘4点是16点，六笔乘2点是12点，两者相减为4点。这里的数字是题目明示的计算条件。",id:"21D-K01-2",knowledgeId:"K01",knowledgeTitle:"未走成预期波段的结果",time:"00:13–08:46",pdfPages:[1872,1873,1874,1875,1876],type:"变式辨析",quote:`00:13 我认为能明白这一点很重要
00:16 一般情况下大反转只有40%的胜率
00:20 40%的时间里你会得到
00:22 一个波段交易或一个趋势
00:25 60%的时间里你要么得到一个震荡区间
00:30 要么之前趋势会延续
00:33 当我寻找反转机会的时候
00:35 我的最低目标是两段10KTPTL
00:40 大多数大反转甚至是楔形反转
00:44 其中都包含双顶或双底的结构
00:50 之前说过
00:51 40%的大反转会导致反方向的波段
00:58 60%的时候是小赚小亏 基本上互相抵消
01:12 上涨趋势市场通过横盘的方式跌破趋势线
01:16 现在有一个更高的高点
01:18 这也是一个扩张三角形 上涨下跌
01:22 更大的上涨 更大的下降再上
01:24 并且有一个不错的做空信号K线
01:28 所以把它看作高点抬高的大反转
01:31 并且做空是合理的
01:33 所有的扩张三角形顶都是高点抬高的大反转
01:39 某个做空了的交易员 如果他持有到这里
01:44 他会在这里小亏止损
01:50 现在有一个楔形点 三次上涨123
01:54 我没有画出上涨趋势线
01:57 但是它很明显有些形的结构
02:00 这里有一个小双顶
02:02 在这个阳线或这个阴线的
02:05 下方卖出做空是合理的
02:10 市场没有迅速下跌
02:12 交易者在收盘结束时可以小赚离场
02:17 前面的小亏和后面的小赚相互抵消
02:26 在标普期货中 如果你想做波段交易
02:29 大反转就是波段交易
02:31 你的回报至少要是风险的两倍
02:34 因为你的胜率只有40%
02:38 盈亏比至少要达到2.
02:40 才会有一个
02:42 好的数学期望
02:43 如果你冒的风险是两个点
02:46 你就必须尝试赚四个点
02:54 这里在顶部有两次反转
02:57 尝试这里高点抬高的大反转 这里三推楔形顶
03:01 在十次类似的交易后
03:03 你可能有4笔交易成功止盈
03:06 每次赚四个点 共16个点
03:09 可能有六次亏损 每次亏二个点
03:12 共亏损12个点 通常更少
03:15 这样算下来你的净利润就是四个点
03:18 所以如果你进行十次这样的交易
03:21 最终可以盈利 实际上的数学期望会更好
03:24 这里只是按照最差的情况来计算
03:30 如果你做十次合理的
03:32 像这么好的交易 机会的大反转
03:36 大概率最后可以赚到很多钱
03:39 住前提是耐心等待好的机会 并且坚定持有
03:45 让我举一个外汇中大反转
03:49 的例子
03:50 你想做波段交易
03:52 在外汇市场中波段交易的最小目标是
03:56 40个pips假设你必须冒二是pips
04:00 的风险来进行交易
04:02 假设你进行了
04:03 十次类似这样的交易
04:06 这里有一个高点抬高的大反转
04:09 现在有一个楔形顶你做了
04:12 十次都是有不错的机会
04:15 而且有好的信号K线
04:18 十次交易后
04:20 你可能有四次成功止盈40 pi
04:23 ps 4十你在四次盈利上总共
04:27 赚了160 pips
04:29 而你的六次亏损 就算每次亏满20 pips
04:33 总共会亏损120 pips
04:36 所以最后还净赚40 pips
04:39 实际情况会更好
04:41 因为不会每次都亏满20 pips
04:43 注 即使失败 很多时候也是小赚小亏大平
04:50 可能是三次小亏和三次小赚
04:53 无论如何 如果你进行了十次交易
04:56 并且都是合理的交易机会
04:58 你最终大概率是可以赚钱的
05:06 而且盈利会比我刚才计算的更多
05:10 这是es标普股指期货
05:14 当我说六次反转失败时
05:16 我并不是指这六次一定会亏钱
05:19 我指的是六次未能成功拿到波段的交易
05:22 那六次反转失败实际上是小亏和小赚的组合
05:26 最终会互相抵消
05:28 如果机会选的好 胜率通常不止40%
05:32 而且有些交易的收益远远不止四个点
05:36 因为有时候会反转
05:39 成为很大的趋势
05:41 上涨趋势趋势线被跌破
05:44 你可以说它是三推楔形顶
05:48 123高点略微降低的大反转
05:52 或者你可以把它看作窄震荡区间中的小双点
05:57 你也可以说这个是窄震荡当区间中的小双顶
06:01 当你看到一个这么的窄的震荡区间
06:04 而且有一个好的做空信号
06:06 K线实际上有40%的
06:08 概率会出现下跌的波段
06:10 两段下跌一回调2或者一回调2
06:14 所以这是一个合理的做空机会
06:17 止损并不远
06:19 如果你能一直持有
06:21 到这里
06:22 你的收益远远不止风险的2倍
06:29 在这种情况下 如果你一直持有到这里
06:34 最终可以赚18个点
06:36 远远超过两倍初始风险
06:38 所以你偶尔会有一些大赚
06:41 一笔大赚就可以弥补很多小的亏损
06:46 这是欧元对美元的五分钟图上涨趋势
06:50 空头突破 然后进入了一个窄震荡区间
06:54 在窄震荡区间里面有一个双顶
06:57 它是很好的做空信号
06:59 K线它也是 这是一笔合理的交易
07:02 在震荡区间里面
07:03 高点降低的大反转40%的概率会有两段下跌
07:09 一反弹2或者一反弹2
07:12 在你的十次交易中
07:14 你至少会遇到一笔这样的交易
07:21 当我说你做十笔交易会有6笔失败
07:25 并不是指完全达到止损
07:28 我的意思是有6笔交易无法
07:31 达到40个pips的目标
07:34 其中大部分都是小赚小亏
07:36 最终差不多互相抵消
07:39 而40%的交易将带来
07:41 至少40个pips的利润
07:47 假设你抓住了这个大反转的机会
07:51 做空了高点降低的双顶
07:53 大反转在震荡区间里面有高点降低的双顶
07:58 40%的概率会有至少两段的下跌
08:02 不错的做空信号K不错的做空
08:06 信号K这是一笔合理的交易
08:09 你开仓做空之后 这里没有达到你的止损
08:13 所以你可以一直持有这个空单
08:18 如果你在收盘时离场
08:20 你可以赚到90个pips的利润
08:24 这远远超过了风险
08:27 好几倍
08:28 如果你做十次类似的合理的大反转
08:32 其中一二笔交易会有特别大的利润
08:36 这就是为什么大反转是一个不错的策略
08:42 40%的时间里
08:44 当你成功赚到波段的利润时
08:46 这些利润远远超过60%中的小赚小亏`},{prompt:"看图从左下往右上走的走势。价格先涨一段，中途回落，再涨到图右上方。讲师所说的“十根K线、两段走势”，是用来观察反转能走多远。应怎样理解这个目标？",options:["观察每一段是否都恰好十根K线、且两段都没有回落","观察反转能否展开到约十根K线和两段反向推进","观察十根K线之后是否一定已发展成新的上涨趋势"],answer:1,explanation:"两段之间可以有回调或停顿，根数与段数描述预期的反转规模，不保证走成新的趋势。",id:"21D-K02-1",knowledgeId:"K02",knowledgeTitle:"十根K线、两段走势的目标",time:"08:55–14:13",pdfPages:[1878,1879,1880,1881],type:"图表应用",quote:`08:55 反转的最低目标两段十根
08:59 K线当然可以超过十根K
09:03 线也可以超过两段
09:05 但这是反转最小的合理目标
09:14 任何类型的反转或任何类型的大幅移动
09:18 突破高潮反转
09:20 最低目标都是两段10K10根K
09:24 线两段的反向移动
09:26 例如这里有一个低点抬高的大反转
09:30 最低目标是两段上涨一回调2以及至少十根K线
09:35 这里显然远远超过了十根
09:38 你也可以说这里不止两段上涨
09:41 12345取决于你对段的标准
09:48 低点抬高的大反转阳线 很小的小双底
09:52 第二 做多入场点
09:54 合理的买点止损放在重要的低点的下方
10:00 这里不会被止损 上涨波段不断的延续
10:07 震荡区间多头突破向上的
10:10 mm标位现在有一个楔形顶
10:13 实际上是嵌套式楔形 大的123
10:18 第三段可以细分为123 不错的阴线
10:22 多头止盈离场很合理
10:24 尤其是因为来到了大震荡区间的上沿
10:32 如果测量MM的时候 你选择这个高点
10:35 而不是那个高点
10:37 一些电脑程序会用这个高点
10:39 另一些会用那个高点
10:41 如果你用这个高点及粉色线
10:43 价格没有完全到达那里
10:45 但还是能看到市场反转下跌
10:48 还是能看到三推楔形底
10:50 还是能看到市场在测试大区间的上沿
10:53 所以在这根K线的低点
10:55 下方离场是合理的选择
11:00 这是欧元对美元的15分钟
11:03 图下降宽通道有很多小反转
11:06 也有很多大反转
11:10 一般来说当我交易时
11:12 我会看这个结构存在的最大的时间周期
11:17 15分钟图上有一个楔形底123
11:23 你的目标是两段10K向上反转
11:26 是这个周期的10根K线
11:28 还是存在这个楔形底的
11:31 最高时间周期的10根K线？
11:33 如果你的目标是两段十
11:36 K那么在这里就达到了
11:38 然而这个结构很大
11:40 在更高的时间周期也能看到这个楔形底
11:44 我的目标是在这个结构存在的最大
11:47 的时间周期上有两段10K的上涨
11:54 也许这里有50 100根K线
12:00 我要去更高的时间周期看看
12:03 是否也有一个好的楔形底
12:07 这是相同K线的60分钟图
12:12 他也有楔形底123
12:15 我要在60分钟图上找两段
12:18 10K的上涨可以赚大钱
12:21 而不是仅仅在15分钟图上赚小钱
12:24 在15分钟图上 这是两段上涨的结束
12:28 在60分钟图上它长得更高
12:31 第二段上涨在这里
12:33 如果根据60分钟图来设置目标
12:36 你可以多赚30 40个pips
12:41 15分钟图上的两段10K在这里就结束了
12:45 而在60分钟图上 它只是上涨的一部分
12:49 而且只有三根K线
12:51 更何况楔形底的结构在
12:53 60分钟图上仍然很明显
12:55 所以我必须根据这个结构存在的
12:58 最高时间周期来设置我的目标
13:02 那就是60分钟K线图
13:04 所以两段上涨一回调2
13:09 最低目标两段横盘或上涨
13:12 所以要么是这里 要么是这里
13:19 如果你看15分钟图并缩小K线图
13:22 你的屏幕上会显示很多K线
13:25 你会看到一个下降宽通道和3次下跌
13:29 三次或四次 1234或123
13:33 这是一个楔形底
13:35 这里有一个小的末端雄奇 然后反转
13:39 然而我想看60分钟K线图
13:42 这个结构可能有100根K线
13:45 200根K线
13:46 在60分钟图上肯定能看到相同的结构
13:50 确实如此
13:50 这就是我们在60分钟图上所看到的
13:54 所以我要在这个结构存在的最高
13:56 的时间周期里设置我的目标位
14:00 这是15分钟的目标
14:02 两段10K在这里达到60分钟的图上
14:07 得到了更大的两段式上涨一回调2
14:13 这是15分钟K线图上的楔形底`,image:{src:"/charts/21d-legs.webp",solutionSrc:"/charts/21d-legs-solution.webp",page:1878,alt:"原课件第1878页走势局部"}},{prompt:"同一个楔形底部在15分钟图和60分钟图上都能辨认。15分钟图已经出现十根K线和两段上涨，讲师为什么还继续看60分钟图？",options:["形态也出现在较高周期，课程会参考该周期的反转规模","需要改到更高周期，是因为任何周期上的形态都会自动出现在上一周期","较低周期已出现两段上涨，较高周期的目标也就同时完成"],answer:0,explanation:"课堂选用仍能看到同一形态的较高周期。低周期出现两段与高周期已达到相同规模是两回事。",id:"21D-K02-2",knowledgeId:"K02",knowledgeTitle:"十根K线、两段走势的目标",time:"08:55–14:13",pdfPages:[1878,1879,1880,1881],type:"变式辨析",quote:`08:55 反转的最低目标两段十根
08:59 K线当然可以超过十根K
09:03 线也可以超过两段
09:05 但这是反转最小的合理目标
09:14 任何类型的反转或任何类型的大幅移动
09:18 突破高潮反转
09:20 最低目标都是两段10K10根K
09:24 线两段的反向移动
09:26 例如这里有一个低点抬高的大反转
09:30 最低目标是两段上涨一回调2以及至少十根K线
09:35 这里显然远远超过了十根
09:38 你也可以说这里不止两段上涨
09:41 12345取决于你对段的标准
09:48 低点抬高的大反转阳线 很小的小双底
09:52 第二 做多入场点
09:54 合理的买点止损放在重要的低点的下方
10:00 这里不会被止损 上涨波段不断的延续
10:07 震荡区间多头突破向上的
10:10 mm标位现在有一个楔形顶
10:13 实际上是嵌套式楔形 大的123
10:18 第三段可以细分为123 不错的阴线
10:22 多头止盈离场很合理
10:24 尤其是因为来到了大震荡区间的上沿
10:32 如果测量MM的时候 你选择这个高点
10:35 而不是那个高点
10:37 一些电脑程序会用这个高点
10:39 另一些会用那个高点
10:41 如果你用这个高点及粉色线
10:43 价格没有完全到达那里
10:45 但还是能看到市场反转下跌
10:48 还是能看到三推楔形底
10:50 还是能看到市场在测试大区间的上沿
10:53 所以在这根K线的低点
10:55 下方离场是合理的选择
11:00 这是欧元对美元的15分钟
11:03 图下降宽通道有很多小反转
11:06 也有很多大反转
11:10 一般来说当我交易时
11:12 我会看这个结构存在的最大的时间周期
11:17 15分钟图上有一个楔形底123
11:23 你的目标是两段10K向上反转
11:26 是这个周期的10根K线
11:28 还是存在这个楔形底的
11:31 最高时间周期的10根K线？
11:33 如果你的目标是两段十
11:36 K那么在这里就达到了
11:38 然而这个结构很大
11:40 在更高的时间周期也能看到这个楔形底
11:44 我的目标是在这个结构存在的最大
11:47 的时间周期上有两段10K的上涨
11:54 也许这里有50 100根K线
12:00 我要去更高的时间周期看看
12:03 是否也有一个好的楔形底
12:07 这是相同K线的60分钟图
12:12 他也有楔形底123
12:15 我要在60分钟图上找两段
12:18 10K的上涨可以赚大钱
12:21 而不是仅仅在15分钟图上赚小钱
12:24 在15分钟图上 这是两段上涨的结束
12:28 在60分钟图上它长得更高
12:31 第二段上涨在这里
12:33 如果根据60分钟图来设置目标
12:36 你可以多赚30 40个pips
12:41 15分钟图上的两段10K在这里就结束了
12:45 而在60分钟图上 它只是上涨的一部分
12:49 而且只有三根K线
12:51 更何况楔形底的结构在
12:53 60分钟图上仍然很明显
12:55 所以我必须根据这个结构存在的
12:58 最高时间周期来设置我的目标
13:02 那就是60分钟K线图
13:04 所以两段上涨一回调2
13:09 最低目标两段横盘或上涨
13:12 所以要么是这里 要么是这里
13:19 如果你看15分钟图并缩小K线图
13:22 你的屏幕上会显示很多K线
13:25 你会看到一个下降宽通道和3次下跌
13:29 三次或四次 1234或123
13:33 这是一个楔形底
13:35 这里有一个小的末端雄奇 然后反转
13:39 然而我想看60分钟K线图
13:42 这个结构可能有100根K线
13:45 200根K线
13:46 在60分钟图上肯定能看到相同的结构
13:50 确实如此
13:50 这就是我们在60分钟图上所看到的
13:54 所以我要在这个结构存在的最高
13:56 的时间周期里设置我的目标位
14:00 这是15分钟的目标
14:02 两段10K在这里达到60分钟的图上
14:07 得到了更大的两段式上涨一回调2
14:13 这是15分钟K线图上的楔形底`,referenceImage:{src:"/charts/21d-timeframe-solution.webp",page:1881,alt:"第1881页课件整页讲解",kind:"课件整页"}},{prompt:"看图：价格先沿红色下降斜线方向运行，后来右侧走势沿绿色斜线抬高。如果要判断是否已从下降转为上涨，除了越过原下降通道，还应继续观察什么？",options:["反弹高点和回落低点是否都开始抬高","反弹高点是否抬高，回落低点继续降低也属于同样的上涨结构","反弹能否回到原下降起点，在此以前无需看中间的高低点"],answer:0,explanation:"通道突破是一个变化；之后反弹高点和回落低点逐步抬高，才提供反向结构形成的证据。",id:"21D-K03-1",knowledgeId:"K03",knowledgeTitle:"突破原通道后寻找反向结构",time:"14:29–17:46",pdfPages:[1882,1883],type:"图表应用",quote:`14:29 所有趋势反转都从通道
14:32 的突破开始
14:34 上涨趋势上涨通道想要反转
14:37 我需要看到通道
14:39 被跌破
14:40 下降趋势
14:42 下降通道向反转呈上涨趋势
14:45 需要看到下降通道被突破
14:55 回调需要能够跌破通道下沿
14:58 也就是上涨趋势线被跌破
15:04 并且最好是强势到可以跌破ema 20
15:11 你需要先看到一些空头强势的信号
15:15 才能预判市场要反转呈下降趋势
15:20 接下来在通道被突破后
15:22 你希望上涨趋势恢复 然后再次下跌
15:31 一旦接近前期高点 第二次回调就开始了
15:36 回调不断发展
15:38 最终反转成了下降趋势
15:43 高点降低的大反转
15:45 所有大反转都有双顶双底的结构
15:48 这里是高点降低的双顶
15:51 并强势反转 下跌成为下降趋势
15:58 上涨变下跌的反转 首先需要跌破趋势线
16:03 然后测试前期高点 最后再次反转下跌
16:10 这里是下降趋势 反转为上涨趋势
16:13 首先需要向上突破下降通道
16:16 然后下跌趋势恢复
16:18 这里下降趋势恢复了两次
16:21 然后你看到价格从前期低点附近反转上涨低点抬高的大反转
16:27 这里有一个低点抬高的双底
16:29 所以这是一个低点抬高的双底大反转
16:33 并且形成了上涨趋势
16:37 大多数反转都是双顶
16:41 或双底
16:42 或双顶双底的一些变体
16:45 甚至在楔形反转中也是这样
16:48 通常都有一个双顶或双底包含在其中
16:56 高点降低的大反转 但实际上是双顶的一种
17:00 更高的低点是双底的一种
17:03 然后这里有一个额外的双底
17:09 由于反转包含着某种测试前期的高低点
17:13 所以大多数反转是双顶或双底
17:17 我们会在大反转的课程中更详细
17:20 的讲解这一点
17:22 再次强调这是一个双顶高点
17:25 稍微降低的双顶是双顶的一种变体
17:30 这里有一个双底 那里有
17:32 一个双底 这里
17:34 是一个低点抬高的小双底
17:37 全都是双底下降趋势
17:39 然后再次测试前期的低点
17:43 这里和这里进而形成某种双底下降趋势`,image:{src:"/charts/21d-opposite-channel.webp",solutionSrc:"/charts/21d-opposite-channel-solution.webp",page:1883,alt:"红色下降斜线与绿色上升斜线"}},{prompt:"价格下跌后反弹，回落测试前低，在略高于前低的位置止住并再次上涨。为什么课上仍可能把它看成双底的一种变体？",options:["第二次回落必须与第一次最低价相同，略高的低点只能算上涨突破","第二次回落测试了同一个低位区域，两次低点可以不完全相等","只要两次低点不相等，就必须改按楔形并放弃前低测试的解释"],answer:1,explanation:"判断重点是第二次下探与旧低点的关系以及之后的反应。变体不要求两个低点完全相同。",id:"21D-K04-1",knowledgeId:"K04",knowledgeTitle:"前高前低的测试不要求精确相等",time:"17:47–21:55",pdfPages:[1885,1886],type:"理解判断",quote:`17:43 这里和这里进而形成某种双底下降趋势
17:47 未能继续
17:49 于是市场
17:50 朝着相反的方向移动 尝试恢复上涨趋势
17:55 但第二次尝试也失败了
17:57 形成了一个双顶 然后导致了反转
18:03 很少有完美的双顶和双底
18:06 而且很多时候他们并不那么明显
18:13 很多时候他们是扭曲的 很难看清
18:16 而且很多时候交易员会用
18:19 其他的词汇来描述它们
18:21 比如大反转失败的突破
18:24 末端其形反转或者三推楔形
18:27 但是如果你真的理解市场发生了什么
18:32 你就知道那里存在一个双顶或双底
18:38 双顶可能看起来不像双顶
18:41 因为两个高点不一样高
18:43 但那是一个双顶多头尝试恢复趋势
18:47 但他们在之前失败过一次的
18:50 价格附近再次失败另一个双顶
18:54 这两个高点和这个高点和那个高点不重要
18:58 一些电脑程序会说这是一个双顶
19:01 尝试恢复上涨趋势
19:03 但再次在前期高点附近失败并反转下跌
19:07 所以这是一个双顶
19:09 小双底里面有更小的双底
19:12 这个低点和那个低点小双底
19:15 更小的双底双顶里面有更小的双顶
19:22 双顶雄奇趋势恢复下跌
19:27 下降趋势恢复 但突破失败 于是反转上涨
19:31 第一个低点 第二个低点 这是一个双底
19:35 即使它略低于它它仍然是一个双底
19:39 并至少制造了一个小反转
19:44 多头再次尝试反转
19:46 在前期失败的价格附近再次失败
19:51 高点略微降低了 但它仍然是一个双顶
19:55 由于它处于下降趋势中
19:57 所以我称它为双鼎雄奇
20:01 下降趋势恢复
20:03 但在前期反转上涨的位置附近再次反转上涨
20:08 低点略微降低 但仍然是一个双底
20:12 并且导致了反转
20:16 空头再次尝试形成双顶和这个高点
20:19 或那个高点和这个高点和那个高点
20:23 空头尝试反转下跌 但这个多头突破太强势
20:27 这里只是一次回调
20:29 最终多头突破成功
20:32 突破了过去五十多根K线组成的震荡区间
20:38 这里有一个小双顶 同时也是头肩底的颈线
20:43 左肩头右肩双鼎雄奇失败了
20:48 刚开始下跌就立即反转上涨
20:52 就像这个双顶失败了一样
20:55 刚刚下跌一点就向上突破了
21:01 这是一个双顶和这个高点或那个高点
21:05 这个双顶和这个高点或那个高点
21:08 不同的计算机会使用不同的高点
21:11 核心要点是这是双顶的一种 他们失败了
21:17 这也是一个双顶
21:19 即使这个高点远高于那个高点
21:23 这是另一个双顶 高点抬高 但仍然是双顶
21:29 市场强势上涨
21:31 并在前期反转的价格附近反转下跌
21:39 尽管当你看到这些结构时
21:43 你可能不会把它们看作双顶和双
21:47 但电脑程序会
21:49 他们看到两次都在相同
21:52 价格附近反转双顶双底
21:55 所以你也应该这样看待他们`},{prompt:"价格从底部先上涨了一段，随后回调，在高于原底的位置再次转涨。如果从这个较高低点看接下来的上涨，它在整次反转里是哪一段？",options:["它应算整次反转的第三段，因为第一次上涨与中间回落各占一段向上推进","它应重新算整次反转的第一段，因为只有较高低点出现后才开始数","它可以是整次反转的第二段，因为最初从底部涨起来的一段已经走过"],answer:2,explanation:"整体计数从最初转涨开始。较高低点可以是第一段上涨后回调的结束处，从那里开始观察接下来的第二段上涨。",id:"21D-K05-1",knowledgeId:"K05",knowledgeTitle:"较高低点入场时怎样数后续段落",time:"22:05–25:59",pdfPages:[1887,1888],type:"理解判断",quote:`22:05 强势的反转上涨
22:07 三推楔型123剧烈的抛售
22:11 同样强势的反转上涨
22:13 大概率至少会有小的第二段
22:17 横盘或上涨横盘回调
22:19 也许这里是第二段上涨
22:23 下降趋势不错的多头突破
22:26 仍然在下降通道内
22:29 你可以说市场仍然处于下降通道内
22:33 但这是一个相当强势的反转
22:36 并且是第三次反转上123
22:39 所以这是一个三推
22:41 楔形底可能是三角形的末端雄起
22:45 空头突破通常是下降趋势的最后一段下跌
22:49 下降趋势后期的三角形通常会成为末端雄起
22:54 即使有这样的强势突破
22:56 你也必须假设市场可能会回测三角形的顶点
23:00 足够强势的突破大概率会有第二段上涨
23:04 多头把止损放在下方
23:06 然后坚定持有他们阳线上方买入更多在这里或这里或这里第二
23:13 做多入场点12 期待会有第二段上涨
23:20 这个抬高的低点是对前期低点的测试
23:24 也是这第一段上涨后的回调低点抬高预期
23:31 第二段上涨
23:32 更强势的反转上涨 它比它要强势得多
23:38 也许这是区间中的第二段陷阱
23:41 但可能这里足够强势 以至于无论怎么下跌
23:45 价格都会保持在那个低点上方
23:47 并且至少会有一个小的第二段上涨
23:53 这是一个更大的低点抬高的大反转
23:56 下降趋势突破并未完全突破下降通道
24:01 但这是一个低点抬高的大反转
24:04 现在下降通道被多头强势突破
24:09 交易者知道任何向下的反转都大概率会失败
24:14 所以他们会在反转上涨时买入
24:17 强势的空头突破第一次反转上涨
24:20 很多交易者更愿意在第二入场点买入
24:23 尤其突破多头会在这个阳线上方做多
24:27 把它看作是突破之后的回调
24:39 强势的多头突破 多头不在乎深度的回调
24:44 他们期待抛售失败并形成更高的低点
24:48 他们希望这是未来许多
24:50 抬高的低点中的第一个
24:53 以及是上涨趋势的开始 低点继续抬高
25:01 低点降低的大反转 预期会有两段上涨
25:07 看到第一段上涨并得到更高的低点之后
25:10 交易者预期会有第二段上涨
25:13 就像前一页课件中一样
25:15 这个课件是低点降低的大反转的案例
25:18 同样也是预期两段上涨
25:20 记住当你预期反转的时候 目标是两段上涨
25:24 如果反转从更低的低点开始
25:27 你预期会有两段上涨
25:29 如果反转从更高的低点开始
25:32 你预期只有一段上涨
25:36 低点降低的大反转
25:38 下降趋势相当不错的反转上涨
25:41 然后两段下跌到一个更低的低点
25:45 小双底阳线 这是一个合理的买点
25:49 期待两段上涨一回调2 这是最低目标
25:59 所有多头反转的最低目标是一个上涨的波段`,referenceImage:{src:"/charts/21d-higher-low-solution.webp",page:1887,alt:"第1887页课件整页讲解",kind:"课件整页"}},{prompt:"某次做多入场时，保护止损设在入场价下方较远处。价格随后只短暂跌到入场价下方一点，就恢复上涨。讲师怎样区分这次的初始风险和实际风险？",options:["初始风险看上涨前实际回落的距离，实际风险看入场价到原止损的距离","初始风险看入场价到原止损的距离，实际风险看上涨前价格曾向不利方向走多远","只要止损未触发，两种风险都按入场价到原止损的同一距离记录"],answer:1,explanation:"原止损距离入场时已知。入场后究竟向不利方向走了多远，要等行情走出来才知道。",id:"21D-K06-1",knowledgeId:"K06",knowledgeTitle:"初始风险与实际风险",time:"26:16–31:39",pdfPages:[1889,1890,1891],type:"理解判断",quote:`26:16 这是一笔波段交易
26:18 通常来说在两倍风险的地方
26:20 止盈一半仓位是不错的选择
26:24 你在这里开仓买入 初始风险在这里
26:28 这是一倍风险
26:29 那是两倍风险在那里只赢一半是合理的
26:33 然后尽可能久的持有
26:35 剩下一半止损在这里
26:37 在做多信号K线的最低点下方
26:40 在这个强势突破之后
26:42 它成为了一个重要的低点
26:44 在这个强势突破之后 它是重要的低点
26:48 在这个突破之后
26:49 交易员将止损移动到这个
26:52 低点下方最近一个重要的低点
27:01 这里我用的是初始风险数学
27:03 期望实际上是基于实际风险的
27:06 在实际风险的课程中会更详细地讨论这一点
27:10 如果你在这根K线上方买入 市场直接上涨
27:14 你的实际风险可能只有一点点距离
27:17 就是后一根K线的一点点下影线
27:20 远小于初始风险
27:22 相比这么大的结构 实际风险太小了
27:25 没有参考价值
27:27 不足以用它来制定止盈的目标
27:30 所以制定最低目标的时候
27:33 我会基于初始风险 甚至我会期待更多
27:36 因为即使是初始风险的两倍 也没有多大
27:40 很可能会大于两倍初始风险
27:43 但那也是一个合理的初始目标
27:46 祝数学期望合理就可以了
27:48 但合理不代表最好
27:52 在得到两段上涨并且超过两倍初始风险之后
27:57 你必须寻找其他止盈的理由
28:01 在这里价格已经涨得很高了
28:03 正在测试前期下降趋势中的重要高
28:07 那些都是目标位 多头会在那附近止盈
28:10 如果你遇到反转下跌
28:12 尤其是第二次反转下跌
28:14 而且有阴线收在一半以下的话
28:17 多头在这里止盈离场是合理的选择
28:20 你可以预期下降趋势最终会演变成震荡区间
28:24 而这段上涨趋势就是那个
28:26 震荡区间中的一段上涨
28:28 并且价格可能会在下降趋势
28:31 里的某个重要高点附近滞涨
28:34 嵌套式楔形强势突破 第二推、第三推
28:39 这里有一个小的楔形顶
28:41 在这个阴线下方离场是合理的
28:43 甚至在这个小阴线下方
28:46 也是合理的这也是一个双顶
28:49 在下降趋势中
28:51 前期的重要高点附近会有阻力
28:55 非常强势的突破通常会带来一个mm目标
28:59 从K线的开盘低点到收盘高点往上翻一倍
29:04 MA目标位也在那个位置
29:07 这是另一个多头止盈的理由
29:13 第一段回调
29:14 第二段mm目标位也在这个区域
29:18 又一个在那里止盈的理由
29:25 高点抬高的大反转
29:27 但多头强势突破不适合做空 再次尝试注定
29:32 所以这是三推楔形顶123
29:35 你可以说它是末端骑行
29:37 你可以说它是高点抬高的大反转
29:40 无论如何你在寻找两段下跌一反弹2
29:44 这是最低目标 也许是一反弹2
29:47 如果你把它看作是高点降低的大反转
29:51 你的最低目标是再有一段下跌
29:55 因为更低的高点意味着
29:57 之前已经有一段下跌了
30:03 高点抬高的大反转上涨趋势
30:07 空头突破横盘了10到20根K线
30:11 预期反转下跌在那个十字星下方
30:14 在这个阴线下方或者在这根K
30:17 线下方挂突破卖单开仓做空
30:19 或者你可以等待在这里高点降低时卖出
30:23 或在这些K线下方卖出
30:28 双鼎雄奇 你可以在那根K线下方卖出
30:32 期待还有一段下跌预期
30:34 一系列更低的高点和更低
30:37 的低点即变成下降趋势
30:40 如果你在一个
30:42 更低的高点做空
30:44 这里是高点降低的双顶大反转
30:47 如果你做空了
30:49 你的预期是至少还有一段下跌
30:52 你预期反转会有两段下跌 一反弹
30:56 2、如果你在第一段下跌后做空
31:00 也就是在更低的高点做空
31:02 说明之前已经有一段下跌了
31:04 所以你的最低目标是再有一段下跌
31:07 尽管可能会有不止一段下跌
31:13 所有空头反转的最低目标是波段交易
31:18 至少是两段10K及tb
31:22 t20根K线两段下跌
31:29 对于波段交易而言
31:31 你希望你的回报至少是风险的两倍
31:34 如果你在那个阳线下方做空
31:37 初始风险就在高点上方
31:39 这是风险的两倍 这是部分止盈的最小目标`},{prompt:"反转已经上涨两段，价格到达等长目标附近，那里同时有先前高点和楔形等阻力参考。课程中的多头为什么考虑先兑现部分利润？",options:["已有一段预期上涨，且多个阻力参考集中，可以兑现一部分已有利润","有多个阻力参考，说明两段上涨尚未完成，应该等第三段才能考虑退出","已经上涨两段，说明新下降趋势确认，应把所有多头仓位直接变成空头仓位"],answer:0,explanation:"课件在实现阶段目标且接近阻力时讨论部分止盈。观察到卖压风险与确认反向趋势是不同判断。",id:"21D-K06-2",knowledgeId:"K06",knowledgeTitle:"初始风险与实际风险",time:"26:16–31:39",pdfPages:[1889,1890,1891],type:"变式辨析",quote:`26:16 这是一笔波段交易
26:18 通常来说在两倍风险的地方
26:20 止盈一半仓位是不错的选择
26:24 你在这里开仓买入 初始风险在这里
26:28 这是一倍风险
26:29 那是两倍风险在那里只赢一半是合理的
26:33 然后尽可能久的持有
26:35 剩下一半止损在这里
26:37 在做多信号K线的最低点下方
26:40 在这个强势突破之后
26:42 它成为了一个重要的低点
26:44 在这个强势突破之后 它是重要的低点
26:48 在这个突破之后
26:49 交易员将止损移动到这个
26:52 低点下方最近一个重要的低点
27:01 这里我用的是初始风险数学
27:03 期望实际上是基于实际风险的
27:06 在实际风险的课程中会更详细地讨论这一点
27:10 如果你在这根K线上方买入 市场直接上涨
27:14 你的实际风险可能只有一点点距离
27:17 就是后一根K线的一点点下影线
27:20 远小于初始风险
27:22 相比这么大的结构 实际风险太小了
27:25 没有参考价值
27:27 不足以用它来制定止盈的目标
27:30 所以制定最低目标的时候
27:33 我会基于初始风险 甚至我会期待更多
27:36 因为即使是初始风险的两倍 也没有多大
27:40 很可能会大于两倍初始风险
27:43 但那也是一个合理的初始目标
27:46 祝数学期望合理就可以了
27:48 但合理不代表最好
27:52 在得到两段上涨并且超过两倍初始风险之后
27:57 你必须寻找其他止盈的理由
28:01 在这里价格已经涨得很高了
28:03 正在测试前期下降趋势中的重要高
28:07 那些都是目标位 多头会在那附近止盈
28:10 如果你遇到反转下跌
28:12 尤其是第二次反转下跌
28:14 而且有阴线收在一半以下的话
28:17 多头在这里止盈离场是合理的选择
28:20 你可以预期下降趋势最终会演变成震荡区间
28:24 而这段上涨趋势就是那个
28:26 震荡区间中的一段上涨
28:28 并且价格可能会在下降趋势
28:31 里的某个重要高点附近滞涨
28:34 嵌套式楔形强势突破 第二推、第三推
28:39 这里有一个小的楔形顶
28:41 在这个阴线下方离场是合理的
28:43 甚至在这个小阴线下方
28:46 也是合理的这也是一个双顶
28:49 在下降趋势中
28:51 前期的重要高点附近会有阻力
28:55 非常强势的突破通常会带来一个mm目标
28:59 从K线的开盘低点到收盘高点往上翻一倍
29:04 MA目标位也在那个位置
29:07 这是另一个多头止盈的理由
29:13 第一段回调
29:14 第二段mm目标位也在这个区域
29:18 又一个在那里止盈的理由
29:25 高点抬高的大反转
29:27 但多头强势突破不适合做空 再次尝试注定
29:32 所以这是三推楔形顶123
29:35 你可以说它是末端骑行
29:37 你可以说它是高点抬高的大反转
29:40 无论如何你在寻找两段下跌一反弹2
29:44 这是最低目标 也许是一反弹2
29:47 如果你把它看作是高点降低的大反转
29:51 你的最低目标是再有一段下跌
29:55 因为更低的高点意味着
29:57 之前已经有一段下跌了
30:03 高点抬高的大反转上涨趋势
30:07 空头突破横盘了10到20根K线
30:11 预期反转下跌在那个十字星下方
30:14 在这个阴线下方或者在这根K
30:17 线下方挂突破卖单开仓做空
30:19 或者你可以等待在这里高点降低时卖出
30:23 或在这些K线下方卖出
30:28 双鼎雄奇 你可以在那根K线下方卖出
30:32 期待还有一段下跌预期
30:34 一系列更低的高点和更低
30:37 的低点即变成下降趋势
30:40 如果你在一个
30:42 更低的高点做空
30:44 这里是高点降低的双顶大反转
30:47 如果你做空了
30:49 你的预期是至少还有一段下跌
30:52 你预期反转会有两段下跌 一反弹
30:56 2、如果你在第一段下跌后做空
31:00 也就是在更低的高点做空
31:02 说明之前已经有一段下跌了
31:04 所以你的最低目标是再有一段下跌
31:07 尽管可能会有不止一段下跌
31:13 所有空头反转的最低目标是波段交易
31:18 至少是两段10K及tb
31:22 t20根K线两段下跌
31:29 对于波段交易而言
31:31 你希望你的回报至少是风险的两倍
31:34 如果你在那个阳线下方做空
31:37 初始风险就在高点上方
31:39 这是风险的两倍 这是部分止盈的最小目标`,referenceImage:{src:"/charts/21d-profits-solution.webp",page:1890,alt:"第1890页课件整页讲解",kind:"课件整页"}},{prompt:"原趋势放缓后，走势在一段范围内来回，可以画成三角形，也可看成更大双顶的一部分。按本课，接下来什么最能帮助判断反转能否延续？",options:["看到两个可能的形态名称后，就能确认原趋势已经转成反向趋势","选择看起来最规则的形态名称，再据此确定价格会突破哪一边","看实际突破哪一边以及突破后能否继续沿那个方向走"],answer:2,explanation:"课中多种反转形态都可能包含区间，实际方向仍需要突破和后续走势验证。",id:"21D-K07-1",knowledgeId:"K07",knowledgeTitle:"反转形态常经过区间",time:"31:49–33:30",pdfPages:[1892,1893],type:"理解判断",quote:`31:49 大多数反转结构包含了震荡区间
31:53 不仅仅是双顶和双底
31:56 大反转通常包含双顶和震荡区间
32:00 很多时候你会看到末端
32:02 骑行和其他失败的突破
32:04 末端骑行是一个震荡区间
32:07 楔形顶底通常在末尾有震荡区间
32:11 双顶和双底显然是震荡区间
32:14 三角形是一个震荡区间
32:16 头肩结构一定是震荡区间
32:19 大多数头肩结构也是三角形
32:22 圆弧底和圆弧顶显然是震荡区间
32:26 高潮反转通常至少有一个小震荡区间
32:30 一个小的末端骑行或者有一个小的双顶双底
32:40 这节课我讲了大反转有40%
32:44 的概率能带来一笔波段交易
32:48 在60%的时间里
32:50 你没有能够得到一个波段
32:53 而是小赚小亏 最后差不多互相抵消
32:57 40%的盈利的交易中 会有一些大赚
33:01 可以轻松地弥补所有那些小的亏损
33:06 当你在寻找大反转的机会时
33:09 最低目标是两段10K而且需要看的是
33:13 该结构存在的最高时间周期的K线图
33:17 如果你看一分钟图
33:19 但是该结构也出现在五分钟图上
33:22 不要在一分钟K线图上寻找两段10K而是
33:26 应该去五分钟K线图上找两段10K的波段
33:30 最后我讲了大多数反转都`}],sourceFile:"BTC PAF 21D Reversals_中文 (源语言).srt"}],T3="brooks-practice-v1",co=()=>({version:2,selected:"18A",records:{},updatedAt:0});function C0(a){return[1,2].includes(a==null?void 0:a.version)&&typeof a.selected=="string"&&Number.isFinite(a.updatedAt??0)&&a.records&&typeof a.records=="object"&&!Array.isArray(a.records)&&Object.values(a.records).every(t=>t&&typeof t=="object"&&t.answers&&typeof t.answers=="object"&&!Array.isArray(t.answers)&&Object.values(t.answers).every(l=>l&&Number.isInteger(l.choice)&&l.choice>=0&&typeof l.correct=="boolean"))}function L4(a,t){if(!C0(a))throw Error("Invalid progress");const l={...a,version:2,records:{...a.records}},r={};for(const c of t){const d=a.records[c.id];if(d){if(c.knowledgePoints&&(a.version===1||d.revision!==c.revision))r[c.id]=d,delete l.records[c.id];else if(a.version===1){const f={};for(const[m,p]of Object.entries(d.answers)){const g=c.questions[Number(m)];g&&p.choice<g.options.length&&(f[g.id]={...p,correct:p.choice===g.answer})}l.records[c.id]={...d,revision:c.revision||"trend-v1",answers:f}}}}return Object.keys(r).length&&(l.archives=[...Array.isArray(a.archives)?a.archives:[],{reason:"区间题库按知识点重建；旧题号不映射到新题",records:r,priorVersion:a.version,priorUpdatedAt:a.updatedAt??0}],l.migrationNotice="交易区间题库已更新。旧版答题记录已归档并保留在进度导出中，新版需要重新练习。"),l}function ci(a,t){return a.records[t]||{answers:{},understood:!1}}function Fn(a,t){return!!a&&a.correct&&a.choice===t.answer&&!a.unsure}function Ci(a,t){const l=ci(a,t.id);return t.questions.every(r=>Fn(l.answers[r.id],r))}function ri(a,t){return!!ci(a,t.id).understood&&Ci(a,t)}function Ms(a,t,l){const r=l.filter(d=>d.group===t.group),c=r.indexOf(t);return c===0||c>0&&ri(a,r[c-1])}function V4(a,t){return t.flatMap(l=>l.questions.flatMap((r,c)=>{const d=ci(a,l.id).answers[r.id];return d&&!Fn(d,r)?[{lesson:l,index:c}]:[]}))}function $4(a,t){const l=t.knowledgePoints||[],r=ci(a,t.id);return{total:l.length,learned:l.filter(c=>t.questions.filter(d=>d.knowledgeId===c.id).every(d=>Fn(r.answers[d.id],d))).length,attempted:l.filter(c=>t.questions.some(d=>d.knowledgeId===c.id&&r.answers[d.id])).length}}function M0(a,t){var l={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&t.indexOf(r)<0&&(l[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(a);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(a,r[c])&&(l[r[c]]=a[r[c]]);return l}function G4(a,t,l,r){function c(d){return d instanceof l?d:new l(function(f){f(d)})}return new(l||(l=Promise))(function(d,f){function m(K){try{g(r.next(K))}catch(w){f(w)}}function p(K){try{g(r.throw(K))}catch(w){f(w)}}function g(K){K.done?d(K.value):c(K.value).then(m,p)}g((r=r.apply(a,t||[])).next())})}const Z4=a=>a?(...t)=>a(...t):(...t)=>fetch(...t);class So extends Error{constructor(t,l="FunctionsError",r){super(t),this.name=l,this.context=r}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class Y4 extends So{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class Id extends So{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class Pd extends So{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var fo;(function(a){a.Any="any",a.ApNortheast1="ap-northeast-1",a.ApNortheast2="ap-northeast-2",a.ApSouth1="ap-south-1",a.ApSoutheast1="ap-southeast-1",a.ApSoutheast2="ap-southeast-2",a.CaCentral1="ca-central-1",a.EuCentral1="eu-central-1",a.EuWest1="eu-west-1",a.EuWest2="eu-west-2",a.EuWest3="eu-west-3",a.SaEast1="sa-east-1",a.UsEast1="us-east-1",a.UsWest1="us-west-1",a.UsWest2="us-west-2"})(fo||(fo={}));class J4{constructor(t,{headers:l={},customFetch:r,region:c=fo.Any}={}){this.url=t,this.headers=l,this.region=c,this.fetch=Z4(r)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t){return G4(this,arguments,void 0,function*(l,r={}){var c;let d,f;try{const{headers:m,method:p,body:g,signal:K,timeout:w}=r;let T={},{region:A}=r;A||(A=this.region);const R=new URL(`${this.url}/${l}`);A&&A!=="any"&&(T["x-region"]=A,R.searchParams.set("forceFunctionRegion",A));let j;const L=!!m&&Object.keys(m).some(ne=>ne.toLowerCase()==="content-type");g&&!L?typeof Blob<"u"&&g instanceof Blob||g instanceof ArrayBuffer?(T["Content-Type"]="application/octet-stream",j=g):typeof g=="string"?(T["Content-Type"]="text/plain",j=g):typeof FormData<"u"&&g instanceof FormData?j=g:(T["Content-Type"]="application/json",j=JSON.stringify(g)):g&&typeof g!="string"&&!(typeof Blob<"u"&&g instanceof Blob)&&!(g instanceof ArrayBuffer)&&!(typeof FormData<"u"&&g instanceof FormData)?j=JSON.stringify(g):j=g;let G=K;w&&(f=new AbortController,d=setTimeout(()=>f.abort(),w),K?(G=f.signal,K.addEventListener("abort",()=>f.abort())):G=f.signal);const H=yield this.fetch(R.toString(),{method:p||"POST",headers:Object.assign(Object.assign(Object.assign({},T),this.headers),m),body:j,signal:G}).catch(ne=>{throw new Y4(ne)}),z=H.headers.get("x-relay-error");if(z&&z==="true")throw new Id(H);if(!H.ok)throw new Pd(H);let se=((c=H.headers.get("Content-Type"))!==null&&c!==void 0?c:"text/plain").split(";")[0].trim(),de;return se==="application/json"?de=yield H.json():se==="application/octet-stream"||se==="application/pdf"?de=yield H.blob():se==="text/event-stream"?de=H:se==="multipart/form-data"?de=yield H.formData():de=yield H.text(),{data:de,error:null,response:H}}catch(m){return{data:null,error:m,response:m instanceof Pd||m instanceof Id?m.context:void 0}}finally{d&&clearTimeout(d)}})}}const E3=3,jd=a=>Math.min(1e3*2**a,3e4),X4=[520,503],A3=["GET","HEAD","OPTIONS"];var Dd=class extends Error{constructor(a){super(a.message),this.name="PostgrestError",this.details=a.details,this.hint=a.hint,this.code=a.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function Nd(a,t){return new Promise(l=>{if(t!=null&&t.aborted){l();return}const r=setTimeout(()=>{t==null||t.removeEventListener("abort",c),l()},a);function c(){clearTimeout(r),l()}t==null||t.addEventListener("abort",c)})}function Q4(a,t,l,r){return!(!r||l>=E3||!A3.includes(a)||!X4.includes(t))}var F4=class{constructor(a){var t,l,r,c,d;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=a.method,this.url=a.url,this.headers=new Headers(a.headers),this.schema=a.schema,this.body=a.body,this.shouldThrowOnError=(t=a.shouldThrowOnError)!==null&&t!==void 0?t:!1,this.signal=a.signal,this.isMaybeSingle=(l=a.isMaybeSingle)!==null&&l!==void 0?l:!1,this.shouldStripNulls=(r=a.shouldStripNulls)!==null&&r!==void 0?r:!1,this.urlLengthLimit=(c=a.urlLengthLimit)!==null&&c!==void 0?c:8e3,this.retryEnabled=(d=a.retry)!==null&&d!==void 0?d:!0,a.fetch?this.fetch=a.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(a,t){return this.headers=new Headers(this.headers),this.headers.set(a,t),this}retry(a){return this.retryEnabled=a,this}then(a,t){var l=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const f=this.headers.get("Accept");f==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!f||f==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const r=this.fetch;let d=(async()=>{let f=0;for(;;){const g={};l.headers.forEach((w,T)=>{g[T]=w}),f>0&&(g["X-Retry-Count"]=String(f));let K;try{K=await r(l.url.toString(),{method:l.method,headers:g,body:JSON.stringify(l.body,(w,T)=>typeof T=="bigint"?T.toString():T),signal:l.signal})}catch(w){if((w==null?void 0:w.name)==="AbortError"||(w==null?void 0:w.code)==="ABORT_ERR"||!A3.includes(l.method))throw w;if(l.retryEnabled&&f<E3){const T=jd(f);f++,await Nd(T,l.signal);continue}throw w}if(Q4(l.method,K.status,f,l.retryEnabled)){var m,p;const w=(m=(p=K.headers)===null||p===void 0?void 0:p.get("Retry-After"))!==null&&m!==void 0?m:null,T=w!==null?Math.max(0,parseInt(w,10)||0)*1e3:jd(f);await K.text(),f++,await Nd(T,l.signal);continue}return await l.processResponse(K)}})();return this.shouldThrowOnError||(d=d.catch(f=>{var m;let p="",g="",K="";const w=f==null?void 0:f.cause;if(w){var T,A,R,j;const H=(T=w==null?void 0:w.message)!==null&&T!==void 0?T:"",z=(A=w==null?void 0:w.code)!==null&&A!==void 0?A:"";p=`${(R=f==null?void 0:f.name)!==null&&R!==void 0?R:"FetchError"}: ${f==null?void 0:f.message}`,p+=`

Caused by: ${(j=w==null?void 0:w.name)!==null&&j!==void 0?j:"Error"}: ${H}`,z&&(p+=` (${z})`),w!=null&&w.stack&&(p+=`
${w.stack}`)}else{var L;p=(L=f==null?void 0:f.stack)!==null&&L!==void 0?L:""}const G=this.url.toString().length;return(f==null?void 0:f.name)==="AbortError"||(f==null?void 0:f.code)==="ABORT_ERR"?(K="",g="Request was aborted (timeout or manual cancellation)",G>this.urlLengthLimit&&(g+=`. Note: Your request URL is ${G} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((w==null?void 0:w.name)==="HeadersOverflowError"||(w==null?void 0:w.code)==="UND_ERR_HEADERS_OVERFLOW")&&(K="",g="HTTP headers exceeded server limits (typically 16KB)",G>this.urlLengthLimit&&(g+=`. Your request URL is ${G} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(m=f==null?void 0:f.name)!==null&&m!==void 0?m:"FetchError"}: ${f==null?void 0:f.message}`,details:p,hint:g,code:K},data:null,count:null,status:0,statusText:""}})),d.then(a,t)}async processResponse(a){var t=this;let l=null,r=null,c=null,d=a.status,f=a.statusText;if(a.ok){var m,p;if(t.method!=="HEAD"){var g;const T=await a.text();if(T!=="")if(t.headers.get("Accept")==="text/csv")r=T;else if(t.headers.get("Accept")&&(!((g=t.headers.get("Accept"))===null||g===void 0)&&g.includes("application/vnd.pgrst.plan+text")))r=T;else try{r=JSON.parse(T)}catch{if(l={message:T},r=null,t.shouldThrowOnError)throw new Dd({message:T,details:"",hint:"",code:""})}}const K=(m=t.headers.get("Prefer"))===null||m===void 0?void 0:m.match(/count=(exact|planned|estimated)/),w=(p=a.headers.get("content-range"))===null||p===void 0?void 0:p.split("/");K&&w&&w.length>1&&(c=parseInt(w[1])),t.isMaybeSingle&&Array.isArray(r)&&(r.length>1?(l={code:"PGRST116",details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},r=null,c=null,d=406,f="Not Acceptable"):r.length===1?r=r[0]:r=null)}else{const K=await a.text();try{l=JSON.parse(K),Array.isArray(l)&&a.status===404&&(r=[],l=null,d=200,f="OK")}catch{a.status===404&&K===""?(d=204,f="No Content"):l={message:K}}if(l&&t.shouldThrowOnError)throw new Dd(l)}return{success:l===null,error:l,data:r,count:c,status:d,statusText:f}}returns(){return this}overrideTypes(){return this}},W4=class extends F4{throwOnError(){return super.throwOnError()}select(a){let t=!1;const l=(a??"*").split("").map(r=>/\s/.test(r)&&!t?"":(r==='"'&&(t=!t),r)).join("");return this.url.searchParams.set("select",l),this.headers.append("Prefer","return=representation"),this}order(a,{ascending:t=!0,nullsFirst:l,foreignTable:r,referencedTable:c=r}={}){const d=c?`${c}.order`:"order",f=this.url.searchParams.get(d);return this.url.searchParams.set(d,`${f?`${f},`:""}${a}.${t?"asc":"desc"}${l===void 0?"":l?".nullsfirst":".nullslast"}`),this}limit(a,{foreignTable:t,referencedTable:l=t}={}){const r=typeof l>"u"?"limit":`${l}.limit`;return this.url.searchParams.set(r,`${a}`),this}range(a,t,{foreignTable:l,referencedTable:r=l}={}){const c=typeof r>"u"?"offset":`${r}.offset`,d=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(c,`${a}`),this.url.searchParams.set(d,`${t-a+1}`),this}abortSignal(a){return this.signal=a,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:a=!1,verbose:t=!1,settings:l=!1,buffers:r=!1,wal:c=!1,format:d="text"}={}){var f;const m=[a?"analyze":null,t?"verbose":null,l?"settings":null,r?"buffers":null,c?"wal":null].filter(Boolean).join("|"),p=(f=this.headers.get("Accept"))!==null&&f!==void 0?f:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${d}; for="${p}"; options=${m};`),d==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(a){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${a}`),this}};const Bd=new RegExp("[,()]");var Oa=class extends W4{throwOnError(){return super.throwOnError()}eq(a,t){return this.url.searchParams.append(a,`eq.${t}`),this}neq(a,t){return this.url.searchParams.append(a,`neq.${t}`),this}gt(a,t){return this.url.searchParams.append(a,`gt.${t}`),this}gte(a,t){return this.url.searchParams.append(a,`gte.${t}`),this}lt(a,t){return this.url.searchParams.append(a,`lt.${t}`),this}lte(a,t){return this.url.searchParams.append(a,`lte.${t}`),this}like(a,t){return this.url.searchParams.append(a,`like.${t}`),this}likeAllOf(a,t){return this.url.searchParams.append(a,`like(all).{${t.join(",")}}`),this}likeAnyOf(a,t){return this.url.searchParams.append(a,`like(any).{${t.join(",")}}`),this}ilike(a,t){return this.url.searchParams.append(a,`ilike.${t}`),this}ilikeAllOf(a,t){return this.url.searchParams.append(a,`ilike(all).{${t.join(",")}}`),this}ilikeAnyOf(a,t){return this.url.searchParams.append(a,`ilike(any).{${t.join(",")}}`),this}regexMatch(a,t){return this.url.searchParams.append(a,`match.${t}`),this}regexIMatch(a,t){return this.url.searchParams.append(a,`imatch.${t}`),this}is(a,t){return this.url.searchParams.append(a,`is.${t}`),this}isDistinct(a,t){return this.url.searchParams.append(a,`isdistinct.${t}`),this}in(a,t){const l=Array.from(new Set(t)).map(r=>typeof r=="string"&&Bd.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(a,`in.(${l})`),this}notIn(a,t){const l=Array.from(new Set(t)).map(r=>typeof r=="string"&&Bd.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(a,`not.in.(${l})`),this}contains(a,t){return typeof t=="string"?this.url.searchParams.append(a,`cs.${t}`):Array.isArray(t)?this.url.searchParams.append(a,`cs.{${t.join(",")}}`):this.url.searchParams.append(a,`cs.${JSON.stringify(t)}`),this}containedBy(a,t){return typeof t=="string"?this.url.searchParams.append(a,`cd.${t}`):Array.isArray(t)?this.url.searchParams.append(a,`cd.{${t.join(",")}}`):this.url.searchParams.append(a,`cd.${JSON.stringify(t)}`),this}rangeGt(a,t){return this.url.searchParams.append(a,`sr.${t}`),this}rangeGte(a,t){return this.url.searchParams.append(a,`nxl.${t}`),this}rangeLt(a,t){return this.url.searchParams.append(a,`sl.${t}`),this}rangeLte(a,t){return this.url.searchParams.append(a,`nxr.${t}`),this}rangeAdjacent(a,t){return this.url.searchParams.append(a,`adj.${t}`),this}overlaps(a,t){return typeof t=="string"?this.url.searchParams.append(a,`ov.${t}`):this.url.searchParams.append(a,`ov.{${t.join(",")}}`),this}textSearch(a,t,{config:l,type:r}={}){let c="";r==="plain"?c="pl":r==="phrase"?c="ph":r==="websearch"&&(c="w");const d=l===void 0?"":`(${l})`;return this.url.searchParams.append(a,`${c}fts${d}.${t}`),this}match(a){return Object.entries(a).filter(([t,l])=>l!==void 0).forEach(([t,l])=>{this.url.searchParams.append(t,`eq.${l}`)}),this}not(a,t,l){return this.url.searchParams.append(a,`not.${t}.${l}`),this}or(a,{foreignTable:t,referencedTable:l=t}={}){const r=l?`${l}.or`:"or";return this.url.searchParams.append(r,`(${a})`),this}filter(a,t,l){return this.url.searchParams.append(a,`${t}.${l}`),this}},ep=class{constructor(a,{headers:t={},schema:l,fetch:r,urlLengthLimit:c=8e3,retry:d}){this.url=a,this.headers=new Headers(t),this.schema=l,this.fetch=r,this.urlLengthLimit=c,this.retry=d}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(a,t){const{head:l=!1,count:r}=t??{},c=l?"HEAD":"GET";let d=!1;const f=(a??"*").split("").map(g=>/\s/.test(g)&&!d?"":(g==='"'&&(d=!d),g)).join(""),{url:m,headers:p}=this.cloneRequestState();return m.searchParams.set("select",f),r&&p.append("Prefer",`count=${r}`),new Oa({method:c,url:m,headers:p,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(a,{count:t,defaultToNull:l=!0}={}){var r;const c="POST",{url:d,headers:f}=this.cloneRequestState();if(t&&f.append("Prefer",`count=${t}`),l||f.append("Prefer","missing=default"),Array.isArray(a)){const m=a.reduce((p,g)=>p.concat(Object.keys(g)),[]);if(m.length>0){const p=[...new Set(m)].map(g=>`"${g}"`);d.searchParams.set("columns",p.join(","))}}return new Oa({method:c,url:d,headers:f,schema:this.schema,body:a,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(a,{onConflict:t,ignoreDuplicates:l=!1,count:r,defaultToNull:c=!0}={}){var d;const f="POST",{url:m,headers:p}=this.cloneRequestState();if(p.append("Prefer",`resolution=${l?"ignore":"merge"}-duplicates`),t!==void 0&&m.searchParams.set("on_conflict",t),r&&p.append("Prefer",`count=${r}`),c||p.append("Prefer","missing=default"),Array.isArray(a)){const g=a.reduce((K,w)=>K.concat(Object.keys(w)),[]);if(g.length>0){const K=[...new Set(g)].map(w=>`"${w}"`);m.searchParams.set("columns",K.join(","))}}return new Oa({method:f,url:m,headers:p,schema:this.schema,body:a,fetch:(d=this.fetch)!==null&&d!==void 0?d:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(a,{count:t}={}){var l;const r="PATCH",{url:c,headers:d}=this.cloneRequestState();return t&&d.append("Prefer",`count=${t}`),new Oa({method:r,url:c,headers:d,schema:this.schema,body:a,fetch:(l=this.fetch)!==null&&l!==void 0?l:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:a}={}){var t;const l="DELETE",{url:r,headers:c}=this.cloneRequestState();return a&&c.append("Prefer",`count=${a}`),new Oa({method:l,url:r,headers:c,schema:this.schema,fetch:(t=this.fetch)!==null&&t!==void 0?t:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function Us(a){"@babel/helpers - typeof";return Us=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Us(a)}function np(a,t){if(Us(a)!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var r=l.call(a,t);if(Us(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function tp(a){var t=np(a,"string");return Us(t)=="symbol"?t:t+""}function ip(a,t,l){return(t=tp(t))in a?Object.defineProperty(a,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[t]=l,a}function Ud(a,t){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),l.push.apply(l,r)}return l}function f0(a){for(var t=1;t<arguments.length;t++){var l=arguments[t]!=null?arguments[t]:{};t%2?Ud(Object(l),!0).forEach(function(r){ip(a,r,l[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):Ud(Object(l)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(l,r))})}return a}var ap=class q3{constructor(t,{headers:l={},schema:r,fetch:c,timeout:d,urlLengthLimit:f=8e3,retry:m}={}){this.url=t,this.headers=new Headers(l),this.schemaName=r,this.urlLengthLimit=f;const p=c??globalThis.fetch;d!==void 0&&d>0?this.fetch=(g,K)=>{const w=new AbortController,T=setTimeout(()=>w.abort(),d),A=K==null?void 0:K.signal;if(A){if(A.aborted)return clearTimeout(T),p(g,K);const R=()=>{clearTimeout(T),w.abort()};return A.addEventListener("abort",R,{once:!0}),p(g,f0(f0({},K),{},{signal:w.signal})).finally(()=>{clearTimeout(T),A.removeEventListener("abort",R)})}return p(g,f0(f0({},K),{},{signal:w.signal})).finally(()=>clearTimeout(T))}:this.fetch=p,this.retry=m}from(t){if(!t||typeof t!="string"||t.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new ep(new URL(`${this.url}/${t}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(t){return new q3(this.url,{headers:this.headers,schema:t,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(t,l={},{head:r=!1,get:c=!1,count:d}={}){var f;let m;const p=new URL(`${this.url}/rpc/${t}`);let g;const K=A=>A!==null&&typeof A=="object"&&(!Array.isArray(A)||A.some(K)),w=r&&Object.values(l).some(K);w?(m="POST",g=l):r||c?(m=r?"HEAD":"GET",Object.entries(l).filter(([A,R])=>R!==void 0).map(([A,R])=>[A,Array.isArray(R)?`{${R.join(",")}}`:`${R}`]).forEach(([A,R])=>{p.searchParams.append(A,R)})):(m="POST",g=l);const T=new Headers(this.headers);return w?T.set("Prefer",d?`count=${d},return=minimal`:"return=minimal"):d&&T.set("Prefer",`count=${d}`),new Oa({method:m,url:p,headers:T,schema:this.schemaName,body:g,fetch:(f=this.fetch)!==null&&f!==void 0?f:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class sp{constructor(){}static detectEnvironment(){var t;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const l=globalThis;if(typeof globalThis<"u"&&typeof l.WebSocket<"u")return{type:"native",wsConstructor:l.WebSocket};const r=typeof global<"u"?global:void 0;if(r&&typeof r.WebSocket<"u")return{type:"native",wsConstructor:r.WebSocket};if(typeof globalThis<"u"&&typeof l.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&l.EdgeRuntime||typeof navigator<"u"&&(!((t=navigator.userAgent)===null||t===void 0)&&t.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const c=globalThis.process;if(c){const d=c.versions;if(d&&d.node){const f=d.node,m=parseInt(f.replace(/^v/,"").split(".")[0]);return m>=22?typeof globalThis.WebSocket<"u"?{type:"native",wsConstructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${m} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${m} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const t=this.detectEnvironment();if(t.wsConstructor)return t.wsConstructor;let l=t.error||"WebSocket not supported in this environment.";throw t.workaround&&(l+=`

Suggested solution: ${t.workaround}`),new Error(l)}static isWebSocketSupported(){try{const t=this.detectEnvironment();return t.type==="native"||t.type==="ws"}catch{return!1}}}const lp="2.109.0",rp=`realtime-js/${lp}`,op="1.0.0",x3="2.0.0",up=x3,cp=1e4,dp=100,oi={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},O3={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},ho={connecting:"connecting",closing:"closing",closed:"closed"};class fp{constructor(t){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=t??[]}encode(t,l){if(t.event===this.BROADCAST_EVENT&&!(t.payload instanceof ArrayBuffer)&&typeof t.payload.event=="string")return l(this._binaryEncodeUserBroadcastPush(t));let r=[t.join_ref,t.ref,t.topic,t.event,t.payload];return l(JSON.stringify(r))}_binaryEncodeUserBroadcastPush(t){var l;return this._isArrayBuffer((l=t.payload)===null||l===void 0?void 0:l.payload)?this._encodeBinaryUserBroadcastPush(t):this._encodeJsonUserBroadcastPush(t)}_encodeBinaryUserBroadcastPush(t){var l,r;const c=(r=(l=t.payload)===null||l===void 0?void 0:l.payload)!==null&&r!==void 0?r:new ArrayBuffer(0);return this._encodeUserBroadcastPush(t,this.BINARY_ENCODING,c)}_encodeJsonUserBroadcastPush(t){var l,r;const c=(r=(l=t.payload)===null||l===void 0?void 0:l.payload)!==null&&r!==void 0?r:{},f=new TextEncoder().encode(JSON.stringify(c)).buffer;return this._encodeUserBroadcastPush(t,this.JSON_ENCODING,f)}_encodeUserBroadcastPush(t,l,r){var c,d;const f=t.topic,m=(c=t.ref)!==null&&c!==void 0?c:"",p=(d=t.join_ref)!==null&&d!==void 0?d:"",g=t.payload.event,K=this.allowedMetadataKeys?this._pick(t.payload,this.allowedMetadataKeys):{},w=Object.keys(K).length===0?"":JSON.stringify(K);if(p.length>255)throw new Error(`joinRef length ${p.length} exceeds maximum of 255`);if(m.length>255)throw new Error(`ref length ${m.length} exceeds maximum of 255`);if(f.length>255)throw new Error(`topic length ${f.length} exceeds maximum of 255`);if(g.length>255)throw new Error(`userEvent length ${g.length} exceeds maximum of 255`);if(w.length>255)throw new Error(`metadata length ${w.length} exceeds maximum of 255`);const T=this.USER_BROADCAST_PUSH_META_LENGTH+p.length+m.length+f.length+g.length+w.length,A=new ArrayBuffer(this.HEADER_LENGTH+T);let R=new DataView(A),j=0;R.setUint8(j++,this.KINDS.userBroadcastPush),R.setUint8(j++,p.length),R.setUint8(j++,m.length),R.setUint8(j++,f.length),R.setUint8(j++,g.length),R.setUint8(j++,w.length),R.setUint8(j++,l),Array.from(p,G=>R.setUint8(j++,G.charCodeAt(0))),Array.from(m,G=>R.setUint8(j++,G.charCodeAt(0))),Array.from(f,G=>R.setUint8(j++,G.charCodeAt(0))),Array.from(g,G=>R.setUint8(j++,G.charCodeAt(0))),Array.from(w,G=>R.setUint8(j++,G.charCodeAt(0)));var L=new Uint8Array(A.byteLength+r.byteLength);return L.set(new Uint8Array(A),0),L.set(new Uint8Array(r),A.byteLength),L.buffer}decode(t,l){if(this._isArrayBuffer(t)){let r=this._binaryDecode(t);return l(r)}if(typeof t=="string"){const r=JSON.parse(t),[c,d,f,m,p]=r;return l({join_ref:c,ref:d,topic:f,event:m,payload:p})}return l({})}_binaryDecode(t){const l=new DataView(t),r=l.getUint8(0),c=new TextDecoder;switch(r){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(t,l,c)}}_decodeUserBroadcast(t,l,r){const c=l.getUint8(1),d=l.getUint8(2),f=l.getUint8(3),m=l.getUint8(4);let p=this.HEADER_LENGTH+4;const g=r.decode(t.slice(p,p+c));p=p+c;const K=r.decode(t.slice(p,p+d));p=p+d;const w=r.decode(t.slice(p,p+f));p=p+f;const T=t.slice(p,t.byteLength),A=m===this.JSON_ENCODING?JSON.parse(r.decode(T)):T,R={type:this.BROADCAST_EVENT,event:K,payload:A};return f>0&&(R.meta=JSON.parse(w)),{join_ref:null,ref:null,topic:g,event:this.BROADCAST_EVENT,payload:R}}_isArrayBuffer(t){var l;return t instanceof ArrayBuffer||((l=t==null?void 0:t.constructor)===null||l===void 0?void 0:l.name)==="ArrayBuffer"}_pick(t,l){return!t||typeof t!="object"?{}:Object.fromEntries(Object.entries(t).filter(([r])=>l.includes(r)))}}var Oe;(function(a){a.abstime="abstime",a.bool="bool",a.date="date",a.daterange="daterange",a.float4="float4",a.float8="float8",a.int2="int2",a.int4="int4",a.int4range="int4range",a.int8="int8",a.int8range="int8range",a.json="json",a.jsonb="jsonb",a.money="money",a.numeric="numeric",a.oid="oid",a.reltime="reltime",a.text="text",a.time="time",a.timestamp="timestamp",a.timestamptz="timestamptz",a.timetz="timetz",a.tsrange="tsrange",a.tstzrange="tstzrange"})(Oe||(Oe={}));const zd=(a,t,l={})=>{var r;const c=(r=l.skipTypes)!==null&&r!==void 0?r:[];return t?Object.keys(t).reduce((d,f)=>(d[f]=hp(f,a,t,c),d),{}):{}},hp=(a,t,l,r)=>{const c=t.find(m=>m.name===a),d=c==null?void 0:c.type,f=l[a];return d&&!r.includes(d)?R3(d,f):po(f)},R3=(a,t)=>{if(a.charAt(0)==="_"){const l=a.slice(1,a.length);return yp(t,l)}switch(a){case Oe.bool:return pp(t);case Oe.float4:case Oe.float8:case Oe.int2:case Oe.int4:case Oe.int8:case Oe.numeric:case Oe.oid:return mp(t);case Oe.json:case Oe.jsonb:return gp(t);case Oe.timestamp:return wp(t);case Oe.abstime:case Oe.date:case Oe.daterange:case Oe.int4range:case Oe.int8range:case Oe.money:case Oe.reltime:case Oe.text:case Oe.time:case Oe.timestamptz:case Oe.timetz:case Oe.tsrange:case Oe.tstzrange:return po(t);default:return po(t)}},po=a=>a,pp=a=>{switch(a){case"t":return!0;case"f":return!1;default:return a}},mp=a=>{if(typeof a=="string"){const t=parseFloat(a);if(!Number.isNaN(t))return t}return a},gp=a=>{if(typeof a=="string")try{return JSON.parse(a)}catch{return a}return a},yp=(a,t)=>{if(typeof a!="string")return a;const l=a.length-1,r=a[l];if(a[0]==="{"&&r==="}"){let d;const f=a.slice(1,l);try{d=JSON.parse("["+f+"]")}catch{d=f?f.split(","):[]}return d.map(m=>R3(t,m))}return a},wp=a=>typeof a=="string"?a.replace(" ","T"):a,C3=a=>{const t=new URL(a);return t.protocol=t.protocol.replace(/^ws/i,"http"),t.pathname=t.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),t.pathname===""||t.pathname==="/"?t.pathname="/api/broadcast":t.pathname=t.pathname+"/api/broadcast",t.href};var Ds=a=>typeof a=="function"?a:function(){return a},Kp=typeof self<"u"?self:null,Ra=typeof window<"u"?window:null,rt=Kp||Ra||globalThis,vp="2.0.0",bp=1e4,_p=1e3,ot={connecting:0,open:1,closing:2,closed:3},vn={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Rt={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},mo={longpoll:"longpoll",websocket:"websocket"},kp={complete:4},go="base64url.bearer.phx.",h0=class{constructor(a,t,l,r){this.channel=a,this.event=t,this.payload=l||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(a){this.timeout=a,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(a,t){return this.hasReceived(a)&&t(this.receivedResp.response),this.recHooks.push({status:a,callback:t}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:a,response:t,_ref:l}){this.recHooks.filter(r=>r.status===a).forEach(r=>r.callback(t))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,a=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=a,this.matchReceive(a)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(a){return this.receivedResp&&this.receivedResp.status===a}trigger(a,t){this.channel.trigger(this.refEvent,{status:a,response:t})}},M3=class{constructor(a,t){this.callback=a,this.timerCalc=t,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},Sp=class{constructor(a,t,l){this.state=vn.closed,this.topic=a,this.params=Ds(t||{}),this.socket=l,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new h0(this,Rt.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new M3(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=vn.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(r=>r.send()),this.pushBuffer=[]}),this.joinPush.receive("error",r=>{this.state=vn.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,r),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=vn.closed,this.socket.remove(this)}),this.onError(r=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,r),this.isJoining()&&this.joinPush.reset(),this.state=vn.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new h0(this,Rt.leave,Ds({}),this.timeout).send(),this.state=vn.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(Rt.reply,(r,c)=>{this.trigger(this.replyEventName(c),r)})}join(a=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=a,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(a=>a.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=vn.closed,this.bindings=[]}onClose(a){this.on(Rt.close,a)}onError(a){return this.on(Rt.error,t=>a(t))}on(a,t){let l=this.bindingRef++;return this.bindings.push({event:a,ref:l,callback:t}),l}off(a,t){this.bindings=this.bindings.filter(l=>!(l.event===a&&(typeof t>"u"||t===l.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(a,t,l=this.timeout){if(t=t||{},!this.joinedOnce)throw new Error(`tried to push '${a}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new h0(this,a,function(){return t},l);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(a=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=vn.leaving;let t=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(Rt.close,"leave")},l=new h0(this,Rt.leave,Ds({}),a);return l.receive("ok",()=>t()).receive("timeout",()=>t()),l.send(),this.canPush()||l.trigger("ok",{}),l}onMessage(a,t,l){return t}filterBindings(a,t,l){return!0}isMember(a,t,l,r){return this.topic!==a?!1:r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:a,event:t,payload:l,joinRef:r}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(a=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=vn.joining,this.joinPush.resend(a))}trigger(a,t,l,r){let c=this.onMessage(a,t,l,r);if(t&&!c)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let d=this.bindings.filter(f=>f.event===a&&this.filterBindings(f,t,l));for(let f=0;f<d.length;f++)d[f].callback(c,l,r||this.joinRef())}replyEventName(a){return`chan_reply_${a}`}isClosed(){return this.state===vn.closed}isErrored(){return this.state===vn.errored}isJoined(){return this.state===vn.joined}isJoining(){return this.state===vn.joining}isLeaving(){return this.state===vn.leaving}},_0=class{static request(a,t,l,r,c,d,f){if(rt.XDomainRequest){let m=new rt.XDomainRequest;return this.xdomainRequest(m,a,t,r,c,d,f)}else if(rt.XMLHttpRequest){let m=new rt.XMLHttpRequest;return this.xhrRequest(m,a,t,l,r,c,d,f)}else{if(rt.fetch&&rt.AbortController)return this.fetchRequest(a,t,l,r,c,d,f);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(a,t,l,r,c,d,f){let m={method:a,headers:l,body:r},p=null;return c&&(p=new AbortController,setTimeout(()=>p.abort(),c),m.signal=p.signal),rt.fetch(t,m).then(g=>g.text()).then(g=>this.parseJSON(g)).then(g=>f&&f(g)).catch(g=>{g.name==="AbortError"&&d?d():f&&f(null)}),p}static xdomainRequest(a,t,l,r,c,d,f){return a.timeout=c,a.open(t,l),a.onload=()=>{let m=this.parseJSON(a.responseText);f&&f(m)},d&&(a.ontimeout=d),a.onprogress=()=>{},a.send(r),a}static xhrRequest(a,t,l,r,c,d,f,m){a.open(t,l,!0),a.timeout=d;for(let[p,g]of Object.entries(r))a.setRequestHeader(p,g);return a.onerror=()=>m&&m(null),a.onreadystatechange=()=>{if(a.readyState===kp.complete&&m){let p=this.parseJSON(a.responseText);m(p)}},f&&(a.ontimeout=f),a.send(c),a}static parseJSON(a){if(!a||a==="")return null;try{return JSON.parse(a)}catch{return console&&console.log("failed to parse JSON response",a),null}}static serialize(a,t){let l=[];for(var r in a){if(!Object.prototype.hasOwnProperty.call(a,r))continue;let c=t?`${t}[${r}]`:r,d=a[r];typeof d=="object"?l.push(this.serialize(d,c)):l.push(encodeURIComponent(c)+"="+encodeURIComponent(d))}return l.join("&")}static appendParams(a,t){if(Object.keys(t).length===0)return a;let l=a.match(/\?/)?"&":"?";return`${a}${l}${this.serialize(t)}`}},Tp=a=>{let t="",l=new Uint8Array(a),r=l.byteLength;for(let c=0;c<r;c++)t+=String.fromCharCode(l[c]);return btoa(t)},Ea=class{constructor(a,t){t&&t.length===2&&t[1].startsWith(go)&&(this.authToken=atob(t[1].slice(go.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(a),this.readyState=ot.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(a){return a.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+mo.websocket),"$1/"+mo.longpoll)}endpointURL(){return _0.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(a,t,l){this.close(a,t,l),this.readyState=ot.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===ot.open||this.readyState===ot.connecting}poll(){const a={Accept:"application/json"};this.authToken&&(a["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",a,null,()=>this.ontimeout(),t=>{if(t){var{status:l,token:r,messages:c}=t;if(l===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=r}else l=0;switch(l){case 200:c.forEach(d=>{setTimeout(()=>this.onmessage({data:d}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=ot.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${l}`)}})}send(a){typeof a!="string"&&(a=Tp(a)),this.currentBatch?this.currentBatch.push(a):this.awaitingBatchAck?this.batchBuffer.push(a):(this.currentBatch=[a],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(a){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},a.join(`
`),()=>this.onerror("timeout"),t=>{this.awaitingBatchAck=!1,!t||t.status!==200?(this.onerror(t&&t.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(a,t,l){for(let c of this.reqs)c.abort();this.readyState=ot.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:a,reason:t,wasClean:l});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",r)):this.onclose(r)}ajax(a,t,l,r,c){let d,f=()=>{this.reqs.delete(d),r()};d=_0.request(a,this.endpointURL(),t,l,this.timeout,f,m=>{this.reqs.delete(d),this.isActive()&&c(m)}),this.reqs.add(d)}},Ep=class Is{constructor(t,l={}){let r=l.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=t,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,c=>{let{onJoin:d,onLeave:f,onSync:m}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Is.syncState(this.state,c,d,f),this.pendingDiffs.forEach(p=>{this.state=Is.syncDiff(this.state,p,d,f)}),this.pendingDiffs=[],m()}),this.channel.on(r.diff,c=>{let{onJoin:d,onLeave:f,onSync:m}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(c):(this.state=Is.syncDiff(this.state,c,d,f),m())})}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}list(t){return Is.list(this.state,t)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(t,l,r,c){let d=this.clone(t),f={},m={};return this.map(d,(p,g)=>{l[p]||(m[p]=g)}),this.map(l,(p,g)=>{let K=d[p];if(K){let w=g.metas.map(j=>j.phx_ref),T=K.metas.map(j=>j.phx_ref),A=g.metas.filter(j=>T.indexOf(j.phx_ref)<0),R=K.metas.filter(j=>w.indexOf(j.phx_ref)<0);A.length>0&&(f[p]=g,f[p].metas=A),R.length>0&&(m[p]=this.clone(K),m[p].metas=R)}else f[p]=g}),this.syncDiff(d,{joins:f,leaves:m},r,c)}static syncDiff(t,l,r,c){let{joins:d,leaves:f}=this.clone(l);return r||(r=function(){}),c||(c=function(){}),this.map(d,(m,p)=>{let g=t[m];if(t[m]=this.clone(p),g){let K=t[m].metas.map(T=>T.phx_ref),w=g.metas.filter(T=>K.indexOf(T.phx_ref)<0);t[m].metas.unshift(...w)}r(m,g,p)}),this.map(f,(m,p)=>{let g=t[m];if(!g)return;let K=p.metas.map(w=>w.phx_ref);g.metas=g.metas.filter(w=>K.indexOf(w.phx_ref)<0),c(m,g,p),g.metas.length===0&&delete t[m]}),t}static list(t,l){return l||(l=function(r,c){return c}),this.map(t,(r,c)=>l(r,c))}static map(t,l){return Object.getOwnPropertyNames(t).map(r=>l(r,t[r]))}static clone(t){return JSON.parse(JSON.stringify(t))}},p0={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(a,t){if(a.payload.constructor===ArrayBuffer)return t(this.binaryEncode(a));{let l=[a.join_ref,a.ref,a.topic,a.event,a.payload];return t(JSON.stringify(l))}},decode(a,t){if(a.constructor===ArrayBuffer)return t(this.binaryDecode(a));{let[l,r,c,d,f]=JSON.parse(a);return t({join_ref:l,ref:r,topic:c,event:d,payload:f})}},binaryEncode(a){let{join_ref:t,ref:l,event:r,topic:c,payload:d}=a,f=this.META_LENGTH+t.length+l.length+c.length+r.length,m=new ArrayBuffer(this.HEADER_LENGTH+f),p=new DataView(m),g=0;p.setUint8(g++,this.KINDS.push),p.setUint8(g++,t.length),p.setUint8(g++,l.length),p.setUint8(g++,c.length),p.setUint8(g++,r.length),Array.from(t,w=>p.setUint8(g++,w.charCodeAt(0))),Array.from(l,w=>p.setUint8(g++,w.charCodeAt(0))),Array.from(c,w=>p.setUint8(g++,w.charCodeAt(0))),Array.from(r,w=>p.setUint8(g++,w.charCodeAt(0)));var K=new Uint8Array(m.byteLength+d.byteLength);return K.set(new Uint8Array(m),0),K.set(new Uint8Array(d),m.byteLength),K.buffer},binaryDecode(a){let t=new DataView(a),l=t.getUint8(0),r=new TextDecoder;switch(l){case this.KINDS.push:return this.decodePush(a,t,r);case this.KINDS.reply:return this.decodeReply(a,t,r);case this.KINDS.broadcast:return this.decodeBroadcast(a,t,r)}},decodePush(a,t,l){let r=t.getUint8(1),c=t.getUint8(2),d=t.getUint8(3),f=this.HEADER_LENGTH+this.META_LENGTH-1,m=l.decode(a.slice(f,f+r));f=f+r;let p=l.decode(a.slice(f,f+c));f=f+c;let g=l.decode(a.slice(f,f+d));f=f+d;let K=a.slice(f,a.byteLength);return{join_ref:m,ref:null,topic:p,event:g,payload:K}},decodeReply(a,t,l){let r=t.getUint8(1),c=t.getUint8(2),d=t.getUint8(3),f=t.getUint8(4),m=this.HEADER_LENGTH+this.META_LENGTH,p=l.decode(a.slice(m,m+r));m=m+r;let g=l.decode(a.slice(m,m+c));m=m+c;let K=l.decode(a.slice(m,m+d));m=m+d;let w=l.decode(a.slice(m,m+f));m=m+f;let T=a.slice(m,a.byteLength),A={status:w,response:T};return{join_ref:p,ref:g,topic:K,event:Rt.reply,payload:A}},decodeBroadcast(a,t,l){let r=t.getUint8(1),c=t.getUint8(2),d=this.HEADER_LENGTH+2,f=l.decode(a.slice(d,d+r));d=d+r;let m=l.decode(a.slice(d,d+c));d=d+c;let p=a.slice(d,a.byteLength);return{join_ref:null,ref:null,topic:f,event:m,payload:p}}},Ap=class{constructor(a,t={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=t.timeout||bp,this.transport=t.transport||rt.WebSocket||Ea,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=t.longPollFallbackMs,this.fallbackTimer=null;let l=null;try{l=rt&&rt.sessionStorage}catch{}this.sessionStore=t.sessionStorage||l,this.establishedConnections=0,this.defaultEncoder=p0.encode.bind(p0),this.defaultDecoder=p0.decode.bind(p0),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=t.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==Ea?(this.encode=t.encode||this.defaultEncoder,this.decode=t.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let r=null;Ra&&Ra.addEventListener&&(Ra.addEventListener("pagehide",c=>{this.conn&&(this.disconnect(),r=this.connectClock)}),Ra.addEventListener("pageshow",c=>{r===this.connectClock&&(r=null,this.connect())}),Ra.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=t.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=t.autoSendHeartbeat??!0,this.heartbeatCallback=t.heartbeatCallback??(()=>{}),this.rejoinAfterMs=c=>t.rejoinAfterMs?t.rejoinAfterMs(c):[1e3,2e3,5e3][c-1]||1e4,this.reconnectAfterMs=c=>t.reconnectAfterMs?t.reconnectAfterMs(c):[10,50,100,150,200,250,500,1e3,2e3][c-1]||5e3,this.logger=t.logger||null,!this.logger&&t.debug&&(this.logger=(c,d,f)=>{console.log(`${c}: ${d}`,f)}),this.longpollerTimeout=t.longpollerTimeout||2e4,this.params=Ds(t.params||{}),this.endPoint=`${a}/${mo.websocket}`,this.vsn=t.vsn||vp,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new M3(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{t.beforeReconnect&&await t.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=t.authToken}getLongPollTransport(){return Ea}replaceTransport(a){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=a}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let a=_0.appendParams(_0.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return a.charAt(0)!=="/"?a:a.charAt(1)==="/"?`${this.protocol()}:${a}`:`${this.protocol()}://${location.host}${a}`}disconnect(a,t,l){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,a&&a()},t,l)}connect(a){a&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Ds(a)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==Ea?this.connectWithFallback(Ea,this.longPollFallbackMs):this.transportConnect())}log(a,t,l){this.logger&&this.logger(a,t,l)}hasLogger(){return this.logger!==null}onOpen(a){let t=this.makeRef();return this.stateChangeCallbacks.open.push([t,a]),t}onClose(a){let t=this.makeRef();return this.stateChangeCallbacks.close.push([t,a]),t}onError(a){let t=this.makeRef();return this.stateChangeCallbacks.error.push([t,a]),t}onMessage(a){let t=this.makeRef();return this.stateChangeCallbacks.message.push([t,a]),t}onHeartbeat(a){this.heartbeatCallback=a}ping(a){if(!this.isConnected())return!1;let t=this.makeRef(),l=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:t});let r=this.onMessage(c=>{c.ref===t&&(this.off([r]),a(Date.now()-l))});return!0}transportName(a){switch(a){case Ea:return"LongPoll";default:return a.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let a;this.authToken&&(a=["phoenix",`${go}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),a),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=t=>this.onConnError(t),this.conn.onmessage=t=>this.onConnMessage(t),this.conn.onclose=t=>this.onConnClose(t)}getSession(a){return this.sessionStore&&this.sessionStore.getItem(a)}storeSession(a,t){this.sessionStore&&this.sessionStore.setItem(a,t)}connectWithFallback(a,t=2500){clearTimeout(this.fallbackTimer);let l=!1,r=!0,c,d,f=this.transportName(a),m=p=>{this.log("transport",`falling back to ${f}...`,p),this.off([c,d]),r=!1,this.replaceTransport(a),this.transportConnect()};if(this.getSession(`phx:fallback:${f}`))return m("memorized");this.fallbackTimer=setTimeout(m,t),d=this.onError(p=>{this.log("transport","error",p),r&&!l&&(clearTimeout(this.fallbackTimer),m(p))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(l=!0,!r){let p=this.transportName(a);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${p}`,"true"),this.log("transport",`established ${p} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(m,t),this.ping(p=>{this.log("transport","connected to primary after",p),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(a){this.log("error","error in heartbeat callback",a)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),_p,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(a,t,l){if(!this.conn)return a&&a();const r=this.conn;this.waitForBufferDone(r,()=>{t?r.close(t,l||""):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),a&&a()})})}waitForBufferDone(a,t,l=1){if(l===5||!a.bufferedAmount){t();return}setTimeout(()=>{this.waitForBufferDone(a,t,l+1)},150*l)}waitForSocketClosed(a,t,l=1){if(l===5||a.readyState===ot.closed){t();return}setTimeout(()=>{this.waitForSocketClosed(a,t,l+1)},150*l)}onConnClose(a){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",a),this.triggerChanError(a),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",a)}onConnError(a){this.hasLogger()&&this.log("transport","error",a);let t=this.transport,l=this.establishedConnections;this.triggerStateCallbacks("error",a,t,l),(t===this.transport||l>0)&&this.triggerChanError(a)}triggerChanError(a){this.channels.forEach(t=>{t.isErrored()||t.isLeaving()||t.isClosed()||t.trigger(Rt.error,a)})}connectionState(){switch(this.conn&&this.conn.readyState){case ot.connecting:return"connecting";case ot.open:return"open";case ot.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(a){this.off(a.stateChangeRefs),this.channels=this.channels.filter(t=>t!==a)}off(a){for(let t in this.stateChangeCallbacks)this.stateChangeCallbacks[t]=this.stateChangeCallbacks[t].filter(([l])=>a.indexOf(l)===-1)}channel(a,t={}){let l=new Sp(a,t,this);return this.channels.push(l),l}push(a){if(this.hasLogger()){let{topic:t,event:l,payload:r,ref:c,join_ref:d}=a;this.log("push",`${t} ${l} (${d}, ${c})`,r)}this.isConnected()?this.encode(a,t=>this.conn.send(t)):this.sendBuffer.push(()=>this.encode(a,t=>this.conn.send(t)))}makeRef(){let a=this.ref+1;return a===this.ref?this.ref=0:this.ref=a,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(a){this.log("error","error in heartbeat callback",a)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(a){this.log("error","error in heartbeat callback",a)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(a=>a()),this.sendBuffer=[])}onConnMessage(a){this.decode(a.data,t=>{let{topic:l,event:r,payload:c,ref:d,join_ref:f}=t;if(d&&d===this.pendingHeartbeatRef){const m=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(c.status==="ok"?"ok":"error",m)}catch(p){this.log("error","error in heartbeat callback",p)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${c.status||""} ${l} ${r} ${d&&"("+d+")"||""}`.trim(),c);for(let m=0;m<this.channels.length;m++){const p=this.channels[m];p.isMember(l,r,c,f)&&p.trigger(r,c,d,f)}this.triggerStateCallbacks("message",t)})}triggerStateCallbacks(a,...t){try{this.stateChangeCallbacks[a].forEach(([l,r])=>{try{r(...t)}catch(c){this.log("error",`error in ${a} callback`,c)}})}catch(l){this.log("error",`error triggering ${a} callbacks`,l)}}leaveOpenTopic(a){let t=this.channels.find(l=>l.topic===a&&(l.isJoined()||l.isJoining()));t&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${a}"`),t.leave())}};class Ns{constructor(t,l){const r=xp(l);this.presence=new Ep(t.getChannel(),r),this.presence.onJoin((c,d,f)=>{const m=Ns.onJoinPayload(c,d,f);t.getChannel().trigger("presence",m)}),this.presence.onLeave((c,d,f)=>{const m=Ns.onLeavePayload(c,d,f);t.getChannel().trigger("presence",m)}),this.presence.onSync(()=>{t.getChannel().trigger("presence",{event:"sync"})})}get state(){return Ns.transformState(this.presence.state)}static transformState(t){return t=qp(t),Object.getOwnPropertyNames(t).reduce((l,r)=>{const c=t[r];return l[r]=b0(c),l},{})}static onJoinPayload(t,l,r){const c=Hd(l),d=b0(r);return{event:"join",key:t,currentPresences:c,newPresences:d}}static onLeavePayload(t,l,r){const c=Hd(l),d=b0(r);return{event:"leave",key:t,currentPresences:c,leftPresences:d}}}function b0(a){return a.metas.map(t=>(t.presence_ref=t.phx_ref,delete t.phx_ref,delete t.phx_ref_prev,t))}function qp(a){return JSON.parse(JSON.stringify(a))}function xp(a){return(a==null?void 0:a.events)&&{events:a.events}}function Hd(a){return a!=null&&a.metas?b0(a):[]}var Ld;(function(a){a.SYNC="sync",a.JOIN="join",a.LEAVE="leave"})(Ld||(Ld={}));class Op{get state(){return this.presenceAdapter.state}constructor(t,l){this.channel=t,this.presenceAdapter=new Ns(this.channel.channelAdapter,l)}}function Rp(a){if(a instanceof Error)return a;if(typeof a=="string")return new Error(a);if(a&&typeof a=="object"){const t=a;if(typeof t.code=="number"){const l=typeof t.reason=="string"&&t.reason?` (${t.reason})`:"";return new Error(`socket closed: ${t.code}${l}`,{cause:a})}return new Error("channel error: transport failure",{cause:a})}return new Error("channel error: connection lost")}class Cp{constructor(t,l,r){const c=Mp(r);this.channel=t.getSocket().channel(l,c),this.socket=t}get state(){return this.channel.state}set state(t){this.channel.state=t}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(t,l){return this.channel.on(t,l)}off(t,l){this.channel.off(t,l)}subscribe(t){return this.channel.join(t)}unsubscribe(t){return this.channel.leave(t)}teardown(){this.channel.teardown()}onClose(t){this.channel.onClose(t)}onError(t){return this.channel.onError(t)}push(t,l,r){let c;try{c=this.channel.push(t,l,r)}catch{throw new Error(`tried to push '${t}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>dp){const d=this.channel.pushBuffer.shift();d.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${d.event}`,d.payload())}return c}updateJoinPayload(t){const l=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},l),t)}canPush(){return this.socket.isConnected()&&this.state===oi.joined}isJoined(){return this.state===oi.joined}isJoining(){return this.state===oi.joining}isClosed(){return this.state===oi.closed}isLeaving(){return this.state===oi.leaving}updateFilterBindings(t){this.channel.filterBindings=t}updatePayloadTransform(t){this.channel.onMessage=t}getChannel(){return this.channel}}function Mp(a){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},a.config)}}const Ip=/[,()"\\]/,Pp=a=>Ip.test(a)||a!==a.trim(),jp=a=>`"${a.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`,Vd=a=>{const t=a===null?"null":String(a);return Pp(t)?jp(t):t},Dp=a=>a===null?"null":String(a),Np=(a,t)=>{if(a==="in"){const l=Array.isArray(t)?t:[t];if(l.length===0)throw new Error("Realtime `in` filter requires at least one value.");return`in.(${Array.from(new Set(l)).map(c=>Vd(c)).join(",")})`}return a==="is"?`is.${Dp(t)}`:`${a}.${Vd(t)}`};class Bp{constructor(){this.filters=[]}add(t,l,r,c=!1){const d=c?"not.":"";return this.filters.push(`${t}=${d}${Np(l,r)}`),this}eq(t,l){return this.add(t,"eq",l)}neq(t,l){return this.add(t,"neq",l)}gt(t,l){return this.add(t,"gt",l)}gte(t,l){return this.add(t,"gte",l)}lt(t,l){return this.add(t,"lt",l)}lte(t,l){return this.add(t,"lte",l)}in(t,l){return this.add(t,"in",l)}like(t,l){return this.add(t,"like",l)}ilike(t,l){return this.add(t,"ilike",l)}match(t,l){return this.add(t,"match",l)}imatch(t,l){return this.add(t,"imatch",l)}is(t,l){return this.add(t,"is",l)}isDistinct(t,l){return this.add(t,"isdistinct",l)}not(t,l,r){return this.add(t,l,r,!0)}build(){return this.filters.join(",")}toString(){return this.build()}}var $d;(function(a){a.ALL="*",a.INSERT="INSERT",a.UPDATE="UPDATE",a.DELETE="DELETE"})($d||($d={}));var Ma;(function(a){a.BROADCAST="broadcast",a.PRESENCE="presence",a.POSTGRES_CHANGES="postgres_changes",a.SYSTEM="system"})(Ma||(Ma={}));var Ct;(function(a){a.SUBSCRIBED="SUBSCRIBED",a.TIMED_OUT="TIMED_OUT",a.CLOSED="CLOSED",a.CHANNEL_ERROR="CHANNEL_ERROR"})(Ct||(Ct={}));class Bs{get state(){return this.channelAdapter.state}set state(t){this.channelAdapter.state=t}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(t,l={config:{}},r){var c,d;if(this.topic=t,this.params=l,this.socket=r,this.bindings={},this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},l.config),this.channelAdapter=new Cp(this.socket.socketAdapter,t,this.params),this.presence=new Op(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=C3(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((d=(c=this.params.config)===null||c===void 0?void 0:c.broadcast)===null||d===void 0)&&d.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(t,l=this.timeout){var r,c,d;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:f,presence:m,private:p}}=this.params,g=(c=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(A=>A.filter))!==null&&c!==void 0?c:[],K=!!this.bindings[Ma.PRESENCE]&&this.bindings[Ma.PRESENCE].length>0||((d=this.params.config.presence)===null||d===void 0?void 0:d.enabled)===!0,w={},T={broadcast:f,presence:Object.assign(Object.assign({},m),{enabled:K}),postgres_changes:g,private:p};this.socket.accessTokenValue&&(w.access_token=this.socket.accessTokenValue),this._onError(A=>{t==null||t(Ct.CHANNEL_ERROR,Rp(A))}),this._onClose(()=>t==null?void 0:t(Ct.CLOSED)),this.updateJoinPayload(Object.assign({config:T},w)),this._updateFilterMessage(),this.channelAdapter.subscribe(l).receive("ok",async({postgres_changes:A})=>{if(this.socket._isManualToken()||this.socket.setAuth(),A===void 0){t==null||t(Ct.SUBSCRIBED);return}this._updatePostgresBindings(A,t)}).receive("error",A=>{this.state=oi.errored;const R=Object.values(A).join(", ")||"error";t==null||t(Ct.CHANNEL_ERROR,new Error(R,{cause:A}))}).receive("timeout",()=>{t==null||t(Ct.TIMED_OUT)})}return this}_updatePostgresBindings(t,l){var r;const c=this.bindings.postgres_changes,d=(r=c==null?void 0:c.length)!==null&&r!==void 0?r:0,f=[];for(let m=0;m<d;m++){const p=c[m],{filter:{event:g,schema:K,table:w,filter:T}}=p,A=t&&t[m];if(A&&A.event===g&&Bs.isFilterValueEqual(A.schema,K)&&Bs.isFilterValueEqual(A.table,w)&&Bs.isFilterValueEqual(A.filter,T))f.push(Object.assign(Object.assign({},p),{id:A.id}));else{this.unsubscribe(),this.state=oi.errored,l==null||l(Ct.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=f,this.state!=oi.errored&&l&&l(Ct.SUBSCRIBED)}presenceState(){return this.presence.state}async track(t,l={}){return await this.send({type:"presence",event:"track",payload:t},l.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,l,r){const c=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),d=t===Ma.PRESENCE||t===Ma.POSTGRES_CHANGES;if(c&&d)throw this.socket.log("channel",`cannot add \`${t}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${t}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(t,l,r)}async httpSend(t,l,r={}){var c;if(l==null)return Promise.reject(new Error("Payload is required for httpSend()"));const d=l instanceof ArrayBuffer||ArrayBuffer.isView(l),f={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":d?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(f.Authorization=`Bearer ${this.socket.accessTokenValue}`);const m=new URL(this.broadcastEndpointURL);m.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(t)}`,this.private&&m.searchParams.set("private","true");const p={method:"POST",headers:f,body:d?l:JSON.stringify(l)},g=await this._fetchWithTimeout(m.toString(),p,(c=r.timeout)!==null&&c!==void 0?c:this.timeout);if(g.status===202)return{success:!0};if(g.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let K=g.statusText;try{const w=await g.json();K=w.error||w.message||K}catch{}return Promise.reject(new Error(K))}async send(t,l={}){var r,c;if(!this.channelAdapter.canPush()&&t.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:d,payload:f}=t,m={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(m.Authorization=`Bearer ${this.socket.accessTokenValue}`);const p={method:"POST",headers:m,body:JSON.stringify({messages:[{topic:this.subTopic,event:d,payload:f,private:this.private}]})};try{const g=await this._fetchWithTimeout(this.broadcastEndpointURL,p,(r=l.timeout)!==null&&r!==void 0?r:this.timeout);return await((c=g.body)===null||c===void 0?void 0:c.cancel()),g.ok?"ok":"error"}catch(g){return g instanceof Error&&g.name==="AbortError"?"timed out":"error"}}else return new Promise(d=>{var f,m,p;const g=this.channelAdapter.push(t.type,t,l.timeout||this.timeout);t.type==="broadcast"&&!(!((p=(m=(f=this.params)===null||f===void 0?void 0:f.config)===null||m===void 0?void 0:m.broadcast)===null||p===void 0)&&p.ack)&&d("ok"),g.receive("ok",()=>d("ok")),g.receive("error",()=>d("error")),g.receive("timeout",()=>d("timed out"))})}updateJoinPayload(t){this.channelAdapter.updateJoinPayload(t)}async unsubscribe(t=this.timeout){return new Promise(l=>{this.channelAdapter.unsubscribe(t).receive("ok",()=>l("ok")).receive("timeout",()=>l("timed out")).receive("error",()=>l("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(t,l,r){const c=new AbortController,d=setTimeout(()=>c.abort(),r),f=await this.socket.fetch(t,Object.assign(Object.assign({},l),{signal:c.signal}));return clearTimeout(d),f}_on(t,l,r){const c=t.toLocaleLowerCase(),d=l==null?void 0:l.filter;(d instanceof Bp||typeof d=="object"&&d!==null&&typeof d.build=="function")&&(l=Object.assign(Object.assign({},l),{filter:d.build()}));const f=this.channelAdapter.on(t,r),m={type:c,filter:l,callback:r,ref:f};return this.bindings[c]?this.bindings[c].push(m):this.bindings[c]=[m],this._updateFilterMessage(),this}_onClose(t){this.channelAdapter.onClose(t)}_onError(t){this.channelAdapter.onError(t)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((t,l,r)=>{var c,d,f,m,p,g,K;const w=t.event.toLocaleLowerCase();if(this._notThisChannelEvent(w,r))return!1;const T=(c=this.bindings[w])===null||c===void 0?void 0:c.find(A=>A.ref===t.ref);if(!T)return!0;if(["broadcast","presence","postgres_changes"].includes(w))if("id"in T){const A=T.id,R=(d=T.filter)===null||d===void 0?void 0:d.event;return A&&((f=l.ids)===null||f===void 0?void 0:f.includes(A))&&(R==="*"||(R==null?void 0:R.toLocaleLowerCase())===((m=l.data)===null||m===void 0?void 0:m.type.toLocaleLowerCase()))}else{const A=(g=(p=T==null?void 0:T.filter)===null||p===void 0?void 0:p.event)===null||g===void 0?void 0:g.toLocaleLowerCase();return A==="*"||A===((K=l==null?void 0:l.event)===null||K===void 0?void 0:K.toLocaleLowerCase())}else return T.type.toLocaleLowerCase()===w})}_notThisChannelEvent(t,l){const{close:r,error:c,leave:d,join:f}=O3;return l&&[r,c,d,f].includes(t)&&l!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((t,l,r)=>{if(typeof l=="object"&&"ids"in l){const c=l.data,{schema:d,table:f,commit_timestamp:m,type:p,errors:g}=c;return Object.assign(Object.assign({},{schema:d,table:f,commit_timestamp:m,eventType:p,new:{},old:{},errors:g}),this._getPayloadRecords(c))}return l})}copyBindings(t){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const l in t.bindings)for(const r of t.bindings[l])this._on(r.type,r.filter,r.callback)}static isFilterValueEqual(t,l){return(t??void 0)===(l??void 0)}_getPayloadRecords(t){const l={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(l.new=zd(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(l.old=zd(t.columns,t.old_record)),l}}class Up{constructor(t,l){this.socket=new Ap(t,l)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(t){this.socket.heartbeatCallback=t}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(t,l,r,c=1e4){return new Promise(d=>{setTimeout(()=>d("timeout"),c),this.socket.disconnect(()=>{t(),d("ok")},l,r)})}push(t){this.socket.push(t)}log(t,l,r){this.socket.log(t,l,r)}makeRef(){return this.socket.makeRef()}onOpen(t){this.socket.onOpen(t)}onClose(t){this.socket.onClose(t)}onError(t){this.socket.onError(t)}onMessage(t){this.socket.onMessage(t)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==ho.connecting}isDisconnecting(){return this.socket.connectionState()==ho.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const Gd={HEARTBEAT_INTERVAL:25e3},zp=[1e3,2e3,5e3,1e4],Hp=1e4;function Lp(){const a=new Map;return{get length(){return a.size},clear(){a.clear()},getItem(t){return a.has(t)?a.get(t):null},key(t){var l;return(l=Array.from(a.keys())[t])!==null&&l!==void 0?l:null},removeItem(t){a.delete(t)},setItem(t,l){a.set(t,String(l))}}}function Vp(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return Lp()}const $p=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Gp{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(t,l){var r;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new fp,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=d=>d?(...f)=>d(...f):(...f)=>fetch(...f),!(!((r=l==null?void 0:l.params)===null||r===void 0)&&r.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=l.params.apikey;const c=this._initializeOptions(l);this.socketAdapter=new Up(t,c),this.httpEndpoint=C3(t),this.fetch=this._resolveFetch(l==null?void 0:l.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(t){const l=t.message;throw l.includes("Node.js")?new Error(`${l}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${l}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(t,l){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},t,l)}getChannels(){return this.channels}async removeChannel(t){const l=await t.unsubscribe();return l==="ok"&&t.teardown(),l}async removeAllChannels(){const t=this.channels.map(async r=>{const c=await r.unsubscribe();return r.teardown(),c}),l=await Promise.all(t);return await this.disconnect(),l}log(t,l,r){this.socketAdapter.log(t,l,r)}connectionState(){return this.socketAdapter.connectionState()||ho.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(t,l={config:{}}){const r=`realtime:${t}`,c=this.getChannels().find(d=>d.topic===r);if(c)return c;{const d=new Bs(`realtime:${t}`,l,this);return this._cancelPendingDisconnect(),this.channels.push(d),d}}push(t){this.socketAdapter.push(t)}async setAuth(t=null){this._authPromise=this._performAuth(t);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(t){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(t)}_makeRef(){return this.socketAdapter.makeRef()}_remove(t){this.channels=this.channels.filter(l=>l.topic!==t.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(t=null){let l,r=!1;if(t)l=t,r=!0;else if(this.accessToken)try{l=await this.accessToken()}catch(c){this.log("error","Error fetching access token from callback",c),l=this.accessTokenValue}else l=this.accessTokenValue;r?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=l&&(this.accessTokenValue=l,this.channels.forEach(c=>{const d={access_token:l,version:rp};l&&c.updateJoinPayload(d),c.joinedOnce&&c.channelAdapter.isJoined()&&c.channelAdapter.push(O3.access_token,{access_token:l})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(t="general"){this._isManualToken()||this.setAuth().catch(l=>{this.log("error",`Error setting auth in ${t}`,l)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(l=>{this.log("error","error waiting for auth on connect",l)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(t=>{t.ref&&t.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(t){return(l,r)=>{l=="sent"&&this._setAuthSafely(),t&&t(l,r)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const t=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(t),this.workerRef.onerror=l=>{this.log("worker","worker error",l.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=l=>{l.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(t){let l;if(t)l=t;else{const r=new Blob([$p],{type:"application/javascript"});l=URL.createObjectURL(r)}return l}_initializeOptions(t){var l,r,c,d,f,m,p,g,K,w,T,A;this.worker=(l=t==null?void 0:t.worker)!==null&&l!==void 0?l:!1,this.accessToken=(r=t==null?void 0:t.accessToken)!==null&&r!==void 0?r:null;const R={};R.timeout=(c=t==null?void 0:t.timeout)!==null&&c!==void 0?c:cp,R.heartbeatIntervalMs=(d=t==null?void 0:t.heartbeatIntervalMs)!==null&&d!==void 0?d:Gd.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(f=t==null?void 0:t.disconnectOnEmptyChannelsAfterMs)!==null&&f!==void 0?f:2*((m=t==null?void 0:t.heartbeatIntervalMs)!==null&&m!==void 0?m:Gd.HEARTBEAT_INTERVAL),R.transport=(p=t==null?void 0:t.transport)!==null&&p!==void 0?p:sp.getWebSocketConstructor(),R.params=t==null?void 0:t.params,R.logger=t==null?void 0:t.logger,R.heartbeatCallback=this._wrapHeartbeatCallback(t==null?void 0:t.heartbeatCallback),R.sessionStorage=(g=t==null?void 0:t.sessionStorage)!==null&&g!==void 0?g:Vp(),R.reconnectAfterMs=(K=t==null?void 0:t.reconnectAfterMs)!==null&&K!==void 0?K:(H=>zp[H-1]||Hp);let j,L;const G=(w=t==null?void 0:t.vsn)!==null&&w!==void 0?w:up;switch(G){case op:j=(H,z)=>z(JSON.stringify(H)),L=(H,z)=>z(JSON.parse(H));break;case x3:j=this.serializer.encode.bind(this.serializer),L=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${R.vsn}`)}if(R.vsn=G,R.encode=(T=t==null?void 0:t.encode)!==null&&T!==void 0?T:j,R.decode=(A=t==null?void 0:t.decode)!==null&&A!==void 0?A:L,R.beforeReconnect=this._reconnectAuth.bind(this),(t!=null&&t.logLevel||t!=null&&t.log_level)&&(this.logLevel=t.logLevel||t.log_level,R.params=Object.assign(Object.assign({},R.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=t==null?void 0:t.workerUrl,R.autoSendHeartbeat=!this.worker}return R}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var zs=class extends Error{constructor(a,t){var l;super(a),this.name="IcebergError",this.status=t.status,this.icebergType=t.icebergType,this.icebergCode=t.icebergCode,this.details=t.details,this.isCommitStateUnknown=t.icebergType==="CommitStateUnknownException"||[500,502,504].includes(t.status)&&((l=t.icebergType)==null?void 0:l.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function Zp(a,t,l){const r=new URL(t,a);if(l)for(const[c,d]of Object.entries(l))d!==void 0&&r.searchParams.set(c,d);return r.toString()}async function Yp(a){return!a||a.type==="none"?{}:a.type==="bearer"?{Authorization:`Bearer ${a.token}`}:a.type==="header"?{[a.name]:a.value}:a.type==="custom"?await a.getHeaders():{}}function Jp(a){const t=a.fetchImpl??globalThis.fetch;return{async request({method:l,path:r,query:c,body:d,headers:f}){const m=Zp(a.baseUrl,r,c),p=await Yp(a.auth),g=await t(m,{method:l,headers:{...d?{"Content-Type":"application/json"}:{},...p,...f},body:d?JSON.stringify(d):void 0}),K=await g.text(),w=(g.headers.get("content-type")||"").includes("application/json"),T=w&&K?JSON.parse(K):K;if(!g.ok){const A=w?T:void 0,R=A==null?void 0:A.error;throw new zs((R==null?void 0:R.message)??`Request failed with status ${g.status}`,{status:g.status,icebergType:R==null?void 0:R.type,icebergCode:R==null?void 0:R.code,details:A})}return{status:g.status,headers:g.headers,data:T}}}}function m0(a){return a.join("")}var Xp=class{constructor(a,t=""){this.client=a,this.prefix=t}async listNamespaces(a){const t=a?{parent:m0(a.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:t})).data.namespaces.map(r=>({namespace:r}))}async createNamespace(a,t){const l={namespace:a.namespace,properties:t==null?void 0:t.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:l})).data}async dropNamespace(a){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${m0(a.namespace)}`})}async loadNamespaceMetadata(a){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${m0(a.namespace)}`})).data.properties}}async namespaceExists(a){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${m0(a.namespace)}`}),!0}catch(t){if(t instanceof zs&&t.status===404)return!1;throw t}}async createNamespaceIfNotExists(a,t){try{return await this.createNamespace(a,t)}catch(l){if(l instanceof zs&&l.status===409)return;throw l}}};function Aa(a){return a.join("")}var Qp=class{constructor(a,t="",l){this.client=a,this.prefix=t,this.accessDelegation=l}async listTables(a){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Aa(a.namespace)}/tables`})).data.identifiers}async createTable(a,t){const l={};return this.accessDelegation&&(l["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Aa(a.namespace)}/tables`,body:t,headers:l})).data.metadata}async updateTable(a,t){const l=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Aa(a.namespace)}/tables/${a.name}`,body:t});return{"metadata-location":l.data["metadata-location"],metadata:l.data.metadata}}async dropTable(a,t){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Aa(a.namespace)}/tables/${a.name}`,query:{purgeRequested:String((t==null?void 0:t.purge)??!1)}})}async loadTable(a){const t={};return this.accessDelegation&&(t["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Aa(a.namespace)}/tables/${a.name}`,headers:t})).data.metadata}async tableExists(a){const t={};this.accessDelegation&&(t["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Aa(a.namespace)}/tables/${a.name}`,headers:t}),!0}catch(l){if(l instanceof zs&&l.status===404)return!1;throw l}}async createTableIfNotExists(a,t){try{return await this.createTable(a,t)}catch(l){if(l instanceof zs&&l.status===409)return await this.loadTable({namespace:a.namespace,name:t.name});throw l}}},Fp=class{constructor(a){var r;let t="v1";a.catalogName&&(t+=`/${a.catalogName}`);const l=a.baseUrl.endsWith("/")?a.baseUrl:`${a.baseUrl}/`;this.client=Jp({baseUrl:l,auth:a.auth,fetchImpl:a.fetch}),this.accessDelegation=(r=a.accessDelegation)==null?void 0:r.join(","),this.namespaceOps=new Xp(this.client,t),this.tableOps=new Qp(this.client,t,this.accessDelegation)}async listNamespaces(a){return this.namespaceOps.listNamespaces(a)}async createNamespace(a,t){return this.namespaceOps.createNamespace(a,t)}async dropNamespace(a){await this.namespaceOps.dropNamespace(a)}async loadNamespaceMetadata(a){return this.namespaceOps.loadNamespaceMetadata(a)}async listTables(a){return this.tableOps.listTables(a)}async createTable(a,t){return this.tableOps.createTable(a,t)}async updateTable(a,t){return this.tableOps.updateTable(a,t)}async dropTable(a,t){await this.tableOps.dropTable(a,t)}async loadTable(a){return this.tableOps.loadTable(a)}async namespaceExists(a){return this.namespaceOps.namespaceExists(a)}async tableExists(a){return this.tableOps.tableExists(a)}async createNamespaceIfNotExists(a,t){return this.namespaceOps.createNamespaceIfNotExists(a,t)}async createTableIfNotExists(a,t){return this.tableOps.createTableIfNotExists(a,t)}};function Hs(a){"@babel/helpers - typeof";return Hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hs(a)}function Wp(a,t){if(Hs(a)!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var r=l.call(a,t);if(Hs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function e5(a){var t=Wp(a,"string");return Hs(t)=="symbol"?t:t+""}function n5(a,t,l){return(t=e5(t))in a?Object.defineProperty(a,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[t]=l,a}function Zd(a,t){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),l.push.apply(l,r)}return l}function ie(a){for(var t=1;t<arguments.length;t++){var l=arguments[t]!=null?arguments[t]:{};t%2?Zd(Object(l),!0).forEach(function(r){n5(a,r,l[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):Zd(Object(l)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(l,r))})}return a}var I0=class extends Error{constructor(a,t="storage",l,r){super(a),this.__isStorageError=!0,this.namespace=t,this.name=t==="vectors"?"StorageVectorsError":"StorageError",this.status=l,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function P0(a){return typeof a=="object"&&a!==null&&"__isStorageError"in a}var yo=class extends I0{constructor(a,t,l,r="storage"){super(a,r,t,l),this.name=r==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=t,this.statusCode=l}toJSON(){return ie({},super.toJSON())}},I3=class extends I0{constructor(a,t,l="storage"){super(a,l),this.name=l==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=t}};function k0(a,t,l){const r=ie({},a),c=t.toLowerCase();for(const d of Object.keys(r))d.toLowerCase()===c&&delete r[d];return r[c]=l,r}function t5(a){const t={};for(const[l,r]of Object.entries(a))t[l.toLowerCase()]=r;return t}const i5=a=>a?(...t)=>a(...t):(...t)=>fetch(...t),a5=a=>{if(typeof a!="object"||a===null)return!1;const t=Object.getPrototypeOf(a);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)},wo=a=>{if(Array.isArray(a))return a.map(l=>wo(l));if(typeof a=="function"||a!==Object(a))return a;const t={};return Object.entries(a).forEach(([l,r])=>{const c=l.replace(/([-_][a-z])/gi,d=>d.toUpperCase().replace(/[-_]/g,""));t[c]=wo(r)}),t},s5=a=>!a||typeof a!="string"||a.length===0||a.length>100||a.trim()!==a||a.includes("/")||a.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(a),Yd=a=>{if(typeof a=="object"&&a!==null){const t=a;if(typeof t.msg=="string")return t.msg;if(typeof t.message=="string")return t.message;if(typeof t.error_description=="string")return t.error_description;if(typeof t.error=="string")return t.error;if(typeof t.error=="object"&&t.error!==null){const l=t.error;if(typeof l.message=="string")return l.message}}return JSON.stringify(a)},l5=async(a,t,l,r)=>{if(a!==null&&typeof a=="object"&&"json"in a&&typeof a.json=="function"){const c=a;let d=parseInt(String(c.status),10);Number.isFinite(d)||(d=500),c.json().then(f=>{const m=(f==null?void 0:f.statusCode)||(f==null?void 0:f.code)||d+"";t(new yo(Yd(f),d,m,r))}).catch(()=>{const f=d+"";t(new yo(c.statusText||`HTTP ${d} error`,d,f,r))})}else t(new I3(Yd(a),a,r))},r5=(a,t,l,r)=>{const c={method:a,headers:(t==null?void 0:t.headers)||{}};if(a==="GET"||a==="HEAD"||!r)return ie(ie({},c),l);if(a5(r)){var d;const f=(t==null?void 0:t.headers)||{};let m;for(const[p,g]of Object.entries(f))p.toLowerCase()==="content-type"&&(m=g);c.headers=k0(f,"Content-Type",(d=m)!==null&&d!==void 0?d:"application/json"),c.body=JSON.stringify(r)}else c.body=r;return t!=null&&t.duplex&&(c.duplex=t.duplex),ie(ie({},c),l)};async function Cs(a,t,l,r,c,d,f){return new Promise((m,p)=>{a(l,r5(t,r,c,d)).then(g=>{if(!g.ok)throw g;if(r!=null&&r.noResolveJson)return g;if(f==="vectors"){const K=g.headers.get("content-type");if(g.headers.get("content-length")==="0"||g.status===204)return{};if(!K||!K.includes("application/json"))return{}}return g.json()}).then(g=>m(g)).catch(g=>l5(g,p,r,f))})}function P3(a="storage"){return{get:async(t,l,r,c)=>Cs(t,"GET",l,r,c,void 0,a),post:async(t,l,r,c,d)=>Cs(t,"POST",l,c,d,r,a),put:async(t,l,r,c,d)=>Cs(t,"PUT",l,c,d,r,a),head:async(t,l,r,c)=>Cs(t,"HEAD",l,ie(ie({},r),{},{noResolveJson:!0}),c,void 0,a),remove:async(t,l,r,c,d)=>Cs(t,"DELETE",l,c,d,r,a)}}const o5=P3("storage"),{get:Ls,post:Wn,put:Ko,head:u5,remove:Vs}=o5,Rn=P3("vectors");var Pa=class{constructor(a,t={},l,r="storage"){this.shouldThrowOnError=!1,this.url=a,this.headers=t5(t),this.fetch=i5(l),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(a,t){return this.headers=k0(this.headers,a,t),this}async handleOperation(a){var t=this;try{return{data:await a(),error:null}}catch(l){if(t.shouldThrowOnError)throw l;if(P0(l))return{data:null,error:l};throw l}}};let j3;j3=Symbol.toStringTag;var c5=class{constructor(a,t){this.downloadFn=a,this.shouldThrowOnError=t,this[j3]="StreamDownloadBuilder",this.promise=null}then(a,t){return this.getPromise().then(a,t)}catch(a){return this.getPromise().catch(a)}finally(a){return this.getPromise().finally(a)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var a=this;try{return{data:(await a.downloadFn()).body,error:null}}catch(t){if(a.shouldThrowOnError)throw t;if(P0(t))return{data:null,error:t};throw t}}};let D3;D3=Symbol.toStringTag;var d5=class{constructor(a,t){this.downloadFn=a,this.shouldThrowOnError=t,this[D3]="BlobDownloadBuilder",this.promise=null}asStream(){return new c5(this.downloadFn,this.shouldThrowOnError)}then(a,t){return this.getPromise().then(a,t)}catch(a){return this.getPromise().catch(a)}finally(a){return this.getPromise().finally(a)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var a=this;try{return{data:await(await a.downloadFn()).blob(),error:null}}catch(t){if(a.shouldThrowOnError)throw t;if(P0(t))return{data:null,error:t};throw t}}};const to={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Jd={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var f5=class extends Pa{constructor(a,t={},l,r){super(a,t,r,"storage"),this.bucketId=l}async uploadOrUpdate(a,t,l,r){var c=this;return c.handleOperation(async()=>{let d;const f=ie(ie({},Jd),r);let m=ie(ie({},c.headers),a==="POST"&&{"x-upsert":String(f.upsert)});const p=f.metadata;if(typeof Blob<"u"&&l instanceof Blob?(d=new FormData,d.append("cacheControl",f.cacheControl),p&&d.append("metadata",c.encodeMetadata(p)),d.append("",l)):typeof FormData<"u"&&l instanceof FormData?(d=l,d.has("cacheControl")||d.append("cacheControl",f.cacheControl),p&&!d.has("metadata")&&d.append("metadata",c.encodeMetadata(p))):(d=l,m["cache-control"]=`max-age=${f.cacheControl}`,m["content-type"]=f.contentType,p&&(m["x-metadata"]=c.toBase64(c.encodeMetadata(p))),(typeof ReadableStream<"u"&&d instanceof ReadableStream||d&&typeof d=="object"&&"pipe"in d&&typeof d.pipe=="function")&&!f.duplex&&(f.duplex="half")),r!=null&&r.headers)for(const[T,A]of Object.entries(r.headers))m=k0(m,T,A);const g=c._removeEmptyFolders(t),K=c._getFinalPath(g),w=await(a=="PUT"?Ko:Wn)(c.fetch,`${c.url}/object/${K}`,d,ie({headers:m},f!=null&&f.duplex?{duplex:f.duplex}:{}));return{path:g,id:w.Id,fullPath:w.Key}})}async upload(a,t,l){return this.uploadOrUpdate("POST",a,t,l)}async uploadToSignedUrl(a,t,l,r){var c=this;const d=c._removeEmptyFolders(a),f=c._getFinalPath(d),m=new URL(c.url+`/object/upload/sign/${f}`);return m.searchParams.set("token",t),c.handleOperation(async()=>{let p;const g=ie(ie({},Jd),r);let K=ie(ie({},c.headers),{"x-upsert":String(g.upsert)});const w=g.metadata;if(typeof Blob<"u"&&l instanceof Blob?(p=new FormData,p.append("cacheControl",g.cacheControl),w&&p.append("metadata",c.encodeMetadata(w)),p.append("",l)):typeof FormData<"u"&&l instanceof FormData?(p=l,p.has("cacheControl")||p.append("cacheControl",g.cacheControl),w&&!p.has("metadata")&&p.append("metadata",c.encodeMetadata(w))):(p=l,K["cache-control"]=`max-age=${g.cacheControl}`,K["content-type"]=g.contentType,w&&(K["x-metadata"]=c.toBase64(c.encodeMetadata(w))),(typeof ReadableStream<"u"&&p instanceof ReadableStream||p&&typeof p=="object"&&"pipe"in p&&typeof p.pipe=="function")&&!g.duplex&&(g.duplex="half")),r!=null&&r.headers)for(const[T,A]of Object.entries(r.headers))K=k0(K,T,A);return{path:d,fullPath:(await Ko(c.fetch,m.toString(),p,ie({headers:K},g!=null&&g.duplex?{duplex:g.duplex}:{}))).Key}})}async createSignedUploadUrl(a,t){var l=this;return l.handleOperation(async()=>{let r=l._getFinalPath(a);const c=ie({},l.headers);t!=null&&t.upsert&&(c["x-upsert"]="true");const d=await Wn(l.fetch,`${l.url}/object/upload/sign/${r}`,{},{headers:c}),f=new URL(l.url+d.url),m=f.searchParams.get("token");if(!m)throw new I0("No token returned by API");return{signedUrl:f.toString(),path:a,token:m}})}async update(a,t,l){return this.uploadOrUpdate("PUT",a,t,l)}async move(a,t,l){var r=this;return r.handleOperation(async()=>await Wn(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:a,destinationKey:t,destinationBucket:l==null?void 0:l.destinationBucket},{headers:r.headers}))}async copy(a,t,l){var r=this;return r.handleOperation(async()=>({path:(await Wn(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:a,destinationKey:t,destinationBucket:l==null?void 0:l.destinationBucket},{headers:r.headers})).Key}))}async createSignedUrl(a,t,l){var r=this;return r.handleOperation(async()=>{let c=r._getFinalPath(a);const d=typeof(l==null?void 0:l.transform)=="object"&&l.transform!==null&&Object.keys(l.transform).length>0;let f=await Wn(r.fetch,`${r.url}/object/sign/${c}`,ie({expiresIn:t},d?{transform:l.transform}:{}),{headers:r.headers});const m=new URLSearchParams;l!=null&&l.download&&m.set("download",l.download===!0?"":l.download),(l==null?void 0:l.cacheNonce)!=null&&m.set("cacheNonce",String(l.cacheNonce));const p=m.toString();return{signedUrl:encodeURI(`${r.url}${f.signedURL}${p?`&${p}`:""}`)}})}async createSignedUrls(a,t,l){var r=this;return r.handleOperation(async()=>{const c=await Wn(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:t,paths:a},{headers:r.headers}),d=new URLSearchParams;l!=null&&l.download&&d.set("download",l.download===!0?"":l.download),(l==null?void 0:l.cacheNonce)!=null&&d.set("cacheNonce",String(l.cacheNonce));const f=d.toString();return c.map(m=>ie(ie({},m),{},{signedUrl:m.signedURL?encodeURI(`${r.url}${m.signedURL}${f?`&${f}`:""}`):null}))})}download(a,t,l){const r=typeof(t==null?void 0:t.transform)=="object"&&t.transform!==null&&Object.keys(t.transform).length>0?"render/image/authenticated":"object",c=new URLSearchParams;t!=null&&t.transform&&this.applyTransformOptsToQuery(c,t.transform),(t==null?void 0:t.cacheNonce)!=null&&c.set("cacheNonce",String(t.cacheNonce));const d=c.toString(),f=this._getFinalPath(a),m=()=>Ls(this.fetch,`${this.url}/${r}/${f}${d?`?${d}`:""}`,{headers:this.headers,noResolveJson:!0},l);return new d5(m,this.shouldThrowOnError)}async info(a){var t=this;const l=t._getFinalPath(a);return t.handleOperation(async()=>wo(await Ls(t.fetch,`${t.url}/object/info/${l}`,{headers:t.headers})))}async exists(a){var t=this;const l=t._getFinalPath(a);try{return await u5(t.fetch,`${t.url}/object/${l}`,{headers:t.headers}),{data:!0,error:null}}catch(c){if(t.shouldThrowOnError)throw c;if(P0(c)){var r;const d=c instanceof yo?c.status:c instanceof I3?(r=c.originalError)===null||r===void 0?void 0:r.status:void 0;if(d!==void 0&&[400,404].includes(d))return{data:!1,error:c}}throw c}}getPublicUrl(a,t){const l=this._getFinalPath(a),r=new URLSearchParams;t!=null&&t.download&&r.set("download",t.download===!0?"":t.download),t!=null&&t.transform&&this.applyTransformOptsToQuery(r,t.transform),(t==null?void 0:t.cacheNonce)!=null&&r.set("cacheNonce",String(t.cacheNonce));const c=r.toString(),d=typeof(t==null?void 0:t.transform)=="object"&&t.transform!==null&&Object.keys(t.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${d}/public/${l}`)+(c?`?${c}`:"")}}}async remove(a){var t=this;return t.handleOperation(async()=>await Vs(t.fetch,`${t.url}/object/${t.bucketId}`,{prefixes:a},{headers:t.headers}))}async purgeCache(a,t,l){var r=this;return r.handleOperation(async()=>{const c=r._getFinalPath(a),d=new URLSearchParams;t!=null&&t.transformations&&d.set("transformations","true");const f=d.toString();return await Vs(r.fetch,`${r.url}/cdn/${c}${f?`?${f}`:""}`,{},{headers:r.headers},l)})}async list(a,t,l){var r=this;return r.handleOperation(async()=>{const c=t!=null&&t.sortBy?ie(ie({},to.sortBy),t.sortBy):to.sortBy,d=ie(ie(ie({},to),t),{},{sortBy:c,prefix:a||""});return await Wn(r.fetch,`${r.url}/object/list/${r.bucketId}`,d,{headers:r.headers},l)})}async listV2(a,t){var l=this;return l.handleOperation(async()=>{const r=ie({},a);return await Wn(l.fetch,`${l.url}/object/list-v2/${l.bucketId}`,r,{headers:l.headers},t)})}encodeMetadata(a){return JSON.stringify(a)}toBase64(a){return typeof Buffer<"u"?Buffer.from(a).toString("base64"):btoa(a)}_getFinalPath(a){return`${this.bucketId}/${a.replace(/^\/+/,"")}`}_removeEmptyFolders(a){return a.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(a,t){return t.width&&a.set("width",t.width.toString()),t.height&&a.set("height",t.height.toString()),t.resize&&a.set("resize",t.resize),t.format&&a.set("format",t.format),t.quality&&a.set("quality",t.quality.toString()),a}};const h5="2.109.0",Js={"X-Client-Info":`storage-js/${h5}`};var p5=class extends Pa{constructor(a,t={},l,r){const c=new URL(a);r!=null&&r.useNewHostname&&/supabase\.(co|in|red)$/.test(c.hostname)&&!c.hostname.includes("storage.supabase.")&&(c.hostname=c.hostname.replace("supabase.","storage.supabase."));const d=c.href.replace(/\/$/,""),f=ie(ie({},Js),t);super(d,f,l,"storage")}async listBuckets(a){var t=this;return t.handleOperation(async()=>{const l=t.listBucketOptionsToQueryString(a);return await Ls(t.fetch,`${t.url}/bucket${l}`,{headers:t.headers})})}async getBucket(a){var t=this;return t.handleOperation(async()=>await Ls(t.fetch,`${t.url}/bucket/${a}`,{headers:t.headers}))}async createBucket(a,t={public:!1}){var l=this;return l.handleOperation(async()=>await Wn(l.fetch,`${l.url}/bucket`,{id:a,name:a,type:t.type,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:l.headers}))}async updateBucket(a,t){var l=this;return l.handleOperation(async()=>await Ko(l.fetch,`${l.url}/bucket/${a}`,{id:a,name:a,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:l.headers}))}async emptyBucket(a){var t=this;return t.handleOperation(async()=>await Wn(t.fetch,`${t.url}/bucket/${a}/empty`,{},{headers:t.headers}))}async deleteBucket(a){var t=this;return t.handleOperation(async()=>await Vs(t.fetch,`${t.url}/bucket/${a}`,{},{headers:t.headers}))}async purgeBucketCache(a,t,l){var r=this;return r.handleOperation(async()=>{const c=new URLSearchParams;t!=null&&t.transformations&&c.set("transformations","true");const d=c.toString();return await Vs(r.fetch,`${r.url}/cdn/${a}${d?`?${d}`:""}`,{},{headers:r.headers},l)})}listBucketOptionsToQueryString(a){const t={};return a&&("limit"in a&&(t.limit=String(a.limit)),"offset"in a&&(t.offset=String(a.offset)),a.search&&(t.search=a.search),a.sortColumn&&(t.sortColumn=a.sortColumn),a.sortOrder&&(t.sortOrder=a.sortOrder)),Object.keys(t).length>0?"?"+new URLSearchParams(t).toString():""}},m5=class extends Pa{constructor(a,t={},l){const r=a.replace(/\/$/,""),c=ie(ie({},Js),t);super(r,c,l,"storage")}async createBucket(a){var t=this;return t.handleOperation(async()=>await Wn(t.fetch,`${t.url}/bucket`,{name:a},{headers:t.headers}))}async listBuckets(a){var t=this;return t.handleOperation(async()=>{const l=new URLSearchParams;(a==null?void 0:a.limit)!==void 0&&l.set("limit",a.limit.toString()),(a==null?void 0:a.offset)!==void 0&&l.set("offset",a.offset.toString()),a!=null&&a.sortColumn&&l.set("sortColumn",a.sortColumn),a!=null&&a.sortOrder&&l.set("sortOrder",a.sortOrder),a!=null&&a.search&&l.set("search",a.search);const r=l.toString(),c=r?`${t.url}/bucket?${r}`:`${t.url}/bucket`;return await Ls(t.fetch,c,{headers:t.headers})})}async deleteBucket(a){var t=this;return t.handleOperation(async()=>await Vs(t.fetch,`${t.url}/bucket/${a}`,{},{headers:t.headers}))}from(a){var t=this;if(!s5(a))throw new I0("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const l=new Fp({baseUrl:this.url,catalogName:a,auth:{type:"custom",getHeaders:async()=>t.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(l,{get(c,d){const f=c[d];return typeof f!="function"?f:async(...m)=>{try{return{data:await f.apply(c,m),error:null}}catch(p){if(r)throw p;return{data:null,error:p}}}}})}},g5=class extends Pa{constructor(a,t={},l){const r=a.replace(/\/$/,""),c=ie(ie({},Js),{},{"Content-Type":"application/json"},t);super(r,c,l,"vectors")}async createIndex(a){var t=this;return t.handleOperation(async()=>await Rn.post(t.fetch,`${t.url}/CreateIndex`,a,{headers:t.headers})||{})}async getIndex(a,t){var l=this;return l.handleOperation(async()=>await Rn.post(l.fetch,`${l.url}/GetIndex`,{vectorBucketName:a,indexName:t},{headers:l.headers}))}async listIndexes(a){var t=this;return t.handleOperation(async()=>await Rn.post(t.fetch,`${t.url}/ListIndexes`,a,{headers:t.headers}))}async deleteIndex(a,t){var l=this;return l.handleOperation(async()=>await Rn.post(l.fetch,`${l.url}/DeleteIndex`,{vectorBucketName:a,indexName:t},{headers:l.headers})||{})}},y5=class extends Pa{constructor(a,t={},l){const r=a.replace(/\/$/,""),c=ie(ie({},Js),{},{"Content-Type":"application/json"},t);super(r,c,l,"vectors")}async putVectors(a){var t=this;if(a.vectors.length<1||a.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return t.handleOperation(async()=>await Rn.post(t.fetch,`${t.url}/PutVectors`,a,{headers:t.headers})||{})}async getVectors(a){var t=this;return t.handleOperation(async()=>await Rn.post(t.fetch,`${t.url}/GetVectors`,a,{headers:t.headers}))}async listVectors(a){var t=this;if(a.segmentCount!==void 0){if(a.segmentCount<1||a.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(a.segmentIndex!==void 0&&(a.segmentIndex<0||a.segmentIndex>=a.segmentCount))throw new Error(`segmentIndex must be between 0 and ${a.segmentCount-1}`)}return t.handleOperation(async()=>await Rn.post(t.fetch,`${t.url}/ListVectors`,a,{headers:t.headers}))}async queryVectors(a){var t=this;return t.handleOperation(async()=>await Rn.post(t.fetch,`${t.url}/QueryVectors`,a,{headers:t.headers}))}async deleteVectors(a){var t=this;if(a.keys.length<1||a.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return t.handleOperation(async()=>await Rn.post(t.fetch,`${t.url}/DeleteVectors`,a,{headers:t.headers})||{})}},w5=class extends Pa{constructor(a,t={},l){const r=a.replace(/\/$/,""),c=ie(ie({},Js),{},{"Content-Type":"application/json"},t);super(r,c,l,"vectors")}async createBucket(a){var t=this;return t.handleOperation(async()=>await Rn.post(t.fetch,`${t.url}/CreateVectorBucket`,{vectorBucketName:a},{headers:t.headers})||{})}async getBucket(a){var t=this;return t.handleOperation(async()=>await Rn.post(t.fetch,`${t.url}/GetVectorBucket`,{vectorBucketName:a},{headers:t.headers}))}async listBuckets(a={}){var t=this;return t.handleOperation(async()=>await Rn.post(t.fetch,`${t.url}/ListVectorBuckets`,a,{headers:t.headers}))}async deleteBucket(a){var t=this;return t.handleOperation(async()=>await Rn.post(t.fetch,`${t.url}/DeleteVectorBucket`,{vectorBucketName:a},{headers:t.headers})||{})}},K5=class extends w5{constructor(a,t={}){super(a,t.headers||{},t.fetch)}from(a){return new v5(this.url,this.headers,a,this.fetch)}async createBucket(a){var t=()=>super.createBucket,l=this;return t().call(l,a)}async getBucket(a){var t=()=>super.getBucket,l=this;return t().call(l,a)}async listBuckets(a={}){var t=()=>super.listBuckets,l=this;return t().call(l,a)}async deleteBucket(a){var t=()=>super.deleteBucket,l=this;return t().call(l,a)}},v5=class extends g5{constructor(a,t,l,r){super(a,t,r),this.vectorBucketName=l}async createIndex(a){var t=()=>super.createIndex,l=this;return t().call(l,ie(ie({},a),{},{vectorBucketName:l.vectorBucketName}))}async listIndexes(a={}){var t=()=>super.listIndexes,l=this;return t().call(l,ie(ie({},a),{},{vectorBucketName:l.vectorBucketName}))}async getIndex(a){var t=()=>super.getIndex,l=this;return t().call(l,l.vectorBucketName,a)}async deleteIndex(a){var t=()=>super.deleteIndex,l=this;return t().call(l,l.vectorBucketName,a)}index(a){return new b5(this.url,this.headers,this.vectorBucketName,a,this.fetch)}},b5=class extends y5{constructor(a,t,l,r,c){super(a,t,c),this.vectorBucketName=l,this.indexName=r}async putVectors(a){var t=()=>super.putVectors,l=this;return t().call(l,ie(ie({},a),{},{vectorBucketName:l.vectorBucketName,indexName:l.indexName}))}async getVectors(a){var t=()=>super.getVectors,l=this;return t().call(l,ie(ie({},a),{},{vectorBucketName:l.vectorBucketName,indexName:l.indexName}))}async listVectors(a={}){var t=()=>super.listVectors,l=this;return t().call(l,ie(ie({},a),{},{vectorBucketName:l.vectorBucketName,indexName:l.indexName}))}async queryVectors(a){var t=()=>super.queryVectors,l=this;return t().call(l,ie(ie({},a),{},{vectorBucketName:l.vectorBucketName,indexName:l.indexName}))}async deleteVectors(a){var t=()=>super.deleteVectors,l=this;return t().call(l,ie(ie({},a),{},{vectorBucketName:l.vectorBucketName,indexName:l.indexName}))}},_5=class extends p5{constructor(a,t={},l,r){super(a,t,l,r)}from(a){return new f5(this.url,this.headers,a,this.fetch)}get vectors(){return new K5(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new m5(this.url+"/iceberg",this.headers,this.fetch)}};const N3="2.109.0",Mt=30*1e3,Ps=3,io=Ps*Mt,k5=2*Mt,S5="http://localhost:9999",T5="supabase.auth.token",E5={"X-Client-Info":`gotrue-js/${N3}`},vo="X-Supabase-Api-Version",B3={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},A5=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,q5=600*1e3;class $s extends Error{constructor(t,l,r){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=l,this.code=r}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function Z(a){return typeof a=="object"&&a!==null&&"__isAuthError"in a}class x5 extends $s{constructor(t,l,r){super(t,l,r),this.name="AuthApiError",this.status=l,this.code=r}}function O5(a){return Z(a)&&a.name==="AuthApiError"}class et extends $s{constructor(t,l){super(t),this.name="AuthUnknownError",this.originalError=l}}class ut extends $s{constructor(t,l,r,c){super(t,r,c),this.name=l,this.status=r}}class We extends ut{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function g0(a){return Z(a)&&a.name==="AuthSessionMissingError"}class qa extends ut{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class y0 extends ut{constructor(t){super(t,"AuthInvalidCredentialsError",400,void 0)}}class w0 extends ut{constructor(t,l=null){super(t,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=l}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function R5(a){return Z(a)&&a.name==="AuthImplicitGrantRedirectError"}class Xd extends ut{constructor(t,l=null){super(t,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=l}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class C5 extends ut{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class bo extends ut{constructor(t,l){super(t,"AuthRetryableFetchError",l,void 0)}}function Qd(a){return Z(a)&&a.name==="AuthRetryableFetchError"}class Fd extends ut{constructor(t="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(t,"AuthRefreshDiscardedError",409,void 0)}}function M5(a){return Z(a)&&a.name==="AuthRefreshDiscardedError"}class Wd extends ut{constructor(t,l,r){super(t,"AuthWeakPasswordError",l,"weak_password"),this.reasons=r}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class S0 extends ut{constructor(t){super(t,"AuthInvalidJwtError",400,"invalid_jwt")}}const T0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),e3=` 	
\r=`.split(""),I5=(()=>{const a=new Array(128);for(let t=0;t<a.length;t+=1)a[t]=-1;for(let t=0;t<e3.length;t+=1)a[e3[t].charCodeAt(0)]=-2;for(let t=0;t<T0.length;t+=1)a[T0[t].charCodeAt(0)]=t;return a})();function n3(a,t,l){if(a!==null)for(t.queue=t.queue<<8|a,t.queuedBits+=8;t.queuedBits>=6;){const r=t.queue>>t.queuedBits-6&63;l(T0[r]),t.queuedBits-=6}else if(t.queuedBits>0)for(t.queue=t.queue<<6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;){const r=t.queue>>t.queuedBits-6&63;l(T0[r]),t.queuedBits-=6}}function U3(a,t,l){const r=I5[a];if(r>-1)for(t.queue=t.queue<<6|r,t.queuedBits+=6;t.queuedBits>=8;)l(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else{if(r===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(a)}"`)}}function t3(a){const t=[],l=f=>{t.push(String.fromCodePoint(f))},r={utf8seq:0,codepoint:0},c={queue:0,queuedBits:0},d=f=>{D5(f,r,l)};for(let f=0;f<a.length;f+=1)U3(a.charCodeAt(f),c,d);return t.join("")}function P5(a,t){if(a<=127){t(a);return}else if(a<=2047){t(192|a>>6),t(128|a&63);return}else if(a<=65535){t(224|a>>12),t(128|a>>6&63),t(128|a&63);return}else if(a<=1114111){t(240|a>>18),t(128|a>>12&63),t(128|a>>6&63),t(128|a&63);return}throw new Error(`Unrecognized Unicode codepoint: ${a.toString(16)}`)}function j5(a,t){for(let l=0;l<a.length;l+=1){let r=a.charCodeAt(l);if(r>55295&&r<=56319){const c=(r-55296)*1024&65535;r=(a.charCodeAt(l+1)-56320&65535|c)+65536,l+=1}P5(r,t)}}function D5(a,t,l){if(t.utf8seq===0){if(a<=127){l(a);return}for(let r=1;r<6;r+=1)if((a>>7-r&1)===0){t.utf8seq=r;break}if(t.utf8seq===2)t.codepoint=a&31;else if(t.utf8seq===3)t.codepoint=a&15;else if(t.utf8seq===4)t.codepoint=a&7;else throw new Error("Invalid UTF-8 sequence");t.utf8seq-=1}else if(t.utf8seq>0){if(a<=127)throw new Error("Invalid UTF-8 sequence");t.codepoint=t.codepoint<<6|a&63,t.utf8seq-=1,t.utf8seq===0&&l(t.codepoint)}}function Ia(a){const t=[],l={queue:0,queuedBits:0},r=c=>{t.push(c)};for(let c=0;c<a.length;c+=1)U3(a.charCodeAt(c),l,r);return new Uint8Array(t)}function N5(a){const t=[];return j5(a,l=>t.push(l)),new Uint8Array(t)}function Ii(a){const t=[],l={queue:0,queuedBits:0},r=c=>{t.push(c)};return a.forEach(c=>n3(c,l,r)),n3(null,l,r),t.join("")}function B5(a){return Math.round(Date.now()/1e3)+a}function U5(){return Symbol("auth-callback")}const un=()=>typeof window<"u"&&typeof document<"u",Oi={tested:!1,writable:!1},z3=()=>{if(!un())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Oi.tested)return Oi.writable;const a=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(a,a),globalThis.localStorage.removeItem(a),Oi.tested=!0,Oi.writable=!0}catch{Oi.tested=!0,Oi.writable=!1}return Oi.writable};function z5(a){const t={},l=new URL(a);if(l.hash&&l.hash[0]==="#")try{new URLSearchParams(l.hash.substring(1)).forEach((c,d)=>{t[d]=c})}catch{}return l.searchParams.forEach((r,c)=>{t[c]=r}),t}const H3=a=>a?(...t)=>a(...t):(...t)=>fetch(...t),H5=a=>typeof a=="object"&&a!==null&&"status"in a&&"ok"in a&&"json"in a&&typeof a.json=="function",Ca=async(a,t,l)=>{await a.setItem(t,JSON.stringify(l))},Xn=async(a,t)=>{const l=await a.getItem(t);if(!l)return null;try{return JSON.parse(l)}catch{return null}},ze=async(a,t)=>{await a.removeItem(t)};class j0{constructor(){this.promise=new j0.promiseConstructor((t,l)=>{this.resolve=t,this.reject=l})}}j0.promiseConstructor=Promise;function K0(a){const t=a.split(".");if(t.length!==3)throw new S0("Invalid JWT structure");for(let r=0;r<t.length;r++)if(!A5.test(t[r]))throw new S0("JWT not in base64url format");return{header:JSON.parse(t3(t[0])),payload:JSON.parse(t3(t[1])),signature:Ia(t[2]),raw:{header:t[0],payload:t[1]}}}async function L5(a){return await new Promise(t=>{setTimeout(()=>t(null),a)})}function V5(a,t){return new Promise((r,c)=>{(async()=>{for(let d=0;d<1/0;d++)try{const f=await a(d);if(!t(d,null,f)){r(f);return}}catch(f){if(!t(d,f)){c(f);return}}})()})}function $5(a){return("0"+a.toString(16)).substr(-2)}function G5(){const t=new Uint32Array(56);if(typeof crypto>"u"){const l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=l.length;let c="";for(let d=0;d<56;d++)c+=l.charAt(Math.floor(Math.random()*r));return c}return crypto.getRandomValues(t),Array.from(t,$5).join("")}async function Z5(a){const l=new TextEncoder().encode(a),r=await crypto.subtle.digest("SHA-256",l),c=new Uint8Array(r);return Array.from(c).map(d=>String.fromCharCode(d)).join("")}async function Y5(a){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),a;const l=await Z5(a);return btoa(l).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Ri(a,t,l=!1){const r=G5();let c=r;l&&(c+="/recovery"),await Ca(a,`${t}-code-verifier`,c);const d=await Y5(r);return[d,r===d?"plain":"s256"]}const J5=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function X5(a){const t=a.headers.get(vo);if(!t||!t.match(J5))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function Q5(a){if(!a)throw new Error("Missing exp claim");const t=Math.floor(Date.now()/1e3);if(a<=t)throw new Error("JWT has expired")}function F5(a){switch(a){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const W5=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function xt(a){if(!W5.test(a))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Qn(a){if(!a.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function ao(){const a={};return new Proxy(a,{get:(t,l)=>{if(l==="__isUserNotAvailableProxy")return!0;if(typeof l=="symbol"){const r=l.toString();if(r==="Symbol(Symbol.toPrimitive)"||r==="Symbol(Symbol.toStringTag)"||r==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${l}" property of the session object is not supported. Please use getUser() instead.`)},set:(t,l)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${l}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(t,l)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${l}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function em(a,t){return new Proxy(a,{get:(l,r,c)=>{if(r==="__isInsecureUserWarningProxy")return!0;if(typeof r=="symbol"){const d=r.toString();if(d==="Symbol(Symbol.toPrimitive)"||d==="Symbol(Symbol.toStringTag)"||d==="Symbol(util.inspect.custom)"||d==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(l,r,c)}return!t.value&&typeof r=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),t.value=!0),Reflect.get(l,r,c)}})}function i3(a){return JSON.parse(JSON.stringify(a))}const Mi=a=>{if(typeof a=="object"&&a!==null){const t=a;if(typeof t.msg=="string")return t.msg;if(typeof t.message=="string")return t.message;if(typeof t.error_description=="string")return t.error_description;if(typeof t.error=="string")return t.error}return JSON.stringify(a)},nm=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function a3(a){var t;if(!H5(a))throw new bo(Mi(a),0);if(nm.includes(a.status))throw new bo(Mi(a),a.status);let l;try{l=await a.json()}catch(d){throw new et(Mi(d),d)}let r;const c=X5(a);if(c&&c.getTime()>=B3["2024-01-01"].timestamp&&typeof l=="object"&&l&&typeof l.code=="string"?r=l.code:typeof l=="object"&&l&&typeof l.error_code=="string"&&(r=l.error_code),r){if(r==="weak_password")throw new Wd(Mi(l),a.status,((t=l.weak_password)===null||t===void 0?void 0:t.reasons)||[]);if(r==="session_not_found")throw new We}else if(typeof l=="object"&&l&&typeof l.weak_password=="object"&&l.weak_password&&Array.isArray(l.weak_password.reasons)&&l.weak_password.reasons.length&&l.weak_password.reasons.reduce((d,f)=>d&&typeof f=="string",!0))throw new Wd(Mi(l),a.status,l.weak_password.reasons);throw new x5(Mi(l),a.status||500,r)}const tm=(a,t,l,r)=>{const c={method:a,headers:(t==null?void 0:t.headers)||{}};return a==="GET"?c:(c.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),c.body=JSON.stringify(r),Object.assign(Object.assign({},c),l))};async function X(a,t,l,r){var c;const d=Object.assign({},r==null?void 0:r.headers);d[vo]||(d[vo]=B3["2024-01-01"].name),r!=null&&r.jwt&&(d.Authorization=`Bearer ${r.jwt}`);const f=(c=r==null?void 0:r.query)!==null&&c!==void 0?c:{};r!=null&&r.redirectTo&&(f.redirect_to=r.redirectTo);const m=Object.keys(f).length?"?"+new URLSearchParams(f).toString():"",p=await im(a,t,l+m,{headers:d,noResolveJson:r==null?void 0:r.noResolveJson},{},r==null?void 0:r.body);return r!=null&&r.xform?r==null?void 0:r.xform(p):{data:Object.assign({},p),error:null}}async function im(a,t,l,r,c,d){const f=tm(t,r,c,d);let m;try{m=await a(l,Object.assign({},f))}catch(p){throw console.error(p),new bo(Mi(p),0)}if(m.ok||await a3(m),r!=null&&r.noResolveJson)return m;try{return await m.json()}catch(p){await a3(p)}}function Vn(a){var t;let l=null;lm(a)&&(l=Object.assign({},a),a.expires_at||(l.expires_at=B5(a.expires_in)));const r=(t=a.user)!==null&&t!==void 0?t:typeof(a==null?void 0:a.id)=="string"?a:null;return{data:{session:l,user:r},error:null}}function s3(a){const t=Vn(a);return!t.error&&a.weak_password&&typeof a.weak_password=="object"&&Array.isArray(a.weak_password.reasons)&&a.weak_password.reasons.length&&a.weak_password.message&&typeof a.weak_password.message=="string"&&a.weak_password.reasons.reduce((l,r)=>l&&typeof r=="string",!0)&&(t.data.weak_password=a.weak_password),t}function ui(a){var t;return{data:{user:(t=a.user)!==null&&t!==void 0?t:a},error:null}}function am(a){return{data:a,error:null}}function sm(a){const{action_link:t,email_otp:l,hashed_token:r,redirect_to:c,verification_type:d}=a,f=M0(a,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),m={action_link:t,email_otp:l,hashed_token:r,redirect_to:c,verification_type:d},p=Object.assign({},f);return{data:{properties:m,user:p},error:null}}function l3(a){return a}function lm(a){return!!a.access_token&&!!a.refresh_token&&!!a.expires_in}const so=["global","local","others"];class rm{constructor({url:t="",headers:l={},fetch:r,experimental:c}){this.url=t,this.headers=l,this.fetch=H3(r),this.experimental=c??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(t,l=so[0]){if(so.indexOf(l)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${so.join(", ")}`);try{return await X(this.fetch,"POST",`${this.url}/logout?scope=${l}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(r){if(Z(r))return{data:null,error:r};throw r}}async inviteUserByEmail(t,l={}){try{return await X(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:l.data},headers:this.headers,redirectTo:l.redirectTo,xform:ui})}catch(r){if(Z(r))return{data:{user:null},error:r};throw r}}async generateLink(t){try{const{options:l}=t,r=M0(t,["options"]),c=Object.assign(Object.assign({},r),l);return"newEmail"in r&&(c.new_email=r==null?void 0:r.newEmail,delete c.newEmail),await X(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:c,headers:this.headers,xform:sm,redirectTo:l==null?void 0:l.redirectTo})}catch(l){if(Z(l))return{data:{properties:null,user:null},error:l};throw l}}async createUser(t){try{return await X(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:ui})}catch(l){if(Z(l))return{data:{user:null},error:l};throw l}}async listUsers(t){var l,r,c,d,f,m,p;try{const g={nextPage:null,lastPage:0,total:0},K=await X(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(l=t==null?void 0:t.page)===null||l===void 0?void 0:l.toString())!==null&&r!==void 0?r:"",per_page:(d=(c=t==null?void 0:t.perPage)===null||c===void 0?void 0:c.toString())!==null&&d!==void 0?d:""},xform:l3});if(K.error)throw K.error;const w=await K.json(),T=(f=K.headers.get("x-total-count"))!==null&&f!==void 0?f:0,A=(p=(m=K.headers.get("link"))===null||m===void 0?void 0:m.split(","))!==null&&p!==void 0?p:[];return A.length>0&&(A.forEach(R=>{const j=parseInt(R.split(";")[0].split("=")[1].substring(0,1)),L=JSON.parse(R.split(";")[1].split("=")[1]);g[`${L}Page`]=j}),g.total=parseInt(T)),{data:Object.assign(Object.assign({},w),g),error:null}}catch(g){if(Z(g))return{data:{users:[]},error:g};throw g}}async getUserById(t){xt(t);try{return await X(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:ui})}catch(l){if(Z(l))return{data:{user:null},error:l};throw l}}async updateUserById(t,l){xt(t);try{return await X(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:l,headers:this.headers,xform:ui})}catch(r){if(Z(r))return{data:{user:null},error:r};throw r}}async deleteUser(t,l=!1){xt(t);try{return await X(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:l},xform:ui})}catch(r){if(Z(r))return{data:{user:null},error:r};throw r}}async _listFactors(t){xt(t.userId);try{const{data:l,error:r}=await X(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:c=>({data:{factors:c},error:null})});return{data:l,error:r}}catch(l){if(Z(l))return{data:null,error:l};throw l}}async _deleteFactor(t){xt(t.userId),xt(t.id);try{return{data:await X(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(l){if(Z(l))return{data:null,error:l};throw l}}async _listOAuthClients(t){var l,r,c,d,f,m,p;try{const g={nextPage:null,lastPage:0,total:0},K=await X(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(l=t==null?void 0:t.page)===null||l===void 0?void 0:l.toString())!==null&&r!==void 0?r:"",per_page:(d=(c=t==null?void 0:t.perPage)===null||c===void 0?void 0:c.toString())!==null&&d!==void 0?d:""},xform:l3});if(K.error)throw K.error;const w=await K.json(),T=(f=K.headers.get("x-total-count"))!==null&&f!==void 0?f:0,A=(p=(m=K.headers.get("link"))===null||m===void 0?void 0:m.split(","))!==null&&p!==void 0?p:[];return A.length>0&&(A.forEach(R=>{const j=parseInt(R.split(";")[0].split("=")[1].substring(0,1)),L=JSON.parse(R.split(";")[1].split("=")[1]);g[`${L}Page`]=j}),g.total=parseInt(T)),{data:Object.assign(Object.assign({},w),g),error:null}}catch(g){if(Z(g))return{data:{clients:[]},error:g};throw g}}async _createOAuthClient(t){try{return await X(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:t,headers:this.headers,xform:l=>({data:l,error:null})})}catch(l){if(Z(l))return{data:null,error:l};throw l}}async _getOAuthClient(t){try{return await X(this.fetch,"GET",`${this.url}/admin/oauth/clients/${t}`,{headers:this.headers,xform:l=>({data:l,error:null})})}catch(l){if(Z(l))return{data:null,error:l};throw l}}async _updateOAuthClient(t,l){try{return await X(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${t}`,{body:l,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(Z(r))return{data:null,error:r};throw r}}async _deleteOAuthClient(t){try{return await X(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${t}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(l){if(Z(l))return{data:null,error:l};throw l}}async _regenerateOAuthClientSecret(t){try{return await X(this.fetch,"POST",`${this.url}/admin/oauth/clients/${t}/regenerate_secret`,{headers:this.headers,xform:l=>({data:l,error:null})})}catch(l){if(Z(l))return{data:null,error:l};throw l}}async _listCustomProviders(t){try{const l={};return t!=null&&t.type&&(l.type=t.type),await X(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:l,xform:r=>{var c;return{data:{providers:(c=r==null?void 0:r.providers)!==null&&c!==void 0?c:[]},error:null}}})}catch(l){if(Z(l))return{data:{providers:[]},error:l};throw l}}async _createCustomProvider(t){try{return await X(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:t,headers:this.headers,xform:l=>({data:l,error:null})})}catch(l){if(Z(l))return{data:null,error:l};throw l}}async _getCustomProvider(t){try{return await X(this.fetch,"GET",`${this.url}/admin/custom-providers/${t}`,{headers:this.headers,xform:l=>({data:l,error:null})})}catch(l){if(Z(l))return{data:null,error:l};throw l}}async _updateCustomProvider(t,l){try{return await X(this.fetch,"PUT",`${this.url}/admin/custom-providers/${t}`,{body:l,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(Z(r))return{data:null,error:r};throw r}}async _deleteCustomProvider(t){try{return await X(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${t}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(l){if(Z(l))return{data:null,error:l};throw l}}async _adminListPasskeys(t){Qn(this.experimental),xt(t.userId);try{return await X(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/passkeys`,{headers:this.headers,xform:l=>({data:l,error:null})})}catch(l){if(Z(l))return{data:null,error:l};throw l}}async _adminDeletePasskey(t){Qn(this.experimental),xt(t.userId),xt(t.passkeyId);try{return await X(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/passkeys/${t.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(l){if(Z(l))return{data:null,error:l};throw l}}}function r3(a={}){return{getItem:t=>a[t]||null,setItem:(t,l)=>{a[t]=l},removeItem:t=>{delete a[t]}}}globalThis&&z3()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class om extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}function um(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function L3(a){if(!/^0x[a-fA-F0-9]{40}$/.test(a))throw new Error(`@supabase/auth-js: Address "${a}" is invalid.`);return a.toLowerCase()}function cm(a){return parseInt(a,16)}function dm(a){const t=new TextEncoder().encode(a);return"0x"+Array.from(t,r=>r.toString(16).padStart(2,"0")).join("")}function fm(a){var t;const{chainId:l,domain:r,expirationTime:c,issuedAt:d=new Date,nonce:f,notBefore:m,requestId:p,resources:g,scheme:K,uri:w,version:T}=a;{if(!Number.isInteger(l))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${l}`);if(!r)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(f&&f.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${f}`);if(!w)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(T!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${T}`);if(!((t=a.statement)===null||t===void 0)&&t.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${a.statement}`)}const A=L3(a.address),R=K?`${K}://${r}`:r,j=a.statement?`${a.statement}
`:"",L=`${R} wants you to sign in with your Ethereum account:
${A}

${j}`;let G=`URI: ${w}
Version: ${T}
Chain ID: ${l}${f?`
Nonce: ${f}`:""}
Issued At: ${d.toISOString()}`;if(c&&(G+=`
Expiration Time: ${c.toISOString()}`),m&&(G+=`
Not Before: ${m.toISOString()}`),p&&(G+=`
Request ID: ${p}`),g){let H=`
Resources:`;for(const z of g){if(!z||typeof z!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${z}`);H+=`
- ${z}`}G+=H}return`${L}
${G}`}class Ze extends Error{constructor({message:t,code:l,cause:r,name:c}){var d;super(t,{cause:r}),this.__isWebAuthnError=!0,this.name=(d=c??(r instanceof Error?r.name:void 0))!==null&&d!==void 0?d:"Unknown Error",this.code=l}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class E0 extends Ze{constructor(t,l){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:l,message:t}),this.name="WebAuthnUnknownError",this.originalError=l}}function hm({error:a,options:t}){var l,r,c;const{publicKey:d}=t;if(!d)throw Error("options was missing required publicKey property");if(a.name==="AbortError"){if(t.signal instanceof AbortSignal)return new Ze({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:a})}else if(a.name==="ConstraintError"){if(((l=d.authenticatorSelection)===null||l===void 0?void 0:l.requireResidentKey)===!0)return new Ze({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:a});if(t.mediation==="conditional"&&((r=d.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new Ze({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:a});if(((c=d.authenticatorSelection)===null||c===void 0?void 0:c.userVerification)==="required")return new Ze({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:a})}else{if(a.name==="InvalidStateError")return new Ze({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:a});if(a.name==="NotAllowedError")return new Ze({message:a.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:a});if(a.name==="NotSupportedError")return d.pubKeyCredParams.filter(m=>m.type==="public-key").length===0?new Ze({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:a}):new Ze({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:a});if(a.name==="SecurityError"){const f=window.location.hostname;if(V3(f)){if(d.rp.id!==f)return new Ze({message:`The RP ID "${d.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:a})}else return new Ze({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:a})}else if(a.name==="TypeError"){if(d.user.id.byteLength<1||d.user.id.byteLength>64)return new Ze({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:a})}else if(a.name==="UnknownError")return new Ze({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:a})}return new Ze({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:a})}function pm({error:a,options:t}){const{publicKey:l}=t;if(!l)throw Error("options was missing required publicKey property");if(a.name==="AbortError"){if(t.signal instanceof AbortSignal)return new Ze({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:a})}else{if(a.name==="NotAllowedError")return new Ze({message:a.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:a});if(a.name==="SecurityError"){const r=window.location.hostname;if(V3(r)){if(l.rpId!==r)return new Ze({message:`The RP ID "${l.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:a})}else return new Ze({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:a})}else if(a.name==="UnknownError")return new Ze({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:a})}return new Ze({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:a})}class mm{createNewAbortSignal(){if(this.controller){const l=new Error("Cancelling existing WebAuthn API call for new one");l.name="AbortError",this.controller.abort(l)}const t=new AbortController;return this.controller=t,t.signal}cancelCeremony(){if(this.controller){const t=new Error("Manually cancelling existing WebAuthn API call");t.name="AbortError",this.controller.abort(t),this.controller=void 0}}}const _o=new mm;function o3(a){if(!a)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(a);const{challenge:t,user:l,excludeCredentials:r}=a,c=M0(a,["challenge","user","excludeCredentials"]),d=Ia(t).buffer,f=Object.assign(Object.assign({},l),{id:Ia(l.id).buffer}),m=Object.assign(Object.assign({},c),{challenge:d,user:f});if(r&&r.length>0){m.excludeCredentials=new Array(r.length);for(let p=0;p<r.length;p++){const g=r[p];m.excludeCredentials[p]=Object.assign(Object.assign({},g),{id:Ia(g.id).buffer,type:g.type||"public-key",transports:g.transports})}}return m}function u3(a){if(!a)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(a);const{challenge:t,allowCredentials:l}=a,r=M0(a,["challenge","allowCredentials"]),c=Ia(t).buffer,d=Object.assign(Object.assign({},r),{challenge:c});if(l&&l.length>0){d.allowCredentials=new Array(l.length);for(let f=0;f<l.length;f++){const m=l[f];d.allowCredentials[f]=Object.assign(Object.assign({},m),{id:Ia(m.id).buffer,type:m.type||"public-key",transports:m.transports})}}return d}function c3(a){var t;if("toJSON"in a&&typeof a.toJSON=="function")return a.toJSON();const l=a;return{id:a.id,rawId:a.id,response:{attestationObject:Ii(new Uint8Array(a.response.attestationObject)),clientDataJSON:Ii(new Uint8Array(a.response.clientDataJSON))},type:"public-key",clientExtensionResults:a.getClientExtensionResults(),authenticatorAttachment:(t=l.authenticatorAttachment)!==null&&t!==void 0?t:void 0}}function d3(a){var t;if("toJSON"in a&&typeof a.toJSON=="function")return a.toJSON();const l=a,r=a.getClientExtensionResults(),c=a.response;return{id:a.id,rawId:a.id,response:{authenticatorData:Ii(new Uint8Array(c.authenticatorData)),clientDataJSON:Ii(new Uint8Array(c.clientDataJSON)),signature:Ii(new Uint8Array(c.signature)),userHandle:c.userHandle?Ii(new Uint8Array(c.userHandle)):void 0},type:"public-key",clientExtensionResults:r,authenticatorAttachment:(t=l.authenticatorAttachment)!==null&&t!==void 0?t:void 0}}function V3(a){return a==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(a)}function A0(){var a,t;return!!(un()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((a=navigator==null?void 0:navigator.credentials)===null||a===void 0?void 0:a.create)=="function"&&typeof((t=navigator==null?void 0:navigator.credentials)===null||t===void 0?void 0:t.get)=="function")}async function $3(a){try{const t=await navigator.credentials.create(a);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new E0("Browser returned unexpected credential type",t)}:{data:null,error:new E0("Empty credential response",t)}}catch(t){return{data:null,error:hm({error:t,options:a})}}}async function G3(a){try{const t=await navigator.credentials.get(a);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new E0("Browser returned unexpected credential type",t)}:{data:null,error:new E0("Empty credential response",t)}}catch(t){return{data:null,error:pm({error:t,options:a})}}}const gm={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},ym={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function q0(...a){const t=c=>c!==null&&typeof c=="object"&&!Array.isArray(c),l=c=>c instanceof ArrayBuffer||ArrayBuffer.isView(c),r={};for(const c of a)if(c)for(const d in c){const f=c[d];if(f!==void 0)if(Array.isArray(f))r[d]=f;else if(l(f))r[d]=f;else if(t(f)){const m=r[d];t(m)?r[d]=q0(m,f):r[d]=q0(f)}else r[d]=f}return r}function wm(a,t){return q0(gm,a,t||{})}function Km(a,t){return q0(ym,a,t||{})}class vm{constructor(t){this.client=t,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(t){return this.client.mfa.enroll(Object.assign(Object.assign({},t),{factorType:"webauthn"}))}async _challenge({factorId:t,webauthn:l,friendlyName:r,signal:c},d){var f;try{const{data:m,error:p}=await this.client.mfa.challenge({factorId:t,webauthn:l});if(!m)return{data:null,error:p};const g=c??_o.createNewAbortSignal();if(m.webauthn.type==="create"){const{user:K}=m.webauthn.credential_options.publicKey;if(!K.name){const w=r;if(w)K.name=`${K.id}:${w}`;else{const A=(await this.client.getUser()).data.user,R=((f=A==null?void 0:A.user_metadata)===null||f===void 0?void 0:f.name)||(A==null?void 0:A.email)||(A==null?void 0:A.id)||"User";K.name=`${K.id}:${R}`}}K.displayName||(K.displayName=K.name)}switch(m.webauthn.type){case"create":{const K=wm(m.webauthn.credential_options.publicKey,d==null?void 0:d.create),{data:w,error:T}=await $3({publicKey:K,signal:g});return w?{data:{factorId:t,challengeId:m.id,webauthn:{type:m.webauthn.type,credential_response:w}},error:null}:{data:null,error:T}}case"request":{const K=Km(m.webauthn.credential_options.publicKey,d==null?void 0:d.request),{data:w,error:T}=await G3(Object.assign(Object.assign({},m.webauthn.credential_options),{publicKey:K,signal:g}));return w?{data:{factorId:t,challengeId:m.id,webauthn:{type:m.webauthn.type,credential_response:w}},error:null}:{data:null,error:T}}}}catch(m){return Z(m)?{data:null,error:m}:{data:null,error:new et("Unexpected error in challenge",m)}}}async _verify({challengeId:t,factorId:l,webauthn:r}){return this.client.mfa.verify({factorId:l,challengeId:t,webauthn:r})}async _authenticate({factorId:t,webauthn:{rpId:l=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:c}={}},d){if(!l)return{data:null,error:new $s("rpId is required for WebAuthn authentication")};try{if(!A0())return{data:null,error:new et("Browser does not support WebAuthn",null)};const{data:f,error:m}=await this.challenge({factorId:t,webauthn:{rpId:l,rpOrigins:r},signal:c},{request:d});if(!f)return{data:null,error:m};const{webauthn:p}=f;return this._verify({factorId:t,challengeId:f.challengeId,webauthn:{type:p.type,rpId:l,rpOrigins:r,credential_response:p.credential_response}})}catch(f){return Z(f)?{data:null,error:f}:{data:null,error:new et("Unexpected error in authenticate",f)}}}async _register({friendlyName:t,webauthn:{rpId:l=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:c}={}},d){if(!l)return{data:null,error:new $s("rpId is required for WebAuthn registration")};try{if(!A0())return{data:null,error:new et("Browser does not support WebAuthn",null)};const{data:f,error:m}=await this._enroll({friendlyName:t});if(!f)return await this.client.mfa.listFactors().then(K=>{var w;return(w=K.data)===null||w===void 0?void 0:w.all.find(T=>T.factor_type==="webauthn"&&T.friendly_name===t&&T.status!=="unverified")}).then(K=>K?this.client.mfa.unenroll({factorId:K==null?void 0:K.id}):void 0),{data:null,error:m};const{data:p,error:g}=await this._challenge({factorId:f.id,friendlyName:f.friendly_name,webauthn:{rpId:l,rpOrigins:r},signal:c},{create:d});return p?this._verify({factorId:f.id,challengeId:p.challengeId,webauthn:{rpId:l,rpOrigins:r,type:p.webauthn.type,credential_response:p.webauthn.credential_response}}):{data:null,error:g}}catch(f){return Z(f)?{data:null,error:f}:{data:null,error:new et("Unexpected error in register",f)}}}}um();const bm={url:S5,storageKey:T5,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:E5,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},xa={};class Gs{get jwks(){var t,l;return(l=(t=xa[this.storageKey])===null||t===void 0?void 0:t.jwks)!==null&&l!==void 0?l:{keys:[]}}set jwks(t){xa[this.storageKey]=Object.assign(Object.assign({},xa[this.storageKey]),{jwks:t})}get jwks_cached_at(){var t,l;return(l=(t=xa[this.storageKey])===null||t===void 0?void 0:t.cachedAt)!==null&&l!==void 0?l:Number.MIN_SAFE_INTEGER}set jwks_cached_at(t){xa[this.storageKey]=Object.assign(Object.assign({},xa[this.storageKey]),{cachedAt:t})}constructor(t){var l,r,c;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const d=Object.assign(Object.assign({},bm),t);if(this.storageKey=d.storageKey,this.instanceID=(l=Gs.nextInstanceID[this.storageKey])!==null&&l!==void 0?l:0,Gs.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!d.debug,typeof d.debug=="function"&&(this.logger=d.debug),this.instanceID>0&&un()){const f=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(f),this.logDebugMessages&&console.trace(f)}if(this.persistSession=d.persistSession,this.autoRefreshToken=d.autoRefreshToken,this.experimental=(r=d.experimental)!==null&&r!==void 0?r:{},this.admin=new rm({url:d.url,headers:d.headers,fetch:d.fetch,experimental:this.experimental}),this.url=d.url,this.headers=d.headers,this.fetch=H3(d.fetch),this.detectSessionInUrl=d.detectSessionInUrl,this.flowType=d.flowType,this.hasCustomAuthorizationHeader=d.hasCustomAuthorizationHeader,this.throwOnError=d.throwOnError,this.lockAcquireTimeout=d.lockAcquireTimeout,d.lock!=null&&(this.lock=d.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new vm(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(d.storage?this.storage=d.storage:z3()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=r3(this.memoryStorage)),d.userStorage&&(this.userStorage=d.userStorage)):(this.memoryStorage={},this.storage=r3(this.memoryStorage)),un()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(f){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",f)}(c=this.broadcastChannel)===null||c===void 0||c.addEventListener("message",async f=>{this._debug("received broadcast notification from other tab or client",f),(f.data.event==="TOKEN_REFRESHED"||f.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(f.data.event,f.data.session,!1)}catch(m){this._debug("#broadcastChannel","error",m)}})}d.skipAutoInitialize||this.initialize().catch(f=>{this._debug("#initialize()","error",f)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(t){if(this.throwOnError&&t&&t.error)throw t.error;return t}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${N3}) ${new Date().toISOString()}`}_debug(...t){return this.logDebugMessages&&this.logger(this._logPrefix(),...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())(),await this.initializePromise)}async _initialize(){var t;try{let l={},r="none";if(un()&&(l=z5(window.location.href),this._isImplicitGrantCallback(l)?r="implicit":await this._isPKCECallback(l)&&(r="pkce")),un()&&this.detectSessionInUrl&&r!=="none"){const{data:c,error:d}=await this._getSessionFromURL(l,r);if(d){if(this._debug("#_initialize()","error detecting session from URL",d),R5(d)){const p=(t=d.details)===null||t===void 0?void 0:t.code;if(p==="identity_already_exists"||p==="identity_not_found"||p==="single_identity_not_deletable")return{error:d}}return{error:d}}const{session:f,redirectType:m}=c;return this._debug("#_initialize()","detected session in URL",f,"redirect type",m),await this._saveSession(f),setTimeout(async()=>{m==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",f):await this._notifyAllSubscribers("SIGNED_IN",f)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(l){return Z(l)?this._returnResult({error:l}):this._returnResult({error:new et("Unexpected error during initialization",l)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(t){var l,r,c;try{const d=await X(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(r=(l=t==null?void 0:t.options)===null||l===void 0?void 0:l.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:(c=t==null?void 0:t.options)===null||c===void 0?void 0:c.captchaToken}},xform:Vn}),{data:f,error:m}=d;if(m||!f)return this._returnResult({data:{user:null,session:null},error:m});const p=f.session,g=f.user;return f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(d){if(Z(d))return this._returnResult({data:{user:null,session:null},error:d});throw d}}async signUp(t){var l,r,c;try{let d;if("email"in t){const{email:K,password:w,options:T}=t;let A=null,R=null;this.flowType==="pkce"&&([A,R]=await Ri(this.storage,this.storageKey)),d=await X(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:T==null?void 0:T.emailRedirectTo,body:{email:K,password:w,data:(l=T==null?void 0:T.data)!==null&&l!==void 0?l:{},gotrue_meta_security:{captcha_token:T==null?void 0:T.captchaToken},code_challenge:A,code_challenge_method:R},xform:Vn})}else if("phone"in t){const{phone:K,password:w,options:T}=t;d=await X(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:K,password:w,data:(r=T==null?void 0:T.data)!==null&&r!==void 0?r:{},channel:(c=T==null?void 0:T.channel)!==null&&c!==void 0?c:"sms",gotrue_meta_security:{captcha_token:T==null?void 0:T.captchaToken}},xform:Vn})}else throw new y0("You must provide either an email or phone number and a password");const{data:f,error:m}=d;if(m||!f)return await ze(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:m});const p=f.session,g=f.user;return f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(d){if(await ze(this.storage,`${this.storageKey}-code-verifier`),Z(d))return this._returnResult({data:{user:null,session:null},error:d});throw d}}async signInWithPassword(t){try{let l;if("email"in t){const{email:d,password:f,options:m}=t;l=await X(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:d,password:f,gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken}},xform:s3})}else if("phone"in t){const{phone:d,password:f,options:m}=t;l=await X(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:d,password:f,gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken}},xform:s3})}else throw new y0("You must provide either an email or phone number and a password");const{data:r,error:c}=l;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!r||!r.session||!r.user){const d=new qa;return this._returnResult({data:{user:null,session:null},error:d})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),this._returnResult({data:Object.assign({user:r.user,session:r.session},r.weak_password?{weakPassword:r.weak_password}:null),error:c})}catch(l){if(Z(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}}async signInWithOAuth(t){var l,r,c,d;return await this._handleProviderSignIn(t.provider,{redirectTo:(l=t.options)===null||l===void 0?void 0:l.redirectTo,scopes:(r=t.options)===null||r===void 0?void 0:r.scopes,queryParams:(c=t.options)===null||c===void 0?void 0:c.queryParams,skipBrowserRedirect:(d=t.options)===null||d===void 0?void 0:d.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(t)):this._exchangeCodeForSession(t)}async signInWithWeb3(t){const{chain:l}=t;switch(l){case"ethereum":return await this.signInWithEthereum(t);case"solana":return await this.signInWithSolana(t);default:throw new Error(`@supabase/auth-js: Unsupported chain "${l}"`)}}async signInWithEthereum(t){var l,r,c,d,f,m,p,g,K,w,T;let A,R;if("message"in t)A=t.message,R=t.signature;else{const{chain:j,wallet:L,statement:G,options:H}=t;let z;if(un())if(typeof L=="object")z=L;else{const Me=window;if("ethereum"in Me&&typeof Me.ethereum=="object"&&"request"in Me.ethereum&&typeof Me.ethereum.request=="function")z=Me.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof L!="object"||!(H!=null&&H.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");z=L}const se=new URL((l=H==null?void 0:H.url)!==null&&l!==void 0?l:window.location.href),de=await z.request({method:"eth_requestAccounts"}).then(Me=>Me).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!de||de.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const ne=L3(de[0]);let W=(r=H==null?void 0:H.signInWithEthereum)===null||r===void 0?void 0:r.chainId;if(!W){const Me=await z.request({method:"eth_chainId"});W=cm(Me)}const Je={domain:se.host,address:ne,statement:G,uri:se.href,version:"1",chainId:W,nonce:(c=H==null?void 0:H.signInWithEthereum)===null||c===void 0?void 0:c.nonce,issuedAt:(f=(d=H==null?void 0:H.signInWithEthereum)===null||d===void 0?void 0:d.issuedAt)!==null&&f!==void 0?f:new Date,expirationTime:(m=H==null?void 0:H.signInWithEthereum)===null||m===void 0?void 0:m.expirationTime,notBefore:(p=H==null?void 0:H.signInWithEthereum)===null||p===void 0?void 0:p.notBefore,requestId:(g=H==null?void 0:H.signInWithEthereum)===null||g===void 0?void 0:g.requestId,resources:(K=H==null?void 0:H.signInWithEthereum)===null||K===void 0?void 0:K.resources};A=fm(Je),R=await z.request({method:"personal_sign",params:[dm(A),ne]})}try{const{data:j,error:L}=await X(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:A,signature:R},!((w=t.options)===null||w===void 0)&&w.captchaToken?{gotrue_meta_security:{captcha_token:(T=t.options)===null||T===void 0?void 0:T.captchaToken}}:null),xform:Vn});if(L)throw L;if(!j||!j.session||!j.user){const G=new qa;return this._returnResult({data:{user:null,session:null},error:G})}return j.session&&(await this._saveSession(j.session),await this._notifyAllSubscribers("SIGNED_IN",j.session)),this._returnResult({data:Object.assign({},j),error:L})}catch(j){if(Z(j))return this._returnResult({data:{user:null,session:null},error:j});throw j}}async signInWithSolana(t){var l,r,c,d,f,m,p,g,K,w,T,A;let R,j;if("message"in t)R=t.message,j=t.signature;else{const{chain:L,wallet:G,statement:H,options:z}=t;let se;if(un())if(typeof G=="object")se=G;else{const ne=window;if("solana"in ne&&typeof ne.solana=="object"&&("signIn"in ne.solana&&typeof ne.solana.signIn=="function"||"signMessage"in ne.solana&&typeof ne.solana.signMessage=="function"))se=ne.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof G!="object"||!(z!=null&&z.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");se=G}const de=new URL((l=z==null?void 0:z.url)!==null&&l!==void 0?l:window.location.href);if("signIn"in se&&se.signIn){const ne=await se.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},z==null?void 0:z.signInWithSolana),{version:"1",domain:de.host,uri:de.href}),H?{statement:H}:null));let W;if(Array.isArray(ne)&&ne[0]&&typeof ne[0]=="object")W=ne[0];else if(ne&&typeof ne=="object"&&"signedMessage"in ne&&"signature"in ne)W=ne;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in W&&"signature"in W&&(typeof W.signedMessage=="string"||W.signedMessage instanceof Uint8Array)&&W.signature instanceof Uint8Array)R=typeof W.signedMessage=="string"?W.signedMessage:new TextDecoder().decode(W.signedMessage),j=W.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in se)||typeof se.signMessage!="function"||!("publicKey"in se)||typeof se!="object"||!se.publicKey||!("toBase58"in se.publicKey)||typeof se.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");R=[`${de.host} wants you to sign in with your Solana account:`,se.publicKey.toBase58(),...H?["",H,""]:[""],"Version: 1",`URI: ${de.href}`,`Issued At: ${(c=(r=z==null?void 0:z.signInWithSolana)===null||r===void 0?void 0:r.issuedAt)!==null&&c!==void 0?c:new Date().toISOString()}`,...!((d=z==null?void 0:z.signInWithSolana)===null||d===void 0)&&d.notBefore?[`Not Before: ${z.signInWithSolana.notBefore}`]:[],...!((f=z==null?void 0:z.signInWithSolana)===null||f===void 0)&&f.expirationTime?[`Expiration Time: ${z.signInWithSolana.expirationTime}`]:[],...!((m=z==null?void 0:z.signInWithSolana)===null||m===void 0)&&m.chainId?[`Chain ID: ${z.signInWithSolana.chainId}`]:[],...!((p=z==null?void 0:z.signInWithSolana)===null||p===void 0)&&p.nonce?[`Nonce: ${z.signInWithSolana.nonce}`]:[],...!((g=z==null?void 0:z.signInWithSolana)===null||g===void 0)&&g.requestId?[`Request ID: ${z.signInWithSolana.requestId}`]:[],...!((w=(K=z==null?void 0:z.signInWithSolana)===null||K===void 0?void 0:K.resources)===null||w===void 0)&&w.length?["Resources",...z.signInWithSolana.resources.map(W=>`- ${W}`)]:[]].join(`
`);const ne=await se.signMessage(new TextEncoder().encode(R),"utf8");if(!ne||!(ne instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");j=ne}}try{const{data:L,error:G}=await X(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:R,signature:Ii(j)},!((T=t.options)===null||T===void 0)&&T.captchaToken?{gotrue_meta_security:{captcha_token:(A=t.options)===null||A===void 0?void 0:A.captchaToken}}:null),xform:Vn});if(G)throw G;if(!L||!L.session||!L.user){const H=new qa;return this._returnResult({data:{user:null,session:null},error:H})}return L.session&&(await this._saveSession(L.session),await this._notifyAllSubscribers("SIGNED_IN",L.session)),this._returnResult({data:Object.assign({},L),error:G})}catch(L){if(Z(L))return this._returnResult({data:{user:null,session:null},error:L});throw L}}async _exchangeCodeForSession(t){const l=await Xn(this.storage,`${this.storageKey}-code-verifier`),[r,c]=(l??"").split("/");try{if(!r&&this.flowType==="pkce")throw new C5;const{data:d,error:f}=await X(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:r},xform:Vn});if(await ze(this.storage,`${this.storageKey}-code-verifier`),f)throw f;if(!d||!d.session||!d.user){const m=new qa;return this._returnResult({data:{user:null,session:null,redirectType:null},error:m})}return d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers(c==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",d.session)),this._returnResult({data:Object.assign(Object.assign({},d),{redirectType:c??null}),error:f})}catch(d){if(await ze(this.storage,`${this.storageKey}-code-verifier`),Z(d))return this._returnResult({data:{user:null,session:null,redirectType:null},error:d});throw d}}async signInWithIdToken(t){try{const{options:l,provider:r,token:c,access_token:d,nonce:f}=t,m=await X(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:c,access_token:d,nonce:f,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken}},xform:Vn}),{data:p,error:g}=m;if(g)return this._returnResult({data:{user:null,session:null},error:g});if(!p||!p.session||!p.user){const K=new qa;return this._returnResult({data:{user:null,session:null},error:K})}return p.session&&(await this._saveSession(p.session),await this._notifyAllSubscribers("SIGNED_IN",p.session)),this._returnResult({data:p,error:g})}catch(l){if(Z(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}}async signInWithOtp(t){var l,r,c,d,f;try{if("email"in t){const{email:m,options:p}=t;let g=null,K=null;this.flowType==="pkce"&&([g,K]=await Ri(this.storage,this.storageKey));const{error:w}=await X(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:m,data:(l=p==null?void 0:p.data)!==null&&l!==void 0?l:{},create_user:(r=p==null?void 0:p.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:g,code_challenge_method:K},redirectTo:p==null?void 0:p.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:w})}if("phone"in t){const{phone:m,options:p}=t,{data:g,error:K}=await X(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:m,data:(c=p==null?void 0:p.data)!==null&&c!==void 0?c:{},create_user:(d=p==null?void 0:p.shouldCreateUser)!==null&&d!==void 0?d:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},channel:(f=p==null?void 0:p.channel)!==null&&f!==void 0?f:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:g==null?void 0:g.message_id},error:K})}throw new y0("You must provide either an email or phone number.")}catch(m){if(await ze(this.storage,`${this.storageKey}-code-verifier`),Z(m))return this._returnResult({data:{user:null,session:null},error:m});throw m}}async verifyOtp(t){var l,r;try{let c,d;"options"in t&&(c=(l=t.options)===null||l===void 0?void 0:l.redirectTo,d=(r=t.options)===null||r===void 0?void 0:r.captchaToken);const{data:f,error:m}=await X(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:d}}),redirectTo:c,xform:Vn});if(m)throw m;if(!f)throw new Error("An error occurred on token verification.");const p=f.session,g=f.user;return p!=null&&p.access_token&&(await this._saveSession(p),await this._notifyAllSubscribers(t.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(c){if(Z(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signInWithSSO(t){var l,r,c,d,f;try{let m=null,p=null;this.flowType==="pkce"&&([m,p]=await Ri(this.storage,this.storageKey));const g=await X(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(r=(l=t.options)===null||l===void 0?void 0:l.redirectTo)!==null&&r!==void 0?r:void 0}),!((c=t==null?void 0:t.options)===null||c===void 0)&&c.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:m,code_challenge_method:p}),headers:this.headers,xform:am});return!((d=g.data)===null||d===void 0)&&d.url&&un()&&!(!((f=t.options)===null||f===void 0)&&f.skipBrowserRedirect)&&window.location.assign(g.data.url),this._returnResult(g)}catch(m){if(await ze(this.storage,`${this.storageKey}-code-verifier`),Z(m))return this._returnResult({data:null,error:m});throw m}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:l},error:r}=t;if(r)throw r;if(!l)throw new We;const{error:c}=await X(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:l.access_token});return this._returnResult({data:{user:null,session:null},error:c})})}catch(t){if(Z(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async resend(t){try{const l=`${this.url}/resend`;if("email"in t){const{email:r,type:c,options:d}=t;let f=null,m=null;this.flowType==="pkce"&&([f,m]=await Ri(this.storage,this.storageKey));const{error:p}=await X(this.fetch,"POST",l,{headers:this.headers,body:{email:r,type:c,gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken},code_challenge:f,code_challenge_method:m},redirectTo:d==null?void 0:d.emailRedirectTo});return p&&await ze(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:p})}else if("phone"in t){const{phone:r,type:c,options:d}=t,{data:f,error:m}=await X(this.fetch,"POST",l,{headers:this.headers,body:{phone:r,type:c,gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:f==null?void 0:f.message_id},error:m})}throw new y0("You must provide either an email or phone number and a type")}catch(l){if(await ze(this.storage,`${this.storageKey}-code-verifier`),Z(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async t=>t)):await this._useSession(async t=>t)}async _acquireLock(t,l){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),c=(async()=>(await r,await l()))();return this.pendingInLock.push((async()=>{try{await c}catch{}})()),c}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=l();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const c=[...this.pendingInLock];await Promise.all(c),this.pendingInLock.splice(0,c.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const l=await this.__loadSession();return await t(l)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const l=await Xn(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",l),l!==null&&(this._isValidSession(l)?t=l:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const r=t.expires_at?t.expires_at*1e3-Date.now()<io:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",t.expires_at),!r){if(this.userStorage){const f=await Xn(this.userStorage,this.storageKey+"-user");f!=null&&f.user?t.user=f.user:t.user=ao()}if(this.storage.isServer&&t.user&&!t.user.__isUserNotAvailableProxy){const f={value:this.suppressGetSessionWarning};t.user=em(t.user,f),f.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:t},error:null}}const{data:c,error:d}=await this._callRefreshToken(t.refresh_token);if(d){if(!!(t.expires_at&&t.expires_at*1e3>Date.now())){const m=await Xn(this.storage,this.storageKey);if(m&&m.refresh_token===t.refresh_token)return this._returnResult({data:{session:t},error:null})}return this._returnResult({data:{session:null},error:d})}return this._returnResult({data:{session:c},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(t){if(t)return await this._getUser(t);await this.initializePromise;let l;return this.lock!=null?l=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):l=await this._getUser(),l.data.user&&(this.suppressGetSessionWarning=!0),l}async _getUser(t){try{return t?await X(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:ui}):await this._useSession(async l=>{var r,c,d;const{data:f,error:m}=l;if(m)throw m;return!(!((r=f.session)===null||r===void 0)&&r.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new We}:await X(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(d=(c=f.session)===null||c===void 0?void 0:c.access_token)!==null&&d!==void 0?d:void 0,xform:ui})})}catch(l){if(Z(l))return g0(l)&&(await this._removeSession(),await ze(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:l});throw l}}async updateUser(t,l={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(t,l)):await this._updateUser(t,l)}async _updateUser(t,l={}){try{return await this._useSession(async r=>{const{data:c,error:d}=r;if(d)throw d;if(!c.session)throw new We;const f=c.session;let m=null,p=null;this.flowType==="pkce"&&t.email!=null&&([m,p]=await Ri(this.storage,this.storageKey));const{data:g,error:K}=await X(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:l==null?void 0:l.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:m,code_challenge_method:p}),jwt:f.access_token,xform:ui});if(K)throw K;return f.user=g.user,await this._saveSession(f),await this._notifyAllSubscribers("USER_UPDATED",f),this._returnResult({data:{user:f.user},error:null})})}catch(r){if(await ze(this.storage,`${this.storageKey}-code-verifier`),Z(r))return this._returnResult({data:{user:null},error:r});throw r}}async setSession(t){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(t)):await this._setSession(t)}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new We;const l=Date.now()/1e3;let r=l,c=!0,d=null;const{payload:f}=K0(t.access_token);if(f.exp&&(r=f.exp,c=r<=l),c){const{data:m,error:p}=await this._callRefreshToken(t.refresh_token);if(p)return this._returnResult({data:{user:null,session:null},error:p});if(!m)return{data:{user:null,session:null},error:null};d=m}else{const{data:m,error:p}=await this._getUser(t.access_token);if(p)return this._returnResult({data:{user:null,session:null},error:p});d={access_token:t.access_token,refresh_token:t.refresh_token,user:m.user,token_type:"bearer",expires_in:r-l,expires_at:r},await this._saveSession(d),await this._notifyAllSubscribers("SIGNED_IN",d)}return this._returnResult({data:{user:d.user,session:d},error:null})}catch(l){if(Z(l))return this._returnResult({data:{session:null,user:null},error:l});throw l}}async refreshSession(t){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(t)):await this._refreshSession(t)}async _refreshSession(t){try{return await this._useSession(async l=>{var r;if(!t){const{data:f,error:m}=l;if(m)throw m;t=(r=f.session)!==null&&r!==void 0?r:void 0}if(!(t!=null&&t.refresh_token))throw new We;const{data:c,error:d}=await this._callRefreshToken(t.refresh_token);return d?this._returnResult({data:{user:null,session:null},error:d}):c?this._returnResult({data:{user:c.user,session:c},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(l){if(Z(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}}async _getSessionFromURL(t,l){var r;try{if(!un())throw new w0("No browser detected.");if(t.error||t.error_description||t.error_code)throw new w0(t.error_description||"Error in URL with unspecified error_description",{error:t.error||"unspecified_error",code:t.error_code||"unspecified_code"});switch(l){case"implicit":if(this.flowType==="pkce")throw new Xd("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new w0("Not a valid implicit grant flow url.");break;default:}if(l==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!t.code)throw new Xd("No code detected.");const{data:z,error:se}=await this._exchangeCodeForSession(t.code);if(se)throw se;const de=new URL(window.location.href);return de.searchParams.delete("code"),window.history.replaceState(window.history.state,"",de.toString()),{data:{session:z.session,redirectType:(r=z.redirectType)!==null&&r!==void 0?r:null},error:null}}const{provider_token:c,provider_refresh_token:d,access_token:f,refresh_token:m,expires_in:p,expires_at:g,token_type:K}=t;if(!f||!p||!m||!K)throw new w0("No session defined in URL");const w=Math.round(Date.now()/1e3),T=parseInt(p);let A=w+T;g&&(A=parseInt(g));const R=A-w;R*1e3<=Mt&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${R}s, should have been closer to ${T}s`);const j=A-T;w-j>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",j,A,w):w-j<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",j,A,w);const{data:L,error:G}=await this._getUser(f);if(G)throw G;const H={provider_token:c,provider_refresh_token:d,access_token:f,expires_in:T,expires_at:A,refresh_token:m,token_type:K,user:L.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:H,redirectType:t.type},error:null})}catch(c){if(Z(c))return this._returnResult({data:{session:null,redirectType:null},error:c});throw c}}_isImplicitGrantCallback(t){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),t):!!(t.access_token||t.error||t.error_description||t.error_code)}async _isPKCECallback(t){const l=await Xn(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&l)}async signOut(t={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(t)):await this._signOut(t)}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async l=>{var r;const{data:c,error:d}=l;if(d&&!g0(d))return this._returnResult({error:d});const f=(r=c.session)===null||r===void 0?void 0:r.access_token;if(f){const{error:m}=await this.admin.signOut(f,t);if(m&&!(O5(m)&&(m.status===404||m.status===401||m.status===403)||g0(m)))return this._returnResult({error:m})}return t!=="others"&&(await this._removeSession(),await ze(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(t){const l=U5(),r={id:l,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",l),this.stateChangeEmitters.delete(l)}};return this._debug("#onAuthStateChange()","registered callback with id",l),this.stateChangeEmitters.set(l,r),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(l)}):await this._emitInitialSession(l)))(),{data:{subscription:r}}}async _emitInitialSession(t){return await this._useSession(async l=>{var r,c;try{const{data:{session:d},error:f}=l;if(f)throw f;await((r=this.stateChangeEmitters.get(t))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",d)),this._debug("INITIAL_SESSION","callback id",t,"session",d)}catch(d){await((c=this.stateChangeEmitters.get(t))===null||c===void 0?void 0:c.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",d),g0(d)?console.warn(d):console.error(d)}})}async resetPasswordForEmail(t,l={}){let r=null,c=null;this.flowType==="pkce"&&([r,c]=await Ri(this.storage,this.storageKey,!0));try{return await X(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:r,code_challenge_method:c,gotrue_meta_security:{captcha_token:l.captchaToken}},headers:this.headers,redirectTo:l.redirectTo})}catch(d){if(await ze(this.storage,`${this.storageKey}-code-verifier`),Z(d))return this._returnResult({data:null,error:d});throw d}}async getUserIdentities(){var t;try{const{data:l,error:r}=await this.getUser();if(r)throw r;return this._returnResult({data:{identities:(t=l.user.identities)!==null&&t!==void 0?t:[]},error:null})}catch(l){if(Z(l))return this._returnResult({data:null,error:l});throw l}}async linkIdentity(t){return"token"in t?this.linkIdentityIdToken(t):this.linkIdentityOAuth(t)}async linkIdentityOAuth(t){var l;try{const{data:r,error:c}=await this._useSession(async d=>{var f,m,p,g,K;const{data:w,error:T}=d;if(T)throw T;const A=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(f=t.options)===null||f===void 0?void 0:f.redirectTo,scopes:(m=t.options)===null||m===void 0?void 0:m.scopes,queryParams:(p=t.options)===null||p===void 0?void 0:p.queryParams,skipBrowserRedirect:!0});return await X(this.fetch,"GET",A,{headers:this.headers,jwt:(K=(g=w.session)===null||g===void 0?void 0:g.access_token)!==null&&K!==void 0?K:void 0})});if(c)throw c;return un()&&!(!((l=t.options)===null||l===void 0)&&l.skipBrowserRedirect)&&window.location.assign(r==null?void 0:r.url),this._returnResult({data:{provider:t.provider,url:r==null?void 0:r.url},error:null})}catch(r){if(Z(r))return this._returnResult({data:{provider:t.provider,url:null},error:r});throw r}}async linkIdentityIdToken(t){return await this._useSession(async l=>{var r;try{const{error:c,data:{session:d}}=l;if(c)throw c;const{options:f,provider:m,token:p,access_token:g,nonce:K}=t,w=await X(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(r=d==null?void 0:d.access_token)!==null&&r!==void 0?r:void 0,body:{provider:m,id_token:p,access_token:g,nonce:K,link_identity:!0,gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken}},xform:Vn}),{data:T,error:A}=w;return A?this._returnResult({data:{user:null,session:null},error:A}):!T||!T.session||!T.user?this._returnResult({data:{user:null,session:null},error:new qa}):(T.session&&(await this._saveSession(T.session),await this._notifyAllSubscribers("USER_UPDATED",T.session)),this._returnResult({data:T,error:A}))}catch(c){if(await ze(this.storage,`${this.storageKey}-code-verifier`),Z(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}})}async unlinkIdentity(t){try{return await this._useSession(async l=>{var r,c;const{data:d,error:f}=l;if(f)throw f;return await X(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(c=(r=d.session)===null||r===void 0?void 0:r.access_token)!==null&&c!==void 0?c:void 0})})}catch(l){if(Z(l))return this._returnResult({data:null,error:l});throw l}}async _refreshAccessToken(t){const l="#_refreshAccessToken()";this._debug(l,"begin");try{const r=Date.now();return await V5(async c=>(c>0&&await L5(200*Math.pow(2,c-1)),this._debug(l,"refreshing attempt",c),await X(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:Vn})),(c,d)=>{const f=200*Math.pow(2,c);return d&&Qd(d)&&Date.now()+f-r<Mt})}catch(r){if(this._debug(l,"error",r),Z(r))return this._returnResult({data:{session:null,user:null},error:r});throw r}finally{this._debug(l,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,l){const r=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:l.redirectTo,scopes:l.scopes,queryParams:l.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",l,"url",r),un()&&!l.skipBrowserRedirect&&window.location.assign(r),{data:{provider:t,url:r},error:null}}async _recoverAndRefresh(){var t,l;const r="#_recoverAndRefresh()";this._debug(r,"begin");try{const c=await Xn(this.storage,this.storageKey);if(c&&this.userStorage){let f=await Xn(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!f&&(f={user:c.user},await Ca(this.userStorage,this.storageKey+"-user",f)),c.user=(t=f==null?void 0:f.user)!==null&&t!==void 0?t:ao()}else if(c&&!c.user&&!c.user){const f=await Xn(this.storage,this.storageKey+"-user");f&&(f!=null&&f.user)?(c.user=f.user,await ze(this.storage,this.storageKey+"-user"),await Ca(this.storage,this.storageKey,c)):c.user=ao()}if(this._debug(r,"session from storage",c),!this._isValidSession(c)){this._debug(r,"session is not valid"),c!==null&&await this._removeSession();return}const d=((l=c.expires_at)!==null&&l!==void 0?l:1/0)*1e3-Date.now()<io;if(this._debug(r,`session has${d?"":" not"} expired with margin of ${io}s`),d){if(this.autoRefreshToken&&c.refresh_token){const{error:f}=await this._callRefreshToken(c.refresh_token);f&&(M5(f)?this._debug(r,"refresh discarded by commit guard",f):this._debug(r,"refresh failed",f))}}else if(c.user&&c.user.__isUserNotAvailableProxy===!0)try{const{data:f,error:m}=await this._getUser(c.access_token);!m&&(f!=null&&f.user)?(c.user=f.user,await this._saveSession(c),await this._notifyAllSubscribers("SIGNED_IN",c)):this._debug(r,"could not get user data, skipping SIGNED_IN notification")}catch(f){console.error("Error getting user data:",f),this._debug(r,"error getting user data, skipping SIGNED_IN notification",f)}else await this._notifyAllSubscribers("SIGNED_IN",c)}catch(c){this._debug(r,"error",c),console.error(c);return}finally{this._debug(r,"end")}}async _callRefreshToken(t){var l,r;if(!t)throw new We;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===t&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const c="#_callRefreshToken()";this._debug(c,"begin");try{this.refreshingDeferred=new j0;const d=await Xn(this.storage,this.storageKey),{data:f,error:m}=await this._refreshAccessToken(t);if(m)throw m;if(!f.session)throw new We;const p=await Xn(this.storage,this.storageKey);if(d!==null&&(p===null||p.refresh_token!==d.refresh_token)){this._debug(c,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:p?"replaced":"cleared"});const T={data:null,error:new Fd};return this.refreshingDeferred.resolve(T),T}const K=this._sessionRemovalEpoch;if(await this._saveSession(f.session),this._sessionRemovalEpoch!==K){this._debug(c,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await ze(this.storage,this.storageKey),this.userStorage&&await ze(this.userStorage,this.storageKey+"-user");const T={data:null,error:new Fd};return this.refreshingDeferred.resolve(T),T}await this._notifyAllSubscribers("TOKEN_REFRESHED",f.session);const w={data:f.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(w),w}catch(d){if(this._debug(c,"error",d),Z(d)){const f={data:null,error:d};if(!Qd(d)){const m=await Xn(this.storage,this.storageKey);!!(m!=null&&m.expires_at&&m.expires_at*1e3>Date.now())?this._debug(c,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:t,result:f,expiresAt:Date.now()+k5},(l=this.refreshingDeferred)===null||l===void 0||l.resolve(f),f}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(d),d}finally{this.refreshingDeferred=null,this._debug(c,"end")}}async _notifyAllSubscribers(t,l,r=!0){const c=`#_notifyAllSubscribers(${t})`;this._debug(c,"begin",l,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:t,session:l});const d=[],f=Array.from(this.stateChangeEmitters.values()).map(async m=>{try{await m.callback(t,l)}catch(p){d.push(p)}});if(await Promise.all(f),d.length>0){for(let m=0;m<d.length;m+=1)console.error(d[m]);throw d[0]}}finally{this._debug(c,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),this.suppressGetSessionWarning=!0,await ze(this.storage,`${this.storageKey}-code-verifier`);const l=Object.assign({},t),r=l.user&&l.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!r&&l.user&&await Ca(this.userStorage,this.storageKey+"-user",{user:l.user});const c=Object.assign({},l);delete c.user;const d=i3(c);await Ca(this.storage,this.storageKey,d)}else{const c=i3(l);await Ca(this.storage,this.storageKey,c)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await ze(this.storage,this.storageKey),await ze(this.storage,this.storageKey+"-code-verifier"),await ze(this.storage,this.storageKey+"-user"),this.userStorage&&await ze(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&un()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(l){console.error("removing visibilitychange callback failed",l)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),Mt);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t);const l=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=l,l&&typeof l=="object"&&typeof l.unref=="function"?l.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(l)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t);const l=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,l&&clearTimeout(l)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var t;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(t=this.broadcastChannel)===null||t===void 0||t.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async l=>{const{data:{session:r}}=l;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const c=Math.floor((r.expires_at*1e3-t)/Mt);this._debug("#_autoRefreshTokenTick()",`access token expires in ${c} ticks, a tick lasts ${Mt}ms, refresh threshold is ${Ps} ticks`),c<=Ps&&await this._callRefreshToken(r.refresh_token)})}catch(l){console.error("Auto refresh tick failed with error. This is likely a transient error.",l)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t instanceof om)this._debug("auto refresh token tick lock not available");else throw t}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const t=Date.now();try{await this._useSession(async l=>{const{data:{session:r}}=l;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const c=Math.floor((r.expires_at*1e3-t)/Mt);this._debug("#_autoRefreshTokenTick()",`access token expires in ${c} ticks, a tick lasts ${Mt}ms, refresh threshold is ${Ps} ticks`),c<=Ps&&await this._callRefreshToken(r.refresh_token)})}catch(l){console.error("Auto refresh tick failed with error. This is likely a transient error.",l)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!un()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(t){this._debug("#visibilityChangedCallback","error",t)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const l=`#_onVisibilityChanged(${t})`;if(this._debug(l,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!t)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(l,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(l,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,l,r){const c=[`provider=${encodeURIComponent(l)}`];if(r!=null&&r.redirectTo&&c.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),r!=null&&r.scopes&&c.push(`scopes=${encodeURIComponent(r.scopes)}`),this.flowType==="pkce"){const[d,f]=await Ri(this.storage,this.storageKey),m=new URLSearchParams({code_challenge:`${encodeURIComponent(d)}`,code_challenge_method:`${encodeURIComponent(f)}`});c.push(m.toString())}if(r!=null&&r.queryParams){const d=new URLSearchParams(r.queryParams);c.push(d.toString())}return r!=null&&r.skipBrowserRedirect&&c.push(`skip_http_redirect=${r.skipBrowserRedirect}`),`${t}?${c.join("&")}`}async _unenroll(t){try{return await this._useSession(async l=>{var r;const{data:c,error:d}=l;return d?this._returnResult({data:null,error:d}):await X(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(r=c==null?void 0:c.session)===null||r===void 0?void 0:r.access_token})})}catch(l){if(Z(l))return this._returnResult({data:null,error:l});throw l}}async _enroll(t){try{return await this._useSession(async l=>{var r,c;const{data:d,error:f}=l;if(f)return this._returnResult({data:null,error:f});const m=Object.assign({friendly_name:t.friendlyName,factor_type:t.factorType},t.factorType==="phone"?{phone:t.phone}:t.factorType==="totp"?{issuer:t.issuer}:{}),{data:p,error:g}=await X(this.fetch,"POST",`${this.url}/factors`,{body:m,headers:this.headers,jwt:(r=d==null?void 0:d.session)===null||r===void 0?void 0:r.access_token});return g?this._returnResult({data:null,error:g}):(t.factorType==="totp"&&p.type==="totp"&&(!((c=p==null?void 0:p.totp)===null||c===void 0)&&c.qr_code)&&(p.totp.qr_code=`data:image/svg+xml;utf-8,${p.totp.qr_code}`),this._returnResult({data:p,error:null}))})}catch(l){if(Z(l))return this._returnResult({data:null,error:l});throw l}}async _verify(t){const l=async()=>{try{return await this._useSession(async r=>{var c;const{data:d,error:f}=r;if(f)return this._returnResult({data:null,error:f});const m=Object.assign({challenge_id:t.challengeId},"webauthn"in t?{webauthn:Object.assign(Object.assign({},t.webauthn),{credential_response:t.webauthn.type==="create"?c3(t.webauthn.credential_response):d3(t.webauthn.credential_response)})}:{code:t.code}),{data:p,error:g}=await X(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:m,headers:this.headers,jwt:(c=d==null?void 0:d.session)===null||c===void 0?void 0:c.access_token});return g?this._returnResult({data:null,error:g}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+p.expires_in},p)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",p),this._returnResult({data:p,error:g}))})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,l):l()}async _challenge(t){const l=async()=>{try{return await this._useSession(async r=>{var c;const{data:d,error:f}=r;if(f)return this._returnResult({data:null,error:f});const m=await X(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{body:t,headers:this.headers,jwt:(c=d==null?void 0:d.session)===null||c===void 0?void 0:c.access_token});if(m.error)return m;const{data:p}=m;if(p.type!=="webauthn")return{data:p,error:null};switch(p.webauthn.type){case"create":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:o3(p.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:u3(p.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,l):l()}async _challengeAndVerify(t){const{data:l,error:r}=await this._challenge({factorId:t.factorId});return r?this._returnResult({data:null,error:r}):await this._verify({factorId:t.factorId,challengeId:l.id,code:t.code})}async _listFactors(){var t;const{data:{user:l},error:r}=await this.getUser();if(r)return{data:null,error:r};const c={all:[],phone:[],totp:[],webauthn:[]};for(const d of(t=l==null?void 0:l.factors)!==null&&t!==void 0?t:[])c.all.push(d),d.status==="verified"&&c[d.factor_type].push(d);return{data:c,error:null}}async _getAuthenticatorAssuranceLevel(t){var l,r,c,d;if(t)try{const{payload:A}=K0(t);let R=null;A.aal&&(R=A.aal);let j=R;const{data:{user:L},error:G}=await this.getUser(t);if(G)return this._returnResult({data:null,error:G});((r=(l=L==null?void 0:L.factors)===null||l===void 0?void 0:l.filter(se=>se.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(j="aal2");const z=A.amr||[];return{data:{currentLevel:R,nextLevel:j,currentAuthenticationMethods:z},error:null}}catch(A){if(Z(A))return this._returnResult({data:null,error:A});throw A}const{data:{session:f},error:m}=await this.getSession();if(m)return this._returnResult({data:null,error:m});if(!f)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:p}=K0(f.access_token);let g=null;p.aal&&(g=p.aal);let K=g;((d=(c=f.user.factors)===null||c===void 0?void 0:c.filter(A=>A.status==="verified"))!==null&&d!==void 0?d:[]).length>0&&(K="aal2");const T=p.amr||[];return{data:{currentLevel:g,nextLevel:K,currentAuthenticationMethods:T},error:null}}async _getAuthorizationDetails(t){try{return await this._useSession(async l=>{const{data:{session:r},error:c}=l;return c?this._returnResult({data:null,error:c}):r?await X(this.fetch,"GET",`${this.url}/oauth/authorizations/${t}`,{headers:this.headers,jwt:r.access_token,xform:d=>({data:d,error:null})}):this._returnResult({data:null,error:new We})})}catch(l){if(Z(l))return this._returnResult({data:null,error:l});throw l}}async _approveAuthorization(t,l){try{return await this._useSession(async r=>{const{data:{session:c},error:d}=r;if(d)return this._returnResult({data:null,error:d});if(!c)return this._returnResult({data:null,error:new We});const f=await X(this.fetch,"POST",`${this.url}/oauth/authorizations/${t}/consent`,{headers:this.headers,jwt:c.access_token,body:{action:"approve"},xform:m=>({data:m,error:null})});return f.data&&f.data.redirect_url&&un()&&!(l!=null&&l.skipBrowserRedirect)&&window.location.assign(f.data.redirect_url),f})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}async _denyAuthorization(t,l){try{return await this._useSession(async r=>{const{data:{session:c},error:d}=r;if(d)return this._returnResult({data:null,error:d});if(!c)return this._returnResult({data:null,error:new We});const f=await X(this.fetch,"POST",`${this.url}/oauth/authorizations/${t}/consent`,{headers:this.headers,jwt:c.access_token,body:{action:"deny"},xform:m=>({data:m,error:null})});return f.data&&f.data.redirect_url&&un()&&!(l!=null&&l.skipBrowserRedirect)&&window.location.assign(f.data.redirect_url),f})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}async _listOAuthGrants(){try{return await this._useSession(async t=>{const{data:{session:l},error:r}=t;return r?this._returnResult({data:null,error:r}):l?await X(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:l.access_token,xform:c=>({data:c,error:null})}):this._returnResult({data:null,error:new We})})}catch(t){if(Z(t))return this._returnResult({data:null,error:t});throw t}}async _revokeOAuthGrant(t){try{return await this._useSession(async l=>{const{data:{session:r},error:c}=l;return c?this._returnResult({data:null,error:c}):r?(await X(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:r.access_token,query:{client_id:t.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new We})})}catch(l){if(Z(l))return this._returnResult({data:null,error:l});throw l}}async fetchJwk(t,l={keys:[]}){let r=l.keys.find(m=>m.kid===t);if(r)return r;const c=Date.now();if(r=this.jwks.keys.find(m=>m.kid===t),r&&this.jwks_cached_at+q5>c)return r;const{data:d,error:f}=await X(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(f)throw f;return!d.keys||d.keys.length===0||(this.jwks=d,this.jwks_cached_at=c,r=d.keys.find(m=>m.kid===t),!r)?null:r}async getClaims(t,l={}){try{let r=t;if(!r){const{data:A,error:R}=await this.getSession();if(R||!A.session)return this._returnResult({data:null,error:R});r=A.session.access_token}const{header:c,payload:d,signature:f,raw:{header:m,payload:p}}=K0(r);if(!(l!=null&&l.allowExpired))try{Q5(d.exp)}catch(A){throw new S0(A instanceof Error?A.message:"JWT validation failed")}const g=!c.alg||c.alg.startsWith("HS")||!c.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(c.kid,l!=null&&l.keys?{keys:l.keys}:l==null?void 0:l.jwks);if(!g){const{error:A}=await this.getUser(r);if(A)throw A;return{data:{claims:d,header:c,signature:f},error:null}}const K=F5(c.alg),w=await crypto.subtle.importKey("jwk",g,K,!0,["verify"]);if(!await crypto.subtle.verify(K,w,f,N5(`${m}.${p}`)))throw new S0("Invalid JWT signature");return{data:{claims:d,header:c,signature:f},error:null}}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}async signInWithPasskey(t){var l,r,c;Qn(this.experimental);try{if(!A0())return this._returnResult({data:null,error:new et("Browser does not support WebAuthn",null)});const{data:d,error:f}=await this._startPasskeyAuthentication({options:{captchaToken:(l=t==null?void 0:t.options)===null||l===void 0?void 0:l.captchaToken}});if(f||!d)return this._returnResult({data:null,error:f});const m=u3(d.options),p=(c=(r=t==null?void 0:t.options)===null||r===void 0?void 0:r.signal)!==null&&c!==void 0?c:_o.createNewAbortSignal(),{data:g,error:K}=await G3({publicKey:m,signal:p});if(K||!g)return this._returnResult({data:null,error:K??new et("WebAuthn ceremony failed",null)});const w=d3(g);return this._verifyPasskeyAuthentication({challengeId:d.challenge_id,credential:w})}catch(d){if(Z(d))return this._returnResult({data:null,error:d});throw d}}async registerPasskey(t){var l,r;Qn(this.experimental);try{if(!A0())return this._returnResult({data:null,error:new et("Browser does not support WebAuthn",null)});const{data:c,error:d}=await this._startPasskeyRegistration();if(d||!c)return this._returnResult({data:null,error:d});const f=o3(c.options),m=(r=(l=t==null?void 0:t.options)===null||l===void 0?void 0:l.signal)!==null&&r!==void 0?r:_o.createNewAbortSignal(),{data:p,error:g}=await $3({publicKey:f,signal:m});if(g||!p)return this._returnResult({data:null,error:g??new et("WebAuthn ceremony failed",null)});const K=c3(p);return this._verifyPasskeyRegistration({challengeId:c.challenge_id,credential:K})}catch(c){if(Z(c))return this._returnResult({data:null,error:c});throw c}}async _startPasskeyRegistration(){Qn(this.experimental);try{return await this._useSession(async t=>{const{data:{session:l},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!l)return this._returnResult({data:null,error:new We});const{data:c,error:d}=await X(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:l.access_token,body:{}});return d?this._returnResult({data:null,error:d}):this._returnResult({data:c,error:null})})}catch(t){if(Z(t))return this._returnResult({data:null,error:t});throw t}}async _verifyPasskeyRegistration(t){Qn(this.experimental);try{return await this._useSession(async l=>{const{data:{session:r},error:c}=l;if(c)return this._returnResult({data:null,error:c});if(!r)return this._returnResult({data:null,error:new We});const{data:d,error:f}=await X(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:r.access_token,body:{challenge_id:t.challengeId,credential:t.credential}});return f?this._returnResult({data:null,error:f}):this._returnResult({data:d,error:null})})}catch(l){if(Z(l))return this._returnResult({data:null,error:l});throw l}}async _startPasskeyAuthentication(t){var l;Qn(this.experimental);try{const{data:r,error:c}=await X(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(l=t==null?void 0:t.options)===null||l===void 0?void 0:l.captchaToken}}});return c?this._returnResult({data:null,error:c}):this._returnResult({data:r,error:null})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}async _verifyPasskeyAuthentication(t){Qn(this.experimental);try{const{data:l,error:r}=await X(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:t.challengeId,credential:t.credential},xform:Vn});return r?this._returnResult({data:null,error:r}):(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:l,error:null}))}catch(l){if(Z(l))return this._returnResult({data:null,error:l});throw l}}async _listPasskeys(){Qn(this.experimental);try{return await this._useSession(async t=>{const{data:{session:l},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!l)return this._returnResult({data:null,error:new We});const{data:c,error:d}=await X(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:l.access_token,xform:f=>({data:f,error:null})});return d?this._returnResult({data:null,error:d}):this._returnResult({data:c,error:null})})}catch(t){if(Z(t))return this._returnResult({data:null,error:t});throw t}}async _updatePasskey(t){Qn(this.experimental);try{return await this._useSession(async l=>{const{data:{session:r},error:c}=l;if(c)return this._returnResult({data:null,error:c});if(!r)return this._returnResult({data:null,error:new We});const{data:d,error:f}=await X(this.fetch,"PATCH",`${this.url}/passkeys/${t.passkeyId}`,{headers:this.headers,jwt:r.access_token,body:{friendly_name:t.friendlyName}});return f?this._returnResult({data:null,error:f}):this._returnResult({data:d,error:null})})}catch(l){if(Z(l))return this._returnResult({data:null,error:l});throw l}}async _deletePasskey(t){Qn(this.experimental);try{return await this._useSession(async l=>{const{data:{session:r},error:c}=l;if(c)return this._returnResult({data:null,error:c});if(!r)return this._returnResult({data:null,error:new We});const{error:d}=await X(this.fetch,"DELETE",`${this.url}/passkeys/${t.passkeyId}`,{headers:this.headers,jwt:r.access_token,noResolveJson:!0});return d?this._returnResult({data:null,error:d}):this._returnResult({data:null,error:null})})}catch(l){if(Z(l))return this._returnResult({data:null,error:l});throw l}}}Gs.nextInstanceID={};const _m=Gs,km="2.109.0";let js="",x0;if(typeof Deno<"u"){var lo;js="deno",x0=(lo=Deno.version)===null||lo===void 0?void 0:lo.deno}else if(typeof document<"u")js="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")js="react-native";else{var ro;js="node",x0=typeof process<"u"?(ro=process.version)===null||ro===void 0?void 0:ro.replace(/^v/,""):void 0}const Z3=[`runtime=${js}`];x0&&Z3.push(`runtime-version=${x0}`);const Sm={"X-Client-Info":`supabase-js/${km}; ${Z3.join("; ")}`},Tm={headers:Sm},Em={schema:"public"},Am={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},qm={},xm={enabled:!1,respectSamplingDecision:!0};function Om(a,t,l,r){function c(d){return d instanceof l?d:new l(function(f){f(d)})}return new(l||(l=Promise))(function(d,f){function m(K){try{g(r.next(K))}catch(w){f(w)}}function p(K){try{g(r.throw(K))}catch(w){f(w)}}function g(K){K.done?d(K.value):c(K.value).then(m,p)}g((r=r.apply(a,[])).next())})}let oo=null;const Rm="@opentelemetry/api";function Cm(){return oo===null&&(oo=import(Rm).catch(()=>null)),oo}function Mm(){return Om(this,void 0,void 0,function*(){try{const a=yield Cm();if(!a||!a.propagation||!a.context)return null;const t={};a.propagation.inject(a.context.active(),t);const l=t.traceparent;return l?{traceparent:l,tracestate:t.tracestate,baggage:t.baggage}:null}catch{return null}})}function Im(a){if(!a||typeof a!="string")return null;const t=a.split("-");if(t.length!==4)return null;const[l,r,c,d]=t;if(l.length!==2||r.length!==32||c.length!==16||d.length!==2)return null;const f=/^[0-9a-f]+$/i;return!f.test(l)||!f.test(r)||!f.test(c)||!f.test(d)||r==="00000000000000000000000000000000"||c==="0000000000000000"?null:{version:l,traceId:r,parentId:c,traceFlags:d,isSampled:(parseInt(d,16)&1)===1}}function Pm(a,t){if(!a||!t||t.length===0)return!1;let l;if(a instanceof URL)l=a;else try{l=new URL(a)}catch{return!1}for(const r of t)try{if(typeof r=="string"){if(jm(l.hostname,r))return!0}else if(r instanceof RegExp){if(r.test(l.hostname))return!0}else if(typeof r=="function"&&r(l))return!0}catch{continue}return!1}function jm(a,t){if(t===a)return!0;if(t.startsWith("*.")){const l=t.slice(2);if(a.endsWith(l)&&(a===l||a.endsWith("."+l)))return!0}return!1}function Dm(a){const t=[];try{const l=new URL(a);t.push(l.hostname)}catch{}return t.push("*.supabase.co","*.supabase.in"),t.push("localhost","127.0.0.1","[::1]"),t}function Zs(a){"@babel/helpers - typeof";return Zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zs(a)}function Nm(a,t){if(Zs(a)!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var r=l.call(a,t);if(Zs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function Bm(a){var t=Nm(a,"string");return Zs(t)=="symbol"?t:t+""}function Um(a,t,l){return(t=Bm(t))in a?Object.defineProperty(a,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[t]=l,a}function f3(a,t){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),l.push.apply(l,r)}return l}function Ne(a){for(var t=1;t<arguments.length;t++){var l=arguments[t]!=null?arguments[t]:{};t%2?f3(Object(l),!0).forEach(function(r){Um(a,r,l[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):f3(Object(l)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(l,r))})}return a}const zm=a=>a?(...t)=>a(...t):(...t)=>fetch(...t),Hm=()=>Headers,Lm=(a,t,l,r,c)=>{const d=zm(r),f=Hm(),m=(c==null?void 0:c.enabled)===!0,p=(c==null?void 0:c.respectSamplingDecision)!==!1,g=m?Dm(t):null;return async(K,w)=>{var T;const A=(T=await l())!==null&&T!==void 0?T:a;let R=new f(w==null?void 0:w.headers);if(R.has("apikey")||R.set("apikey",a),R.has("Authorization")||R.set("Authorization",`Bearer ${A}`),g){const j=await Vm(K,g,p);j&&(j.traceparent&&!R.has("traceparent")&&R.set("traceparent",j.traceparent),j.tracestate&&!R.has("tracestate")&&R.set("tracestate",j.tracestate),j.baggage&&!R.has("baggage")&&R.set("baggage",j.baggage))}return d(K,Ne(Ne({},w),{},{headers:R}))}};async function Vm(a,t,l){if(!Pm(typeof a=="string"||a instanceof URL?a:a.url,t))return null;const r=await Mm();if(!r||!r.traceparent)return null;if(l){const c=Im(r.traceparent);if(c&&!c.isSampled)return null}return r}function h3(a){return typeof a=="boolean"?{enabled:a}:a}function $m(a){return a.endsWith("/")?a:a+"/"}function Gm(a,t){var l,r,c,d,f,m;const{db:p,auth:g,realtime:K,global:w}=a,{db:T,auth:A,realtime:R,global:j}=t,L=h3(a.tracePropagation),G=h3(t.tracePropagation),H={db:Ne(Ne({},T),p),auth:Ne(Ne({},A),g),realtime:Ne(Ne({},R),K),storage:{},global:Ne(Ne(Ne({},j),w),{},{headers:Ne(Ne({},(l=j==null?void 0:j.headers)!==null&&l!==void 0?l:{}),(r=w==null?void 0:w.headers)!==null&&r!==void 0?r:{})}),tracePropagation:{enabled:(c=(d=L==null?void 0:L.enabled)!==null&&d!==void 0?d:G==null?void 0:G.enabled)!==null&&c!==void 0?c:!1,respectSamplingDecision:(f=(m=L==null?void 0:L.respectSamplingDecision)!==null&&m!==void 0?m:G==null?void 0:G.respectSamplingDecision)!==null&&f!==void 0?f:!0},accessToken:async()=>""};return a.accessToken?H.accessToken=a.accessToken:delete H.accessToken,H}function Zm(a){const t=a==null?void 0:a.trim();if(!t)throw new Error("supabaseUrl is required.");if(!t.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL($m(t))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var Ym=class extends _m{constructor(a){super(a)}},Jm=class{constructor(a,t,l){var r,c;this.supabaseUrl=a,this.supabaseKey=t;const d=Zm(a);if(!t)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",d),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",d),this.storageUrl=new URL("storage/v1",d),this.functionsUrl=new URL("functions/v1",d);const f=`sb-${d.hostname.split(".")[0]}-auth-token`,m={db:Em,realtime:qm,auth:Ne(Ne({},Am),{},{storageKey:f}),global:Tm,tracePropagation:xm},p=Gm(l??{},m);if(this.settings=p,this.storageKey=(r=p.auth.storageKey)!==null&&r!==void 0?r:"",this.headers=(c=p.global.headers)!==null&&c!==void 0?c:{},p.accessToken)this.accessToken=p.accessToken,this.auth=new Proxy({},{get:(K,w)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(w)} is not possible`)}});else{var g;this.auth=this._initSupabaseAuthClient((g=p.auth)!==null&&g!==void 0?g:{},this.headers,p.global.fetch)}this.fetch=Lm(t,a,this._getAccessToken.bind(this),p.global.fetch,p.tracePropagation),this.realtime=this._initRealtimeClient(Ne({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},p.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(K=>this.realtime.setAuth(K)).catch(K=>console.warn("Failed to set initial Realtime auth token:",K)),this.rest=new ap(new URL("rest/v1",d).href,{headers:this.headers,schema:p.db.schema,fetch:this.fetch,timeout:p.db.timeout,urlLengthLimit:p.db.urlLengthLimit}),this.storage=new _5(this.storageUrl.href,this.headers,this.fetch,l==null?void 0:l.storage),p.accessToken||this._listenForAuthEvents()}get functions(){return new J4(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(a){return this.rest.from(a)}schema(a){return this.rest.schema(a)}rpc(a,t={},l={head:!1,get:!1,count:void 0}){return this.rest.rpc(a,t,l)}channel(a,t={config:{}}){return this.realtime.channel(a,t)}getChannels(){return this.realtime.getChannels()}removeChannel(a){return this.realtime.removeChannel(a)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var a=this,t,l;if(a.accessToken)return await a.accessToken();const{data:r}=await a.auth.getSession();return(t=(l=r.session)===null||l===void 0?void 0:l.access_token)!==null&&t!==void 0?t:a.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:a,persistSession:t,detectSessionInUrl:l,storage:r,userStorage:c,storageKey:d,flowType:f,lock:m,debug:p,throwOnError:g,experimental:K,lockAcquireTimeout:w,skipAutoInitialize:T},A,R){const j={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Ym({url:this.authUrl.href,headers:Ne(Ne({},j),A),storageKey:d,autoRefreshToken:a,persistSession:t,detectSessionInUrl:l,storage:r,userStorage:c,flowType:f,lock:m,debug:p,throwOnError:g,experimental:K,fetch:R,lockAcquireTimeout:w,skipAutoInitialize:T,hasCustomAuthorizationHeader:Object.keys(this.headers).some(L=>L.toLowerCase()==="authorization")})}_initRealtimeClient(a){return new Gp(this.realtimeUrl.href,Ne(Ne({},a),{},{params:Ne(Ne({},{apikey:this.supabaseKey}),a==null?void 0:a.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((a,t)=>{this._handleTokenChanged(a,"CLIENT",t==null?void 0:t.access_token)})}_handleTokenChanged(a,t,l){(a==="TOKEN_REFRESHED"||a==="SIGNED_IN")&&this.changedAccessToken!==l?(this.changedAccessToken=l,this.realtime.setAuth(l)):a==="SIGNED_OUT"&&(this.realtime.setAuth(),t=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const Xm=(a,t,l)=>new Jm(a,t,l);function Qm(){if(typeof window<"u")return!1;const a=globalThis.process;if(!a)return!1;const t=a.version;if(t==null)return!1;const l=t.match(/^v(\d+)\./);return l?parseInt(l[1],10)<=18:!1}Qm()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const Fm="https://fdgdosjlyhzmgktnancu.supabase.co",Wm="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkZ2Rvc2pseWh6bWdrdG5hbmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3MzE0MzcsImV4cCI6MjEwODMwNzQzN30.yGJ2Zy6km26CmFchjrOm3idpvFT431_Ce4EBB6T9_zA",Ot=Xm(Fm,Wm),Ys=a=>JSON.stringify(a,(t,l)=>l&&typeof l=="object"&&!Array.isArray(l)?Object.fromEntries(Object.keys(l).sort().map(r=>[r,l[r]])):l),O0=(a,t)=>Number.isFinite(a==null?void 0:a.updatedAt)?a.updatedAt:t,v0=(a,t,l,r)=>a?t?l>r?a:r>l?t:Ys(a)>=Ys(t)?a:t:a:t;function R0(a,t){const l=L4(a,t),r={};for(const[c,d]of Object.entries(l.records)){const f=O0(d,l.updatedAt??0);r[c]={...d,updatedAt:f,understoodAt:d.understoodAt??f,answers:Object.fromEntries(Object.entries(d.answers).map(([m,p])=>[m,{...p,updatedAt:O0(p,f)}]))}}return{...l,records:r}}function Y3(a,t,l){const r=R0(a,l),c=R0(t,l),d=v0(r,c,r.updatedAt,c.updatedAt),f={};for(const p of[...new Set([...Object.keys(r.records),...Object.keys(c.records)])].sort()){const g=r.records[p],K=c.records[p];if(!g||!K){f[p]=g||K;continue}const w=v0(g,K,g.updatedAt,K.updatedAt);if(g.revision!==K.revision){f[p]=w;continue}const T={};for(const R of[...new Set([...Object.keys(g.answers),...Object.keys(K.answers)])].sort())T[R]=v0(g.answers[R],K.answers[R],O0(g.answers[R],0),O0(K.answers[R],0));const A=v0(g,K,g.understoodAt,K.understoodAt);f[p]={...w,answers:T,understood:!!A.understood,understoodAt:Math.max(g.understoodAt,K.understoodAt),updatedAt:Math.max(g.updatedAt,K.updatedAt)}}const m=[...new Map([...r.archives||[],...c.archives||[]].map(p=>[Ys(p),p])).entries()].sort(([p],[g])=>p.localeCompare(g)).map(([,p])=>p);return{...d,records:f,updatedAt:Math.max(r.updatedAt,c.updatedAt),...m.length?{archives:m}:{}}}async function eg(a,t,l,r){for(let c=0;c<5;c++){const{data:d,error:f}=await a.from("learning_progress").select("data,revision").eq("user_id",t).maybeSingle();if(f)throw f;if(d&&!C0(d.data))throw Error("云端记录格式异常，已保留本机进度");const m=Y3(l,(d==null?void 0:d.data)||co(),r);if(d&&Ys(m)===Ys(d.data))return m;if(!d){const g=await a.from("learning_progress").insert({user_id:t,data:m,revision:1}).select("revision").single();if(!g.error)return m;if(g.error.code==="23505")continue;throw g.error}const p=await a.from("learning_progress").update({data:m,revision:d.revision+1,updated_at:new Date().toISOString()}).eq("user_id",t).eq("revision",d.revision).select("revision").maybeSingle();if(p.error)throw p.error;if(p.data)return m}throw Error("其他设备正在同步，请稍后重试")}function ng(a,t,l,r,c){const[d,f]=v.useState(""),[m,p]=v.useState(!1),g=v.useRef(null),K=v.useRef(l);return K.current=l,v.useEffect(()=>{if(p(!1),!a||!t)return;let w=!0,T=!1,A=!1,R;async function j(){if(w){if(T){A=!0;return}if(!navigator.onLine){f("离线，已保存在本机");return}T=!0,f("正在同步");try{const se=await eg(a,t.user.id,K.current,c);if(!w)return;r(de=>{const ne={...Y3(de,se,c),selected:de.selected};return JSON.stringify(de)===JSON.stringify(ne)?de:ne}),p(!0),f("已同步到云端")}catch{w&&f("同步失败，已保存在本机")}finally{T=!1,w&&A&&(A=!1,L())}}}function L(){w&&(clearTimeout(R),f(navigator.onLine?"等待同步":"离线，已保存在本机"),R=setTimeout(j,600))}function G(){document.visibilityState==="visible"&&j()}function H(){f("离线，已保存在本机")}g.current=L,j();const z=setInterval(()=>{document.visibilityState==="visible"&&j()},15e3);return window.addEventListener("online",j),window.addEventListener("offline",H),window.addEventListener("focus",j),document.addEventListener("visibilitychange",G),()=>{w=!1,g.current=null,clearTimeout(R),clearInterval(z),window.removeEventListener("online",j),window.removeEventListener("offline",H),window.removeEventListener("focus",j),document.removeEventListener("visibilitychange",G)}},[a,t==null?void 0:t.user.id,r,c]),v.useEffect(()=>{var w;(w=g.current)==null||w.call(g)},[l]),{sync:d,syncReady:m,retry:()=>{var w;return(w=g.current)==null?void 0:w.call(g)}}}const uo=[...new Set(en.map(a=>a.group))],p3=a=>`./${a.replace(/^\/+/,"")}`;function tg(){let a;try{const r=localStorage.getItem(T3);if(r){const c=JSON.parse(r);if(!C0(c))throw Error();a=R0(c,en)}else a=co()}catch{a={...co(),storageWarning:!0}}const t=new URLSearchParams(window.location.search).get("lesson"),l=en.find(r=>r.id===t);return l&&Ms(a,l,en)?{...a,selected:l.id}:a}function ig(){var Bi,Ui,zi;const[a,t]=v.useState(tg),[l,r]=v.useState("lesson"),[c,d]=v.useState("recap"),[f,m]=v.useState(0),[p,g]=v.useState(null),[K,w]=v.useState(!1),[T,A]=v.useState(""),[R,j]=v.useState(null),[L,G]=v.useState(null),[H,z]=v.useState(null),[se,de]=v.useState(!1),[ne,W]=v.useState("login"),[Je,Me]=v.useState(!1),ct=v.useRef(),bn=v.useRef(),Xe=l==="lesson"&&c==="quiz";v.useLayoutEffect(()=>{var U;l==="lesson"&&(window.scrollTo({top:0,left:0,behavior:"instant"}),c==="quiz"&&((U=bn.current)==null||U.focus({preventScroll:!0})))},[l,c,f,a.selected]);const{sync:Cn,retry:$n}=ng(Ot,H,a,t,en),Q=en.find(U=>U.id===a.selected)||en[5],C=ci(a,Q.id),B=Q.questions[f],te=V4(a,en),ke=en.filter(U=>ri(a,U)).length,ye=$4(a,Q);function _(U){A(U)}function D(U){t(V=>({...U(V),updatedAt:Date.now()}))}function $(U){const V=Date.now();D(fe=>{const He=ci(fe,Q.id),cn=U(He),fn=Object.fromEntries(Object.entries(cn.answers).map(([tt,It])=>[tt,It===He.answers[tt]?It:{...It,updatedAt:V}]));return{...fe,records:{...fe.records,[Q.id]:{...cn,answers:fn,updatedAt:V,understoodAt:V,revision:Q.revision||"trend-v1"}}}})}v.useEffect(()=>{const U=new URL(window.location.href);U.searchParams.has("lesson")&&(U.searchParams.delete("lesson"),window.history.replaceState(window.history.state,"",U))},[]),v.useEffect(()=>{try{localStorage.setItem(T3,JSON.stringify(a))}catch{_("本机保存失败，请导出进度备份。")}},[a]),v.useEffect(()=>{if(!T)return;const U=setTimeout(()=>A(""),5e3);return()=>clearTimeout(U)},[T]),v.useEffect(()=>{if(!Ot)return;Ot.auth.getSession().then(({data:V,error:fe})=>{fe?_("登录状态读取失败"):z(V.session)});const{data:U}=Ot.auth.onAuthStateChange((V,fe)=>{z(fe)});return()=>U.subscription.unsubscribe()},[]),v.useEffect(()=>{if(!R&&!L)return;const U=document.activeElement,V=He=>{if(He.key==="Escape"&&(j(null),G(null)),He.key==="Tab"){const cn=document.querySelector('[role="dialog"]'),fn=cn==null?void 0:cn.querySelectorAll("button,input,a");if(!(fn!=null&&fn.length))return;const tt=fn[0],It=fn[fn.length-1];He.shiftKey&&document.activeElement===tt?(He.preventDefault(),It.focus()):!He.shiftKey&&document.activeElement===It&&(He.preventDefault(),tt.focus())}},fe=setTimeout(()=>{var He;return(He=document.querySelector('[role="dialog"] button'))==null?void 0:He.focus()},0);return document.addEventListener("keydown",V),()=>{clearTimeout(fe),document.removeEventListener("keydown",V),U==null||U.focus()}},[R,L]);function Y(U,V=null){if(!Ms(a,U,en)){_("先完成本组上一节的订正，并确认掌握。");return}D(fe=>({...fe,selected:U.id})),r("lesson"),d(V===null?"recap":"quiz"),m(V??0),Me(!1),g(null),w(!1),window.scrollTo(0,0)}function le(U=!1){const V=U?Q.questions.findIndex(fe=>!Fn(C.answers[fe.id],fe)):Ni;if(V<0&&!ri(a,Q)){d("result");return}Me(V<0),m(V<0?0:V),g(null),w(!1),d("quiz")}function ce(){p!==null&&($(U=>({...U,understood:!1,answers:{...U.answers,[B.id]:{choice:p,correct:p===B.answer,unsure:!1}}})),w(!0))}function Ke(){const U=Je?f+1<Q.questions.length?f+1:-1:Q.questions.findIndex((V,fe)=>fe>f&&!Fn(C.answers[V.id],V));U>=0?(m(U),g(null),w(!1)):d("result")}function nn(){Ci(a,Q)&&($(U=>({...U,understood:!0})),_("本课已掌握，下一节已解锁。"))}function Pe(){const U=URL.createObjectURL(new Blob([JSON.stringify(a,null,2)],{type:"application/json"})),V=document.createElement("a");V.href=U,V.download="课后练习-学习进度.json",V.click(),URL.revokeObjectURL(U)}async function di(U){var fe;const V=(fe=U.target.files)==null?void 0:fe[0];if(U.target.value="",!!V)try{if(V.size>2e6)throw Error();const He=JSON.parse(await V.text());if(!C0(He))throw Error();if(!window.confirm("导入会替换当前学习进度，确定继续吗？"))return;t(cn=>({...R0(He,en),updatedAt:Math.max(Date.now(),cn.updatedAt+1)})),d("recap"),r("lesson"),_("进度已导入")}catch{_("文件无效，请选择本应用导出的进度 JSON。")}}async function Pi(U){if(U.preventDefault(),!Ot)return;de(!0);const V=new FormData(U.target),fe=String(V.get("email")).trim(),He=V.get("password");try{if(ne==="signup"){const{data:cn,error:fn}=await Ot.auth.signUp({email:fe,password:He,options:{emailRedirectTo:window.location.origin+window.location.pathname}});if(fn){_("创建失败："+fn.message);return}cn.session?j(null):(_("请查看邮箱中的确认邮件，确认后回到这里登录。"),W("login"))}else{const{error:cn}=await Ot.auth.signInWithPassword({email:fe,password:He});cn?_("登录失败，请检查邮箱、密码及邮件确认状态。"):j(null)}}catch{_("暂时无法连接，请检查网络后重试。")}finally{de(!1)}}const ji=en.filter(U=>U.group===Q.group),ja=ji.indexOf(Q),Gn=ji[ja+1],Mn=Q.questions.filter(U=>C.answers[U.id]).length,Di=Q.questions.filter(U=>Fn(C.answers[U.id],U)).length,Da=Q.questions.filter(U=>C.answers[U.id]&&!Fn(C.answers[U.id],U)).length,Ni=Q.questions.findIndex(U=>!C.answers[U.id]);return S.jsxs("div",{className:Xe?"app quiz-mode":"app",children:[Xe&&S.jsxs("div",{className:"mobile-quiz-bar",children:[S.jsxs("button",{onClick:()=>d("recap"),children:[S.jsx(D4,{size:18}),"退出练习"]}),S.jsxs("span",{children:[Q.id," · ",f+1,"/",Q.questions.length," 题"]}),S.jsx("button",{"aria-label":`进度与同步：${H?Cn:"仅本机保存"}`,onClick:()=>j("settings"),children:S.jsx(Md,{size:20})})]}),S.jsx("header",{children:S.jsxs("div",{className:"header-inner",children:[S.jsx("button",{className:"brand",onClick:()=>{r("lesson"),d("recap")},children:"课堂手记"}),S.jsxs("nav",{"aria-label":"主导航",children:[S.jsx("button",{className:l==="lesson"?"active":"",onClick:()=>{r("lesson"),d("recap")},children:"课后练习"}),S.jsx("button",{className:l==="courses"?"active":"",onClick:()=>r("courses"),children:"课程"}),S.jsxs("button",{className:l==="review"?"active":"",onClick:()=>r("review"),children:["错题复习",te.length>0&&S.jsx("span",{className:"count",children:te.length})]})]}),S.jsxs("button",{className:"save-state",onClick:()=>j("settings"),children:[S.jsx(Md,{size:18}),S.jsx("span",{children:H?Cn:"仅本机保存"})]})]})}),S.jsxs("main",{children:[a.migrationNotice&&S.jsxs("div",{className:"migration-note",role:"status",children:[S.jsx("span",{children:a.migrationNotice}),S.jsx("button",{onClick:()=>D(U=>({...U,migrationNotice:null})),children:"知道了"})]}),a.storageWarning&&S.jsx("p",{className:"warning",children:"本机旧记录无法读取，已启用新进度。请从备份恢复。"}),l==="lesson"&&S.jsx(S.Fragment,{children:S.jsxs("div",{className:"lesson-layout",children:[S.jsxs("section",{className:"lesson-content",children:[S.jsxs("div",{className:`lesson-heading ${c==="quiz"?"quiz-heading":""}`,children:[c!=="quiz"&&S.jsx("div",{className:"eyebrow",children:c==="recap"?"课后回顾":"练习结果"}),S.jsxs("h1",{children:[Q.id," ",Q.group," · 第",ja+1,"节"]}),S.jsx("p",{className:"source",children:c==="quiz"?`第 ${f+1} 题 / 共 ${Q.questions.length} 题${B.knowledgeTitle?` · ${B.knowledgeTitle}`:""}`:`来源：本课字幕 ${Q.range}`})]}),c==="recap"&&S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"start-area",children:[ye.total>0&&S.jsxs("p",{className:"coverage-status",children:["已订正 ",ye.learned," / ",ye.total," 个知识点"]}),S.jsxs("button",{className:"primary",onClick:()=>le(),children:[ri(a,Q)?"重新练习本课":Mn===Q.questions.length?Ci(a,Q)?"查看结果并确认理解":"查看结果与订正":Mn?"继续本课练习":"开始本课练习",S.jsx(li,{size:22})]}),S.jsxs("p",{className:"hint",children:[Mn>0?`已答 ${Mn}/${Q.questions.length} 题 · 待订正 ${Da} 题`:`本课 ${Q.questions.length} 道练习 · 可分次完成`,Mn>0&&Ni>=0?` · 从第 ${Ni+1} 题继续`:""]}),S.jsx("p",{className:"save-hint",children:a.storageWarning?"请检查本机保存状态":H?Cn:"已提交答案保存在本机，换设备需登录同步"})]}),S.jsxs("details",{className:"recap-notes",open:Mn===0?!0:void 0,children:[S.jsx("summary",{children:"回顾本课重点"}),S.jsx("ol",{className:"notes",children:Q.notes.map((U,V)=>S.jsxs("li",{children:[S.jsx("span",{className:"number",children:V+1}),S.jsx("p",{children:U})]},U))})]},`${Q.id}-${Mn>0}`),Q.knowledgePoints&&S.jsxs("details",{className:"knowledge-outline",children:[S.jsxs("summary",{children:["查看本课 ",ye.total," 个知识点与学习情况"]}),S.jsx("ol",{children:Q.knowledgePoints.map(U=>S.jsxs("li",{children:[S.jsxs("div",{children:[S.jsx("strong",{children:U.title}),S.jsx("span",{children:Q.questions.filter(V=>V.knowledgeId===U.id).every(V=>Fn(C.answers[V.id],V))?ri(a,Q)?"已确认理解":"已订正，待确认":Q.questions.some(V=>V.knowledgeId===U.id&&C.answers[V.id])?"待巩固":"未练习"})]}),S.jsx("p",{children:U.summary}),S.jsxs("small",{children:["字幕 ",U.time,U.pdfPages.length?` · PDF ${U.pdfPages.join("、")}页`:""]})]},U.id))})]})]}),c==="quiz"&&S.jsxs("div",{className:"quiz",children:[S.jsx("h2",{ref:bn,tabIndex:-1,children:B.prompt}),B.image&&S.jsxs("figure",{children:[S.jsxs("button",{className:"figure-button",onClick:()=>G(B.image),"aria-label":"放大课程图表",children:[S.jsx("img",{src:p3(B.image.src),alt:B.image.alt}),S.jsxs("span",{children:[S.jsx(U4,{size:18}),"点击放大"]})]}),S.jsxs("figcaption",{children:["课程 PDF 第 ",B.image.page," 页 · 图表局部，提交后可看整页讲解"]})]}),S.jsxs("fieldset",{disabled:K,children:[S.jsx("legend",{className:"sr-only",children:"选择一个答案"}),B.options.map((U,V)=>S.jsxs("label",{className:`option ${p===V?"selected":""} ${K&&V===B.answer?"correct":""} ${K&&p===V&&p!==B.answer?"incorrect":""}`,children:[S.jsx("input",{type:"radio",name:`answer-${Q.id}-${f}`,checked:p===V,onChange:()=>g(V)}),S.jsx("span",{children:U}),K&&V===B.answer&&S.jsx(no,{size:20})]},U))]}),K?S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:`explanation ${p!==B.answer?"needs-review":""}`,role:"status",children:[S.jsx("strong",{children:p===B.answer?"回答正确":"这题再理解一下"}),S.jsx("p",{children:B.explanation}),S.jsxs("p",{className:"source",children:[Q.id," 字幕 ",B.time,(Bi=B.pdfPages)!=null&&Bi.length?` · PDF ${B.pdfPages.join("、")}页`:""]}),(((Ui=B.image)==null?void 0:Ui.solutionSrc)||B.referenceImage)&&S.jsxs("button",{className:"solution-button",onClick:()=>G(B.referenceImage||{...B.image,src:B.image.solutionSrc,alt:`第${B.image.page}页课件整页讲解`,kind:"课件整页"}),children:[S.jsx(Cd,{size:18}),"查看课件整页讲解"]}),S.jsxs("details",{children:[S.jsx("summary",{children:"查看对应字幕原文"}),S.jsx("p",{className:"transcript",children:B.quote})]}),S.jsxs("label",{className:"unsure",children:[S.jsx("input",{type:"checkbox",checked:!!((zi=C.answers[B.id])!=null&&zi.unsure),onChange:U=>$(V=>({...V,understood:!1,answers:{...V.answers,[B.id]:{...V.answers[B.id],unsure:U.target.checked}}}))}),"我还没完全理解，加入复习"]})]}),S.jsxs("button",{className:"primary",onClick:Ke,children:[f===Q.questions.length-1?"查看本课结果":"下一题",S.jsx(li,{size:20})]})]}):S.jsxs("button",{className:"primary",disabled:p===null,onClick:ce,children:["提交答案",S.jsx(li,{size:20})]}),S.jsx("button",{className:"text-button",onClick:()=>d("recap"),children:"暂停并返回回顾"})]}),c==="result"&&S.jsxs("div",{className:"result",children:[ye.total>0&&S.jsxs("p",{className:"coverage-status",children:["已订正 ",ye.learned," / ",ye.total," 个知识点"]}),S.jsx("h2",{children:C.understood?"本课已掌握":Ci(a,Q)?"练习已全部订正":"把没懂的地方再练一遍"}),S.jsxs("p",{children:["已订正 ",Q.questions.filter(U=>Fn(C.answers[U.id],U)).length," / ",Q.questions.length," 题。",Ci(a,Q)?"确认每个知识点都理解了，再进入下一节。":"答错或标记没懂的题，会留在复习清单中。"]}),S.jsx("div",{className:"answer-list",children:Q.questions.map((U,V)=>S.jsxs("button",{onClick:()=>{m(V),Me(!1),g(null),w(!1),d("quiz")},children:[S.jsxs("span",{children:[V+1,". ",U.prompt]}),S.jsx("span",{className:Fn(C.answers[U.id],U)?"good":"muted",children:C.answers[U.id]?Fn(C.answers[U.id],U)?"已订正":"待复习":"未作答"})]},V))}),Ci(a,Q)?S.jsxs("button",{className:"primary",disabled:C.understood,onClick:nn,children:[S.jsx(no,{size:20}),C.understood?"已确认掌握":"我已理解本课"]}):S.jsxs("button",{className:"primary",onClick:()=>le(!0),children:["重练未掌握的题",S.jsx(li,{size:20})]}),C.understood&&Gn&&S.jsxs("button",{className:"text-button",onClick:()=>Y(Gn),children:["进入 ",Gn.id," 下一节",S.jsx(li,{size:18})]})]})]}),!Xe&&S.jsxs("aside",{className:"lesson-progress",children:[S.jsx("h3",{children:"本课进度"}),S.jsxs("dl",{children:[S.jsxs("div",{children:[S.jsx("dt",{children:"已作答"}),S.jsxs("dd",{children:[Mn,S.jsxs("small",{children:[" / ",Q.questions.length," 题"]})]})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"待订正 / 没懂"}),S.jsxs("dd",{children:[Da,S.jsx("small",{children:" 题"})]})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"已订正"}),S.jsxs("dd",{children:[Di,S.jsxs("small",{children:[" / ",Q.questions.length," 题"]})]})]})]}),S.jsx("progress",{"aria-label":"本课已订正题目",value:Di,max:Q.questions.length}),S.jsx("p",{className:"progress-note",children:ri(a,Q)?"你已确认理解本课。":Ci(a,Q)?"全部订正完毕，等待你确认理解。":Da?"先完成练习，再集中订正答错和没懂的题。":"完成练习、订正并确认理解后，解锁本组下一节。"})]})]})}),l==="courses"&&S.jsxs("section",{className:"collection",children:[S.jsx("div",{className:"eyebrow",children:"学习目录"}),S.jsx("h1",{children:"一课一练，理解后再继续"}),S.jsxs("p",{className:"source",children:[uo.join("、")," · ",en.length,"节课 · 已掌握 ",ke," 节"]}),S.jsx("div",{className:"course-groups",children:uo.map(U=>S.jsxs("section",{children:[S.jsx("h2",{children:U}),en.filter(V=>V.group===U).map(V=>S.jsxs("button",{className:"course-row",onClick:()=>Y(V),"aria-disabled":!Ms(a,V,en),children:[S.jsx("span",{className:"course-id",children:V.id}),S.jsxs("span",{children:[V.title,S.jsx("small",{children:ri(a,V)?"已掌握":Object.keys(ci(a,V.id).answers).length?"练习中":Ms(a,V,en)?"可以开始":"待解锁"})]}),ri(a,V)?S.jsx(no,{size:22}):Ms(a,V,en)?S.jsx(li,{size:22}):S.jsx(B4,{size:20})]},V.id))]},U))}),S.jsxs("p",{className:"hint",children:["各组可以分别从 ",uo.map(U=>en.find(V=>V.group===U).id).join("、")," 开始；组内按顺序解锁。"]})]}),l==="review"&&S.jsxs("section",{className:"collection",children:[S.jsx("div",{className:"eyebrow",children:"再理解一次"}),S.jsx("h1",{children:"错题与没懂的地方"}),S.jsx("p",{className:"source",children:"答错的题和你标记没懂的题会留在这里，答对并取消“没懂”后移出。"}),te.length?S.jsx("div",{className:"review-list",children:te.map(({lesson:U,index:V})=>S.jsxs("button",{onClick:()=>Y(U,V),children:[S.jsx("span",{className:"course-id",children:U.id}),S.jsxs("span",{children:[U.questions[V].prompt,S.jsx("small",{children:ci(a,U.id).answers[U.questions[V].id].unsure?"标记为没懂":"待订正"})]}),S.jsx(li,{size:22})]},`${U.id}-${V}`))}):S.jsxs("div",{className:"empty",children:[S.jsx(Cd,{size:40}),S.jsx("h2",{children:"目前没有待复习的题"}),S.jsx("p",{children:"开始一节课的练习，遇到没懂的地方就把它留下来。"}),S.jsxs("button",{className:"primary",onClick:()=>r("courses"),children:["选择课程",S.jsx(li,{size:20})]})]})]})]}),T&&S.jsx("div",{className:"toast",role:"status",children:T}),(R||L)&&S.jsx("div",{className:"overlay",onClick:()=>{j(null),G(null)},children:S.jsxs("section",{role:"dialog","aria-modal":"true","aria-label":L?"课程图表":"进度与同步设置",className:`modal ${L?"image-modal":""}`,onClick:U=>U.stopPropagation(),children:[S.jsx("button",{className:"close","aria-label":"关闭",onClick:()=>{j(null),G(null)},children:S.jsx(H4,{size:24})}),L?S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"zoom-region",children:S.jsx("img",{src:p3(L.src),alt:L.alt})}),S.jsxs("p",{children:["课程 PDF 第 ",L.page," 页 · ",L.kind||"图表局部"," · 可左右滑动，支持双指缩放"]})]}):S.jsxs(S.Fragment,{children:[S.jsx("h2",{children:"进度与同步"}),S.jsx("p",{className:"source",children:H?Cn:"当前记录仅保存在这个浏览器中。换设备前，请导出进度，或连接云端同步。"}),S.jsxs("div",{className:"backup-actions",children:[S.jsxs("button",{className:"secondary",onClick:Pe,children:[S.jsx(N4,{size:20}),"导出进度"]}),S.jsxs("button",{className:"secondary",onClick:()=>ct.current.click(),children:[S.jsx(z4,{size:20}),"导入进度"]}),S.jsx("input",{ref:ct,type:"file",accept:"application/json,.json",hidden:!0,onChange:di})]}),S.jsx("hr",{}),Ot?H?S.jsxs(S.Fragment,{children:[S.jsxs("p",{children:["已登录：",H.user.email]}),S.jsx("button",{className:"secondary",onClick:async()=>{await Ot.auth.signOut(),_("已退出，进度仍保存在本机")},children:"退出登录"}),S.jsx("button",{className:"text-button",onClick:$n,children:"立即同步"})]}):S.jsxs("form",{onSubmit:Pi,children:[S.jsx("h3",{children:ne==="signup"?"创建同步账号":"登录同步账号"}),S.jsx("p",{className:"hint",children:"手机和电脑使用同一个账号，答题记录自动同步。"}),S.jsxs("label",{children:["邮箱",S.jsx("input",{required:!0,name:"email",type:"email",autoComplete:"username"})]}),S.jsxs("label",{children:["密码",S.jsx("input",{required:!0,name:"password",type:"password",autoComplete:ne==="signup"?"new-password":"current-password",minLength:8})]}),S.jsx("button",{className:"primary",disabled:se,children:se?"正在连接…":ne==="signup"?"创建账号":"登录并同步"}),S.jsx("button",{className:"text-button",type:"button",disabled:se,onClick:()=>W(ne==="login"?"signup":"login"),children:ne==="login"?"首次使用？创建同步账号":"已有账号？返回登录"}),S.jsx("p",{className:"hint",children:"首次注册请使用登录 Supabase 时的邮箱，并查看确认邮件。登录后会合并本机进度。密码至少8位，不需要使用 GitHub 密码。"})]}):S.jsxs(S.Fragment,{children:[S.jsx("h3",{children:"云端同步尚未配置"}),S.jsx("p",{children:"本次试用可以正常做题和保存本机进度。连接免费 Supabase 项目后，可使用邮箱和密码登录同步。"}),S.jsx("p",{className:"hint",children:"尚未连接云端，不会显示“已同步”。"})]})]})]})})]})}T4.createRoot(document.getElementById("root")).render(S.jsx(w4.StrictMode,{children:S.jsx(ig,{})}));
