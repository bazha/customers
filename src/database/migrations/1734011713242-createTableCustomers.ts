import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCustomers1734011713242 implements MigrationInterface {
    name = 'CreateTableCustomers1734011713242'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "Customers"`);
        await queryRunner.query(`CREATE TABLE "Customers" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" character varying NOT NULL, CONSTRAINT "UQ_479ee8911543c94860214f5fc39" UNIQUE ("email"), CONSTRAINT "PK_c3220bb99cfda194990bc2975be" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Customers"`);
    }

}
