import { useEffect, useState } from "react";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "../../vault/firebase";

type VaultFile = {
  name: string;
  url: string;
  ref: any;
};

export default function FilesSection() {
  const [files, setFiles] = useState<VaultFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const folderRef = ref(storage, "vault-files");

  const fetchFiles = async () => {
    const result = await listAll(folderRef);

    const fileList = await Promise.all(
      result.items.map(async (item) => ({
        name: item.name,
        url: await getDownloadURL(item),
        ref: item,
      }))
    );

    setFiles(fileList);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const fileRef = ref(storage, `vault-files/${file.name}`);
      await uploadBytes(fileRef, file);
      await fetchFiles();
    } catch (err) {
      console.error("Upload failed:", err);
    }

    setUploading(false);
  };

  const handleDelete = async (fileRef: any) => {
    try {
      await deleteObject(fileRef);
      fetchFiles();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="bg-white border border rounded-lg p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        Files
      </h2>

      <label className="inline-block mb-4">
        <input
          type="file"
          onChange={handleUpload}
          className="hidden"
        />

        <span className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm cursor-pointer hover:bg-gray-700 transition">
          {uploading ? "Uploading..." : "Upload File"}
        </span>
      </label>

      {files.length === 0 ? (
        <p className="text-sm text-gray-500">
          No files uploaded yet.
        </p>
      ) : (
        <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1">
          {files.map((file) => (
            <div
              key={file.name}
              className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg"
            >
              <a
                href={file.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-600 hover:underline truncate"
              >
                {file.name}
              </a>

              <button
                onClick={() => handleDelete(file.ref)}
                className="text-xs text-red-500 hover:text-red-700 ml-3"
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
