import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormVisualizerComponent } from './reactive-form-visualizer.component';

describe('ReactiveFormVisualizerComponent', () => {
  let component: ReactiveFormVisualizerComponent;
  let fixture: ComponentFixture<ReactiveFormVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
