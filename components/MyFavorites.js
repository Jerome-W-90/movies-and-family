import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import FilmList from '../components/FilmList';
import { connect } from 'react-redux';

class MyFavorites extends Component {
    render() {
        return (
            <FilmList
                films={this.props.favoritesFilm}
                navigation={this.props.navigation}
                favoriteList={true}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}

export default connect(mapStateToProps)(MyFavorites)