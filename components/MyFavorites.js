import React, { Component } from 'react';
import FilmList from '../components/FilmList';
import { connect } from 'react-redux';
import FadeIn from '../Animations/FadeIn';

class MyFavorites extends Component {
    render() {
        return (
            <FadeIn>
                <FilmList
                    films={this.props.favoritesFilm}
                    navigation={this.props.navigation}
                    favoriteList={true}
                />
            </FadeIn>
        );
    }
}

const mapStateToProps = state => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}

export default connect(mapStateToProps)(MyFavorites)