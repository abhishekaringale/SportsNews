import player from '../assets/subscription/football-player.png';
import { Facebook, Instagram, Twitter } from 'lucide-react';

function Newsletter() {
  return (
    <section className="mx-6 sm:mx-10 md:mx-14 lg:mx-16 xl:mx-20 px-4 py-10 scroll-mt-14">
      <div className="flex flex-col md:flex-row bg-gray-200 rounded-2xl overflow-hidden min-h-[320px]">
        <div className="flex-1 flex flex-col justify-center items-center md:items-center md:justify-center px-8 py-10 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold leading-tight bg-gradient-to-b from-black to-gray-400 bg-clip-text text-transparent">
            NEWSLETTER SUBSCRIPTION
          </h2>

          <div className="flex rounded-md overflow-hidden border border-gray-300 bg-white w-[80%]">
            <input
              type="email"
              placeholder="shovon.khan0099@gmail.com"
              className="flex-1 px-4 py-3 text-sm outline-none"
            />
            <button className="bg-black text-white px-4 flex items-center justify-center">
              →
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-start justify-center p-6 h-64 md:h-80 lg:h-96">
          <img
            src={player}
            alt="Football Player"
            className="object-cover object-top w-1/2"
          />
        </div>
      </div>

      <div className="flex sm:justify-between sm:items-center justify-center items-center sm:flex-row flex-col">
        {/* insta icon */}
        <div className="flex gap-4 pt-4">
          {[Facebook, Instagram, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded bg-black text-white hover:bg-gray-700"
            >
              <Icon size={38} />
            </a>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-4 md:gap-6 py-3 sm:py-6 px-2 sm:px-6 text-sm sm:text-base md:text-xl lg:text-2xl">
          <button className="px-3 sm:px-5 py-1 sm:py-2 rounded-md bg-gray-400 hover:bg-gray-300">
            <span className="text-xl sm:text-3xl text-white">{'\u2190'}</span>
          </button>
          <button className="w-8 h-8 sm:w-10 sm:h-10  rounded-full bg-gray-900 text-white font-semibold">
            1
          </button>
          <button className="w-8 h-8 sm:w-10 sm:h-10  rounded-full text-gray-600 hover:bg-gray-200">
            2
          </button>
          <button className="w-8 h-8 sm:w-10 sm:h-10  rounded-full text-gray-600 hover:bg-gray-200">
            3
          </button>
          <button className="w-8 h-8 sm:w-10 sm:h-10  rounded-full text-gray-600 hover:bg-gray-200">
            4
          </button>
          <button className="px-3 sm:px-5 py-1 sm:py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800">
            {'\u2192'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
