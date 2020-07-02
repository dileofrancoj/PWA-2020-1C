import { Router } from "@angular/router";
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
  formMessage: string = "";
  formObj = {
    user: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  };
  constructor(private service: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup(this.formObj);
  }

  async auth() {
    const { usuario, JWT }: any = await this.service.login(this.form.value);
    console.log(JWT);
    JWT
      ? (sessionStorage.setItem("JWT", JWT), this.router.navigate(["alta"]))
      : (this.form.reset(), (this.formMessage = "Datos incorrectos"));
    usuario ? sessionStorage.setItem("usuario", usuario) : null;
  }
}
