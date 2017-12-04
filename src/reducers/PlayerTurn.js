import { CLICK_TILE } from '../actions/tile'
const player = true

export default (state=player, {type, payload} = {}) => {
  if (type === CLICK_TILE) {
    // console.log(!state.player)
    // const playerChange = !state.player
    return !state

  }
  else {
    return state
  }
}
