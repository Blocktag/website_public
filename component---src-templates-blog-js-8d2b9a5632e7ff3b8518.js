(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{c851:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),s=a("obyI"),c=a.n(s),m=a("TJpk"),o=a.n(m);var i=e=>{let{posts:t}=e;return t.filter(e=>"article-page"===e.node.frontmatter.templateKey).map(e=>{let{node:t}=e;return n.a.createElement("div",{className:"w-1/3 p-4"},n.a.createElement("div",{className:"shadow-lg rounded overflow-hidden"},n.a.createElement(r.Link,{className:"has-text-primary",to:t.fields.slug,key:t.id},n.a.createElement("img",{className:"w-full",src:t.frontmatter.cover,alt:t.frontmatter.title}),n.a.createElement("div",{className:"px-6 py-4"},n.a.createElement("div",{className:"font-bold text-xl mb-2"},t.frontmatter.title),n.a.createElement("p",{className:"text-gray-700 text-base"},t.excerpt)),n.a.createElement("div",{className:"px-6 py-4"},t.frontmatter.tags.map(e=>n.a.createElement("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 last:mr-0"},"#",e))),n.a.createElement("div",{className:"px-6 py-4"},n.a.createElement("div",{className:"text-sm"},n.a.createElement("p",{className:"text-gray-900 leading-none"},"Blocktag Team"),n.a.createElement("p",{className:"text-gray-600"},t.frontmatter.date))))))})},p=a("Zttt");const d=e=>e.test?n.a.createElement("span",{disabled:!0,className:"px-4 py-2 font-bold text-white rounded g-blue-500 hover:bg-blue-700"},e.text):n.a.createElement(r.Link,{to:"/blog/"+e.url,className:"button is-rounded"},e.text);class x extends l.Component{render(){const{pageContext:e}=this.props,{group:t,index:a,first:l,last:r}=e,s=a-1==1?"":(a-1).toString(),m=(a+1).toString()+"/",x={"@context":"http://schema.org","@type":"WebSite",url:c.a.siteUrl,name:c.a.siteTitle,alternateName:c.a.siteTitleAlt?c.a.siteTitleAlt:""};return n.a.createElement(p.a,{includePreFooter:!0},n.a.createElement("div",{className:"bg-white flex flex-col"},n.a.createElement("div",{className:"container mx-auto px-8"},n.a.createElement(o.a,null,n.a.createElement("title",null,"Blocktag Blog"),n.a.createElement("script",{type:"application/ld+json"},JSON.stringify(x))),n.a.createElement("section",{className:"flex flex-wrap my-12 mb-4"},n.a.createElement(i,{posts:t})),n.a.createElement("section",{className:"section"},n.a.createElement("div",{className:"buttons is-centered"},n.a.createElement(d,{test:l,url:s,text:"Previous Page"}),n.a.createElement(d,{test:r,url:m,text:"Next Page"}))))))}}}}]);
//# sourceMappingURL=component---src-templates-blog-js-8d2b9a5632e7ff3b8518.js.map