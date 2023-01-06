import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ApiKey } from '../api-keys/entities/api-key.entity/api-key.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column('simple-array')
  permissions: string[];

  @JoinTable()
  @OneToMany((_type) => ApiKey, (apiKey) => apiKey.user)
  apiKeys: ApiKey[];
}
