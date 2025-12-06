import { expect, jest, test } from '@jest/globals'
import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber.js';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn';
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear';


//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {

    const snn_validInput = '900515-1239'
    const snn_validInput_with_spaces = '  900515-1239'
    const snn_too_short = '900515-123'
    const snn_invalidFormat = '90051512-39'
    const snn_invalidMonth = '901316-1239'
    const snn_invalidDay = '901234-1239'
    const snn_invalidLuhnis = '991217-3686'



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

    test('Constructor Should Throw Error If SSN Has Invalid Format', () => {
        const mockHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(false),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }

        expect(() => new SwedishSocialSecurityNumber(snn_invalidFormat, mockHelper)).toThrow("Incorrect format, must be: YYMMDD-XXXX");
  
    })

    test('Constructor Should Throw Error If Invalid Month', () => {
        const mockHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(false),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }

        expect(() => new SwedishSocialSecurityNumber(snn_invalidMonth, mockHelper)).toThrow('Invalid month in SSN')

    })

    test('Constructor Should Throw Error If Invalid Day', () => {
        const mockHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(false),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }

        expect(() => new SwedishSocialSecurityNumber(snn_invalidDay, mockHelper)).toThrow('Invalid day in SSN')
    })

    test('Constructor Should Throw Error If Invalid Luhns', () => {
        const mockHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(false)
        }

        expect(() => new SwedishSocialSecurityNumber(snn_invalidLuhnis, mockHelper)).toThrow('Invalid SSN according to Luhn\'s algorithm')
    })

    test('Should Trim White Spaces', () => {
        const mockHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }

        const sut = new SwedishSocialSecurityNumber(snn_validInput_with_spaces, mockHelper)
        expect(mockHelper.isCorrectLength).toHaveBeenCalledWith(snn_validInput)
        expect(mockHelper.isCorrectFormat).toHaveBeenCalledWith(snn_validInput)
        expect(mockHelper.luhnisCorrect).toHaveBeenCalledWith(snn_validInput)
    })

    test('Should Return The Corresponding Year', () => {
        const mockHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }

        const sut = new SwedishSocialSecurityNumber(snn_validInput, mockHelper)
        expect(sut.getYear()).toBe('90')
    })


    test('Should Return The Corresponding Month', () => {
        const mockHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }

        const sut = new SwedishSocialSecurityNumber(snn_validInput, mockHelper)
        expect(sut.getMonth()).toBe('05')
    })

    test('Should Return The Corresponding Day', () => {
        const mockHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }

        const sut = new SwedishSocialSecurityNumber(snn_validInput, mockHelper)
        expect(sut.getDay()).toBe('15')
    })

    test('Should Return The Corresponding Day', () => {
        const mockHelper = {
            isCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }

        const sut = new SwedishSocialSecurityNumber(snn_validInput, mockHelper)
        expect(sut.getSerialNumber()).toBe('1239')
    })

});