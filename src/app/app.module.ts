import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

import { HomeComponent } from "../home/home.component";
import { MaterialComponent } from "../material/material.component";
const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "material", component: MaterialComponent },

  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    RouterModule.forRoot(ROUTES)
  ],
  declarations: [AppComponent, HomeComponent, MaterialComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
