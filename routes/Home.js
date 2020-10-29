import * as React from 'react';
import { useEffect } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import styles from '../styles';
import { Text, View, Button, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Title, Paragraph, DataTable, Subheading } from 'react-native-paper';
import Appbar from "../components/Appbar/Appbar";
import SyncStorage from 'sync-storage';
import { getToken } from '../src/Functions/functions';
import io from "socket.io-client";


function HomeScreen({ navigation }) {

  useEffect(() => {
    getToken();
    var socket = io("http://127.0.0.1:4003");
    socket.emit('sasdasd')
  }, [])

  //dataHarcoded TENGO QUE ENVIAR AL COMPONENTE TABLE 7 PARA PODER MOSTRARLO. MARTIN MANDA TODO EN 1 SOLO STRING, TENGO QUE TRANSFORMARLO NADA MAS
  //Me enviara por ejemplo :  "LBB3X½AAB½Alacena½TLUZ½CCO½Cocina½-3¼"
  const dataHarcoded = [
    { "model": "LBB3X", "label": "AAB", "name": "Alacena", "type": "TLUZ", "LOC": "CCO", "DLOC": "Cocina", "LTZ": "-3" },
    { "model": "LBB5X", "label": "AAC", "name": "Heladera", "type": "TLUZ", "LOC": "CCO", "DLOC": "Cocina", "LTZ": "-3" }
  ];

  function onpressInformation() {
    var parameters = { dataHarcoded }
    navigation.navigate('ListLbbs', { parameters })
    // alert("e")
  }




  return (
    <>
      <NavigationContainer theme={DarkTheme}>
        <Appbar title="Home screen" subtitle="Bienvenido Santiago" navigation={navigation} hasBack={false} />
        <View style={styles.container}>
          <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
            <Title style={styles.titleDetailScreen}>¿Que deseas realizar?</Title>
              <TouchableOpacity onPress={() => onpressInformation()}>
                <View style={styles.button}>
                  <Text>Ver información de un Leperkit</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('NewLeperkit')}>
                <View style={styles.button}>
                  <Text>Armar un nuevo leperkit</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity >
                <View style={styles.button}>
                  <Text>Simular armado</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity >
                <View style={styles.button}>
                  <Text>Ver mi catalogo</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity >
                <View style={styles.button}>
                  <Text>Ver catalogo complesssto</Text>
                </View>
              </TouchableOpacity>
          </ScrollView>
        </View>
      </NavigationContainer>
    </>
  )
}


export default HomeScreen;





