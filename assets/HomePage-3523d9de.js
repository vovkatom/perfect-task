import{j as e,c as I,a as g,u as S,I as $,b as j,P as M,o as y,d as E,s as q,r as a,e as b,L as F,f as L,l as A}from"./index-641deba2.js";import{I as f,C as O}from"./Icon-41adbe86.js";import H from"./ScreensPage-5a750785.js";const D="_burgerButton_1vz3x_1",U="_burgerIcon_1vz3x_15",v={burgerButton:D,burgerIcon:U},R=({onClick:s})=>e.jsx(e.Fragment,{children:e.jsx("button",{className:v.burgerButton,type:"button",onClick:s,children:e.jsx(f,{id:"icon-menu",className:v.burgerIcon,width:"24",height:"24"})})}),W="_headerMainContainer_wb7ip_1",z="_headerContainer_wb7ip_25",V="_customBox_wb7ip_50",Z="_themeBox_wb7ip_56",G="_label_wb7ip_63",J="_select_wb7ip_71",K="_user_wb7ip_76",Q="_userName_wb7ip_83",X="_avatar_wb7ip_92",r={headerMainContainer:W,headerContainer:z,customBox:V,themeBox:Z,label:G,select:J,user:K,userName:Q,avatar:X},Y="_background_1ucp1_1",ee="_modalPageBox_1ucp1_14",se="_close_1ucp1_27",te="_errorText_1ucp1_62",m={background:Y,modalPageBox:ee,close:se,errorText:te},oe=({isOpen:s,onClose:t,title:o,children:n})=>s?e.jsx("div",{className:m.background,children:e.jsxs("div",{className:m.modalPageBox,children:[e.jsx("span",{className:m.close,onClick:t,children:"×"}),e.jsx("h2",{children:o}),e.jsx("div",{className:m.content,children:n})]})}):null,ne="_inputClassName_5uumo_1",ae="_authControl_5uumo_20",ce="_profileForm_5uumo_25",le="_avatar_5uumo_32",re="_buttonIconProfile_5uumo_40",ie="_buttonPlusProfile_5uumo_54",de="_buttonSend_5uumo_64",l={inputClassName:ne,authControl:ae,profileForm:ce,avatar:le,buttonIconProfile:re,buttonPlusProfile:ie,buttonSend:de},ue=I().shape({email:g().email().required(),password:g().required(),name:g().required()}),me=({user:s})=>{var n,c,i;const{register:t,formState:{errors:o}}=S({defaultValues:s,resolver:y(ue)});return e.jsxs("form",{className:l.profileForm,children:[e.jsx($,{}),e.jsxs("div",{className:l.avatar,children:[e.jsx("img",{src:s==null?void 0:s.avatarURL,alt:""}),e.jsx("div",{className:l.buttonIconProfile,children:e.jsx("p",{className:l.buttonPlusProfile,children:"+"})})]}),e.jsx("input",{className:l.inputClassName,...t("name")}),e.jsx(j,{message:(n=o.name)==null?void 0:n.message}),e.jsx("input",{className:l.inputClassName,...t("email")}),e.jsx(j,{message:(c=o.email)==null?void 0:c.message}),e.jsx(M,{className:l.inputClassName,register:t,placeholder:"Edit a password"}),e.jsx(j,{message:(i=o.password)==null?void 0:i.message}),e.jsx("button",{className:l.buttonSend,type:"submit",children:"Send"})]})},_e=({toggleSidebar:s})=>{const t=E(q),[o,n]=a.useState(!1),c=()=>{n(!0)},i=()=>{n(!1)};return e.jsx("div",{className:r.headerMainContainer,children:e.jsxs("header",{className:r.headerContainer,children:[e.jsx(R,{onClick:s}),e.jsxs("div",{className:r.customBox,children:[e.jsx("div",{className:r.themeBox,children:"Theme"}),e.jsxs("div",{className:r.user,onClick:c,children:[e.jsx("p",{className:r.userName,children:t==null?void 0:t.name}),e.jsx("div",{className:r.avatar,children:e.jsx("img",{src:`${t==null?void 0:t.avatarURL}`,alt:"User avatar"})})]})]}),e.jsx(oe,{isOpen:o,onClose:i,title:"Edit profile",children:e.jsx(me,{user:t})})]})})},he="_container_1yv16_1",xe="_sidebar_1yv16_10",pe="_myBoardsTitle_1yv16_29",C={container:he,sidebar:xe,myBoardsTitle:pe},ge="_logo_7bh2x_1",je="_logoIcon_7bh2x_8",be="_logoTitle_7bh2x_21",N={logo:ge,logoIcon:je,logoTitle:be},Ce=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:N.logo,children:[e.jsx("div",{className:N.logoIcon,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:"icon.svg#icon-logo2"})})}),e.jsx("p",{className:N.logoTitle,children:"Perfect Task"})]})}),Ne="_modal_1d10i_1",ve="_modalActive_1d10i_15",ke="_modalContent_1d10i_21",fe="_modalContentActive_1d10i_30",_={modal:Ne,modalActive:ve,modalContent:ke,modalContentActive:fe},Be=({active:s,setActive:t,children:o})=>{const n=()=>{t(c=>!c)};return e.jsx("div",{className:s?_.modalActive:_.modal,onClick:n,children:e.jsx("div",{className:s?_.modalContentActive:_.modalContent,onClick:c=>c.stopPropagation(),children:o})})},Te="_button_1u7x0_1",Pe="_buttonTitle_1u7x0_21",we="_buttonIcon_1u7x0_28",Ie="_buttonPlus_1u7x0_39",h={button:Te,buttonTitle:Pe,buttonIcon:we,buttonPlus:Ie};const Se=()=>e.jsx(e.Fragment,{}),$e="_buttonCreate_q3e6u_1",Me={buttonCreate:$e},ye=()=>e.jsxs("button",{type:"submit",className:Me.buttonCreate,children:[e.jsx("svg",{width:"28",height:"28"}),e.jsx("p",{children:"Create"})]});const Ee=()=>e.jsx("ul",{children:e.jsx("li",{children:e.jsx("svg",{})})}),qe="_newBoard_38cnc_1",Fe="_inputTitle_38cnc_9",k={newBoard:qe,inputTitle:Fe},Le=()=>e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"18",height:"18",children:"icon close"}),e.jsx("p",{className:k.newBoard,children:"New board"}),e.jsx("input",{className:k.inputTitle,placeholder:"Title"}),e.jsx("p",{children:"Icons"}),e.jsx(Ee,{}),e.jsx("p",{children:"Background"}),e.jsx(Se,{}),e.jsx(ye,{})]}),Ae=()=>{const[s,t]=a.useState(!1),o=()=>{t(n=>!n)};return e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:h.button,type:"button",onClick:o,children:[e.jsx("p",{className:h.buttonTitle,children:"Create a new board"}),e.jsx("div",{className:h.buttonIcon,children:e.jsx("p",{className:h.buttonPlus,children:"+"})})]}),s&&e.jsx(Be,{active:s,setActive:t,children:e.jsx(Le,{})})]})},Oe="_modalInput_4rl0h_8",He="_modalControl_4rl0h_20",De="_modalControlText_4rl0h_27",Ue="_modalButton_4rl0h_34",d={modalInput:Oe,modalControl:He,modalControlText:De,modalButton:Ue},Re=()=>{const[s,t]=a.useState({email:"",comments:""}),o=p=>{const{name:T,value:P}=p.target;t(w=>({...w,[T]:P}))},n=p=>{p.preventDefault()},c=b(d.modalInput,d.modalControl),i=b(d.modalInput,d.modalControlText),B=b(d.modalButton,d.modalControl);return e.jsx("div",{children:e.jsxs("form",{onSubmit:n,children:[e.jsx("div",{children:e.jsx("input",{className:c,type:"email",id:"email",name:"email",value:s.email,onChange:o,placeholder:"Email address",required:!0})}),e.jsx("div",{children:e.jsx("textarea",{className:i,id:"comments",name:"comments",value:s.comments,onChange:o,rows:"4",placeholder:"Comment",required:!0})}),e.jsx("button",{className:B,type:"submit",children:"Send"})]})})},We="_container_1k9dh_1",ze="_image_1k9dh_10",Ve="_infoText_1k9dh_18",Ze="_perfectTask_1k9dh_27",Ge="_question_1k9dh_31",Je="_needHelp_1k9dh_38",Ke="_link_1k9dh_42",u={container:We,image:ze,infoText:Ve,perfectTask:Ze,question:Ge,needHelp:Je,link:Ke},Qe="_background_13uqp_1",Xe="_modalPageBox_13uqp_14",Ye="_close_13uqp_27",es="_errorText_13uqp_62",x={background:Qe,modalPageBox:Xe,close:Ye,errorText:es},ss=({isOpen:s,onClose:t,title:o,children:n})=>s?e.jsx("div",{className:x.background,children:e.jsxs("div",{className:x.modalPageBox,children:[e.jsx("span",{className:x.close,onClick:t,children:"×"}),e.jsx("h2",{children:o}),e.jsx("div",{className:x.content,children:n})]})}):null,ts=s=>a.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},a.createElement("g",{clipPath:"url(#clip0_104_748)"},a.createElement("path",{d:"M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z",stroke:"#161616",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M7.5752 7.49999C7.77112 6.94304 8.15782 6.47341 8.66682 6.17426C9.17583 5.87512 9.77428 5.76577 10.3562 5.86558C10.9381 5.96539 11.4659 6.26792 11.8461 6.71959C12.2263 7.17126 12.4344 7.74292 12.4335 8.33332C12.4335 9.99999 9.93353 10.8333 9.93353 10.8333",stroke:"#161616",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M10 14.1667H10.0125",stroke:"#161616",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_104_748"},a.createElement("rect",{width:20,height:20,fill:"white"})))),os=()=>{const[s,t]=a.useState(!1),o=()=>{t(!0)},n=()=>{t(!1)};return e.jsxs("div",{className:u.container,children:[e.jsx("svg",{className:u.image}),e.jsxs("p",{className:u.infoText,children:["If you need help with"," ",e.jsx("span",{className:u.perfectTask,children:"Perfect Task"}),", check out our support resources or reach out to our customer support team."]}),e.jsx("p",{className:u.needHelp,children:e.jsxs(F,{className:u.link,onClick:o,children:[e.jsx(ts,{}),"Need help?"]})}),e.jsx(ss,{isOpen:s,onClose:n,title:"Need help",children:e.jsx(Re,{})})]})},ns="_btn_logout_puugr_1",as={btn_logout:ns},cs=()=>{const s=L(),t=()=>s(A());return console.log(t),e.jsx("div",{children:e.jsxs("button",{className:as.btn_logout,onClick:t,type:"button",children:[e.jsx(f,{id:"logout",width:"32",height:"32",className:""}),"Log Out"]})})},ls=()=>e.jsxs("div",{className:`${C.container} ${C.sidebar}`,children:[e.jsx(Ce,{}),e.jsx("h3",{className:C.myBoardsTitle,children:"My boards"}),e.jsx(Ae,{}),e.jsx(os,{}),e.jsx(cs,{})]}),rs="_background_stxq7_1",is={background:rs},_s=()=>{const[s,t]=a.useState(!1),o=()=>{t(!s)};return e.jsxs(e.Fragment,{children:[e.jsx(_e,{toggleSidebar:o}),e.jsxs("div",{className:is.background,children:[s&&e.jsx(ls,{}),e.jsx(O,{className:"home-page",children:e.jsx(H,{})})]})]})};export{_s as default};
