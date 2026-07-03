import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Documents() {
  const [files, setFiles] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedFiles = localStorage.getItem("documents");

    if (savedFiles) {
      setFiles(JSON.parse(savedFiles));
    }
  }, []);

  const handleUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) return;

    const uploaded = Array.from(event.target.files).map(
      (file) => file.name
    );

    const updatedFiles = [...files, ...uploaded];

    setFiles(updatedFiles);

    localStorage.setItem(
      "documents",
      JSON.stringify(updatedFiles)
    );
  };

  const deleteFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);

    setFiles(updatedFiles);

    localStorage.setItem(
      "documents",
      JSON.stringify(updatedFiles)
    );
  };

  const filteredFiles = files.filter((file) =>
    file.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-10">
        <Topbar />

        <div className="mt-10">
          <h1 className="text-4xl font-bold">
            📄 Documents
          </h1>

          <p className="mt-2 text-slate-400">
            Manage all your uploaded PDFs in one place.
          </p>
        </div>

        {/* Upload Area */}
        <label className="mt-8 flex h-56 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-cyan-500 bg-slate-900 transition hover:bg-slate-800">
          <div className="text-6xl">📄</div>

          <h2 className="mt-4 text-2xl font-bold">
            Drag & Drop PDFs
          </h2>

          <p className="mt-2 text-slate-400">
            or click here to browse
          </p>

          <input
            type="file"
            accept=".pdf"
            multiple
            className="hidden"
            onChange={handleUpload}
          />
        </label>

        {/* Stats */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="text-lg font-semibold">
              Total Documents
            </h3>

            <p className="mt-2 text-4xl font-bold text-cyan-400">
              {files.length}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="text-lg font-semibold">
              PDF Files
            </h3>

            <p className="mt-2 text-4xl font-bold text-cyan-400">
              {files.length}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="text-lg font-semibold">
              Storage
            </h3>

            <p className="mt-2 text-4xl font-bold text-cyan-400">
              Local
            </p>
          </div>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search documents..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-8 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-cyan-500"
        />

        {/* Documents */}
        <div className="mt-8 space-y-4">
          {filteredFiles.length === 0 ? (
            <p className="text-slate-400">
              No matching documents found.
            </p>
          ) : (
            filteredFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl bg-slate-900 p-5"
              >
                <span>📄 {file}</span>

                <button
                  onClick={() => deleteFile(index)}
                  className="rounded-lg bg-red-500 px-4 py-2 transition hover:bg-red-600"
                >
                  🗑 Delete
                </button>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Documents;