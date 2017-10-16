import { TweenLite } from 'gsap';

let top1 = 0;
let left1 = 50;
let top2 = 50;
let left2 = 0;

export const crossTarget = (t1, l1, t2, l2) => {
  TweenLite.fromTo('.Hitbox1', .1, {top: (t2 * 5) + 'vh', left: '50vw'}, {top: (t1 * 5) + 'vh'});
  TweenLite.fromTo('.Hitbox2', .1, {left: (l2 * 5) + 'vw', top: '50vh'}, {left: (l1 * 5) + 'vw'});
}
