(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[51996],{56573:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});var r=n(27378);function a(){return r.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},31554:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(27378),a="iconExternalLink_pqex",o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,l=void 0===o?13.5:o;return r.createElement("svg",{width:n,height:l,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},51996:function(e,t,n){"use strict";n.d(t,{Z:function(){return _e}});var r=n(27378),a=n(38944),o=n(69635),l=n(11787),c=n(35013),i="skipToContent_3wvD";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,r.useRef)(null),t=(0,o.k6)().action;return(0,c.SL)((function(n){var r=n.location;e.current&&!r.hash&&"PUSH"===t&&s(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:i,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},r.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=n(29603),d=n(50120);function f(e){var t=e.width,n=void 0===t?20:t,a=e.height,o=void 0===a?20:a,l=e.className,c=(0,d.Z)(e,["width","height","className"]);return r.createElement("svg",(0,m.Z)({className:l,viewBox:"0 0 24 24",width:n,height:o,fill:"currentColor"},c),r.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))}var v="announcementBar_2FrG",h="announcementBarPlaceholder_3Bc7",g="announcementBarClose_QGKR",b="announcementBarContent_1th2";var E=function(){var e=(0,c.nT)(),t=e.isClosed,n=e.close,o=(0,c.LU)().announcementBar;if(!o)return null;var i=o.content,s=o.backgroundColor,u=o.textColor,m=o.isCloseable;return!i||m&&t?null:r.createElement("div",{className:v,style:{backgroundColor:s,color:u},role:"banner"},m&&r.createElement("div",{className:h}),r.createElement("div",{className:b,dangerouslySetInnerHTML:{__html:i}}),m?r.createElement("button",{type:"button",className:(0,a.Z)("clean-btn close",g),onClick:n,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement(f,{width:14,height:14})):null)},p=n(78347),k=n(76457),Z={toggle:"toggle_2wFP"},w=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(Z.toggle,Z.dark),style:n},t)},_=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(Z.toggle,Z.light),style:n},t)},N=(0,r.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,l=e.disabled,c=e.onChange,i=(0,r.useState)(o),s=i[0],u=i[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":l})},r.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked),r.createElement("div",{className:"react-toggle-thumb"})),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=v.current)||t.click())}}))}));function y(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,o=t.lightIcon,l=t.lightIconStyle,i=(0,k.Z)();return r.createElement(N,(0,m.Z)({disabled:!i,icons:{checked:r.createElement(w,{icon:n,style:a}),unchecked:r.createElement(_,{icon:o,style:l})}},e))}var C=n(29237),S=n(95135),L=function(e){var t=(0,o.TH)(),n=(0,r.useState)(e),a=n[0],l=n[1],i=(0,r.useRef)(!1),s=(0,r.useState)(0),u=s[0],m=s[1],d=(0,r.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,S.Z)((function(t,n){var r=t.scrollY,a=null==n?void 0:n.scrollY;if(e)if(r<u)l(!0);else{if(i.current)return i.current=!1,void l(!1);a&&0===r&&l(!0);var o=document.documentElement.scrollHeight-u,c=window.innerHeight;a&&r>=a?l(!1):r+c<o&&l(!0)}}),[u,i]),(0,c.SL)((function(t){e&&!t.location.hash&&l(!0)})),(0,r.useEffect)((function(){e&&t.hash&&(i.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:a}};var I=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},D=n(98245),T=n(76889),B=n(75330),M=n(13059),P=function(e){var t=e.width,n=void 0===t?30:t,a=e.height,o=void 0===a?30:a,l=e.className,c=(0,d.Z)(e,["width","height","className"]);return r.createElement("svg",(0,m.Z)({className:l,width:n,height:o,viewBox:"0 0 30 30","aria-hidden":"true"},c),r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))};function x(e){var t=e.width,n=void 0===t?20:t,a=e.height,o=void 0===a?20:a,l=e.className,c=(0,d.Z)(e,["width","height","className"]);return r.createElement("svg",(0,m.Z)({className:l,viewBox:"0 0 413.348 413.348",width:n,height:o,fill:"currentColor"},c),r.createElement("path",{d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"}))}var A="toggle_2vag",R="navbarHideable_z9Sw",O="navbarHidden_2kTK",U="navbarSidebarToggle_3XMU",H="navbarSidebarCloseSvg_1G3c",V="right";function z(){return(0,c.LU)().navbar.items}function W(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,C.Z)(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?o():a()}),[a,o]),disabled:e}}function j(e){var t=e.sidebarShown,n=e.toggleSidebar;I(t);var o=z(),i=W(),s=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,o=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:a}),l=(0,c.D9)(o),i=(0,r.useState)((function(){return!1})),s=i[0],u=i[1];(0,r.useEffect)((function(){o&&!l&&u(!0)}),[o,l]);var m=!!o;return(0,r.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,r.useCallback)((function(){u(!1)}),[]),content:o}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(M.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!i.disabled&&r.createElement(y,{className:U,checked:i.isDarkTheme,onChange:i.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},r.createElement(x,{width:20,height:20,className:H}))),r.createElement("div",{className:(0,a.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(B.Z,(0,m.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},o.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},r.createElement(l.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}var F=function(){var e,t=(0,c.LU)().navbar,n=t.hideOnScroll,o=t.style,l=function(){var e=(0,D.Z)(),t="mobile"===e,n=(0,r.useState)(!1),a=n[0],o=n[1];(0,c.Rb)((function(){a&&o(!1)}));var l=(0,r.useCallback)((function(){o((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&o(!1)}),[e]),{shouldRender:t,toggle:l,shown:a}}(),i=W(),s=(0,T.gA)(),u=L(n),d=u.navbarRef,f=u.isNavbarVisible,v=z(),h=v.some((function(e){return"search"===e.type})),g=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:V)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:V)}))}}(v),b=g.leftItems,E=g.rightItems;return r.createElement("nav",{ref:d,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":l.shown},e[R]=n,e[O]=n&&!f,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},((null==v?void 0:v.length)>0||s)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:l.toggle,onKeyDown:l.toggle},r.createElement(P,null)),r.createElement(M.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),b.map((function(e,t){return r.createElement(B.Z,(0,m.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},E.map((function(e,t){return r.createElement(B.Z,(0,m.Z)({},e,{key:t}))})),!i.disabled&&r.createElement(y,{className:A,checked:i.isDarkTheme,onChange:i.toggle}),!h&&r.createElement(p.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:l.toggle}),l.shouldRender&&r.createElement(j,{sidebarShown:l.shown,toggleSidebar:l.toggle}))},K=n(24142),q=n(98948),G=n(45626),X="footerLogoLink_1gX9",Y=n(68167),J=n(31554);function Q(e){var t=e.to,n=e.href,a=e.label,o=e.prependBaseUrlToHref,l=(0,d.Z)(e,["to","href","label","prependBaseUrlToHref"]),c=(0,q.Z)(t),i=(0,q.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(K.Z,(0,m.Z)({className:"footer__link-item"},n?{href:o?i:n}:{to:c},l),n&&!(0,G.Z)(n)?r.createElement("span",null,a,r.createElement(J.Z,null)):a)}var $=function(e){var t=e.sources,n=e.alt;return r.createElement(Y.Z,{className:"footer__logo",alt:n,sources:t})};var ee=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,o=t.links,l=void 0===o?[]:o,i=t.logo,s=void 0===i?{}:i,u={light:(0,q.Z)(s.src),dark:(0,q.Z)(s.srcDark||s.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},l&&l.length>0&&r.createElement("div",{className:"row footer__links"},l.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(Q,e))}))):null)}))),(s||n)&&r.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},s.href?r.createElement(K.Z,{href:s.href,className:X},r.createElement($,{alt:s.alt,sources:u})):r.createElement($,{alt:s.alt,sources:u})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},te=n(161),ne=(0,c.WA)("theme"),re="light",ae="dark",oe=function(e){return e===ae?ae:re},le=function(e){(0,c.WA)("theme").set(oe(e))},ce=function(){var e=(0,c.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return te.Z.canUseDOM?oe(document.documentElement.getAttribute("data-theme")):oe(e)}(t)),l=o[0],i=o[1],s=(0,r.useCallback)((function(){i(re),le(re)}),[]),u=(0,r.useCallback)((function(){i(ae),le(ae)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",oe(l))}),[l]),(0,r.useEffect)((function(){if(!n)try{var e=ne.get();null!==e&&i(oe(e))}catch(t){console.error(t)}}),[i]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?ae:re)}))}),[]),{isDarkTheme:l===ae,setLightTheme:s,setDarkTheme:u}},ie=n(20579);var se=function(e){var t=ce(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(ie.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},ue="docusaurus.tab.",me=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,c._f)().forEach((function(t){if(t.startsWith(ue)){var n=t.substring(ue.length);e[n]=(0,c.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},de=n(84956);var fe=function(e){var t=me(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(de.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function ve(e){var t=e.children;return r.createElement(se,null,r.createElement(c.pl,null,r.createElement(fe,null,r.createElement(c.L5,null,r.createElement(c.Cn,null,t)))))}var he=n(55361),ge=n(50353);function be(e){var t=e.locale,n=e.version,a=e.tag,o=t;return r.createElement(he.Z,null,o&&r.createElement("meta",{name:"docsearch:language",content:o}),n&&r.createElement("meta",{name:"docsearch:version",content:n}),a&&r.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}var Ee=n(71956);function pe(){var e=(0,ge.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,c.l5)();return r.createElement(he.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function ke(e){var t=e.permalink,n=(0,ge.Z)().siteConfig.url,a=function(){var e=(0,ge.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,q.Z)(t)}(),l=t?""+n+t:a;return r.createElement(he.Z,null,r.createElement("meta",{property:"og:url",content:l}),r.createElement("link",{rel:"canonical",href:l}))}function Ze(e){var t=(0,ge.Z)(),n=t.siteConfig.favicon,a=t.i18n,o=a.currentLocale,l=a.localeConfigs,i=(0,c.LU)(),s=i.metadatas,u=i.image,d=e.title,f=e.description,v=e.image,h=e.keywords,g=e.searchMetadatas,b=(0,q.Z)(n),E=(0,c.pe)(d),p=o,k=l[o].direction;return r.createElement(r.Fragment,null,r.createElement(he.Z,null,r.createElement("html",{lang:p,dir:k}),n&&r.createElement("link",{rel:"shortcut icon",href:b}),r.createElement("title",null,E),r.createElement("meta",{property:"og:title",content:E}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),u&&r.createElement(Ee.Z,{image:u}),v&&r.createElement(Ee.Z,{image:v}),r.createElement(Ee.Z,{description:f,keywords:h}),r.createElement(ke,null),r.createElement(pe,null),r.createElement(be,(0,m.Z)({tag:c.HX,locale:o},g)),r.createElement(he.Z,null,s.map((function(e,t){return r.createElement("meta",(0,m.Z)({key:"metadata_"+t},e))}))))}var we=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var _e=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,l=e.pageClassName;return we(),r.createElement(ve,null,r.createElement(Ze,e),r.createElement(u,null),r.createElement(E,null),r.createElement(F,null),r.createElement("div",{className:(0,a.Z)(c.kM.wrapper.main,o,l)},t),!n&&r.createElement(ee,null))}},13059:function(e,t,n){"use strict";var r=n(29603),a=n(50120),o=n(27378),l=n(24142),c=n(68167),i=n(98948),s=n(50353),u=n(35013);t.Z=function(e){var t=(0,s.Z)().siteConfig.title,n=(0,u.LU)().navbar,m=n.title,d=n.logo,f=void 0===d?{src:""}:d,v=e.imageClassName,h=e.titleClassName,g=(0,a.Z)(e,["imageClassName","titleClassName"]),b=(0,i.Z)(f.href||"/"),E={light:(0,i.Z)(f.src),dark:(0,i.Z)(f.srcDark||f.src)};return o.createElement(l.Z,(0,r.Z)({to:b},g,f.target&&{target:f.target}),f.src&&o.createElement(c.Z,{className:v,sources:E,alt:f.alt||m||t}),null!=m&&o.createElement("b",{className:h},m))}},39970:function(e,t,n){"use strict";n.d(t,{O:function(){return d}});var r=n(29603),a=n(50120),o=n(27378),l=n(38944),c=n(24142),i=n(98948),s=n(31554),u=n(45626),m=n(75330);function d(e){var t,n=e.activeBasePath,l=e.activeBaseRegex,m=e.to,d=e.href,f=e.label,v=e.activeClassName,h=void 0===v?"":v,g=e.prependBaseUrlToHref,b=(0,a.Z)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),E=(0,i.Z)(m),p=(0,i.Z)(n),k=(0,i.Z)(d,{forcePrependBaseUrl:!0}),Z=f&&d&&!(0,u.Z)(d),w="dropdown__link--active"===h;return o.createElement(c.Z,(0,r.Z)({},d?{href:g?k:d}:Object.assign({isNavLink:!0,activeClassName:null!=(t=b.className)&&t.includes(h)?"":h,to:E},n||l?{isActive:function(e,t){return l?new RegExp(l).test(t.pathname):t.pathname.startsWith(p)}}:null),b),Z?o.createElement("span",null,f,o.createElement(s.Z,w&&{width:12,height:12})):f)}function f(e){var t=e.className,n=e.isDropdownItem,c=void 0!==n&&n,i=(0,a.Z)(e,["className","isDropdownItem"]),s=o.createElement(d,(0,r.Z)({className:(0,l.Z)(c?"dropdown__link":"navbar__item navbar__link",t)},i));return c?o.createElement("li",null,s):s}function v(e){var t=e.className,n=(e.isDropdownItem,(0,a.Z)(e,["className","isDropdownItem"]));return o.createElement("li",{className:"menu__list-item"},o.createElement(d,(0,r.Z)({className:(0,l.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,l=void 0!==n&&n,c=(e.position,(0,a.Z)(e,["mobile","position"])),i=l?v:f;return o.createElement(i,(0,r.Z)({},c,{activeClassName:null!=(t=c.activeClassName)?t:(0,m.E)(l)}))}},5807:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(29603),a=n(50120),o=n(27378),l=n(39970),c=n(76889),i=n(38944),s=n(75330),u=n(35013),m=n(51721);function d(e){var t,n=e.docId,d=e.label,f=e.docsPluginId,v=(0,a.Z)(e,["docId","label","docsPluginId"]),h=(0,c.Iw)(f),g=h.activeVersion,b=h.activeDoc,E=(0,u.J)(f).preferredVersion,p=(0,c.yW)(f),k=function(e,t){var n=e.flatMap((function(e){return e.docs})),r=n.find((function(e){return e.id===t}));if(!r){var a=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return r}((0,m.uniq)([g,E,p].filter(Boolean)),n),Z=(0,s.E)(v.mobile);return o.createElement(l.Z,(0,r.Z)({exact:!0},v,{className:(0,i.Z)(v.className,(t={},t[Z]=(null==b?void 0:b.sidebar)&&b.sidebar===k.sidebar,t)),activeClassName:Z,label:null!=d?d:k.id,to:k.path}))}},18259:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(29603),a=n(50120),o=n(27378),l=n(39970),c=n(43727),i=n(76889),s=n(35013),u=n(11787),m=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,d=e.mobile,f=e.docsPluginId,v=e.dropdownActiveClassDisabled,h=e.dropdownItemsBefore,g=e.dropdownItemsAfter,b=(0,a.Z)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),E=(0,i.Iw)(f),p=(0,i.gB)(f),k=(0,i.yW)(f),Z=(0,s.J)(f),w=Z.preferredVersion,_=Z.savePreferredVersionName;var N,y=(N=p.map((function(e){var t=(null==E?void 0:E.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==E?void 0:E.activeVersion)},onClick:function(){_(e.name)}}})),[].concat(h,N,g)),C=null!=(t=null!=(n=E.activeVersion)?n:w)?t:k,S=d&&y?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):C.label,L=d&&y?void 0:m(C).path;return y.length<=1?o.createElement(l.Z,(0,r.Z)({},b,{mobile:d,label:S,to:L,isActive:v?function(){return!1}:void 0})):o.createElement(c.Z,(0,r.Z)({},b,{mobile:d,label:S,to:L,items:y,isActive:v?function(){return!1}:void 0}))}},71393:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(29603),a=n(50120),o=n(27378),l=n(39970),c=n(76889),i=n(35013);function s(e){var t,n=e.label,s=e.to,u=e.docsPluginId,m=(0,a.Z)(e,["label","to","docsPluginId"]),d=(0,c.zu)(u),f=(0,i.J)(u).preferredVersion,v=(0,c.yW)(u),h=null!=(t=null!=d?d:f)?t:v,g=null!=n?n:h.label,b=null!=s?s:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return o.createElement(l.Z,(0,r.Z)({},m,{label:g,to:b}))}},43727:function(e,t,n){"use strict";var r=n(29603),a=n(50120),o=n(27378),l=n(38944),c=n(35013),i=n(39970),s=n(75330);function u(e,t){return e.some((function(e){return function(e,t){return!!(0,c.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function m(e){var t,n=e.items,c=e.position,u=e.className,m=(0,a.Z)(e,["items","position","className"]),d=(0,o.useRef)(null),f=(0,o.useRef)(null),v=(0,o.useState)(!1),h=v[0],g=v[1];return(0,o.useEffect)((function(){var e=function(e){d.current&&!d.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[d]),o.createElement("div",{ref:d,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===c,"dropdown--show":h})},o.createElement(i.O,(0,r.Z)({className:(0,l.Z)("navbar__link",u)},m,{onClick:m.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!h))}}),null!=(t=m.children)?t:m.label),o.createElement("ul",{ref:f,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(s.Z,(0,r.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var r=d.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function d(e){var t,n=e.items,m=e.className,d=(e.position,(0,a.Z)(e,["items","className","position"])),f=(0,c.be)(),v=u(n,f),h=(0,c.uR)({initialState:function(){return!v}}),g=h.collapsed,b=h.toggleCollapsed,E=h.setCollapsed;return(0,o.useEffect)((function(){v&&E(!v)}),[f,v]),o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":g})},o.createElement(i.O,(0,r.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",m)},d,{onClick:function(e){e.preventDefault(),b()}}),null!=(t=d.children)?t:d.label),o.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return o.createElement(s.Z,(0,r.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,["mobile"]),l=n?d:m;return o.createElement(l,r)}},75330:function(e,t,n){"use strict";n.d(t,{Z:function(){return b},E:function(){return g}});var r=n(50120),a=n(27378),o=n(39970),l=n(43727),c=n(29603),i=function(e){var t=e.width,n=void 0===t?20:t,o=e.height,l=void 0===o?20:o,i=(0,r.Z)(e,["width","height"]);return a.createElement("svg",(0,c.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},i),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},s=n(50353),u=n(35013),m="iconLanguage_geqI";function d(e){var t=e.mobile,n=e.dropdownItemsBefore,o=e.dropdownItemsAfter,d=(0,r.Z)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),f=(0,s.Z)().i18n,v=f.currentLocale,h=f.locales,g=f.localeConfigs,b=(0,u.l5)();function E(e){return g[e].label}var p=h.map((function(e){var t="pathname://"+b.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:E(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===v?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),k=[].concat(n,p,o),Z=t?"Languages":E(v);return a.createElement(l.Z,(0,c.Z)({},d,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(i,{className:m}),a.createElement("span",null,Z)),items:k}))}var f=n(78347);function v(e){return e.mobile?null:a.createElement(f.Z,null)}var h={default:function(){return o.Z},localeDropdown:function(){return d},search:function(){return v},dropdown:function(){return l.Z},docsVersion:function(){return n(71393).Z},docsVersionDropdown:function(){return n(18259).Z},doc:function(){return n(5807).Z}};var g=function(e){return e?"menu__link--active":"navbar__link--active"};function b(e){var t=e.type,n=(0,r.Z)(e,["type"]),o=function(e){var t=h[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return a.createElement(o,n)}},20579:function(e,t,n){"use strict";var r=n(27378).createContext(void 0);t.Z=r},68167:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(29603),a=n(50120),o=n(27378),l=n(38944),c=n(76457),i=n(29237),s={themedImage:"themedImage_Ir0T","themedImage--light":"themedImage--light_2_E0","themedImage--dark":"themedImage--dark_2JiM"},u=function(e){var t=(0,c.Z)(),n=(0,i.Z)().isDarkTheme,u=e.sources,m=e.className,d=e.alt,f=void 0===d?"":d,v=(0,a.Z)(e,["sources","className","alt"]),h=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,h.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:u[e],alt:f,className:(0,l.Z)(s.themedImage,s["themedImage--"+e],m)},v))})))}},84956:function(e,t,n){"use strict";var r=(0,n(27378).createContext)(void 0);t.Z=r},95135:function(e,t,n){"use strict";var r=n(27378),a=n(161),o=function(){return a.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(o()),a=function(){var t=o();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},29237:function(e,t,n){"use strict";var r=n(27378),a=n(20579);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},98245:function(e,t,n){"use strict";var r=n(27378),a=n(161),o="desktop",l="mobile",c="ssr";function i(){return a.Z.canUseDOM?window.innerWidth>996?o:l:c}t.Z=function(){var e=(0,r.useState)((function(){return i()})),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n(i())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},78347:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var r=n(29603),a=n(50120),o=n(27378),l=n(31542),c=n(50353),i=n(69635),s=n(98948),u=n(24142),m=n(55361),d=n(49033);function f(){return o.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},o.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var v=n(56573);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b="Ctrl";var E=o.forwardRef((function(e,t){var n=e.translations,r=void 0===n?{}:n,a=g(e,["translations"]),l=r.buttonText,c=void 0===l?"Search":l,i=r.buttonAriaLabel,s=void 0===i?"Search":i,u=(0,o.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":b:null}),[]);return o.createElement("button",h({type:"button",className:"DocSearch DocSearch-Button","aria-label":s},a,{ref:t}),o.createElement("span",{className:"DocSearch-Button-Container"},o.createElement(v.W,null),o.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),o.createElement("span",{className:"DocSearch-Button-Keys"},null!==u&&o.createElement(o.Fragment,null,o.createElement("span",{className:"DocSearch-Button-Key"},u===b?o.createElement(f,null):u),o.createElement("span",{className:"DocSearch-Button-Key"},"K"))))})),p=n(76889),k=n(35013);function Z(){var e=function(){var e=(0,c.Z)().i18n,t=(0,p._r)(),n=(0,p.WS)(),r=(0,k.Oh)(),a=[k.HX].concat(Object.keys(t).map((function(e){var a,o,l=(null==n||null==(a=n.activePlugin)?void 0:a.pluginId)===e?n.activeVersion:void 0,c=r[e],i=t[e].versions.find((function(e){return e.isLast})),s=null!=(o=null!=l?l:c)?o:i;return(0,k.os)(e,s.name)})));return{locale:e.currentLocale,tags:a}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var w=n(11787),_="searchBox_2oeJ",N=null;function y(e){var t=e.hit,n=e.children;return o.createElement(u.Z,{to:t.url},n)}function C(e){var t=e.state,n=e.onClose,r=(0,d.Z)().generateSearchPageLink;return o.createElement(u.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function S(e){var t,u,d=e.contextualSearch,f=(0,a.Z)(e,["contextualSearch"]),v=(0,c.Z)().siteMetadata,h=Z(),g=null!=(t=null==(u=f.searchParameters)?void 0:u.facetFilters)?t:[],b=d?[].concat(h,g):g,p=Object.assign({},f.searchParameters,{facetFilters:b}),k=(0,s.C)().withBaseUrl,S=(0,i.k6)(),L=(0,o.useRef)(null),I=(0,o.useRef)(null),D=(0,o.useState)(!1),T=D[0],B=D[1],M=(0,o.useState)(null),P=M[0],x=M[1],A=(0,o.useCallback)((function(){return N?Promise.resolve():Promise.all([n.e(95610).then(n.bind(n,95610)),Promise.all([n.e(40532),n.e(89127)]).then(n.bind(n,89127)),Promise.all([n.e(40532),n.e(43729)]).then(n.bind(n,43729))]).then((function(e){var t=e[0].DocSearchModal;N=t}))}),[]),R=(0,o.useCallback)((function(){A().then((function(){L.current=document.createElement("div"),document.body.insertBefore(L.current,document.body.firstChild),B(!0)}))}),[A,B]),O=(0,o.useCallback)((function(){B(!1),L.current.remove()}),[B]),U=(0,o.useCallback)((function(e){A().then((function(){B(!0),x(e.key)}))}),[A,B,x]),H=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;S.push(t)}}).current,V=(0,o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:k(""+t.pathname+t.hash)})}))})).current,z=(0,o.useMemo)((function(){return function(e){return o.createElement(C,(0,r.Z)({},e,{onClose:O}))}}),[O]),W=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",v.docusaurusVersion),e}),[v.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,a=e.onInput,l=e.searchButtonRef;o.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?r():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),l&&l.current===document.activeElement&&a&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&a(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r,a,l])}({isOpen:T,onOpen:R,onClose:O,onInput:U,searchButtonRef:I});var j=(0,w.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(m.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+f.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement("div",{className:_},o.createElement(E,{onTouchStart:A,onFocus:A,onMouseOver:A,onClick:R,ref:I,translations:{buttonText:j,buttonAriaLabel:j}})),T&&(0,l.createPortal)(o.createElement(N,(0,r.Z)({onClose:O,initialScrollY:window.scrollY,initialQuery:P,navigator:H,transformItems:V,hitComponent:y,resultsFooterComponent:z,transformSearchClient:W},f,{searchParameters:p})),L.current))}var L=function(){var e=(0,c.Z)().siteConfig;return o.createElement(S,e.themeConfig.algolia)}},49033:function(e,t,n){"use strict";var r=n(69635),a=n(161),o=n(50353);t.Z=function(){var e=(0,r.k6)(),t=(0,r.TH)(),n=(0,o.Z)().siteConfig,l=(n=void 0===n?{}:n).baseUrl;return{searchValue:a.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return l+"search?q="+encodeURIComponent(e)}}}}}]);