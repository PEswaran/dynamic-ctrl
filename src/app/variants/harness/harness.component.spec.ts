import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarnessComponent } from './harness.component';

describe('HarnessComponent', () => {
  let component: HarnessComponent;
  let fixture: ComponentFixture<HarnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
