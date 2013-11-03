window.Modernizr=function(e,t,n){function r(e){x.cssText=e}function i(e,t){return r(C.join(e+";")+(t||""))}function o(e,t){return typeof e===t}function s(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var i=e[r];if(!s(i,"-")&&x[i]!==n)return"pfx"==t?i:!0}return!1}function u(e,t,r){for(var i in e){var s=t[e[i]];if(s!==n)return r===!1?e[i]:o(s,"function")?s.bind(r||t):s}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+k.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?a(i,t):(i=(e+" "+E.join(r+" ")+r).split(" "),u(i,t,n))}function c(){h.input=function(n){for(var r=0,i=n.length;i>r;r++)D[n[r]]=n[r]in b;return D.list&&(D.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),D}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var r,i,o,s=0,a=e.length;a>s;s++)b.setAttribute("type",i=e[s]),r="text"!==b.type,r&&(b.value=w,b.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&b.style.WebkitAppearance!==n?(g.appendChild(b),o=t.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(b,null).WebkitAppearance&&0!==b.offsetHeight,g.removeChild(b)):/^(search|tel)$/.test(i)||(r=/^(url|email)$/.test(i)?b.checkValidity&&b.checkValidity()===!1:b.value!=w)),A[e[s]]=!!r;return A}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var f,p,d="2.6.1",h={},m=!0,g=t.documentElement,y="modernizr",v=t.createElement(y),x=v.style,b=t.createElement("input"),w=":)",T={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),N="Webkit Moz O ms",k=N.split(" "),E=N.toLowerCase().split(" "),S={svg:"http://www.w3.org/2000/svg"},j={},A={},D={},L=[],H=L.slice,q=function(e,n,r,i){var o,s,a,u=t.createElement("div"),l=t.body,c=l?l:t.createElement("body");if(parseInt(r,10))for(;r--;)a=t.createElement("div"),a.id=i?i[r]:y+(r+1),u.appendChild(a);return o=["&#173;",'<style id="s',y,'">',e,"</style>"].join(""),u.id=y,(l?u:c).innerHTML+=o,c.appendChild(u),l||(c.style.background="",g.appendChild(c)),s=n(u,e),l?u.parentNode.removeChild(u):c.parentNode.removeChild(c),!!s},O=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return q("@media "+t+" { #"+y+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},M=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var s=e in i;return s||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),s=o(i[e],"function"),o(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,s}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),F={}.hasOwnProperty;p=o(F,"undefined")||o(F.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return F.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=H.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var o=new i,s=t.apply(o,n.concat(H.call(arguments)));return Object(s)===s?s:o}return t.apply(e,n.concat(H.call(arguments)))};return r}),j.flexbox=function(){return l("flexWrap")},j.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},j.canvastext=function(){return!!h.canvas&&!!o(t.createElement("canvas").getContext("2d").fillText,"function")},j.webgl=function(){return!!e.WebGLRenderingContext},j.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:q(["@media (",C.join("touch-enabled),("),y,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},j.geolocation=function(){return"geolocation"in navigator},j.postmessage=function(){return!!e.postMessage},j.websqldatabase=function(){return!!e.openDatabase},j.indexedDB=function(){return!!l("indexedDB",e)},j.hashchange=function(){return M("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},j.history=function(){return!!e.history&&!!history.pushState},j.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},j.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},j.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),s(x.backgroundColor,"rgba")},j.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),s(x.backgroundColor,"rgba")||s(x.backgroundColor,"hsla")},j.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(x.background)},j.backgroundsize=function(){return l("backgroundSize")},j.borderimage=function(){return l("borderImage")},j.borderradius=function(){return l("borderRadius")},j.boxshadow=function(){return l("boxShadow")},j.textshadow=function(){return""===t.createElement("div").style.textShadow},j.opacity=function(){return i("opacity:.55"),/^0.55$/.test(x.opacity)},j.cssanimations=function(){return l("animationName")},j.csscolumns=function(){return l("columnCount")},j.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+C.join(n+e)).slice(0,-e.length)),s(x.backgroundImage,"gradient")},j.cssreflections=function(){return l("boxReflect")},j.csstransforms=function(){return!!l("transform")},j.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in g.style&&q("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},j.csstransitions=function(){return l("transition")},j.fontface=function(){var e;return q('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),o=i.sheet||i.styleSheet,s=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";e=/src/i.test(s)&&0===s.indexOf(r.split(" ")[0])}),e},j.generatedcontent=function(){var e;return q(['#modernizr:after{content:"',w,'";visibility:hidden}'].join(""),function(t){e=t.offsetHeight>=1}),e},j.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},j.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},j.localstorage=function(){try{return localStorage.setItem(y,y),localStorage.removeItem(y),!0}catch(e){return!1}},j.sessionstorage=function(){try{return sessionStorage.setItem(y,y),sessionStorage.removeItem(y),!0}catch(e){return!1}},j.webworkers=function(){return!!e.Worker},j.applicationcache=function(){return!!e.applicationCache},j.svg=function(){return!!t.createElementNS&&!!t.createElementNS(S.svg,"svg").createSVGRect},j.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==S.svg},j.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(T.call(t.createElementNS(S.svg,"animate")))},j.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(T.call(t.createElementNS(S.svg,"clipPath")))};for(var P in j)p(j,P)&&(f=P.toLowerCase(),h[f]=j[P](),L.push((h[f]?"":"no-")+f));return h.input||c(),h.addTest=function(e,t){if("object"==typeof e)for(var r in e)p(e,r)&&h.addTest(r,e[r]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,m&&(g.className+=" "+(t?"":"no-")+e),h[e]=t}return h},r(""),v=b=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=g[e[h]];return t||(t={},m++,e[h]=m,g[m]=t),t}function o(e,n,r){if(n||(n=t),c)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():d.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),o.canHaveChildren&&!p.test(e)?r.frag.appendChild(o):o}function s(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),s=0,a=r(),u=a.length;u>s;s++)o.createElement(a[s]);return o}function a(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function u(e){e||(e=t);var r=i(e);return y.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),c||a(e,r),e}var l,c,f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,h="_html5shiv",m=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,c=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:c,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:u,createElement:o,createDocumentFragment:s};e.html5=y,u(t)}(this,t),h._version=d,h._prefixes=C,h._domPrefixes=E,h._cssomPrefixes=k,h.mq=O,h.hasEvent=M,h.testProp=function(e){return a([e])},h.testAllProps=l,h.testStyles=q,h.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+L.join(" "):""),h}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function i(e){return"string"==typeof e}function o(){}function s(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function a(){var e=y.shift();v=1,e?e.t?h(function(){("c"==e.t?p.injectCss:p.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),a()):v=0}function u(e,n,r,i,o,u,l){function c(t){if(!d&&s(f.readyState)&&(x.r=d=1,!v&&a(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&h(function(){w.removeChild(f)},50);for(var r in E[n])E[n].hasOwnProperty(r)&&E[n][r].onload()}}var l=l||p.errorTimeout,f={},d=0,g=0,x={t:r,s:n,e:o,a:u,x:l};1===E[n]&&(g=1,E[n]=[],f=t.createElement(e)),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){c.call(this,g)},y.splice(i,0,x),"img"!=e&&(g||2===E[n]?(w.insertBefore(f,b?null:m),h(c,l)):E[n].push(f))}function l(e,t,n,r,o){return v=0,t=t||"j",i(e)?u("c"==t?C:T,e,t,this.i++,n,r,o):(y.splice(this.i++,0,e),1==y.length&&a()),this}function c(){var e=p;return e.loader={load:l,i:0},e}var f,p,d=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],g={}.toString,y=[],v=0,x="MozAppearance"in d.style,b=x&&!!t.createRange().compareNode,w=b?d:m.parentNode,d=e.opera&&"[object Opera]"==g.call(e.opera),d=!!t.attachEvent&&!d,T=x?"object":d?"script":"img",C=d?"script":T,N=Array.isArray||function(e){return"[object Array]"==g.call(e)},k=[],E={},S={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};p=function(e){function t(e){var t,n,r,e=e.split("!"),i=k.length,o=e.pop(),s=e.length,o={url:o,origUrl:o,prefixes:e};for(n=0;s>n;n++)r=e[n].split("="),(t=S[r.shift()])&&(o=t(o,r));for(n=0;i>n;n++)o=k[n](o);return o}function s(e,i,o,s,u){var l=t(e),f=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(i&&(i=r(i)?i:i[e]||i[s]||i[e.split("/").pop().split("?")[0]]||a),l.instead?l.instead(e,i,o,s,u):(E[l.url]?l.noexec=!0:E[l.url]=1,o.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(i)||r(f))&&o.load(function(){c(),i&&i(l.origUrl,u,s),f&&f(l.origUrl,u,s),E[l.url]=2})))}function u(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);p.apply(this,e),d()}),s(e,f,t,0,l);else if(Object(e)===e)for(u in a=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(u)&&(!n&&!--a&&(r(f)?f=function(){var e=[].slice.call(arguments);p.apply(this,e),d()}:f[u]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),d()}}(p[u])),s(e[u],f,t,u,l))}else!n&&d()}var a,u,l=!!e.test,c=e.load||e.both,f=e.callback||o,p=f,d=e.complete||o;n(l?e.yep:e.nope,!!c),c&&n(c)}var l,f,d=this.yepnope.loader;if(i(e))s(e,0,d,0);else if(N(e))for(l=0;l<e.length;l++)f=e[l],i(f)?s(f,0,d,0):N(f)?p(f):Object(f)===f&&u(f,d);else Object(e)===e&&u(e,d)},p.addPrefix=function(e,t){S[e]=t},p.addFilter=function(e){k.push(e)},p.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=c(),e.yepnope.executeStack=a,e.yepnope.injectJs=function(e,n,r,i,u,l){var c,f,d=t.createElement("script"),i=i||p.errorTimeout;d.src=e;for(f in r)d.setAttribute(f,r[f]);n=l?a:n||o,d.onreadystatechange=d.onload=function(){!c&&s(d.readyState)&&(c=1,n(),d.onload=d.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),u?d.onload():m.parentNode.insertBefore(d,m)},e.yepnope.injectCss=function(e,n,r,i,s,u){var l,i=t.createElement("link"),n=u?a:n||o;i.href=e,i.rel="stylesheet",i.type="text/css";for(l in r)i.setAttribute(l,r[l]);s||(m.parentNode.insertBefore(i,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};