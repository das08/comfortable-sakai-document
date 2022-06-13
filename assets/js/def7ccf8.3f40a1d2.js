"use strict";(self.webpackChunkcomfortable_sakai_document=self.webpackChunkcomfortable_sakai_document||[]).push([[532],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8925:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return f},assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:6},c="REST API",u={unversionedId:"features/api",id:"features/api",title:"REST API",description:"REST API-related functions are written in features/api",source:"@site/docs/features/api.mdx",sourceDirName:"features",slug:"/features/api",permalink:"/comfortable-sakai-document/docs/features/api",draft:!1,editUrl:"https://github.com/das08/comfortable-sakai-document/tree/master/docs/features/api.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Settings",permalink:"/comfortable-sakai-document/docs/features/settings"}},l={},p=[{value:"Implementation",id:"implementation",level:2}],f=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"10px",color:"#fff",padding:"3px",fontSize:"14px"}},t)},m={toc:p,Highlight:f};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rest-api"},"REST API"),(0,o.kt)("p",null,"REST API-related functions are written in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kyoto-u/comfortable-sakai/tree/master/src/features/api"},(0,o.kt)("inlineCode",{parentName:"a"},"features/api")),"\ndirectory."),(0,o.kt)("p",null,"Assignments and Quizzes can be fetched from Sakai REST API by ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchAssignment()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchQuiz()")," function respectively."),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"For example ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchAssignment()")," takes ",(0,o.kt)("a",{parentName:"p",href:"/comfortable-sakai-document/docs/features/course"},(0,o.kt)("inlineCode",{parentName:"a"},"Course"))," object as parameter and uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Course.id")," to send GET\nrequest to Sakai REST API.  "),(0,o.kt)("p",null,"Sakai REST API provides two ways to get Assignments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get Assignments for each course site"),(0,o.kt)("li",{parentName:"ul"},"Get all Assignments of all course sites")),(0,o.kt)("p",null,"For complete REST API detail, please refer to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<Sakai LMS>/direct/assignment/describe")," for documentation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="features/api/fetch.ts"',title:'"features/api/fetch.ts"'},'export const fetchAssignment = (course: Course): Promise<Assignment> => {\n    const queryURL = getBaseURL() + "/direct/assignment/site/" + course.id + ".json";\n    return new Promise((resolve, reject) => {\n        fetch(queryURL, { cache: "no-cache" })\n            .then(async (response) => {\n                if (response.ok) {\n                    const data = await response.json();\n                    const assignmentEntries = decodeAssignmentFromAPI(data);\n                    resolve(new Assignment(course, assignmentEntries, false));\n                } else {\n                    reject(`Request failed: ${response.status}`);\n                }\n            })\n            .catch((err) => console.error(err)); // Error: Request failed: 404\n    });\n};\n')))}d.isMDXComponent=!0}}]);