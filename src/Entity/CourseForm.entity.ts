import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable } from 'typeorm';
import { AdminEntity } from './Adminentity.entity';


@Entity("courseform")
export class CourseFormEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  @Column()
  day: string;
  @Column()
  time: string;

  @Column()
  roomno: string;


  @ManyToOne(() => AdminEntity, (admin) =>admin.courses , {
    cascade: true,
  })
    @JoinTable()

admin: AdminEntity[]


}