import React from "react"
import Clock from "./clock"



export default class App extends React.Component {
  render () {
    const {
      model: {
        clock: {
          hours,
          minutes,
          seconds,
        }
      }
    } = this.props
    return (
      <div>
      <Clock hours={hours} minutes={minutes} seconds={seconds} />
      </div>
    )
  }
}
