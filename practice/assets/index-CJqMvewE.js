(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function r(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(c){if(c.ep)return;c.ep=!0;const d=r(c);fetch(c.href,d)}})();function pm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ju={exports:{}},ks={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh;function mm(){if(bh)return ks;bh=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(l,c,d){var h=null;if(d!==void 0&&(h=""+d),c.key!==void 0&&(h=""+c.key),"key"in c){d={};for(var m in c)m!=="key"&&(d[m]=c[m])}else d=c;return c=d.ref,{$$typeof:i,type:l,key:h,ref:c!==void 0?c:null,props:d}}return ks.Fragment=n,ks.jsx=r,ks.jsxs=r,ks}var _h;function gm(){return _h||(_h=1,Ju.exports=mm()),Ju.exports}var T=gm(),Xu={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sh;function ym(){if(Sh)return oe;Sh=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),A=Symbol.iterator;function k(E){return E===null||typeof E!="object"?null:(E=A&&E[A]||E["@@iterator"],typeof E=="function"?E:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,P={};function V(E,U,G){this.props=E,this.context=U,this.refs=P,this.updater=G||C}V.prototype.isReactComponent={},V.prototype.setState=function(E,U){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,U,"setState")},V.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function B(){}B.prototype=V.prototype;function L(E,U,G){this.props=E,this.context=U,this.refs=P,this.updater=G||C}var ie=L.prototype=new B;ie.constructor=L,D(ie,V.prototype),ie.isPureReactComponent=!0;var fe=Array.isArray;function te(){}var F={H:null,A:null,T:null,S:null},We=Object.prototype.hasOwnProperty;function Me(E,U,G){var J=G.ref;return{$$typeof:i,type:E,key:U,ref:J!==void 0?J:null,props:G}}function ln(E,U){return Me(E.type,U,E.props)}function Et(E){return typeof E=="object"&&E!==null&&E.$$typeof===i}function ut(E){var U={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(G){return U[G]})}var se=/\/+/g;function Ce(E,U){return typeof E=="object"&&E!==null&&E.key!=null?ut(""+E.key):U.toString(36)}function re(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(te,te):(E.status="pending",E.then(function(U){E.status==="pending"&&(E.status="fulfilled",E.value=U)},function(U){E.status==="pending"&&(E.status="rejected",E.reason=U)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function N(E,U,G,J,le){var he=typeof E;(he==="undefined"||he==="boolean")&&(E=null);var we=!1;if(E===null)we=!0;else switch(he){case"bigint":case"string":case"number":we=!0;break;case"object":switch(E.$$typeof){case i:case n:we=!0;break;case w:return we=E._init,N(we(E._payload),U,G,J,le)}}if(we)return le=le(E),we=J===""?"."+Ce(E,0):J,fe(le)?(G="",we!=null&&(G=we.replace(se,"$&/")+"/"),N(le,U,G,"",function(on){return on})):le!=null&&(Et(le)&&(le=ln(le,G+(le.key==null||E&&E.key===le.key?"":(""+le.key).replace(se,"$&/")+"/")+we)),U.push(le)),1;we=0;var at=J===""?".":J+":";if(fe(E))for(var ze=0;ze<E.length;ze++)J=E[ze],he=at+Ce(J,ze),we+=N(J,U,G,he,le);else if(ze=k(E),typeof ze=="function")for(E=ze.call(E),ze=0;!(J=E.next()).done;)J=J.value,he=at+Ce(J,ze++),we+=N(J,U,G,he,le);else if(he==="object"){if(typeof E.then=="function")return N(re(E),U,G,J,le);throw U=String(E),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return we}function $(E,U,G){if(E==null)return E;var J=[],le=0;return N(E,J,"","",function(he){return U.call(G,he,le++)}),J}function W(E){if(E._status===-1){var U=E._result;U=U(),U.then(function(G){(E._status===0||E._status===-1)&&(E._status=1,E._result=G)},function(G){(E._status===0||E._status===-1)&&(E._status=2,E._result=G)}),E._status===-1&&(E._status=0,E._result=U)}if(E._status===1)return E._result.default;throw E._result}var de=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},Se={map:$,forEach:function(E,U,G){$(E,function(){U.apply(this,arguments)},G)},count:function(E){var U=0;return $(E,function(){U++}),U},toArray:function(E){return $(E,function(U){return U})||[]},only:function(E){if(!Et(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return oe.Activity=v,oe.Children=Se,oe.Component=V,oe.Fragment=r,oe.Profiler=c,oe.PureComponent=L,oe.StrictMode=l,oe.Suspense=p,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,oe.__COMPILER_RUNTIME={__proto__:null,c:function(E){return F.H.useMemoCache(E)}},oe.cache=function(E){return function(){return E.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(E,U,G){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var J=D({},E.props),le=E.key;if(U!=null)for(he in U.key!==void 0&&(le=""+U.key),U)!We.call(U,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&U.ref===void 0||(J[he]=U[he]);var he=arguments.length-2;if(he===1)J.children=G;else if(1<he){for(var we=Array(he),at=0;at<he;at++)we[at]=arguments[at+2];J.children=we}return Me(E.type,le,J)},oe.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},oe.createElement=function(E,U,G){var J,le={},he=null;if(U!=null)for(J in U.key!==void 0&&(he=""+U.key),U)We.call(U,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(le[J]=U[J]);var we=arguments.length-2;if(we===1)le.children=G;else if(1<we){for(var at=Array(we),ze=0;ze<we;ze++)at[ze]=arguments[ze+2];le.children=at}if(E&&E.defaultProps)for(J in we=E.defaultProps,we)le[J]===void 0&&(le[J]=we[J]);return Me(E,he,le)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(E){return{$$typeof:m,render:E}},oe.isValidElement=Et,oe.lazy=function(E){return{$$typeof:w,_payload:{_status:-1,_result:E},_init:W}},oe.memo=function(E,U){return{$$typeof:g,type:E,compare:U===void 0?null:U}},oe.startTransition=function(E){var U=F.T,G={};F.T=G;try{var J=E(),le=F.S;le!==null&&le(G,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(te,de)}catch(he){de(he)}finally{U!==null&&G.types!==null&&(U.types=G.types),F.T=U}},oe.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},oe.use=function(E){return F.H.use(E)},oe.useActionState=function(E,U,G){return F.H.useActionState(E,U,G)},oe.useCallback=function(E,U){return F.H.useCallback(E,U)},oe.useContext=function(E){return F.H.useContext(E)},oe.useDebugValue=function(){},oe.useDeferredValue=function(E,U){return F.H.useDeferredValue(E,U)},oe.useEffect=function(E,U){return F.H.useEffect(E,U)},oe.useEffectEvent=function(E){return F.H.useEffectEvent(E)},oe.useId=function(){return F.H.useId()},oe.useImperativeHandle=function(E,U,G){return F.H.useImperativeHandle(E,U,G)},oe.useInsertionEffect=function(E,U){return F.H.useInsertionEffect(E,U)},oe.useLayoutEffect=function(E,U){return F.H.useLayoutEffect(E,U)},oe.useMemo=function(E,U){return F.H.useMemo(E,U)},oe.useOptimistic=function(E,U){return F.H.useOptimistic(E,U)},oe.useReducer=function(E,U,G){return F.H.useReducer(E,U,G)},oe.useRef=function(E){return F.H.useRef(E)},oe.useState=function(E){return F.H.useState(E)},oe.useSyncExternalStore=function(E,U,G){return F.H.useSyncExternalStore(E,U,G)},oe.useTransition=function(){return F.H.useTransition()},oe.version="19.2.0",oe}var Eh;function bc(){return Eh||(Eh=1,Xu.exports=ym()),Xu.exports}var b=bc();const vm=pm(b);var Qu={exports:{}},Os={},Fu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah;function wm(){return Ah||(Ah=1,(function(i){function n(N,$){var W=N.length;N.push($);e:for(;0<W;){var de=W-1>>>1,Se=N[de];if(0<c(Se,$))N[de]=$,N[W]=Se,W=de;else break e}}function r(N){return N.length===0?null:N[0]}function l(N){if(N.length===0)return null;var $=N[0],W=N.pop();if(W!==$){N[0]=W;e:for(var de=0,Se=N.length,E=Se>>>1;de<E;){var U=2*(de+1)-1,G=N[U],J=U+1,le=N[J];if(0>c(G,W))J<Se&&0>c(le,G)?(N[de]=le,N[J]=W,de=J):(N[de]=G,N[U]=W,de=U);else if(J<Se&&0>c(le,W))N[de]=le,N[J]=W,de=J;else break e}}return $}function c(N,$){var W=N.sortIndex-$.sortIndex;return W!==0?W:N.id-$.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;i.unstable_now=function(){return d.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var p=[],g=[],w=1,v=null,A=3,k=!1,C=!1,D=!1,P=!1,V=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function ie(N){for(var $=r(g);$!==null;){if($.callback===null)l(g);else if($.startTime<=N)l(g),$.sortIndex=$.expirationTime,n(p,$);else break;$=r(g)}}function fe(N){if(D=!1,ie(N),!C)if(r(p)!==null)C=!0,te||(te=!0,ut());else{var $=r(g);$!==null&&re(fe,$.startTime-N)}}var te=!1,F=-1,We=5,Me=-1;function ln(){return P?!0:!(i.unstable_now()-Me<We)}function Et(){if(P=!1,te){var N=i.unstable_now();Me=N;var $=!0;try{e:{C=!1,D&&(D=!1,B(F),F=-1),k=!0;var W=A;try{t:{for(ie(N),v=r(p);v!==null&&!(v.expirationTime>N&&ln());){var de=v.callback;if(typeof de=="function"){v.callback=null,A=v.priorityLevel;var Se=de(v.expirationTime<=N);if(N=i.unstable_now(),typeof Se=="function"){v.callback=Se,ie(N),$=!0;break t}v===r(p)&&l(p),ie(N)}else l(p);v=r(p)}if(v!==null)$=!0;else{var E=r(g);E!==null&&re(fe,E.startTime-N),$=!1}}break e}finally{v=null,A=W,k=!1}$=void 0}}finally{$?ut():te=!1}}}var ut;if(typeof L=="function")ut=function(){L(Et)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,Ce=se.port2;se.port1.onmessage=Et,ut=function(){Ce.postMessage(null)}}else ut=function(){V(Et,0)};function re(N,$){F=V(function(){N(i.unstable_now())},$)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(N){N.callback=null},i.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):We=0<N?Math.floor(1e3/N):5},i.unstable_getCurrentPriorityLevel=function(){return A},i.unstable_next=function(N){switch(A){case 1:case 2:case 3:var $=3;break;default:$=A}var W=A;A=$;try{return N()}finally{A=W}},i.unstable_requestPaint=function(){P=!0},i.unstable_runWithPriority=function(N,$){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=A;A=N;try{return $()}finally{A=W}},i.unstable_scheduleCallback=function(N,$,W){var de=i.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?de+W:de):W=de,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=W+Se,N={id:w++,callback:$,priorityLevel:N,startTime:W,expirationTime:Se,sortIndex:-1},W>de?(N.sortIndex=W,n(g,N),r(p)===null&&N===r(g)&&(D?(B(F),F=-1):D=!0,re(fe,W-de))):(N.sortIndex=Se,n(p,N),C||k||(C=!0,te||(te=!0,ut()))),N},i.unstable_shouldYield=ln,i.unstable_wrapCallback=function(N){var $=A;return function(){var W=A;A=$;try{return N.apply(this,arguments)}finally{A=W}}}})(Wu)),Wu}var Th;function bm(){return Th||(Th=1,Fu.exports=wm()),Fu.exports}var ec={exports:{}},dt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function _m(){if(Kh)return dt;Kh=1;var i=bc();function n(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)g+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var l={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(p,g,w){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:v==null?null:""+v,children:p,containerInfo:g,implementation:w}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,dt.createPortal=function(p,g){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return d(p,g,null,w)},dt.flushSync=function(p){var g=h.T,w=l.p;try{if(h.T=null,l.p=2,p)return p()}finally{h.T=g,l.p=w,l.d.f()}},dt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,l.d.C(p,g))},dt.prefetchDNS=function(p){typeof p=="string"&&l.d.D(p)},dt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var w=g.as,v=m(w,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;w==="style"?l.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:A,fetchPriority:k}):w==="script"&&l.d.X(p,{crossOrigin:v,integrity:A,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},dt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var w=m(g.as,g.crossOrigin);l.d.M(p,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&l.d.M(p)},dt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var w=g.as,v=m(w,g.crossOrigin);l.d.L(p,w,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},dt.preloadModule=function(p,g){if(typeof p=="string")if(g){var w=m(g.as,g.crossOrigin);l.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else l.d.m(p)},dt.requestFormReset=function(p){l.d.r(p)},dt.unstable_batchedUpdates=function(p,g){return p(g)},dt.useFormState=function(p,g,w){return h.H.useFormState(p,g,w)},dt.useFormStatus=function(){return h.H.useHostTransitionStatus()},dt.version="19.2.0",dt}var kh;function Sm(){if(kh)return ec.exports;kh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),ec.exports=_m(),ec.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function Em(){if(Oh)return Os;Oh=1;var i=bm(),n=bc(),r=Sm();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(d(e)!==e)throw Error(l(188))}function g(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(l(188));return t!==e?null:e}for(var a=e,s=t;;){var o=a.return;if(o===null)break;var u=o.alternate;if(u===null){if(s=o.return,s!==null){a=s;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===a)return p(o),e;if(u===s)return p(o),t;u=u.sibling}throw Error(l(188))}if(a.return!==s.return)a=o,s=u;else{for(var f=!1,y=o.child;y;){if(y===a){f=!0,a=o,s=u;break}if(y===s){f=!0,s=o,a=u;break}y=y.sibling}if(!f){for(y=u.child;y;){if(y===a){f=!0,a=u,s=o;break}if(y===s){f=!0,s=u,a=o;break}y=y.sibling}if(!f)throw Error(l(189))}}if(a.alternate!==s)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,A=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),L=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),Me=Symbol.for("react.activity"),ln=Symbol.for("react.memo_cache_sentinel"),Et=Symbol.iterator;function ut(e){return e===null||typeof e!="object"?null:(e=Et&&e[Et]||e["@@iterator"],typeof e=="function"?e:null)}var se=Symbol.for("react.client.reference");function Ce(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case V:return"Profiler";case P:return"StrictMode";case fe:return"Suspense";case te:return"SuspenseList";case Me:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case L:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:Ce(e.type)||"Memo";case We:t=e._payload,e=e._init;try{return Ce(e(t))}catch{}}return null}var re=Array.isArray,N=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},de=[],Se=-1;function E(e){return{current:e}}function U(e){0>Se||(e.current=de[Se],de[Se]=null,Se--)}function G(e,t){Se++,de[Se]=e.current,e.current=t}var J=E(null),le=E(null),he=E(null),we=E(null);function at(e,t){switch(G(he,t),G(le,e),G(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Pd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Pd(t),e=Vd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(J),G(J,e)}function ze(){U(J),U(le),U(he)}function on(e){e.memoizedState!==null&&G(we,e);var t=J.current,a=Vd(t,e.type);t!==a&&(G(le,e),G(J,a))}function zn(e){le.current===e&&(U(J),U(le)),we.current===e&&(U(we),Es._currentValue=W)}var un,ct;function cn(e){if(un===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);un=t&&t[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+un+e+ct}var za=!1;function Ha(e,t){if(!e||za)return"";za=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(j){var x=j}Reflect.construct(e,[],z)}else{try{z.call()}catch(j){x=j}e.call(z.prototype)}}else{try{throw Error()}catch(j){x=j}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(j){if(j&&x&&typeof j.stack=="string")return[j.stack,x.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),f=u[0],y=u[1];if(f&&y){var _=f.split(`
`),R=y.split(`
`);for(o=s=0;s<_.length&&!_[s].includes("DetermineComponentFrameRoot");)s++;for(;o<R.length&&!R[o].includes("DetermineComponentFrameRoot");)o++;if(s===_.length||o===R.length)for(s=_.length-1,o=R.length-1;1<=s&&0<=o&&_[s]!==R[o];)o--;for(;1<=s&&0<=o;s--,o--)if(_[s]!==R[o]){if(s!==1||o!==1)do if(s--,o--,0>o||_[s]!==R[o]){var q=`
`+_[s].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=s&&0<=o);break}}}finally{za=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?cn(a):""}function Gs(e,t){switch(e.tag){case 26:case 27:case 5:return cn(e.type);case 16:return cn("Lazy");case 13:return e.child!==t&&t!==null?cn("Suspense Fallback"):cn("Suspense");case 19:return cn("SuspenseList");case 0:case 15:return Ha(e.type,!1);case 11:return Ha(e.type.render,!1);case 1:return Ha(e.type,!0);case 31:return cn("Activity");default:return""}}function qi(e){try{var t="",a=null;do t+=Gs(e,a),a=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var H=Object.prototype.hasOwnProperty,I=i.unstable_scheduleCallback,Ue=i.unstable_cancelCallback,$e=i.unstable_shouldYield,pt=i.unstable_requestPaint,je=i.unstable_now,pa=i.unstable_getCurrentPriorityLevel,dn=i.unstable_ImmediatePriority,Sc=i.unstable_UserBlockingPriority,Zs=i.unstable_NormalPriority,Jf=i.unstable_LowPriority,Ec=i.unstable_IdlePriority,Xf=i.log,Qf=i.unstable_setDisableYieldValue,Mi=null,At=null;function Hn(e){if(typeof Xf=="function"&&Qf(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(Mi,e)}catch{}}var Tt=Math.clz32?Math.clz32:e2,Ff=Math.log,Wf=Math.LN2;function e2(e){return e>>>=0,e===0?32:31-(Ff(e)/Wf|0)|0}var Ys=256,Js=262144,Xs=4194304;function ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qs(e,t,a){var s=e.pendingLanes;if(s===0)return 0;var o=0,u=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var y=s&134217727;return y!==0?(s=y&~u,s!==0?o=ma(s):(f&=y,f!==0?o=ma(f):a||(a=y&~e,a!==0&&(o=ma(a))))):(y=s&~u,y!==0?o=ma(y):f!==0?o=ma(f):a||(a=s&~e,a!==0&&(o=ma(a)))),o===0?0:t!==0&&t!==o&&(t&u)===0&&(u=o&-o,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:o}function Ui(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function t2(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ac(){var e=Xs;return Xs<<=1,(Xs&62914560)===0&&(Xs=4194304),e}function Ul(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Di(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function n2(e,t,a,s,o,u){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var y=e.entanglements,_=e.expirationTimes,R=e.hiddenUpdates;for(a=f&~a;0<a;){var q=31-Tt(a),z=1<<q;y[q]=0,_[q]=-1;var x=R[q];if(x!==null)for(R[q]=null,q=0;q<x.length;q++){var j=x[q];j!==null&&(j.lane&=-536870913)}a&=~z}s!==0&&Tc(e,s,0),u!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=u&~(f&~t))}function Tc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-Tt(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Kc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var s=31-Tt(a),o=1<<s;o&t|e[s]&t&&(e[s]|=t),a&=~o}}function kc(e,t){var a=t&-t;return a=(a&42)!==0?1:Dl(a),(a&(e.suspendedLanes|t))!==0?0:a}function Dl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Oc(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:fh(e.type))}function Rc(e,t){var a=$.p;try{return $.p=e,t()}finally{$.p=a}}var Ln=Math.random().toString(36).slice(2),it="__reactFiber$"+Ln,mt="__reactProps$"+Ln,La="__reactContainer$"+Ln,Hl="__reactEvents$"+Ln,a2="__reactListeners$"+Ln,i2="__reactHandles$"+Ln,xc="__reactResources$"+Ln,zi="__reactMarker$"+Ln;function Ll(e){delete e[it],delete e[mt],delete e[Hl],delete e[a2],delete e[i2]}function Ba(e){var t=e[it];if(t)return t;for(var a=e.parentNode;a;){if(t=a[La]||a[it]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Qd(e);e!==null;){if(a=e[it])return a;e=Qd(e)}return t}e=a,a=e.parentNode}return null}function Ia(e){if(e=e[it]||e[La]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Hi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Pa(e){var t=e[xc];return t||(t=e[xc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[zi]=!0}var Cc=new Set,jc={};function ga(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(jc[e]=t,e=0;e<t.length;e++)Cc.add(t[e])}var s2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nc={},qc={};function r2(e){return H.call(qc,e)?!0:H.call(Nc,e)?!1:s2.test(e)?qc[e]=!0:(Nc[e]=!0,!1)}function Fs(e,t,a){if(r2(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ws(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function hn(e,t,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+s)}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function l2(e,t,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var o=s.get,u=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(f){a=""+f,u.call(this,f)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bl(e){if(!e._valueTracker){var t=Mc(e)?"checked":"value";e._valueTracker=l2(e,t,""+e[t])}}function Uc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),s="";return e&&(s=Mc(e)?e.checked?"true":"false":e.value),e=s,e!==a?(t.setValue(e),!0):!1}function er(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var o2=/[\n"\\]/g;function Mt(e){return e.replace(o2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Il(e,t,a,s,o,u,f,y){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Pl(e,f,qt(t)):a!=null?Pl(e,f,qt(a)):s!=null&&e.removeAttribute("value"),o==null&&u!=null&&(e.defaultChecked=!!u),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+qt(y):e.removeAttribute("name")}function Dc(e,t,a,s,o,u,f,y){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Bl(e);return}a=a!=null?""+qt(a):"",t=t!=null?""+qt(t):a,y||t===e.value||(e.value=t),e.defaultValue=t}s=s??o,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=y?e.checked:!!s,e.defaultChecked=!!s,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),Bl(e)}function Pl(e,t,a){t==="number"&&er(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $a(e,t,a,s){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&s&&(e[a].defaultSelected=!0)}else{for(a=""+qt(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,s&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function zc(e,t,a){if(t!=null&&(t=""+qt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+qt(a):""}function Hc(e,t,a,s){if(t==null){if(s!=null){if(a!=null)throw Error(l(92));if(re(s)){if(1<s.length)throw Error(l(93));s=s[0]}a=s}a==null&&(a=""),t=a}a=qt(t),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Bl(e)}function Ga(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var u2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lc(e,t,a){var s=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,a):typeof a!="number"||a===0||u2.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Bc(e,t,a){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var o in t)s=t[o],t.hasOwnProperty(o)&&a[o]!==s&&Lc(e,o,s)}else for(var u in t)t.hasOwnProperty(u)&&Lc(e,u,t[u])}function Vl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var c2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),d2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tr(e){return d2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function fn(){}var $l=null;function Gl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,Ya=null;function Ic(e){var t=Ia(e);if(t&&(e=t.stateNode)){var a=e[mt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Il(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var s=a[t];if(s!==e&&s.form===e.form){var o=s[mt]||null;if(!o)throw Error(l(90));Il(s,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<a.length;t++)s=a[t],s.form===e.form&&Uc(s)}break e;case"textarea":zc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&$a(e,!!a.multiple,t,!1)}}}var Zl=!1;function Pc(e,t,a){if(Zl)return e(t,a);Zl=!0;try{var s=e(t);return s}finally{if(Zl=!1,(Za!==null||Ya!==null)&&(Ir(),Za&&(t=Za,e=Ya,Ya=Za=null,Ic(t),e)))for(t=0;t<e.length;t++)Ic(e[t])}}function Li(e,t){var a=e.stateNode;if(a===null)return null;var s=a[mt]||null;if(s===null)return null;a=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(l(231,t,typeof a));return a}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=!1;if(pn)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){Yl=!0}}),window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{Yl=!1}var Bn=null,Jl=null,nr=null;function Vc(){if(nr)return nr;var e,t=Jl,a=t.length,s,o="value"in Bn?Bn.value:Bn.textContent,u=o.length;for(e=0;e<a&&t[e]===o[e];e++);var f=a-e;for(s=1;s<=f&&t[a-s]===o[u-s];s++);return nr=o.slice(e,1<s?1-s:void 0)}function ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ir(){return!0}function $c(){return!1}function gt(e){function t(a,s,o,u,f){this._reactName=a,this._targetInst=o,this.type=s,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(a=e[y],this[y]=a?a(u):u[y]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ir:$c,this.isPropagationStopped=$c,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ir)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ir)},persist:function(){},isPersistent:ir}),t}var ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sr=gt(ya),Ii=v({},ya,{view:0,detail:0}),h2=gt(Ii),Xl,Ql,Pi,rr=v({},Ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pi&&(Pi&&e.type==="mousemove"?(Xl=e.screenX-Pi.screenX,Ql=e.screenY-Pi.screenY):Ql=Xl=0,Pi=e),Xl)},movementY:function(e){return"movementY"in e?e.movementY:Ql}}),Gc=gt(rr),f2=v({},rr,{dataTransfer:0}),p2=gt(f2),m2=v({},Ii,{relatedTarget:0}),Fl=gt(m2),g2=v({},ya,{animationName:0,elapsedTime:0,pseudoElement:0}),y2=gt(g2),v2=v({},ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),w2=gt(v2),b2=v({},ya,{data:0}),Zc=gt(b2),_2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=E2[e])?!!t[e]:!1}function Wl(){return A2}var T2=v({},Ii,{key:function(e){if(e.key){var t=_2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?S2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(e){return e.type==="keypress"?ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K2=gt(T2),k2=v({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yc=gt(k2),O2=v({},Ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),R2=gt(O2),x2=v({},ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),C2=gt(x2),j2=v({},rr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),N2=gt(j2),q2=v({},ya,{newState:0,oldState:0}),M2=gt(q2),U2=[9,13,27,32],eo=pn&&"CompositionEvent"in window,Vi=null;pn&&"documentMode"in document&&(Vi=document.documentMode);var D2=pn&&"TextEvent"in window&&!Vi,Jc=pn&&(!eo||Vi&&8<Vi&&11>=Vi),Xc=" ",Qc=!1;function Fc(e,t){switch(e){case"keyup":return U2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ja=!1;function z2(e,t){switch(e){case"compositionend":return Wc(t);case"keypress":return t.which!==32?null:(Qc=!0,Xc);case"textInput":return e=t.data,e===Xc&&Qc?null:e;default:return null}}function H2(e,t){if(Ja)return e==="compositionend"||!eo&&Fc(e,t)?(e=Vc(),nr=Jl=Bn=null,Ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jc&&t.locale!=="ko"?null:t.data;default:return null}}var L2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!L2[e.type]:t==="textarea"}function t0(e,t,a,s){Za?Ya?Ya.push(s):Ya=[s]:Za=s,t=Jr(t,"onChange"),0<t.length&&(a=new sr("onChange","change",null,a,s),e.push({event:a,listeners:t}))}var $i=null,Gi=null;function B2(e){Dd(e,0)}function lr(e){var t=Hi(e);if(Uc(t))return e}function n0(e,t){if(e==="change")return t}var a0=!1;if(pn){var to;if(pn){var no="oninput"in document;if(!no){var i0=document.createElement("div");i0.setAttribute("oninput","return;"),no=typeof i0.oninput=="function"}to=no}else to=!1;a0=to&&(!document.documentMode||9<document.documentMode)}function s0(){$i&&($i.detachEvent("onpropertychange",r0),Gi=$i=null)}function r0(e){if(e.propertyName==="value"&&lr(Gi)){var t=[];t0(t,Gi,e,Gl(e)),Pc(B2,t)}}function I2(e,t,a){e==="focusin"?(s0(),$i=t,Gi=a,$i.attachEvent("onpropertychange",r0)):e==="focusout"&&s0()}function P2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lr(Gi)}function V2(e,t){if(e==="click")return lr(t)}function $2(e,t){if(e==="input"||e==="change")return lr(t)}function G2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:G2;function Zi(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var o=a[s];if(!H.call(t,o)||!Kt(e[o],t[o]))return!1}return!0}function l0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o0(e,t){var a=l0(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=t&&s>=t)return{node:a,offset:t-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=l0(a)}}function u0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?u0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function c0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=er(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=er(e.document)}return t}function ao(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Z2=pn&&"documentMode"in document&&11>=document.documentMode,Xa=null,io=null,Yi=null,so=!1;function d0(e,t,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;so||Xa==null||Xa!==er(s)||(s=Xa,"selectionStart"in s&&ao(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Yi&&Zi(Yi,s)||(Yi=s,s=Jr(io,"onSelect"),0<s.length&&(t=new sr("onSelect","select",null,t,a),e.push({event:t,listeners:s}),t.target=Xa)))}function va(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Qa={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionrun:va("Transition","TransitionRun"),transitionstart:va("Transition","TransitionStart"),transitioncancel:va("Transition","TransitionCancel"),transitionend:va("Transition","TransitionEnd")},ro={},h0={};pn&&(h0=document.createElement("div").style,"AnimationEvent"in window||(delete Qa.animationend.animation,delete Qa.animationiteration.animation,delete Qa.animationstart.animation),"TransitionEvent"in window||delete Qa.transitionend.transition);function wa(e){if(ro[e])return ro[e];if(!Qa[e])return e;var t=Qa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in h0)return ro[e]=t[a];return e}var f0=wa("animationend"),p0=wa("animationiteration"),m0=wa("animationstart"),Y2=wa("transitionrun"),J2=wa("transitionstart"),X2=wa("transitioncancel"),g0=wa("transitionend"),y0=new Map,lo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lo.push("scrollEnd");function $t(e,t){y0.set(e,t),ga(t,[e])}var or=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ut=[],Fa=0,oo=0;function ur(){for(var e=Fa,t=oo=Fa=0;t<e;){var a=Ut[t];Ut[t++]=null;var s=Ut[t];Ut[t++]=null;var o=Ut[t];Ut[t++]=null;var u=Ut[t];if(Ut[t++]=null,s!==null&&o!==null){var f=s.pending;f===null?o.next=o:(o.next=f.next,f.next=o),s.pending=o}u!==0&&v0(a,o,u)}}function cr(e,t,a,s){Ut[Fa++]=e,Ut[Fa++]=t,Ut[Fa++]=a,Ut[Fa++]=s,oo|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function uo(e,t,a,s){return cr(e,t,a,s),dr(e)}function ba(e,t){return cr(e,null,null,t),dr(e)}function v0(e,t,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var o=!1,u=e.return;u!==null;)u.childLanes|=a,s=u.alternate,s!==null&&(s.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(o=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,o&&t!==null&&(o=31-Tt(a),e=u.hiddenUpdates,s=e[o],s===null?e[o]=[t]:s.push(t),t.lane=a|536870912),u):null}function dr(e){if(50<gs)throw gs=0,wu=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Wa={};function Q2(e,t,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,a,s){return new Q2(e,t,a,s)}function co(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mn(e,t){var a=e.alternate;return a===null?(a=kt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function w0(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hr(e,t,a,s,o,u){var f=0;if(s=e,typeof e=="function")co(e)&&(f=1);else if(typeof e=="string")f=nm(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Me:return e=kt(31,a,t,o),e.elementType=Me,e.lanes=u,e;case D:return _a(a.children,o,u,t);case P:f=8,o|=24;break;case V:return e=kt(12,a,t,o|2),e.elementType=V,e.lanes=u,e;case fe:return e=kt(13,a,t,o),e.elementType=fe,e.lanes=u,e;case te:return e=kt(19,a,t,o),e.elementType=te,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:f=10;break e;case B:f=9;break e;case ie:f=11;break e;case F:f=14;break e;case We:f=16,s=null;break e}f=29,a=Error(l(130,e===null?"null":typeof e,"")),s=null}return t=kt(f,a,t,o),t.elementType=e,t.type=s,t.lanes=u,t}function _a(e,t,a,s){return e=kt(7,e,s,t),e.lanes=a,e}function ho(e,t,a){return e=kt(6,e,null,t),e.lanes=a,e}function b0(e){var t=kt(18,null,null,0);return t.stateNode=e,t}function fo(e,t,a){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _0=new WeakMap;function Dt(e,t){if(typeof e=="object"&&e!==null){var a=_0.get(e);return a!==void 0?a:(t={value:e,source:t,stack:qi(t)},_0.set(e,t),t)}return{value:e,source:t,stack:qi(t)}}var ei=[],ti=0,fr=null,Ji=0,zt=[],Ht=0,In=null,Wt=1,en="";function gn(e,t){ei[ti++]=Ji,ei[ti++]=fr,fr=e,Ji=t}function S0(e,t,a){zt[Ht++]=Wt,zt[Ht++]=en,zt[Ht++]=In,In=e;var s=Wt;e=en;var o=32-Tt(s)-1;s&=~(1<<o),a+=1;var u=32-Tt(t)+o;if(30<u){var f=o-o%5;u=(s&(1<<f)-1).toString(32),s>>=f,o-=f,Wt=1<<32-Tt(t)+o|a<<o|s,en=u+e}else Wt=1<<u|a<<o|s,en=e}function po(e){e.return!==null&&(gn(e,1),S0(e,1,0))}function mo(e){for(;e===fr;)fr=ei[--ti],ei[ti]=null,Ji=ei[--ti],ei[ti]=null;for(;e===In;)In=zt[--Ht],zt[Ht]=null,en=zt[--Ht],zt[Ht]=null,Wt=zt[--Ht],zt[Ht]=null}function E0(e,t){zt[Ht++]=Wt,zt[Ht++]=en,zt[Ht++]=In,Wt=t.id,en=t.overflow,In=e}var st=null,Ne=null,ve=!1,Pn=null,Lt=!1,go=Error(l(519));function Vn(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xi(Dt(t,e)),go}function A0(e){var t=e.stateNode,a=e.type,s=e.memoizedProps;switch(t[it]=e,t[mt]=s,a){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(a=0;a<vs.length;a++)me(vs[a],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),Dc(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),Hc(t,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||s.suppressHydrationWarning===!0||Bd(t.textContent,a)?(s.popover!=null&&(me("beforetoggle",t),me("toggle",t)),s.onScroll!=null&&me("scroll",t),s.onScrollEnd!=null&&me("scrollend",t),s.onClick!=null&&(t.onclick=fn),t=!0):t=!1,t||Vn(e,!0)}function T0(e){for(st=e.return;st;)switch(st.tag){case 5:case 31:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:st=st.return}}function ni(e){if(e!==st)return!1;if(!ve)return T0(e),ve=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||qu(e.type,e.memoizedProps)),a=!a),a&&Ne&&Vn(e),T0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ne=Xd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ne=Xd(e)}else t===27?(t=Ne,ia(e.type)?(e=Hu,Hu=null,Ne=e):Ne=t):Ne=st?It(e.stateNode.nextSibling):null;return!0}function Sa(){Ne=st=null,ve=!1}function yo(){var e=Pn;return e!==null&&(bt===null?bt=e:bt.push.apply(bt,e),Pn=null),e}function Xi(e){Pn===null?Pn=[e]:Pn.push(e)}var vo=E(null),Ea=null,yn=null;function $n(e,t,a){G(vo,t._currentValue),t._currentValue=a}function vn(e){e._currentValue=vo.current,U(vo)}function wo(e,t,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===a)break;e=e.return}}function bo(e,t,a,s){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){var f=o.child;u=u.firstContext;e:for(;u!==null;){var y=u;u=o;for(var _=0;_<t.length;_++)if(y.context===t[_]){u.lanes|=a,y=u.alternate,y!==null&&(y.lanes|=a),wo(u.return,a,e),s||(f=null);break e}u=y.next}}else if(o.tag===18){if(f=o.return,f===null)throw Error(l(341));f.lanes|=a,u=f.alternate,u!==null&&(u.lanes|=a),wo(f,a,e),f=null}else f=o.child;if(f!==null)f.return=o;else for(f=o;f!==null;){if(f===e){f=null;break}if(o=f.sibling,o!==null){o.return=f.return,f=o;break}f=f.return}o=f}}function ai(e,t,a,s){e=null;for(var o=t,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var f=o.alternate;if(f===null)throw Error(l(387));if(f=f.memoizedProps,f!==null){var y=o.type;Kt(o.pendingProps.value,f.value)||(e!==null?e.push(y):e=[y])}}else if(o===we.current){if(f=o.alternate,f===null)throw Error(l(387));f.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Es):e=[Es])}o=o.return}e!==null&&bo(t,e,a,s),t.flags|=262144}function pr(e){for(e=e.firstContext;e!==null;){if(!Kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Aa(e){Ea=e,yn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return K0(Ea,e)}function mr(e,t){return Ea===null&&Aa(e),K0(e,t)}function K0(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},yn===null){if(e===null)throw Error(l(308));yn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else yn=yn.next=t;return a}var F2=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},W2=i.unstable_scheduleCallback,ep=i.unstable_NormalPriority,Ge={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _o(){return{controller:new F2,data:new Map,refCount:0}}function Qi(e){e.refCount--,e.refCount===0&&W2(ep,function(){e.controller.abort()})}var Fi=null,So=0,ii=0,si=null;function tp(e,t){if(Fi===null){var a=Fi=[];So=0,ii=Tu(),si={status:"pending",value:void 0,then:function(s){a.push(s)}}}return So++,t.then(k0,k0),t}function k0(){if(--So===0&&Fi!==null){si!==null&&(si.status="fulfilled");var e=Fi;Fi=null,ii=0,si=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function np(e,t){var a=[],s={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var o=0;o<a.length;o++)(0,a[o])(t)},function(o){for(s.status="rejected",s.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),s}var O0=N.S;N.S=function(e,t){dd=je(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&tp(e,t),O0!==null&&O0(e,t)};var Ta=E(null);function Eo(){var e=Ta.current;return e!==null?e:Re.pooledCache}function gr(e,t){t===null?G(Ta,Ta.current):G(Ta,t.pool)}function R0(){var e=Eo();return e===null?null:{parent:Ge._currentValue,pool:e}}var ri=Error(l(460)),Ao=Error(l(474)),yr=Error(l(542)),vr={then:function(){}};function x0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function C0(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(fn,fn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,N0(e),e;default:if(typeof t.status=="string")t.then(fn,fn);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=s}},function(s){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,N0(e),e}throw ka=t,ri}}function Ka(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ka=a,ri):a}}var ka=null;function j0(){if(ka===null)throw Error(l(459));var e=ka;return ka=null,e}function N0(e){if(e===ri||e===yr)throw Error(l(483))}var li=null,Wi=0;function wr(e){var t=Wi;return Wi+=1,li===null&&(li=[]),C0(li,e,t)}function es(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function br(e,t){throw t.$$typeof===A?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function q0(e){function t(K,S){if(e){var O=K.deletions;O===null?(K.deletions=[S],K.flags|=16):O.push(S)}}function a(K,S){if(!e)return null;for(;S!==null;)t(K,S),S=S.sibling;return null}function s(K){for(var S=new Map;K!==null;)K.key!==null?S.set(K.key,K):S.set(K.index,K),K=K.sibling;return S}function o(K,S){return K=mn(K,S),K.index=0,K.sibling=null,K}function u(K,S,O){return K.index=O,e?(O=K.alternate,O!==null?(O=O.index,O<S?(K.flags|=67108866,S):O):(K.flags|=67108866,S)):(K.flags|=1048576,S)}function f(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function y(K,S,O,M){return S===null||S.tag!==6?(S=ho(O,K.mode,M),S.return=K,S):(S=o(S,O),S.return=K,S)}function _(K,S,O,M){var ee=O.type;return ee===D?q(K,S,O.props.children,M,O.key):S!==null&&(S.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===We&&Ka(ee)===S.type)?(S=o(S,O.props),es(S,O),S.return=K,S):(S=hr(O.type,O.key,O.props,null,K.mode,M),es(S,O),S.return=K,S)}function R(K,S,O,M){return S===null||S.tag!==4||S.stateNode.containerInfo!==O.containerInfo||S.stateNode.implementation!==O.implementation?(S=fo(O,K.mode,M),S.return=K,S):(S=o(S,O.children||[]),S.return=K,S)}function q(K,S,O,M,ee){return S===null||S.tag!==7?(S=_a(O,K.mode,M,ee),S.return=K,S):(S=o(S,O),S.return=K,S)}function z(K,S,O){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=ho(""+S,K.mode,O),S.return=K,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case k:return O=hr(S.type,S.key,S.props,null,K.mode,O),es(O,S),O.return=K,O;case C:return S=fo(S,K.mode,O),S.return=K,S;case We:return S=Ka(S),z(K,S,O)}if(re(S)||ut(S))return S=_a(S,K.mode,O,null),S.return=K,S;if(typeof S.then=="function")return z(K,wr(S),O);if(S.$$typeof===L)return z(K,mr(K,S),O);br(K,S)}return null}function x(K,S,O,M){var ee=S!==null?S.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return ee!==null?null:y(K,S,""+O,M);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case k:return O.key===ee?_(K,S,O,M):null;case C:return O.key===ee?R(K,S,O,M):null;case We:return O=Ka(O),x(K,S,O,M)}if(re(O)||ut(O))return ee!==null?null:q(K,S,O,M,null);if(typeof O.then=="function")return x(K,S,wr(O),M);if(O.$$typeof===L)return x(K,S,mr(K,O),M);br(K,O)}return null}function j(K,S,O,M,ee){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return K=K.get(O)||null,y(S,K,""+M,ee);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case k:return K=K.get(M.key===null?O:M.key)||null,_(S,K,M,ee);case C:return K=K.get(M.key===null?O:M.key)||null,R(S,K,M,ee);case We:return M=Ka(M),j(K,S,O,M,ee)}if(re(M)||ut(M))return K=K.get(O)||null,q(S,K,M,ee,null);if(typeof M.then=="function")return j(K,S,O,wr(M),ee);if(M.$$typeof===L)return j(K,S,O,mr(S,M),ee);br(S,M)}return null}function Y(K,S,O,M){for(var ee=null,be=null,Q=S,ce=S=0,ye=null;Q!==null&&ce<O.length;ce++){Q.index>ce?(ye=Q,Q=null):ye=Q.sibling;var _e=x(K,Q,O[ce],M);if(_e===null){Q===null&&(Q=ye);break}e&&Q&&_e.alternate===null&&t(K,Q),S=u(_e,S,ce),be===null?ee=_e:be.sibling=_e,be=_e,Q=ye}if(ce===O.length)return a(K,Q),ve&&gn(K,ce),ee;if(Q===null){for(;ce<O.length;ce++)Q=z(K,O[ce],M),Q!==null&&(S=u(Q,S,ce),be===null?ee=Q:be.sibling=Q,be=Q);return ve&&gn(K,ce),ee}for(Q=s(Q);ce<O.length;ce++)ye=j(Q,K,ce,O[ce],M),ye!==null&&(e&&ye.alternate!==null&&Q.delete(ye.key===null?ce:ye.key),S=u(ye,S,ce),be===null?ee=ye:be.sibling=ye,be=ye);return e&&Q.forEach(function(ua){return t(K,ua)}),ve&&gn(K,ce),ee}function ae(K,S,O,M){if(O==null)throw Error(l(151));for(var ee=null,be=null,Q=S,ce=S=0,ye=null,_e=O.next();Q!==null&&!_e.done;ce++,_e=O.next()){Q.index>ce?(ye=Q,Q=null):ye=Q.sibling;var ua=x(K,Q,_e.value,M);if(ua===null){Q===null&&(Q=ye);break}e&&Q&&ua.alternate===null&&t(K,Q),S=u(ua,S,ce),be===null?ee=ua:be.sibling=ua,be=ua,Q=ye}if(_e.done)return a(K,Q),ve&&gn(K,ce),ee;if(Q===null){for(;!_e.done;ce++,_e=O.next())_e=z(K,_e.value,M),_e!==null&&(S=u(_e,S,ce),be===null?ee=_e:be.sibling=_e,be=_e);return ve&&gn(K,ce),ee}for(Q=s(Q);!_e.done;ce++,_e=O.next())_e=j(Q,K,ce,_e.value,M),_e!==null&&(e&&_e.alternate!==null&&Q.delete(_e.key===null?ce:_e.key),S=u(_e,S,ce),be===null?ee=_e:be.sibling=_e,be=_e);return e&&Q.forEach(function(fm){return t(K,fm)}),ve&&gn(K,ce),ee}function Oe(K,S,O,M){if(typeof O=="object"&&O!==null&&O.type===D&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case k:e:{for(var ee=O.key;S!==null;){if(S.key===ee){if(ee=O.type,ee===D){if(S.tag===7){a(K,S.sibling),M=o(S,O.props.children),M.return=K,K=M;break e}}else if(S.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===We&&Ka(ee)===S.type){a(K,S.sibling),M=o(S,O.props),es(M,O),M.return=K,K=M;break e}a(K,S);break}else t(K,S);S=S.sibling}O.type===D?(M=_a(O.props.children,K.mode,M,O.key),M.return=K,K=M):(M=hr(O.type,O.key,O.props,null,K.mode,M),es(M,O),M.return=K,K=M)}return f(K);case C:e:{for(ee=O.key;S!==null;){if(S.key===ee)if(S.tag===4&&S.stateNode.containerInfo===O.containerInfo&&S.stateNode.implementation===O.implementation){a(K,S.sibling),M=o(S,O.children||[]),M.return=K,K=M;break e}else{a(K,S);break}else t(K,S);S=S.sibling}M=fo(O,K.mode,M),M.return=K,K=M}return f(K);case We:return O=Ka(O),Oe(K,S,O,M)}if(re(O))return Y(K,S,O,M);if(ut(O)){if(ee=ut(O),typeof ee!="function")throw Error(l(150));return O=ee.call(O),ae(K,S,O,M)}if(typeof O.then=="function")return Oe(K,S,wr(O),M);if(O.$$typeof===L)return Oe(K,S,mr(K,O),M);br(K,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,S!==null&&S.tag===6?(a(K,S.sibling),M=o(S,O),M.return=K,K=M):(a(K,S),M=ho(O,K.mode,M),M.return=K,K=M),f(K)):a(K,S)}return function(K,S,O,M){try{Wi=0;var ee=Oe(K,S,O,M);return li=null,ee}catch(Q){if(Q===ri||Q===yr)throw Q;var be=kt(29,Q,null,K.mode);return be.lanes=M,be.return=K,be}finally{}}}var Oa=q0(!0),M0=q0(!1),Gn=!1;function To(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ko(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Yn(e,t,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ee&2)!==0){var o=s.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),s.pending=t,t=dr(e),v0(e,null,a),t}return cr(e,s,t,a),dr(e)}function ts(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,Kc(e,a)}}function ko(e,t){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var o=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?o=u=f:u=u.next=f,a=a.next}while(a!==null);u===null?o=u=t:u=u.next=t}else o=u=t;a={baseState:s.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Oo=!1;function ns(){if(Oo){var e=si;if(e!==null)throw e}}function as(e,t,a,s){Oo=!1;var o=e.updateQueue;Gn=!1;var u=o.firstBaseUpdate,f=o.lastBaseUpdate,y=o.shared.pending;if(y!==null){o.shared.pending=null;var _=y,R=_.next;_.next=null,f===null?u=R:f.next=R,f=_;var q=e.alternate;q!==null&&(q=q.updateQueue,y=q.lastBaseUpdate,y!==f&&(y===null?q.firstBaseUpdate=R:y.next=R,q.lastBaseUpdate=_))}if(u!==null){var z=o.baseState;f=0,q=R=_=null,y=u;do{var x=y.lane&-536870913,j=x!==y.lane;if(j?(ge&x)===x:(s&x)===x){x!==0&&x===ii&&(Oo=!0),q!==null&&(q=q.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var Y=e,ae=y;x=t;var Oe=a;switch(ae.tag){case 1:if(Y=ae.payload,typeof Y=="function"){z=Y.call(Oe,z,x);break e}z=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=ae.payload,x=typeof Y=="function"?Y.call(Oe,z,x):Y,x==null)break e;z=v({},z,x);break e;case 2:Gn=!0}}x=y.callback,x!==null&&(e.flags|=64,j&&(e.flags|=8192),j=o.callbacks,j===null?o.callbacks=[x]:j.push(x))}else j={lane:x,tag:y.tag,payload:y.payload,callback:y.callback,next:null},q===null?(R=q=j,_=z):q=q.next=j,f|=x;if(y=y.next,y===null){if(y=o.shared.pending,y===null)break;j=y,y=j.next,j.next=null,o.lastBaseUpdate=j,o.shared.pending=null}}while(!0);q===null&&(_=z),o.baseState=_,o.firstBaseUpdate=R,o.lastBaseUpdate=q,u===null&&(o.shared.lanes=0),Wn|=f,e.lanes=f,e.memoizedState=z}}function U0(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function D0(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)U0(a[e],t)}var oi=E(null),_r=E(0);function z0(e,t){e=kn,G(_r,e),G(oi,t),kn=e|t.baseLanes}function Ro(){G(_r,kn),G(oi,oi.current)}function xo(){kn=_r.current,U(oi),U(_r)}var Ot=E(null),Bt=null;function Jn(e){var t=e.alternate;G(Ie,Ie.current&1),G(Ot,e),Bt===null&&(t===null||oi.current!==null||t.memoizedState!==null)&&(Bt=e)}function Co(e){G(Ie,Ie.current),G(Ot,e),Bt===null&&(Bt=e)}function H0(e){e.tag===22?(G(Ie,Ie.current),G(Ot,e),Bt===null&&(Bt=e)):Xn()}function Xn(){G(Ie,Ie.current),G(Ot,Ot.current)}function Rt(e){U(Ot),Bt===e&&(Bt=null),U(Ie)}var Ie=E(0);function Sr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Du(a)||zu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wn=0,ue=null,Ke=null,Ze=null,Er=!1,ui=!1,Ra=!1,Ar=0,is=0,ci=null,ap=0;function He(){throw Error(l(321))}function jo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Kt(e[a],t[a]))return!1;return!0}function No(e,t,a,s,o,u){return wn=u,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?S1:Yo,Ra=!1,u=a(s,o),Ra=!1,ui&&(u=B0(t,a,s,o)),L0(e),u}function L0(e){N.H=ls;var t=Ke!==null&&Ke.next!==null;if(wn=0,Ze=Ke=ue=null,Er=!1,is=0,ci=null,t)throw Error(l(300));e===null||Ye||(e=e.dependencies,e!==null&&pr(e)&&(Ye=!0))}function B0(e,t,a,s){ue=e;var o=0;do{if(ui&&(ci=null),is=0,ui=!1,25<=o)throw Error(l(301));if(o+=1,Ze=Ke=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}N.H=E1,u=t(a,s)}while(ui);return u}function ip(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?ss(t):t,e=e.useState()[0],(Ke!==null?Ke.memoizedState:null)!==e&&(ue.flags|=1024),t}function qo(){var e=Ar!==0;return Ar=0,e}function Mo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Uo(e){if(Er){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Er=!1}wn=0,Ze=Ke=ue=null,ui=!1,is=Ar=0,ci=null}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?ue.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Pe(){if(Ke===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=Ze===null?ue.memoizedState:Ze.next;if(t!==null)Ze=t,Ke=e;else{if(e===null)throw ue.alternate===null?Error(l(467)):Error(l(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Ze===null?ue.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function Tr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ss(e){var t=is;return is+=1,ci===null&&(ci=[]),e=C0(ci,e,t),t=ue,(Ze===null?t.memoizedState:Ze.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?S1:Yo),e}function Kr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ss(e);if(e.$$typeof===L)return rt(e)}throw Error(l(438,String(e)))}function Do(e){var t=null,a=ue.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var s=ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Tr(),ue.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),s=0;s<e;s++)a[s]=ln;return t.index++,a}function bn(e,t){return typeof t=="function"?t(e):t}function kr(e){var t=Pe();return zo(t,Ke,e)}function zo(e,t,a){var s=e.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=a;var o=e.baseQueue,u=s.pending;if(u!==null){if(o!==null){var f=o.next;o.next=u.next,u.next=f}t.baseQueue=o=u,s.pending=null}if(u=e.baseState,o===null)e.memoizedState=u;else{t=o.next;var y=f=null,_=null,R=t,q=!1;do{var z=R.lane&-536870913;if(z!==R.lane?(ge&z)===z:(wn&z)===z){var x=R.revertLane;if(x===0)_!==null&&(_=_.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),z===ii&&(q=!0);else if((wn&x)===x){R=R.next,x===ii&&(q=!0);continue}else z={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},_===null?(y=_=z,f=u):_=_.next=z,ue.lanes|=x,Wn|=x;z=R.action,Ra&&a(u,z),u=R.hasEagerState?R.eagerState:a(u,z)}else x={lane:z,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},_===null?(y=_=x,f=u):_=_.next=x,ue.lanes|=z,Wn|=z;R=R.next}while(R!==null&&R!==t);if(_===null?f=u:_.next=y,!Kt(u,e.memoizedState)&&(Ye=!0,q&&(a=si,a!==null)))throw a;e.memoizedState=u,e.baseState=f,e.baseQueue=_,s.lastRenderedState=u}return o===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Ho(e){var t=Pe(),a=t.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=e;var s=a.dispatch,o=a.pending,u=t.memoizedState;if(o!==null){a.pending=null;var f=o=o.next;do u=e(u,f.action),f=f.next;while(f!==o);Kt(u,t.memoizedState)||(Ye=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,s]}function I0(e,t,a){var s=ue,o=Pe(),u=ve;if(u){if(a===void 0)throw Error(l(407));a=a()}else a=t();var f=!Kt((Ke||o).memoizedState,a);if(f&&(o.memoizedState=a,Ye=!0),o=o.queue,Io($0.bind(null,s,o,e),[e]),o.getSnapshot!==t||f||Ze!==null&&Ze.memoizedState.tag&1){if(s.flags|=2048,di(9,{destroy:void 0},V0.bind(null,s,o,a,t),null),Re===null)throw Error(l(349));u||(wn&127)!==0||P0(s,t,a)}return a}function P0(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ue.updateQueue,t===null?(t=Tr(),ue.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function V0(e,t,a,s){t.value=a,t.getSnapshot=s,G0(t)&&Z0(e)}function $0(e,t,a){return a(function(){G0(t)&&Z0(e)})}function G0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Kt(e,a)}catch{return!0}}function Z0(e){var t=ba(e,2);t!==null&&_t(t,e,2)}function Lo(e){var t=ft();if(typeof e=="function"){var a=e;if(e=a(),Ra){Hn(!0);try{a()}finally{Hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},t}function Y0(e,t,a,s){return e.baseState=a,zo(e,Ke,typeof s=="function"?s:bn)}function sp(e,t,a,s,o){if(xr(e))throw Error(l(485));if(e=t.action,e!==null){var u={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){u.listeners.push(f)}};N.T!==null?a(!0):u.isTransition=!1,s(u),a=t.pending,a===null?(u.next=t.pending=u,J0(t,u)):(u.next=a.next,t.pending=a.next=u)}}function J0(e,t){var a=t.action,s=t.payload,o=e.state;if(t.isTransition){var u=N.T,f={};N.T=f;try{var y=a(o,s),_=N.S;_!==null&&_(f,y),X0(e,t,y)}catch(R){Bo(e,t,R)}finally{u!==null&&f.types!==null&&(u.types=f.types),N.T=u}}else try{u=a(o,s),X0(e,t,u)}catch(R){Bo(e,t,R)}}function X0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Q0(e,t,s)},function(s){return Bo(e,t,s)}):Q0(e,t,a)}function Q0(e,t,a){t.status="fulfilled",t.value=a,F0(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,J0(e,a)))}function Bo(e,t,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=a,F0(t),t=t.next;while(t!==s)}e.action=null}function F0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function W0(e,t){return t}function e1(e,t){if(ve){var a=Re.formState;if(a!==null){e:{var s=ue;if(ve){if(Ne){t:{for(var o=Ne,u=Lt;o.nodeType!==8;){if(!u){o=null;break t}if(o=It(o.nextSibling),o===null){o=null;break t}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){Ne=It(o.nextSibling),s=o.data==="F!";break e}}Vn(s)}s=!1}s&&(t=a[0])}}return a=ft(),a.memoizedState=a.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:W0,lastRenderedState:t},a.queue=s,a=w1.bind(null,ue,s),s.dispatch=a,s=Lo(!1),u=Zo.bind(null,ue,!1,s.queue),s=ft(),o={state:t,dispatch:null,action:e,pending:null},s.queue=o,a=sp.bind(null,ue,o,u,a),o.dispatch=a,s.memoizedState=e,[t,a,!1]}function t1(e){var t=Pe();return n1(t,Ke,e)}function n1(e,t,a){if(t=zo(e,t,W0)[0],e=kr(bn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=ss(t)}catch(f){throw f===ri?yr:f}else s=t;t=Pe();var o=t.queue,u=o.dispatch;return a!==t.memoizedState&&(ue.flags|=2048,di(9,{destroy:void 0},rp.bind(null,o,a),null)),[s,u,e]}function rp(e,t){e.action=t}function a1(e){var t=Pe(),a=Ke;if(a!==null)return n1(t,a,e);Pe(),t=t.memoizedState,a=Pe();var s=a.queue.dispatch;return a.memoizedState=e,[t,s,!1]}function di(e,t,a,s){return e={tag:e,create:a,deps:s,inst:t,next:null},t=ue.updateQueue,t===null&&(t=Tr(),ue.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,t.lastEffect=e),e}function i1(){return Pe().memoizedState}function Or(e,t,a,s){var o=ft();ue.flags|=e,o.memoizedState=di(1|t,{destroy:void 0},a,s===void 0?null:s)}function Rr(e,t,a,s){var o=Pe();s=s===void 0?null:s;var u=o.memoizedState.inst;Ke!==null&&s!==null&&jo(s,Ke.memoizedState.deps)?o.memoizedState=di(t,u,a,s):(ue.flags|=e,o.memoizedState=di(1|t,u,a,s))}function s1(e,t){Or(8390656,8,e,t)}function Io(e,t){Rr(2048,8,e,t)}function lp(e){ue.flags|=4;var t=ue.updateQueue;if(t===null)t=Tr(),ue.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function r1(e){var t=Pe().memoizedState;return lp({ref:t,nextImpl:e}),function(){if((Ee&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function l1(e,t){return Rr(4,2,e,t)}function o1(e,t){return Rr(4,4,e,t)}function u1(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function c1(e,t,a){a=a!=null?a.concat([e]):null,Rr(4,4,u1.bind(null,t,e),a)}function Po(){}function d1(e,t){var a=Pe();t=t===void 0?null:t;var s=a.memoizedState;return t!==null&&jo(t,s[1])?s[0]:(a.memoizedState=[e,t],e)}function h1(e,t){var a=Pe();t=t===void 0?null:t;var s=a.memoizedState;if(t!==null&&jo(t,s[1]))return s[0];if(s=e(),Ra){Hn(!0);try{e()}finally{Hn(!1)}}return a.memoizedState=[s,t],s}function Vo(e,t,a){return a===void 0||(wn&1073741824)!==0&&(ge&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=fd(),ue.lanes|=e,Wn|=e,a)}function f1(e,t,a,s){return Kt(a,t)?a:oi.current!==null?(e=Vo(e,a,s),Kt(e,t)||(Ye=!0),e):(wn&42)===0||(wn&1073741824)!==0&&(ge&261930)===0?(Ye=!0,e.memoizedState=a):(e=fd(),ue.lanes|=e,Wn|=e,t)}function p1(e,t,a,s,o){var u=$.p;$.p=u!==0&&8>u?u:8;var f=N.T,y={};N.T=y,Zo(e,!1,t,a);try{var _=o(),R=N.S;if(R!==null&&R(y,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var q=np(_,s);rs(e,t,q,jt(e))}else rs(e,t,s,jt(e))}catch(z){rs(e,t,{then:function(){},status:"rejected",reason:z},jt())}finally{$.p=u,f!==null&&y.types!==null&&(f.types=y.types),N.T=f}}function op(){}function $o(e,t,a,s){if(e.tag!==5)throw Error(l(476));var o=m1(e).queue;p1(e,o,t,W,a===null?op:function(){return g1(e),a(s)})}function m1(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function g1(e){var t=m1(e);t.next===null&&(t=e.alternate.memoizedState),rs(e,t.next.queue,{},jt())}function Go(){return rt(Es)}function y1(){return Pe().memoizedState}function v1(){return Pe().memoizedState}function up(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=jt();e=Zn(a);var s=Yn(t,e,a);s!==null&&(_t(s,t,a),ts(s,t,a)),t={cache:_o()},e.payload=t;return}t=t.return}}function cp(e,t,a){var s=jt();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},xr(e)?b1(t,a):(a=uo(e,t,a,s),a!==null&&(_t(a,e,s),_1(a,t,s)))}function w1(e,t,a){var s=jt();rs(e,t,a,s)}function rs(e,t,a,s){var o={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(xr(e))b1(t,o);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var f=t.lastRenderedState,y=u(f,a);if(o.hasEagerState=!0,o.eagerState=y,Kt(y,f))return cr(e,t,o,0),Re===null&&ur(),!1}catch{}finally{}if(a=uo(e,t,o,s),a!==null)return _t(a,e,s),_1(a,t,s),!0}return!1}function Zo(e,t,a,s){if(s={lane:2,revertLane:Tu(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},xr(e)){if(t)throw Error(l(479))}else t=uo(e,a,s,2),t!==null&&_t(t,e,2)}function xr(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function b1(e,t){ui=Er=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function _1(e,t,a){if((a&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,Kc(e,a)}}var ls={readContext:rt,use:Kr,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};ls.useEffectEvent=He;var S1={readContext:rt,use:Kr,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:s1,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Or(4194308,4,u1.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Or(4194308,4,e,t)},useInsertionEffect:function(e,t){Or(4,2,e,t)},useMemo:function(e,t){var a=ft();t=t===void 0?null:t;var s=e();if(Ra){Hn(!0);try{e()}finally{Hn(!1)}}return a.memoizedState=[s,t],s},useReducer:function(e,t,a){var s=ft();if(a!==void 0){var o=a(t);if(Ra){Hn(!0);try{a(t)}finally{Hn(!1)}}}else o=t;return s.memoizedState=s.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},s.queue=e,e=e.dispatch=cp.bind(null,ue,e),[s.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:function(e){e=Lo(e);var t=e.queue,a=w1.bind(null,ue,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Po,useDeferredValue:function(e,t){var a=ft();return Vo(a,e,t)},useTransition:function(){var e=Lo(!1);return e=p1.bind(null,ue,e.queue,!0,!1),ft().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var s=ue,o=ft();if(ve){if(a===void 0)throw Error(l(407));a=a()}else{if(a=t(),Re===null)throw Error(l(349));(ge&127)!==0||P0(s,t,a)}o.memoizedState=a;var u={value:a,getSnapshot:t};return o.queue=u,s1($0.bind(null,s,u,e),[e]),s.flags|=2048,di(9,{destroy:void 0},V0.bind(null,s,u,a,t),null),a},useId:function(){var e=ft(),t=Re.identifierPrefix;if(ve){var a=en,s=Wt;a=(s&~(1<<32-Tt(s)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ar++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=ap++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Go,useFormState:e1,useActionState:e1,useOptimistic:function(e){var t=ft();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Zo.bind(null,ue,!0,a),a.dispatch=t,[e,t]},useMemoCache:Do,useCacheRefresh:function(){return ft().memoizedState=up.bind(null,ue)},useEffectEvent:function(e){var t=ft(),a={impl:e};return t.memoizedState=a,function(){if((Ee&2)!==0)throw Error(l(440));return a.impl.apply(void 0,arguments)}}},Yo={readContext:rt,use:Kr,useCallback:d1,useContext:rt,useEffect:Io,useImperativeHandle:c1,useInsertionEffect:l1,useLayoutEffect:o1,useMemo:h1,useReducer:kr,useRef:i1,useState:function(){return kr(bn)},useDebugValue:Po,useDeferredValue:function(e,t){var a=Pe();return f1(a,Ke.memoizedState,e,t)},useTransition:function(){var e=kr(bn)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:ss(e),t]},useSyncExternalStore:I0,useId:y1,useHostTransitionStatus:Go,useFormState:t1,useActionState:t1,useOptimistic:function(e,t){var a=Pe();return Y0(a,Ke,e,t)},useMemoCache:Do,useCacheRefresh:v1};Yo.useEffectEvent=r1;var E1={readContext:rt,use:Kr,useCallback:d1,useContext:rt,useEffect:Io,useImperativeHandle:c1,useInsertionEffect:l1,useLayoutEffect:o1,useMemo:h1,useReducer:Ho,useRef:i1,useState:function(){return Ho(bn)},useDebugValue:Po,useDeferredValue:function(e,t){var a=Pe();return Ke===null?Vo(a,e,t):f1(a,Ke.memoizedState,e,t)},useTransition:function(){var e=Ho(bn)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:ss(e),t]},useSyncExternalStore:I0,useId:y1,useHostTransitionStatus:Go,useFormState:a1,useActionState:a1,useOptimistic:function(e,t){var a=Pe();return Ke!==null?Y0(a,Ke,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Do,useCacheRefresh:v1};E1.useEffectEvent=r1;function Jo(e,t,a,s){t=e.memoizedState,a=a(s,t),a=a==null?t:v({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Xo={enqueueSetState:function(e,t,a){e=e._reactInternals;var s=jt(),o=Zn(s);o.payload=t,a!=null&&(o.callback=a),t=Yn(e,o,s),t!==null&&(_t(t,e,s),ts(t,e,s))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var s=jt(),o=Zn(s);o.tag=1,o.payload=t,a!=null&&(o.callback=a),t=Yn(e,o,s),t!==null&&(_t(t,e,s),ts(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=jt(),s=Zn(a);s.tag=2,t!=null&&(s.callback=t),t=Yn(e,s,a),t!==null&&(_t(t,e,a),ts(t,e,a))}};function A1(e,t,a,s,o,u,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,u,f):t.prototype&&t.prototype.isPureReactComponent?!Zi(a,s)||!Zi(o,u):!0}function T1(e,t,a,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,s),t.state!==e&&Xo.enqueueReplaceState(t,t.state,null)}function xa(e,t){var a=t;if("ref"in t){a={};for(var s in t)s!=="ref"&&(a[s]=t[s])}if(e=e.defaultProps){a===t&&(a=v({},a));for(var o in e)a[o]===void 0&&(a[o]=e[o])}return a}function K1(e){or(e)}function k1(e){console.error(e)}function O1(e){or(e)}function Cr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function R1(e,t,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Qo(e,t,a){return a=Zn(a),a.tag=3,a.payload={element:null},a.callback=function(){Cr(e,t)},a}function x1(e){return e=Zn(e),e.tag=3,e}function C1(e,t,a,s){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var u=s.value;e.payload=function(){return o(u)},e.callback=function(){R1(t,a,s)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){R1(t,a,s),typeof o!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var y=s.stack;this.componentDidCatch(s.value,{componentStack:y!==null?y:""})})}function dp(e,t,a,s,o){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=a.alternate,t!==null&&ai(t,a,o,!0),a=Ot.current,a!==null){switch(a.tag){case 31:case 13:return Bt===null?Pr():a.alternate===null&&Le===0&&(Le=3),a.flags&=-257,a.flags|=65536,a.lanes=o,s===vr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([s]):t.add(s),Su(e,s,o)),!1;case 22:return a.flags|=65536,s===vr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([s]):a.add(s)),Su(e,s,o)),!1}throw Error(l(435,a.tag))}return Su(e,s,o),Pr(),!1}if(ve)return t=Ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,s!==go&&(e=Error(l(422),{cause:s}),Xi(Dt(e,a)))):(s!==go&&(t=Error(l(423),{cause:s}),Xi(Dt(t,a))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,s=Dt(s,a),o=Qo(e.stateNode,s,o),ko(e,o),Le!==4&&(Le=2)),!1;var u=Error(l(520),{cause:s});if(u=Dt(u,a),ms===null?ms=[u]:ms.push(u),Le!==4&&(Le=2),t===null)return!0;s=Dt(s,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=o&-o,a.lanes|=e,e=Qo(a.stateNode,s,e),ko(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ea===null||!ea.has(u))))return a.flags|=65536,o&=-o,a.lanes|=o,o=x1(o),C1(o,e,a,s),ko(a,o),!1}a=a.return}while(a!==null);return!1}var Fo=Error(l(461)),Ye=!1;function lt(e,t,a,s){t.child=e===null?M0(t,null,a,s):Oa(t,e.child,a,s)}function j1(e,t,a,s,o){a=a.render;var u=t.ref;if("ref"in s){var f={};for(var y in s)y!=="ref"&&(f[y]=s[y])}else f=s;return Aa(t),s=No(e,t,a,f,u,o),y=qo(),e!==null&&!Ye?(Mo(e,t,o),_n(e,t,o)):(ve&&y&&po(t),t.flags|=1,lt(e,t,s,o),t.child)}function N1(e,t,a,s,o){if(e===null){var u=a.type;return typeof u=="function"&&!co(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,q1(e,t,u,s,o)):(e=hr(a.type,null,s,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!ru(e,o)){var f=u.memoizedProps;if(a=a.compare,a=a!==null?a:Zi,a(f,s)&&e.ref===t.ref)return _n(e,t,o)}return t.flags|=1,e=mn(u,s),e.ref=t.ref,e.return=t,t.child=e}function q1(e,t,a,s,o){if(e!==null){var u=e.memoizedProps;if(Zi(u,s)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=s=u,ru(e,o))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,_n(e,t,o)}return Wo(e,t,a,s,o)}function M1(e,t,a,s){var o=s.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(s=t.child=e.child,o=0;s!==null;)o=o|s.lanes|s.childLanes,s=s.sibling;s=o&~u}else s=0,t.child=null;return U1(e,t,u,a,s)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&gr(t,u!==null?u.cachePool:null),u!==null?z0(t,u):Ro(),H0(t);else return s=t.lanes=536870912,U1(e,t,u!==null?u.baseLanes|a:a,a,s)}else u!==null?(gr(t,u.cachePool),z0(t,u),Xn(),t.memoizedState=null):(e!==null&&gr(t,null),Ro(),Xn());return lt(e,t,o,a),t.child}function os(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function U1(e,t,a,s,o){var u=Eo();return u=u===null?null:{parent:Ge._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&gr(t,null),Ro(),H0(t),e!==null&&ai(e,t,s,!0),t.childLanes=o,null}function jr(e,t){return t=qr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function D1(e,t,a){return Oa(t,e.child,null,a),e=jr(t,t.pendingProps),e.flags|=2,Rt(t),t.memoizedState=null,e}function hp(e,t,a){var s=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ve){if(s.mode==="hidden")return e=jr(t,s),t.lanes=536870912,os(null,e);if(Co(t),(e=Ne)?(e=Jd(e,Lt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:In!==null?{id:Wt,overflow:en}:null,retryLane:536870912,hydrationErrors:null},a=b0(e),a.return=t,t.child=a,st=t,Ne=null)):e=null,e===null)throw Vn(t);return t.lanes=536870912,null}return jr(t,s)}var u=e.memoizedState;if(u!==null){var f=u.dehydrated;if(Co(t),o)if(t.flags&256)t.flags&=-257,t=D1(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(Ye||ai(e,t,a,!1),o=(a&e.childLanes)!==0,Ye||o){if(s=Re,s!==null&&(f=kc(s,a),f!==0&&f!==u.retryLane))throw u.retryLane=f,ba(e,f),_t(s,e,f),Fo;Pr(),t=D1(e,t,a)}else e=u.treeContext,Ne=It(f.nextSibling),st=t,ve=!0,Pn=null,Lt=!1,e!==null&&E0(t,e),t=jr(t,s),t.flags|=4096;return t}return e=mn(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Nr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Wo(e,t,a,s,o){return Aa(t),a=No(e,t,a,s,void 0,o),s=qo(),e!==null&&!Ye?(Mo(e,t,o),_n(e,t,o)):(ve&&s&&po(t),t.flags|=1,lt(e,t,a,o),t.child)}function z1(e,t,a,s,o,u){return Aa(t),t.updateQueue=null,a=B0(t,s,a,o),L0(e),s=qo(),e!==null&&!Ye?(Mo(e,t,u),_n(e,t,u)):(ve&&s&&po(t),t.flags|=1,lt(e,t,a,u),t.child)}function H1(e,t,a,s,o){if(Aa(t),t.stateNode===null){var u=Wa,f=a.contextType;typeof f=="object"&&f!==null&&(u=rt(f)),u=new a(s,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Xo,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=s,u.state=t.memoizedState,u.refs={},To(t),f=a.contextType,u.context=typeof f=="object"&&f!==null?rt(f):Wa,u.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(Jo(t,a,f,s),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(f=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),f!==u.state&&Xo.enqueueReplaceState(u,u.state,null),as(t,s,u,o),ns(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){u=t.stateNode;var y=t.memoizedProps,_=xa(a,y);u.props=_;var R=u.context,q=a.contextType;f=Wa,typeof q=="object"&&q!==null&&(f=rt(q));var z=a.getDerivedStateFromProps;q=typeof z=="function"||typeof u.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,q||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(y||R!==f)&&T1(t,u,s,f),Gn=!1;var x=t.memoizedState;u.state=x,as(t,s,u,o),ns(),R=t.memoizedState,y||x!==R||Gn?(typeof z=="function"&&(Jo(t,a,z,s),R=t.memoizedState),(_=Gn||A1(t,a,_,s,x,R,f))?(q||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=R),u.props=s,u.state=R,u.context=f,s=_):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{u=t.stateNode,Ko(e,t),f=t.memoizedProps,q=xa(a,f),u.props=q,z=t.pendingProps,x=u.context,R=a.contextType,_=Wa,typeof R=="object"&&R!==null&&(_=rt(R)),y=a.getDerivedStateFromProps,(R=typeof y=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==z||x!==_)&&T1(t,u,s,_),Gn=!1,x=t.memoizedState,u.state=x,as(t,s,u,o),ns();var j=t.memoizedState;f!==z||x!==j||Gn||e!==null&&e.dependencies!==null&&pr(e.dependencies)?(typeof y=="function"&&(Jo(t,a,y,s),j=t.memoizedState),(q=Gn||A1(t,a,q,s,x,j,_)||e!==null&&e.dependencies!==null&&pr(e.dependencies))?(R||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,j,_),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,j,_)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=j),u.props=s,u.state=j,u.context=_,s=q):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),s=!1)}return u=s,Nr(e,t),s=(t.flags&128)!==0,u||s?(u=t.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&s?(t.child=Oa(t,e.child,null,o),t.child=Oa(t,null,a,o)):lt(e,t,a,o),t.memoizedState=u.state,e=t.child):e=_n(e,t,o),e}function L1(e,t,a,s){return Sa(),t.flags|=256,lt(e,t,a,s),t.child}var eu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tu(e){return{baseLanes:e,cachePool:R0()}}function nu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ct),e}function B1(e,t,a){var s=t.pendingProps,o=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),f&&(o=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(o?Jn(t):Xn(),(e=Ne)?(e=Jd(e,Lt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:In!==null?{id:Wt,overflow:en}:null,retryLane:536870912,hydrationErrors:null},a=b0(e),a.return=t,t.child=a,st=t,Ne=null)):e=null,e===null)throw Vn(t);return zu(e)?t.lanes=32:t.lanes=536870912,null}var y=s.children;return s=s.fallback,o?(Xn(),o=t.mode,y=qr({mode:"hidden",children:y},o),s=_a(s,o,a,null),y.return=t,s.return=t,y.sibling=s,t.child=y,s=t.child,s.memoizedState=tu(a),s.childLanes=nu(e,f,a),t.memoizedState=eu,os(null,s)):(Jn(t),au(t,y))}var _=e.memoizedState;if(_!==null&&(y=_.dehydrated,y!==null)){if(u)t.flags&256?(Jn(t),t.flags&=-257,t=iu(e,t,a)):t.memoizedState!==null?(Xn(),t.child=e.child,t.flags|=128,t=null):(Xn(),y=s.fallback,o=t.mode,s=qr({mode:"visible",children:s.children},o),y=_a(y,o,a,null),y.flags|=2,s.return=t,y.return=t,s.sibling=y,t.child=s,Oa(t,e.child,null,a),s=t.child,s.memoizedState=tu(a),s.childLanes=nu(e,f,a),t.memoizedState=eu,t=os(null,s));else if(Jn(t),zu(y)){if(f=y.nextSibling&&y.nextSibling.dataset,f)var R=f.dgst;f=R,s=Error(l(419)),s.stack="",s.digest=f,Xi({value:s,source:null,stack:null}),t=iu(e,t,a)}else if(Ye||ai(e,t,a,!1),f=(a&e.childLanes)!==0,Ye||f){if(f=Re,f!==null&&(s=kc(f,a),s!==0&&s!==_.retryLane))throw _.retryLane=s,ba(e,s),_t(f,e,s),Fo;Du(y)||Pr(),t=iu(e,t,a)}else Du(y)?(t.flags|=192,t.child=e.child,t=null):(e=_.treeContext,Ne=It(y.nextSibling),st=t,ve=!0,Pn=null,Lt=!1,e!==null&&E0(t,e),t=au(t,s.children),t.flags|=4096);return t}return o?(Xn(),y=s.fallback,o=t.mode,_=e.child,R=_.sibling,s=mn(_,{mode:"hidden",children:s.children}),s.subtreeFlags=_.subtreeFlags&65011712,R!==null?y=mn(R,y):(y=_a(y,o,a,null),y.flags|=2),y.return=t,s.return=t,s.sibling=y,t.child=s,os(null,s),s=t.child,y=e.child.memoizedState,y===null?y=tu(a):(o=y.cachePool,o!==null?(_=Ge._currentValue,o=o.parent!==_?{parent:_,pool:_}:o):o=R0(),y={baseLanes:y.baseLanes|a,cachePool:o}),s.memoizedState=y,s.childLanes=nu(e,f,a),t.memoizedState=eu,os(e.child,s)):(Jn(t),a=e.child,e=a.sibling,a=mn(a,{mode:"visible",children:s.children}),a.return=t,a.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=a,t.memoizedState=null,a)}function au(e,t){return t=qr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function qr(e,t){return e=kt(22,e,null,t),e.lanes=0,e}function iu(e,t,a){return Oa(t,e.child,null,a),e=au(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function I1(e,t,a){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),wo(e.return,t,a)}function su(e,t,a,s,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:o,treeForkCount:u}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=o,f.treeForkCount=u)}function P1(e,t,a){var s=t.pendingProps,o=s.revealOrder,u=s.tail;s=s.children;var f=Ie.current,y=(f&2)!==0;if(y?(f=f&1|2,t.flags|=128):f&=1,G(Ie,f),lt(e,t,s,a),s=ve?Ji:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&I1(e,a,t);else if(e.tag===19)I1(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&Sr(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),su(t,!1,o,a,u,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Sr(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}su(t,!0,a,null,u,s);break;case"together":su(t,!1,null,null,void 0,s);break;default:t.memoizedState=null}return t.child}function _n(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ai(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,a=mn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=mn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ru(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&pr(e)))}function fp(e,t,a){switch(t.tag){case 3:at(t,t.stateNode.containerInfo),$n(t,Ge,e.memoizedState.cache),Sa();break;case 27:case 5:on(t);break;case 4:at(t,t.stateNode.containerInfo);break;case 10:$n(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Co(t),null;break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(Jn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?B1(e,t,a):(Jn(t),e=_n(e,t,a),e!==null?e.sibling:null);Jn(t);break;case 19:var o=(e.flags&128)!==0;if(s=(a&t.childLanes)!==0,s||(ai(e,t,a,!1),s=(a&t.childLanes)!==0),o){if(s)return P1(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(Ie,Ie.current),s)break;return null;case 22:return t.lanes=0,M1(e,t,a,t.pendingProps);case 24:$n(t,Ge,e.memoizedState.cache)}return _n(e,t,a)}function V1(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!ru(e,a)&&(t.flags&128)===0)return Ye=!1,fp(e,t,a);Ye=(e.flags&131072)!==0}else Ye=!1,ve&&(t.flags&1048576)!==0&&S0(t,Ji,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=Ka(t.elementType),t.type=e,typeof e=="function")co(e)?(s=xa(e,s),t.tag=1,t=H1(null,t,e,s,a)):(t.tag=0,t=Wo(null,t,e,s,a));else{if(e!=null){var o=e.$$typeof;if(o===ie){t.tag=11,t=j1(null,t,e,s,a);break e}else if(o===F){t.tag=14,t=N1(null,t,e,s,a);break e}}throw t=Ce(e)||e,Error(l(306,t,""))}}return t;case 0:return Wo(e,t,t.type,t.pendingProps,a);case 1:return s=t.type,o=xa(s,t.pendingProps),H1(e,t,s,o,a);case 3:e:{if(at(t,t.stateNode.containerInfo),e===null)throw Error(l(387));s=t.pendingProps;var u=t.memoizedState;o=u.element,Ko(e,t),as(t,s,null,a);var f=t.memoizedState;if(s=f.cache,$n(t,Ge,s),s!==u.cache&&bo(t,[Ge],a,!0),ns(),s=f.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=L1(e,t,s,a);break e}else if(s!==o){o=Dt(Error(l(424)),t),Xi(o),t=L1(e,t,s,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ne=It(e.firstChild),st=t,ve=!0,Pn=null,Lt=!0,a=M0(t,null,s,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Sa(),s===o){t=_n(e,t,a);break e}lt(e,t,s,a)}t=t.child}return t;case 26:return Nr(e,t),e===null?(a=th(t.type,null,t.pendingProps,null))?t.memoizedState=a:ve||(a=t.type,e=t.pendingProps,s=Xr(he.current).createElement(a),s[it]=t,s[mt]=e,ot(s,a,e),et(s),t.stateNode=s):t.memoizedState=th(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return on(t),e===null&&ve&&(s=t.stateNode=Fd(t.type,t.pendingProps,he.current),st=t,Lt=!0,o=Ne,ia(t.type)?(Hu=o,Ne=It(s.firstChild)):Ne=o),lt(e,t,t.pendingProps.children,a),Nr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((o=s=Ne)&&(s=Pp(s,t.type,t.pendingProps,Lt),s!==null?(t.stateNode=s,st=t,Ne=It(s.firstChild),Lt=!1,o=!0):o=!1),o||Vn(t)),on(t),o=t.type,u=t.pendingProps,f=e!==null?e.memoizedProps:null,s=u.children,qu(o,u)?s=null:f!==null&&qu(o,f)&&(t.flags|=32),t.memoizedState!==null&&(o=No(e,t,ip,null,null,a),Es._currentValue=o),Nr(e,t),lt(e,t,s,a),t.child;case 6:return e===null&&ve&&((e=a=Ne)&&(a=Vp(a,t.pendingProps,Lt),a!==null?(t.stateNode=a,st=t,Ne=null,e=!0):e=!1),e||Vn(t)),null;case 13:return B1(e,t,a);case 4:return at(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Oa(t,null,s,a):lt(e,t,s,a),t.child;case 11:return j1(e,t,t.type,t.pendingProps,a);case 7:return lt(e,t,t.pendingProps,a),t.child;case 8:return lt(e,t,t.pendingProps.children,a),t.child;case 12:return lt(e,t,t.pendingProps.children,a),t.child;case 10:return s=t.pendingProps,$n(t,t.type,s.value),lt(e,t,s.children,a),t.child;case 9:return o=t.type._context,s=t.pendingProps.children,Aa(t),o=rt(o),s=s(o),t.flags|=1,lt(e,t,s,a),t.child;case 14:return N1(e,t,t.type,t.pendingProps,a);case 15:return q1(e,t,t.type,t.pendingProps,a);case 19:return P1(e,t,a);case 31:return hp(e,t,a);case 22:return M1(e,t,a,t.pendingProps);case 24:return Aa(t),s=rt(Ge),e===null?(o=Eo(),o===null&&(o=Re,u=_o(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=a),o=u),t.memoizedState={parent:s,cache:o},To(t),$n(t,Ge,o)):((e.lanes&a)!==0&&(Ko(e,t),as(t,null,null,a),ns()),o=e.memoizedState,u=t.memoizedState,o.parent!==s?(o={parent:s,cache:s},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),$n(t,Ge,s)):(s=u.cache,$n(t,Ge,s),s!==o.cache&&bo(t,[Ge],a,!0))),lt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Sn(e){e.flags|=4}function lu(e,t,a,s,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(yd())e.flags|=8192;else throw ka=vr,Ao}else e.flags&=-16777217}function $1(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rh(t))if(yd())e.flags|=8192;else throw ka=vr,Ao}function Mr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ac():536870912,e.lanes|=t,mi|=t)}function us(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,s|=o.subtreeFlags&65011712,s|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,s|=o.subtreeFlags,s|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=s,e.childLanes=a,t}function pp(e,t,a){var s=t.pendingProps;switch(mo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return qe(t),null;case 3:return a=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),vn(Ge),ze(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ni(t)?Sn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yo())),qe(t),null;case 26:var o=t.type,u=t.memoizedState;return e===null?(Sn(t),u!==null?(qe(t),$1(t,u)):(qe(t),lu(t,o,null,s,a))):u?u!==e.memoizedState?(Sn(t),qe(t),$1(t,u)):(qe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&Sn(t),qe(t),lu(t,o,e,s,a)),null;case 27:if(zn(t),a=he.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Sn(t);else{if(!s){if(t.stateNode===null)throw Error(l(166));return qe(t),null}e=J.current,ni(t)?A0(t):(e=Fd(o,s,a),t.stateNode=e,Sn(t))}return qe(t),null;case 5:if(zn(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Sn(t);else{if(!s){if(t.stateNode===null)throw Error(l(166));return qe(t),null}if(u=J.current,ni(t))A0(t);else{var f=Xr(he.current);switch(u){case 1:u=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:u=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":u=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":u=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":u=f.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?f.createElement("select",{is:s.is}):f.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?f.createElement(o,{is:s.is}):f.createElement(o)}}u[it]=t,u[mt]=s;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)u.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=u;e:switch(ot(u,o,s),o){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Sn(t)}}return qe(t),lu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&Sn(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(l(166));if(e=he.current,ni(t)){if(e=t.stateNode,a=t.memoizedProps,s=null,o=st,o!==null)switch(o.tag){case 27:case 5:s=o.memoizedProps}e[it]=t,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Bd(e.nodeValue,a)),e||Vn(t,!0)}else e=Xr(e).createTextNode(s),e[it]=t,t.stateNode=e}return qe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(s=ni(t),a!==null){if(e===null){if(!s)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[it]=t}else Sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),e=!1}else a=yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Rt(t),t):(Rt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return qe(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=ni(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(l(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[it]=t}else Sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),o=!1}else o=yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Rt(t),t):(Rt(t),null)}return Rt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=t.child,o=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(o=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Mr(t,t.updateQueue),qe(t),null);case 4:return ze(),e===null&&Ru(t.stateNode.containerInfo),qe(t),null;case 10:return vn(t.type),qe(t),null;case 19:if(U(Ie),s=t.memoizedState,s===null)return qe(t),null;if(o=(t.flags&128)!==0,u=s.rendering,u===null)if(o)us(s,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Sr(e),u!==null){for(t.flags|=128,us(s,!1),e=u.updateQueue,t.updateQueue=e,Mr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)w0(a,e),a=a.sibling;return G(Ie,Ie.current&1|2),ve&&gn(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&je()>Lr&&(t.flags|=128,o=!0,us(s,!1),t.lanes=4194304)}else{if(!o)if(e=Sr(u),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Mr(t,e),us(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!ve)return qe(t),null}else 2*je()-s.renderingStartTime>Lr&&a!==536870912&&(t.flags|=128,o=!0,us(s,!1),t.lanes=4194304);s.isBackwards?(u.sibling=t.child,t.child=u):(e=s.last,e!==null?e.sibling=u:t.child=u,s.last=u)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=je(),e.sibling=null,a=Ie.current,G(Ie,o?a&1|2:a&1),ve&&gn(t,s.treeForkCount),e):(qe(t),null);case 22:case 23:return Rt(t),xo(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(a&536870912)!==0&&(t.flags&128)===0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),a=t.updateQueue,a!==null&&Mr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==a&&(t.flags|=2048),e!==null&&U(Ta),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),vn(Ge),qe(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function mp(e,t){switch(mo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(Ge),ze(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return zn(t),null;case 31:if(t.memoizedState!==null){if(Rt(t),t.alternate===null)throw Error(l(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Rt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Ie),null;case 4:return ze(),null;case 10:return vn(t.type),null;case 22:case 23:return Rt(t),xo(),e!==null&&U(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return vn(Ge),null;case 25:return null;default:return null}}function G1(e,t){switch(mo(t),t.tag){case 3:vn(Ge),ze();break;case 26:case 27:case 5:zn(t);break;case 4:ze();break;case 31:t.memoizedState!==null&&Rt(t);break;case 13:Rt(t);break;case 19:U(Ie);break;case 10:vn(t.type);break;case 22:case 23:Rt(t),xo(),e!==null&&U(Ta);break;case 24:vn(Ge)}}function cs(e,t){try{var a=t.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var o=s.next;a=o;do{if((a.tag&e)===e){s=void 0;var u=a.create,f=a.inst;s=u(),f.destroy=s}a=a.next}while(a!==o)}}catch(y){Te(t,t.return,y)}}function Qn(e,t,a){try{var s=t.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&e)===e){var f=s.inst,y=f.destroy;if(y!==void 0){f.destroy=void 0,o=t;var _=a,R=y;try{R()}catch(q){Te(o,_,q)}}}s=s.next}while(s!==u)}}catch(q){Te(t,t.return,q)}}function Z1(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{D0(t,a)}catch(s){Te(e,e.return,s)}}}function Y1(e,t,a){a.props=xa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Te(e,t,s)}}function ds(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(o){Te(e,t,o)}}function tn(e,t){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(o){Te(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){Te(e,t,o)}else a.current=null}function J1(e){var t=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(o){Te(e,e.return,o)}}function ou(e,t,a){try{var s=e.stateNode;Dp(s,e.type,a,t),s[mt]=t}catch(o){Te(e,e.return,o)}}function X1(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ia(e.type)||e.tag===4}function uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||X1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cu(e,t,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=fn));else if(s!==4&&(s===27&&ia(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(cu(e,t,a),e=e.sibling;e!==null;)cu(e,t,a),e=e.sibling}function Ur(e,t,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(s!==4&&(s===27&&ia(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ur(e,t,a),e=e.sibling;e!==null;)Ur(e,t,a),e=e.sibling}function Q1(e){var t=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);ot(t,s,a),t[it]=e,t[mt]=a}catch(u){Te(e,e.return,u)}}var En=!1,Je=!1,du=!1,F1=typeof WeakSet=="function"?WeakSet:Set,tt=null;function gp(e,t){if(e=e.containerInfo,ju=al,e=c0(e),ao(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var o=s.anchorOffset,u=s.focusNode;s=s.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var f=0,y=-1,_=-1,R=0,q=0,z=e,x=null;t:for(;;){for(var j;z!==a||o!==0&&z.nodeType!==3||(y=f+o),z!==u||s!==0&&z.nodeType!==3||(_=f+s),z.nodeType===3&&(f+=z.nodeValue.length),(j=z.firstChild)!==null;)x=z,z=j;for(;;){if(z===e)break t;if(x===a&&++R===o&&(y=f),x===u&&++q===s&&(_=f),(j=z.nextSibling)!==null)break;z=x,x=z.parentNode}z=j}a=y===-1||_===-1?null:{start:y,end:_}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nu={focusedElem:e,selectionRange:a},al=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)o=e[a],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,o=u.memoizedProps,u=u.memoizedState,s=a.stateNode;try{var Y=xa(a.type,o);e=s.getSnapshotBeforeUpdate(Y,u),s.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Te(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Uu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function W1(e,t,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Tn(e,a),s&4&&cs(5,a);break;case 1:if(Tn(e,a),s&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(f){Te(a,a.return,f)}else{var o=xa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Te(a,a.return,f)}}s&64&&Z1(a),s&512&&ds(a,a.return);break;case 3:if(Tn(e,a),s&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{D0(e,t)}catch(f){Te(a,a.return,f)}}break;case 27:t===null&&s&4&&Q1(a);case 26:case 5:Tn(e,a),t===null&&s&4&&J1(a),s&512&&ds(a,a.return);break;case 12:Tn(e,a);break;case 31:Tn(e,a),s&4&&nd(e,a);break;case 13:Tn(e,a),s&4&&ad(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Tp.bind(null,a),$p(e,a))));break;case 22:if(s=a.memoizedState!==null||En,!s){t=t!==null&&t.memoizedState!==null||Je,o=En;var u=Je;En=s,(Je=t)&&!u?Kn(e,a,(a.subtreeFlags&8772)!==0):Tn(e,a),En=o,Je=u}break;case 30:break;default:Tn(e,a)}}function ed(e){var t=e.alternate;t!==null&&(e.alternate=null,ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ll(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,yt=!1;function An(e,t,a){for(a=a.child;a!==null;)td(e,t,a),a=a.sibling}function td(e,t,a){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Mi,a)}catch{}switch(a.tag){case 26:Je||tn(a,t),An(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||tn(a,t);var s=De,o=yt;ia(a.type)&&(De=a.stateNode,yt=!1),An(e,t,a),bs(a.stateNode),De=s,yt=o;break;case 5:Je||tn(a,t);case 6:if(s=De,o=yt,De=null,An(e,t,a),De=s,yt=o,De!==null)if(yt)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(a.stateNode)}catch(u){Te(a,t,u)}else try{De.removeChild(a.stateNode)}catch(u){Te(a,t,u)}break;case 18:De!==null&&(yt?(e=De,Zd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ei(e)):Zd(De,a.stateNode));break;case 4:s=De,o=yt,De=a.stateNode.containerInfo,yt=!0,An(e,t,a),De=s,yt=o;break;case 0:case 11:case 14:case 15:Qn(2,a,t),Je||Qn(4,a,t),An(e,t,a);break;case 1:Je||(tn(a,t),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Y1(a,t,s)),An(e,t,a);break;case 21:An(e,t,a);break;case 22:Je=(s=Je)||a.memoizedState!==null,An(e,t,a),Je=s;break;default:An(e,t,a)}}function nd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ei(e)}catch(a){Te(t,t.return,a)}}}function ad(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ei(e)}catch(a){Te(t,t.return,a)}}function yp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new F1),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new F1),t;default:throw Error(l(435,e.tag))}}function Dr(e,t){var a=yp(e);t.forEach(function(s){if(!a.has(s)){a.add(s);var o=Kp.bind(null,e,s);s.then(o,o)}})}function vt(e,t){var a=t.deletions;if(a!==null)for(var s=0;s<a.length;s++){var o=a[s],u=e,f=t,y=f;e:for(;y!==null;){switch(y.tag){case 27:if(ia(y.type)){De=y.stateNode,yt=!1;break e}break;case 5:De=y.stateNode,yt=!1;break e;case 3:case 4:De=y.stateNode.containerInfo,yt=!0;break e}y=y.return}if(De===null)throw Error(l(160));td(u,f,o),De=null,yt=!1,u=o.alternate,u!==null&&(u.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)id(t,e),t=t.sibling}var Gt=null;function id(e,t){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),wt(e),s&4&&(Qn(3,e,e.return),cs(3,e),Qn(5,e,e.return));break;case 1:vt(t,e),wt(e),s&512&&(Je||a===null||tn(a,a.return)),s&64&&En&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var o=Gt;if(vt(t,e),wt(e),s&512&&(Je||a===null||tn(a,a.return)),s&4){var u=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,o=o.ownerDocument||o;t:switch(s){case"title":u=o.getElementsByTagName("title")[0],(!u||u[zi]||u[it]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=o.createElement(s),o.head.insertBefore(u,o.querySelector("head > title"))),ot(u,s,a),u[it]=e,et(u),s=u;break e;case"link":var f=ih("link","href",o).get(s+(a.href||""));if(f){for(var y=0;y<f.length;y++)if(u=f[y],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(y,1);break t}}u=o.createElement(s),ot(u,s,a),o.head.appendChild(u);break;case"meta":if(f=ih("meta","content",o).get(s+(a.content||""))){for(y=0;y<f.length;y++)if(u=f[y],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(y,1);break t}}u=o.createElement(s),ot(u,s,a),o.head.appendChild(u);break;default:throw Error(l(468,s))}u[it]=e,et(u),s=u}e.stateNode=s}else sh(o,e.type,e.stateNode);else e.stateNode=ah(o,s,e.memoizedProps);else u!==s?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,s===null?sh(o,e.type,e.stateNode):ah(o,s,e.memoizedProps)):s===null&&e.stateNode!==null&&ou(e,e.memoizedProps,a.memoizedProps)}break;case 27:vt(t,e),wt(e),s&512&&(Je||a===null||tn(a,a.return)),a!==null&&s&4&&ou(e,e.memoizedProps,a.memoizedProps);break;case 5:if(vt(t,e),wt(e),s&512&&(Je||a===null||tn(a,a.return)),e.flags&32){o=e.stateNode;try{Ga(o,"")}catch(Y){Te(e,e.return,Y)}}s&4&&e.stateNode!=null&&(o=e.memoizedProps,ou(e,o,a!==null?a.memoizedProps:o)),s&1024&&(du=!0);break;case 6:if(vt(t,e),wt(e),s&4){if(e.stateNode===null)throw Error(l(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Y){Te(e,e.return,Y)}}break;case 3:if(Wr=null,o=Gt,Gt=Qr(t.containerInfo),vt(t,e),Gt=o,wt(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(Y){Te(e,e.return,Y)}du&&(du=!1,sd(e));break;case 4:s=Gt,Gt=Qr(e.stateNode.containerInfo),vt(t,e),wt(e),Gt=s;break;case 12:vt(t,e),wt(e);break;case 31:vt(t,e),wt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Dr(e,s)));break;case 13:vt(t,e),wt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hr=je()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Dr(e,s)));break;case 22:o=e.memoizedState!==null;var _=a!==null&&a.memoizedState!==null,R=En,q=Je;if(En=R||o,Je=q||_,vt(t,e),Je=q,En=R,wt(e),s&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(a===null||_||En||Je||Ca(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){_=a=t;try{if(u=_.stateNode,o)f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{y=_.stateNode;var z=_.memoizedProps.style,x=z!=null&&z.hasOwnProperty("display")?z.display:null;y.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(Y){Te(_,_.return,Y)}}}else if(t.tag===6){if(a===null){_=t;try{_.stateNode.nodeValue=o?"":_.memoizedProps}catch(Y){Te(_,_.return,Y)}}}else if(t.tag===18){if(a===null){_=t;try{var j=_.stateNode;o?Yd(j,!0):Yd(_.stateNode,!1)}catch(Y){Te(_,_.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Dr(e,a))));break;case 19:vt(t,e),wt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Dr(e,s)));break;case 30:break;case 21:break;default:vt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{for(var a,s=e.return;s!==null;){if(X1(s)){a=s;break}s=s.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var o=a.stateNode,u=uu(e);Ur(e,u,o);break;case 5:var f=a.stateNode;a.flags&32&&(Ga(f,""),a.flags&=-33);var y=uu(e);Ur(e,y,f);break;case 3:case 4:var _=a.stateNode.containerInfo,R=uu(e);cu(e,R,_);break;default:throw Error(l(161))}}catch(q){Te(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;sd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)W1(e,t.alternate,t),t=t.sibling}function Ca(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Qn(4,t,t.return),Ca(t);break;case 1:tn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Y1(t,t.return,a),Ca(t);break;case 27:bs(t.stateNode);case 26:case 5:tn(t,t.return),Ca(t);break;case 22:t.memoizedState===null&&Ca(t);break;case 30:Ca(t);break;default:Ca(t)}e=e.sibling}}function Kn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,o=e,u=t,f=u.flags;switch(u.tag){case 0:case 11:case 15:Kn(o,u,a),cs(4,u);break;case 1:if(Kn(o,u,a),s=u,o=s.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(R){Te(s,s.return,R)}if(s=u,o=s.updateQueue,o!==null){var y=s.stateNode;try{var _=o.shared.hiddenCallbacks;if(_!==null)for(o.shared.hiddenCallbacks=null,o=0;o<_.length;o++)U0(_[o],y)}catch(R){Te(s,s.return,R)}}a&&f&64&&Z1(u),ds(u,u.return);break;case 27:Q1(u);case 26:case 5:Kn(o,u,a),a&&s===null&&f&4&&J1(u),ds(u,u.return);break;case 12:Kn(o,u,a);break;case 31:Kn(o,u,a),a&&f&4&&nd(o,u);break;case 13:Kn(o,u,a),a&&f&4&&ad(o,u);break;case 22:u.memoizedState===null&&Kn(o,u,a),ds(u,u.return);break;case 30:break;default:Kn(o,u,a)}t=t.sibling}}function hu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qi(a))}function fu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qi(e))}function Zt(e,t,a,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rd(e,t,a,s),t=t.sibling}function rd(e,t,a,s){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Zt(e,t,a,s),o&2048&&cs(9,t);break;case 1:Zt(e,t,a,s);break;case 3:Zt(e,t,a,s),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qi(e)));break;case 12:if(o&2048){Zt(e,t,a,s),e=t.stateNode;try{var u=t.memoizedProps,f=u.id,y=u.onPostCommit;typeof y=="function"&&y(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(_){Te(t,t.return,_)}}else Zt(e,t,a,s);break;case 31:Zt(e,t,a,s);break;case 13:Zt(e,t,a,s);break;case 23:break;case 22:u=t.stateNode,f=t.alternate,t.memoizedState!==null?u._visibility&2?Zt(e,t,a,s):hs(e,t):u._visibility&2?Zt(e,t,a,s):(u._visibility|=2,hi(e,t,a,s,(t.subtreeFlags&10256)!==0||!1)),o&2048&&hu(f,t);break;case 24:Zt(e,t,a,s),o&2048&&fu(t.alternate,t);break;default:Zt(e,t,a,s)}}function hi(e,t,a,s,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,f=t,y=a,_=s,R=f.flags;switch(f.tag){case 0:case 11:case 15:hi(u,f,y,_,o),cs(8,f);break;case 23:break;case 22:var q=f.stateNode;f.memoizedState!==null?q._visibility&2?hi(u,f,y,_,o):hs(u,f):(q._visibility|=2,hi(u,f,y,_,o)),o&&R&2048&&hu(f.alternate,f);break;case 24:hi(u,f,y,_,o),o&&R&2048&&fu(f.alternate,f);break;default:hi(u,f,y,_,o)}t=t.sibling}}function hs(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,s=t,o=s.flags;switch(s.tag){case 22:hs(a,s),o&2048&&hu(s.alternate,s);break;case 24:hs(a,s),o&2048&&fu(s.alternate,s);break;default:hs(a,s)}t=t.sibling}}var fs=8192;function fi(e,t,a){if(e.subtreeFlags&fs)for(e=e.child;e!==null;)ld(e,t,a),e=e.sibling}function ld(e,t,a){switch(e.tag){case 26:fi(e,t,a),e.flags&fs&&e.memoizedState!==null&&am(a,Gt,e.memoizedState,e.memoizedProps);break;case 5:fi(e,t,a);break;case 3:case 4:var s=Gt;Gt=Qr(e.stateNode.containerInfo),fi(e,t,a),Gt=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=fs,fs=16777216,fi(e,t,a),fs=s):fi(e,t,a));break;default:fi(e,t,a)}}function od(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ps(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];tt=s,cd(s,e)}od(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ud(e),e=e.sibling}function ud(e){switch(e.tag){case 0:case 11:case 15:ps(e),e.flags&2048&&Qn(9,e,e.return);break;case 3:ps(e);break;case 12:ps(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zr(e)):ps(e);break;default:ps(e)}}function zr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];tt=s,cd(s,e)}od(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Qn(8,t,t.return),zr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,zr(t));break;default:zr(t)}e=e.sibling}}function cd(e,t){for(;tt!==null;){var a=tt;switch(a.tag){case 0:case 11:case 15:Qn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Qi(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,tt=s;else e:for(a=e;tt!==null;){s=tt;var o=s.sibling,u=s.return;if(ed(s),s===a){tt=null;break e}if(o!==null){o.return=u,tt=o;break e}tt=u}}}var vp={getCacheForType:function(e){var t=rt(Ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return rt(Ge).controller.signal}},wp=typeof WeakMap=="function"?WeakMap:Map,Ee=0,Re=null,pe=null,ge=0,Ae=0,xt=null,Fn=!1,pi=!1,pu=!1,kn=0,Le=0,Wn=0,ja=0,mu=0,Ct=0,mi=0,ms=null,bt=null,gu=!1,Hr=0,dd=0,Lr=1/0,Br=null,ea=null,Fe=0,ta=null,gi=null,On=0,yu=0,vu=null,hd=null,gs=0,wu=null;function jt(){return(Ee&2)!==0&&ge!==0?ge&-ge:N.T!==null?Tu():Oc()}function fd(){if(Ct===0)if((ge&536870912)===0||ve){var e=Js;Js<<=1,(Js&3932160)===0&&(Js=262144),Ct=e}else Ct=536870912;return e=Ot.current,e!==null&&(e.flags|=32),Ct}function _t(e,t,a){(e===Re&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(yi(e,0),na(e,ge,Ct,!1)),Di(e,a),((Ee&2)===0||e!==Re)&&(e===Re&&((Ee&2)===0&&(ja|=a),Le===4&&na(e,ge,Ct,!1)),nn(e))}function pd(e,t,a){if((Ee&6)!==0)throw Error(l(327));var s=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ui(e,t),o=s?Sp(e,t):_u(e,t,!0),u=s;do{if(o===0){pi&&!s&&na(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!bp(a)){o=_u(e,t,!1),u=!1;continue}if(o===2){if(u=t,e.errorRecoveryDisabledLanes&u)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var y=e;o=ms;var _=y.current.memoizedState.isDehydrated;if(_&&(yi(y,f).flags|=256),f=_u(y,f,!1),f!==2){if(pu&&!_){y.errorRecoveryDisabledLanes|=u,ja|=u,o=4;break e}u=bt,bt=o,u!==null&&(bt===null?bt=u:bt.push.apply(bt,u))}o=f}if(u=!1,o!==2)continue}}if(o===1){yi(e,0),na(e,t,0,!0);break}e:{switch(s=e,u=o,u){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:na(s,t,Ct,!Fn);break e;case 2:bt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(o=Hr+300-je(),10<o)){if(na(s,t,Ct,!Fn),Qs(s,0,!0)!==0)break e;On=t,s.timeoutHandle=$d(md.bind(null,s,a,bt,Br,gu,t,Ct,ja,mi,Fn,u,"Throttled",-0,0),o);break e}md(s,a,bt,Br,gu,t,Ct,ja,mi,Fn,u,null,-0,0)}}break}while(!0);nn(e)}function md(e,t,a,s,o,u,f,y,_,R,q,z,x,j){if(e.timeoutHandle=-1,z=t.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fn},ld(t,u,z);var Y=(u&62914560)===u?Hr-je():(u&4194048)===u?dd-je():0;if(Y=im(z,Y),Y!==null){On=u,e.cancelPendingCommit=Y(Ed.bind(null,e,t,u,a,s,o,f,y,_,q,z,null,x,j)),na(e,u,f,!R);return}}Ed(e,t,u,a,s,o,f,y,_)}function bp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var o=a[s],u=o.getSnapshot;o=o.value;try{if(!Kt(u(),o))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,a,s){t&=~mu,t&=~ja,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var o=t;0<o;){var u=31-Tt(o),f=1<<u;s[u]=-1,o&=~f}a!==0&&Tc(e,a,t)}function Ir(){return(Ee&6)===0?(ys(0),!1):!0}function bu(){if(pe!==null){if(Ae===0)var e=pe.return;else e=pe,yn=Ea=null,Uo(e),li=null,Wi=0,e=pe;for(;e!==null;)G1(e.alternate,e),e=e.return;pe=null}}function yi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Lp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),On=0,bu(),Re=e,pe=a=mn(e.current,null),ge=t,Ae=0,xt=null,Fn=!1,pi=Ui(e,t),pu=!1,mi=Ct=mu=ja=Wn=Le=0,bt=ms=null,gu=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var o=31-Tt(s),u=1<<o;t|=e[o],s&=~u}return kn=t,ur(),a}function gd(e,t){ue=null,N.H=ls,t===ri||t===yr?(t=j0(),Ae=3):t===Ao?(t=j0(),Ae=4):Ae=t===Fo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,xt=t,pe===null&&(Le=1,Cr(e,Dt(t,e.current)))}function yd(){var e=Ot.current;return e===null?!0:(ge&4194048)===ge?Bt===null:(ge&62914560)===ge||(ge&536870912)!==0?e===Bt:!1}function vd(){var e=N.H;return N.H=ls,e===null?ls:e}function wd(){var e=N.A;return N.A=vp,e}function Pr(){Le=4,Fn||(ge&4194048)!==ge&&Ot.current!==null||(pi=!0),(Wn&134217727)===0&&(ja&134217727)===0||Re===null||na(Re,ge,Ct,!1)}function _u(e,t,a){var s=Ee;Ee|=2;var o=vd(),u=wd();(Re!==e||ge!==t)&&(Br=null,yi(e,t)),t=!1;var f=Le;e:do try{if(Ae!==0&&pe!==null){var y=pe,_=xt;switch(Ae){case 8:bu(),f=6;break e;case 3:case 2:case 9:case 6:Ot.current===null&&(t=!0);var R=Ae;if(Ae=0,xt=null,vi(e,y,_,R),a&&pi){f=0;break e}break;default:R=Ae,Ae=0,xt=null,vi(e,y,_,R)}}_p(),f=Le;break}catch(q){gd(e,q)}while(!0);return t&&e.shellSuspendCounter++,yn=Ea=null,Ee=s,N.H=o,N.A=u,pe===null&&(Re=null,ge=0,ur()),f}function _p(){for(;pe!==null;)bd(pe)}function Sp(e,t){var a=Ee;Ee|=2;var s=vd(),o=wd();Re!==e||ge!==t?(Br=null,Lr=je()+500,yi(e,t)):pi=Ui(e,t);e:do try{if(Ae!==0&&pe!==null){t=pe;var u=xt;t:switch(Ae){case 1:Ae=0,xt=null,vi(e,t,u,1);break;case 2:case 9:if(x0(u)){Ae=0,xt=null,_d(t);break}t=function(){Ae!==2&&Ae!==9||Re!==e||(Ae=7),nn(e)},u.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:x0(u)?(Ae=0,xt=null,_d(t)):(Ae=0,xt=null,vi(e,t,u,7));break;case 5:var f=null;switch(pe.tag){case 26:f=pe.memoizedState;case 5:case 27:var y=pe;if(f?rh(f):y.stateNode.complete){Ae=0,xt=null;var _=y.sibling;if(_!==null)pe=_;else{var R=y.return;R!==null?(pe=R,Vr(R)):pe=null}break t}}Ae=0,xt=null,vi(e,t,u,5);break;case 6:Ae=0,xt=null,vi(e,t,u,6);break;case 8:bu(),Le=6;break e;default:throw Error(l(462))}}Ep();break}catch(q){gd(e,q)}while(!0);return yn=Ea=null,N.H=s,N.A=o,Ee=a,pe!==null?0:(Re=null,ge=0,ur(),Le)}function Ep(){for(;pe!==null&&!$e();)bd(pe)}function bd(e){var t=V1(e.alternate,e,kn);e.memoizedProps=e.pendingProps,t===null?Vr(e):pe=t}function _d(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=z1(a,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=z1(a,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:Uo(t);default:G1(a,t),t=pe=w0(t,kn),t=V1(a,t,kn)}e.memoizedProps=e.pendingProps,t===null?Vr(e):pe=t}function vi(e,t,a,s){yn=Ea=null,Uo(t),li=null,Wi=0;var o=t.return;try{if(dp(e,o,t,a,ge)){Le=1,Cr(e,Dt(a,e.current)),pe=null;return}}catch(u){if(o!==null)throw pe=o,u;Le=1,Cr(e,Dt(a,e.current)),pe=null;return}t.flags&32768?(ve||s===1?e=!0:pi||(ge&536870912)!==0?e=!1:(Fn=e=!0,(s===2||s===9||s===3||s===6)&&(s=Ot.current,s!==null&&s.tag===13&&(s.flags|=16384))),Sd(t,e)):Vr(t)}function Vr(e){var t=e;do{if((t.flags&32768)!==0){Sd(t,Fn);return}e=t.return;var a=pp(t.alternate,t,kn);if(a!==null){pe=a;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);Le===0&&(Le=5)}function Sd(e,t){do{var a=mp(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);Le=6,pe=null}function Ed(e,t,a,s,o,u,f,y,_){e.cancelPendingCommit=null;do $r();while(Fe!==0);if((Ee&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(u=t.lanes|t.childLanes,u|=oo,n2(e,a,u,f,y,_),e===Re&&(pe=Re=null,ge=0),gi=t,ta=e,On=a,yu=u,vu=o,hd=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kp(Zs,function(){return Od(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=N.T,N.T=null,o=$.p,$.p=2,f=Ee,Ee|=4;try{gp(e,t,a)}finally{Ee=f,$.p=o,N.T=s}}Fe=1,Ad(),Td(),Kd()}}function Ad(){if(Fe===1){Fe=0;var e=ta,t=gi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var s=$.p;$.p=2;var o=Ee;Ee|=4;try{id(t,e);var u=Nu,f=c0(e.containerInfo),y=u.focusedElem,_=u.selectionRange;if(f!==y&&y&&y.ownerDocument&&u0(y.ownerDocument.documentElement,y)){if(_!==null&&ao(y)){var R=_.start,q=_.end;if(q===void 0&&(q=R),"selectionStart"in y)y.selectionStart=R,y.selectionEnd=Math.min(q,y.value.length);else{var z=y.ownerDocument||document,x=z&&z.defaultView||window;if(x.getSelection){var j=x.getSelection(),Y=y.textContent.length,ae=Math.min(_.start,Y),Oe=_.end===void 0?ae:Math.min(_.end,Y);!j.extend&&ae>Oe&&(f=Oe,Oe=ae,ae=f);var K=o0(y,ae),S=o0(y,Oe);if(K&&S&&(j.rangeCount!==1||j.anchorNode!==K.node||j.anchorOffset!==K.offset||j.focusNode!==S.node||j.focusOffset!==S.offset)){var O=z.createRange();O.setStart(K.node,K.offset),j.removeAllRanges(),ae>Oe?(j.addRange(O),j.extend(S.node,S.offset)):(O.setEnd(S.node,S.offset),j.addRange(O))}}}}for(z=[],j=y;j=j.parentNode;)j.nodeType===1&&z.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<z.length;y++){var M=z[y];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}al=!!ju,Nu=ju=null}finally{Ee=o,$.p=s,N.T=a}}e.current=t,Fe=2}}function Td(){if(Fe===2){Fe=0;var e=ta,t=gi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var s=$.p;$.p=2;var o=Ee;Ee|=4;try{W1(e,t.alternate,t)}finally{Ee=o,$.p=s,N.T=a}}Fe=3}}function Kd(){if(Fe===4||Fe===3){Fe=0,pt();var e=ta,t=gi,a=On,s=hd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,gi=ta=null,kd(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(ea=null),zl(a),t=t.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Mi,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=N.T,o=$.p,$.p=2,N.T=null;try{for(var u=e.onRecoverableError,f=0;f<s.length;f++){var y=s[f];u(y.value,{componentStack:y.stack})}}finally{N.T=t,$.p=o}}(On&3)!==0&&$r(),nn(e),o=e.pendingLanes,(a&261930)!==0&&(o&42)!==0?e===wu?gs++:(gs=0,wu=e):gs=0,ys(0)}}function kd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Qi(t)))}function $r(){return Ad(),Td(),Kd(),Od()}function Od(){if(Fe!==5)return!1;var e=ta,t=yu;yu=0;var a=zl(On),s=N.T,o=$.p;try{$.p=32>a?32:a,N.T=null,a=vu,vu=null;var u=ta,f=On;if(Fe=0,gi=ta=null,On=0,(Ee&6)!==0)throw Error(l(331));var y=Ee;if(Ee|=4,ud(u.current),rd(u,u.current,f,a),Ee=y,ys(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Mi,u)}catch{}return!0}finally{$.p=o,N.T=s,kd(e,t)}}function Rd(e,t,a){t=Dt(a,t),t=Qo(e.stateNode,t,2),e=Yn(e,t,2),e!==null&&(Di(e,2),nn(e))}function Te(e,t,a){if(e.tag===3)Rd(e,e,a);else for(;t!==null;){if(t.tag===3){Rd(t,e,a);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ea===null||!ea.has(s))){e=Dt(a,e),a=x1(2),s=Yn(t,a,2),s!==null&&(C1(a,s,t,e),Di(s,2),nn(s));break}}t=t.return}}function Su(e,t,a){var s=e.pingCache;if(s===null){s=e.pingCache=new wp;var o=new Set;s.set(t,o)}else o=s.get(t),o===void 0&&(o=new Set,s.set(t,o));o.has(a)||(pu=!0,o.add(a),e=Ap.bind(null,e,t,a),t.then(e,e))}function Ap(e,t,a){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Re===e&&(ge&a)===a&&(Le===4||Le===3&&(ge&62914560)===ge&&300>je()-Hr?(Ee&2)===0&&yi(e,0):mu|=a,mi===ge&&(mi=0)),nn(e)}function xd(e,t){t===0&&(t=Ac()),e=ba(e,t),e!==null&&(Di(e,t),nn(e))}function Tp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),xd(e,a)}function Kp(e,t){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(l(314))}s!==null&&s.delete(t),xd(e,a)}function kp(e,t){return I(e,t)}var Gr=null,wi=null,Eu=!1,Zr=!1,Au=!1,aa=0;function nn(e){e!==wi&&e.next===null&&(wi===null?Gr=wi=e:wi=wi.next=e),Zr=!0,Eu||(Eu=!0,Rp())}function ys(e,t){if(!Au&&Zr){Au=!0;do for(var a=!1,s=Gr;s!==null;){if(e!==0){var o=s.pendingLanes;if(o===0)var u=0;else{var f=s.suspendedLanes,y=s.pingedLanes;u=(1<<31-Tt(42|e)+1)-1,u&=o&~(f&~y),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,qd(s,u))}else u=ge,u=Qs(s,s===Re?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||Ui(s,u)||(a=!0,qd(s,u));s=s.next}while(a);Au=!1}}function Op(){Cd()}function Cd(){Zr=Eu=!1;var e=0;aa!==0&&Hp()&&(e=aa);for(var t=je(),a=null,s=Gr;s!==null;){var o=s.next,u=jd(s,t);u===0?(s.next=null,a===null?Gr=o:a.next=o,o===null&&(wi=a)):(a=s,(e!==0||(u&3)!==0)&&(Zr=!0)),s=o}Fe!==0&&Fe!==5||ys(e),aa!==0&&(aa=0)}function jd(e,t){for(var a=e.suspendedLanes,s=e.pingedLanes,o=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var f=31-Tt(u),y=1<<f,_=o[f];_===-1?((y&a)===0||(y&s)!==0)&&(o[f]=t2(y,t)):_<=t&&(e.expiredLanes|=y),u&=~y}if(t=Re,a=ge,a=Qs(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ue(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ui(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(s!==null&&Ue(s),zl(a)){case 2:case 8:a=Sc;break;case 32:a=Zs;break;case 268435456:a=Ec;break;default:a=Zs}return s=Nd.bind(null,e),a=I(a,s),e.callbackPriority=t,e.callbackNode=a,t}return s!==null&&s!==null&&Ue(s),e.callbackPriority=2,e.callbackNode=null,2}function Nd(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if($r()&&e.callbackNode!==a)return null;var s=ge;return s=Qs(e,e===Re?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(pd(e,s,t),jd(e,je()),e.callbackNode!=null&&e.callbackNode===a?Nd.bind(null,e):null)}function qd(e,t){if($r())return null;pd(e,t,!0)}function Rp(){Bp(function(){(Ee&6)!==0?I(dn,Op):Cd()})}function Tu(){if(aa===0){var e=ii;e===0&&(e=Ys,Ys<<=1,(Ys&261888)===0&&(Ys=256)),aa=e}return aa}function Md(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tr(""+e)}function Ud(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function xp(e,t,a,s,o){if(t==="submit"&&a&&a.stateNode===o){var u=Md((o[mt]||null).action),f=s.submitter;f&&(t=(t=f[mt]||null)?Md(t.formAction):f.getAttribute("formAction"),t!==null&&(u=t,f=null));var y=new sr("action","action",null,s,o);e.push({event:y,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(aa!==0){var _=f?Ud(o,f):new FormData(o);$o(a,{pending:!0,data:_,method:o.method,action:u},null,_)}}else typeof u=="function"&&(y.preventDefault(),_=f?Ud(o,f):new FormData(o),$o(a,{pending:!0,data:_,method:o.method,action:u},u,_))},currentTarget:o}]})}}for(var Ku=0;Ku<lo.length;Ku++){var ku=lo[Ku],Cp=ku.toLowerCase(),jp=ku[0].toUpperCase()+ku.slice(1);$t(Cp,"on"+jp)}$t(f0,"onAnimationEnd"),$t(p0,"onAnimationIteration"),$t(m0,"onAnimationStart"),$t("dblclick","onDoubleClick"),$t("focusin","onFocus"),$t("focusout","onBlur"),$t(Y2,"onTransitionRun"),$t(J2,"onTransitionStart"),$t(X2,"onTransitionCancel"),$t(g0,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Np=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vs));function Dd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],o=s.event;s=s.listeners;e:{var u=void 0;if(t)for(var f=s.length-1;0<=f;f--){var y=s[f],_=y.instance,R=y.currentTarget;if(y=y.listener,_!==u&&o.isPropagationStopped())break e;u=y,o.currentTarget=R;try{u(o)}catch(q){or(q)}o.currentTarget=null,u=_}else for(f=0;f<s.length;f++){if(y=s[f],_=y.instance,R=y.currentTarget,y=y.listener,_!==u&&o.isPropagationStopped())break e;u=y,o.currentTarget=R;try{u(o)}catch(q){or(q)}o.currentTarget=null,u=_}}}}function me(e,t){var a=t[Hl];a===void 0&&(a=t[Hl]=new Set);var s=e+"__bubble";a.has(s)||(zd(t,e,2,!1),a.add(s))}function Ou(e,t,a){var s=0;t&&(s|=4),zd(a,e,s,t)}var Yr="_reactListening"+Math.random().toString(36).slice(2);function Ru(e){if(!e[Yr]){e[Yr]=!0,Cc.forEach(function(a){a!=="selectionchange"&&(Np.has(a)||Ou(a,!1,e),Ou(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yr]||(t[Yr]=!0,Ou("selectionchange",!1,t))}}function zd(e,t,a,s){switch(fh(t)){case 2:var o=lm;break;case 8:o=om;break;default:o=Vu}a=o.bind(null,t,a,e),o=void 0,!Yl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),s?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function xu(e,t,a,s,o){var u=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var f=s.tag;if(f===3||f===4){var y=s.stateNode.containerInfo;if(y===o)break;if(f===4)for(f=s.return;f!==null;){var _=f.tag;if((_===3||_===4)&&f.stateNode.containerInfo===o)return;f=f.return}for(;y!==null;){if(f=Ba(y),f===null)return;if(_=f.tag,_===5||_===6||_===26||_===27){s=u=f;continue e}y=y.parentNode}}s=s.return}Pc(function(){var R=u,q=Gl(a),z=[];e:{var x=y0.get(e);if(x!==void 0){var j=sr,Y=e;switch(e){case"keypress":if(ar(a)===0)break e;case"keydown":case"keyup":j=K2;break;case"focusin":Y="focus",j=Fl;break;case"focusout":Y="blur",j=Fl;break;case"beforeblur":case"afterblur":j=Fl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=p2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=R2;break;case f0:case p0:case m0:j=y2;break;case g0:j=C2;break;case"scroll":case"scrollend":j=h2;break;case"wheel":j=N2;break;case"copy":case"cut":case"paste":j=w2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Yc;break;case"toggle":case"beforetoggle":j=M2}var ae=(t&4)!==0,Oe=!ae&&(e==="scroll"||e==="scrollend"),K=ae?x!==null?x+"Capture":null:x;ae=[];for(var S=R,O;S!==null;){var M=S;if(O=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||O===null||K===null||(M=Li(S,K),M!=null&&ae.push(ws(S,M,O))),Oe)break;S=S.return}0<ae.length&&(x=new j(x,Y,null,a,q),z.push({event:x,listeners:ae}))}}if((t&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",x&&a!==$l&&(Y=a.relatedTarget||a.fromElement)&&(Ba(Y)||Y[La]))break e;if((j||x)&&(x=q.window===q?q:(x=q.ownerDocument)?x.defaultView||x.parentWindow:window,j?(Y=a.relatedTarget||a.toElement,j=R,Y=Y?Ba(Y):null,Y!==null&&(Oe=d(Y),ae=Y.tag,Y!==Oe||ae!==5&&ae!==27&&ae!==6)&&(Y=null)):(j=null,Y=R),j!==Y)){if(ae=Gc,M="onMouseLeave",K="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Yc,M="onPointerLeave",K="onPointerEnter",S="pointer"),Oe=j==null?x:Hi(j),O=Y==null?x:Hi(Y),x=new ae(M,S+"leave",j,a,q),x.target=Oe,x.relatedTarget=O,M=null,Ba(q)===R&&(ae=new ae(K,S+"enter",Y,a,q),ae.target=O,ae.relatedTarget=Oe,M=ae),Oe=M,j&&Y)t:{for(ae=qp,K=j,S=Y,O=0,M=K;M;M=ae(M))O++;M=0;for(var ee=S;ee;ee=ae(ee))M++;for(;0<O-M;)K=ae(K),O--;for(;0<M-O;)S=ae(S),M--;for(;O--;){if(K===S||S!==null&&K===S.alternate){ae=K;break t}K=ae(K),S=ae(S)}ae=null}else ae=null;j!==null&&Hd(z,x,j,ae,!1),Y!==null&&Oe!==null&&Hd(z,Oe,Y,ae,!0)}}e:{if(x=R?Hi(R):window,j=x.nodeName&&x.nodeName.toLowerCase(),j==="select"||j==="input"&&x.type==="file")var be=n0;else if(e0(x))if(a0)be=$2;else{be=P2;var Q=I2}else j=x.nodeName,!j||j.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?R&&Vl(R.elementType)&&(be=n0):be=V2;if(be&&(be=be(e,R))){t0(z,be,a,q);break e}Q&&Q(e,x,R),e==="focusout"&&R&&x.type==="number"&&R.memoizedProps.value!=null&&Pl(x,"number",x.value)}switch(Q=R?Hi(R):window,e){case"focusin":(e0(Q)||Q.contentEditable==="true")&&(Xa=Q,io=R,Yi=null);break;case"focusout":Yi=io=Xa=null;break;case"mousedown":so=!0;break;case"contextmenu":case"mouseup":case"dragend":so=!1,d0(z,a,q);break;case"selectionchange":if(Z2)break;case"keydown":case"keyup":d0(z,a,q)}var ce;if(eo)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Ja?Fc(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Jc&&a.locale!=="ko"&&(Ja||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ja&&(ce=Vc()):(Bn=q,Jl="value"in Bn?Bn.value:Bn.textContent,Ja=!0)),Q=Jr(R,ye),0<Q.length&&(ye=new Zc(ye,e,null,a,q),z.push({event:ye,listeners:Q}),ce?ye.data=ce:(ce=Wc(a),ce!==null&&(ye.data=ce)))),(ce=D2?z2(e,a):H2(e,a))&&(ye=Jr(R,"onBeforeInput"),0<ye.length&&(Q=new Zc("onBeforeInput","beforeinput",null,a,q),z.push({event:Q,listeners:ye}),Q.data=ce)),xp(z,e,R,a,q)}Dd(z,t)})}function ws(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Jr(e,t){for(var a=t+"Capture",s=[];e!==null;){var o=e,u=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=Li(e,a),o!=null&&s.unshift(ws(e,o,u)),o=Li(e,t),o!=null&&s.push(ws(e,o,u))),e.tag===3)return s;e=e.return}return[]}function qp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hd(e,t,a,s,o){for(var u=t._reactName,f=[];a!==null&&a!==s;){var y=a,_=y.alternate,R=y.stateNode;if(y=y.tag,_!==null&&_===s)break;y!==5&&y!==26&&y!==27||R===null||(_=R,o?(R=Li(a,u),R!=null&&f.unshift(ws(a,R,_))):o||(R=Li(a,u),R!=null&&f.push(ws(a,R,_)))),a=a.return}f.length!==0&&e.push({event:t,listeners:f})}var Mp=/\r\n?/g,Up=/\u0000|\uFFFD/g;function Ld(e){return(typeof e=="string"?e:""+e).replace(Mp,`
`).replace(Up,"")}function Bd(e,t){return t=Ld(t),Ld(e)===t}function ke(e,t,a,s,o,u){switch(a){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||Ga(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&Ga(e,""+s);break;case"className":Ws(e,"class",s);break;case"tabIndex":Ws(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ws(e,a,s);break;case"style":Bc(e,s,u);break;case"data":if(t!=="object"){Ws(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=tr(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&ke(e,t,"name",o.name,o,null),ke(e,t,"formEncType",o.formEncType,o,null),ke(e,t,"formMethod",o.formMethod,o,null),ke(e,t,"formTarget",o.formTarget,o,null)):(ke(e,t,"encType",o.encType,o,null),ke(e,t,"method",o.method,o,null),ke(e,t,"target",o.target,o,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=tr(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=fn);break;case"onScroll":s!=null&&me("scroll",e);break;case"onScrollEnd":s!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(a=s.__html,a!=null){if(o.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=tr(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":me("beforetoggle",e),me("toggle",e),Fs(e,"popover",s);break;case"xlinkActuate":hn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":hn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":hn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":hn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":hn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":hn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":hn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":hn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":hn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Fs(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=c2.get(a)||a,Fs(e,a,s))}}function Cu(e,t,a,s,o,u){switch(a){case"style":Bc(e,s,u);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(a=s.__html,a!=null){if(o.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Ga(e,s):(typeof s=="number"||typeof s=="bigint")&&Ga(e,""+s);break;case"onScroll":s!=null&&me("scroll",e);break;case"onScrollEnd":s!=null&&me("scrollend",e);break;case"onClick":s!=null&&(e.onclick=fn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),t=a.slice(2,o?a.length-7:void 0),u=e[mt]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,o),typeof s=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,s,o);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Fs(e,a,s)}}}function ot(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var s=!1,o=!1,u;for(u in a)if(a.hasOwnProperty(u)){var f=a[u];if(f!=null)switch(u){case"src":s=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:ke(e,t,u,f,a,null)}}o&&ke(e,t,"srcSet",a.srcSet,a,null),s&&ke(e,t,"src",a.src,a,null);return;case"input":me("invalid",e);var y=u=f=o=null,_=null,R=null;for(s in a)if(a.hasOwnProperty(s)){var q=a[s];if(q!=null)switch(s){case"name":o=q;break;case"type":f=q;break;case"checked":_=q;break;case"defaultChecked":R=q;break;case"value":u=q;break;case"defaultValue":y=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(l(137,t));break;default:ke(e,t,s,q,a,null)}}Dc(e,u,y,_,R,f,o,!1);return;case"select":me("invalid",e),s=f=u=null;for(o in a)if(a.hasOwnProperty(o)&&(y=a[o],y!=null))switch(o){case"value":u=y;break;case"defaultValue":f=y;break;case"multiple":s=y;default:ke(e,t,o,y,a,null)}t=u,a=f,e.multiple=!!s,t!=null?$a(e,!!s,t,!1):a!=null&&$a(e,!!s,a,!0);return;case"textarea":me("invalid",e),u=o=s=null;for(f in a)if(a.hasOwnProperty(f)&&(y=a[f],y!=null))switch(f){case"value":s=y;break;case"defaultValue":o=y;break;case"children":u=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(l(91));break;default:ke(e,t,f,y,a,null)}Hc(e,s,o,u);return;case"option":for(_ in a)if(a.hasOwnProperty(_)&&(s=a[_],s!=null))switch(_){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ke(e,t,_,s,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(s=0;s<vs.length;s++)me(vs[s],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in a)if(a.hasOwnProperty(R)&&(s=a[R],s!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:ke(e,t,R,s,a,null)}return;default:if(Vl(t)){for(q in a)a.hasOwnProperty(q)&&(s=a[q],s!==void 0&&Cu(e,t,q,s,a,void 0));return}}for(y in a)a.hasOwnProperty(y)&&(s=a[y],s!=null&&ke(e,t,y,s,a,null))}function Dp(e,t,a,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,f=null,y=null,_=null,R=null,q=null;for(j in a){var z=a[j];if(a.hasOwnProperty(j)&&z!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":_=z;default:s.hasOwnProperty(j)||ke(e,t,j,null,s,z)}}for(var x in s){var j=s[x];if(z=a[x],s.hasOwnProperty(x)&&(j!=null||z!=null))switch(x){case"type":u=j;break;case"name":o=j;break;case"checked":R=j;break;case"defaultChecked":q=j;break;case"value":f=j;break;case"defaultValue":y=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(l(137,t));break;default:j!==z&&ke(e,t,x,j,s,z)}}Il(e,f,y,_,R,q,u,o);return;case"select":j=f=y=x=null;for(u in a)if(_=a[u],a.hasOwnProperty(u)&&_!=null)switch(u){case"value":break;case"multiple":j=_;default:s.hasOwnProperty(u)||ke(e,t,u,null,s,_)}for(o in s)if(u=s[o],_=a[o],s.hasOwnProperty(o)&&(u!=null||_!=null))switch(o){case"value":x=u;break;case"defaultValue":y=u;break;case"multiple":f=u;default:u!==_&&ke(e,t,o,u,s,_)}t=y,a=f,s=j,x!=null?$a(e,!!a,x,!1):!!s!=!!a&&(t!=null?$a(e,!!a,t,!0):$a(e,!!a,a?[]:"",!1));return;case"textarea":j=x=null;for(y in a)if(o=a[y],a.hasOwnProperty(y)&&o!=null&&!s.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:ke(e,t,y,null,s,o)}for(f in s)if(o=s[f],u=a[f],s.hasOwnProperty(f)&&(o!=null||u!=null))switch(f){case"value":x=o;break;case"defaultValue":j=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(l(91));break;default:o!==u&&ke(e,t,f,o,s,u)}zc(e,x,j);return;case"option":for(var Y in a)if(x=a[Y],a.hasOwnProperty(Y)&&x!=null&&!s.hasOwnProperty(Y))switch(Y){case"selected":e.selected=!1;break;default:ke(e,t,Y,null,s,x)}for(_ in s)if(x=s[_],j=a[_],s.hasOwnProperty(_)&&x!==j&&(x!=null||j!=null))switch(_){case"selected":e.selected=x&&typeof x!="function"&&typeof x!="symbol";break;default:ke(e,t,_,x,s,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)x=a[ae],a.hasOwnProperty(ae)&&x!=null&&!s.hasOwnProperty(ae)&&ke(e,t,ae,null,s,x);for(R in s)if(x=s[R],j=a[R],s.hasOwnProperty(R)&&x!==j&&(x!=null||j!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(l(137,t));break;default:ke(e,t,R,x,s,j)}return;default:if(Vl(t)){for(var Oe in a)x=a[Oe],a.hasOwnProperty(Oe)&&x!==void 0&&!s.hasOwnProperty(Oe)&&Cu(e,t,Oe,void 0,s,x);for(q in s)x=s[q],j=a[q],!s.hasOwnProperty(q)||x===j||x===void 0&&j===void 0||Cu(e,t,q,x,s,j);return}}for(var K in a)x=a[K],a.hasOwnProperty(K)&&x!=null&&!s.hasOwnProperty(K)&&ke(e,t,K,null,s,x);for(z in s)x=s[z],j=a[z],!s.hasOwnProperty(z)||x===j||x==null&&j==null||ke(e,t,z,x,s,j)}function Id(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var o=a[s],u=o.transferSize,f=o.initiatorType,y=o.duration;if(u&&y&&Id(f)){for(f=0,y=o.responseEnd,s+=1;s<a.length;s++){var _=a[s],R=_.startTime;if(R>y)break;var q=_.transferSize,z=_.initiatorType;q&&Id(z)&&(_=_.responseEnd,f+=q*(_<y?1:(y-R)/(_-R)))}if(--s,t+=8*(u+f)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ju=null,Nu=null;function Xr(e){return e.nodeType===9?e:e.ownerDocument}function Pd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function qu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mu=null;function Hp(){var e=window.event;return e&&e.type==="popstate"?e===Mu?!1:(Mu=e,!0):(Mu=null,!1)}var $d=typeof setTimeout=="function"?setTimeout:void 0,Lp=typeof clearTimeout=="function"?clearTimeout:void 0,Gd=typeof Promise=="function"?Promise:void 0,Bp=typeof queueMicrotask=="function"?queueMicrotask:typeof Gd<"u"?function(e){return Gd.resolve(null).then(e).catch(Ip)}:$d;function Ip(e){setTimeout(function(){throw e})}function ia(e){return e==="head"}function Zd(e,t){var a=t,s=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(o),Ei(t);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")bs(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,bs(a);for(var u=a.firstChild;u;){var f=u.nextSibling,y=u.nodeName;u[zi]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=f}}else a==="body"&&bs(e.ownerDocument.body);a=o}while(a);Ei(t)}function Yd(e,t){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Uu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Uu(a),Ll(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Pp(e,t,a,s){for(;e.nodeType===1;){var o=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[zi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=It(e.nextSibling),e===null)break}return null}function Vp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=It(e.nextSibling),e===null))return null;return e}function Jd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=It(e.nextSibling),e===null))return null;return e}function Du(e){return e.data==="$?"||e.data==="$~"}function zu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $p(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var s=function(){t(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hu=null;function Xd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return It(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Qd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Fd(e,t,a){switch(t=Xr(a),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function bs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ll(e)}var Pt=new Map,Wd=new Set;function Qr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Rn=$.d;$.d={f:Gp,r:Zp,D:Yp,C:Jp,L:Xp,m:Qp,X:Wp,S:Fp,M:em};function Gp(){var e=Rn.f(),t=Ir();return e||t}function Zp(e){var t=Ia(e);t!==null&&t.tag===5&&t.type==="form"?g1(t):Rn.r(e)}var bi=typeof document>"u"?null:document;function eh(e,t,a){var s=bi;if(s&&typeof t=="string"&&t){var o=Mt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),Wd.has(o)||(Wd.add(o),e={rel:e,crossOrigin:a,href:t},s.querySelector(o)===null&&(t=s.createElement("link"),ot(t,"link",e),et(t),s.head.appendChild(t)))}}function Yp(e){Rn.D(e),eh("dns-prefetch",e,null)}function Jp(e,t){Rn.C(e,t),eh("preconnect",e,t)}function Xp(e,t,a){Rn.L(e,t,a);var s=bi;if(s&&e&&t){var o='link[rel="preload"][as="'+Mt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+Mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+Mt(a.imageSizes)+'"]')):o+='[href="'+Mt(e)+'"]';var u=o;switch(t){case"style":u=_i(e);break;case"script":u=Si(e)}Pt.has(u)||(e=v({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Pt.set(u,e),s.querySelector(o)!==null||t==="style"&&s.querySelector(_s(u))||t==="script"&&s.querySelector(Ss(u))||(t=s.createElement("link"),ot(t,"link",e),et(t),s.head.appendChild(t)))}}function Qp(e,t){Rn.m(e,t);var a=bi;if(a&&e){var s=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Mt(s)+'"][href="'+Mt(e)+'"]',u=o;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Si(e)}if(!Pt.has(u)&&(e=v({rel:"modulepreload",href:e},t),Pt.set(u,e),a.querySelector(o)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ss(u)))return}s=a.createElement("link"),ot(s,"link",e),et(s),a.head.appendChild(s)}}}function Fp(e,t,a){Rn.S(e,t,a);var s=bi;if(s&&e){var o=Pa(s).hoistableStyles,u=_i(e);t=t||"default";var f=o.get(u);if(!f){var y={loading:0,preload:null};if(f=s.querySelector(_s(u)))y.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Pt.get(u))&&Lu(e,a);var _=f=s.createElement("link");et(_),ot(_,"link",e),_._p=new Promise(function(R,q){_.onload=R,_.onerror=q}),_.addEventListener("load",function(){y.loading|=1}),_.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Fr(f,t,s)}f={type:"stylesheet",instance:f,count:1,state:y},o.set(u,f)}}}function Wp(e,t){Rn.X(e,t);var a=bi;if(a&&e){var s=Pa(a).hoistableScripts,o=Si(e),u=s.get(o);u||(u=a.querySelector(Ss(o)),u||(e=v({src:e,async:!0},t),(t=Pt.get(o))&&Bu(e,t),u=a.createElement("script"),et(u),ot(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(o,u))}}function em(e,t){Rn.M(e,t);var a=bi;if(a&&e){var s=Pa(a).hoistableScripts,o=Si(e),u=s.get(o);u||(u=a.querySelector(Ss(o)),u||(e=v({src:e,async:!0,type:"module"},t),(t=Pt.get(o))&&Bu(e,t),u=a.createElement("script"),et(u),ot(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(o,u))}}function th(e,t,a,s){var o=(o=he.current)?Qr(o):null;if(!o)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=_i(a.href),a=Pa(o).hoistableStyles,s=a.get(t),s||(s={type:"style",instance:null,count:0,state:null},a.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_i(a.href);var u=Pa(o).hoistableStyles,f=u.get(e);if(f||(o=o.ownerDocument||o,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,f),(u=o.querySelector(_s(e)))&&!u._p&&(f.instance=u,f.state.loading=5),Pt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Pt.set(e,a),u||tm(o,e,a,f.state))),t&&s===null)throw Error(l(528,""));return f}if(t&&s!==null)throw Error(l(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Si(a),a=Pa(o).hoistableScripts,s=a.get(t),s||(s={type:"script",instance:null,count:0,state:null},a.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function _i(e){return'href="'+Mt(e)+'"'}function _s(e){return'link[rel="stylesheet"]['+e+"]"}function nh(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function tm(e,t,a,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),ot(t,"link",a),et(t),e.head.appendChild(t))}function Si(e){return'[src="'+Mt(e)+'"]'}function Ss(e){return"script[async]"+e}function ah(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+Mt(a.href)+'"]');if(s)return t.instance=s,et(s),s;var o=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),et(s),ot(s,"style",o),Fr(s,a.precedence,e),t.instance=s;case"stylesheet":o=_i(a.href);var u=e.querySelector(_s(o));if(u)return t.state.loading|=4,t.instance=u,et(u),u;s=nh(a),(o=Pt.get(o))&&Lu(s,o),u=(e.ownerDocument||e).createElement("link"),et(u);var f=u;return f._p=new Promise(function(y,_){f.onload=y,f.onerror=_}),ot(u,"link",s),t.state.loading|=4,Fr(u,a.precedence,e),t.instance=u;case"script":return u=Si(a.src),(o=e.querySelector(Ss(u)))?(t.instance=o,et(o),o):(s=a,(o=Pt.get(u))&&(s=v({},a),Bu(s,o)),e=e.ownerDocument||e,o=e.createElement("script"),et(o),ot(o,"link",s),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,Fr(s,a.precedence,e));return t.instance}function Fr(e,t,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=s.length?s[s.length-1]:null,u=o,f=0;f<s.length;f++){var y=s[f];if(y.dataset.precedence===t)u=y;else if(u!==o)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Lu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wr=null;function ih(e,t,a){if(Wr===null){var s=new Map,o=Wr=new Map;o.set(a,s)}else o=Wr,s=o.get(a),s||(s=new Map,o.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),o=0;o<a.length;o++){var u=a[o];if(!(u[zi]||u[it]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var f=u.getAttribute(t)||"";f=e+f;var y=s.get(f);y?y.push(u):s.set(f,[u])}}return s}function sh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function nm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function rh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function am(e,t,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var o=_i(s.href),u=t.querySelector(_s(o));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=el.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,et(u);return}u=t.ownerDocument||t,s=nh(s),(o=Pt.get(o))&&Lu(s,o),u=u.createElement("link"),et(u);var f=u;f._p=new Promise(function(y,_){f.onload=y,f.onerror=_}),ot(u,"link",s),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=el.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Iu=0;function im(e,t){return e.stylesheets&&e.count===0&&nl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&nl(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Iu===0&&(Iu=62500*zp());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&nl(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Iu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(o)}}:null}function el(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var tl=null;function nl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tl=new Map,t.forEach(sm,e),tl=null,el.call(e))}function sm(e,t){if(!(t.state.loading&4)){var a=tl.get(e);if(a)var s=a.get(null);else{a=new Map,tl.set(e,a);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var f=o[u];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),s=f)}s&&a.set(null,s)}o=t.instance,f=o.getAttribute("data-precedence"),u=a.get(f)||s,u===s&&a.set(null,o),a.set(f,o),this.count++,s=el.bind(this),o.addEventListener("load",s),o.addEventListener("error",s),u?u.parentNode.insertBefore(o,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Es={$$typeof:L,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function rm(e,t,a,s,o,u,f,y,_){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ul(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.hiddenUpdates=Ul(null),this.identifierPrefix=s,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=_,this.incompleteTransitions=new Map}function lh(e,t,a,s,o,u,f,y,_,R,q,z){return e=new rm(e,t,a,f,_,R,q,z,y),t=1,u===!0&&(t|=24),u=kt(3,null,null,t),e.current=u,u.stateNode=e,t=_o(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:s,isDehydrated:a,cache:t},To(u),e}function oh(e){return e?(e=Wa,e):Wa}function uh(e,t,a,s,o,u){o=oh(o),s.context===null?s.context=o:s.pendingContext=o,s=Zn(t),s.payload={element:a},u=u===void 0?null:u,u!==null&&(s.callback=u),a=Yn(e,s,t),a!==null&&(_t(a,e,t),ts(a,e,t))}function ch(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Pu(e,t){ch(e,t),(e=e.alternate)&&ch(e,t)}function dh(e){if(e.tag===13||e.tag===31){var t=ba(e,67108864);t!==null&&_t(t,e,67108864),Pu(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jt();t=Dl(t);var a=ba(e,t);a!==null&&_t(a,e,t),Pu(e,t)}}var al=!0;function lm(e,t,a,s){var o=N.T;N.T=null;var u=$.p;try{$.p=2,Vu(e,t,a,s)}finally{$.p=u,N.T=o}}function om(e,t,a,s){var o=N.T;N.T=null;var u=$.p;try{$.p=8,Vu(e,t,a,s)}finally{$.p=u,N.T=o}}function Vu(e,t,a,s){if(al){var o=$u(s);if(o===null)xu(e,t,s,il,a),ph(e,s);else if(cm(o,e,t,a,s))s.stopPropagation();else if(ph(e,s),t&4&&-1<um.indexOf(e)){for(;o!==null;){var u=Ia(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var f=ma(u.pendingLanes);if(f!==0){var y=u;for(y.pendingLanes|=2,y.entangledLanes|=2;f;){var _=1<<31-Tt(f);y.entanglements[1]|=_,f&=~_}nn(u),(Ee&6)===0&&(Lr=je()+500,ys(0))}}break;case 31:case 13:y=ba(u,2),y!==null&&_t(y,u,2),Ir(),Pu(u,2)}if(u=$u(s),u===null&&xu(e,t,s,il,a),u===o)break;o=u}o!==null&&s.stopPropagation()}else xu(e,t,s,null,a)}}function $u(e){return e=Gl(e),Gu(e)}var il=null;function Gu(e){if(il=null,e=Ba(e),e!==null){var t=d(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=m(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return il=e,null}function fh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pa()){case dn:return 2;case Sc:return 8;case Zs:case Jf:return 32;case Ec:return 268435456;default:return 32}default:return 32}}var Zu=!1,sa=null,ra=null,la=null,As=new Map,Ts=new Map,oa=[],um="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ph(e,t){switch(e){case"focusin":case"focusout":sa=null;break;case"dragenter":case"dragleave":ra=null;break;case"mouseover":case"mouseout":la=null;break;case"pointerover":case"pointerout":As.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ts.delete(t.pointerId)}}function Ks(e,t,a,s,o,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:s,nativeEvent:u,targetContainers:[o]},t!==null&&(t=Ia(t),t!==null&&dh(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function cm(e,t,a,s,o){switch(t){case"focusin":return sa=Ks(sa,e,t,a,s,o),!0;case"dragenter":return ra=Ks(ra,e,t,a,s,o),!0;case"mouseover":return la=Ks(la,e,t,a,s,o),!0;case"pointerover":var u=o.pointerId;return As.set(u,Ks(As.get(u)||null,e,t,a,s,o)),!0;case"gotpointercapture":return u=o.pointerId,Ts.set(u,Ks(Ts.get(u)||null,e,t,a,s,o)),!0}return!1}function mh(e){var t=Ba(e.target);if(t!==null){var a=d(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,Rc(e.priority,function(){hh(a)});return}}else if(t===31){if(t=m(a),t!==null){e.blockedOn=t,Rc(e.priority,function(){hh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=$u(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);$l=s,a.target.dispatchEvent(s),$l=null}else return t=Ia(a),t!==null&&dh(t),e.blockedOn=a,!1;t.shift()}return!0}function gh(e,t,a){sl(e)&&a.delete(t)}function dm(){Zu=!1,sa!==null&&sl(sa)&&(sa=null),ra!==null&&sl(ra)&&(ra=null),la!==null&&sl(la)&&(la=null),As.forEach(gh),Ts.forEach(gh)}function rl(e,t){e.blockedOn===t&&(e.blockedOn=null,Zu||(Zu=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,dm)))}var ll=null;function yh(e){ll!==e&&(ll=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ll===e&&(ll=null);for(var t=0;t<e.length;t+=3){var a=e[t],s=e[t+1],o=e[t+2];if(typeof s!="function"){if(Gu(s||a)===null)continue;break}var u=Ia(a);u!==null&&(e.splice(t,3),t-=3,$o(u,{pending:!0,data:o,method:a.method,action:s},s,o))}}))}function Ei(e){function t(_){return rl(_,e)}sa!==null&&rl(sa,e),ra!==null&&rl(ra,e),la!==null&&rl(la,e),As.forEach(t),Ts.forEach(t);for(var a=0;a<oa.length;a++){var s=oa[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<oa.length&&(a=oa[0],a.blockedOn===null);)mh(a),a.blockedOn===null&&oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var o=a[s],u=a[s+1],f=o[mt]||null;if(typeof u=="function")f||yh(a);else if(f){var y=null;if(u&&u.hasAttribute("formAction")){if(o=u,f=u[mt]||null)y=f.formAction;else if(Gu(o)!==null)continue}else y=f.action;typeof y=="function"?a[s+1]=y:(a.splice(s,3),s-=3),yh(a)}}}function vh(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(f){return o=f})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Yu(e){this._internalRoot=e}ol.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var a=t.current,s=jt();uh(a,s,e,t,null,null)},ol.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;uh(e.current,2,null,e,null,null),Ir(),t[La]=null}};function ol(e){this._internalRoot=e}ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=Oc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<oa.length&&t!==0&&t<oa[a].priority;a++);oa.splice(a,0,e),a===0&&mh(e)}};var wh=n.version;if(wh!=="19.2.0")throw Error(l(527,wh,"19.2.0"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=g(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var hm={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{Mi=ul.inject(hm),At=ul}catch{}}return Os.createRoot=function(e,t){if(!c(e))throw Error(l(299));var a=!1,s="",o=K1,u=k1,f=O1;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=lh(e,1,!1,null,null,a,s,null,o,u,f,vh),e[La]=t.current,Ru(e),new Yu(t)},Os.hydrateRoot=function(e,t,a){if(!c(e))throw Error(l(299));var s=!1,o="",u=K1,f=k1,y=O1,_=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(y=a.onRecoverableError),a.formState!==void 0&&(_=a.formState)),t=lh(e,1,!0,t,a??null,s,o,_,u,f,y,vh),t.context=oh(null),a=t.current,s=jt(),s=Dl(s),o=Zn(s),o.callback=null,Yn(a,o,s),a=s,t.current.lanes=a,Di(t,a),nn(t),e[La]=t.current,Ru(e),new ol(t)},Os.version="19.2.0",Os}var Rh;function Am(){if(Rh)return Qu.exports;Rh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),Qu.exports=Em(),Qu.exports}var Tm=Am();const Km=new Map([["bold",b.createElement(b.Fragment,null,b.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"}))],["duotone",b.createElement(b.Fragment,null,b.createElement("path",{d:"M112,56V200L40,128Z",opacity:"0.2"}),b.createElement("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"}))],["fill",b.createElement(b.Fragment,null,b.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))],["light",b.createElement(b.Fragment,null,b.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"}))],["regular",b.createElement(b.Fragment,null,b.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"}))],["thin",b.createElement(b.Fragment,null,b.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"}))]]),km=new Map([["bold",b.createElement(b.Fragment,null,b.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",b.createElement(b.Fragment,null,b.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),b.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",b.createElement(b.Fragment,null,b.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",b.createElement(b.Fragment,null,b.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",b.createElement(b.Fragment,null,b.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",b.createElement(b.Fragment,null,b.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),Om=new Map([["bold",b.createElement(b.Fragment,null,b.createElement("path",{d:"M232,44H160a43.86,43.86,0,0,0-32,13.85A43.86,43.86,0,0,0,96,44H24A12,12,0,0,0,12,56V200a12,12,0,0,0,12,12H96a20,20,0,0,1,20,20,12,12,0,0,0,24,0,20,20,0,0,1,20-20h72a12,12,0,0,0,12-12V56A12,12,0,0,0,232,44ZM96,188H36V68H96a20,20,0,0,1,20,20V192.81A43.79,43.79,0,0,0,96,188Zm124,0H160a43.71,43.71,0,0,0-20,4.83V88a20,20,0,0,1,20-20h60Z"}))],["duotone",b.createElement(b.Fragment,null,b.createElement("path",{d:"M232,56V200H160a32,32,0,0,0-32,32,32,32,0,0,0-32-32H24V56H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32Z",opacity:"0.2"}),b.createElement("path",{d:"M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"}))],["fill",b.createElement(b.Fragment,null,b.createElement("path",{d:"M240,56V200a8,8,0,0,1-8,8H160a24,24,0,0,0-24,23.94,7.9,7.9,0,0,1-5.12,7.55A8,8,0,0,1,120,232a24,24,0,0,0-24-24H24a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H88a32,32,0,0,1,32,32v87.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V80a32,32,0,0,1,32-32h64A8,8,0,0,1,240,56Z"}))],["light",b.createElement(b.Fragment,null,b.createElement("path",{d:"M232,50H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,50H24a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h72a6,6,0,0,0,6-6V56A6,6,0,0,0,232,50ZM96,194H30V62H96a26,26,0,0,1,26,26V204.31A37.86,37.86,0,0,0,96,194Zm130,0H160a37.87,37.87,0,0,0-26,10.32V88a26,26,0,0,1,26-26h66Z"}))],["regular",b.createElement(b.Fragment,null,b.createElement("path",{d:"M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"}))],["thin",b.createElement(b.Fragment,null,b.createElement("path",{d:"M232,52H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,52H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V56A4,4,0,0,0,232,52ZM96,196H28V60H96a28,28,0,0,1,28,28V209.4A35.93,35.93,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V88a28,28,0,0,1,28-28h68Z"}))]]),Rm=new Map([["bold",b.createElement(b.Fragment,null,b.createElement("path",{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"}))],["duotone",b.createElement(b.Fragment,null,b.createElement("path",{d:"M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",opacity:"0.2"}),b.createElement("path",{d:"M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["fill",b.createElement(b.Fragment,null,b.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["light",b.createElement(b.Fragment,null,b.createElement("path",{d:"M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"}))],["regular",b.createElement(b.Fragment,null,b.createElement("path",{d:"M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"}))],["thin",b.createElement(b.Fragment,null,b.createElement("path",{d:"M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"}))]]),xm=new Map([["bold",b.createElement(b.Fragment,null,b.createElement("path",{d:"M196.49,151.51a12,12,0,0,1-17,17L168,157v51a12,12,0,0,1-24,0V157l-11.51,11.52a12,12,0,1,1-17-17l32-32a12,12,0,0,1,17,0ZM160,36A92.08,92.08,0,0,0,79,84.37,68,68,0,1,0,72,220h28a12,12,0,0,0,0-24H72a44,44,0,0,1-1.81-87.95A91.7,91.7,0,0,0,68,128a12,12,0,0,0,24,0,68,68,0,1,1,132.6,21.29,12,12,0,1,0,22.8,7.51A92.06,92.06,0,0,0,160,36Z"}))],["duotone",b.createElement(b.Fragment,null,b.createElement("path",{d:"M240,128a80,80,0,0,1-80,80H72A56,56,0,1,1,85.92,97.74l0,.1A80,80,0,0,1,240,128Z",opacity:"0.2"}),b.createElement("path",{d:"M178.34,165.66,160,147.31V208a8,8,0,0,1-16,0V147.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32ZM160,40A88.08,88.08,0,0,0,81.29,88.68,64,64,0,1,0,72,216h40a8,8,0,0,0,0-16H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.12A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,100.8,66,8,8,0,0,0,3.2,15.34,7.9,7.9,0,0,0,3.2-.68A88,88,0,0,0,160,40Z"}))],["fill",b.createElement(b.Fragment,null,b.createElement("path",{d:"M247.93,124.52C246.11,77.54,207.07,40,160.06,40A88.1,88.1,0,0,0,81.29,88.67h0A87.48,87.48,0,0,0,72,127.73,8.18,8.18,0,0,1,64.57,136,8,8,0,0,1,56,128a103.66,103.66,0,0,1,5.34-32.92,4,4,0,0,0-4.75-5.18A64.09,64.09,0,0,0,8,152c0,35.19,29.75,64,65,64H160A88.09,88.09,0,0,0,247.93,124.52Zm-50.27,9.14a8,8,0,0,1-11.32,0L168,115.31V176a8,8,0,0,1-16,0V115.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,197.66,133.66Z"}))],["light",b.createElement(b.Fragment,null,b.createElement("path",{d:"M188.24,164.24a6,6,0,0,1-8.48,0L158,142.49V208a6,6,0,0,1-12,0V142.49l-21.76,21.75a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,0l32,32A6,6,0,0,1,188.24,164.24ZM160,42A86.1,86.1,0,0,0,82.43,90.88,62,62,0,1,0,72,214h40a6,6,0,0,0,0-12H72a50,50,0,0,1,0-100,50.68,50.68,0,0,1,5.91.36A85.54,85.54,0,0,0,74,128a6,6,0,0,0,12,0,74,74,0,1,1,103.6,67.85,6,6,0,0,0,4.8,11A86,86,0,0,0,160,42Z"}))],["regular",b.createElement(b.Fragment,null,b.createElement("path",{d:"M178.34,165.66,160,147.31V208a8,8,0,0,1-16,0V147.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32ZM160,40A88.08,88.08,0,0,0,81.29,88.68,64,64,0,1,0,72,216h40a8,8,0,0,0,0-16H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.12A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,100.8,66,8,8,0,0,0,3.2,15.34,7.9,7.9,0,0,0,3.2-.68A88,88,0,0,0,160,40Z"}))],["thin",b.createElement(b.Fragment,null,b.createElement("path",{d:"M186.83,162.83a4,4,0,0,1-5.66,0L156,137.66V208a4,4,0,0,1-8,0V137.66l-25.17,25.17a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0l32,32A4,4,0,0,1,186.83,162.83ZM160,44A84.09,84.09,0,0,0,83.61,93.13,60,60,0,1,0,72,212h40a4,4,0,0,0,0-8H72a52,52,0,1,1,8.57-103.27A83.45,83.45,0,0,0,76,128a4,4,0,0,0,8,0,76,76,0,1,1,106.4,69.68,4,4,0,0,0,1.6,7.66,3.92,3.92,0,0,0,1.6-.33A84,84,0,0,0,160,44Z"}))]]),Cm=new Map([["bold",b.createElement(b.Fragment,null,b.createElement("path",{d:"M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0Zm-108.49,8.49a12,12,0,0,0,17,0l40-40a12,12,0,0,0-17-17L140,115V32a12,12,0,0,0-24,0v83L96.49,95.51a12,12,0,0,0-17,17Z"}))],["duotone",b.createElement(b.Fragment,null,b.createElement("path",{d:"M216,48V208H40V48A16,16,0,0,1,56,32H200A16,16,0,0,1,216,48Z",opacity:"0.2"}),b.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"}))],["fill",b.createElement(b.Fragment,null,b.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,168,96H136V32a8,8,0,0,0-16,0V96H88a8,8,0,0,0-5.66,13.66Z"}))],["light",b.createElement(b.Fragment,null,b.createElement("path",{d:"M222,144v64a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V144a6,6,0,0,1,12,0v58H210V144a6,6,0,0,1,12,0Zm-98.24,4.24a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0-8.48-8.48L134,129.51V32a6,6,0,0,0-12,0v97.51L92.24,99.76a6,6,0,0,0-8.48,8.48Z"}))],["regular",b.createElement(b.Fragment,null,b.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"}))],["thin",b.createElement(b.Fragment,null,b.createElement("path",{d:"M220,144v64a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V144a4,4,0,0,1,8,0v60H212V144a4,4,0,0,1,8,0Zm-94.83,2.83a4,4,0,0,0,5.66,0l40-40a4,4,0,1,0-5.66-5.66L132,134.34V32a4,4,0,0,0-8,0V134.34L90.83,101.17a4,4,0,0,0-5.66,5.66Z"}))]]),jm=new Map([["bold",b.createElement(b.Fragment,null,b.createElement("path",{d:"M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Z"}))],["duotone",b.createElement(b.Fragment,null,b.createElement("path",{d:"M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",opacity:"0.2"}),b.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"}))],["fill",b.createElement(b.Fragment,null,b.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96Z"}))],["light",b.createElement(b.Fragment,null,b.createElement("path",{d:"M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z"}))],["regular",b.createElement(b.Fragment,null,b.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"}))],["thin",b.createElement(b.Fragment,null,b.createElement("path",{d:"M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z"}))]]),Nm=new Map([["bold",b.createElement(b.Fragment,null,b.createElement("path",{d:"M156,112a12,12,0,0,1-12,12H124v20a12,12,0,0,1-24,0V124H80a12,12,0,0,1,0-24h20V80a12,12,0,0,1,24,0v20h20A12,12,0,0,1,156,112Zm76.49,120.49a12,12,0,0,1-17,0L168,185a92.12,92.12,0,1,1,17-17l47.54,47.53A12,12,0,0,1,232.49,232.49ZM112,180a68,68,0,1,0-68-68A68.08,68.08,0,0,0,112,180Z"}))],["duotone",b.createElement(b.Fragment,null,b.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),b.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Zm112,0a8,8,0,0,1-8,8H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24A8,8,0,0,1,152,112Z"}))],["fill",b.createElement(b.Fragment,null,b.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM144,120H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16Z"}))],["light",b.createElement(b.Fragment,null,b.createElement("path",{d:"M150,112a6,6,0,0,1-6,6H118v26a6,6,0,0,1-12,0V118H80a6,6,0,0,1,0-12h26V80a6,6,0,0,1,12,0v26h26A6,6,0,0,1,150,112Zm78.24,116.24a6,6,0,0,1-8.48,0l-51.38-51.38a86.15,86.15,0,1,1,8.48-8.48l51.38,51.38A6,6,0,0,1,228.24,228.24ZM112,186a74,74,0,1,0-74-74A74.09,74.09,0,0,0,112,186Z"}))],["regular",b.createElement(b.Fragment,null,b.createElement("path",{d:"M152,112a8,8,0,0,1-8,8H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24A8,8,0,0,1,152,112Zm77.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88.11,88.11,0,1,1,11.31-11.31l50.07,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["thin",b.createElement(b.Fragment,null,b.createElement("path",{d:"M148,112a4,4,0,0,1-4,4H116v28a4,4,0,0,1-8,0V116H80a4,4,0,0,1,0-8h28V80a4,4,0,0,1,8,0v28h28A4,4,0,0,1,148,112Zm78.83,114.83a4,4,0,0,1-5.66,0l-52.7-52.7a84.1,84.1,0,1,1,5.66-5.66l52.7,52.7A4,4,0,0,1,226.83,226.83ZM112,188a76,76,0,1,0-76-76A76.08,76.08,0,0,0,112,188Z"}))]]),qm=new Map([["bold",b.createElement(b.Fragment,null,b.createElement("path",{d:"M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0ZM96.49,80.49,116,61v83a12,12,0,0,0,24,0V61l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z"}))],["duotone",b.createElement(b.Fragment,null,b.createElement("path",{d:"M216,48V208H40V48A16,16,0,0,1,56,32H200A16,16,0,0,1,216,48Z",opacity:"0.2"}),b.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM93.66,77.66,120,51.31V144a8,8,0,0,0,16,0V51.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,77.66Z"}))],["fill",b.createElement(b.Fragment,null,b.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM88,80h32v64a8,8,0,0,0,16,0V80h32a8,8,0,0,0,5.66-13.66l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,88,80Z"}))],["light",b.createElement(b.Fragment,null,b.createElement("path",{d:"M222,144v64a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V144a6,6,0,0,1,12,0v58H210V144a6,6,0,0,1,12,0ZM92.24,76.24,122,46.49V144a6,6,0,0,0,12,0V46.49l29.76,29.75a6,6,0,0,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,0,0,8.48,8.48Z"}))],["regular",b.createElement(b.Fragment,null,b.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM93.66,77.66,120,51.31V144a8,8,0,0,0,16,0V51.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,77.66Z"}))],["thin",b.createElement(b.Fragment,null,b.createElement("path",{d:"M220,144v64a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V144a4,4,0,0,1,8,0v60H212V144a4,4,0,0,1,8,0ZM90.83,74.83,124,41.66V144a4,4,0,0,0,8,0V41.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z"}))]]),Mm=new Map([["bold",b.createElement(b.Fragment,null,b.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",b.createElement(b.Fragment,null,b.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),b.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",b.createElement(b.Fragment,null,b.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",b.createElement(b.Fragment,null,b.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",b.createElement(b.Fragment,null,b.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",b.createElement(b.Fragment,null,b.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),Um=b.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Ft=b.forwardRef((i,n)=>{const{alt:r,color:l,size:c,weight:d,mirrored:h,children:m,weights:p,...g}=i,{color:w="currentColor",size:v,weight:A="regular",mirrored:k=!1,...C}=b.useContext(Um);return b.createElement("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:c??v,height:c??v,fill:l??w,viewBox:"0 0 256 256",transform:h||k?"scale(-1, 1)":void 0,...C,...g},!!r&&b.createElement("title",null,r),m,p.get(d??A))});Ft.displayName="IconBase";const mf=b.forwardRef((i,n)=>b.createElement(Ft,{ref:n,...i,weights:Km}));mf.displayName="ArrowLeftIcon";const Dm=mf,gf=b.forwardRef((i,n)=>b.createElement(Ft,{ref:n,...i,weights:km}));gf.displayName="ArrowRightIcon";const xn=gf,yf=b.forwardRef((i,n)=>b.createElement(Ft,{ref:n,...i,weights:Om}));yf.displayName="BookOpenIcon";const xh=yf,vf=b.forwardRef((i,n)=>b.createElement(Ft,{ref:n,...i,weights:Rm}));vf.displayName="CheckIcon";const cl=vf,wf=b.forwardRef((i,n)=>b.createElement(Ft,{ref:n,...i,weights:xm}));wf.displayName="CloudArrowUpIcon";const zm=wf,bf=b.forwardRef((i,n)=>b.createElement(Ft,{ref:n,...i,weights:Cm}));bf.displayName="DownloadSimpleIcon";const Hm=bf,_f=b.forwardRef((i,n)=>b.createElement(Ft,{ref:n,...i,weights:jm}));_f.displayName="LockSimpleIcon";const Ch=_f,Sf=b.forwardRef((i,n)=>b.createElement(Ft,{ref:n,...i,weights:Nm}));Sf.displayName="MagnifyingGlassPlusIcon";const Lm=Sf,Ef=b.forwardRef((i,n)=>b.createElement(Ft,{ref:n,...i,weights:qm}));Ef.displayName="UploadSimpleIcon";const Bm=Ef,Af=b.forwardRef((i,n)=>b.createElement(Ft,{ref:n,...i,weights:Mm}));Af.displayName="XIcon";const Im=Af,Xe=[{id:"14A",group:"趋势",title:"趋势的基本特征",range:"00:18–03:08",notes:["上涨趋势的重要特征是低点不断抬高；下降趋势的重要特征是高点不断降低。","趋势主要朝一个方向移动，中间可以有横盘和回调。","所有趋势都在某种通道内运行，通道不一定明显。"],questions:[{prompt:"上涨趋势最重要的特征是什么？",options:["不断抬高的低点","每根K线都是阳线","价格从不回调"],answer:0,explanation:"本课先强调上涨趋势中低点不断抬高，而不是要求每根K线都上涨。",time:"00:18–00:25",id:"14A-1",quote:`00:15 这个词时到底是什么意思
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
01:16 学会识别它是很重要的这是一根阳线`},{prompt:"本课通常如何称呼图中较小、较弱的次要方向移动？",options:["每一段都是主要趋势","波段","只能叫突破"],answer:1,explanation:"本课用“波段”描述相对主要趋势较小、较弱的移动。",time:"01:40–02:29",id:"14A-5",quote:`01:40 当我使用趋势这个词时 我指的是主要趋势
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
20:58 附近收盘`}],sourceFile:"BTC PAF 18F Trading Ranges_中文 (源语言).srt"},{id:"19A",group:"支撑与阻力",title:"支撑阻力、市场背景与目标",range:"00:00–32:16",revision:"support-19a-v1",notes:["支撑与阻力是可能反转、也可能突破的区域；先判断强趋势还是交易区间，再理解价格到达这些位置后的反应。","结合前高前低、趋势线与通道、测量目标、突破跟随和反转结构判断；目标汇合值得关注，但止盈位置不等于强反转已确认。","按所交易的时间周期判断信号、止损与目标；先看价格结构，不用新闻叙事替代图表，也不把课程概率或精确案例当成每次必然。"],knowledgePoints:[{id:"K01",title:"支撑的含义",summary:"支撑是当前价格下方、买盘可能强于卖盘的价格区域；过去的买入和反弹可帮助识别，但不保证下一次仍有效。",time:"00:46–01:18",pdfPages:[1641],questionIds:["19A-K01-1"]},{id:"K02",title:"阻力的含义",summary:"阻力区域附近反复出现卖盘，使价格难以继续上涨；识别这种价格行为，不要求先知道卖出的新闻理由。",time:"01:23–01:53",pdfPages:[1642],questionIds:["19A-K02-1"]},{id:"K03",title:"转折点不是必然反转点",summary:"支撑与阻力也称转折点，是市场选择突破或反转的区域，接近时要为两种结果作准备。",time:"01:57–03:33",pdfPages:[1643],questionIds:["19A-K03-1"]},{id:"K04",title:"强趋势中的惯性",summary:"在强下降趋势中，潜在支撑常无法阻止下跌；强上涨趋势也常突破阻力。课程用约80%的描述强调趋势惯性。",time:"03:37–04:20",pdfPages:[1644],questionIds:["19A-K04-1","19A-K04-2"]},{id:"K05",title:"反转尝试变成熊旗",summary:"强下降趋势中的反弹可在下降趋势线、通道上沿等阻力处失败，随后成为熊旗，下降趋势恢复。",time:"04:21–05:10",pdfPages:[1644],questionIds:["19A-K05-1"]},{id:"K06",title:"跌破前低与跟随",summary:"大阴线收在前低下方，后续仍出现阴线，是课程用来判断支撑失败和下跌延续的组合；不能只看触及前低。",time:"05:15–06:05",pdfPages:[1644],questionIds:["19A-K06-1"]},{id:"K07",title:"测量型缺口与下方目标",summary:"强向下突破后，反弹未回到原低点上方，缺口可作为测量型缺口的候选，用相应高度向下投射潜在支撑。",time:"06:07–07:18",pdfPages:[1645],questionIds:["19A-K07-1"]},{id:"K08",title:"支撑汇合、止盈与反转级别",summary:"下降后期，三推抛物线楔形、测量目标和通道下沿汇合可构成支撑；空头可考虑止盈，但窄下降通道后的反弹仍可能只是小反转和区间。",time:"07:21–08:08",pdfPages:[1645],questionIds:["19A-K08-1","19A-K08-2"]},{id:"K09",title:"区间中的惯性与剥头皮",summary:"区间背景下，课程预期多数突破尝试失败；因为上下空间受到边界限制，交易者倾向低买高卖、及时止盈。",time:"08:12–09:11",pdfPages:[1646],questionIds:["19A-K09-1"]},{id:"K10",title:"边界上的开仓与止盈",summary:"区间上沿，空头可能卖出、多头可能止盈；下沿，多头可能买入、空头可能止盈。课程还强调反转和第二次入场信号。",time:"09:17–10:03",pdfPages:[1647],questionIds:["19A-K10-1","19A-K10-2"]},{id:"K11",title:"市场寻找能促进成交的价格",summary:"市场使买卖双方更容易找到对手方，持续寻找能够促成更多交易的价格区域，而不是从一开始就知道固定的公平价格。",time:"10:06–10:38",pdfPages:[1648],questionIds:["19A-K11-1"]},{id:"K12",title:"公平价格变化与走过头",summary:"新的变量持续进入，公平价格不断变化。市场往往要走得过高或过低，才发现某一方不愿继续成交，然后向另一方向寻找对手方。",time:"10:41–11:52",pdfPages:[1648,1651],questionIds:["19A-K12-1"]},{id:"K13",title:"磁吸与重复测试",summary:"支撑阻力吸引价格前去测试：在那里是否出现更多买卖方、一方是否放弃。反复在同一区域转向，会增强交易者对该区域的关注。",time:"11:53–12:38",pdfPages:[1649],questionIds:["19A-K13-1"]},{id:"K14",title:"趋势线失效与放弃K线",summary:"大幅跌破上涨趋势线时，原位置的买盘可能已不足；多头卖出离场与空头卖出共同促成突破。需结合末端高潮和反转信号，而非只看一根大阳线。",time:"12:41–13:42",pdfPages:[1650],questionIds:["19A-K14-1"]},{id:"K15",title:"从跟随和反转识别公平区间两端",summary:"上方反复冲高回落、出现上影线，提示买家不愿继续追价；下方大阴线缺乏跟随并在原买入区反弹，提示卖家减少。",time:"13:49–14:45",pdfPages:[1651],questionIds:["19A-K15-1"]},{id:"K16",title:"新闻解释与图表依据",summary:"课程主张先从支撑阻力测试解释图中波动；新闻有时可能是催化剂，不能用事后的新闻叙事替代对价格结构的观察。",time:"14:50–17:03",pdfPages:[1653,1654],questionIds:["19A-K16-1"]},{id:"K17",title:"月线案例与长期基本面",summary:"美元兑日元月线案例先看楔形下降通道、抛售高潮及向上突破，再看低点抬高与强势跟随；课程同时承认基本面可决定持续多年的方向。",time:"17:05–19:47",pdfPages:[1655],questionIds:["19A-K17-1","19A-K17-2"]},{id:"K18",title:"支撑变阻力与下方投射",summary:"月线案例中，旧支撑被跌破后在反弹中变成阻力；这个重要价位还能参与向下测量，在目标附近结合楔形底观察反弹。",time:"19:48–20:19",pdfPages:[1655],questionIds:["19A-K18-1"]},{id:"K19",title:"止损匹配所交易的周期",summary:"按月线信号交易，要用月线背景设置止损与目标；不同周期可能同时呈现相反方向，不能随意把五分钟波动当成月线失效。",time:"20:23–21:14",pdfPages:[1657],questionIds:["19A-K19-1"]},{id:"K20",title:"日内信号频率与月线信号",summary:"同一价格可以对应月线双内包K线高一牛旗突破和五分钟入场位置；但日内交易不能等三个月才依赖一个月线信号。",time:"21:17–22:14",pdfPages:[1658],questionIds:["19A-K20-1"]},{id:"K21",title:"其他周期的影响与眼前图表",summary:"五分钟大波动可能对应其他周期的支撑阻力；课程并未因此要求不停切图，而是强调通常可从眼前图表找到足够的价格行为线索。",time:"22:19–23:25",pdfPages:[1659],questionIds:["19A-K21-1"]},{id:"K22",title:"强多头突破与次要阻力",summary:"大阳线强势收过前高并有跟随时，课程倾向价格继续向上测试更高阻力；不能把每个次要阻力都按区间边界看待。",time:"23:28–24:04",pdfPages:[1660],questionIds:["19A-K22-1"]},{id:"K23",title:"大阳线实体与多重测量目标",summary:"案例用大阳线开盘到收盘的高度向上投射目标，并结合另一段上涨与缺口的测量；多个目标接近时形成可能的止盈与阻力区域。",time:"24:05–25:10",pdfPages:[1660],questionIds:["19A-K23-1","19A-K23-2"]},{id:"K24",title:"加速突破通道上沿",summary:"案例在上涨通道上沿附近尝试加速，课程提醒这种突破可能很快失败并回到通道内；不能把末端加速直接当作新突破阶段。",time:"25:12–25:30",pdfPages:[1660],questionIds:["19A-K24-1"]},{id:"K25",title:"惊喜阴线与第二段预期",summary:"看似不错的高二、多头反转架构后突然出现大阴线，要重新评估背景；课程预期至少一小段第二段下跌，并查看后续卖盘是否跟随。",time:"25:31–26:04",pdfPages:[1661],questionIds:["19A-K25-1"]},{id:"K26",title:"向下缺口与失败的多头入场",summary:"强阴线后的缺口可能用于向下测量；表面上的高一、高二做多尝试，在更大背景下也可能是高点降低的双顶熊旗。",time:"26:04–26:35",pdfPages:[1661],questionIds:["19A-K26-1"]},{id:"K27",title:"测量目标、通道下沿与楔形底汇合",summary:"下跌到测量目标附近，又在三推下降通道下沿略微跌破后出现阳线，课程把这些信息结合为潜在支撑。",time:"26:36–27:14",pdfPages:[1661],questionIds:["19A-K27-1"]},{id:"K28",title:"区间区域与强突破外观",summary:"明显区间中，课程把上半部或上三分之一作为卖出关注区域，下半部或下三分之一作为买入关注区域，并提醒强烈的突破外观也可能失败。",time:"27:19–28:07",pdfPages:[1662],questionIds:["19A-K28-1"]},{id:"K29",title:"Emini的数据与目标精度",summary:"课程用Emini数据较统一、算法按同样价格计算解释目标常很精确，并对比不同外汇平台报价略有差异；这不是每个目标都必然精确命中的保证。",time:"28:10–28:44",pdfPages:[1664],questionIds:["19A-K29-1"]},{id:"K30",title:"通道上沿与目标汇合",summary:"强多头突破后预期第二段上涨；当第二段达到通道上沿与测量目标汇合区，课程观察多头止盈和回落。",time:"28:46–29:46",pdfPages:[1664],questionIds:["19A-K30-1"]},{id:"K31",title:"共同目标与不同交易行为",summary:"交易者可根据同样的趋势线、测量目标作出不同操作：有人挂限价单，有人等反转后进入，已有多头也可能在上沿止盈。",time:"29:50–30:37",pdfPages:[1665,1666],questionIds:["19A-K31-1"]},{id:"K32",title:"失败双顶的反向测量",summary:"跳空下跌后的双顶做空尝试失败，市场继续上涨；课程用那次下跌的高度向上投射潜在测量目标，作为另一种阻力来源。",time:"30:40–31:34",pdfPages:[1665,1666],questionIds:["19A-K32-1"]}],questions:[{prompt:"本课怎样定义支撑？",options:["当前价格下方，买盘可能强于卖盘的区域","只要过去出现一根阳线，那一根K线的所有价格都算强支撑","任何低于当前价格、以后都不会被跌破的价位"],answer:0,explanation:"支撑描述的是某一区域可能出现的买卖力量变化。课程用过去在那里买入并反弹的案例说明识别方式，没有把它定义为永远不能跌破的底。",id:"19A-K01-1",knowledgeId:"K01",knowledgeTitle:"支撑的含义",time:"00:46–01:18",pdfPages:[1641],type:"理解判断",quote:`00:46 支撑是低于目前价格的一个价位
00:49 在支撑的价位买盘很可能强于卖盘
00:53 换句话说 在支撑的价位抛售开始减少停止
00:57 而买盘开始占据主导
01:00 所以你常常可以
01:01 看到反弹
01:02 市场在这个价位上涨 在这个价位反弹
01:06 当价格跌到那个区域时
01:09 你必须假设多头会再次买入
01:12 就像他们之前在这里和这里买入一样
01:15 因此交易者用支撑来描述这个区域`},{prompt:"图中红色区域附近，价格多次尝试上涨后又回落。按本课定义，应怎样理解这个区域？",options:["因为价格曾进入红区，说明那里已经不再有阻力","这里反复出现卖盘，是潜在阻力区域","必须先找到导致每次卖出的新闻，才能判断这里是否有阻力"],answer:1,explanation:"课程根据卖盘反复出现、价格不能继续上涨来识别阻力，不需要先解释每个卖家的理由。图为同一课件的局部。",id:"19A-K02-1",knowledgeId:"K02",knowledgeTitle:"阻力的含义",time:"01:23–01:53",pdfPages:[1642],type:"图表应用",quote:`01:23 空头不断的在这个价位附近卖出
01:26 他们在这里卖出
01:31 当市场再次接近这个区域时
01:33 他们很可能会继续卖出
01:36 价格是多少并不重要
01:37 你甚至不需要知道他们为什么在那个价位卖出
01:41 你只需要知道每次当价格到达这个区域
01:45 市场都无法突破它这个
01:48 区域阻止了价格的上涨
01:51 因此这就是阻力`,image:{src:"/charts/19a-resistance.webp",solutionSrc:"/charts/19a-resistance-solution.webp",page:1642,alt:"红色水平区域与多次接近该区域的K线"}},{prompt:"课程把支撑和阻力称为“转折点”，是否意味着到达那里就一定反转？",options:["只有阻力允许被突破，支撑不能被突破","是，只要到达转折点就应该按反转处理","不是，市场可能反转，也可能强势突破"],answer:2,explanation:"原课同时展示区间下沿被强势跌破、前高附近回落和趋势线附近反弹。转折点是需要观察市场如何作出选择的区域。",id:"19A-K03-1",knowledgeId:"K03",knowledgeTitle:"转折点不是必然反转点",time:"01:57–03:33",pdfPages:[1643],type:"理解判断",quote:`01:57 交易者称支撑和阻力为转折点
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
03:30 买入那条线支撑着价格`,referenceImage:{src:"/charts/19a-inflection-solution.webp",page:1643,alt:"第1643页课件整页讲解",kind:"课件整页"}},{prompt:"强下降趋势正在测试前低，本课为什么不主张仅因为“这里是支撑”就挂买单？",options:["前低曾经反弹过，所以这次可优先按双底处理，不必考虑强下降背景","因为所有前低都只是阻力，不能被叫作支撑","原趋势仍有惯性，支撑可能被跌破，不能单凭位置假定双底成立"],answer:2,explanation:"关键是强下降趋势这个背景。潜在支撑不等于已经出现足以反转趋势的买盘；课程的约80%说法是背景性的近似描述。",id:"19A-K04-1",knowledgeId:"K04",knowledgeTitle:"强趋势中的惯性",time:"03:37–04:20",pdfPages:[1644],type:"理解判断",quote:`03:37 为什么在趋势中要花时间寻找支撑和阻力呢？
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
04:17 因为价格会继续下跌`},{prompt:"“强趋势中约80%的反转尝试失败”，和“区间中约80%的突破尝试失败”，最需要区分什么？",options:["一个描述强趋势的延续，另一个描述区间的延续","两句话都意味着所有突破都应该逆向交易","两句话都说明不用判断趋势或区间，只需记住80%"],answer:0,explanation:"相同的数字对应不同市场背景。把趋势中的反转和区间中的突破混为一谈，会把课程的判断方向用反。",id:"19A-K04-2",knowledgeId:"K04",knowledgeTitle:"强趋势中的惯性",time:"03:37–04:20",pdfPages:[1644],type:"变式辨析",quote:`03:37 为什么在趋势中要花时间寻找支撑和阻力呢？
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
04:17 因为价格会继续下跌`},{prompt:"强下降趋势里，几次看似不错的向上反转都在通道上部失败。本课倾向怎样解释？",options:["反弹碰到阻力后失败，说明这个阻力下一次必定失效","只要反转信号不止一次，原下降趋势就自动结束","它们可能是熊旗，而不是已经成功的新上涨趋势"],answer:2,explanation:"课程把失败的反转尝试与熊旗联系起来，并结合下降趋势线附近的反转下跌观察原趋势是否恢复。",id:"19A-K05-1",knowledgeId:"K05",knowledgeTitle:"反转尝试变成熊旗",time:"04:21–05:10",pdfPages:[1644],type:"理解判断",quote:`04:21 市场尝试用一个不错的阳线来反转
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
05:07 下降趋势会恢复`},{prompt:"大阴线收在前低下方，下一根仍是阴线。与单纯“价格碰到前低”相比，增加了什么信息？",options:["前低曾有买盘，应先把新低理解为诱空，不必检查后续卖盘","出现了向下突破及卖盘跟随，更支持支撑未能形成双底","只能说明画线不准确，不能据此观察突破强弱"],answer:1,explanation:"课程用收盘位置和后续卖盘来判断支撑是否失效；同一段还讲下降通道上沿的阴线可以配合阻力背景判断，而不是孤立看一条线。",id:"19A-K06-1",knowledgeId:"K06",knowledgeTitle:"跌破前低与跟随",time:"05:15–06:05",pdfPages:[1644],type:"理解判断",quote:`05:15 当有大阴线收盘在前期低点下方时
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
06:00 下降趋势会恢复 下降趋势线是阻力`},{prompt:"下跌后的反弹没有回到前低上方，左边又有大阴线突破和跟随。课程接下来会关注什么？",options:["只要有缺口，之后就不再存在任何支撑","缺口本身已保证市场立刻开始强上涨","这个缺口是否可用于测量，并观察下方测量目标附近的价格行为"],answer:2,explanation:"课程先识别可能的测量型缺口，再用相关高低点与缺口端点推算下方目标，并观察价格到达时的表现。潜在目标不是自动反转的指令。",id:"19A-K07-1",knowledgeId:"K07",knowledgeTitle:"测量型缺口与下方目标",time:"06:07–07:18",pdfPages:[1645],type:"理解判断",quote:`06:07 每次趋势的反转都发生在支撑和阻力位
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
07:14 其中一种支撑位是基于测量型缺口`,referenceImage:{src:"/charts/19a-bear-channel-solution.webp",page:1645,alt:"第1645页课件整页讲解",kind:"课件整页"}},{prompt:"测量目标、第三次下推和通道下沿汇合，本课为何把这里视为空头可关注的止盈位置？",options:["只要存在三推，就能保证反弹高度超过此前全部跌幅","因为窄下降通道里的首次反弹通常已经是大级别趋势反转","多种支撑依据汇合，可能至少出现反弹，但不等于强上涨趋势已确认"],answer:2,explanation:"课程将这个后期案例解释为抛售高潮后的潜在支撑，同时保留窄通道限制：更可能先是小反转并进入区间。",id:"19A-K08-1",knowledgeId:"K08",knowledgeTitle:"支撑汇合、止盈与反转级别",time:"07:21–08:08",pdfPages:[1645],type:"理解判断",quote:`07:21 三次向下推动
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
08:06 然后进入震荡区间`},{prompt:"“这里适合空头止盈”和“这里已经适合所有多头建立大波段仓位”，能否直接画等号？",options:["不能，平掉原有空仓与逆向建立多仓的依据、反转级别判断并不相同","能，只要一方止盈，另一方的入场就必然同样有利","能，因为支撑总能让趋势完全反向"],answer:0,explanation:"课程区分空头部分或全部止盈，与激进多头买入；并明确窄通道后大概率只是小反转。不能把两种行为的含义合并。",id:"19A-K08-2",knowledgeId:"K08",knowledgeTitle:"支撑汇合、止盈与反转级别",time:"07:21–08:08",pdfPages:[1645],type:"变式辨析",quote:`07:21 三次向下推动
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
08:06 然后进入震荡区间`},{prompt:"本课为什么把区间中的低买高卖与剥头皮联系起来？",options:["因为只要在区间内入场，就可以不用考虑退出","因为区间上下边界都没有支撑或阻力作用","预期突破常失败、波动幅度受限，因此不把每次边界测试都当成趋势起点"],answer:2,explanation:"课程是在区间惯性背景下解释这类行为。它与强趋势里押注延续的逻辑不同，不是对所有背景的统一交易规则。",id:"19A-K09-1",knowledgeId:"K09",knowledgeTitle:"区间中的惯性与剥头皮",time:"08:12–09:11",pdfPages:[1646],type:"理解判断",quote:`08:12 这是一个震荡区间
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
09:07 高抛低吸 剥头皮赚快钱`},{prompt:"区间上沿出现卖盘，为什么不能据此认定“卖出的全都是新开空仓”？",options:["卖盘既可能来自空头开仓，也可能来自多头止盈","因为多头在区间内不能止盈，只能等突破","因为区间上沿只有买盘，不可能出现卖盘"],answer:0,explanation:"课程把开仓与平仓两类行为分开说明。下沿的买盘也可能包含空头回补，不能只由买卖方向判断持仓身份。",id:"19A-K10-1",knowledgeId:"K10",knowledgeTitle:"边界上的开仓与止盈",time:"09:17–10:03",pdfPages:[1647],type:"理解判断",quote:`09:17 震荡区间上沿是阻力 所以交易者卖出
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
10:01 胜率就更高`},{prompt:"在区间边缘寻找反转机会时，本课额外强调了什么？",options:["只要触及边界，第一次信号就必定优于第二次","关注反转价格行为，尤其第二次入场信号","等信号重复出现，区间就一定变成强趋势"],answer:1,explanation:"课程指出区间顶部的反转下跌、底部的反转上涨，尤其第二次信号，可以让交易者更有信心；没有把它说成必胜。",id:"19A-K10-2",knowledgeId:"K10",knowledgeTitle:"边界上的开仓与止盈",time:"09:17–10:03",pdfPages:[1647],type:"变式辨析",quote:`09:17 震荡区间上沿是阻力 所以交易者卖出
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
10:01 胜率就更高`},{prompt:"本课怎样解释市场持续上下探索价格的目的？",options:["把价格一直推到最高，市场才算完成任务","先确定一个永远不变的公平价格，再围绕它移动","寻找能让买卖双方更容易成交的价格区域"],answer:2,explanation:"原课从买家需要卖家、卖家需要买家讲起，说明市场持续寻找可促进成交的区域。",id:"19A-K11-1",knowledgeId:"K11",knowledgeTitle:"市场寻找能促进成交的价格",time:"10:06–10:38",pdfPages:[1648],type:"理解判断",quote:`10:06 市场存在是为了让交易变得容易
10:10 机构创建了市场
10:12 因为他们希望交易变得容易
10:14 如果你是买家 你需要一个卖家
10:17 如果你是卖家 你需要一个买家
10:19 如果每个人都同意参与市场
10:22 找到交易的对手方就要容易得多
10:25 如果没有市场
10:26 你就只能挨家挨户的寻找愿意和你交易的人
10:32 造成的必然结果就是市场总是
10:35 尝试最大化交易的次数和数量`},{prompt:"价格上涨后，多头觉得太贵而等待回调。本课对随后回落的解释是什么？",options:["市场需要降低价格，寻找更多愿意买入的人","市场已经知道唯一准确的公平价格，回落不再是探索","多头不愿追价，说明所有空头也都停止卖出"],answer:0,explanation:"课程用买卖意愿随价格变化说明，走过头与回调都是发现公平价格区间的过程；不是把某个价位视为永久不变。",id:"19A-K12-1",knowledgeId:"K12",knowledgeTitle:"公平价格变化与走过头",time:"10:41–11:52",pdfPages:[1648,1651],type:"理解判断",quote:`10:41 市场在不断地寻找能够让交易最大化的价格
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
11:48 市场不得不回调来找到更多愿意买入的人`},{prompt:"把支撑和阻力称为“磁吸点”，最准确的理解是哪一个？",options:["只要被吸引过去，价格一定停在那个精确价位","磁吸意味着测试次数越多，突破就绝对不可能发生","价格会去测试那里的买卖力量，结果仍可能是突破或反转"],answer:2,explanation:"课程既讲牵引价格前往，也提出一方会不会放弃的问题。反复出现卖盘可增强对阻力的信心，但不消除突破的可能。",id:"19A-K13-1",knowledgeId:"K13",knowledgeTitle:"磁吸与重复测试",time:"11:53–12:38",pdfPages:[1649],type:"理解判断",quote:`11:53 支撑和阻力不断地将价格来回拉扯
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
12:34 交易者更有信心卖盘会再次出现`},{prompt:"图中上升段之后，红色标记K线明显跌过蓝色斜线。按课程案例，哪种解释较合理？",options:["原先沿线的买盘可能已不足，多头离场和空头卖出共同推动向下突破","蓝线曾提供支撑，所以这根K线不可能表示支撑失效","前面的大阳线显示买盘很强，可把跌线直接当成普通回调而不再评估"],answer:0,explanation:"课程将这个案例称为多头放弃，并结合此前抢购高潮、第二段陷阱和第二次做空入场解释背景。裁图不展示文字结论。",id:"19A-K14-1",knowledgeId:"K14",knowledgeTitle:"趋势线失效与放弃K线",time:"12:41–13:42",pdfPages:[1650],type:"图表应用",quote:`12:41 多头在窄通道中不断买入
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
13:41 做空`,image:{src:"/charts/19a-give-up.webp",solutionSrc:"/charts/19a-give-up-solution.webp",page:1650,alt:"上升段、蓝色斜线与红色标记K线的局部"}},{prompt:"上方多次冲高回落；下方虽有大阴线，却没有好的跟随，并在原买入区域反弹。本课怎样比较这两处？",options:["只看下方的大阴线，就可认定强下降趋势已经建立","只要出现一次反弹，上方所有阻力都会失效","上方可能是公平区间上沿，下方可能是支撑区域，需看实际反应"],answer:2,explanation:"课程把买卖双方在区域中的反应联系起来，而不是只看单根K线大小。没有好的跟随，是判断下方支撑时的重要信息。",id:"19A-K15-1",knowledgeId:"K15",knowledgeTitle:"从跟随和反转识别公平区间两端",time:"13:49–14:45",pdfPages:[1651],type:"理解判断",quote:`13:49 所有的市场都在不断寻找公平价格
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
14:43 因此这是一个支撑区域`},{prompt:"图中下跌测试了左侧低点附近，随后回升。媒体将下跌归因于一条利空新闻。按本课应优先观察什么？",options:["前低附近是否再次出现买盘，以及价格怎样测试支撑","只要新闻与下跌同日发生，就足以证明下跌的全部原因","既然出现了利空报道，就无需观察图中的反弹"],answer:0,explanation:"本题检验课程的解释框架：关注价格到支撑后的反应。课程也承认新闻有时是催化剂；不能把事后报道当成价格结构的替代证据。",id:"19A-K16-1",knowledgeId:"K16",knowledgeTitle:"新闻解释与图表依据",time:"14:50–17:03",pdfPages:[1653,1654],type:"图表应用",quote:`14:50 如果你看电视 听新闻记者的报道
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
17:00 价格在测试支撑和阻力`,image:{src:"/charts/19a-support-test.webp",solutionSrc:"/charts/19a-support-test-solution.webp",page:1653,alt:"下跌K线接近左侧低点的水平延伸线后回升的局部"}},{prompt:"本课强调支撑阻力，是否等于声称基本面对任何长期趋势都没有作用？",options:["是，课程认为无论时间长短基本面都完全没有作用","不是，因为课程要求日内交易先等待月线上的新闻确认","不是，课程明确说基本面因素可促成持续数年的趋势"],answer:2,explanation:"原课在解释美元兑日元案例后，明确区分多年方向与图表中的支撑阻力测试。不要把“先看价格结构”扩大成否认长期基本面。",id:"19A-K17-1",knowledgeId:"K17",knowledgeTitle:"月线案例与长期基本面",time:"17:05–19:47",pdfPages:[1655],type:"理解判断",quote:`17:05 这是美元对日元的月K线图
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
19:42 体积也越来越大 价格还会继续上涨`,referenceImage:{src:"/charts/19a-monthly-case-solution.webp",page:1655,alt:"第1655页课件整页讲解",kind:"课件整页"}},{prompt:"课程在月线楔形下降通道案例中提到约75%的向上突破预期，哪种理解保留了它的条件？",options:["它对应所讲的下降通道背景；突破后可能先进入区间，也可能发展为上涨趋势","所有看起来像三次下跌的结构都有完全相同的75%结果","向上突破下降通道，就等于已经保证建立强上涨趋势"],answer:0,explanation:"课程把预期放在急速变通道、抛售高潮等背景中，并同时保留区间和上涨趋势两种后续发展。这个数字是课堂近似描述。",id:"19A-K17-2",knowledgeId:"K17",knowledgeTitle:"月线案例与长期基本面",time:"17:05–19:47",pdfPages:[1655],type:"变式辨析",quote:`17:05 这是美元对日元的月K线图
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
19:42 体积也越来越大 价格还会继续上涨`},{prompt:"月线案例先从旧价位上涨，跌破后又反弹测试该价位并受阻，说明什么？",options:["原支撑可能转成阻力，重要价位也可参与后续测量目标的判断","只要旧支撑被跌破，此后所有重要价位都失去参考价值","支撑和阻力的角色永远不能互换"],answer:0,explanation:"课程先讲支撑变阻力，再讲向下测量目标附近的反弹。字幕20:12附近的“楔形顶”与下跌背景不符，结合该页楔形底图形按底部理解。",id:"19A-K18-1",knowledgeId:"K18",knowledgeTitle:"支撑变阻力与下方投射",time:"19:48–20:19",pdfPages:[1655],type:"理解判断",quote:`19:48 这之前是一个支撑位
19:50 因为市场从那里开始上涨 价格跌破了它
19:55 然后反弹回撤了这个价格柱 支撑变阻力
19:59 所以这是一个重要的价格
20:01 重要的价格通常会导致MM目标
20:05 位从这个高点到那个重要的价格
20:08 这是mm目标位 它很可能是一个支撑位
20:12 现在在MM目标位附近形成了楔形顶
20:15 很高的概率至少会有一些反弹`},{prompt:"依据月线信号建立的交易，临时看到五分钟图大幅回落。本课对止损依据的要求是什么？",options:["改用五分钟止损可以缩小距离，而且不改变原来的月线交易逻辑","只要月线方向向上，就完全不需要止损","仍按月线交易逻辑设置止损，而不是直接改用五分钟波动"],answer:2,explanation:"课程强调信号、决策与止损的时间周期一致。低周期相反波动，并不自动等于高周期交易逻辑已经失效。",id:"19A-K19-1",knowledgeId:"K19",knowledgeTitle:"止损匹配所交易的周期",time:"20:23–21:14",pdfPages:[1657],type:"理解判断",quote:`20:23 如果你看月K线交易
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
21:12 就只需要关注这个K线图`,referenceImage:{src:"/charts/19a-timeframes-solution.webp",page:1657,alt:"第1657页课件整页讲解",kind:"课件整页"}},{prompt:"同一入场价格在月线和五分钟图上都能找到，是否意味着日内交易必须等月线买点？",options:["是，应先等月线触发，再把五分钟信号当作每笔日内交易的确认","不是，因为同一价格不可能出现在两个不同周期的图表上","不是，日内交易按五分钟等所交易周期寻找架构，不必等待数月的月线信号"],answer:2,explanation:"课程用月线双内包K线高一牛旗案例说明：价格位置能够对应，但信号出现频率和交易方式不能混用。",id:"19A-K20-1",knowledgeId:"K20",knowledgeTitle:"日内信号频率与月线信号",time:"21:17–22:14",pdfPages:[1658],type:"理解判断",quote:`21:17 这里有一个非常强势的上涨趋势
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
22:09 只根据月K线图上的价格行为进行交易`,referenceImage:{src:"/charts/19a-day-trading-solution.webp",page:1658,alt:"第1658页课件整页讲解",kind:"课件整页"}},{prompt:"“五分钟波动可能来自其他周期的支撑阻力”，与“日内主要关注眼前图表”矛盾吗？",options:["不矛盾，因为课程说其他周期绝对不会影响五分钟价格","矛盾，只要存在跨周期影响，就不可能在五分钟图上交易","不矛盾，存在跨周期影响，不等于每笔交易都必须切换所有周期等待信号"],answer:2,explanation:"课程承认其他周期的影响，同时强调高周期信号频率低，通常不必因此忽略眼前更频繁的交易架构。",id:"19A-K21-1",knowledgeId:"K21",knowledgeTitle:"其他周期的影响与眼前图表",time:"22:19–23:25",pdfPages:[1659],type:"理解判断",quote:`22:19 你在五分钟图上看到的大波动或者大反转
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
23:21 所以不用担心其他的时间周期`},{prompt:"课程所述的大阳线强势突破前高后，又出现多头跟随。与区间边界测试相比，判断应怎样调整？",options:["只要左边出现过一个小高点，就应一律预期立刻反转下跌","强突破出现后，上方从此不再存在任何阻力或止盈区域","在这个强突破背景下，次要阻力可能失效，价格会寻找上方更重要的阻力"],answer:2,explanation:"课程先强调强突破对次要阻力的穿越，再讨论上方目标。它不是说所有阻力都永久失效；约60%的描述也只服务于该背景。",id:"19A-K22-1",knowledgeId:"K22",knowledgeTitle:"强多头突破与次要阻力",time:"23:28–24:04",pdfPages:[1660],type:"理解判断",quote:`23:28 非常强势的大阳线 收在最高收盘
23:32 远高于前期K线的高点
23:34 然后下一根K线也是阳线
23:38 很大的概率至少60%价格
23:41 会去到上方某个mm目标
23:43 把这次突破的高度往上翻一倍
23:46 任何小的阻力都会失败
23:49 所以你必须以任何理由入场做多突破
23:54 迅速上涨去测试上方的阻力
23:58 市场决定现在的价格太低了
24:01 所以他要寻找更高的价格`},{prompt:"在本课这个大阳线案例中，计算第一个向上测量目标时，讲解明确选了哪个高度？",options:["该大阳线的开盘价到收盘价之间的高度","只要想要更大目标，就把下一根K线的高度随意加上去","直接用这根K线最高到最低的全长，不区分本案例讲解的实体高度"],answer:0,explanation:"原文24:14附近明确讲开盘价与收盘价的投射。不要在这个具体案例里擅自替换成其他测量基准；止损位置仍需结合对应图表。",id:"19A-K23-1",knowledgeId:"K23",knowledgeTitle:"大阳线实体与多重测量目标",time:"24:05–25:10",pdfPages:[1660],type:"理解判断",quote:`24:05 并预期在阻力位至少会有一些多头止盈
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
25:07 这两个mm目标位制造了阻力`},{prompt:"两个向上测量目标落在相近价格，课程为什么关注这里的多头止盈？",options:["测量目标只用于开仓，从不参与退出判断","不同测量依据汇合，可能让该区域形成阻力","两个目标接近，就能保证突破后永远不再上涨"],answer:1,explanation:"课程展示多头在两个目标汇合处卖出止盈。目标用于观察和决策，不是保证每次都精确反转的承诺。",id:"19A-K23-2",knowledgeId:"K23",knowledgeTitle:"大阳线实体与多重测量目标",time:"24:05–25:10",pdfPages:[1660],type:"变式辨析",quote:`24:05 并预期在阻力位至少会有一些多头止盈
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
25:07 这两个mm目标位制造了阻力`},{prompt:"图中K线一度冲到绿色通道上沿外。为什么本课不把这次加速直接视为必然延续？",options:["通道末端一旦加速，就应直接按最初的急速突破阶段处理","课程提醒通道上沿的加速突破常会很快失败，应考虑这里也是阻力","因为任何上涨通道都不允许价格到达上沿"],answer:1,explanation:"这个具体背景中，课程用约75%、五根K线内的描述提醒加速失败风险。它与最初强势突破的阶段不同，不能只因为末端看起来强就忽略位置。",id:"19A-K24-1",knowledgeId:"K24",knowledgeTitle:"加速突破通道上沿",time:"25:12–25:30",pdfPages:[1660],type:"图表应用",quote:`25:12 你可以画一条上涨趋势线
25:14 然后在上沿画一条平行线
25:17 你可以看到价格尝试加速突破通道上沿
25:20 75%的概率它会在5根K线内失败
25:25 然后回到通道下沿
25:27 所以在这个区域也存在其他的阻力`,image:{src:"/charts/19a-channel-overshoot.webp",solutionSrc:"/charts/19a-channel-overshoot-solution.webp",page:1660,alt:"绿色上涨通道上部、末端K线及两条水平投射线"}},{prompt:"原本看似不错的高二买点后出现大阴线，下一根也没有迅速转成强多头反击。本课怎样应对这种新信息？",options:["只要发生小概率事件，就说明之后再也不能分析价格行为","因为原先的高二看起来不错，可以完全忽略这根大阴线","重新评估，关注空头惊喜K线后的跟随及至少一小段第二段下跌"],answer:2,explanation:"课程把它作为空头惊喜K线处理，并看下一根是否提供合格跟随。判断需要随实际信息改变，而不是固守之前的多头架构。",id:"19A-K25-1",knowledgeId:"K25",knowledgeTitle:"惊喜阴线与第二段预期",time:"25:31–26:04",pdfPages:[1661],type:"理解判断",quote:`25:31 市场在这里横盘尝试形成一个高二买点
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
26:04 价格尝试在这里反转上涨`},{prompt:"看到多头的高一、高二尝试时，为什么本课仍会考虑下跌延续？",options:["因为任何高一或高二都必定是做空信号","左侧突破、跟随及潜在测量型缺口，使反弹也可能被解释为高点降低的双顶熊旗","只要能数出两次向上尝试，前面的空头信息就自动无效"],answer:1,explanation:"同一个局部形态需要放到整个背景中判断。课程同时检查左边缺口与反弹后的阴线，而不只是数多头尝试的次数。",id:"19A-K26-1",knowledgeId:"K26",knowledgeTitle:"向下缺口与失败的多头入场",time:"26:04–26:35",pdfPages:[1661],type:"理解判断",quote:`26:00 不是 合格的跟随增加了继续下跌的概率
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
26:32 价格至少还会再下跌一些`},{prompt:"图中下跌到橙色目标线附近，并在红色通道下沿稍微跌破后出现反弹K线，课程关注什么？",options:["测量目标、通道位置和末端价格反应共同构成的潜在支撑","橙线只是图中装饰，不能与通道位置一起观察","只要出现一根阳线，此前所有下跌背景就应完全删除"],answer:0,explanation:"课程在这个位置同时检查测量目标、三推楔形和通道下沿的反转，强调位置与价格行为的组合。不能由单根反弹就保证强上涨趋势。",id:"19A-K27-1",knowledgeId:"K27",knowledgeTitle:"测量目标、通道下沿与楔形底汇合",time:"26:36–27:14",pdfPages:[1661],type:"图表应用",quote:`26:36 市场迅速下跌到支撑位
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
27:13 那是支撑`,image:{src:"/charts/19a-bottom-confluence.webp",solutionSrc:"/charts/19a-bottom-confluence-solution.webp",page:1661,alt:"红色下降通道下部、橙色水平线与末端K线"}},{prompt:"图中价格反复在相近上下边界之间转向。按本课的区间背景，哪种理解更合适？",options:["只要某根突破K线很大，就可以不再考虑之前的来回反转","区间中只有中间价位有意义，上下区域没有支撑阻力作用","关注上下区域的反转与退出机会，不能只凭某次突破外观很强就认定趋势已开始"],answer:2,explanation:"课程先依据反复震荡识别区间，再讲高位卖出、低位买入与多数突破可能失败。区域和背景比单根K线的外观更重要。",id:"19A-K28-1",knowledgeId:"K28",knowledgeTitle:"区间区域与强突破外观",time:"27:19–28:07",pdfPages:[1648,1662],type:"图表应用",quote:`27:19 这显然是一个震荡区间
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
28:03 震荡区间中即使突破的尝试看上去非常强势`,image:{src:"/charts/19a-range.webp",solutionSrc:"/charts/19a-range-solution.webp",page:1648,alt:"同一课件中价格在相近上下区域间多次来回的局部"}},{prompt:"本课为什么认为Emini的支撑阻力计算常比不同外汇平台之间更精确？",options:["Emini交易者看到较一致的数据，算法可基于相同价格计算","主要因为Emini图表使用的时间周期更小，和报价数据是否一致无关","因为只要有电脑交易，任何目标都必定精确到一个最小跳动"],answer:0,explanation:"原课对比Emini与不同外汇平台的数据，强调共同输入的重要性。字幕的“take”按上下文校正为tick，即最小跳动单位；“经常在一个tick内”不是“每次必定”。",id:"19A-K29-1",knowledgeId:"K29",knowledgeTitle:"Emini的数据与目标精度",time:"28:10–28:44",pdfPages:[1664],type:"理解判断",quote:`28:10 支撑和阻力可以非常精确
28:14 它们是由电脑程序计算得到的
28:20 尤其是对于es而言
28:22 它是由电脑程序主导的巨大的市场
28:27 数据非常可靠 每个人都看到相同的价格
28:30 不像外汇市场
28:32 每个平台的价格都略有不同
28:36 所以在es中数学非常精确
28:39 目标经常在实际价格的一个take之内`},{prompt:"图中上涨后，蓝色通道上沿与上方橙色水平目标在相近区域相遇。为什么不能只说“上涨很强，所有阻力都无关紧要”？",options:["第二段已发展到多个阻力汇合区域，课程会观察多头止盈及回落","既然强突破后预期第二段，就可以在第二段到目标区后继续忽略阻力","通道上沿和测量目标必须相互排斥，不能同时起作用"],answer:0,explanation:"课程把强突破后的第二段预期，与第二段完成后到达阻力的位置区分开。多个依据汇合，是关注这个区域的原因。",id:"19A-K30-1",knowledgeId:"K30",knowledgeTitle:"通道上沿与目标汇合",time:"28:46–29:46",pdfPages:[1664],type:"图表应用",quote:`28:46 弱上涨趋势尝试在上沿形成双顶反转下跌
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
29:43 所以多头开始止盈 非常的精确`,image:{src:"/charts/19a-upper-confluence.webp",solutionSrc:"/charts/19a-upper-confluence-solution.webp",page:1664,alt:"蓝色上涨通道上沿与橙色水平线附近的K线"}},{prompt:"图中的紫色斜线连接先前高点，后续价格又接近它。本课怎样解释该处可能集中的卖出行为？",options:["既然大家看到同样的目标，他们的持仓身份和入场时机也应相同","只有新闻出现时，交易者才可能关注这条线","既可能有空头挂单或等反转后卖出，也可能有多头止盈"],answer:2,explanation:"课程说明共同看见目标，不等于用完全相同的方式交易。识别目标，是为提前观察可能的决策，而不是假定所有人的身份和操作一致。",id:"19A-K31-1",knowledgeId:"K31",knowledgeTitle:"共同目标与不同交易行为",time:"29:50–30:37",pdfPages:[1665,1666],type:"图表应用",quote:`29:50 高手都可以看到支撑和阻力的目标
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
30:33 多头会在通道的上沿附近止盈`,image:{src:"/charts/19a-shared-line.webp",solutionSrc:"/charts/19a-shared-line-solution.webp",page:1665,alt:"紫色斜线、水平投射线与沿途高点的局部"}},{prompt:"案例里潜在双顶未能让价格继续下跌，反而持续上涨。本课还会怎样利用原先那段下跌？",options:["仍坚持双顶必然有效，不必观察后续上涨","既然原双顶失败，左边所有价格信息就不能再使用","把那段下跌的高度向上投射，寻找潜在测量目标和阻力"],answer:2,explanation:"课程把失败的做空尝试与反向测量联系起来，并强调学会找到目标，才能观察潜在入场和止盈位置。案例里精确命中不代表所有行情都必然如此。",id:"19A-K32-1",knowledgeId:"K32",knowledgeTitle:"失败双顶的反向测量",time:"30:40–31:34",pdfPages:[1665,1666],type:"理解判断",quote:`30:40 跳空下跌尝试继续抛售
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
31:30 他就知道在哪里止盈 也知道在哪里入场`,referenceImage:{src:"/charts/19a-shared-line-solution.webp",page:1665,alt:"第1665页课件整页讲解",kind:"课件整页"}}],sourceFile:"BTC PAF 19A Support and Resistance_中文 (源语言).srt"}],Tf="brooks-practice-v1",oc=()=>({version:2,selected:"18A",records:{},updatedAt:0});function Cl(i){return[1,2].includes(i==null?void 0:i.version)&&typeof i.selected=="string"&&Number.isFinite(i.updatedAt??0)&&i.records&&typeof i.records=="object"&&!Array.isArray(i.records)&&Object.values(i.records).every(n=>n&&typeof n=="object"&&n.answers&&typeof n.answers=="object"&&!Array.isArray(n.answers)&&Object.values(n.answers).every(r=>r&&Number.isInteger(r.choice)&&r.choice>=0&&typeof r.correct=="boolean"))}function Pm(i,n){if(!Cl(i))throw Error("Invalid progress");const r={...i,version:2,records:{...i.records}},l={};for(const c of n){const d=i.records[c.id];if(d){if(c.knowledgePoints&&(i.version===1||d.revision!==c.revision))l[c.id]=d,delete r.records[c.id];else if(i.version===1){const h={};for(const[m,p]of Object.entries(d.answers)){const g=c.questions[Number(m)];g&&p.choice<g.options.length&&(h[g.id]={...p,correct:p.choice===g.answer})}r.records[c.id]={...d,revision:c.revision||"trend-v1",answers:h}}}}return Object.keys(l).length&&(r.archives=[...Array.isArray(i.archives)?i.archives:[],{reason:"区间题库按知识点重建；旧题号不映射到新题",records:l,priorVersion:i.version,priorUpdatedAt:i.updatedAt??0}],r.migrationNotice="交易区间题库已更新。旧版答题记录已归档并保留在进度导出中，新版需要重新练习。"),r}function fa(i,n){return i.records[n]||{answers:{},understood:!1}}function Dn(i,n){return!!i&&i.correct&&i.choice===n.answer&&!i.unsure}function Ma(i,n){const r=fa(i,n.id);return n.questions.every(l=>Dn(r.answers[l.id],l))}function Nn(i,n){return!!fa(i,n.id).understood&&Ma(i,n)}function ca(i,n,r){const l=r.filter(d=>d.group===n.group),c=l.indexOf(n);return c===0||c>0&&Nn(i,l[c-1])}function Vm(i,n){return n.flatMap(r=>r.questions.flatMap((l,c)=>{const d=fa(i,r.id).answers[l.id];return d&&!Dn(d,l)?[{lesson:r,index:c}]:[]}))}function $m(i,n){const r=n.knowledgePoints||[],l=fa(i,n.id);return{total:r.length,learned:r.filter(c=>n.questions.filter(d=>d.knowledgeId===c.id).every(d=>Dn(l.answers[d.id],d))).length,attempted:r.filter(c=>n.questions.some(d=>d.knowledgeId===c.id&&l.answers[d.id])).length}}function jl(i,n){var r={};for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&n.indexOf(l)<0&&(r[l]=i[l]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,l=Object.getOwnPropertySymbols(i);c<l.length;c++)n.indexOf(l[c])<0&&Object.prototype.propertyIsEnumerable.call(i,l[c])&&(r[l[c]]=i[l[c]]);return r}function Gm(i,n,r,l){function c(d){return d instanceof r?d:new r(function(h){h(d)})}return new(r||(r=Promise))(function(d,h){function m(w){try{g(l.next(w))}catch(v){h(v)}}function p(w){try{g(l.throw(w))}catch(v){h(v)}}function g(w){w.done?d(w.value):c(w.value).then(m,p)}g((l=l.apply(i,n||[])).next())})}const Zm=i=>i?(...n)=>i(...n):(...n)=>fetch(...n);class _c extends Error{constructor(n,r="FunctionsError",l){super(n),this.name=r,this.context=l}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class Ym extends _c{constructor(n){super("Failed to send a request to the Edge Function","FunctionsFetchError",n)}}class jh extends _c{constructor(n){super("Relay Error invoking the Edge Function","FunctionsRelayError",n)}}class Nh extends _c{constructor(n){super("Edge Function returned a non-2xx status code","FunctionsHttpError",n)}}var uc;(function(i){i.Any="any",i.ApNortheast1="ap-northeast-1",i.ApNortheast2="ap-northeast-2",i.ApSouth1="ap-south-1",i.ApSoutheast1="ap-southeast-1",i.ApSoutheast2="ap-southeast-2",i.CaCentral1="ca-central-1",i.EuCentral1="eu-central-1",i.EuWest1="eu-west-1",i.EuWest2="eu-west-2",i.EuWest3="eu-west-3",i.SaEast1="sa-east-1",i.UsEast1="us-east-1",i.UsWest1="us-west-1",i.UsWest2="us-west-2"})(uc||(uc={}));class Jm{constructor(n,{headers:r={},customFetch:l,region:c=uc.Any}={}){this.url=n,this.headers=r,this.region=c,this.fetch=Zm(l)}setAuth(n){this.headers.Authorization=`Bearer ${n}`}invoke(n){return Gm(this,arguments,void 0,function*(r,l={}){var c;let d,h;try{const{headers:m,method:p,body:g,signal:w,timeout:v}=l;let A={},{region:k}=l;k||(k=this.region);const C=new URL(`${this.url}/${r}`);k&&k!=="any"&&(A["x-region"]=k,C.searchParams.set("forceFunctionRegion",k));let D;const P=!!m&&Object.keys(m).some(te=>te.toLowerCase()==="content-type");g&&!P?typeof Blob<"u"&&g instanceof Blob||g instanceof ArrayBuffer?(A["Content-Type"]="application/octet-stream",D=g):typeof g=="string"?(A["Content-Type"]="text/plain",D=g):typeof FormData<"u"&&g instanceof FormData?D=g:(A["Content-Type"]="application/json",D=JSON.stringify(g)):g&&typeof g!="string"&&!(typeof Blob<"u"&&g instanceof Blob)&&!(g instanceof ArrayBuffer)&&!(typeof FormData<"u"&&g instanceof FormData)?D=JSON.stringify(g):D=g;let V=w;v&&(h=new AbortController,d=setTimeout(()=>h.abort(),v),w?(V=h.signal,w.addEventListener("abort",()=>h.abort())):V=h.signal);const B=yield this.fetch(C.toString(),{method:p||"POST",headers:Object.assign(Object.assign(Object.assign({},A),this.headers),m),body:D,signal:V}).catch(te=>{throw new Ym(te)}),L=B.headers.get("x-relay-error");if(L&&L==="true")throw new jh(B);if(!B.ok)throw new Nh(B);let ie=((c=B.headers.get("Content-Type"))!==null&&c!==void 0?c:"text/plain").split(";")[0].trim(),fe;return ie==="application/json"?fe=yield B.json():ie==="application/octet-stream"||ie==="application/pdf"?fe=yield B.blob():ie==="text/event-stream"?fe=B:ie==="multipart/form-data"?fe=yield B.formData():fe=yield B.text(),{data:fe,error:null,response:B}}catch(m){return{data:null,error:m,response:m instanceof Nh||m instanceof jh?m.context:void 0}}finally{d&&clearTimeout(d)}})}}const Kf=3,qh=i=>Math.min(1e3*2**i,3e4),Xm=[520,503],kf=["GET","HEAD","OPTIONS"];var Mh=class extends Error{constructor(i){super(i.message),this.name="PostgrestError",this.details=i.details,this.hint=i.hint,this.code=i.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function Uh(i,n){return new Promise(r=>{if(n!=null&&n.aborted){r();return}const l=setTimeout(()=>{n==null||n.removeEventListener("abort",c),r()},i);function c(){clearTimeout(l),r()}n==null||n.addEventListener("abort",c)})}function Qm(i,n,r,l){return!(!l||r>=Kf||!kf.includes(i)||!Xm.includes(n))}var Fm=class{constructor(i){var n,r,l,c,d;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=i.method,this.url=i.url,this.headers=new Headers(i.headers),this.schema=i.schema,this.body=i.body,this.shouldThrowOnError=(n=i.shouldThrowOnError)!==null&&n!==void 0?n:!1,this.signal=i.signal,this.isMaybeSingle=(r=i.isMaybeSingle)!==null&&r!==void 0?r:!1,this.shouldStripNulls=(l=i.shouldStripNulls)!==null&&l!==void 0?l:!1,this.urlLengthLimit=(c=i.urlLengthLimit)!==null&&c!==void 0?c:8e3,this.retryEnabled=(d=i.retry)!==null&&d!==void 0?d:!0,i.fetch?this.fetch=i.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(i,n){return this.headers=new Headers(this.headers),this.headers.set(i,n),this}retry(i){return this.retryEnabled=i,this}then(i,n){var r=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const h=this.headers.get("Accept");h==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!h||h==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const l=this.fetch;let d=(async()=>{let h=0;for(;;){const g={};r.headers.forEach((v,A)=>{g[A]=v}),h>0&&(g["X-Retry-Count"]=String(h));let w;try{w=await l(r.url.toString(),{method:r.method,headers:g,body:JSON.stringify(r.body,(v,A)=>typeof A=="bigint"?A.toString():A),signal:r.signal})}catch(v){if((v==null?void 0:v.name)==="AbortError"||(v==null?void 0:v.code)==="ABORT_ERR"||!kf.includes(r.method))throw v;if(r.retryEnabled&&h<Kf){const A=qh(h);h++,await Uh(A,r.signal);continue}throw v}if(Qm(r.method,w.status,h,r.retryEnabled)){var m,p;const v=(m=(p=w.headers)===null||p===void 0?void 0:p.get("Retry-After"))!==null&&m!==void 0?m:null,A=v!==null?Math.max(0,parseInt(v,10)||0)*1e3:qh(h);await w.text(),h++,await Uh(A,r.signal);continue}return await r.processResponse(w)}})();return this.shouldThrowOnError||(d=d.catch(h=>{var m;let p="",g="",w="";const v=h==null?void 0:h.cause;if(v){var A,k,C,D;const B=(A=v==null?void 0:v.message)!==null&&A!==void 0?A:"",L=(k=v==null?void 0:v.code)!==null&&k!==void 0?k:"";p=`${(C=h==null?void 0:h.name)!==null&&C!==void 0?C:"FetchError"}: ${h==null?void 0:h.message}`,p+=`

Caused by: ${(D=v==null?void 0:v.name)!==null&&D!==void 0?D:"Error"}: ${B}`,L&&(p+=` (${L})`),v!=null&&v.stack&&(p+=`
${v.stack}`)}else{var P;p=(P=h==null?void 0:h.stack)!==null&&P!==void 0?P:""}const V=this.url.toString().length;return(h==null?void 0:h.name)==="AbortError"||(h==null?void 0:h.code)==="ABORT_ERR"?(w="",g="Request was aborted (timeout or manual cancellation)",V>this.urlLengthLimit&&(g+=`. Note: Your request URL is ${V} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((v==null?void 0:v.name)==="HeadersOverflowError"||(v==null?void 0:v.code)==="UND_ERR_HEADERS_OVERFLOW")&&(w="",g="HTTP headers exceeded server limits (typically 16KB)",V>this.urlLengthLimit&&(g+=`. Your request URL is ${V} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(m=h==null?void 0:h.name)!==null&&m!==void 0?m:"FetchError"}: ${h==null?void 0:h.message}`,details:p,hint:g,code:w},data:null,count:null,status:0,statusText:""}})),d.then(i,n)}async processResponse(i){var n=this;let r=null,l=null,c=null,d=i.status,h=i.statusText;if(i.ok){var m,p;if(n.method!=="HEAD"){var g;const A=await i.text();if(A!=="")if(n.headers.get("Accept")==="text/csv")l=A;else if(n.headers.get("Accept")&&(!((g=n.headers.get("Accept"))===null||g===void 0)&&g.includes("application/vnd.pgrst.plan+text")))l=A;else try{l=JSON.parse(A)}catch{if(r={message:A},l=null,n.shouldThrowOnError)throw new Mh({message:A,details:"",hint:"",code:""})}}const w=(m=n.headers.get("Prefer"))===null||m===void 0?void 0:m.match(/count=(exact|planned|estimated)/),v=(p=i.headers.get("content-range"))===null||p===void 0?void 0:p.split("/");w&&v&&v.length>1&&(c=parseInt(v[1])),n.isMaybeSingle&&Array.isArray(l)&&(l.length>1?(r={code:"PGRST116",details:`Results contain ${l.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},l=null,c=null,d=406,h="Not Acceptable"):l.length===1?l=l[0]:l=null)}else{const w=await i.text();try{r=JSON.parse(w),Array.isArray(r)&&i.status===404&&(l=[],r=null,d=200,h="OK")}catch{i.status===404&&w===""?(d=204,h="No Content"):r={message:w}}if(r&&n.shouldThrowOnError)throw new Mh(r)}return{success:r===null,error:r,data:l,count:c,status:d,statusText:h}}returns(){return this}overrideTypes(){return this}},Wm=class extends Fm{throwOnError(){return super.throwOnError()}select(i){let n=!1;const r=(i??"*").split("").map(l=>/\s/.test(l)&&!n?"":(l==='"'&&(n=!n),l)).join("");return this.url.searchParams.set("select",r),this.headers.append("Prefer","return=representation"),this}order(i,{ascending:n=!0,nullsFirst:r,foreignTable:l,referencedTable:c=l}={}){const d=c?`${c}.order`:"order",h=this.url.searchParams.get(d);return this.url.searchParams.set(d,`${h?`${h},`:""}${i}.${n?"asc":"desc"}${r===void 0?"":r?".nullsfirst":".nullslast"}`),this}limit(i,{foreignTable:n,referencedTable:r=n}={}){const l=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(l,`${i}`),this}range(i,n,{foreignTable:r,referencedTable:l=r}={}){const c=typeof l>"u"?"offset":`${l}.offset`,d=typeof l>"u"?"limit":`${l}.limit`;return this.url.searchParams.set(c,`${i}`),this.url.searchParams.set(d,`${n-i+1}`),this}abortSignal(i){return this.signal=i,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:i=!1,verbose:n=!1,settings:r=!1,buffers:l=!1,wal:c=!1,format:d="text"}={}){var h;const m=[i?"analyze":null,n?"verbose":null,r?"settings":null,l?"buffers":null,c?"wal":null].filter(Boolean).join("|"),p=(h=this.headers.get("Accept"))!==null&&h!==void 0?h:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${d}; for="${p}"; options=${m};`),d==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(i){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${i}`),this}};const Dh=new RegExp("[,()]");var Oi=class extends Wm{throwOnError(){return super.throwOnError()}eq(i,n){return this.url.searchParams.append(i,`eq.${n}`),this}neq(i,n){return this.url.searchParams.append(i,`neq.${n}`),this}gt(i,n){return this.url.searchParams.append(i,`gt.${n}`),this}gte(i,n){return this.url.searchParams.append(i,`gte.${n}`),this}lt(i,n){return this.url.searchParams.append(i,`lt.${n}`),this}lte(i,n){return this.url.searchParams.append(i,`lte.${n}`),this}like(i,n){return this.url.searchParams.append(i,`like.${n}`),this}likeAllOf(i,n){return this.url.searchParams.append(i,`like(all).{${n.join(",")}}`),this}likeAnyOf(i,n){return this.url.searchParams.append(i,`like(any).{${n.join(",")}}`),this}ilike(i,n){return this.url.searchParams.append(i,`ilike.${n}`),this}ilikeAllOf(i,n){return this.url.searchParams.append(i,`ilike(all).{${n.join(",")}}`),this}ilikeAnyOf(i,n){return this.url.searchParams.append(i,`ilike(any).{${n.join(",")}}`),this}regexMatch(i,n){return this.url.searchParams.append(i,`match.${n}`),this}regexIMatch(i,n){return this.url.searchParams.append(i,`imatch.${n}`),this}is(i,n){return this.url.searchParams.append(i,`is.${n}`),this}isDistinct(i,n){return this.url.searchParams.append(i,`isdistinct.${n}`),this}in(i,n){const r=Array.from(new Set(n)).map(l=>typeof l=="string"&&Dh.test(l)?`"${l}"`:`${l}`).join(",");return this.url.searchParams.append(i,`in.(${r})`),this}notIn(i,n){const r=Array.from(new Set(n)).map(l=>typeof l=="string"&&Dh.test(l)?`"${l}"`:`${l}`).join(",");return this.url.searchParams.append(i,`not.in.(${r})`),this}contains(i,n){return typeof n=="string"?this.url.searchParams.append(i,`cs.${n}`):Array.isArray(n)?this.url.searchParams.append(i,`cs.{${n.join(",")}}`):this.url.searchParams.append(i,`cs.${JSON.stringify(n)}`),this}containedBy(i,n){return typeof n=="string"?this.url.searchParams.append(i,`cd.${n}`):Array.isArray(n)?this.url.searchParams.append(i,`cd.{${n.join(",")}}`):this.url.searchParams.append(i,`cd.${JSON.stringify(n)}`),this}rangeGt(i,n){return this.url.searchParams.append(i,`sr.${n}`),this}rangeGte(i,n){return this.url.searchParams.append(i,`nxl.${n}`),this}rangeLt(i,n){return this.url.searchParams.append(i,`sl.${n}`),this}rangeLte(i,n){return this.url.searchParams.append(i,`nxr.${n}`),this}rangeAdjacent(i,n){return this.url.searchParams.append(i,`adj.${n}`),this}overlaps(i,n){return typeof n=="string"?this.url.searchParams.append(i,`ov.${n}`):this.url.searchParams.append(i,`ov.{${n.join(",")}}`),this}textSearch(i,n,{config:r,type:l}={}){let c="";l==="plain"?c="pl":l==="phrase"?c="ph":l==="websearch"&&(c="w");const d=r===void 0?"":`(${r})`;return this.url.searchParams.append(i,`${c}fts${d}.${n}`),this}match(i){return Object.entries(i).filter(([n,r])=>r!==void 0).forEach(([n,r])=>{this.url.searchParams.append(n,`eq.${r}`)}),this}not(i,n,r){return this.url.searchParams.append(i,`not.${n}.${r}`),this}or(i,{foreignTable:n,referencedTable:r=n}={}){const l=r?`${r}.or`:"or";return this.url.searchParams.append(l,`(${i})`),this}filter(i,n,r){return this.url.searchParams.append(i,`${n}.${r}`),this}},eg=class{constructor(i,{headers:n={},schema:r,fetch:l,urlLengthLimit:c=8e3,retry:d}){this.url=i,this.headers=new Headers(n),this.schema=r,this.fetch=l,this.urlLengthLimit=c,this.retry=d}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(i,n){const{head:r=!1,count:l}=n??{},c=r?"HEAD":"GET";let d=!1;const h=(i??"*").split("").map(g=>/\s/.test(g)&&!d?"":(g==='"'&&(d=!d),g)).join(""),{url:m,headers:p}=this.cloneRequestState();return m.searchParams.set("select",h),l&&p.append("Prefer",`count=${l}`),new Oi({method:c,url:m,headers:p,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(i,{count:n,defaultToNull:r=!0}={}){var l;const c="POST",{url:d,headers:h}=this.cloneRequestState();if(n&&h.append("Prefer",`count=${n}`),r||h.append("Prefer","missing=default"),Array.isArray(i)){const m=i.reduce((p,g)=>p.concat(Object.keys(g)),[]);if(m.length>0){const p=[...new Set(m)].map(g=>`"${g}"`);d.searchParams.set("columns",p.join(","))}}return new Oi({method:c,url:d,headers:h,schema:this.schema,body:i,fetch:(l=this.fetch)!==null&&l!==void 0?l:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(i,{onConflict:n,ignoreDuplicates:r=!1,count:l,defaultToNull:c=!0}={}){var d;const h="POST",{url:m,headers:p}=this.cloneRequestState();if(p.append("Prefer",`resolution=${r?"ignore":"merge"}-duplicates`),n!==void 0&&m.searchParams.set("on_conflict",n),l&&p.append("Prefer",`count=${l}`),c||p.append("Prefer","missing=default"),Array.isArray(i)){const g=i.reduce((w,v)=>w.concat(Object.keys(v)),[]);if(g.length>0){const w=[...new Set(g)].map(v=>`"${v}"`);m.searchParams.set("columns",w.join(","))}}return new Oi({method:h,url:m,headers:p,schema:this.schema,body:i,fetch:(d=this.fetch)!==null&&d!==void 0?d:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(i,{count:n}={}){var r;const l="PATCH",{url:c,headers:d}=this.cloneRequestState();return n&&d.append("Prefer",`count=${n}`),new Oi({method:l,url:c,headers:d,schema:this.schema,body:i,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:i}={}){var n;const r="DELETE",{url:l,headers:c}=this.cloneRequestState();return i&&c.append("Prefer",`count=${i}`),new Oi({method:r,url:l,headers:c,schema:this.schema,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function Us(i){"@babel/helpers - typeof";return Us=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Us(i)}function tg(i,n){if(Us(i)!="object"||!i)return i;var r=i[Symbol.toPrimitive];if(r!==void 0){var l=r.call(i,n);if(Us(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function ng(i){var n=tg(i,"string");return Us(n)=="symbol"?n:n+""}function ag(i,n,r){return(n=ng(n))in i?Object.defineProperty(i,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[n]=r,i}function zh(i,n){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);n&&(l=l.filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable})),r.push.apply(r,l)}return r}function dl(i){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?zh(Object(r),!0).forEach(function(l){ag(i,l,r[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):zh(Object(r)).forEach(function(l){Object.defineProperty(i,l,Object.getOwnPropertyDescriptor(r,l))})}return i}var ig=class Of{constructor(n,{headers:r={},schema:l,fetch:c,timeout:d,urlLengthLimit:h=8e3,retry:m}={}){this.url=n,this.headers=new Headers(r),this.schemaName=l,this.urlLengthLimit=h;const p=c??globalThis.fetch;d!==void 0&&d>0?this.fetch=(g,w)=>{const v=new AbortController,A=setTimeout(()=>v.abort(),d),k=w==null?void 0:w.signal;if(k){if(k.aborted)return clearTimeout(A),p(g,w);const C=()=>{clearTimeout(A),v.abort()};return k.addEventListener("abort",C,{once:!0}),p(g,dl(dl({},w),{},{signal:v.signal})).finally(()=>{clearTimeout(A),k.removeEventListener("abort",C)})}return p(g,dl(dl({},w),{},{signal:v.signal})).finally(()=>clearTimeout(A))}:this.fetch=p,this.retry=m}from(n){if(!n||typeof n!="string"||n.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new eg(new URL(`${this.url}/${n}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(n){return new Of(this.url,{headers:this.headers,schema:n,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(n,r={},{head:l=!1,get:c=!1,count:d}={}){var h;let m;const p=new URL(`${this.url}/rpc/${n}`);let g;const w=k=>k!==null&&typeof k=="object"&&(!Array.isArray(k)||k.some(w)),v=l&&Object.values(r).some(w);v?(m="POST",g=r):l||c?(m=l?"HEAD":"GET",Object.entries(r).filter(([k,C])=>C!==void 0).map(([k,C])=>[k,Array.isArray(C)?`{${C.join(",")}}`:`${C}`]).forEach(([k,C])=>{p.searchParams.append(k,C)})):(m="POST",g=r);const A=new Headers(this.headers);return v?A.set("Prefer",d?`count=${d},return=minimal`:"return=minimal"):d&&A.set("Prefer",`count=${d}`),new Oi({method:m,url:p,headers:A,schema:this.schemaName,body:g,fetch:(h=this.fetch)!==null&&h!==void 0?h:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class sg{constructor(){}static detectEnvironment(){var n;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const r=globalThis;if(typeof globalThis<"u"&&typeof r.WebSocket<"u")return{type:"native",wsConstructor:r.WebSocket};const l=typeof global<"u"?global:void 0;if(l&&typeof l.WebSocket<"u")return{type:"native",wsConstructor:l.WebSocket};if(typeof globalThis<"u"&&typeof r.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&r.EdgeRuntime||typeof navigator<"u"&&(!((n=navigator.userAgent)===null||n===void 0)&&n.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const c=globalThis.process;if(c){const d=c.versions;if(d&&d.node){const h=d.node,m=parseInt(h.replace(/^v/,"").split(".")[0]);return m>=22?typeof globalThis.WebSocket<"u"?{type:"native",wsConstructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${m} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${m} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const n=this.detectEnvironment();if(n.wsConstructor)return n.wsConstructor;let r=n.error||"WebSocket not supported in this environment.";throw n.workaround&&(r+=`

Suggested solution: ${n.workaround}`),new Error(r)}static isWebSocketSupported(){try{const n=this.detectEnvironment();return n.type==="native"||n.type==="ws"}catch{return!1}}}const rg="2.109.0",lg=`realtime-js/${rg}`,og="1.0.0",Rf="2.0.0",ug=Rf,cg=1e4,dg=100,da={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},xf={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},cc={connecting:"connecting",closing:"closing",closed:"closed"};class hg{constructor(n){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=n??[]}encode(n,r){if(n.event===this.BROADCAST_EVENT&&!(n.payload instanceof ArrayBuffer)&&typeof n.payload.event=="string")return r(this._binaryEncodeUserBroadcastPush(n));let l=[n.join_ref,n.ref,n.topic,n.event,n.payload];return r(JSON.stringify(l))}_binaryEncodeUserBroadcastPush(n){var r;return this._isArrayBuffer((r=n.payload)===null||r===void 0?void 0:r.payload)?this._encodeBinaryUserBroadcastPush(n):this._encodeJsonUserBroadcastPush(n)}_encodeBinaryUserBroadcastPush(n){var r,l;const c=(l=(r=n.payload)===null||r===void 0?void 0:r.payload)!==null&&l!==void 0?l:new ArrayBuffer(0);return this._encodeUserBroadcastPush(n,this.BINARY_ENCODING,c)}_encodeJsonUserBroadcastPush(n){var r,l;const c=(l=(r=n.payload)===null||r===void 0?void 0:r.payload)!==null&&l!==void 0?l:{},h=new TextEncoder().encode(JSON.stringify(c)).buffer;return this._encodeUserBroadcastPush(n,this.JSON_ENCODING,h)}_encodeUserBroadcastPush(n,r,l){var c,d;const h=n.topic,m=(c=n.ref)!==null&&c!==void 0?c:"",p=(d=n.join_ref)!==null&&d!==void 0?d:"",g=n.payload.event,w=this.allowedMetadataKeys?this._pick(n.payload,this.allowedMetadataKeys):{},v=Object.keys(w).length===0?"":JSON.stringify(w);if(p.length>255)throw new Error(`joinRef length ${p.length} exceeds maximum of 255`);if(m.length>255)throw new Error(`ref length ${m.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`topic length ${h.length} exceeds maximum of 255`);if(g.length>255)throw new Error(`userEvent length ${g.length} exceeds maximum of 255`);if(v.length>255)throw new Error(`metadata length ${v.length} exceeds maximum of 255`);const A=this.USER_BROADCAST_PUSH_META_LENGTH+p.length+m.length+h.length+g.length+v.length,k=new ArrayBuffer(this.HEADER_LENGTH+A);let C=new DataView(k),D=0;C.setUint8(D++,this.KINDS.userBroadcastPush),C.setUint8(D++,p.length),C.setUint8(D++,m.length),C.setUint8(D++,h.length),C.setUint8(D++,g.length),C.setUint8(D++,v.length),C.setUint8(D++,r),Array.from(p,V=>C.setUint8(D++,V.charCodeAt(0))),Array.from(m,V=>C.setUint8(D++,V.charCodeAt(0))),Array.from(h,V=>C.setUint8(D++,V.charCodeAt(0))),Array.from(g,V=>C.setUint8(D++,V.charCodeAt(0))),Array.from(v,V=>C.setUint8(D++,V.charCodeAt(0)));var P=new Uint8Array(k.byteLength+l.byteLength);return P.set(new Uint8Array(k),0),P.set(new Uint8Array(l),k.byteLength),P.buffer}decode(n,r){if(this._isArrayBuffer(n)){let l=this._binaryDecode(n);return r(l)}if(typeof n=="string"){const l=JSON.parse(n),[c,d,h,m,p]=l;return r({join_ref:c,ref:d,topic:h,event:m,payload:p})}return r({})}_binaryDecode(n){const r=new DataView(n),l=r.getUint8(0),c=new TextDecoder;switch(l){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(n,r,c)}}_decodeUserBroadcast(n,r,l){const c=r.getUint8(1),d=r.getUint8(2),h=r.getUint8(3),m=r.getUint8(4);let p=this.HEADER_LENGTH+4;const g=l.decode(n.slice(p,p+c));p=p+c;const w=l.decode(n.slice(p,p+d));p=p+d;const v=l.decode(n.slice(p,p+h));p=p+h;const A=n.slice(p,n.byteLength),k=m===this.JSON_ENCODING?JSON.parse(l.decode(A)):A,C={type:this.BROADCAST_EVENT,event:w,payload:k};return h>0&&(C.meta=JSON.parse(v)),{join_ref:null,ref:null,topic:g,event:this.BROADCAST_EVENT,payload:C}}_isArrayBuffer(n){var r;return n instanceof ArrayBuffer||((r=n==null?void 0:n.constructor)===null||r===void 0?void 0:r.name)==="ArrayBuffer"}_pick(n,r){return!n||typeof n!="object"?{}:Object.fromEntries(Object.entries(n).filter(([l])=>r.includes(l)))}}var xe;(function(i){i.abstime="abstime",i.bool="bool",i.date="date",i.daterange="daterange",i.float4="float4",i.float8="float8",i.int2="int2",i.int4="int4",i.int4range="int4range",i.int8="int8",i.int8range="int8range",i.json="json",i.jsonb="jsonb",i.money="money",i.numeric="numeric",i.oid="oid",i.reltime="reltime",i.text="text",i.time="time",i.timestamp="timestamp",i.timestamptz="timestamptz",i.timetz="timetz",i.tsrange="tsrange",i.tstzrange="tstzrange"})(xe||(xe={}));const Hh=(i,n,r={})=>{var l;const c=(l=r.skipTypes)!==null&&l!==void 0?l:[];return n?Object.keys(n).reduce((d,h)=>(d[h]=fg(h,i,n,c),d),{}):{}},fg=(i,n,r,l)=>{const c=n.find(m=>m.name===i),d=c==null?void 0:c.type,h=r[i];return d&&!l.includes(d)?Cf(d,h):dc(h)},Cf=(i,n)=>{if(i.charAt(0)==="_"){const r=i.slice(1,i.length);return yg(n,r)}switch(i){case xe.bool:return pg(n);case xe.float4:case xe.float8:case xe.int2:case xe.int4:case xe.int8:case xe.numeric:case xe.oid:return mg(n);case xe.json:case xe.jsonb:return gg(n);case xe.timestamp:return vg(n);case xe.abstime:case xe.date:case xe.daterange:case xe.int4range:case xe.int8range:case xe.money:case xe.reltime:case xe.text:case xe.time:case xe.timestamptz:case xe.timetz:case xe.tsrange:case xe.tstzrange:return dc(n);default:return dc(n)}},dc=i=>i,pg=i=>{switch(i){case"t":return!0;case"f":return!1;default:return i}},mg=i=>{if(typeof i=="string"){const n=parseFloat(i);if(!Number.isNaN(n))return n}return i},gg=i=>{if(typeof i=="string")try{return JSON.parse(i)}catch{return i}return i},yg=(i,n)=>{if(typeof i!="string")return i;const r=i.length-1,l=i[r];if(i[0]==="{"&&l==="}"){let d;const h=i.slice(1,r);try{d=JSON.parse("["+h+"]")}catch{d=h?h.split(","):[]}return d.map(m=>Cf(n,m))}return i},vg=i=>typeof i=="string"?i.replace(" ","T"):i,jf=i=>{const n=new URL(i);return n.protocol=n.protocol.replace(/^ws/i,"http"),n.pathname=n.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),n.pathname===""||n.pathname==="/"?n.pathname="/api/broadcast":n.pathname=n.pathname+"/api/broadcast",n.href};var Ns=i=>typeof i=="function"?i:function(){return i},wg=typeof self<"u"?self:null,Ri=typeof window<"u"?window:null,an=wg||Ri||globalThis,bg="2.0.0",_g=1e4,Sg=1e3,sn={connecting:0,open:1,closing:2,closed:3},St={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},qn={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},hc={longpoll:"longpoll",websocket:"websocket"},Eg={complete:4},fc="base64url.bearer.phx.",hl=class{constructor(i,n,r,l){this.channel=i,this.event=n,this.payload=r||function(){return{}},this.receivedResp=null,this.timeout=l,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(i){this.timeout=i,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(i,n){return this.hasReceived(i)&&n(this.receivedResp.response),this.recHooks.push({status:i,callback:n}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:i,response:n,_ref:r}){this.recHooks.filter(l=>l.status===i).forEach(l=>l.callback(n))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,i=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=i,this.matchReceive(i)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(i){return this.receivedResp&&this.receivedResp.status===i}trigger(i,n){this.channel.trigger(this.refEvent,{status:i,response:n})}},Nf=class{constructor(i,n){this.callback=i,this.timerCalc=n,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},Ag=class{constructor(i,n,r){this.state=St.closed,this.topic=i,this.params=Ns(n||{}),this.socket=r,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new hl(this,qn.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Nf(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=St.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(l=>l.send()),this.pushBuffer=[]}),this.joinPush.receive("error",l=>{this.state=St.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,l),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=St.closed,this.socket.remove(this)}),this.onError(l=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,l),this.isJoining()&&this.joinPush.reset(),this.state=St.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new hl(this,qn.leave,Ns({}),this.timeout).send(),this.state=St.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(qn.reply,(l,c)=>{this.trigger(this.replyEventName(c),l)})}join(i=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=i,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(i=>i.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=St.closed,this.bindings=[]}onClose(i){this.on(qn.close,i)}onError(i){return this.on(qn.error,n=>i(n))}on(i,n){let r=this.bindingRef++;return this.bindings.push({event:i,ref:r,callback:n}),r}off(i,n){this.bindings=this.bindings.filter(r=>!(r.event===i&&(typeof n>"u"||n===r.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(i,n,r=this.timeout){if(n=n||{},!this.joinedOnce)throw new Error(`tried to push '${i}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let l=new hl(this,i,function(){return n},r);return this.canPush()?l.send():(l.startTimeout(),this.pushBuffer.push(l)),l}leave(i=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=St.leaving;let n=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(qn.close,"leave")},r=new hl(this,qn.leave,Ns({}),i);return r.receive("ok",()=>n()).receive("timeout",()=>n()),r.send(),this.canPush()||r.trigger("ok",{}),r}onMessage(i,n,r){return n}filterBindings(i,n,r){return!0}isMember(i,n,r,l){return this.topic!==i?!1:l&&l!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:i,event:n,payload:r,joinRef:l}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(i=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=St.joining,this.joinPush.resend(i))}trigger(i,n,r,l){let c=this.onMessage(i,n,r,l);if(n&&!c)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let d=this.bindings.filter(h=>h.event===i&&this.filterBindings(h,n,r));for(let h=0;h<d.length;h++)d[h].callback(c,r,l||this.joinRef())}replyEventName(i){return`chan_reply_${i}`}isClosed(){return this.state===St.closed}isErrored(){return this.state===St.errored}isJoined(){return this.state===St.joined}isJoining(){return this.state===St.joining}isLeaving(){return this.state===St.leaving}},_l=class{static request(i,n,r,l,c,d,h){if(an.XDomainRequest){let m=new an.XDomainRequest;return this.xdomainRequest(m,i,n,l,c,d,h)}else if(an.XMLHttpRequest){let m=new an.XMLHttpRequest;return this.xhrRequest(m,i,n,r,l,c,d,h)}else{if(an.fetch&&an.AbortController)return this.fetchRequest(i,n,r,l,c,d,h);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(i,n,r,l,c,d,h){let m={method:i,headers:r,body:l},p=null;return c&&(p=new AbortController,setTimeout(()=>p.abort(),c),m.signal=p.signal),an.fetch(n,m).then(g=>g.text()).then(g=>this.parseJSON(g)).then(g=>h&&h(g)).catch(g=>{g.name==="AbortError"&&d?d():h&&h(null)}),p}static xdomainRequest(i,n,r,l,c,d,h){return i.timeout=c,i.open(n,r),i.onload=()=>{let m=this.parseJSON(i.responseText);h&&h(m)},d&&(i.ontimeout=d),i.onprogress=()=>{},i.send(l),i}static xhrRequest(i,n,r,l,c,d,h,m){i.open(n,r,!0),i.timeout=d;for(let[p,g]of Object.entries(l))i.setRequestHeader(p,g);return i.onerror=()=>m&&m(null),i.onreadystatechange=()=>{if(i.readyState===Eg.complete&&m){let p=this.parseJSON(i.responseText);m(p)}},h&&(i.ontimeout=h),i.send(c),i}static parseJSON(i){if(!i||i==="")return null;try{return JSON.parse(i)}catch{return console&&console.log("failed to parse JSON response",i),null}}static serialize(i,n){let r=[];for(var l in i){if(!Object.prototype.hasOwnProperty.call(i,l))continue;let c=n?`${n}[${l}]`:l,d=i[l];typeof d=="object"?r.push(this.serialize(d,c)):r.push(encodeURIComponent(c)+"="+encodeURIComponent(d))}return r.join("&")}static appendParams(i,n){if(Object.keys(n).length===0)return i;let r=i.match(/\?/)?"&":"?";return`${i}${r}${this.serialize(n)}`}},Tg=i=>{let n="",r=new Uint8Array(i),l=r.byteLength;for(let c=0;c<l;c++)n+=String.fromCharCode(r[c]);return btoa(n)},Ai=class{constructor(i,n){n&&n.length===2&&n[1].startsWith(fc)&&(this.authToken=atob(n[1].slice(fc.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(i),this.readyState=sn.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(i){return i.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+hc.websocket),"$1/"+hc.longpoll)}endpointURL(){return _l.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(i,n,r){this.close(i,n,r),this.readyState=sn.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===sn.open||this.readyState===sn.connecting}poll(){const i={Accept:"application/json"};this.authToken&&(i["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",i,null,()=>this.ontimeout(),n=>{if(n){var{status:r,token:l,messages:c}=n;if(r===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=l}else r=0;switch(r){case 200:c.forEach(d=>{setTimeout(()=>this.onmessage({data:d}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=sn.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${r}`)}})}send(i){typeof i!="string"&&(i=Tg(i)),this.currentBatch?this.currentBatch.push(i):this.awaitingBatchAck?this.batchBuffer.push(i):(this.currentBatch=[i],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(i){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},i.join(`
`),()=>this.onerror("timeout"),n=>{this.awaitingBatchAck=!1,!n||n.status!==200?(this.onerror(n&&n.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(i,n,r){for(let c of this.reqs)c.abort();this.readyState=sn.closed;let l=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:i,reason:n,wasClean:r});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",l)):this.onclose(l)}ajax(i,n,r,l,c){let d,h=()=>{this.reqs.delete(d),l()};d=_l.request(i,this.endpointURL(),n,r,this.timeout,h,m=>{this.reqs.delete(d),this.isActive()&&c(m)}),this.reqs.add(d)}},Kg=class xs{constructor(n,r={}){let l=r.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=n,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(l.state,c=>{let{onJoin:d,onLeave:h,onSync:m}=this.caller;this.joinRef=this.channel.joinRef(),this.state=xs.syncState(this.state,c,d,h),this.pendingDiffs.forEach(p=>{this.state=xs.syncDiff(this.state,p,d,h)}),this.pendingDiffs=[],m()}),this.channel.on(l.diff,c=>{let{onJoin:d,onLeave:h,onSync:m}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(c):(this.state=xs.syncDiff(this.state,c,d,h),m())})}onJoin(n){this.caller.onJoin=n}onLeave(n){this.caller.onLeave=n}onSync(n){this.caller.onSync=n}list(n){return xs.list(this.state,n)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(n,r,l,c){let d=this.clone(n),h={},m={};return this.map(d,(p,g)=>{r[p]||(m[p]=g)}),this.map(r,(p,g)=>{let w=d[p];if(w){let v=g.metas.map(D=>D.phx_ref),A=w.metas.map(D=>D.phx_ref),k=g.metas.filter(D=>A.indexOf(D.phx_ref)<0),C=w.metas.filter(D=>v.indexOf(D.phx_ref)<0);k.length>0&&(h[p]=g,h[p].metas=k),C.length>0&&(m[p]=this.clone(w),m[p].metas=C)}else h[p]=g}),this.syncDiff(d,{joins:h,leaves:m},l,c)}static syncDiff(n,r,l,c){let{joins:d,leaves:h}=this.clone(r);return l||(l=function(){}),c||(c=function(){}),this.map(d,(m,p)=>{let g=n[m];if(n[m]=this.clone(p),g){let w=n[m].metas.map(A=>A.phx_ref),v=g.metas.filter(A=>w.indexOf(A.phx_ref)<0);n[m].metas.unshift(...v)}l(m,g,p)}),this.map(h,(m,p)=>{let g=n[m];if(!g)return;let w=p.metas.map(v=>v.phx_ref);g.metas=g.metas.filter(v=>w.indexOf(v.phx_ref)<0),c(m,g,p),g.metas.length===0&&delete n[m]}),n}static list(n,r){return r||(r=function(l,c){return c}),this.map(n,(l,c)=>r(l,c))}static map(n,r){return Object.getOwnPropertyNames(n).map(l=>r(l,n[l]))}static clone(n){return JSON.parse(JSON.stringify(n))}},fl={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(i,n){if(i.payload.constructor===ArrayBuffer)return n(this.binaryEncode(i));{let r=[i.join_ref,i.ref,i.topic,i.event,i.payload];return n(JSON.stringify(r))}},decode(i,n){if(i.constructor===ArrayBuffer)return n(this.binaryDecode(i));{let[r,l,c,d,h]=JSON.parse(i);return n({join_ref:r,ref:l,topic:c,event:d,payload:h})}},binaryEncode(i){let{join_ref:n,ref:r,event:l,topic:c,payload:d}=i,h=this.META_LENGTH+n.length+r.length+c.length+l.length,m=new ArrayBuffer(this.HEADER_LENGTH+h),p=new DataView(m),g=0;p.setUint8(g++,this.KINDS.push),p.setUint8(g++,n.length),p.setUint8(g++,r.length),p.setUint8(g++,c.length),p.setUint8(g++,l.length),Array.from(n,v=>p.setUint8(g++,v.charCodeAt(0))),Array.from(r,v=>p.setUint8(g++,v.charCodeAt(0))),Array.from(c,v=>p.setUint8(g++,v.charCodeAt(0))),Array.from(l,v=>p.setUint8(g++,v.charCodeAt(0)));var w=new Uint8Array(m.byteLength+d.byteLength);return w.set(new Uint8Array(m),0),w.set(new Uint8Array(d),m.byteLength),w.buffer},binaryDecode(i){let n=new DataView(i),r=n.getUint8(0),l=new TextDecoder;switch(r){case this.KINDS.push:return this.decodePush(i,n,l);case this.KINDS.reply:return this.decodeReply(i,n,l);case this.KINDS.broadcast:return this.decodeBroadcast(i,n,l)}},decodePush(i,n,r){let l=n.getUint8(1),c=n.getUint8(2),d=n.getUint8(3),h=this.HEADER_LENGTH+this.META_LENGTH-1,m=r.decode(i.slice(h,h+l));h=h+l;let p=r.decode(i.slice(h,h+c));h=h+c;let g=r.decode(i.slice(h,h+d));h=h+d;let w=i.slice(h,i.byteLength);return{join_ref:m,ref:null,topic:p,event:g,payload:w}},decodeReply(i,n,r){let l=n.getUint8(1),c=n.getUint8(2),d=n.getUint8(3),h=n.getUint8(4),m=this.HEADER_LENGTH+this.META_LENGTH,p=r.decode(i.slice(m,m+l));m=m+l;let g=r.decode(i.slice(m,m+c));m=m+c;let w=r.decode(i.slice(m,m+d));m=m+d;let v=r.decode(i.slice(m,m+h));m=m+h;let A=i.slice(m,i.byteLength),k={status:v,response:A};return{join_ref:p,ref:g,topic:w,event:qn.reply,payload:k}},decodeBroadcast(i,n,r){let l=n.getUint8(1),c=n.getUint8(2),d=this.HEADER_LENGTH+2,h=r.decode(i.slice(d,d+l));d=d+l;let m=r.decode(i.slice(d,d+c));d=d+c;let p=i.slice(d,i.byteLength);return{join_ref:null,ref:null,topic:h,event:m,payload:p}}},kg=class{constructor(i,n={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=n.timeout||_g,this.transport=n.transport||an.WebSocket||Ai,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=n.longPollFallbackMs,this.fallbackTimer=null;let r=null;try{r=an&&an.sessionStorage}catch{}this.sessionStore=n.sessionStorage||r,this.establishedConnections=0,this.defaultEncoder=fl.encode.bind(fl),this.defaultDecoder=fl.decode.bind(fl),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=n.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==Ai?(this.encode=n.encode||this.defaultEncoder,this.decode=n.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let l=null;Ri&&Ri.addEventListener&&(Ri.addEventListener("pagehide",c=>{this.conn&&(this.disconnect(),l=this.connectClock)}),Ri.addEventListener("pageshow",c=>{l===this.connectClock&&(l=null,this.connect())}),Ri.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=n.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=n.autoSendHeartbeat??!0,this.heartbeatCallback=n.heartbeatCallback??(()=>{}),this.rejoinAfterMs=c=>n.rejoinAfterMs?n.rejoinAfterMs(c):[1e3,2e3,5e3][c-1]||1e4,this.reconnectAfterMs=c=>n.reconnectAfterMs?n.reconnectAfterMs(c):[10,50,100,150,200,250,500,1e3,2e3][c-1]||5e3,this.logger=n.logger||null,!this.logger&&n.debug&&(this.logger=(c,d,h)=>{console.log(`${c}: ${d}`,h)}),this.longpollerTimeout=n.longpollerTimeout||2e4,this.params=Ns(n.params||{}),this.endPoint=`${i}/${hc.websocket}`,this.vsn=n.vsn||bg,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Nf(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{n.beforeReconnect&&await n.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=n.authToken}getLongPollTransport(){return Ai}replaceTransport(i){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=i}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let i=_l.appendParams(_l.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return i.charAt(0)!=="/"?i:i.charAt(1)==="/"?`${this.protocol()}:${i}`:`${this.protocol()}://${location.host}${i}`}disconnect(i,n,r){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,i&&i()},n,r)}connect(i){i&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Ns(i)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==Ai?this.connectWithFallback(Ai,this.longPollFallbackMs):this.transportConnect())}log(i,n,r){this.logger&&this.logger(i,n,r)}hasLogger(){return this.logger!==null}onOpen(i){let n=this.makeRef();return this.stateChangeCallbacks.open.push([n,i]),n}onClose(i){let n=this.makeRef();return this.stateChangeCallbacks.close.push([n,i]),n}onError(i){let n=this.makeRef();return this.stateChangeCallbacks.error.push([n,i]),n}onMessage(i){let n=this.makeRef();return this.stateChangeCallbacks.message.push([n,i]),n}onHeartbeat(i){this.heartbeatCallback=i}ping(i){if(!this.isConnected())return!1;let n=this.makeRef(),r=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:n});let l=this.onMessage(c=>{c.ref===n&&(this.off([l]),i(Date.now()-r))});return!0}transportName(i){switch(i){case Ai:return"LongPoll";default:return i.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let i;this.authToken&&(i=["phoenix",`${fc}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),i),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=n=>this.onConnError(n),this.conn.onmessage=n=>this.onConnMessage(n),this.conn.onclose=n=>this.onConnClose(n)}getSession(i){return this.sessionStore&&this.sessionStore.getItem(i)}storeSession(i,n){this.sessionStore&&this.sessionStore.setItem(i,n)}connectWithFallback(i,n=2500){clearTimeout(this.fallbackTimer);let r=!1,l=!0,c,d,h=this.transportName(i),m=p=>{this.log("transport",`falling back to ${h}...`,p),this.off([c,d]),l=!1,this.replaceTransport(i),this.transportConnect()};if(this.getSession(`phx:fallback:${h}`))return m("memorized");this.fallbackTimer=setTimeout(m,n),d=this.onError(p=>{this.log("transport","error",p),l&&!r&&(clearTimeout(this.fallbackTimer),m(p))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(r=!0,!l){let p=this.transportName(i);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${p}`,"true"),this.log("transport",`established ${p} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(m,n),this.ping(p=>{this.log("transport","connected to primary after",p),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(i){this.log("error","error in heartbeat callback",i)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Sg,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(i,n,r){if(!this.conn)return i&&i();const l=this.conn;this.waitForBufferDone(l,()=>{n?l.close(n,r||""):l.close(),this.waitForSocketClosed(l,()=>{this.conn===l&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),i&&i()})})}waitForBufferDone(i,n,r=1){if(r===5||!i.bufferedAmount){n();return}setTimeout(()=>{this.waitForBufferDone(i,n,r+1)},150*r)}waitForSocketClosed(i,n,r=1){if(r===5||i.readyState===sn.closed){n();return}setTimeout(()=>{this.waitForSocketClosed(i,n,r+1)},150*r)}onConnClose(i){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",i),this.triggerChanError(i),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",i)}onConnError(i){this.hasLogger()&&this.log("transport","error",i);let n=this.transport,r=this.establishedConnections;this.triggerStateCallbacks("error",i,n,r),(n===this.transport||r>0)&&this.triggerChanError(i)}triggerChanError(i){this.channels.forEach(n=>{n.isErrored()||n.isLeaving()||n.isClosed()||n.trigger(qn.error,i)})}connectionState(){switch(this.conn&&this.conn.readyState){case sn.connecting:return"connecting";case sn.open:return"open";case sn.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(i){this.off(i.stateChangeRefs),this.channels=this.channels.filter(n=>n!==i)}off(i){for(let n in this.stateChangeCallbacks)this.stateChangeCallbacks[n]=this.stateChangeCallbacks[n].filter(([r])=>i.indexOf(r)===-1)}channel(i,n={}){let r=new Ag(i,n,this);return this.channels.push(r),r}push(i){if(this.hasLogger()){let{topic:n,event:r,payload:l,ref:c,join_ref:d}=i;this.log("push",`${n} ${r} (${d}, ${c})`,l)}this.isConnected()?this.encode(i,n=>this.conn.send(n)):this.sendBuffer.push(()=>this.encode(i,n=>this.conn.send(n)))}makeRef(){let i=this.ref+1;return i===this.ref?this.ref=0:this.ref=i,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(i){this.log("error","error in heartbeat callback",i)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(i){this.log("error","error in heartbeat callback",i)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(i=>i()),this.sendBuffer=[])}onConnMessage(i){this.decode(i.data,n=>{let{topic:r,event:l,payload:c,ref:d,join_ref:h}=n;if(d&&d===this.pendingHeartbeatRef){const m=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(c.status==="ok"?"ok":"error",m)}catch(p){this.log("error","error in heartbeat callback",p)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${c.status||""} ${r} ${l} ${d&&"("+d+")"||""}`.trim(),c);for(let m=0;m<this.channels.length;m++){const p=this.channels[m];p.isMember(r,l,c,h)&&p.trigger(l,c,d,h)}this.triggerStateCallbacks("message",n)})}triggerStateCallbacks(i,...n){try{this.stateChangeCallbacks[i].forEach(([r,l])=>{try{l(...n)}catch(c){this.log("error",`error in ${i} callback`,c)}})}catch(r){this.log("error",`error triggering ${i} callbacks`,r)}}leaveOpenTopic(i){let n=this.channels.find(r=>r.topic===i&&(r.isJoined()||r.isJoining()));n&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${i}"`),n.leave())}};class qs{constructor(n,r){const l=Rg(r);this.presence=new Kg(n.getChannel(),l),this.presence.onJoin((c,d,h)=>{const m=qs.onJoinPayload(c,d,h);n.getChannel().trigger("presence",m)}),this.presence.onLeave((c,d,h)=>{const m=qs.onLeavePayload(c,d,h);n.getChannel().trigger("presence",m)}),this.presence.onSync(()=>{n.getChannel().trigger("presence",{event:"sync"})})}get state(){return qs.transformState(this.presence.state)}static transformState(n){return n=Og(n),Object.getOwnPropertyNames(n).reduce((r,l)=>{const c=n[l];return r[l]=bl(c),r},{})}static onJoinPayload(n,r,l){const c=Lh(r),d=bl(l);return{event:"join",key:n,currentPresences:c,newPresences:d}}static onLeavePayload(n,r,l){const c=Lh(r),d=bl(l);return{event:"leave",key:n,currentPresences:c,leftPresences:d}}}function bl(i){return i.metas.map(n=>(n.presence_ref=n.phx_ref,delete n.phx_ref,delete n.phx_ref_prev,n))}function Og(i){return JSON.parse(JSON.stringify(i))}function Rg(i){return(i==null?void 0:i.events)&&{events:i.events}}function Lh(i){return i!=null&&i.metas?bl(i):[]}var Bh;(function(i){i.SYNC="sync",i.JOIN="join",i.LEAVE="leave"})(Bh||(Bh={}));class xg{get state(){return this.presenceAdapter.state}constructor(n,r){this.channel=n,this.presenceAdapter=new qs(this.channel.channelAdapter,r)}}function Cg(i){if(i instanceof Error)return i;if(typeof i=="string")return new Error(i);if(i&&typeof i=="object"){const n=i;if(typeof n.code=="number"){const r=typeof n.reason=="string"&&n.reason?` (${n.reason})`:"";return new Error(`socket closed: ${n.code}${r}`,{cause:i})}return new Error("channel error: transport failure",{cause:i})}return new Error("channel error: connection lost")}class jg{constructor(n,r,l){const c=Ng(l);this.channel=n.getSocket().channel(r,c),this.socket=n}get state(){return this.channel.state}set state(n){this.channel.state=n}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(n,r){return this.channel.on(n,r)}off(n,r){this.channel.off(n,r)}subscribe(n){return this.channel.join(n)}unsubscribe(n){return this.channel.leave(n)}teardown(){this.channel.teardown()}onClose(n){this.channel.onClose(n)}onError(n){return this.channel.onError(n)}push(n,r,l){let c;try{c=this.channel.push(n,r,l)}catch{throw new Error(`tried to push '${n}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>dg){const d=this.channel.pushBuffer.shift();d.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${d.event}`,d.payload())}return c}updateJoinPayload(n){const r=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},r),n)}canPush(){return this.socket.isConnected()&&this.state===da.joined}isJoined(){return this.state===da.joined}isJoining(){return this.state===da.joining}isClosed(){return this.state===da.closed}isLeaving(){return this.state===da.leaving}updateFilterBindings(n){this.channel.filterBindings=n}updatePayloadTransform(n){this.channel.onMessage=n}getChannel(){return this.channel}}function Ng(i){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},i.config)}}const qg=/[,()"\\]/,Mg=i=>qg.test(i)||i!==i.trim(),Ug=i=>`"${i.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`,Ih=i=>{const n=i===null?"null":String(i);return Mg(n)?Ug(n):n},Dg=i=>i===null?"null":String(i),zg=(i,n)=>{if(i==="in"){const r=Array.isArray(n)?n:[n];if(r.length===0)throw new Error("Realtime `in` filter requires at least one value.");return`in.(${Array.from(new Set(r)).map(c=>Ih(c)).join(",")})`}return i==="is"?`is.${Dg(n)}`:`${i}.${Ih(n)}`};class Hg{constructor(){this.filters=[]}add(n,r,l,c=!1){const d=c?"not.":"";return this.filters.push(`${n}=${d}${zg(r,l)}`),this}eq(n,r){return this.add(n,"eq",r)}neq(n,r){return this.add(n,"neq",r)}gt(n,r){return this.add(n,"gt",r)}gte(n,r){return this.add(n,"gte",r)}lt(n,r){return this.add(n,"lt",r)}lte(n,r){return this.add(n,"lte",r)}in(n,r){return this.add(n,"in",r)}like(n,r){return this.add(n,"like",r)}ilike(n,r){return this.add(n,"ilike",r)}match(n,r){return this.add(n,"match",r)}imatch(n,r){return this.add(n,"imatch",r)}is(n,r){return this.add(n,"is",r)}isDistinct(n,r){return this.add(n,"isdistinct",r)}not(n,r,l){return this.add(n,r,l,!0)}build(){return this.filters.join(",")}toString(){return this.build()}}var Ph;(function(i){i.ALL="*",i.INSERT="INSERT",i.UPDATE="UPDATE",i.DELETE="DELETE"})(Ph||(Ph={}));var Ci;(function(i){i.BROADCAST="broadcast",i.PRESENCE="presence",i.POSTGRES_CHANGES="postgres_changes",i.SYSTEM="system"})(Ci||(Ci={}));var Mn;(function(i){i.SUBSCRIBED="SUBSCRIBED",i.TIMED_OUT="TIMED_OUT",i.CLOSED="CLOSED",i.CHANNEL_ERROR="CHANNEL_ERROR"})(Mn||(Mn={}));class Ms{get state(){return this.channelAdapter.state}set state(n){this.channelAdapter.state=n}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(n,r={config:{}},l){var c,d;if(this.topic=n,this.params=r,this.socket=l,this.bindings={},this.subTopic=n.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config),this.channelAdapter=new jg(this.socket.socketAdapter,n,this.params),this.presence=new xg(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=jf(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((d=(c=this.params.config)===null||c===void 0?void 0:c.broadcast)===null||d===void 0)&&d.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(n,r=this.timeout){var l,c,d;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:h,presence:m,private:p}}=this.params,g=(c=(l=this.bindings.postgres_changes)===null||l===void 0?void 0:l.map(k=>k.filter))!==null&&c!==void 0?c:[],w=!!this.bindings[Ci.PRESENCE]&&this.bindings[Ci.PRESENCE].length>0||((d=this.params.config.presence)===null||d===void 0?void 0:d.enabled)===!0,v={},A={broadcast:h,presence:Object.assign(Object.assign({},m),{enabled:w}),postgres_changes:g,private:p};this.socket.accessTokenValue&&(v.access_token=this.socket.accessTokenValue),this._onError(k=>{n==null||n(Mn.CHANNEL_ERROR,Cg(k))}),this._onClose(()=>n==null?void 0:n(Mn.CLOSED)),this.updateJoinPayload(Object.assign({config:A},v)),this._updateFilterMessage(),this.channelAdapter.subscribe(r).receive("ok",async({postgres_changes:k})=>{if(this.socket._isManualToken()||this.socket.setAuth(),k===void 0){n==null||n(Mn.SUBSCRIBED);return}this._updatePostgresBindings(k,n)}).receive("error",k=>{this.state=da.errored;const C=Object.values(k).join(", ")||"error";n==null||n(Mn.CHANNEL_ERROR,new Error(C,{cause:k}))}).receive("timeout",()=>{n==null||n(Mn.TIMED_OUT)})}return this}_updatePostgresBindings(n,r){var l;const c=this.bindings.postgres_changes,d=(l=c==null?void 0:c.length)!==null&&l!==void 0?l:0,h=[];for(let m=0;m<d;m++){const p=c[m],{filter:{event:g,schema:w,table:v,filter:A}}=p,k=n&&n[m];if(k&&k.event===g&&Ms.isFilterValueEqual(k.schema,w)&&Ms.isFilterValueEqual(k.table,v)&&Ms.isFilterValueEqual(k.filter,A))h.push(Object.assign(Object.assign({},p),{id:k.id}));else{this.unsubscribe(),this.state=da.errored,r==null||r(Mn.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=h,this.state!=da.errored&&r&&r(Mn.SUBSCRIBED)}presenceState(){return this.presence.state}async track(n,r={}){return await this.send({type:"presence",event:"track",payload:n},r.timeout||this.timeout)}async untrack(n={}){return await this.send({type:"presence",event:"untrack"},n)}on(n,r,l){const c=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),d=n===Ci.PRESENCE||n===Ci.POSTGRES_CHANGES;if(c&&d)throw this.socket.log("channel",`cannot add \`${n}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${n}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(n,r,l)}async httpSend(n,r,l={}){var c;if(r==null)return Promise.reject(new Error("Payload is required for httpSend()"));const d=r instanceof ArrayBuffer||ArrayBuffer.isView(r),h={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":d?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(h.Authorization=`Bearer ${this.socket.accessTokenValue}`);const m=new URL(this.broadcastEndpointURL);m.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(n)}`,this.private&&m.searchParams.set("private","true");const p={method:"POST",headers:h,body:d?r:JSON.stringify(r)},g=await this._fetchWithTimeout(m.toString(),p,(c=l.timeout)!==null&&c!==void 0?c:this.timeout);if(g.status===202)return{success:!0};if(g.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let w=g.statusText;try{const v=await g.json();w=v.error||v.message||w}catch{}return Promise.reject(new Error(w))}async send(n,r={}){var l,c;if(!this.channelAdapter.canPush()&&n.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:d,payload:h}=n,m={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(m.Authorization=`Bearer ${this.socket.accessTokenValue}`);const p={method:"POST",headers:m,body:JSON.stringify({messages:[{topic:this.subTopic,event:d,payload:h,private:this.private}]})};try{const g=await this._fetchWithTimeout(this.broadcastEndpointURL,p,(l=r.timeout)!==null&&l!==void 0?l:this.timeout);return await((c=g.body)===null||c===void 0?void 0:c.cancel()),g.ok?"ok":"error"}catch(g){return g instanceof Error&&g.name==="AbortError"?"timed out":"error"}}else return new Promise(d=>{var h,m,p;const g=this.channelAdapter.push(n.type,n,r.timeout||this.timeout);n.type==="broadcast"&&!(!((p=(m=(h=this.params)===null||h===void 0?void 0:h.config)===null||m===void 0?void 0:m.broadcast)===null||p===void 0)&&p.ack)&&d("ok"),g.receive("ok",()=>d("ok")),g.receive("error",()=>d("error")),g.receive("timeout",()=>d("timed out"))})}updateJoinPayload(n){this.channelAdapter.updateJoinPayload(n)}async unsubscribe(n=this.timeout){return new Promise(r=>{this.channelAdapter.unsubscribe(n).receive("ok",()=>r("ok")).receive("timeout",()=>r("timed out")).receive("error",()=>r("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(n,r,l){const c=new AbortController,d=setTimeout(()=>c.abort(),l),h=await this.socket.fetch(n,Object.assign(Object.assign({},r),{signal:c.signal}));return clearTimeout(d),h}_on(n,r,l){const c=n.toLocaleLowerCase(),d=r==null?void 0:r.filter;(d instanceof Hg||typeof d=="object"&&d!==null&&typeof d.build=="function")&&(r=Object.assign(Object.assign({},r),{filter:d.build()}));const h=this.channelAdapter.on(n,l),m={type:c,filter:r,callback:l,ref:h};return this.bindings[c]?this.bindings[c].push(m):this.bindings[c]=[m],this._updateFilterMessage(),this}_onClose(n){this.channelAdapter.onClose(n)}_onError(n){this.channelAdapter.onError(n)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((n,r,l)=>{var c,d,h,m,p,g,w;const v=n.event.toLocaleLowerCase();if(this._notThisChannelEvent(v,l))return!1;const A=(c=this.bindings[v])===null||c===void 0?void 0:c.find(k=>k.ref===n.ref);if(!A)return!0;if(["broadcast","presence","postgres_changes"].includes(v))if("id"in A){const k=A.id,C=(d=A.filter)===null||d===void 0?void 0:d.event;return k&&((h=r.ids)===null||h===void 0?void 0:h.includes(k))&&(C==="*"||(C==null?void 0:C.toLocaleLowerCase())===((m=r.data)===null||m===void 0?void 0:m.type.toLocaleLowerCase()))}else{const k=(g=(p=A==null?void 0:A.filter)===null||p===void 0?void 0:p.event)===null||g===void 0?void 0:g.toLocaleLowerCase();return k==="*"||k===((w=r==null?void 0:r.event)===null||w===void 0?void 0:w.toLocaleLowerCase())}else return A.type.toLocaleLowerCase()===v})}_notThisChannelEvent(n,r){const{close:l,error:c,leave:d,join:h}=xf;return r&&[l,c,d,h].includes(n)&&r!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((n,r,l)=>{if(typeof r=="object"&&"ids"in r){const c=r.data,{schema:d,table:h,commit_timestamp:m,type:p,errors:g}=c;return Object.assign(Object.assign({},{schema:d,table:h,commit_timestamp:m,eventType:p,new:{},old:{},errors:g}),this._getPayloadRecords(c))}return r})}copyBindings(n){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const r in n.bindings)for(const l of n.bindings[r])this._on(l.type,l.filter,l.callback)}static isFilterValueEqual(n,r){return(n??void 0)===(r??void 0)}_getPayloadRecords(n){const r={new:{},old:{}};return(n.type==="INSERT"||n.type==="UPDATE")&&(r.new=Hh(n.columns,n.record)),(n.type==="UPDATE"||n.type==="DELETE")&&(r.old=Hh(n.columns,n.old_record)),r}}class Lg{constructor(n,r){this.socket=new kg(n,r)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(n){this.socket.heartbeatCallback=n}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(n,r,l,c=1e4){return new Promise(d=>{setTimeout(()=>d("timeout"),c),this.socket.disconnect(()=>{n(),d("ok")},r,l)})}push(n){this.socket.push(n)}log(n,r,l){this.socket.log(n,r,l)}makeRef(){return this.socket.makeRef()}onOpen(n){this.socket.onOpen(n)}onClose(n){this.socket.onClose(n)}onError(n){this.socket.onError(n)}onMessage(n){this.socket.onMessage(n)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==cc.connecting}isDisconnecting(){return this.socket.connectionState()==cc.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const Vh={HEARTBEAT_INTERVAL:25e3},Bg=[1e3,2e3,5e3,1e4],Ig=1e4;function Pg(){const i=new Map;return{get length(){return i.size},clear(){i.clear()},getItem(n){return i.has(n)?i.get(n):null},key(n){var r;return(r=Array.from(i.keys())[n])!==null&&r!==void 0?r:null},removeItem(n){i.delete(n)},setItem(n,r){i.set(n,String(r))}}}function Vg(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return Pg()}const $g=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Gg{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(n,r){var l;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new hg,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=d=>d?(...h)=>d(...h):(...h)=>fetch(...h),!(!((l=r==null?void 0:r.params)===null||l===void 0)&&l.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=r.params.apikey;const c=this._initializeOptions(r);this.socketAdapter=new Lg(n,c),this.httpEndpoint=jf(n),this.fetch=this._resolveFetch(r==null?void 0:r.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(n){const r=n.message;throw r.includes("Node.js")?new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${r}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(n,r){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},n,r)}getChannels(){return this.channels}async removeChannel(n){const r=await n.unsubscribe();return r==="ok"&&n.teardown(),r}async removeAllChannels(){const n=this.channels.map(async l=>{const c=await l.unsubscribe();return l.teardown(),c}),r=await Promise.all(n);return await this.disconnect(),r}log(n,r,l){this.socketAdapter.log(n,r,l)}connectionState(){return this.socketAdapter.connectionState()||cc.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(n,r={config:{}}){const l=`realtime:${n}`,c=this.getChannels().find(d=>d.topic===l);if(c)return c;{const d=new Ms(`realtime:${n}`,r,this);return this._cancelPendingDisconnect(),this.channels.push(d),d}}push(n){this.socketAdapter.push(n)}async setAuth(n=null){this._authPromise=this._performAuth(n);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(n){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(n)}_makeRef(){return this.socketAdapter.makeRef()}_remove(n){this.channels=this.channels.filter(r=>r.topic!==n.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(n=null){let r,l=!1;if(n)r=n,l=!0;else if(this.accessToken)try{r=await this.accessToken()}catch(c){this.log("error","Error fetching access token from callback",c),r=this.accessTokenValue}else r=this.accessTokenValue;l?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(c=>{const d={access_token:r,version:lg};r&&c.updateJoinPayload(d),c.joinedOnce&&c.channelAdapter.isJoined()&&c.channelAdapter.push(xf.access_token,{access_token:r})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(n="general"){this._isManualToken()||this.setAuth().catch(r=>{this.log("error",`Error setting auth in ${n}`,r)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(r=>{this.log("error","error waiting for auth on connect",r)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(n=>{n.ref&&n.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(n){return(r,l)=>{r=="sent"&&this._setAuthSafely(),n&&n(r,l)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const n=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(n),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(n){let r;if(n)r=n;else{const l=new Blob([$g],{type:"application/javascript"});r=URL.createObjectURL(l)}return r}_initializeOptions(n){var r,l,c,d,h,m,p,g,w,v,A,k;this.worker=(r=n==null?void 0:n.worker)!==null&&r!==void 0?r:!1,this.accessToken=(l=n==null?void 0:n.accessToken)!==null&&l!==void 0?l:null;const C={};C.timeout=(c=n==null?void 0:n.timeout)!==null&&c!==void 0?c:cg,C.heartbeatIntervalMs=(d=n==null?void 0:n.heartbeatIntervalMs)!==null&&d!==void 0?d:Vh.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(h=n==null?void 0:n.disconnectOnEmptyChannelsAfterMs)!==null&&h!==void 0?h:2*((m=n==null?void 0:n.heartbeatIntervalMs)!==null&&m!==void 0?m:Vh.HEARTBEAT_INTERVAL),C.transport=(p=n==null?void 0:n.transport)!==null&&p!==void 0?p:sg.getWebSocketConstructor(),C.params=n==null?void 0:n.params,C.logger=n==null?void 0:n.logger,C.heartbeatCallback=this._wrapHeartbeatCallback(n==null?void 0:n.heartbeatCallback),C.sessionStorage=(g=n==null?void 0:n.sessionStorage)!==null&&g!==void 0?g:Vg(),C.reconnectAfterMs=(w=n==null?void 0:n.reconnectAfterMs)!==null&&w!==void 0?w:(B=>Bg[B-1]||Ig);let D,P;const V=(v=n==null?void 0:n.vsn)!==null&&v!==void 0?v:ug;switch(V){case og:D=(B,L)=>L(JSON.stringify(B)),P=(B,L)=>L(JSON.parse(B));break;case Rf:D=this.serializer.encode.bind(this.serializer),P=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${C.vsn}`)}if(C.vsn=V,C.encode=(A=n==null?void 0:n.encode)!==null&&A!==void 0?A:D,C.decode=(k=n==null?void 0:n.decode)!==null&&k!==void 0?k:P,C.beforeReconnect=this._reconnectAuth.bind(this),(n!=null&&n.logLevel||n!=null&&n.log_level)&&(this.logLevel=n.logLevel||n.log_level,C.params=Object.assign(Object.assign({},C.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=n==null?void 0:n.workerUrl,C.autoSendHeartbeat=!this.worker}return C}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var Ds=class extends Error{constructor(i,n){var r;super(i),this.name="IcebergError",this.status=n.status,this.icebergType=n.icebergType,this.icebergCode=n.icebergCode,this.details=n.details,this.isCommitStateUnknown=n.icebergType==="CommitStateUnknownException"||[500,502,504].includes(n.status)&&((r=n.icebergType)==null?void 0:r.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function Zg(i,n,r){const l=new URL(n,i);if(r)for(const[c,d]of Object.entries(r))d!==void 0&&l.searchParams.set(c,d);return l.toString()}async function Yg(i){return!i||i.type==="none"?{}:i.type==="bearer"?{Authorization:`Bearer ${i.token}`}:i.type==="header"?{[i.name]:i.value}:i.type==="custom"?await i.getHeaders():{}}function Jg(i){const n=i.fetchImpl??globalThis.fetch;return{async request({method:r,path:l,query:c,body:d,headers:h}){const m=Zg(i.baseUrl,l,c),p=await Yg(i.auth),g=await n(m,{method:r,headers:{...d?{"Content-Type":"application/json"}:{},...p,...h},body:d?JSON.stringify(d):void 0}),w=await g.text(),v=(g.headers.get("content-type")||"").includes("application/json"),A=v&&w?JSON.parse(w):w;if(!g.ok){const k=v?A:void 0,C=k==null?void 0:k.error;throw new Ds((C==null?void 0:C.message)??`Request failed with status ${g.status}`,{status:g.status,icebergType:C==null?void 0:C.type,icebergCode:C==null?void 0:C.code,details:k})}return{status:g.status,headers:g.headers,data:A}}}}function pl(i){return i.join("")}var Xg=class{constructor(i,n=""){this.client=i,this.prefix=n}async listNamespaces(i){const n=i?{parent:pl(i.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:n})).data.namespaces.map(l=>({namespace:l}))}async createNamespace(i,n){const r={namespace:i.namespace,properties:n==null?void 0:n.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:r})).data}async dropNamespace(i){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${pl(i.namespace)}`})}async loadNamespaceMetadata(i){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${pl(i.namespace)}`})).data.properties}}async namespaceExists(i){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${pl(i.namespace)}`}),!0}catch(n){if(n instanceof Ds&&n.status===404)return!1;throw n}}async createNamespaceIfNotExists(i,n){try{return await this.createNamespace(i,n)}catch(r){if(r instanceof Ds&&r.status===409)return;throw r}}};function Ti(i){return i.join("")}var Qg=class{constructor(i,n="",r){this.client=i,this.prefix=n,this.accessDelegation=r}async listTables(i){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Ti(i.namespace)}/tables`})).data.identifiers}async createTable(i,n){const r={};return this.accessDelegation&&(r["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Ti(i.namespace)}/tables`,body:n,headers:r})).data.metadata}async updateTable(i,n){const r=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Ti(i.namespace)}/tables/${i.name}`,body:n});return{"metadata-location":r.data["metadata-location"],metadata:r.data.metadata}}async dropTable(i,n){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Ti(i.namespace)}/tables/${i.name}`,query:{purgeRequested:String((n==null?void 0:n.purge)??!1)}})}async loadTable(i){const n={};return this.accessDelegation&&(n["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Ti(i.namespace)}/tables/${i.name}`,headers:n})).data.metadata}async tableExists(i){const n={};this.accessDelegation&&(n["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Ti(i.namespace)}/tables/${i.name}`,headers:n}),!0}catch(r){if(r instanceof Ds&&r.status===404)return!1;throw r}}async createTableIfNotExists(i,n){try{return await this.createTable(i,n)}catch(r){if(r instanceof Ds&&r.status===409)return await this.loadTable({namespace:i.namespace,name:n.name});throw r}}},Fg=class{constructor(i){var l;let n="v1";i.catalogName&&(n+=`/${i.catalogName}`);const r=i.baseUrl.endsWith("/")?i.baseUrl:`${i.baseUrl}/`;this.client=Jg({baseUrl:r,auth:i.auth,fetchImpl:i.fetch}),this.accessDelegation=(l=i.accessDelegation)==null?void 0:l.join(","),this.namespaceOps=new Xg(this.client,n),this.tableOps=new Qg(this.client,n,this.accessDelegation)}async listNamespaces(i){return this.namespaceOps.listNamespaces(i)}async createNamespace(i,n){return this.namespaceOps.createNamespace(i,n)}async dropNamespace(i){await this.namespaceOps.dropNamespace(i)}async loadNamespaceMetadata(i){return this.namespaceOps.loadNamespaceMetadata(i)}async listTables(i){return this.tableOps.listTables(i)}async createTable(i,n){return this.tableOps.createTable(i,n)}async updateTable(i,n){return this.tableOps.updateTable(i,n)}async dropTable(i,n){await this.tableOps.dropTable(i,n)}async loadTable(i){return this.tableOps.loadTable(i)}async namespaceExists(i){return this.namespaceOps.namespaceExists(i)}async tableExists(i){return this.tableOps.tableExists(i)}async createNamespaceIfNotExists(i,n){return this.namespaceOps.createNamespaceIfNotExists(i,n)}async createTableIfNotExists(i,n){return this.tableOps.createTableIfNotExists(i,n)}};function zs(i){"@babel/helpers - typeof";return zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},zs(i)}function Wg(i,n){if(zs(i)!="object"||!i)return i;var r=i[Symbol.toPrimitive];if(r!==void 0){var l=r.call(i,n);if(zs(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function e3(i){var n=Wg(i,"string");return zs(n)=="symbol"?n:n+""}function t3(i,n,r){return(n=e3(n))in i?Object.defineProperty(i,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[n]=r,i}function $h(i,n){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);n&&(l=l.filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable})),r.push.apply(r,l)}return r}function ne(i){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?$h(Object(r),!0).forEach(function(l){t3(i,l,r[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):$h(Object(r)).forEach(function(l){Object.defineProperty(i,l,Object.getOwnPropertyDescriptor(r,l))})}return i}var Nl=class extends Error{constructor(i,n="storage",r,l){super(i),this.__isStorageError=!0,this.namespace=n,this.name=n==="vectors"?"StorageVectorsError":"StorageError",this.status=r,this.statusCode=l}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function ql(i){return typeof i=="object"&&i!==null&&"__isStorageError"in i}var pc=class extends Nl{constructor(i,n,r,l="storage"){super(i,l,n,r),this.name=l==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=n,this.statusCode=r}toJSON(){return ne({},super.toJSON())}},qf=class extends Nl{constructor(i,n,r="storage"){super(i,r),this.name=r==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=n}};function Sl(i,n,r){const l=ne({},i),c=n.toLowerCase();for(const d of Object.keys(l))d.toLowerCase()===c&&delete l[d];return l[c]=r,l}function n3(i){const n={};for(const[r,l]of Object.entries(i))n[r.toLowerCase()]=l;return n}const a3=i=>i?(...n)=>i(...n):(...n)=>fetch(...n),i3=i=>{if(typeof i!="object"||i===null)return!1;const n=Object.getPrototypeOf(i);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},mc=i=>{if(Array.isArray(i))return i.map(r=>mc(r));if(typeof i=="function"||i!==Object(i))return i;const n={};return Object.entries(i).forEach(([r,l])=>{const c=r.replace(/([-_][a-z])/gi,d=>d.toUpperCase().replace(/[-_]/g,""));n[c]=mc(l)}),n},s3=i=>!i||typeof i!="string"||i.length===0||i.length>100||i.trim()!==i||i.includes("/")||i.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(i),Gh=i=>{if(typeof i=="object"&&i!==null){const n=i;if(typeof n.msg=="string")return n.msg;if(typeof n.message=="string")return n.message;if(typeof n.error_description=="string")return n.error_description;if(typeof n.error=="string")return n.error;if(typeof n.error=="object"&&n.error!==null){const r=n.error;if(typeof r.message=="string")return r.message}}return JSON.stringify(i)},r3=async(i,n,r,l)=>{if(i!==null&&typeof i=="object"&&"json"in i&&typeof i.json=="function"){const c=i;let d=parseInt(String(c.status),10);Number.isFinite(d)||(d=500),c.json().then(h=>{const m=(h==null?void 0:h.statusCode)||(h==null?void 0:h.code)||d+"";n(new pc(Gh(h),d,m,l))}).catch(()=>{const h=d+"";n(new pc(c.statusText||`HTTP ${d} error`,d,h,l))})}else n(new qf(Gh(i),i,l))},l3=(i,n,r,l)=>{const c={method:i,headers:(n==null?void 0:n.headers)||{}};if(i==="GET"||i==="HEAD"||!l)return ne(ne({},c),r);if(i3(l)){var d;const h=(n==null?void 0:n.headers)||{};let m;for(const[p,g]of Object.entries(h))p.toLowerCase()==="content-type"&&(m=g);c.headers=Sl(h,"Content-Type",(d=m)!==null&&d!==void 0?d:"application/json"),c.body=JSON.stringify(l)}else c.body=l;return n!=null&&n.duplex&&(c.duplex=n.duplex),ne(ne({},c),r)};async function Rs(i,n,r,l,c,d,h){return new Promise((m,p)=>{i(r,l3(n,l,c,d)).then(g=>{if(!g.ok)throw g;if(l!=null&&l.noResolveJson)return g;if(h==="vectors"){const w=g.headers.get("content-type");if(g.headers.get("content-length")==="0"||g.status===204)return{};if(!w||!w.includes("application/json"))return{}}return g.json()}).then(g=>m(g)).catch(g=>r3(g,p,l,h))})}function Mf(i="storage"){return{get:async(n,r,l,c)=>Rs(n,"GET",r,l,c,void 0,i),post:async(n,r,l,c,d)=>Rs(n,"POST",r,c,d,l,i),put:async(n,r,l,c,d)=>Rs(n,"PUT",r,c,d,l,i),head:async(n,r,l,c)=>Rs(n,"HEAD",r,ne(ne({},l),{},{noResolveJson:!0}),c,void 0,i),remove:async(n,r,l,c,d)=>Rs(n,"DELETE",r,c,d,l,i)}}const o3=Mf("storage"),{get:Hs,post:Xt,put:gc,head:u3,remove:Ls}=o3,Nt=Mf("vectors");var Ni=class{constructor(i,n={},r,l="storage"){this.shouldThrowOnError=!1,this.url=i,this.headers=n3(n),this.fetch=a3(r),this.namespace=l}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(i,n){return this.headers=Sl(this.headers,i,n),this}async handleOperation(i){var n=this;try{return{data:await i(),error:null}}catch(r){if(n.shouldThrowOnError)throw r;if(ql(r))return{data:null,error:r};throw r}}};let Uf;Uf=Symbol.toStringTag;var c3=class{constructor(i,n){this.downloadFn=i,this.shouldThrowOnError=n,this[Uf]="StreamDownloadBuilder",this.promise=null}then(i,n){return this.getPromise().then(i,n)}catch(i){return this.getPromise().catch(i)}finally(i){return this.getPromise().finally(i)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var i=this;try{return{data:(await i.downloadFn()).body,error:null}}catch(n){if(i.shouldThrowOnError)throw n;if(ql(n))return{data:null,error:n};throw n}}};let Df;Df=Symbol.toStringTag;var d3=class{constructor(i,n){this.downloadFn=i,this.shouldThrowOnError=n,this[Df]="BlobDownloadBuilder",this.promise=null}asStream(){return new c3(this.downloadFn,this.shouldThrowOnError)}then(i,n){return this.getPromise().then(i,n)}catch(i){return this.getPromise().catch(i)}finally(i){return this.getPromise().finally(i)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var i=this;try{return{data:await(await i.downloadFn()).blob(),error:null}}catch(n){if(i.shouldThrowOnError)throw n;if(ql(n))return{data:null,error:n};throw n}}};const tc={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Zh={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var h3=class extends Ni{constructor(i,n={},r,l){super(i,n,l,"storage"),this.bucketId=r}async uploadOrUpdate(i,n,r,l){var c=this;return c.handleOperation(async()=>{let d;const h=ne(ne({},Zh),l);let m=ne(ne({},c.headers),i==="POST"&&{"x-upsert":String(h.upsert)});const p=h.metadata;if(typeof Blob<"u"&&r instanceof Blob?(d=new FormData,d.append("cacheControl",h.cacheControl),p&&d.append("metadata",c.encodeMetadata(p)),d.append("",r)):typeof FormData<"u"&&r instanceof FormData?(d=r,d.has("cacheControl")||d.append("cacheControl",h.cacheControl),p&&!d.has("metadata")&&d.append("metadata",c.encodeMetadata(p))):(d=r,m["cache-control"]=`max-age=${h.cacheControl}`,m["content-type"]=h.contentType,p&&(m["x-metadata"]=c.toBase64(c.encodeMetadata(p))),(typeof ReadableStream<"u"&&d instanceof ReadableStream||d&&typeof d=="object"&&"pipe"in d&&typeof d.pipe=="function")&&!h.duplex&&(h.duplex="half")),l!=null&&l.headers)for(const[A,k]of Object.entries(l.headers))m=Sl(m,A,k);const g=c._removeEmptyFolders(n),w=c._getFinalPath(g),v=await(i=="PUT"?gc:Xt)(c.fetch,`${c.url}/object/${w}`,d,ne({headers:m},h!=null&&h.duplex?{duplex:h.duplex}:{}));return{path:g,id:v.Id,fullPath:v.Key}})}async upload(i,n,r){return this.uploadOrUpdate("POST",i,n,r)}async uploadToSignedUrl(i,n,r,l){var c=this;const d=c._removeEmptyFolders(i),h=c._getFinalPath(d),m=new URL(c.url+`/object/upload/sign/${h}`);return m.searchParams.set("token",n),c.handleOperation(async()=>{let p;const g=ne(ne({},Zh),l);let w=ne(ne({},c.headers),{"x-upsert":String(g.upsert)});const v=g.metadata;if(typeof Blob<"u"&&r instanceof Blob?(p=new FormData,p.append("cacheControl",g.cacheControl),v&&p.append("metadata",c.encodeMetadata(v)),p.append("",r)):typeof FormData<"u"&&r instanceof FormData?(p=r,p.has("cacheControl")||p.append("cacheControl",g.cacheControl),v&&!p.has("metadata")&&p.append("metadata",c.encodeMetadata(v))):(p=r,w["cache-control"]=`max-age=${g.cacheControl}`,w["content-type"]=g.contentType,v&&(w["x-metadata"]=c.toBase64(c.encodeMetadata(v))),(typeof ReadableStream<"u"&&p instanceof ReadableStream||p&&typeof p=="object"&&"pipe"in p&&typeof p.pipe=="function")&&!g.duplex&&(g.duplex="half")),l!=null&&l.headers)for(const[A,k]of Object.entries(l.headers))w=Sl(w,A,k);return{path:d,fullPath:(await gc(c.fetch,m.toString(),p,ne({headers:w},g!=null&&g.duplex?{duplex:g.duplex}:{}))).Key}})}async createSignedUploadUrl(i,n){var r=this;return r.handleOperation(async()=>{let l=r._getFinalPath(i);const c=ne({},r.headers);n!=null&&n.upsert&&(c["x-upsert"]="true");const d=await Xt(r.fetch,`${r.url}/object/upload/sign/${l}`,{},{headers:c}),h=new URL(r.url+d.url),m=h.searchParams.get("token");if(!m)throw new Nl("No token returned by API");return{signedUrl:h.toString(),path:i,token:m}})}async update(i,n,r){return this.uploadOrUpdate("PUT",i,n,r)}async move(i,n,r){var l=this;return l.handleOperation(async()=>await Xt(l.fetch,`${l.url}/object/move`,{bucketId:l.bucketId,sourceKey:i,destinationKey:n,destinationBucket:r==null?void 0:r.destinationBucket},{headers:l.headers}))}async copy(i,n,r){var l=this;return l.handleOperation(async()=>({path:(await Xt(l.fetch,`${l.url}/object/copy`,{bucketId:l.bucketId,sourceKey:i,destinationKey:n,destinationBucket:r==null?void 0:r.destinationBucket},{headers:l.headers})).Key}))}async createSignedUrl(i,n,r){var l=this;return l.handleOperation(async()=>{let c=l._getFinalPath(i);const d=typeof(r==null?void 0:r.transform)=="object"&&r.transform!==null&&Object.keys(r.transform).length>0;let h=await Xt(l.fetch,`${l.url}/object/sign/${c}`,ne({expiresIn:n},d?{transform:r.transform}:{}),{headers:l.headers});const m=new URLSearchParams;r!=null&&r.download&&m.set("download",r.download===!0?"":r.download),(r==null?void 0:r.cacheNonce)!=null&&m.set("cacheNonce",String(r.cacheNonce));const p=m.toString();return{signedUrl:encodeURI(`${l.url}${h.signedURL}${p?`&${p}`:""}`)}})}async createSignedUrls(i,n,r){var l=this;return l.handleOperation(async()=>{const c=await Xt(l.fetch,`${l.url}/object/sign/${l.bucketId}`,{expiresIn:n,paths:i},{headers:l.headers}),d=new URLSearchParams;r!=null&&r.download&&d.set("download",r.download===!0?"":r.download),(r==null?void 0:r.cacheNonce)!=null&&d.set("cacheNonce",String(r.cacheNonce));const h=d.toString();return c.map(m=>ne(ne({},m),{},{signedUrl:m.signedURL?encodeURI(`${l.url}${m.signedURL}${h?`&${h}`:""}`):null}))})}download(i,n,r){const l=typeof(n==null?void 0:n.transform)=="object"&&n.transform!==null&&Object.keys(n.transform).length>0?"render/image/authenticated":"object",c=new URLSearchParams;n!=null&&n.transform&&this.applyTransformOptsToQuery(c,n.transform),(n==null?void 0:n.cacheNonce)!=null&&c.set("cacheNonce",String(n.cacheNonce));const d=c.toString(),h=this._getFinalPath(i),m=()=>Hs(this.fetch,`${this.url}/${l}/${h}${d?`?${d}`:""}`,{headers:this.headers,noResolveJson:!0},r);return new d3(m,this.shouldThrowOnError)}async info(i){var n=this;const r=n._getFinalPath(i);return n.handleOperation(async()=>mc(await Hs(n.fetch,`${n.url}/object/info/${r}`,{headers:n.headers})))}async exists(i){var n=this;const r=n._getFinalPath(i);try{return await u3(n.fetch,`${n.url}/object/${r}`,{headers:n.headers}),{data:!0,error:null}}catch(c){if(n.shouldThrowOnError)throw c;if(ql(c)){var l;const d=c instanceof pc?c.status:c instanceof qf?(l=c.originalError)===null||l===void 0?void 0:l.status:void 0;if(d!==void 0&&[400,404].includes(d))return{data:!1,error:c}}throw c}}getPublicUrl(i,n){const r=this._getFinalPath(i),l=new URLSearchParams;n!=null&&n.download&&l.set("download",n.download===!0?"":n.download),n!=null&&n.transform&&this.applyTransformOptsToQuery(l,n.transform),(n==null?void 0:n.cacheNonce)!=null&&l.set("cacheNonce",String(n.cacheNonce));const c=l.toString(),d=typeof(n==null?void 0:n.transform)=="object"&&n.transform!==null&&Object.keys(n.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${d}/public/${r}`)+(c?`?${c}`:"")}}}async remove(i){var n=this;return n.handleOperation(async()=>await Ls(n.fetch,`${n.url}/object/${n.bucketId}`,{prefixes:i},{headers:n.headers}))}async purgeCache(i,n,r){var l=this;return l.handleOperation(async()=>{const c=l._getFinalPath(i),d=new URLSearchParams;n!=null&&n.transformations&&d.set("transformations","true");const h=d.toString();return await Ls(l.fetch,`${l.url}/cdn/${c}${h?`?${h}`:""}`,{},{headers:l.headers},r)})}async list(i,n,r){var l=this;return l.handleOperation(async()=>{const c=n!=null&&n.sortBy?ne(ne({},tc.sortBy),n.sortBy):tc.sortBy,d=ne(ne(ne({},tc),n),{},{sortBy:c,prefix:i||""});return await Xt(l.fetch,`${l.url}/object/list/${l.bucketId}`,d,{headers:l.headers},r)})}async listV2(i,n){var r=this;return r.handleOperation(async()=>{const l=ne({},i);return await Xt(r.fetch,`${r.url}/object/list-v2/${r.bucketId}`,l,{headers:r.headers},n)})}encodeMetadata(i){return JSON.stringify(i)}toBase64(i){return typeof Buffer<"u"?Buffer.from(i).toString("base64"):btoa(i)}_getFinalPath(i){return`${this.bucketId}/${i.replace(/^\/+/,"")}`}_removeEmptyFolders(i){return i.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(i,n){return n.width&&i.set("width",n.width.toString()),n.height&&i.set("height",n.height.toString()),n.resize&&i.set("resize",n.resize),n.format&&i.set("format",n.format),n.quality&&i.set("quality",n.quality.toString()),i}};const f3="2.109.0",$s={"X-Client-Info":`storage-js/${f3}`};var p3=class extends Ni{constructor(i,n={},r,l){const c=new URL(i);l!=null&&l.useNewHostname&&/supabase\.(co|in|red)$/.test(c.hostname)&&!c.hostname.includes("storage.supabase.")&&(c.hostname=c.hostname.replace("supabase.","storage.supabase."));const d=c.href.replace(/\/$/,""),h=ne(ne({},$s),n);super(d,h,r,"storage")}async listBuckets(i){var n=this;return n.handleOperation(async()=>{const r=n.listBucketOptionsToQueryString(i);return await Hs(n.fetch,`${n.url}/bucket${r}`,{headers:n.headers})})}async getBucket(i){var n=this;return n.handleOperation(async()=>await Hs(n.fetch,`${n.url}/bucket/${i}`,{headers:n.headers}))}async createBucket(i,n={public:!1}){var r=this;return r.handleOperation(async()=>await Xt(r.fetch,`${r.url}/bucket`,{id:i,name:i,type:n.type,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:r.headers}))}async updateBucket(i,n){var r=this;return r.handleOperation(async()=>await gc(r.fetch,`${r.url}/bucket/${i}`,{id:i,name:i,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:r.headers}))}async emptyBucket(i){var n=this;return n.handleOperation(async()=>await Xt(n.fetch,`${n.url}/bucket/${i}/empty`,{},{headers:n.headers}))}async deleteBucket(i){var n=this;return n.handleOperation(async()=>await Ls(n.fetch,`${n.url}/bucket/${i}`,{},{headers:n.headers}))}async purgeBucketCache(i,n,r){var l=this;return l.handleOperation(async()=>{const c=new URLSearchParams;n!=null&&n.transformations&&c.set("transformations","true");const d=c.toString();return await Ls(l.fetch,`${l.url}/cdn/${i}${d?`?${d}`:""}`,{},{headers:l.headers},r)})}listBucketOptionsToQueryString(i){const n={};return i&&("limit"in i&&(n.limit=String(i.limit)),"offset"in i&&(n.offset=String(i.offset)),i.search&&(n.search=i.search),i.sortColumn&&(n.sortColumn=i.sortColumn),i.sortOrder&&(n.sortOrder=i.sortOrder)),Object.keys(n).length>0?"?"+new URLSearchParams(n).toString():""}},m3=class extends Ni{constructor(i,n={},r){const l=i.replace(/\/$/,""),c=ne(ne({},$s),n);super(l,c,r,"storage")}async createBucket(i){var n=this;return n.handleOperation(async()=>await Xt(n.fetch,`${n.url}/bucket`,{name:i},{headers:n.headers}))}async listBuckets(i){var n=this;return n.handleOperation(async()=>{const r=new URLSearchParams;(i==null?void 0:i.limit)!==void 0&&r.set("limit",i.limit.toString()),(i==null?void 0:i.offset)!==void 0&&r.set("offset",i.offset.toString()),i!=null&&i.sortColumn&&r.set("sortColumn",i.sortColumn),i!=null&&i.sortOrder&&r.set("sortOrder",i.sortOrder),i!=null&&i.search&&r.set("search",i.search);const l=r.toString(),c=l?`${n.url}/bucket?${l}`:`${n.url}/bucket`;return await Hs(n.fetch,c,{headers:n.headers})})}async deleteBucket(i){var n=this;return n.handleOperation(async()=>await Ls(n.fetch,`${n.url}/bucket/${i}`,{},{headers:n.headers}))}from(i){var n=this;if(!s3(i))throw new Nl("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const r=new Fg({baseUrl:this.url,catalogName:i,auth:{type:"custom",getHeaders:async()=>n.headers},fetch:this.fetch}),l=this.shouldThrowOnError;return new Proxy(r,{get(c,d){const h=c[d];return typeof h!="function"?h:async(...m)=>{try{return{data:await h.apply(c,m),error:null}}catch(p){if(l)throw p;return{data:null,error:p}}}}})}},g3=class extends Ni{constructor(i,n={},r){const l=i.replace(/\/$/,""),c=ne(ne({},$s),{},{"Content-Type":"application/json"},n);super(l,c,r,"vectors")}async createIndex(i){var n=this;return n.handleOperation(async()=>await Nt.post(n.fetch,`${n.url}/CreateIndex`,i,{headers:n.headers})||{})}async getIndex(i,n){var r=this;return r.handleOperation(async()=>await Nt.post(r.fetch,`${r.url}/GetIndex`,{vectorBucketName:i,indexName:n},{headers:r.headers}))}async listIndexes(i){var n=this;return n.handleOperation(async()=>await Nt.post(n.fetch,`${n.url}/ListIndexes`,i,{headers:n.headers}))}async deleteIndex(i,n){var r=this;return r.handleOperation(async()=>await Nt.post(r.fetch,`${r.url}/DeleteIndex`,{vectorBucketName:i,indexName:n},{headers:r.headers})||{})}},y3=class extends Ni{constructor(i,n={},r){const l=i.replace(/\/$/,""),c=ne(ne({},$s),{},{"Content-Type":"application/json"},n);super(l,c,r,"vectors")}async putVectors(i){var n=this;if(i.vectors.length<1||i.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return n.handleOperation(async()=>await Nt.post(n.fetch,`${n.url}/PutVectors`,i,{headers:n.headers})||{})}async getVectors(i){var n=this;return n.handleOperation(async()=>await Nt.post(n.fetch,`${n.url}/GetVectors`,i,{headers:n.headers}))}async listVectors(i){var n=this;if(i.segmentCount!==void 0){if(i.segmentCount<1||i.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(i.segmentIndex!==void 0&&(i.segmentIndex<0||i.segmentIndex>=i.segmentCount))throw new Error(`segmentIndex must be between 0 and ${i.segmentCount-1}`)}return n.handleOperation(async()=>await Nt.post(n.fetch,`${n.url}/ListVectors`,i,{headers:n.headers}))}async queryVectors(i){var n=this;return n.handleOperation(async()=>await Nt.post(n.fetch,`${n.url}/QueryVectors`,i,{headers:n.headers}))}async deleteVectors(i){var n=this;if(i.keys.length<1||i.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return n.handleOperation(async()=>await Nt.post(n.fetch,`${n.url}/DeleteVectors`,i,{headers:n.headers})||{})}},v3=class extends Ni{constructor(i,n={},r){const l=i.replace(/\/$/,""),c=ne(ne({},$s),{},{"Content-Type":"application/json"},n);super(l,c,r,"vectors")}async createBucket(i){var n=this;return n.handleOperation(async()=>await Nt.post(n.fetch,`${n.url}/CreateVectorBucket`,{vectorBucketName:i},{headers:n.headers})||{})}async getBucket(i){var n=this;return n.handleOperation(async()=>await Nt.post(n.fetch,`${n.url}/GetVectorBucket`,{vectorBucketName:i},{headers:n.headers}))}async listBuckets(i={}){var n=this;return n.handleOperation(async()=>await Nt.post(n.fetch,`${n.url}/ListVectorBuckets`,i,{headers:n.headers}))}async deleteBucket(i){var n=this;return n.handleOperation(async()=>await Nt.post(n.fetch,`${n.url}/DeleteVectorBucket`,{vectorBucketName:i},{headers:n.headers})||{})}},w3=class extends v3{constructor(i,n={}){super(i,n.headers||{},n.fetch)}from(i){return new b3(this.url,this.headers,i,this.fetch)}async createBucket(i){var n=()=>super.createBucket,r=this;return n().call(r,i)}async getBucket(i){var n=()=>super.getBucket,r=this;return n().call(r,i)}async listBuckets(i={}){var n=()=>super.listBuckets,r=this;return n().call(r,i)}async deleteBucket(i){var n=()=>super.deleteBucket,r=this;return n().call(r,i)}},b3=class extends g3{constructor(i,n,r,l){super(i,n,l),this.vectorBucketName=r}async createIndex(i){var n=()=>super.createIndex,r=this;return n().call(r,ne(ne({},i),{},{vectorBucketName:r.vectorBucketName}))}async listIndexes(i={}){var n=()=>super.listIndexes,r=this;return n().call(r,ne(ne({},i),{},{vectorBucketName:r.vectorBucketName}))}async getIndex(i){var n=()=>super.getIndex,r=this;return n().call(r,r.vectorBucketName,i)}async deleteIndex(i){var n=()=>super.deleteIndex,r=this;return n().call(r,r.vectorBucketName,i)}index(i){return new _3(this.url,this.headers,this.vectorBucketName,i,this.fetch)}},_3=class extends y3{constructor(i,n,r,l,c){super(i,n,c),this.vectorBucketName=r,this.indexName=l}async putVectors(i){var n=()=>super.putVectors,r=this;return n().call(r,ne(ne({},i),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async getVectors(i){var n=()=>super.getVectors,r=this;return n().call(r,ne(ne({},i),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async listVectors(i={}){var n=()=>super.listVectors,r=this;return n().call(r,ne(ne({},i),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async queryVectors(i){var n=()=>super.queryVectors,r=this;return n().call(r,ne(ne({},i),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async deleteVectors(i){var n=()=>super.deleteVectors,r=this;return n().call(r,ne(ne({},i),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}},S3=class extends p3{constructor(i,n={},r,l){super(i,n,r,l)}from(i){return new h3(this.url,this.headers,i,this.fetch)}get vectors(){return new w3(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new m3(this.url+"/iceberg",this.headers,this.fetch)}};const zf="2.109.0",Un=30*1e3,Cs=3,nc=Cs*Un,E3=2*Un,A3="http://localhost:9999",T3="supabase.auth.token",K3={"X-Client-Info":`gotrue-js/${zf}`},yc="X-Supabase-Api-Version",Hf={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},k3=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,O3=600*1e3;class Bs extends Error{constructor(n,r,l){super(n),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=l}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function Z(i){return typeof i=="object"&&i!==null&&"__isAuthError"in i}class R3 extends Bs{constructor(n,r,l){super(n,r,l),this.name="AuthApiError",this.status=r,this.code=l}}function x3(i){return Z(i)&&i.name==="AuthApiError"}class Qt extends Bs{constructor(n,r){super(n),this.name="AuthUnknownError",this.originalError=r}}class rn extends Bs{constructor(n,r,l,c){super(n,l,c),this.name=r,this.status=l}}class nt extends rn{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function ml(i){return Z(i)&&i.name==="AuthSessionMissingError"}class Ki extends rn{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class gl extends rn{constructor(n){super(n,"AuthInvalidCredentialsError",400,void 0)}}class yl extends rn{constructor(n,r=null){super(n,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function C3(i){return Z(i)&&i.name==="AuthImplicitGrantRedirectError"}class Yh extends rn{constructor(n,r=null){super(n,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class j3 extends rn{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class vc extends rn{constructor(n,r){super(n,"AuthRetryableFetchError",r,void 0)}}function Jh(i){return Z(i)&&i.name==="AuthRetryableFetchError"}class Xh extends rn{constructor(n="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(n,"AuthRefreshDiscardedError",409,void 0)}}function N3(i){return Z(i)&&i.name==="AuthRefreshDiscardedError"}class Qh extends rn{constructor(n,r,l){super(n,"AuthWeakPasswordError",r,"weak_password"),this.reasons=l}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class El extends rn{constructor(n){super(n,"AuthInvalidJwtError",400,"invalid_jwt")}}const Al="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Fh=` 	
\r=`.split(""),q3=(()=>{const i=new Array(128);for(let n=0;n<i.length;n+=1)i[n]=-1;for(let n=0;n<Fh.length;n+=1)i[Fh[n].charCodeAt(0)]=-2;for(let n=0;n<Al.length;n+=1)i[Al[n].charCodeAt(0)]=n;return i})();function Wh(i,n,r){if(i!==null)for(n.queue=n.queue<<8|i,n.queuedBits+=8;n.queuedBits>=6;){const l=n.queue>>n.queuedBits-6&63;r(Al[l]),n.queuedBits-=6}else if(n.queuedBits>0)for(n.queue=n.queue<<6-n.queuedBits,n.queuedBits=6;n.queuedBits>=6;){const l=n.queue>>n.queuedBits-6&63;r(Al[l]),n.queuedBits-=6}}function Lf(i,n,r){const l=q3[i];if(l>-1)for(n.queue=n.queue<<6|l,n.queuedBits+=6;n.queuedBits>=8;)r(n.queue>>n.queuedBits-8&255),n.queuedBits-=8;else{if(l===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(i)}"`)}}function ef(i){const n=[],r=h=>{n.push(String.fromCodePoint(h))},l={utf8seq:0,codepoint:0},c={queue:0,queuedBits:0},d=h=>{D3(h,l,r)};for(let h=0;h<i.length;h+=1)Lf(i.charCodeAt(h),c,d);return n.join("")}function M3(i,n){if(i<=127){n(i);return}else if(i<=2047){n(192|i>>6),n(128|i&63);return}else if(i<=65535){n(224|i>>12),n(128|i>>6&63),n(128|i&63);return}else if(i<=1114111){n(240|i>>18),n(128|i>>12&63),n(128|i>>6&63),n(128|i&63);return}throw new Error(`Unrecognized Unicode codepoint: ${i.toString(16)}`)}function U3(i,n){for(let r=0;r<i.length;r+=1){let l=i.charCodeAt(r);if(l>55295&&l<=56319){const c=(l-55296)*1024&65535;l=(i.charCodeAt(r+1)-56320&65535|c)+65536,r+=1}M3(l,n)}}function D3(i,n,r){if(n.utf8seq===0){if(i<=127){r(i);return}for(let l=1;l<6;l+=1)if((i>>7-l&1)===0){n.utf8seq=l;break}if(n.utf8seq===2)n.codepoint=i&31;else if(n.utf8seq===3)n.codepoint=i&15;else if(n.utf8seq===4)n.codepoint=i&7;else throw new Error("Invalid UTF-8 sequence");n.utf8seq-=1}else if(n.utf8seq>0){if(i<=127)throw new Error("Invalid UTF-8 sequence");n.codepoint=n.codepoint<<6|i&63,n.utf8seq-=1,n.utf8seq===0&&r(n.codepoint)}}function ji(i){const n=[],r={queue:0,queuedBits:0},l=c=>{n.push(c)};for(let c=0;c<i.length;c+=1)Lf(i.charCodeAt(c),r,l);return new Uint8Array(n)}function z3(i){const n=[];return U3(i,r=>n.push(r)),new Uint8Array(n)}function Da(i){const n=[],r={queue:0,queuedBits:0},l=c=>{n.push(c)};return i.forEach(c=>Wh(c,r,l)),Wh(null,r,l),n.join("")}function H3(i){return Math.round(Date.now()/1e3)+i}function L3(){return Symbol("auth-callback")}const ht=()=>typeof window<"u"&&typeof document<"u",Na={tested:!1,writable:!1},Bf=()=>{if(!ht())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Na.tested)return Na.writable;const i=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(i,i),globalThis.localStorage.removeItem(i),Na.tested=!0,Na.writable=!0}catch{Na.tested=!0,Na.writable=!1}return Na.writable};function B3(i){const n={},r=new URL(i);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((c,d)=>{n[d]=c})}catch{}return r.searchParams.forEach((l,c)=>{n[c]=l}),n}const If=i=>i?(...n)=>i(...n):(...n)=>fetch(...n),I3=i=>typeof i=="object"&&i!==null&&"status"in i&&"ok"in i&&"json"in i&&typeof i.json=="function",xi=async(i,n,r)=>{await i.setItem(n,JSON.stringify(r))},Yt=async(i,n)=>{const r=await i.getItem(n);if(!r)return null;try{return JSON.parse(r)}catch{return null}},Ve=async(i,n)=>{await i.removeItem(n)};class Ml{constructor(){this.promise=new Ml.promiseConstructor((n,r)=>{this.resolve=n,this.reject=r})}}Ml.promiseConstructor=Promise;function vl(i){const n=i.split(".");if(n.length!==3)throw new El("Invalid JWT structure");for(let l=0;l<n.length;l++)if(!k3.test(n[l]))throw new El("JWT not in base64url format");return{header:JSON.parse(ef(n[0])),payload:JSON.parse(ef(n[1])),signature:ji(n[2]),raw:{header:n[0],payload:n[1]}}}async function P3(i){return await new Promise(n=>{setTimeout(()=>n(null),i)})}function V3(i,n){return new Promise((l,c)=>{(async()=>{for(let d=0;d<1/0;d++)try{const h=await i(d);if(!n(d,null,h)){l(h);return}}catch(h){if(!n(d,h)){c(h);return}}})()})}function $3(i){return("0"+i.toString(16)).substr(-2)}function G3(){const n=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",l=r.length;let c="";for(let d=0;d<56;d++)c+=r.charAt(Math.floor(Math.random()*l));return c}return crypto.getRandomValues(n),Array.from(n,$3).join("")}async function Z3(i){const r=new TextEncoder().encode(i),l=await crypto.subtle.digest("SHA-256",r),c=new Uint8Array(l);return Array.from(c).map(d=>String.fromCharCode(d)).join("")}async function Y3(i){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),i;const r=await Z3(i);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function qa(i,n,r=!1){const l=G3();let c=l;r&&(c+="/recovery"),await xi(i,`${n}-code-verifier`,c);const d=await Y3(l);return[d,l===d?"plain":"s256"]}const J3=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function X3(i){const n=i.headers.get(yc);if(!n||!n.match(J3))return null;try{return new Date(`${n}T00:00:00.0Z`)}catch{return null}}function Q3(i){if(!i)throw new Error("Missing exp claim");const n=Math.floor(Date.now()/1e3);if(i<=n)throw new Error("JWT has expired")}function F3(i){switch(i){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const W3=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Cn(i){if(!W3.test(i))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Jt(i){if(!i.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function ac(){const i={};return new Proxy(i,{get:(n,r)=>{if(r==="__isUserNotAvailableProxy")return!0;if(typeof r=="symbol"){const l=r.toString();if(l==="Symbol(Symbol.toPrimitive)"||l==="Symbol(Symbol.toStringTag)"||l==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)},set:(n,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(n,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function e4(i,n){return new Proxy(i,{get:(r,l,c)=>{if(l==="__isInsecureUserWarningProxy")return!0;if(typeof l=="symbol"){const d=l.toString();if(d==="Symbol(Symbol.toPrimitive)"||d==="Symbol(Symbol.toStringTag)"||d==="Symbol(util.inspect.custom)"||d==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(r,l,c)}return!n.value&&typeof l=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),n.value=!0),Reflect.get(r,l,c)}})}function tf(i){return JSON.parse(JSON.stringify(i))}const Ua=i=>{if(typeof i=="object"&&i!==null){const n=i;if(typeof n.msg=="string")return n.msg;if(typeof n.message=="string")return n.message;if(typeof n.error_description=="string")return n.error_description;if(typeof n.error=="string")return n.error}return JSON.stringify(i)},t4=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function nf(i){var n;if(!I3(i))throw new vc(Ua(i),0);if(t4.includes(i.status))throw new vc(Ua(i),i.status);let r;try{r=await i.json()}catch(d){throw new Qt(Ua(d),d)}let l;const c=X3(i);if(c&&c.getTime()>=Hf["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?l=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(l=r.error_code),l){if(l==="weak_password")throw new Qh(Ua(r),i.status,((n=r.weak_password)===null||n===void 0?void 0:n.reasons)||[]);if(l==="session_not_found")throw new nt}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((d,h)=>d&&typeof h=="string",!0))throw new Qh(Ua(r),i.status,r.weak_password.reasons);throw new R3(Ua(r),i.status||500,l)}const n4=(i,n,r,l)=>{const c={method:i,headers:(n==null?void 0:n.headers)||{}};return i==="GET"?c:(c.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},n==null?void 0:n.headers),c.body=JSON.stringify(l),Object.assign(Object.assign({},c),r))};async function X(i,n,r,l){var c;const d=Object.assign({},l==null?void 0:l.headers);d[yc]||(d[yc]=Hf["2024-01-01"].name),l!=null&&l.jwt&&(d.Authorization=`Bearer ${l.jwt}`);const h=(c=l==null?void 0:l.query)!==null&&c!==void 0?c:{};l!=null&&l.redirectTo&&(h.redirect_to=l.redirectTo);const m=Object.keys(h).length?"?"+new URLSearchParams(h).toString():"",p=await a4(i,n,r+m,{headers:d,noResolveJson:l==null?void 0:l.noResolveJson},{},l==null?void 0:l.body);return l!=null&&l.xform?l==null?void 0:l.xform(p):{data:Object.assign({},p),error:null}}async function a4(i,n,r,l,c,d){const h=n4(n,l,c,d);let m;try{m=await i(r,Object.assign({},h))}catch(p){throw console.error(p),new vc(Ua(p),0)}if(m.ok||await nf(m),l!=null&&l.noResolveJson)return m;try{return await m.json()}catch(p){await nf(p)}}function Vt(i){var n;let r=null;r4(i)&&(r=Object.assign({},i),i.expires_at||(r.expires_at=H3(i.expires_in)));const l=(n=i.user)!==null&&n!==void 0?n:typeof(i==null?void 0:i.id)=="string"?i:null;return{data:{session:r,user:l},error:null}}function af(i){const n=Vt(i);return!n.error&&i.weak_password&&typeof i.weak_password=="object"&&Array.isArray(i.weak_password.reasons)&&i.weak_password.reasons.length&&i.weak_password.message&&typeof i.weak_password.message=="string"&&i.weak_password.reasons.reduce((r,l)=>r&&typeof l=="string",!0)&&(n.data.weak_password=i.weak_password),n}function ha(i){var n;return{data:{user:(n=i.user)!==null&&n!==void 0?n:i},error:null}}function i4(i){return{data:i,error:null}}function s4(i){const{action_link:n,email_otp:r,hashed_token:l,redirect_to:c,verification_type:d}=i,h=jl(i,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),m={action_link:n,email_otp:r,hashed_token:l,redirect_to:c,verification_type:d},p=Object.assign({},h);return{data:{properties:m,user:p},error:null}}function sf(i){return i}function r4(i){return!!i.access_token&&!!i.refresh_token&&!!i.expires_in}const ic=["global","local","others"];class l4{constructor({url:n="",headers:r={},fetch:l,experimental:c}){this.url=n,this.headers=r,this.fetch=If(l),this.experimental=c??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(n,r=ic[0]){if(ic.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${ic.join(", ")}`);try{return await X(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:n,noResolveJson:!0}),{data:null,error:null}}catch(l){if(Z(l))return{data:null,error:l};throw l}}async inviteUserByEmail(n,r={}){try{return await X(this.fetch,"POST",`${this.url}/invite`,{body:{email:n,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:ha})}catch(l){if(Z(l))return{data:{user:null},error:l};throw l}}async generateLink(n){try{const{options:r}=n,l=jl(n,["options"]),c=Object.assign(Object.assign({},l),r);return"newEmail"in l&&(c.new_email=l==null?void 0:l.newEmail,delete c.newEmail),await X(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:c,headers:this.headers,xform:s4,redirectTo:r==null?void 0:r.redirectTo})}catch(r){if(Z(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(n){try{return await X(this.fetch,"POST",`${this.url}/admin/users`,{body:n,headers:this.headers,xform:ha})}catch(r){if(Z(r))return{data:{user:null},error:r};throw r}}async listUsers(n){var r,l,c,d,h,m,p;try{const g={nextPage:null,lastPage:0,total:0},w=await X(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(l=(r=n==null?void 0:n.page)===null||r===void 0?void 0:r.toString())!==null&&l!==void 0?l:"",per_page:(d=(c=n==null?void 0:n.perPage)===null||c===void 0?void 0:c.toString())!==null&&d!==void 0?d:""},xform:sf});if(w.error)throw w.error;const v=await w.json(),A=(h=w.headers.get("x-total-count"))!==null&&h!==void 0?h:0,k=(p=(m=w.headers.get("link"))===null||m===void 0?void 0:m.split(","))!==null&&p!==void 0?p:[];return k.length>0&&(k.forEach(C=>{const D=parseInt(C.split(";")[0].split("=")[1].substring(0,1)),P=JSON.parse(C.split(";")[1].split("=")[1]);g[`${P}Page`]=D}),g.total=parseInt(A)),{data:Object.assign(Object.assign({},v),g),error:null}}catch(g){if(Z(g))return{data:{users:[]},error:g};throw g}}async getUserById(n){Cn(n);try{return await X(this.fetch,"GET",`${this.url}/admin/users/${n}`,{headers:this.headers,xform:ha})}catch(r){if(Z(r))return{data:{user:null},error:r};throw r}}async updateUserById(n,r){Cn(n);try{return await X(this.fetch,"PUT",`${this.url}/admin/users/${n}`,{body:r,headers:this.headers,xform:ha})}catch(l){if(Z(l))return{data:{user:null},error:l};throw l}}async deleteUser(n,r=!1){Cn(n);try{return await X(this.fetch,"DELETE",`${this.url}/admin/users/${n}`,{headers:this.headers,body:{should_soft_delete:r},xform:ha})}catch(l){if(Z(l))return{data:{user:null},error:l};throw l}}async _listFactors(n){Cn(n.userId);try{const{data:r,error:l}=await X(this.fetch,"GET",`${this.url}/admin/users/${n.userId}/factors`,{headers:this.headers,xform:c=>({data:{factors:c},error:null})});return{data:r,error:l}}catch(r){if(Z(r))return{data:null,error:r};throw r}}async _deleteFactor(n){Cn(n.userId),Cn(n.id);try{return{data:await X(this.fetch,"DELETE",`${this.url}/admin/users/${n.userId}/factors/${n.id}`,{headers:this.headers}),error:null}}catch(r){if(Z(r))return{data:null,error:r};throw r}}async _listOAuthClients(n){var r,l,c,d,h,m,p;try{const g={nextPage:null,lastPage:0,total:0},w=await X(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(l=(r=n==null?void 0:n.page)===null||r===void 0?void 0:r.toString())!==null&&l!==void 0?l:"",per_page:(d=(c=n==null?void 0:n.perPage)===null||c===void 0?void 0:c.toString())!==null&&d!==void 0?d:""},xform:sf});if(w.error)throw w.error;const v=await w.json(),A=(h=w.headers.get("x-total-count"))!==null&&h!==void 0?h:0,k=(p=(m=w.headers.get("link"))===null||m===void 0?void 0:m.split(","))!==null&&p!==void 0?p:[];return k.length>0&&(k.forEach(C=>{const D=parseInt(C.split(";")[0].split("=")[1].substring(0,1)),P=JSON.parse(C.split(";")[1].split("=")[1]);g[`${P}Page`]=D}),g.total=parseInt(A)),{data:Object.assign(Object.assign({},v),g),error:null}}catch(g){if(Z(g))return{data:{clients:[]},error:g};throw g}}async _createOAuthClient(n){try{return await X(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:n,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(Z(r))return{data:null,error:r};throw r}}async _getOAuthClient(n){try{return await X(this.fetch,"GET",`${this.url}/admin/oauth/clients/${n}`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(Z(r))return{data:null,error:r};throw r}}async _updateOAuthClient(n,r){try{return await X(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${n}`,{body:r,headers:this.headers,xform:l=>({data:l,error:null})})}catch(l){if(Z(l))return{data:null,error:l};throw l}}async _deleteOAuthClient(n){try{return await X(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${n}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(r){if(Z(r))return{data:null,error:r};throw r}}async _regenerateOAuthClientSecret(n){try{return await X(this.fetch,"POST",`${this.url}/admin/oauth/clients/${n}/regenerate_secret`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(Z(r))return{data:null,error:r};throw r}}async _listCustomProviders(n){try{const r={};return n!=null&&n.type&&(r.type=n.type),await X(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:r,xform:l=>{var c;return{data:{providers:(c=l==null?void 0:l.providers)!==null&&c!==void 0?c:[]},error:null}}})}catch(r){if(Z(r))return{data:{providers:[]},error:r};throw r}}async _createCustomProvider(n){try{return await X(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:n,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(Z(r))return{data:null,error:r};throw r}}async _getCustomProvider(n){try{return await X(this.fetch,"GET",`${this.url}/admin/custom-providers/${n}`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(Z(r))return{data:null,error:r};throw r}}async _updateCustomProvider(n,r){try{return await X(this.fetch,"PUT",`${this.url}/admin/custom-providers/${n}`,{body:r,headers:this.headers,xform:l=>({data:l,error:null})})}catch(l){if(Z(l))return{data:null,error:l};throw l}}async _deleteCustomProvider(n){try{return await X(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${n}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(r){if(Z(r))return{data:null,error:r};throw r}}async _adminListPasskeys(n){Jt(this.experimental),Cn(n.userId);try{return await X(this.fetch,"GET",`${this.url}/admin/users/${n.userId}/passkeys`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(Z(r))return{data:null,error:r};throw r}}async _adminDeletePasskey(n){Jt(this.experimental),Cn(n.userId),Cn(n.passkeyId);try{return await X(this.fetch,"DELETE",`${this.url}/admin/users/${n.userId}/passkeys/${n.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(r){if(Z(r))return{data:null,error:r};throw r}}}function rf(i={}){return{getItem:n=>i[n]||null,setItem:(n,r)=>{i[n]=r},removeItem:n=>{delete i[n]}}}globalThis&&Bf()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class o4 extends Error{constructor(n){super(n),this.isAcquireTimeout=!0}}function u4(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function Pf(i){if(!/^0x[a-fA-F0-9]{40}$/.test(i))throw new Error(`@supabase/auth-js: Address "${i}" is invalid.`);return i.toLowerCase()}function c4(i){return parseInt(i,16)}function d4(i){const n=new TextEncoder().encode(i);return"0x"+Array.from(n,l=>l.toString(16).padStart(2,"0")).join("")}function h4(i){var n;const{chainId:r,domain:l,expirationTime:c,issuedAt:d=new Date,nonce:h,notBefore:m,requestId:p,resources:g,scheme:w,uri:v,version:A}=i;{if(!Number.isInteger(r))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);if(!l)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(h&&h.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${h}`);if(!v)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(A!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${A}`);if(!((n=i.statement)===null||n===void 0)&&n.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${i.statement}`)}const k=Pf(i.address),C=w?`${w}://${l}`:l,D=i.statement?`${i.statement}
`:"",P=`${C} wants you to sign in with your Ethereum account:
${k}

${D}`;let V=`URI: ${v}
Version: ${A}
Chain ID: ${r}${h?`
Nonce: ${h}`:""}
Issued At: ${d.toISOString()}`;if(c&&(V+=`
Expiration Time: ${c.toISOString()}`),m&&(V+=`
Not Before: ${m.toISOString()}`),p&&(V+=`
Request ID: ${p}`),g){let B=`
Resources:`;for(const L of g){if(!L||typeof L!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${L}`);B+=`
- ${L}`}V+=B}return`${P}
${V}`}class Qe extends Error{constructor({message:n,code:r,cause:l,name:c}){var d;super(n,{cause:l}),this.__isWebAuthnError=!0,this.name=(d=c??(l instanceof Error?l.name:void 0))!==null&&d!==void 0?d:"Unknown Error",this.code=r}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class Tl extends Qe{constructor(n,r){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r,message:n}),this.name="WebAuthnUnknownError",this.originalError=r}}function f4({error:i,options:n}){var r,l,c;const{publicKey:d}=n;if(!d)throw Error("options was missing required publicKey property");if(i.name==="AbortError"){if(n.signal instanceof AbortSignal)return new Qe({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:i})}else if(i.name==="ConstraintError"){if(((r=d.authenticatorSelection)===null||r===void 0?void 0:r.requireResidentKey)===!0)return new Qe({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:i});if(n.mediation==="conditional"&&((l=d.authenticatorSelection)===null||l===void 0?void 0:l.userVerification)==="required")return new Qe({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:i});if(((c=d.authenticatorSelection)===null||c===void 0?void 0:c.userVerification)==="required")return new Qe({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:i})}else{if(i.name==="InvalidStateError")return new Qe({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:i});if(i.name==="NotAllowedError")return new Qe({message:i.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i});if(i.name==="NotSupportedError")return d.pubKeyCredParams.filter(m=>m.type==="public-key").length===0?new Qe({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:i}):new Qe({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:i});if(i.name==="SecurityError"){const h=window.location.hostname;if(Vf(h)){if(d.rp.id!==h)return new Qe({message:`The RP ID "${d.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:i})}else return new Qe({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:i})}else if(i.name==="TypeError"){if(d.user.id.byteLength<1||d.user.id.byteLength>64)return new Qe({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:i})}else if(i.name==="UnknownError")return new Qe({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:i})}return new Qe({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i})}function p4({error:i,options:n}){const{publicKey:r}=n;if(!r)throw Error("options was missing required publicKey property");if(i.name==="AbortError"){if(n.signal instanceof AbortSignal)return new Qe({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:i})}else{if(i.name==="NotAllowedError")return new Qe({message:i.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i});if(i.name==="SecurityError"){const l=window.location.hostname;if(Vf(l)){if(r.rpId!==l)return new Qe({message:`The RP ID "${r.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:i})}else return new Qe({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:i})}else if(i.name==="UnknownError")return new Qe({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:i})}return new Qe({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i})}class m4{createNewAbortSignal(){if(this.controller){const r=new Error("Cancelling existing WebAuthn API call for new one");r.name="AbortError",this.controller.abort(r)}const n=new AbortController;return this.controller=n,n.signal}cancelCeremony(){if(this.controller){const n=new Error("Manually cancelling existing WebAuthn API call");n.name="AbortError",this.controller.abort(n),this.controller=void 0}}}const wc=new m4;function lf(i){if(!i)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(i);const{challenge:n,user:r,excludeCredentials:l}=i,c=jl(i,["challenge","user","excludeCredentials"]),d=ji(n).buffer,h=Object.assign(Object.assign({},r),{id:ji(r.id).buffer}),m=Object.assign(Object.assign({},c),{challenge:d,user:h});if(l&&l.length>0){m.excludeCredentials=new Array(l.length);for(let p=0;p<l.length;p++){const g=l[p];m.excludeCredentials[p]=Object.assign(Object.assign({},g),{id:ji(g.id).buffer,type:g.type||"public-key",transports:g.transports})}}return m}function of(i){if(!i)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(i);const{challenge:n,allowCredentials:r}=i,l=jl(i,["challenge","allowCredentials"]),c=ji(n).buffer,d=Object.assign(Object.assign({},l),{challenge:c});if(r&&r.length>0){d.allowCredentials=new Array(r.length);for(let h=0;h<r.length;h++){const m=r[h];d.allowCredentials[h]=Object.assign(Object.assign({},m),{id:ji(m.id).buffer,type:m.type||"public-key",transports:m.transports})}}return d}function uf(i){var n;if("toJSON"in i&&typeof i.toJSON=="function")return i.toJSON();const r=i;return{id:i.id,rawId:i.id,response:{attestationObject:Da(new Uint8Array(i.response.attestationObject)),clientDataJSON:Da(new Uint8Array(i.response.clientDataJSON))},type:"public-key",clientExtensionResults:i.getClientExtensionResults(),authenticatorAttachment:(n=r.authenticatorAttachment)!==null&&n!==void 0?n:void 0}}function cf(i){var n;if("toJSON"in i&&typeof i.toJSON=="function")return i.toJSON();const r=i,l=i.getClientExtensionResults(),c=i.response;return{id:i.id,rawId:i.id,response:{authenticatorData:Da(new Uint8Array(c.authenticatorData)),clientDataJSON:Da(new Uint8Array(c.clientDataJSON)),signature:Da(new Uint8Array(c.signature)),userHandle:c.userHandle?Da(new Uint8Array(c.userHandle)):void 0},type:"public-key",clientExtensionResults:l,authenticatorAttachment:(n=r.authenticatorAttachment)!==null&&n!==void 0?n:void 0}}function Vf(i){return i==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(i)}function Kl(){var i,n;return!!(ht()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((i=navigator==null?void 0:navigator.credentials)===null||i===void 0?void 0:i.create)=="function"&&typeof((n=navigator==null?void 0:navigator.credentials)===null||n===void 0?void 0:n.get)=="function")}async function $f(i){try{const n=await navigator.credentials.create(i);return n?n instanceof PublicKeyCredential?{data:n,error:null}:{data:null,error:new Tl("Browser returned unexpected credential type",n)}:{data:null,error:new Tl("Empty credential response",n)}}catch(n){return{data:null,error:f4({error:n,options:i})}}}async function Gf(i){try{const n=await navigator.credentials.get(i);return n?n instanceof PublicKeyCredential?{data:n,error:null}:{data:null,error:new Tl("Browser returned unexpected credential type",n)}:{data:null,error:new Tl("Empty credential response",n)}}catch(n){return{data:null,error:p4({error:n,options:i})}}}const g4={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},y4={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function kl(...i){const n=c=>c!==null&&typeof c=="object"&&!Array.isArray(c),r=c=>c instanceof ArrayBuffer||ArrayBuffer.isView(c),l={};for(const c of i)if(c)for(const d in c){const h=c[d];if(h!==void 0)if(Array.isArray(h))l[d]=h;else if(r(h))l[d]=h;else if(n(h)){const m=l[d];n(m)?l[d]=kl(m,h):l[d]=kl(h)}else l[d]=h}return l}function v4(i,n){return kl(g4,i,n||{})}function w4(i,n){return kl(y4,i,n||{})}class b4{constructor(n){this.client=n,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(n){return this.client.mfa.enroll(Object.assign(Object.assign({},n),{factorType:"webauthn"}))}async _challenge({factorId:n,webauthn:r,friendlyName:l,signal:c},d){var h;try{const{data:m,error:p}=await this.client.mfa.challenge({factorId:n,webauthn:r});if(!m)return{data:null,error:p};const g=c??wc.createNewAbortSignal();if(m.webauthn.type==="create"){const{user:w}=m.webauthn.credential_options.publicKey;if(!w.name){const v=l;if(v)w.name=`${w.id}:${v}`;else{const k=(await this.client.getUser()).data.user,C=((h=k==null?void 0:k.user_metadata)===null||h===void 0?void 0:h.name)||(k==null?void 0:k.email)||(k==null?void 0:k.id)||"User";w.name=`${w.id}:${C}`}}w.displayName||(w.displayName=w.name)}switch(m.webauthn.type){case"create":{const w=v4(m.webauthn.credential_options.publicKey,d==null?void 0:d.create),{data:v,error:A}=await $f({publicKey:w,signal:g});return v?{data:{factorId:n,challengeId:m.id,webauthn:{type:m.webauthn.type,credential_response:v}},error:null}:{data:null,error:A}}case"request":{const w=w4(m.webauthn.credential_options.publicKey,d==null?void 0:d.request),{data:v,error:A}=await Gf(Object.assign(Object.assign({},m.webauthn.credential_options),{publicKey:w,signal:g}));return v?{data:{factorId:n,challengeId:m.id,webauthn:{type:m.webauthn.type,credential_response:v}},error:null}:{data:null,error:A}}}}catch(m){return Z(m)?{data:null,error:m}:{data:null,error:new Qt("Unexpected error in challenge",m)}}}async _verify({challengeId:n,factorId:r,webauthn:l}){return this.client.mfa.verify({factorId:r,challengeId:n,webauthn:l})}async _authenticate({factorId:n,webauthn:{rpId:r=typeof window<"u"?window.location.hostname:void 0,rpOrigins:l=typeof window<"u"?[window.location.origin]:void 0,signal:c}={}},d){if(!r)return{data:null,error:new Bs("rpId is required for WebAuthn authentication")};try{if(!Kl())return{data:null,error:new Qt("Browser does not support WebAuthn",null)};const{data:h,error:m}=await this.challenge({factorId:n,webauthn:{rpId:r,rpOrigins:l},signal:c},{request:d});if(!h)return{data:null,error:m};const{webauthn:p}=h;return this._verify({factorId:n,challengeId:h.challengeId,webauthn:{type:p.type,rpId:r,rpOrigins:l,credential_response:p.credential_response}})}catch(h){return Z(h)?{data:null,error:h}:{data:null,error:new Qt("Unexpected error in authenticate",h)}}}async _register({friendlyName:n,webauthn:{rpId:r=typeof window<"u"?window.location.hostname:void 0,rpOrigins:l=typeof window<"u"?[window.location.origin]:void 0,signal:c}={}},d){if(!r)return{data:null,error:new Bs("rpId is required for WebAuthn registration")};try{if(!Kl())return{data:null,error:new Qt("Browser does not support WebAuthn",null)};const{data:h,error:m}=await this._enroll({friendlyName:n});if(!h)return await this.client.mfa.listFactors().then(w=>{var v;return(v=w.data)===null||v===void 0?void 0:v.all.find(A=>A.factor_type==="webauthn"&&A.friendly_name===n&&A.status!=="unverified")}).then(w=>w?this.client.mfa.unenroll({factorId:w==null?void 0:w.id}):void 0),{data:null,error:m};const{data:p,error:g}=await this._challenge({factorId:h.id,friendlyName:h.friendly_name,webauthn:{rpId:r,rpOrigins:l},signal:c},{create:d});return p?this._verify({factorId:h.id,challengeId:p.challengeId,webauthn:{rpId:r,rpOrigins:l,type:p.webauthn.type,credential_response:p.webauthn.credential_response}}):{data:null,error:g}}catch(h){return Z(h)?{data:null,error:h}:{data:null,error:new Qt("Unexpected error in register",h)}}}}u4();const _4={url:A3,storageKey:T3,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:K3,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},ki={};class Is{get jwks(){var n,r;return(r=(n=ki[this.storageKey])===null||n===void 0?void 0:n.jwks)!==null&&r!==void 0?r:{keys:[]}}set jwks(n){ki[this.storageKey]=Object.assign(Object.assign({},ki[this.storageKey]),{jwks:n})}get jwks_cached_at(){var n,r;return(r=(n=ki[this.storageKey])===null||n===void 0?void 0:n.cachedAt)!==null&&r!==void 0?r:Number.MIN_SAFE_INTEGER}set jwks_cached_at(n){ki[this.storageKey]=Object.assign(Object.assign({},ki[this.storageKey]),{cachedAt:n})}constructor(n){var r,l,c;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const d=Object.assign(Object.assign({},_4),n);if(this.storageKey=d.storageKey,this.instanceID=(r=Is.nextInstanceID[this.storageKey])!==null&&r!==void 0?r:0,Is.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!d.debug,typeof d.debug=="function"&&(this.logger=d.debug),this.instanceID>0&&ht()){const h=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(h),this.logDebugMessages&&console.trace(h)}if(this.persistSession=d.persistSession,this.autoRefreshToken=d.autoRefreshToken,this.experimental=(l=d.experimental)!==null&&l!==void 0?l:{},this.admin=new l4({url:d.url,headers:d.headers,fetch:d.fetch,experimental:this.experimental}),this.url=d.url,this.headers=d.headers,this.fetch=If(d.fetch),this.detectSessionInUrl=d.detectSessionInUrl,this.flowType=d.flowType,this.hasCustomAuthorizationHeader=d.hasCustomAuthorizationHeader,this.throwOnError=d.throwOnError,this.lockAcquireTimeout=d.lockAcquireTimeout,d.lock!=null&&(this.lock=d.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new b4(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(d.storage?this.storage=d.storage:Bf()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=rf(this.memoryStorage)),d.userStorage&&(this.userStorage=d.userStorage)):(this.memoryStorage={},this.storage=rf(this.memoryStorage)),ht()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(h){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",h)}(c=this.broadcastChannel)===null||c===void 0||c.addEventListener("message",async h=>{this._debug("received broadcast notification from other tab or client",h),(h.data.event==="TOKEN_REFRESHED"||h.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(h.data.event,h.data.session,!1)}catch(m){this._debug("#broadcastChannel","error",m)}})}d.skipAutoInitialize||this.initialize().catch(h=>{this._debug("#initialize()","error",h)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(n){if(this.throwOnError&&n&&n.error)throw n.error;return n}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${zf}) ${new Date().toISOString()}`}_debug(...n){return this.logDebugMessages&&this.logger(this._logPrefix(),...n),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())(),await this.initializePromise)}async _initialize(){var n;try{let r={},l="none";if(ht()&&(r=B3(window.location.href),this._isImplicitGrantCallback(r)?l="implicit":await this._isPKCECallback(r)&&(l="pkce")),ht()&&this.detectSessionInUrl&&l!=="none"){const{data:c,error:d}=await this._getSessionFromURL(r,l);if(d){if(this._debug("#_initialize()","error detecting session from URL",d),C3(d)){const p=(n=d.details)===null||n===void 0?void 0:n.code;if(p==="identity_already_exists"||p==="identity_not_found"||p==="single_identity_not_deletable")return{error:d}}return{error:d}}const{session:h,redirectType:m}=c;return this._debug("#_initialize()","detected session in URL",h,"redirect type",m),await this._saveSession(h),setTimeout(async()=>{m==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",h):await this._notifyAllSubscribers("SIGNED_IN",h)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return Z(r)?this._returnResult({error:r}):this._returnResult({error:new Qt("Unexpected error during initialization",r)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(n){var r,l,c;try{const d=await X(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(l=(r=n==null?void 0:n.options)===null||r===void 0?void 0:r.data)!==null&&l!==void 0?l:{},gotrue_meta_security:{captcha_token:(c=n==null?void 0:n.options)===null||c===void 0?void 0:c.captchaToken}},xform:Vt}),{data:h,error:m}=d;if(m||!h)return this._returnResult({data:{user:null,session:null},error:m});const p=h.session,g=h.user;return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(d){if(Z(d))return this._returnResult({data:{user:null,session:null},error:d});throw d}}async signUp(n){var r,l,c;try{let d;if("email"in n){const{email:w,password:v,options:A}=n;let k=null,C=null;this.flowType==="pkce"&&([k,C]=await qa(this.storage,this.storageKey)),d=await X(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:A==null?void 0:A.emailRedirectTo,body:{email:w,password:v,data:(r=A==null?void 0:A.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:A==null?void 0:A.captchaToken},code_challenge:k,code_challenge_method:C},xform:Vt})}else if("phone"in n){const{phone:w,password:v,options:A}=n;d=await X(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:w,password:v,data:(l=A==null?void 0:A.data)!==null&&l!==void 0?l:{},channel:(c=A==null?void 0:A.channel)!==null&&c!==void 0?c:"sms",gotrue_meta_security:{captcha_token:A==null?void 0:A.captchaToken}},xform:Vt})}else throw new gl("You must provide either an email or phone number and a password");const{data:h,error:m}=d;if(m||!h)return await Ve(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:m});const p=h.session,g=h.user;return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(d){if(await Ve(this.storage,`${this.storageKey}-code-verifier`),Z(d))return this._returnResult({data:{user:null,session:null},error:d});throw d}}async signInWithPassword(n){try{let r;if("email"in n){const{email:d,password:h,options:m}=n;r=await X(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:d,password:h,gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken}},xform:af})}else if("phone"in n){const{phone:d,password:h,options:m}=n;r=await X(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:d,password:h,gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken}},xform:af})}else throw new gl("You must provide either an email or phone number and a password");const{data:l,error:c}=r;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l||!l.session||!l.user){const d=new Ki;return this._returnResult({data:{user:null,session:null},error:d})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:Object.assign({user:l.user,session:l.session},l.weak_password?{weakPassword:l.weak_password}:null),error:c})}catch(r){if(Z(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithOAuth(n){var r,l,c,d;return await this._handleProviderSignIn(n.provider,{redirectTo:(r=n.options)===null||r===void 0?void 0:r.redirectTo,scopes:(l=n.options)===null||l===void 0?void 0:l.scopes,queryParams:(c=n.options)===null||c===void 0?void 0:c.queryParams,skipBrowserRedirect:(d=n.options)===null||d===void 0?void 0:d.skipBrowserRedirect})}async exchangeCodeForSession(n){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(n)):this._exchangeCodeForSession(n)}async signInWithWeb3(n){const{chain:r}=n;switch(r){case"ethereum":return await this.signInWithEthereum(n);case"solana":return await this.signInWithSolana(n);default:throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}}async signInWithEthereum(n){var r,l,c,d,h,m,p,g,w,v,A;let k,C;if("message"in n)k=n.message,C=n.signature;else{const{chain:D,wallet:P,statement:V,options:B}=n;let L;if(ht())if(typeof P=="object")L=P;else{const Me=window;if("ethereum"in Me&&typeof Me.ethereum=="object"&&"request"in Me.ethereum&&typeof Me.ethereum.request=="function")L=Me.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof P!="object"||!(B!=null&&B.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");L=P}const ie=new URL((r=B==null?void 0:B.url)!==null&&r!==void 0?r:window.location.href),fe=await L.request({method:"eth_requestAccounts"}).then(Me=>Me).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!fe||fe.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const te=Pf(fe[0]);let F=(l=B==null?void 0:B.signInWithEthereum)===null||l===void 0?void 0:l.chainId;if(!F){const Me=await L.request({method:"eth_chainId"});F=c4(Me)}const We={domain:ie.host,address:te,statement:V,uri:ie.href,version:"1",chainId:F,nonce:(c=B==null?void 0:B.signInWithEthereum)===null||c===void 0?void 0:c.nonce,issuedAt:(h=(d=B==null?void 0:B.signInWithEthereum)===null||d===void 0?void 0:d.issuedAt)!==null&&h!==void 0?h:new Date,expirationTime:(m=B==null?void 0:B.signInWithEthereum)===null||m===void 0?void 0:m.expirationTime,notBefore:(p=B==null?void 0:B.signInWithEthereum)===null||p===void 0?void 0:p.notBefore,requestId:(g=B==null?void 0:B.signInWithEthereum)===null||g===void 0?void 0:g.requestId,resources:(w=B==null?void 0:B.signInWithEthereum)===null||w===void 0?void 0:w.resources};k=h4(We),C=await L.request({method:"personal_sign",params:[d4(k),te]})}try{const{data:D,error:P}=await X(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:k,signature:C},!((v=n.options)===null||v===void 0)&&v.captchaToken?{gotrue_meta_security:{captcha_token:(A=n.options)===null||A===void 0?void 0:A.captchaToken}}:null),xform:Vt});if(P)throw P;if(!D||!D.session||!D.user){const V=new Ki;return this._returnResult({data:{user:null,session:null},error:V})}return D.session&&(await this._saveSession(D.session),await this._notifyAllSubscribers("SIGNED_IN",D.session)),this._returnResult({data:Object.assign({},D),error:P})}catch(D){if(Z(D))return this._returnResult({data:{user:null,session:null},error:D});throw D}}async signInWithSolana(n){var r,l,c,d,h,m,p,g,w,v,A,k;let C,D;if("message"in n)C=n.message,D=n.signature;else{const{chain:P,wallet:V,statement:B,options:L}=n;let ie;if(ht())if(typeof V=="object")ie=V;else{const te=window;if("solana"in te&&typeof te.solana=="object"&&("signIn"in te.solana&&typeof te.solana.signIn=="function"||"signMessage"in te.solana&&typeof te.solana.signMessage=="function"))ie=te.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof V!="object"||!(L!=null&&L.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");ie=V}const fe=new URL((r=L==null?void 0:L.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in ie&&ie.signIn){const te=await ie.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},L==null?void 0:L.signInWithSolana),{version:"1",domain:fe.host,uri:fe.href}),B?{statement:B}:null));let F;if(Array.isArray(te)&&te[0]&&typeof te[0]=="object")F=te[0];else if(te&&typeof te=="object"&&"signedMessage"in te&&"signature"in te)F=te;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in F&&"signature"in F&&(typeof F.signedMessage=="string"||F.signedMessage instanceof Uint8Array)&&F.signature instanceof Uint8Array)C=typeof F.signedMessage=="string"?F.signedMessage:new TextDecoder().decode(F.signedMessage),D=F.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in ie)||typeof ie.signMessage!="function"||!("publicKey"in ie)||typeof ie!="object"||!ie.publicKey||!("toBase58"in ie.publicKey)||typeof ie.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");C=[`${fe.host} wants you to sign in with your Solana account:`,ie.publicKey.toBase58(),...B?["",B,""]:[""],"Version: 1",`URI: ${fe.href}`,`Issued At: ${(c=(l=L==null?void 0:L.signInWithSolana)===null||l===void 0?void 0:l.issuedAt)!==null&&c!==void 0?c:new Date().toISOString()}`,...!((d=L==null?void 0:L.signInWithSolana)===null||d===void 0)&&d.notBefore?[`Not Before: ${L.signInWithSolana.notBefore}`]:[],...!((h=L==null?void 0:L.signInWithSolana)===null||h===void 0)&&h.expirationTime?[`Expiration Time: ${L.signInWithSolana.expirationTime}`]:[],...!((m=L==null?void 0:L.signInWithSolana)===null||m===void 0)&&m.chainId?[`Chain ID: ${L.signInWithSolana.chainId}`]:[],...!((p=L==null?void 0:L.signInWithSolana)===null||p===void 0)&&p.nonce?[`Nonce: ${L.signInWithSolana.nonce}`]:[],...!((g=L==null?void 0:L.signInWithSolana)===null||g===void 0)&&g.requestId?[`Request ID: ${L.signInWithSolana.requestId}`]:[],...!((v=(w=L==null?void 0:L.signInWithSolana)===null||w===void 0?void 0:w.resources)===null||v===void 0)&&v.length?["Resources",...L.signInWithSolana.resources.map(F=>`- ${F}`)]:[]].join(`
`);const te=await ie.signMessage(new TextEncoder().encode(C),"utf8");if(!te||!(te instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");D=te}}try{const{data:P,error:V}=await X(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:C,signature:Da(D)},!((A=n.options)===null||A===void 0)&&A.captchaToken?{gotrue_meta_security:{captcha_token:(k=n.options)===null||k===void 0?void 0:k.captchaToken}}:null),xform:Vt});if(V)throw V;if(!P||!P.session||!P.user){const B=new Ki;return this._returnResult({data:{user:null,session:null},error:B})}return P.session&&(await this._saveSession(P.session),await this._notifyAllSubscribers("SIGNED_IN",P.session)),this._returnResult({data:Object.assign({},P),error:V})}catch(P){if(Z(P))return this._returnResult({data:{user:null,session:null},error:P});throw P}}async _exchangeCodeForSession(n){const r=await Yt(this.storage,`${this.storageKey}-code-verifier`),[l,c]=(r??"").split("/");try{if(!l&&this.flowType==="pkce")throw new j3;const{data:d,error:h}=await X(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:n,code_verifier:l},xform:Vt});if(await Ve(this.storage,`${this.storageKey}-code-verifier`),h)throw h;if(!d||!d.session||!d.user){const m=new Ki;return this._returnResult({data:{user:null,session:null,redirectType:null},error:m})}return d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers(c==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",d.session)),this._returnResult({data:Object.assign(Object.assign({},d),{redirectType:c??null}),error:h})}catch(d){if(await Ve(this.storage,`${this.storageKey}-code-verifier`),Z(d))return this._returnResult({data:{user:null,session:null,redirectType:null},error:d});throw d}}async signInWithIdToken(n){try{const{options:r,provider:l,token:c,access_token:d,nonce:h}=n,m=await X(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:l,id_token:c,access_token:d,nonce:h,gotrue_meta_security:{captcha_token:r==null?void 0:r.captchaToken}},xform:Vt}),{data:p,error:g}=m;if(g)return this._returnResult({data:{user:null,session:null},error:g});if(!p||!p.session||!p.user){const w=new Ki;return this._returnResult({data:{user:null,session:null},error:w})}return p.session&&(await this._saveSession(p.session),await this._notifyAllSubscribers("SIGNED_IN",p.session)),this._returnResult({data:p,error:g})}catch(r){if(Z(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithOtp(n){var r,l,c,d,h;try{if("email"in n){const{email:m,options:p}=n;let g=null,w=null;this.flowType==="pkce"&&([g,w]=await qa(this.storage,this.storageKey));const{error:v}=await X(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:m,data:(r=p==null?void 0:p.data)!==null&&r!==void 0?r:{},create_user:(l=p==null?void 0:p.shouldCreateUser)!==null&&l!==void 0?l:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:g,code_challenge_method:w},redirectTo:p==null?void 0:p.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:v})}if("phone"in n){const{phone:m,options:p}=n,{data:g,error:w}=await X(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:m,data:(c=p==null?void 0:p.data)!==null&&c!==void 0?c:{},create_user:(d=p==null?void 0:p.shouldCreateUser)!==null&&d!==void 0?d:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},channel:(h=p==null?void 0:p.channel)!==null&&h!==void 0?h:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:g==null?void 0:g.message_id},error:w})}throw new gl("You must provide either an email or phone number.")}catch(m){if(await Ve(this.storage,`${this.storageKey}-code-verifier`),Z(m))return this._returnResult({data:{user:null,session:null},error:m});throw m}}async verifyOtp(n){var r,l;try{let c,d;"options"in n&&(c=(r=n.options)===null||r===void 0?void 0:r.redirectTo,d=(l=n.options)===null||l===void 0?void 0:l.captchaToken);const{data:h,error:m}=await X(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},n),{gotrue_meta_security:{captcha_token:d}}),redirectTo:c,xform:Vt});if(m)throw m;if(!h)throw new Error("An error occurred on token verification.");const p=h.session,g=h.user;return p!=null&&p.access_token&&(await this._saveSession(p),await this._notifyAllSubscribers(n.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(c){if(Z(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signInWithSSO(n){var r,l,c,d,h;try{let m=null,p=null;this.flowType==="pkce"&&([m,p]=await qa(this.storage,this.storageKey));const g=await X(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in n?{provider_id:n.providerId}:null),"domain"in n?{domain:n.domain}:null),{redirect_to:(l=(r=n.options)===null||r===void 0?void 0:r.redirectTo)!==null&&l!==void 0?l:void 0}),!((c=n==null?void 0:n.options)===null||c===void 0)&&c.captchaToken?{gotrue_meta_security:{captcha_token:n.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:m,code_challenge_method:p}),headers:this.headers,xform:i4});return!((d=g.data)===null||d===void 0)&&d.url&&ht()&&!(!((h=n.options)===null||h===void 0)&&h.skipBrowserRedirect)&&window.location.assign(g.data.url),this._returnResult(g)}catch(m){if(await Ve(this.storage,`${this.storageKey}-code-verifier`),Z(m))return this._returnResult({data:null,error:m});throw m}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async n=>{const{data:{session:r},error:l}=n;if(l)throw l;if(!r)throw new nt;const{error:c}=await X(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return this._returnResult({data:{user:null,session:null},error:c})})}catch(n){if(Z(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}}async resend(n){try{const r=`${this.url}/resend`;if("email"in n){const{email:l,type:c,options:d}=n;let h=null,m=null;this.flowType==="pkce"&&([h,m]=await qa(this.storage,this.storageKey));const{error:p}=await X(this.fetch,"POST",r,{headers:this.headers,body:{email:l,type:c,gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken},code_challenge:h,code_challenge_method:m},redirectTo:d==null?void 0:d.emailRedirectTo});return p&&await Ve(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:p})}else if("phone"in n){const{phone:l,type:c,options:d}=n,{data:h,error:m}=await X(this.fetch,"POST",r,{headers:this.headers,body:{phone:l,type:c,gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:h==null?void 0:h.message_id},error:m})}throw new gl("You must provide either an email or phone number and a type")}catch(r){if(await Ve(this.storage,`${this.storageKey}-code-verifier`),Z(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async n=>n)):await this._useSession(async n=>n)}async _acquireLock(n,r){this._debug("#_acquireLock","begin",n);try{if(this.lockAcquired){const l=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),c=(async()=>(await l,await r()))();return this.pendingInLock.push((async()=>{try{await c}catch{}})()),c}return await this.lock(`lock:${this.storageKey}`,n,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const l=r();for(this.pendingInLock.push((async()=>{try{await l}catch{}})()),await l;this.pendingInLock.length;){const c=[...this.pendingInLock];await Promise.all(c),this.pendingInLock.splice(0,c.length)}return await l}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(n){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await n(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let n=null;const r=await Yt(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?n=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!n)return{data:{session:null},error:null};const l=n.expires_at?n.expires_at*1e3-Date.now()<nc:!1;if(this._debug("#__loadSession()",`session has${l?"":" not"} expired`,"expires_at",n.expires_at),!l){if(this.userStorage){const h=await Yt(this.userStorage,this.storageKey+"-user");h!=null&&h.user?n.user=h.user:n.user=ac()}if(this.storage.isServer&&n.user&&!n.user.__isUserNotAvailableProxy){const h={value:this.suppressGetSessionWarning};n.user=e4(n.user,h),h.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:n},error:null}}const{data:c,error:d}=await this._callRefreshToken(n.refresh_token);if(d){if(!!(n.expires_at&&n.expires_at*1e3>Date.now())){const m=await Yt(this.storage,this.storageKey);if(m&&m.refresh_token===n.refresh_token)return this._returnResult({data:{session:n},error:null})}return this._returnResult({data:{session:null},error:d})}return this._returnResult({data:{session:c},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(n){if(n)return await this._getUser(n);await this.initializePromise;let r;return this.lock!=null?r=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):r=await this._getUser(),r.data.user&&(this.suppressGetSessionWarning=!0),r}async _getUser(n){try{return n?await X(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:n,xform:ha}):await this._useSession(async r=>{var l,c,d;const{data:h,error:m}=r;if(m)throw m;return!(!((l=h.session)===null||l===void 0)&&l.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new nt}:await X(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(d=(c=h.session)===null||c===void 0?void 0:c.access_token)!==null&&d!==void 0?d:void 0,xform:ha})})}catch(r){if(Z(r))return ml(r)&&(await this._removeSession(),await Ve(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:r});throw r}}async updateUser(n,r={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(n,r)):await this._updateUser(n,r)}async _updateUser(n,r={}){try{return await this._useSession(async l=>{const{data:c,error:d}=l;if(d)throw d;if(!c.session)throw new nt;const h=c.session;let m=null,p=null;this.flowType==="pkce"&&n.email!=null&&([m,p]=await qa(this.storage,this.storageKey));const{data:g,error:w}=await X(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r==null?void 0:r.emailRedirectTo,body:Object.assign(Object.assign({},n),{code_challenge:m,code_challenge_method:p}),jwt:h.access_token,xform:ha});if(w)throw w;return h.user=g.user,await this._saveSession(h),await this._notifyAllSubscribers("USER_UPDATED",h),this._returnResult({data:{user:h.user},error:null})})}catch(l){if(await Ve(this.storage,`${this.storageKey}-code-verifier`),Z(l))return this._returnResult({data:{user:null},error:l});throw l}}async setSession(n){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(n)):await this._setSession(n)}async _setSession(n){try{if(!n.access_token||!n.refresh_token)throw new nt;const r=Date.now()/1e3;let l=r,c=!0,d=null;const{payload:h}=vl(n.access_token);if(h.exp&&(l=h.exp,c=l<=r),c){const{data:m,error:p}=await this._callRefreshToken(n.refresh_token);if(p)return this._returnResult({data:{user:null,session:null},error:p});if(!m)return{data:{user:null,session:null},error:null};d=m}else{const{data:m,error:p}=await this._getUser(n.access_token);if(p)return this._returnResult({data:{user:null,session:null},error:p});d={access_token:n.access_token,refresh_token:n.refresh_token,user:m.user,token_type:"bearer",expires_in:l-r,expires_at:l},await this._saveSession(d),await this._notifyAllSubscribers("SIGNED_IN",d)}return this._returnResult({data:{user:d.user,session:d},error:null})}catch(r){if(Z(r))return this._returnResult({data:{session:null,user:null},error:r});throw r}}async refreshSession(n){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(n)):await this._refreshSession(n)}async _refreshSession(n){try{return await this._useSession(async r=>{var l;if(!n){const{data:h,error:m}=r;if(m)throw m;n=(l=h.session)!==null&&l!==void 0?l:void 0}if(!(n!=null&&n.refresh_token))throw new nt;const{data:c,error:d}=await this._callRefreshToken(n.refresh_token);return d?this._returnResult({data:{user:null,session:null},error:d}):c?this._returnResult({data:{user:c.user,session:c},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(r){if(Z(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async _getSessionFromURL(n,r){var l;try{if(!ht())throw new yl("No browser detected.");if(n.error||n.error_description||n.error_code)throw new yl(n.error_description||"Error in URL with unspecified error_description",{error:n.error||"unspecified_error",code:n.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new Yh("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new yl("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!n.code)throw new Yh("No code detected.");const{data:L,error:ie}=await this._exchangeCodeForSession(n.code);if(ie)throw ie;const fe=new URL(window.location.href);return fe.searchParams.delete("code"),window.history.replaceState(window.history.state,"",fe.toString()),{data:{session:L.session,redirectType:(l=L.redirectType)!==null&&l!==void 0?l:null},error:null}}const{provider_token:c,provider_refresh_token:d,access_token:h,refresh_token:m,expires_in:p,expires_at:g,token_type:w}=n;if(!h||!p||!m||!w)throw new yl("No session defined in URL");const v=Math.round(Date.now()/1e3),A=parseInt(p);let k=v+A;g&&(k=parseInt(g));const C=k-v;C*1e3<=Un&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${C}s, should have been closer to ${A}s`);const D=k-A;v-D>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",D,k,v):v-D<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",D,k,v);const{data:P,error:V}=await this._getUser(h);if(V)throw V;const B={provider_token:c,provider_refresh_token:d,access_token:h,expires_in:A,expires_at:k,refresh_token:m,token_type:w,user:P.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:B,redirectType:n.type},error:null})}catch(c){if(Z(c))return this._returnResult({data:{session:null,redirectType:null},error:c});throw c}}_isImplicitGrantCallback(n){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),n):!!(n.access_token||n.error||n.error_description||n.error_code)}async _isPKCECallback(n){const r=await Yt(this.storage,`${this.storageKey}-code-verifier`);return!!(n.code&&r)}async signOut(n={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(n)):await this._signOut(n)}async _signOut({scope:n}={scope:"global"}){return await this._useSession(async r=>{var l;const{data:c,error:d}=r;if(d&&!ml(d))return this._returnResult({error:d});const h=(l=c.session)===null||l===void 0?void 0:l.access_token;if(h){const{error:m}=await this.admin.signOut(h,n);if(m&&!(x3(m)&&(m.status===404||m.status===401||m.status===403)||ml(m)))return this._returnResult({error:m})}return n!=="others"&&(await this._removeSession(),await Ve(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(n){const r=L3(),l={id:r,callback:n,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,l),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(r)}):await this._emitInitialSession(r)))(),{data:{subscription:l}}}async _emitInitialSession(n){return await this._useSession(async r=>{var l,c;try{const{data:{session:d},error:h}=r;if(h)throw h;await((l=this.stateChangeEmitters.get(n))===null||l===void 0?void 0:l.callback("INITIAL_SESSION",d)),this._debug("INITIAL_SESSION","callback id",n,"session",d)}catch(d){await((c=this.stateChangeEmitters.get(n))===null||c===void 0?void 0:c.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",n,"error",d),ml(d)?console.warn(d):console.error(d)}})}async resetPasswordForEmail(n,r={}){let l=null,c=null;this.flowType==="pkce"&&([l,c]=await qa(this.storage,this.storageKey,!0));try{return await X(this.fetch,"POST",`${this.url}/recover`,{body:{email:n,code_challenge:l,code_challenge_method:c,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(d){if(await Ve(this.storage,`${this.storageKey}-code-verifier`),Z(d))return this._returnResult({data:null,error:d});throw d}}async getUserIdentities(){var n;try{const{data:r,error:l}=await this.getUser();if(l)throw l;return this._returnResult({data:{identities:(n=r.user.identities)!==null&&n!==void 0?n:[]},error:null})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}async linkIdentity(n){return"token"in n?this.linkIdentityIdToken(n):this.linkIdentityOAuth(n)}async linkIdentityOAuth(n){var r;try{const{data:l,error:c}=await this._useSession(async d=>{var h,m,p,g,w;const{data:v,error:A}=d;if(A)throw A;const k=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,n.provider,{redirectTo:(h=n.options)===null||h===void 0?void 0:h.redirectTo,scopes:(m=n.options)===null||m===void 0?void 0:m.scopes,queryParams:(p=n.options)===null||p===void 0?void 0:p.queryParams,skipBrowserRedirect:!0});return await X(this.fetch,"GET",k,{headers:this.headers,jwt:(w=(g=v.session)===null||g===void 0?void 0:g.access_token)!==null&&w!==void 0?w:void 0})});if(c)throw c;return ht()&&!(!((r=n.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(l==null?void 0:l.url),this._returnResult({data:{provider:n.provider,url:l==null?void 0:l.url},error:null})}catch(l){if(Z(l))return this._returnResult({data:{provider:n.provider,url:null},error:l});throw l}}async linkIdentityIdToken(n){return await this._useSession(async r=>{var l;try{const{error:c,data:{session:d}}=r;if(c)throw c;const{options:h,provider:m,token:p,access_token:g,nonce:w}=n,v=await X(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(l=d==null?void 0:d.access_token)!==null&&l!==void 0?l:void 0,body:{provider:m,id_token:p,access_token:g,nonce:w,link_identity:!0,gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:Vt}),{data:A,error:k}=v;return k?this._returnResult({data:{user:null,session:null},error:k}):!A||!A.session||!A.user?this._returnResult({data:{user:null,session:null},error:new Ki}):(A.session&&(await this._saveSession(A.session),await this._notifyAllSubscribers("USER_UPDATED",A.session)),this._returnResult({data:A,error:k}))}catch(c){if(await Ve(this.storage,`${this.storageKey}-code-verifier`),Z(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}})}async unlinkIdentity(n){try{return await this._useSession(async r=>{var l,c;const{data:d,error:h}=r;if(h)throw h;return await X(this.fetch,"DELETE",`${this.url}/user/identities/${n.identity_id}`,{headers:this.headers,jwt:(c=(l=d.session)===null||l===void 0?void 0:l.access_token)!==null&&c!==void 0?c:void 0})})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}async _refreshAccessToken(n){const r="#_refreshAccessToken()";this._debug(r,"begin");try{const l=Date.now();return await V3(async c=>(c>0&&await P3(200*Math.pow(2,c-1)),this._debug(r,"refreshing attempt",c),await X(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:n},headers:this.headers,xform:Vt})),(c,d)=>{const h=200*Math.pow(2,c);return d&&Jh(d)&&Date.now()+h-l<Un})}catch(l){if(this._debug(r,"error",l),Z(l))return this._returnResult({data:{session:null,user:null},error:l});throw l}finally{this._debug(r,"end")}}_isValidSession(n){return typeof n=="object"&&n!==null&&"access_token"in n&&"refresh_token"in n&&"expires_at"in n}async _handleProviderSignIn(n,r){const l=await this._getUrlForProvider(`${this.url}/authorize`,n,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",n,"options",r,"url",l),ht()&&!r.skipBrowserRedirect&&window.location.assign(l),{data:{provider:n,url:l},error:null}}async _recoverAndRefresh(){var n,r;const l="#_recoverAndRefresh()";this._debug(l,"begin");try{const c=await Yt(this.storage,this.storageKey);if(c&&this.userStorage){let h=await Yt(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!h&&(h={user:c.user},await xi(this.userStorage,this.storageKey+"-user",h)),c.user=(n=h==null?void 0:h.user)!==null&&n!==void 0?n:ac()}else if(c&&!c.user&&!c.user){const h=await Yt(this.storage,this.storageKey+"-user");h&&(h!=null&&h.user)?(c.user=h.user,await Ve(this.storage,this.storageKey+"-user"),await xi(this.storage,this.storageKey,c)):c.user=ac()}if(this._debug(l,"session from storage",c),!this._isValidSession(c)){this._debug(l,"session is not valid"),c!==null&&await this._removeSession();return}const d=((r=c.expires_at)!==null&&r!==void 0?r:1/0)*1e3-Date.now()<nc;if(this._debug(l,`session has${d?"":" not"} expired with margin of ${nc}s`),d){if(this.autoRefreshToken&&c.refresh_token){const{error:h}=await this._callRefreshToken(c.refresh_token);h&&(N3(h)?this._debug(l,"refresh discarded by commit guard",h):this._debug(l,"refresh failed",h))}}else if(c.user&&c.user.__isUserNotAvailableProxy===!0)try{const{data:h,error:m}=await this._getUser(c.access_token);!m&&(h!=null&&h.user)?(c.user=h.user,await this._saveSession(c),await this._notifyAllSubscribers("SIGNED_IN",c)):this._debug(l,"could not get user data, skipping SIGNED_IN notification")}catch(h){console.error("Error getting user data:",h),this._debug(l,"error getting user data, skipping SIGNED_IN notification",h)}else await this._notifyAllSubscribers("SIGNED_IN",c)}catch(c){this._debug(l,"error",c),console.error(c);return}finally{this._debug(l,"end")}}async _callRefreshToken(n){var r,l;if(!n)throw new nt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===n&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const c="#_callRefreshToken()";this._debug(c,"begin");try{this.refreshingDeferred=new Ml;const d=await Yt(this.storage,this.storageKey),{data:h,error:m}=await this._refreshAccessToken(n);if(m)throw m;if(!h.session)throw new nt;const p=await Yt(this.storage,this.storageKey);if(d!==null&&(p===null||p.refresh_token!==d.refresh_token)){this._debug(c,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:p?"replaced":"cleared"});const A={data:null,error:new Xh};return this.refreshingDeferred.resolve(A),A}const w=this._sessionRemovalEpoch;if(await this._saveSession(h.session),this._sessionRemovalEpoch!==w){this._debug(c,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await Ve(this.storage,this.storageKey),this.userStorage&&await Ve(this.userStorage,this.storageKey+"-user");const A={data:null,error:new Xh};return this.refreshingDeferred.resolve(A),A}await this._notifyAllSubscribers("TOKEN_REFRESHED",h.session);const v={data:h.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(v),v}catch(d){if(this._debug(c,"error",d),Z(d)){const h={data:null,error:d};if(!Jh(d)){const m=await Yt(this.storage,this.storageKey);!!(m!=null&&m.expires_at&&m.expires_at*1e3>Date.now())?this._debug(c,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:n,result:h,expiresAt:Date.now()+E3},(r=this.refreshingDeferred)===null||r===void 0||r.resolve(h),h}throw(l=this.refreshingDeferred)===null||l===void 0||l.reject(d),d}finally{this.refreshingDeferred=null,this._debug(c,"end")}}async _notifyAllSubscribers(n,r,l=!0){const c=`#_notifyAllSubscribers(${n})`;this._debug(c,"begin",r,`broadcast = ${l}`);try{this.broadcastChannel&&l&&this.broadcastChannel.postMessage({event:n,session:r});const d=[],h=Array.from(this.stateChangeEmitters.values()).map(async m=>{try{await m.callback(n,r)}catch(p){d.push(p)}});if(await Promise.all(h),d.length>0){for(let m=0;m<d.length;m+=1)console.error(d[m]);throw d[0]}}finally{this._debug(c,"end")}}async _saveSession(n){this._debug("#_saveSession()",n),this.suppressGetSessionWarning=!0,await Ve(this.storage,`${this.storageKey}-code-verifier`);const r=Object.assign({},n),l=r.user&&r.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!l&&r.user&&await xi(this.userStorage,this.storageKey+"-user",{user:r.user});const c=Object.assign({},r);delete c.user;const d=tf(c);await xi(this.storage,this.storageKey,d)}else{const c=tf(r);await xi(this.storage,this.storageKey,c)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await Ve(this.storage,this.storageKey),await Ve(this.storage,this.storageKey+"-code-verifier"),await Ve(this.storage,this.storageKey+"-user"),this.userStorage&&await Ve(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const n=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{n&&ht()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",n)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const n=setInterval(()=>this._autoRefreshTokenTick(),Un);this.autoRefreshTicker=n,n&&typeof n=="object"&&typeof n.unref=="function"?n.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(n);const r=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=r,r&&typeof r=="object"&&typeof r.unref=="function"?r.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(r)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const n=this.autoRefreshTicker;this.autoRefreshTicker=null,n&&clearInterval(n);const r=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,r&&clearTimeout(r)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var n;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(n=this.broadcastChannel)===null||n===void 0||n.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const n=Date.now();try{return await this._useSession(async r=>{const{data:{session:l}}=r;if(!l||!l.refresh_token||!l.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const c=Math.floor((l.expires_at*1e3-n)/Un);this._debug("#_autoRefreshTokenTick()",`access token expires in ${c} ticks, a tick lasts ${Un}ms, refresh threshold is ${Cs} ticks`),c<=Cs&&await this._callRefreshToken(l.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(n){if(n instanceof o4)this._debug("auto refresh token tick lock not available");else throw n}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const n=Date.now();try{await this._useSession(async r=>{const{data:{session:l}}=r;if(!l||!l.refresh_token||!l.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const c=Math.floor((l.expires_at*1e3-n)/Un);this._debug("#_autoRefreshTokenTick()",`access token expires in ${c} ticks, a tick lasts ${Un}ms, refresh threshold is ${Cs} ticks`),c<=Cs&&await this._callRefreshToken(l.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!ht()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(n){this._debug("#visibilityChangedCallback","error",n)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(n){console.error("_handleVisibilityChange",n)}}async _onVisibilityChanged(n){const r=`#_onVisibilityChanged(${n})`;if(this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!n)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(r,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(n,r,l){const c=[`provider=${encodeURIComponent(r)}`];if(l!=null&&l.redirectTo&&c.push(`redirect_to=${encodeURIComponent(l.redirectTo)}`),l!=null&&l.scopes&&c.push(`scopes=${encodeURIComponent(l.scopes)}`),this.flowType==="pkce"){const[d,h]=await qa(this.storage,this.storageKey),m=new URLSearchParams({code_challenge:`${encodeURIComponent(d)}`,code_challenge_method:`${encodeURIComponent(h)}`});c.push(m.toString())}if(l!=null&&l.queryParams){const d=new URLSearchParams(l.queryParams);c.push(d.toString())}return l!=null&&l.skipBrowserRedirect&&c.push(`skip_http_redirect=${l.skipBrowserRedirect}`),`${n}?${c.join("&")}`}async _unenroll(n){try{return await this._useSession(async r=>{var l;const{data:c,error:d}=r;return d?this._returnResult({data:null,error:d}):await X(this.fetch,"DELETE",`${this.url}/factors/${n.factorId}`,{headers:this.headers,jwt:(l=c==null?void 0:c.session)===null||l===void 0?void 0:l.access_token})})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}async _enroll(n){try{return await this._useSession(async r=>{var l,c;const{data:d,error:h}=r;if(h)return this._returnResult({data:null,error:h});const m=Object.assign({friendly_name:n.friendlyName,factor_type:n.factorType},n.factorType==="phone"?{phone:n.phone}:n.factorType==="totp"?{issuer:n.issuer}:{}),{data:p,error:g}=await X(this.fetch,"POST",`${this.url}/factors`,{body:m,headers:this.headers,jwt:(l=d==null?void 0:d.session)===null||l===void 0?void 0:l.access_token});return g?this._returnResult({data:null,error:g}):(n.factorType==="totp"&&p.type==="totp"&&(!((c=p==null?void 0:p.totp)===null||c===void 0)&&c.qr_code)&&(p.totp.qr_code=`data:image/svg+xml;utf-8,${p.totp.qr_code}`),this._returnResult({data:p,error:null}))})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}async _verify(n){const r=async()=>{try{return await this._useSession(async l=>{var c;const{data:d,error:h}=l;if(h)return this._returnResult({data:null,error:h});const m=Object.assign({challenge_id:n.challengeId},"webauthn"in n?{webauthn:Object.assign(Object.assign({},n.webauthn),{credential_response:n.webauthn.type==="create"?uf(n.webauthn.credential_response):cf(n.webauthn.credential_response)})}:{code:n.code}),{data:p,error:g}=await X(this.fetch,"POST",`${this.url}/factors/${n.factorId}/verify`,{body:m,headers:this.headers,jwt:(c=d==null?void 0:d.session)===null||c===void 0?void 0:c.access_token});return g?this._returnResult({data:null,error:g}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+p.expires_in},p)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",p),this._returnResult({data:p,error:g}))})}catch(l){if(Z(l))return this._returnResult({data:null,error:l});throw l}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,r):r()}async _challenge(n){const r=async()=>{try{return await this._useSession(async l=>{var c;const{data:d,error:h}=l;if(h)return this._returnResult({data:null,error:h});const m=await X(this.fetch,"POST",`${this.url}/factors/${n.factorId}/challenge`,{body:n,headers:this.headers,jwt:(c=d==null?void 0:d.session)===null||c===void 0?void 0:c.access_token});if(m.error)return m;const{data:p}=m;if(p.type!=="webauthn")return{data:p,error:null};switch(p.webauthn.type){case"create":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:lf(p.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:of(p.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(l){if(Z(l))return this._returnResult({data:null,error:l});throw l}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,r):r()}async _challengeAndVerify(n){const{data:r,error:l}=await this._challenge({factorId:n.factorId});return l?this._returnResult({data:null,error:l}):await this._verify({factorId:n.factorId,challengeId:r.id,code:n.code})}async _listFactors(){var n;const{data:{user:r},error:l}=await this.getUser();if(l)return{data:null,error:l};const c={all:[],phone:[],totp:[],webauthn:[]};for(const d of(n=r==null?void 0:r.factors)!==null&&n!==void 0?n:[])c.all.push(d),d.status==="verified"&&c[d.factor_type].push(d);return{data:c,error:null}}async _getAuthenticatorAssuranceLevel(n){var r,l,c,d;if(n)try{const{payload:k}=vl(n);let C=null;k.aal&&(C=k.aal);let D=C;const{data:{user:P},error:V}=await this.getUser(n);if(V)return this._returnResult({data:null,error:V});((l=(r=P==null?void 0:P.factors)===null||r===void 0?void 0:r.filter(ie=>ie.status==="verified"))!==null&&l!==void 0?l:[]).length>0&&(D="aal2");const L=k.amr||[];return{data:{currentLevel:C,nextLevel:D,currentAuthenticationMethods:L},error:null}}catch(k){if(Z(k))return this._returnResult({data:null,error:k});throw k}const{data:{session:h},error:m}=await this.getSession();if(m)return this._returnResult({data:null,error:m});if(!h)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:p}=vl(h.access_token);let g=null;p.aal&&(g=p.aal);let w=g;((d=(c=h.user.factors)===null||c===void 0?void 0:c.filter(k=>k.status==="verified"))!==null&&d!==void 0?d:[]).length>0&&(w="aal2");const A=p.amr||[];return{data:{currentLevel:g,nextLevel:w,currentAuthenticationMethods:A},error:null}}async _getAuthorizationDetails(n){try{return await this._useSession(async r=>{const{data:{session:l},error:c}=r;return c?this._returnResult({data:null,error:c}):l?await X(this.fetch,"GET",`${this.url}/oauth/authorizations/${n}`,{headers:this.headers,jwt:l.access_token,xform:d=>({data:d,error:null})}):this._returnResult({data:null,error:new nt})})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}async _approveAuthorization(n,r){try{return await this._useSession(async l=>{const{data:{session:c},error:d}=l;if(d)return this._returnResult({data:null,error:d});if(!c)return this._returnResult({data:null,error:new nt});const h=await X(this.fetch,"POST",`${this.url}/oauth/authorizations/${n}/consent`,{headers:this.headers,jwt:c.access_token,body:{action:"approve"},xform:m=>({data:m,error:null})});return h.data&&h.data.redirect_url&&ht()&&!(r!=null&&r.skipBrowserRedirect)&&window.location.assign(h.data.redirect_url),h})}catch(l){if(Z(l))return this._returnResult({data:null,error:l});throw l}}async _denyAuthorization(n,r){try{return await this._useSession(async l=>{const{data:{session:c},error:d}=l;if(d)return this._returnResult({data:null,error:d});if(!c)return this._returnResult({data:null,error:new nt});const h=await X(this.fetch,"POST",`${this.url}/oauth/authorizations/${n}/consent`,{headers:this.headers,jwt:c.access_token,body:{action:"deny"},xform:m=>({data:m,error:null})});return h.data&&h.data.redirect_url&&ht()&&!(r!=null&&r.skipBrowserRedirect)&&window.location.assign(h.data.redirect_url),h})}catch(l){if(Z(l))return this._returnResult({data:null,error:l});throw l}}async _listOAuthGrants(){try{return await this._useSession(async n=>{const{data:{session:r},error:l}=n;return l?this._returnResult({data:null,error:l}):r?await X(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:r.access_token,xform:c=>({data:c,error:null})}):this._returnResult({data:null,error:new nt})})}catch(n){if(Z(n))return this._returnResult({data:null,error:n});throw n}}async _revokeOAuthGrant(n){try{return await this._useSession(async r=>{const{data:{session:l},error:c}=r;return c?this._returnResult({data:null,error:c}):l?(await X(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:l.access_token,query:{client_id:n.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new nt})})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}async fetchJwk(n,r={keys:[]}){let l=r.keys.find(m=>m.kid===n);if(l)return l;const c=Date.now();if(l=this.jwks.keys.find(m=>m.kid===n),l&&this.jwks_cached_at+O3>c)return l;const{data:d,error:h}=await X(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(h)throw h;return!d.keys||d.keys.length===0||(this.jwks=d,this.jwks_cached_at=c,l=d.keys.find(m=>m.kid===n),!l)?null:l}async getClaims(n,r={}){try{let l=n;if(!l){const{data:k,error:C}=await this.getSession();if(C||!k.session)return this._returnResult({data:null,error:C});l=k.session.access_token}const{header:c,payload:d,signature:h,raw:{header:m,payload:p}}=vl(l);if(!(r!=null&&r.allowExpired))try{Q3(d.exp)}catch(k){throw new El(k instanceof Error?k.message:"JWT validation failed")}const g=!c.alg||c.alg.startsWith("HS")||!c.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(c.kid,r!=null&&r.keys?{keys:r.keys}:r==null?void 0:r.jwks);if(!g){const{error:k}=await this.getUser(l);if(k)throw k;return{data:{claims:d,header:c,signature:h},error:null}}const w=F3(c.alg),v=await crypto.subtle.importKey("jwk",g,w,!0,["verify"]);if(!await crypto.subtle.verify(w,v,h,z3(`${m}.${p}`)))throw new El("Invalid JWT signature");return{data:{claims:d,header:c,signature:h},error:null}}catch(l){if(Z(l))return this._returnResult({data:null,error:l});throw l}}async signInWithPasskey(n){var r,l,c;Jt(this.experimental);try{if(!Kl())return this._returnResult({data:null,error:new Qt("Browser does not support WebAuthn",null)});const{data:d,error:h}=await this._startPasskeyAuthentication({options:{captchaToken:(r=n==null?void 0:n.options)===null||r===void 0?void 0:r.captchaToken}});if(h||!d)return this._returnResult({data:null,error:h});const m=of(d.options),p=(c=(l=n==null?void 0:n.options)===null||l===void 0?void 0:l.signal)!==null&&c!==void 0?c:wc.createNewAbortSignal(),{data:g,error:w}=await Gf({publicKey:m,signal:p});if(w||!g)return this._returnResult({data:null,error:w??new Qt("WebAuthn ceremony failed",null)});const v=cf(g);return this._verifyPasskeyAuthentication({challengeId:d.challenge_id,credential:v})}catch(d){if(Z(d))return this._returnResult({data:null,error:d});throw d}}async registerPasskey(n){var r,l;Jt(this.experimental);try{if(!Kl())return this._returnResult({data:null,error:new Qt("Browser does not support WebAuthn",null)});const{data:c,error:d}=await this._startPasskeyRegistration();if(d||!c)return this._returnResult({data:null,error:d});const h=lf(c.options),m=(l=(r=n==null?void 0:n.options)===null||r===void 0?void 0:r.signal)!==null&&l!==void 0?l:wc.createNewAbortSignal(),{data:p,error:g}=await $f({publicKey:h,signal:m});if(g||!p)return this._returnResult({data:null,error:g??new Qt("WebAuthn ceremony failed",null)});const w=uf(p);return this._verifyPasskeyRegistration({challengeId:c.challenge_id,credential:w})}catch(c){if(Z(c))return this._returnResult({data:null,error:c});throw c}}async _startPasskeyRegistration(){Jt(this.experimental);try{return await this._useSession(async n=>{const{data:{session:r},error:l}=n;if(l)return this._returnResult({data:null,error:l});if(!r)return this._returnResult({data:null,error:new nt});const{data:c,error:d}=await X(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:r.access_token,body:{}});return d?this._returnResult({data:null,error:d}):this._returnResult({data:c,error:null})})}catch(n){if(Z(n))return this._returnResult({data:null,error:n});throw n}}async _verifyPasskeyRegistration(n){Jt(this.experimental);try{return await this._useSession(async r=>{const{data:{session:l},error:c}=r;if(c)return this._returnResult({data:null,error:c});if(!l)return this._returnResult({data:null,error:new nt});const{data:d,error:h}=await X(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:l.access_token,body:{challenge_id:n.challengeId,credential:n.credential}});return h?this._returnResult({data:null,error:h}):this._returnResult({data:d,error:null})})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}async _startPasskeyAuthentication(n){var r;Jt(this.experimental);try{const{data:l,error:c}=await X(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(r=n==null?void 0:n.options)===null||r===void 0?void 0:r.captchaToken}}});return c?this._returnResult({data:null,error:c}):this._returnResult({data:l,error:null})}catch(l){if(Z(l))return this._returnResult({data:null,error:l});throw l}}async _verifyPasskeyAuthentication(n){Jt(this.experimental);try{const{data:r,error:l}=await X(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:n.challengeId,credential:n.credential},xform:Vt});return l?this._returnResult({data:null,error:l}):(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),this._returnResult({data:r,error:null}))}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}async _listPasskeys(){Jt(this.experimental);try{return await this._useSession(async n=>{const{data:{session:r},error:l}=n;if(l)return this._returnResult({data:null,error:l});if(!r)return this._returnResult({data:null,error:new nt});const{data:c,error:d}=await X(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:r.access_token,xform:h=>({data:h,error:null})});return d?this._returnResult({data:null,error:d}):this._returnResult({data:c,error:null})})}catch(n){if(Z(n))return this._returnResult({data:null,error:n});throw n}}async _updatePasskey(n){Jt(this.experimental);try{return await this._useSession(async r=>{const{data:{session:l},error:c}=r;if(c)return this._returnResult({data:null,error:c});if(!l)return this._returnResult({data:null,error:new nt});const{data:d,error:h}=await X(this.fetch,"PATCH",`${this.url}/passkeys/${n.passkeyId}`,{headers:this.headers,jwt:l.access_token,body:{friendly_name:n.friendlyName}});return h?this._returnResult({data:null,error:h}):this._returnResult({data:d,error:null})})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}async _deletePasskey(n){Jt(this.experimental);try{return await this._useSession(async r=>{const{data:{session:l},error:c}=r;if(c)return this._returnResult({data:null,error:c});if(!l)return this._returnResult({data:null,error:new nt});const{error:d}=await X(this.fetch,"DELETE",`${this.url}/passkeys/${n.passkeyId}`,{headers:this.headers,jwt:l.access_token,noResolveJson:!0});return d?this._returnResult({data:null,error:d}):this._returnResult({data:null,error:null})})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}}Is.nextInstanceID={};const S4=Is,E4="2.109.0";let js="",Ol;if(typeof Deno<"u"){var sc;js="deno",Ol=(sc=Deno.version)===null||sc===void 0?void 0:sc.deno}else if(typeof document<"u")js="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")js="react-native";else{var rc;js="node",Ol=typeof process<"u"?(rc=process.version)===null||rc===void 0?void 0:rc.replace(/^v/,""):void 0}const Zf=[`runtime=${js}`];Ol&&Zf.push(`runtime-version=${Ol}`);const A4={"X-Client-Info":`supabase-js/${E4}; ${Zf.join("; ")}`},T4={headers:A4},K4={schema:"public"},k4={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},O4={},R4={enabled:!1,respectSamplingDecision:!0};function x4(i,n,r,l){function c(d){return d instanceof r?d:new r(function(h){h(d)})}return new(r||(r=Promise))(function(d,h){function m(w){try{g(l.next(w))}catch(v){h(v)}}function p(w){try{g(l.throw(w))}catch(v){h(v)}}function g(w){w.done?d(w.value):c(w.value).then(m,p)}g((l=l.apply(i,[])).next())})}let lc=null;const C4="@opentelemetry/api";function j4(){return lc===null&&(lc=import(C4).catch(()=>null)),lc}function N4(){return x4(this,void 0,void 0,function*(){try{const i=yield j4();if(!i||!i.propagation||!i.context)return null;const n={};i.propagation.inject(i.context.active(),n);const r=n.traceparent;return r?{traceparent:r,tracestate:n.tracestate,baggage:n.baggage}:null}catch{return null}})}function q4(i){if(!i||typeof i!="string")return null;const n=i.split("-");if(n.length!==4)return null;const[r,l,c,d]=n;if(r.length!==2||l.length!==32||c.length!==16||d.length!==2)return null;const h=/^[0-9a-f]+$/i;return!h.test(r)||!h.test(l)||!h.test(c)||!h.test(d)||l==="00000000000000000000000000000000"||c==="0000000000000000"?null:{version:r,traceId:l,parentId:c,traceFlags:d,isSampled:(parseInt(d,16)&1)===1}}function M4(i,n){if(!i||!n||n.length===0)return!1;let r;if(i instanceof URL)r=i;else try{r=new URL(i)}catch{return!1}for(const l of n)try{if(typeof l=="string"){if(U4(r.hostname,l))return!0}else if(l instanceof RegExp){if(l.test(r.hostname))return!0}else if(typeof l=="function"&&l(r))return!0}catch{continue}return!1}function U4(i,n){if(n===i)return!0;if(n.startsWith("*.")){const r=n.slice(2);if(i.endsWith(r)&&(i===r||i.endsWith("."+r)))return!0}return!1}function D4(i){const n=[];try{const r=new URL(i);n.push(r.hostname)}catch{}return n.push("*.supabase.co","*.supabase.in"),n.push("localhost","127.0.0.1","[::1]"),n}function Ps(i){"@babel/helpers - typeof";return Ps=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ps(i)}function z4(i,n){if(Ps(i)!="object"||!i)return i;var r=i[Symbol.toPrimitive];if(r!==void 0){var l=r.call(i,n);if(Ps(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function H4(i){var n=z4(i,"string");return Ps(n)=="symbol"?n:n+""}function L4(i,n,r){return(n=H4(n))in i?Object.defineProperty(i,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[n]=r,i}function df(i,n){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);n&&(l=l.filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable})),r.push.apply(r,l)}return r}function Be(i){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?df(Object(r),!0).forEach(function(l){L4(i,l,r[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):df(Object(r)).forEach(function(l){Object.defineProperty(i,l,Object.getOwnPropertyDescriptor(r,l))})}return i}const B4=i=>i?(...n)=>i(...n):(...n)=>fetch(...n),I4=()=>Headers,P4=(i,n,r,l,c)=>{const d=B4(l),h=I4(),m=(c==null?void 0:c.enabled)===!0,p=(c==null?void 0:c.respectSamplingDecision)!==!1,g=m?D4(n):null;return async(w,v)=>{var A;const k=(A=await r())!==null&&A!==void 0?A:i;let C=new h(v==null?void 0:v.headers);if(C.has("apikey")||C.set("apikey",i),C.has("Authorization")||C.set("Authorization",`Bearer ${k}`),g){const D=await V4(w,g,p);D&&(D.traceparent&&!C.has("traceparent")&&C.set("traceparent",D.traceparent),D.tracestate&&!C.has("tracestate")&&C.set("tracestate",D.tracestate),D.baggage&&!C.has("baggage")&&C.set("baggage",D.baggage))}return d(w,Be(Be({},v),{},{headers:C}))}};async function V4(i,n,r){if(!M4(typeof i=="string"||i instanceof URL?i:i.url,n))return null;const l=await N4();if(!l||!l.traceparent)return null;if(r){const c=q4(l.traceparent);if(c&&!c.isSampled)return null}return l}function hf(i){return typeof i=="boolean"?{enabled:i}:i}function $4(i){return i.endsWith("/")?i:i+"/"}function G4(i,n){var r,l,c,d,h,m;const{db:p,auth:g,realtime:w,global:v}=i,{db:A,auth:k,realtime:C,global:D}=n,P=hf(i.tracePropagation),V=hf(n.tracePropagation),B={db:Be(Be({},A),p),auth:Be(Be({},k),g),realtime:Be(Be({},C),w),storage:{},global:Be(Be(Be({},D),v),{},{headers:Be(Be({},(r=D==null?void 0:D.headers)!==null&&r!==void 0?r:{}),(l=v==null?void 0:v.headers)!==null&&l!==void 0?l:{})}),tracePropagation:{enabled:(c=(d=P==null?void 0:P.enabled)!==null&&d!==void 0?d:V==null?void 0:V.enabled)!==null&&c!==void 0?c:!1,respectSamplingDecision:(h=(m=P==null?void 0:P.respectSamplingDecision)!==null&&m!==void 0?m:V==null?void 0:V.respectSamplingDecision)!==null&&h!==void 0?h:!0},accessToken:async()=>""};return i.accessToken?B.accessToken=i.accessToken:delete B.accessToken,B}function Z4(i){const n=i==null?void 0:i.trim();if(!n)throw new Error("supabaseUrl is required.");if(!n.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL($4(n))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var Y4=class extends S4{constructor(i){super(i)}},J4=class{constructor(i,n,r){var l,c;this.supabaseUrl=i,this.supabaseKey=n;const d=Z4(i);if(!n)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",d),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",d),this.storageUrl=new URL("storage/v1",d),this.functionsUrl=new URL("functions/v1",d);const h=`sb-${d.hostname.split(".")[0]}-auth-token`,m={db:K4,realtime:O4,auth:Be(Be({},k4),{},{storageKey:h}),global:T4,tracePropagation:R4},p=G4(r??{},m);if(this.settings=p,this.storageKey=(l=p.auth.storageKey)!==null&&l!==void 0?l:"",this.headers=(c=p.global.headers)!==null&&c!==void 0?c:{},p.accessToken)this.accessToken=p.accessToken,this.auth=new Proxy({},{get:(w,v)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(v)} is not possible`)}});else{var g;this.auth=this._initSupabaseAuthClient((g=p.auth)!==null&&g!==void 0?g:{},this.headers,p.global.fetch)}this.fetch=P4(n,i,this._getAccessToken.bind(this),p.global.fetch,p.tracePropagation),this.realtime=this._initRealtimeClient(Be({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},p.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(w=>this.realtime.setAuth(w)).catch(w=>console.warn("Failed to set initial Realtime auth token:",w)),this.rest=new ig(new URL("rest/v1",d).href,{headers:this.headers,schema:p.db.schema,fetch:this.fetch,timeout:p.db.timeout,urlLengthLimit:p.db.urlLengthLimit}),this.storage=new S3(this.storageUrl.href,this.headers,this.fetch,r==null?void 0:r.storage),p.accessToken||this._listenForAuthEvents()}get functions(){return new Jm(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(i){return this.rest.from(i)}schema(i){return this.rest.schema(i)}rpc(i,n={},r={head:!1,get:!1,count:void 0}){return this.rest.rpc(i,n,r)}channel(i,n={config:{}}){return this.realtime.channel(i,n)}getChannels(){return this.realtime.getChannels()}removeChannel(i){return this.realtime.removeChannel(i)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var i=this,n,r;if(i.accessToken)return await i.accessToken();const{data:l}=await i.auth.getSession();return(n=(r=l.session)===null||r===void 0?void 0:r.access_token)!==null&&n!==void 0?n:i.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:i,persistSession:n,detectSessionInUrl:r,storage:l,userStorage:c,storageKey:d,flowType:h,lock:m,debug:p,throwOnError:g,experimental:w,lockAcquireTimeout:v,skipAutoInitialize:A},k,C){const D={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Y4({url:this.authUrl.href,headers:Be(Be({},D),k),storageKey:d,autoRefreshToken:i,persistSession:n,detectSessionInUrl:r,storage:l,userStorage:c,flowType:h,lock:m,debug:p,throwOnError:g,experimental:w,fetch:C,lockAcquireTimeout:v,skipAutoInitialize:A,hasCustomAuthorizationHeader:Object.keys(this.headers).some(P=>P.toLowerCase()==="authorization")})}_initRealtimeClient(i){return new Gg(this.realtimeUrl.href,Be(Be({},i),{},{params:Be(Be({},{apikey:this.supabaseKey}),i==null?void 0:i.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((i,n)=>{this._handleTokenChanged(i,"CLIENT",n==null?void 0:n.access_token)})}_handleTokenChanged(i,n,r){(i==="TOKEN_REFRESHED"||i==="SIGNED_IN")&&this.changedAccessToken!==r?(this.changedAccessToken=r,this.realtime.setAuth(r)):i==="SIGNED_OUT"&&(this.realtime.setAuth(),n=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const X4=(i,n,r)=>new J4(i,n,r);function Q4(){if(typeof window<"u")return!1;const i=globalThis.process;if(!i)return!1;const n=i.version;if(n==null)return!1;const r=n.match(/^v(\d+)\./);return r?parseInt(r[1],10)<=18:!1}Q4()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const F4="https://fdgdosjlyhzmgktnancu.supabase.co",W4="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkZ2Rvc2pseWh6bWdrdG5hbmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3MzE0MzcsImV4cCI6MjEwODMwNzQzN30.yGJ2Zy6km26CmFchjrOm3idpvFT431_Ce4EBB6T9_zA",jn=X4(F4,W4),Vs=i=>JSON.stringify(i,(n,r)=>r&&typeof r=="object"&&!Array.isArray(r)?Object.fromEntries(Object.keys(r).sort().map(l=>[l,r[l]])):r),Rl=(i,n)=>Number.isFinite(i==null?void 0:i.updatedAt)?i.updatedAt:n,wl=(i,n,r,l)=>i?n?r>l?i:l>r?n:Vs(i)>=Vs(n)?i:n:i:n;function xl(i,n){const r=Pm(i,n),l={};for(const[c,d]of Object.entries(r.records)){const h=Rl(d,r.updatedAt??0);l[c]={...d,updatedAt:h,understoodAt:d.understoodAt??h,answers:Object.fromEntries(Object.entries(d.answers).map(([m,p])=>[m,{...p,updatedAt:Rl(p,h)}]))}}return{...r,records:l}}function Yf(i,n,r){const l=xl(i,r),c=xl(n,r),d=wl(l,c,l.updatedAt,c.updatedAt),h={};for(const p of[...new Set([...Object.keys(l.records),...Object.keys(c.records)])].sort()){const g=l.records[p],w=c.records[p];if(!g||!w){h[p]=g||w;continue}const v=wl(g,w,g.updatedAt,w.updatedAt);if(g.revision!==w.revision){h[p]=v;continue}const A={};for(const C of[...new Set([...Object.keys(g.answers),...Object.keys(w.answers)])].sort())A[C]=wl(g.answers[C],w.answers[C],Rl(g.answers[C],0),Rl(w.answers[C],0));const k=wl(g,w,g.understoodAt,w.understoodAt);h[p]={...v,answers:A,understood:!!k.understood,understoodAt:Math.max(g.understoodAt,w.understoodAt),updatedAt:Math.max(g.updatedAt,w.updatedAt)}}const m=[...new Map([...l.archives||[],...c.archives||[]].map(p=>[Vs(p),p])).entries()].sort(([p],[g])=>p.localeCompare(g)).map(([,p])=>p);return{...d,records:h,updatedAt:Math.max(l.updatedAt,c.updatedAt),...m.length?{archives:m}:{}}}async function ey(i,n,r,l){for(let c=0;c<5;c++){const{data:d,error:h}=await i.from("learning_progress").select("data,revision").eq("user_id",n).maybeSingle();if(h)throw h;if(d&&!Cl(d.data))throw Error("云端记录格式异常，已保留本机进度");const m=Yf(r,(d==null?void 0:d.data)||oc(),l);if(d&&Vs(m)===Vs(d.data))return m;if(!d){const g=await i.from("learning_progress").insert({user_id:n,data:m,revision:1}).select("revision").single();if(!g.error)return m;if(g.error.code==="23505")continue;throw g.error}const p=await i.from("learning_progress").update({data:m,revision:d.revision+1,updated_at:new Date().toISOString()}).eq("user_id",n).eq("revision",d.revision).select("revision").maybeSingle();if(p.error)throw p.error;if(p.data)return m}throw Error("其他设备正在同步，请稍后重试")}function ty(i,n,r,l,c){const[d,h]=b.useState(""),[m,p]=b.useState(!1),g=b.useRef(null),w=b.useRef(r);return w.current=r,b.useEffect(()=>{if(p(!1),!i||!n)return;let v=!0,A=!1,k=!1,C;async function D(){if(v){if(A){k=!0;return}if(!navigator.onLine){h("离线，已保存在本机");return}A=!0,h("正在同步");try{const ie=await ey(i,n.user.id,w.current,c);if(!v)return;l(fe=>{const te={...Yf(fe,ie,c),selected:fe.selected};return JSON.stringify(fe)===JSON.stringify(te)?fe:te}),p(!0),h("已同步到云端")}catch{v&&h("同步失败，已保存在本机")}finally{A=!1,v&&k&&(k=!1,P())}}}function P(){v&&(clearTimeout(C),h(navigator.onLine?"等待同步":"离线，已保存在本机"),C=setTimeout(D,600))}function V(){document.visibilityState==="visible"&&D()}function B(){h("离线，已保存在本机")}g.current=P,D();const L=setInterval(()=>{document.visibilityState==="visible"&&D()},15e3);return window.addEventListener("online",D),window.addEventListener("offline",B),window.addEventListener("focus",D),document.addEventListener("visibilitychange",V),()=>{v=!1,g.current=null,clearTimeout(C),clearInterval(L),window.removeEventListener("online",D),window.removeEventListener("offline",B),window.removeEventListener("focus",D),document.removeEventListener("visibilitychange",V)}},[i,n==null?void 0:n.user.id,l,c]),b.useEffect(()=>{var v;(v=g.current)==null||v.call(g)},[r]),{sync:d,syncReady:m,retry:()=>{var v;return(v=g.current)==null?void 0:v.call(g)}}}const ff=[...new Set(Xe.map(i=>i.group))],pf=i=>`./${i.replace(/^\/+/,"")}`;function ny(){let i;try{const l=localStorage.getItem(Tf);if(l){const c=JSON.parse(l);if(!Cl(c))throw Error();i=xl(c,Xe)}else i=oc()}catch{i={...oc(),storageWarning:!0}}const n=new URLSearchParams(window.location.search).get("lesson"),r=Xe.find(l=>l.id===n);return r&&ca(i,r,Xe)?{...i,selected:r.id}:i}function ay(){var Ha,Gs,qi;const[i,n]=b.useState(ny),[r,l]=b.useState("lesson"),[c,d]=b.useState("recap"),[h,m]=b.useState(0),[p,g]=b.useState(null),[w,v]=b.useState(!1),[A,k]=b.useState(""),[C,D]=b.useState(null),[P,V]=b.useState(null),[B,L]=b.useState(null),[ie,fe]=b.useState(!1),[te,F]=b.useState("login"),[We,Me]=b.useState(!1),ln=b.useRef(),{sync:Et,retry:ut}=ty(jn,B,i,n,Xe),se=Xe.find(H=>H.id===i.selected)||Xe[5],Ce=fa(i,se.id),re=se.questions[h],N=Vm(i,Xe),$=Xe.filter(H=>Nn(i,H)).length,W=$m(i,se);function de(H){k(H)}function Se(H){n(I=>({...H(I),updatedAt:Date.now()}))}function E(H){const I=Date.now();Se(Ue=>{const $e=fa(Ue,se.id),pt=H($e),je=Object.fromEntries(Object.entries(pt.answers).map(([pa,dn])=>[pa,dn===$e.answers[pa]?dn:{...dn,updatedAt:I}]));return{...Ue,records:{...Ue.records,[se.id]:{...pt,answers:je,updatedAt:I,understoodAt:I,revision:se.revision||"trend-v1"}}}})}b.useEffect(()=>{try{localStorage.setItem(Tf,JSON.stringify(i))}catch{de("本机保存失败，请导出进度备份。")}},[i]),b.useEffect(()=>{if(!A)return;const H=setTimeout(()=>k(""),5e3);return()=>clearTimeout(H)},[A]),b.useEffect(()=>{if(!jn)return;jn.auth.getSession().then(({data:I,error:Ue})=>{Ue?de("登录状态读取失败"):L(I.session)});const{data:H}=jn.auth.onAuthStateChange((I,Ue)=>{L(Ue)});return()=>H.subscription.unsubscribe()},[]),b.useEffect(()=>{if(!C&&!P)return;const H=document.activeElement,I=$e=>{if($e.key==="Escape"&&(D(null),V(null)),$e.key==="Tab"){const pt=document.querySelector('[role="dialog"]'),je=pt==null?void 0:pt.querySelectorAll("button,input,a");if(!(je!=null&&je.length))return;const pa=je[0],dn=je[je.length-1];$e.shiftKey&&document.activeElement===pa?($e.preventDefault(),dn.focus()):!$e.shiftKey&&document.activeElement===dn&&($e.preventDefault(),pa.focus())}},Ue=setTimeout(()=>{var $e;return($e=document.querySelector('[role="dialog"] button'))==null?void 0:$e.focus()},0);return document.addEventListener("keydown",I),()=>{clearTimeout(Ue),document.removeEventListener("keydown",I),H==null||H.focus()}},[C,P]);function U(H,I=null){if(!ca(i,H,Xe)){de("先完成本组上一节的订正，并确认掌握。");return}Se(Ue=>({...Ue,selected:H.id})),l("lesson"),d(I===null?"recap":"quiz"),m(I??0),Me(!1),g(null),v(!1),window.scrollTo(0,0)}function G(){const H=se.questions.findIndex(I=>!Dn(Ce.answers[I.id],I));if(H<0&&!Nn(i,se)){d("result");return}Me(H<0),m(H<0?0:H),g(null),v(!1),d("quiz")}function J(){p!==null&&(E(H=>({...H,understood:!1,answers:{...H.answers,[re.id]:{choice:p,correct:p===re.answer,unsure:!1}}})),v(!0))}function le(){const H=We?h+1<se.questions.length?h+1:-1:se.questions.findIndex((I,Ue)=>Ue>h&&!Dn(Ce.answers[I.id],I));H>=0?(m(H),g(null),v(!1)):d("result")}function he(){Ma(i,se)&&(E(H=>({...H,understood:!0})),de("本课已掌握，下一节已解锁。"))}function we(){const H=URL.createObjectURL(new Blob([JSON.stringify(i,null,2)],{type:"application/json"})),I=document.createElement("a");I.href=H,I.download="课后练习-学习进度.json",I.click(),URL.revokeObjectURL(H)}async function at(H){var Ue;const I=(Ue=H.target.files)==null?void 0:Ue[0];if(H.target.value="",!!I)try{if(I.size>2e6)throw Error();const $e=JSON.parse(await I.text());if(!Cl($e))throw Error();if(!window.confirm("导入会替换当前学习进度，确定继续吗？"))return;n(pt=>({...xl($e,Xe),updatedAt:Math.max(Date.now(),pt.updatedAt+1)})),d("recap"),l("lesson"),de("进度已导入")}catch{de("文件无效，请选择本应用导出的进度 JSON。")}}async function ze(H){if(H.preventDefault(),!jn)return;fe(!0);const I=new FormData(H.target),Ue=String(I.get("email")).trim(),$e=I.get("password");try{if(te==="signup"){const{data:pt,error:je}=await jn.auth.signUp({email:Ue,password:$e,options:{emailRedirectTo:window.location.origin+window.location.pathname}});if(je){de("创建失败："+je.message);return}pt.session?D(null):(de("请查看邮箱中的确认邮件，确认后回到这里登录。"),F("login"))}else{const{error:pt}=await jn.auth.signInWithPassword({email:Ue,password:$e});pt?de("登录失败，请检查邮箱、密码及邮件确认状态。"):D(null)}}catch{de("暂时无法连接，请检查网络后重试。")}finally{fe(!1)}}const on=Xe.filter(H=>H.group===se.group),zn=on.indexOf(se),un=on[zn-1],ct=on[zn+1],cn=["看完课程","做练习","订正错题","确认掌握"];let za=Nn(i,se)?4:Ma(i,se)?3:Object.keys(Ce.answers).length===se.questions.length?2:1;return T.jsxs(T.Fragment,{children:[T.jsx("header",{children:T.jsxs("div",{className:"header-inner",children:[T.jsx("button",{className:"brand",onClick:()=>{l("lesson"),d("recap")},children:"课堂手记"}),T.jsxs("nav",{"aria-label":"主导航",children:[T.jsx("button",{className:r==="lesson"?"active":"",onClick:()=>{l("lesson"),d("recap")},children:"课后练习"}),T.jsx("button",{className:r==="courses"?"active":"",onClick:()=>l("courses"),children:"课程"}),T.jsxs("button",{className:r==="review"?"active":"",onClick:()=>l("review"),children:["错题复习",N.length>0&&T.jsx("span",{className:"count",children:N.length})]})]}),T.jsxs("button",{className:"save-state",onClick:()=>D("settings"),children:[T.jsx(zm,{size:18}),T.jsx("span",{children:B?Et:"仅本机保存"})]})]})}),T.jsxs("main",{children:[i.migrationNotice&&T.jsxs("div",{className:"migration-note",role:"status",children:[T.jsx("span",{children:i.migrationNotice}),T.jsx("button",{onClick:()=>Se(H=>({...H,migrationNotice:null})),children:"知道了"})]}),i.storageWarning&&T.jsx("p",{className:"warning",children:"本机旧记录无法读取，已启用新进度。请从备份恢复。"}),r==="lesson"&&T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"lesson-layout",children:[T.jsxs("section",{className:"lesson-content",children:[T.jsx("div",{className:"eyebrow",children:c==="recap"?"课后回顾":c==="quiz"?"本课练习":"练习结果"}),T.jsxs("h1",{children:[se.id," ",se.group," · 第",zn+1,"节"]}),T.jsx("p",{className:"source",children:c==="quiz"?`第 ${h+1} 题 / 共 ${se.questions.length} 题${re.knowledgeTitle?` · ${re.knowledgeTitle}`:""}`:`来源：本课字幕 ${se.range}`}),c==="recap"&&T.jsxs(T.Fragment,{children:[T.jsx("ol",{className:"notes",children:se.notes.map((H,I)=>T.jsxs("li",{children:[T.jsx("span",{className:"number",children:I+1}),T.jsx("p",{children:H})]},H))}),T.jsxs("div",{className:"start-area",children:[W.total>0&&T.jsxs("p",{className:"coverage-status",children:["已订正 ",W.learned," / ",W.total," 个知识点"]}),T.jsxs("button",{className:"primary",onClick:G,children:[Nn(i,se)?"重新练习本课":Ma(i,se)?"查看结果并确认理解":Object.keys(Ce.answers).length?"继续本课练习":"开始本课练习",T.jsx(xn,{size:22})]}),T.jsxs("p",{className:"hint",children:[se.questions.length,"道练习 · 可分次完成，自动保存已提交答案",Nn(i,se)?" · 本课已掌握":""]})]}),se.knowledgePoints&&T.jsxs("details",{className:"knowledge-outline",children:[T.jsxs("summary",{children:["查看本课 ",W.total," 个知识点与学习情况"]}),T.jsx("ol",{children:se.knowledgePoints.map(H=>T.jsxs("li",{children:[T.jsxs("div",{children:[T.jsx("strong",{children:H.title}),T.jsx("span",{children:se.questions.filter(I=>I.knowledgeId===H.id).every(I=>Dn(Ce.answers[I.id],I))?Nn(i,se)?"已确认理解":"已订正，待确认":se.questions.some(I=>I.knowledgeId===H.id&&Ce.answers[I.id])?"待巩固":"未练习"})]}),T.jsx("p",{children:H.summary}),T.jsxs("small",{children:["字幕 ",H.time,H.pdfPages.length?` · PDF ${H.pdfPages.join("、")}页`:""]})]},H.id))})]})]}),c==="quiz"&&T.jsxs("div",{className:"quiz",children:[re.knowledgeTitle&&T.jsxs("div",{className:"question-kind",children:[re.type," · ",re.knowledgeId]}),T.jsx("h2",{children:re.prompt}),re.image&&T.jsxs("figure",{children:[T.jsxs("button",{className:"figure-button",onClick:()=>V(re.image),"aria-label":"放大课程图表",children:[T.jsx("img",{src:pf(re.image.src),alt:re.image.alt}),T.jsxs("span",{children:[T.jsx(Lm,{size:18}),"点击放大"]})]}),T.jsxs("figcaption",{children:["课程 PDF 第 ",re.image.page," 页 · 图表局部，提交后可看整页讲解"]})]}),T.jsxs("fieldset",{disabled:w,children:[T.jsx("legend",{className:"sr-only",children:"选择一个答案"}),re.options.map((H,I)=>T.jsxs("label",{className:`option ${p===I?"selected":""} ${w&&I===re.answer?"correct":""} ${w&&p===I&&p!==re.answer?"incorrect":""}`,children:[T.jsx("input",{type:"radio",name:`answer-${se.id}-${h}`,checked:p===I,onChange:()=>g(I)}),T.jsx("span",{children:H}),w&&I===re.answer&&T.jsx(cl,{size:20})]},H))]}),w?T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:`explanation ${p!==re.answer?"needs-review":""}`,role:"status",children:[T.jsx("strong",{children:p===re.answer?"回答正确":"这题再理解一下"}),T.jsx("p",{children:re.explanation}),T.jsxs("p",{className:"source",children:[se.id," 字幕 ",re.time,(Ha=re.pdfPages)!=null&&Ha.length?` · PDF ${re.pdfPages.join("、")}页`:""]}),(((Gs=re.image)==null?void 0:Gs.solutionSrc)||re.referenceImage)&&T.jsxs("button",{className:"solution-button",onClick:()=>V(re.referenceImage||{...re.image,src:re.image.solutionSrc,alt:`第${re.image.page}页课件整页讲解`,kind:"课件整页"}),children:[T.jsx(xh,{size:18}),"查看课件整页讲解"]}),T.jsxs("details",{children:[T.jsx("summary",{children:"查看对应字幕原文"}),T.jsx("p",{className:"transcript",children:re.quote})]}),T.jsxs("label",{className:"unsure",children:[T.jsx("input",{type:"checkbox",checked:!!((qi=Ce.answers[re.id])!=null&&qi.unsure),onChange:H=>E(I=>({...I,understood:!1,answers:{...I.answers,[re.id]:{...I.answers[re.id],unsure:H.target.checked}}}))}),"我还没完全理解，加入复习"]})]}),T.jsxs("button",{className:"primary",onClick:le,children:[h===se.questions.length-1?"查看本课结果":"下一题",T.jsx(xn,{size:20})]})]}):T.jsxs("button",{className:"primary",disabled:p===null,onClick:J,children:["提交答案",T.jsx(xn,{size:20})]}),T.jsx("button",{className:"text-button",onClick:()=>d("recap"),children:"暂停并返回回顾"})]}),c==="result"&&T.jsxs("div",{className:"result",children:[W.total>0&&T.jsxs("p",{className:"coverage-status",children:["已订正 ",W.learned," / ",W.total," 个知识点"]}),T.jsx("h2",{children:Ce.understood?"本课已掌握":Ma(i,se)?"练习已全部订正":"把没懂的地方再练一遍"}),T.jsxs("p",{children:["已订正 ",se.questions.filter(H=>Dn(Ce.answers[H.id],H)).length," / ",se.questions.length," 题。",Ma(i,se)?"确认每个知识点都理解了，再进入下一节。":"答错或标记没懂的题，会留在复习清单中。"]}),T.jsx("div",{className:"answer-list",children:se.questions.map((H,I)=>T.jsxs("button",{onClick:()=>{m(I),Me(!1),g(null),v(!1),d("quiz")},children:[T.jsxs("span",{children:[I+1,". ",H.prompt]}),T.jsx("span",{className:Dn(Ce.answers[H.id],H)?"good":"muted",children:Ce.answers[H.id]?Dn(Ce.answers[H.id],H)?"已订正":"待复习":"未作答"})]},I))}),Ma(i,se)?T.jsxs("button",{className:"primary",disabled:Ce.understood,onClick:he,children:[T.jsx(cl,{size:20}),Ce.understood?"已确认掌握":"我已理解本课"]}):T.jsxs("button",{className:"primary",onClick:G,children:["重练未掌握的题",T.jsx(xn,{size:20})]}),Ce.understood&&ct&&T.jsxs("button",{className:"text-button",onClick:()=>U(ct),children:["进入 ",ct.id," 下一节",T.jsx(xn,{size:18})]})]})]}),T.jsxs("aside",{children:[T.jsx("h3",{children:"本课流程"}),T.jsx("ol",{className:"steps",children:cn.map((H,I)=>T.jsxs("li",{className:I<za?"finished":"",children:[T.jsx("span",{className:"step-dot",children:I<za&&T.jsx(cl,{size:23,weight:"bold"})}),T.jsx("span",{children:H})]},H))}),T.jsxs("p",{className:"aside-note",children:["看完视频后来练习。",T.jsx("br",{}),"全部订正并确认理解后，",T.jsx("br",{}),"解锁本组下一节。"]})]})]}),T.jsxs("footer",{className:"lesson-footer",children:[T.jsxs("button",{disabled:!un,onClick:()=>U(un),children:[T.jsx(Dm,{size:24}),T.jsxs("span",{children:[T.jsx("small",{children:"上一节"}),un?`${un.id} ${un.title}`:"本组第一节"]})]}),T.jsxs("button",{disabled:!ct||!ca(i,ct,Xe),onClick:()=>U(ct),children:[T.jsxs("span",{children:[T.jsxs("small",{children:["下一节",ct&&!ca(i,ct,Xe)?" · 待解锁":""]}),ct?`${ct.id} ${ct.title}`:"本组已到最后一节"]}),ct&&!ca(i,ct,Xe)?T.jsx(Ch,{size:23}):T.jsx(xn,{size:24})]})]})]}),r==="courses"&&T.jsxs("section",{className:"collection",children:[T.jsx("div",{className:"eyebrow",children:"学习目录"}),T.jsx("h1",{children:"一课一练，理解后再继续"}),T.jsxs("p",{className:"source",children:[ff.join("、")," · ",Xe.length,"节课 · 已掌握 ",$," 节"]}),T.jsx("div",{className:"course-groups",children:ff.map(H=>T.jsxs("section",{children:[T.jsx("h2",{children:H}),Xe.filter(I=>I.group===H).map(I=>T.jsxs("button",{className:"course-row",onClick:()=>U(I),"aria-disabled":!ca(i,I,Xe),children:[T.jsx("span",{className:"course-id",children:I.id}),T.jsxs("span",{children:[I.title,T.jsx("small",{children:Nn(i,I)?"已掌握":Object.keys(fa(i,I.id).answers).length?"练习中":ca(i,I,Xe)?"可以开始":"待解锁"})]}),Nn(i,I)?T.jsx(cl,{size:22}):ca(i,I,Xe)?T.jsx(xn,{size:22}):T.jsx(Ch,{size:20})]},I.id))]},H))}),T.jsx("p",{className:"hint",children:"各组可以分别从 14A、18A、19A 开始；组内按顺序解锁。"})]}),r==="review"&&T.jsxs("section",{className:"collection",children:[T.jsx("div",{className:"eyebrow",children:"再理解一次"}),T.jsx("h1",{children:"错题与没懂的地方"}),T.jsx("p",{className:"source",children:"答错的题和你标记没懂的题会留在这里，答对并取消“没懂”后移出。"}),N.length?T.jsx("div",{className:"review-list",children:N.map(({lesson:H,index:I})=>T.jsxs("button",{onClick:()=>U(H,I),children:[T.jsx("span",{className:"course-id",children:H.id}),T.jsxs("span",{children:[H.questions[I].prompt,T.jsx("small",{children:fa(i,H.id).answers[H.questions[I].id].unsure?"标记为没懂":"待订正"})]}),T.jsx(xn,{size:22})]},`${H.id}-${I}`))}):T.jsxs("div",{className:"empty",children:[T.jsx(xh,{size:40}),T.jsx("h2",{children:"目前没有待复习的题"}),T.jsx("p",{children:"开始一节课的练习，遇到没懂的地方就把它留下来。"}),T.jsxs("button",{className:"primary",onClick:()=>l("courses"),children:["选择课程",T.jsx(xn,{size:20})]})]})]})]}),T.jsxs("div",{className:"bottom-note",children:[T.jsx("span",{children:"依据课程资料整理 · 知识点练习与图表应用"}),T.jsx("button",{onClick:()=>D("settings"),children:"进度与同步设置"})]}),A&&T.jsx("div",{className:"toast",role:"status",children:A}),(C||P)&&T.jsx("div",{className:"overlay",onClick:()=>{D(null),V(null)},children:T.jsxs("section",{role:"dialog","aria-modal":"true","aria-label":P?"课程图表":"进度与同步设置",className:`modal ${P?"image-modal":""}`,onClick:H=>H.stopPropagation(),children:[T.jsx("button",{className:"close","aria-label":"关闭",onClick:()=>{D(null),V(null)},children:T.jsx(Im,{size:24})}),P?T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"zoom-region",children:T.jsx("img",{src:pf(P.src),alt:P.alt})}),T.jsxs("p",{children:["课程 PDF 第 ",P.page," 页 · ",P.kind||"图表局部"," · 可左右滑动，支持双指缩放"]})]}):T.jsxs(T.Fragment,{children:[T.jsx("h2",{children:"进度与同步"}),T.jsx("p",{className:"source",children:B?Et:"当前记录仅保存在这个浏览器中。换设备前，请导出进度，或连接云端同步。"}),T.jsxs("div",{className:"backup-actions",children:[T.jsxs("button",{className:"secondary",onClick:we,children:[T.jsx(Hm,{size:20}),"导出进度"]}),T.jsxs("button",{className:"secondary",onClick:()=>ln.current.click(),children:[T.jsx(Bm,{size:20}),"导入进度"]}),T.jsx("input",{ref:ln,type:"file",accept:"application/json,.json",hidden:!0,onChange:at})]}),T.jsx("hr",{}),jn?B?T.jsxs(T.Fragment,{children:[T.jsxs("p",{children:["已登录：",B.user.email]}),T.jsx("button",{className:"secondary",onClick:async()=>{await jn.auth.signOut(),de("已退出，进度仍保存在本机")},children:"退出登录"}),T.jsx("button",{className:"text-button",onClick:ut,children:"立即同步"})]}):T.jsxs("form",{onSubmit:ze,children:[T.jsx("h3",{children:te==="signup"?"创建同步账号":"登录同步账号"}),T.jsx("p",{className:"hint",children:"手机和电脑使用同一个账号，答题记录自动同步。"}),T.jsxs("label",{children:["邮箱",T.jsx("input",{required:!0,name:"email",type:"email",autoComplete:"username"})]}),T.jsxs("label",{children:["密码",T.jsx("input",{required:!0,name:"password",type:"password",autoComplete:te==="signup"?"new-password":"current-password",minLength:8})]}),T.jsx("button",{className:"primary",disabled:ie,children:ie?"正在连接…":te==="signup"?"创建账号":"登录并同步"}),T.jsx("button",{className:"text-button",type:"button",disabled:ie,onClick:()=>F(te==="login"?"signup":"login"),children:te==="login"?"首次使用？创建同步账号":"已有账号？返回登录"}),T.jsx("p",{className:"hint",children:"首次注册请使用登录 Supabase 时的邮箱，并查看确认邮件。登录后会合并本机进度。密码至少8位，不需要使用 GitHub 密码。"})]}):T.jsxs(T.Fragment,{children:[T.jsx("h3",{children:"云端同步尚未配置"}),T.jsx("p",{children:"本次试用可以正常做题和保存本机进度。连接免费 Supabase 项目后，可使用邮箱和密码登录同步。"}),T.jsx("p",{className:"hint",children:"尚未连接云端，不会显示“已同步”。"})]})]})]})})]})}Tm.createRoot(document.getElementById("root")).render(T.jsx(vm.StrictMode,{children:T.jsx(ay,{})}));
