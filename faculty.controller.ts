import {
    Body,
    Controller,
    Delete,
    FileTypeValidator,
    Get,
    MaxFileSizeValidator,
    Param,
    ParseFilePipe,
    ParseIntPipe,
    Post,
    Put,
    Query,
    UploadedFile,
    UseInterceptors,
    UsePipes,
    ValidationPipe,
    Session,
    UseGuards
    } from '@nestjs/common';
    import { UnauthorizedException } from '@nestjs/common/exceptions';
    import { FileInterceptor } from '@nestjs/platform-express';
    import { diskStorage } from 'multer';
    import { FacultyForm } from './facultyform.dto';
    import { FacultyService } from './facultyservice.service';
    import { StudentForm } from 'src/student/student.dto';
    import { StudentService } from 'src/student/student.service';
    import { SessionGuard } from './session.guard';
    import { Express } from 'express'
    
    @Controller('/faculty')
    export class FacultyController {
    constructor(private facultyService: FacultyService,
    private studentService: StudentService
    ) {}
    
    @Get('/index')
    getFaculty(): any {
    return this.facultyService.getIndex();
    }
    
    @Get('/findfaculty/:id')
    getFacultyByID(@Param('id', ParseIntPipe) id: number): any {
    return this.facultyService.getFacultyByID(id);
    }
    
    @Get('/findfaculty')
    getFacultyByIDName(@Query() qry: any): any {
    return this.facultyService.getUserByIDName(qry);
    }
    
    @Post('/insertfaculty')
    @UsePipes(new ValidationPipe())
    insertFaculty(@Body() mydto: FacultyForm): any {
    return this.facultyService.insertUser(mydto);
    }
    
    @Put('/updatefaculty/')
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    updateFaculty(@Session() session,@Body('name') name: string): any {
    console.log(session.email);
    return this.facultyService.updateUser(name, session.email);
    }
    
    @Put('/updatefaculty/:id')
    @UsePipes(new ValidationPipe())
    updateFacultybyid(
    @Body() mydto: FacultyForm,
    @Param('id', ParseIntPipe) id: number,
    ): any {
    return this.facultyService.updateUserbyid(mydto, id);
    }
    
    @Delete('/deletefaculty/:id')
    deleteFacultybyid(@Param('id', ParseIntPipe) id: number): any {
    return this.facultyService.deleteUserbyid(id);
    }
    
    @Post('/insertstudent')
    @UsePipes(new ValidationPipe())
    insertStudent(@Body() studentdto: StudentForm): any {
    return this.studentService.insertStudent(studentdto);
    }
    
    @Get('/findstudentsbyfaculty/:id')
    getStudentsByFacultyID(@Param('id', ParseIntPipe) id: number): any {
    return this.facultyService.getStudentsByFacultyID(id);
    }
    
    @Get('/findfacultybystudent/:id')
    getFacultyByStudentID(@Param('id', ParseIntPipe) id: number): any {
    return this.studentService.getFacultyByStudentID(id);
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
    signup(@Body() mydto:FacultyForm,@UploadedFile( new ParseFilePipe({
    validators: [
    new MaxFileSizeValidator({ maxSize: 16000 }),
    new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
    ],
    }),) file: Express.Multer.File )
    {

    mydto.filename = file.filename;  

return this.facultyService.signup(mydto);
console.log(file)
}
@Get('/signin')
signin(@Session() session, @Body() mydto:FacultyForm)
{
if(this.facultyService.signin(mydto))
{
  session.email = mydto.email;

  console.log(session.email);
  return {message:"success"};

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
    return {message:"you are logged out"};
  }
  else
  {
    throw new UnauthorizedException("invalid actions");
  }
}
    }