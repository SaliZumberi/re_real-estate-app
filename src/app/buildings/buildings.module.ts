import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingsComponent } from './buildings.component';
import {BuildingsRoutingModule} from "./buildings-routing.module";
import {BuildingItemComponent} from "./building-item/building-item.component";



@NgModule({
  declarations: [BuildingsComponent, BuildingItemComponent],
  imports: [
    CommonModule,
    BuildingsRoutingModule
  ]
})
export class BuildingsModule { }
