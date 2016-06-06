// A graphical analog clock
import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app"



const render = (model) => {
  ReactDOM.render(<App model={model} />, document.getElementById("app"))
}



setInterval(() => {
  const dateNow = new Date()
  const model = {
    clock: {
      hours: dateNow.getHours() % 12,
      minutes: dateNow.getMinutes(),
      seconds: dateNow.getSeconds(),
    }
  }
  render(model)
}, 1000)
