import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Player extends PureComponent {
    // validate and require
// you can use PropTypes within a class like this:
    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number,
        index: PropTypes.number    
    }
    render() {
        console.log(this.props.name + 'rendered');
        return (
            <div className="player">
                <span className="player-name">
                  <button className="remove-player" onClick={ () => this.props.removePlayer(this.props.id) }>✖</button>
                   { this.props.name }
                </span>
                <Counter
                    score={this.props.score}
                    index={this.props.index}
                    changeScore={this.props.changeScore}
                />
            </div>
        )
    }
}

export default Player;