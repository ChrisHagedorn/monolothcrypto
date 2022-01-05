import React, { Component } from "react";
import "./App.css";

// Import your audio file
import song from "./static/audio.mp3";

class Music extends Component {
    // Create state
    state = {

        // Get audio file in a variable
        audio: new Audio(song),

        // Set initial state of song
        isPlaying: false,
    };

    // Main function to handle both play and pause operations
    playPause = () => {

        // Get state of song
        let isPlaying = this.state.isPlaying;

        if (isPlaying) {
            // Pause the song if it is playing
            this.state.audio.pause();
        } else {

            // Play the song if it is paused
            this.state.audio.play();
        }

        // Change the state of song
        this.setState({ isPlaying: !isPlaying });
    };

    render() {
        return (
            <div className="audio-container">
                <p className="musicState">
                    {this.state.isPlaying ?
                        "MUSIC STATUS: ONLINE" :
                        "MUSIC STATUS: OFFLINE"}
                </p>


                {/* Button to call our main function */}
                <button
                    className="button"
                    onClick={this.playPause}>
                    {this.state.isPlaying ?
                     "STOP MUSIC" :
                     "PLAY MUSIC"}
                </button>

                {/*Used for opensea link*/}
                <a className="viewOpenSea"
                    href="https://opensea.io/assets/0xfb3765e0e7ac73e736566af913fa58c3cfd686b7/9737" target="_blank">VIEW ON OPENSEA</a>

            </div>
        );
    }
}


export default Music;