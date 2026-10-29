
import { Injectable, signal, computed } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  department: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students = signal<Student[]>([
    {
      id: 1,
      name: 'Aditya Shelke',
      department: 'Computer Science',
      email: 'adityashelke1@gmail.com'
    },
    {
      id: 2,
      name: 'Om Bhalerao',
      department: 'Information Technology',
      email: 'ombhalerao2@gmail.com'
    }
  ]);

  tatalStudent = computed(() => this.students().length);

  addStudent(student: Omit<Student, 'id'>): void {
    const newStudent: Student = {
      id: Date.now(),
      ...student
    };

    this.students.update(current => [
      ...current,
      newStudent
    ]);
  }

  deleteStudent(id: number): void {
    this.students.update(current =>
      current.filter(student => student.id !== id)
    );
  }
}
