"use strict";(self.webpackChunkojlm=self.webpackChunkojlm||[]).push([[189],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7586:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={sidebar_position:6},p="Grpc \u793a\u4f8b",l={unversionedId:"pea/grpc",id:"pea/grpc",isDocsHomePage:!1,title:"Grpc \u793a\u4f8b",description:"\u538b\u6d4b\u811a\u672c",source:"@site/docs/pea/grpc.md",sourceDirName:"pea",slug:"/pea/grpc",permalink:"/docs/pea/grpc",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"pea",previous:{title:"Dubbo \u793a\u4f8b",permalink:"/docs/pea/dubbo"},next:{title:"\u53d1\u538b\u6a21\u578b",permalink:"/docs/pea/injections"}},u=[{value:"\u538b\u6d4b\u811a\u672c",id:"\u538b\u6d4b\u811a\u672c",children:[]},{value:"\u62a5\u544a",id:"\u62a5\u544a",children:[]}],s={toc:u};function d(e){var n=e.components,i=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grpc-\u793a\u4f8b"},"Grpc \u793a\u4f8b"),(0,a.kt)("h2",{id:"\u538b\u6d4b\u811a\u672c"},"\u538b\u6d4b\u811a\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import asura.pea.gatling.PeaSimulation\nimport asura.pea.grpc.Predef._\nimport io.gatling.core.Predef._\nimport io.grpc.netty.NettyChannelBuilder\nimport io.grpc.{Context, Metadata, Status}\nimport pea.grpc.hello.{HelloRequest, HelloServiceGrpc}\n\nclass HelloGrpcSimulation extends PeaSimulation {\n  override val description: String =\n    """\n      |Grpc simulation example\n      |""".stripMargin\n  val grpcProtocol = grpc(\n    NettyChannelBuilder.forAddress("localhost", 50051).usePlaintext()\n  )\n  val TokenHeaderKey = Metadata.Key.of("token", Metadata.ASCII_STRING_MARSHALLER)\n  val TokenContextKey = Context.key[String]("token")\n  val scn = scenario("grpc")\n    .exec(\n      grpc("Hello Pea")\n        .rpc(HelloServiceGrpc.METHOD_SAY_HELLO)\n        .payload(HelloRequest.defaultInstance.updateExpr(\n          _.greeting :~ "pea"\n        ))\n        .header(TokenHeaderKey)("token")\n        .check(\n          statusCode is Status.Code.OK,\n        )\n        .extract(_.reply.some)(\n          _.is("hi, pea")\n        )\n    )\n  setUp(\n    scn.inject(atOnceUsers(10000))\n  ).protocols(grpcProtocol)\n}\n')),(0,a.kt)("h2",{id:"\u62a5\u544a"},"\u62a5\u544a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(1394).Z})))}d.isMDXComponent=!0},1394:function(e,n,t){n.Z=t.p+"assets/images/grpc-report-f6398766f724c8914c9dc63c85f0eaba.png"}}]);