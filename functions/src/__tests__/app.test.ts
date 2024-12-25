import { describe, it, expect, beforeAll, afterAll } from "vitest";
import app from "../app";
import { FastifyInstance } from "fastify";

describe("API Endpoints", () => {
  let server: FastifyInstance;

  beforeAll(async () => {
    server = app;
    await server.ready();
  });

  afterAll(async () => {
    await server.close();
  });

  it("should return health check", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/health",
    });

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.payload)).toEqual({ status: "ok" });
  });

  // Add more tests for other endpoints
});
