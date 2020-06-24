import * as React from 'react';
import {Image} from 'react-native';

export function ImageScreen({navigation, route}) {
  return (
    <Image
      style={{width: '100%', height: '100%'}}
      source={{uri: route.params.src}}
    />
  );
}
