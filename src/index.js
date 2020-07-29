// module and the object we are importing from that module
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'; 

import Header from './components/Header';
import Player from  './components/Player';
import AddPlayerForm from './components/AddPlayerForm';

class App extends React.Component {
  state = {
    players: [  {
      name: "Mia",
      score: 0,
      id: 1
    },
    {
      name: "Jana",
      score: 0,
      id: 2
    },
    {
      name: "Nami",
      score: 0,
      id: 3
    }]    
  };

 handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta    
    }));
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
        <AddPlayerForm />
      </div>
    )}
}

ReactDOM.render( <App />, document.getElementById('root'));

export default App;