import { motion } from 'framer-motion';

function SportsArticleCard({ article }) {
  return (
    <motion.article
      className="rounded-2xl overflow-hidden bg-white hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative aspect-[16/9] lg:aspect-[4/3] 2xl:aspect-[21/12] w-full">
        <img loading="lazy"
          src={article.img}
          alt={article.title}
          className="h-full w-full object-cover"
        />
        <span className="absolute top-3 right-3 text-white border text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-3 py-1 rounded">
          {article.category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <img loading="lazy"
            src={article.author.avatar}
            alt={article.author.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
              {article.author.name}
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500">
              {article.date}
            </p>
          </div>
        </div>

        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2">
          {article.title}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          {article.desc}
        </p>
      </div>
    </motion.article>
  );
}

export default SportsArticleCard;
