import React from "React"



export default class Clock extends React.Component {
  propT
  render () {
    const {
      hours,
      minutes,
      seconds,
    } = this.props
    
    const hourDegrees = 90
    const minDegrees = 180
    const secDegrees = 270

    const faceStyle = {
      width: 500,
      height: 500,      
      backgroundColor: "#222",
      borderRadius: "50%"
    }
    const hourStyle = {
      width: 10,
      height: 250,
      transformOrigin: "50% 100%",
      transform: "translate(250px, 0) rotate(77deg)",
      backgroundColor: "#eee",
    }
    const minStyle = {

    }
    const secStyle = {

    }
    return (
      // container div that's a black circle 500 diameter
      // nested inside 3 divs: hr, min, sec
      <div style={faceStyle}>
        <div style={hourStyle}>{hours}</div>
        <div style={minStyle}>{minutes}</div>
        <div style={secStyle}>{seconds}</div>
      </div>
    )
  }
}
