import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { ApiService } from './services/api-service.service';
import { FormControlService } from './services/form-control.service';
import { TypeControlService } from './services/type-control.service';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormControlComponent } from './questionnaire/dynamic-form-control/dynamic-form-control.component';
import { DynamicFormComponent } from './questionnaire/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    DynamicFormControlComponent,
    DynamicFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [MatNativeDateModule],
  providers: [
    ApiService,
    TypeControlService,
    FormControlService,
  ],
  entryComponents: [QuestionnaireComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
