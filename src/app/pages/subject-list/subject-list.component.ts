import { Component, OnInit } from '@angular/core';
import { AuthManagerService } from 'src/app/services/auth-manager.service';
import { ProjectManagerService } from 'src/app/services/project-manager.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  subjects: any = [];
  classes: any = [];
  teachers: any = [];

  newSubject: any = {
    name: "",
    teacher: "",
    class: "",
    tasks: []
  }

  isEditSubject: boolean = false;

  constructor(
    private authManager: AuthManagerService,
    private projectManager: ProjectManagerService
  ) { }

  addSubject() {
    this.projectManager.addSubject(this.newSubject).subscribe(res => {console.log(res)});
    this.newSubject = {
      name: "",
      teacher: "",
      class: ""
    };
    this.getSubjects();
  }

  getSubjects() {
    this.subjects = [];
    this.projectManager.getSubjects().subscribe(res => {
      this.subjects = res;
    })
  }

  getClasses() {
    this.classes = [];
    this.projectManager.getClasses().subscribe(res => {
      this.classes = res;
    })
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

  editSubject(index: number) {
    this.newSubject = Object.assign({}, this.subjects[index]);
    this.isEditSubject = true;
  }

  updateSubject() {
    this.projectManager.updateSubject(this.newSubject).subscribe(res => {
      console.log('subject updated');
      this.isEditSubject = false;
      this.newSubject = {
        name: "",
        teacher: "",
        class: "",
        tasks: []
      };
      this.getSubjects();
    })
  }

  deleteSubject(index: number) {
    this.projectManager.deleteSubject(this.subjects[index].id).subscribe(res => {
      console.log('student deleted');
      this.getSubjects();
    })
  }

  clearForm() {
    this.newSubject = {
      name: "",
      teacher: "",
      class: "",
      task: []
    };
  }

  ngOnInit() {
    this.getSubjects();
    this.getTeachers();
    this.getClasses();
  }

}
