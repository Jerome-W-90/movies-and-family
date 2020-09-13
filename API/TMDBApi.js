// TODO : .env
const API_TOKEN = "bc22d99291e514b1a5b5117bd3375b9b";

/**
 * Call API to have the movies, depend of the query and page asked
 * @param {string} text 
 * @param {int} page 
 */
export function getFilmsFromApi(text, page) {
    const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN + "&language=fr&query=" + text + "&page=" + page;
    return fetch(url)
        .then((res) => res.json())
        .catch((error) => console.log(error))
}

/**
 * Get the movie's image
 * @param {*} name 
 */
export function getImageFromApi(name) {
    return 'https://image.tmdb.org/t/p/w500/' + name;
}

export function getFilmDetailsFromApi(id) {
    const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + API_TOKEN + "&language=fr";
    return fetch(url)
        .then((res) => res.json())
        .catch((error) => console.log(error))
}