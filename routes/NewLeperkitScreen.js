import * as React from 'react';
import styles from '../styles';
import { Text, View, Button, ScrollView } from 'react-native';
import Appbar from "../components/Appbar/Appbar";

function NewLeperkit({ navigation }) {
  return (
    <>
      <Appbar title="Armar un nuevo leperkit" navigation={navigation} hasBack={true} />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1, borderColor: 'black', borderWidth: 0 }}>
          <Text style={styles.titleDetailScreen}>Selecciona una opcion</Text>
          <View style={styles.buttons}>
            <Button title="Elegir LBB" onPress={() => navigation.push('LbbSelected')} />
          </View>
          <View style={styles.buttons}>
            <Button success title="Elegir modulos" onPress={() => navigation.push('ModulesInstalled')} />
          </View>
          <View style={styles.buttons}>
            <Button title="Elegir interfaz de usuario" />
          </View>
          <View style={styles.buttons}>
            <Button title="Ver mi catalogo" />
          </View>
          <View style={styles.buttons}>
            <Button title="Agregar componentes o circuitos externos" onPress={() => navigation.push('AddComponentOrExternalCircuit')} />
          </View>
        </ScrollView>
      </View>
    </>
  )
}


export default NewLeperkit;