(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{YKlZ:function(e,n,t){"use strict";t.d(n,"f",(function(){return r})),t.d(n,"g",(function(){return i})),t.d(n,"h",(function(){return c})),t.d(n,"i",(function(){return s})),t.d(n,"j",(function(){return d})),t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return v})),t.d(n,"c",(function(){return m})),t.d(n,"d",(function(){return g})),t.d(n,"e",(function(){return x}));t("g+8C"),t("PXjX");var a=t("Gtug"),o=t("Enk7"),r=(t("EcEN"),function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o;return Object(a.d)(this,(function(a){return t={"content-type":"application/x-amz-json-1.1","x-amz-target":"Comprehend_20171127.DetectDominantLanguage"},o=JSON.stringify(T(e,n)),[2,F(n,t,"/",void 0,o)]}))}))}),i=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o;return Object(a.d)(this,(function(a){return t={"content-type":"application/x-amz-json-1.1","x-amz-target":"Comprehend_20171127.DetectEntities"},o=JSON.stringify(w(e,n)),[2,F(n,t,"/",void 0,o)]}))}))},c=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o;return Object(a.d)(this,(function(a){return t={"content-type":"application/x-amz-json-1.1","x-amz-target":"Comprehend_20171127.DetectKeyPhrases"},o=JSON.stringify(L(e,n)),[2,F(n,t,"/",void 0,o)]}))}))},s=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o;return Object(a.d)(this,(function(a){return t={"content-type":"application/x-amz-json-1.1","x-amz-target":"Comprehend_20171127.DetectSentiment"},o=JSON.stringify(z(e,n)),[2,F(n,t,"/",void 0,o)]}))}))},d=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o;return Object(a.d)(this,(function(a){return t={"content-type":"application/x-amz-json-1.1","x-amz-target":"Comprehend_20171127.DetectSyntax"},o=JSON.stringify($(e,n)),[2,F(n,t,"/",void 0,o)]}))}))},u=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return e.statusCode>=300?[2,l(e,n)]:[4,H(e.body,n)];case 1:return t=i.sent(),{},o=C(t,n),r=Object(a.a)({$metadata:Y(e)},o),[2,Promise.resolve(r)]}}))}))},l=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o,r,i,c,s,d,u,l,v;return Object(a.d)(this,(function(p){switch(p.label){case 0:return o=[Object(a.a)({},e)],v={},[4,H(e.body,n)];case 1:switch(t=a.a.apply(void 0,o.concat([(v.body=p.sent(),v)])),i="UnknownError",i=Q(e,t.body),i){case"InternalServerException":case"com.amazonaws.comprehend#InternalServerException":return[3,2];case"InvalidRequestException":case"com.amazonaws.comprehend#InvalidRequestException":return[3,4];case"TextSizeLimitExceededException":case"com.amazonaws.comprehend#TextSizeLimitExceededException":return[3,6]}return[3,8];case 2:return c=[{}],[4,y(t,n)];case 3:return r=a.a.apply(void 0,[a.a.apply(void 0,c.concat([p.sent()])),{name:i,$metadata:Y(e)}]),[3,9];case 4:return s=[{}],[4,j(t,n)];case 5:return r=a.a.apply(void 0,[a.a.apply(void 0,s.concat([p.sent()])),{name:i,$metadata:Y(e)}]),[3,9];case 6:return d=[{}],[4,h(t,n)];case 7:return r=a.a.apply(void 0,[a.a.apply(void 0,d.concat([p.sent()])),{name:i,$metadata:Y(e)}]),[3,9];case 8:u=t.body,i=u.code||u.Code||i,r=Object(a.a)(Object(a.a)({},u),{name:""+i,message:u.message||u.Message||i,$fault:"client",$metadata:Y(e)}),p.label=9;case 9:return l=r.message||r.Message||i,r.message=l,delete r.Message,[2,Promise.reject(Object.assign(new Error(l),r))]}}))}))},v=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return e.statusCode>=300?[2,p(e,n)]:[4,H(e.body,n)];case 1:return t=i.sent(),{},o=M(t,n),r=Object(a.a)({$metadata:Y(e)},o),[2,Promise.resolve(r)]}}))}))},p=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o,r,i,c,s,d,u,l,v,p,m;return Object(a.d)(this,(function(f){switch(f.label){case 0:return o=[Object(a.a)({},e)],m={},[4,H(e.body,n)];case 1:switch(t=a.a.apply(void 0,o.concat([(m.body=f.sent(),m)])),i="UnknownError",i=Q(e,t.body),i){case"InternalServerException":case"com.amazonaws.comprehend#InternalServerException":return[3,2];case"InvalidRequestException":case"com.amazonaws.comprehend#InvalidRequestException":return[3,4];case"ResourceUnavailableException":case"com.amazonaws.comprehend#ResourceUnavailableException":return[3,6];case"TextSizeLimitExceededException":case"com.amazonaws.comprehend#TextSizeLimitExceededException":return[3,8];case"UnsupportedLanguageException":case"com.amazonaws.comprehend#UnsupportedLanguageException":return[3,10]}return[3,12];case 2:return c=[{}],[4,y(t,n)];case 3:return r=a.a.apply(void 0,[a.a.apply(void 0,c.concat([f.sent()])),{name:i,$metadata:Y(e)}]),[3,13];case 4:return s=[{}],[4,j(t,n)];case 5:return r=a.a.apply(void 0,[a.a.apply(void 0,s.concat([f.sent()])),{name:i,$metadata:Y(e)}]),[3,13];case 6:return d=[{}],[4,E(t,n)];case 7:return r=a.a.apply(void 0,[a.a.apply(void 0,d.concat([f.sent()])),{name:i,$metadata:Y(e)}]),[3,13];case 8:return u=[{}],[4,h(t,n)];case 9:return r=a.a.apply(void 0,[a.a.apply(void 0,u.concat([f.sent()])),{name:i,$metadata:Y(e)}]),[3,13];case 10:return l=[{}],[4,S(t,n)];case 11:return r=a.a.apply(void 0,[a.a.apply(void 0,l.concat([f.sent()])),{name:i,$metadata:Y(e)}]),[3,13];case 12:v=t.body,i=v.code||v.Code||i,r=Object(a.a)(Object(a.a)({},v),{name:""+i,message:v.message||v.Message||i,$fault:"client",$metadata:Y(e)}),f.label=13;case 13:return p=r.message||r.Message||i,r.message=p,delete r.Message,[2,Promise.reject(Object.assign(new Error(p),r))]}}))}))},m=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return e.statusCode>=300?[2,f(e,n)]:[4,H(e.body,n)];case 1:return t=i.sent(),{},o=I(t,n),r=Object(a.a)({$metadata:Y(e)},o),[2,Promise.resolve(r)]}}))}))},f=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o,r,i,c,s,d,u,l,v,p;return Object(a.d)(this,(function(m){switch(m.label){case 0:return o=[Object(a.a)({},e)],p={},[4,H(e.body,n)];case 1:switch(t=a.a.apply(void 0,o.concat([(p.body=m.sent(),p)])),i="UnknownError",i=Q(e,t.body),i){case"InternalServerException":case"com.amazonaws.comprehend#InternalServerException":return[3,2];case"InvalidRequestException":case"com.amazonaws.comprehend#InvalidRequestException":return[3,4];case"TextSizeLimitExceededException":case"com.amazonaws.comprehend#TextSizeLimitExceededException":return[3,6];case"UnsupportedLanguageException":case"com.amazonaws.comprehend#UnsupportedLanguageException":return[3,8]}return[3,10];case 2:return c=[{}],[4,y(t,n)];case 3:return r=a.a.apply(void 0,[a.a.apply(void 0,c.concat([m.sent()])),{name:i,$metadata:Y(e)}]),[3,11];case 4:return s=[{}],[4,j(t,n)];case 5:return r=a.a.apply(void 0,[a.a.apply(void 0,s.concat([m.sent()])),{name:i,$metadata:Y(e)}]),[3,11];case 6:return d=[{}],[4,h(t,n)];case 7:return r=a.a.apply(void 0,[a.a.apply(void 0,d.concat([m.sent()])),{name:i,$metadata:Y(e)}]),[3,11];case 8:return u=[{}],[4,S(t,n)];case 9:return r=a.a.apply(void 0,[a.a.apply(void 0,u.concat([m.sent()])),{name:i,$metadata:Y(e)}]),[3,11];case 10:l=t.body,i=l.code||l.Code||i,r=Object(a.a)(Object(a.a)({},l),{name:""+i,message:l.message||l.Message||i,$fault:"client",$metadata:Y(e)}),m.label=11;case 11:return v=r.message||r.Message||i,r.message=v,delete r.Message,[2,Promise.reject(Object.assign(new Error(v),r))]}}))}))},g=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return e.statusCode>=300?[2,b(e,n)]:[4,H(e.body,n)];case 1:return t=i.sent(),{},o=P(t,n),r=Object(a.a)({$metadata:Y(e)},o),[2,Promise.resolve(r)]}}))}))},b=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o,r,i,c,s,d,u,l,v,p;return Object(a.d)(this,(function(m){switch(m.label){case 0:return o=[Object(a.a)({},e)],p={},[4,H(e.body,n)];case 1:switch(t=a.a.apply(void 0,o.concat([(p.body=m.sent(),p)])),i="UnknownError",i=Q(e,t.body),i){case"InternalServerException":case"com.amazonaws.comprehend#InternalServerException":return[3,2];case"InvalidRequestException":case"com.amazonaws.comprehend#InvalidRequestException":return[3,4];case"TextSizeLimitExceededException":case"com.amazonaws.comprehend#TextSizeLimitExceededException":return[3,6];case"UnsupportedLanguageException":case"com.amazonaws.comprehend#UnsupportedLanguageException":return[3,8]}return[3,10];case 2:return c=[{}],[4,y(t,n)];case 3:return r=a.a.apply(void 0,[a.a.apply(void 0,c.concat([m.sent()])),{name:i,$metadata:Y(e)}]),[3,11];case 4:return s=[{}],[4,j(t,n)];case 5:return r=a.a.apply(void 0,[a.a.apply(void 0,s.concat([m.sent()])),{name:i,$metadata:Y(e)}]),[3,11];case 6:return d=[{}],[4,h(t,n)];case 7:return r=a.a.apply(void 0,[a.a.apply(void 0,d.concat([m.sent()])),{name:i,$metadata:Y(e)}]),[3,11];case 8:return u=[{}],[4,S(t,n)];case 9:return r=a.a.apply(void 0,[a.a.apply(void 0,u.concat([m.sent()])),{name:i,$metadata:Y(e)}]),[3,11];case 10:l=t.body,i=l.code||l.Code||i,r=Object(a.a)(Object(a.a)({},l),{name:""+i,message:l.message||l.Message||i,$fault:"client",$metadata:Y(e)}),m.label=11;case 11:return v=r.message||r.Message||i,r.message=v,delete r.Message,[2,Promise.reject(Object.assign(new Error(v),r))]}}))}))},x=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return e.statusCode>=300?[2,O(e,n)]:[4,H(e.body,n)];case 1:return t=i.sent(),{},o=U(t,n),r=Object(a.a)({$metadata:Y(e)},o),[2,Promise.resolve(r)]}}))}))},O=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o,r,i,c,s,d,u,l,v,p;return Object(a.d)(this,(function(m){switch(m.label){case 0:return o=[Object(a.a)({},e)],p={},[4,H(e.body,n)];case 1:switch(t=a.a.apply(void 0,o.concat([(p.body=m.sent(),p)])),i="UnknownError",i=Q(e,t.body),i){case"InternalServerException":case"com.amazonaws.comprehend#InternalServerException":return[3,2];case"InvalidRequestException":case"com.amazonaws.comprehend#InvalidRequestException":return[3,4];case"TextSizeLimitExceededException":case"com.amazonaws.comprehend#TextSizeLimitExceededException":return[3,6];case"UnsupportedLanguageException":case"com.amazonaws.comprehend#UnsupportedLanguageException":return[3,8]}return[3,10];case 2:return c=[{}],[4,y(t,n)];case 3:return r=a.a.apply(void 0,[a.a.apply(void 0,c.concat([m.sent()])),{name:i,$metadata:Y(e)}]),[3,11];case 4:return s=[{}],[4,j(t,n)];case 5:return r=a.a.apply(void 0,[a.a.apply(void 0,s.concat([m.sent()])),{name:i,$metadata:Y(e)}]),[3,11];case 6:return d=[{}],[4,h(t,n)];case 7:return r=a.a.apply(void 0,[a.a.apply(void 0,d.concat([m.sent()])),{name:i,$metadata:Y(e)}]),[3,11];case 8:return u=[{}],[4,S(t,n)];case 9:return r=a.a.apply(void 0,[a.a.apply(void 0,u.concat([m.sent()])),{name:i,$metadata:Y(e)}]),[3,11];case 10:l=t.body,i=l.code||l.Code||i,r=Object(a.a)(Object(a.a)({},l),{name:""+i,message:l.message||l.Message||i,$fault:"client",$metadata:Y(e)}),m.label=11;case 11:return v=r.message||r.Message||i,r.message=v,delete r.Message,[2,Promise.reject(Object.assign(new Error(v),r))]}}))}))},y=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o;return Object(a.d)(this,(function(r){return t=e.body,o=k(t,n),[2,Object(a.a)({name:"InternalServerException",$fault:"server",$metadata:Y(e)},o)]}))}))},j=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o;return Object(a.d)(this,(function(r){return t=e.body,o=q(t,n),[2,Object(a.a)({name:"InvalidRequestException",$fault:"client",$metadata:Y(e)},o)]}))}))},E=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o;return Object(a.d)(this,(function(r){return t=e.body,o=A(t,n),[2,Object(a.a)({name:"ResourceUnavailableException",$fault:"client",$metadata:Y(e)},o)]}))}))},h=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o;return Object(a.d)(this,(function(r){return t=e.body,o=X(t,n),[2,Object(a.a)({name:"TextSizeLimitExceededException",$fault:"client",$metadata:Y(e)},o)]}))}))},S=function(e,n){return Object(a.b)(void 0,void 0,void 0,(function(){var t,o;return Object(a.d)(this,(function(r){return t=e.body,o=G(t,n),[2,Object(a.a)({name:"UnsupportedLanguageException",$fault:"client",$metadata:Y(e)},o)]}))}))},T=function(e,n){return Object(a.a)({},void 0!==e.Text&&null!==e.Text&&{Text:e.Text})},w=function(e,n){return Object(a.a)(Object(a.a)(Object(a.a)({},void 0!==e.EndpointArn&&null!==e.EndpointArn&&{EndpointArn:e.EndpointArn}),void 0!==e.LanguageCode&&null!==e.LanguageCode&&{LanguageCode:e.LanguageCode}),void 0!==e.Text&&null!==e.Text&&{Text:e.Text})},L=function(e,n){return Object(a.a)(Object(a.a)({},void 0!==e.LanguageCode&&null!==e.LanguageCode&&{LanguageCode:e.LanguageCode}),void 0!==e.Text&&null!==e.Text&&{Text:e.Text})},z=function(e,n){return Object(a.a)(Object(a.a)({},void 0!==e.LanguageCode&&null!==e.LanguageCode&&{LanguageCode:e.LanguageCode}),void 0!==e.Text&&null!==e.Text&&{Text:e.Text})},$=function(e,n){return Object(a.a)(Object(a.a)({},void 0!==e.LanguageCode&&null!==e.LanguageCode&&{LanguageCode:e.LanguageCode}),void 0!==e.Text&&null!==e.Text&&{Text:e.Text})},C=function(e,n){return{Languages:void 0!==e.Languages&&null!==e.Languages?N(e.Languages,n):void 0}},M=function(e,n){return{Entities:void 0!==e.Entities&&null!==e.Entities?R(e.Entities,n):void 0}},I=function(e,n){return{KeyPhrases:void 0!==e.KeyPhrases&&null!==e.KeyPhrases?B(e.KeyPhrases,n):void 0}},P=function(e,n){return{Sentiment:void 0!==e.Sentiment&&null!==e.Sentiment?e.Sentiment:void 0,SentimentScore:void 0!==e.SentimentScore&&null!==e.SentimentScore?D(e.SentimentScore,n):void 0}},U=function(e,n){return{SyntaxTokens:void 0!==e.SyntaxTokens&&null!==e.SyntaxTokens?_(e.SyntaxTokens,n):void 0}},k=function(e,n){return{Message:void 0!==e.Message&&null!==e.Message?e.Message:void 0}},q=function(e,n){return{Message:void 0!==e.Message&&null!==e.Message?e.Message:void 0}},N=function(e,n){return(e||[]).filter((function(e){return null!=e})).map((function(e){return null===e?null:function(e,n){return{LanguageCode:void 0!==e.LanguageCode&&null!==e.LanguageCode?e.LanguageCode:void 0,Score:void 0!==e.Score&&null!==e.Score?e.Score:void 0}}(e)}))},R=function(e,n){return(e||[]).filter((function(e){return null!=e})).map((function(e){return null===e?null:function(e,n){return{BeginOffset:void 0!==e.BeginOffset&&null!==e.BeginOffset?e.BeginOffset:void 0,EndOffset:void 0!==e.EndOffset&&null!==e.EndOffset?e.EndOffset:void 0,Score:void 0!==e.Score&&null!==e.Score?e.Score:void 0,Text:void 0!==e.Text&&null!==e.Text?e.Text:void 0,Type:void 0!==e.Type&&null!==e.Type?e.Type:void 0}}(e)}))},B=function(e,n){return(e||[]).filter((function(e){return null!=e})).map((function(e){return null===e?null:function(e,n){return{BeginOffset:void 0!==e.BeginOffset&&null!==e.BeginOffset?e.BeginOffset:void 0,EndOffset:void 0!==e.EndOffset&&null!==e.EndOffset?e.EndOffset:void 0,Score:void 0!==e.Score&&null!==e.Score?e.Score:void 0,Text:void 0!==e.Text&&null!==e.Text?e.Text:void 0}}(e)}))},_=function(e,n){return(e||[]).filter((function(e){return null!=e})).map((function(e){return null===e?null:K(e,n)}))},J=function(e,n){return{Score:void 0!==e.Score&&null!==e.Score?e.Score:void 0,Tag:void 0!==e.Tag&&null!==e.Tag?e.Tag:void 0}},A=function(e,n){return{Message:void 0!==e.Message&&null!==e.Message?e.Message:void 0}},D=function(e,n){return{Mixed:void 0!==e.Mixed&&null!==e.Mixed?e.Mixed:void 0,Negative:void 0!==e.Negative&&null!==e.Negative?e.Negative:void 0,Neutral:void 0!==e.Neutral&&null!==e.Neutral?e.Neutral:void 0,Positive:void 0!==e.Positive&&null!==e.Positive?e.Positive:void 0}},K=function(e,n){return{BeginOffset:void 0!==e.BeginOffset&&null!==e.BeginOffset?e.BeginOffset:void 0,EndOffset:void 0!==e.EndOffset&&null!==e.EndOffset?e.EndOffset:void 0,PartOfSpeech:void 0!==e.PartOfSpeech&&null!==e.PartOfSpeech?J(e.PartOfSpeech):void 0,Text:void 0!==e.Text&&null!==e.Text?e.Text:void 0,TokenId:void 0!==e.TokenId&&null!==e.TokenId?e.TokenId:void 0}},X=function(e,n){return{Message:void 0!==e.Message&&null!==e.Message?e.Message:void 0}},G=function(e,n){return{Message:void 0!==e.Message&&null!==e.Message?e.Message:void 0}},Y=function(e){var n;return{httpStatusCode:e.statusCode,requestId:null!==(n=e.headers["x-amzn-requestid"])&&void 0!==n?n:e.headers["x-amzn-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}},Z=function(e,n){return function(e,n){return void 0===e&&(e=new Uint8Array),e instanceof Uint8Array?Promise.resolve(e):n.streamCollector(e)||Promise.resolve(new Uint8Array)}(e,n).then((function(e){return n.utf8Encoder(e)}))},F=function(e,n,t,r,i){return Object(a.b)(void 0,void 0,void 0,(function(){var c,s,d,u,l,v;return Object(a.d)(this,(function(a){switch(a.label){case 0:return[4,e.endpoint()];case 1:return c=a.sent(),s=c.hostname,d=c.protocol,u=void 0===d?"https":d,l=c.port,v={protocol:u,hostname:s,port:l,method:"POST",path:t,headers:n},void 0!==r&&(v.hostname=r),void 0!==i&&(v.body=i),[2,new o.a(v)]}}))}))},H=function(e,n){return Z(e,n).then((function(e){return e.length?JSON.parse(e):{}}))},Q=function(e,n){var t,a,o=function(e){var n=e;return n.indexOf(":")>=0&&(n=n.split(":")[0]),n.indexOf("#")>=0&&(n=n.split("#")[1]),n},r=(t=e.headers,a="x-amzn-errortype",Object.keys(t).find((function(e){return e.toLowerCase()===a.toLowerCase()})));return void 0!==r?o(e.headers[r]):void 0!==n.code?o(n.code):void 0!==n.__type?o(n.__type):""}}}]);
//# sourceMappingURL=5858780f-6c077a6d43d1867a9033.js.map