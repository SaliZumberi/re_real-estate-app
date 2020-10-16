import {Injectable} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable, of, timer} from "rxjs";
import {map, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  nickNameValidator = (time = 400) => {
    return (input: FormControl) => {
      return timer(time).pipe(
        switchMap(() => this.isValidNickname(input.value)),
        map((isValidNickname: boolean) => {
          console.log('{isValidNickname: isValidNickname}', isValidNickname)
          return isValidNickname ? null : {nickNameExists: true}
        })
      );
    };
  };

  isValidNickname(nickname: string): Observable<boolean> {
    return of(nickname.charAt(0) == 'a')
  }
}
