import { Link } from 'react-router-dom';
import networkBanner from '../assets/networkBanner.webp';

const categories = [
  { name: 'Sorting', path: '/sorting' },
  { name: 'Search', path: '/search' },
  { name: 'Graphs', path: '/graphs' },
  { name: 'Trees', path: '/trees' },
  { name: 'Heaps', path: '/heaps' },
  { name: 'Hashing', path: '/hashing' },
  { name: 'Union-Find', path: '/union-find' },
  { name: 'Strings', path: '/strings' },
  { name: 'Other', path: '/other' },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Banner with heading overlay */}
      <div className="relative w-full">
        <img
          src={networkBanner}
          alt="Network Banner"
          className="w-full object-cover"
        />
        <h1 className="absolute inset-0 flex flex-col justify-center items-center text-4xl md:text-6xl font-potta text-bluePrimary text-center">
          LEARN ALGORITHMS <br /> EASILY
        </h1>
      </div>

      {/* Light gray section for visualizations */}
      <div className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-condensed font-bold text-dark mb-12">
          Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-14 px-6 sm:px-8 lg:px-20 max-w-screen-xl mx-auto">
          {categories.map((cat) => (
            <Link
              to={cat.path}
              key={cat.name}
              className="relative bg-white rounded-lg shadow hover:shadow-lg transition-all h-40 flex items-center justify-center text-2xl font-potta text-bluePrimary hover:bg-blue-50"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
