const initialState = { favoritesFilm: [] }

/**
 * the state must always remain immutable !!
 * bad practice : state.profil = action.value
 **/
function toggleFavorite(state = initialState, action) {
    let nextText;

    switch (action.type) {
        case "TOGGLE_FAVORITE":
            const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id);

            if (favoriteFilmIndex !== -1) {
                // Delete
                nextText = {
                    ...state,
                    favoritesFilm: state.favoritesFilm.filter((item, index) => index !== favoriteFilmIndex)
                }
            }
            else {
                // Add
                nextText = {
                    ...state,
                    favoritesFilm: [...state.favoritesFilm, action.value]
                }
            }

            return nextText || state;
        default:
            return state;
    }
}

export default toggleFavorite;
