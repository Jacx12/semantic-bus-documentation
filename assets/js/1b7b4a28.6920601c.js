"use strict";(self.webpackChunksemantic_bus_documentation=self.webpackChunksemantic_bus_documentation||[]).push([[4129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=s,f=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:s,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),s=(n(7294),n(3905));const i={},a=void 0,l={unversionedId:"utilisateur/bus-wiki/Composant:-Filter",id:"utilisateur/bus-wiki/Composant:-Filter",title:"Composant:-Filter",description:"Filtre les donn\xe9es. Seules les donn\xe9es qui passent le filtres seront pass\xe9es au composant suivant.",source:"@site/docs/utilisateur/bus-wiki/Composant:-Filter.md",sourceDirName:"utilisateur/bus-wiki",slug:"/utilisateur/bus-wiki/Composant:-Filter",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-Filter",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Composant:-File-consumer",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-File-consumer"},next:{title:"Composant:-Flat",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-Flat"}},o={},u=[{value:"Exemples",id:"exemples",level:3},{value:"Fonctionnement technique",id:"fonctionnement-technique",level:3},{value:"Branches",id:"branches",level:4}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Filtre les donn\xe9es. Seules les donn\xe9es qui passent le filtres seront pass\xe9es au composant suivant.\nSi le filtre n'autorise que les donn\xe9es dont l'ID est de 2, il n'y aura donc que la donn\xe9e d'ID 2 qui passera au composant suivant."),(0,s.kt)("h3",{id:"exemples"},"Exemples"),(0,s.kt)("p",null,'Pour ajouter des objets ou des tableaux, lorsque vous appuyez sur le petit carr\xe9 en haut \xe0 droite \xe0 l\'int\xe9rieur du carr\xe9 bleu, il faut appuyer sur la fl\xe8che \xe0 droite du bouton "Append" et pr\xe9cisez Array pour tableau, Object pour objet et String pour affecter une valeur \xe0 un champs.\n"$eq" signifie \xe9gal \xe0 et "$ne" n\'est pas \xe9gal \xe0, "$exists" interroge sur l\'existence d\'un champs.'),(0,s.kt)("p",null,"Lorsqu'il n'y a qu'un seul champs \xe0 filtrer on peut proc\xe9der de cette mani\xe8re :\nIci seules les donn\xe9es n'ayant pas pour valeur \"adresse\" comme adresse seront envoy\xe9es au composant suivant."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n addressString {\n  $ne : adresse\n }\n}\n")),(0,s.kt)("p",null,"Dans l'exemple ci-dessous seuls les objets dont le ",(0,s.kt)("inlineCode",{parentName:"p"},"champ_1"),' vaut "Oui" mais le ',(0,s.kt)("inlineCode",{parentName:"p"},"champ_2"),' ne vaut pas "Oui" seront s\xe9lectionn\xe9s.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n  "$and": [\n    {\n      "champ_1": {\n        "$eq": "Oui"\n      }\n    },\n    {\n      "champ_2": {\n        "$ne": "Oui"\n      }\n    }\n  ]\n}\n')),(0,s.kt)("p",null,'Pour avoir plusieurs conditions de filtrage, il faut utiliser un objet "$or" ou "$and" qui se d\xe9compose en un tableau de 2 ou plusieurs \xe9l\xe9ments.\n"$and" permettra d\'accumuler les filtres alors que "$or" permettra de choisir les donn\xe9es correspondantes \xe0 un des filtres.'),(0,s.kt)("p",null,"Voici un autre exemple sp\xe9cifiant que les objet error de l'objet address.lat ou adress.long ne doivent pas exister"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n $or [\n  {\n    adress.lat {\n     error {\n       $exists : false\n    }\n   }\n  }\n\n  {\n    adress.long {\n     error {\n       $exists : false\n    }\n   }\n  }\n\n ]\n}\n")),(0,s.kt)("p",null,"On peut \xe9galement utiliser la clause ",(0,s.kt)("inlineCode",{parentName:"p"},"$where"),"\nIci par exemple on v\xe9rifie qu'un champs n'est pas non d\xe9fini \xe0 l'aide du mot cl\xe9 ",(0,s.kt)("inlineCode",{parentName:"p"},"this")," : "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n $where : this.mail != undefined\n}\n")),(0,s.kt)("p",null,"Pour tester si les valeurs d'un champs n'ont pas une longueur nulle on peut faire : "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n $where : this.mail.length>0\n}\n")),(0,s.kt)("p",null,"et pour filtrer deux conditions on peut utiliser ",(0,s.kt)("inlineCode",{parentName:"p"},"&&")," :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n $where : this.mail.length>0&&this.website.length>0\n}\n")),(0,s.kt)("h3",{id:"fonctionnement-technique"},"Fonctionnement technique"),(0,s.kt)("p",null,"Utilise la syntaxe de la librairie Sift (",(0,s.kt)("a",{parentName:"p",href:"https://github.com/crcn/sift.js"},"https://github.com/crcn/sift.js"),") pour d\xe9terminer les conditions."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Warning"),"\nLe composant Filter ne fonctionne que sur des tableaux d'objets."),(0,s.kt)("h4",{id:"branches"},"Branches"),(0,s.kt)("p",null,"Il est possible d'utiliser deux composants Filter pour appliquer un traitement diff\xe9rent \xe0 des objets."),(0,s.kt)("table",null,(0,s.kt)("tr",null,(0,s.kt)("td",{rowspan:"3"},"Input =>"),(0,s.kt)("td",null,"Filter #1 =>"),(0,s.kt)("td",null,"Output #1")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Filter #2 =>"),(0,s.kt)("td",null,"Output #2"))))}d.isMDXComponent=!0}}]);