import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function SleepChart({ data }) {
    if (!data.length) return null;

    const chartData = data.slice(-7).map((d) => ({
        date: d.date.slice(5),
        hours: d.duration
    }));

    return (
        <div className="bg-white/10 mt-6 p-6 rounded-2xl backdrop-blur-xl shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-center">Statistik Mingguan 📊</h3>

            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 12]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="hours" stroke="#4fa3ff" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
