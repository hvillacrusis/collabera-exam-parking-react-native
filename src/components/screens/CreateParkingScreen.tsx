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
import {CreateParkingScreenNavigationProps} from '../../types';
import Layout from './Layout';

const InputWithLabel = ({label, val, onChange}: any) => {
  const handleTextChange = (value: any) => {
    onChange(value);
  };

  return (
    <>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={val?.toString()}
        onChangeText={handleTextChange}
      />
    </>
  );
};

const CreateParkingScreen: React.FC<CreateParkingScreenNavigationProps> = ({
  navigation,
}) => {
  const [{numberOfEntryPoints, parkingSlots, numberOfSlots}, setParkingState] =
    useRecoilState(parkingSlotsState);

  const holdDistance: any = [];

  for (let i = 0; i < numberOfEntryPoints; i++) {
    holdDistance.push(i + 1);
  }

  const [slot, setSlot] = useState<any>({
    size: '',
    distance: holdDistance,
  });

  const handleChange = (index: number, text: any) => {
    const newInputs = [...slot.distance];
    newInputs[index] = text;
    setSlot((x: any) => ({...x, distance: newInputs}));
  };

  const handleSave = () => {
    setSlot({
      size: '',
      distance: holdDistance,
    });
    setParkingState((x: any) => ({
      ...x,
      parkingSlots: [
        ...x.parkingSlots,
        {
          ...slot,
          occupied: false,
          assignedVehicle: null,
        },
      ],
    }));
  };

  if (parkingSlots.length === numberOfSlots) {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ParkingLot')}>
        <Text style={styles.buttonText}>Start Parking Lot</Text>
      </TouchableOpacity>
    );
  }

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.label}>
          Input Parameters for Parking Slot {parkingSlots.length + 1}
        </Text>
        <InputWithLabel
          label={'size'}
          val={slot.size}
          onChange={(t: any) => setSlot((x: any) => ({...x, size: t}))}
        />
        {Array.from({length: numberOfEntryPoints}, (_, i) => (
          <InputWithLabel
            key={i}
            label={`distance from entry pont ${i + 1}`}
            val={slot.distance[i]}
            onChange={(text: any) => handleChange(i, text)}
          />
        ))}
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
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
});

export default CreateParkingScreen;
