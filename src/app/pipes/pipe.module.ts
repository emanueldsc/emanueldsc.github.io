import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconClassPipe } from './icon-class.pipe';



@NgModule({
  declarations: [
    IconClassPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconClassPipe
  ]
})
export class PipeModule { }
