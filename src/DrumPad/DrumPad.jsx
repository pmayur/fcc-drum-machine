import React from "react";

import "./DrumPad.css";

class DrumPad extends React.Component {
    render() {
        return (
            <div
                className="drum-pad"
                id={this.props.idName + "-key"}
                onClick={ () => this.props.playEvent(this.props.idName)}
            >
                <h2>{this.props.idName}</h2>
                <audio
                    src={this.props.audioSource}
                    id={this.props.idName}
                    className="clip"
                />
            </div>
        );
    }
}

export default DrumPad;
