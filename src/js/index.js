import $ from 'jquery';
import Pallarax from './util/Pallarax';

const initPallarax = () => {
  const $elem01 = $('.js-pallarax--01');
  const p_01 = new Pallarax($elem01, 0.6);
  const $elem02 = $('.js-pallarax--02');
  const p_02 = new Pallarax($elem02, 0.1);

  $(window).on('scroll', () => {
    p_01.scroll();
    p_02.scroll();
  });
};

const init = () => {
  initPallarax();
};
init();
