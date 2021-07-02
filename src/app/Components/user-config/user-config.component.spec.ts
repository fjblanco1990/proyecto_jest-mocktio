import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfigComponent } from './user-config.component';
import { mock, when } from 'ts-mockito';
import { UserModel } from '../../models/user.model';
import { FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { UserConfigService } from '../../services/user-config.service';

describe('UserConfigComponent', () => {
  let component: UserConfigComponent;
  let fixture: ComponentFixture<UserConfigComponent>;
  let service: UserConfigService;
  let mockService: UserConfigService;
  let mockForm: FormBuilder;
  let mockControl: FormControl;
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
    component.ValidarMayorEdad();
    fixture.detectChanges();
  });

  beforeAll(() => {
    mockService= mock(UserConfigService);
    mockForm = mock(FormBuilder);
    mockControl = mockForm.control('');
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

  test('validacion del input', () => {
    //probar la funcion que devuelva el mensaje
    when(mockControl.invalid).thenReturn(true);
    expect(component.menssage).toBe('Date invalid');
  });

  test('validacion del formulario', () => {
    //probar la funcion que devuelva el mensaje
    when(mockControl.invalid).thenReturn(true);
    expect(mockControl.invalid).toBeTruthy();
  });

  test('Validar mayor de edad', () => {
    // validar el reset del input
    // mockControl.setValue('1993-06-03');
    when(mockControl.value).thenReturn('1993-06-03');
    when(mockControl.invalid).thenReturn(false);
    when(mockService.ValidarMayorEdad(mockControl.value)).thenReturn(false);
    expect(component.menssage).toBe('Es mayor de edad');
  });

  // test('Validar menor de edad', () => {
  //   // validar el reset del input
  //   when(mockForm.value).thenReturn('09-10-1990');
  //   when(mockForm.invalid).thenReturn(false);
  //   when(mockService.ValidarMayorEdad(mockForm.value)).thenReturn(false);
  //   expect(component.menssage).toBe('No es mayor de edad');
  // });


  // let mockedBar:Bar = mock(Bar);
  // when(mockedBar.getServiceName()).thenReturn("bartolo");
  // // Getting instance from mock
  // let foo:Foo = new Foo("pedro",mockedBar);
  // Throwable exception = assertThrows(TypeError.class, () -> properties.get("A"));
  // assertEquals("names must be the same", exception.getMessage());
});
