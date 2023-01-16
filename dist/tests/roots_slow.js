"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_harness_js_1 = require("../test-harness.js");
// DOES use cubic formula
// the actual format of this solution might change, the important thing
// is that the next few tests work, where we plug in the
// symbolic solutions in the polynomial again and we check that we
// get the zeroes.
(0, test_harness_js_1.run_test)([
    'thePoly = a*x^3 + b*x^2 + c*x + d',
    '',
    'roots(thePoly)',
    '[-1/3*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(1/3)-b^2/(3*a^2*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(1/3))-b/(3*a)+c/(a*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(1/3)),(-1/3*a*b*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(1/3)-1/2*a*c+1/6*b^2-1/2*i*3^(1/2)*a*c-1/6*i*3^(1/2)*a^2*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(2/3)+1/6*i*3^(1/2)*b^2+1/6*a^2*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(2/3))/(a^2*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(1/3)),(-1/3*a*b*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(1/3)-1/2*a*c+1/6*b^2+1/2*i*3^(1/2)*a*c+1/6*i*3^(1/2)*a^2*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(2/3)-1/6*i*3^(1/2)*b^2+1/6*a^2*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(2/3))/(a^2*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(1/3))]',
    'and((simplify(subst(last[1],x,thePoly)) == 0),(simplify(subst(last[2],x,thePoly)) == 0),(simplify(subst(last[3],x,thePoly)) == 0))',
    '1',
]);
(0, test_harness_js_1.run_test)([
    // DOES use cubic formula
    'thePoly = 3*x^3 - 10*x^2 - 14*x + 27',
    '',
    'roots(thePoly)',
    '[1/3*(10/3-226/(9*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3))-(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3)),1/3*(10/3+113/(9*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3))+1/2*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3)-113*i*3^(1/2)/(9*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3))+1/2*i*3^(1/2)*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3)),1/3*(10/3+113/(9*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3))+1/2*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3)+113*i*3^(1/2)/(9*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3))-1/2*i*3^(1/2)*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3))]',
    'and((abs(float(subst(float(last[1]),x,thePoly))) < float(10^(-13))),(abs(float(subst(float(last[2]),x,thePoly))) < float(10^(-13))), (abs(float(subst(float(last[3]),x,thePoly))) < float(10^(-13))))',
    '1',
]);
(0, test_harness_js_1.run_test)([
    // DOES use cubic formula
    'thePoly = 1*x^3 + 0*x^2 + 12*x - 10',
    '',
    'roots(thePoly)',
    '[(-6+1/6*(-135+27*89^(1/2))^(2/3)-6*i*3^(1/2)-1/6*i*3^(1/2)*(-135+27*89^(1/2))^(2/3))/((-135+27*89^(1/2))^(1/3)),(-6+1/6*(-135+27*89^(1/2))^(2/3)+6*i*3^(1/2)+1/6*i*3^(1/2)*(-135+27*89^(1/2))^(2/3))/((-135+27*89^(1/2))^(1/3)),(12-1/3*(-135+27*89^(1/2))^(2/3))/((-135+27*89^(1/2))^(1/3))]',
    'and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-14))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-14))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-14))))',
    '1',
]);
(0, test_harness_js_1.run_test)([
    // DOES use cubic formula
    'thePoly = 1*x^3 + 0*x^2 - 3*x - 6',
    '',
    'roots(thePoly)',
    '[(3+1/3*(-81+54*2^(1/2))^(2/3)-3*i*3^(1/2)+1/3*i*3^(1/2)*(-81+54*2^(1/2))^(2/3))/(2*(-81+54*2^(1/2))^(1/3)),(3+1/3*(-81+54*2^(1/2))^(2/3)+3*i*3^(1/2)-1/3*i*3^(1/2)*(-81+54*2^(1/2))^(2/3))/(2*(-81+54*2^(1/2))^(1/3)),(-3-1/3*(-81+54*2^(1/2))^(2/3))/((-81+54*2^(1/2))^(1/3))]',
    'and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-14))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-14))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-14))))',
    '1',
]);
(0, test_harness_js_1.run_test)([
    // DOES use cubic formula
    'thePoly = 3*x^3 + 21*x^2 + 2*x + 3',
    '',
    'roots(thePoly)',
    '[1/3*(-7-47/((671/2+1/2*34949^(1/2))^(1/3))-(671/2+1/2*34949^(1/2))^(1/3)),1/3*(-7+47/(2*(671/2+1/2*34949^(1/2))^(1/3))+1/2*(671/2+1/2*34949^(1/2))^(1/3)-47*i*3^(1/2)/(2*(671/2+1/2*34949^(1/2))^(1/3))+1/2*i*3^(1/2)*(671/2+1/2*34949^(1/2))^(1/3)),1/3*(-7+47/(2*(671/2+1/2*34949^(1/2))^(1/3))+1/2*(671/2+1/2*34949^(1/2))^(1/3)+47*i*3^(1/2)/(2*(671/2+1/2*34949^(1/2))^(1/3))-1/2*i*3^(1/2)*(671/2+1/2*34949^(1/2))^(1/3))]',
    'and((abs(float(subst(float(last[1]),x,thePoly))) < float(10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(10^(-12))))',
    '1',
]);
(0, test_harness_js_1.run_test)([
    // DOES use cubic formula
    'thePoly = 3*x^3 - 6*x^2 + 4*x - i',
    '',
    'roots(thePoly)',
    '[1/3*(2-(8-9*i)^(1/3)),1/3*(2+1/2*(8-9*i)^(1/3)-1/2*i*3^(1/2)*(8-9*i)^(1/3)),1/3*(2+1/2*(8-9*i)^(1/3)+1/2*i*3^(1/2)*(8-9*i)^(1/3))]',
    'and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-15))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-15))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-15))))',
    '1',
]);
(0, test_harness_js_1.run_test)([
    'thePoly = 4*x^4 - 1*x^3 + 4*x^2 + 3*x + 5',
    '',
    'theRoots = roots(thePoly)',
    '',
    'theRoots',
    '[1/16-1/2*(-125/96-447/(256*(-125/192+265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)+265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2))-265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)-265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2)+1/2*(-125/192+265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)+265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2),1/16-1/2*(-125/96+447/(256*(-125/192+265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)+265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2))-265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)-265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2)-1/2*(-125/192+265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)+265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2),1/16+1/2*(-125/96-447/(256*(-125/192+265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)+265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2))-265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)-265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2)+1/2*(-125/192+265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)+265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2),1/16+1/2*(-125/96+447/(256*(-125/192+265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)+265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2))-265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)-265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2)-1/2*(-125/192+265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)+265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2)]',
    'and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[4]),x,thePoly))) < float(2*10^(-12))))',
    '1',
]);
(0, test_harness_js_1.run_test)([
    'thePoly = 398683376+1720835*x+2320*x^2+x^3',
    '',
    'theRoots = roots(thePoly)',
    '',
    // root 1 ~= -961.79, root 2 ~= -895.12, root 3 ~= -463.09
    // all three of them have a very small "error" imaginary part ~= 10^-13
    'theRoots',
    '[-2320/3-219895/(3*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3))-1/3*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3),-2320/3+219895/(6*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3))+1/6*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3)-219895*i*3^(1/2)/(6*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3))+1/6*i*3^(1/2)*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3),-2320/3+219895/(6*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3))+1/6*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3)+219895*i*3^(1/2)/(6*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3))-1/6*i*3^(1/2)*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3)]',
    // the error here is particularly high because of the big coefficients
    'and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-7))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-7))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-7))))',
    '1',
]);
(0, test_harness_js_1.run_test)([
    'thePoly = x^4 + 8*x^3 + 12*x^2 + (2*30^(1/2) -16)*x + 4*30^(1/2)-28',
    '',
    'theRoots = roots(thePoly)',
    '',
    'theRoots',
    '[-2-1/2*(18-4*5^(1/2))^(1/2)+3^(1/2)/(2^(1/2)),-2-1/2*(18+4*5^(1/2))^(1/2)-1/2*2^(1/2)*3^(1/2),-2+1/2*(18-4*5^(1/2))^(1/2)+3^(1/2)/(2^(1/2)),-2+1/2*(18+4*5^(1/2))^(1/2)-1/2*2^(1/2)*3^(1/2)]',
    'and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[4]),x,thePoly))) < float(2*10^(-12))))',
    '1',
]);
(0, test_harness_js_1.run_test)([
    'thePoly = x^3 + x^2 - 7',
    '',
    'theRoots = roots(thePoly)',
    '',
    // note how we can't use "last" here because the assignment returns nothing
    'and(abs(float(subst(theRoots[1],x,thePoly))) < float(2*10^(-12)),abs(float(subst(theRoots[2],x,thePoly))) < float(2*10^(-12)),abs(float(subst(theRoots[3],x,thePoly))) < float(2*10^(-12)))',
    '1',
]);
