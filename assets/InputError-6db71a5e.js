import{r as i,j as n}from"./index-ed1ac1e8.js";function d(t){var s,r,e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(s=0;s<o;s++)t[s]&&(r=d(t[s]))&&(e&&(e+=" "),e+=r)}else for(r in t)t[r]&&(e&&(e+=" "),e+=r);return e}function h(){for(var t,s,r=0,e="",o=arguments.length;r<o;r++)(t=arguments[r])&&(s=d(t))&&(e&&(e+=" "),e+=s);return e}const l=t=>i.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M0.75 9C0.75 9 3.75 3 9 3C14.25 3 17.25 9 17.25 9C17.25 9 14.25 15 9 15C3.75 15 0.75 9 0.75 9Z",stroke:"white",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z",stroke:"white",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),p="_container_cj9g3_43",u="_icon_cj9g3_54",c={container:p,icon:u},w=({placeholder:t,register:s,className:r})=>{const[e,o]=i.useState(!0);return n.jsx(n.Fragment,{children:n.jsxs("div",{className:h(r,c.container),children:[n.jsx("input",{type:e?"password":"text",...s("password"),placeholder:t}),n.jsx(l,{className:c.icon,onClick:()=>o(!e)})]})})},x="_text_fyvym_1",m="_hide_fyvym_5",a={text:x,hide:m},g=({message:t})=>n.jsx("p",{className:h(t?a.text:a.hide),children:t});export{g as I,w as P,h as c};
