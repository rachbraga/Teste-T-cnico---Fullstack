import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Register } from "./register.entity";

@Entity("associate")
class Associate {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  telefone: number;

  @Column()
  ativo: boolean;

  @ManyToOne((type) => Register, (register) => register.associate, {
    onDelete: "CASCADE",
  })
  register: Register;
}

export { Associate };
