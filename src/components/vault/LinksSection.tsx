import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../vault/firebase";

export default function LinksSection() {
  const [links, setLinks] = useState<any[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "links"), (snapshot) => {
      setLinks(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
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
    await deleteDoc(doc(db, "links", id));
  };

  return (
    <div className="bg-white border rounded-lg p-5 shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Links</h2>

      {/* INPUT */}
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addLink()}
          placeholder="Paste a link..."
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        />

        <button
          onClick={addLink}
          className="px-3 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 text-sm cursor-pointer"
        >
          Add
        </button>
      </div>

      {/* LIST */}
      {links.length === 0 ? (
        <p className="text-sm text-gray-500">No links yet.</p>
      ) : (
        <div className="space-y-2">
          {links.map((l, i) => (
            <div
              key={l.id}
              className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg"
            >
              <a
                href={l.text}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-600 hover:underline truncate"
              >
                {i+1}. {l.text}
              </a>

              <button
                onClick={() => deleteLink(l.id)}
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
