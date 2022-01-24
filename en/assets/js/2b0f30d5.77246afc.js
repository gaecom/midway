"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9796],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),k=a,u=m["".concat(p,".").concat(k)]||m[k]||d[k]||o;return t?r.createElement(u,i(i({ref:n},s),{},{components:t})):r.createElement(u,i({ref:n},s))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6715:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={title:"\u7ec4\u4ef6\u5f00\u53d1"},p=void 0,c={unversionedId:"component_development",id:"component_development",title:"\u7ec4\u4ef6\u5f00\u53d1",description:"\u672c\u6587\u6863\u6765\u6e90\u4e8e v2\uff0c\u8fd8\u5728\u91cd\u65b0\u7f16\u5199\u4e2d\u3002",source:"@site/docs/component_development.md",sourceDirName:".",slug:"/component_development",permalink:"/en/docs/component_development",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/component_development.md",tags:[],version:"current",frontMatter:{title:"\u7ec4\u4ef6\u5f00\u53d1"},sidebar:"common",previous:{title:"\u6269\u5c55\u4e0a\u4e0b\u6587\u5b9a\u4e49",permalink:"/en/docs/context_definition"},next:{title:"\u6846\u67b6\u6269\u5c55",permalink:"/en/docs/framework_development"}},s=[{value:"\u811a\u624b\u67b6",id:"\u811a\u624b\u67b6",children:[],level:2},{value:"\u7ec4\u4ef6\u76ee\u5f55",id:"\u7ec4\u4ef6\u76ee\u5f55",children:[],level:2},{value:"\u7ec4\u4ef6\u7ea6\u5b9a",id:"\u7ec4\u4ef6\u7ea6\u5b9a",children:[],level:2},{value:"\u5f00\u53d1\u7ec4\u4ef6\u7684\u65b9\u5f0f",id:"\u5f00\u53d1\u7ec4\u4ef6\u7684\u65b9\u5f0f",children:[{value:"\u65b0\u4ed3\u5e93\u5f00\u53d1\u7ec4\u4ef6",id:"\u65b0\u4ed3\u5e93\u5f00\u53d1\u7ec4\u4ef6",children:[],level:3},{value:"\u5e94\u7528\u4e2d\u5f00\u53d1\u7ec4\u4ef6",id:"\u5e94\u7528\u4e2d\u5f00\u53d1\u7ec4\u4ef6",children:[{value:"\u4f7f\u7528 lerna",id:"\u4f7f\u7528-lerna",children:[],level:4},{value:"\u975e lerna",id:"\u975e-lerna",children:[],level:4}],level:3}],level:2},{value:"\u5f00\u53d1\u7ec4\u4ef6",id:"\u5f00\u53d1\u7ec4\u4ef6",children:[{value:"\u7ec4\u4ef6\u4f5c\u7528\u57df\uff08\u547d\u540d\u7a7a\u95f4\uff09",id:"\u7ec4\u4ef6\u4f5c\u7528\u57df\u547d\u540d\u7a7a\u95f4",children:[],level:3},{value:"\u7ec4\u4ef6\u4f7f\u7528\u81ea\u8eab\u670d\u52a1",id:"\u7ec4\u4ef6\u4f7f\u7528\u81ea\u8eab\u670d\u52a1",children:[{value:"1\u3001\u4f7f\u7528\u7ec4\u4ef6\u81ea\u5df1 <code>@Provide</code>\xa0 \u7684\u60c5\u51b5",id:"1\u4f7f\u7528\u7ec4\u4ef6\u81ea\u5df1-provide-\u7684\u60c5\u51b5",children:[],level:4},{value:"2\u3001\u7ec4\u4ef6\u4f7f\u7528\u81ea\u5df1 <code>registerObject</code>\xa0 \u7684\u60c5\u51b5",id:"2\u7ec4\u4ef6\u4f7f\u7528\u81ea\u5df1-registerobject-\u7684\u60c5\u51b5",children:[],level:4},{value:"3\u3001\u7ec4\u4ef6\u4f7f\u7528\u81ea\u5df1 <code>providerWrapper</code>\xa0 \u51fa\u6765\u7684\u65b9\u6cd5",id:"3\u7ec4\u4ef6\u4f7f\u7528\u81ea\u5df1-providerwrapper-\u51fa\u6765\u7684\u65b9\u6cd5",children:[],level:4}],level:3},{value:"\u7ec4\u4ef6\u6ce8\u5165\u5168\u5c40\u5bf9\u8c61",id:"\u7ec4\u4ef6\u6ce8\u5165\u5168\u5c40\u5bf9\u8c61",children:[],level:3},{value:"\u7ec4\u4ef6\u4e1a\u52a1\u914d\u7f6e",id:"\u7ec4\u4ef6\u4e1a\u52a1\u914d\u7f6e",children:[],level:3},{value:"\u7ec4\u4ef6\u751f\u547d\u5468\u671f",id:"\u7ec4\u4ef6\u751f\u547d\u5468\u671f",children:[],level:3}],level:2},{value:"\u4f7f\u7528\u7ec4\u4ef6",id:"\u4f7f\u7528\u7ec4\u4ef6",children:[{value:"1\u3001\u5916\u90e8\u4f7f\u7528\u7ec4\u4ef6 <code>@Provide</code>\xa0 \u7684\u7c7b",id:"1\u5916\u90e8\u4f7f\u7528\u7ec4\u4ef6-provide-\u7684\u7c7b",children:[],level:3},{value:"2\u3001\u5916\u90e8\u4f7f\u7528\u7ec4\u4ef6 <code>registerObject</code>\xa0 \u7684\u5bf9\u8c61",id:"2\u5916\u90e8\u4f7f\u7528\u7ec4\u4ef6-registerobject-\u7684\u5bf9\u8c61",children:[],level:3},{value:"3\u3001\u5916\u90e8\u4f7f\u7528\u7ec4\u4ef6 <code>providerWrapper</code> \u7684\u65b9\u6cd5",id:"3\u5916\u90e8\u4f7f\u7528\u7ec4\u4ef6-providerwrapper-\u7684\u65b9\u6cd5",children:[],level:3}],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2}],d={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u672c\u6587\u6863\u6765\u6e90\u4e8e v2\uff0c\u8fd8\u5728\u91cd\u65b0\u7f16\u5199\u4e2d\u3002"))),(0,o.kt)("p",null,"\u7ec4\u4ef6\uff08Component\uff09\u662f\u4e00\u4e2a\u53ef\u590d\u7528\u4e0e\u591a\u6846\u67b6\u7684\u6a21\u5757\u5305\uff0c\u4e00\u822c\u7528\u4e8e\u51e0\u79cd\u573a\u666f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1\u3001\u5305\u88c5\u5f80\u4e0b\u6e38\u8c03\u7528\u7684\u4ee3\u7801\uff0c\u5305\u88f9\u4e09\u65b9\u6a21\u5757\u7b80\u5316\u4f7f\u7528\uff0c\u6bd4\u5982 orm\uff08\u6570\u636e\u5e93\u8c03\u7528\uff09\uff0cswagger\uff08\u7b80\u5316\u4f7f\u7528\uff09 \u7b49"),(0,o.kt)("li",{parentName:"ul"},"2\u3001\u53ef\u590d\u7528\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u6bd4\u5982\u62bd\u8c61\u51fa\u6765\u7684\u516c\u5171 Controller\uff0cService \u7b49")),(0,o.kt)("p",null,"\u7ec4\u4ef6\u53ef\u4ee5\u672c\u5730\u52a0\u8f7d\uff0c\u4e5f\u53ef\u4ee5\u6253\u5305\u5230\u4e00\u8d77\u53d1\u5e03\u6210\u4e00\u4e2a \xa0npm \u5305\u3002\u7ec4\u4ef6\u53ef\u4ee5\u5728 midway v2/Serverless \u4e2d\u4f7f\u7528\u3002\u4f60\u53ef\u4ee5\u5c06\u590d\u7528\u7684\u4e1a\u52a1\u4ee3\u7801\uff0c\u6216\u8005\u529f\u80fd\u6a21\u5757\u90fd\u653e\u5230\u7ec4\u4ef6\u4e2d\u8fdb\u884c\u7ef4\u62a4\u3002\u51e0\u4e4e\u6240\u6709\u7684 Midway \u901a\u7528\u80fd\u529b\u90fd\u53ef\u4ee5\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u914d\u7f6e\uff0c\u751f\u547d\u5468\u671f\uff0c\u63a7\u5236\u5668\uff0c\u62e6\u622a\u5668\u7b49\u3002"),(0,o.kt)("p",null,"\u8bbe\u8ba1\u7ec4\u4ef6\u7684\u65f6\u5019\u5c3d\u53ef\u80fd\u7684\u9762\u5411\u6240\u6709\u7684\u4e0a\u5c42\u6846\u67b6\u573a\u666f\uff0c\u6240\u4ee5\u6211\u4eec\u5c3d\u53ef\u80fd\u53ea\u4f9d\u8d56 ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/core")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/decorator")," \u3002"),(0,o.kt)("h2",{id:"\u811a\u624b\u67b6"},"\u811a\u624b\u67b6"),(0,o.kt)("p",null,"\u521d\u59cb\u5316\u811a\u624b\u67b6\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c\u662f npm v6\n$ npm init midway --type=component hello2\n\n# \u5982\u679c\u662f npm v7\n$ npm init midway -- --type=component hello2\n\n$ cd hello2\n")),(0,o.kt)("p",null,"\u7136\u540e\u7ec4\u4ef6\u5f00\u53d1\uff0c\u5e76\u53d1\u5e03\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run build && npm publish // \u7f16\u8bd1\u5e76\u53d1\u5e03\u5bf9\u5e94\u7684component\n")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u76ee\u5f55"},"\u7ec4\u4ef6\u76ee\u5f55"),(0,o.kt)("p",null,'\u7ec4\u4ef6\u7684\u7ed3\u6784\u548c midway \u7684\u63a8\u8350\u76ee\u5f55\u7ed3\u6784\u4e00\u6837\uff0c\u7ec4\u4ef6\u7684\u76ee\u5f55\u7ed3\u6784\u6ca1\u6709\u7279\u522b\u660e\u786e\u7684\u89c4\u8303\uff0c\u548c\u5e94\u7528\u6216\u8005\u51fd\u6570\u4fdd\u6301\u4e00\u81f4\u5373\u53ef\u3002\u7b80\u5355\u7684\u7406\u89e3\uff0c\u7ec4\u4ef6\u5c31\u662f\u4e00\u4e2a \u201c\u8ff7\u4f60\u5e94\u7528"\u3002'),(0,o.kt)("p",null,"\u4e00\u4e2a\u63a8\u8350\u7684\u7ec4\u4ef6\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 index.ts                                // \u5165\u53e3\u5bfc\u51fa\u6587\u4ef6\n\u2502   \u251c\u2500\u2500 configuration.ts                // \u7ec4\u4ef6\u884c\u4e3a\u914d\u7f6e\n\u2502   \u2514\u2500\u2500 service                 // \u903b\u8f91\u4ee3\u7801\n\u2502       \u2514\u2500\u2500 bookService.ts\n\u251c\u2500\u2500 test\n\u2514\u2500\u2500 tsconfig.json\n")),(0,o.kt)("p",null,"\u5bf9\u4e8e\u7ec4\u4ef6\u6765\u8bf4\uff0c\u552f\u4e00\u7684\u89c4\u8303\u662f\u5165\u53e3\u5bfc\u51fa\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Configuration"),"\xa0 \u5c5e\u6027\uff0c\u5176\u5fc5\u987b\u662f\u4e00\u4e2a\u5e26\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Configuration"),"\xa0 \u88c5\u9970\u5668\u7684 Class\u3002"),(0,o.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u6211\u4eec\u7684\u4ee3\u7801\u4e3a TypeScript \u6807\u51c6\u76ee\u5f55\u7ed3\u6784\uff0c\u548c Midway \u4f53\u7cfb\u76f8\u540c\u3002\u4e0d\u540c\u7684\u662f\uff0c\u7531\u4e8e\u662f\u4e00\u4e2a\u989d\u5916\u7684\u5305\uff0c\u9700\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.ts"),"\xa0 \u6587\u4ef6\u4f5c\u4e3a\u5165\u53e3\u5bfc\u51fa\u5185\u5bb9\u3002"),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u7ea6\u5b9a"},"\u7ec4\u4ef6\u7ea6\u5b9a"),(0,o.kt)("p",null,"\u7ec4\u4ef6\u548c\u5e94\u7528\u672c\u8eab\u7565\u5fae\u6709\u4e9b\u4e0d\u540c\uff0c\u5dee\u5f02\u4e3b\u8981\u5728\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u9762\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1\u3001\u7ec4\u4ef6\u7684\u4ee3\u7801\u9700\u8981\u5bfc\u51fa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"li"},"Configuration")," \u5c5e\u6027\uff0c\u5176\u5fc5\u987b\u662f\u4e00\u4e2a\u5e26\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"@Configuration")," \u88c5\u9970\u5668\u7684 Class\uff0c\u7528\u4e8e\u914d\u7f6e\u7ec4\u4ef6\u81ea\u8eab\u80fd\u529b"),(0,o.kt)("li",{parentName:"ul"},"2\u3001\u6240\u6709 ",(0,o.kt)("strong",{parentName:"li"},"\u663e\u5f0f\u5bfc\u51fa\u7684\u4ee3\u7801 "),"\u624d\u4f1a\u88ab\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u52a0\u8f7d")),(0,o.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/index.ts\nexport { AutoConfiguration as Configuration } from './configuration';\nexport * from './controller/user';\nexport * from './controller/api';\nexport * from './service/user';\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8fd9\u6837\u9879\u76ee\u4e2d\u53ea\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"controller/user")," \uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"controller/api")," \uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"service/user")," \u8fd9\u4e09\u4e2a\u6587\u4ef6\u624d\u4f1a\u88ab\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u626b\u63cf\u548c\u52a0\u8f7d\u3002"))),(0,o.kt)("p",null,"\u4ee5\u53ca\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\xa0 \u4e2d\u6307\u5b9a main \u8def\u5f84\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'  "main": "dist/index"\n')),(0,o.kt)("p",null,"\u8fd9\u6837\u7ec4\u4ef6\u5c31\u53ef\u4ee5\u88ab\u4e0a\u5c42\u573a\u666f\u4f9d\u8d56\u52a0\u8f7d\u4e86\u3002"),(0,o.kt)("h2",{id:"\u5f00\u53d1\u7ec4\u4ef6\u7684\u65b9\u5f0f"},"\u5f00\u53d1\u7ec4\u4ef6\u7684\u65b9\u5f0f"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u65b0\u5efa\u4e00\u4e2a\u9879\u76ee\uff0c\u5c06\u5b83\u6539\u9020\u4e3a\u7ec4\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u5728\u539f\u6709\u9879\u76ee\u4e2d\u5f00\u53d1\uff0c\u76f4\u5230\u7ec4\u5efa\u5b8c\u6210\u540e\u518d\u53d1\u5e03\u5230\u72ec\u7acb\u7684\u4ed3\u5e93\u3002"),(0,o.kt)("h3",{id:"\u65b0\u4ed3\u5e93\u5f00\u53d1\u7ec4\u4ef6"},"\u65b0\u4ed3\u5e93\u5f00\u53d1\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u4ee3\u7801\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 src                                                         // \u6e90\u7801\u76ee\u5f55\n\u2502   \u251c\u2500\u2500 service\n\u2502   \u2502    \u2514\u2500\u2500 bookService.ts\n\u2502   \u251c\u2500\u2500 configuration.ts                        // \u7ec4\u4ef6\u884c\u4e3a\u914d\u7f6e\n\u2502   \u2514\u2500\u2500 index.ts                                        // \u7ec4\u4ef6\u5bfc\u51fa\u5165\u53e3\n\u2514\u2500\u2500 package.json\n\u251c\u2500\u2500 test\n\u2514\u2500\u2500 tsconfig.json\n")),(0,o.kt)("p",null,"\u7ec4\u4ef6\u884c\u4e3a\u914d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\n\n@Configuration()\nexport class BookConfiguration {}\n")),(0,o.kt)("p",null,"\u5728\u7ec4\u4ef6\u7684\u5165\u53e3\u5bfc\u51fa ",(0,o.kt)("inlineCode",{parentName:"p"},"Configuration")," \u5c5e\u6027\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/index.ts\nexport { BookConfiguration as Configuration } from './configuration`;\n\n")),(0,o.kt)("h3",{id:"\u5e94\u7528\u4e2d\u5f00\u53d1\u7ec4\u4ef6"},"\u5e94\u7528\u4e2d\u5f00\u53d1\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna"},"lerna"),"\uff0c\u4ee5\u53ca\u5f00\u542f lerna \u7684 hoist \u6a21\u5f0f\u6765\u7f16\u5199\u7ec4\u4ef6\u3002\u5982\u679c\u60f3\u5728\u975e lerna \u7684\u573a\u666f\u573a\u666f\u4e0b\u5f00\u53d1\u7ec4\u4ef6\uff0c\u8bf7\u4fdd\u8bc1\u7ec4\u4ef6\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src"),"\xa0 \u76ee\u5f55\u4e0b\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u52a0\u8f7d\u5931\u8d25\u7684\u60c5\u51b5\u3002"),(0,o.kt)("h4",{id:"\u4f7f\u7528-lerna"},"\u4f7f\u7528 lerna"),(0,o.kt)("p",null,"\u4f7f\u7528 lerna \u5f00\u53d1\u76f8\u5bf9\u6bd4\u8f83\u7b80\u5355\uff0c\u5177\u4f53\u7684\u76ee\u5f55\u7ed3\u6784\u7c7b\u4f3c\u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 src\n\u251c\u2500\u2500 packages/\n\u2502    \u251c\u2500\u2500 component-A\n\u2502    \u2502   \u2514\u2500\u2500 package.json\n\u2502    \u251c\u2500\u2500 component-B\n\u2502    \u2502   \u2514\u2500\u2500 package.json\n\u2502    \u251c\u2500\u2500 component-C\n\u2502    \u2502   \u2514\u2500\u2500 package.json\n\u2502    \u2514\u2500\u2500 web\n\u2502        \u2514\u2500\u2500 package.json\n\u251c\u2500\u2500 lerna.json\n\u2514\u2500\u2500 package.json\n")),(0,o.kt)("h4",{id:"\u975e-lerna"},"\u975e lerna"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u7ec4\u4ef6\u5f00\u53d1\u65b9\u5f0f\uff0c\u793a\u4f8b\u7ed3\u6784\u4e3a\u5728\u5e94\u7528\u4ee3\u7801\u5f00\u53d1\u65f6\u540c\u65f6\u5f00\u53d1\u4e24\u4e2a\u7ec4\u4ef6\uff0c\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4f60\u559c\u6b22\u7684\u76ee\u5f55\u7ed3\u6784\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src                                                                                 // \u6e90\u7801\u76ee\u5f55\n\u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u251c\u2500\u2500 book                                                // book \u7ec4\u4ef6\u4ee3\u7801\n\u2502   \u2502   \u2502    \u251c\u2500\u2500 src\n\u2502   \u2502   \u2502    \u2502   \u251c\u2500\u2500 service\n\u2502   \u2502   \u2502    \u2502   \u2502   \u2514\u2500\u2500 bookService.ts\n\u2502   \u2502   \u2502    \u2502   \u251c\u2500\u2500 configuration.ts\n\u2502   \u2502   \u2502    \u2502   \u2514\u2500\u2500 index.ts\n\u2502   \u2502   \u2502    \u2514\u2500\u2500 package.json\n\u2502   \u2502   \u2502\n\u2502   \u2502   \u2514\u2500\u2500 school\n\u2502   \u2502        \u251c\u2500\u2500 src\n\u2502   \u2502        \u2502   \u251c\u2500\u2500 service                        // school \u7ec4\u4ef6\u4ee3\u7801\n\u2502   \u2502        \u2502   \u2502    \u2514\u2500\u2500 schoolService.ts\n\u2502   \u2502        \u2502   \u2514\u2500\u2500 configuration.ts\n\u2502   \u2502        \u2514\u2500\u2500 package.json\n\u2502   \u2502\n\u2502   \u251c\u2500\u2500 configuration.ts             // \u5e94\u7528\u884c\u4e3a\u914d\u7f6e\u6587\u4ef6\n\u2502   \u2514\u2500\u2500 controller             // \u5e94\u7528\u8def\u7531\u76ee\u5f55\n\u251c\u2500\u2500 test\n\u2514\u2500\u2500 tsconfig.json\n")),(0,o.kt)("p",null,"\u7ec4\u4ef6\u884c\u4e3a\u914d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/components/book/src/bookConfiguration.ts\nimport { Configuration } from '@midwayjs/decorator';\n\n@Configuration()\nexport class BookConfiguration {}\n")),(0,o.kt)("p",null,"\u4e3a\u4e86\u8ba9\u7ec4\u4ef6\u80fd\u5bfc\u51fa\uff0c\u6211\u4eec\u9700\u8981\u5728\u7ec4\u4ef6\u7684\u5165\u53e3 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/components/book/src/index.ts")," \u5bfc\u51fa ",(0,o.kt)("inlineCode",{parentName:"p"},"Configuration")," \u5c5e\u6027\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/components/book/src/index.ts\nexport { BookConfiguration as Configuration } from './bookConfiguration/src`;\n\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'\u6ce8\u610f\uff0c\u8fd9\u91cc\u5f15\u7528\u7684\u5730\u65b9\u662f "./xxxx/src"\uff0c\u662f\u56e0\u4e3a\u4e00\u822c\u6211\u4eec package.json \u4e2d\u7684 main \u5b57\u6bb5\u6307\u5411\u4e86 dist/index\uff0c\u5982\u679c\u5e0c\u671b\u4ee3\u7801\u4e0d\u4fee\u6539\uff0c\u90a3\u4e48 main \u5b57\u6bb5\u8981\u6307\u5411 src/index\uff0c\u4e14\u5728\u53d1\u5e03\u65f6\u8bb0\u5f97\u4fee\u6539\u56de dist\u3002'),(0,o.kt)("p",{parentName:"div"},"\u5c06\u7ec4\u4ef6\u5f15\u5165\u7684\u76ee\u5f55\u6307\u5411 src \uff0c\u662f\u4e3a\u4e86\u80fd\u5728\u4fdd\u5b58\u662f\u81ea\u52a8\u751f\u6548\uff08\u91cd\u542f\uff09\u3002"))),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u5728\u65b0\u7248\u672c\u53ef\u80fd\u4f1a\u51fa\u73b0\u626b\u63cf\u51b2\u7a81\u7684\u95ee\u9898\u3002\u53ef\u4ee5\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u7684\u4f9d\u8d56\u6ce8\u5165\u51b2\u7a81\u68c0\u67e5\u529f\u80fd\u5173\u95ed\u3002"),(0,o.kt)("h2",{id:"\u5f00\u53d1\u7ec4\u4ef6"},"\u5f00\u53d1\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u4e3e\u4e00\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u73b0\u5728\u8981\u628a\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"BookService")," \u653e\u5230\u7ec4\u4ef6\u4e2d\uff0c\u8ba9\u5176\u4ed6\u573a\u666f\u7684\u4ee3\u7801\u590d\u7528\u3002"),(0,o.kt)("p",null,"\u7ec4\u4ef6\u7684\u670d\u52a1\u4ee3\u7801\u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/service/bookService\nimport { Provide } from '@midwayjs/decorator';\n\n@Provide()\nexport class BookService {\n  async getBookById(id) {}\n}\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4e00\u4e2a\u7ec4\u4ef6\u4e0d\u4f1a\u4f9d\u8d56\u660e\u786e\u7684\u4e0a\u5c42\u6846\u67b6\uff0c\u4e3a\u4e86\u8fbe\u5230\u5728\u4e0d\u540c\u573a\u666f\u590d\u7528\u7684\u76ee\u7684\uff0c\u53ea\u4f1a\u4f9d\u8d56\u901a\u7528\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/core")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/decorator")))),(0,o.kt)("p",null,"\u7ec4\u4ef6\u7684 npm \u5305\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"midway-component-book"),"\xa0\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\xa0 \u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "name": "midway-component-book",\n  "version": "1.0.0",\n  "main": "dist/index",\n  "typings": "dist/index.d.ts",\n  "files": [\n    "dist/**/*.js",\n    "dist/**/*.d.ts"\n  ],\n  "devDependencies": {\n    "@midwayjs/core": "^2.3.0",\n    "@midwayjs/decorator": "^2.3.0"\n  }\n  ...\n}\n')),(0,o.kt)("h3",{id:"\u7ec4\u4ef6\u4f5c\u7528\u57df\u547d\u540d\u7a7a\u95f4"},"\u7ec4\u4ef6\u4f5c\u7528\u57df\uff08\u547d\u540d\u7a7a\u95f4\uff09"),(0,o.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u7ec4\u4ef6\u7684\u4e1a\u52a1\u4ee3\u7801\u548c\u5176\u4ed6\u7684\u4e1a\u52a1\u4ee3\u7801\u51b2\u7a81\uff0c\u7ec4\u4ef6\u5728\u5bfc\u51fa\u7684\u65f6\u5019\u52a0\u5165\u4e86\u4f5c\u7528\u57df\u7684\u6982\u5ff5\u3002\u9ed8\u8ba4\u7684\u4f5c\u7528\u57df\u4e3a npm \u5305\u540d\uff0c\u5373 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\xa0 \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"\xa0 \u5b57\u6bb5\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Configuration"),"\xa0 \u88c5\u9970\u5668\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace"),"\xa0 \u5b57\u6bb5\u4fee\u6539\u3002\n\u200b"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u540e\u7eed\u6211\u4eec\u5c06\u5f31\u5316\u4f5c\u7528\u57df\u7684\u6982\u5ff5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/bookConfiguration.ts\nimport { Configuration } from '@midwayjs/decorator';\n\n@Configuration({\n  namespace: 'book',\n})\nexport class BookConfiguration {}\n")),(0,o.kt)("p",null,"\u5f15\u7528\u7ec4\u4ef6\u5bfc\u51fa\u7684\u670d\u52a1\u65f6\uff0c\u793a\u4f8b\u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// in project\n// \u8fd9\u91cc\u76f4\u63a5\u5f15\u5165\u7ec4\u4ef6\u5305\u5bfc\u51fa\u7684\u7c7b\u578b\nimport { BookService } from 'midway-component-book';\n\n@Provide()\n@Controller('/user')\nexport class HomeControlelr {\n  @Inject()\n  bookService: BookService; // \u8fd9\u91cc\u76f4\u63a5\u6ce8\u5165\u4e86 book \u8fd9\u4e2a\u4f5c\u7528\u57df\u4e0b\u7684 bookService\n}\n")),(0,o.kt)("h3",{id:"\u7ec4\u4ef6\u4f7f\u7528\u81ea\u8eab\u670d\u52a1"},"\u7ec4\u4ef6\u4f7f\u7528\u81ea\u8eab\u670d\u52a1"),(0,o.kt)("h4",{id:"1\u4f7f\u7528\u7ec4\u4ef6\u81ea\u5df1-provide-\u7684\u60c5\u51b5"},"1\u3001\u4f7f\u7528\u7ec4\u4ef6\u81ea\u5df1 ",(0,o.kt)("inlineCode",{parentName:"h4"},"@Provide"),"\xa0 \u7684\u60c5\u51b5"),(0,o.kt)("p",null,"Midway \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject"),"\xa0 \u88c5\u9970\u5668\u6765\u6ce8\u5165\u5176\u4ed6\u670d\u52a1\uff0c\u5728\u7ec4\u4ef6\u4e2d\uff0c\u53ea\u8981\u662f\u540c\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u76f4\u63a5\u6ce8\u5165\uff0c\u4e0d\u9700\u8981\u589e\u52a0\u4f5c\u7528\u57df\u524d\u7f00\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/user.ts\n// \u8fd9\u91cc\u662f\u7ec4\u4ef6\u4e2d\u7684 user \u63a7\u5236\u5668\n\nimport { BookService } from './service/bookService';\n\n@Provide()\n@Controller('/user')\nexport class UserController {\n  @Inject()\n  bookService: BookService; // \u8fd9\u91cc\u6ce8\u5165\u4e0d\u9700\u8981\u7ec4\u4ef6\u524d\u7f00\uff0c\u4f1a\u81ea\u52a8\u5904\u7406\n\n  @Inject('bookService')\n  bookService: BookService; // \u8fd9\u91cc\u6ce8\u5165\u4e0d\u9700\u8981\u7ec4\u4ef6\u524d\u7f00\uff0c\u4f1a\u81ea\u52a8\u5904\u7406\uff0c\u548c\u4e0a\u9762\u884c\u4e3a\u4e00\u81f4\n}\n")),(0,o.kt)("p",null,"\u6240\u4ee5\uff0c\u7ec4\u4ef6\u5185\u90e8\u8c03\u7528\u7ec4\u4ef6\u81ea\u5df1\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Provide"),"\xa0 \u7684\u670d\u52a1\uff0c\u4e0d\u9700\u8981\u52a0\u4f5c\u7528\u57df\u524d\u7f00\u3002"),(0,o.kt)("h4",{id:"2\u7ec4\u4ef6\u4f7f\u7528\u81ea\u5df1-registerobject-\u7684\u60c5\u51b5"},"2\u3001\u7ec4\u4ef6\u4f7f\u7528\u81ea\u5df1 ",(0,o.kt)("inlineCode",{parentName:"h4"},"registerObject"),"\xa0 \u7684\u60c5\u51b5"),(0,o.kt)("p",null,"\u5982\u679c\u5728 onReady \u7684\u65f6\u5019\u6ce8\u5165\u4e86\u4e09\u65b9\u5bf9\u8c61\uff0c\u90a3\u4e48\u8be5\u4e09\u65b9\u5bf9\u8c61\u5c06\u5c5e\u4e8e\u7ec4\u4ef6\u81ea\u8eab\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Configuration({\n  namespace: 'book',\n})\nexport class BookConfiguration {\n  async onReady(contanier) {\n    contanier.registerObject('aaa', 'bbb'); // \u5bb9\u5668\u5185\u90e8\u4f1a\u7ed1\u5b9a\u5230\u5f53\u524d\u7684\u7ec4\u4ef6\n  }\n}\n")),(0,o.kt)("p",null,"\u5982\u679c\u7ec4\u4ef6\u5185\u90e8\u4f7f\u7528\u65f6\uff0c\u53ef\u4ee5\u65e0\u9700\u589e\u52a0\u524d\u7f00\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\n@Controller('/user')\nexport class UserController {\n  @Inject()\n  aaa: string; // \u8fd9\u91cc\u6ce8\u5165\u4e0d\u9700\u8981\u7ec4\u4ef6\u524d\u7f00\uff0c\u4f1a\u81ea\u52a8\u5904\u7406\n}\n")),(0,o.kt)("h4",{id:"3\u7ec4\u4ef6\u4f7f\u7528\u81ea\u5df1-providerwrapper-\u51fa\u6765\u7684\u65b9\u6cd5"},"3\u3001\u7ec4\u4ef6\u4f7f\u7528\u81ea\u5df1 ",(0,o.kt)("inlineCode",{parentName:"h4"},"providerWrapper"),"\xa0 \u51fa\u6765\u7684\u65b9\u6cd5"),(0,o.kt)("p",null,"\u5982\u679c\u7ec4\u4ef6\u9700\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"providerWrapper"),"\xa0 \u6765\u66b4\u9732\u65b9\u6cd5\uff0c\u8bf7\u589e\u52a0 ",(0,o.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6\u4f5c\u7528\u57df\u524d\u7f00"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { providerWrapper, IMidwayContainer } from '@midwayjs/core';\n\nexport async function contextHandler(container: IMidwayContainer) {}\n\nproviderWrapper([\n  {\n    id: 'book:contextHandler', // \u8fd9\u91cc\u52a1\u5fc5\u589e\u52a0\u7ec4\u4ef6\u524d\u7f00\n    provider: contextHandler,\n    scope: ScopeEnum.Request,\n  },\n]);\n")),(0,o.kt)("p",null,"\u7ec4\u4ef6\u5728\u4f7f\u7528\u81ea\u5df1\u66b4\u9732\u7684\u65b9\u6cd5\u65f6\uff0c\u53ef\u4ee5\u4e0d\u9700\u8981\u524d\u7f00\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\n@Controller('/user')\nexport class UserController {\n  @Inject()\n  contextHandler; // \u8fd9\u91cc\u6ce8\u5165\u4e0d\u9700\u8981\u7ec4\u4ef6\u524d\u7f00\uff0c\u4f1a\u81ea\u52a8\u5904\u7406\n}\n")),(0,o.kt)("h3",{id:"\u7ec4\u4ef6\u6ce8\u5165\u5168\u5c40\u5bf9\u8c61"},"\u7ec4\u4ef6\u6ce8\u5165\u5168\u5c40\u5bf9\u8c61"),(0,o.kt)("p",null,"Midway \u4e0a\u5c42\u6846\u67b6\u9ed8\u8ba4\u4f1a\u6ce8\u5165\u4e00\u4e9b ",(0,o.kt)("a",{parentName:"p",href:"container#stYqU"},"\u5168\u5c40\u5bf9\u8c61"),"\uff08\u6846\u67b6\u3001\u4e1a\u52a1\u6ce8\u5165\u7684\u5bf9\u8c61\uff09\uff0c\u8fd9\u4e9b\u5168\u5c40\u5bf9\u8c61\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u4e0d\u9700\u8981\u4f5c\u7528\u57df\u524d\u7f00\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\u5728\u7ec4\u4ef6\u4e2d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Configuration()\nexport class ContainerLifeCycle {\n  @Inject()\n  baseDir; // \u6ce8\u5165\u5168\u5c40\u5bf9\u8c61\u4e0d\u9700\u8981\u524d\u7f00\n\n  async onReady(container) {\n    container.registerObject('aaa', 'bbbb');\n  }\n}\n")),(0,o.kt)("p",null,"\u7ec4\u4ef6\u7684\u666e\u901a\u903b\u8f91\u4e2d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\nexport class Home {\n  @Inject()\n  baseDir: string;\n\n  @Inject()\n  aaa; // \u5f53\u524d\u7ec4\u4ef6\u6ce8\u518c\u7684\u5c5e\u6027\u4e0d\u9700\u8981\u524d\u7f00\n\n  @Inject()\n  ccc; // \u5168\u5c40\u6ce8\u5165\u7684\u5c5e\u6027\u4e0d\u9700\u8981\u524d\u7f00\n\n  async getData() {}\n}\n")),(0,o.kt)("h3",{id:"\u7ec4\u4ef6\u4e1a\u52a1\u914d\u7f6e"},"\u7ec4\u4ef6\u4e1a\u52a1\u914d\u7f6e"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@Configuration")," \u88c5\u9970\u5668\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"importConfigs")," \u5c5e\u6027\u7528\u4e8e\u6307\u5b9a\u914d\u7f6e\uff0c\u8fd9\u4e2a\u884c\u4e3a\u548c\u4e0a\u5c42\u6846\u67b6\u901a\u7528\u7684",(0,o.kt)("a",{parentName:"p",href:"/docs/env_config"},"\u4e1a\u52a1\u914d\u7f6e"),"\u80fd\u529b\u4e00\u81f4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/bookConfiguration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport { join } from 'path';\n\n@Configuration({\n  namespace: 'book',\n  importConfigs: [\n    join(__dirname, 'config'), // \u53ef\u4ee5\u6307\u5b9a\u6574\u4e2a\u76ee\u5f55\n    join(__dirname, 'anotherConfig/config.default.ts'), // \u53ef\u4ee5\u6307\u5b9a\u5355\u4e2a\u6587\u4ef6\n  ],\n})\nexport class BookConfiguration {}\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"importConfigs"),"\xa0 \u7684\u8def\u5f84\u90fd\u4e3a\u7edd\u5bf9\u8def\u5f84\u3002"))),(0,o.kt)("h3",{id:"\u7ec4\u4ef6\u751f\u547d\u5468\u671f"},"\u7ec4\u4ef6\u751f\u547d\u5468\u671f"),(0,o.kt)("p",null,"\u548c\u6574\u4e2a Midway \u901a\u7528\u7684 ",(0,o.kt)("a",{parentName:"p",href:"lifecycle"},"\u751f\u547d\u5468\u671f\u6269\u5c55")," \u80fd\u529b\u76f8\u540c\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u7ec4\u4ef6"},"\u4f7f\u7528\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u5728\u4efb\u610f\u7684 midway \u7cfb\u5217\u7684\u5e94\u7528\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u540c\u6837\u7684\u65b9\u5f0f\u5f15\u5165\u8fd9\u4e2a\u7ec4\u4ef6\u3002"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u5728\u5e94\u7528\u4e2d\u52a0\u5165\u4f9d\u8d56\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// package.json\n{\n  "dependencies": {\n    "midway-component-book": "*"\n  }\n}\n')),(0,o.kt)("p",null,"\u7136\u540e\uff0c\u5728\u5e94\u7528\uff08\u51fd\u6570\uff09\u4e2d\u5f15\u5165\u8fd9\u4e2a\u7ec4\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u5e94\u7528\u6216\u8005\u51fd\u6570\u7684 src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as book from 'midway-component-book';\n\n@Configuration({\n  imports: [book],\n})\nexport class ContainerLifeCycle {}\n")),(0,o.kt)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u7684\u51c6\u5907\u5de5\u4f5c\u5c31\u505a\u5b8c\u4e86\uff0c\u4e0b\u9762\u5f00\u59cb\u4f7f\u7528\u3002"),(0,o.kt)("h3",{id:"1\u5916\u90e8\u4f7f\u7528\u7ec4\u4ef6-provide-\u7684\u7c7b"},"1\u3001\u5916\u90e8\u4f7f\u7528\u7ec4\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"h3"},"@Provide"),"\xa0 \u7684\u7c7b"),(0,o.kt)("p",null,"\u5047\u5982\u6211\u4eec\u5728\u5e94\u7528\uff08\u51fd\u6570\uff09\u4e2d\u9700\u8981\u7528\u7ec4\u4ef6\u4e2d\u7684\u7c7b\uff0c\u7531\u4e8e\u7ec4\u4ef6\u914d\u7f6e\u4e86\u547d\u540d\u7a7a\u95f4\uff0c\u901a\u8fc7\u4e0b\u9762\u7684\u65b9\u5f0f\u5373\u53ef\u5bfc\u5165\u7ec4\u4ef6\u4e2d\u7684\u4ee3\u7801\u3002"),(0,o.kt)("p",null,"\u76f4\u63a5\u5f15\u5165\u7ec4\u4ef6\u7684\u7c7b\u6ce8\u5165\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject } from '@midwayjs/decorator';\nimport { BookService } from 'midway-component-book';\n\n@Provide()\nexport class Library {\n\n  @Inject();\n  bookService: BookService;\n\n}\n")),(0,o.kt)("p",null,"\u7b49\u4ef7\u4e8e \u201c\u901a\u8fc7\u4f5c\u7528\u57df + \u540d\u5b57\u201d \u6ce8\u5165"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject } from '@midwayjs/decorator';\n\n@Provide()\nexport class Library {\n\n  @Inject('book:bookService');\n  bookService;\n\n}\n")),(0,o.kt)("h3",{id:"2\u5916\u90e8\u4f7f\u7528\u7ec4\u4ef6-registerobject-\u7684\u5bf9\u8c61"},"2\u3001\u5916\u90e8\u4f7f\u7528\u7ec4\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"h3"},"registerObject"),"\xa0 \u7684\u5bf9\u8c61"),(0,o.kt)("p",null,"\u5982\u679c\u7ec4\u4ef6\u4e2d\u6709\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"registerObject"),"\xa0 \u5c06\u5bf9\u8c61\u6ce8\u5165\u5230\u5bb9\u5668\uff0c\u90a3\u4e48\u8be5\u5b9e\u4f8b\u662f\u5c5e\u4e8e\u6b64\u7ec4\u4ef6\u7684\uff0c\u4f7f\u7528\u65f6\u9700\u8981\u589e\u52a0\u524d\u7f00\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u7ec4\u4ef6\u4e2d\n@Configuration({\n  namespace: 'book',\n})\nexport class BookConfiguration {\n  async onReady(contanier) {\n    contanier.registerObject('aaa', 'bbb'); // \u5bb9\u5668\u5185\u90e8\u4f1a\u7ed1\u5b9a\u5230\u5f53\u524d\u7684\u7ec4\u4ef6\n  }\n}\n")),(0,o.kt)("p",null,"\u5e94\u7528\uff08\u51fd\u6570 \uff09\u4ee3\u7801\u4e2d\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject } from '@midwayjs/decorator';\n\n@Provide()\nexport class Library {\n\n  @Inject('book:aaa');\n  aaa: string;\n\n}\n")),(0,o.kt)("h3",{id:"3\u5916\u90e8\u4f7f\u7528\u7ec4\u4ef6-providerwrapper-\u7684\u65b9\u6cd5"},"3\u3001\u5916\u90e8\u4f7f\u7528\u7ec4\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"h3"},"providerWrapper")," \u7684\u65b9\u6cd5"),(0,o.kt)("p",null,"\u5982\u679c\u7ec4\u4ef6\u5bfc\u51fa\u4e00\u4e2a\u65b9\u6cd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u7ec4\u4ef6\u5bfc\u51fa\nimport { providerWrapper, IMidwayContainer } from '@midwayjs/core';\n\nexport async function contextHandler(container: IMidwayContainer) {}\n\nproviderWrapper([\n  {\n    id: 'book:contextHandler', // \u8fd9\u91cc\u52a1\u5fc5\u589e\u52a0\u7ec4\u4ef6\u524d\u7f00\n    provider: contextHandler,\n    scope: ScopeEnum.Request,\n  },\n]);\n")),(0,o.kt)("p",null,"\u5e94\u7528\uff08\u51fd\u6570 \uff09\u4ee3\u7801\u4e2d\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject } from '@midwayjs/decorator';\n\n@Provide()\nexport class Library {\n\n  @Inject('book:contextHandler');\n  contextHandler;\n\n}\n")),(0,o.kt)("p",null,"\u5176\u4f59\u5982\u679c\u7ec4\u4ef6\u6709\u5305\u542b\u7279\u5b9a\u7684\u80fd\u529b\uff0c\u8bf7\u53c2\u8003\u7ec4\u4ef6\u672c\u8eab\u7684\u6587\u6863\u3002"),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/czy88840616/midway-test-component"},"\u8fd9\u91cc")," \u6709\u4e00\u4e2a\u7ec4\u4ef6\u793a\u4f8b\u3002\u5df2\u7ecf\u53d1\u5e03\u5230 npm\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u76f4\u63a5\u5f15\u5165\u5230\u9879\u76ee\u4e2d\u542f\u52a8\u6267\u884c\u3002"))}m.isMDXComponent=!0}}]);