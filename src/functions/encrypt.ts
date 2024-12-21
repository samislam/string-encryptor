import crypto from 'crypto'

/** Function to encrypt a text using a passphrase */
export function encrypt(text: string, passphrase: string) {
  // Generate a random salt
  const salt = crypto.randomBytes(16)

  // Derive a key from the passphrase using PBKDF2
  const key = crypto.pbkdf2Sync(passphrase, salt, 100000, 32, 'sha256')

  // Generate a random IV (Initialization Vector)
  const iv = crypto.randomBytes(16)

  // Create the cipher using AES-256-CBC
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv)

  // Encrypt the text
  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')

  // Return the salt, IV, and encrypted text (combined)
  return `${salt.toString('hex')}:${iv.toString('hex')}:${encrypted}`
}
