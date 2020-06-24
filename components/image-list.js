import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {ImageButton} from './image-button';

const urlToApi =
  'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';
function getImagesApi(url, setData) {
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      return setData(json);
    })
    .catch(error => {
      console.error(error);
    });
}

export function ListOfImages({navigation}) {
  const [data, setData] = useState([]);
  getImagesApi(urlToApi, setData);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => <ImageButton data={item} navObj={navigation} />}
      />
    </View>
  );
}
