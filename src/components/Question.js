import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from '../components/Error';

const Question = ({ setBudget, setRemaining, setShowQuestion }) => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setAmount(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (amount < 1 || isNaN(amount)) {
      setError(true);
      return;
    }

    setError(false);
    setBudget(amount);
    setRemaining(amount);
    setShowQuestion(false);
  };

  return (
    <>
      <h2>Put your badget</h2>

      {error ? <Error message="The Budget is incorrect" /> : null}

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Put your badget"
          onChange={handleChange}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Define badget"
        />
      </form>
    </>
  );
};

Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRemaining: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired,
};

export default Question;
