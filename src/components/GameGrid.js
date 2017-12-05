import React, {PureComponent} from 'react';
import Tile from './Tile'
import './Gamegrid.css'
import { connect } from 'react-redux';
import Restart from './Restart';



class GameGrid extends PureComponent {
  renderTile(tile) {
    return <Tile key={tile.id} {...tile} />
  }
  render() {
    return (
      <div className="gamegrid">
        {this.props.tiles.map(this.renderTile)}
        <Restart winner={this.props.winner}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {tiles: state.GameGrid.tiles,
  winner: state.GameGrid.winner}
}
export default connect(mapStateToProps)(GameGrid)
// export default GameGrid;
