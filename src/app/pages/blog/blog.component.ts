import { Component, OnInit } from '@angular/core';
import { MetaDataPost } from 'src/app/models/MetaDataPost';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

  posts: MetaDataPost[] = []

  ngOnInit(): void {
    this.blogService.listAllPosts().subscribe(posts => {
      this.posts = posts
    })
  }

  constructor(
    private blogService: BlogService
  ) { }

}


