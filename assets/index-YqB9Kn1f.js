(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function s(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(f){if(f.ep)return;f.ep=!0;const d=s(f);fetch(f.href,d)}})();function Cc(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}function gy(l){if(Object.prototype.hasOwnProperty.call(l,"__esModule"))return l;var u=l.default;if(typeof u=="function"){var s=function o(){var f=!1;try{f=this instanceof o}catch{}return f?Reflect.construct(u,arguments,this.constructor):u.apply(this,arguments)};s.prototype=u.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(l).forEach(function(o){var f=Object.getOwnPropertyDescriptor(l,o);Object.defineProperty(s,o,f.get?f:{enumerable:!0,get:function(){return l[o]}})}),s}var tc={exports:{}},Ri={};var Jp;function my(){if(Jp)return Ri;Jp=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function s(o,f,d){var p=null;if(d!==void 0&&(p=""+d),f.key!==void 0&&(p=""+f.key),"key"in f){d={};for(var m in f)m!=="key"&&(d[m]=f[m])}else d=f;return f=d.ref,{$$typeof:l,type:o,key:p,ref:f!==void 0?f:null,props:d}}return Ri.Fragment=u,Ri.jsx=s,Ri.jsxs=s,Ri}var Fp;function vy(){return Fp||(Fp=1,tc.exports=my()),tc.exports}var lt=vy(),ec={exports:{}},vt={};var Ip;function yy(){if(Ip)return vt;Ip=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),T=Symbol.iterator;function C(x){return x===null||typeof x!="object"?null:(x=T&&x[T]||x["@@iterator"],typeof x=="function"?x:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,U={};function _(x,Y,Z){this.props=x,this.context=Y,this.refs=U,this.updater=Z||$}_.prototype.isReactComponent={},_.prototype.setState=function(x,Y){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,Y,"setState")},_.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function z(){}z.prototype=_.prototype;function w(x,Y,Z){this.props=x,this.context=Y,this.refs=U,this.updater=Z||$}var B=w.prototype=new z;B.constructor=w,G(B,_.prototype),B.isPureReactComponent=!0;var q=Array.isArray;function X(){}var b={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function I(x,Y,Z){var F=Z.ref;return{$$typeof:l,type:x,key:Y,ref:F!==void 0?F:null,props:Z}}function st(x,Y){return I(x.type,Y,x.props)}function ht(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function et(x){var Y={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Z){return Y[Z]})}var mt=/\/+/g;function xt(x,Y){return typeof x=="object"&&x!==null&&x.key!=null?et(""+x.key):Y.toString(36)}function yt(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(X,X):(x.status="pending",x.then(function(Y){x.status==="pending"&&(x.status="fulfilled",x.value=Y)},function(Y){x.status==="pending"&&(x.status="rejected",x.reason=Y)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function N(x,Y,Z,F,at){var nt=typeof x;(nt==="undefined"||nt==="boolean")&&(x=null);var ut=!1;if(x===null)ut=!0;else switch(nt){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(x.$$typeof){case l:case u:ut=!0;break;case E:return ut=x._init,N(ut(x._payload),Y,Z,F,at)}}if(ut)return at=at(x),ut=F===""?"."+xt(x,0):F,q(at)?(Z="",ut!=null&&(Z=ut.replace(mt,"$&/")+"/"),N(at,Y,Z,"",function(gt){return gt})):at!=null&&(ht(at)&&(at=st(at,Z+(at.key==null||x&&x.key===at.key?"":(""+at.key).replace(mt,"$&/")+"/")+ut)),Y.push(at)),1;ut=0;var Rt=F===""?".":F+":";if(q(x))for(var J=0;J<x.length;J++)F=x[J],nt=Rt+xt(F,J),ut+=N(F,Y,Z,nt,at);else if(J=C(x),typeof J=="function")for(x=J.call(x),J=0;!(F=x.next()).done;)F=F.value,nt=Rt+xt(F,J++),ut+=N(F,Y,Z,nt,at);else if(nt==="object"){if(typeof x.then=="function")return N(yt(x),Y,Z,F,at);throw Y=String(x),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ut}function P(x,Y,Z){if(x==null)return x;var F=[],at=0;return N(x,F,"","",function(nt){return Y.call(Z,nt,at++)}),F}function tt(x){if(x._status===-1){var Y=x._result;Y=Y(),Y.then(function(Z){(x._status===0||x._status===-1)&&(x._status=1,x._result=Z)},function(Z){(x._status===0||x._status===-1)&&(x._status=2,x._result=Z)}),x._status===-1&&(x._status=0,x._result=Y)}if(x._status===1)return x._result.default;throw x._result}var ot=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},ft={map:P,forEach:function(x,Y,Z){P(x,function(){Y.apply(this,arguments)},Z)},count:function(x){var Y=0;return P(x,function(){Y++}),Y},toArray:function(x){return P(x,function(Y){return Y})||[]},only:function(x){if(!ht(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return vt.Activity=y,vt.Children=ft,vt.Component=_,vt.Fragment=s,vt.Profiler=f,vt.PureComponent=w,vt.StrictMode=o,vt.Suspense=v,vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,vt.__COMPILER_RUNTIME={__proto__:null,c:function(x){return b.H.useMemoCache(x)}},vt.cache=function(x){return function(){return x.apply(null,arguments)}},vt.cacheSignal=function(){return null},vt.cloneElement=function(x,Y,Z){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var F=G({},x.props),at=x.key;if(Y!=null)for(nt in Y.key!==void 0&&(at=""+Y.key),Y)!H.call(Y,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&Y.ref===void 0||(F[nt]=Y[nt]);var nt=arguments.length-2;if(nt===1)F.children=Z;else if(1<nt){for(var ut=Array(nt),Rt=0;Rt<nt;Rt++)ut[Rt]=arguments[Rt+2];F.children=ut}return I(x.type,at,F)},vt.createContext=function(x){return x={$$typeof:p,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:d,_context:x},x},vt.createElement=function(x,Y,Z){var F,at={},nt=null;if(Y!=null)for(F in Y.key!==void 0&&(nt=""+Y.key),Y)H.call(Y,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(at[F]=Y[F]);var ut=arguments.length-2;if(ut===1)at.children=Z;else if(1<ut){for(var Rt=Array(ut),J=0;J<ut;J++)Rt[J]=arguments[J+2];at.children=Rt}if(x&&x.defaultProps)for(F in ut=x.defaultProps,ut)at[F]===void 0&&(at[F]=ut[F]);return I(x,nt,at)},vt.createRef=function(){return{current:null}},vt.forwardRef=function(x){return{$$typeof:m,render:x}},vt.isValidElement=ht,vt.lazy=function(x){return{$$typeof:E,_payload:{_status:-1,_result:x},_init:tt}},vt.memo=function(x,Y){return{$$typeof:g,type:x,compare:Y===void 0?null:Y}},vt.startTransition=function(x){var Y=b.T,Z={};b.T=Z;try{var F=x(),at=b.S;at!==null&&at(Z,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(X,ot)}catch(nt){ot(nt)}finally{Y!==null&&Z.types!==null&&(Y.types=Z.types),b.T=Y}},vt.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()},vt.use=function(x){return b.H.use(x)},vt.useActionState=function(x,Y,Z){return b.H.useActionState(x,Y,Z)},vt.useCallback=function(x,Y){return b.H.useCallback(x,Y)},vt.useContext=function(x){return b.H.useContext(x)},vt.useDebugValue=function(){},vt.useDeferredValue=function(x,Y){return b.H.useDeferredValue(x,Y)},vt.useEffect=function(x,Y){return b.H.useEffect(x,Y)},vt.useEffectEvent=function(x){return b.H.useEffectEvent(x)},vt.useId=function(){return b.H.useId()},vt.useImperativeHandle=function(x,Y,Z){return b.H.useImperativeHandle(x,Y,Z)},vt.useInsertionEffect=function(x,Y){return b.H.useInsertionEffect(x,Y)},vt.useLayoutEffect=function(x,Y){return b.H.useLayoutEffect(x,Y)},vt.useMemo=function(x,Y){return b.H.useMemo(x,Y)},vt.useOptimistic=function(x,Y){return b.H.useOptimistic(x,Y)},vt.useReducer=function(x,Y,Z){return b.H.useReducer(x,Y,Z)},vt.useRef=function(x){return b.H.useRef(x)},vt.useState=function(x){return b.H.useState(x)},vt.useSyncExternalStore=function(x,Y,Z){return b.H.useSyncExternalStore(x,Y,Z)},vt.useTransition=function(){return b.H.useTransition()},vt.version="19.2.0",vt}var Pp;function ki(){return Pp||(Pp=1,ec.exports=yy()),ec.exports}var k=ki();const j=Cc(k);var ac={exports:{}},Ci={},nc={exports:{}},lc={};var tg;function by(){return tg||(tg=1,(function(l){function u(N,P){var tt=N.length;N.push(P);t:for(;0<tt;){var ot=tt-1>>>1,ft=N[ot];if(0<f(ft,P))N[ot]=P,N[tt]=ft,tt=ot;else break t}}function s(N){return N.length===0?null:N[0]}function o(N){if(N.length===0)return null;var P=N[0],tt=N.pop();if(tt!==P){N[0]=tt;t:for(var ot=0,ft=N.length,x=ft>>>1;ot<x;){var Y=2*(ot+1)-1,Z=N[Y],F=Y+1,at=N[F];if(0>f(Z,tt))F<ft&&0>f(at,Z)?(N[ot]=at,N[F]=tt,ot=F):(N[ot]=Z,N[Y]=tt,ot=Y);else if(F<ft&&0>f(at,tt))N[ot]=at,N[F]=tt,ot=F;else break t}}return P}function f(N,P){var tt=N.sortIndex-P.sortIndex;return tt!==0?tt:N.id-P.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var p=Date,m=p.now();l.unstable_now=function(){return p.now()-m}}var v=[],g=[],E=1,y=null,T=3,C=!1,$=!1,G=!1,U=!1,_=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function B(N){for(var P=s(g);P!==null;){if(P.callback===null)o(g);else if(P.startTime<=N)o(g),P.sortIndex=P.expirationTime,u(v,P);else break;P=s(g)}}function q(N){if(G=!1,B(N),!$)if(s(v)!==null)$=!0,X||(X=!0,et());else{var P=s(g);P!==null&&yt(q,P.startTime-N)}}var X=!1,b=-1,H=5,I=-1;function st(){return U?!0:!(l.unstable_now()-I<H)}function ht(){if(U=!1,X){var N=l.unstable_now();I=N;var P=!0;try{t:{$=!1,G&&(G=!1,z(b),b=-1),C=!0;var tt=T;try{e:{for(B(N),y=s(v);y!==null&&!(y.expirationTime>N&&st());){var ot=y.callback;if(typeof ot=="function"){y.callback=null,T=y.priorityLevel;var ft=ot(y.expirationTime<=N);if(N=l.unstable_now(),typeof ft=="function"){y.callback=ft,B(N),P=!0;break e}y===s(v)&&o(v),B(N)}else o(v);y=s(v)}if(y!==null)P=!0;else{var x=s(g);x!==null&&yt(q,x.startTime-N),P=!1}}break t}finally{y=null,T=tt,C=!1}P=void 0}}finally{P?et():X=!1}}}var et;if(typeof w=="function")et=function(){w(ht)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,xt=mt.port2;mt.port1.onmessage=ht,et=function(){xt.postMessage(null)}}else et=function(){_(ht,0)};function yt(N,P){b=_(function(){N(l.unstable_now())},P)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(N){N.callback=null},l.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<N?Math.floor(1e3/N):5},l.unstable_getCurrentPriorityLevel=function(){return T},l.unstable_next=function(N){switch(T){case 1:case 2:case 3:var P=3;break;default:P=T}var tt=T;T=P;try{return N()}finally{T=tt}},l.unstable_requestPaint=function(){U=!0},l.unstable_runWithPriority=function(N,P){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var tt=T;T=N;try{return P()}finally{T=tt}},l.unstable_scheduleCallback=function(N,P,tt){var ot=l.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?ot+tt:ot):tt=ot,N){case 1:var ft=-1;break;case 2:ft=250;break;case 5:ft=1073741823;break;case 4:ft=1e4;break;default:ft=5e3}return ft=tt+ft,N={id:E++,callback:P,priorityLevel:N,startTime:tt,expirationTime:ft,sortIndex:-1},tt>ot?(N.sortIndex=tt,u(g,N),s(v)===null&&N===s(g)&&(G?(z(b),b=-1):G=!0,yt(q,tt-ot))):(N.sortIndex=ft,u(v,N),$||C||($=!0,X||(X=!0,et()))),N},l.unstable_shouldYield=st,l.unstable_wrapCallback=function(N){var P=T;return function(){var tt=T;T=P;try{return N.apply(this,arguments)}finally{T=tt}}}})(lc)),lc}var eg;function Sy(){return eg||(eg=1,nc.exports=by()),nc.exports}var ic={exports:{}},be={};var ag;function xy(){if(ag)return be;ag=1;var l=ki();function u(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(u(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(v,g,E){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:y==null?null:""+y,children:v,containerInfo:g,implementation:E}}var p=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,be.createPortal=function(v,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(u(299));return d(v,g,null,E)},be.flushSync=function(v){var g=p.T,E=o.p;try{if(p.T=null,o.p=2,v)return v()}finally{p.T=g,o.p=E,o.d.f()}},be.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(v,g))},be.prefetchDNS=function(v){typeof v=="string"&&o.d.D(v)},be.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var E=g.as,y=m(E,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?o.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:T,fetchPriority:C}):E==="script"&&o.d.X(v,{crossOrigin:y,integrity:T,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},be.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=m(g.as,g.crossOrigin);o.d.M(v,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(v)},be.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,y=m(E,g.crossOrigin);o.d.L(v,E,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},be.preloadModule=function(v,g){if(typeof v=="string")if(g){var E=m(g.as,g.crossOrigin);o.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(v)},be.requestFormReset=function(v){o.d.r(v)},be.unstable_batchedUpdates=function(v,g){return v(g)},be.useFormState=function(v,g,E){return p.H.useFormState(v,g,E)},be.useFormStatus=function(){return p.H.useHostTransitionStatus()},be.version="19.2.0",be}var ng;function Rr(){if(ng)return ic.exports;ng=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),ic.exports=xy(),ic.exports}var lg;function Ay(){if(lg)return Ci;lg=1;var l=Sy(),u=ki(),s=Rr();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function p(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function v(t){if(d(t)!==t)throw Error(o(188))}function g(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(o(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return v(i),t;if(r===n)return v(i),e;r=r.sibling}throw Error(o(188))}if(a.return!==n.return)a=i,n=r;else{for(var c=!1,h=i.child;h;){if(h===a){c=!0,a=i,n=r;break}if(h===n){c=!0,n=i,a=r;break}h=h.sibling}if(!c){for(h=r.child;h;){if(h===a){c=!0,a=r,n=i;break}if(h===n){c=!0,n=r,a=i;break}h=h.sibling}if(!c)throw Error(o(189))}}if(a.alternate!==n)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:e}function E(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=E(t),e!==null)return e;t=t.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),$=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),w=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),st=Symbol.for("react.memo_cache_sentinel"),ht=Symbol.iterator;function et(t){return t===null||typeof t!="object"?null:(t=ht&&t[ht]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Symbol.for("react.client.reference");function xt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case G:return"Fragment";case _:return"Profiler";case U:return"StrictMode";case q:return"Suspense";case X:return"SuspenseList";case I:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case $:return"Portal";case w:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case B:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case b:return e=t.displayName||null,e!==null?e:xt(t.type)||"Memo";case H:e=t._payload,t=t._init;try{return xt(t(e))}catch{}}return null}var yt=Array.isArray,N=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},ot=[],ft=-1;function x(t){return{current:t}}function Y(t){0>ft||(t.current=ot[ft],ot[ft]=null,ft--)}function Z(t,e){ft++,ot[ft]=t.current,t.current=e}var F=x(null),at=x(null),nt=x(null),ut=x(null);function Rt(t,e){switch(Z(nt,e),Z(at,t),Z(F,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?bp(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=bp(e),t=Sp(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(F),Z(F,t)}function J(){Y(F),Y(at),Y(nt)}function gt(t){t.memoizedState!==null&&Z(ut,t);var e=F.current,a=Sp(e,t.type);e!==a&&(Z(at,t),Z(F,a))}function bt(t){at.current===t&&(Y(F),Y(at)),ut.current===t&&(Y(ut),Ti._currentValue=tt)}var Tt,kt;function Yt(t){if(Tt===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Tt=e&&e[1]||"",kt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tt+t+kt}var Zt=!1;function ye(t,e){if(!t||Zt)return"";Zt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(L){var M=L}Reflect.construct(t,[],K)}else{try{K.call()}catch(L){M=L}t.call(K.prototype)}}else{try{throw Error()}catch(L){M=L}(K=t())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(L){if(L&&M&&typeof L.stack=="string")return[L.stack,M.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),c=r[0],h=r[1];if(c&&h){var S=c.split(`
`),R=h.split(`
`);for(i=n=0;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;for(;i<R.length&&!R[i].includes("DetermineComponentFrameRoot");)i++;if(n===S.length||i===R.length)for(n=S.length-1,i=R.length-1;1<=n&&0<=i&&S[n]!==R[i];)i--;for(;1<=n&&0<=i;n--,i--)if(S[n]!==R[i]){if(n!==1||i!==1)do if(n--,i--,0>i||S[n]!==R[i]){var Q=`
`+S[n].replace(" at new "," at ");return t.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",t.displayName)),Q}while(1<=n&&0<=i);break}}}finally{Zt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Yt(a):""}function Fe(t,e){switch(t.tag){case 26:case 27:case 5:return Yt(t.type);case 16:return Yt("Lazy");case 13:return t.child!==e&&e!==null?Yt("Suspense Fallback"):Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return ye(t.type,!1);case 11:return ye(t.type.render,!1);case 1:return ye(t.type,!0);case 31:return Yt("Activity");default:return""}}function la(t){try{var e="",a=null;do e+=Fe(t,a),a=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Le=Object.prototype.hasOwnProperty,pn=l.unstable_scheduleCallback,gn=l.unstable_cancelCallback,mn=l.unstable_shouldYield,Yi=l.unstable_requestPaint,xe=l.unstable_now,Wm=l.unstable_getCurrentPriorityLevel,Jc=l.unstable_ImmediatePriority,Fc=l.unstable_UserBlockingPriority,Gi=l.unstable_NormalPriority,Jm=l.unstable_LowPriority,Ic=l.unstable_IdlePriority,Fm=l.log,Im=l.unstable_setDisableYieldValue,$l=null,Oe=null;function Ha(t){if(typeof Fm=="function"&&Im(t),Oe&&typeof Oe.setStrictMode=="function")try{Oe.setStrictMode($l,t)}catch{}}var Re=Math.clz32?Math.clz32:e0,Pm=Math.log,t0=Math.LN2;function e0(t){return t>>>=0,t===0?32:31-(Pm(t)/t0|0)|0}var Qi=256,Xi=262144,Vi=4194304;function vn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zi(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var h=n&134217727;return h!==0?(n=h&~r,n!==0?i=vn(n):(c&=h,c!==0?i=vn(c):a||(a=h&~t,a!==0&&(i=vn(a))))):(h=n&~r,h!==0?i=vn(h):c!==0?i=vn(c):a||(a=n&~t,a!==0&&(i=vn(a)))),i===0?0:e!==0&&e!==i&&(e&r)===0&&(r=i&-i,a=e&-e,r>=a||r===32&&(a&4194048)!==0)?e:i}function Ll(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function a0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pc(){var t=Vi;return Vi<<=1,(Vi&62914560)===0&&(Vi=4194304),t}function qr(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function kl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function n0(t,e,a,n,i,r){var c=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var h=t.entanglements,S=t.expirationTimes,R=t.hiddenUpdates;for(a=c&~a;0<a;){var Q=31-Re(a),K=1<<Q;h[Q]=0,S[Q]=-1;var M=R[Q];if(M!==null)for(R[Q]=null,Q=0;Q<M.length;Q++){var L=M[Q];L!==null&&(L.lane&=-536870913)}a&=~K}n!==0&&tf(t,n,0),r!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=r&~(c&~e))}function tf(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-Re(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&261930}function ef(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-Re(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function af(t,e){var a=e&-e;return a=(a&42)!==0?1:Yr(a),(a&(t.suspendedLanes|e))!==0?0:a}function Yr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Gr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function nf(){var t=P.p;return t!==0?t:(t=window.event,t===void 0?32:Gp(t.type))}function lf(t,e){var a=P.p;try{return P.p=t,e()}finally{P.p=a}}var Ua=Math.random().toString(36).slice(2),de="__reactFiber$"+Ua,Ae="__reactProps$"+Ua,Gn="__reactContainer$"+Ua,Qr="__reactEvents$"+Ua,l0="__reactListeners$"+Ua,i0="__reactHandles$"+Ua,uf="__reactResources$"+Ua,ql="__reactMarker$"+Ua;function Xr(t){delete t[de],delete t[Ae],delete t[Qr],delete t[l0],delete t[i0]}function Qn(t){var e=t[de];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Gn]||a[de]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Dp(t);t!==null;){if(a=t[de])return a;t=Dp(t)}return e}t=a,a=t.parentNode}return null}function Xn(t){if(t=t[de]||t[Gn]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Yl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function Vn(t){var e=t[uf];return e||(e=t[uf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function oe(t){t[ql]=!0}var rf=new Set,of={};function yn(t,e){Zn(t,e),Zn(t+"Capture",e)}function Zn(t,e){for(of[t]=e,t=0;t<e.length;t++)rf.add(e[t])}var u0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sf={},cf={};function r0(t){return Le.call(cf,t)?!0:Le.call(sf,t)?!1:u0.test(t)?cf[t]=!0:(sf[t]=!0,!1)}function Ki(t,e,a){if(r0(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Wi(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function pa(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}function ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ff(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function o0(t,e,a){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(c){a=""+c,r.call(this,c)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vr(t){if(!t._valueTracker){var e=ff(t)?"checked":"value";t._valueTracker=o0(t,e,""+t[e])}}function df(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=ff(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function Ji(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var s0=/[\n"\\]/g;function qe(t){return t.replace(s0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Zr(t,e,a,n,i,r,c,h){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),e!=null?c==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ke(e)):t.value!==""+ke(e)&&(t.value=""+ke(e)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),e!=null?Kr(t,c,ke(e)):a!=null?Kr(t,c,ke(a)):n!=null&&t.removeAttribute("value"),i==null&&r!=null&&(t.defaultChecked=!!r),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.name=""+ke(h):t.removeAttribute("name")}function hf(t,e,a,n,i,r,c,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){Vr(t);return}a=a!=null?""+ke(a):"",e=e!=null?""+ke(e):a,h||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=h?t.checked:!!n,t.defaultChecked=!!n,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c),Vr(t)}function Kr(t,e,a){e==="number"&&Ji(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Kn(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+ke(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function pf(t,e,a){if(e!=null&&(e=""+ke(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ke(a):""}function gf(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(o(92));if(yt(n)){if(1<n.length)throw Error(o(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=ke(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n),Vr(t)}function Wn(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var c0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mf(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||c0.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function vf(t,e,a){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&mf(t,i,n)}else for(var r in e)e.hasOwnProperty(r)&&mf(t,r,e[r])}function Wr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var f0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),d0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fi(t){return d0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ga(){}var Jr=null;function Fr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jn=null,Fn=null;function yf(t){var e=Xn(t);if(e&&(t=e.stateNode)){var a=t[Ae]||null;t:switch(t=e.stateNode,e.type){case"input":if(Zr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qe(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[Ae]||null;if(!i)throw Error(o(90));Zr(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&df(n)}break t;case"textarea":pf(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Kn(t,!!a.multiple,e,!1)}}}var Ir=!1;function bf(t,e,a){if(Ir)return t(e,a);Ir=!0;try{var n=t(e);return n}finally{if(Ir=!1,(Jn!==null||Fn!==null)&&($u(),Jn&&(e=Jn,t=Fn,Fn=Jn=null,yf(e),t)))for(e=0;e<t.length;e++)yf(t[e])}}function Gl(t,e){var a=t.stateNode;if(a===null)return null;var n=a[Ae]||null;if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,e,typeof a));return a}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pr=!1;if(ma)try{var Ql={};Object.defineProperty(Ql,"passive",{get:function(){Pr=!0}}),window.addEventListener("test",Ql,Ql),window.removeEventListener("test",Ql,Ql)}catch{Pr=!1}var ja=null,to=null,Ii=null;function Sf(){if(Ii)return Ii;var t,e=to,a=e.length,n,i="value"in ja?ja.value:ja.textContent,r=i.length;for(t=0;t<a&&e[t]===i[t];t++);var c=a-t;for(n=1;n<=c&&e[a-n]===i[r-n];n++);return Ii=i.slice(t,1<n?1-n:void 0)}function Pi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tu(){return!0}function xf(){return!1}function Ee(t){function e(a,n,i,r,c){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var h in t)t.hasOwnProperty(h)&&(a=t[h],this[h]=a?a(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?tu:xf,this.isPropagationStopped=xf,this}return y(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tu)},persist:function(){},isPersistent:tu}),e}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=Ee(bn),Xl=y({},bn,{view:0,detail:0}),h0=Ee(Xl),eo,ao,Vl,au=y({},Xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vl&&(Vl&&t.type==="mousemove"?(eo=t.screenX-Vl.screenX,ao=t.screenY-Vl.screenY):ao=eo=0,Vl=t),eo)},movementY:function(t){return"movementY"in t?t.movementY:ao}}),Af=Ee(au),p0=y({},au,{dataTransfer:0}),g0=Ee(p0),m0=y({},Xl,{relatedTarget:0}),no=Ee(m0),v0=y({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),y0=Ee(v0),b0=y({},bn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),S0=Ee(b0),x0=y({},bn,{data:0}),Ef=Ee(x0),A0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=w0[t])?!!e[t]:!1}function lo(){return z0}var T0=y({},Xl,{key:function(t){if(t.key){var e=A0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?E0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lo,charCode:function(t){return t.type==="keypress"?Pi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),D0=Ee(T0),_0=y({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wf=Ee(_0),O0=y({},Xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lo}),R0=Ee(O0),C0=y({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),M0=Ee(C0),N0=y({},au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),B0=Ee(N0),H0=y({},bn,{newState:0,oldState:0}),U0=Ee(H0),j0=[9,13,27,32],io=ma&&"CompositionEvent"in window,Zl=null;ma&&"documentMode"in document&&(Zl=document.documentMode);var $0=ma&&"TextEvent"in window&&!Zl,zf=ma&&(!io||Zl&&8<Zl&&11>=Zl),Tf=" ",Df=!1;function _f(t,e){switch(t){case"keyup":return j0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Of(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var In=!1;function L0(t,e){switch(t){case"compositionend":return Of(e);case"keypress":return e.which!==32?null:(Df=!0,Tf);case"textInput":return t=e.data,t===Tf&&Df?null:t;default:return null}}function k0(t,e){if(In)return t==="compositionend"||!io&&_f(t,e)?(t=Sf(),Ii=to=ja=null,In=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zf&&e.locale!=="ko"?null:e.data;default:return null}}var q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!q0[t.type]:e==="textarea"}function Cf(t,e,a,n){Jn?Fn?Fn.push(n):Fn=[n]:Jn=n,e=Xu(e,"onChange"),0<e.length&&(a=new eu("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var Kl=null,Wl=null;function Y0(t){hp(t,0)}function nu(t){var e=Yl(t);if(df(e))return t}function Mf(t,e){if(t==="change")return e}var Nf=!1;if(ma){var uo;if(ma){var ro="oninput"in document;if(!ro){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),ro=typeof Bf.oninput=="function"}uo=ro}else uo=!1;Nf=uo&&(!document.documentMode||9<document.documentMode)}function Hf(){Kl&&(Kl.detachEvent("onpropertychange",Uf),Wl=Kl=null)}function Uf(t){if(t.propertyName==="value"&&nu(Wl)){var e=[];Cf(e,Wl,t,Fr(t)),bf(Y0,e)}}function G0(t,e,a){t==="focusin"?(Hf(),Kl=e,Wl=a,Kl.attachEvent("onpropertychange",Uf)):t==="focusout"&&Hf()}function Q0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nu(Wl)}function X0(t,e){if(t==="click")return nu(e)}function V0(t,e){if(t==="input"||t==="change")return nu(e)}function Z0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ce=typeof Object.is=="function"?Object.is:Z0;function Jl(t,e){if(Ce(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Le.call(e,i)||!Ce(t[i],e[i]))return!1}return!0}function jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $f(t,e){var a=jf(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=jf(a)}}function Lf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Lf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ji(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Ji(t.document)}return e}function oo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var K0=ma&&"documentMode"in document&&11>=document.documentMode,Pn=null,so=null,Fl=null,co=!1;function qf(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;co||Pn==null||Pn!==Ji(n)||(n=Pn,"selectionStart"in n&&oo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Fl&&Jl(Fl,n)||(Fl=n,n=Xu(so,"onSelect"),0<n.length&&(e=new eu("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=Pn)))}function Sn(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var tl={animationend:Sn("Animation","AnimationEnd"),animationiteration:Sn("Animation","AnimationIteration"),animationstart:Sn("Animation","AnimationStart"),transitionrun:Sn("Transition","TransitionRun"),transitionstart:Sn("Transition","TransitionStart"),transitioncancel:Sn("Transition","TransitionCancel"),transitionend:Sn("Transition","TransitionEnd")},fo={},Yf={};ma&&(Yf=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function xn(t){if(fo[t])return fo[t];if(!tl[t])return t;var e=tl[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Yf)return fo[t]=e[a];return t}var Gf=xn("animationend"),Qf=xn("animationiteration"),Xf=xn("animationstart"),W0=xn("transitionrun"),J0=xn("transitionstart"),F0=xn("transitioncancel"),Vf=xn("transitionend"),Zf=new Map,ho="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ho.push("scrollEnd");function Ie(t,e){Zf.set(t,e),yn(e,[t])}var lu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ye=[],el=0,po=0;function iu(){for(var t=el,e=po=el=0;e<t;){var a=Ye[e];Ye[e++]=null;var n=Ye[e];Ye[e++]=null;var i=Ye[e];Ye[e++]=null;var r=Ye[e];if(Ye[e++]=null,n!==null&&i!==null){var c=n.pending;c===null?i.next=i:(i.next=c.next,c.next=i),n.pending=i}r!==0&&Kf(a,i,r)}}function uu(t,e,a,n){Ye[el++]=t,Ye[el++]=e,Ye[el++]=a,Ye[el++]=n,po|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function go(t,e,a,n){return uu(t,e,a,n),ru(t)}function An(t,e){return uu(t,null,null,e),ru(t)}function Kf(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=t.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(i=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,i&&e!==null&&(i=31-Re(a),t=r.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),r):null}function ru(t){if(50<bi)throw bi=0,ws=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var al={};function I0(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(t,e,a,n){return new I0(t,e,a,n)}function mo(t){return t=t.prototype,!(!t||!t.isReactComponent)}function va(t,e){var a=t.alternate;return a===null?(a=Me(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Wf(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ou(t,e,a,n,i,r){var c=0;if(n=t,typeof t=="function")mo(t)&&(c=1);else if(typeof t=="string")c=ny(t,a,F.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case I:return t=Me(31,a,e,i),t.elementType=I,t.lanes=r,t;case G:return En(a.children,i,r,e);case U:c=8,i|=24;break;case _:return t=Me(12,a,e,i|2),t.elementType=_,t.lanes=r,t;case q:return t=Me(13,a,e,i),t.elementType=q,t.lanes=r,t;case X:return t=Me(19,a,e,i),t.elementType=X,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:c=10;break t;case z:c=9;break t;case B:c=11;break t;case b:c=14;break t;case H:c=16,n=null;break t}c=29,a=Error(o(130,t===null?"null":typeof t,"")),n=null}return e=Me(c,a,e,i),e.elementType=t,e.type=n,e.lanes=r,e}function En(t,e,a,n){return t=Me(7,t,n,e),t.lanes=a,t}function vo(t,e,a){return t=Me(6,t,null,e),t.lanes=a,t}function Jf(t){var e=Me(18,null,null,0);return e.stateNode=t,e}function yo(t,e,a){return e=Me(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ff=new WeakMap;function Ge(t,e){if(typeof t=="object"&&t!==null){var a=Ff.get(t);return a!==void 0?a:(e={value:t,source:e,stack:la(e)},Ff.set(t,e),e)}return{value:t,source:e,stack:la(e)}}var nl=[],ll=0,su=null,Il=0,Qe=[],Xe=0,$a=null,ia=1,ua="";function ya(t,e){nl[ll++]=Il,nl[ll++]=su,su=t,Il=e}function If(t,e,a){Qe[Xe++]=ia,Qe[Xe++]=ua,Qe[Xe++]=$a,$a=t;var n=ia;t=ua;var i=32-Re(n)-1;n&=~(1<<i),a+=1;var r=32-Re(e)+i;if(30<r){var c=i-i%5;r=(n&(1<<c)-1).toString(32),n>>=c,i-=c,ia=1<<32-Re(e)+i|a<<i|n,ua=r+t}else ia=1<<r|a<<i|n,ua=t}function bo(t){t.return!==null&&(ya(t,1),If(t,1,0))}function So(t){for(;t===su;)su=nl[--ll],nl[ll]=null,Il=nl[--ll],nl[ll]=null;for(;t===$a;)$a=Qe[--Xe],Qe[Xe]=null,ua=Qe[--Xe],Qe[Xe]=null,ia=Qe[--Xe],Qe[Xe]=null}function Pf(t,e){Qe[Xe++]=ia,Qe[Xe++]=ua,Qe[Xe++]=$a,ia=e.id,ua=e.overflow,$a=t}var he=null,Gt=null,Ot=!1,La=null,Ve=!1,xo=Error(o(519));function ka(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pl(Ge(e,t)),xo}function td(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[de]=t,e[Ae]=n,a){case"dialog":zt("cancel",e),zt("close",e);break;case"iframe":case"object":case"embed":zt("load",e);break;case"video":case"audio":for(a=0;a<xi.length;a++)zt(xi[a],e);break;case"source":zt("error",e);break;case"img":case"image":case"link":zt("error",e),zt("load",e);break;case"details":zt("toggle",e);break;case"input":zt("invalid",e),hf(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":zt("invalid",e);break;case"textarea":zt("invalid",e),gf(e,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||vp(e.textContent,a)?(n.popover!=null&&(zt("beforetoggle",e),zt("toggle",e)),n.onScroll!=null&&zt("scroll",e),n.onScrollEnd!=null&&zt("scrollend",e),n.onClick!=null&&(e.onclick=ga),e=!0):e=!1,e||ka(t,!0)}function ed(t){for(he=t.return;he;)switch(he.tag){case 5:case 31:case 13:Ve=!1;return;case 27:case 3:Ve=!0;return;default:he=he.return}}function il(t){if(t!==he)return!1;if(!Ot)return ed(t),Ot=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ls(t.type,t.memoizedProps)),a=!a),a&&Gt&&ka(t),ed(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Gt=Tp(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Gt=Tp(t)}else e===27?(e=Gt,tn(t.type)?(t=Qs,Qs=null,Gt=t):Gt=e):Gt=he?Ke(t.stateNode.nextSibling):null;return!0}function wn(){Gt=he=null,Ot=!1}function Ao(){var t=La;return t!==null&&(De===null?De=t:De.push.apply(De,t),La=null),t}function Pl(t){La===null?La=[t]:La.push(t)}var Eo=x(null),zn=null,ba=null;function qa(t,e,a){Z(Eo,e._currentValue),e._currentValue=a}function Sa(t){t._currentValue=Eo.current,Y(Eo)}function wo(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function zo(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var r=i.dependencies;if(r!==null){var c=i.child;r=r.firstContext;t:for(;r!==null;){var h=r;r=i;for(var S=0;S<e.length;S++)if(h.context===e[S]){r.lanes|=a,h=r.alternate,h!==null&&(h.lanes|=a),wo(r.return,a,t),n||(c=null);break t}r=h.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(o(341));c.lanes|=a,r=c.alternate,r!==null&&(r.lanes|=a),wo(c,a,t),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===t){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function ul(t,e,a,n){t=null;for(var i=e,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var h=i.type;Ce(i.pendingProps.value,c.value)||(t!==null?t.push(h):t=[h])}}else if(i===ut.current){if(c=i.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Ti):t=[Ti])}i=i.return}t!==null&&zo(e,t,a,n),e.flags|=262144}function cu(t){for(t=t.firstContext;t!==null;){if(!Ce(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Tn(t){zn=t,ba=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function pe(t){return ad(zn,t)}function fu(t,e){return zn===null&&Tn(t),ad(t,e)}function ad(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},ba===null){if(t===null)throw Error(o(308));ba=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ba=ba.next=e;return a}var P0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},tv=l.unstable_scheduleCallback,ev=l.unstable_NormalPriority,te={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function To(){return{controller:new P0,data:new Map,refCount:0}}function ti(t){t.refCount--,t.refCount===0&&tv(ev,function(){t.controller.abort()})}var ei=null,Do=0,rl=0,ol=null;function av(t,e){if(ei===null){var a=ei=[];Do=0,rl=Rs(),ol={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Do++,e.then(nd,nd),e}function nd(){if(--Do===0&&ei!==null){ol!==null&&(ol.status="fulfilled");var t=ei;ei=null,rl=0,ol=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function nv(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var ld=N.S;N.S=function(t,e){qh=xe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&av(t,e),ld!==null&&ld(t,e)};var Dn=x(null);function _o(){var t=Dn.current;return t!==null?t:qt.pooledCache}function du(t,e){e===null?Z(Dn,Dn.current):Z(Dn,e.pool)}function id(){var t=_o();return t===null?null:{parent:te._currentValue,pool:t}}var sl=Error(o(460)),Oo=Error(o(474)),hu=Error(o(542)),pu={then:function(){}};function ud(t){return t=t.status,t==="fulfilled"||t==="rejected"}function rd(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(ga,ga),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,sd(t),t;default:if(typeof e.status=="string")e.then(ga,ga);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,sd(t),t}throw On=e,sl}}function _n(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(On=a,sl):a}}var On=null;function od(){if(On===null)throw Error(o(459));var t=On;return On=null,t}function sd(t){if(t===sl||t===hu)throw Error(o(483))}var cl=null,ai=0;function gu(t){var e=ai;return ai+=1,cl===null&&(cl=[]),rd(cl,t,e)}function ni(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function mu(t,e){throw e.$$typeof===T?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function cd(t){function e(D,A){if(t){var O=D.deletions;O===null?(D.deletions=[A],D.flags|=16):O.push(A)}}function a(D,A){if(!t)return null;for(;A!==null;)e(D,A),A=A.sibling;return null}function n(D){for(var A=new Map;D!==null;)D.key!==null?A.set(D.key,D):A.set(D.index,D),D=D.sibling;return A}function i(D,A){return D=va(D,A),D.index=0,D.sibling=null,D}function r(D,A,O){return D.index=O,t?(O=D.alternate,O!==null?(O=O.index,O<A?(D.flags|=67108866,A):O):(D.flags|=67108866,A)):(D.flags|=1048576,A)}function c(D){return t&&D.alternate===null&&(D.flags|=67108866),D}function h(D,A,O,V){return A===null||A.tag!==6?(A=vo(O,D.mode,V),A.return=D,A):(A=i(A,O),A.return=D,A)}function S(D,A,O,V){var dt=O.type;return dt===G?Q(D,A,O.props.children,V,O.key):A!==null&&(A.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===H&&_n(dt)===A.type)?(A=i(A,O.props),ni(A,O),A.return=D,A):(A=ou(O.type,O.key,O.props,null,D.mode,V),ni(A,O),A.return=D,A)}function R(D,A,O,V){return A===null||A.tag!==4||A.stateNode.containerInfo!==O.containerInfo||A.stateNode.implementation!==O.implementation?(A=yo(O,D.mode,V),A.return=D,A):(A=i(A,O.children||[]),A.return=D,A)}function Q(D,A,O,V,dt){return A===null||A.tag!==7?(A=En(O,D.mode,V,dt),A.return=D,A):(A=i(A,O),A.return=D,A)}function K(D,A,O){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=vo(""+A,D.mode,O),A.return=D,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case C:return O=ou(A.type,A.key,A.props,null,D.mode,O),ni(O,A),O.return=D,O;case $:return A=yo(A,D.mode,O),A.return=D,A;case H:return A=_n(A),K(D,A,O)}if(yt(A)||et(A))return A=En(A,D.mode,O,null),A.return=D,A;if(typeof A.then=="function")return K(D,gu(A),O);if(A.$$typeof===w)return K(D,fu(D,A),O);mu(D,A)}return null}function M(D,A,O,V){var dt=A!==null?A.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return dt!==null?null:h(D,A,""+O,V);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case C:return O.key===dt?S(D,A,O,V):null;case $:return O.key===dt?R(D,A,O,V):null;case H:return O=_n(O),M(D,A,O,V)}if(yt(O)||et(O))return dt!==null?null:Q(D,A,O,V,null);if(typeof O.then=="function")return M(D,A,gu(O),V);if(O.$$typeof===w)return M(D,A,fu(D,O),V);mu(D,O)}return null}function L(D,A,O,V,dt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return D=D.get(O)||null,h(A,D,""+V,dt);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case C:return D=D.get(V.key===null?O:V.key)||null,S(A,D,V,dt);case $:return D=D.get(V.key===null?O:V.key)||null,R(A,D,V,dt);case H:return V=_n(V),L(D,A,O,V,dt)}if(yt(V)||et(V))return D=D.get(O)||null,Q(A,D,V,dt,null);if(typeof V.then=="function")return L(D,A,O,gu(V),dt);if(V.$$typeof===w)return L(D,A,O,fu(A,V),dt);mu(A,V)}return null}function rt(D,A,O,V){for(var dt=null,Ct=null,ct=A,At=A=0,_t=null;ct!==null&&At<O.length;At++){ct.index>At?(_t=ct,ct=null):_t=ct.sibling;var Mt=M(D,ct,O[At],V);if(Mt===null){ct===null&&(ct=_t);break}t&&ct&&Mt.alternate===null&&e(D,ct),A=r(Mt,A,At),Ct===null?dt=Mt:Ct.sibling=Mt,Ct=Mt,ct=_t}if(At===O.length)return a(D,ct),Ot&&ya(D,At),dt;if(ct===null){for(;At<O.length;At++)ct=K(D,O[At],V),ct!==null&&(A=r(ct,A,At),Ct===null?dt=ct:Ct.sibling=ct,Ct=ct);return Ot&&ya(D,At),dt}for(ct=n(ct);At<O.length;At++)_t=L(ct,D,At,O[At],V),_t!==null&&(t&&_t.alternate!==null&&ct.delete(_t.key===null?At:_t.key),A=r(_t,A,At),Ct===null?dt=_t:Ct.sibling=_t,Ct=_t);return t&&ct.forEach(function(un){return e(D,un)}),Ot&&ya(D,At),dt}function pt(D,A,O,V){if(O==null)throw Error(o(151));for(var dt=null,Ct=null,ct=A,At=A=0,_t=null,Mt=O.next();ct!==null&&!Mt.done;At++,Mt=O.next()){ct.index>At?(_t=ct,ct=null):_t=ct.sibling;var un=M(D,ct,Mt.value,V);if(un===null){ct===null&&(ct=_t);break}t&&ct&&un.alternate===null&&e(D,ct),A=r(un,A,At),Ct===null?dt=un:Ct.sibling=un,Ct=un,ct=_t}if(Mt.done)return a(D,ct),Ot&&ya(D,At),dt;if(ct===null){for(;!Mt.done;At++,Mt=O.next())Mt=K(D,Mt.value,V),Mt!==null&&(A=r(Mt,A,At),Ct===null?dt=Mt:Ct.sibling=Mt,Ct=Mt);return Ot&&ya(D,At),dt}for(ct=n(ct);!Mt.done;At++,Mt=O.next())Mt=L(ct,D,At,Mt.value,V),Mt!==null&&(t&&Mt.alternate!==null&&ct.delete(Mt.key===null?At:Mt.key),A=r(Mt,A,At),Ct===null?dt=Mt:Ct.sibling=Mt,Ct=Mt);return t&&ct.forEach(function(py){return e(D,py)}),Ot&&ya(D,At),dt}function Lt(D,A,O,V){if(typeof O=="object"&&O!==null&&O.type===G&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case C:t:{for(var dt=O.key;A!==null;){if(A.key===dt){if(dt=O.type,dt===G){if(A.tag===7){a(D,A.sibling),V=i(A,O.props.children),V.return=D,D=V;break t}}else if(A.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===H&&_n(dt)===A.type){a(D,A.sibling),V=i(A,O.props),ni(V,O),V.return=D,D=V;break t}a(D,A);break}else e(D,A);A=A.sibling}O.type===G?(V=En(O.props.children,D.mode,V,O.key),V.return=D,D=V):(V=ou(O.type,O.key,O.props,null,D.mode,V),ni(V,O),V.return=D,D=V)}return c(D);case $:t:{for(dt=O.key;A!==null;){if(A.key===dt)if(A.tag===4&&A.stateNode.containerInfo===O.containerInfo&&A.stateNode.implementation===O.implementation){a(D,A.sibling),V=i(A,O.children||[]),V.return=D,D=V;break t}else{a(D,A);break}else e(D,A);A=A.sibling}V=yo(O,D.mode,V),V.return=D,D=V}return c(D);case H:return O=_n(O),Lt(D,A,O,V)}if(yt(O))return rt(D,A,O,V);if(et(O)){if(dt=et(O),typeof dt!="function")throw Error(o(150));return O=dt.call(O),pt(D,A,O,V)}if(typeof O.then=="function")return Lt(D,A,gu(O),V);if(O.$$typeof===w)return Lt(D,A,fu(D,O),V);mu(D,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,A!==null&&A.tag===6?(a(D,A.sibling),V=i(A,O),V.return=D,D=V):(a(D,A),V=vo(O,D.mode,V),V.return=D,D=V),c(D)):a(D,A)}return function(D,A,O,V){try{ai=0;var dt=Lt(D,A,O,V);return cl=null,dt}catch(ct){if(ct===sl||ct===hu)throw ct;var Ct=Me(29,ct,null,D.mode);return Ct.lanes=V,Ct.return=D,Ct}finally{}}}var Rn=cd(!0),fd=cd(!1),Ya=!1;function Ro(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Co(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(Nt&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=ru(t),Kf(t,null,a),e}return uu(t,n,e,a),ru(t)}function li(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,ef(t,a)}}function Mo(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=c:r=r.next=c,a=a.next}while(a!==null);r===null?i=r=e:r=r.next=e}else i=r=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var No=!1;function ii(){if(No){var t=ol;if(t!==null)throw t}}function ui(t,e,a,n){No=!1;var i=t.updateQueue;Ya=!1;var r=i.firstBaseUpdate,c=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var S=h,R=S.next;S.next=null,c===null?r=R:c.next=R,c=S;var Q=t.alternate;Q!==null&&(Q=Q.updateQueue,h=Q.lastBaseUpdate,h!==c&&(h===null?Q.firstBaseUpdate=R:h.next=R,Q.lastBaseUpdate=S))}if(r!==null){var K=i.baseState;c=0,Q=R=S=null,h=r;do{var M=h.lane&-536870913,L=M!==h.lane;if(L?(Dt&M)===M:(n&M)===M){M!==0&&M===rl&&(No=!0),Q!==null&&(Q=Q.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});t:{var rt=t,pt=h;M=e;var Lt=a;switch(pt.tag){case 1:if(rt=pt.payload,typeof rt=="function"){K=rt.call(Lt,K,M);break t}K=rt;break t;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=pt.payload,M=typeof rt=="function"?rt.call(Lt,K,M):rt,M==null)break t;K=y({},K,M);break t;case 2:Ya=!0}}M=h.callback,M!==null&&(t.flags|=64,L&&(t.flags|=8192),L=i.callbacks,L===null?i.callbacks=[M]:L.push(M))}else L={lane:M,tag:h.tag,payload:h.payload,callback:h.callback,next:null},Q===null?(R=Q=L,S=K):Q=Q.next=L,c|=M;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;L=h,h=L.next,L.next=null,i.lastBaseUpdate=L,i.shared.pending=null}}while(!0);Q===null&&(S=K),i.baseState=S,i.firstBaseUpdate=R,i.lastBaseUpdate=Q,r===null&&(i.shared.lanes=0),Wa|=c,t.lanes=c,t.memoizedState=K}}function dd(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function hd(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)dd(a[t],e)}var fl=x(null),vu=x(0);function pd(t,e){t=Oa,Z(vu,t),Z(fl,e),Oa=t|e.baseLanes}function Bo(){Z(vu,Oa),Z(fl,fl.current)}function Ho(){Oa=vu.current,Y(fl),Y(vu)}var Ne=x(null),Ze=null;function Xa(t){var e=t.alternate;Z(Ft,Ft.current&1),Z(Ne,t),Ze===null&&(e===null||fl.current!==null||e.memoizedState!==null)&&(Ze=t)}function Uo(t){Z(Ft,Ft.current),Z(Ne,t),Ze===null&&(Ze=t)}function gd(t){t.tag===22?(Z(Ft,Ft.current),Z(Ne,t),Ze===null&&(Ze=t)):Va()}function Va(){Z(Ft,Ft.current),Z(Ne,Ne.current)}function Be(t){Y(Ne),Ze===t&&(Ze=null),Y(Ft)}var Ft=x(0);function yu(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ys(a)||Gs(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xa=0,St=null,jt=null,ee=null,bu=!1,dl=!1,Cn=!1,Su=0,ri=0,hl=null,lv=0;function Kt(){throw Error(o(321))}function jo(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Ce(t[a],e[a]))return!1;return!0}function $o(t,e,a,n,i,r){return xa=r,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,N.H=t===null||t.memoizedState===null?Id:Po,Cn=!1,r=a(n,i),Cn=!1,dl&&(r=vd(e,a,n,i)),md(t),r}function md(t){N.H=ci;var e=jt!==null&&jt.next!==null;if(xa=0,ee=jt=St=null,bu=!1,ri=0,hl=null,e)throw Error(o(300));t===null||ae||(t=t.dependencies,t!==null&&cu(t)&&(ae=!0))}function vd(t,e,a,n){St=t;var i=0;do{if(dl&&(hl=null),ri=0,dl=!1,25<=i)throw Error(o(301));if(i+=1,ee=jt=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}N.H=Pd,r=e(a,n)}while(dl);return r}function iv(){var t=N.H,e=t.useState()[0];return e=typeof e.then=="function"?oi(e):e,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(St.flags|=1024),e}function Lo(){var t=Su!==0;return Su=0,t}function ko(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function qo(t){if(bu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}bu=!1}xa=0,ee=jt=St=null,dl=!1,ri=Su=0,hl=null}function Se(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?St.memoizedState=ee=t:ee=ee.next=t,ee}function It(){if(jt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var e=ee===null?St.memoizedState:ee.next;if(e!==null)ee=e,jt=t;else{if(t===null)throw St.alternate===null?Error(o(467)):Error(o(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},ee===null?St.memoizedState=ee=t:ee=ee.next=t}return ee}function xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oi(t){var e=ri;return ri+=1,hl===null&&(hl=[]),t=rd(hl,t,e),e=St,(ee===null?e.memoizedState:ee.next)===null&&(e=e.alternate,N.H=e===null||e.memoizedState===null?Id:Po),t}function Au(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return oi(t);if(t.$$typeof===w)return pe(t)}throw Error(o(438,String(t)))}function Yo(t){var e=null,a=St.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=St.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=xu(),St.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=st;return e.index++,a}function Aa(t,e){return typeof e=="function"?e(t):e}function Eu(t){var e=It();return Go(e,jt,t)}function Go(t,e,a){var n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=a;var i=t.baseQueue,r=n.pending;if(r!==null){if(i!==null){var c=i.next;i.next=r.next,r.next=c}e.baseQueue=i=r,n.pending=null}if(r=t.baseState,i===null)t.memoizedState=r;else{e=i.next;var h=c=null,S=null,R=e,Q=!1;do{var K=R.lane&-536870913;if(K!==R.lane?(Dt&K)===K:(xa&K)===K){var M=R.revertLane;if(M===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),K===rl&&(Q=!0);else if((xa&M)===M){R=R.next,M===rl&&(Q=!0);continue}else K={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},S===null?(h=S=K,c=r):S=S.next=K,St.lanes|=M,Wa|=M;K=R.action,Cn&&a(r,K),r=R.hasEagerState?R.eagerState:a(r,K)}else M={lane:K,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},S===null?(h=S=M,c=r):S=S.next=M,St.lanes|=K,Wa|=K;R=R.next}while(R!==null&&R!==e);if(S===null?c=r:S.next=h,!Ce(r,t.memoizedState)&&(ae=!0,Q&&(a=ol,a!==null)))throw a;t.memoizedState=r,t.baseState=c,t.baseQueue=S,n.lastRenderedState=r}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Qo(t){var e=It(),a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,r=e.memoizedState;if(i!==null){a.pending=null;var c=i=i.next;do r=t(r,c.action),c=c.next;while(c!==i);Ce(r,e.memoizedState)||(ae=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),a.lastRenderedState=r}return[r,n]}function yd(t,e,a){var n=St,i=It(),r=Ot;if(r){if(a===void 0)throw Error(o(407));a=a()}else a=e();var c=!Ce((jt||i).memoizedState,a);if(c&&(i.memoizedState=a,ae=!0),i=i.queue,Zo(xd.bind(null,n,i,t),[t]),i.getSnapshot!==e||c||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,pl(9,{destroy:void 0},Sd.bind(null,n,i,a,e),null),qt===null)throw Error(o(349));r||(xa&127)!==0||bd(n,e,a)}return a}function bd(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=St.updateQueue,e===null?(e=xu(),St.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Sd(t,e,a,n){e.value=a,e.getSnapshot=n,Ad(e)&&Ed(t)}function xd(t,e,a){return a(function(){Ad(e)&&Ed(t)})}function Ad(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Ce(t,a)}catch{return!0}}function Ed(t){var e=An(t,2);e!==null&&_e(e,t,2)}function Xo(t){var e=Se();if(typeof t=="function"){var a=t;if(t=a(),Cn){Ha(!0);try{a()}finally{Ha(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:t},e}function wd(t,e,a,n){return t.baseState=a,Go(t,jt,typeof n=="function"?n:Aa)}function uv(t,e,a,n,i){if(Tu(t))throw Error(o(485));if(t=e.action,t!==null){var r={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){r.listeners.push(c)}};N.T!==null?a(!0):r.isTransition=!1,n(r),a=e.pending,a===null?(r.next=e.pending=r,zd(e,r)):(r.next=a.next,e.pending=a.next=r)}}function zd(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var r=N.T,c={};N.T=c;try{var h=a(i,n),S=N.S;S!==null&&S(c,h),Td(t,e,h)}catch(R){Vo(t,e,R)}finally{r!==null&&c.types!==null&&(r.types=c.types),N.T=r}}else try{r=a(i,n),Td(t,e,r)}catch(R){Vo(t,e,R)}}function Td(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Dd(t,e,n)},function(n){return Vo(t,e,n)}):Dd(t,e,a)}function Dd(t,e,a){e.status="fulfilled",e.value=a,_d(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,zd(t,a)))}function Vo(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,_d(e),e=e.next;while(e!==n)}t.action=null}function _d(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Od(t,e){return e}function Rd(t,e){if(Ot){var a=qt.formState;if(a!==null){t:{var n=St;if(Ot){if(Gt){e:{for(var i=Gt,r=Ve;i.nodeType!==8;){if(!r){i=null;break e}if(i=Ke(i.nextSibling),i===null){i=null;break e}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Gt=Ke(i.nextSibling),n=i.data==="F!";break t}}ka(n)}n=!1}n&&(e=a[0])}}return a=Se(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Od,lastRenderedState:e},a.queue=n,a=Wd.bind(null,St,n),n.dispatch=a,n=Xo(!1),r=Io.bind(null,St,!1,n.queue),n=Se(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=uv.bind(null,St,i,r,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function Cd(t){var e=It();return Md(e,jt,t)}function Md(t,e,a){if(e=Go(t,e,Od)[0],t=Eu(Aa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=oi(e)}catch(c){throw c===sl?hu:c}else n=e;e=It();var i=e.queue,r=i.dispatch;return a!==e.memoizedState&&(St.flags|=2048,pl(9,{destroy:void 0},rv.bind(null,i,a),null)),[n,r,t]}function rv(t,e){t.action=e}function Nd(t){var e=It(),a=jt;if(a!==null)return Md(e,a,t);It(),e=e.memoizedState,a=It();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function pl(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=St.updateQueue,e===null&&(e=xu(),St.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function Bd(){return It().memoizedState}function wu(t,e,a,n){var i=Se();St.flags|=t,i.memoizedState=pl(1|e,{destroy:void 0},a,n===void 0?null:n)}function zu(t,e,a,n){var i=It();n=n===void 0?null:n;var r=i.memoizedState.inst;jt!==null&&n!==null&&jo(n,jt.memoizedState.deps)?i.memoizedState=pl(e,r,a,n):(St.flags|=t,i.memoizedState=pl(1|e,r,a,n))}function Hd(t,e){wu(8390656,8,t,e)}function Zo(t,e){zu(2048,8,t,e)}function ov(t){St.flags|=4;var e=St.updateQueue;if(e===null)e=xu(),St.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function Ud(t){var e=It().memoizedState;return ov({ref:e,nextImpl:t}),function(){if((Nt&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function jd(t,e){return zu(4,2,t,e)}function $d(t,e){return zu(4,4,t,e)}function Ld(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kd(t,e,a){a=a!=null?a.concat([t]):null,zu(4,4,Ld.bind(null,e,t),a)}function Ko(){}function qd(t,e){var a=It();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&jo(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function Yd(t,e){var a=It();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&jo(e,n[1]))return n[0];if(n=t(),Cn){Ha(!0);try{t()}finally{Ha(!1)}}return a.memoizedState=[n,e],n}function Wo(t,e,a){return a===void 0||(xa&1073741824)!==0&&(Dt&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=Gh(),St.lanes|=t,Wa|=t,a)}function Gd(t,e,a,n){return Ce(a,e)?a:fl.current!==null?(t=Wo(t,a,n),Ce(t,e)||(ae=!0),t):(xa&42)===0||(xa&1073741824)!==0&&(Dt&261930)===0?(ae=!0,t.memoizedState=a):(t=Gh(),St.lanes|=t,Wa|=t,e)}function Qd(t,e,a,n,i){var r=P.p;P.p=r!==0&&8>r?r:8;var c=N.T,h={};N.T=h,Io(t,!1,e,a);try{var S=i(),R=N.S;if(R!==null&&R(h,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var Q=nv(S,n);si(t,e,Q,je(t))}else si(t,e,n,je(t))}catch(K){si(t,e,{then:function(){},status:"rejected",reason:K},je())}finally{P.p=r,c!==null&&h.types!==null&&(c.types=h.types),N.T=c}}function sv(){}function Jo(t,e,a,n){if(t.tag!==5)throw Error(o(476));var i=Xd(t).queue;Qd(t,i,e,tt,a===null?sv:function(){return Vd(t),a(n)})}function Xd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:tt},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Vd(t){var e=Xd(t);e.next===null&&(e=t.alternate.memoizedState),si(t,e.next.queue,{},je())}function Fo(){return pe(Ti)}function Zd(){return It().memoizedState}function Kd(){return It().memoizedState}function cv(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=je();t=Ga(a);var n=Qa(e,t,a);n!==null&&(_e(n,e,a),li(n,e,a)),e={cache:To()},t.payload=e;return}e=e.return}}function fv(t,e,a){var n=je();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tu(t)?Jd(e,a):(a=go(t,e,a,n),a!==null&&(_e(a,t,n),Fd(a,e,n)))}function Wd(t,e,a){var n=je();si(t,e,a,n)}function si(t,e,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tu(t))Jd(e,i);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var c=e.lastRenderedState,h=r(c,a);if(i.hasEagerState=!0,i.eagerState=h,Ce(h,c))return uu(t,e,i,0),qt===null&&iu(),!1}catch{}finally{}if(a=go(t,e,i,n),a!==null)return _e(a,t,n),Fd(a,e,n),!0}return!1}function Io(t,e,a,n){if(n={lane:2,revertLane:Rs(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Tu(t)){if(e)throw Error(o(479))}else e=go(t,a,n,2),e!==null&&_e(e,t,2)}function Tu(t){var e=t.alternate;return t===St||e!==null&&e===St}function Jd(t,e){dl=bu=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Fd(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,ef(t,a)}}var ci={readContext:pe,use:Au,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useLayoutEffect:Kt,useInsertionEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useSyncExternalStore:Kt,useId:Kt,useHostTransitionStatus:Kt,useFormState:Kt,useActionState:Kt,useOptimistic:Kt,useMemoCache:Kt,useCacheRefresh:Kt};ci.useEffectEvent=Kt;var Id={readContext:pe,use:Au,useCallback:function(t,e){return Se().memoizedState=[t,e===void 0?null:e],t},useContext:pe,useEffect:Hd,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,wu(4194308,4,Ld.bind(null,e,t),a)},useLayoutEffect:function(t,e){return wu(4194308,4,t,e)},useInsertionEffect:function(t,e){wu(4,2,t,e)},useMemo:function(t,e){var a=Se();e=e===void 0?null:e;var n=t();if(Cn){Ha(!0);try{t()}finally{Ha(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=Se();if(a!==void 0){var i=a(e);if(Cn){Ha(!0);try{a(e)}finally{Ha(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=fv.bind(null,St,t),[n.memoizedState,t]},useRef:function(t){var e=Se();return t={current:t},e.memoizedState=t},useState:function(t){t=Xo(t);var e=t.queue,a=Wd.bind(null,St,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Ko,useDeferredValue:function(t,e){var a=Se();return Wo(a,t,e)},useTransition:function(){var t=Xo(!1);return t=Qd.bind(null,St,t.queue,!0,!1),Se().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=St,i=Se();if(Ot){if(a===void 0)throw Error(o(407));a=a()}else{if(a=e(),qt===null)throw Error(o(349));(Dt&127)!==0||bd(n,e,a)}i.memoizedState=a;var r={value:a,getSnapshot:e};return i.queue=r,Hd(xd.bind(null,n,r,t),[t]),n.flags|=2048,pl(9,{destroy:void 0},Sd.bind(null,n,r,a,e),null),a},useId:function(){var t=Se(),e=qt.identifierPrefix;if(Ot){var a=ua,n=ia;a=(n&~(1<<32-Re(n)-1)).toString(32)+a,e="_"+e+"R_"+a,a=Su++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=lv++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Fo,useFormState:Rd,useActionState:Rd,useOptimistic:function(t){var e=Se();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Io.bind(null,St,!0,a),a.dispatch=e,[t,e]},useMemoCache:Yo,useCacheRefresh:function(){return Se().memoizedState=cv.bind(null,St)},useEffectEvent:function(t){var e=Se(),a={impl:t};return e.memoizedState=a,function(){if((Nt&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Po={readContext:pe,use:Au,useCallback:qd,useContext:pe,useEffect:Zo,useImperativeHandle:kd,useInsertionEffect:jd,useLayoutEffect:$d,useMemo:Yd,useReducer:Eu,useRef:Bd,useState:function(){return Eu(Aa)},useDebugValue:Ko,useDeferredValue:function(t,e){var a=It();return Gd(a,jt.memoizedState,t,e)},useTransition:function(){var t=Eu(Aa)[0],e=It().memoizedState;return[typeof t=="boolean"?t:oi(t),e]},useSyncExternalStore:yd,useId:Zd,useHostTransitionStatus:Fo,useFormState:Cd,useActionState:Cd,useOptimistic:function(t,e){var a=It();return wd(a,jt,t,e)},useMemoCache:Yo,useCacheRefresh:Kd};Po.useEffectEvent=Ud;var Pd={readContext:pe,use:Au,useCallback:qd,useContext:pe,useEffect:Zo,useImperativeHandle:kd,useInsertionEffect:jd,useLayoutEffect:$d,useMemo:Yd,useReducer:Qo,useRef:Bd,useState:function(){return Qo(Aa)},useDebugValue:Ko,useDeferredValue:function(t,e){var a=It();return jt===null?Wo(a,t,e):Gd(a,jt.memoizedState,t,e)},useTransition:function(){var t=Qo(Aa)[0],e=It().memoizedState;return[typeof t=="boolean"?t:oi(t),e]},useSyncExternalStore:yd,useId:Zd,useHostTransitionStatus:Fo,useFormState:Nd,useActionState:Nd,useOptimistic:function(t,e){var a=It();return jt!==null?wd(a,jt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Yo,useCacheRefresh:Kd};Pd.useEffectEvent=Ud;function ts(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:y({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var es={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=je(),i=Ga(n);i.payload=e,a!=null&&(i.callback=a),e=Qa(t,i,n),e!==null&&(_e(e,t,n),li(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=je(),i=Ga(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=Qa(t,i,n),e!==null&&(_e(e,t,n),li(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=je(),n=Ga(a);n.tag=2,e!=null&&(n.callback=e),e=Qa(t,n,a),e!==null&&(_e(e,t,a),li(e,t,a))}};function th(t,e,a,n,i,r,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,r,c):e.prototype&&e.prototype.isPureReactComponent?!Jl(a,n)||!Jl(i,r):!0}function eh(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&es.enqueueReplaceState(e,e.state,null)}function Mn(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=y({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}function ah(t){lu(t)}function nh(t){console.error(t)}function lh(t){lu(t)}function Du(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function ih(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function as(t,e,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Du(t,e)},a}function uh(t){return t=Ga(t),t.tag=3,t}function rh(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;t.payload=function(){return i(r)},t.callback=function(){ih(e,a,n)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){ih(e,a,n),typeof i!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})})}function dv(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&ul(e,a,i,!0),a=Ne.current,a!==null){switch(a.tag){case 31:case 13:return Ze===null?Lu():a.alternate===null&&Wt===0&&(Wt=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===pu?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),Ds(t,n,i)),!1;case 22:return a.flags|=65536,n===pu?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),Ds(t,n,i)),!1}throw Error(o(435,a.tag))}return Ds(t,n,i),Lu(),!1}if(Ot)return e=Ne.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==xo&&(t=Error(o(422),{cause:n}),Pl(Ge(t,a)))):(n!==xo&&(e=Error(o(423),{cause:n}),Pl(Ge(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=Ge(n,a),i=as(t.stateNode,n,i),Mo(t,i),Wt!==4&&(Wt=2)),!1;var r=Error(o(520),{cause:n});if(r=Ge(r,a),yi===null?yi=[r]:yi.push(r),Wt!==4&&(Wt=2),e===null)return!0;n=Ge(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=as(a.stateNode,n,t),Mo(a,t),!1;case 1:if(e=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ja===null||!Ja.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=uh(i),rh(i,t,a,n),Mo(a,i),!1}a=a.return}while(a!==null);return!1}var ns=Error(o(461)),ae=!1;function ge(t,e,a,n){e.child=t===null?fd(e,null,a,n):Rn(e,t.child,a,n)}function oh(t,e,a,n,i){a=a.render;var r=e.ref;if("ref"in n){var c={};for(var h in n)h!=="ref"&&(c[h]=n[h])}else c=n;return Tn(e),n=$o(t,e,a,c,r,i),h=Lo(),t!==null&&!ae?(ko(t,e,i),Ea(t,e,i)):(Ot&&h&&bo(e),e.flags|=1,ge(t,e,n,i),e.child)}function sh(t,e,a,n,i){if(t===null){var r=a.type;return typeof r=="function"&&!mo(r)&&r.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=r,ch(t,e,r,n,i)):(t=ou(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!fs(t,i)){var c=r.memoizedProps;if(a=a.compare,a=a!==null?a:Jl,a(c,n)&&t.ref===e.ref)return Ea(t,e,i)}return e.flags|=1,t=va(r,n),t.ref=e.ref,t.return=e,e.child=t}function ch(t,e,a,n,i){if(t!==null){var r=t.memoizedProps;if(Jl(r,n)&&t.ref===e.ref)if(ae=!1,e.pendingProps=n=r,fs(t,i))(t.flags&131072)!==0&&(ae=!0);else return e.lanes=t.lanes,Ea(t,e,i)}return ls(t,e,a,n,i)}function fh(t,e,a,n){var i=n.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,t!==null){for(n=e.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~r}else n=0,e.child=null;return dh(t,e,r,a,n)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&du(e,r!==null?r.cachePool:null),r!==null?pd(e,r):Bo(),gd(e);else return n=e.lanes=536870912,dh(t,e,r!==null?r.baseLanes|a:a,a,n)}else r!==null?(du(e,r.cachePool),pd(e,r),Va(),e.memoizedState=null):(t!==null&&du(e,null),Bo(),Va());return ge(t,e,i,a),e.child}function fi(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function dh(t,e,a,n,i){var r=_o();return r=r===null?null:{parent:te._currentValue,pool:r},e.memoizedState={baseLanes:a,cachePool:r},t!==null&&du(e,null),Bo(),gd(e),t!==null&&ul(t,e,n,!0),e.childLanes=i,null}function _u(t,e){return e=Ru({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function hh(t,e,a){return Rn(e,t.child,null,a),t=_u(e,e.pendingProps),t.flags|=2,Be(e),e.memoizedState=null,t}function hv(t,e,a){var n=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Ot){if(n.mode==="hidden")return t=_u(e,n),e.lanes=536870912,fi(null,t);if(Uo(e),(t=Gt)?(t=zp(t,Ve),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:$a!==null?{id:ia,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},a=Jf(t),a.return=e,e.child=a,he=e,Gt=null)):t=null,t===null)throw ka(e);return e.lanes=536870912,null}return _u(e,n)}var r=t.memoizedState;if(r!==null){var c=r.dehydrated;if(Uo(e),i)if(e.flags&256)e.flags&=-257,e=hh(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(ae||ul(t,e,a,!1),i=(a&t.childLanes)!==0,ae||i){if(n=qt,n!==null&&(c=af(n,a),c!==0&&c!==r.retryLane))throw r.retryLane=c,An(t,c),_e(n,t,c),ns;Lu(),e=hh(t,e,a)}else t=r.treeContext,Gt=Ke(c.nextSibling),he=e,Ot=!0,La=null,Ve=!1,t!==null&&Pf(e,t),e=_u(e,n),e.flags|=4096;return e}return t=va(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ou(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function ls(t,e,a,n,i){return Tn(e),a=$o(t,e,a,n,void 0,i),n=Lo(),t!==null&&!ae?(ko(t,e,i),Ea(t,e,i)):(Ot&&n&&bo(e),e.flags|=1,ge(t,e,a,i),e.child)}function ph(t,e,a,n,i,r){return Tn(e),e.updateQueue=null,a=vd(e,n,a,i),md(t),n=Lo(),t!==null&&!ae?(ko(t,e,r),Ea(t,e,r)):(Ot&&n&&bo(e),e.flags|=1,ge(t,e,a,r),e.child)}function gh(t,e,a,n,i){if(Tn(e),e.stateNode===null){var r=al,c=a.contextType;typeof c=="object"&&c!==null&&(r=pe(c)),r=new a(n,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=es,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=n,r.state=e.memoizedState,r.refs={},Ro(e),c=a.contextType,r.context=typeof c=="object"&&c!==null?pe(c):al,r.state=e.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(ts(e,a,c,n),r.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&es.enqueueReplaceState(r,r.state,null),ui(e,n,r,i),ii(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){r=e.stateNode;var h=e.memoizedProps,S=Mn(a,h);r.props=S;var R=r.context,Q=a.contextType;c=al,typeof Q=="object"&&Q!==null&&(c=pe(Q));var K=a.getDerivedStateFromProps;Q=typeof K=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=e.pendingProps!==h,Q||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||R!==c)&&eh(e,r,n,c),Ya=!1;var M=e.memoizedState;r.state=M,ui(e,n,r,i),ii(),R=e.memoizedState,h||M!==R||Ya?(typeof K=="function"&&(ts(e,a,K,n),R=e.memoizedState),(S=Ya||th(e,a,S,n,M,R,c))?(Q||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=R),r.props=n,r.state=R,r.context=c,n=S):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{r=e.stateNode,Co(t,e),c=e.memoizedProps,Q=Mn(a,c),r.props=Q,K=e.pendingProps,M=r.context,R=a.contextType,S=al,typeof R=="object"&&R!==null&&(S=pe(R)),h=a.getDerivedStateFromProps,(R=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==K||M!==S)&&eh(e,r,n,S),Ya=!1,M=e.memoizedState,r.state=M,ui(e,n,r,i),ii();var L=e.memoizedState;c!==K||M!==L||Ya||t!==null&&t.dependencies!==null&&cu(t.dependencies)?(typeof h=="function"&&(ts(e,a,h,n),L=e.memoizedState),(Q=Ya||th(e,a,Q,n,M,L,S)||t!==null&&t.dependencies!==null&&cu(t.dependencies))?(R||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,L,S),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,L,S)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===t.memoizedProps&&M===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&M===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=L),r.props=n,r.state=L,r.context=S,n=Q):(typeof r.componentDidUpdate!="function"||c===t.memoizedProps&&M===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&M===t.memoizedState||(e.flags|=1024),n=!1)}return r=n,Ou(t,e),n=(e.flags&128)!==0,r||n?(r=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&n?(e.child=Rn(e,t.child,null,i),e.child=Rn(e,null,a,i)):ge(t,e,a,i),e.memoizedState=r.state,t=e.child):t=Ea(t,e,i),t}function mh(t,e,a,n){return wn(),e.flags|=256,ge(t,e,a,n),e.child}var is={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function us(t){return{baseLanes:t,cachePool:id()}}function rs(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Ue),t}function vh(t,e,a){var n=e.pendingProps,i=!1,r=(e.flags&128)!==0,c;if((c=r)||(c=t!==null&&t.memoizedState===null?!1:(Ft.current&2)!==0),c&&(i=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,t===null){if(Ot){if(i?Xa(e):Va(),(t=Gt)?(t=zp(t,Ve),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:$a!==null?{id:ia,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},a=Jf(t),a.return=e,e.child=a,he=e,Gt=null)):t=null,t===null)throw ka(e);return Gs(t)?e.lanes=32:e.lanes=536870912,null}var h=n.children;return n=n.fallback,i?(Va(),i=e.mode,h=Ru({mode:"hidden",children:h},i),n=En(n,i,a,null),h.return=e,n.return=e,h.sibling=n,e.child=h,n=e.child,n.memoizedState=us(a),n.childLanes=rs(t,c,a),e.memoizedState=is,fi(null,n)):(Xa(e),os(e,h))}var S=t.memoizedState;if(S!==null&&(h=S.dehydrated,h!==null)){if(r)e.flags&256?(Xa(e),e.flags&=-257,e=ss(t,e,a)):e.memoizedState!==null?(Va(),e.child=t.child,e.flags|=128,e=null):(Va(),h=n.fallback,i=e.mode,n=Ru({mode:"visible",children:n.children},i),h=En(h,i,a,null),h.flags|=2,n.return=e,h.return=e,n.sibling=h,e.child=n,Rn(e,t.child,null,a),n=e.child,n.memoizedState=us(a),n.childLanes=rs(t,c,a),e.memoizedState=is,e=fi(null,n));else if(Xa(e),Gs(h)){if(c=h.nextSibling&&h.nextSibling.dataset,c)var R=c.dgst;c=R,n=Error(o(419)),n.stack="",n.digest=c,Pl({value:n,source:null,stack:null}),e=ss(t,e,a)}else if(ae||ul(t,e,a,!1),c=(a&t.childLanes)!==0,ae||c){if(c=qt,c!==null&&(n=af(c,a),n!==0&&n!==S.retryLane))throw S.retryLane=n,An(t,n),_e(c,t,n),ns;Ys(h)||Lu(),e=ss(t,e,a)}else Ys(h)?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,Gt=Ke(h.nextSibling),he=e,Ot=!0,La=null,Ve=!1,t!==null&&Pf(e,t),e=os(e,n.children),e.flags|=4096);return e}return i?(Va(),h=n.fallback,i=e.mode,S=t.child,R=S.sibling,n=va(S,{mode:"hidden",children:n.children}),n.subtreeFlags=S.subtreeFlags&65011712,R!==null?h=va(R,h):(h=En(h,i,a,null),h.flags|=2),h.return=e,n.return=e,n.sibling=h,e.child=n,fi(null,n),n=e.child,h=t.child.memoizedState,h===null?h=us(a):(i=h.cachePool,i!==null?(S=te._currentValue,i=i.parent!==S?{parent:S,pool:S}:i):i=id(),h={baseLanes:h.baseLanes|a,cachePool:i}),n.memoizedState=h,n.childLanes=rs(t,c,a),e.memoizedState=is,fi(t.child,n)):(Xa(e),a=t.child,t=a.sibling,a=va(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=a,e.memoizedState=null,a)}function os(t,e){return e=Ru({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ru(t,e){return t=Me(22,t,null,e),t.lanes=0,t}function ss(t,e,a){return Rn(e,t.child,null,a),t=os(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yh(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),wo(t.return,e,a)}function cs(t,e,a,n,i,r){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:r}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=n,c.tail=a,c.tailMode=i,c.treeForkCount=r)}function bh(t,e,a){var n=e.pendingProps,i=n.revealOrder,r=n.tail;n=n.children;var c=Ft.current,h=(c&2)!==0;if(h?(c=c&1|2,e.flags|=128):c&=1,Z(Ft,c),ge(t,e,n,a),n=Ot?Il:0,!h&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yh(t,a,e);else if(t.tag===19)yh(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&yu(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),cs(e,!1,i,a,r,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yu(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}cs(e,!0,a,null,r,n);break;case"together":cs(e,!1,null,null,void 0,n);break;default:e.memoizedState=null}return e.child}function Ea(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Wa|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(ul(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,a=va(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=va(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function fs(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&cu(t)))}function pv(t,e,a){switch(e.tag){case 3:Rt(e,e.stateNode.containerInfo),qa(e,te,t.memoizedState.cache),wn();break;case 27:case 5:gt(e);break;case 4:Rt(e,e.stateNode.containerInfo);break;case 10:qa(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Uo(e),null;break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Xa(e),e.flags|=128,null):(a&e.child.childLanes)!==0?vh(t,e,a):(Xa(e),t=Ea(t,e,a),t!==null?t.sibling:null);Xa(e);break;case 19:var i=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(ul(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return bh(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(Ft,Ft.current),n)break;return null;case 22:return e.lanes=0,fh(t,e,a,e.pendingProps);case 24:qa(e,te,t.memoizedState.cache)}return Ea(t,e,a)}function Sh(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)ae=!0;else{if(!fs(t,a)&&(e.flags&128)===0)return ae=!1,pv(t,e,a);ae=(t.flags&131072)!==0}else ae=!1,Ot&&(e.flags&1048576)!==0&&If(e,Il,e.index);switch(e.lanes=0,e.tag){case 16:t:{var n=e.pendingProps;if(t=_n(e.elementType),e.type=t,typeof t=="function")mo(t)?(n=Mn(t,n),e.tag=1,e=gh(null,e,t,n,a)):(e.tag=0,e=ls(null,e,t,n,a));else{if(t!=null){var i=t.$$typeof;if(i===B){e.tag=11,e=oh(null,e,t,n,a);break t}else if(i===b){e.tag=14,e=sh(null,e,t,n,a);break t}}throw e=xt(t)||t,Error(o(306,e,""))}}return e;case 0:return ls(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=Mn(n,e.pendingProps),gh(t,e,n,i,a);case 3:t:{if(Rt(e,e.stateNode.containerInfo),t===null)throw Error(o(387));n=e.pendingProps;var r=e.memoizedState;i=r.element,Co(t,e),ui(e,n,null,a);var c=e.memoizedState;if(n=c.cache,qa(e,te,n),n!==r.cache&&zo(e,[te],a,!0),ii(),n=c.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=mh(t,e,n,a);break t}else if(n!==i){i=Ge(Error(o(424)),e),Pl(i),e=mh(t,e,n,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Gt=Ke(t.firstChild),he=e,Ot=!0,La=null,Ve=!0,a=fd(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(wn(),n===i){e=Ea(t,e,a);break t}ge(t,e,n,a)}e=e.child}return e;case 26:return Ou(t,e),t===null?(a=Cp(e.type,null,e.pendingProps,null))?e.memoizedState=a:Ot||(a=e.type,t=e.pendingProps,n=Vu(nt.current).createElement(a),n[de]=e,n[Ae]=t,me(n,a,t),oe(n),e.stateNode=n):e.memoizedState=Cp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return gt(e),t===null&&Ot&&(n=e.stateNode=_p(e.type,e.pendingProps,nt.current),he=e,Ve=!0,i=Gt,tn(e.type)?(Qs=i,Gt=Ke(n.firstChild)):Gt=i),ge(t,e,e.pendingProps.children,a),Ou(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Ot&&((i=n=Gt)&&(n=Qv(n,e.type,e.pendingProps,Ve),n!==null?(e.stateNode=n,he=e,Gt=Ke(n.firstChild),Ve=!1,i=!0):i=!1),i||ka(e)),gt(e),i=e.type,r=e.pendingProps,c=t!==null?t.memoizedProps:null,n=r.children,Ls(i,r)?n=null:c!==null&&Ls(i,c)&&(e.flags|=32),e.memoizedState!==null&&(i=$o(t,e,iv,null,null,a),Ti._currentValue=i),Ou(t,e),ge(t,e,n,a),e.child;case 6:return t===null&&Ot&&((t=a=Gt)&&(a=Xv(a,e.pendingProps,Ve),a!==null?(e.stateNode=a,he=e,Gt=null,t=!0):t=!1),t||ka(e)),null;case 13:return vh(t,e,a);case 4:return Rt(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Rn(e,null,n,a):ge(t,e,n,a),e.child;case 11:return oh(t,e,e.type,e.pendingProps,a);case 7:return ge(t,e,e.pendingProps,a),e.child;case 8:return ge(t,e,e.pendingProps.children,a),e.child;case 12:return ge(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,qa(e,e.type,n.value),ge(t,e,n.children,a),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,Tn(e),i=pe(i),n=n(i),e.flags|=1,ge(t,e,n,a),e.child;case 14:return sh(t,e,e.type,e.pendingProps,a);case 15:return ch(t,e,e.type,e.pendingProps,a);case 19:return bh(t,e,a);case 31:return hv(t,e,a);case 22:return fh(t,e,a,e.pendingProps);case 24:return Tn(e),n=pe(te),t===null?(i=_o(),i===null&&(i=qt,r=To(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),e.memoizedState={parent:n,cache:i},Ro(e),qa(e,te,i)):((t.lanes&a)!==0&&(Co(t,e),ui(e,null,null,a),ii()),i=t.memoizedState,r=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),qa(e,te,n)):(n=r.cache,qa(e,te,n),n!==i.cache&&zo(e,[te],a,!0))),ge(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function wa(t){t.flags|=4}function ds(t,e,a,n,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(Zh())t.flags|=8192;else throw On=pu,Oo}else t.flags&=-16777217}function xh(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Up(e))if(Zh())t.flags|=8192;else throw On=pu,Oo}function Cu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Pc():536870912,t.lanes|=e,yl|=e)}function di(t,e){if(!Ot)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function gv(t,e,a){var n=e.pendingProps;switch(So(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return Qt(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Sa(te),J(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(il(e)?wa(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ao())),Qt(e),null;case 26:var i=e.type,r=e.memoizedState;return t===null?(wa(e),r!==null?(Qt(e),xh(e,r)):(Qt(e),ds(e,i,null,n,a))):r?r!==t.memoizedState?(wa(e),Qt(e),xh(e,r)):(Qt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&wa(e),Qt(e),ds(e,i,t,n,a)),null;case 27:if(bt(e),a=nt.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&wa(e);else{if(!n){if(e.stateNode===null)throw Error(o(166));return Qt(e),null}t=F.current,il(e)?td(e):(t=_p(i,n,a),e.stateNode=t,wa(e))}return Qt(e),null;case 5:if(bt(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&wa(e);else{if(!n){if(e.stateNode===null)throw Error(o(166));return Qt(e),null}if(r=F.current,il(e))td(e);else{var c=Vu(nt.current);switch(r){case 1:r=c.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=c.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=c.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof n.is=="string"?c.createElement("select",{is:n.is}):c.createElement("select"),n.multiple?r.multiple=!0:n.size&&(r.size=n.size);break;default:r=typeof n.is=="string"?c.createElement(i,{is:n.is}):c.createElement(i)}}r[de]=e,r[Ae]=n;t:for(c=e.child;c!==null;){if(c.tag===5||c.tag===6)r.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break t;for(;c.sibling===null;){if(c.return===null||c.return===e)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}e.stateNode=r;t:switch(me(r,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&wa(e)}}return Qt(e),ds(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&wa(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(o(166));if(t=nt.current,il(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=he,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[de]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||vp(t.nodeValue,a)),t||ka(e,!0)}else t=Vu(t).createTextNode(n),t[de]=e,e.stateNode=t}return Qt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(n=il(e),a!==null){if(t===null){if(!n)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[de]=e}else wn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Qt(e),t=!1}else a=Ao(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Be(e),e):(Be(e),null);if((e.flags&128)!==0)throw Error(o(558))}return Qt(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=il(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(o(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[de]=e}else wn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Qt(e),i=!1}else i=Ao(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Be(e),e):(Be(e),null)}return Be(e),(e.flags&128)!==0?(e.lanes=a,e):(a=n!==null,t=t!==null&&t.memoizedState!==null,a&&(n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Cu(e,e.updateQueue),Qt(e),null);case 4:return J(),t===null&&Bs(e.stateNode.containerInfo),Qt(e),null;case 10:return Sa(e.type),Qt(e),null;case 19:if(Y(Ft),n=e.memoizedState,n===null)return Qt(e),null;if(i=(e.flags&128)!==0,r=n.rendering,r===null)if(i)di(n,!1);else{if(Wt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(r=yu(t),r!==null){for(e.flags|=128,di(n,!1),t=r.updateQueue,e.updateQueue=t,Cu(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Wf(a,t),a=a.sibling;return Z(Ft,Ft.current&1|2),Ot&&ya(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&xe()>Uu&&(e.flags|=128,i=!0,di(n,!1),e.lanes=4194304)}else{if(!i)if(t=yu(r),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Cu(e,t),di(n,!0),n.tail===null&&n.tailMode==="hidden"&&!r.alternate&&!Ot)return Qt(e),null}else 2*xe()-n.renderingStartTime>Uu&&a!==536870912&&(e.flags|=128,i=!0,di(n,!1),e.lanes=4194304);n.isBackwards?(r.sibling=e.child,e.child=r):(t=n.last,t!==null?t.sibling=r:e.child=r,n.last=r)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=xe(),t.sibling=null,a=Ft.current,Z(Ft,i?a&1|2:a&1),Ot&&ya(e,n.treeForkCount),t):(Qt(e),null);case 22:case 23:return Be(e),Ho(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),a=e.updateQueue,a!==null&&Cu(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&Y(Dn),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Sa(te),Qt(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function mv(t,e){switch(So(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Sa(te),J(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return bt(e),null;case 31:if(e.memoizedState!==null){if(Be(e),e.alternate===null)throw Error(o(340));wn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Be(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));wn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(Ft),null;case 4:return J(),null;case 10:return Sa(e.type),null;case 22:case 23:return Be(e),Ho(),t!==null&&Y(Dn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Sa(te),null;case 25:return null;default:return null}}function Ah(t,e){switch(So(e),e.tag){case 3:Sa(te),J();break;case 26:case 27:case 5:bt(e);break;case 4:J();break;case 31:e.memoizedState!==null&&Be(e);break;case 13:Be(e);break;case 19:Y(Ft);break;case 10:Sa(e.type);break;case 22:case 23:Be(e),Ho(),t!==null&&Y(Dn);break;case 24:Sa(te)}}function hi(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var r=a.create,c=a.inst;n=r(),c.destroy=n}a=a.next}while(a!==i)}}catch(h){Ut(e,e.return,h)}}function Za(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&t)===t){var c=n.inst,h=c.destroy;if(h!==void 0){c.destroy=void 0,i=e;var S=a,R=h;try{R()}catch(Q){Ut(i,S,Q)}}}n=n.next}while(n!==r)}}catch(Q){Ut(e,e.return,Q)}}function Eh(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{hd(e,a)}catch(n){Ut(t,t.return,n)}}}function wh(t,e,a){a.props=Mn(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){Ut(t,e,n)}}function pi(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(i){Ut(t,e,i)}}function ra(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Ut(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ut(t,e,i)}else a.current=null}function zh(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break t;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Ut(t,t.return,i)}}function hs(t,e,a){try{var n=t.stateNode;$v(n,t.type,a,e),n[Ae]=e}catch(i){Ut(t,t.return,i)}}function Th(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&tn(t.type)||t.tag===4}function ps(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Th(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&tn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gs(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=ga));else if(n!==4&&(n===27&&tn(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(gs(t,e,a),t=t.sibling;t!==null;)gs(t,e,a),t=t.sibling}function Mu(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&tn(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Mu(t,e,a),t=t.sibling;t!==null;)Mu(t,e,a),t=t.sibling}function Dh(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);me(e,n,a),e[de]=t,e[Ae]=a}catch(r){Ut(t,t.return,r)}}var za=!1,ne=!1,ms=!1,_h=typeof WeakSet=="function"?WeakSet:Set,se=null;function vv(t,e){if(t=t.containerInfo,js=Pu,t=kf(t),oo(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break t}var c=0,h=-1,S=-1,R=0,Q=0,K=t,M=null;e:for(;;){for(var L;K!==a||i!==0&&K.nodeType!==3||(h=c+i),K!==r||n!==0&&K.nodeType!==3||(S=c+n),K.nodeType===3&&(c+=K.nodeValue.length),(L=K.firstChild)!==null;)M=K,K=L;for(;;){if(K===t)break e;if(M===a&&++R===i&&(h=c),M===r&&++Q===n&&(S=c),(L=K.nextSibling)!==null)break;K=M,M=K.parentNode}K=L}a=h===-1||S===-1?null:{start:h,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for($s={focusedElem:t,selectionRange:a},Pu=!1,se=e;se!==null;)if(e=se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,se=t;else for(;se!==null;){switch(e=se,r=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)i=t[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&r!==null){t=void 0,a=e,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var rt=Mn(a.type,i);t=n.getSnapshotBeforeUpdate(rt,r),n.__reactInternalSnapshotBeforeUpdate=t}catch(pt){Ut(a,a.return,pt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)qs(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":qs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,se=t;break}se=e.return}}function Oh(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Da(t,a),n&4&&hi(5,a);break;case 1:if(Da(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(c){Ut(a,a.return,c)}else{var i=Mn(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(c){Ut(a,a.return,c)}}n&64&&Eh(a),n&512&&pi(a,a.return);break;case 3:if(Da(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{hd(t,e)}catch(c){Ut(a,a.return,c)}}break;case 27:e===null&&n&4&&Dh(a);case 26:case 5:Da(t,a),e===null&&n&4&&zh(a),n&512&&pi(a,a.return);break;case 12:Da(t,a);break;case 31:Da(t,a),n&4&&Mh(t,a);break;case 13:Da(t,a),n&4&&Nh(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Tv.bind(null,a),Vv(t,a))));break;case 22:if(n=a.memoizedState!==null||za,!n){e=e!==null&&e.memoizedState!==null||ne,i=za;var r=ne;za=n,(ne=e)&&!r?_a(t,a,(a.subtreeFlags&8772)!==0):Da(t,a),za=i,ne=r}break;case 30:break;default:Da(t,a)}}function Rh(t){var e=t.alternate;e!==null&&(t.alternate=null,Rh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Xr(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Vt=null,we=!1;function Ta(t,e,a){for(a=a.child;a!==null;)Ch(t,e,a),a=a.sibling}function Ch(t,e,a){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount($l,a)}catch{}switch(a.tag){case 26:ne||ra(a,e),Ta(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ne||ra(a,e);var n=Vt,i=we;tn(a.type)&&(Vt=a.stateNode,we=!1),Ta(t,e,a),Ei(a.stateNode),Vt=n,we=i;break;case 5:ne||ra(a,e);case 6:if(n=Vt,i=we,Vt=null,Ta(t,e,a),Vt=n,we=i,Vt!==null)if(we)try{(Vt.nodeType===9?Vt.body:Vt.nodeName==="HTML"?Vt.ownerDocument.body:Vt).removeChild(a.stateNode)}catch(r){Ut(a,e,r)}else try{Vt.removeChild(a.stateNode)}catch(r){Ut(a,e,r)}break;case 18:Vt!==null&&(we?(t=Vt,Ep(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Tl(t)):Ep(Vt,a.stateNode));break;case 4:n=Vt,i=we,Vt=a.stateNode.containerInfo,we=!0,Ta(t,e,a),Vt=n,we=i;break;case 0:case 11:case 14:case 15:Za(2,a,e),ne||Za(4,a,e),Ta(t,e,a);break;case 1:ne||(ra(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&wh(a,e,n)),Ta(t,e,a);break;case 21:Ta(t,e,a);break;case 22:ne=(n=ne)||a.memoizedState!==null,Ta(t,e,a),ne=n;break;default:Ta(t,e,a)}}function Mh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Tl(t)}catch(a){Ut(e,e.return,a)}}}function Nh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Tl(t)}catch(a){Ut(e,e.return,a)}}function yv(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new _h),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new _h),e;default:throw Error(o(435,t.tag))}}function Nu(t,e){var a=yv(t);e.forEach(function(n){if(!a.has(n)){a.add(n);var i=Dv.bind(null,t,n);n.then(i,i)}})}function ze(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=t,c=e,h=c;t:for(;h!==null;){switch(h.tag){case 27:if(tn(h.type)){Vt=h.stateNode,we=!1;break t}break;case 5:Vt=h.stateNode,we=!1;break t;case 3:case 4:Vt=h.stateNode.containerInfo,we=!0;break t}h=h.return}if(Vt===null)throw Error(o(160));Ch(r,c,i),Vt=null,we=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Bh(e,t),e=e.sibling}var Pe=null;function Bh(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ze(e,t),Te(t),n&4&&(Za(3,t,t.return),hi(3,t),Za(5,t,t.return));break;case 1:ze(e,t),Te(t),n&512&&(ne||a===null||ra(a,a.return)),n&64&&za&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Pe;if(ze(e,t),Te(t),n&512&&(ne||a===null||ra(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){t:{n=t.type,a=t.memoizedProps,i=i.ownerDocument||i;e:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[ql]||r[de]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),me(r,n,a),r[de]=t,oe(r),n=r;break t;case"link":var c=Bp("link","href",i).get(n+(a.href||""));if(c){for(var h=0;h<c.length;h++)if(r=c[h],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(h,1);break e}}r=i.createElement(n),me(r,n,a),i.head.appendChild(r);break;case"meta":if(c=Bp("meta","content",i).get(n+(a.content||""))){for(h=0;h<c.length;h++)if(r=c[h],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(h,1);break e}}r=i.createElement(n),me(r,n,a),i.head.appendChild(r);break;default:throw Error(o(468,n))}r[de]=t,oe(r),n=r}t.stateNode=n}else Hp(i,t.type,t.stateNode);else t.stateNode=Np(i,n,t.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?Hp(i,t.type,t.stateNode):Np(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&hs(t,t.memoizedProps,a.memoizedProps)}break;case 27:ze(e,t),Te(t),n&512&&(ne||a===null||ra(a,a.return)),a!==null&&n&4&&hs(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ze(e,t),Te(t),n&512&&(ne||a===null||ra(a,a.return)),t.flags&32){i=t.stateNode;try{Wn(i,"")}catch(rt){Ut(t,t.return,rt)}}n&4&&t.stateNode!=null&&(i=t.memoizedProps,hs(t,i,a!==null?a.memoizedProps:i)),n&1024&&(ms=!0);break;case 6:if(ze(e,t),Te(t),n&4){if(t.stateNode===null)throw Error(o(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(rt){Ut(t,t.return,rt)}}break;case 3:if(Wu=null,i=Pe,Pe=Zu(e.containerInfo),ze(e,t),Pe=i,Te(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Tl(e.containerInfo)}catch(rt){Ut(t,t.return,rt)}ms&&(ms=!1,Hh(t));break;case 4:n=Pe,Pe=Zu(t.stateNode.containerInfo),ze(e,t),Te(t),Pe=n;break;case 12:ze(e,t),Te(t);break;case 31:ze(e,t),Te(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Nu(t,n)));break;case 13:ze(e,t),Te(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hu=xe()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Nu(t,n)));break;case 22:i=t.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,R=za,Q=ne;if(za=R||i,ne=Q||S,ze(e,t),ne=Q,za=R,Te(t),n&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||S||za||ne||Nn(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){S=a=e;try{if(r=S.stateNode,i)c=r.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{h=S.stateNode;var K=S.memoizedProps.style,M=K!=null&&K.hasOwnProperty("display")?K.display:null;h.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(rt){Ut(S,S.return,rt)}}}else if(e.tag===6){if(a===null){S=e;try{S.stateNode.nodeValue=i?"":S.memoizedProps}catch(rt){Ut(S,S.return,rt)}}}else if(e.tag===18){if(a===null){S=e;try{var L=S.stateNode;i?wp(L,!0):wp(S.stateNode,!1)}catch(rt){Ut(S,S.return,rt)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Nu(t,a))));break;case 19:ze(e,t),Te(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Nu(t,n)));break;case 30:break;case 21:break;default:ze(e,t),Te(t)}}function Te(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(Th(n)){a=n;break}n=n.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var i=a.stateNode,r=ps(t);Mu(t,r,i);break;case 5:var c=a.stateNode;a.flags&32&&(Wn(c,""),a.flags&=-33);var h=ps(t);Mu(t,h,c);break;case 3:case 4:var S=a.stateNode.containerInfo,R=ps(t);gs(t,R,S);break;default:throw Error(o(161))}}catch(Q){Ut(t,t.return,Q)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Hh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Da(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Oh(t,e.alternate,e),e=e.sibling}function Nn(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Za(4,e,e.return),Nn(e);break;case 1:ra(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&wh(e,e.return,a),Nn(e);break;case 27:Ei(e.stateNode);case 26:case 5:ra(e,e.return),Nn(e);break;case 22:e.memoizedState===null&&Nn(e);break;case 30:Nn(e);break;default:Nn(e)}t=t.sibling}}function _a(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=t,r=e,c=r.flags;switch(r.tag){case 0:case 11:case 15:_a(i,r,a),hi(4,r);break;case 1:if(_a(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(R){Ut(n,n.return,R)}if(n=r,i=n.updateQueue,i!==null){var h=n.stateNode;try{var S=i.shared.hiddenCallbacks;if(S!==null)for(i.shared.hiddenCallbacks=null,i=0;i<S.length;i++)dd(S[i],h)}catch(R){Ut(n,n.return,R)}}a&&c&64&&Eh(r),pi(r,r.return);break;case 27:Dh(r);case 26:case 5:_a(i,r,a),a&&n===null&&c&4&&zh(r),pi(r,r.return);break;case 12:_a(i,r,a);break;case 31:_a(i,r,a),a&&c&4&&Mh(i,r);break;case 13:_a(i,r,a),a&&c&4&&Nh(i,r);break;case 22:r.memoizedState===null&&_a(i,r,a),pi(r,r.return);break;case 30:break;default:_a(i,r,a)}e=e.sibling}}function vs(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ti(a))}function ys(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ti(t))}function ta(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Uh(t,e,a,n),e=e.sibling}function Uh(t,e,a,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:ta(t,e,a,n),i&2048&&hi(9,e);break;case 1:ta(t,e,a,n);break;case 3:ta(t,e,a,n),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ti(t)));break;case 12:if(i&2048){ta(t,e,a,n),t=e.stateNode;try{var r=e.memoizedProps,c=r.id,h=r.onPostCommit;typeof h=="function"&&h(c,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Ut(e,e.return,S)}}else ta(t,e,a,n);break;case 31:ta(t,e,a,n);break;case 13:ta(t,e,a,n);break;case 23:break;case 22:r=e.stateNode,c=e.alternate,e.memoizedState!==null?r._visibility&2?ta(t,e,a,n):gi(t,e):r._visibility&2?ta(t,e,a,n):(r._visibility|=2,gl(t,e,a,n,(e.subtreeFlags&10256)!==0||!1)),i&2048&&vs(c,e);break;case 24:ta(t,e,a,n),i&2048&&ys(e.alternate,e);break;default:ta(t,e,a,n)}}function gl(t,e,a,n,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,c=e,h=a,S=n,R=c.flags;switch(c.tag){case 0:case 11:case 15:gl(r,c,h,S,i),hi(8,c);break;case 23:break;case 22:var Q=c.stateNode;c.memoizedState!==null?Q._visibility&2?gl(r,c,h,S,i):gi(r,c):(Q._visibility|=2,gl(r,c,h,S,i)),i&&R&2048&&vs(c.alternate,c);break;case 24:gl(r,c,h,S,i),i&&R&2048&&ys(c.alternate,c);break;default:gl(r,c,h,S,i)}e=e.sibling}}function gi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:gi(a,n),i&2048&&vs(n.alternate,n);break;case 24:gi(a,n),i&2048&&ys(n.alternate,n);break;default:gi(a,n)}e=e.sibling}}var mi=8192;function ml(t,e,a){if(t.subtreeFlags&mi)for(t=t.child;t!==null;)jh(t,e,a),t=t.sibling}function jh(t,e,a){switch(t.tag){case 26:ml(t,e,a),t.flags&mi&&t.memoizedState!==null&&ly(a,Pe,t.memoizedState,t.memoizedProps);break;case 5:ml(t,e,a);break;case 3:case 4:var n=Pe;Pe=Zu(t.stateNode.containerInfo),ml(t,e,a),Pe=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=mi,mi=16777216,ml(t,e,a),mi=n):ml(t,e,a));break;default:ml(t,e,a)}}function $h(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function vi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];se=n,kh(n,t)}$h(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lh(t),t=t.sibling}function Lh(t){switch(t.tag){case 0:case 11:case 15:vi(t),t.flags&2048&&Za(9,t,t.return);break;case 3:vi(t);break;case 12:vi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Bu(t)):vi(t);break;default:vi(t)}}function Bu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];se=n,kh(n,t)}$h(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Za(8,e,e.return),Bu(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Bu(e));break;default:Bu(e)}t=t.sibling}}function kh(t,e){for(;se!==null;){var a=se;switch(a.tag){case 0:case 11:case 15:Za(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ti(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,se=n;else t:for(a=t;se!==null;){n=se;var i=n.sibling,r=n.return;if(Rh(n),n===a){se=null;break t}if(i!==null){i.return=r,se=i;break t}se=r}}}var bv={getCacheForType:function(t){var e=pe(te),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return pe(te).controller.signal}},Sv=typeof WeakMap=="function"?WeakMap:Map,Nt=0,qt=null,wt=null,Dt=0,Ht=0,He=null,Ka=!1,vl=!1,bs=!1,Oa=0,Wt=0,Wa=0,Bn=0,Ss=0,Ue=0,yl=0,yi=null,De=null,xs=!1,Hu=0,qh=0,Uu=1/0,ju=null,Ja=null,ue=0,Fa=null,bl=null,Ra=0,As=0,Es=null,Yh=null,bi=0,ws=null;function je(){return(Nt&2)!==0&&Dt!==0?Dt&-Dt:N.T!==null?Rs():nf()}function Gh(){if(Ue===0)if((Dt&536870912)===0||Ot){var t=Xi;Xi<<=1,(Xi&3932160)===0&&(Xi=262144),Ue=t}else Ue=536870912;return t=Ne.current,t!==null&&(t.flags|=32),Ue}function _e(t,e,a){(t===qt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(Sl(t,0),Ia(t,Dt,Ue,!1)),kl(t,a),((Nt&2)===0||t!==qt)&&(t===qt&&((Nt&2)===0&&(Bn|=a),Wt===4&&Ia(t,Dt,Ue,!1)),oa(t))}function Qh(t,e,a){if((Nt&6)!==0)throw Error(o(327));var n=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Ll(t,e),i=n?Ev(t,e):Ts(t,e,!0),r=n;do{if(i===0){vl&&!n&&Ia(t,e,0,!1);break}else{if(a=t.current.alternate,r&&!xv(a)){i=Ts(t,e,!1),r=!1;continue}if(i===2){if(r=e,t.errorRecoveryDisabledLanes&r)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;t:{var h=t;i=yi;var S=h.current.memoizedState.isDehydrated;if(S&&(Sl(h,c).flags|=256),c=Ts(h,c,!1),c!==2){if(bs&&!S){h.errorRecoveryDisabledLanes|=r,Bn|=r,i=4;break t}r=De,De=i,r!==null&&(De===null?De=r:De.push.apply(De,r))}i=c}if(r=!1,i!==2)continue}}if(i===1){Sl(t,0),Ia(t,e,0,!0);break}t:{switch(n=t,r=i,r){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Ia(n,e,Ue,!Ka);break t;case 2:De=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(i=Hu+300-xe(),10<i)){if(Ia(n,e,Ue,!Ka),Zi(n,0,!0)!==0)break t;Ra=e,n.timeoutHandle=xp(Xh.bind(null,n,a,De,ju,xs,e,Ue,Bn,yl,Ka,r,"Throttled",-0,0),i);break t}Xh(n,a,De,ju,xs,e,Ue,Bn,yl,Ka,r,null,-0,0)}}break}while(!0);oa(t)}function Xh(t,e,a,n,i,r,c,h,S,R,Q,K,M,L){if(t.timeoutHandle=-1,K=e.subtreeFlags,K&8192||(K&16785408)===16785408){K={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ga},jh(e,r,K);var rt=(r&62914560)===r?Hu-xe():(r&4194048)===r?qh-xe():0;if(rt=iy(K,rt),rt!==null){Ra=r,t.cancelPendingCommit=rt(Ph.bind(null,t,e,r,a,n,i,c,h,S,Q,K,null,M,L)),Ia(t,r,c,!R);return}}Ph(t,e,r,a,n,i,c,h,S)}function xv(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!Ce(r(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ia(t,e,a,n){e&=~Ss,e&=~Bn,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var r=31-Re(i),c=1<<r;n[r]=-1,i&=~c}a!==0&&tf(t,a,e)}function $u(){return(Nt&6)===0?(Si(0),!1):!0}function zs(){if(wt!==null){if(Ht===0)var t=wt.return;else t=wt,ba=zn=null,qo(t),cl=null,ai=0,t=wt;for(;t!==null;)Ah(t.alternate,t),t=t.return;wt=null}}function Sl(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,qv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ra=0,zs(),qt=t,wt=a=va(t.current,null),Dt=e,Ht=0,He=null,Ka=!1,vl=Ll(t,e),bs=!1,yl=Ue=Ss=Bn=Wa=Wt=0,De=yi=null,xs=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-Re(n),r=1<<i;e|=t[i],n&=~r}return Oa=e,iu(),a}function Vh(t,e){St=null,N.H=ci,e===sl||e===hu?(e=od(),Ht=3):e===Oo?(e=od(),Ht=4):Ht=e===ns?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,He=e,wt===null&&(Wt=1,Du(t,Ge(e,t.current)))}function Zh(){var t=Ne.current;return t===null?!0:(Dt&4194048)===Dt?Ze===null:(Dt&62914560)===Dt||(Dt&536870912)!==0?t===Ze:!1}function Kh(){var t=N.H;return N.H=ci,t===null?ci:t}function Wh(){var t=N.A;return N.A=bv,t}function Lu(){Wt=4,Ka||(Dt&4194048)!==Dt&&Ne.current!==null||(vl=!0),(Wa&134217727)===0&&(Bn&134217727)===0||qt===null||Ia(qt,Dt,Ue,!1)}function Ts(t,e,a){var n=Nt;Nt|=2;var i=Kh(),r=Wh();(qt!==t||Dt!==e)&&(ju=null,Sl(t,e)),e=!1;var c=Wt;t:do try{if(Ht!==0&&wt!==null){var h=wt,S=He;switch(Ht){case 8:zs(),c=6;break t;case 3:case 2:case 9:case 6:Ne.current===null&&(e=!0);var R=Ht;if(Ht=0,He=null,xl(t,h,S,R),a&&vl){c=0;break t}break;default:R=Ht,Ht=0,He=null,xl(t,h,S,R)}}Av(),c=Wt;break}catch(Q){Vh(t,Q)}while(!0);return e&&t.shellSuspendCounter++,ba=zn=null,Nt=n,N.H=i,N.A=r,wt===null&&(qt=null,Dt=0,iu()),c}function Av(){for(;wt!==null;)Jh(wt)}function Ev(t,e){var a=Nt;Nt|=2;var n=Kh(),i=Wh();qt!==t||Dt!==e?(ju=null,Uu=xe()+500,Sl(t,e)):vl=Ll(t,e);t:do try{if(Ht!==0&&wt!==null){e=wt;var r=He;e:switch(Ht){case 1:Ht=0,He=null,xl(t,e,r,1);break;case 2:case 9:if(ud(r)){Ht=0,He=null,Fh(e);break}e=function(){Ht!==2&&Ht!==9||qt!==t||(Ht=7),oa(t)},r.then(e,e);break t;case 3:Ht=7;break t;case 4:Ht=5;break t;case 7:ud(r)?(Ht=0,He=null,Fh(e)):(Ht=0,He=null,xl(t,e,r,7));break;case 5:var c=null;switch(wt.tag){case 26:c=wt.memoizedState;case 5:case 27:var h=wt;if(c?Up(c):h.stateNode.complete){Ht=0,He=null;var S=h.sibling;if(S!==null)wt=S;else{var R=h.return;R!==null?(wt=R,ku(R)):wt=null}break e}}Ht=0,He=null,xl(t,e,r,5);break;case 6:Ht=0,He=null,xl(t,e,r,6);break;case 8:zs(),Wt=6;break t;default:throw Error(o(462))}}wv();break}catch(Q){Vh(t,Q)}while(!0);return ba=zn=null,N.H=n,N.A=i,Nt=a,wt!==null?0:(qt=null,Dt=0,iu(),Wt)}function wv(){for(;wt!==null&&!mn();)Jh(wt)}function Jh(t){var e=Sh(t.alternate,t,Oa);t.memoizedProps=t.pendingProps,e===null?ku(t):wt=e}function Fh(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=ph(a,e,e.pendingProps,e.type,void 0,Dt);break;case 11:e=ph(a,e,e.pendingProps,e.type.render,e.ref,Dt);break;case 5:qo(e);default:Ah(a,e),e=wt=Wf(e,Oa),e=Sh(a,e,Oa)}t.memoizedProps=t.pendingProps,e===null?ku(t):wt=e}function xl(t,e,a,n){ba=zn=null,qo(e),cl=null,ai=0;var i=e.return;try{if(dv(t,i,e,a,Dt)){Wt=1,Du(t,Ge(a,t.current)),wt=null;return}}catch(r){if(i!==null)throw wt=i,r;Wt=1,Du(t,Ge(a,t.current)),wt=null;return}e.flags&32768?(Ot||n===1?t=!0:vl||(Dt&536870912)!==0?t=!1:(Ka=t=!0,(n===2||n===9||n===3||n===6)&&(n=Ne.current,n!==null&&n.tag===13&&(n.flags|=16384))),Ih(e,t)):ku(e)}function ku(t){var e=t;do{if((e.flags&32768)!==0){Ih(e,Ka);return}t=e.return;var a=gv(e.alternate,e,Oa);if(a!==null){wt=a;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Wt===0&&(Wt=5)}function Ih(t,e){do{var a=mv(t.alternate,t);if(a!==null){a.flags&=32767,wt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){wt=t;return}wt=t=a}while(t!==null);Wt=6,wt=null}function Ph(t,e,a,n,i,r,c,h,S){t.cancelPendingCommit=null;do qu();while(ue!==0);if((Nt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(r=e.lanes|e.childLanes,r|=po,n0(t,a,r,c,h,S),t===qt&&(wt=qt=null,Dt=0),bl=e,Fa=t,Ra=a,As=r,Es=i,Yh=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,_v(Gi,function(){return lp(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=N.T,N.T=null,i=P.p,P.p=2,c=Nt,Nt|=4;try{vv(t,e,a)}finally{Nt=c,P.p=i,N.T=n}}ue=1,tp(),ep(),ap()}}function tp(){if(ue===1){ue=0;var t=Fa,e=bl,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var n=P.p;P.p=2;var i=Nt;Nt|=4;try{Bh(e,t);var r=$s,c=kf(t.containerInfo),h=r.focusedElem,S=r.selectionRange;if(c!==h&&h&&h.ownerDocument&&Lf(h.ownerDocument.documentElement,h)){if(S!==null&&oo(h)){var R=S.start,Q=S.end;if(Q===void 0&&(Q=R),"selectionStart"in h)h.selectionStart=R,h.selectionEnd=Math.min(Q,h.value.length);else{var K=h.ownerDocument||document,M=K&&K.defaultView||window;if(M.getSelection){var L=M.getSelection(),rt=h.textContent.length,pt=Math.min(S.start,rt),Lt=S.end===void 0?pt:Math.min(S.end,rt);!L.extend&&pt>Lt&&(c=Lt,Lt=pt,pt=c);var D=$f(h,pt),A=$f(h,Lt);if(D&&A&&(L.rangeCount!==1||L.anchorNode!==D.node||L.anchorOffset!==D.offset||L.focusNode!==A.node||L.focusOffset!==A.offset)){var O=K.createRange();O.setStart(D.node,D.offset),L.removeAllRanges(),pt>Lt?(L.addRange(O),L.extend(A.node,A.offset)):(O.setEnd(A.node,A.offset),L.addRange(O))}}}}for(K=[],L=h;L=L.parentNode;)L.nodeType===1&&K.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<K.length;h++){var V=K[h];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Pu=!!js,$s=js=null}finally{Nt=i,P.p=n,N.T=a}}t.current=e,ue=2}}function ep(){if(ue===2){ue=0;var t=Fa,e=bl,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var n=P.p;P.p=2;var i=Nt;Nt|=4;try{Oh(t,e.alternate,e)}finally{Nt=i,P.p=n,N.T=a}}ue=3}}function ap(){if(ue===4||ue===3){ue=0,Yi();var t=Fa,e=bl,a=Ra,n=Yh;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ue=5:(ue=0,bl=Fa=null,np(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Ja=null),Gr(a),e=e.stateNode,Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot($l,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=N.T,i=P.p,P.p=2,N.T=null;try{for(var r=t.onRecoverableError,c=0;c<n.length;c++){var h=n[c];r(h.value,{componentStack:h.stack})}}finally{N.T=e,P.p=i}}(Ra&3)!==0&&qu(),oa(t),i=t.pendingLanes,(a&261930)!==0&&(i&42)!==0?t===ws?bi++:(bi=0,ws=t):bi=0,Si(0)}}function np(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ti(e)))}function qu(){return tp(),ep(),ap(),lp()}function lp(){if(ue!==5)return!1;var t=Fa,e=As;As=0;var a=Gr(Ra),n=N.T,i=P.p;try{P.p=32>a?32:a,N.T=null,a=Es,Es=null;var r=Fa,c=Ra;if(ue=0,bl=Fa=null,Ra=0,(Nt&6)!==0)throw Error(o(331));var h=Nt;if(Nt|=4,Lh(r.current),Uh(r,r.current,c,a),Nt=h,Si(0,!1),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot($l,r)}catch{}return!0}finally{P.p=i,N.T=n,np(t,e)}}function ip(t,e,a){e=Ge(a,e),e=as(t.stateNode,e,2),t=Qa(t,e,2),t!==null&&(kl(t,2),oa(t))}function Ut(t,e,a){if(t.tag===3)ip(t,t,a);else for(;e!==null;){if(e.tag===3){ip(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ja===null||!Ja.has(n))){t=Ge(a,t),a=uh(2),n=Qa(e,a,2),n!==null&&(rh(a,n,e,t),kl(n,2),oa(n));break}}e=e.return}}function Ds(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new Sv;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||(bs=!0,i.add(a),t=zv.bind(null,t,e,a),e.then(t,t))}function zv(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qt===t&&(Dt&a)===a&&(Wt===4||Wt===3&&(Dt&62914560)===Dt&&300>xe()-Hu?(Nt&2)===0&&Sl(t,0):Ss|=a,yl===Dt&&(yl=0)),oa(t)}function up(t,e){e===0&&(e=Pc()),t=An(t,e),t!==null&&(kl(t,e),oa(t))}function Tv(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),up(t,a)}function Dv(t,e){var a=0;switch(t.tag){case 31:case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(o(314))}n!==null&&n.delete(e),up(t,a)}function _v(t,e){return pn(t,e)}var Yu=null,Al=null,_s=!1,Gu=!1,Os=!1,Pa=0;function oa(t){t!==Al&&t.next===null&&(Al===null?Yu=Al=t:Al=Al.next=t),Gu=!0,_s||(_s=!0,Rv())}function Si(t,e){if(!Os&&Gu){Os=!0;do for(var a=!1,n=Yu;n!==null;){if(t!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var c=n.suspendedLanes,h=n.pingedLanes;r=(1<<31-Re(42|t)+1)-1,r&=i&~(c&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,cp(n,r))}else r=Dt,r=Zi(n,n===qt?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||Ll(n,r)||(a=!0,cp(n,r));n=n.next}while(a);Os=!1}}function Ov(){rp()}function rp(){Gu=_s=!1;var t=0;Pa!==0&&kv()&&(t=Pa);for(var e=xe(),a=null,n=Yu;n!==null;){var i=n.next,r=op(n,e);r===0?(n.next=null,a===null?Yu=i:a.next=i,i===null&&(Al=a)):(a=n,(t!==0||(r&3)!==0)&&(Gu=!0)),n=i}ue!==0&&ue!==5||Si(t),Pa!==0&&(Pa=0)}function op(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var c=31-Re(r),h=1<<c,S=i[c];S===-1?((h&a)===0||(h&n)!==0)&&(i[c]=a0(h,e)):S<=e&&(t.expiredLanes|=h),r&=~h}if(e=qt,a=Dt,a=Zi(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&gn(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ll(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&gn(n),Gr(a)){case 2:case 8:a=Fc;break;case 32:a=Gi;break;case 268435456:a=Ic;break;default:a=Gi}return n=sp.bind(null,t),a=pn(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&gn(n),t.callbackPriority=2,t.callbackNode=null,2}function sp(t,e){if(ue!==0&&ue!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(qu()&&t.callbackNode!==a)return null;var n=Dt;return n=Zi(t,t===qt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(Qh(t,n,e),op(t,xe()),t.callbackNode!=null&&t.callbackNode===a?sp.bind(null,t):null)}function cp(t,e){if(qu())return null;Qh(t,e,!0)}function Rv(){Yv(function(){(Nt&6)!==0?pn(Jc,Ov):rp()})}function Rs(){if(Pa===0){var t=rl;t===0&&(t=Qi,Qi<<=1,(Qi&261888)===0&&(Qi=256)),Pa=t}return Pa}function fp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fi(""+t)}function dp(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Cv(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var r=fp((i[Ae]||null).action),c=n.submitter;c&&(e=(e=c[Ae]||null)?fp(e.formAction):c.getAttribute("formAction"),e!==null&&(r=e,c=null));var h=new eu("action","action",null,n,i);t.push({event:h,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Pa!==0){var S=c?dp(i,c):new FormData(i);Jo(a,{pending:!0,data:S,method:i.method,action:r},null,S)}}else typeof r=="function"&&(h.preventDefault(),S=c?dp(i,c):new FormData(i),Jo(a,{pending:!0,data:S,method:i.method,action:r},r,S))},currentTarget:i}]})}}for(var Cs=0;Cs<ho.length;Cs++){var Ms=ho[Cs],Mv=Ms.toLowerCase(),Nv=Ms[0].toUpperCase()+Ms.slice(1);Ie(Mv,"on"+Nv)}Ie(Gf,"onAnimationEnd"),Ie(Qf,"onAnimationIteration"),Ie(Xf,"onAnimationStart"),Ie("dblclick","onDoubleClick"),Ie("focusin","onFocus"),Ie("focusout","onBlur"),Ie(W0,"onTransitionRun"),Ie(J0,"onTransitionStart"),Ie(F0,"onTransitionCancel"),Ie(Vf,"onTransitionEnd"),Zn("onMouseEnter",["mouseout","mouseover"]),Zn("onMouseLeave",["mouseout","mouseover"]),Zn("onPointerEnter",["pointerout","pointerover"]),Zn("onPointerLeave",["pointerout","pointerover"]),yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),yn("onBeforeInput",["compositionend","keypress","textInput","paste"]),yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xi));function hp(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;t:{var r=void 0;if(e)for(var c=n.length-1;0<=c;c--){var h=n[c],S=h.instance,R=h.currentTarget;if(h=h.listener,S!==r&&i.isPropagationStopped())break t;r=h,i.currentTarget=R;try{r(i)}catch(Q){lu(Q)}i.currentTarget=null,r=S}else for(c=0;c<n.length;c++){if(h=n[c],S=h.instance,R=h.currentTarget,h=h.listener,S!==r&&i.isPropagationStopped())break t;r=h,i.currentTarget=R;try{r(i)}catch(Q){lu(Q)}i.currentTarget=null,r=S}}}}function zt(t,e){var a=e[Qr];a===void 0&&(a=e[Qr]=new Set);var n=t+"__bubble";a.has(n)||(pp(e,t,2,!1),a.add(n))}function Ns(t,e,a){var n=0;e&&(n|=4),pp(a,t,n,e)}var Qu="_reactListening"+Math.random().toString(36).slice(2);function Bs(t){if(!t[Qu]){t[Qu]=!0,rf.forEach(function(a){a!=="selectionchange"&&(Bv.has(a)||Ns(a,!1,t),Ns(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qu]||(e[Qu]=!0,Ns("selectionchange",!1,e))}}function pp(t,e,a,n){switch(Gp(e)){case 2:var i=oy;break;case 8:i=sy;break;default:i=Ws}a=i.bind(null,e,a,t),i=void 0,!Pr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function Hs(t,e,a,n,i){var r=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var h=n.stateNode.containerInfo;if(h===i)break;if(c===4)for(c=n.return;c!==null;){var S=c.tag;if((S===3||S===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;h!==null;){if(c=Qn(h),c===null)return;if(S=c.tag,S===5||S===6||S===26||S===27){n=r=c;continue t}h=h.parentNode}}n=n.return}bf(function(){var R=r,Q=Fr(a),K=[];t:{var M=Zf.get(t);if(M!==void 0){var L=eu,rt=t;switch(t){case"keypress":if(Pi(a)===0)break t;case"keydown":case"keyup":L=D0;break;case"focusin":rt="focus",L=no;break;case"focusout":rt="blur",L=no;break;case"beforeblur":case"afterblur":L=no;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=g0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=R0;break;case Gf:case Qf:case Xf:L=y0;break;case Vf:L=M0;break;case"scroll":case"scrollend":L=h0;break;case"wheel":L=B0;break;case"copy":case"cut":case"paste":L=S0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=wf;break;case"toggle":case"beforetoggle":L=U0}var pt=(e&4)!==0,Lt=!pt&&(t==="scroll"||t==="scrollend"),D=pt?M!==null?M+"Capture":null:M;pt=[];for(var A=R,O;A!==null;){var V=A;if(O=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||O===null||D===null||(V=Gl(A,D),V!=null&&pt.push(Ai(A,V,O))),Lt)break;A=A.return}0<pt.length&&(M=new L(M,rt,null,a,Q),K.push({event:M,listeners:pt}))}}if((e&7)===0){t:{if(M=t==="mouseover"||t==="pointerover",L=t==="mouseout"||t==="pointerout",M&&a!==Jr&&(rt=a.relatedTarget||a.fromElement)&&(Qn(rt)||rt[Gn]))break t;if((L||M)&&(M=Q.window===Q?Q:(M=Q.ownerDocument)?M.defaultView||M.parentWindow:window,L?(rt=a.relatedTarget||a.toElement,L=R,rt=rt?Qn(rt):null,rt!==null&&(Lt=d(rt),pt=rt.tag,rt!==Lt||pt!==5&&pt!==27&&pt!==6)&&(rt=null)):(L=null,rt=R),L!==rt)){if(pt=Af,V="onMouseLeave",D="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(pt=wf,V="onPointerLeave",D="onPointerEnter",A="pointer"),Lt=L==null?M:Yl(L),O=rt==null?M:Yl(rt),M=new pt(V,A+"leave",L,a,Q),M.target=Lt,M.relatedTarget=O,V=null,Qn(Q)===R&&(pt=new pt(D,A+"enter",rt,a,Q),pt.target=O,pt.relatedTarget=Lt,V=pt),Lt=V,L&&rt)e:{for(pt=Hv,D=L,A=rt,O=0,V=D;V;V=pt(V))O++;V=0;for(var dt=A;dt;dt=pt(dt))V++;for(;0<O-V;)D=pt(D),O--;for(;0<V-O;)A=pt(A),V--;for(;O--;){if(D===A||A!==null&&D===A.alternate){pt=D;break e}D=pt(D),A=pt(A)}pt=null}else pt=null;L!==null&&gp(K,M,L,pt,!1),rt!==null&&Lt!==null&&gp(K,Lt,rt,pt,!0)}}t:{if(M=R?Yl(R):window,L=M.nodeName&&M.nodeName.toLowerCase(),L==="select"||L==="input"&&M.type==="file")var Ct=Mf;else if(Rf(M))if(Nf)Ct=V0;else{Ct=Q0;var ct=G0}else L=M.nodeName,!L||L.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?R&&Wr(R.elementType)&&(Ct=Mf):Ct=X0;if(Ct&&(Ct=Ct(t,R))){Cf(K,Ct,a,Q);break t}ct&&ct(t,M,R),t==="focusout"&&R&&M.type==="number"&&R.memoizedProps.value!=null&&Kr(M,"number",M.value)}switch(ct=R?Yl(R):window,t){case"focusin":(Rf(ct)||ct.contentEditable==="true")&&(Pn=ct,so=R,Fl=null);break;case"focusout":Fl=so=Pn=null;break;case"mousedown":co=!0;break;case"contextmenu":case"mouseup":case"dragend":co=!1,qf(K,a,Q);break;case"selectionchange":if(K0)break;case"keydown":case"keyup":qf(K,a,Q)}var At;if(io)t:{switch(t){case"compositionstart":var _t="onCompositionStart";break t;case"compositionend":_t="onCompositionEnd";break t;case"compositionupdate":_t="onCompositionUpdate";break t}_t=void 0}else In?_f(t,a)&&(_t="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(zf&&a.locale!=="ko"&&(In||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&In&&(At=Sf()):(ja=Q,to="value"in ja?ja.value:ja.textContent,In=!0)),ct=Xu(R,_t),0<ct.length&&(_t=new Ef(_t,t,null,a,Q),K.push({event:_t,listeners:ct}),At?_t.data=At:(At=Of(a),At!==null&&(_t.data=At)))),(At=$0?L0(t,a):k0(t,a))&&(_t=Xu(R,"onBeforeInput"),0<_t.length&&(ct=new Ef("onBeforeInput","beforeinput",null,a,Q),K.push({event:ct,listeners:_t}),ct.data=At)),Cv(K,t,R,a,Q)}hp(K,e)})}function Ai(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Xu(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Gl(t,a),i!=null&&n.unshift(Ai(t,i,r)),i=Gl(t,e),i!=null&&n.push(Ai(t,i,r))),t.tag===3)return n;t=t.return}return[]}function Hv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function gp(t,e,a,n,i){for(var r=e._reactName,c=[];a!==null&&a!==n;){var h=a,S=h.alternate,R=h.stateNode;if(h=h.tag,S!==null&&S===n)break;h!==5&&h!==26&&h!==27||R===null||(S=R,i?(R=Gl(a,r),R!=null&&c.unshift(Ai(a,R,S))):i||(R=Gl(a,r),R!=null&&c.push(Ai(a,R,S)))),a=a.return}c.length!==0&&t.push({event:e,listeners:c})}var Uv=/\r\n?/g,jv=/\u0000|\uFFFD/g;function mp(t){return(typeof t=="string"?t:""+t).replace(Uv,`
`).replace(jv,"")}function vp(t,e){return e=mp(e),mp(t)===e}function $t(t,e,a,n,i,r){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||Wn(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&Wn(t,""+n);break;case"className":Wi(t,"class",n);break;case"tabIndex":Wi(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Wi(t,a,n);break;case"style":vf(t,n,r);break;case"data":if(e!=="object"){Wi(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Fi(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(e!=="input"&&$t(t,e,"name",i.name,i,null),$t(t,e,"formEncType",i.formEncType,i,null),$t(t,e,"formMethod",i.formMethod,i,null),$t(t,e,"formTarget",i.formTarget,i,null)):($t(t,e,"encType",i.encType,i,null),$t(t,e,"method",i.method,i,null),$t(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Fi(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=ga);break;case"onScroll":n!=null&&zt("scroll",t);break;case"onScrollEnd":n!=null&&zt("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=Fi(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":zt("beforetoggle",t),zt("toggle",t),Ki(t,"popover",n);break;case"xlinkActuate":pa(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":pa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":pa(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":pa(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":pa(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":pa(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":pa(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":pa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":pa(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ki(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=f0.get(a)||a,Ki(t,a,n))}}function Us(t,e,a,n,i,r){switch(a){case"style":vf(t,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"children":typeof n=="string"?Wn(t,n):(typeof n=="number"||typeof n=="bigint")&&Wn(t,""+n);break;case"onScroll":n!=null&&zt("scroll",t);break;case"onScrollEnd":n!=null&&zt("scrollend",t);break;case"onClick":n!=null&&(t.onclick=ga);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!of.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),r=t[Ae]||null,r=r!=null?r[a]:null,typeof r=="function"&&t.removeEventListener(e,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,i);break t}a in t?t[a]=n:n===!0?t.setAttribute(a,""):Ki(t,a,n)}}}function me(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":zt("error",t),zt("load",t);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var c=a[r];if(c!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:$t(t,e,r,c,a,null)}}i&&$t(t,e,"srcSet",a.srcSet,a,null),n&&$t(t,e,"src",a.src,a,null);return;case"input":zt("invalid",t);var h=r=c=i=null,S=null,R=null;for(n in a)if(a.hasOwnProperty(n)){var Q=a[n];if(Q!=null)switch(n){case"name":i=Q;break;case"type":c=Q;break;case"checked":S=Q;break;case"defaultChecked":R=Q;break;case"value":r=Q;break;case"defaultValue":h=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(o(137,e));break;default:$t(t,e,n,Q,a,null)}}hf(t,r,h,S,R,c,i,!1);return;case"select":zt("invalid",t),n=c=r=null;for(i in a)if(a.hasOwnProperty(i)&&(h=a[i],h!=null))switch(i){case"value":r=h;break;case"defaultValue":c=h;break;case"multiple":n=h;default:$t(t,e,i,h,a,null)}e=r,a=c,t.multiple=!!n,e!=null?Kn(t,!!n,e,!1):a!=null&&Kn(t,!!n,a,!0);return;case"textarea":zt("invalid",t),r=i=n=null;for(c in a)if(a.hasOwnProperty(c)&&(h=a[c],h!=null))switch(c){case"value":n=h;break;case"defaultValue":i=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(o(91));break;default:$t(t,e,c,h,a,null)}gf(t,n,i,r);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(n=a[S],n!=null))switch(S){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:$t(t,e,S,n,a,null)}return;case"dialog":zt("beforetoggle",t),zt("toggle",t),zt("cancel",t),zt("close",t);break;case"iframe":case"object":zt("load",t);break;case"video":case"audio":for(n=0;n<xi.length;n++)zt(xi[n],t);break;case"image":zt("error",t),zt("load",t);break;case"details":zt("toggle",t);break;case"embed":case"source":case"link":zt("error",t),zt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in a)if(a.hasOwnProperty(R)&&(n=a[R],n!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:$t(t,e,R,n,a,null)}return;default:if(Wr(e)){for(Q in a)a.hasOwnProperty(Q)&&(n=a[Q],n!==void 0&&Us(t,e,Q,n,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(n=a[h],n!=null&&$t(t,e,h,n,a,null))}function $v(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,c=null,h=null,S=null,R=null,Q=null;for(L in a){var K=a[L];if(a.hasOwnProperty(L)&&K!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":S=K;default:n.hasOwnProperty(L)||$t(t,e,L,null,n,K)}}for(var M in n){var L=n[M];if(K=a[M],n.hasOwnProperty(M)&&(L!=null||K!=null))switch(M){case"type":r=L;break;case"name":i=L;break;case"checked":R=L;break;case"defaultChecked":Q=L;break;case"value":c=L;break;case"defaultValue":h=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(o(137,e));break;default:L!==K&&$t(t,e,M,L,n,K)}}Zr(t,c,h,S,R,Q,r,i);return;case"select":L=c=h=M=null;for(r in a)if(S=a[r],a.hasOwnProperty(r)&&S!=null)switch(r){case"value":break;case"multiple":L=S;default:n.hasOwnProperty(r)||$t(t,e,r,null,n,S)}for(i in n)if(r=n[i],S=a[i],n.hasOwnProperty(i)&&(r!=null||S!=null))switch(i){case"value":M=r;break;case"defaultValue":h=r;break;case"multiple":c=r;default:r!==S&&$t(t,e,i,r,n,S)}e=h,a=c,n=L,M!=null?Kn(t,!!a,M,!1):!!n!=!!a&&(e!=null?Kn(t,!!a,e,!0):Kn(t,!!a,a?[]:"",!1));return;case"textarea":L=M=null;for(h in a)if(i=a[h],a.hasOwnProperty(h)&&i!=null&&!n.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:$t(t,e,h,null,n,i)}for(c in n)if(i=n[c],r=a[c],n.hasOwnProperty(c)&&(i!=null||r!=null))switch(c){case"value":M=i;break;case"defaultValue":L=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==r&&$t(t,e,c,i,n,r)}pf(t,M,L);return;case"option":for(var rt in a)if(M=a[rt],a.hasOwnProperty(rt)&&M!=null&&!n.hasOwnProperty(rt))switch(rt){case"selected":t.selected=!1;break;default:$t(t,e,rt,null,n,M)}for(S in n)if(M=n[S],L=a[S],n.hasOwnProperty(S)&&M!==L&&(M!=null||L!=null))switch(S){case"selected":t.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:$t(t,e,S,M,n,L)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pt in a)M=a[pt],a.hasOwnProperty(pt)&&M!=null&&!n.hasOwnProperty(pt)&&$t(t,e,pt,null,n,M);for(R in n)if(M=n[R],L=a[R],n.hasOwnProperty(R)&&M!==L&&(M!=null||L!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,e));break;default:$t(t,e,R,M,n,L)}return;default:if(Wr(e)){for(var Lt in a)M=a[Lt],a.hasOwnProperty(Lt)&&M!==void 0&&!n.hasOwnProperty(Lt)&&Us(t,e,Lt,void 0,n,M);for(Q in n)M=n[Q],L=a[Q],!n.hasOwnProperty(Q)||M===L||M===void 0&&L===void 0||Us(t,e,Q,M,n,L);return}}for(var D in a)M=a[D],a.hasOwnProperty(D)&&M!=null&&!n.hasOwnProperty(D)&&$t(t,e,D,null,n,M);for(K in n)M=n[K],L=a[K],!n.hasOwnProperty(K)||M===L||M==null&&L==null||$t(t,e,K,M,n,L)}function yp(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],r=i.transferSize,c=i.initiatorType,h=i.duration;if(r&&h&&yp(c)){for(c=0,h=i.responseEnd,n+=1;n<a.length;n++){var S=a[n],R=S.startTime;if(R>h)break;var Q=S.transferSize,K=S.initiatorType;Q&&yp(K)&&(S=S.responseEnd,c+=Q*(S<h?1:(h-R)/(S-R)))}if(--n,e+=8*(r+c)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var js=null,$s=null;function Vu(t){return t.nodeType===9?t:t.ownerDocument}function bp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ls(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ks=null;function kv(){var t=window.event;return t&&t.type==="popstate"?t===ks?!1:(ks=t,!0):(ks=null,!1)}var xp=typeof setTimeout=="function"?setTimeout:void 0,qv=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,Yv=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(t){return Ap.resolve(null).then(t).catch(Gv)}:xp;function Gv(t){setTimeout(function(){throw t})}function tn(t){return t==="head"}function Ep(t,e){var a=e,n=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){t.removeChild(i),Tl(e);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Ei(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ei(a);for(var r=a.firstChild;r;){var c=r.nextSibling,h=r.nodeName;r[ql]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=c}}else a==="body"&&Ei(t.ownerDocument.body);a=i}while(a);Tl(e)}function wp(t,e){var a=t;t=0;do{var n=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=n}while(a)}function qs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qs(a),Xr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Qv(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[ql])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=Ke(t.nextSibling),t===null)break}return null}function Xv(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ke(t.nextSibling),t===null))return null;return t}function zp(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ke(t.nextSibling),t===null))return null;return t}function Ys(t){return t.data==="$?"||t.data==="$~"}function Gs(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Vv(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Ke(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Qs=null;function Tp(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Ke(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function _p(t,e,a){switch(e=Vu(a),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Ei(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Xr(t)}var We=new Map,Op=new Set;function Zu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ca=P.d;P.d={f:Zv,r:Kv,D:Wv,C:Jv,L:Fv,m:Iv,X:ty,S:Pv,M:ey};function Zv(){var t=Ca.f(),e=$u();return t||e}function Kv(t){var e=Xn(t);e!==null&&e.tag===5&&e.type==="form"?Vd(e):Ca.r(t)}var El=typeof document>"u"?null:document;function Rp(t,e,a){var n=El;if(n&&typeof e=="string"&&e){var i=qe(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Op.has(i)||(Op.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),me(e,"link",t),oe(e),n.head.appendChild(e)))}}function Wv(t){Ca.D(t),Rp("dns-prefetch",t,null)}function Jv(t,e){Ca.C(t,e),Rp("preconnect",t,e)}function Fv(t,e,a){Ca.L(t,e,a);var n=El;if(n&&t&&e){var i='link[rel="preload"][as="'+qe(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+qe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+qe(a.imageSizes)+'"]')):i+='[href="'+qe(t)+'"]';var r=i;switch(e){case"style":r=wl(t);break;case"script":r=zl(t)}We.has(r)||(t=y({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),We.set(r,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(wi(r))||e==="script"&&n.querySelector(zi(r))||(e=n.createElement("link"),me(e,"link",t),oe(e),n.head.appendChild(e)))}}function Iv(t,e){Ca.m(t,e);var a=El;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+qe(n)+'"][href="'+qe(t)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=zl(t)}if(!We.has(r)&&(t=y({rel:"modulepreload",href:t},e),We.set(r,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zi(r)))return}n=a.createElement("link"),me(n,"link",t),oe(n),a.head.appendChild(n)}}}function Pv(t,e,a){Ca.S(t,e,a);var n=El;if(n&&t){var i=Vn(n).hoistableStyles,r=wl(t);e=e||"default";var c=i.get(r);if(!c){var h={loading:0,preload:null};if(c=n.querySelector(wi(r)))h.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":e},a),(a=We.get(r))&&Xs(t,a);var S=c=n.createElement("link");oe(S),me(S,"link",t),S._p=new Promise(function(R,Q){S.onload=R,S.onerror=Q}),S.addEventListener("load",function(){h.loading|=1}),S.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Ku(c,e,n)}c={type:"stylesheet",instance:c,count:1,state:h},i.set(r,c)}}}function ty(t,e){Ca.X(t,e);var a=El;if(a&&t){var n=Vn(a).hoistableScripts,i=zl(t),r=n.get(i);r||(r=a.querySelector(zi(i)),r||(t=y({src:t,async:!0},e),(e=We.get(i))&&Vs(t,e),r=a.createElement("script"),oe(r),me(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function ey(t,e){Ca.M(t,e);var a=El;if(a&&t){var n=Vn(a).hoistableScripts,i=zl(t),r=n.get(i);r||(r=a.querySelector(zi(i)),r||(t=y({src:t,async:!0,type:"module"},e),(e=We.get(i))&&Vs(t,e),r=a.createElement("script"),oe(r),me(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function Cp(t,e,a,n){var i=(i=nt.current)?Zu(i):null;if(!i)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=wl(a.href),a=Vn(i).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=wl(a.href);var r=Vn(i).hoistableStyles,c=r.get(t);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,c),(r=i.querySelector(wi(t)))&&!r._p&&(c.instance=r,c.state.loading=5),We.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},We.set(t,a),r||ay(i,t,a,c.state))),e&&n===null)throw Error(o(528,""));return c}if(e&&n!==null)throw Error(o(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=zl(a),a=Vn(i).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function wl(t){return'href="'+qe(t)+'"'}function wi(t){return'link[rel="stylesheet"]['+t+"]"}function Mp(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function ay(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),me(e,"link",a),oe(e),t.head.appendChild(e))}function zl(t){return'[src="'+qe(t)+'"]'}function zi(t){return"script[async]"+t}function Np(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+qe(a.href)+'"]');if(n)return e.instance=n,oe(n),n;var i=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),oe(n),me(n,"style",i),Ku(n,a.precedence,t),e.instance=n;case"stylesheet":i=wl(a.href);var r=t.querySelector(wi(i));if(r)return e.state.loading|=4,e.instance=r,oe(r),r;n=Mp(a),(i=We.get(i))&&Xs(n,i),r=(t.ownerDocument||t).createElement("link"),oe(r);var c=r;return c._p=new Promise(function(h,S){c.onload=h,c.onerror=S}),me(r,"link",n),e.state.loading|=4,Ku(r,a.precedence,t),e.instance=r;case"script":return r=zl(a.src),(i=t.querySelector(zi(r)))?(e.instance=i,oe(i),i):(n=a,(i=We.get(r))&&(n=y({},a),Vs(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),oe(i),me(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Ku(n,a.precedence,t));return e.instance}function Ku(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,c=0;c<n.length;c++){var h=n[c];if(h.dataset.precedence===e)r=h;else if(r!==i)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Xs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Vs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Wu=null;function Bp(t,e,a){if(Wu===null){var n=new Map,i=Wu=new Map;i.set(a,n)}else i=Wu,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var r=a[i];if(!(r[ql]||r[de]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(e)||"";c=t+c;var h=n.get(c);h?h.push(r):n.set(c,[r])}}return n}function Hp(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function ny(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Up(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ly(t,e,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=wl(n.href),r=e.querySelector(wi(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ju.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=r,oe(r);return}r=e.ownerDocument||e,n=Mp(n),(i=We.get(i))&&Xs(n,i),r=r.createElement("link"),oe(r);var c=r;c._p=new Promise(function(h,S){c.onload=h,c.onerror=S}),me(r,"link",n),a.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ju.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Zs=0;function iy(t,e){return t.stylesheets&&t.count===0&&Iu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var n=setTimeout(function(){if(t.stylesheets&&Iu(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&Zs===0&&(Zs=62500*Lv());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Iu(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>Zs?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Ju(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Iu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fu=null;function Iu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fu=new Map,e.forEach(uy,t),Fu=null,Ju.call(t))}function uy(t,e){if(!(e.state.loading&4)){var a=Fu.get(t);if(a)var n=a.get(null);else{a=new Map,Fu.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var c=i[r];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),n=c)}n&&a.set(null,n)}i=e.instance,c=i.getAttribute("data-precedence"),r=a.get(c)||n,r===n&&a.set(null,i),a.set(c,i),this.count++,n=Ju.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Ti={$$typeof:w,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function ry(t,e,a,n,i,r,c,h,S){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qr(0),this.hiddenUpdates=qr(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function jp(t,e,a,n,i,r,c,h,S,R,Q,K){return t=new ry(t,e,a,c,S,R,Q,K,h),e=1,r===!0&&(e|=24),r=Me(3,null,null,e),t.current=r,r.stateNode=t,e=To(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:e},Ro(r),t}function $p(t){return t?(t=al,t):al}function Lp(t,e,a,n,i,r){i=$p(i),n.context===null?n.context=i:n.pendingContext=i,n=Ga(e),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=Qa(t,n,e),a!==null&&(_e(a,t,e),li(a,t,e))}function kp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Ks(t,e){kp(t,e),(t=t.alternate)&&kp(t,e)}function qp(t){if(t.tag===13||t.tag===31){var e=An(t,67108864);e!==null&&_e(e,t,67108864),Ks(t,67108864)}}function Yp(t){if(t.tag===13||t.tag===31){var e=je();e=Yr(e);var a=An(t,e);a!==null&&_e(a,t,e),Ks(t,e)}}var Pu=!0;function oy(t,e,a,n){var i=N.T;N.T=null;var r=P.p;try{P.p=2,Ws(t,e,a,n)}finally{P.p=r,N.T=i}}function sy(t,e,a,n){var i=N.T;N.T=null;var r=P.p;try{P.p=8,Ws(t,e,a,n)}finally{P.p=r,N.T=i}}function Ws(t,e,a,n){if(Pu){var i=Js(n);if(i===null)Hs(t,e,n,tr,a),Qp(t,n);else if(fy(i,t,e,a,n))n.stopPropagation();else if(Qp(t,n),e&4&&-1<cy.indexOf(t)){for(;i!==null;){var r=Xn(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=vn(r.pendingLanes);if(c!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;c;){var S=1<<31-Re(c);h.entanglements[1]|=S,c&=~S}oa(r),(Nt&6)===0&&(Uu=xe()+500,Si(0))}}break;case 31:case 13:h=An(r,2),h!==null&&_e(h,r,2),$u(),Ks(r,2)}if(r=Js(n),r===null&&Hs(t,e,n,tr,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else Hs(t,e,n,null,a)}}function Js(t){return t=Fr(t),Fs(t)}var tr=null;function Fs(t){if(tr=null,t=Qn(t),t!==null){var e=d(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=p(e),t!==null)return t;t=null}else if(a===31){if(t=m(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return tr=t,null}function Gp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wm()){case Jc:return 2;case Fc:return 8;case Gi:case Jm:return 32;case Ic:return 268435456;default:return 32}default:return 32}}var Is=!1,en=null,an=null,nn=null,Di=new Map,_i=new Map,ln=[],cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qp(t,e){switch(t){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":Di.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_i.delete(e.pointerId)}}function Oi(t,e,a,n,i,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},e!==null&&(e=Xn(e),e!==null&&qp(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function fy(t,e,a,n,i){switch(e){case"focusin":return en=Oi(en,t,e,a,n,i),!0;case"dragenter":return an=Oi(an,t,e,a,n,i),!0;case"mouseover":return nn=Oi(nn,t,e,a,n,i),!0;case"pointerover":var r=i.pointerId;return Di.set(r,Oi(Di.get(r)||null,t,e,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,_i.set(r,Oi(_i.get(r)||null,t,e,a,n,i)),!0}return!1}function Xp(t){var e=Qn(t.target);if(e!==null){var a=d(e);if(a!==null){if(e=a.tag,e===13){if(e=p(a),e!==null){t.blockedOn=e,lf(t.priority,function(){Yp(a)});return}}else if(e===31){if(e=m(a),e!==null){t.blockedOn=e,lf(t.priority,function(){Yp(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function er(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Js(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);Jr=n,a.target.dispatchEvent(n),Jr=null}else return e=Xn(a),e!==null&&qp(e),t.blockedOn=a,!1;e.shift()}return!0}function Vp(t,e,a){er(t)&&a.delete(e)}function dy(){Is=!1,en!==null&&er(en)&&(en=null),an!==null&&er(an)&&(an=null),nn!==null&&er(nn)&&(nn=null),Di.forEach(Vp),_i.forEach(Vp)}function ar(t,e){t.blockedOn===e&&(t.blockedOn=null,Is||(Is=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,dy)))}var nr=null;function Zp(t){nr!==t&&(nr=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){nr===t&&(nr=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(Fs(n||a)===null)continue;break}var r=Xn(a);r!==null&&(t.splice(e,3),e-=3,Jo(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Tl(t){function e(S){return ar(S,t)}en!==null&&ar(en,t),an!==null&&ar(an,t),nn!==null&&ar(nn,t),Di.forEach(e),_i.forEach(e);for(var a=0;a<ln.length;a++){var n=ln[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<ln.length&&(a=ln[0],a.blockedOn===null);)Xp(a),a.blockedOn===null&&ln.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],c=i[Ae]||null;if(typeof r=="function")c||Zp(a);else if(c){var h=null;if(r&&r.hasAttribute("formAction")){if(i=r,c=r[Ae]||null)h=c.formAction;else if(Fs(i)!==null)continue}else h=c.action;typeof h=="function"?a[n+1]=h:(a.splice(n,3),n-=3),Zp(a)}}}function Kp(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(c){return i=c})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Ps(t){this._internalRoot=t}lr.prototype.render=Ps.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var a=e.current,n=je();Lp(a,n,t,e,null,null)},lr.prototype.unmount=Ps.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Lp(t.current,2,null,t,null,null),$u(),e[Gn]=null}};function lr(t){this._internalRoot=t}lr.prototype.unstable_scheduleHydration=function(t){if(t){var e=nf();t={blockedOn:null,target:t,priority:e};for(var a=0;a<ln.length&&e!==0&&e<ln[a].priority;a++);ln.splice(a,0,t),a===0&&Xp(t)}};var Wp=u.version;if(Wp!=="19.2.0")throw Error(o(527,Wp,"19.2.0"));P.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=g(e),t=t!==null?E(t):null,t=t===null?null:t.stateNode,t};var hy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ir.isDisabled&&ir.supportsFiber)try{$l=ir.inject(hy),Oe=ir}catch{}}return Ci.createRoot=function(t,e){if(!f(t))throw Error(o(299));var a=!1,n="",i=ah,r=nh,c=lh;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError)),e=jp(t,1,!1,null,null,a,n,null,i,r,c,Kp),t[Gn]=e.current,Bs(t),new Ps(e)},Ci.hydrateRoot=function(t,e,a){if(!f(t))throw Error(o(299));var n=!1,i="",r=ah,c=nh,h=lh,S=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.formState!==void 0&&(S=a.formState)),e=jp(t,1,!0,e,a??null,n,i,S,r,c,h,Kp),e.context=$p(null),a=e.current,n=je(),n=Yr(n),i=Ga(n),i.callback=null,Qa(a,i,n),a=n,e.current.lanes=a,kl(e,a),oa(e),t[Gn]=e.current,Bs(t),new lr(e)},Ci.version="19.2.0",Ci}var ig;function Ey(){if(ig)return ac.exports;ig=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),ac.exports=Ay(),ac.exports}var wy=Ey(),fe=function(){return fe=Object.assign||function(u){for(var s,o=1,f=arguments.length;o<f;o++){s=arguments[o];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(u[d]=s[d])}return u},fe.apply(this,arguments)};function ji(l,u,s){if(s||arguments.length===2)for(var o=0,f=u.length,d;o<f;o++)(d||!(o in u))&&(d||(d=Array.prototype.slice.call(u,0,o)),d[o]=u[o]);return l.concat(d||Array.prototype.slice.call(u))}var Xt="-ms-",Hi="-moz-",Bt="-webkit-",Fg="comm",Cr="rule",Mc="decl",zy="@import",Ig="@keyframes",Ty="@layer",Pg=Math.abs,Nc=String.fromCharCode,vc=Object.assign;function Dy(l,u){return ce(l,0)^45?(((u<<2^ce(l,0))<<2^ce(l,1))<<2^ce(l,2))<<2^ce(l,3):0}function tm(l){return l.trim()}function Na(l,u){return(l=u.exec(l))?l[0]:l}function Et(l,u,s){return l.replace(u,s)}function vr(l,u,s){return l.indexOf(u,s)}function ce(l,u){return l.charCodeAt(u)|0}function Ml(l,u,s){return l.slice(u,s)}function fa(l){return l.length}function em(l){return l.length}function Bi(l,u){return u.push(l),l}function _y(l,u){return l.map(u).join("")}function ug(l,u){return l.filter(function(s){return!Na(s,u)})}var Mr=1,Nl=1,am=0,Je=0,ie=0,jl="";function Nr(l,u,s,o,f,d,p,m){return{value:l,root:u,parent:s,type:o,props:f,children:d,line:Mr,column:Nl,length:p,return:"",siblings:m}}function cn(l,u){return vc(Nr("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},u)}function Dl(l){for(;l.root;)l=cn(l.root,{children:[l]});Bi(l,l.siblings)}function Oy(){return ie}function Ry(){return ie=Je>0?ce(jl,--Je):0,Nl--,ie===10&&(Nl=1,Mr--),ie}function ea(){return ie=Je<am?ce(jl,Je++):0,Nl++,ie===10&&(Nl=1,Mr++),ie}function $n(){return ce(jl,Je)}function yr(){return Je}function Br(l,u){return Ml(jl,l,u)}function yc(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cy(l){return Mr=Nl=1,am=fa(jl=l),Je=0,[]}function My(l){return jl="",l}function uc(l){return tm(Br(Je-1,bc(l===91?l+2:l===40?l+1:l)))}function Ny(l){for(;(ie=$n())&&ie<33;)ea();return yc(l)>2||yc(ie)>3?"":" "}function By(l,u){for(;--u&&ea()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return Br(l,yr()+(u<6&&$n()==32&&ea()==32))}function bc(l){for(;ea();)switch(ie){case l:return Je;case 34:case 39:l!==34&&l!==39&&bc(ie);break;case 40:l===41&&bc(l);break;case 92:ea();break}return Je}function Hy(l,u){for(;ea()&&l+ie!==57;)if(l+ie===84&&$n()===47)break;return"/*"+Br(u,Je-1)+"*"+Nc(l===47?l:ea())}function Uy(l){for(;!yc($n());)ea();return Br(l,Je)}function jy(l){return My(br("",null,null,null,[""],l=Cy(l),0,[0],l))}function br(l,u,s,o,f,d,p,m,v){for(var g=0,E=0,y=p,T=0,C=0,$=0,G=1,U=1,_=1,z=0,w="",B=f,q=d,X=o,b=w;U;)switch($=z,z=ea()){case 40:if($!=108&&ce(b,y-1)==58){vr(b+=Et(uc(z),"&","&\f"),"&\f",Pg(g?m[g-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:b+=uc(z);break;case 9:case 10:case 13:case 32:b+=Ny($);break;case 92:b+=By(yr()-1,7);continue;case 47:switch($n()){case 42:case 47:Bi($y(Hy(ea(),yr()),u,s,v),v);break;default:b+="/"}break;case 123*G:m[g++]=fa(b)*_;case 125*G:case 59:case 0:switch(z){case 0:case 125:U=0;case 59+E:_==-1&&(b=Et(b,/\f/g,"")),C>0&&fa(b)-y&&Bi(C>32?og(b+";",o,s,y-1,v):og(Et(b," ","")+";",o,s,y-2,v),v);break;case 59:b+=";";default:if(Bi(X=rg(b,u,s,g,E,f,m,w,B=[],q=[],y,d),d),z===123)if(E===0)br(b,u,X,X,B,d,y,m,q);else switch(T===99&&ce(b,3)===110?100:T){case 100:case 108:case 109:case 115:br(l,X,X,o&&Bi(rg(l,X,X,0,0,f,m,w,f,B=[],y,q),q),f,q,y,m,o?B:q);break;default:br(b,X,X,X,[""],q,0,m,q)}}g=E=C=0,G=_=1,w=b="",y=p;break;case 58:y=1+fa(b),C=$;default:if(G<1){if(z==123)--G;else if(z==125&&G++==0&&Ry()==125)continue}switch(b+=Nc(z),z*G){case 38:_=E>0?1:(b+="\f",-1);break;case 44:m[g++]=(fa(b)-1)*_,_=1;break;case 64:$n()===45&&(b+=uc(ea())),T=$n(),E=y=fa(w=b+=Uy(yr())),z++;break;case 45:$===45&&fa(b)==2&&(G=0)}}return d}function rg(l,u,s,o,f,d,p,m,v,g,E,y){for(var T=f-1,C=f===0?d:[""],$=em(C),G=0,U=0,_=0;G<o;++G)for(var z=0,w=Ml(l,T+1,T=Pg(U=p[G])),B=l;z<$;++z)(B=tm(U>0?C[z]+" "+w:Et(w,/&\f/g,C[z])))&&(v[_++]=B);return Nr(l,u,s,f===0?Cr:m,v,g,E,y)}function $y(l,u,s,o){return Nr(l,u,s,Fg,Nc(Oy()),Ml(l,2,-2),0,o)}function og(l,u,s,o,f){return Nr(l,u,s,Mc,Ml(l,0,o),Ml(l,o+1,-1),o,f)}function nm(l,u,s){switch(Dy(l,u)){case 5103:return Bt+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Bt+l+l;case 4789:return Hi+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return Bt+l+Hi+l+Xt+l+l;case 5936:switch(ce(l,u+11)){case 114:return Bt+l+Xt+Et(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return Bt+l+Xt+Et(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return Bt+l+Xt+Et(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return Bt+l+Xt+l+l;case 6165:return Bt+l+Xt+"flex-"+l+l;case 5187:return Bt+l+Et(l,/(\w+).+(:[^]+)/,Bt+"box-$1$2"+Xt+"flex-$1$2")+l;case 5443:return Bt+l+Xt+"flex-item-"+Et(l,/flex-|-self/g,"")+(Na(l,/flex-|baseline/)?"":Xt+"grid-row-"+Et(l,/flex-|-self/g,""))+l;case 4675:return Bt+l+Xt+"flex-line-pack"+Et(l,/align-content|flex-|-self/g,"")+l;case 5548:return Bt+l+Xt+Et(l,"shrink","negative")+l;case 5292:return Bt+l+Xt+Et(l,"basis","preferred-size")+l;case 6060:return Bt+"box-"+Et(l,"-grow","")+Bt+l+Xt+Et(l,"grow","positive")+l;case 4554:return Bt+Et(l,/([^-])(transform)/g,"$1"+Bt+"$2")+l;case 6187:return Et(Et(Et(l,/(zoom-|grab)/,Bt+"$1"),/(image-set)/,Bt+"$1"),l,"")+l;case 5495:case 3959:return Et(l,/(image-set\([^]*)/,Bt+"$1$`$1");case 4968:return Et(Et(l,/(.+:)(flex-)?(.*)/,Bt+"box-pack:$3"+Xt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Bt+l+l;case 4200:if(!Na(l,/flex-|baseline/))return Xt+"grid-column-align"+Ml(l,u)+l;break;case 2592:case 3360:return Xt+Et(l,"template-","")+l;case 4384:case 3616:return s&&s.some(function(o,f){return u=f,Na(o.props,/grid-\w+-end/)})?~vr(l+(s=s[u].value),"span",0)?l:Xt+Et(l,"-start","")+l+Xt+"grid-row-span:"+(~vr(s,"span",0)?Na(s,/\d+/):+Na(s,/\d+/)-+Na(l,/\d+/))+";":Xt+Et(l,"-start","")+l;case 4896:case 4128:return s&&s.some(function(o){return Na(o.props,/grid-\w+-start/)})?l:Xt+Et(Et(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return Et(l,/(.+)-inline(.+)/,Bt+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fa(l)-1-u>6)switch(ce(l,u+1)){case 109:if(ce(l,u+4)!==45)break;case 102:return Et(l,/(.+:)(.+)-([^]+)/,"$1"+Bt+"$2-$3$1"+Hi+(ce(l,u+3)==108?"$3":"$2-$3"))+l;case 115:return~vr(l,"stretch",0)?nm(Et(l,"stretch","fill-available"),u,s)+l:l}break;case 5152:case 5920:return Et(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,f,d,p,m,v,g){return Xt+f+":"+d+g+(p?Xt+f+"-span:"+(m?v:+v-+d)+g:"")+l});case 4949:if(ce(l,u+6)===121)return Et(l,":",":"+Bt)+l;break;case 6444:switch(ce(l,ce(l,14)===45?18:11)){case 120:return Et(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Bt+(ce(l,14)===45?"inline-":"")+"box$3$1"+Bt+"$2$3$1"+Xt+"$2box$3")+l;case 100:return Et(l,":",":"+Xt)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Et(l,"scroll-","scroll-snap-")+l}return l}function Er(l,u){for(var s="",o=0;o<l.length;o++)s+=u(l[o],o,l,u)||"";return s}function Ly(l,u,s,o){switch(l.type){case Ty:if(l.children.length)break;case zy:case Mc:return l.return=l.return||l.value;case Fg:return"";case Ig:return l.return=l.value+"{"+Er(l.children,o)+"}";case Cr:if(!fa(l.value=l.props.join(",")))return""}return fa(s=Er(l.children,o))?l.return=l.value+"{"+s+"}":""}function ky(l){var u=em(l);return function(s,o,f,d){for(var p="",m=0;m<u;m++)p+=l[m](s,o,f,d)||"";return p}}function qy(l){return function(u){u.root||(u=u.return)&&l(u)}}function Yy(l,u,s,o){if(l.length>-1&&!l.return)switch(l.type){case Mc:l.return=nm(l.value,l.length,s);return;case Ig:return Er([cn(l,{value:Et(l.value,"@","@"+Bt)})],o);case Cr:if(l.length)return _y(s=l.props,function(f){switch(Na(f,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Dl(cn(l,{props:[Et(f,/:(read-\w+)/,":"+Hi+"$1")]})),Dl(cn(l,{props:[f]})),vc(l,{props:ug(s,o)});break;case"::placeholder":Dl(cn(l,{props:[Et(f,/:(plac\w+)/,":"+Bt+"input-$1")]})),Dl(cn(l,{props:[Et(f,/:(plac\w+)/,":"+Hi+"$1")]})),Dl(cn(l,{props:[Et(f,/:(plac\w+)/,Xt+"input-$1")]})),Dl(cn(l,{props:[f]})),vc(l,{props:ug(s,o)});break}return""})}}var Gy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$e={},Bl=typeof process<"u"&&$e!==void 0&&($e.REACT_APP_SC_ATTR||$e.SC_ATTR)||"data-styled",lm="active",im="data-styled-version",Hr="6.1.19",Bc=`/*!sc*/
`,wr=typeof window<"u"&&typeof document<"u",Qy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$e!==void 0&&$e.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$e.REACT_APP_SC_DISABLE_SPEEDY!==""?$e.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$e.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$e!==void 0&&$e.SC_DISABLE_SPEEDY!==void 0&&$e.SC_DISABLE_SPEEDY!==""&&$e.SC_DISABLE_SPEEDY!=="false"&&$e.SC_DISABLE_SPEEDY),Xy={},Ur=Object.freeze([]),Hl=Object.freeze({});function um(l,u,s){return s===void 0&&(s=Hl),l.theme!==s.theme&&l.theme||u||s.theme}var rm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Vy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zy=/(^-|-$)/g;function sg(l){return l.replace(Vy,"-").replace(Zy,"")}var Ky=/(a)(d)/gi,ur=52,cg=function(l){return String.fromCharCode(l+(l>25?39:97))};function Sc(l){var u,s="";for(u=Math.abs(l);u>ur;u=u/ur|0)s=cg(u%ur)+s;return(cg(u%ur)+s).replace(Ky,"$1-$2")}var rc,om=5381,Rl=function(l,u){for(var s=u.length;s;)l=33*l^u.charCodeAt(--s);return l},sm=function(l){return Rl(om,l)};function cm(l){return Sc(sm(l)>>>0)}function Wy(l){return l.displayName||l.name||"Component"}function oc(l){return typeof l=="string"&&!0}var fm=typeof Symbol=="function"&&Symbol.for,dm=fm?Symbol.for("react.memo"):60115,Jy=fm?Symbol.for("react.forward_ref"):60112,Fy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Iy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Py=((rc={})[Jy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rc[dm]=hm,rc);function fg(l){return("type"in(u=l)&&u.type.$$typeof)===dm?hm:"$$typeof"in l?Py[l.$$typeof]:Fy;var u}var tb=Object.defineProperty,eb=Object.getOwnPropertyNames,dg=Object.getOwnPropertySymbols,ab=Object.getOwnPropertyDescriptor,nb=Object.getPrototypeOf,hg=Object.prototype;function pm(l,u,s){if(typeof u!="string"){if(hg){var o=nb(u);o&&o!==hg&&pm(l,o,s)}var f=eb(u);dg&&(f=f.concat(dg(u)));for(var d=fg(l),p=fg(u),m=0;m<f.length;++m){var v=f[m];if(!(v in Iy||s&&s[v]||p&&v in p||d&&v in d)){var g=ab(u,v);try{tb(l,v,g)}catch{}}}}return l}function Ln(l){return typeof l=="function"}function Hc(l){return typeof l=="object"&&"styledComponentId"in l}function Un(l,u){return l&&u?"".concat(l," ").concat(u):l||u||""}function xc(l,u){if(l.length===0)return"";for(var s=l[0],o=1;o<l.length;o++)s+=l[o];return s}function $i(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Ac(l,u,s){if(s===void 0&&(s=!1),!s&&!$i(l)&&!Array.isArray(l))return u;if(Array.isArray(u))for(var o=0;o<u.length;o++)l[o]=Ac(l[o],u[o]);else if($i(u))for(var o in u)l[o]=Ac(l[o],u[o]);return l}function Uc(l,u){Object.defineProperty(l,"toString",{value:u})}function kn(l){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var lb=(function(){function l(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return l.prototype.indexOfGroup=function(u){for(var s=0,o=0;o<u;o++)s+=this.groupSizes[o];return s},l.prototype.insertRules=function(u,s){if(u>=this.groupSizes.length){for(var o=this.groupSizes,f=o.length,d=f;u>=d;)if((d<<=1)<0)throw kn(16,"".concat(u));this.groupSizes=new Uint32Array(d),this.groupSizes.set(o),this.length=d;for(var p=f;p<d;p++)this.groupSizes[p]=0}for(var m=this.indexOfGroup(u+1),v=(p=0,s.length);p<v;p++)this.tag.insertRule(m,s[p])&&(this.groupSizes[u]++,m++)},l.prototype.clearGroup=function(u){if(u<this.length){var s=this.groupSizes[u],o=this.indexOfGroup(u),f=o+s;this.groupSizes[u]=0;for(var d=o;d<f;d++)this.tag.deleteRule(o)}},l.prototype.getGroup=function(u){var s="";if(u>=this.length||this.groupSizes[u]===0)return s;for(var o=this.groupSizes[u],f=this.indexOfGroup(u),d=f+o,p=f;p<d;p++)s+="".concat(this.tag.getRule(p)).concat(Bc);return s},l})(),Sr=new Map,zr=new Map,xr=1,rr=function(l){if(Sr.has(l))return Sr.get(l);for(;zr.has(xr);)xr++;var u=xr++;return Sr.set(l,u),zr.set(u,l),u},ib=function(l,u){xr=u+1,Sr.set(l,u),zr.set(u,l)},ub="style[".concat(Bl,"][").concat(im,'="').concat(Hr,'"]'),rb=new RegExp("^".concat(Bl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ob=function(l,u,s){for(var o,f=s.split(","),d=0,p=f.length;d<p;d++)(o=f[d])&&l.registerName(u,o)},sb=function(l,u){for(var s,o=((s=u.textContent)!==null&&s!==void 0?s:"").split(Bc),f=[],d=0,p=o.length;d<p;d++){var m=o[d].trim();if(m){var v=m.match(rb);if(v){var g=0|parseInt(v[1],10),E=v[2];g!==0&&(ib(E,g),ob(l,E,v[3]),l.getTag().insertRules(g,f)),f.length=0}else f.push(m)}}},pg=function(l){for(var u=document.querySelectorAll(ub),s=0,o=u.length;s<o;s++){var f=u[s];f&&f.getAttribute(Bl)!==lm&&(sb(l,f),f.parentNode&&f.parentNode.removeChild(f))}};function cb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gm=function(l){var u=document.head,s=l||u,o=document.createElement("style"),f=(function(m){var v=Array.from(m.querySelectorAll("style[".concat(Bl,"]")));return v[v.length-1]})(s),d=f!==void 0?f.nextSibling:null;o.setAttribute(Bl,lm),o.setAttribute(im,Hr);var p=cb();return p&&o.setAttribute("nonce",p),s.insertBefore(o,d),o},fb=(function(){function l(u){this.element=gm(u),this.element.appendChild(document.createTextNode("")),this.sheet=(function(s){if(s.sheet)return s.sheet;for(var o=document.styleSheets,f=0,d=o.length;f<d;f++){var p=o[f];if(p.ownerNode===s)return p}throw kn(17)})(this.element),this.length=0}return l.prototype.insertRule=function(u,s){try{return this.sheet.insertRule(s,u),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},l.prototype.getRule=function(u){var s=this.sheet.cssRules[u];return s&&s.cssText?s.cssText:""},l})(),db=(function(){function l(u){this.element=gm(u),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(u,s){if(u<=this.length&&u>=0){var o=document.createTextNode(s);return this.element.insertBefore(o,this.nodes[u]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},l.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},l})(),hb=(function(){function l(u){this.rules=[],this.length=0}return l.prototype.insertRule=function(u,s){return u<=this.length&&(this.rules.splice(u,0,s),this.length++,!0)},l.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},l.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},l})(),gg=wr,pb={isServer:!wr,useCSSOMInjection:!Qy},Tr=(function(){function l(u,s,o){u===void 0&&(u=Hl),s===void 0&&(s={});var f=this;this.options=fe(fe({},pb),u),this.gs=s,this.names=new Map(o),this.server=!!u.isServer,!this.server&&wr&&gg&&(gg=!1,pg(this)),Uc(this,function(){return(function(d){for(var p=d.getTag(),m=p.length,v="",g=function(y){var T=(function(_){return zr.get(_)})(y);if(T===void 0)return"continue";var C=d.names.get(T),$=p.getGroup(y);if(C===void 0||!C.size||$.length===0)return"continue";var G="".concat(Bl,".g").concat(y,'[id="').concat(T,'"]'),U="";C!==void 0&&C.forEach(function(_){_.length>0&&(U+="".concat(_,","))}),v+="".concat($).concat(G,'{content:"').concat(U,'"}').concat(Bc)},E=0;E<m;E++)g(E);return v})(f)})}return l.registerId=function(u){return rr(u)},l.prototype.rehydrate=function(){!this.server&&wr&&pg(this)},l.prototype.reconstructWithOptions=function(u,s){return s===void 0&&(s=!0),new l(fe(fe({},this.options),u),this.gs,s&&this.names||void 0)},l.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(u=(function(s){var o=s.useCSSOMInjection,f=s.target;return s.isServer?new hb(f):o?new fb(f):new db(f)})(this.options),new lb(u)));var u},l.prototype.hasNameForId=function(u,s){return this.names.has(u)&&this.names.get(u).has(s)},l.prototype.registerName=function(u,s){if(rr(u),this.names.has(u))this.names.get(u).add(s);else{var o=new Set;o.add(s),this.names.set(u,o)}},l.prototype.insertRules=function(u,s,o){this.registerName(u,s),this.getTag().insertRules(rr(u),o)},l.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},l.prototype.clearRules=function(u){this.getTag().clearGroup(rr(u)),this.clearNames(u)},l.prototype.clearTag=function(){this.tag=void 0},l})(),gb=/&/g,mb=/^\s*\/\/.*$/gm;function mm(l,u){return l.map(function(s){return s.type==="rule"&&(s.value="".concat(u," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(u," ")),s.props=s.props.map(function(o){return"".concat(u," ").concat(o)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=mm(s.children,u)),s})}function vb(l){var u,s,o,f=Hl,d=f.options,p=d===void 0?Hl:d,m=f.plugins,v=m===void 0?Ur:m,g=function(T,C,$){return $.startsWith(s)&&$.endsWith(s)&&$.replaceAll(s,"").length>0?".".concat(u):T},E=v.slice();E.push(function(T){T.type===Cr&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(gb,s).replace(o,g))}),p.prefix&&E.push(Yy),E.push(Ly);var y=function(T,C,$,G){C===void 0&&(C=""),$===void 0&&($=""),G===void 0&&(G="&"),u=G,s=C,o=new RegExp("\\".concat(s,"\\b"),"g");var U=T.replace(mb,""),_=jy($||C?"".concat($," ").concat(C," { ").concat(U," }"):U);p.namespace&&(_=mm(_,p.namespace));var z=[];return Er(_,ky(E.concat(qy(function(w){return z.push(w)})))),z};return y.hash=v.length?v.reduce(function(T,C){return C.name||kn(15),Rl(T,C.name)},om).toString():"",y}var yb=new Tr,Ec=vb(),vm=j.createContext({shouldForwardProp:void 0,styleSheet:yb,stylis:Ec});vm.Consumer;j.createContext(void 0);function wc(){return k.useContext(vm)}var bb=(function(){function l(u,s){var o=this;this.inject=function(f,d){d===void 0&&(d=Ec);var p=o.name+d.hash;f.hasNameForId(o.id,p)||f.insertRules(o.id,p,d(o.rules,p,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=s,Uc(this,function(){throw kn(12,String(o.name))})}return l.prototype.getName=function(u){return u===void 0&&(u=Ec),this.name+u.hash},l})(),Sb=function(l){return l>="A"&&l<="Z"};function mg(l){for(var u="",s=0;s<l.length;s++){var o=l[s];if(s===1&&o==="-"&&l[0]==="-")return l;Sb(o)?u+="-"+o.toLowerCase():u+=o}return u.startsWith("ms-")?"-"+u:u}var ym=function(l){return l==null||l===!1||l===""},bm=function(l){var u,s,o=[];for(var f in l){var d=l[f];l.hasOwnProperty(f)&&!ym(d)&&(Array.isArray(d)&&d.isCss||Ln(d)?o.push("".concat(mg(f),":"),d,";"):$i(d)?o.push.apply(o,ji(ji(["".concat(f," {")],bm(d),!1),["}"],!1)):o.push("".concat(mg(f),": ").concat((u=f,(s=d)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||u in Gy||u.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return o};function fn(l,u,s,o){if(ym(l))return[];if(Hc(l))return[".".concat(l.styledComponentId)];if(Ln(l)){if(!Ln(d=l)||d.prototype&&d.prototype.isReactComponent||!u)return[l];var f=l(u);return fn(f,u,s,o)}var d;return l instanceof bb?s?(l.inject(s,o),[l.getName(o)]):[l]:$i(l)?bm(l):Array.isArray(l)?Array.prototype.concat.apply(Ur,l.map(function(p){return fn(p,u,s,o)})):[l.toString()]}function Sm(l){for(var u=0;u<l.length;u+=1){var s=l[u];if(Ln(s)&&!Hc(s))return!1}return!0}var xb=sm(Hr),Ab=(function(){function l(u,s,o){this.rules=u,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Sm(u),this.componentId=s,this.baseHash=Rl(xb,s),this.baseStyle=o,Tr.registerId(s)}return l.prototype.generateAndInjectStyles=function(u,s,o){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,s,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))f=Un(f,this.staticRulesId);else{var d=xc(fn(this.rules,u,s,o)),p=Sc(Rl(this.baseHash,d)>>>0);if(!s.hasNameForId(this.componentId,p)){var m=o(d,".".concat(p),void 0,this.componentId);s.insertRules(this.componentId,p,m)}f=Un(f,p),this.staticRulesId=p}else{for(var v=Rl(this.baseHash,o.hash),g="",E=0;E<this.rules.length;E++){var y=this.rules[E];if(typeof y=="string")g+=y;else if(y){var T=xc(fn(y,u,s,o));v=Rl(v,T+E),g+=T}}if(g){var C=Sc(v>>>0);s.hasNameForId(this.componentId,C)||s.insertRules(this.componentId,C,o(g,".".concat(C),void 0,this.componentId)),f=Un(f,C)}}return f},l})(),Li=j.createContext(void 0);Li.Consumer;function Eb(l){var u=j.useContext(Li),s=k.useMemo(function(){return(function(o,f){if(!o)throw kn(14);if(Ln(o)){var d=o(f);return d}if(Array.isArray(o)||typeof o!="object")throw kn(8);return f?fe(fe({},f),o):o})(l.theme,u)},[l.theme,u]);return l.children?j.createElement(Li.Provider,{value:s},l.children):null}var sc={};function wb(l,u,s){var o=Hc(l),f=l,d=!oc(l),p=u.attrs,m=p===void 0?Ur:p,v=u.componentId,g=v===void 0?(function(B,q){var X=typeof B!="string"?"sc":sg(B);sc[X]=(sc[X]||0)+1;var b="".concat(X,"-").concat(cm(Hr+X+sc[X]));return q?"".concat(q,"-").concat(b):b})(u.displayName,u.parentComponentId):v,E=u.displayName,y=E===void 0?(function(B){return oc(B)?"styled.".concat(B):"Styled(".concat(Wy(B),")")})(l):E,T=u.displayName&&u.componentId?"".concat(sg(u.displayName),"-").concat(u.componentId):u.componentId||g,C=o&&f.attrs?f.attrs.concat(m).filter(Boolean):m,$=u.shouldForwardProp;if(o&&f.shouldForwardProp){var G=f.shouldForwardProp;if(u.shouldForwardProp){var U=u.shouldForwardProp;$=function(B,q){return G(B,q)&&U(B,q)}}else $=G}var _=new Ab(s,T,o?f.componentStyle:void 0);function z(B,q){return(function(X,b,H){var I=X.attrs,st=X.componentStyle,ht=X.defaultProps,et=X.foldedComponentIds,mt=X.styledComponentId,xt=X.target,yt=j.useContext(Li),N=wc(),P=X.shouldForwardProp||N.shouldForwardProp,tt=um(b,yt,ht)||Hl,ot=(function(at,nt,ut){for(var Rt,J=fe(fe({},nt),{className:void 0,theme:ut}),gt=0;gt<at.length;gt+=1){var bt=Ln(Rt=at[gt])?Rt(J):Rt;for(var Tt in bt)J[Tt]=Tt==="className"?Un(J[Tt],bt[Tt]):Tt==="style"?fe(fe({},J[Tt]),bt[Tt]):bt[Tt]}return nt.className&&(J.className=Un(J.className,nt.className)),J})(I,b,tt),ft=ot.as||xt,x={};for(var Y in ot)ot[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&ot.theme===tt||(Y==="forwardedAs"?x.as=ot.forwardedAs:P&&!P(Y,ft)||(x[Y]=ot[Y]));var Z=(function(at,nt){var ut=wc(),Rt=at.generateAndInjectStyles(nt,ut.styleSheet,ut.stylis);return Rt})(st,ot),F=Un(et,mt);return Z&&(F+=" "+Z),ot.className&&(F+=" "+ot.className),x[oc(ft)&&!rm.has(ft)?"class":"className"]=F,H&&(x.ref=H),k.createElement(ft,x)})(w,B,q)}z.displayName=y;var w=j.forwardRef(z);return w.attrs=C,w.componentStyle=_,w.displayName=y,w.shouldForwardProp=$,w.foldedComponentIds=o?Un(f.foldedComponentIds,f.styledComponentId):"",w.styledComponentId=T,w.target=o?f.target:l,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(B){this._foldedDefaultProps=o?(function(q){for(var X=[],b=1;b<arguments.length;b++)X[b-1]=arguments[b];for(var H=0,I=X;H<I.length;H++)Ac(q,I[H],!0);return q})({},f.defaultProps,B):B}}),Uc(w,function(){return".".concat(w.styledComponentId)}),d&&pm(w,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function vg(l,u){for(var s=[l[0]],o=0,f=u.length;o<f;o+=1)s.push(u[o],l[o+1]);return s}var yg=function(l){return Object.assign(l,{isCss:!0})};function it(l){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];if(Ln(l)||$i(l))return yg(fn(vg(Ur,ji([l],u,!0))));var o=l;return u.length===0&&o.length===1&&typeof o[0]=="string"?fn(o):yg(fn(vg(o,u)))}function zc(l,u,s){if(s===void 0&&(s=Hl),!u)throw kn(1,u);var o=function(f){for(var d=[],p=1;p<arguments.length;p++)d[p-1]=arguments[p];return l(u,s,it.apply(void 0,ji([f],d,!1)))};return o.attrs=function(f){return zc(l,u,fe(fe({},s),{attrs:Array.prototype.concat(s.attrs,f).filter(Boolean)}))},o.withConfig=function(f){return zc(l,u,fe(fe({},s),f))},o}var xm=function(l){return zc(wb,l)},W=xm;rm.forEach(function(l){W[l]=xm(l)});var zb=(function(){function l(u,s){this.rules=u,this.componentId=s,this.isStatic=Sm(u),Tr.registerId(this.componentId+1)}return l.prototype.createStyles=function(u,s,o,f){var d=f(xc(fn(this.rules,s,o,f)),""),p=this.componentId+u;o.insertRules(p,p,d)},l.prototype.removeStyles=function(u,s){s.clearRules(this.componentId+u)},l.prototype.renderStyles=function(u,s,o,f){u>2&&Tr.registerId(this.componentId+u),this.removeStyles(u,o),this.createStyles(u,s,o,f)},l})();function Tb(l){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];var o=it.apply(void 0,ji([l],u,!1)),f="sc-global-".concat(cm(JSON.stringify(o))),d=new zb(o,f),p=function(v){var g=wc(),E=j.useContext(Li),y=j.useRef(g.styleSheet.allocateGSInstance(f)).current;return g.styleSheet.server&&m(y,v,g.styleSheet,E,g.stylis),j.useLayoutEffect(function(){if(!g.styleSheet.server)return m(y,v,g.styleSheet,E,g.stylis),function(){return d.removeStyles(y,g.styleSheet)}},[y,v,g.styleSheet,E,g.stylis]),null};function m(v,g,E,y,T){if(d.isStatic)d.renderStyles(v,Xy,E,T);else{var C=fe(fe({},g),{theme:um(g,y,p.defaultProps)});d.renderStyles(v,C,E,T)}}return j.memo(p)}var Db=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`;const jc="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",$c="inset 2px 2px 3px rgba(0,0,0,0.2)",aa=()=>it`
  -webkit-text-fill-color: ${({theme:l})=>l.materialTextDisabled};
  color: ${({theme:l})=>l.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:l})=>l.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,na=({background:l="material",color:u="materialText"}={})=>it`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:s})=>s[l]};
  color: ${({theme:s})=>s[u]};
`,qi=({mainColor:l="black",secondaryColor:u="transparent",pixelSize:s=2})=>it`
  background-image: ${[`linear-gradient(
      45deg,
      ${l} 25%,
      transparent 25%,
      transparent 75%,
      ${l} 75%
    )`,`linear-gradient(
      45deg,
      ${l} 25%,
      transparent 25%,
      transparent 75%,
      ${l} 75%
    )`].join(",")};
  background-color: ${u};
  background-size: ${`${s*2}px ${s*2}px`};
  background-position: 0 0, ${`${s}px ${s}px`};
`,qn=()=>it`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:l})=>l.materialText};
  background: ${({$disabled:l,theme:u})=>l?u.flatLight:u.canvas};
  border: 2px solid ${({theme:l})=>l.canvas};
  outline: 2px solid ${({theme:l})=>l.flatDark};
  outline-offset: -4px;
`,_l={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},_b=({theme:l,topLeftInner:u,bottomRightInner:s,hasShadow:o=!1,hasInsetShadow:f=!1})=>[o?jc:!1,f?$c:!1,u!==null?`inset 1px 1px 0px 1px ${l[u]}`:!1,s!==null?`inset -1px -1px 0 1px ${l[s]}`:!1].filter(Boolean).join(", "),Jt=({invert:l=!1,style:u="button"}={})=>{const s={topLeftOuter:l?"bottomRightOuter":"topLeftOuter",topLeftInner:l?"bottomRightInner":"topLeftInner",bottomRightInner:l?"topLeftInner":"bottomRightInner",bottomRightOuter:l?"topLeftOuter":"bottomRightOuter"};return it`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:o})=>o[_l[u][s.topLeftOuter]]};
    border-top-color: ${({theme:o})=>o[_l[u][s.topLeftOuter]]};
    border-right-color: ${({theme:o})=>o[_l[u][s.bottomRightOuter]]};
    border-bottom-color: ${({theme:o})=>o[_l[u][s.bottomRightOuter]]};
    box-shadow: ${({theme:o,shadow:f})=>_b({theme:o,topLeftInner:_l[u][s.topLeftInner],bottomRightInner:_l[u][s.bottomRightInner],hasShadow:f})};
  `},Ul=()=>it`
  outline: 2px dotted ${({theme:l})=>l.materialText};
`,Ob=l=>Buffer.from(l).toString("base64"),Rb=typeof btoa<"u"?btoa:Ob,or=(l,u=0)=>{const s=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${u} 13 13)">
      <polygon fill="${l}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${Rb(s)})`},Lc=(l="default")=>it`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:u})=>qi({mainColor:l==="flat"?u.flatLight:u.material,secondaryColor:l==="flat"?u.canvas:u.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${na()}
    ${l==="flat"?qn():Jt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:u})=>u.material};
  }
  ::-webkit-scrollbar-button {
    ${na()}
    ${l==="flat"?qn():Jt({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${l==="default"?Jt({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:u})=>or(u.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:u})=>or(u.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:u})=>or(u.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:u})=>or(u.materialText,0)};
  }
`,Cb=W.a`
  color: ${({theme:l})=>l.anchor};
  font-size: inherit;
  text-decoration: ${({underline:l})=>l?"underline":"none"};
  &:visited {
    color: ${({theme:l})=>l.anchorVisited};
  }
`,Mb=k.forwardRef(({children:l,underline:u=!0,...s},o)=>j.createElement(Cb,{ref:o,underline:u,...s},l));Mb.displayName="Anchor";const Nb=W.header`
  ${Jt()};
  ${na()};

  position: ${l=>{var u;return(u=l.position)!==null&&u!==void 0?u:l.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Am=k.forwardRef(({children:l,fixed:u=!0,position:s="fixed",...o},f)=>j.createElement(Nb,{fixed:u,position:u!==!1?s:void 0,ref:f,...o},l));Am.displayName="AppBar";const Yn=()=>{};function jn(l,u,s){return s!==null&&l>s?s:u!==null&&l<u?u:l}function Bb(l){if(Math.abs(l)<1){const s=l.toExponential().split("e-"),o=s[0].split(".")[1];return(o?o.length:0)+parseInt(s[1],10)}const u=l.toString().split(".")[1];return u?u.length:0}function bg(l,u,s){const o=Math.round((l-s)/u)*u+s;return Number(o.toFixed(Bb(u)))}function dn(l){return typeof l=="number"?`${l}px`:l}const Hb=W.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:l})=>`
    height: ${l};
    width: ${l};
    `}
  border-radius: ${({square:l})=>l?0:"50%"};
  overflow: hidden;
  ${({noBorder:l,theme:u})=>!l&&`
    border-top: 2px solid ${u.borderDark};
    border-left: 2px solid ${u.borderDark};
    border-bottom: 2px solid ${u.borderLightest};
    border-right: 2px solid ${u.borderLightest};
    background: ${u.material};
  `}
  ${({src:l})=>!l&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Ub=W.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,jb=k.forwardRef(({alt:l="",children:u,noBorder:s=!1,size:o=35,square:f=!1,src:d,...p},m)=>j.createElement(Hb,{noBorder:s,ref:m,size:dn(o),square:f,src:d,...p},d?j.createElement(Ub,{src:d,alt:l}):u));jb.displayName="Avatar";const ve={sm:"28px",md:"36px",lg:"44px"},$b=it`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:l="md"})=>ve[l]};
  width: ${({fullWidth:l,size:u="md",square:s})=>l?"100%":s?ve[u]:"auto"};
  padding: ${({square:l})=>l?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:l})=>!l&&"2px"};
  }
  padding-top: ${({active:l,disabled:u})=>l&&!u&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,jr=W.button`
  ${({active:l,disabled:u,primary:s,theme:o,variant:f})=>f==="flat"?it`
          ${qn()}
          ${s?`
          border: 2px solid ${o.checkmark};
            outline: 2px solid ${o.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${o.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!l&&!u&&Ul}
            outline-offset: -4px;
          }
        `:f==="menu"||f==="thin"?it`
          ${na()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!u&&!l&&Jt({style:"buttonThin"})}
          }
          &:active {
            ${!u&&Jt({style:"buttonThinPressed"})}
          }
          ${l&&Jt({style:"buttonThinPressed"})}
          ${u&&aa()}
        `:it`
          ${na()};
          border: none;
          ${u&&aa()}
          ${l?qi({mainColor:o.material,secondaryColor:o.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${s?it`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${o.borderDarkest};
                `:it`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Jt(l?{style:f==="raised"?"window":"button",invert:!0}:{style:f==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!u&&Jt({style:f==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!l&&!u&&Ul}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${l?"0":"1px"};
          }
        `}
  ${$b}
`,Ba=k.forwardRef(({onClick:l,disabled:u=!1,children:s,type:o="button",fullWidth:f=!1,size:d="md",square:p=!1,active:m=!1,onTouchStart:v=Yn,primary:g=!1,variant:E="default",...y},T)=>j.createElement(jr,{active:m,disabled:u,$disabled:u,fullWidth:f,onClick:u?void 0:l,onTouchStart:v,primary:g,ref:T,size:d,square:p,type:o,variant:E,...y},s));Ba.displayName="Button";function hn({defaultValue:l,onChange:u,onChangePropName:s="onChange",readOnly:o,value:f,valuePropName:d="value"}){const p=f!==void 0,[m,v]=k.useState(l),g=k.useCallback(E=>{p||v(E)},[p]);if(p&&typeof u!="function"&&!o){const E=`Warning: You provided a \`${d}\` prop to a component without an \`${s}\` handler.${d==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${s}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${s}\` function that updates \`${d}\`.`}`;console.warn(E)}return[p?f:m,g]}const Tc=W.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${l=>ve[l.size]};
  width: ${l=>l.square?ve[l.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${l=>l.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${l=>ve[l.size]};
  color: ${({theme:l})=>l.materialText};
  pointer-events: ${({$disabled:l})=>l?"none":"auto"};
  font-weight: ${({primary:l})=>l?"bold":"normal"};
  &:hover {
    ${({theme:l,$disabled:u})=>!u&&`
        color: ${l.materialTextInvert};
        background: ${l.hoverBackground};
      `}

    cursor: default;
  }
  ${l=>l.$disabled&&aa()}
`,Ar=k.forwardRef(({size:l="lg",disabled:u,square:s,children:o,onClick:f,primary:d,...p},m)=>j.createElement(Tc,{$disabled:u,size:l,square:s,onClick:u?void 0:f,primary:d,role:"menuitem",ref:m,"aria-disabled":u,...p},o));Ar.displayName="MenuListItem";const Em=W.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${l=>l.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Jt({style:"window"})}
  ${na()}
  ${l=>l.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;Em.displayName="MenuList";const da=20,Dr=W.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${da}px;
  height: ${da}px;
  opacity: 0;
  z-index: -1;
`,kc=W.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:l})=>l?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:l})=>l.materialText};
  ${l=>l.$disabled&&aa()}

  ${Tc} & {
    margin: 0;
    height: 100%;
  }
  ${Tc}:hover & {
    ${({$disabled:l,theme:u})=>!l&&it`
        color: ${u.materialTextInvert};
      `};
  }
`,qc=W.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Dr}:focus ~ & {
    ${Ul}
  }
  ${Dr}:not(:disabled) ~ &:active {
    ${Ul}
  }
`,ha=W.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:l})=>l.borderDark};
  border-top-color: ${({theme:l})=>l.borderDark};
  border-right-color: ${({theme:l})=>l.borderLightest};
  border-bottom-color: ${({theme:l})=>l.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:l})=>l.borderDarkest};
    border-top-color: ${({theme:l})=>l.borderDarkest};
    border-right-color: ${({theme:l})=>l.borderLight};
    border-bottom-color: ${({theme:l})=>l.borderLight};

    pointer-events: none;
    ${l=>l.shadow&&`box-shadow:${$c};`}
  }
`,Lb=W.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Lc()}
`,Yc=k.forwardRef(({children:l,shadow:u=!0,...s},o)=>j.createElement(ha,{ref:o,shadow:u,...s},j.createElement(Lb,null,l)));Yc.displayName="ScrollView";const wm=it`
  width: ${da}px;
  height: ${da}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,kb=W(ha)`
  ${wm}
  width: ${da}px;
  height: ${da}px;
  background: ${({$disabled:l,theme:u})=>l?u.material:u.canvas};
  &:before {
    box-shadow: none;
  }
`,qb=W.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:l,theme:u})=>l?u.flatLight:u.canvas};
  ${wm}
  width: ${da-4}px;
  height: ${da-4}px;
  outline: none;
  border: 2px solid ${({theme:l})=>l.flatDark};
  background: ${({$disabled:l,theme:u})=>l?u.flatLight:u.canvas};
`,Yb=W.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:l,theme:u})=>l?u.checkmarkDisabled:u.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${l=>l.$disabled?l.theme.checkmarkDisabled:l.theme.checkmark};
  }
`,Gb=W.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:l,theme:u})=>qi({mainColor:l?u.checkmarkDisabled:u.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Qb={flat:qb,default:kb},Xb=k.forwardRef(({checked:l,className:u="",defaultChecked:s=!1,disabled:o=!1,indeterminate:f=!1,label:d="",onChange:p=Yn,style:m={},value:v,variant:g="default",...E},y)=>{var T;const[C,$]=hn({defaultValue:s,onChange:p,readOnly:(T=E.readOnly)!==null&&T!==void 0?T:o,value:l}),G=k.useCallback(z=>{const w=z.target.checked;$(w),p(z)},[p,$]),U=Qb[g];let _=null;return f?_=Gb:C&&(_=Yb),j.createElement(kc,{$disabled:o,className:u,style:m},j.createElement(Dr,{disabled:o,onChange:o?void 0:G,readOnly:o,type:"checkbox",value:v,checked:C,"data-indeterminate":f,ref:y,...E}),j.createElement(U,{$disabled:o,role:"presentation"},_&&j.createElement(_,{$disabled:o,variant:g})),d&&j.createElement(qc,null,d))});Xb.displayName="Checkbox";const Gc=W.div`
  ${({orientation:l,theme:u,size:s="100%"})=>l==="vertical"?`
    height: ${dn(s)};
    border-left: 2px solid ${u.borderDark};
    border-right: 2px solid ${u.borderLightest};
    margin: 0;
    `:`
    width: ${dn(s)};
    border-bottom: 2px solid ${u.borderLightest};
    border-top: 2px solid ${u.borderDark};
    margin: 0;
    `}
`;Gc.displayName="Separator";const Vb=W(jr)`
  padding-left: 8px;
`,Zb=W(Gc)`
  height: 21px;
  position: relative;
  top: 0;
`,zm=W.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,Kb=W.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:l})=>l};

  ${({$disabled:l})=>l?it`
          border: 2px solid ${({theme:u})=>u.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:u})=>u.materialTextDisabledShadow}
          );
        `:it`
          border: 2px solid ${({theme:u})=>u.materialText};
        `}
  ${zm}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Ul}
    outline-offset: -8px;
  }
`,Wb=W.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:l})=>l?it`
          border-top: 6px solid ${({theme:u})=>u.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:u})=>u.materialTextDisabledShadow}
          );
        `:it`
          border-top: 6px solid ${({theme:u})=>u.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:l})=>l==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,Jb=k.forwardRef(({value:l,defaultValue:u,onChange:s=Yn,disabled:o=!1,variant:f="default",...d},p)=>{var m;const[v,g]=hn({defaultValue:u,onChange:s,readOnly:(m=d.readOnly)!==null&&m!==void 0?m:o,value:l}),E=y=>{const T=y.target.value;g(T),s(y)};return j.createElement(Vb,{disabled:o,as:"div",variant:f,size:"md"},j.createElement(zm,{onChange:E,readOnly:o,disabled:o,value:v??"#008080",type:"color",ref:p,...d}),j.createElement(Kb,{$disabled:o,color:v??"#008080",role:"presentation"}),f==="default"&&j.createElement(Zb,{orientation:"vertical"}),j.createElement(Wb,{$disabled:o,variant:f}))});Jb.displayName="ColorInput";const Fb=W.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:l})=>it`
    width: ${11*l}px;
    height: ${21*l}px;
    margin: ${l}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${qi({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:l})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${l}px;
      border-left: ${l}px solid var(--react95-digit-bg-color);
      border-right: ${l}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${l}px;
      border-left: ${l}px solid var(--react95-digit-primary-color);
      border-right: ${l}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${l}px;
      width: ${9*l}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${l}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${l*2}px);
      top: ${2*l}px;
      left: ${l}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${l}px;
      border-left: ${l}px solid var(--react95-digit-bg-color);
      border-right: ${l}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${l}px solid var(--react95-digit-primary-color);
      border-right: ${l}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${l}px;
      width: ${9*l}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${l}px;
    }
    span.center:after {
      bottom: ${l}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${l}px;
      border-top: ${l}px solid var(--react95-digit-bg-color);
      border-bottom: ${l}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*l}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${l}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${l*2}px);
      top: ${l}px;
      left: ${l*2}px;
    }
  `}
`,Sg=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Ib=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Pb({digit:l=0,pixelSize:u=2,...s}){const o=Ib[Number(l)].map((f,d)=>f?`${Sg[d]} active`:Sg[d]);return j.createElement(Fb,{pixelSize:u,...s},o.map((f,d)=>j.createElement("span",{className:f,key:d})))}const t1=W.div`
  ${Jt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,e1={sm:1,md:2,lg:3,xl:4},a1=k.forwardRef(({value:l=0,minLength:u=3,size:s="md",...o},f)=>{const d=k.useMemo(()=>l.toString().padStart(u,"0").split(""),[u,l]);return j.createElement(t1,{ref:f,...o},d.map((p,m)=>j.createElement(Pb,{digit:p,pixelSize:e1[s],key:m})))});a1.displayName="Counter";const Tm=it`
  display: flex;
  align-items: center;
  width: ${({fullWidth:l})=>l?"100%":"auto"};
  min-height: ${ve.md};
`,n1=W(ha).attrs({"data-testid":"variant-default"})`
  ${Tm}
  background: ${({$disabled:l,theme:u})=>l?u.material:u.canvas};
`,l1=W.div.attrs({"data-testid":"variant-flat"})`
  ${qn()}
  ${Tm}
  position: relative;
`,Dm=it`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:l})=>l.canvasText};
  ${({disabled:l,variant:u})=>u!=="flat"&&l&&aa()}
`,i1=W.input`
  ${Dm}
  padding: 0 8px;
`,u1=W.textarea`
  ${Dm}
  padding: 8px;
  resize: none;
  ${({variant:l})=>Lc(l)}
`,_m=k.forwardRef(({className:l,disabled:u=!1,fullWidth:s,onChange:o=Yn,shadow:f=!0,style:d,variant:p="default",...m},v)=>{const g=p==="flat"?l1:n1,E=k.useMemo(()=>{var y;return m.multiline?j.createElement(u1,{disabled:u,onChange:u?void 0:o,readOnly:u,ref:v,variant:p,...m}):j.createElement(i1,{disabled:u,onChange:u?void 0:o,readOnly:u,ref:v,type:(y=m.type)!==null&&y!==void 0?y:"text",variant:p,...m})},[u,o,m,v,p]);return j.createElement(g,{className:l,fullWidth:s,$disabled:u,shadow:f,style:d},E)});_m.displayName="TextInput";const r1=W.div`
  display: inline-flex;
  align-items: center;
`,Dc=W(Ba)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:l})=>l==="flat"?it`
          height: calc(50% - 1px);
        `:it`
          height: 50%;
        `}
`,o1=W.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:l})=>l==="flat"?it`
          height: calc(${ve.md} - 4px);
        `:it`
          height: ${ve.md};
          margin-left: 2px;
        `}
`,xg=W.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:l})=>l?it`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:u})=>u.materialText};
        `:it`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:u})=>u.materialText};
        `}
  ${Dc}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:l})=>l.materialTextDisabledShadow}
    );
    ${({invert:l})=>l?it`
            border-bottom-color: ${({theme:u})=>u.materialTextDisabled};
          `:it`
            border-top-color: ${({theme:u})=>u.materialTextDisabled};
          `}
  }
`,Om=k.forwardRef(({className:l,defaultValue:u,disabled:s=!1,max:o,min:f,onChange:d,readOnly:p,step:m=1,style:v,value:g,variant:E="default",width:y,...T},C)=>{const[$,G]=hn({defaultValue:u,onChange:d,readOnly:p,value:g}),U=k.useCallback(X=>{const b=parseFloat(X.target.value);G(b)},[G]),_=k.useCallback(X=>{const b=jn(parseFloat((($??0)+X).toFixed(2)),f??null,o??null);G(b),d?.(b)},[o,f,d,G,$]),z=k.useCallback(()=>{$!==void 0&&d?.($)},[d,$]),w=k.useCallback(()=>{_(m)},[_,m]),B=k.useCallback(()=>{_(-m)},[_,m]),q=E==="flat"?"flat":"raised";return j.createElement(r1,{className:l,style:{...v,width:y!==void 0?dn(y):"auto"},...T},j.createElement(_m,{value:$,variant:E,onChange:U,disabled:s,type:"number",readOnly:p,ref:C,fullWidth:!0,onBlur:z}),j.createElement(o1,{variant:E},j.createElement(Dc,{"data-testid":"increment",variant:q,disabled:s||p,onClick:w},j.createElement(xg,{invert:!0})),j.createElement(Dc,{"data-testid":"decrement",variant:q,disabled:s||p,onClick:B},j.createElement(xg,null))))});Om.displayName="NumberInput";function s1(){const l="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let u="";for(let s=0;s<10;s+=1)u+=l[Math.floor(Math.random()*l.length)];return u}const Rm=l=>k.useMemo(()=>s1(),[l]),Cm=it`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Mm=it`
  background: ${({theme:l})=>l.hoverBackground};
  color: ${({theme:l})=>l.canvasTextInvert};
`,Qc=W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,c1=W.div`
  ${Cm}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Qc}:focus & {
    ${Mm}
    border: 2px dotted ${({theme:l})=>l.focusSecondary};
  }
`,Nm=it`
  height: ${ve.md};
  display: inline-block;
  color: ${({$disabled:l=!1,theme:u})=>l?aa():u.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:l})=>l?"default":"pointer"};
`,f1=W(ha)`
  ${Nm}
  background: ${({$disabled:l=!1,theme:u})=>l?u.material:u.canvas};
  &:focus {
    outline: 0;
  }
`,d1=W.div`
  ${qn()}
  ${Nm}
  background: ${({$disabled:l=!1,theme:u})=>l?u.flatLight:u.canvas};
`,h1=W.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${Cm}
  cursor: pointer;
  &:disabled {
    ${aa()};
    background: ${({theme:l})=>l.material};
    cursor: default;
  }
`,Bm=W(jr).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:l="default"})=>l==="flat"?it`
          height: 100%;
          margin-right: 0;
        `:it`
          height: 100%;
        `}
  ${({native:l=!1,variant:u="default"})=>l&&(u==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:l=!1,native:u=!1})=>l||u?"none":"auto"}
`,p1=W.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:l=!1,theme:u})=>l?u.materialTextDisabled:u.materialText};
  ${({$disabled:l=!1,theme:u})=>l&&`
    filter: drop-shadow(1px 1px 0px ${u.materialTextDisabledShadow});
    border-top-color: ${u.materialTextDisabled};
    `}
  ${Bm}:active & {
    margin-top: 2px;
  }
`,g1=W.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:l})=>l.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${jc};
  ${({variant:l="default"})=>l==="flat"?it`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:u})=>u.flatDark};
        `:it`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:u})=>u.borderDarkest};
        `}
  ${({variant:l="default"})=>Lc(l)}
`,m1=W.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${ve.md} - 4px);
  line-height: calc(${ve.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:l})=>l.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:l})=>l?Mm:""}
  user-select: none;
`,v1=[],Hm=({className:l,defaultValue:u,disabled:s,native:o,onChange:f,options:d=v1,readOnly:p,style:m,value:v,variant:g,width:E})=>{var y;const T=k.useMemo(()=>d.filter(Boolean),[d]),[C,$]=hn({defaultValue:u??((y=T?.[0])===null||y===void 0?void 0:y.value),onChange:f,readOnly:p,value:v}),G=!(s||p),U=k.useMemo(()=>({className:l,style:{...m,width:E}}),[l,m,E]),_=k.useMemo(()=>j.createElement(Bm,{as:"div","data-testid":"select-button",$disabled:s,native:o,tabIndex:-1,variant:g==="flat"?"flat":"raised"},j.createElement(p1,{"data-testid":"select-icon",$disabled:s})),[s,o,g]),z=k.useMemo(()=>g==="flat"?d1:f1,[g]);return k.useMemo(()=>({isEnabled:G,options:T,value:C,setValue:$,wrapperProps:U,DropdownButton:_,Wrapper:z}),[_,z,G,T,$,C,U])},y1={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},b1=1e3,S1=({onBlur:l,onChange:u,onClose:s,onFocus:o,onKeyDown:f,onMouseDown:d,onOpen:p,open:m,options:v,readOnly:g,value:E,selectRef:y,setValue:T,wrapperRef:C})=>{const $=k.useRef(null),G=k.useRef([]),U=k.useRef(0),_=k.useRef(0),z=k.useRef(),w=k.useRef("search"),B=k.useRef(""),q=k.useRef(),[X,b]=hn({defaultValue:!1,onChange:p,onChangePropName:"onOpen",readOnly:g,value:m,valuePropName:"open"}),H=k.useMemo(()=>{const J=v.findIndex(gt=>gt.value===E);return U.current=jn(J,0,null),v[J]},[v,E]),[I,st]=k.useState(v[0]),ht=k.useCallback(J=>{const gt=$.current,bt=G.current[J];if(!bt||!gt){z.current=J;return}z.current=void 0;const Tt=gt.clientHeight,kt=gt.scrollTop,Yt=gt.scrollTop+Tt,Zt=bt.offsetTop,ye=bt.offsetHeight,Fe=bt.offsetTop+bt.offsetHeight;Zt<kt&&gt.scrollTo(0,Zt),Fe>Yt&&gt.scrollTo(0,Zt-Tt+ye),bt.focus({preventScroll:!0})},[$]),et=k.useCallback((J,{scroll:gt}={})=>{var bt;const Tt=v.length-1;let kt;switch(J){case"first":{kt=0;break}case"last":{kt=Tt;break}case"next":{kt=jn(_.current+1,0,Tt);break}case"previous":{kt=jn(_.current-1,0,Tt);break}case"selected":{kt=jn((bt=U.current)!==null&&bt!==void 0?bt:0,0,Tt);break}default:kt=J}_.current=kt,st(v[kt]),gt&&ht(kt)},[_,v,ht]),mt=k.useCallback(({fromEvent:J})=>{b(!0),et("selected",{scroll:!0}),p?.({fromEvent:J})},[et,p,b]),xt=k.useCallback(()=>{w.current="search",B.current="",clearTimeout(q.current)},[]),yt=k.useCallback(({focusSelect:J,fromEvent:gt})=>{var bt;s?.({fromEvent:gt}),b(!1),st(v[0]),xt(),z.current=void 0,J&&((bt=y.current)===null||bt===void 0||bt.focus())},[xt,s,v,y,b]),N=k.useCallback(({fromEvent:J})=>{X?yt({focusSelect:!1,fromEvent:J}):mt({fromEvent:J})},[yt,mt,X]),P=k.useCallback((J,{fromEvent:gt})=>{U.current!==J&&(U.current=J,T(v[J].value),u?.(v[J],{fromEvent:gt}))},[u,v,T]),tt=k.useCallback(({focusSelect:J,fromEvent:gt})=>{P(_.current,{fromEvent:gt}),yt({focusSelect:J,fromEvent:gt})},[yt,P]),ot=k.useCallback((J,{fromEvent:gt,select:bt})=>{var Tt;switch(w.current==="cycleFirstLetter"&&J!==B.current&&(w.current="search"),J===B.current?w.current="cycleFirstLetter":B.current+=J,w.current){case"search":{let kt=v.findIndex(Yt=>{var Zt;return((Zt=Yt.label)===null||Zt===void 0?void 0:Zt.toLocaleUpperCase().indexOf(B.current))===0});kt<0&&(kt=v.findIndex(Yt=>{var Zt;return((Zt=Yt.label)===null||Zt===void 0?void 0:Zt.toLocaleUpperCase().indexOf(J))===0}),B.current=J),kt>=0&&(bt?P(kt,{fromEvent:gt}):et(kt,{scroll:!0}));break}case"cycleFirstLetter":{const kt=bt?(Tt=U.current)!==null&&Tt!==void 0?Tt:-1:_.current;let Yt=v.findIndex((Zt,ye)=>{var Fe;return ye>kt&&((Fe=Zt.label)===null||Fe===void 0?void 0:Fe.toLocaleUpperCase().indexOf(J))===0});Yt<0&&(Yt=v.findIndex(Zt=>{var ye;return((ye=Zt.label)===null||ye===void 0?void 0:ye.toLocaleUpperCase().indexOf(J))===0})),Yt>=0&&(bt?P(Yt,{fromEvent:gt}):et(Yt,{scroll:!0}));break}}clearTimeout(q.current),q.current=setTimeout(()=>{w.current==="search"&&(B.current="")},b1)},[et,v,P]),ft=k.useCallback(J=>{var gt;J.button===0&&(J.preventDefault(),(gt=y.current)===null||gt===void 0||gt.focus(),N({fromEvent:J}),d?.(J))},[d,y,N]),x=k.useCallback(J=>{tt({focusSelect:!0,fromEvent:J})},[tt]),Y=k.useCallback(J=>{const{altKey:gt,code:bt,ctrlKey:Tt,metaKey:kt,shiftKey:Yt}=J,{ARROW_DOWN:Zt,ARROW_UP:ye,END:Fe,ENTER:la,ESC:Le,HOME:pn,SPACE:gn,TAB:mn}=y1,Yi=gt||Tt||kt||Yt;if(!(bt===mn&&(gt||Tt||kt)||bt!==mn&&Yi))switch(bt){case Zt:{if(J.preventDefault(),!X){mt({fromEvent:J});return}et("next",{scroll:!0});break}case ye:{if(J.preventDefault(),!X){mt({fromEvent:J});return}et("previous",{scroll:!0});break}case Fe:{if(J.preventDefault(),!X){mt({fromEvent:J});return}et("last",{scroll:!0});break}case la:{if(!X)return;J.preventDefault(),tt({focusSelect:!0,fromEvent:J});break}case Le:{if(!X)return;J.preventDefault(),yt({focusSelect:!0,fromEvent:J});break}case pn:{if(J.preventDefault(),!X){mt({fromEvent:J});return}et("first",{scroll:!0});break}case gn:{J.preventDefault(),X?tt({focusSelect:!0,fromEvent:J}):mt({fromEvent:J});break}case mn:{if(!X)return;Yt||J.preventDefault(),tt({focusSelect:!Yt,fromEvent:J});break}default:!Yi&&bt.match(/^Key/)&&(J.preventDefault(),J.stopPropagation(),ot(bt.replace(/^Key/,""),{select:!X,fromEvent:J}))}},[et,yt,X,mt,ot,tt]),Z=k.useCallback(J=>{Y(J),f?.(J)},[Y,f]),F=k.useCallback(J=>{et(J)},[et]),at=k.useCallback(J=>{X||(xt(),l?.(J))},[xt,l,X]),nt=k.useCallback(J=>{xt(),o?.(J)},[xt,o]),ut=k.useCallback(J=>{$.current=J,z.current!==void 0&&ht(z.current)},[ht]),Rt=k.useCallback((J,gt)=>{G.current[gt]=J,z.current===gt&&ht(z.current)},[ht]);return k.useEffect(()=>{if(!X)return()=>{};const J=gt=>{var bt;const Tt=gt.target;!((bt=C.current)===null||bt===void 0)&&bt.contains(Tt)||(gt.preventDefault(),yt({focusSelect:!1,fromEvent:gt}))};return document.addEventListener("mousedown",J),()=>{document.removeEventListener("mousedown",J)}},[yt,X,C]),k.useMemo(()=>({activeOption:I,handleActivateOptionIndex:F,handleBlur:at,handleButtonKeyDown:Z,handleDropdownKeyDown:Y,handleFocus:nt,handleMouseDown:ft,handleOptionClick:x,handleSetDropdownRef:ut,handleSetOptionRef:Rt,open:X,selectedOption:H}),[I,F,at,Z,nt,Y,ft,x,ut,Rt,X,H])},x1=k.forwardRef(({className:l,defaultValue:u,disabled:s,onChange:o,options:f,readOnly:d,style:p,value:m,variant:v,width:g,...E},y)=>{const{isEnabled:T,options:C,setValue:$,value:G,DropdownButton:U,Wrapper:_}=Hm({defaultValue:u,disabled:s,native:!0,onChange:o,options:f,readOnly:d,value:m,variant:v}),z=k.useCallback(w=>{const B=C.find(q=>q.value===w.target.value);B&&($(B.value),o?.(B,{fromEvent:w}))},[o,C,$]);return j.createElement(_,{className:l,style:{...p,width:g}},j.createElement(Qc,null,j.createElement(h1,{...E,disabled:s,onChange:T?z:Yn,ref:y,value:G},C.map((w,B)=>{var q;return j.createElement("option",{key:`${w.value}-${B}`,value:w.value},(q=w.label)!==null&&q!==void 0?q:w.value)})),U))});x1.displayName="SelectNative";function A1({activateOptionIndex:l,active:u,index:s,onClick:o,option:f,selected:d,setRef:p}){const m=k.useCallback(()=>{l(s)},[l,s]),v=k.useCallback(E=>{p(E,s)},[s,p]),g=Rm();return j.createElement(m1,{active:u,"aria-selected":d?"true":void 0,"data-value":f.value,id:g,onClick:o,onMouseEnter:m,ref:v,role:"option",tabIndex:0},f.label)}function E1({"aria-label":l,"aria-labelledby":u,className:s,defaultValue:o,disabled:f=!1,formatDisplay:d,inputProps:p,labelId:m,menuMaxHeight:v,name:g,onBlur:E,onChange:y,onClose:T,onFocus:C,onKeyDown:$,onMouseDown:G,onOpen:U,open:_,options:z,readOnly:w,shadow:B=!0,style:q,variant:X="default",value:b,width:H="auto",...I},st){const{isEnabled:ht,options:et,setValue:mt,value:xt,wrapperProps:yt,DropdownButton:N,Wrapper:P}=Hm({className:s,defaultValue:o,disabled:f,native:!1,onChange:y,options:z,style:q,readOnly:w,value:b,variant:X,width:H}),tt=k.useRef(null),ot=k.useRef(null),ft=k.useRef(null),{activeOption:x,handleActivateOptionIndex:Y,handleBlur:Z,handleButtonKeyDown:F,handleDropdownKeyDown:at,handleFocus:nt,handleMouseDown:ut,handleOptionClick:Rt,handleSetDropdownRef:J,handleSetOptionRef:gt,open:bt,selectedOption:Tt}=S1({onBlur:E,onChange:y,onClose:T,onFocus:C,onKeyDown:$,onMouseDown:G,onOpen:U,open:_,options:et,value:xt,selectRef:ot,setValue:mt,wrapperRef:ft});k.useImperativeHandle(st,()=>({focus:la=>{var Le;(Le=ot.current)===null||Le===void 0||Le.focus(la)},node:tt.current,value:String(xt)}),[xt]);const kt=k.useMemo(()=>Tt?typeof d=="function"?d(Tt):Tt.label:"",[d,Tt]),Yt=ht?1:void 0,Zt=k.useMemo(()=>v?{overflow:"auto",maxHeight:v}:void 0,[v]),ye=Rm(),Fe=k.useMemo(()=>et.map((la,Le)=>{const pn=`${xt}-${Le}`,gn=la===x,mn=la===Tt;return j.createElement(A1,{activateOptionIndex:Y,active:gn,index:Le,key:pn,onClick:Rt,option:la,selected:mn,setRef:gt})}),[x,Y,Rt,gt,et,Tt,xt]);return j.createElement(P,{...yt,$disabled:f,ref:ft,shadow:B,style:{...q,width:H}},j.createElement("input",{name:g,ref:tt,type:"hidden",value:String(xt),...p}),j.createElement(Qc,{"aria-disabled":f,"aria-expanded":bt,"aria-haspopup":"listbox","aria-label":l,"aria-labelledby":u??m,"aria-owns":ht&&bt?ye:void 0,onBlur:Z,onFocus:nt,onKeyDown:F,onMouseDown:ht?ut:G,ref:ot,role:"button",tabIndex:Yt,...I},j.createElement(c1,null,kt),N),ht&&bt&&j.createElement(g1,{id:ye,onKeyDown:at,ref:J,role:"listbox",style:Zt,tabIndex:0,variant:X},Fe))}const Um=k.forwardRef(E1);Um.displayName="Select";const w1=W.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${l=>l.noPadding?"0":"4px"};
`,_r=k.forwardRef(function({children:u,noPadding:s=!1,...o},f){return j.createElement(w1,{noPadding:s,ref:f,...o},u)});_r.displayName="Toolbar";const z1=W.div`
  padding: 16px;
`,Xc=k.forwardRef(function({children:u,...s},o){return j.createElement(z1,{ref:o,...s},u)});Xc.displayName="WindowContent";const T1=W.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:l})=>l.material};
  ${({active:l})=>l===!1?it`
          background: ${({theme:u})=>u.headerNotActiveBackground};
          color: ${({theme:u})=>u.headerNotActiveText};
        `:it`
          background: ${({theme:u})=>u.headerBackground};
          color: ${({theme:u})=>u.headerText};
        `}

  ${jr} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Vc=k.forwardRef(function({active:u=!0,children:s,...o},f){return j.createElement(T1,{active:u,ref:f,...o},s)});Vc.displayName="WindowHeader";const D1=W.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Jt({style:"window"})}
  ${na()}
`,_1=W.span`
  ${({theme:l})=>it`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${l.borderLightest} 16.67%,
      ${l.material} 16.67%,
      ${l.material} 33.33%,
      ${l.borderDark} 33.33%,
      ${l.borderDark} 50%,
      ${l.borderLightest} 50%,
      ${l.borderLightest} 66.67%,
      ${l.material} 66.67%,
      ${l.material} 83.33%,
      ${l.borderDark} 83.33%,
      ${l.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,Zc=k.forwardRef(({children:l,resizable:u=!1,resizeRef:s,shadow:o=!0,...f},d)=>j.createElement(D1,{ref:d,shadow:o,...f},l,u&&j.createElement(_1,{"data-testid":"resizeHandle",ref:s})));Zc.displayName="Window";const O1=W(Yc)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:l})=>l.canvas};
`,R1=W.div`
  display: flex;
  background: ${({theme:l})=>l.materialDark};
  color: #dfe0e3;
`,C1=W.div`
  display: flex;
  flex-wrap: wrap;
`,Ma=W.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,M1=W.span`
  cursor: pointer;

  background: ${({active:l,theme:u})=>l?u.hoverBackground:"transparent"};
  color: ${({active:l,theme:u})=>l?u.canvasTextInvert:u.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:l,active:u})=>u?"none":l.materialDark};
  }
`,N1=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function B1(l,u){return new Date(l,u+1,0).getDate()}function H1(l,u,s){return new Date(l,u,s).getDay()}function U1(l){const u=new Date(Date.parse(l)),s=u.getUTCDate(),o=u.getUTCMonth(),f=u.getUTCFullYear();return{day:s,month:o,year:f}}const j1=k.forwardRef(({className:l,date:u=new Date().toISOString(),onAccept:s,onCancel:o,shadow:f=!0},d)=>{const[p,m]=k.useState(()=>U1(u)),{year:v,month:g,day:E}=p,y=k.useCallback(({value:U})=>{m(_=>({..._,month:U}))},[]),T=k.useCallback(U=>{m(_=>({..._,year:U}))},[]),C=k.useCallback(U=>{m(_=>({..._,day:U}))},[]),$=k.useCallback(()=>{const U=[p.year,p.month+1,p.day].map(_=>String(_).padStart(2,"0")).join("-");s?.(U)},[p.day,p.month,p.year,s]),G=k.useMemo(()=>{const U=Array.from({length:42}),_=H1(v,g,1);let z=E;const w=B1(v,g);return z=z<w?z:w,U.forEach((B,q)=>{if(q>=_&&q<w+_){const X=q-_+1;U[q]=j.createElement(Ma,{key:q,onClick:()=>{C(X)}},j.createElement(M1,{active:X===z},X))}else U[q]=j.createElement(Ma,{key:q})}),U},[E,C,g,v]);return j.createElement(Zc,{className:l,ref:d,shadow:f,style:{margin:20}},j.createElement(Vc,null,j.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),j.createElement(Xc,null,j.createElement(_r,{noPadding:!0,style:{justifyContent:"space-between"}},j.createElement(Um,{options:N1,value:g,onChange:y,width:128,menuMaxHeight:200}),j.createElement(Om,{value:v,onChange:T,width:100})),j.createElement(O1,null,j.createElement(R1,null,j.createElement(Ma,null,"S"),j.createElement(Ma,null,"M"),j.createElement(Ma,null,"T"),j.createElement(Ma,null,"W"),j.createElement(Ma,null,"T"),j.createElement(Ma,null,"F"),j.createElement(Ma,null,"S")),j.createElement(C1,null,G)),j.createElement(_r,{noPadding:!0,style:{justifyContent:"space-between"}},j.createElement(Ba,{fullWidth:!0,onClick:o,disabled:!o},"Cancel"),j.createElement(Ba,{fullWidth:!0,onClick:s?$:void 0,disabled:!s},"OK"))))});j1.displayName="DatePicker";const $1=l=>{switch(l){case"status":case"well":return it`
        ${Jt({style:"status"})}
      `;case"window":case"outside":return it`
        ${Jt({style:"window"})}
      `;case"field":return it`
        ${Jt({style:"field"})}
      `;default:return it`
        ${Jt()}
      `}},L1=W.div`
  position: relative;
  font-size: 1rem;
  ${({variant:l})=>$1(l)}
  ${({variant:l})=>na(l==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,k1=k.forwardRef(({children:l,shadow:u=!1,variant:s="window",...o},f)=>j.createElement(L1,{ref:f,shadow:u,variant:s,...o},l));k1.displayName="Frame";const q1=W.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:l,variant:u})=>u==="flat"?l.flatDark:l.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:l})=>l.materialText};
  ${({variant:l})=>l!=="flat"&&it`
      box-shadow: -1px -1px 0 1px ${({theme:u})=>u.borderDark},
        inset -1px -1px 0 1px ${({theme:u})=>u.borderDark};
    `}
  ${l=>l.$disabled&&aa()}
`,Y1=W.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:l,variant:u})=>u==="flat"?l.canvas:l.material};
`,G1=k.forwardRef(({label:l,disabled:u=!1,variant:s="default",children:o,...f},d)=>j.createElement(q1,{"aria-disabled":u,$disabled:u,variant:s,ref:d,...f},l&&j.createElement(Y1,{variant:s},l),o));G1.displayName="GroupBox";const Q1=W.div`
  ${({theme:l,size:u="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${dn(u)};
  width: 5px;
  border-top: 2px solid ${l.borderLightest};
  border-left: 2px solid ${l.borderLightest};
  border-bottom: 2px solid ${l.borderDark};
  border-right: 2px solid ${l.borderDark};
  background: ${l.material};
`}
`;Q1.displayName="Handle";const X1="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",V1=W.div`
  display: inline-block;
  height: ${({size:l})=>dn(l)};
  width: ${({size:l})=>dn(l)};
`,Z1=W.span`
  display: block;
  background: ${X1};
  background-size: cover;
  width: 100%;
  height: 100%;
`,K1=k.forwardRef(({size:l=30,...u},s)=>j.createElement(V1,{size:l,ref:s,...u},j.createElement(Z1,null)));K1.displayName="Hourglass";const W1=W.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,J1=W.div`
  position: relative;
`,F1=W.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:l})=>l.material};
  border-top: 4px solid ${({theme:l})=>l.borderLightest};
  border-left: 4px solid ${({theme:l})=>l.borderLightest};
  border-bottom: 4px solid ${({theme:l})=>l.borderDark};
  border-right: 4px solid ${({theme:l})=>l.borderDark};

  outline: 1px dotted ${({theme:l})=>l.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:l})=>l.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:l})=>l.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,I1=W(ha).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,P1=W.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:l})=>l.material};
  border-left: 2px solid ${({theme:l})=>l.borderLightest};
  border-bottom: 2px solid ${({theme:l})=>l.borderDarkest};
  border-right: 2px solid ${({theme:l})=>l.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:l})=>l.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:l})=>l.material};
    border-left: 2px solid ${({theme:l})=>l.borderLightest};
    border-right: 2px solid ${({theme:l})=>l.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:l})=>l.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:l})=>l.material};
    border: 2px solid ${({theme:l})=>l.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:l})=>l.borderLightest},
      1px 1px 0 1px ${({theme:l})=>l.borderDarkest};
  }
`,tS=k.forwardRef(({backgroundStyles:l,children:u,...s},o)=>j.createElement(W1,{ref:o,...s},j.createElement(J1,null,j.createElement(F1,null,j.createElement(I1,{style:l},u)),j.createElement(P1,null))));tS.displayName="Monitor";const eS=W.div`
  display: inline-block;
  height: ${ve.md};
  width: 100%;
`,aS=W(ha)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,jm=it`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,nS=W.div`
  position: relative;
  top: 4px;
  ${jm}
  background: ${({theme:l})=>l.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:l})=>l.materialText};
`,lS=W.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${jm}
  color: ${({theme:l})=>l.materialTextInvert};
  background: ${({theme:l})=>l.progress};
  clip-path: polygon(
    0 0,
    ${({value:l=0})=>l}% 0,
    ${({value:l=0})=>l}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,iS=W.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,$m=17,uS=W.span`
  display: inline-block;
  width: ${$m}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:l})=>l.progress};
  border-color: ${({theme:l})=>l.material};
  border-width: 0px 1px;
  border-style: solid;
`,rS=k.forwardRef(({hideValue:l=!1,shadow:u=!0,value:s,variant:o="default",...f},d)=>{const p=l?null:`${s}%`,m=k.useRef(null),[v,g]=k.useState([]),E=k.useCallback(()=>{if(!m.current||s===void 0)return;const y=m.current.getBoundingClientRect().width,T=Math.round(s/100*y/$m);g(Array.from({length:T}))},[s]);return k.useEffect(()=>(E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)),[E]),j.createElement(eS,{"aria-valuenow":s!==void 0?Math.round(s):void 0,ref:d,role:"progressbar",variant:o,...f},j.createElement(aS,{variant:o,shadow:u},o==="default"?j.createElement(j.Fragment,null,j.createElement(nS,{"data-testid":"defaultProgress1"},p),j.createElement(lS,{"data-testid":"defaultProgress2",value:s},p)):j.createElement(iS,{ref:m,"data-testid":"tileProgress"},v.map((y,T)=>j.createElement(uS,{key:T})))))});rS.displayName="ProgressBar";const Lm=it`
  width: ${da}px;
  height: ${da}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,oS=W(ha)`
  ${Lm}
  background: ${({$disabled:l,theme:u})=>l?u.material:u.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,sS=W.div`
  ${qn()}
  ${Lm}
  outline: none;
  background: ${({$disabled:l,theme:u})=>l?u.flatLight:u.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:l})=>l.flatDark};
    border-radius: 50%;
  }
`,cS=W.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${l=>l.$disabled?l.theme.checkmarkDisabled:l.theme.checkmark};
`,fS={flat:sS,default:oS},dS=k.forwardRef(({checked:l,className:u="",disabled:s=!1,label:o="",onChange:f,style:d={},variant:p="default",...m},v)=>{const g=fS[p];return j.createElement(kc,{$disabled:s,className:u,style:d},j.createElement(g,{$disabled:s,role:"presentation"},l&&j.createElement(cS,{$disabled:s,variant:p})),j.createElement(Dr,{disabled:s,onChange:s?void 0:f,readOnly:s,type:"radio",checked:l,ref:v,...m}),o&&j.createElement(qc,null,o))});dS.displayName="Radio";const hS=typeof window<"u"?k.useLayoutEffect:k.useEffect;function Hn(l){const u=k.useRef(l);return hS(()=>{u.current=l}),k.useCallback((...s)=>(0,u.current)(...s),[])}function Ag(l,u){typeof l=="function"?l(u):l&&(l.current=u)}function Eg(l,u){return k.useMemo(()=>l==null&&u==null?null:s=>{Ag(l,s),Ag(u,s)},[l,u])}var Kc=Rr();let $r=!0,_c=!1,wg;const pS={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function gS(l){if("type"in l){const{type:u,tagName:s}=l;if(s==="INPUT"&&pS[u]&&!l.readOnly||s==="TEXTAREA"&&!l.readOnly)return!0}return!!("isContentEditable"in l&&l.isContentEditable)}function mS(l){l.metaKey||l.altKey||l.ctrlKey||($r=!0)}function cc(){$r=!1}function vS(){this.visibilityState==="hidden"&&_c&&($r=!0)}function yS(l){l.addEventListener("keydown",mS,!0),l.addEventListener("mousedown",cc,!0),l.addEventListener("pointerdown",cc,!0),l.addEventListener("touchstart",cc,!0),l.addEventListener("visibilitychange",vS,!0)}function bS(l){const{target:u}=l;try{return u.matches(":focus-visible")}catch{}return $r||gS(u)}function SS(){_c=!0,window.clearTimeout(wg),wg=window.setTimeout(()=>{_c=!1},100)}function xS(){const l=k.useCallback(u=>{const s=Kc.findDOMNode(u);s!=null&&yS(s.ownerDocument)},[]);return{isFocusVisible:bS,onBlurVisible:SS,ref:l}}function AS(l,u,s){return(s-u)*l+u}function sr(l,u){if(u!==void 0&&"changedTouches"in l){for(let s=0;s<l.changedTouches.length;s+=1){const o=l.changedTouches[s];if(o.identifier===u)return{x:o.clientX,y:o.clientY}}return!1}return"clientX"in l?{x:l.clientX,y:l.clientY}:!1}function cr(l){return l&&l.ownerDocument||document}function ES(l,u){var s;const{index:o}=(s=l.reduce((f,d,p)=>{const m=Math.abs(u-d);return f===null||m<f.distance||m===f.distance?{distance:m,index:p}:f},null))!==null&&s!==void 0?s:{};return o??-1}const wS=W.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:l})=>l?"41px":"39px"};
    ${({isFocused:l,theme:u})=>l&&`
        outline: 2px dotted ${u.materialText};
        `}
  }

  ${({orientation:l,size:u})=>l==="vertical"?it`
          height: ${u};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:s})=>s?"41px":"39px"};
          }
        `:it`
          width: ${u};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:s})=>s?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:l})=>l?"none":"auto"};
`,km=()=>it`
  position: absolute;
  ${({orientation:l})=>l==="vertical"?it`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:it`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,zS=W(ha)`
  ${km()}
`,TS=W(ha)`
  ${km()}

  border-left-color: ${({theme:l})=>l.flatLight};
  border-top-color: ${({theme:l})=>l.flatLight};
  border-right-color: ${({theme:l})=>l.canvas};
  border-bottom-color: ${({theme:l})=>l.canvas};
  &:before {
    border-left-color: ${({theme:l})=>l.flatDark};
    border-top-color: ${({theme:l})=>l.flatDark};
    border-right-color: ${({theme:l})=>l.flatLight};
    border-bottom-color: ${({theme:l})=>l.flatLight};
  }
`,DS=W.span`
  position: relative;
  ${({orientation:l})=>l==="vertical"?it`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:it`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:l})=>l==="flat"?it`
          ${qn()}
          outline: 2px solid ${({theme:u})=>u.flatDark};
          background: ${({theme:u})=>u.flatLight};
        `:it`
          ${na()}
          ${Jt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:l,theme:u})=>l&&qi({mainColor:u.material,secondaryColor:u.borderLightest})}
`,Cl=6,_S=W.span`
  display: inline-block;
  position: absolute;

  ${({orientation:l})=>l==="vertical"?it`
          right: ${-Cl-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Cl}px;
          border-bottom: 2px solid ${({theme:u})=>u.materialText};
        `:it`
          bottom: ${-Cl}px;
          height: ${Cl}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:u})=>u.materialText};
          border-right: 1px solid ${({theme:u})=>u.materialText};
        `}

  color:  ${({theme:l})=>l.materialText};
  ${({$disabled:l,theme:u})=>l&&it`
      ${aa()}
      box-shadow: 1px 1px 0px ${u.materialTextDisabledShadow};
      border-color: ${u.materialTextDisabled};
    `}
`,OS=W.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:l})=>l==="vertical"?it`
          transform: translate(${Cl+2}px, ${Cl+1}px);
        `:it`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,RS=k.forwardRef(({defaultValue:l,disabled:u=!1,marks:s=!1,max:o=100,min:f=0,name:d,onChange:p,onChangeCommitted:m,onMouseDown:v,orientation:g="horizontal",size:E="100%",step:y=1,value:T,variant:C="default",...$},G)=>{const U=C==="flat"?TS:zS,_=g==="vertical",[z=f,w]=hn({defaultValue:l,onChange:p??m,value:T}),{isFocusVisible:B,onBlurVisible:q,ref:X}=xS(),[b,H]=k.useState(!1),I=k.useRef(),st=k.useRef(null),ht=Eg(X,I),et=Eg(G,ht),mt=Hn(Z=>{B(Z)&&H(!0)}),xt=Hn(()=>{b!==!1&&(H(!1),q())}),yt=k.useRef(),N=k.useMemo(()=>s===!0&&Number.isFinite(y)?[...Array(Math.round((o-f)/y)+1)].map((Z,F)=>({label:void 0,value:f+y*F})):Array.isArray(s)?s:[],[s,o,f,y]),P=Hn(Z=>{const F=(o-f)/10,at=N.map(Rt=>Rt.value),nt=at.indexOf(z);let ut=0;switch(Z.key){case"Home":ut=f;break;case"End":ut=o;break;case"PageUp":y&&(ut=z+F);break;case"PageDown":y&&(ut=z-F);break;case"ArrowRight":case"ArrowUp":y?ut=z+y:ut=at[nt+1]||at[at.length-1];break;case"ArrowLeft":case"ArrowDown":y?ut=z-y:ut=at[nt-1]||at[0];break;default:return}Z.preventDefault(),y&&(ut=bg(ut,y,f)),ut=jn(ut,f,o),w(ut),H(!0),p?.(ut),m?.(ut)}),tt=k.useCallback(Z=>{if(!I.current)return 0;const F=I.current.getBoundingClientRect();let at;_?at=(F.bottom-Z.y)/F.height:at=(Z.x-F.left)/F.width;let nt;if(nt=AS(at,f,o),y)nt=bg(nt,y,f);else{const ut=N.map(J=>J.value),Rt=ES(ut,nt);nt=ut[Rt]}return nt=jn(nt,f,o),nt},[N,o,f,y,_]),ot=Hn(Z=>{var F;const at=sr(Z,yt.current);if(!at)return;const nt=tt(at);(F=st.current)===null||F===void 0||F.focus(),w(nt),H(!0),p?.(nt)}),ft=Hn(Z=>{const F=sr(Z,yt.current);if(!F)return;const at=tt(F);m?.(at),yt.current=void 0;const nt=cr(I.current);nt.removeEventListener("mousemove",ot),nt.removeEventListener("mouseup",ft),nt.removeEventListener("touchmove",ot),nt.removeEventListener("touchend",ft)}),x=Hn(Z=>{var F;v?.(Z),Z.preventDefault(),(F=st.current)===null||F===void 0||F.focus(),H(!0);const at=sr(Z,yt.current);if(at){const ut=tt(at);w(ut),p?.(ut)}const nt=cr(I.current);nt.addEventListener("mousemove",ot),nt.addEventListener("mouseup",ft)}),Y=Hn(Z=>{var F;Z.preventDefault();const at=Z.changedTouches[0];at!=null&&(yt.current=at.identifier),(F=st.current)===null||F===void 0||F.focus(),H(!0);const nt=sr(Z,yt.current);if(nt){const Rt=tt(nt);w(Rt),p?.(Rt)}const ut=cr(I.current);ut.addEventListener("touchmove",ot),ut.addEventListener("touchend",ft)});return k.useEffect(()=>{const{current:Z}=I;Z?.addEventListener("touchstart",Y);const F=cr(Z);return()=>{Z?.removeEventListener("touchstart",Y),F.removeEventListener("mousemove",ot),F.removeEventListener("mouseup",ft),F.removeEventListener("touchmove",ot),F.removeEventListener("touchend",ft)}},[ft,ot,Y]),j.createElement(wS,{$disabled:u,hasMarks:!!N.length,isFocused:b,onMouseDown:x,orientation:g,ref:et,size:dn(E),...$},j.createElement("input",{disabled:u,name:d,type:"hidden",value:z??0}),N&&N.map(Z=>j.createElement(_S,{$disabled:u,"data-testid":"tick",key:Z.value/(o-f)*100,orientation:g,style:{[_?"bottom":"left"]:`${(Z.value-f)/(o-f)*100}%`}},Z.label&&j.createElement(OS,{"aria-hidden":!0,"data-testid":"mark",orientation:g},Z.label))),j.createElement(U,{orientation:g,variant:C}),j.createElement(DS,{$disabled:u,"aria-disabled":u?!0:void 0,"aria-orientation":g,"aria-valuemax":o,"aria-valuemin":f,"aria-valuenow":z,onBlur:xt,onFocus:mt,onKeyDown:P,orientation:g,ref:st,role:"slider",style:{[_?"bottom":"left"]:`${(_?-100:0)+100*(z-f)/(o-f)}%`},tabIndex:u?void 0:0,variant:C}))});RS.displayName="Slider";const CS=W.tbody`
  background: ${({theme:l})=>l.canvas};
  display: table-row-group;
  box-shadow: ${$c};
  overflow-y: auto;
`,MS=k.forwardRef(function({children:u,...s},o){return j.createElement(CS,{ref:o,...s},u)});MS.displayName="TableBody";const NS=W.td`
  padding: 0 8px;
`,BS=k.forwardRef(function({children:u,...s},o){return j.createElement(NS,{ref:o,...s},u)});BS.displayName="TableDataCell";const HS=W.thead`
  display: table-header-group;
`,US=k.forwardRef(function({children:u,...s},o){return j.createElement(HS,{ref:o,...s},u)});US.displayName="TableHead";const jS=W.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:l})=>l.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Jt()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:l})=>!l&&it`
      &:active {
        &:before {
          ${Jt({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:l})=>l.materialText};
  ${({$disabled:l})=>l&&aa()}
  &:hover {
    color: ${({theme:l})=>l.materialText};
    ${({$disabled:l})=>l&&aa()}
  }
`,$S=k.forwardRef(function({disabled:u=!1,children:s,onClick:o,onTouchStart:f=Yn,sort:d,...p},m){const v=d==="asc"?"ascending":d==="desc"?"descending":void 0;return j.createElement(jS,{$disabled:u,"aria-disabled":u,"aria-sort":v,onClick:u?void 0:o,onTouchStart:u?void 0:f,ref:m,...p},j.createElement("div",null,s))});$S.displayName="TableHeadCell";const LS=W.tr`
  color: inherit;
  display: table-row;
  height: calc(${ve.md} - 2px);
  line-height: calc(${ve.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:l})=>l.canvasText};
  &:hover {
    background: ${({theme:l})=>l.hoverBackground};
    color: ${({theme:l})=>l.canvasTextInvert};
  }
`,kS=k.forwardRef(function({children:u,...s},o){return j.createElement(LS,{ref:o,...s},u)});kS.displayName="TableRow";const qS=W.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,YS=W(ha)`
  &:before {
    box-shadow: none;
  }
`,GS=k.forwardRef(({children:l,...u},s)=>j.createElement(YS,null,j.createElement(qS,{ref:s,...u},l)));GS.displayName="Table";const QS=W.button`
  ${na()}
  ${Jt()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${ve.md};
  line-height: ${ve.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:l})=>l.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Ul}
    outline-offset: -6px;
  }
  ${l=>l.selected&&`
    z-index: 1;
    height: calc(${ve.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:l})=>l.material};
    bottom: -4px;
    left: 2px;
  }
`,XS=k.forwardRef(({value:l,onClick:u,selected:s=!1,children:o,...f},d)=>j.createElement(QS,{"aria-selected":s,selected:s,onClick:p=>u?.(l,p),ref:d,role:"tab",...f},o));XS.displayName="Tab";const VS=W.div`
  ${na()}
  ${Jt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,ZS=k.forwardRef(({children:l,...u},s)=>j.createElement(VS,{ref:s,...u},l));ZS.displayName="TabBody";const KS=W.div`
  position: relative;
  ${({isMultiRow:l,theme:u})=>l&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${u.borderDark};
  }
  `}
`,WS=W.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:l})=>l.borderDarkest};
    border-left: 2px solid ${({theme:l})=>l.borderLightest};
  }
`;function JS(l,u){const s=[];for(let o=u;o>0;o-=1)s.push(l.splice(0,Math.ceil(l.length/o)));return s}const FS=k.forwardRef(({value:l,onChange:u=Yn,children:s,rows:o=1,...f},d)=>{const p=k.useMemo(()=>{var m;const v=(m=j.Children.map(s,y=>{if(!j.isValidElement(y))return null;const T={selected:y.props.value===l,onClick:u};return j.cloneElement(y,T)}))!==null&&m!==void 0?m:[],g=JS(v,o).map((y,T)=>({key:T,tabs:y})),E=g.findIndex(y=>y.tabs.some(T=>T.props.selected));return g.push(g.splice(E,1)[0]),g},[s,u,o,l]);return j.createElement(KS,{...f,isMultiRow:o>1,role:"tablist",ref:d},p.map(m=>j.createElement(WS,{key:m.key},m.tabs)))});FS.displayName="Tabs";const IS=["blur","focus"],PS=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function zg(l){return"nativeEvent"in l&&IS.includes(l.type)}function Tg(l){return"nativeEvent"in l&&PS.includes(l.type)}const tx={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},ex=W.span`
  position: absolute;

  z-index: 1;
  display: ${l=>l.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:l})=>l.borderDarkest};
  background: ${({theme:l})=>l.tooltip};
  box-shadow: ${jc};
  text-align: center;
  font-size: 1rem;
  ${l=>tx[l.position]}
`,ax=W.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,nx=k.forwardRef(({className:l,children:u,disableFocusListener:s=!1,disableMouseListener:o=!1,enterDelay:f=1e3,leaveDelay:d=0,onBlur:p,onClose:m,onFocus:v,onMouseEnter:g,onMouseLeave:E,onOpen:y,style:T,text:C,position:$="top",...G},U)=>{const[_,z]=k.useState(!1),[w,B]=k.useState(),[q,X]=k.useState(),b=!s,H=!o,I=tt=>{window.clearTimeout(w),window.clearTimeout(q);const ot=window.setTimeout(()=>{z(!0),y?.(tt)},f);B(ot)},st=tt=>{tt.persist(),zg(tt)?v?.(tt):Tg(tt)&&g?.(tt),I(tt)},ht=tt=>{window.clearTimeout(w),window.clearTimeout(q);const ot=window.setTimeout(()=>{z(!1),m?.(tt)},d);X(ot)},et=tt=>{tt.persist(),zg(tt)?p?.(tt):Tg(tt)&&E?.(tt),ht(tt)},mt=b?et:void 0,xt=b?st:void 0,yt=H?st:void 0,N=H?et:void 0,P=b?0:void 0;return j.createElement(ax,{"data-testid":"tooltip-wrapper",onBlur:mt,onFocus:xt,onMouseEnter:yt,onMouseLeave:N,tabIndex:P},j.createElement(ex,{className:l,"data-testid":"tooltip",position:$,ref:U,show:_,style:T,...G},C),u)});nx.displayName="Tooltip";const Oc=W(qc)`
  white-space: nowrap;
`,qm=it`
  :focus {
    outline: none;
  }

  ${({$disabled:l})=>l?"cursor: default;":it`
          cursor: pointer;

          :focus {
            ${Oc} {
              background: ${({theme:u})=>u.hoverBackground};
              color: ${({theme:u})=>u.materialTextInvert};
              outline: 2px dotted ${({theme:u})=>u.focusSecondary};
            }
          }
        `}
`,lx=W.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:l})=>l&&it`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:u})=>u.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:l})=>l.borderDark};
      font-size: 12px;
    }
  }
`,ix=W.li`
  position: relative;
  padding-left: ${({hasItems:l})=>l?"0":"13px"};

  ${({isRootLevel:l})=>l?it`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:u})=>u.material};
            }
          }
        `:it`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:u})=>u.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:l})=>l.borderDark};
    }
  }
