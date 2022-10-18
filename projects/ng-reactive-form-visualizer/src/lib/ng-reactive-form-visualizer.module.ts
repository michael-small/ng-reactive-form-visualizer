import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgReactiveFormVisualizerComponent } from './ng-reactive-form-visualizer.component';

@NgModule({
  declarations: [NgReactiveFormVisualizerComponent],
  imports: [BrowserModule],
  exports: [NgReactiveFormVisualizerComponent],
})
export class ReactiveFormVisualizerModule {}
