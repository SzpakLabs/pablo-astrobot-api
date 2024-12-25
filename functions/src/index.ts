/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { https } from "firebase-functions";
import { openaiKey } from "./config/env";
import app from "./app";

// Set up environment variables for Firebase Functions
process.env.OPENAI_API_KEY = openaiKey.value();

export const api = https.onRequest(async (request, response) => {
  await app.ready();
  app.server.emit("request", request, response);
});
