import {TestBed} from '@angular/core/testing';

import {BuildingsService} from './buildings.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {Building} from "../models/building.model";
import { mockBuildings } from '../util/data';


describe('BuildingsService', () => {
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  let buildingsService: BuildingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildingsService],
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    buildingsService = TestBed.inject(BuildingsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(buildingsService).toBeTruthy();
  });

  it('should get all buildings from backend', async (done: DoneFn) => {
    spyOn(httpClient, 'get').and.returnValue(of(mockBuildings));

    expect((await buildingsService.getBuildings().toPromise()).length).toEqual(1);
    done();
  });

});
