"use strict";(self.webpackChunkuse_winter_final=self.webpackChunkuse_winter_final||[]).push([[546],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,k=d["".concat(p,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6860:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:2},p="Know Your Customer (KYC)",u={unversionedId:"APIs/KYC",id:"APIs/KYC",isDocsHomePage:!1,title:"Know Your Customer (KYC)",description:"The documents API, given an end user's accountId, will enable you to upload or download necessary KYC documents. This will usually be a picture of a passport, picture of a driver's license, or a picture of a face with an Id.",source:"@site/docs/APIs/2_KYC.md",sourceDirName:"APIs",slug:"/APIs/KYC",permalink:"/docs/APIs/KYC",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/APIs/2_KYC.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Account",permalink:"/docs/APIs/Account"},next:{title:"Assets",permalink:"/docs/APIs/Assets"}},c=[{value:'Getting KYC documents &amp; user status <a name="get"></a>',id:"getting-kyc-documents--user-status",children:[{value:"Success Response",id:"success-response",children:[]},{value:"Error Response",id:"error-response",children:[]}]},{value:"Submit KYC personal information",id:"submit-kyc-personal-information",children:[{value:"Body payload",id:"body-payload",children:[]},{value:"Success Response",id:"success-response-1",children:[]},{value:"Error Response",id:"error-response-1",children:[]}]},{value:"Uploading &amp; submitting KYC documents",id:"uploading--submitting-kyc-documents",children:[]},{value:"Body payload",id:"body-payload-1",children:[]},{value:"Success Response",id:"success-response-2",children:[{value:"Error Response",id:"error-response-2",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"know-your-customer-kyc"},"Know Your Customer (KYC)"),(0,a.kt)("p",null,"The documents API, given an end user's accountId, will enable you to upload or download necessary KYC documents. This will usually be a picture of a passport, picture of a driver's license, or a picture of a face with an Id."),(0,a.kt)("p",null,"Note, only accountId's that are created under your organization will be accessible."),(0,a.kt)("p",null,"Note, if you upload KYC documents to an account that has KYC documents already, you will ",(0,a.kt)("strong",{parentName:"p"},"overwrite")," any documents currently on the account."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#getting-kyc-documents--user-status"},"Getting KYC documents & user status")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#submit-KYC-personal-information"},"Submit KYC personal information")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#uploading--submitting-kyc-documents"},"Uploading & submitting KYC documents"))),(0,a.kt)("h2",{id:"getting-kyc-documents--user-status"},"Getting KYC documents & user status ",(0,a.kt)("a",{name:"get"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/kyc/docs")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Auth required")," : Yes (API key and secret are required)"),(0,a.kt)("h3",{id:"success-response"},"Success Response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,"Sample response return:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "accountId": "12345",\n  "document_type": "DRIVERS_LICENSE",\n  "account_kyc_status": "UNDER_REVIEW",\n  "document_urls":\n     ["https://usewinter.com/afsf13141",\n     "https://usewinter.com/fakl3131",\n     "https://usewinter.com/lfmsr214"]\n}\n')),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"accountId")," - String. The accountId of the returned account"),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"document_type")," - Enum that represents which type of KYC document user has entered. Possible responses: ",(0,a.kt)("inlineCode",{parentName:"p"},"PASSPORT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DRIVERS_LICENSE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"STATE_LICENSE")),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"account_kyc_status")," - Enum that represents the status of withdrawal. Depends on KYC status. Possible responses: READY_TO_WITHDRAW, CANNOT_WITHDRAW_KYC_REQUIRED, CANNOT_WITHDRAW_KYC_FAILED, UNDER_REVIEW. If response is CANNOT_WITHDRAW_KYC_REQUIRED, that means user has not completed KYC yet."),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"document_urls")," - Array of document URLs. Expect each URL to return an image (e.g. PNG/JPG)"),(0,a.kt)("h3",{id:"error-response"},"Error Response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"400 BAD REQUEST")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Condition")," : If accountId is invalid, if organization does not have access to this account(for security reasons), or if account does not have documents."),(0,a.kt)("h2",{id:"submit-kyc-personal-information"},"Submit KYC personal information"),(0,a.kt)("p",null,"Use this API to submit personal KYC information, such as address and SSN. We take security seriously at Winter and all data, including personal KYC information, will be encrypted"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/kyc/info/<accountId>")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Auth required")," : Yes (API key and secret are required)"),(0,a.kt)("h3",{id:"body-payload"},"Body payload"),(0,a.kt)("p",null,"Sample body payload:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "full_legal_name": "Michael Winter",\n  "full_address": "123 Main St, Chicago, IL 90874",\n  "social_security_number": "123-45-6789"\n}\n')),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"full_name")," - String. The full legal name of the owner of the returned account. This should match full_name of Account"),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"full_address")," - String. The full address of the owner of the account."),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"social_security_number")," - String. The SSN of the user. This will encrypted."),(0,a.kt)("h3",{id:"success-response-1"},"Success Response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("h3",{id:"error-response-1"},"Error Response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"400 BAD REQUEST")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Condition")," : If accountId is invalid, if organization does not have access to this account(for security reasons), or if base64 encoded document cannot be decoded"),(0,a.kt)("h2",{id:"uploading--submitting-kyc-documents"},"Uploading & submitting KYC documents"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/kyc_docs/<accountId>")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Auth required")," : Yes (API key and secret are required)"),(0,a.kt)("h2",{id:"body-payload-1"},"Body payload"),(0,a.kt)("p",null,"Sample body payload:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "accountId": "12345",\n  "document_type": "DRIVERS_LICENSE",\n  "document_type": "FRONT",\n  "content":\n    "Ymxhcmdhc2Rma2xhanNkbGtmYWpzZGZhc2ZibGFyZ2FzZGZrbGFqc2Rsa2ZhanNkZmFzZmJsYXJnYXNkZmtsYWpzZGxrZmFqc2RmYXNmYmxhcmdhc2Rma2xhanNkbGtmYWpzZGZhc2ZibGFyZ2FzZGZrbGFqc2Rsa2ZhanNkZmFzZg=="\n}\n')),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"accountId")," - String. The accountId of the returned account"),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"document_type")," - Enum that represents which type of KYC document user has entered. Possible options: ",(0,a.kt)("inlineCode",{parentName:"p"},"PASSPORT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DRIVERS_LICENSE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"STATE_LICENSE")),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"document_side")," - Enum that represents which side of the document. Note this field is only valid for ",(0,a.kt)("inlineCode",{parentName:"p"},"DRIVERS_LICENSE")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"STATE_LICENSE"),". Possible options: ",(0,a.kt)("inlineCode",{parentName:"p"},"FRONT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BACK")),(0,a.kt)("p",null,"-"," ",(0,a.kt)("strong",{parentName:"p"},"document")," - String. Base64 encoded image. Can only be jpg or png or the request will fail."),(0,a.kt)("h2",{id:"success-response-2"},"Success Response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("h3",{id:"error-response-2"},"Error Response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"400 BAD REQUEST")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Condition")," : If accountId is invalid, if organization does not have access to this account(for security reasons), or if base64 encoded document cannot be decoded"))}d.isMDXComponent=!0}}]);