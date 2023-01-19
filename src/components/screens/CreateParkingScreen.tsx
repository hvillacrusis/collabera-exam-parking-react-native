import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CreateParkingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Create Parking Screen</Text>
    </View>
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
});

export default CreateParkingScreen;
