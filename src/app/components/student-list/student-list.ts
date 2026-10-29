
import { Component ,inject} from '@angular/core';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-student-list',
  styleUrl: './student-list.css',
  templateUrl: './student-list.html',
  standalone:true,

})
export class StudentList {
  studentService=inject(StudentService);

  deleteStudent(id:number):void{
    this.studentService.deleteStudent(id);
  }
}
