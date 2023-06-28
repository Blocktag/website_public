"use strict";(self.webpackChunkBlocktag=self.webpackChunkBlocktag||[]).push([[511],{42394:function(e,t,a){a.d(t,{W:function(){return c}});var l=a(15785),r=a(67294),n=a(43821),m=a(31079),s=a(43213),o=a(49249);const c=()=>{const{SignIn:e,SignUp:t}=(0,r.useContext)(n._),[a,c]=t,{0:i,1:p}=(0,r.useState)(""),{0:d,1:g}=(0,r.useState)(!0),{0:u,1:f}=(0,r.useState)(""),{currentUser:x}=(0,s.Z)(),{0:b,1:w}=(0,r.useState)([{name:"",password:"",confirm_password:"",email:"",phone:"",confirmcode:""}]),h=(e,t)=>{let a=(0,l.Z)(b);a[e][t.target.name]=t.target.value,w(a)};return null!==x?r.createElement("button",{type:"button",className:"px-8 py-1 my-4 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded hover:bg-teal-700 hover:border-teal-700",onClick:()=>{(0,o.Z)("/dashboard")}},"Go To Dashboard"):r.createElement("div",{className:"login-form lg:mx-16 lg:px-16"},r.createElement("div",{className:"form-box solid lg:mx-12 lg:px-10"},r.createElement("form",null,b.map(((e,t)=>r.createElement("div",{className:"items-center py-2 border-teal-500",key:t},r.createElement("div",{className:"w-full text-teal-200"},r.createElement("label",{htmlFor:"Email",className:"block text-sm font-semibold text-teal-200 text-left"},"Email:"),r.createElement("input",{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-b focus:outline-none",type:"email",name:"email",value:e.email,onChange:e=>h(t,e)})),r.createElement("br",null),r.createElement("div",{className:"w-full text-teal-200"},r.createElement("label",{htmlFor:"Password",className:"block text-sm font-semibold text-teal-200 text-left"},"Password:"),r.createElement("input",{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-b focus:outline-none",type:"password",name:"password",value:e.password,onChange:e=>h(t,e)})),r.createElement("br",null),r.createElement("div",{className:"w-full text-teal-200"},r.createElement("label",{htmlFor:"confirm_password",className:"block text-sm font-semibold text-teal-200 text-left"},"Confirm Password:"),r.createElement("input",{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-b focus:outline-none",type:"password",name:"confirm_password",value:e.confirm_password,onChange:e=>h(t,e)})),r.createElement("br",null),r.createElement("input",{className:"w-full px-2 py-1 my-1 mr-3 text-gray-200 placeholder-teal-200 bg-transparent border-b border-b-2 border-teal-500 appearance-none sm:my-0 sm:leading-tight sm:border-b focus:outline-none",type:"confirmcode",name:"confirmcode",placeholder:"Confirm Code",value:e.confirmcode,onChange:e=>h(t,e),hidden:d}),r.createElement("br",null)))),r.createElement("div",{className:"px-4 py-3 bg-gray-50 sm:px-6"},r.createElement("div",null,u),r.createElement("button",{type:"button",className:"px-8 py-1 my-4 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded hover:bg-teal-700 hover:border-teal-700",onClick:()=>{d?(!async function(e,t,a,l,n){try{if(t!=a)return console.log("Passwords dont match. Please try again."),p(r.createElement("font",{color:"red"}," ","Passwords dont match. Please try again."," ")),void c(!0);const{user:n}=await m.g.signUp({username:e,password:t,attributes:{email:l},autoSignIn:{enabled:!0}});g(!1),c(!0),p(""),f("Check verfication code in email"),console.log(n)}catch(s){console.log("Error signing up:",s),p(r.createElement("font",{color:"red"}," ",s.message," ")),c(!0)}}(b[0].email,b[0].password,b[0].confirm_password,b[0].email,b[0].phone),window.lintrk("track",{conversion_id:12804444})):(!async function(e,t){try{await m.g.confirmSignUp(e,t)}catch(a){p(r.createElement("font",{color:"red"}," ",a.message," ")),console.log("error confirming sign up",a)}}(b[0].email,b[0].confirmcode),window.lintrk("track",{conversion_id:12804444}))}},d?"Sign Up":"Confirm"),r.createElement("div",null,i)))))}},28176:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var l=a(67294),r=a(7701),n=a(11349),m=a.n(n),s=a(5750),o=a(42394),c=a(22793),i=a(94694),p=a(88014),d=a(74537),g=a(49249),u=a(43821);i.vI.add(p.nNP,p.otv,p.U7t,p.Stf,p.f8k,p.FR9,p.A35,p._tD,p.DYF,p.bJI,p.neB,p.$Aj,p.DD4,p.X5K);var f=e=>{let{heading:t,description:a,meta_title:n,meta_description:i,usecases:p,carousel:f,consumerfeatures:x,enterprisefeatures:b,features:w,cta:h}=e;return l.createElement("div",null,l.createElement(r.ZP,null,l.createElement("title",null,n),l.createElement("meta",{name:"description",content:i})),l.createElement("div",{className:"flex flex-col font-sans bg-indigo-800 bg-top bg-no-repeat bg-cover",style:{backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,0) 30%, rgba(0,0,0,1) 90%), url("/img/secureqr/printable_secure_qr.JPG")',marginTop:"-80px"}},l.createElement("div",{className:"container px-8 mx-auto"},l.createElement("main",{className:"flex flex-wrap items-center pt-48 text-center text-white lg:px-24"},l.createElement(u.H,null,l.createElement("div",{className:"w-full whitespace-pre-line md:w-full"},l.createElement("h1",{className:"text-4xl font-light tracking-tight lg:text-6xl"},"Printable Security Documents"),l.createElement("h4",{className:"my-4 text-base font-light text-gray-400"},l.createElement("ul",null,l.createElement("li",null,"Download and print paper security tag"),l.createElement("li",null,"Detect photocopy with phone camera app"),l.createElement("li",null,"Authenticate without travel, mail or meet in person"))),l.createElement(o.W,null)))),l.createElement("hr",{className:"border-gray-700"}),l.createElement("div",{className:"flex flex-wrap pb-12 mt-8 overflow-hidden text-center text-gray-500"}),l.createElement("a",{onClick:()=>{(0,d.Z)("DownloadAppFromWebNotary"),(0,g.Z)("https://apps.apple.com/us/app/blocktag/id1478833776")}},l.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",style:{width:"200px"}}),l.createElement("br",null)))),l.createElement("div",{id:"products",className:"flex flex-col bg-white",style:{backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,1) 50%, #f2f2f2 100%), url("/img/earth.jpg")'}},l.createElement("div",{className:"container px-8 mx-auto"})),l.createElement("br",null),l.createElement("br",null),l.createElement("div",{className:"flex flex-col bg-dark mb-8"},"  ",l.createElement("div",{className:"container px-8 mx-auto"},l.createElement("div",{className:"flex flex-wrap items-center overflow-hidden text-left"},l.createElement("div",{className:"w-full mb-8 text-3xl font-light text-center text-black-100"},"How It Works"),l.createElement("div",{className:"w-full sm:w-1/3 sm:order-1 pl-2 pr-2"},l.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center font-weight-bold"},"1.Download QR"),l.createElement("h3",null,"Download digital QR embedded with printable security from Blocktag website"),l.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",style:{padding:40},src:"/img/secureqr/virtual-secureqr.png"})),l.createElement("div",{className:"w-full sm:w-1/3 sm:order-2  pl-2 pr-2"},l.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center font-weight-bold"},"2.Print QR "),l.createElement("h3",null," Print digital QR on materials like paper, stickers etc. using home printer "),l.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",style:{padding:40},src:"/img/notary/inkjet-printer.jpeg"})),l.createElement("div",{className:"w-full sm:w-1/3 sm:order-3  pl-2 pr-2"},l.createElement("h2",{class:"pb-2 text-lg text-black-100 font-base text-center font-weight-bold"},"3.Activate QR"),l.createElement("h3",null,"Capture photo of printed QR as fingerprint using Blocktag app."),l.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",style:{padding:40},src:"/img/notary/notary-stamp-fingerprint.png"}))))),l.createElement("div",{className:"flex flex-col bg-white"},"  ",l.createElement("div",{className:"container px-8 mx-auto"},l.createElement("div",{className:"flex flex-wrap items-center my-12 overflow-hidden text-left"},l.createElement("div",{className:"w-full text-3xl text-center"},"Use Cases"),l.createElement(c.Z,{data:[{img:"/img/samples/BlocktagOriginalPaper.jpg",title:"Certify Original Documents",info:["Printed QR is paper doc’s unclonable fingerprint. Similar to physical stamp, seal, signature."],origin:null,certs:null,eventfeed:null},{img:"/img/securitypaper/notary_stamp.jpeg",title:"Replace Notary Seals",info:["Save time from office travel/mail and stamp many paper documents by printing stamp with Blocktag QR on paper document."],origin:null,certs:null,eventfeed:null},{img:" /img/securitypaper/notary_seal.jpeg",title:"Replace Company Stamp",info:["Create and send digital seal to signers for remote print and ink-sign. "," Print and activate stamped document with phone camera.","Scan printed stamp on doc to authenticate doc and verify client identities."],origin:null,certs:null,eventfeed:null},{img:"/img/securitypaper/hologram_paper.png",title:"Replace Anti Counterfeit Tags",info:["Replace costly anticounterfeit hardware (e.g. Hologram, Polymer) with AI software. AI Deepfake predicts how photocopied, reprinted tags look like."],origin:null,certs:null,eventfeed:null}]}))),l.createElement("div",{className:"w-full text-center py-2 my-4"},l.createElement("a",{onClick:()=>{(0,d.Z)("DownloadTagBody"),(0,g.Z)("https://generate.blocktag.com")},class:"flex-grow inline-block px-8 py-2 my-4 mr-4 text-sm text-white bg-teal-500 border border-teal-500 rounded sm:my-0 hover:bg-teal-700 hover:border-teal-700"},"Download QR Now"))),l.createElement("div",{className:"flex flex-col bg-gray-100"},l.createElement("div",{className:"container px-8 mx-auto"},l.createElement("div",{className:"flex flex-wrap items-start py-6 my-6 overflow-hidden text-left"},l.createElement("div",{className:"w-full mb-12 text-3xl font-light text-center"},"Awards"),l.createElement("div",{className:"w-full sm:w-1/2 sm:order-1 pl-4 pr-4 pt-4 pb-4"}," ",l.createElement("a",{href:"https://www.agorize.com/en/challenges/ricoh-2023/pages/final-results"},l.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",width:"90%",src:"/img/awards/ricoh_finalist.png"}))),l.createElement("div",{className:"w-full sm:w-1/2 sm:order-1 pl-4 pr-4 pt-4 pb-4"}," ",l.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/awards/Meet_The_Drapers.png",width:"70%"}))))),l.createElement("div",{className:"flex flex-col"},l.createElement("div",{className:"container px-8 mx-auto"},l.createElement("div",{className:"flex flex-wrap items-start py-6 my-6 overflow-hidden text-left"},l.createElement("div",{className:"w-full mb-12 text-3xl font-light text-center"},"Our Partners"),l.createElement("div",{className:"w-full sm:w-1/2 sm:order-1 pl-4 pr-4 pt-4 pb-4"}," ",l.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/MS_Startups_Celebration_Badge_Dark.png",width:"60%"})),l.createElement("div",{className:"w-full sm:w-1/2 sm:order-2 pl-4 pr-4 pt-4 pb-4"}," ",l.createElement("img",{className:"mx-auto pt-2 pl-2 pr-2",src:"/img/partners/berkeley-multi-color-on-blue.png",width:"80%"}))))),l.createElement("div",{className:"flex flex-col text-white bg-blue-900"},l.createElement("div",{className:"container px-8 mx-auto"},l.createElement("div",{className:"w-full my-6 mt-24 text-4xl font-light text-center"},"Get in Touch"),l.createElement("div",{className:"w-full my-6 text-xl font-light text-center whitespace-pre-line"},l.createElement("a",{href:"mailto:"+m().email},m().email),"\n",l.createElement("a",{href:"tel:+"+m().phone.replace(/\D/g,"")},m().phone)),l.createElement("div",{className:"flex flex-wrap items-stretch py-12 my-12 overflow-hidden text-left"},l.createElement("div",{className:"flex flex-1 w-full md:px-8 sm:w-1/2"},l.createElement("iframe",{className:"w-full h-full border-none",frameBorder:"0",src:"https://www.google.com/maps/embed/v1/place?q=place_id:"+m().mapPlaceId+"&key="+m().googleCloudApiKey,allowFullScreen:!0})),l.createElement("div",{className:"w-full px-8 sm:w-1/2"},l.createElement(s.t,null))))))},x=a(31806);var b=()=>l.createElement(x.Z,{includePreFooter:!0},l.createElement(f,null))}}]);
//# sourceMappingURL=component---src-templates-securitypaper-page-js-e98e4201e8fd9b497a3b.js.map