import { User } from './../../user/entities/user.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  Entity,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Skill } from '../../skill/entities/skill.entity';

@Entity('cv')
export class Cv {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  firstName: string;
  @Column()
  age: number;
  @Column()
  Cin: number;
  @Column()
  job: string;
  @Column()
  path: string;
  @CreateDateColumn({ update: false })
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
  @ManyToOne((Type) => User, (user: User) => user.cv, {})
  user: User;
  @ManyToMany(() => Skill)
  skill: Skill[];
}
