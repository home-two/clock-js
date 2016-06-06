import React from "React"



export default class Clock extends React.Component {
  propT
  render () {
    const {
      hours,
      minutes,
      seconds,
    } = this.props


    const absoluteStyle = {
      position: "absolute",
      top: 0,
      left: 0,
    }

    const hourDegrees = (hours / 12) * 360
    const minDegrees = (minutes / 60) * 360
    const secDegrees = (seconds / 60) * 360
  
    // TODO Fix alignment on hands with width greater than 1px.

    const faceStyle = {
      position: "relative",
      width: 500,
      height: 500,
      backgroundColor: "#222",
      borderRadius: "50%"
    }
    const pinStyle = {
      ...absoluteStyle,
      width: 1,
      height: 1,
      borderRadius: "50%",
      backgroundColor: "red",
      transform: "translate(0px, 0px)",
      top: "50%",
      left: "50%",
    }
    const hourStyle = {
      ...absoluteStyle,
      width: 20,
      height: 100,
      transformOrigin: "50% 100%",
      transform: `translate(250px, 150px) rotate(${hourDegrees}deg)`,
      backgroundColor: "#eee",
    }
    const minStyle = {
      ...absoluteStyle,
      width: 10,
      height: 240,
      transformOrigin: "50% 100%",
      transform: `translate(250px, 10px) rotate(${minDegrees}deg)`,
      backgroundColor: "#eee",
    }
    const secStyle = {
      ...absoluteStyle,
      width: 1,
      height: 250,
      transformOrigin: "50% 100%",
      transform: `translate(250px, 0px) rotate(${secDegrees}deg)`,
      backgroundColor: "#eee",
    }
    return (
      // container div that's a black circle 500 diameter
      // nested inside 3 divs: hr, min, sec
      <div style={faceStyle}>
        <div style={hourStyle}>{hours}</div>
        <div style={minStyle}>{minutes}</div>
        <div style={secStyle}>{seconds}</div>
        <div style={pinStyle}></div>
      </div>
    )
  }
}
