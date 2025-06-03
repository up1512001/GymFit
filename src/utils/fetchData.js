
export const exercisesOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ff823cac37mshe6c04d4c310c253p12a129jsn52d1f230a67d',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ff823cac37mshe6c04d4c310c253p12a129jsn52d1f230a67d',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


export const fetchData = async (url, option) => {
    const response = await fetch(url, option);
    const data = await response.json();

    return data;
}