/**
 * Imports
 */
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image } from 'react-native';
import { getFilmDetailsFromApi, getImageFromApi } from '../API/TMDBApi';
import s from '../AppStyle';
import moment from 'moment';
import numeral from 'numeral';

class FilmDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: undefined,
            isLoading: true
        }
    }

    componentDidMount() {
        getFilmDetailsFromApi(this.props.route.params.idFilm) // Get from this.props.navigation.navigate("FilmDetail", { idFilm: idFilm });
            .then((data) => {
                this.setState({
                    film: data,
                    isLoading: false
                });
            })
    }

    _displayFilm() {
        const film = this.state.film;
        if (film != undefined) {
            return (
                <ScrollView style={s.scrollviewContainer}>
                    <Image
                        style={s.image}
                        source={{ uri: getImageFromApi(film.backdrop_path) }}
                    />
                    <Text style={s.titleText}>{film.title}</Text>
                    <Text style={s.descriptionText}>{film.overview}</Text>
                    <Text style={s.defaultText}>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
                    <Text style={s.defaultText}>Note : {film.vote_average} / 10</Text>
                    <Text style={s.defaultText}>Nombre de votes : {film.vote_count}</Text>
                    <Text style={s.defaultText}>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>
                    <Text style={s.defaultText}>Genre(s) : {film.genres.map(function (genre) {
                        return genre.name;
                    }).join(" / ")}
                    </Text>
                    <Text style={s.defaultText}>Companie(s) : {film.production_companies.map(function (company) {
                        return company.name;
                    }).join(" / ")}
                    </Text>
                </ScrollView>
            )
        }
    }

    // display the loader when details are loading
    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={s.load}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    render() {
        //console.log(this.props.route.params.idFilm);
        return (
            <View style={s.filmDetailContainer}>
                {this._displayFilm()}
                {this._displayLoading()}
            </View>
        );
    }
}

export default FilmDetail;