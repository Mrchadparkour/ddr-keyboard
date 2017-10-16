import { TweenLite } from 'gsap';

export const crossTarget = (p1, p2) => {
  TweenLite.fromTo('.Hitbox1', .1, {top: (p1 * 5) + 'vh', left: '50vw'}, {top: (p2 * 5) + 'vh'});
  TweenLite.fromTo('.Hitbox2', .1, {left: (p1 * 5) + 'vw', top: '50vh'}, {left: (p2 * 5) + 'vw'});
}
