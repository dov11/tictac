import { CLICK_TILE } from '../actions/tile'
import { RESTART } from '../actions/restart'
const tiles = "123456789"
.split('')
.map(a=>({id:a, clicked: false}))


export default (state={tiles: tiles, winner: ""}, {type, payload} = {}) => {
  switch (type) {
    case CLICK_TILE :
      let newGrid = state.tiles.map(tile=>{
        if(tile.id===payload.tile.id) {
          const actedPlayer = payload.PlayerTurn ? "Player1" : "Player2"
          return {
            ...payload.tile,
            player: actedPlayer
          }
        }
        return tile
      })
      function rows(k,l,m){return newGrid[k].player+newGrid[l].player+newGrid[m].player}
      const rowsArray = [rows(0,1,2), rows(3,4,5), rows(6,7,8),
                    rows(0,3,6), rows(1,4,7), rows(3,5,8),
                  rows(0,4,8), rows(2,4,6)]
      const p1Won = rowsArray.includes('Player1Player1Player1')
      const p2Won = rowsArray.includes('Player2Player2Player2')
      let winner = ""
      if (p1Won){
        winner = "Player1"
      } else if (p2Won) {
        winner = "Player2"
      }
      if (p1Won || p2Won) {
        newGrid = newGrid.map(tile=>{return{...tile, clicked:true}})}
      return {tiles: newGrid, winner: winner}
    case RESTART :
      return payload.GameGrid
    default :
      return state
  }
}
