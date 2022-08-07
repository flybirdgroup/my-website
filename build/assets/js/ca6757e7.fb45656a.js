"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5984],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),g=o,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={id:"nginx",title:"\u5173\u4e8enginx\u548cport\u77e5\u8bc6\u603b\u7ed3",author:"\u62db\u6653\u8d24",author_title:"AI Engineer",author_url:"https://github.com/flybirdgroup",author_image_url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg",tags:["nginx","port","target","load-balance"]},i="kubernetes\u91cc\u9762\u7684port, target port \u548c node port",p={unversionedId:"CICD/nginx",id:"CICD/nginx",title:"\u5173\u4e8enginx\u548cport\u77e5\u8bc6\u603b\u7ed3",description:"port\u662fservice\u670d\u52a1\u7684\u7aef\u53e3",source:"@site/docs/CICD/2020-4-26\u5173\u4e8enginx\u548cport\u77e5\u8bc6\u603b\u7ed3.md",sourceDirName:"CICD",slug:"/CICD/nginx",permalink:"/docs/CICD/nginx",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CICD/2020-4-26\u5173\u4e8enginx\u548cport\u77e5\u8bc6\u603b\u7ed3.md",tags:[{label:"nginx",permalink:"/docs/tags/nginx"},{label:"port",permalink:"/docs/tags/port"},{label:"target",permalink:"/docs/tags/target"},{label:"load-balance",permalink:"/docs/tags/load-balance"}],version:"current",frontMatter:{id:"nginx",title:"\u5173\u4e8enginx\u548cport\u77e5\u8bc6\u603b\u7ed3",author:"\u62db\u6653\u8d24",author_title:"AI Engineer",author_url:"https://github.com/flybirdgroup",author_image_url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1615738601,1434436036&fm=26&gp=0.jpg",tags:["nginx","port","target","load-balance"]},sidebar:"tutorialSidebar",previous:{title:"yaml\u8bed\u6cd5\u5b66\u4e60",permalink:"/docs/CICD/yaml1"},next:{title:"\u4f7f\u7528terraform\u57fa\u672c\u8bed\u6cd5\u548c\u521b\u5efavm",permalink:"/docs/CICD/terraform1"}},l={},s=[{value:"port\u662fservice\u670d\u52a1\u7684\u7aef\u53e3",id:"port\u662fservice\u670d\u52a1\u7684\u7aef\u53e3",level:2},{value:"targetport\u662fpod\u4e5f\u5c31\u662f\u5bb9\u5668\u7684\u7aef\u53e3",id:"targetport\u662fpod\u4e5f\u5c31\u662f\u5bb9\u5668\u7684\u7aef\u53e3",level:2},{value:"nodeport\u662f\u5bb9\u5668\u6240\u5728\u5bbf\u4e3b\u673a\u7684\u7aef\u53e3(\u901a\u8fc7service\u66b4\u9732\u7ed9\u5bbf\u4e3b\u673a,\u800cport\u53bb\u6ca1\u6709)",id:"nodeport\u662f\u5bb9\u5668\u6240\u5728\u5bbf\u4e3b\u673a\u7684\u7aef\u53e3\u901a\u8fc7service\u66b4\u9732\u7ed9\u5bbf\u4e3b\u673a\u800cport\u53bb\u6ca1\u6709",level:2},{value:"nginx\u80fd\u505a\u7684\u4e8b\u60c5:",id:"nginx\u80fd\u505a\u7684\u4e8b\u60c5",level:2},{value:"\u6b63\u5411\u4ee3\u7406\u662fnginx proxy\u7ed9client\u4ee3\u7406,\u7136\u540e\u5bf9\u63a5Server,\u83b7\u53d6\u5185\u5bb9",id:"\u6b63\u5411\u4ee3\u7406\u662fnginx-proxy\u7ed9client\u4ee3\u7406\u7136\u540e\u5bf9\u63a5server\u83b7\u53d6\u5185\u5bb9",level:3},{value:"\u65b9\u5411\u4ee3\u7406\u662fproxy\u7ed9Server\u505a\u4ee3\u7406,clients\u8bbf\u95eeproxy\u83b7\u53d6\u5185\u5bb9",id:"\u65b9\u5411\u4ee3\u7406\u662fproxy\u7ed9server\u505a\u4ee3\u7406clients\u8bbf\u95eeproxy\u83b7\u53d6\u5185\u5bb9",level:3},{value:"nginx\u7684\u8d1f\u8f7d\u5747\u8861\u6709\u4e00\u4e0b\u51e0\u4e2a\u7b56\u7565:",id:"nginx\u7684\u8d1f\u8f7d\u5747\u8861\u6709\u4e00\u4e0b\u51e0\u4e2a\u7b56\u7565",level:3},{value:"\u52a8\u9759\u5206\u79bb",id:"\u52a8\u9759\u5206\u79bb",level:3}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubernetes\u91cc\u9762\u7684port-target-port-\u548c-node-port"},"kubernetes\u91cc\u9762\u7684port, target port \u548c node port"),(0,o.kt)("h2",{id:"port\u662fservice\u670d\u52a1\u7684\u7aef\u53e3"},"port\u662fservice\u670d\u52a1\u7684\u7aef\u53e3"),(0,o.kt)("h2",{id:"targetport\u662fpod\u4e5f\u5c31\u662f\u5bb9\u5668\u7684\u7aef\u53e3"},"targetport\u662fpod\u4e5f\u5c31\u662f\u5bb9\u5668\u7684\u7aef\u53e3"),(0,o.kt)("h2",{id:"nodeport\u662f\u5bb9\u5668\u6240\u5728\u5bbf\u4e3b\u673a\u7684\u7aef\u53e3\u901a\u8fc7service\u66b4\u9732\u7ed9\u5bbf\u4e3b\u673a\u800cport\u53bb\u6ca1\u6709"},"nodeport\u662f\u5bb9\u5668\u6240\u5728\u5bbf\u4e3b\u673a\u7684\u7aef\u53e3(\u901a\u8fc7service\u66b4\u9732\u7ed9\u5bbf\u4e3b\u673a,\u800cport\u53bb\u6ca1\u6709)"),(0,o.kt)("p",null,"port\u7684\u4e3b\u8981\u4f5c\u7528\u662fclusters\u96c6\u7fa4\u91cc\u9762\u7684\u4e00\u4e2apod\u8bbf\u95ee\u5176\u4ed6pod\u7684\u65f6\u5019,\u9700\u8981\u7aef\u53e3port,\u6bd4\u5982\u96c6\u7fa4\u91cc\u9762nginx\u9700\u8981\u8bbf\u95eemysql,\u90a3\u4e48\u4e45\u9700\u8981mysql\u7684target port,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mysql"},"apiVersion: v1\n kind: Service\n metadata:\n  name: mysql-service\n spec:\n  ports:\n  - port: 33306\n    targetPort: 3306\n  selector:\n   name: mysql-pod\n")),(0,o.kt)("p",null,"\u6bd4\u5982nginx\u901a\u8fc7\u8bbf\u95eeservice\u768433306\u7aef\u53e3,service\u6839\u636eselector\u4e2d\u7684name,\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230mysql-pod\u8fd9\u4e2apod\u76843306\u7aef\u53e3\n\u901a\u8fc7POST\u521b\u5efa service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "kind": "Service",\n    "apiVersion": "v1",\n    "metadata": {\n        "name": "my-service"\n    },\n    "spec": {\n        "selector": {\n            "app": "MyApp"\n        },\n        "ports": [\n            {\n                "name": "http",\n                "protocol": "TCP",\n                "port": 80,\n                "targetPort": 9376\n            },\n            {\n                "name": "https",\n                "protocol": "TCP",\n                "port": 443,\n                "targetPort": 9377\n            }\n        ]\n    }\n}\n')),(0,o.kt)("p",null,'\u5bf9\u4e8e\u6bcf\u4e2a\u8fd0\u884c\u7684pod,kubernete\u5c06\u5176\u6dfb\u52a0\u7ed9\u73b0\u6709\u7684service\u7684\u5168\u5c40\u53d8\u91cf, \u6bd4\u5982\u53eb\u505a"redis-master"\u7684service,\u5bf9\u5916\u6620\u5c046379\u7aef\u53e3,\nservice\u8981\u60f3\u88abpod\u4f7f\u7528,\u5fc5\u987b\u5148\u6bd4pod\u5efa\u7acb\n\u6240\u4ee5\u603b\u4f53\u6d41\u7a0b\u5c31pod\u4e4b\u95f4\u90fd\u662f\u901a\u8fc7service\u6765\u76f8\u4e92\u8bbf\u95ee,\u6240\u4ee5\u5148service\u7684port,\u7136\u540eservice\u901a\u8fc7selector\u627e\u5230name,\u518d\u628a\u8bf7\u6c42\u53d1\u9001\u5230name\u5bf9\u5e94\u7684target port'),(0,o.kt)("h1",{id:"nginx\u57fa\u7840\u77e5\u8bc6"},(0,o.kt)("a",{parentName:"h1",href:"https://www.cnblogs.com/mq0036/p/9794540.html"},"Nginx\u57fa\u7840\u77e5\u8bc6")),(0,o.kt)("h2",{id:"nginx\u80fd\u505a\u7684\u4e8b\u60c5"},"nginx\u80fd\u505a\u7684\u4e8b\u60c5:"),(0,o.kt)("p",null,"1 ",(0,o.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/ae76c223c6ef"},"\u6b63\u5411,\u65b9\u5411\u4ee3\u7406"),"\n2 \u8d1f\u8f7d\u5747\u8861\n3 http\u670d\u52a1\u5668-\u52a8\u9759\u5206\u79bb"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"png",src:r(90062).Z,width:"522",height:"660"})),(0,o.kt)("h3",{id:"\u6b63\u5411\u4ee3\u7406\u662fnginx-proxy\u7ed9client\u4ee3\u7406\u7136\u540e\u5bf9\u63a5server\u83b7\u53d6\u5185\u5bb9"},"\u6b63\u5411\u4ee3\u7406\u662fnginx proxy\u7ed9client\u4ee3\u7406,\u7136\u540e\u5bf9\u63a5Server,\u83b7\u53d6\u5185\u5bb9"),(0,o.kt)("h3",{id:"\u65b9\u5411\u4ee3\u7406\u662fproxy\u7ed9server\u505a\u4ee3\u7406clients\u8bbf\u95eeproxy\u83b7\u53d6\u5185\u5bb9"},"\u65b9\u5411\u4ee3\u7406\u662fproxy\u7ed9Server\u505a\u4ee3\u7406,clients\u8bbf\u95eeproxy\u83b7\u53d6\u5185\u5bb9"),(0,o.kt)("h3",{id:"nginx\u7684\u8d1f\u8f7d\u5747\u8861\u6709\u4e00\u4e0b\u51e0\u4e2a\u7b56\u7565"},"nginx\u7684\u8d1f\u8f7d\u5747\u8861\u6709\u4e00\u4e0b\u51e0\u4e2a\u7b56\u7565:"),(0,o.kt)("p",null,"1 RR- \u6309\u7167\u8bf7\u6c42\u65f6\u95f4\u987a\u5e8f\u5206\u914d\u5230\u4e0d\u540c\u7684\u540e\u7aef\u670d\u52a1\u5668,\u540e\u7aef\u670d\u52a1\u5668\u6302\u6389,\u5c31\u81ea\u52a8\u5254\u9664\n2 \u6743\u91cd- \u7ed9\u4e0d\u540c\u670d\u52a1\u5668\u8d4b\u4e88\u6743\u91cd,\u6743\u91cd\u5927\u7684,\u5c31\u627f\u5f53\u66f4\u591a\u8bbf\u95ee\n3 ip_hash- \u56e0\u4e3a\u5ba2\u6237\u767b\u5f55\u4fe1\u606f\u4fdd\u5b58\u5728session\u4e2d,\u5982\u679c\u8df3\u8f6c\u5230\u53e6\u5916\u4e00\u53f0\u670d\u52a1\u5668\u7684\u65f6\u5019,\u9700\u8981\u91cd\u65b0\u767b\u5f55,\u6240\u4ee5ip_hash\u7684\u65b9\u6cd5\u8ba9\u4e00\u4e2a\u5ba2\u6237\u53ea\u8bbf\u95ee\u4e00\u53f0\u670d\u52a1\u5668\n4 fair(\u7b2c\u4e09\u65b9)- \u6309\u540e\u7aef\u670d\u52a1\u5668\u7684\u54cd\u5e94\u65f6\u95f4\u6765\u5206\u914d\u8bf7\u6c42,\u54cd\u5e94\u8d8a\u77ed,\u5c31\u8d8a\u5148\u5206\u914d\n5 url_hash- \u5c31\u662f\u8bbe\u5b9a\u65b9\u5411url\u8fde\u63a5\u662f\u8bbf\u95ee\u90a3\u53f0\u670d\u52a1\u5668,\u540e\u7aef\u670d\u52a1\u5668\u4e3a\u7f13\u5b58\u65f6\u6bd4\u8f83\u6709\u6548"),(0,o.kt)("h3",{id:"\u52a8\u9759\u5206\u79bb"},"\u52a8\u9759\u5206\u79bb"),(0,o.kt)("p",null,"nginx\u672c\u8eab\u5c31\u662f\u4e00\u53f0\u670d\u52a1\u5668,\u6240\u4ee5\u53ef\u4ee5\u4fdd\u5b58\u4e00\u4e9b\u9759\u6001\u8d44\u6e90,\u4e5f\u5c31\u662f\u6211\u4eec\u53ef\u4ee5\u628a\u52a8\u6001\u7f51\u7ad9\u91cc\u7684\u52a8\u6001\u7f51\u9875\u6309\u7167\u4e00\u5b9a\u89c4\u5219\u628a\u4e0d\u53d8\u7684\u8d44\u6e90\u548c\u7ecf\u5e38\u53d8\u7684\u8d44\u6e90\u533a\u5206\u5f00\u6765,\u52a8\u9759"))}u.isMDXComponent=!0},90062:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/nginx-32166c5e820aba1ead89f0718446fc2e.png"}}]);