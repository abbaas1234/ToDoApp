import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Model, ToDoAction } from "./../Models/model";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';
  model = new Model();

  getName() {
    return this.model.user;
  }

  getToDoItems() {
    return this.model.items;
  }

  addToDoItem(value: string) {
    this.model.items.push(new ToDoAction(value, false));
  }

}
