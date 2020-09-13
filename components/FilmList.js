import React, { Component } from 'react';
import { SafeAreaView, View, TextInput, Button, ActivityIndicator, FlatList } from 'react-native';
import FilmItem from './FilmItem';
import s from '../AppStyle';
import { connect } from 'react-redux';

class FilmList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    _displayFilmDetail = (idFilm) => {
        //console.log(idFilm);
        this.props.navigation.navigate("FilmDetail", { idFilm: idFilm }); // send idFilm to the new view FilmDetail
    }

    render() {
        return (
            <FlatList
                data={this.props.films}
                extraData={this.props.favoritesFilm}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <FilmItem
                        film={item}
                        displayFilmDetail={this._displayFilmDetail}
                        isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
                    />
                }
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if (this.props.page < this.props.totalPages) {
                        this.props._loadFilm()
                    }
                }}
            />
        );
    }
}

// connect global state to FilmList props
const mapStateToProps = (state) => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}
export default connect(mapStateToProps)(FilmList);