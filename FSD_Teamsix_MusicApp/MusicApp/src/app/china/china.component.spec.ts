import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinaComponent } from './china.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChinaComponent', () => {
  let component: ChinaComponent;
  let fixture: ComponentFixture<ChinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinaComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
