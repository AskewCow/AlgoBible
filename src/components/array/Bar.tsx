export default function Bar({
  value,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  index,
  highlightColor,
  label,
}: {
  value: number;
  index: number;
  highlightColor?: string;
  label?: string;
}) {
  return (
    <div className="relative w-8 text-center">
      <div
        className={`bg-blue-500 transition-all duration-300 ease-in-out ${highlightColor ?? ''}`}
        style={{ height: `${value * 0.3}px` }}
      />
      {label && (
        <div className="absolute bottom-full text-xs text-gray-700">
          {label}
        </div>
      )}
      <div className="mt-1 text-xs text-gray-600">{value}</div>
    </div>
  );
}
