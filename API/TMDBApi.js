const API_TOKEN = "";

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

/**
 * Get the movie's details
 * @param id
 * @returns {Promise<any | void>}
 */
export function getFilmDetailsFromApi(id) {
    const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + API_TOKEN + "&language=fr";
    return fetch(url)
        .then((res) => res.json())
        .catch((error) => console.log(error))
}

/**
 * Get the best news movies
 * @param page
 * @returns {Promise<any | void>}
 */
export function getBestFilmsFromApi (page) {
    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + API_TOKEN + '&vote_count.gte=1000&sort_by=release_date.desc&language=fr&page=' + page)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}
