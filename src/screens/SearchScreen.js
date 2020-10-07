import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantsList from '../components/RestaurantsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RestaurantsList
          title='Baratinhos'
          restaurants={restaurants.filter(
            restaurant => restaurant.price === '$'
          )}          
        />
        <RestaurantsList
          title='No preço'
          restaurants={restaurants.filter(
            restaurant => restaurant.price === '$$'
          )}          
        />
        <RestaurantsList
          title='Quero esbanjar'
          restaurants={restaurants.filter(
            restaurant => restaurant.price?.length > 2
          )}          
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
