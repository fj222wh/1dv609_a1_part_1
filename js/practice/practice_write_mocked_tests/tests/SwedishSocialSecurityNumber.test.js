import { expect, jest, test } from '@jest/globals'
import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySSNHelperAllowDayUpTo30';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySSNHelperAllowMonth0';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySSNHelperIncorrectFormat';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySSNHelperMessyLuhn';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySSNHelperWrongLength';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear';


//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {


    test('Test', () => {
        const mockFn = jest.fn().mockReturnValue(42);
        expect(mockFn()).toBe(42);
    })

});