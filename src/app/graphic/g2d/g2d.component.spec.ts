import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G2dComponent } from './g2d.component';

describe('G2dComponent', () => {
  let component: G2dComponent;
  let fixture: ComponentFixture<G2dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ G2dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(G2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
