import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../../entities/user.entity';

@Entity()
export class ApiKey {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key: string;

  @Column()
  uuid: string;

  @ManyToOne((_type) => User, (user) => user.apiKeys)
  user: User; // 👈 relationship with User Entity
}
