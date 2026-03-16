interface HighlightedTextProps {
  text: string;
  query?: string;
}

export function HighlightedText({ text, query }: HighlightedTextProps) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        if (part.toLowerCase() === query.toLowerCase()) {
          return (
            <mark key={index} className="bg-yellow-300 text-black font-semibold">
              {part}
            </mark>
          );
        }
        return part;
      })}
    </>
  );
}
