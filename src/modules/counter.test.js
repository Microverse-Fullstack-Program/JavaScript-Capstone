/**
 * @jest-environment jsdom
 */

import { objectsCounter, commentCounter, reserveCounter } from './counter.js';

describe('test on itemCounter', () => {
  test('counting 1 node element', () => {
    document.body.innerHTML = `
        <div class="content-Wrapper">
          <div class="item"><p>1</p></div>
        </div>`;
    expect(objectsCounter()).toBe(1);
  });
  test('counting 0 node element', () => {
    document.body.innerHTML = '<div class="content-Wrapper"> </div>';
    expect(objectsCounter()).toBe(0);
  });
  test('counting 5 node element', () => {
    document.body.innerHTML = `
    <div class="content-Wrapper">
      <div class="item"><p>1</p></div>
      <div class="item"><p>2</p></div>
      <div class="item"><p>3</p></div>
      <div class="item"><p>4</p></div>
      <div class="item"><p>5</p></div>
    </div>`;
    expect(objectsCounter()).toBe(5);
  });
});

describe('test on commentCounter function', () => {
  test('No comment', () => {
    document.body.innerHTML = `
          <div class="feedback"></div>`;
    expect(commentCounter()).toBe(0);
  });

  test('counting 1 comment', () => {
    document.body.innerHTML = `
        <div class="feedback"><p>1</p></div>`;
    expect(commentCounter()).toBe(1);
  });

  test('counting 5 comments', () => {
    document.body.innerHTML = `
        <div class="feedback">
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>`;
    expect(commentCounter()).toBe(5);
  });
});

describe('test on commentCounter function', () => {
  test('No comment', () => {
    document.body.innerHTML = `
          <div class="reservation"></div>`;
    expect(reserveCounter()).toBe(0);
  });

  test('counting 1 comment', () => {
    document.body.innerHTML = `
        <div class="reservation"><p>1</p></div>`;
    expect(reserveCounter()).toBe(1);
  });

  test('counting 5 comments', () => {
    document.body.innerHTML = `
        <div class="reservation">
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>`;
    expect(reserveCounter()).toBe(5);
  });
});