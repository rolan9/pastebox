/* ###########################
 * #### Modernizr         ####
 * #########################*/
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e});for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/* ###########################
 * #### Draggabilly       ####
 * #########################*/
 /*!
 * Draggabilly PACKAGED v1.1.2
 * Make that shiz draggable
 * http://draggabilly.desandro.com
 * MIT license
 */
!function(a){function b(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")}function c(a,b){var c=d(a,b)?f:e;c(a,b)}var d,e,f;"classList"in document.documentElement?(d=function(a,b){return a.classList.contains(b)},e=function(a,b){a.classList.add(b)},f=function(a,b){a.classList.remove(b)}):(d=function(a,c){return b(c).test(a.className)},e=function(a,b){d(a,b)||(a.className=a.className+" "+b)},f=function(a,c){a.className=a.className.replace(b(c)," ")});var g={hasClass:d,addClass:e,removeClass:f,toggleClass:c,has:d,add:e,remove:f,toggle:c};"function"==typeof define&&define.amd?define("classie/classie",g):a.classie=g}(window),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype;d.getListeners=function(a){var b,c,d=this._getEvents();if("object"==typeof a){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if("object"===c)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],f=c.listener.apply(this,b||[]),(f===this._getOnceReturnValue()||c.once===!0)&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:this.EventEmitter=a}.call(this),function(a){var b=document.documentElement,c=function(){};b.addEventListener?c=function(a,b,c){a.addEventListener(b,c,!1)}:b.attachEvent&&(c=function(b,c,d){b[c+d]=d.handleEvent?function(){var b=a.event;b.target=b.target||b.srcElement,d.handleEvent.call(d,b)}:function(){var c=a.event;c.target=c.target||c.srcElement,d.call(b,c)},b.attachEvent("on"+c,b[c+d])});var d=function(){};b.removeEventListener?d=function(a,b,c){a.removeEventListener(b,c,!1)}:b.detachEvent&&(d=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var e={bind:c,unbind:d};"function"==typeof define&&define.amd?define("eventie/eventie",e):a.eventie=e}(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):a.getStyleProperty=b}(window),function(a){function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function d(a){function d(a){if("string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var d=f(a);if("none"===d.display)return c();var i={};i.width=a.offsetWidth,i.height=a.offsetHeight;for(var j=i.isBorderBox=!(!h||!d[h]||"border-box"!==d[h]),k=0,l=g.length;l>k;k++){var m=g[k],n=d[m],o=parseFloat(n);i[m]=isNaN(o)?0:o}var p=i.paddingLeft+i.paddingRight,q=i.paddingTop+i.paddingBottom,r=i.marginLeft+i.marginRight,s=i.marginTop+i.marginBottom,t=i.borderLeftWidth+i.borderRightWidth,u=i.borderTopWidth+i.borderBottomWidth,v=j&&e,w=b(d.width);w!==!1&&(i.width=w+(v?0:p+t));var x=b(d.height);return x!==!1&&(i.height=x+(v?0:q+u)),i.innerWidth=i.width-(p+t),i.innerHeight=i.height-(q+u),i.outerWidth=i.width+r,i.outerHeight=i.height+s,i}}var e,h=a("boxSizing");return function(){if(h){var a=document.createElement("div");a.style.width="200px",a.style.padding="1px 2px 3px 4px",a.style.borderStyle="solid",a.style.borderWidth="1px 2px 3px 4px",a.style[h]="border-box";var c=document.body||document.documentElement;c.appendChild(a);var d=f(a);e=200===b(d.width),c.removeChild(a)}}(),d}var e=document.defaultView,f=e&&e.getComputedStyle?function(a){return e.getComputedStyle(a,null)}:function(a){return a.currentStyle},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],d):a.getSize=d(a.getStyleProperty)}(window),function(a){function b(a,b){for(var c in b)a[c]=b[c];return a}function c(){}function d(d,e,g,j,k){function m(a,c){this.element="string"==typeof a?f.querySelector(a):a,this.options=b({},this.options),b(this.options,c),this._create()}function n(){return!1}function o(a,b){a.x=void 0!==b.pageX?b.pageX:b.clientX,a.y=void 0!==b.pageY?b.pageY:b.clientY}function p(a,b,c){return c=c||"round",b?Math[c](a/b)*b:a}var q=j("transform"),r=!!j("perspective");b(m.prototype,e.prototype),m.prototype.options={},m.prototype._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition=b({},this.position);var a=h(this.element);"relative"!==a.position&&"absolute"!==a.position&&(this.element.style.position="relative"),this.enable(),this.setHandles()},m.prototype.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element],this.bindHandles(!0)},m.prototype.bindHandles=function(b){var c;c=a.navigator.pointerEnabled?this.bindPointer:a.navigator.msPointerEnabled?this.bindMSPointer:this.bindMouseTouch,b=void 0===b?!0:!!b;for(var d=0,e=this.handles.length;e>d;d++){var f=this.handles[d];c.call(this,f,b)}},m.prototype.bindPointer=function(a,b){var c=b?"bind":"unbind";g[c](a,"pointerdown",this),a.style.touchAction=b?"none":""},m.prototype.bindMSPointer=function(a,b){var c=b?"bind":"unbind";g[c](a,"MSPointerDown",this),a.style.msTouchAction=b?"none":""},m.prototype.bindMouseTouch=function(a,b){var c=b?"bind":"unbind";g[c](a,"mousedown",this),g[c](a,"touchstart",this),b&&t(a)};var s="attachEvent"in f.documentElement,t=s?function(a){"IMG"===a.nodeName&&(a.ondragstart=n);for(var b=a.querySelectorAll("img"),c=0,d=b.length;d>c;c++){var e=b[c];e.ondragstart=n}}:c;m.prototype._getPosition=function(){var a=h(this.element),b=parseInt(a.left,10),c=parseInt(a.top,10);this.position.x=isNaN(b)?0:b,this.position.y=isNaN(c)?0:c,this._addTransformPosition(a)},m.prototype._addTransformPosition=function(a){if(q){var b=a[q];if(0===b.indexOf("matrix")){var c=b.split(","),d=0===b.indexOf("matrix3d")?12:4,e=parseInt(c[d],10),f=parseInt(c[d+1],10);this.position.x+=e,this.position.y+=f}}},m.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},m.prototype.getTouch=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];if(d.identifier===this.pointerIdentifier)return d}},m.prototype.onmousedown=function(a){var b=a.button;b&&0!==b&&1!==b||this.dragStart(a,a)},m.prototype.ontouchstart=function(a){this.isDragging||this.dragStart(a,a.changedTouches[0])},m.prototype.onMSPointerDown=m.prototype.onpointerdown=function(a){this.isDragging||this.dragStart(a,a)};var u={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"],MSPointerDown:["MSPointerMove","MSPointerUp","MSPointerCancel"]};m.prototype.dragStart=function(b,c){this.isEnabled&&(b.preventDefault?b.preventDefault():b.returnValue=!1,this.pointerIdentifier=void 0!==c.pointerId?c.pointerId:c.identifier,this._getPosition(),this.measureContainment(),o(this.startPoint,c),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this._bindEvents({events:u[b.type],node:b.preventDefault?a:f}),d.add(this.element,"is-dragging"),this.isDragging=!0,this.emitEvent("dragStart",[this,b,c]),this.animate())},m.prototype._bindEvents=function(a){for(var b=0,c=a.events.length;c>b;b++){var d=a.events[b];g.bind(a.node,d,this)}this._boundEvents=a},m.prototype._unbindEvents=function(){var a=this._boundEvents;if(a&&a.events){for(var b=0,c=a.events.length;c>b;b++){var d=a.events[b];g.unbind(a.node,d,this)}delete this._boundEvents}},m.prototype.measureContainment=function(){var a=this.options.containment;if(a){this.size=k(this.element);var b=this.element.getBoundingClientRect(),c=i(a)?a:"string"==typeof a?f.querySelector(a):this.element.parentNode;this.containerSize=k(c);var d=c.getBoundingClientRect();this.relativeStartPosition={x:b.left-d.left,y:b.top-d.top}}},m.prototype.onmousemove=function(a){this.dragMove(a,a)},m.prototype.onMSPointerMove=m.prototype.onpointermove=function(a){a.pointerId===this.pointerIdentifier&&this.dragMove(a,a)},m.prototype.ontouchmove=function(a){var b=this.getTouch(a.changedTouches);b&&this.dragMove(a,b)},m.prototype.dragMove=function(a,b){o(this.dragPoint,b);var c=this.dragPoint.x-this.startPoint.x,d=this.dragPoint.y-this.startPoint.y,e=this.options.grid,f=e&&e[0],g=e&&e[1];c=p(c,f),d=p(d,g),c=this.containDrag("x",c,f),d=this.containDrag("y",d,g),c="y"===this.options.axis?0:c,d="x"===this.options.axis?0:d,this.position.x=this.startPosition.x+c,this.position.y=this.startPosition.y+d,this.dragPoint.x=c,this.dragPoint.y=d,this.emitEvent("dragMove",[this,a,b])},m.prototype.containDrag=function(a,b,c){if(!this.options.containment)return b;var d="x"===a?"width":"height",e=this.relativeStartPosition[a],f=p(-e,c,"ceil"),g=this.containerSize[d]-e-this.size[d];return g=p(g,c,"floor"),Math.min(g,Math.max(f,b))},m.prototype.onmouseup=function(a){this.dragEnd(a,a)},m.prototype.onMSPointerUp=m.prototype.onpointerup=function(a){a.pointerId===this.pointerIdentifier&&this.dragEnd(a,a)},m.prototype.ontouchend=function(a){var b=this.getTouch(a.changedTouches);b&&this.dragEnd(a,b)},m.prototype.dragEnd=function(a,b){this.isDragging=!1,delete this.pointerIdentifier,q&&(this.element.style[q]="",this.setLeftTop()),this._unbindEvents(),d.remove(this.element,"is-dragging"),this.emitEvent("dragEnd",[this,a,b])},m.prototype.onMSPointerCancel=m.prototype.onpointercancel=function(a){a.pointerId===this.pointerIdentifier&&this.dragEnd(a,a)},m.prototype.ontouchcancel=function(a){var b=this.getTouch(a.changedTouches);this.dragEnd(a,b)},m.prototype.animate=function(){if(this.isDragging){this.positionDrag();var a=this;l(function(){a.animate()})}};var v=r?function(a,b){return"translate3d( "+a+"px, "+b+"px, 0)"}:function(a,b){return"translate( "+a+"px, "+b+"px)"};return m.prototype.setLeftTop=function(){this.element.style.left=this.position.x+"px",this.element.style.top=this.position.y+"px"},m.prototype.positionDrag=q?function(){this.element.style[q]=v(this.dragPoint.x,this.dragPoint.y)}:m.prototype.setLeftTop,m.prototype.enable=function(){this.isEnabled=!0},m.prototype.disable=function(){this.isEnabled=!1,this.isDragging&&this.dragEnd()},m.prototype.destroy=function(){this.disable(),q&&(this.element.style[q]=""),this.element.style.left="",this.element.style.top="",this.element.style.position="",this.bindHandles(!1)},m}for(var e,f=a.document,g=f.defaultView,h=g&&g.getComputedStyle?function(a){return g.getComputedStyle(a,null)}:function(a){return a.currentStyle},i="object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1===a.nodeType&&"string"==typeof a.nodeName},j=0,k="webkit moz ms o".split(" "),l=a.requestAnimationFrame,m=a.cancelAnimationFrame,n=0;n<k.length&&(!l||!m);n++)e=k[n],l=l||a[e+"RequestAnimationFrame"],m=m||a[e+"CancelAnimationFrame"]||a[e+"CancelRequestAnimationFrame"];l&&m||(l=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-j)),e=a.setTimeout(function(){b(c+d)},d);return j=c+d,e},m=function(b){a.clearTimeout(b)}),"function"==typeof define&&define.amd?define(["classie/classie","eventEmitter/EventEmitter","eventie/eventie","get-style-property/get-style-property","get-size/get-size"],d):"object"==typeof exports?module.exports=d(require("desandro-classie"),require("wolfy87-eventemitter"),require("eventie"),require("desandro-get-style-property"),require("get-size")):a.Draggabilly=d(a.classie,a.EventEmitter,a.eventie,a.getStyleProperty,a.getSize)}(window);

