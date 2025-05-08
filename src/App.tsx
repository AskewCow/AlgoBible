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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
