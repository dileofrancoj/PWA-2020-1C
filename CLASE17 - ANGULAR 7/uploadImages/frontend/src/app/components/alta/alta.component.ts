import { AdminService } from "./../../services/admin.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-alta",
  templateUrl: "./alta.component.html",
  styleUrls: ["./alta.component.css"],
})
export class AltaComponent implements OnInit {
  form: FormGroup;
  previewUrl: any;
  selectedFile: File;
  isLoaded: boolean;

  formObject = {
    nombre: new FormControl("", [Validators.required]),
    equipo: new FormControl("", [Validators.required]),
    goles: new FormControl("", [Validators.required]),
    foto: new FormControl(""),
  };
  constructor(private service: AdminService) {}

  ngOnInit() {
    this.isLoaded = false;
    this.form = new FormGroup(this.formObject);
    this.isLoaded = !this.isLoaded;
  }

  onFileSelected(event) {
    const reader = new FileReader();
    const files = event.target.files;
    if (files && files.length) {
      this.selectedFile = files[0];
      reader.onload = (e) => {
        console.log(e);
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
    console.log(this.selectedFile);
  }

  // testSelect(element) {
  //   console.log("Cambiaste el desplegable a ", element.target.value);
  // }
  async upload() {
    // subir info al back
    const fd = new FormData();
    const { nombre, equipo, goles } = this.form.value;
    fd.append("nombre", nombre);
    fd.append("equipo", equipo);
    fd.append("goles", goles);
    fd.append("foto", this.selectedFile, this.selectedFile.name);
    const result = await this.service.create(fd);
    console.log(result);
  }
}
