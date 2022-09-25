import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { Register } from "../../../entities/register.entity";
import { IRegisterRequest } from "../../../interfaces/registers";

describe("Teste para metodo PATCH em /registers/:registerId", () => {
  let connection: DataSource;

  let testRegister1: IRegisterRequest = {
    nome: "Teste Kenzie",
    email: "teste@kenzie.com",
    password: "123456!",
    telefone: 419928587558,
    data_registro: "2022-09-25",
  };

  let testRegister2 = {
    nome: "Teste2 Kenzie",
    email: "teste2@kenzie.com",
    telefone: 419923738880,
  };

  let response1: any;
  let validEmail: any;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    response1 = await request(app).post("/registers").send(testRegister1);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Trying to update an Register", async () => {
    const RegisterLogin = {
      email: testRegister1.email,
      password: testRegister1.password,
    };

    const login = await request(app).post("/login").send(RegisterLogin);
    const { token } = login.body;

    const responsePatch = await request(app)
      .patch(`/registers/${response1.body.id}`)
      .send(testRegister2)
      .set("Authorization", `Bearer ${token}`);

    const responseGet = await request(app)
      .patch(`/registers/${response1.body.id}`)
      .set("Authorization", `Bearer ${token}`);

    expect(responsePatch.status).toEqual(200);
    expect(responseGet.statusCode).toBe(200);
  });

  test("Trying to update a Register that doesn't exist", async () => {
    const response = await request(app).get(`/registers/1`);

    expect(response.status).toEqual(404);
  });
});
