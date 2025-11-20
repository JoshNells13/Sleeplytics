import { useState } from "react";
import { motion } from "framer-motion";

export default function SleepForm({ onSubmit }) {
    const [sleep, setSleep] = useState("");
    const [wake, setWake] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ sleep, wake });
        setSleep("");
        setWake("");
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg shadow-xl w-full max-w-md mx-auto mt-8"
        >
            <h2 className="text-xl font-bold mb-4 text-center">Catat Tidur Kamu 💤</h2>

            <label className="block mb-3">
                <span>Jam Tidur</span>
                <input
                    type="time"
                    value={sleep}
                    onChange={(e) => setSleep(e.target.value)}
                    required
                    className="mt-1 w-full p-2 rounded bg-white/20"
                />
            </label>

            <label className="block mb-4">
                <span>Jam Bangun</span>
                <input
                    type="time"
                    value={wake}
                    onChange={(e) => setWake(e.target.value)}
                    required
                    className="mt-1 w-full p-2 rounded bg-white/20"
                />
            </label>

            <button
                type="submit"
                className="w-full mt-3 p-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-bold"
            >
                Hitung Tidur
            </button>
        </motion.form>
    );
}
