(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+71q":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a("q1tI"),r=a.n(l),n=a("KYPV"),s=a("UGp+"),m=s.a().shape({name:s.b().min(2,"Too Short!").max(50,"Too Long!").required("Name is Required!"),email:s.b().email("Enter a Valid Email!").required("Email is Required!")}),c=a("l2GQ"),i=function(){return r.a.createElement(n.b,{initialValues:{name:"",email:""},validationSchema:m,onSubmit:function(e,t){var a=t.setSubmitting;window.location.href="mailto:hello@blocktag.com?subject=Inquiry from "+e.name+" ("+e.email+")&body=I am interested in learning more about Blocktag.",a(!1)},render:function(e){e.errors,e.touched;var t=e.isSubmitting,a=(e.handleSubmit,e.handleReset);return r.a.createElement("form",{onSubmit:function(){Object(c.a)("InquiryHome")},onReset:a,"data-netlify":"true","data-netlify-honeypot":"bot-field",className:"w-full my-24"},r.a.createElement("div",{className:"flex flex-wrap items-center py-2 border-teal-500 sm:border-b-2 sm:border-b sm:mx-24 sm:flex-no-wrap"},r.a.createElement(n.a,{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-none focus:outline-none",type:"text",placeholder:"Full Name",name:"name","aria-label":"Full name"}),r.a.createElement(n.a,{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-none focus:outline-none",type:"text",placeholder:"Email Address",name:"email","aria-label":"Email Address"}),r.a.createElement("button",{className:"flex-grow px-8 py-1 my-4 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded sm:my-0 hover:bg-teal-700 hover:border-teal-700",type:"submit",disabled:t},"Inquire")))}})}},"4aTW":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a("JX7q"),r=a("dI71"),n=a("q1tI"),s=a.n(n),m=a("IP2g"),c=a("wHSu"),i=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeEl:0},a.onLeft=a.onLeft.bind(Object(l.a)(a)),a.onRight=a.onRight.bind(Object(l.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onLeft=function(){this.setState({activeEl:Math.max(0,this.state.activeEl-1)})},a.onRight=function(){this.setState({activeEl:Math.min(this.props.data.length-1,this.state.activeEl+1)})},a.render=function(){var e=this.state.activeEl,t=this.props.data,a=this.props.data[e];return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex items-center w-full md:w-1/2"},s.a.createElement(m.a,{icon:c.e,className:(0===e?"text-gray-400":"text-teal-500 hover:text-teal-600")+" text-2xl lg:text-3xl m-4 lg:m-16 flex-shrink transition ease-out duration-500",onClick:this.onLeft}),s.a.createElement("div",{className:"relative flex-grow",style:{paddingBottom:"100%"}},s.a.createElement("img",{className:"absolute object-scale-down w-full h-full",src:a.img})),s.a.createElement(m.a,{icon:c.f,className:(e===t.length-1?"text-gray-400":"text-teal-500 hover:text-teal-600")+" text-2xl lg:text-3xl m-4 lg:m-16 flex-shrink transition ease-out duration-500",onClick:this.onRight})),s.a.createElement("div",{className:"w-full p-4 lg:p-12 md:w-1/2"},s.a.createElement("h2",{className:"mb-4 text-2xl"},a.title),s.a.createElement("ul",{className:"mb-4 overflow-y-auto font-light whitespace-pre-wrap",style:{height:"20rem"}},a.info.map((function(e,t){return s.a.createElement("li",{key:"info_"+t},e)})),a.origin?s.a.createElement("br",null):"",a.origin,a.certs?s.a.createElement("br",null):"",a.certs)))},t}(n.Component);i.defaultProps={defaultDescription:"asdfasdf default description",data:[]}},Y5i1:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),r=a.n(l),n=(a("Wbzz"),a("TJpk")),s=a.n(n),m=a("obyI"),c=a.n(m),i=a("PrUk"),o=a("+71q"),p=(a("m13s"),a("4aTW")),d=(a("IP2g"),a("7O5W")),u=a("wHSu"),f=a("l2GQ"),x=a("okPO");a("dEtu");d.b.add(u.j,u.g,u.l,u.c,u.d,u.a,u.e,u.f,u.b,u.k,u.h,u.n,u.i,u.m);var g=function(e){e.heading,e.description;var t=e.meta_title,a=e.meta_description;e.usecases,e.carousel,e.consumerfeatures,e.enterprisefeatures,e.features,e.cta;return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement("title",null,t),r.a.createElement("meta",{name:"description",content:a})),r.a.createElement("div",{className:"flex flex-col font-sans bg-indigo-800 bg-top bg-no-repeat bg-cover",style:{backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 90%), url("/img/notary/remote-stamp-notarisation.jpeg")',marginTop:"-80px"}},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("main",{className:"flex flex-wrap items-center pt-48 text-center text-white lg:px-24"},r.a.createElement("div",{className:"w-full whitespace-pre-line md:w-full"},r.a.createElement("h1",{className:"text-4xl font-light tracking-tight lg:text-6xl"},"Remote Notarisation"),r.a.createElement("h4",{className:"my-4 text-base font-light text-gray-400"},r.a.createElement("ul",null,r.a.createElement("li",null,"Notary Public: Find new clients that need remote stamped notarisation"),r.a.createElement("li",null,"Clients: Simplify in-person notarisation steps with printed notary stamp"),r.a.createElement("li",null,"Organisations: Save cost by authenticating stamped docs with phone camera "))),r.a.createElement(o.a,null))),r.a.createElement("hr",{className:"border-gray-700"}),r.a.createElement("div",{className:"flex flex-wrap pb-12 mt-8 overflow-hidden text-center text-gray-500"}),r.a.createElement("a",{onClick:function(){Object(f.a)("DownloadAppFromWebNotary"),Object(x.a)("https://apps.apple.com/us/app/blocktag/id1478833776")}},r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",style:{width:"200px"}}),r.a.createElement("br",null)))),r.a.createElement("div",{id:"products",className:"flex flex-col bg-white",style:{backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,1) 50%, #f2f2f2 100%), url("/img/earth.jpg")'}},r.a.createElement("div",{className:"container px-8 mx-auto"})),r.a.createElement("div",{className:"flex flex-col bg-white"},"  ",r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center my-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full text-3xl text-center"},"Use Cases"),r.a.createElement(p.a,{data:[{img:"/img/samples/BlocktagOriginalPaper.jpg",title:"Original Printed Documents",info:["test","test2"],origin:null,certs:null,eventfeed:null}]})))),r.a.createElement("div",{className:"flex flex-col bg-dark mb-8"},"  ",r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-8 text-3xl font-light text-center text-black-100"},"How It Works"),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-1 pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"},"1.Notary Uploads Stamp Image "),r.a.createElement("h3",null,"Notary Public registers on Blocktag website and uploads image of their notary stamp."),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",style:{padding:30},src:"/img/notary/physical-notary-stamp.png"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2  pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"},"2.Client Downloads Stamp QR "),r.a.createElement("h3",null," Client searches for a Blocktag registered Notary Public. Downloads notary’s stamp as secure QR "),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/notary/virtual-notary-stamp.png"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-3  pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"},"3.Client Prints Stamp QR"),r.a.createElement("h3",null,"Client prints stamp QR on notarisation docs using home printer."),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/notary/inkjet-printer.jpeg"})),r.a.createElement("div",{className:"w-full text-center py-2 my-4"},r.a.createElement("a",{onClick:function(){Object(f.a)("DownloadTagBody"),Object(x.a)("https://generate.blocktag.com")},class:"flex-grow inline-block px-8 py-2 my-4 mr-4 text-sm text-white bg-teal-500 border border-teal-500 rounded sm:my-0 hover:bg-teal-700 hover:border-teal-700"},"Download Tags Now"))),r.a.createElement("div",{className:"flex flex-wrap items-center overflow-hidden text-left"},r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-1 pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"},"4.Client Fingerprints Stamp"),r.a.createElement("h3",null,"During video call with Notary, Client use phone camera to capture photo of printed stamp as fingerprint."),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/notary/physical-notary-stamp.png"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2  pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"},"5.Notary Activates Stamp "),r.a.createElement("h3",null," Blocktag app informs Notary that his stamp is printed by Client. Notary must approve to activate stamp QR. "),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/notary/notary-public-remote-meeting.png"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-3  pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"},"6.Organisation Authenticates Stamp"),r.a.createElement("h3",null,"Organization uses Blocktag app to authenticate stamp on docs mailed by Client. Client’s identity can be verified with camera Face ID."),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/mobile_ss/TagFingerprintedCrop2.jpeg"}))),r.a.createElement("div",{className:"flex flex-wrap items-center pt-12 mt-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-16 text-3xl font-light text-center text-black-100"},"Mobile Authentication"),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-1  pl-2 pr-2 pt-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," Authentic Tagged Product"),r.a.createElement("h3",null," Scan fingerprinted tag with Blocktag app to detect original from cloned tags. No special scan hardware required."),r.a.createElement("img",{className:"mx-auto",src:"/img/mobile_ss/AuthenticateSuccessfulCrop.jpeg"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2  pl-2 pr-2 pt-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," Proof Of User Presence/Possession "),r.a.createElement("h3",null," Prove user is physically close or has physical control of an authentic tag instead of a tag screenshot. Challenge user to identify themselves using Blocktag app with Username, Email, FaceID or CryptoID."),r.a.createElement("img",{className:"mx-auto",src:"/img/mobile_ss/AuthenticateDetectScreenCrop2.jpeg"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-3 pl-2 pr-2 pt-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," QR Backwards Compatible"),r.a.createElement("h3",null," Users can read tag data using any native camera reader without installing Blocktag app and skip authentication."),r.a.createElement("img",{className:"mx-auto",src:"/img/mobile_ss/BlocktagCameraCrop.jpeg"}))))),r.a.createElement("div",{className:"flex flex-col bg-blue-900"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center pt-12 mt-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-16 text-3xl font-light text-center text-gray-100"},"Consumer Simplicity"),r.a.createElement("div",{className:"w-full px-12 text-center text-gray-100 sm:pb-8 lg:pl-24 sm:pl-0 md:pr-12 sm:pr-4 sm:text-right sm:w-1/3 sm:order-1"}),r.a.createElement("div",{className:"w-full px-12 pb-8 text-center text-gray-100 lg:pr-24 sm:pr-0 md:pl-12 sm:pl-4 sm:text-left sm:w-1/3 sm:order-3"})))),r.a.createElement("div",{className:"flex flex-col bg-white"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center pt-16 pb-4 overflow-hidden text-left md:py-12 md:my-12"},r.a.createElement("div",{className:"w-full mb-16 text-3xl font-light text-center text-gray-800"},"Enterprise Efficiency"),r.a.createElement("div",{className:"w-full pb-12 md:w-1/2 md:pb-0"},r.a.createElement("img",{className:"max-w-sm mx-auto md:max-w-full md:mx-0",src:"/img/laptop.png"})),r.a.createElement("div",{className:"w-full px-6 sm:px-20 md:pr-0 md:w-1/2"},r.a.createElement("ul",null))))),r.a.createElement("div",{className:"flex flex-wrap items-center overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-8 text-3xl font-light text-center text-black-100"},"Our Partners"),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-1 pl-2 pr-2"}),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2  pl-2 pr-2"},r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/berkeley-multi-color-on-blue.png"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-3  pl-2 pr-2"})),r.a.createElement("div",{className:"flex flex-col bg-gray-100"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-start py-12 my-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-12 text-3xl font-light text-center"},"Features")))),r.a.createElement("div",{className:"flex flex-col text-white bg-blue-900"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"w-full my-6 mt-24 text-4xl font-light text-center"},"Get in Touch"),r.a.createElement("div",{className:"w-full my-6 text-xl font-light text-center whitespace-pre-line"},r.a.createElement("a",{href:"mailto:"+c.a.email},c.a.email),"\n",r.a.createElement("a",{href:"tel:+"+c.a.phone.replace(/\D/g,"")},c.a.phone)),r.a.createElement("div",{className:"flex flex-wrap items-stretch py-12 my-12 overflow-hidden text-left"},r.a.createElement("div",{className:"flex flex-1 w-full md:px-8 sm:w-1/2"},r.a.createElement("iframe",{className:"w-full h-full border-none",frameBorder:"0",src:"https://www.google.com/maps/embed/v1/place?q=place_id:"+c.a.mapPlaceId+"&key="+c.a.googleCloudApiKey,allowFullScreen:!0})),r.a.createElement("div",{className:"w-full px-8 sm:w-1/2"},r.a.createElement(i.a,null))))))},h=a("Zttt");t.default=function(){return r.a.createElement(h.a,{includePreFooter:!0},r.a.createElement(g,null))}},m13s:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var l=a("JX7q"),r=a("dI71"),n=a("q1tI"),s=a.n(n),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeEl:null},a.onMouseEnter=a.onMouseEnter.bind(Object(l.a)(a)),a.onMouseLeave=a.onMouseLeave.bind(Object(l.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onMouseEnter=function(e){var t=this;return function(a){t.setState({activeEl:e})}},a.onMouseLeave=function(e){this.setState({activeEl:null})},a.render=function(){var e=this,t=this.state.activeEl,a=this.props.data;return s.a.createElement("div",null,s.a.createElement("div",{className:"flex flex-wrap items-end py-12"},this.props.data.map((function(a,l){return s.a.createElement("div",{key:"carousel_"+l,className:(null!==t?"hover:opacity-100 opacity-50":"pt-4 first:opacity-50 last:opacity-50")+" w-1/5 text-center transition ease-out duration-700 transform hover:scale-125",onMouseEnter:e.onMouseEnter(l),onMouseLeave:e.onMouseLeave},s.a.createElement("img",{className:"inline",style:{maxWidth:"60%",maxHeight:"300px"},src:a.img}))}))),s.a.createElement("div",{className:"justify-center w-full my-12 text-sm text-center"},s.a.createElement("div",{className:"max-w-lg mx-auto",style:{height:"4rem"}},null!==t?s.a.createElement("span",{dangerouslySetInnerHTML:{__html:a[t].description}}):s.a.createElement("span",null,this.props.defaultDescription))))},t}(n.Component);m.defaultProps={defaultDescription:s.a.createElement("p",null,"Download and print Blocktag tags using multiple print techniques, materials and form factors like barcode, QR, Augmented Reality (AR) markers. Custom configurations welcome.",s.a.createElement("span",{className:"block italic text-gray-500"},"< Hover on tags for info >")),data:[]}}}]);
//# sourceMappingURL=component---src-templates-notary-page-js-7f1b834900517c9ffa35.js.map