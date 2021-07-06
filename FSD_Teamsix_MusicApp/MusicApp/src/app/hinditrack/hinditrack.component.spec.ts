import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HinditrackComponent } from './hinditrack.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HinditrackComponent', () => {
  let component: HinditrackComponent;
  let fixture: ComponentFixture<HinditrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HinditrackComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HinditrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
