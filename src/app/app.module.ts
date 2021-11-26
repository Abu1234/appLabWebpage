import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import {MaterialExampleModule} from '../material.module';
import { HomeComponent } from "../home/home.component";
import { MaterialComponent } from "../material/material.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "material", component: MaterialComponent },

  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,MaterialExampleModule,

    RouterModule.forRoot(ROUTES)
  ],
  declarations: [AppComponent, HomeComponent, MaterialComponent,BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
