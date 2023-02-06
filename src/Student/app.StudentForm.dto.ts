import { IsInt, IsNotEmpty, Length } from "class-validator";

export class StudentForm {   
    @IsNotEmpty({message: "Please enter student's id and DOB"}) 
    @IsInt()
    id: number;
   

    @IsNotEmpty({message: "Please give student's information"})
    
   fullname:string;
   address:string;
   CGPA:string;
 






}