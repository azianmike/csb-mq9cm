"use strict";(self.webpackChunkuse_winter_final=self.webpackChunkuse_winter_final||[]).push([[169],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2249:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],p={sidebar_position:4},l="Buy",u={unversionedId:"APIs/Buy",id:"APIs/Buy",isDocsHomePage:!1,title:"Buy",description:"The Buy API allows you to place a Buy order under a user's account.",source:"@site/docs/APIs/Buy.md",sourceDirName:"APIs",slug:"/APIs/Buy",permalink:"/docs/APIs/Buy",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/APIs/Buy.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Assets",permalink:"/docs/APIs/Assets"},next:{title:"Buy",permalink:"/docs/APIs/Orders"}},s=[{value:"API details",id:"api-details",children:[]},{value:"Body payload",id:"body-payload",children:[{value:"Success Response",id:"success-response",children:[]},{value:"Error Response",id:"error-response",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"buy"},"Buy"),(0,a.kt)("p",null,"The Buy API allows you to place a Buy order under a user's account."),(0,a.kt)("p",null,"Note, only accountId's that are created under your organization will be accessible."),(0,a.kt)("h3",{id:"api-details"},"API details"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/buy")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Auth required")," : Yes (API key and secret are required)"),(0,a.kt)("h2",{id:"body-payload"},"Body payload"),(0,a.kt)("p",null,"Sample body payload:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "accountId": "12345",\n  "order_type": "LIMIT",\n  "limit_order_max_price": 4010.00,\n  "crypto_ticker": "ETH",\n  "amount": 0.023\n}\n')),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"accountId")," - String. The accountId of the returned account"),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"order_type")," - Enum. Type of order. Options: ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MARKET")),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"limit_order_max_price")," - Double. REQUIRED if ",(0,a.kt)("inlineCode",{parentName:"p"},"order_type")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT"),". The maximum USD price to pay for the order. This price is the USD price for 1 complete coin, regardless of the amount in the order."),(0,a.kt)("p",null,"For example, if the user only wants to buy 0.5 ETH, the ",(0,a.kt)("inlineCode",{parentName:"p"},"limit_order_max_price")," will be the max price paid for 1 ETH"),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"crypto_ticker")," - String. The ticker of the crypto to buy. Check ",(0,a.kt)("a",{parentName:"p",href:"/docs/Supported-cryptos"},"this page")," for the cryptos we support"),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"amount")," - Double. The amount of the crypto ticker to buy"),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"time_in_force")," - Enum, optional. How long the order should be open before expiring. By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"time_in_force")," will be ",(0,a.kt)("inlineCode",{parentName:"p"},"60_DAYS"),". Options: ",(0,a.kt)("inlineCode",{parentName:"p"},"24_HOURS"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"60_DAYS")),(0,a.kt)("h3",{id:"success-response"},"Success Response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,"Sample response return:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "tradeId": "12345",\n  "trade_status": "OPEN"\n}\n')),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"tradeId")," - String. The unique identifier for the trade"),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"trade_status")," - Enum. Enum that represents the trade status. Enum options: ",(0,a.kt)("inlineCode",{parentName:"p"},"FULFILLED"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"OPEN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"USER_CANCELLED"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"EXPIRED"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SYSTEM_CANCELLED")),(0,a.kt)("h3",{id:"error-response"},"Error Response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"400 BAD REQUEST")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Condition")," : If accountId is invalid or if organization does not have access to this account."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"409 NOT ENOUGH ACCOUNT FUNDS")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Condition")," : If accountId is invalid or if organization does not have access to this account."))}d.isMDXComponent=!0}}]);