export default function ComponentLoader({text = "Loading..."}) {
  return (
    <div className="w-full flex items-center justify-center py-10">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-800 rounded-full animate-spin" />
        <p className="text-[10px] tracking-widest text-gray-500 uppercase">
          {text}
        </p>
      </div>
    </div>
  );
}
