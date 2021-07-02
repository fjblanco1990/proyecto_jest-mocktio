import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserConfigService } from '../../services/user-config.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.css'],
  providers: [UserConfigService]
})
export class UserConfigComponent implements OnInit {

  public user!: UserModel;
  public inputDate!: FormControl;
  public menssage: string = '';

  // public get value() : string {
  //   return
  // }
  // 
  constructor(public userService: UserConfigService, private fb: FormBuilder) {
      this.inputDate = fb.control('', Validators.required);
  }

  ngOnInit(): void {

  }


  public SumarDosNumeros(numero1: number, numero2: number): number {
        return numero1 + numero2;
  }

  public ValidarMayorEdad() {
    if (this.inputDate.invalid) {
      this.menssage = 'Date invalid';
    } else {
      if(this.userService.ValidarMayorEdad(this.inputDate.value)) {
        this.menssage = 'Es mayor de edad';
      } else {
        this.menssage = 'No es mayor de edad';
      }
      this.inputDate.reset();
    }
  }
}
