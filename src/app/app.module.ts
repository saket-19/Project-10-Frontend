import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';
import { EndpointServiceService } from './endpoint-service.service';
import { ServiceLocatorService } from './service-locator.service';

import { FormsModule } from '@angular/forms';
;
import { NavbarComponent } from './navbar/navbar.component';

import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list.component';
import { RoleComponent } from './role/role.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CollegeComponent } from './college/college.component';
import { TimetableComponent } from './timetable/timetable.component';
import { RoleListComponent } from './role/role-list.component';
import { FooterComponent } from './footer/footer.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';

import { CourseListComponent } from './course/course-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyprofileComponent } from './user/myprofile.component';
import { AuthService } from './auth-service.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GetMarksheetComponent } from './marksheet/get-marksheet.component';
import { MeritListComponent } from './marksheet/merit-list.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  
    NavbarComponent,
 UserComponent,
    UserListComponent,
    RoleComponent,
    StudentComponent,
    FacultyComponent,
    CourseComponent,
    SubjectComponent,
    MarksheetComponent,
    CollegeComponent,
    TimetableComponent,
    RoleListComponent,
    FooterComponent,
    CollegeListComponent,
    StudentListComponent,
   
    CourseListComponent,
    SubjectListComponent,
    TimetableListComponent,
    FacultyListComponent,
    MarksheetListComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    MyprofileComponent,
    GetMarksheetComponent,
    MeritListComponent,
   
  ],
   imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule
  ],
  providers: [
     {
      provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true
    },
    HttpServiceService,
    EndpointServiceService,
    ServiceLocatorService,
    AuthenticatorResponse
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }