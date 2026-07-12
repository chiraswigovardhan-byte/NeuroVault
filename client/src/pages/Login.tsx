import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter your email and password.");
      return;
    }

    // Save login status
    localStorage.setItem("isLoggedIn", "true");

    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl md:grid-cols-2">

        {/* Left */}
        <div className="flex flex-col justify-center bg-slate-900 p-12">
          <div className="text-6xl">🧠</div>

          <h1 className="mt-5 text-5xl font-bold text-cyan-400">
            NeuroVault
          </h1>

          <p className="mt-6 leading-8 text-slate-300">
            Your AI-powered document assistant.
            Upload PDFs, organize your knowledge,
            and chat with your documents instantly.
          </p>

          <div className="mt-10 space-y-3 text-slate-300">
            <p>✅ AI Document Chat</p>
            <p>✅ Secure PDF Upload</p>
            <p>✅ Instant Summaries</p>
            <p>✅ Smart Search</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-center bg-slate-950 p-12">

          <form
            onSubmit={handleLogin}
            className="w-full max-w-md"
          >

            <h2 className="text-4xl font-bold text-white">
              Welcome Back 👋
            </h2>

            <p className="mt-3 mb-10 text-slate-400">
              Sign in to continue.
            </p>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-5 w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-cyan-400"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-8 w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-cyan-400"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-500 py-4 font-bold text-black transition hover:bg-cyan-400"
            >
              Sign In
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Login;