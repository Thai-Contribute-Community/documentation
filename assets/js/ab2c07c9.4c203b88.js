"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[858],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return h}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),u=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),h=r,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return t?o.createElement(f,i(i({ref:n},l),{},{components:t})):o.createElement(f,i({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4125:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:5},c="FAQ",u={unversionedId:"Integration/SystemOverview/faq",id:"Integration/SystemOverview/faq",isDocsHomePage:!1,title:"FAQ",description:"General",source:"@site/docs/Integration/SystemOverview/faq.md",sourceDirName:"Integration/SystemOverview",slug:"/Integration/SystemOverview/faq",permalink:"/connext-documentation/Integration/SystemOverview/faq",editUrl:"https://github.com/connext/documentation/docs/Integration/SystemOverview/faq.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"integration",previous:{title:"Supported Chains",permalink:"/connext-documentation/Integration/SystemOverview/chains"},next:{title:"Installation & Setup",permalink:"/connext-documentation/Integration/QuickStart/setup"}},l=[{value:"General",id:"general",children:[{value:"Does Connext have a token?",id:"does-connext-have-a-token",children:[]},{value:"Is Connext an exchange (or other dApp)?",id:"is-connext-an-exchange-or-other-dapp",children:[]},{value:"Does Connext have access to my funds?",id:"does-connext-have-access-to-my-funds",children:[]},{value:"Are there any fees to use Connext?",id:"are-there-any-fees-to-use-connext",children:[]},{value:"Is Connext audited?",id:"is-connext-audited",children:[]},{value:"How does Connext work?",id:"how-does-connext-work",children:[]},{value:"How does Connext compare to XYZ interoperability solution?",id:"how-does-connext-compare-to-xyz-interoperability-solution",children:[]},{value:"Why is Connext an authority on L2s and interoperability?",id:"why-is-connext-an-authority-on-l2s-and-interoperability",children:[]},{value:"Is Connext live on mainnet?",id:"is-connext-live-on-mainnet",children:[]},{value:"Where can I try Connext?",id:"where-can-i-try-connext",children:[]}]}],d={toc:l};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"general"},"General"),(0,a.kt)("h3",{id:"does-connext-have-a-token"},"Does Connext have a token?"),(0,a.kt)("p",null,"No. Connext does not have a token at this time. Any references to a Connext token out there are definitely scams."),(0,a.kt)("h3",{id:"is-connext-an-exchange-or-other-dapp"},"Is Connext an exchange (or other dApp)?"),(0,a.kt)("p",null,"No. Connext is a protocol made up of many independent liquidity/infrastructure providers (called ",(0,a.kt)("strong",{parentName:"p"},"routers"),") that enables communication between chains. Developers can build natively crosschain applications like DEXs on top of Connext."),(0,a.kt)("h3",{id:"does-connext-have-access-to-my-funds"},"Does Connext have access to my funds?"),(0,a.kt)("p",null,"No. Neither the Connext founding team, nor any routers running Connext's protocols have any form of access to your funds. Because of how Connext is designed, the security of the system is the same as the security of the underlying blockchain -- even if every single router in our network were to collude with each other, there would be no way for them to access your funds."),(0,a.kt)("h3",{id:"are-there-any-fees-to-use-connext"},"Are there any fees to use Connext?"),(0,a.kt)("p",null,"Fees are charged by routers within the network when users send transactions. The Connext team is only a protocol implementer and so does not charge any fees."),(0,a.kt)("h3",{id:"is-connext-audited"},"Is Connext audited?"),(0,a.kt)("p",null,"Yes! You can see our audits at ",(0,a.kt)("a",{parentName:"p",href:"https://audits.connext.network"},"https://audits.connext.network"),"."),(0,a.kt)("h3",{id:"how-does-connext-work"},"How does Connext work?"),(0,a.kt)("p",null,"Check out our ",(0,a.kt)("a",{parentName:"p",href:"./howitworks"},"How it Works")," and ",(0,a.kt)("a",{parentName:"p",href:"./securitymodel"},"Security Model")," sections!"),(0,a.kt)("h3",{id:"how-does-connext-compare-to-xyz-interoperability-solution"},"How does Connext compare to XYZ interoperability solution?"),(0,a.kt)("p",null,"Check out ",(0,a.kt)("a",{parentName:"p",href:"./connextvsxyz"},"Connext vs XYZ")," section!"),(0,a.kt)("h3",{id:"why-is-connext-an-authority-on-l2s-and-interoperability"},"Why is Connext an authority on L2s and interoperability?"),(0,a.kt)("p",null,"We started Connext in 2017, and have been a core part of the L2 research community since we built the first general-purpose L2 payment system in 2018. Our work on state channel systems has led us to think deeply about how users can seamlessly transfer funds between rollups, and we believe that the current iteration of Connext presents the best set of tradeoffs for enabling interactions between rollups."),(0,a.kt)("h3",{id:"is-connext-live-on-mainnet"},"Is Connext live on mainnet?"),(0,a.kt)("p",null,"Yes! You can see the live status of the network on the community-built ",(0,a.kt)("a",{parentName:"p",href:"connextscan.io/"},"Connext Explorer"),"."),(0,a.kt)("h3",{id:"where-can-i-try-connext"},"Where can I try Connext?"),(0,a.kt)("p",null,"There are a number of projects and protocols building on top of Connext. We expect to have a community-maintained list of them soon . For now, we recommend checking out ",(0,a.kt)("a",{parentName:"p",href:"https://xpollinate.io"},"xPollinate"),", a simple UI for bridging across chains."))}p.isMDXComponent=!0}}]);