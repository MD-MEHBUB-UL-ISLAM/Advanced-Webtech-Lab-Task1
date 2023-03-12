import { Body, Controller, DefaultValuePipe, FileTypeValidator, MaxFileSizeValidator,ParseFilePipe,UploadedFile,UseInterceptors,Session,UseGuards ,Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Request, UsePipes, ValidationPipe } from "@nestjs/common";


import { AdminForm } from "./app.AdminForm.dto";
import { CourseForm } from "./app.CourseForm.dto";
import { AssignedFacultyForm } from "./app.AssignedFacultyForm.dto";
import { AdminService } from "./app.AdminService";
import { AdminFormUpdate } from "./AdminFormUpdate.dto";
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { SessionGuard } from "./adminsession.guard";
import { CourseFormService } from "./app.CourseFormService";


@Controller("/admin")
export class AdminController
{ 
  constructor(private adminService: AdminService,
    private courseFormService: CourseFormService){}

  @Get("/index")
    getAdmin(): any { 
        return this.adminService.getIndex();
    }
    @Get("/finduser/:id")
    getUserByID(@Param("id", ParseIntPipe) id:number,): any {
      return this.adminService.getUserByID(id);
    }


    @Get("/finduser")
    getUserByIDName(@Query() qry:any): any {
      return this.adminService.getUserByIDName(qry);
    }  
    @Post("/insertuser")
    @UsePipes(new ValidationPipe())
    insertUser(@Body() mydto:AdminForm): any {
      return this.adminService.insertUser(mydto);
    }
  
    @Put("/updateuser")
     @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    updateAdmin(@Session() session,@Body('name') name: string): any {
      console.log(session.email);
      return this.adminService.updateUser(name, session.email);
    }
    
    @Put("/updateuser/:id")
     updateUserbyid( 
      @Body() mydto: AdminFormUpdate,
      @Param("id", ParseIntPipe) id:number
      ): any {
    return this.adminService.updateUserbyid(mydto,id);
    }

    @Delete("/deleteuser/:id")
  deleteUserbyid( 
     @Param("id", ParseIntPipe) id:number
      ): any {
    return this.adminService.deleteUserbyid(id);
    }
    @Post("/assigncourse")
    @UsePipes(new ValidationPipe())
    assignCourse(@Body() mydto:CourseForm): any {
 
      return this.courseFormService.assignCourse(mydto);
      }

      

   @Delete("deletecourse/:id")
   deleteCoursebytitle( 
    @Param("id", ParseIntPipe) id:number
    ): any {
     return this.courseFormService.deleteCoursebytitle(id);
     }

     @Get("/findcourse")
     getCoursesById(@Param("id", ParseIntPipe) id:number,): any {
       return this.courseFormService.getCoursesById(id);
     }

     @Post("/assignfaculty")
    @UsePipes(new ValidationPipe())
    assignFaculty(@Body() mydto:AssignedFacultyForm): any {
      return this.adminService.assignFaculty(mydto);
    }

   
    
@Post('/signup')
@UseInterceptors(FileInterceptor('myfile',
{storage:diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null,Date.now()+file.originalname)
  }
})

}))
signup(@Body() mydto:AdminForm,@UploadedFile(  new ParseFilePipe({
  validators: [
    new MaxFileSizeValidator({ maxSize: 16000 }),
    new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
  ],
}),) file: Express.Multer.File){

mydto.filename = file.filename;  

return this.adminService.signup(mydto);
console.log(file)
}
@Get('/signin')
signin(@Session() session, @Body() mydto:AdminForm)
{
if(this.adminService.signin(mydto))
{
  session.email = mydto.email;

  console.log(session.email);
  return {message:"LOGIN SUCCESSFUL!!"};

}
else
{
  return {message:"invalid credentials"};
}
 
}
@Get('/signout')
signout(@Session() session)
{
  if(session.destroy())
  {
    return {message:"LOGGED OUT SUCCESSFULLY"};
  }
  else
  {
    throw new UnauthorizedException("invalid actions");
  }
}

@Post('/sendemail')
sendEmail(@Body() mydata){
return this.adminService.sendEmail(mydata);
}
}