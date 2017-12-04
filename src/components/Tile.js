import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import tile from '../actions/tile'
import './Tile.css';

class Tile extends PureComponent {
  tileClick() {
    const tile ={
      id: this.props.id,
      clicked: true
    }
    this.props.tile(tile)
  }
  render() {
    return (
      <button className={"tile" + ((this.props.clicked) ? (" "+ this.props.player) : "")}
        onClick={this.tileClick.bind(this)}
        disabled={this.props.clicked}>
      </button>
    );
  }
}

const mapDispatchtoProps = {tile: tile}
export default connect(null, mapDispatchtoProps)(Tile)

// export default Tile;
