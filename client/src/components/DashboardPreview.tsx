function DashboardPreview() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl">

        <div className="mb-6 flex items-center justify-between border-b border-slate-700 pb-4">
          <h2 className="text-2xl font-bold">
            Dashboard Preview
          </h2>

          <button className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-black">
            + Upload PDF
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-slate-800 p-5">
            <h3 className="mb-4 text-xl font-semibold">📂 Documents</h3>

            <ul className="space-y-3 text-slate-300">
              <li>AI Notes.pdf</li>
              <li>Machine Learning.pdf</li>
              <li>Operating Systems.pdf</li>
              <li>Resume.pdf</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-800 p-5 md:col-span-2">
            <h3 className="mb-4 text-xl font-semibold">🤖 AI Chat</h3>

            <div className="rounded-xl bg-slate-950 p-4 text-slate-300">
              <p className="mb-3">
                <strong>You:</strong> Summarize Chapter 3
              </p>

              <p className="text-cyan-300">
                AI: Chapter 3 explains neural networks, activation
                functions, and backpropagation...
              </p>
            </div>

            <div className="mt-5 flex gap-3">
              <input
                placeholder="Ask anything..."
                className="flex-1 rounded-xl bg-slate-950 p-3 outline-none"
              />

              <button className="rounded-xl bg-cyan-500 px-6 font-semibold text-black">
                Send
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;