import { Component } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  isShow = false;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  ngOnInit() {
    $(".nav-link").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });
  }
}
