import { Injectable } from "@nestjs/common/decorators";
import { StudentForm } from "./app.StudentForm.dto";



@Injectable()
export class StudentService {

getIndex():string { 
    return "Student Index"; 

}
getUserByID(id: string | number):any {
    
    return "the id is "+id;
}

getUserByIDName(qry):any {
    
    return "the id is "+qry.id +" and name is "+qry.fullname+ " address is " +qry.address+" CGPA is "+qry.CGPA+ " email is "+qry.email+"phone number is"+qry.phone+"student is validate"+qry.isActive;
}

insertUser(mydto:StudentForm):any {
    
        return "Student Inserted name: " + mydto.fullname+" and id is: " + mydto.id+ "address is: "+mydto.address+" CGPA is: "+mydto.CGPA+ "email is"+mydto.email+"phone number is"+mydto.phone+"student is validate"+mydto.isActive;
    }

updateUser(id: string | number,fullname: string,address: string,CGPA: string,email,phone,isActive):any {
        return "Student updated name: " +fullname+" and id is " +id + " address is "+address+" CGPA is "+CGPA+ " email is "+email+"phone number is"+phone+"student is validate"+isActive;
    }
updateUserbyid(fullname: string | number,id: string,address: string,CGPA: string,email,phone,isActive):any {
        return "Update student where name " +fullname+" and change id to " +id + " address is "+address+" CGPA is " +CGPA+ " email is "+ email+"phone number is"+phone+"student is validate"+isActive;
    }
    deleteUserbyid(id: string | number):any {
    
        return "Delete id is "+id;
    }
    

}