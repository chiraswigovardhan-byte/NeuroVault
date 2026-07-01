function Topbar() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">Welcome back 👋</h1>
        <p className="mt-2 text-slate-400">
          Your AI Second Brain is ready.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="🔍 Search documents..."
          className="rounded-xl bg-slate-900 px-4 py-3 outline-none border border-slate-800 focus:border-cyan-500"
        />

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
          C
        </div>
      </div>
    </header>
  );
}

export default Topbar;