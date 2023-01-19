import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type StackNavigatorParamList = {
  Home: undefined;
  CreateParking: undefined;
};

export type HomeScreenNavigationProps = NativeStackScreenProps<
  StackNavigatorParamList,
  'Home'
>;
