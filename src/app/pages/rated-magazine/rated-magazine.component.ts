import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-rated-magazine',
  templateUrl: './rated-magazine.component.html',
  styleUrls: ['./rated-magazine.component.scss']
})
export class RatedMagazineComponent implements OnInit {

  tasks = ['task1', 'task2', 'task3', 'task4', 'task5', 'task6'];
  students:any = [
    {
      name: 'Ivan Ivanov',
      tasks: [
        {name: 'task1', rated: "12"},
        {name: 'task2', rated: ""},
        {name: 'task3', rated: ""},
        {name: 'task4', rated: ""},
        {name: 'task5', rated: "12"},
        {name: 'task6', rated: "12"},
      ]
    },
    {
      name: 'Petr Petrov',
      tasks: [
        {name: 'task1', rated: "1"},
        {name: 'task2', rated: "2"},
        {name: 'task3', rated: "3"},
        {name: 'task4', rated: ""},
        {name: 'task5', rated: ""},
        {name: 'task6', rated: ""},
      ]
    },
    {
      name: 'Taras Tarasov',
      tasks: [
        {name: 'task1', rated: "10"},
        {name: 'task2', rated: "11"},
        {name: 'task3', rated: ""},
        {name: 'task4', rated: "12"},
        {name: 'task5', rated: ""},
        {name: 'task6', rated: ""},
      ]
    },
    {
      name: 'Pavel Pashov',
      tasks: [
        {name: 'task1', rated: ""},
        {name: 'task2', rated: ""},
        {name: 'task3', rated: ""},
        {name: 'task4', rated: ""},
        {name: 'task5', rated: ""},
        {name: 'task6', rated: ""},
      ]
    },
  ];

  selected;
  newRecord: any = {
    student: "",
    rate: "",
    task: ""
  };

  constructor(
    public dialogRef: MatDialogRef<RatedMagazineComponent>
  ) { }

  addRate() {
    for (let i = 0; i < this.students.length; i++) {
      for (let j = 0; j < this.students[i].tasks.length; j++) {
        if (this.newRecord.student.name == this.students[i].name && this.newRecord.task == this.students[i].tasks[j].name) {
          this.students[i].tasks[j].rated = this.newRecord.rate;

          this.newRecord = {
            student: "",
            rate: "",
            task: ""
          };
          
          return;
        }
      }
    }
  }

  clearForm() {
    this.newRecord = {
      student: "",
      rate: "",
      task: ""
    };
  }

  ngOnInit() {
  }

}
