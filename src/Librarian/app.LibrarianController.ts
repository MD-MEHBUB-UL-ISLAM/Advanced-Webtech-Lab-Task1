import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Request, UsePipes, ValidationPipe } from "@nestjs/common";
import { LibrarianForm } from "./app.LibrarianForm.dto";
import { LibrarianService } from "./app.LibrarianService";


@Controller("/book")
export class LibrarianController
{ 
  constructor(private librarianService: LibrarianService){}

  @Get("/index")
    getAdmin(): any { 
        return this.librarianService.getIndex();
    }
    @Get("/findbook/:bookid")
    getUserByID(@Param("bookid", ParseIntPipe) bookid:number,): any {
      return this.librarianService.getUserByID(bookid);
    }


    @Get("/findbook")
    getUserByIDName(@Query() qry:any): any {
      return this.librarianService.getUserByIDName(qry);
    }  
    @Post("/insertbook")
    @UsePipes(new ValidationPipe())
    insertUser(@Body() mydto:LibrarianForm): any {
      return this.librarianService.insertUser(mydto);
    }
  
    @Put("/updatebook/")
    @UsePipes(new ValidationPipe())
    updateUser( 
      @Body("bookname")  bookname:string, 
      @Body("author")  authorname:string, 
      @Body("bookid") bookid:number,
      @Body("returndate")   returndate:number,
      @Body("borrowdatw")  borrowdate:number

      ): any {
    return this.librarianService.updateUser(bookname, bookid,borrowdate,returndate,authorname);
    }
    
    @Put("/updatebook/:bookid")
  updateUserbyid( 
      @Body("bookname") bookname:string, 
     
      @Body("author") authorname:string, 
   
      @Body("returndate") returndate:number,
      @Body("borrowdatw") borrowdate:number,
      @Param("bookid", ParseIntPipe) bookid:number
      ): any {
    return this.librarianService.updateUserbyid(bookname, bookid,borrowdate,returndate,authorname);
    }

    @Delete("/deletebook/:bookid")
  deleteUserbyid( 
     @Param("bookid", ParseIntPipe) bookid:number
      ): any {
    return this.librarianService.deleteUserbyid(bookid);
    }

}