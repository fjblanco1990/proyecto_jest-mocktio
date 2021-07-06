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


  constructor(public userService: UserConfigService) {
      this.inputDate = new FormControl('', Validators.required);
  }

  ngOnInit(): void {

  }


  public SumarDosNumeros(numero1: number, numero2: number): number {
        return numero1 + numero2;
  }

  public ValidarMayorEdadComponent() {
    if (this.inputDate.invalid) {
      this.menssage = 'Date invalid';
    } else {
      const resultFunction = this.userService.ValidarMayorEdadServicio(this.inputDate.value);
      if(this.userService.ValidarMayorEdadServicio(this.inputDate.value)) {
        this.menssage = 'Es mayor de edad';
      } else {
        this.menssage = 'No es mayor de edad';
      }
      this.inputDate.reset();
    }
  }
}
