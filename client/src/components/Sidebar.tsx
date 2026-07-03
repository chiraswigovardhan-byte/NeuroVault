import { NavLink } from "react-router-dom";

function Sidebar() {
  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
    { name: "Documents", path: "/documents", icon: "📄" },
    { name: "AI Chat", path: "/chat", icon: "🤖" },
    { name: "Favorites", path: "/favorites", icon: "⭐" },
    { name: "Settings", path: "/settings", icon: "⚙️" },
  ];

  return (
    <aside className="min-h-screen w-64 border-r border-slate-800 bg-slate-900 p-6">
      <h1 className="mb-10 text-3xl font-bold text-cyan-400">
        🧠 NeuroVault
      </h1>

      <nav className="space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block w-full rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-cyan-500 text-black"
                  : "hover:bg-slate-800 hover:text-cyan-400"
              }`
            }
          >
            {item.icon} {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;