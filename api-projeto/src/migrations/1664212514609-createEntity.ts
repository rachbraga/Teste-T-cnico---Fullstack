import { MigrationInterface, QueryRunner } from "typeorm";

export class createEntity1664212514609 implements MigrationInterface {
  name = "createEntity1664212514609";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "register" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "telefone" character varying NOT NULL, "ativo" boolean NOT NULL, "data_registro" character varying NOT NULL, CONSTRAINT "PK_14473cc8f2caa81fd19f7648d54" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "associate" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "email" character varying NOT NULL, "telefone" character varying NOT NULL, "ativo" boolean NOT NULL, "registerId" uuid, CONSTRAINT "UQ_888cb1469f6a17d454a043ab935" UNIQUE ("email"), CONSTRAINT "PK_a493525ce8e507f74fb70b2b60d" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "associate" ADD CONSTRAINT "FK_f8e7b477d6a175f958392b0c1df" FOREIGN KEY ("registerId") REFERENCES "register"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "associate" DROP CONSTRAINT "FK_f8e7b477d6a175f958392b0c1df"`
    );
    await queryRunner.query(`DROP TABLE "associate"`);
    await queryRunner.query(`DROP TABLE "register"`);
  }
}
