import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManyRecordsComponent } from './pages/many-records/many-records.component';
import { OneRecordComponent } from './pages/one-record/one-record.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RecordFormComponent } from './pages/record-form/record-form.component';

const routes: Routes = [
  { path: '', component: ManyRecordsComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'create', component: RecordFormComponent},
  { path: 'edit/:recordId', component: RecordFormComponent},
  { path: 'view/:recordId', component: OneRecordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
