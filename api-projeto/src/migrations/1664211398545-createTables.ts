import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1664211398545 implements MigrationInterface {
    name = 'createTables1664211398545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "associate" DROP CONSTRAINT "FK_f8e7b477d6a175f958392b0c1df"`);
        await queryRunner.query(`ALTER TABLE "associate" ADD CONSTRAINT "FK_f8e7b477d6a175f958392b0c1df" FOREIGN KEY ("registerId") REFERENCES "register"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "associate" DROP CONSTRAINT "FK_f8e7b477d6a175f958392b0c1df"`);
        await queryRunner.query(`ALTER TABLE "associate" ADD CONSTRAINT "FK_f8e7b477d6a175f958392b0c1df" FOREIGN KEY ("registerId") REFERENCES "register"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
