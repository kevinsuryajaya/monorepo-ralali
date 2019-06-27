// @flow
import * as React from 'react'
import ReactDOM from 'react-dom'

/**
 * @returns React
 */
export default function Root(): React.Node {
  return (
    <React.Fragment>
      <h2>Welcome, from mobile web</h2>
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
