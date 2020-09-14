import { createStore } from 'redux';
import toggleFavorite from './Reducers/favoriteReducer';
import setAvatar from './Reducers/avatarReducer';
import { persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// TODO : historique de navigation (https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/5400081-construisez-une-action-sur-redux)

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage
}

export default createStore(persistCombineReducers(rootPersistConfig, {toggleFavorite, setAvatar}));
