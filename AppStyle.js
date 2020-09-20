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
    buttonSearch: {
        backgroundColor: "black",
        height: 30,
        justifyContent: 'center'
    },
    textButtonSearch: {
        color: "white",
        textAlign: 'center'
    },

    // FilmItem.js
    global: {
        height: 190,
        flexDirection: 'row',
        flex: 1
    },
    titleTextList: {
        flex: 2,
        fontWeight: 'bold',
        fontSize: 18,
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
    },
    favoriteContainer: {
        alignItems: 'center'
    },
    favoriteImage: {
        width: 24,
        height: 24
    },
    buttonShareContainerAndroid: {
        position: 'absolute',
        width: 55,
        height: 55,
        right: 30,
        bottom: 30,
        borderRadius: 30,
        backgroundColor: '#e91e63',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonShareAndroid: {
        width: 24,
        height: 24
    },
    buttonShareContainerIos: {
        position: 'absolute',
        width: 50,
        height: 50,
        right: 30,
        bottom: 30,
        borderRadius: 30,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonShareIos: {
        width: 24,
        height: 24
    },
    viewAvatarContainer: {
        alignItems: 'center'
    },

    // FilmItem.js
    favoriteImageList: {
        width: 24,
        height: 24,
        marginRight: 5
    }
});

export default s;
