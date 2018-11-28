import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedMagazineComponent } from './rated-magazine.component';

describe('RatedMagazineComponent', () => {
  let component: RatedMagazineComponent;
  let fixture: ComponentFixture<RatedMagazineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatedMagazineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatedMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
