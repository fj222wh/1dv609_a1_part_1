import { SSNHelper } from '../src/correct/SSNHelper'; 



describe('SSNHelper Tests', () => {
    const validInput = '991218-4382'
    const oneCharLessThanMinimum = '991218-438'
    const oneCharMoreThanMinimum = '991218-43889'
    const invalidFormat = '9912-173948'

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


  


});