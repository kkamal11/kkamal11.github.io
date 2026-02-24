import{r as c,j as t}from"./index-m-EK70ry.js";import{skills as x}from"./Data-DkQL7lEs.js";import{R as u}from"./Reveal-B42kl0l6.js";const g=["All","Frontend","Backend","Database","AI/ML","Tools","Cloud"];function b(){const[a,r]=c.useState(!1),[n,l]=c.useState("All"),i=a?x:x.slice(0,24),o=e=>{r(!0),l(e)};return t.jsxs("section",{className:"bg-[#F8F8F8] pb-12",children:[t.jsx("h1",{className:"text-4xl font-[400px] tracking-tight text-gray-800 text-center mb-6",children:"My Skill Highlights"}),t.jsxs(u,{hiddenClass:"opacity-0 translate-y-12 scale-95",children:[t.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-8",children:g.map(e=>t.jsx("button",{onClick:()=>o(e),className:`px-4 py-1.5 rounded-lg text-sm border transition-all duration-200 hover:cursor-pointer ${n===e?"bg-gray-900 text-white border-gray-900":"bg-white text-gray-600 border-gray-200 hover:border-gray-400"}`,children:e},e))}),t.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-16",children:t.jsx("div",{className:"flex flex-wrap gap-3 justify-center will-change-transform",children:i.map(e=>t.jsx(h,{item:e,activeCategory:n},e.name))})})]}),t.jsx("div",{className:"flex items-center justify-center mt-10",children:t.jsx("button",{onClick:()=>r(e=>!e),className:"border border-gray-800 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-black hover:text-white transition cursor-pointer",children:a?"Show Less":"Expand All"})})]})}function h({item:s,activeCategory:a}){const r=c.useRef(null),n=a==="All"||s.category===a,l=o=>{if(!r.current)return;const e=r.current.getBoundingClientRect(),d=o.clientX-e.left-e.width/2,p=o.clientY-e.top-e.height/2;r.current.style.transform=`translate(${d*.09}px, ${p*.09}px)`},i=()=>{r.current&&(r.current.style.transform="translate(0px, 0px)")};return t.jsxs("div",{ref:r,onMouseMove:l,onMouseLeave:i,className:`
        group flex items-center gap-2
        px-4 py-2 rounded-2xl
        bg-white border
        text-xs uppercase tracking-wide
        cursor-default
        transition-all duration-500 ease-out
        ${n?`
              text-gray-700
              border-gray-300
              opacity-100
              scale-100
              shadow-[0_2px_10px_rgba(0,0,0,0.06)]
            `:`
              text-gray-400
              border-gray-200
              opacity-35
              scale-[0.97]
            `}
        hover:shadow-md
      `,children:[t.jsx("img",{src:s.icon,alt:s.name,className:`w-4 h-4 object-contain transition-all duration-500 ${n?"opacity-90":"opacity-40"}`}),t.jsx("span",{children:s.name})]})}export{b as default};
