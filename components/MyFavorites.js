import React, { Component } from 'react';
import { View } from 'react-native';
import FilmList from '../components/FilmList';
import { connect } from 'react-redux';
import FadeIn from '../Animations/FadeIn';
import Avatar from '../components/Avatar';
import s from '../AppStyle';

class MyFavorites extends Component {
    render() {
        return (
            <>
                <View style={s.viewAvatarContainer}>
                    <Avatar />
                </View>
                <FadeIn>
                    <FilmList
                        films={this.props.favoritesFilm}
                        navigation={this.props.navigation}
                        favoriteList={true}
                    />
                </FadeIn>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}

export default connect(mapStateToProps)(MyFavorites)