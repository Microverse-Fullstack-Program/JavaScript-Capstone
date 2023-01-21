import commentCounter from './commentCounter.js';

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