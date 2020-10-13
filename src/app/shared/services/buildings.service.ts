import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {

  constructor(private httpClient: HttpClient) {
  }

  saveBuilding() {

  }

  getBuildings(): Observable<any> {
    return this.httpClient
      .get('assets/data/buildings.json', {withCredentials: true})
  }


  removeBuilding() {

  }

  updateBuilding() {

  }
}
