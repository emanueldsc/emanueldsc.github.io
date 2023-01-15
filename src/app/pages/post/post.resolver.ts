import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Md } from 'src/app/models/Md';
import { MetaDataPost } from 'src/app/models/MetaDataPost';
import { BlogService } from 'src/app/services/blog.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Md> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Md> {
    const { slug } = route.params
    const post =  this.helpService.getPostBySlug(slug)
    return post;
  }

  constructor(
    private helpService: BlogService
  ) {}
}
