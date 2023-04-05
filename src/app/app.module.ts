import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { DatepickerInlineComponent } from './components/datepicker-inline/datepicker-inline.component';
import { TasksSectionComponent } from './components/tasks-section/tasks-section.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerInlineComponent,
    TasksSectionComponent,
    EditDialogComponent,
    TaskComponent,
  ],
  entryComponents: [EditDialogComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
