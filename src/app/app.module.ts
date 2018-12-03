import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { TeacherListComponent } from './pages/teacher-list/teacher-list.component';
import { SubjectListComponent } from './pages/subject-list/subject-list.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule, MatInputModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { ClassComponent } from './pages/class/class.component';
import { SubjectContainerComponent } from './pages/subject-container/subject-container.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthSnackBarComponent } from './auth-snack-bar/auth-snack-bar.component';
import { RatedMagazineComponent } from './pages/rated-magazine/rated-magazine.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomepageComponent,
    StudentListComponent,
    TeacherListComponent,
    SubjectListComponent,
    ClassComponent,
    SubjectContainerComponent,
    AuthSnackBarComponent,
    RatedMagazineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule
  ],
  entryComponents: [AuthSnackBarComponent, RatedMagazineComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
