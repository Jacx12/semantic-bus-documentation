"use strict";(self.webpackChunksemantic_bus_documentation=self.webpackChunksemantic_bus_documentation||[]).push([[6555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},o=void 0,u={unversionedId:"utilisateur/bus-wiki/Composant:-Unicity",id:"utilisateur/bus-wiki/Composant:-Unicity",title:"Composant:-Unicity",description:"\xe0 compl\xe9ter",source:"@site/docs/utilisateur/bus-wiki/Composant:-Unicity.md",sourceDirName:"utilisateur/bus-wiki",slug:"/utilisateur/bus-wiki/Composant:-Unicity",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-Unicity",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Composant:-Transform",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-Transform"},next:{title:"Composant:-Upload",permalink:"/semantic-bus-documentation/docs/utilisateur/bus-wiki/Composant:-Upload"}},s={},l=[{value:"Exemple",id:"exemple",level:2},{value:"champs d&#39;unicit\xe9",id:"champs-dunicit\xe9",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2}],p={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\xe0 compl\xe9ter")),(0,a.kt)("p",null,"Structure les donn\xe9es en v\xe9rifiant l'unicit\xe9 par champs et r\xe9partit les donn\xe9es \xe0 la source."),(0,a.kt)("h2",{id:"exemple"},"Exemple"),(0,a.kt)("p",null,"Si on prend ces donn\xe9es : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[\n "bio",\n "\xe9cologie",\n "bio",\n "nourrir",\n "com",\n "\xe9nergie",\n "nourrir"\n]\n')),(0,a.kt)("p",null,"Apr\xe8s \xeatre pass\xe9es par le composant d'unicit\xe9 sans mettre de champs d'unicit\xe9, on aura"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[\n "bio",\n "\xe9cologie",\n "nourrir",\n "com",\n "\xe9nergie",\n]\n')),(0,a.kt)("p",null,"Comme on peut le voir, tous les doublons ont disparu! "),(0,a.kt)("h2",{id:"champs-dunicit\xe9"},"champs d'unicit\xe9"),(0,a.kt)("p",null,"Il est possible d'appliquer l'unictit\xe9 \xe0 un tableau d'objet en pr\xe9cisant quels champs doiventn servir \xe0 \xeatre compar\xe9 pour determiner des objects uniques. Dans ce cas, les champs communs seront attribu\xe9 \xe0 la propri\xe9t\xe9 \"key\" et le reste des donn\xe9es seront report\xe9 dans la propri\xe9t\xe9 data sous fore de tableau pour chaque propri\xe9t\xe9. Il est possible d'appliquer un composant \"property matrix\" pour obtenir un tableau d'objet plutot un tableau pour chaque propri\xe9t\xe9."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[\n "key":{\n      champUnicite1:value1,\n      champUnicite2:value2\n},\n  data:{\n      champ3:[value3.1,value4.1, value5.1]\n      champ4:[value3.2,value4.2,value5.2]\n}\n]\n')),(0,a.kt)("h2",{id:"param\xe8tres"},"Param\xe8tres"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Champs d'unicit\xe9"),": Champs choisi sur lequel r\xe9aliser l'unicit\xe9. Il peut y en avoir un ou plusieurs.")))}m.isMDXComponent=!0}}]);