import mci from '../../assets/recentNews/manchester-city.png';
import liv from '../../assets/recentNews/liverpool.png';
import che from '../../assets/recentNews/chelsea.png';
import tot from '../../assets/recentNews/tottenhum.png';
import ars from '../../assets/recentNews/arsenal.png';
import mun from '../../assets/recentNews/manchester-united.png';
import { motion } from 'framer-motion';

const clubs = [
  {
    pos: 1,
    name: 'Manchester City',
    logo: mci,
    gp: 38,
    w: 29,
    d: 6,
    l: 3,
    f: 99,
    a: 26,
    gd: 73,
  },
  {
    pos: 2,
    name: 'Liverpool',
    logo: liv,
    gp: 38,
    w: 28,
    d: 8,
    l: 2,
    f: 94,
    a: 26,
    gd: 68,
  },
  {
    pos: 3,
    name: 'Chelsea',
    logo: che,
    gp: 38,
    w: 21,
    d: 11,
    l: 6,
    f: 76,
    a: 33,
    gd: 43,
  },
  {
    pos: 4,
    name: 'Tottenham Hotspur',
    logo: tot,
    gp: 38,
    w: 22,
    d: 5,
    l: 11,
    f: 69,
    a: 40,
    gd: 29,
  },
  {
    pos: 5,
    name: 'Arsenal',
    logo: ars,
    gp: 38,
    w: 22,
    d: 3,
    l: 13,
    f: 61,
    a: 48,
    gd: 13,
  },
  {
    pos: 6,
    name: 'Manchester United',
    logo: mun,
    gp: 38,
    w: 16,
    d: 10,
    l: 12,
    f: 57,
    a: 57,
    gd: 0,
  },
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.95 },
  },
};

const row = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

export default function ClubsRanking() {
  return (
    <div className="h-full flex flex-col">
      <motion.h2
        className="mb-6 text-xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Clubs Ranking
      </motion.h2>

      <div className="overflow-x-auto rounded-2xl bg-gray-100">
        <motion.table
          className="w-full text-left"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <thead className="text-gray-600">
            <tr className="text-sm">
              <th className="px-5 py-4 font-medium xl:text-[20px]">Club</th>
              <th className="px-3 py-4 font-medium xl:text-[20px]">GP</th>
              <th className="px-3 py-4 font-medium xl:text-[20px]">W</th>
              <th className="px-3 py-4 font-medium xl:text-[20px]">D</th>
              <th className="px-3 py-4 font-medium xl:text-[20px]">L</th>
              <th className="px-3 py-4 font-medium xl:text-[20px]">F</th>
              <th className="px-3 py-4 font-medium xl:text-[20px]">A</th>
              <th className="px-3 py-4 font-medium xl:text-[20px]">GD</th>
            </tr>
          </thead>

          <motion.tbody className="divide-y divide-gray-200">
            {clubs.map((c) => (
              <motion.tr key={c.pos} className="" variants={row}>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-3">
                    <span className="w-5 text-sm text-gray-500">{c.pos}</span>
                    <img loading="lazy"
                      src={c.logo}
                      alt={c.name}
                      className="h-6 w-6 rounded-full object-contain bg-white ring-1 ring-gray-200"
                    />
                    <span className="font-medium lg:text-base xl:text-lg 2xl:text-xl text-gray-900">
                      {c.name}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-1 text-sm lg:text-lg text-gray-800">
                  {c.gp}
                </td>
                <td className="px-3 py-1 text-sm lg:text-lg text-gray-800">
                  {c.w}
                </td>
                <td className="px-3 py-1 text-sm lg:text-lg text-gray-800">
                  {c.d}
                </td>
                <td className="px-3 py-1 text-sm lg:text-lg text-gray-800">
                  {c.l}
                </td>
                <td className="px-3 py-1 text-sm lg:text-lg text-gray-800">
                  {c.f}
                </td>
                <td className="px-3 py-1 text-sm lg:text-lg text-gray-800">
                  {c.a}
                </td>
                <td className="px-3 py-1  text-sm lg:text-lg font-semibold text-gray-900">
                  {c.gd}
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </motion.table>
      </div>
    </div>
  );
}
