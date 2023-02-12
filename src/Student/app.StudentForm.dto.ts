
import { IsInt, IsNotEmpty ,IsEmail,Matches,IsBoolean} from "class-validator";

export class StudentForm {   
    @IsNotEmpty({message: "Please enter student's id"}) 
    @IsInt()
    id: number;
   

    @IsNotEmpty({message: "Please give student's information"})
    fullname:string;
    address:string;
 
    CGPA:string;
    @IsNotEmpty({message: "Please give student's email"})
    @IsEmail()
  email: string;

  @IsNotEmpty({message: "Please give student's phone number"})

  @Matches(/^(?:(?:\+|00)88|01)?\d{11}$/)
  phone: string;



  @IsNotEmpty({message: "Please give student's validate or active or inactive or nonvalidate"})
@IsBoolean()
isActive: boolean;


 


}