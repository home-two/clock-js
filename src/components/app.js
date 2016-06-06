
import React from "react"

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
        <div>{hours}</div>
        <div>{minutes}</div>
        <div>{seconds}</div>
      </div>
    )
  }
}
