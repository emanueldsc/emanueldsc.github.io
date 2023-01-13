import { CommonModule } from '@angular/common';
import { NgModule, SecurityContext } from '@angular/core';
import { ComponentsModule } from '../components/components.module';

import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';

import { ClipboardButtonComponent, ClipboardOptions, MarkdownModule } from "ngx-markdown"
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    BlogComponent,
    ContactComponent,
    PortfolioComponent,
    PostComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ComponentsModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      clipboardOptions: {
        provide: ClipboardOptions,
        useValue: {
          buttonComponent: ClipboardButtonComponent,
        },
      },
    }),
    MarkdownModule.forChild(),
    HttpClientModule
  ],
  exports: [
    HomeComponent,
    BlogComponent,
    ContactComponent,
    PortfolioComponent
  ]
})
export class PagesModule { }
