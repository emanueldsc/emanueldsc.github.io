import { Component, Input, OnInit, Output } from '@angular/core';
import { LinkMenu, LinkMenuType } from 'src/app/models/LinkMenu.model'
@Component({
  selector: 'edsc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent implements OnInit {

  displaysidebar: boolean = false

  @Input() listLinks: LinkMenu[] = []

  ngOnInit(): void {
    this.listLinks = [
      new LinkMenu('home', 'Home'),
      new LinkMenu('contact', 'Contact', LinkMenuType.BUTTON, () => {

      }),
      new LinkMenu('blog', 'Blog'),
      new LinkMenu('portfolio', 'Portfolio')
    ]
  }

  click(fcbk?: () => void) {
    if (fcbk)
      fcbk()
  }

}
