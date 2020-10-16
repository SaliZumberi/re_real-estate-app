import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BuildingsComponent} from './buildings.component';
import {BuildingsService} from "../shared/services/buildings.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatDialog} from "@angular/material/dialog";
import {MaterialModule} from "../shared/modules/material/material.module";
import {of} from "rxjs";
import {mockBuildings} from "../shared/util/data";
import {By} from "@angular/platform-browser";


describe('BuildingsComponent', () => {
  let component: BuildingsComponent;
  let fixture: ComponentFixture<BuildingsComponent>;
  let mockBuildingsService = jasmine.createSpyObj(['getBuildings']);
  let matDialogSpy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingsComponent],
      imports: [HttpClientTestingModule, MaterialModule],
      providers: [{
        provide: BuildingsService,
        useValue: mockBuildingsService
      },
        MatDialog]
    })
      .compileComponents();

    mockBuildingsService.getBuildings.and.returnValue(of(mockBuildings));


  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingsComponent);
    component = fixture.componentInstance;
    matDialogSpy = spyOn(component.dialog, 'open').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show building cards for each building', async (done: DoneFn) => {
    fixture.detectChanges();

    const buildingItems = fixture.debugElement.queryAll(
      By.css('re-building-item')
    );
    expect(buildingItems.length).toBe(1);
    expect(mockBuildingsService.getBuildings).toHaveBeenCalled();
    done();
  });

  it('should open builder dialog when clicking on add building button', async (done: DoneFn) => {
    fixture.detectChanges();

    const addBuildingBtn = fixture.debugElement.query(
      By.css('.add-building')
    );
    addBuildingBtn.nativeElement.click()
    fixture.detectChanges();
    expect(matDialogSpy).toHaveBeenCalled();
    done();
  });

});
