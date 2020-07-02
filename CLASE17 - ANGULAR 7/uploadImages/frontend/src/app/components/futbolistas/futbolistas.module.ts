import { FutbolistasComponent } from "./futbolistas.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FutbolistasRoutingModule } from "./futbolistas-routing.module";

@NgModule({
  declarations: [FutbolistasComponent],
  imports: [CommonModule, FutbolistasRoutingModule],
})
export class FutbolistasModule {}
