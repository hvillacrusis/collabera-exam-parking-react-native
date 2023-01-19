import {atom} from 'recoil';

interface ParkingSlot {
  [key: string]: any;
}

interface ParkingSlotsState {
  numberOfEntryPoints: number;
  numberOfSlots: number;
  parkingSlots: ParkingSlot[];
}
export const parkingSlotsState = atom<ParkingSlotsState>({
  key: 'parkingSlotsState',
  default: {
    numberOfEntryPoints: 0,
    numberOfSlots: 0,
    parkingSlots: [],
  },
});
