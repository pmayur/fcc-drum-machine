import React from "react";
import "./App.css";

import DrumMachine from './DrumMachine/DrumMachine.jsx'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>FCC Drum Machine</h1>
                <DrumMachine />
            </div>
        );
    }
}

export default App;
