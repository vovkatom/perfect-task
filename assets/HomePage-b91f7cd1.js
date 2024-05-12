import{j as e,c as V,a as S,u as w,r as c,b as Y,o as K,I as M,P as G,d as J,n as L,e as F,s as Q,f as W,g as X,h as $,i as Z,L as ee,l as se,k as te,m as oe}from"./index-6582eaa5.js";import{C as ae}from"./Container-b7e717cb.js";import{I as i,s as ne}from"./Icon-21b0c11c.js";import{C as D,a as le,u as re,S as ce}from"./ScreensPage-aa4c09bd.js";const ie="_burgerButton_1l6xo_1",de="_burgerIcon_1l6xo_15",H={burgerButton:ie,burgerIcon:de},me=({onClick:s})=>e.jsx(e.Fragment,{children:e.jsx("button",{className:H.burgerButton,type:"button",onClick:s,children:e.jsx(i,{id:"icon-menu",className:H.burgerIcon,width:"24",height:"24"})})}),ue="_headerMainContainer_gaapz_1",pe="_headerContainer_gaapz_26",he="_customBox_gaapz_51",_e="_user_gaapz_58",xe="_userName_gaapz_66",ge="_avatar_gaapz_84",be="_avatarImg_gaapz_98",h={headerMainContainer:ue,headerContainer:pe,customBox:he,user:_e,userName:xe,avatar:ge,avatarImg:be},je="_background_17xf8_1",Ne="_modalPageBox_17xf8_15",fe="_close_17xf8_27",Ce="_editProfileTitle_17xf8_36",ve="_errorText_17xf8_124",f={background:je,modalPageBox:Ne,close:fe,editProfileTitle:Ce,errorText:ve},Ie=({isOpen:s,onClose:t,title:o,children:a})=>s?e.jsx("div",{className:f.background,children:e.jsxs("div",{className:f.modalPageBox,children:[e.jsx("span",{className:f.close,onClick:t,children:"×"}),e.jsx("h2",{className:f.editProfileTitle,children:o}),e.jsx("div",{className:f.content,children:a})]})}):null,we="_inputClassName_1l4tr_2",ke="_plusIcon_1l4tr_25",Be="_buttonSend_1l4tr_32",Pe="_authControl_1l4tr_138",ye="_profileForm_1l4tr_143",Te="_avatar_1l4tr_150",Le="_buttonIconProfile_1l4tr_159",Se="_buttonPlusProfile_1l4tr_172",d={inputClassName:we,plusIcon:ke,buttonSend:Be,authControl:Pe,profileForm:ye,avatar:Te,buttonIconProfile:Le,buttonPlusProfile:Se},Me=V().shape({email:S().email().required(),password:S().required(),name:S().required()}),$e=({user:s,onCloseModal:t})=>{var k,B,P;const o=w(),[a,n]=c.useState(null),{register:l,handleSubmit:m,formState:{errors:u}}=Y({defaultValues:s,resolver:K(Me)}),x=p=>{const r=p.target.files[0];n(r)},g=async p=>{try{const r=new FormData;r.append("avatarURL",a),r.append("name",p.name),r.append("email",p.email),r.append("password",p.password),t(),await o(J(r)),L.Notify.success("Profile updated successfully")}catch{return L.Notify.failure("Server error. Please try again.")}};return e.jsxs("form",{className:d.profileForm,onSubmit:m(g),children:[e.jsxs("div",{className:d.avatar,children:[e.jsx("img",{src:a?URL.createObjectURL(a):s.avatarURL,alt:"avatar"}),e.jsxs("div",{className:d.buttonIconProfile,children:[e.jsx("label",{htmlFor:"avatarInput",children:e.jsx("svg",{width:"24",height:"24",className:d.plusIcon,children:e.jsx("use",{xlinkHref:`${ne}#icon-plus`})})}),e.jsx("input",{id:"avatarInput",type:"file",accept:"image/*",onChange:x,style:{display:"none"}})]})]}),e.jsx("input",{className:d.inputClassName,...l("name")}),e.jsx(M,{message:(k=u.name)==null?void 0:k.message}),e.jsx("input",{className:d.inputClassName,...l("email")}),e.jsx(M,{message:(B=u.email)==null?void 0:B.message}),e.jsx(G,{className:d.inputClassName,register:l,placeholder:"Current password"}),e.jsx(M,{message:(P=u.password)==null?void 0:P.message}),e.jsx("button",{className:d.buttonSend,type:"submit",children:"Send"})]})},Ue="_background_m8621_1",Oe="_popUpBox_m8621_17",qe="_themeList_m8621_38",Fe="_popUpBtn_m8621_44",y={background:Ue,popUpBox:Oe,themeList:qe,popUpBtn:Fe},He="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Ee=(s=21)=>{let t="",o=crypto.getRandomValues(new Uint8Array(s));for(;s--;)t+=He[o[s]&63];return t};const Ae=({children:s,onClick:t,listClassName:o,itemClassName:a})=>e.jsx("div",{className:y.background,children:e.jsx("div",{className:y.popUpBox,children:e.jsx("ul",{className:`${y.themeList} ${o} `,children:s==null?void 0:s.map((n,l)=>e.jsx("li",{id:Ee(),className:a,children:e.jsx("button",{className:y.popUpBtn,onClick:()=>t(n),children:n})},l))})})}),U="theme",C="light",v="dark",I="violet",De=()=>{const s=document.querySelector("body");document.querySelector(".themeChangeList").addEventListener("click",o=>{o.preventDefault();const{textContent:a}=o.target,n=a.trim().toLowerCase();switch(console.log(n),console.log(s),n){case C:localStorage.setItem(U,C),s.classList.add(C),s.classList.remove(v),s.classList.remove(I);break;case v:localStorage.setItem(U,v),s.classList.add(v),s.classList.remove(C),s.classList.remove(I);break;case I:localStorage.setItem(U,I),s.classList.add(I),s.classList.remove(C),s.classList.remove(v);break}})},Re=({onClick:s})=>(c.useEffect(()=>{De()},[]),e.jsx(Ae,{onClick:s,listClassName:"themeChangeList",itemClassName:"themeChangeItem",children:["Light","Dark","Violet"]})),ze="_themeBtn_1njqs_1",Ve="_themeIcon_1njqs_31",E={themeBtn:ze,themeIcon:Ve},Ye=({onClick:s})=>e.jsx(e.Fragment,{children:e.jsxs("button",{className:E.themeBtn,type:"button",onClick:s,children:["Theme",e.jsx(i,{id:"chevron-down",className:E.themeIcon,width:"10",height:"7"})]})}),Ke=({toggleSidebar:s})=>{const t=F(Q),o=F(W),[a,n]=c.useState(!1),[l,m]=c.useState(!1),u=()=>{n(!0)},x=()=>{n(!1)},g=()=>{m(!l)};return e.jsxs("div",{className:h.headerMainContainer,children:[e.jsxs("header",{className:h.headerContainer,children:[e.jsx(me,{onClick:s}),e.jsxs("div",{className:h.customBox,children:[e.jsx(Ye,{onClick:g}),e.jsxs("div",{className:h.user,onClick:u,children:[e.jsx("p",{className:h.userName,children:t==null?void 0:t.name}),e.jsx("div",{className:h.avatar,children:o?e.jsx(X,{}):e.jsx("img",{className:h.avatarImg,src:`${t==null?void 0:t.avatarURL}`,alt:"User avatar"})})]})]})]}),l&&e.jsx(Re,{onClick:g}),e.jsxs(Ie,{isOpen:a,onClose:x,title:"Edit profile",children:[e.jsx($e,{user:t,onCloseModal:x})," "]})]})},Ge="_container_7l0up_1",Je="_sidebar_7l0up_11",Qe="_myBoardsTitle_7l0up_30",O={container:Ge,sidebar:Je,myBoardsTitle:Qe},We="_logo_1u7oy_1",Xe="_logoIcon_1u7oy_8",Ze="_logoTitle_1u7oy_22",q={logo:We,logoIcon:Xe,logoTitle:Ze},es=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:q.logo,children:[e.jsx(i,{className:q.logoIcon,id:"icon-logo2",width:"32",height:"32"}),e.jsx("p",{className:q.logoTitle,children:"Perfect Task"})]})}),ss="_button_rp9xq_1",ts="_buttonTitle_rp9xq_21",os="_buttonPlus_rp9xq_29",as="_iconPlus_rp9xq_39",T={button:ss,buttonTitle:ts,buttonPlus:os,iconPlus:as},ns=()=>{const[s,t]=c.useState(!1),o=()=>{t(!0)},a=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:T.button,type:"button",onClick:o,children:[e.jsx("p",{className:T.buttonTitle,children:"Create a new board"}),e.jsx("div",{className:T.buttonPlus,children:e.jsx(i,{id:"icon-plus",className:T.iconPlus,width:"20",height:"20"})})]}),e.jsx(D,{isOpen:s,onClose:a,children:e.jsx(le,{closeModal:a})})]})},ls="_modalInput_9fd9x_8",rs="_modalControl_9fd9x_20",cs="_modalControlText_9fd9x_27",is="_modalButton_9fd9x_34",j={modalInput:ls,modalControl:rs,modalControlText:cs,modalButton:is},A={email:"",message:""},ds=({closeModal:s})=>{const[t,o]=c.useState({...A}),a=w(),n=r=>{const{name:b,value:R}=r.target;o(z=>({...z,[b]:R}))},l=r=>{r.preventDefault();try{const b=a(Z(t));if(console.log(b),b.email===t.email)return L.Notify.success("You've successfully sent your message to our support. You will get the answer on your email during 48 hours");m()}catch(b){return console.log(b.response.data.message),L.Notify.failure("Ooops, something went wrong. Try again, please")}s()},m=()=>{o({...A})},u=c.useId(),x=c.useId(),{email:g,message:k}=t,B=$(j.modalInput,j.modalControl),P=$(j.modalInput,j.modalControlText),p=$(j.modalButton,j.modalControl);return e.jsx("div",{children:e.jsxs("form",{onSubmit:l,children:[e.jsx("div",{children:e.jsx("input",{className:B,type:"email",id:u,name:"email",value:g,onChange:n,placeholder:"Email address",required:!0})}),e.jsx("div",{children:e.jsx("textarea",{className:P,id:x,name:"message",value:k,onChange:n,rows:"4",placeholder:"Comment",required:!0})}),e.jsx("button",{className:p,type:"submit",children:"Send"})]})})},ms="_container_79wtw_1",us="_image_79wtw_15",ps="_infoText_79wtw_23",hs="_perfectTask_79wtw_32",_s="_question_79wtw_36",xs="_needHelpLink_79wtw_43",gs="_iconHelp_79wtw_53",N={container:ms,image:us,infoText:ps,perfectTask:hs,question:_s,needHelpLink:xs,iconHelp:gs},bs=()=>{const[s,t]=c.useState(!1),o=()=>{t(!0)},a=()=>{t(!1)};return e.jsxs("div",{className:N.container,children:[e.jsx("svg",{className:N.image}),e.jsxs("p",{className:N.infoText,children:["If you need help with"," ",e.jsx("span",{className:N.perfectTask,children:"Perfect Task"}),", check out our support resources or reach out to our customer support team."]}),e.jsxs(ee,{className:N.needHelpLink,onClick:o,children:[e.jsx(i,{id:"icon-help-circle",className:N.iconHelp,width:"20",height:"20"}),"Need help?"]}),e.jsx(D,{isOpen:s,onClose:a,title:"Need help",children:e.jsx(ds,{closeModal:a})})]})},js="_btn_logout_18dqq_1",Ns={btn_logout:js},fs=()=>{const s=w(),t=()=>s(se());return e.jsx("div",{children:e.jsxs("button",{className:Ns.btn_logout,onClick:t,type:"button",children:[e.jsx(i,{id:"logout",width:"32",height:"32",className:""}),"Log Out"]})})},Cs="_boardContainer_1078t_1",vs="_box1_1078t_9",Is="_box2_1078t_14",ws="_icon_1078t_18",_={boardContainer:Cs,box1:vs,box2:Is,icon:ws},ks=s=>s.boards.items,Bs=()=>{const t=F(ks).map(({title:a,icon:n,id:l})=>e.jsxs("li",{className:_.boardContainer,children:[e.jsxs("div",{className:_.box1,children:[e.jsx(i,{className:_.icon,id:n,width:"18",height:"18"}),e.jsx("p",{children:a})]}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:_.updateButton,onClick:()=>o(re(l)),children:e.jsx(i,{className:_.icon,id:"icon-pencil-01",width:"16",height:"16"})}),e.jsx("button",{type:"button",className:_.deleteButton,onClick:()=>o(te(l)),children:e.jsx(i,{className:_.icon,id:"icon-trash-04",width:"16",height:"16"})})]})]},a)),o=w();return e.jsx("ul",{children:t})},Ps=()=>e.jsxs("div",{className:`${O.container} ${O.sidebar}`,children:[e.jsx(es,{}),e.jsx("h3",{className:O.myBoardsTitle,children:"My boards"}),e.jsx(ns,{}),e.jsx(Bs,{}),e.jsx(bs,{}),e.jsx(fs,{})]}),ys="_background_lg9e8_1",Ts={background:ys},Us=()=>{const[s,t]=c.useState(!1),o=window.location.search,n=new URLSearchParams(o).get("token"),l=w();n&&l(oe(n));const m=()=>{t(!s)};return e.jsxs(e.Fragment,{children:[e.jsx(Ke,{toggleSidebar:m}),e.jsxs("div",{className:Ts.background,children:[s&&e.jsx(Ps,{}),e.jsx(ae,{className:"home-page",children:e.jsx(ce,{})})]})]})};export{Us as default};
