import { expect, jest, test } from '@jest/globals'
// import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber.js';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck';
import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear';


//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {

    const snn_validInput = '900515-1239'
    const snn_invalid = '991203-1453'
    const snn_too_short = '900515-123'
    const snn_oneCharMoreThanMinimum = '900515-12393'
    const snn_invalidFormat = '90051512-39'

    const validMonthMin = '1'
    const validMonthMax = '12'
    const invalidMonthOneBelowMin = '0'
    const invalidMonthOneAboveMax = '13'
    const invalidMonth = 'hej'

    const validDay = '15'
    const validDayMin = '1'
    const validDayMax = '31'
    const invalidDayOneBelowMin = '0'
    const invalidDayOneAboveMax = '32'
    const invalidDayNotANumber = 'hej'

    test('Should be able to create a SNN with valid input', () => {
        const mockHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }
        expect(() => new SwedishSocialSecurityNumber(snn_validInput, mockHelper)).not.toThrow();

    })

    test('Constructor Should Throw Error If SSN is too short', () => {
        const mockHelper = {
            isCorrectLength: jest.fn().mockReturnValue(false),
            isCorrectFormat: jest.fn().mockReturnValue(false),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }

    
        expect(() => new SwedishSocialSecurityNumber(snn_too_short, mockHelper)).toThrow("To short, must be 11 characters");
  
    })

});