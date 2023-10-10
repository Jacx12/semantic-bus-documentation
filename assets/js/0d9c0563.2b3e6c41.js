"use strict";(self.webpackChunksemantic_bus_documentation=self.webpackChunksemantic_bus_documentation||[]).push([[3368],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=i(t),d=a,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||u;return t?n.createElement(g,o(o({ref:r},p),{},{components:t})):n.createElement(g,o({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var u=t.length,o=new Array(u);o[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<u;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7792:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>i});var n=t(7462),a=(t(7294),t(3905));const u={},o=void 0,s={unversionedId:"utilisateur/bus-wiki/Composant:-Value-mapping",id:"utilisateur/bus-wiki/Composant:-Value-mapping",title:"Composant:-Value-mapping",description:"Remplace les valeurs d'un champs pr\xe9sent dans les donn\xe9es par une autre valeur \xe0 la mani\xe8re d'un tableau de correspondance.",source:"@site/docs/utilisateur/bus-wiki/Composant:-Value-mapping.md",sourceDirName:"utilisateur/bus-wiki",slug:"/utilisateur/bus-wiki/Composant:-Value-mapping",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-Value-mapping",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Composant:-Upload",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-Upload"},next:{title:"Composant:-data.gouv-geocoding",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-data.gouv-geocoding"}},l={},i=[{value:"Exemple",id:"exemple",level:3},{value:"Fonctionnement technique",id:"fonctionnement-technique",level:3},{value:"Mise en garde \u26a0\ufe0f",id:"mise-en-garde-\ufe0f",level:3},{value:"Param\xe8tres",id:"param\xe8tres",level:3}],p={toc:i},c="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Remplace les valeurs d'un champs pr\xe9sent dans les donn\xe9es par une autre valeur \xe0 la mani\xe8re d'un tableau de correspondance."),(0,a.kt)("h3",{id:"exemple"},"Exemple"),(0,a.kt)("p",null,"Prenons ces trois donn\xe9es en entr\xe9e : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{ \n   { name : "Cybelle Plan\xe8te", categories : "Nourrir" }, \n   { name : "Costumotek", categories : "culture" }, \n   { name : "Les semeurs de jardin", categories : "Former, no\xf9rrir, bio" } \n}\n')),(0,a.kt)("p",null,'Si l\'on souhaite remplacer toutes les valeurs des champs categories on va proc\xe9der comme ceci.\nIl suffira d\'appuyer sur "ignorer la valeur source", sur "ignorer les majuscules", sur "ignorer les accents" puis d\'appuyer 5 fois sur "Ajouter une valeur".\nOn rentrera les valeurs "nourrir" (on le rentre deux fois car on souhaite avoir deux valeurs de sortie pour la cat\xe9gorie "nourrir") puis "culture", "former" et "bio"  dans chacune des cases en "Valeur d\'entr\xe9e".\nIl suffit ensuite de nommer les valeurs de sortie de chacune des valeurs des champs.'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'nourrir = "ag_al", nourrir = "e_s_s", culture = "cultu", former = "forma", bio = "ag_al"')),(0,a.kt)("p",null,"Apr\xe8s avoir entr\xe9 tous les param\xe8tres, on obtiendra ce r\xe9sultat : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{ \n   { name : "Cybelle Plan\xe8te", categories : "ag_al, e_s_s" }, \n   { name : "Costumotek", categories : "cultu" }, \n   { name : "Les semeurs de jardin", categories : "forma, ag_al, ag_al, e_s_s" } \n}\n')),(0,a.kt)("h3",{id:"fonctionnement-technique"},"Fonctionnement technique"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Une valeur source peut \xeatre traduite en plusieurs valeurs cibles."),(0,a.kt)("li",{parentName:"ul"},"Une valeur cible peut \xeatre r\xe9f\xe9renc\xe9e par plusieurs valeurs sources.")),(0,a.kt)("h3",{id:"mise-en-garde-\ufe0f"},"Mise en garde \u26a0\ufe0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"N'oubliez pas de faire pr\xe9c\xe9der ce composant d'un composant Deeper Focus pour d\xe9terminer sur quel champs de donn\xe9es le mapping se fera !")),(0,a.kt)("h3",{id:"param\xe8tres"},"Param\xe8tres"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ignorer la valeur source"),': Permet de garder uniquement la "nouvelle valeur du champs" et non "l\'ancienne valeur et la nouvelle".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ignorer les majuscules"),": Permet de r\xe9aliser le mapping de propri\xe9t\xe9s sans tenir compte des majuscules."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ignorer les accents"),": Permet de r\xe9aliser le mapping de propri\xe9t\xe9s sans tenir compte des accents."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ajouter une valeur"),": Permet d'ajouter une propri\xe9t\xe9 et d'y assigner une (pour pouvoir")))}m.isMDXComponent=!0}}]);