import React, { Component } from 'react';

import RegisterUsersForm from '../RegisterUsersForm/RegisterUsersForm';

class GamesList extends Component {
  state = {
    users: []
  }

  registerUser = user => {
    user.playedGames = 0;
    this.setState(currentState => ({
      users: [...currentState, user],
    }));
  };

  renrder() {
    return(
      <div className="game-list">
        <RegisterUsersForm 
          users={this.state.users} 
          OnRegisterUser={this.registerUser}
        />
      </div>
    )
  }
}

export default GamesList;
