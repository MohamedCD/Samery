import React, { Component } from "react"
import {Howl} from 'howler'

const audioClips = [
  {sound: "https://www.fesliyanstudios.com/play-mp3/645", label: "button1"},
  {sound: "https://www.fesliyanstudios.com/play-mp3/2886", label: "button2"}
]

class Audio extends Component {
  soundPlay = (src) => {
    const sound = new Howl ({
      src,
      html5: true
    })
    sound.play()
  }
  
  RenderButtonSound = () => {
    return audioClips.map((soundObj, index) => {
      return (
        <button key={index} onClick={() => this.soundPlay(soundObj.sound)}>
          {soundObj.label}
        </button>
      )
    }
  )}

  render(){
      return (
        <> 
            {this.RenderButtonSound}
        </>
      )
  }
}

export default Audio