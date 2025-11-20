import { useState } from "react";
import SleepForm from "./components/SleepForm";
import SleepResult from "./components/SleepResult";
import SleepChart from "./components/SleepChart";
import Tips from "./components/Tips";
import { calculateDuration, getSleepQuality } from "./utils/CalculateSleep";
import { saveSleepData, getSleepData } from "./utils/Storage";
import { Github } from "lucide-react";

export default function App() {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState(getSleepData());

  const handleSubmit = ({ sleep, wake }) => {
    const duration = calculateDuration(sleep, wake);
    const quality = getSleepQuality(duration);

    const data = {
      date: new Date().toISOString().slice(0, 10),
      sleep,
      wake,
      duration
    };

    saveSleepData(data);
    setHistory([...history, data]);
    setResult({ duration, quality });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mt-4">Sleeplytics </h1>
      <p className="text-center m-4">Ukur Jam Tidur Anda Dengan Statistik</p>

      <SleepForm onSubmit={handleSubmit} />
      <SleepResult hours={result?.duration} quality={result?.quality} />
      <SleepChart data={history} />
      <Tips />

      <p className="flex flex-col items-center text-center mt-6 text-xl font-semibold tracking-wide">
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
          Developed with by Joshua Christian L
        </span>
        <a className="mt-3 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition " href="https://github.com/JoshNells13" target="blank">
         <Github  color="white" size={32} />
        </a>
      </p>
      

    </div>
  );
}
