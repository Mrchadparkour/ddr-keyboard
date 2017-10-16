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
      top1:0,
      left1:0,
      left2:0,
      top2: 0,
      togglePlaying: action(() => {
        this.top1 = 0;
        this.left1 = 0;
        this.top2 = 0;
        this.left2 = 0;
        this.choseKey();
        this.playGame();
      }),
      recieveKeyStroke: action(() => {
        this.playerInput = "";
        window.addEventListener('keydown', (e) => {
          e.preventDefault();
          this.playerInput = String.fromCharCode(e.keyCode);
        })
      }),
      playGame: action(() => {
          if (this.chosenKey !== this.playerInput && this.top1 < 20) {
            this.top2 = this.top1;
            this.left2 = this.left;
            this.top1++;
            this.left1++;
            crossTarget(this.top1, this.left1, this.top2, this.left2);
            setTimeout(() => {
              this.playGame();
            }, 100);
          } else if (this.chosenKey === this.playerInput ) {
              alert('Nice work!')
              this.top1 = 0;
              this.left1 = 0;
              this.top2 = 0;
              this.left2 = 0;
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
    })
  }
}

export default new store();
