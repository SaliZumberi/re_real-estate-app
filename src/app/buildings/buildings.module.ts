import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingsComponent } from './buildings.component';
import { BuildingComponent } from './building/building.component';
import {BuildingsRoutingModule} from "./buildings-routing.module";



@NgModule({
  declarations: [BuildingsComponent, BuildingComponent],
  imports: [
    CommonModule,
    BuildingsRoutingModule
  ]
})
export class BuildingsModule { }
