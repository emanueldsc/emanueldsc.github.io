import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    HomeComponent,
    BlogComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent,
    BlogComponent,
    ContactComponent,
    PortfolioComponent
  ]
})
export class PagesModule { }
