(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{137:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return b})),a.d(t,"c",(function(){return p})),a.d(t,"d",(function(){return g}));var n=a(2),r=a.n(n),c=a(5),i=a(32),s=a(68),o=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),l=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),m=function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){var i,s,o,u,l,m=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=m.length>3&&void 0!==m[3]?m[3]:"recent",s=m.length>4&&void 0!==m[4]&&m[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(c.a)(r.a.mark((function e(m,d){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),a);try{l=n.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),m(u))}),i)}catch(b){o=!0,console.error("WS error in setup",t,b)}case 2:if(o||!s){e.next=8;break}return Object(c.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.getSignatureStatuses([t]);case 3:a=e.sent,u=a&&a.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,m(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,x(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());case 7:return u=e.sent,n._signatureSubscriptions[l]&&n.removeSignatureListener(l),o=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),d=function(t,a,n,r){var c=[{pubkey:a,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:c,programId:u,data:e.from([])})},b=function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){var c,s,u,l,m,d,b,f,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new i.b(n,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(o,c);case 3:return s=e.sent,u=new i.a(s,o,c),l={id:a,connection:n,program:u},e.next=8,u.account.candyMachine.fetch(a);case 8:return m=e.sent,d=m.data.itemsAvailable.toNumber(),b=m.itemsRedeemed.toNumber(),f=d-b,h=m.data.goLiveDate.toNumber(),h=new Date(1e3*h),e.abrupt("return",{candyMachine:l,itemsAvailable:d,itemsRedeemed:b,itemsRemaining:f,goLiveDate:h});case 15:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),a.toBuffer(),e.from("edition")],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),a.toBuffer()],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),s.b.toBuffer(),a.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(r.a.mark((function e(t,a,n,c){var o,u,m,b,p,g,x;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.d.Keypair.generate(),e.next=3,j(n,o.publicKey);case 3:return u=e.sent,m=t.connection,b=t.program,e.next=7,h(o.publicKey);case 7:return p=e.sent,e.next=10,f(o.publicKey);case 10:return g=e.sent,e.next=13,m.getMinimumBalanceForRentExemption(s.a.span);case 13:return x=e.sent,e.next=16,b.rpc.mintNft({accounts:{config:a,candyMachine:t.id,payer:n,wallet:c,mint:o.publicKey,metadata:p,masterEdition:g,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:l,tokenProgram:s.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[o],instructions:[i.d.SystemProgram.createAccount({fromPubkey:n,newAccountPubkey:o.publicKey,space:s.a.span,lamports:x,programId:s.b}),s.c.createInitMintInstruction(s.b,o.publicKey,0,n,n),d(u,n,n,o.publicKey),s.c.createMintToInstruction(s.b,o.publicKey,u,n,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},x=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,a(9).Buffer)},255:function(e,t,a){},256:function(e,t,a){},367:function(e,t,a){},369:function(e,t,a){},371:function(e,t,a){},372:function(e,t,a){},375:function(e,t){},377:function(e,t){},384:function(e,t){},395:function(e,t){},396:function(e,t){},421:function(e,t){},424:function(e,t){},430:function(e,t){},434:function(e,t,a){},435:function(e,t,a){},436:function(e,t,a){},437:function(e,t,a){},492:function(e,t){},494:function(e,t){},508:function(e,t){},512:function(e,t){},514:function(e,t){},524:function(e,t){},526:function(e,t){},557:function(e,t){},559:function(e,t){},566:function(e,t){},567:function(e,t){},592:function(e,t){},593:function(e,t,a){"use strict";a.r(t);var n,r,c,i,s=a(0),o=a.n(s),u=a(28),l=a.n(u),m=(a(367),a(368),a(369),a(220)),d=a.n(m),b=(a(370),a(371),a(625)),f=a(630),h=a(629),j=(a(372),a(11)),p=a(2),g=a.n(p),x=a(5),O=a(14),y=a(136),v=a(619),w=a(624),M=a(633),k=a(321),N=a(7),T=a(138),S=a(176),R=a(632),L=a(137),I=a(55),D=a(4),_=Object(T.a)(S.a)(n||(n=Object(y.a)([""]))),P=T.a.span(r||(r=Object(y.a)([""]))),A=T.a.div(c||(c=Object(y.a)([""]))),C=Object(T.a)(v.a)(i||(i=Object(y.a)([""]))),B=function(e){var t=e.days,a=e.hours,n=e.minutes,r=e.seconds;e._completed;return Object(D.jsxs)(P,{children:[a+24*(t||0)," hours, ",n," minutes, ",r," seconds"]})},E=function(e){var t=Object(s.useState)(),a=Object(O.a)(t,2),n=a[0],r=a[1],c=Object(s.useState)(!1),i=Object(O.a)(c,2),o=i[0],u=i[1],l=Object(s.useState)(!1),m=Object(O.a)(l,2),d=m[0],b=m[1],f=Object(s.useState)(!1),h=Object(O.a)(f,2),p=h[0],y=h[1],v=Object(s.useState)(0),T=Object(O.a)(v,2),S=T[0],P=T[1],E=Object(s.useState)(0),K=Object(O.a)(E,2),W=K[0],F=K[1],G=Object(s.useState)(0),H=Object(O.a)(G,2),Y=H[0],V=H[1],z=Object(s.useState)({open:!1,message:"",severity:void 0}),U=Object(O.a)(z,2),J=U[0],Z=U[1],q=Object(s.useState)(new Date(e.startDate)),X=Object(O.a)(q,2),Q=X[0],$=X[1],ee=Object(I.c)(),te=Object(s.useState)(),ae=Object(O.a)(te,2),ne=ae[0],re=ae[1],ce=function(){var t=Object(x.a)(g.a.mark((function t(){var a,n,c,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,y(!0),!ee||!(null===ne||void 0===ne?void 0:ne.program)){t.next=10;break}return t.next=5,Object(L.c)(ne,e.config,ee.publicKey,e.treasury);case 5:return a=t.sent,t.next=8,Object(L.a)(a,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(n=t.sent)||void 0===n?void 0:n.err)?Z({open:!0,message:"Mint failed! Please try again!",severity:"error"}):Z({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),c=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(c="SOLD OUT!",b(!0)):312===t.t0.code&&(c="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?c="SOLD OUT!":t.t0.message.indexOf("0x135")&&(c="Insufficient funds to mint. Please fund your wallet.")),Z({open:!0,message:c,severity:"error"});case 17:if(t.prev=17,!ee){t.next=23;break}return t.next=21,e.connection.getBalance(ee.publicKey);case 21:i=t.sent,r(i/N.LAMPORTS_PER_SOL);case 23:return y(!1),t.finish(17);case 25:case"end":return t.stop()}}),t,null,[[0,12,17,25]])})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){Object(x.a)(g.a.mark((function t(){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ee){t.next=5;break}return t.next=3,e.connection.getBalance(ee.publicKey);case 3:a=t.sent,r(a/N.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[ee,e.connection]),Object(s.useEffect)((function(){Object(x.a)(g.a.mark((function t(){var a,n,r,c,i,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(ee){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(L.b)(ee,e.candyMachineId,e.connection);case 4:a=t.sent,n=a.candyMachine,r=a.goLiveDate,c=a.itemsAvailable,i=a.itemsRemaining,s=a.itemsRedeemed,P(c),V(i),F(s),b(0===i),$(r),re(n);case 16:case"end":return t.stop()}}),t)})))()}),[ee,e.candyMachineId,e.connection]),Object(D.jsxs)("div",{children:[ee&&Object(D.jsxs)("p",{children:["Wallet ",Object(L.d)(ee.publicKey.toBase58()||"")]}),ee&&Object(D.jsxs)("p",{children:["Balance: ",(n||0).toLocaleString()," SOL"]}),ee&&Object(D.jsxs)("p",{children:["Total Available: ",S]}),ee&&Object(D.jsxs)("p",{children:["Redeemed: ",W]}),ee&&Object(D.jsxs)("p",{children:["Remaining: ",Y]}),Object(D.jsx)(A,{children:ee?Object(D.jsx)(C,{disabled:d||p||!o,onClick:ce,variant:"contained",children:d?"SOLD OUT":o?p?Object(D.jsx)(w.a,{}):"MINT":Object(D.jsx)(k.a,{date:Q,onMount:function(e){return e.completed&&u(!0)},onComplete:function(){return u(!0)},renderer:B})}):Object(D.jsx)(_,{children:"Connect Wallet"})}),Object(D.jsx)(M.a,{open:J.open,autoHideDuration:6e3,onClose:function(){return Z(Object(j.a)(Object(j.a)({},J),{},{open:!1}))},children:Object(D.jsx)(R.a,{onClose:function(){return Z(Object(j.a)(Object(j.a)({},J),{},{open:!1}))},severity:J.severity,children:J.message})})]})},K=function(e){return Object(D.jsx)("div",{children:Object(D.jsx)(b.a,{children:Object(D.jsxs)(f.a,{className:"cus-nav",variant:"dark",expand:"lg",children:[Object(D.jsx)(f.a.Brand,{href:"#top",className:"font-weight-bold text-uppercase",children:Object(D.jsx)("img",{className:"img-fluid nav-logo",src:e.logo,alt:""})}),Object(D.jsx)(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(D.jsx)(f.a.Collapse,{id:"basic-navbar-nav",children:Object(D.jsxs)(h.a,{className:"ml-auto",children:[Object(D.jsx)(h.a.Link,{href:"#about",className:"link-style linkh",children:"Story"}),Object(D.jsx)(h.a.Link,{href:"#story",className:"link-style linkh",children:"About"}),Object(D.jsx)(h.a.Link,{href:"#team",className:"link-style linkh",children:"Team"}),Object(D.jsx)(h.a.Link,{className:"link-style btn btn-outline-warning",children:Object(D.jsx)(E,{candyMachineId:e.candyMachineId,config:e.config,connection:e.connection,startDate:e.startDate,treasury:e.treasury,txTimeout:e.txTimeout})})]})})]})})})},W=(a(434),a(627)),F=a(626),G=a.p+"static/media/main_banner_place_holder.c85eee2d.png",H=a.p+"static/media/secondry_banner_place_holder.499c6098.gif",Y={navbar:{logo:a.p+"static/media/logo.656b839c.gif"},showcaseMain:{backGroundImage:G},showcaseSecondary:{backGroundImage:H},about:{name:"MetaMartians",image:a.p+"static/media/nft_sample_1.2c42706e.gif",text:"MetaMartians once lived in harmony in Web2, but this harmony was short-lived. Everything changed when deciding to move to Web3 for a better future. Disagreement began on what blockchain to move to. The conflict split the Martians into two groups: 5,000  that supported Solana and 5,000 that supported Ethereum. After a terrible civil war, half the population was eradicated. The two groups agreed for their civilization to coexist on both blockchains. This evenly split the Martians 2,500 and 2,500 between Solana and Ethereum. By buying a MetaMartian on the Solana blockchain, you will be whitelisted to get a MetaMartian on the Ethereum blockchain in the future."},story:{title:"About",text:"Each MetaMartian NFT will be used as an exclusive access pass\u2014 to our community Discord (unlockable content) AND IRL events involving the innovations in blockchain technology, software, and coding. In the Discord, Martians will be granted access to groups that empower youth creatives, and give a platform for our founders to educate and provide tutorials. These tutorials will allow you to create your own collection, code your own contract, and ultimately create your own community. Mint a MetaMartian and join the youth movement of creators!"},roadMap:[{textLeft:"10%",textRight:"Web 3.0 tutorial video release (Discord) Bonus: Generating the metadata for images in collection"},{textLeft:"20%",textRight:"Candy Machine tutorial video release (Discord) Bonus: uploading the collection to the blockchain"},{textLeft:"30%",textRight:"IRL networking event: location TBD Bonus: Solana landing page tutorial release (Discord)"},{textLeft:"40%",textRight:"Community vote on purchase of NFT collectible created by a young entrepreneur (Discord will be loaded with information and education around the collectible\u2014 why its valuable, rarity relevances, token utility, etc)"},{textLeft:"50%",textRight:"Solana Collection sold out! IRL networking party to celebrate whitelist backers and announce Ethereum minting CHARITY: 10k donation to Code.org to help expand access to computer science for underrepresented students."},{textLeft:"60%",textRight:"Exclusive merch release by Cards and Culture"},{textLeft:"70%",textRight:"Community vote on purchase of a historic collectible (Cryptopunks, Bored Ape, Degen Ape, etc)"},{textLeft:"80%",textRight:"How to build a community Bonus: Generate metadata, deploy a smart contract, and create a landing page for Ethereum tutorial (Discord)"},{textLeft:"90%",textRight:"CONTEST: create your own artwork for the founders to pick a winner\u2014 winner gets to mint their contract with the founders and create video for YouTube, Twitch, etc"},{textLeft:"100%",textRight:"GIVEAWAY\u2014 50k in ETH, 10 NFT\u2019s, charity donation of 25k possible tech conference on a larger regional location (New Orleans, Houston)"}],teamMembers:[{teamMemberImage:a.p+"static/media/team_member_1.1cf53f43.png",teamMemberName:"Jordan",teamMemberLink:"https://www.instagram.com/jrdn.hu/",teamMemberTitle:"Developer",teamMemberDescription:"16 year-old aspiring full stack developer"},{teamMemberImage:a.p+"static/media/team_member_2.576bbcbd.png",teamMemberName:"Zach",teamMemberLink:"https://www.instagram.com/zachattack_88/",teamMemberTitle:"Artist",teamMemberDescription:"14 year-old aspiring entrepreneur and artist"},{teamMemberImage:a.p+"static/media/team_member_3.a27c4167.png",teamMemberName:"Anthony",teamMemberLink:"https://www.instagram.com/anthony_ranaudo/",teamMemberTitle:"Creative Director",teamMemberDescription:"Founder of Cards and Culture"},{teamMemberImage:a.p+"static/media/team_member_4.6866841d.png",teamMemberName:"Brandie",teamMemberLink:"https://www.instagram.com/anthony_ranaudo/",teamMemberTitle:"Creative Director",teamMemberDescription:"Founder of Cards and Culture"},{teamMemberImage:a.p+"static/media/team_member_5.4f9da80c.png",teamMemberName:"Vito",teamMemberLink:"https://www.instagram.com/anthony_ranaudo/",teamMemberTitle:"Creative Director",teamMemberDescription:"Founder of Cards and Culture"}],footerLinks:[{image:a.p+"static/media/Logo white.8097ca9d.svg",link:"https://twitter.com/MetaMutants"},{image:a.p+"static/media/icon_clyde_white_RGB.a4202270.svg",link:"https://discord.gg/u3c9Kf3Xmz"},{image:a.p+"static/media/Medium.168f314c.png",link:"https://metamutants.medium.com/"}],footerText:"All rights reserved"},V=function(e){return Object(D.jsx)(F.a,{lg:"4",className:"mb-4",children:Object(D.jsx)("div",{className:"mbc social-logo h-100 d-flex justify-content-around align-items-center text-center",children:Object(D.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(D.jsx)("img",{className:"footer-social img-fluid",src:e.image,alt:""})})})})},z=function(e){return Object(D.jsx)("div",{className:"footer p-3",children:Object(D.jsx)(b.a,{className:"",children:Object(D.jsxs)(W.a,{children:[Y.footerLinks.map((function(e,t){return Object(D.jsx)(V,{image:e.image,link:e.link},t)})),Object(D.jsx)(F.a,{lg:"4",className:"mb-4",children:Object(D.jsx)("div",{className:"mbc h-100 d-flex justify-content-center align-items-center",children:Object(D.jsxs)("div",{className:"",children:[Object(D.jsxs)("span",{className:"font-weight-bold",children:["\xa9 ",(new Date).getFullYear()," All Rights Reserved."]}),Object(D.jsx)("br",{}),e.footerText]})})})]})})})},U=(a(255),function(e){return Object(D.jsxs)("div",{className:"row text-wrapper",children:[Object(D.jsx)("span",{"data-aos":"fade-right","data-aos-duration":"2000",className:"col-sm-2 number-text aos-init aos-animate",children:e.textLeft}),Object(D.jsx)("span",{"data-aos":"fade-left","data-aos-duration":"2000",className:"col-sm-10 subtitle aos-init aos-animate",children:e.textRight})]})}),J=function(e){return Object(D.jsx)("div",{id:"roadmap",className:"roadmap",children:Object(D.jsx)(b.a,{className:" h-100",children:Object(D.jsx)(W.a,{className:" h-100",children:Object(D.jsx)(F.a,{lg:"12",className:"",children:Object(D.jsxs)("div",{className:"",children:[Object(D.jsx)("h1",{"data-aos":"fade-in","data-aos-duration":"2000",className:"title text-uppercase",children:e.roadMapTitle}),Y.roadMap.map((function(e,t){return Object(D.jsx)(U,{textLeft:e.textLeft,textRight:e.textRight},t)}))]})})})})})},Z=(a(256),function(e){return Object(D.jsx)(F.a,{"data-aos":"fade-in","data-aos-duration":"2000",lg:"4",className:"",children:Object(D.jsxs)("div",{className:"",children:[Object(D.jsx)("img",{className:"img-fluid team-img",src:e.teamMemberImage,alt:""}),Object(D.jsx)("h3",{className:"title mt-2",children:e.teamMemberName}),Object(D.jsxs)("p",{className:"subtitle",children:[Object(D.jsx)("a",{href:e.teamMemberLink,target:"_blank",rel:"noreferrer",children:e.teamMemberTitle}),", ",e.teamMemberDescription]})]})})}),q=function(e){return Object(D.jsx)("div",{id:"team",className:"team",children:Object(D.jsxs)(b.a,{className:" h-100",children:[Object(D.jsxs)("div",{className:"",children:[Object(D.jsx)("h1",{"data-aos":"fade-in","data-aos-duration":"2000",className:"title",children:e.teamTitle}),Object(D.jsx)("span",{className:"sub",children:e.teamName})]}),Object(D.jsx)(W.a,{className:"h-100 mt-5",children:Y.teamMembers.map((function(e,t){return Object(D.jsx)(Z,{teamMemberImage:e.teamMemberImage,teamMemberName:e.teamMemberName,teamMemberLink:e.teamMemberLink,teamMemberTitle:e.teamMemberTitle,teamMemberDescription:e.teamMemberDescription},t)}))})]})})},X=(a(435),function(e){return Object(D.jsx)("div",{id:"story",className:"story",children:Object(D.jsx)(b.a,{"data-aos":"fade-up","data-aos-duration":"2000",className:"mt-5 h-100",children:Object(D.jsx)(W.a,{className:"h-100",children:Object(D.jsx)(F.a,{lg:"12",className:"",children:Object(D.jsxs)("div",{className:"",children:[Object(D.jsx)("h1",{className:"title",children:e.title}),Object(D.jsx)("p",{className:"subtitle",children:e.text})]})})})})})}),Q=(a(436),function(e){return Object(D.jsx)("div",{id:"about",className:"about",children:Object(D.jsx)(b.a,{className:" h-100",children:Object(D.jsxs)(W.a,{className:" h-100",children:[Object(D.jsx)(F.a,{lg:"6",className:"d-flex align-items-center justify-content-center","data-aos":"fade-right","data-aos-duration":"2000",children:Object(D.jsx)("div",{className:"aboutimg",children:Object(D.jsx)("img",{className:"img-fluid about-img",src:e.image,alt:""})})}),Object(D.jsx)(F.a,{lg:"6",className:"d-flex align-items-center","data-aos":"fade-left","data-aos-duration":"2000",children:Object(D.jsxs)("div",{className:"about-text",children:[Object(D.jsxs)("h1",{className:"title text-uppercase",children:["What is ",e.name,"?"]}),Object(D.jsx)("p",{className:"mt-3 subtitle",children:e.text})]})})]})})})}),$=(a(437),function(e){return Object(D.jsx)("div",{className:"showcase",style:{backgroundImage:"url(".concat(e.backGroundImage,")")}})}),ee=function(e){return Object(D.jsxs)("div",{id:"home",className:"root home",children:[Object(D.jsx)(K,{logo:Y.navbar.logo,candyMachineId:e.candyMachineId,config:e.config,connection:e.connection,startDate:e.startDate,treasury:e.treasury,txTimeout:e.txTimeout}),Object(D.jsx)($,{backGroundImage:Y.showcaseMain.backGroundImage}),Object(D.jsx)(Q,{name:Y.about.name,image:Y.about.image,text:Y.about.text}),Object(D.jsx)($,{backGroundImage:Y.showcaseSecondary.backGroundImage}),Object(D.jsx)(X,{title:Y.story.title,text:Y.story.text}),Object(D.jsx)(J,{roadMapTitle:"Roadmap"}),Object(D.jsx)(q,{teamName:"Behind MetaMartians",teamTitle:"The Team"}),Object(D.jsx)(z,{footerText:"MetaMartians created by Jordan and Zach"})]})},te=a(32),ae=a(119),ne=a(354),re=a(628),ce=new te.d.PublicKey("5JMpRqTjHHwNpVcwZHcDpLo7nh1kyhpWtM8N7swvywuz"),ie=new te.d.PublicKey("FAjey1mZPv2QGTV56Rrdei16RnoRdKH7maPRo5fSufd2"),se=new te.d.PublicKey("FY6yMkiQEzVXD1MFXzzro5axVgj2vRoHuVmEchbpcJa8"),oe="mainnet-beta",ue=new te.d.Connection("https://explorer-api.mainnet-beta.solana.com"),le=parseInt("1633680000",10),me=Object(ne.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),de=function(){var e=Object(s.useMemo)((function(){return Object(N.clusterApiUrl)(oe)}),[]),t=Object(s.useMemo)((function(){return[Object(ae.a)(),Object(ae.b)(),Object(ae.c)(),Object(ae.e)({network:oe}),Object(ae.d)({network:oe})]}),[]);return Object(s.useEffect)((function(){d.a.init(),d.a.refresh()}),[]),Object(D.jsx)(re.a,{theme:me,children:Object(D.jsx)(I.a,{endpoint:e,children:Object(D.jsx)(I.b,{wallets:t,autoConnect:!0,children:Object(D.jsx)(S.b,{children:Object(D.jsx)(ee,{candyMachineId:se,config:ie,connection:ue,startDate:le,treasury:ce,txTimeout:3e4})})})})})},be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,634)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};l.a.render(Object(D.jsx)(o.a.StrictMode,{children:Object(D.jsx)(de,{})}),document.getElementById("root")),be()}},[[593,1,2]]]);
//# sourceMappingURL=main.6c07bb51.chunk.js.map