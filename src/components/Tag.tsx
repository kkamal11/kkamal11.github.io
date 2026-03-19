type TagPropType = {
  slotValue: string;
  doTransition?: boolean;
};

export const Tag = ({ slotValue, doTransition = false }: TagPropType) => {
  return (
    <span
      className={`
        inline-flex items-center flex-shrink-0
        px-2 py-1 rounded-[2px]
        text-[8px] tracking-widest uppercase
        bg-white border border-[#e8e6df] text-gray-500
        ${doTransition
          ? "cursor-pointer transition-all duration-150 hover:bg-[#1a1916] hover:border-[#1a1916] hover:text-white"
          : ""
        }
      `}
    >
      {slotValue}
    </span>
  );
};