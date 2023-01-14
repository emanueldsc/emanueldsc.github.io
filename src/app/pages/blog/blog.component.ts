import { Component, OnInit } from '@angular/core';
import { MetaDataPost } from 'src/app/models/MetaDataPost';
import { HelpService } from 'src/app/services/help.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

  posts: MetaDataPost[] = []

  ngOnInit(): void {
    this.helpService.listAllPosts().subscribe(posts => {
      this.posts = posts
    })
  }

  constructor(
    private helpService: HelpService
  ) { }

}


