import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BuildingsComponent} from "./buildings.component";

const routes: Routes = [
  {
    path: '',
    component: BuildingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildingsRoutingModule {
}

