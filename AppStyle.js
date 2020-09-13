/**
 * APP style
 */
import { StyleSheet } from 'react-native'

const s = StyleSheet.create({
    // Search.js
    load: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },

    // FilmItem.js
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
});

export default s;
