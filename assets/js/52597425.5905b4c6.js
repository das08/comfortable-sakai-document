"use strict";(self.webpackChunkcomfortable_sakai_document=self.webpackChunkcomfortable_sakai_document||[]).push([[5825],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5640:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],p={sidebar_position:1},l="Development",c={unversionedId:"guide/development",id:"guide/development",title:"Development",description:"Comfortable Sakai is using TypeScript and React.",source:"@site/docs/guide/development.md",sourceDirName:"guide",slug:"/guide/development",permalink:"/docs/guide/development",draft:!1,editUrl:"https://github.com/das08/comfortable-sakai-document/tree/master/docs/guide/development.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"Quick Build",permalink:"/docs/guide/quick-build"}},u={},d=[{value:"Required Version",id:"required-version",level:2},{value:"Required Package",id:"required-package",level:2}],s={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"development"},"Development"),(0,i.kt)("p",null,"Comfortable Sakai is using ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," and ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),".",(0,i.kt)("br",{parentName:"p"}),"\n","All packages are managed by ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),"."),(0,i.kt)("h2",{id:"required-version"},"Required Version"),(0,i.kt)("p",null,"For building TypeScript application, ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeJS")," is needed as well as ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Install ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeJS")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," that satisfies the following version:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodeJS")," 17.0.0+"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm")," 8.0.0+")),(0,i.kt)("h2",{id:"required-package"},"Required Package"),(0,i.kt)("p",null,"All required packages are described in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kyoto-u/comfortable-sakai/blob/master/package.json"},"package.json"),"."),(0,i.kt)("p",null,"Install dependencies using ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")))}m.isMDXComponent=!0}}]);