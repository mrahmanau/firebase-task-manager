import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  docData,
} from '@angular/fire/firestore';
import { CollectionReference, DocumentData } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private tasksRef: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.tasksRef = collection(this.firestore, 'tasks');
  }

  // ✅ Create Task
  addTask(task: any) {
    return addDoc(this.tasksRef, task);
  }

  // ✅ Read All Tasks
  getTasks(): Observable<any[]> {
    return collectionData(this.tasksRef, { idField: 'id' });
  }

  // ✅ Get Single Task
  getTask(id: string): Observable<any> {
    const taskDoc = doc(this.tasksRef, id);
    return docData(taskDoc, { idField: 'id' });
  }

  // ✅ Update Task
  updateTask(id: string, data: any) {
    const taskDoc = doc(this.tasksRef, id);
    return updateDoc(taskDoc, data);
  }

  // ✅ Delete Task
  deleteTask(id: string) {
    const taskDoc = doc(this.tasksRef, id);
    return deleteDoc(taskDoc);
  }
}
