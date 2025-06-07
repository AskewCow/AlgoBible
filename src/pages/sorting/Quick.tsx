import { useEffect, useState } from 'react';
import ArrayVisualizer, { AlgoStep } from '@/components/array/ArrayVisualizer';
import { getQuickSortSteps } from '@/visualizers/sorting/QuickSortVisualizer';
import { Button } from '@/components/ui/button';

export default function QuickSortPage() {
  const [steps, setSteps] = useState<AlgoStep[]>([]);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const data = [452, 714, 232, 899, 535, 681, 268];
    const s = getQuickSortSteps(data);
    setSteps(s);
  }, []);

  const nextStep = () => {
    if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1);
  };

  const prevStep = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">QuickSort Visualization</h1>
      {steps.length > 0 && (
        <>
          <ArrayVisualizer step={steps[stepIndex]} />
          <div className="mt-10 flex justify-center">
            <p className="text-center text-sm font-sans max-w-2xl p-3 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
              <span className="font-semibold text-blue-700">
                Step {stepIndex + 1}/{steps.length}:
              </span>{' '}
              <span
                className="text-gray-800"
                dangerouslySetInnerHTML={{
                  __html: steps[stepIndex].explanation,
                }}
              />
            </p>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            <Button onClick={prevStep} disabled={stepIndex === 0}>
              ← Prev
            </Button>
            <Button
              onClick={nextStep}
              disabled={stepIndex === steps.length - 1}
            >
              Next →
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
