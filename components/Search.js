import React from 'react'
import {SafeAreaView, View, TextInput, StyleSheet, Button, ActivityIndicator, FlatList} from 'react-native'
import FilmItem from './FilmItem';
import { getFilmsFromApi } from '../API/TMDBApi';

// Import du style
import s from '../AppStyle';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            films: [],
            isLoading: false
        }
        this.searchText = ""
    }

    _loadFilm(){
        this.setState({isLoading: true});

        if(this.searchText.length > 0){
            getFilmsFromApi(this.searchText)
            .then(data => this.setState({films: data.results, isLoading: false}))
        }
    }
    
    _searchTextInputChanged(text){
        this.searchText = text;
    }

    _displayLoading(){
        if(this.state.isLoading){
            return(
                <View style={style.load}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    render(){
        console.log(this.state.isLoading);
        return(
            <SafeAreaView style={{flex: 1}}>
                <TextInput onChangeText={(text) => this._searchTextInputChanged(text)} style={s.textInput} placeholder="Titre du film..." />
                <Button onSubmitEditing= {() => this._loadFilm()} title="Rechercher" onPress={() => this._loadFilm()} />

                <FlatList
                data={this.state.films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem film={item}/>}
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