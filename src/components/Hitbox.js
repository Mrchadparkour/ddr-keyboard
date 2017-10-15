import React, { Component } from 'react';
import { observer } from 'mobx-react';
import '../styles/Hitbox.css';


const Hitbox = observer(class Hitbox extends Component {
  componentDidMount() {
    this.props.store.animate();
  }
  render(){
    return(
      <div>
        <div className="Hitbox1"></div>
        <div className="Hitbox2"></div>
      </div>
    );
  }
})

export default Hitbox;
