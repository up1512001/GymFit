
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
        'X-RapidAPI-Key': 'ea80ced351msh4fa1a6600694a89p11b25ejsncf94b3c37909',
    },
};



export const fetchData = async (url,options) =>{
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}