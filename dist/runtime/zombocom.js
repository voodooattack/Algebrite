import { check_stack, top_level_eval } from './run';
import { double, integer } from '../sources/bignum';
import { makeList } from '../sources/list';
import { scan } from '../sources/scan';
import { defs, NIL, reset_after_error } from './defs';
import { init } from './init';
import { get_binding, symbol, usr_symbol } from './symbol';
if (!defs.inited) {
    defs.inited = true;
    init();
}
function parse_internal(argu) {
    if (typeof argu === 'string') {
        const [, u] = scan(argu);
        return u;
    }
    else if (typeof argu === 'number') {
        if (argu % 1 === 0) {
            return integer(argu);
        }
        else {
            return double(argu);
        }
    }
    else if (typeof argu.k === 'number') {
        // hey look its a U
        return argu;
    }
    else {
        console.warn('unknown argument type', argu);
        return symbol(NIL);
    }
}
export function parse(argu) {
    let data;
    try {
        data = parse_internal(argu);
        check_stack();
    }
    catch (error) {
        reset_after_error();
        throw error;
    }
    return data;
}
// exec handles the running ia JS of all the algebrite
// functions. The function name is passed in "name" and
// the corresponding function is pushed at the top of the stack
export function exec(name, ...argus) {
    let result;
    const fn = get_binding(usr_symbol(name));
    check_stack();
    const p1 = makeList(fn, ...argus.map(parse_internal));
    try {
        result = top_level_eval(p1);
        check_stack();
    }
    catch (error) {
        reset_after_error();
        throw error;
    }
    return result;
}
