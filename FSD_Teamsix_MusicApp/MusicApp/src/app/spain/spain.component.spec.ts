import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpainComponent } from './spain.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SpainComponent', () => {
  let component: SpainComponent;
  let fixture: ComponentFixture<SpainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpainComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
