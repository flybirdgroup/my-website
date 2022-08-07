"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7122],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),p=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return o.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return t?o.createElement(g,l(l({ref:r},u),{},{components:t})):o.createElement(g,l({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49967:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=t(87462),n=(t(67294),t(3905));const a={id:"avro",title:"\u8bfb\u53d6avro\u6587\u4ef6\u7684schema",author:"\u62db\u6653\u8d24",author_title:"AI Engineer",author_url:"https://github.com/flybirdgroup",author_image_url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg",tags:["dataproc","GCP","avro","bigquery"]},l=void 0,i={unversionedId:"Google_Knowledge/avro",id:"Google_Knowledge/avro",title:"\u8bfb\u53d6avro\u6587\u4ef6\u7684schema",description:"\u9996\u5148\u5b89\u88c5\u5305",source:"@site/docs/Google_Knowledge/2020-4-21-python\u8bfb\u53d6avro\u7684schema.md",sourceDirName:"Google_Knowledge",slug:"/Google_Knowledge/avro",permalink:"/docs/Google_Knowledge/avro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Google_Knowledge/2020-4-21-python\u8bfb\u53d6avro\u7684schema.md",tags:[{label:"dataproc",permalink:"/docs/tags/dataproc"},{label:"GCP",permalink:"/docs/tags/gcp"},{label:"avro",permalink:"/docs/tags/avro"},{label:"bigquery",permalink:"/docs/tags/bigquery"}],version:"current",frontMatter:{id:"avro",title:"\u8bfb\u53d6avro\u6587\u4ef6\u7684schema",author:"\u62db\u6653\u8d24",author_title:"AI Engineer",author_url:"https://github.com/flybirdgroup",author_image_url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg",tags:["dataproc","GCP","avro","bigquery"]},sidebar:"tutorialSidebar",previous:{title:"google script + excel+ google drive",permalink:"/docs/Google_Knowledge/bigquery_presentation"},next:{title:"\u628aavro\u6587\u4ef6\u653e\u5230bigquery",permalink:"/docs/Google_Knowledge/avro"}},c={},p=[],u={toc:p};function s(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u9996\u5148\u5b89\u88c5\u5305"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pip install avro-python3\n")),(0,n.kt)("p",null,"\u7136\u540e\u5728py\u6587\u4ef6\u5012\u5165\u5305"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"from avro.datafile import DataFileReader, DataFileWriter\nimport avro.io\nreader = avro.datafile.DataFileReader(open('./account_id_schema_new.avro',\"rb\"),avro.io.DatumReader())\nschema = reader.meta\nprint(schema)\n")),(0,n.kt)("p",null,"\u663e\u793a\u7684\u6548\u679c\u5982\u4e0b:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\'avro.schema\': b\'{"fields": [{"type": ["null", "string"], "name": "ACNO"}, {"type": ["null", "double"], "name": "FIELD_1"}, {"type": ["null", "double"], "name": "FIELD_2"}, {"type": ["null", "double"], "name": "FIELD_3"}], "type": "record", "name": "Root"}\',\n \'avro.codec\': b\'null\'}\n')))}s.isMDXComponent=!0}}]);