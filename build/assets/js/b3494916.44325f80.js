"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2831],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=o(r),g=a,b=d["".concat(p,".").concat(g)]||d[g]||u[g]||i;return r?n.createElement(b,s(s({ref:t},c),{},{components:r})):n.createElement(b,s({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const i={id:"BIGQUERY",title:"Bigquery \u5feb\u901f\u5165\u95e8(\u4e00)--\u521b\u5efa\u6570\u636e\u96c6\u5e76\u4e14\u67e5\u8be2",sidebar_label:"Style Guide"},s=void 0,l={unversionedId:"BIGQUERY",id:"BIGQUERY",title:"Bigquery \u5feb\u901f\u5165\u95e8(\u4e00)--\u521b\u5efa\u6570\u636e\u96c6\u5e76\u4e14\u67e5\u8be2",description:"to link to Bigquery (\u4e8c)--\u5728BigQuery\u4e2d\u521b\u5efa\u6388\u6743\u89c6\u56fe",source:"@site/docs/BIGQUERY.md",sourceDirName:".",slug:"/BIGQUERY",permalink:"/docs/BIGQUERY",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/BIGQUERY.md",tags:[],version:"current",frontMatter:{id:"BIGQUERY",title:"Bigquery \u5feb\u901f\u5165\u95e8(\u4e00)--\u521b\u5efa\u6570\u636e\u96c6\u5e76\u4e14\u67e5\u8be2",sidebar_label:"Style Guide"},sidebar:"tutorialSidebar",previous:{title:"\u4eceDockerhub\u62c9\u53d6\u955c\u50cf\u5e76\u4e14\u4f7f\u7528\u547d\u4ee4\u8fd0\u884c",permalink:"/docs/dockerhub_2"},next:{title:"Style Guide",permalink:"/docs/BIGQUERY2"}},p={},o=[{value:"step 1 \u9009\u62e9\u81ea\u5df1\u7684\u9879\u76ee",id:"step-1-\u9009\u62e9\u81ea\u5df1\u7684\u9879\u76ee",level:2},{value:"step 2 \u542f\u52a8big query api",id:"step-2-\u542f\u52a8big-query-api",level:2},{value:"step3 \u5bf9\u6570\u636e\u7ecf\u5e38sql\u8bed\u53e5\u67e5\u8be2",id:"step3-\u5bf9\u6570\u636e\u7ecf\u5e38sql\u8bed\u53e5\u67e5\u8be2",level:2},{value:"\u521b\u5efa\u65b0\u7684\u6570\u636e\u96c6",id:"\u521b\u5efa\u65b0\u7684\u6570\u636e\u96c6",level:2},{value:"step 1 \u9009\u62e9\u521b\u5efa\u6570\u636e\u96c6 database",id:"step-1-\u9009\u62e9\u521b\u5efa\u6570\u636e\u96c6-database",level:3},{value:"step 2 \u521b\u5efa\u8868 table",id:"step-2-\u521b\u5efa\u8868-table",level:3},{value:"step 3 sql\u8bed\u53e5\u67e5\u8be2",id:"step-3-sql\u8bed\u53e5\u67e5\u8be2",level:3}],c={toc:o};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"to link to ",(0,a.kt)("a",{parentName:"p",href:"BIGQUERY2"},"Bigquery (\u4e8c)--\u5728BigQuery\u4e2d\u521b\u5efa\u6388\u6743\u89c6\u56fe")),(0,a.kt)("h2",{id:"step-1-\u9009\u62e9\u81ea\u5df1\u7684\u9879\u76ee"},"step 1 \u9009\u62e9\u81ea\u5df1\u7684\u9879\u76ee"),(0,a.kt)("h2",{id:"step-2-\u542f\u52a8big-query-api"},"step 2 \u542f\u52a8big query api"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"png",src:r(58045).Z,width:"1490",height:"725"})),(0,a.kt)("h2",{id:"step3-\u5bf9\u6570\u636e\u7ecf\u5e38sql\u8bed\u53e5\u67e5\u8be2"},"step3 \u5bf9\u6570\u636e\u7ecf\u5e38sql\u8bed\u53e5\u67e5\u8be2"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"png",src:r(34559).Z,width:"1004",height:"695"}),"\n",(0,a.kt)("img",{alt:"png",src:r(14902).Z,width:"1473",height:"709"})),(0,a.kt)("h2",{id:"\u521b\u5efa\u65b0\u7684\u6570\u636e\u96c6"},"\u521b\u5efa\u65b0\u7684\u6570\u636e\u96c6"),(0,a.kt)("h3",{id:"step-1-\u9009\u62e9\u521b\u5efa\u6570\u636e\u96c6-database"},"step 1 \u9009\u62e9\u521b\u5efa\u6570\u636e\u96c6 database"),(0,a.kt)("p",null,"1 \u8bbe\u7f6edatabase\u540d\u79f0"),(0,a.kt)("p",null,"2 \u8bbe\u7f6e\u8868\u540d\u79f0, \u9009\u62e9\u6587\u4ef6,\u9009\u62e9\u6587\u4ef6\u683c\u5f0f"),(0,a.kt)("p",null,"3 \u8bbe\u7f6e\u5b57\u6bb5\u540d\u4ee5\u53ca\u5bf9\u5e94\u5c5e\u6027"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"png",src:r(52647).Z,width:"1507",height:"416"})),(0,a.kt)("h3",{id:"step-2-\u521b\u5efa\u8868-table"},"step 2 \u521b\u5efa\u8868 table"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"png",src:r(22822).Z,width:"1106",height:"793"})),(0,a.kt)("h3",{id:"step-3-sql\u8bed\u53e5\u67e5\u8be2"},"step 3 sql\u8bed\u53e5\u67e5\u8be2"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"png",src:r(73035).Z,width:"1602",height:"646"})))}u.isMDXComponent=!0},58045:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/2-a5b7ca2c530b4c846304b35c75970b49.png"},34559:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/3-66997e9f15024cf216c60137792fa282.png"},14902:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/4-41f56b21f8f7fde484c2d82217ac8bbb.png"},52647:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/5-0928631d52cd41746e55b489dfe364a4.png"},22822:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/6-88584e4792d663dad8a61463501c554f.png"},73035:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/7-53706cf1c480b74e874c45cd86db4e63.png"}}]);