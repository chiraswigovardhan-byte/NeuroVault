type StatCardProps = {
  title: string;
  value: string;
  icon: string;
};

function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:scale-105 hover:border-cyan-500">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-3xl">{icon}</span>
      </div>

      <p className="mt-6 text-3xl font-bold">{value}</p>
    </div>
  );
}

export default StatCard;