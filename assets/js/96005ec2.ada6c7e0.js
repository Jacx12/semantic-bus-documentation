"use strict";(self.webpackChunksemantic_bus_documentation=self.webpackChunksemantic_bus_documentation||[]).push([[863],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={},a=void 0,u={unversionedId:"utilisateur/bus-wiki/Composant:-HTTP-Provider",id:"utilisateur/bus-wiki/Composant:-HTTP-Provider",title:"Composant:-HTTP-Provider",description:"Permet d'envoyer des requ\xeates gr\xe2ce \xe0 une url et des param\xe8tres.",source:"@site/docs/utilisateur/bus-wiki/Composant:-HTTP-Provider.md",sourceDirName:"utilisateur/bus-wiki",slug:"/utilisateur/bus-wiki/Composant:-HTTP-Provider",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-HTTP-Provider",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Composant:-Google-geocoding",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-Google-geocoding"},next:{title:"Composant:-Influxdb",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-Influxdb"}},s={},c=[],l={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Permet d\'envoyer des requ\xeates gr\xe2ce \xe0 une url et des param\xe8tres.\nM\xe9thodes autoris\xe9es : Get, Post, Patch, Put, Delete.\nOn peut d\xe9cider de mettre des donn\xe9es dans la requ\xeate ou non avec le param\xe8tre "corps de requ\xeate vide".\nUn certain nombre de content-type est autoris\xe9 (application/json, application/ld+json etc.)'),(0,o.kt)("p",null,'Pour les donn\xe9es "s\xe9mantiques", il faut utiliser un content-type "application/ld+json" et un Header "accept" qui vaut "application/ld+json".'))}d.isMDXComponent=!0}}]);