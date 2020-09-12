import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import { getImageFromApi } from '../API/TMDBApi';

class FilmItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        // ou const { film, displayFilmDetail } = this.props
        const film = this.props.film;
        const displayFilmDetail = this.props.displayFilmDetail;
        return (
            <TouchableOpacity
                style={styles.global}
                onPress={() => displayFilmDetail(film.id)}
            >
                <Image source={{ uri: getImageFromApi(film.poster_path) }} style={styles.img} />
                <View style={styles.viewDroite}>
                    <View style={styles.header}>
                        <Text style={styles.titleText}>{film.title}</Text>
                        <Text style={styles.vote}>{film.vote_average}</Text>
                    </View>
                    <View style={styles.description}>
                        <Text numberOfLines={6}>{film.overview}</Text>
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date}>Sorti le {film.release_date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    global: {
        height: 190,
        flexDirection: 'row',
        flex: 1
    },
    titleText: {
        flex: 2,
        paddingRight: 5
    },
    vote: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666',
        textAlign: 'right'
    },
    img: {
        width: 120,
        height: 185,
        marginTop: 5,
        backgroundColor: 'gray',
        paddingBottom: 5
    },
    viewDroite: {
        flex: 2,
        margin: 5
    },
    header: {
        flexDirection: 'row',
        flex: 1
    },
    description: {
        flex: 2
    },
    date: {
        flex: 1,
        marginTop: 30,
        textAlign: 'right'
    },
    date_container: {
        flex: 1
    }
})

export default FilmItem;