export default function SwapArrow({ from, to }: { from: number; to: number }) {
  const left = Math.min(from, to);
  const right = Math.max(from, to);
  const center = (from + to) / 2;
  const distance = right - left;

  return (
    <div
      className="absolute bottom-[-32px]"
      style={{
        left: `${center * 2.5}rem`,
        transform: 'translateX(-50%)',
        width: `${distance * 2.5}rem`,
        height: '24px',
      }}
    >
      <svg
        width="100%"
        height="24"
        viewBox="0 0 100 24"
        className="text-blue-600"
      >
        <path
          d="M 0 12 Q 50 -12 100 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="10"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
