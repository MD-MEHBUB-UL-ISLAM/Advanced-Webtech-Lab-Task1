import { CourseEntity } from 'src/Entity/course.entity';
import { BookRegEntity } from 'src/Entity/app.Librarian.entity';
import { NoteEntity } from 'src/Entity/app.Notes.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, OneToOne } from 'typeorm';

@Entity("STUDENTREGISTERTABLE")
export class StudentRegEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;



  @Column()
  address: string;


  
  @OneToMany(() => CourseEntity, (course) => course.student)
  courses: CourseEntity[]

  @ManyToMany(() => BookRegEntity, (book) => book.student)
  @JoinTable()
  books: BookRegEntity[]
  


  @OneToOne(() => NoteEntity, (note) => note.student)
  @JoinTable()
  notes: NoteEntity[]



}





