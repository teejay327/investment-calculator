import React, { useState } from 'react';

import './UserInput.css';

const initialUserInput = {
  currentSavings: 10000,
  yearlyContribution: 1200,
  expectedReturn: 7,
  duration: 10
}

const UserInput = () => {
  const [userInput, setUserInput] = useState({ initialUserInput  });

  const submitHandler = event => {
    event.preventDefault();
    const financialData = {
      //currentSavings: current-savings
    }
    console.log('Submit')
  };

  const resetHandler = event => {
    setUserInput(initialUserInput);
  }

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
          [input]: value
      }
    });
  }

  return (
    <form onSubmit={ submitHandler } className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input onChange={(event) => inputChangeHandler('currentSavings', event.target.value)}
            value={ userInput['current-savings']}
            type="number"
            id="current-savings" />
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
          value={ userInput['expected-return']}
          type="number" 
          id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input onChange={(event) => inputChangeHandler('duration', event.target.value)} 
          value={ userInput['duration']}
          type="number" 
          id="duration" />
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