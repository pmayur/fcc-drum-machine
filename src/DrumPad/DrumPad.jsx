import React from "react";

import "./DrumPad.css";

class DrumPad extends React.Component {
    render() {
        return (
            <div className="drum-pad" id={this.props.idName}>
                <h2>{this.props.idName}</h2>
            </div>
        );
    }
}

export default DrumPad;
