import React, {PureComponent} from 'react';
import { connect } from 'react-redux';


class PlayerTurn extends PureComponent {
  render() {
    return (
      <div className={this.props.player + ""}>
        {(this.props.player)? "Player1":"Player2"} turn
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {player: state.PlayerTurn}
}
export default connect(mapStateToProps)(PlayerTurn)
