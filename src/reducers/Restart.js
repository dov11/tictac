import { CLICK_TILE } from '../actions/tile'
import { RESTART } from '../actions/restart'


export default (state={}, {type, payload} = {}) => {
  switch(type) {
    case CLICK_TILE :
      return state
    case RESTART :
      return state

    default :
      return state
  }
}
