import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { LinkMenu, LinkMenuType } from 'src/app/models/LinkMenu.model';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'edsc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  links: LinkMenu[] = []

  @ViewChild('formContact')
  formContact?: TemplateRef<any>;
  showContactDialog: boolean = false

  ngOnInit(): void {
    this.links = [
      new LinkMenu('home', 'Home'),
      new LinkMenu('contact', 'Contact', LinkMenuType.BUTTON, () => {
        this.showContactDialog = true
      }),
      new LinkMenu('blog', 'Blog'),
      new LinkMenu('portfolio', 'Portfolio')
    ]
  }

  constructor(
    private dialogService: DialogService
  ) { }

}
