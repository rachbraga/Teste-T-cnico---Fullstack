import { MigrationInterface, QueryRunner } from "typeorm";

export class createRegister1663956665585 implements MigrationInterface {
    name = 'createRegister1663956665585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "associate" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "email" character varying NOT NULL, "telefone" integer NOT NULL, "ativo" boolean NOT NULL, "registerId" uuid, CONSTRAINT "UQ_888cb1469f6a17d454a043ab935" UNIQUE ("email"), CONSTRAINT "PK_a493525ce8e507f74fb70b2b60d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "associate" ADD CONSTRAINT "FK_f8e7b477d6a175f958392b0c1df" FOREIGN KEY ("registerId") REFERENCES "register"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "associate" DROP CONSTRAINT "FK_f8e7b477d6a175f958392b0c1df"`);
        await queryRunner.query(`DROP TABLE "associate"`);
    }

}
