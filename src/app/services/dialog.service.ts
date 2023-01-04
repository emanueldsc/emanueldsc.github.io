import { ElementRef, Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

export interface DialogShow {
  isShow: boolean,
  template?: ElementRef<any>
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  public dialogStatus: Subject<DialogShow> = new Subject()

  public showDialog = (template: ElementRef<any>) => this.dialogStatus.next({ isShow: true, template })
  public hideDialog = () => this.dialogStatus.next({ isShow: false })

}
