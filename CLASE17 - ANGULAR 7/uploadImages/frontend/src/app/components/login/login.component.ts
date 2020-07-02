import { AuthService } from "./../../services/auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  formObj = {
    user: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  };
  constructor(private service: AuthService) {}

  ngOnInit() {
    this.form = new FormGroup(this.formObj);
  }
}
