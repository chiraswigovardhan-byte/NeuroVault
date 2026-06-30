import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold">
          Welcome back 👋
        </h1>

        <p className="mt-3 text-slate-400">
          Upload documents, chat with AI, and organize your knowledge.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">📄 Documents</h2>
            <p className="mt-2 text-slate-400">0 uploaded</p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">🤖 AI Chats</h2>
            <p className="mt-2 text-slate-400">No conversations yet</p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">⭐ Favorites</h2>
            <p className="mt-2 text-slate-400">Nothing saved</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;