`,ux=W.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,rx=W.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:l})=>l.materialText};
  user-select: none;
  padding-left: 18px;
  ${qm};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,Dg=W(kc)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${qm};
`,ox=W.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function _g(l,u){return l.includes(u)?l.filter(s=>s!==u):[...l,u]}function Og(l){l.preventDefault()}function Ym({className:l,disabled:u,expanded:s,innerRef:o,level:f,select:d,selected:p,style:m,tree:v=[]}){const g=f===0,E=k.useCallback(y=>{var T,C;const $=!!(y.items&&y.items.length>0),G=s.includes(y.id),U=(T=u||y.disabled)!==null&&T!==void 0?T:!1,_=U?Og:q=>d(q,y),z=U?Og:q=>d(q,y),w=p===y.id,B=j.createElement(ox,{"aria-hidden":!0},y.icon);return j.createElement(ix,{key:y.label,isRootLevel:g,role:"treeitem","aria-expanded":G,"aria-selected":w,hasItems:$},$?j.createElement(ux,{open:G},j.createElement(rx,{onClick:_,$disabled:U},j.createElement(Dg,{$disabled:U},B,j.createElement(Oc,null,y.label))),G&&j.createElement(Ym,{className:l,disabled:U,expanded:s,level:f+1,select:d,selected:p,style:m,tree:(C=y.items)!==null&&C!==void 0?C:[]})):j.createElement(Dg,{as:"button",$disabled:U,onClick:z},B,j.createElement(Oc,null,y.label)))},[l,u,s,g,f,d,p,m]);return j.createElement(lx,{className:g?l:void 0,style:g?m:void 0,ref:g?o:void 0,role:g?"tree":"group",isRootLevel:g},v.map(E))}function sx({className:l,defaultExpanded:u=[],defaultSelected:s,disabled:o=!1,expanded:f,onNodeSelect:d,onNodeToggle:p,selected:m,style:v,tree:g=[]},E){const[y,T]=hn({defaultValue:u,onChange:p,onChangePropName:"onNodeToggle",value:f,valuePropName:"expanded"}),[C,$]=hn({defaultValue:s,onChange:d,onChangePropName:"onNodeSelect",value:m,valuePropName:"selected"}),G=k.useCallback((z,w)=>{if(p){const B=_g(y,w);p(z,B)}T(B=>_g(B,w))},[y,p,T]),U=k.useCallback((z,w)=>{$(w),d&&d(z,w)},[d,$]),_=k.useCallback((z,w)=>{z.preventDefault(),U(z,w.id),w.items&&w.items.length&&G(z,w.id)},[U,G]);return j.createElement(Ym,{className:l,disabled:o,expanded:y,level:0,innerRef:E,select:_,selected:C,style:v,tree:g})}const cx=k.forwardRef(sx);cx.displayName="TreeView";var fc,Rg;function fx(){if(Rg)return fc;Rg=1;var l={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return fc=l,fc}var dx=fx();const hx=Cc(dx),Cg=l=>{let u;const s=new Set,o=(g,E)=>{const y=typeof g=="function"?g(u):g;if(!Object.is(y,u)){const T=u;u=E??(typeof y!="object"||y===null)?y:Object.assign({},u,y),s.forEach(C=>C(u,T))}},f=()=>u,m={setState:o,getState:f,getInitialState:()=>v,subscribe:g=>(s.add(g),()=>s.delete(g))},v=u=l(o,f,m);return m},px=(l=>l?Cg(l):Cg),gx=l=>l;function mx(l,u=gx){const s=j.useSyncExternalStore(l.subscribe,j.useCallback(()=>u(l.getState()),[l,u]),j.useCallback(()=>u(l.getInitialState()),[l,u]));return j.useDebugValue(s),s}const Mg=l=>{const u=px(l),s=o=>mx(u,o);return Object.assign(s,u),s},vx=(l=>l?Mg(l):Mg),Lr=vx((l,u)=>({windows:[],activeWindowId:null,openWindow:s=>{const{windows:o,focusWindow:f}=u();if(o.find(g=>g.id===s)){f(s);return}const p=Math.max(0,...o.map(g=>g.zIndex)),m=o.length*20,v={id:s,x:50+m,y:50+m,width:400,height:300,isMinimized:!1,isMaximized:!1,zIndex:p+1};l(g=>({windows:[...g.windows,v],activeWindowId:s}))},closeWindow:s=>l(o=>({windows:o.windows.filter(f=>f.id!==s),activeWindowId:null})),minimizeWindow:s=>l(o=>({windows:o.windows.map(f=>f.id===s?{...f,isMinimized:!0}:f)})),restoreWindow:s=>l(o=>({windows:o.windows.map(f=>f.id===s?{...f,isMinimized:!1}:f),activeWindowId:s})),toggleMaximize:s=>l(o=>({windows:o.windows.map(f=>f.id===s?{...f,isMaximized:!f.isMaximized}:f)})),focusWindow:s=>l(o=>{const f=Math.max(0,...o.windows.map(d=>d.zIndex));return{activeWindowId:s,windows:o.windows.map(d=>d.id===s?{...d,zIndex:f+1}:d)}}),updateWindowPos:(s,o,f)=>l(d=>({windows:d.windows.map(p=>p.id===s?{...p,x:o,y:f}:p)})),updateWindowSize:(s,o,f)=>l(d=>({windows:d.windows.map(p=>p.id===s?{...p,width:o,height:f}:p)}))})),Ui={desktop:{id:"desktop",title:"Desktop",type:"folder",icon:"computer",children:["my_computer","recycle_bin","about_me","projects"]},my_computer:{id:"my_computer",title:"My Computer",type:"folder",icon:"computer",children:["c_drive"]},c_drive:{id:"c_drive",title:"C:",type:"folder",icon:"disk_drive",children:["projects","about_me"]},recycle_bin:{id:"recycle_bin",title:"Recycle Bin",type:"folder",icon:"recycle_full",children:[]},about_me:{id:"about_me",title:"About Me.txt",type:"txt",icon:"notepad",content:"Hi, I'm a developer building a Windows 95 portfolio... hnidjfiwdnjbivajnsdcjndcojndwcojsdncojsdnvojsndvojndvojawdnvojwdnvojwdvncodjwcnowdjcnowjcnwoejcnwojvnwqojvnqwojfqneovnaweovjanweovanweovajnweocanwevoanwcaojencoejnoejcnocq"},projects:{id:"projects",title:"My Projects",type:"folder",icon:"folder_open",children:["project_1"]},project_1:{id:"project_1",title:"Portfolio Site",type:"txt",icon:"notepad",content:"This represents the project you are building right now."}};var Mi={exports:{}},dc={},hc={exports:{}},pc,Ng;function yx(){if(Ng)return pc;Ng=1;var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return pc=l,pc}var gc,Bg;function bx(){if(Bg)return gc;Bg=1;var l=yx();function u(){}function s(){}return s.resetWarningCache=u,gc=function(){function o(p,m,v,g,E,y){if(y!==l){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}o.isRequired=o;function f(){return o}var d={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:f,element:o,elementType:o,instanceOf:f,node:o,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:s,resetWarningCache:u};return d.PropTypes=d,d},gc}var Hg;function Gm(){return Hg||(Hg=1,hc.exports=bx()()),hc.exports}function Qm(l){var u,s,o="";if(typeof l=="string"||typeof l=="number")o+=l;else if(typeof l=="object")if(Array.isArray(l))for(u=0;u<l.length;u++)l[u]&&(s=Qm(l[u]))&&(o&&(o+=" "),o+=s);else for(u in l)l[u]&&(o&&(o+=" "),o+=u);return o}function Ug(){for(var l,u,s=0,o="";s<arguments.length;)(l=arguments[s++])&&(u=Qm(l))&&(o&&(o+=" "),o+=u);return o}const Sx=Object.freeze(Object.defineProperty({__proto__:null,clsx:Ug,default:Ug},Symbol.toStringTag,{value:"Module"})),xx=gy(Sx);var Pt={},rn={},jg;function kr(){if(jg)return rn;jg=1,Object.defineProperty(rn,"__esModule",{value:!0}),rn.dontSetMe=f,rn.findInArray=l,rn.int=o,rn.isFunction=u,rn.isNum=s;function l(d,p){for(let m=0,v=d.length;m<v;m++)if(p.apply(p,[d[m],m,d]))return d[m]}function u(d){return typeof d=="function"||Object.prototype.toString.call(d)==="[object Function]"}function s(d){return typeof d=="number"&&!isNaN(d)}function o(d){return parseInt(d,10)}function f(d,p,m){if(d[p])return new Error("Invalid prop ".concat(p," passed to ").concat(m," - do not set this, set it on the child."))}return rn}var on={},$g;function Ax(){if($g)return on;$g=1,Object.defineProperty(on,"__esModule",{value:!0}),on.browserPrefixToKey=s,on.browserPrefixToStyle=o,on.default=void 0,on.getPrefix=u;const l=["Moz","Webkit","O","ms"];function u(){var d;let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const m=(d=window.document)===null||d===void 0||(d=d.documentElement)===null||d===void 0?void 0:d.style;if(!m||p in m)return"";for(let v=0;v<l.length;v++)if(s(p,l[v])in m)return l[v];return""}function s(d,p){return p?"".concat(p).concat(f(d)):d}function o(d,p){return p?"-".concat(p.toLowerCase(),"-").concat(d):d}function f(d){let p="",m=!0;for(let v=0;v<d.length;v++)m?(p+=d[v].toUpperCase(),m=!1):d[v]==="-"?m=!0:p+=d[v];return p}return on.default=u(),on}var Lg;function Wc(){if(Lg)return Pt;Lg=1,Object.defineProperty(Pt,"__esModule",{value:!0}),Pt.addClassName=q,Pt.addEvent=m,Pt.addUserSelectStyles=w,Pt.createCSSTransform=$,Pt.createSVGTransform=G,Pt.getTouch=_,Pt.getTouchIdentifier=z,Pt.getTranslation=U,Pt.innerHeight=y,Pt.innerWidth=T,Pt.matchesSelector=d,Pt.matchesSelectorAndParentsTo=p,Pt.offsetXYFromParent=C,Pt.outerHeight=g,Pt.outerWidth=E,Pt.removeClassName=X,Pt.removeEvent=v,Pt.removeUserSelectStyles=B;var l=kr(),u=o(Ax());function s(b){if(typeof WeakMap!="function")return null;var H=new WeakMap,I=new WeakMap;return(s=function(st){return st?I:H})(b)}function o(b,H){if(b&&b.__esModule)return b;if(b===null||typeof b!="object"&&typeof b!="function")return{default:b};var I=s(H);if(I&&I.has(b))return I.get(b);var st={},ht=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var et in b)if(et!=="default"&&Object.prototype.hasOwnProperty.call(b,et)){var mt=ht?Object.getOwnPropertyDescriptor(b,et):null;mt&&(mt.get||mt.set)?Object.defineProperty(st,et,mt):st[et]=b[et]}return st.default=b,I&&I.set(b,st),st}let f="";function d(b,H){return f||(f=(0,l.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(I){return(0,l.isFunction)(b[I])})),(0,l.isFunction)(b[f])?b[f](H):!1}function p(b,H,I){let st=b;do{if(d(st,H))return!0;if(st===I)return!1;st=st.parentNode}while(st);return!1}function m(b,H,I,st){if(!b)return;const ht={capture:!0,...st};b.addEventListener?b.addEventListener(H,I,ht):b.attachEvent?b.attachEvent("on"+H,I):b["on"+H]=I}function v(b,H,I,st){if(!b)return;const ht={capture:!0,...st};b.removeEventListener?b.removeEventListener(H,I,ht):b.detachEvent?b.detachEvent("on"+H,I):b["on"+H]=null}function g(b){let H=b.clientHeight;const I=b.ownerDocument.defaultView.getComputedStyle(b);return H+=(0,l.int)(I.borderTopWidth),H+=(0,l.int)(I.borderBottomWidth),H}function E(b){let H=b.clientWidth;const I=b.ownerDocument.defaultView.getComputedStyle(b);return H+=(0,l.int)(I.borderLeftWidth),H+=(0,l.int)(I.borderRightWidth),H}function y(b){let H=b.clientHeight;const I=b.ownerDocument.defaultView.getComputedStyle(b);return H-=(0,l.int)(I.paddingTop),H-=(0,l.int)(I.paddingBottom),H}function T(b){let H=b.clientWidth;const I=b.ownerDocument.defaultView.getComputedStyle(b);return H-=(0,l.int)(I.paddingLeft),H-=(0,l.int)(I.paddingRight),H}function C(b,H,I){const ht=H===H.ownerDocument.body?{left:0,top:0}:H.getBoundingClientRect(),et=(b.clientX+H.scrollLeft-ht.left)/I,mt=(b.clientY+H.scrollTop-ht.top)/I;return{x:et,y:mt}}function $(b,H){const I=U(b,H,"px");return{[(0,u.browserPrefixToKey)("transform",u.default)]:I}}function G(b,H){return U(b,H,"")}function U(b,H,I){let{x:st,y:ht}=b,et="translate(".concat(st).concat(I,",").concat(ht).concat(I,")");if(H){const mt="".concat(typeof H.x=="string"?H.x:H.x+I),xt="".concat(typeof H.y=="string"?H.y:H.y+I);et="translate(".concat(mt,", ").concat(xt,")")+et}return et}function _(b,H){return b.targetTouches&&(0,l.findInArray)(b.targetTouches,I=>H===I.identifier)||b.changedTouches&&(0,l.findInArray)(b.changedTouches,I=>H===I.identifier)}function z(b){if(b.targetTouches&&b.targetTouches[0])return b.targetTouches[0].identifier;if(b.changedTouches&&b.changedTouches[0])return b.changedTouches[0].identifier}function w(b){if(!b)return;let H=b.getElementById("react-draggable-style-el");H||(H=b.createElement("style"),H.type="text/css",H.id="react-draggable-style-el",H.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,H.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,b.getElementsByTagName("head")[0].appendChild(H)),b.body&&q(b.body,"react-draggable-transparent-selection")}function B(b){if(b)try{if(b.body&&X(b.body,"react-draggable-transparent-selection"),b.selection)b.selection.empty();else{const H=(b.defaultView||window).getSelection();H&&H.type!=="Caret"&&H.removeAllRanges()}}catch{}}function q(b,H){b.classList?b.classList.add(H):b.className.match(new RegExp("(?:^|\\s)".concat(H,"(?!\\S)")))||(b.className+=" ".concat(H))}function X(b,H){b.classList?b.classList.remove(H):b.className=b.className.replace(new RegExp("(?:^|\\s)".concat(H,"(?!\\S)"),"g"),"")}return Pt}var sa={},kg;function Xm(){if(kg)return sa;kg=1,Object.defineProperty(sa,"__esModule",{value:!0}),sa.canDragX=f,sa.canDragY=d,sa.createCoreData=m,sa.createDraggableData=v,sa.getBoundPosition=s,sa.getControlPosition=p,sa.snapToGrid=o;var l=kr(),u=Wc();function s(y,T,C){if(!y.props.bounds)return[T,C];let{bounds:$}=y.props;$=typeof $=="string"?$:g($);const G=E(y);if(typeof $=="string"){const{ownerDocument:U}=G,_=U.defaultView;let z;if($==="parent"?z=G.parentNode:z=U.querySelector($),!(z instanceof _.HTMLElement))throw new Error('Bounds selector "'+$+'" could not find an element.');const w=z,B=_.getComputedStyle(G),q=_.getComputedStyle(w);$={left:-G.offsetLeft+(0,l.int)(q.paddingLeft)+(0,l.int)(B.marginLeft),top:-G.offsetTop+(0,l.int)(q.paddingTop)+(0,l.int)(B.marginTop),right:(0,u.innerWidth)(w)-(0,u.outerWidth)(G)-G.offsetLeft+(0,l.int)(q.paddingRight)-(0,l.int)(B.marginRight),bottom:(0,u.innerHeight)(w)-(0,u.outerHeight)(G)-G.offsetTop+(0,l.int)(q.paddingBottom)-(0,l.int)(B.marginBottom)}}return(0,l.isNum)($.right)&&(T=Math.min(T,$.right)),(0,l.isNum)($.bottom)&&(C=Math.min(C,$.bottom)),(0,l.isNum)($.left)&&(T=Math.max(T,$.left)),(0,l.isNum)($.top)&&(C=Math.max(C,$.top)),[T,C]}function o(y,T,C){const $=Math.round(T/y[0])*y[0],G=Math.round(C/y[1])*y[1];return[$,G]}function f(y){return y.props.axis==="both"||y.props.axis==="x"}function d(y){return y.props.axis==="both"||y.props.axis==="y"}function p(y,T,C){const $=typeof T=="number"?(0,u.getTouch)(y,T):null;if(typeof T=="number"&&!$)return null;const G=E(C),U=C.props.offsetParent||G.offsetParent||G.ownerDocument.body;return(0,u.offsetXYFromParent)($||y,U,C.props.scale)}function m(y,T,C){const $=!(0,l.isNum)(y.lastX),G=E(y);return $?{node:G,deltaX:0,deltaY:0,lastX:T,lastY:C,x:T,y:C}:{node:G,deltaX:T-y.lastX,deltaY:C-y.lastY,lastX:y.lastX,lastY:y.lastY,x:T,y:C}}function v(y,T){const C=y.props.scale;return{node:T.node,x:y.state.x+T.deltaX/C,y:y.state.y+T.deltaY/C,deltaX:T.deltaX/C,deltaY:T.deltaY/C,lastX:y.state.x,lastY:y.state.y}}function g(y){return{left:y.left,top:y.top,right:y.right,bottom:y.bottom}}function E(y){const T=y.findDOMNode();if(!T)throw new Error("<DraggableCore>: Unmounted during event!");return T}return sa}var Ni={},fr={},qg;function Vm(){if(qg)return fr;qg=1,Object.defineProperty(fr,"__esModule",{value:!0}),fr.default=l;function l(){}return fr}var Yg;function Ex(){if(Yg)return Ni;Yg=1,Object.defineProperty(Ni,"__esModule",{value:!0}),Ni.default=void 0;var l=g(ki()),u=m(Gm()),s=m(Rr()),o=Wc(),f=Xm(),d=kr(),p=m(Vm());function m(U){return U&&U.__esModule?U:{default:U}}function v(U){if(typeof WeakMap!="function")return null;var _=new WeakMap,z=new WeakMap;return(v=function(w){return w?z:_})(U)}function g(U,_){if(U&&U.__esModule)return U;if(U===null||typeof U!="object"&&typeof U!="function")return{default:U};var z=v(_);if(z&&z.has(U))return z.get(U);var w={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var q in U)if(q!=="default"&&Object.prototype.hasOwnProperty.call(U,q)){var X=B?Object.getOwnPropertyDescriptor(U,q):null;X&&(X.get||X.set)?Object.defineProperty(w,q,X):w[q]=U[q]}return w.default=U,z&&z.set(U,w),w}function E(U,_,z){return _=y(_),_ in U?Object.defineProperty(U,_,{value:z,enumerable:!0,configurable:!0,writable:!0}):U[_]=z,U}function y(U){var _=T(U,"string");return typeof _=="symbol"?_:String(_)}function T(U,_){if(typeof U!="object"||U===null)return U;var z=U[Symbol.toPrimitive];if(z!==void 0){var w=z.call(U,_);if(typeof w!="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return(_==="string"?String:Number)(U)}const C={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let $=C.mouse,G=class extends l.Component{constructor(){super(...arguments),E(this,"dragging",!1),E(this,"lastX",NaN),E(this,"lastY",NaN),E(this,"touchIdentifier",null),E(this,"mounted",!1),E(this,"handleDragStart",_=>{if(this.props.onMouseDown(_),!this.props.allowAnyClick&&typeof _.button=="number"&&_.button!==0)return!1;const z=this.findDOMNode();if(!z||!z.ownerDocument||!z.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:w}=z;if(this.props.disabled||!(_.target instanceof w.defaultView.Node)||this.props.handle&&!(0,o.matchesSelectorAndParentsTo)(_.target,this.props.handle,z)||this.props.cancel&&(0,o.matchesSelectorAndParentsTo)(_.target,this.props.cancel,z))return;_.type==="touchstart"&&_.preventDefault();const B=(0,o.getTouchIdentifier)(_);this.touchIdentifier=B;const q=(0,f.getControlPosition)(_,B,this);if(q==null)return;const{x:X,y:b}=q,H=(0,f.createCoreData)(this,X,b);(0,p.default)("DraggableCore: handleDragStart: %j",H),(0,p.default)("calling",this.props.onStart),!(this.props.onStart(_,H)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,o.addUserSelectStyles)(w),this.dragging=!0,this.lastX=X,this.lastY=b,(0,o.addEvent)(w,$.move,this.handleDrag),(0,o.addEvent)(w,$.stop,this.handleDragStop))}),E(this,"handleDrag",_=>{const z=(0,f.getControlPosition)(_,this.touchIdentifier,this);if(z==null)return;let{x:w,y:B}=z;if(Array.isArray(this.props.grid)){let b=w-this.lastX,H=B-this.lastY;if([b,H]=(0,f.snapToGrid)(this.props.grid,b,H),!b&&!H)return;w=this.lastX+b,B=this.lastY+H}const q=(0,f.createCoreData)(this,w,B);if((0,p.default)("DraggableCore: handleDrag: %j",q),this.props.onDrag(_,q)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const H=document.createEvent("MouseEvents");H.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(H)}return}this.lastX=w,this.lastY=B}),E(this,"handleDragStop",_=>{if(!this.dragging)return;const z=(0,f.getControlPosition)(_,this.touchIdentifier,this);if(z==null)return;let{x:w,y:B}=z;if(Array.isArray(this.props.grid)){let H=w-this.lastX||0,I=B-this.lastY||0;[H,I]=(0,f.snapToGrid)(this.props.grid,H,I),w=this.lastX+H,B=this.lastY+I}const q=(0,f.createCoreData)(this,w,B);if(this.props.onStop(_,q)===!1||this.mounted===!1)return!1;const b=this.findDOMNode();b&&this.props.enableUserSelectHack&&(0,o.removeUserSelectStyles)(b.ownerDocument),(0,p.default)("DraggableCore: handleDragStop: %j",q),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,b&&((0,p.default)("DraggableCore: Removing handlers"),(0,o.removeEvent)(b.ownerDocument,$.move,this.handleDrag),(0,o.removeEvent)(b.ownerDocument,$.stop,this.handleDragStop))}),E(this,"onMouseDown",_=>($=C.mouse,this.handleDragStart(_))),E(this,"onMouseUp",_=>($=C.mouse,this.handleDragStop(_))),E(this,"onTouchStart",_=>($=C.touch,this.handleDragStart(_))),E(this,"onTouchEnd",_=>($=C.touch,this.handleDragStop(_)))}componentDidMount(){this.mounted=!0;const _=this.findDOMNode();_&&(0,o.addEvent)(_,C.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const _=this.findDOMNode();if(_){const{ownerDocument:z}=_;(0,o.removeEvent)(z,C.mouse.move,this.handleDrag),(0,o.removeEvent)(z,C.touch.move,this.handleDrag),(0,o.removeEvent)(z,C.mouse.stop,this.handleDragStop),(0,o.removeEvent)(z,C.touch.stop,this.handleDragStop),(0,o.removeEvent)(_,C.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,o.removeUserSelectStyles)(z)}}findDOMNode(){var _,z;return(_=this.props)!==null&&_!==void 0&&_.nodeRef?(z=this.props)===null||z===void 0||(z=z.nodeRef)===null||z===void 0?void 0:z.current:s.default.findDOMNode(this)}render(){return l.cloneElement(l.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};return Ni.default=G,E(G,"displayName","DraggableCore"),E(G,"propTypes",{allowAnyClick:u.default.bool,children:u.default.node.isRequired,disabled:u.default.bool,enableUserSelectHack:u.default.bool,offsetParent:function(U,_){if(U[_]&&U[_].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:u.default.arrayOf(u.default.number),handle:u.default.string,cancel:u.default.string,nodeRef:u.default.object,onStart:u.default.func,onDrag:u.default.func,onStop:u.default.func,onMouseDown:u.default.func,scale:u.default.number,className:d.dontSetMe,style:d.dontSetMe,transform:d.dontSetMe}),E(G,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1}),Ni}var Gg;function wx(){return Gg||(Gg=1,(function(l){Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"DraggableCore",{enumerable:!0,get:function(){return v.default}}),l.default=void 0;var u=T(ki()),s=E(Gm()),o=E(Rr()),f=E(xx),d=Wc(),p=Xm(),m=kr(),v=E(Ex()),g=E(Vm());function E(z){return z&&z.__esModule?z:{default:z}}function y(z){if(typeof WeakMap!="function")return null;var w=new WeakMap,B=new WeakMap;return(y=function(q){return q?B:w})(z)}function T(z,w){if(z&&z.__esModule)return z;if(z===null||typeof z!="object"&&typeof z!="function")return{default:z};var B=y(w);if(B&&B.has(z))return B.get(z);var q={},X=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var b in z)if(b!=="default"&&Object.prototype.hasOwnProperty.call(z,b)){var H=X?Object.getOwnPropertyDescriptor(z,b):null;H&&(H.get||H.set)?Object.defineProperty(q,b,H):q[b]=z[b]}return q.default=z,B&&B.set(z,q),q}function C(){return C=Object.assign?Object.assign.bind():function(z){for(var w=1;w<arguments.length;w++){var B=arguments[w];for(var q in B)Object.prototype.hasOwnProperty.call(B,q)&&(z[q]=B[q])}return z},C.apply(this,arguments)}function $(z,w,B){return w=G(w),w in z?Object.defineProperty(z,w,{value:B,enumerable:!0,configurable:!0,writable:!0}):z[w]=B,z}function G(z){var w=U(z,"string");return typeof w=="symbol"?w:String(w)}function U(z,w){if(typeof z!="object"||z===null)return z;var B=z[Symbol.toPrimitive];if(B!==void 0){var q=B.call(z,w);if(typeof q!="object")return q;throw new TypeError("@@toPrimitive must return a primitive value.")}return(w==="string"?String:Number)(z)}class _ extends u.Component{static getDerivedStateFromProps(w,B){let{position:q}=w,{prevPropsPosition:X}=B;return q&&(!X||q.x!==X.x||q.y!==X.y)?((0,g.default)("Draggable: getDerivedStateFromProps %j",{position:q,prevPropsPosition:X}),{x:q.x,y:q.y,prevPropsPosition:{...q}}):null}constructor(w){super(w),$(this,"onDragStart",(B,q)=>{if((0,g.default)("Draggable: onDragStart: %j",q),this.props.onStart(B,(0,p.createDraggableData)(this,q))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),$(this,"onDrag",(B,q)=>{if(!this.state.dragging)return!1;(0,g.default)("Draggable: onDrag: %j",q);const X=(0,p.createDraggableData)(this,q),b={x:X.x,y:X.y,slackX:0,slackY:0};if(this.props.bounds){const{x:I,y:st}=b;b.x+=this.state.slackX,b.y+=this.state.slackY;const[ht,et]=(0,p.getBoundPosition)(this,b.x,b.y);b.x=ht,b.y=et,b.slackX=this.state.slackX+(I-b.x),b.slackY=this.state.slackY+(st-b.y),X.x=b.x,X.y=b.y,X.deltaX=b.x-this.state.x,X.deltaY=b.y-this.state.y}if(this.props.onDrag(B,X)===!1)return!1;this.setState(b)}),$(this,"onDragStop",(B,q)=>{if(!this.state.dragging||this.props.onStop(B,(0,p.createDraggableData)(this,q))===!1)return!1;(0,g.default)("Draggable: onDragStop: %j",q);const b={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:I,y:st}=this.props.position;b.x=I,b.y=st}this.setState(b)}),this.state={dragging:!1,dragged:!1,x:w.position?w.position.x:w.defaultPosition.x,y:w.position?w.position.y:w.defaultPosition.y,prevPropsPosition:{...w.position},slackX:0,slackY:0,isElementSVG:!1},w.position&&!(w.onDrag||w.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var w,B;return(w=(B=this.props)===null||B===void 0||(B=B.nodeRef)===null||B===void 0?void 0:B.current)!==null&&w!==void 0?w:o.default.findDOMNode(this)}render(){const{axis:w,bounds:B,children:q,defaultPosition:X,defaultClassName:b,defaultClassNameDragging:H,defaultClassNameDragged:I,position:st,positionOffset:ht,scale:et,...mt}=this.props;let xt={},yt=null;const P=!!!st||this.state.dragging,tt=st||X,ot={x:(0,p.canDragX)(this)&&P?this.state.x:tt.x,y:(0,p.canDragY)(this)&&P?this.state.y:tt.y};this.state.isElementSVG?yt=(0,d.createSVGTransform)(ot,ht):xt=(0,d.createCSSTransform)(ot,ht);const ft=(0,f.default)(q.props.className||"",b,{[H]:this.state.dragging,[I]:this.state.dragged});return u.createElement(v.default,C({},mt,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),u.cloneElement(u.Children.only(q),{className:ft,style:{...q.props.style,...xt},transform:yt}))}}l.default=_,$(_,"displayName","Draggable"),$(_,"propTypes",{...v.default.propTypes,axis:s.default.oneOf(["both","x","y","none"]),bounds:s.default.oneOfType([s.default.shape({left:s.default.number,right:s.default.number,top:s.default.number,bottom:s.default.number}),s.default.string,s.default.oneOf([!1])]),defaultClassName:s.default.string,defaultClassNameDragging:s.default.string,defaultClassNameDragged:s.default.string,defaultPosition:s.default.shape({x:s.default.number,y:s.default.number}),positionOffset:s.default.shape({x:s.default.oneOfType([s.default.number,s.default.string]),y:s.default.oneOfType([s.default.number,s.default.string])}),position:s.default.shape({x:s.default.number,y:s.default.number}),className:m.dontSetMe,style:m.dontSetMe,transform:m.dontSetMe}),$(_,"defaultProps",{...v.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(dc)),dc}var Qg;function zx(){if(Qg)return Mi.exports;Qg=1;const{default:l,DraggableCore:u}=wx();return Mi.exports=l,Mi.exports.default=l,Mi.exports.DraggableCore=u,Mi.exports}var Tx=zx();const Dx=Cc(Tx);var le=function(){return le=Object.assign||function(l){for(var u,s=1,o=arguments.length;s<o;s++){u=arguments[s];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(l[f]=u[f])}return l},le.apply(this,arguments)},Xg={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},Vg={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},dr={width:"20px",height:"20px",position:"absolute",zIndex:1},_x={top:le(le({},Xg),{top:"-5px"}),right:le(le({},Vg),{left:void 0,right:"-5px"}),bottom:le(le({},Xg),{top:void 0,bottom:"-5px"}),left:le(le({},Vg),{left:"-5px"}),topRight:le(le({},dr),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:le(le({},dr),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:le(le({},dr),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:le(le({},dr),{left:"-10px",top:"-10px",cursor:"nw-resize"})},Ox=k.memo(function(l){var u=l.onResizeStart,s=l.direction,o=l.children,f=l.replaceStyles,d=l.className,p=k.useCallback(function(g){u(g,s)},[u,s]),m=k.useCallback(function(g){u(g,s)},[u,s]),v=k.useMemo(function(){return le(le({position:"absolute",userSelect:"none"},_x[s]),f??{})},[f,s]);return lt.jsx("div",{className:d||void 0,style:v,onMouseDown:p,onTouchStart:m,children:o})}),Rx=(function(){var l=function(u,s){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,f){o.__proto__=f}||function(o,f){for(var d in f)Object.prototype.hasOwnProperty.call(f,d)&&(o[d]=f[d])},l(u,s)};return function(u,s){if(typeof s!="function"&&s!==null)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");l(u,s);function o(){this.constructor=u}u.prototype=s===null?Object.create(s):(o.prototype=s.prototype,new o)}})(),ca=function(){return ca=Object.assign||function(l){for(var u,s=1,o=arguments.length;s<o;s++){u=arguments[s];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(l[f]=u[f])}return l},ca.apply(this,arguments)},Cx={width:"auto",height:"auto"},hr=function(l,u,s){return Math.max(Math.min(l,s),u)},Zg=function(l,u,s){var o=Math.round(l/u);return o*u+s*(o-1)},Ol=function(l,u){return new RegExp(l,"i").test(u)},pr=function(l){return!!(l.touches&&l.touches.length)},Mx=function(l){return!!((l.clientX||l.clientX===0)&&(l.clientY||l.clientY===0))},Kg=function(l,u,s){s===void 0&&(s=0);var o=u.reduce(function(d,p,m){return Math.abs(p-l)<Math.abs(u[d]-l)?m:d},0),f=Math.abs(u[o]-l);return s===0||f<s?u[o]:l},mc=function(l){return l=l.toString(),l==="auto"||l.endsWith("px")||l.endsWith("%")||l.endsWith("vh")||l.endsWith("vw")||l.endsWith("vmax")||l.endsWith("vmin")?l:"".concat(l,"px")},gr=function(l,u,s,o){if(l&&typeof l=="string"){if(l.endsWith("px"))return Number(l.replace("px",""));if(l.endsWith("%")){var f=Number(l.replace("%",""))/100;return u*f}if(l.endsWith("vw")){var f=Number(l.replace("vw",""))/100;return s*f}if(l.endsWith("vh")){var f=Number(l.replace("vh",""))/100;return o*f}}return l},Nx=function(l,u,s,o,f,d,p){return o=gr(o,l.width,u,s),f=gr(f,l.height,u,s),d=gr(d,l.width,u,s),p=gr(p,l.height,u,s),{maxWidth:typeof o>"u"?void 0:Number(o),maxHeight:typeof f>"u"?void 0:Number(f),minWidth:typeof d>"u"?void 0:Number(d),minHeight:typeof p>"u"?void 0:Number(p)}},Bx=function(l){return Array.isArray(l)?l:[l,l]},Hx=["as","ref","style","className","grid","gridGap","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],Wg="__resizable_base__",Ux=(function(l){Rx(u,l);function u(s){var o,f,d,p,m=l.call(this,s)||this;return m.ratio=1,m.resizable=null,m.parentLeft=0,m.parentTop=0,m.resizableLeft=0,m.resizableRight=0,m.resizableTop=0,m.resizableBottom=0,m.targetLeft=0,m.targetTop=0,m.delta={width:0,height:0},m.appendBase=function(){if(!m.resizable||!m.window)return null;var v=m.parentNode;if(!v)return null;var g=m.window.document.createElement("div");return g.style.width="100%",g.style.height="100%",g.style.position="absolute",g.style.transform="scale(0, 0)",g.style.left="0",g.style.flex="0 0 100%",g.classList?g.classList.add(Wg):g.className+=Wg,v.appendChild(g),g},m.removeBase=function(v){var g=m.parentNode;g&&g.removeChild(v)},m.state={isResizing:!1,width:(f=(o=m.propsSize)===null||o===void 0?void 0:o.width)!==null&&f!==void 0?f:"auto",height:(p=(d=m.propsSize)===null||d===void 0?void 0:d.height)!==null&&p!==void 0?p:"auto",direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},m.onResizeStart=m.onResizeStart.bind(m),m.onMouseMove=m.onMouseMove.bind(m),m.onMouseUp=m.onMouseUp.bind(m),m}return Object.defineProperty(u.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"window",{get:function(){return!this.resizable||!this.resizable.ownerDocument?null:this.resizable.ownerDocument.defaultView},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||Cx},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"size",{get:function(){var s=0,o=0;if(this.resizable&&this.window){var f=this.resizable.offsetWidth,d=this.resizable.offsetHeight,p=this.resizable.style.position;p!=="relative"&&(this.resizable.style.position="relative"),s=this.resizable.style.width!=="auto"?this.resizable.offsetWidth:f,o=this.resizable.style.height!=="auto"?this.resizable.offsetHeight:d,this.resizable.style.position=p}return{width:s,height:o}},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"sizeStyle",{get:function(){var s=this,o=this.props.size,f=function(m){var v;if(typeof s.state[m]>"u"||s.state[m]==="auto")return"auto";if(s.propsSize&&s.propsSize[m]&&(!((v=s.propsSize[m])===null||v===void 0)&&v.toString().endsWith("%"))){if(s.state[m].toString().endsWith("%"))return s.state[m].toString();var g=s.getParentSize(),E=Number(s.state[m].toString().replace("px","")),y=E/g[m]*100;return"".concat(y,"%")}return mc(s.state[m])},d=o&&typeof o.width<"u"&&!this.state.isResizing?mc(o.width):f("width"),p=o&&typeof o.height<"u"&&!this.state.isResizing?mc(o.height):f("height");return{width:d,height:p}},enumerable:!1,configurable:!0}),u.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var s=this.appendBase();if(!s)return{width:0,height:0};var o=!1,f=this.parentNode.style.flexWrap;f!=="wrap"&&(o=!0,this.parentNode.style.flexWrap="wrap"),s.style.position="relative",s.style.minWidth="100%",s.style.minHeight="100%";var d={width:s.offsetWidth,height:s.offsetHeight};return o&&(this.parentNode.style.flexWrap=f),this.removeBase(s),d},u.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},u.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},u.prototype.componentDidMount=function(){if(!(!this.resizable||!this.window)){var s=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:s.flexBasis!=="auto"?s.flexBasis:void 0})}},u.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},u.prototype.createSizeForCssProperty=function(s,o){var f=this.propsSize&&this.propsSize[o];return this.state[o]==="auto"&&this.state.original[o]===s&&(typeof f>"u"||f==="auto")?"auto":s},u.prototype.calculateNewMaxFromBoundary=function(s,o){var f=this.props.boundsByDirection,d=this.state.direction,p=f&&Ol("left",d),m=f&&Ol("top",d),v,g;if(this.props.bounds==="parent"){var E=this.parentNode;E&&(v=p?this.resizableRight-this.parentLeft:E.offsetWidth+(this.parentLeft-this.resizableLeft),g=m?this.resizableBottom-this.parentTop:E.offsetHeight+(this.parentTop-this.resizableTop))}else this.props.bounds==="window"?this.window&&(v=p?this.resizableRight:this.window.innerWidth-this.resizableLeft,g=m?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(v=p?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),g=m?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return v&&Number.isFinite(v)&&(s=s&&s<v?s:v),g&&Number.isFinite(g)&&(o=o&&o<g?o:g),{maxWidth:s,maxHeight:o}},u.prototype.calculateNewSizeFromDirection=function(s,o){var f=this.props.scale||1,d=Bx(this.props.resizeRatio||1),p=d[0],m=d[1],v=this.state,g=v.direction,E=v.original,y=this.props,T=y.lockAspectRatio,C=y.lockAspectRatioExtraHeight,$=y.lockAspectRatioExtraWidth,G=E.width,U=E.height,_=C||0,z=$||0;return Ol("right",g)&&(G=E.width+(s-E.x)*p/f,T&&(U=(G-z)/this.ratio+_)),Ol("left",g)&&(G=E.width-(s-E.x)*p/f,T&&(U=(G-z)/this.ratio+_)),Ol("bottom",g)&&(U=E.height+(o-E.y)*m/f,T&&(G=(U-_)*this.ratio+z)),Ol("top",g)&&(U=E.height-(o-E.y)*m/f,T&&(G=(U-_)*this.ratio+z)),{newWidth:G,newHeight:U}},u.prototype.calculateNewSizeFromAspectRatio=function(s,o,f,d){var p=this.props,m=p.lockAspectRatio,v=p.lockAspectRatioExtraHeight,g=p.lockAspectRatioExtraWidth,E=typeof d.width>"u"?10:d.width,y=typeof f.width>"u"||f.width<0?s:f.width,T=typeof d.height>"u"?10:d.height,C=typeof f.height>"u"||f.height<0?o:f.height,$=v||0,G=g||0;if(m){var U=(T-$)*this.ratio+G,_=(C-$)*this.ratio+G,z=(E-G)/this.ratio+$,w=(y-G)/this.ratio+$,B=Math.max(E,U),q=Math.min(y,_),X=Math.max(T,z),b=Math.min(C,w);s=hr(s,B,q),o=hr(o,X,b)}else s=hr(s,E,y),o=hr(o,T,C);return{newWidth:s,newHeight:o}},u.prototype.setBoundingClientRect=function(){var s=1/(this.props.scale||1);if(this.props.bounds==="parent"){var o=this.parentNode;if(o){var f=o.getBoundingClientRect();this.parentLeft=f.left*s,this.parentTop=f.top*s}}if(this.props.bounds&&typeof this.props.bounds!="string"){var d=this.props.bounds.getBoundingClientRect();this.targetLeft=d.left*s,this.targetTop=d.top*s}if(this.resizable){var p=this.resizable.getBoundingClientRect(),m=p.left,v=p.top,g=p.right,E=p.bottom;this.resizableLeft=m*s,this.resizableRight=g*s,this.resizableTop=v*s,this.resizableBottom=E*s}},u.prototype.onResizeStart=function(s,o){if(!(!this.resizable||!this.window)){var f=0,d=0;if(s.nativeEvent&&Mx(s.nativeEvent)?(f=s.nativeEvent.clientX,d=s.nativeEvent.clientY):s.nativeEvent&&pr(s.nativeEvent)&&(f=s.nativeEvent.touches[0].clientX,d=s.nativeEvent.touches[0].clientY),this.props.onResizeStart&&this.resizable){var p=this.props.onResizeStart(s,o,this.resizable);if(p===!1)return}this.props.size&&(typeof this.props.size.height<"u"&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),typeof this.props.size.width<"u"&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio=typeof this.props.lockAspectRatio=="number"?this.props.lockAspectRatio:this.size.width/this.size.height;var m,v=this.window.getComputedStyle(this.resizable);if(v.flexBasis!=="auto"){var g=this.parentNode;if(g){var E=this.window.getComputedStyle(g).flexDirection;this.flexDir=E.startsWith("row")?"row":"column",m=v.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var y={original:{x:f,y:d,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:ca(ca({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(s.target).cursor||"auto"}),direction:o,flexBasis:m};this.setState(y)}},u.prototype.onMouseMove=function(s){var o=this;if(!(!this.state.isResizing||!this.resizable||!this.window)){if(this.window.TouchEvent&&pr(s))try{s.preventDefault(),s.stopPropagation()}catch{}var f=this.props,d=f.maxWidth,p=f.maxHeight,m=f.minWidth,v=f.minHeight,g=pr(s)?s.touches[0].clientX:s.clientX,E=pr(s)?s.touches[0].clientY:s.clientY,y=this.state,T=y.direction,C=y.original,$=y.width,G=y.height,U=this.getParentSize(),_=Nx(U,this.window.innerWidth,this.window.innerHeight,d,p,m,v);d=_.maxWidth,p=_.maxHeight,m=_.minWidth,v=_.minHeight;var z=this.calculateNewSizeFromDirection(g,E),w=z.newHeight,B=z.newWidth,q=this.calculateNewMaxFromBoundary(d,p);this.props.snap&&this.props.snap.x&&(B=Kg(B,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(w=Kg(w,this.props.snap.y,this.props.snapGap));var X=this.calculateNewSizeFromAspectRatio(B,w,{width:q.maxWidth,height:q.maxHeight},{width:m,height:v});if(B=X.newWidth,w=X.newHeight,this.props.grid){var b=Zg(B,this.props.grid[0],this.props.gridGap?this.props.gridGap[0]:0),H=Zg(w,this.props.grid[1],this.props.gridGap?this.props.gridGap[1]:0),I=this.props.snapGap||0,st=I===0||Math.abs(b-B)<=I?b:B,ht=I===0||Math.abs(H-w)<=I?H:w;B=st,w=ht}var et={width:B-C.width,height:w-C.height};if(this.delta=et,$&&typeof $=="string"){if($.endsWith("%")){var mt=B/U.width*100;B="".concat(mt,"%")}else if($.endsWith("vw")){var xt=B/this.window.innerWidth*100;B="".concat(xt,"vw")}else if($.endsWith("vh")){var yt=B/this.window.innerHeight*100;B="".concat(yt,"vh")}}if(G&&typeof G=="string"){if(G.endsWith("%")){var mt=w/U.height*100;w="".concat(mt,"%")}else if(G.endsWith("vw")){var xt=w/this.window.innerWidth*100;w="".concat(xt,"vw")}else if(G.endsWith("vh")){var yt=w/this.window.innerHeight*100;w="".concat(yt,"vh")}}var N={width:this.createSizeForCssProperty(B,"width"),height:this.createSizeForCssProperty(w,"height")};this.flexDir==="row"?N.flexBasis=N.width:this.flexDir==="column"&&(N.flexBasis=N.height);var P=this.state.width!==N.width,tt=this.state.height!==N.height,ot=this.state.flexBasis!==N.flexBasis,ft=P||tt||ot;ft&&Kc.flushSync(function(){o.setState(N)}),this.props.onResize&&ft&&this.props.onResize(s,T,this.resizable,et)}},u.prototype.onMouseUp=function(s){var o,f,d=this.state,p=d.isResizing,m=d.direction;d.original,!(!p||!this.resizable)&&(this.props.onResizeStop&&this.props.onResizeStop(s,m,this.resizable,this.delta),this.props.size&&this.setState({width:(o=this.props.size.width)!==null&&o!==void 0?o:"auto",height:(f=this.props.size.height)!==null&&f!==void 0?f:"auto"}),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:ca(ca({},this.state.backgroundStyle),{cursor:"auto"})}))},u.prototype.updateSize=function(s){var o,f;this.setState({width:(o=s.width)!==null&&o!==void 0?o:"auto",height:(f=s.height)!==null&&f!==void 0?f:"auto"})},u.prototype.renderResizer=function(){var s=this,o=this.props,f=o.enable,d=o.handleStyles,p=o.handleClasses,m=o.handleWrapperStyle,v=o.handleWrapperClass,g=o.handleComponent;if(!f)return null;var E=Object.keys(f).map(function(y){return f[y]!==!1?lt.jsx(Ox,{direction:y,onResizeStart:s.onResizeStart,replaceStyles:d&&d[y],className:p&&p[y],children:g&&g[y]?g[y]:null},y):null});return lt.jsx("div",{className:v,style:m,children:E})},u.prototype.render=function(){var s=this,o=Object.keys(this.props).reduce(function(p,m){return Hx.indexOf(m)!==-1||(p[m]=s.props[m]),p},{}),f=ca(ca(ca({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(f.flexBasis=this.state.flexBasis);var d=this.props.as||"div";return lt.jsxs(d,ca({style:f,className:this.props.className},o,{ref:function(p){p&&(s.resizable=p)},children:[this.state.isResizing&&lt.jsx("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer()]}))},u.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],gridGap:[0,0],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},u})(k.PureComponent);var Rc=function(l,u){return Rc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,o){s.__proto__=o}||function(s,o){for(var f in o)o.hasOwnProperty(f)&&(s[f]=o[f])},Rc(l,u)};function jx(l,u){Rc(l,u);function s(){this.constructor=l}l.prototype=u===null?Object.create(u):(s.prototype=u.prototype,new s)}var re=function(){return re=Object.assign||function(u){for(var s,o=1,f=arguments.length;o<f;o++){s=arguments[o];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(u[d]=s[d])}return u},re.apply(this,arguments)};function $x(l,u){var s={};for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&u.indexOf(o)<0&&(s[o]=l[o]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,o=Object.getOwnPropertySymbols(l);f<o.length;f++)u.indexOf(o[f])<0&&Object.prototype.propertyIsEnumerable.call(l,o[f])&&(s[o[f]]=l[o[f]]);return s}var Lx={width:"auto",height:"auto",display:"inline-block",position:"absolute",top:0,left:0},kx=function(l){return{bottom:l,bottomLeft:l,bottomRight:l,left:l,right:l,top:l,topLeft:l,topRight:l}},qx=(function(l){jx(u,l);function u(s){var o=l.call(this,s)||this;return o.resizingPosition={x:0,y:0},o.offsetFromParent={left:0,top:0},o.resizableElement={current:null},o.originalPosition={x:0,y:0},o.state={resizing:!1,bounds:{top:0,right:0,bottom:0,left:0},maxWidth:s.maxWidth,maxHeight:s.maxHeight},o.onResizeStart=o.onResizeStart.bind(o),o.onResize=o.onResize.bind(o),o.onResizeStop=o.onResizeStop.bind(o),o.onDragStart=o.onDragStart.bind(o),o.onDrag=o.onDrag.bind(o),o.onDragStop=o.onDragStop.bind(o),o.getMaxSizesFromProps=o.getMaxSizesFromProps.bind(o),o}return u.prototype.componentDidMount=function(){this.updateOffsetFromParent();var s=this.offsetFromParent,o=s.left,f=s.top,d=this.getDraggablePosition(),p=d.x,m=d.y;this.draggable.setState({x:p-o,y:m-f}),this.forceUpdate()},u.prototype.getDraggablePosition=function(){var s=this.draggable.state,o=s.x,f=s.y;return{x:o,y:f}},u.prototype.getParent=function(){return this.resizable&&this.resizable.parentNode},u.prototype.getParentSize=function(){return this.resizable.getParentSize()},u.prototype.getMaxSizesFromProps=function(){var s=typeof this.props.maxWidth>"u"?Number.MAX_SAFE_INTEGER:this.props.maxWidth,o=typeof this.props.maxHeight>"u"?Number.MAX_SAFE_INTEGER:this.props.maxHeight;return{maxWidth:s,maxHeight:o}},u.prototype.getSelfElement=function(){return this.resizable&&this.resizable.resizable},u.prototype.getOffsetHeight=function(s){var o=this.props.scale;switch(this.props.bounds){case"window":return window.innerHeight/o;case"body":return document.body.offsetHeight/o;default:return s.offsetHeight}},u.prototype.getOffsetWidth=function(s){var o=this.props.scale;switch(this.props.bounds){case"window":return window.innerWidth/o;case"body":return document.body.offsetWidth/o;default:return s.offsetWidth}},u.prototype.onDragStart=function(s,o){this.props.onDragStart&&this.props.onDragStart(s,o);var f=this.getDraggablePosition();if(this.originalPosition=f,!!this.props.bounds){var d=this.getParent(),p=this.props.scale,m;if(this.props.bounds==="parent")m=d;else if(this.props.bounds==="body"){var v=d.getBoundingClientRect(),g=v.left,E=v.top,y=document.body.getBoundingClientRect(),T=-(g-d.offsetLeft*p-y.left)/p,C=-(E-d.offsetTop*p-y.top)/p,$=(document.body.offsetWidth-this.resizable.size.width*p)/p+T,G=(document.body.offsetHeight-this.resizable.size.height*p)/p+C;return this.setState({bounds:{top:C,right:$,bottom:G,left:T}})}else if(this.props.bounds==="window"){if(!this.resizable)return;var U=d.getBoundingClientRect(),_=U.left,z=U.top,w=-(_-d.offsetLeft*p)/p,B=-(z-d.offsetTop*p)/p,$=(window.innerWidth-this.resizable.size.width*p)/p+w,G=(window.innerHeight-this.resizable.size.height*p)/p+B;return this.setState({bounds:{top:B,right:$,bottom:G,left:w}})}else typeof this.props.bounds=="string"?m=document.querySelector(this.props.bounds):this.props.bounds instanceof HTMLElement&&(m=this.props.bounds);if(!(!(m instanceof HTMLElement)||!(d instanceof HTMLElement))){var q=m.getBoundingClientRect(),X=q.left,b=q.top,H=d.getBoundingClientRect(),I=H.left,st=H.top,ht=(X-I)/p,et=b-st;if(this.resizable){this.updateOffsetFromParent();var mt=this.offsetFromParent;this.setState({bounds:{top:et-mt.top,right:ht+(m.offsetWidth-this.resizable.size.width)-mt.left/p,bottom:et+(m.offsetHeight-this.resizable.size.height)-mt.top,left:ht-mt.left/p}})}}}},u.prototype.onDrag=function(s,o){if(this.props.onDrag){var f=this.offsetFromParent,d=f.left,p=f.top;if(!this.props.dragAxis||this.props.dragAxis==="both")return this.props.onDrag(s,re(re({},o),{x:o.x+d,y:o.y+p}));if(this.props.dragAxis==="x")return this.props.onDrag(s,re(re({},o),{x:o.x+d,y:this.originalPosition.y+p,deltaY:0}));if(this.props.dragAxis==="y")return this.props.onDrag(s,re(re({},o),{x:this.originalPosition.x+d,y:o.y+p,deltaX:0}))}},u.prototype.onDragStop=function(s,o){if(this.props.onDragStop){var f=this.offsetFromParent,d=f.left,p=f.top;if(!this.props.dragAxis||this.props.dragAxis==="both")return this.props.onDragStop(s,re(re({},o),{x:o.x+d,y:o.y+p}));if(this.props.dragAxis==="x")return this.props.onDragStop(s,re(re({},o),{x:o.x+d,y:this.originalPosition.y+p,deltaY:0}));if(this.props.dragAxis==="y")return this.props.onDragStop(s,re(re({},o),{x:this.originalPosition.x+d,y:o.y+p,deltaX:0}))}},u.prototype.onResizeStart=function(s,o,f){s.stopPropagation(),this.setState({resizing:!0});var d=this.props.scale,p=this.offsetFromParent,m=this.getDraggablePosition();if(this.resizingPosition={x:m.x+p.left,y:m.y+p.top},this.originalPosition=m,this.props.bounds){var v=this.getParent(),g=void 0;this.props.bounds==="parent"?g=v:this.props.bounds==="body"?g=document.body:this.props.bounds==="window"?g=window:typeof this.props.bounds=="string"?g=document.querySelector(this.props.bounds):this.props.bounds instanceof HTMLElement&&(g=this.props.bounds);var E=this.getSelfElement();if(E instanceof Element&&(g instanceof HTMLElement||g===window)&&v instanceof HTMLElement){var y=this.getMaxSizesFromProps(),T=y.maxWidth,C=y.maxHeight,$=this.getParentSize();if(T&&typeof T=="string")if(T.endsWith("%")){var G=Number(T.replace("%",""))/100;T=$.width*G}else T.endsWith("px")&&(T=Number(T.replace("px","")));if(C&&typeof C=="string")if(C.endsWith("%")){var G=Number(C.replace("%",""))/100;C=$.height*G}else C.endsWith("px")&&(C=Number(C.replace("px","")));var U=E.getBoundingClientRect(),_=U.left,z=U.top,w=this.props.bounds==="window"?{left:0,top:0}:g.getBoundingClientRect(),B=w.left,q=w.top,X=this.getOffsetWidth(g),b=this.getOffsetHeight(g),H=o.toLowerCase().endsWith("left"),I=o.toLowerCase().endsWith("right"),st=o.startsWith("top"),ht=o.startsWith("bottom");if((H||st)&&this.resizable){var et=(_-B)/d+this.resizable.size.width;this.setState({maxWidth:et>Number(T)?T:et})}if(I||this.props.lockAspectRatio&&!H&&!st){var et=X+(B-_)/d;this.setState({maxWidth:et>Number(T)?T:et})}if((st||H)&&this.resizable){var et=(z-q)/d+this.resizable.size.height;this.setState({maxHeight:et>Number(C)?C:et})}if(ht||this.props.lockAspectRatio&&!st&&!H){var et=b+(q-z)/d;this.setState({maxHeight:et>Number(C)?C:et})}}}else this.setState({maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight});this.props.onResizeStart&&this.props.onResizeStart(s,o,f)},u.prototype.onResize=function(s,o,f,d){var p=this,m={x:this.originalPosition.x,y:this.originalPosition.y},v=-d.width,g=-d.height,E=["top","left","topLeft","bottomLeft","topRight"];E.includes(o)&&(o==="bottomLeft"?m.x+=v:(o==="topRight"||(m.x+=v),m.y+=g));var y=this.draggable.state;(m.x!==y.x||m.y!==y.y)&&Kc.flushSync(function(){p.draggable.setState(m)}),this.updateOffsetFromParent();var T=this.offsetFromParent,C=this.getDraggablePosition().x+T.left,$=this.getDraggablePosition().y+T.top;this.resizingPosition={x:C,y:$},this.props.onResize&&this.props.onResize(s,o,f,d,{x:C,y:$})},u.prototype.onResizeStop=function(s,o,f,d){this.setState({resizing:!1});var p=this.getMaxSizesFromProps(),m=p.maxWidth,v=p.maxHeight;this.setState({maxWidth:m,maxHeight:v}),this.props.onResizeStop&&this.props.onResizeStop(s,o,f,d,this.resizingPosition)},u.prototype.updateSize=function(s){this.resizable&&this.resizable.updateSize({width:s.width,height:s.height})},u.prototype.updatePosition=function(s){this.draggable.setState(s)},u.prototype.updateOffsetFromParent=function(){var s=this.props.scale,o=this.getParent(),f=this.getSelfElement();if(!o||f===null)return{top:0,left:0};var d=o.getBoundingClientRect(),p=d.left,m=d.top,v=f.getBoundingClientRect(),g=this.getDraggablePosition(),E=o.scrollLeft,y=o.scrollTop;this.offsetFromParent={left:v.left-p+E-g.x*s,top:v.top-m+y-g.y*s}},u.prototype.render=function(){var s=this,o=this.props,f=o.disableDragging,d=o.style,p=o.dragHandleClassName,m=o.position,v=o.onMouseDown,g=o.onMouseUp,E=o.dragAxis,y=o.dragGrid,T=o.bounds,C=o.enableUserSelectHack,$=o.cancel,G=o.children;o.onResizeStart,o.onResize,o.onResizeStop,o.onDragStart,o.onDrag,o.onDragStop;var U=o.resizeHandleStyles,_=o.resizeHandleClasses,z=o.resizeHandleComponent,w=o.enableResizing,B=o.resizeGrid,q=o.resizeHandleWrapperClass,X=o.resizeHandleWrapperStyle,b=o.scale,H=o.allowAnyClick,I=o.dragPositionOffset,st=$x(o,["disableDragging","style","dragHandleClassName","position","onMouseDown","onMouseUp","dragAxis","dragGrid","bounds","enableUserSelectHack","cancel","children","onResizeStart","onResize","onResizeStop","onDragStart","onDrag","onDragStop","resizeHandleStyles","resizeHandleClasses","resizeHandleComponent","enableResizing","resizeGrid","resizeHandleWrapperClass","resizeHandleWrapperStyle","scale","allowAnyClick","dragPositionOffset"]),ht=this.props.default?re({},this.props.default):void 0;delete st.default;var et=f||p?{cursor:"auto"}:{cursor:"move"},mt=re(re(re({},Lx),et),d),xt=this.offsetFromParent,yt=xt.left,N=xt.top,P;m&&(P={x:m.x-yt,y:m.y-N});var tt=this.state.resizing?void 0:P,ot=this.state.resizing?"both":E;return k.createElement(Dx,{ref:function(ft){ft&&(s.draggable=ft)},handle:p?".".concat(p):void 0,defaultPosition:ht,onMouseDown:v,onMouseUp:g,onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop,axis:ot,disabled:f,grid:y,bounds:T?this.state.bounds:void 0,position:tt,enableUserSelectHack:C,cancel:$,scale:b,allowAnyClick:H,nodeRef:this.resizableElement,positionOffset:I},k.createElement(Ux,re({},st,{ref:function(ft){ft&&(s.resizable=ft,s.resizableElement.current=ft.resizable)},defaultSize:ht,size:this.props.size,enable:typeof w=="boolean"?kx(w):w,onResizeStart:this.onResizeStart,onResize:this.onResize,onResizeStop:this.onResizeStop,style:mt,minWidth:this.props.minWidth,minHeight:this.props.minHeight,maxWidth:this.state.resizing?this.state.maxWidth:this.props.maxWidth,maxHeight:this.state.resizing?this.state.maxHeight:this.props.maxHeight,grid:B,handleWrapperClass:q,handleWrapperStyle:X,lockAspectRatio:this.props.lockAspectRatio,lockAspectRatioExtraWidth:this.props.lockAspectRatioExtraWidth,lockAspectRatioExtraHeight:this.props.lockAspectRatioExtraHeight,handleStyles:U,handleClasses:_,handleComponent:z,scale:this.props.scale}),G))},u.defaultProps={maxWidth:Number.MAX_SAFE_INTEGER,maxHeight:Number.MAX_SAFE_INTEGER,scale:1,onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},onDragStart:function(){},onDrag:function(){},onDragStop:function(){}},u})(k.PureComponent);const sn="https://win98icons.alexmeub.com/icons/png",Jg={computer:`${sn}/computer_explorer-4.png`,recycle_bin:`${sn}/recycle_bin_full-4.png`,recycle_full:`${sn}/recycle_bin_full-4.png`,folder:`${sn}/directory_closed-4.png`,folder_open:`${sn}/directory_closed-4.png`,notepad:`${sn}/notepad-5.png`,disk_drive:`${sn}/hard_disk_drive-3.png`,unknown:`${sn}/file_lines-0.png`},Or=l=>Jg[l]||Jg.unknown,Yx=W.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
`,Gx=W.div`
  display: flex;
  gap: 12px;
  padding: 4px 8px;
  font-size: 14px;
  border-bottom: 1px solid #808080;
  margin-bottom: 2px;
