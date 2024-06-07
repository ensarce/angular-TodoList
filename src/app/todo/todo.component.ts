import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  name: string;
  completed: boolean;
  date: Date;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  tasks: Task[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim().length === 0) {
      return;
    }
    this.tasks.push({ name: this.newTask, completed: false, date: new Date() });
    this.newTask = '';
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
