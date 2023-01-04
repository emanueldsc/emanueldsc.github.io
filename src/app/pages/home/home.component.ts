import { Component } from '@angular/core';
import { Social } from 'src/app/components/social-medias/social-medias.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  icons: Partial<Social>[] = [
    { icon: 'linkedin', color: 'royalblue', href: 'https://www.linkedin.com/in/emanueldouglas/' },
    { icon: 'github', href: 'https://github.com/emanueldsc' },
    { icon: 'whatsapp', color: 'green', href: 'https://wa.me/5585987469307' }
  ]

}
