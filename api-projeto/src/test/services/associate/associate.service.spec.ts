import { DataSource } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import app from "../../../app";
import request from "supertest";
import AppDataSource from "../../../data-source";
import listAssociateService from "../../../services/associate/listAssociates.services";
import createAssociateService from "../../../services/associate/associate.services";
import { AppError } from "../../../errors/AppError";
const testassociate = {
  nome: "testName",
  email: "testBreed",
  telefone: "41992373880",
  registerId: uuidv4(),
};

describe("List all associates", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Should list all registered associates", async () => {
    const associatesList = await listAssociateService();

    expect(associatesList).toHaveProperty("map");
  });

  test("Should insert the information of new associate in the database", async () => {
    try {
      const response = await request(app)
        .post("/associates")
        .send(testassociate);

      expect(response.status).toEqual(201);

      const newassociate = await createAssociateService(
        testassociate.nome,
        testassociate.email,
        testassociate.telefone,
        testassociate.registerId
      );
    } catch (error) {
      if (error instanceof AppError) {
        expect(error.message).toBe("register not exist");
      }
    }
  });
});
