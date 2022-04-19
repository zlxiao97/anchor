export const isAmount = (value) => /^[+-]?([0-9]*[.])?[0-9]*$/g.test(value);

export const compose =
  (...fns) =>
    (arg) =>
      fns.reduce((composed, f) => f(composed), arg);