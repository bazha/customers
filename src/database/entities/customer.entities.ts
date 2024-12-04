import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cutomers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;
}
