import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BuildingEditorDialogComponent} from "./building-editor-dialog.component";
import {FormBuilder} from "@angular/forms";
import {MaterialModule} from "../../shared/modules/material/material.module";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {generateInitialBuildingEntity} from "../../shared/util/data";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


describe('BuildingEditorDialogComponent', () => {
  let component: BuildingEditorDialogComponent;
  let fixture: ComponentFixture<BuildingEditorDialogComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingEditorDialogComponent],
      imports: [MaterialModule, BrowserAnimationsModule],
      providers: [FormBuilder,
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        },
        {
          // I was expecting this will pass the desired value
          provide: MAT_DIALOG_DATA,
          useValue: generateInitialBuildingEntity()
        }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
