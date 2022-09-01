import { ARCSINH, cadr, car, Constants, isdouble, SINH } from '../runtime/defs';
import { symbol } from "../runtime/symbol";
import { double } from './bignum';
import { Eval } from './eval';
import { isZeroAtomOrTensor } from './is';
import { makeList } from './list';
//            exp(x) - exp(-x)
//  sinh(x) = ----------------
//                   2
export function Eval_sinh(p1) {
    return ysinh(Eval(cadr(p1)));
}
export function ysinh(p1) {
    if (car(p1) === symbol(ARCSINH)) {
        return cadr(p1);
    }
    if (isdouble(p1)) {
        let d = Math.sinh(p1.d);
        if (Math.abs(d) < 1e-10) {
            d = 0.0;
        }
        return double(d);
    }
    if (isZeroAtomOrTensor(p1)) {
        return Constants.zero;
    }
    return makeList(symbol(SINH), p1);
}
