export default function GridItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-md bg-block p-5 bg-blend-darken shadow-md shadow-block">
      {children}
    </li>
  );
}
