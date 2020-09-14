import { createStore, combineReducers } from 'redux';
import toggleFavorite from './Reducers/favoriteReducer';
import setAvatar from './Reducers/avatarReducer';

// TODO : historique de navigation (https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/5400081-construisez-une-action-sur-redux)

export default createStore(combineReducers({toggleFavorite, setAvatar}));
