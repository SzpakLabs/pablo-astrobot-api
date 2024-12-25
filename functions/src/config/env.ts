import dotenv from "dotenv";
import { defineString } from "firebase-functions/params";
import { existsSync } from "fs";
import { join } from "path";

const rootDir = process.cwd();
const envLocalPath = join(rootDir, ".env.local");
const envPath = join(rootDir, ".env");

// Define parameters
export const openaiKey = defineString("OPENAI_API_KEY");

export const loadEnvironmentVariables = async () => {
  try {
    // Only load from .env files in local development
    if (!process.env.FUNCTION_TARGET) {
      const envFile = existsSync(envLocalPath) ? envLocalPath : envPath;
      const result = dotenv.config({ path: envFile });

      if (result.error) {
        throw new Error(`Error loading ${envFile}: ${result.error.message}`);
      }
      console.log(`Loaded environment from ${envFile}`);
    }

    // Validate required environment variables
    const requiredEnvVars = ["OPENAI_API_KEY"] as const;
    const missingVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

    if (missingVars.length > 0) {
      throw new Error(
        `Missing required environment variables: ${missingVars.join(", ")}`,
      );
    }
  } catch (error) {
    console.error("Failed to load environment variables:", error);
    throw error;
  }
};

// Export the initialization function
export const initializeEnv = async () => {
  await loadEnvironmentVariables();
};

// Only initialize in local development
if (!process.env.FUNCTION_TARGET) {
  initializeEnv().catch((error) => {
    console.error("Environment initialization failed:", error);
    process.exit(1);
  });
}
