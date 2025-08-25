import player from '../../public/subscription/football-player.webp';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

function Newsletter() {
  return (
    <section
      className="mx-6 sm:mx-10 md:mx-14 lg:mx-16 xl:mx-20 px-4 py-10 scroll-mt-14"
      id="newsletter"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="flex flex-col md:flex-row bg-gray-200 rounded-2xl overflow-hidden min-h-[320px]"
      >
        <div className="flex-1 flex flex-col justify-center items-center px-8 py-10 space-y-6">
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold leading-tight bg-gradient-to-b from-black to-gray-400 bg-clip-text text-transparent text-center"
          >
            NEWSLETTER SUBSCRIPTION
          </motion.h2>

          <motion.div
            variants={slideLeft}
            className="flex w-full rounded-md overflow-hidden border border-gray-300 bg-white"
          >
            <input
              type="email"
              placeholder="abhishekaringale6@gmail.com"
              className="flex-1 min-w-0 px-3 py-2 sm:px-4 sm:py-3 text-sm outline-none"
            />
            <button className="bg-black text-white px-4 flex items-center justify-center">
              →
            </button>
          </motion.div>
        </div>

        <motion.div
          variants={scaleIn}
          className="flex-1 flex items-start justify-center p-6 h-64 md:h-80 lg:h-96"
        >
          <img
            loading="lazy"
            src={player}
            alt="Football Player"
            className="object-cover object-top w-1/2 md:w-full xl:w-full 2xl:w-1/2"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex sm:justify-between sm:items-center justify-center items-center sm:flex-row flex-col"
      >
        <div className="flex gap-4 pt-4">
          {[Facebook, Instagram, Twitter].map((Icon, i) => (
            <motion.a
              key={i}
              variants={fadeUp}
              href="#"
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="h-10 w-10 flex items-center justify-center rounded bg-black text-white hover:bg-gray-700"
            >
              <Icon size={28} />
            </motion.a>
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          variants={container}
          className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-4 md:gap-6 py-3 sm:py-6 px-2 sm:px-6 text-sm sm:text-base md:text-xl lg:text-2xl"
        >
          <motion.button
            variants={fadeUp}
            className="px-3 sm:px-5 py-1 sm:py-2 rounded-md bg-gray-400 hover:bg-gray-300"
          >
            <span className="text-xl sm:text-3xl text-white">{'\u2190'}</span>
          </motion.button>
          {[1, 2, 3, 4].map((n) => (
            <motion.button
              key={n}
              variants={fadeUp}
              whileHover={{ scale: 1.2 }}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                n === 1
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              {n}
            </motion.button>
          ))}
          <motion.button
            variants={fadeUp}
            className="px-3 sm:px-5 py-1 sm:py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800"
          >
            {'\u2192'}
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Newsletter;
