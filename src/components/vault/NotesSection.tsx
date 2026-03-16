import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../vault/firebase";
import { NoteBlank, Trash, Plus } from "phosphor-react";

export default function NotesSection() {
  const [notes, setNotes]     = useState<any[]>([]);
  const [input, setInput]     = useState("");
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "notes"), (snapshot) => {
      const data = snapshot.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .sort((a: any, b: any) => a.createdAt - b.createdAt);
      setNotes(data);
    });
    return () => unsub();
  }, []);

  const addNote = async () => {
    if (!input.trim()) return;
    await addDoc(collection(db, "notes"), {
      text: input.trim(),
      createdAt: Date.now(),
    });
    setInput("");
  };

  const deleteNote = async (id: string) => {
    setDeleting(id);
    await deleteDoc(doc(db, "notes", id));
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
          <NoteBlank size={13} className="text-gray-400" />
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] tracking-widest uppercase text-gray-500"
          >
            Notes
          </span>
          {notes.length > 0 && (
            <span
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[9px] tracking-widest uppercase bg-white border border-[#e8e6df]
                rounded-[2px] px-1.5 py-0.5 text-gray-400"
            >
              {notes.length}
            </span>
          )}
        </div>
      </div>

      {/* ── Input ── */}
      <div className="flex gap-2 px-5 py-3 border-b border-[#e8e6df]">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addNote()}
          placeholder="Write a note…"
          className="flex-1 border border-[#e8e6df] rounded-[3px] px-3 py-2
            text-[12px] text-gray-700 bg-[#fafaf8]
            placeholder:text-gray-400
            focus:outline-none focus:border-gray-900
            transition-colors duration-150"
        />
        <button
          onClick={addNote}
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

      {/* ── Notes list ── */}
      {notes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 gap-2">
          <NoteBlank size={24} className="text-[#e8e6df]" />
          <p
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] tracking-widest uppercase text-gray-400"
          >
            No notes yet
          </p>
        </div>
      ) : (
        <div className="divide-y divide-[#e8e6df] max-h-[320px] overflow-y-auto">
          {notes.map((n, i) => (
            <div
              key={n.id}
              className="group flex items-start justify-between px-5 py-3
                hover:bg-[#f5f3ee] transition-colors duration-150"
            >
              {/* Index + text */}
              <div className="flex items-start gap-2.5 min-w-0 flex-1">
                <span
                  style={{ fontFamily: "'DM Mono', monospace" }}
                  className="shrink-0 text-[9px] text-gray-400 mt-0.5 w-4 text-right"
                >
                  {i + 1}
                </span>
                <span className="text-[12px] text-gray-700 leading-relaxed break-words">
                  {n.text}
                </span>
              </div>

              {/* Delete */}
              <button
                onClick={() => deleteNote(n.id)}
                title="Delete"
                disabled={deleting === n.id}
                className="shrink-0 ml-3 mt-0.5 flex items-center justify-center w-6 h-6 rounded-[3px]
                  border border-[#e8e6df] text-gray-400
                  opacity-0 group-hover:opacity-100
                  hover:border-red-400 hover:text-red-500
                  transition-all duration-150 cursor-pointer disabled:opacity-40"
              >
                <Trash size={11} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}