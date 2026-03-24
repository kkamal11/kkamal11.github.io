import{r as t,j as e,g as n}from"./index-C7WBu3W6.js";import{F as l}from"./FileText.esm-vBWTl45v.js";function p(){const[o,r]=t.useState(!1),[s,a]=t.useState(!1);return t.useEffect(()=>{const i=setTimeout(()=>r(!0),1500);return()=>clearTimeout(i)},[]),e.jsxs(n,{to:"/resume",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),style:{fontFamily:"'DM Mono', monospace"},className:`
        fixed right-5 bottom-6 z-50
        flex items-center gap-2
        border border-gray-900 bg-white text-gray-900
        rounded-[4px] overflow-hidden
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:bg-gray-900 hover:text-white
        shadow-[0_4px_24px_rgba(0,0,0,0.10)]
        ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}
      `,children:[e.jsx("span",{className:`absolute left-0 top-0 bottom-0 w-[2px] bg-[#c8440a]\r
          transition-opacity duration-200`,style:{opacity:s?0:1}}),e.jsxs("span",{className:"flex items-center gap-2 px-3 py-2",children:[e.jsx(l,{size:14,weight:s?"fill":"regular",className:"shrink-0 transition-all duration-200"}),e.jsx("span",{className:"text-[12px] tracking-wide uppercase",children:"Resume"})]})]})}export{p as default};
