import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import { Md } from 'src/app/models/Md';
import { MetaDataPost } from 'src/app/models/MetaDataPost';
import { HelpService } from 'src/app/services/help.service';

@Component({
  selector: 'edsc-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  post!: Md

  mdFile!: string
  featureImage!: string

  normalize = (path: string): string => `../../../assets/${path}`

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.post = data['PostResolver']
    })
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private helpService: HelpService
  ) { }

  onLoad(event: any) {
    console.log(event)
  }

  onError(event: any) {
    console.log(event)
  }


}
