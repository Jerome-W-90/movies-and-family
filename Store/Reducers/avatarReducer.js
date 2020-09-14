const initialState = { avatar: require('../../Images/user.png') }

/**
 * the state must always remain immutable !!
 * bad practice : state.profil = action.value
 **/
function setAvatar(state = initialState, action) {
    let nextState;

    switch (action.type) {
        case 'SET_AVATAR':
            nextState = {
                ...state,
                avatar: action.value
            }
            return nextState || state;
        default:
            return state;
    }
}

export default setAvatar;
