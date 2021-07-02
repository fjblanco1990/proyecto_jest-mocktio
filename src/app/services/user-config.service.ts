import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {

  constructor() { }


  public ValidarMayorEdad(inputDate: string): boolean {
    const dateNow = new Date;
    const inputDateConvert = new Date(inputDate);
    const dateNowInt = dateNow.getFullYear().valueOf();
    const birthDateInt = inputDateConvert.getFullYear().valueOf();
    const ageUser =  dateNowInt- birthDateInt;
    if (ageUser < 18 ) {
      return false;
    } else {
      return true;
    }
  }


}
