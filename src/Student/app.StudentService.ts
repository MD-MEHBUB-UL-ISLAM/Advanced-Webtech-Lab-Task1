import { Injectable } from "@nestjs/common/decorators";
import { StudentForm } from "./app.StudentForm.dto";


@Injectable()
export class StudentService {

getIndex():string { 
    return "Student Index"; 

}
getUserByID(id):any {
    
    return "the id is "+id;
}

getUserByIDName(qry):any {
    
    return "the id is "+qry.id +" and name is "+qry.firstname + " " +qry.lastname + "address is" + qry.Address + "Date of birth is" + qry.DOB;
}

insertUser(mydto:StudentForm):any {
    
        return "Student Inserted name: " + mydto.firstname+" and id is " + mydto.id+ "address is" + mydto.Address + "Date of birth is" + mydto.DOB;
    }

updateUser(firstname,id,DOB,lastname,Address):any {
        return "Student updated name: " +firstname+ " "+lastname+ " " + " and id is " +id + "address is" + Address + "Date of birth is" + DOB;
    }
updateUserbyid(firstname,lastname,id,Address,DOB):any {
        return "Update student where id " +firstname+ " "+lastname+ " " + " and id is " +id + "address is" + Address + "Date of birth is" + DOB;;
    }
    deleteUserbyid(id):any {
    
        return "Delete id is "+id;
    }
    

}