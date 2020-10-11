import * as React from 'react';
import styles from '../styles';
import { Text, View, Button, ScrollView } from 'react-native';
// import Appbar from "../components/Appbar/Appbar";

function HomeScreen({ navigation }) {
  return (
    <>
      {/* <Appbar title="Home screen" subtitle="Subtitulo!"/> */}
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
          <Text style={styles.titleDetailScreen}>¿Que deseas realizar?</Text>
          <View style={styles.buttons}>
            <Button title="Ver información de un Leperkit" onPress={() => navigation.push('ListLbbs')} />
          </View>
          <View style={styles.buttons}>
            <Button success title="Armar un nuevo leperkit" onPress={() => navigation.push('NewLeperkit')} />
          </View>
          <View style={styles.buttons}>
            <Button title="Simular armado" />
          </View>
          <View style={styles.buttons}>
            <Button title="Ver mi catalogo" />
          </View>
          <View style={styles.buttons}>
            <Button title="Ver catalogo completo" />
          </View>
        </ScrollView>
      </View>
    </>
  )
}


export default HomeScreen;





