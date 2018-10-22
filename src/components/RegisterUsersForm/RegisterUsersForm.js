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
      if (user.userName === currentUserName) {
        return true;
      }
    }
    return false;
  };

  SubmitForm = event => {
    event.preventDefault();
    const { user } = this.state;
    const { OnRegisterUser } = this.props;
    const isUnique = this.userIsUnique(user.userName);

    if (!isUnique) {
      OnRegisterUser(user)
    }

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

  isFormEmpy() {
    const { firstName, lastName, userName, } = this.state.user;
    return firstName === '' || lastName === '' || userName === '';
  }

  render() {
    const { firstName, lastName, userName } = this.state.user;
    const { isUnique } = this.state;

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
            value={userName}
            placeholder="Username"
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <div>
          {!isUnique ? 
            (<button disabled={this.isFormEmpy()}>Add</button>) : 
            <p>The username is Already used</p>
          }
        </div>
      </form>
    );
  }
}

export default RegisterUsersForm;
