import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rated-magazine',
  templateUrl: './rated-magazine.component.html',
  styleUrls: ['./rated-magazine.component.scss']
})
export class RatedMagazineComponent implements OnInit {

  tasks = ['task1', 'task2', 'task3', 'task4', 'task5', 'task6'];
  student = [
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
  ]

  constructor() { }

  ngOnInit() {
  }

}
