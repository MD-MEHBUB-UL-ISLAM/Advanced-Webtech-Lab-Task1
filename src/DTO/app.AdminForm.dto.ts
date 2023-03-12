import { IsEmail, IsInt, IsNotEmpty, IsString, Length } from "class-validator";

export class AdminForm {   
    //@IsNotEmpty({message: "Please enter your id"}) 
    //@IsInt()
    id: number;

    @IsNotEmpty()
    @Length(3,8)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

//@IsNotEmpty({message: "Please give users's photo"})
   // @IsString()
    filename: string;
     
}
