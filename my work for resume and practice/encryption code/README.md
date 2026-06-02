# Secure Encryption App

A modern web-based encryption application that allows users to securely encrypt and decrypt **images**, **videos**, and **text** directly in their browser using the Web Crypto API.

All encryption and decryption operations are performed locally on the user's device. No files, keys, or data are uploaded to any server.

---

## Features

### Image Encryption

- Upload an image and encrypt it securely.
- AES-256-GCM encryption using the browser's Web Crypto API.
- Automatically generates a unique encryption key.
- Download encrypted image files (`.enc`).
- Download encryption key as a text file.
- Generate and download a QR code containing the encryption key.
- Decrypt encrypted images using:
  - Manual key entry
  - Uploaded key file
  - QR code image

### Text Encryption

- Encrypt plain text using a password.
- Decrypt encrypted text using the same password.
- Base64 encoded output for easy sharing.

### Video Encryption

- Encrypt video files using password-based encryption.
- Decrypt encrypted video files using the original password.
- Download encrypted and decrypted files locally.

### User Interface

- Responsive design for desktop and mobile devices.
- Hamburger navigation menu.
- Separate sections for:
  - Image Encryption
  - Text Encryption
  - Video Encryption
- Progress indicators for encryption and decryption operations.
- QR code generation and scanning support.

---

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript (ES6+)

### Cryptography

- Web Crypto API
- AES-GCM (256-bit)
- PBKDF2
- SHA-256

### Additional Features

- QR Code Generation
- QR Code Reading
- FileReader API
- Blob API
- Canvas API

---

## Encryption Methods

### Image Encryption

Images use:

- AES-256-GCM
- Random 256-bit key generation
- Random 12-byte IV
- Secure browser cryptography

Encryption package format:

```
[MAGIC HEADER]
[VERSION]
[MIME TYPE]
[IV]
[ENCRYPTED DATA]
```

### Text and Video Encryption

Text and videos use password-based encryption:

- PBKDF2 Key Derivation
- 100,000 iterations
- SHA-256 hashing
- AES-256-GCM encryption

Stored format:

```
[SALT]
[IV]
[ENCRYPTED DATA]
```

---

## Project Structure

```text
project/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/secure-encryption-app.git
```

### 2. Open the Project

Simply open:

```text
index.html
```

in any modern browser.

No installation or build process is required.

---

## Browser Requirements

Recommended browsers:

- Google Chrome
- Microsoft Edge
- Brave
- Opera
- Firefox

Requirements:

- Web Crypto API support
- FileReader API support
- Canvas API support

For QR code scanning, browsers supporting `BarcodeDetector` provide the best experience.

---

## Usage

### Encrypt an Image

1. Open the application.
2. Select **Encrypt Image**.
3. Upload an image.
4. Click **Encrypt**.
5. Save:
   - Encrypted file
   - Generated key
   - Optional QR code

### Decrypt an Image

1. Select **Decrypt**.
2. Upload the encrypted `.enc` file.
3. Enter or scan the encryption key.
4. Click **Decrypt**.
5. Download the restored image.

### Encrypt Text

1. Enter text.
2. Enter a password.
3. Click **Encrypt**.
4. Share the encrypted output.

### Decrypt Text

1. Paste encrypted text.
2. Enter the correct password.
3. Click **Decrypt**.

### Encrypt Video

1. Upload a video.
2. Enter a password.
3. Click **Encrypt**.
4. Download the encrypted file.

### Decrypt Video

1. Upload the encrypted file.
2. Enter the original password.
3. Click **Decrypt**.
4. Download the decrypted video.

---

## Security Notes

- Encryption keys are never transmitted over the internet.
- Image encryption keys are generated randomly for maximum security.
- Password-based encryption uses PBKDF2 with SHA-256.
- Losing the encryption key means the encrypted image cannot be recovered.
- Decryption requires the exact original key or password.
- All cryptographic operations occur entirely within the browser.

---

## Limitations

- Large files may take longer to process depending on device performance.
- QR code scanning quality depends on image clarity.
- Encrypted files cannot be recovered without the correct key/password.
- Browser memory limitations may affect extremely large files.

---

## Future Improvements

- Drag-and-drop file uploads
- Dark/Light theme support
- Multiple file encryption
- ZIP archive encryption
- Audio encryption support
- Key management dashboard
- Progressive file streaming for very large files
- PWA (Progressive Web App) support

---

## License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute it for personal or commercial purposes.

---

## Disclaimer

This project is intended for educational and personal security purposes. While it uses modern browser cryptography standards, users should independently evaluate whether it meets their specific security requirements before using it for highly sensitive data.
