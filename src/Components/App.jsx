import React from "react";
import "./App.css";

function App() {
  return <Clock />;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date(),
    };
    let timer = setInterval(() => {
      this.setState((state) => ({
        now: new Date(),
      }));
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <p>
          {this.state.now.getHours()}&nbsp;: &nbsp;{this.state.now.getMinutes()}
          &nbsp;: &nbsp;{this.state.now.getSeconds()}
        </p>
      </div>
    );
  }
}

export default App;
