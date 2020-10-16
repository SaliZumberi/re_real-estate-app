import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {BuildingEditorDialogComponent} from "./building-editor-dialog.component";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../shared/modules/material/material.module";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {generateInitialBuildingEntity, mockBuildings} from "../../shared/util/data";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {By} from "@angular/platform-browser";
import {NicknameEditorComponent} from "../../shared/modules/nickname-editor/nickname-editor.component";
import {NicknameEditorModule} from "../../shared/modules/nickname-editor/nickname-editor.module";


describe('BuildingEditorDialogComponent', () => {
  let component: BuildingEditorDialogComponent;
  let fixture: ComponentFixture<BuildingEditorDialogComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingEditorDialogComponent, NicknameEditorComponent],
      imports: [MaterialModule, BrowserAnimationsModule, ReactiveFormsModule, NicknameEditorModule],
      providers: [FormBuilder,
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: mockBuildings[0]
        }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingEditorDialogComponent);
    component = fixture.componentInstance;
    component.building = mockBuildings[0]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pre fill the field if building entity is beeing edited', () => {
    const mockBuilding = mockBuildings[0];
    expect(component.buildingForm.get('address.streetName').value).toBe(mockBuilding.address.streetName)
    expect(component.buildingForm.get('address.streetNumber').value).toBe(mockBuilding.address.streetNumber)
    expect(component.buildingForm.get('address.place').value).toBe(mockBuilding.address.place)
    expect(component.buildingForm.get('address.zip').value).toBe(mockBuilding.address.zip)
  });

  it('should disable save button if nickNames form is invalid',  fakeAsync(() => {
    tick(2000)
    fixture.detectChanges();

    const addNickNameBtn = fixture.debugElement.query(
      By.css('.add-nickname-box button')
    );
    addNickNameBtn.nativeElement.click()
    tick(2000)
    fixture.detectChanges();

    const saveBuildingBtn = fixture.debugElement.query(
      By.css('#save-building-btn')
    );

    expect(saveBuildingBtn.nativeElement.disabled).toBeFalsy();

  }));
});
