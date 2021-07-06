import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfigComponent } from './user-config.component';
import { mock, verify, when, instance } from 'ts-mockito';
import { UserModel } from '../../models/user.model';
import { FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { UserConfigService } from '../../services/user-config.service';

describe('UserConfigComponent', () => {
  let component: UserConfigComponent;
  let fixture: ComponentFixture<UserConfigComponent>;
  let mockService: UserConfigService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConfigComponent ],
      imports: [ReactiveFormsModule],
      providers:[UserConfigService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConfigComponent);
    component = fixture.componentInstance;
    component.ValidarMayorEdadComponent();
    fixture.detectChanges();

    mockService = mock(UserConfigService);
    when(mockService.ValidarMayorEdadServicio('1990-10-09')).thenReturn(true);
    when(mockService.ValidarMayorEdadServicio('2020-05-01')).thenReturn(false);
    let mySerivice: UserConfigService = instance(mockService);
    component = new UserConfigComponent(mySerivice);

    
  });

  beforeAll(() => {
    // 1. se crea el mock
    mockService = mock(UserConfigService);

  });
  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('validar datos', () => {
      expect(component.SumarDosNumeros(1,5)).toBe(6);
  });

  test('To equals', () => {

    let dataUser: UserModel = mock(UserModel);
    // when(dataUser.age).thenReturn(50);
    dataUser.age = 80;
    expect(dataUser.age).toBe(80);
    // expect(component.SumarDosNumeros(dataUser.age,5)).toBe(55);
  });


  test('Validar si es mayor de edad', () => {
      component.inputDate.setValue('2020-10-09');
      component.ValidarMayorEdadComponent();
      expect(component.menssage).toBe('Es mayor de edad');
  });

  test('Validar si no es mayor de edad', () => {
    component.inputDate.setValue('2020-05-01');
    component.ValidarMayorEdadComponent();
    expect(component.menssage).toBe('No es mayor de edad');
});


  // test('Es mayor de edad de Servicio', () => {
  //    //2. se le da el comportamiento esperado


  //   // 2.1 Se vuelve a llamar la funcion para que realice la validacion el el dato qeu se da en el punto 2
  //   component.ValidarMayorEdadComponent();

  //   expect(component.userService.ValidarMayorEdadServicio(component.inputDate.value)).toBeFalsy();
  //   expect(component.menssage).toEqual('Es mayor de edad');
  // });



  // test('Validar mayor de edad componente', () => {
  //   component.inputDate.setValue('1993-06-03');
  //   component.ValidarMayorEdadComponent();
  //   expect(component.menssage).toEqual('Es mayor de edad');
  // })

  // test('Valida si recibe vacio', () => {
  //   when(mockService.ValidarMayorEdadServicio('')).thenReturn(false);
  //   let mySerivice: UserConfigService = instance(mockService);
  //   expect(mySerivice.ValidarMayorEdadServicio('')).toBeFalsy();
  // })


  // test('Validar que sea invalido', () => {
  //   component.inputDate.setValue(458255);
  //   expect(component.inputDate.invalid).toBeFalsy();
  //   expect(component.menssage).toBe('Date invalid');
  // });

  // test('Validar que sea valido', () => {
  //   component.inputDate.setValue('1993-06-03');
  //   expect(component.inputDate.valid).toBeTruthy();
  // })

});
