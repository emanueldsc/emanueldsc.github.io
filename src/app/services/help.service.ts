import { Injectable } from '@angular/core';
import MdFiles from '../../assets/mdfiles/mdfiles.json'

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  listPostData() {
    return MdFiles
  }


}
