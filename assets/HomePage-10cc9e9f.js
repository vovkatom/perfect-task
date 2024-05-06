import{j as e,r as u,g as T,c as x,L as f}from"./index-5cb0a4ae.js";import{C as k}from"./Container-9c539924.js";import I from"./ScreensPage-603bb381.js";const w="_headerContainer_nogbr_1",M="_burgerButton_nogbr_11",P="_burgerIcon_nogbr_16",S="_customBox_nogbr_20",y="_themeBox_nogbr_26",A="_label_nogbr_33",$="_select_nogbr_41",q="_user_nogbr_46",H="_userName_nogbr_53",O="_avatar_nogbr_62",c={headerContainer:w,burgerButton:M,burgerIcon:P,customBox:S,themeBox:y,label:A,select:$,user:q,userName:H,avatar:O},F="_background_13uqp_1",E="_modalPageBox_13uqp_14",D="_close_13uqp_27",L="_errorText_13uqp_62",i={background:F,modalPageBox:E,close:D,errorText:L},p=({isOpen:o,onClose:t,title:n,children:a})=>o?e.jsx("div",{className:i.background,children:e.jsxs("div",{className:i.modalPageBox,children:[e.jsx("span",{className:i.close,onClick:t,children:"×"}),e.jsx("h2",{children:n}),e.jsx("div",{className:i.content,children:a})]})}):null,R=({user:o})=>e.jsxs("div",{children:[e.jsx("input",{name:"Name",value:o.name}),e.jsx("input",{name:"EMail",value:o.email})]}),U=()=>{const[o,t]=u.useState(!1),n=()=>{t(!0)},a=()=>{t(!1)},s=T();return e.jsxs("header",{className:c.headerContainer,children:[e.jsx("button",{className:c.burgerButton,type:"button",children:e.jsx("svg",{className:c.burgerIcon,width:"24",height:"24",children:e.jsx("use",{href:""})})}),e.jsxs("div",{className:c.customBox,children:[e.jsxs("div",{className:c.themeBox,children:[e.jsx("label",{htmlFor:"theme",className:c.label,children:"Theme"}),e.jsxs("select",{className:c.select,id:"theme",type:"select",children:[e.jsx("option",{value:"light",children:"Light"}),e.jsx("option",{value:"dark",children:"Dark"}),e.jsx("option",{value:"violet",children:"Violet"})]})]}),e.jsxs("div",{className:c.user,onClick:n,children:[e.jsx("p",{className:c.userName,children:s==null?void 0:s.name}),e.jsx("div",{className:c.avatar,children:s==null?void 0:s.avatarURL})]})]}),e.jsx(p,{isOpen:o,onClose:a,title:"Edit profile",children:e.jsx(R,{user:s})})]})},V="_container_865dp_1",z="_myBoardsTitle_865dp_20",j={container:V,myBoardsTitle:z},G="_logo_7bh2x_1",J="_logoIcon_7bh2x_8",K="_logoTitle_7bh2x_21",h={logo:G,logoIcon:J,logoTitle:K},Q=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:h.logo,children:[e.jsx("div",{className:h.logoIcon,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:"icon.svg#icon-logo2"})})}),e.jsx("p",{className:h.logoTitle,children:"Perfect Task"})]})}),W="_modal_1d10i_1",X="_modalActive_1d10i_15",Y="_modalContent_1d10i_21",Z="_modalContentActive_1d10i_30",d={modal:W,modalActive:X,modalContent:Y,modalContentActive:Z},ee=({active:o,setActive:t,children:n})=>{const a=()=>{t(s=>!s)};return e.jsx("div",{className:o?d.modalActive:d.modal,onClick:a,children:e.jsx("div",{className:o?d.modalContentActive:d.modalContent,onClick:s=>s.stopPropagation(),children:n})})},oe="_button_13ooa_1",te="_buttonTitle_13ooa_21",se="_buttonIcon_13ooa_27",ne="_buttonPlus_13ooa_38",m={button:oe,buttonTitle:te,buttonIcon:se,buttonPlus:ne};const ae=()=>e.jsx(e.Fragment,{}),ce="_buttonCreate_q3e6u_1",le={buttonCreate:ce},re=()=>e.jsxs("button",{type:"submit",className:le.buttonCreate,children:[e.jsx("svg",{width:"28",height:"28"}),e.jsx("p",{children:"Create"})]});const ie=()=>e.jsx("ul",{children:e.jsx("li",{children:e.jsx("svg",{})})}),de="_newBoard_38cnc_1",me="_inputTitle_38cnc_9",g={newBoard:de,inputTitle:me},ue=()=>e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"18",height:"18",children:"icon close"}),e.jsx("p",{className:g.newBoard,children:"New board"}),e.jsx("input",{className:g.inputTitle,placeholder:"Title"}),e.jsx("p",{children:"Icons"}),e.jsx(ie,{}),e.jsx("p",{children:"Background"}),e.jsx(ae,{}),e.jsx(re,{})]}),_e=()=>{const[o,t]=u.useState(!1),n=()=>{t(a=>!a)};return e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:m.button,type:"button",onClick:n,children:[e.jsx("p",{className:m.buttonTitle,children:"Create a new board"}),e.jsx("div",{className:m.buttonIcon,children:e.jsx("p",{className:m.buttonPlus,children:"+"})})]}),o&&e.jsx(ee,{active:o,setActive:t,children:e.jsx(ue,{})})]})},xe="_modalInput_4rl0h_8",he="_modalControl_4rl0h_20",je="_modalControlText_4rl0h_27",ge="_modalButton_4rl0h_34",l={modalInput:xe,modalControl:he,modalControlText:je,modalButton:ge},pe=()=>{const[o,t]=u.useState({email:"",comments:""}),n=_=>{const{name:N,value:C}=_.target;t(B=>({...B,[N]:C}))},a=_=>{_.preventDefault()},s=x(l.modalInput,l.modalControl),b=x(l.modalInput,l.modalControlText),v=x(l.modalButton,l.modalControl);return e.jsx("div",{children:e.jsxs("form",{onSubmit:a,children:[e.jsx("div",{children:e.jsx("input",{className:s,type:"email",id:"email",name:"email",value:o.email,onChange:n,placeholder:"Email address",required:!0})}),e.jsx("div",{children:e.jsx("textarea",{className:b,id:"comments",name:"comments",value:o.comments,onChange:n,rows:"4",placeholder:"Comment",required:!0})}),e.jsx("button",{className:v,type:"submit",children:"Send"})]})})},be="_container_1w4lc_1",ve="_image_1w4lc_9",Ne="_infoText_1w4lc_17",Ce="_perfectTask_1w4lc_26",Be="_question_1w4lc_30",Te="_needHelp_1w4lc_37",r={container:be,image:ve,infoText:Ne,perfectTask:Ce,question:Be,needHelp:Te},fe=()=>{const[o,t]=u.useState(!1),n=()=>{t(!0)},a=()=>{t(!1)};return e.jsxs("div",{className:r.container,children:[e.jsx("svg",{className:r.image}),e.jsxs("p",{className:r.infoText,children:["If you need help with"," ",e.jsx("span",{className:r.perfectTask,children:"Perfect Task"}),", check out our support resources or reach out to our customer support team."]}),e.jsxs("p",{className:r.needHelp,children:[e.jsx("svg",{viewBox:"0 0 32 32",width:"20",height:"20"}),e.jsx(f,{onClick:n,children:"Need help?"})]}),e.jsx(p,{isOpen:o,onClose:a,title:"Need help",children:e.jsx(pe,{})})]})},ke=()=>e.jsxs("div",{className:j.container,children:[e.jsx(Q,{}),e.jsx("h3",{className:j.myBoardsTitle,children:"My boards"}),e.jsx(_e,{}),e.jsx(fe,{})]}),Ie="_background_stxq7_1",we={background:Ie},ye=()=>e.jsxs("div",{className:we.background,children:[e.jsx(U,{}),e.jsx(ke,{}),e.jsx(k,{className:"home-page",children:e.jsx(I,{})})]});export{ye as default};
