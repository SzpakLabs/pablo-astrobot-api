import { FastifyRequest, FastifyReply } from "fastify";

export const analyzeOcr = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  // TODO: Implement OCR analysis
  reply.send({ message: "OCR analysis endpoint" });
};

export const analyzeVision = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  // TODO: Implement Vision analysis
  reply.send({ message: "Vision analysis endpoint" });
};

export const generateReport = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  // TODO: Implement report generation
  reply.send({ message: "Report generation endpoint" });
};
