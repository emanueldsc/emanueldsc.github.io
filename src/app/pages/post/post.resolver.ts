import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MetaDataPost } from 'src/app/models/MetaDataPost';
import { HelpService } from 'src/app/services/help.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<MetaDataPost> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MetaDataPost> {
    const { slug } = route.params
    const post =  this.helpService.getPostBySlug(slug)
    return of(post);
  }

  constructor(
    private helpService: HelpService
  ) {}
}
