import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Hitbox from './components/Hitbox';

const App = observer(class App extends Component {
  componentDidMount() {
    this.props.store.recieveKeyStroke();
  }

  render() {
    const { chosenKey, togglePlaying, playerInput } = this.props.store;
    return (
      <div className="App">
        <Hitbox store={ this.props.store } />
        <p>{ `Hurry click this key ${chosenKey}` }</p>
        <button onClick={() => togglePlaying()}>
          Click to Play
        </button>
        <p>{ `You entered ${playerInput}` }</p>
      </div>
    );
  }
})

export default App;
