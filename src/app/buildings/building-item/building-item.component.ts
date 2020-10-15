import {Component, Input, OnInit} from '@angular/core';
import {Building} from "../../shared/models/building.model";

@Component({
  selector: 're-building-item',
  templateUrl: './building-item.component.html',
  styleUrls: ['./building-item.component.css']
})
export class BuildingItemComponent implements OnInit {
  @Input() building: Building;

  constructor() {
  }

  ngOnInit(): void {
  }

}
