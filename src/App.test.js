import React from 'react'
import ReactDOM from 'react-dom'
import WrapApp from "./App";

test('renders without crashing', () => {
 const div = document.createElement('div')
  ReactDOM.render(<WrapApp/>, div)
  ReactDOM.unmountComponentAtNode(div)
});
