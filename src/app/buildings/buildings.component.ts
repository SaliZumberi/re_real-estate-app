import {Component, OnInit} from '@angular/core';
import {BuildingsService} from "../shared/services/buildings.service";
import {Observable} from "rxjs";

@Component({
  selector: 're-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  buildings$: Observable<any>
  constructor(private buildingsService: BuildingsService) { }

  ngOnInit(): void {
    this.buildings$ = this.buildingsService.getBuildings()
  }

}
