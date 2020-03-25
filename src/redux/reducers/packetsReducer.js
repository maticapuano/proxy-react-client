import {
  ADD_PACKET,
  DELETE_PACKET,
  DELETE_ALL_PACKETS
} from '../actionTypes';

const initialState = {
  packets: [
    {
      key: 0,
      icon: '',
      path: 'http://127.0.0.1:8081/#/flows/d797ec0e-f354-4a83-8556-166e76d7bb68/detailsn',
      method: 'GET',
      status: 200,
      size: 70,
      time: 1000
    },
    {
      key: 1,
      icon: '',
      path: 'http://127.0.0.1:8081/#/flows/d797ec0e-f354-4a83-8556-166e76d7bb68/detailsn',
      method: 'GET',
      status: 201,
      size: 70,
      time: 1000
    },
    {
      key: 2,
      icon: '',
      path: 'http://127.0.0.1:8081/#/flows/d797ec0e-f354-4a83-8556-166e76d7bb68/detailsn',
      method: 'GET',
      status: 202,
      size: 70,
      time: 1000
    },
    {
      key: 3,
      icon: '',
      path: 'http://127.0.0.1:8081/#/flows/d797ec0e-f354-4a83-8556-166e76d7bb68/detailsn',
      method: 'GET',
      status: 203,
      size: 70,
      time: 1000
    },
    {
      key: 4,
      icon: '',
      path: 'http://127.0.0.1:8081/#/flows/d797ec0e-f354-4a83-8556-166e76d7bb68/detailsn',
      method: 'GET',
      status: 204,
      size: 70,
      time: 1000
    },
  ]
};

const packetsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PACKET:
      return {
        ...state,
        packets: [...state.packets, payload],
      };
    case DELETE_ALL_PACKETS:
      return {
        ...state,
        packets: []
      }
    case DELETE_PACKET:
      return {
        ...state,
        packets: state.packets.filter(record => record.key !== payload)
      }
    default:
      return state;
  }
};
  
  export default packetsReducer;