import { extendObservable, action } from 'mobx';
import { crossTarget, hide, confirmClick } from './animation';
const arrOfKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
                   'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export class store {
  constructor(){
    extendObservable(this, {
      chosenKey: "",
      playerInput: "",
      percentWin: 0,
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
          if (!correct && this.pos2 < 100) {
            this.pos1 = this.pos2;
            this.pos2++;
            crossTarget(this.pos1, this.pos2);
            setTimeout(() => {
              this.playGame();
            }, 20);
          } else if (correct) {
              confirmClick();
              this.getAccuracy(this.pos2);
              alert(this.percentWin);
              this.resetPos();
           } else if (this.pos2 === 100){
              alert('0% success');
              hide();
          }

      }),
      getAccuracy: action((pos) => this.percentWin = (pos === 54 || pos === 44) ? '10% success' : `${100 - ((Math.abs(49 - pos)) * 20)}% success`),
      choseKey: action(() => this.chosenKey = arrOfKeys[Math.floor(Math.random() * 25)]),
      resetPos: action(() => {
        this.pos1 = 0;
        this.pos2 = 0;
      })

    })
  }
}

export default new store();
