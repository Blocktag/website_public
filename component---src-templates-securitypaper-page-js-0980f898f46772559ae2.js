(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"4aTW":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a("q1tI"),r=a.n(l),n=a("IP2g"),s=a("wHSu");class i extends l.Component{constructor(e){super(e),this.state={activeEl:0},this.onLeft=this.onLeft.bind(this),this.onRight=this.onRight.bind(this)}onLeft(){this.setState({activeEl:Math.max(0,this.state.activeEl-1)})}onRight(){this.setState({activeEl:Math.min(this.props.data.length-1,this.state.activeEl+1)})}componentDidMount(){console.log("componentDidMount"),this.movement=1,this.interval=setInterval(()=>{0==this.state.activeEl?(this.movement=1,this.setState({activeEl:this.state.activeEl+this.movement})):this.state.activeEl==this.props.data.length-1?(this.movement=-1,this.setState({activeEl:this.state.activeEl+this.movement})):this.setState({activeEl:this.state.activeEl+this.movement}),console.log("Logs every minute: ",this.movement)},1e4)}componentWillUnmount(){clearInterval(this.interval)}render(){const{activeEl:e}=this.state,t=this.props.data,a=this.props.data[e];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex items-center w-full md:w-1/2"},r.a.createElement(n.a,{icon:s.e,className:(0===e?"text-gray-400":"text-teal-500 hover:text-teal-600")+" text-2xl lg:text-3xl m-4 lg:m-16 flex-shrink transition ease-out duration-500",onClick:this.onLeft}),r.a.createElement("div",{className:"relative flex-grow",style:{paddingBottom:"100%"}},r.a.createElement("img",{className:"absolute object-scale-down w-full h-full",src:a.img})),r.a.createElement(n.a,{icon:s.f,className:(e===t.length-1?"text-gray-400":"text-teal-500 hover:text-teal-600")+" text-2xl lg:text-3xl m-4 lg:m-16 flex-shrink transition ease-out duration-500",onClick:this.onRight})),r.a.createElement("div",{className:"w-full p-4 lg:p-12 md:w-1/2"},r.a.createElement("h2",{className:"mb-4 text-2xl"},a.title),r.a.createElement("ul",{className:"mb-4 overflow-y-auto font-light whitespace-pre-wrap",style:{height:"20rem"}},a.info.map((e,t)=>r.a.createElement("li",{key:"info_"+t},e)),a.origin?r.a.createElement("br",null):"",a.origin,a.certs?r.a.createElement("br",null):"",a.certs)))}}i.defaultProps={defaultDescription:"asdfasdf default description",data:[]}},m13s:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var l=a("q1tI"),r=a.n(l);class n extends l.Component{constructor(e){super(e),this.state={activeEl:null},this.onMouseEnter=this.onMouseEnter.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this)}onMouseEnter(e){return t=>{this.setState({activeEl:e})}}onMouseLeave(e){this.setState({activeEl:null})}render(){const{activeEl:e}=this.state,t=this.props.data;return r.a.createElement("div",null,r.a.createElement("div",{className:"flex flex-wrap items-end py-12"},this.props.data.map((t,a)=>r.a.createElement("div",{key:"carousel_"+a,className:(null!==e?"hover:opacity-100 opacity-50":"pt-4 first:opacity-50 last:opacity-50")+" w-1/3 text-center transition ease-out duration-700 transform hover:scale-125",onMouseEnter:this.onMouseEnter(a),onMouseLeave:this.onMouseLeave},r.a.createElement("img",{className:"inline",style:{maxWidth:"60%",maxHeight:"300px"},src:t.img})))),r.a.createElement("div",{className:"justify-center w-full my-12 text-sm text-center"},r.a.createElement("div",{className:"max-w-lg mx-auto",style:{height:"4rem"}},null!==e?r.a.createElement("span",{dangerouslySetInnerHTML:{__html:t[e].description}}):r.a.createElement("span",null,this.props.defaultDescription))))}}n.defaultProps={defaultDescription:r.a.createElement("p",null,"Download and print Blocktag tags using multiple print techniques, materials and form factors like barcode, QR, Augmented Reality (AR) markers. Custom configurations welcome.",r.a.createElement("span",{className:"block italic text-gray-500"},"< Hover on tags for info >")),data:[]}},yX6X:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),r=a.n(l),n=(a("Wbzz"),a("TJpk")),s=a.n(n),i=a("obyI"),o=a.n(i),m=a("PrUk"),c=a("yhIR"),p=(a("m13s"),a("4aTW")),d=(a("IP2g"),a("7O5W")),u=a("wHSu"),g=a("l2GQ"),f=a("okPO"),h=(a("dEtu"),a("zCIG"));d.b.add(u.j,u.g,u.l,u.c,u.d,u.a,u.e,u.f,u.b,u.k,u.h,u.n,u.i,u.m);var x=e=>{let{heading:t,description:a,meta_title:l,meta_description:n,usecases:i,carousel:d,consumerfeatures:u,enterprisefeatures:x,features:b,cta:E}=e;return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement("title",null,l),r.a.createElement("meta",{name:"description",content:n})),r.a.createElement("div",{className:"flex flex-col font-sans bg-indigo-800 bg-top bg-no-repeat bg-cover",style:{backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 90%), url("/img/secureqr/printable_secure_qr.JPG")',marginTop:"-80px"}},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("main",{className:"flex flex-wrap items-center pt-48 text-center text-white lg:px-24"},r.a.createElement(h.b,null,r.a.createElement("div",{className:"w-full whitespace-pre-line md:w-full"},r.a.createElement("h1",{className:"text-4xl font-light tracking-tight lg:text-6xl"},"Printable Security Documents"),r.a.createElement("h4",{className:"my-4 text-base font-light text-gray-400"},r.a.createElement("ul",null,r.a.createElement("li",null,"Download and print paper security tag"),r.a.createElement("li",null,"Detect photocopy with phone camera app"),r.a.createElement("li",null,"Authenticate without travel, mail or meet in person"))),r.a.createElement(c.a,null)))),r.a.createElement("hr",{className:"border-gray-700"}),r.a.createElement("div",{className:"flex flex-wrap pb-12 mt-8 overflow-hidden text-center text-gray-500"}),r.a.createElement("a",{onClick:()=>{Object(g.a)("DownloadAppFromWebNotary"),Object(f.a)("https://apps.apple.com/us/app/blocktag/id1478833776")}},r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",style:{width:"200px"}}),r.a.createElement("br",null)))),r.a.createElement("div",{id:"products",className:"flex flex-col bg-white",style:{backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,1) 50%, #f2f2f2 100%), url("/img/earth.jpg")'}},r.a.createElement("div",{className:"container px-8 mx-auto"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"flex flex-col bg-dark mb-8"},"  ",r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-8 text-3xl font-light text-center text-black-100"},"How It Works"),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-1 pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center font-weight-bold"},"1.Download QR"),r.a.createElement("h3",null,"Download digital QR embedded with printable security from Blocktag website"),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",style:{padding:40},src:"/img/secureqr/virtual-secureqr.png"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-2  pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center font-weight-bold"},"2.Print QR "),r.a.createElement("h3",null," Print digital QR on materials like paper, stickers etc. using home printer "),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",style:{padding:40},src:"/img/notary/inkjet-printer.jpeg"})),r.a.createElement("div",{className:"w-full sm:w-1/3 sm:order-3  pl-2 pr-2"},r.a.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center font-weight-bold"},"3.Activate QR"),r.a.createElement("h3",null,"Capture photo of printed QR as fingerprint using Blocktag app."),r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",style:{padding:40},src:"/img/notary/notary-stamp-fingerprint.png"}))))),r.a.createElement("div",{className:"flex flex-col bg-white"},"  ",r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-center my-12 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full text-3xl text-center"},"Use Cases"),r.a.createElement(p.a,{data:[{img:"/img/samples/BlocktagOriginalPaper.jpg",title:"Certify Original Documents",info:["Printed QR is paper doc’s unclonable fingerprint. Similar to physical stamp, seal, signature."],origin:null,certs:null,eventfeed:null},{img:"/img/securitypaper/notary_stamp.jpeg",title:"Replace Notary Seals",info:["Save time from office travel/mail and stamp many paper documents by printing stamp with Blocktag QR on paper document."],origin:null,certs:null,eventfeed:null},{img:" /img/securitypaper/notary_seal.jpeg",title:"Replace Company Stamp",info:["Create and send digital seal to signers for remote print and ink-sign. "," Print and activate stamped document with phone camera.","Scan printed stamp on doc to authenticate doc and verify client identities."],origin:null,certs:null,eventfeed:null},{img:"/img/securitypaper/hologram_paper.png",title:"Replace Anti Counterfeit Tags",info:["Replace costly anticounterfeit hardware (e.g. Hologram, Polymer) with AI software. AI Deepfake predicts how photocopied, reprinted tags look like."],origin:null,certs:null,eventfeed:null}]}))),r.a.createElement("div",{className:"w-full text-center py-2 my-4"},r.a.createElement("a",{onClick:()=>{Object(g.a)("DownloadTagBody"),Object(f.a)("https://generate.blocktag.com")},class:"flex-grow inline-block px-8 py-2 my-4 mr-4 text-sm text-white bg-teal-500 border border-teal-500 rounded sm:my-0 hover:bg-teal-700 hover:border-teal-700"},"Download QR Now"))),r.a.createElement("div",{className:"flex flex-col bg-gray-100"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-start py-6 my-6 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-12 text-3xl font-light text-center"},"Awards"),r.a.createElement("div",{className:"w-full sm:w-1/2 sm:order-1 pl-4 pr-4 pt-4 pb-4"}," ",r.a.createElement("a",{href:"https://www.agorize.com/en/challenges/ricoh-2023/pages/final-results"},r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",width:"90%",src:"/img/awards/ricoh_finalist.png"}))),r.a.createElement("div",{className:"w-full sm:w-1/2 sm:order-1 pl-4 pr-4 pt-4 pb-4"}," ",r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/awards/Meet_The_Drapers.png",width:"70%"}))))),r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"flex flex-wrap items-start py-6 my-6 overflow-hidden text-left"},r.a.createElement("div",{className:"w-full mb-12 text-3xl font-light text-center"},"Our Partners"),r.a.createElement("div",{className:"w-full sm:w-1/2 sm:order-1 pl-4 pr-4 pt-4 pb-4"}," ",r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/MS_Startups_Celebration_Badge_Dark.png",width:"60%"})),r.a.createElement("div",{className:"w-full sm:w-1/2 sm:order-2 pl-4 pr-4 pt-4 pb-4"}," ",r.a.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/berkeley-multi-color-on-blue.png",width:"80%"}))))),r.a.createElement("div",{className:"flex flex-col text-white bg-blue-900"},r.a.createElement("div",{className:"container px-8 mx-auto"},r.a.createElement("div",{className:"w-full my-6 mt-24 text-4xl font-light text-center"},"Get in Touch"),r.a.createElement("div",{className:"w-full my-6 text-xl font-light text-center whitespace-pre-line"},r.a.createElement("a",{href:"mailto:"+o.a.email},o.a.email),"\n",r.a.createElement("a",{href:"tel:+"+o.a.phone.replace(/\D/g,"")},o.a.phone)),r.a.createElement("div",{className:"flex flex-wrap items-stretch py-12 my-12 overflow-hidden text-left"},r.a.createElement("div",{className:"flex flex-1 w-full md:px-8 sm:w-1/2"},r.a.createElement("iframe",{className:"w-full h-full border-none",frameBorder:"0",src:"https://www.google.com/maps/embed/v1/place?q=place_id:"+o.a.mapPlaceId+"&key="+o.a.googleCloudApiKey,allowFullScreen:!0})),r.a.createElement("div",{className:"w-full px-8 sm:w-1/2"},r.a.createElement(m.a,null))))))},b=a("Zttt");t.default=()=>r.a.createElement(b.a,{includePreFooter:!0},r.a.createElement(x,null))},yhIR:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var l=a("KQm4"),r=a("q1tI"),n=a.n(r),s=a("zCIG"),i=a("v4IS"),o=a("r67B"),m=a("okPO");const c=()=>{const{SignIn:e,SignUp:t}=Object(r.useContext)(s.a),[a,c]=t,{0:p,1:d}=Object(r.useState)(""),{0:u,1:g}=Object(r.useState)(!0),{0:f,1:h}=Object(r.useState)(""),{currentUser:x}=Object(o.a)(),{0:b,1:E}=Object(r.useState)([{name:"",password:"",passwordconfirm:"",email:"",phone:"",confirmcode:""}]),v=(e,t)=>{let a=Object(l.a)(b);a[e][t.target.name]=t.target.value,E(a)};return null!==x?n.a.createElement("button",{type:"button",className:"px-8 py-1 my-4 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded hover:bg-teal-700 hover:border-teal-700",onClick:()=>{Object(m.a)("/dashboard")}},"Go To Dashboard"):n.a.createElement("div",{className:"login-form mx-16 px-16"},n.a.createElement("div",{className:"form-box solid mx-12 px-10"},n.a.createElement("form",null,b.map((e,t)=>n.a.createElement("div",{className:"items-center py-2 border-teal-500",key:t},n.a.createElement("div",{className:"text-teal-200"},n.a.createElement("label",{htmlFor:"Email",className:"block text-sm font-semibold text-teal-200 text-left"},"Email:"),n.a.createElement("input",{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-b focus:outline-none",type:"email",name:"email",value:e.email,onChange:e=>v(t,e)})),n.a.createElement("br",null),n.a.createElement("div",{className:"text-teal-200"},n.a.createElement("label",{htmlFor:"Password",className:"block text-sm font-semibold text-teal-200 text-left"},"Password:"),n.a.createElement("input",{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-b focus:outline-none",type:"password",name:"password",value:e.password,onChange:e=>v(t,e)})),n.a.createElement("br",null),n.a.createElement("div",{className:"text-teal-200"},n.a.createElement("label",{htmlFor:"PasswordConfirm",className:"block text-sm font-semibold text-teal-200 text-left"},"Confirm Password:"),n.a.createElement("input",{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-b focus:outline-none",type:"password",name:"confirm_password",value:e.passwordconfirm,onChange:e=>v(t,e)})),n.a.createElement("br",null),n.a.createElement("input",{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-b focus:outline-none",type:"confirmcode",name:"confirmcode",placeholder:"Confirm Code",value:e.confirmcode,onChange:e=>v(t,e),hidden:u}),n.a.createElement("br",null))),n.a.createElement("div",{className:"px-4 py-3 bg-gray-50 sm:px-6"},n.a.createElement("div",null,f),n.a.createElement("button",{type:"button",className:"px-8 py-1 my-4 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded hover:bg-teal-700 hover:border-teal-700",onClick:()=>{u?(!async function(e,t,a,l,r){try{const{user:a}=await i.a.signUp({username:e,password:t,attributes:{email:l},autoSignIn:{enabled:!0}});g(!1),c(!0),d(""),h("Check verfication code in email"),console.log(a)}catch(s){console.log("Error signing up:",s),d(n.a.createElement("font",{color:"red"}," ",s.message," ")),c(!0)}}(b[0].email,b[0].password,b[0].passwordconfirm,b[0].email,b[0].phone),window.lintrk("track",{conversion_id:12804444})):(!async function(e,t){try{await i.a.confirmSignUp(e,t)}catch(a){d(n.a.createElement("font",{color:"red"}," ",a.message," ")),console.log("error confirming sign up",a)}}(b[0].email,b[0].confirmcode),window.lintrk("track",{conversion_id:12804444}))}},u?"Sign Up":"Confirm"),n.a.createElement("div",null,p)))))}}}]);
//# sourceMappingURL=component---src-templates-securitypaper-page-js-0980f898f46772559ae2.js.map