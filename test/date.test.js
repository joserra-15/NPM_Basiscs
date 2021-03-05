const date = require('../src/date');

// Date tests

test('gets current day', () => {
  // TODO implemente
  expect(date.getCurrentDay()).toBe(new Date().getDay());
});

test('gets current month', () => {
  // TODO implement
  expect(date.getCurrentMonth()).toBe(new Date().getMonth() + 1);
});

test('gets current year', () => {
  // TODO implement
  expect(date.getCurrentYear()).toBe(new Date().getFullYear());
});
