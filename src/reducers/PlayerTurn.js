import { CLICK_TILE } from '../actions/tile'
import { RESTART } from '../actions/restart'

const player = true

export default (state=player, {type, payload} = {}) => {
  switch(type) {
    case CLICK_TILE :
      return !state
    case RESTART :
      return payload.PlayerTurn

    default :
      return state
  }
}
