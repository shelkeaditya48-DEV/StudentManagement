
import { Component } from '@angular/core';
import { AddStudent } from './components/add-student/add-student';
import { StudentList } from './components/student-list/student-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddStudent, StudentList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
