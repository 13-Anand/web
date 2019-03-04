import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckerComponent } from './checker/checker.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const approutes: Routes = [
  {
    path: 'Adminpage',
    component: CheckerComponent
  },
  {
    path: '',
    component: MainpageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CheckerComponent,
    MainpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
