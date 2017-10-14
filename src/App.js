import React, { Component } from 'react';
import { observer } from 'mobx-react';

const App = observer(class App extends Component {

  render() {
    return (
      <div className="App">
        <p>{ `Hurry click this key ${this.props.store.chosenKey}` }</p>
        <button onClick={() => this.props.store.togglePlaying()}>
          Click to Play
        </button>
      </div>
    );
  }
})

export default App;
