import { useEffect, useState } from "react";
import axios from "axios";

function DashboardPreview() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<string[]>([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch uploaded files
  const fetchFiles = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/upload/files"
      );
      setFiles(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  // Upload PDF
  const uploadFile = async () => {
    if (!selectedFile) {
      alert("Please select a PDF first!");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", selectedFile);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(res.data.message);
      fetchFiles();
      setSelectedFile(null);
    } catch (err) {
      console.error(err);
      setMessage("Upload Failed!");
    }
  };

  // Ask AI
  const askAI = async () => {
  if (!question.trim()) {
    alert("Please enter a question!");
    return;
  }

  setLoading(true);

  try {
    const res = await axios.post(
      "http://localhost:5000/api/chat",
      {
        question,
      }
    );

    setAnswer(res.data.answer);
    setQuestion("");
  } catch (err) {
    console.error(err);
    setAnswer("Unable to get AI response.");
  } finally {
    setLoading(false);
  }
};

  const latestFiles = files.slice(-3).reverse();

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black px-8 py-10 text-white">
  <div className="mx-auto max-w-7xl rounded-[32px] border border-slate-700/50 bg-slate-900/60 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl">

    {/* Header */}
    <div className="mb-10 flex items-center justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          NeuroVault
        </p>

        <h1 className="mt-2 text-4xl font-extrabold">
          AI Document Workspace
        </h1>

        <p className="mt-3 max-w-2xl text-slate-400">
          Upload your PDFs, organize your knowledge, and ask AI anything
          about your documents.
        </p>
      </div>

      <div className="hidden rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-4 lg:block">
        <p className="text-sm text-slate-400">
          AI Status
        </p>

        <h2 className="mt-1 text-xl font-bold text-emerald-400">
          ● Ready
        </h2>
      </div>
    </div>

    {/* Stats */}
    <div className="mb-8 grid gap-5 md:grid-cols-3">

      <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
        <p className="text-slate-400">
          Total PDFs
        </p>

        <h2 className="mt-3 text-4xl font-bold text-cyan-400">
          {files.length}
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
        <p className="text-slate-400">
          Active Document
        </p>

        <h2 className="mt-3 truncate text-lg font-semibold">
          {latestFiles[0]
            ? latestFiles[0].replace(/^\d+-/, "")
            : "No document"}
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
        <p className="text-slate-400">
          AI Responses
        </p>

        <h2 className="mt-3 text-4xl font-bold text-purple-400">
          {answer ? "1" : "0"}
        </h2>
      </div>

    </div>

    {/* Main Grid */}
    <div className="grid gap-8 lg:grid-cols-12">

      {/* Upload Panel */}
      <div className="lg:col-span-4 rounded-3xl border border-slate-700 bg-slate-800/60 p-6 backdrop-blur-lg">

        <h3 className="mb-6 text-2xl font-bold">
          📂 Documents
        </h3>

        <div className="rounded-2xl border-2 border-dashed border-cyan-500/40 bg-slate-900/60 p-8 text-center transition hover:border-cyan-400">

          <div className="text-5xl">
            📄
          </div>

          <p className="mt-4 font-semibold">
            Upload PDF
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Select a PDF to make it available for AI chat.
          </p>

          <input
            type="file"
            accept=".pdf"
            onChange={(e) => {
              if (e.target.files) {
                setSelectedFile(e.target.files[0]);
              }
            }}
            className="mt-6 w-full rounded-lg"
          />

          <button
            onClick={uploadFile}
            className="mt-5 w-full rounded-xl bg-cyan-500 py-3 font-bold text-black transition hover:scale-105 hover:bg-cyan-400"
          >
            Upload PDF
          </button>

        </div>

        {message && (
          <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-green-400">
            {message}
          </div>
        )}

        <h3 className="mt-8 mb-4 text-lg font-semibold">
          Recent Documents
        </h3>

        <div className="space-y-3">
          {latestFiles.length === 0 ? (
            <div className="rounded-xl bg-slate-900 p-4 text-slate-500">
              No PDFs uploaded yet.
            </div>
          ) : (
            latestFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl bg-slate-900 p-4"
              >
                <span className="truncate">
                  📄 {file.replace(/^\d+-/, "")}
                </span>

                {index === 0 && (
                  <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold">
                    Active
                  </span>
                )}
              </div>
            ))
          )}
        </div>

      </div>
            {/* AI Chat Panel */}
      <div className="lg:col-span-8 rounded-3xl border border-slate-700 bg-slate-800/60 p-6 backdrop-blur-lg">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              🤖 AI Assistant
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Ask questions about your uploaded documents.
            </p>
          </div>

          <div className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            NeuroVault AI
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex h-[550px] flex-col rounded-2xl bg-slate-950 p-6">

          <div className="flex-1 overflow-y-auto">

            {answer ? (
              <div className="space-y-4">

                <div className="flex justify-end">
                  <div className="max-w-[75%] rounded-2xl rounded-br-md bg-cyan-500 px-5 py-3 text-black shadow-lg">
                    {question}
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-slate-800 px-5 py-4 text-slate-200 shadow-lg">
                    <p className="mb-2 text-sm font-semibold text-cyan-400">
                      NeuroVault AI
                    </p>

                    <p className="whitespace-pre-wrap leading-7">
                      {answer}
                    </p>
                  </div>
                </div>

              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-center">

                <div className="mb-6 text-7xl">
                  🧠
                </div>

                <h3 className="text-2xl font-bold">
                  Ready to help
                </h3>

                <p className="mt-3 max-w-md text-slate-500">
                  Upload a PDF and ask anything like:
                </p>

                <div className="mt-6 space-y-2 text-slate-400">
                  <p>• Summarize this document</p>
                  <p>• Explain Chapter 2</p>
                  <p>• What are the key points?</p>
                  <p>• Generate notes</p>
                </div>

              </div>
            )}

          </div>

          {/* Input */}
          <div className="mt-6 flex gap-4 border-t border-slate-800 pt-5">

            <input
  value={question}
  onChange={(e) => setQuestion(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      askAI();
    }
  }}
  placeholder="Ask anything about your document..."
  className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none transition focus:border-cyan-400"
/>

            <button
  onClick={askAI}
  disabled={loading}
  className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
>
  {loading ? "⏳ Thinking..." : "🚀 Ask AI"}
</button>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
  );
}

export default DashboardPreview;