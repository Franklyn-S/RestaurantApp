import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const RestaurantDetail = ({ restaurant }) => {
  if (!restaurant?.image_url) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text>
        {restaurant.rating} Estrelas, {restaurant.review_count} Avaliações
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default RestaurantDetail;
