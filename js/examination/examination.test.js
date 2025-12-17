//You are going to write tests for the examination.js 
import { expect, jest} from '@jest/globals'
import { GameView } from './examination';


describe('Examination tests', () => {
    test('Examination', () => {

        const mockModel = {
            getScore: jest.fn().mockReturnValue(10)
        }

        const sut = new GameView(mockModel)
        const result = sut.getResultsHTML()
        const expected = "<h2>Poäng: 10 </h2>"

        expect(result).toBe(expected)
    });



    
});