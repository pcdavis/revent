import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import MyButton from './MyButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>REVENT3</h1>
        <Button primary>Primary</Button>
        <MyButton />
      </div>
    );
  }
}

export default App;
