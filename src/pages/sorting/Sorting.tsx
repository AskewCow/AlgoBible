import { Link } from 'react-router-dom';

const sortingAlgorithms = [
  { name: 'Quick Sort', path: 'Quick' },
  { name: 'Merge Sort', path: 'Merge' },
  { name: 'Bubble Sort', path: 'Bubble' },
  { name: 'Insertion Sort', path: 'Insertion' },
  { name: 'Selection Sort', path: 'Selection' },
  { name: 'Heap Sort', path: 'Heap' },
  { name: 'Radix Sort', path: 'Radix' },
  { name: 'Counting Sort', path: 'Counting' },
  { name: 'Bucket Sort', path: 'Bucket' },
  { name: 'Shell Sort', path: 'Shell' },
  { name: 'Tim Sort', path: 'Tim' },
];

export default function Sorting() {
  return (
    <div className="bg-white">
      {/* White Section: Heading, Text, and Image */}
      <div className="px-8 sm:px-12 lg:px-24 pt-32 pb-24">
        <div className="w-full max-w-screen-xl">
          {/* Page Title (left aligned) */}
          <h1 className="text-4xl md:text-5xl font-condensed font-bold text-dark mb-10">
            Sorting Algorithms
          </h1>

          {/* Description + Image */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Description Text */}
            <div className="lg:w-[60%] xl:w-[55%] text-dark text-[17px] leading-relaxed font-open space-y-4">
              <p>
                As the name suggests, a sorting algorithm arranges numbers or
                strings in a specific order, usually from lowest to highest.
                It's a fundamental part of many programs, often used as a key
                step before processing data further.
              </p>
              <p>
                There’s no single “best” sorting algorithm. Each has strengths
                depending on factors like how many items need sorting, whether
                the data is already partly sorted, or if saving memory matters
                more than speed.
              </p>
              <p>
                Some algorithms use <strong>brute force</strong>, meaning they
                try every possible option or make lots of simple comparisons,
                which can be slow but easy to implement.
              </p>
              <p>
                Others follow <strong>greedy</strong> or{' '}
                <strong>divide-and-conquer</strong> strategies. Greedy methods
                make the best local choice at each step, while
                divide-and-conquer breaks problems into smaller chunks, solves
                them, and combines the results.
              </p>
              <p>
                <strong>In-place</strong> algorithms sort without needing much
                extra memory; they rearrange items in the original list, making
                them great when memory is limited.
              </p>
              <p>
                <strong>Stable</strong> algorithms keep the original order of
                equal items (duplicates), which is helpful when the order has
                meaning e.g. sorting people by age while keeping their names in
                the same order.
              </p>
            </div>

            {/* Right: Placeholder Image */}
            <div className="hidden lg:flex lg:w-[40%] justify-center">
              <img
                src="/images/sorting-placeholder.png"
                alt="Sorting Visual Placeholder"
                className="rounded-lg shadow-md max-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gray Section: Visualization Cards */}
      <div className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-condensed font-bold text-dark mb-12">
          Visualizations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-10 lg:gap-14 px-6 sm:px-8 lg:px-20 max-w-screen-xl mx-auto">
          {sortingAlgorithms.map(({ name, path }) => (
            <Link
              key={name}
              to={`/sorting/${path}`}
              className="relative bg-white rounded-lg shadow hover:shadow-lg transition-all h-40 flex items-center justify-center text-2xl font-potta text-bluePrimary hover:bg-blue-50"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
