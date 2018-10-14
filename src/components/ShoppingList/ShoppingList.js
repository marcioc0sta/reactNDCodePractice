import React, {Component} from 'react';

import ShoppingListForm from '../ShoppingListForm/ShoppingListForm';
import ItemsList from '../ItemsList/ItemsList';

class ShoppingList extends Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render () {
    const { items } = this.state;
    return (
      <div>
        <ShoppingListForm
          addItem={this.addItem}
          handleChange={this.handleChange}
          inputIsEmpty={this.inputIsEmpty}
          inputValue={this.state.value}
          deleteLastItem={this.deleteLastItem}
          noItemsFound={this.noItemsFound}
        />
        <ItemsList items={items} />
      </div>
    )
  }
}

export default ShoppingList;
