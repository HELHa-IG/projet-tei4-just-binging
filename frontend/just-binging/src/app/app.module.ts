import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
