/**
 * Imports
 */
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity } from 'react-native';
import { getFilmDetailsFromApi, getImageFromApi } from '../API/TMDBApi';
import s from '../AppStyle';
import moment from 'moment';
import numeral from 'numeral';
import { connect } from 'react-redux';

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

    /**
     * put movie into favorite with redux
     * STEPS : 
     * 1/ click on favorite button
     * 2/ create a type TOGGLE_FAVORITE and value with the current film
     * 3/ share the const action to redux with dispatch function
     * 4/ store TOGGLE_FAVORITE will receive this action and modify the state
     **/

    _toggleFavoris() {
        const action = { type: "TOGGLE_FAVORITE", value: this.state.film };
        this.props.dispatch(action);
    }

    _displayFavoriteImage() {
        var sourceImage = require('../Images/NotInFavorite.png');

        if (this.props.favoritesFilm.findIndex(item => item.id === this.state.film.id) !== -1) {
            var sourceImage = require('../Images/InFavorite.png');
        }

        return (
            <Image source={sourceImage} style={s.favoriteImage} />
        )
    }

    /*componentDidUpdate() {
        console.log(this.props.favoritesFilm)
    }*/

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
                    <TouchableOpacity
                        style={s.favoriteContainer}
                        onPress={() => this._toggleFavoris()}
                    >
                        {this._displayFavoriteImage()}
                    </TouchableOpacity>
                    <Text style={s.descriptionText}>{film.overview}</Text>
                    <Text style={s.defaultText}>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
                    <Text style={s.defaultText}>Note : {film.vote_average} / 10</Text>
                    <Text style={s.defaultText}>Nombre de votes : {film.vote_count}</Text>
                    <Text style={s.defaultText}>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>
                    <Text style={s.defaultText}>Genre(s) : {film.genres.map(function (genre) { // ex: Science-fiction / Action / Horreur
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
        //console.log(this.props); // favoritesFilm appear from redux
        //console.log(this.props.route.params.idFilm);
        return (
            <View style={s.filmDetailContainer}>
                {this._displayFilm()}
                {this._displayLoading()}
            </View>
        );
    }
}

// connect global state to FilmDetail props
const mapStateToProps = (state) => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}
export default connect(mapStateToProps)(FilmDetail);