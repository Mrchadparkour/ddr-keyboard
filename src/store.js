import React from 'react';
import { extendObservable, computed, action, autorun } from 'mobx';
const arrOfKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                   'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export class store {
  constructor(){
    extendObservable(this, {
      chosenKey: "a",
      isPlaying: false,
      togglePlaying: action(() => {
        this.isPlaying = !this.isPlaying;
        this.playGame();
      }),
      playGame: action(() => {
          if (this.isPlaying) {
            setTimeout(() => {
              this.choseKey()
              this.playGame();
            }, 2000);
          }
      }),
      choseKey: action(() => {
        let idx = Math.floor(Math.random() * 25);
        this.chosenKey = arrOfKeys[idx];
      })

    })
  }
}

export default new store();
