import { MigrationInterface, QueryRunner } from "typeorm";

export class createRegisterEntity1664244051561 implements MigrationInterface {
    name = 'createRegisterEntity1664244051561'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "register" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "register" ADD "telefone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "associate" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "associate" ADD "telefone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "associate" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "associate" ADD "telefone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "register" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "register" ADD "telefone" integer NOT NULL`);
    }

}
