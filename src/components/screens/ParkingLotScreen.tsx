import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {parkingSlotsState} from '../../store/app';
import {ParkingLotScreenNavigationProps} from '../../types';
import Layout from './Layout';

const CreateParkingScreen: React.FC<ParkingLotScreenNavigationProps> = ({}) => {
  const {parkingSlots} = useRecoilValue(parkingSlotsState);
  const availSlots = parkingSlots?.filter(x => x.occupied === false);
  return (
    <Layout>
      <View style={styles.container}>
        <Text>Available Slots: {availSlots?.length}</Text>
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
