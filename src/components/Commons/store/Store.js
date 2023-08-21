import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialLoginState = {
  isLoggedIn: false,
};

const initialDeviceList = {
  deviceList: [
    {
      id: 'd001',
      type: 'Fan',
      name: 'Fan-R1',
      info: 'Celieng Fan Room-1',
      controlAtr: {SPEED: {options: [1,2,3,4,5], set: 1}},
      active : true,
      image: '/images/fan.png'
    },
    {
      id: 'd002',
      type: 'Cooler',
      name: 'Cooler-R1',
      info: 'Cooler Room-1',
      controlAtr: {SPEED: {options: [1,2,3], set: 2}, PUMP: {options: ['ON', 'OFF'], set: 'ON'}},
      active : false,
      image: '/images/cooler.jpg'
    },
    {
      id: 'd003',
      type: 'Heater',
      name: 'Heater-R1',
      info: 'Heater Room-1',
      controlAtr: {SPEED: {options: [1,2,3], set: 2}},
      active : false,
      image: '/images/heater.jpg'
    },
]
};

const deviceListSlice = createSlice({
  name: 'DeviceListState',
  initialState: initialDeviceList,
  reducers: {
    update(state, action) {
      state.deviceList.forEach((device) => {
        if(device.id === action.payload.id && device.name === action.payload.name){
          if(action.payload.newActiveState) device.active = !device.active;
          if(action.payload.newAtr) device.controlAtr[action.payload.newAtr.atr].set = action.payload.newAtr.value;
        }
    })
    },
    removeDevice(state, action){
      state.deviceList  = state.deviceList.filter(device => device.id !== action.payload.id  && device.name !== action.payload.name);
    },
    add(state, action){
      state.deviceList.push(action.payload[0]);
    }
  } 
});

const logSlice = createSlice({
  name: 'LoginState',
  initialState: initialLoginState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

const AppStore = configureStore({
  reducer: {logState: logSlice.reducer, deviceListState: deviceListSlice.reducer},
});

export const LogActions = logSlice.actions;
export const DeviceListActions = deviceListSlice.actions;

export default AppStore;