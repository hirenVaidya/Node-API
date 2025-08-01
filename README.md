﻿# API MeetsVirtual Encrypted Contact API

This is a simple Express.js backend server for handling encrypted form data submissions securely. It decrypts the incoming AES-encrypted data using a shared secret key and responds with a success message.

## 🚀 Features

- Accepts AES-encrypted contact form data via POST request
- Decrypts data on the server using `crypto-js`
- Provides a basic `/` route to confirm API status
- CORS enabled for development

---

## 🛠 Installation

1. **Clone the repository** (or copy the code into a file named `server.js`):

```bash
git clone <your-repo-url>
cd <your-project-directory>

npm install express crypto-js body-parser
node server.js
GET /
Description: Health check endpoint
Response:
"MeetsVirtual API is running!"
POST /api/contact -- to check in postman
  Request Body:
{
  "encryptedData": "<AES_ENCRYPTED_STRING>"
}
