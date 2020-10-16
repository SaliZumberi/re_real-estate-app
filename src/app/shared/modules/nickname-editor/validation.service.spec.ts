import {TestBed} from '@angular/core/testing';

import {ValidationService} from './validation.service';
import {FormControl} from "@angular/forms";
import {NicknameEditorModule} from "./nickname-editor.module";

describe('ValidationService', () => {
  let service: ValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NicknameEditorModule],
      providers: [ValidationService],
    });
    service = TestBed.inject(ValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('nickNameValidator', () => {
    let nickNameValidator, control;
    beforeEach(() => {
      nickNameValidator = service.nickNameValidator(10);
      control = new FormControl('input');
    });

    it('should return null if input string starts with "a"', async (done: DoneFn) => {
      control.setValue('abdamil');
      expect(await nickNameValidator(control).toPromise()).toBeNull();
      done();
    });

    it('should return validation error if input string does not starts with "a"', async (done: DoneFn) => {
      control.setValue('energydrink');
      expect(await nickNameValidator(control).toPromise()).toEqual({nickNameExists: true});
      done();
    });
  });

  describe('isValidNickname', () => {
    it('should return false if input string starts with "a"', async (done: DoneFn) => {
      expect(await service.isValidNickname('abdamil').toPromise()).toBeTrue();
      done();
    });

    it('should return true if input string does not starts with "a"', async (done: DoneFn) => {
      expect(await service.isValidNickname('energydrink').toPromise()).toBeFalse();
      done();
    });
  });
});
