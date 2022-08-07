"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2341],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=l(r),m=o,b=g["".concat(p,".").concat(m)]||g[m]||s[m]||n;return r?a.createElement(b,i(i({ref:t},u),{},{components:r})):a.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},63219:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var a=r(87462),o=(r(67294),r(3905));const n={id:"avro",title:"\u628aavro\u6587\u4ef6\u653e\u5230bigquery",author:"\u62db\u6653\u8d24",author_title:"AI Engineer",author_url:"https://github.com/flybirdgroup",author_image_url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg",tags:["dataproc","GCP","avro","bigquery"]},i=void 0,c={permalink:"/blog/2020/4/21/\u628aavro\u6587\u4ef6\u653e\u5230bigquery",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2020-4-21-\u628aavro\u6587\u4ef6\u653e\u5230bigquery.md",source:"@site/blog/2020-4-21-\u628aavro\u6587\u4ef6\u653e\u5230bigquery.md",title:"\u628aavro\u6587\u4ef6\u653e\u5230bigquery",description:"\u53bb\u5230\u63a7\u5236\u53f0,\u786e\u8ba4storage\u548cbigquery API\u5df2\u542f\u7528",date:"2020-04-21T00:00:00.000Z",formattedDate:"April 21, 2020",tags:[{label:"dataproc",permalink:"/blog/tags/dataproc"},{label:"GCP",permalink:"/blog/tags/gcp"},{label:"avro",permalink:"/blog/tags/avro"},{label:"bigquery",permalink:"/blog/tags/bigquery"}],readingTime:.915,hasTruncateMarker:!0,authors:[{name:"\u62db\u6653\u8d24",title:"AI Engineer",url:"https://github.com/flybirdgroup",imageURL:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg"}],frontMatter:{id:"avro",title:"\u628aavro\u6587\u4ef6\u653e\u5230bigquery",author:"\u62db\u6653\u8d24",author_title:"AI Engineer",author_url:"https://github.com/flybirdgroup",author_image_url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg",tags:["dataproc","GCP","avro","bigquery"]},prevItem:{title:"\u8bfb\u53d6avro\u6587\u4ef6\u7684schema",permalink:"/blog/2020/4/21/python\u8bfb\u53d6avro\u7684schema"},nextItem:{title:"\u7528yaml\u914d\u7f6e\u6587\u4ef6\u4f20\u53c2\u6570\u7ed9pyspark,\u7136\u540e\u518ddataproc\u8fd0\u884c",permalink:"/blog/2020/4/18/dataproc+spark+yaml"}},p={authorsImageUrls:[void 0]},l=[],u={toc:l};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u53bb\u5230\u63a7\u5236\u53f0,\u786e\u8ba4storage\u548cbigquery API\u5df2\u542f\u7528\n\u6253\u5f00gcs\n\u8bbe\u7f6eproject id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gcloud config set project project_id\n")))}s.isMDXComponent=!0}}]);