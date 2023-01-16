import { cadr, Constants, U } from '../runtime/defs.js';
import { subtract } from './add.js';
import { integer } from './bignum.js';
import { conjugate } from './conj.js';
import { Eval } from './eval.js';
import { divide } from './multiply.js';
import { rect } from './rect.js';

/*
 Returns the coefficient of the imaginary part of complex z

  z    imag(z)
  -    -------

  a + i b    b

  exp(i a)  sin(a)
*/
const DEBUG_IMAG = false;

export function Eval_imag(p1: U) {
  return imag(Eval(cadr(p1)));
}

export function imag(p: U): U {
  const p1 = rect(p);
  const conj = conjugate(p1);
  const arg1 = divide(subtract(p1, conj), integer(2));
  const result = divide(arg1, Constants.imaginaryunit);

  if (DEBUG_IMAG) {
    console.log(`IMAGE of ${p1}`);
    console.log(` image: conjugate result: ${conj}`);
    console.log(` image: 1st divide result: ${arg1}`);
    console.log(` image: 2nd divide result: ${result}`);
  }

  return result;
}
