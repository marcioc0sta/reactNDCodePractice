import React, { Component } from 'react';

import RegisterUsersForm from '../RegisterUsersForm/RegisterUsersForm';

class GamesList extends Component {
  state = {
    users: []
  }

  OnRegisterUser = user => {
    user.playedGames = 0;
    this.setState(currentState => ({
      users: [...currentState.users, user],
    }));
  };

  render() {
    return(
      <div className="game-list">
        <RegisterUsersForm 
          users={this.state.users} 
          OnRegisterUser={this.OnRegisterUser}
        />
      </div>
    )
  }
}

export default GamesList;
