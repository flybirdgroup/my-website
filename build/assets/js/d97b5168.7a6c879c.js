"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2359],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,y=p["".concat(s,".").concat(d)]||p[d]||g[d]||a;return r?o.createElement(y,l(l({ref:t},c),{},{components:r})):o.createElement(y,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},42510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={id:"BigQueryStorageAPI",title:"Install the BigQuery Python client library version 1.9.0 or higher and the BigQuery Storage API Python client library.",author:"\u62db\u6653\u8d24",author_title:"AI engine @ Facebook",author_url:"https://github.com/flybirdgroup",author_image_url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg",tags:["python","hello","docusaurus","google cloud","docker"]},l=void 0,i={unversionedId:"Google_Knowledge/BigQueryStorageAPI",id:"Google_Knowledge/BigQueryStorageAPI",title:"Install the BigQuery Python client library version 1.9.0 or higher and the BigQuery Storage API Python client library.",description:"\u5b89\u88c5google-cloud-bigquery and google-cloud-bigquery-storage packages.",source:"@site/docs/Google_Knowledge/2020-3-30-BigQuery Storage API.md",sourceDirName:"Google_Knowledge",slug:"/Google_Knowledge/BigQueryStorageAPI",permalink:"/docs/Google_Knowledge/BigQueryStorageAPI",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Google_Knowledge/2020-3-30-BigQuery Storage API.md",tags:[{label:"python",permalink:"/docs/tags/python"},{label:"hello",permalink:"/docs/tags/hello"},{label:"docusaurus",permalink:"/docs/tags/docusaurus"},{label:"google cloud",permalink:"/docs/tags/google-cloud"},{label:"docker",permalink:"/docs/tags/docker"}],version:"current",frontMatter:{id:"BigQueryStorageAPI",title:"Install the BigQuery Python client library version 1.9.0 or higher and the BigQuery Storage API Python client library.",author:"\u62db\u6653\u8d24",author_title:"AI engine @ Facebook",author_url:"https://github.com/flybirdgroup",author_image_url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg",tags:["python","hello","docusaurus","google cloud","docker"]},sidebar:"tutorialSidebar",previous:{title:"App Engine \u4f7f\u7528\u5feb\u901f\u5165\u95e8",permalink:"/docs/Google_Knowledge/App"},next:{title:"\u8f7b\u677e\u4e0a\u4f20\u8d85\u8fc7100M\u7684\u6587\u4ef6\u81f3GitHub",permalink:"/docs/Google_Knowledge/git_big_file"}},s={},u=[{value:"step1 \u4e00\u822c\u65b9\u6cd5\u662f\u590d\u5236\u4ee5\u4e0b\u547d\u4ee4\u5728mac os\u7ec8\u7aef\u6267\u884c",id:"step1-\u4e00\u822c\u65b9\u6cd5\u662f\u590d\u5236\u4ee5\u4e0b\u547d\u4ee4\u5728mac-os\u7ec8\u7aef\u6267\u884c",level:2},{value:"step2 \u6211\u4eec\u53cd\u5411step1\u64cd\u4f5c,\u5f80\u5f80\u4e0d\u6210\u529f\u4f1a\u51fa\u73b02",id:"step2-\u6211\u4eec\u53cd\u5411step1\u64cd\u4f5c\u5f80\u5f80\u4e0d\u6210\u529f\u4f1a\u51fa\u73b02",level:2},{value:"step3 \u6211\u4eec\u5728\u547d\u4ee4\u884c\u540e\u9762\u52a0\u4e0a--user",id:"step3-\u6211\u4eec\u5728\u547d\u4ee4\u884c\u540e\u9762\u52a0\u4e0a--user",level:2}],c={toc:u};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5b89\u88c5google-cloud-bigquery and google-cloud-bigquery-storage packages.\n\u9700\u8981\u8ba4\u8bc1"),(0,n.kt)("h2",{id:"step1-\u4e00\u822c\u65b9\u6cd5\u662f\u590d\u5236\u4ee5\u4e0b\u547d\u4ee4\u5728mac-os\u7ec8\u7aef\u6267\u884c"},"step1 \u4e00\u822c\u65b9\u6cd5\u662f\u590d\u5236\u4ee5\u4e0b\u547d\u4ee4\u5728mac os\u7ec8\u7aef\u6267\u884c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pip install --upgrade google-cloud-bigquery[bqstorage,pandas]\n")),(0,n.kt)("h2",{id:"step2-\u6211\u4eec\u53cd\u5411step1\u64cd\u4f5c\u5f80\u5f80\u4e0d\u6210\u529f\u4f1a\u51fa\u73b02"},"step2 \u6211\u4eec\u53cd\u5411step1\u64cd\u4f5c,\u5f80\u5f80\u4e0d\u6210\u529f\u4f1a\u51fa\u73b02"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"png",src:r(756).Z,width:"734",height:"95"})),(0,n.kt)("h2",{id:"step3-\u6211\u4eec\u5728\u547d\u4ee4\u884c\u540e\u9762\u52a0\u4e0a--user"},"step3 \u6211\u4eec\u5728\u547d\u4ee4\u884c\u540e\u9762\u52a0\u4e0a--user"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pip install --upgrade google-cloud-bigquery[bqstorage,pandas] --user\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"png",src:r(36486).Z,width:"1282",height:"702"})),(0,n.kt)("p",null,"\u901a\u8fc7\u64cd\u4f5c\u5c31\u6210\u529f\u4e86"))}g.isMDXComponent=!0},36486:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/1-ed71c9d8850a1ddede7893000cb44b53.png"},756:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/2-f7d74e8bb3230f12b6388901df2a2bd7.png"}}]);