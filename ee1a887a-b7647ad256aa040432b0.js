(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{kmlu:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));n("g+8C"),n("PXjX");var o=n("8sRO"),r=n("X/ll"),i=n("Bvsu"),c=n("oYy+"),a=n("Jkof"),u=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var n,c,a,u,s,d,l,b;return Object(o.d)(this,(function(o){switch(o.label){case 0:return[4,t.endpoint()];case 1:return n=o.sent(),c=n.hostname,a=n.protocol,u=void 0===a?"https":a,s=n.port,d=n.path,l={},b="".concat((null==d?void 0:d.endsWith("/"))?d.slice(0,-1):d||"")+"/v1/apps/{ApplicationId}/endpoints/{EndpointId}/inappmessages",b=Object(i.n)(b,e,"ApplicationId",(function(){return e.ApplicationId}),"{ApplicationId}",!1),b=Object(i.n)(b,e,"EndpointId",(function(){return e.EndpointId}),"{EndpointId}",!1),[2,new r.a({protocol:u,hostname:c,port:s,method:"GET",headers:l,path:b,body:void 0})]}}))}))},s=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var n,c,a,u,s,d,l,b,p;return Object(o.d)(this,(function(o){switch(o.label){case 0:return[4,t.endpoint()];case 1:return n=o.sent(),c=n.hostname,a=n.protocol,u=void 0===a?"https":a,s=n.port,d=n.path,l={"content-type":"application/json"},b="".concat((null==d?void 0:d.endsWith("/"))?d.slice(0,-1):d||"")+"/v1/apps/{ApplicationId}/endpoints/{EndpointId}",b=Object(i.n)(b,e,"ApplicationId",(function(){return e.ApplicationId}),"{ApplicationId}",!1),b=Object(i.n)(b,e,"EndpointId",(function(){return e.EndpointId}),"{EndpointId}",!1),void 0!==e.EndpointRequest&&(p=w(e.EndpointRequest,t)),void 0===p&&(p={}),p=JSON.stringify(p),[2,new r.a({protocol:u,hostname:c,port:s,method:"PUT",headers:l,path:b,body:p})]}}))}))},d=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var n,r,c;return Object(o.d)(this,(function(o){switch(o.label){case 0:return 200!==e.statusCode&&e.statusCode>=300?[2,l(e,t)]:(n=O({$metadata:X(e)}),c=i.h,[4,Y(e.body,t)]);case 1:return r=c.apply(void 0,[o.sent()]),n.InAppMessagesResponse=P(r,t),[2,n]}}))}))},l=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var n,r,c,u,s;return Object(o.d)(this,(function(d){switch(d.label){case 0:return r=[Object(o.a)({},e)],s={},[4,K(e.body,t)];case 1:switch(n=o.a.apply(void 0,r.concat([(s.body=d.sent(),s)])),c=Z(e,n.body),c){case"BadRequestException":case"com.amazonaws.pinpoint#BadRequestException":return[3,2];case"ForbiddenException":case"com.amazonaws.pinpoint#ForbiddenException":return[3,4];case"InternalServerErrorException":case"com.amazonaws.pinpoint#InternalServerErrorException":return[3,6];case"MethodNotAllowedException":case"com.amazonaws.pinpoint#MethodNotAllowedException":return[3,8];case"NotFoundException":case"com.amazonaws.pinpoint#NotFoundException":return[3,10];case"PayloadTooLargeException":case"com.amazonaws.pinpoint#PayloadTooLargeException":return[3,12];case"TooManyRequestsException":case"com.amazonaws.pinpoint#TooManyRequestsException":return[3,14]}return[3,16];case 2:return[4,j(n,t)];case 3:throw d.sent();case 4:return[4,f(n,t)];case 5:throw d.sent();case 6:return[4,v(n,t)];case 7:throw d.sent();case 8:return[4,m(n,t)];case 9:throw d.sent();case 10:return[4,y(n,t)];case 11:throw d.sent();case 12:return[4,h(n,t)];case 13:throw d.sent();case 14:return[4,g(n,t)];case 15:throw d.sent();case 16:u=n.body,Object(i.p)({output:e,parsedBody:u,exceptionCtor:a.a,errorCode:c}),d.label=17;case 17:return[2]}}))}))},b=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var n,r,c;return Object(o.d)(this,(function(o){switch(o.label){case 0:return 202!==e.statusCode&&e.statusCode>=300?[2,p(e,t)]:(n=O({$metadata:X(e)}),c=i.h,[4,Y(e.body,t)]);case 1:return r=c.apply(void 0,[o.sent()]),n.MessageBody=H(r,t),[2,n]}}))}))},p=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var n,r,c,u,s;return Object(o.d)(this,(function(d){switch(d.label){case 0:return r=[Object(o.a)({},e)],s={},[4,K(e.body,t)];case 1:switch(n=o.a.apply(void 0,r.concat([(s.body=d.sent(),s)])),c=Z(e,n.body),c){case"BadRequestException":case"com.amazonaws.pinpoint#BadRequestException":return[3,2];case"ForbiddenException":case"com.amazonaws.pinpoint#ForbiddenException":return[3,4];case"InternalServerErrorException":case"com.amazonaws.pinpoint#InternalServerErrorException":return[3,6];case"MethodNotAllowedException":case"com.amazonaws.pinpoint#MethodNotAllowedException":return[3,8];case"NotFoundException":case"com.amazonaws.pinpoint#NotFoundException":return[3,10];case"PayloadTooLargeException":case"com.amazonaws.pinpoint#PayloadTooLargeException":return[3,12];case"TooManyRequestsException":case"com.amazonaws.pinpoint#TooManyRequestsException":return[3,14]}return[3,16];case 2:return[4,j(n,t)];case 3:throw d.sent();case 4:return[4,f(n,t)];case 5:throw d.sent();case 6:return[4,v(n,t)];case 7:throw d.sent();case 8:return[4,m(n,t)];case 9:throw d.sent();case 10:return[4,y(n,t)];case 11:throw d.sent();case 12:return[4,h(n,t)];case 13:throw d.sent();case 14:return[4,g(n,t)];case 15:throw d.sent();case 16:u=n.body,Object(i.p)({output:e,parsedBody:u,exceptionCtor:a.a,errorCode:c}),d.label=17;case 17:return[2]}}))}))},O=i.l,j=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var t,n,r;return Object(o.d)(this,(function(a){return t=O({}),null!=(n=e.body).Message&&(t.Message=Object(i.i)(n.Message)),null!=n.RequestID&&(t.RequestID=Object(i.i)(n.RequestID)),r=new c.a(Object(o.a)({$metadata:X(e)},t)),[2,Object(i.d)(r,e.body)]}))}))},f=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var t,n,r;return Object(o.d)(this,(function(a){return t=O({}),null!=(n=e.body).Message&&(t.Message=Object(i.i)(n.Message)),null!=n.RequestID&&(t.RequestID=Object(i.i)(n.RequestID)),r=new c.d(Object(o.a)({$metadata:X(e)},t)),[2,Object(i.d)(r,e.body)]}))}))},v=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var t,n,r;return Object(o.d)(this,(function(a){return t=O({}),null!=(n=e.body).Message&&(t.Message=Object(i.i)(n.Message)),null!=n.RequestID&&(t.RequestID=Object(i.i)(n.RequestID)),r=new c.e(Object(o.a)({$metadata:X(e)},t)),[2,Object(i.d)(r,e.body)]}))}))},m=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var t,n,r;return Object(o.d)(this,(function(a){return t=O({}),null!=(n=e.body).Message&&(t.Message=Object(i.i)(n.Message)),null!=n.RequestID&&(t.RequestID=Object(i.i)(n.RequestID)),r=new c.g(Object(o.a)({$metadata:X(e)},t)),[2,Object(i.d)(r,e.body)]}))}))},y=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var t,n,r;return Object(o.d)(this,(function(a){return t=O({}),null!=(n=e.body).Message&&(t.Message=Object(i.i)(n.Message)),null!=n.RequestID&&(t.RequestID=Object(i.i)(n.RequestID)),r=new c.h(Object(o.a)({$metadata:X(e)},t)),[2,Object(i.d)(r,e.body)]}))}))},h=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var t,n,r;return Object(o.d)(this,(function(a){return t=O({}),null!=(n=e.body).Message&&(t.Message=Object(i.i)(n.Message)),null!=n.RequestID&&(t.RequestID=Object(i.i)(n.RequestID)),r=new c.i(Object(o.a)({$metadata:X(e)},t)),[2,Object(i.d)(r,e.body)]}))}))},g=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var t,n,r;return Object(o.d)(this,(function(a){return t=O({}),null!=(n=e.body).Message&&(t.Message=Object(i.i)(n.Message)),null!=n.RequestID&&(t.RequestID=Object(i.i)(n.RequestID)),r=new c.j(Object(o.a)({$metadata:X(e)},t)),[2,Object(i.d)(r,e.body)]}))}))},I=function(e,t){return Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({},null!=e.AppVersion&&{AppVersion:e.AppVersion}),null!=e.Locale&&{Locale:e.Locale}),null!=e.Make&&{Make:e.Make}),null!=e.Model&&{Model:e.Model}),null!=e.ModelVersion&&{ModelVersion:e.ModelVersion}),null!=e.Platform&&{Platform:e.Platform}),null!=e.PlatformVersion&&{PlatformVersion:e.PlatformVersion}),null!=e.Timezone&&{Timezone:e.Timezone})},C=function(e,t){return Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({},null!=e.City&&{City:e.City}),null!=e.Country&&{Country:e.Country}),null!=e.Latitude&&{Latitude:Object(i.o)(e.Latitude)}),null!=e.Longitude&&{Longitude:Object(i.o)(e.Longitude)}),null!=e.PostalCode&&{PostalCode:e.PostalCode}),null!=e.Region&&{Region:e.Region})},w=function(e,t){return Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({},null!=e.Address&&{Address:e.Address}),null!=e.Attributes&&{Attributes:x(e.Attributes,t)}),null!=e.ChannelType&&{ChannelType:e.ChannelType}),null!=e.Demographic&&{Demographic:I(e.Demographic,t)}),null!=e.EffectiveDate&&{EffectiveDate:e.EffectiveDate}),null!=e.EndpointStatus&&{EndpointStatus:e.EndpointStatus}),null!=e.Location&&{Location:C(e.Location,t)}),null!=e.Metrics&&{Metrics:A(e.Metrics,t)}),null!=e.OptOut&&{OptOut:e.OptOut}),null!=e.RequestId&&{RequestId:e.RequestId}),null!=e.User&&{User:E(e.User,t)})},E=function(e,t){return Object(o.a)(Object(o.a)({},null!=e.UserAttributes&&{UserAttributes:x(e.UserAttributes,t)}),null!=e.UserId&&{UserId:e.UserId})},M=function(e,t){return e.filter((function(e){return null!=e})).map((function(e){return e}))},A=function(e,t){return Object.entries(e).reduce((function(e,t){var n,r=Object(o.e)(t,2),c=r[0],a=r[1];return null===a?e:Object(o.a)(Object(o.a)({},e),((n={})[c]=Object(i.o)(a),n))}),{})},x=function(e,t){return Object.entries(e).reduce((function(e,n){var r,i=Object(o.e)(n,2),c=i[0],a=i[1];return null===a?e:Object(o.a)(Object(o.a)({},e),((r={})[c]=M(a,t),r))}),{})},R=function(e,t){return{Dimensions:null!=e.Dimensions?D(e.Dimensions,t):void 0,FilterType:Object(i.i)(e.FilterType)}},q=function(e,t){return{BackgroundColor:Object(i.i)(e.BackgroundColor),BorderRadius:Object(i.f)(e.BorderRadius),ButtonAction:Object(i.i)(e.ButtonAction),Link:Object(i.i)(e.Link),Text:Object(i.i)(e.Text),TextColor:Object(i.i)(e.TextColor)}},D=function(e,t){return{Attributes:null!=e.Attributes?N(e.Attributes,t):void 0,EventType:null!=e.EventType?Q(e.EventType,t):void 0,Metrics:null!=e.Metrics?$(e.Metrics,t):void 0}},T=function(e,t){return{EndDate:Object(i.i)(e.EndDate),EventFilter:null!=e.EventFilter?R(e.EventFilter,t):void 0,QuietTime:null!=e.QuietTime?_(e.QuietTime,t):void 0}},B=function(e,t){return{Content:null!=e.Content?U(e.Content,t):void 0,CustomConfig:null!=e.CustomConfig?F(e.CustomConfig,t):void 0,Layout:Object(i.i)(e.Layout)}},L=function(e,t){return{Alignment:Object(i.i)(e.Alignment),Body:Object(i.i)(e.Body),TextColor:Object(i.i)(e.TextColor)}},S=function(e,t){return{Android:null!=e.Android?W(e.Android,t):void 0,DefaultConfig:null!=e.DefaultConfig?q(e.DefaultConfig):void 0,IOS:null!=e.IOS?W(e.IOS,t):void 0,Web:null!=e.Web?W(e.Web,t):void 0}},z=function(e,t){return{Alignment:Object(i.i)(e.Alignment),Header:Object(i.i)(e.Header),TextColor:Object(i.i)(e.TextColor)}},P=function(e,t){return{InAppMessageCampaigns:null!=e.InAppMessageCampaigns?k(e.InAppMessageCampaigns,t):void 0}},V=function(e,t){return(e||[]).filter((function(e){return null!=e})).map((function(e){return null===e?null:Object(i.i)(e)}))},k=function(e,t){return(e||[]).filter((function(e){return null!=e})).map((function(e){return null===e?null:function(e,t){return{CampaignId:Object(i.i)(e.CampaignId),DailyCap:Object(i.f)(e.DailyCap),InAppMessage:null!=e.InAppMessage?B(e.InAppMessage,t):void 0,Priority:Object(i.f)(e.Priority),Schedule:null!=e.Schedule?T(e.Schedule,t):void 0,SessionCap:Object(i.f)(e.SessionCap),TotalCap:Object(i.f)(e.TotalCap),TreatmentId:Object(i.i)(e.TreatmentId)}}(e,t)}))},U=function(e,t){return(e||[]).filter((function(e){return null!=e})).map((function(e){return null===e?null:function(e,t){return{BackgroundColor:Object(i.i)(e.BackgroundColor),BodyConfig:null!=e.BodyConfig?L(e.BodyConfig):void 0,HeaderConfig:null!=e.HeaderConfig?z(e.HeaderConfig,t):void 0,ImageUrl:Object(i.i)(e.ImageUrl),PrimaryBtn:null!=e.PrimaryBtn?S(e.PrimaryBtn,t):void 0,SecondaryBtn:null!=e.SecondaryBtn?S(e.SecondaryBtn,t):void 0}}(e,t)}))},F=function(e,t){return Object.entries(e).reduce((function(e,t){var n,r=Object(o.e)(t,2),c=r[0],a=r[1];return null===a?e:Object(o.a)(Object(o.a)({},e),((n={})[c]=Object(i.i)(a),n))}),{})},N=function(e,t){return Object.entries(e).reduce((function(e,n){var r,c=Object(o.e)(n,2),a=c[0],u=c[1];return null===u?e:Object(o.a)(Object(o.a)({},e),((r={})[a]=function(e,t){return{AttributeType:Object(i.i)(e.AttributeType),Values:null!=e.Values?V(e.Values,t):void 0}}(u,t),r))}),{})},$=function(e,t){return Object.entries(e).reduce((function(e,n){var r,i=Object(o.e)(n,2),c=i[0],a=i[1];return null===a?e:Object(o.a)(Object(o.a)({},e),((r={})[c]=J(a,t),r))}),{})},H=function(e,t){return{Message:Object(i.i)(e.Message),RequestID:Object(i.i)(e.RequestID)}},J=function(e,t){return{ComparisonOperator:Object(i.i)(e.ComparisonOperator),Value:Object(i.j)(e.Value)}},W=function(e,t){return{ButtonAction:Object(i.i)(e.ButtonAction),Link:Object(i.i)(e.Link)}},_=function(e,t){return{End:Object(i.i)(e.End),Start:Object(i.i)(e.Start)}},Q=function(e,t){return{DimensionType:Object(i.i)(e.DimensionType),Values:null!=e.Values?V(e.Values,t):void 0}},X=function(e){var t,n;return{httpStatusCode:e.statusCode,requestId:null!==(n=null!==(t=e.headers["x-amzn-requestid"])&&void 0!==t?t:e.headers["x-amzn-request-id"])&&void 0!==n?n:e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}},G=function(e,t){return void 0===e&&(e=new Uint8Array),e instanceof Uint8Array?Promise.resolve(e):t.streamCollector(e)||Promise.resolve(new Uint8Array)},Y=function(e,t){return function(e,t){return G(e,t).then((function(e){return t.utf8Encoder(e)}))}(e,t).then((function(e){return e.length?JSON.parse(e):{}}))},K=function(e,t){return Object(o.b)(void 0,void 0,void 0,(function(){var n,r;return Object(o.d)(this,(function(o){switch(o.label){case 0:return[4,Y(e,t)];case 1:return(n=o.sent()).message=null!==(r=n.message)&&void 0!==r?r:n.Message,[2,n]}}))}))},Z=function(e,t){var n,o,r=function(e){var t=e;return"number"==typeof t&&(t=t.toString()),t.indexOf(",")>=0&&(t=t.split(",")[0]),t.indexOf(":")>=0&&(t=t.split(":")[0]),t.indexOf("#")>=0&&(t=t.split("#")[1]),t},i=(n=e.headers,o="x-amzn-errortype",Object.keys(n).find((function(e){return e.toLowerCase()===o.toLowerCase()})));return void 0!==i?r(e.headers[i]):void 0!==t.code?r(t.code):void 0!==t.__type?r(t.__type):void 0}}}]);
//# sourceMappingURL=ee1a887a-b7647ad256aa040432b0.js.map