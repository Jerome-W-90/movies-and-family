/**
 * Imports
 */
import React from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { getImageFromApi } from '../API/TMDBApi';
import s from '../AppStyle';
import FadeIn from '../Animations/FadeIn';

class FilmItem extends React.Component {
    _displayFavoriteImage() {
        if (this.props.isFilmFavorite) {
            return (
                <Image source={require('../Images/InFavorite.png')} style={s.favoriteImageList} />
            )
        }
    }

    render() {
        // Or const { film, displayFilmDetail } = this.props;
        const film = this.props.film;
        const displayFilmDetail = this.props._displayFilmDetail;

        return (
            // TouchableOpacity to allow click on this view
            <FadeIn>
                <TouchableOpacity
                    style={s.global}
                    onPress={() => displayFilmDetail(film.id)}
                >
                    <Image source={{ uri: getImageFromApi(film.poster_path) }} style={s.img} />
                    <View style={s.viewDroite}>
                        <View style={s.header}>
                            {this._displayFavoriteImage()}
                            <Text style={s.titleTextList}>{film.title}</Text>
                            <Text style={s.vote}>{film.vote_average}</Text>
                        </View>
                        <View style={s.description}>
                            <Text numberOfLines={6}>{film.overview}</Text>
                        </View>
                        <View style={s.dateContainer}>
                            <Text style={s.date}>Sorti le {film.release_date}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </FadeIn>
        )
    }
}

export default FilmItem;