import { input } from '@inquirer/prompts'

const encryptedStringRegex = /^[a-fA-F0-9]{32}:[a-fA-F0-9]{32}:[a-fA-F0-9]+$/

// Custom validator for encrypted string
const validateEncryptedString = (input: string): boolean | string => {
  if (encryptedStringRegex.test(input)) return true
  else return 'Please enter a valid encrypted string (format: salt:iv:encryptedText)'
}

export const promptDecrypt = async () => {
  const stringToDecrypt = await input({
    message: 'Enter the string you want to decrypt',
    validate: validateEncryptedString,
  })
  const passphrase = await input({ message: 'Passphrase' })
  return { stringToDecrypt, passphrase }
}
