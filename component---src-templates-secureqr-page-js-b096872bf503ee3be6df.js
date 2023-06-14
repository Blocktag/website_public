(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+71q":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var l=a("q1tI"),r=a.n(l),n=a("KYPV"),s=a("UGp+");var i=s.a().shape({name:s.b().min(2,"Too Short!").max(50,"Too Long!").required("Name is Required!"),email:s.b().email("Enter a Valid Email!").required("Email is Required!")}),c=a("l2GQ");const o=()=>r.a.createElement(n.b,{initialValues:{name:"",email:""},validationSchema:i,onSubmit:(e,t)=>{let{setSubmitting:a}=t;window.location.href="mailto:hello@blocktag.com?subject=Inquiry from "+e.name+" ("+e.email+")&body=I am interested in learning more about Blocktag.",a(!1)},render:e=>{let{errors:t,touched:a,isSubmitting:l,handleSubmit:s,handleReset:i}=e;return r.a.createElement("form",{onSubmit:()=>{Object(c.a)("InquiryHome")},onReset:i,"data-netlify":"true","data-netlify-honeypot":"bot-field",className:"w-full my-24"},r.a.createElement("div",{className:"flex flex-wrap items-center py-2 border-teal-500 sm:border-b-2 sm:border-b sm:mx-24 sm:flex-no-wrap"},r.a.createElement(n.a,{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-none focus:outline-none",type:"text",placeholder:"Full Name",name:"name","aria-label":"Full name"}),r.a.createElement(n.a,{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-none focus:outline-none",type:"text",placeholder:"Email Address",name:"email","aria-label":"Email Address"}),r.a.createElement("button",{className:"flex-grow px-8 py-1 my-4 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded sm:my-0 hover:bg-teal-700 hover:border-teal-700",type:"submit",disabled:l},"Inquire")))}})},"4aTW":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a("q1tI"),r=a.n(l),n=a("IP2g"),s=a("wHSu");class i extends l.Component{constructor(e){super(e),this.state={activeEl:0},this.onLeft=this.onLeft.bind(this),this.onRight=this.onRight.bind(this)}onLeft(){this.setState({activeEl:Math.max(0,this.state.activeEl-1)})}onRight(){this.setState({activeEl:Math.min(this.props.data.length-1,this.state.activeEl+1)})}render(){const{activeEl:e}=this.state,t=this.props.data,a=this.props.data[e];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex items-center w-full md:w-1/2"},r.a.createElement(n.a,{icon:s.e,className:(0===e?"text-gray-400":"text-teal-500 hover:text-teal-600")+" text-2xl lg:text-3xl m-4 lg:m-16 flex-shrink transition ease-out duration-500",onClick:this.onLeft}),r.a.createElement("div",{className:"relative flex-grow",style:{paddingBottom:"100%"}},r.a.createElement("img",{className:"absolute object-scale-down w-full h-full",src:a.img})),r.a.createElement(n.a,{icon:s.f,className:(e===t.length-1?"text-gray-400":"text-teal-500 hover:text-teal-600")+" text-2xl lg:text-3xl m-4 lg:m-16 flex-shrink transition ease-out duration-500",onClick:this.onRight})),r.a.createElement("div",{className:"w-full p-4 lg:p-12 md:w-1/2"},r.a.createElement("h2",{className:"mb-4 text-2xl"},a.title),r.a.createElement("ul",{className:"mb-4 overflow-y-auto font-light whitespace-pre-wrap",style:{height:"20rem"}},a.info.map((e,t)=>r.a.createElement("li",{key:"info_"+t},e)),a.origin?r.a.createElement("br",null):"",a.origin,a.certs?r.a.createElement("br",null):"",a.certs)))}}i.defaultProps={defaultDescription:"asdfasdf default description",data:[]}},L2cM:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),r=a.n(l),n=(a("Wbzz"),a("TJpk")),s=a.n(n),i=a("obyI"),c=a.n(i),o=a("PrUk"),m=a("+71q"),d=(a("m13s"),a("4aTW")),p=(a("IP2g"),a("7O5W")),u=a("wHSu"),g=a("l2GQ"),f=a("okPO");a("dEtu");p.b.add(u.j,u.g,u.l,u.c,u.d,u.a,u.e,u.f,u.b,u.k,u.h,u.n,u.i,u.m);var h=e=>{let{heading:t,description:a,meta_title:l,meta_description:n,usecases:i,carousel:p,consumerfeatures:u,enterprisefeatures:h,features:x,cta:b}=e;return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement("title",null,l),r.a.createElement("meta",{name:"description",content:n})),r.a.createElement("div",{className:"flex flex-col font-sans bg-indigo-800 bg-top bg-no-repeat bg-cover",style:{backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 90%), url("/img/secureqr/printable_secure_qr.JPG")',marginTop:"-80px"}},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("main",{className:"flex flex-wrap items-center pt-48 text-center text-white lg:px-24"},r.a.createElement("div",{className:"w-full whitespace-pre-line md:w-full"},r.a.createElement("h1",{className:"text-4xl font-light tracking-tight lg:text-6xl"},"Printable Secure QR"),r.a.createElement("h4",{className:"my-4 text-base font-light text-gray-400"},r.a.createElement("ul",null,r.a.createElement("li",null,"Download and print original QR on home printers"),r.a.createElement("li",null,"Detect QR photocopies with phone camera."),r.a.createElement("li",null,"Attach QR to physical things and digital records. "))),r.a.createElement(m.a,null))),r.a.createElement("hr",{className:"border-gray-700"}),r.a.createElement("div",{className:"flex flex-wrap pb-12 mt-8 overflow-hidden text-center text-gray-500"}),r.a.createElement("a",{onClick:()=>{Object(g.a)("DownloadAppFromWebNotary"),Object(f.a)("https://apps.apple.com/us/app/blocktag/id1478833776")}},r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",style:{width:"200px"}}),r.a.createElement("br",null)))),r.a.createElement("div",{id:"products",className:"flex flex-col bg-white",style:{backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,1) 50%, #f2f2f2 100%), url("/img/earth.jpg")'}},r.a.createElement("div",{className:"container px-8 mx-auto"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"flex flex-col bg-dark mb-8"},"  ",r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-8 text-3xl font-light text-center text-black-100"},"How It Works"),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-1 pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center font-weight-bold"},"1.Download QR"),r.a.createElement("h3",null,"Download digital QR embedded with printable security from Blocktag website"),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",style:{padding:40},src:"/img/secureqr/virtual-secureqr.png"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2  pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center font-weight-bold"},"2.Print QR "),r.a.createElement("h3",null," Print digital QR on materials like paper, stickers etc. using home printer "),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",style:{padding:40},src:"/img/notary/inkjet-printer.jpeg"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-3  pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center font-weight-bold"},"3.Activate QR"),r.a.createElement("h3",null,"Capture photo of printed QR as fingerprint using Blocktag app."),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",style:{padding:40},src:"/img/notary/notary-stamp-fingerprint.png"}))))),r.a.createElement("div",{className:"flex flex-col bg-white"},"  ",r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center my-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full text-3xl text-center"},"Use Cases"),r.a.createElement(d.a,{data:[{img:"/img/samples/BlocktagOriginalPaper.jpg",title:"Certify Original Documents",info:["Printed QR is paper doc’s unclonable fingerprint. Similar to physical stamp, seal, signature."],origin:null,certs:null,eventfeed:null},{img:"/img/secureqr/EmbedPrintedSecurity.png",title:"Upgrade Plain QR Security",info:["Add unclonable security on top of plain QR. Detect photocopies and reprints using phone camera."],origin:null,certs:null,eventfeed:null},{img:" /img/samples/BlocktagViolin3.jpg",title:"Physical Art",info:["Attach digital certificates of ownership. Track ownership transfers from original artist to subsequent buyers and sellers"," Anti-counterfeit protections. Scan and authenticate Blocktag tag on art to distinguish original art from counterfeits.","Authenticate other related data such as insurance and maintenance records."],origin:null,certs:null,eventfeed:null},{img:"/img/blog/AnticounterfeitTag.png",title:"Replace Anti Counterfeit Tags",info:["Replace costly anticounterfeit hardware (e.g. Hologram, Polymer) with AI software. AI Deepfake predicts how photocopied, reprinted tags look like."],origin:null,certs:null,eventfeed:null}]}))),r.a.createElement("div",{className:"w-full text-center py-2 my-4"},r.a.createElement("a",{onClick:()=>{Object(g.a)("DownloadTagBody"),Object(f.a)("https://generate.blocktag.com")},class:"flex-grow inline-block px-8 py-2 my-4 mr-4 text-sm text-white bg-teal-500 border border-teal-500 rounded sm:my-0 hover:bg-teal-700 hover:border-teal-700"},"Download QR Now"))),r.a.createElement("div",{className:"flex flex-col bg-gray-100"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-start py-6 my-6 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-12 text-3xl font-light text-center"},"Awards"),r.a.createElement("div",{className:"w-full sm:w-1/2 sm:order-1 pl-2 pr-2"}," ",r.a.createElement("a",{href:"https://www.agorize.com/en/challenges/ricoh-2023/pages/final-results"},r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",width:"90%",src:"/img/awards/ricoh_finalist.png"}))),r.a.createElement("div",{className:"w-full sm:w-1/2 sm:order-1 pl-2 pr-2"}," ",r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/awards/Meet_The_Drapers.png",width:"70%"}))))),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-start py-6 my-6 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-12 text-3xl font-light text-center"},"Our Partners"),r.a.createElement("div",{className:"w-full sm:w-1/2 sm:order-1 pl-2 pr-2"}," ",r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/MS_Startups_Celebration_Badge_Dark.png",width:"60%"})),r.a.createElement("div",{className:"w-full sm:w-1/2 sm:order-2  pl-2 pr-2"}," ",r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/berkeley-multi-color-on-blue.png",width:"80%"}))))),r.a.createElement("div",{className:"flex flex-col text-white bg-blue-900"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"w-full my-6 mt-24 text-4xl font-light text-center"},"Get in Touch"),r.a.createElement("div",{className:"w-full my-6 text-xl font-light text-center whitespace-pre-line"},r.a.createElement("a",{href:"mailto:"+c.a.email},c.a.email),"\n",r.a.createElement("a",{href:"tel:+"+c.a.phone.replace(/\D/g,"")},c.a.phone)),r.a.createElement("div",{className:"flex flex-wrap items-stretch py-12 my-12 overflow-hidden text-left"},r.a.createElement("div",{className:"flex flex-1 w-full md:px-8 sm:w-1/2"},r.a.createElement("iframe",{className:"w-full h-full border-none",frameBorder:"0",src:"https://www.google.com/maps/embed/v1/place?q=place_id:"+c.a.mapPlaceId+"&key="+c.a.googleCloudApiKey,allowFullScreen:!0})),r.a.createElement("div",{className:"w-full px-8 sm:w-1/2"},r.a.createElement(o.a,null))))))},x=a("Zttt");t.default=()=>r.a.createElement(x.a,{includePreFooter:!0},r.a.createElement(h,null))},m13s:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var l=a("q1tI"),r=a.n(l);class n extends l.Component{constructor(e){super(e),this.state={activeEl:null},this.onMouseEnter=this.onMouseEnter.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this)}onMouseEnter(e){return t=>{this.setState({activeEl:e})}}onMouseLeave(e){this.setState({activeEl:null})}render(){const{activeEl:e}=this.state,t=this.props.data;return r.a.createElement("div",null,r.a.createElement("div",{className:"flex flex-wrap items-end py-12"},this.props.data.map((t,a)=>r.a.createElement("div",{key:"carousel_"+a,className:(null!==e?"hover:opacity-100 opacity-50":"pt-4 first:opacity-50 last:opacity-50")+" w-1/3 text-center transition ease-out duration-700 transform hover:scale-125",onMouseEnter:this.onMouseEnter(a),onMouseLeave:this.onMouseLeave},r.a.createElement("img",{className:"inline",style:{maxWidth:"60%",maxHeight:"300px"},src:t.img})))),r.a.createElement("div",{className:"justify-center w-full my-12 text-sm text-center"},r.a.createElement("div",{className:"max-w-lg mx-auto",style:{height:"4rem"}},null!==e?r.a.createElement("span",{dangerouslySetInnerHTML:{__html:t[e].description}}):r.a.createElement("span",null,this.props.defaultDescription))))}}n.defaultProps={defaultDescription:r.a.createElement("p",null,"Download and print Blocktag tags using multiple print techniques, materials and form factors like barcode, QR, Augmented Reality (AR) markers. Custom configurations welcome.",r.a.createElement("span",{className:"block italic text-gray-500"},"< Hover on tags for info >")),data:[]}}}]);
//# sourceMappingURL=component---src-templates-secureqr-page-js-b096872bf503ee3be6df.js.map