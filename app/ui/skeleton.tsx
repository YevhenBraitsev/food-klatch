const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function ProductSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-block p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-block" />
        <div className="ml-2 h-6 w-16 rounded-md bg-block text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-block px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-block" />
      </div>
    </div>
  );
}
