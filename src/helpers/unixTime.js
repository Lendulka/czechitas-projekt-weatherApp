export const getTimeFromUnix = (unix) => {
    const hours = new Date(unix * 1000).getHours();
    const minutes = new Date(unix * 1000).getMinutes();
    const twoDigitMinutes = minutes.toString().padStart(2, "0");
    return `${hours}:${twoDigitMinutes}`
};

export const getDateFromUnix = (unix) => {
    const day = new Date(unix * 1000).getDate();
    const month = new Date(unix * 1000).getMonth();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return `${day} ${monthNames[month]}`
};

export const getDayFromUnix = (unix) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayOfWeek = new Date(unix * 1000).getDay();
    return days[dayOfWeek]
};

export const cities = [
    "Abuja",
    "Amsterdam",
    "Aswān",
    "Athens",
    "Bangkok",
    "Barcelona",
    "Belgrade",
    "Brno",
    "Budapest",
    "Buenos Aires",
    "Cape Town",
    "Dakar",
    "El Alto",
    "Hanoi",
    "Harbin",
    "Kingston",
    "Kuala Lumpur",
    "Kuwait",
    "Kyiv",
    "Lagos",
    "Ljubljana",
    "London",
    "Madrid",
    "Melbourne",
    "Miami",
    "Minsk",
    "Moscow",
    "New Delhi",
    "New York",
    "Norilsk",
    "Paris",
    "Porto",
    "Prague",
    "Reykjavik",
    "Seoul",
    "Skopje",
    "Sofia",
    "Split",
    "Sydney",
    "São Paulo",
    "Tallinn",
    "Tenerife",
    "Tirana",
    "Toronto",
    "Vancouver",
    "Vienna",
    "Vilnius",
    "Warsaw",
    "Winnipeg",
    "Yakutsk",
];     