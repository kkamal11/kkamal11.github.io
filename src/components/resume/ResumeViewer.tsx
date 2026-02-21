export default function ResumeViewer() {
  return (
    <div className="w-full h-screen bg-[#f4f4f4] p-4">
      <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden h-full">

        <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">
            Kamal's Resume Viewer
          </h2>

          <a
            href="/resume.pdf"
            download
            className="text-sm px-3 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"
          >
            Download
          </a>
        </div>

        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full h-[calc(100%-56px)]"
        />
      </div>
    </div>
  );
}
