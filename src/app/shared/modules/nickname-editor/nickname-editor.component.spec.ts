import { ComponentFixture, TestBed } from '@angular/core/testing';
import {NicknameEditorComponent} from "./nickname-editor.component";
import {FormBuilder} from "@angular/forms";
import {ValidationService} from "./validation.service";


describe('NicknameGeneratorComponent', () => {
  let component: NicknameEditorComponent;
  let fixture: ComponentFixture<NicknameEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NicknameEditorComponent ],
      providers: [FormBuilder, ValidationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NicknameEditorComponent);
    component = fixture.componentInstance;
    component.nickNames = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
