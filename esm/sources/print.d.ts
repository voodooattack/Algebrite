import { BaseAtom, Sym, U } from '../runtime/defs.js';
export declare function Eval_print(p1: U): Sym;
export declare function Eval_print2dascii(p1: U): Sym;
export declare function Eval_printcomputer(p1: U): Sym;
export declare function Eval_printlatex(p1: U): Sym;
export declare function Eval_printhuman(p1: U): Sym;
export declare function Eval_printlist(p1: U): Sym;
export declare function print_str(s: string): string;
export declare function collectLatexStringFromReturnValue(p: BaseAtom): string;
export declare function printline(p: BaseAtom): string;
export declare function print_expr(p: BaseAtom): string;
export declare function print_list(p: BaseAtom): string;
