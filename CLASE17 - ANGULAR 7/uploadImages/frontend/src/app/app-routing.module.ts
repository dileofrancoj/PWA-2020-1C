import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "alta", loadChildren: "./components/alta/alta.module#AltaModule" },
  {
    path: "login",
    loadChildren: "./components/login/login.module#LoginModule",
  },
  {
    path: "futbolistas",
    loadChildren:
      "./components/futbolistas/futbolistas.module#FutbolistasModule",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
