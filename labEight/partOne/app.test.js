// import supertest and the express app
import request from "supertest";
import app from "./app";

describe("Calculator Routes", () => {
  // generate some random numbers to test the calculator
  let number1 = Math.floor(Math.random() * 1_000_000);
  let number2 = Math.floor(Math.random() * 1_000_000);
  test("GET /api/add => sum of numbers", () => {
    return request(app)
      .get(`/api/add?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(number1 + number2);
      });
  });

  test("GET /api/sub => subtraction of numbers", () => {
    return request(app)
      .get(`/api/sub?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(number1 - number2);
      });
  });

  test("GET /api/multiply multiply => multiplication of numbers", () => {
    return request(app)
      .get(`/api/multiply?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(number1 * number2);
      });
  });

  test("GET /api/div => Division of numbers", () => {
    return request(app)
      .get(`/api/div?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(number1 / number2);
      });
  });
});
