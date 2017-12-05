import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyling}>DEPLOY</Text>
        <Image source={{uri: 'https://memegenerator.net/img/instances/500x/75325214/successful-deploy-yes-we-ken.jpg'}}
       style={{width: 400, height: 250}} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyling: {
    fontSize: 100,
    fontWeight: 'bold',
  }
});
