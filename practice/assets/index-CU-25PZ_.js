(function(){const H=document.createElement("link").relList;if(H&&H.supports&&H.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))g(O);new MutationObserver(O=>{for(const N of O)if(N.type==="childList")for(const tn of N.addedNodes)tn.tagName==="LINK"&&tn.rel==="modulepreload"&&g(tn)}).observe(document,{childList:!0,subtree:!0});function U(O){const N={};return O.integrity&&(N.integrity=O.integrity),O.referrerPolicy&&(N.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?N.credentials="include":O.crossOrigin==="anonymous"?N.credentials="omit":N.credentials="same-origin",N}function g(O){if(O.ep)return;O.ep=!0;const N=U(O);fetch(O.href,N)}})();function vs(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var S2={exports:{}},R0={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf;function Ks(){if(qf)return R0;qf=1;var p=Symbol.for("react.transitional.element"),H=Symbol.for("react.fragment");function U(g,O,N){var tn=null;if(N!==void 0&&(tn=""+N),O.key!==void 0&&(tn=""+O.key),"key"in O){N={};for(var Kn in O)Kn!=="key"&&(N[Kn]=O[Kn])}else N=O;return O=N.ref,{$$typeof:p,type:g,key:tn,ref:O!==void 0?O:null,props:N}}return R0.Fragment=H,R0.jsx=U,R0.jsxs=U,R0}var xf;function Ss(){return xf||(xf=1,S2.exports=Ks()),S2.exports}var r=Ss(),E2={exports:{}},X={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function Es(){if(Hf)return X;Hf=1;var p=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),tn=Symbol.for("react.context"),Kn=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),fn=Symbol.iterator;function Un(d){return d===null||typeof d!="object"?null:(d=fn&&d[fn]||d["@@iterator"],typeof d=="function"?d:null)}var qn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tn=Object.assign,xn={};function jn(d,A,x){this.props=d,this.context=A,this.refs=xn,this.updater=x||qn}jn.prototype.isReactComponent={},jn.prototype.setState=function(d,A){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,A,"setState")},jn.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function se(){}se.prototype=jn.prototype;function Bn(d,A,x){this.props=d,this.context=A,this.refs=xn,this.updater=x||qn}var Wn=Bn.prototype=new se;Wn.constructor=Bn,Tn(Wn,jn.prototype),Wn.isPureReactComponent=!0;var we=Array.isArray;function Jn(){}var W={H:null,A:null,T:null,S:null},In=Object.prototype.hasOwnProperty;function _e(d,A,x){var D=x.ref;return{$$typeof:p,type:d,key:A,ref:D!==void 0?D:null,props:x}}function dt(d,A){return _e(d.type,A,d.props)}function ne(d){return typeof d=="object"&&d!==null&&d.$$typeof===p}function Rn(d){var A={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(x){return A[x]})}var Re=/\/+/g;function Y(d,A){return typeof d=="object"&&d!==null&&d.key!=null?Rn(""+d.key):A.toString(36)}function pn(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(Jn,Jn):(d.status="pending",d.then(function(A){d.status==="pending"&&(d.status="fulfilled",d.value=A)},function(A){d.status==="pending"&&(d.status="rejected",d.reason=A)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function v(d,A,x,D,G){var J=typeof d;(J==="undefined"||J==="boolean")&&(d=null);var an=!1;if(d===null)an=!0;else switch(J){case"bigint":case"string":case"number":an=!0;break;case"object":switch(d.$$typeof){case p:case H:an=!0;break;case k:return an=d._init,v(an(d._payload),A,x,D,G)}}if(an)return G=G(d),an=D===""?"."+Y(d,0):D,we(G)?(x="",an!=null&&(x=an.replace(Re,"$&/")+"/"),v(G,A,x,"",function(Ve){return Ve})):G!=null&&(ne(G)&&(G=dt(G,x+(G.key==null||d&&d.key===G.key?"":(""+G.key).replace(Re,"$&/")+"/")+an)),A.push(G)),1;an=0;var Vn=D===""?".":D+":";if(we(d))for(var En=0;En<d.length;En++)D=d[En],J=Vn+Y(D,En),an+=v(D,A,x,J,G);else if(En=Un(d),typeof En=="function")for(d=En.call(d),En=0;!(D=d.next()).done;)D=D.value,J=Vn+Y(D,En++),an+=v(D,A,x,J,G);else if(J==="object"){if(typeof d.then=="function")return v(pn(d),A,x,D,G);throw A=String(d),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return an}function q(d,A,x){if(d==null)return d;var D=[],G=0;return v(d,D,"","",function(J){return A.call(x,J,G++)}),D}function V(d){if(d._status===-1){var A=d._result;A=A(),A.then(function(x){(d._status===0||d._status===-1)&&(d._status=1,d._result=x)},function(x){(d._status===0||d._status===-1)&&(d._status=2,d._result=x)}),d._status===-1&&(d._status=0,d._result=A)}if(d._status===1)return d._result.default;throw d._result}var I=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},ln={map:q,forEach:function(d,A,x){q(d,function(){A.apply(this,arguments)},x)},count:function(d){var A=0;return q(d,function(){A++}),A},toArray:function(d){return q(d,function(A){return A})||[]},only:function(d){if(!ne(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return X.Activity=Z,X.Children=ln,X.Component=jn,X.Fragment=U,X.Profiler=O,X.PureComponent=Bn,X.StrictMode=g,X.Suspense=_,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,X.__COMPILER_RUNTIME={__proto__:null,c:function(d){return W.H.useMemoCache(d)}},X.cache=function(d){return function(){return d.apply(null,arguments)}},X.cacheSignal=function(){return null},X.cloneElement=function(d,A,x){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var D=Tn({},d.props),G=d.key;if(A!=null)for(J in A.key!==void 0&&(G=""+A.key),A)!In.call(A,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&A.ref===void 0||(D[J]=A[J]);var J=arguments.length-2;if(J===1)D.children=x;else if(1<J){for(var an=Array(J),Vn=0;Vn<J;Vn++)an[Vn]=arguments[Vn+2];D.children=an}return _e(d.type,G,D)},X.createContext=function(d){return d={$$typeof:tn,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:N,_context:d},d},X.createElement=function(d,A,x){var D,G={},J=null;if(A!=null)for(D in A.key!==void 0&&(J=""+A.key),A)In.call(A,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(G[D]=A[D]);var an=arguments.length-2;if(an===1)G.children=x;else if(1<an){for(var Vn=Array(an),En=0;En<an;En++)Vn[En]=arguments[En+2];G.children=Vn}if(d&&d.defaultProps)for(D in an=d.defaultProps,an)G[D]===void 0&&(G[D]=an[D]);return _e(d,J,G)},X.createRef=function(){return{current:null}},X.forwardRef=function(d){return{$$typeof:Kn,render:d}},X.isValidElement=ne,X.lazy=function(d){return{$$typeof:k,_payload:{_status:-1,_result:d},_init:V}},X.memo=function(d,A){return{$$typeof:z,type:d,compare:A===void 0?null:A}},X.startTransition=function(d){var A=W.T,x={};W.T=x;try{var D=d(),G=W.S;G!==null&&G(x,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(Jn,I)}catch(J){I(J)}finally{A!==null&&x.types!==null&&(A.types=x.types),W.T=A}},X.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},X.use=function(d){return W.H.use(d)},X.useActionState=function(d,A,x){return W.H.useActionState(d,A,x)},X.useCallback=function(d,A){return W.H.useCallback(d,A)},X.useContext=function(d){return W.H.useContext(d)},X.useDebugValue=function(){},X.useDeferredValue=function(d,A){return W.H.useDeferredValue(d,A)},X.useEffect=function(d,A){return W.H.useEffect(d,A)},X.useEffectEvent=function(d){return W.H.useEffectEvent(d)},X.useId=function(){return W.H.useId()},X.useImperativeHandle=function(d,A,x){return W.H.useImperativeHandle(d,A,x)},X.useInsertionEffect=function(d,A){return W.H.useInsertionEffect(d,A)},X.useLayoutEffect=function(d,A){return W.H.useLayoutEffect(d,A)},X.useMemo=function(d,A){return W.H.useMemo(d,A)},X.useOptimistic=function(d,A){return W.H.useOptimistic(d,A)},X.useReducer=function(d,A,x){return W.H.useReducer(d,A,x)},X.useRef=function(d){return W.H.useRef(d)},X.useState=function(d){return W.H.useState(d)},X.useSyncExternalStore=function(d,A,x){return W.H.useSyncExternalStore(d,A,x)},X.useTransition=function(){return W.H.useTransition()},X.version="19.2.0",X}var wf;function M2(){return wf||(wf=1,E2.exports=Es()),E2.exports}var f=M2();const bs=vs(f);var b2={exports:{}},V0={},A2={exports:{}},T2={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function As(){return _f||(_f=1,(function(p){function H(v,q){var V=v.length;v.push(q);n:for(;0<V;){var I=V-1>>>1,ln=v[I];if(0<O(ln,q))v[I]=q,v[V]=ln,V=I;else break n}}function U(v){return v.length===0?null:v[0]}function g(v){if(v.length===0)return null;var q=v[0],V=v.pop();if(V!==q){v[0]=V;n:for(var I=0,ln=v.length,d=ln>>>1;I<d;){var A=2*(I+1)-1,x=v[A],D=A+1,G=v[D];if(0>O(x,V))D<ln&&0>O(G,x)?(v[I]=G,v[D]=V,I=D):(v[I]=x,v[A]=V,I=A);else if(D<ln&&0>O(G,V))v[I]=G,v[D]=V,I=D;else break n}}return q}function O(v,q){var V=v.sortIndex-q.sortIndex;return V!==0?V:v.id-q.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var N=performance;p.unstable_now=function(){return N.now()}}else{var tn=Date,Kn=tn.now();p.unstable_now=function(){return tn.now()-Kn}}var _=[],z=[],k=1,Z=null,fn=3,Un=!1,qn=!1,Tn=!1,xn=!1,jn=typeof setTimeout=="function"?setTimeout:null,se=typeof clearTimeout=="function"?clearTimeout:null,Bn=typeof setImmediate<"u"?setImmediate:null;function Wn(v){for(var q=U(z);q!==null;){if(q.callback===null)g(z);else if(q.startTime<=v)g(z),q.sortIndex=q.expirationTime,H(_,q);else break;q=U(z)}}function we(v){if(Tn=!1,Wn(v),!qn)if(U(_)!==null)qn=!0,Jn||(Jn=!0,Rn());else{var q=U(z);q!==null&&pn(we,q.startTime-v)}}var Jn=!1,W=-1,In=5,_e=-1;function dt(){return xn?!0:!(p.unstable_now()-_e<In)}function ne(){if(xn=!1,Jn){var v=p.unstable_now();_e=v;var q=!0;try{n:{qn=!1,Tn&&(Tn=!1,se(W),W=-1),Un=!0;var V=fn;try{e:{for(Wn(v),Z=U(_);Z!==null&&!(Z.expirationTime>v&&dt());){var I=Z.callback;if(typeof I=="function"){Z.callback=null,fn=Z.priorityLevel;var ln=I(Z.expirationTime<=v);if(v=p.unstable_now(),typeof ln=="function"){Z.callback=ln,Wn(v),q=!0;break e}Z===U(_)&&g(_),Wn(v)}else g(_);Z=U(_)}if(Z!==null)q=!0;else{var d=U(z);d!==null&&pn(we,d.startTime-v),q=!1}}break n}finally{Z=null,fn=V,Un=!1}q=void 0}}finally{q?Rn():Jn=!1}}}var Rn;if(typeof Bn=="function")Rn=function(){Bn(ne)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,Y=Re.port2;Re.port1.onmessage=ne,Rn=function(){Y.postMessage(null)}}else Rn=function(){jn(ne,0)};function pn(v,q){W=jn(function(){v(p.unstable_now())},q)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(v){v.callback=null},p.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):In=0<v?Math.floor(1e3/v):5},p.unstable_getCurrentPriorityLevel=function(){return fn},p.unstable_next=function(v){switch(fn){case 1:case 2:case 3:var q=3;break;default:q=fn}var V=fn;fn=q;try{return v()}finally{fn=V}},p.unstable_requestPaint=function(){xn=!0},p.unstable_runWithPriority=function(v,q){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var V=fn;fn=v;try{return q()}finally{fn=V}},p.unstable_scheduleCallback=function(v,q,V){var I=p.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?I+V:I):V=I,v){case 1:var ln=-1;break;case 2:ln=250;break;case 5:ln=1073741823;break;case 4:ln=1e4;break;default:ln=5e3}return ln=V+ln,v={id:k++,callback:q,priorityLevel:v,startTime:V,expirationTime:ln,sortIndex:-1},V>I?(v.sortIndex=V,H(z,v),U(_)===null&&v===U(z)&&(Tn?(se(W),W=-1):Tn=!0,pn(we,V-I))):(v.sortIndex=ln,H(_,v),qn||Un||(qn=!0,Jn||(Jn=!0,Rn()))),v},p.unstable_shouldYield=dt,p.unstable_wrapCallback=function(v){var q=fn;return function(){var V=fn;fn=q;try{return v.apply(this,arguments)}finally{fn=V}}}})(T2)),T2}var Of;function Ts(){return Of||(Of=1,A2.exports=As()),A2.exports}var z2={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df;function zs(){if(Df)return Fn;Df=1;var p=M2();function H(_){var z="https://react.dev/errors/"+_;if(1<arguments.length){z+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)z+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+_+"; visit "+z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(){}var g={d:{f:U,r:function(){throw Error(H(522))},D:U,C:U,L:U,m:U,X:U,S:U,M:U},p:0,findDOMNode:null},O=Symbol.for("react.portal");function N(_,z,k){var Z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:Z==null?null:""+Z,children:_,containerInfo:z,implementation:k}}var tn=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Kn(_,z){if(_==="font")return"";if(typeof z=="string")return z==="use-credentials"?z:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,Fn.createPortal=function(_,z){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!z||z.nodeType!==1&&z.nodeType!==9&&z.nodeType!==11)throw Error(H(299));return N(_,z,null,k)},Fn.flushSync=function(_){var z=tn.T,k=g.p;try{if(tn.T=null,g.p=2,_)return _()}finally{tn.T=z,g.p=k,g.d.f()}},Fn.preconnect=function(_,z){typeof _=="string"&&(z?(z=z.crossOrigin,z=typeof z=="string"?z==="use-credentials"?z:"":void 0):z=null,g.d.C(_,z))},Fn.prefetchDNS=function(_){typeof _=="string"&&g.d.D(_)},Fn.preinit=function(_,z){if(typeof _=="string"&&z&&typeof z.as=="string"){var k=z.as,Z=Kn(k,z.crossOrigin),fn=typeof z.integrity=="string"?z.integrity:void 0,Un=typeof z.fetchPriority=="string"?z.fetchPriority:void 0;k==="style"?g.d.S(_,typeof z.precedence=="string"?z.precedence:void 0,{crossOrigin:Z,integrity:fn,fetchPriority:Un}):k==="script"&&g.d.X(_,{crossOrigin:Z,integrity:fn,fetchPriority:Un,nonce:typeof z.nonce=="string"?z.nonce:void 0})}},Fn.preinitModule=function(_,z){if(typeof _=="string")if(typeof z=="object"&&z!==null){if(z.as==null||z.as==="script"){var k=Kn(z.as,z.crossOrigin);g.d.M(_,{crossOrigin:k,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0})}}else z==null&&g.d.M(_)},Fn.preload=function(_,z){if(typeof _=="string"&&typeof z=="object"&&z!==null&&typeof z.as=="string"){var k=z.as,Z=Kn(k,z.crossOrigin);g.d.L(_,k,{crossOrigin:Z,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0,type:typeof z.type=="string"?z.type:void 0,fetchPriority:typeof z.fetchPriority=="string"?z.fetchPriority:void 0,referrerPolicy:typeof z.referrerPolicy=="string"?z.referrerPolicy:void 0,imageSrcSet:typeof z.imageSrcSet=="string"?z.imageSrcSet:void 0,imageSizes:typeof z.imageSizes=="string"?z.imageSizes:void 0,media:typeof z.media=="string"?z.media:void 0})}},Fn.preloadModule=function(_,z){if(typeof _=="string")if(z){var k=Kn(z.as,z.crossOrigin);g.d.m(_,{as:typeof z.as=="string"&&z.as!=="script"?z.as:void 0,crossOrigin:k,integrity:typeof z.integrity=="string"?z.integrity:void 0})}else g.d.m(_)},Fn.requestFormReset=function(_){g.d.r(_)},Fn.unstable_batchedUpdates=function(_,z){return _(z)},Fn.useFormState=function(_,z,k){return tn.H.useFormState(_,z,k)},Fn.useFormStatus=function(){return tn.H.useHostTransitionStatus()},Fn.version="19.2.0",Fn}var jf;function Ms(){if(jf)return z2.exports;jf=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(H){console.error(H)}}return p(),z2.exports=zs(),z2.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf;function qs(){if(Nf)return V0;Nf=1;var p=Ts(),H=M2(),U=Ms();function g(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function N(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function tn(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Kn(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function _(n){if(N(n)!==n)throw Error(g(188))}function z(n){var e=n.alternate;if(!e){if(e=N(n),e===null)throw Error(g(188));return e!==n?null:n}for(var t=n,l=e;;){var a=t.return;if(a===null)break;var u=a.alternate;if(u===null){if(l=a.return,l!==null){t=l;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===t)return _(a),n;if(u===l)return _(a),e;u=u.sibling}throw Error(g(188))}if(t.return!==l.return)t=a,l=u;else{for(var i=!1,c=a.child;c;){if(c===t){i=!0,t=a,l=u;break}if(c===l){i=!0,l=a,t=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===t){i=!0,t=u,l=a;break}if(c===l){i=!0,l=u,t=a;break}c=c.sibling}if(!i)throw Error(g(189))}}if(t.alternate!==l)throw Error(g(190))}if(t.tag!==3)throw Error(g(188));return t.stateNode.current===t?n:e}function k(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=k(n),e!==null)return e;n=n.sibling}return null}var Z=Object.assign,fn=Symbol.for("react.element"),Un=Symbol.for("react.transitional.element"),qn=Symbol.for("react.portal"),Tn=Symbol.for("react.fragment"),xn=Symbol.for("react.strict_mode"),jn=Symbol.for("react.profiler"),se=Symbol.for("react.consumer"),Bn=Symbol.for("react.context"),Wn=Symbol.for("react.forward_ref"),we=Symbol.for("react.suspense"),Jn=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),In=Symbol.for("react.lazy"),_e=Symbol.for("react.activity"),dt=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function Rn(n){return n===null||typeof n!="object"?null:(n=ne&&n[ne]||n["@@iterator"],typeof n=="function"?n:null)}var Re=Symbol.for("react.client.reference");function Y(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Re?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Tn:return"Fragment";case jn:return"Profiler";case xn:return"StrictMode";case we:return"Suspense";case Jn:return"SuspenseList";case _e:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case qn:return"Portal";case Bn:return n.displayName||"Context";case se:return(n._context.displayName||"Context")+".Consumer";case Wn:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return e=n.displayName||null,e!==null?e:Y(n.type)||"Memo";case In:e=n._payload,n=n._init;try{return Y(n(e))}catch{}}return null}var pn=Array.isArray,v=H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},I=[],ln=-1;function d(n){return{current:n}}function A(n){0>ln||(n.current=I[ln],I[ln]=null,ln--)}function x(n,e){ln++,I[ln]=n.current,n.current=e}var D=d(null),G=d(null),J=d(null),an=d(null);function Vn(n,e){switch(x(J,e),x(G,n),x(D,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?F3(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=F3(e),n=$3(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}A(D),x(D,n)}function En(){A(D),A(G),A(J)}function Ve(n){n.memoizedState!==null&&x(an,n);var e=D.current,t=$3(e,n.type);e!==t&&(x(G,n),x(D,t))}function mt(n){G.current===n&&(A(D),A(G)),an.current===n&&(A(an),U0._currentValue=V)}var Ye,kn;function Ge(n){if(Ye===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ye=e&&e[1]||"",kn=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ye+n+kn}var ul=!1;function il(n,e){if(!n||ul)return"";ul=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(S){var K=S}Reflect.construct(n,[],T)}else{try{T.call()}catch(S){K=S}n.call(T.prototype)}}else{try{throw Error()}catch(S){K=S}(T=n())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(S){if(S&&K&&typeof S.stack=="string")return[S.stack,K.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var s=i.split(`
`),h=c.split(`
`);for(a=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;if(l===s.length||a===h.length)for(l=s.length-1,a=h.length-1;1<=l&&0<=a&&s[l]!==h[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==h[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==h[a]){var E=`
`+s[l].replace(" at new "," at ");return n.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",n.displayName)),E}while(1<=l&&0<=a);break}}}finally{ul=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?Ge(t):""}function Y0(n,e){switch(n.tag){case 26:case 27:case 5:return Ge(n.type);case 16:return Ge("Lazy");case 13:return n.child!==e&&e!==null?Ge("Suspense Fallback"):Ge("Suspense");case 19:return Ge("SuspenseList");case 0:case 15:return il(n.type,!1);case 11:return il(n.type.render,!1);case 1:return il(n.type,!0);case 31:return Ge("Activity");default:return""}}function Ql(n){try{var e="",t=null;do e+=Y0(n,t),t=n,n=n.return;while(n);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var M=Object.prototype.hasOwnProperty,w=p.unstable_scheduleCallback,oe=p.unstable_cancelCallback,ee=p.unstable_shouldYield,Ll=p.unstable_requestPaint,Hn=p.unstable_now,G0=p.unstable_getCurrentPriorityLevel,Jl=p.unstable_ImmediatePriority,x2=p.unstable_UserBlockingPriority,X0=p.unstable_NormalPriority,Pf=p.unstable_LowPriority,H2=p.unstable_IdlePriority,n4=p.log,e4=p.unstable_setDisableYieldValue,kl=null,de=null;function rt(n){if(typeof n4=="function"&&e4(n),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(kl,n)}catch{}}var me=Math.clz32?Math.clz32:a4,t4=Math.log,l4=Math.LN2;function a4(n){return n>>>=0,n===0?32:31-(t4(n)/l4|0)|0}var Q0=256,L0=262144,J0=4194304;function Bt(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function k0(n,e,t){var l=n.pendingLanes;if(l===0)return 0;var a=0,u=n.suspendedLanes,i=n.pingedLanes;n=n.warmLanes;var c=l&134217727;return c!==0?(l=c&~u,l!==0?a=Bt(l):(i&=c,i!==0?a=Bt(i):t||(t=c&~n,t!==0&&(a=Bt(t))))):(c=l&~u,c!==0?a=Bt(c):i!==0?a=Bt(i):t||(t=l&~n,t!==0&&(a=Bt(t)))),a===0?0:e!==0&&e!==a&&(e&u)===0&&(u=a&-a,t=e&-e,u>=t||u===32&&(t&4194048)!==0)?e:a}function Fl(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function u4(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function w2(){var n=J0;return J0<<=1,(J0&62914560)===0&&(J0=4194304),n}function fa(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function $l(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function i4(n,e,t,l,a,u){var i=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var c=n.entanglements,s=n.expirationTimes,h=n.hiddenUpdates;for(t=i&~t;0<t;){var E=31-me(t),T=1<<E;c[E]=0,s[E]=-1;var K=h[E];if(K!==null)for(h[E]=null,E=0;E<K.length;E++){var S=K[E];S!==null&&(S.lane&=-536870913)}t&=~T}l!==0&&_2(n,l,0),u!==0&&a===0&&n.tag!==0&&(n.suspendedLanes|=u&~(i&~e))}function _2(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var l=31-me(e);n.entangledLanes|=e,n.entanglements[l]=n.entanglements[l]|1073741824|t&261930}function O2(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var l=31-me(t),a=1<<l;a&e|n[l]&e&&(n[l]|=e),t&=~a}}function D2(n,e){var t=e&-e;return t=(t&42)!==0?1:sa(t),(t&(n.suspendedLanes|e))!==0?0:t}function sa(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function oa(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function j2(){var n=q.p;return n!==0?n:(n=window.event,n===void 0?32:Sf(n.type))}function N2(n,e){var t=q.p;try{return q.p=n,e()}finally{q.p=t}}var gt=Math.random().toString(36).slice(2),Yn="__reactFiber$"+gt,te="__reactProps$"+gt,cl="__reactContainer$"+gt,da="__reactEvents$"+gt,c4="__reactListeners$"+gt,f4="__reactHandles$"+gt,U2="__reactResources$"+gt,Wl="__reactMarker$"+gt;function ma(n){delete n[Yn],delete n[te],delete n[da],delete n[c4],delete n[f4]}function fl(n){var e=n[Yn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[cl]||t[Yn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=lf(n);n!==null;){if(t=n[Yn])return t;n=lf(n)}return e}n=t,t=n.parentNode}return null}function sl(n){if(n=n[Yn]||n[cl]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function Il(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(g(33))}function ol(n){var e=n[U2];return e||(e=n[U2]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Cn(n){n[Wl]=!0}var C2=new Set,Z2={};function Rt(n,e){dl(n,e),dl(n+"Capture",e)}function dl(n,e){for(Z2[n]=e,n=0;n<e.length;n++)C2.add(e[n])}var s4=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),B2={},R2={};function o4(n){return M.call(R2,n)?!0:M.call(B2,n)?!1:s4.test(n)?R2[n]=!0:(B2[n]=!0,!1)}function F0(n,e,t){if(o4(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+t)}}function $0(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+t)}}function Xe(n,e,t,l){if(l===null)n.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,""+l)}}function Se(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function V2(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function d4(n,e,t){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,u=l.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){t=""+i,u.call(this,i)}}),Object.defineProperty(n,e,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(i){t=""+i},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ra(n){if(!n._valueTracker){var e=V2(n)?"checked":"value";n._valueTracker=d4(n,e,""+n[e])}}function Y2(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),l="";return n&&(l=V2(n)?n.checked?"true":"false":n.value),n=l,n!==t?(e.setValue(n),!0):!1}function W0(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var m4=/[\n"\\]/g;function Ee(n){return n.replace(m4,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ga(n,e,t,l,a,u,i,c){n.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?n.type=i:n.removeAttribute("type"),e!=null?i==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+Se(e)):n.value!==""+Se(e)&&(n.value=""+Se(e)):i!=="submit"&&i!=="reset"||n.removeAttribute("value"),e!=null?pa(n,i,Se(e)):t!=null?pa(n,i,Se(t)):l!=null&&n.removeAttribute("value"),a==null&&u!=null&&(n.defaultChecked=!!u),a!=null&&(n.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.name=""+Se(c):n.removeAttribute("name")}function G2(n,e,t,l,a,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(n.type=u),e!=null||t!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){ra(n);return}t=t!=null?""+Se(t):"",e=e!=null?""+Se(e):t,c||e===n.value||(n.value=e),n.defaultValue=e}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=c?n.checked:!!l,n.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.name=i),ra(n)}function pa(n,e,t){e==="number"&&W0(n.ownerDocument)===n||n.defaultValue===""+t||(n.defaultValue=""+t)}function ml(n,e,t,l){if(n=n.options,e){e={};for(var a=0;a<t.length;a++)e["$"+t[a]]=!0;for(t=0;t<n.length;t++)a=e.hasOwnProperty("$"+n[t].value),n[t].selected!==a&&(n[t].selected=a),a&&l&&(n[t].defaultSelected=!0)}else{for(t=""+Se(t),e=null,a=0;a<n.length;a++){if(n[a].value===t){n[a].selected=!0,l&&(n[a].defaultSelected=!0);return}e!==null||n[a].disabled||(e=n[a])}e!==null&&(e.selected=!0)}}function X2(n,e,t){if(e!=null&&(e=""+Se(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+Se(t):""}function Q2(n,e,t,l){if(e==null){if(l!=null){if(t!=null)throw Error(g(92));if(pn(l)){if(1<l.length)throw Error(g(93));l=l[0]}t=l}t==null&&(t=""),e=t}t=Se(e),n.defaultValue=t,l=n.textContent,l===t&&l!==""&&l!==null&&(n.value=l),ra(n)}function rl(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var r4=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function L2(n,e,t){var l=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":l?n.setProperty(e,t):typeof t!="number"||t===0||r4.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function J2(n,e,t){if(e!=null&&typeof e!="object")throw Error(g(62));if(n=n.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var a in e)l=e[a],e.hasOwnProperty(a)&&t[a]!==l&&L2(n,a,l)}else for(var u in e)e.hasOwnProperty(u)&&L2(n,u,e[u])}function ya(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var g4=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),p4=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function I0(n){return p4.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Qe(){}var ha=null;function va(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gl=null,pl=null;function k2(n){var e=sl(n);if(e&&(n=e.stateNode)){var t=n[te]||null;n:switch(n=e.stateNode,e.type){case"input":if(ga(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ee(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var l=t[e];if(l!==n&&l.form===n.form){var a=l[te]||null;if(!a)throw Error(g(90));ga(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<t.length;e++)l=t[e],l.form===n.form&&Y2(l)}break n;case"textarea":X2(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&ml(n,!!t.multiple,e,!1)}}}var Ka=!1;function F2(n,e,t){if(Ka)return n(e,t);Ka=!0;try{var l=n(e);return l}finally{if(Ka=!1,(gl!==null||pl!==null)&&(B1(),gl&&(e=gl,n=pl,pl=gl=null,k2(e),n)))for(e=0;e<n.length;e++)k2(n[e])}}function Pl(n,e){var t=n.stateNode;if(t===null)return null;var l=t[te]||null;if(l===null)return null;t=l[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(g(231,e,typeof t));return t}var Le=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sa=!1;if(Le)try{var n0={};Object.defineProperty(n0,"passive",{get:function(){Sa=!0}}),window.addEventListener("test",n0,n0),window.removeEventListener("test",n0,n0)}catch{Sa=!1}var pt=null,Ea=null,P0=null;function $2(){if(P0)return P0;var n,e=Ea,t=e.length,l,a="value"in pt?pt.value:pt.textContent,u=a.length;for(n=0;n<t&&e[n]===a[n];n++);var i=t-n;for(l=1;l<=i&&e[t-l]===a[u-l];l++);return P0=a.slice(n,1<l?1-l:void 0)}function n1(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function e1(){return!0}function W2(){return!1}function le(n){function e(t,l,a,u,i){this._reactName=t,this._targetInst=a,this.type=l,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in n)n.hasOwnProperty(c)&&(t=n[c],this[c]=t?t(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?e1:W2,this.isPropagationStopped=W2,this}return Z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=e1)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=e1)},persist:function(){},isPersistent:e1}),e}var Vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},t1=le(Vt),e0=Z({},Vt,{view:0,detail:0}),y4=le(e0),ba,Aa,t0,l1=Z({},e0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:za,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==t0&&(t0&&n.type==="mousemove"?(ba=n.screenX-t0.screenX,Aa=n.screenY-t0.screenY):Aa=ba=0,t0=n),ba)},movementY:function(n){return"movementY"in n?n.movementY:Aa}}),I2=le(l1),h4=Z({},l1,{dataTransfer:0}),v4=le(h4),K4=Z({},e0,{relatedTarget:0}),Ta=le(K4),S4=Z({},Vt,{animationName:0,elapsedTime:0,pseudoElement:0}),E4=le(S4),b4=Z({},Vt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),A4=le(b4),T4=Z({},Vt,{data:0}),P2=le(T4),z4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x4(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=q4[n])?!!e[n]:!1}function za(){return x4}var H4=Z({},e0,{key:function(n){if(n.key){var e=z4[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=n1(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M4[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:za,charCode:function(n){return n.type==="keypress"?n1(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?n1(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),w4=le(H4),_4=Z({},l1,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ni=le(_4),O4=Z({},e0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:za}),D4=le(O4),j4=Z({},Vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),N4=le(j4),U4=Z({},l1,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),C4=le(U4),Z4=Z({},Vt,{newState:0,oldState:0}),B4=le(Z4),R4=[9,13,27,32],Ma=Le&&"CompositionEvent"in window,l0=null;Le&&"documentMode"in document&&(l0=document.documentMode);var V4=Le&&"TextEvent"in window&&!l0,ei=Le&&(!Ma||l0&&8<l0&&11>=l0),ti=" ",li=!1;function ai(n,e){switch(n){case"keyup":return R4.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ui(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var yl=!1;function Y4(n,e){switch(n){case"compositionend":return ui(e);case"keypress":return e.which!==32?null:(li=!0,ti);case"textInput":return n=e.data,n===ti&&li?null:n;default:return null}}function G4(n,e){if(yl)return n==="compositionend"||!Ma&&ai(n,e)?(n=$2(),P0=Ea=pt=null,yl=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ei&&e.locale!=="ko"?null:e.data;default:return null}}var X4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ii(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!X4[n.type]:e==="textarea"}function ci(n,e,t,l){gl?pl?pl.push(l):pl=[l]:gl=l,e=L1(e,"onChange"),0<e.length&&(t=new t1("onChange","change",null,t,l),n.push({event:t,listeners:e}))}var a0=null,u0=null;function Q4(n){G3(n,0)}function a1(n){var e=Il(n);if(Y2(e))return n}function fi(n,e){if(n==="change")return e}var si=!1;if(Le){var qa;if(Le){var xa="oninput"in document;if(!xa){var oi=document.createElement("div");oi.setAttribute("oninput","return;"),xa=typeof oi.oninput=="function"}qa=xa}else qa=!1;si=qa&&(!document.documentMode||9<document.documentMode)}function di(){a0&&(a0.detachEvent("onpropertychange",mi),u0=a0=null)}function mi(n){if(n.propertyName==="value"&&a1(u0)){var e=[];ci(e,u0,n,va(n)),F2(Q4,e)}}function L4(n,e,t){n==="focusin"?(di(),a0=e,u0=t,a0.attachEvent("onpropertychange",mi)):n==="focusout"&&di()}function J4(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return a1(u0)}function k4(n,e){if(n==="click")return a1(e)}function F4(n,e){if(n==="input"||n==="change")return a1(e)}function $4(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var re=typeof Object.is=="function"?Object.is:$4;function i0(n,e){if(re(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),l=Object.keys(e);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var a=t[l];if(!M.call(e,a)||!re(n[a],e[a]))return!1}return!0}function ri(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function gi(n,e){var t=ri(n);n=0;for(var l;t;){if(t.nodeType===3){if(l=n+t.textContent.length,n<=e&&l>=e)return{node:t,offset:e-n};n=l}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=ri(t)}}function pi(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?pi(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function yi(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=W0(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=W0(n.document)}return e}function Ha(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var W4=Le&&"documentMode"in document&&11>=document.documentMode,hl=null,wa=null,c0=null,_a=!1;function hi(n,e,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;_a||hl==null||hl!==W0(l)||(l=hl,"selectionStart"in l&&Ha(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),c0&&i0(c0,l)||(c0=l,l=L1(wa,"onSelect"),0<l.length&&(e=new t1("onSelect","select",null,e,t),n.push({event:e,listeners:l}),e.target=hl)))}function Yt(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var vl={animationend:Yt("Animation","AnimationEnd"),animationiteration:Yt("Animation","AnimationIteration"),animationstart:Yt("Animation","AnimationStart"),transitionrun:Yt("Transition","TransitionRun"),transitionstart:Yt("Transition","TransitionStart"),transitioncancel:Yt("Transition","TransitionCancel"),transitionend:Yt("Transition","TransitionEnd")},Oa={},vi={};Le&&(vi=document.createElement("div").style,"AnimationEvent"in window||(delete vl.animationend.animation,delete vl.animationiteration.animation,delete vl.animationstart.animation),"TransitionEvent"in window||delete vl.transitionend.transition);function Gt(n){if(Oa[n])return Oa[n];if(!vl[n])return n;var e=vl[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in vi)return Oa[n]=e[t];return n}var Ki=Gt("animationend"),Si=Gt("animationiteration"),Ei=Gt("animationstart"),I4=Gt("transitionrun"),P4=Gt("transitionstart"),n5=Gt("transitioncancel"),bi=Gt("transitionend"),Ai=new Map,Da="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Da.push("scrollEnd");function Oe(n,e){Ai.set(n,e),Rt(e,[n])}var u1=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},be=[],Kl=0,ja=0;function i1(){for(var n=Kl,e=ja=Kl=0;e<n;){var t=be[e];be[e++]=null;var l=be[e];be[e++]=null;var a=be[e];be[e++]=null;var u=be[e];if(be[e++]=null,l!==null&&a!==null){var i=l.pending;i===null?a.next=a:(a.next=i.next,i.next=a),l.pending=a}u!==0&&Ti(t,a,u)}}function c1(n,e,t,l){be[Kl++]=n,be[Kl++]=e,be[Kl++]=t,be[Kl++]=l,ja|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Na(n,e,t,l){return c1(n,e,t,l),f1(n)}function Xt(n,e){return c1(n,null,null,e),f1(n)}function Ti(n,e,t){n.lanes|=t;var l=n.alternate;l!==null&&(l.lanes|=t);for(var a=!1,u=n.return;u!==null;)u.childLanes|=t,l=u.alternate,l!==null&&(l.childLanes|=t),u.tag===22&&(n=u.stateNode,n===null||n._visibility&1||(a=!0)),n=u,u=u.return;return n.tag===3?(u=n.stateNode,a&&e!==null&&(a=31-me(t),n=u.hiddenUpdates,l=n[a],l===null?n[a]=[e]:l.push(e),e.lane=t|536870912),u):null}function f1(n){if(50<H0)throw H0=0,Xu=null,Error(g(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var Sl={};function e5(n,e,t,l){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ge(n,e,t,l){return new e5(n,e,t,l)}function Ua(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Je(n,e){var t=n.alternate;return t===null?(t=ge(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&65011712,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function zi(n,e){n.flags&=65011714;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function s1(n,e,t,l,a,u){var i=0;if(l=n,typeof n=="function")Ua(n)&&(i=1);else if(typeof n=="string")i=is(n,t,D.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case _e:return n=ge(31,t,e,a),n.elementType=_e,n.lanes=u,n;case Tn:return Qt(t.children,a,u,e);case xn:i=8,a|=24;break;case jn:return n=ge(12,t,e,a|2),n.elementType=jn,n.lanes=u,n;case we:return n=ge(13,t,e,a),n.elementType=we,n.lanes=u,n;case Jn:return n=ge(19,t,e,a),n.elementType=Jn,n.lanes=u,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Bn:i=10;break n;case se:i=9;break n;case Wn:i=11;break n;case W:i=14;break n;case In:i=16,l=null;break n}i=29,t=Error(g(130,n===null?"null":typeof n,"")),l=null}return e=ge(i,t,e,a),e.elementType=n,e.type=l,e.lanes=u,e}function Qt(n,e,t,l){return n=ge(7,n,l,e),n.lanes=t,n}function Ca(n,e,t){return n=ge(6,n,null,e),n.lanes=t,n}function Mi(n){var e=ge(18,null,null,0);return e.stateNode=n,e}function Za(n,e,t){return e=ge(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var qi=new WeakMap;function Ae(n,e){if(typeof n=="object"&&n!==null){var t=qi.get(n);return t!==void 0?t:(e={value:n,source:e,stack:Ql(e)},qi.set(n,e),e)}return{value:n,source:e,stack:Ql(e)}}var El=[],bl=0,o1=null,f0=0,Te=[],ze=0,yt=null,Ue=1,Ce="";function ke(n,e){El[bl++]=f0,El[bl++]=o1,o1=n,f0=e}function xi(n,e,t){Te[ze++]=Ue,Te[ze++]=Ce,Te[ze++]=yt,yt=n;var l=Ue;n=Ce;var a=32-me(l)-1;l&=~(1<<a),t+=1;var u=32-me(e)+a;if(30<u){var i=a-a%5;u=(l&(1<<i)-1).toString(32),l>>=i,a-=i,Ue=1<<32-me(e)+a|t<<a|l,Ce=u+n}else Ue=1<<u|t<<a|l,Ce=n}function Ba(n){n.return!==null&&(ke(n,1),xi(n,1,0))}function Ra(n){for(;n===o1;)o1=El[--bl],El[bl]=null,f0=El[--bl],El[bl]=null;for(;n===yt;)yt=Te[--ze],Te[ze]=null,Ce=Te[--ze],Te[ze]=null,Ue=Te[--ze],Te[ze]=null}function Hi(n,e){Te[ze++]=Ue,Te[ze++]=Ce,Te[ze++]=yt,Ue=e.id,Ce=e.overflow,yt=n}var Gn=null,hn=null,en=!1,ht=null,Me=!1,Va=Error(g(519));function vt(n){var e=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw s0(Ae(e,n)),Va}function wi(n){var e=n.stateNode,t=n.type,l=n.memoizedProps;switch(e[Yn]=n,e[te]=l,t){case"dialog":$("cancel",e),$("close",e);break;case"iframe":case"object":case"embed":$("load",e);break;case"video":case"audio":for(t=0;t<_0.length;t++)$(_0[t],e);break;case"source":$("error",e);break;case"img":case"image":case"link":$("error",e),$("load",e);break;case"details":$("toggle",e);break;case"input":$("invalid",e),G2(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":$("invalid",e);break;case"textarea":$("invalid",e),Q2(e,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||l.suppressHydrationWarning===!0||J3(e.textContent,t)?(l.popover!=null&&($("beforetoggle",e),$("toggle",e)),l.onScroll!=null&&$("scroll",e),l.onScrollEnd!=null&&$("scrollend",e),l.onClick!=null&&(e.onclick=Qe),e=!0):e=!1,e||vt(n,!0)}function _i(n){for(Gn=n.return;Gn;)switch(Gn.tag){case 5:case 31:case 13:Me=!1;return;case 27:case 3:Me=!0;return;default:Gn=Gn.return}}function Al(n){if(n!==Gn)return!1;if(!en)return _i(n),en=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||u2(n.type,n.memoizedProps)),t=!t),t&&hn&&vt(n),_i(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));hn=tf(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));hn=tf(n)}else e===27?(e=hn,Ot(n.type)?(n=o2,o2=null,hn=n):hn=e):hn=Gn?xe(n.stateNode.nextSibling):null;return!0}function Lt(){hn=Gn=null,en=!1}function Ya(){var n=ht;return n!==null&&(ce===null?ce=n:ce.push.apply(ce,n),ht=null),n}function s0(n){ht===null?ht=[n]:ht.push(n)}var Ga=d(null),Jt=null,Fe=null;function Kt(n,e,t){x(Ga,e._currentValue),e._currentValue=t}function $e(n){n._currentValue=Ga.current,A(Ga)}function Xa(n,e,t){for(;n!==null;){var l=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),n===t)break;n=n.return}}function Qa(n,e,t,l){var a=n.child;for(a!==null&&(a.return=n);a!==null;){var u=a.dependencies;if(u!==null){var i=a.child;u=u.firstContext;n:for(;u!==null;){var c=u;u=a;for(var s=0;s<e.length;s++)if(c.context===e[s]){u.lanes|=t,c=u.alternate,c!==null&&(c.lanes|=t),Xa(u.return,t,n),l||(i=null);break n}u=c.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(g(341));i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Xa(i,t,n),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===n){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function Tl(n,e,t,l){n=null;for(var a=e,u=!1;a!==null;){if(!u){if((a.flags&524288)!==0)u=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(g(387));if(i=i.memoizedProps,i!==null){var c=a.type;re(a.pendingProps.value,i.value)||(n!==null?n.push(c):n=[c])}}else if(a===an.current){if(i=a.alternate,i===null)throw Error(g(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(n!==null?n.push(U0):n=[U0])}a=a.return}n!==null&&Qa(e,n,t,l),e.flags|=262144}function d1(n){for(n=n.firstContext;n!==null;){if(!re(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function kt(n){Jt=n,Fe=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Xn(n){return Oi(Jt,n)}function m1(n,e){return Jt===null&&kt(n),Oi(n,e)}function Oi(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},Fe===null){if(n===null)throw Error(g(308));Fe=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else Fe=Fe.next=e;return t}var t5=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,l){n.push(l)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},l5=p.unstable_scheduleCallback,a5=p.unstable_NormalPriority,wn={$$typeof:Bn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function La(){return{controller:new t5,data:new Map,refCount:0}}function o0(n){n.refCount--,n.refCount===0&&l5(a5,function(){n.controller.abort()})}var d0=null,Ja=0,zl=0,Ml=null;function u5(n,e){if(d0===null){var t=d0=[];Ja=0,zl=$u(),Ml={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Ja++,e.then(Di,Di),e}function Di(){if(--Ja===0&&d0!==null){Ml!==null&&(Ml.status="fulfilled");var n=d0;d0=null,zl=0,Ml=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function i5(n,e){var t=[],l={status:"pending",value:null,reason:null,then:function(a){t.push(a)}};return n.then(function(){l.status="fulfilled",l.value=e;for(var a=0;a<t.length;a++)(0,t[a])(e)},function(a){for(l.status="rejected",l.reason=a,a=0;a<t.length;a++)(0,t[a])(void 0)}),l}var ji=v.S;v.S=function(n,e){h3=Hn(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&u5(n,e),ji!==null&&ji(n,e)};var Ft=d(null);function ka(){var n=Ft.current;return n!==null?n:yn.pooledCache}function r1(n,e){e===null?x(Ft,Ft.current):x(Ft,e.pool)}function Ni(){var n=ka();return n===null?null:{parent:wn._currentValue,pool:n}}var ql=Error(g(460)),Fa=Error(g(474)),g1=Error(g(542)),p1={then:function(){}};function Ui(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ci(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(Qe,Qe),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Bi(n),n;default:if(typeof e.status=="string")e.then(Qe,Qe);else{if(n=yn,n!==null&&100<n.shellSuspendCounter)throw Error(g(482));n=e,n.status="pending",n.then(function(l){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=l}},function(l){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Bi(n),n}throw Wt=e,ql}}function $t(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Wt=t,ql):t}}var Wt=null;function Zi(){if(Wt===null)throw Error(g(459));var n=Wt;return Wt=null,n}function Bi(n){if(n===ql||n===g1)throw Error(g(483))}var xl=null,m0=0;function y1(n){var e=m0;return m0+=1,xl===null&&(xl=[]),Ci(xl,n,e)}function r0(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function h1(n,e){throw e.$$typeof===fn?Error(g(525)):(n=Object.prototype.toString.call(e),Error(g(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function Ri(n){function e(m,o){if(n){var y=m.deletions;y===null?(m.deletions=[o],m.flags|=16):y.push(o)}}function t(m,o){if(!n)return null;for(;o!==null;)e(m,o),o=o.sibling;return null}function l(m){for(var o=new Map;m!==null;)m.key!==null?o.set(m.key,m):o.set(m.index,m),m=m.sibling;return o}function a(m,o){return m=Je(m,o),m.index=0,m.sibling=null,m}function u(m,o,y){return m.index=y,n?(y=m.alternate,y!==null?(y=y.index,y<o?(m.flags|=67108866,o):y):(m.flags|=67108866,o)):(m.flags|=1048576,o)}function i(m){return n&&m.alternate===null&&(m.flags|=67108866),m}function c(m,o,y,b){return o===null||o.tag!==6?(o=Ca(y,m.mode,b),o.return=m,o):(o=a(o,y),o.return=m,o)}function s(m,o,y,b){var B=y.type;return B===Tn?E(m,o,y.props.children,b,y.key):o!==null&&(o.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===In&&$t(B)===o.type)?(o=a(o,y.props),r0(o,y),o.return=m,o):(o=s1(y.type,y.key,y.props,null,m.mode,b),r0(o,y),o.return=m,o)}function h(m,o,y,b){return o===null||o.tag!==4||o.stateNode.containerInfo!==y.containerInfo||o.stateNode.implementation!==y.implementation?(o=Za(y,m.mode,b),o.return=m,o):(o=a(o,y.children||[]),o.return=m,o)}function E(m,o,y,b,B){return o===null||o.tag!==7?(o=Qt(y,m.mode,b,B),o.return=m,o):(o=a(o,y),o.return=m,o)}function T(m,o,y){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Ca(""+o,m.mode,y),o.return=m,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Un:return y=s1(o.type,o.key,o.props,null,m.mode,y),r0(y,o),y.return=m,y;case qn:return o=Za(o,m.mode,y),o.return=m,o;case In:return o=$t(o),T(m,o,y)}if(pn(o)||Rn(o))return o=Qt(o,m.mode,y,null),o.return=m,o;if(typeof o.then=="function")return T(m,y1(o),y);if(o.$$typeof===Bn)return T(m,m1(m,o),y);h1(m,o)}return null}function K(m,o,y,b){var B=o!==null?o.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return B!==null?null:c(m,o,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Un:return y.key===B?s(m,o,y,b):null;case qn:return y.key===B?h(m,o,y,b):null;case In:return y=$t(y),K(m,o,y,b)}if(pn(y)||Rn(y))return B!==null?null:E(m,o,y,b,null);if(typeof y.then=="function")return K(m,o,y1(y),b);if(y.$$typeof===Bn)return K(m,o,m1(m,y),b);h1(m,y)}return null}function S(m,o,y,b,B){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return m=m.get(y)||null,c(o,m,""+b,B);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Un:return m=m.get(b.key===null?y:b.key)||null,s(o,m,b,B);case qn:return m=m.get(b.key===null?y:b.key)||null,h(o,m,b,B);case In:return b=$t(b),S(m,o,y,b,B)}if(pn(b)||Rn(b))return m=m.get(y)||null,E(o,m,b,B,null);if(typeof b.then=="function")return S(m,o,y,y1(b),B);if(b.$$typeof===Bn)return S(m,o,y,m1(o,b),B);h1(o,b)}return null}function j(m,o,y,b){for(var B=null,un=null,C=o,L=o=0,nn=null;C!==null&&L<y.length;L++){C.index>L?(nn=C,C=null):nn=C.sibling;var cn=K(m,C,y[L],b);if(cn===null){C===null&&(C=nn);break}n&&C&&cn.alternate===null&&e(m,C),o=u(cn,o,L),un===null?B=cn:un.sibling=cn,un=cn,C=nn}if(L===y.length)return t(m,C),en&&ke(m,L),B;if(C===null){for(;L<y.length;L++)C=T(m,y[L],b),C!==null&&(o=u(C,o,L),un===null?B=C:un.sibling=C,un=C);return en&&ke(m,L),B}for(C=l(C);L<y.length;L++)nn=S(C,m,L,y[L],b),nn!==null&&(n&&nn.alternate!==null&&C.delete(nn.key===null?L:nn.key),o=u(nn,o,L),un===null?B=nn:un.sibling=nn,un=nn);return n&&C.forEach(function(Ct){return e(m,Ct)}),en&&ke(m,L),B}function R(m,o,y,b){if(y==null)throw Error(g(151));for(var B=null,un=null,C=o,L=o=0,nn=null,cn=y.next();C!==null&&!cn.done;L++,cn=y.next()){C.index>L?(nn=C,C=null):nn=C.sibling;var Ct=K(m,C,cn.value,b);if(Ct===null){C===null&&(C=nn);break}n&&C&&Ct.alternate===null&&e(m,C),o=u(Ct,o,L),un===null?B=Ct:un.sibling=Ct,un=Ct,C=nn}if(cn.done)return t(m,C),en&&ke(m,L),B;if(C===null){for(;!cn.done;L++,cn=y.next())cn=T(m,cn.value,b),cn!==null&&(o=u(cn,o,L),un===null?B=cn:un.sibling=cn,un=cn);return en&&ke(m,L),B}for(C=l(C);!cn.done;L++,cn=y.next())cn=S(C,m,L,cn.value,b),cn!==null&&(n&&cn.alternate!==null&&C.delete(cn.key===null?L:cn.key),o=u(cn,o,L),un===null?B=cn:un.sibling=cn,un=cn);return n&&C.forEach(function(hs){return e(m,hs)}),en&&ke(m,L),B}function gn(m,o,y,b){if(typeof y=="object"&&y!==null&&y.type===Tn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Un:n:{for(var B=y.key;o!==null;){if(o.key===B){if(B=y.type,B===Tn){if(o.tag===7){t(m,o.sibling),b=a(o,y.props.children),b.return=m,m=b;break n}}else if(o.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===In&&$t(B)===o.type){t(m,o.sibling),b=a(o,y.props),r0(b,y),b.return=m,m=b;break n}t(m,o);break}else e(m,o);o=o.sibling}y.type===Tn?(b=Qt(y.props.children,m.mode,b,y.key),b.return=m,m=b):(b=s1(y.type,y.key,y.props,null,m.mode,b),r0(b,y),b.return=m,m=b)}return i(m);case qn:n:{for(B=y.key;o!==null;){if(o.key===B)if(o.tag===4&&o.stateNode.containerInfo===y.containerInfo&&o.stateNode.implementation===y.implementation){t(m,o.sibling),b=a(o,y.children||[]),b.return=m,m=b;break n}else{t(m,o);break}else e(m,o);o=o.sibling}b=Za(y,m.mode,b),b.return=m,m=b}return i(m);case In:return y=$t(y),gn(m,o,y,b)}if(pn(y))return j(m,o,y,b);if(Rn(y)){if(B=Rn(y),typeof B!="function")throw Error(g(150));return y=B.call(y),R(m,o,y,b)}if(typeof y.then=="function")return gn(m,o,y1(y),b);if(y.$$typeof===Bn)return gn(m,o,m1(m,y),b);h1(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,o!==null&&o.tag===6?(t(m,o.sibling),b=a(o,y),b.return=m,m=b):(t(m,o),b=Ca(y,m.mode,b),b.return=m,m=b),i(m)):t(m,o)}return function(m,o,y,b){try{m0=0;var B=gn(m,o,y,b);return xl=null,B}catch(C){if(C===ql||C===g1)throw C;var un=ge(29,C,null,m.mode);return un.lanes=b,un.return=m,un}finally{}}}var It=Ri(!0),Vi=Ri(!1),St=!1;function $a(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Et(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function bt(n,e,t){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(sn&2)!==0){var a=l.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),l.pending=e,e=f1(n),Ti(n,null,t),e}return c1(n,l,e,t),f1(n)}function g0(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var l=e.lanes;l&=n.pendingLanes,t|=l,e.lanes=t,O2(n,t)}}function Ia(n,e){var t=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var a=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var i={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};u===null?a=u=i:u=u.next=i,t=t.next}while(t!==null);u===null?a=u=e:u=u.next=e}else a=u=e;t={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var Pa=!1;function p0(){if(Pa){var n=Ml;if(n!==null)throw n}}function y0(n,e,t,l){Pa=!1;var a=n.updateQueue;St=!1;var u=a.firstBaseUpdate,i=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var s=c,h=s.next;s.next=null,i===null?u=h:i.next=h,i=s;var E=n.alternate;E!==null&&(E=E.updateQueue,c=E.lastBaseUpdate,c!==i&&(c===null?E.firstBaseUpdate=h:c.next=h,E.lastBaseUpdate=s))}if(u!==null){var T=a.baseState;i=0,E=h=s=null,c=u;do{var K=c.lane&-536870913,S=K!==c.lane;if(S?(P&K)===K:(l&K)===K){K!==0&&K===zl&&(Pa=!0),E!==null&&(E=E.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});n:{var j=n,R=c;K=e;var gn=t;switch(R.tag){case 1:if(j=R.payload,typeof j=="function"){T=j.call(gn,T,K);break n}T=j;break n;case 3:j.flags=j.flags&-65537|128;case 0:if(j=R.payload,K=typeof j=="function"?j.call(gn,T,K):j,K==null)break n;T=Z({},T,K);break n;case 2:St=!0}}K=c.callback,K!==null&&(n.flags|=64,S&&(n.flags|=8192),S=a.callbacks,S===null?a.callbacks=[K]:S.push(K))}else S={lane:K,tag:c.tag,payload:c.payload,callback:c.callback,next:null},E===null?(h=E=S,s=T):E=E.next=S,i|=K;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;S=c,c=S.next,S.next=null,a.lastBaseUpdate=S,a.shared.pending=null}}while(!0);E===null&&(s=T),a.baseState=s,a.firstBaseUpdate=h,a.lastBaseUpdate=E,u===null&&(a.shared.lanes=0),qt|=i,n.lanes=i,n.memoizedState=T}}function Yi(n,e){if(typeof n!="function")throw Error(g(191,n));n.call(e)}function Gi(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)Yi(t[n],e)}var Hl=d(null),v1=d(0);function Xi(n,e){n=ut,x(v1,n),x(Hl,e),ut=n|e.baseLanes}function nu(){x(v1,ut),x(Hl,Hl.current)}function eu(){ut=v1.current,A(Hl),A(v1)}var pe=d(null),qe=null;function At(n){var e=n.alternate;x(zn,zn.current&1),x(pe,n),qe===null&&(e===null||Hl.current!==null||e.memoizedState!==null)&&(qe=n)}function tu(n){x(zn,zn.current),x(pe,n),qe===null&&(qe=n)}function Qi(n){n.tag===22?(x(zn,zn.current),x(pe,n),qe===null&&(qe=n)):Tt()}function Tt(){x(zn,zn.current),x(pe,pe.current)}function ye(n){A(pe),qe===n&&(qe=null),A(zn)}var zn=d(0);function K1(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||f2(t)||s2(t)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var We=0,Q=null,mn=null,_n=null,S1=!1,wl=!1,Pt=!1,E1=0,h0=0,_l=null,c5=0;function bn(){throw Error(g(321))}function lu(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!re(n[t],e[t]))return!1;return!0}function au(n,e,t,l,a,u){return We=u,Q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,v.H=n===null||n.memoizedState===null?xc:Ku,Pt=!1,u=t(l,a),Pt=!1,wl&&(u=Ji(e,t,l,a)),Li(n),u}function Li(n){v.H=S0;var e=mn!==null&&mn.next!==null;if(We=0,_n=mn=Q=null,S1=!1,h0=0,_l=null,e)throw Error(g(300));n===null||On||(n=n.dependencies,n!==null&&d1(n)&&(On=!0))}function Ji(n,e,t,l){Q=n;var a=0;do{if(wl&&(_l=null),h0=0,wl=!1,25<=a)throw Error(g(301));if(a+=1,_n=mn=null,n.updateQueue!=null){var u=n.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}v.H=Hc,u=e(t,l)}while(wl);return u}function f5(){var n=v.H,e=n.useState()[0];return e=typeof e.then=="function"?v0(e):e,n=n.useState()[0],(mn!==null?mn.memoizedState:null)!==n&&(Q.flags|=1024),e}function uu(){var n=E1!==0;return E1=0,n}function iu(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function cu(n){if(S1){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}S1=!1}We=0,_n=mn=Q=null,wl=!1,h0=E1=0,_l=null}function Pn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?Q.memoizedState=_n=n:_n=_n.next=n,_n}function Mn(){if(mn===null){var n=Q.alternate;n=n!==null?n.memoizedState:null}else n=mn.next;var e=_n===null?Q.memoizedState:_n.next;if(e!==null)_n=e,mn=n;else{if(n===null)throw Q.alternate===null?Error(g(467)):Error(g(310));mn=n,n={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},_n===null?Q.memoizedState=_n=n:_n=_n.next=n}return _n}function b1(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function v0(n){var e=h0;return h0+=1,_l===null&&(_l=[]),n=Ci(_l,n,e),e=Q,(_n===null?e.memoizedState:_n.next)===null&&(e=e.alternate,v.H=e===null||e.memoizedState===null?xc:Ku),n}function A1(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return v0(n);if(n.$$typeof===Bn)return Xn(n)}throw Error(g(438,String(n)))}function fu(n){var e=null,t=Q.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var l=Q.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=b1(),Q.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),l=0;l<n;l++)t[l]=dt;return e.index++,t}function Ie(n,e){return typeof e=="function"?e(n):e}function T1(n){var e=Mn();return su(e,mn,n)}function su(n,e,t){var l=n.queue;if(l===null)throw Error(g(311));l.lastRenderedReducer=t;var a=n.baseQueue,u=l.pending;if(u!==null){if(a!==null){var i=a.next;a.next=u.next,u.next=i}e.baseQueue=a=u,l.pending=null}if(u=n.baseState,a===null)n.memoizedState=u;else{e=a.next;var c=i=null,s=null,h=e,E=!1;do{var T=h.lane&-536870913;if(T!==h.lane?(P&T)===T:(We&T)===T){var K=h.revertLane;if(K===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),T===zl&&(E=!0);else if((We&K)===K){h=h.next,K===zl&&(E=!0);continue}else T={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},s===null?(c=s=T,i=u):s=s.next=T,Q.lanes|=K,qt|=K;T=h.action,Pt&&t(u,T),u=h.hasEagerState?h.eagerState:t(u,T)}else K={lane:T,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},s===null?(c=s=K,i=u):s=s.next=K,Q.lanes|=T,qt|=T;h=h.next}while(h!==null&&h!==e);if(s===null?i=u:s.next=c,!re(u,n.memoizedState)&&(On=!0,E&&(t=Ml,t!==null)))throw t;n.memoizedState=u,n.baseState=i,n.baseQueue=s,l.lastRenderedState=u}return a===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function ou(n){var e=Mn(),t=e.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=n;var l=t.dispatch,a=t.pending,u=e.memoizedState;if(a!==null){t.pending=null;var i=a=a.next;do u=n(u,i.action),i=i.next;while(i!==a);re(u,e.memoizedState)||(On=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),t.lastRenderedState=u}return[u,l]}function ki(n,e,t){var l=Q,a=Mn(),u=en;if(u){if(t===void 0)throw Error(g(407));t=t()}else t=e();var i=!re((mn||a).memoizedState,t);if(i&&(a.memoizedState=t,On=!0),a=a.queue,ru(Wi.bind(null,l,a,n),[n]),a.getSnapshot!==e||i||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,Ol(9,{destroy:void 0},$i.bind(null,l,a,t,e),null),yn===null)throw Error(g(349));u||(We&127)!==0||Fi(l,e,t)}return t}function Fi(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Q.updateQueue,e===null?(e=b1(),Q.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function $i(n,e,t,l){e.value=t,e.getSnapshot=l,Ii(e)&&Pi(n)}function Wi(n,e,t){return t(function(){Ii(e)&&Pi(n)})}function Ii(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!re(n,t)}catch{return!0}}function Pi(n){var e=Xt(n,2);e!==null&&fe(e,n,2)}function du(n){var e=Pn();if(typeof n=="function"){var t=n;if(n=t(),Pt){rt(!0);try{t()}finally{rt(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ie,lastRenderedState:n},e}function nc(n,e,t,l){return n.baseState=t,su(n,mn,typeof l=="function"?l:Ie)}function s5(n,e,t,l,a){if(q1(n))throw Error(g(485));if(n=e.action,n!==null){var u={payload:a,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};v.T!==null?t(!0):u.isTransition=!1,l(u),t=e.pending,t===null?(u.next=e.pending=u,ec(e,u)):(u.next=t.next,e.pending=t.next=u)}}function ec(n,e){var t=e.action,l=e.payload,a=n.state;if(e.isTransition){var u=v.T,i={};v.T=i;try{var c=t(a,l),s=v.S;s!==null&&s(i,c),tc(n,e,c)}catch(h){mu(n,e,h)}finally{u!==null&&i.types!==null&&(u.types=i.types),v.T=u}}else try{u=t(a,l),tc(n,e,u)}catch(h){mu(n,e,h)}}function tc(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){lc(n,e,l)},function(l){return mu(n,e,l)}):lc(n,e,t)}function lc(n,e,t){e.status="fulfilled",e.value=t,ac(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,ec(n,t)))}function mu(n,e,t){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=t,ac(e),e=e.next;while(e!==l)}n.action=null}function ac(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function uc(n,e){return e}function ic(n,e){if(en){var t=yn.formState;if(t!==null){n:{var l=Q;if(en){if(hn){e:{for(var a=hn,u=Me;a.nodeType!==8;){if(!u){a=null;break e}if(a=xe(a.nextSibling),a===null){a=null;break e}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){hn=xe(a.nextSibling),l=a.data==="F!";break n}}vt(l)}l=!1}l&&(e=t[0])}}return t=Pn(),t.memoizedState=t.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uc,lastRenderedState:e},t.queue=l,t=zc.bind(null,Q,l),l.dispatch=t,l=du(!1),u=vu.bind(null,Q,!1,l.queue),l=Pn(),a={state:e,dispatch:null,action:n,pending:null},l.queue=a,t=s5.bind(null,Q,a,u,t),a.dispatch=t,l.memoizedState=n,[e,t,!1]}function cc(n){var e=Mn();return fc(e,mn,n)}function fc(n,e,t){if(e=su(n,e,uc)[0],n=T1(Ie)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=v0(e)}catch(i){throw i===ql?g1:i}else l=e;e=Mn();var a=e.queue,u=a.dispatch;return t!==e.memoizedState&&(Q.flags|=2048,Ol(9,{destroy:void 0},o5.bind(null,a,t),null)),[l,u,n]}function o5(n,e){n.action=e}function sc(n){var e=Mn(),t=mn;if(t!==null)return fc(e,t,n);Mn(),e=e.memoizedState,t=Mn();var l=t.queue.dispatch;return t.memoizedState=n,[e,l,!1]}function Ol(n,e,t,l){return n={tag:n,create:t,deps:l,inst:e,next:null},e=Q.updateQueue,e===null&&(e=b1(),Q.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(l=t.next,t.next=n,n.next=l,e.lastEffect=n),n}function oc(){return Mn().memoizedState}function z1(n,e,t,l){var a=Pn();Q.flags|=n,a.memoizedState=Ol(1|e,{destroy:void 0},t,l===void 0?null:l)}function M1(n,e,t,l){var a=Mn();l=l===void 0?null:l;var u=a.memoizedState.inst;mn!==null&&l!==null&&lu(l,mn.memoizedState.deps)?a.memoizedState=Ol(e,u,t,l):(Q.flags|=n,a.memoizedState=Ol(1|e,u,t,l))}function dc(n,e){z1(8390656,8,n,e)}function ru(n,e){M1(2048,8,n,e)}function d5(n){Q.flags|=4;var e=Q.updateQueue;if(e===null)e=b1(),Q.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function mc(n){var e=Mn().memoizedState;return d5({ref:e,nextImpl:n}),function(){if((sn&2)!==0)throw Error(g(440));return e.impl.apply(void 0,arguments)}}function rc(n,e){return M1(4,2,n,e)}function gc(n,e){return M1(4,4,n,e)}function pc(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function yc(n,e,t){t=t!=null?t.concat([n]):null,M1(4,4,pc.bind(null,e,n),t)}function gu(){}function hc(n,e){var t=Mn();e=e===void 0?null:e;var l=t.memoizedState;return e!==null&&lu(e,l[1])?l[0]:(t.memoizedState=[n,e],n)}function vc(n,e){var t=Mn();e=e===void 0?null:e;var l=t.memoizedState;if(e!==null&&lu(e,l[1]))return l[0];if(l=n(),Pt){rt(!0);try{n()}finally{rt(!1)}}return t.memoizedState=[l,e],l}function pu(n,e,t){return t===void 0||(We&1073741824)!==0&&(P&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=K3(),Q.lanes|=n,qt|=n,t)}function Kc(n,e,t,l){return re(t,e)?t:Hl.current!==null?(n=pu(n,t,l),re(n,e)||(On=!0),n):(We&42)===0||(We&1073741824)!==0&&(P&261930)===0?(On=!0,n.memoizedState=t):(n=K3(),Q.lanes|=n,qt|=n,e)}function Sc(n,e,t,l,a){var u=q.p;q.p=u!==0&&8>u?u:8;var i=v.T,c={};v.T=c,vu(n,!1,e,t);try{var s=a(),h=v.S;if(h!==null&&h(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var E=i5(s,l);K0(n,e,E,Ke(n))}else K0(n,e,l,Ke(n))}catch(T){K0(n,e,{then:function(){},status:"rejected",reason:T},Ke())}finally{q.p=u,i!==null&&c.types!==null&&(i.types=c.types),v.T=i}}function m5(){}function yu(n,e,t,l){if(n.tag!==5)throw Error(g(476));var a=Ec(n).queue;Sc(n,a,e,V,t===null?m5:function(){return bc(n),t(l)})}function Ec(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ie,lastRenderedState:V},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ie,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function bc(n){var e=Ec(n);e.next===null&&(e=n.alternate.memoizedState),K0(n,e.next.queue,{},Ke())}function hu(){return Xn(U0)}function Ac(){return Mn().memoizedState}function Tc(){return Mn().memoizedState}function r5(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=Ke();n=Et(t);var l=bt(e,n,t);l!==null&&(fe(l,e,t),g0(l,e,t)),e={cache:La()},n.payload=e;return}e=e.return}}function g5(n,e,t){var l=Ke();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},q1(n)?Mc(e,t):(t=Na(n,e,t,l),t!==null&&(fe(t,n,l),qc(t,e,l)))}function zc(n,e,t){var l=Ke();K0(n,e,t,l)}function K0(n,e,t,l){var a={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(q1(n))Mc(e,a);else{var u=n.alternate;if(n.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var i=e.lastRenderedState,c=u(i,t);if(a.hasEagerState=!0,a.eagerState=c,re(c,i))return c1(n,e,a,0),yn===null&&i1(),!1}catch{}finally{}if(t=Na(n,e,a,l),t!==null)return fe(t,n,l),qc(t,e,l),!0}return!1}function vu(n,e,t,l){if(l={lane:2,revertLane:$u(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},q1(n)){if(e)throw Error(g(479))}else e=Na(n,t,l,2),e!==null&&fe(e,n,2)}function q1(n){var e=n.alternate;return n===Q||e!==null&&e===Q}function Mc(n,e){wl=S1=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function qc(n,e,t){if((t&4194048)!==0){var l=e.lanes;l&=n.pendingLanes,t|=l,e.lanes=t,O2(n,t)}}var S0={readContext:Xn,use:A1,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useLayoutEffect:bn,useInsertionEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useSyncExternalStore:bn,useId:bn,useHostTransitionStatus:bn,useFormState:bn,useActionState:bn,useOptimistic:bn,useMemoCache:bn,useCacheRefresh:bn};S0.useEffectEvent=bn;var xc={readContext:Xn,use:A1,useCallback:function(n,e){return Pn().memoizedState=[n,e===void 0?null:e],n},useContext:Xn,useEffect:dc,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,z1(4194308,4,pc.bind(null,e,n),t)},useLayoutEffect:function(n,e){return z1(4194308,4,n,e)},useInsertionEffect:function(n,e){z1(4,2,n,e)},useMemo:function(n,e){var t=Pn();e=e===void 0?null:e;var l=n();if(Pt){rt(!0);try{n()}finally{rt(!1)}}return t.memoizedState=[l,e],l},useReducer:function(n,e,t){var l=Pn();if(t!==void 0){var a=t(e);if(Pt){rt(!0);try{t(e)}finally{rt(!1)}}}else a=e;return l.memoizedState=l.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:a},l.queue=n,n=n.dispatch=g5.bind(null,Q,n),[l.memoizedState,n]},useRef:function(n){var e=Pn();return n={current:n},e.memoizedState=n},useState:function(n){n=du(n);var e=n.queue,t=zc.bind(null,Q,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:gu,useDeferredValue:function(n,e){var t=Pn();return pu(t,n,e)},useTransition:function(){var n=du(!1);return n=Sc.bind(null,Q,n.queue,!0,!1),Pn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var l=Q,a=Pn();if(en){if(t===void 0)throw Error(g(407));t=t()}else{if(t=e(),yn===null)throw Error(g(349));(P&127)!==0||Fi(l,e,t)}a.memoizedState=t;var u={value:t,getSnapshot:e};return a.queue=u,dc(Wi.bind(null,l,u,n),[n]),l.flags|=2048,Ol(9,{destroy:void 0},$i.bind(null,l,u,t,e),null),t},useId:function(){var n=Pn(),e=yn.identifierPrefix;if(en){var t=Ce,l=Ue;t=(l&~(1<<32-me(l)-1)).toString(32)+t,e="_"+e+"R_"+t,t=E1++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=c5++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:hu,useFormState:ic,useActionState:ic,useOptimistic:function(n){var e=Pn();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=vu.bind(null,Q,!0,t),t.dispatch=e,[n,e]},useMemoCache:fu,useCacheRefresh:function(){return Pn().memoizedState=r5.bind(null,Q)},useEffectEvent:function(n){var e=Pn(),t={impl:n};return e.memoizedState=t,function(){if((sn&2)!==0)throw Error(g(440));return t.impl.apply(void 0,arguments)}}},Ku={readContext:Xn,use:A1,useCallback:hc,useContext:Xn,useEffect:ru,useImperativeHandle:yc,useInsertionEffect:rc,useLayoutEffect:gc,useMemo:vc,useReducer:T1,useRef:oc,useState:function(){return T1(Ie)},useDebugValue:gu,useDeferredValue:function(n,e){var t=Mn();return Kc(t,mn.memoizedState,n,e)},useTransition:function(){var n=T1(Ie)[0],e=Mn().memoizedState;return[typeof n=="boolean"?n:v0(n),e]},useSyncExternalStore:ki,useId:Ac,useHostTransitionStatus:hu,useFormState:cc,useActionState:cc,useOptimistic:function(n,e){var t=Mn();return nc(t,mn,n,e)},useMemoCache:fu,useCacheRefresh:Tc};Ku.useEffectEvent=mc;var Hc={readContext:Xn,use:A1,useCallback:hc,useContext:Xn,useEffect:ru,useImperativeHandle:yc,useInsertionEffect:rc,useLayoutEffect:gc,useMemo:vc,useReducer:ou,useRef:oc,useState:function(){return ou(Ie)},useDebugValue:gu,useDeferredValue:function(n,e){var t=Mn();return mn===null?pu(t,n,e):Kc(t,mn.memoizedState,n,e)},useTransition:function(){var n=ou(Ie)[0],e=Mn().memoizedState;return[typeof n=="boolean"?n:v0(n),e]},useSyncExternalStore:ki,useId:Ac,useHostTransitionStatus:hu,useFormState:sc,useActionState:sc,useOptimistic:function(n,e){var t=Mn();return mn!==null?nc(t,mn,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:fu,useCacheRefresh:Tc};Hc.useEffectEvent=mc;function Su(n,e,t,l){e=n.memoizedState,t=t(l,e),t=t==null?e:Z({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Eu={enqueueSetState:function(n,e,t){n=n._reactInternals;var l=Ke(),a=Et(l);a.payload=e,t!=null&&(a.callback=t),e=bt(n,a,l),e!==null&&(fe(e,n,l),g0(e,n,l))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var l=Ke(),a=Et(l);a.tag=1,a.payload=e,t!=null&&(a.callback=t),e=bt(n,a,l),e!==null&&(fe(e,n,l),g0(e,n,l))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Ke(),l=Et(t);l.tag=2,e!=null&&(l.callback=e),e=bt(n,l,t),e!==null&&(fe(e,n,t),g0(e,n,t))}};function wc(n,e,t,l,a,u,i){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,u,i):e.prototype&&e.prototype.isPureReactComponent?!i0(t,l)||!i0(a,u):!0}function _c(n,e,t,l){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,l),e.state!==n&&Eu.enqueueReplaceState(e,e.state,null)}function nl(n,e){var t=e;if("ref"in e){t={};for(var l in e)l!=="ref"&&(t[l]=e[l])}if(n=n.defaultProps){t===e&&(t=Z({},t));for(var a in n)t[a]===void 0&&(t[a]=n[a])}return t}function Oc(n){u1(n)}function Dc(n){console.error(n)}function jc(n){u1(n)}function x1(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Nc(n,e,t){try{var l=n.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function bu(n,e,t){return t=Et(t),t.tag=3,t.payload={element:null},t.callback=function(){x1(n,e)},t}function Uc(n){return n=Et(n),n.tag=3,n}function Cc(n,e,t,l){var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var u=l.value;n.payload=function(){return a(u)},n.callback=function(){Nc(e,t,l)}}var i=t.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Nc(e,t,l),typeof a!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function p5(n,e,t,l,a){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=t.alternate,e!==null&&Tl(e,t,a,!0),t=pe.current,t!==null){switch(t.tag){case 31:case 13:return qe===null?R1():t.alternate===null&&An===0&&(An=3),t.flags&=-257,t.flags|=65536,t.lanes=a,l===p1?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([l]):e.add(l),Ju(n,l,a)),!1;case 22:return t.flags|=65536,l===p1?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([l]):t.add(l)),Ju(n,l,a)),!1}throw Error(g(435,t.tag))}return Ju(n,l,a),R1(),!1}if(en)return e=pe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,l!==Va&&(n=Error(g(422),{cause:l}),s0(Ae(n,t)))):(l!==Va&&(e=Error(g(423),{cause:l}),s0(Ae(e,t))),n=n.current.alternate,n.flags|=65536,a&=-a,n.lanes|=a,l=Ae(l,t),a=bu(n.stateNode,l,a),Ia(n,a),An!==4&&(An=2)),!1;var u=Error(g(520),{cause:l});if(u=Ae(u,t),x0===null?x0=[u]:x0.push(u),An!==4&&(An=2),e===null)return!0;l=Ae(l,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=a&-a,t.lanes|=n,n=bu(t.stateNode,l,n),Ia(t,n),!1;case 1:if(e=t.type,u=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(xt===null||!xt.has(u))))return t.flags|=65536,a&=-a,t.lanes|=a,a=Uc(a),Cc(a,n,t,l),Ia(t,a),!1}t=t.return}while(t!==null);return!1}var Au=Error(g(461)),On=!1;function Qn(n,e,t,l){e.child=n===null?Vi(e,null,t,l):It(e,n.child,t,l)}function Zc(n,e,t,l,a){t=t.render;var u=e.ref;if("ref"in l){var i={};for(var c in l)c!=="ref"&&(i[c]=l[c])}else i=l;return kt(e),l=au(n,e,t,i,u,a),c=uu(),n!==null&&!On?(iu(n,e,a),Pe(n,e,a)):(en&&c&&Ba(e),e.flags|=1,Qn(n,e,l,a),e.child)}function Bc(n,e,t,l,a){if(n===null){var u=t.type;return typeof u=="function"&&!Ua(u)&&u.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=u,Rc(n,e,u,l,a)):(n=s1(t.type,null,l,e,e.mode,a),n.ref=e.ref,n.return=e,e.child=n)}if(u=n.child,!_u(n,a)){var i=u.memoizedProps;if(t=t.compare,t=t!==null?t:i0,t(i,l)&&n.ref===e.ref)return Pe(n,e,a)}return e.flags|=1,n=Je(u,l),n.ref=e.ref,n.return=e,e.child=n}function Rc(n,e,t,l,a){if(n!==null){var u=n.memoizedProps;if(i0(u,l)&&n.ref===e.ref)if(On=!1,e.pendingProps=l=u,_u(n,a))(n.flags&131072)!==0&&(On=!0);else return e.lanes=n.lanes,Pe(n,e,a)}return Tu(n,e,t,l,a)}function Vc(n,e,t,l){var a=l.children,u=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|t:t,n!==null){for(l=e.child=n.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~u}else l=0,e.child=null;return Yc(n,e,u,t,l)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&r1(e,u!==null?u.cachePool:null),u!==null?Xi(e,u):nu(),Qi(e);else return l=e.lanes=536870912,Yc(n,e,u!==null?u.baseLanes|t:t,t,l)}else u!==null?(r1(e,u.cachePool),Xi(e,u),Tt(),e.memoizedState=null):(n!==null&&r1(e,null),nu(),Tt());return Qn(n,e,a,t),e.child}function E0(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Yc(n,e,t,l,a){var u=ka();return u=u===null?null:{parent:wn._currentValue,pool:u},e.memoizedState={baseLanes:t,cachePool:u},n!==null&&r1(e,null),nu(),Qi(e),n!==null&&Tl(n,e,l,!0),e.childLanes=a,null}function H1(n,e){return e=_1({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function Gc(n,e,t){return It(e,n.child,null,t),n=H1(e,e.pendingProps),n.flags|=2,ye(e),e.memoizedState=null,n}function y5(n,e,t){var l=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(en){if(l.mode==="hidden")return n=H1(e,l),e.lanes=536870912,E0(null,n);if(tu(e),(n=hn)?(n=ef(n,Me),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:yt!==null?{id:Ue,overflow:Ce}:null,retryLane:536870912,hydrationErrors:null},t=Mi(n),t.return=e,e.child=t,Gn=e,hn=null)):n=null,n===null)throw vt(e);return e.lanes=536870912,null}return H1(e,l)}var u=n.memoizedState;if(u!==null){var i=u.dehydrated;if(tu(e),a)if(e.flags&256)e.flags&=-257,e=Gc(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(g(558));else if(On||Tl(n,e,t,!1),a=(t&n.childLanes)!==0,On||a){if(l=yn,l!==null&&(i=D2(l,t),i!==0&&i!==u.retryLane))throw u.retryLane=i,Xt(n,i),fe(l,n,i),Au;R1(),e=Gc(n,e,t)}else n=u.treeContext,hn=xe(i.nextSibling),Gn=e,en=!0,ht=null,Me=!1,n!==null&&Hi(e,n),e=H1(e,l),e.flags|=4096;return e}return n=Je(n.child,{mode:l.mode,children:l.children}),n.ref=e.ref,e.child=n,n.return=e,n}function w1(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(g(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function Tu(n,e,t,l,a){return kt(e),t=au(n,e,t,l,void 0,a),l=uu(),n!==null&&!On?(iu(n,e,a),Pe(n,e,a)):(en&&l&&Ba(e),e.flags|=1,Qn(n,e,t,a),e.child)}function Xc(n,e,t,l,a,u){return kt(e),e.updateQueue=null,t=Ji(e,l,t,a),Li(n),l=uu(),n!==null&&!On?(iu(n,e,u),Pe(n,e,u)):(en&&l&&Ba(e),e.flags|=1,Qn(n,e,t,u),e.child)}function Qc(n,e,t,l,a){if(kt(e),e.stateNode===null){var u=Sl,i=t.contextType;typeof i=="object"&&i!==null&&(u=Xn(i)),u=new t(l,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Eu,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=l,u.state=e.memoizedState,u.refs={},$a(e),i=t.contextType,u.context=typeof i=="object"&&i!==null?Xn(i):Sl,u.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Su(e,t,i,l),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Eu.enqueueReplaceState(u,u.state,null),y0(e,l,u,a),p0(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(n===null){u=e.stateNode;var c=e.memoizedProps,s=nl(t,c);u.props=s;var h=u.context,E=t.contextType;i=Sl,typeof E=="object"&&E!==null&&(i=Xn(E));var T=t.getDerivedStateFromProps;E=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,E||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||h!==i)&&_c(e,u,l,i),St=!1;var K=e.memoizedState;u.state=K,y0(e,l,u,a),p0(),h=e.memoizedState,c||K!==h||St?(typeof T=="function"&&(Su(e,t,T,l),h=e.memoizedState),(s=St||wc(e,t,s,l,K,h,i))?(E||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=h),u.props=l,u.state=h,u.context=i,l=s):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{u=e.stateNode,Wa(n,e),i=e.memoizedProps,E=nl(t,i),u.props=E,T=e.pendingProps,K=u.context,h=t.contextType,s=Sl,typeof h=="object"&&h!==null&&(s=Xn(h)),c=t.getDerivedStateFromProps,(h=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==T||K!==s)&&_c(e,u,l,s),St=!1,K=e.memoizedState,u.state=K,y0(e,l,u,a),p0();var S=e.memoizedState;i!==T||K!==S||St||n!==null&&n.dependencies!==null&&d1(n.dependencies)?(typeof c=="function"&&(Su(e,t,c,l),S=e.memoizedState),(E=St||wc(e,t,E,l,K,S,s)||n!==null&&n.dependencies!==null&&d1(n.dependencies))?(h||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,S,s),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,S,s)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===n.memoizedProps&&K===n.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&K===n.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=S),u.props=l,u.state=S,u.context=s,l=E):(typeof u.componentDidUpdate!="function"||i===n.memoizedProps&&K===n.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&K===n.memoizedState||(e.flags|=1024),l=!1)}return u=l,w1(n,e),l=(e.flags&128)!==0,u||l?(u=e.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,n!==null&&l?(e.child=It(e,n.child,null,a),e.child=It(e,null,t,a)):Qn(n,e,t,a),e.memoizedState=u.state,n=e.child):n=Pe(n,e,a),n}function Lc(n,e,t,l){return Lt(),e.flags|=256,Qn(n,e,t,l),e.child}var zu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mu(n){return{baseLanes:n,cachePool:Ni()}}function qu(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=ve),n}function Jc(n,e,t){var l=e.pendingProps,a=!1,u=(e.flags&128)!==0,i;if((i=u)||(i=n!==null&&n.memoizedState===null?!1:(zn.current&2)!==0),i&&(a=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,n===null){if(en){if(a?At(e):Tt(),(n=hn)?(n=ef(n,Me),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:yt!==null?{id:Ue,overflow:Ce}:null,retryLane:536870912,hydrationErrors:null},t=Mi(n),t.return=e,e.child=t,Gn=e,hn=null)):n=null,n===null)throw vt(e);return s2(n)?e.lanes=32:e.lanes=536870912,null}var c=l.children;return l=l.fallback,a?(Tt(),a=e.mode,c=_1({mode:"hidden",children:c},a),l=Qt(l,a,t,null),c.return=e,l.return=e,c.sibling=l,e.child=c,l=e.child,l.memoizedState=Mu(t),l.childLanes=qu(n,i,t),e.memoizedState=zu,E0(null,l)):(At(e),xu(e,c))}var s=n.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(u)e.flags&256?(At(e),e.flags&=-257,e=Hu(n,e,t)):e.memoizedState!==null?(Tt(),e.child=n.child,e.flags|=128,e=null):(Tt(),c=l.fallback,a=e.mode,l=_1({mode:"visible",children:l.children},a),c=Qt(c,a,t,null),c.flags|=2,l.return=e,c.return=e,l.sibling=c,e.child=l,It(e,n.child,null,t),l=e.child,l.memoizedState=Mu(t),l.childLanes=qu(n,i,t),e.memoizedState=zu,e=E0(null,l));else if(At(e),s2(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var h=i.dgst;i=h,l=Error(g(419)),l.stack="",l.digest=i,s0({value:l,source:null,stack:null}),e=Hu(n,e,t)}else if(On||Tl(n,e,t,!1),i=(t&n.childLanes)!==0,On||i){if(i=yn,i!==null&&(l=D2(i,t),l!==0&&l!==s.retryLane))throw s.retryLane=l,Xt(n,l),fe(i,n,l),Au;f2(c)||R1(),e=Hu(n,e,t)}else f2(c)?(e.flags|=192,e.child=n.child,e=null):(n=s.treeContext,hn=xe(c.nextSibling),Gn=e,en=!0,ht=null,Me=!1,n!==null&&Hi(e,n),e=xu(e,l.children),e.flags|=4096);return e}return a?(Tt(),c=l.fallback,a=e.mode,s=n.child,h=s.sibling,l=Je(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,h!==null?c=Je(h,c):(c=Qt(c,a,t,null),c.flags|=2),c.return=e,l.return=e,l.sibling=c,e.child=l,E0(null,l),l=e.child,c=n.child.memoizedState,c===null?c=Mu(t):(a=c.cachePool,a!==null?(s=wn._currentValue,a=a.parent!==s?{parent:s,pool:s}:a):a=Ni(),c={baseLanes:c.baseLanes|t,cachePool:a}),l.memoizedState=c,l.childLanes=qu(n,i,t),e.memoizedState=zu,E0(n.child,l)):(At(e),t=n.child,n=t.sibling,t=Je(t,{mode:"visible",children:l.children}),t.return=e,t.sibling=null,n!==null&&(i=e.deletions,i===null?(e.deletions=[n],e.flags|=16):i.push(n)),e.child=t,e.memoizedState=null,t)}function xu(n,e){return e=_1({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function _1(n,e){return n=ge(22,n,null,e),n.lanes=0,n}function Hu(n,e,t){return It(e,n.child,null,t),n=xu(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function kc(n,e,t){n.lanes|=e;var l=n.alternate;l!==null&&(l.lanes|=e),Xa(n.return,e,t)}function wu(n,e,t,l,a,u){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:a,treeForkCount:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=t,i.tailMode=a,i.treeForkCount=u)}function Fc(n,e,t){var l=e.pendingProps,a=l.revealOrder,u=l.tail;l=l.children;var i=zn.current,c=(i&2)!==0;if(c?(i=i&1|2,e.flags|=128):i&=1,x(zn,i),Qn(n,e,l,t),l=en?f0:0,!c&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&kc(n,t,e);else if(n.tag===19)kc(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(a){case"forwards":for(t=e.child,a=null;t!==null;)n=t.alternate,n!==null&&K1(n)===null&&(a=t),t=t.sibling;t=a,t===null?(a=e.child,e.child=null):(a=t.sibling,t.sibling=null),wu(e,!1,a,t,u,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,a=e.child,e.child=null;a!==null;){if(n=a.alternate,n!==null&&K1(n)===null){e.child=a;break}n=a.sibling,a.sibling=t,t=a,a=n}wu(e,!0,t,null,u,l);break;case"together":wu(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function Pe(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),qt|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(Tl(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(g(153));if(e.child!==null){for(n=e.child,t=Je(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Je(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function _u(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&d1(n)))}function h5(n,e,t){switch(e.tag){case 3:Vn(e,e.stateNode.containerInfo),Kt(e,wn,n.memoizedState.cache),Lt();break;case 27:case 5:Ve(e);break;case 4:Vn(e,e.stateNode.containerInfo);break;case 10:Kt(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,tu(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(At(e),e.flags|=128,null):(t&e.child.childLanes)!==0?Jc(n,e,t):(At(e),n=Pe(n,e,t),n!==null?n.sibling:null);At(e);break;case 19:var a=(n.flags&128)!==0;if(l=(t&e.childLanes)!==0,l||(Tl(n,e,t,!1),l=(t&e.childLanes)!==0),a){if(l)return Fc(n,e,t);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),x(zn,zn.current),l)break;return null;case 22:return e.lanes=0,Vc(n,e,t,e.pendingProps);case 24:Kt(e,wn,n.memoizedState.cache)}return Pe(n,e,t)}function $c(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)On=!0;else{if(!_u(n,t)&&(e.flags&128)===0)return On=!1,h5(n,e,t);On=(n.flags&131072)!==0}else On=!1,en&&(e.flags&1048576)!==0&&xi(e,f0,e.index);switch(e.lanes=0,e.tag){case 16:n:{var l=e.pendingProps;if(n=$t(e.elementType),e.type=n,typeof n=="function")Ua(n)?(l=nl(n,l),e.tag=1,e=Qc(null,e,n,l,t)):(e.tag=0,e=Tu(null,e,n,l,t));else{if(n!=null){var a=n.$$typeof;if(a===Wn){e.tag=11,e=Zc(null,e,n,l,t);break n}else if(a===W){e.tag=14,e=Bc(null,e,n,l,t);break n}}throw e=Y(n)||n,Error(g(306,e,""))}}return e;case 0:return Tu(n,e,e.type,e.pendingProps,t);case 1:return l=e.type,a=nl(l,e.pendingProps),Qc(n,e,l,a,t);case 3:n:{if(Vn(e,e.stateNode.containerInfo),n===null)throw Error(g(387));l=e.pendingProps;var u=e.memoizedState;a=u.element,Wa(n,e),y0(e,l,null,t);var i=e.memoizedState;if(l=i.cache,Kt(e,wn,l),l!==u.cache&&Qa(e,[wn],t,!0),p0(),l=i.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Lc(n,e,l,t);break n}else if(l!==a){a=Ae(Error(g(424)),e),s0(a),e=Lc(n,e,l,t);break n}else{switch(n=e.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(hn=xe(n.firstChild),Gn=e,en=!0,ht=null,Me=!0,t=Vi(e,null,l,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Lt(),l===a){e=Pe(n,e,t);break n}Qn(n,e,l,t)}e=e.child}return e;case 26:return w1(n,e),n===null?(t=ff(e.type,null,e.pendingProps,null))?e.memoizedState=t:en||(t=e.type,n=e.pendingProps,l=J1(J.current).createElement(t),l[Yn]=e,l[te]=n,Ln(l,t,n),Cn(l),e.stateNode=l):e.memoizedState=ff(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Ve(e),n===null&&en&&(l=e.stateNode=af(e.type,e.pendingProps,J.current),Gn=e,Me=!0,a=hn,Ot(e.type)?(o2=a,hn=xe(l.firstChild)):hn=a),Qn(n,e,e.pendingProps.children,t),w1(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&en&&((a=l=hn)&&(l=J5(l,e.type,e.pendingProps,Me),l!==null?(e.stateNode=l,Gn=e,hn=xe(l.firstChild),Me=!1,a=!0):a=!1),a||vt(e)),Ve(e),a=e.type,u=e.pendingProps,i=n!==null?n.memoizedProps:null,l=u.children,u2(a,u)?l=null:i!==null&&u2(a,i)&&(e.flags|=32),e.memoizedState!==null&&(a=au(n,e,f5,null,null,t),U0._currentValue=a),w1(n,e),Qn(n,e,l,t),e.child;case 6:return n===null&&en&&((n=t=hn)&&(t=k5(t,e.pendingProps,Me),t!==null?(e.stateNode=t,Gn=e,hn=null,n=!0):n=!1),n||vt(e)),null;case 13:return Jc(n,e,t);case 4:return Vn(e,e.stateNode.containerInfo),l=e.pendingProps,n===null?e.child=It(e,null,l,t):Qn(n,e,l,t),e.child;case 11:return Zc(n,e,e.type,e.pendingProps,t);case 7:return Qn(n,e,e.pendingProps,t),e.child;case 8:return Qn(n,e,e.pendingProps.children,t),e.child;case 12:return Qn(n,e,e.pendingProps.children,t),e.child;case 10:return l=e.pendingProps,Kt(e,e.type,l.value),Qn(n,e,l.children,t),e.child;case 9:return a=e.type._context,l=e.pendingProps.children,kt(e),a=Xn(a),l=l(a),e.flags|=1,Qn(n,e,l,t),e.child;case 14:return Bc(n,e,e.type,e.pendingProps,t);case 15:return Rc(n,e,e.type,e.pendingProps,t);case 19:return Fc(n,e,t);case 31:return y5(n,e,t);case 22:return Vc(n,e,t,e.pendingProps);case 24:return kt(e),l=Xn(wn),n===null?(a=ka(),a===null&&(a=yn,u=La(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=t),a=u),e.memoizedState={parent:l,cache:a},$a(e),Kt(e,wn,a)):((n.lanes&t)!==0&&(Wa(n,e),y0(e,null,null,t),p0()),a=n.memoizedState,u=e.memoizedState,a.parent!==l?(a={parent:l,cache:l},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),Kt(e,wn,l)):(l=u.cache,Kt(e,wn,l),l!==a.cache&&Qa(e,[wn],t,!0))),Qn(n,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(g(156,e.tag))}function nt(n){n.flags|=4}function Ou(n,e,t,l,a){if((e=(n.mode&32)!==0)&&(e=!1),e){if(n.flags|=16777216,(a&335544128)===a)if(n.stateNode.complete)n.flags|=8192;else if(A3())n.flags|=8192;else throw Wt=p1,Fa}else n.flags&=-16777217}function Wc(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!rf(e))if(A3())n.flags|=8192;else throw Wt=p1,Fa}function O1(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?w2():536870912,n.lanes|=e,Ul|=e)}function b0(n,e){if(!en)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function vn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,l=0;if(e)for(var a=n.child;a!==null;)t|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)t|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=l,n.childLanes=t,e}function v5(n,e,t){var l=e.pendingProps;switch(Ra(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(e),null;case 1:return vn(e),null;case 3:return t=e.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),$e(wn),En(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(Al(e)?nt(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ya())),vn(e),null;case 26:var a=e.type,u=e.memoizedState;return n===null?(nt(e),u!==null?(vn(e),Wc(e,u)):(vn(e),Ou(e,a,null,l,t))):u?u!==n.memoizedState?(nt(e),vn(e),Wc(e,u)):(vn(e),e.flags&=-16777217):(n=n.memoizedProps,n!==l&&nt(e),vn(e),Ou(e,a,n,l,t)),null;case 27:if(mt(e),t=J.current,a=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&nt(e);else{if(!l){if(e.stateNode===null)throw Error(g(166));return vn(e),null}n=D.current,Al(e)?wi(e):(n=af(a,l,t),e.stateNode=n,nt(e))}return vn(e),null;case 5:if(mt(e),a=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&nt(e);else{if(!l){if(e.stateNode===null)throw Error(g(166));return vn(e),null}if(u=D.current,Al(e))wi(e);else{var i=J1(J.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?i.createElement(a,{is:l.is}):i.createElement(a)}}u[Yn]=e,u[te]=l;n:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break n;for(;i.sibling===null;){if(i.return===null||i.return===e)break n;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=u;n:switch(Ln(u,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break n;case"img":l=!0;break n;default:l=!1}l&&nt(e)}}return vn(e),Ou(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==l&&nt(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(g(166));if(n=J.current,Al(e)){if(n=e.stateNode,t=e.memoizedProps,l=null,a=Gn,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}n[Yn]=e,n=!!(n.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||J3(n.nodeValue,t)),n||vt(e,!0)}else n=J1(n).createTextNode(l),n[Yn]=e,e.stateNode=n}return vn(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(l=Al(e),t!==null){if(n===null){if(!l)throw Error(g(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(557));n[Yn]=e}else Lt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;vn(e),n=!1}else t=Ya(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(ye(e),e):(ye(e),null);if((e.flags&128)!==0)throw Error(g(558))}return vn(e),null;case 13:if(l=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(a=Al(e),l!==null&&l.dehydrated!==null){if(n===null){if(!a)throw Error(g(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(g(317));a[Yn]=e}else Lt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;vn(e),a=!1}else a=Ya(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(ye(e),e):(ye(e),null)}return ye(e),(e.flags&128)!==0?(e.lanes=t,e):(t=l!==null,n=n!==null&&n.memoizedState!==null,t&&(l=e.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==a&&(l.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),O1(e,e.updateQueue),vn(e),null);case 4:return En(),n===null&&n2(e.stateNode.containerInfo),vn(e),null;case 10:return $e(e.type),vn(e),null;case 19:if(A(zn),l=e.memoizedState,l===null)return vn(e),null;if(a=(e.flags&128)!==0,u=l.rendering,u===null)if(a)b0(l,!1);else{if(An!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(u=K1(n),u!==null){for(e.flags|=128,b0(l,!1),n=u.updateQueue,e.updateQueue=n,O1(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)zi(t,n),t=t.sibling;return x(zn,zn.current&1|2),en&&ke(e,l.treeForkCount),e.child}n=n.sibling}l.tail!==null&&Hn()>C1&&(e.flags|=128,a=!0,b0(l,!1),e.lanes=4194304)}else{if(!a)if(n=K1(u),n!==null){if(e.flags|=128,a=!0,n=n.updateQueue,e.updateQueue=n,O1(e,n),b0(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!en)return vn(e),null}else 2*Hn()-l.renderingStartTime>C1&&t!==536870912&&(e.flags|=128,a=!0,b0(l,!1),e.lanes=4194304);l.isBackwards?(u.sibling=e.child,e.child=u):(n=l.last,n!==null?n.sibling=u:e.child=u,l.last=u)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Hn(),n.sibling=null,t=zn.current,x(zn,a?t&1|2:t&1),en&&ke(e,l.treeForkCount),n):(vn(e),null);case 22:case 23:return ye(e),eu(),l=e.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(t&536870912)!==0&&(e.flags&128)===0&&(vn(e),e.subtreeFlags&6&&(e.flags|=8192)):vn(e),t=e.updateQueue,t!==null&&O1(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==t&&(e.flags|=2048),n!==null&&A(Ft),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),$e(wn),vn(e),null;case 25:return null;case 30:return null}throw Error(g(156,e.tag))}function K5(n,e){switch(Ra(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return $e(wn),En(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return mt(e),null;case 31:if(e.memoizedState!==null){if(ye(e),e.alternate===null)throw Error(g(340));Lt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(ye(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(g(340));Lt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return A(zn),null;case 4:return En(),null;case 10:return $e(e.type),null;case 22:case 23:return ye(e),eu(),n!==null&&A(Ft),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return $e(wn),null;case 25:return null;default:return null}}function Ic(n,e){switch(Ra(e),e.tag){case 3:$e(wn),En();break;case 26:case 27:case 5:mt(e);break;case 4:En();break;case 31:e.memoizedState!==null&&ye(e);break;case 13:ye(e);break;case 19:A(zn);break;case 10:$e(e.type);break;case 22:case 23:ye(e),eu(),n!==null&&A(Ft);break;case 24:$e(wn)}}function A0(n,e){try{var t=e.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var a=l.next;t=a;do{if((t.tag&n)===n){l=void 0;var u=t.create,i=t.inst;l=u(),i.destroy=l}t=t.next}while(t!==a)}}catch(c){dn(e,e.return,c)}}function zt(n,e,t){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&n)===n){var i=l.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,a=e;var s=t,h=c;try{h()}catch(E){dn(a,s,E)}}}l=l.next}while(l!==u)}}catch(E){dn(e,e.return,E)}}function Pc(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{Gi(e,t)}catch(l){dn(n,n.return,l)}}}function n3(n,e,t){t.props=nl(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(l){dn(n,e,l)}}function T0(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof t=="function"?n.refCleanup=t(l):t.current=l}}catch(a){dn(n,e,a)}}function Ze(n,e){var t=n.ref,l=n.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(a){dn(n,e,a)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(a){dn(n,e,a)}else t.current=null}function e3(n){var e=n.type,t=n.memoizedProps,l=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break n;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(a){dn(n,n.return,a)}}function Du(n,e,t){try{var l=n.stateNode;V5(l,n.type,t,e),l[te]=e}catch(a){dn(n,n.return,a)}}function t3(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ot(n.type)||n.tag===4}function ju(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||t3(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ot(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Nu(n,e,t){var l=n.tag;if(l===5||l===6)n=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(n),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Qe));else if(l!==4&&(l===27&&Ot(n.type)&&(t=n.stateNode,e=null),n=n.child,n!==null))for(Nu(n,e,t),n=n.sibling;n!==null;)Nu(n,e,t),n=n.sibling}function D1(n,e,t){var l=n.tag;if(l===5||l===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(l!==4&&(l===27&&Ot(n.type)&&(t=n.stateNode),n=n.child,n!==null))for(D1(n,e,t),n=n.sibling;n!==null;)D1(n,e,t),n=n.sibling}function l3(n){var e=n.stateNode,t=n.memoizedProps;try{for(var l=n.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Ln(e,l,t),e[Yn]=n,e[te]=t}catch(u){dn(n,n.return,u)}}var et=!1,Dn=!1,Uu=!1,a3=typeof WeakSet=="function"?WeakSet:Set,Zn=null;function S5(n,e){if(n=n.containerInfo,l2=na,n=yi(n),Ha(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var a=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{t.nodeType,u.nodeType}catch{t=null;break n}var i=0,c=-1,s=-1,h=0,E=0,T=n,K=null;e:for(;;){for(var S;T!==t||a!==0&&T.nodeType!==3||(c=i+a),T!==u||l!==0&&T.nodeType!==3||(s=i+l),T.nodeType===3&&(i+=T.nodeValue.length),(S=T.firstChild)!==null;)K=T,T=S;for(;;){if(T===n)break e;if(K===t&&++h===a&&(c=i),K===u&&++E===l&&(s=i),(S=T.nextSibling)!==null)break;T=K,K=T.parentNode}T=S}t=c===-1||s===-1?null:{start:c,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(a2={focusedElem:n,selectionRange:t},na=!1,Zn=e;Zn!==null;)if(e=Zn,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Zn=n;else for(;Zn!==null;){switch(e=Zn,u=e.alternate,n=e.flags,e.tag){case 0:if((n&4)!==0&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(t=0;t<n.length;t++)a=n[t],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&u!==null){n=void 0,t=e,a=u.memoizedProps,u=u.memoizedState,l=t.stateNode;try{var j=nl(t.type,a);n=l.getSnapshotBeforeUpdate(j,u),l.__reactInternalSnapshotBeforeUpdate=n}catch(R){dn(t,t.return,R)}}break;case 3:if((n&1024)!==0){if(n=e.stateNode.containerInfo,t=n.nodeType,t===9)c2(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":c2(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(g(163))}if(n=e.sibling,n!==null){n.return=e.return,Zn=n;break}Zn=e.return}}function u3(n,e,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:lt(n,t),l&4&&A0(5,t);break;case 1:if(lt(n,t),l&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(i){dn(t,t.return,i)}else{var a=nl(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(a,e,n.__reactInternalSnapshotBeforeUpdate)}catch(i){dn(t,t.return,i)}}l&64&&Pc(t),l&512&&T0(t,t.return);break;case 3:if(lt(n,t),l&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{Gi(n,e)}catch(i){dn(t,t.return,i)}}break;case 27:e===null&&l&4&&l3(t);case 26:case 5:lt(n,t),e===null&&l&4&&e3(t),l&512&&T0(t,t.return);break;case 12:lt(n,t);break;case 31:lt(n,t),l&4&&f3(n,t);break;case 13:lt(n,t),l&4&&s3(n,t),l&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=H5.bind(null,t),F5(n,t))));break;case 22:if(l=t.memoizedState!==null||et,!l){e=e!==null&&e.memoizedState!==null||Dn,a=et;var u=Dn;et=l,(Dn=e)&&!u?at(n,t,(t.subtreeFlags&8772)!==0):lt(n,t),et=a,Dn=u}break;case 30:break;default:lt(n,t)}}function i3(n){var e=n.alternate;e!==null&&(n.alternate=null,i3(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&ma(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Sn=null,ae=!1;function tt(n,e,t){for(t=t.child;t!==null;)c3(n,e,t),t=t.sibling}function c3(n,e,t){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(kl,t)}catch{}switch(t.tag){case 26:Dn||Ze(t,e),tt(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Dn||Ze(t,e);var l=Sn,a=ae;Ot(t.type)&&(Sn=t.stateNode,ae=!1),tt(n,e,t),D0(t.stateNode),Sn=l,ae=a;break;case 5:Dn||Ze(t,e);case 6:if(l=Sn,a=ae,Sn=null,tt(n,e,t),Sn=l,ae=a,Sn!==null)if(ae)try{(Sn.nodeType===9?Sn.body:Sn.nodeName==="HTML"?Sn.ownerDocument.body:Sn).removeChild(t.stateNode)}catch(u){dn(t,e,u)}else try{Sn.removeChild(t.stateNode)}catch(u){dn(t,e,u)}break;case 18:Sn!==null&&(ae?(n=Sn,P3(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),Xl(n)):P3(Sn,t.stateNode));break;case 4:l=Sn,a=ae,Sn=t.stateNode.containerInfo,ae=!0,tt(n,e,t),Sn=l,ae=a;break;case 0:case 11:case 14:case 15:zt(2,t,e),Dn||zt(4,t,e),tt(n,e,t);break;case 1:Dn||(Ze(t,e),l=t.stateNode,typeof l.componentWillUnmount=="function"&&n3(t,e,l)),tt(n,e,t);break;case 21:tt(n,e,t);break;case 22:Dn=(l=Dn)||t.memoizedState!==null,tt(n,e,t),Dn=l;break;default:tt(n,e,t)}}function f3(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Xl(n)}catch(t){dn(e,e.return,t)}}}function s3(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Xl(n)}catch(t){dn(e,e.return,t)}}function E5(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new a3),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new a3),e;default:throw Error(g(435,n.tag))}}function j1(n,e){var t=E5(n);e.forEach(function(l){if(!t.has(l)){t.add(l);var a=w5.bind(null,n,l);l.then(a,a)}})}function ue(n,e){var t=e.deletions;if(t!==null)for(var l=0;l<t.length;l++){var a=t[l],u=n,i=e,c=i;n:for(;c!==null;){switch(c.tag){case 27:if(Ot(c.type)){Sn=c.stateNode,ae=!1;break n}break;case 5:Sn=c.stateNode,ae=!1;break n;case 3:case 4:Sn=c.stateNode.containerInfo,ae=!0;break n}c=c.return}if(Sn===null)throw Error(g(160));c3(u,i,a),Sn=null,ae=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)o3(e,n),e=e.sibling}var De=null;function o3(n,e){var t=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ue(e,n),ie(n),l&4&&(zt(3,n,n.return),A0(3,n),zt(5,n,n.return));break;case 1:ue(e,n),ie(n),l&512&&(Dn||t===null||Ze(t,t.return)),l&64&&et&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var a=De;if(ue(e,n),ie(n),l&512&&(Dn||t===null||Ze(t,t.return)),l&4){var u=t!==null?t.memoizedState:null;if(l=n.memoizedState,t===null)if(l===null)if(n.stateNode===null){n:{l=n.type,t=n.memoizedProps,a=a.ownerDocument||a;e:switch(l){case"title":u=a.getElementsByTagName("title")[0],(!u||u[Wl]||u[Yn]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(l),a.head.insertBefore(u,a.querySelector("head > title"))),Ln(u,l,t),u[Yn]=n,Cn(u),l=u;break n;case"link":var i=df("link","href",a).get(l+(t.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&u.getAttribute("rel")===(t.rel==null?null:t.rel)&&u.getAttribute("title")===(t.title==null?null:t.title)&&u.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){i.splice(c,1);break e}}u=a.createElement(l),Ln(u,l,t),a.head.appendChild(u);break;case"meta":if(i=df("meta","content",a).get(l+(t.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(t.content==null?null:""+t.content)&&u.getAttribute("name")===(t.name==null?null:t.name)&&u.getAttribute("property")===(t.property==null?null:t.property)&&u.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&u.getAttribute("charset")===(t.charSet==null?null:t.charSet)){i.splice(c,1);break e}}u=a.createElement(l),Ln(u,l,t),a.head.appendChild(u);break;default:throw Error(g(468,l))}u[Yn]=n,Cn(u),l=u}n.stateNode=l}else mf(a,n.type,n.stateNode);else n.stateNode=of(a,l,n.memoizedProps);else u!==l?(u===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):u.count--,l===null?mf(a,n.type,n.stateNode):of(a,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Du(n,n.memoizedProps,t.memoizedProps)}break;case 27:ue(e,n),ie(n),l&512&&(Dn||t===null||Ze(t,t.return)),t!==null&&l&4&&Du(n,n.memoizedProps,t.memoizedProps);break;case 5:if(ue(e,n),ie(n),l&512&&(Dn||t===null||Ze(t,t.return)),n.flags&32){a=n.stateNode;try{rl(a,"")}catch(j){dn(n,n.return,j)}}l&4&&n.stateNode!=null&&(a=n.memoizedProps,Du(n,a,t!==null?t.memoizedProps:a)),l&1024&&(Uu=!0);break;case 6:if(ue(e,n),ie(n),l&4){if(n.stateNode===null)throw Error(g(162));l=n.memoizedProps,t=n.stateNode;try{t.nodeValue=l}catch(j){dn(n,n.return,j)}}break;case 3:if($1=null,a=De,De=k1(e.containerInfo),ue(e,n),De=a,ie(n),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Xl(e.containerInfo)}catch(j){dn(n,n.return,j)}Uu&&(Uu=!1,d3(n));break;case 4:l=De,De=k1(n.stateNode.containerInfo),ue(e,n),ie(n),De=l;break;case 12:ue(e,n),ie(n);break;case 31:ue(e,n),ie(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,j1(n,l)));break;case 13:ue(e,n),ie(n),n.child.flags&8192&&n.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(U1=Hn()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,j1(n,l)));break;case 22:a=n.memoizedState!==null;var s=t!==null&&t.memoizedState!==null,h=et,E=Dn;if(et=h||a,Dn=E||s,ue(e,n),Dn=E,et=h,ie(n),l&8192)n:for(e=n.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(t===null||s||et||Dn||el(n)),t=null,e=n;;){if(e.tag===5||e.tag===26){if(t===null){s=t=e;try{if(u=s.stateNode,a)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=s.stateNode;var T=s.memoizedProps.style,K=T!=null&&T.hasOwnProperty("display")?T.display:null;c.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(j){dn(s,s.return,j)}}}else if(e.tag===6){if(t===null){s=e;try{s.stateNode.nodeValue=a?"":s.memoizedProps}catch(j){dn(s,s.return,j)}}}else if(e.tag===18){if(t===null){s=e;try{var S=s.stateNode;a?nf(S,!0):nf(s.stateNode,!1)}catch(j){dn(s,s.return,j)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=n.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,j1(n,t))));break;case 19:ue(e,n),ie(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,j1(n,l)));break;case 30:break;case 21:break;default:ue(e,n),ie(n)}}function ie(n){var e=n.flags;if(e&2){try{for(var t,l=n.return;l!==null;){if(t3(l)){t=l;break}l=l.return}if(t==null)throw Error(g(160));switch(t.tag){case 27:var a=t.stateNode,u=ju(n);D1(n,u,a);break;case 5:var i=t.stateNode;t.flags&32&&(rl(i,""),t.flags&=-33);var c=ju(n);D1(n,c,i);break;case 3:case 4:var s=t.stateNode.containerInfo,h=ju(n);Nu(n,h,s);break;default:throw Error(g(161))}}catch(E){dn(n,n.return,E)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function d3(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;d3(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function lt(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)u3(n,e.alternate,e),e=e.sibling}function el(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:zt(4,e,e.return),el(e);break;case 1:Ze(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&n3(e,e.return,t),el(e);break;case 27:D0(e.stateNode);case 26:case 5:Ze(e,e.return),el(e);break;case 22:e.memoizedState===null&&el(e);break;case 30:el(e);break;default:el(e)}n=n.sibling}}function at(n,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,a=n,u=e,i=u.flags;switch(u.tag){case 0:case 11:case 15:at(a,u,t),A0(4,u);break;case 1:if(at(a,u,t),l=u,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(h){dn(l,l.return,h)}if(l=u,a=l.updateQueue,a!==null){var c=l.stateNode;try{var s=a.shared.hiddenCallbacks;if(s!==null)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)Yi(s[a],c)}catch(h){dn(l,l.return,h)}}t&&i&64&&Pc(u),T0(u,u.return);break;case 27:l3(u);case 26:case 5:at(a,u,t),t&&l===null&&i&4&&e3(u),T0(u,u.return);break;case 12:at(a,u,t);break;case 31:at(a,u,t),t&&i&4&&f3(a,u);break;case 13:at(a,u,t),t&&i&4&&s3(a,u);break;case 22:u.memoizedState===null&&at(a,u,t),T0(u,u.return);break;case 30:break;default:at(a,u,t)}e=e.sibling}}function Cu(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&o0(t))}function Zu(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&o0(n))}function je(n,e,t,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)m3(n,e,t,l),e=e.sibling}function m3(n,e,t,l){var a=e.flags;switch(e.tag){case 0:case 11:case 15:je(n,e,t,l),a&2048&&A0(9,e);break;case 1:je(n,e,t,l);break;case 3:je(n,e,t,l),a&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&o0(n)));break;case 12:if(a&2048){je(n,e,t,l),n=e.stateNode;try{var u=e.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(s){dn(e,e.return,s)}}else je(n,e,t,l);break;case 31:je(n,e,t,l);break;case 13:je(n,e,t,l);break;case 23:break;case 22:u=e.stateNode,i=e.alternate,e.memoizedState!==null?u._visibility&2?je(n,e,t,l):z0(n,e):u._visibility&2?je(n,e,t,l):(u._visibility|=2,Dl(n,e,t,l,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Cu(i,e);break;case 24:je(n,e,t,l),a&2048&&Zu(e.alternate,e);break;default:je(n,e,t,l)}}function Dl(n,e,t,l,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=n,i=e,c=t,s=l,h=i.flags;switch(i.tag){case 0:case 11:case 15:Dl(u,i,c,s,a),A0(8,i);break;case 23:break;case 22:var E=i.stateNode;i.memoizedState!==null?E._visibility&2?Dl(u,i,c,s,a):z0(u,i):(E._visibility|=2,Dl(u,i,c,s,a)),a&&h&2048&&Cu(i.alternate,i);break;case 24:Dl(u,i,c,s,a),a&&h&2048&&Zu(i.alternate,i);break;default:Dl(u,i,c,s,a)}e=e.sibling}}function z0(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,l=e,a=l.flags;switch(l.tag){case 22:z0(t,l),a&2048&&Cu(l.alternate,l);break;case 24:z0(t,l),a&2048&&Zu(l.alternate,l);break;default:z0(t,l)}e=e.sibling}}var M0=8192;function jl(n,e,t){if(n.subtreeFlags&M0)for(n=n.child;n!==null;)r3(n,e,t),n=n.sibling}function r3(n,e,t){switch(n.tag){case 26:jl(n,e,t),n.flags&M0&&n.memoizedState!==null&&cs(t,De,n.memoizedState,n.memoizedProps);break;case 5:jl(n,e,t);break;case 3:case 4:var l=De;De=k1(n.stateNode.containerInfo),jl(n,e,t),De=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=M0,M0=16777216,jl(n,e,t),M0=l):jl(n,e,t));break;default:jl(n,e,t)}}function g3(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function q0(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];Zn=l,y3(l,n)}g3(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)p3(n),n=n.sibling}function p3(n){switch(n.tag){case 0:case 11:case 15:q0(n),n.flags&2048&&zt(9,n,n.return);break;case 3:q0(n);break;case 12:q0(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,N1(n)):q0(n);break;default:q0(n)}}function N1(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];Zn=l,y3(l,n)}g3(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:zt(8,e,e.return),N1(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,N1(e));break;default:N1(e)}n=n.sibling}}function y3(n,e){for(;Zn!==null;){var t=Zn;switch(t.tag){case 0:case 11:case 15:zt(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:o0(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,Zn=l;else n:for(t=n;Zn!==null;){l=Zn;var a=l.sibling,u=l.return;if(i3(l),l===t){Zn=null;break n}if(a!==null){a.return=u,Zn=a;break n}Zn=u}}}var b5={getCacheForType:function(n){var e=Xn(wn),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return Xn(wn).controller.signal}},A5=typeof WeakMap=="function"?WeakMap:Map,sn=0,yn=null,F=null,P=0,on=0,he=null,Mt=!1,Nl=!1,Bu=!1,ut=0,An=0,qt=0,tl=0,Ru=0,ve=0,Ul=0,x0=null,ce=null,Vu=!1,U1=0,h3=0,C1=1/0,Z1=null,xt=null,Nn=0,Ht=null,Cl=null,it=0,Yu=0,Gu=null,v3=null,H0=0,Xu=null;function Ke(){return(sn&2)!==0&&P!==0?P&-P:v.T!==null?$u():j2()}function K3(){if(ve===0)if((P&536870912)===0||en){var n=L0;L0<<=1,(L0&3932160)===0&&(L0=262144),ve=n}else ve=536870912;return n=pe.current,n!==null&&(n.flags|=32),ve}function fe(n,e,t){(n===yn&&(on===2||on===9)||n.cancelPendingCommit!==null)&&(Zl(n,0),wt(n,P,ve,!1)),$l(n,t),((sn&2)===0||n!==yn)&&(n===yn&&((sn&2)===0&&(tl|=t),An===4&&wt(n,P,ve,!1)),Be(n))}function S3(n,e,t){if((sn&6)!==0)throw Error(g(327));var l=!t&&(e&127)===0&&(e&n.expiredLanes)===0||Fl(n,e),a=l?M5(n,e):Lu(n,e,!0),u=l;do{if(a===0){Nl&&!l&&wt(n,e,0,!1);break}else{if(t=n.current.alternate,u&&!T5(t)){a=Lu(n,e,!1),u=!1;continue}if(a===2){if(u=e,n.errorRecoveryDisabledLanes&u)var i=0;else i=n.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;n:{var c=n;a=x0;var s=c.current.memoizedState.isDehydrated;if(s&&(Zl(c,i).flags|=256),i=Lu(c,i,!1),i!==2){if(Bu&&!s){c.errorRecoveryDisabledLanes|=u,tl|=u,a=4;break n}u=ce,ce=a,u!==null&&(ce===null?ce=u:ce.push.apply(ce,u))}a=i}if(u=!1,a!==2)continue}}if(a===1){Zl(n,0),wt(n,e,0,!0);break}n:{switch(l=n,u=a,u){case 0:case 1:throw Error(g(345));case 4:if((e&4194048)!==e)break;case 6:wt(l,e,ve,!Mt);break n;case 2:ce=null;break;case 3:case 5:break;default:throw Error(g(329))}if((e&62914560)===e&&(a=U1+300-Hn(),10<a)){if(wt(l,e,ve,!Mt),k0(l,0,!0)!==0)break n;it=e,l.timeoutHandle=W3(E3.bind(null,l,t,ce,Z1,Vu,e,ve,tl,Ul,Mt,u,"Throttled",-0,0),a);break n}E3(l,t,ce,Z1,Vu,e,ve,tl,Ul,Mt,u,null,-0,0)}}break}while(!0);Be(n)}function E3(n,e,t,l,a,u,i,c,s,h,E,T,K,S){if(n.timeoutHandle=-1,T=e.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qe},r3(e,u,T);var j=(u&62914560)===u?U1-Hn():(u&4194048)===u?h3-Hn():0;if(j=fs(T,j),j!==null){it=u,n.cancelPendingCommit=j(H3.bind(null,n,e,u,t,l,a,i,c,s,E,T,null,K,S)),wt(n,u,i,!h);return}}H3(n,e,u,t,l,a,i,c,s)}function T5(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var a=t[l],u=a.getSnapshot;a=a.value;try{if(!re(u(),a))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wt(n,e,t,l){e&=~Ru,e&=~tl,n.suspendedLanes|=e,n.pingedLanes&=~e,l&&(n.warmLanes|=e),l=n.expirationTimes;for(var a=e;0<a;){var u=31-me(a),i=1<<u;l[u]=-1,a&=~i}t!==0&&_2(n,t,e)}function B1(){return(sn&6)===0?(w0(0),!1):!0}function Qu(){if(F!==null){if(on===0)var n=F.return;else n=F,Fe=Jt=null,cu(n),xl=null,m0=0,n=F;for(;n!==null;)Ic(n.alternate,n),n=n.return;F=null}}function Zl(n,e){var t=n.timeoutHandle;t!==-1&&(n.timeoutHandle=-1,X5(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),it=0,Qu(),yn=n,F=t=Je(n.current,null),P=e,on=0,he=null,Mt=!1,Nl=Fl(n,e),Bu=!1,Ul=ve=Ru=tl=qt=An=0,ce=x0=null,Vu=!1,(e&8)!==0&&(e|=e&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=e;0<l;){var a=31-me(l),u=1<<a;e|=n[a],l&=~u}return ut=e,i1(),t}function b3(n,e){Q=null,v.H=S0,e===ql||e===g1?(e=Zi(),on=3):e===Fa?(e=Zi(),on=4):on=e===Au?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,he=e,F===null&&(An=1,x1(n,Ae(e,n.current)))}function A3(){var n=pe.current;return n===null?!0:(P&4194048)===P?qe===null:(P&62914560)===P||(P&536870912)!==0?n===qe:!1}function T3(){var n=v.H;return v.H=S0,n===null?S0:n}function z3(){var n=v.A;return v.A=b5,n}function R1(){An=4,Mt||(P&4194048)!==P&&pe.current!==null||(Nl=!0),(qt&134217727)===0&&(tl&134217727)===0||yn===null||wt(yn,P,ve,!1)}function Lu(n,e,t){var l=sn;sn|=2;var a=T3(),u=z3();(yn!==n||P!==e)&&(Z1=null,Zl(n,e)),e=!1;var i=An;n:do try{if(on!==0&&F!==null){var c=F,s=he;switch(on){case 8:Qu(),i=6;break n;case 3:case 2:case 9:case 6:pe.current===null&&(e=!0);var h=on;if(on=0,he=null,Bl(n,c,s,h),t&&Nl){i=0;break n}break;default:h=on,on=0,he=null,Bl(n,c,s,h)}}z5(),i=An;break}catch(E){b3(n,E)}while(!0);return e&&n.shellSuspendCounter++,Fe=Jt=null,sn=l,v.H=a,v.A=u,F===null&&(yn=null,P=0,i1()),i}function z5(){for(;F!==null;)M3(F)}function M5(n,e){var t=sn;sn|=2;var l=T3(),a=z3();yn!==n||P!==e?(Z1=null,C1=Hn()+500,Zl(n,e)):Nl=Fl(n,e);n:do try{if(on!==0&&F!==null){e=F;var u=he;e:switch(on){case 1:on=0,he=null,Bl(n,e,u,1);break;case 2:case 9:if(Ui(u)){on=0,he=null,q3(e);break}e=function(){on!==2&&on!==9||yn!==n||(on=7),Be(n)},u.then(e,e);break n;case 3:on=7;break n;case 4:on=5;break n;case 7:Ui(u)?(on=0,he=null,q3(e)):(on=0,he=null,Bl(n,e,u,7));break;case 5:var i=null;switch(F.tag){case 26:i=F.memoizedState;case 5:case 27:var c=F;if(i?rf(i):c.stateNode.complete){on=0,he=null;var s=c.sibling;if(s!==null)F=s;else{var h=c.return;h!==null?(F=h,V1(h)):F=null}break e}}on=0,he=null,Bl(n,e,u,5);break;case 6:on=0,he=null,Bl(n,e,u,6);break;case 8:Qu(),An=6;break n;default:throw Error(g(462))}}q5();break}catch(E){b3(n,E)}while(!0);return Fe=Jt=null,v.H=l,v.A=a,sn=t,F!==null?0:(yn=null,P=0,i1(),An)}function q5(){for(;F!==null&&!ee();)M3(F)}function M3(n){var e=$c(n.alternate,n,ut);n.memoizedProps=n.pendingProps,e===null?V1(n):F=e}function q3(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=Xc(t,e,e.pendingProps,e.type,void 0,P);break;case 11:e=Xc(t,e,e.pendingProps,e.type.render,e.ref,P);break;case 5:cu(e);default:Ic(t,e),e=F=zi(e,ut),e=$c(t,e,ut)}n.memoizedProps=n.pendingProps,e===null?V1(n):F=e}function Bl(n,e,t,l){Fe=Jt=null,cu(e),xl=null,m0=0;var a=e.return;try{if(p5(n,a,e,t,P)){An=1,x1(n,Ae(t,n.current)),F=null;return}}catch(u){if(a!==null)throw F=a,u;An=1,x1(n,Ae(t,n.current)),F=null;return}e.flags&32768?(en||l===1?n=!0:Nl||(P&536870912)!==0?n=!1:(Mt=n=!0,(l===2||l===9||l===3||l===6)&&(l=pe.current,l!==null&&l.tag===13&&(l.flags|=16384))),x3(e,n)):V1(e)}function V1(n){var e=n;do{if((e.flags&32768)!==0){x3(e,Mt);return}n=e.return;var t=v5(e.alternate,e,ut);if(t!==null){F=t;return}if(e=e.sibling,e!==null){F=e;return}F=e=n}while(e!==null);An===0&&(An=5)}function x3(n,e){do{var t=K5(n.alternate,n);if(t!==null){t.flags&=32767,F=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){F=n;return}F=n=t}while(n!==null);An=6,F=null}function H3(n,e,t,l,a,u,i,c,s){n.cancelPendingCommit=null;do Y1();while(Nn!==0);if((sn&6)!==0)throw Error(g(327));if(e!==null){if(e===n.current)throw Error(g(177));if(u=e.lanes|e.childLanes,u|=ja,i4(n,t,u,i,c,s),n===yn&&(F=yn=null,P=0),Cl=e,Ht=n,it=t,Yu=u,Gu=a,v3=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,_5(X0,function(){return j3(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=v.T,v.T=null,a=q.p,q.p=2,i=sn,sn|=4;try{S5(n,e,t)}finally{sn=i,q.p=a,v.T=l}}Nn=1,w3(),_3(),O3()}}function w3(){if(Nn===1){Nn=0;var n=Ht,e=Cl,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=v.T,v.T=null;var l=q.p;q.p=2;var a=sn;sn|=4;try{o3(e,n);var u=a2,i=yi(n.containerInfo),c=u.focusedElem,s=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&pi(c.ownerDocument.documentElement,c)){if(s!==null&&Ha(c)){var h=s.start,E=s.end;if(E===void 0&&(E=h),"selectionStart"in c)c.selectionStart=h,c.selectionEnd=Math.min(E,c.value.length);else{var T=c.ownerDocument||document,K=T&&T.defaultView||window;if(K.getSelection){var S=K.getSelection(),j=c.textContent.length,R=Math.min(s.start,j),gn=s.end===void 0?R:Math.min(s.end,j);!S.extend&&R>gn&&(i=gn,gn=R,R=i);var m=gi(c,R),o=gi(c,gn);if(m&&o&&(S.rangeCount!==1||S.anchorNode!==m.node||S.anchorOffset!==m.offset||S.focusNode!==o.node||S.focusOffset!==o.offset)){var y=T.createRange();y.setStart(m.node,m.offset),S.removeAllRanges(),R>gn?(S.addRange(y),S.extend(o.node,o.offset)):(y.setEnd(o.node,o.offset),S.addRange(y))}}}}for(T=[],S=c;S=S.parentNode;)S.nodeType===1&&T.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<T.length;c++){var b=T[c];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}na=!!l2,a2=l2=null}finally{sn=a,q.p=l,v.T=t}}n.current=e,Nn=2}}function _3(){if(Nn===2){Nn=0;var n=Ht,e=Cl,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=v.T,v.T=null;var l=q.p;q.p=2;var a=sn;sn|=4;try{u3(n,e.alternate,e)}finally{sn=a,q.p=l,v.T=t}}Nn=3}}function O3(){if(Nn===4||Nn===3){Nn=0,Ll();var n=Ht,e=Cl,t=it,l=v3;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Nn=5:(Nn=0,Cl=Ht=null,D3(n,n.pendingLanes));var a=n.pendingLanes;if(a===0&&(xt=null),oa(t),e=e.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=v.T,a=q.p,q.p=2,v.T=null;try{for(var u=n.onRecoverableError,i=0;i<l.length;i++){var c=l[i];u(c.value,{componentStack:c.stack})}}finally{v.T=e,q.p=a}}(it&3)!==0&&Y1(),Be(n),a=n.pendingLanes,(t&261930)!==0&&(a&42)!==0?n===Xu?H0++:(H0=0,Xu=n):H0=0,w0(0)}}function D3(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,o0(e)))}function Y1(){return w3(),_3(),O3(),j3()}function j3(){if(Nn!==5)return!1;var n=Ht,e=Yu;Yu=0;var t=oa(it),l=v.T,a=q.p;try{q.p=32>t?32:t,v.T=null,t=Gu,Gu=null;var u=Ht,i=it;if(Nn=0,Cl=Ht=null,it=0,(sn&6)!==0)throw Error(g(331));var c=sn;if(sn|=4,p3(u.current),m3(u,u.current,i,t),sn=c,w0(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(kl,u)}catch{}return!0}finally{q.p=a,v.T=l,D3(n,e)}}function N3(n,e,t){e=Ae(t,e),e=bu(n.stateNode,e,2),n=bt(n,e,2),n!==null&&($l(n,2),Be(n))}function dn(n,e,t){if(n.tag===3)N3(n,n,t);else for(;e!==null;){if(e.tag===3){N3(e,n,t);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xt===null||!xt.has(l))){n=Ae(t,n),t=Uc(2),l=bt(e,t,2),l!==null&&(Cc(t,l,e,n),$l(l,2),Be(l));break}}e=e.return}}function Ju(n,e,t){var l=n.pingCache;if(l===null){l=n.pingCache=new A5;var a=new Set;l.set(e,a)}else a=l.get(e),a===void 0&&(a=new Set,l.set(e,a));a.has(t)||(Bu=!0,a.add(t),n=x5.bind(null,n,e,t),e.then(n,n))}function x5(n,e,t){var l=n.pingCache;l!==null&&l.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,yn===n&&(P&t)===t&&(An===4||An===3&&(P&62914560)===P&&300>Hn()-U1?(sn&2)===0&&Zl(n,0):Ru|=t,Ul===P&&(Ul=0)),Be(n)}function U3(n,e){e===0&&(e=w2()),n=Xt(n,e),n!==null&&($l(n,e),Be(n))}function H5(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),U3(n,t)}function w5(n,e){var t=0;switch(n.tag){case 31:case 13:var l=n.stateNode,a=n.memoizedState;a!==null&&(t=a.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(g(314))}l!==null&&l.delete(e),U3(n,t)}function _5(n,e){return w(n,e)}var G1=null,Rl=null,ku=!1,X1=!1,Fu=!1,_t=0;function Be(n){n!==Rl&&n.next===null&&(Rl===null?G1=Rl=n:Rl=Rl.next=n),X1=!0,ku||(ku=!0,D5())}function w0(n,e){if(!Fu&&X1){Fu=!0;do for(var t=!1,l=G1;l!==null;){if(n!==0){var a=l.pendingLanes;if(a===0)var u=0;else{var i=l.suspendedLanes,c=l.pingedLanes;u=(1<<31-me(42|n)+1)-1,u&=a&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(t=!0,R3(l,u))}else u=P,u=k0(l,l===yn?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||Fl(l,u)||(t=!0,R3(l,u));l=l.next}while(t);Fu=!1}}function O5(){C3()}function C3(){X1=ku=!1;var n=0;_t!==0&&G5()&&(n=_t);for(var e=Hn(),t=null,l=G1;l!==null;){var a=l.next,u=Z3(l,e);u===0?(l.next=null,t===null?G1=a:t.next=a,a===null&&(Rl=t)):(t=l,(n!==0||(u&3)!==0)&&(X1=!0)),l=a}Nn!==0&&Nn!==5||w0(n),_t!==0&&(_t=0)}function Z3(n,e){for(var t=n.suspendedLanes,l=n.pingedLanes,a=n.expirationTimes,u=n.pendingLanes&-62914561;0<u;){var i=31-me(u),c=1<<i,s=a[i];s===-1?((c&t)===0||(c&l)!==0)&&(a[i]=u4(c,e)):s<=e&&(n.expiredLanes|=c),u&=~c}if(e=yn,t=P,t=k0(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,t===0||n===e&&(on===2||on===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&oe(l),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||Fl(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(l!==null&&oe(l),oa(t)){case 2:case 8:t=x2;break;case 32:t=X0;break;case 268435456:t=H2;break;default:t=X0}return l=B3.bind(null,n),t=w(t,l),n.callbackPriority=e,n.callbackNode=t,e}return l!==null&&l!==null&&oe(l),n.callbackPriority=2,n.callbackNode=null,2}function B3(n,e){if(Nn!==0&&Nn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(Y1()&&n.callbackNode!==t)return null;var l=P;return l=k0(n,n===yn?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(S3(n,l,e),Z3(n,Hn()),n.callbackNode!=null&&n.callbackNode===t?B3.bind(null,n):null)}function R3(n,e){if(Y1())return null;S3(n,e,!0)}function D5(){Q5(function(){(sn&6)!==0?w(Jl,O5):C3()})}function $u(){if(_t===0){var n=zl;n===0&&(n=Q0,Q0<<=1,(Q0&261888)===0&&(Q0=256)),_t=n}return _t}function V3(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:I0(""+n)}function Y3(n,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,n.id&&t.setAttribute("form",n.id),e.parentNode.insertBefore(t,e),n=new FormData(n),t.parentNode.removeChild(t),n}function j5(n,e,t,l,a){if(e==="submit"&&t&&t.stateNode===a){var u=V3((a[te]||null).action),i=l.submitter;i&&(e=(e=i[te]||null)?V3(e.formAction):i.getAttribute("formAction"),e!==null&&(u=e,i=null));var c=new t1("action","action",null,l,a);n.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(_t!==0){var s=i?Y3(a,i):new FormData(a);yu(t,{pending:!0,data:s,method:a.method,action:u},null,s)}}else typeof u=="function"&&(c.preventDefault(),s=i?Y3(a,i):new FormData(a),yu(t,{pending:!0,data:s,method:a.method,action:u},u,s))},currentTarget:a}]})}}for(var Wu=0;Wu<Da.length;Wu++){var Iu=Da[Wu],N5=Iu.toLowerCase(),U5=Iu[0].toUpperCase()+Iu.slice(1);Oe(N5,"on"+U5)}Oe(Ki,"onAnimationEnd"),Oe(Si,"onAnimationIteration"),Oe(Ei,"onAnimationStart"),Oe("dblclick","onDoubleClick"),Oe("focusin","onFocus"),Oe("focusout","onBlur"),Oe(I4,"onTransitionRun"),Oe(P4,"onTransitionStart"),Oe(n5,"onTransitionCancel"),Oe(bi,"onTransitionEnd"),dl("onMouseEnter",["mouseout","mouseover"]),dl("onMouseLeave",["mouseout","mouseover"]),dl("onPointerEnter",["pointerout","pointerover"]),dl("onPointerLeave",["pointerout","pointerover"]),Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _0="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_0));function G3(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var l=n[t],a=l.event;l=l.listeners;n:{var u=void 0;if(e)for(var i=l.length-1;0<=i;i--){var c=l[i],s=c.instance,h=c.currentTarget;if(c=c.listener,s!==u&&a.isPropagationStopped())break n;u=c,a.currentTarget=h;try{u(a)}catch(E){u1(E)}a.currentTarget=null,u=s}else for(i=0;i<l.length;i++){if(c=l[i],s=c.instance,h=c.currentTarget,c=c.listener,s!==u&&a.isPropagationStopped())break n;u=c,a.currentTarget=h;try{u(a)}catch(E){u1(E)}a.currentTarget=null,u=s}}}}function $(n,e){var t=e[da];t===void 0&&(t=e[da]=new Set);var l=n+"__bubble";t.has(l)||(X3(e,n,2,!1),t.add(l))}function Pu(n,e,t){var l=0;e&&(l|=4),X3(t,n,l,e)}var Q1="_reactListening"+Math.random().toString(36).slice(2);function n2(n){if(!n[Q1]){n[Q1]=!0,C2.forEach(function(t){t!=="selectionchange"&&(C5.has(t)||Pu(t,!1,n),Pu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Q1]||(e[Q1]=!0,Pu("selectionchange",!1,e))}}function X3(n,e,t,l){switch(Sf(e)){case 2:var a=ds;break;case 8:a=ms;break;default:a=p2}t=a.bind(null,e,t,n),a=void 0,!Sa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),l?a!==void 0?n.addEventListener(e,t,{capture:!0,passive:a}):n.addEventListener(e,t,!0):a!==void 0?n.addEventListener(e,t,{passive:a}):n.addEventListener(e,t,!1)}function e2(n,e,t,l,a){var u=l;if((e&1)===0&&(e&2)===0&&l!==null)n:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var c=l.stateNode.containerInfo;if(c===a)break;if(i===4)for(i=l.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;c!==null;){if(i=fl(c),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){l=u=i;continue n}c=c.parentNode}}l=l.return}F2(function(){var h=u,E=va(t),T=[];n:{var K=Ai.get(n);if(K!==void 0){var S=t1,j=n;switch(n){case"keypress":if(n1(t)===0)break n;case"keydown":case"keyup":S=w4;break;case"focusin":j="focus",S=Ta;break;case"focusout":j="blur",S=Ta;break;case"beforeblur":case"afterblur":S=Ta;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=I2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=v4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=D4;break;case Ki:case Si:case Ei:S=E4;break;case bi:S=N4;break;case"scroll":case"scrollend":S=y4;break;case"wheel":S=C4;break;case"copy":case"cut":case"paste":S=A4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ni;break;case"toggle":case"beforetoggle":S=B4}var R=(e&4)!==0,gn=!R&&(n==="scroll"||n==="scrollend"),m=R?K!==null?K+"Capture":null:K;R=[];for(var o=h,y;o!==null;){var b=o;if(y=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||y===null||m===null||(b=Pl(o,m),b!=null&&R.push(O0(o,b,y))),gn)break;o=o.return}0<R.length&&(K=new S(K,j,null,t,E),T.push({event:K,listeners:R}))}}if((e&7)===0){n:{if(K=n==="mouseover"||n==="pointerover",S=n==="mouseout"||n==="pointerout",K&&t!==ha&&(j=t.relatedTarget||t.fromElement)&&(fl(j)||j[cl]))break n;if((S||K)&&(K=E.window===E?E:(K=E.ownerDocument)?K.defaultView||K.parentWindow:window,S?(j=t.relatedTarget||t.toElement,S=h,j=j?fl(j):null,j!==null&&(gn=N(j),R=j.tag,j!==gn||R!==5&&R!==27&&R!==6)&&(j=null)):(S=null,j=h),S!==j)){if(R=I2,b="onMouseLeave",m="onMouseEnter",o="mouse",(n==="pointerout"||n==="pointerover")&&(R=ni,b="onPointerLeave",m="onPointerEnter",o="pointer"),gn=S==null?K:Il(S),y=j==null?K:Il(j),K=new R(b,o+"leave",S,t,E),K.target=gn,K.relatedTarget=y,b=null,fl(E)===h&&(R=new R(m,o+"enter",j,t,E),R.target=y,R.relatedTarget=gn,b=R),gn=b,S&&j)e:{for(R=Z5,m=S,o=j,y=0,b=m;b;b=R(b))y++;b=0;for(var B=o;B;B=R(B))b++;for(;0<y-b;)m=R(m),y--;for(;0<b-y;)o=R(o),b--;for(;y--;){if(m===o||o!==null&&m===o.alternate){R=m;break e}m=R(m),o=R(o)}R=null}else R=null;S!==null&&Q3(T,K,S,R,!1),j!==null&&gn!==null&&Q3(T,gn,j,R,!0)}}n:{if(K=h?Il(h):window,S=K.nodeName&&K.nodeName.toLowerCase(),S==="select"||S==="input"&&K.type==="file")var un=fi;else if(ii(K))if(si)un=F4;else{un=J4;var C=L4}else S=K.nodeName,!S||S.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?h&&ya(h.elementType)&&(un=fi):un=k4;if(un&&(un=un(n,h))){ci(T,un,t,E);break n}C&&C(n,K,h),n==="focusout"&&h&&K.type==="number"&&h.memoizedProps.value!=null&&pa(K,"number",K.value)}switch(C=h?Il(h):window,n){case"focusin":(ii(C)||C.contentEditable==="true")&&(hl=C,wa=h,c0=null);break;case"focusout":c0=wa=hl=null;break;case"mousedown":_a=!0;break;case"contextmenu":case"mouseup":case"dragend":_a=!1,hi(T,t,E);break;case"selectionchange":if(W4)break;case"keydown":case"keyup":hi(T,t,E)}var L;if(Ma)n:{switch(n){case"compositionstart":var nn="onCompositionStart";break n;case"compositionend":nn="onCompositionEnd";break n;case"compositionupdate":nn="onCompositionUpdate";break n}nn=void 0}else yl?ai(n,t)&&(nn="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(nn="onCompositionStart");nn&&(ei&&t.locale!=="ko"&&(yl||nn!=="onCompositionStart"?nn==="onCompositionEnd"&&yl&&(L=$2()):(pt=E,Ea="value"in pt?pt.value:pt.textContent,yl=!0)),C=L1(h,nn),0<C.length&&(nn=new P2(nn,n,null,t,E),T.push({event:nn,listeners:C}),L?nn.data=L:(L=ui(t),L!==null&&(nn.data=L)))),(L=V4?Y4(n,t):G4(n,t))&&(nn=L1(h,"onBeforeInput"),0<nn.length&&(C=new P2("onBeforeInput","beforeinput",null,t,E),T.push({event:C,listeners:nn}),C.data=L)),j5(T,n,h,t,E)}G3(T,e)})}function O0(n,e,t){return{instance:n,listener:e,currentTarget:t}}function L1(n,e){for(var t=e+"Capture",l=[];n!==null;){var a=n,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=Pl(n,t),a!=null&&l.unshift(O0(n,a,u)),a=Pl(n,e),a!=null&&l.push(O0(n,a,u))),n.tag===3)return l;n=n.return}return[]}function Z5(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Q3(n,e,t,l,a){for(var u=e._reactName,i=[];t!==null&&t!==l;){var c=t,s=c.alternate,h=c.stateNode;if(c=c.tag,s!==null&&s===l)break;c!==5&&c!==26&&c!==27||h===null||(s=h,a?(h=Pl(t,u),h!=null&&i.unshift(O0(t,h,s))):a||(h=Pl(t,u),h!=null&&i.push(O0(t,h,s)))),t=t.return}i.length!==0&&n.push({event:e,listeners:i})}var B5=/\r\n?/g,R5=/\u0000|\uFFFD/g;function L3(n){return(typeof n=="string"?n:""+n).replace(B5,`
`).replace(R5,"")}function J3(n,e){return e=L3(e),L3(n)===e}function rn(n,e,t,l,a,u){switch(t){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||rl(n,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&rl(n,""+l);break;case"className":$0(n,"class",l);break;case"tabIndex":$0(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":$0(n,t,l);break;case"style":J2(n,l,u);break;case"data":if(e!=="object"){$0(n,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=I0(""+l),n.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(t==="formAction"?(e!=="input"&&rn(n,e,"name",a.name,a,null),rn(n,e,"formEncType",a.formEncType,a,null),rn(n,e,"formMethod",a.formMethod,a,null),rn(n,e,"formTarget",a.formTarget,a,null)):(rn(n,e,"encType",a.encType,a,null),rn(n,e,"method",a.method,a,null),rn(n,e,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=I0(""+l),n.setAttribute(t,l);break;case"onClick":l!=null&&(n.onclick=Qe);break;case"onScroll":l!=null&&$("scroll",n);break;case"onScrollEnd":l!=null&&$("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(g(61));if(t=l.__html,t!=null){if(a.children!=null)throw Error(g(60));n.innerHTML=t}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}t=I0(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""+l):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":l===!0?n.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,l):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(t,l):n.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(t):n.setAttribute(t,l);break;case"popover":$("beforetoggle",n),$("toggle",n),F0(n,"popover",l);break;case"xlinkActuate":Xe(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Xe(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Xe(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Xe(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Xe(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Xe(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Xe(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Xe(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Xe(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":F0(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=g4.get(t)||t,F0(n,t,l))}}function t2(n,e,t,l,a,u){switch(t){case"style":J2(n,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(g(61));if(t=l.__html,t!=null){if(a.children!=null)throw Error(g(60));n.innerHTML=t}}break;case"children":typeof l=="string"?rl(n,l):(typeof l=="number"||typeof l=="bigint")&&rl(n,""+l);break;case"onScroll":l!=null&&$("scroll",n);break;case"onScrollEnd":l!=null&&$("scrollend",n);break;case"onClick":l!=null&&(n.onclick=Qe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Z2.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(a=t.endsWith("Capture"),e=t.slice(2,a?t.length-7:void 0),u=n[te]||null,u=u!=null?u[t]:null,typeof u=="function"&&n.removeEventListener(e,u,a),typeof l=="function")){typeof u!="function"&&u!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(e,l,a);break n}t in n?n[t]=l:l===!0?n.setAttribute(t,""):F0(n,t,l)}}}function Ln(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$("error",n),$("load",n);var l=!1,a=!1,u;for(u in t)if(t.hasOwnProperty(u)){var i=t[u];if(i!=null)switch(u){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,e));default:rn(n,e,u,i,t,null)}}a&&rn(n,e,"srcSet",t.srcSet,t,null),l&&rn(n,e,"src",t.src,t,null);return;case"input":$("invalid",n);var c=u=i=a=null,s=null,h=null;for(l in t)if(t.hasOwnProperty(l)){var E=t[l];if(E!=null)switch(l){case"name":a=E;break;case"type":i=E;break;case"checked":s=E;break;case"defaultChecked":h=E;break;case"value":u=E;break;case"defaultValue":c=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(g(137,e));break;default:rn(n,e,l,E,t,null)}}G2(n,u,c,s,h,i,a,!1);return;case"select":$("invalid",n),l=i=u=null;for(a in t)if(t.hasOwnProperty(a)&&(c=t[a],c!=null))switch(a){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":l=c;default:rn(n,e,a,c,t,null)}e=u,t=i,n.multiple=!!l,e!=null?ml(n,!!l,e,!1):t!=null&&ml(n,!!l,t,!0);return;case"textarea":$("invalid",n),u=a=l=null;for(i in t)if(t.hasOwnProperty(i)&&(c=t[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":a=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(g(91));break;default:rn(n,e,i,c,t,null)}Q2(n,l,a,u);return;case"option":for(s in t)if(t.hasOwnProperty(s)&&(l=t[s],l!=null))switch(s){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:rn(n,e,s,l,t,null)}return;case"dialog":$("beforetoggle",n),$("toggle",n),$("cancel",n),$("close",n);break;case"iframe":case"object":$("load",n);break;case"video":case"audio":for(l=0;l<_0.length;l++)$(_0[l],n);break;case"image":$("error",n),$("load",n);break;case"details":$("toggle",n);break;case"embed":case"source":case"link":$("error",n),$("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in t)if(t.hasOwnProperty(h)&&(l=t[h],l!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,e));default:rn(n,e,h,l,t,null)}return;default:if(ya(e)){for(E in t)t.hasOwnProperty(E)&&(l=t[E],l!==void 0&&t2(n,e,E,l,t,void 0));return}}for(c in t)t.hasOwnProperty(c)&&(l=t[c],l!=null&&rn(n,e,c,l,t,null))}function V5(n,e,t,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,i=null,c=null,s=null,h=null,E=null;for(S in t){var T=t[S];if(t.hasOwnProperty(S)&&T!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":s=T;default:l.hasOwnProperty(S)||rn(n,e,S,null,l,T)}}for(var K in l){var S=l[K];if(T=t[K],l.hasOwnProperty(K)&&(S!=null||T!=null))switch(K){case"type":u=S;break;case"name":a=S;break;case"checked":h=S;break;case"defaultChecked":E=S;break;case"value":i=S;break;case"defaultValue":c=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(g(137,e));break;default:S!==T&&rn(n,e,K,S,l,T)}}ga(n,i,c,s,h,E,u,a);return;case"select":S=i=c=K=null;for(u in t)if(s=t[u],t.hasOwnProperty(u)&&s!=null)switch(u){case"value":break;case"multiple":S=s;default:l.hasOwnProperty(u)||rn(n,e,u,null,l,s)}for(a in l)if(u=l[a],s=t[a],l.hasOwnProperty(a)&&(u!=null||s!=null))switch(a){case"value":K=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==s&&rn(n,e,a,u,l,s)}e=c,t=i,l=S,K!=null?ml(n,!!t,K,!1):!!l!=!!t&&(e!=null?ml(n,!!t,e,!0):ml(n,!!t,t?[]:"",!1));return;case"textarea":S=K=null;for(c in t)if(a=t[c],t.hasOwnProperty(c)&&a!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:rn(n,e,c,null,l,a)}for(i in l)if(a=l[i],u=t[i],l.hasOwnProperty(i)&&(a!=null||u!=null))switch(i){case"value":K=a;break;case"defaultValue":S=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(g(91));break;default:a!==u&&rn(n,e,i,a,l,u)}X2(n,K,S);return;case"option":for(var j in t)if(K=t[j],t.hasOwnProperty(j)&&K!=null&&!l.hasOwnProperty(j))switch(j){case"selected":n.selected=!1;break;default:rn(n,e,j,null,l,K)}for(s in l)if(K=l[s],S=t[s],l.hasOwnProperty(s)&&K!==S&&(K!=null||S!=null))switch(s){case"selected":n.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:rn(n,e,s,K,l,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var R in t)K=t[R],t.hasOwnProperty(R)&&K!=null&&!l.hasOwnProperty(R)&&rn(n,e,R,null,l,K);for(h in l)if(K=l[h],S=t[h],l.hasOwnProperty(h)&&K!==S&&(K!=null||S!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(g(137,e));break;default:rn(n,e,h,K,l,S)}return;default:if(ya(e)){for(var gn in t)K=t[gn],t.hasOwnProperty(gn)&&K!==void 0&&!l.hasOwnProperty(gn)&&t2(n,e,gn,void 0,l,K);for(E in l)K=l[E],S=t[E],!l.hasOwnProperty(E)||K===S||K===void 0&&S===void 0||t2(n,e,E,K,l,S);return}}for(var m in t)K=t[m],t.hasOwnProperty(m)&&K!=null&&!l.hasOwnProperty(m)&&rn(n,e,m,null,l,K);for(T in l)K=l[T],S=t[T],!l.hasOwnProperty(T)||K===S||K==null&&S==null||rn(n,e,T,K,l,S)}function k3(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Y5(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var a=t[l],u=a.transferSize,i=a.initiatorType,c=a.duration;if(u&&c&&k3(i)){for(i=0,c=a.responseEnd,l+=1;l<t.length;l++){var s=t[l],h=s.startTime;if(h>c)break;var E=s.transferSize,T=s.initiatorType;E&&k3(T)&&(s=s.responseEnd,i+=E*(s<c?1:(c-h)/(s-h)))}if(--l,e+=8*(u+i)/(a.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var l2=null,a2=null;function J1(n){return n.nodeType===9?n:n.ownerDocument}function F3(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $3(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function u2(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var i2=null;function G5(){var n=window.event;return n&&n.type==="popstate"?n===i2?!1:(i2=n,!0):(i2=null,!1)}var W3=typeof setTimeout=="function"?setTimeout:void 0,X5=typeof clearTimeout=="function"?clearTimeout:void 0,I3=typeof Promise=="function"?Promise:void 0,Q5=typeof queueMicrotask=="function"?queueMicrotask:typeof I3<"u"?function(n){return I3.resolve(null).then(n).catch(L5)}:W3;function L5(n){setTimeout(function(){throw n})}function Ot(n){return n==="head"}function P3(n,e){var t=e,l=0;do{var a=t.nextSibling;if(n.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"||t==="/&"){if(l===0){n.removeChild(a),Xl(e);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")D0(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,D0(t);for(var u=t.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[Wl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||t.removeChild(u),u=i}}else t==="body"&&D0(n.ownerDocument.body);t=a}while(t);Xl(e)}function nf(n,e){var t=n;n=0;do{var l=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=l}while(t)}function c2(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":c2(t),ma(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function J5(n,e,t,l){for(;n.nodeType===1;){var a=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Wl])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(u=n.getAttribute("rel"),u==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(u!==a.rel||n.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||n.getAttribute("title")!==(a.title==null?null:a.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(u=n.getAttribute("src"),(u!==(a.src==null?null:a.src)||n.getAttribute("type")!==(a.type==null?null:a.type)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&n.getAttribute("name")===u)return n}else return n;if(n=xe(n.nextSibling),n===null)break}return null}function k5(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=xe(n.nextSibling),n===null))return null;return n}function ef(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=xe(n.nextSibling),n===null))return null;return n}function f2(n){return n.data==="$?"||n.data==="$~"}function s2(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function F5(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var l=function(){e(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function xe(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var o2=null;function tf(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return xe(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function lf(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function af(n,e,t){switch(e=J1(t),n){case"html":if(n=e.documentElement,!n)throw Error(g(452));return n;case"head":if(n=e.head,!n)throw Error(g(453));return n;case"body":if(n=e.body,!n)throw Error(g(454));return n;default:throw Error(g(451))}}function D0(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);ma(n)}var He=new Map,uf=new Set;function k1(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ct=q.d;q.d={f:$5,r:W5,D:I5,C:P5,L:ns,m:es,X:ls,S:ts,M:as};function $5(){var n=ct.f(),e=B1();return n||e}function W5(n){var e=sl(n);e!==null&&e.tag===5&&e.type==="form"?bc(e):ct.r(n)}var Vl=typeof document>"u"?null:document;function cf(n,e,t){var l=Vl;if(l&&typeof e=="string"&&e){var a=Ee(e);a='link[rel="'+n+'"][href="'+a+'"]',typeof t=="string"&&(a+='[crossorigin="'+t+'"]'),uf.has(a)||(uf.add(a),n={rel:n,crossOrigin:t,href:e},l.querySelector(a)===null&&(e=l.createElement("link"),Ln(e,"link",n),Cn(e),l.head.appendChild(e)))}}function I5(n){ct.D(n),cf("dns-prefetch",n,null)}function P5(n,e){ct.C(n,e),cf("preconnect",n,e)}function ns(n,e,t){ct.L(n,e,t);var l=Vl;if(l&&n&&e){var a='link[rel="preload"][as="'+Ee(e)+'"]';e==="image"&&t&&t.imageSrcSet?(a+='[imagesrcset="'+Ee(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(a+='[imagesizes="'+Ee(t.imageSizes)+'"]')):a+='[href="'+Ee(n)+'"]';var u=a;switch(e){case"style":u=Yl(n);break;case"script":u=Gl(n)}He.has(u)||(n=Z({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),He.set(u,n),l.querySelector(a)!==null||e==="style"&&l.querySelector(j0(u))||e==="script"&&l.querySelector(N0(u))||(e=l.createElement("link"),Ln(e,"link",n),Cn(e),l.head.appendChild(e)))}}function es(n,e){ct.m(n,e);var t=Vl;if(t&&n){var l=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Ee(l)+'"][href="'+Ee(n)+'"]',u=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Gl(n)}if(!He.has(u)&&(n=Z({rel:"modulepreload",href:n},e),He.set(u,n),t.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(N0(u)))return}l=t.createElement("link"),Ln(l,"link",n),Cn(l),t.head.appendChild(l)}}}function ts(n,e,t){ct.S(n,e,t);var l=Vl;if(l&&n){var a=ol(l).hoistableStyles,u=Yl(n);e=e||"default";var i=a.get(u);if(!i){var c={loading:0,preload:null};if(i=l.querySelector(j0(u)))c.loading=5;else{n=Z({rel:"stylesheet",href:n,"data-precedence":e},t),(t=He.get(u))&&d2(n,t);var s=i=l.createElement("link");Cn(s),Ln(s,"link",n),s._p=new Promise(function(h,E){s.onload=h,s.onerror=E}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,F1(i,e,l)}i={type:"stylesheet",instance:i,count:1,state:c},a.set(u,i)}}}function ls(n,e){ct.X(n,e);var t=Vl;if(t&&n){var l=ol(t).hoistableScripts,a=Gl(n),u=l.get(a);u||(u=t.querySelector(N0(a)),u||(n=Z({src:n,async:!0},e),(e=He.get(a))&&m2(n,e),u=t.createElement("script"),Cn(u),Ln(u,"link",n),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function as(n,e){ct.M(n,e);var t=Vl;if(t&&n){var l=ol(t).hoistableScripts,a=Gl(n),u=l.get(a);u||(u=t.querySelector(N0(a)),u||(n=Z({src:n,async:!0,type:"module"},e),(e=He.get(a))&&m2(n,e),u=t.createElement("script"),Cn(u),Ln(u,"link",n),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function ff(n,e,t,l){var a=(a=J.current)?k1(a):null;if(!a)throw Error(g(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=Yl(t.href),t=ol(a).hoistableStyles,l=t.get(e),l||(l={type:"style",instance:null,count:0,state:null},t.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Yl(t.href);var u=ol(a).hoistableStyles,i=u.get(n);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(n,i),(u=a.querySelector(j0(n)))&&!u._p&&(i.instance=u,i.state.loading=5),He.has(n)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},He.set(n,t),u||us(a,n,t,i.state))),e&&l===null)throw Error(g(528,""));return i}if(e&&l!==null)throw Error(g(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Gl(t),t=ol(a).hoistableScripts,l=t.get(e),l||(l={type:"script",instance:null,count:0,state:null},t.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,n))}}function Yl(n){return'href="'+Ee(n)+'"'}function j0(n){return'link[rel="stylesheet"]['+n+"]"}function sf(n){return Z({},n,{"data-precedence":n.precedence,precedence:null})}function us(n,e,t,l){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=n.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Ln(e,"link",t),Cn(e),n.head.appendChild(e))}function Gl(n){return'[src="'+Ee(n)+'"]'}function N0(n){return"script[async]"+n}function of(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var l=n.querySelector('style[data-href~="'+Ee(t.href)+'"]');if(l)return e.instance=l,Cn(l),l;var a=Z({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),Cn(l),Ln(l,"style",a),F1(l,t.precedence,n),e.instance=l;case"stylesheet":a=Yl(t.href);var u=n.querySelector(j0(a));if(u)return e.state.loading|=4,e.instance=u,Cn(u),u;l=sf(t),(a=He.get(a))&&d2(l,a),u=(n.ownerDocument||n).createElement("link"),Cn(u);var i=u;return i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),Ln(u,"link",l),e.state.loading|=4,F1(u,t.precedence,n),e.instance=u;case"script":return u=Gl(t.src),(a=n.querySelector(N0(u)))?(e.instance=a,Cn(a),a):(l=t,(a=He.get(u))&&(l=Z({},t),m2(l,a)),n=n.ownerDocument||n,a=n.createElement("script"),Cn(a),Ln(a,"link",l),n.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(g(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,F1(l,t.precedence,n));return e.instance}function F1(n,e,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,u=a,i=0;i<l.length;i++){var c=l[i];if(c.dataset.precedence===e)u=c;else if(u!==a)break}u?u.parentNode.insertBefore(n,u.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function d2(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function m2(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var $1=null;function df(n,e,t){if($1===null){var l=new Map,a=$1=new Map;a.set(t,l)}else a=$1,l=a.get(t),l||(l=new Map,a.set(t,l));if(l.has(n))return l;for(l.set(n,null),t=t.getElementsByTagName(n),a=0;a<t.length;a++){var u=t[a];if(!(u[Wl]||u[Yn]||n==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(e)||"";i=n+i;var c=l.get(i);c?c.push(u):l.set(i,[u])}}return l}function mf(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function is(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function rf(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function cs(n,e,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=Yl(l.href),u=e.querySelector(j0(a));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=W1.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=u,Cn(u);return}u=e.ownerDocument||e,l=sf(l),(a=He.get(a))&&d2(l,a),u=u.createElement("link"),Cn(u);var i=u;i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),Ln(u,"link",l),t.instance=u}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=W1.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var r2=0;function fs(n,e){return n.stylesheets&&n.count===0&&P1(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var l=setTimeout(function(){if(n.stylesheets&&P1(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4+e);0<n.imgBytes&&r2===0&&(r2=62500*Y5());var a=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&P1(n,n.stylesheets),n.unsuspend)){var u=n.unsuspend;n.unsuspend=null,u()}},(n.imgBytes>r2?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function W1(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)P1(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var I1=null;function P1(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,I1=new Map,e.forEach(ss,n),I1=null,W1.call(n))}function ss(n,e){if(!(e.state.loading&4)){var t=I1.get(n);if(t)var l=t.get(null);else{t=new Map,I1.set(n,t);for(var a=n.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var i=a[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(t.set(i.dataset.precedence,i),l=i)}l&&t.set(null,l)}a=e.instance,i=a.getAttribute("data-precedence"),u=t.get(i)||l,u===l&&t.set(null,a),t.set(i,a),this.count++,l=W1.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),u?u.parentNode.insertBefore(a,u.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(a,n.firstChild)),e.state.loading|=4}}var U0={$$typeof:Bn,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function os(n,e,t,l,a,u,i,c,s){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fa(0),this.hiddenUpdates=fa(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function gf(n,e,t,l,a,u,i,c,s,h,E,T){return n=new os(n,e,t,i,s,h,E,T,c),e=1,u===!0&&(e|=24),u=ge(3,null,null,e),n.current=u,u.stateNode=n,e=La(),e.refCount++,n.pooledCache=e,e.refCount++,u.memoizedState={element:l,isDehydrated:t,cache:e},$a(u),n}function pf(n){return n?(n=Sl,n):Sl}function yf(n,e,t,l,a,u){a=pf(a),l.context===null?l.context=a:l.pendingContext=a,l=Et(e),l.payload={element:t},u=u===void 0?null:u,u!==null&&(l.callback=u),t=bt(n,l,e),t!==null&&(fe(t,n,e),g0(t,n,e))}function hf(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function g2(n,e){hf(n,e),(n=n.alternate)&&hf(n,e)}function vf(n){if(n.tag===13||n.tag===31){var e=Xt(n,67108864);e!==null&&fe(e,n,67108864),g2(n,67108864)}}function Kf(n){if(n.tag===13||n.tag===31){var e=Ke();e=sa(e);var t=Xt(n,e);t!==null&&fe(t,n,e),g2(n,e)}}var na=!0;function ds(n,e,t,l){var a=v.T;v.T=null;var u=q.p;try{q.p=2,p2(n,e,t,l)}finally{q.p=u,v.T=a}}function ms(n,e,t,l){var a=v.T;v.T=null;var u=q.p;try{q.p=8,p2(n,e,t,l)}finally{q.p=u,v.T=a}}function p2(n,e,t,l){if(na){var a=y2(l);if(a===null)e2(n,e,l,ea,t),Ef(n,l);else if(gs(a,n,e,t,l))l.stopPropagation();else if(Ef(n,l),e&4&&-1<rs.indexOf(n)){for(;a!==null;){var u=sl(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Bt(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var s=1<<31-me(i);c.entanglements[1]|=s,i&=~s}Be(u),(sn&6)===0&&(C1=Hn()+500,w0(0))}}break;case 31:case 13:c=Xt(u,2),c!==null&&fe(c,u,2),B1(),g2(u,2)}if(u=y2(l),u===null&&e2(n,e,l,ea,t),u===a)break;a=u}a!==null&&l.stopPropagation()}else e2(n,e,l,null,t)}}function y2(n){return n=va(n),h2(n)}var ea=null;function h2(n){if(ea=null,n=fl(n),n!==null){var e=N(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=tn(e),n!==null)return n;n=null}else if(t===31){if(n=Kn(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return ea=n,null}function Sf(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(G0()){case Jl:return 2;case x2:return 8;case X0:case Pf:return 32;case H2:return 268435456;default:return 32}default:return 32}}var v2=!1,Dt=null,jt=null,Nt=null,C0=new Map,Z0=new Map,Ut=[],rs="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ef(n,e){switch(n){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":C0.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Z0.delete(e.pointerId)}}function B0(n,e,t,l,a,u){return n===null||n.nativeEvent!==u?(n={blockedOn:e,domEventName:t,eventSystemFlags:l,nativeEvent:u,targetContainers:[a]},e!==null&&(e=sl(e),e!==null&&vf(e)),n):(n.eventSystemFlags|=l,e=n.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),n)}function gs(n,e,t,l,a){switch(e){case"focusin":return Dt=B0(Dt,n,e,t,l,a),!0;case"dragenter":return jt=B0(jt,n,e,t,l,a),!0;case"mouseover":return Nt=B0(Nt,n,e,t,l,a),!0;case"pointerover":var u=a.pointerId;return C0.set(u,B0(C0.get(u)||null,n,e,t,l,a)),!0;case"gotpointercapture":return u=a.pointerId,Z0.set(u,B0(Z0.get(u)||null,n,e,t,l,a)),!0}return!1}function bf(n){var e=fl(n.target);if(e!==null){var t=N(e);if(t!==null){if(e=t.tag,e===13){if(e=tn(t),e!==null){n.blockedOn=e,N2(n.priority,function(){Kf(t)});return}}else if(e===31){if(e=Kn(t),e!==null){n.blockedOn=e,N2(n.priority,function(){Kf(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ta(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=y2(n.nativeEvent);if(t===null){t=n.nativeEvent;var l=new t.constructor(t.type,t);ha=l,t.target.dispatchEvent(l),ha=null}else return e=sl(t),e!==null&&vf(e),n.blockedOn=t,!1;e.shift()}return!0}function Af(n,e,t){ta(n)&&t.delete(e)}function ps(){v2=!1,Dt!==null&&ta(Dt)&&(Dt=null),jt!==null&&ta(jt)&&(jt=null),Nt!==null&&ta(Nt)&&(Nt=null),C0.forEach(Af),Z0.forEach(Af)}function la(n,e){n.blockedOn===e&&(n.blockedOn=null,v2||(v2=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,ps)))}var aa=null;function Tf(n){aa!==n&&(aa=n,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){aa===n&&(aa=null);for(var e=0;e<n.length;e+=3){var t=n[e],l=n[e+1],a=n[e+2];if(typeof l!="function"){if(h2(l||t)===null)continue;break}var u=sl(t);u!==null&&(n.splice(e,3),e-=3,yu(u,{pending:!0,data:a,method:t.method,action:l},l,a))}}))}function Xl(n){function e(s){return la(s,n)}Dt!==null&&la(Dt,n),jt!==null&&la(jt,n),Nt!==null&&la(Nt,n),C0.forEach(e),Z0.forEach(e);for(var t=0;t<Ut.length;t++){var l=Ut[t];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Ut.length&&(t=Ut[0],t.blockedOn===null);)bf(t),t.blockedOn===null&&Ut.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var a=t[l],u=t[l+1],i=a[te]||null;if(typeof u=="function")i||Tf(t);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(a=u,i=u[te]||null)c=i.formAction;else if(h2(a)!==null)continue}else c=i.action;typeof c=="function"?t[l+1]=c:(t.splice(l,3),l-=3),Tf(t)}}}function zf(){function n(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function K2(n){this._internalRoot=n}ua.prototype.render=K2.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(g(409));var t=e.current,l=Ke();yf(t,l,n,e,null,null)},ua.prototype.unmount=K2.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;yf(n.current,2,null,n,null,null),B1(),e[cl]=null}};function ua(n){this._internalRoot=n}ua.prototype.unstable_scheduleHydration=function(n){if(n){var e=j2();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ut.length&&e!==0&&e<Ut[t].priority;t++);Ut.splice(t,0,n),t===0&&bf(n)}};var Mf=H.version;if(Mf!=="19.2.0")throw Error(g(527,Mf,"19.2.0"));q.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(g(188)):(n=Object.keys(n).join(","),Error(g(268,n)));return n=z(e),n=n!==null?k(n):null,n=n===null?null:n.stateNode,n};var ys={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ia.isDisabled&&ia.supportsFiber)try{kl=ia.inject(ys),de=ia}catch{}}return V0.createRoot=function(n,e){if(!O(n))throw Error(g(299));var t=!1,l="",a=Oc,u=Dc,i=jc;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gf(n,1,!1,null,null,t,l,null,a,u,i,zf),n[cl]=e.current,n2(n),new K2(e)},V0.hydrateRoot=function(n,e,t){if(!O(n))throw Error(g(299));var l=!1,a="",u=Oc,i=Dc,c=jc,s=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.formState!==void 0&&(s=t.formState)),e=gf(n,1,!0,e,t??null,l,a,s,u,i,c,zf),e.context=pf(null),t=e.current,l=Ke(),l=sa(l),a=Et(l),a.callback=null,bt(t,a,l),t=l,e.current.lanes=t,$l(e,t),Be(e),n[cl]=e.current,n2(n),new ua(e)},V0.version="19.2.0",V0}var Uf;function xs(){if(Uf)return b2.exports;Uf=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(H){console.error(H)}}return p(),b2.exports=qs(),b2.exports}var Hs=xs();const ws=new Map([["bold",f.createElement(f.Fragment,null,f.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"}))],["duotone",f.createElement(f.Fragment,null,f.createElement("path",{d:"M112,56V200L40,128Z",opacity:"0.2"}),f.createElement("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"}))],["fill",f.createElement(f.Fragment,null,f.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))],["light",f.createElement(f.Fragment,null,f.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"}))],["regular",f.createElement(f.Fragment,null,f.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"}))],["thin",f.createElement(f.Fragment,null,f.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"}))]]),_s=new Map([["bold",f.createElement(f.Fragment,null,f.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",f.createElement(f.Fragment,null,f.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),f.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",f.createElement(f.Fragment,null,f.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",f.createElement(f.Fragment,null,f.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",f.createElement(f.Fragment,null,f.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",f.createElement(f.Fragment,null,f.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),Os=new Map([["bold",f.createElement(f.Fragment,null,f.createElement("path",{d:"M232,44H160a43.86,43.86,0,0,0-32,13.85A43.86,43.86,0,0,0,96,44H24A12,12,0,0,0,12,56V200a12,12,0,0,0,12,12H96a20,20,0,0,1,20,20,12,12,0,0,0,24,0,20,20,0,0,1,20-20h72a12,12,0,0,0,12-12V56A12,12,0,0,0,232,44ZM96,188H36V68H96a20,20,0,0,1,20,20V192.81A43.79,43.79,0,0,0,96,188Zm124,0H160a43.71,43.71,0,0,0-20,4.83V88a20,20,0,0,1,20-20h60Z"}))],["duotone",f.createElement(f.Fragment,null,f.createElement("path",{d:"M232,56V200H160a32,32,0,0,0-32,32,32,32,0,0,0-32-32H24V56H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32Z",opacity:"0.2"}),f.createElement("path",{d:"M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"}))],["fill",f.createElement(f.Fragment,null,f.createElement("path",{d:"M240,56V200a8,8,0,0,1-8,8H160a24,24,0,0,0-24,23.94,7.9,7.9,0,0,1-5.12,7.55A8,8,0,0,1,120,232a24,24,0,0,0-24-24H24a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H88a32,32,0,0,1,32,32v87.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V80a32,32,0,0,1,32-32h64A8,8,0,0,1,240,56Z"}))],["light",f.createElement(f.Fragment,null,f.createElement("path",{d:"M232,50H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,50H24a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h72a6,6,0,0,0,6-6V56A6,6,0,0,0,232,50ZM96,194H30V62H96a26,26,0,0,1,26,26V204.31A37.86,37.86,0,0,0,96,194Zm130,0H160a37.87,37.87,0,0,0-26,10.32V88a26,26,0,0,1,26-26h66Z"}))],["regular",f.createElement(f.Fragment,null,f.createElement("path",{d:"M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"}))],["thin",f.createElement(f.Fragment,null,f.createElement("path",{d:"M232,52H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,52H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V56A4,4,0,0,0,232,52ZM96,196H28V60H96a28,28,0,0,1,28,28V209.4A35.93,35.93,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V88a28,28,0,0,1,28-28h68Z"}))]]),Ds=new Map([["bold",f.createElement(f.Fragment,null,f.createElement("path",{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"}))],["duotone",f.createElement(f.Fragment,null,f.createElement("path",{d:"M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",opacity:"0.2"}),f.createElement("path",{d:"M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["fill",f.createElement(f.Fragment,null,f.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["light",f.createElement(f.Fragment,null,f.createElement("path",{d:"M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"}))],["regular",f.createElement(f.Fragment,null,f.createElement("path",{d:"M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"}))],["thin",f.createElement(f.Fragment,null,f.createElement("path",{d:"M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"}))]]),js=new Map([["bold",f.createElement(f.Fragment,null,f.createElement("path",{d:"M196.49,151.51a12,12,0,0,1-17,17L168,157v51a12,12,0,0,1-24,0V157l-11.51,11.52a12,12,0,1,1-17-17l32-32a12,12,0,0,1,17,0ZM160,36A92.08,92.08,0,0,0,79,84.37,68,68,0,1,0,72,220h28a12,12,0,0,0,0-24H72a44,44,0,0,1-1.81-87.95A91.7,91.7,0,0,0,68,128a12,12,0,0,0,24,0,68,68,0,1,1,132.6,21.29,12,12,0,1,0,22.8,7.51A92.06,92.06,0,0,0,160,36Z"}))],["duotone",f.createElement(f.Fragment,null,f.createElement("path",{d:"M240,128a80,80,0,0,1-80,80H72A56,56,0,1,1,85.92,97.74l0,.1A80,80,0,0,1,240,128Z",opacity:"0.2"}),f.createElement("path",{d:"M178.34,165.66,160,147.31V208a8,8,0,0,1-16,0V147.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32ZM160,40A88.08,88.08,0,0,0,81.29,88.68,64,64,0,1,0,72,216h40a8,8,0,0,0,0-16H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.12A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,100.8,66,8,8,0,0,0,3.2,15.34,7.9,7.9,0,0,0,3.2-.68A88,88,0,0,0,160,40Z"}))],["fill",f.createElement(f.Fragment,null,f.createElement("path",{d:"M247.93,124.52C246.11,77.54,207.07,40,160.06,40A88.1,88.1,0,0,0,81.29,88.67h0A87.48,87.48,0,0,0,72,127.73,8.18,8.18,0,0,1,64.57,136,8,8,0,0,1,56,128a103.66,103.66,0,0,1,5.34-32.92,4,4,0,0,0-4.75-5.18A64.09,64.09,0,0,0,8,152c0,35.19,29.75,64,65,64H160A88.09,88.09,0,0,0,247.93,124.52Zm-50.27,9.14a8,8,0,0,1-11.32,0L168,115.31V176a8,8,0,0,1-16,0V115.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,197.66,133.66Z"}))],["light",f.createElement(f.Fragment,null,f.createElement("path",{d:"M188.24,164.24a6,6,0,0,1-8.48,0L158,142.49V208a6,6,0,0,1-12,0V142.49l-21.76,21.75a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,0l32,32A6,6,0,0,1,188.24,164.24ZM160,42A86.1,86.1,0,0,0,82.43,90.88,62,62,0,1,0,72,214h40a6,6,0,0,0,0-12H72a50,50,0,0,1,0-100,50.68,50.68,0,0,1,5.91.36A85.54,85.54,0,0,0,74,128a6,6,0,0,0,12,0,74,74,0,1,1,103.6,67.85,6,6,0,0,0,4.8,11A86,86,0,0,0,160,42Z"}))],["regular",f.createElement(f.Fragment,null,f.createElement("path",{d:"M178.34,165.66,160,147.31V208a8,8,0,0,1-16,0V147.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32ZM160,40A88.08,88.08,0,0,0,81.29,88.68,64,64,0,1,0,72,216h40a8,8,0,0,0,0-16H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.12A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,100.8,66,8,8,0,0,0,3.2,15.34,7.9,7.9,0,0,0,3.2-.68A88,88,0,0,0,160,40Z"}))],["thin",f.createElement(f.Fragment,null,f.createElement("path",{d:"M186.83,162.83a4,4,0,0,1-5.66,0L156,137.66V208a4,4,0,0,1-8,0V137.66l-25.17,25.17a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0l32,32A4,4,0,0,1,186.83,162.83ZM160,44A84.09,84.09,0,0,0,83.61,93.13,60,60,0,1,0,72,212h40a4,4,0,0,0,0-8H72a52,52,0,1,1,8.57-103.27A83.45,83.45,0,0,0,76,128a4,4,0,0,0,8,0,76,76,0,1,1,106.4,69.68,4,4,0,0,0,1.6,7.66,3.92,3.92,0,0,0,1.6-.33A84,84,0,0,0,160,44Z"}))]]),Ns=new Map([["bold",f.createElement(f.Fragment,null,f.createElement("path",{d:"M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0Zm-108.49,8.49a12,12,0,0,0,17,0l40-40a12,12,0,0,0-17-17L140,115V32a12,12,0,0,0-24,0v83L96.49,95.51a12,12,0,0,0-17,17Z"}))],["duotone",f.createElement(f.Fragment,null,f.createElement("path",{d:"M216,48V208H40V48A16,16,0,0,1,56,32H200A16,16,0,0,1,216,48Z",opacity:"0.2"}),f.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"}))],["fill",f.createElement(f.Fragment,null,f.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,168,96H136V32a8,8,0,0,0-16,0V96H88a8,8,0,0,0-5.66,13.66Z"}))],["light",f.createElement(f.Fragment,null,f.createElement("path",{d:"M222,144v64a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V144a6,6,0,0,1,12,0v58H210V144a6,6,0,0,1,12,0Zm-98.24,4.24a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0-8.48-8.48L134,129.51V32a6,6,0,0,0-12,0v97.51L92.24,99.76a6,6,0,0,0-8.48,8.48Z"}))],["regular",f.createElement(f.Fragment,null,f.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"}))],["thin",f.createElement(f.Fragment,null,f.createElement("path",{d:"M220,144v64a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V144a4,4,0,0,1,8,0v60H212V144a4,4,0,0,1,8,0Zm-94.83,2.83a4,4,0,0,0,5.66,0l40-40a4,4,0,1,0-5.66-5.66L132,134.34V32a4,4,0,0,0-8,0V134.34L90.83,101.17a4,4,0,0,0-5.66,5.66Z"}))]]),Us=new Map([["bold",f.createElement(f.Fragment,null,f.createElement("path",{d:"M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Z"}))],["duotone",f.createElement(f.Fragment,null,f.createElement("path",{d:"M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",opacity:"0.2"}),f.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"}))],["fill",f.createElement(f.Fragment,null,f.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96Z"}))],["light",f.createElement(f.Fragment,null,f.createElement("path",{d:"M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z"}))],["regular",f.createElement(f.Fragment,null,f.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"}))],["thin",f.createElement(f.Fragment,null,f.createElement("path",{d:"M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z"}))]]),Cs=new Map([["bold",f.createElement(f.Fragment,null,f.createElement("path",{d:"M156,112a12,12,0,0,1-12,12H124v20a12,12,0,0,1-24,0V124H80a12,12,0,0,1,0-24h20V80a12,12,0,0,1,24,0v20h20A12,12,0,0,1,156,112Zm76.49,120.49a12,12,0,0,1-17,0L168,185a92.12,92.12,0,1,1,17-17l47.54,47.53A12,12,0,0,1,232.49,232.49ZM112,180a68,68,0,1,0-68-68A68.08,68.08,0,0,0,112,180Z"}))],["duotone",f.createElement(f.Fragment,null,f.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),f.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Zm112,0a8,8,0,0,1-8,8H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24A8,8,0,0,1,152,112Z"}))],["fill",f.createElement(f.Fragment,null,f.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM144,120H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16Z"}))],["light",f.createElement(f.Fragment,null,f.createElement("path",{d:"M150,112a6,6,0,0,1-6,6H118v26a6,6,0,0,1-12,0V118H80a6,6,0,0,1,0-12h26V80a6,6,0,0,1,12,0v26h26A6,6,0,0,1,150,112Zm78.24,116.24a6,6,0,0,1-8.48,0l-51.38-51.38a86.15,86.15,0,1,1,8.48-8.48l51.38,51.38A6,6,0,0,1,228.24,228.24ZM112,186a74,74,0,1,0-74-74A74.09,74.09,0,0,0,112,186Z"}))],["regular",f.createElement(f.Fragment,null,f.createElement("path",{d:"M152,112a8,8,0,0,1-8,8H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24A8,8,0,0,1,152,112Zm77.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88.11,88.11,0,1,1,11.31-11.31l50.07,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["thin",f.createElement(f.Fragment,null,f.createElement("path",{d:"M148,112a4,4,0,0,1-4,4H116v28a4,4,0,0,1-8,0V116H80a4,4,0,0,1,0-8h28V80a4,4,0,0,1,8,0v28h28A4,4,0,0,1,148,112Zm78.83,114.83a4,4,0,0,1-5.66,0l-52.7-52.7a84.1,84.1,0,1,1,5.66-5.66l52.7,52.7A4,4,0,0,1,226.83,226.83ZM112,188a76,76,0,1,0-76-76A76.08,76.08,0,0,0,112,188Z"}))]]),Zs=new Map([["bold",f.createElement(f.Fragment,null,f.createElement("path",{d:"M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0ZM96.49,80.49,116,61v83a12,12,0,0,0,24,0V61l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z"}))],["duotone",f.createElement(f.Fragment,null,f.createElement("path",{d:"M216,48V208H40V48A16,16,0,0,1,56,32H200A16,16,0,0,1,216,48Z",opacity:"0.2"}),f.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM93.66,77.66,120,51.31V144a8,8,0,0,0,16,0V51.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,77.66Z"}))],["fill",f.createElement(f.Fragment,null,f.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM88,80h32v64a8,8,0,0,0,16,0V80h32a8,8,0,0,0,5.66-13.66l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,88,80Z"}))],["light",f.createElement(f.Fragment,null,f.createElement("path",{d:"M222,144v64a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V144a6,6,0,0,1,12,0v58H210V144a6,6,0,0,1,12,0ZM92.24,76.24,122,46.49V144a6,6,0,0,0,12,0V46.49l29.76,29.75a6,6,0,0,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,0,0,8.48,8.48Z"}))],["regular",f.createElement(f.Fragment,null,f.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM93.66,77.66,120,51.31V144a8,8,0,0,0,16,0V51.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,77.66Z"}))],["thin",f.createElement(f.Fragment,null,f.createElement("path",{d:"M220,144v64a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V144a4,4,0,0,1,8,0v60H212V144a4,4,0,0,1,8,0ZM90.83,74.83,124,41.66V144a4,4,0,0,0,8,0V41.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z"}))]]),Bs=new Map([["bold",f.createElement(f.Fragment,null,f.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",f.createElement(f.Fragment,null,f.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),f.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",f.createElement(f.Fragment,null,f.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",f.createElement(f.Fragment,null,f.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",f.createElement(f.Fragment,null,f.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",f.createElement(f.Fragment,null,f.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),Rs=f.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Ne=f.forwardRef((p,H)=>{const{alt:U,color:g,size:O,weight:N,mirrored:tn,children:Kn,weights:_,...z}=p,{color:k="currentColor",size:Z,weight:fn="regular",mirrored:Un=!1,...qn}=f.useContext(Rs);return f.createElement("svg",{ref:H,xmlns:"http://www.w3.org/2000/svg",width:O??Z,height:O??Z,fill:g??k,viewBox:"0 0 256 256",transform:tn||Un?"scale(-1, 1)":void 0,...qn,...z},!!U&&f.createElement("title",null,U),Kn,_.get(N??fn))});Ne.displayName="IconBase";const Vf=f.forwardRef((p,H)=>f.createElement(Ne,{ref:H,...p,weights:ws}));Vf.displayName="ArrowLeftIcon";const Vs=Vf,Yf=f.forwardRef((p,H)=>f.createElement(Ne,{ref:H,...p,weights:_s}));Yf.displayName="ArrowRightIcon";const ft=Yf,Gf=f.forwardRef((p,H)=>f.createElement(Ne,{ref:H,...p,weights:Os}));Gf.displayName="BookOpenIcon";const Cf=Gf,Xf=f.forwardRef((p,H)=>f.createElement(Ne,{ref:H,...p,weights:Ds}));Xf.displayName="CheckIcon";const ca=Xf,Qf=f.forwardRef((p,H)=>f.createElement(Ne,{ref:H,...p,weights:js}));Qf.displayName="CloudArrowUpIcon";const Ys=Qf,Lf=f.forwardRef((p,H)=>f.createElement(Ne,{ref:H,...p,weights:Ns}));Lf.displayName="DownloadSimpleIcon";const Gs=Lf,Jf=f.forwardRef((p,H)=>f.createElement(Ne,{ref:H,...p,weights:Us}));Jf.displayName="LockSimpleIcon";const Zf=Jf,kf=f.forwardRef((p,H)=>f.createElement(Ne,{ref:H,...p,weights:Cs}));kf.displayName="MagnifyingGlassPlusIcon";const Xs=kf,Ff=f.forwardRef((p,H)=>f.createElement(Ne,{ref:H,...p,weights:Zs}));Ff.displayName="UploadSimpleIcon";const Qs=Ff,$f=f.forwardRef((p,H)=>f.createElement(Ne,{ref:H,...p,weights:Bs}));$f.displayName="XIcon";const Ls=$f,$n=[{id:"14A",group:"趋势",title:"趋势的基本特征",range:"00:18–03:08",notes:["上涨趋势的重要特征是低点不断抬高；下降趋势的重要特征是高点不断降低。","趋势主要朝一个方向移动，中间可以有横盘和回调。","所有趋势都在某种通道内运行，通道不一定明显。"],questions:[{prompt:"上涨趋势最重要的特征是什么？",options:["不断抬高的低点","每根K线都是阳线","价格从不回调"],answer:0,explanation:"本课先强调上涨趋势中低点不断抬高，而不是要求每根K线都上涨。",time:"00:18–00:25",id:"14A-1",quote:`00:15 这个词时到底是什么意思
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
20:58 附近收盘`}],sourceFile:"BTC PAF 18F Trading Ranges_中文 (源语言).srt"}],Wf="brooks-practice-v1",Bf=()=>({version:2,selected:"18A",records:{},updatedAt:0});function q2(p){return[1,2].includes(p==null?void 0:p.version)&&typeof p.selected=="string"&&Number.isFinite(p.updatedAt??0)&&p.records&&typeof p.records=="object"&&!Array.isArray(p.records)&&Object.values(p.records).every(H=>H&&typeof H=="object"&&H.answers&&typeof H.answers=="object"&&!Array.isArray(H.answers)&&Object.values(H.answers).every(U=>U&&Number.isInteger(U.choice)&&U.choice>=0&&typeof U.correct=="boolean"))}function If(p,H){if(!q2(p))throw Error("Invalid progress");const U={...p,version:2,records:{...p.records}},g={};for(const O of H){const N=p.records[O.id];if(N){if(O.knowledgePoints&&(p.version===1||N.revision!==O.revision))g[O.id]=N,delete U.records[O.id];else if(p.version===1){const tn={};for(const[Kn,_]of Object.entries(N.answers)){const z=O.questions[Number(Kn)];z&&_.choice<z.options.length&&(tn[z.id]={..._,correct:_.choice===z.answer})}U.records[O.id]={...N,revision:O.revision||"trend-v1",answers:tn}}}}return Object.keys(g).length&&(U.archives=[...Array.isArray(p.archives)?p.archives:[],{reason:"区间题库按知识点重建；旧题号不映射到新题",records:g,priorVersion:p.version,priorUpdatedAt:p.updatedAt??0}],U.migrationNotice="交易区间题库已更新。旧版答题记录已归档并保留在进度导出中，新版需要重新练习。"),U}function Zt(p,H){return p.records[H]||{answers:{},understood:!1}}function ot(p,H){return!!p&&p.correct&&p.choice===H.answer&&!p.unsure}function al(p,H){const U=Zt(p,H.id);return H.questions.every(g=>ot(U.answers[g.id],g))}function st(p,H){return!!Zt(p,H.id).understood&&al(p,H)}function ll(p,H,U){const g=U.filter(N=>N.group===H.group),O=g.indexOf(H);return O===0||O>0&&st(p,g[O-1])}function Js(p,H){return H.flatMap(U=>U.questions.flatMap((g,O)=>{const N=Zt(p,U.id).answers[g.id];return N&&!ot(N,g)?[{lesson:U,index:O}]:[]}))}function ks(p,H){const U=H.knowledgePoints||[],g=Zt(p,H.id);return{total:U.length,learned:U.filter(O=>H.questions.filter(N=>N.knowledgeId===O.id).every(N=>ot(g.answers[N.id],N))).length,attempted:U.filter(O=>H.questions.some(N=>N.knowledgeId===O.id&&g.answers[N.id])).length}}const Rf=p=>`./${p.replace(/^\/+/,"")}`;function Fs(){try{const p=localStorage.getItem(Wf);if(p){const H=JSON.parse(p);if(q2(H))return If(H,$n);throw Error()}return Bf()}catch{return{...Bf(),storageWarning:!0}}}function $s(){var il,Y0,Ql;const[p,H]=f.useState(Fs),[U,g]=f.useState("lesson"),[O,N]=f.useState("recap"),[tn,Kn]=f.useState(0),[_,z]=f.useState(null),[k,Z]=f.useState(!1),[fn,Un]=f.useState(""),[qn,Tn]=f.useState(null),[xn,jn]=f.useState(null),[se,Bn]=f.useState(null),[Wn,we]=f.useState(""),[Jn,W]=f.useState(!1),[In,_e]=f.useState(!1),[dt,ne]=f.useState(!1),Rn=f.useRef();f.useRef();const Re=f.useRef(p);Re.current=p;const Y=$n.find(M=>M.id===p.selected)||$n[5],pn=Zt(p,Y.id),v=Y.questions[tn],q=Js(p,$n),V=$n.filter(M=>st(p,M)).length,I=ks(p,Y);function ln(M){Un(M)}function d(M){H(w=>({...M(w),updatedAt:Date.now()}))}function A(M){d(w=>({...w,records:{...w.records,[Y.id]:{...M(Zt(w,Y.id)),revision:Y.revision||"trend-v1"}}}))}f.useEffect(()=>{try{localStorage.setItem(Wf,JSON.stringify(p))}catch{ln("本机保存失败，请导出进度备份。")}},[p]),f.useEffect(()=>{if(!fn)return;const M=setTimeout(()=>Un(""),5e3);return()=>clearTimeout(M)},[fn]),f.useEffect(()=>{},[]),f.useEffect(()=>{},[se]),f.useEffect(()=>{},[p,se,Jn]),f.useEffect(()=>{if(!qn&&!xn)return;const M=document.activeElement,w=ee=>{if(ee.key==="Escape"&&(Tn(null),jn(null)),ee.key==="Tab"){const Ll=document.querySelector('[role="dialog"]'),Hn=Ll==null?void 0:Ll.querySelectorAll("button,input,a");if(!(Hn!=null&&Hn.length))return;const G0=Hn[0],Jl=Hn[Hn.length-1];ee.shiftKey&&document.activeElement===G0?(ee.preventDefault(),Jl.focus()):!ee.shiftKey&&document.activeElement===Jl&&(ee.preventDefault(),G0.focus())}},oe=setTimeout(()=>{var ee;return(ee=document.querySelector('[role="dialog"] button'))==null?void 0:ee.focus()},0);return document.addEventListener("keydown",w),()=>{clearTimeout(oe),document.removeEventListener("keydown",w),M==null||M.focus()}},[qn,xn]);function x(M,w=null){if(!ll(p,M,$n)){ln("先完成本组上一节的订正，并确认掌握。");return}d(oe=>({...oe,selected:M.id})),g("lesson"),N(w===null?"recap":"quiz"),Kn(w??0),ne(!1),z(null),Z(!1),window.scrollTo(0,0)}function D(){const M=Y.questions.findIndex(w=>!ot(pn.answers[w.id],w));if(M<0&&!st(p,Y)){N("result");return}ne(M<0),Kn(M<0?0:M),z(null),Z(!1),N("quiz")}function G(){_!==null&&(A(M=>({...M,understood:!1,answers:{...M.answers,[v.id]:{choice:_,correct:_===v.answer,unsure:!1}}})),Z(!0))}function J(){const M=dt?tn+1<Y.questions.length?tn+1:-1:Y.questions.findIndex((w,oe)=>oe>tn&&!ot(pn.answers[w.id],w));M>=0?(Kn(M),z(null),Z(!1)):N("result")}function an(){al(p,Y)&&(A(M=>({...M,understood:!0})),ln("本课已掌握，下一节已解锁。"))}function Vn(){const M=URL.createObjectURL(new Blob([JSON.stringify(p,null,2)],{type:"application/json"})),w=document.createElement("a");w.href=M,w.download="课后练习-学习进度.json",w.click(),URL.revokeObjectURL(M)}async function En(M){var oe;const w=(oe=M.target.files)==null?void 0:oe[0];if(M.target.value="",!!w)try{if(w.size>2e6)throw Error();const ee=JSON.parse(await w.text());if(!q2(ee))throw Error();if(!window.confirm("导入会替换当前学习进度，确定继续吗？"))return;H({...If(ee,$n),updatedAt:Date.now()}),N("recap"),g("lesson"),ln("进度已导入")}catch{ln("文件无效，请选择本应用导出的进度 JSON。")}}const Ve=$n.filter(M=>M.group===Y.group),mt=Ve.indexOf(Y),Ye=Ve[mt-1],kn=Ve[mt+1],Ge=["看完课程","做练习","订正错题","确认掌握"];let ul=st(p,Y)?4:al(p,Y)?3:Object.keys(pn.answers).length===Y.questions.length?2:1;return r.jsxs(r.Fragment,{children:[r.jsx("header",{children:r.jsxs("div",{className:"header-inner",children:[r.jsx("button",{className:"brand",onClick:()=>{g("lesson"),N("recap")},children:"课堂手记"}),r.jsxs("nav",{"aria-label":"主导航",children:[r.jsx("button",{className:U==="lesson"?"active":"",onClick:()=>{g("lesson"),N("recap")},children:"课后练习"}),r.jsx("button",{className:U==="courses"?"active":"",onClick:()=>g("courses"),children:"课程"}),r.jsxs("button",{className:U==="review"?"active":"",onClick:()=>g("review"),children:["错题复习",q.length>0&&r.jsx("span",{className:"count",children:q.length})]})]}),r.jsxs("button",{className:"save-state",onClick:()=>Tn("settings"),children:[r.jsx(Ys,{size:18}),r.jsx("span",{children:se?Wn:"仅本机保存"})]})]})}),r.jsxs("main",{children:[p.migrationNotice&&r.jsxs("div",{className:"migration-note",role:"status",children:[r.jsx("span",{children:p.migrationNotice}),r.jsx("button",{onClick:()=>d(M=>({...M,migrationNotice:null})),children:"知道了"})]}),p.storageWarning&&r.jsx("p",{className:"warning",children:"本机旧记录无法读取，已启用新进度。请从备份恢复。"}),U==="lesson"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"lesson-layout",children:[r.jsxs("section",{className:"lesson-content",children:[r.jsx("div",{className:"eyebrow",children:O==="recap"?"课后回顾":O==="quiz"?"本课练习":"练习结果"}),r.jsxs("h1",{children:[Y.id," ",Y.group," · 第",mt+1,"节"]}),r.jsx("p",{className:"source",children:O==="quiz"?`第 ${tn+1} 题 / 共 ${Y.questions.length} 题${v.knowledgeTitle?` · ${v.knowledgeTitle}`:""}`:`来源：本课字幕 ${Y.range}`}),O==="recap"&&r.jsxs(r.Fragment,{children:[r.jsx("ol",{className:"notes",children:Y.notes.map((M,w)=>r.jsxs("li",{children:[r.jsx("span",{className:"number",children:w+1}),r.jsx("p",{children:M})]},M))}),r.jsxs("div",{className:"start-area",children:[I.total>0&&r.jsxs("p",{className:"coverage-status",children:["已订正 ",I.learned," / ",I.total," 个知识点"]}),r.jsxs("button",{className:"primary",onClick:D,children:[st(p,Y)?"重新练习本课":al(p,Y)?"查看结果并确认理解":Object.keys(pn.answers).length?"继续本课练习":"开始本课练习",r.jsx(ft,{size:22})]}),r.jsxs("p",{className:"hint",children:[Y.questions.length,"道练习 · 可分次完成，自动保存已提交答案",st(p,Y)?" · 本课已掌握":""]})]}),Y.knowledgePoints&&r.jsxs("details",{className:"knowledge-outline",children:[r.jsxs("summary",{children:["查看本课 ",I.total," 个知识点与学习情况"]}),r.jsx("ol",{children:Y.knowledgePoints.map(M=>r.jsxs("li",{children:[r.jsxs("div",{children:[r.jsx("strong",{children:M.title}),r.jsx("span",{children:Y.questions.filter(w=>w.knowledgeId===M.id).every(w=>ot(pn.answers[w.id],w))?st(p,Y)?"已确认理解":"已订正，待确认":Y.questions.some(w=>w.knowledgeId===M.id&&pn.answers[w.id])?"待巩固":"未练习"})]}),r.jsx("p",{children:M.summary}),r.jsxs("small",{children:["字幕 ",M.time,M.pdfPages.length?` · PDF ${M.pdfPages.join("、")}页`:""]})]},M.id))})]})]}),O==="quiz"&&r.jsxs("div",{className:"quiz",children:[v.knowledgeTitle&&r.jsxs("div",{className:"question-kind",children:[v.type," · ",v.knowledgeId]}),r.jsx("h2",{children:v.prompt}),v.image&&r.jsxs("figure",{children:[r.jsxs("button",{className:"figure-button",onClick:()=>jn(v.image),"aria-label":"放大课程图表",children:[r.jsx("img",{src:Rf(v.image.src),alt:v.image.alt}),r.jsxs("span",{children:[r.jsx(Xs,{size:18}),"点击放大"]})]}),r.jsxs("figcaption",{children:["课程 PDF 第 ",v.image.page," 页 · 图表局部，提交后可看整页讲解"]})]}),r.jsxs("fieldset",{disabled:k,children:[r.jsx("legend",{className:"sr-only",children:"选择一个答案"}),v.options.map((M,w)=>r.jsxs("label",{className:`option ${_===w?"selected":""} ${k&&w===v.answer?"correct":""} ${k&&_===w&&_!==v.answer?"incorrect":""}`,children:[r.jsx("input",{type:"radio",name:`answer-${Y.id}-${tn}`,checked:_===w,onChange:()=>z(w)}),r.jsx("span",{children:M}),k&&w===v.answer&&r.jsx(ca,{size:20})]},M))]}),k?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`explanation ${_!==v.answer?"needs-review":""}`,role:"status",children:[r.jsx("strong",{children:_===v.answer?"回答正确":"这题再理解一下"}),r.jsx("p",{children:v.explanation}),r.jsxs("p",{className:"source",children:[Y.id," 字幕 ",v.time,(il=v.pdfPages)!=null&&il.length?` · PDF ${v.pdfPages.join("、")}页`:""]}),(((Y0=v.image)==null?void 0:Y0.solutionSrc)||v.referenceImage)&&r.jsxs("button",{className:"solution-button",onClick:()=>jn(v.referenceImage||{...v.image,src:v.image.solutionSrc,alt:`第${v.image.page}页课件整页讲解`,kind:"课件整页"}),children:[r.jsx(Cf,{size:18}),"查看课件整页讲解"]}),r.jsxs("details",{children:[r.jsx("summary",{children:"查看对应字幕原文"}),r.jsx("p",{className:"transcript",children:v.quote})]}),r.jsxs("label",{className:"unsure",children:[r.jsx("input",{type:"checkbox",checked:!!((Ql=pn.answers[v.id])!=null&&Ql.unsure),onChange:M=>A(w=>({...w,understood:!1,answers:{...w.answers,[v.id]:{...w.answers[v.id],unsure:M.target.checked}}}))}),"我还没完全理解，加入复习"]})]}),r.jsxs("button",{className:"primary",onClick:J,children:[tn===Y.questions.length-1?"查看本课结果":"下一题",r.jsx(ft,{size:20})]})]}):r.jsxs("button",{className:"primary",disabled:_===null,onClick:G,children:["提交答案",r.jsx(ft,{size:20})]}),r.jsx("button",{className:"text-button",onClick:()=>N("recap"),children:"暂停并返回回顾"})]}),O==="result"&&r.jsxs("div",{className:"result",children:[I.total>0&&r.jsxs("p",{className:"coverage-status",children:["已订正 ",I.learned," / ",I.total," 个知识点"]}),r.jsx("h2",{children:pn.understood?"本课已掌握":al(p,Y)?"练习已全部订正":"把没懂的地方再练一遍"}),r.jsxs("p",{children:["已订正 ",Y.questions.filter(M=>ot(pn.answers[M.id],M)).length," / ",Y.questions.length," 题。",al(p,Y)?"确认每个知识点都理解了，再进入下一节。":"答错或标记没懂的题，会留在复习清单中。"]}),r.jsx("div",{className:"answer-list",children:Y.questions.map((M,w)=>r.jsxs("button",{onClick:()=>{Kn(w),ne(!1),z(null),Z(!1),N("quiz")},children:[r.jsxs("span",{children:[w+1,". ",M.prompt]}),r.jsx("span",{className:ot(pn.answers[M.id],M)?"good":"muted",children:pn.answers[M.id]?ot(pn.answers[M.id],M)?"已订正":"待复习":"未作答"})]},w))}),al(p,Y)?r.jsxs("button",{className:"primary",disabled:pn.understood,onClick:an,children:[r.jsx(ca,{size:20}),pn.understood?"已确认掌握":"我已理解本课"]}):r.jsxs("button",{className:"primary",onClick:D,children:["重练未掌握的题",r.jsx(ft,{size:20})]}),pn.understood&&kn&&r.jsxs("button",{className:"text-button",onClick:()=>x(kn),children:["进入 ",kn.id," 下一节",r.jsx(ft,{size:18})]})]})]}),r.jsxs("aside",{children:[r.jsx("h3",{children:"本课流程"}),r.jsx("ol",{className:"steps",children:Ge.map((M,w)=>r.jsxs("li",{className:w<ul?"finished":"",children:[r.jsx("span",{className:"step-dot",children:w<ul&&r.jsx(ca,{size:23,weight:"bold"})}),r.jsx("span",{children:M})]},M))}),r.jsxs("p",{className:"aside-note",children:["看完视频后来练习。",r.jsx("br",{}),"全部订正并确认理解后，",r.jsx("br",{}),"解锁本组下一节。"]})]})]}),r.jsxs("footer",{className:"lesson-footer",children:[r.jsxs("button",{disabled:!Ye,onClick:()=>x(Ye),children:[r.jsx(Vs,{size:24}),r.jsxs("span",{children:[r.jsx("small",{children:"上一节"}),Ye?`${Ye.id} ${Ye.title}`:"本组第一节"]})]}),r.jsxs("button",{disabled:!kn||!ll(p,kn,$n),onClick:()=>x(kn),children:[r.jsxs("span",{children:[r.jsxs("small",{children:["下一节",kn&&!ll(p,kn,$n)?" · 待解锁":""]}),kn?`${kn.id} ${kn.title}`:"本组已到最后一节"]}),kn&&!ll(p,kn,$n)?r.jsx(Zf,{size:23}):r.jsx(ft,{size:24})]})]})]}),U==="courses"&&r.jsxs("section",{className:"collection",children:[r.jsx("div",{className:"eyebrow",children:"学习目录"}),r.jsx("h1",{children:"一课一练，理解后再继续"}),r.jsxs("p",{className:"source",children:["趋势与交易区间 · ",$n.length,"节课 · 已掌握 ",V," 节"]}),r.jsx("div",{className:"course-groups",children:["趋势","交易区间"].map(M=>r.jsxs("section",{children:[r.jsx("h2",{children:M}),$n.filter(w=>w.group===M).map(w=>r.jsxs("button",{className:"course-row",onClick:()=>x(w),"aria-disabled":!ll(p,w,$n),children:[r.jsx("span",{className:"course-id",children:w.id}),r.jsxs("span",{children:[w.title,r.jsx("small",{children:st(p,w)?"已掌握":Object.keys(Zt(p,w.id).answers).length?"练习中":ll(p,w,$n)?"可以开始":"待解锁"})]}),st(p,w)?r.jsx(ca,{size:22}):ll(p,w,$n)?r.jsx(ft,{size:22}):r.jsx(Zf,{size:20})]},w.id))]},M))}),r.jsx("p",{className:"hint",children:"两组可以分别从 14A、18A 开始；组内按顺序解锁。"})]}),U==="review"&&r.jsxs("section",{className:"collection",children:[r.jsx("div",{className:"eyebrow",children:"再理解一次"}),r.jsx("h1",{children:"错题与没懂的地方"}),r.jsx("p",{className:"source",children:"答错的题和你标记没懂的题会留在这里，答对并取消“没懂”后移出。"}),q.length?r.jsx("div",{className:"review-list",children:q.map(({lesson:M,index:w})=>r.jsxs("button",{onClick:()=>x(M,w),children:[r.jsx("span",{className:"course-id",children:M.id}),r.jsxs("span",{children:[M.questions[w].prompt,r.jsx("small",{children:Zt(p,M.id).answers[M.questions[w].id].unsure?"标记为没懂":"待订正"})]}),r.jsx(ft,{size:22})]},`${M.id}-${w}`))}):r.jsxs("div",{className:"empty",children:[r.jsx(Cf,{size:40}),r.jsx("h2",{children:"目前没有待复习的题"}),r.jsx("p",{children:"开始一节课的练习，遇到没懂的地方就把它留下来。"}),r.jsxs("button",{className:"primary",onClick:()=>g("courses"),children:["选择课程",r.jsx(ft,{size:20})]})]})]})]}),r.jsxs("div",{className:"bottom-note",children:[r.jsx("span",{children:"依据课程资料整理 · 知识点练习与图表应用"}),r.jsx("button",{onClick:()=>Tn("settings"),children:"进度与同步设置"})]}),fn&&r.jsx("div",{className:"toast",role:"status",children:fn}),(qn||xn)&&r.jsx("div",{className:"overlay",onClick:()=>{Tn(null),jn(null)},children:r.jsxs("section",{role:"dialog","aria-modal":"true","aria-label":xn?"课程图表":"进度与同步设置",className:`modal ${xn?"image-modal":""}`,onClick:M=>M.stopPropagation(),children:[r.jsx("button",{className:"close","aria-label":"关闭",onClick:()=>{Tn(null),jn(null)},children:r.jsx(Ls,{size:24})}),xn?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"zoom-region",children:r.jsx("img",{src:Rf(xn.src),alt:xn.alt})}),r.jsxs("p",{children:["课程 PDF 第 ",xn.page," 页 · ",xn.kind||"图表局部"," · 可左右滑动，支持双指缩放"]})]}):r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"进度与同步"}),r.jsx("p",{className:"source",children:se?Wn:"当前记录仅保存在这个浏览器中。换设备前，请导出进度，或连接云端同步。"}),r.jsxs("div",{className:"backup-actions",children:[r.jsxs("button",{className:"secondary",onClick:Vn,children:[r.jsx(Gs,{size:20}),"导出进度"]}),r.jsxs("button",{className:"secondary",onClick:()=>Rn.current.click(),children:[r.jsx(Qs,{size:20}),"导入进度"]}),r.jsx("input",{ref:Rn,type:"file",accept:"application/json,.json",hidden:!0,onChange:En})]}),r.jsx("hr",{}),r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"云端同步尚未配置"}),r.jsx("p",{children:"本次试用可以正常做题和保存本机进度。连接免费 Supabase 项目后，可使用邮箱和密码登录同步。"}),r.jsx("p",{className:"hint",children:"尚未连接云端，不会显示“已同步”。"})]})]})]})})]})}Hs.createRoot(document.getElementById("root")).render(r.jsx(bs.StrictMode,{children:r.jsx($s,{})}));
