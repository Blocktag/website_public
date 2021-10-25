(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"x2+w":function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),r=a.n(l),n=a("TJpk"),s=a.n(n),m=a("obyI"),c=a.n(m),i=a("PrUk"),o=a("KYPV"),d=a("UGp+"),p=d.a().shape({name:d.b().min(2,"Too Short!").max(50,"Too Long!").required("Name is Required!"),email:d.b().email("Enter a Valid Email!").required("Email is Required!")}),u=function(){return r.a.createElement(o.b,{initialValues:{name:"",email:""},validationSchema:p,onSubmit:function(e,t){var a=t.setSubmitting;window.location.href="mailto:hello@blocktag.com?subject=Inquiry from "+e.name+" ("+e.email+")&body=I am interested in learning more about Blocktag.",a(!1)},render:function(e){e.errors,e.touched;var t=e.isSubmitting,a=e.handleSubmit,l=e.handleReset;return r.a.createElement("form",{onSubmit:a,onReset:l,"data-netlify":"true","data-netlify-honeypot":"bot-field",className:"w-full my-24"},r.a.createElement("div",{className:"flex flex-wrap items-center py-2 border-teal-500 sm:border-b-2 sm:border-b sm:mx-24 sm:flex-no-wrap"},r.a.createElement(o.a,{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-none focus:outline-none",type:"text",placeholder:"Full Name",name:"name","aria-label":"Full name"}),r.a.createElement(o.a,{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-none focus:outline-none",type:"text",placeholder:"Email Address",name:"email","aria-label":"Email Address"}),r.a.createElement("button",{className:"flex-grow px-8 py-1 my-4 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded sm:my-0 hover:bg-teal-700 hover:border-teal-700",type:"submit",disabled:t},"Inquire")))}})},f=a("JX7q"),x=a("dI71"),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeEl:null},a.onMouseEnter=a.onMouseEnter.bind(Object(f.a)(a)),a.onMouseLeave=a.onMouseLeave.bind(Object(f.a)(a)),a}Object(x.a)(t,e);var a=t.prototype;return a.onMouseEnter=function(e){var t=this;return function(a){t.setState({activeEl:e})}},a.onMouseLeave=function(e){this.setState({activeEl:null})},a.render=function(){var e=this,t=this.state.activeEl,a=this.props.data;return r.a.createElement("div",null,r.a.createElement("div",{className:"flex flex-wrap items-end py-12"},this.props.data.map((function(a,l){return r.a.createElement("div",{key:"carousel_"+l,className:(null!==t?"hover:opacity-100 opacity-50":"pt-4 first:opacity-50 last:opacity-50")+" w-1/5 text-center transition ease-out duration-700 transform hover:scale-125",onMouseEnter:e.onMouseEnter(l),onMouseLeave:e.onMouseLeave},r.a.createElement("img",{className:"inline",style:{maxWidth:"60%",maxHeight:"300px"},src:a.img}))}))),r.a.createElement("div",{className:"justify-center w-full my-12 text-sm text-center"},r.a.createElement("div",{className:"max-w-lg mx-auto",style:{height:"4rem"}},null!==t?r.a.createElement("span",{dangerouslySetInnerHTML:{__html:a[t].description}}):r.a.createElement("span",null,this.props.defaultDescription))))},t}(l.Component);g.defaultProps={defaultDescription:r.a.createElement("p",null,"Download and print Blocktag tags using multiple print techniques, on different materials and in various form factors. Custom configurations welcome.",r.a.createElement("span",{className:"block italic text-gray-500"},"< Hover on tags for info >")),data:[]};var h=a("IP2g"),E=a("wHSu"),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeEl:0},a.onLeft=a.onLeft.bind(Object(f.a)(a)),a.onRight=a.onRight.bind(Object(f.a)(a)),a}Object(x.a)(t,e);var a=t.prototype;return a.onLeft=function(){this.setState({activeEl:Math.max(0,this.state.activeEl-1)})},a.onRight=function(){this.setState({activeEl:Math.min(this.props.data.length-1,this.state.activeEl+1)})},a.render=function(){var e=this.state.activeEl,t=this.props.data,a=this.props.data[e];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex items-center w-full md:w-1/2"},r.a.createElement(h.a,{icon:E.e,className:(0===e?"text-gray-400":"text-teal-500 hover:text-teal-600")+" text-2xl lg:text-3xl m-4 lg:m-16 flex-shrink transition ease-out duration-500",onClick:this.onLeft}),r.a.createElement("div",{className:"relative flex-grow",style:{paddingBottom:"100%"}},r.a.createElement("img",{className:"absolute object-scale-down w-full h-full",src:a.img})),r.a.createElement(h.a,{icon:E.f,className:(e===t.length-1?"text-gray-400":"text-teal-500 hover:text-teal-600")+" text-2xl lg:text-3xl m-4 lg:m-16 flex-shrink transition ease-out duration-500",onClick:this.onRight})),r.a.createElement("div",{className:"w-full p-4 lg:p-12 md:w-1/2"},r.a.createElement("h2",{className:"mb-4 text-2xl"},a.title),r.a.createElement("ul",{className:"mb-4 overflow-y-auto font-light whitespace-pre-wrap",style:{height:"20rem"}},a.info.map((function(e,t){return r.a.createElement("li",{key:"info_"+t},e)})),a.origin?r.a.createElement("br",null):"",a.origin,a.certs?r.a.createElement("br",null):"",a.certs)))},t}(l.Component);b.defaultProps={defaultDescription:"asdfasdf default description",data:[]},a("7O5W").b.add(E.j,E.g,E.l,E.c,E.d,E.a,E.e,E.f,E.b,E.k,E.h,E.n,E.i,E.m);var w=function(e){var t=e.heading,a=e.description,l=e.meta_title,n=e.meta_description,m=e.usecases,o=e.carousel,d=e.datafeed,p=e.consumerfeatures,f=e.consumerfeaturesimg,x=e.enterprisefeatures,w=e.features;e.cta;return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement("title",null,l),r.a.createElement("meta",{name:"description",content:n})),r.a.createElement("div",{className:"flex flex-col font-sans bg-indigo-800 bg-top bg-no-repeat bg-cover",style:{backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 90%), url("/img/earth.jpg")',marginTop:"-80px"}},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("main",{className:"flex flex-wrap items-center pt-48 text-center text-white lg:px-24"},r.a.createElement("div",{className:"w-full whitespace-pre-line md:w-full"},r.a.createElement("h1",{className:"text-4xl font-light tracking-tight lg:text-6xl"},t),r.a.createElement("h4",{className:"my-4 text-base font-light text-gray-400"},a),r.a.createElement(u,null))),r.a.createElement("hr",{className:"border-gray-700"}),r.a.createElement("div",{className:"flex flex-wrap pb-12 mt-8 overflow-hidden text-center text-gray-500"},m.map((function(e){return r.a.createElement("div",{key:"feature_"+e.heading,className:"w-full py-4 whitespace-pre-line sm:w-1/2 lg:w-1/4"},r.a.createElement(h.a,{icon:e.icon,className:"mb-4 text-4xl text-teal-500"}),r.a.createElement("h2",{className:"pb-2 text-lg text-gray-100 font-base"},e.heading),r.a.createElement("h3",{className:"text-base font-light"},e.description))}))))),r.a.createElement("div",{id:"products",className:"flex flex-col bg-white",style:{backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,1) 50%, #f2f2f2 100%), url("/img/earth.jpg")'}},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement(g,{data:o}))),r.a.createElement("div",{className:"flex flex-col bg-white"},"  ",r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center pt-12 mt-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-8 text-3xl font-light text-center text-black-100"},"How It Works"),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-1 pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," Step 1: Generate Tags "),r.a.createElement("h3",null," Request and download tags from Blocktag‘s website instantly. Unclonable, QR-like digital tag design uses special color pattern encodings"),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/mobile_ss/gratingsFullHalftoneRGB.png"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2  pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," Step 2: Print Tags "),r.a.createElement("h3",null," Print digital tags from a variety of printers if needed. From home inkjets to industrial printers. Printing amplifies unique, unclonable physical characteristics"),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/mobile_ss/BlocktagCloseUpCrop2.jpeg"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-3  pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," Step 3: Fingerprint Tags "),r.a.createElement("h3",null," Capture printed tag’s physical print signature as fingerprint using mobile device or flatbed scanner for eventual authentication by other users"),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/mobile_ss/TagFingerprintedCrop2.jpeg"})),r.a.createElement("div",{className:"w-full text-center py-2 my-4"},r.a.createElement("a",{href:"https://generate.blocktag.com",class:"flex-grow inline-block px-8 py-2 my-4 mr-4 text-sm text-white bg-teal-500 border border-teal-500 rounded sm:my-0 hover:bg-teal-700 hover:border-teal-700"},"Generate Tags Now"))),r.a.createElement("div",{className:"flex flex-wrap items-center pt-12 mt-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-16 text-3xl font-light text-center text-black-100"},"Mobile Authentication"),r.a.createElement("div",{className:"w-full sm:w-1/4 sm:order-1  pl-2 pr-2 pt-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," Authentic Tagged Product"),r.a.createElement("h3",null," User can scan tagged product with Blocktag app to distinguish an original tag from cloned tags (e.g. photocopies, reprints, deepfakes)"),r.a.createElement("img",{className:"mx-auto",src:"/img/mobile_ss/AuthenticateFailedCrop.jpeg"})),r.a.createElement("div",{className:"w-full sm:w-1/4 sm:order-2 pl-2 pr-2 pt-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," Genuine User Identity "),r.a.createElement("h3",null," Challenge user to identify themselves using Blocktag app with Username, Email, FaceID or CryptoID "),r.a.createElement("img",{className:"mx-auto",src:"/img/mobile_ss/SupplierAsUserCrop.jpeg"})),r.a.createElement("div",{className:"w-full sm:w-1/4 sm:order-3  pl-2 pr-2 pt-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," Tag User Presence/Possession "),r.a.createElement("h3",null," Prove not only an original tagged product, but also prove user is physically close or has physical control of tag instead of a tag screenshot."),r.a.createElement("img",{className:"mx-auto",src:"/img/mobile_ss/AuthenticateDetectScreenCrop2.jpeg"})),r.a.createElement("div",{className:"w-full sm:w-1/4 sm:order-4 pl-2 pr-2 pt-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," QR Backwards Compatiblity"),r.a.createElement("h3",null," Users can read tag QR data using any QR reader without installing Blocktag app and skip authentication."),r.a.createElement("img",{className:"mx-auto",src:"/img/mobile_ss/BlocktagCameraCrop.jpeg"}))),r.a.createElement("div",{className:"flex flex-wrap items-center my-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full text-3xl text-center"},"Tag Data"),r.a.createElement("h3",{className:"w-full text-center"}," Users can upload authenticated tag data by authenticating tag to identify themselves as tag data owners/stakeholders"),r.a.createElement(b,{data:d})))),r.a.createElement("div",{className:"flex flex-col bg-blue-900"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center pt-12 mt-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-16 text-3xl font-light text-center text-gray-100"},"Consumer Simplicity"),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2"},r.a.createElement("img",{className:"mx-auto",src:f})),r.a.createElement("div",{className:"w-full px-12 text-center text-gray-100 sm:pb-8 lg:pl-24 sm:pl-0 md:pr-12 sm:pr-4 sm:text-right sm:w-1/3 sm:order-1"},p.slice(0,p.length/2).map((function(e,t){return r.a.createElement("div",{key:"consumer_"+t,className:"h-32 my-8 sm:h-40"},r.a.createElement(h.a,{icon:e.icon,className:"mb-4 text-3xl text-teal-500"}),r.a.createElement("h3",{className:"text-base font-base"},e.heading),r.a.createElement("p",{className:"text-sm"},e.description))}))),r.a.createElement("div",{className:"w-full px-12 pb-8 text-center text-gray-100 lg:pr-24 sm:pr-0 md:pl-12 sm:pl-4 sm:text-left sm:w-1/3 sm:order-3"},p.slice(p.length/2,p.length).map((function(e,t){return r.a.createElement("div",{key:"consumer_"+(3+t),className:"h-32 my-8 sm:h-40"},r.a.createElement(h.a,{icon:e.icon,className:"mb-4 text-3xl text-teal-500"}),r.a.createElement("h3",{className:"text-base font-base"},e.heading),r.a.createElement("p",{className:"text-sm"},e.description))})))))),r.a.createElement("div",{className:"flex flex-col bg-white"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center pt-16 pb-4 overflow-hidden text-left md:py-12 md:my-12"},r.a.createElement("div",{className:"w-full mb-16 text-3xl font-light text-center text-gray-800"},"Enterprise Efficiency"),r.a.createElement("div",{className:"w-full pb-12 md:w-1/2 md:pb-0"},r.a.createElement("img",{className:"max-w-sm mx-auto md:max-w-full md:mx-0",src:"/img/laptop.png"})),r.a.createElement("div",{className:"w-full px-6 sm:px-20 md:pr-0 md:w-1/2"},r.a.createElement("ul",null,x.map((function(e,t){return r.a.createElement("li",{key:"enterprise_"+t,className:"mb-12"},r.a.createElement("h3",{className:"text-lg font-medium leading-loose"},e.heading),r.a.createElement("p",{className:"text-base font-light"},e.description))}))))))),r.a.createElement("div",{className:"flex flex-col bg-gray-100"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-start py-12 my-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-12 text-3xl font-light text-center"},"Features"),w.map((function(e,t){return r.a.createElement("div",{key:"feature_"+t,className:"flex w-full p-4 text-gray-800 md:w-1/2 lg:w-1/4"},r.a.createElement(h.a,{icon:E.d,className:"flex-shrink mx-4 text-3xl text-teal-500"}),r.a.createElement("div",{className:"flex-grow"},r.a.createElement("h3",{className:"text-base font-base"},e.heading),r.a.createElement("p",{className:"text-sm font-light"},e.description)))}))))),r.a.createElement("div",{className:"flex flex-col text-white bg-blue-900"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"w-full my-6 mt-24 text-4xl font-light text-center"},"Get in Touch"),r.a.createElement("div",{className:"w-full my-6 text-xl font-light text-center whitespace-pre-line"},r.a.createElement("a",{href:"mailto:"+c.a.email},c.a.email),"\n",r.a.createElement("a",{href:"tel:+"+c.a.phone.replace(/\D/g,"")},c.a.phone)),r.a.createElement("div",{className:"flex flex-wrap items-stretch py-12 my-12 overflow-hidden text-left"},r.a.createElement("div",{className:"flex flex-1 w-full md:px-8 sm:w-1/2"},r.a.createElement("iframe",{className:"w-full h-full border-none",frameBorder:"0",src:"https://www.google.com/maps/embed/v1/place?q=place_id:"+c.a.mapPlaceId+"&key="+c.a.googleCloudApiKey,allowFullScreen:!0})),r.a.createElement("div",{className:"w-full px-8 sm:w-1/2"},r.a.createElement(i.a,null))))))},v=a("Zttt");t.default=function(e){var t=e.data.markdownRemark.frontmatter;return r.a.createElement(v.a,{includePreFooter:!0},r.a.createElement(w,{title:t.title,meta_title:t.meta_title,meta_description:t.meta_description,heading:t.heading,description:t.description,features:t.features,carousel:t.carousel,usecases:t.usecases,datafeed:t.datafeed,consumerfeatures:t.consumerfeatures,consumerfeaturesimg:t.consumerfeaturesimg,enterprisefeatures:t.enterprisefeatures,cta:t.cta}))}}}]);
//# sourceMappingURL=component---src-templates-home-page-js-2398dd8c85f1bb3baff0.js.map