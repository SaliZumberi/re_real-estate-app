import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Building} from "../models/building.model";

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {

  constructor(private httpClient: HttpClient) {
  }

  saveBuilding() {

  }

  getBuildings(): Observable<Building[]> {
    return this.httpClient
      .get<Building[]>('assets/data/buildings.json', {withCredentials: true})
  }


  removeBuilding() {

  }

  updateBuilding() {

  }
}
