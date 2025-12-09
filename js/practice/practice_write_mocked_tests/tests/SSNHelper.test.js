import { SSNHelper } from '../src/correct/SSNHelper';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperMessyLuhn';
// import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength';

describe('SSNHelper Tests', () => {
    const snn_validInput = '900515-1239'
    const snn_invalid = '991203-1453'
    const snn_oneCharLessThanMinimum = '900515-123'
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

    const ssnHelper = new SSNHelper()
    //put constants here to increase readability

    test('Should Return True If Length Is Correct', () => {
        expect(ssnHelper.isCorrectLength(snn_validInput)).toBe(true)
    });

    test('Should Return False If Length Is Too Short', () => {
        expect(ssnHelper.isCorrectLength(snn_oneCharLessThanMinimum)).toBe(false)
    });

    test('Should Return False If Length Is Too Long', () => {
        expect(ssnHelper.isCorrectLength(snn_oneCharMoreThanMinimum)).toBe(false)
    });

    test('Should Return True If Format Is Valid', () => {
        expect(ssnHelper.isCorrectFormat(snn_validInput)).toBe(true)
    })

    test('Should Return False If Format Is Invalid', () => {
        expect(ssnHelper.isCorrectFormat(snn_invalidFormat)).toBe(false)
    })

    test('Should Return True For Valid Month (min value)', () => {
        expect(ssnHelper.isValidMonth(validMonthMin)).toBe(true)
    })


    test('Should Return True For Valid Month (max value)', () => {
        expect(ssnHelper.isValidMonth(validMonthMax)).toBe(true)
    })

    test('Should Return False For Invalid Month (just below minimum)', () => {
        expect(ssnHelper.isValidMonth(invalidMonthOneBelowMin)).toBe(false)
    })

    test('Should Return False For Invalid Month (just above maximum)', () => {
        expect(ssnHelper.isValidMonth(invalidMonthOneAboveMax)).toBe(false)
    })

    test('Should Return False For Invalid Month (not a number)', () => {
        expect(ssnHelper.isValidMonth(invalidMonth)).toBe(false)
    })

    test('Should Return True For A Valid Day', () => {
        expect(ssnHelper.isValidDay(validDay)).toBe(true)
    })

    test('Should Return True For A Valid Day (min value)', () => {
        expect(ssnHelper.isValidDay(validDayMin)).toBe(true)
    })


    test('Should Return True For A Valid Day (max value)', () => {
        expect(ssnHelper.isValidDay(validDayMax)).toBe(true)
    })


    test('Should Return False For A Valid Day (one below minimum)', () => {
        expect(ssnHelper.isValidDay(invalidDayOneBelowMin)).toBe(false)
    })

    test('Should Return False For An Invalid Day (one above max)', () => {
        expect(ssnHelper.isValidDay(invalidDayOneAboveMax)).toBe(false)
    })

    test('Should Return False For An Invalid Day (not a number)', () => {
        expect(ssnHelper.isValidDay(invalidDayNotANumber)).toBe(false)
    })


    test('Should Return False When Checking Luhnis With Invalid Input', () => {
        expect(ssnHelper.luhnisCorrect(snn_invalid)).toBe(false)
    })

    test('Should Return True When Checking Luhnis With Valid Input', () => {
        expect(ssnHelper.luhnisCorrect(snn_validInput)).toBe(true)
    })

});