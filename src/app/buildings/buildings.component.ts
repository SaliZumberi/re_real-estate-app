import {Component, OnInit} from '@angular/core';
import {BuildingsService} from "../shared/services/buildings.service";
import {Observable, of} from "rxjs";
import {Building} from "../shared/models/building.model";
import {MatDialog} from "@angular/material/dialog";
import {switchMap} from "rxjs/operators";
import {BuildingEditorDialogComponent} from "./building-editor-dialog/building-editor-dialog.component";
import {generateInitialBuildingEntity} from "../shared/util/data";

@Component({
  selector: 're-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  buildings$: Observable<Building[]>

  constructor(private buildingsService: BuildingsService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.buildings$ = this.buildingsService.getBuildings()
  }

  openBuildingEditorDialog(building: Building) {
    const dialogRef = this.dialog.open(BuildingEditorDialogComponent,
      {
        height: '700px',
        width: '500px',
        data: building
      });

    dialogRef.afterClosed().subscribe((building: Building) => {
      if (building) {
        // Here we would have sent an API Request to the Backend, instead I simply add it to the existing buildings
        console.log(`Updated Building Entity:`, building);
        this.buildings$ = this.buildingsService.getBuildings().pipe(switchMap(buildings => of([...buildings, building])))
      }
    });
  }

  addBuilding() {
    this.openBuildingEditorDialog(generateInitialBuildingEntity())
  }

  editBuilding(building: Building) {
    this.openBuildingEditorDialog(building)
  }
}
