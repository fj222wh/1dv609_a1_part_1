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

    const validInput = '900515-1239'
    const tooShort = '991217543'

    test('Test', () => {
        const mockHelper = {
            isCorrectLength: jest.fn().mockReturnValue(false),
            isCorrectFormat: jest.fn().mockReturnValue(false),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }

        expect(() => new SwedishSocialSecurityNumber(tooShort, mockHelper)).toThrow("To short, must be 11 characters");

    })

});