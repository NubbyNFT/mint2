(this.webpackJsonpPhoneyX=this.webpackJsonpPhoneyX||[]).push([[0],{234:function(n,e){},258:function(n,e){},260:function(n,e){},337:function(n,e){},339:function(n,e){},349:function(n,e){},351:function(n,e){},376:function(n,e){},382:function(n,e){},395:function(n,e){},418:function(n,e){},493:function(n,e,t){},494:function(n,e,t){"use strict";t.r(e);var c,r,a,o,i,s,l,d,u,x,p,b,j,h,g,O,f=t(1),y=t(79),C=t.n(y),m=t(16),v=t.n(m),w=t(44),A=t(64),E=t(14),S=t(55),T=t(63),N=t.n(T),_=t(206),k=t.n(_),M=t(65),L=t(207),D=t(18),I={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(D.a)(Object(D.a)({},I),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(D.a)(Object(D.a)({},n),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(D.a)(Object(D.a)({},I),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(D.a)(Object(D.a)({},n),{},{account:e.payload.account});default:return n}},K={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},P=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(D.a)(Object(D.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(D.a)(Object(D.a)({},n),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(D.a)(Object(D.a)({},K),{},{loading:!1,error:!0,errorMsg:e.payload});default:return n}},U=Object(M.b)({blockchain:R,data:P}),F=[L.a],W=Object(M.c)(M.a.apply(void 0,F)),Y=Object(M.d)(U,W),z=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},B=function(){return function(){var n=Object(w.a)(v.a.mark((function n(e){var t;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,Y.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=n.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),e(z("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},H=function(n){return{type:"CONNECTION_FAILED",payload:n}},G=function(n){return function(){var e=Object(w.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:n}}),t(B());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},X=t(15),Q=X.a.div(c||(c=Object(E.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),q=X.a.div(r||(r=Object(E.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=X.a.div(a||(a=Object(E.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=X.a.div(o||(o=Object(E.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=X.a.div(i||(i=Object(E.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=X.a.div(s||(s=Object(E.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){var e=n.jc;return e||"flex-start"}),(function(n){var e=n.ai;return e||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),nn=X.a.p(l||(l=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),en=(X.a.p(d||(d=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),X.a.p(u||(u=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),tn=(X.a.div(x||(x=Object(E.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),t(3)),cn=X.a.button(p||(p=Object(E.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rn=X.a.button(b||(b=Object(E.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),an=X.a.div(j||(j=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),on=X.a.img(h||(h=Object(E.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),sn=X.a.img(g||(g=Object(E.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),ln=X.a.a(O||(O=Object(E.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var dn=function(){var n,e,t=Object(S.b)(),c=Object(S.c)((function(n){return n.blockchain})),r=Object(S.c)((function(n){return n.data})),a=Object(f.useState)(!1),o=Object(A.a)(a,2),i=o[0],s=o[1],l=Object(f.useState)("Click buy to mint your NFT."),d=Object(A.a)(l,2),u=d[0],x=d[1],p=Object(f.useState)(1),b=Object(A.a)(p,2),j=b[0],h=b[1],g=Object(f.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),O=Object(A.a)(g,2),y=O[0],C=O[1],m=function(){""!==c.account&&null!==c.smartContract&&t(B(c.account))},E=function(){var n=Object(w.a)(v.a.mark((function n(){var e,t;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,C(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(f.useEffect)((function(){E()}),[]),Object(f.useEffect)((function(){m()}),[c.account]),Object(tn.jsx)(Q,{children:Object(tn.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:y.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(tn.jsx)("a",{href:y.MARKETPLACE_LINK,children:Object(tn.jsx)(on,{alt:"logo",src:"/config/images/logo.png"})}),Object(tn.jsx)(J,{}),Object(tn.jsxs)(an,{flex:1,style:{padding:24},test:!0,children:[Object(tn.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(tn.jsx)(sn,{alt:"example",src:"/config/images/example.gif"})}),Object(tn.jsx)(Z,{}),Object(tn.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(tn.jsxs)(nn,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",y.MAX_SUPPLY]}),Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(tn.jsx)(ln,{target:"_blank",href:y.SCAN_LINK,children:(n=y.CONTRACT_ADDRESS,e=15,n.length>e?"".concat(n.substring(0,e),"..."):n)})}),Object(tn.jsxs)("span",{style:{textAlign:"center"},children:[Object(tn.jsx)(cn,{onClick:function(n){window.open("/config/roadmap.pdf","_blank")},style:{margin:"5px"},children:"Roadmap"}),Object(tn.jsx)(cn,{style:{margin:"5px"},onClick:function(n){window.open(y.MARKETPLACE_LINK,"_blank")},children:y.MARKETPLACE})]}),Object(tn.jsx)(J,{}),Number(r.totalSupply)>=y.MAX_SUPPLY?Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsx)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(tn.jsxs)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",y.NFT_NAME," on"]}),Object(tn.jsx)(J,{}),Object(tn.jsx)(ln,{target:"_blank",href:y.MARKETPLACE_LINK,children:y.MARKETPLACE})]}):Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsxs)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",y.SYMBOL," costs ",y.DISPLAY_COST," ",y.NETWORK.SYMBOL,"."]}),Object(tn.jsx)(q,{}),Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(tn.jsx)(J,{}),""===c.account||null===c.smartContract?Object(tn.jsxs)($,{ai:"center",jc:"center",children:[Object(tn.jsxs)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",y.NETWORK.NAME," network"]}),Object(tn.jsx)(J,{}),Object(tn.jsx)(cn,{onClick:function(n){n.preventDefault(),t(function(){var n=Object(w.a)(v.a.mark((function n(e){var t,c,r,a,o,i,s,l,d;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=n.sent,n.next=6,t.json();case 6:return c=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=n.sent,n.next=12,r.json();case 12:if(a=n.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){n.next=33;break}return N.a.setProvider(i),s=new k.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==a.NETWORK.ID?(d=new N.a(c,a.CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(n){e(G(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):e(H("Change network to ".concat(a.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),e(H("Something went wrong."));case 31:n.next=34;break;case 33:e(H("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(e){return n.apply(this,arguments)}}()),m()},children:"CONNECT"}),""!==c.errorMsg?Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsx)(J,{}),Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(tn.jsxs)(tn.Fragment,{children:[Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:u}),Object(tn.jsx)(V,{}),Object(tn.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(tn.jsx)(rn,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j-1;n<1&&(n=1),h(n)}()},children:"-"}),Object(tn.jsx)(V,{}),Object(tn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(tn.jsx)(V,{}),Object(tn.jsx)(rn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j+1;n>50&&(n=50),h(n)}()},children:"+"})]}),Object(tn.jsx)(J,{}),Object(tn.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(tn.jsx)(cn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=y.WEI_COST,e=y.GAS_LIMIT,r=String(n*j),a=String(e*j);console.log("Cost: ",r),console.log("Gas limit: ",a),x("Minting your ".concat(y.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(c.account,j).send({gasLimit:String(a),to:y.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(n){console.log(n),x("Sorry, something went wrong please try again later."),s(!1)})).then((function(n){console.log(n),x("WOW, the ".concat(y.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),t(B(c.account))}))}(),m()},children:i?"BUSY":"BUY"})})]})]}),Object(tn.jsx)(V,{})]}),Object(tn.jsx)(Z,{}),Object(tn.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(tn.jsx)(sn,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(tn.jsx)(V,{}),Object(tn.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(tn.jsxs)(en,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",y.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(tn.jsx)(J,{}),Object(tn.jsxs)(en,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",y.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},un=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,498)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),c(n),r(n),a(n),o(n)}))};t(493);C.a.render(Object(tn.jsx)(S.a,{store:Y,children:Object(tn.jsx)(dn,{})}),document.getElementById("root")),un()}},[[494,1,2]]]);
//# sourceMappingURL=main.bbd898af.chunk.js.map