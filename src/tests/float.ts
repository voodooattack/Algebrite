import { run_test } from '../test-harness.js';

run_test([
  '1.0+0',
  '1.0',

  '1+0.0',
  '1.0',

  '1+0.0-0.0',
  '1.0',

  'float(0)',
  '0.0',

  '1-float(0)',
  '1.0',

  'float(x)',
  'x',

  'float(1/2)',
  '0.5',

  'float(pi)',
  '3.141593...',

  'float(exp(1))',
  '2.718282...',

  'float(sin(2))',
  '0.909297...',

  'float(cos(2))',
  '-0.416147...',

  'x=[1/2,1/4]',
  '',

  'float(x)',
  '[0.5,0.25]',

  'x',
  '[1/2,1/4]',

  'x=quote(x)',
  '',

  'float((1+2*i)^(1/2))',
  '1.272020...+0.786151...*i',

  'float((1+2*(-1)^(1/2))^(1/2))',
  '1.272020...+0.786151...*i',

  'float((-1)^(-0.666667+0.0291367/pi))',
  '-0.474559...-0.880224...*i',

  'abs(float((-1)^(-0.666667+0.0291367/pi)))',
  '1.0',

  // using float with an array
  'a = [2,3,4]',
  '',

  'float(a[1])',
  '2.0',

  'a=quote(a)',
  '',
]);
