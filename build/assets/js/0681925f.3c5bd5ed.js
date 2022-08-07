"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2091],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,b=m["".concat(c,".").concat(g)]||m[g]||s[g]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69253:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"gcp_command_line",title:"\u8c37\u6b4c\u5e38\u7528\u547d\u4ee4",author:"\u62db\u6653\u8d24",author_title:"AI Engineer",author_url:"https://github.com/flybirdgroup",author_image_url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg",tags:["gcp","command line","github"]},i=void 0,l={permalink:"/blog/2020/4/15/gcp_\u5e38\u7528\u547d\u4ee4",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2020-4-15-gcp_\u5e38\u7528\u547d\u4ee4.md",source:"@site/blog/2020-4-15-gcp_\u5e38\u7528\u547d\u4ee4.md",title:"\u8c37\u6b4c\u5e38\u7528\u547d\u4ee4",description:"\u5217\u51fa\u6d3b\u52a8\u8d26\u53f7\u540d\u79f0",date:"2020-04-15T00:00:00.000Z",formattedDate:"April 15, 2020",tags:[{label:"gcp",permalink:"/blog/tags/gcp"},{label:"command line",permalink:"/blog/tags/command-line"},{label:"github",permalink:"/blog/tags/github"}],readingTime:.355,hasTruncateMarker:!0,authors:[{name:"\u62db\u6653\u8d24",title:"AI Engineer",url:"https://github.com/flybirdgroup",imageURL:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg"}],frontMatter:{id:"gcp_command_line",title:"\u8c37\u6b4c\u5e38\u7528\u547d\u4ee4",author:"\u62db\u6653\u8d24",author_title:"AI Engineer",author_url:"https://github.com/flybirdgroup",author_image_url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg",tags:["gcp","command line","github"]},prevItem:{title:"Bigquery\u4e2dsql\u8bed\u53e5\u5e38\u7528\u547d\u4ee4",permalink:"/blog/2020/4/15/bq_sql\u5e38\u7528\u77ed\u8bed"},nextItem:{title:"dataflow\u7b80\u5355\u5165\u95e8-apache beam \u57fa\u672c\u6982\u5ff5",permalink:"/blog/2020/4/11/dataflow-apache beam\u57fa\u672c\u6982\u5ff5"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5217\u51fa\u6d3b\u52a8\u8d26\u53f7\u540d\u79f0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"gcloud auth list\n")))}s.isMDXComponent=!0}}]);