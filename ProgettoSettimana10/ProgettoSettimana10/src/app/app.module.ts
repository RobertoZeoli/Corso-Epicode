import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToDosComponent } from './to-dos/to-dos.component';
import { CompletatiComponent } from './completati/completati.component';

const routes: Route[] = [
  {
    path: "",
    component: ToDosComponent
  },
  {
    path: "completati",
    component: CompletatiComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToDosComponent,
    CompletatiComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
