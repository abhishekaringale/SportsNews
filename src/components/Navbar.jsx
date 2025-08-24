import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#category', label: 'Category' },
  { href: '#trending', label: 'Trending News' },
  { href: '#recentNews', label: 'Recent News' },
  { href: '#clubsRanking', label: 'Clubs Ranking' },
  { href: '#sportsArticle', label: 'Sports Article' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: -90 },
  show: { opacity: 1, y: 0, transition: { duration: 1.9, ease: 'easeOut' } },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex justify-between md:justify-around items-center p-4">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          onClick={() => {
            const hero = document.getElementById('hero');
            if (hero) {
              hero.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="logo-font md:text-5xl text-3xl cursor-pointer"
        >
          Sport News
        </motion.div>

        {/*link*/}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hidden md:flex items-center gap-8"
        >
          <ul className="flex gap-8">
            {navLinks.map((link, i) => (
              <motion.li key={i} variants={item}>
                <a href={link.href} className="hover:text-black text-gray-500">
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="hidden md:flex items-center bg-gray-300 text-white rounded-md px-4 py-2"
        >
          <Search className="mr-2 size-5" />
          Search
        </motion.div>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* animte mobile menu */}
      <AnimatePresence>  
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <ul className="flex flex-col gap-4 p-4 text-gray-600">
              {navLinks.map((link, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a href={link.href} className="hover:text-black">
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="flex items-center bg-gray-300 text-white rounded-md px-4 py-2">
                <Search className="mr-2 size-5" /> Search
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
