function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">
      <h1 className="mb-8 text-2xl font-bold text-cyan-400">
        🧠 NeuroVault
      </h1>

      <nav className="space-y-3">
        <button className="block w-full rounded-lg px-4 py-3 text-left hover:bg-slate-800">
          📊 Dashboard
        </button>

        <button className="block w-full rounded-lg px-4 py-3 text-left hover:bg-slate-800">
          📄 Documents
        </button>

        <button className="block w-full rounded-lg px-4 py-3 text-left hover:bg-slate-800">
          🤖 AI Chat
        </button>

        <button className="block w-full rounded-lg px-4 py-3 text-left hover:bg-slate-800">
          ⚙️ Settings
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;