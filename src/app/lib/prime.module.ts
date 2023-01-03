import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'primeng/sidebar';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarModule
  ]
})
export class PrimeModule { }
