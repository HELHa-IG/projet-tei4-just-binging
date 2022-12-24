import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './auth.guard';
import { PanelShowComponent } from './panel-show/panel-show.component';
import { PanelEpisodeComponent } from './panel-episode/panel-episode.component';
import { IndexComponent } from './index/index.component';
import { ListeEpisodeComponent } from './liste-episode/liste-episode.component';
import { FormShowComponent } from './form-show/form-show.component';
import { FormEpisodeComponent } from './form-episode/form-episode.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'panel-show', component: PanelShowComponent, canActivate: [AuthGuard] },
  { path: 'form-show', component: FormShowComponent, canActivate: [AuthGuard] },
  { path: 'panel-episode', component: PanelEpisodeComponent, canActivate: [AuthGuard] },
  { path: 'form-episode', component: FormEpisodeComponent, canActivate: [AuthGuard] },
  { path: 'liste/:id', component: ListeEpisodeComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    PanelShowComponent,
    PanelEpisodeComponent,
    IndexComponent,
    ListeEpisodeComponent,
    FormShowComponent,
    FormEpisodeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' }), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
