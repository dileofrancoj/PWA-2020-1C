import { AltaComponent } from "./alta.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AltaRoutingModule } from "./alta-routing.module";

@NgModule({
  declarations: [AltaComponent],
  imports: [CommonModule, AltaRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AltaModule {}
