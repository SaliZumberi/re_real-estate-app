import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BuildingsComponent} from './buildings.component';
import {BuildingsRoutingModule} from "./buildings-routing.module";
import {BuildingItemComponent} from "./building-item/building-item.component";
import {MaterialModule} from "../shared/modules/material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {NicknameEditorModule} from "../shared/modules/nickname-editor/nickname-editor.module";
import {BuildingEditorDialogComponent} from "./building-editor-dialog/building-editor-dialog.component";


@NgModule({
  declarations: [BuildingsComponent, BuildingItemComponent, BuildingEditorDialogComponent],
  imports: [
    CommonModule,
    BuildingsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NicknameEditorModule
  ]
})
export class BuildingsModule {
}
