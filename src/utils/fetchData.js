
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
        // 'X-RapidAPI-Key': 'ea80ced351msh4fa1a6600694a89p11b25ejsncf94b3c37909',
        'X-RapidAPI-Key' : 'ff823cac37mshe6c04d4c310c253p12a129jsn52d1f230a67d',
    },
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        // 'X-RapidAPI-Key': 'ea80ced351msh4fa1a6600694a89p11b25ejsncf94b3c37909',
        'X-RapidAPI-Key': 'ff823cac37mshe6c04d4c310c253p12a129jsn52d1f230a67d',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


export const fetchData = async (url,options) =>{
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}


