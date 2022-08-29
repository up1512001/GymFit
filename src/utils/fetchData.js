
export const exercisesOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1c2b041490msh0a3e9a63da6747bp18a513jsn55411d18694a',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


export const fetchData = async (url, option) => {
    const response = await fetch(url, option);
    const data = await response.json();

    return data;
}