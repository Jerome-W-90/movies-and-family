/**
 * Imports
 */
import React from 'react';
import { SafeAreaView, View, TextInput, Button, ActivityIndicator, FlatList } from 'react-native';
import FilmItem from './FilmItem';
import { getFilmsFromApi } from '../API/TMDBApi';
import s from '../AppStyle';
import { connect } from 'react-redux';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.page = 0;
        this.totalPages = 0;
        this.state = {
            films: [],
            isLoading: false
        }
        this.searchText = "";
    }

    _loadFilm() {
        // If there is a query
        if (this.searchText.length > 0) {
            this.setState({ isLoading: true });

            // Make a call to the API
            getFilmsFromApi(this.searchText, this.page + 1)
                .then(data => {
                    this.page = data.page
                    this.totalPages = data.total_pages
                    this.setState({
                        films: this.state.films.concat(data.results), // Concat new results with old during scroll
                        isLoading: false
                    })
                })
        }
    }

    // onChangeText on the search bar
    _searchTextInputChanged(text) {
        this.searchText = text;
    }

    // display the loader when films are loading
    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={s.load}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    _searchFilm() {
        this.page = 0;
        this.totalPages = 0;
        // setState is asynchron
        this.setState({
            films: [] // reset all movies to have new results
        }, () => {
            console.log('page: ' + this.page, 'totalPages: ' + this.totalPages, 'nbFilms: ' + this.state.films.length)
            this._loadFilm() // _loadFilm is started when setState is done
        })
    }

    displayFilmDetail = (idFilm) => {
        //console.log(idFilm);
        this.props.navigation.navigate("FilmDetail", { idFilm: idFilm }); // send idFilm to the new view FilmDetail
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TextInput
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    style={s.textInput}
                    onSubmitEditing={() => this._searchFilm()}
                    placeholder="Titre du film..." />
                <Button onPress={() => this._searchFilm()} title="Rechercher" onPress={() => this._loadFilm()} />

                <FlatList
                    data={this.state.films}
                    extraData={this.props.favoritesFilm}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <FilmItem
                            film={item}
                            displayFilmDetail={this.displayFilmDetail}
                            isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
                        />
                    }
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (this.page < this.totalPages) {
                            this._loadFilm()
                        }
                    }}
                />
                {this._displayLoading()}
            </SafeAreaView>
        )
    }
}

// connect global state to Search props
const mapStateToProps = (state) => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}
export default connect(mapStateToProps)(Search);