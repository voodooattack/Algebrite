import { Cons, Sym, Tensor, U } from '../runtime/defs.js';
export declare function evaluate_integer(p: U): number;
export declare function Eval(p1: U): U;
export declare function Eval_sym(p1: Sym): U;
export declare function Eval_cons(p1: Cons): U;
export declare function Eval_binding(p1: U): U;
export declare function Eval_check(p1: U): U;
export declare function Eval_det(p1: U): U;
export declare function Eval_dim(p1: U): U;
export declare function Eval_divisors(p1: U): U;
export declare function Eval_do(p1: U): U;
export declare function Eval_dsolve(p1: U): void;
export declare function Eval_Eval(p1: U): U;
export declare function Eval_exp(p1: U): U;
export declare function Eval_factorial(p1: U): U;
export declare function Eval_factorpoly(p1: U): U;
export declare function Eval_hermite(p1: U): U;
export declare function Eval_hilbert(p1: U): U;
export declare function Eval_index(p1: U): U;
export declare function Eval_inv(p1: U): Sym | Tensor<U>;
export declare function Eval_invg(p1: U): Tensor<U>;
export declare function Eval_isinteger(p1: U): U;
export declare function Eval_number(p1: U): import("../runtime/defs.js").Num;
export declare function Eval_operator(p1: U): U;
export declare function Eval_quote(p1: U): U;
export declare function Eval_rank(p1: U): import("../runtime/defs.js").Num;
export declare function Eval_setq(p1: U): U;
export declare function Eval_sqrt(p1: U): U;
export declare function Eval_stop(): never;
export declare function Eval_subst(p1: U): U;
export declare function Eval_unit(p1: U): U;
export declare function Eval_predicate(p1: U): U;
export declare function evalList(p1: U): Generator<U, void, unknown>;