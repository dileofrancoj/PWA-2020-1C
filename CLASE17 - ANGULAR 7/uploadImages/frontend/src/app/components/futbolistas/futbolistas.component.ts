import { FutbolistasService } from "./../../services/futbolistas.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-futbolistas",
  templateUrl: "./futbolistas.component.html",
  styleUrls: ["./futbolistas.component.css"],
})
export class FutbolistasComponent implements OnInit {
  futbolistas: any;
  constructor(private service: FutbolistasService) {}

  async getList() {
    let result: any = await this.service.list();
    console.log(result);
    // console.log(this.futbolistas);
  }
  async ngOnInit() {
    let result = await this.service.list();
    console.log(result);
  }
}
