import { DefaultValuePipe, Controller, Get, Param, Post, Body, Query, Delete,UsePipes,ValidationPipe, Put } from '@nestjs/common';
import { FacultyService } from './app.FacultyService';
import { CreateFacultyDTO } from './app.FacultyForm.dto';

@Controller('faculty')
export class FacultyController {
    constructor(private facultysService: FacultyService) { }

    @Get()
    async getFacultys() {
        const facultys = await this.facultysService.getFacultys();
        return facultys;
    }

    @Get(':facultyID')
    async getFaculty(@Param('facultyID') facultyID) {
        const faculty = await this.facultysService.getFaculty(facultyID);
        return faculty;
    }

    @Post('/insertf')
    @UsePipes(new ValidationPipe())
    async addFaculty(@Body() createFacultyDTO: CreateFacultyDTO) {
        const faculty = await this.facultysService.addFaculty(createFacultyDTO);
        return faculty;
    }

    @Put('/updatef')
    @UsePipes(new ValidationPipe())
    updateFaculty( 
        @Body("facultyID", new DefaultValuePipe(1000)) facultyID:Number, 
        @Body("FacultyName") FacultyName:Number, 
    
        //@Body("facultyID") facultyID:number,
        @Body("Position")  Position:string, 
        @Body("Age")  Age:string,
      
  
    
        ): any {
      return this.facultysService.updateFaculty(facultyID,FacultyName,Position,Age)
      }

    @Delete('/deletef')
    async deleteFaculty(@Query() query) {
        const facultys = await this.facultysService.deleteFaculty(query.facultyID);
        return facultys;
    }
}