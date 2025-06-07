import Bar from './Bar';
import Pointer from './Pointer';
import SwapArrow from './SwapArrow';

type Highlight = { index: number; color: string; label?: string };
type PointerType = { index: number; type: string; label?: string };
type Swap = [number, number];

export type AlgoStep = {
  array: number[];
  highlights?: Highlight[];
  pointers?: PointerType[];
  swaps?: Swap[];
  explanation: string;
};

export default function ArrayVisualizer({ step }: { step: AlgoStep }) {
  return (
    <div className="relative flex flex-col items-center mt-16 gap-4 h-72">
      {/* Pointers container */}
      <div className="flex justify-center gap-1">
        {step.pointers?.map((p, i) => (
          <Pointer key={i} index={p.index} type={p.type} label={p.label} />
        ))}
      </div>

      {/* Swap arrows container */}
      <div className="flex justify-center gap-1">
        {step.swaps?.map(([from, to], i) => (
          <SwapArrow key={i} from={from} to={to} />
        ))}
      </div>

      {/* Bars container */}
      <div className="flex items-end justify-center gap-1 w-full">
        {step.array.map((value, index) => (
          <Bar
            key={index}
            index={index}
            value={value}
            label={undefined}
            highlightColor={undefined}
          />
        ))}
      </div>
    </div>
  );
}
// This component visualizes an algorithm step with bars, pointers, and swap arrows.
