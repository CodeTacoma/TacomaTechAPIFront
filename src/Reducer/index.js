import {combineReducers} from 'redux';
import tech from './tech';
import Biz from './Biz';
import City from './City';
import EDU from './EDU';
import Event from './Event';
import Group from './Group';




export default combineReducers({tech, Biz, City, EDU, Event, Group});
