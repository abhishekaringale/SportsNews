import basketballImg from '../../../public/sport-articles/basketball-shoes.jpg';
import hockeyImg from '../../../public/sport-articles/ice-hocky.jpg';
import badmintonImg from '../../../public/sport-articles/shuttlecocks.jpg';
import author1 from '../../../public/sport-articles/article-writer-1.png';
import author2 from '../../../public/sport-articles/article-writer-2.png';
import author3 from '../../../public/sport-articles/article-writer-3.png';
import SportsArticleCard from './SportsArticleCard';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    img: basketballImg,
    category: 'Basketball',
    author: { name: 'Jake Will.', avatar: author1 },
    date: '04 June 2023',
    title: '5 Exercises Basketball Players Should Be Using To Develop Strength',
    desc: 'This article was written by Jake Willhoite from Healthlisted.com Strength in basketball isn’t all about a massive body mass or ripped muscles.',
  },
  {
    id: 2,
    img: hockeyImg,
    category: 'Hockey',
    author: { name: 'Foxi.zacon', avatar: author2 },
    date: '03 June 2023',
    title:
      "Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year",
    desc: 'The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.',
  },
  {
    id: 3,
    img: badmintonImg,
    category: 'Badminton',
    author: { name: 'Bong Lozada', avatar: author3 },
    date: '01 June 2023',
    title: '‘Outdoor’ Badminton Gets Support From Local Federation',
    desc: 'The Badminton World Federation is developing Air Badminton and the country’s governing body, Philippine Badminton Association.',
  },
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.35 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
function SportsArticles() {
  return (
    <motion.section
      className="mx-6 sm:mx-10 md:mx-14 lg:mx-16 xl:mx-20 px-4 py-10 scroll-mt-14 "
      id='sportsArticle'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Sports Article
      </motion.h2>

      {/* Grid layout */}
      <motion.div
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {articles.map((a) => (
          <motion.div key={a.id} variants={item}>
            <SportsArticleCard article={a} />
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Arrows */}
      <div className="flex justify-start gap-4 mt-8">
        <button className="rounded-md border bg-gray-200 py-1 px-6 text-[28px] text-gray-400 hover:bg-gray-300 cursor-pointer">
          ←
        </button>
        <button className="rounded-md border bg-gray-800 py-1 px-6 text-[28px] text-white hover:bg-gray-700 cursor-pointer">
          →
        </button>
      </div>
    </motion.section>
  );
}

export default SportsArticles;
