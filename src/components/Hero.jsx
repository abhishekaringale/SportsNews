import { motion } from "framer-motion";
import player from "../assets/home/basketball-player.png";
import basketballBg from "../assets/home/basketball-transparent.jpg";
import beautifulWomen from "../assets/home/beautiful-women.jpg";
import raceCar from "../assets/home/fast-race-car.jpg";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

const lineVariant = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const textBlock = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 1.2 } },
};

const playerVariant = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, ease: "easeOut", delay: 1.5 } },
};

const asideVariant = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 } },
};

function Hero() {
  return (
    <section id="home" className="relative bg-gray-100 bg-gradient-to-b from-gray-100 to-white overflow-hidden scroll-mt-14">
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 2xl:grid-cols-[2fr_1fr] gap-10 px-6 pb-12">
        <div className="relative flex sm:flex-col md:flex-row items-center gap-8 ml-5 2xl:ml-0">
          <img
            src={basketballBg}
            alt="Basketball Background"
            className="absolute top-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] opacity-15 grayscale"
          />

          <div className="flex-1">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-2 md:ml-32 xl:ml-40 2xl:ml-0"
            >
              {["TOP", "SCORER TO", "THE FINAL", "MATCH"].map((line, i) => (
                <motion.h1
                  key={i}
                  variants={lineVariant}
                  className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight bg-gradient-to-b from-black to-gray-400 bg-clip-text text-transparent"
                >
                  {line}
                </motion.h1>
              ))}
            </motion.div>

            <motion.div
              variants={textBlock}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-72 md:ml-32 xl:ml-40 2xl:ml-0"
            >
              <p className="mt-6 text-gray-600 max-w-lg text-sm sm:text-base lg:text-lg">
                The EuroLeague Finals Top Scorer is the individual award for the
                player that gained the highest points in the EuroLeague Finals
              </p>
              <button className="mt-4 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md font-semibold">
                CONTINUE READING
              </button>
            </motion.div>
          </div>

          <motion.div
            variants={playerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="w-[250px] sm:w-[400px] lg:w-[600px] xl:w-[700px] aspect-[3/4]">
              <img
                src={player}
                alt="Basketball Player"
                className="hidden sm:block sm:w-full aspect-[3/4] object-contain grayscale"
              />
            </div>
          </motion.div>
        </div>

        <motion.aside
          variants={asideVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-5 mx-6 sm:mx-10 md:mx-14 lg:mx-16"
        >
          <div className="font-bold bg-gray-200 text-gray-500 w-fit px-4 py-1 rounded-md 2xl:mt-12">
            Today
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-1 gap-5">
            <motion.div variants={asideVariant} className="rounded-xl overflow-hidden shadow-md bg-white">
              <div className="aspect-[4/3] w-full">
                <img src={beautifulWomen} alt="Runner" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 text-sm">
                <p className="font-semibold">Race98 – 03 June 2023</p>
                <p>Ethiopian runners took the top four spots.</p>
              </div>
            </motion.div>

            <motion.div variants={asideVariant} className="rounded-xl overflow-hidden shadow-md bg-white">
              <div className="aspect-[4/3] w-full">
                <img src={raceCar} alt="Race Car" className="w-full h-full object-cover filter grayscale" />
              </div>
              <div className="p-4 text-sm">
                <p className="font-semibold">INDYCAR – 03 June 2023</p>
                <p>IndyCar Detroit: Dixon quickest in second practice.</p>
              </div>
            </motion.div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

export default Hero;
