import React, { useState } from 'react';
import ResultsTable from './components/ResultsTable';
import UserInput from './components/UserInput';
import Header from './components/Header';

function App() {
  const [results, setResults] = useState(null);
  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setResults(yearlyData);
  };

  return (
    <div>
      <Header />

      <UserInput onCalculate={ calculateHandler }/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <ResultsTable />

    </div>
  );
}

export default App;
