import { IsNotEmpty,IsNumber,IsString,MinLength,MaxLength } from "class-validator";

export class CreateFacultyDTO {
    @IsNotEmpty()
     @IsNumber()
 


  facultyID: number;

    @IsNotEmpty({message: "Please enter Faculty Name"})
    @IsString()
    @MinLength(3)
    @MaxLength(65)
    FacultyName: string;

    @IsNotEmpty({message: "Please enter Faculty Position"})


    Position: string;
    @IsNotEmpty({message: "Please enter Faculty Age"})

    Age: string;
}