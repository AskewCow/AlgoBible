import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';

// Category pages
import Sorting from './pages/sorting/Sorting';
import Search from './pages/search/Search';
import Graphs from './pages/graphs/Graphs';
import Trees from './pages/trees/Trees';
import Heaps from './pages/heaps/Heaps';
import Hashing from './pages/hashing/Hashing';
import UnionFind from './pages/unionFind/UnionFind';
import Strings from './pages/strings/Strings';
import Other from './pages/other/Other';

// Sorting algorithm visualizers
import Quick from './pages/sorting/Quick';
import Merge from './pages/sorting/Merge';
import Bubble from './pages/sorting/Bubble';
import Insertion from './pages/sorting/Insertion';
import Selection from './pages/sorting/Selection';
import Heap from './pages/sorting/Heap';
import Radix from './pages/sorting/Radix';
import Counting from './pages/sorting/Counting';
import Bucket from './pages/sorting/Bucket';
import Shell from './pages/sorting/Shell';
import Tim from './pages/sorting/Tim';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorting" element={<Sorting />} />
          <Route path="/search" element={<Search />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/trees" element={<Trees />} />
          <Route path="/heaps" element={<Heaps />} />
          <Route path="/hashing" element={<Hashing />} />
          <Route path="/union-find" element={<UnionFind />} />
          <Route path="/strings" element={<Strings />} />
          <Route path="/other" element={<Other />} />

          {/* Sorting Visualizers */}
          <Route path="/sorting/Quick" element={<Quick />} />
          <Route path="/sorting/Merge" element={<Merge />} />
          <Route path="/sorting/Bubble" element={<Bubble />} />
          <Route path="/sorting/Insertion" element={<Insertion />} />
          <Route path="/sorting/Selection" element={<Selection />} />
          <Route path="/sorting/Heap" element={<Heap />} />
          <Route path="/sorting/Radix" element={<Radix />} />
          <Route path="/sorting/Counting" element={<Counting />} />
          <Route path="/sorting/Bucket" element={<Bucket />} />
          <Route path="/sorting/Shell" element={<Shell />} />
          <Route path="/sorting/Tim" element={<Tim />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
