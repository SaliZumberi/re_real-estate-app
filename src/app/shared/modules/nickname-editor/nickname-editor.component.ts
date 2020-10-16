import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NickName} from "../../models/nickname.model";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {debounceTime} from "rxjs/operators";
import {generateId} from "../../util/helpers";
import {ValidationService} from "./validation.service";

@Component({
  selector: 're-nickname-editor',
  templateUrl: './nickname-editor.component.html',
  styleUrls: ['./nickname-editor.component.css']
})
export class NicknameEditorComponent implements OnInit {
  @Input() nickNames: NickName[]
  @Output() updateFormGroup: EventEmitter<FormGroup> = new EventEmitter<FormGroup>()
  nickNameForm: FormGroup;


  ngOnInit(): void {
    if (this.nickNames.length > 0) {
      this.nickNameForm = this.fb.group({
        nickNames: this.fb.array(this.nickNames.map(nickName =>
          this.fb.group({
            id: nickName.id,
          })))
      })
    } else {
      this.nickNameForm = this.fb.group({
        nickNames: this.fb.array([])
      })
    }

    this.nickNameForm.valueChanges.pipe(debounceTime(1000)).subscribe(() => {
      this.updateFormGroup.emit(this.nickNameForm)
    })
  }

  addNewNickName() {
    const nickNames = this.nickNameForm.get('nickNames') as FormArray;
    nickNames.push(this.fb.group({
      id: generateId(),
    }))
  }

  removeNickName(index: number) {
    const add = this.nickNameForm.get('nickNames') as FormArray;
    add.removeAt(index)
  }

  get nickNamesFormControlArray(): FormArray {
    return this.nickNameForm.get('nickNames') as FormArray;
  }

}
