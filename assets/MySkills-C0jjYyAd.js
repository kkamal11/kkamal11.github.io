import{r as f,j as e}from"./index-BuKOYKqi.js";import{skills as p}from"./Data-f0S4TeuH.js";import{R as g}from"./Reveal-CHTAMVwE.js";const m=["All","Frontend","Backend","Database","AI/ML","Tools","Cloud"],u={All:{border:"#1a1916",bg:"#f5f3ee",dot:"#1a1916"},Frontend:{border:"#c8440a",bg:"#fff5f0",dot:"#c8440a"},Backend:{border:"#0a6bc8",bg:"#f0f6ff",dot:"#0a6bc8"},Database:{border:"#0a8c5a",bg:"#f0fff8",dot:"#0a8c5a"},"AI/ML":{border:"#7c3ac8",bg:"#f8f0ff",dot:"#7c3ac8"},Tools:{border:"#b87d0a",bg:"#fffbf0",dot:"#b87d0a"},Cloud:{border:"#0a7ab8",bg:"#f0faff",dot:"#0a7ab8"}};function w(){const[l,s]=f.useState(!1),[r,x]=f.useState("All"),n=r==="All"?p:p.filter(t=>t.category===r),c=l||r!=="All"?n:n.slice(0,24),a=t=>{x(t)},i=n.length;return e.jsxs("section",{className:"bg-[#F8F8F8] pb-12 px-6 md:px-16",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-gray-200",children:[e.jsxs("h1",{style:{fontFamily:"'DM Sans', sans-serif",letterSpacing:"-0.02em"},className:"text-4xl font-light text-gray-900",children:["My ",e.jsx("em",{className:"text-[#c8440a]",children:"Skills"})]}),e.jsxs("span",{style:{fontFamily:"'DM Mono', monospace"},className:"text-[10px] tracking-widest uppercase text-gray-400",children:[i," ",r==="All"?"technologies":`in ${r}`]})]}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs(g,{hiddenClass:"opacity-0 translate-y-12 scale-95",children:[e.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-8",children:m.map(t=>{const d=u[t],b=r===t;return e.jsxs("button",{onClick:()=>a(t),style:b?{background:d.bg,borderColor:d.border,color:d.border}:{},className:`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm border transition-all duration-200 hover:cursor-pointer ${r===t?"bg-gray-900 text-white border-gray-900":"bg-white text-gray-600 border-gray-200 hover:border-gray-400"}`,children:[b&&e.jsx("span",{className:"inline-block w-1.5 h-1.5 rounded-full shrink-0",style:{background:d.dot}}),t]},t)})}),e.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-16",children:e.jsx("div",{className:"flex flex-wrap gap-3 justify-center will-change-transform",children:c.map(t=>e.jsx(y,{item:t,activeCategory:r},t.name))})})]}),i>24&&e.jsx("div",{className:"flex items-center justify-center mt-10",children:e.jsx("button",{onClick:()=>s(t=>!t),className:"border border-gray-400 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-black hover:text-white transition cursor-pointer",children:l?"Show Less":"Expand All"})})]})]})}function y({item:o,activeCategory:l}){const s=f.useRef(null),r=l==="All"||o.category===l,x=c=>{if(!s.current)return;const a=s.current.getBoundingClientRect(),i=c.clientX-a.left-a.width/2,t=c.clientY-a.top-a.height/2;s.current.style.transform=`translate(${i*.09}px, ${t*.09}px)`},n=()=>{s.current&&(s.current.style.transform="translate(0px, 0px)")};return e.jsxs("div",{ref:s,onMouseMove:x,onMouseLeave:n,className:`
        group flex items-center gap-2
        px-4 py-2 rounded-2xl
        bg-white border
        text-xs uppercase tracking-wide
        cursor-default
        transition-all duration-500 ease-out
        ${r?`
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
      `,children:[e.jsx("img",{src:o.icon,alt:o.name,className:`w-4 h-4 object-contain transition-all duration-500 ${r?"opacity-90":"opacity-40"}`}),e.jsx("span",{children:o.name})]})}export{w as default};
