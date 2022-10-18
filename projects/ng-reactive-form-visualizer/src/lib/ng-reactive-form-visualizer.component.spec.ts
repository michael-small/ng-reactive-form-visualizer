import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgReactiveFormVisualizerComponent } from './ng-reactive-form-visualizer.component';

describe('ReactiveFormVisualizerComponent', () => {
  let component: NgReactiveFormVisualizerComponent;
  let fixture: ComponentFixture<NgReactiveFormVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgReactiveFormVisualizerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgReactiveFormVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
