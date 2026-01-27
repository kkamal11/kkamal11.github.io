export default function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#f7f7f5] z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-gray-300 border-t-gray-800 rounded-full animate-spin" />
        <p className="text-xs tracking-widest text-gray-500 uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}
