import { car, cdr, defs, doexpand, iscons, U } from '../runtime/defs.js';
import { Eval } from './eval.js';
import { gcd } from './gcd.js';
import { divide, inverse } from './multiply.js';

// Find the least common multiple of two expressions.
export function Eval_lcm(p1: U) {
  p1 = cdr(p1);
  let result = Eval(car(p1));
  if (iscons(p1)) {
    result = p1.tail().reduce((a: U, b: U) => lcm(a, Eval(b)), result);
  }
  return result;
}

export function lcm(p1: U, p2: U): U {
  return doexpand(yylcm, p1, p2);
}

function yylcm(p1: U, p2: U): U {
  return inverse(divide(divide(gcd(p1, p2), p1), p2));
}
