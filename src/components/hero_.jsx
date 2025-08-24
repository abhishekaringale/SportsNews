import player from '../assets/basketball-player.png';
import basketballBg from '../assets/basketball-transparent.jpg';
import beautifulWomen from '../assets/beautiful-women.jpg';
import raceCar from '../assets/fast-race-car.jpg';

function Hero() {
  return (
    <section className="relative bg-gray-100 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 2xl:grid-cols-[2fr_1fr] gap-10 px-6 py-12">
        {/* Left (Text + Player) */}
        <div className="relative flex sm:flex-col md:flex-row items-center  gap-8 ml-5 2xl:ml-0">
          {/* Background basketball */}
          <img
            src={basketballBg}
            alt="Basketball Background"
            className="absolute top-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] opacity-15 grayscale "
          />

          {/* Left Text */}
          <div className="flex-1">
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight bg-gradient-to-b from-black to-gray-400 bg-clip-text text-transparent md:ml-32 xl:ml-40 2xl:ml-0"
            >
              TOP <br /> SCORER TO <br /> THE FINAL <br /> MATCH
            </h1>
            
            <div className='w-72 md:ml-32 xl:ml-40 2xl:ml-0'>
              <p className="mt-6 text-gray-600 max-w-lg text-sm sm:text-base lg:text-lg">
              The EuroLeague Finals Top Scorer is the individual award for the
              player that gained the highest points in the EuroLeague Finals
            </p>
            <button className="mt-4 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md font-semibold">
              CONTINUE READING
            </button>
            </div>
          </div>
          
          
          {/* Player Image */}
          <div className="flex-1 flex justify-center lg:justify-end ">
            <div className="w-[250px] sm:w-[400px] lg:w-[600px] xl:w-[700px] aspect-[3/4]">
              <img
                src={player}
                alt="Basketball Player"
                className="md:w-full  aspect-[3/4] object-contain grayscale"
              />
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-5 mx-6 sm:mx-10 md:mx-14 lg:mx-16">
          <div className="font-bold bg-gray-200 text-gray-500 w-fit px-4 py-1 rounded-md">
            Today
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-1 gap-5">
            {/* Card 1 */}
            <div className="rounded-xl overflow-hidden shadow-md bg-white">
              <div className="aspect-[4/3] w-full">
                <img
                  src={beautifulWomen}
                  alt="Runner"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-sm">
                <p className="font-semibold">Race98 – 03 June 2023</p>
                <p>Ethiopian runners took the top four spots.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl overflow-hidden shadow-md bg-white">
              <div className="aspect-[4/3] w-full">
                <img
                  src={raceCar}
                  alt="Race Car"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-sm">
                <p className="font-semibold">INDYCAR – 03 June 2023</p>
                <p>IndyCar Detroit: Dixon quickest in second practice.</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
