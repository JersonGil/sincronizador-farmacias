import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Inventory {
  @PrimaryColumn()
  codprod: string;

  @Column()
  descprod: string;

  @Column('int')
  exitsfar: number;

  @Column('double')
  costo: number;

  @Column('double')
  pvfar: number;

  @Column('double')
  pvp: number;

  @Column()
  codbarra: string;
}
