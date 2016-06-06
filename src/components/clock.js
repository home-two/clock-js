import React from "React"



export default class Clock extends React.Component {
  propT
  render () {
    const {
      hours,
      minutes,
      seconds,
    } = this.props
    return (
      <div>
        <div>{hours}</div>
        <div>{minutes}</div>
        <div>{seconds}</div>
      </div>
    )
  }
}