`,mr=W.span`
  cursor: pointer;
  text-decoration: underline; /* The classic mnemonic style */
  &:hover {
    color: white;
    background: #000080;
  }
`,Qx=({id:l,title:u,icon:s,children:o})=>{const{windows:f,closeWindow:d,focusWindow:p,minimizeWindow:m,toggleMaximize:v,updateWindowPos:g,updateWindowSize:E}=Lr(),y=f.find(G=>G.id===l);if(!y)return null;if(y.isMinimized)return lt.jsx("div",{style:{display:"none"}});const T=y.isMaximized,C=T?{x:0,y:0}:{x:y.x,y:y.y},$=T?{width:"100%",height:"calc(100vh - 40px)"}:{width:y.width,height:y.height};return lt.jsx(qx,{size:$,position:C,disableDragging:T,enableResizing:!T,onDragStop:(G,U)=>{T||g(l,U.x,U.y)},onResizeStop:(G,U,_,z,w)=>{T||(g(l,w.x,w.y),E(l,_.offsetWidth,_.offsetHeight))},onMouseDown:()=>p(l),style:{zIndex:y.zIndex},minWidth:250,minHeight:150,bounds:"parent",dragHandleClassName:"window-header",children:lt.jsxs(Zc,{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column"},className:"window",children:[lt.jsxs(Vc,{className:"window-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"28px",padding:"0 4px"},children:[lt.jsxs(Yx,{children:[lt.jsx("img",{src:Or(s||"unknown"),alt:"",style:{width:"16px",height:"16px"}}),u]}),lt.jsxs("div",{style:{display:"flex",gap:"2px"},children:[lt.jsx(Ba,{onClick:G=>{G.stopPropagation(),m(l)},size:"sm",square:!0,style:{width:"20px",height:"20px"},children:lt.jsx("span",{style:{fontWeight:"bold",transform:"translateY(-4px)"},children:"_"})}),lt.jsx(Ba,{onClick:()=>v(l),size:"sm",square:!0,style:{width:"20px",height:"20px"},children:lt.jsx("span",{style:{fontWeight:"bold"},children:T?"❐":"□"})}),lt.jsx(Ba,{onClick:()=>d(l),size:"sm",square:!0,style:{marginLeft:"2px",width:"20px",height:"20px"},children:lt.jsx("span",{style:{fontWeight:"bold",transform:"translateY(-1px)"},children:"×"})})]})]}),lt.jsxs(Gx,{style:{height:"24px",padding:"0 4px"},children:[lt.jsxs(mr,{children:[lt.jsx("u",{children:"F"}),"ile"]}),lt.jsxs(mr,{children:[lt.jsx("u",{children:"E"}),"dit"]}),lt.jsxs(mr,{children:[lt.jsx("u",{children:"V"}),"iew"]}),lt.jsxs(mr,{children:[lt.jsx("u",{children:"H"}),"elp"]})]}),lt.jsx(Xc,{style:{flex:1,overflow:"hidden",padding:0},children:lt.jsx(Yc,{style:{width:"100%",height:"100%"},children:o})})]})})},Zm=W.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px; /* Reduced width slightly */
  margin: 12px;
  cursor: pointer;
  text-align: center;
  
  &:active {
    opacity: 0.7;
  }
`,Xx=W.img`
  width: 42px;
  height: 42px;
  margin-bottom: 4px;
  image-rendering: pixelated; /* Keeps it crisp */
`,Vx=W.span`
  color: white;
  text-shadow: 1px 1px 1px #000;
  font-size: 13px; /* Slightly smaller text */
  padding: 1px 2px;
  
  ${Zm}:focus & {
    border: 1px dotted white;
    background-color: #000080;
  }
`,Km=({label:l,iconName:u,onDoubleClick:s})=>lt.jsxs(Zm,{tabIndex:0,onDoubleClick:s,children:[lt.jsx(Xx,{src:Or(u),alt:l,draggable:!1}),lt.jsx(Vx,{children:l})]}),Zx=W.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100%;
  align-content: flex-start;
  background: white; /* Folders typically have white backgrounds */
  padding: 10px;
  gap: 10px;
