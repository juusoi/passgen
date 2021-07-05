const symbols = '!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
const alphabet = 'abcdefghijklmnopqrstuvwxzyz'
const numbers = '0123456789'

const createPassword = (length = 12, hasNumbers = true, hasSymbols = true) => {
    let chars = alphabet
    chars += alphabet.toUpperCase()
    hasNumbers ? (chars += numbers) : ''
    hasSymbols ? (chars += symbols) : ''
    return generatePassword(length, chars)
}

const generatePassword = (length, chars) => {
    let pw = ''
    for (let i = 0; i < length; i++) {
        pw += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return pw
}

module.exports = createPassword