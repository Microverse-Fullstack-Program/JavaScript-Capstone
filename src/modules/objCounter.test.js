/**
 * @jest-environment jsdom
 */

import objectsCounter from './objCounter.js';

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