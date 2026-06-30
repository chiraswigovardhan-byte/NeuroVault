function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-slate-800 px-8 py-5">
      <div className="flex items-center gap-2">
        <span className="text-3xl">🧠</span>

        <h1 className="text-2xl font-bold text-cyan-400">
          NeuroVault
        </h1>
      </div>

      <div className="flex gap-8 text-slate-300">
        <a href="#" className="transition hover:text-cyan-400">
          Features
        </a>

        <a href="#" className="transition hover:text-cyan-400">
          About
        </a>

        <a href="#" className="transition hover:text-cyan-400">
          Contact
        </a>
      </div>

      <button className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400">
        Login
      </button>
    </nav>
  );
}

export default Navbar;