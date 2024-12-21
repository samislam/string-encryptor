import { select } from '@inquirer/prompts'

type Action = 'encrypt' | 'decrypt'

export const promptAction = async () =>
  await select<Action>({
    message: 'Select an action',
    choices: [
      {
        name: 'Encrypt a string',
        value: 'encrypt',
        description: 'Encrypt a string that you can later decrypt using your passphrase',
      },
      {
        name: 'Decrypt a string',
        value: 'decrypt',
        description: 'Decrypt a string if you know its passphrase',
      },
    ],
  })
