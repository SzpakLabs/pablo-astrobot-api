import fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import { analyzeOcr, analyzeVision, generateReport } from "./controllers/index";

const app: FastifyInstance = fastify({
  logger: true,
  disableRequestLogging: false,
});

// Register plugins
app.register(cors);
app.register(multipart);
app.register(swagger, {
  swagger: {
    info: {
      title: "AI Chatbot API",
      description: "API for AI-based chatbot and OCR analysis",
      version: "1.0.0",
    },
  },
});

// Register Swagger UI
app.register(swaggerUi, {
  routePrefix: "/documentation",
  uiConfig: {
    docExpansion: "list",
    deepLinking: false,
  },
  staticCSP: true,
});

// Define routes
app.post("/api/analyze/ocr", analyzeOcr);
app.post("/api/analyze/vision", analyzeVision);
app.post("/api/report/generate", generateReport);

// Add health check endpoint
app.get("/health", async () => ({ status: "ok" }));

// Listen handler for local development
if (!process.env.FUNCTION_TARGET) {
  const port = process.env.PORT || 8080;
  const start = async () => {
    try {
      await app.listen({ port: Number(port), host: "0.0.0.0" });
      app.log.info(`Server listening on port ${port}`);
    } catch (err) {
      app.log.error(err);
      process.exit(1);
    }
  };
  start();
}

export default app;
