import { TestBed } from '@angular/core/testing';

import { NgReactiveFormVisualizerService } from './ng-reactive-form-visualizer.service';

describe('ReactiveFormVisualizerService', () => {
  let service: NgReactiveFormVisualizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgReactiveFormVisualizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
