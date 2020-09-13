const initialState = { favoritesFilm: [] }

// TODO : historique de navigation (https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/5400081-construisez-une-action-sur-redux)

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