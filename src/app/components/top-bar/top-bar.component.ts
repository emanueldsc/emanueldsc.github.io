import { Component, OnInit } from '@angular/core';
import { LinkMenu } from 'src/app/models/LinkMenu.model'
@Component({
  selector: 'edsc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent implements OnInit {

  displaysidebar: boolean = false

  listLinks: LinkMenu[] = []

  ngOnInit(): void {
      this.listLinks = [
        new LinkMenu('home', 'Home'),
        new LinkMenu('contact', 'Contact'),
        new LinkMenu('blog', 'Blog'),
        new LinkMenu('portfolio', 'Portfolio')
      ]
      console.log(this.listLinks)
  }

}
