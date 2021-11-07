"use strict";(self.webpackChunkuse_winter_final=self.webpackChunkuse_winter_final||[]).push([[4],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=i(t),k=a,m=l["".concat(u,".").concat(k)]||l[k]||d[k]||o;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=l;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},4186:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return l}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),s=["components"],p={sidebar_position:8},u="Transfer",i={unversionedId:"APIs/Transfer",id:"APIs/Transfer",isDocsHomePage:!1,title:"Transfer",description:"The Transfer API allows you to transfer USD to fund a user's cash account or transfer USD out to user's bank account.",source:"@site/docs/APIs/8_Transfer.md",sourceDirName:"APIs",slug:"/APIs/Transfer",permalink:"/docs/APIs/Transfer",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/APIs/8_Transfer.md",version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Quote",permalink:"/docs/APIs/Quote"},next:{title:"Ledger",permalink:"/docs/APIs/Ledger"}},c=[{value:"Add bank information to user account",id:"add-bank-information-to-user-account",children:[{value:"Body payload",id:"body-payload",children:[]},{value:"Success Response",id:"success-response",children:[]},{value:"Error Response",id:"error-response",children:[]}]},{value:"Deposit funds from user&#39;s bank account",id:"deposit-funds-from-users-bank-account",children:[{value:"Body payload",id:"body-payload-1",children:[]},{value:"Success Response",id:"success-response-1",children:[]},{value:"Error Response",id:"error-response-1",children:[]}]},{value:"Withdraw funds to user&#39;s bank account",id:"withdraw-funds-to-users-bank-account",children:[{value:"Body payload",id:"body-payload-2",children:[]},{value:"Success Response",id:"success-response-2",children:[]},{value:"Success Response",id:"success-response-3",children:[]},{value:"Error Response",id:"error-response-2",children:[]}]},{value:"Transfer funds from a Winter business account to a user&#39;s account.",id:"transfer-funds-from-a-winter-business-account-to-a-users-account",children:[{value:"Body payload",id:"body-payload-3",children:[]},{value:"Success Response",id:"success-response-4",children:[]},{value:"Error Response",id:"error-response-3",children:[]}]}],d={toc:c};function l(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transfer"},"Transfer"),(0,o.kt)("p",null,"The Transfer API allows you to transfer USD to fund a user's cash account or transfer USD out to user's bank account."),(0,o.kt)("p",null,"Currently, we only support ACH transfer to USA based banks. We recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://plaid.com/"},"Plaid")," to obtain user's account and routing numbers."),(0,o.kt)("p",null,"Note, crypto transfers & withdrawals are not supported yet."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#add-bank-information-to-user-account"},"Add bank information to user account")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#deposit-funds-from-users-bank-account"},"Deposit")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#withdraw-funds-to-users-bank-account"},"Withdraw")),(0,o.kt)("li",{parentName:"ol"},"[Transfer between accounts]","(#transfer-funds-from-a-winter-business-accountto a user's account)")),(0,o.kt)("h2",{id:"add-bank-information-to-user-account"},"Add bank information to user account"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"URL")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/account/<accountId>/banking/add/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Auth required")," : Yes (API key and secret are required)"),(0,o.kt)("h3",{id:"body-payload"},"Body payload"),(0,o.kt)("p",null,"Sample body payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "account_owner_name": "John Doe",\n  "bank_account_type": "CHECKING",\n  "bank_account_number": "32131231abc",\n  "bank_routing_number": "121000358",\n  "bank_nickname": "Bank of America Checking"\n}\n')),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"account_owner_name")," - String. The name of the bank account owner."),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"bank_account_type")," - Enum. Type of bank account. We recommend users fund from a checking account. Options: ",(0,o.kt)("inlineCode",{parentName:"p"},"CHECKING"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SAVINGS")),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"bank_account_number")," - String. The bank account number."),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"bank_routing_number")," - String. The bank routing number."),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"bank_nickname")," - String. A user inputted nickname for the bank for labeling purposes"),(0,o.kt)("h3",{id:"success-response"},"Success Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("h3",{id:"error-response"},"Error Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"400 BAD REQUEST")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Condition")," : If accountId is invalid or if organization does not have access to this account."),(0,o.kt)("h2",{id:"deposit-funds-from-users-bank-account"},"Deposit funds from user's bank account"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"URL")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/account/<accountId>/banking/deposit/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Auth required")," : Yes (API key and secret are required)"),(0,o.kt)("h3",{id:"body-payload-1"},"Body payload"),(0,o.kt)("p",null,"Sample body payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "transfer_amount": 500.00,\n  "scheduled_transfer_date": "2021-11-12 00:00:00 GMT-06:00",\n  "estimated_transfer_complete_date": "2021-11-15 00:00:00 GMT-06:00"\n}\n')),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"transfer_amount")," - Double. The amount of USD to deposit"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"scheduled_transfer_date")," - String, optional. The datetime when the transfer is scheduled for"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"estimated_transfer_complete_date")," - String. The estimated datetime when the deposit will be live to trade"),(0,o.kt)("h3",{id:"success-response-1"},"Success Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("p",null,"Sample response payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "transferId": 123415\n}\n')),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"transferId")," - Int. The ID of transfer. Can use as receipt."),(0,o.kt)("h3",{id:"error-response-1"},"Error Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"400 BAD REQUEST")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Condition")," : If accountId is invalid or if organization does not have access to this account or user does not have a bank account attached to their account"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"409 BANK DENIED")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Condition")," : Bank has denied deposit request or user does not have enough funds"),(0,o.kt)("h2",{id:"withdraw-funds-to-users-bank-account"},"Withdraw funds to user's bank account"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"URL")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/account/<accountId>/banking/withdraw/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Auth required")," : Yes (API key and secret are required)"),(0,o.kt)("h3",{id:"body-payload-2"},"Body payload"),(0,o.kt)("p",null,"Sample body payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "transfer_amount": 500.00,\n  "estimated_transfer_complete_date": "2021-11-12 00:00:00 GMT-06:00"\n}\n')),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"transfer_amount")," - Double. The amount of USD to deposit"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"scheduled_transfer_date")," - String, optional. The datetime when the withdraw is scheduled for"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"estimated_transfer_complete_date")," - String. The estimated datetime when the withdraw will be live to trade"),(0,o.kt)("h3",{id:"success-response-2"},"Success Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("p",null,"Sample response payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "transferId": 123415\n}\n')),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"transferId")," - Int. The ID of transfer. Can use as receipt."),(0,o.kt)("h3",{id:"success-response-3"},"Success Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("h3",{id:"error-response-2"},"Error Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"400 BAD REQUEST")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Condition")," : If accountId is invalid or if organization does not have access to this account or user does not have a bank account attached to their account"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"409 BANK DENIED")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Condition")," : Bank has denied withdraw request or bank information is invalid"),(0,o.kt)("h2",{id:"transfer-funds-from-a-winter-business-account-to-a-users-account"},"Transfer funds from a Winter business account to a user's account."),(0,o.kt)("p",null,"An internal transfer to fund an end user's cash account with your business cash account. Funds will be available instantly for the end user to begin trading."),(0,o.kt)("p",null,"\ud83d\udea8 Note, this API should only be used to transfer cash from your business cash account to an end user's cash account. Do not use to transfer cash between users."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"URL")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/account/<accountId>/banking/transfer/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Auth required")," : Yes (API key and secret are required)"),(0,o.kt)("h3",{id:"body-payload-3"},"Body payload"),(0,o.kt)("p",null,"Sample body payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "accountId_transfer_to": "12345",\n  "transfer_amount": 500.00,\n  "scheduled_transfer_date": "2021-11-12 00:00:00 GMT-06:00"\n}\n')),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"accountId_transfer_to")," - String. The account Id to transfer cash to"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"transfer_amount")," - Double. The amount of USD to deposit"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"scheduled_transfer_date")," - String, optional. The datetime when the transfer is scheduled for"),(0,o.kt)("h3",{id:"success-response-4"},"Success Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("p",null,"Sample response payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "transferId": 123415\n}\n')),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"transferId")," - Int. The ID of transfer. Can use as receipt."),(0,o.kt)("h3",{id:"error-response-3"},"Error Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"400 BAD REQUEST")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Condition")," : If accountId is invalid or if organization does not have access to this account or user does not have a bank account attached to their account"))}l.isMDXComponent=!0}}]);