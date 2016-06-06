// A graphical analog clock
import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app"



const render = (model) => {
  ReactDOM.render(<App model={model} />, document.getElementById("app"))
}

const calcClock = () => {
  const dateNow = new Date()
  return {
    hours: dateNow.getHours() % 12,
    minutes: dateNow.getMinutes(),
    seconds: dateNow.getSeconds(),
  }
}


setInterval(() => {
  const dateNow = new Date()
  const model = {
    clock: calcClock(),
  }
  render(model)
}, 1000)
