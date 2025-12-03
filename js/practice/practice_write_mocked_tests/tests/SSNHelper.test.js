import { SSNHelper } from '../src/correct/SSNHelper'; 



describe('SSNHelper Tests', () => {
    const validInput = '991218-4382'
    const oneCharLessThanMinimum = '991218-438'
    const oneCharMoreThanMinimum = '991218-43889'
    const ssnHelper = new SSNHelper()
    //put constants here to increase readability


    test('Should Not Throw If Length Is Correct', () => {
        expect(ssnHelper.isCorrectLength(correctLength)).toBe(true)
    });

});