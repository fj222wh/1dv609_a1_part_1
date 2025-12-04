import { SSNHelper } from '../src/correct/SSNHelper';

describe('SSNHelper Tests', () => {
    const snn_validInput = '991218-4382'
    const snn_oneCharLessThanMinimum = '991218-438'
    const snn_oneCharMoreThanMinimum = '991218-43889'
    const snn_invalidFormat = '9912-173948'

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

    test('Should return True If Format Is Valid', () => {
        expect(ssnHelper.isCorrectFormat(snn_validInput)).toBe(true)
    })

    test('Should Return False If Format Is Invalid', () => {
        expect(ssnHelper.isCorrectFormat(snn_invalidFormat)).toBe(false)
    })

    test('Should Return True For Valid Month (min value)', () => {
        expect(ssnHelper.isValidMonth(validMonthMin)).toBe(true)
    })


    test('Should Return True For Valid Month (min value)', () => {
        expect(ssnHelper.isValidMonth(validMonthMax)).toBe(true)
    })

    test('Should Return False For Invalid Month (just below minimum)', () => {
        expect(ssnHelper.isValidMonth(invalidMonthOneBelowMin)).toBe(false)
    })

    test('Should Return False For Invalid Month (just above maximum)', () => {
        expect(ssnHelper.isValidMonth(invalidMonthOneAboveMax)).toBe(false)
    })

    test('Should Return False For Invalid Month', () => {
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


    test('Should Return False For A Valid Day (one less than boundary value)', () => {
        expect(ssnHelper.isValidDay(invalidDayOneBelowMin)).toBe(false)
    })

    test('Should Return False For A Valid Day (one above than boundary value)', () => {
        expect(ssnHelper.isValidDay(invalidDayOneAboveMax)).toBe(false)
    })

    test('Should Return False For A Valid Day (not a number)', () => {
        expect(ssnHelper.isValidDay(invalidDayNotANumber)).toBe(false)
    })


    test('Should Return False When Checking Luhnis With Invalid Input', () => {
        expect(ssnHelper.luhnisCorrect(snn_invalidFormat)).toBe(false)
    })

    test('Should Return True When Checking Luhnis With Valid Input', () => {
        expect(ssnHelper.luhnisCorrect(snn_validInput)).toBe(true)
    })

});