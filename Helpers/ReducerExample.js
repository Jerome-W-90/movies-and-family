/**
 * the state must always remain immutable !!
 * bad practice : state.profil = action.value 
 **/
function reducerProfil(state, action) {
    let nextText;

    switch (action.type) {
        case "ADD_PROFIL":
            nextText = {
                ...state,
                profil: action.value
            }
            return nextText;
        case "UPDATE_PROFIL":
            return nextText;
        case "DELETE_PROFIL":
            return nextText;
        default:
            return nextText;
    }
}