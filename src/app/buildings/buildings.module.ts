import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingsComponent } from './buildings.component';
import {BuildingsRoutingModule} from "./buildings-routing.module";
import {BuildingItemComponent} from "./building-item/building-item.component";
import {MaterialModule} from "../shared/modules/material/material.module";



@NgModule({
  declarations: [BuildingsComponent, BuildingItemComponent],
  imports: [
    CommonModule,
    BuildingsRoutingModule,
    MaterialModule
  ]
})
export class BuildingsModule { }
