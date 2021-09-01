"use strict";(self.webpackChunkojlm=self.webpackChunkojlm||[]).push([[3400],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,s=m["".concat(p,".").concat(d)]||m[d]||k[d]||l;return n?r.createElement(s,a(a({ref:t},c),{},{components:n})):r.createElement(s,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8306:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],i={sidebar_position:9},p="\u57fa\u672c\u6982\u5ff5",u={unversionedId:"pea/concepts",id:"pea/concepts",isDocsHomePage:!1,title:"\u57fa\u672c\u6982\u5ff5",description:"\u4ee5 Gatling (Async Scala-Akka-Netty based Load Test Tool) \u4f5c\u4e3a\u5e95\u5c42\u6267\u884c\u5f15\u64ce.",source:"@site/docs/pea/concepts.md",sourceDirName:"pea",slug:"/pea/concepts",permalink:"/docs/pea/concepts",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"pea",previous:{title:"\u8d44\u6e90\u7ba1\u7406",permalink:"/docs/pea/resources"},next:{title:"\u72b6\u6001\u6a21\u578b",permalink:"/docs/pea/model"}},c=[{value:"<code>Worker</code> \u89d2\u8272",id:"worker-\u89d2\u8272",children:[{value:"\u72b6\u6001",id:"\u72b6\u6001",children:[]}]},{value:"<code>Reporter</code> \u89d2\u8272",id:"reporter-\u89d2\u8272",children:[{value:"\u4efb\u52a1\u72b6\u6001",id:"\u4efb\u52a1\u72b6\u6001",children:[]}]}],k={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,l.kt)("p",null,"\u4ee5 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/gatling/gatling"},"Gatling")," (Async Scala-Akka-Netty based Load Test Tool) \u4f5c\u4e3a\u5e95\u5c42\u6267\u884c\u5f15\u64ce."),(0,l.kt)("h2",{id:"worker-\u89d2\u8272"},(0,l.kt)("inlineCode",{parentName:"h2"},"Worker")," \u89d2\u8272"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5355\u5f15\u64ce\u5b9e\u4f8b, \u6267\u884c\u5177\u4f53\u7684\u4efb\u52a1, \u540c\u4e00\u65f6\u95f4\u53ea\u80fd\u4e00\u4e2a\u4efb\u52a1\u5904\u4e8e\u6267\u884c\u72b6\u6001.")),(0,l.kt)("h3",{id:"\u72b6\u6001"},"\u72b6\u6001"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"/${ROOT}/workers/${node}")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"idle"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7a7a\u95f2\u72b6\u6001.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"running"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u4efb\u52a1\u4e2d.")),(0,l.kt)("h2",{id:"reporter-\u89d2\u8272"},(0,l.kt)("inlineCode",{parentName:"h2"},"Reporter")," \u89d2\u8272"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u63a7\u5236\u591a\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Worker")," \u8282\u70b9, \u6267\u884c\u4efb\u52a1\u6216\u505c\u6b62\u4efb\u52a1, \u76d1\u63a7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Worker")," \u72b6\u6001, \u6536\u96c6\u6570\u636e, \u751f\u6210\u805a\u5408\u62a5\u544a.")),(0,l.kt)("h3",{id:"\u4efb\u52a1\u72b6\u6001"},"\u4efb\u52a1\u72b6\u6001"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"/${ROOT}/jobs/${runId}. ",(0,l.kt)("inlineCode",{parentName:"p"},"reporter")," \u53ef\u4ee5\u540c\u65f6\u63a7\u5236\u591a\u4e2a\u4efb\u52a1\u7684\u6267\u884c, \u6bcf\u4e2a\u4efb\u52a1\u6709\u4ee5\u4e0b\u8fd9\u4e9b\u72b6\u6001.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"running"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"reporting"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"finished")))),(0,l.kt)("h4",{id:"\u4efb\u52a1\u4e2d\u7684-workers-\u72b6\u6001"},"\u4efb\u52a1\u4e2d\u7684 Workers \u72b6\u6001"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53d1\u9001\u4efb\u52a1\u65f6\u7684\u54cd\u5e94, \u5bf9\u5e94\u7684\u72b6\u6001")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"idle"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u521d\u59cb\u72b6\u6001")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"running"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53d1\u9001\u8d1f\u8f7d\u6210\u529f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ill")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u53d1\u9001\u8d1f\u8f7d\u5931\u8d25"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"gathering")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"worker \u6267\u884c\u8d1f\u8f7d\u5b8c\u6210, \u6536\u96c6\u62a5\u544a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"finished"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6536\u96c6\u62a5\u544a\u5b8c\u6210")))}m.isMDXComponent=!0}}]);