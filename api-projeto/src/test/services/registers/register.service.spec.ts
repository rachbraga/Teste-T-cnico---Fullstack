import createRegisterService from "../../../services/register/register.services";
import createSessionRegisterService from "../../../services/sessions/createSessionRegister.service";
import { DataSource } from "typeorm";
import app from "../../../app";
import AppDataSource from "../../../data-source";
import { AppError } from "../../../errors/AppError";
import request from "supertest";

describe("Create an register", () => {
  let connection: DataSource;

  const registerTest1 = {
    nome: "test",
    email: "test@email.com",
    password: "12345",
    telefone: 99999999,
    data_registro: "2022-09-24",
  };

  const registerTest2 = {
    nome: "test2",
    email: "test2@email.com",
    password: "12345",
    telefone: 99999999,
    data_registro: "2022-09-24",
  };

  const test1Login = {
    email: "test@email.com",
    password: "12345",
  };

  const test2Login = {
    email: "test2@email.com",
    password: "12345",
  };

  const ErroLogin = {
    email: "test@email.com",
    password: "123456",
  };

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during DataSource initialization", err);
      });
  }); //criar conexao com banco

  afterAll(async () => {
    await connection.destroy(); //fechar conexão com banco de
  });

  it("Should insert the information of new register in the database", async () => {
    const response = await request(app).post("/registers").send(registerTest1);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("nome");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("telefone");
    expect(response.body).toHaveProperty("data_registro");
    expect(response.body).toHaveProperty("ativo");
    expect(response.body).not.toHaveProperty("password");
  });

  it("Testing register creation with already used email", async () => {
    try {
      const response = await request(app)
        .post("/registers")
        .send(registerTest1);

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty("Email already exists");
    } catch (error) {
      if (error instanceof AppError) {
        expect(error.message).toBe("Wrong email/password");
        expect(error.statusCode).toBe(401);
      }
    }
  });

  it("Validate email", async () => {
    const register = await request(app).post("/registers").send(registerTest2);
    const { id } = register.body;

    await request(app).get(`/registers/verify/${id}`);
  });

  it("Testing valid login", async () => {
    const response = await request(app).post("/login").send(test2Login);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
    expect(typeof response.body.token).toBe("string");
  });

  it("Testing invalid login", async () => {
    const response = await request(app).post("/login").send(ErroLogin);

    expect(response.statusCode).toBe(401);
  });
});
