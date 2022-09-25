import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import listAssociateService from "../../../services/associate/listAssociates.services";

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
});
