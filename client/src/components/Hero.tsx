function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative z-10 max-w-5xl text-center">

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
          🚀 AI Powered Knowledge Management
        </span>

        <h1 className="mt-8 text-7xl font-extrabold leading-tight">
          Build Your{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
            Second Brain
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
          NeuroVault helps you organize documents, chat with PDFs,
          remember everything, and retrieve knowledge instantly using AI.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <button className="rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400">
            Get Started
          </button>

          <button className="rounded-xl border border-slate-700 px-7 py-4 transition hover:border-cyan-400">
            Watch Demo
          </button>
        </div>

      </div>

    </section>
  );
}

export default Hero;