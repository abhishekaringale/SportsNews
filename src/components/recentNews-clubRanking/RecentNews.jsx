import golfball from '../../assets/club-rankings/golf-ball.png';
import boxing from '../../assets/club-rankings/boxing.png';
import cricket from '../../assets/club-rankings/cricket-ball.png';
import karate from '../../assets/club-rankings/karate.jpg';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.35 } },
};

const fromRight = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

function RecentNews() {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold"
      >
        Recent News
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-6 md:flex-row md:items-stretch flex-1"
      >
        {/* card*/}
        <motion.article
          variants={fromRight}
          className="cursor-pointer relative overflow-hidden rounded-2xl w-full md:w-1/2 h-64 md:h-auto bg-gradient-to-t from-black/60 to-orange-300 hover:scale-[1.03] transition-all"
        >
          <img
            src={karate}
            alt="Baku 2023 World Taekwondo Championships"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <p className="text-xs lg:text-sm opacity-90">Day 5 Highlights</p>
            <h3 className="mt-1 text-sm lg:text-base font-semibold">
              Baku 2023 World Taekwondo Championships
            </h3>
          </div>
        </motion.article>

        {/*side list*/}
        <motion.div
          variants={fromRight}
          className="flex-1 rounded-2xl bg-gray-100 p-5  overflow-hidden"
        >
          <motion.ul variants={container} className="space-y-5">
            <motion.li
              variants={fromRight}
              className="flex items-start gap-3 cursor-pointer hover:scale-[1.02] transition-all"
            >
              <img
                src={boxing}
                alt="Baku 2023 Taekwondo"
                className="h-14 w-14 rounded-lg object-cover"
              />
              <div>
                <p className="text-xs text-gray-500">
                  #Pollar. 87 – 12 July 2023
                </p>
                <h4 className="font-semibold leading-snug">
                  Baku 2023 Taekwondo Championships
                </h4>
              </div>
            </motion.li>
            <motion.li
              variants={fromRight}
              className="flex items-start gap-3 cursor-pointer hover:scale-[1.02] transition-all"
            >
              <img
                src={golfball}
                alt="Open Championship Golf"
                className="h-14 w-14 rounded-lg object-cover"
              />
              <div>
                <p className="text-xs text-gray-500">
                  #Golf. Toni – 20 July 2023
                </p>
                <h4 className="font-semibold leading-snug">
                  Open Championship Royal Liverpool Golf
                </h4>
              </div>
            </motion.li>
            <motion.li
              variants={fromRight}
              className="flex items-start gap-3 cursor-pointer hover:scale-[1.02] transition-all"
            >
              <img
                src={cricket}
                alt="Ireland Tour of England"
                className="h-14 w-14 rounded-lg object-cover"
              />
              <div>
                <p className="text-xs text-gray-500">
                  #Cricket. Toni – 27 July 2023
                </p>
                <h4 className="font-semibold leading-snug">
                  Ireland Tour of England Test 2023
                </h4>
              </div>
            </motion.li>
          </motion.ul>

          <motion.button
            variants={fromRight}
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
          >
            More <span aria-hidden>→</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default RecentNews;
