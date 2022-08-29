
export const exercisesOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ea80ced351msh4fa1a6600694a89p11b25ejsncf94b3c37909',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ea80ced351msh4fa1a6600694a89p11b25ejsncf94b3c37909',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


export const fetchData = async (url, option) => {
    const response = await fetch(url, option);
    const data = await response.json();

    return data;
}