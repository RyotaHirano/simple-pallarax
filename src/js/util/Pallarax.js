import $ from 'jquery';
import TweenMax from 'gsap';

const range = 100;
const winH = $(window).height();
const scaleY = range / winH;

export default class Pallarax {
  constructor($el, duration) {
    this.$el = $el;
    this.height = $el.height();
    this.top = $el[0].offsetTop;
    this.duration = duration;
    this.y = this.getY();

    TweenMax.set(this.$el, {
      y: this.y
    });
  }

  getY() {
    const currentScrollTop = $(window).scrollTop();
    this.y = -(currentScrollTop) * scaleY;
  }

  scroll() {
    this.getY();
    TweenMax.to(this.$el, this.duration, {
      y: this.y
    });
  }
}
