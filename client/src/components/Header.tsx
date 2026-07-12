function Header() {
  return (
    <div className="mb-8 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 p-8">

      <div className="flex items-center gap-5">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500 shadow-lg shadow-indigo-500/20">
          <span className="text-3xl">🧠</span>
        </div>

        <div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-100">
            NeuroVault Workspace
          </h1>

          <p className="mt-2 text-slate-400">
            Upload PDFs, ask intelligent questions, summarize documents,
            and explore insights with AI.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Header;