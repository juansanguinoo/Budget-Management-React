import React, { useState } from 'react';
import Error from '../components/Error';

const Question = () => {
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

export default Question;
