import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../vault/firebase";
import { Link, ArrowSquareOut, Trash, Plus } from "phosphor-react";

export default function LinksSection() {
  const [links, setLinks]   = useState<any[]>([]);
  const [input, setInput]   = useState("");
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "links"), (snapshot) => {
      const data = snapshot.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .sort((a: any, b: any) => a.createdAt - b.createdAt);
      setLinks(data);
    });
    return () => unsub();
  }, []);

  const addLink = async () => {
    if (!input.trim()) return;
    await addDoc(collection(db, "links"), {
      text: input.trim(),
      createdAt: Date.now(),
    });
    setInput("");
  };

  const deleteLink = async (id: string) => {
    setDeleting(id);
    await deleteDoc(doc(db, "links", id));
    setDeleting(null);
  };


  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="bg-white border border-[#e8e6df] rounded-md overflow-hidden"
    >
      {/* ── Header ── */}
      <div className="flex items-center justify-between px-5 py-3 bg-[#f5f3ee] border-b border-[#e8e6df]">
        <div className="flex items-center gap-2">
          <Link size={13} className="text-gray-400" />
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] tracking-widest uppercase text-gray-500"
          >
            Links
          </span>
          {links.length > 0 && (
            <span
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[9px] tracking-widest uppercase bg-white border border-[#e8e6df]
                rounded-[2px] px-1.5 py-0.5 text-gray-400"
            >
              {links.length}
            </span>
          )}
        </div>
      </div>

      {/* ── Input ── */}
      <div className="flex gap-2 px-5 py-3 border-b border-[#e8e6df]">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addLink()}
          placeholder="Paste a link…"
          className="flex-1 border border-[#e8e6df] rounded-[3px] px-3 py-2
            text-[12px] text-gray-700 bg-[#fafaf8]
            placeholder:text-gray-400
            focus:outline-none focus:border-gray-900
            transition-colors duration-150"
        />
        <button
          onClick={addLink}
          style={{ fontFamily: "'DM Mono', monospace" }}
          className="flex items-center gap-1.5 text-[9px] tracking-widest uppercase
            border border-gray-900 text-gray-900 px-3 py-2 rounded-[3px]
            hover:bg-gray-900 hover:text-white
            transition-colors duration-150 cursor-pointer"
        >
          <Plus size={11} />
          Add
        </button>
      </div>

      {/* ── List ── */}
      {links.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 gap-2">
          <Link size={24} className="text-[#e8e6df]" />
          <p
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] tracking-widest uppercase text-gray-400"
          >
            No links yet
          </p>
        </div>
      ) : (
        <div className="divide-y divide-[#e8e6df] max-h-[320px] overflow-y-auto">
          {links.map((l, i) => (
            <div
              key={l.id}
              className="group flex items-center justify-between px-5 py-2.5
                hover:bg-[#f5f3ee] transition-colors duration-150"
            >
              {/* Index + URL */}
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  style={{ fontFamily: "'DM Mono', monospace" }}
                  className="shrink-0 text-[9px] text-gray-400 w-4 text-right"
                >
                  {i + 1}
                </span>
                <span className="text-[12px] text-gray-600 truncate">
                  {l.text}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 shrink-0 ml-3
                opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <a
                  href={l.text}
                  target="_blank"
                  rel="noreferrer"
                  title="Open"
                  className="flex items-center justify-center w-6 h-6 rounded-[3px]
                    border border-[#e8e6df] text-gray-400
                    hover:border-gray-900 hover:text-gray-900
                    transition-all duration-150"
                >
                  <ArrowSquareOut size={11} />
                </a>
                <button
                  onClick={() => deleteLink(l.id)}
                  title="Delete"
                  disabled={deleting === l.id}
                  className="flex items-center justify-center w-6 h-6 rounded-[3px]
                    border border-[#e8e6df] text-gray-400
                    hover:border-red-400 hover:text-red-500
                    transition-all duration-150 cursor-pointer disabled:opacity-40"
                >
                  <Trash size={11} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}