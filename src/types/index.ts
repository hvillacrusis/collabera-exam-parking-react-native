import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type StackNavigatorParamList = {
  Home: undefined;
  CreateParking: undefined;
  ParkingLot: undefined;
};

export type HomeScreenNavigationProps = NativeStackScreenProps<
  StackNavigatorParamList,
  'Home'
>;

export type CreateParkingScreenNavigationProps = NativeStackScreenProps<
  StackNavigatorParamList,
  'CreateParking'
>;

export type ParkingLotScreenNavigationProps = NativeStackScreenProps<
  StackNavigatorParamList,
  'ParkingLot'
>;
