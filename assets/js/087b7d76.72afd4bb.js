"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[66795],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,b=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11674:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(27378),r=n(38944);const l="tabItem_wHwb";var i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>D});var a=n(27378),r=n(38944),l=n(12112),i=n(35331),o=n(14953),u=n(27886),s=n(7106),p=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function f(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}function k(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:f(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function y({value:e,tabValues:t}){return t.some((t=>t.value===e))}function h({queryString:e=!1,groupId:t}){const n=(0,i.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,o._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);var a,l;t.set(r,e),n.replace((a=((e,t)=>{for(var n in t||(t={}))b.call(t,n)&&g(e,n,t[n]);if(d)for(var n of d(t))v.call(t,n)&&g(e,n,t[n]);return e})({},n.location),l={search:t.toString()},c(a,m(l))))}),[r,n])]}function N(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=k(e),[i,o]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!y({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(n=t.find((e=>e.default)))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,p]=h({queryString:n,groupId:r}),[c,m]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,s.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),d=(()=>{const e=null!=u?u:c;return y({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{d&&o(d)}),[d]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!y({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),m(e)}),[p,m,l]),tabValues:l}}var C=n(14185);const w="tabList_J5MA",O="tabItem_l0OV";var S=Object.defineProperty,j=Object.defineProperties,T=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,M=(e,t,n)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))P.call(t,n)&&M(e,n,t[n]);if(x)for(var n of x(t))I.call(t,n)&&M(e,n,t[n]);return e};function J({className:e,block:t,selectedValue:n,selectValue:i,tabValues:o}){const u=[],{blockElementScrollPositionUntilNextRender:s}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),r=o[a].value;r!==n&&(s(t),i(r))},c=e=>{var t,n;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;a=null!=(t=u[n])?t:u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=null!=(n=u[t])?n:u[u.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},o.map((({value:e,label:t,attributes:l})=>{return a.createElement("li",(i=E({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>u.push(e),onKeyDown:c,onClick:p},l),o={className:(0,r.Z)("tabs__item",O,null==l?void 0:l.className,{"tabs__item--active":n===e})},j(i,T(o))),null!=t?t:e);var i,o})))}function _({lazy:e,children:t,selectedValue:n}){if(t=Array.isArray(t)?t:[t],e){const e=t.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function R(e){const t=N(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",w)},a.createElement(J,E(E({},e),t)),a.createElement(_,E(E({},e),t)))}function D(e){const t=(0,C.Z)();return a.createElement(R,E({key:String(t)},e))}},51143:(e,t,n)=>{n.d(t,{ZP:()=>d});var a=n(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e};const m={toc:[]};function d(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},m),p),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",c({},{title:"\u6ce8\u610f",type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u6587\u6863\u4ecd\u7136\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u6027"),"\u7684\uff0c\u968f\u7740\u6211\u4eec\u7684\u8fed\u4ee3\uff0c\u7ec6\u8282\u4f1a\u6709\u53d8\u5316\u3002\u6b22\u8fce\u5728",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"\u5de5\u4f5c\u5c0f\u7ec4\u5185\u7684\u8ba8\u8bba"),"\u4e2d\u5206\u4eab\u4f60\u7684\u53cd\u9988\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u6b64\u5916\uff0c\u5b83\u8fd8\u5305\u542b\u51e0\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u624b\u52a8\u6b65\u9aa4"),"\u3002\u8bf7\u6ce8\u610f\u65b0\u67b6\u6784\u5c1a\u672a\u7a33\u5b9a\u4e0b\u6765\uff0c\u6700\u7ec8\u7684\u5f00\u53d1\u8005\u4f53\u9a8c\u4f1a\u7ee7\u7eed\u8fed\u4ee3\u6539\u5584\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u5f00\u53d1\u5de5\u5177\u3001\u6a21\u677f\u548c\u5e93\uff0c\u4ee5\u5e2e\u52a9\u4f60\u5728\u65b0\u67b6\u6784\u4e0a\u5feb\u901f\u5165\u95e8\uff0c\u800c\u4e0d\u9700\u8981\u7ecf\u5386\u6574\u4e2a\u8bbe\u7f6e\u8fc7\u7a0b\u3002")))}d.isMDXComponent=!0},77566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>C,frontMatter:()=>g,metadata:()=>k,toc:()=>h});var a=n(35318),r=n(48375),l=n(86386),i=n(11674),o=n(51143),u=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&b(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&b(e,n,t[n]);return e};const g={id:"cxx-custom-types",title:"\u652f\u6301\u81ea\u5b9a\u4e49 C++ \u7c7b\u578b"},f=void 0,k={unversionedId:"the-new-architecture/cxx-custom-types",id:"version-0.72/the-new-architecture/cxx-custom-types",title:"\u652f\u6301\u81ea\u5b9a\u4e49 C++ \u7c7b\u578b",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cC++ Turbo Native \u6a21\u5757\u652f\u6301\u5927\u591a\u6570 std:: \u6807\u51c6\u7c7b\u578b\u7684\u6865\u63a5\u529f\u80fd\u3002",source:"@site/versioned_docs/version-0.72/the-new-architecture/cxx-custom-types.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/cxx-custom-types",permalink:"/docs/the-new-architecture/cxx-custom-types",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/cxx-custom-types.md",tags:[],version:"0.72",frontMatter:{id:"cxx-custom-types",title:"\u652f\u6301\u81ea\u5b9a\u4e49 C++ \u7c7b\u578b"},sidebar:"docs",previous:{title:"C++ Turbo \u539f\u751f\u6a21\u5757",permalink:"/docs/the-new-architecture/cxx-cxxturbomodules"},next:{title:"\u5411\u540e\u517c\u5bb9\u7684\u610f\u4e49",permalink:"/docs/the-new-architecture/backward-compatibility"}},y={},h=[{value:"\u5b9e\u4f8b: Int64",id:"\u5b9e\u4f8b-int64",level:2},{value:"\u4efb\u610f\u81ea\u5b9a\u4e49\u7c7b\u578b",id:"\u4efb\u610f\u81ea\u5b9a\u4e49\u7c7b\u578b",level:2},{value:"\u81ea\u5b9a\u4e49\u7ed3\u6784\u4f53",id:"\u81ea\u5b9a\u4e49\u7ed3\u6784\u4f53",level:2},{value:"\u624b\u52a8\u58f0\u660e\u7c7b\u578b",id:"\u624b\u52a8\u58f0\u660e\u7c7b\u578b",level:3},{value:"\u7ed3\u6784\u4f53\u751f\u6210\u5668",id:"\u7ed3\u6784\u4f53\u751f\u6210\u5668",level:3},{value:"\u6210\u5458\u7c7b\u578b",id:"\u6210\u5458\u7c7b\u578b",level:4},{value:"\u57fa\u7c7b",id:"\u57fa\u7c7b",level:4}],N={toc:h};function C(e){var t,n=e,{components:u}=n,b=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=v(v({},N),b),s(t,p({components:u,mdxType:"MDXLayout"}))),(0,a.kt)(o.ZP,{mdxType:"NewArchitectureWarning"}),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cC++ Turbo Native \u6a21\u5757\u652f\u6301\u5927\u591a\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"std::")," \u6807\u51c6\u7c7b\u578b\u7684",(0,a.kt)("a",v({parentName:"p"},{href:"https://github.com/facebook/react-native/tree/main/packages/react-native/ReactCommon/react/bridging"}),"\u6865\u63a5\u529f\u80fd"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u5728\u5e94\u7528\u7a0b\u5e8f / \u5e93\u4e2d\u6dfb\u52a0\u5bf9\u65b0 / \u81ea\u5b9a\u4e49\u7c7b\u578b\u7684\u652f\u6301\uff0c\u5219\u53ea\u9700\u63d0\u4f9b\u5fc5\u8981\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u6865\u63a5"),"\u5934\u6587\u4ef6\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u672c\u6307\u5357\u5ef6\u7eed\u4e0a\u4e00\u8282",(0,a.kt)("a",v({parentName:"p"},{href:"./cxx-cxxturbomodules"}),"C++ Turbo \u539f\u751f\u6a21\u5757"),"\u3002"),(0,a.kt)("h2",v({},{id:"\u5b9e\u4f8b-int64"}),"\u5b9e\u4f8b: Int64"),(0,a.kt)("p",null,"C++ Turbo \u539f\u751f\u6a21\u5757\u5c1a\u4e0d\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"p"},"int64_t"),"\u6570\u5b57 - \u56e0\u4e3a JavaScript \u4e0d\u652f\u6301\u5927\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"2^53"),"\u7684\u6570\u5b57\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u65e0\u6cd5\u5c06 > ",(0,a.kt)("inlineCode",{parentName:"p"},"2^53")," \u7684\u6570\u5b57\u8868\u793a\u4e3a JavaScript \u7684",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\u7c7b\u578b\uff0c\u4f46\u6211\u4eec\u53ef\u4ee5\u5c06\u5b83\u4eec\u8868\u793a\u4e3a JavaScript \u7684",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"\u7c7b\u578b\u5e76\u901a\u8fc7\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"tm"),"\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Int64.h"),"\u7684\u81ea\u5b9a\u4e49\u6865\u63a5\u5934\u6587\u4ef6\u6765\u81ea\u52a8\u628a\u5b83\u4eec\u8f6c\u6362\u5230 C++ \u7684",(0,a.kt)("inlineCode",{parentName:"p"},"int64_t"),"\u7c7b\u578b:"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp",metastring:"Int64.h","Int64.h":!0}),'#pragma once\n\n#include <react/bridging/Bridging.h>\n\nnamespace facebook::react {\n\ntemplate <>\nstruct Bridging<int64_t> {\n  static int64_t fromJs(jsi::Runtime &rt, const jsi::String &value) {\n    try {\n      size_t pos;\n      auto str = value.utf8(rt);\n      auto num = std::stoll(str, &pos);\n      if (pos != str.size()) {\n        throw std::invalid_argument("Invalid number"); // don\'t support alphanumeric strings\n      }\n      return num;\n    } catch (const std::logic_error &e) {\n      throw jsi::JSError(rt, e.what());\n    }\n  }\n\n  static jsi::String toJs(jsi::Runtime &rt, int64_t value) {\n    return bridging::toJs(rt, std::to_string(value));\n  }\n};\n\n} // namespace facebook::react\n')),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49\u7684\u6865\u63a5\u5934\u6587\u4ef6\u7684\u5173\u952e\u7ec4\u4ef6\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u660e\u786e\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"li"},"Bridging"),"\u7ed3\u6784\u4f53\u4e3a\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\uff0c\u672c\u4f8b\u4e2d\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"int64_t")),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"fromJs")," \u51fd\u6570\u5c06\u4ece ",(0,a.kt)("inlineCode",{parentName:"li"},"jsi::")," \u7c7b\u578b\u8f6c\u6362\u4e3a\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"toJS")," \u51fd\u6570\u5c06\u4ece\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\u8f6c\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"jsi:")," \u7c7b\u578b")),(0,a.kt)("p",null,"\u7701\u7565\u4efb\u4e00\u51fd\u6570\u90fd\u4f1a\u4f7f\u4f60\u7684\u6865\u63a5\u5934\u6587\u4ef6\u6210\u4e3a ",(0,a.kt)("em",{parentName:"p"},"\u53ea\u8bfb")," \u6216 ",(0,a.kt)("em",{parentName:"p"},"\u53ea\u5199")," \u3002"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u5411 JavaScript \u89c4\u8303\u6dfb\u52a0\u4ee5\u4e0b\u51fd\u6570\uff1a"),(0,a.kt)(r.Z,{groupId:"turbomodule-specs",queryString:!0,defaultValue:i.Z.defaultJavaScriptSpecLanguages,values:i.Z.javaScriptSpecLanguages,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"typescript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-typescript",metastring:'title="NativeSampleModule.ts"',title:'"NativeSampleModule.ts"'}),"   // ...\n   readonly cubicRoot: (input: string) => number;\n   // ..\n"))),(0,a.kt)(l.Z,{value:"flow",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-js",metastring:'title="NativeSampleModule.js"',title:'"NativeSampleModule.js"'}),"   // ...\n   +cubicRoot: (input: string) => number;\n   // ..\n")))),(0,a.kt)("p",null,"\u5728\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeSampleModule.h")," \u6587\u4ef6\u4e2d\u58f0\u660e\u5b83\u5e76\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"Int64.h")," \u5934\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'//...\n#include "Int64.h"\n//...\nint32_t cubicRoot(jsi::Runtime& rt, int64_t input);\n')),(0,a.kt)("p",null,"\u5e76\u5c06\u5176\u5b9e\u73b0\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"NativeSampleModule.cpp"),"\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"//...\n#include <cmath>\n//...\nint32_t NativeSampleModule::cubicRoot(jsi::Runtime& rt, int64_t input) {\n    return std::cbrt(input);\n}\n")),(0,a.kt)("p",null,"\u5728\u60a8\u7684\u5e94\u7528\u4e2d\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8c03\u7528\u6b64\u65b0\u7684\u672c\u5730\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-js"}),"<Section title=\"Cxx TurboModule\">\n  NativeSampleModule.cubicRoot(...) ={' '}\n  {JSON.stringify(\n    NativeSampleModule.cubicRoot('9223372036854775807'),\n  )}\n</Section>\n")),(0,a.kt)("p",null,"\u5e94\u8be5\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"2097152"),"\u3002"),(0,a.kt)("h2",v({},{id:"\u4efb\u610f\u81ea\u5b9a\u4e49\u7c7b\u578b"}),"\u4efb\u610f\u81ea\u5b9a\u4e49\u7c7b\u578b"),(0,a.kt)("p",null,"\u4e0e\u4e0a\u9762\u7684\u793a\u4f8b\u7c7b\u4f3c\uff0c\u60a8\u73b0\u5728\u53ef\u4ee5\u4e3a\u8981\u516c\u5f00\u7ed9 React Native \u7684\u4efb\u4f55\u81ea\u5b9a\u4e49 C++ \u7c7b\u578b\u7f16\u5199\u81ea\u5b9a\u4e49\u6865\u63a5\u529f\u80fd\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u5728 C++ Turbo \u539f\u751f\u6a21\u5757\u4e2d\u6dfb\u52a0\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"folly::StringPiece"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"QString"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"boost::filesystem::path"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"absl::optional"),"\u6216\u5176\u4ed6\u4efb\u4f55\u9700\u8981\u652f\u6301\u7684\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp",metastring:'title="Path.h"',title:'"Path.h"'}),"#pragma once\n\n#include <react/bridging/Bridging.h>\n#include <boost/filesystem.hpp>\n\nnamespace facebook::react {\n\ntemplate<>\nstruct Bridging<boost::filesystem::path> {\n  static boost::filesystem::path fromJs(jsi::Runtime& rt, const std::string& value) { // auto-bridge from jsi::String to std::string\n    return boost::filesystem::path(value);\n  }\n\n  static jsi::String toJs(jsi::Runtime& rt, boost::filesystem::path value) {\n    return bridging::toJs(rt, value.string());\n  }\n};\n\n} // namespace facebook::react\n")),(0,a.kt)("h2",v({},{id:"\u81ea\u5b9a\u4e49\u7ed3\u6784\u4f53"}),"\u81ea\u5b9a\u4e49\u7ed3\u6784\u4f53"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684\u65b9\u6cd5\u6765\u5904\u7406 JavaScript \u4e2d\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-js"}),"export type CustomType = {\n  key: string,\n  enabled: boolean,\n  time?: number,\n};\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 C++ Turbo \u539f\u751f\u6a21\u5757\u516c\u5f00\u8bbf\u95ee"),(0,a.kt)(r.Z,{groupId:"turbomodule-specs",queryString:!0,defaultValue:i.Z.defaultJavaScriptSpecLanguages,values:i.Z.javaScriptSpecLanguages,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"typescript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-typescript",metastring:'title="NativeSampleModule.ts"',title:'"NativeSampleModule.ts"'}),"   // ...\n   readonly passCustomType: (input: CustomType) => CustomType;\n   // ..\n"))),(0,a.kt)(l.Z,{value:"flow",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-js",metastring:'title="NativeSampleModule.js"',title:'"NativeSampleModule.js"'}),"   // ...\n   +passCustomType: (input: CustomType) => CustomType;\n   // ..\n")))),(0,a.kt)("h3",v({},{id:"\u624b\u52a8\u58f0\u660e\u7c7b\u578b"}),"\u624b\u52a8\u58f0\u660e\u7c7b\u578b"),(0,a.kt)("p",null,"\u8981\u5728 C++ \u4e2d\u4f7f\u7528\u6b64\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u60a8\u9700\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"NativeSampleModule.h"),"\u6587\u4ef6\u4e2d\u76f4\u63a5\u5b9a\u4e49\u81ea\u5df1\u7684\u7ed3\u6784\u4f53\u548c\u6865\u63a5\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'struct CustomType {\n  std::string key;\n  bool enabled;\n  std::optional<int32_t> time;\n};\n\ntemplate <>\nstruct Bridging<CustomType> {\n  static CustomType fromJs(\n      jsi::Runtime &rt,\n      const jsi::Object &value,\n      const std::shared_ptr<CallInvoker> &jsInvoker) {\n    return CustomType{\n        bridging::fromJs<std::string>(\n            rt, value.getProperty(rt, "key"), jsInvoker),\n        bridging::fromJs<bool>(\n            rt, value.getProperty(rt, "enabled"), jsInvoker),\n        bridging::fromJs<std::optional<int32_t>>(\n            rt, value.getProperty(rt, "time"), jsInvoker)};\n  }\n\n  static jsi::Object toJs(jsi::Runtime &rt, const CustomType &value) {\n    auto result = facebook::jsi::Object(rt);\n    result.setProperty(rt, "key", bridging::toJs(rt, value.key));\n    result.setProperty(rt, "enabled", bridging::toJs(rt, value.enabled));\n    if (value.time) {\n      result.setProperty(rt, "time", bridging::toJs(rt, value.time.value()));\n    }\n    return result;\n  }\n};\n')),(0,a.kt)("p",null,"\u5728\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeSampleModule.h")," \u6587\u4ef6\u4e2d\u58f0\u660e\u5b83\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"  CustomType passCustomType(jsi::Runtime& rt, CustomType input);\n")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeSampleModule.cpp")," \u6587\u4ef6\u4e2d\u5b9e\u73b0:"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'CustomType NativeSampleModule::passCustomType(jsi::Runtime& rt, CustomType input) {\n  input.key = "1909";\n  input.enabled = !input.enabled;\n  input.time = 42;\n  return input;\n}\n')),(0,a.kt)("p",null,"\u5728\u5e94\u7528\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8c03\u7528\u6b64\u65b0\u7684\u539f\u751f\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-js"}),"<Section title=\"Cxx TurboModule\">\n  NativeSampleModule.passCustomType(...) ={' '}\n  {JSON.stringify(\n    NativeSampleModule.passCustomType({\n      key: '123',\n      enabled: true,\n      time: undefined,\n    }),\n  )}\n</Section>\n")),(0,a.kt)("p",null,"\u5e94\u8be5\u4f1a\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},'{"key":"1909","enabled":false","time":42}'),"\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u505a\u6cd5\u53ef\u884c\uff0c\u4f46\u6bd4\u8f83\u590d\u6742\u3002"),(0,a.kt)("h3",v({},{id:"\u7ed3\u6784\u4f53\u751f\u6210\u5668"}),"\u7ed3\u6784\u4f53\u751f\u6210\u5668"),(0,a.kt)("p",null,(0,a.kt)("a",v({parentName:"p"},{href:"/docs/the-new-architecture/pillars-codegen"}),(0,a.kt)("strong",{parentName:"a"},"Codegen"))," \u652f\u6301 C++ Turbo \u539f\u751f\u6a21\u5757\u7684\u7ed3\u6784\u4f53\u751f\u6210\u5668\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeSampleModule.h")," \u4e2d\u7684\u4ee3\u7801\u7b80\u5316\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"using CustomType = NativeSampleModuleBaseCustomType<std::string, bool, std::optional<int32_t>>;\ntemplate <>\nstruct Bridging<CustomType>\n    : NativeSampleModuleBaseCustomTypeBridging<std::string, bool, std::optional<int32_t>> {};\n")),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"using CustomType")," \u53ef\u4ee5\u4e3a\u4f60\u7684\u5177\u4f53\u7ed3\u6784\u4f53\u58f0\u660e\u4e00\u4e2a\u540d\u79f0\u3002"),(0,a.kt)("h4",v({},{id:"\u6210\u5458\u7c7b\u578b"}),"\u6210\u5458\u7c7b\u578b"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"std::string\u3001bool \u548c std::optional<int32_t>"),"\uff0c\u60a8\u53ef\u4ee5\u6309\u7167\u5728 JavaScript \u89c4\u8303\u4e2d\u5b9a\u4e49\u7684\u987a\u5e8f\u5b9a\u4e49\u7ed3\u6784\u6210\u5458\u7684\u5c5e\u6027\u7c7b\u578b\u3002",(0,a.kt)("strong",{parentName:"p"},"\u987a\u5e8f\u5f88\u91cd\u8981"),"\u3002\u7b2c\u4e00\u4e2a\u6a21\u677f\u53c2\u6570\u6307\u7684\u662f\u7ed3\u6784\u4f53\u7684\u7b2c\u4e00\u4e2a\u6570\u636e\u7c7b\u578b\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u4efb\u4f55\u81ea\u5b9a\u4e49\u8f6c\u6362\u51fd\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u60a8\u53ea\u80fd\u5c06 JS \u5b57\u7b26\u4e32\u6865\u63a5\u5230 ",(0,a.kt)("a",v({parentName:"li"},{href:"https://github.com/facebook/react-native/blob/main/packages/react-native/ReactCommon/react/bridging/AString.h"}),"std::string"),"\uff0c\u5e76\u5c06 JS \u5e03\u5c14\u503c\u6865\u63a5\u5230 ",(0,a.kt)("a",v({parentName:"li"},{href:"https://github.com/facebook/react-native/blob/main/packages/react-native/ReactCommon/react/bridging/Bool.h"}),"bool"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f46\u662f\u60a8\u53ef\u4ee5\u9009\u62e9\u4e0d\u540c\u7684 JS ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," \u7684",(0,a.kt)("a",v({parentName:"li"},{href:"https://github.com/facebook/react-native/blob/main/packages/react-native/ReactCommon/react/bridging/Number.h"}),"C++\u8868\u793a\u65b9\u5f0f"),"\u3002")),(0,a.kt)("h4",v({},{id:"\u57fa\u7c7b"}),"\u57fa\u7c7b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NativeSampleModuleBaseCustomType")," \u662f\u5728\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"AppSpecsJSI.h")," \u4e2d\u81ea\u52a8\u751f\u6210\u7684\u6a21\u677f\uff0c\u5176\u540d\u79f0\u7531\u4ee5\u4e0b\u5185\u5bb9\u751f\u6210\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NativeSampleModule"),"\uff08C++ Turbo \u539f\u751f\u6a21\u5757\u5728 JavaScript \u89c4\u8303\u4e2d\u7684\u540d\u79f0\uff09+"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Base"),"\uff08\u5e38\u91cf\uff09+"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CustomType"),"\uff08JavaScript \u89c4\u8303\u4e2d\u7c7b\u578b\u7684\u540d\u79f0\uff09")),(0,a.kt)("p",null,"\u540c\u6837\u7684\u547d\u540d\u89c4\u5219\u4e5f\u9002\u7528\u4e8e\u5fc5\u8981\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Bridging")," \u7ed3\u6784\u4f53\uff0c\u8be5\u7ed3\u6784\u4f53\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"struct Bridging<CustomType>")," \u5b9a\u4e49\u3002"))}C.isMDXComponent=!0}}]);