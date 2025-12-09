
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
import { Password } from '../src/MyOwnBug';
// import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    //put constants here to increase readability
    const emptyPassword = ' ';
    const NO_NUMBER = 'nAjctxQpKRbLw'
    const validPassword = 'Zv2mKp8rLwQd'
    const oneCharBelowMinimum = 'q4Jt9bXeLrp'
    const oneCharAboveMinimum = 'nA7ctxQp3RbLw'

    test('Constructor Should Throw Exception For Empty Password', () => {
        expect(() => new Password(emptyPassword)).toThrow('Too short password')
    });

    test('Constructor Should Not Throw For Valid Password', () => {
        expect(() => new Password(validPassword)).not.toThrow()
    })

    
    test('Constructor Should Throw Exception For Short Passwords', () => {
        expect(() => new Password(oneCharBelowMinimum)).toThrow('Too short password')
    });

    test('Constructor Should Not Throw For PassWord One Character Above Minimum', () => {
        expect(() => new Password(oneCharAboveMinimum)).not.toThrow()
    })

    test('Constructor Should Throw Exception For No Number In Password', () => {
        expect(() => new Password(NO_NUMBER)).toThrow('No number found')
    })

    test('Should Trim Password Input Before Hashing', () => {
        const password1 = new Password('myTestingPassword123  ')
        const password2 = new Password('myTestingPassword123')

        expect(password1.isPasswordSame(password2)).toBe(true)
    })


    test('Should Hash Password', () => {
        const password = new Password(validPassword)
        expect(password.getPasswordHash()).not.toBe(validPassword)
    })

    test('Should Create The Password Hash With The Correct Algorithm', () => {
        const password = new Password(validPassword)
        expect(password.getPasswordHash()).toBe(7898535655848498000)
    })

    test('Should Return True when Passwords Are The Same', () => {
        const password1 = new Password(validPassword)
        const password2 = new Password(validPassword)

        expect(password1.isPasswordSame(password2)).toBe(true)
    })


    test('Should Return False when Passwords Are Not Same', () => {
        const password1 = new Password('hellllooooo1')
        const password2 = new Password('hellllooooooo1')
        expect(password1.isPasswordSame(password2)).toBe(false)
    })

    test('Should Throw If Comparing To Something Else Than A Password', () => {
        const password = new Password(validPassword)
        expect(() => password.isPasswordSame('hej')).toThrow('Invalid argument')
    })
});