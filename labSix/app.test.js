import request from "supertest";
import express from "express";
import operationsRouter from "./controllers/operations";

// Set up an Express app with the route for testing
const app = express();
app.use("/api", operationsRouter); // Assume the route is mounted at /api

describe("GET /evaluate", () => {
  test("should return the correct result for a valid expression", async () => {
    const response = await request(app)
      .get("/api/evaluate")
      .query({ expression: "1+2/3*9" });

    expect(response.statusCode).toBe(200); // Expect status 200
    expect(response.body.result).toBe(7); // Expect the correct result (1 + 2/3 * 9)
  });

  test("should return a 400 error if no expression is provided", async () => {
    const response = await request(app).get("/api/evaluate"); // No query string here

    expect(response.statusCode).toBe(400); // Expect status 400
    expect(response.body.error).toBe("Expression is required"); // Expect correct error message
  });

  test("should return a 500 error for an invalid mathematical expression", async () => {
    const response = await request(app)
      .get("/api/evaluate")
      .query({ expression: "1 2" }); // Invalid expression - because 1 (space) 2 is not a mathametical expression

    expect(response.statusCode).toBe(500); // Expect status 500
    expect(response.body.error).toBe("Invalid mathematical expression"); // Expect correct error message
  });
});
