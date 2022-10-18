import { TestBed } from '@angular/core/testing';

import { ReactiveFormVisualizerService } from './reactive-form-visualizer.service';

describe('ReactiveFormVisualizerService', () => {
  let service: ReactiveFormVisualizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveFormVisualizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
