// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="main">
        <div className="jj">
          <h1 className="h">
            The Button has been clicked <span className="c">{count}</span> times
          </h1>
          <p className="p">Click the button to increase the count</p>
          <button className="b" onClick={this.increment}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
