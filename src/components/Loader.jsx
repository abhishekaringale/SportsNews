import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 2; 
      if (start > 100) {
        start = 100;
        clearInterval(interval);
      }
      setProgress(start);
    }, 60); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <Loader2 className="animate-spin w-14 h-14 mb-6 text-white" />

      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-sm tracking-wide text-gray-300">Loading...</p>
    </div>
  );
}

export default Loader;
