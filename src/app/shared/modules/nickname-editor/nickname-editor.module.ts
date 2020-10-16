import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";
import {NicknameEditorComponent} from "./nickname-editor.component";
import {ValidationService} from "./validation.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [NicknameEditorComponent],
  exports: [
    NicknameEditorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [ValidationService],
})
export class NicknameEditorModule {
}
