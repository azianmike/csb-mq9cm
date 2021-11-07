"use strict";(self.webpackChunkuse_winter_final=self.webpackChunkuse_winter_final||[]).push([[638],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6709:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l="Stock investing and crypto trading",u={unversionedId:"End-user-journeys/investing-and-crypto",id:"End-user-journeys/investing-and-crypto",isDocsHomePage:!1,title:"Stock investing and crypto trading",description:"Are you trying to integrate crypto trading alongside stock investing? If so, this end user guide is for you. This guide helps you understand a sample journey your end user will see.",source:"@site/docs/End-user-journeys/investing-and-crypto.md",sourceDirName:"End-user-journeys",slug:"/End-user-journeys/investing-and-crypto",permalink:"/docs/End-user-journeys/investing-and-crypto",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/End-user-journeys/investing-and-crypto.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cryptocurrencies supported",permalink:"/docs/Supported-cryptos"},next:{title:"Crypto trading only",permalink:"/docs/End-user-journeys/only-crypto"}},c=[{value:"What your end user will see",id:"what-your-end-user-will-see",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stock-investing-and-crypto-trading"},"Stock investing and crypto trading"),(0,o.kt)("p",null,"Are you trying to integrate crypto trading alongside stock investing? If so, this end user guide is for you. This guide helps you understand a sample journey your end user will see."),(0,o.kt)("p",null,"\ud83d\udea8Note: Winter's APIs are still in beta and under active development. We encourage you to send feedback to ",(0,o.kt)("a",{parentName:"p",href:"mailto:michael@usewinter.com"},"michael@usewinter.com")),(0,o.kt)("h2",{id:"what-your-end-user-will-see"},"What your end user will see"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"User signs up/opts into crypto trading")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"KYC check"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"End user should have previously submitted KYC info. Initiate \u201cinvisible\u201d KYC (transfer customer info + documents to us in the background)"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fund crypto trading account"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note that the crypto cash account will be a separate cash account than the stock brokerage cash account"),(0,o.kt)("li",{parentName:"ul"},"Options:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Pre-fund a Winter business cash account and then instantly transfer cash to end user's Winter account"),(0,o.kt)("li",{parentName:"ul"},"Directly fund Winter cash account from consumers bank account via Plaid (takes 2-3 business days)"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Quote crypto prices")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Trade crypto"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Buy/sell market & limit orders"),(0,o.kt)("li",{parentName:"ul"},"Fulfill best price between exchanges"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"View assets and P&L"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Show all crypto assets & amount"),(0,o.kt)("li",{parentName:"ul"},"Show cost basis, 24h P&L, and lifetime P&L"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"View history of trades"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Show all trades that a user has submitted, including cancelled and unfulfilled orders"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Withdraw USD to bank account or crypto to a wallet address")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Full yearly ledger for taxes"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note: Winter does not offer 1099-Bs")))))}d.isMDXComponent=!0}}]);