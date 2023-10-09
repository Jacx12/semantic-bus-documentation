"use strict";(self.webpackChunksemantic_bus_documentation=self.webpackChunksemantic_bus_documentation||[]).push([[7840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"bus-wiki/Composant:-Params-creation",id:"bus-wiki/Composant:-Params-creation",title:"Composant:-Params-creation",description:"Ne fonctionne pas? Voir la documentation de Transformation",source:"@site/docs/bus-wiki/Composant:-Params-creation.md",sourceDirName:"bus-wiki",slug:"/bus-wiki/Composant:-Params-creation",permalink:"/semantic-bus-documentation/docs/bus-wiki/Composant:-Params-creation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Composant:-JsEvaluation",permalink:"/semantic-bus-documentation/docs/bus-wiki/Composant:-JsEvaluation"},next:{title:"Composant:-Post-consumer",permalink:"/semantic-bus-documentation/docs/bus-wiki/Composant:-Post-consumer"}},s={},u=[{value:"Quand en a-t-on besoin?",id:"quand-en-a-t-on-besoin",level:2},{value:"Principe de la r\xe9cursivit\xe9 dans Grappe",id:"principe-de-la-r\xe9cursivit\xe9-dans-grappe",level:2},{value:"Composants utilis\xe9s",id:"composants-utilis\xe9s",level:2},{value:"Boucle partie du bas :",id:"boucle-partie-du-bas-",level:3},{value:"Boucle partie haut :",id:"boucle-partie-haut-",level:3},{value:"Boucle fin :",id:"boucle-fin-",level:3},{value:"Suite :",id:"suite-",level:3},{value:"Conseil",id:"conseil",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Ne fonctionne pas? Voir la documentation de ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/assemblee-virtuelle/Semantic-Bus/wiki/Composant:-Transform"},"Transformation"))),(0,a.kt)("h1",{id:"informations-sur-la-r\xe9cursivit\xe9-"},"Informations sur la r\xe9cursivit\xe9 :"),(0,a.kt)("h2",{id:"quand-en-a-t-on-besoin"},"Quand en a-t-on besoin?"),(0,a.kt)("p",null,"Quand on a besoin d'extraire toutes les donn\xe9es provenant d'une API qui ne renvoie qu'une partie limit\xe9e des donn\xe9es dans une url du type \"",(0,a.kt)("a",{parentName:"p",href:"https://test.com/offset/500/page/1%22"},'https://test.com/offset/500/page/1"'),".\nCette API sera appel\xe9e API externe.\nL'API que nous cr\xe9erons s'appelera API interne.\nNous allons donc trouver un moyen de parcourir toutes les \"pages\" diff\xe9rentes de donn\xe9es.\nPour ce faire il faut : "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Trouver une condition d'arr\xeat "),(0,a.kt)("li",{parentName:"ol"},"Mettre en place une boucle pour la r\xe9cursivit\xe9 ! ")),(0,a.kt)("h2",{id:"principe-de-la-r\xe9cursivit\xe9-dans-grappe"},"Principe de la r\xe9cursivit\xe9 dans Grappe"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/63355855/213407953-ed51ecc0-7334-4afa-a8b2-e8e20e67d66e.png",alt:"recursivite_bus"})),(0,a.kt)("p",null,"Nous allons tout d'abord nous baser sur l'URL permettant d'avoir acc\xe8s aux premi\xe8res donn\xe9es de l'API r\xe9cursive.\nCette URL est pass\xe9e dans un body d'une requ\xeate post \xe0 notre API interne.\nL'API interne va alors traiter les donn\xe9es : "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Elle va chercher \xe0 acc\xe9der \xe0 la page correspondant \xe0 l'URL de l'API externe."),(0,a.kt)("li",{parentName:"ol"},"Elle recup\xe8re les donn\xe9es correspondant \xe0 l'it\xe9ration et en parall\xe8le :")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"on d\xe9finit un crit\xe8re de fin d'it\xe9ration"),(0,a.kt)("li",{parentName:"ul"},"on teste ce crit\xe8re "),(0,a.kt)("li",{parentName:"ul"},"si l'appel doit \xeatre continu\xe9, on appelle notre API interne sinon on renvoie un tableau vide")),(0,a.kt)("p",null,"Voici ce qu'il se passe lors de l'appel de l'API interne : "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/63355855/214236560-808b59e2-275f-4de2-806f-cc3b2f4b7cd6.png",alt:"recursivite_bus-Page-3 drawio"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Nos donn\xe9es sont agr\xe9g\xe9es \xe0 chaque passage dans le flux de traitement de l'API interne."),(0,a.kt)("li",{parentName:"ol"},"Si un tableau vide a \xe9t\xe9 renvoy\xe9, on renvoie l'int\xe9gralit\xe9 des donn\xe9es provenant de l'API externe."),(0,a.kt)("li",{parentName:"ol"},"Notre API interne est d\xe9sormais utilisable et elle contient toutes les donn\xe9es de l'API externe ! ")),(0,a.kt)("h2",{id:"composants-utilis\xe9s"},"Composants utilis\xe9s"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/63355855/213409293-056a7a6f-e5aa-490a-990f-b7a88a775f7d.png",alt:"grappe_schema_composants"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1er Http consumer : Get sur {\xa3.body.urlNext} qui sera notre url de l'API externe.")),(0,a.kt)("h3",{id:"boucle-partie-du-bas-"},"Boucle partie du bas :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JS evaluation + transform : renvoient l'url de l'API externe utilis\xe9e par le 1er Http consumer.\n",(0,a.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/63355855/212878590-d5d2009d-9268-4967-b70b-e2a0af5c2df1.png",alt:"image"})),(0,a.kt)("li",{parentName:"ul"},"2\xe8me Http consumer : Post sur url API grappe de r\xe9cursivit\xe9 avec deeper focus activ\xe9."),(0,a.kt)("li",{parentName:"ul"},"Root from path : vers l'endroit o\xf9 sont les donn\xe9es, ici le body de la requ\xeate."),(0,a.kt)("li",{parentName:"ul"},"Flat : avoir toutes les donn\xe9es \xe0 plat.")),(0,a.kt)("h3",{id:"boucle-partie-haut-"},"Boucle partie haut :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Root from path + keytoarray + flat : r\xe9cup\xe9ration des donn\xe9es de l'API externe.")),(0,a.kt)("h3",{id:"boucle-fin-"},"Boucle fin :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Aggregate : permet de cr\xe9er la r\xe9cursivit\xe9 en attendant qu'un tableau vide soit donn\xe9 pour arr\xeater la boucle r\xe9cursive. Permet de compiler toutes les donn\xe9es."),(0,a.kt)("li",{parentName:"ul"},"Http provider : Api interne grappe.io.")),(0,a.kt)("h3",{id:"suite-"},"Suite :"),(0,a.kt)("p",null,"En g\xe9n\xe9ral, il faudra cr\xe9er une partie sp\xe9cifique \xe0 la premi\xe8re initialisation avec l'url de l'API source contenant les premi\xe8res donn\xe9es.\nPour le traitement des donn\xe9es on pourra soit le r\xe9aliser durant la boucle it\xe9rative soit \xe0 la fin quand on a acc\xe8s \xe0 toutes les donn\xe9es."),(0,a.kt)("h2",{id:"conseil"},"Conseil"),(0,a.kt)("p",null,"Pour un meilleur d\xe9buggage il est conseill\xe9 d'utiliser l'onglet param\xe9trer (pour augmenter le nombre de flux visibles) et l'onglet consulter (pour voir les flux sur lesquels on travaille)."))}d.isMDXComponent=!0}}]);