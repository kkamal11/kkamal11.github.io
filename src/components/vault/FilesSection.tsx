import { useEffect, useState } from "react";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "../../vault/firebase";
import {
  UploadSimple,
  Trash,
  ArrowSquareOut,
  File,
  CircleNotch,
} from "phosphor-react";

type VaultFile = {
  name: string;
  url: string;
  ref: any;
};

function fileExt(name: string) {
  return name.split(".").pop()?.toUpperCase() ?? "FILE";
}

export default function FilesSection() {
  const [files, setFiles]       = useState<VaultFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting]  = useState<string | null>(null);
  const [error, setError]        = useState<string | null>(null);

  const folderRef = ref(storage, "vault-files");

  const fetchFiles = async () => {
    const result   = await listAll(folderRef);
    const fileList = await Promise.all(
      result.items.map(async (item) => ({
        name: item.name,
        url:  await getDownloadURL(item),
        ref:  item,
      }))
    );
    setFiles(fileList);
  };

  useEffect(() => { fetchFiles(); }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const fileRef = ref(storage, `vault-files/${file.name}`);
      await uploadBytes(fileRef, file);
      await fetchFiles();
    } catch (err: any) {
      setError("Upload failed. Please try again.");
    }
    setUploading(false);
    e.target.value = "";
  };

  const handleDelete = async (file: VaultFile) => {
    setDeleting(file.name);
    try {
      await deleteObject(file.ref);
      await fetchFiles();
    } catch (err: any) {
      setError("Delete failed. Please try again.");
    }
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
          <File size={13} className="text-gray-400" />
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] tracking-widest uppercase text-gray-500"
          >
            Vault Files
          </span>
          {files.length > 0 && (
            <span
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[9px] tracking-widest uppercase bg-white border border-[#e8e6df]
                rounded-[2px] px-1.5 py-0.5 text-gray-400"
            >
              {files.length}
            </span>
          )}
        </div>

        {/* Upload button */}
        <label className="cursor-pointer">
          <input type="file" onChange={handleUpload} className="hidden" />
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="flex items-center gap-1.5 text-[9px] tracking-widest uppercase
              border border-gray-900 text-gray-900 px-2.5 py-1.5 rounded-[3px]
              hover:bg-gray-900 hover:text-white transition-colors duration-150"
          >
            {uploading
              ? <CircleNotch size={11} className="animate-spin" />
              : <UploadSimple size={11} />
            }
            {uploading ? "Uploading…" : "Upload"}
          </span>
        </label>
      </div>

      {/* ── Error ── */}
      {error && (
        <div className="px-5 py-2 border-b border-[#e8e6df] bg-red-50">
          <p
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] tracking-wide text-red-500"
          >
            {error}
          </p>
        </div>
      )}

      {/* ── File list ── */}
      {files.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 gap-2">
          <File size={24} className="text-[#e8e6df]" />
          <p
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] tracking-widest uppercase text-gray-400"
          >
            No files uploaded yet
          </p>
        </div>
      ) : (
        <div className="divide-y divide-[#e8e6df] max-h-[320px] overflow-y-auto">
          {files.map((file) => (
            <div
              key={file.name}
              className="group flex items-center justify-between px-5 py-2.5
                hover:bg-[#f5f3ee] transition-colors duration-150"
            >
              {/* Left — ext badge + name */}
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  style={{ fontFamily: "'DM Mono', monospace" }}
                  className="shrink-0 text-[8px] tracking-widest uppercase
                    bg-[#f5f3ee] border border-[#e8e6df] rounded-[2px]
                    px-1.5 py-0.5 text-gray-400"
                >
                  {fileExt(file.name)}
                </span>
                <span className="text-[12px] text-gray-700 truncate">
                  {file.name}
                </span>
              </div>

              {/* Right — open + delete */}
              <div className="flex items-center gap-1 shrink-0 ml-3
                opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <a
                  href={file.url}
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
                  onClick={() => handleDelete(file)}
                  title="Delete"
                  disabled={deleting === file.name}
                  className="flex items-center justify-center w-6 h-6 rounded-[3px]
                    border border-[#e8e6df] text-gray-400
                    hover:border-red-400 hover:text-red-500
                    transition-all duration-150 cursor-pointer disabled:opacity-40"
                >
                  {deleting === file.name
                    ? <CircleNotch size={11} className="animate-spin" />
                    : <Trash size={11} />
                  }
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}