/* ###########################
 * #### dragdrop.js       ####
 * #########################*/
 /**
 * dragdrop.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
 !function(){"use strict";function t(t,i,e){i||(i=250);var o,s;return function(){var n=e||this,l=+new Date,r=arguments;o&&o+i>l?(clearTimeout(s),s=setTimeout(function(){o=l,t.apply(n,r)},i)):(o=l,t.apply(n,r))}}function i(){var t=c.clientHeight,i=window.innerHeight;return i>t?i:t}function e(){return window.pageXOffset||c.scrollLeft}function o(){return window.pageYOffset||c.scrollTop}function s(t){var i=t.getBoundingClientRect();return{top:i.top+o(),left:i.left+e()}}function n(t,i){t.style.transform=i}function l(t,i){var e=function(){u.transitions&&this.removeEventListener(d,e),i&&"function"==typeof i&&i.call()};u.transitions?t.addEventListener(d,e):e()}function r(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e]);return t}function p(t,i){this.el=t,this.options=r({},this.options),r(this.options,i)}function h(t,i,e){this.el=t,this.options=r({},this.options),r(this.options,e),this.droppables=i,this.scrollableEl=this.options.scrollable===window?window:document.querySelector(this.options.scrollable),this.scrollIncrement=0,this.options.helper&&(this.offset={left:s(this.el).left,top:s(this.el).top}),this.draggie=new Draggabilly(this.el,this.options.draggabilly),this.initEvents()}var a=document.body,c=window.document.documentElement,f={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},d=f[Modernizr.prefixed("transition")],u={transitions:Modernizr.csstransitions},g=!!getStyleProperty("perspective");p.prototype.options={onDrop:function(){return!1}},p.prototype.isDroppable=function(t){var i=s(t),e=t.offsetWidth,o=t.offsetHeight,n=s(this.el),l=this.el.offsetWidth,r=this.el.offsetHeight;return!(n.left>i.left+e-e/2||n.left+l<i.left+e/2||n.top>i.top+o-o/2||n.top+r<i.top+o/2)},p.prototype.highlight=function(t){this.isDroppable(t)?classie.add(this.el,"highlight"):classie.remove(this.el,"highlight")},p.prototype.collect=function(t){classie.remove(this.el,"highlight"),this.options.onDrop(this,t)},h.prototype.options={scroll:!1,scrollable:window,scrollSpeed:20,scrollSensitivity:10,draggabilly:{},animBack:!0,helper:!1,onStart:function(){return!1},onDrag:function(){return!1},onEnd:function(){return!1}},h.prototype.initEvents=function(){this.draggie.on("dragStart",this.onDragStart.bind(this)),this.draggie.on("dragMove",t(this.onDragMove.bind(this),5)),this.draggie.on("dragEnd",this.onDragEnd.bind(this))},h.prototype.onDragStart=function(t){this.options.onStart(),this.position={left:t.position.x,top:t.position.y},this.options.helper&&this.createHelper(t.element),classie.add(t.element,"is-active"),this.highlightDroppables()},h.prototype.onDragMove=function(t){this.options.onDrag(),this.options.scroll&&this.scrollPage(t.element),this.highlightDroppables()},h.prototype.onDragEnd=function(t){this.options.helper&&(t.element.style.left=t.position.x+this.position.left+"px",t.element.style.top=t.position.y+this.position.top+"px"),this.options.scroll&&(this.scrollIncrement=0);for(var i=!1,e=0,o=this.droppables.length;o>e;++e){var s=this.droppables[e];s.isDroppable(t.element)&&(i=!0,s.collect(t.element))}this.options.onEnd(i);var n=!0;i&&(classie.add(t.element,"is-dropped"),setTimeout(function(){classie.add(t.element,"is-complete"),l(t.element,function(){classie.remove(t.element,"is-complete"),classie.remove(t.element,"is-dropped")})},25)),(this.position.left===t.position.x&&this.position.top===t.position.y||i)&&(n=!1),this.moveBack(n)},h.prototype.highlightDroppables=function(){for(var t=0,i=this.droppables.length;i>t;++t)this.droppables[t].highlight(this.el)},h.prototype.createHelper=function(){var t=this.el.cloneNode(!0);classie.remove(t,"is-dragging"),this.el.parentNode.replaceChild(t,this.el);var i=new h(t,this.droppables,this.options);classie.add(this.el,"helper"),this.el.style.left=i.offset.left+"px",this.el.style.top=i.offset.top+"px",this.position.left=i.offset.left,this.position.top=i.offset.top,a.appendChild(this.el)},h.prototype.moveBack=function(t){var i=this.options.animBack&&t;i&&classie.add(this.el,"animate"),n(this.el,g?"translate3d(0,0,0)":"translate(0,0)"),this.el.style.left=this.position.left+"px",this.el.style.top=this.position.top+"px";var e=function(){i&&classie.remove(this.el,"animate"),classie.remove(this.el,"is-active"),this.options.helper&&a.removeChild(this.el)}.bind(this);i?l(this.el,e):e()},h.prototype.outViewport=function(){var t=Math.abs(this.options.scrollSensitivity)||0,e=o(),n=e+i(),l=s(this.el).top,r=(l+this.el.offsetHeight/2,l+this.el.offsetHeight+t>n),p=e>l-t;return r?this.scrolldir="down":p&&(this.scrolldir="up"),r||p},h.prototype.scrollPage=function(){this.outViewport(this.el)?this.doScroll():this.scrollIncrement=0},h.prototype.doScroll=function(){var t=this.options.scrollSpeed||20;this.scrollIncrement++;var i=this.scrollIncrement<t?this.scrollIncrement:t;this.scrollableEl===window?this.scrollableEl.scrollBy(0,"up"===this.scrolldir?-1*i:i):this.scrollableEl.scrollTop+="up"===this.scrolldir?-1*i:i},window.Droppable=p,window.Draggable=h}();

 /* ###########################
 * #### vtcha              ####
 * #########################*/
 /**
  * vtcha
  * https://github.com/wolf-w/pastebox/tree/master/vtcha
  *
  * v 2015.02.15-01
  *
  * LICENCE Feel free to use, modify and redistribute this code. But please keep this copyright notice.
  * (c) Copyright 2015 Wolf Wortmann <wolf@wolfgang-m.de> / <http://elementcode.de>
  *
  * Needs modernizr.prefixed() from http://modernizr.com/download/#-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
  * and draggabilly from http://draggabilly.desandro.com
  * and dragdrop.js from https://github.com/codrops/DragDropInteractions (http://www.codrops.com)
  */
