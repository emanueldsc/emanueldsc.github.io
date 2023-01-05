import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

type LabelPanel = { label: string, icon: string, data: string, link?: boolean }

@Component({
  selector: 'edsc-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {

  @Input() visible = false
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>()

  label_location: LabelPanel = { label: 'Location', icon: 'pi pi-map-marker', data: 'Fortaleza-CE, Brasil' }
  label_phone: LabelPanel = { label: 'Phone Number', icon: 'pi pi-phone', data: '55 (85) 98746-9307' }
  label_email: LabelPanel = { label: 'Email', icon: 'pi pi-envelope', data: 'emanuel.douglas.sc@gmail.com' }
  label_whatsapp: LabelPanel = { label: 'Whatsapp', icon: 'pi pi-whatsapp', data: 'wa.me/5585987469307', link:true }

  onVisibleHide() {
    this.visible = false
    this.visibleChange.emit(false)
  }

  submit(f: NgForm) {
    const { value: data } = f

    const subject = `Contact from my page by ${data.name}`
    const myEmail = 'emanuel.douglas.sc@gmail.com'
    const body = `${data.name}\n${data.email}\n${data.message}`
    debugger
    
    const mailSend: string = `mailto:${myEmail} ?subject=${subject} &body=${body}`

    window.location.href = mailSend

    this.onVisibleHide()
    
  }

  constructor(
    private location: Location
  ){}

}