`,Kx=W.div`
  background: white;
  padding: 10px;
  min-height: 100%;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  white-space: pre-wrap; /* Preserves newlines in your text files */
  user-select: text; /* Allow users to copy your text */
`,Wx=({item:l})=>{const{openWindow:u}=Lr();if(!l)return lt.jsx("div",{children:"Error: Item not found"});switch(l.type){case"folder":const s=l.children||[];return s.length===0?lt.jsx("div",{style:{padding:20},children:"This folder is empty."}):lt.jsx(Zx,{children:s.map(o=>{const f=Ui[o];return f?lt.jsx(Km,{label:f.title,iconName:f.icon,onDoubleClick:()=>u(o)},o):null})});case"txt":return lt.jsx(Kx,{children:l.content});case"image":return lt.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",background:"#808080"},children:lt.jsx("img",{src:l.src,alt:l.title,style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}})});default:return lt.jsx("div",{children:"Unknown File Type"})}},Jx=W.main`
  flex: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 10px;
`,Fx=()=>{const{windows:l,openWindow:u}=Lr(),s=Ui.desktop.children||[];return lt.jsxs(Jx,{children:[s.map(o=>{const f=Ui[o];return f?lt.jsx(Km,{label:f.title,iconName:f.icon,onDoubleClick:()=>u(o)},o):null}),l.map(o=>{const f=Ui[o.id];return f?lt.jsx(Qx,{id:o.id,title:f.title,icon:f.icon,children:lt.jsx(Wx,{item:f})},o.id):null})]})},Ix=W.div`
  padding: 0 6px;
  font-size: 14px;
