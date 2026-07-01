import { useState } from "react";

function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const menu = [
    "Dashboard",
    "Documents",
    "AI Chat",
    "Favorites",
    "Settings",
  ];

  return (
    <aside className="min-h-screen w-64 border-r border-slate-800 bg-slate-900 p-6">
      <h1 className="mb-10 text-3xl font-bold text-cyan-400">
        🧠 NeuroVault
      </h1>

      <nav className="space-y-2">
        {menu.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`w-full rounded-xl px-4 py-3 text-left transition ${
              active === item
                ? "bg-cyan-500 text-black"
                : "hover:bg-slate-800 hover:text-cyan-400"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;