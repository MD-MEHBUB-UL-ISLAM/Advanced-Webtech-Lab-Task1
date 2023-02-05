import { IsInt, IsNotEmpty, Length } from "class-validator";

export class StudentForm {   
    @IsNotEmpty({message: "Please enter student's id and DOB"}) 
    @IsInt()
    id: number;
   

    @IsNotEmpty({message: "Please give student's information"})
    @Length(3,8)
    firstname: string;
    lastname:string;
    Address:string;
    DOB: string;






}