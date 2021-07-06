import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanyComponent } from './germany.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GermanyComponent', () => {
  let component: GermanyComponent;
  let fixture: ComponentFixture<GermanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GermanyComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
