/**
 * Imports
 */
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { getImageFromApi } from '../API/TMDBApi';
import s from '../AppStyle';

class FilmItem extends React.Component {
    render() {
        // Or const { film, displayFilmDetail } = this.props;
        const film = this.props.film;
        const displayFilmDetail = this.props.displayFilmDetail;

        return (
            // TouchableOpacity to allow click on this view
            <TouchableOpacity
                style={s.global}
                onPress={() => displayFilmDetail(film.id)}
            >
                <Image source={{ uri: getImageFromApi(film.poster_path) }} style={s.img} />
                <View style={s.viewDroite}>
                    <View style={s.header}>
                        <Text style={s.titleText}>{film.title}</Text>
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
        )
    }
}

export default FilmItem;