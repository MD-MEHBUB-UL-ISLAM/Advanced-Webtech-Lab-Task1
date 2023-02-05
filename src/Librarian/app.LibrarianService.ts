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
    
    return "the id is "+qry.bookid +" and name is "+qry.bookname;
}

insertUser(mydto:LibrarianForm):any {
    
        return "Book Inserted name: " + mydto.bookname+" and id is " + mydto.bookid + "borrow date"+ mydto.borrowdate + "return date"+ mydto.returndate + "author name is"+ mydto.authorname;
    }

updateUser(bookname,bookid,borrowdate,returndate,authorname):any {
        return "Book updated name: "  + bookname+" and id is " + bookid + "borrow date"+ borrowdate + "return date"+ returndate + " author name "+ authorname;   
     }


        updateUserbyid(bookname,bookid,authorname,borrowdate,returndate):any {
        return "Update book where id "  + bookname+" and id is " + bookid + "borrow date"+ borrowdate + "return date"+ returndate + " author name "+ authorname;    
    }
    deleteUserbyid(bookid):any {
    
        return "Delete id is "+bookid;
    }
    

}