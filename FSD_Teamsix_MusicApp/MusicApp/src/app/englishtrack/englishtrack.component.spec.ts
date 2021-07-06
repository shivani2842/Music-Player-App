import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishtrackComponent } from './englishtrack.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EnglishtrackComponent', () => {
  let component: EnglishtrackComponent;
  let fixture: ComponentFixture<EnglishtrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishtrackComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
