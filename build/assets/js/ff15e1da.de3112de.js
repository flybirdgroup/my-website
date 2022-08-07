"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7034],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89778:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={id:"ML2",title:"\u673a\u5668\u5b66\u4e60-- 2 \u964d\u4f4e\u635f\u5931",sidebar_label:"Style Guide"},l=void 0,c={unversionedId:"ML2",id:"ML2",title:"\u673a\u5668\u5b66\u4e60-- 2 \u964d\u4f4e\u635f\u5931",description:"\u5b98\u65b9\u6587\u6863\u4fe1\u606f",source:"@site/docs/ML_\u964d\u4f4e\u635f\u5931y.md",sourceDirName:".",slug:"/ML2",permalink:"/docs/ML2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ML_\u964d\u4f4e\u635f\u5931y.md",tags:[],version:"current",frontMatter:{id:"ML2",title:"\u673a\u5668\u5b66\u4e60-- 2 \u964d\u4f4e\u635f\u5931",sidebar_label:"Style Guide"},sidebar:"tutorialSidebar",previous:{title:"Style Guide",permalink:"/docs/ML1"},next:{title:"\u8bad\u7ec3 TensorFlow \u6a21\u578b-\u8c37\u6b4c\u4e91\u5feb\u901f\u5165\u95e8(\u56db)",permalink:"/docs/TensorFlow"}},i={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/machine-learning/crash-course/reducing-loss/an-iterative-approach"},"\u5b98\u65b9\u6587\u6863\u4fe1\u606f")),(0,o.kt)("p",null,"\u6211\u4eec\u770b\u7f8e\u5267\u7684\u65f6\u5019,\u6709\u4e00\u4e2a\u53eb\u505ahot and cold\u7684\u5bfb\u7269\u6e38\u620f,\u5728\u6211\u4eec\u7684\u6e38\u620f\u4e2d\uff0c\u201c\u9690\u85cf\u7684\u7269\u54c1\u201d\u5c31\u662f\u6700\u4f73\u6a21\u578b\u3002\u521a\u5f00\u59cb\uff0c\u60a8\u4f1a\u80e1\u4e71\u731c\u6d4b\uff08\u201c \u7684\u503c\u4e3a 0\u3002\u201d\uff09\uff0c\u7b49\u5f85\u7cfb\u7edf\u544a\u8bc9\u60a8\u635f\u5931\u662f\u591a\u5c11\u3002\u7136\u540e\uff0c\u60a8\u518d\u5c1d\u8bd5\u53e6\u4e00\u79cd\u731c\u6d4b\uff08\u201c \u7684\u503c\u4e3a 0.5\u3002\u201d\uff09\uff0c\u770b\u770b\u635f\u5931\u662f\u591a\u5c11\u3002\u54ce\u5440\uff0c\u8fd9\u6b21\u66f4\u63a5\u8fd1\u76ee\u6807\u4e86\u3002\u5b9e\u9645\u4e0a\uff0c\u5982\u679c\u60a8\u4ee5\u6b63\u786e\u65b9\u5f0f\u73a9\u8fd9\u4e2a\u6e38\u620f\uff0c\u901a\u5e38\u4f1a\u8d8a\u6765\u8d8a\u63a5\u8fd1\u76ee\u6807\u3002\u8fd9\u4e2a\u6e38\u620f\u771f\u6b63\u68d8\u624b\u7684\u5730\u65b9\u5728\u4e8e\u5c3d\u53ef\u80fd\u9ad8\u6548\u5730\u627e\u5230\u6700\u4f73\u6a21\u578b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://developers.google.com/machine-learning/crash-course/images/GradientDescentDiagram.svg",alt:"img"})),(0,o.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u7279\u5f81\u548c\u6807\u7b7e\u6784\u5efa\u6a21\u578b,\u901a\u8fc7\u6a21\u578b\u6267\u884c\u5206\u6790,\u7136\u540e\u8ba1\u7b97\u635f\u5931,\u7136\u540e\u518d\u8ba1\u7b97\u53c2\u6570\u66f4\u65b0,\u8c03\u6574\u6a21\u578b,\u518d\u6267\u884c\u5206\u6790,\u8fd9\u6837\u5faa\u73af\u4e0b\u6b21\u76f4\u5230\u5f97\u5230\u7684\u6a21\u578b\u662f\u6700\u4f73\u6a21\u578b"),(0,o.kt)("p",null,"\u201c\u6a21\u578b\u201d\u90e8\u5206\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u7279\u5f81\u4f5c\u4e3a\u8f93\u5165\uff0c\u7136\u540e\u8fd4\u56de\u4e00\u4e2a\u9884\u6d4b (y') \u4f5c\u4e3a\u8f93\u51fa\u3002\u4e3a\u4e86\u8fdb\u884c\u7b80\u5316\uff0c\u4e0d\u59a8\u8003\u8651\u4e00\u79cd\u91c7\u7528\u4e00\u4e2a\u7279\u5f81\u5e76\u8fd4\u56de\u4e00\u4e2a\u9884\u6d4b\u7684\u6a21\u578b\uff1a"),(0,o.kt)("p",null,"y = b + w1x1\n\u6211\u4eec\u5e94\u8be5\u4e3a  \u548c  \u8bbe\u7f6e\u54ea\u4e9b\u521d\u59cb\u503c\uff1f\u5bf9\u4e8e\u7ebf\u6027\u56de\u5f52\u95ee\u9898\uff0c\u4e8b\u5b9e\u8bc1\u660e\u521d\u59cb\u503c\u5e76\u4e0d\u91cd\u8981\u3002\u6211\u4eec\u53ef\u4ee5\u968f\u673a\u9009\u62e9\u503c\uff0c\u4e0d\u8fc7\u6211\u4eec\u8fd8\u662f\u9009\u62e9\u91c7\u7528\u4ee5\u4e0b\u8fd9\u4e9b\u65e0\u5173\u7d27\u8981\u7684\u503c\uff1a\nb = 0, w1 = 0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  y' = 0 + 0(10)\n  y' = 0\n")),(0,o.kt)("p",null,"\u56fe\u4e2d\u7684\u201c\u8ba1\u7b97\u635f\u5931\u201d\u90e8\u5206\u662f\u6a21\u578b\u5c06\u8981\u4f7f\u7528\u7684\u635f\u5931\u51fd\u6570\u3002\u5047\u8bbe\u6211\u4eec\u4f7f\u7528\u5e73\u65b9\u635f\u5931\u51fd\u6570\u3002\u635f\u5931\u51fd\u6570\u5c06\u91c7\u7528\u4e24\u4e2a\u8f93\u5165\u503c\uff1a"),(0,o.kt)("p",null,"y'\uff1a\u6a21\u578b\u5bf9\u7279\u5f81 x \u7684\u9884\u6d4b\ny\uff1a\u7279\u5f81 x \u5bf9\u5e94\u7684\u6b63\u786e\u6807\u7b7e\u3002\n\u6700\u540e\uff0c\u6211\u4eec\u6765\u770b\u56fe\u7684\u201c\u8ba1\u7b97\u53c2\u6570\u66f4\u65b0\u201d\u90e8\u5206\u3002\u673a\u5668\u5b66\u4e60\u7cfb\u7edf\u5c31\u662f\u5728\u6b64\u90e8\u5206\u68c0\u67e5\u635f\u5931\u51fd\u6570\u7684\u503c\uff0c\u5e76\u4e3a b \u548c w1 \u751f\u6210\u65b0\u503c\u3002\u73b0\u5728\uff0c\u5047\u8bbe\u8fd9\u4e2a\u795e\u79d8\u7684\u7eff\u8272\u6846\u4f1a\u4ea7\u751f\u65b0\u503c\uff0c\u7136\u540e\u673a\u5668\u5b66\u4e60\u7cfb\u7edf\u5c06\u6839\u636e\u6240\u6709\u6807\u7b7e\u91cd\u65b0\u8bc4\u4f30\u6240\u6709\u7279\u5f81\uff0c\u4e3a\u635f\u5931\u51fd\u6570\u751f\u6210\u4e00\u4e2a\u65b0\u503c\uff0c\u800c\u8be5\u503c\u53c8\u4ea7\u751f\u65b0\u7684\u53c2\u6570\u503c\u3002\u8fd9\u79cd\u5b66\u4e60\u8fc7\u7a0b\u4f1a\u6301\u7eed\u8fed\u4ee3\uff0c\u76f4\u5230\u8be5\u7b97\u6cd5\u53d1\u73b0\u635f\u5931\u53ef\u80fd\u6700\u4f4e\u7684\u6a21\u578b\u53c2\u6570\u3002\u901a\u5e38\uff0c\u60a8\u53ef\u4ee5\u4e0d\u65ad\u8fed\u4ee3\uff0c\u76f4\u5230\u603b\u4f53\u635f\u5931\u4e0d\u518d\u53d8\u5316\u6216\u81f3\u5c11\u53d8\u5316\u6781\u5176\u7f13\u6162\u4e3a\u6b62\u3002\u8fd9\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u8bf4\u8be5\u6a21\u578b\u5df2\u6536\u655b\u3002"))}u.isMDXComponent=!0}}]);