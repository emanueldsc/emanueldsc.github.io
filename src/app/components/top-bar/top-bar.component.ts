import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LinkMenu, LinkMenuType } from 'src/app/models/LinkMenu.model'
@Component({
  selector: 'edsc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent {

  displaysidebar: boolean = false

  @Input() listLinks: LinkMenu[] = []

  click(fcbk?: () => void) {
    if (fcbk)
      fcbk()
  }

}
