import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSnackBarComponent } from './auth-snack-bar.component';

describe('AuthSnackBarComponent', () => {
  let component: AuthSnackBarComponent;
  let fixture: ComponentFixture<AuthSnackBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSnackBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
