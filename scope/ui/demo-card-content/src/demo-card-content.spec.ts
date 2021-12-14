import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCardContentComponent } from './demo-card-content.component';

describe('DemoCardContentComponent', () => {
  let component: DemoCardContentComponent;
  let fixture: ComponentFixture<DemoCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCardContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
