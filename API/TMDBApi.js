const API_TOKEN = "bc22d99291e514b1a5b5117bd3375b9b";

export function getFilmsFromApi(text){
    const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN + "&langage=fr&query=" + text
    return fetch(url)
        .then((res) => res.json())
        .catch((error) => console.log(error))
}

export function getImageFromApi(name){
    return 'https://image.tmdb.org/t/p/w500/' + name
}