import { Component, OnInit } from '@angular/core';
import { AuthManagerService } from 'src/app/services/auth-manager.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: any = [];

  newStudent: any = {
    name: "",
    class: "",
    role: "student",
    email: "",
    password: ""
  }

  isEditStudent: boolean = false;

  constructor(
    private authManager: AuthManagerService
  ) { }

  addStudent() {
    this.authManager.addUser(this.newStudent).subscribe(res => {console.log(res)});
    this.newStudent = {
      name: "",
      class: "",
      role: "student",
      email: "",
      password: ""
    };
    this.getStudents();
  }

  getStudents() {
    this.students = [];
    this.authManager.getUsers().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].role === "student") {
          this.students.push(res[i]);
          console.log(this.students);
        }
      }
    })
  }

  editStudent(index: number) {
    this.newStudent = Object.assign({}, this.students[index]);
    this.isEditStudent = true;
  }

  updateStudent() {
    this.authManager.updateUser(this.newStudent).subscribe(res => {
      console.log('student updated');
      this.isEditStudent = false;
      this.newStudent = {
        name: "",
        class: "",
        role: "student",
        email: "",
        password: ""
      };
      this.getStudents();
    })
  }

  deleteStudent(index: number) {
    this.authManager.deleteUser(this.students[index].id).subscribe(res => {
      console.log('student deleted');
      this.getStudents();
    })
  }

  clearForm() {
    this.newStudent = {
      name: "",
      class: "",
      role: "student",
      email: "",
      password: ""
    };
  }

  ngOnInit() {
    this.getStudents();
  }

}
