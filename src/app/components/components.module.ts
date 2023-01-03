import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeModule } from '../lib/prime.module';
import { ContactComponent } from './contact/contact.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    TopBarComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    RouterModule
  ],
  exports: [
    TopBarComponent,
    ContactComponent
  ]
})
export class ComponentsModule { }
