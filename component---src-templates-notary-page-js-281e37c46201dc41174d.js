(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+71q":function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var l=a("q1tI"),n=a.n(l),r=a("KYPV"),s=a("UGp+");var i=s.a().shape({name:s.b().min(2,"Too Short!").max(50,"Too Long!").required("Name is Required!"),email:s.b().email("Enter a Valid Email!").required("Email is Required!")}),o=a("l2GQ");const m=()=>n.a.createElement(r.b,{initialValues:{name:"",email:""},validationSchema:i,onSubmit:(e,t)=>{let{setSubmitting:a}=t;window.location.href="mailto:hello@blocktag.com?subject=Inquiry from "+e.name+" ("+e.email+")&body=I am interested in learning more about Blocktag.",a(!1)},render:e=>{let{errors:t,touched:a,isSubmitting:l,handleSubmit:s,handleReset:i}=e;return n.a.createElement("form",{onSubmit:()=>{Object(o.a)("InquiryHome")},onReset:i,"data-netlify":"true","data-netlify-honeypot":"bot-field",className:"w-full my-24"},n.a.createElement("div",{className:"flex flex-wrap items-center py-2 border-teal-500 sm:border-b-2 sm:border-b sm:mx-24 sm:flex-no-wrap"},n.a.createElement(r.a,{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-none focus:outline-none",type:"text",placeholder:"Full Name",name:"name","aria-label":"Full name"}),n.a.createElement(r.a,{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-none focus:outline-none",type:"text",placeholder:"Email Address",name:"email","aria-label":"Email Address"}),n.a.createElement("button",{className:"flex-grow px-8 py-1 my-4 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded sm:my-0 hover:bg-teal-700 hover:border-teal-700",type:"submit",disabled:l},"Inquire")))}})},"4aTW":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a("q1tI"),n=a.n(l),r=a("IP2g"),s=a("wHSu");class i extends l.Component{constructor(e){super(e),this.state={activeEl:0},this.onLeft=this.onLeft.bind(this),this.onRight=this.onRight.bind(this)}onLeft(){this.setState({activeEl:Math.max(0,this.state.activeEl-1)})}onRight(){this.setState({activeEl:Math.min(this.props.data.length-1,this.state.activeEl+1)})}render(){const{activeEl:e}=this.state,t=this.props.data,a=this.props.data[e];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"flex items-center w-full md:w-1/2"},n.a.createElement(r.a,{icon:s.e,className:(0===e?"text-gray-400":"text-teal-500 hover:text-teal-600")+" text-2xl lg:text-3xl m-4 lg:m-16 flex-shrink transition ease-out duration-500",onClick:this.onLeft}),n.a.createElement("div",{className:"relative flex-grow",style:{paddingBottom:"100%"}},n.a.createElement("img",{className:"absolute object-scale-down w-full h-full",src:a.img})),n.a.createElement(r.a,{icon:s.f,className:(e===t.length-1?"text-gray-400":"text-teal-500 hover:text-teal-600")+" text-2xl lg:text-3xl m-4 lg:m-16 flex-shrink transition ease-out duration-500",onClick:this.onRight})),n.a.createElement("div",{className:"w-full p-4 lg:p-12 md:w-1/2"},n.a.createElement("h2",{className:"mb-4 text-2xl"},a.title),n.a.createElement("ul",{className:"mb-4 overflow-y-auto font-light whitespace-pre-wrap",style:{height:"20rem"}},a.info.map((e,t)=>n.a.createElement("li",{key:"info_"+t},e)),a.origin?n.a.createElement("br",null):"",a.origin,a.certs?n.a.createElement("br",null):"",a.certs)))}}i.defaultProps={defaultDescription:"asdfasdf default description",data:[]}},Y5i1:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=(a("Wbzz"),a("TJpk")),s=a.n(r),i=a("obyI"),o=a.n(i),m=a("PrUk"),c=a("+71q"),p=(a("m13s"),a("4aTW")),d=(a("IP2g"),a("7O5W")),u=a("wHSu"),g=a("l2GQ"),f=a("okPO");a("dEtu");d.b.add(u.j,u.g,u.l,u.c,u.d,u.a,u.e,u.f,u.b,u.k,u.h,u.n,u.i,u.m);var h=e=>{let{heading:t,description:a,meta_title:l,meta_description:r,usecases:i,carousel:d,consumerfeatures:u,enterprisefeatures:h,features:x,cta:b}=e;return n.a.createElement("div",null,n.a.createElement(s.a,null,n.a.createElement("title",null,l),n.a.createElement("meta",{name:"description",content:r})),n.a.createElement("div",{className:"flex flex-col font-sans bg-indigo-800 bg-top bg-no-repeat bg-cover",style:{backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 90%), url("/img/notary/multi-party-notarisation.png")',marginTop:"-80px"}},n.a.createElement("div",{className:"container px-8 mx-auto"},n.a.createElement("main",{className:"flex flex-wrap items-center pt-48 text-center text-white lg:px-24"},n.a.createElement("div",{className:"w-full whitespace-pre-line md:w-full"},n.a.createElement("h1",{className:"text-4xl font-light tracking-tight lg:text-6xl"},"Remote Stamp Notarisation"),n.a.createElement("h4",{className:"my-4 text-base font-light text-gray-400"},n.a.createElement("ul",null,n.a.createElement("li",null,"Notary Public: Find new remote stamp notarisation clients"),n.a.createElement("li",null,"Clients: Simplify notarisation with printed notary stamp"),n.a.createElement("li",null,"Organisations: Cost efficient doc authentication with phone camera "))),n.a.createElement(c.a,null))),n.a.createElement("hr",{className:"border-gray-700"}),n.a.createElement("div",{className:"flex flex-wrap pb-12 mt-8 overflow-hidden text-center text-gray-500"}),n.a.createElement("a",{onClick:()=>{Object(g.a)("DownloadAppFromWebNotary"),Object(f.a)("https://apps.apple.com/us/app/blocktag/id1478833776")}},n.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",style:{width:"200px"}}),n.a.createElement("br",null)))),n.a.createElement("div",{id:"products",className:"flex flex-col bg-white",style:{backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,1) 50%, #f2f2f2 100%), url("/img/earth.jpg")'}},n.a.createElement("div",{className:"container px-8 mx-auto"})),n.a.createElement("div",{className:"flex flex-col bg-white"},"  ",n.a.createElement("div",{className:"container px-8 mx-auto"},n.a.createElement("div",{className:"flex flex-wrap items-center my-12 overflow-hidden text-left"},n.a.createElement("div",{className:"w-full text-3xl text-center"},"Solution"),n.a.createElement(p.a,{data:[{img:"/img/notary/remote-stamp-notarisation.jpeg",title:"Print Notary Stamp With Printer",info:["Instead of in-person physical stamp,"," print unclonable stamp with home or office printer and notarize remotely"],origin:null,certs:null,eventfeed:null},{img:"/img/samples/BlocktagOriginalPaper.jpg",title:"Simplified Notarisation Process",info:["Printed stamp is paper doc’s fingerprint. Similar to physical stamp, seal, signature.","Replace in person notarisation."],origin:null,certs:null,eventfeed:null},{img:"/img/samples/BlocktagOriginalPaper.jpg",title:"Verify Notarized Docs and Identities With Phone Camera",info:["Organization requesting notarization can scan printed stamp on doc to verify original doc and identities","of client, notary and other parties."],origin:null,certs:null,eventfeed:null}]}))),n.a.createElement("div",{className:"w-full text-center py-2 my-4"},n.a.createElement("a",{onClick:()=>{Object(g.a)("DownloadTagBody"),Object(f.a)("https://generate.blocktag.com")},class:"flex-grow inline-block px-8 py-2 my-4 mr-4 text-sm text-white bg-teal-500 border border-teal-500 rounded sm:my-0 hover:bg-teal-700 hover:border-teal-700"},"Download Tags Now"))),n.a.createElement("div",{className:"flex flex-col bg-dark mb-8"},"  ",n.a.createElement("div",{className:"container px-8 mx-auto"},n.a.createElement("div",{className:"flex flex-wrap items-center overflow-hidden text-left"},n.a.createElement("div",{className:"w-full mb-8 text-3xl font-light text-center text-black-100"},"How It Works"),n.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-1 pl-2 pr-2"},n.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center font-weight-bold"},"1.Notary Uploads Stamp Image "),n.a.createElement("h3",null,"Notary Public registers on Blocktag website and uploads image of their notary stamp."),n.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",style:{padding:40},src:"/img/notary/physical-notary-stamp.png"})),n.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2  pl-2 pr-2"},n.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center font-weight-bold"},"2.Client Downloads Stamp QR "),n.a.createElement("h3",null," Client searches for a Blocktag registered Notary Public. Downloads notary’s stamp as secure QR "),n.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",style:{padding:0},src:"/img/notary/virtual-notary-stamp.png"})),n.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-3  pl-2 pr-2"},n.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center font-weight-bold"},"3.Client Prints Stamp QR"),n.a.createElement("h3",null,"Client prints stamp QR on notarisation docs using home printer."),n.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",style:{padding:40},src:"/img/notary/inkjet-printer.jpeg"}))),n.a.createElement("div",{className:"flex flex-wrap items-center overflow-hidden text-left"},n.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-1 pl-2 pr-2"},n.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center font-weight-bold"},"4.Client Fingerprints Stamp"),n.a.createElement("h3",null,"During video call with Notary, Client use phone camera to capture photo of printed stamp as fingerprint."),n.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",style:{padding:40},src:"/img/notary/notary-stamp-fingerprint.png"})),n.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2  pl-2 pr-2"},n.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center font-weight-bold"},"5.Notary Activates Stamp "),n.a.createElement("h3",null," Blocktag app informs Notary that his stamp is printed by Client. Notary must approve to activate stamp QR. "),n.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",style:{padding:40},src:"/img/notary/notary-public-remote-meeting.png"})),n.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-3  pl-2 pr-2"},n.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center font-weight-bold"},"6.Organisation Authenticates Stamp"),n.a.createElement("h3",null,"Organization uses Blocktag app to authenticate stamp on docs mailed by Client. Client’s identity can be verified with camera Face ID."),n.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",style:{padding:40},src:"/img/notary/notary-authentication-success.png"}))))),n.a.createElement("div",{className:"flex flex-col bg-gray-100"},n.a.createElement("div",{className:"container px-8 mx-auto"},n.a.createElement("div",{className:"flex flex-wrap items-start py-12 my-12 overflow-hidden text-left"},n.a.createElement("div",{className:"w-full mb-12 text-3xl font-light text-center"},"Our Partners"),n.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-1 pl-2 pr-2"}),n.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2  pl-2 pr-2"},n.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/berkeley-multi-color-on-blue.png"})),n.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-3  pl-2 pr-2"})))),n.a.createElement("div",{className:"flex flex-col text-white bg-blue-900"},n.a.createElement("div",{className:"container px-8 mx-auto"},n.a.createElement("div",{className:"w-full my-6 mt-24 text-4xl font-light text-center"},"Get in Touch"),n.a.createElement("div",{className:"w-full my-6 text-xl font-light text-center whitespace-pre-line"},n.a.createElement("a",{href:"mailto:"+o.a.email},o.a.email),"\n",n.a.createElement("a",{href:"tel:+"+o.a.phone.replace(/\D/g,"")},o.a.phone)),n.a.createElement("div",{className:"flex flex-wrap items-stretch py-12 my-12 overflow-hidden text-left"},n.a.createElement("div",{className:"flex flex-1 w-full md:px-8 sm:w-1/2"},n.a.createElement("iframe",{className:"w-full h-full border-none",frameBorder:"0",src:"https://www.google.com/maps/embed/v1/place?q=place_id:"+o.a.mapPlaceId+"&key="+o.a.googleCloudApiKey,allowFullScreen:!0})),n.a.createElement("div",{className:"w-full px-8 sm:w-1/2"},n.a.createElement(m.a,null))))))},x=a("Zttt");t.default=()=>n.a.createElement(x.a,{includePreFooter:!0},n.a.createElement(h,null))},m13s:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var l=a("q1tI"),n=a.n(l);class r extends l.Component{constructor(e){super(e),this.state={activeEl:null},this.onMouseEnter=this.onMouseEnter.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this)}onMouseEnter(e){return t=>{this.setState({activeEl:e})}}onMouseLeave(e){this.setState({activeEl:null})}render(){const{activeEl:e}=this.state,t=this.props.data;return n.a.createElement("div",null,n.a.createElement("div",{className:"flex flex-wrap items-end py-12"},this.props.data.map((t,a)=>n.a.createElement("div",{key:"carousel_"+a,className:(null!==e?"hover:opacity-100 opacity-50":"pt-4 first:opacity-50 last:opacity-50")+" w-1/3 text-center transition ease-out duration-700 transform hover:scale-125",onMouseEnter:this.onMouseEnter(a),onMouseLeave:this.onMouseLeave},n.a.createElement("img",{className:"inline",style:{maxWidth:"60%",maxHeight:"300px"},src:t.img})))),n.a.createElement("div",{className:"justify-center w-full my-12 text-sm text-center"},n.a.createElement("div",{className:"max-w-lg mx-auto",style:{height:"4rem"}},null!==e?n.a.createElement("span",{dangerouslySetInnerHTML:{__html:t[e].description}}):n.a.createElement("span",null,this.props.defaultDescription))))}}r.defaultProps={defaultDescription:n.a.createElement("p",null,"Download and print Blocktag tags using multiple print techniques and materials. Custom configurations welcome.",n.a.createElement("span",{className:"block italic text-gray-500"},"< Hover on tags for info >")),data:[]}}}]);
//# sourceMappingURL=component---src-templates-notary-page-js-281e37c46201dc41174d.js.map