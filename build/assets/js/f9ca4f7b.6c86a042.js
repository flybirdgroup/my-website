"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),p=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=p(r),d=n,b=g["".concat(u,".").concat(d)]||g[d]||s[d]||a;return r?o.createElement(b,l(l({ref:t},c),{},{components:r})):o.createElement(b,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},74470:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={id:"douban",title:"\u5feb\u901f\u6309\u7167\u5de5\u5177\u5305",author:"\u62db\u6653\u8d24",author_title:"AI engine @ Facebook",author_url:"https://github.com/flybirdgroup",author_image_url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg",tags:["python","hello","docusaurus","google cloud","docker"]},l=void 0,i={permalink:"/blog/2020/3/31/douban",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2020-3-31-douban.md",source:"@site/blog/2020-3-31-douban.md",title:"\u5feb\u901f\u6309\u7167\u5de5\u5177\u5305",description:"\u5b89\u88c5google-cloud-bigquery and google-cloud-bigquery-storage packages.",date:"2020-03-31T00:00:00.000Z",formattedDate:"March 31, 2020",tags:[{label:"python",permalink:"/blog/tags/python"},{label:"hello",permalink:"/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"},{label:"google cloud",permalink:"/blog/tags/google-cloud"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:.29,hasTruncateMarker:!0,authors:[{name:"\u62db\u6653\u8d24",title:"AI engine @ Facebook",url:"https://github.com/flybirdgroup",imageURL:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg"}],frontMatter:{id:"douban",title:"\u5feb\u901f\u6309\u7167\u5de5\u5177\u5305",author:"\u62db\u6653\u8d24",author_title:"AI engine @ Facebook",author_url:"https://github.com/flybirdgroup",author_image_url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg",tags:["python","hello","docusaurus","google cloud","docker"]},prevItem:{title:"\u8f7b\u677e\u4e0a\u4f20\u8d85\u8fc7100M\u7684\u6587\u4ef6\u81f3GitHub",permalink:"/blog/2020/4/02/git_big_file copy"},nextItem:{title:"Install the BigQuery Python client library version 1.9.0 or higher and the BigQuery Storage API Python client library.",permalink:"/blog/2020/3/30/BigQuery Storage API"}},u={authorsImageUrls:[void 0]},p=[{value:"step1 \u5b89\u88c5\u5305\u5f88\u591a\u65f6\u5019\u5f88\u6162\u6bd4\u5982\u6267\u884c\u4e00\u4e0b\u547d\u4ee4",id:"step1-\u5b89\u88c5\u5305\u5f88\u591a\u65f6\u5019\u5f88\u6162\u6bd4\u5982\u6267\u884c\u4e00\u4e0b\u547d\u4ee4",level:2},{value:"step2 \u5728\u547d\u4ee4\u540e\u9762\u52a0\u4e0a",id:"step2-\u5728\u547d\u4ee4\u540e\u9762\u52a0\u4e0a",level:2}],c={toc:p};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5b89\u88c5google-cloud-bigquery and google-cloud-bigquery-storage packages.\n\u9700\u8981\u8ba4\u8bc1"),(0,n.kt)("h2",{id:"step1-\u5b89\u88c5\u5305\u5f88\u591a\u65f6\u5019\u5f88\u6162\u6bd4\u5982\u6267\u884c\u4e00\u4e0b\u547d\u4ee4"},"step1 \u5b89\u88c5\u5305\u5f88\u591a\u65f6\u5019\u5f88\u6162\u6bd4\u5982\u6267\u884c\u4e00\u4e0b\u547d\u4ee4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pip install --upgrade google-cloud-bigquery[bqstorage,pandas] \n")),(0,n.kt)("h2",{id:"step2-\u5728\u547d\u4ee4\u540e\u9762\u52a0\u4e0a"},"step2 \u5728\u547d\u4ee4\u540e\u9762\u52a0\u4e0a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pip install --upgrade google-cloud-bigquery[bqstorage,pandas] -i https://pypi.douban.com/simple\n")),(0,n.kt)("p",null,"\u4e0b\u8f7d\u77ac\u95f4\u5feb\u5f88\u591a"))}s.isMDXComponent=!0}}]);