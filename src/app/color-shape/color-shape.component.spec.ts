import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorShapeComponent } from './color-shape.component';

describe('ColorShapeComponent', () => {
  let component: ColorShapeComponent;
  let fixture: ComponentFixture<ColorShapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorShapeComponent]
    });
    fixture = TestBed.createComponent(ColorShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
