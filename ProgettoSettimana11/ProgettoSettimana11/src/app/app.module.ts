import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrazioneComponent } from './auth/registrazione/registrazione.component';
import { Error404Component } from './components/error404/error404.component';
import { DetailsComponent } from './components/details/details.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { ListautentiComponent } from './components/listautenti/listautenti.component';
import { AuthGuard } from './auth/auth.guard';


const rotte: Route[]=[
  {
    path:'',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'movies',
    component: MoviesComponent
  },
  {
    path:'movies/:id',
    component: DetailsComponent,
  },
  {
    path:'profile',
    component: ProfileComponent,
    children:[
      {
        path: 'dettagli',
        component: DetailsComponent,
      },
      {
        path: 'preferiti',
        component: FavouritesComponent,
      },
    ]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'registrazione',
    component: RegistrazioneComponent
  },
  {
    path:'**',
    component: Error404Component
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ProfileComponent,
    NavbarComponent,
    LoginComponent,
    RegistrazioneComponent,
    Error404Component,
    DetailsComponent,
    FavouritesComponent,
    ListautentiComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(rotte)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
