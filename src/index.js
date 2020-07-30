// module and the object we are importing from that module
import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css'; 

import { Provider } from './components/Context';
import Header from './components/Header';
import Player from  './components/Player';
import AddPlayerForm from './components/AddPlayerForm';

class App extends React.Component {
  state = {
    players: [  {
      name: "User 1",
      score: 0,
      id: 1
    },
    {
      name: "User 2",
      score: 0,
      id: 2
    },
    {
      name: "User 3",
      score: 0,
      id: 3
    }]    
  };

  // player id counter
  prevPlayerId = 4;

 handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta    
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: this.prevPlayerId +=1,
          }
        ]
      }
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => p.id !== id )
      }
    })
  }

  render() {
    return (
      <Provider>
        <div className="scoreboard">
          <Header title="my scoreboard" players={this.state.players} />
    
          {/* players list */}
          { this.state.players.map( (player, index) =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            />
          )}
          <AddPlayerForm AddPlayer={this.handleAddPlayer}/>
        </div>
      </Provider>
    )}
}

ReactDOM.render( <App />, document.getElementById('root'));

export default App;