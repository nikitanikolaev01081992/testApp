import * as React from 'react';
import {TouchableHighlight, Text, View, Image, StyleSheet} from 'react-native';

export function ImageButton({data, navObj}) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => navObj.navigate('ImageScreen', {src: data.urls.full})}
        underlayColor="white">
        <Image
          style={{width: 200, height: 200}}
          source={{uri: data.urls.thumb}}
        />
      </TouchableHighlight>
      <Text style={styles.text}>{data.user.name}</Text>
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  imageSmall: {
    width: 300,
    height: 300,
  },
});
