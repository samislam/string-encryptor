import crypto from 'crypto'

/** Function to decrypt an encrypted string using a passphrase */
export function decrypt(encryptedString: string, passphrase: string) {
  // Split the encrypted string into salt, IV, and the actual encrypted text
  const [saltHex, ivHex, encrypted] = encryptedString.split(':')

  // Convert the hex values back to buffers
  const salt = Buffer.from(saltHex, 'hex')
  const iv = Buffer.from(ivHex, 'hex')

  // Derive the key from the passphrase using PBKDF2
  const key = crypto.pbkdf2Sync(passphrase, salt, 100000, 32, 'sha256')

  // Create the decipher using AES-256-CBC
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)

  // Decrypt the text
  let decrypted = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')

  return decrypted
}
