import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';

const App = () => {
  const [mostrarForm, ocultarForm] = useState(false);
  const [citas, setCitas] = useState([
    // {
    //   id: '1',
    //   paciente: 'Hook',
    //   propietario: 'Arturo',
    //   sintomas: 'Muy guapo',
    // },
    // {
    //   id: '2',
    //   paciente: 'Redux',
    //   propietario: 'Jessica',
    //   sintomas: 'No Duerme',
    // },
    // {
    //   id: '3',
    //   paciente: 'Native',
    //   propietario: 'Pancho',
    //   sintomas: 'No Come',
    // },
  ]);

  const eliminaPaciente = id => {
    setCitas(citasActuales => {
      return citasActuales.filter(cita => cita.id !== id);
    });
  };
  //muestra el formulario
  const mostrarFormulario = () => {
    ocultarForm(!mostrarForm);
  };
  //ocultar teclado
  const keyBoardClose = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={() => keyBoardClose()}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>
        <View>
          <TouchableHighlight
            onPress={() => mostrarFormulario()}
            style={styles.btnMostrarForm}>
            <Text style={styles.txtForm}>
              {mostrarForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.contenido}>
          {mostrarForm ? (
            <>
              <Text style={styles.smallTitle}>Crear Nueva Cita</Text>
              <Formulario
                citas={citas}
                setCitas={setCitas}
                ocultarForm={ocultarForm}
              />
            </>
          ) : (
            <>
              <Text style={styles.titulo}>
                {citas.length
                  ? 'Administra tus Citas'
                  : 'No hay citas, administra tus citas'}
              </Text>
              <FlatList
                //Haciendo el map, con FlatList
                style={styles.listado}
                data={citas}
                renderItem={({item}) => (
                  <Cita cita={item} eliminaPaciente={eliminaPaciente} />
                )}
                keyExtractor={cita => cita.id}
              />
            </>
          )}
        </View>
        {/* {citas.map(cita => (
        <View>
          <Text>{cita.paciente}</Text>
        </View>
      ))} */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#00D0DE',
    flex: 1,
  },
  titulo: {
    color: '#fff',
    marginTop: Platform.OS === 'ios' ? 30 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  smallTitle: {
    color: '#fff',
    marginTop: Platform.OS === 'ios' ? 30 : 20,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    marginHorizontal: '15%',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#00AACB',
  },
  txtForm: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default App;
