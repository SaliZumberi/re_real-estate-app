import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsComponent } from './buildings.component';
import {BuildingsService} from "../shared/services/buildings.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatDialog} from "@angular/material/dialog";
import {MaterialModule} from "../shared/modules/material/material.module";

describe('BuildingsComponent', () => {
  let component: BuildingsComponent;
  let fixture: ComponentFixture<BuildingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingsComponent ],
      imports: [ HttpClientTestingModule, MaterialModule ],
      providers: [BuildingsService, MatDialog]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
