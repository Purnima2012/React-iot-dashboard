const sampleDeviceData = [
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
  {
    id: 'd004',
    type: 'Geyser',
    name: 'Geyser-1',
    info: 'Geyser K-1',
    controlAtr: {SPEED: {options: ['MIN','MEDIUM','MAX'], set: 'MEDIUM'}},
    active : false,
    image: '/images/geyser.jpg'
  },
  {
    id: 'd005',
    type: 'Camera',
    name: 'Camera-Main',
    info: 'Camera Main Door',
    controlAtr: {ROTATE:{options: ['ON', 'OFF'], set: 'ON'}, AUDIO: {options: ['UNMUTE', 'MUTE'], set: 'UNMUTE'}},
    active : false,
    image: '/images/camera.png'
  },
  {
    id: 'd006',
    type: 'CeilingLight',
    name: 'CeilingLight-R1',
    info: 'Ceiling Light Room-1',
    controlAtr: {COLOR: {options: ['WHITE', 'YELLOW'], set: 'WHITE'}},
    active : false,
    image: '/images/ceilingLight.jpg'
  },
  {
    id: 'd007',
    type: 'chandelier',
    name: 'Chandelier-LR',
    info: 'Chandelier Living Room-1',
    controlAtr: {COLOR: {options: ['RED', 'YELLOW', 'PURPLE', 'PINK'], set: 'PURPLE'},
                ROTATE:{options: ['ON', 'OFF'], set: 'ON'}},
    active : true,
    image: '/images/chandelier.jpg'
  },
  {
    id: 'd008',
    type: 'profile Light',
    name: 'ProfileLight',
    info: 'Profile Light Foyer',
    controlAtr: {COLOR: {options: ['WHITE', 'YELLOW', 'BLUE'], set: 'BLUE'}},
    active : true,
    image: '/images/profileLight.jpg'
  }];

  export default sampleDeviceData;