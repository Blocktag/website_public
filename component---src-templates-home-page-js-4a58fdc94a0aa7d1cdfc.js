(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+71q":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a("q1tI"),r=a.n(l),s=a("KYPV"),n=a("UGp+");var m=n.a().shape({name:n.b().min(2,"Too Short!").max(50,"Too Long!").required("Name is Required!"),email:n.b().email("Enter a Valid Email!").required("Email is Required!")}),c=a("l2GQ");const i=()=>r.a.createElement(s.b,{initialValues:{name:"",email:""},validationSchema:m,onSubmit:(e,t)=>{let{setSubmitting:a}=t;window.location.href="mailto:hello@blocktag.com?subject=Inquiry from "+e.name+" ("+e.email+")&body=I am interested in learning more about Blocktag.",a(!1)},render:e=>{let{errors:t,touched:a,isSubmitting:l,handleSubmit:n,handleReset:m}=e;return r.a.createElement("form",{onSubmit:()=>{Object(c.a)("InquiryHome")},onReset:m,"data-netlify":"true","data-netlify-honeypot":"bot-field",className:"w-full my-24"},r.a.createElement("div",{className:"flex flex-wrap items-center py-2 border-teal-500 sm:border-b-2 sm:border-b sm:mx-24 sm:flex-no-wrap"},r.a.createElement(s.a,{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-none focus:outline-none",type:"text",placeholder:"Full Name",name:"name","aria-label":"Full name"}),r.a.createElement(s.a,{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-none focus:outline-none",type:"text",placeholder:"Email Address",name:"email","aria-label":"Email Address"}),r.a.createElement("button",{className:"flex-grow px-8 py-1 my-4 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded sm:my-0 hover:bg-teal-700 hover:border-teal-700",type:"submit",disabled:l},"Inquire")))}})},"4aTW":function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var l=a("q1tI"),r=a.n(l),s=a("IP2g"),n=a("wHSu");class m extends l.Component{constructor(e){super(e),this.state={activeEl:0},this.onLeft=this.onLeft.bind(this),this.onRight=this.onRight.bind(this)}onLeft(){this.setState({activeEl:Math.max(0,this.state.activeEl-1)})}onRight(){this.setState({activeEl:Math.min(this.props.data.length-1,this.state.activeEl+1)})}render(){const{activeEl:e}=this.state,t=this.props.data,a=this.props.data[e];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex items-center w-full md:w-1/2"},r.a.createElement(s.a,{icon:n.e,className:(0===e?"text-gray-400":"text-teal-500 hover:text-teal-600")+" text-2xl lg:text-3xl m-4 lg:m-16 flex-shrink transition ease-out duration-500",onClick:this.onLeft}),r.a.createElement("div",{className:"relative flex-grow",style:{paddingBottom:"100%"}},r.a.createElement("img",{className:"absolute object-scale-down w-full h-full",src:a.img})),r.a.createElement(s.a,{icon:n.f,className:(e===t.length-1?"text-gray-400":"text-teal-500 hover:text-teal-600")+" text-2xl lg:text-3xl m-4 lg:m-16 flex-shrink transition ease-out duration-500",onClick:this.onRight})),r.a.createElement("div",{className:"w-full p-4 lg:p-12 md:w-1/2"},r.a.createElement("h2",{className:"mb-4 text-2xl"},a.title),r.a.createElement("ul",{className:"mb-4 overflow-y-auto font-light whitespace-pre-wrap",style:{height:"20rem"}},a.info.map((e,t)=>r.a.createElement("li",{key:"info_"+t},e)),a.origin?r.a.createElement("br",null):"",a.origin,a.certs?r.a.createElement("br",null):"",a.certs)))}}m.defaultProps={defaultDescription:"asdfasdf default description",data:[]}},m13s:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var l=a("q1tI"),r=a.n(l);class s extends l.Component{constructor(e){super(e),this.state={activeEl:null},this.onMouseEnter=this.onMouseEnter.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this)}onMouseEnter(e){return t=>{this.setState({activeEl:e})}}onMouseLeave(e){this.setState({activeEl:null})}render(){const{activeEl:e}=this.state,t=this.props.data;return r.a.createElement("div",null,r.a.createElement("div",{className:"flex flex-wrap items-end py-12"},this.props.data.map((t,a)=>r.a.createElement("div",{key:"carousel_"+a,className:(null!==e?"hover:opacity-100 opacity-50":"pt-4 first:opacity-50 last:opacity-50")+" w-1/3 text-center transition ease-out duration-700 transform hover:scale-125",onMouseEnter:this.onMouseEnter(a),onMouseLeave:this.onMouseLeave},r.a.createElement("img",{className:"inline",style:{maxWidth:"60%",maxHeight:"300px"},src:t.img})))),r.a.createElement("div",{className:"justify-center w-full my-12 text-sm text-center"},r.a.createElement("div",{className:"max-w-lg mx-auto",style:{height:"4rem"}},null!==e?r.a.createElement("span",{dangerouslySetInnerHTML:{__html:t[e].description}}):r.a.createElement("span",null,this.props.defaultDescription))))}}s.defaultProps={defaultDescription:r.a.createElement("p",null,"Download and print Blocktag tags using multiple print techniques, materials and form factors like barcode, QR, Augmented Reality (AR) markers. Custom configurations welcome.",r.a.createElement("span",{className:"block italic text-gray-500"},"< Hover on tags for info >")),data:[]}},"x2+w":function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),r=a.n(l),s=a("TJpk"),n=a.n(s),m=a("obyI"),c=a.n(m),i=a("PrUk"),o=a("+71q"),d=a("m13s"),p=a("4aTW"),u=a("IP2g"),x=a("7O5W"),f=a("wHSu"),g=a("l2GQ"),h=a("okPO");a("dEtu");x.b.add(f.j,f.g,f.l,f.c,f.d,f.a,f.e,f.f,f.b,f.k,f.h,f.n,f.i,f.m);var E=e=>{let{heading:t,description:a,meta_title:l,meta_description:s,usecases:m,carousel:x,datafeed:f,consumerfeatures:E,consumerfeaturesimg:b,enterprisefeatures:w,features:v,cta:N}=e;return r.a.createElement("div",null,r.a.createElement(n.a,null,r.a.createElement("title",null,l),r.a.createElement("meta",{name:"description",content:s})),r.a.createElement("div",{className:"flex flex-col font-sans bg-indigo-800 bg-top bg-no-repeat bg-cover",style:{backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 90%), url("/img/earth.jpg")',marginTop:"-80px"}},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("main",{className:"flex flex-wrap items-center pt-48 text-center text-white lg:px-24"},r.a.createElement("div",{className:"w-full whitespace-pre-line md:w-full"},r.a.createElement("h1",{className:"text-4xl font-light tracking-tight lg:text-6xl"},t),r.a.createElement("h4",{className:"my-4 text-base font-light text-gray-400"},a),r.a.createElement(o.a,null))),r.a.createElement("hr",{className:"border-gray-700"}),r.a.createElement("div",{className:"flex flex-wrap pb-12 mt-8 overflow-hidden text-center text-gray-500"},m.map(e=>r.a.createElement("div",{key:"feature_"+e.heading,className:"w-full py-4 px-8 whitespace-pre-line sm:w-1/2 lg:w-1/4"},r.a.createElement(u.a,{icon:e.icon,className:"mb-4 text-4xl text-teal-500"}),r.a.createElement("h2",{className:"pb-2 text-lg text-gray-100 font-base"},e.heading),r.a.createElement("h3",{className:"text-base font-light"},e.description)))),r.a.createElement("a",{onClick:()=>{Object(g.a)("DownloadAppFromWebHome"),Object(h.a)("https://apps.apple.com/us/app/blocktag/id1478833776"),window.lintrk("DownloadAppFromWebHome",{conversion_id:12784580})}},r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",style:{width:"200px"}}),r.a.createElement("br",null)))),r.a.createElement("div",{id:"products",className:"flex flex-col bg-white",style:{backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,1) 50%, #f2f2f2 100%), url("/img/earth.jpg")'}},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement(d.a,{data:x}))),r.a.createElement("div",{className:"flex flex-col bg-white"},"  ",r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center my-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full text-3xl text-center"},"Use Cases"),r.a.createElement(p.a,{data:f})))),r.a.createElement("div",{className:"flex flex-col bg-gray-100"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-start py-6 my-6 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-12 text-3xl font-light text-center"},"Awards"),r.a.createElement("div",{className:"w-full sm:w-1/2 sm:order-1 pl-2 pr-2"}," ",r.a.createElement("a",{href:"https://www.agorize.com/en/challenges/ricoh-2023/pages/final-results"},r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",width:"90%",src:"/img/awards/ricoh_finalist.png"}))),r.a.createElement("div",{className:"w-full sm:w-1/2 sm:order-1 pl-2 pr-2"}," ",r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/awards/Meet_The_Drapers.png",width:"70%"}))))),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-start py-6 my-6 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-12 text-3xl font-light text-center"},"Our Partners"),r.a.createElement("div",{className:"w-full sm:w-1/2 sm:order-1 pl-2 pr-2"}," ",r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/MS_Startups_Celebration_Badge_Dark.png",width:"60%"})),r.a.createElement("div",{className:"w-full sm:w-1/2 sm:order-2  pl-2 pr-2"}," ",r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/berkeley-multi-color-on-blue.png",width:"80%"}))))),r.a.createElement("div",{className:"flex flex-col bg-dark mb-8"},"  ",r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center py-6 my-6 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-8 text-3xl font-light text-center text-black-100"},"How It Works"),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-1 pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," Step 1: Download Tags "),r.a.createElement("h3",null," Embed printed security on well known tags like QR or Barcode. Download security tags from Blocktag website."),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/mobile_ss/EmbedPrintedSecurity.png"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2  pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," Step 2: Print Tags "),r.a.createElement("h3",null," Print tags as stickers or direct on material surface using any printer from home inkjets to industrial printers. "),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/mobile_ss/AnyPrinter.png"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-3  pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," Step 3: Fingerprint Tags "),r.a.createElement("h3",null," Use phone or industrial camera to capture tag’s physical print signature as fingerprint."),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/mobile_ss/TagFingerprintedCrop2.jpeg"})),r.a.createElement("div",{className:"w-full text-center py-2 my-4"},r.a.createElement("a",{onClick:()=>{Object(g.a)("DownloadTagBody"),Object(h.a)("https://generate.blocktag.com"),window.lintrk("DownloadTagBody",{conversion_id:12784580})},class:"flex-grow inline-block px-8 py-2 my-4 mr-4 text-sm text-white bg-teal-500 border border-teal-500 rounded sm:my-0 hover:bg-teal-700 hover:border-teal-700"},"Download Tags Now"))),r.a.createElement("div",{className:"flex flex-wrap items-center pt-12 mt-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-16 text-3xl font-light text-center text-black-100"},"Mobile Authentication"),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-1  pl-2 pr-2 pt-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," "),r.a.createElement("h3",null," ")),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2  pl-2 pr-2 pt-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," Authentic Tagged Product "),r.a.createElement("h3",null," Scan fingerprinted tag with Blocktag app to detect original from cloned tags. No special scan hardware required. "),r.a.createElement("img",{className:"mx-auto",src:"/img/mobile_ss/AuthenticateDetectScreenCrop2.jpeg"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-3 pl-2 pr-2 pt-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center"}," "),r.a.createElement("h3",null," "))))),r.a.createElement("div",{className:"flex flex-col bg-blue-900"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center pt-12 mt-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-16 text-3xl font-light text-center text-gray-100"},"Authentic Records"),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2"},r.a.createElement("img",{className:"mx-auto",src:b})),r.a.createElement("div",{className:"w-full px-12 text-center text-gray-100 sm:pb-8 lg:pl-24 sm:pl-0 md:pr-12 sm:pr-4 sm:text-right sm:w-1/3 sm:order-1"},E.slice(0,E.length/2).map((e,t)=>r.a.createElement("div",{key:"consumer_"+t,className:"h-32 my-8 sm:h-40"},r.a.createElement(u.a,{icon:e.icon,className:"mb-4 text-3xl text-teal-500"}),r.a.createElement("h3",{className:"text-base font-base"},e.heading),r.a.createElement("p",{className:"text-sm"},e.description)))),r.a.createElement("div",{className:"w-full px-12 pb-8 text-center text-gray-100 lg:pr-24 sm:pr-0 md:pl-12 sm:pl-4 sm:text-left sm:w-1/3 sm:order-3"},E.slice(E.length/2,E.length).map((e,t)=>r.a.createElement("div",{key:"consumer_"+(3+t),className:"h-32 my-8 sm:h-40"},r.a.createElement(u.a,{icon:e.icon,className:"mb-4 text-3xl text-teal-500"}),r.a.createElement("h3",{className:"text-base font-base"},e.heading),r.a.createElement("p",{className:"text-sm"},e.description))))))),r.a.createElement("div",{className:"flex flex-col text-white bg-blue-900"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"w-full my-6 mt-24 text-4xl font-light text-center"},"Get in Touch"),r.a.createElement("div",{className:"w-full my-6 text-xl font-light text-center whitespace-pre-line"},r.a.createElement("a",{href:"mailto:"+c.a.email},c.a.email),"\n",r.a.createElement("a",{href:"tel:+"+c.a.phone.replace(/\D/g,"")},c.a.phone)),r.a.createElement("div",{className:"flex flex-wrap items-stretch py-12 my-12 overflow-hidden text-left"},r.a.createElement("div",{className:"flex flex-1 w-full md:px-8 sm:w-1/2"},r.a.createElement("iframe",{className:"w-full h-full border-none",frameBorder:"0",src:"https://www.google.com/maps/embed/v1/place?q=place_id:"+c.a.mapPlaceId+"&key="+c.a.googleCloudApiKey,allowFullScreen:!0})),r.a.createElement("div",{className:"w-full px-8 sm:w-1/2"},r.a.createElement(i.a,null))))))},b=a("Zttt");t.default=e=>{let{data:t}=e;const{frontmatter:a}=t.markdownRemark;return r.a.createElement(b.a,{includePreFooter:!0},r.a.createElement(E,{title:a.title,meta_title:a.meta_title,meta_description:a.meta_description,heading:a.heading,description:a.description,features:a.features,carousel:a.carousel,usecases:a.usecases,datafeed:a.datafeed,consumerfeatures:a.consumerfeatures,consumerfeaturesimg:a.consumerfeaturesimg,enterprisefeatures:a.enterprisefeatures,cta:a.cta}))}}}]);
//# sourceMappingURL=component---src-templates-home-page-js-4a58fdc94a0aa7d1cdfc.js.map