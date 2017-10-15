import { extendObservable, action } from 'mobx';
import { crossTarget } from './animation';
const arrOfKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
                   'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export class store {
  constructor(){
    extendObservable(this, {
      chosenKey: "",
      playerInput: "",
      isPlaying: false,
      score: 0,
      left1:50,
      top1:0,
      left2:0,
      top2: 50,
      togglePlaying: action(() => {
        this.isPlaying = !this.isPlaying;
        this.playGame();
      }),
      recieveKeyStroke: action(() => {
        this.playerInput = "";
        window.addEventListener('keydown', (e) => {
          e.preventDefault();
          this.playerInput = String.fromCharCode(e.keyCode);
          this.scorePoint();
        })
      }),
      playGame: action(() => {
          if (this.isPlaying) {
            setTimeout(() => {
              this.choseKey();
              this.playGame();
            }, 2000);
          }
      }),
      scorePoint: action(() => {
        if (this.chosenKey === this.playerInput) {
          this.score++;
          return true;
        } else if (this.playerInput !== "") {
          return false;
        }else {
          return true;
        }
      }),
      choseKey: action(() => {
        let idx = Math.floor(Math.random() * 25);
        this.chosenKey = arrOfKeys[idx];
      }),
      animate: action(() => crossTarget())

    })
  }
}

export default new store();
