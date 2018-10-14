import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import ShoppingList from './components/ShoppingList/ShoppingList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title="ReactND - Coding Practice" />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
