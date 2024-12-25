# 🚀 Pablo Astrobot/Astrobar - API Documentation

## 📚 **Overview**
Pablo Astrobot/Astrobar is an AI-powered chatbot API designed to provide astrological insights and analysis. Built on **Fastify** and leveraging **OpenAI API** and **Tesseract.js**, this project aims to deliver accurate and insightful astrological reports and image-based analysis.

---

## 🛠️ **Tech Stack**
- **Framework:** Fastify (Node.js)
- **AI Integration:** OpenAI API (GPT-4 Vision)
- **OCR Engine:** Tesseract.js
- **Cloud Functions:** Firebase Cloud Functions
- **Storage:** Firebase Storage
- **Environment Management:** Dotenv
- **Documentation:** Swagger (@fastify/swagger)
- **Testing:** ThunderClient (VS Code)

---

## 📂 **Project Structure**
TODO: add structure

---

## 🌐 **API Endpoints**

### 📤 **1. Upload Image**
- **URL:** `POST /api/upload`
- **Description:** Uploads an image to the server.
- **Response:**
```json
{
  "status": "success",
  "upload_id": "12345"
}
```

### 🛠️ **2. OCR Analysis**
- **URL:** `POST /api/analyze/ocr`
- **Description:** Extracts text from the uploaded image using Tesseract.js.
- **Response:**
```json
{
  "source": "Tesseract",
  "data": "Extracted text from the image"
}
```

### 🤖 **3. OpenAI Vision Analysis**
- **URL:** `POST /api/analyze/vision`
- **Description:** Analyzes the uploaded image using OpenAI Vision API.
- **Response:**
```json
{
  "source": "OpenAI",
  "data": "Insights from OpenAI Vision API"
}
```

### 📜 **4. Generate Report**
- **URL:** `POST /api/report/generate`
- **Description:** Generates an astrological report using OCR or OpenAI data.
- **Request Body:**
```json
{
  "source": "OCR",
  "data": "Extracted data from OCR/OpenAI"
}
```
- **Response:**
```json
{
  "status": "success",
  "report": "Detailed astrological report"
}
```

---

## 🔑 **Environment Variables (.env)**
```
OPENAI_API_KEY=your_openai_api_key
PORT=3000
```

---

## 📦 **Installation**
1. Clone the repository:
```bash
git clone https://github.com/SzpakLabs/pablo-astrobot-api.git
cd pablo-astrobot/functions
```
2. Install dependencies:
```bash
npm install
```
3. Set up environment variables in `.env`.
4. Start the server locally:
```bash
npm run serve
```
5. Test API endpoints using ThunderClient or Firebase Emulator.

---

## 🚀 **Deployment**
1. Build the project:
```bash
firebase deploy --only functions
```
2. Verify the deployment via Firebase Console.

---

## ✅ **Testing**
- Use **ThunderClient** (VS Code) to test API endpoints.
- Check logs with Firebase CLI:
```bash
firebase functions:log
```

---

## 📚 **Useful Resources**
- [Fastify Documentation](https://www.fastify.io/)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Tesseract.js Documentation](https://github.com/naptha/tesseract.js)
- [Firebase Documentation](https://firebase.google.com/docs/functions)

---

## 🛡️ **Security Best Practices**
- Keep sensitive keys in `.env`.
- Validate and sanitize all user inputs.
- Enable CORS for trusted origins only.

---

## 🧠 **Next Steps**
1. Finalize all API endpoints.
2. Optimize OCR and Vision API calls.
3. Write automated tests for critical routes.
4. Deploy to production.

---

## 🤝 **Contributing**
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📧 **Contact**
- **Author:** SzpakLabs
- **Email:** szpak.labs@gmail.com
- **GitHub:** [SzpakLabs](https://github.com/SzpakLabs)

---

**✨ May the stars guide your API responses! 🌌🔮**

