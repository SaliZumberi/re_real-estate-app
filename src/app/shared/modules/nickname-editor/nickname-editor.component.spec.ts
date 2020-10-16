import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {NicknameEditorComponent} from "./nickname-editor.component";
import {FormArray, FormBuilder} from "@angular/forms";
import {ValidationService} from "./validation.service";
import {By} from "@angular/platform-browser";


describe('NicknameEditorComponent', () => {
  let component: NicknameEditorComponent;
  let fixture: ComponentFixture<NicknameEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NicknameEditorComponent],
      providers: [FormBuilder, ValidationService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NicknameEditorComponent);
    component = fixture.componentInstance;
    component.nickNames = [
      {name: 'aba', id: '123'},
      {name: 'aca', id: '456'},
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should add new input field when add button is clicked', () => {
    const inputFieldsInitial = fixture.debugElement.queryAll(
      By.css('input')
    );

    expect(inputFieldsInitial.length).toBe(2);

    const addNickNameBtn = fixture.debugElement.query(
      By.css('.add-nickname-box button')
    );
    addNickNameBtn.nativeElement.click()
    fixture.detectChanges();

    const inputFieldsNew = fixture.debugElement.queryAll(
      By.css('input')
    );
    expect(inputFieldsNew.length).toBe(3);
  });


  it('should show for each nickname one input field', () => {
    const inputFields = fixture.debugElement.queryAll(
      By.css('input')
    );

    expect(inputFields.length).toBe(2);
  });

  it('should remove input field when clicking on close button next to it', () => {
    component.removeNickName(0)
    fixture.detectChanges();

    const inputFieldsNew = fixture.debugElement.queryAll(
      By.css('mat-form-field')
    );
    expect(inputFieldsNew.length).toBe(1);
  });

  it('should show error message if input field has invalid value', fakeAsync(() => {
    expect((component.nickNameForm.get('nickNames') as FormArray).length).toBe(2);

    (component.nickNameForm.get('nickNames') as FormArray).controls[0].get('name').setValue('edy');
    fixture.detectChanges();
    tick(2000)
    fixture.detectChanges();
    const matError = fixture.debugElement.queryAll(
      By.css('mat-error')
    );

    expect(matError.length).toBe(1);
  }));

});
