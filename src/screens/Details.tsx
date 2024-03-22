import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const DetailsScreen = ({route}) => {
  const {movie, imageUrl} = route.params;
  console.log('movie ##', movie);

  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{movie.movie}</Text>
      <Text style={styles.movieRating}>Rating: {movie.rating}</Text>
      <Text style={styles.movieDescription}>{movie.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1fccb',
  },
  movieImage: {
    width: 300,
    height: 400,
    marginBottom: 20,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  movieRating: {
    fontSize: 20,
    marginBottom: 10,
  },
  movieDescription: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DetailsScreen;
