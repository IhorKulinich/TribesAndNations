import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G3dComponent } from './g3d.component';

describe('G3dComponent', () => {
  let component: G3dComponent;
  let fixture: ComponentFixture<G3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ G3dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(G3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
