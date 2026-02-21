import{r as i,j as e}from"./index-Deroy-Ta.js";import{s as a}from"./Data-CdtQ3-EY.js";import{R as o}from"./Reveal-DNAoDjrH.js";function m(){const[t,n]=i.useState(!1),l=t?a:a.slice(0,24);return e.jsxs("section",{className:"bg-[#F8F8F8] pb-12",children:[e.jsx("h1",{className:"text-4xl font-[400px] tracking-tight text-gray-800 text-center mb-8",children:"My Skill Highlights"}),e.jsx(o,{hiddenClass:"opacity-0 translate-y-12 scale-95",children:e.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-16",children:e.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:l.map(s=>e.jsx(c,{item:s},s.name))})})}),e.jsx("div",{className:"flex items-center justify-center mt-10",children:e.jsx("button",{onClick:()=>n(s=>!s),className:"border border-gray-800 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-black hover:text-white transition cursor-pointer",children:t?"Show Less":"Expand All"})})]})}function c({item:r}){return e.jsxs("div",{className:`\r
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
      `,children:[e.jsx("img",{src:r.icon,alt:r.name,className:"w-4 h-4 object-contain opacity-70 group-hover:opacity-100"}),e.jsx("span",{children:r.name})]})}export{m as default};
