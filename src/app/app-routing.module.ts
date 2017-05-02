import { StudentPageComponent } from './pages/student-page/student-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CoursePageComponent } from './pages/course-page/course-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";


const ROUTES: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'course/:id', component: CoursePageComponent },
  { path: 'student/:id', component: StudentPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
