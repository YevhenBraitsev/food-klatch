export default function GridItems({ children }: { children: React.ReactNode }) {
  return (
    <ul className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">{children}</ul>
  );
}
