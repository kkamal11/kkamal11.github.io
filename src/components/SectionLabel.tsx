
export default function SectionLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-500">{icon}</span>
      <span
        style={{ fontFamily: "'DM Mono', monospace" }}
        className="text-[11px] tracking-widest uppercase text-gray-500"
      >
        {label}
      </span>
      <div className="flex-1 h-px bg-[#e8e6df]" />
    </div>
  );
}
