// module and the object we are importing from that module
import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css'; 

const Header = (props) => {
    return(
        <header>
          <h1>{ props.title }</h1>
          <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
              <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
               { props.name }
            </span>
            <Counter />
        </div>
    )
}
class Counter extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     score: 0 
  //   };
  // } OU
  state = {
    score: 0
  };

  incrementScore() {
    this.setState( prevState => {
      return {
      score: prevState.score + 1
      }
    })
  }
  decrementScore() {
    this.setState( prevState => {
      return {
      score: prevState.score - 1
      }
    })
  }

  render () {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
      </div>
    )}
}

class App extends React.Component {
  state = {
    players: [  {
      name: "Mia",
      id: 1
    },
    {
      name: "Jana",
      id: 2
    },
    {
      name: "Nami",
      id: 3
    }]    
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => p.id !== id )
      }
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="my scoreboard" totalPlayers={this.state.players.length} />
  
        {/* players list */}
        { this.state.players.map( player =>
         <Player
           name={player.name}
           id={player.id}
           key={player.id.toString()}
           removePlayer={this.handleRemovePlayer}
           />
        )}
      </div>
    )}
}

ReactDOM.render( <App />, document.getElementById('root'));
