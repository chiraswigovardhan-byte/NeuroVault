import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Top Navigation */}
        <Topbar />

        {/* Statistics Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <StatCard
            title="Documents"
            value="0"
            icon="📄"
          />

          <StatCard
            title="AI Chats"
            value="0"
            icon="🤖"
          />

          <StatCard
            title="Favorites"
            value="0"
            icon="⭐"
          />
        </div>

        {/* Recent Documents */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">
            📂 Recent Documents
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              No documents uploaded yet.
            </p>

            <button className="mt-5 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400">
              Upload Your First Document
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;