import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import restart from '../actions/restart'

class Restart extends PureComponent {
  restartClick() {
    this.props.restart()
  }
  render() {
    return (
      <button onClick={this.restartClick.bind(this)}>
      Restart
      </button>
    );
  }
}

const mapDispatchtoProps = {restart: restart}
export default connect(null, mapDispatchtoProps)(Restart)

// export default Tile;
