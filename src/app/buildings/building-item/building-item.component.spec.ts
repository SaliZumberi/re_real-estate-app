import { ComponentFixture, TestBed } from '@angular/core/testing';
import {BuildingItemComponent} from "./building-item.component";


describe('BuildingComponent', () => {
  let component: BuildingItemComponent;
  let fixture: ComponentFixture<BuildingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
