(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{dEtu:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.OutboundLink=void 0;var r=n(a("pVnL")),l=n(a("8OQS")),i=n(a("q1tI")),o=n(a("17x9")),s=i.default.forwardRef((function(e,t){var a=e.children,n=(0,l.default)(e,["children"]);return i.default.createElement("a",(0,r.default)({ref:t},n,{onClick:function(e){"function"==typeof n.onClick&&n.onClick(e);var t=!0;return(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)&&(t=!1),n.target&&"_self"!==n.target.toLowerCase()&&(t=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:n.href,transport_type:t?"beacon":"",event_callback:function(){t&&(document.location=n.href)}}):t&&(document.location=n.href),!1}}),a)}));t.OutboundLink=s,s.propTypes={href:o.default.string,target:o.default.string,onClick:o.default.func}},irkK:function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},s8MV:function(e,t,a){var n=a("irkK");e.exports=f,e.exports.parse=l,e.exports.compile=function(e,t){return o(l(e,t),t)},e.exports.tokensToFunction=o,e.exports.tokensToRegExp=p;var r=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function l(e,t){for(var a,n=[],l=0,i=0,o="",m=t&&t.delimiter||"/";null!=(a=r.exec(e));){var u=a[0],p=a[1],f=a.index;if(o+=e.slice(i,f),i=f+u.length,p)o+=p[1];else{var d=e[i],h=a[2],g=a[3],x=a[4],v=a[5],b=a[6],E=a[7];o&&(n.push(o),o="");var w=null!=h&&null!=d&&d!==h,y="+"===b||"*"===b,N="?"===b||"*"===b,k=a[2]||m,_=x||v;n.push({name:g||l++,prefix:h||"",delimiter:k,optional:N,repeat:y,partial:w,asterisk:!!E,pattern:_?c(_):E?".*":"[^"+s(k)+"]+?"})}}return i<e.length&&(o+=e.substr(i)),o&&n.push(o),n}function i(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function o(e,t){for(var a=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(a[r]=new RegExp("^(?:"+e[r].pattern+")$",u(t)));return function(t,r){for(var l="",o=t||{},s=(r||{}).pretty?i:encodeURIComponent,c=0;c<e.length;c++){var m=e[c];if("string"!=typeof m){var u,p=o[m.name];if(null==p){if(m.optional){m.partial&&(l+=m.prefix);continue}throw new TypeError('Expected "'+m.name+'" to be defined')}if(n(p)){if(!m.repeat)throw new TypeError('Expected "'+m.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(m.optional)continue;throw new TypeError('Expected "'+m.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(u=s(p[f]),!a[c].test(u))throw new TypeError('Expected all "'+m.name+'" to match "'+m.pattern+'", but received `'+JSON.stringify(u)+"`");l+=(0===f?m.prefix:m.delimiter)+u}}else{if(u=m.asterisk?encodeURI(p).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):s(p),!a[c].test(u))throw new TypeError('Expected "'+m.name+'" to match "'+m.pattern+'", but received "'+u+'"');l+=m.prefix+u}}else l+=m}return l}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function c(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function m(e,t){return e.keys=t,e}function u(e){return e&&e.sensitive?"":"i"}function p(e,t,a){n(t)||(a=t||a,t=[]);for(var r=(a=a||{}).strict,l=!1!==a.end,i="",o=0;o<e.length;o++){var c=e[o];if("string"==typeof c)i+=s(c);else{var p=s(c.prefix),f="(?:"+c.pattern+")";t.push(c),c.repeat&&(f+="(?:"+p+f+")*"),i+=f=c.optional?c.partial?p+"("+f+")?":"(?:"+p+"("+f+"))?":p+"("+f+")"}}var d=s(a.delimiter||"/"),h=i.slice(-d.length)===d;return r||(i=(h?i.slice(0,-d.length):i)+"(?:"+d+"(?=$))?"),i+=l?"$":r&&h?"":"(?="+d+"|$)",m(new RegExp("^"+i,u(a)),t)}function f(e,t,a){return n(t)||(a=t||a,t=[]),a=a||{},e instanceof RegExp?function(e,t){var a=e.source.match(/\((?!\?)/g);if(a)for(var n=0;n<a.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return m(e,t)}(e,t):n(e)?function(e,t,a){for(var n=[],r=0;r<e.length;r++)n.push(f(e[r],t,a).source);return m(new RegExp("(?:"+n.join("|")+")",u(a)),t)}(e,t,a):function(e,t,a){return p(l(e,a),t,a)}(e,t,a)}},tEiQ:function(e,t,a){"use strict";(function(e){var n=a("q1tI"),r=a.n(n),l=a("dI71"),i=a("17x9"),o=a.n(i),s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:{};function c(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(a,n){e=a,t.forEach((function(t){return t(e,n)}))}}}var m=r.a.createContext||function(e,t){var a,r,i,m="__create-react-context-"+((s[i="__global_unique_id__"]=(s[i]||0)+1)+"__"),u=function(e){function a(){var t;return(t=e.apply(this,arguments)||this).emitter=c(t.props.value),t}Object(l.a)(a,e);var n=a.prototype;return n.getChildContext=function(){var e;return(e={})[m]=this.emitter,e},n.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var a,n=this.props.value,r=e.value;((l=n)===(i=r)?0!==l||1/l==1/i:l!=l&&i!=i)?a=0:(a="function"==typeof t?t(n,r):1073741823,0!==(a|=0)&&this.emitter.set(e.value,a))}var l,i},n.render=function(){return this.props.children},a}(n.Component);u.childContextTypes=((a={})[m]=o.a.object.isRequired,a);var p=function(t){function a(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,a){0!=((0|e.observedBits)&a)&&e.setState({value:e.getValue()})},e}Object(l.a)(a,t);var n=a.prototype;return n.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?1073741823:t},n.componentDidMount=function(){this.context[m]&&this.context[m].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?1073741823:e},n.componentWillUnmount=function(){this.context[m]&&this.context[m].off(this.onUpdate)},n.getValue=function(){return this.context[m]?this.context[m].get():e},n.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},a}(n.Component);return p.contextTypes=((r={})[m]=o.a.object,r),{Provider:u,Consumer:p}};t.a=m}).call(this,a("yLpj"))},"x2+w":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("TJpk"),i=a.n(l),o=a("obyI"),s=a.n(o),c=a("PrUk"),m=a("KYPV"),u=a("UGp+"),p=u.a().shape({name:u.b().min(2,"Too Short!").max(50,"Too Long!").required("Name is Required!"),email:u.b().email("Enter a Valid Email!").required("Email is Required!")}),f=function(){return r.a.createElement(m.b,{initialValues:{name:"",email:""},validationSchema:p,onSubmit:function(e,t){var a=t.setSubmitting;window.location.href="mailto:hello@blocktag.com?subject=Inquiry from "+e.name+" ("+e.email+")&body=I am interested in learning more about Blocktag.",a(!1)},render:function(e){e.errors,e.touched;var t=e.isSubmitting,a=e.handleSubmit,n=e.handleReset;return r.a.createElement("form",{onSubmit:a,onReset:n,"data-netlify":"true","data-netlify-honeypot":"bot-field",className:"w-full my-24"},r.a.createElement("div",{className:"flex flex-wrap items-center py-2 border-teal-500 sm:border-b-2 sm:border-b sm:mx-24 sm:flex-no-wrap"},r.a.createElement(m.a,{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-none focus:outline-none",type:"text",placeholder:"Full Name",name:"name","aria-label":"Full name"}),r.a.createElement(m.a,{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-none focus:outline-none",type:"text",placeholder:"Email Address",name:"email","aria-label":"Email Address"}),r.a.createElement("button",{className:"flex-grow px-8 py-1 my-4 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded sm:my-0 hover:bg-teal-700 hover:border-teal-700",type:"submit",disabled:t},"Inquire")))}})},d=a("JX7q"),h=a("dI71"),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeEl:null},a.onMouseEnter=a.onMouseEnter.bind(Object(d.a)(a)),a.onMouseLeave=a.onMouseLeave.bind(Object(d.a)(a)),a}Object(h.a)(t,e);var a=t.prototype;return a.onMouseEnter=function(e){var t=this;return function(a){t.setState({activeEl:e})}},a.onMouseLeave=function(e){this.setState({activeEl:null})},a.render=function(){var e=this,t=this.state.activeEl,a=this.props.data;return r.a.createElement("div",null,r.a.createElement("div",{className:"flex flex-wrap items-end py-12"},this.props.data.map((function(a,n){return r.a.createElement("div",{key:"carousel_"+n,className:(null!==t?"hover:opacity-100 opacity-50":"pt-4 first:opacity-50 last:opacity-50")+" w-1/5 text-center transition ease-out duration-700 transform hover:scale-125",onMouseEnter:e.onMouseEnter(n),onMouseLeave:e.onMouseLeave},r.a.createElement("img",{className:"inline",style:{maxWidth:"60%",maxHeight:"300px"},src:a.img}))}))),r.a.createElement("div",{className:"justify-center w-full my-12 text-sm text-center"},r.a.createElement("div",{className:"max-w-lg mx-auto",style:{height:"4rem"}},null!==t?r.a.createElement("span",{dangerouslySetInnerHTML:{__html:a[t].description}}):r.a.createElement("span",null,this.props.defaultDescription))))},t}(n.Component);g.defaultProps={defaultDescription:r.a.createElement("p",null,"Download and print Blocktag tags using multiple print techniques, materials and form factors like barcode, QR, Augmented Reality (AR) markers. Custom configurations welcome.",r.a.createElement("span",{className:"block italic text-gray-500"},"< Hover on tags for info >")),data:[]};var x=a("IP2g"),v=a("wHSu"),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeEl:0},a.onLeft=a.onLeft.bind(Object(d.a)(a)),a.onRight=a.onRight.bind(Object(d.a)(a)),a}Object(h.a)(t,e);var a=t.prototype;return a.onLeft=function(){this.setState({activeEl:Math.max(0,this.state.activeEl-1)})},a.onRight=function(){this.setState({activeEl:Math.min(this.props.data.length-1,this.state.activeEl+1)})},a.render=function(){var e=this.state.activeEl,t=this.props.data,a=this.props.data[e];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex items-center w-full md:w-1/2"},r.a.createElement(x.a,{icon:v.e,className:(0===e?"text-gray-400":"text-teal-500 hover:text-teal-600")+" text-2xl lg:text-3xl m-4 lg:m-16 flex-shrink transition ease-out duration-500",onClick:this.onLeft}),r.a.createElement("div",{className:"relative flex-grow",style:{paddingBottom:"100%"}},r.a.createElement("img",{className:"absolute object-scale-down w-full h-full",src:a.img})),r.a.createElement(x.a,{icon:v.f,className:(e===t.length-1?"text-gray-400":"text-teal-500 hover:text-teal-600")+" text-2xl lg:text-3xl m-4 lg:m-16 flex-shrink transition ease-out duration-500",onClick:this.onRight})),r.a.createElement("div",{className:"w-full p-4 lg:p-12 md:w-1/2"},r.a.createElement("h2",{className:"mb-4 text-2xl"},a.title),r.a.createElement("ul",{className:"mb-4 overflow-y-auto font-light whitespace-pre-wrap",style:{height:"20rem"}},a.info.map((function(e,t){return r.a.createElement("li",{key:"info_"+t},e)})),a.origin?r.a.createElement("br",null):"",a.origin,a.certs?r.a.createElement("br",null):"",a.certs)))},t}(n.Component);b.defaultProps={defaultDescription:"asdfasdf default description",data:[]};var E=a("7O5W");a("RUBk"),a("17x9");function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function y(e){return"/"===e.charAt(0)}function N(e,t){for(var a=t,n=a+1,r=e.length;n<r;a+=1,n+=1)e[a]=e[n];e.pop()}var k=function(e,t){void 0===t&&(t="");var a,n=e&&e.split("/")||[],r=t&&t.split("/")||[],l=e&&y(e),i=t&&y(t),o=l||i;if(e&&y(e)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";if(r.length){var s=r[r.length-1];a="."===s||".."===s||""===s}else a=!1;for(var c=0,m=r.length;m>=0;m--){var u=r[m];"."===u?N(r,m):".."===u?(N(r,m),c++):c&&(N(r,m),c--)}if(!o)for(;c--;c)r.unshift("..");!o||""===r[0]||r[0]&&y(r[0])||r.unshift("");var p=r.join("/");return a&&"/"!==p.substr(-1)&&(p+="/"),p};var _=function(e,t){if(!e)throw new Error("Invariant failed")};function C(e){var t=e.pathname,a=e.search,n=e.hash,r=t||"/";return a&&"?"!==a&&(r+="?"===a.charAt(0)?a:"?"+a),n&&"#"!==n&&(r+="#"===n.charAt(0)?n:"#"+n),r}function R(e,t,a,n){var r;"string"==typeof e?(r=function(e){var t=e||"/",a="",n="",r=t.indexOf("#");-1!==r&&(n=t.substr(r),t=t.substr(0,r));var l=t.indexOf("?");return-1!==l&&(a=t.substr(l),t=t.substr(0,l)),{pathname:t,search:"?"===a?"":a,hash:"#"===n?"":n}}(e)).state=t:(void 0===(r=w({},e)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==t&&void 0===r.state&&(r.state=t));try{r.pathname=decodeURI(r.pathname)}catch(l){throw l instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):l}return a&&(r.key=a),n?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=k(r.pathname,n.pathname)):r.pathname=n.pathname:r.pathname||(r.pathname="/"),r}function P(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,a,n,r){if(null!=e){var l="function"==typeof e?e(t,a):e;"string"==typeof l?"function"==typeof n?n(l,r):r(!0):r(!1!==l)}else r(!0)},appendListener:function(e){var a=!0;function n(){a&&e.apply(void 0,arguments)}return t.push(n),function(){a=!1,t=t.filter((function(e){return e!==n}))}},notifyListeners:function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];t.forEach((function(e){return e.apply(void 0,a)}))}}}"undefined"==typeof window||!window.document||window.document.createElement;function T(e,t,a){return Math.min(Math.max(e,t),a)}function S(e){void 0===e&&(e={});var t=e,a=t.getUserConfirmation,n=t.initialEntries,r=void 0===n?["/"]:n,l=t.initialIndex,i=void 0===l?0:l,o=t.keyLength,s=void 0===o?6:o,c=P();function m(e){w(g,e),g.length=g.entries.length,c.notifyListeners(g.location,g.action)}function u(){return Math.random().toString(36).substr(2,s)}var p=T(i,0,r.length-1),f=r.map((function(e){return R(e,void 0,"string"==typeof e?u():e.key||u())})),d=C;function h(e){var t=T(g.index+e,0,g.entries.length-1),n=g.entries[t];c.confirmTransitionTo(n,"POP",a,(function(e){e?m({action:"POP",location:n,index:t}):m()}))}var g={length:f.length,action:"POP",location:f[p],index:p,entries:f,createHref:d,push:function(e,t){var n=R(e,t,u(),g.location);c.confirmTransitionTo(n,"PUSH",a,(function(e){if(e){var t=g.index+1,a=g.entries.slice(0);a.length>t?a.splice(t,a.length-t,n):a.push(n),m({action:"PUSH",location:n,index:t,entries:a})}}))},replace:function(e,t){var n=R(e,t,u(),g.location);c.confirmTransitionTo(n,"REPLACE",a,(function(e){e&&(g.entries[g.index]=n,m({action:"REPLACE",location:n}))}))},go:h,goBack:function(){h(-1)},goForward:function(){h(1)},canGo:function(e){var t=g.index+e;return t>=0&&t<g.entries.length},block:function(e){return void 0===e&&(e=!1),c.setPrompt(e)},listen:function(e){return c.appendListener(e)}};return g}var j=a("tEiQ"),O=a("s8MV"),A=a.n(O);a("TOwV");function L(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a("2mql");var M=function(e){var t=Object(j.a)();return t.displayName=e,t}("Router-History"),U=function(e){var t=Object(j.a)();return t.displayName=e,t}("Router"),I=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={location:t.history.location},a._isMounted=!1,a._pendingLocation=null,t.staticContext||(a.unlisten=t.history.listen((function(e){a._isMounted?a.setState({location:e}):a._pendingLocation=e}))),a}Object(h.a)(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var a=t.prototype;return a.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},a.componentWillUnmount=function(){this.unlisten&&this.unlisten()},a.render=function(){return r.a.createElement(U.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},r.a.createElement(M.Provider,{children:this.props.children||null,value:this.props.history}))},t}(r.a.Component);r.a.Component;r.a.Component;var B={},q=0;function D(e,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var a=t,n=a.path,r=a.exact,l=void 0!==r&&r,i=a.strict,o=void 0!==i&&i,s=a.sensitive,c=void 0!==s&&s;return[].concat(n).reduce((function(t,a){if(!a&&""!==a)return null;if(t)return t;var n=function(e,t){var a=""+t.end+t.strict+t.sensitive,n=B[a]||(B[a]={});if(n[e])return n[e];var r=[],l={regexp:A()(e,r,t),keys:r};return q<1e4&&(n[e]=l,q++),l}(a,{end:l,strict:o,sensitive:c}),r=n.regexp,i=n.keys,s=r.exec(e);if(!s)return null;var m=s[0],u=s.slice(1),p=e===m;return l&&!p?null:{path:a,url:"/"===a&&""===m?"/":m,isExact:p,params:i.reduce((function(e,t,a){return e[t.name]=u[a],e}),{})}}),null)}r.a.Component;function F(e){return"/"===e.charAt(0)?e:"/"+e}function V(e,t){if(!e)return t;var a=F(e);return 0!==t.pathname.indexOf(a)?t:w({},t,{pathname:t.pathname.substr(a.length)})}function H(e){return"string"==typeof e?e:C(e)}function K(e){return function(){_(!1)}}function $(){}r.a.Component;r.a.Component;var W=r.a.useContext;var J=W(M);function Q(){J.push("https://generate.blocktag.com"),console.log("The link was clicked."),alert("Test"),"undefined"!=typeof window&&window.gtag("conversion","click"),console.log("handleClick")}a("dEtu");E.b.add(v.j,v.g,v.l,v.c,v.d,v.a,v.e,v.f,v.b,v.k,v.h,v.n,v.i,v.m);var G=function(e){var t=e.heading,a=e.description,n=e.meta_title,l=e.meta_description,o=e.usecases,m=e.carousel,u=e.datafeed,p=e.consumerfeatures,d=e.consumerfeaturesimg,h=e.enterprisefeatures,E=e.features;e.cta;return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement("title",null,n),r.a.createElement("meta",{name:"description",content:l})),r.a.createElement("div",{className:"flex flex-col font-sans bg-indigo-800 bg-top bg-no-repeat bg-cover",style:{backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 90%), url("/img/earth.jpg")',marginTop:"-80px"}},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("main",{className:"flex flex-wrap items-center pt-48 text-center text-white lg:px-24"},r.a.createElement("div",{className:"w-full whitespace-pre-line md:w-full"},r.a.createElement("h1",{className:"text-4xl font-light tracking-tight lg:text-6xl"},t),r.a.createElement("h4",{className:"my-4 text-base font-light text-gray-400"},a),r.a.createElement(f,null))),r.a.createElement("hr",{className:"border-gray-700"}),r.a.createElement("div",{className:"flex flex-wrap pb-12 mt-8 overflow-hidden text-center text-gray-500"},o.map((function(e){return r.a.createElement("div",{key:"feature_"+e.heading,className:"w-full py-4 whitespace-pre-line sm:w-1/2 lg:w-1/4"},r.a.createElement(x.a,{icon:e.icon,className:"mb-4 text-4xl text-teal-500"}),r.a.createElement("h2",{className:"pb-2 text-lg text-gray-100 font-base"},e.heading),r.a.createElement("h3",{className:"text-base font-light"},e.description))}))),r.a.createElement("a",{href:"https://apps.apple.com/us/app/blocktag/id1478833776"},r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",style:{width:"200px"}}),r.a.createElement("br",null)))),r.a.createElement("div",{id:"products",className:"flex flex-col bg-white",style:{backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,1) 50%, #f2f2f2 100%), url("/img/earth.jpg")'}},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement(g,{data:m}))),r.a.createElement("div",{className:"flex flex-col bg-white"},"  ",r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center my-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full text-3xl text-center"},"Use Cases"),r.a.createElement(b,{data:u})))),r.a.createElement("div",{className:"flex flex-col bg-dark mb-8"},"  ",r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-8 text-3xl font-light text-center text-black-100"},"How It Works"),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-1 pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," Step 1: Download Tags "),r.a.createElement("h3",null," Embed printed security on well known tags like QR or Barcode. Download security tags from Blocktag website."),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/mobile_ss/EmbedPrintedSecurity.png"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2  pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," Step 2: Print Tags "),r.a.createElement("h3",null," Print tags as stickers or direct on material surface using any printer from home inkjets to industrial printers. "),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/mobile_ss/AnyPrinter.png"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-3  pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," Step 3: Fingerprint Tags "),r.a.createElement("h3",null," Use phone or industrial camera to capture tag’s physical print signature as fingerprint."),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/mobile_ss/TagFingerprintedCrop2.jpeg"})),r.a.createElement("div",{className:"w-full text-center py-2 my-4"},r.a.createElement("a",{onClick:Q,class:"flex-grow inline-block px-8 py-2 my-4 mr-4 text-sm text-white bg-teal-500 border border-teal-500 rounded sm:my-0 hover:bg-teal-700 hover:border-teal-700"},"Create Tags Now10"))),r.a.createElement("div",{className:"flex flex-wrap items-center pt-12 mt-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-16 text-3xl font-light text-center text-black-100"},"Mobile Authentication"),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-1  pl-2 pr-2 pt-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," Authentic Tagged Product"),r.a.createElement("h3",null," Scan fingerprinted tag with Blocktag app to detect original from cloned tags. No special scan hardware required."),r.a.createElement("img",{className:"mx-auto",src:"/img/mobile_ss/AuthenticateSuccessfulCrop.jpeg"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2  pl-2 pr-2 pt-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," Proof Of User Presence/Possession "),r.a.createElement("h3",null," Prove user is physically close or has physical control of an authentic tag instead of a tag screenshot. Challenge user to identify themselves using Blocktag app with Username, Email, FaceID or CryptoID."),r.a.createElement("img",{className:"mx-auto",src:"/img/mobile_ss/AuthenticateDetectScreenCrop2.jpeg"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-3 pl-2 pr-2 pt-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," QR Backwards Compatible"),r.a.createElement("h3",null," Users can read tag data using any native camera reader without installing Blocktag app and skip authentication."),r.a.createElement("img",{className:"mx-auto",src:"/img/mobile_ss/BlocktagCameraCrop.jpeg"}))))),r.a.createElement("div",{className:"flex flex-col bg-blue-900"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center pt-12 mt-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-16 text-3xl font-light text-center text-gray-100"},"Consumer Simplicity"),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2"},r.a.createElement("img",{className:"mx-auto",src:d})),r.a.createElement("div",{className:"w-full px-12 text-center text-gray-100 sm:pb-8 lg:pl-24 sm:pl-0 md:pr-12 sm:pr-4 sm:text-right sm:w-1/3 sm:order-1"},p.slice(0,p.length/2).map((function(e,t){return r.a.createElement("div",{key:"consumer_"+t,className:"h-32 my-8 sm:h-40"},r.a.createElement(x.a,{icon:e.icon,className:"mb-4 text-3xl text-teal-500"}),r.a.createElement("h3",{className:"text-base font-base"},e.heading),r.a.createElement("p",{className:"text-sm"},e.description))}))),r.a.createElement("div",{className:"w-full px-12 pb-8 text-center text-gray-100 lg:pr-24 sm:pr-0 md:pl-12 sm:pl-4 sm:text-left sm:w-1/3 sm:order-3"},p.slice(p.length/2,p.length).map((function(e,t){return r.a.createElement("div",{key:"consumer_"+(3+t),className:"h-32 my-8 sm:h-40"},r.a.createElement(x.a,{icon:e.icon,className:"mb-4 text-3xl text-teal-500"}),r.a.createElement("h3",{className:"text-base font-base"},e.heading),r.a.createElement("p",{className:"text-sm"},e.description))})))))),r.a.createElement("div",{className:"flex flex-col bg-white"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center pt-16 pb-4 overflow-hidden text-left md:py-12 md:my-12"},r.a.createElement("div",{className:"w-full mb-16 text-3xl font-light text-center text-gray-800"},"Enterprise Efficiency"),r.a.createElement("div",{className:"w-full pb-12 md:w-1/2 md:pb-0"},r.a.createElement("img",{className:"max-w-sm mx-auto md:max-w-full md:mx-0",src:"/img/laptop.png"})),r.a.createElement("div",{className:"w-full px-6 sm:px-20 md:pr-0 md:w-1/2"},r.a.createElement("ul",null,h.map((function(e,t){return r.a.createElement("li",{key:"enterprise_"+t,className:"mb-12"},r.a.createElement("h3",{className:"text-lg font-medium leading-loose"},e.heading),r.a.createElement("p",{className:"text-base font-light"},e.description))}))))))),r.a.createElement("div",{className:"flex flex-wrap items-center overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-8 text-3xl font-light text-center text-black-100"},"Our Partners"),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-1 pl-2 pr-2"}),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2  pl-2 pr-2"},r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/berkeley-multi-color-on-blue.png"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-3  pl-2 pr-2"})),r.a.createElement("div",{className:"flex flex-col bg-gray-100"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-start py-12 my-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-12 text-3xl font-light text-center"},"Features"),E.map((function(e,t){return r.a.createElement("div",{key:"feature_"+t,className:"flex w-full p-4 text-gray-800 md:w-1/2 lg:w-1/4"},r.a.createElement(x.a,{icon:v.d,className:"flex-shrink mx-4 text-3xl text-teal-500"}),r.a.createElement("div",{className:"flex-grow"},r.a.createElement("h3",{className:"text-base font-base"},e.heading),r.a.createElement("p",{className:"text-sm font-light"},e.description)))}))))),r.a.createElement("div",{className:"flex flex-col text-white bg-blue-900"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"w-full my-6 mt-24 text-4xl font-light text-center"},"Get in Touch"),r.a.createElement("div",{className:"w-full my-6 text-xl font-light text-center whitespace-pre-line"},r.a.createElement("a",{href:"mailto:"+s.a.email},s.a.email),"\n",r.a.createElement("a",{href:"tel:+"+s.a.phone.replace(/\D/g,"")},s.a.phone)),r.a.createElement("div",{className:"flex flex-wrap items-stretch py-12 my-12 overflow-hidden text-left"},r.a.createElement("div",{className:"flex flex-1 w-full md:px-8 sm:w-1/2"},r.a.createElement("iframe",{className:"w-full h-full border-none",frameBorder:"0",src:"https://www.google.com/maps/embed/v1/place?q=place_id:"+s.a.mapPlaceId+"&key="+s.a.googleCloudApiKey,allowFullScreen:!0})),r.a.createElement("div",{className:"w-full px-8 sm:w-1/2"},r.a.createElement(c.a,null))))))},X=a("Zttt");t.default=function(e){var t=e.data.markdownRemark.frontmatter;return r.a.createElement(X.a,{includePreFooter:!0},r.a.createElement(G,{title:t.title,meta_title:t.meta_title,meta_description:t.meta_description,heading:t.heading,description:t.description,features:t.features,carousel:t.carousel,usecases:t.usecases,datafeed:t.datafeed,consumerfeatures:t.consumerfeatures,consumerfeaturesimg:t.consumerfeaturesimg,enterprisefeatures:t.enterprisefeatures,cta:t.cta}))}}}]);
//# sourceMappingURL=component---src-templates-home-page-js-5e1e170de90bd98a54c7.js.map