import React from 'react';
import PropTypes from 'prop-types';

const ShoppingListForm = props => {
  const {
    addItem,
    handleChange,
    inputIsEmpty,
    inputValue,
    deleteLastItem,
    noItemsFound,
  } = props;

  return (
    <div>
      <h2>Shopping List</h2>
      <form onSubmit={event => addItem(event)}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={inputValue}
          onChange={event => handleChange(event)}
        />
        <button disabled={inputIsEmpty()}>Add</button>
      </form>
      <button onClick={() => deleteLastItem()} disabled={noItemsFound()}>
        Delete Last Item
      </button>
    </div>
  );
}

ShoppingListForm.propTypes = {
  addItem: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputIsEmpty: PropTypes.func.isRequired,
  inputValue: PropTypes.func.isRequired,
  deleteLastItem: PropTypes.func.isRequired,
  noItemsFound: PropTypes.func.isRequired,
}

export default ShoppingListForm;
