import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import deleteRegisterService from "../../../services/register/deleteRegister.service";
import registerUpdateService from "../../../services/register/registerUpdate.service";
import app from "../../../app";
import request from "supertest";

const registerAdm = {
  name: "daniel",
  email: "daniel@kenzie.com",
  password: "123456",
  isAdm: true,
};

const loginAdm = {
  email: "daniel@kenzie.com",
  password: "123456",
};

const registerNotAdm = {
  name: "ugo",
  email: "ugo@kenzie.com",
  password: "123456",
  isAdm: false,
};

const loginNotAdm = {
  email: "ugo@kenzie.com",
  password: "123456",
};

describe("Testing routeDELETE /register/<uuid>", () => {
  it("Testing tokenless deletion", async () => {
    const login = await request(app).post("/login").send(loginAdm);
    const { token } = login.body;
    const register = await request(app)
      .get("/registers/profile")
      .set("Authorization", `Bearer ${token}`);

    const response = await request(app).delete(
      `/registers/${register.body.uuid}`
    );

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message", "Acesso negado.");
  });

  it("Testing Deleting Another register Without Permission", async () => {
    const signinNotAdm = await request(app).post("/login").send(loginNotAdm);
    const signinAdm = await request(app).post("/login").send(loginAdm);
    const tokenNotAdm = signinNotAdm.body.token;
    const tokenAdm = signinAdm.body.token;

    const adm = await request(app)
      .get("/registers/profile")
      .set("Authorization", `Bearer ${tokenAdm}`);

    const response = await request(app)
      .delete(`/registers/${adm.body.uuid}`)
      .set("Authorization", `Bearer ${tokenNotAdm}`);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message", "Acesso negado.");
  });

  it("Testing Deleting Another register with Permission", async () => {
    const signinNotAdm = await request(app).post("/login").send(loginNotAdm);
    const signinAdm = await request(app).post("/login").send(loginAdm);
    const tokenNotAdm = signinNotAdm.body.token;
    const tokenAdm = signinAdm.body.token;

    const notAdm = await request(app)
      .get("/registers/profile")
      .set("Authorization", `Bearer ${tokenNotAdm}`);

    const response = await request(app)
      .delete(`/registers/${notAdm.body.uuid}`)
      .set("Authorization", `Bearer ${tokenAdm}`);

    expect(response.body).toHaveProperty("message", "Acesso negado.");
  });
});
