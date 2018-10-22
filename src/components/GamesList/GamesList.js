import React, { Component } from 'react';

import RegisterUsersForm from '../RegisterUsersForm/RegisterUsersForm';
import UsersList from '../UsersList/UsersList';

class GamesList extends Component {
  state = {
    users: [],
    showPlayedGames: true,
  }

  TogglePlayedGames = event => {
    event.preventDefault();
    this.setState(currentState => ({
      showPlayedGames: !currentState.showPlayedGames,
    }));
  }

  OnRegisterUser = user => {
    user.playedGames = 0;
    this.setState(currentState => ({
      users: [...currentState.users, user],
    }));
  };

  render() {
    const { showPlayedGames } = this.state;
    return (
      <div className="game-list">
        <RegisterUsersForm
          users={this.state.users}
          OnRegisterUser={this.OnRegisterUser}
        />
        <UsersList
          showPlayedGames={showPlayedGames}
          TogglePlayedGames={this.TogglePlayedGames}
          users={this.state.users}
        />
      </div>
    )
  }
}

export default GamesList;
