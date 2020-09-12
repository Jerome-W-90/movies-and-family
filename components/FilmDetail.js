import React, { Component } from 'react';
import { View, Text } from 'react-native';

class FilmDetail extends Component {
    render() {
        //console.log(this.props.route.params.idFilm);
        const idFilm = this.props.route.params.idFilm;
        return (
            <View>
                <Text>Détail du film {idFilm}</Text>
            </View>
        );
    }
}

export default FilmDetail;