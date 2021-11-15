import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToDo } from "./to-do";


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  
})
export class ToDoComponent implements OnInit {
  title = 'Tasks';
  
  constructor() { }
  
  ngOnInit(): void {
  }

  completeTask(task: ToDo) {
    task.completed = true;
  }

  addTask(form: NgForm) {
    let newTask: ToDo = { task: form.form.value.task, completed: false };
    this.tasks.unshift(newTask);
  }
  
 

  tasks: ToDo[] = [ 
      {task: 'Write a TPS report', completed: false},
      {task: 'Take the kids to see Hunger Games', completed: true},
      {task: 'Write a dissertation', completed: false},
      {task: 'Eat potatos for lunch', completed: true},
      {task: 'Take my wife on a date', completed: true},
  ];



}
