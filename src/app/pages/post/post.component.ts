import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Md } from 'src/app/models/Md';

@Component({
  selector: 'edsc-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  post!: Md

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.post = data['PostResolver']
    })
  }

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }
  
}
