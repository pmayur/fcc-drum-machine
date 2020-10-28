import React from "react";

import "./DrumMachine.css";

import DrumPad from "../DrumPad/DrumPad.jsx";

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sounds: {
                Q:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/73[kb]8bitkit-hit-2.wav.mp3",
                W:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/10[kb]8bitkit-hit-3.wav.mp3",
                E:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/12[kb]8bitkit-hit-4.wav.mp3",

                A:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/6[kb]8bitkit-hit-5.wav.mp3",
                S:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/6[kb]8bitkit-hit-6.wav.mp3",
                D:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/16[kb]8bitkit-hit-7.wav.mp3",

                Z:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/12[kb]8bitkit-hit-8.wav.mp3",
                X:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/6[kb]8bitkit-hit-9.wav.mp3",
                C:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/8%20Bit%20Videogame%20Kit/8[kb]8bitkit-hit-10.wav.mp3",
            },

            displayText: "",
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
    }

    handlePlay(key) {
        this.setState({
            displayText: key.toUpperCase(),
        });
        document.getElementById(key.toUpperCase()).play();
    }

    handleKeyPress(e) {
        if (e.key.toUpperCase() in this.state.sounds) {
            this.handlePlay(e.key);
        }
    }

    componentWillUnmount() {
        document.removeEventListener("keypress", this.handleKeyPress);
    }

    render() {
        const KEYS = Object.keys(this.state.sounds);
        let drumPads = KEYS.map((key) => {
            return (
                <DrumPad
                    key={key}
                    idName={key}
                    audioSource={this.state.sounds[key]}
                    playEvent={this.handlePlay}
                />
            );
        });

        document.addEventListener("keypress", this.handleKeyPress);

        return (
            <div id="drum-machine">
                <div id="display">{this.state.displayText + " playing"}</div>
                <div id="drum-pads">{drumPads}</div>
            </div>
        );
    }
}

export default DrumMachine;
