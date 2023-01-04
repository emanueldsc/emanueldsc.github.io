import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeModule } from '../lib/prime.module';
import { ContactComponent } from './contact/contact.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SocialMediasComponent } from './social-medias/social-medias.component';
import { PipeModule } from '../pipes/pipe.module';

@NgModule({
  declarations: [
    TopBarComponent,
    ContactComponent,
    SocialMediasComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    RouterModule,
    PipeModule
  ],
  exports: [
    TopBarComponent,
    ContactComponent,
    SocialMediasComponent
  ]
})
export class ComponentsModule { }
