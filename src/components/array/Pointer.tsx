export default function Pointer({
  index,
  type,
}: {
  index: number;
  type: string;
}) {
  const colorMap: Record<string, string> = {
    i: 'bg-green-500',
    j: 'bg-blue-500',
    pivot: 'bg-orange-500',
  };

  return (
    <div
      className={`absolute bottom-full mb-2 w-3 h-3 rounded-full ${colorMap[type] || 'bg-gray-500'}`}
      style={{
        left: `${index * 2.5}rem`,
        transform: 'translateX(-50%)',
      }}
    />
  );
}
// This component renders a pointer at a specific index with a color based on its type.
