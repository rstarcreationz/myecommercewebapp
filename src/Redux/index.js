// export { buyBook } from "./Actions/action";

import {combineReducers} from 'redux'
import cardItems from './Reducer/reducer'

export default combineReducers({
    cardItems,
})