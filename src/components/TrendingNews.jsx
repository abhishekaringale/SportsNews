import React from 'react';
import horse from '../../public/trending/trending-horse.webp';
import cycling from '../../public/trending/trending-cycling.webp';
import boxing from '../../public/trending/trending-boxingarena.webp';
import exercise from '../../public/trending/trending-exercise.webp';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    img: horse,
    author: 'Race98',
    date: '03 June 2023',
    title: '6-Year-Old Horse Dies at Belmont Park After Race Injury',
    desc: 'NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week’s',
  },
  {
    id: 2,
    img: cycling,
    author: 'Jony.Ls',
    date: '03 June 2023',
    title: 'Savilia Blunk Embraces Longer Season With World Cup',
    desc: 'Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some',
  },
  {
    id: 3,
    img: boxing,
    author: 'King.F',
    date: '03 June 2023',
    title: 'Ryan Garcia is fighting again, this time on social media',
    desc: 'Boxing star Ryan Garcia and his promoter reignited their war of words via Twitter on …',
  },
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.7 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const feature = {
  hidden: { opacity: 0, scale: 1.3 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2.9, ease: 'easeOut' },
  },
};

const fadeZoom = {
  hidden: { opacity: 0, scale: 1.3 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2.9, ease: 'easeOut' },
  },
};

function TrendingNews() {
  return (
    <div
      id="trending"
      className="mx-6 sm:mx-10 md:mx-14 lg:mx-16 xl:mx-20 px-4 py-10 scroll-mt-14"
    >

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col 2xl:flex-row gap-6 bg-gray-100"
      >
        <div className="flex-1  rounded-2xl p-6">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-6">
            Trending News
          </h2>
          <motion.div variants={container} className="flex flex-col gap-6">
            {articles.map((a,i) => (
              <motion.div
                key={a.id}
                variants={item}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex gap-4 cursor-pointer sm:flex-row flex-col"
              >
                <img loading="lazy"
                  src={a.img}
                  alt={a.title}
                  className="h-36 w-60 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      {a.author} – {a.date}
                    </p>
                    <h3 className="font-semibold text-gray-900 leading-snug">
                      {a.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {a.desc}
                    </p>
                  </div>
                  {i !== articles.length - 1 && (
                    <hr className="border-gray-300 mt-3" />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={feature}
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="flex-1 relative rounded-2xl overflow-hidden cursor-pointer"
        >
          <img loading="lazy"
            src={exercise}
            alt="Cycling"
            className="h-full w-full object-cover aspect-[1168/818] sm:aspect-[1168/518]"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-4 left-4">
            <span className="text-xl font-semibold px-3 py-1 rounded-sm text-white border border-white">
              Cycling
            </span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-lg  mb-1">Debits – 03 June 2023</p>
            <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">
              DISCOVER THE MEMBER BENEFITS OF USA CYCLING!
            </h3>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default TrendingNews;
