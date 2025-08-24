import RecentNews from './RecentNews';
import ClubsRanking from './ClubsRanking';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function News_Rank() {
  return (
    <section className="mx-6 sm:mx-10 md:mx-14 lg:mx-16 xl:mx-20 px-4 py-10">
      <div className="flex flex-col gap-8 xl:flex-row xl:items-stretch">
        {/* recent news*/}
        <motion.div
          className="flex-1 h-full basis-1/2 scroll-mt-28"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          id='recentNews'
        >
          <RecentNews />
        </motion.div>

        {/*club rank */}
        <motion.div
          className="flex-1 basis-1/2 h-full scroll-mt-28"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          id='clubsRanking'
        >
          <ClubsRanking />
        </motion.div>
      </div>
    </section>
  );
}

export default News_Rank;
