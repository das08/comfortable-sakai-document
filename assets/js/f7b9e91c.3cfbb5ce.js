"use strict";(self.webpackChunkcomfortable_sakai_document=self.webpackChunkcomfortable_sakai_document||[]).push([[162],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,g=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9857:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l="Storage Overview",c={unversionedId:"storage/storage",id:"storage/storage",title:"Storage Overview",description:"Comfortable Sakai saves Assignments and Quizzes in the local storage of the browser.",source:"@site/docs/storage/storage.mdx",sourceDirName:"storage",slug:"/storage/",permalink:"/comfortable-sakai-document/docs/storage/",draft:!1,editUrl:"https://github.com/das08/comfortable-sakai-document/tree/master/docs/storage/storage.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Browser Storage",permalink:"/comfortable-sakai-document/docs/category/browser-storage"},next:{title:"Settings",permalink:"/comfortable-sakai-document/docs/category/settings"}},m={},d=[{value:"Saving to Local Storage",id:"saving-to-local-storage",level:2},{value:"Loading from Local Storage",id:"loading-from-local-storage",level:2}],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"storage-overview"},"Storage Overview"),(0,o.kt)("p",null,"Comfortable Sakai saves Assignments and Quizzes in the local storage of the browser.",(0,o.kt)("br",{parentName:"p"}),"\n","Local storage of the browser can be used within the same browser extension and cannot be shared with other browser extensions."),(0,o.kt)("p",null,"For more information about the local storage, please visit ",(0,o.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/extensions/reference/storage/"},"https://developer.chrome.com/docs/extensions/reference/storage/"),"."),(0,o.kt)("h2",{id:"saving-to-local-storage"},"Saving to Local Storage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Primary Key: ",(0,o.kt)("inlineCode",{parentName:"li"},"<Hostname>")),(0,o.kt)("li",{parentName:"ul"},"Secondary Key: ",(0,o.kt)("inlineCode",{parentName:"li"},"<Key for value>")),(0,o.kt)("li",{parentName:"ul"},"Value: ",(0,o.kt)("inlineCode",{parentName:"li"},"<Serialized Value>"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Primary key is required to distinguish between different Sakai LMS instances."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/features/storage/index.ts"',title:'"src/features/storage/index.ts"'},'/**\n * Save data to Storage.\n * @param hostname - A PRIMARY key for storage. Usually a hostname of Sakai LMS.\n * @param key - A SECONDARY key for storage. Defined in `constant.ts`.\n * @param value - A data to be stored.\n */\nexport const toStorage = (hostname: string, key: string, value: any): Promise<string> => {\n    const entity: { [key: string]: [value: any] } = {};\n    entity[key] = value;\n    return new Promise(function (resolve) {\n        chrome.storage.local.get(hostname, function (items: any) {\n            if (typeof items[hostname] === "undefined") {\n                items[hostname] = {};\n            }\n            items[hostname][key] = value;\n            chrome.storage.local.set({ [hostname]: items[hostname] }, () => {\n                resolve("saved");\n            });\n        });\n    });\n};\n')),(0,o.kt)("h2",{id:"loading-from-local-storage"},"Loading from Local Storage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Primary Key: ",(0,o.kt)("inlineCode",{parentName:"li"},"<Hostname>")),(0,o.kt)("li",{parentName:"ul"},"Secondary Key: ",(0,o.kt)("inlineCode",{parentName:"li"},"<Key for value>")),(0,o.kt)("li",{parentName:"ul"},"Value: ",(0,o.kt)("inlineCode",{parentName:"li"},"<Serialized Value>"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Primary key is required to distinguish between different Sakai LMS instances."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/features/storage/index.ts"',title:'"src/features/storage/index.ts"'},"/**\n * Load data from Storage.\n * Type T is generics for return type.\n * @param hostname - A PRIMARY key for storage. Usually a hostname of Sakai LMS.\n * @param key - - A SECONDARY key for storage. Defined in `constant.ts`.\n * @param decoder - Decoder for generics type T.\n */\nexport const fromStorage = <T>(hostname: string, key: string, decoder: (data: any) => T): Promise<T> => {\n    return new Promise(function (resolve) {\n        chrome.storage.local.get(hostname, function (items: any) {\n            if (hostname in items && key in items[hostname]) {\n                resolve(decoder(items[hostname][key]));\n            } else {\n                resolve(decoder(undefined));\n            }\n        });\n    });\n};\n")))}u.isMDXComponent=!0}}]);