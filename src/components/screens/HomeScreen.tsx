import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useRecoilState} from 'recoil';
import {parkingSlotsState} from '../../store/app';
import {HomeScreenNavigationProps} from '../../types';
import Layout from './Layout';

interface TextInputs {
  numOfEntries: string;
  numberOfParkingSlots: string;
}

const HomeScreen: React.FC<HomeScreenNavigationProps> = ({navigation}) => {
  const [_, setParkingLotState] = useRecoilState(parkingSlotsState);
  const [textInputs, setTextInputs] = useState<TextInputs>({
    numOfEntries: '',
    numberOfParkingSlots: '',
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = () => {
    const isTextInput1Valid =
      /^\d+$/.test(textInputs.numOfEntries) &&
      Number(textInputs.numOfEntries) > 0 &&
      Number(textInputs.numOfEntries) <= 3;
    const isTextInput2Valid = /^\d+$/.test(textInputs.numberOfParkingSlots);
    if (isTextInput1Valid && isTextInput2Valid) {
      setParkingLotState(x => ({
        ...x,
        numberOfSlots: parseInt(textInputs.numberOfParkingSlots, 10),
        numberOfEntryPoints: parseInt(textInputs.numOfEntries, 10),
      }));
      navigation.navigate('CreateParking');
    } else {
      setErrorMessage(
        !isTextInput1Valid
          ? 'Number of entries should be a number between 1 and 3'
          : 'Number of slots should be a number',
      );
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.label}>Number of entry points</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={textInputs.numOfEntries}
          onChangeText={text =>
            setTextInputs({...textInputs, numOfEntries: text})
          }
        />
        <Text style={styles.label}>How many parking slots would you like?</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={textInputs.numberOfParkingSlots}
          onChangeText={text =>
            setTextInputs({...textInputs, numberOfParkingSlots: text})
          }
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
        {errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
    width: '80%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },
});

export default HomeScreen;
