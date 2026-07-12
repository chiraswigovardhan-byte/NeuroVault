import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";

function Dashboard() {
  const navigate = useNavigate();

  const [documents, setDocuments] = useState<string[]>([]);
  const [chatCount] = useState(0);

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/upload/files"
      );

      setDocuments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      <Sidebar />

      <main className="flex-1 overflow-y-auto">

        <Topbar />

        <div className="px-10 pb-10">

          {/* Welcome Banner */}
          <section className="mt-8 overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-slate-900 p-8">

            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                  Welcome Back
                </p>

                <h1 className="mt-3 text-4xl font-extrabold">
                  Your AI Knowledge Hub
                </h1>

                <p className="mt-4 max-w-2xl text-slate-400">
                  Upload documents, organize your knowledge and chat with AI to discover insights instantly.
                </p>

              </div>

              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-8 py-6 text-center">

                <p className="text-sm text-slate-400">
                  Workspace
                </p>

                <h2 className="mt-2 text-3xl font-bold text-cyan-400">
                  NeuroVault
                </h2>

              </div>

            </div>

          </section>

          {/* Statistics */}

          <section className="mt-10 grid gap-6 md:grid-cols-3">

            <StatCard
              title="Documents"
              value={documents.length.toString()}
              icon="📄"
            />

            <StatCard
              title="AI Chats"
              value={chatCount.toString()}
              icon="🤖"
            />

            <StatCard
              title="Favorites"
              value="0"
              icon="⭐"
            />

          </section>

          {/* Quick Actions */}

          <section className="mt-10 grid gap-6 lg:grid-cols-3">

            <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6 transition hover:border-cyan-400">

              <div className="text-4xl">
                📂
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Upload Documents
              </h3>

              <p className="mt-3 text-slate-400">
                Upload PDFs and make them available for AI analysis.
              </p>

              <button
                onClick={() => navigate("/documents")}
                className="mt-6 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
              >
                Upload PDF
              </button>

            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6 transition hover:border-cyan-400">

              <div className="text-4xl">
                🤖
              </div>

              <h3 className="mt-4 text-xl font-bold">
                AI Assistant
              </h3>

              <p className="mt-3 text-slate-400">
                Ask questions about your uploaded documents and get instant answers.
              </p>

              <button
                onClick={() => navigate("/chat")}
                className="mt-6 rounded-xl bg-slate-800 px-5 py-3 transition hover:bg-slate-700"
              >
                Open Chat
              </button>

            </div>
                        <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6 transition hover:border-cyan-400">

              <div className="text-4xl">
                📈
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Workspace Status
              </h3>

              <div className="mt-5 space-y-4">

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Documents
                  </span>

                  <span>{documents.length}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    AI Chats
                  </span>

                  <span>{chatCount}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Status
                  </span>

                  <span className="text-emerald-400">
                    ● Ready
                  </span>
                </div>

              </div>

            </div>

          </section>

          {/* Recent Documents */}

          <section className="mt-12">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-bold">
                📂 Recent Documents
              </h2>

              <button
                onClick={() => navigate("/documents")}
                className="rounded-xl border border-slate-700 px-4 py-2 text-sm transition hover:border-cyan-400"
              >
                View All
              </button>

            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-8">

              {documents.length === 0 ? (

                <div className="flex flex-col items-center justify-center py-16 text-center">

                  <div className="text-7xl">
                    📄
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    No Documents Yet
                  </h3>

                  <p className="mt-3 max-w-md text-slate-400">
                    Start building your personal knowledge base by uploading your first PDF.
                  </p>

                  <button
                    onClick={() => navigate("/documents")}
                    className="mt-8 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-cyan-400"
                  >
                    Upload Your First Document
                  </button>

                </div>

              ) : (

                <div className="space-y-4">

                  {documents.slice().reverse().map((doc, index) => (

                    <div
                      key={index}
                      className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-800 p-5"
                    >

                      <div>

                        <h3 className="font-semibold text-white">
                          📄 {doc.replace(/^\d+-/, "")}
                        </h3>

                        <p className="mt-1 text-sm text-slate-400">
                          Uploaded PDF
                        </p>

                      </div>

                      <button
                        onClick={() => navigate("/chat")}
                        className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black hover:bg-cyan-400"
                      >
                        Chat
                      </button>

                    </div>

                  ))}

                </div>

              )}

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;