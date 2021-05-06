import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid';
const Formulario = ({citas, setCitas, ocultarForm}) => {
  const [paciente, guardarPaciente] = useState('');
  const [propietario, guardarPropietario] = useState('');
  const [telefono, guardartelefono] = useState('');
  const [sintomas, guardarsintomas] = useState('');
  const [seeDate, setSeeDate] = useState('');
  const [seeTime, setSeeTime] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirmDate = date => {
    const opciones = {year: 'numeric', month: 'long', day: '2-digit'};
    setSeeDate(date.toLocaleDateString('es-Es', opciones));
    hideDatePicker();
  };
  //Show or hidden time picker
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const handleConfirmTime = time => {
    const opciones = {hour: 'numeric', minute: '2-digit'};
    setSeeTime(time.toLocaleTimeString('en-US', opciones));
    hideTimePicker();
  };
  const createNewDate = () => {
    if (
      paciente.trim() === '' ||
      propietario.trim() === '' ||
      telefono.trim() === '' ||
      seeDate.trim() === '' ||
      seeTime.trim() === ''
    ) {
      mostrarAlerta();
      return;
    }
    const cita = {paciente, propietario, telefono, seeDate, seeTime, sintomas};
    cita.id = shortid.generate();
    console.log(cita);

    const citasNuevo = [...citas, cita];
    setCitas(citasNuevo);

    //Ocultar Formulario

    ocultarForm(false);
    //Reset form
  };
  //creando nueva cita
  const mostrarAlerta = () => {
    Alert.alert('Error', 'Todos los campos son obligatorios', [
      {
        text: 'OK',
      },
    ]);
  };
  return (
    <>
      <ScrollView style={styles.formulario}>
        <View>
          <Text style={styles.label}>Paciente</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => {
              guardarPaciente(texto);
            }}
          />
        </View>
        <View>
          <Text style={styles.label}>Dueño</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => {
              guardarPropietario(texto);
            }}
          />
        </View>
        <View>
          <Text style={styles.label}>Telefono Contacto</Text>
          <TextInput
            style={styles.input}
            onChangeText={texto => {
              guardartelefono(texto);
            }}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.btnDate}>
          <Text style={styles.label}> Fecha:</Text>
          <Button title="Seleccionar Fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmDate}
            onCancel={hideDatePicker}
            local="es_Es"
          />
          <Text>{seeDate}</Text>
        </View>

        <View style={styles.btnDate}>
          <Text style={styles.label}>Hora:</Text>

          <Button title="Seleccionar hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hideTimePicker}
            local="es_Es"
          />
          <Text>{seeTime}</Text>
        </View>
        <View>
          <Text style={styles.label}>Sintomas</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={texto => {
              guardarsintomas(texto);
            }}
          />
        </View>
        <View>
          <TouchableHighlight
            onPress={() => createNewDate()}
            style={styles.btnAgregar}>
            <Text style={styles.txtAgregar}>Crear Nueva Cita</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '2.5%',
    marginVertical: 10,
    borderRadius: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    marginTop: 10,
    height: 50,
    color: '#000',
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnAgregar: {
    marginHorizontal: '15%',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#00AACB',
    marginVertical: 10,
  },
  txtAgregar: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
  },
  btnDate: {
    marginHorizontal: '5%',
  },
});
export default Formulario;
