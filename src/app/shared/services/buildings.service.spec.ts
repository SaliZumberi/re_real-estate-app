import {TestBed} from '@angular/core/testing';

import {BuildingsService} from './buildings.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {Building} from "../models/building.model";

const mockBuildings: Building[] = [
  {
    id: "1f4c7c7d-a988-4eef-92a7-e37f5980ee5c",
    address: {
      id: "0c49e0b6-13b6-47a0-88b0-bf5288424559",
      streetName: "Mary Axe",
      streetNumber: "30",
      zip: 5201,
      place: "London",
      updatedAt: new Date(),
      createdAt: new Date(),
    },
    imageUrl: "https://www.histerius.com/hs0719/swiss_re.jpg",
    nickNames: [
      {
        id: "1f4c7c72d-a988-4eef-292a7-e237f5980ee5c",
        name: "Test"
      },
      {
        id: "1f4c7c7233d-a988-4eef-292a7-e237f5980ee5c",
        name: "Baby"
      }
    ],
    description: "Education is what remains after one has forgotten what one has learned in school.",
    updatedAt: new Date(),
    createdAt: new Date(),
  }
]
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
