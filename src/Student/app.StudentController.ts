import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Request, UsePipes, ValidationPipe } from "@nestjs/common";
import { StudentForm } from "./app.StudentForm.dto";
import { StudentService } from "./app.StudentService";


@Controller("/student")
export class StudentController
{ 
  constructor(private studentService: StudentService){}

  @Get("/index")
    getAdmin(): any { 
        return this.studentService.getIndex();
    }
    @Get("/findstudent/:id")
    getUserByID(@Param("id", ParseIntPipe) id:number,): any {
      return this.studentService.getUserByID(id);
    }


    @Get("/findstudent")
    getUserByIDName(@Query() qry:any): any {
      return this.studentService.getUserByIDName(qry);
    }  
    @Post("/insertstudent")
    @UsePipes(new ValidationPipe())
    insertUser(@Body() mydto:StudentForm): any {
      return this.studentService.insertUser(mydto);
    }
  
    @Put("/updatestudent/")
    @UsePipes(new ValidationPipe())
    updateUser( 
     
      @Body("id") id:number,
      @Body("fistname") firstname:string, 
      @Body("lastname") lastname:string, 
      @Body("DOB") DOB:string, 
      @Body("Address") Address:string, 
      ): any {
    return this.studentService.updateUser(firstname,lastname,DOB,Address,id);
    }
    
    @Put("/updatestudent/:id")
  updateUserbyid( 
      @Body("fistname") firstname:string, 
      @Body("lastname") lastname:string, 
      @Body("DOB") DOB:string, 
      @Body("Address") Address:string, 
      @Param("id", ParseIntPipe) id:number
      ): any {
    return this.studentService.updateUserbyid(firstname,lastname,DOB,Address,id);
    }

    @Delete("/deletestudent/:id")
  deleteUserbyid( 
     @Param("id", ParseIntPipe) id:number
      ): any {
    return this.studentService.deleteUserbyid(id);
    }

}