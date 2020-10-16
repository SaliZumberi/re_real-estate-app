import { ComponentFixture, TestBed } from '@angular/core/testing';
import {BuildingItemComponent} from "./building-item.component";
import {MaterialModule} from "../../shared/modules/material/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {generateInitialBuildingEntity} from "../../shared/util/data";


describe('BuildingItemComponent', () => {
  let component: BuildingItemComponent;
  let fixture: ComponentFixture<BuildingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingItemComponent ],
      imports: [MaterialModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingItemComponent);
    component = fixture.componentInstance;
    component.building = generateInitialBuildingEntity();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
