import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ManyRecordsComponent } from './pages/many-records/many-records.component';
import { OneRecordComponent } from './pages/one-record/one-record.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { RecordFormComponent } from './pages/record-form/record-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SigninComponent,
    SignupComponent,
    ManyRecordsComponent,
    OneRecordComponent,
    AboutUsComponent,
    RecordFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
