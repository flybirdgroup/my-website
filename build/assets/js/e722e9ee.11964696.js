"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8963],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),g=n,b=m["".concat(l,".").concat(g)]||m[g]||s[g]||o;return r?a.createElement(b,i(i({ref:t},u),{},{components:r})):a.createElement(b,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={id:"avro",title:"\u8bfb\u53d6avro\u6587\u4ef6\u7684schema",author:"\u62db\u6653\u8d24",author_title:"AI Engineer",author_url:"https://github.com/flybirdgroup",author_image_url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg",tags:["dataproc","GCP","avro","bigquery"]},i=void 0,p={permalink:"/blog/2020/4/21/python\u8bfb\u53d6avro\u7684schema",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2020-4-21-python\u8bfb\u53d6avro\u7684schema.md",source:"@site/blog/2020-4-21-python\u8bfb\u53d6avro\u7684schema.md",title:"\u8bfb\u53d6avro\u6587\u4ef6\u7684schema",description:"\u9996\u5148\u5b89\u88c5\u5305",date:"2020-04-21T00:00:00.000Z",formattedDate:"April 21, 2020",tags:[{label:"dataproc",permalink:"/blog/tags/dataproc"},{label:"GCP",permalink:"/blog/tags/gcp"},{label:"avro",permalink:"/blog/tags/avro"},{label:"bigquery",permalink:"/blog/tags/bigquery"}],readingTime:.35,hasTruncateMarker:!0,authors:[{name:"\u62db\u6653\u8d24",title:"AI Engineer",url:"https://github.com/flybirdgroup",imageURL:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg"}],frontMatter:{id:"avro",title:"\u8bfb\u53d6avro\u6587\u4ef6\u7684schema",author:"\u62db\u6653\u8d24",author_title:"AI Engineer",author_url:"https://github.com/flybirdgroup",author_image_url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg",tags:["dataproc","GCP","avro","bigquery"]},prevItem:{title:"\u5173\u4e8enginx\u548cport\u77e5\u8bc6\u603b\u7ed3",permalink:"/blog/2020/4/26/\u5173\u4e8enginx\u548cport\u77e5\u8bc6\u603b\u7ed3"},nextItem:{title:"\u628aavro\u6587\u4ef6\u653e\u5230bigquery",permalink:"/blog/2020/4/21/\u628aavro\u6587\u4ef6\u653e\u5230bigquery"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u9996\u5148\u5b89\u88c5\u5305"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pip install avro-python3\n")),(0,n.kt)("p",null,"\u7136\u540e\u5728py\u6587\u4ef6\u5012\u5165\u5305"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"from avro.datafile import DataFileReader, DataFileWriter\nimport avro.io\nreader = avro.datafile.DataFileReader(open('./account_id_schema_new.avro',\"rb\"),avro.io.DatumReader())\nschema = reader.meta\nprint(schema)\n")))}s.isMDXComponent=!0}}]);