import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer";
import { Associate } from "./associate.entity";

@Entity("register")
class Register {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  ativo: boolean;

  @Column()
  data_registro: string;

  @OneToMany((type) => Associate, (associate) => associate.register, {
    onDelete: "CASCADE",
    eager: true,
  })
  associate: Associate[];
}

export { Register };
