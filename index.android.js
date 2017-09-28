/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView
} from 'react-native';

const remote = 'https://static.fjcdn.com/pictures/Phone_ee9944_5436160.jpg';

export default class first extends Component {

updateText() {

    Alert.alert('Geros dienos!')
  }


  render() {
    

      const resizeMode = 'cover';
    const text = 'Antras kartas nemeluoja';

    return (

      <Image
        style={{
          backgroundColor: '#ccc',
          flex: 1,
          resizeMode,
          width: '100%',
          height: '100%',
           justifyContent: 'center',
    alignItems: 'center',
        }}
        source={{ uri: remote }}
      >
        <Text
          style={{
            backgroundColor: 'transparent',
            textAlign: 'center',
            fontSize: 30,
            padding: 40,
            color:'white'
          }}
        >
          {text}
        </Text>
        <TouchableOpacity
        style={{ height: 35, width:225, marginTop: 20, marginBottom: 20, backgroundColor: '#00bc67' }}>
        
             <Text
             onPress = {this.updateText}
               style={{ textAlign: 'center', color:'#ffffff',margin: 8, fontSize:16 }}>
                 SUZINOKITE
             </Text>
          </TouchableOpacity>
<FlatList
          data={[
            {key: 'Pirmadienis'},
            {key: 'Antradienis'},
            {key: 'Treciadienis'},
            {key: 'Ketvirtadienis'},
            {key: 'Penktadienis'},
            {key: 'Sestadienis'},
            {key: 'Sekmadienis'},
            {key: 'Astuntadienis'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
      </Image>

        
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: 'transparent'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color:'white'
  },
});

AppRegistry.registerComponent('first', () => first);
