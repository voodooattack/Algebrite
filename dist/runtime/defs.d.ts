import bigInt from 'big-integer';
export declare function breakpoint(): void;
export declare const version = "2.0.1";
export declare const NSYM = 1000;
export declare const DEBUG = false;
export declare const PRINTOUTRESULT = false;
export declare const PRINTMODE_LATEX = "PRINTMODE_LATEX";
export declare const PRINTMODE_2DASCII = "PRINTMODE_2DASCII";
export declare const PRINTMODE_COMPUTER = "PRINTMODE_COMPUTER";
export declare const PRINTMODE_HUMAN = "PRINTMODE_HUMAN";
export declare const PRINTMODE_LIST = "PRINTMODE_LIST";
export type PrintMode = typeof PRINTMODE_LATEX | typeof PRINTMODE_2DASCII | typeof PRINTMODE_COMPUTER | typeof PRINTMODE_HUMAN | typeof PRINTMODE_LIST;
declare class Defs {
    printMode: PrintMode;
    recursionLevelNestedRadicalsRemoval: number;
    errorMessage: string;
    symbolsDependencies: {
        [key: string]: string[];
    };
    symbolsHavingReassignments: string[];
    symbolsInExpressionsWithoutAssignments: string[];
    patternHasBeenFound: boolean;
    inited: boolean;
    chainOfUserSymbolsNotFunctionsBeingEvaluated: Sym[];
    stringsEmittedByUserPrintouts: string;
    called_from_Algebra_block: boolean;
    expanding: boolean;
    evaluatingAsFloats: boolean;
    evaluatingPolar: boolean;
    esc_flag: boolean;
    trigmode: 0 | 1 | 2;
    out_count: number;
    test_flag: boolean;
    codeGen: boolean;
    userSimplificationsInListForm: U[];
    userSimplificationsInStringForm: string[];
    fullDoubleOutput: boolean;
}
export declare const defs: Defs;
export declare const dontCreateNewRadicalsInDenominatorWhenEvalingMultiplication = true;
export declare const do_simplify_nested_radicals = true;
export declare const avoidCalculatingPowersIntoArctans = true;
export declare abstract class BaseAtom {
    abstract readonly k: number;
    toString(): string;
    toLatexString(): string;
}
export declare class Cons extends BaseAtom {
    readonly cons: {
        car: U;
        cdr: U;
    };
    k: typeof CONS;
    constructor(car: U, cdr: U);
    [Symbol.iterator](): Generator<U, void, unknown>;
    tail(): U[];
    map(f: (a: U) => U): Cons;
}
export declare class Num extends BaseAtom {
    a: bigInt.BigInteger;
    b: bigInt.BigInteger;
    readonly q: Num;
    k: typeof NUM;
    constructor(a: bigInt.BigInteger, b?: bigInt.BigInteger);
    __ts_sign?: -1 | 0 | 1;
    __ts_integer?: boolean;
    __ts_special?: number;
}
export declare class Double extends BaseAtom {
    d: number;
    k: typeof DOUBLE;
    constructor(d: number);
    __ts_sign?: -1 | 0 | 1;
    __ts_integer?: boolean;
    __ts_special?: number;
}
export declare class Str extends BaseAtom {
    str: string;
    k: typeof STR;
    constructor(str: string);
}
export declare class Tensor<T extends U = U> extends BaseAtom {
    readonly tensor: this;
    k: typeof TENSOR;
    ndim: number;
    dim: number[];
    elem: T[];
    get nelem(): number;
}
export declare class Sym extends BaseAtom {
    printname: string;
    k: typeof SYM;
    latexPrint?: string;
    constructor(printname: string);
    keyword: (p1: Cons) => U;
}
export type U = Cons | Num | Double | Str | Tensor | Sym;
export declare const CONS = 0;
export declare const NUM = 1;
export declare const DOUBLE = 2;
export declare const STR = 3;
export declare const TENSOR = 4;
export declare const SYM = 5;
export declare const ABS = "abs";
export declare const ADD = "add";
export declare const ADJ = "adj";
export declare const AND = "and";
export declare const APPROXRATIO = "approxratio";
export declare const ARCCOS = "arccos";
export declare const ARCCOSH = "arccosh";
export declare const ARCSIN = "arcsin";
export declare const ARCSINH = "arcsinh";
export declare const ARCTAN = "arctan";
export declare const ARCTANH = "arctanh";
export declare const ARG = "arg";
export declare const ATOMIZE = "atomize";
export declare const BESSELJ = "besselj";
export declare const BESSELY = "bessely";
export declare const BINDING = "binding";
export declare const BINOMIAL = "binomial";
export declare const CEILING = "ceiling";
export declare const CHECK = "check";
export declare const CHOOSE = "choose";
export declare const CIRCEXP = "circexp";
export declare const CLEAR = "clear";
export declare const CLEARALL = "clearall";
export declare const CLEARPATTERNS = "clearpatterns";
export declare const CLOCK = "clock";
export declare const COEFF = "coeff";
export declare const COFACTOR = "cofactor";
export declare const CONDENSE = "condense";
export declare const CONJ = "conj";
export declare const CONTRACT = "contract";
export declare const COS = "cos";
export declare const COSH = "cosh";
export declare const DECOMP = "decomp";
export declare const DEFINT = "defint";
export declare const DEGREE = "deg";
export declare const DENOMINATOR = "denominator";
export declare const DERIVATIVE = "derivative";
export declare const DET = "det";
export declare const DIM = "dim";
export declare const DIRAC = "dirac";
export declare const DIVISORS = "divisors";
export declare const DO = "do";
export declare const DOT = "dot";
export declare const DRAW = "draw";
export declare const DSOLVE = "dsolve";
export declare const EIGEN = "eigen";
export declare const EIGENVAL = "eigenval";
export declare const EIGENVEC = "eigenvec";
export declare const ERF = "erf";
export declare const ERFC = "erfc";
export declare const EVAL = "eval";
export declare const EXP = "exp";
export declare const EXPAND = "expand";
export declare const EXPCOS = "expcos";
export declare const EXPSIN = "expsin";
export declare const FACTOR = "factor";
export declare const FACTORIAL = "factorial";
export declare const FACTORPOLY = "factorpoly";
export declare const FILTER = "filter";
export declare const FLOATF = "float";
export declare const FLOOR = "floor";
export declare const FOR = "for";
export declare const FUNCTION = "function";
export declare const GAMMA = "Gamma";
export declare const GCD = "gcd";
export declare const HERMITE = "hermite";
export declare const HILBERT = "hilbert";
export declare const IMAG = "imag";
export declare const INDEX = "component";
export declare const INNER = "inner";
export declare const INTEGRAL = "integral";
export declare const INV = "inv";
export declare const INVG = "invg";
export declare const ISINTEGER = "isinteger";
export declare const ISPRIME = "isprime";
export declare const LAGUERRE = "laguerre";
export declare const LCM = "lcm";
export declare const LEADING = "leading";
export declare const LEGENDRE = "legendre";
export declare const LOG = "log";
export declare const LOOKUP = "lookup";
export declare const MOD = "mod";
export declare const MULTIPLY = "multiply";
export declare const NOT = "not";
export declare const NROOTS = "nroots";
export declare const NUMBER = "number";
export declare const NUMERATOR = "numerator";
export declare const OPERATOR = "operator";
export declare const OR = "or";
export declare const OUTER = "outer";
export declare const PATTERN = "pattern";
export declare const PATTERNSINFO = "patternsinfo";
export declare const POLAR = "polar";
export declare const POWER = "power";
export declare const PRIME = "prime";
export declare const PRINT_LEAVE_E_ALONE = "printLeaveEAlone";
export declare const PRINT_LEAVE_X_ALONE = "printLeaveXAlone";
export declare const PRINT = "print";
export declare const PRINT2DASCII = "print2dascii";
export declare const PRINTFULL = "printcomputer";
export declare const PRINTLATEX = "printlatex";
export declare const PRINTLIST = "printlist";
export declare const PRINTPLAIN = "printhuman";
export declare const PRODUCT = "product";
export declare const QUOTE = "quote";
export declare const QUOTIENT = "quotient";
export declare const RANK = "rank";
export declare const RATIONALIZE = "rationalize";
export declare const REAL = "real";
export declare const ROUND = "round";
export declare const YYRECT = "rect";
export declare const ROOTS = "roots";
export declare const SETQ = "equals";
export declare const SGN = "sgn";
export declare const SILENTPATTERN = "silentpattern";
export declare const SIMPLIFY = "simplify";
export declare const SIN = "sin";
export declare const SINH = "sinh";
export declare const SHAPE = "shape";
export declare const SQRT = "sqrt";
export declare const STOP = "stop";
export declare const SUBST = "subst";
export declare const SUM = "sum";
export declare const SYMBOLSINFO = "symbolsinfo";
export declare const TAN = "tan";
export declare const TANH = "tanh";
export declare const TAYLOR = "taylor";
export declare const TEST = "test";
export declare const TESTEQ = "testeq";
export declare const TESTGE = "testge";
export declare const TESTGT = "testgt";
export declare const TESTLE = "testle";
export declare const TESTLT = "testlt";
export declare const TRANSPOSE = "transpose";
export declare const UNIT = "unit";
export declare const ZERO = "zero";
export declare const NIL = "nil";
export declare const LAST = "last";
export declare const LAST_PRINT = "lastprint";
export declare const LAST_2DASCII_PRINT = "last2dasciiprint";
export declare const LAST_FULL_PRINT = "lastfullprint";
export declare const LAST_LATEX_PRINT = "lastlatexprint";
export declare const LAST_LIST_PRINT = "lastlistprint";
export declare const LAST_PLAIN_PRINT = "lastplainprint";
export declare const AUTOEXPAND = "autoexpand";
export declare const BAKE = "bake";
export declare const ASSUME_REAL_VARIABLES = "assumeRealVariables";
export declare const TRACE = "trace";
export declare const FORCE_FIXED_PRINTOUT = "forceFixedPrintout";
export declare const MAX_FIXED_PRINTOUT_DIGITS = "maxFixedPrintoutDigits";
export declare const YYE = "~";
export declare const DRAWX = "$DRAWX";
export declare const METAA = "$METAA";
export declare const METAB = "$METAB";
export declare const METAX = "$METAX";
export declare const SECRETX = "$SECRETX";
export declare const VERSION = "version";
export declare const PI = "pi";
export declare const SYMBOL_A = "a";
export declare const SYMBOL_B = "b";
export declare const SYMBOL_C = "c";
export declare const SYMBOL_D = "d";
export declare const SYMBOL_I = "i";
export declare const SYMBOL_J = "j";
export declare const SYMBOL_N = "n";
export declare const SYMBOL_R = "r";
export declare const SYMBOL_S = "s";
export declare const SYMBOL_T = "t";
export declare const SYMBOL_X = "x";
export declare const SYMBOL_Y = "y";
export declare const SYMBOL_Z = "z";
export declare const SYMBOL_IDENTITY_MATRIX = "I";
export declare const SYMBOL_A_UNDERSCORE = "a_";
export declare const SYMBOL_B_UNDERSCORE = "b_";
export declare const SYMBOL_X_UNDERSCORE = "x_";
export declare const C1 = "$C1";
export declare const C2 = "$C2";
export declare const C3 = "$C3";
export declare const C4 = "$C4";
export declare const C5 = "$C5";
export declare const C6 = "$C6";
export declare const E = "~";
export declare const MAXPRIMETAB = 10000;
export declare const MAX_CONSECUTIVE_APPLICATIONS_OF_ALL_RULES = 5;
export declare const MAX_CONSECUTIVE_APPLICATIONS_OF_SINGLE_RULE = 10;
export declare const MAXDIM = 24;
export declare const predefinedSymbolsInGlobalScope_doNotTrackInDependencies: string[];
export declare const parse_time_simplifications = true;
export declare const primetab: number[];
export declare const mtotal = 0;
export declare const logbuf = "";
export declare const transpose_unicode = 7488;
export declare const dotprod_unicode = 183;
export declare function iscons(p: BaseAtom): p is Cons;
export declare function isrational(p: BaseAtom): p is Num;
export declare function isdouble(p: BaseAtom): p is Double;
export declare function isNumericAtom(p: BaseAtom): p is Double | Num;
export declare function isstr(p: BaseAtom): p is Str;
export declare function istensor(p: BaseAtom): p is Tensor;
export type NumbericTensor = Double | Num | Tensor<NumbericTensor>;
export declare function isNumericAtomOrTensor(p: U): p is NumbericTensor;
export declare function issymbol(p: U): p is Sym;
export declare function car(p: BaseAtom): U;
export declare function cdr(p: BaseAtom): U;
export declare function caar(p: BaseAtom): U;
export declare function cadr(p: BaseAtom): U;
export declare function cdar(p: BaseAtom): U;
export declare function cddr(p: BaseAtom): U;
export declare function caadr(p: BaseAtom): U;
export declare function caddr(p: BaseAtom): U;
export declare function cadar(p: BaseAtom): U;
export declare function cdadr(p: BaseAtom): U;
export declare function cddar(p: BaseAtom): U;
export declare function cdddr(p: BaseAtom): U;
export declare function caaddr(p: BaseAtom): U;
export declare function cadadr(p: BaseAtom): U;
export declare function caddar(p: BaseAtom): U;
export declare function cdaddr(p: BaseAtom): U;
export declare function cadddr(p: BaseAtom): U;
export declare function cddddr(p: BaseAtom): U;
export declare function caddddr(p: BaseAtom): U;
export declare function cadaddr(p: BaseAtom): U;
export declare function cddaddr(p: BaseAtom): U;
export declare function caddadr(p: BaseAtom): U;
export declare function cdddaddr(p: BaseAtom): U;
export declare function caddaddr(p: BaseAtom): U;
export declare function isadd(p: BaseAtom): p is Cons & {
    __ts_sym: '+';
};
export declare function ismultiply(p: BaseAtom): p is Cons & {
    __ts_sym: '*';
};
export declare function ispower(p: BaseAtom): p is Cons & {
    __ts_sym: '^';
};
export declare function isfactorial(p: BaseAtom): p is Cons & {
    __ts_sym: '!';
};
export declare function isinnerordot(p: BaseAtom): boolean;
export declare function istranspose(p: BaseAtom): boolean;
export declare function isinv(p: BaseAtom): boolean;
export declare function isidentitymatrix(p: BaseAtom): p is Sym & {
    identity: true;
};
export type Sign = -1 | 0 | 1;
export declare function MSIGN(p: bigInt.BigInteger): Sign;
export declare function MZERO(p: bigInt.BigInteger): boolean;
export declare function MEQUAL(p: bigInt.BigInteger, n: number): boolean;
export declare function reset_after_error(): void;
export declare const $: {
    [key: string]: unknown;
};
export declare class Constants {
    static readonly one: Num;
    private static oneAsDouble;
    static readonly negOne: Num;
    private static negOneAsDouble;
    static readonly zero: Num;
    static readonly zeroAsDouble: Double;
    static readonly piAsDouble: Double;
    static imaginaryunit: U;
    static One(): Num | Double;
    static NegOne(): Num | Double;
    static Zero(): Num | Double;
    static Pi(): Sym | Double;
}
export declare function noexpand<T extends any[], V>(func: (...args: T) => V, ...args: T): V;
export declare function doexpand<T extends any[], V>(func: (...args: T) => V, ...args: T): V;
export declare function evalPolar<T extends any[], V>(func: (...args: T) => V, ...args: T): V;
export declare function evalFloats<T extends any[], V>(func: (...args: T) => V, ...args: T): V;
export {};
