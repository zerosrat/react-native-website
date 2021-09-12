(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[27918],{40493:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return C}});var n=a(27378),r=a(24142),i=a(11787);var l=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(r.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(r.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},s=a(50353),o=a(76889),c=a(35013),d=a(38944);var m={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function u(e){var t=m[e.versionMetadata.banner];return n.createElement(t,e)}function v(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,a=e.versionMetadata,r=(0,s.Z)().siteConfig.title,i=(0,o.gA)({failfast:!0}).pluginId,l=(0,c.J)(i).savePreferredVersionName,m=(0,o.Jo)(i),h=m.latestDocSuggestion,f=m.latestVersionSuggestion,p=null!=h?h:(t=f).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,d.Z)(c.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(u,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(v,{versionLabel:f.label,to:p.path,onClick:function(){return l(f.name)}})))}var f=function(e){var t=e.versionMetadata;return t.banner?n.createElement(h,{versionMetadata:t}):n.createElement(n.Fragment,null)},p=a(71956);function E(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function b(e){var t=e.lastUpdatedBy;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function g(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:c.kM.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(b,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var _=a(91353),N=a(29603),k=a(50120),L="iconEdit_1CBY",T=function(e){var t=e.className,a=(0,k.Z)(e,["className"]);return n.createElement("svg",(0,N.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(L,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function U(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.kM.common.editThisPage},n.createElement(T,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var w=a(52332),Z="docItemContainer_1EXp",y="lastUpdated_1szQ",A="docItemCol_2rXS";var C=function(e){var t,a=e.content,r=e.versionMetadata,i=a.metadata,s=a.frontMatter,c=s.image,m=s.keywords,u=s.hide_title,v=s.hide_table_of_contents,h=i.description,E=i.title,b=i.editUrl,N=i.lastUpdatedAt,k=i.formattedLastUpdatedAt,L=i.lastUpdatedBy,T=(0,o.gA)({failfast:!0}).pluginId,C=(0,o.gB)(T),M=(0,o.zu)(T),B=C.length>1&&!M.isLast,S=!u&&void 0===a.contentTitle;return n.createElement(n.Fragment,null,n.createElement(p.Z,{title:E,description:h,keywords:m,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",(t={},t[A]=!v,t))},n.createElement(f,{versionMetadata:r}),n.createElement("div",{className:Z},n.createElement("article",null,B&&n.createElement("div",null,n.createElement("span",{className:"badge badge--secondary"},"\u7248\u672c: ",r.label)),n.createElement("div",{className:"markdown"},S&&n.createElement(w.N,null,E),n.createElement(a,null)),(b||N||L)&&n.createElement("footer",{className:"docMetadata row docusaurus-mt-lg"},n.createElement("div",{className:"col"},b&&n.createElement(U,{editUrl:b})),n.createElement("div",{className:(0,d.Z)("col",y)},(N||L)&&n.createElement(g,{lastUpdatedAt:N,formattedLastUpdatedAt:k,lastUpdatedBy:L})))),n.createElement(l,{metadata:i}))),!v&&a.toc&&n.createElement("div",{className:"col col--3"},n.createElement(_.Z,{toc:a.toc}))))}},91353:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var n=a(27378),r=a(38944),i=a(35013);function l(e){var t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function s(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return l(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function o(){var e=(0,n.useRef)(0),t=(0,i.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var c=function(e){var t=(0,n.useRef)(void 0),a=o();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=s({anchorTopOffset:a.current}),l=e.find((function(e){return i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===l)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,a])},d="tableOfContents_rbnR",m="table-of-contents__link";function u(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(u,{isChild:!0,toc:e.children}))}))):null}var v=function(e){var t=e.toc;return c(m,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(d,"thin-scrollbar")},n.createElement(u,{toc:t}),n.createElement("div",{className:"wwads-cn wwads-vertical","data-id":"58",style:{maxWidth:200,marginTop:20}}))}},52332:function(e,t,a){"use strict";a.d(t,{N:function(){return m},Z:function(){return u}});var n=a(50120),r=a(29603),i=a(27378),l=a(38944),s=a(11787),o=a(35013),c="anchorWithStickyNavbar_23Bc",d="anchorWithHideOnScrollNavbar_3Dj-",m=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},u=function(e){return"h1"===e?m:(t=e,function(e){var a,r=e.id,m=(0,n.Z)(e,["id"]),u=(0,o.LU)().navbar.hideOnScroll;return r?i.createElement(t,m,i.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor","anchor__"+t,(a={},a[d]=u,a[c]=!u,a)),id:r}),m.children,i.createElement("a",{className:"hash-link",href:"#"+r,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):i.createElement(t,m)});var t}}}]);