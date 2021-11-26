import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';

import { MaterialComponent } from './material/material.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'material', component: MaterialComponent },

  { path: '**', redirectTo: 'home' },
];


@NgModule({
  declarations: [AppComponent,HomeComponent,MaterialComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
