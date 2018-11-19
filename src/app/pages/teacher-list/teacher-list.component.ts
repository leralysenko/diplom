import { Component, OnInit } from '@angular/core';
import { AuthManagerService } from 'src/app/services/auth-manager.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  teachers: any = [];

  newTeacher: any = {
    name: "",
    role: "teacher",
    email: "",
    password: ""
  }

  isEditTeacher: boolean = false;

  constructor(
    private authManager: AuthManagerService
  ) { }

  addTeacher() {
    this.authManager.addUser(this.newTeacher).subscribe(res => {console.log(res)});
    this.newTeacher = {
      name: "",
      role: "teacher",
      email: "",
      password: ""
    };
    this.getTeachers();
  }

  getTeachers() {
    this.teachers = [];
    this.authManager.getUsers().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].role === "teacher") {
          this.teachers.push(res[i]);
          console.log(this.teachers);
        }
      }
    })
  }

  editTeacher(index: number) {
    this.newTeacher = Object.assign({}, this.teachers[index]);
    this.isEditTeacher = true;
  }

  updateTeacher() {
    this.authManager.updateUser(this.newTeacher).subscribe(res => {
      console.log('teacher updated');
      this.isEditTeacher = false;
      this.newTeacher = {
        name: "",
        role: "teacher",
        email: "",
        password: ""
      };
      this.getTeachers();
    })
  }

  deleteTeacher(index: number) {
    this.authManager.deleteUser(this.teachers[index].id).subscribe(res => {
      console.log('teacher deleted');
      this.getTeachers();
    })
  }

  clearForm() {
    this.newTeacher = {
      name: "",
      role: "teacher",
      email: "",
      password: ""
    };
  }

  ngOnInit() {
    this.getTeachers();
  }

}
