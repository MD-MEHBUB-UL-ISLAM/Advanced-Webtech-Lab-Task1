import { Injectable } from "@nestjs/common/decorators";
import { LibrarianForm } from "./app.LibrarianForm.dto";


@Injectable()
export class LibrarianService {

getIndex():string { 
    return "Book Index"; 

}
getUserByID(bookid):any {
    
    return "the id is "+bookid;
}

getUserByIDName(qry):any {
    
    return "the id is "+qry.bookid +" and name is "+qry.bookname+ " author name is "+  qry.authorname+" take info " + qry.takeinfo+ "book rating is" +qry.rating+ "book register date"+qry.registeredSince;
}

insertUser(mydto:LibrarianForm):any {
    return "BOOK Inserted name: " + mydto.bookname+" and id is " + mydto.bookid+ " author name is "+  mydto.authorname+" take info " +mydto.takeinfo+ "book rating is" +mydto.rating+ "book register date"+mydto.registeredSince; 
    }


updateUser(bookname,bookid,authorname,takeinfo,rating,registeredSince):any {
    return "BOOK updated name: " +bookname+" and id is " +bookid+ " author name is "+  authorname+" take info " +takeinfo+ "book rating is" +rating+ "book register date"+registeredSince;
     }


        updateUserbyid(bookname,bookid,authorname,takeinfo,rating,registeredSince):any {
            return "Update book where id " +bookid+" and change name to " +bookname+" authorname is "+  authorname+ " take info " +takeinfo+ "book rating is" +rating+ "book register date"+registeredSince;
    }
    deleteUserbyid(bookid):any {
    
        return "Delete id is "+bookid;
    }
    

}