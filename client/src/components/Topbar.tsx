import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 px-10 py-6 backdrop-blur-xl">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Dashboard
          </p>

          <h1 className="mt-2 text-4xl font-extrabold text-white">
            Welcome back 👋
          </h1>

          <p className="mt-2 text-slate-400">
            Your AI Second Brain is ready to help you today.
          </p>

        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-4">

          {/* Search */}
          <div className="relative">

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search documents..."
              className="w-72 rounded-2xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-white outline-none transition focus:border-cyan-400"
            />

          </div>

          {/* Notification */}
          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 transition hover:border-cyan-400 hover:bg-slate-800">
            🔔
          </button>

          {/* AI Status */}
          <div className="hidden rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 lg:block">

            <p className="text-xs text-slate-400">
              AI Status
            </p>

            <p className="font-semibold text-emerald-400">
              ● Online
            </p>

          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-2">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              C
            </div>

            <div className="hidden lg:block">

              <h3 className="font-semibold">
                Chiraswi
              </h3>

              <p className="text-xs text-slate-400">
                Computer Science
              </p>

            </div>

          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </div>

    </header>
  );
}

export default Topbar;