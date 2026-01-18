type TagPropType =  {
    slotValue: string,
    doTransition?: boolean
}

export const Tag = ({ slotValue, doTransition = false }: TagPropType) => {
  
   return (
    <div>
      <span
        className={
          doTransition
            ? "inline-block px-2 py-1 text-xs rounded bg-gray-50 border border-gray-200 text-gray-700 transform hover:scale-105 transition hover:cursor-pointer"
            : "inline-block px-2 py-1 text-xs rounded bg-gray-50 border border-gray-200 text-gray-700 hover:cursor-pointer"
        }
      >
        {slotValue}
      </span>
    </div>
  );
};

