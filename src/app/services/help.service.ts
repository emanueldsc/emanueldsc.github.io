import { Injectable } from '@angular/core';
import MdFiles from 'src/assets/mdfiles/mdfiles.json'
import { MetaDataPost } from '../models/MetaDataPost';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  listPostData = (): MetaDataPost[] => MdFiles

  getPostBySlug = (slug: string): MetaDataPost => MdFiles.find(mdfile => mdfile.slug === slug) as MetaDataPost
  
}
