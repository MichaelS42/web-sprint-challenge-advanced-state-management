import React from "react";
import "./App.css";
import SmurfList from './SmurfList';
import Smurf from './Smurf';

function App(){
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfList />
        <Smurf />
      </div>
    );
}

export default App;
