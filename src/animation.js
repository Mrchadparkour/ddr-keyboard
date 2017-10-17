import { TweenLite, TimelineLite } from 'gsap';

export const crossTarget = (p1, p2) => {
  TweenLite.fromTo('.Hitbox1', .01, {scale: 1, opacity:1, top: (p1 * 1.1) + 'vh', left: '50vw'}, {top: (p2 * 1.1) + 'vh'});
  TweenLite.fromTo('.Hitbox2', .01, {opacity:1, left: (p1 * .985) + 'vw', top: '50vh'}, {left: (p2 * .985) + 'vw'});

}
export const hide = () => {
  TweenLite.to('.Hitbox1', 0, {display: "none"});
  TweenLite.to('.Hitbox2', 0, {display: "none"});
}

export const confirmClick = () => {
  const timeline = new TimelineLite();
      timeline.to('.Hitbox1', .2, {scale: 1.5})
              .to('.Hitbox1', .4, {opacity: 0.0, top: -100})
              .to('.Hitbox2', .4, {opacity: 0.0, top: -100}, '-=.4');
}
