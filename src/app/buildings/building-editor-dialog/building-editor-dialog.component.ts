import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Building} from "../../shared/models/building.model";

@Component({
  selector: 're-building-editor-dialog',
  templateUrl: './building-editor-dialog.component.html',
  styleUrls: ['./building-editor-dialog.component.css']
})
export class BuildingEditorDialogComponent {
  buildingForm: FormGroup;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<BuildingEditorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public building: Building) {
    this.buildingForm = this.fb.group({
      address: this.fb.group({
        streetName: [this.building.address.streetName,],
        streetNumber: [this.building.address.streetNumber,],
        zip: [this.building.address.zip,],
        place: [this.building.address.place,]
      }),
      description: [this.building.description,],
    });
  }

  saveBuilding() {
    this.dialogRef.close({
      ...this.building,
      ...this.buildingForm.value,
    })
  }
}
