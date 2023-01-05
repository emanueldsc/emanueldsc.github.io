import { ElementRef, Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

export interface DialogShow {
  isShow: boolean,
  template: TemplateRef<any> | null
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  public dialogStatus: Subject<Partial<DialogShow>> = new Subject()
  public showDialog = (template: TemplateRef<any>) => this.dialogStatus.next({ isShow: true, template })
  public hideDialog = () => this.dialogStatus.next({ isShow: false })

}
