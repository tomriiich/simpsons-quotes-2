import React from 'react';
import './App.css';
import axios from 'axios';
import DisplaySimpsonsQuotes from './components/DisplaySimpsonsQuotes';

const sampleSimpson = {
  quote: "Inflammable means flammable? What a country!",
  character: "Dr. Nick",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084",
  characterDirection: "Right"
  };

function App() {

  const [simpson, setSimpson] = React.useState(sampleSimpson);

  const getSimpson = () => {
    // Send the request
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    // Extract the DATA from the received response
    .then((response) => response.data)
    // Use this data to update the state
    .then((data) => {
      // console.log(data);
      setSimpson(data[0]);
    });
  };

  return (
    <div className="App">
      <DisplaySimpsonsQuotes simpson={simpson} />
      <button type="button" onClick={getSimpson}>Get a Simpson quote</button>
    </div>
  );
}

export default App;
