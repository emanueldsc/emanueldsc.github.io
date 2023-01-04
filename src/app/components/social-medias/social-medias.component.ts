import { Component, Input, OnInit } from '@angular/core';

export interface Social {
  icon: string,
  color: string,
  href: string
}

@Component({
  selector: 'edsc-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrls: ['./social-medias.component.sass']
})
export class SocialMediasComponent {

  @Input() icons: Partial<Social>[] = []

}
