import React from 'react';
import football from '../assets/category-football.jpg';
import basketball from '../assets/category-basketball.jpg';
import car from '../assets/category-car.jpg';
import tableTennis from '../assets/category-table-tennis.jpg';
import { motion } from 'framer-motion';

const categories = [
  { title: 'FOOTBALL', type: 'text' },
  { title: 'BASKETBALL', type: 'image', img: basketball },
  { title: 'CAR SPORT', type: 'text' },
  { title: 'TABLE TENNIS', type: 'image', img: tableTennis },
  { title: 'FOOTBALL', type: 'image', img: football },
  { title: 'BASCKET BALL', type: 'text' },
  { title: 'CAR SPORT', type: 'image', img: car },
  { title: 'TABLE TENNIS', type: 'text' },
];

const layout = [
  // 0: football (text)
  'col-start-1 row-start-1 sm:col-start-1 sm:row-start-1 md:col-start-1 md:row-start-1',
  // 1: basketball (image)
  'col-start-1 row-start-5 row-span-2 sm:col-start-2 sm:row-start-1 sm:row-span-2 md:col-start-2 md:row-start-1 md:row-span-2',
  // 2: car(text)
  'col-start-1 row-start-7 sm:col-start-1 sm:row-start-7 md:col-start-3 md:row-start-1',
  // 3: table tennis (image)
  'col-start-1 row-start-11 row-span-2 sm:col-start-2 sm:row-start-6 sm:row-span-2 md:col-start-4 md:row-start-1 md:row-span-2',
  // 4: foootball(image)
  'col-start-1 row-start-2 row-span-2 sm:col-start-1 sm:row-start-2 sm:row-span-2 md:col-start-1 md:row-start-2 md:row-span-2',
  // 5: basketball (text)
  'col-start-1 row-start-4 sm:col-start-2 sm:row-start-3 md:col-start-2 md:row-start-3',
  // 6: car(image)
  'col-start-1 row-start-8 row-span-2 sm:col-start-1 sm:row-start-5 sm:row-span-2 md:col-start-3 md:row-start-2 md:row-span-2',
  // 7: tble tennis (text)
  'col-start-1 row-start-10 sm:col-start-2 sm:row-start-5 md:col-start-4 md:row-start-3',
];
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.32,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Categories() {
  return (
    <div className="mx-6 sm:mx-10 md:mx-14 lg:mx-16 xl:mx-20 px-4 py-8 scroll-mt-14" id="category">
      <motion.h2
        className="mb-6 text-xl font-semibold text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Category
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid auto-rows-[140px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
      >
        {categories.map((c, i) => (
          <motion.div
            key={i}
            variants={item}
            className={`overflow-hidden rounded-2xl ${layout[i]}`}
          >
            {c.type === 'image' ? (
              <img
                src={c.img}
                alt={c.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-100 text-center ">
                <span className="px-4 text-2xl  md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold uppercase tracking-wide text-gray-700 bg-gradient-to-b from-black to-gray-400 bg-clip-text text-transparent">
                  {c.title}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Categories;