$.fn.vtcha = function(options) {
  $this = $(this);
  var defaults = {
    'ok': 'vtcha_accepted_2K15',
    'hide': null,
  }

  $this.each(function(){
    var $this = $(this),
    settings = $.extend({}, defaults, options),
    $box = $( create_html() ),
    $dropArea = $box.find('.target-box'),
    $targets = $dropArea.find('.target'),
    $items = $box.find('.item'),
    droppableArr = [], dropAreaTimeout;

    $box.insertAfter($this);
    $this.attr('hidden',true);
    $(settings.hide).hide(100);

    // initialize droppables(s)
    $targets.each(function( i, el ) {
      droppableArr.push( new Droppable( el, {
        onDrop : function( instance, draggableEl ) {
          $target = $(instance.el);
          $item = $(draggableEl);

          if ($target.attr('data-match') == $item.attr('data-value')) {
            $target.addClass('complete').parent().addClass('complete');
            $item.parent().find('.item').remove();
            accept();
          }
          else{
            setTimeout(function(){
              $item.removeClass('is-dropped');
              $item.removeClass('is-complete');
            },500)
          }
        }
      } ) );
    } );

    // initialize draggable(s)
    $items.each(function( i, el ) {
      new Draggable( el, droppableArr, {
        draggabilly : { containment: $box[0] },
        onStart : function() {
          $dropArea.addClass('show');
        },
        onEnd : function( wasDropped ) {
          $dropArea.removeClass('show');
        }
      } );
    } );

    function accept(){
      $this.attr('value',settings.ok);
      setTimeout(function(){
        $box.addClass('hide');
      },700);
    }

    function create_html(){
      symb = symbols();
      data = [
        '<div class="target" data-match="1"><i class="fa fa-'+symb[1]+'"></i></div>',
        '<div class="target" data-match="0"><i class="fa fa-'+symb[0]+'"></i></div>',
        '<div class="target" data-match="2"><i class="fa fa-'+symb[2]+'"></i></div>',
      ];
      arr = shuffle(data);
      var html = 
        '<div class="vtcha">'+
        '  <div class="intro">Put one item in his target box.</div>'+
        ''+
        '  <div class="item-box">'+
        '    <div class="item-background-wrap">'+
        '      <div class="item-styles item-background"><i class="fa fa-'+symb[0]+'"></i></div>'+
        '      <div class="item-styles item-background"><i class="fa fa-'+symb[1]+'"></i></div>'+
        '      <div class="item-styles item-background"><i class="fa fa-'+symb[2]+'"></i></div>'+
        '    </div>'+
        '    <div class="item-wrap">'+
        '      <div class="item-styles item" data-value="0"><i class="fa fa-'+symb[0]+'"></i></div>'+
        '      <div class="item-styles item" data-value="1"><i class="fa fa-'+symb[1]+'"></i></div>'+
        '      <div class="item-styles item" data-value="2"><i class="fa fa-'+symb[2]+'"></i></div>'+
        '    </div>'+
        '  </div>'+
        ''+
        '  <div class="target-box">'+
              arr[0]+arr[1]+arr[2]+
        '  </div>'+
        '</div>';
      return html;

      function shuffle(o){//http://css-tricks.com/snippets/javascript/shuffle-array/
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
      }
    }

    function symbols(){
      var list = [
        'anchor',
        'asterisk',
        'bed',
        'bank',
        'bell',
        'bicycle',
        'binoculars',
        'bomb',
        'book',
        'briefcase',
        'bug',
        'bullhorn',
        'bus',
        'camera',
        'car',
        'child',
        'cloud',
        'coffee',
        'compass',
        'cutlery',
        'database',
        'desktop',
        'diamond',
        'envelope',
        'eye',
        'eyedropper',
        'female',
        'fighter-jet',
        'flag',
        'gamepad',
        'gavel',
        'glass',
        'globe',
        'gift',
        'heart',
        'leaf',
        'image',
        'magic',
        'lock',
        'map-marker',
        'music',
        'microphone',
        'paper-plane',
        'moon-o',
        'pencil',
        'plug',
        'recycle',
        'retweet',
        'road',
        'rocket',
        'star',
        'thumbs-down',
        'trophy',
        'tree',
        'umbrella',
        'volume-off',
        'video-camera',
        'user-secret',
        'warning',
        'wrench',
        'wifi'
      ];
      var min=2,max=60,data=[],icons=[];
      function get(){
        for (var i=0; i <= 2; i++) {
          data[i] = min+parseInt(Math.random()*((max+1)-min));
          icons[i] = list[ data[i] ];
        };
        if (same()) {
          get();
        };
      };
      get();

      function same(){
        if (data[0] == data[1] || data[0] == data[2] || data[1] == data[2]) {
          return true;
        };
        return false;
      }

      return icons;
    }
  })
};
