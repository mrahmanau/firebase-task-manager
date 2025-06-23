import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  task = {
    title: '',
    description: '',
  };

  successMessage: string = '';
  errorMessage: string = '';

  tasks$: Observable<any[]> = new Observable();

  constructor(private fireStoreService: FirestoreService) {}

  ngOnInit(): void {
    this.tasks$ = this.fireStoreService.getTasks();
  }

  onAddTask() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.task.title && this.task.description) {
      this.fireStoreService
        .addTask(this.task)
        .then(() => {
          this.successMessage = '✅ The task has been added successfully.';
          this.task = { title: '', description: '' };
        })
        .catch((error) => {
          console.error('Error adding task:', error);
          this.errorMessage = '❌ Failed to add task. Please try again.';
        });
    }
  }
}
