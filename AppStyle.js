/**
 * APP style
 */
import { StyleSheet } from 'react-native'

const s = StyleSheet.create({
    // Search.js and FilmDetail.js
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
    dateContainer: {
        flex: 1
    },

    // FilmDetail.js
    filmDetailContainer: {
        flex: 1
    },
    scrollviewContainer: {
        flex: 1
    },
    image: {
        height: 169,
        margin: 5
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 35,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center'
    },
    descriptionText: {
        fontStyle: 'italic',
        color: '#666666',
        margin: 5,
        marginBottom: 15
    },
    defaultText: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    }
});

export default s;
