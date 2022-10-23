import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import Error from './Error';

const Form = ({ setExpense, setCreateExpense }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (quantity < 1 || isNaN(quantity) || name.trim() === '') {
      setError(true);
      return;
    }
    setError(false);

    const expense = {
      name,
      quantity,
      id: shortid.generate(),
    };

    setExpense(expense);
    setCreateExpense(true);

    setName('');
    setQuantity(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add your expenses here</h2>

      {error ? (
        <Error message="Both fields are required or incorrect budget" />
      ) : null}

      <div className="camp">
        <label>Expense name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="E.g. Transport"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="camp">
        <label>Expense Amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="E.g. 300"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add expense"
      />
    </form>
  );
};

Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setCreateExpense: PropTypes.func.isRequired,
};

export default Form;
