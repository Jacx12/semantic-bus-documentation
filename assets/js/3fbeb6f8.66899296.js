"use strict";(self.webpackChunksemantic_bus_documentation=self.webpackChunksemantic_bus_documentation||[]).push([[9959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,u={unversionedId:"utilisateur/bus-wiki/Composant:-data.gouv-geocoding",id:"utilisateur/bus-wiki/Composant:-data.gouv-geocoding",title:"Composant:-data.gouv-geocoding",description:"Interroge l'API adresse.data.gouv.fr pour trouver une latitude et une longitude \xe0 partir d'une adresse contenue dans chaque donn\xe9e.",source:"@site/docs/utilisateur/bus-wiki/Composant:-data.gouv-geocoding.md",sourceDirName:"utilisateur/bus-wiki",slug:"/utilisateur/bus-wiki/Composant:-data.gouv-geocoding",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-data.gouv-geocoding",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Composant:-Value-mapping",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-Value-mapping"},next:{title:"Composant:-data.gouv-reverse-geocoding",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-data.gouv-reverse-geocoding"}},s={},l=[{value:"Exemple",id:"exemple",level:3},{value:"Mise en garde \u26a0\ufe0f",id:"mise-en-garde-\ufe0f",level:3},{value:"Param\xe8tres",id:"param\xe8tres",level:3}],d={toc:l},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Interroge l'API ",(0,a.kt)("strong",{parentName:"p"},"adresse.data.gouv.fr")," pour trouver une latitude et une longitude \xe0 partir d'une adresse contenue dans chaque donn\xe9e."),(0,a.kt)("h3",{id:"exemple"},"Exemple"),(0,a.kt)("p",null,"Par exemple avec une donn\xe9e ",(0,a.kt)("inlineCode",{parentName:"p"},'{ street : "106 Rue Alexis Labro", postalCode : 33130, ville : "B\xe8gles", country : "France" }')," on entrera street dans Rue, postalCode dans Code Postal, city dans Ville et country dans Pays.\nSi on souhaite que la latitude et la longitude soit appel\xe9es lat et long, il suffit de le mettre dans les param\xe8tres Latitude et Longitude.\nCe qui nous donnera au final une donn\xe9e qui ressemble \xe0 \xe7a : ",(0,a.kt)("inlineCode",{parentName:"p"},'{ street : "106 Rue Alexis Labro", postalCode : 33130, ville : "B\xe8gles", country : "France", lat : "44.7873024", long : "-0.5603328 }"')),(0,a.kt)("h3",{id:"mise-en-garde-\ufe0f"},"Mise en garde \u26a0\ufe0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cette API ne concerne que les donn\xe9es situ\xe9es en France.")),(0,a.kt)("h3",{id:"param\xe8tres"},"Param\xe8tres"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rue, Ville, Code Postal, Pays"),": Permet de s\xe9lectionner les champs correspondant au nom de la rue, \xe0 la ville, au code postal et au pays. C'est l'adresse contenue dans les donn\xe9es. Ce ne sont pas des param\xe8tres qui sont tous obligatoires \xe0 remplir afin d'obtenir un r\xe9sultat."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Latitude, Longitude"),": Nom des champs qui recevront la latitude et la longitude trouv\xe9e gr\xe2ce \xe0 l'adresse compos\xe9e du code postal, de la rue... contenue dans les donn\xe9es.")))}p.isMDXComponent=!0}}]);