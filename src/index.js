// module and the object we are importing from that module
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'; 

import Header from './components/Header';
import Player from  './components/Player';

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

export default App;