import{a as ae,c as d,b as G,B as C,i as L,d as ue,p as $,F as de,R as he,P as ge,e as pe,f as fe,g as Ae,h as Ee,j as re,k as t,u as ye,l as Q,r as m,m as ve,n as v,o as h,L as we,N as b,q as k,O as ee,s as B,t as be,v as f,w as ke,x as Ce,y as Le,z as Ne,Q as Se}from"./assets/vendor-32dc92c3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();const u=ae.create({baseURL:"https://wallet.b.goit.study/api/"}),z=a=>{u.defaults.headers.common.Authorization=`Bearer ${a}`},Ie=()=>{u.defaults.headers.common.Authorization=""},I=d("register",async(a,e)=>{try{const{data:n}=await u.post("auth/sign-up",a);return z(n.token),n}catch(n){return e.rejectWithValue(n.response.data.message)}}),_=d("login",async(a,e)=>{try{const{data:n}=await u.post("auth/sign-in",a);return z(n.token),n}catch(n){return e.rejectWithValue(n.response.data.message)}}),se=d("logout",async(a,e)=>{try{const{data:n}=await u.delete("auth/sign-out");return Ie(),n}catch(n){return e.rejectWithValue(n.message)}}),w=d("refresh",async(a,e)=>{const n=e.getState().auth.token;if(!n)return e.rejectWithValue("Token is not exist!");try{z(n);const{data:r}=await u.get("users/current");return r}catch(r){return e.rejectWithValue(r.message)}}),_e=d("getBalance",async(a,e)=>{try{const{data:n}=await u.get("users/current");return n}catch(n){return e.rejectWithValue(n.message)}}),V=d("fetchTransactionsData",async(a,e)=>{try{const{data:n}=await u.get("transactions");return n}catch(n){return e.rejectWithValue(n.message)}}),R=d("deleteTransaction",async(a,e)=>{try{return await u.delete(`transactions/${a.id}`),a}catch(n){return e.rejectWithValue(n.message)}}),T=d("addTransaction",async(a,e)=>{try{const{data:n}=await u.post("transactions",a);return n}catch(n){return e.rejectWithValue(n.message)}}),W=d("editTransaction",async(a,e)=>{try{const{data:n}=await u.patch(`/transactions/${a.id}`,a.content);return e.dispatch(w()),n}catch(n){return e.rejectWithValue(n.message)}}),x=d("fetchTransactionCategories",async(a,e)=>{try{const{data:n}=await u.get("transaction-categories");return n}catch(n){return e.rejectWithValue(n.message)}}),q=d("fetchTransactionSummaryController",async(a,e)=>{try{const{data:n}=await u.get(`transactions-summary?month=${a.month}&year=${a.year}`);return n}catch(n){return e.rejectWithValue(n.message)}}),K={user:{username:"",email:""},token:null,loading:!1,error:!1,isLoggedIn:!1,isRefresh:!1,balance:0},X=G({name:"auth",initialState:K,selectors:{selectUser:a=>a.user,selectIsLoggedIn:a=>a.isLoggedIn,selectToken:a=>a.isLoggedIn,selectIsRefresh:a=>a.isRefresh,selectBalance:a=>a.balance,selectIsLoading:a=>a.loading},reducers:{logout:a=>K},extraReducers:a=>{a.addCase(_e.fulfilled,(e,{payload:n})=>{e.balance=n.balance}).addCase(T.fulfilled,(e,{payload:n})=>{e.balance=e.balance+n.amount}).addCase(R.fulfilled,(e,{payload:n})=>{e.balance=e.balance-n.amount}).addCase(se.fulfilled,e=>K).addCase(w.fulfilled,(e,{payload:n})=>{e.user.username=n.username,e.user.email=n.email,e.balance=n.balance,e.isLoggedIn=!0,e.loading=!1,e.isRefresh=!1,e.loading=!1}).addCase(_.rejected,(e,{payload:n})=>{e.error=n,e.loading=!1,e.isRefresh=!1,C.error(n)}).addCase(I.rejected,(e,{payload:n})=>{e.error=n,e.loading=!1,e.isRefresh=!1,C.error(n)}).addCase(w.rejected,(e,{payload:n})=>{e.error=n,e.loading=!1,e.isRefresh=!1}).addMatcher(L(I.fulfilled,_.fulfilled),(e,{payload:n})=>{e.user.username=n.user.username,e.user.email=n.user.email,e.user.password=n.user.password,e.balance=n.user.balance,e.token=n.token,e.loading=!1,e.isLoggedIn=!0,e.loading=!1,e.isRefresh=!1,C.success(`Welcome, ${n.user.username}`)}).addMatcher(L(I.pending,_.pending,w.pending),e=>{e.loading=!0,e.error=null,e.isRefresh=!0}).addMatcher(L(I.rejected,_.rejected,w.rejected),(e,{payload:n})=>{e.error=n,e.loading=!1,e.isRefresh=!1})}}),Re=X.reducer,{selectIsLoggedIn:U,selectUser:Te,selectToken:fn,selectIsRefresh:xe,selectBalance:Be,selectIsLoading:Pe}=X.selectors,{logout:Ue}=X.actions,Je={transactionsList:[],transactionCategories:[],categoriesSummary:[],expenseSummary:0,incomeSummary:0,month:new Date().getMonth()+1,year:new Date().getFullYear(),periodTotal:0,loading:!1,error:!1},O=G({name:"transactions",initialState:Je,selectors:{selectTransactions:a=>a.transactionsList,selectIsLoading:a=>a.loading,selectIsError:a=>a.error,selectTransactionCategories:a=>a.transactionCategories,selectMonth:a=>a.month,selectYear:a=>a.year,selectCategoriesSummary:a=>a.categoriesSummary,selectExpenseSummary:a=>a.expenseSummary,selectIncomeSummary:a=>a.incomeSummary,selectPeriodTotal:a=>a.periodTotal},reducers:{selectedYear:(a,{payload:e})=>{a.year=e},selectedMonth:(a,{payload:e})=>{a.month=e}},extraReducers:a=>{a.addCase(V.fulfilled,(e,{payload:n})=>{e.transactionsList=n,e.loading=!1}).addCase(R.fulfilled,(e,{payload:n})=>{e.transactionsList=e.transactionsList.filter(r=>r.id!==n.id),e.loading=!1}).addCase(T.fulfilled,(e,{payload:n})=>{e.transactionsList.push(n),e.loading=!1}).addCase(W.fulfilled,(e,{payload:n})=>{const r=e.transactionsList.findIndex(s=>s.id===n.id);e.transactionsList.splice(r,1,n),e.loading=!1}).addCase(x.fulfilled,(e,{payload:n})=>{e.transactionCategories=n,e.loading=!1}).addCase(q.fulfilled,(e,{payload:n})=>{e.categoriesSummary=n.categoriesSummary,e.expenseSummary=n.expenseSummary,e.incomeSummary=n.incomeSummary,e.periodTotal=n.periodTotal,e.loading=!1}).addMatcher(L(V.pending,R.pending,T.pending,W.pending,x.pending,q.pending),(e,{payload:n})=>{e.loading=!0,e.error=null}).addMatcher(L(V.rejected,R.rejected,T.rejected,W.rejected,x.rejected,q.rejected),(e,{payload:n})=>{e.error=n,e.loading=!1,C.error(n)})}}),Ve=O.reducer;O.actions;const{selectTransactions:An,selectIsLoading:En,selectIsError:yn,selectTransactionCategories:vn,selectYear:wn,selectMonth:bn,selectCategoriesSummary:kn,selectExpenseSummary:Cn,selectIncomeSummary:Ln,selectPeriodTotal:Nn}=O.selectors,ce=d("currency/fetchCurrencyRate",async(a,e)=>{try{return(await ae.get("https://api.monobank.ua/bank/currency")).data}catch(n){return C.error("Помилка при виконанні запиту до Monobank:",n),e.rejectWithValue(n.message)}}),We={usdRate:null,eurRate:null,lastFetchTime:null},oe=G({name:"currency",initialState:We,selectors:{selectUsdRate:a=>a.usdRate,selectEurRate:a=>a.eurRate,selectLastFetchTime:a=>a.lastFetchTime},extraReducers:a=>{a.addCase(ce.fulfilled,(e,{payload:n})=>{e.usdRate=n.find(r=>r.currencyCodeA===840&&r.currencyCodeB===980),e.eurRate=n.find(r=>r.currencyCodeA===978&&r.currencyCodeB===980),e.lastFetchTime=new Date().getTime().toString()})}}),qe=oe.reducer,{selectUsdRate:Ke,selectEurRate:Fe,selectLastFetchTime:Me}=oe.selectors,De={key:"auth",version:1,storage:re,whitelist:["token"]},He={key:"root",version:1,storage:re,whitelist:["usdRate","eurRate"]},le=ue({reducer:{auth:$(De,Re),transactions:Ve,currency:$(He,qe)},middleware:a=>a({serializableCheck:{ignoredActions:[de,he,ge,pe,fe,Ae]}}),devTools:!1}),je=Ee(le),Ge="modulepreload",Qe=function(a){return"/bc-react-67_Kpapura/"+a},te={},N=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(c=>{if(c=Qe(c),c in te)return;te[c]=!0;const i=c.endsWith(".css"),J=i?'[rel="stylesheet"]':"";if(!!r)for(let y=s.length-1;y>=0;y--){const S=s[y];if(S.href===c&&(!i||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${J}`))return;const p=document.createElement("link");if(p.rel=i?"stylesheet":Ge,i||(p.as="script",p.crossOrigin=""),p.href=c,document.head.appendChild(p),i)return new Promise((y,S)=>{p.addEventListener("load",y),p.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>e()).catch(c=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=c,window.dispatchEvent(i),!i.defaultPrevented)throw c})},ze="_loaderWrapper_y4qxp_1",Xe="_loader_y4qxp_1",Oe="_spinner_y4qxp_1",Ye="_loaderName_y4qxp_30",F={loaderWrapper:ze,loader:Xe,spinner:Oe,loaderName:Ye},P=()=>t.createElement("div",{className:F.loaderWrapper},t.createElement("div",{className:F.loader},t.createElement("span",{className:F.loaderName}))),g="/bc-react-67_Kpapura/assets/sprite-7c7b64a9.svg",Ze="_wrap_1nzyu_1",$e="_logo_1nzyu_5",et="_text_1nzyu_14",M={wrap:Ze,logo:$e,text:et},tt=({closeModal:a})=>{const e=ye(),n=Q(),r=()=>{n(se()),n(Ue()),a(),e("/")};return t.createElement("div",{className:M.wrap},t.createElement("a",{href:"",className:M.logo},t.createElement("svg",{width:"36",height:"36"},t.createElement("use",{xlinkHref:`${g}#icon-logo`})),"Money Guard"),t.createElement("p",{className:M.text},"Are you sure you want to log out?"),t.createElement("button",{className:"modalButtonColor",onClick:r},"Logout"),t.createElement("button",{className:"modalButton",onClick:a},"Cancel"))},nt="_closeButton_1jy5c_1",at="_modalContent_1jy5c_16",rt="_modalWrapper_1jy5c_40",D={closeButton:nt,modalContent:at,modalWrapper:rt},st=document.querySelector("#modal"),ct=({closeModal:a,children:e})=>{const n=m.useCallback(s=>{s.key==="Escape"&&a()},[a]);m.useEffect(()=>(document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}),[a,n]);const r=s=>{s.target===s.currentTarget&&a()};return ve.createPortal(t.createElement("div",{onClick:r,className:D.modalWrapper},t.createElement("div",{className:D.modalContent},t.createElement("button",{className:D.closeButton,onClick:a},t.createElement("svg",{width:"16",height:"16"},t.createElement("use",{xlinkHref:`${g}#icon-close`}))),e)),st)},ot=()=>{const[a,e]=m.useState(!1);return{isOpen:a,close:()=>e(!1),open:()=>e(!0),toggle:()=>e(c=>!c)}},Y=()=>{const a=v.useMediaQuery({query:"(min-width: 768px)"}),e=v.useMediaQuery({query:"(min-width: 1280px)"}),n=v.useMediaQuery({query:"(max-width: 768px)"}),r=v.useMediaQuery({query:"(max-width: 767px)"}),s=v.useMediaQuery({query:"(orientation: portrait)"}),c=v.useMediaQuery({query:"(min-resolution: 2dppx)"});return{isBigScreenOrTablet:a,isBigScreen:e,isMobile:r,isTabletOrMobile:n,isPortrait:s,isRetina:c}},lt="_header_13sml_1",it="_hederContainer_13sml_17",mt="_logo_13sml_36",ut="_wrap_13sml_50",dt="_user_13sml_56",ht="_button_13sml_62",gt="_icon_13sml_88",A={header:lt,hederContainer:it,logo:mt,wrap:ut,user:dt,button:ht,icon:gt},pt=()=>{const{isOpen:a,toggle:e}=ot(),{isBigScreenOrTablet:n,isMobile:r}=Y(),s=h(Te),c=s.email.indexOf("@"),i=s.email.slice(0,c);return t.createElement("header",{className:A.header},t.createElement("div",{className:A.hederContainer},t.createElement(we,{to:"/",className:A.logo},n?t.createElement("svg",{width:"24",height:"23"},t.createElement("use",{xlinkHref:`${g}#icon-logo`})):t.createElement("svg",{width:"17",height:"17"},t.createElement("use",{xlinkHref:`${g}#icon-logo`})),"Money Guard"),t.createElement("div",{className:A.wrap}," ",t.createElement("p",{className:A.user},i),t.createElement("button",{className:A.button,onClick:e},t.createElement("svg",{width:"18",height:"18",className:A.icon},t.createElement("use",{href:`${g}#icon-exit`})),n?"Exit":"")),a&&t.createElement(ct,{closeModal:e},t.createElement(tt,{closeModal:e}))))},ft="_wrapper_678na_1",At="_title_678na_24",Et="_text_678na_32",H={wrapper:ft,title:At,text:Et};function yt(){const e=h(Be).toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2});return t.createElement("div",{className:H.wrapper},t.createElement("p",{className:H.title},"YOUR BALANCE"),t.createElement("p",{className:H.text},"₴ ",e))}const vt="/bc-react-67_Kpapura/assets/currency_desk@2x-54245c55.webp",wt="/bc-react-67_Kpapura/assets/line_desc_2x-55495c84.webp",bt="/bc-react-67_Kpapura/assets/currency_tablet@2x-0bcf0da3.webp",kt="/bc-react-67_Kpapura/assets/line_desc_tab_2x-957217ae.webp",Ct="/bc-react-67_Kpapura/assets/currency_mobile@2x-4df7c393.webp",Lt="/bc-react-67_Kpapura/assets/line_desc_mob_2x-3a66334f.webp",Nt="/bc-react-67_Kpapura/assets/currency_desk-1d8a01c2.webp",St="data:image/webp;base64,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",It="/bc-react-67_Kpapura/assets/currency_tablet-423fbdd5.webp",_t="data:image/webp;base64,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",Rt="/bc-react-67_Kpapura/assets/currency_mobile-d9cb6b3c.webp",Tt="data:image/webp;base64,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";function xt(a,e,n){let r="",s="";return a?e?(r=vt,s=wt):n?(r=bt,s=kt):(r=Ct,s=Lt):e?(r=Nt,s=St):n?(r=It,s=_t):(r=Rt,s=Tt),{imageSrc:r,secondImageSrc:s}}const Bt="_wrapper_115bn_1",Pt="_secondwrapper_115bn_23",Ut="_imgBox_115bn_41",Jt="_table_115bn_54",Vt="_head_115bn_70",Wt="_tableBody_115bn_82",qt="_titleRow_115bn_94",Kt="_row_115bn_115",Ft="_titleItem_115bn_135",Mt="_rowItem_115bn_143",Dt="_vector_115bn_151",Ht="_image_115bn_156",jt="_secondimage_115bn_177",Gt="_smallnumeur_115bn_189",Qt="_smallnumusd_115bn_199",o={wrapper:Bt,secondwrapper:Pt,imgBox:Ut,table:Jt,head:Vt,tableBody:Wt,titleRow:qt,row:Kt,titleItem:Ft,rowItem:Mt,vector:Dt,image:Ht,secondimage:jt,smallnumeur:Gt,smallnumusd:Qt};function ie(){const a=Q(),e=h(Ke),n=h(Fe),r=h(Me),{isBigScreen:s,isTabletOrMobile:c,isRetina:i}=Y(),{imageSrc:J,secondImageSrc:Z}=xt(i,s,c);return m.useEffect(()=>{(new Date().getTime()-r)/(1e3*60*60)>1&&a(ce())},[a,r]),t.createElement("div",{className:o.wrapper},t.createElement("div",{className:o.secondwrapper},t.createElement("table",{className:o.table},t.createElement("thead",{className:o.head},t.createElement("tr",{className:o.titleRow},t.createElement("th",{className:o.titleItem},"Currency"),t.createElement("th",{className:o.titleItem},"Purchase"),t.createElement("th",{className:o.titleItem},"Sale"))),t.createElement("tbody",{className:o.tableBody},e&&t.createElement("tr",{className:o.row},t.createElement("td",{className:o.rowItem},"USD"),t.createElement("td",{className:o.rowItem},e==null?void 0:e.rateBuy),t.createElement("td",{className:o.rowItem},e==null?void 0:e.rateSell)),n&&t.createElement("tr",{className:o.row},t.createElement("td",{className:o.rowItem},"EUR"),t.createElement("td",{className:o.rowItem},n==null?void 0:n.rateBuy),t.createElement("td",{className:o.rowItem},n==null?void 0:n.rateSell)))),s&&t.createElement(t.Fragment,null,t.createElement("p",{className:o.smallnumeur}," ",n==null?void 0:n.rateBuy),t.createElement("p",{className:o.smallnumusd}," ",e==null?void 0:e.rateBuy)),t.createElement("div",{className:o.imgBox},t.createElement("img",{className:o.image,src:J,alt:"Currency rate"}),t.createElement("img",{className:o.secondimage,src:Z,alt:"Currency rate"}))))}const zt=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"})),me=()=>{const[a,e]=m.useState(window.innerWidth),n=()=>{e(window.innerWidth)};return m.useEffect(()=>(window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),{windowWidth:a}},Xt="_navLinkContainer_h5vah_1",Ot="_navLinkWrapper_h5vah_11",Yt="_navLinkTitle_h5vah_17",Zt="_active_h5vah_36",$t="_navLinkIconBg_h5vah_45",en="_navLinkIcon_h5vah_45",l={navLinkContainer:Xt,navLinkWrapper:Ot,navLinkTitle:Yt,active:Zt,navLinkIconBg:$t,navLinkIcon:en},tn=()=>{const a=me().windowWidth;return t.createElement("div",{className:l.navLinkContainer},t.createElement("div",{className:l.navLinkWrapper},a<768?t.createElement(b,{to:"home",className:({isActive:e})=>k(l.navLinkTitle,e&&l.active)},t.createElement("div",{className:l.navLinkIconBg},t.createElement("svg",{width:"38",height:"38",className:l.navLinkIcon},t.createElement("use",{xlinkHref:`${g}#icon-home`})))):t.createElement(b,{to:"home",className:({isActive:e})=>k(l.navLinkTitle,e&&l.active)},t.createElement("div",{className:l.navLinkIconBg},t.createElement("svg",{width:"18",height:"18",className:l.navLinkIcon},t.createElement("use",{xlinkHref:`${g}#icon-home`}))),"Home"),a<768?t.createElement(b,{to:"statistics",className:({isActive:e})=>k(l.navLinkTitle,e&&l.active)},t.createElement("div",{className:l.navLinkIconBg},t.createElement("svg",{width:"32",height:"32",className:l.navLinkIcon},t.createElement("use",{xlinkHref:`${g}#icon-statistics`})))):t.createElement(b,{to:"statistics",className:({isActive:e})=>k(l.navLinkTitle,e&&l.active)},t.createElement("div",{className:l.navLinkIconBg},t.createElement("svg",{width:"16",height:"16",className:l.navLinkIcon},t.createElement("use",{xlinkHref:`${g}#icon-statistics`}))),"Statistics"),a<768&&t.createElement(b,{to:"/currency",className:({isActive:e})=>k(l.navLinkTitle,e&&l.active)},t.createElement("div",{className:l.navLinkIconBg},t.createElement("svg",{width:"38",height:"38",className:l.navLinkIcon},t.createElement("use",{xlinkHref:`${g}#icon-currency`}))))))},nn="_mainContainer_vncvq_1",an="_commonInfo_vncvq_26",rn="_wrap_vncvq_62",sn="_backgroundContainer_home_vncvq_67",cn="_backgroundContainer_statistic_vncvq_73",E={mainContainer:nn,commonInfo:an,wrap:rn,backgroundContainer_home:sn,backgroundContainer_statistic:cn},on=()=>{const a=h(Pe),e=h(U),n=me().windowWidth;return e?t.createElement(t.Fragment,null,a&&t.createElement(P,null),t.createElement(pt,null),t.createElement("div",{className:E.walletContainer},t.createElement("div",{className:E.backgroundContainer_home},t.createElement("div",null),t.createElement("div",null),t.createElement("div",null),t.createElement("div",null),t.createElement("div",null),t.createElement("div",null)),t.createElement("div",{className:E.backgroundContainer_statistic},t.createElement("div",null),t.createElement("div",null),t.createElement("div",null),t.createElement("div",null),t.createElement("div",null),t.createElement("div",null),t.createElement("div",null),t.createElement("div",null)),t.createElement("div",{className:E.mainContainer},t.createElement("div",{className:E.commonInfo},t.createElement("div",{className:E.wrap},t.createElement(tn,{className:E.navBar}),n>=768&&t.createElement(yt,null)),n>=768&&t.createElement(ie,null)),t.createElement(m.Suspense,{fallback:t.createElement(P,null)},t.createElement(ee,null))))):t.createElement(t.Fragment,null,t.createElement(ee,null))},j=({component:a,redirectTo:e="/"})=>h(U)?t.createElement(a,null):t.createElement(B,{to:e}),ne=({component:a,redirectTo:e="/"})=>h(U)?t.createElement(B,{to:e}):t.createElement(a,null),ln=m.lazy(()=>N(()=>import("./assets/Login-e09c6c85.js"),["assets/Login-e09c6c85.js","assets/vendor-32dc92c3.js","assets/vendor-b478ab71.css","assets/LoginRegisterForm-9c506ae9.js","assets/LoginRegisterForm-e50ac5db.css"])),mn=m.lazy(()=>N(()=>import("./assets/Register-c49c4fb9.js"),["assets/Register-c49c4fb9.js","assets/vendor-32dc92c3.js","assets/vendor-b478ab71.css","assets/LoginRegisterForm-9c506ae9.js","assets/LoginRegisterForm-e50ac5db.css","assets/Register-7fa9965d.css"])),un=m.lazy(()=>N(()=>import("./assets/HomeTab-d86eeab5.js"),["assets/HomeTab-d86eeab5.js","assets/vendor-32dc92c3.js","assets/vendor-b478ab71.css","assets/HomeTab-acbee892.css"])),dn=m.lazy(()=>N(()=>Promise.resolve().then(()=>zt),void 0)),hn=m.lazy(()=>N(()=>import("./assets/StatisticsTab-bce52ef1.js"),["assets/StatisticsTab-bce52ef1.js","assets/vendor-32dc92c3.js","assets/vendor-b478ab71.css","assets/StatisticsTab-4258d9e1.css"]));function gn(){const a=h(U),e=h(xe),{isMobile:n}=Y(),r=Q();return m.useEffect(()=>{r(w())},[r]),m.useEffect(()=>{a&&r(x())},[r,a]),e?t.createElement(P,null):t.createElement(t.Fragment,null,t.createElement(m.Suspense,{fallback:t.createElement(P,null)},t.createElement(be,null,t.createElement(f,{index:!0,element:t.createElement(ne,{component:ln,redirectTo:"/home"})}),t.createElement(f,{path:"register",element:t.createElement(ne,{component:mn,redirectTo:"/home"})}),t.createElement(f,{path:"/",element:t.createElement(on,null)},t.createElement(f,{path:"/home",element:t.createElement(j,{component:un,redirectTo:"/"})}),t.createElement(f,{path:"/statistics",element:t.createElement(j,{component:hn,redirectTo:"/"})}),n&&t.createElement(f,{path:"/currency",element:t.createElement(j,{component:dn,redirectTo:"/"})})),t.createElement(f,{path:"*",element:a?t.createElement(B,{to:"/home"}):t.createElement(B,{to:"/"})}))))}ke.createRoot(document.getElementById("root")).render(t.createElement(Ce,{basename:"/money_guard_project"},t.createElement(Le,{store:le},t.createElement(Ne,{loading:null,persistor:je},t.createElement(gn,null),t.createElement(Se,{autoClose:1500})))));export{yt as B,ct as M,T as a,vn as b,ot as c,R as d,W as e,An as f,me as g,V as h,kn as i,Ln as j,Cn as k,_ as l,Nn as m,bn as n,wn as o,q as p,I as r,g as s,Y as u};
//# sourceMappingURL=commonHelpers2.js.map
