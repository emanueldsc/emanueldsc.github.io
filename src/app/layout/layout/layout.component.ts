import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {

  @ViewChild('childComponentTemplate') childComponentTemplate: TemplateRef<any> | null = null

  showModal: boolean = false
  template: TemplateRef<any> | null = null;

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.dialogService.dialogStatus.subscribe(dialod => {
      this.template = dialod.template!
      this.showModal = dialod.isShow || false
    })
  }


}
