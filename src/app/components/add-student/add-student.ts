
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student';
@Component({
 
  selector: 'app-add-student',
  standalone:true,
  imports: [FormsModule],
  styleUrl: './add-student.css',
  templateUrl: './add-student.html',
  
})
export class AddStudent {
  private studentService=inject(StudentService);
  name='';
  department='';
  email='';

  addStudent():void{
    if(
      !this.name.trim()||
      !this.department.trim()||
      !this.email.trim()
    ){

      alert('Please fill in all fields.');
      return;
    }

    this.studentService.addStudent({
      name: this.name.trim(),
      department:this.department.trim(),
      email:this.email.trim()
    });

    this.name='';
    this.department='';
    this.email='';

  }
}
