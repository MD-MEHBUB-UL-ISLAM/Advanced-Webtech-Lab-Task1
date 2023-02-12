import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, Length, Min, Max, IsDate } from "class-validator";


export class LibrarianForm {   
    @IsNotEmpty({message: "Please enter your BookID"}) 
    @IsInt()
    bookid: number;
   

    @IsNotEmpty({message: "Please enter your Book information"}) 
    @Length(3,8)
    bookname: string;
    authorname:string;
    takeinfo:string;

    @IsNotEmpty({message: "Please enter your Book rating"}) 
    @IsInt()
    @Min(0)
    @Max(10)
    rating:number;


 @IsNotEmpty({message: "Please enter your Book register date"}) 

@IsDate()
@Type(() => Date)
registeredSince: Date;



  
   



}