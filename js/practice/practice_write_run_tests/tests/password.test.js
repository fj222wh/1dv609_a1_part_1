
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
// import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    //put constants here to increase readability
    const emptyPassword = '';
    const shortPasswordWithoutNumber = 'jojlkjge'
    const shortPassWordWithNumber = '22egeggo'

    // Boundary values for password?

    test('Constructor Should Throw Exception For Empty Password', () => {
        expect(() => new Password(emptyPassword)).toThrow('Too short password')
    });

    test('Constructor Should Throw Exception For Short Passwords (without number)', () => {
        expect(() => new Password(shortPasswordWithoutNumber)).toThrow('Too short password')
    });


    test('Constructor Should Throw Exception For Short Passwords (with number)', () => {3
        expect(() => new Password(shortPassWordWithNumber)).toThrow('Too short password')
    });

    test('Constructor Should Throw Exception For No Number In Password', () => {
        expect(() => new Password('erkfoefroepo')).toThrow('No number found')
    })

    test('Should Create The Password Hash Succesfully', () => {
        const password = new Password('myLittlePassword123')
        expect(password.getPasswordHash()).toBe(2.3067788298475823e+29)
    })

    test('Should Return True when Passwords Are The Same', () => {
        // Need to check validation for the password???
        const password1 = new Password('hellllooooo1')
        const password2 = new Password('hellllooooo1')

        expect(password1.isPasswordSame(password2)).toBe(true)
    })



    test('Should Return False when Passwords Are Not Same', () => {
        // need to check validation??? 
        const password1 = new Password('hellllooooo1')
        const password2 = new Password('hellllooooooo1')
        expect(password1.isPasswordSame(password2)).toBe(false)
    })



    //Add your tests here
});