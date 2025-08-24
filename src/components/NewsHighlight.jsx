import { motion } from 'framer-motion';
import newsImg from '../assets/handshake.jpg';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.4 },
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

const fromLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

function NewsHighlight() {
  return (
    <div className="mx-6 sm:mx-10 md:mx-14 lg:mx-16 xl:mx-20 px-4 py-10 scroll-mt-14">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="rounded-sm overflow-hidden shadow-lg bg-gray-50"
      >
        <motion.div
          variants={fadeZoom}
          whileHover={{ scale: 1.01}}
          className="relative aspect-[1168/818] sm:aspect-[1168/518] w-full cursor-pointer"
        >
          <img loading="lazy"
            src={newsImg}
            alt="News"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <motion.div
            variants={fromLeft}
            className="absolute top-3 left-3 sm:top-4 sm:left-4"
          >
            <span className="px-2 sm:px-3 py-1 rounded-md border border-white text-white text-xs sm:text-sm md:text-base">
              Football
            </span>
          </motion.div>

          <motion.div
            variants={container}
            className="absolute bottom-4 sm:bottom-8 left-3 sm:left-8 right-3 sm:right-8 text-white space-y-0 sm:space-y-3"
          >
            <motion.p
              variants={fromLeft}
              className="text-xs sm:text-sm md:text-base opacity-90"
            >
              Agence France-Presse – 04 June 2023
            </motion.p>
            <motion.h2
              variants={fromLeft}
              className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-snug"
            >
              LIONEL MESSI LEAVING LIGUE 1 TEAM PARIS SAINT-GERMAIN, CLUB
              CONFIRMS
            </motion.h2>
            <motion.p
              variants={fromLeft}
              className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90 max-w-2xl"
            >
              The EuroLeague Finals Top Scorer is the individual award for the
              player that gained the highest points in the EuroLeague Finals
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-4 md:gap-6 py-3 sm:py-6 px-2 sm:px-6 text-sm sm:text-base md:text-xl lg:text-2xl"
        >
          <motion.button
            variants={fadeUp}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md bg-gray-400 hover:bg-gray-300"
          >
            <span className="text-lg sm:text-2xl text-white">{'\u2190'}</span>
          </motion.button>
          {[1, 2, 3, 4].map((n) => (
            <motion.button
              key={n}
              variants={fadeUp}
              className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full ${
                n === 1
                  ? 'bg-gray-900 text-white font-semibold'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              {n}
            </motion.button>
          ))}
          <motion.button
            variants={fadeUp}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md bg-gray-900 text-white hover:bg-gray-800"
          >
            <span className="text-lg sm:text-2xl">{'\u2192'}</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default NewsHighlight;
