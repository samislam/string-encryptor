import { input } from '@inquirer/prompts'

export const promptEncrypt = async () => {
  const stringToEncrypt = await input({ message: 'Enter the string you want to encrypt' })
  const passphrase = await input({ message: 'Passphrase' })
  return { stringToEncrypt, passphrase }
}
