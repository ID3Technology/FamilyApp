import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtaskPageComponent } from './viewtask-page.component';

describe('ViewtaskPageComponent', () => {
  let component: ViewtaskPageComponent;
  let fixture: ComponentFixture<ViewtaskPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtaskPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
