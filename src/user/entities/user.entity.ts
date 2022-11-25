import { Cv } from './../../cv/entities/cv.entity';
import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userName: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @OneToMany((Type) => Cv, (cv: Cv) => cv.user, {})
  cv: Cv[];
}
