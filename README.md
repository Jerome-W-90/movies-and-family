# Movies and family
- Disponible sur [Google Play Store](https://play.google.com/store/apps/details?id=com.tets)
- Projet crée en suivant le [cours OpenClassRooms](https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native)
- Utilisation de l'API [The Movie Database](https://developers.themoviedb.org/3/getting-started/introduction)
- Utilisation de [Stack Navigator version 5.x](https://reactnavigation.org/docs/stack-navigator/)
- Utilisation de [Numeral](https://www.npmjs.com/package/numeral) pour manipuler les nombres
- Utilisation de [Moment](https://www.npmjs.com/package/moment) pour manipuler les dates
- Utilisation de [Redux Persist](https://www.npmjs.com/package/redux-persist) pour conserver les données du datastore Redux afin qu'elles persistent dans le temps

# Pour lancer le projet en local
-Installer les modules : 
```
npm install
```
-Indiquer API_TOKEN de [The Movie Database](https://developers.themoviedb.org/3/getting-started/introduction) dans le fichier API/TMDBApi.js

-Simulateur android : 
```
react-native run-android
```
-Lancer le debugger react-devtools
```
react-devtools
```

# Pour déployer l'application sur Google Play
-Pour générer une clé de signature Android (signing key)
```
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```
-Pour builder et générer un APK (à partir de la racine du projet)
```
cd android && ./gradlew assembleRelease
```
