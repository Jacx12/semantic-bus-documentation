"use strict";(self.webpackChunksemantic_bus_documentation=self.webpackChunksemantic_bus_documentation||[]).push([[5198],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"utilisateur/bus-wiki/Composant:-SQL",id:"utilisateur/bus-wiki/Composant:-SQL",title:"Composant:-SQL",description:"\xe0 compl\xe9ter",source:"@site/docs/utilisateur/bus-wiki/Composant:-SQL.md",sourceDirName:"utilisateur/bus-wiki",slug:"/utilisateur/bus-wiki/Composant:-SQL",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-SQL",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Composant:-SPARQL",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-SPARQL"},next:{title:"Composant:-Scrapper",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-Scrapper"}},s={},u=[{value:"Exemple",id:"exemple",level:3},{value:"Fonctionnement technique",id:"fonctionnement-technique",level:3},{value:"Param\xe8tres",id:"param\xe8tres",level:3}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\xe0 compl\xe9ter")),(0,a.kt)("p",null,"Interroge une base de donn\xe9es SQL."),(0,a.kt)("h3",{id:"exemple"},"Exemple"),(0,a.kt)("h3",{id:"fonctionnement-technique"},"Fonctionnement technique"),(0,a.kt)("p",null,"Voici les bases de donn\xe9es support\xe9es par Sequelize :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PostgreSQL"),(0,a.kt)("li",{parentName:"ul"},"MySQL"),(0,a.kt)("li",{parentName:"ul"},"SQLite"),(0,a.kt)("li",{parentName:"ul"},"Microsoft SQL Server")),(0,a.kt)("p",null,"Pour plus de renseignements sur les queries MongoDB : ",(0,a.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/queries.html"},"https://mongoosejs.com/docs/queries.html")),(0,a.kt)("h3",{id:"param\xe8tres"},"Param\xe8tres"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Serveur (sans la base de donn\xe9es)"),": URL du serveur sur lequel est la base de donn\xe9es souhait\xe9e."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Base de donn\xe9es ou Database"),": Nom de la base de donn\xe9e."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Nom de la collection"),": "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ne pas supprimer avant injection"),":"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Valeur ou Documentation requ\xeates"),": Requ\xeate qui sera execut\xe9e pour r\xe9cup\xe9rer les donn\xe9es."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Username"),": Nom de l'utilisateur de la base de donn\xe9es."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Nom de la table"),":"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Driver"),":"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Host"),":"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Port"),":"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Password"),": Mot de passe de l'utilisateur.")))}c.isMDXComponent=!0}}]);