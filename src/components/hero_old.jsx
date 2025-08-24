import player from '../assets/basketball-player.png';
import basketballBg from '../assets/basketball-transparent.jpg';
import beautifulWomen from '../assets/beautiful-women.jpg';
import raceCar from '../assets/fast-race-car.jpg';

function Hero() {
  return (
    <div className="flex justify-between lg:flex-row items-start p-10 bg-gray-100 min-h-screen relative bg-gradient-to-b from-gray-100 to-white">
      {/* Hero Section */}
      <div className="flex flex-col w-3/4 relative">
        <div className="flex flex-col md:flex-row lg:flex-row  items-center">
          {/* Faint Basketball Background */}
          <img
            src={basketballBg}
            alt="Basketball Background"
            className="absolute -top-16 left-0 w-[550px] filter grayscale object-cover opacity-15"
          />

          {/* Text */}
          <div className=" mb-8 md:mb-0 relative w-1/2 top-20 -right-36">
            <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6  bg-gradient-to-b from-black to-gray-400 bg-clip-text text-transparent">
              TOP <br /> SCORER TO <br /> THE FINAL <br /> MATCH
              {/* TOP SCORER TO THE FINAL MATCH */}
            </h1>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex-shrink-0 absolute top-9 right-5">
          <img
            src={player}
            alt="Basketball Player"
            className="filter grayscale w-[800px]"
          />
        </div>

        <div className="w-1/3 relative ">
          <p className="text-gray-600 mb-6 text-lg">
            The EuroLeague Finals Top Scorer is the individual award for the
            player that gained the highest points in the EuroLeague Finals
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 transition text-white px-8 py-3 rounded-md font-semibold">
            CONTINUE READING
          </button>
        </div>
      </div>
      {/* Sidebar */}
      <div className="relative top-16 w-80 flex flex-col gap-4">
        <div className="font-bold bg-gray-200 text-gray-400 mb-4 w-20 py-1 text-center rounded-md">
          Today
        </div>

        {/* Card 1 */}
        <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden w-[80%] bg-gradient-to-b from-black to-white">
          <img src={beautifulWomen} alt="Runner" className="object-cover" />
          <div className="p-3 text-sm">
            <p className="font-semibold">Race98 - 03 June 2023</p>
            <p>Ethiopian runners took the top four spots.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden w-[80%] bg-gradient-to-b from-black to-white">
          <div>
            <img
              src={raceCar}
              alt="Race Car"
              className="object-cover filter grayscale"
            />

            <div className="p-3 text-sm bg-white">
              <p className="font-semibold">INDYCAR - 03 June 2023</p>
              <p>IndyCar Detroit: Dixon quickest in second practice.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
