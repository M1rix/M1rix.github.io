var qx=Object.defineProperty,Xx=Object.defineProperties;var Yx=Object.getOwnPropertyDescriptors;var va=Object.getOwnPropertySymbols;var fm=Object.prototype.hasOwnProperty,pm=Object.prototype.propertyIsEnumerable;var hm=(n,e,t)=>e in n?qx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ve=(n,e)=>{for(var t in e||={})fm.call(e,t)&&hm(n,t,e[t]);if(va)for(var t of va(e))pm.call(e,t)&&hm(n,t,e[t]);return n},_t=(n,e)=>Xx(n,Yx(e));var mm=(n,e)=>{var t={};for(var i in n)fm.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&va)for(var i of va(n))e.indexOf(i)<0&&pm.call(n,i)&&(t[i]=n[i]);return t};var Gr=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var gm=null;var su=1,vm=Symbol("SIGNAL");function tt(n){let e=gm;return gm=n,e}var ym={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Zx(n){if(!(cu(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===su)){if(!n.producerMustRecompute(n)&&!ou(n)){n.dirty=!1,n.lastCleanEpoch=su;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=su}}function _m(n){return n&&(n.nextProducerIndex=0),tt(n)}function xm(n,e){if(tt(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(cu(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)au(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function ou(n){ya(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(Zx(t),i!==t.version))return!0}return!1}function Mm(n){if(ya(n),cu(n))for(let e=0;e<n.producerNode.length;e++)au(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function au(n,e){if(Jx(n),ya(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)au(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];ya(r),r.producerIndexOfThis[i]=e}}function cu(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function ya(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function Jx(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function Kx(){throw new Error}var Qx=Kx;function wm(n){Qx=n}function Re(n){return typeof n=="function"}function Wr(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var _a=Wr(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function ro(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Dt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Re(i))try{i()}catch(s){e=s instanceof _a?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{bm(s)}catch(o){e=e??[],o instanceof _a?e=[...e,...o.errors]:e.push(o)}}if(e)throw new _a(e)}}add(e){var t;if(e&&e!==this)if(this.closed)bm(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&ro(t,e)}remove(e){let{_finalizers:t}=this;t&&ro(t,e),e instanceof n&&e._removeParent(this)}};Dt.EMPTY=(()=>{let n=new Dt;return n.closed=!0,n})();var lu=Dt.EMPTY;function xa(n){return n instanceof Dt||n&&"closed"in n&&Re(n.remove)&&Re(n.add)&&Re(n.unsubscribe)}function bm(n){Re(n)?n():n.unsubscribe()}var On={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var jr={setTimeout(n,e,...t){let{delegate:i}=jr;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=jr;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Ma(n){jr.setTimeout(()=>{let{onUnhandledError:e}=On;if(e)e(n);else throw n})}function so(){}var Sm=uu("C",void 0,void 0);function Em(n){return uu("E",void 0,n)}function Tm(n){return uu("N",n,void 0)}function uu(n,e,t){return{kind:n,value:e,error:t}}var ir=null;function $r(n){if(On.useDeprecatedSynchronousErrorHandling){let e=!ir;if(e&&(ir={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=ir;if(ir=null,t)throw i}}else n()}function Cm(n){On.useDeprecatedSynchronousErrorHandling&&ir&&(ir.errorThrown=!0,ir.error=n)}var rr=class extends Dt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,xa(e)&&e.add(this)):this.destination=nM}static create(e,t,i){return new qr(e,t,i)}next(e){this.isStopped?hu(Tm(e),this):this._next(e)}error(e){this.isStopped?hu(Em(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?hu(Sm,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},eM=Function.prototype.bind;function du(n,e){return eM.call(n,e)}var fu=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){wa(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){wa(i)}else wa(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){wa(t)}}},qr=class extends rr{constructor(e,t,i){super();let r;if(Re(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&On.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&du(e.next,s),error:e.error&&du(e.error,s),complete:e.complete&&du(e.complete,s)}):r=e}this.destination=new fu(r)}};function wa(n){On.useDeprecatedSynchronousErrorHandling?Cm(n):Ma(n)}function tM(n){throw n}function hu(n,e){let{onStoppedNotification:t}=On;t&&jr.setTimeout(()=>t(n,e))}var nM={closed:!0,next:so,error:tM,complete:so};var Xr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function an(n){return n}function pu(...n){return mu(n)}function mu(n){return n.length===0?an:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var ct=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=rM(t)?t:new qr(t,i,r);return $r(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Am(i),new i((r,s)=>{let o=new qr({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Xr](){return this}pipe(...t){return mu(t)(this)}toPromise(t){return t=Am(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Am(n){var e;return(e=n??On.Promise)!==null&&e!==void 0?e:Promise}function iM(n){return n&&Re(n.next)&&Re(n.error)&&Re(n.complete)}function rM(n){return n&&n instanceof rr||iM(n)&&xa(n)}function gu(n){return Re(n?.lift)}function Ye(n){return e=>{if(gu(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ze(n,e,t,i,r){return new vu(n,e,t,i,r)}var vu=class extends rr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function Yr(){return Ye((n,e)=>{let t=null;n._refCount++;let i=Ze(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var Zr=class extends ct{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,gu(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Dt;let t=this.getSubject();e.add(this.source.subscribe(Ze(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Dt.EMPTY)}return e}refCount(){return Yr()(this)}};var Dm=Wr(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Yt=(()=>{class n extends ct{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new ba(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Dm}next(t){$r(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){$r(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){$r(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?lu:(this.currentObservers=null,s.push(t),new Dt(()=>{this.currentObservers=null,ro(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new ct;return t.source=this,t}}return n.create=(e,t)=>new ba(e,t),n})(),ba=class extends Yt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:lu}};var Gt=class extends Yt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var cn=new ct(n=>n.complete());function Im(n){return n&&Re(n.schedule)}function Rm(n){return n[n.length-1]}function Pm(n){return Re(Rm(n))?n.pop():void 0}function Ii(n){return Im(Rm(n))?n.pop():void 0}function Om(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Nm(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function sr(n){return this instanceof sr?(this.v=n,this):new sr(n)}function Lm(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r={},a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(f){return function(g){return Promise.resolve(g).then(f,d)}}function a(f,g){i[f]&&(r[f]=function(v){return new Promise(function(m,p){s.push([f,v,m,p])>1||c(f,v)})},g&&(r[f]=g(r[f])))}function c(f,g){try{l(i[f](g))}catch(v){h(s[0][3],v)}}function l(f){f.value instanceof sr?Promise.resolve(f.value.v).then(u,d):h(s[0][2],f)}function u(f){c("next",f)}function d(f){c("throw",f)}function h(f,g){f(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function Fm(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Nm=="function"?Nm(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Sa=n=>n&&typeof n.length=="number"&&typeof n!="function";function Ea(n){return Re(n?.then)}function Ta(n){return Re(n[Xr])}function Ca(n){return Symbol.asyncIterator&&Re(n?.[Symbol.asyncIterator])}function Aa(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function sM(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Da=sM();function Ia(n){return Re(n?.[Da])}function Ra(n){return Lm(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield sr(t.read());if(r)return yield sr(void 0);yield yield sr(i)}}finally{t.releaseLock()}})}function Pa(n){return Re(n?.getReader)}function Ut(n){if(n instanceof ct)return n;if(n!=null){if(Ta(n))return oM(n);if(Sa(n))return aM(n);if(Ea(n))return cM(n);if(Ca(n))return Um(n);if(Ia(n))return lM(n);if(Pa(n))return uM(n)}throw Aa(n)}function oM(n){return new ct(e=>{let t=n[Xr]();if(Re(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function aM(n){return new ct(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function cM(n){return new ct(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Ma)})}function lM(n){return new ct(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Um(n){return new ct(e=>{dM(n,e).catch(t=>e.error(t))})}function uM(n){return Um(Ra(n))}function dM(n,e){var t,i,r,s;return Om(this,void 0,void 0,function*(){try{for(t=Fm(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function Qt(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Na(n,e=0){return Ye((t,i)=>{t.subscribe(Ze(i,r=>Qt(i,n,()=>i.next(r),e),()=>Qt(i,n,()=>i.complete(),e),r=>Qt(i,n,()=>i.error(r),e)))})}function Oa(n,e=0){return Ye((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function km(n,e){return Ut(n).pipe(Oa(e),Na(e))}function Bm(n,e){return Ut(n).pipe(Oa(e),Na(e))}function Vm(n,e){return new ct(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function zm(n,e){return new ct(t=>{let i;return Qt(t,e,()=>{i=n[Da](),Qt(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Re(i?.return)&&i.return()})}function La(n,e){if(!n)throw new Error("Iterable cannot be null");return new ct(t=>{Qt(t,e,()=>{let i=n[Symbol.asyncIterator]();Qt(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function Hm(n,e){return La(Ra(n),e)}function Gm(n,e){if(n!=null){if(Ta(n))return km(n,e);if(Sa(n))return Vm(n,e);if(Ea(n))return Bm(n,e);if(Ca(n))return La(n,e);if(Ia(n))return zm(n,e);if(Pa(n))return Hm(n,e)}throw Aa(n)}function Tt(n,e){return e?Gm(n,e):Ut(n)}function Ae(...n){let e=Ii(n);return Tt(n,e)}function Jr(n,e){let t=Re(n)?n:()=>n,i=r=>r.error(t());return new ct(e?r=>e.schedule(i,0,r):i)}function yu(n){return!!n&&(n instanceof ct||Re(n.lift)&&Re(n.subscribe))}var li=Wr(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function je(n,e){return Ye((t,i)=>{let r=0;t.subscribe(Ze(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:hM}=Array;function fM(n,e){return hM(e)?n(...e):n(e)}function Wm(n){return je(e=>fM(n,e))}var{isArray:pM}=Array,{getPrototypeOf:mM,prototype:gM,keys:vM}=Object;function jm(n){if(n.length===1){let e=n[0];if(pM(e))return{args:e,keys:null};if(yM(e)){let t=vM(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function yM(n){return n&&typeof n=="object"&&mM(n)===gM}function $m(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Fa(...n){let e=Ii(n),t=Pm(n),{args:i,keys:r}=jm(n);if(i.length===0)return Tt([],e);let s=new ct(_M(i,e,r?o=>$m(r,o):an));return t?s.pipe(Wm(t)):s}function _M(n,e,t=an){return i=>{qm(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)qm(e,()=>{let l=Tt(n[c],e),u=!1;l.subscribe(Ze(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function qm(n,e,t){n?Qt(t,n,e):e()}function Xm(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,h=()=>{d&&!c.length&&!l&&e.complete()},f=v=>l<i?g(v):c.push(v),g=v=>{s&&e.next(v),l++;let m=!1;Ut(t(v,u++)).subscribe(Ze(e,p=>{r?.(p),s?f(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();o?Qt(e,o,()=>g(p)):g(p)}h()}catch(p){e.error(p)}}))};return n.subscribe(Ze(e,f,()=>{d=!0,h()})),()=>{a?.()}}function It(n,e,t=1/0){return Re(e)?It((i,r)=>je((s,o)=>e(i,s,r,o))(Ut(n(i,r))),t):(typeof e=="number"&&(t=e),Ye((i,r)=>Xm(i,r,n,t)))}function _u(n=1/0){return It(an,n)}function Ym(){return _u(1)}function Kr(...n){return Ym()(Tt(n,Ii(n)))}function Ua(n){return new ct(e=>{Ut(n()).subscribe(e)})}function _n(n,e){return Ye((t,i)=>{let r=0;t.subscribe(Ze(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Ri(n){return Ye((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Ze(t,void 0,void 0,o=>{s=Ut(n(o,Ri(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function Zm(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(Ze(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function or(n,e){return Re(e)?It(n,e,1):It(n,1)}function Pi(n){return Ye((e,t)=>{let i=!1;e.subscribe(Ze(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function ui(n){return n<=0?()=>cn:Ye((e,t)=>{let i=0;e.subscribe(Ze(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function xu(n){return je(()=>n)}function ka(n=xM){return Ye((e,t)=>{let i=!1;e.subscribe(Ze(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function xM(){return new li}function Qr(n){return Ye((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Ln(n,e){let t=arguments.length>=2;return i=>i.pipe(n?_n((r,s)=>n(r,s,i)):an,ui(1),t?Pi(e):ka(()=>new li))}function es(n){return n<=0?()=>cn:Ye((e,t)=>{let i=[];e.subscribe(Ze(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Mu(n,e){let t=arguments.length>=2;return i=>i.pipe(n?_n((r,s)=>n(r,s,i)):an,es(1),t?Pi(e):ka(()=>new li))}function wu(n,e){return Ye(Zm(n,e,arguments.length>=2,!0))}function bu(...n){let e=Ii(n);return Ye((t,i)=>{(e?Kr(n,t,e):Kr(n,t)).subscribe(i)})}function xn(n,e){return Ye((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Ze(i,c=>{r?.unsubscribe();let l=0,u=s++;Ut(n(c,u)).subscribe(r=Ze(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function Su(n){return Ye((e,t)=>{Ut(n).subscribe(Ze(t,()=>t.complete(),so)),!t.closed&&e.subscribe(t)})}function Rt(n,e,t){let i=Re(n)||e||t?{next:n,error:e,complete:t}:n;return i?Ye((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Ze(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):an}var Te=class extends Error{constructor(e,t){super(uc(e,t)),this.code=e}};function uc(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function bd(n){return{toString:n}.toString()}var oo=globalThis;function ht(n){for(let e in n)if(n[e]===ht)return e;throw Error("Could not find renamed property on target object.")}function ln(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(ln).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function Jm(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var MM=ht({__forward_ref__:ht});function Pg(n){return n.__forward_ref__=Pg,n.toString=function(){return ln(this())},n}function wn(n){return Ng(n)?n():n}function Ng(n){return typeof n=="function"&&n.hasOwnProperty(MM)&&n.__forward_ref__===Pg}function Pe(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function dc(n){return Km(n,Lg)||Km(n,Fg)}function Og(n){return dc(n)!==null}function Km(n,e){return n.hasOwnProperty(e)?n[e]:null}function wM(n){let e=n&&(n[Lg]||n[Fg]);return e||null}function Qm(n){return n&&(n.hasOwnProperty(eg)||n.hasOwnProperty(bM))?n[eg]:null}var Lg=ht({\u0275prov:ht}),eg=ht({\u0275inj:ht}),Fg=ht({ngInjectableDef:ht}),bM=ht({ngInjectorDef:ht}),Ve=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Pe({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Ug(n){return n&&!!n.\u0275providers}var SM=ht({\u0275cmp:ht}),EM=ht({\u0275dir:ht}),TM=ht({\u0275pipe:ht}),CM=ht({\u0275mod:ht}),Xa=ht({\u0275fac:ht}),ao=ht({__NG_ELEMENT_ID__:ht}),tg=ht({__NG_ENV_ID__:ht});function AM(n){return typeof n=="string"?n:n==null?"":String(n)}function DM(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():AM(n)}function IM(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Te(-200,n)}function Sd(n,e){throw new Te(-201,!1)}var Ge=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(Ge||{}),Uu;function kg(){return Uu}function Mn(n){let e=Uu;return Uu=n,e}function Bg(n,e,t){let i=dc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&Ge.Optional)return null;if(e!==void 0)return e;Sd(n,"Injector")}var RM={},co=RM,PM="__NG_DI_FLAG__",Ya="ngTempTokenPath",NM="ngTokenPath",OM=/\n/gm,LM="\u0275",ng="__source",rs;function FM(){return rs}function Ni(n){let e=rs;return rs=n,e}function UM(n,e=Ge.Default){if(rs===void 0)throw new Te(-203,!1);return rs===null?Bg(n,void 0,e):rs.get(n,e&Ge.Optional?null:void 0,e)}function Je(n,e=Ge.Default){return(kg()||UM)(wn(n),e)}function ie(n,e=Ge.Default){return Je(n,hc(e))}function hc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function ku(n){let e=[];for(let t=0;t<n.length;t++){let i=wn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Te(900,!1);let r,s=Ge.Default;for(let o=0;o<i.length;o++){let a=i[o],c=kM(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Je(r,s))}else e.push(Je(i))}return e}function kM(n){return n[PM]}function BM(n,e,t,i){let r=n[Ya];throw e[ng]&&r.unshift(e[ng]),n.message=VM(`
`+n.message,r,t,i),n[NM]=r,n[Ya]=null,n}function VM(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==LM?n.slice(2):n;let r=ln(e);if(Array.isArray(e))r=e.map(ln).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):ln(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(OM,`
  `)}`}function os(n,e){let t=n.hasOwnProperty(Xa);return t?n[Xa]:null}function zM(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function HM(n){return n.flat(Number.POSITIVE_INFINITY)}function Ed(n,e){n.forEach(t=>Array.isArray(t)?Ed(t,e):e(t))}function Vg(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Za(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var lo={},cr=[],lr=new Ve(""),zg=new Ve("",-1),Hg=new Ve(""),Ja=class{get(e,t=co){if(t===co){let i=new Error(`NullInjectorError: No provider for ${ln(e)}!`);throw i.name="NullInjectorError",i}return t}},Gg=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Gg||{}),Zn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(Zn||{}),Fi=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Fi||{});function GM(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function Bu(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];jM(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function WM(n){return n===3||n===4||n===6}function jM(n){return n.charCodeAt(0)===64}function Td(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?ig(n,t,r,null,e[++i]):ig(n,t,r,null,null))}}return n}function ig(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var Wg="ng-template";function $M(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&GM(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Cd(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Cd(n){return n.type===4&&n.value!==Wg}function qM(n,e,t){let i=n.type===4&&!t?Wg:n.value;return e===i}function XM(n,e,t){let i=4,r=n.attrs,s=r!==null?JM(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Fn(i)&&!Fn(c))return!1;if(o&&Fn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!qM(n,c,t)||c===""&&e.length===1){if(Fn(i))return!1;o=!0}}else if(i&8){if(r===null||!$M(n,r,c,t)){if(Fn(i))return!1;o=!0}}else{let l=e[++a],u=YM(c,r,Cd(n),t);if(u===-1){if(Fn(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Fn(i))return!1;o=!0}}}}return Fn(i)||o}function Fn(n){return(n&1)===0}function YM(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return KM(e,n)}function ZM(n,e,t=!1){for(let i=0;i<e.length;i++)if(XM(n,e[i],t))return!0;return!1}function JM(n){for(let e=0;e<n.length;e++){let t=n[e];if(WM(t))return e}return n.length}function KM(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function rg(n,e){return n?":not("+e.trim()+")":e}function QM(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Fn(o)&&(e+=rg(s,r),r=""),i=o,s=s||!Fn(i);t++}return r!==""&&(e+=rg(s,r)),e}function ew(n){return n.map(QM).join(",")}function tw(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Fn(r))break;r=s}i++}return{attrs:e,classes:t}}function Qn(n){return bd(()=>{let e=Yg(n),t=_t(ve({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Gg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Zn.Emulated,styles:n.styles||cr,_:null,schemas:n.schemas||null,tView:null,id:""});Zg(t);let i=n.dependencies;return t.directiveDefs=og(i,!1),t.pipeDefs=og(i,!0),t.id=rw(t),t})}function nw(n){return ur(n)||jg(n)}function iw(n){return n!==null}function sg(n,e){if(n==null)return lo;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=Fi.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==Fi.None?[i,a]:i,e[s]=o):t[s]=i}return t}function Ad(n){return bd(()=>{let e=Yg(n);return Zg(e),e})}function ur(n){return n[SM]||null}function jg(n){return n[EM]||null}function $g(n){return n[TM]||null}function qg(n){let e=ur(n)||jg(n)||$g(n);return e!==null?e.standalone:!1}function Xg(n,e){let t=n[CM]||null;if(!t&&e===!0)throw new Error(`Type ${ln(n)} does not have '\u0275mod' property.`);return t}function Yg(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||lo,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||cr,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:sg(n.inputs,e),outputs:sg(n.outputs),debugInfo:null}}function Zg(n){n.features?.forEach(e=>e(n))}function og(n,e){if(!n)return null;let t=e?$g:nw;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(iw)}function rw(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function pr(n){return{\u0275providers:n}}function sw(...n){return{\u0275providers:Jg(!0,n),\u0275fromNgModule:!0}}function Jg(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Ed(e,o=>{let a=o;Vu(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Kg(r,s),t}function Kg(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Dd(r,s=>{e(s,i)})}}function Vu(n,e,t,i){if(n=wn(n),!n)return!1;let r=null,s=Qm(n),o=!s&&ur(n);if(!s&&!o){let c=n.ngModule;if(s=Qm(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)Vu(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Ed(s.imports,u=>{Vu(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Kg(l,e)}if(!a){let l=os(r)||(()=>new r);e({provide:r,useFactory:l,deps:cr},r),e({provide:Hg,useValue:r,multi:!0},r),e({provide:lr,useValue:()=>Je(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Dd(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Dd(n,e){for(let t of n)Ug(t)&&(t=t.\u0275providers),Array.isArray(t)?Dd(t,e):e(t)}var ow=ht({provide:String,useValue:ht});function Qg(n){return n!==null&&typeof n=="object"&&ow in n}function aw(n){return!!(n&&n.useExisting)}function cw(n){return!!(n&&n.useFactory)}function zu(n){return typeof n=="function"}var fc=new Ve(""),Ha={},lw={},Eu;function Id(){return Eu===void 0&&(Eu=new Ja),Eu}var Sn=class{},uo=class extends Sn{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Gu(e,o=>this.processProvider(o)),this.records.set(zg,ts(void 0,this)),r.has("environment")&&this.records.set(Sn,ts(void 0,this));let s=this.records.get(fc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Hg,cr,Ge.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let e=tt(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),tt(e)}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=Ni(this),i=Mn(void 0),r;try{return e()}finally{Ni(t),Mn(i)}}get(e,t=co,i=Ge.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(tg))return e[tg](this);i=hc(i);let r,s=Ni(this),o=Mn(void 0);try{if(!(i&Ge.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=mw(e)&&dc(e);l&&this.injectableDefInScope(l)?c=ts(Hu(e),Ha):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&Ge.Self?Id():this.parent;return t=i&Ge.Optional&&t===co?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[Ya]=a[Ya]||[]).unshift(ln(e)),s)throw a;return BM(a,e,"R3InjectorError",this.source)}else throw a}finally{Mn(o),Ni(s)}}resolveInjectorInitializers(){let e=tt(null),t=Ni(this),i=Mn(void 0),r;try{let s=this.get(lr,cr,Ge.Self);for(let o of s)o()}finally{Ni(t),Mn(i),tt(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(ln(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Te(205,!1)}processProvider(e){e=wn(e);let t=zu(e)?e:wn(e&&e.provide),i=dw(e);if(!zu(e)&&e.multi===!0){let r=this.records.get(t);r||(r=ts(void 0,Ha,!0),r.factory=()=>ku(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=tt(null);try{return t.value===Ha&&(t.value=lw,t.value=t.factory()),typeof t.value=="object"&&t.value&&pw(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{tt(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=wn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Hu(n){let e=dc(n),t=e!==null?e.factory:os(n);if(t!==null)return t;if(n instanceof Ve)throw new Te(204,!1);if(n instanceof Function)return uw(n);throw new Te(204,!1)}function uw(n){if(n.length>0)throw new Te(204,!1);let t=wM(n);return t!==null?()=>t.factory(n):()=>new n}function dw(n){if(Qg(n))return ts(void 0,n.useValue);{let e=hw(n);return ts(e,Ha)}}function hw(n,e,t){let i;if(zu(n)){let r=wn(n);return os(r)||Hu(r)}else if(Qg(n))i=()=>wn(n.useValue);else if(cw(n))i=()=>n.useFactory(...ku(n.deps||[]));else if(aw(n))i=()=>Je(wn(n.useExisting));else{let r=wn(n&&(n.useClass||n.provide));if(fw(n))i=()=>new r(...ku(n.deps));else return os(r)||Hu(r)}return i}function ts(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function fw(n){return!!n.deps}function pw(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function mw(n){return typeof n=="function"||typeof n=="object"&&n instanceof Ve}function Gu(n,e){for(let t of n)Array.isArray(t)?Gu(t,e):t&&Ug(t)?Gu(t.\u0275providers,e):e(t)}function ki(n,e){n instanceof uo&&n.assertNotDestroyed();let t,i=Ni(n),r=Mn(void 0);try{return e()}finally{Ni(i),Mn(r)}}function gw(){return kg()!==void 0||FM()!=null}function vw(n){return typeof n=="function"}var un=0,Ue=1,Se=2,kt=3,Un=4,Bn=5,kn=6,ho=7,di=8,as=9,Jn=10,Pt=11,fo=12,ag=13,wo=14,En=15,bo=16,ns=17,hi=18,pc=19,ev=20,Oi=21,Tu=22,dr=23,dn=25,tv=1,po=6,fi=7,Ka=8,cs=9,en=10,Rd=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(Rd||{});function Li(n){return Array.isArray(n)&&typeof n[tv]=="object"}function ei(n){return Array.isArray(n)&&n[tv]===!0}function nv(n){return(n.flags&4)!==0}function So(n){return n.componentOffset>-1}function iv(n){return(n.flags&1)===1}function Eo(n){return!!n.template}function rv(n){return(n[Se]&512)!==0}var Wu=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function sv(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function mc(){return ov}function ov(n){return n.type.prototype.ngOnChanges&&(n.setInput=_w),yw}mc.ngInherit=!0;function yw(){let n=cv(this),e=n?.current;if(e){let t=n.previous;if(t===lo)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function _w(n,e,t,i,r){let s=this.declaredInputs[i],o=cv(n)||xw(n,{previous:lo,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Wu(l&&l.currentValue,t,c===lo),sv(n,e,r,t)}var av="__ngSimpleChanges__";function cv(n){return n[av]||null}function xw(n,e){return n[av]=e}var cg=null;var Xn=function(n,e,t){cg?.(n,e,t)},lv="svg",Mw="math",ww=!1;function bw(){return ww}function Kn(n){for(;Array.isArray(n);)n=n[un];return n}function Tn(n,e){return Kn(e[n.index])}function uv(n,e){return n.data[e]}function Sw(n,e){return n[e]}function mr(n,e){let t=e[n];return Li(t)?t:t[un]}function Ew(n){return(n[Se]&4)===4}function Pd(n){return(n[Se]&128)===128}function Tw(n){return ei(n[kt])}function lg(n,e){return e==null?null:n[e]}function dv(n){n[ns]=0}function Cw(n){n[Se]&1024||(n[Se]|=1024,Pd(n)&&mo(n))}function Nd(n){return!!(n[Se]&9216||n[dr]?.dirty)}function ju(n){n[Jn].changeDetectionScheduler?.notify(1),Nd(n)?mo(n):n[Se]&64&&(bw()?(n[Se]|=1024,mo(n)):n[Jn].changeDetectionScheduler?.notify())}function mo(n){n[Jn].changeDetectionScheduler?.notify();let e=go(n);for(;e!==null&&!(e[Se]&8192||(e[Se]|=8192,!Pd(e)));)e=go(e)}function hv(n,e){if((n[Se]&256)===256)throw new Te(911,!1);n[Oi]===null&&(n[Oi]=[]),n[Oi].push(e)}function Aw(n,e){if(n[Oi]===null)return;let t=n[Oi].indexOf(e);t!==-1&&n[Oi].splice(t,1)}function go(n){let e=n[kt];return ei(e)?e[kt]:e}var $e={lFrame:_v(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function Dw(){return $e.lFrame.elementDepthCount}function Iw(){$e.lFrame.elementDepthCount++}function Rw(){$e.lFrame.elementDepthCount--}function fv(){return $e.bindingsEnabled}function To(){return $e.skipHydrationRootTNode!==null}function Pw(n){return $e.skipHydrationRootTNode===n}function Nw(n){$e.skipHydrationRootTNode=n}function Ow(){$e.skipHydrationRootTNode=null}function Wt(){return $e.lFrame.lView}function gr(){return $e.lFrame.tView}function ti(){let n=pv();for(;n!==null&&n.type===64;)n=n.parent;return n}function pv(){return $e.lFrame.currentTNode}function Lw(){let n=$e.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function gc(n,e){let t=$e.lFrame;t.currentTNode=n,t.isParent=e}function mv(){return $e.lFrame.isParent}function Fw(){$e.lFrame.isParent=!1}function Uw(){return $e.lFrame.contextLView}function kw(n){return $e.lFrame.bindingIndex=n}function Bw(){return $e.lFrame.bindingIndex++}function Vw(){return $e.lFrame.inI18n}function zw(n,e){let t=$e.lFrame;t.bindingIndex=t.bindingRootIndex=n,$u(e)}function Hw(){return $e.lFrame.currentDirectiveIndex}function $u(n){$e.lFrame.currentDirectiveIndex=n}function gv(){return $e.lFrame.currentQueryIndex}function Od(n){$e.lFrame.currentQueryIndex=n}function Gw(n){let e=n[Ue];return e.type===2?e.declTNode:e.type===1?n[Bn]:null}function vv(n,e,t){if(t&Ge.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&Ge.Host);)if(r=Gw(s),r===null||(s=s[wo],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=$e.lFrame=yv();return i.currentTNode=e,i.lView=n,!0}function Ld(n){let e=yv(),t=n[Ue];$e.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function yv(){let n=$e.lFrame,e=n===null?null:n.child;return e===null?_v(n):e}function _v(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function xv(){let n=$e.lFrame;return $e.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Mv=xv;function Fd(){let n=xv();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Ww(){return $e.lFrame.selectedIndex}function hr(n){$e.lFrame.selectedIndex=n}function jw(){let n=$e.lFrame;return uv(n.tView,n.selectedIndex)}function Ud(){$e.lFrame.currentNamespace=lv}function wv(){$w()}function $w(){$e.lFrame.currentNamespace=null}function bv(){return $e.lFrame.currentNamespace}var Sv=!0;function Ev(){return Sv}function ni(n){Sv=n}function qw(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=ov(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function Tv(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Ga(n,e,t){Cv(n,e,3,t)}function Wa(n,e,t,i){(n[Se]&3)===t&&Cv(n,e,t,i)}function Cu(n,e){let t=n[Se];(t&3)===e&&(t&=16383,t+=1,n[Se]=t)}function Cv(n,e,t,i){let r=i!==void 0?n[ns]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[ns]+=65536),(a<s||s==-1)&&(Xw(n,t,e,c),n[ns]=(n[ns]&4294901760)+c+2),c++}function ug(n,e){Xn(4,n,e);let t=tt(null);try{e.call(n)}finally{tt(t),Xn(5,n,e)}}function Xw(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Se]>>14<n[ns]>>16&&(n[Se]&3)===e&&(n[Se]+=16384,ug(a,s)):ug(a,s)}var ss=-1,vo=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function Yw(n){return n instanceof vo}function Zw(n){return(n.flags&8)!==0}function Jw(n){return(n.flags&16)!==0}function Av(n){return n!==ss}function Qa(n){return n&32767}function Kw(n){return n>>16}function ec(n,e){let t=Kw(n),i=e;for(;t>0;)i=i[wo],t--;return i}var qu=!0;function dg(n){let e=qu;return qu=n,e}var Qw=256,Dv=Qw-1,Iv=5,eb=0,Yn={};function tb(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(ao)&&(i=t[ao]),i==null&&(i=t[ao]=eb++);let r=i&Dv,s=1<<r;e.data[n+(r>>Iv)]|=s}function Rv(n,e){let t=Pv(n,e);if(t!==-1)return t;let i=e[Ue];i.firstCreatePass&&(n.injectorIndex=e.length,Au(i.data,n),Au(e,null),Au(i.blueprint,null));let r=kd(n,e),s=n.injectorIndex;if(Av(r)){let o=Qa(r),a=ec(r,e),c=a[Ue].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Au(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Pv(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function kd(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Uv(r),i===null)return ss;if(t++,r=r[wo],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return ss}function nb(n,e,t){tb(n,e,t)}function Nv(n,e,t){if(t&Ge.Optional||n!==void 0)return n;Sd(e,"NodeInjector")}function Ov(n,e,t,i){if(t&Ge.Optional&&i===void 0&&(i=null),!(t&(Ge.Self|Ge.Host))){let r=n[as],s=Mn(void 0);try{return r?r.get(e,i,t&Ge.Optional):Bg(e,i,t&Ge.Optional)}finally{Mn(s)}}return Nv(i,e,t)}function Lv(n,e,t,i=Ge.Default,r){if(n!==null){if(e[Se]&2048&&!(i&Ge.Self)){let o=ob(n,e,t,i,Yn);if(o!==Yn)return o}let s=Fv(n,e,t,i,Yn);if(s!==Yn)return s}return Ov(e,t,i,r)}function Fv(n,e,t,i,r){let s=rb(t);if(typeof s=="function"){if(!vv(e,n,i))return i&Ge.Host?Nv(r,t,i):Ov(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&Ge.Optional))Sd(t);else return o}finally{Mv()}}else if(typeof s=="number"){let o=null,a=Pv(n,e),c=ss,l=i&Ge.Host?e[En][Bn]:null;for((a===-1||i&Ge.SkipSelf)&&(c=a===-1?kd(n,e):e[a+8],c===ss||!fg(i,!1)?a=-1:(o=e[Ue],a=Qa(c),e=ec(c,e)));a!==-1;){let u=e[Ue];if(hg(s,a,u.data)){let d=ib(a,e,t,o,i,l);if(d!==Yn)return d}c=e[a+8],c!==ss&&fg(i,e[Ue].data[a+8]===l)&&hg(s,a,e)?(o=u,a=Qa(c),e=ec(c,e)):a=-1}}return r}function ib(n,e,t,i,r,s){let o=e[Ue],a=o.data[n+8],c=i==null?So(a)&&qu:i!=o&&(a.type&3)!==0,l=r&Ge.Host&&s===a,u=ja(a,o,t,c,l);return u!==null?ls(e,o,u,a):Yn}function ja(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,h=r?a+u:l;for(let f=d;f<h;f++){let g=o[f];if(f<c&&t===g||f>=c&&g.type===t)return f}if(r){let f=o[c];if(f&&Eo(f)&&f.type===t)return c}return null}function ls(n,e,t,i){let r=n[t],s=e.data;if(Yw(r)){let o=r;o.resolving&&IM(DM(s[t]));let a=dg(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?Mn(o.injectImpl):null,u=vv(n,i,Ge.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&qw(t,s[t],e)}finally{l!==null&&Mn(l),dg(a),o.resolving=!1,Mv()}}return r}function rb(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(ao)?n[ao]:void 0;return typeof e=="number"?e>=0?e&Dv:sb:e}function hg(n,e,t){let i=1<<n;return!!(t[e+(n>>Iv)]&i)}function fg(n,e){return!(n&Ge.Self)&&!(n&Ge.Host&&e)}var ar=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Lv(this._tNode,this._lView,e,hc(i),t)}};function sb(){return new ar(ti(),Wt())}function Bd(n){return bd(()=>{let e=n.prototype.constructor,t=e[Xa]||Xu(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Xa]||Xu(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Xu(n){return Ng(n)?()=>{let e=Xu(wn(n));return e&&e()}:os(n)}function ob(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Se]&2048&&!(o[Se]&512);){let a=Fv(s,o,t,i|Ge.Self,Yn);if(a!==Yn)return a;let c=s.parent;if(!c){let l=o[ev];if(l){let u=l.get(t,Yn,i);if(u!==Yn)return u}c=Uv(o),o=o[wo]}s=c}return r}function Uv(n){let e=n[Ue],t=e.type;return t===2?e.declTNode:t===1?n[Bn]:null}function pg(n,e=null,t=null,i){let r=kv(n,e,t,i);return r.resolveInjectorInitializers(),r}function kv(n,e=null,t=null,i,r=new Set){let s=[t||cr,sw(n)];return i=i||(typeof n=="object"?void 0:ln(n)),new uo(s,e||Id(),i||null,r)}var vr=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return pg({name:""},r,i,"");{let s=i.name??"";return pg({name:s},i.parent,i.providers,s)}}};e.THROW_IF_NOT_FOUND=co,e.NULL=new Ja,e.\u0275prov=Pe({token:e,providedIn:"any",factory:()=>Je(zg)}),e.__NG_ELEMENT_ID__=-1;let n=e;return n})();var ab="ngOriginalError";function Du(n){return n[ab]}var pi=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&Du(e);for(;t&&Du(t);)t=Du(t);return t||null}},Bv=new Ve("",{providedIn:"root",factory:()=>ie(pi).handleError.bind(void 0)}),Vv=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=cb,e.__NG_ENV_ID__=i=>i;let n=e;return n})(),Yu=class extends Vv{constructor(e){super(),this._lView=e}onDestroy(e){return hv(this._lView,e),()=>Aw(this._lView,e)}};function cb(){return new Yu(Wt())}function lb(){return ds(ti(),Wt())}function ds(n,e){return new mi(Tn(n,e))}var mi=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=lb;let n=e;return n})();function ub(n){return n instanceof mi?n.nativeElement:n}var Zu=class extends Yt{constructor(e=!1){super(),this.destroyRef=void 0,this.__isAsync=e,gw()&&(this.destroyRef=ie(Vv,{optional:!0})??void 0)}emit(e){let t=tt(null);try{super.next(e)}finally{tt(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=Iu(s),r&&(r=Iu(r)),o&&(o=Iu(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Dt&&e.add(a),a}};function Iu(n){return e=>{setTimeout(n,void 0,e)}}var bn=Zu;function db(){return this._results[Symbol.iterator]()}var Ju=class n{get changes(){return this._changes??=new bn}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let t=n.prototype;t[Symbol.iterator]||(t[Symbol.iterator]=db)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=HM(e);(this._changesDetected=!zM(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}},hb="ngSkipHydration",fb="ngskiphydration";function zv(n){let e=n.mergedAttrs;if(e===null)return!1;for(let t=0;t<e.length;t+=2){let i=e[t];if(typeof i=="number")return!1;if(typeof i=="string"&&i.toLowerCase()===fb)return!0}return!1}function Hv(n){return n.hasAttribute(hb)}function tc(n){return(n.flags&128)===128}function pb(n){if(tc(n))return!0;let e=n.parent;for(;e;){if(tc(n)||zv(e))return!0;e=e.parent}return!1}var Gv=new Map,mb=0;function gb(){return mb++}function vb(n){Gv.set(n[pc],n)}function yb(n){Gv.delete(n[pc])}var mg="__ngContext__";function us(n,e){Li(e)?(n[mg]=e[pc],vb(e)):n[mg]=e}function Wv(n){return $v(n[fo])}function jv(n){return $v(n[Un])}function $v(n){for(;n!==null&&!ei(n);)n=n[Un];return n}var Ku;function qv(n){Ku=n}function vc(){if(Ku!==void 0)return Ku;if(typeof document<"u")return document;throw new Te(210,!1)}var yc=new Ve("",{providedIn:"root",factory:()=>_b}),_b="ng",Vd=new Ve(""),Cn=new Ve("",{providedIn:"platform",factory:()=>"unknown"});var zd=new Ve("",{providedIn:"root",factory:()=>vc().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});function xb(){let n=new yr;return ie(Cn)==="browser"&&(n.store=Mb(vc(),ie(yc))),n}var yr=(()=>{let e=class e{constructor(){this.store={},this.onSerializeCallbacks={}}get(i,r){return this.store[i]!==void 0?this.store[i]:r}set(i,r){this.store[i]=r}remove(i){delete this.store[i]}hasKey(i){return this.store.hasOwnProperty(i)}get isEmpty(){return Object.keys(this.store).length===0}onSerialize(i,r){this.onSerializeCallbacks[i]=r}toJson(){for(let i in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(i))try{this.store[i]=this.onSerializeCallbacks[i]()}catch(r){console.warn("Exception in onSerialize callback: ",r)}return JSON.stringify(this.store).replace(/</g,"\\u003C")}};e.\u0275prov=Pe({token:e,providedIn:"root",factory:xb});let n=e;return n})();function Mb(n,e){let t=n.getElementById(e+"-state");if(t?.textContent)try{return JSON.parse(t.textContent)}catch(i){console.warn("Exception while restoring TransferState for app "+e,i)}return{}}var Xv="h",Yv="b",Qu=function(n){return n.FirstChild="f",n.NextSibling="n",n}(Qu||{}),wb="e",bb="t",Hd="c",Zv="x",nc="r",Sb="i",Eb="n",Tb="d",Cb="__nghData__",Jv=Cb,Ru="ngh",Ab="nghm",Kv=()=>null;function Db(n,e,t=!1){let i=n.getAttribute(Ru);if(i==null)return null;let[r,s]=i.split("|");if(i=t?s:r,!i)return null;let o=s?`|${s}`:"",a=t?r:o,c={};if(i!==""){let u=e.get(yr,null,{optional:!0});u!==null&&(c=u.get(Jv,[])[Number(i)])}let l={data:c,firstChild:n.firstChild??null};return t&&(l.firstChild=n,_c(l,0,n.nextSibling)),a?n.setAttribute(Ru,a):n.removeAttribute(Ru),l}function Ib(){Kv=Db}function Gd(n,e,t=!1){return Kv(n,e,t)}function Rb(n){let e=n._lView;return e[Ue].type===2?null:(rv(e)&&(e=e[dn]),e)}function Pb(n){return n.textContent?.replace(/\s/gm,"")}function Nb(n){let e=vc(),t=e.createNodeIterator(n,NodeFilter.SHOW_COMMENT,{acceptNode(s){let o=Pb(s);return o==="ngetn"||o==="ngtns"?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i,r=[];for(;i=t.nextNode();)r.push(i);for(let s of r)s.textContent==="ngetn"?s.replaceWith(e.createTextNode("")):s.remove()}function _c(n,e,t){n.segmentHeads??={},n.segmentHeads[e]=t}function ed(n,e){return n.segmentHeads?.[e]??null}function Ob(n,e){let t=n.data,i=t[wb]?.[e]??null;return i===null&&t[Hd]?.[e]&&(i=Wd(n,e)),i}function Qv(n,e){return n.data[Hd]?.[e]??null}function Wd(n,e){let t=Qv(n,e)??[],i=0;for(let r of t)i+=r[nc]*(r[Zv]??1);return i}function xc(n,e){if(typeof n.disconnectedNodes>"u"){let t=n.data[Tb];n.disconnectedNodes=t?new Set(t):null}return!!n.disconnectedNodes?.has(e)}var Ba=new Ve(""),ey=!1,ty=new Ve("",{providedIn:"root",factory:()=>ey}),Lb=new Ve("");var Fb=/^>|^->|<!--|-->|--!>|<!-$/g,Ub=/(<|>)/g,kb="\u200B$1\u200B";function Bb(n){return n.replace(Fb,e=>e.replace(Ub,kb))}function ny(n){return n.ownerDocument}function Vb(n){return n.ownerDocument.body}function iy(n){return n instanceof Function?n():n}function Va(n){return(n??ie(vr)).get(Cn)==="browser"}var _r=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(_r||{}),zb;function jd(n,e){return zb(n,e)}function is(n,e,t,i,r){if(i!=null){let s,o=!1;ei(i)?s=i:Li(i)&&(o=!0,i=i[un]);let a=Kn(i);n===0&&t!==null?r==null?ay(e,t,a):ic(e,t,a,r||null,!0):n===1&&t!==null?ic(e,t,a,r||null,!0):n===2?Yd(e,a,o):n===3&&e.destroyNode(a),s!=null&&iS(e,n,s,t,r)}}function $d(n,e){return n.createText(e)}function qd(n,e){return n.createComment(Bb(e))}function Mc(n,e,t){return n.createElement(e,t)}function Hb(n,e){ry(n,e),e[un]=null,e[Bn]=null}function Gb(n,e,t,i,r,s){i[un]=r,i[Bn]=e,wc(n,i,t,1,r,s)}function ry(n,e){e[Jn].changeDetectionScheduler?.notify(1),wc(n,e,e[Pt],2,null,null)}function Wb(n){let e=n[fo];if(!e)return Pu(n[Ue],n);for(;e;){let t=null;if(Li(e))t=e[fo];else{let i=e[en];i&&(t=i)}if(!t){for(;e&&!e[Un]&&e!==n;)Li(e)&&Pu(e[Ue],e),e=e[kt];e===null&&(e=n),Li(e)&&Pu(e[Ue],e),t=e&&e[Un]}e=t}}function jb(n,e,t,i){let r=en+i,s=t.length;i>0&&(t[r-1][Un]=e),i<s-en?(e[Un]=t[r],Vg(t,en+i,e)):(t.push(e),e[Un]=null),e[kt]=t;let o=e[bo];o!==null&&t!==o&&$b(o,e);let a=e[hi];a!==null&&a.insertView(n),ju(e),e[Se]|=128}function $b(n,e){let t=n[cs],r=e[kt][kt][En];e[En]!==r&&(n[Se]|=Rd.HasTransplantedViews),t===null?n[cs]=[e]:t.push(e)}function sy(n,e){let t=n[cs],i=t.indexOf(e);t.splice(i,1)}function td(n,e){if(n.length<=en)return;let t=en+e,i=n[t];if(i){let r=i[bo];r!==null&&r!==n&&sy(r,i),e>0&&(n[t-1][Un]=i[Un]);let s=Za(n,en+e);Hb(i[Ue],i);let o=s[hi];o!==null&&o.detachView(s[Ue]),i[kt]=null,i[Un]=null,i[Se]&=-129}return i}function oy(n,e){if(!(e[Se]&256)){let t=e[Pt];t.destroyNode&&wc(n,e,t,3,null,null),Wb(e)}}function Pu(n,e){if(e[Se]&256)return;let t=tt(null);try{e[Se]&=-129,e[Se]|=256,e[dr]&&Mm(e[dr]),Xb(n,e),qb(n,e),e[Ue].type===1&&e[Pt].destroy();let i=e[bo];if(i!==null&&ei(e[kt])){i!==e[kt]&&sy(i,e);let r=e[hi];r!==null&&r.detachView(n)}yb(e)}finally{tt(t)}}function qb(n,e){let t=n.cleanup,i=e[ho];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[ho]=null);let r=e[Oi];if(r!==null){e[Oi]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function Xb(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof vo)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Xn(4,a,c);try{c.call(a)}finally{Xn(5,a,c)}}else{Xn(4,r,s);try{s.call(r)}finally{Xn(5,r,s)}}}}}function Yb(n,e,t){return Zb(n,e.parent,t)}function Zb(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[un];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===Zn.None||s===Zn.Emulated)return null}return Tn(i,t)}}function ic(n,e,t,i,r){n.insertBefore(e,t,i,r)}function ay(n,e,t){n.appendChild(e,t)}function gg(n,e,t,i,r){i!==null?ic(n,e,t,i,r):ay(n,e,t)}function Jb(n,e,t,i){n.removeChild(e,t,i)}function Xd(n,e){return n.parentNode(e)}function Kb(n,e){return n.nextSibling(e)}function Qb(n,e,t){return tS(n,e,t)}function eS(n,e,t){return n.type&40?Tn(n,t):null}var tS=eS,vg;function cy(n,e,t,i){let r=Yb(n,i,e),s=e[Pt],o=i.parent||e[Bn],a=Qb(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)gg(s,r,t[c],a,!1);else gg(s,r,t,a,!1);vg!==void 0&&vg(s,i,e,t,r)}function $a(n,e){if(e!==null){let t=e.type;if(t&3)return Tn(e,n);if(t&4)return nd(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return $a(n,i);{let r=n[e.index];return ei(r)?nd(-1,r):Kn(r)}}else{if(t&32)return jd(e,n)()||Kn(n[e.index]);{let i=ly(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=go(n[En]);return $a(r,i)}else return $a(n,e.next)}}}return null}function ly(n,e){if(e!==null){let i=n[En][Bn],r=e.projection;return i.projection[r]}return null}function nd(n,e){let t=en+n+1;if(t<e.length){let i=e[t],r=i[Ue].firstChild;if(r!==null)return $a(i,r)}return e[fi]}function Yd(n,e,t){let i=Xd(n,e);i&&Jb(n,i,e,t)}function uy(n){n.textContent=""}function Zd(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&us(Kn(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)Zd(n,e,t.child,i,r,s,!1),is(e,n,r,a,s);else if(c&32){let l=jd(t,i),u;for(;u=l();)is(e,n,r,u,s);is(e,n,r,a,s)}else c&16?nS(n,e,i,t,r,s):is(e,n,r,a,s);t=o?t.projectionNext:t.next}}function wc(n,e,t,i,r,s){Zd(t,i,n.firstChild,e,r,s,!1)}function nS(n,e,t,i,r,s){let o=t[En],c=o[Bn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];is(e,n,r,u,s)}else{let l=c,u=o[kt];tc(i)&&(l.flags|=128),Zd(n,e,l,u,r,s,!0)}}function iS(n,e,t,i,r){let s=t[fi],o=Kn(t);s!==o&&is(e,n,i,s,r);for(let a=en;a<t.length;a++){let c=t[a];wc(c[Ue],c,n,e,i,s)}}function rS(n,e,t){n.setAttribute(e,"style",t)}function dy(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function hy(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&Bu(n,e,i),r!==null&&dy(n,e,r),s!==null&&rS(n,e,s)}var fy={};function sS(n,e,t,i){if(!i)if((e[Se]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Ga(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Wa(e,s,0,t)}hr(t)}function hs(n,e=Ge.Default){let t=Wt();if(t===null)return Je(n,e);let i=ti();return Lv(i,t,wn(n),e)}function py(n,e,t,i,r,s){let o=tt(null);try{let a=null;r&Fi.SignalBased&&(a=e[i][vm]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&Fi.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):sv(e,a,i,s)}finally{tt(o)}}function oS(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)hr(~r);else{let s=r,o=t[++i],a=t[++i];zw(o,s);let c=e[s];a(2,c)}}}finally{hr(-1)}}function bc(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[un]=r,d[Se]=i|4|128|8|64,(l!==null||n&&n[Se]&2048)&&(d[Se]|=2048),dv(d),d[kt]=d[wo]=n,d[di]=t,d[Jn]=o||n&&n[Jn],d[Pt]=a||n&&n[Pt],d[as]=c||n&&n[as]||null,d[Bn]=s,d[pc]=gb(),d[kn]=u,d[ev]=l,d[En]=e.type==2?n[En]:d,d}function Jd(n,e,t,i,r){let s=n.data[e];if(s===null)s=aS(n,e,t,i,r),Vw()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=Lw();s.injectorIndex=o===null?-1:o.injectorIndex}return gc(s,!0),s}function aS(n,e,t,i,r){let s=pv(),o=mv(),a=o?s:s&&s.parent,c=n.data[e]=gS(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function my(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function gy(n,e,t,i,r){let s=Ww(),o=i&2;try{hr(-1),o&&e.length>dn&&sS(n,e,dn,!1),Xn(o?2:0,r),t(i,r)}finally{hr(s),Xn(o?3:1,r)}}function vy(n,e,t){if(nv(e)){let i=tt(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{tt(i)}}}function cS(n,e,t){fv()&&(SS(n,e,t,Tn(t,e)),(t.flags&64)===64&&wy(n,e,t))}function lS(n,e,t=Tn){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function yy(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=_y(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function _y(n,e,t,i,r,s,o,a,c,l,u){let d=dn+i,h=d+r,f=uS(d,h),g=typeof l=="function"?l():l;return f[Ue]={type:n,blueprint:f,template:t,queries:null,viewQuery:a,declTNode:e,data:f.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function uS(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:fy);return t}function dS(n,e,t,i){let s=i.get(ty,ey)||t===Zn.ShadowDom,o=n.selectRootElement(e,s);return hS(o),o}function hS(n){xy(n)}var xy=()=>null;function fS(n){Hv(n)?uy(n):Nb(n)}function pS(){xy=fS}function mS(n,e,t,i){let r=Sy(e);r.push(t),n.firstCreatePass&&Ey(n).push(i,r.length-1)}function gS(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return To()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function yg(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=Fi.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?_g(i,t,l,a,c):_g(i,t,l,a)}return i}function _g(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function vS(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],h=t?t.get(d):null,f=h?h.inputs:null,g=h?h.outputs:null;c=yg(0,d.inputs,u,c,f),l=yg(1,d.outputs,u,l,g);let v=c!==null&&o!==null&&!Cd(e)?NS(c,u,o):null;a.push(v)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function yS(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function _S(n,e,t,i,r,s,o,a){let c=Tn(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(Qd(n,t,u,i,r),So(e)&&xS(t,e.index)):e.type&3?(i=yS(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function xS(n,e){let t=mr(e,n);t[Se]&16||(t[Se]|=64)}function MS(n,e,t,i){if(fv()){let r=i===null?null:{"":-1},s=TS(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&My(n,e,t,o,r,a),r&&CS(t,i,r)}t.mergedAttrs=Td(t.mergedAttrs,t.attrs)}function My(n,e,t,i,r,s){for(let l=0;l<i.length;l++)nb(Rv(t,e),n,i[l].type);DS(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=my(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=Td(t.mergedAttrs,u.hostAttrs),IS(n,t,e,c,u),AS(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}vS(n,t,s)}function wS(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;bS(o)!=a&&o.push(a),o.push(t,i,s)}}function bS(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function SS(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;So(t)&&RS(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||Rv(t,e),us(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=ls(e,n,a,t);if(us(l,e),o!==null&&PS(e,a-r,l,c,t,o),Eo(c)){let u=mr(t.index,e);u[di]=ls(e,n,a,t)}}}function wy(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=Hw();try{hr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];$u(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&ES(c,l)}}finally{hr(-1),$u(o)}}function ES(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function TS(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(ZM(e,o.selectors,!1))if(i||(i=[]),Eo(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;id(n,e,c)}else i.unshift(o),id(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function id(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function CS(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Te(-301,!1);i.push(e[r],s)}}}function AS(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Eo(e)&&(t[""]=n)}}function DS(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function IS(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=os(r.type,!0)),o=new vo(s,Eo(r),hs);n.blueprint[i]=o,t[i]=o,wS(n,e,i,my(n,t,r.hostVars,fy),r)}function RS(n,e,t){let i=Tn(e,n),r=yy(t),s=n[Jn].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=Kd(n,bc(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function PS(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];py(i,t,c,l,u,d)}}function NS(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function OS(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function by(n,e){let t=n.contentQueries;if(t!==null){let i=tt(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Od(s),a.contentQueries(2,e[o],o)}}}finally{tt(i)}}}function Kd(n,e){return n[fo]?n[ag][Un]=e:n[fo]=e,n[ag]=e,e}function rd(n,e,t){Od(0);let i=tt(null);try{e(n,t)}finally{tt(i)}}function Sy(n){return n[ho]||(n[ho]=[])}function Ey(n){return n.cleanup||(n.cleanup=[])}function Ty(n,e){let t=n[as],i=t?t.get(pi,null):null;i&&i.handleError(e)}function Qd(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];py(u,l,i,a,c,r)}}function LS(n,e){let t=mr(e,n),i=t[Ue];FS(i,t);let r=t[un];r!==null&&t[kn]===null&&(t[kn]=Gd(r,t[as])),eh(i,t,t[di])}function FS(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function eh(n,e,t){Ld(e);try{let i=n.viewQuery;i!==null&&rd(1,i,t);let r=n.template;r!==null&&gy(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[hi]?.finishViewCreation(n),n.staticContentQueries&&by(n,e),n.staticViewQueries&&rd(2,n.viewQuery,t);let s=n.components;s!==null&&US(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Se]&=-5,Fd()}}function US(n,e){for(let t=0;t<e.length;t++)LS(n,e[t])}function kS(n,e,t,i){let r=tt(null);try{let s=e.tView,a=n[Se]&4096?4096:16,c=bc(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[bo]=l;let u=n[hi];return u!==null&&(c[hi]=u.createEmbeddedView(s)),eh(s,c,t),c}finally{tt(r)}}function xg(n,e){return!e||e.firstChild===null||tc(n)}function BS(n,e,t,i=!0){let r=e[Ue];if(jb(r,e,n,t),i){let o=nd(t,n),a=e[Pt],c=Xd(a,n[fi]);c!==null&&Gb(r,n[Bn],a,e,c,o)}let s=e[kn];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function rc(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(Kn(s)),ei(s)&&VS(s,i);let o=t.type;if(o&8)rc(n,e,t.child,i);else if(o&32){let a=jd(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=ly(e,t);if(Array.isArray(a))i.push(...a);else{let c=go(e[En]);rc(c[Ue],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function VS(n,e){for(let t=en;t<n.length;t++){let i=n[t],r=i[Ue].firstChild;r!==null&&rc(i[Ue],i,r,e)}n[fi]!==n[un]&&e.push(n[fi])}var Cy=[];function zS(n){return n[dr]??HS(n)}function HS(n){let e=Cy.pop()??Object.create(WS);return e.lView=n,e}function GS(n){n.lView[dr]!==n&&(n.lView=null,Cy.push(n))}var WS=_t(ve({},ym),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{mo(n.lView)},consumerOnSignalRead(){this.lView[dr]=this}}),Ay=100;function Dy(n,e=!0,t=0){let i=n[Jn],r=i.rendererFactory,s=!1;s||r.begin?.();try{jS(n,t)}catch(o){throw e&&Ty(n,o),o}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function jS(n,e){sd(n,e);let t=0;for(;Nd(n);){if(t===Ay)throw new Te(103,!1);t++,sd(n,1)}}function $S(n,e,t,i){let r=e[Se];if((r&256)===256)return;let s=!1;!s&&e[Jn].inlineEffectRunner?.flush(),Ld(e);let o=null,a=null;!s&&qS(n)&&(a=zS(e),o=_m(a));try{dv(e),kw(n.bindingStartIndex),t!==null&&gy(n,e,t,2,i);let c=(r&3)===3;if(!s)if(c){let d=n.preOrderCheckHooks;d!==null&&Ga(e,d,null)}else{let d=n.preOrderHooks;d!==null&&Wa(e,d,0,null),Cu(e,0)}if(XS(e),Iy(e,0),n.contentQueries!==null&&by(n,e),!s)if(c){let d=n.contentCheckHooks;d!==null&&Ga(e,d)}else{let d=n.contentHooks;d!==null&&Wa(e,d,1),Cu(e,1)}oS(n,e);let l=n.components;l!==null&&Py(e,l,0);let u=n.viewQuery;if(u!==null&&rd(2,u,i),!s)if(c){let d=n.viewCheckHooks;d!==null&&Ga(e,d)}else{let d=n.viewHooks;d!==null&&Wa(e,d,2),Cu(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Tu]){for(let d of e[Tu])d();e[Tu]=null}s||(e[Se]&=-73)}catch(c){throw mo(e),c}finally{a!==null&&(xm(a,o),GS(a)),Fd()}}function qS(n){return n.type!==2}function Iy(n,e){for(let t=Wv(n);t!==null;t=jv(t))for(let i=en;i<t.length;i++){let r=t[i];Ry(r,e)}}function XS(n){for(let e=Wv(n);e!==null;e=jv(e)){if(!(e[Se]&Rd.HasTransplantedViews))continue;let t=e[cs];for(let i=0;i<t.length;i++){let r=t[i],s=r[kt];Cw(r)}}}function YS(n,e,t){let i=mr(e,n);Ry(i,t)}function Ry(n,e){Pd(n)&&sd(n,e)}function sd(n,e){let i=n[Ue],r=n[Se],s=n[dr],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&ou(s)),s&&(s.dirty=!1),n[Se]&=-9217,o)$S(i,n,i.template,n[di]);else if(r&8192){Iy(n,1);let a=i.components;a!==null&&Py(n,a,1)}}function Py(n,e,t){for(let i=0;i<e.length;i++)YS(n,e[i],t)}function th(n){for(n[Jn].changeDetectionScheduler?.notify();n;){n[Se]|=64;let e=go(n);if(rv(n)&&!e)return n;n=e}return null}var fr=class{get rootNodes(){let e=this._lView,t=e[Ue];return rc(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[di]}set context(e){this._lView[di]=e}get destroyed(){return(this._lView[Se]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[kt];if(ei(e)){let t=e[Ka],i=t?t.indexOf(this):-1;i>-1&&(td(e,i),Za(t,i))}this._attachedToViewContainer=!1}oy(this._lView[Ue],this._lView)}onDestroy(e){hv(this._lView,e)}markForCheck(){th(this._cdRefInjectingView||this._lView)}detach(){this._lView[Se]&=-129}reattach(){ju(this._lView),this._lView[Se]|=128}detectChanges(){this._lView[Se]|=1024,Dy(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Te(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,ry(this._lView[Ue],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Te(902,!1);this._appRef=e,ju(this._lView)}},yo=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=KS;let n=e;return n})(),ZS=yo,JS=class extends ZS{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=kS(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new fr(r)}};function KS(){return nh(ti(),Wt())}function nh(n,e){return n.type&4?new JS(e,n,ds(n,e)):null}function Ny(n){let e=n[po]??[],i=n[kt][Pt];for(let r of e)QS(r,i);n[po]=cr}function QS(n,e){let t=0,i=n.firstChild;if(i){let r=n.data[nc];for(;t<r;){let s=i.nextSibling;Yd(e,i,!1),i=s,t++}}}function Oy(n){Ny(n);for(let e=en;e<n.length;e++)sc(n[e])}function eE(n){let e=n[kn]?.i18nNodes;if(e){let t=n[Pt];for(let i of e.values())Yd(t,i,!1);n[kn].i18nNodes=void 0}}function sc(n){eE(n);let e=n[Ue];for(let t=dn;t<e.bindingStartIndex;t++)if(ei(n[t])){let i=n[t];Oy(i)}else Li(n[t])&&sc(n[t])}function tE(n){let e=n._views;for(let t of e){let i=Rb(t);if(i!==null&&i[un]!==null)if(Li(i))sc(i);else{let r=i[un];sc(r),Oy(i)}}}var nE=new RegExp(`^(\\d+)*(${Yv}|${Xv})*(.*)`);function iE(n){let e=n.match(nE),[t,i,r,s]=e,o=i?parseInt(i,10):r,a=[];for(let[c,l,u]of s.matchAll(/(f|n)(\d*)/g)){let d=parseInt(u,10)||1;a.push(l,d)}return[o,...a]}function rE(n){return!n.prev&&n.parent?.type===8}function Nu(n){return n.index-dn}function sE(n,e){let t=n.i18nNodes;if(t){let i=t.get(e);return i&&t.delete(e),i}return null}function Sc(n,e,t,i){let r=Nu(i),s=sE(n,r);if(!s){let o=n.data[Eb];if(o?.[r])s=aE(o[r],t);else if(e.firstChild===i)s=n.firstChild;else{let a=i.prev===null,c=i.prev??i.parent;if(rE(i)){let l=Nu(i.parent);s=ed(n,l)}else{let l=Tn(c,t);if(a)s=l.firstChild;else{let u=Nu(c),d=ed(n,u);if(c.type===2&&d){let f=Wd(n,u)+1;s=Ec(f,d)}else s=l.nextSibling}}}}return s}function Ec(n,e){let t=e;for(let i=0;i<n;i++)t=t.nextSibling;return t}function oE(n,e){let t=n;for(let i=0;i<e.length;i+=2){let r=e[i],s=e[i+1];for(let o=0;o<s;o++)switch(r){case Qu.FirstChild:t=t.firstChild;break;case Qu.NextSibling:t=t.nextSibling;break}}return t}function aE(n,e){let[t,...i]=iE(n),r;if(t===Xv)r=e[En][un];else if(t===Yv)r=Vb(e[En][un]);else{let s=Number(t);r=Kn(e[s+dn])}return oE(r,i)}function cE(n,e){let t=[];for(let i of e)for(let r=0;r<(i[Zv]??1);r++){let s={data:i,firstChild:null};i[nc]>0&&(s.firstChild=n,n=Ec(i[nc],n)),t.push(s)}return[n,t]}var Ly=()=>null;function lE(n,e){let t=n[po];return!e||t===null||t.length===0?null:t[0].data[Sb]===e?t.shift():(Ny(n),null)}function uE(){Ly=lE}function Mg(n,e){return Ly(n,e)}var od=class{},ad=class{},oc=class{};function dE(n){let e=Error(`No component factory found for ${ln(n)}.`);return e[hE]=n,e}var hE="ngComponent";var cd=class{resolveComponentFactory(e){throw dE(e)}},Tc=(()=>{let e=class e{};e.NULL=new cd;let n=e;return n})(),_o=class{};var fE=(()=>{let e=class e{};e.\u0275prov=Pe({token:e,providedIn:"root",factory:()=>null});let n=e;return n})(),Ou={};var wg=new Set;function Co(n){wg.has(n)||(wg.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function bg(...n){}function pE(){let n=typeof oo.requestAnimationFrame=="function",e=oo[n?"requestAnimationFrame":"setTimeout"],t=oo[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}var xt=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new bn(!1),this.onMicrotaskEmpty=new bn(!1),this.onStable=new bn(!1),this.onError=new bn(!1),typeof Zone>"u")throw new Te(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=pE().nativeRequestAnimationFrame,vE(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Te(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Te(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,mE,bg,bg);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},mE={};function ih(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function gE(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(oo,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,ld(n),n.isCheckStableRunning=!0,ih(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),ld(n))}function vE(n){let e=()=>{gE(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(yE(a))return t.invokeTask(r,s,o,a);try{return Sg(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Eg(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return Sg(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),Eg(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,ld(n),ih(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function ld(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Sg(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Eg(n){n._nesting--,ih(n)}function yE(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}var Fy=(()=>{let e=class e{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let i=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let r of i)r()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=Pe({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function ud(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Jm(r,a);else if(s==2){let c=a,l=e[++o];i=Jm(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var ac=class extends Tc{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=ur(e);return new xo(t,this.ngModule)}};function Tg(n){let e=[];for(let t in n){if(!n.hasOwnProperty(t))continue;let i=n[t];i!==void 0&&e.push({propName:Array.isArray(i)?i[0]:i,templateName:t})}return e}function _E(n){let e=n.toLowerCase();return e==="svg"?lv:e==="math"?Mw:null}var dd=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=hc(i);let r=this.injector.get(e,Ou,i);return r!==Ou||t===Ou?r:this.parentInjector.get(e,t,i)}},xo=class extends oc{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=Tg(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return Tg(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=ew(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=tt(null);try{r=r||this.ngModule;let o=r instanceof Sn?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new dd(e,o):e,c=a.get(_o,null);if(c===null)throw new Te(407,!1);let l=a.get(fE,null),u=a.get(Fy,null),d=a.get(od,null),h={rendererFactory:c,sanitizer:l,inlineEffectRunner:null,afterRenderEventManager:u,changeDetectionScheduler:d},f=c.createRenderer(null,this.componentDef),g=this.componentDef.selectors[0][0]||"div",v=i?dS(f,i,this.componentDef.encapsulation,a):Mc(f,g,_E(g)),m=512;this.componentDef.signals?m|=4096:this.componentDef.onPush||(m|=16);let p=null;v!==null&&(p=Gd(v,a,!0));let S=_y(0,null,null,1,0,null,null,null,null,null,null),M=bc(null,S,null,m,null,null,h,f,a,null,p);Ld(M);let b,N;try{let A=this.componentDef,T,O=null;A.findHostDirectiveDefs?(T=[],O=new Map,A.findHostDirectiveDefs(A,T,O),T.push(A)):T=[A];let w=xE(M,v),x=ME(w,v,A,T,M,h,f);N=uv(S,dn),v&&SE(f,A,v,i),t!==void 0&&EE(N,this.ngContentSelectors,t),b=bE(x,A,T,O,M,[TE]),eh(S,M,null)}finally{Fd()}return new hd(this.componentType,b,ds(N,M),M,N)}finally{tt(s)}}},hd=class extends ad{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new fr(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;Qd(s[Ue],s,r,e,t),this.previousInputValues.set(e,t);let o=mr(this._tNode.index,s);th(o)}}get injector(){return new ar(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function xE(n,e){let t=n[Ue],i=dn;return n[i]=e,Jd(t,i,2,"#host",null)}function ME(n,e,t,i,r,s,o){let a=r[Ue];wE(i,n,e,o);let c=null;e!==null&&(c=Gd(e,r[as]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=bc(r,yy(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&id(a,n,i.length-1),Kd(r,d),r[n.index]=d}function wE(n,e,t,i){for(let r of n)e.mergedAttrs=Td(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(ud(e,e.mergedAttrs,!0),t!==null&&hy(i,t,e))}function bE(n,e,t,i,r,s){let o=ti(),a=r[Ue],c=Tn(o,r);My(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,h=ls(r,a,d,o);us(h,r)}wy(a,r,o),c&&us(c,r);let l=ls(r,a,o.directiveStart+o.componentOffset,o);if(n[di]=r[di]=l,s!==null)for(let u of s)u(l,e);return vy(a,o,r),l}function SE(n,e,t,i){if(i)Bu(n,t,["ng-version","17.3.11"]);else{let{attrs:r,classes:s}=tw(e.selectors[0]);r&&Bu(n,t,r),s&&s.length>0&&dy(n,t,s.join(" "))}}function EE(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function TE(){let n=ti();Tv(Wt()[Ue],n)}var fs=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=CE;let n=e;return n})();function CE(){let n=ti();return ky(n,Wt())}var AE=fs,Uy=class extends AE{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return ds(this._hostTNode,this._hostLView)}get injector(){return new ar(this._hostTNode,this._hostLView)}get parentInjector(){let e=kd(this._hostTNode,this._hostLView);if(Av(e)){let t=ec(e,this._hostLView),i=Qa(e),r=t[Ue].data[i+8];return new ar(r,t)}else return new ar(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Cg(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-en}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=Mg(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,xg(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!vw(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new xo(ur(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let v=(o?l:this.parentInjector).get(Sn,null);v&&(s=v)}let u=ur(c.componentType??{}),d=Mg(this._lContainer,u?.id??null),h=d?.firstChild??null,f=c.create(l,r,h,s);return this.insertImpl(f.hostView,a,xg(this._hostTNode,d)),f}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(Tw(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[kt],l=new Uy(c,c[Bn],c[kt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return BS(o,r,s,i),e.attachToViewContainerRef(),Vg(Lu(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Cg(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=td(this._lContainer,t);i&&(Za(Lu(this._lContainer),t),oy(i[Ue],i))}detach(e){let t=this._adjustIndex(e,-1),i=td(this._lContainer,t);return i&&Za(Lu(this._lContainer),t)!=null?new fr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Cg(n){return n[Ka]}function Lu(n){return n[Ka]||(n[Ka]=[])}function ky(n,e){let t,i=e[n.index];return ei(i)?t=i:(t=OS(i,e,null,n),e[n.index]=t,Kd(e,t)),By(t,e,n,i),new Uy(t,n,e)}function DE(n,e){let t=n[Pt],i=t.createComment(""),r=Tn(e,n),s=Xd(t,r);return ic(t,s,i,Kb(t,r),!1),i}var By=zy,Vy=()=>!1;function zy(n,e,t,i){if(n[fi])return;let r;t.type&8?r=Kn(i):r=DE(e,t),n[fi]=r}function IE(n,e,t){if(n[fi]&&n[po])return!0;let i=t[kn],r=e.index-dn;if(!i||pb(e)||xc(i,r))return!1;let o=ed(i,r),a=i.data[Hd]?.[r],[c,l]=cE(o,a);return n[fi]=c,n[po]=l,!0}function RE(n,e,t,i){Vy(n,t,e)||zy(n,e,t,i)}function PE(){By=RE,Vy=IE}var fd=class n{constructor(e){this.queryList=e,this.matches=null}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},pd=class n{constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)rh(e,t).matches!==null&&this.queries[t].setDirty()}},md=class{constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=VE(e):this.predicate=e}},gd=class n{constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},vd=class n{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,NE(t,s)),this.matchTNodeWithReadOption(e,t,ja(t,e,s,!1,!1))}else i===yo?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,ja(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===mi||r===fs||r===yo&&t.type&4)this.addMatch(t.index,-2);else{let s=ja(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function NE(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function OE(n,e){return n.type&11?ds(n,e):n.type&4?nh(n,e):null}function LE(n,e,t,i){return t===-1?OE(e,n):t===-2?FE(n,e,i):ls(n,n[Ue],t,e)}function FE(n,e,t){if(t===mi)return ds(e,n);if(t===yo)return nh(e,n);if(t===fs)return ky(e,n)}function Hy(n,e,t,i){let r=e[hi].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(LE(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function yd(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=Hy(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=en;d<u.length;d++){let h=u[d];h[bo]===h[kt]&&yd(h[Ue],h,l,i)}if(u[cs]!==null){let d=u[cs];for(let h=0;h<d.length;h++){let f=d[h];yd(f[Ue],f,l,i)}}}}}return i}function UE(n,e){return n[hi].queries[e].queryList}function kE(n,e,t){let i=new Ju((t&4)===4);return mS(n,e,i,i.destroy),(e[hi]??=new pd).queries.push(new fd(i))-1}function BE(n,e,t){let i=gr();return i.firstCreatePass&&(zE(i,new md(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),kE(i,Wt(),e)}function VE(n){return n.split(",").map(e=>e.trim())}function zE(n,e,t){n.queries===null&&(n.queries=new gd),n.queries.track(new vd(e,t))}function rh(n,e){return n.queries.getByIndex(e)}function HE(n,e){let t=n[Ue],i=rh(t,e);return i.crossesNgTemplate?yd(t,n,e,[]):Hy(t,n,i,e)}var Ui=class{},Mo=class{};var _d=class extends Ui{constructor(e,t,i){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new ac(this);let r=Xg(e);this._bootstrapComponents=iy(r.bootstrap),this._r3Injector=kv(e,t,[{provide:Ui,useValue:this},{provide:Tc,useValue:this.componentFactoryResolver},...i],ln(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},xd=class extends Mo{constructor(e){super(),this.moduleType=e}create(e){return new _d(this.moduleType,e,[])}};var cc=class extends Ui{constructor(e){super(),this.componentFactoryResolver=new ac(this),this.instance=null;let t=new uo([...e.providers,{provide:Ui,useValue:this},{provide:Tc,useValue:this.componentFactoryResolver}],e.parent||Id(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function sh(n,e,t=null){return new cc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var Ao=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new Gt(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function GE(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function Do(n){return(n.flags&32)===32}var WE=Gy;function Gy(n,e,t,i){return ni(!0),e[Pt].createComment("")}function jE(n,e,t,i){let r=e[kn],s=!r||To()||Do(t)||xc(r,i);if(ni(s),s)return Gy(n,e,t,i);let o=r.data[bb]?.[i]??null;o!==null&&t.tView!==null&&t.tView.ssrId===null&&(t.tView.ssrId=o);let a=Sc(r,n,e,t);_c(r,i,a);let c=Wd(r,i);return Ec(c,a)}function $E(){WE=jE}function oh(n,e,t){let i=Wt(),r=Bw();if(GE(i,r,e)){let s=gr(),o=jw();_S(s,o,i,n,e,i[Pt],t,!1)}return oh}function Ag(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";Qd(n,t,s[o],o,i)}function qE(n,e,t,i,r,s){let o=e.consts,a=lg(o,r),c=Jd(e,n,2,i,a);return MS(e,t,c,lg(o,s)),c.attrs!==null&&ud(c,c.attrs,!1),c.mergedAttrs!==null&&ud(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function yt(n,e,t,i){let r=Wt(),s=gr(),o=dn+n,a=r[Pt],c=s.firstCreatePass?qE(o,s,r,e,t,i):s.data[o],l=Wy(s,r,c,a,e,n);r[o]=l;let u=iv(c);return gc(c,!0),hy(a,l,c),!Do(c)&&Ev()&&cy(s,r,l,c),Dw()===0&&us(l,r),Iw(),u&&(cS(s,r,c),vy(s,c,r)),i!==null&&lS(r,c),yt}function Bt(){let n=ti();mv()?Fw():(n=n.parent,gc(n,!1));let e=n;Pw(e)&&Ow(),Rw();let t=gr();return t.firstCreatePass&&(Tv(t,n),nv(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&Zw(e)&&Ag(t,e,Wt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&Jw(e)&&Ag(t,e,Wt(),e.stylesWithoutHost,!1),Bt}function Nt(n,e,t,i){return yt(n,e,t,i),Bt(),Nt}var Wy=(n,e,t,i,r,s)=>(ni(!0),Mc(i,r,bv()));function XE(n,e,t,i,r,s){let o=e[kn],a=!o||To()||Do(t)||xc(o,s);if(ni(a),a)return Mc(i,r,bv());let c=Sc(o,n,e,t);return Qv(o,s)&&_c(o,s,c.nextSibling),o&&(zv(t)||Hv(c))&&So(t)&&(Nw(t),uy(c)),c}function YE(){Wy=XE}var ZE=(n,e,t,i)=>(ni(!0),qd(e[Pt],""));function JE(n,e,t,i){let r,s=e[kn],o=!s||To()||Do(t);if(ni(o),o)return qd(e[Pt],"");let a=Sc(s,n,e,t),c=Ob(s,i);return _c(s,i,a),r=Ec(c,a),r}function KE(){ZE=JE}var lc="en-US";var QE=lc;function eT(n){typeof n=="string"&&(QE=n.toLowerCase().replace(/_/g,"-"))}function jy(n,e,t){let i=n[Pt];switch(t){case Node.COMMENT_NODE:return qd(i,e);case Node.TEXT_NODE:return $d(i,e);case Node.ELEMENT_NODE:return Mc(i,e,null)}}var tT=(n,e,t,i)=>(ni(!0),jy(n,t,i));function nT(n,e,t,i){return ni(!0),jy(n,t,i)}function iT(){tT=nT}function Cc(n,e,t,i){let r=Wt(),s=gr(),o=ti();return sT(s,r,r[Pt],o,n,e,i),Cc}function rT(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[ho],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function sT(n,e,t,i,r,s,o){let a=iv(i),l=n.firstCreatePass&&Ey(n),u=e[di],d=Sy(e),h=!0;if(i.type&3||o){let v=Tn(i,e),m=o?o(v):v,p=d.length,S=o?b=>o(Kn(b[i.index])):i.index,M=null;if(!o&&a&&(M=rT(n,e,r,i.index)),M!==null){let b=M.__ngLastListenerFn__||M;b.__ngNextListenerFn__=s,M.__ngLastListenerFn__=s,h=!1}else{s=Ig(i,e,u,s,!1);let b=t.listen(m,r,s);d.push(s,b),l&&l.push(r,S,p,p+1)}}else s=Ig(i,e,u,s,!1);let f=i.outputs,g;if(h&&f!==null&&(g=f[r])){let v=g.length;if(v)for(let m=0;m<v;m+=2){let p=g[m],S=g[m+1],N=e[p][S].subscribe(s),A=d.length;d.push(s,N),l&&l.push(r,i.index,A,-(A+1))}}}function Dg(n,e,t,i){let r=tt(null);try{return Xn(6,e,t),t(i)!==!1}catch(s){return Ty(n,s),!1}finally{Xn(7,e,t),tt(r)}}function Ig(n,e,t,i,r){return function s(o){if(o===Function)return i;let a=n.componentOffset>-1?mr(n.index,e):e;th(a);let c=Dg(e,t,i,o),l=s.__ngNextListenerFn__;for(;l;)c=Dg(e,t,l,o)&&c,l=l.__ngNextListenerFn__;return r&&c===!1&&o.preventDefault(),c}}function $y(n,e,t){BE(n,e,t)}function ah(n){let e=Wt(),t=gr(),i=gv();Od(i+1);let r=rh(t,i);if(n.dirty&&Ew(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=HE(e,i);n.reset(s,ub),n.notifyOnChanges()}return!0}return!1}function ch(){return UE(Wt(),gv())}function lh(n){let e=Uw();return Sw(e,dn+n)}function hn(n,e=""){let t=Wt(),i=gr(),r=n+dn,s=i.firstCreatePass?Jd(i,r,1,e,null):i.data[r],o=qy(i,t,s,e,n);t[r]=o,Ev()&&cy(i,t,o,s),gc(s,!1)}var qy=(n,e,t,i,r)=>(ni(!0),$d(e[Pt],i));function oT(n,e,t,i,r){let s=e[kn],o=!s||To()||Do(t)||xc(s,r);return ni(o),o?$d(e[Pt],i):Sc(s,n,e,t)}function aT(){qy=oT}var cT=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=Jg(!1,i.type),s=r.length>0?sh([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,s)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=Pe({token:e,providedIn:"environment",factory:()=>new e(Je(Sn))});let n=e;return n})();function ii(n){Co("NgStandalone"),n.getStandaloneInjector=e=>e.get(cT).getOrCreateStandaloneInjector(n)}var Ac=(()=>{let e=class e{log(i){console.log(i)}warn(i){console.warn(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})();var Xy=new Ve("");function Io(n){return!!n&&typeof n.then=="function"}function Yy(n){return!!n&&typeof n.subscribe=="function"}var Zy=new Ve(""),Jy=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=ie(Zy,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let s of this.appInits){let o=s();if(Io(o))i.push(o);else if(Yy(o)){let a=new Promise((c,l)=>{o.subscribe({complete:c,error:l})});i.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(s=>{this.reject(s)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),ps=new Ve("");function lT(){wm(()=>{throw new Te(600,!1)})}function uT(n){return n.isBoundToModule}function dT(n,e,t){try{let i=t();return Io(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Bi=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=ie(Bv),this.afterRenderEffectManager=ie(Fy),this.externalTestViews=new Set,this.beforeRender=new Yt,this.afterTick=new Yt,this.componentTypes=[],this.components=[],this.isStable=ie(Ao).hasPendingTasks.pipe(je(i=>!i)),this._injector=ie(Sn)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let s=i instanceof oc;if(!this._injector.get(Jy).done){let f=!s&&qg(i),g=!1;throw new Te(405,g)}let a;s?a=i:a=this._injector.get(Tc).resolveComponentFactory(i),this.componentTypes.push(a.componentType);let c=uT(a)?void 0:this._injector.get(Ui),l=r||a.selector,u=a.create(vr.NULL,[],l,c),d=u.location.nativeElement,h=u.injector.get(Xy,null);return h?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),Fu(this.components,u),h?.unregisterApplication(d)}),this._loadComponent(u),u}tick(){this._tick(!0)}_tick(i){if(this._runningTick)throw new Te(101,!1);let r=tt(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(i)}catch(s){this.internalErrorHandler(s)}finally{this.afterTick.next(),this._runningTick=!1,tt(r)}}detectChangesInAttachedViews(i){let r=0,s=this.afterRenderEffectManager;for(;;){if(r===Ay)throw new Te(103,!1);if(i){let o=r===0;this.beforeRender.next(o);for(let{_lView:a,notifyErrorHandler:c}of this._views)hT(a,o,c)}if(r++,s.executeInternalCallbacks(),![...this.externalTestViews.keys(),...this._views].some(({_lView:o})=>Md(o))&&(s.execute(),![...this.externalTestViews.keys(),...this._views].some(({_lView:o})=>Md(o))))break}}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;Fu(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(ps,[]);[...this._bootstrapListeners,...r].forEach(s=>s(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>Fu(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new Te(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Fu(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var za;function uh(n){za??=new WeakMap;let e=za.get(n);if(e)return e;let t=n.isStable.pipe(Ln(i=>i)).toPromise().then(()=>{});return za.set(n,t),n.onDestroy(()=>za?.delete(n)),t}function hT(n,e,t){!e&&!Md(n)||fT(n,t,e)}function Md(n){return Nd(n)}function fT(n,e,t){let i;t?(i=0,n[Se]|=1024):n[Se]&64?i=0:i=1,Dy(n,e,i)}var wd=class{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},dh=(()=>{let e=class e{compileModuleSync(i){return new xd(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){let r=this.compileModuleSync(i),s=Xg(i),o=iy(s.declarations).reduce((a,c)=>{let l=ur(c);return l&&a.push(new xo(l)),a},[]);return new wd(r,o)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var pT=(()=>{let e=class e{constructor(){this.zone=ie(xt),this.applicationRef=ie(Bi)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function mT(n){return[{provide:xt,useFactory:n},{provide:lr,multi:!0,useFactory:()=>{let e=ie(pT,{optional:!0});return()=>e.initialize()}},{provide:lr,multi:!0,useFactory:()=>{let e=ie(_T);return()=>{e.initialize()}}},{provide:Bv,useFactory:gT}]}function gT(){let n=ie(xt),e=ie(pi);return t=>n.runOutsideAngular(()=>e.handleError(t))}function vT(n){let e=mT(()=>new xt(yT(n)));return pr([[],e])}function yT(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var _T=(()=>{let e=class e{constructor(){this.subscription=new Dt,this.initialized=!1,this.zone=ie(xt),this.pendingTasks=ie(Ao)}initialize(){if(this.initialized)return;this.initialized=!0;let i=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(i=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{xt.assertNotInAngularZone(),queueMicrotask(()=>{i!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(i),i=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{xt.assertInAngularZone(),i??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function xT(){return typeof $localize<"u"&&$localize.locale||lc}var hh=new Ve("",{providedIn:"root",factory:()=>ie(hh,Ge.Optional|Ge.SkipSelf)||xT()});var Ky=new Ve("");var qa=null;function MT(n=[],e){return vr.create({name:e,providers:[{provide:fc,useValue:"platform"},{provide:Ky,useValue:new Set([()=>qa=null])},...n]})}function wT(n=[]){if(qa)return qa;let e=MT(n);return qa=e,lT(),bT(e),e}function bT(n){n.get(Vd,null)?.forEach(t=>t())}var Ro=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=ST;let n=e;return n})();function ST(n){return ET(ti(),Wt(),(n&16)===16)}function ET(n,e,t){if(So(n)&&!t){let i=mr(n.index,e);return new fr(i,i)}else if(n.type&47){let i=e[En];return new fr(i,e)}return null}function Qy(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=wT(i),s=[vT(),...t||[]],a=new cc({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,c=a.get(xt);return c.run(()=>{a.resolveInjectorInitializers();let l=a.get(pi,null),u;c.runOutsideAngular(()=>{u=c.onError.subscribe({next:f=>{l.handleError(f)}})});let d=()=>a.destroy(),h=r.get(Ky);return h.add(d),a.onDestroy(()=>{u.unsubscribe(),h.delete(d)}),dT(l,c,()=>{let f=a.get(Jy);return f.runInitializers(),f.donePromise.then(()=>{let g=a.get(hh,lc);eT(g||lc);let v=a.get(Bi);return e!==void 0&&v.bootstrap(e),v})})})}catch(e){return Promise.reject(e)}}var Rg=!1,TT=!1;function CT(){Rg||(Rg=!0,Ib(),YE(),aT(),KE(),$E(),PE(),uE(),pS(),iT())}function AT(n,e){return uh(n)}function e0(){return pr([{provide:Ba,useFactory:()=>{let n=!0;return Va()&&(n=!!ie(yr,{optional:!0})?.get(Jv,null)),n&&Co("NgHydration"),n}},{provide:lr,useValue:()=>{TT=!!ie(Lb,{optional:!0}),Va()&&ie(Ba)&&(DT(),CT())},multi:!0},{provide:ty,useFactory:()=>Va()&&ie(Ba)},{provide:ps,useFactory:()=>{if(Va()&&ie(Ba)){let n=ie(Bi),e=ie(vr);return()=>{AT(n,e).then(()=>{tE(n)})}}return()=>{}},multi:!0}])}function DT(){let n=vc(),e;for(let t of n.body.childNodes)if(t.nodeType===Node.COMMENT_NODE&&t.textContent?.trim()===Ab){e=t;break}if(!e)throw new Te(-507,!1)}var a0=null;function ms(){return a0}function c0(n){a0??=n}var Dc=class{};var fn=new Ve(""),l0=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:()=>ie(OT),providedIn:"platform"});let n=e;return n})();var OT=(()=>{let e=class e extends l0{constructor(){super(),this._doc=ie(fn),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ms().getBaseHref(this._doc)}onPopState(i){let r=ms().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",i,!1),()=>r.removeEventListener("popstate",i)}onHashChange(i){let r=ms().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",i,!1),()=>r.removeEventListener("hashchange",i)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(i){this._location.pathname=i}pushState(i,r,s){this._history.pushState(i,r,s)}replaceState(i,r,s){this._history.replaceState(i,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(i=0){this._history.go(i)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:()=>new e,providedIn:"platform"});let n=e;return n})();function u0(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function t0(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function Mr(n){return n&&n[0]!=="?"?"?"+n:n}var Rc=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:()=>ie(d0),providedIn:"root"});let n=e;return n})(),LT=new Ve(""),d0=(()=>{let e=class e extends Rc{constructor(i,r){super(),this._platformLocation=i,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??ie(fn).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}prepareExternalUrl(i){return u0(this._baseHref,i)}path(i=!1){let r=this._platformLocation.pathname+Mr(this._platformLocation.search),s=this._platformLocation.hash;return s&&i?`${r}${s}`:r}pushState(i,r,s,o){let a=this.prepareExternalUrl(s+Mr(o));this._platformLocation.pushState(i,r,a)}replaceState(i,r,s,o){let a=this.prepareExternalUrl(s+Mr(o));this._platformLocation.replaceState(i,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(Je(l0),Je(LT,8))},e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Po=(()=>{let e=class e{constructor(i){this._subject=new bn,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=i;let r=this._locationStrategy.getBaseHref();this._basePath=kT(t0(n0(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(i=!1){return this.normalize(this._locationStrategy.path(i))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(i,r=""){return this.path()==this.normalize(i+Mr(r))}normalize(i){return e.stripTrailingSlash(UT(this._basePath,n0(i)))}prepareExternalUrl(i){return i&&i[0]!=="/"&&(i="/"+i),this._locationStrategy.prepareExternalUrl(i)}go(i,r="",s=null){this._locationStrategy.pushState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+Mr(r)),s)}replaceState(i,r="",s=null){this._locationStrategy.replaceState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+Mr(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(i=0){this._locationStrategy.historyGo?.(i)}onUrlChange(i){return this._urlChangeListeners.push(i),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(i);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(i="",r){this._urlChangeListeners.forEach(s=>s(i,r))}subscribe(i,r,s){return this._subject.subscribe({next:i,error:r,complete:s})}};e.normalizeQueryParams=Mr,e.joinWithSlash=u0,e.stripTrailingSlash=t0,e.\u0275fac=function(r){return new(r||e)(Je(Rc))},e.\u0275prov=Pe({token:e,factory:()=>FT(),providedIn:"root"});let n=e;return n})();function FT(){return new Po(Je(Rc))}function UT(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function n0(n){return n.replace(/\/index.html$/,"")}function kT(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function fh(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var ph="browser",BT="server";function h0(n){return n===ph}function No(n){return n===BT}var Ic=class{};var Nc=class n{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let r=t.slice(0,i),s=r.toLowerCase(),o=t.slice(i+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(o):this.headers.set(s,[o])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,i)=>{this.setHeaderEntries(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...i),this.headers.set(t,r);break;case"d":let s=e.value;if(!s)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}setHeaderEntries(e,t){let i=(Array.isArray(t)?t:[t]).map(s=>s.toString()),r=e.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var x0=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(x0||{}),mh=class{constructor(e,t=M0.Ok,i="OK"){this.headers=e.headers||new Nc,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||i,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}};var Oc=class n extends mh{constructor(e={}){super(e),this.type=x0.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}};var M0=function(n){return n[n.Continue=100]="Continue",n[n.SwitchingProtocols=101]="SwitchingProtocols",n[n.Processing=102]="Processing",n[n.EarlyHints=103]="EarlyHints",n[n.Ok=200]="Ok",n[n.Created=201]="Created",n[n.Accepted=202]="Accepted",n[n.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",n[n.NoContent=204]="NoContent",n[n.ResetContent=205]="ResetContent",n[n.PartialContent=206]="PartialContent",n[n.MultiStatus=207]="MultiStatus",n[n.AlreadyReported=208]="AlreadyReported",n[n.ImUsed=226]="ImUsed",n[n.MultipleChoices=300]="MultipleChoices",n[n.MovedPermanently=301]="MovedPermanently",n[n.Found=302]="Found",n[n.SeeOther=303]="SeeOther",n[n.NotModified=304]="NotModified",n[n.UseProxy=305]="UseProxy",n[n.Unused=306]="Unused",n[n.TemporaryRedirect=307]="TemporaryRedirect",n[n.PermanentRedirect=308]="PermanentRedirect",n[n.BadRequest=400]="BadRequest",n[n.Unauthorized=401]="Unauthorized",n[n.PaymentRequired=402]="PaymentRequired",n[n.Forbidden=403]="Forbidden",n[n.NotFound=404]="NotFound",n[n.MethodNotAllowed=405]="MethodNotAllowed",n[n.NotAcceptable=406]="NotAcceptable",n[n.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",n[n.RequestTimeout=408]="RequestTimeout",n[n.Conflict=409]="Conflict",n[n.Gone=410]="Gone",n[n.LengthRequired=411]="LengthRequired",n[n.PreconditionFailed=412]="PreconditionFailed",n[n.PayloadTooLarge=413]="PayloadTooLarge",n[n.UriTooLong=414]="UriTooLong",n[n.UnsupportedMediaType=415]="UnsupportedMediaType",n[n.RangeNotSatisfiable=416]="RangeNotSatisfiable",n[n.ExpectationFailed=417]="ExpectationFailed",n[n.ImATeapot=418]="ImATeapot",n[n.MisdirectedRequest=421]="MisdirectedRequest",n[n.UnprocessableEntity=422]="UnprocessableEntity",n[n.Locked=423]="Locked",n[n.FailedDependency=424]="FailedDependency",n[n.TooEarly=425]="TooEarly",n[n.UpgradeRequired=426]="UpgradeRequired",n[n.PreconditionRequired=428]="PreconditionRequired",n[n.TooManyRequests=429]="TooManyRequests",n[n.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",n[n.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",n[n.InternalServerError=500]="InternalServerError",n[n.NotImplemented=501]="NotImplemented",n[n.BadGateway=502]="BadGateway",n[n.ServiceUnavailable=503]="ServiceUnavailable",n[n.GatewayTimeout=504]="GatewayTimeout",n[n.HttpVersionNotSupported=505]="HttpVersionNotSupported",n[n.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",n[n.InsufficientStorage=507]="InsufficientStorage",n[n.LoopDetected=508]="LoopDetected",n[n.NotExtended=510]="NotExtended",n[n.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",n}(M0||{});var zT=new Ve("");var f0="b",p0="h",m0="s",g0="st",v0="u",y0="rt",Pc=new Ve(""),HT=["GET","HEAD"];function GT(n,e){let d=ie(Pc),{isCacheActive:t}=d,i=mm(d,["isCacheActive"]),{transferCache:r,method:s}=n;if(!t||s==="POST"&&!i.includePostRequests&&!r||s!=="POST"&&!HT.includes(s)||r===!1||i.filter?.(n)===!1)return e(n);let o=ie(yr),a=jT(n),c=o.get(a,null),l=i.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(l=r.includeHeaders),c){let{[f0]:h,[y0]:f,[p0]:g,[m0]:v,[g0]:m,[v0]:p}=c,S=h;switch(f){case"arraybuffer":S=new TextEncoder().encode(h).buffer;break;case"blob":S=new Blob([h]);break}let M=new Nc(g);return Ae(new Oc({body:S,headers:M,status:v,statusText:m,url:p}))}let u=No(ie(Cn));return e(n).pipe(Rt(h=>{h instanceof Oc&&u&&o.set(a,{[f0]:h.body,[p0]:WT(h.headers,l),[m0]:h.status,[g0]:h.statusText,[v0]:h.url||"",[y0]:n.responseType})}))}function WT(n,e){if(!e)return{};let t={};for(let i of e){let r=n.getAll(i);r!==null&&(t[i]=r)}return t}function _0(n){return[...n.keys()].sort().map(e=>`${e}=${n.getAll(e)}`).join("&")}function jT(n){let{params:e,method:t,responseType:i,url:r}=n,s=_0(e),o=n.serializeBody();o instanceof URLSearchParams?o=_0(o):typeof o!="string"&&(o="");let a=[t,i,r,o,s].join("|"),c=$T(a);return c}function $T(n){let e=0;for(let t of n)e=Math.imul(31,e)+t.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function w0(n){return[{provide:Pc,useFactory:()=>(Co("NgHttpTransferCache"),ve({isCacheActive:!0},n))},{provide:zT,useValue:GT,multi:!0,deps:[yr,Pc]},{provide:ps,multi:!0,useFactory:()=>{let e=ie(Bi),t=ie(Pc);return()=>{uh(e).then(()=>{t.isCacheActive=!1})}}}]}var yh=class extends Dc{constructor(){super(...arguments),this.supportsDOMEvents=!0}},_h=class n extends yh{static makeCurrent(){c0(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=XT();return t==null?null:YT(t)}resetBaseElement(){Oo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return fh(document.cookie,e)}},Oo=null;function XT(){return Oo=Oo||document.querySelector("base"),Oo?Oo.getAttribute("href"):null}function YT(n){return new URL(n,document.baseURI).pathname}var ZT=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:e.\u0275fac});let n=e;return n})(),xh=new Ve(""),T0=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(s=>{s.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,s){return this._findPluginFor(r).addEventListener(i,r,s)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(o=>o.supports(i)),!r)throw new Te(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(Je(xh),Je(xt))},e.\u0275prov=Pe({token:e,factory:e.\u0275fac});let n=e;return n})(),Lc=class{constructor(e){this._doc=e}},gh="ng-app-id",C0=(()=>{let e=class e{constructor(i,r,s,o={}){this.doc=i,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=No(o),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(s=>s.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${gh}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(i,r){let s=this.styleRef;if(s.has(i)){let o=s.get(i);return o.usage+=r,o.usage}return s.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===i)return s.delete(r),o.removeAttribute(gh),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(gh,this.appId),i.appendChild(a),a}}addStyleToHost(i,r){let s=this.getStyleElement(i,r),o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(Je(fn),Je(yc),Je(zd,8),Je(Cn))},e.\u0275prov=Pe({token:e,factory:e.\u0275fac});let n=e;return n})(),vh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},bh=/%COMP%/g,A0="%COMP%",JT=`_nghost-${A0}`,KT=`_ngcontent-${A0}`,QT=!0,eC=new Ve("",{providedIn:"root",factory:()=>QT});function tC(n){return KT.replace(bh,n)}function nC(n){return JT.replace(bh,n)}function D0(n,e){return e.map(t=>t.replace(bh,n))}var b0=(()=>{let e=class e{constructor(i,r,s,o,a,c,l,u=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=No(c),this.defaultRenderer=new Lo(i,a,l,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Zn.ShadowDom&&(r=_t(ve({},r),{encapsulation:Zn.Emulated}));let s=this.getOrCreateRenderer(i,r);return s instanceof Fc?s.applyToHost(i):s instanceof Fo&&s.applyStyles(),s}getOrCreateRenderer(i,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(r.encapsulation){case Zn.Emulated:o=new Fc(l,u,r,this.appId,d,a,c,h);break;case Zn.ShadowDom:return new Mh(l,u,i,r,a,c,this.nonce,h);default:o=new Fo(l,u,r,d,a,c,h);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(Je(T0),Je(C0),Je(yc),Je(eC),Je(fn),Je(Cn),Je(xt),Je(zd))},e.\u0275prov=Pe({token:e,factory:e.\u0275fac});let n=e;return n})(),Lo=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(vh[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(S0(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(S0(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Te(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=vh[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=vh[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(_r.DashCase|_r.Important)?e.style.setProperty(t,i,r&_r.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&_r.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=ms().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function S0(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Mh=class extends Lo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=D0(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Fo=class extends Lo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?D0(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Fc=class extends Fo{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=tC(l),this.hostAttr=nC(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},iC=(()=>{let e=class e extends Lc{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,s){return i.addEventListener(r,s,!1),()=>this.removeEventListener(i,r,s)}removeEventListener(i,r,s){return i.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(Je(fn))},e.\u0275prov=Pe({token:e,factory:e.\u0275fac});let n=e;return n})(),E0=["alt","control","meta","shift"],rC={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},sC={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},oC=(()=>{let e=class e extends Lc{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,s){let o=e.parseEventName(r),a=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ms().onAndCancel(i,o.domEventName,a))}static parseEventName(i){let r=i.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),E0.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),a+=u+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(i,r){let s=rC[i.key]||i.key,o="";return r.indexOf("code.")>-1&&(s=i.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),E0.forEach(a=>{if(a!==s){let c=sC[a];c(i)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(i,r,s){return o=>{e.matchEventFullKeyCode(o,i)&&s.runGuarded(()=>r(o))}}static _normalizeKey(i){return i==="esc"?"escape":i}};e.\u0275fac=function(r){return new(r||e)(Je(fn))},e.\u0275prov=Pe({token:e,factory:e.\u0275fac});let n=e;return n})();function I0(n,e){return Qy(ve({rootComponent:n},aC(e)))}function aC(n){return{appProviders:[...hC,...n?.providers??[]],platformProviders:dC}}function cC(){_h.makeCurrent()}function lC(){return new pi}function uC(){return qv(document),document}var dC=[{provide:Cn,useValue:ph},{provide:Vd,useValue:cC,multi:!0},{provide:fn,useFactory:uC,deps:[]}];var hC=[{provide:fc,useValue:"root"},{provide:pi,useFactory:lC,deps:[]},{provide:xh,useClass:iC,multi:!0,deps:[fn,xt,Cn]},{provide:xh,useClass:oC,multi:!0,deps:[fn]},b0,C0,T0,{provide:_o,useExisting:b0},{provide:Ic,useClass:ZT,deps:[]},[]];var R0=(()=>{let e=class e{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};e.\u0275fac=function(r){return new(r||e)(Je(fn))},e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var wh=function(n){return n[n.NoHttpTransferCache=0]="NoHttpTransferCache",n[n.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",n}(wh||{});function P0(...n){let e=[],t=new Set,i=t.has(wh.HttpTransferCacheOptions);for(let{\u0275providers:r,\u0275kind:s}of n)t.add(s),r.length&&e.push(r);return pr([[],e0(),t.has(wh.NoHttpTransferCache)||i?[]:w0({}),e])}var Le="primary",Jo=Symbol("RouteTitle"),Ah=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function xs(n){return new Ah(n)}function pC(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function mC(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!ri(n[t],e[t]))return!1;return!0}function ri(n,e){let t=n?Dh(n):void 0,i=e?Dh(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!k0(n[r],e[r]))return!1;return!0}function Dh(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function k0(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function B0(n){return n.length>0?n[n.length-1]:null}function Hi(n){return yu(n)?n:Io(n)?Tt(Promise.resolve(n)):Ae(n)}var gC={exact:z0,subset:H0},V0={exact:vC,subset:yC,ignored:()=>!0};function N0(n,e,t){return gC[t.paths](n.root,e.root,t.matrixParams)&&V0[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function vC(n,e){return ri(n,e)}function z0(n,e,t){if(!br(n.segments,e.segments)||!Bc(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!z0(n.children[i],e.children[i],t))return!1;return!0}function yC(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>k0(n[t],e[t]))}function H0(n,e,t){return G0(n,e,e.segments,t)}function G0(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!br(r,t)||e.hasChildren()||!Bc(r,t,i))}else if(n.segments.length===t.length){if(!br(n.segments,t)||!Bc(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!H0(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!br(n.segments,r)||!Bc(n.segments,r,i)||!n.children[Le]?!1:G0(n.children[Le],e,s,i)}}function Bc(n,e,t){return e.every((i,r)=>V0[t](n[r].parameters,i.parameters))}var Vi=class{constructor(e=new ot([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=xs(this.queryParams),this._queryParamMap}toString(){return MC.serialize(this)}},ot=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Vc(this)}},wr=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=xs(this.parameters),this._parameterMap}toString(){return j0(this)}};function _C(n,e){return br(n,e)&&n.every((t,i)=>ri(t.parameters,e[i].parameters))}function br(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function xC(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Le&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Le&&(t=t.concat(e(r,i)))}),t}var tf=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:()=>new Hc,providedIn:"root"});let n=e;return n})(),Hc=class{parse(e){let t=new Rh(e);return new Vi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Uo(e.root,!0)}`,i=SC(e.queryParams),r=typeof e.fragment=="string"?`#${wC(e.fragment)}`:"";return`${t}${i}${r}`}},MC=new Hc;function Vc(n){return n.segments.map(e=>j0(e)).join("/")}function Uo(n,e){if(!n.hasChildren())return Vc(n);if(e){let t=n.children[Le]?Uo(n.children[Le],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Le&&i.push(`${r}:${Uo(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=xC(n,(i,r)=>r===Le?[Uo(n.children[Le],!1)]:[`${r}:${Uo(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Le]!=null?`${Vc(n)}/${t[0]}`:`${Vc(n)}/(${t.join("//")})`}}function W0(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Uc(n){return W0(n).replace(/%3B/gi,";")}function wC(n){return encodeURI(n)}function Ih(n){return W0(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function zc(n){return decodeURIComponent(n)}function O0(n){return zc(n.replace(/\+/g,"%20"))}function j0(n){return`${Ih(n.path)}${bC(n.parameters)}`}function bC(n){return Object.entries(n).map(([e,t])=>`;${Ih(e)}=${Ih(t)}`).join("")}function SC(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Uc(t)}=${Uc(r)}`).join("&"):`${Uc(t)}=${Uc(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var EC=/^[^\/()?;#]+/;function Sh(n){let e=n.match(EC);return e?e[0]:""}var TC=/^[^\/()?;=#]+/;function CC(n){let e=n.match(TC);return e?e[0]:""}var AC=/^[^=?&#]+/;function DC(n){let e=n.match(AC);return e?e[0]:""}var IC=/^[^&#]+/;function RC(n){let e=n.match(IC);return e?e[0]:""}var Rh=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ot([],{}):new ot([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Le]=new ot(e,t)),i}parseSegment(){let e=Sh(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Te(4009,!1);return this.capture(e),new wr(zc(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=CC(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Sh(this.remaining);r&&(i=r,this.capture(i))}e[zc(t)]=zc(i)}parseQueryParam(e){let t=DC(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=RC(this.remaining);o&&(i=o,this.capture(i))}let r=O0(t),s=O0(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Sh(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Te(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Le);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Le]:new ot([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Te(4011,!1)}};function $0(n){return n.segments.length>0?new ot([],{[Le]:n}):n}function q0(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=q0(r);if(i===Le&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new ot(n.segments,e);return PC(t)}function PC(n){if(n.numberOfChildren===1&&n.children[Le]){let e=n.children[Le];return new ot(n.segments.concat(e.segments),e.children)}return n}function Ms(n){return n instanceof Vi}function NC(n,e,t=null,i=null){let r=X0(n);return Y0(r,e,t,i)}function X0(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new ot(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=$0(i);return e??r}function Y0(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return Eh(r,r,r,t,i);let s=OC(e);if(s.toRoot())return Eh(r,r,new ot([],{}),t,i);let o=LC(s,r,n),a=o.processChildren?Vo(o.segmentGroup,o.index,s.commands):J0(o.segmentGroup,o.index,s.commands);return Eh(r,o.segmentGroup,a,t,i)}function Gc(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Go(n){return typeof n=="object"&&n!=null&&n.outlets}function Eh(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=Z0(n,e,t);let a=$0(q0(o));return new Vi(a,s,r)}function Z0(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=Z0(s,e,t)}),new ot(n.segments,i)}var Wc=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Gc(i[0]))throw new Te(4003,!1);let r=i.find(Go);if(r&&r!==B0(i))throw new Te(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function OC(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Wc(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Wc(t,e,i)}var ys=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function LC(n,e,t){if(n.isAbsolute)return new ys(e,!0,0);if(!t)return new ys(e,!1,NaN);if(t.parent===null)return new ys(t,!0,0);let i=Gc(n.commands[0])?0:1,r=t.segments.length-1+i;return FC(t,r,n.numberOfDoubleDots)}function FC(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Te(4005,!1);r=i.segments.length}return new ys(i,!1,r-s)}function UC(n){return Go(n[0])?n[0].outlets:{[Le]:n}}function J0(n,e,t){if(n??=new ot([],{}),n.segments.length===0&&n.hasChildren())return Vo(n,e,t);let i=kC(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new ot(n.segments.slice(0,i.pathIndex),{});return s.children[Le]=new ot(n.segments.slice(i.pathIndex),n.children),Vo(s,0,r)}else return i.match&&r.length===0?new ot(n.segments,{}):i.match&&!n.hasChildren()?Ph(n,e,t):i.match?Vo(n,0,r):Ph(n,e,t)}function Vo(n,e,t){if(t.length===0)return new ot(n.segments,{});{let i=UC(t),r={};if(Object.keys(i).some(s=>s!==Le)&&n.children[Le]&&n.numberOfChildren===1&&n.children[Le].segments.length===0){let s=Vo(n.children[Le],e,t);return new ot(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=J0(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new ot(n.segments,r)}}function kC(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Go(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!F0(c,l,o))return s;i+=2}else{if(!F0(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Ph(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Go(s)){let c=BC(s.outlets);return new ot(i,c)}if(r===0&&Gc(t[0])){let c=n.segments[e];i.push(new wr(c.path,L0(t[0]))),r++;continue}let o=Go(s)?s.outlets[Le]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Gc(a)?(i.push(new wr(o,L0(a))),r+=2):(i.push(new wr(o,{})),r++)}return new ot(i,{})}function BC(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Ph(new ot([],{}),0,i))}),e}function L0(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function F0(n,e,t){return n==t.path&&ri(e,t.parameters)}var zo="imperative",jt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(jt||{}),An=class{constructor(e,t){this.id=e,this.url=t}},Wo=class extends An{constructor(e,t,i="imperative",r=null){super(e,t),this.type=jt.NavigationStart,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Sr=class extends An{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=jt.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},mn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(mn||{}),Nh=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(Nh||{}),zi=class extends An{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=jt.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Er=class extends An{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=jt.NavigationSkipped}},jo=class extends An{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=jt.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},jc=class extends An{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=jt.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Oh=class extends An{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=jt.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Lh=class extends An{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=jt.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Fh=class extends An{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=jt.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Uh=class extends An{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=jt.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},kh=class{constructor(e){this.route=e,this.type=jt.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Bh=class{constructor(e){this.route=e,this.type=jt.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Vh=class{constructor(e){this.snapshot=e,this.type=jt.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},zh=class{constructor(e){this.snapshot=e,this.type=jt.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Hh=class{constructor(e){this.snapshot=e,this.type=jt.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Gh=class{constructor(e){this.snapshot=e,this.type=jt.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var $o=class{},qo=class{constructor(e){this.url=e}};var Wh=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new Jc,this.attachRef=null}},Jc=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(i,r){let s=this.getOrCreateContext(i);s.outlet=r,this.contexts.set(i,s)}onChildOutletDestroyed(i){let r=this.getContext(i);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let r=this.getContext(i);return r||(r=new Wh,this.contexts.set(i,r)),r}getContext(i){return this.contexts.get(i)||null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),$c=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=jh(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=jh(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=$h(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return $h(e,this._root).map(t=>t.value)}};function jh(n,e){if(n===e.value)return e;for(let t of e.children){let i=jh(n,t);if(i)return i}return null}function $h(n,e){if(n===e.value)return[e];for(let t of e.children){let i=$h(n,t);if(i.length)return i.unshift(e),i}return[]}var pn=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function vs(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var qc=class extends $c{constructor(e,t){super(e),this.snapshot=t,rf(this,e)}toString(){return this.snapshot.toString()}};function K0(n){let e=VC(n),t=new Gt([new wr("",{})]),i=new Gt({}),r=new Gt({}),s=new Gt({}),o=new Gt(""),a=new ws(t,i,s,o,r,Le,n,e.root);return a.snapshot=e.root,new qc(new pn(a,[]),e)}function VC(n){let e={},t={},i={},r="",s=new Xo([],e,i,r,t,Le,n,null,{});return new Xc("",new pn(s,[]))}var ws=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(je(l=>l[Jo]))??Ae(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(je(e=>xs(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(je(e=>xs(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function nf(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:ve(ve({},e.params),n.params),data:ve(ve({},e.data),n.data),resolve:ve(ve(ve(ve({},n.data),e.data),r?.data),n._resolvedData)}:i={params:ve({},n.params),data:ve({},n.data),resolve:ve(ve({},n.data),n._resolvedData??{})},r&&e_(r)&&(i.resolve[Jo]=r.title),i}var Xo=class{get title(){return this.data?.[Jo]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=xs(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=xs(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Xc=class extends $c{constructor(e,t){super(t),this.url=e,rf(this,t)}toString(){return Q0(this._root)}};function rf(n,e){e.value._routerState=n,e.children.forEach(t=>rf(n,t))}function Q0(n){let e=n.children.length>0?` { ${n.children.map(Q0).join(", ")} } `:"";return`${n.value}${e}`}function Th(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,ri(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),ri(e.params,t.params)||n.paramsSubject.next(t.params),mC(e.url,t.url)||n.urlSubject.next(t.url),ri(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function qh(n,e){let t=ri(n.params,e.params)&&_C(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||qh(n.parent,e.parent))}function e_(n){return typeof n.title=="string"||n.title===null}var sf=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=Le,this.activateEvents=new bn,this.deactivateEvents=new bn,this.attachEvents=new bn,this.detachEvents=new bn,this.parentContexts=ie(Jc),this.location=ie(fs),this.changeDetector=ie(Ro),this.environmentInjector=ie(Sn),this.inputBinder=ie(of,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:r,previousValue:s}=i.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Te(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Te(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Te(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,r){this.activated=i,this._activatedRoute=r,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,r){if(this.isActivated)throw new Te(4013,!1);this._activatedRoute=i;let s=this.location,a=i.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new Xh(i,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=Ad({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[mc]});let n=e;return n})(),Xh=class n{__ngOutletInjector(e){return new n(this.route,this.childContexts,e)}constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i}get(e,t){return e===ws?this.route:e===Jc?this.childContexts:this.parent.get(e,t)}},of=new Ve("");function zC(n,e,t){let i=Yo(n,e._root,t?t._root:void 0);return new qc(i,e)}function Yo(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=HC(n,e,t);return new pn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Yo(n,a)),o}}let i=GC(e.value),r=e.children.map(s=>Yo(n,s));return new pn(i,r)}}function HC(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Yo(n,i,r);return Yo(n,i)})}function GC(n){return new ws(new Gt(n.url),new Gt(n.params),new Gt(n.queryParams),new Gt(n.fragment),new Gt(n.data),n.outlet,n.component,n)}var t_="ngNavigationCancelingError";function n_(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Ms(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=i_(!1,mn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function i_(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[t_]=!0,t.cancellationCode=e,t}function WC(n){return r_(n)&&Ms(n.url)}function r_(n){return!!n&&n[t_]}var jC=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Qn({type:e,selectors:[["ng-component"]],standalone:!0,features:[ii],decls:1,vars:0,template:function(r,s){r&1&&Nt(0,"router-outlet")},dependencies:[sf],encapsulation:2});let n=e;return n})();function $C(n,e){return n.providers&&!n._injector&&(n._injector=sh(n.providers,e,`Route: ${n.path}`)),n._injector??e}function af(n){let e=n.children&&n.children.map(af),t=e?_t(ve({},n),{children:e}):ve({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Le&&(t.component=jC),t}function si(n){return n.outlet||Le}function qC(n,e){let t=n.filter(i=>si(i)===e);return t.push(...n.filter(i=>si(i)!==e)),t}function Ko(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var XC=(n,e,t,i)=>je(r=>(new Yh(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Yh=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Th(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=vs(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=vs(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=vs(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=vs(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Gh(s.value.snapshot))}),e.children.length&&this.forwardEvent(new zh(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Th(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Th(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=Ko(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,i)}},Yc=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},_s=class{constructor(e,t){this.component=e,this.route=t}};function YC(n,e,t){let i=n._root,r=e?e._root:null;return ko(i,r,t,[i.value])}function ZC(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Ss(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Og(n)?n:e.get(n):i}function ko(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=vs(e);return n.children.forEach(o=>{JC(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Ho(a,t.getContext(o),r)),r}function JC(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=KC(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Yc(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?ko(n,e,a?a.children:null,i,r):ko(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new _s(a.outlet.component,o))}else o&&Ho(e,a,r),r.canActivateChecks.push(new Yc(i)),s.component?ko(n,null,a?a.children:null,i,r):ko(n,null,t,i,r);return r}function KC(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!br(n.url,e.url);case"pathParamsOrQueryParamsChange":return!br(n.url,e.url)||!ri(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!qh(n,e)||!ri(n.queryParams,e.queryParams);case"paramsChange":default:return!qh(n,e)}}function Ho(n,e,t){let i=vs(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Ho(o,e.children.getContext(s),t):Ho(o,null,t):Ho(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new _s(e.outlet.component,r)):t.canDeactivateChecks.push(new _s(null,r)):t.canDeactivateChecks.push(new _s(null,r))}function Qo(n){return typeof n=="function"}function QC(n){return typeof n=="boolean"}function eA(n){return n&&Qo(n.canLoad)}function tA(n){return n&&Qo(n.canActivate)}function nA(n){return n&&Qo(n.canActivateChild)}function iA(n){return n&&Qo(n.canDeactivate)}function rA(n){return n&&Qo(n.canMatch)}function s_(n){return n instanceof li||n?.name==="EmptyError"}var kc=Symbol("INITIAL_VALUE");function bs(){return xn(n=>Fa(n.map(e=>e.pipe(ui(1),bu(kc)))).pipe(je(e=>{for(let t of e)if(t!==!0){if(t===kc)return kc;if(t===!1||t instanceof Vi)return t}return!0}),_n(e=>e!==kc),ui(1)))}function sA(n,e){return It(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Ae(_t(ve({},t),{guardsResult:!0})):oA(o,i,r,n).pipe(It(a=>a&&QC(a)?aA(i,s,n,e):Ae(a)),je(a=>_t(ve({},t),{guardsResult:a})))})}function oA(n,e,t,i){return Tt(n).pipe(It(r=>hA(r.component,r.route,t,e,i)),Ln(r=>r!==!0,!0))}function aA(n,e,t,i){return Tt(e).pipe(or(r=>Kr(lA(r.route.parent,i),cA(r.route,i),dA(n,r.path,t),uA(n,r.route,t))),Ln(r=>r!==!0,!0))}function cA(n,e){return n!==null&&e&&e(new Hh(n)),Ae(!0)}function lA(n,e){return n!==null&&e&&e(new Vh(n)),Ae(!0)}function uA(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Ae(!0);let r=i.map(s=>Ua(()=>{let o=Ko(e)??t,a=Ss(s,o),c=tA(a)?a.canActivate(e,n):ki(o,()=>a(e,n));return Hi(c).pipe(Ln())}));return Ae(r).pipe(bs())}function dA(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>ZC(o)).filter(o=>o!==null).map(o=>Ua(()=>{let a=o.guards.map(c=>{let l=Ko(o.node)??t,u=Ss(c,l),d=nA(u)?u.canActivateChild(i,n):ki(l,()=>u(i,n));return Hi(d).pipe(Ln())});return Ae(a).pipe(bs())}));return Ae(s).pipe(bs())}function hA(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Ae(!0);let o=s.map(a=>{let c=Ko(e)??r,l=Ss(a,c),u=iA(l)?l.canDeactivate(n,e,t,i):ki(c,()=>l(n,e,t,i));return Hi(u).pipe(Ln())});return Ae(o).pipe(bs())}function fA(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Ae(!0);let s=r.map(o=>{let a=Ss(o,n),c=eA(a)?a.canLoad(e,t):ki(n,()=>a(e,t));return Hi(c)});return Ae(s).pipe(bs(),o_(i))}function o_(n){return pu(Rt(e=>{if(Ms(e))throw n_(n,e)}),je(e=>e===!0))}function pA(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Ae(!0);let s=r.map(o=>{let a=Ss(o,n),c=rA(a)?a.canMatch(e,t):ki(n,()=>a(e,t));return Hi(c)});return Ae(s).pipe(bs(),o_(i))}var Zo=class{constructor(e){this.segmentGroup=e||null}},Zc=class extends Error{constructor(e){super(),this.urlTree=e}};function gs(n){return Jr(new Zo(n))}function mA(n){return Jr(new Te(4e3,!1))}function gA(n){return Jr(i_(!1,mn.GuardRejected))}var Zh=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Ae(i);if(r.numberOfChildren>1||!r.children[Le])return mA(e.redirectTo);r=r.children[Le]}}applyRedirectCommands(e,t,i){let r=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t.startsWith("/"))throw new Zc(r);return r}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Vi(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new ot(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Te(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},Jh={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function vA(n,e,t,i,r){let s=cf(n,e,t);return s.matched?(i=$C(e,i),pA(i,e,t,r).pipe(je(o=>o===!0?s:ve({},Jh)))):Ae(s)}function cf(n,e,t){if(e.path==="**")return yA(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?ve({},Jh):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||pC)(t,n,e);if(!r)return ve({},Jh);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?ve(ve({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function yA(n){return{matched:!0,parameters:n.length>0?B0(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function U0(n,e,t,i){return t.length>0&&MA(n,t,i)?{segmentGroup:new ot(e,xA(i,new ot(t,n.children))),slicedSegments:[]}:t.length===0&&wA(n,t,i)?{segmentGroup:new ot(n.segments,_A(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new ot(n.segments,n.children),slicedSegments:t}}function _A(n,e,t,i){let r={};for(let s of t)if(Kc(n,e,s)&&!i[si(s)]){let o=new ot([],{});r[si(s)]=o}return ve(ve({},i),r)}function xA(n,e){let t={};t[Le]=e;for(let i of n)if(i.path===""&&si(i)!==Le){let r=new ot([],{});t[si(i)]=r}return t}function MA(n,e,t){return t.some(i=>Kc(n,e,i)&&si(i)!==Le)}function wA(n,e,t){return t.some(i=>Kc(n,e,i))}function Kc(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function bA(n,e,t,i){return si(n)!==i&&(i===Le||!Kc(e,t,n))?!1:cf(e,n,t).matched}function SA(n,e,t){return e.length===0&&!n.children[t]}var Kh=class{};function EA(n,e,t,i,r,s,o="emptyOnly"){return new Qh(n,e,t,i,r,o,s).recognize()}var TA=31,Qh=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Zh(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new Te(4002,`'${e.segmentGroup}'`)}recognize(){let e=U0(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(je(t=>{let i=new Xo([],Object.freeze({}),Object.freeze(ve({},this.urlTree.queryParams)),this.urlTree.fragment,{},Le,this.rootComponentType,null,{}),r=new pn(i,t),s=new Xc("",r),o=NC(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root,null),{state:s,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,Le).pipe(Ri(i=>{if(i instanceof Zc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Zo?this.noMatchError(i):i}))}inheritParamsAndData(e,t){let i=e.value,r=nf(i,t,this.paramsInheritanceStrategy);i.params=Object.freeze(r.params),i.data=Object.freeze(r.data),e.children.forEach(s=>this.inheritParamsAndData(s,i))}processSegmentGroup(e,t,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i):this.processSegment(e,t,i,i.segments,r,!0).pipe(je(s=>s instanceof pn?[s]:[]))}processChildren(e,t,i){let r=[];for(let s of Object.keys(i.children))s==="primary"?r.unshift(s):r.push(s);return Tt(r).pipe(or(s=>{let o=i.children[s],a=qC(t,s);return this.processSegmentGroup(e,a,o,s)}),wu((s,o)=>(s.push(...o),s)),Pi(null),Mu(),It(s=>{if(s===null)return gs(i);let o=a_(s);return CA(o),Ae(o)}))}processSegment(e,t,i,r,s,o){return Tt(t).pipe(or(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,i,r,s,o).pipe(Ri(c=>{if(c instanceof Zo)return Ae(null);throw c}))),Ln(a=>!!a),Ri(a=>{if(s_(a))return SA(i,r,s)?Ae(new Kh):gs(i);throw a}))}processSegmentAgainstRoute(e,t,i,r,s,o,a){return bA(i,r,s,o)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o):gs(r):gs(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){let{matched:a,consumedSegments:c,positionalParamSegments:l,remainingSegments:u}=cf(t,r,s);if(!a)return gs(t);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>TA&&(this.allowRedirects=!1));let d=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,l);return this.applyRedirects.lineralizeSegments(r,d).pipe(It(h=>this.processSegment(e,i,t,h.concat(u),o,!1)))}matchSegmentAgainstRoute(e,t,i,r,s){let o=vA(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),o.pipe(xn(a=>a.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(xn(({routes:c})=>{let l=i._loadedInjector??e,{consumedSegments:u,remainingSegments:d,parameters:h}=a,f=new Xo(u,h,Object.freeze(ve({},this.urlTree.queryParams)),this.urlTree.fragment,DA(i),si(i),i.component??i._loadedComponent??null,i,IA(i)),{segmentGroup:g,slicedSegments:v}=U0(t,u,d,c);if(v.length===0&&g.hasChildren())return this.processChildren(l,c,g).pipe(je(p=>p===null?null:new pn(f,p)));if(c.length===0&&v.length===0)return Ae(new pn(f,[]));let m=si(i)===s;return this.processSegment(l,c,g,v,m?Le:s,!0).pipe(je(p=>new pn(f,p instanceof pn?[p]:[])))}))):gs(t)))}getChildConfig(e,t,i){return t.children?Ae({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Ae({routes:t._loadedRoutes,injector:t._loadedInjector}):fA(e,t,i,this.urlSerializer).pipe(It(r=>r?this.configLoader.loadChildren(e,t).pipe(Rt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):gA(t))):Ae({routes:[],injector:e})}};function CA(n){n.sort((e,t)=>e.value.outlet===Le?-1:t.value.outlet===Le?1:e.value.outlet.localeCompare(t.value.outlet))}function AA(n){let e=n.value.routeConfig;return e&&e.path===""}function a_(n){let e=[],t=new Set;for(let i of n){if(!AA(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=a_(i.children);e.push(new pn(i.value,r))}return e.filter(i=>!t.has(i))}function DA(n){return n.data||{}}function IA(n){return n.resolve||{}}function RA(n,e,t,i,r,s){return It(o=>EA(n,e,t,i,o.extractedUrl,r,s).pipe(je(({state:a,tree:c})=>_t(ve({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function PA(n,e){return It(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Ae(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of c_(c))o.add(l);let a=0;return Tt(o).pipe(or(c=>s.has(c)?NA(c,i,n,e):(c.data=nf(c,c.parent,n).resolve,Ae(void 0))),Rt(()=>a++),es(1),It(c=>a===o.size?Ae(t):cn))})}function c_(n){let e=n.children.map(t=>c_(t)).flat();return[n,...e]}function NA(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!e_(r)&&(s[Jo]=r.title),OA(s,n,e,i).pipe(je(o=>(n._resolvedData=o,n.data=nf(n,n.parent,t).resolve,null)))}function OA(n,e,t,i){let r=Dh(n);if(r.length===0)return Ae({});let s={};return Tt(r).pipe(It(o=>LA(n[o],e,t,i).pipe(Ln(),Rt(a=>{s[o]=a}))),es(1),xu(s),Ri(o=>s_(o)?cn:Jr(o)))}function LA(n,e,t,i){let r=Ko(e)??i,s=Ss(n,r),o=s.resolve?s.resolve(e,t):ki(r,()=>s(e,t));return Hi(o)}function Ch(n){return xn(e=>{let t=n(e);return t?Tt(t).pipe(je(()=>e)):Ae(e)})}var l_=(()=>{let e=class e{buildTitle(i){let r,s=i.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===Le);return r}getResolvedTitleForRoute(i){return i.data[Jo]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:()=>ie(FA),providedIn:"root"});let n=e;return n})(),FA=(()=>{let e=class e extends l_{constructor(i){super(),this.title=i}updateTitle(i){let r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};e.\u0275fac=function(r){return new(r||e)(Je(R0))},e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),lf=new Ve("",{providedIn:"root",factory:()=>({})}),uf=new Ve(""),UA=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=ie(dh)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Ae(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=Hi(i.loadComponent()).pipe(je(u_),Rt(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),Qr(()=>{this.componentLoaders.delete(i)})),s=new Zr(r,()=>new Yt).pipe(Yr());return this.componentLoaders.set(i,s),s}loadChildren(i,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Ae({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=kA(r,this.compiler,i,this.onLoadEndListener).pipe(Qr(()=>{this.childrenLoaders.delete(r)})),a=new Zr(o,()=>new Yt).pipe(Yr());return this.childrenLoaders.set(r,a),a}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function kA(n,e,t,i){return Hi(n.loadChildren()).pipe(je(u_),It(r=>r instanceof Mo||Array.isArray(r)?Ae(r):Tt(e.compileModuleAsync(r))),je(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(uf,[],{optional:!0,self:!0}).flat()),{routes:o.map(af),injector:s}}))}function BA(n){return n&&typeof n=="object"&&"default"in n}function u_(n){return BA(n)?n.default:n}var df=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:()=>ie(VA),providedIn:"root"});let n=e;return n})(),VA=(()=>{let e=class e{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,r){return i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),zA=new Ve("");var HA=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new Yt,this.transitionAbortSubject=new Yt,this.configLoader=ie(UA),this.environmentInjector=ie(Sn),this.urlSerializer=ie(tf),this.rootContexts=ie(Jc),this.location=ie(Po),this.inputBindingEnabled=ie(of,{optional:!0})!==null,this.titleStrategy=ie(l_),this.options=ie(lf,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=ie(df),this.createViewTransition=ie(zA,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Ae(void 0),this.rootComponentType=null;let i=s=>this.events.next(new kh(s)),r=s=>this.events.next(new Bh(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let r=++this.navigationId;this.transitions?.next(_t(ve(ve({},this.transitions.value),i),{id:r}))}setupNavigations(i,r,s){return this.transitions=new Gt({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:zo,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(_n(o=>o.id!==0),je(o=>_t(ve({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),xn(o=>{let a=!1,c=!1;return Ae(o).pipe(xn(l=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",mn.SupersededByNewNavigation),cn;this.currentTransition=o,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?_t(ve({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let u=!i.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=l.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!u&&d!=="reload"){let h="";return this.events.next(new Er(l.id,this.urlSerializer.serialize(l.rawUrl),h,Nh.IgnoredSameUrlNavigation)),l.resolve(null),cn}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Ae(l).pipe(xn(h=>{let f=this.transitions?.getValue();return this.events.next(new Wo(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),f!==this.transitions?.getValue()?cn:Promise.resolve(h)}),RA(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,this.paramsInheritanceStrategy),Rt(h=>{o.targetSnapshot=h.targetSnapshot,o.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=_t(ve({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let f=new jc(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(f)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:h,extractedUrl:f,source:g,restoredState:v,extras:m}=l,p=new Wo(h,this.urlSerializer.serialize(f),g,v);this.events.next(p);let S=K0(this.rootComponentType).snapshot;return this.currentTransition=o=_t(ve({},l),{targetSnapshot:S,urlAfterRedirects:f,extras:_t(ve({},m),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,Ae(o)}else{let h="";return this.events.next(new Er(l.id,this.urlSerializer.serialize(l.extractedUrl),h,Nh.IgnoredByUrlHandlingStrategy)),l.resolve(null),cn}}),Rt(l=>{let u=new Oh(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),je(l=>(this.currentTransition=o=_t(ve({},l),{guards:YC(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),sA(this.environmentInjector,l=>this.events.next(l)),Rt(l=>{if(o.guardsResult=l.guardsResult,Ms(l.guardsResult))throw n_(this.urlSerializer,l.guardsResult);let u=new Lh(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),_n(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",mn.GuardRejected),!1)),Ch(l=>{if(l.guards.canActivateChecks.length)return Ae(l).pipe(Rt(u=>{let d=new Fh(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}),xn(u=>{let d=!1;return Ae(u).pipe(PA(this.paramsInheritanceStrategy,this.environmentInjector),Rt({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(u,"",mn.NoDataFromResolver)}}))}),Rt(u=>{let d=new Uh(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}))}),Ch(l=>{let u=d=>{let h=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(d.routeConfig).pipe(Rt(f=>{d.component=f}),je(()=>{})));for(let f of d.children)h.push(...u(f));return h};return Fa(u(l.targetSnapshot.root)).pipe(Pi(null),ui(1))}),Ch(()=>this.afterPreactivation()),xn(()=>{let{currentSnapshot:l,targetSnapshot:u}=o,d=this.createViewTransition?.(this.environmentInjector,l.root,u.root);return d?Tt(d).pipe(je(()=>o)):Ae(o)}),je(l=>{let u=zC(i.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=_t(ve({},l),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,o}),Rt(()=>{this.events.next(new $o)}),XC(this.rootContexts,i.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),ui(1),Rt({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Sr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),Su(this.transitionAbortSubject.pipe(Rt(l=>{throw l}))),Qr(()=>{!a&&!c&&this.cancelNavigationTransition(o,"",mn.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),Ri(l=>{if(c=!0,r_(l))this.events.next(new zi(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),WC(l)?this.events.next(new qo(l.url)):o.resolve(!1);else{this.events.next(new jo(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(i.errorHandler(l))}catch(u){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(u)}}return cn}))}))}cancelNavigationTransition(i,r,s){let o=new zi(i.id,this.urlSerializer.serialize(i.extractedUrl),r,s);this.events.next(o),i.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function GA(n){return n!==zo}var WA=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:()=>ie(jA),providedIn:"root"});let n=e;return n})(),ef=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},jA=(()=>{let e=class e extends ef{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=Bd(e)))(s||e)}})(),e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),d_=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:()=>ie($A),providedIn:"root"});let n=e;return n})(),$A=(()=>{let e=class e extends d_{constructor(){super(...arguments),this.location=ie(Po),this.urlSerializer=ie(tf),this.options=ie(lf,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=ie(df),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new Vi,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=K0(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(i){return this.location.subscribe(r=>{r.type==="popstate"&&i(r.url,r.state)})}handleRouterEvent(i,r){if(i instanceof Wo)this.stateMemento=this.createStateMemento();else if(i instanceof Er)this.rawUrlTree=r.initialUrl;else if(i instanceof jc){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let s=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(s,r)}}else i instanceof $o?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):i instanceof zi&&(i.code===mn.GuardRejected||i.code===mn.NoDataFromResolver)?this.restoreHistory(r):i instanceof jo?this.restoreHistory(r,!0):i instanceof Sr&&(this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId)}setBrowserUrl(i,r){let s=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=ve(ve({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=ve(ve({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===i.finalUrl&&o===0&&(this.resetState(i),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:r}:{navigationId:i}}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=Bd(e)))(s||e)}})(),e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Bo=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(Bo||{});function qA(n,e){n.events.pipe(_n(t=>t instanceof Sr||t instanceof zi||t instanceof jo||t instanceof Er),je(t=>t instanceof Sr||t instanceof Er?Bo.COMPLETE:(t instanceof zi?t.code===mn.Redirect||t.code===mn.SupersededByNewNavigation:!1)?Bo.REDIRECTING:Bo.FAILED),_n(t=>t!==Bo.REDIRECTING),ui(1)).subscribe(()=>{e()})}function XA(n){throw n}var YA={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ZA={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},h_=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=ie(Ac),this.stateManager=ie(d_),this.options=ie(lf,{optional:!0})||{},this.pendingTasks=ie(Ao),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=ie(HA),this.urlSerializer=ie(tf),this.location=ie(Po),this.urlHandlingStrategy=ie(df),this._events=new Yt,this.errorHandler=this.options.errorHandler||XA,this.navigated=!1,this.routeReuseStrategy=ie(WA),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=ie(uf,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!ie(of,{optional:!0}),this.eventsSubscription=new Dt,this.isNgZoneEnabled=ie(xt)instanceof xt&&xt.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:i=>{this.console.warn(i)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(r=>{try{let s=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(s!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof zi&&r.code!==mn.Redirect&&r.code!==mn.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof Sr)this.navigated=!0;else if(r instanceof qo){let a=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),c={info:s.extras.info,skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||GA(s.source)};this.scheduleNavigation(a,zo,null,c,{resolve:s.resolve,reject:s.reject,promise:s.promise})}}KA(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),zo,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((i,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(i,"popstate",r)},0)})}navigateToSyncWithBrowser(i,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=ve({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(i);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(af),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:a,d=null;switch(c){case"merge":d=ve(ve({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let f=s?s.snapshot:this.routerState.snapshot.root;h=X0(f)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),h=this.currentUrlTree.root}return Y0(h,i,d,u??null)}navigateByUrl(i,r={skipLocationChange:!1}){let s=Ms(i)?i:this.parseUrl(i),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,zo,null,r)}navigate(i,r={skipLocationChange:!1}){return JA(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){try{return this.urlSerializer.parse(i)}catch{return this.urlSerializer.parse("/")}}isActive(i,r){let s;if(r===!0?s=ve({},YA):r===!1?s=ve({},ZA):s=r,Ms(i))return N0(this.currentUrlTree,i,s);let o=this.parseUrl(i);return N0(this.currentUrlTree,o,s)}removeEmptyProps(i){return Object.entries(i).reduce((r,[s,o])=>(o!=null&&(r[s]=o),r),{})}scheduleNavigation(i,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,u;a?(c=a.resolve,l=a.reject,u=a.promise):u=new Promise((h,f)=>{c=h,l=f});let d=this.pendingTasks.add();return qA(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:i,extras:o,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(h=>Promise.reject(h))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function JA(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Te(4008,!1)}function KA(n){return!(n instanceof $o)&&!(n instanceof qo)}var QA=new Ve("");function f_(n,...e){return pr([{provide:uf,multi:!0,useValue:n},[],{provide:ws,useFactory:eD,deps:[h_]},{provide:ps,multi:!0,useFactory:tD},e.map(t=>t.\u0275providers)])}function eD(n){return n.routerState.root}function tD(){let n=ie(vr);return e=>{let t=n.get(Bi);if(e!==t.components[0])return;let i=n.get(h_),r=n.get(nD);n.get(iD)===1&&i.initialNavigation(),n.get(rD,null,Ge.Optional)?.setUpPreloading(),n.get(QA,null,Ge.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var nD=new Ve("",{factory:()=>new Yt}),iD=new Ve("",{providedIn:"root",factory:()=>1});var rD=new Ve("");var Xp="166";var sD=0,p_=1,oD=2;var mx=1,aD=2,Mi=3,Ki=0,rn=1,Gn=2,Zi=0,js=1,m_=2,g_=3,v_=4,cD=5,Nr=100,lD=101,uD=102,dD=103,hD=104,fD=200,pD=201,mD=202,gD=203,zf=204,Hf=205,vD=206,yD=207,_D=208,xD=209,MD=210,wD=211,bD=212,SD=213,ED=214,TD=0,CD=1,AD=2,Cl=3,DD=4,ID=5,RD=6,PD=7,gx=0,ND=1,OD=2,Ji=0,LD=1,FD=2,UD=3,kD=4,BD=5,VD=6,zD=7;var y_=300,Ys=301,Zs=302,Gf=303,Wf=304,Kl=306,jf=1e3,Lr=1001,$f=1002,In=1003,HD=1004;var Qc=1005;var Wn=1006,hf=1007;var Fr=1008;var Ei=1009,vx=1010,yx=1011,aa=1012,Yp=1013,Ur=1014,bi=1015,fa=1016,Zp=1017,Jp=1018,Js=1020,_x=35902,xx=1021,Mx=1022,jn=1023,wx=1024,bx=1025,$s=1026,Ks=1027,Sx=1028,Kp=1029,Ex=1030,Qp=1031;var em=1033,wl=33776,bl=33777,Sl=33778,El=33779,qf=35840,Xf=35841,Yf=35842,Zf=35843,Jf=36196,Kf=37492,Qf=37496,ep=37808,tp=37809,np=37810,ip=37811,rp=37812,sp=37813,op=37814,ap=37815,cp=37816,lp=37817,up=37818,dp=37819,hp=37820,fp=37821,Tl=36492,pp=36494,mp=36495,Tx=36283,gp=36284,vp=36285,yp=36286;var Al=2300,_p=2301,ff=2302,__=2400,x_=2401,M_=2402;var GD=3200,WD=3201,jD=0,$D=1,Yi="",oi="srgb",tr="srgb-linear",tm="display-p3",Ql="display-p3-linear",Dl="linear",ft="srgb",Il="rec709",Rl="p3";var Es=7680;var w_=519,qD=512,XD=513,YD=514,Cx=515,ZD=516,JD=517,KD=518,QD=519,b_=35044;var S_="300 es",Si=2e3,Pl=2001,Qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pf=Math.PI/180,xp=180/Math.PI;function pa(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function nn(n,e,t){return Math.max(e,Math.min(t,n))}function eI(n,e){return(n%e+e)%e}function mf(n,e,t){return(1-t)*n+t*e}function ea(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var et=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],v=r[0],m=r[3],p=r[6],S=r[1],M=r[4],b=r[7],N=r[2],A=r[5],T=r[8];return s[0]=o*v+a*S+c*N,s[3]=o*m+a*M+c*A,s[6]=o*p+a*b+c*T,s[1]=l*v+u*S+d*N,s[4]=l*m+u*M+d*A,s[7]=l*p+u*b+d*T,s[2]=h*v+f*S+g*N,s[5]=h*m+f*M+g*A,s[8]=h*p+f*b+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,g=t*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gf.makeScale(e,t)),this}rotate(e){return this.premultiply(gf.makeRotation(-e)),this}translate(e,t){return this.premultiply(gf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gf=new Be;function Ax(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Nl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tI(){let n=Nl("canvas");return n.style.display="block",n}var E_={};function Dx(n){n in E_||(E_[n]=!0,console.warn(n))}function nI(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var T_=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),C_=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),el={[tr]:{transfer:Dl,primaries:Il,toReference:n=>n,fromReference:n=>n},[oi]:{transfer:ft,primaries:Il,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ql]:{transfer:Dl,primaries:Rl,toReference:n=>n.applyMatrix3(C_),fromReference:n=>n.applyMatrix3(T_)},[tm]:{transfer:ft,primaries:Rl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(C_),fromReference:n=>n.applyMatrix3(T_).convertLinearToSRGB()}},iI=new Set([tr,Ql]),lt={enabled:!0,_workingColorSpace:tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!iI.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=el[e].toReference,r=el[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return el[n].primaries},getTransfer:function(n){return n===Yi?Dl:el[n].transfer}};function qs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ts,Mp=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ts===void 0&&(Ts=Nl("canvas")),Ts.width=e.width,Ts.height=e.height;let i=Ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Nl("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qs(t[i]/255)*255):t[i]=qs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rI=0,Ol=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rI++}),this.uuid=pa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yf(r[o].image)):s.push(yf(r[o]))}else s=yf(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function yf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var sI=0,zr=(()=>{class n extends Qi{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Lr,s=Lr,o=Wn,a=Fr,c=jn,l=Ei,u=n.DEFAULT_ANISOTROPY,d=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sI++}),this.uuid=pa(),this.name="",this.source=new Ol(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==y_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jf:t.x=t.x-Math.floor(t.x);break;case Lr:t.x=t.x<0?0:1;break;case $f:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jf:t.y=t.y-Math.floor(t.y);break;case Lr:t.y=t.y<0?0:1;break;case $f:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=y_,n.DEFAULT_ANISOTROPY=1,n})(),Ot=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,b=(f+1)/2,N=(p+1)/2,A=(u+h)/4,T=(d+v)/4,O=(g+m)/4;return M>b&&M>N?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=A/i,s=T/i):b>N?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=O/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=T/s,r=O/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-v)/S,this.z=(h-u)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wp=class extends Qi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new zr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ol(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends wp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ll=class extends zr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var bp=class extends zr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==h||l!==f||u!==g){let m=1-a,p=c*h+l*f+u*g+d*v,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let N=Math.sqrt(M),A=Math.atan2(N,p*S);m=Math.sin(m*A)/N,a=Math.sin(a*A)/N}let b=a*S;if(c=c*m+h*b,l=l*m+f*b,u=u*m+g*b,d=d*m+v*b,m===1-a){let N=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=N,l*=N,u*=N,d*=N}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-a*f,e[t+2]=l*g+u*f+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(A_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(A_.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _f.copy(this).projectOnVector(e),this.sub(_f)}reflect(e){return this.sub(_f.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_f=new L,A_=new er,kr=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tl.copy(i.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),nl.subVectors(this.max,ta),Cs.subVectors(e.a,ta),As.subVectors(e.b,ta),Ds.subVectors(e.c,ta),Gi.subVectors(As,Cs),Wi.subVectors(Ds,As),Tr.subVectors(Cs,Ds);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-Tr.z,Tr.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,Tr.z,0,-Tr.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-Tr.y,Tr.x,0];return!xf(t,Cs,As,Ds,nl)||(t=[1,0,0,0,1,0,0,0,1],!xf(t,Cs,As,Ds,nl))?!1:(il.crossVectors(Gi,Wi),t=[il.x,il.y,il.z],xf(t,Cs,As,Ds,nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},gi=[new L,new L,new L,new L,new L,new L,new L,new L],Vn=new L,tl=new kr,Cs=new L,As=new L,Ds=new L,Gi=new L,Wi=new L,Tr=new L,ta=new L,nl=new L,il=new L,Cr=new L;function xf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Cr.fromArray(n,s);let a=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),c=e.dot(Cr),l=t.dot(Cr),u=i.dot(Cr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var oI=new kr,na=new L,Mf=new L,ca=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):oI.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);let t=na.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Mf)),this.expandByPoint(na.copy(e.center).sub(Mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vi=new L,wf=new L,rl=new L,ji=new L,bf=new L,sl=new L,Sf=new L,Sp=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){wf.copy(e).add(t).multiplyScalar(.5),rl.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(wf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(rl),a=ji.dot(this.direction),c=-ji.dot(rl),l=ji.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(wf).addScaledVector(rl,h),f}intersectSphere(e,t){vi.subVectors(e.center,this.origin);let i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,i,r,s){bf.subVectors(t,e),sl.subVectors(i,e),Sf.crossVectors(bf,sl);let o=this.direction.dot(Sf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);let c=a*this.direction.dot(sl.crossVectors(ji,sl));if(c<0)return null;let l=a*this.direction.dot(bf.cross(ji));if(l<0||c+l>o)return null;let u=-a*ji.dot(Sf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,h,f,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,f,g,v,m)}set(e,t,i,r,s,o,a,c,l,u,d,h,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Is.setFromMatrixColumn(e,0).length(),s=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,f=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-v*l,t[9]=-a*c,t[2]=v-h*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,f=c*d,g=l*u,v=l*d;t[0]=h+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,f=c*d,g=l*u,v=l*d;t[0]=h-v*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,f=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-v*d}else if(e.order==="XZY"){let h=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aI,e,cI)}lookAt(e,t,i){let r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),$i.crossVectors(i,gn),$i.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),$i.crossVectors(i,gn)),$i.normalize(),ol.crossVectors(gn,$i),r[0]=$i.x,r[4]=ol.x,r[8]=gn.x,r[1]=$i.y,r[5]=ol.y,r[9]=gn.y,r[2]=$i.z,r[6]=ol.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],S=i[3],M=i[7],b=i[11],N=i[15],A=r[0],T=r[4],O=r[8],w=r[12],x=r[1],D=r[5],H=r[9],B=r[13],q=r[2],$=r[6],G=r[10],X=r[14],V=r[3],ue=r[7],me=r[11],ge=r[15];return s[0]=o*A+a*x+c*q+l*V,s[4]=o*T+a*D+c*$+l*ue,s[8]=o*O+a*H+c*G+l*me,s[12]=o*w+a*B+c*X+l*ge,s[1]=u*A+d*x+h*q+f*V,s[5]=u*T+d*D+h*$+f*ue,s[9]=u*O+d*H+h*G+f*me,s[13]=u*w+d*B+h*X+f*ge,s[2]=g*A+v*x+m*q+p*V,s[6]=g*T+v*D+m*$+p*ue,s[10]=g*O+v*H+m*G+p*me,s[14]=g*w+v*B+m*X+p*ge,s[3]=S*A+M*x+b*q+N*V,s[7]=S*T+M*D+b*$+N*ue,s[11]=S*O+M*H+b*G+N*me,s[15]=S*w+M*B+b*X+N*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*f-i*c*f)+v*(+t*c*f-t*l*h+s*o*h-r*o*f+r*l*u-s*c*u)+m*(+t*l*d-t*a*f-s*o*d+i*o*f+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],S=d*m*l-v*h*l+v*c*f-a*m*f-d*c*p+a*h*p,M=g*h*l-u*m*l-g*c*f+o*m*f+u*c*p-o*h*p,b=u*v*l-g*d*l+g*a*f-o*v*f-u*a*p+o*d*p,N=g*d*c-u*v*c-g*a*h+o*v*h+u*a*m-o*d*m,A=t*S+i*M+r*b+s*N;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=S*T,e[1]=(v*h*s-d*m*s-v*r*f+i*m*f+d*r*p-i*h*p)*T,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*p+i*c*p)*T,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*f-i*c*f)*T,e[4]=M*T,e[5]=(u*m*s-g*h*s+g*r*f-t*m*f-u*r*p+t*h*p)*T,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*T,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*f+t*c*f)*T,e[8]=b*T,e[9]=(g*d*s-u*v*s-g*i*f+t*v*f+u*i*p-t*d*p)*T,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*p+t*a*p)*T,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*f-t*a*f)*T,e[12]=N*T,e[13]=(u*v*r-g*d*r+g*i*h-t*v*h-u*i*m+t*d*m)*T,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*m-t*a*m)*T,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,g=s*d,v=o*u,m=o*d,p=a*d,S=c*l,M=c*u,b=c*d,N=i.x,A=i.y,T=i.z;return r[0]=(1-(v+p))*N,r[1]=(f+b)*N,r[2]=(g-M)*N,r[3]=0,r[4]=(f-b)*A,r[5]=(1-(h+p))*A,r[6]=(m+S)*A,r[7]=0,r[8]=(g+M)*T,r[9]=(m-S)*T,r[10]=(1-(h+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Is.set(r[0],r[1],r[2]).length(),o=Is.set(r[4],r[5],r[6]).length(),a=Is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);let l=1/s,u=1/o,d=1/a;return zn.elements[0]*=l,zn.elements[1]*=l,zn.elements[2]*=l,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,t.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Si){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),f,g;if(a===Si)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Pl)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Si){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,f=(i+r)*u,g,v;if(a===Si)g=(o+s)*d,v=-2*d;else if(a===Pl)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Is=new L,zn=new At,aI=new L(0,0,0),cI=new L(1,1,1),$i=new L,ol=new L,gn=new L,D_=new At,I_=new er,Qs=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],f=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return D_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(D_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return I_.setFromEuler(this),this.setFromQuaternion(I_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Fl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lI=0,R_=new L,Rs=new er,yi=new At,al=new L,ia=new L,uI=new L,dI=new er,P_=new L(1,0,0),N_=new L(0,1,0),O_=new L(0,0,1),L_={type:"added"},hI={type:"removed"},Ps={type:"childadded",child:null},Ef={type:"childremoved",child:null},Ci=(()=>{class n extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lI++}),this.uuid=pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new L,i=new Qs,r=new er,s=new L(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new Be}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Rs.setFromAxisAngle(t,i),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,i){return Rs.setFromAxisAngle(t,i),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(P_,t)}rotateY(t){return this.rotateOnAxis(N_,t)}rotateZ(t){return this.rotateOnAxis(O_,t)}translateOnAxis(t,i){return R_.copy(t).applyQuaternion(this.quaternion),this.position.add(R_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(P_,t)}translateY(t){return this.translateOnAxis(N_,t)}translateZ(t){return this.translateOnAxis(O_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?al.copy(t):al.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(ia,al,this.up):yi.lookAt(al,ia,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(yi),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(L_),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(hI),Ef.child=t,this.dispatchEvent(Ef),Ef.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(L_),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,t,uI),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,dI,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),f=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new L(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Hn=new L,_i=new L,Tf=new L,xi=new L,Ns=new L,Os=new L,F_=new L,Cf=new L,Af=new L,Df=new L,Hs=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Hn.subVectors(e,t),r.cross(Hn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Hn.subVectors(r,t),_i.subVectors(i,t),Tf.subVectors(e,t);let o=Hn.dot(Hn),a=Hn.dot(_i),c=Hn.dot(Tf),l=_i.dot(_i),u=_i.dot(Tf),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,xi.x),c.addScaledVector(o,xi.y),c.addScaledVector(a,xi.z),c)}static isFrontFacing(e,t,i,r){return Hn.subVectors(i,t),_i.subVectors(e,t),Hn.cross(_i).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Hn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Ns.subVectors(r,i),Os.subVectors(s,i),Cf.subVectors(e,i);let c=Ns.dot(Cf),l=Os.dot(Cf);if(c<=0&&l<=0)return t.copy(i);Af.subVectors(e,r);let u=Ns.dot(Af),d=Os.dot(Af);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Ns,o);Df.subVectors(e,s);let f=Ns.dot(Df),g=Os.dot(Df);if(g>=0&&f<=g)return t.copy(s);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Os,a);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return F_.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(F_,a);let p=1/(m+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(Ns,o).addScaledVector(Os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ix={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},cl={h:0,s:0,l:0};function If(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=lt.workingColorSpace){if(e=eI(e,1),t=nn(t,0,1),i=nn(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=If(o,s,e+1/3),this.g=If(o,s,e),this.b=If(o,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=oi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){let i=Ix[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}copyLinearToSRGB(e){return this.r=vf(e.r),this.g=vf(e.g),this.b=vf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return lt.fromWorkingColorSpace(qt.copy(this),e),Math.round(nn(qt.r*255,0,255))*65536+Math.round(nn(qt.g*255,0,255))*256+Math.round(nn(qt.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(qt.copy(this),t);let i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=oi){lt.fromWorkingColorSpace(qt.copy(this),e);let t=qt.r,i=qt.g,r=qt.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(cl);let i=mf(qi.h,cl.h,t),r=mf(qi.s,cl.s,t),s=mf(qi.l,cl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Ke;Ke.NAMES=Ix;var fI=0,eo=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fI++}),this.uuid=pa(),this.name="",this.type="Material",this.blending=js,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zf,this.blendDst=Hf,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zf&&(i.blendSrc=this.blendSrc),this.blendDst!==Hf&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}},Ul=class extends eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qs,this.combine=gx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new L,ll=new et,Rn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=b_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Dx("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ll.fromBufferAttribute(this,t),ll.applyMatrix3(e),this.setXY(t,ll.x,ll.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ea(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ea(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ea(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ea(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ea(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==b_&&(e.usage=this.usage),e}};var kl=class extends Rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Bl=class extends Rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Kt=class extends Rn{constructor(e,t,i){super(new Float32Array(e),t,i)}},pI=0,Dn=new At,Rf=new Ci,Ls=new L,vn=new kr,ra=new kr,Vt=new L,Ai=class n extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pI++}),this.uuid=pa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ax(e)?Bl:kl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return Rf.lookAt(e),Rf.updateMatrix(),this.applyMatrix4(Rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ca);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ra.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(vn.min,ra.min),vn.expandByPoint(Vt),Vt.addVectors(vn.max,ra.max),vn.expandByPoint(Vt)):(vn.expandByPoint(ra.min),vn.expandByPoint(ra.max))}vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Vt.fromBufferAttribute(a,l),c&&(Ls.fromBufferAttribute(e,l),Vt.add(Ls)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<i.count;O++)a[O]=new L,c[O]=new L;let l=new L,u=new L,d=new L,h=new et,f=new et,g=new et,v=new L,m=new L;function p(O,w,x){l.fromBufferAttribute(i,O),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,x),h.fromBufferAttribute(s,O),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,x),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),a[O].add(v),a[w].add(v),a[x].add(v),c[O].add(m),c[w].add(m),c[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let O=0,w=S.length;O<w;++O){let x=S[O],D=x.start,H=x.count;for(let B=D,q=D+H;B<q;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let M=new L,b=new L,N=new L,A=new L;function T(O){N.fromBufferAttribute(r,O),A.copy(N);let w=a[O];M.copy(w),M.sub(N.multiplyScalar(N.dot(w))).normalize(),b.crossVectors(A,w);let D=b.dot(c[O])<0?-1:1;o.setXYZW(O,M.x,M.y,M.z,D)}for(let O=0,w=S.length;O<w;++O){let x=S[O],D=x.start,H=x.count;for(let B=D,q=D+H;B<q;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,u=new L,d=new L;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new Rn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},U_=new At,Ar=new Sp,ul=new ca,k_=new L,Fs=new L,Us=new L,ks=new L,Pf=new L,dl=new L,hl=new et,fl=new et,pl=new et,B_=new L,V_=new L,z_=new L,ml=new L,gl=new L,Xt=class extends Ci{constructor(e=new Ai,t=new Ul){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){dl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Pf.fromBufferAttribute(d,e),o?dl.addScaledVector(Pf,u):dl.addScaledVector(Pf.sub(t),u))}t.add(dl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(ul.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(ul,k_)===null||Ar.origin.distanceToSquared(k_)>(e.far-e.near)**2))&&(U_.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(U_),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=S,N=M;b<N;b+=3){let A=a.getX(b),T=a.getX(b+1),O=a.getX(b+2);r=vl(this,p,e,i,l,u,d,A,T,O),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let S=a.getX(m),M=a.getX(m+1),b=a.getX(m+2);r=vl(this,o,e,i,l,u,d,S,M,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=S,N=M;b<N;b+=3){let A=b,T=b+1,O=b+2;r=vl(this,p,e,i,l,u,d,A,T,O),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let S=m,M=m+1,b=m+2;r=vl(this,o,e,i,l,u,d,S,M,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function mI(n,e,t,i,r,s,o,a){let c;if(e.side===rn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ki,a),c===null)return null;gl.copy(a),gl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(gl);return l<t.near||l>t.far?null:{distance:l,point:gl.clone(),object:n}}function vl(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Fs),n.getVertexPosition(c,Us),n.getVertexPosition(l,ks);let u=mI(n,e,t,i,Fs,Us,ks,ml);if(u){r&&(hl.fromBufferAttribute(r,a),fl.fromBufferAttribute(r,c),pl.fromBufferAttribute(r,l),u.uv=Hs.getInterpolation(ml,Fs,Us,ks,hl,fl,pl,new et)),s&&(hl.fromBufferAttribute(s,a),fl.fromBufferAttribute(s,c),pl.fromBufferAttribute(s,l),u.uv1=Hs.getInterpolation(ml,Fs,Us,ks,hl,fl,pl,new et)),o&&(B_.fromBufferAttribute(o,a),V_.fromBufferAttribute(o,c),z_.fromBufferAttribute(o,l),u.normal=Hs.getInterpolation(ml,Fs,Us,ks,B_,V_,z_,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};Hs.getNormal(Fs,Us,ks,d.normal),u.face=d}return u}var la=class n extends Ai{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(d,2));function g(v,m,p,S,M,b,N,A,T,O,w){let x=b/T,D=N/O,H=b/2,B=N/2,q=A/2,$=T+1,G=O+1,X=0,V=0,ue=new L;for(let me=0;me<G;me++){let ge=me*D-B;for(let qe=0;qe<$;qe++){let ut=qe*x-H;ue[v]=ut*S,ue[m]=ge*M,ue[p]=q,l.push(ue.x,ue.y,ue.z),ue[v]=0,ue[m]=0,ue[p]=A>0?1:-1,u.push(ue.x,ue.y,ue.z),d.push(qe/T),d.push(1-me/O),X+=1}}for(let me=0;me<O;me++)for(let ge=0;ge<T;ge++){let qe=h+ge+$*me,ut=h+ge+$*(me+1),z=h+(ge+1)+$*(me+1),K=h+(ge+1)+$*me;c.push(qe,ut,K),c.push(ut,z,K),V+=6}a.addGroup(f,V,w),f+=V,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function to(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Zt(n){let e={};for(let t=0;t<n.length;t++){let i=to(n[t]);for(let r in i)e[r]=i[r]}return e}function gI(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rx(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var vI={clone:to,merge:Zt},yI=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_I=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yI,this.fragmentShader=_I,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=gI(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Vl=class extends Ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xi=new L,H_=new et,G_=new et,Jt=class extends Vl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xp*2*Math.atan(Math.tan(pf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,H_,G_),t.subVectors(G_,H_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bs=-90,Vs=1,Ep=class extends Ci{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Jt(Bs,Vs,e,t);r.layers=this.layers,this.add(r);let s=new Jt(Bs,Vs,e,t);s.layers=this.layers,this.add(s);let o=new Jt(Bs,Vs,e,t);o.layers=this.layers,this.add(o);let a=new Jt(Bs,Vs,e,t);a.layers=this.layers,this.add(a);let c=new Jt(Bs,Vs,e,t);c.layers=this.layers,this.add(c);let l=new Jt(Bs,Vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},zl=class extends zr{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Tp=class extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new la(5,5,5),s=new Pn({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Zi});s.uniforms.tEquirect.value=t;let o=new Xt(r,s),a=t.minFilter;return t.minFilter===Fr&&(t.minFilter=Wn),new Ep(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Nf=new L,xI=new L,MI=new Be,wi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Nf.subVectors(i,t).cross(xI.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Nf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||MI.getNormalMatrix(e),r=this.coplanarPoint(Nf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Dr=new ca,yl=new L,ua=class{constructor(e=new wi,t=new wi,i=new wi,r=new wi,s=new wi,o=new wi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],v=r[10],m=r[11],p=r[12],S=r[13],M=r[14],b=r[15];if(i[0].setComponents(c-s,h-l,m-f,b-p).normalize(),i[1].setComponents(c+s,h+l,m+f,b+p).normalize(),i[2].setComponents(c+o,h+u,m+g,b+S).normalize(),i[3].setComponents(c-o,h-u,m-g,b-S).normalize(),i[4].setComponents(c-a,h-d,m-v,b-M).normalize(),t===Si)i[5].setComponents(c+a,h+d,m+v,b+M).normalize();else if(t===Pl)i[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(yl.x=r.normal.x>0?e.max.x:e.min.x,yl.y=r.normal.y>0?e.max.y:e.min.y,yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Px(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function wI(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c._updateRange,h=c.updateRanges;if(n.bindBuffer(l,a),d.count===-1&&h.length===0&&n.bufferSubData(l,0,u),h.length!==0){for(let f=0,g=h.length;f<g;f++){let v=h[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Hl=class n extends Ai{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let S=p*h-o;for(let M=0;M<l;M++){let b=M*d-s;g.push(b,-S,0),v.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let M=S+l*p,b=S+l*(p+1),N=S+1+l*(p+1),A=S+1+l*p;f.push(M,b,A),f.push(b,N,A)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},bI=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SI=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,EI=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TI=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CI=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AI=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DI=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,II=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RI=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,PI=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NI=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OI=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LI=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,FI=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UI=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kI=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HI=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jI=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$I=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qI=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XI=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YI=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZI=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JI=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KI=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QI="gl_FragColor = linearToOutputTexel( gl_FragColor );",e1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,t1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,o1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,d1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,m1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,g1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,S1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,P1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,B1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,K1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_R=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ER=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,IR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,RR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,PR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$R=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:bI,alphahash_pars_fragment:SI,alphamap_fragment:EI,alphamap_pars_fragment:TI,alphatest_fragment:CI,alphatest_pars_fragment:AI,aomap_fragment:DI,aomap_pars_fragment:II,batching_pars_vertex:RI,batching_vertex:PI,begin_vertex:NI,beginnormal_vertex:OI,bsdfs:LI,iridescence_fragment:FI,bumpmap_pars_fragment:UI,clipping_planes_fragment:kI,clipping_planes_pars_fragment:BI,clipping_planes_pars_vertex:VI,clipping_planes_vertex:zI,color_fragment:HI,color_pars_fragment:GI,color_pars_vertex:WI,color_vertex:jI,common:$I,cube_uv_reflection_fragment:qI,defaultnormal_vertex:XI,displacementmap_pars_vertex:YI,displacementmap_vertex:ZI,emissivemap_fragment:JI,emissivemap_pars_fragment:KI,colorspace_fragment:QI,colorspace_pars_fragment:e1,envmap_fragment:t1,envmap_common_pars_fragment:n1,envmap_pars_fragment:i1,envmap_pars_vertex:r1,envmap_physical_pars_fragment:m1,envmap_vertex:s1,fog_vertex:o1,fog_pars_vertex:a1,fog_fragment:c1,fog_pars_fragment:l1,gradientmap_pars_fragment:u1,lightmap_pars_fragment:d1,lights_lambert_fragment:h1,lights_lambert_pars_fragment:f1,lights_pars_begin:p1,lights_toon_fragment:g1,lights_toon_pars_fragment:v1,lights_phong_fragment:y1,lights_phong_pars_fragment:_1,lights_physical_fragment:x1,lights_physical_pars_fragment:M1,lights_fragment_begin:w1,lights_fragment_maps:b1,lights_fragment_end:S1,logdepthbuf_fragment:E1,logdepthbuf_pars_fragment:T1,logdepthbuf_pars_vertex:C1,logdepthbuf_vertex:A1,map_fragment:D1,map_pars_fragment:I1,map_particle_fragment:R1,map_particle_pars_fragment:P1,metalnessmap_fragment:N1,metalnessmap_pars_fragment:O1,morphinstance_vertex:L1,morphcolor_vertex:F1,morphnormal_vertex:U1,morphtarget_pars_vertex:k1,morphtarget_vertex:B1,normal_fragment_begin:V1,normal_fragment_maps:z1,normal_pars_fragment:H1,normal_pars_vertex:G1,normal_vertex:W1,normalmap_pars_fragment:j1,clearcoat_normal_fragment_begin:$1,clearcoat_normal_fragment_maps:q1,clearcoat_pars_fragment:X1,iridescence_pars_fragment:Y1,opaque_fragment:Z1,packing:J1,premultiplied_alpha_fragment:K1,project_vertex:Q1,dithering_fragment:eR,dithering_pars_fragment:tR,roughnessmap_fragment:nR,roughnessmap_pars_fragment:iR,shadowmap_pars_fragment:rR,shadowmap_pars_vertex:sR,shadowmap_vertex:oR,shadowmask_pars_fragment:aR,skinbase_vertex:cR,skinning_pars_vertex:lR,skinning_vertex:uR,skinnormal_vertex:dR,specularmap_fragment:hR,specularmap_pars_fragment:fR,tonemapping_fragment:pR,tonemapping_pars_fragment:mR,transmission_fragment:gR,transmission_pars_fragment:vR,uv_pars_fragment:yR,uv_pars_vertex:_R,uv_vertex:xR,worldpos_vertex:MR,background_vert:wR,background_frag:bR,backgroundCube_vert:SR,backgroundCube_frag:ER,cube_vert:TR,cube_frag:CR,depth_vert:AR,depth_frag:DR,distanceRGBA_vert:IR,distanceRGBA_frag:RR,equirect_vert:PR,equirect_frag:NR,linedashed_vert:OR,linedashed_frag:LR,meshbasic_vert:FR,meshbasic_frag:UR,meshlambert_vert:kR,meshlambert_frag:BR,meshmatcap_vert:VR,meshmatcap_frag:zR,meshnormal_vert:HR,meshnormal_frag:GR,meshphong_vert:WR,meshphong_frag:jR,meshphysical_vert:$R,meshphysical_frag:qR,meshtoon_vert:XR,meshtoon_frag:YR,points_vert:ZR,points_frag:JR,shadow_vert:KR,shadow_frag:QR,sprite_vert:eP,sprite_frag:tP},re={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ai={basic:{uniforms:Zt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Zt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Zt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Zt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Zt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Zt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Zt([re.points,re.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Zt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Zt([re.common,re.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Zt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Zt([re.sprite,re.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Zt([re.common,re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Zt([re.lights,re.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};ai.physical={uniforms:Zt([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var _l={r:0,b:0,g:0},Ir=new Qs,nP=new At;function iP(n,e,t,i,r,s,o){let a=new Ke(0),c=s===!0?0:1,l,u,d=null,h=0,f=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function v(S){let M=!1,b=g(S);b===null?p(a,c):b&&b.isColor&&(p(b,1),M=!0);let N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,M){let b=g(M);b&&(b.isCubeTexture||b.mapping===Kl)?(u===void 0&&(u=new Xt(new la(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:to(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ir.copy(M.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nP.makeRotationFromEuler(Ir)),u.material.toneMapped=lt.getTransfer(b.colorSpace)!==ft,(d!==b||h!==b.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=b,h=b.version,f=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Xt(new Hl(2,2),new Pn({name:"BackgroundMaterial",uniforms:to(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=lt.getTransfer(b.colorSpace)!==ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=b,h=b.version,f=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,M){S.getRGB(_l,Rx(n)),i.buffers.color.setClear(_l.r,_l.g,_l.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:v,addToRenderList:m}}function rP(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,o=!1;function a(x,D,H,B,q){let $=!1,G=d(B,H,D);s!==G&&(s=G,l(s.object)),$=f(x,B,H,q),$&&g(x,B,H,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,b(x,D,H,B),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,D,H){let B=H.wireframe===!0,q=i[x.id];q===void 0&&(q={},i[x.id]=q);let $=q[D.id];$===void 0&&($={},q[D.id]=$);let G=$[B];return G===void 0&&(G=h(c()),$[B]=G),G}function h(x){let D=[],H=[],B=[];for(let q=0;q<t;q++)D[q]=0,H[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:B,object:x,attributes:{},index:null}}function f(x,D,H,B){let q=s.attributes,$=D.attributes,G=0,X=H.getAttributes();for(let V in X)if(X[V].location>=0){let me=q[V],ge=$[V];if(ge===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ge=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ge=x.instanceColor)),me===void 0||me.attribute!==ge||ge&&me.data!==ge.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function g(x,D,H,B){let q={},$=D.attributes,G=0,X=H.getAttributes();for(let V in X)if(X[V].location>=0){let me=$[V];me===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(me=x.instanceColor));let ge={};ge.attribute=me,me&&me.data&&(ge.data=me.data),q[V]=ge,G++}s.attributes=q,s.attributesNum=G,s.index=B}function v(){let x=s.newAttributes;for(let D=0,H=x.length;D<H;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){let H=s.newAttributes,B=s.enabledAttributes,q=s.attributeDivisors;H[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),q[x]!==D&&(n.vertexAttribDivisor(x,D),q[x]=D)}function S(){let x=s.newAttributes,D=s.enabledAttributes;for(let H=0,B=D.length;H<B;H++)D[H]!==x[H]&&(n.disableVertexAttribArray(H),D[H]=0)}function M(x,D,H,B,q,$,G){G===!0?n.vertexAttribIPointer(x,D,H,q,$):n.vertexAttribPointer(x,D,H,B,q,$)}function b(x,D,H,B){v();let q=B.attributes,$=H.getAttributes(),G=D.defaultAttributeValues;for(let X in $){let V=$[X];if(V.location>=0){let ue=q[X];if(ue===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),ue!==void 0){let me=ue.normalized,ge=ue.itemSize,qe=e.get(ue);if(qe===void 0)continue;let ut=qe.buffer,z=qe.type,K=qe.bytesPerElement,he=z===n.INT||z===n.UNSIGNED_INT||ue.gpuType===Yp;if(ue.isInterleavedBufferAttribute){let ce=ue.data,Ne=ce.stride,ze=ue.offset;if(ce.isInstancedInterleavedBuffer){for(let We=0;We<V.locationSize;We++)p(V.location+We,ce.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let We=0;We<V.locationSize;We++)m(V.location+We);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let We=0;We<V.locationSize;We++)M(V.location+We,ge/V.locationSize,z,me,Ne*K,(ze+ge/V.locationSize*We)*K,he)}else{if(ue.isInstancedBufferAttribute){for(let ce=0;ce<V.locationSize;ce++)p(V.location+ce,ue.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ce=0;ce<V.locationSize;ce++)m(V.location+ce);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let ce=0;ce<V.locationSize;ce++)M(V.location+ce,ge/V.locationSize,z,me,ge*K,ge/V.locationSize*ce*K,he)}}else if(G!==void 0){let me=G[X];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(V.location,me);break;case 3:n.vertexAttrib3fv(V.location,me);break;case 4:n.vertexAttrib4fv(V.location,me);break;default:n.vertexAttrib1fv(V.location,me)}}}}S()}function N(){O();for(let x in i){let D=i[x];for(let H in D){let B=D[H];for(let q in B)u(B[q].object),delete B[q];delete D[H]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;let D=i[x.id];for(let H in D){let B=D[H];for(let q in B)u(B[q].object),delete B[q];delete D[H]}delete i[x.id]}function T(x){for(let D in i){let H=i[D];if(H[x.id]===void 0)continue;let B=H[x.id];for(let q in B)u(B[q].object),delete B[q];delete H[x.id]}}function O(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function sP(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function c(l,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];for(let v=0;v<h.length;v++)t.update(g,i,h[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function oP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==jn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let T=A===fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ei&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==bi&&!T)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,N=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:b,maxSamples:N}}function aP(n){let e=this,t=null,i=0,r=!1,s=!1,o=new wi,a=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let S=s?0:i,M=S*4,b=p.clippingState||null;c.value=b,b=u(g,h,M,f);for(let N=0;N!==M;++N)b[N]=t[N];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,b=f;M!==v;++M,b+=4)o.copy(d[M]).applyMatrix4(S,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function cP(n){let e=new WeakMap;function t(o,a){return a===Gf?o.mapping=Ys:a===Wf&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Gf||a===Wf)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Tp(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Gl=class extends Vl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gs=4,W_=[.125,.215,.35,.446,.526,.582],Or=20,Of=new Gl,j_=new Ke,Lf=null,Ff=0,Uf=0,kf=!1,Pr=(1+Math.sqrt(5))/2,zs=1/Pr,$_=[new L(-Pr,zs,0),new L(Pr,zs,0),new L(-zs,0,Pr),new L(zs,0,Pr),new L(0,Pr,-zs),new L(0,Pr,zs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Wl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Lf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Uf=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lf,Ff,Uf),this._renderer.xr.enabled=kf,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Uf=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:fa,format:jn,colorSpace:tr,depthBuffer:!1},r=q_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q_(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lP(s)),this._blurMaterial=uP(s,e,t)}return r}_compileMaterial(e){let t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,Of)}_sceneToCubeUV(e,t,i,r){let a=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(j_),u.toneMapping=Ji,u.autoClear=!1;let f=new Ul({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new Xt(new la,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(j_),v=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let M=this._cubeSize;xl(r,S*M,p>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Ys||e.mapping===Zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=X_());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;xl(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Of)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$_[(r-s-1)%$_.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Xt(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Or-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Or;m>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Or}`);let p=[],S=0;for(let T=0;T<Or;++T){let O=T/v,w=Math.exp(-O*O/2);p.push(w),T===0?S+=w:T<m&&(S+=2*w)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;let b=this._sizeLods[r],N=3*b*(r>M-Gs?r-M+Gs:0),A=4*(this._cubeSize-b);xl(t,N,A,3*b,2*b),c.setRenderTarget(t),c.render(d,Of)}};function lP(n){let e=[],t=[],i=[],r=n,s=n-Gs+1+W_.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Gs?c=W_[o-n+Gs-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*f),M=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let A=0;A<f;A++){let T=A%3*2/3-1,O=A>2?0:-1,w=[T,O,0,T+2/3,O,0,T+2/3,O+1,0,T,O,0,T+2/3,O+1,0,T,O+1,0];S.set(w,v*g*A),M.set(h,m*g*A);let x=[A,A,A,A,A,A];b.set(x,p*g*A)}let N=new Ai;N.setAttribute("position",new Rn(S,v)),N.setAttribute("uv",new Rn(M,m)),N.setAttribute("faceIndex",new Rn(b,p)),e.push(N),r>Gs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function q_(n,e,t){let i=new Ti(n,e,t);return i.texture.mapping=Kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function uP(n,e,t){let i=new Float32Array(Or),r=new L(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function X_(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Y_(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function nm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Gf||c===Wf,u=c===Ys||c===Zs;if(l||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Wl(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Wl(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function hP(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Dx("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fP(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(d){let h=[],f=d.index,g=d.attributes.position,v=0;if(f!==null){let S=f.array;v=f.version;for(let M=0,b=S.length;M<b;M+=3){let N=S[M+0],A=S[M+1],T=S[M+2];h.push(N,A,A,T,T,N)}}else if(g!==void 0){let S=g.array;v=g.version;for(let M=0,b=S.length/3-1;M<b;M+=3){let N=M+0,A=M+1,T=M+2;h.push(N,A,A,T,T,N)}}else return;let m=new(Ax(h)?Bl:kl)(h,1);m.version=v;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function pP(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function l(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,h*o,g),t.update(f,i,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(h,f,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,v,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S];for(let S=0;S<v.length;S++)t.update(p,i,v[S])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function mP(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function gP(n,e,t){let i=new WeakMap,r=new Ot;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let x=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var f=x;h!==void 0&&h.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],b=0;g===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let N=a.attributes.position.count*b,A=1;N>e.maxTextureSize&&(A=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);let T=new Float32Array(N*A*4*d),O=new Ll(T,N,A,d);O.type=bi,O.needsUpdate=!0;let w=b*4;for(let D=0;D<d;D++){let H=p[D],B=S[D],q=M[D],$=N*A*4*D;for(let G=0;G<H.count;G++){let X=G*w;g===!0&&(r.fromBufferAttribute(H,G),T[$+X+0]=r.x,T[$+X+1]=r.y,T[$+X+2]=r.z,T[$+X+3]=0),v===!0&&(r.fromBufferAttribute(B,G),T[$+X+4]=r.x,T[$+X+5]=r.y,T[$+X+6]=r.z,T[$+X+7]=0),m===!0&&(r.fromBufferAttribute(q,G),T[$+X+8]=r.x,T[$+X+9]=r.y,T[$+X+10]=r.z,T[$+X+11]=q.itemSize===4?r.w:1)}}h={count:d,texture:O,size:new et(N,A)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function vP(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var jl=class extends zr{constructor(e,t,i,r,s,o,a,c,l,u=$s){if(u!==$s&&u!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$s&&(i=Ur),i===void 0&&u===Ks&&(i=Js),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:In,this.minFilter=c!==void 0?c:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Nx=new zr,Z_=new jl(1,1),Ox=new Ll,Lx=new bp,Fx=new zl,J_=[],K_=[],Q_=new Float32Array(16),ex=new Float32Array(9),tx=new Float32Array(4);function io(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=J_[r];if(s===void 0&&(s=new Float32Array(r),J_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function eu(n,e){let t=K_[e];t===void 0&&(t=new Int32Array(e),K_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _P(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Ft(t,e)}}function xP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Ft(t,e)}}function MP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Ft(t,e)}}function wP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Lt(t,i))return;tx.set(i),n.uniformMatrix2fv(this.addr,!1,tx),Ft(t,i)}}function bP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Lt(t,i))return;ex.set(i),n.uniformMatrix3fv(this.addr,!1,ex),Ft(t,i)}}function SP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Lt(t,i))return;Q_.set(i),n.uniformMatrix4fv(this.addr,!1,Q_),Ft(t,i)}}function EP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function TP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Ft(t,e)}}function CP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Ft(t,e)}}function AP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Ft(t,e)}}function DP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function IP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Ft(t,e)}}function RP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Ft(t,e)}}function PP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Ft(t,e)}}function NP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Z_.compareFunction=Cx,s=Z_):s=Nx,t.setTexture2D(e||s,r)}function OP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Lx,r)}function LP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fx,r)}function FP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ox,r)}function UP(n){switch(n){case 5126:return yP;case 35664:return _P;case 35665:return xP;case 35666:return MP;case 35674:return wP;case 35675:return bP;case 35676:return SP;case 5124:case 35670:return EP;case 35667:case 35671:return TP;case 35668:case 35672:return CP;case 35669:case 35673:return AP;case 5125:return DP;case 36294:return IP;case 36295:return RP;case 36296:return PP;case 35678:case 36198:case 36298:case 36306:case 35682:return NP;case 35679:case 36299:case 36307:return OP;case 35680:case 36300:case 36308:case 36293:return LP;case 36289:case 36303:case 36311:case 36292:return FP}}function kP(n,e){n.uniform1fv(this.addr,e)}function BP(n,e){let t=io(e,this.size,2);n.uniform2fv(this.addr,t)}function VP(n,e){let t=io(e,this.size,3);n.uniform3fv(this.addr,t)}function zP(n,e){let t=io(e,this.size,4);n.uniform4fv(this.addr,t)}function HP(n,e){let t=io(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function GP(n,e){let t=io(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function WP(n,e){let t=io(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jP(n,e){n.uniform1iv(this.addr,e)}function $P(n,e){n.uniform2iv(this.addr,e)}function qP(n,e){n.uniform3iv(this.addr,e)}function XP(n,e){n.uniform4iv(this.addr,e)}function YP(n,e){n.uniform1uiv(this.addr,e)}function ZP(n,e){n.uniform2uiv(this.addr,e)}function JP(n,e){n.uniform3uiv(this.addr,e)}function KP(n,e){n.uniform4uiv(this.addr,e)}function QP(n,e,t){let i=this.cache,r=e.length,s=eu(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Nx,s[o])}function eN(n,e,t){let i=this.cache,r=e.length,s=eu(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Lx,s[o])}function tN(n,e,t){let i=this.cache,r=e.length,s=eu(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Fx,s[o])}function nN(n,e,t){let i=this.cache,r=e.length,s=eu(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ox,s[o])}function iN(n){switch(n){case 5126:return kP;case 35664:return BP;case 35665:return VP;case 35666:return zP;case 35674:return HP;case 35675:return GP;case 35676:return WP;case 5124:case 35670:return jP;case 35667:case 35671:return $P;case 35668:case 35672:return qP;case 35669:case 35673:return XP;case 5125:return YP;case 36294:return ZP;case 36295:return JP;case 36296:return KP;case 35678:case 36198:case 36298:case 36306:case 35682:return QP;case 35679:case 36299:case 36307:return eN;case 35680:case 36300:case 36308:case 36293:return tN;case 36289:case 36303:case 36311:case 36292:return nN}}var Cp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=UP(t.type)}},Ap=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iN(t.type)}},Dp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Bf=/(\w+)(\])?(\[|\.)?/g;function nx(n,e){n.seq.push(e),n.map[e.id]=e}function rN(n,e,t){let i=n.name,r=i.length;for(Bf.lastIndex=0;;){let s=Bf.exec(i),o=Bf.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){nx(t,l===void 0?new Cp(a,n,e):new Ap(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Dp(a),nx(t,d)),t=d}}}var Xs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);rN(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function ix(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var sN=37297,oN=0;function aN(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function cN(n){let e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(n),i;switch(e===t?i="":e===Rl&&t===Il?i="LinearDisplayP3ToLinearSRGB":e===Il&&t===Rl&&(i="LinearSRGBToLinearDisplayP3"),n){case tr:case Ql:return[i,"LinearTransferOETF"];case oi:case tm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function rx(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+aN(n.getShaderSource(e),o)}else return r}function lN(n,e){let t=cN(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uN(n,e){let t;switch(e){case LD:t="Linear";break;case FD:t="Reinhard";break;case UD:t="OptimizedCineon";break;case kD:t="ACESFilmic";break;case VD:t="AgX";break;case zD:t="Neutral";break;case BD:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dN(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function hN(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fN(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function sa(n){return n!==""}function sx(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ox(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var pN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ip(n){return n.replace(pN,gN)}var mN=new Map;function gN(n,e){let t=ke[e];if(t===void 0){let i=mN.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ip(t)}var vN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ax(n){return n.replace(vN,yN)}function yN(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _N(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===mx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===aD?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function xN(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ys:case Zs:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MN(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function wN(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case gx:e="ENVMAP_BLENDING_MULTIPLY";break;case ND:e="ENVMAP_BLENDING_MIX";break;case OD:e="ENVMAP_BLENDING_ADD";break}return e}function bN(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function SN(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=_N(t),l=xN(t),u=MN(t),d=wN(t),h=bN(t),f=dN(t),g=hN(s),v=r.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sa).join(`
`),p.length>0&&(p+=`
`)):(m=[cx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),p=[cx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?ke.tonemapping_pars_fragment:"",t.toneMapping!==Ji?uN("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,lN("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),o=Ip(o),o=sx(o,t),o=ox(o,t),a=Ip(a),a=sx(a,t),a=ox(a,t),o=ax(o),a=ax(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===S_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===S_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=S+m+o,b=S+p+a,N=ix(r,r.VERTEX_SHADER,M),A=ix(r,r.FRAGMENT_SHADER,b);r.attachShader(v,N),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(D){if(n.debug.checkShaderErrors){let H=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(N).trim(),q=r.getShaderInfoLog(A).trim(),$=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,N,A);else{let X=rx(r,N,"vertex"),V=rx(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+X+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||q==="")&&(G=!1);G&&(D.diagnostics={runnable:$,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:p}})}r.deleteShader(N),r.deleteShader(A),O=new Xs(r,v),w=fN(r,v)}let O;this.getUniforms=function(){return O===void 0&&T(this),O};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,sN)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oN++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=A,this}var EN=0,Rp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Pp(e),t.set(e,i)),i}},Pp=class{constructor(e){this.id=EN++,this.code=e,this.usedTimes=0}};function TN(n,e,t,i,r,s,o){let a=new Fl,c=new Rp,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,x,D,H,B){let q=H.fog,$=B.geometry,G=w.isMeshStandardMaterial?H.environment:null,X=(w.isMeshStandardMaterial?t:e).get(w.envMap||G),V=X&&X.mapping===Kl?X.image.height:null,ue=g[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let me=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ge=me!==void 0?me.length:0,qe=0;$.morphAttributes.position!==void 0&&(qe=1),$.morphAttributes.normal!==void 0&&(qe=2),$.morphAttributes.color!==void 0&&(qe=3);let ut,z,K,he;if(ue){let nt=ai[ue];ut=nt.vertexShader,z=nt.fragmentShader}else ut=w.vertexShader,z=w.fragmentShader,c.update(w),K=c.getVertexShaderID(w),he=c.getFragmentShaderID(w);let ce=n.getRenderTarget(),Ne=B.isInstancedMesh===!0,ze=B.isBatchedMesh===!0,We=!!w.map,mt=!!w.matcap,C=!!X,wt=!!w.aoMap,at=!!w.lightMap,dt=!!w.bumpMap,_e=!!w.normalMap,bt=!!w.displacementMap,De=!!w.emissiveMap,Oe=!!w.metalnessMap,E=!!w.roughnessMap,y=w.anisotropy>0,k=w.clearcoat>0,Z=w.dispersion>0,J=w.iridescence>0,Y=w.sheen>0,xe=w.transmission>0,se=y&&!!w.anisotropyMap,le=k&&!!w.clearcoatMap,Fe=k&&!!w.clearcoatNormalMap,Q=k&&!!w.clearcoatRoughnessMap,ae=J&&!!w.iridescenceMap,Xe=J&&!!w.iridescenceThicknessMap,Ce=Y&&!!w.sheenColorMap,de=Y&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,He=!!w.specularColorMap,pt=!!w.specularIntensityMap,I=xe&&!!w.transmissionMap,ee=xe&&!!w.thicknessMap,W=!!w.gradientMap,j=!!w.alphaMap,ne=w.alphaTest>0,we=!!w.alphaHash,Qe=!!w.extensions,St=Ji;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(St=n.toneMapping);let zt={shaderID:ue,shaderType:w.type,shaderName:w.name,vertexShader:ut,fragmentShader:z,defines:w.defines,customVertexShaderID:K,customFragmentShaderID:he,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ze,batchingColor:ze&&B._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&B.instanceColor!==null,instancingMorph:Ne&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:tr,alphaToCoverage:!!w.alphaToCoverage,map:We,matcap:mt,envMap:C,envMapMode:C&&X.mapping,envMapCubeUVHeight:V,aoMap:wt,lightMap:at,bumpMap:dt,normalMap:_e,displacementMap:h&&bt,emissiveMap:De,normalMapObjectSpace:_e&&w.normalMapType===$D,normalMapTangentSpace:_e&&w.normalMapType===jD,metalnessMap:Oe,roughnessMap:E,anisotropy:y,anisotropyMap:se,clearcoat:k,clearcoatMap:le,clearcoatNormalMap:Fe,clearcoatRoughnessMap:Q,dispersion:Z,iridescence:J,iridescenceMap:ae,iridescenceThicknessMap:Xe,sheen:Y,sheenColorMap:Ce,sheenRoughnessMap:de,specularMap:Ie,specularColorMap:He,specularIntensityMap:pt,transmission:xe,transmissionMap:I,thicknessMap:ee,gradientMap:W,opaque:w.transparent===!1&&w.blending===js&&w.alphaToCoverage===!1,alphaMap:j,alphaTest:ne,alphaHash:we,combine:w.combine,mapUv:We&&v(w.map.channel),aoMapUv:wt&&v(w.aoMap.channel),lightMapUv:at&&v(w.lightMap.channel),bumpMapUv:dt&&v(w.bumpMap.channel),normalMapUv:_e&&v(w.normalMap.channel),displacementMapUv:bt&&v(w.displacementMap.channel),emissiveMapUv:De&&v(w.emissiveMap.channel),metalnessMapUv:Oe&&v(w.metalnessMap.channel),roughnessMapUv:E&&v(w.roughnessMap.channel),anisotropyMapUv:se&&v(w.anisotropyMap.channel),clearcoatMapUv:le&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:de&&v(w.sheenRoughnessMap.channel),specularMapUv:Ie&&v(w.specularMap.channel),specularColorMapUv:He&&v(w.specularColorMap.channel),specularIntensityMapUv:pt&&v(w.specularIntensityMap.channel),transmissionMapUv:I&&v(w.transmissionMap.channel),thicknessMapUv:ee&&v(w.thicknessMap.channel),alphaMapUv:j&&v(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(_e||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(We||j),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:qe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:St,decodeVideoTexture:We&&w.map.isVideoTexture===!0&&lt.getTransfer(w.map.colorSpace)===ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Gn,flipSided:w.side===rn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Qe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&w.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function p(w){let x=[];if(w.shaderID?x.push(w.shaderID):(x.push(w.customVertexShaderID),x.push(w.customFragmentShaderID)),w.defines!==void 0)for(let D in w.defines)x.push(D),x.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(S(x,w),M(x,w),x.push(n.outputColorSpace)),x.push(w.customProgramCacheKey),x.join()}function S(w,x){w.push(x.precision),w.push(x.outputColorSpace),w.push(x.envMapMode),w.push(x.envMapCubeUVHeight),w.push(x.mapUv),w.push(x.alphaMapUv),w.push(x.lightMapUv),w.push(x.aoMapUv),w.push(x.bumpMapUv),w.push(x.normalMapUv),w.push(x.displacementMapUv),w.push(x.emissiveMapUv),w.push(x.metalnessMapUv),w.push(x.roughnessMapUv),w.push(x.anisotropyMapUv),w.push(x.clearcoatMapUv),w.push(x.clearcoatNormalMapUv),w.push(x.clearcoatRoughnessMapUv),w.push(x.iridescenceMapUv),w.push(x.iridescenceThicknessMapUv),w.push(x.sheenColorMapUv),w.push(x.sheenRoughnessMapUv),w.push(x.specularMapUv),w.push(x.specularColorMapUv),w.push(x.specularIntensityMapUv),w.push(x.transmissionMapUv),w.push(x.thicknessMapUv),w.push(x.combine),w.push(x.fogExp2),w.push(x.sizeAttenuation),w.push(x.morphTargetsCount),w.push(x.morphAttributeCount),w.push(x.numDirLights),w.push(x.numPointLights),w.push(x.numSpotLights),w.push(x.numSpotLightMaps),w.push(x.numHemiLights),w.push(x.numRectAreaLights),w.push(x.numDirLightShadows),w.push(x.numPointLightShadows),w.push(x.numSpotLightShadows),w.push(x.numSpotLightShadowsWithMaps),w.push(x.numLightProbes),w.push(x.shadowMapType),w.push(x.toneMapping),w.push(x.numClippingPlanes),w.push(x.numClipIntersection),w.push(x.depthPacking)}function M(w,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),w.push(a.mask)}function b(w){let x=g[w.type],D;if(x){let H=ai[x];D=vI.clone(H.uniforms)}else D=w.uniforms;return D}function N(w,x){let D;for(let H=0,B=u.length;H<B;H++){let q=u[H];if(q.cacheKey===x){D=q,++D.usedTimes;break}}return D===void 0&&(D=new SN(n,x,w,s),u.push(D)),D}function A(w){if(--w.usedTimes===0){let x=u.indexOf(w);u[x]=u[u.length-1],u.pop(),w.destroy()}}function T(w){c.remove(w)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:N,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:O}}function CN(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function AN(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function lx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ux(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,f,g,v,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,h,f,g,v,m){let p=o(d,h,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(d,h,f,g,v,m){let p=o(d,h,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,h){t.length>1&&t.sort(d||AN),i.length>1&&i.sort(h||lx),r.length>1&&r.sort(h||lx)}function u(){for(let d=e,h=n.length;d<h;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function DN(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new ux,n.set(i,[o])):r>=s.length?(o=new ux,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function IN(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ke};break;case"SpotLight":t={position:new L,direction:new L,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function RN(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var PN=0;function NN(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ON(n){let e=new IN,t=RN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);let r=new L,s=new At,o=new At;function a(l){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,S=0,M=0,b=0,N=0,A=0,T=0;l.sort(NN);for(let w=0,x=l.length;w<x;w++){let D=l[w],H=D.color,B=D.intensity,q=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=H.r*B,d+=H.g*B,h+=H.b*B;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],B);T++}else if(D.isDirectionalLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let X=D.shadow,V=t.get(D);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=$,i.directionalShadowMatrix[f]=D.shadow.matrix,S++}i.directional[f]=G,f++}else if(D.isSpotLight){let G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(H).multiplyScalar(B),G.distance=q,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[v]=G;let X=D.shadow;if(D.map&&(i.spotLightMap[N]=D.map,N++,X.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[v]=X.matrix,D.castShadow){let V=t.get(D);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=$,b++}v++}else if(D.isRectAreaLight){let G=e.get(D);G.color.copy(H).multiplyScalar(B),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=G,m++}else if(D.isPointLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){let X=D.shadow,V=t.get(D);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=D.shadow.matrix,M++}i.point[g]=G,g++}else if(D.isHemisphereLight){let G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(B),G.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let O=i.hash;(O.directionalLength!==f||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==S||O.numPointShadows!==M||O.numSpotShadows!==b||O.numSpotMaps!==N||O.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+N-A,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,O.directionalLength=f,O.pointLength=g,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=S,O.numPointShadows=M,O.numSpotShadows=b,O.numSpotMaps=N,O.numLightProbes=T,i.version=PN++)}function c(l,u){let d=0,h=0,f=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let M=l[p];if(M.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(M.isSpotLight){let b=i.spot[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let b=i.point[h];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){let b=i.hemi[v];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function dx(n){let e=new ON(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function LN(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new dx(n),e.set(r,[a])):s>=o.length?(a=new dx(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Np=class extends eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Op=class extends eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},FN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kN(n,e,t){let i=new ua,r=new et,s=new et,o=new Ot,a=new Np({depthPacking:WD}),c=new Op,l={},u=t.maxTextureSize,d={[Ki]:rn,[rn]:Ki,[Gn]:Gn},h=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:FN,fragmentShader:UN}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ai;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Xt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mx;let p=this.type;this.render=function(A,T,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let w=n.getRenderTarget(),x=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Zi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let B=p!==Mi&&this.type===Mi,q=p===Mi&&this.type!==Mi;for(let $=0,G=A.length;$<G;$++){let X=A[$],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let ue=V.getFrameExtents();if(r.multiply(ue),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,V.mapSize.y=s.y)),V.map===null||B===!0||q===!0){let ge=this.type!==Mi?{minFilter:In,magFilter:In}:{};V.map!==null&&V.map.dispose(),V.map=new Ti(r.x,r.y,ge),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let me=V.getViewportCount();for(let ge=0;ge<me;ge++){let qe=V.getViewport(ge);o.set(s.x*qe.x,s.y*qe.y,s.x*qe.z,s.y*qe.w),H.viewport(o),V.updateMatrices(X,ge),i=V.getFrustum(),b(T,O,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===Mi&&S(V,O),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,x,D)};function S(A,T){let O=e.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ti(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,O,h,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,O,f,v,null)}function M(A,T,O,w){let x=null,D=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)x=D;else if(x=O.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let H=x.uuid,B=T.uuid,q=l[H];q===void 0&&(q={},l[H]=q);let $=q[B];$===void 0&&($=x.clone(),q[B]=$,T.addEventListener("dispose",N)),x=$}if(x.visible=T.visible,x.wireframe=T.wireframe,w===Mi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,O.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let H=n.properties.get(x);H.light=O}return x}function b(A,T,O,w,x){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Mi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);let B=e.update(A),q=A.material;if(Array.isArray(q)){let $=B.groups;for(let G=0,X=$.length;G<X;G++){let V=$[G],ue=q[V.materialIndex];if(ue&&ue.visible){let me=M(A,ue,w,x);A.onBeforeShadow(n,A,T,O,B,me,V),n.renderBufferDirect(O,null,B,me,A,V),A.onAfterShadow(n,A,T,O,B,me,V)}}}else if(q.visible){let $=M(A,q,w,x);A.onBeforeShadow(n,A,T,O,B,$,null),n.renderBufferDirect(O,null,B,$,A,null),A.onAfterShadow(n,A,T,O,B,$,null)}}let H=A.children;for(let B=0,q=H.length;B<q;B++)b(H[B],T,O,w,x)}function N(A){A.target.removeEventListener("dispose",N);for(let O in l){let w=l[O],x=A.target.uuid;x in w&&(w[x].dispose(),delete w[x])}}}function BN(n){function e(){let I=!1,ee=new Ot,W=null,j=new Ot(0,0,0,0);return{setMask:function(ne){W!==ne&&!I&&(n.colorMask(ne,ne,ne,ne),W=ne)},setLocked:function(ne){I=ne},setClear:function(ne,we,Qe,St,zt){zt===!0&&(ne*=St,we*=St,Qe*=St),ee.set(ne,we,Qe,St),j.equals(ee)===!1&&(n.clearColor(ne,we,Qe,St),j.copy(ee))},reset:function(){I=!1,W=null,j.set(-1,0,0,0)}}}function t(){let I=!1,ee=null,W=null,j=null;return{setTest:function(ne){ne?he(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(ne){ee!==ne&&!I&&(n.depthMask(ne),ee=ne)},setFunc:function(ne){if(W!==ne){switch(ne){case TD:n.depthFunc(n.NEVER);break;case CD:n.depthFunc(n.ALWAYS);break;case AD:n.depthFunc(n.LESS);break;case Cl:n.depthFunc(n.LEQUAL);break;case DD:n.depthFunc(n.EQUAL);break;case ID:n.depthFunc(n.GEQUAL);break;case RD:n.depthFunc(n.GREATER);break;case PD:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}W=ne}},setLocked:function(ne){I=ne},setClear:function(ne){j!==ne&&(n.clearDepth(ne),j=ne)},reset:function(){I=!1,ee=null,W=null,j=null}}}function i(){let I=!1,ee=null,W=null,j=null,ne=null,we=null,Qe=null,St=null,zt=null;return{setTest:function(nt){I||(nt?he(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(nt){ee!==nt&&!I&&(n.stencilMask(nt),ee=nt)},setFunc:function(nt,ci,qn){(W!==nt||j!==ci||ne!==qn)&&(n.stencilFunc(nt,ci,qn),W=nt,j=ci,ne=qn)},setOp:function(nt,ci,qn){(we!==nt||Qe!==ci||St!==qn)&&(n.stencilOp(nt,ci,qn),we=nt,Qe=ci,St=qn)},setLocked:function(nt){I=nt},setClear:function(nt){zt!==nt&&(n.clearStencil(nt),zt=nt)},reset:function(){I=!1,ee=null,W=null,j=null,ne=null,we=null,Qe=null,St=null,zt=null}}}let r=new e,s=new t,o=new i,a=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,h=[],f=null,g=!1,v=null,m=null,p=null,S=null,M=null,b=null,N=null,A=new Ke(0,0,0),T=0,O=!1,w=null,x=null,D=null,H=null,B=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,G=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=G>=1):X.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=G>=2);let V=null,ue={},me=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),qe=new Ot().fromArray(me),ut=new Ot().fromArray(ge);function z(I,ee,W,j){let ne=new Uint8Array(4),we=n.createTexture();n.bindTexture(I,we),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<W;Qe++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(ee+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return we}let K={};K[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(n.DEPTH_TEST),s.setFunc(Cl),dt(!1),_e(p_),he(n.CULL_FACE),wt(Zi);function he(I){l[I]!==!0&&(n.enable(I),l[I]=!0)}function ce(I){l[I]!==!1&&(n.disable(I),l[I]=!1)}function Ne(I,ee){return u[I]!==ee?(n.bindFramebuffer(I,ee),u[I]=ee,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ee),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function ze(I,ee){let W=h,j=!1;if(I){W=d.get(ee),W===void 0&&(W=[],d.set(ee,W));let ne=I.textures;if(W.length!==ne.length||W[0]!==n.COLOR_ATTACHMENT0){for(let we=0,Qe=ne.length;we<Qe;we++)W[we]=n.COLOR_ATTACHMENT0+we;W.length=ne.length,j=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,j=!0);j&&n.drawBuffers(W)}function We(I){return f!==I?(n.useProgram(I),f=I,!0):!1}let mt={[Nr]:n.FUNC_ADD,[lD]:n.FUNC_SUBTRACT,[uD]:n.FUNC_REVERSE_SUBTRACT};mt[dD]=n.MIN,mt[hD]=n.MAX;let C={[fD]:n.ZERO,[pD]:n.ONE,[mD]:n.SRC_COLOR,[zf]:n.SRC_ALPHA,[MD]:n.SRC_ALPHA_SATURATE,[_D]:n.DST_COLOR,[vD]:n.DST_ALPHA,[gD]:n.ONE_MINUS_SRC_COLOR,[Hf]:n.ONE_MINUS_SRC_ALPHA,[xD]:n.ONE_MINUS_DST_COLOR,[yD]:n.ONE_MINUS_DST_ALPHA,[wD]:n.CONSTANT_COLOR,[bD]:n.ONE_MINUS_CONSTANT_COLOR,[SD]:n.CONSTANT_ALPHA,[ED]:n.ONE_MINUS_CONSTANT_ALPHA};function wt(I,ee,W,j,ne,we,Qe,St,zt,nt){if(I===Zi){g===!0&&(ce(n.BLEND),g=!1);return}if(g===!1&&(he(n.BLEND),g=!0),I!==cD){if(I!==v||nt!==O){if((m!==Nr||M!==Nr)&&(n.blendEquation(n.FUNC_ADD),m=Nr,M=Nr),nt)switch(I){case js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case m_:n.blendFunc(n.ONE,n.ONE);break;case g_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case v_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case m_:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case g_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case v_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,S=null,b=null,N=null,A.set(0,0,0),T=0,v=I,O=nt}return}ne=ne||ee,we=we||W,Qe=Qe||j,(ee!==m||ne!==M)&&(n.blendEquationSeparate(mt[ee],mt[ne]),m=ee,M=ne),(W!==p||j!==S||we!==b||Qe!==N)&&(n.blendFuncSeparate(C[W],C[j],C[we],C[Qe]),p=W,S=j,b=we,N=Qe),(St.equals(A)===!1||zt!==T)&&(n.blendColor(St.r,St.g,St.b,zt),A.copy(St),T=zt),v=I,O=!1}function at(I,ee){I.side===Gn?ce(n.CULL_FACE):he(n.CULL_FACE);let W=I.side===rn;ee&&(W=!W),dt(W),I.blending===js&&I.transparent===!1?wt(Zi):wt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);let j=I.stencilWrite;o.setTest(j),j&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),De(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function dt(I){w!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),w=I)}function _e(I){I!==sD?(he(n.CULL_FACE),I!==x&&(I===p_?n.cullFace(n.BACK):I===oD?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),x=I}function bt(I){I!==D&&($&&n.lineWidth(I),D=I)}function De(I,ee,W){I?(he(n.POLYGON_OFFSET_FILL),(H!==ee||B!==W)&&(n.polygonOffset(ee,W),H=ee,B=W)):ce(n.POLYGON_OFFSET_FILL)}function Oe(I){I?he(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function E(I){I===void 0&&(I=n.TEXTURE0+q-1),V!==I&&(n.activeTexture(I),V=I)}function y(I,ee,W){W===void 0&&(V===null?W=n.TEXTURE0+q-1:W=V);let j=ue[W];j===void 0&&(j={type:void 0,texture:void 0},ue[W]=j),(j.type!==I||j.texture!==ee)&&(V!==W&&(n.activeTexture(W),V=W),n.bindTexture(I,ee||K[I]),j.type=I,j.texture=ee)}function k(){let I=ue[V];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xe(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(I){qe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),qe.copy(I))}function de(I){ut.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ut.copy(I))}function Ie(I,ee){let W=c.get(ee);W===void 0&&(W=new WeakMap,c.set(ee,W));let j=W.get(I);j===void 0&&(j=n.getUniformBlockIndex(ee,I.name),W.set(I,j))}function He(I,ee){let j=c.get(ee).get(I);a.get(ee)!==j&&(n.uniformBlockBinding(ee,j,I.__bindingPointIndex),a.set(ee,j))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},V=null,ue={},u={},d=new WeakMap,h=[],f=null,g=!1,v=null,m=null,p=null,S=null,M=null,b=null,N=null,A=new Ke(0,0,0),T=0,O=!1,w=null,x=null,D=null,H=null,B=null,qe.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:ce,bindFramebuffer:Ne,drawBuffers:ze,useProgram:We,setBlending:wt,setMaterial:at,setFlipSided:dt,setCullFace:_e,setLineWidth:bt,setPolygonOffset:De,setScissorTest:Oe,activeTexture:E,bindTexture:y,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:ae,texImage3D:Xe,updateUBOMapping:Ie,uniformBlockBinding:He,texStorage2D:Fe,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:xe,compressedTexSubImage2D:se,compressedTexSubImage3D:le,scissor:Ce,viewport:de,reset:pt}}function hx(n,e,t,i){let r=VN(i);switch(t){case xx:return n*e;case wx:return n*e;case bx:return n*e*2;case Sx:return n*e/r.components*r.byteLength;case Kp:return n*e/r.components*r.byteLength;case Ex:return n*e*2/r.components*r.byteLength;case Qp:return n*e*2/r.components*r.byteLength;case Mx:return n*e*3/r.components*r.byteLength;case jn:return n*e*4/r.components*r.byteLength;case em:return n*e*4/r.components*r.byteLength;case wl:case bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sl:case El:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xf:case Zf:return Math.max(n,16)*Math.max(e,8)/4;case qf:case Yf:return Math.max(n,8)*Math.max(e,8)/2;case Jf:case Kf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ep:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case np:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ip:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case rp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case sp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case op:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ap:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case lp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case up:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case dp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case hp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Tl:case pp:case mp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Tx:case gp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case vp:case yp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function VN(n){switch(n){case Ei:case vx:return{byteLength:1,components:1};case aa:case yx:case fa:return{byteLength:2,components:1};case Zp:case Jp:return{byteLength:2,components:4};case Ur:case Yp:case bi:return{byteLength:4,components:1};case _x:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function zN(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return f?new OffscreenCanvas(E,y):Nl("canvas")}function v(E,y,k){let Z=1,J=Oe(E);if((J.width>k||J.height>k)&&(Z=k/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Y=Math.floor(Z*J.width),xe=Math.floor(Z*J.height);d===void 0&&(d=g(Y,xe));let se=y?g(Y,xe):d;return se.width=Y,se.height=xe,se.getContext("2d").drawImage(E,0,0,Y,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+xe+")."),se}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps&&E.minFilter!==In&&E.minFilter!==Wn}function p(E){n.generateMipmap(E)}function S(E,y,k,Z,J=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=y;if(y===n.RED&&(k===n.FLOAT&&(Y=n.R32F),k===n.HALF_FLOAT&&(Y=n.R16F),k===n.UNSIGNED_BYTE&&(Y=n.R8)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.R8UI),k===n.UNSIGNED_SHORT&&(Y=n.R16UI),k===n.UNSIGNED_INT&&(Y=n.R32UI),k===n.BYTE&&(Y=n.R8I),k===n.SHORT&&(Y=n.R16I),k===n.INT&&(Y=n.R32I)),y===n.RG&&(k===n.FLOAT&&(Y=n.RG32F),k===n.HALF_FLOAT&&(Y=n.RG16F),k===n.UNSIGNED_BYTE&&(Y=n.RG8)),y===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RG8UI),k===n.UNSIGNED_SHORT&&(Y=n.RG16UI),k===n.UNSIGNED_INT&&(Y=n.RG32UI),k===n.BYTE&&(Y=n.RG8I),k===n.SHORT&&(Y=n.RG16I),k===n.INT&&(Y=n.RG32I)),y===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),y===n.RGBA){let xe=J?Dl:lt.getTransfer(Z);k===n.FLOAT&&(Y=n.RGBA32F),k===n.HALF_FLOAT&&(Y=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Y=xe===ft?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(E,y){let k;return E?y===null||y===Ur||y===Js?k=n.DEPTH24_STENCIL8:y===bi?k=n.DEPTH32F_STENCIL8:y===aa&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ur||y===Js?k=n.DEPTH_COMPONENT24:y===bi?k=n.DEPTH_COMPONENT32F:y===aa&&(k=n.DEPTH_COMPONENT16),k}function b(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==In&&E.minFilter!==Wn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function N(E){let y=E.target;y.removeEventListener("dispose",N),T(y),y.isVideoTexture&&u.delete(y)}function A(E){let y=E.target;y.removeEventListener("dispose",A),w(y)}function T(E){let y=i.get(E);if(y.__webglInit===void 0)return;let k=E.source,Z=h.get(k);if(Z){let J=Z[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&O(E),Object.keys(Z).length===0&&h.delete(k)}i.remove(E)}function O(E){let y=i.get(E);n.deleteTexture(y.__webglTexture);let k=E.source,Z=h.get(k);delete Z[y.__cacheKey],o.memory.textures--}function w(E){let y=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let J=0;J<y.__webglFramebuffer[Z].length;J++)n.deleteFramebuffer(y.__webglFramebuffer[Z][J]);else n.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[Z]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=E.textures;for(let Z=0,J=k.length;Z<J;Z++){let Y=i.get(k[Z]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(k[Z])}i.remove(E)}let x=0;function D(){x=0}function H(){let E=x;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),x+=1,E}function B(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function q(E,y){let k=i.get(E);if(E.isVideoTexture&&bt(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){let Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(k,E,y);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function $(E,y){let k=i.get(E);if(E.version>0&&k.__version!==E.version){ut(k,E,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function G(E,y){let k=i.get(E);if(E.version>0&&k.__version!==E.version){ut(k,E,y);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function X(E,y){let k=i.get(E);if(E.version>0&&k.__version!==E.version){z(k,E,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}let V={[jf]:n.REPEAT,[Lr]:n.CLAMP_TO_EDGE,[$f]:n.MIRRORED_REPEAT},ue={[In]:n.NEAREST,[HD]:n.NEAREST_MIPMAP_NEAREST,[Qc]:n.NEAREST_MIPMAP_LINEAR,[Wn]:n.LINEAR,[hf]:n.LINEAR_MIPMAP_NEAREST,[Fr]:n.LINEAR_MIPMAP_LINEAR},me={[qD]:n.NEVER,[QD]:n.ALWAYS,[XD]:n.LESS,[Cx]:n.LEQUAL,[YD]:n.EQUAL,[KD]:n.GEQUAL,[ZD]:n.GREATER,[JD]:n.NOTEQUAL};function ge(E,y){if(y.type===bi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Wn||y.magFilter===hf||y.magFilter===Qc||y.magFilter===Fr||y.minFilter===Wn||y.minFilter===hf||y.minFilter===Qc||y.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,V[y.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,V[y.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,V[y.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ue[y.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ue[y.minFilter]),y.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===In||y.minFilter!==Qc&&y.minFilter!==Fr||y.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function qe(E,y){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",N));let Z=y.source,J=h.get(Z);J===void 0&&(J={},h.set(Z,J));let Y=B(y);if(Y!==E.__cacheKey){J[Y]===void 0&&(J[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[Y].usedTimes++;let xe=J[E.__cacheKey];xe!==void 0&&(J[E.__cacheKey].usedTimes--,xe.usedTimes===0&&O(y)),E.__cacheKey=Y,E.__webglTexture=J[Y].texture}return k}function ut(E,y,k){let Z=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=n.TEXTURE_3D);let J=qe(E,y),Y=y.source;t.bindTexture(Z,E.__webglTexture,n.TEXTURE0+k);let xe=i.get(Y);if(Y.version!==xe.__version||J===!0){t.activeTexture(n.TEXTURE0+k);let se=lt.getPrimaries(lt.workingColorSpace),le=y.colorSpace===Yi?null:lt.getPrimaries(y.colorSpace),Fe=y.colorSpace===Yi||se===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let Q=v(y.image,!1,r.maxTextureSize);Q=De(y,Q);let ae=s.convert(y.format,y.colorSpace),Xe=s.convert(y.type),Ce=S(y.internalFormat,ae,Xe,y.colorSpace,y.isVideoTexture);ge(Z,y);let de,Ie=y.mipmaps,He=y.isVideoTexture!==!0,pt=xe.__version===void 0||J===!0,I=Y.dataReady,ee=b(y,Q);if(y.isDepthTexture)Ce=M(y.format===Ks,y.type),pt&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ce,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Ce,Q.width,Q.height,0,ae,Xe,null));else if(y.isDataTexture)if(Ie.length>0){He&&pt&&t.texStorage2D(n.TEXTURE_2D,ee,Ce,Ie[0].width,Ie[0].height);for(let W=0,j=Ie.length;W<j;W++)de=Ie[W],He?I&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,de.width,de.height,ae,Xe,de.data):t.texImage2D(n.TEXTURE_2D,W,Ce,de.width,de.height,0,ae,Xe,de.data);y.generateMipmaps=!1}else He?(pt&&t.texStorage2D(n.TEXTURE_2D,ee,Ce,Q.width,Q.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,ae,Xe,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,Q.width,Q.height,0,ae,Xe,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){He&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,Ce,Ie[0].width,Ie[0].height,Q.depth);for(let W=0,j=Ie.length;W<j;W++)if(de=Ie[W],y.format!==jn)if(ae!==null)if(He){if(I)if(y.layerUpdates.size>0){let ne=hx(de.width,de.height,y.format,y.type);for(let we of y.layerUpdates){let Qe=de.data.subarray(we*ne/de.data.BYTES_PER_ELEMENT,(we+1)*ne/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,we,de.width,de.height,1,ae,Qe,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,Q.depth,ae,de.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Ce,de.width,de.height,Q.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,Q.depth,ae,Xe,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,Ce,de.width,de.height,Q.depth,0,ae,Xe,de.data)}else{He&&pt&&t.texStorage2D(n.TEXTURE_2D,ee,Ce,Ie[0].width,Ie[0].height);for(let W=0,j=Ie.length;W<j;W++)de=Ie[W],y.format!==jn?ae!==null?He?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,de.width,de.height,ae,de.data):t.compressedTexImage2D(n.TEXTURE_2D,W,Ce,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?I&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,de.width,de.height,ae,Xe,de.data):t.texImage2D(n.TEXTURE_2D,W,Ce,de.width,de.height,0,ae,Xe,de.data)}else if(y.isDataArrayTexture)if(He){if(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,Ce,Q.width,Q.height,Q.depth),I)if(y.layerUpdates.size>0){let W=hx(Q.width,Q.height,y.format,y.type);for(let j of y.layerUpdates){let ne=Q.data.subarray(j*W/Q.data.BYTES_PER_ELEMENT,(j+1)*W/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,ae,Xe,ne)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ae,Xe,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,Q.width,Q.height,Q.depth,0,ae,Xe,Q.data);else if(y.isData3DTexture)He?(pt&&t.texStorage3D(n.TEXTURE_3D,ee,Ce,Q.width,Q.height,Q.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ae,Xe,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,Q.width,Q.height,Q.depth,0,ae,Xe,Q.data);else if(y.isFramebufferTexture){if(pt)if(He)t.texStorage2D(n.TEXTURE_2D,ee,Ce,Q.width,Q.height);else{let W=Q.width,j=Q.height;for(let ne=0;ne<ee;ne++)t.texImage2D(n.TEXTURE_2D,ne,Ce,W,j,0,ae,Xe,null),W>>=1,j>>=1}}else if(Ie.length>0){if(He&&pt){let W=Oe(Ie[0]);t.texStorage2D(n.TEXTURE_2D,ee,Ce,W.width,W.height)}for(let W=0,j=Ie.length;W<j;W++)de=Ie[W],He?I&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ae,Xe,de):t.texImage2D(n.TEXTURE_2D,W,Ce,ae,Xe,de);y.generateMipmaps=!1}else if(He){if(pt){let W=Oe(Q);t.texStorage2D(n.TEXTURE_2D,ee,Ce,W.width,W.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,Xe,Q)}else t.texImage2D(n.TEXTURE_2D,0,Ce,ae,Xe,Q);m(y)&&p(Z),xe.__version=Y.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function z(E,y,k){if(y.image.length!==6)return;let Z=qe(E,y),J=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+k);let Y=i.get(J);if(J.version!==Y.__version||Z===!0){t.activeTexture(n.TEXTURE0+k);let xe=lt.getPrimaries(lt.workingColorSpace),se=y.colorSpace===Yi?null:lt.getPrimaries(y.colorSpace),le=y.colorSpace===Yi||xe===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Fe=y.isCompressedTexture||y.image[0].isCompressedTexture,Q=y.image[0]&&y.image[0].isDataTexture,ae=[];for(let j=0;j<6;j++)!Fe&&!Q?ae[j]=v(y.image[j],!0,r.maxCubemapSize):ae[j]=Q?y.image[j].image:y.image[j],ae[j]=De(y,ae[j]);let Xe=ae[0],Ce=s.convert(y.format,y.colorSpace),de=s.convert(y.type),Ie=S(y.internalFormat,Ce,de,y.colorSpace),He=y.isVideoTexture!==!0,pt=Y.__version===void 0||Z===!0,I=J.dataReady,ee=b(y,Xe);ge(n.TEXTURE_CUBE_MAP,y);let W;if(Fe){He&&pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ee,Ie,Xe.width,Xe.height);for(let j=0;j<6;j++){W=ae[j].mipmaps;for(let ne=0;ne<W.length;ne++){let we=W[ne];y.format!==jn?Ce!==null?He?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,0,0,we.width,we.height,Ce,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,Ie,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,0,0,we.width,we.height,Ce,de,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,Ie,we.width,we.height,0,Ce,de,we.data)}}}else{if(W=y.mipmaps,He&&pt){W.length>0&&ee++;let j=Oe(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ee,Ie,j.width,j.height)}for(let j=0;j<6;j++)if(Q){He?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ae[j].width,ae[j].height,Ce,de,ae[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ie,ae[j].width,ae[j].height,0,Ce,de,ae[j].data);for(let ne=0;ne<W.length;ne++){let Qe=W[ne].image[j].image;He?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,0,0,Qe.width,Qe.height,Ce,de,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,Ie,Qe.width,Qe.height,0,Ce,de,Qe.data)}}else{He?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ce,de,ae[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ie,Ce,de,ae[j]);for(let ne=0;ne<W.length;ne++){let we=W[ne];He?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,0,0,Ce,de,we.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,Ie,Ce,de,we.image[j])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),Y.__version=J.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function K(E,y,k,Z,J,Y){let xe=s.convert(k.format,k.colorSpace),se=s.convert(k.type),le=S(k.internalFormat,xe,se,k.colorSpace);if(!i.get(y).__hasExternalTextures){let Q=Math.max(1,y.width>>Y),ae=Math.max(1,y.height>>Y);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Y,le,Q,ae,y.depth,0,xe,se,null):t.texImage2D(J,Y,le,Q,ae,0,xe,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),_e(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,J,i.get(k).__webglTexture,0,dt(y)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,J,i.get(k).__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(E,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,E),y.depthBuffer){let Z=y.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,Y=M(y.stencilBuffer,J),xe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=dt(y);_e(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,Y,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,Y,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Y,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,E)}else{let Z=y.textures;for(let J=0;J<Z.length;J++){let Y=Z[J],xe=s.convert(Y.format,Y.colorSpace),se=s.convert(Y.type),le=S(Y.internalFormat,xe,se,Y.colorSpace),Fe=dt(y);k&&_e(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,le,y.width,y.height):_e(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,le,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,le,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q(y.depthTexture,0);let Z=i.get(y.depthTexture).__webglTexture,J=dt(y);if(y.depthTexture.format===$s)_e(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(y.depthTexture.format===Ks)_e(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ne(E){let y=i.get(E),k=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ce(y.__webglFramebuffer,E)}else if(k){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]=n.createRenderbuffer(),he(y.__webglDepthbuffer[Z],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),he(y.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(E,y,k){let Z=i.get(E);y!==void 0&&K(Z.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Ne(E)}function We(E){let y=E.texture,k=i.get(E),Z=i.get(y);E.addEventListener("dispose",A);let J=E.textures,Y=E.isWebGLCubeRenderTarget===!0,xe=J.length>1;if(xe||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=y.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[se]=[];for(let le=0;le<y.mipmaps.length;le++)k.__webglFramebuffer[se][le]=n.createFramebuffer()}else k.__webglFramebuffer[se]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let se=0;se<y.mipmaps.length;se++)k.__webglFramebuffer[se]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(xe)for(let se=0,le=J.length;se<le;se++){let Fe=i.get(J[se]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&_e(E)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){let le=J[se];k.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[se]);let Fe=s.convert(le.format,le.colorSpace),Q=s.convert(le.type),ae=S(le.internalFormat,Fe,Q,le.colorSpace,E.isXRRenderTarget===!0),Xe=dt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,ae,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,k.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),he(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ge(n.TEXTURE_CUBE_MAP,y);for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)K(k.__webglFramebuffer[se][le],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,le);else K(k.__webglFramebuffer[se],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let se=0,le=J.length;se<le;se++){let Fe=J[se],Q=i.get(Fe);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),ge(n.TEXTURE_2D,Fe),K(k.__webglFramebuffer,E,Fe,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),m(Fe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(se=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),ge(se,y),y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)K(k.__webglFramebuffer[le],E,y,n.COLOR_ATTACHMENT0,se,le);else K(k.__webglFramebuffer,E,y,n.COLOR_ATTACHMENT0,se,0);m(y)&&p(se),t.unbindTexture()}E.depthBuffer&&Ne(E)}function mt(E){let y=E.textures;for(let k=0,Z=y.length;k<Z;k++){let J=y[k];if(m(J)){let Y=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(J).__webglTexture;t.bindTexture(Y,xe),p(Y),t.unbindTexture()}}}let C=[],wt=[];function at(E){if(E.samples>0){if(_e(E)===!1){let y=E.textures,k=E.width,Z=E.height,J=n.COLOR_BUFFER_BIT,Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(E),se=y.length>1;if(se)for(let le=0;le<y.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let le=0;le<y.length;le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[le]);let Fe=i.get(y[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,k,Z,0,0,k,Z,J,n.NEAREST),c===!0&&(C.length=0,wt.length=0,C.push(n.COLOR_ATTACHMENT0+le),E.depthBuffer&&E.resolveDepthBuffer===!1&&(C.push(Y),wt.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,wt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let le=0;le<y.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,xe.__webglColorRenderbuffer[le]);let Fe=i.get(y[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function dt(E){return Math.min(r.maxSamples,E.samples)}function _e(E){let y=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function bt(E){let y=o.render.frame;u.get(E)!==y&&(u.set(E,y),E.update())}function De(E,y){let k=E.colorSpace,Z=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==tr&&k!==Yi&&(lt.getTransfer(k)===ft?(Z!==jn||J!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function Oe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=D,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=G,this.setTextureCube=X,this.rebindTextures=ze,this.setupRenderTarget=We,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=K,this.useMultisampledRTT=_e}function HN(n,e){function t(i,r=Yi){let s,o=lt.getTransfer(r);if(i===Ei)return n.UNSIGNED_BYTE;if(i===Zp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_x)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vx)return n.BYTE;if(i===yx)return n.SHORT;if(i===aa)return n.UNSIGNED_SHORT;if(i===Yp)return n.INT;if(i===Ur)return n.UNSIGNED_INT;if(i===bi)return n.FLOAT;if(i===fa)return n.HALF_FLOAT;if(i===xx)return n.ALPHA;if(i===Mx)return n.RGB;if(i===jn)return n.RGBA;if(i===wx)return n.LUMINANCE;if(i===bx)return n.LUMINANCE_ALPHA;if(i===$s)return n.DEPTH_COMPONENT;if(i===Ks)return n.DEPTH_STENCIL;if(i===Sx)return n.RED;if(i===Kp)return n.RED_INTEGER;if(i===Ex)return n.RG;if(i===Qp)return n.RG_INTEGER;if(i===em)return n.RGBA_INTEGER;if(i===wl||i===bl||i===Sl||i===El)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qf||i===Xf||i===Yf||i===Zf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jf||i===Kf||i===Qf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jf||i===Kf)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qf)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ep||i===tp||i===np||i===ip||i===rp||i===sp||i===op||i===ap||i===cp||i===lp||i===up||i===dp||i===hp||i===fp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ep)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===np)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ip)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===op)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ap)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===up)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fp)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tl||i===pp||i===mp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Tl)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tx||i===gp||i===vp||i===yp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Tl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Js?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Lp=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ws=class extends Ci{constructor(){super(),this.isGroup=!0,this.type="Group"}},GN={type:"move"},oa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(GN)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ws;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},WN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Fp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new zr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Pn({vertexShader:WN,fragmentShader:jN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new Hl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Up=class extends Qi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,v=new Fp,m=t.getContextAttributes(),p=null,S=null,M=[],b=[],N=new et,A=null,T=new Jt;T.layers.enable(1),T.viewport=new Ot;let O=new Jt;O.layers.enable(2),O.viewport=new Ot;let w=[T,O],x=new Lp;x.layers.enable(1),x.layers.enable(2);let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let K=M[z];return K===void 0&&(K=new oa,M[z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(z){let K=M[z];return K===void 0&&(K=new oa,M[z]=K),K.getGripSpace()},this.getHand=function(z){let K=M[z];return K===void 0&&(K=new oa,M[z]=K),K.getHandSpace()};function B(z){let K=b.indexOf(z.inputSource);if(K===-1)return;let he=M[K];he!==void 0&&(he.update(z.inputSource,z.frame,l||o),he.dispatchEvent({type:z.type,data:z.inputSource}))}function q(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",$);for(let z=0;z<M.length;z++){let K=b[z];K!==null&&(b[z]=null,M[z].disconnect(K))}D=null,H=null,v.reset(),e.setRenderTarget(p),f=null,h=null,d=null,r=null,S=null,ut.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(z){return Gr(this,null,function*(){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",q),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),A=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){let K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Ti(f.framebufferWidth,f.framebufferHeight,{format:jn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,he=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=m.stencil?Ks:$s,he=m.stencil?Js:Ur);let Ne={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Ti(h.textureWidth,h.textureHeight,{format:jn,type:Ei,depthTexture:new jl(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),ut.setContext(r),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(z){for(let K=0;K<z.removed.length;K++){let he=z.removed[K],ce=b.indexOf(he);ce>=0&&(b[ce]=null,M[ce].disconnect(he))}for(let K=0;K<z.added.length;K++){let he=z.added[K],ce=b.indexOf(he);if(ce===-1){for(let ze=0;ze<M.length;ze++)if(ze>=b.length){b.push(he),ce=ze;break}else if(b[ze]===null){b[ze]=he,ce=ze;break}if(ce===-1)break}let Ne=M[ce];Ne&&Ne.connect(he)}}let G=new L,X=new L;function V(z,K,he){G.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(he.matrixWorld);let ce=G.distanceTo(X),Ne=K.projectionMatrix.elements,ze=he.projectionMatrix.elements,We=Ne[14]/(Ne[10]-1),mt=Ne[14]/(Ne[10]+1),C=(Ne[9]+1)/Ne[5],wt=(Ne[9]-1)/Ne[5],at=(Ne[8]-1)/Ne[0],dt=(ze[8]+1)/ze[0],_e=We*at,bt=We*dt,De=ce/(-at+dt),Oe=De*-at;K.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Oe),z.translateZ(De),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let E=We+De,y=mt+De,k=_e-Oe,Z=bt+(ce-Oe),J=C*mt/y*E,Y=wt*mt/y*E;z.projectionMatrix.makePerspective(k,Z,J,Y,E,y),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function ue(z,K){K===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(K.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;v.texture!==null&&(z.near=v.depthNear,z.far=v.depthFar),x.near=O.near=T.near=z.near,x.far=O.far=T.far=z.far,(D!==x.near||H!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,H=x.far,T.near=D,T.far=H,O.near=D,O.far=H,T.updateProjectionMatrix(),O.updateProjectionMatrix(),z.updateProjectionMatrix());let K=z.parent,he=x.cameras;ue(x,K);for(let ce=0;ce<he.length;ce++)ue(he[ce],K);he.length===2?V(x,T,O):x.projectionMatrix.copy(T.projectionMatrix),me(z,x,K)};function me(z,K,he){he===null?z.matrix.copy(K.matrixWorld):(z.matrix.copy(he.matrixWorld),z.matrix.invert(),z.matrix.multiply(K.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=xp*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(z){c=z,h!==null&&(h.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let ge=null;function qe(z,K){if(u=K.getViewerPose(l||o),g=K,u!==null){let he=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let ce=!1;he.length!==x.cameras.length&&(x.cameras.length=0,ce=!0);for(let ze=0;ze<he.length;ze++){let We=he[ze],mt=null;if(f!==null)mt=f.getViewport(We);else{let wt=d.getViewSubImage(h,We);mt=wt.viewport,ze===0&&(e.setRenderTargetTextures(S,wt.colorTexture,h.ignoreDepthValues?void 0:wt.depthStencilTexture),e.setRenderTarget(S))}let C=w[ze];C===void 0&&(C=new Jt,C.layers.enable(ze),C.viewport=new Ot,w[ze]=C),C.matrix.fromArray(We.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(We.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(mt.x,mt.y,mt.width,mt.height),ze===0&&(x.matrix.copy(C.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ce===!0&&x.cameras.push(C)}let Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){let ze=d.getDepthInformation(he[0]);ze&&ze.isValid&&ze.texture&&v.init(e,ze,r.renderState)}}for(let he=0;he<M.length;he++){let ce=b[he],Ne=M[he];ce!==null&&Ne!==void 0&&Ne.update(ce,K,l||o)}ge&&ge(z,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let ut=new Px;ut.setAnimationLoop(qe),this.setAnimationLoop=function(z){ge=z},this.dispose=function(){}}},Rr=new Qs,$N=new At;function qN(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Rx(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,M,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),M=S.envMap,b=S.envMapRotation;M&&(m.envMap.value=M,Rr.copy(b),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),m.envMapRotation.value.setFromMatrix4($N.makeRotationFromEuler(Rr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function XN(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){let b=M.program;i.uniformBlockBinding(S,b)}function l(S,M){let b=r[S.id];b===void 0&&(g(S),b=u(S),r[S.id]=b,S.addEventListener("dispose",m));let N=M.program;i.updateUBOMapping(S,N);let A=e.render.frame;s[S.id]!==A&&(h(S),s[S.id]=A)}function u(S){let M=d();S.__bindingPointIndex=M;let b=n.createBuffer(),N=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,N,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,b),b}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let M=r[S.id],b=S.uniforms,N=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,T=b.length;A<T;A++){let O=Array.isArray(b[A])?b[A]:[b[A]];for(let w=0,x=O.length;w<x;w++){let D=O[w];if(f(D,A,w,N)===!0){let H=D.__offset,B=Array.isArray(D.value)?D.value:[D.value],q=0;for(let $=0;$<B.length;$++){let G=B[$],X=v(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,H+q,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,q),q+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,M,b,N){let A=S.value,T=M+"_"+b;if(N[T]===void 0)return typeof A=="number"||typeof A=="boolean"?N[T]=A:N[T]=A.clone(),!0;{let O=N[T];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return N[T]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(S){let M=S.uniforms,b=0,N=16;for(let T=0,O=M.length;T<O;T++){let w=Array.isArray(M[T])?M[T]:[M[T]];for(let x=0,D=w.length;x<D;x++){let H=w[x],B=Array.isArray(H.value)?H.value:[H.value];for(let q=0,$=B.length;q<$;q++){let G=B[q],X=v(G),V=b%N;V!==0&&N-V<X.boundary&&(b+=N-V),H.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=X.storage}}}let A=b%N;return A>0&&(b+=N-A),S.__size=b,S.__cache={},this}function v(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){let M=S.target;M.removeEventListener("dispose",m);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(let S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var $l=class{constructor(e={}){let{canvas:t=tI(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=Ji,this.toneMappingExposure=1;let M=this,b=!1,N=0,A=0,T=null,O=-1,w=null,x=new Ot,D=new Ot,H=null,B=new Ke(0),q=0,$=t.width,G=t.height,X=1,V=null,ue=null,me=new Ot(0,0,$,G),ge=new Ot(0,0,$,G),qe=!1,ut=new ua,z=!1,K=!1,he=new At,ce=new L,Ne=new Ot,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function mt(){return T===null?X:1}let C=i;function wt(_,R){return t.getContext(_,R)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xp}`),t.addEventListener("webglcontextlost",W,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",ne,!1),C===null){let R="webgl2";if(C=wt(R,_),C===null)throw wt(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let at,dt,_e,bt,De,Oe,E,y,k,Z,J,Y,xe,se,le,Fe,Q,ae,Xe,Ce,de,Ie,He,pt;function I(){at=new hP(C),at.init(),Ie=new HN(C,at),dt=new oP(C,at,e,Ie),_e=new BN(C),bt=new mP(C),De=new CN,Oe=new zN(C,at,_e,De,dt,Ie,bt),E=new cP(M),y=new dP(M),k=new wI(C),He=new rP(C,k),Z=new fP(C,k,bt,He),J=new vP(C,Z,k,bt),Xe=new gP(C,dt,Oe),Fe=new aP(De),Y=new TN(M,E,y,at,dt,He,Fe),xe=new qN(M,De),se=new DN,le=new LN(at),ae=new iP(M,E,y,_e,J,h,c),Q=new kN(M,J,dt),pt=new XN(C,bt,dt,_e),Ce=new sP(C,at,bt),de=new pP(C,at,bt),bt.programs=Y.programs,M.capabilities=dt,M.extensions=at,M.properties=De,M.renderLists=se,M.shadowMap=Q,M.state=_e,M.info=bt}I();let ee=new Up(M,C);this.xr=ee,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let _=at.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=at.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(_){_!==void 0&&(X=_,this.setSize($,G,!1))},this.getSize=function(_){return _.set($,G)},this.setSize=function(_,R,F=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=_,G=R,t.width=Math.floor(_*X),t.height=Math.floor(R*X),F===!0&&(t.style.width=_+"px",t.style.height=R+"px"),this.setViewport(0,0,_,R)},this.getDrawingBufferSize=function(_){return _.set($*X,G*X).floor()},this.setDrawingBufferSize=function(_,R,F){$=_,G=R,X=F,t.width=Math.floor(_*F),t.height=Math.floor(R*F),this.setViewport(0,0,_,R)},this.getCurrentViewport=function(_){return _.copy(x)},this.getViewport=function(_){return _.copy(me)},this.setViewport=function(_,R,F,U){_.isVector4?me.set(_.x,_.y,_.z,_.w):me.set(_,R,F,U),_e.viewport(x.copy(me).multiplyScalar(X).round())},this.getScissor=function(_){return _.copy(ge)},this.setScissor=function(_,R,F,U){_.isVector4?ge.set(_.x,_.y,_.z,_.w):ge.set(_,R,F,U),_e.scissor(D.copy(ge).multiplyScalar(X).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(_){_e.setScissorTest(qe=_)},this.setOpaqueSort=function(_){V=_},this.setTransparentSort=function(_){ue=_},this.getClearColor=function(_){return _.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(_=!0,R=!0,F=!0){let U=0;if(_){let P=!1;if(T!==null){let te=T.texture.format;P=te===em||te===Qp||te===Kp}if(P){let te=T.texture.type,oe=te===Ei||te===Ur||te===aa||te===Js||te===Zp||te===Jp,fe=ae.getClearColor(),pe=ae.getClearAlpha(),be=fe.r,Ee=fe.g,Me=fe.b;oe?(f[0]=be,f[1]=Ee,f[2]=Me,f[3]=pe,C.clearBufferuiv(C.COLOR,0,f)):(g[0]=be,g[1]=Ee,g[2]=Me,g[3]=pe,C.clearBufferiv(C.COLOR,0,g))}else U|=C.COLOR_BUFFER_BIT}R&&(U|=C.DEPTH_BUFFER_BIT),F&&(U|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),se.dispose(),le.dispose(),De.dispose(),E.dispose(),y.dispose(),J.dispose(),He.dispose(),pt.dispose(),Y.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",qn),ee.removeEventListener("sessionend",sm),nr.stop()};function W(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let _=bt.autoReset,R=Q.enabled,F=Q.autoUpdate,U=Q.needsUpdate,P=Q.type;I(),bt.autoReset=_,Q.enabled=R,Q.autoUpdate=F,Q.needsUpdate=U,Q.type=P}function ne(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function we(_){let R=_.target;R.removeEventListener("dispose",we),Qe(R)}function Qe(_){St(_),De.remove(_)}function St(_){let R=De.get(_).programs;R!==void 0&&(R.forEach(function(F){Y.releaseProgram(F)}),_.isShaderMaterial&&Y.releaseShaderCache(_))}this.renderBufferDirect=function(_,R,F,U,P,te){R===null&&(R=ze);let oe=P.isMesh&&P.matrixWorld.determinant()<0,fe=Gx(_,R,F,U,P);_e.setMaterial(U,oe);let pe=F.index,be=1;if(U.wireframe===!0){if(pe=Z.getWireframeAttribute(F),pe===void 0)return;be=2}let Ee=F.drawRange,Me=F.attributes.position,it=Ee.start*be,gt=(Ee.start+Ee.count)*be;te!==null&&(it=Math.max(it,te.start*be),gt=Math.min(gt,(te.start+te.count)*be)),pe!==null?(it=Math.max(it,0),gt=Math.min(gt,pe.count)):Me!=null&&(it=Math.max(it,0),gt=Math.min(gt,Me.count));let vt=gt-it;if(vt<0||vt===1/0)return;He.setup(P,U,fe,F,pe);let sn,rt=Ce;if(pe!==null&&(sn=k.get(pe),rt=de,rt.setIndex(sn)),P.isMesh)U.wireframe===!0?(_e.setLineWidth(U.wireframeLinewidth*mt()),rt.setMode(C.LINES)):rt.setMode(C.TRIANGLES);else if(P.isLine){let ye=U.linewidth;ye===void 0&&(ye=1),_e.setLineWidth(ye*mt()),P.isLineSegments?rt.setMode(C.LINES):P.isLineLoop?rt.setMode(C.LINE_LOOP):rt.setMode(C.LINE_STRIP)}else P.isPoints?rt.setMode(C.POINTS):P.isSprite&&rt.setMode(C.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)rt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))rt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let ye=P._multiDrawStarts,Ht=P._multiDrawCounts,st=P._multiDrawCount,Nn=pe?k.get(pe).bytesPerElement:1,Hr=De.get(U).currentProgram.getUniforms();for(let on=0;on<st;on++)Hr.setValue(C,"_gl_DrawID",on),rt.render(ye[on]/Nn,Ht[on])}else if(P.isInstancedMesh)rt.renderInstances(it,vt,P.count);else if(F.isInstancedBufferGeometry){let ye=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ht=Math.min(F.instanceCount,ye);rt.renderInstances(it,vt,Ht)}else rt.render(it,vt)};function zt(_,R,F){_.transparent===!0&&_.side===Gn&&_.forceSinglePass===!1?(_.side=rn,_.needsUpdate=!0,ga(_,R,F),_.side=Ki,_.needsUpdate=!0,ga(_,R,F),_.side=Gn):ga(_,R,F)}this.compile=function(_,R,F=null){F===null&&(F=_),m=le.get(F),m.init(R),S.push(m),F.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(m.pushLight(P),P.castShadow&&m.pushShadow(P))}),_!==F&&_.traverseVisible(function(P){P.isLight&&P.layers.test(R.layers)&&(m.pushLight(P),P.castShadow&&m.pushShadow(P))}),m.setupLights();let U=new Set;return _.traverse(function(P){let te=P.material;if(te)if(Array.isArray(te))for(let oe=0;oe<te.length;oe++){let fe=te[oe];zt(fe,F,P),U.add(fe)}else zt(te,F,P),U.add(te)}),S.pop(),m=null,U},this.compileAsync=function(_,R,F=null){let U=this.compile(_,R,F);return new Promise(P=>{function te(){if(U.forEach(function(oe){De.get(oe).currentProgram.isReady()&&U.delete(oe)}),U.size===0){P(_);return}setTimeout(te,10)}at.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let nt=null;function ci(_){nt&&nt(_)}function qn(){nr.stop()}function sm(){nr.start()}let nr=new Px;nr.setAnimationLoop(ci),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(_){nt=_,ee.setAnimationLoop(_),_===null?nr.stop():nr.start()},ee.addEventListener("sessionstart",qn),ee.addEventListener("sessionend",sm),this.render=function(_,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(R),R=ee.getCamera()),_.isScene===!0&&_.onBeforeRender(M,_,R,T),m=le.get(_,S.length),m.init(R),S.push(m),he.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),ut.setFromProjectionMatrix(he),K=this.localClippingEnabled,z=Fe.init(this.clippingPlanes,K),v=se.get(_,p.length),v.init(),p.push(v),ee.enabled===!0&&ee.isPresenting===!0){let te=M.xr.getDepthSensingMesh();te!==null&&tu(te,R,-1/0,M.sortObjects)}tu(_,R,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(V,ue),We=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,We&&ae.addToRenderList(v,_),this.info.render.frame++,z===!0&&Fe.beginShadows();let F=m.state.shadowsArray;Q.render(F,_,R),z===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let U=v.opaque,P=v.transmissive;if(m.setupLights(),R.isArrayCamera){let te=R.cameras;if(P.length>0)for(let oe=0,fe=te.length;oe<fe;oe++){let pe=te[oe];am(U,P,_,pe)}We&&ae.render(_);for(let oe=0,fe=te.length;oe<fe;oe++){let pe=te[oe];om(v,_,pe,pe.viewport)}}else P.length>0&&am(U,P,_,R),We&&ae.render(_),om(v,_,R);T!==null&&(Oe.updateMultisampleRenderTarget(T),Oe.updateRenderTargetMipmap(T)),_.isScene===!0&&_.onAfterRender(M,_,R),He.resetDefaultState(),O=-1,w=null,S.pop(),S.length>0?(m=S[S.length-1],z===!0&&Fe.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function tu(_,R,F,U){if(_.visible===!1)return;if(_.layers.test(R.layers)){if(_.isGroup)F=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(R);else if(_.isLight)m.pushLight(_),_.castShadow&&m.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||ut.intersectsSprite(_)){U&&Ne.setFromMatrixPosition(_.matrixWorld).applyMatrix4(he);let oe=J.update(_),fe=_.material;fe.visible&&v.push(_,oe,fe,F,Ne.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||ut.intersectsObject(_))){let oe=J.update(_),fe=_.material;if(U&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ne.copy(_.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ne.copy(oe.boundingSphere.center)),Ne.applyMatrix4(_.matrixWorld).applyMatrix4(he)),Array.isArray(fe)){let pe=oe.groups;for(let be=0,Ee=pe.length;be<Ee;be++){let Me=pe[be],it=fe[Me.materialIndex];it&&it.visible&&v.push(_,oe,it,F,Ne.z,Me)}}else fe.visible&&v.push(_,oe,fe,F,Ne.z,null)}}let te=_.children;for(let oe=0,fe=te.length;oe<fe;oe++)tu(te[oe],R,F,U)}function om(_,R,F,U){let P=_.opaque,te=_.transmissive,oe=_.transparent;m.setupLightsView(F),z===!0&&Fe.setGlobalState(M.clippingPlanes,F),U&&_e.viewport(x.copy(U)),P.length>0&&ma(P,R,F),te.length>0&&ma(te,R,F),oe.length>0&&ma(oe,R,F),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function am(_,R,F,U){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[U.id]===void 0&&(m.state.transmissionRenderTarget[U.id]=new Ti(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?fa:Ei,minFilter:Fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let te=m.state.transmissionRenderTarget[U.id],oe=U.viewport||x;te.setSize(oe.z,oe.w);let fe=M.getRenderTarget();M.setRenderTarget(te),M.getClearColor(B),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),We?ae.render(F):M.clear();let pe=M.toneMapping;M.toneMapping=Ji;let be=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),m.setupLightsView(U),z===!0&&Fe.setGlobalState(M.clippingPlanes,U),ma(_,F,U),Oe.updateMultisampleRenderTarget(te),Oe.updateRenderTargetMipmap(te),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let Me=0,it=R.length;Me<it;Me++){let gt=R[Me],vt=gt.object,sn=gt.geometry,rt=gt.material,ye=gt.group;if(rt.side===Gn&&vt.layers.test(U.layers)){let Ht=rt.side;rt.side=rn,rt.needsUpdate=!0,cm(vt,F,U,sn,rt,ye),rt.side=Ht,rt.needsUpdate=!0,Ee=!0}}Ee===!0&&(Oe.updateMultisampleRenderTarget(te),Oe.updateRenderTargetMipmap(te))}M.setRenderTarget(fe),M.setClearColor(B,q),be!==void 0&&(U.viewport=be),M.toneMapping=pe}function ma(_,R,F){let U=R.isScene===!0?R.overrideMaterial:null;for(let P=0,te=_.length;P<te;P++){let oe=_[P],fe=oe.object,pe=oe.geometry,be=U===null?oe.material:U,Ee=oe.group;fe.layers.test(F.layers)&&cm(fe,R,F,pe,be,Ee)}}function cm(_,R,F,U,P,te){_.onBeforeRender(M,R,F,U,P,te),_.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),P.transparent===!0&&P.side===Gn&&P.forceSinglePass===!1?(P.side=rn,P.needsUpdate=!0,M.renderBufferDirect(F,R,U,P,_,te),P.side=Ki,P.needsUpdate=!0,M.renderBufferDirect(F,R,U,P,_,te),P.side=Gn):M.renderBufferDirect(F,R,U,P,_,te),_.onAfterRender(M,R,F,U,P,te)}function ga(_,R,F){R.isScene!==!0&&(R=ze);let U=De.get(_),P=m.state.lights,te=m.state.shadowsArray,oe=P.state.version,fe=Y.getParameters(_,P.state,te,R,F),pe=Y.getProgramCacheKey(fe),be=U.programs;U.environment=_.isMeshStandardMaterial?R.environment:null,U.fog=R.fog,U.envMap=(_.isMeshStandardMaterial?y:E).get(_.envMap||U.environment),U.envMapRotation=U.environment!==null&&_.envMap===null?R.environmentRotation:_.envMapRotation,be===void 0&&(_.addEventListener("dispose",we),be=new Map,U.programs=be);let Ee=be.get(pe);if(Ee!==void 0){if(U.currentProgram===Ee&&U.lightsStateVersion===oe)return um(_,fe),Ee}else fe.uniforms=Y.getUniforms(_),_.onBeforeCompile(fe,M),Ee=Y.acquireProgram(fe,pe),be.set(pe,Ee),U.uniforms=fe.uniforms;let Me=U.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Me.clippingPlanes=Fe.uniform),um(_,fe),U.needsLights=jx(_),U.lightsStateVersion=oe,U.needsLights&&(Me.ambientLightColor.value=P.state.ambient,Me.lightProbe.value=P.state.probe,Me.directionalLights.value=P.state.directional,Me.directionalLightShadows.value=P.state.directionalShadow,Me.spotLights.value=P.state.spot,Me.spotLightShadows.value=P.state.spotShadow,Me.rectAreaLights.value=P.state.rectArea,Me.ltc_1.value=P.state.rectAreaLTC1,Me.ltc_2.value=P.state.rectAreaLTC2,Me.pointLights.value=P.state.point,Me.pointLightShadows.value=P.state.pointShadow,Me.hemisphereLights.value=P.state.hemi,Me.directionalShadowMap.value=P.state.directionalShadowMap,Me.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Me.spotShadowMap.value=P.state.spotShadowMap,Me.spotLightMatrix.value=P.state.spotLightMatrix,Me.spotLightMap.value=P.state.spotLightMap,Me.pointShadowMap.value=P.state.pointShadowMap,Me.pointShadowMatrix.value=P.state.pointShadowMatrix),U.currentProgram=Ee,U.uniformsList=null,Ee}function lm(_){if(_.uniformsList===null){let R=_.currentProgram.getUniforms();_.uniformsList=Xs.seqWithValue(R.seq,_.uniforms)}return _.uniformsList}function um(_,R){let F=De.get(_);F.outputColorSpace=R.outputColorSpace,F.batching=R.batching,F.batchingColor=R.batchingColor,F.instancing=R.instancing,F.instancingColor=R.instancingColor,F.instancingMorph=R.instancingMorph,F.skinning=R.skinning,F.morphTargets=R.morphTargets,F.morphNormals=R.morphNormals,F.morphColors=R.morphColors,F.morphTargetsCount=R.morphTargetsCount,F.numClippingPlanes=R.numClippingPlanes,F.numIntersection=R.numClipIntersection,F.vertexAlphas=R.vertexAlphas,F.vertexTangents=R.vertexTangents,F.toneMapping=R.toneMapping}function Gx(_,R,F,U,P){R.isScene!==!0&&(R=ze),Oe.resetTextureUnits();let te=R.fog,oe=U.isMeshStandardMaterial?R.environment:null,fe=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:tr,pe=(U.isMeshStandardMaterial?y:E).get(U.envMap||oe),be=U.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ee=!!F.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Me=!!F.morphAttributes.position,it=!!F.morphAttributes.normal,gt=!!F.morphAttributes.color,vt=Ji;U.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(vt=M.toneMapping);let sn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,rt=sn!==void 0?sn.length:0,ye=De.get(U),Ht=m.state.lights;if(z===!0&&(K===!0||_!==w)){let yn=_===w&&U.id===O;Fe.setState(U,_,yn)}let st=!1;U.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Ht.state.version||ye.outputColorSpace!==fe||P.isBatchedMesh&&ye.batching===!1||!P.isBatchedMesh&&ye.batching===!0||P.isBatchedMesh&&ye.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&ye.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&ye.instancing===!1||!P.isInstancedMesh&&ye.instancing===!0||P.isSkinnedMesh&&ye.skinning===!1||!P.isSkinnedMesh&&ye.skinning===!0||P.isInstancedMesh&&ye.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&ye.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&ye.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&ye.instancingMorph===!1&&P.morphTexture!==null||ye.envMap!==pe||U.fog===!0&&ye.fog!==te||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Fe.numPlanes||ye.numIntersection!==Fe.numIntersection)||ye.vertexAlphas!==be||ye.vertexTangents!==Ee||ye.morphTargets!==Me||ye.morphNormals!==it||ye.morphColors!==gt||ye.toneMapping!==vt||ye.morphTargetsCount!==rt)&&(st=!0):(st=!0,ye.__version=U.version);let Nn=ye.currentProgram;st===!0&&(Nn=ga(U,R,P));let Hr=!1,on=!1,nu=!1,Et=Nn.getUniforms(),Di=ye.uniforms;if(_e.useProgram(Nn.program)&&(Hr=!0,on=!0,nu=!0),U.id!==O&&(O=U.id,on=!0),Hr||w!==_){Et.setValue(C,"projectionMatrix",_.projectionMatrix),Et.setValue(C,"viewMatrix",_.matrixWorldInverse);let yn=Et.map.cameraPosition;yn!==void 0&&yn.setValue(C,ce.setFromMatrixPosition(_.matrixWorld)),dt.logarithmicDepthBuffer&&Et.setValue(C,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Et.setValue(C,"isOrthographic",_.isOrthographicCamera===!0),w!==_&&(w=_,on=!0,nu=!0)}if(P.isSkinnedMesh){Et.setOptional(C,P,"bindMatrix"),Et.setOptional(C,P,"bindMatrixInverse");let yn=P.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Et.setValue(C,"boneTexture",yn.boneTexture,Oe))}P.isBatchedMesh&&(Et.setOptional(C,P,"batchingTexture"),Et.setValue(C,"batchingTexture",P._matricesTexture,Oe),Et.setOptional(C,P,"batchingIdTexture"),Et.setValue(C,"batchingIdTexture",P._indirectTexture,Oe),Et.setOptional(C,P,"batchingColorTexture"),P._colorsTexture!==null&&Et.setValue(C,"batchingColorTexture",P._colorsTexture,Oe));let iu=F.morphAttributes;if((iu.position!==void 0||iu.normal!==void 0||iu.color!==void 0)&&Xe.update(P,F,Nn),(on||ye.receiveShadow!==P.receiveShadow)&&(ye.receiveShadow=P.receiveShadow,Et.setValue(C,"receiveShadow",P.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Di.envMap.value=pe,Di.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&R.environment!==null&&(Di.envMapIntensity.value=R.environmentIntensity),on&&(Et.setValue(C,"toneMappingExposure",M.toneMappingExposure),ye.needsLights&&Wx(Di,nu),te&&U.fog===!0&&xe.refreshFogUniforms(Di,te),xe.refreshMaterialUniforms(Di,U,X,G,m.state.transmissionRenderTarget[_.id]),Xs.upload(C,lm(ye),Di,Oe)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Xs.upload(C,lm(ye),Di,Oe),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Et.setValue(C,"center",P.center),Et.setValue(C,"modelViewMatrix",P.modelViewMatrix),Et.setValue(C,"normalMatrix",P.normalMatrix),Et.setValue(C,"modelMatrix",P.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let yn=U.uniformsGroups;for(let ru=0,$x=yn.length;ru<$x;ru++){let dm=yn[ru];pt.update(dm,Nn),pt.bind(dm,Nn)}}return Nn}function Wx(_,R){_.ambientLightColor.needsUpdate=R,_.lightProbe.needsUpdate=R,_.directionalLights.needsUpdate=R,_.directionalLightShadows.needsUpdate=R,_.pointLights.needsUpdate=R,_.pointLightShadows.needsUpdate=R,_.spotLights.needsUpdate=R,_.spotLightShadows.needsUpdate=R,_.rectAreaLights.needsUpdate=R,_.hemisphereLights.needsUpdate=R}function jx(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(_,R,F){De.get(_.texture).__webglTexture=R,De.get(_.depthTexture).__webglTexture=F;let U=De.get(_);U.__hasExternalTextures=!0,U.__autoAllocateDepthBuffer=F===void 0,U.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,R){let F=De.get(_);F.__webglFramebuffer=R,F.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(_,R=0,F=0){T=_,N=R,A=F;let U=!0,P=null,te=!1,oe=!1;if(_){let pe=De.get(_);pe.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(C.FRAMEBUFFER,null),U=!1):pe.__webglFramebuffer===void 0?Oe.setupRenderTarget(_):pe.__hasExternalTextures&&Oe.rebindTextures(_,De.get(_.texture).__webglTexture,De.get(_.depthTexture).__webglTexture);let be=_.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(oe=!0);let Ee=De.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ee[R])?P=Ee[R][F]:P=Ee[R],te=!0):_.samples>0&&Oe.useMultisampledRTT(_)===!1?P=De.get(_).__webglMultisampledFramebuffer:Array.isArray(Ee)?P=Ee[F]:P=Ee,x.copy(_.viewport),D.copy(_.scissor),H=_.scissorTest}else x.copy(me).multiplyScalar(X).floor(),D.copy(ge).multiplyScalar(X).floor(),H=qe;if(_e.bindFramebuffer(C.FRAMEBUFFER,P)&&U&&_e.drawBuffers(_,P),_e.viewport(x),_e.scissor(D),_e.setScissorTest(H),te){let pe=De.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+R,pe.__webglTexture,F)}else if(oe){let pe=De.get(_.texture),be=R||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,pe.__webglTexture,F||0,be)}O=-1},this.readRenderTargetPixels=function(_,R,F,U,P,te,oe){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=De.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&oe!==void 0&&(fe=fe[oe]),fe){_e.bindFramebuffer(C.FRAMEBUFFER,fe);try{let pe=_.texture,be=pe.format,Ee=pe.type;if(!dt.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=_.width-U&&F>=0&&F<=_.height-P&&C.readPixels(R,F,U,P,Ie.convert(be),Ie.convert(Ee),te)}finally{let pe=T!==null?De.get(T).__webglFramebuffer:null;_e.bindFramebuffer(C.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=function(_,R,F,U,P,te,oe){return Gr(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=De.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&oe!==void 0&&(fe=fe[oe]),fe){_e.bindFramebuffer(C.FRAMEBUFFER,fe);try{let pe=_.texture,be=pe.format,Ee=pe.type;if(!dt.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(R>=0&&R<=_.width-U&&F>=0&&F<=_.height-P){let Me=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Me),C.bufferData(C.PIXEL_PACK_BUFFER,te.byteLength,C.STREAM_READ),C.readPixels(R,F,U,P,Ie.convert(be),Ie.convert(Ee),0),C.flush();let it=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);yield nI(C,it,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,Me),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,te)}finally{C.deleteBuffer(Me),C.deleteSync(it)}return te}}finally{let pe=T!==null?De.get(T).__webglFramebuffer:null;_e.bindFramebuffer(C.FRAMEBUFFER,pe)}}})},this.copyFramebufferToTexture=function(_,R=null,F=0){_.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),R=arguments[0]||null,_=arguments[1]);let U=Math.pow(2,-F),P=Math.floor(_.image.width*U),te=Math.floor(_.image.height*U),oe=R!==null?R.x:0,fe=R!==null?R.y:0;Oe.setTexture2D(_,0),C.copyTexSubImage2D(C.TEXTURE_2D,F,0,0,oe,fe,P,te),_e.unbindTexture()},this.copyTextureToTexture=function(_,R,F=null,U=null,P=0){_.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),U=arguments[0]||null,_=arguments[1],R=arguments[2],P=arguments[3]||0,F=null);let te,oe,fe,pe,be,Ee;F!==null?(te=F.max.x-F.min.x,oe=F.max.y-F.min.y,fe=F.min.x,pe=F.min.y):(te=_.image.width,oe=_.image.height,fe=0,pe=0),U!==null?(be=U.x,Ee=U.y):(be=0,Ee=0);let Me=Ie.convert(R.format),it=Ie.convert(R.type);Oe.setTexture2D(R,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,R.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,R.unpackAlignment);let gt=C.getParameter(C.UNPACK_ROW_LENGTH),vt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),sn=C.getParameter(C.UNPACK_SKIP_PIXELS),rt=C.getParameter(C.UNPACK_SKIP_ROWS),ye=C.getParameter(C.UNPACK_SKIP_IMAGES),Ht=_.isCompressedTexture?_.mipmaps[P]:_.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Ht.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ht.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,fe),C.pixelStorei(C.UNPACK_SKIP_ROWS,pe),_.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,P,be,Ee,te,oe,Me,it,Ht.data):_.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,P,be,Ee,Ht.width,Ht.height,Me,Ht.data):C.texSubImage2D(C.TEXTURE_2D,P,be,Ee,te,oe,Me,it,Ht),C.pixelStorei(C.UNPACK_ROW_LENGTH,gt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,vt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,sn),C.pixelStorei(C.UNPACK_SKIP_ROWS,rt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ye),P===0&&R.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(_,R,F=null,U=null,P=0){_.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,U=arguments[1]||null,_=arguments[2],R=arguments[3],P=arguments[4]||0);let te,oe,fe,pe,be,Ee,Me,it,gt,vt=_.isCompressedTexture?_.mipmaps[P]:_.image;F!==null?(te=F.max.x-F.min.x,oe=F.max.y-F.min.y,fe=F.max.z-F.min.z,pe=F.min.x,be=F.min.y,Ee=F.min.z):(te=vt.width,oe=vt.height,fe=vt.depth,pe=0,be=0,Ee=0),U!==null?(Me=U.x,it=U.y,gt=U.z):(Me=0,it=0,gt=0);let sn=Ie.convert(R.format),rt=Ie.convert(R.type),ye;if(R.isData3DTexture)Oe.setTexture3D(R,0),ye=C.TEXTURE_3D;else if(R.isDataArrayTexture||R.isCompressedArrayTexture)Oe.setTexture2DArray(R,0),ye=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,R.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,R.unpackAlignment);let Ht=C.getParameter(C.UNPACK_ROW_LENGTH),st=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Nn=C.getParameter(C.UNPACK_SKIP_PIXELS),Hr=C.getParameter(C.UNPACK_SKIP_ROWS),on=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,vt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,vt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,pe),C.pixelStorei(C.UNPACK_SKIP_ROWS,be),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ee),_.isDataTexture||_.isData3DTexture?C.texSubImage3D(ye,P,Me,it,gt,te,oe,fe,sn,rt,vt.data):R.isCompressedArrayTexture?C.compressedTexSubImage3D(ye,P,Me,it,gt,te,oe,fe,sn,vt.data):C.texSubImage3D(ye,P,Me,it,gt,te,oe,fe,sn,rt,vt),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ht),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,st),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Nn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Hr),C.pixelStorei(C.UNPACK_SKIP_IMAGES,on),P===0&&R.generateMipmaps&&C.generateMipmap(ye),_e.unbindTexture()},this.initRenderTarget=function(_){De.get(_).__webglFramebuffer===void 0&&Oe.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Oe.setTextureCube(_,0):_.isData3DTexture?Oe.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Oe.setTexture2DArray(_,0):Oe.setTexture2D(_,0),_e.unbindTexture()},this.resetState=function(){N=0,A=0,T=null,_e.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===tm?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===Ql?"display-p3":"srgb"}};var ql=class extends Ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qs,this.environmentIntensity=1,this.environmentRotation=new Qs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var da=class n extends Ai{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],c=[],l=[],u=new L,d=new L,h=new L;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){let v=g/r*s,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){let v=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,S=(r+1)*f+g;o.push(v,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ha=class n extends Ai{constructor(e=1,t=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);let a=[],c=[],l=[],u=[],d=new L,h=new L,f=new L,g=new L,v=new L,m=new L,p=new L;for(let M=0;M<=i;++M){let b=M/i*s*Math.PI*2;S(b,s,o,e,f),S(b+.01,s,o,e,g),m.subVectors(g,f),p.addVectors(g,f),v.crossVectors(m,p),p.crossVectors(v,m),v.normalize(),p.normalize();for(let N=0;N<=r;++N){let A=N/r*Math.PI*2,T=-t*Math.cos(A),O=t*Math.sin(A);d.x=f.x+(T*p.x+O*v.x),d.y=f.y+(T*p.y+O*v.y),d.z=f.z+(T*p.z+O*v.z),c.push(d.x,d.y,d.z),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),u.push(M/i),u.push(N/r)}}for(let M=1;M<=i;M++)for(let b=1;b<=r;b++){let N=(r+1)*(M-1)+(b-1),A=(r+1)*M+(b-1),T=(r+1)*M+b,O=(r+1)*(M-1)+b;a.push(N,A,O),a.push(A,T,O)}this.setIndex(a),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(u,2));function S(M,b,N,A,T){let O=Math.cos(M),w=Math.sin(M),x=N/b*M,D=Math.cos(x);T.x=A*(2+D)*.5*O,T.y=A*(2+D)*w*.5,T.z=A*Math.sin(x)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}};function Ml(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function YN(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var no=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kp=class extends no{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:__,endingEnd:__}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case x_:s=e,a=2*t-i;break;case M_:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case x_:o=e,c=2*i-t;break;case M_:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,S=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,M=(-1-f)*m+(1.5+f)*v+.5*g,b=f*m-f*v;for(let N=0;N!==a;++N)s[N]=p*o[u+N]+S*o[l+N]+M*o[c+N]+b*o[d+N];return s}},Bp=class extends no{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},Vp=class extends no{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},$n=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ml(t,this.TimeBufferType),this.values=Ml(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ml(e.times,Array),values:Ml(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Vp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Al:t=this.InterpolantFactoryMethodDiscrete;break;case _p:t=this.InterpolantFactoryMethodLinear;break;case ff:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Al;case this.InterpolantFactoryMethodLinear:return _p;case this.InterpolantFactoryMethodSmooth:return ff}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&YN(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ff,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[h+g]||v!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=_p;var Br=class extends $n{constructor(e,t,i){super(e,t,i)}};Br.prototype.ValueTypeName="bool";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=Al;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;var zp=class extends $n{};zp.prototype.ValueTypeName="color";var Hp=class extends $n{};Hp.prototype.ValueTypeName="number";var Gp=class extends no{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)er.slerpFlat(s,0,o,l-a,o,l,c);return s}},Xl=class extends $n{InterpolantFactoryMethodLinear(e){return new Gp(this.times,this.values,this.getValueSize(),e)}};Xl.prototype.ValueTypeName="quaternion";Xl.prototype.InterpolantFactoryMethodSmooth=void 0;var Vr=class extends $n{constructor(e,t,i){super(e,t,i)}};Vr.prototype.ValueTypeName="string";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=Al;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Wp=class extends $n{};Wp.prototype.ValueTypeName="vector";var Yl=class extends Ci{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Vf=new At,fx=new L,px=new L,jp=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;fx.setFromMatrixPosition(e.matrixWorld),t.position.copy(fx),px.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(px),t.updateMatrixWorld(),Vf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var $p=class extends jp{constructor(){super(new Gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zl=class extends Yl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ci.DEFAULT_UP),this.updateMatrix(),this.target=new Ci,this.shadow=new $p}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Jl=class extends Yl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var im="\\[\\]\\.:\\/",ZN=new RegExp("["+im+"]","g"),rm="[^"+im+"]",JN="[^"+im.replace("\\.","")+"]",KN=/((?:WC+[\/:])*)/.source.replace("WC",rm),QN=/(WCOD+)?/.source.replace("WCOD",JN),eO=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rm),tO=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rm),nO=new RegExp("^"+KN+QN+eO+tO+"$"),iO=["material","materials","bones","map"],qp=class{constructor(e,t,i){let r=i||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Mt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ZN,"")}static parseTrackName(t){let i=nO.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);iO.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=qp,n})();Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var PB=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xp);var sO=["canvas"],Ux=(()=>{let e=class e{constructor(i,r){this.el=i,this.mouseX=0,this.mouseY=0,this.isBrowser=h0(r)}ngAfterViewInit(){this.isBrowser&&(this.initThreeJS(),this.animate(),this.addHoverListeners())}ngOnDestroy(){this.isBrowser&&(cancelAnimationFrame(this.animationId),this.renderer.dispose())}initThreeJS(){let i=this.canvasRef.nativeElement,r=i.clientWidth,s=i.clientHeight;this.scene=new ql,this.camera=new Jt(75,r/s,.1,1e3),this.camera.position.z=5,this.renderer=new $l({antialias:!0,alpha:!0}),this.renderer.setSize(r,s),this.renderer.setClearColor(0,0),i.appendChild(this.renderer.domElement);let o=new Jl(4210752);this.scene.add(o);let a=new Zl(11053224,1);a.position.set(-7,4,2),a.castShadow=!0,a.shadow.mapSize.width=1024,a.shadow.mapSize.height=1024,a.shadow.camera.near=.5,a.shadow.camera.far=500,this.scene.add(a),this.addShapes()}addShapes(){let i=(h,f)=>new Pn({uniforms:{color1:{value:new Ke(h)},color2:{value:new Ke(f)}},vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec2 vUv;
          void main() {
            gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
          }
        `,side:Gn}),r=new da(1,.5,16,100),s=i("rgba(255,165,105,0.6)","#FFD700");this.object1=new Xt(r,s),this.object1.position.set(1,3,0),this.object1.castShadow=!0,this.scene.add(this.object1);let o=new ha(1,.4,100,16),a=i("rgba(0,255,127,0.6)","rgba(138,43,226,0.6)");this.object2=new Xt(o,a),this.object2.position.set(5,-1,0),this.object2.castShadow=!0,this.scene.add(this.object2);let c=new ha(1,.4,100,16),l=i("rgba(0,255,127,0.6)","rgba(138,59,227,0.6)");this.object3=new Xt(c,l),this.object3.position.set(-8,1,-4),this.object3.castShadow=!0,this.scene.add(this.object3);let u=new da(1,.5,46,80),d=i("rgba(255,165,105,0.6)","rgba(255,215,0,0.6)");this.object4=new Xt(u,d),this.object4.position.set(-6,-3,0),this.object4.castShadow=!0,this.scene.add(this.object4)}animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.object1.position.x+=Math.sin(Date.now()*.001)*5e-4,this.object1.position.y+=Math.cos(Date.now()*.001)*5e-4,this.object2.position.x+=Math.cos(Date.now()*.001)*5e-4,this.object2.position.y+=Math.sin(Date.now()*.001)*5e-4,this.object3.position.x+=Math.sin(Date.now()*.001)*5e-4,this.object3.position.y+=Math.cos(Date.now()*.001)*5e-4,this.object4.position.x+=Math.cos(Date.now()*.001)*5e-4,this.object4.position.y+=Math.sin(Date.now()*.001)*5e-4,this.renderer.render(this.scene,this.camera)}addHoverListeners(){this.nameDiv.addEventListener("mouseover",()=>{}),this.nameDiv.addEventListener("mouseout",()=>{}),this.nicknameDiv.addEventListener("mouseover",()=>{}),this.nicknameDiv.addEventListener("mouseout",()=>{})}onMouseMove(i){this.mouseX=i.clientX,this.mouseY=i.clientY}};e.\u0275fac=function(r){return new(r||e)(hs(mi),hs(Cn))},e.\u0275cmp=Qn({type:e,selectors:[["app-three-scene"]],viewQuery:function(r,s){if(r&1&&$y(sO,5),r&2){let o;ah(o=ch())&&(s.canvasRef=o.first)}},hostBindings:function(r,s){r&1&&Cc("mousemove",function(a){return s.onMouseMove(a)},!1,ny)},inputs:{nameDiv:"nameDiv",nicknameDiv:"nicknameDiv"},standalone:!0,features:[ii],decls:2,vars:0,consts:[["canvas",""]],template:function(r,s){r&1&&Nt(0,"div",null,0)},styles:["div[_ngcontent-%COMP%]{width:100%;height:100vh;display:block;position:fixed;top:0}canvas[_ngcontent-%COMP%]{display:block;width:100%;height:100%}"]});let n=e;return n})();var kx=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Qn({type:e,selectors:[["app-hero"]],standalone:!0,features:[ii],decls:38,vars:2,consts:[["nameDiv",""],["nicknameDiv",""],[3,"nameDiv","nicknameDiv"],[1,"intro-wrapper","items-center","uppercase"],[1,"intro-text"],[1,"intro-id",2,"opacity","1","transform","none"],[1,"name"],[1,"wave-wrapper"],[1,"wave",2,"background-position-x","0px"],[1,"intro-roles"],[1,"intro-role",2,"opacity","1","transform","none"],[1,"intro-links"],[1,"me-2",2,"opacity","1","transform","none"],[1,"link-wrapper"],[1,"link"],["href","#"],[1,"link-underline",2,"transform","translateX(-101%) translateZ(0)"],[2,"opacity","1","transform","none"]],template:function(r,s){if(r&1&&(Nt(0,"app-three-scene",2),yt(1,"div",3)(2,"div",4)(3,"h3",5),hn(4,"Hey, I\u2019m "),yt(5,"div",6,0),hn(7,"Mirshod Allaberganov "),yt(8,"div",7),Nt(9,"div",8),Bt()()(),yt(10,"h3",5),hn(11,"But you can call me "),yt(12,"div",6,1),hn(14,"Mirix "),yt(15,"div",7),Nt(16,"div",8),Bt()()(),yt(17,"div",9)(18,"p",10),hn(19,"I\u2019m a full-stack developer"),Bt(),yt(20,"p",10),hn(21,"& use Java and Angular to create web applications"),Bt()(),yt(22,"div",11)(23,"ul")(24,"li",12)(25,"div",13)(26,"div",14)(27,"a",15),hn(28,"\u2192 "),hn(29,"See my projects"),Bt()(),Nt(30,"div",16),Bt()(),yt(31,"li",17)(32,"div",13)(33,"div",14)(34,"a",15),hn(35,"\u2192 "),hn(36,"More about me"),Bt()(),Nt(37,"div",16),Bt()()()()()()),r&2){let o=lh(6),a=lh(13);oh("nameDiv",o)("nicknameDiv",a)}},dependencies:[Ux]});let n=e;return n})();var Bx=[{path:"",component:kx}];var Vx={providers:[f_(Bx),P0()]};var zx=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Qn({type:e,selectors:[["app-header"]],standalone:!0,features:[ii],decls:25,vars:0,consts:[[1,"pointer-events-none","mix-blend-multiply","fixed","z-5","top-16","left-0","right-0"],[1,"z-index-auto","h-auto","flex","justify-between","items-center","overflow-hidden","px-0","py-3","sm:px-24","sm:py-0"],[1,"pointer-events-auto","flex","flex-row","items-center","z-index-auto"],["href","#"],["src","assets/images/logo-no-background.svg","alt","logo","width","48"],[1,"dark:border-l-neutral-600","pl-3","gap-x-2","hs-dropdown"],["type","button","data-hs-theme-click-value","dark",1,"hs-dark-mode-active:hidden","block","hs-dark-mode","rounded-full"],[1,"group","inline-flex","flex-shrink-0","justify-center","items-center","size-9","font-medium","rounded-full","text-gray-800","hover:bg-gray-200","dark:text-neutral-200","dark:hover:bg-neutral-700"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"flex-shrink-0","size-4"],["d","M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"],["type","button","data-hs-theme-click-value","light",1,"hs-dark-mode-active:block","hidden","hs-dark-mode","rounded-full"],["cx","12","cy","12","r","4"],["d","M12 2v2"],["d","M12 20v2"],["d","m4.93 4.93 1.41 1.41"],["d","m17.66 17.66 1.41 1.41"],["d","M2 12h2"],["d","M20 12h2"],["d","m6.34 17.66-1.41 1.41"],["d","m19.07 4.93-1.41 1.41"]],template:function(r,s){r&1&&(yt(0,"header",0)(1,"div",1)(2,"div",2)(3,"a",3),Nt(4,"img",4),Bt()(),yt(5,"div",2)(6,"span"),hn(7,"EN"),Bt(),yt(8,"div",5)(9,"button",6)(10,"span",7),Ud(),yt(11,"svg",8),Nt(12,"path",9),Bt()()(),wv(),yt(13,"button",10)(14,"span",7),Ud(),yt(15,"svg",8),Nt(16,"circle",11)(17,"path",12)(18,"path",13)(19,"path",14)(20,"path",15)(21,"path",16)(22,"path",17)(23,"path",18)(24,"path",19),Bt()()()()()()())}});let n=e;return n})();var Hx=(()=>{let e=class e{constructor(){this.title="M1rix.github.io"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Qn({type:e,selectors:[["app-root"]],standalone:!0,features:[ii],decls:4,vars:0,consts:[[1,"pt-36"],[1,"noise"]],template:function(r,s){r&1&&(Nt(0,"app-header"),yt(1,"div",0),Nt(2,"router-outlet"),Bt(),Nt(3,"div",1))},dependencies:[sf,zx]});let n=e;return n})();I0(Hx,Vx).catch(n=>console.error(n));
