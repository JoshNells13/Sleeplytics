export function saveSleepData(data) {
    const prev = JSON.parse(localStorage.getItem("sleep-data")) || [];
    prev.push(data);
    localStorage.setItem("sleep-data", JSON.stringify(prev));
}

export function getSleepData() {
    return JSON.parse(localStorage.getItem("sleep-data")) || [];
}
