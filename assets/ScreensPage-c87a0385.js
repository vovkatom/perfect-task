import{r as i,j as e,h as f,b as S,e as B,i as I}from"./index-203c54e9.js";import{I as p}from"./Icon-da35d27d.js";const C="_list_z1lmr_1",N="_bgItem_z1lmr_9",w="_image_z1lmr_13",k="_imageSelected_z1lmr_18",d={list:C,bgItem:N,image:w,imageSelected:k},v=({register:s,bgImages:n})=>{const[o,c]=i.useState(null);console.log(n);const a=t=>{c(t)},r=Object.entries(n).map(([t,l],_)=>e.jsx("li",{className:d.bgItem,onClick:()=>a(l),...s("bgImage"),children:e.jsx("img",{className:o===t?d.imageSelected:d.image,src:l,alt:l})},_));return e.jsx("ul",{className:d.list,children:r})},y="_buttonCreate_14a45_1",z="_icon_14a45_13",M="_textButton_14a45_17",x={buttonCreate:y,icon:z,textButton:M},P=()=>e.jsxs("button",{type:"submit",className:x.buttonCreate,children:[e.jsx(p,{className:x.icon,id:"icon-plus",width:"28",height:"28"}),e.jsx("p",{className:x.textButton,children:"Create"})]}),$="_iconSet_1df2w_1",L="_iconContainer_1df2w_7",O="_icon_1df2w_1",T="_iconSelected_1df2w_22",m={iconSet:$,iconContainer:L,icon:O,iconSelected:T},F=({register:s})=>{const[n,o]=i.useState(null),c=t=>{o(t)},r=[{iconId:"icon-Project"},{iconId:"icon-star-04"},{iconId:"icon-loading-03"},{iconId:"icon-puzzle-piece-02"},{iconId:"icon-container"},{iconId:"icon-lightning-02"},{iconId:"icon-colors"},{iconId:"icon-hexagon-01"}].map(({iconId:t})=>e.jsx("li",{className:m.iconContainer,onClick:()=>c({iconId:t}),...s("icon"),children:e.jsx(p,{className:n===t?m.iconSelected:m.icon,id:t,width:"18",height:"18"})},t));return e.jsx(e.Fragment,{children:e.jsx("ul",{className:m.iconSet,children:r})})},E="_form_afv1v_1",V="_newBoard_afv1v_5",q="_input_afv1v_14",u={form:E,newBoard:V,input:q},G=async()=>{const{data:s}=await f.get("/boards/bgall");return console.log(s),{data:s}},R=()=>{const[s,n]=i.useState([]),[o,c]=i.useState(!1),[a,r]=i.useState(null),{register:t,handleSubmit:l}=S({defaultValues:{title:"My super board",icon:"",bgImage:""}}),_=b=>{console.log(b)};return i.useEffect(()=>{(async()=>{try{const{data:h}=await G();n(h)}catch(h){r(h.message)}finally{c(!1)}})()},[]),e.jsxs("form",{noValidate:!0,autoComplete:"off",onSubmit:l(_),className:u.form,children:[e.jsx("svg",{width:"18",height:"18",children:"icon close"}),e.jsx("p",{className:u.newBoard,children:"New board"}),e.jsx("input",{className:u.input,type:"text",placeholder:"Title",...t("title")}),e.jsx("p",{children:"Icons"}),e.jsx(F,{register:t}),e.jsx("p",{children:"Background"}),a&&e.jsx("p",{className:u.error,children:a}),o&&e.jsx("p",{children:"...Loading"}),e.jsx(v,{register:t,bgImages:s}),e.jsx(P,{})]})},A="_background_g9uhm_1",D="_modalPageBox_g9uhm_14",H="_close_g9uhm_27",J="_errorText_g9uhm_53",g={background:A,modalPageBox:D,close:H,errorText:J},K=({isOpen:s,onClose:n,title:o,children:c})=>s?e.jsx("div",{className:g.background,children:e.jsxs("div",{className:g.modalPageBox,children:[e.jsx("span",{className:g.close,onClick:n,children:"×"}),e.jsx("h2",{children:o}),e.jsx("div",{className:g.content,children:c})]})}):null,Q="_container_um494_1",U="_button_create_um494_30",j={container:Q,button_create:U},W=()=>{const s=B(I),[n,o]=i.useState(!1),c=()=>{o(!n)},a=()=>{o(!1)};return e.jsx(e.Fragment,{children:s&&e.jsxs("div",{className:j.container,children:["Before starting your project, it is essential"," ",e.jsxs("button",{type:"button",className:j.button_create,onClick:c,children:[" ","to create a board"," "]})," ","to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.",e.jsx(e.Fragment,{children:e.jsx(K,{isOpen:n,onClose:a,children:e.jsx(R,{})})})]})})},Z=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{K as C,W as S,R as a,Z as b};
