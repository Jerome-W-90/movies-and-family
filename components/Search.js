import React from 'react'
import { SafeAreaView, View, TextInput, StyleSheet, Button, ActivityIndicator, FlatList } from 'react-native'
import FilmItem from './FilmItem';
import { getFilmsFromApi } from '../API/TMDBApi';

// Import du style
import s from '../AppStyle';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.page = 0;
        this.totalPages = 0;
        this.state = {
            films: [],
            isLoading: false
        }
        this.searchText = ""
    }

    _loadFilm() {
        if (this.searchText.length > 0) {
            this.setState({ isLoading: true });

            getFilmsFromApi(this.searchText, this.page + 1)
                .then(data => {
                    this.page = data.page
                    this.totalPages = this.total_pages
                    this.setState({
                        films: this.state.films.concat(data.results),
                        isLoading: false
                    })
                })
        }
    }

    _searchTextInputChanged(text) {
        this.searchText = text;
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={style.load}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    _searchFilm() {
        this.page = 0;
        this.totalPages = 0;
        // setState est asynchrone
        this.setState({
            films: []
        }, () => {
            console.log('page: ' + this.page, 'totalPages: ' + this.totalPages, 'nbFilms: ' + this.state.films.length)
            this._loadFilm() // permet de lancer _loadFilm uniquement quand setState a terminé
        })
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
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item} />}
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

const style = new StyleSheet.create({
    load: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Search;
