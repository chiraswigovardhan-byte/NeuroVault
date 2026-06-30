function Features() {
  const features = [
    {
      icon: "📂",
      title: "Smart Vault",
      description: "Store and organize all your documents in one secure place."
    },
    {
      icon: "🤖",
      title: "AI Chat",
      description: "Ask questions about your uploaded documents instantly."
    },
    {
      icon: "🔍",
      title: "Semantic Search",
      description: "Find information using natural language instead of filenames."
    }
  ];

  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 md:grid-cols-3">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-cyan-500"
        >
          <div className="mb-4 text-5xl">{feature.icon}</div>

          <h3 className="mb-3 text-2xl font-bold">
            {feature.title}
          </h3>

          <p className="text-slate-400">
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Features;