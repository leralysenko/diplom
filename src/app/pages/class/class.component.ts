import { Component, OnInit } from '@angular/core';
import { AuthManagerService } from 'src/app/services/auth-manager.service';
import { ProjectManagerService } from 'src/app/services/project-manager.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  classes: any = [];

  newClass: any = {
    name: ""
  }

  isEditClass: boolean = false;

  constructor(
    private authManager: AuthManagerService,
    private projectManager: ProjectManagerService
  ) { }

  addClass() {
    this.projectManager.addClass(this.newClass).subscribe(res => {console.log(res)});
    this.newClass = {
      name: ""
    };
    this.getClasses();
  }

  getClasses() {
    this.classes = [];
    this.projectManager.getClasses().subscribe(res => {
      this.classes = res;
    })
  }

  editClass(index: number) {
    this.newClass = Object.assign({}, this.classes[index]);
    this.isEditClass = true;
  }

  updateClass() {
    this.projectManager.updateClass(this.newClass).subscribe(res => {
      console.log('Class updated');
      this.isEditClass = false;
      this.newClass = {
        name: ""
      };
      this.getClasses();
    })
  }

  deleteClass(index: number) {
    this.projectManager.deleteClass(this.classes[index].id).subscribe(res => {
      console.log('student deleted');
      this.getClasses();
    })
  }

  clearForm() {
    this.newClass = {
      name: ""
    };
  }

  ngOnInit() {
    this.getClasses();
  }

}
