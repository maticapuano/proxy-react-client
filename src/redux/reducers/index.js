import { combineReducers } from 'redux';
import packetsReducer  from './packetsReducer';
import controlReducer  from './controlReducer';

export default combineReducers({
  packetsState: packetsReducer,
  controlState: controlReducer
});
