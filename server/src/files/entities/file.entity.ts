import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  fieldname: string;
  
  @Column('varchar')
  originalname: string;
  
  @Column('varchar')
  encoding: string;
  
  @Column('varchar')
  mimetype: string;
  
  @Column('varchar')
  destination: string;
  
  @Column('varchar')
  filename: string;
  
  @Column('varchar')
  path: string;
  
  @Column('int')
  size: number;

  @Column('varchar')
  filecategory: string;
}
