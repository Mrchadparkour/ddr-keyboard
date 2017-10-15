import { TweenLite } from 'gsap';

let top1 = 0;
let left1 = 50;
let top2 = 50;
let left2 = 0;

export const crossTarget = () => {

  TweenLite.fromTo('.Hitbox1', 2, {top: 0, left: '50vw'}, {top: '90vh'});
  TweenLite.fromTo('.Hitbox2', 2, {top: '50vh', left: 0}, {left: '90vw'});
}
