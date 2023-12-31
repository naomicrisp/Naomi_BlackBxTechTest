import './App.css';
import { React, useState } from "react";

function App() {
  const [numbersList, setNumbersList] = useState([]);
 
  async function displayNumbers() {
    try {
      // Fetch numbers from local API
      const response = await fetch("http://localhost:3000/numbers"); // Use "http" instead of "https"
      const numbers = await response.json();
      setNumbersList(numbers);
  
    } 
    catch (error) {
    console.error("Error fetching numbers:", error);
    }
  }

  return (
    <div className="App">
      <h1>FizzBuzz</h1>
      <p>Click the button to make fizz buzz happen </p>
      <button onClick={displayNumbers}>FizzBuzz</button>
     
    
        { numbersList && numbersList.map((number, index) => (
          <p className="numbers" key={index}>{number}</p>
        ))}
    
  
    </div>
  );
}

export default App;
