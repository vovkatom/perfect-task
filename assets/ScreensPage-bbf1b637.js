import{r as s,j as t,I as h,a as N,u as j,z as v,n as p,L as B,A as y}from"./index-5e7564b2.js";import{c as S,a as w,d as g,u as $,o as I,b as M}from"./userBoard-selectors-1e841f4d.js";const E="_background_1d8nr_1",T="_modalPageBox_1d8nr_16",k="_closeButton_1d8nr_37",A="_closeIcon_1d8nr_53",P="_errorText_1d8nr_80",_={background:E,modalPageBox:T,closeButton:k,closeIcon:A,errorText:P},L=({isOpen:n,onClose:o,title:e,children:c})=>{const d=s.useRef(),[a,m]=s.useState(!1);return s.useEffect(()=>{m(n)},[n]),s.useEffect(()=>{const r=i=>{d.current.contains(i.target)||o()};return a?document.addEventListener("mousedown",r):document.removeEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[a,o]),a?t.jsx("div",{className:_.background,children:t.jsxs("div",{ref:d,className:_.modalPageBox,children:[t.jsx("button",{className:_.closeButton,onClick:o,children:t.jsx(h,{id:"icon-x-close",className:_.closeIcon,width:"18",height:"18"})}),t.jsx("h2",{children:e}),t.jsx("div",{className:_.content,children:c})]})}):null},O="_container_4snut_1",z="_mainContainer_4snut_17",D="_button_create_4snut_44",R={container:O,mainContainer:z,button_create:D};const q="_button_4r3e2_1",F="_icon_4r3e2_12",G="_title_4r3e2_16",H={button:q,icon:F,title:G},J="_button_3eviv_1",K="_buttonSubmit_3eviv_13",Q="_icon_3eviv_25",U="_title_3eviv_31",x={button:J,buttonSubmit:K,icon:Q,title:U},C=({onClick:n,title:o,type:e})=>t.jsxs("button",{type:e,className:e==="button"?x.button:x.buttonSubmit,onClick:n,children:[t.jsx(h,{className:x.icon,id:"icon-plus",width:"28",height:"28"}),t.jsx("p",{className:x.title,children:o})]}),V="_input_1lrzx_1",f={input:V},W=S().shape({title:w().required()}),X=({closeModal:n})=>{const o=N(),{id:e}=j(g),c=async r=>{const i={title:r.title,board:e},l=await o(v(i));console.log(l),l.type==="boards/addColumn/fulfilled"&&p.Notify.success("Column successful created"),l.error&&p.Notify.failure("Oops,something went wrong. Try again, please."),m()},{register:d,handleSubmit:a,reset:m}=$({resolver:I(W)});return t.jsxs("form",{className:f.form,onSubmit:a(c),children:[t.jsx("input",{className:f.input,placeholder:"Title",...d("title")}),t.jsx(C,{className:f.submitButton,type:"submit",onClick:n,title:"Add"})]})},Y=()=>{const[n,o]=s.useState(!1),e=()=>{o(!n)},c=()=>{o(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(C,{id:"icon-plus",type:"button",onClick:e,title:"Add another column",className:H.button,style:"background-color: var(--primary-color-white)"}),t.jsx(L,{isOpen:n,onClose:c,title:"Add column",children:t.jsx(X,{closeModal:c})})]})},Z="_boardContainer_8bdje_1",tt="_item_8bdje_23",et="_box1_8bdje_33",ot="_box2_8bdje_43",nt="_icon_8bdje_47",u={boardContainer:Z,item:tt,box1:et,box2:ot,icon:nt},st=({activeBoard:n})=>{if(!n||!n.columns)return null;const o=n.columns.map(({title:e})=>t.jsxs("li",{className:u.item,children:[t.jsx("p",{children:e}),t.jsxs("div",{children:[t.jsx("button",{type:"button",className:u.updateButton,children:t.jsx(h,{className:u.icon,id:"icon-pencil-01",width:"16",height:"16"})}),t.jsx("button",{type:"button",className:u.deleteButton,children:t.jsx(h,{className:u.icon,id:"icon-trash-04",width:"16",height:"16"})})]})]},e));return console.log(o),t.jsx("ul",{className:u.boardContainer,children:o})},ct=()=>{var l;const[n,o]=s.useState(!1),[e,c]=s.useState(null),[d,a]=s.useState(null),m=j(M);console.log(m);const r=j(g),{id:i}=r;return s.useEffect(()=>{(async()=>{try{o(!0);const{data:b}=await y(i);console.log(b),c(b)}catch(b){a(b.message)}finally{o(!1)}})()},[i]),t.jsxs("div",{className:R.mainContainer,children:[n&&t.jsx(B,{centered:!0}),e&&((l=e==null?void 0:e.columns)==null?void 0:l.length)===0?t.jsx(Y,{activeBoard:e}):t.jsx(st,{activeBoard:e})]})},at=()=>t.jsx(ct,{}),ut=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"}));export{L as C,at as S,ut as a};
