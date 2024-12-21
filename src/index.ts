import chalk from 'chalk'
import { decrypt } from './functions/decrypt'
import { encrypt } from './functions/encrypt'
import { promptAction } from './prompts/action.prompt'
import { promptDecrypt } from './prompts/decrypt.prompt'
import { promptEncrypt } from './prompts/encrypt.prompt'

async function main() {
  const action = await promptAction()
  switch (action) {
    case 'encrypt':
      {
        const { stringToEncrypt, passphrase } = await promptEncrypt()
        const encryptedText = encrypt(stringToEncrypt, passphrase)
        console.log(chalk.bold.greenBright('Done!'))
        console.log(chalk.bold.blueBright('Encrypted:'), encryptedText)
      }
      break
    case 'decrypt':
      {
        const { stringToDecrypt, passphrase } = await promptDecrypt()
        try {
          const decryptedText = decrypt(stringToDecrypt, passphrase)
          console.log(chalk.bold.greenBright('Success!'))
          console.log(chalk.bold.blueBright('Decrypted:'), decryptedText)
        } catch (error: any) {
          console.log(chalk.bold.red('Failed!'), error.message)
        }
      }
      break
  }
}

main()
