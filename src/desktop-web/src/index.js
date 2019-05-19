// @flow
import * as React from 'react'
import ReactDOM from 'react-dom'

export default function Root(): React.Node {
  return (
    <React.Fragment>
      <h2>Hello, from desktop app</h2>
    </React.Fragment>
  )
}

const rootElement: string = 'root'
const mountElement: HTMLElement | null = document.getElementById(
  rootElement,
)

if (mountElement !== null) {
  ReactDOM.render(React.createElement(Root), mountElement)
}
