import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import logo from './assets/logo.png'

export default function App() {
  const [data, setData] = useState('')

  const findMyIp = async () => {   
    setData('Descobrindo IP...')
    const ip = await fetch('http://httpbin.org/ip')
    const data = await ip.json()
    setData(data.origin)
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={logo} />
        <Text style={styles.text}>{data}</Text>
        <Button title='Find my IP' onPress={findMyIp} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.made}>Made with ♥ by Gus Prado</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2336',
    fontSize: 72,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  body:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    color: '#fff',
    paddingTop: 20,
    paddingBottom: 20
  },
  footer:{
    paddingTop: 10,
    paddingBottom: 20
  },
  made:{
    color: '#fff',
    textAlign: 'center'
  }
});
