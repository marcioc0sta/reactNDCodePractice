import React, { Component } from 'react';

class RegisterUsersForm extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      userName: '',
    },
    isUnique: false,
  }

  userIsUnique = currentUserName => {
    const { users } = this.props;
    for (let user of users) {
      if (user.username === currentUserName) {
        return true;
      }
    }
    return false;
  };

  render() {
    const { OnRegisterUser } = this.props;
    return (
      <form action="" >
      </form>
    )
  }

}

export default RegisterUsersForm;
