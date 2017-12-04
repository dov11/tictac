import { CLICK_TILE } from '../actions/tile'
import { RESTART } from '../actions/restart'
const tiles = "123456789"
.split('')
.map(a=>({id:a, clicked: false}))

export default (state=tiles, {type, payload} = {}) => {
  switch (type) {
    case CLICK_TILE :
      const newGrid = state.map(tile=>{
        if(tile.id===payload.tile.id) {
          const actedPlayer = payload.PlayerTurn ? "Player1" : "Player2"
          return {
            ...payload.tile,
            player: actedPlayer
          }
        }
        return tile
      })
      // function rows(k,l,m){return newGrid[k].player+newGrid[l].player+newGrid[m].player}
      // const rows = [rows(0,1,2), rows(3,4,5), rows(6,7,8),
      //               rows(0,3,6), rows(1,4,7), rows(3,5,8),
      //             rows(0,4,8), rows(2,4,6)]
      // const p1Won = rows.includes('Player1Player1Player1')
      // const p2Won = rows.includes('Player2Player2Player2')
      // const winner = false
      // if (p1Won){
      //   winner = "Player1"
      // } else if (p2Won) {
      //   winner = "Player2"
      // }
      return newGrid
    case RESTART :
      return payload.GameGrid
    default :
      return state
  }
}
