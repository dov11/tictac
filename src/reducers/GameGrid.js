import { CLICK_TILE } from '../actions/tile'
const tiles = "123456789"
.split('')
.map(a=>({id:a, clicked: false}))

export default (state=tiles, {type, payload} = {}) => {
  if (type === CLICK_TILE) {
    return state.map(tile=>{
      if(tile.id===payload.tile.id) {
        const actedPlayer = payload.PlayerTurn ? "Player1" : "Player2"
        return {
          ...payload.tile,
          player: actedPlayer
        }
      }
      return tile
    })
  }
  else {
    return state
  }
}
