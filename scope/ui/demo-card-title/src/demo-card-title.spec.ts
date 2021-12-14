import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCardTitleComponent } from './demo-card-title.component';

describe('DemoCardTitleComponent', () => {
  let component: DemoCardTitleComponent;
  let fixture: ComponentFixture<DemoCardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCardTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
