export function calculateDuration(start, end) {
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);

    let startMinutes = sh * 60 + sm;
    let endMinutes = eh * 60 + em;

    if (endMinutes < startMinutes) {
        endMinutes += 24 * 60; // lewat tengah malam
    }

    const duration = (endMinutes - startMinutes) / 60;
    return parseFloat(duration.toFixed(1));
}

export function getSleepQuality(hours) {
    if (hours < 5) return "Kurang ⛔ (CDC)";
    if (hours < 7) return "Lumayan 😐 (CDC)";
    if (hours <= 9) return "Ideal 😴✨ (CDC)";
    return "Terlalu lama ⚠️ (CDC)";
}
