import { Component, OnInit, Input } from '@angular/core';
import { AuthManagerService } from 'src/app/services/auth-manager.service';
import { ProjectManagerService } from 'src/app/services/project-manager.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  studentList: boolean = false;
  teacherList: boolean = true;
  subjectList: boolean = false;
  classList: boolean = false;

  currentUser: any;

  subjects: any = [];
  currentSubject: any = {
    name: "",
    teacher: "",
    class: "",
    tasks: []
};

  constructor(
    private authManager: AuthManagerService,
    private projectManager: ProjectManagerService
  ) { }

  switchStudentList() {
    this.studentList = true;
    this.teacherList = false;
    this.subjectList = false;
    this.classList = false;
  }

  switchTeacherList() {
    this.studentList = false;
    this.teacherList = true;
    this.subjectList = false;
    this.classList = false;
  }

  switchSubjectList() {
    this.studentList = false;
    this.teacherList = false;
    this.subjectList = true;
    this.classList = false;
  }

  switchClassList() {
    this.studentList = false;
    this.teacherList = false;
    this.subjectList = false;
    this.classList = true;
  }

  setCurrentSubject(subject) {
    this.currentSubject = subject;
  }

  ngOnInit() {
    this.currentUser = this.authManager.currentUser;
    this.projectManager.getSubjects().subscribe(res => {
      res.forEach(element => {
        if(this.currentUser.role === 'teacher') {
          if(element.teacher.name === this.currentUser.name) {
            this.subjects.push(element);
          }
        }
        if(this.currentUser.role === 'student') {
          if(element.class.name === this.currentUser.class) {
            this.subjects.push(element);
            console.log(element);
          }
        }
      });
    })
  }

}
