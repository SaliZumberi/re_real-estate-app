import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";
import {NicknameEditorComponent} from "./nickname-editor.component";


@NgModule({
    declarations: [NicknameEditorComponent],
    exports: [
      NicknameEditorComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class NicknameEditorModule { }
