import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import TrendingNews from './components/TrendingNews';
import NewsHighlight from './components/NewsHighlight';
import News_Rank from './components/recentNews-clubRanking/News_Rank';
import SportsArticles from './components/sport-article/SportsArticles';
import Newsletter from './components/NewsLetter';
import Loader from './components/Loader';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <TrendingNews />
      <NewsHighlight />
      <News_Rank />
      <SportsArticles />
      <Newsletter />
    </div>
  );
}

export default App;
