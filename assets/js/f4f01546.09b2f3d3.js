"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[927],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3495:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],a={sidebar_position:1},c="\u0e17\u0e14\u0e25\u0e2d\u0e07 NXTP \u0e1a\u0e19 Testnets",u={unversionedId:"Integration/Guides/testnet",id:"Integration/Guides/testnet",isDocsHomePage:!1,title:"\u0e17\u0e14\u0e25\u0e2d\u0e07 NXTP \u0e1a\u0e19 Testnets",description:"TODO:",source:"@site/docs/Integration/Guides/testnet.md",sourceDirName:"Integration/Guides",slug:"/Integration/Guides/testnet",permalink:"/connext-documentation/Integration/Guides/testnet",editUrl:"https://github.com/connext/documentation/docs/Integration/Guides/testnet.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"integration",previous:{title:"\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c (Event)",permalink:"/connext-documentation/Integration/QuickStart/events"},next:{title:"\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e01\u0e43\u0e0a\u0e49 Contract \u0e1a\u0e19\u0e1a\u0e25\u0e47\u0e2d\u0e04\u0e40\u0e0a\u0e19\u0e17\u0e35\u0e48\u0e23\u0e2d\u0e23\u0e31\u0e1a",permalink:"/connext-documentation/Integration/Guides/calling-a-contract"}},p=[{value:"Connecting a Dapp to Testnets",id:"connecting-a-dapp-to-testnets",children:[]},{value:"Testing Transfers Using Test ERC20s",id:"testing-transfers-using-test-erc20s",children:[]}],l={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u0e17\u0e14\u0e25\u0e2d\u0e07-nxtp-\u0e1a\u0e19-testnets"},"\u0e17\u0e14\u0e25\u0e2d\u0e07 NXTP \u0e1a\u0e19 Testnets"),(0,i.kt)("p",null,"TODO:"),(0,i.kt)("p",null,"We have deployed our contracts against various testnets to allow for easier testing of SDK integrations."),(0,i.kt)("p",null,"The supported testnets can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/connext/nxtp/blob/main/packages/contracts/deployments.json"},"deployments.json"),"."),(0,i.kt)("h2",{id:"connecting-a-dapp-to-testnets"},"Connecting a Dapp to Testnets"),(0,i.kt)("p",null,"Initialize the NXTP SDK with parameters for the desired testnets."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const chainConfig = {\n  4: {\n    provider: new providers.FallbackProvider([\n      new providers.JsonRpcProvider("https://rinkeby.infura.io/..."),\n    ]),\n  },\n  5: {\n    provider: new providers.FallbackProvider([\n      new providers.JsonRpcProvider("https://goerli.infura.io/..."),\n    ]),\n  },\n};\n\n// Get signer from metamask\nawait ethereum.request({ method: "eth_requestAccounts" });\nconst provider = new providers.Web3Provider(ethereum);\nconst _signer = provider.getSigner();\n\n// Instantiate SDK\nconst sdk = new NxtpSdk(chainProviders, _signer);\n')),(0,i.kt)("h2",{id:"testing-transfers-using-test-erc20s"},"Testing Transfers Using Test ERC20s"),(0,i.kt)("p",null,"For easy testing, we have also deployed a test ERC20 contract on each testnet. Within the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/connext/nxtp/blob/main/packages/contracts/deployments.json"},"deployments.json")," file, you can find the address of the test ERC20 contract under the key ",(0,i.kt)("inlineCode",{parentName:"p"},"TestERC20")," for each chain."),(0,i.kt)("p",null,"The test ERC20 tokens can be freely minted by anyone. The signature of the ",(0,i.kt)("inlineCode",{parentName:"p"},"mint")," function is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"function mint(address account, uint256 amount)\n")),(0,i.kt)("p",null,"The test tokens are collateralized by routers on the test network, so swap requests should always be successful when using these assets."))}d.isMDXComponent=!0}}]);