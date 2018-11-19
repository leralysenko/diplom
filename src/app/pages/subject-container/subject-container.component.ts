import { Component, OnInit, Input } from '@angular/core';
import { ProjectManagerService } from 'src/app/services/project-manager.service';
import { AuthManagerService } from 'src/app/services/auth-manager.service';

@Component({
  selector: 'app-subject-container',
  templateUrl: './subject-container.component.html',
  styleUrls: ['./subject-container.component.scss']
})
export class SubjectContainerComponent implements OnInit {

  _currentSubject;
  @Input() 
  public set currentSubject(val: string) {
    this._currentSubject = val;
    this.showTasks();
  };

  currentTasks: any = [];

  regExp = /^C:\\fakepath\\(.*)/;
  currentUser: any;

  newTask = {
    name: "",
    description: "",
    file: "",
    doneTask: []
  };

  completedTask = {
    description: '',
    file: '',
    student: {}
  }

  file = '';
  fileCompleted = '';

  completedTaskList = [];

  constructor(
    private projectManager: ProjectManagerService,
    private authManager: AuthManagerService
  ) { 
    this.currentUser = this.authManager.currentUser;
  }

  showTasks() {
    for(let i = 0; i < this._currentSubject.tasks.length; i++) {
      let k = 0;
      if (this._currentSubject.tasks[i].doneTask.length !== 0) {
        for(let j = 0; j < this._currentSubject.tasks[i].doneTask.length; j++) {
          if (this._currentSubject.tasks[i].doneTask[j].student.id == this.currentUser.id) k = 1;
        }
      }
      if (k === 0) this.currentTasks.push(this._currentSubject.tasks[i]);
    }
  }

  addTask() {
    let match = this.file.match(this.regExp);
    this.newTask.file = match[1];
    this._currentSubject.tasks.push(this.newTask);
    this.projectManager.updateSubject(this._currentSubject).subscribe(res => {
      console.log('subject updated');

      this.newTask = {
        name: "",
        description: "",
        file: "",
        doneTask: []
      };
      this.file = '';
    });
  }

  addCompletedTask(index) {
    this.completedTask.file = this.fileCompleted;
    this.completedTask.student = this.currentUser;
    this._currentSubject.tasks[index].doneTask.push(this.completedTask);
    console.log(this.currentSubject);
    this.projectManager.updateSubject(this._currentSubject).subscribe(res => {
      console.log('subject updated');
      this.completedTask = {
        description: '',
        file: '',
        student: {}
      };
      this.fileCompleted = '';
    });
  }

  uploadFile(event) {
    console.log(event);
    this.fileCompleted = event.srcElement.files[0].name;
  }

  openCompletedTask(task) {
    this.completedTaskList = task.doneTask;
  }

  clearForm() {
    this.newTask = {
      name: "",
      description: "",
      file: "",
      doneTask: []
    };
  }

  ngOnInit() {
  }

}
