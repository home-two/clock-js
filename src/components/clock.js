import React from "React"



export default class Clock extends React.Component {
  propT
  render () {
    const {
      hours,
      minutes,
      seconds,
    } = this.props


    const hourDegrees = (hours / 12) * 360
    const minDegrees = (minutes / 60) * 360
    const secDegrees = (seconds / 60) * 360

    const absoluteCenterStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
    }
    const handStyle = {
      ...absoluteCenterStyle,
      transformOrigin: "50% 100%",
      backgroundColor: "#eee",
    }
    const faceStyle = {
      position: "relative",
      width: 500,
      height: 500,
      backgroundColor: "#222",
      borderRadius: "50%"
    }
    const pinStyle = {
      ...absoluteCenterStyle,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "red",
      transform: "translate(-50%, -50%)",
    }
    const hourStyle = {
      ...handStyle,
      width: 20,
      height: 100,
      transform: `translate(-50%, -100%) rotate(${hourDegrees}deg)`,
    }
    const minStyle = {
      ...handStyle,
      width: 10,
      height: 240,
      transform: `translate(-50%, -100%) rotate(${minDegrees}deg)`,
    }
    const secStyle = {
      ...handStyle,
      width: 3,
      height: 240,
      transform: `translate(-50%, -100%) rotate(${secDegrees}deg)`,
    }
    return (
      <div style={faceStyle}>
        <div style={hourStyle}>{hours}</div>
        <div style={minStyle}>{minutes}</div>
        <div style={secStyle}>{seconds}</div>
        <div style={pinStyle}></div>
      </div>
    )
  }
}
