import{r as o,j as r}from"./index-uQzMnpSR.js";import{s as n}from"./Data-CdtQ3-EY.js";function p(){const[s,a]=o.useState(!1),i=s?n:n.slice(0,24);return r.jsxs("section",{className:"bg-[#F8F8F8] pb-12",children:[r.jsx("h1",{className:"text-4xl font-[400px] tracking-tight text-gray-800 text-center mb-8",children:"My Skill Highlights"}),r.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-16",children:r.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:i.map((t,l)=>r.jsx(c,{item:t},l))})}),r.jsx("div",{className:"flex items-center justify-center mt-10",children:r.jsx("button",{onClick:()=>a(t=>!t),className:"border border-gray-800 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-black hover:text-white transition cursor-pointer",children:s?"Show Less":"Expand All"})})]})}function c({item:e}){return r.jsxs("div",{className:`\r
        group flex items-center gap-2\r
        px-4 py-2\r
        rounded-2xl\r
        bg-white\r
        border border-gray-200\r
        text-xs uppercase tracking-wide\r
        text-gray-600\r
        transition-all duration-200\r
        hover:border-gray-400\r
        hover:text-gray-900\r
        hover:-translate-y-[2px]\r
        hover:shadow-sm\r
        cursor-default\r
      `,children:[r.jsx("img",{src:e.icon,alt:e.name,className:"w-4 h-4 object-contain opacity-70 group-hover:opacity-100"}),r.jsx("span",{children:e.name})]})}export{p as default};
