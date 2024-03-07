export default function Tag({ text }: { text: string }) {
  return (
    <span className="absolute left-1 top-1 inline-block rounded bg-secondary p-1 text-xs">
      {text}
    </span>
  );
}
