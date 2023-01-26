"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[90577],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(27378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11674:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(63445);const l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:l?"macos":r?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:l?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(27378),l=n(38944);const r="tabItem_wHwb";var o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,l.Z)(r,n)},{hidden:t}),e)}},27789:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(27378),l=n(38944),r=n(14185),o=n(27886),i=n(77184),u=n(12112);const s="tabList_J5MA",p="tabItem_l0OV";var c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&h(e,n,t[n]);if(k)for(var n of k(t))C.call(t,n)&&h(e,n,t[n]);return e};function y(e){var t,n;const{lazy:r,block:c,defaultValue:k,values:b,groupId:C,className:h}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=b?b:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,o.l)(v,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===k?k:null!=(n=null!=k?k:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:D,setTabGroupChoices:w}=(0,i.U)(),[O,x]=(0,a.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=C){const e=D[C];null!=e&&e!==O&&v.some((t=>t.value===e))&&x(e)}const A=e=>{const t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==O&&(E(t),x(a),null!=C&&w(C,String(a)))},B=e=>{var t,n;let a=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;a=null!=(t=T[n])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=null!=(n=T[t])?n:T[T.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},v.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=f({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>T.push(e),onKeyDown:B,onClick:A},n),o={className:(0,l.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":O===e})},d(r,m(o))),null!=t?t:e);var r,o}))),r?(0,a.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function v(e){const t=(0,r.Z)();return a.createElement(y,f({key:String(t)},e))}},98100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>C,default:()=>N,frontMatter:()=>b,metadata:()=>h,toc:()=>y});var a=n(35318),l=n(27789),r=n(86386),o=n(11674),i=Object.defineProperty,u=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&m(e,n,t[n]);return e};const b={id:"touchableopacity",title:"TouchableOpacity"},C=void 0,h={unversionedId:"touchableopacity",id:"version-0.63/touchableopacity",title:"TouchableOpacity",description:"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.",source:"@site/versioned_docs/version-0.63/touchableopacity.md",sourceDirName:".",slug:"/touchableopacity",permalink:"/docs/0.63/touchableopacity",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/touchableopacity.md",tags:[],version:"0.63",frontMatter:{id:"touchableopacity",title:"TouchableOpacity"},sidebar:"version-0.63/\u7ec4\u4ef6",previous:{title:"TouchableHighlight",permalink:"/docs/0.63/touchablehighlight"},next:{title:"TouchableWithoutFeedback",permalink:"/docs/0.63/touchablewithoutfeedback"}},f={},y=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"<code>style</code>",id:"style",level:3},{value:"<code>activeOpacity</code>",id:"activeopacity",level:3},{value:"<code>tvParallaxProperties</code>",id:"tvparallaxproperties",level:3},{value:"<code>hasTVPreferredFocus</code>",id:"hastvpreferredfocus",level:3},{value:"<code>nextFocusDown</code>",id:"nextfocusdown",level:3},{value:"<code>nextFocusForward</code>",id:"nextfocusforward",level:3},{value:"<code>nextFocusLeft</code>",id:"nextfocusleft",level:3},{value:"<code>nextFocusRight</code>",id:"nextfocusright",level:3},{value:"<code>nextFocusUp</code>",id:"nextfocusup",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>setOpacityTo()</code>",id:"setopacityto",level:3},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(90.13%), sunnylqm(9.87%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9013-sunnylqm987",level:5}],v={toc:y};function N(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=k(k({},v),m),u(t,s({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",(0,a.kt)("a",k({parentName:"p"},{href:"/docs/0.63/pressable"}),"Pressable")," API.")),(0,a.kt)("p",null,"\u672c\u7ec4\u4ef6\u7528\u4e8e\u5c01\u88c5\u89c6\u56fe\uff0c\u4f7f\u5176\u53ef\u4ee5\u6b63\u786e\u54cd\u5e94\u89e6\u6478\u64cd\u4f5c\u3002\u5f53\u6309\u4e0b\u7684\u65f6\u5019\uff0c\u5c01\u88c5\u7684\u89c6\u56fe\u7684\u4e0d\u900f\u660e\u5ea6\u4f1a\u964d\u4f4e\u3002"),(0,a.kt)("p",null,"\u4e0d\u900f\u660e\u5ea6\u7684\u53d8\u5316\u662f\u901a\u8fc7\u628a\u5b50\u5143\u7d20\u5c01\u88c5\u5728\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.View"),"\u4e2d\u6765\u5b9e\u73b0\u7684\uff0c\u8fd9\u4e2a\u52a8\u753b\u89c6\u56fe\u4f1a\u88ab\u6dfb\u52a0\u5230\u89c6\u56fe\u5c42\u7ea7\u4e2d\uff0c\u5c11\u6570\u60c5\u51b5\u4e0b\u6709\u53ef\u80fd\u4f1a\u5f71\u54cd\u5230\u5e03\u5c40\u3002\uff08\u8bd1\u6ce8\uff1a\u6b64\u7ec4\u4ef6\u4e0e TouchableHighlight \u7684\u533a\u522b\u5728\u4e8e\u5e76\u6ca1\u6709\u989d\u5916\u7684\u989c\u8272\u53d8\u5316\uff0c\u66f4\u9002\u4e8e\u4e00\u822c\u573a\u666f\u3002\uff09"),(0,a.kt)("h2",k({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)(l.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",k({},{className:"snack-player","data-snack-name":"TouchableOpacity Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bcount%2C%20setCount%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20onPress%20%3D%20()%20%3D%3E%20setCount(prevCount%20%3D%3E%20prevCount%20%2B%201)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.countContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3ECount%3A%20%7Bcount%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20style%3D%7Bstyles.button%7D%5Cn%20%20%20%20%20%20%20%20onPress%3D%7BonPress%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EPress%20Here%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingHorizontal%3A%2010%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23DDDDDD%5C%22%2C%5Cn%20%20%20%20padding%3A%2010%5Cn%20%20%7D%2C%5Cn%20%20countContainer%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20padding%3A%2010%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,a.kt)(r.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",k({},{className:"snack-player","data-snack-name":"TouchableOpacity Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20constructor(props)%20%7B%5Cn%20%20%20%20super(props)%3B%5Cn%20%20%20%20this.state%20%3D%20%7B%20count%3A%200%20%7D%3B%5Cn%20%20%7D%5Cn%5Cn%20%20onPress%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20count%3A%20this.state.count%20%2B%201%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20const%20%7B%20count%20%7D%20%3D%20this.state%3B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.countContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3ECount%3A%20%7Bcount%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.button%7D%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis.onPress%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20Here%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingHorizontal%3A%2010%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23DDDDDD%5C%22%2C%5Cn%20%20%20%20padding%3A%2010%5Cn%20%20%7D%2C%5Cn%20%20countContainer%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20padding%3A%2010%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,a.kt)("hr",null),(0,a.kt)("h1",k({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",k({},{id:"props"}),"Props"),(0,a.kt)("p",null,"Inherits ",(0,a.kt)("a",k({parentName:"p"},{href:"/docs/0.63/touchablewithoutfeedback#props"}),"TouchableWithoutFeedback Props"),"."),(0,a.kt)("h3",k({},{id:"style"}),(0,a.kt)("inlineCode",{parentName:"h3"},"style")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"View.style"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"activeopacity"}),(0,a.kt)("inlineCode",{parentName:"h3"},"activeOpacity")),(0,a.kt)("p",null,"\u6307\u5b9a\u5c01\u88c5\u7684\u89c6\u56fe\u5728\u88ab\u89e6\u6478\u64cd\u4f5c\u6fc0\u6d3b\u65f6\u4ee5\u591a\u5c11\u4e0d\u900f\u660e\u5ea6\u663e\u793a\uff080 \u5230 1 \u4e4b\u95f4\uff09\u3002\u9ed8\u8ba4\u503c\u4e3a 0.2\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"tvparallaxproperties"}),(0,a.kt)("inlineCode",{parentName:"h3"},"tvParallaxProperties")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(Apple TV only)")," Object with properties to control Apple TV parallax effects."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enabled"),": If ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", parallax effects are enabled. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shiftDistanceX"),": Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"2.0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shiftDistanceY"),": Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"2.0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tiltAngle"),": Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"magnification"),": Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"1.0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pressMagnification"),": Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"1.0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pressDuration"),": Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"0.3"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pressDelay"),": Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"0.0"),".")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"object"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"iOS")))),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"hastvpreferredfocus"}),(0,a.kt)("inlineCode",{parentName:"h3"},"hasTVPreferredFocus")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(Apple TV only)")," TV preferred focus (see documentation for the View component)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"iOS")))),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"nextfocusdown"}),(0,a.kt)("inlineCode",{parentName:"h3"},"nextFocusDown")),(0,a.kt)("p",null,"TV next focus down (see documentation for the View component)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Android")))),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"nextfocusforward"}),(0,a.kt)("inlineCode",{parentName:"h3"},"nextFocusForward")),(0,a.kt)("p",null,"TV next focus forward (see documentation for the View component)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Android")))),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"nextfocusleft"}),(0,a.kt)("inlineCode",{parentName:"h3"},"nextFocusLeft")),(0,a.kt)("p",null,"TV next focus left (see documentation for the View component)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Android")))),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"nextfocusright"}),(0,a.kt)("inlineCode",{parentName:"h3"},"nextFocusRight")),(0,a.kt)("p",null,"TV next focus right (see documentation for the View component)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Android")))),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"nextfocusup"}),(0,a.kt)("inlineCode",{parentName:"h3"},"nextFocusUp")),(0,a.kt)("p",null,"TV next focus up (see documentation for the View component)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Android")))),(0,a.kt)("h2",k({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,a.kt)("h3",k({},{id:"setopacityto"}),(0,a.kt)("inlineCode",{parentName:"h3"},"setOpacityTo()")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"setOpacityTo((value: number), (duration: number));\n")),(0,a.kt)("p",null,"\u5c06\u672c\u7ec4\u4ef6\u7684\u4e0d\u900f\u660e\u5ea6\u8bbe\u4e3a\u6307\u5b9a\u503c\uff08\u4f34\u6709\u8fc7\u6e21\u52a8\u753b\uff09\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h5",k({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9013-sunnylqm987"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,a.kt)("a",k({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(90.13%), ",(0,a.kt)("a",k({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(9.87%)"))}N.isMDXComponent=!0}}]);