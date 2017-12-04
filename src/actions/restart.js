export const RESTART = 'RESTART'
const tiles = "123456789"
.split('')
.map(a=>({id:a, clicked: false}))

export default () => {
  return {
    type: RESTART,
    payload: {GameGrid: tiles, PlayerTurn: true}
  }
}
