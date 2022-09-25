import { MigrationInterface, QueryRunner } from "typeorm";

export class createRegister1663866422547 implements MigrationInterface {
    name = 'createRegister1663866422547'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "register" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "telefone" integer NOT NULL, "ativo" boolean NOT NULL, "data_registro" character varying NOT NULL, CONSTRAINT "PK_14473cc8f2caa81fd19f7648d54" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "register"`);
    }

}
