"use strict";(self.webpackChunkojlm=self.webpackChunkojlm||[]).push([[6715],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||o;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4472:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),c=["components"],a={},u="\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u8bf7\u6c42",s={unversionedId:"api/quickstart/http-request",id:"api/quickstart/http-request",isDocsHomePage:!1,title:"\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u8bf7\u6c42",description:"1. \u9996\u5148\u8fdb\u5165\u81ea\u5df1\u7684\u9879\u76ee,\u5982\uff1a\u5047\u8bbe\u5728 indigo/docs \u9879\u76ee\u4e0b\u9762.",source:"@site/docs/api/quickstart/http-request.md",sourceDirName:"api/quickstart",slug:"/api/quickstart/http-request",permalink:"/docs/api/quickstart/http-request",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u63a7\u5236\u8bf7\u6c42\u53d1\u9001\u5230\u4ec0\u4e48\u73af\u5883",permalink:"/docs/api/quickstart/env-proxy"},next:{title:"\u521b\u5efa\u4e00\u4e2a\u4efb\u52a1",permalink:"/docs/api/quickstart/job"}},p=[{value:"1. \u9996\u5148\u8fdb\u5165\u81ea\u5df1\u7684\u9879\u76ee,\u5982\uff1a\u5047\u8bbe\u5728 <code>indigo/docs</code> \u9879\u76ee\u4e0b\u9762.",id:"1-\u9996\u5148\u8fdb\u5165\u81ea\u5df1\u7684\u9879\u76ee\u5982\u5047\u8bbe\u5728-indigodocs-\u9879\u76ee\u4e0b\u9762",children:[]},{value:"2. \u586b\u5199 URL <code>www.baidu.com</code>,\u5e76\u70b9\u51fb\u53d1\u9001\u6309\u94ae\u83b7\u5f97\u54cd\u5e94",id:"2-\u586b\u5199-url-wwwbaiducom\u5e76\u70b9\u51fb\u53d1\u9001\u6309\u94ae\u83b7\u5f97\u54cd\u5e94",children:[]},{value:"3. \u586b\u5199\u7528\u4f8b\u540d\u79f0,\u70b9\u51fb <code>\u4fdd\u5b58</code> \u5c31\u521b\u5efa\u5b8c\u6210",id:"3-\u586b\u5199\u7528\u4f8b\u540d\u79f0\u70b9\u51fb-\u4fdd\u5b58-\u5c31\u521b\u5efa\u5b8c\u6210",children:[]},{value:"4. \u521b\u5efa\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2aID,\u7ee7\u7eed\u7f16\u8f91\u4f1a\u81ea\u52a8\u4fdd\u5b58\u5230\u8fd9\u4e2a\u7528\u4f8b\u4e0a,\u53e6\u5b58\u4e3a\u5219\u751f\u6210\u65b0\u7684\u7528\u4f8b\u8bf7\u6c42",id:"4-\u521b\u5efa\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2aid\u7ee7\u7eed\u7f16\u8f91\u4f1a\u81ea\u52a8\u4fdd\u5b58\u5230\u8fd9\u4e2a\u7528\u4f8b\u4e0a\u53e6\u5b58\u4e3a\u5219\u751f\u6210\u65b0\u7684\u7528\u4f8b\u8bf7\u6c42",children:[]}],l={toc:p};function d(e){var t=e.components,a=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u8bf7\u6c42"},"\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u8bf7\u6c42"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(5187).Z})),(0,o.kt)("h2",{id:"1-\u9996\u5148\u8fdb\u5165\u81ea\u5df1\u7684\u9879\u76ee\u5982\u5047\u8bbe\u5728-indigodocs-\u9879\u76ee\u4e0b\u9762"},"1. \u9996\u5148\u8fdb\u5165\u81ea\u5df1\u7684\u9879\u76ee,\u5982\uff1a\u5047\u8bbe\u5728 ",(0,o.kt)("inlineCode",{parentName:"h2"},"indigo/docs")," \u9879\u76ee\u4e0b\u9762."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(7434).Z})),(0,o.kt)("h2",{id:"2-\u586b\u5199-url-wwwbaiducom\u5e76\u70b9\u51fb\u53d1\u9001\u6309\u94ae\u83b7\u5f97\u54cd\u5e94"},"2. \u586b\u5199 URL ",(0,o.kt)("inlineCode",{parentName:"h2"},"www.baidu.com"),",\u5e76\u70b9\u51fb\u53d1\u9001\u6309\u94ae\u83b7\u5f97\u54cd\u5e94"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(8663).Z})),(0,o.kt)("h2",{id:"3-\u586b\u5199\u7528\u4f8b\u540d\u79f0\u70b9\u51fb-\u4fdd\u5b58-\u5c31\u521b\u5efa\u5b8c\u6210"},"3. \u586b\u5199\u7528\u4f8b\u540d\u79f0,\u70b9\u51fb ",(0,o.kt)("inlineCode",{parentName:"h2"},"\u4fdd\u5b58")," \u5c31\u521b\u5efa\u5b8c\u6210"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(1035).Z})),(0,o.kt)("h2",{id:"4-\u521b\u5efa\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2aid\u7ee7\u7eed\u7f16\u8f91\u4f1a\u81ea\u52a8\u4fdd\u5b58\u5230\u8fd9\u4e2a\u7528\u4f8b\u4e0a\u53e6\u5b58\u4e3a\u5219\u751f\u6210\u65b0\u7684\u7528\u4f8b\u8bf7\u6c42"},"4. \u521b\u5efa\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2aID,\u7ee7\u7eed\u7f16\u8f91\u4f1a\u81ea\u52a8\u4fdd\u5b58\u5230\u8fd9\u4e2a\u7528\u4f8b\u4e0a,\u53e6\u5b58\u4e3a\u5219\u751f\u6210\u65b0\u7684\u7528\u4f8b\u8bf7\u6c42"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(9712).Z})))}d.isMDXComponent=!0},5187:function(e,t,r){t.Z=r.p+"assets/images/start-5cd0864a9825c967bfba7c15cc604e52.gif"},1035:function(e,t,r){t.Z=r.p+"assets/images/save-a5ed3b15601029311cd7fd856f7fb3fe.png"},9712:function(e,t,r){t.Z=r.p+"assets/images/saved-40e35a4d5206a18d24054339277bb657.png"},7434:function(e,t,r){t.Z=r.p+"assets/images/start-f46ec1400430355e2a3374b0cda74533.png"},8663:function(e,t,r){t.Z=r.p+"assets/images/url-879c22c056618ee47daeba289fc2bdda.png"}}]);