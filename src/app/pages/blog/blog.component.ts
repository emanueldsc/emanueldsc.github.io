import { Component, OnInit } from '@angular/core';
import { HelpService } from 'src/app/services/help.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

  posts: any

  ngOnInit(): void {
    this.posts = this.helpService.listPostData()
  }

  constructor(
    private helpService: HelpService
  ) { }

  normalizeImage = (path: string): string => `assets/${path}`

}


