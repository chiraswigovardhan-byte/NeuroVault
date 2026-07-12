type Props = {
  file: string;
  active: boolean;
};

function DocumentCard({ file, active }: Props) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-4 transition hover:border-indigo-500 hover:bg-slate-900">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20">
          📄
        </div>

        <span className="max-w-[150px] truncate text-slate-200">
          {file.replace(/^\d+-/, "")}
        </span>

      </div>

      {active && (
        <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
          Active
        </span>
      )}

    </div>
  );
}

export default DocumentCard;