`,Px=()=>{const[l,u]=k.useState(new Date);k.useEffect(()=>{const o=setInterval(()=>u(new Date),1e3);return()=>clearInterval(o)},[]);const s=o=>o.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return lt.jsx(Ix,{children:s(l)})},tA=W.div`
  position: relative;
  z-index: 10000;
`,eA=W.div`
  position: absolute;
  bottom: 45px; /* Sits just above the Start Button */
  left: 0;
  z-index: 10001;
`,aA=()=>{const[l,u]=k.useState(!1),{windows:s,activeWindowId:o,focusWindow:f,minimizeWindow:d}=Lr(),p=m=>{o===m?d(m):f(m)};return lt.jsxs(tA,{children:[l&&lt.jsx(eA,{children:lt.jsxs(Em,{onClick:()=>u(!1),children:[lt.jsxs(Ar,{children:[lt.jsx("span",{role:"img","aria-label":"programs",children:"📁"})," Programs"]}),lt.jsxs(Ar,{children:[lt.jsx("span",{role:"img","aria-label":"settings",children:"⚙️"})," Settings"]}),lt.jsx(Gc,{}),lt.jsxs(Ar,{disabled:!0,children:[lt.jsx("span",{role:"img","aria-label":"shutdown",children:"🛑"})," Shut Down..."]})]})}),lt.jsx(Am,{style:{position:"relative",top:0,height:"40px"},children:lt.jsxs(_r,{style:{justifyContent:"space-between",padding:"0 4px",minHeight:"100%"},children:[lt.jsxs("div",{style:{display:"flex",gap:"4px"},children:[lt.jsxs(Ba,{onClick:()=>u(!l),active:l,style:{fontWeight:"bold"},children:[lt.jsx("img",{src:"https://win98icons.alexmeub.com/icons/png/windows-0.png",alt:"logo",style:{height:"20px",marginRight:4}}),"Start"]}),s.map(m=>{const v=Ui[m.id],g=Or(v?v.icon:"unknown");return lt.jsxs(Ba,{active:o===m.id&&!m.isMinimized,onClick:()=>p(m.id),style:{fontWeight:o===m.id?"bold":"normal",minWidth:"140px",display:"flex",justifyContent:"flex-start",alignItems:"center",padding:"0 4px"},children:[lt.jsx("img",{src:g,alt:"icon",style:{height:"18px",marginRight:"6px"}}),lt.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:v?v.title:m.id})]},m.id)})]}),lt.jsx("div",{style:{display:"flex",alignItems:"center"},children:lt.jsxs("div",{style:{borderLeft:"1px solid white",borderTop:"1px solid white",borderRight:"1px solid #808080",borderBottom:"1px solid #808080",padding:"2px",display:"flex",alignItems:"center"},children:[lt.jsx("img",{src:"https://win98icons.alexmeub.com/icons/png/loudspeaker_rays-0.png",alt:"sound",style:{height:"18px",marginRight:"4px"}}),lt.jsx(Px,{})]})})]})})]})},nA="/portfolio-95/assets/ms_sans_serif-Du8rjN1q.woff2",lA="/portfolio-95/assets/ms_sans_serif_bold-D5dpRRHG.woff2",iA=Tb`
  ${Db}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${nA}') format('woff2');
    font-weight: 200;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${lA}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`,uA=()=>lt.jsxs(Eb,{theme:hx,children:[lt.jsx(iA,{}),lt.jsxs("div",{style:{backgroundImage:'url("https://media.giphy.com/media/26tOZ42Mg6pbTUPCM/giphy.gif")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",height:"100vh",display:"flex",flexDirection:"column"},children:[lt.jsx(Fx,{}),lt.jsx(aA,{})]})]});wy.createRoot(document.getElementById("root")).render(lt.jsx(k.StrictMode,{children:lt.jsx(uA,{})}));
