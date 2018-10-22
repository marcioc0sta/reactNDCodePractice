import React from 'react';

const UsersList = ({ users, TogglePlayedGames, showPlayedGames }) => {
  return (
    <div className="UsersList">
      <ol>
        {
          users.map(user => (
            <li key={user.userName}>
              {user.userName}
              {showPlayedGames && 
                <p>
                  this {user.userName} have played {user.playedGames} 
                </p>
              }
              <button 
                className="smallButton" 
                onClick={event => TogglePlayedGames(event)}>
                {showPlayedGames ? 
                  'Hide the Number of Games Played' : 
                  'Show the Number of Games Played'
                }
              </button>
            </li>
          ))
        }
      </ol>
    </div>
  );
}

export default UsersList;
