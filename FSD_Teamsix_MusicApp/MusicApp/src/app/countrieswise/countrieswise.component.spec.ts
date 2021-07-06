import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrieswiseComponent } from './countrieswise.component';

describe('CountrieswiseComponent', () => {
  let component: CountrieswiseComponent;
  let fixture: ComponentFixture<CountrieswiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrieswiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrieswiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
