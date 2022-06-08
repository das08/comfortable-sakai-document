"use strict";(self.webpackChunkcomfortable_sakai_document=self.webpackChunkcomfortable_sakai_document||[]).push([[6593],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2750:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={sidebar_position:4},s="Fetch Cache Time",u={unversionedId:"functionality/cache-time",id:"functionality/cache-time",title:"Fetch Cache Time",description:"Comfortable Sakai uses REST API to get published Assignments and Quizzes.",source:"@site/docs/functionality/cache-time.md",sourceDirName:"functionality",slug:"/functionality/cache-time",permalink:"/docs/functionality/cache-time",draft:!1,editUrl:"https://github.com/das08/comfortable-sakai-document/tree/master/docs/functionality/cache-time.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"New Assignment Notification Badge",permalink:"/docs/functionality/notification-badge"},next:{title:"Getting Started",permalink:"/docs/category/getting-started"}},l={},p=[],m={toc:p};function f(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fetch-cache-time"},"Fetch Cache Time"),(0,a.kt)("p",null,"Comfortable Sakai uses REST API to get published Assignments and Quizzes.",(0,a.kt)("br",{parentName:"p"}),"\n","You can visit ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<Sakai LMS>/direct/describe")," to see available APIs."),(0,a.kt)("p",null,"Since fetching Assignments and Quizzes every time the page is reloaded would put a high load on the server,\nwe have decided to put some ",(0,a.kt)("strong",{parentName:"p"},"Cache Time")," for fetching these."),(0,a.kt)("p",null,"Default Cache Time is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Assignments: ",(0,a.kt)("strong",{parentName:"li"},"120")," seconds"),(0,a.kt)("li",{parentName:"ul"},"Quizzes: ",(0,a.kt)("strong",{parentName:"li"},"600")," seconds")),(0,a.kt)("p",null,"You can modify Cache Time from ",(0,a.kt)("a",{parentName:"p",href:"./minisakai#settings-tab"},"miniSakai Settings Tab"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cache Time",src:n(1453).Z,width:"544",height:"268"})))}f.isMDXComponent=!0},1453:function(e,t,n){t.Z=n.p+"assets/images/cache_time-6cb1be64cd3376c14a0bb9b18d58a09f.png"}}]);