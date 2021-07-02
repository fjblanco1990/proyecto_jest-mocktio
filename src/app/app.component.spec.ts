import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { instance, reset, mock, verify } from 'ts-mockito';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: []
    }).compileComponents();
  });

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  })

  test("can run a test", () => {
    expect(1).toEqual(1);
  });

  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  //  let mockedX:Foo = mock(AppComponent);

  });



});


