import { extendObservable, action } from 'mobx';
import { crossTarget } from './animation';
const arrOfKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
                   'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export class store {
  constructor(){
    extendObservable(this, {
      chosenKey: "",
      playerInput: "",
      pos1:0,
      pos2: 0,
      togglePlaying: action(() => {
        this.resetPos();
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
          const correct = this.chosenKey === this.playerInput;
          if (!correct && this.pos2 < 20) {
            this.pos1 = this.pos2;
            this.pos2++;
            crossTarget(this.pos1, this.pos2);
            setTimeout(() => {
              this.playGame();
            }, 100);
          } else if (correct) {
              alert('Nice work!');
              this.resetPos();
          }

      }),
      choseKey: action(() => this.chosenKey = arrOfKeys[Math.floor(Math.random() * 25)]),
      resetPos: action(() => {
        this.pos1 = 0;
        this.pos2 = 0;
      })

    })
  }
}

export default new store();
