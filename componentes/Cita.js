import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';
const Cita = ({cita, eliminaPaciente}) => {
  const dialogoEliminar = id => {
    console.log('Eliminando', id);
    eliminaPaciente(id);
  };
  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.texto}>{cita.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario: </Text>
        <Text style={styles.texto}>{cita.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas:</Text>
        <Text style={styles.texto}>{cita.sintomas}</Text>
      </View>
      <TouchableHighlight
        onPress={() => dialogoEliminar(cita.id)}
        style={styles.btnEliminar}>
        <Text style={styles.txtEliminar}>Eliminar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#fff',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  texto: {
    fontSize: 15,
  },
  btnEliminar: {
    marginHorizontal: '10%',
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  txtEliminar: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Cita;
