import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { navbarRoute } from "./layout/navbar/navbar.route";
import { footerRoute } from "./layout/footer/footer.route";
import { mainRoute } from "./layout/main/main.route";

const routes: Routes = [navbarRoute,mainRoute, footerRoute];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
