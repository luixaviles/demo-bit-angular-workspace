import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCardActionsComponent } from './demo-card-actions.component';

describe('DemoCardActionsComponent', () => {
  let component: DemoCardActionsComponent;
  let fixture: ComponentFixture<DemoCardActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCardActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
