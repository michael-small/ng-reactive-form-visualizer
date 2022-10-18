import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-ng-reactive-form-visualizer',
  template: ` <pre>{{ formGroup?.value | json }}</pre> `,
  styles: [],
})
export class NgReactiveFormVisualizerComponent implements OnInit {
  @Input() formGroup: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
