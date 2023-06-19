import React, { useState } from 'react';

import './UserInput.css';

const UserInput = () => {
  const [userInput, yearlyContribution, expectedReturn, duration] = useState({
    currentSavings: 10000,
    yearlyContribution: 1200,
    expectedReturn: 7,
    duration: 10
 });

  const submitHandler = event => {
    event.preventDefault();
    const financialData = {
      //currentSavings: current-savings
    }
    console.log('Submit')
  };

  const resetHandler = event => {
    console.log('Reset');
  }

  const inputChangeHandler = (input, value) => {
    console.log(input, value);
  }

  return (
    <form onSubmit={ submitHandler } className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input onChange={(event) => inputChangeHandler('currentSavings', event.target.value)}
           type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} 
          type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input onChange={(event) => inputChangeHandler('expected-return', event.target.value)} 
          type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input onChange={(event) => inputChangeHandler('duration', event.target.value)} 
          type="number" id="duration" />
        </p>
      </div>
      <p className="actions">
        <button onClick={ resetHandler } type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  )
}

export default UserInput;