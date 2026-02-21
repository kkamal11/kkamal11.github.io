import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../vault/firebase";

export default function NotesSection() {
  const [notes, setNotes] = useState<any[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "notes"), (snapshot) => {
      setNotes(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
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
    await deleteDoc(doc(db, "notes", id));
  };

  return (
    <div className="bg-white border rounded-lg p-5 shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Notes</h2>

      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addNote()}
          placeholder="Write a note..."
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        />

        <button
          onClick={addNote}
          className="px-3 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 text-sm cursor-pointer"
        >
          Add
        </button>
      </div>

      {notes.length === 0 ? (
        <p className="text-sm text-gray-500">No notes yet.</p>
      ) : (
        <div className="space-y-2">
          {notes.map((n,i) => (
            <div
              key={n.id}
              className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg"
            >
              <span className="text-sm text-gray-700">{i+1}. {n.text}</span>

              <button
                onClick={() => deleteNote(n.id)}
                className="text-red-500 text-xs font-medium px-1 py-0.5 rounded border border-red-500 hover:cursor-pointer"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
