import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ALL_POSTS, POSTS_PATH } from 'src/environments';
import { Md } from '../models/Md';
import { MetaDataPost } from '../models/MetaDataPost';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  listAllPosts = (): Observable<MetaDataPost[]> => this.httpClient.get<MetaDataPost[]>(ALL_POSTS)

  getPostBySlug = (slug: string): Observable<Md> => this.httpClient.get<Md>(`${POSTS_PATH}/${slug}.json`)

  constructor(
    private httpClient: HttpClient
  ){ }
  
}
