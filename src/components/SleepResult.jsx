import { motion } from "framer-motion";

export default function SleepResult({ hours, quality }) {
    if (!hours) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 mt-6 p-6 rounded-2xl backdrop-blur-xl shadow-xl text-center"
        >
            <h3 className="text-xl font-semibold">Hasil Tidur Kamu</h3>

            <p className="mt-3 text-3xl font-bold">{hours} jam</p>

            <p className="mt-3 text-lg opacity-80">{quality}</p>
        </motion.div>
    );
}
    