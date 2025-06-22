import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"firebase-task-manager-mr2025","appId":"1:171821175489:web:78b018050a425c456a3a40","storageBucket":"firebase-task-manager-mr2025.firebasestorage.app","apiKey":"AIzaSyDSHOf_FLACeaakrRstjZfn5a1nOQyH6-0","authDomain":"fir-task-manager-mr2025.firebaseapp.com","messagingSenderId":"171821175489","measurementId":"G-D04648HLG4"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
