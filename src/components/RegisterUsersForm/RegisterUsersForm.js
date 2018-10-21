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
    console.log(users)
    for (let user of users) {
      if (user.username === currentUserName) {
        console.log(currentUserName)
        return true;
      }
    }
    return false;
  };

  SubmitForm = event => {
    event.preventDefault();
    const { user } = this.state;
    const { OnRegisterUser } = this.props;
    const isUnique = this.userIsUnique(user);

    if (!isUnique) OnRegisterUser(user)

    this.setState(() => ({
      isUnique,
    }));
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState(prevState => ({
      ...prevState,
      user: {
        ...prevState.user,
        [name]: value,
      }
    }));
  }

  render() {
    const { firstName, lastName, username } = this.state.user;

    return (
      <form onSubmit={this.SubmitForm} >
        <div>
        <input 
          name="firstName"
          value={firstName}
          placeholder="First Name"
          type="text"
          onChange={this.handleChange}
        />
        </div>
        <div>
          <input
            name="lastName"
            value={lastName}
            placeholder="Last Name"
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input 
            name="userName"
            value={username}
            placeholder="Username"
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    );
  }
}

export default RegisterUsersForm;
