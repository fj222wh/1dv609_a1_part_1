import { SSNHelper } from '../src/correct/SSNHelper'; 



describe('SSNHelper Tests', () => {
    const validInput = '991218-4382'
    const oneCharLessThanMinimum = '991218-438'
    const oneCharMoreThanMinimum = '991218-43889'
    const invalidFormat = '9912-173948'

    const validMonthMin = '1'
    const validMonthMax = '12'
    const monthOneBelowMin = '0'
    const monthOneAboveMax = '13'
    const invalidMonth = 'hej'

    const ssnHelper = new SSNHelper()
    //put constants here to increase readability


    test('Should Return True If Length Is Correct', () => {
        expect(ssnHelper.isCorrectLength(validInput)).toBe(true)
    });

    test('Should Return False If Length Is Too Short', () => {
        expect(ssnHelper.isCorrectLength(oneCharLessThanMinimum)).toBe(false)
    });

    test('Should Return False If Length Is Too Long', () => {
        expect(ssnHelper.isCorrectLength(oneCharMoreThanMinimum)).toBe(false)
    });

    test('Should return True If Format Is Valid', () => {
        expect(ssnHelper.isCorrectFormat(validInput)).toBe(true)
    })

    test('Should Return False If Format Is Invalid', () => {
        expect(ssnHelper.isCorrectFormat(invalidFormat)).toBe(false)
    })

    test('Should Return True For Valid Month (min value)', () => {
        expect(ssnHelper.isValidMonth(validMonthMin)).toBe(true)
    })


    test('Should Return True For Valid Month (min value)', () => {
        expect(ssnHelper.isValidMonth(validMonthMax)).toBe(true)
    })

    test('Should Return False For Invalid Month (just below minimum)', () => {
        expect(ssnHelper.isValidMonth(monthOneBelowMin)).toBe(false)
    })

    test('Should Return False For Invalid Month (just above maximum)', () => {
        expect(ssnHelper.isValidMonth(monthOneAboveMax)).toBe(false)
    })

    test('Should Return False For Invalid Month', () => {
        expect(ssnHelper.isValidMonth(invalidMonth)).toBe(false)
    })




  


});