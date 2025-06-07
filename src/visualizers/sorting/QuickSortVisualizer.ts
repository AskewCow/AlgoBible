import { AlgoStep } from '../../components/array/ArrayVisualizer';

export function getQuickSortSteps(arr: number[]): AlgoStep[] {
  const steps: AlgoStep[] = [];

  function swap(a: number[], i: number, j: number) {
    [a[i], a[j]] = [a[j], a[i]];
  }

  function partition(a: number[], low: number, high: number) {
    const pivot = a[high];
    let i = low;

    for (let j = low; j < high; j++) {
      steps.push({
        array: [...a],
        pointers: [
          { index: i, type: 'i', label: 'Left' },
          { index: j, type: 'j', label: 'Right' },
          { index: high, type: 'pivot', label: 'Pivot' },
        ],
        explanation: `Compare <strong>a[${j}] = ${a[j]}</strong> with <strong class="text-orange-600">pivot ${pivot}</strong>`,
      });

      steps.push({
        array: [...a],
        swaps: [[i, j]],
        explanation: `Swapping <strong>${a[i]}</strong> and <strong>${a[j]}</strong> because <span class="text-green-600">a[${j}] &lt; pivot</span>.`,
      });

      if (a[j] < pivot) {
        swap(a, i, j);
        steps.push({
          array: [...a],
          swaps: [[i, j]],
          explanation: `Swapped ${a[i]} and ${a[j]}`,
        });
        i++;
      }
    }

    swap(a, i, high);
    steps.push({
      array: [...a],
      swaps: [[i, high]],
      explanation: `Placed pivot ${pivot} at index ${i}`,
    });

    return i;
  }

  function quickSort(a: number[], low: number, high: number) {
    if (low < high) {
      const pi = partition(a, low, high);
      quickSort(a, low, pi - 1);
      quickSort(a, pi + 1, high);
    }
  }

  quickSort([...arr], 0, arr.length - 1);
  return steps;
}
