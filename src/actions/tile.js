export const CLICK_TILE = 'CLICK_TILE'

export default (tile) => {
  return (dispatch, getState) => {
    const { PlayerTurn } = getState()

    dispatch({
      type: 'CLICK_TILE',
      payload: {tile, PlayerTurn}
    })
}
}
